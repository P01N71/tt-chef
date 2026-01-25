import React, { useRef, useMemo, useCallback, useState } from 'react';
import useStore from '../store/useStore';
import { Image as ImageIcon, ArrowLeft, CheckCircle, GraduationCap, BookOpen, Clock } from 'lucide-react';
import { toPng } from 'html-to-image';

const START_HOUR = 9;
const SLOT_HEIGHT = 60;

const getBlockColor = (type) => {
  if (type === '전공필수') return 'bg-blue-100 border-blue-600 text-blue-900';
  if (type === '전공선택') return 'bg-sky-50 border-sky-300 text-sky-700';
  if (type === '기초필수') return 'bg-slate-200 border-slate-500 text-slate-800';
  if (type === '기초선택') return 'bg-gray-50 border-gray-300 text-gray-600';
  return 'bg-indigo-50 border-indigo-300 text-indigo-800';
};

const Step3Save = () => {
  const { schedule, setStep, getCourseType } = useStore();
  
  const exportRef = useRef(null); 
  const [isSaving, setIsSaving] = useState(false);

  const safeSchedule = Array.isArray(schedule) ? schedule : [];

  // 🔥 [수정 1] 토요일 수업 여부에 따라 요일 배열을 동적으로 생성합니다.
  const currentDays = useMemo(() => {
    const hasSaturday = safeSchedule.some(c => c.times?.some(t => t.day === 5));
    return hasSaturday ? ['월', '화', '수', '목', '금', '토'] : ['월', '화', '수', '목', '금'];
  }, [safeSchedule]);

  const totalCredits = useMemo(() => safeSchedule.reduce((sum, c) => sum + (c.credit || 0), 0), [safeSchedule]);
  
  const majorCredits = useMemo(() => safeSchedule.reduce((sum, course) => {
    const type = getCourseType(course);
    return type.includes('전공') ? sum + (course.credit || 0) : sum;
  }, 0), [safeSchedule, getCourseType]);

  const trackBreakdown = useMemo(() => {
    const stats = {};
    safeSchedule.forEach(c => {
      const type = getCourseType(c);
      if (type.includes('전공')) {
        const trackName = c.selectedTrack || c.categories?.[0] || '기타 전공';
        stats[trackName] = (stats[trackName] || 0) + c.credit;
      }
    });
    return stats;
  }, [safeSchedule, getCourseType]);

  const dynamicEndHour = useMemo(() => {
    const maxScheduleTime = safeSchedule.reduce((max, course) => {
      if (!course.times || !Array.isArray(course.times)) return max;
      const courseEnd = Math.max(...course.times.map(t => t.start + t.duration));
      return Math.max(max, courseEnd);
    }, 18); 
    return Math.min(Math.ceil(maxScheduleTime), 22);
  }, [safeSchedule]);

  const timeLabels = Array.from({ length: dynamicEndHour - START_HOUR + 1 }, (_, i) => START_HOUR + i);

  const renderTimetableOnly = () => (
    <div className="w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="text-center mb-8 border-b pb-6 border-slate-100">
        <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">2026 봄학기 시간표</h3>
        <div className="flex justify-center items-center gap-6 text-slate-500 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Clock size={18} /> <span>총 {totalCredits} 학점</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <GraduationCap size={20} /> <span>전공 {majorCredits} 학점</span>
          </div>
        </div>
      </div>
      
      <div className="relative border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
        <div className="flex border-b border-slate-200 bg-slate-50 h-10">
          <div className="w-12 border-r border-slate-200 bg-slate-100/50"></div>
          {/* 🔥 [수정 2] 고정된 DAYS 대신 동적 currentDays 사용 */}
          {currentDays.map(day => (
            <div key={day} className="flex-1 flex items-center justify-center font-bold text-slate-600 text-sm border-r border-slate-200 last:border-0">{day}</div>
          ))}
        </div>

        <div className="flex relative" style={{ height: `${(dynamicEndHour - START_HOUR + 1) * SLOT_HEIGHT}px` }}>
          <div className="w-12 flex-shrink-0 border-r border-slate-200 bg-slate-50 text-xs text-slate-400 font-medium select-none">
            {timeLabels.map(t => (
              <div key={t} className="border-b border-slate-100 relative text-right pr-2" style={{ height: `${SLOT_HEIGHT}px` }}>
                <span className="absolute top-1 right-2">{t}</span>
              </div>
            ))}
          </div>

          {/* 🔥 [수정 3] 고정된 DAYS 대신 동적 currentDays 사용 */}
          {currentDays.map((day, dayIdx) => (
            <div key={day} className="flex-1 relative border-r border-slate-100 border-dashed last:border-r-0">
              {timeLabels.map(t => (
                <div key={t} className="border-b border-slate-50" style={{ height: `${SLOT_HEIGHT}px` }}></div>
              ))}
              {safeSchedule.map(course => {
                const timeInfo = course.times?.find(t => t.day === dayIdx);
                if (!timeInfo) return null;

                const currentType = getCourseType(course);
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

  const exportToImage = useCallback(async () => {
    if (exportRef.current === null) return;
    setIsSaving(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      const dataUrl = await toPng(exportRef.current, { 
        cacheBust: true,
        backgroundColor: '#f8fafc', 
        pixelRatio: 2,
      });

      const link = document.createElement('a');
      link.download = `2026_봄학기_시간표.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('이미지 저장 실패:', err);
      alert('저장 실패: 브라우저 보안 정책 문제일 수 있습니다. (크롬/사파리 권장)');
    } finally {
      setIsSaving(false);
    }
  }, [exportRef]);

  return (
    <div className="h-full w-full bg-slate-50 flex flex-col p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
      
      {/* 상단바 */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setStep(1)} className="text-slate-500 hover:text-blue-600 transition font-medium flex items-center gap-2">
            <ArrowLeft size={20} /> 수정하기
          </button>
          <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
            <CheckCircle className="text-emerald-500" /> 요리 완성!
          </h2>
        </div>
        <button 
          onClick={exportToImage} 
          disabled={isSaving}
          className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all ${isSaving ? 'bg-slate-300 text-slate-500' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30 hover:-translate-y-1'}`}
        >
          {isSaving ? '저장 중...' : <><ImageIcon size={20} /> 이미지로 저장하기</>}
        </button>
      </div>

      {/* 화면에 보이는 영역 (시간표 + 리포트 둘 다 보임) */}
      <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start pb-20">
        
        {/* 왼쪽: 시간표 */}
        <div className="flex-1 w-full">
           {renderTimetableOnly()}
        </div>

        {/* 오른쪽: 리포트 패널 (저장할 때는 빠짐) */}
        <div className="w-full lg:w-80 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h4 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600"/> 수강 과목 리포트
            </h4>
            
            <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-1">
              {safeSchedule.map((course, idx) => {
                const currentType = getCourseType(course);
                const isMajor = currentType.includes('전공');
                return (
                  <div key={`${course.id}-${idx}`} className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-slate-800 text-sm truncate flex-1 mr-2">{course.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap ${isMajor ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'}`}>
                        {course.credit}학점
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-slate-500">{course.prof}</span>
                      <span className="text-[11px] text-blue-600 font-bold">
                        {course.selectedTrack ? `[${course.selectedTrack}]` : ''} {currentType}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center mb-2 text-slate-500 text-sm">
                <span>총 신청 학점</span>
                <span className="font-bold text-slate-800">{totalCredits}학점</span>
              </div>
              <div className="flex justify-between items-center text-blue-600 font-bold">
                <span className="flex items-center gap-1"><GraduationCap size={16}/> 전공 인정 학점</span>
                <span className="text-xl">{majorCredits}학점</span>
              </div>
              
              <div className="mt-3 flex flex-col items-end gap-1">
                {Object.entries(trackBreakdown).map(([track, credit]) => (
                  credit > 0 && (
                    <div key={track} className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      <span className="font-bold text-slate-700">{track}</span> {credit}학점
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        style={{ 
           position: 'fixed', 
           top: 0, 
           left: '100vw', 
           width: '1280px', 
           height: 'auto',
           zIndex: -50,
           pointerEvents: 'none',
           backgroundColor: '#f8fafc',
           padding: '40px' 
        }}
      >
        <div ref={exportRef}>
           {renderTimetableOnly()}
        </div>
      </div>

    </div>
  );
};

export default Step3Save;