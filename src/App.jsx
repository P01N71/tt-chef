import React from 'react';
import useStore from './store/useStore';
import Step0Home from './components/Step0Home';
import Step1MainBuilder from './components/Step1MainBuilder';
import Step3Save from './components/Step3Save';
import TimeTableShelf from './components/TimeTableShelf'; // 📢 [중요] 이거 있는지 확인!
import { Analytics } from "@vercel/analytics/react";
import GraduationChef from './components/GraduationChef';

function App() {
  const { currentStep: step, mode } = useStore();

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <main className="w-full h-full relative">
        
        {/* Step 0: 홈 화면 */}
        {step === 0 && <Step0Home />}

        {/* Step 1 이상일 때 */}
        {step > 0 && (
          <>
            {/* A. 시간표 요리사 모드 */}
            {mode === 'timetable' && (
              <>
                {step === 1 && <Step1MainBuilder />}
                {step === 2 && <Step3Save />}
              </>
            )}

            {/* B. 졸업 시뮬레이터 모드 */}
            {mode === 'graduation' && <GraduationChef />}

            {/* C. 🏆 진열대 모드 (이 부분이 없으면 빈 화면 뜸!) */}
            {mode === 'shelf' && <TimeTableShelf />}
          </>
        )}

      </main>
      <Analytics />
    </div>
  );
}

export default App;