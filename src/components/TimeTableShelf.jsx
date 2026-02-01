import React, { useState, useRef, useMemo, useEffect } from 'react';
import useStore from '../store/useStore';
import { 
    ArrowLeft, Trash2, Download, X, LayoutGrid, Clock, GraduationCap, 
    FolderOpen, Pencil, Check, RotateCcw, Share2, Heart, Search, UploadCloud, Loader2, Globe, Lock
} from 'lucide-react';
import { toPng } from 'html-to-image';

const START_HOUR = 9;
const SLOT_HEIGHT = 60;

// 색상/타입 계산 로직
const getSmartType = (course) => {
    if (course.type) return course.type;
    if (course.fixedTypes && course.fixedTypes.length > 0) return course.fixedTypes[0];
    if (course.trackRelations) {
        const types = Object.values(course.trackRelations);
        if (types.length > 0) return types[0];
    }
    return '일반';
};

const getBlockColor = (rawType) => {
  const type = rawType || '일반';
  if (type.includes('전공필수')) return 'bg-blue-100 border-blue-600 text-blue-900';
  if (type.includes('전공선택')) return 'bg-sky-50 border-sky-300 text-sky-700';
  if (type.includes('기초필수')) return 'bg-slate-200 border-slate-500 text-slate-800';
  if (type.includes('기초선택')) return 'bg-gray-50 border-gray-300 text-gray-600';
  return 'bg-indigo-50 border-indigo-300 text-indigo-800';
};

const isMajorCredit = (c) => {
    const type = getSmartType(c);
    return type.includes('전공');
};

const TimeTableShelf = () => {
  const { 
    setStep, setMode, 
    savedTimetables = [], deleteFromShelf, updateShelfItem, 
    communityPosts, fetchCommunityPosts, uploadPost, deletePost, toggleLike, isLoadingPosts, likedPostIds 
  } = useStore();

  const [activeTab, setActiveTab] = useState('my');
  const [viewingTimetable, setViewingTimetable] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editTag, setEditTag] = useState('');
  const hiddenCaptureRef = useRef(null);

  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const [form, setForm] = useState({ title: '', tags: [] }); 
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [targetLocalTimetable, setTargetLocalTimetable] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const shelvedTimetables = useMemo(() => {
    const groups = {};
    savedTimetables.forEach(item => {
      const tag = item.tag || '기타';
      if (!groups[tag]) groups[tag] = [];
      groups[tag].push(item);
    });
    return groups;
  }, [savedTimetables]);

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return communityPosts;
    const lowerTerm = searchTerm.toLowerCase();
    return communityPosts.filter(post => 
        post.title?.toLowerCase().includes(lowerTerm) || 
        post.author?.toLowerCase().includes(lowerTerm) ||
        post.tag?.toLowerCase().includes(lowerTerm)
    );
  }, [communityPosts, searchTerm]);

  useEffect(() => {
    if (viewingTimetable && activeTab === 'my') {
      setEditTitle(viewingTimetable.title);
      setEditTag(viewingTimetable.tag);
      setIsEditing(false);
    }
  }, [viewingTimetable, activeTab]);

  useEffect(() => {
    if (activeTab === 'community') {
      fetchCommunityPosts();
    }
  }, [activeTab]);

  const handleDownloadImage = async () => {
    if (!hiddenCaptureRef.current) return;
    try {
      const dataUrl = await toPng(hiddenCaptureRef.current, { cacheBust: true, backgroundColor: '#ffffff', pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `${viewingTimetable.title}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("이미지 저장 실패:", err);
      alert("이미지 저장 중 오류가 발생했습니다.");
    }
  };

  const handleUpdate = () => {
    if (!editTitle.trim()) { alert("제목을 입력해주세요!"); return; }
    updateShelfItem(viewingTimetable.id, editTitle, editTag);
    setViewingTimetable(prev => ({ ...prev, title: editTitle, tag: editTag }));
    setIsEditing(false);
  };

  const handleUpload = async () => {
    if(!form.title) { alert("제목을 입력해주세요."); return; }
    setIsProcessing(true);
    const courses = targetLocalTimetable ? targetLocalTimetable.courses : null;
    const localId = targetLocalTimetable ? targetLocalTimetable.id : null;
    
    const tagString = form.tags.length > 0 ? form.tags.join(', ') : '';

    const success = await uploadPost(form.title, tagString, courses, localId);
    
    setIsProcessing(false);
    if(success) {
        setUploadModalOpen(false);
        setForm({ title: '', tags: [] });
        setTargetLocalTimetable(null);
        alert("게시글이 등록되었습니다!");
        if(activeTab !== 'community') setActiveTab('community');
    }
  };

  const handleDeleteShare = async () => {
    if(!targetLocalTimetable || !targetLocalTimetable.firebaseId) return;
    setIsProcessing(true);
    const success = await deletePost(targetLocalTimetable.firebaseId, targetLocalTimetable.id);
    setIsProcessing(false);
    if(success) {
        setIsDeleteModalOpen(false);
        setTargetLocalTimetable(null);
        setViewingTimetable(prev => ({ ...prev, firebaseId: null }));
        alert("공유가 취소되었습니다.");
    }
  };

  const handleShareClick = (timetable) => {
    setTargetLocalTimetable(timetable);
    if (timetable.firebaseId) {
        setIsDeleteModalOpen(true);
    } else {
        const initialTags = timetable.tag ? [timetable.tag] : [];
        setForm({ title: timetable.title, tags: initialTags });
        setUploadModalOpen(true);
    }
  };

  const toggleTag = (tag) => {
    setForm(prev => {
        const isSelected = prev.tags.includes(tag);
        const newTags = isSelected 
            ? prev.tags.filter(t => t !== tag) 
            : [...prev.tags, tag];
        return { ...prev, tags: newTags };
    });
  };

  // --- [뷰어 컴포넌트] ---
  const ShelfTimetableViewer = ({ timetableData }) => {
    const courses = timetableData.courses || [];
    const safeCourses = Array.isArray(courses) ? courses : [];
    
    const totalCredits = safeCourses.reduce((sum, c) => sum + (c.credit || 0), 0);
    const majorCredits = safeCourses.reduce((sum, c) => isMajorCredit(c) ? sum + (c.credit || 0) : sum, 0);

    const currentDays = useMemo(() => {
        const hasSaturday = safeCourses.some(c => c.times?.some(t => t.day === 5));
        return hasSaturday ? ['월', '화', '수', '목', '금', '토'] : ['월', '화', '수', '목', '금'];
    }, [safeCourses]);

    const dynamicEndHour = useMemo(() => {
        const maxScheduleTime = safeCourses.reduce((max, course) => {
          if (!course.times) return max;
          const courseEnd = Math.max(...course.times.map(t => t.start + t.duration));
          return Math.max(max, courseEnd);
        }, 18); 
        return Math.min(Math.ceil(maxScheduleTime), 22);
    }, [safeCourses]);

    const timeLabels = Array.from({ length: dynamicEndHour - START_HOUR + 1 }, (_, i) => START_HOUR + i);

    return (
        <div className="w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="text-center mb-8 border-b pb-6 border-slate-100">
                <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{timetableData.title}</h3>
                <div className="flex justify-center items-center gap-4 text-slate-500 text-sm md:text-base">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-bold rounded border border-slate-200 whitespace-nowrap">{timetableData.tag}</span>
                    <div className="w-px h-3 bg-slate-300"></div>
                    <div className="flex items-center gap-2 whitespace-nowrap"><Clock size={18} /> <span>총 {totalCredits} 학점</span></div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="flex items-center gap-2 text-blue-600 font-bold whitespace-nowrap"><GraduationCap size={20} /> <span>전공 {majorCredits} 학점</span></div>
                </div>
            </div>
            <div className="relative border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm select-none">
                <div className="flex border-b border-slate-200 bg-slate-50 h-10">
                    <div className="w-12 border-r border-slate-200 bg-slate-100/50"></div>
                    {currentDays.map(day => (<div key={day} className="flex-1 flex items-center justify-center font-bold text-slate-600 text-sm border-r border-slate-200 last:border-0">{day}</div>))}
                </div>
                <div className="flex relative" style={{ height: `${(dynamicEndHour - START_HOUR + 1) * SLOT_HEIGHT}px` }}>
                    <div className="w-12 flex-shrink-0 border-r border-slate-200 bg-slate-50 text-xs text-slate-400 font-medium text-right pr-2">
                        {timeLabels.map(t => (<div key={t} className="border-b border-slate-100 relative" style={{ height: `${SLOT_HEIGHT}px` }}><span className="absolute top-2 right-3">{t}</span></div>))}
                    </div>
                    {currentDays.map((day, dayIdx) => (
                        <div key={day} className="flex-1 relative border-r border-slate-100 border-dashed last:border-r-0">
                            {timeLabels.map(t => (<div key={t} className="border-b border-slate-50" style={{ height: `${SLOT_HEIGHT}px` }}></div>))}
                            {safeCourses.map(course => {
                                const timeInfo = course.times?.find(t => t.day === dayIdx);
                                if (!timeInfo) return null;
                                const currentType = getSmartType(course);
                                const colorClass = getBlockColor(currentType);
                                return (
                                    <div key={`${course.id}-${dayIdx}`} className={`absolute inset-x-1 border-l-4 p-1.5 overflow-hidden rounded-r shadow-sm ${colorClass}`} style={{ top: `${(timeInfo.start - START_HOUR) * SLOT_HEIGHT}px`, height: `${timeInfo.duration * SLOT_HEIGHT - 2}px` }}>
                                        <div className="font-bold text-[11px] leading-tight mb-0.5">{course.name}</div>
                                        <div className="text-[9px] opacity-90">{course.prof}</div>
                                        <div className="text-[8px] mt-0.5 font-bold opacity-70">{course.selectedTrack ? `[${course.selectedTrack}]` : currentType}</div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-6 text-center text-[10px] text-slate-300 font-bold tracking-widest uppercase">Generated by 시간표 요리사</p>
        </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      
      {/* Header & Tabs */}
      <div className="bg-slate-900 flex flex-col flex-shrink-0 z-10">
        <div className="h-14 border-b border-slate-800 flex items-center justify-between px-4 lg:px-6 text-white">
          <div className="flex items-center gap-4">
            <button onClick={() => { setMode(null); setStep(0); }} className="p-2 hover:bg-slate-800 rounded-full transition text-slate-300 hover:text-white">
              <ArrowLeft size={20}/>
            </button>
            <h1 className="text-lg font-bold flex items-center gap-2">
              <LayoutGrid className="text-blue-400" size={20}/>
              시간표 보관소
            </h1>
          </div>
          <div className="w-10"></div>
        </div>
        
        <div className="flex px-4 pt-2 gap-1">
            <button 
                onClick={() => setActiveTab('my')}
                className={`flex-1 py-3 text-sm font-bold rounded-t-xl transition-all flex items-center justify-center gap-2 ${activeTab === 'my' ? 'bg-slate-50 text-slate-800' : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
                <FolderOpen size={16}/> 내 진열대
            </button>
            <button 
                onClick={() => setActiveTab('community')}
                className={`flex-1 py-3 text-sm font-bold rounded-t-xl transition-all flex items-center justify-center gap-2 ${activeTab === 'community' ? 'bg-slate-50 text-slate-800' : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
                <Globe size={16}/> 공유마당
            </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50 custom-scrollbar">
        
        {/* [VIEW 1] 내 진열대 */}
        {activeTab === 'my' && (
            <>
                {(!savedTimetables || savedTimetables.length === 0) ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-4">
                    <LayoutGrid size={64} className="opacity-20"/>
                    <p className="text-lg font-medium">아직 진열된 시간표가 없습니다.</p>
                    <button onClick={() => { setMode('timetable'); setStep(1); }} className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/30">새 시간표 요리하러 가기</button>
                  </div>
                ) : (
                  <div className="max-w-5xl mx-auto space-y-12">
                    {Object.entries(shelvedTimetables).map(([tag, items]) => (
                      <div key={tag} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="text-xl font-black text-slate-700 mb-4 flex items-center gap-2">
                          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm shadow-sm">{tag}</span>
                          <span className="text-slate-400 text-sm font-medium">({items.length})</span>
                        </h3>
                        <div className="relative">
                          <div className="flex flex-wrap gap-6 px-4 relative z-10">
                            {items.map(item => (
                              <div key={item.id} onClick={() => setViewingTimetable(item)} className="w-56 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-slate-200 group flex flex-col overflow-hidden">
                                <div className="h-24 bg-slate-100 p-4 flex flex-col justify-between group-hover:bg-blue-50 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <FolderOpen className="text-slate-300 group-hover:text-blue-400" size={24}/>
                                        
                                        {/* 🔥 [신규] 카드 위에 바로 공유 버튼 표시 */}
                                        <div className="flex items-center gap-1">
                                            {item.firebaseId && <span className="text-[10px] bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded font-bold">공유됨</span>}
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleShareClick(item); }}
                                                className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-blue-500 shadow-sm border border-slate-200 hover:bg-blue-50 transition-colors"
                                                title="공유하기"
                                            >
                                                <Share2 size={14}/>
                                            </button>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-mono text-right">{new Date(item.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="p-4 bg-white flex-1 flex flex-col">
                                    <h4 className="font-bold text-slate-800 text-lg leading-tight line-clamp-2 mb-2 group-hover:text-blue-600">{item.title}</h4>
                                    <div className="mt-auto pt-3 border-t border-slate-100 flex flex-col gap-1 text-xs">
                                        <div className="flex justify-between items-center text-slate-500"><span className="flex items-center gap-1"><Clock size={12}/> 총 학점</span><span className="font-bold">{item.courses?.reduce((sum, c) => sum + (c.credit || 0), 0)}학점</span></div>
                                        <div className="flex justify-between items-center text-blue-600"><span className="flex items-center gap-1"><GraduationCap size={12}/> 전공</span><span className="font-bold">{item.courses?.reduce((sum, c) => isMajorCredit(c) ? sum + (c.credit || 0) : sum, 0)}학점</span></div>
                                    </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="absolute bottom-0 w-full h-4 bg-slate-300 rounded-full shadow-inner transform translate-y-2 z-0"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </>
        )}

        {/* [VIEW 2] 공유마당 */}
        {activeTab === 'community' && (
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                      <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="제목, 작성자, 태그로 검색..." 
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
                      />
                    </div>
                </div>

                {isLoadingPosts ? (
                     <div className="flex justify-center items-center py-20 text-slate-400 gap-2"><Loader2 className="animate-spin" size={24}/> 불러오는 중...</div>
                ) : filteredPosts.length === 0 ? (
                     <div className="text-center py-20 text-slate-400">
                        {searchTerm ? <p>검색 결과가 없습니다.</p> : <p>아직 공유된 시간표가 없습니다.<br/>첫 번째 주인공이 되어보세요!</p>}
                     </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map(post => {
                            const isLiked = likedPostIds.includes(post.id);
                            const userProfile = post.userProfile || {}; 
                            const majorCredits = post.courses?.reduce((sum, c) => isMajorCredit(c) ? sum + (c.credit || 0) : sum, 0);

                            return (
                                <div key={post.id} onClick={() => setViewingTimetable(post)} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all cursor-pointer group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-bold text-slate-800">{post.author}</span>
                                                </div>
                                                <span className="text-[10px] text-slate-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <span className="px-2 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-lg border border-slate-100">#{post.tag}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-1">{post.title}</h3>
                                    
                                    <div className="w-full bg-slate-50 rounded-xl mb-4 border border-slate-100 p-4 flex justify-evenly items-center">
                                        <div className="text-center min-w-[50px]">
                                            <div className="text-xs text-slate-400 mb-0.5">총 학점</div>
                                            <div className="text-lg font-black text-slate-700">{post.courses?.reduce((acc, c) => acc + (c.credit || 0), 0)}</div>
                                        </div>
                                        
                                        <div className="w-px h-8 bg-slate-200"></div>
                                        
                                        <div className="text-center min-w-[50px]">
                                            <div className="text-xs text-blue-400 mb-0.5 font-bold">전공</div>
                                            <div className="text-lg font-black text-blue-600">{majorCredits}</div>
                                        </div>

                                        <div className="w-px h-8 bg-slate-200"></div>
                                        
                                        <div className="text-center flex flex-col items-center justify-center min-w-[100px]">
                                            {userProfile.semester ? (
                                                <span className="text-[10px] bg-white border border-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold mb-1 shadow-sm">
                                                    {userProfile.semester}학기차
                                                </span>
                                            ) : (
                                                <span className="text-xs text-slate-400 mb-1">전공/트랙</span>
                                            )}

                                            {userProfile.major ? (
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="text-sm font-black text-slate-700 leading-tight break-keep">{userProfile.major}</span>
                                                    
                                                    {userProfile.doubleMajor && userProfile.doubleMajor !== '미정' && (
                                                        <div className="text-[9px] text-slate-500 flex items-center gap-1 whitespace-nowrap">
                                                            <span className="font-bold">복수:</span>
                                                            <span>{userProfile.doubleMajor}</span>
                                                        </div>
                                                    )}
                                                    
                                                    {userProfile.minor && userProfile.minor !== '미정' && (
                                                        <div className="text-[9px] text-slate-500 flex items-center gap-1 whitespace-nowrap">
                                                            <span className="font-bold">부:</span>
                                                            <span>{userProfile.minor}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-xs font-bold text-slate-400">정보 없음</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); toggleLike(post.id); }} 
                                            className={`flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-full ${isLiked ? 'bg-pink-500 text-white' : 'bg-pink-50 text-pink-500 hover:bg-pink-100'}`}
                                        >
                                            <Heart size={16} fill={isLiked ? "currentColor" : "none"}/><span className="text-xs font-bold">{post.likes}</span>
                                        </button>
                                        <span className="text-xs text-slate-300">클릭해서 상세 보기</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        )}

      </div>

      {/* --- Modals --- */}
      {viewingTimetable && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-4 px-6 border-b border-slate-100 flex justify-between items-center bg-white flex-shrink-0">
              
              {activeTab === 'my' && isEditing ? (
                <div className="flex items-center gap-2 flex-1 mr-4">
                  <div className="flex flex-col gap-2 w-full max-w-sm">
                    <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="border border-blue-300 rounded-lg px-3 py-1.5 text-lg font-bold outline-none focus:ring-2 focus:ring-blue-200" placeholder="제목 입력"/>
                    <div className="flex gap-2">
                      {['26봄', '26가을', '계절', '기타'].map(tag => (
                        <button key={tag} onClick={() => setEditTag(tag)} className={`px-2 py-1 text-xs rounded-md border ${editTag === tag ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-500 border-slate-200'}`}>{tag}</button>
                      ))}
                    </div>
                  </div>
                  <button onClick={handleUpdate} className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200"><Check size={20}/></button>
                  <button onClick={() => setIsEditing(false)} className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200"><RotateCcw size={20}/></button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-bold mb-0.5">
                            {viewingTimetable.author ? `작성자: ${viewingTimetable.author}` : `진열대 No. ${viewingTimetable.id?.toString().slice(-4)}`}
                            <span className="ml-2 inline-block px-1.5 py-0.5 bg-slate-100 rounded text-slate-500 font-normal border border-slate-200">{viewingTimetable.tag}</span>
                        </span>
                        <div className="flex items-center gap-2 group">
                            <h2 className="text-xl font-bold text-slate-800">{viewingTimetable.title}</h2>
                            {activeTab === 'my' && (
                                <button onClick={() => setIsEditing(true)} className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-blue-500"><Pencil size={16}/></button>
                            )}
                        </div>
                    </div>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                {activeTab === 'my' && (
                    <>
                        <button 
                            onClick={() => handleShareClick(viewingTimetable)}
                            className={`flex items-center gap-1.5 px-3 py-2 rounded-full transition font-bold text-sm ${viewingTimetable.firebaseId ? 'bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                        >
                            {viewingTimetable.firebaseId ? (
                                <><span>공유됨 (취소)</span></>
                            ) : (
                                <><Share2 size={16}/> <span>공유</span></>
                            )}
                        </button>
                        <div className="w-px h-6 bg-slate-200 mx-1"></div>
                        <button onClick={() => { if(window.confirm('삭제하시겠습니까?')) { deleteFromShelf(viewingTimetable.id); setViewingTimetable(null); } }} className="p-2 text-red-400 hover:bg-red-50 rounded-full transition"><Trash2 size={20}/></button>
                    </>
                )}
                <button onClick={() => setViewingTimetable(null)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition"><X size={24}/></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto bg-slate-50 p-6 custom-scrollbar"><div className="max-w-3xl mx-auto"><ShelfTimetableViewer timetableData={isEditing ? { ...viewingTimetable, title: editTitle, tag: editTag } : viewingTimetable} /></div></div>
            <div className="p-4 border-t border-slate-100 bg-white flex justify-center flex-shrink-0"><button onClick={handleDownloadImage} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 shadow-lg hover:shadow-blue-500/30 transition-all"><Download size={20}/> 이미지로 저장하기</button></div>
          </div>
        </div>
      )}

      {/* 2. Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative">
                <button onClick={() => setUploadModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><UploadCloud className="text-blue-500"/> 시간표 공유하기</h2>
                <div className="space-y-4">
                    <div><label className="text-xs font-bold text-slate-500 ml-1">제목</label><input value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 font-bold" placeholder="예: 26학번 생존 시간표"/></div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 ml-1">태그</label>
                        {/* 가로 스크롤 & 1줄 표시 */}
                        <div className="flex gap-2 mt-1 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <style>{` .hide-scroll::-webkit-scrollbar { display: none; } `}</style>
                            <div className="flex gap-2 hide-scroll">
                                {['공강', '우주공강', '아침형 인간', '저녁형 인간', '디지스트 헤르미온느'].map(tag => (
                                    <button 
                                        key={tag} 
                                        onClick={() => toggleTag(tag)} 
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all whitespace-nowrap flex-shrink-0 ${form.tags.includes(tag) ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-slate-200 text-slate-400'}`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center text-xs text-slate-400">닉네임과 전공 정보는 자동으로 포함됩니다.</div>
                <button onClick={handleUpload} disabled={isProcessing} className="w-full mt-2 py-3.5 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">{isProcessing ? <Loader2 className="animate-spin"/> : <UploadCloud size={20}/>} {isProcessing ? '업로드 중...' : '게시글 등록하기'}</button>
            </div>
        </div>
      )}

      {/* 3. Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6 relative">
                <button onClick={() => setIsDeleteModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X size={24}/></button>
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 text-red-500"><Lock size={20}/> 공유 취소</h2>
                <p className="text-sm text-slate-600 mb-6 text-center">
                    공유된 시간표를 삭제하시겠습니까?<br/>
                    <span className="text-xs text-slate-400">(내 진열대의 시간표는 유지됩니다)</span>
                </p>
                <button onClick={handleDeleteShare} disabled={isProcessing} className="w-full mt-2 py-3.5 bg-red-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all">{isProcessing ? <Loader2 className="animate-spin"/> : <Trash2 size={20}/>} {isProcessing ? '삭제 중...' : '공유 중단하기'}</button>
            </div>
        </div>
      )}

      {/* Hidden Capture View */}
      {viewingTimetable && (
        <div style={{ position: 'fixed', top: 0, left: '-9999px', width: '1280px', zIndex: -100, padding: '60px', backgroundColor: '#f8fafc' }}>
            <div ref={hiddenCaptureRef}><ShelfTimetableViewer timetableData={viewingTimetable} /></div>
        </div>
      )}
    </div>
  );
};

export default TimeTableShelf;