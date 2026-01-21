import React, { useRef, useMemo, useCallback } from 'react';
import useStore from '../store/useStore';
import { Download, Image as ImageIcon, ArrowLeft, CheckCircle, GraduationCap } from 'lucide-react';
import { toPng } from 'html-to-image'; // 🔥 라이브러리 교체

const DAYS = ['월', '화', '수', '목', '금'];
const START_HOUR = 9;
const SLOT_HEIGHT = 60;

const getBlockColor = (tags = []) => {
  if (tags.includes('전공필수')) return 'bg-blue-100 border-blue-700 text-blue-900';
  if (tags.includes('전공선택')) return 'bg-sky-50 border-sky-400 text-sky-800';
  if (tags.includes('기초필수')) return 'bg-slate-200 border-slate-600 text-slate-900';
  if (tags.includes('기초선택')) return 'bg-gray-50 border-gray-400 text-gray-600';
  return 'bg-indigo-50 border-indigo-400 text-indigo-800';
};

const Step3Save = () => {
  const { schedule, setStep } = useStore();
  const timetableRef = useRef(null);

  const totalCredits = schedule.reduce((sum, c) => sum + c.credit, 0);
  const majorCredits = schedule
    .filter(c => c.tags.some(tag => tag.includes('전공')))
    .reduce((sum, c) => sum + c.credit, 0);

  const dynamicEndHour = useMemo(() => {
    const maxScheduleTime = schedule.reduce((max, course) => {
      const courseEnd = Math.max(...course.times.map(t => t.start + t.duration));
      return Math.max(max, courseEnd);
    }, 18); 
    return Math.min(Math.ceil(maxScheduleTime), 22);
  }, [schedule]);

  const timeLabels = Array.from({ length: dynamicEndHour - START_HOUR + 1 }, (_, i) => START_HOUR + i);

  // 🔥 [수정] html-to-image 사용 (폰트/CORS 문제 해결)
  const exportToImage = useCallback(() => {
    if (timetableRef.current === null) {
      return;
    }

    // 폰트 로딩 시간을 위해 잠시 대기 후 캡처 시도
    toPng(timetableRef.current, { cacheBust: true, backgroundColor: '#ffffff', pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = '나만의_시간표_레시피.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('이미지 저장 실패:', err);
        alert('이미지 저장에 실패했습니다. 잠시 후 다시 시도해주세요.');
      });
  }, [timetableRef]);

  return (
    <div className="h-full w-full bg-slate-50 flex flex-col p-4 md:p-8 animate-in zoom-in-95 duration-500 overflow-y-auto custom-scrollbar">
      
      {/* 헤더 */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
            <button onClick={() => setStep(1)} className="text-slate-500 hover:text-blue-600 transition font-medium flex items-center gap-2">
                <ArrowLeft size={20} /> 수정하기
            </button>
            <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
                <CheckCircle className="text-emerald-500" /> 요리 완성!
            </h2>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
            <button onClick={exportToImage} className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition hover:-translate-y-1">
                <ImageIcon size={20} /> 이미지 저장
            </button>
        </div>
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start pb-20">
        
        {/* 시간표 미리보기 (Capture Target) */}
        <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200" ref={timetableRef}>
            <div className="text-center mb-6 border-b pb-4 border-slate-100">
                <h3 className="text-2xl font-black text-slate-800">2026 봄학기 시간표</h3>
                <div className="flex justify-center items-center gap-3 mt-2 text-slate-500">
                  <span>총 {totalCredits}학점</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-blue-600 font-bold">전공 {majorCredits}학점</span>
                </div>
            </div>
            
            <div className="relative border border-slate-200 rounded-lg overflow-hidden bg-white">
                <div className="flex border-b border-slate-200 bg-slate-50 h-12">
                    <div className="w-14 border-r border-slate-200 bg-slate-100/50"></div>
                    {DAYS.map(day => (<div key={day} className="flex-1 flex items-center justify-center font-bold text-slate-600 text-sm border-r border-slate-200 last:border-0">{day}</div>))}
                </div>
                <div className="flex relative bg-white" style={{ height: `${(dynamicEndHour - START_HOUR + 1) * SLOT_HEIGHT}px` }}>
                    <div className="w-14 flex-shrink-0 border-r border-slate-200 bg-slate-50 text-xs text-slate-400 font-medium select-none">
                        {timeLabels.map(t => (<div key={t} className="border-b border-slate-100 relative text-right pr-3" style={{ height: `${SLOT_HEIGHT}px` }}><span className="absolute top-1 right-2">{t}</span></div>))}
                    </div>
                    {DAYS.map((day, dayIdx) => (
                        <div key={day} className="flex-1 relative border-r border-slate-100 border-dashed last:border-r-0">
                            {timeLabels.map(t => (<div key={t} className="border-b border-slate-50" style={{ height: `${SLOT_HEIGHT}px` }}></div>))}
                            {schedule.map(course => {
                                const timeInfo = course.times.find(t => t.day === dayIdx);
                                if (!timeInfo) return null;
                                const top = (timeInfo.start - START_HOUR) * SLOT_HEIGHT;
                                const height = timeInfo.duration * SLOT_HEIGHT;
                                const colorClass = getBlockColor(course.tags);
                                return (
                                    <div
                                        key={course.id}
                                        className={`absolute inset-x-1 border-l-4 p-1.5 overflow-hidden rounded-r shadow-sm ${colorClass}`}
                                        style={{ top: `${top}px`, height: `${height - 2}px` }}
                                    >
                                        <div className="font-bold text-xs truncate">{course.name}</div>
                                        <div className="text-[10px] truncate opacity-80">{course.prof}</div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 text-center text-xs text-slate-300 font-medium">Generated by 시간표 요리사</div>
        </div>

        {/* 요약 카드 */}
        <div className="w-full lg:w-80 bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2"><Download size={20} className="text-slate-400"/> 수강 목록</h4>
            
            <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
               <div className="flex justify-between items-center mb-2">
                 <span className="text-slate-500 text-sm">총 학점</span>
                 <span className="font-bold text-lg text-slate-800">{totalCredits}</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-slate-500 text-sm flex items-center gap-1"><GraduationCap size={14}/> 전공 학점</span>
                 <span className="font-bold text-lg text-blue-600">{majorCredits}</span>
               </div>
            </div>

            <div className="space-y-3">
                {schedule.map((course, idx) => (
                    <div key={course.id + idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div>
                            <div className="font-bold text-slate-700 text-sm">{course.name}</div>
                            <div className="text-xs text-slate-400">{course.prof} | {course.credit}학점</div>
                        </div>
                        <div className="text-xs font-mono bg-white px-2 py-1 rounded text-slate-500 border border-slate-200">{course.id}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Save;