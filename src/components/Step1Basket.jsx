// src/components/Step1Basket.jsx
import React, { useState } from 'react';
import useStore from '../store/useStore';
import { MOCK_COURSES, ALL_TAGS } from '../data/courses';
import { Search, Plus, Check, ArrowLeft, ArrowRight, ShoppingBasket } from 'lucide-react';

const Step1Basket = () => {
  const { setStep, basket = [], toggleBasket } = useStore(); 
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  // 검색 로직
  const filteredCourses = MOCK_COURSES
    .filter(course => 
      course.name.includes(search) || course.id.toLowerCase().includes(search.toLowerCase())
    )
    .filter(course => 
      (selectedTags || []).length === 0 || selectedTags.every(tag => (course.tags || []).includes(tag))
    )
    .sort((a, b) => a.name.localeCompare(b.name, 'ko'));

  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      (prev || []).includes(tag) ? prev.filter(t => t !== tag) : [...(prev || []), tag]
    );
  };

  return (
    <div className="h-full w-full bg-slate-50 dark:bg-slate-900 flex flex-col p-4 md:p-8 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* 중앙 정렬 컨테이너 */}
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col">
        
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <button onClick={() => setStep(0)} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition font-medium flex items-center gap-2">
            <ArrowLeft size={20} /> 홈으로
          </button>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">재료 담기</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">듣고 싶은 과목을 골라주세요</p>
          </div>
          <button 
            onClick={() => setStep(2)}
            disabled={(basket || []).length === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition shadow-lg ${
              (basket || []).length > 0 
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20' 
              : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
            }`}
          >
            다음 단계 <ArrowRight size={18} />
          </button>
        </div>

        {/* 검색창 & 태그 */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="과목명, 교수명, 과목코드 검색..." 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition dark:text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* 과목 리스트 */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
            {filteredCourses.map(course => {
              const isAdded = (basket || []).some(item => item.id === course.id);
              return (
                <div 
                  key={course.id}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center group ${
                    isAdded 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500' 
                    : 'border-transparent bg-white dark:bg-slate-800 hover:border-blue-200 dark:hover:border-slate-600 shadow-sm hover:shadow-md'
                  }`}
                  onClick={() => toggleBasket(course)}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isAdded ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                      }`}>
                        {course.id}
                      </span>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-blue-600 transition-colors">
                        {course.name}
                      </h3>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <span>{course.prof}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span>{course.credit}학점</span>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    isAdded 
                    ? 'bg-blue-500 text-white scale-110 shadow-lg shadow-blue-500/30' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-500'
                  }`}>
                    {isAdded ? <Check size={20} strokeWidth={3} /> : <Plus size={24} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* 하단 플로팅 장바구니 요약 */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 z-50 hover:scale-105 transition-transform cursor-pointer" onClick={() => basket.length > 0 && setStep(2)}>
        <div className="relative">
          <ShoppingBasket size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900 dark:border-blue-600">
            {basket.length}
          </span>
        </div>
        <span className="font-bold pr-2">담은 과목 확인하기</span>
      </div>
    </div>
  );
};

export default Step1Basket;