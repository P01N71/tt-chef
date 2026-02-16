import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, increment, query, orderBy, where, writeBatch } from 'firebase/firestore';

const getRandomName = () => {
  const number = Math.floor(1000 + Math.random() * 9000);
  return `달구 #${number}`;
};

const useStore = create(
  persist(
    (set, get) => ({
      // --- 공통 상태 ---
      currentStep: 0,
      mode: null,
      userNickname: null,
      editingId: null,

      userProfile: {
        status: '학사',
        semester: '1',
        major: '미정',
        doubleMajor: '미정',
        minor: '미정',
        entryYear: '2021',
        lastUpdatedAt: null
      },

      setStep: (step) => set({ currentStep: step }),
      setMode: (mode) => set({ mode: mode }),
      
      updateUserProfile: async (newProfile) => {
        const updatedProfile = { 
            ...get().userProfile, 
            ...newProfile,
            lastUpdatedAt: new Date().toISOString() 
        };
        set({ userProfile: updatedProfile });

        const { userNickname } = get();
        if (userNickname) {
            try {
                const q = query(collection(db, "timetables"), where("author", "==", userNickname));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const batch = writeBatch(db); 
                    querySnapshot.forEach((doc) => {
                        batch.update(doc.ref, { userProfile: updatedProfile });
                    });
                    await batch.commit(); 
                    get().fetchCommunityPosts();
                }
            } catch (e) {
                console.error("프로필 동기화 실패:", e);
            }
        }
      },

      // --- 시간표 요리사 데이터 ---
      allCourses: [], 
      basket: [],
      schedule: [],
      isOverCredit: false,

      fetchCourses: async () => {
        if (get().allCourses.length > 0) return;
        try {
          const response = await fetch('/t2.json');
          if (!response.ok) throw new Error('데이터 로딩 실패');
          
          const data = await response.json();
          set({ allCourses: data }); 
        } catch (error) {
          console.error("강의 데이터 로딩 실패:", error);
        }
      },

      toggleBasket: (course) => set((state) => {
        const exists = state.basket.find((c) => c.id === course.id);
        if (exists) {
          return { 
            basket: state.basket.filter((c) => c.id !== course.id),
            schedule: state.schedule.filter((c) => c.id !== course.id),
            grades: { ...state.grades, [course.id]: undefined }
          };
        } else {
          return { basket: [...state.basket, course] };
        }
      }),

      addToSchedule: (newCourse) => set((state) => {
        if (state.schedule.some(c => c.id === newCourse.id)) return state;

        let conflictingIds = [];
        const sameNameCourse = state.schedule.find(c => c.name === newCourse.name);
        if (sameNameCourse) conflictingIds.push(sameNameCourse.id);

        if (newCourse.times && newCourse.times.length > 0) {
            state.schedule.forEach(existing => {
                if (conflictingIds.includes(existing.id)) return;
                if (!existing.times) return;

                const hasOverlap = existing.times.some(eTime => 
                    newCourse.times.some(nTime => 
                        eTime.day === nTime.day &&
                        eTime.start < (nTime.start + nTime.duration) &&
                        (eTime.start + eTime.duration) > nTime.start
                    )
                );
                if (hasOverlap) conflictingIds.push(existing.id);
            });
        }
        const newSchedule = state.schedule.filter(c => !conflictingIds.includes(c.id));
        return { schedule: [...newSchedule, newCourse] };
      }),

      removeFromSchedule: (courseId) => set((state) => ({
        schedule: state.schedule.filter((c) => c.id !== courseId)
      })),
      
      setCourseTrack: (courseId, trackName) => set((state) => ({
        schedule: state.schedule.map(c => c.id === courseId ? { ...c, selectedTrack: trackName } : c)
      })),
      
      toggleOverCredit: () => set((state) => ({ isOverCredit: !state.isOverCredit })),

      // --- 졸업 요리사 데이터 ---
      gradCourses: [], 
      transcript: [],
      // [New] 레시피 저장소 (기존 savedTimetables와 분리)
      savedRecipes: [], 
      
      gradType: 'general',
      semestersCompleted: 0,
      hasThesis: false,
      warningCount: 0,
      grades: {},

      fetchGradCourses: async () => {
        if (get().gradCourses.length > 0) return;
        try {
          const res = await fetch('/allSubjects.json'); 
          if (!res.ok) throw new Error('Failed to load graduation subjects');
          const data = await res.json();
          set({ gradCourses: data });
        } catch (err) {
          console.error("졸업 과목 DB 로드 실패:", err);
        }
      },

      setGradType: (type) => set({ gradType: type }),
      setSemestersCompleted: (num) => set({ semestersCompleted: num }),
      toggleThesis: () => set((state) => ({ hasThesis: !state.hasThesis })),
      setWarningCount: (count) => set({ warningCount: count }),
      setGrade: (courseId, score) => set((state) => ({ grades: { ...state.grades, [courseId]: score } })),
      
      importScheduleToTranscript: (timetable, targetYear, targetSemester, trackSelector) => set((state) => {
        const newCourses = timetable.courses.map(c => ({
          ...c,
          id: `imported-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          year: targetYear || timetable.year || '계획',      
          semester: targetSemester || timetable.semester || '미정', 
          grade: 'A+',
          isCustom: true,
          // [New] 트랙 자동 선택 (함수가 전달된 경우)
          selected_track: trackSelector ? trackSelector(c) : (c.selectedTrack || '')
        }));
        return { transcript: [...state.transcript, ...newCourses] };
      }),

      addCustomToTranscript: (course, year, semester) => set((state) => ({
        transcript: [...state.transcript, {
          ...course,
          id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          year: year || '계획',
          semester: semester || '미정',
          grade: 'A+',
          isCustom: true
        }]
      })),

      moveTranscriptCourse: (id, year, semester) => set((state) => ({
        transcript: state.transcript.map(c => c.id === id ? { ...c, year, semester } : c)
      })),

      updateTranscriptGrade: (id, grade) => set((state) => ({
        transcript: state.transcript.map(c => c.id === id ? { ...c, grade: grade } : c)
      })),

      // [New] 트랙 업데이트 함수 (GraduationChef에서 사용)
      updateTranscriptTrack: (id, newTrack) => set((state) => ({
          transcript: state.transcript.map(c => c.id === id ? { ...c, selected_track: newTrack } : c)
      })),

      removeFromTranscript: (id) => set((state) => ({
        transcript: state.transcript.filter(c => c.id !== id)
      })),

      // --- [New] 레시피 관련 액션 ---
      addRecipe: (recipe) => set((state) => ({
          savedRecipes: [recipe, ...state.savedRecipes]
      })),

      deleteRecipe: (id) => set((state) => ({
          savedRecipes: state.savedRecipes.filter(r => r.id !== id)
      })),

      loadRecipe: (recipeData) => set({
          transcript: recipeData.transcript || [],
          userProfile: recipeData.userProfile || get().userProfile,
          // activeSemesters, isEarlyGrad 등은 컴포넌트 로컬 상태에서 복원하거나 필요시 여기에 추가
      }),


      // --- 저장소 (Shelf - Timetable) ---
      savedTimetables: [],
      
      saveScheduleToShelf: (title, tag) => set((state) => {
        if (state.editingId) {
            const updatedList = state.savedTimetables.map(t => 
                t.id === state.editingId ? { 
                    ...t, 
                    title, 
                    tag, 
                    courses: [...state.schedule],
                    userProfile: { ...state.userProfile },
                    updatedAt: new Date().toISOString()
                } : t
            );
            return {
                savedTimetables: updatedList,
                editingId: null,
                schedule: [], 
                basket: [],
                currentStep: 1,
                mode: 'shelf'
            };
        }

        const newTimetable = {
          id: Date.now(),
          title,
          tag,
          courses: [...state.schedule],
          createdAt: new Date().toISOString(),
          firebaseId: null,
          userProfile: { ...state.userProfile } 
        };
        return { 
          savedTimetables: [...state.savedTimetables, newTimetable],
          schedule: [], 
          basket: [],
          currentStep: 1,
          mode: 'shelf'
        };
      }),

      deleteFromShelf: (id) => set((state) => ({ savedTimetables: state.savedTimetables.filter(t => t.id !== id) })),
      updateShelfItem: (id, newTitle, newTag) => set((state) => ({ savedTimetables: state.savedTimetables.map(t => t.id === id ? { ...t, title: newTitle, tag: newTag } : t) })),

      loadScheduleFromShelf: (timetable) => set((state) => ({
        schedule: [...timetable.courses],
        editingId: timetable.id, 
        basket: [], 
        currentStep: 1, 
        mode: 'timetable' 
      })),

      importFromCommunity: (post) => set((state) => {
        const newTimetable = {
            id: Date.now(), 
            title: post.title, 
            tag: post.tag || '기타',
            courses: [...post.courses], 
            createdAt: new Date().toISOString(),
            firebaseId: null, 
            userProfile: { ...state.userProfile } 
        };
        return {
            savedTimetables: [...state.savedTimetables, newTimetable]
        };
      }),

      getCourseTags: (course) => {
        if (!course) return [];
        const tags = new Set(); 
        if (course.type) tags.add(course.type);
        if (course.fixedTypes && course.fixedTypes.length > 0) course.fixedTypes.forEach(t => tags.add(t));
        if (course.trackRelations) Object.keys(course.trackRelations).forEach(t => tags.add(t));
        if (course.categories && Array.isArray(course.categories)) course.categories.forEach(c => tags.add(c));
        return Array.from(tags);
      },

      getCourseType: (course) => {
        if (!course) return '일반';
        if (course.selectedTrack && course.trackRelations) {
          return course.trackRelations[course.selectedTrack] || course.type || '일반';
        }
        if (course.fixedTypes?.length > 0) return course.fixedTypes[0];
        return course.type || '일반';
      },

      resetAll: () => set({ currentStep: 0, basket: [], schedule: [], transcript: [], grades: {}, editingId: null }),

      communityPosts: [],
      isLoadingPosts: false,
      likedPostIds: [],

      fetchCommunityPosts: async () => {
        set({ isLoadingPosts: true });
        try {
          const q = query(collection(db, "timetables"), orderBy("createdAt", "desc"));
          const querySnapshot = await getDocs(q);
          const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          set({ communityPosts: posts, isLoadingPosts: false });
        } catch (e) {
          console.error("Error fetching posts: ", e);
          set({ isLoadingPosts: false });
        }
      },

      uploadPost: async (title, tag, customCourses = null, localTimetableId = null) => {
        const { schedule, userNickname, userProfile } = get();
        const coursesToUse = customCourses || schedule;
        if (!coursesToUse || coursesToUse.length === 0) {
          alert("공유할 시간표 내용이 비어있습니다!");
          return false;
        }

        let finalAuthor = userNickname;
        if (!finalAuthor) {
            let isUnique = false;
            let attempts = 0;
            while (!isUnique && attempts < 5) {
                finalAuthor = getRandomName();
                const q = query(collection(db, "timetables"), where("author", "==", finalAuthor));
                const querySnapshot = await getDocs(q);
                if (querySnapshot.empty) isUnique = true;
                attempts++;
            }
            if (!isUnique) finalAuthor += `-${Date.now().toString().slice(-3)}`;
            set({ userNickname: finalAuthor });
        }

        try {
          const minimalCourses = coursesToUse.map(c => ({
            id: c.id,
            name: c.name,
            prof: c.prof || '',
            credit: c.credit,
            type: c.type || null, 
            fixedTypes: c.fixedTypes || [], 
            trackRelations: c.trackRelations || {}, 
            categories: c.categories || [],
            times: c.times || [],
            selectedTrack: c.selectedTrack || null,
          }));

          const docRef = await addDoc(collection(db, "timetables"), {
            title,
            author: finalAuthor, 
            tag,
            courses: minimalCourses,
            likes: 0,
            createdAt: new Date().toISOString(),
            userProfile: { ...userProfile } 
          });
          
          if (localTimetableId) {
             set(state => ({
               savedTimetables: state.savedTimetables.map(t => 
                   t.id === localTimetableId ? { ...t, firebaseId: docRef.id } : t
               )
             }));
          }

          await get().fetchCommunityPosts();
          return true;
        } catch (e) {
          console.error("Error adding document: ", e);
          alert("업로드 실패: " + e.message);
          return false;
        }
      },

      deletePost: async (firebaseId, localTimetableId = null) => {
        try {
            const docRef = doc(db, "timetables", firebaseId);
            await deleteDoc(docRef);

            if (localTimetableId) {
                set(state => ({ savedTimetables: state.savedTimetables.map(t => t.id === localTimetableId ? { ...t, firebaseId: null } : t) }));
            }
            await get().fetchCommunityPosts();
            return true;
        } catch (e) {
            console.error("Delete failed", e);
            alert("삭제 중 오류가 발생했습니다.");
            return false;
        }
      },

      toggleLike: async (postId) => {
        const { likedPostIds } = get();
        const isLiked = likedPostIds.includes(postId);
        set(state => ({
            likedPostIds: isLiked ? state.likedPostIds.filter(id => id !== postId) : [...state.likedPostIds, postId],
            communityPosts: state.communityPosts.map(p => p.id === postId ? { ...p, likes: p.likes + (isLiked ? -1 : 1) } : p)
        }));
        try {
            const postRef = doc(db, "timetables", postId);
            await updateDoc(postRef, { likes: increment(isLiked ? -1 : 1) });
        } catch (e) { console.error("Like failed", e); }
      }
    }),
    {
      name: 'dgist-chef-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        // [중요] 저장할 상태 목록에 savedRecipes 추가
        currentStep: state.currentStep, 
        mode: state.mode, 
        basket: state.basket, 
        schedule: state.schedule, 
        isOverCredit: state.isOverCredit,
        savedTimetables: state.savedTimetables, 
        savedRecipes: state.savedRecipes, // 여기에 추가됨!
        transcript: state.transcript, 
        gradType: state.gradType, 
        semestersCompleted: state.semestersCompleted,
        hasThesis: state.hasThesis, 
        warningCount: state.warningCount, 
        grades: state.grades,
        likedPostIds: state.likedPostIds, 
        userNickname: state.userNickname, 
        userProfile: state.userProfile,
        editingId: state.editingId 
      }),
    }
  )
);

export default useStore;