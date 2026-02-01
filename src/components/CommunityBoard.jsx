import React, { useEffect, useState } from 'react';
import useStore from '../store/useStore';
import { ArrowLeft, Heart, MessageCircle, Share2, Search, Filter, User, Plus, X, UploadCloud, Loader2 } from 'lucide-react';

const CommunityBoard = () => {
  const { setStep, setMode, communityPosts, fetchCommunityPosts, uploadPost, toggleLike, isLoadingPosts } = useStore();
  
  // 업로드 모달 상태
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [form, setForm] = useState({ title: '', author: '', tag: '26봄', password: '' });
  const [isUploading, setIsUploading] = useState(false);

  // 컴포넌트 마운트 시 데이터 불러오기
  useEffect(() => {
    fetchCommunityPosts();
  }, []);

  const handleUpload = async () => {
    if(!form.title || !form.author || !form.password) {
        alert("모든 항목을 입력해주세요.");
        return;
    }
    setIsUploading(true);
    const success = await uploadPost(form.title, form.author, form.tag, form.password);
    setIsUploading(false);
    
    if(success) {
        setUploadModalOpen(false);
        setForm({ title: '', author: '', tag: '26봄', password: '' });
        alert("게시글이 등록되었습니다!");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      
      {/* Header */}
      <div className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 lg:px-6 flex-shrink-0 z-10 text-white">
        <div className="flex items-center gap-4">
          <button onClick={() => { setMode(null); setStep(0); }} className="p-2 hover:bg-slate-800 rounded-full transition text-slate-300 hover:text-white">
            <ArrowLeft size={20}/>
          </button>
          <h1 className="text-lg font-bold flex items-center gap-2">
            <Share2 className="text-pink-400" size={20}/>
            시간표 공유마당 <span className="text-xs bg-pink-600 px-2 py-0.5 rounded-full">LIVE</span>
          </h1>
        </div>
        <button onClick={fetchCommunityPosts} className="p-2 hover:bg-slate-800 rounded-full text-slate-400">
           <Filter size={18}/>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          
          {/* Action Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
              <input 
                type="text" 
                placeholder="제목, 작성자 검색 (준비중)" 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-200 text-sm"
              />
            </div>
            <button 
                onClick={() => setUploadModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl text-sm font-bold hover:bg-pink-600 shadow-md shadow-pink-200 transition-all hover:-translate-y-1"
            >
                <UploadCloud size={18}/>
                내 시간표 올리기
            </button>
          </div>

          {/* Posts List */}
          {isLoadingPosts ? (
             <div className="flex justify-center items-center py-20 text-slate-400 gap-2">
                <Loader2 className="animate-spin" size={24}/> 불러오는 중...
             </div>
          ) : communityPosts.length === 0 ? (
             <div className="text-center py-20 text-slate-400">
                <p>아직 공유된 시간표가 없습니다.<br/>첫 번째 주인공이 되어보세요!</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityPosts.map(post => (
                <div key={post.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg hover:border-pink-100 transition-all cursor-pointer group">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">
                                {post.author[0]}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-700">{post.author}</span>
                                <span className="text-[10px] text-slate-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <span className="px-2 py-1 bg-slate-50 text-slate-500 text-xs font-bold rounded-lg border border-slate-100">
                            #{post.tag}
                        </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors line-clamp-1">
                        {post.title}
                    </h3>
                    
                    {/* Mini Preview (간단 통계) */}
                    <div className="w-full bg-slate-50 rounded-xl mb-4 border border-slate-100 p-4 flex justify-around items-center">
                        <div className="text-center">
                            <div className="text-xs text-slate-400">총 학점</div>
                            <div className="text-lg font-black text-slate-700">{post.courses?.reduce((acc, c) => acc + (c.credit || 0), 0)}</div>
                        </div>
                        <div className="w-px h-8 bg-slate-200"></div>
                        <div className="text-center">
                            <div className="text-xs text-slate-400">과목 수</div>
                            <div className="text-lg font-black text-slate-700">{post.courses?.length}</div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-slate-50 pt-3">
                        <button 
                            onClick={(e) => { e.stopPropagation(); toggleLike(post.id); }}
                            className="flex items-center gap-1.5 text-pink-500 hover:text-pink-600 transition-colors bg-pink-50 px-3 py-1.5 rounded-full"
                        >
                            <Heart size={16} fill="currentColor"/>
                            <span className="text-xs font-bold">{post.likes}</span>
                        </button>
                        <span className="text-xs text-slate-300">클릭해서 상세 보기</span>
                    </div>
                </div>
                ))}
            </div>
          )}

        </div>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative">
                <button onClick={() => setUploadModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                    <X size={24}/>
                </button>
                
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <UploadCloud className="text-pink-500"/> 시간표 공유하기
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-slate-500 ml-1">제목</label>
                        <input 
                            value={form.title} onChange={e => setForm({...form, title: e.target.value})}
                            className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 font-bold"
                            placeholder="예: 26학번 생존 시간표"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 ml-1">닉네임</label>
                            <input 
                                value={form.author} onChange={e => setForm({...form, author: e.target.value})}
                                className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 text-sm"
                                placeholder="익명"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 ml-1">비밀번호 (삭제용)</label>
                            <input 
                                type="password"
                                value={form.password} onChange={e => setForm({...form, password: e.target.value})}
                                className="w-full mt-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-pink-500 text-sm"
                                placeholder="****"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 ml-1">태그</label>
                        <div className="flex gap-2 mt-1">
                            {['26봄', '26가을', '꿀강', '망함'].map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setForm({...form, tag})}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${form.tag === tag ? 'bg-pink-500 border-pink-500 text-white' : 'bg-white border-slate-200 text-slate-400'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <button 
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="w-full mt-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all"
                >
                    {isUploading ? <Loader2 className="animate-spin"/> : <UploadCloud size={20}/>}
                    {isUploading ? '업로드 중...' : '게시글 등록하기'}
                </button>
            </div>
        </div>
      )}

    </div>
  );
};

export default CommunityBoard;