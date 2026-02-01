import React, { useState, useEffect } from 'react';
import useStore from '../store/useStore';
import { ChefHat, ArrowRight, MousePointerClick, GraduationCap, LayoutGrid, UserCircle2, X, Save, PenTool } from 'lucide-react';

let dalguLogo = null;
try { dalguLogo = new URL('../assets/dalgu.jpg', import.meta.url).href; } catch (e) {}

// 🔥 전공 목록 (표준)
const STANDARD_MAJORS = [
  "미정", 
  "물리학", "화학", "생명과학", "뇌과학", 
  "기계공학", "화학공학", "전자공학", "컴퓨터공학", "재료공학"
];

// MajorSelector 컴포넌트
const MajorSelector = ({ label, value, onChange, allowCustom = false, disabled = false }) => {
    const [isCustomMode, setIsCustomMode] = useState(false);

    useEffect(() => {
        if (value && value !== "미정" && !STANDARD_MAJORS.includes(value)) {
            setIsCustomMode(true);
        } else if (STANDARD_MAJORS.includes(value)) {
            setIsCustomMode(false);
        }
    }, [value]);

    let dropdownValue = value;
    if (isCustomMode) {
        dropdownValue = "자율트랙";
    } else if (!STANDARD_MAJORS.includes(value)) {
        dropdownValue = "미정";
    }

    return (
      <div className={`flex flex-col gap-2 transition-opacity duration-200 ${disabled ? 'opacity-40 pointer-events-none grayscale' : ''}`}>
        <label className="text-xs font-bold text-slate-500 ml-1">{label}</label>
        <select 
            value={dropdownValue} 
            disabled={disabled}
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
            {STANDARD_MAJORS.map(m => (
                <option key={m} value={m}>{m === '미정' && label !== '주전공 (Major)' ? '없음 (미정)' : m}</option>
            ))}
            {allowCustom && <option value="자율트랙">자율트랙 (직접 입력)</option>}
        </select>
        
        {allowCustom && isCustomMode && (
            <div className="relative animate-in fade-in slide-in-from-top-1 duration-200">
                <PenTool size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"/>
                <input 
                    type="text"
                    value={value} 
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

// 메인 컴포넌트
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
    if (userProfile.lastUpdatedAt) {
        const lastUpdate = new Date(userProfile.lastUpdatedAt);
        const now = new Date();
        const diffHours = (now - lastUpdate) / (1000 * 60 * 60);
        const diffDays = diffHours / 24;

        if (diffHours >= 1 && diffDays < 90) {
            alert(`프로필은 학기 단위(3개월)로만 변경할 수 있습니다.\n\n남은 기간: 약 ${Math.ceil(90 - diffDays)}일`);
            return;
        }
    }

    const finalProfile = {
        ...localProfile,
        doubleMajor: localProfile.doubleMajor || '미정',
        minor: localProfile.minor || '미정'
    };

    updateUserProfile(finalProfile);
    setIsProfileOpen(false);
    alert("프로필이 저장되었습니다.");
  };

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

  const isDoubleSelected = localProfile.doubleMajor && localProfile.doubleMajor !== '미정';
  const isMinorSelected = localProfile.minor && localProfile.minor !== '미정';

  return (
    <div className="h-full w-full bg-slate-50 dark:bg-slate-900 overflow-y-auto custom-scrollbar relative">
      <button 
        onClick={() => { setLocalProfile(userProfile); setIsProfileOpen(true); }}
        className="absolute top-6 right-6 flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all text-slate-600 dark:text-slate-300 font-bold text-sm border border-slate-200 dark:border-slate-700 z-10"
      >
        <UserCircle2 size={20} className="text-blue-500"/>
        <span>내 프로필 설정</span>
      </button>

      <div className="min-h-full flex flex-col items-center justify-center text-center p-4 py-12 pb-32 animate-in fade-in duration-700">
        
        {/* 로고 영역 */}
        <div className="relative mb-6 md:mb-10 group cursor-default">
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500"></div>
          <div className="relative bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-2xl border-4 border-slate-100 dark:border-slate-700 transform group-hover:scale-105 transition-transform duration-300 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center overflow-hidden">
            {dalguLogo ? (
              <img src={dalguLogo} alt="DGIST Dalgu Chef" className="w-full h-full object-contain drop-shadow-md" onError={(e) => { e.target.style.display='none'; }} />
            ) : (
              <ChefHat size={80} className="text-blue-600 dark:text-blue-400" />
            )}
          </div>
        </div>

        <h1 className="text-3xl md:text-6xl font-black tracking-tight text-slate-800 dark:text-white mb-2">
          DGIST <span className="text-blue-600 dark:text-blue-400">TT Chef</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 md:mb-12 font-medium text-sm md:text-base">
          2026 Spring ver. (fix.0201)
        </p>

        {/* 선택 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl px-2 md:px-4 items-stretch">
          
          {/* 1. 시간표 요리사 */}
          <div className="relative flex flex-col items-center p-6 md:p-10 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-blue-200 group h-full">
            <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl transition-colors group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
              <ChefHat size={32} className="text-blue-600 dark:text-blue-400 md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2">시간표 요리사</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1 flex items-center justify-center break-keep">
              이번 학기 맛있는 시간표를<br className="hidden md:block"/> 직접 요리해 보세요.
            </p>
            <div className="mt-auto flex flex-col items-center gap-2 w-full">
              <button onClick={() => handleModeSelect('timetable')} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all text-base md:text-lg py-2">
                <span>요리 시작하기</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={() => handleModeSelect('shelf')} className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1 py-1.5 px-3 rounded-full hover:bg-slate-50">
                ( <LayoutGrid size={12}/> 보관함 & 공유 )
              </button>
            </div>
          </div>

          {/* 2. 졸업 요리사 */}
          <button onClick={() => handleModeSelect('graduation')} className="group relative flex flex-col items-center p-6 md:p-10 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-3xl hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden h-full w-full">
            <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
              <GraduationCap size={32} className="text-purple-600 dark:text-purple-400 md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2">졸업 요리사</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 flex-1 flex items-center justify-center break-keep">
              졸업까지 남은 재료들을<br className="hidden md:block"/> 꼼꼼하게 점검하세요.
            </p>
            {/* 🔥 [수정] 높이 맞추기 (gap-2 통일 및 투명 더미 요소 추가) */}
            <div className="mt-auto flex flex-col items-center gap-2 w-full">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold group-hover:gap-3 transition-all text-base md:text-lg py-2">
                <span>요리 시작하기</span>
                <ArrowRight size={18} />
              </div>
              {/* 높이 맞춤용 투명 버튼 (왼쪽 카드와 균형 맞추기) */}
              <div className="text-xs font-bold text-transparent py-1.5 px-3 select-none pointer-events-none flex items-center gap-1">
                ( <LayoutGrid size={12}/> 보관함 & 공유 )
              </div>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full mt-8">
          <MousePointerClick size={16} />
          <span>Easy Clicker</span>
        </div>
      </div>

      {/* 모달 */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-800 w-full max-w-md rounded-3xl shadow-2xl p-6 relative">
                <button onClick={() => setIsProfileOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2"><UserCircle2 className="text-blue-500"/> 내 프로필 설정</h2>
                
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 ml-1">과정 구분</label>
                            <select 
                                value={localProfile.status} 
                                onChange={e => setLocalProfile({...localProfile, status: e.target.value})}
                                className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 text-sm font-bold"
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
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-blue-500 text-sm font-bold text-center"
                                />
                                <span className="text-sm text-slate-500 font-bold whitespace-nowrap">학기차</span>
                            </div>
                        </div>
                    </div>

                    {/* 주전공 (자율트랙 가능) */}
                    <MajorSelector 
                        label="주전공 (Major)" 
                        value={localProfile.major} 
                        onChange={(val) => setLocalProfile({...localProfile, major: val})}
                        allowCustom={true}
                    />
                    
                    {/* 복수/부전공 (자율트랙 불가, 교차 선택 불가) */}
                    <div className="grid grid-cols-2 gap-4">
                        <MajorSelector 
                            label="복수전공 (선택)" 
                            value={localProfile.doubleMajor} 
                            onChange={handleDoubleMajorChange}
                            allowCustom={false}
                            disabled={isMinorSelected} 
                        />
                        <MajorSelector 
                            label="부전공 (선택)" 
                            value={localProfile.minor} 
                            onChange={handleMinorChange}
                            allowCustom={false}
                            disabled={isDoubleSelected} 
                        />
                    </div>
                </div>

                <div className="bg-blue-50 text-blue-600 text-xs p-3 rounded-xl mt-6 font-medium leading-relaxed">
                    💡 <b>오타 수정 유예 기간: 1시간</b><br/>
                    한 번 저장하면 1시간 동안은 수정 가능하지만, <br/>
                    그 이후에는 3개월 단위로만 변경할 수 있습니다.
                </div>

                <button onClick={saveProfile} className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                    <Save size={18}/> 저장하기
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Step0Home;