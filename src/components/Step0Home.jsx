import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import { ChefHat, ArrowRight, GraduationCap, LayoutGrid, UserCircle2, X, PenTool, Archive } from 'lucide-react';

let dalguLogo = null;
try { dalguLogo = new URL('../assets/dalgu.jpg', import.meta.url).href; } catch (e) {}

const STANDARD_MAJORS = [
  "물리학", "화학", "생명과학", "뇌과학", 
  "기계공학", "화학공학", "전자공학", "컴퓨터공학", "재료공학", "반도체공학과"
];

const MajorSelector = ({ label, value, onChange, allowCustom = false }) => {
    const [isCustomMode, setIsCustomMode] = useState(false);

    useEffect(() => {
        if (value && value !== "미정" && value !== "없음" && !STANDARD_MAJORS.includes(value)) {
            setIsCustomMode(true);
        } else {
            setIsCustomMode(false);
        }
    }, [value]);

    let dropdownValue = value;
    if (isCustomMode) {
        dropdownValue = "자율트랙";
    } else if (!value || value === "미정" || value === "없음") {
        dropdownValue = "미정";
    }

    return (
      <div className="flex flex-col gap-2 transition-opacity duration-200">
        <label className="text-xs font-bold text-slate-500 ml-1">{label}</label>
        <select 
            value={dropdownValue} 
            onChange={(e) => {
                const val = e.target.value;
                if (val === "자율트랙") {
                    setIsCustomMode(true);
                    onChange(""); 
                } else {
                    setIsCustomMode(false);
                    onChange(val);
                }
            }}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 text-sm font-bold"
        >
            <option value="미정">없음 (미정)</option>
            {STANDARD_MAJORS.map(m => (
                <option key={m} value={m}>{m}</option>
            ))}
            {allowCustom && <option value="자율트랙">자율트랙 (직접 입력)</option>}
        </select>
        
        {allowCustom && isCustomMode && (
            <div className="relative animate-in fade-in slide-in-from-top-1 duration-200">
                <PenTool size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"/>
                <input 
                    type="text"
                    value={value === "미정" ? "" : value} 
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="트랙명 직접 입력"
                    className="w-full bg-blue-50 border border-blue-200 rounded-xl pl-9 pr-3 py-2.5 outline-none focus:border-blue-500 text-sm font-bold text-blue-700 placeholder:text-blue-300"
                    autoFocus
                />
            </div>
        )}
      </div>
    );
};

const Step0Home = () => {
  const { setStep, setMode, userProfile, updateUserProfile } = useStore();
  
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const [localProfile, setLocalProfile] = useState(userProfile || {
    status: '학사', semester: '1', major: '미정', doubleMajor: '미정', minor: '미정'
  });

  const handleModeSelect = (mode) => {
    setMode(mode);
    setStep(1);
  };

  const saveProfile = () => {
    const finalProfile = {
        ...localProfile,
        major: localProfile.major || '미정',
        doubleMajor: localProfile.doubleMajor || '미정',
        minor: localProfile.minor || '미정'
    };

    updateUserProfile(finalProfile);
    setIsProfileOpen(false);
    alert("프로필이 저장되었습니다.");
  };

  // [수정됨] disabled 락을 걸지 않고 값만 상호 배타적으로 지워줌
  const handleDoubleMajorChange = (val) => {
    setLocalProfile(prev => ({
        ...prev,
        doubleMajor: val,
        minor: val !== '미정' ? '미정' : prev.minor
    }));
  };

  const handleMinorChange = (val) => {
    setLocalProfile(prev => ({
        ...prev,
        minor: val,
        doubleMajor: val !== '미정' ? '미정' : prev.doubleMajor
    }));
  };

  return (
    <div className="h-full w-full bg-blue-50/30 dark:bg-slate-900 overflow-y-auto custom-scrollbar relative">
      
      <button 
        onClick={() => { setLocalProfile(userProfile); setIsProfileOpen(true); }}
        className="absolute top-6 right-6 flex items-center gap-2 bg-white/80 backdrop-blur-sm dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300 font-bold text-sm border border-slate-200 dark:border-slate-700 z-10"
      >
        <UserCircle2 size={20} className="text-slate-500"/>
        <span>내 프로필 설정</span>
      </button>

      <div className="min-h-full flex flex-col items-center justify-center text-center p-4 py-12 pb-32 animate-in fade-in duration-700">
        
        <div className="relative mb-6 md:mb-10 group cursor-default">
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
          <div className="relative bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-2xl border-4 border-white dark:border-slate-700 transform group-hover:scale-105 transition-transform duration-300 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center overflow-hidden ring-1 ring-blue-50">
            {dalguLogo ? (
              <img src={dalguLogo} alt="DGIST Dalgu Chef" className="w-full h-full object-contain drop-shadow-md" onError={(e) => { e.target.style.display='none'; }} />
            ) : (
              <ChefHat size={80} className="text-blue-600 dark:text-blue-400" />
            )}
          </div>
        </div>

        <h1 className="text-3xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
          DGIST <span className="text-blue-600 dark:text-blue-400">TT Chef</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 md:mb-12 font-medium text-sm md:text-base">
          2026 Spring ver. (fix.0223)<br className="hidden md:block"/>
          Made by P01N71 (w/ D1C3, pharmaxxan)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl px-4 md:px-8 items-stretch">
          <button onClick={() => handleModeSelect('timetable')} className="group relative flex flex-col items-center p-8 bg-white dark:bg-slate-800 border-2 border-white dark:border-slate-700 rounded-3xl hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-200/20 hover:-translate-y-1 h-full w-full ring-1 ring-slate-100">
            <div className="mb-6 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
              <ChefHat size={36} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">시간표 요리사</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 break-keep leading-relaxed">
              이번 학기 맛있는 시간표를<br/>직접 요리해 보세요.
            </p>
            <div className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold group-hover:gap-3 transition-all text-base">
              <span>요리 시작하기</span>
              <ArrowRight size={18} />
            </div>
          </button>

          <button onClick={() => handleModeSelect('graduation')} className="group relative flex flex-col items-center p-8 bg-white dark:bg-slate-800 border-2 border-white dark:border-slate-700 rounded-3xl hover:border-purple-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-200/20 hover:-translate-y-1 h-full w-full ring-1 ring-slate-100">
            <div className="mb-6 p-5 bg-purple-50 dark:bg-purple-900/20 rounded-2xl group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
              <GraduationCap size={36} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">졸업 요리사</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 break-keep leading-relaxed">
              졸업까지 남은 재료들을<br/>꼼꼼하게 점검하세요.
            </p>
            <div className="mt-auto flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold group-hover:gap-3 transition-all text-base">
              <span>요리 시작하기</span>
              <ArrowRight size={18} />
            </div>
          </button>

          <button onClick={() => handleModeSelect('shelf')} className="group relative flex flex-col items-center p-8 bg-white dark:bg-slate-800 border-2 border-white dark:border-slate-700 rounded-3xl hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 h-full w-full ring-1 ring-slate-100">
            <div className="mb-6 p-5 bg-slate-100 dark:bg-slate-700 rounded-2xl group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-colors">
              <Archive size={36} className="text-slate-600 dark:text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">진열대 & 공유</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 break-keep leading-relaxed">
              완성된 요리를 진열하고<br/>친구들과 공유하세요.
            </p>
            <div className="mt-auto flex items-center gap-2 text-slate-600 dark:text-slate-400 font-bold group-hover:gap-3 transition-all text-base">
              <span>구경하러 가기</span>
              <ArrowRight size={18} />
            </div>
          </button>

        </div>
      </div>

      {isProfileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-3xl shadow-2xl p-6 relative ring-1 ring-slate-200/50">
                <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"><UserCircle2 className="text-slate-600"/> 내 프로필 설정</h2>
                
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 ml-1">과정 구분</label>
                            <select 
                                value={localProfile.status} 
                                onChange={e => setLocalProfile({...localProfile, status: e.target.value})}
                                className="w-full mt-1 bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-bold text-slate-700 shadow-sm transition-all"
                            >
                                <option>학사</option>
                                <option>석사</option>
                                <option>박사</option>
                                <option>학석통합</option>
                                <option>학석박통합</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 ml-1">이수 학기</label>
                            <div className="flex items-center gap-2 mt-1">
                                <input 
                                    type="number" 
                                    min="1" max="20"
                                    value={localProfile.semester} 
                                    onChange={e => setLocalProfile({...localProfile, semester: e.target.value})}
                                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm font-bold text-center text-slate-700 shadow-sm transition-all"
                                />
                                <span className="text-sm text-slate-500 font-bold whitespace-nowrap">학기차</span>
                            </div>
                        </div>
                    </div>

                    <MajorSelector 
                        label="주전공 (Major)" 
                        value={localProfile.major} 
                        onChange={(val) => setLocalProfile({...localProfile, major: val})}
                        allowCustom={true}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                        {/* disabled 제거하여 자유롭게 클릭 후 상호 초기화 되도록 수정 */}
                        <MajorSelector 
                            label="복수전공 (선택)" 
                            value={localProfile.doubleMajor} 
                            onChange={handleDoubleMajorChange}
                            allowCustom={false}
                        />
                        <MajorSelector 
                            label="부전공 (선택)" 
                            value={localProfile.minor} 
                            onChange={handleMinorChange}
                            allowCustom={false}
                        />
                    </div>
                </div>

                <div className="bg-slate-50 text-slate-600 text-xs p-3 rounded-xl mt-6 font-medium leading-relaxed border border-slate-100">
                    💡 <b>오타 수정 유예 기간: 1시간</b><br/>
                    한 번 저장하면 1시간 동안은 수정 가능하지만, <br/>
                    그 이후에는 학기(3개월) 단위로만 변경할 수 있습니다.
                </div>

                <button onClick={saveProfile} className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-[0.98] transition-all shadow-lg shadow-slate-200/50">
                    <PenTool size={18}/> 저장하기
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Step0Home;