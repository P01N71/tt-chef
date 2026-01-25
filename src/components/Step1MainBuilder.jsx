import React, { useState, useMemo } from 'react';
import useStore from '../store/useStore';
import { ALL_TAGS } from '../data/courses'; 
import { 
  ArrowLeft, ArrowRight, Trash2, LayoutGrid, Clock, 
  Search, Plus, Check, ShoppingBasket, ChefHat, 
  ChevronDown, Settings2, ArrowRightCircle, XCircle 
} from 'lucide-react';

const START_HOUR = 9;
const SLOT_HEIGHT = 60; 
const MAX_CREDIT = 21;
const MIN_CREDIT = 10;

const animationStyles = `
  @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 60% { transform: scale(1.05); opacity: 1; } 100% { transform: scale(1); opacity: 1; } }
  @keyframes slideIn { 0% { transform: translateX(-20px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
  .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
  .animate-slide-in { animation: slideIn 0.3s ease-out forwards; }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  .custom-scrollbar::-webkit-scrollbar { height: 8px; width: 8px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5f9; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
`;

const formatTimeStr = (times) => {
  if (!Array.isArray(times) || times.length === 0) return '시간 미정';
  const DAY_NAMES = ['월', '화', '수', '목', '금', '토']; 
  return times.map(t => {
    const startH = Math.floor(t.start);
    const startM = Math.round((t.start % 1) * 60);
    const endT = t.start + t.duration;
    const endH = Math.floor(endT);
    const endM = Math.round((endT % 1) * 60);
    const pad = n => n.toString().padStart(2, '0');
    return `${DAY_NAMES[t.day]} ${pad(startH)}:${pad(startM)}~${pad(endH)}:${pad(endM)}`;
  }).join(', ');
};

const getBlockColor = (type) => {
  if (type === '전공필수') return 'bg-blue-100 border-blue-600 text-blue-900';
  if (type === '전공선택') return 'bg-sky-50 border-sky-300 text-sky-700';
  if (type === '기초필수') return 'bg-slate-200 border-slate-500 text-slate-800';
  if (type === '기초선택') return 'bg-gray-50 border-gray-300 text-gray-600';
  return 'bg-indigo-50 border-indigo-300 text-indigo-800';
};

const getBadgeStyle = (tagName) => {
  if (tagName === '전공필수') return 'bg-blue-100 text-blue-700 border-blue-200 font-bold';
  if (tagName === '전공선택') return 'bg-sky-50 text-sky-600 border-sky-200 font-bold';
  if (tagName === '기초필수') return 'bg-slate-100 text-slate-600 border-slate-200 font-bold';
  if (tagName === '기초선택') return 'bg-gray-50 text-gray-600 border-gray-200 font-bold';
  return 'bg-white text-slate-500 border-slate-200'; 
};

// 🔥 [수정] CommonCard: 태그를 제목 아래로 이동 (flex-col 구조 내에서 순서 변경)
const CommonCard = ({ course, rightAction }) => {
  const { getCourseTags } = useStore();
  const tags = getCourseTags(course);

  return (
    <div className="bg-white py-2 px-2.5 lg:py-3 lg:px-3 rounded-lg border border-slate-200 shadow-sm flex-shrink-0 w-[260px] lg:w-full hover:border-blue-300 transition-colors animate-slide-in relative flex items-center justify-between gap-2 lg:gap-3 h-auto">
        <div className="flex-1 min-w-0 mr-1 flex flex-col justify-center">
          {/* 1. 제목 (단독 줄) */}
          <div className="font-bold text-xs lg:text-sm text-slate-800 leading-tight truncate mb-0.5">
            {course.name}
          </div>
          
          {/* 2. 태그 (제목 아래, 줄바꿈) */}
          <div className="flex gap-0.5 flex-wrap mb-0.5">
            {tags.map(tag => (
               <span key={tag} className={`text-[8px] lg:text-[9px] px-1 py-[1px] rounded border whitespace-nowrap leading-none ${getBadgeStyle(tag)}`}>{tag}</span>
            ))}
          </div>

          {/* 3. 교수 | 학점 */}
          <div className="flex items-center gap-1.5 text-[10px] lg:text-xs text-slate-500 leading-none mt-0.5">
            <span className="font-medium truncate max-w-[80px] lg:max-w-[100px]">{course.prof}</span> 
            <span className="text-slate-300">|</span> 
            <span>{course.credit}학점</span>
          </div>

          {/* 4. 시간 */}
          <div className="text-[9px] lg:text-[10px] text-blue-600 font-bold leading-none mt-0.5 truncate">{formatTimeStr(course.times)}</div>
        </div>
        
        <div className="flex flex-col gap-1 flex-shrink-0">
          {rightAction}
        </div>
    </div>
  );
};

const ScheduledBlock = ({ course, dayIndex, removeFromSchedule }) => {
  const { setCourseTrack, getCourseType } = useStore(); 
  const [showMenu, setShowMenu] = useState(false);
  const timeInfo = course.times?.find(t => t.day === dayIndex);
  if (!timeInfo) return null;
  const top = (timeInfo.start - START_HOUR) * SLOT_HEIGHT;
  const height = timeInfo.duration * SLOT_HEIGHT;
  const currentType = getCourseType(course);
  const colorClass = getBlockColor(currentType);
  const isShortBlock = timeInfo.duration <= 0.5;
  const trackOptions = course.trackRelations ? Object.keys(course.trackRelations) : [];
  const hasMultipleTracks = trackOptions.length > 1;
  const isTrackCourse = trackOptions.length > 0;

  return (
    <div className={`absolute inset-x-0.5 lg:inset-x-1 border-l-2 lg:border-l-4 p-1 lg:p-2 overflow-visible shadow-sm group hover:z-30 transition-all rounded-r-md cursor-pointer animate-pop-in ${colorClass}`} style={{ top: `${top}px`, height: `${height - 2}px` }}>
      <div className="font-bold text-[10px] lg:text-[11px] leading-[1.1] mb-0.5 line-clamp-2 break-keep text-slate-900">{course.name}</div>
      {!isShortBlock && <div className="opacity-80 truncate text-[9px] lg:text-[10px] font-medium leading-tight">{course.prof}</div>}
      <div className="mt-0.5 lg:mt-1 relative">
        {isTrackCourse ? (
          hasMultipleTracks ? (
            <button onClick={(e) => { e.stopPropagation(); setShowMenu(!showMenu); }} className="flex items-center w-full max-w-full gap-0.5 bg-white/40 hover:bg-white/70 px-1 py-0.5 rounded text-[8px] lg:text-[9px] font-bold transition-colors border border-transparent hover:border-black/10">
              <span className="truncate flex-1 text-left">[{course.selectedTrack || '선택'}]</span><ChevronDown size={8} className={`flex-shrink-0 transform transition-transform ${showMenu ? 'rotate-180' : ''}`}/>
            </button>
          ) : (
            <span className="opacity-90 text-[8px] lg:text-[9px] font-bold px-0.5 truncate block">[{trackOptions[0]}]</span>
          )
        ) : (
          !isShortBlock && <span className="opacity-70 text-[8px] lg:text-[9px] font-medium italic px-0.5 truncate block">{currentType}</span>
        )}
        {showMenu && hasMultipleTracks && (
          <div className="absolute top-full left-0 mt-1 z-[100] bg-white border border-slate-200 shadow-xl rounded-lg py-1 w-40 lg:w-48 animate-in fade-in zoom-in-95 duration-100">
            <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 border-b border-slate-50 mb-1 flex items-center justify-between"><span>인정 전공 선택</span><Settings2 size={12}/></div>
            {Object.entries(course.trackRelations).map(([trackName, trackType]) => (
              <button key={trackName} onClick={(e) => { e.stopPropagation(); setCourseTrack(course.id, trackName); setShowMenu(false); }} className={`w-full text-left px-3 py-2 text-xs hover:bg-blue-50 transition-colors flex justify-between items-center ${course.selectedTrack === trackName ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600'}`}>
                <span className="truncate mr-2">{trackName}</span><span className={`text-[9px] px-1.5 py-0.5 rounded border flex-shrink-0 ${getBadgeStyle(trackType)}`}>{trackType}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <button onClick={(e) => { e.stopPropagation(); removeFromSchedule(course.id); }} className="absolute top-0.5 right-0.5 opacity-0 group-hover:opacity-100 text-white bg-red-500 hover:bg-red-600 rounded-full w-3.5 h-3.5 lg:w-4 lg:h-4 flex items-center justify-center transition-opacity shadow-sm z-10"><Trash2 size={8} className="lg:hidden" /><Trash2 size={10} className="hidden lg:block" /></button>
    </div>
  );
};

const DroppableTimetable = ({ schedule, removeFromSchedule, timeLabels }) => {
  const hasSaturday = useMemo(() => {
    return schedule.some(c => c.times.some(t => t.day === 5));
  }, [schedule]);

  const currentDays = hasSaturday ? ['월', '화', '수', '목', '금', '토'] : ['월', '화', '수', '목', '금'];

  return (
    <div className="relative rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white">
       <div className="sticky top-0 z-10 flex border-b border-slate-200 bg-slate-50/95 backdrop-blur h-8 lg:h-10">
         <div className="w-8 lg:w-14 border-r border-slate-200 bg-slate-100/50"></div>
         {currentDays.map(day => (<div key={day} className="flex-1 flex items-center justify-center font-bold text-slate-600 border-r border-slate-200 last:border-0 text-xs lg:text-sm">{day}</div>))}
       </div>
       <div className="flex relative bg-white">
         <div className="w-8 lg:w-14 flex-shrink-0 border-r border-slate-200 bg-slate-50 text-[9px] lg:text-[10px] text-slate-400 font-medium select-none">
           {timeLabels.map(t => (<div key={t} className="border-b border-slate-100 relative text-right pr-1 lg:pr-2" style={{ height: `${SLOT_HEIGHT}px` }}><span className="absolute top-1 right-1 lg:right-2">{t}</span></div>))}
         </div>
         {currentDays.map((day, idx) => (
           <div key={day} className="flex-1 relative border-r border-dashed border-slate-200 last:border-r-0">
             {timeLabels.map(t => (<div key={t} className="border-b border-slate-50" style={{ height: `${SLOT_HEIGHT}px` }}></div>))}
             {schedule.map(course => (<ScheduledBlock key={`${course.id}-${idx}`} course={course} dayIndex={idx} removeFromSchedule={removeFromSchedule} />))}
           </div>
         ))}
       </div>
    </div>
  );
};

const Step1MainBuilder = () => {
  const { setStep, allCourses, basket, schedule, toggleBasket, addToSchedule, removeFromSchedule, isOverCredit, toggleOverCredit, getCourseTags } = useStore();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredCourses = allCourses
    .filter(course => course.name.toLowerCase().includes(search.toLowerCase()) || course.prof.includes(search) || course.id.toLowerCase().includes(search.toLowerCase()))
    .filter(course => selectedTags.length === 0 || selectedTags.every(tag => getCourseTags(course).includes(tag)));

  const handleTagClick = (tag) => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  const remainingIngredients = basket.filter(b => !schedule.find(s => s.id === b.id));
  const totalCredits = schedule.reduce((sum, c) => sum + c.credit, 0);

  const handleComplete = () => {
    if (totalCredits < MIN_CREDIT) { alert(`🚫 학점이 부족합니다! (최소 ${MIN_CREDIT}학점)`); return; }
    if (!isOverCredit && totalCredits > MAX_CREDIT) { alert(`🚫 학점이 초과되었습니다! (최대 ${MAX_CREDIT}학점)`); return; }
    setStep(2); 
  };

  const dynamicEndHour = useMemo(() => {
    const maxScheduleTime = schedule.reduce((max, course) => {
      if (!course.times) return max;
      const courseEnd = Math.max(...course.times.map(t => t.start + t.duration));
      return Math.max(max, courseEnd);
    }, 18); 
    return Math.min(Math.ceil(maxScheduleTime), 22);
  }, [schedule]);

  const timeLabels = Array.from({ length: dynamicEndHour - START_HOUR + 1 }, (_, i) => START_HOUR + i);

  return (
    <>
      <style>{animationStyles}</style>
      <div className="h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
        <div className="h-14 lg:h-16 flex-shrink-0 bg-slate-900 text-white flex items-center justify-between px-4 lg:px-6 shadow-md z-30">
          <div className="flex items-center gap-3 lg:gap-4">
            <button onClick={() => setStep(0)} className="text-slate-400 hover:text-white transition"><ArrowLeft size={18} className="lg:w-5 lg:h-5" /></button>
            <h1 className="text-lg lg:text-xl font-bold flex items-center gap-2">
               <ChefHat size={20} className="lg:w-6 lg:h-6 text-blue-500" />
               <span className="hidden md:inline">시간표 <span className="text-blue-400">요리사</span></span>
            </h1>
          </div>
          <div className="flex items-center gap-3 lg:gap-4">
            <div className={`flex items-center gap-1.5 lg:gap-2 px-2.5 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-bold bg-slate-800 border ${totalCredits > MAX_CREDIT ? 'border-red-500 text-red-400' : totalCredits < MIN_CREDIT ? 'border-yellow-500 text-yellow-400' : 'border-slate-700'}`}>
              <Clock size={14} className="text-blue-400"/>
              <span>{totalCredits}/{MAX_CREDIT}</span>
            </div>
            <label className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm text-slate-300 cursor-pointer hover:text-white">
              <input type="checkbox" className="accent-blue-500 w-3.5 h-3.5 lg:w-4 lg:h-4 rounded" checked={isOverCredit} onChange={toggleOverCredit} />
              <span className="hidden sm:inline">초과허용</span>
            </label>
            <button onClick={handleComplete} className="bg-blue-600 hover:bg-blue-500 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg font-bold text-xs lg:text-sm flex items-center gap-1.5 lg:gap-2 shadow-lg">
              저장 <ArrowRight size={14} className="lg:w-4 lg:h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 overflow-y-auto relative custom-scrollbar bg-white p-2 lg:p-4">
             <DroppableTimetable schedule={schedule} removeFromSchedule={removeFromSchedule} timeLabels={timeLabels} />
          </div>

          <div className="w-full lg:w-96 h-[55%] lg:h-auto flex-shrink-0 flex flex-col bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:shadow-xl z-20">
             
             {/* 검색 영역 */}
             <div className="flex flex-col min-h-0 border-b border-slate-200 h-[55%] lg:h-auto lg:flex-1">
               <div className="p-3 bg-white border-b border-slate-100 flex-shrink-0">
                 <div className="relative mb-2">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                   <input type="text" placeholder="과목명, 교수명, 과목코드로 검색..." className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs lg:text-sm focus:ring-1 focus:ring-blue-500 outline-none" value={search} onChange={(e) => setSearch(e.target.value)} />
                 </div>
                 <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-1">
                   {ALL_TAGS.map(tag => (
                     <button key={tag} onClick={() => handleTagClick(tag)} className={`px-2 py-1 text-[10px] lg:text-xs rounded-md border transition-colors whitespace-nowrap flex-shrink-0 ${selectedTags.includes(tag) ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}>{tag}</button>
                   ))}
                 </div>
               </div>
               
               <div className="flex-1 p-2 custom-scrollbar overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto flex flex-row lg:flex-col gap-2">
                 {filteredCourses.map(course => {
                    const isAdded = basket.some(b => b.id === course.id);
                    return (
                      <CommonCard 
                        key={course.id} 
                        course={course}
                        rightAction={
                          <button onClick={() => toggleBasket(course)} className={`w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isAdded ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-400 hover:bg-blue-100'}`}>{isAdded ? <Check size={14} strokeWidth={3} className="lg:w-4 lg:h-4"/> : <Plus size={18} className="lg:w-4 lg:h-4"/>}</button>
                        } 
                      />
                    );
                 })}
               </div>
             </div>

             {/* 배치 대기 영역 */}
             <div className="flex flex-col min-h-0 bg-slate-100/50 h-[45%] lg:h-auto lg:flex-1">
                <div className="p-2 px-3 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm flex-shrink-0">
                  <span className="font-bold text-slate-700 text-xs lg:text-sm flex items-center gap-2"><ShoppingBasket size={14} className="text-blue-600"/> 배치 대기중</span>
                  <span className="bg-blue-100 text-blue-700 text-[10px] lg:text-xs px-2 py-0.5 rounded-full font-bold">{remainingIngredients.length}</span>
                </div>
                <div className="flex-1 p-2 custom-scrollbar overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto flex flex-row lg:flex-col gap-2">
                  {remainingIngredients.length === 0 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2"><LayoutGrid size={24} className="opacity-20"/><p className="text-xs">비어있음</p></div>
                  ) : (
                    remainingIngredients.map(course => (
                      <CommonCard 
                        key={course.id} 
                        course={course} 
                        rightAction={
                          <>
                            <button onClick={() => toggleBasket(course)} className="w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center bg-slate-100 text-slate-400 hover:bg-red-100 hover:text-red-500 transition-all"><XCircle size={14} className="lg:w-4 lg:h-4"/></button>
                            <button onClick={() => addToSchedule(course)} className="w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center bg-slate-100 text-slate-400 hover:bg-blue-100 hover:text-blue-500 transition-all"><ArrowRightCircle size={14} className="lg:w-4 lg:h-4"/></button>
                          </>
                        }
                      />
                    ))
                  )}
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1MainBuilder;