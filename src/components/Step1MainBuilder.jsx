import React, { useState, useMemo } from 'react';
import useStore from '../store/useStore';
import { ALL_TAGS } from '../data/courses'; 
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { 
  ArrowLeft, ArrowRight, Trash2, LayoutGrid, Clock, 
  Search, Plus, Check, ShoppingBasket, ChefHat 
} from 'lucide-react';

const DAYS = ['월', '화', '수', '목', '금'];
const START_HOUR = 9;
const SLOT_HEIGHT = 60; 
const MAX_CREDIT = 21;
const MIN_CREDIT = 10;

// 색상 결정 로직 (시간표 블록용)
const getBlockColor = (tags = []) => {
  if (tags.includes('전공필수')) return 'bg-blue-100 border-blue-700 text-blue-900 hover:bg-blue-200';
  if (tags.includes('전공선택')) return 'bg-sky-50 border-sky-400 text-sky-800 hover:bg-sky-100';
  if (tags.includes('기초필수')) return 'bg-slate-200 border-slate-600 text-slate-900 hover:bg-slate-300';
  if (tags.includes('기초선택')) return 'bg-gray-50 border-gray-400 text-gray-600 hover:bg-gray-100';
  return 'bg-indigo-50 border-indigo-400 text-indigo-800';
};

// 🔥 [수정] 검색창 리스트 뱃지 스타일 함수 추가
const getBadgeStyle = (tags = []) => {
  if (tags.includes('전공필수')) return 'bg-blue-50 text-blue-600 border-blue-200';
  if (tags.includes('전공선택')) return 'bg-sky-50 text-sky-600 border-sky-200'; // 얕은 파란색 추가!
  if (tags.includes('기초필수')) return 'bg-slate-100 text-slate-600 border-slate-200';
  return 'bg-gray-50 text-gray-400 border-gray-100';
};

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
      className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm mb-2 cursor-grab active:cursor-grabbing hover:border-blue-500 hover:shadow-md transition-all select-none group flex justify-between items-center"
    >
      <div>
        <div className="font-bold text-slate-800 text-sm group-hover:text-blue-700">{course.name}</div>
        <div className="text-xs text-slate-400 flex items-center gap-1">
           {course.prof} | {course.credit}학점
        </div>
      </div>
      <div className="text-slate-300 group-hover:text-blue-500">
        <LayoutGrid size={16} />
      </div>
    </div>
  );
};

const ScheduledBlock = ({ course, dayIndex, removeFromSchedule }) => {
  const timeInfo = course.times.find(t => t.day === dayIndex);
  if (!timeInfo) return null;

  const top = (timeInfo.start - START_HOUR) * SLOT_HEIGHT;
  const height = timeInfo.duration * SLOT_HEIGHT;
  const colorClass = getBlockColor(course.tags);

  return (
    <div
      className={`absolute inset-x-1 border-l-4 text-xs p-2 overflow-hidden shadow-sm group hover:z-20 hover:shadow-lg transition-all rounded-r-md cursor-pointer ${colorClass}`}
      style={{ top: `${top}px`, height: `${height - 2}px` }}
    >
      <div className="font-bold truncate text-sm mb-0.5">{course.name}</div>
      <div className="opacity-80 truncate text-xs">{course.prof}</div>
      <button 
        onClick={(e) => { e.stopPropagation(); removeFromSchedule(course.id); }}
        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-white bg-red-500 hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center transition-opacity shadow-sm"
      >
        <Trash2 size={10} />
      </button>
    </div>
  );
};

const Step1MainBuilder = () => {
  const { 
    setStep, allCourses, basket, schedule, 
    toggleBasket, addToSchedule, removeFromSchedule, 
    isOverCredit, toggleOverCredit 
  } = useStore();

  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredCourses = allCourses
    .filter(course => 
      course.name.toLowerCase().includes(search.toLowerCase()) || 
      course.prof.includes(search) ||
      course.id.toLowerCase().includes(search.toLowerCase())
    )
    .filter(course => 
      selectedTags.length === 0 || selectedTags.every(tag => course.tags.includes(tag))
    );

  const handleTagClick = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.data.current.from === 'basket' && over?.id === 'timetable') {
      addToSchedule(active.data.current.course);
    }
  };

  const remainingIngredients = basket.filter(b => !schedule.find(s => s.id === b.id));
  const totalCredits = schedule.reduce((sum, c) => sum + c.credit, 0);

  const handleComplete = () => {
    // 중복 과목 체크
    const nameCounts = {};
    for (const course of schedule) {
      if (nameCounts[course.name]) {
        alert(`🚫 중복 수강 불가!\n\n[${course.name}] 과목을 중복해서 신청했습니다.\n같은 과목은 하나의 분반만 들을 수 있습니다.`);
        return;
      }
      nameCounts[course.name] = true;
    }

    if (totalCredits < MIN_CREDIT) {
        alert(`🚫 학점 부족!\n\n최소 ${MIN_CREDIT}학점 이상 신청해야 합니다.\n(현재 ${totalCredits}학점)`);
        return;
    }
    
    if (!isOverCredit && totalCredits > MAX_CREDIT) {
      alert(`🚫 학점 초과!\n\n최대 ${MAX_CREDIT}학점까지만 신청 가능합니다.\n(현재 ${totalCredits}학점)`);
      return;
    }

    setStep(2); 
  };

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
      <div className="h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
        
        {/* 헤더 */}
        <div className="h-16 flex-shrink-0 bg-slate-900 text-white flex items-center justify-between px-6 shadow-md z-30 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <button onClick={() => setStep(0)} className="text-slate-400 hover:text-white transition">
               <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold flex items-center gap-2">
               <ChefHat size={24} className="text-blue-500" />
               <span>시간표 <span className="text-blue-400">요리사</span></span>
            </h1>
          </div>
          
          <div className="flex items-center gap-6">
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold shadow-inner ${totalCredits > MAX_CREDIT ? 'bg-red-500/20 text-red-400 border border-red-500/50' : totalCredits < MIN_CREDIT ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'}`}>
              <Clock size={16} />
              <span>{totalCredits} / {MAX_CREDIT} 학점</span>
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer select-none hover:text-white">
              <input type="checkbox" className="accent-blue-500 w-4 h-4 rounded" checked={isOverCredit} onChange={toggleOverCredit} />
              초과허용
            </label>
          </div>

          <button 
            onClick={handleComplete} 
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-900/50"
          >
            저장하기 <ArrowRight size={18} />
          </button>
        </div>

        {/* 메인 레이아웃 */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto relative custom-scrollbar bg-white border-r border-slate-200">
             <div className="min-w-[600px] lg:min-w-0 pb-20 pt-4 px-4"> 
                <DroppableTimetable schedule={schedule} removeFromSchedule={removeFromSchedule} timeLabels={timeLabels} />
             </div>
          </div>

          <div className="w-96 flex-shrink-0 flex flex-col bg-slate-50 border-l border-slate-200 shadow-xl z-20">
             <div className="flex-1 flex flex-col min-h-0 border-b-4 border-slate-200">
               <div className="p-4 bg-white border-b border-slate-100">
                 <div className="relative mb-3">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                   <input 
                     type="text" 
                     placeholder="과목명, 교수님 검색..." 
                     className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                   />
                 </div>
                 <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto custom-scrollbar">
                   {ALL_TAGS.map(tag => (
                     <button key={tag} onClick={() => handleTagClick(tag)} className={`px-2 py-1 text-xs rounded-md border transition-colors ${selectedTags.includes(tag) ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}>{tag}</button>
                   ))}
                 </div>
               </div>
               <div className="flex-1 overflow-y-auto p-2 bg-slate-50 custom-scrollbar">
                 {filteredCourses.map(course => {
                    const isAdded = basket.some(b => b.id === course.id);
                    return (
                      <div key={course.id} className="bg-white p-3 rounded-lg border border-slate-200 mb-2 flex justify-between items-center group hover:border-blue-300 transition-colors">
                        <div className="flex-1 min-w-0 mr-2">
                          <div className="font-bold text-sm text-slate-700 truncate flex items-center gap-2">
                             {course.name}
                             {/* 🔥 [수정] 뱃지 스타일 적용 */}
                             <span className={`text-[10px] px-1.5 py-0.5 rounded border ${getBadgeStyle(course.tags)}`}>
                               {course.tags[0]}
                             </span>
                          </div>
                          <div className="text-xs text-slate-400 truncate">{course.prof} | {course.credit}학점</div>
                        </div>
                        <button onClick={() => toggleBasket(course)} className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isAdded ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-400 hover:bg-blue-100 hover:text-blue-500'}`}>{isAdded ? <Check size={14} strokeWidth={3}/> : <Plus size={16}/>}</button>
                      </div>
                    );
                 })}
               </div>
             </div>

             <div className="flex-1 flex flex-col min-h-0 bg-slate-100/50">
                <div className="p-3 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm">
                  <span className="font-bold text-slate-700 text-sm flex items-center gap-2"><ShoppingBasket size={16} className="text-blue-600"/> 배치 대기중</span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold">{remainingIngredients.length}</span>
                </div>
                <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
                  {remainingIngredients.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2"><LayoutGrid size={32} className="opacity-20"/><p className="text-xs">위에서 과목을 담아보세요</p></div>
                  ) : (
                    remainingIngredients.map(course => (<DraggableCard key={course.id} course={course} />))
                  )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

const DroppableTimetable = ({ schedule, removeFromSchedule, timeLabels }) => {
  const { setNodeRef, isOver } = useDroppable({ id: 'timetable' });
  return (
    <div ref={setNodeRef} className={`relative ${isOver ? 'bg-blue-50/50' : 'bg-white'}`}>
       <div className="sticky top-0 z-10 flex border-b border-slate-200 bg-slate-50/95 backdrop-blur shadow-sm h-10 rounded-t-lg">
         <div className="w-14 border-r border-slate-200 bg-slate-100/50 rounded-tl-lg"></div>
         {DAYS.map(day => (<div key={day} className="flex-1 flex items-center justify-center font-bold text-slate-600 border-r border-slate-200 last:border-0 text-sm">{day}</div>))}
       </div>
       <div className="flex relative border-b border-l border-r border-slate-200 rounded-b-lg bg-white shadow-sm">
         <div className="w-14 flex-shrink-0 border-r border-slate-200 bg-slate-50 text-xs text-slate-400 font-medium select-none">
           {timeLabels.map(t => (<div key={t} className="border-b border-slate-100 relative text-right pr-3" style={{ height: `${SLOT_HEIGHT}px` }}><span className="absolute top-1 right-2">{t}</span></div>))}
         </div>
         {DAYS.map((day, idx) => (
           <div key={day} className="flex-1 relative border-r border-dashed border-slate-200 last:border-r-0">
             {timeLabels.map(t => (<div key={t} className="border-b border-slate-100" style={{ height: `${SLOT_HEIGHT}px` }}></div>))}
             {schedule.map(course => (<ScheduledBlock key={`${course.id}-${idx}`} course={course} dayIndex={idx} removeFromSchedule={removeFromSchedule} />))}
           </div>
         ))}
       </div>
    </div>
  );
};

export default Step1MainBuilder;