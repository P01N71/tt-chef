import React from 'react';
import useStore from '../store/useStore';
import { ChefHat, ArrowRight, MousePointerClick, GraduationCap, LayoutGrid } from 'lucide-react';

// 이미지 불러오기 (안전장치 포함)
let dalguLogo = null;
try {
  dalguLogo = new URL('../assets/dalgu.jpg', import.meta.url).href;
} catch (e) {
  console.error("이미지 로딩 실패:", e);
}

const Step0Home = () => {
  const { setStep, setMode } = useStore((state) => ({
    setStep: state.setStep,
    setMode: state.setMode || (() => {}),
  }));

  const handleModeSelect = (mode) => {
    setMode(mode);
    setStep(1);
  };

  return (
    // 🔥 [수정 포인트 1] 화면 전체 높이(h-full)를 잡고, 여기서 스크롤(overflow-y-auto)을 처리합니다.
    <div className="h-full w-full bg-slate-50 dark:bg-slate-900 overflow-y-auto custom-scrollbar">
      
      {/* 🔥 [수정 포인트 2] 내부 컨테이너에 min-h-full을 줘서, 
          내용이 적을 땐 화면 꽉 차게 중앙 정렬(justify-center),
          내용이 많을 땐 자연스럽게 늘어나서 스크롤되도록 함 (py-12 pb-32로 여백 확보) 
      */}
      <div className="min-h-full flex flex-col items-center justify-center text-center p-4 py-12 pb-32 animate-in fade-in duration-700">
        
        {/* --- 메인 로고 영역 --- */}
        <div className="relative mb-6 md:mb-10 group cursor-default">
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
          
          <div className="relative bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-2xl border-4 border-slate-100 dark:border-slate-700 transform group-hover:scale-105 transition-transform duration-300 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center overflow-hidden">
            {dalguLogo ? (
              <img 
                src={dalguLogo} 
                alt="DGIST Dalgu Chef" 
                className="w-full h-full object-contain drop-shadow-md"
                onError={(e) => { e.target.style.display='none'; }}
              />
            ) : (
              <ChefHat size={80} className="text-blue-600 dark:text-blue-400" />
            )}
          </div>
        </div>

        <h1 className="text-3xl md:text-6xl font-black tracking-tight text-slate-800 dark:text-white mb-2">
          DGIST <span className="text-blue-600 dark:text-blue-400">TT Chef</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 md:mb-12 font-medium text-sm md:text-base">
          2026 Spring ver. (fix.0127)
        </p>

        {/* --- 선택 영역 (Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl mb-12 px-2 md:px-4 items-stretch">
          
          {/* 1. 시간표 요리사 (컨테이너) */}
          <div className="relative flex flex-col items-center p-6 md:p-10 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-200 group h-full">
            
            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
              <ChefHat size={32} className="text-blue-600 dark:text-blue-400 md:w-10 md:h-10" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2">시간표 요리사</h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1 flex items-center justify-center break-keep">
              이번 학기 맛있는 시간표를<br className="hidden md:block"/> 직접 요리해 보세요.
            </p>
            
            <div className="mt-auto flex flex-col items-center gap-2 w-full">
              <button
                onClick={() => handleModeSelect('timetable')} 
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all text-base md:text-lg py-2"
              >
                <span>요리 시작하기</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => handleModeSelect('shelf')}
                className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 py-1.5 px-3 rounded-full hover:bg-slate-50"
              >
                ( <LayoutGrid size={12}/> 진열대 보기 )
              </button>
            </div>
          </div>

          {/* 2. 졸업 요리사 (버튼) */}
          <button
            onClick={() => handleModeSelect('graduation')}
            className="group relative flex flex-col items-center p-6 md:p-10 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-3xl hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden h-full w-full"
          >
            <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
              <GraduationCap size={32} className="text-purple-600 dark:text-purple-400 md:w-10 md:h-10" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2">졸업 요리사</h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1 flex items-center justify-center break-keep">
              졸업까지 남은 재료들을<br className="hidden md:block"/> 꼼꼼하게 점검하세요.
            </p>
            
            <div className="mt-auto flex flex-col items-center gap-1 w-full">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold group-hover:gap-3 transition-all text-base md:text-lg py-2">
                <span>요리 시작하기</span>
                <ArrowRight size={18} />
              </div>
              {/* 높이 맞춤용 투명 박스 */}
              <div className="py-1.5 px-3 opacity-0 pointer-events-none text-xs">
                ( 높이 맞춤용 )
              </div>
            </div>
          </button>

        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
          <MousePointerClick size={16} />
          <span>Easy Clicker</span>
        </div>
      </div>
    </div>
  );
};

export default Step0Home;