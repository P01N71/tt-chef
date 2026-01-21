// src/components/Step0Home.jsx
import React from 'react';
import useStore from '../store/useStore';
import { ChefHat, ArrowRight, MousePointerClick } from 'lucide-react';

const Step0Home = () => {
  const setStep = useStore((state) => state.setStep);

  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-4 animate-in fade-in duration-700 bg-slate-50 dark:bg-slate-900">
      
      {/* 로고 영역 */}
      <div className="relative mb-8 group cursor-default">
        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
        <div className="relative bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl border-4 border-slate-100 dark:border-slate-700 transform group-hover:scale-105 transition-transform duration-300">
          <ChefHat size={100} className="text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      {/* 타이틀 */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-800 dark:text-white mb-6">
        DGIST <span className="text-blue-600 dark:text-blue-400">TT Chef</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
        2026 Spring ver. <br className="hidden md:block" />
        <span className="font-bold text-slate-700 dark:text-slate-200">시간표 요리사</span>와 함께 당신만의 맛있는 시간표를 계획하세요.
      </p>

      {/* 시작 버튼 */}
      <button
        onClick={() => setStep(1)}
        className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-xl shadow-xl shadow-blue-600/20 transition-all hover:translate-y-[-2px] hover:shadow-2xl flex items-center gap-3 overflow-hidden"
      >
        <span className="relative z-10">요리 시작하기</span>
        <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
        
        {/* 버튼 내부 광택 효과 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </button>

      {/* 하단 뱃지 */}
      <div className="mt-16 flex items-center gap-2 text-sm text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
        <MousePointerClick size={16} />
        <span>Drag & Drop Supported</span>
      </div>
    </div>
  );
};

export default Step0Home;