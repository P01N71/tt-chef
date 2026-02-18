import React, { useState, useMemo, useEffect } from 'react';
import useStore from '../store/useStore';
import { 
  ArrowLeft, ArrowRight, Trash2, LayoutGrid, Clock, 
  Search, Plus, Check, ShoppingBasket, ChefHat, 
  ChevronDown, Settings2, ArrowRightCircle, XCircle,
  FileText, PieChart, BookOpen, Calendar, X, User, MapPin, Phone, Mail, Info, Users, RotateCcw
} from 'lucide-react';

const START_HOUR = 9;
const SLOT_HEIGHT = 60; 
const MAX_CREDIT = 21;
const MIN_CREDIT = 10;

const ALL_TAGS = [
  "기초필수", "기초선택", "전공필수", "전공선택",
  "공학선택", "수학", "물리학", "화학", "생명과학", "뇌과학", "기계공학", "컴퓨터공학",
  "전자공학", "재료공학", "화학공학", "영어", "읽기,쓰기 중점", "비트랙/융합", "인턴십", "연구" 
];

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

// 🔥 [업그레이드] 실라버스 모달
const SyllabusModal = ({ course, onClose }) => {
    if (!course) return null;

    const syllabus = course.syllabus || {
        capacity: "nn",
        classroom: "E7-nnn",
        contact: {
            email: "prof@dgist.ac.kr",
            phone: "053-785-0000",
            office: "E7-nnn",
            office_hours: "None"
        },
        summary: "None",
        methods: ["None"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "None", percent: 100 },
        ],
        schedule: ["TBA"],
        textbook: "None"
    };

    return (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="bg-slate-900 p-6 flex justify-between items-start text-white shrink-0">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded border border-blue-500">{course.id || 'CODE'}</span>
                        </div>
                        <h2 className="text-2xl font-black leading-tight mb-1">{course.name}</h2>
                        <div className="text-slate-400 text-sm font-medium flex items-center gap-3 mt-2">
                            <span className="flex items-center gap-1"><User size={14}/> {course.prof || '교수 미정'}</span>
                            <span className="w-px h-3 bg-slate-700"></span>
                            <span className="flex items-center gap-1"><Clock size={14}/> {course.credit}학점</span>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-300 hover:text-white transition">
                        <X size={20}/>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left bg-slate-50">
                    {/* 1. 교수님 & 강의 정보 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1"><User size={12}/> 교수님 정보</h4>
                            <div className="space-y-2 text-sm text-slate-700">
                                <div className="flex items-center gap-2"><Mail size={14} className="text-blue-500"/> {syllabus.contact?.email || '-'}</div>
                                <div className="flex items-center gap-2"><Phone size={14} className="text-green-500"/> {syllabus.contact?.phone || '-'}</div>
                                <div className="flex items-center gap-2"><MapPin size={14} className="text-red-500"/> {syllabus.contact?.office || '-'}</div>
                                <div className="flex items-start gap-2"><Clock size={14} className="text-purple-500 mt-0.5"/> <span className="flex-1">{syllabus.contact?.office_hours || '-'}</span></div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1"><Info size={12}/> 강의 정보</h4>
                            <div className="space-y-2 text-sm text-slate-700">
                                <div className="flex justify-between border-b border-slate-100 pb-1">
                                    <span className="text-slate-500">수강 정원</span>
                                    <span className="font-bold flex items-center gap-1"><Users size={14}/> {syllabus.capacity}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-1">
                                    <span className="text-slate-500">강의실</span>
                                    <span className="font-bold">{syllabus.classroom}</span>
                                </div>
                                <div className="flex flex-col gap-1 pt-1">
                                    <span className="text-slate-500 text-xs">강의 방법</span>
                                    <div className="flex flex-wrap gap-1">
                                        {syllabus.methods?.map((m, i) => <span key={i} className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">{m}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. 과목 설명 */}
                    <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 mb-3 flex items-center gap-2">
                            <FileText size={18} className="text-blue-500"/> 과목 설명
                        </h3>
                        <div className="text-slate-600 text-sm leading-7 text-justify break-keep">{syllabus.summary}</div>
                    </section>

                    {/* 3. 평가 방법 */}
                    <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 mb-3 flex items-center gap-2">
                            <PieChart size={18} className="text-pink-500"/> 평가 방법 및 비율
                        </h3>
                        <div className="flex gap-2 mb-4 overflow-hidden rounded-full h-4 bg-slate-100">
                            {syllabus.grading?.map((item, idx) => (
                                <div key={idx} className={`h-full ${['bg-pink-400', 'bg-blue-400', 'bg-purple-400', 'bg-emerald-400'][idx % 4]}`} style={{ width: `${item.percent}%` }} title={`${item.name} (${item.percent}%)`}></div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {syllabus.grading?.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-slate-50 px-3 py-2 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${['bg-pink-400', 'bg-blue-400', 'bg-purple-400', 'bg-emerald-400'][idx % 4]}`}></div>
                                        <span className="text-xs font-bold text-slate-600">{item.name}</span>
                                    </div>
                                    <span className="text-sm font-black text-slate-800">{item.percent}%</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. 교수 정책 & 준비물 */}
                    <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 mb-3 flex items-center gap-2">
                            <Check size={18} className="text-orange-500"/> 교수 정책 및 준비물
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <span className="text-xs font-bold text-slate-400 block mb-1">수업 정책</span>
                                <div className="text-sm text-slate-600 bg-orange-50 p-3 rounded-xl border border-orange-100">{syllabus.policies}</div>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-slate-400 block mb-1">준비물</span>
                                <div className="text-sm text-slate-600">{syllabus.materials}</div>
                            </div>
                        </div>
                    </section>

                    {/* 5. 주별 강의 계획 */}
                    <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 mb-3 flex items-center gap-2">
                            <Calendar size={18} className="text-purple-500"/> 주별 강의 계획
                        </h3>
                        <div className="space-y-0 text-sm">
                            {syllabus.schedule?.map((week, idx) => (
                                <div key={idx} className="flex gap-3 py-2 border-b border-slate-50 last:border-0">
                                    <span className="font-bold text-slate-400 w-10 shrink-0">{idx + 1}주</span>
                                    <span className="font-medium text-slate-700">{week.replace(/^\d+주차:\s*/, '')}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 6. 교재 (🔥 수정됨: 배열/문자열 모두 지원) */}
                    <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-black text-slate-800 mb-3 flex items-center gap-2">
                            <BookOpen size={18} className="text-emerald-500"/> 교재 및 참고문헌
                        </h3>
                        <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 text-emerald-800 text-sm font-medium leading-relaxed">
                            {Array.isArray(syllabus.textbook) ? (
                                <ul className="list-disc list-inside space-y-1">
                                    {syllabus.textbook.map((book, idx) => (
                                        <li key={idx} className="break-keep pl-4 -indent-4">{book}</li>
                                    ))}
                                </ul>
                            ) : (
                                syllabus.textbook
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

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

// 태그 전체 표시 (트랙 포함)
const CommonCard = ({ course, rightAction }) => {
  const { getCourseTags } = useStore();
  const tags = getCourseTags(course); // 트랙 포함된 태그들

  return (
    <div className="bg-white py-2 px-2.5 lg:py-3 lg:px-3 rounded-lg border border-slate-200 shadow-sm flex-shrink-0 w-[260px] lg:w-full hover:border-blue-300 transition-colors animate-slide-in relative flex items-center justify-between gap-2 lg:gap-3 h-auto">
        <div className="flex-1 min-w-0 mr-1 flex flex-col justify-center text-left">
          <div className="font-bold text-xs lg:text-sm text-slate-800 leading-tight truncate mb-0.5">
            {course.name}
          </div>
          
          <div className="flex gap-0.5 flex-wrap mb-0.5">
             {tags.map(tag => (
                <span key={tag} className={`text-[8px] lg:text-[9px] px-1 py-[1px] rounded border whitespace-nowrap leading-none ${getBadgeStyle(tag)}`}>
                    {tag}
                </span>
             ))}
          </div>

          <div className="flex items-center gap-1.5 text-[10px] lg:text-xs text-slate-500 leading-none mt-0.5">
            <span className="font-medium truncate max-w-[80px] lg:max-w-[100px]">{course.prof}</span> 
            <span className="text-slate-300">|</span> 
            <span>{course.credit}학점</span>
          </div>
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

export const DroppableTimetable = ({ schedule, removeFromSchedule, timeLabels }) => {
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
  const { setStep, setMode, saveScheduleToShelf, editingId, savedTimetables, allCourses, basket, schedule, toggleBasket, addToSchedule, removeFromSchedule, isOverCredit, toggleOverCredit, getCourseTags, fetchCourses } = useStore();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [saveForm, setSaveForm] = useState({ title: '', tag: '임시' });
  console.log("현재 로드된 강의 데이터 개수:", allCourses.length);

  useEffect(() => {
    fetchCourses();
  }, []);

  // 🔥 [신규] 실라버스 모달용 상태
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState(null);

  // 검색 로직 (태그/트랙 검색 포함)
  const filteredCourses = allCourses
    .filter(course => course.name.toLowerCase().includes(search.toLowerCase()) || course.prof.includes(search) || course.id.toLowerCase().includes(search.toLowerCase()))
    .filter(course => selectedTags.length === 0 || selectedTags.every(tag => getCourseTags(course).includes(tag)));

  const handleTagClick = (tag) => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  const remainingIngredients = basket.filter(b => !schedule.find(s => s.id === b.id));
  const totalCredits = schedule.reduce((sum, c) => sum + c.credit, 0);

  const handleComplete = () => {
    if (totalCredits < MIN_CREDIT) { alert(`🚫 학점이 부족합니다! (최소 ${MIN_CREDIT}학점)`); return; }
    if (!isOverCredit && totalCredits > MAX_CREDIT) { alert(`🚫 학점이 초과되었습니다! (최대 ${MAX_CREDIT}학점)`); return; }
    
    // 다음 단계(Step 2 또는 3)로 넘어갑니다!
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
          <div className="flex items-center gap-1 lg:gap-2 mr-2">
                {/* 1. 전체 초기화 (휴지통) */}
                <button
                    onClick={() => {
                        if (window.confirm('모든 강의를 삭제하고 초기화하시겠습니까? (배치 대기 및 시간표 모두 삭제)')) {
                            // resetAll 대신 setState 사용
                            useStore.setState({ basket: [], schedule: [], editingId: null });
                        }
                    }}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition"
                    title="전체 초기화 (배치 대기 포함)"
                >
                    <Trash2 size={18} />
                </button>

                {/* 2. 시간표만 비우기 (되돌리기) */}
                <button
                    onClick={() => {
                        if (window.confirm('시간표에 배치된 강의를 모두 대기열로 되돌리시겠습니까?')) {
                            useStore.setState({ schedule: [] });
                        }
                    }}
                    className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition"
                    title="시간표 비우기 (대기열로 이동)"
                >
                    <RotateCcw size={18} />
                </button>
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
                             {/* 🔥 [신규] 강의계획서 버튼 (위쪽 배치) */}
                             <button 
                                onClick={() => setSelectedSyllabusCourse(course)}
                                className="w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-blue-500 transition-all"
                                title="강의계획서 보기"
                             >
                                <FileText size={12} className="lg:w-3.5 lg:h-3.5"/>
                             </button>
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

      {/* 🔥 모달 렌더링 */}
      {/* (기존) 실라버스 모달 */}
      <SyllabusModal 
        course={selectedSyllabusCourse} 
        onClose={() => setSelectedSyllabusCourse(null)} 
      />

      {/* ▼ [추가된 부분] 예쁜 디자인의 저장 모달 창 복구 */}
      {isSaveModalOpen && (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative">
            <button onClick={() => setIsSaveModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ChefHat className="text-blue-500" /> 시간표 저장하기
            </h2>
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold text-slate-500 ml-1">제목</label>
                <input 
                  type="text" 
                  value={saveForm.title} 
                  onChange={e => setSaveForm({...saveForm, title: e.target.value})} 
                  className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 font-bold" 
                  placeholder="예: 26년도 봄학기 최종"
                  autoFocus
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 ml-1">학기 태그</label>
                <div className="flex gap-2 mt-1 overflow-x-auto pb-2 hide-scrollbar">
                  {['26년도 봄학기', '26년도 여름학기', '26년도 가을학기', '26년도 겨울학기', '임시'].map(tag => (
                    <button 
                      key={tag} 
                      onClick={() => setSaveForm({...saveForm, tag})} 
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all whitespace-nowrap flex-shrink-0 ${saveForm.tag === tag ? 'bg-blue-500 border-blue-500 text-white shadow-md shadow-blue-500/20' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={handleFinalSave} className="w-full mt-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30">
              <Check size={20}/> 저장하고 보관소로 이동
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Step1MainBuilder;