import { create } from 'zustand';
import { ALL_COURSES } from '../data/courses';

const useStore = create((set, get) => ({
  step: 0,
  setStep: (step) => set({ step }),

  allCourses: ALL_COURSES,
  basket: [],
  schedule: [],
  isOverCredit: false,

  toggleOverCredit: () => set((state) => ({ isOverCredit: !state.isOverCredit })),

  // 1. 현재 과목의 인정구분(Type) 계산
  getCourseType: (course) => {
    // 트랙이 선택되어 있다면 그 트랙의 인정구분 반환
    if (course.selectedTrack && course.trackRelations?.[course.selectedTrack]) {
      return course.trackRelations[course.selectedTrack];
    }
    // 없으면 고정 타입 반환
    return (course.fixedTypes && course.fixedTypes[0]) || course.type || course.defaultType || "일반선택";
  },

  // 🔥 [핵심 수정] 검색용 태그 생성기
  // categories뿐만 아니라 trackRelations에 있는 '모든 트랙명'과 '인정구분'을 다 가져옵니다.
  getCourseTags: (course) => {
    // 1. 기본 카테고리 (예: ["생명과학"])
    const cats = course.categories || (course.category ? [course.category] : []);
    
    // 2. 고정 타입 (예: ["전공선택"])
    const fTypes = course.fixedTypes || (course.type ? [course.type] : []);

    // 3. 🔥 트랙 관계도에서 '학과명'과 '이수구분' 모두 추출
    // 예: trackRelations: { "뇌과학": "전공필수" } -> ["뇌과학", "전공필수"] 추가
    const relationKeys = course.trackRelations ? Object.keys(course.trackRelations) : [];
    const relationValues = course.trackRelations ? Object.values(course.trackRelations) : [];

    // 4. 모든 태그 합치기 (중복 제거)
    const allTags = new Set([
      ...cats,
      ...fTypes,
      ...relationKeys,   // "뇌과학" 같은 트랙명도 태그로 인정!
      ...relationValues  // "전공필수" 같은 트랙별 인정구분도 태그로 인정!
    ]);
    
    return Array.from(allTags);
  },

  toggleBasket: (course) => set((state) => {
    const exists = state.basket.find((c) => c.id === course.id);
    if (exists) {
      return {
        basket: state.basket.filter((c) => c.id !== course.id),
        schedule: state.schedule.filter((c) => c.id !== course.id),
      };
    }
    return { basket: [...state.basket, course] };
  }),

  addToSchedule: (newCourse) => set((state) => {
    if (state.schedule.find((c) => c.id === newCourse.id)) return state;

    const availableTracks = newCourse.trackRelations ? Object.keys(newCourse.trackRelations) : [];
    const defaultTrack = availableTracks.length > 0 ? availableTracks[0] : null;

    const courseWithTrack = { ...newCourse, selectedTrack: defaultTrack };

    const conflictingCourses = state.schedule.filter((existingCourse) => {
      if (existingCourse.name === newCourse.name) return true;
      return existingCourse.times.some((existingTime) =>
        newCourse.times.some((newTime) =>
          existingTime.day === newTime.day &&
          Math.max(existingTime.start, newTime.start) < Math.min(existingTime.start + existingTime.duration, newTime.start + newTime.duration)
        )
      );
    });

    const filteredSchedule = state.schedule.filter(
      (c) => !conflictingCourses.find((conflict) => conflict.id === c.id)
    );

    return { schedule: [...filteredSchedule, courseWithTrack] };
  }),

  setCourseTrack: (courseId, trackName) => set((state) => ({
    schedule: state.schedule.map((c) => 
      c.id === courseId ? { ...c, selectedTrack: trackName } : c
    )
  })),

  removeFromSchedule: (courseId) => set((state) => ({
    schedule: state.schedule.filter((c) => c.id !== courseId),
  })),
}));

export default useStore;