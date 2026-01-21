import { create } from 'zustand';
import { MOCK_COURSES } from '../data/courses';

const useStore = create((set, get) => ({
  step: 0,
  
  // 전체 과목 데이터
  allCourses: MOCK_COURSES,
  
  // 장바구니 & 시간표 데이터
  basket: [],
  schedule: [],
  isOverCredit: false,

  setStep: (newStep) => set({ step: newStep }),
  setAllCourses: (courses) => set({ allCourses: courses }),

  toggleBasket: (course) => set((state) => {
    const isExist = state.basket.find((item) => item.id === course.id);
    if (isExist) {
      return { basket: state.basket.filter((item) => item.id !== course.id) };
    } else {
      return { basket: [...state.basket, course] };
    }
  }),

  // 🔥 [핵심 수정] 충돌 과목명 찾기 기능 추가 🔥
  addToSchedule: (course) => set((state) => {
    // 1. 이미 시간표에 있는 과목이면 무시
    if (state.schedule.find(c => c.id === course.id)) return state;

    // 2. 시간 충돌 검사 (Collision Detection)
    // some() 대신 find()를 써서 충돌한 범인을 잡아냅니다.
    const conflictingCourse = state.schedule.find(existingCourse => {
      // 기존 과목의 시간들(eTime)과 새 과목의 시간들(nTime)을 비교
      return existingCourse.times.some(eTime => 
        course.times.some(nTime => {
          // 요일이 다르면 충돌 아님
          if (eTime.day !== nTime.day) return false;

          // 요일이 같으면 시간 겹침 확인
          const eEnd = eTime.start + eTime.duration;
          const nEnd = nTime.start + nTime.duration;
          
          return (eTime.start < nEnd && eEnd > nTime.start);
        })
      );
    });

    // 3. 충돌 발생 시 알림창에 범인 공개
    if (conflictingCourse) {
      alert(`⚠️ 시간표 충돌!\n\n새로 넣으려는 [${course.name}] 수업이\n기존의 [${conflictingCourse.name}] 수업과 시간이 겹칩니다.\n\n기존 수업을 빼고 다시 시도해주세요.`);
      return state; // 상태 변경 없이 리턴 (추가 안 됨)
    }

    // 4. 문제 없으면 추가
    return { schedule: [...state.schedule, course] };
  }),

  removeFromSchedule: (courseId) => set((state) => ({
    schedule: state.schedule.filter((c) => c.id !== courseId)
  })),

  toggleOverCredit: () => set((state) => ({ isOverCredit: !state.isOverCredit })),
}));

export default useStore;