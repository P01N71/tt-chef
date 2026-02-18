import React from 'react';
import useStore from './store/useStore';
import Step0Home from './components/Step0Home';
import Step1MainBuilder from './components/Step1MainBuilder';
import Step3Save from './components/Step3Save';
import TimeTableShelf from './components/TimeTableShelf';
import GraduationChef from './components/GraduationChef';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const { currentStep: step, mode } = useStore();

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <main className="w-full h-full relative">
        
        {step === 0 && <Step0Home />}

        {step > 0 && (
          <>
            {mode === 'timetable' && (
              <>
                {step === 1 && <Step1MainBuilder />}
                {step === 2 && <Step3Save />}
              </>
            )}

            {mode === 'graduation' && <GraduationChef />}
            
            {/* 🔥 shelf 모드 하나에서 진열대와 커뮤니티를 모두 보여줍니다 */}
            {mode === 'shelf' && <TimeTableShelf />}
          </>
        )}

      </main>
      <Analytics />
    </div>
  );
}

export default App;