import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, getDoc, doc, increment, query, orderBy, where, writeBatch } from 'firebase/firestore';

const getRandomName = () => {
  const number = Math.floor(1000 + Math.random() * 9000);
  return `달구 #${number}`;
};

const useStore = create(
  persist(
    (set, get) => ({
      currentStep: 0,
      mode: null,
      userNickname: null,
      editingId: null,
      editingRecipeId: null, // [추가] 레시피 수정 모드 추적용 ID

      userProfile: {
        status: '학사',
        semester: '1',
        major: '미정',
        doubleMajor: '미정',
        minor: '미정',
        lastUpdatedAt: null,
        entryYear: '2025'
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

      allCourses: [], 
      gradCourses: [], 
      basket: [],
      schedule: [],
      isOverCredit: false,

      savedTimetables: [], 
      savedRecipes: [], 

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

      fetchGradCourses: async () => {
        const current = get().gradCourses;
        if (current.length > 0) return current;

        try {
          const response = await fetch('/allSubjects.json'); 
          if (!response.ok) throw new Error('졸업 과목 데이터 로딩 실패');
          const data = await response.json();
          set({ gradCourses: data }); 
          return data; 
        } catch (error) {
          console.error("졸업 과목 데이터 로딩 실패:", error);
          set({ gradCourses: [] }); 
          return [];
        }
      },

      addNewCourseToWarehouse: (newCourse) => set((state) => ({
        gradCourses: [newCourse, ...state.gradCourses] 
      })),

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

      transcript: [], 
      gradType: 'general',
      semestersCompleted: 0,
      hasThesis: false,
      warningCount: 0,
      grades: {},
      
      setGradType: (type) => set({ gradType: type }),
      setSemestersCompleted: (num) => set({ semestersCompleted: num }),
      toggleThesis: () => set((state) => ({ hasThesis: !state.hasThesis })),
      setWarningCount: (count) => set({ warningCount: count }),
      setGrade: (courseId, score) => set((state) => ({ grades: { ...state.grades, [courseId]: score } })),
      
      addCustomToTranscript: (course, year, semester) => set((state) => {
        const newId = `taken-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newCourse = {
            ...course,
            id: newId,
            year: year.toString(),
            semester: semester.toString(),
            grade: 'A+',
            selected_track: course.selected_track || '', 
        };
        return { transcript: [...state.transcript, newCourse] };
      }),

      moveTranscriptCourse: (courseId, targetYear, targetSemester) => set((state) => ({
        transcript: state.transcript.map(c => 
            c.id === courseId 
                ? { ...c, year: targetYear.toString(), semester: targetSemester.toString() } 
                : c
        )
      })),

      updateTranscriptTrack: (courseId, newTrack) => set((state) => ({
        transcript: state.transcript.map(c => 
            c.id === courseId ? { ...c, selected_track: newTrack } : c
        )
      })),

      importScheduleToTranscript: async (timetable, targetYear, targetSemester, determineTrackFn) => {
        if (!timetable || !timetable.courses) return;

        const get = useStore.getState;
        const set = useStore.setState;

        let referenceCourses = get().gradCourses;
        if (referenceCourses.length === 0) {
            referenceCourses = await get().fetchGradCourses();
        }
        if (!referenceCourses) referenceCourses = [];

        const newCourses = timetable.courses.map(course => {
            const newId = `imported-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const originalData = referenceCourses.find(ref => 
                ref.name.replace(/\s/g, '') === course.name.replace(/\s/g, '')
            );

            return {
                ...course, 
                ...originalData, 
                id: newId,
                year: targetYear.toString(),       
                semester: targetSemester.toString(), 
                grade: 'A+', 
                category_main: originalData?.category_main || course.category_main || '미분류',
                category_sub: originalData?.category_sub || course.category_sub || '',
                selected_track: determineTrackFn ? determineTrackFn(course) : (course.selectedTrack || ''), 
                restriction_note: originalData?.restriction_note || course.restriction_note || ''
            };
        });

        set({ transcript: [...get().transcript, ...newCourses] });
      },

      updateTranscriptGrade: (courseId, score) => set((state) => ({ transcript: state.transcript.map(c => c.id === courseId ? { ...c, grade: score } : c) })),
      removeFromTranscript: (courseId) => set((state) => ({ transcript: state.transcript.filter(c => c.id !== courseId) })),

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
                // 주의: 사용자가 계속 같은 시간표를 수정할 수 있도록 editingId를 null로 바꾸지 않습니다.
            };
        }

        const newId = Date.now();
        const newTimetable = {
          id: newId,
          title,
          tag,
          courses: [...state.schedule],
          createdAt: new Date().toISOString(),
          firebaseId: null,
          userProfile: { ...state.userProfile } 
        };
        return { 
          savedTimetables: [...state.savedTimetables, newTimetable],
          editingId: newId // 새 시간표 생성 후엔 덮어쓰기 모드로 전환
        };
      }),

      loadRecipe: (recipe) => set((state) => ({
        transcript: [...recipe.courses],
        editingRecipeId: recipe.id, // 진열대에서 불러올 때 해당 레시피의 ID를 저장!
        userProfile: recipe.userProfile || state.userProfile,
        currentStep: 1,
        mode: 'graduation'
      })),

      // ★ [수정됨] 레시피 덮어쓰기 로직 완벽 적용
      saveRecipe: (title, customTracks, degreeName) => set((state) => {
        const recipeProfile = {
            ...state.userProfile,
            ...(customTracks || {})
        };

        // 1. 수정 모드인 경우 (editingRecipeId가 존재) -> 해당 레시피 덮어쓰기
        if (state.editingRecipeId) {
            const updatedList = state.savedRecipes.map(r => 
                r.id === state.editingRecipeId ? {
                    ...r,
                    title: title,
                    courses: [...state.transcript],
                    userProfile: recipeProfile,
                    degreeName: degreeName || "수료 (요건 미달)",
                    updatedAt: new Date().toISOString()
                } : r
            );
            return { 
                savedRecipes: updatedList 
                // 참고: editingRecipeId를 유지하여 여러 번 저장을 눌러도 중복 생성 안 되게 함
            };
        }

        // 2. 새로운 레시피인 경우 -> 신규 생성
        const newId = Date.now();
        const newRecipe = {
          id: newId,
          title: title,
          tag: '졸업요리',
          courses: [...state.transcript],
          createdAt: new Date().toISOString(),
          userProfile: recipeProfile,
          degreeName: degreeName || "수료 (요건 미달)",
          isGraduation: true 
        };
        return { 
          savedRecipes: [...state.savedRecipes, newRecipe],
          editingRecipeId: newId // 새 레시피를 만든 후, 다음 저장부터는 덮어쓰기가 되도록 ID 부여
        };
      }),

      deleteFromShelf: (id) => set((state) => ({ savedTimetables: state.savedTimetables.filter(t => t.id !== id) })),
      deleteRecipe: (id) => set((state) => ({ savedRecipes: state.savedRecipes.filter(r => r.id !== id) })),
      
      updateShelfItem: (id, newTitle, newTag) => set((state) => ({ savedTimetables: state.savedTimetables.map(t => t.id === id ? { ...t, title: newTitle, tag: newTag } : t) })),

      loadScheduleFromShelf: (timetable) => set((state) => ({
        schedule: [...timetable.courses],
        editingId: timetable.id, 
        basket: [...timetable.courses], 
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

      resetAll: () => set({ 
          currentStep: 0, basket: [], schedule: [], transcript: [], grades: {}, 
          editingId: null, editingRecipeId: null // 초기화
      }),

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
            restriction_note: c.restriction_note || '' 
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
        savedTimetables: state.savedTimetables, 
        savedRecipes: state.savedRecipes, 
        transcript: state.transcript, 
        gradCourses: state.gradCourses,
        likedPostIds: state.likedPostIds, 
        userNickname: state.userNickname, 
        userProfile: state.userProfile,
        editingId: state.editingId, // 새로고침(F5) 해도 시간표 덮어쓰기 유지
        editingRecipeId: state.editingRecipeId // 새로고침(F5) 해도 레시피 덮어쓰기 유지
      }),
    }
  )
);

export default useStore;