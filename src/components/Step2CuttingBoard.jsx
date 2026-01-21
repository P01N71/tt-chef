import React, { useMemo } from 'react';
import useStore from '../store/useStore';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { ArrowLeft, ArrowRight, Trash2, LayoutGrid, Clock } from 'lucide-react';

// --- 상수 설정 ---
const DAYS = ['월', '화', '수', '목', '금'];
const START_HOUR = 9;
const SLOT_HEIGHT = 60; 
const MAX_CREDIT = 21; // 최대 학점 제한

// ... (DraggableCard, ScheduledBlock 컴포넌트는 기존과 동일하므로 생략하지 않고 전체 코드 드림) ...

const DraggableCard = ({ course }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: course.id,
    data: { course, from: 'basket' },
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 999,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm mb-3 cursor-grab active:cursor-grabbing hover:border-blue-500 hover:shadow-md transition-all select-none group"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-bold text-slate-800 group-hover:text-blue-700">{course.name}</span>
        <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full font-medium">{course.credit}학점</span>
      </div>
      <div className="text-xs text-slate-400 flex items-center gap-1">
         <span className="w-2 h-2 rounded-full bg-slate-300"></span> {course.prof}
      </div>
    </div>
  );
};

const ScheduledBlock = ({ course, dayIndex, removeFromSchedule }) => {
  const timeInfo = course.times.find(t => t.day === dayIndex);
  if (!timeInfo) return null;

  const top = (timeInfo.start - START_HOUR) * SLOT_HEIGHT;
  const height = timeInfo.duration * SLOT_HEIGHT;

  return (
    <div
      className="absolute inset-x-1 bg-blue-100/90 border-l-4 border-blue-600 text-xs p-2 overflow-hidden shadow-sm group hover:z-20 hover:bg-blue-200 hover:shadow-lg transition-all rounded-r-md cursor-pointer"
      style={{ top: `${top}px`, height: `${height - 2}px` }}
    >
      <div className="font-bold text-blue-900 truncate text-sm mb-0.5">{course.name}</div>
      <div className="text-blue-700/80 truncate text-xs">{course.prof}</div>
      <button 
        onClick={(e) => { e.stopPropagation(); removeFromSchedule(course.id); }}
        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-white bg-red-500 hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center transition-opacity shadow-sm"
      >
        <Trash2 size={10} />
      </button>
    </div>
  );
};

// 3. 메인 컴포넌트
const Step2CuttingBoard = () => {
  const { setStep, basket, schedule, addToSchedule, removeFromSchedule, isOverCredit, toggleOverCredit } = useStore();

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.data.current.from === 'basket' && over?.id === 'timetable') {
      addToSchedule(active.data.current.course);
    }
  };

  // 🔥 [추가] 완성하기 버튼 클릭 핸들러 🔥
  const handleComplete = () => {
    const totalCredits = schedule.reduce((sum, c) => sum + c.credit, 0);
    
    // 초과허용 체크 안 되어있는데 학점 넘었으면 경고
    if (!isOverCredit && totalCredits > MAX_CREDIT) {
      alert(`🚫 학점 초과!\n\n현재 ${totalCredits}학점입니다. (최대 ${MAX_CREDIT}학점)\n\n'초과허용'을 체크하거나 과목을 줄여주세요.`);
      return;
    }
    
    setStep(3);
  };

  const remainingIngredients = basket.filter(b => !schedule.find(s => s.id === b.id));
  const totalCredits = schedule.reduce((sum, c) => sum + c.credit, 0);

  // 자동 종료 시간 계산
  const dynamicEndHour = useMemo(() => {
    const maxScheduleTime = schedule.reduce((max, course) => {
      const courseEnd = Math.max(...course.times.map(t => t.start + t.duration));
      return Math.max(max, courseEnd);
    }, 18); 
    return Math.min(Math.ceil(maxScheduleTime), 22);
  }, [schedule]);

  const timeLabels = Array.from({ length: dynamicEndHour - START_HOUR + 1 }, (_, i) => START_HOUR + i);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="h-screen flex flex-col bg-slate-50 text-slate-800 font-sans transition-colors duration-300">
        
        {/* 상단 헤더 */}
        <div className="h-16 flex-shrink-0 bg-slate-900 text-white flex items-center justify-between px-6 shadow-md z-30 border-b border-slate-800">
          <button onClick={() => setStep(1)} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft size={18} /> <span className="hidden sm:inline">재료 담기</span>
          </button>
          
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold shadow-inner ${totalCredits > MAX_CREDIT ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'}`}>
              <Clock size={16} />
              <span>{totalCredits} / {MAX_CREDIT} 학점</span>
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer select-none hover:text-white">
              <input type="checkbox" className="accent-blue-500 w-4 h-4 rounded" checked={isOverCredit} onChange={toggleOverCredit} />
              초과허용
            </label>
          </div>

          <button 
            onClick={handleComplete} // 🔥 함수 연결
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-900/50"
          >
            완성하기 <ArrowRight size={18} />
          </button>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* [좌측] 시간표 영역 */}
          <div className="flex-1 overflow-y-auto relative custom-scrollbar bg-white lg:border-r border-slate-200">
             <div className="min-w-[600px] lg:min-w-0 pb-20"> 
                <DroppableTimetable 
                  schedule={schedule} 
                  removeFromSchedule={removeFromSchedule} 
                  timeLabels={timeLabels} 
                />
             </div>
          </div>

          {/* [우측] 장바구니 영역 */}
          <div className="w-full lg:w-96 flex-shrink-0 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] lg:shadow-[-5px_0_20px_rgba(0,0,0,0.03)] h-1/3 lg:h-auto">
             <div className="p-5 font-bold text-lg border-b border-slate-200 bg-white text-slate-800 flex justify-between items-center">
               <span className="flex items-center gap-2"><LayoutGrid size={20} className="text-blue-600"/> 남은 과목</span>
               <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{remainingIngredients.length}</span>
             </div>
             <div className="flex-1 overflow-y-auto p-4 custom-scrollbar bg-slate-50">
               {remainingIngredients.length === 0 ? (
                 <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                    <LayoutGrid size={40} className="opacity-20"/>
                    <p>모든 재료를 사용했습니다!</p>
                 </div>
               ) : (
                 remainingIngredients.map(course => (
                   <DraggableCard key={course.id} course={course} />
                 ))
               )}
             </div>
          </div>

        </div>
      </div>
    </DndContext>
  );
};

// 시간표 내부 컴포넌트
const DroppableTimetable = ({ schedule, removeFromSchedule, timeLabels }) => {
  const { setNodeRef, isOver } = useDroppable({ id: 'timetable' });
  
  return (
    <div ref={setNodeRef} className={`relative pt-2 px-4 ${isOver ? 'bg-blue-50/50' : 'bg-white'}`}>
       
       {/* 요일 헤더 */}
       <div className="sticky top-0 z-30 flex border-b border-slate-200 bg-slate-50/95 backdrop-blur shadow-sm h-12 rounded-t-lg">
         <div className="w-14 border-r border-slate-200 bg-slate-100/50 rounded-tl-lg"></div>
         {DAYS.map(day => (
           <div key={day} className="flex-1 flex items-center justify-center font-bold text-slate-600 border-r border-slate-200 last:border-0 first:rounded-tl-none last:rounded-tr-lg">
             {day}
           </div>
         ))}
       </div>

       {/* 그리드 바디 */}
       <div className="flex relative border-b border-l border-r border-slate-200 rounded-b-lg bg-white shadow-sm">
         
         {/* 시간축 */}
         <div className="w-14 flex-shrink-0 border-r border-slate-200 bg-slate-50 text-xs text-slate-400 font-medium select-none">
           {timeLabels.map((t, i) => (
             <div key={t} className="border-b border-slate-100 relative text-right pr-3" style={{ height: `${SLOT_HEIGHT}px` }}>
               <span className="absolute top-1 right-2">{t}</span>
             </div>
           ))}
         </div>

         {/* 요일별 컬럼 */}
         {DAYS.map((day, idx) => (
           <div key={day} className="flex-1 relative border-r border-dashed border-slate-200 last:border-r-0">
             {/* 격자선 */}
             {timeLabels.map(t => (
               <div key={t} className="border-b border-slate-100" style={{ height: `${SLOT_HEIGHT}px` }}></div>
             ))}
             {/* 블록 렌더링 */}
             {schedule.map(course => (
               <ScheduledBlock key={`${course.id}-${idx}`} course={course} dayIndex={idx} removeFromSchedule={removeFromSchedule} />
             ))}
           </div>
         ))}
       </div>
    </div>
  );
};

export default Step2CuttingBoard;