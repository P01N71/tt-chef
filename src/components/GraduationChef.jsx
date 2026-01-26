import React from 'react';
import useStore from '../store/useStore';
import { ArrowLeft, Construction, ChefHat } from 'lucide-react';

const GraduationChef = () => {
  const { setStep } = useStore();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-50 text-center p-6">
      
      {/* 아이콘 영역 */}
      <div className="mb-6 relative">
        <div className="absolute -inset-4 bg-purple-100 rounded-full blur-xl"></div>
        <div className="relative bg-white p-6 rounded-3xl shadow-xl border-4 border-slate-100">
          <Construction size={64} className="text-purple-500" />
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full border-2 border-slate-100">
             <ChefHat size={24} className="text-slate-400" />
          </div>
        </div>
      </div>

      {/* 텍스트 영역 */}
      <h1 className="text-3xl font-black text-slate-800 mb-3">
        졸업 요리사는 <span className="text-purple-600">공사 중</span> 🚧
      </h1>
      <p className="text-slate-500 mb-10 max-w-md leading-relaxed">
        더 맛있는 졸업 시뮬레이션을 위해 주방을 리모델링하고 있어요.<br/>
        조금만 기다려주세요!
      </p>

      {/* 홈으로 돌아가기 버튼 */}
      <button 
        onClick={() => setStep(0)}
        className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 hover:-translate-y-1 transition-all shadow-lg shadow-slate-200"
      >
        <ArrowLeft size={20} />
        홈으로 돌아가기
      </button>

    </div>
  );
};

export default GraduationChef;