import React, { useEffect, useState, useMemo } from 'react';
import useStore from '../store/useStore';
import { 
  trackRules, 
  BASIC_REQUIRED_COURSES,
  ADVANCED_CONVERGENCE_LIST 
} from '../data/graduationRules';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { 
  Search, Library, GraduationCap, Calendar, Settings, BookOpen, Award,
  Trash2, AlertCircle, CheckCircle2, XCircle, ChevronDown, ChevronUp,
  ArrowLeft, Plus, GripVertical, FolderOpen, Info, AlertTriangle, Wifi, Layout, Clock, Save
} from 'lucide-react';

const formatPrerequisites = (preList) => {
  if (!preList || preList.length === 0) return "";
  return preList.map(item => {
    if (Array.isArray(item)) return item.join(' 또는 '); 
    return item;
  }).join(', ');
};

const getOpenInfo = (c) => {
  const gradePrefix = c.grade_level ? `${c.grade_level}-` : '';
  if (c.year_constraint) return `${gradePrefix}홀수(${c.year_constraint.odd.join(',')})/짝수(${c.year_constraint.even.join(',')})`;
  if (c.year_exception) {
      const exceptions = Object.entries(c.year_exception).map(([year, sems]) => `${year}(${sems.join(',')})`).join(' ');
      const baseSems = Array.isArray(c.semester) ? c.semester.join(',') : c.semester;
      return `${gradePrefix}${exceptions} 기본(${baseSems})`;
  }
  if (!c.semester) return '';
  const sems = Array.isArray(c.semester) ? c.semester : [c.semester];
  if (sems.length >= 4) return `${gradePrefix}전체학기`;
  const order = { '1': 1, '2': 2, '여름': 3, '겨울': 4 };
  const sorted = [...sems].sort((a, b) => (order[a] || 9) - (order[b] || 9));
  return `${gradePrefix}${sorted.join('/')}`;
};

const getCategoryLabel = (c) => {
  let label = c.category_sub || c.category_main || '미분류';
  if (c.category_main && c.category_sub) label = `${c.category_main}-${c.category_sub}`;
  if (c.available_tracks && c.available_tracks.length > 0) {
      const displayTracks = c.available_tracks.filter(t => t !== '기초학부');
      if (displayTracks.length > 0) label += ` (${displayTracks.join(',')})`;
  }
  return label;
};

const getCourseType = (courseName, trackName) => {
    if (!trackName || trackName === '미정' || trackName === '없음' || !trackRules[trackName]) return null; 
    const rule = trackRules[trackName];
    const normName = courseName.replace(/\s/g, '');
    const requiredList = rule.major?.required?.map(r => r.replace(/\s/g, '')) || [];
    if (requiredList.includes(normName)) return { label: '전공필수', style: 'text-red-500 bg-red-50 border-red-100' };
    return { label: '전공선택', style: 'text-green-600 bg-green-50 border-green-100' };
};

const calculateSemesterGPA = (courses) => {
    const scoreMap = { 'A+': 4.3, 'A0': 4.0, 'A-': 3.7, 'B+': 3.3, 'B0': 3.0, 'B-': 2.7, 'C+': 2.3, 'C0': 2.0, 'C-': 1.7, 'D+': 1.3, 'D0': 1.0, 'D-': 0.7 };
    let sum = 0, count = 0;
    courses.forEach(c => {
        const score = scoreMap[c.grade];
        if (score !== undefined) { sum += score * Number(c.credit); count += Number(c.credit); }
    });
    return count === 0 ? "0.00" : (sum / count).toFixed(2);
};

const getSemesterValue = (year, semester) => {
    const semWeight = { '1': 10, '여름': 20, '2': 30, '겨울': 40 };
    return parseInt(year) * 100 + (semWeight[semester] || 99);
};

const isCourseActive = (course, targetYear, targetSemester) => {
    if (!course.effective_period) return { active: true };
    const targetVal = getSemesterValue(targetYear, targetSemester);
    const { start, end } = course.effective_period;
    if (start) {
        const [sYear, sSem] = start.split('-');
        const startVal = getSemesterValue(sYear, sSem);
        if (targetVal < startVal) return { active: false, msg: `${start} 학기부터 신설되는 과목입니다.` };
    }
    if (end) {
        const [eYear, eSem] = end.split('-');
        const endVal = getSemesterValue(eYear, eSem);
        if (targetVal > endVal) return { active: false, msg: `${end} 학기를 마지막으로 폐지된 과목입니다.` };
    }
    return { active: true };
};

const CATEGORY_MAP = {
  '기초': ['수학', '물리학', '화학', '생명과학', '컴퓨터공학', '공학선택', '인문사회', '영어', '쓰기,읽기중점'],
  '심화': ['트랙', '비트랙/융합', '연구', '창업', '인턴십']
};

const TRACK_LIST = [
  '물리학', '화학', '생명과학', '뇌과학', '기계공학', '재료공학', '전자공학', '컴퓨터공학', '화학공학'
];

const StrictModeDroppable = ({ children, ...props }) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => { cancelAnimationFrame(animation); setEnabled(false); };
  }, []);
  if (!enabled) return null;
  return <Droppable {...props}>{children}</Droppable>;
};

const GraduationChef = () => {
  const { 
    gradCourses, transcript, savedTimetables, savedRecipes, userProfile, updateUserProfile, setStep,
    fetchGradCourses, addCustomToTranscript, updateTranscriptGrade, removeFromTranscript, 
    importScheduleToTranscript, moveTranscriptCourse,
    addNewCourseToWarehouse,
    saveRecipe,
    updateTranscriptTrack,
    editingRecipeId
  } = useStore();
  
  const safeUpdateTranscriptTrack = updateTranscriptTrack || ((id, newTrack) => {
      useStore.setState(state => ({
          transcript: state.transcript.map(c => c.id === id ? { ...c, selected_track: newTrack } : c)
      }));
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [selectedShelfId, setSelectedShelfId] = useState(null);
  const [importYear, setImportYear] = useState('2025');
  const [importSemester, setImportSemester] = useState('1');
  const [saveTitle, setSaveTitle] = useState('');
  const [activeSemesters, setActiveSemesters] = useState([]); 
  const [newSemYear, setNewSemYear] = useState(new Date().getFullYear());
  const [newSemTerm, setNewSemTerm] = useState('1');
  
  const [customForm, setCustomForm] = useState({ 
    name: '', credit: 3, category_main: '기초', category_sub: '선택안함', 
    specific_track: '컴퓨터공학', isOnline: false 
  });

  const [targetMajor, setTargetMajor] = useState(userProfile.major && userProfile.major !== '미정' ? userProfile.major : '없음');
  const [targetDouble, setTargetDouble] = useState(userProfile.doubleMajor && userProfile.doubleMajor !== '미정' ? userProfile.doubleMajor : '없음');
  const [targetMinor, setTargetMinor] = useState(userProfile.minor && userProfile.minor !== '미정' ? userProfile.minor : '없음');

  const [basicReqs, setBasicReqs] = useState({ warningCount: 0 });
  const [isEarlyGrad, setIsEarlyGrad] = useState(false);
  const [collapsedSemesters, setCollapsedSemesters] = useState({});

  useEffect(() => { 
    if (fetchGradCourses) fetchGradCourses(); 
    if(userProfile.major) setTargetMajor(userProfile.major === '미정' ? '없음' : userProfile.major);
    if(userProfile.doubleMajor) setTargetDouble(userProfile.doubleMajor === '미정' ? '없음' : userProfile.doubleMajor);
    if(userProfile.minor) setTargetMinor(userProfile.minor === '미정' ? '없음' : userProfile.minor);
  }, [userProfile]);

  const handleEntryYearChange = (e) => updateUserProfile({ entryYear: e.target.value });
  const entryYear = parseInt(userProfile.entryYear || '2021');

  useEffect(() => {
    const groups = {};
    transcript.forEach(c => {
      if (c.year === '계획' || c.semester === '미정') return;
      const key = `${c.year}-${c.semester}`;
      groups[key] = true;
    });
    const dataKeys = Object.keys(groups);
    const uniqueKeys = Array.from(new Set([...activeSemesters, ...dataKeys])).filter(k => !k.includes('계획') && !k.includes('미정'));
    const semOrder = { '1': 1, '여름': 2, '2': 3, '겨울': 4 };
    uniqueKeys.sort((a, b) => {
      const [y1, s1] = a.split('-');
      const [y2, s2] = b.split('-');
      if (y1 !== y2) return y1 - y2;
      return (semOrder[s1] || 9) - (semOrder[s2] || 9);
    });

    if(uniqueKeys.length !== activeSemesters.length || !uniqueKeys.every((v,i)=>v===activeSemesters[i])) {
        setActiveSemesters(uniqueKeys);
    }
  }, [transcript]);

  const filteredGradCourses = useMemo(() => {
    if (!gradCourses) return [];
    const currentTranscript = transcript || [];
    const takenCourseNames = new Set(currentTranscript.map(t => t.name.replace(/\s/g, '')));
    return gradCourses.filter(c => {
      if (takenCourseNames.has(c.name.replace(/\s/g, ''))) return false;
      const nameMatch = c.name.includes(searchTerm);
      if (c.classification && c.classification.includes('사용자지정')) return nameMatch;
      const minYear = c.min_year || 0;
      const maxYear = c.max_year || 9999;
      const yearMatch = entryYear >= minYear && entryYear <= maxYear;
      return nameMatch && yearMatch;
    });
  }, [gradCourses, searchTerm, entryYear, transcript]);

  const semesterData = useMemo(() => {
    const groups = {};
    transcript.forEach(c => {
      const key = `${c.year}-${c.semester}`;
      if (activeSemesters.includes(key)) {
          if (!groups[key]) groups[key] = [];
          groups[key].push(c);
      }
    });
    return groups;
  }, [transcript, activeSemesters]);

  const passedCourses = useMemo(() => {
      return transcript.filter(c => {
          if (c.grade === 'F' || c.grade === 'U') return false;
          const key = `${c.year}-${c.semester}`;
          return activeSemesters.includes(key);
      });
  }, [transcript, activeSemesters]);
  
  const totalCredits = passedCourses.reduce((acc, c) => acc + Number(c.credit), 0);
  const onlineCredits = passedCourses.filter(c => c.is_online).reduce((acc, c) => acc + Number(c.credit), 0);
  const basicTotalCredits = passedCourses.filter(c => c.category_main === '기초').reduce((acc, c) => acc + Number(c.credit), 0);
  const advancedTotalCredits = passedCourses.filter(c => c.category_main === '심화').reduce((acc, c) => acc + Number(c.credit), 0);
  
  const sciCredits = passedCourses.filter(c => c.name.includes('(이)') || c.name.includes('(이,공)')).reduce((acc, c) => acc + Number(c.credit), 0);
  const engCredits = passedCourses.filter(c => c.name.includes('(공)') || c.name.includes('(이,공)')).reduce((acc, c) => acc + Number(c.credit), 0);

  const currentGPA = parseFloat(calculateSemesterGPA(passedCourses));

  const { commonStatus, basicStatusList, advancedStatusList } = useMemo(() => {
    const RULES = BASIC_REQUIRED_COURSES; 
    const getCreditsByNames = (targetNames) => {
        return passedCourses.filter(c => 
            targetNames.some(t => c.name.replace(/\s/g,'').includes(t.replace(/\s/g,'')))
        ).reduce((acc, c) => acc + Number(c.credit), 0);
    };
    const has = (name) => passedCourses.some(c => c.name.replace(/\s/g,'') === name.replace(/\s/g,''));
    const hasAll = (names) => names.every(n => has(n));
    const hasOne = (names) => names.some(n => has(n));
    const countCredit = (main, sub) => passedCourses.filter(c => 
      (!main || c.category_main === main) && (!sub || c.category_sub === sub)
    ).reduce((a,c) => a + c.credit, 0);

    const isNewCurriculum = entryYear >= 2025;
    const regularSemesterCount = activeSemesters.filter(key => {
        const [_, term] = key.split('-');
        return term === '1' || term === '2';
    }).length;
    const targetSemesters = isEarlyGrad ? 6 : 8; 
    
    const commonStatus = [
        { name: `총 학점 (130)`, done: totalCredits >= 130, detail: `${totalCredits} / 130` },
        { name: `등록학기 (${targetSemesters}학기↑)`, done: regularSemesterCount >= targetSemesters, detail: `${regularSemesterCount}학기` }
    ];

    const mathReq = hasAll(RULES.math.required);
    const mathSel = hasOne(RULES.math.selectOne);
    const mathCredits = countCredit("기초", "수학");
    const mathResult = { name: "수학 (9)", done: mathReq && mathSel && mathCredits >= 9, detail: `${mathCredits}/9` };

    const phy = hasAll(RULES.science.physics.required) && hasOne(RULES.science.physics.selectOne);
    const chem = hasAll(RULES.science.chemistry.required);
    const bio = hasOne(RULES.science.biology.selectOne) && hasAll(RULES.science.biology.required);
    const scienceCredits = countCredit("기초", "물리") + countCredit("기초", "화학") + countCredit("기초", "생명과학");
    const scienceResult = { name: "과학 (18)", done: scienceCredits >= 18 && phy && chem && bio, detail: `${scienceCredits}/18` };

    let comTarget = 6;
    let comCredits = 0;
    if (isNewCurriculum) {
       comTarget = 6;
       comCredits = getCreditsByNames(RULES.computer.base);
    } else {
       comTarget = 9;
       comCredits = getCreditsByNames([...RULES.computer.base, ...RULES.computer.old]);
    }
    const comResult = { name: `컴퓨터공학 (${comTarget})`, done: comCredits >= comTarget, detail: `${comCredits}/${comTarget}` };

    const engTargetList = ["창의기계설계", "화학공학개론", "회로이론과 계측법"];
    const engineeringCredits = getCreditsByNames(engTargetList);
    const engineeringResult = { name: "공학선택 (3)", done: engineeringCredits >= 3, detail: `${engineeringCredits}/3` };

    let humTarget = 15;
    const writingPass = hasOne(RULES.humanities.writing);
    const humCredits = countCredit("기초", "쓰기,읽기중점") + countCredit("기초", "인문사회");
    let humDone = false;

    if (isNewCurriculum) {
        humTarget = 18;
        const literacyPass = hasAll(RULES.humanities.literacy);
        humDone = humCredits >= 18 && writingPass && literacyPass;
    } else {
        humTarget = 15;
        humDone = humCredits >= 15 && writingPass;
    }
    const humResult = { name: `인문사회 (${humTarget})`, done: humDone, detail: `${humCredits}/${humTarget}` };
    const englishCredits = getCreditsByNames(RULES.english.required);
    const englishResult = { name: "영어 (4)", done: englishCredits >= 4, detail: `${englishCredits}/4` };

    const basicStatusList = [mathResult, scienceResult, comResult, engineeringResult, humResult, englishResult];

    const convCredits = passedCourses.filter(c => ADVANCED_CONVERGENCE_LIST.some(a => c.name.includes(a))).reduce((a,c)=>a+c.credit, 0);
    const convResult = { name: "비트랙/융합 (6)", done: convCredits >= 6, detail: `${convCredits}/6` };
    const ugrpCredits = getCreditsByNames(RULES.research.required);
    const ugrpResult = { name: "UGRP (6)", done: ugrpCredits >= 6, detail: `${ugrpCredits}/6` };
    
    const internCredits = passedCourses.filter(c => c.name.includes("인턴십")).reduce((a,c) => a + c.credit, 0);
    
    let internReq = 1;
    if (entryYear <= 2024) internReq = 2; 
    const internResult = { name: `인턴십 (${internReq})`, done: internCredits >= internReq, detail: `${internCredits}/${internReq}` };
    const advancedStatusList = [convResult, ugrpResult, internResult];
    return { commonStatus, basicStatusList, advancedStatusList };
  }, [passedCourses, entryYear, activeSemesters, isEarlyGrad, totalCredits]);

  const checkTrackStatus = (trackName, type) => {
    if (trackName === '미정' || trackName === '없음' || !trackRules[trackName]) return null;
    const rule = trackRules[trackName];
    const ruleSet = type === 'minor' ? rule.minor : rule.major;
    const validCourses = passedCourses;
    const takenNames = validCourses.map(c => c.name.replace(/\s/g, ''));
    const currentTrackCredits = validCourses
        .filter(c => c.category_main !== '기초' && c.selected_track === trackName)
        .reduce((acc, c) => acc + Number(c.credit), 0);
    const requiredTrackCredits = type === 'minor' ? 18 : 27;
    let overlapDeduction = 0;
    let duplicateCredits = 0;
    if (type === 'major' && trackName === targetDouble && targetMajor !== '미정' && targetMajor !== '없음') {
      const majorCourses = validCourses.filter(c => c.available_tracks && c.available_tracks.includes(targetMajor));
      const doubleCourses = validCourses.filter(c => c.available_tracks && c.available_tracks.includes(targetDouble));
      const intersection = doubleCourses.filter(d => majorCourses.some(m => m.id === d.id));
      duplicateCredits = intersection.reduce((a, c) => a + c.credit, 0);
      if (duplicateCredits > 6) overlapDeduction = duplicateCredits - 6;
    }
    let requirements = [];
    let isPass = true;
    if (ruleSet.type === 'count') {
      const matchCount = rule.pool.filter(p => takenNames.includes(p.replace(/\s/g, ''))).length;
      requirements.push({ name: `지정 ${rule.pool.length}과목 중 ${ruleSet.count}개`, done: matchCount >= ruleSet.count, detail: `${matchCount}개` });
      if (matchCount < ruleSet.count) isPass = false;
    } else {
      if (ruleSet.required) {
        ruleSet.required.forEach(req => {
          const done = takenNames.includes(req.replace(/\s/g, ''));
          requirements.push({ name: req, done });
          if (!done) isPass = false;
        });
      }
      if (ruleSet.selectOne) {
        ruleSet.selectOne.forEach(group => {
          const done = group.some(g => takenNames.includes(g.replace(/\s/g, '')));
          requirements.push({ name: `택1: ${group.join('/')}`, done });
          if (!done) isPass = false;
        });
      }
      if (ruleSet.type === 'all') {
         if (ruleSet.pool) {
             const doneCount = ruleSet.pool.filter(p => takenNames.includes(p.replace(/\s/g, ''))).length;
             const totalCount = ruleSet.pool.length;
             requirements.push({ name: `지정 ${totalCount}과목 모두`, done: doneCount >= totalCount, detail: `${doneCount}/${totalCount}` });
             if (doneCount < totalCount) isPass = false;
         }
      }
    }
    if (currentTrackCredits < requiredTrackCredits) isPass = false;
    return { 
        isPass, 
        requirements, 
        degree: rule.degree, 
        overlapDeduction, 
        duplicateCredits,
        currentTrackCredits, 
        requiredTrackCredits 
    };
  };

  const majorStatus = checkTrackStatus(targetMajor, 'major');
  const doubleStatus = checkTrackStatus(targetDouble, 'major');
  const minorStatus = checkTrackStatus(targetMinor, 'minor');

  let degreeName = "수료 (요건 미달)";
  const isBasicPass = basicStatusList.every(r => r.done) && basicTotalCredits >= 58;
  const isAdvancedPass = advancedStatusList.every(r => r.done) && advancedTotalCredits >= 72;
  const isCommonPass = commonStatus.every(r => r.done);
  
  if (isCommonPass && isBasicPass && isAdvancedPass) {
      if (targetMajor !== '없음' && targetMajor !== '미정') {
          if (majorStatus?.isPass) {
              degreeName = `융복합 ${majorStatus.degree} (${targetMajor})`;
              if (targetDouble !== '없음' && targetDouble !== '미정' && doubleStatus?.isPass) {
                  degreeName += `, 융복합 ${doubleStatus.degree} (${targetDouble})`;
              }
          } else {
              degreeName = "수료 (전공 요건 미달)";
          }
      } else {
          const isSciPass = sciCredits >= 27;
          const isEngPass = engCredits >= 27;

          if (isSciPass && isEngPass) {
              degreeName = "융복합 공학사, 융복합 이학사 (트랙 미이수)";
          } else if (isSciPass) {
              degreeName = "융복합 이학사 (트랙 미이수)";
          } else if (isEngPass) {
              degreeName = "융복합 공학사 (트랙 미이수)";
          } else {
              degreeName = "수료 (트랙 이수 학점 미달)";
          }
      }
  }

  const handleAddSemester = () => {
    const key = `${newSemYear}-${newSemTerm}`;
    if (activeSemesters.includes(key)) { alert("이미 존재하는 학기입니다!"); return; }
    const semOrder = { '1': 1, '여름': 2, '2': 3, '겨울': 4 };
    const newActive = [...activeSemesters, key].sort((a, b) => {
      const [y1, s1] = a.split('-');
      const [y2, s2] = b.split('-');
      if (y1 !== y2) return y1 - y2;
      return (semOrder[s1] || 9) - (semOrder[s2] || 9);
    });
    setActiveSemesters(newActive);
  };
  const handleRemoveSemester = (semesterKey) => {
    const [year, semester] = semesterKey.split('-');
    const coursesToRemove = transcript.filter(c => c.year === year && c.semester === semester);
    coursesToRemove.forEach(c => removeFromTranscript(c.id));
    setActiveSemesters(prev => prev.filter(k => k !== semesterKey));
  };
  const handleConfirmImport = () => {
    if (selectedShelfId) {
      const targetTable = savedTimetables.find(t => t.id === selectedShelfId);
      if (targetTable) {
          importScheduleToTranscript(targetTable, importYear, importSemester, (c) => {
              if (!c.available_tracks || c.available_tracks.length === 0) return '';
              if (c.available_tracks.includes(targetMajor)) return targetMajor;
              if (c.available_tracks.includes(targetDouble)) return targetDouble;
              return c.available_tracks[0];
          });
      }
    }
    setIsModalOpen(false); setSelectedShelfId(null);
  };
  
  const handleSaveClick = () => {
    if (transcript.length === 0) {
      alert("저장할 과목이 없습니다! 먼저 시간표를 요리해주세요.");
      return;
    }

    if (editingRecipeId) {
        const existingRecipe = savedRecipes.find(r => r.id === editingRecipeId);
        if (existingRecipe) {
            setSaveTitle(existingRecipe.title);
            setIsSaveModalOpen(true);
            return;
        }
    }

    const defaultTitle = `${new Date().getMonth() + 1}월 ${new Date().getDate()}일의 졸업 요리`;
    setSaveTitle(defaultTitle);
    setIsSaveModalOpen(true);
  };
  
  const confirmSaveRecipe = () => {
    if (!saveTitle.trim()) {
        alert("레시피 이름을 입력해주세요!");
        return;
    }
    if (saveRecipe) {
        const currentTracks = {
            major: targetMajor,
            doubleMajor: targetDouble,
            minor: targetMinor
        };
        saveRecipe(saveTitle, currentTracks, degreeName);
        alert(`'${saveTitle}' 레시피가 ${editingRecipeId ? '성공적으로 덮어쓰기 되었습니다' : '진열대에 저장되었습니다'}!`);
        setIsSaveModalOpen(false);
    } else {
        alert("저장 기능 오류: useStore에 saveRecipe 함수가 없습니다.");
    }
  };
  
  const toggleSemesterCollapse = (semesterKey) => {
      setCollapsedSemesters(prev => ({ ...prev, [semesterKey]: !prev[semesterKey] }));
  };
  const checkSemesterValid = (course, targetYear, targetSemester) => {
    const activeStatus = isCourseActive(course, targetYear, targetSemester);
    if (!activeStatus.active) { alert(`🚫 수강 불가: ${activeStatus.msg}`); return false; }
    if (course.year_exception && course.year_exception[targetYear]) {
        const allowed = course.year_exception[targetYear];
        if (!allowed.includes(targetSemester)) return false;
        return true;
    }
    if (course.year_constraint) {
        const isOdd = parseInt(targetYear) % 2 !== 0;
        const allowed = isOdd ? course.year_constraint.odd : course.year_constraint.even;
        if (!allowed.includes(targetSemester)) return false;
        return true; 
    }
    if (course.semester) {
        const allowed = Array.isArray(course.semester) ? course.semester : [course.semester];
        return allowed.includes(targetSemester);
    }
    return true;
  };
  const checkPrerequisites = (course, targetYear, targetSemester) => {
    if (!course.prerequisites || course.prerequisites.length === 0) return { ok: true };
    const semOrder = { '1': 1, '여름': 2, '2': 3, '겨울': 4 };
    const targetY = parseInt(targetYear);
    const targetS = semOrder[targetSemester];
    const previousCourses = transcript.filter(c => {
        if (c.year === '계획' || c.semester === '미정') return false;
        const cY = parseInt(c.year);
        const cS = semOrder[c.semester];
        return cY < targetY || (cY === targetY && cS < targetS);
    });
    const previousNames = previousCourses.map(c => c.name.replace(/\s/g, ''));
    const missing = [];
    course.prerequisites.forEach(condition => {
      if (Array.isArray(condition)) {
        const hasOne = condition.some(name => previousNames.includes(name.replace(/\s/g, '')));
        if (!hasOne) missing.push(`(${condition.join(' 또는 ')})`);
      } else {
        if (!previousNames.includes(condition.replace(/\s/g, ''))) missing.push(condition);
      }
    });
    if (missing.length > 0) return { ok: false, msg: `🚫 선수과목 미달: [${missing.join(', ')}]을(를) 먼저 이수해야 합니다.` };
    return { ok: true };
  };
  const determineDefaultTrack = (course) => {
      if (!course.available_tracks || course.available_tracks.length === 0) return '';
      if (course.available_tracks.includes(targetMajor)) return targetMajor;
      if (course.available_tracks.includes(targetDouble)) return targetDouble;
      return course.available_tracks[0];
  };
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    const [targetYear, targetSemester] = destination.droppableId.split('-');
    let course = null;
    if (source.droppableId === 'warehouse') course = filteredGradCourses[source.index];
    else course = transcript.find(c => c.id === draggableId);
    if (!course) return;
    
    if (source.droppableId === 'warehouse') {
        const isDuplicate = transcript.some(t => t.name === course.name);
        if (isDuplicate) { alert(`'${course.name}'은(는) 이미 추가된 과목입니다.`); return; }
        
        if (!checkSemesterValid(course, targetYear, targetSemester)) {
            const info = getOpenInfo(course);
            alert(`🚫 배치 불가: '${course.name}'은(는) ${info} 에만 개설됩니다.\n(${targetYear}년 ${targetSemester}학기에는 개설되지 않음)`);
            return;
        }

        const courseWithTrack = { ...course, selected_track: determineDefaultTrack(course) };
        const preCheck = checkPrerequisites(course, targetYear, targetSemester);
        if (!preCheck.ok) { alert(preCheck.msg); return; }
        addCustomToTranscript(courseWithTrack, targetYear, targetSemester);
    } else {
        if (!checkSemesterValid(course, targetYear, targetSemester)) {
             const info = getOpenInfo(course);
             alert(`🚫 이동 불가: '${course.name}'은(는) ${info} 에만 개설됩니다.`);
             return;
        }
        moveTranscriptCourse(draggableId, targetYear, targetSemester);
    }
  };
  const handleAddCustom = () => {
    if (!customForm.name) return;
    const isDuplicate = transcript.some(t => t.name === customForm.name);
    if (isDuplicate) { alert(`'${customForm.name}'은(는) 이미 존재하는 과목입니다.`); return; }
    const randomId = Math.floor(Math.random() * 9000) + 1000;
    const creatorTag = `사용자지정 (달구 #${randomId})`;
    const tracks = (customForm.category_main === '심화' && customForm.category_sub === '트랙') ? [customForm.specific_track] : [];
    const newCourse = {
      id: `custom-${Date.now()}`,
      name: customForm.name,
      credit: parseInt(customForm.credit),
      category_main: customForm.category_main,
      category_sub: customForm.category_sub !== '선택안함' ? customForm.category_sub : '',
      classification: creatorTag,
      semester: ['1', '2', '여름', '겨울'],
      grade_level: '전',
      available_tracks: tracks,
      selected_track: tracks.length > 0 ? tracks[0] : '', 
      is_online: customForm.isOnline 
    };
    if (addNewCourseToWarehouse) addNewCourseToWarehouse(newCourse);
    setIsCustomOpen(false);
    setCustomForm({ name: '', credit: 3, category_main: '기초', category_sub: '선택안함', specific_track: '컴퓨터공학', isOnline: false });
  };
  
  const planningYears = Array.from({length: 10}, (_, i) => 2021 + i);
  const historyYears = Array.from({length: 6}, (_, i) => 2021 + i);
  const gpaThreshold = isEarlyGrad ? 3.5 : 2.0;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col h-screen bg-slate-50 font-sans text-slate-800">
        
        {/* Header */}
        <div className="h-14 lg:h-16 flex-shrink-0 bg-slate-900 text-white flex items-center justify-between px-4 lg:px-6 shadow-md z-30">
          <div className="flex items-center gap-3 lg:gap-4">
            <button onClick={() => setStep(0)} className="text-slate-400 hover:text-white transition" title="홈으로">
              <ArrowLeft size={18} className="lg:w-5 lg:h-5" />
            </button>
            <h1 className="text-lg lg:text-xl font-bold flex items-center gap-2">
              <GraduationCap size={20} className="lg:w-6 lg:h-6 text-blue-500" />
              <span className="hidden md:inline">졸업 <span className="text-blue-400">요리사</span></span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
                onClick={handleSaveClick}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-slate-700"
            >
                <Layout className="w-4 h-4" />
                <span className="hidden sm:inline">레시피 저장</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden p-6 gap-6">
          
          {/* 1. Left: Warehouse */}
          <div className="w-[22%] bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <div className="p-5 border-b border-slate-100 bg-white rounded-t-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2 text-slate-800">
                  <Library className="w-5 h-5 text-blue-600" /> 과목 창고
                </h2>
                <div className="flex gap-1">
                  <button onClick={() => setIsCustomOpen(true)} className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> 직접 추가
                  </button>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="과목명 검색..." className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>
            <Droppable droppableId="warehouse" isDropDisabled={true} renderClone={(provided, snapshot, rubric) => {
                const course = filteredGradCourses[rubric.source.index];
                return (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`bg-white p-3 rounded-xl border border-blue-400 shadow-xl w-[280px] flex flex-col gap-1`} style={{ ...provided.draggableProps.style }}>
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-sm text-slate-700">{course?.name}</span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{course?.credit}학점</span>
                    </div>
                    <div className="flex justify-between items-center text-xs mt-1">
                        <div className="flex items-center gap-1.5">
                          <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm tracking-tighter">{getCategoryLabel(course || {})}</span>
                          <span className="text-[11px] font-bold text-slate-500">{getOpenInfo(course || {})}</span>
                        </div>
                        <span className="text-slate-400">{course?.classification || '일반'}</span>
                    </div>
                  </div>
                );
              }}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2 bg-slate-50/50">
                  {filteredGradCourses.map((course, idx) => (
                    <Draggable key={`warehouse-${course.name}-${idx}`} draggableId={`warehouse-${course.name}-${idx}`} index={idx}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`bg-white p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md cursor-grab active:cursor-grabbing transition-all group flex flex-col gap-1 ${snapshot.isDragging ? 'opacity-50' : ''}`} style={{ ...provided.draggableProps.style }}>
                          <div className="flex justify-between items-start">
                            <span className="font-semibold text-sm text-slate-700">{course.name}</span>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{course.credit}학점</span>
                          </div>
                          <div className="flex flex-col gap-1 text-xs mt-1">
                             <div className="flex items-center gap-1.5">
                               <span className="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm tracking-tighter">{getCategoryLabel(course)}</span>
                               <span className="text-[11px] font-bold text-slate-500">{getOpenInfo(course)}</span>
                             </div>
                             {course.prerequisites && (
                                <div className="text-red-400 flex items-center gap-1" title={formatPrerequisites(course.prerequisites)}>
                                    <AlertCircle className="w-3 h-3 shrink-0" /> <span className="truncate">Pre: {formatPrerequisites(course.prerequisites)}</span>
                                </div>
                             )}
                             {course.effective_period && (
                                <div className="text-purple-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3 shrink-0" /> 
                                    <span className="truncate">
                                        {course.effective_period.start ? `${course.effective_period.start} 신설` : ''}
                                        {course.effective_period.end ? `${course.effective_period.end} 폐지` : ''}
                                    </span>
                                </div>
                             )}
                             {course.year_exception && (
                                <div className="text-blue-500 flex items-center gap-1">
                                    <Calendar className="w-3 h-3 shrink-0" /> 
                                    <span className="truncate">특정 학기 개설</span>
                                </div>
                             )}
                             {course.restriction_note && (
                                <div className="text-orange-400 flex items-center gap-1">
                                    <AlertTriangle className="w-3 h-3 shrink-0" /> 
                                    <span className="truncate">{course.restriction_note}</span>
                                </div>
                             )}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          {/* 2. Center: Semester Plan */}
          <div className="w-[56%] flex flex-col gap-4 overflow-hidden">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                  <select value={newSemYear} onChange={e=>setNewSemYear(e.target.value)} className="bg-slate-50 border p-1 rounded text-sm">{planningYears.map(y=><option key={y} value={y}>{y}년</option>)}</select>
                  <select value={newSemTerm} onChange={e=>setNewSemTerm(e.target.value)} className="bg-slate-50 border p-1 rounded text-sm"><option value="1">1학기</option><option value="2">2학기</option><option value="여름">여름</option><option value="겨울">겨울</option></select>
                  <button onClick={handleAddSemester} className="bg-slate-800 text-white text-xs px-3 py-1.5 rounded hover:bg-slate-700">+ 학기 추가</button>
               </div>
               <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-100 transition-colors">
                 <FolderOpen className="w-4 h-4" /> 진열대 불러오기
               </button>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-1">
              <div className="grid grid-cols-3 gap-4 items-start"> 
                {activeSemesters.map(key => {
                  const [year, semester] = key.split('-');
                  const courses = semesterData[key] || [];
                  const semCredit = courses.reduce((a,c)=>a+c.credit, 0);
                  const isCollapsed = collapsedSemesters[key]; 
                  const semGPA = calculateSemesterGPA(courses); 

                  return (
                    <StrictModeDroppable key={key} droppableId={key}>
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className={`bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col transition-all duration-200 ${snapshot.isDraggingOver ? 'border-blue-500 ring-4 ring-blue-50 shadow-lg scale-[1.02]' : 'border-slate-200'}`}>
                          <div className={`px-4 py-3 border-b flex justify-between items-center ${snapshot.isDraggingOver ? 'bg-blue-100 border-blue-200' : 'bg-slate-50 border-slate-100'}`}>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-lg text-slate-800">{year}-{semester}</span>
                                <span className="text-xs text-slate-500 mt-0.5">{semCredit}학점 ({semGPA})</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <button onClick={() => toggleSemesterCollapse(key)} className="text-slate-400 hover:text-blue-500 transition-colors p-1">
                                    {isCollapsed ? <ChevronDown className="w-4 h-4"/> : <ChevronUp className="w-4 h-4"/>}
                                </button>
                                <button onClick={() => handleRemoveSemester(key)} className="text-slate-400 hover:text-red-500 transition-colors p-1" title="학기 삭제">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                          </div>
                          {!isCollapsed && (
                              <div className="p-2 space-y-2 min-h-[100px] bg-white">
                                {courses.map((c, index) => (
                                  <CourseCard 
                                    key={c.id} 
                                    c={c} 
                                    index={index} 
                                    updateGrade={updateTranscriptGrade} 
                                    updateTrack={safeUpdateTranscriptTrack}
                                    remove={removeFromTranscript} 
                                  />
                                ))}
                                {provided.placeholder}
                                {courses.length === 0 && <div className="text-center text-xs text-slate-300 py-8">드래그하여 추가</div>}
                              </div>
                          )}
                          {isCollapsed && <div className="hidden">{provided.placeholder}</div>}
                        </div>
                      )}
                    </StrictModeDroppable>
                  )
                })}
              </div>
            </div>
          </div>

          {/* 3. Right: Dashboard */}
          <div className="w-[22%] flex flex-col gap-4 overflow-y-auto custom-scrollbar">
            
            <div className="bg-slate-800 rounded-xl shadow-lg border border-slate-700 p-5 text-white">
              <h3 className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" /> 예상 학위
              </h3>
              {/* ★ [수정됨] 학위명에 쉼표가 있을 경우 렌더링 시 자동 줄바꿈 적용 */}
              <div className="font-bold text-lg leading-snug text-blue-100">
                {degreeName.split(', ').map((text, index) => (
                    <div key={index}>{text}</div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4 text-slate-500" /> 트랙 설정 (시뮬레이션)
              </h3>
              <div className="space-y-3">
                <SelectBox label="주전공" value={targetMajor} onChange={setTargetMajor} options={Object.keys(trackRules)} color="blue" nullable />
                <SelectBox label="복수전공" value={targetDouble} onChange={setTargetDouble} options={Object.keys(trackRules).filter(t=>t!==targetMajor)} color="indigo" nullable />
                <SelectBox label="부전공" value={targetMinor} onChange={setTargetMinor} options={Object.keys(trackRules).filter(t=>t!==targetMajor)} color="slate" nullable disabled={targetDouble !== '없음' && targetDouble !== '미정'} />
              </div>
            </div>

            {/* 공통 요건 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-500"/> 공통 요건</span>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1 cursor-pointer hover:bg-slate-50 px-1 py-0.5 rounded transition-colors">
                    <input type="checkbox" checked={isEarlyGrad} onChange={(e) => setIsEarlyGrad(e.target.checked)} className="w-3 h-3 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-[10px] text-slate-500 font-bold">조기졸업</span>
                  </label>
                  <div className="w-px h-3 bg-slate-200"></div>
                  <select value={entryYear} onChange={handleEntryYearChange} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200 outline-none cursor-pointer hover:bg-slate-200">
                    {[2021, 2022, 2023, 2024, 2025, 2026].map(y => <option key={y} value={y}>{y}학번</option>)}
                  </select>
                </div>
              </h3>
              <div className="space-y-3">
                <RequirementItem label={`총 학점 (130)`} isPass={totalCredits >= 130}>
                   <span className={totalCredits >= 130 ? 'text-blue-600 font-bold' : ''}>{totalCredits} / 130</span>
                </RequirementItem>
                <RequirementItem label={`평점 (${gpaThreshold}+)`} isPass={currentGPA >= gpaThreshold}>{currentGPA}</RequirementItem>
                <RequirementItem label="학사경고 (3회 미만)" isPass={basicReqs.warningCount < 3}>
                   <div className="flex items-center gap-1">
                     <input type="number" className="w-8 text-center border rounded bg-slate-50 text-xs" value={basicReqs.warningCount} onChange={(e) => setBasicReqs({...basicReqs, warningCount: Number(e.target.value)})} /> 회
                   </div>
                </RequirementItem>
                <RequirementItem label={`온라인 학점 (Max 26)`} isPass={onlineCredits <= 26}>
                   <span className={onlineCredits > 26 ? 'text-red-500 font-bold' : ''}>{onlineCredits} / 26</span>
                </RequirementItem>
                
                <div className="pt-2 border-t border-dashed space-y-2">
                  {commonStatus.map((req, i) => (
                    <RequirementItem key={i} label={req.name} isPass={req.done}>{req.detail}</RequirementItem>
                  ))}
                </div>
              </div>
            </div>

            {/* 기초 요건 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-emerald-500"/> 기초 요건</span>
                <span className={`text-xs font-bold ${basicTotalCredits >= 58 ? 'text-blue-600' : 'text-slate-400'}`}>{basicTotalCredits} / 58</span>
              </h3>
              <div className="space-y-2">
                  {basicStatusList.map((req, i) => (
                    <RequirementItem key={i} label={req.name} isPass={req.done}>{req.detail}</RequirementItem>
                  ))}
              </div>
            </div>

            {/* 심화 요건 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-purple-500"/> 심화 요건</span>
                <span className={`text-xs font-bold ${advancedTotalCredits >= 72 ? 'text-blue-600' : 'text-slate-400'}`}>{advancedTotalCredits} / 72</span>
              </h3>
              <div className="space-y-2">
                  {advancedStatusList.map((req, i) => (
                    <RequirementItem key={i} label={req.name} isPass={req.done}>{req.detail}</RequirementItem>
                  ))}
              </div>
            </div>
            
            <TrackStatusCard title="주전공" trackName={targetMajor} status={majorStatus} color="indigo" />
            {targetDouble !== '없음' && targetDouble !== '미정' && <TrackStatusCard title="복수전공" trackName={targetDouble} status={doubleStatus} color="indigo" overlapMsg={doubleStatus?.overlapDeduction > 0 ? `중복 ${doubleStatus.duplicateCredits}학점 중 6학점만 인정` : null} />}
            {targetMinor !== '없음' && targetMinor !== '미정' && <TrackStatusCard title="부전공" trackName={targetMinor} status={minorStatus} color="indigo" /> }

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex justify-between gap-4 items-center justify-center">
              <CreditBox label="이학사 학점" current={sciCredits} total={27} />
              <div className="w-px bg-slate-200 h-8"></div>
              <CreditBox label="공학사 학점" current={engCredits} total={27} />
            </div>
          </div>

          {/* 커스텀 과목 생성 모달 */}
          {isCustomOpen && (
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-2xl w-[350px]">
                <h3 className="font-bold text-lg mb-6 text-slate-800">커스텀 과목 생성</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">과목명</label>
                    <input type="text" className="w-full border border-slate-200 p-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" value={customForm.name} onChange={e=>setCustomForm({...customForm, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">학점</label>
                    <input type="number" className="w-full border border-slate-200 p-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" value={customForm.credit} onChange={e=>setCustomForm({...customForm, credit: e.target.value})} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">이수구분 (대분류)</label>
                        <select className="w-full border border-slate-200 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500" value={customForm.category_main} onChange={e=>setCustomForm({...customForm, category_main: e.target.value})}>
                            {Object.keys(CATEGORY_MAP).map(key => <option key={key} value={key}>{key}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">영역 (소분류)</label>
                        <select className="w-full border border-slate-200 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500" value={customForm.category_sub} onChange={e=>setCustomForm({...customForm, category_sub: e.target.value})}>
                            {CATEGORY_MAP[customForm.category_main].map(sub => <option key={sub} value={sub}>{sub}</option>)}
                        </select>
                    </div>
                  </div>
                  {customForm.category_main === '심화' && customForm.category_sub === '트랙' && (
                      <div className="mt-3">
                          <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">세부 전공 (트랙)</label>
                          <select className="w-full border border-slate-200 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500" value={customForm.specific_track} onChange={e=>setCustomForm({...customForm, specific_track: e.target.value})}>
                              {TRACK_LIST.map(track => <option key={track} value={track}>{track}</option>)}
                          </select>
                      </div>
                  )}
                  <div className="mt-4">
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
                        <input type="checkbox" checked={customForm.isOnline} onChange={(e) => setCustomForm({...customForm, isOnline: e.target.checked})} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"/>
                        <span className="text-sm text-slate-600 font-medium">온라인 강의 (졸업학점의 20% 이내 인정)</span>
                    </label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>setIsCustomOpen(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 py-2.5 rounded-lg text-sm font-medium transition-colors">취소</button>
                  <button onClick={handleAddCustom} disabled={!customForm.name} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium disabled:opacity-50 transition-colors shadow-sm">생성</button>
                </div>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-2xl w-[450px] max-h-[80vh] flex flex-col">
                <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2"><Calendar className="w-5 h-5 text-blue-600" /> 진열대 가져오기</h3>
                <div className="overflow-y-auto flex-1 space-y-2 p-1 custom-scrollbar mb-4">
                  {savedTimetables.length === 0 ? <div className="text-center text-slate-400 py-10">저장된 시간표가 없습니다.</div> : 
                    savedTimetables.map(table => (
                      <div key={table.id} onClick={()=>setSelectedShelfId(table.id)} className={`border p-4 rounded-xl cursor-pointer flex justify-between items-center ${selectedShelfId===table.id?'border-blue-500 bg-blue-50 ring-2 ring-blue-500':'border-slate-100 hover:bg-slate-50'}`}>
                        <div><div className="font-bold text-sm text-slate-700">{table.title}</div><div className="text-xs text-slate-400 mt-1">{table.tag}</div></div>
                        {selectedShelfId === table.id && <CheckCircle2 className="w-5 h-5 text-blue-600"/>}
                      </div>
                    ))
                  }
                </div>
                {selectedShelfId && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
                    <p className="text-xs font-bold text-slate-500 mb-2">언제 학기로 추가할까요?</p>
                    <div className="flex gap-2">
                        <select value={importYear} onChange={(e)=>setImportYear(e.target.value)} className="flex-1 p-2 rounded border text-sm">{historyYears.map(y=><option key={y} value={y}>{y}년</option>)}</select>
                        <select value={importSemester} onChange={(e)=>setImportSemester(e.target.value)} className="flex-1 p-2 rounded border text-sm"><option value="1">1학기</option><option value="2">2학기</option></select>
                    </div>
                  </div>
                )}
                <div className="flex gap-2">
                    <button onClick={()=>setIsModalOpen(false)} className="flex-1 bg-slate-100 py-2 rounded">취소</button>
                    <button onClick={handleConfirmImport} disabled={!selectedShelfId} className="flex-1 bg-blue-600 text-white py-2 rounded">추가하기</button>
                </div>
              </div>
            </div>
          )}
          {isSaveModalOpen && (
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-2xl w-[350px]">
                <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
                    <Save className="w-5 h-5 text-blue-600" /> 레시피 저장하기
                </h3>
                <div className="mb-4">
                    <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">레시피 이름</label>
                    <input 
                        type="text" 
                        value={saveTitle} 
                        onChange={(e) => setSaveTitle(e.target.value)}
                        className="w-full border border-slate-200 p-2.5 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="예: 2026-1 졸업계획"
                        autoFocus
                    />
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setIsSaveModalOpen(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 py-2.5 rounded-lg text-sm font-medium transition-colors">
                    취소
                  </button>
                  <button onClick={confirmSaveRecipe} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                    저장
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

const CourseCard = ({ c, index, updateGrade, updateTrack, remove }) => {
    const courseType = getCourseType(c.name, c.selected_track);
    const displayTracks = c.available_tracks ? c.available_tracks.filter(t => t !== '기초학부') : [];

    return (
      <Draggable draggableId={c.id} index={index}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`bg-white border border-slate-200 rounded p-2 flex justify-between items-center shadow-sm cursor-grab active:cursor-grabbing group hover:border-blue-300 transition-all ${snapshot.isDragging ? 'shadow-lg ring-2 ring-blue-400 z-50' : ''}`} style={{ ...provided.draggableProps.style }}>
            <div className="flex items-center gap-2 truncate flex-1">
              <GripVertical className="w-4 h-4 text-slate-300" />
              <div className="truncate flex-1">
                <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-700 truncate">{c.name}</span>
                    {c.is_online && <Wifi className="w-3 h-3 text-blue-400 shrink-0" />}
                    {courseType && (
                        <span className={`text-[9px] px-1 py-0.5 rounded border ${courseType.style}`}>
                            {courseType.label}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span>{c.code} | {c.credit}학점</span>
                    {displayTracks.length > 1 && (
                        <select 
                            value={c.selected_track || ''} 
                            onChange={(e) => updateTrack(c.id, e.target.value)}
                            className="bg-slate-50 border border-slate-200 rounded px-1 py-0.5 text-[9px] outline-none cursor-pointer hover:bg-white"
                            onMouseDown={(e) => e.stopPropagation()} 
                        >
                            {displayTracks.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    )}
                    {displayTracks.length === 1 && (
                        <span className="text-slate-300">({displayTracks[0]})</span>
                    )}
                </div>
                {c.restriction_note && (
                    <div className="flex items-center gap-1 text-[10px] text-orange-500 mt-0.5">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span className="truncate">{c.restriction_note}</span>
                    </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <select value={c.grade} onChange={(e)=>updateGrade(c.id, e.target.value)} className="text-[10px] border rounded bg-slate-50 p-0.5 outline-none cursor-pointer">
                 {['A+','A0','A-','B+','B0','B-','C+','C0','C-','D+','D0','D-','F','S','U'].map(g=><option key={g}>{g}</option>)}
              </select>
              <button onClick={()=>remove(c.id)} className="text-slate-300 hover:text-red-500"><XCircle size={14}/></button>
            </div>
          </div>
        )}
      </Draggable>
    );
};

const SelectBox = ({ label, value, onChange, options, color, nullable, disabled }) => (
  <div className="space-y-1">
    <label className={`text-xs font-bold text-${color}-600 ${disabled ? 'opacity-50' : ''}`}>{label}</label>
    <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} className="w-full text-xs border rounded p-1.5 bg-slate-50 outline-none cursor-pointer">
      {nullable && <option value="없음">없음 (미정)</option>}
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

const RequirementItem = ({ label, isPass, children }) => (
  <div className="flex justify-between items-center text-xs">
    <span className="text-slate-500 truncate pr-2">{label}</span>
    <div className="flex items-center gap-1 shrink-0">
      <span className={isPass ? 'text-slate-700 font-bold' : 'text-slate-400'}>{children}</span>
      {isPass ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500"/> : <AlertCircle className="w-3.5 h-3.5 text-red-300"/>}
    </div>
  </div>
);

const TrackStatusCard = ({ title, trackName, status, color, overlapMsg }) => {
  if (!status) return null;
  const isPass = status.isPass;
  const { currentTrackCredits, requiredTrackCredits } = status;

  return (
    <div className={`bg-white rounded-xl shadow-sm border p-5 ${isPass ? 'border-slate-200' : 'border-red-100'}`}>
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
        <Award className="w-4 h-4 text-indigo-500"/>
        <h4 className="font-bold text-sm text-slate-800 flex items-center justify-between flex-1">
          <span>{title} <span className="text-slate-300 mx-1">|</span> {trackName}</span>
          <span className={`text-xs font-bold ${currentTrackCredits >= requiredTrackCredits ? 'text-blue-600' : 'text-slate-400'}`}>
            {currentTrackCredits} / {requiredTrackCredits}
          </span>
        </h4>
      </div>
      {overlapMsg && <div className="mb-2 text-[10px] text-orange-600 bg-orange-50 px-2 py-1 rounded border border-orange-100 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {overlapMsg}</div>}
      <div className="space-y-3">
        <RequirementItem label="이수 판정" isPass={isPass}>
            {isPass ? 'PASS' : 'FAIL'}
        </RequirementItem>
        <div className="pt-2 border-t border-dashed space-y-2">
            {status.requirements.map((req, i) => (
            <div key={i} className="flex justify-between items-center text-xs">
                <span className={`truncate pr-2 ${req.done?'text-slate-400 line-through':'text-slate-600'}`}>{req.name}</span>
                <span className={req.done?"text-blue-500":"text-red-300"}>{req.done?'V':'-'}</span>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const CreditBox = ({ label, current, total }) => (
  <div className="flex flex-col items-center justify-center flex-1">
     <div className="text-xs text-slate-400 mb-1">{label}</div>
     <div className={`font-bold text-sm ${current >= total ? 'text-blue-600' : 'text-slate-400'}`}>{current} / {total}</div>
  </div>
);

export default GraduationChef;