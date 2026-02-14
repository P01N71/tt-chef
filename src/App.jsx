import React, { Suspense, lazy } from 'react';
import useStore from './store/useStore';

import Step0Home from './components/Step0Home';

const Step1MainBuilder = lazy(() => import('./components/Step1MainBuilder'));
const TimeTableShelf = lazy(() => import('./components/TimeTableShelf'));
const GraduationChef = lazy(() => import('./components/GraduationChef'));

const App = () => {
  const { currentStep, mode } = useStore();

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-800 font-sans overflow-hidden">
      <Suspense fallback={
        <div className="flex h-screen w-full items-center justify-center bg-slate-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-slate-400 font-bold text-sm animate-pulse">
              재료 준비 중...
            </p>
          </div>
        </div>
      }>
        {currentStep === 0 && <Step0Home />}

        {currentStep === 1 && (
          <>
            {mode === 'timetable' && <Step1MainBuilder />}
            
            {mode === 'graduation' && <GraduationChef />}

            {mode === 'shelf' && <TimeTableShelf />}
          </>
        )}
      </Suspense>
    </div>
  );
};

export default App;