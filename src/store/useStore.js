import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ALL_COURSES as initialCoursesData } from '../data/courses';

const useStore = create(
  persist(
    (set, get) => ({
      // [1] 시스템 상태
      currentStep: 0,
      mode: null,
      setStep: (step) => set({ currentStep: step }),
      setMode: (mode) => set({ mode: mode }),

      // [2] 시간표 데이터
      allCourses: initialCoursesData || [],
      basket: [],
      schedule: [],
      isOverCredit: false,

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
        const newCourseCode = newCourse.id.split('-')[0];
        const newSchedule = state.schedule.filter(existingCourse => {
          const existingCode = existingCourse.id.split('-')[0];
          if (existingCode === newCourseCode) return false; 
          
          const hasOverlap = existingCourse.times.some(existTime => 
            newCourse.times.some(newTime => {
              if (existTime.day !== newTime.day) return false;
              const existEnd = existTime.start + existTime.duration;
              const newEnd = newTime.start + newTime.duration;
              return (newTime.start < existEnd) && (existTime.start < newEnd);
            })
          );
          if (hasOverlap) return false;
          return true;
        });
        return { schedule: [...newSchedule, newCourse] };
      }),

      removeFromSchedule: (courseId) => set((state) => ({
        schedule: state.schedule.filter((c) => c.id !== courseId)
      })),

      setCourseTrack: (courseId, trackName) => set((state) => ({
        schedule: state.schedule.map(c => 
          c.id === courseId ? { ...c, selectedTrack: trackName } : c
        )
      })),

      toggleOverCredit: () => set((state) => ({ isOverCredit: !state.isOverCredit })),

      // [3] 졸업 시뮬레이터
      transcript: [], gradType: 'general', semestersCompleted: 0, hasThesis: false, warningCount: 0, grades: {}, 

      setGradType: (type) => set({ gradType: type }),
      setSemestersCompleted: (num) => set({ semestersCompleted: num }),
      toggleThesis: () => set((state) => ({ hasThesis: !state.hasThesis })),
      setWarningCount: (count) => set({ warningCount: count }),
      setGrade: (courseId, score) => set((state) => ({ grades: { ...state.grades, [courseId]: score } })),

      importScheduleToTranscript: () => set((state) => {
        const newCourses = state.schedule.map(course => ({ ...course, grade: undefined }));
        const existingIds = new Set(state.transcript.map(c => c.id));
        const filteredNewCourses = newCourses.filter(c => !existingIds.has(c.id));
        return { transcript: [...state.transcript, ...filteredNewCourses] };
      }),

      updateTranscriptGrade: (courseId, score) => set((state) => ({
        transcript: state.transcript.map(c => c.id === courseId ? { ...c, grade: score } : c)
      })),

      removeFromTranscript: (courseId) => set((state) => ({
        transcript: state.transcript.filter(c => c.id !== courseId)
      })),

      // [4] 진열대 (Shelf)
      savedTimetables: [],

      saveScheduleToShelf: (title, tag) => set((state) => {
        const newEntry = {
          id: Date.now(),
          title: title || '제목 없음',
          tag: tag || '26봄',
          courses: [...state.schedule],
          createdAt: new Date().toISOString(),
        };

        return {
          savedTimetables: [newEntry, ...state.savedTimetables],
          schedule: [],
          basket: [],
          // 🔥 [수정됨] 0 -> 1 (그래야 Step0Home이 아닌 TimeTableShelf가 보임)
          currentStep: 1, 
          mode: 'shelf' 
        };
      }),

      deleteFromShelf: (id) => set((state) => ({
        savedTimetables: state.savedTimetables.filter(t => t.id !== id)
      })),

      // 🔥 [NEW] 3. 진열대 아이템 수정 (제목/태그)
      updateShelfItem: (id, newTitle, newTag) => set((state) => ({
        savedTimetables: state.savedTimetables.map(t => 
          t.id === id ? { ...t, title: newTitle, tag: newTag } : t
        )
      })),

      // [5] Helpers & Reset
      getCourseTags: (course) => {
        if (!course) return [];
        const tags = [];
        if (course.fixedTypes?.length > 0) tags.push(...course.fixedTypes);
        else if (course.type) tags.push(course.type);
        if (course.trackRelations && course.selectedTrack) {
           const trackType = course.trackRelations[course.selectedTrack];
           if (trackType && !tags.includes(trackType)) tags.push(trackType);
        }
        return tags;
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
        currentStep: 0, mode: null, basket: [], schedule: [], isOverCredit: false, uploadedTranscript: null,
        transcript: [], gradType: 'general', semestersCompleted: 0, hasThesis: false, warningCount: 0, grades: {},
      }),
    }),
    {
      name: 'dgist-chef-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        currentStep: state.currentStep, mode: state.mode, basket: state.basket, schedule: state.schedule, isOverCredit: state.isOverCredit,
        transcript: state.transcript, gradType: state.gradType, semestersCompleted: state.semestersCompleted, hasThesis: state.hasThesis, warningCount: state.warningCount, grades: state.grades,
        savedTimetables: state.savedTimetables 
      }),
    }
  )
);

export default useStore;