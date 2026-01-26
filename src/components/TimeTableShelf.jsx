import React, { useState, useRef, useMemo, useEffect } from 'react';
import useStore from '../store/useStore';
import { ArrowLeft, Trash2, Calendar, Download, X, LayoutGrid, Clock, GraduationCap, FolderOpen, Pencil, Check, RotateCcw } from 'lucide-react';
import { toPng } from 'html-to-image';

const START_HOUR = 9;
const SLOT_HEIGHT = 60;

// 색상 유틸리티
const getBlockColor = (type) => {
  if (type === '전공필수') return 'bg-blue-100 border-blue-600 text-blue-900';
  if (type === '전공선택') return 'bg-sky-50 border-sky-300 text-sky-700';
  if (type === '기초필수') return 'bg-slate-200 border-slate-500 text-slate-800';
  if (type === '기초선택') return 'bg-gray-50 border-gray-300 text-gray-600';
  return 'bg-indigo-50 border-indigo-300 text-indigo-800';
};

const TimeTableShelf = () => {
  const { setStep, setMode, savedTimetables = [], deleteFromShelf, updateShelfItem, getCourseType } = useStore();
  const [selectedTimetable, setSelectedTimetable] = useState(null);
  
  // 수정 모드 상태
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editTag, setEditTag] = useState('');

  const hiddenCaptureRef = useRef(null);

  // 모달 열릴 때 초기값 세팅
  useEffect(() => {
    if (selectedTimetable) {
      setEditTitle(selectedTimetable.title);
      setEditTag(selectedTimetable.tag);
      setIsEditing(false);
    }
  }, [selectedTimetable]);

  // 태그별 그룹화
  const shelvedTimetables = useMemo(() => {
    const groups = {};
    savedTimetables.forEach(item => {
      const tag = item.tag || '기타';
      if (!groups[tag]) groups[tag] = [];
      groups[tag].push(item);
    });
    return groups;
  }, [savedTimetables]);

  const handleDownloadImage = async () => {
    if (!hiddenCaptureRef.current) return;
    try {
      const dataUrl = await toPng(hiddenCaptureRef.current, { 
        cacheBust: true, 
        backgroundColor: '#ffffff', 
        pixelRatio: 2, 
      });
      const link = document.createElement('a');
      link.download = `${selectedTimetable.title}_${selectedTimetable.tag}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("이미지 저장 실패:", err);
      alert("이미지 저장 중 오류가 발생했습니다.");
    }
  };

  const handleUpdate = () => {
    if (!editTitle.trim()) {
        alert("제목을 입력해주세요!");
        return;
    }
    updateShelfItem(selectedTimetable.id, editTitle, editTag);
    setSelectedTimetable(prev => ({ ...prev, title: editTitle, tag: editTag }));
    setIsEditing(false);
  };

  // --- [내부 컴포넌트] 시간표 디자인 ---
  const ShelfTimetableViewer = ({ timetableData }) => {
    const courses = timetableData.courses || [];
    const safeCourses = Array.isArray(courses) ? courses : [];
    
    // 통계 계산
    const totalCredits = safeCourses.reduce((sum, c) => sum + (c.credit || 0), 0);
    const majorCredits = safeCourses.reduce((sum, c) => {
        const type = getCourseType ? getCourseType(c) : (c.type || '일반');
        return type.includes('전공') ? sum + (c.credit || 0) : sum;
    }, 0);

    const currentDays = useMemo(() => {
        const hasSaturday = safeCourses.some(c => c.times?.some(t => t.day === 5));
        return hasSaturday ? ['월', '화', '수', '목', '금', '토'] : ['월', '화', '수', '목', '금'];
    }, [safeCourses]);

    const dynamicEndHour = useMemo(() => {
        const maxScheduleTime = safeCourses.reduce((max, course) => {
          if (!course.times) return max;
          const courseEnd = Math.max(...course.times.map(t => t.start + t.duration));
          return Math.max(max, courseEnd);
        }, 18); 
        return Math.min(Math.ceil(maxScheduleTime), 22);
    }, [safeCourses]);

    const timeLabels = Array.from({ length: dynamicEndHour - START_HOUR + 1 }, (_, i) => START_HOUR + i);

    return (
        <div className="w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="text-center mb-8 border-b pb-6 border-slate-100">
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                  {timetableData.title}
                </h3>
                <div className="flex justify-center items-center gap-4 text-slate-500 text-sm md:text-base">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded border border-slate-200 whitespace-nowrap">
                      {timetableData.tag}
                    </span>
                    <div className="w-px h-3 bg-slate-300"></div>
                    <div className="flex items-center gap-2 whitespace-nowrap">
                        <Clock size={18} /> <span>총 {totalCredits} 학점</span>
                    </div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap">
                        <GraduationCap size={20} /> <span>전공 {majorCredits} 학점</span>
                    </div>
                </div>
            </div>

            <div className="relative border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm select-none">
                <div className="flex border-b border-slate-200 bg-slate-50 h-10">
                    <div className="w-12 border-r border-slate-200 bg-slate-100/50"></div>
                    {currentDays.map(day => (
                        <div key={day} className="flex-1 flex items-center justify-center font-bold text-slate-600 text-sm border-r border-slate-200 last:border-0">{day}</div>
                    ))}
                </div>
                <div className="flex relative" style={{ height: `${(dynamicEndHour - START_HOUR + 1) * SLOT_HEIGHT}px` }}>
                    <div className="w-12 flex-shrink-0 border-r border-slate-200 bg-slate-50 text-xs text-slate-400 font-medium text-right pr-2">
                        {timeLabels.map(t => (
                            <div key={t} className="border-b border-slate-100 relative" style={{ height: `${SLOT_HEIGHT}px` }}>
                                {/* 🔥 [수정] 숫자를 선 아래로 내림 (top-2) */}
                                <span className="absolute top-2 right-3">{t}</span>
                            </div>
                        ))}
                    </div>
                    {currentDays.map((day, dayIdx) => (
                        <div key={day} className="flex-1 relative border-r border-slate-100 border-dashed last:border-r-0">
                            {timeLabels.map(t => (
                                <div key={t} className="border-b border-slate-50" style={{ height: `${SLOT_HEIGHT}px` }}></div>
                            ))}
                            {safeCourses.map(course => {
                                const timeInfo = course.times?.find(t => t.day === dayIdx);
                                if (!timeInfo) return null;
                                const currentType = getCourseType ? getCourseType(course) : (course.type || '일반');
                                const colorClass = getBlockColor(currentType);
                                return (
                                    <div
                                        key={`${course.id}-${dayIdx}`}
                                        className={`absolute inset-x-1 border-l-4 p-1.5 overflow-hidden rounded-r shadow-sm ${colorClass}`}
                                        style={{ 
                                            top: `${(timeInfo.start - START_HOUR) * SLOT_HEIGHT}px`, 
                                            height: `${timeInfo.duration * SLOT_HEIGHT - 2}px` 
                                        }}
                                    >
                                        <div className="font-bold text-[11px] leading-tight mb-0.5">{course.name}</div>
                                        <div className="text-[9px] opacity-90">{course.prof}</div>
                                        <div className="text-[8px] mt-0.5 font-bold opacity-70">
                                            {course.selectedTrack ? `[${course.selectedTrack}]` : currentType}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-6 text-center text-[10px] text-slate-300 font-bold tracking-widest uppercase">
                Generated by 시간표 요리사
            </p>
        </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      
      {/* 🔥 [수정] Step 1과 통일된 다크 헤더 */}
      <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 lg:px-6 flex-shrink-0 z-10 text-white">
        <div className="flex items-center gap-4">
          <button onClick={() => { setMode(null); setStep(0); }} className="p-2 hover:bg-slate-800 rounded-full transition text-slate-300 hover:text-white">
            <ArrowLeft size={20}/>
          </button>
          <h1 className="text-lg font-bold flex items-center gap-2">
            <LayoutGrid className="text-emerald-400" size={20}/>
            시간표 진열대
          </h1>
        </div>
        {/* 우측 여백용 (균형) */}
        <div className="w-10"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50">
        {(!savedTimetables || savedTimetables.length === 0) ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
            <LayoutGrid size={64} className="opacity-20"/>
            <p className="text-lg font-medium">아직 진열된 시간표가 없습니다.</p>
            <button 
              onClick={() => { setMode('timetable'); setStep(1); }}
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/30"
            >
              새 시간표 요리하러 가기
            </button>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-12">
            {Object.entries(shelvedTimetables).map(([tag, items]) => (
              <div key={tag} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-xl font-black text-slate-700 mb-4 flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm shadow-sm">{tag}</span>
                  <span className="text-slate-400 text-sm font-medium">({items.length})</span>
                </h3>

                <div className="relative">
                  <div className="flex flex-wrap gap-6 px-4 relative z-10">
                    {items.map(item => (
                      <div 
                        key={item.id}
                        onClick={() => setSelectedTimetable(item)}
                        className="w-56 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-slate-200 group flex flex-col overflow-hidden"
                      >
                        <div className="h-24 bg-slate-100 p-4 flex flex-col justify-between group-hover:bg-blue-50 transition-colors">
                            <div className="flex justify-between items-start">
                                <FolderOpen className="text-slate-300 group-hover:text-blue-400" size={24}/>
                                <span className="text-[10px] text-slate-400 font-mono">{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>

                        <div className="p-4 bg-white flex-1 flex flex-col">
                            <h4 className="font-bold text-slate-800 text-lg leading-tight line-clamp-2 mb-2 group-hover:text-blue-600">
                                {item.title}
                            </h4>
                            
                            {/* 🔥 [수정] 카드 정보: 과목수 삭제 -> 전공 학점 표시 */}
                            <div className="mt-auto pt-3 border-t border-slate-100 flex flex-col gap-1 text-xs">
                                <div className="flex justify-between items-center text-slate-500">
                                    <span className="flex items-center gap-1"><Clock size={12}/> 총 학점</span>
                                    <span className="font-bold">
                                        {item.courses?.reduce((sum, c) => sum + (c.credit || 0), 0)}학점
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-blue-600">
                                    <span className="flex items-center gap-1"><GraduationCap size={12}/> 전공</span>
                                    <span className="font-bold">
                                        {item.courses?.reduce((sum, c) => {
                                            const type = getCourseType ? getCourseType(c) : (c.type || '일반');
                                            return type.includes('전공') ? sum + (c.credit || 0) : sum;
                                        }, 0)}학점
                                    </span>
                                </div>
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 w-full h-4 bg-slate-300 rounded-full shadow-inner transform translate-y-2 z-0"></div>
                  <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-transparent to-slate-200/50 transform translate-y-full z-0"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedTimetable && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            
            <div className="p-4 px-6 border-b border-slate-100 flex justify-between items-center bg-white flex-shrink-0">
              
              {isEditing ? (
                <div className="flex items-center gap-2 flex-1 mr-4">
                  <div className="flex flex-col gap-2 w-full max-w-sm">
                    <input 
                      type="text" 
                      value={editTitle} 
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="border border-blue-300 rounded-lg px-3 py-1.5 text-lg font-bold outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="제목 입력"
                    />
                    <div className="flex gap-2">
                      {['26년도 봄학기', '26년도 여름학기', '26년도 가을학기', '26년도 겨울학기', '임시'].map(tag => (
                        <button
                          key={tag}
                          onClick={() => setEditTag(tag)}
                          className={`px-2 py-1 text-xs rounded-md border ${editTag === tag ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'}`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button onClick={handleUpdate} className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"><Check size={20}/></button>
                  <button onClick={() => setIsEditing(false)} className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200"><RotateCcw size={20}/></button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-bold mb-0.5">
                            진열대 No. {selectedTimetable.id.toString().slice(-4)}
                            <span className="ml-2 inline-block px-1.5 py-0.5 bg-slate-100 rounded text-slate-500 font-normal border border-slate-200">
                                {selectedTimetable.tag}
                            </span>
                        </span>
                        <div className="flex items-center gap-2 group">
                            <h2 className="text-xl font-bold text-slate-800">{selectedTimetable.title}</h2>
                            <button 
                                onClick={() => setIsEditing(true)} 
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-blue-500"
                            >
                                <Pencil size={16}/>
                            </button>
                        </div>
                    </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => {
                    if(window.confirm('정말 이 시간표를 진열대에서 삭제할까요?')) {
                      deleteFromShelf(selectedTimetable.id);
                      setSelectedTimetable(null);
                    }
                  }}
                  className="p-2 text-red-400 hover:bg-red-50 rounded-full transition"
                  title="삭제"
                >
                  <Trash2 size={20}/>
                </button>
                <button 
                  onClick={() => setSelectedTimetable(null)}
                  className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition"
                  title="닫기"
                >
                  <X size={24}/>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-50 p-6 custom-scrollbar">
              <div className="max-w-3xl mx-auto">
                 <ShelfTimetableViewer timetableData={isEditing ? { ...selectedTimetable, title: editTitle, tag: editTag } : selectedTimetable} />
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-white flex justify-center flex-shrink-0">
              <button 
                onClick={handleDownloadImage}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                <Download size={20}/>
                이미지로 저장하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Capture View */}
      {selectedTimetable && (
        <div 
            style={{ 
                position: 'fixed', top: 0, left: '-9999px', width: '1280px', zIndex: -100, padding: '60px', backgroundColor: '#f8fafc'
            }}
        >
            <div ref={hiddenCaptureRef}>
                <ShelfTimetableViewer timetableData={selectedTimetable} />
            </div>
        </div>
      )}
    </div>
  );
};

export default TimeTableShelf;