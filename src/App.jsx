import React from 'react';
import useStore from './store/useStore';
import Step0Home from './components/Step0Home';
import Step1MainBuilder from './components/Step1MainBuilder'; // 통합된 컴포넌트
import Step3Save from './components/Step3Save';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { step } = useStore();

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-slate-50 text-slate-900 font-sans">
      <main className="w-full h-full relative">
        {step === 0 && <Step0Home />}
        {step === 1 && <Step1MainBuilder />} {/* 여기가 통합됨 */}
        {step === 2 && <Step3Save />} {/* 번호는 2지만 파일은 Step3Save 사용 (저장화면) */}
      </main>
      <Analytics />
    </div>
  );
}

export default App;