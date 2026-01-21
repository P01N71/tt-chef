// src/data/courses.js

export const ALL_TAGS = [
  "기초필수", "기초선택", "전공필수", "전공선택",
  "컴퓨터공학", "수학", "물리학", "화학", "생명과학", "공학선택", "영어",
  "뇌과학", "기계공학", "전자공학", "재료공학", "화학공학", "읽기,쓰기 중점", "비트랙/융합", "인턴십" 
];

export const MOCK_COURSES = [
  {
    id: "BE101a-01",
    name: "프로그래밍",
    prof: "목지수",
    credit: 3,
    tags: ["기초필수", "컴퓨터공학"],
    times: [{ day: 1, start: 9, duration: 2 }, { day: 3, start: 9, duration: 2 }]
  },
  {
    id: "BE202-01",
    name: "데이터사이언스기초",
    prof: "장준기",
    credit: 3,
    tags: ["기초필수", "컴퓨터공학"],
    times: [{ day: 1, start: 13, duration: 2 }, { day: 3, start: 13, duration: 2 }]
  },
  {
    id: "BE202-02",
    name: "데이터사이언스기초",
    prof: "길현재",
    credit: 3,
    tags: ["기초필수", "컴퓨터공학"],
    times: [{ day: 0, start: 15, duration: 2 }, { day: 2, start: 15, duration: 2 }]
  },
  {
    id: "BE203-01",
    name: "창의기계설계",
    prof: "박준혁",
    credit: 3,
    tags: ["기초필수", "공학선택"],
    times: [{ day: 4, start: 9, duration: 3 }]
  },
  {
    id: "BE203-02",
    name: "창의기계설계",
    prof: "송석호",
    credit: 3,
    tags: ["기초필수", "공학선택"],
    times: [{ day: 0, start: 14.5, duration: 3 }]
  },
  {
    id: "BE205-01",
    name: "회로이론과 계측법(이론)",
    prof: "이정협",
    credit: 2,
    tags: ["기초필수", "공학선택"],
    times: [{ day: 3, start: 17, duration: 2 }]
  },
  {
    id: "BE205-02",
    name: "회로이론과 계측법(이론)",
    prof: "송민영",
    credit: 2,
    tags: ["기초필수", "공학선택"],
    times: [{ day: 1, start: 17, duration: 2 }]
  },
  {
    id: "BR301-01",
    name: "뇌과학실험I(이)",
    prof: "조용철, 김규형, 오용석",
    credit: 3,
    tags: ["전공선택", "뇌과학"],
    times: [{ day: 4, start: 9, duration: 3 }]
  },
  {
    id: "BR403-01",
    name: "신경재생 및 퇴행(이)",
    prof: "조용철",
    credit: 3,
    tags: ["전공선택", "뇌과학"],
    times: [{ day: 1, start: 14.5, duration: 1.5 }, { day: 3, start: 14.5, duration: 1.5 }]
  },
  {
    id: "BR404-01",
    name: "학습과 기억(이)",
    prof: "박포정",
    credit: 3,
    tags: ["전공선택", "뇌과학"],
    times: [{ day: 1, start: 16.5, duration: 1.5 }, { day: 3, start: 16.5, duration: 1.5 }]
  },
  {
    id: "BS102a-01",
    name: "공학수학I",
    prof: "안흥주",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 1, start: 13, duration: 2 }, { day: 3, start: 13, duration: 2 }]
  },
  {
    id: "BS102a-02",
    name: "공학수학I",
    prof: "Hudson Thomas Bryan",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 1, start: 16.5, duration: 2 }, { day: 3, start: 16.5, duration: 2 }]
  },
  {
    id: "BS102a-03",
    name: "공학수학I",
    prof: "Carlos Scarinci",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 0, start: 9, duration: 2 }, { day: 2, start: 9, duration: 2 }]
  },
  {
    id: "BS102a-04",
    name: "공학수학I",
    prof: "Carlos Scarinci",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 0, start: 16, duration: 2 }, { day: 2, start: 16, duration: 2 }]
  },
  {
    id: "BS102a-05",
    name: "공학수학I",
    prof: "미정",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 1, start: 11, duration: 2 }, { day: 3, start: 11, duration: 2 }]
  },
  {
    id: "BS103a-01",
    name: "일반물리I",
    prof: "DEVECIOGLU DENIZ OLGU",
    credit: 3,
    tags: ["기초필수", "물리학"],
    times: [{ day: 1, start: 15, duration: 1.5 }, { day: 3, start: 15, duration: 1.5 }]
  },
  {
    id: "BS103a-02",
    name: "일반물리I",
    prof: "DEVECIOGLU DENIZ OLGU",
    credit: 3,
    tags: ["기초필수", "물리학"],
    times: [{ day: 1, start: 11, duration: 1.5 }, { day: 3, start: 11, duration: 1.5 }]
  },
  {
    id: "BS103a-03",
    name: "일반물리I",
    prof: "DEVECIOGLU DENIZ OLGU",
    credit: 3,
    tags: ["기초필수", "물리학"],
    times: [{ day: 1, start: 17, duration: 1.5 }, { day: 3, start: 17, duration: 1.5 }]
  },
  {
    id: "BS103a-04",
    name: "일반물리I",
    prof: "미정",
    credit: 3,
    tags: ["기초필수", "물리학"],
    times: [{ day: 2, start: 15, duration: 1.5 }, { day: 4, start: 15, duration: 1.5 }]
  },
  {
    id: "BS104a-01",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    tags: ["기초필수", "물리학"],
    times: [{ day: 0, start: 16, duration: 2 }]
  },
  {
    id: "BS104a-02",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    tags: ["기초필수", "물리학"],
    times: [{ day: 2, start: 14, duration: 2 }]
  },
  {
    id: "BS104a-03",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    tags: ["기초필수", "물리학"],
    times: [{ day: 0, start: 13, duration: 2 }]
  },
  {
    id: "BS104a-04",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    tags: ["기초필수", "물리학"],
    times: [{ day: 0, start: 10.5, duration: 2 }]
  },
  {
    id: "BS104a-05",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    tags: ["기초필수", "물리학"],
    times: [{ day: 2, start: 11, duration: 2 }]
  },
  {
    id: "BS104a-06",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    tags: ["기초필수", "물리학"],
    times: [{ day: 2, start: 16, duration: 2 }]
  },
  {
    id: "BS104a-07",
    name: "일반물리실험I",
    prof: "박기성",
    credit: 1,
    tags: ["기초필수", "물리학"],
    times: [{ day: 1, start: 13, duration: 2 }]
  },
  {
    id: "BS113-01",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    tags: ["기초필수", "화학"],
    times: [{ day: 2, start: 9, duration: 2 }]
  },
  {
    id: "BS113-02",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    tags: ["기초필수", "화학"],
    times: [{ day: 0, start: 9, duration: 2 }]
  },
  {
    id: "BS113-03",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    tags: ["기초필수", "화학"],
    times: [{ day: 0, start: 15, duration: 2 }]
  },
  {
    id: "BS113-04",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    tags: ["기초필수", "화학"],
    times: [{ day: 0, start: 13, duration: 2 }]
  },
  {
    id: "BS113-05",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    tags: ["기초필수", "화학"],
    times: [{ day: 2, start: 14, duration: 2 }]
  },
  {
    id: "BS113-06",
    name: "일반화학실험I",
    prof: "미정",
    credit: 1,
    tags: ["기초필수", "화학"],
    times: [{ day: 2, start: 16, duration: 2 }]
  },
  {
    id: "BS113-07",
    name: "일반화학실험I",
    prof: "미정",
    credit: 1,
    tags: ["기초필수", "화학"],
    times: [{ day: 3, start: 13, duration: 2 }]
  },
  {
    id: "BS114-01",
    name: "생명과학개론",
    prof: "이석규",
    credit: 3,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 1, start: 11, duration: 1.5 }, { day: 3, start: 11, duration: 1.5 }]
  },
  {
    id: "BS114-02",
    name: "생명과학개론",
    prof: "이효상",
    credit: 3,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }]
  },
  {
    id: "BS115-01",
    name: "일반생물학 실험",
    prof: "김유리",
    credit: 1,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 0, start: 9, duration: 2 }]
  },
  {
    id: "BS115-02",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 2, start: 11, duration: 2 }]
  },
  {
    id: "BS115-03",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 1, start: 11, duration: 2 }]
  },
  {
    id: "BS115-04",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 3, start: 11, duration: 2 }]
  },
  {
    id: "BS115-05",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 2, start: 9, duration: 2 }]
  },
  {
    id: "BS115-06",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 2, start: 14, duration: 2 }]
  },
  {
    id: "BS115-07",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 2, start: 16, duration: 2 }]
  },
  {
    id: "BS116-01",
    name: "일반생물학I",
    prof: "정찬, 곽준명, 김민식",
    credit: 3,
    tags: ["기초필수", "생명과학"],
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }]
  },
  {
    id: "BS118-01",
    name: "일반화학I",
    prof: "미정",
    credit: 3,
    tags: ["기초필수", "화학"],
    times: [{ day: 0, start: 13, duration: 3 }]
  },
  {
    id: "BS118-02",
    name: "일반화학I",
    prof: "SANGARAJU SHANMUGAM",
    credit: 3,
    tags: ["기초필수", "화학"],
    times: [{ day: 1, start: 14, duration: 1.5 }, { day: 3, start: 14, duration: 1.5 }]
  },
  {
    id: "BS118-03",
    name: "일반화학I",
    prof: "남은주",
    credit: 3,
    tags: ["기초필수", "화학"],
    times: [{ day: 2, start: 9, duration: 1.5 }, { day: 4, start: 9, duration: 1.5 }]
  },
  {
    id: "BS118-04",
    name: "일반화학I",
    prof: "미정",
    credit: 3,
    tags: ["기초필수", "화학"],
    times: [{ day: 1, start: 16, duration: 1.5 }, { day: 3, start: 16, duration: 1.5 }]
  },
  {
    id: "BS118-05",
    name: "일반화학I",
    prof: "미정",
    credit: 3,
    tags: ["기초필수", "화학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "BS202-01",
    name: "확률과 통계 및 실습",
    prof: "미정",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 1, start: 16, duration: 2 }, { day: 3, start: 16, duration: 2 }]
  },
  {
    id: "BS203-01",
    name: "선형대수학",
    prof: "한강진",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 0, start: 13, duration: 2 }, { day: 2, start: 13, duration: 2 }]
  },
  {
    id: "BS203-02",
    name: "선형대수학",
    prof: "한강진",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 1, start: 16, duration: 2 }, { day: 3, start: 16, duration: 2 }]
  },
  {
    id: "BS203-03",
    name: "선형대수학",
    prof: "이두석",
    credit: 3,
    tags: ["기초필수", "수학"],
    times: [{ day: 0, start: 9, duration: 2 }, { day: 2, start: 9, duration: 2 }]
  },
  {
    id: "CE303-01",
    name: "화학공학열역학(공)",
    prof: "고서진",
    credit: 3,
    tags: ["전공필수", "화학공학"],
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }]
  },
  {
    id: "CE401-01",
    name: "고분자개론(이,공)",
    prof: "호동해",
    credit: 3,
    tags: ["전공선택", "화학공학", "화학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "CE402-01",
    name: "화학제품 및 공정설계(공)",
    prof: "김찬연",
    credit: 3,
    tags: ["전공선택", "화학공학"],
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }]
  },
  {
    id: "CHEM201-01",
    name: "분석화학(이,공)",
    prof: "이호춘",
    credit: 3,
    tags: ["전공필수", "화학", "재료공학", "화학공학"],
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }]
  },
  {
    id: "CHEM205-01",
    name: "유기화학I(이,공)",
    prof: "정병혁",
    credit: 3,
    tags: ["전공필수", "화학", "재료공학", "화학공학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "CHEM206-01",
    name: "일반화학실험II(이)",
    prof: "미정",
    credit: 1,
    tags: ["전공선택", "화학"],
    times: [{ day: 2, start: 13, duration: 2 }]
  },
  {
    id: "CHEM301-01",
    name: "심화화학실험I(이)",
    prof: "홍선기, 인수일",
    credit: 2,
    tags: ["전공필수", "화학"],
    times: [{ day: 1, start: 12.5, duration: 4 }]
  },
  {
    id: "CHEM305-01",
    name: "무기화학II(이,공)",
    prof: "김성균",
    credit: 3,
    tags: ["전공선택", "화학", "화학공학"],
    times: [{ day: 0, start: 15, duration: 1.5 }, { day: 2, start: 15, duration: 1.5 }]
  },
  {
    id: "CHEM306-01",
    name: "물리화학II(이,공)",
    prof: "성주영",
    credit: 3,
    tags: ["전공선택", "화학", "화학공학"],
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }]
  },
  {
    id: "CHEM404-01",
    name: "계산화학(이)",
    prof: "장윤희",
    credit: 3,
    tags: ["전공선택", "화학"],
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }]
  },
  {
    id: "CSE203-01",
    name: "자료구조(이,공)",
    prof: "김선준",
    credit: 3,
    tags: ["전공필수", "컴퓨터공학", "전자공학"],
    times: [{ day: 0, start: 11, duration: 1.5 }, { day: 2, start: 11, duration: 1.5 }]
  },
  {
    id: "CSE302-01",
    name: "기계학습개론(이,공)",
    prof: "미정",
    credit: 3,
    tags: ["전공선택", "컴퓨터공학"],
    times: [{ day: 0, start: 15, duration: 1.5 }, { day: 2, start: 15, duration: 1.5 }]
  },
  {
    id: "CSE305-01",
    name: "컴퓨터구조(공)",
    prof: "이효근",
    credit: 3,
    tags: ["전공필수", "컴퓨터공학", "전자공학"],
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }]
  },
  {
    id: "CSE306-01",
    name: "시스템 프로그래밍(공)",
    prof: "이용우",
    credit: 3,
    tags: ["전공필수", "컴퓨터공학"],
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }]
  },
  {
    id: "CSE307-01",
    name: "프로그래밍 언어(이,공)",
    prof: "전민석",
    credit: 3,
    tags: ["전공선택", "컴퓨터공학"],
    times: [{ day: 1, start: 14.5, duration: 1.5 }, { day: 3, start: 14.5, duration: 1.5 }]
  },
  {
    id: "CSE404-01",
    name: "컴퓨터 비전 개론(공)",
    prof: "임성훈",
    credit: 3,
    tags: ["전공선택", "컴퓨터공학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "CSE405-01",
    name: "컴퓨터보안개론(공)",
    prof: "최원석",
    credit: 3,
    tags: ["전공선택", "컴퓨터공학"],
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }]
  },
  {
    id: "EE301-01",
    name: "신호 및 시스템(공)",
    prof: "최재호",
    credit: 3,
    tags: ["전공필수", "전자공학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "EE401-01",
    name: "디지털 신호처리(공)",
    prof: "이민선",
    credit: 3,
    tags: ["전공선택", "전자공학", "컴퓨터공학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "EE403-01",
    name: "디지털통신(공)",
    prof: "서대원",
    credit: 3,
    tags: ["전공선택", "전자공학"],
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }]
  },
  {
    id: "EE406-01",
    name: "지능형제어시스템(공)",
    prof: "김경대, 이성민",
    credit: 3,
    tags: ["전공선택", "전자공학"],
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }]
  },
  {
    id: "EE407-01",
    name: "디지털집적회로설계(공)",
    prof: "김가인",
    credit: 3,
    tags: ["전공선택", "전자공학"],
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }]
  },
  {
    id: "GC101-01",
    name: "Academic English: Speaking and Correspondence",
    prof: "Aaron Cumberledge",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 1, start: 15.5, duration: 3 }]
  },
  {
    id: "GC101-02",
    name: "Academic English: Speaking and Correspondence",
    prof: "Aaron Cumberledge",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 0, start: 9, duration: 3 }]
  },
  {
    id: "GC101-03",
    name: "Academic English: Speaking and Correspondence",
    prof: "Aaron Cumberledge",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 0, start: 13, duration: 3 }]
  },
  {
    id: "GC101-04",
    name: "Academic English: Speaking and Correspondence",
    prof: "Aaron Cumberledge",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 1, start: 11, duration: 3 }]
  },
  {
    id: "GC101-05",
    name: "Academic English: Speaking and Correspondence",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 2, start: 9, duration: 3 }]
  },
  {
    id: "GC101-06",
    name: "Academic English: Speaking and Correspondence",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 3, start: 11, duration: 3 }]
  },
  {
    id: "GC101-07",
    name: "Academic English: Speaking and Correspondence",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 3, start: 15.5, duration: 3 }]
  },
  {
    id: "GC101-08",
    name: "Academic English: Speaking and Correspondence",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 2, start: 14, duration: 3 }]
  },
  {
    id: "GC101-09",
    name: "Academic English: Speaking and Correspondence",
    prof: "Mark Silverlock",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 2, start: 14, duration: 3 }]
  },
  {
    id: "GC101-10",
    name: "Academic English: Speaking and Correspondence",
    prof: "Mark Silverlock",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 0, start: 13, duration: 3 }]
  },
  {
    id: "GC101-11",
    name: "Academic English: Speaking and Correspondence",
    prof: "Mark Silverlock",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 2, start: 9, duration: 3 }]
  },
  {
    id: "GC101-12",
    name: "Academic English: Speaking and Correspondence",
    prof: "Andrew John Miller",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 4, start: 14, duration: 3 }]
  },
  {
    id: "GC101-13",
    name: "Academic English: Speaking and Correspondence",
    prof: "Andrew John Miller",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 4, start: 9.5, duration: 3 }]
  },
  {
    id: "GC101-14",
    name: "Academic English: Speaking and Correspondence",
    prof: "이정아",
    credit: 2,
    tags: ["기초필수", "영어"],
    times: [{ day: 1, start: 14, duration: 3 }]
  },
  {
    id: "HSS101-01",
    name: "경제학 입문",
    prof: "김선구",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 2, start: 10, duration: 3 }]
  },
  {
    id: "HSS102-01",
    name: "과학기술과 현대사회",
    prof: "장하원",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 10, duration: 3 }]
  },
  {
    id: "HSS103-01",
    name: "법과 사회",
    prof: "김현희",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 4, start: 9, duration: 3 }]
  },
  {
    id: "HSS104a-01",
    name: "소설의 이해",
    prof: "배하은",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }]
  },
  {
    id: "HSS106-01",
    name: "비교정치학",
    prof: "윤지성",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 1, start: 16, duration: 1.5 }, { day: 3, start: 16, duration: 1.5 }]
  },
  {
    id: "HSS107-01",
    name: "언어학 입문",
    prof: "이정아",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 4, start: 9, duration: 3 }]
  },
  {
    id: "HSS108-01",
    name: "비교역사학",
    prof: "문준영",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 10, duration: 3 }]
  },
  {
    id: "HSS109a-01",
    name: "학술 글쓰기",
    prof: "배하은",
    credit: 3,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }]
  },
  {
    id: "HSS109a-02",
    name: "학술 글쓰기",
    prof: "임희현",
    credit: 3,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 3, start: 10, duration: 3 }]
  },
  {
    id: "HSS109a-03",
    name: "학술 글쓰기",
    prof: "임희현",
    credit: 3,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 3, start: 14.5, duration: 3 }]
  },
  {
    id: "HSS109a-04",
    name: "학술 글쓰기",
    prof: "전계성",
    credit: 3,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 1, start: 15, duration: 3 }]
  },
  {
    id: "HSS109a-05",
    name: "학술 글쓰기",
    prof: "전계성",
    credit: 3,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 4, start: 9, duration: 3 }]
  },
  {
    id: "HSS112-01",
    name: "사회학의 이해",
    prof: "최태섭",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 3, start: 9, duration: 3 }]
  },
  {
    id: "HSS114-01",
    name: "지리학 입문",
    prof: "Shen Shawn",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 18, duration: 3 }]
  },
  {
    id: "HSS115-01",
    name: "심리학으로의 여행",
    prof: "곽금주",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 1, start: 11, duration: 3 }]
  },
  {
    id: "HSS116-01",
    name: "인류학의 이해",
    prof: "이정덕",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 1, start: 15, duration: 3 }]
  },
  {
    id: "HSS117-01",
    name: "인간과 종교",
    prof: "박범석",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 3, start: 9, duration: 3 }]
  },
  {
    id: "HSS118-01",
    name: "미래소양강좌",
    prof: "최한경",
    credit: 1,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 4, start: 13, duration: 1 }]
  },
  {
    id: "HSS119-01",
    name: "진로탐색 및 전공설계I",
    prof: "최한경",
    credit: 1,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 2, start: 13, duration: 1 }]
  },
  {
    id: "HSS121-01",
    name: "Introduction to Traditional Korean Culture",
    prof: "배하은",
    credit: 2,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 13, duration: 2 }]
  },
  {
    id: "HSS122-01",
    name: "Introduction to Philosophy",
    prof: "김병재",
    credit: 2,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 10.5, duration: 2 }]
  },
  {
    id: "HSS201-01",
    name: "과학기술사의 주요 장면",
    prof: "장하원",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 14, duration: 3 }]
  },
  {
    id: "HSS202-01",
    name: "과학철학의 쟁점",
    prof: "강유진",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 2, start: 13, duration: 3 }]
  },
  {
    id: "HSS203-01",
    name: "근대 사회와 사상",
    prof: "문준영",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 14, duration: 3 }]
  },
  {
    id: "HSS204-01",
    name: "글로벌 정치경제",
    prof: "윤지성",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 1, start: 11, duration: 1.5 }, { day: 3, start: 11, duration: 1.5 }]
  },
  {
    id: "HSS207a-01",
    name: "커뮤니케이션 특강",
    prof: "조성겸",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 3, start: 13, duration: 3 }]
  },
  {
    id: "HSS208a-01",
    name: "철학 고전의 이해",
    prof: "김병재",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }]
  },
  {
    id: "HSS212-01",
    name: "권리변동의 일반",
    prof: "함상범",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 9.5, duration: 3 }]
  },
  {
    id: "HSS215-01",
    name: "도시지리학",
    prof: "Shen Shawn",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 15, duration: 1.5 }, { day: 2, start: 15, duration: 1.5 }]
  },
  {
    id: "HSS218-01",
    name: "세계종교입문",
    prof: "박범석",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 3, start: 13, duration: 3 }]
  },
  {
    id: "HSS221-01",
    name: "사회과학 특강I",
    prof: "곽금주",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 1, start: 14, duration: 3 }]
  },
  {
    id: "HSS222-01",
    name: "사회과학 특강II",
    prof: "이정덕",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 2, start: 15, duration: 3 }]
  },
  {
    id: "HSS222-02",
    name: "사회과학 특강II",
    prof: "최태섭",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 3, start: 13, duration: 3 }]
  },
  {
    id: "HSS223-01",
    name: "심리철학",
    prof: "김병재",
    credit: 3,
    tags: ["기초선택", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }]
  },
  {
    id: "HSS301a-01",
    name: "Scientific Writing",
    prof: "이정아",
    credit: 3,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "HSS301a-02",
    name: "Scientific Writing",
    prof: "Mark Silverlock",
    credit: 3,
    tags: ["기초필수", "읽기,쓰기 중점"],
    times: [{ day: 0, start: 18, duration: 1.5 }, { day: 2, start: 18, duration: 1.5 }]
  },
  {
    id: "INT201-01",
    name: "인턴십I",
    prof: "김소희",
    credit: 1,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 17, duration: 1 }]
  },
  {
    id: "INT202-01",
    name: "인턴십II",
    prof: "김소희",
    credit: 1,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 17, duration: 1 }]
  },
  {
    id: "INT203-01",
    name: "인턴십III",
    prof: "김소희",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 17, duration: 2 }]
  },
  {
    id: "INT204-01",
    name: "인턴십IV",
    prof: "김소희",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 17, duration: 2 }]
  },
  {
    id: "INT211-01",
    name: "글로벌 인턴십V",
    prof: "김회준",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT212-01",
    name: "글로벌 인턴십VI",
    prof: "김회준",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT213-01",
    name: "글로벌 인턴십VII",
    prof: "김회준",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT214-01",
    name: "글로벌 인턴십VIII",
    prof: "김회준",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT401-01",
    name: "인턴십V",
    prof: "김소희",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT402-01",
    name: "인턴십VI",
    prof: "김소희",
    credit: 2,
    tags: ["전공필수", "인턴십"],
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "LS203-01",
    name: "세포생물학 실험(이)",
    prof: "이창훈, 정찬, 조정아",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 0, start: 16.5, duration: 3 }, { day: 2, start: 16.5, duration: 3 }]
  },
  {
    id: "LS203-02",
    name: "세포생물학 실험(이)",
    prof: "정찬, 이창훈, 조정아",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 1, start: 15.5, duration: 3 }, { day: 3, start: 15.5, duration: 3 }]
  },
  {
    id: "LS203-03",
    name: "세포생물학 실험(이)",
    prof: "조정아, 정찬, 이창훈",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 1, start: 15, duration: 3 }, { day: 3, start: 15, duration: 3 }]
  },
  {
    id: "LS204-01",
    name: "세포생물학(이)",
    prof: "백명인, 정영태",
    credit: 3,
    tags: ["전공필수", "생명과학", "뇌과학"],
    times: [{ day: 1, start: 15, duration: 1.5 }, { day: 3, start: 15, duration: 1.5 }]
  },
  {
    id: "LS204-02",
    name: "세포생물학(이)",
    prof: "백명인, 정영태",
    credit: 3,
    tags: ["전공필수", "생명과학", "뇌과학"],
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }]
  },
  {
    id: "LS304-01",
    name: "생명체의 다양성과 유기적 관계 (이)",
    prof: "이상임",
    credit: 3,
    tags: ["전공선택", "생명과학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "LS305-01",
    name: "신경과학I(이)",
    prof: "서병창, 엄지원",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }]
  },
  {
    id: "LS306-01",
    name: "신경과학II(이)",
    prof: "현정호, 이효상, 최한경",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }]
  },
  {
    id: "LS308-01",
    name: "생화학I(이)",
    prof: "김진해, 김유리, 이종찬, 이재민",
    credit: 3,
    tags: ["전공필수", "생명과학", "뇌과학"],
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }]
  },
  {
    id: "LS312-01",
    name: "의약품공학(이)",
    prof: "예경무, 이병훈",
    credit: 3,
    tags: ["전공선택", "생명과학"],
    times: [{ day: 1, start: 9, duration: 3 }]
  },
  {
    id: "LS314-01",
    name: "생명과학 노벨상 수상의 위대한 발견(이)",
    prof: "이병훈, 이송이",
    credit: 3,
    tags: ["전공선택", "생명과학"],
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }]
  },
  {
    id: "LS403-01",
    name: "발생 및 발달생물학(이)",
    prof: "백명인, 유성운, 곽준명",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }]
  },
  {
    id: "LS406-01",
    name: "의생명공학(이,공)",
    prof: "이광",
    credit: 3,
    tags: ["전공선택", "생명과학"],
    times: [{ day: 4, start: 9, duration: 3 }]
  },
  {
    id: "LS407a-01",
    name: "인체생리학(이)",
    prof: "이재민, 김은경",
    credit: 3,
    tags: ["전공선택", "생명과학"],
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }]
  },
  {
    id: "LS410-01",
    name: "현대 미생물학(이)",
    prof: "김유리, 정찬",
    credit: 3,
    tags: ["전공선택", "생명과학"],
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }]
  },
  {
    id: "LS411-01",
    name: "계산뇌과학입문(이)",
    prof: "유우경, 김민환",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }]
  },
  {
    id: "LS412-01",
    name: "뇌질환(이)",
    prof: "이성배",
    credit: 3,
    tags: ["전공선택", "생명과학", "뇌과학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "MECH201-01",
    name: "고체역학(공)",
    prof: "장경인",
    credit: 3,
    tags: ["전공필수", "기계공학"],
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }]
  },
  {
    id: "MECH301-01",
    name: "인간과 공학(공)",
    prof: "김회준, 이성민, 박준혁, 남강현, 정소현, 김기섭",
    credit: 3,
    tags: ["전공선택", "기계공학"],
    times: [{ day: 4, start: 13, duration: 3 }]
  },
  {
    id: "MECH306-01",
    name: "진동공학(공)",
    prof: "임용섭",
    credit: 3,
    tags: ["전공선택", "기계공학"],
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }]
  },
  {
    id: "MECH309-01",
    name: "자동제어시스템(공)",
    prof: "박석호",
    credit: 3,
    tags: ["전공필수", "기계공학", "전자공학"],
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }]
  },
  {
    id: "MECH311-01",
    name: "유체역학(공)",
    prof: "정소현",
    credit: 3,
    tags: ["전공필수", "기계공학", "화학공학"],
    times: [{ day: 2, start: 17.5, duration: 3 }]
  },
  {
    id: "MECH313-01",
    name: "로봇전자공학(공)",
    prof: "박경서",
    credit: 3,
    tags: ["전공선택", "기계공학"],
    times: [{ day: 0, start: 16, duration: 1.5 }, { day: 2, start: 16, duration: 1.5 }]
  },
  {
    id: "MECH401-01",
    name: "로봇동역학 및 제어(공)",
    prof: "황민호",
    credit: 3,
    tags: ["전공선택", "기계공학"],
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }]
  },
  {
    id: "MECH402-01",
    name: "마이크로/나노공학(공)",
    prof: "이재홍",
    credit: 3,
    tags: ["전공선택", "기계공학"],
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }]
  },
  {
    id: "MECH405-01",
    name: "열전달(공)",
    prof: "최경호",
    credit: 3,
    tags: ["전공선택", "기계공학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "MECH407-01",
    name: "모빌리티공학개론(공)",
    prof: "이성민",
    credit: 3,
    tags: ["전공선택", "기계공학"],
    times: [{ day: 1, start: 16.5, duration: 1.5 }, { day: 3, start: 16.5, duration: 1.5 }]
  },
  {
    id: "MSE305a-01",
    name: "재료공학개론I(이,공)",
    prof: "이주혁",
    credit: 3,
    tags: ["전공필수", "재료공학"],
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }]
  },
  {
    id: "MSE307-01",
    name: "재료공학실험(공)",
    prof: "김진수, 이성원, 이주혁, 이종수, 이신범",
    credit: 3,
    tags: ["전공필수", "재료공학"],
    times: [{ day: 2, start: 16.5, duration: 3 }, { day: 4, start: 13, duration: 3 }]
  },
  {
    id: "MSE402-01",
    name: "재료상변태(공)",
    prof: "김진수",
    credit: 3,
    tags: ["전공필수", "재료공학", "물리학"],
    times: [{ day: 2, start: 10.5, duration: 1.5 }, { day: 4, start: 10.5, duration: 1.5 }]
  },
  {
    id: "MSE407-01",
    name: "재료의 기계적 거동(공)",
    prof: "김영규",
    credit: 3,
    tags: ["전공선택", "재료공학"],
    times: [{ day: 0, start: 13.5, duration: 1.5 }, { day: 2, start: 13.5, duration: 1.5 }]
  },
  {
    id: "PHY202a-01",
    name: "해석역학I(이,공)",
    prof: "이재동",
    credit: 3,
    tags: ["전공필수", "물리학"],
    times: [{ day: 0, start: 16, duration: 1.5 }, { day: 2, start: 16, duration: 1.5 }]
  },
  {
    id: "PHY205a-01",
    name: "현대물리(이)",
    prof: "김소연",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 0, start: 11, duration: 1.5 }, { day: 2, start: 11, duration: 1.5 }]
  },
  {
    id: "PHY302a-01",
    name: "고급물리 실험(이)",
    prof: "박기성, 김소연, 서정필",
    credit: 2,
    tags: ["전공필수", "물리학"],
    times: [{ day: 0, start: 13, duration: 2 }, { day: 2, start: 13, duration: 2 }]
  },
  {
    id: "PHY304-01",
    name: "양자역학I(이,공)",
    prof: "박기성",
    credit: 3,
    tags: ["전공필수", "물리학"],
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }]
  },
  {
    id: "PHY306-01",
    name: "수리물리(이)",
    prof: "최승호",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "PHY308-01",
    name: "전기역학II(이)",
    prof: "조창희",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }]
  },
  {
    id: "PHY401-01",
    name: "현대광학(이,공)",
    prof: "이기준",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }]
  },
  {
    id: "PHY403-01",
    name: "고체물리II(이,공)",
    prof: "홍정일",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }]
  },
  {
    id: "PHY405-01",
    name: "생물물리학(이,공)",
    prof: "이종찬",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 4, start: 13, duration: 3 }]
  },
  {
    id: "PHY406-01",
    name: "전산물리(이)",
    prof: "강준구",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 1, start: 14.5, duration: 1.5 }, { day: 3, start: 14.5, duration: 1.5 }]
  },
  {
    id: "PHY408-01",
    name: "원자분자물리학(이,공)",
    prof: "허승정",
    credit: 3,
    tags: ["전공선택", "물리학"],
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }]
  },
  {
    id: "TP101-01",
    name: "디자인사고",
    prof: "박종래",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 0, start: 9, duration: 3 }]
  },
  {
    id: "TP202-01",
    name: "도심항공교통개론(이,공)",
    prof: "인수일",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 0, start: 16, duration: 3 }]
  },
  {
    id: "TP301-01",
    name: "커뮤니케이션과 현대사회",
    prof: "조성겸",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 4, start: 9, duration: 3 }]
  },
  {
    id: "TP305-01",
    name: "게임이론",
    prof: "김선구",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 2, start: 14.5, duration: 3 }]
  },
  {
    id: "TP307a-01",
    name: "UX디자인",
    prof: "박종래",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 2, start: 10.5, duration: 3 }]
  },
  {
    id: "TP308-01",
    name: "생명에 대한 융합적 이해",
    prof: "남창훈",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 1, start: 9, duration: 3 }]
  },
  {
    id: "TP309-01",
    name: "학부생을 위한 해석학 개론",
    prof: "안흥주",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "TP310-01",
    name: "현대대수학 개론",
    prof: "Hudson Thomas Bryan",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }]
  },
  {
    id: "TP406-01",
    name: "텐서들의 기하학과 그 응용(이,공)",
    prof: "한강진",
    credit: 3,
    tags: ["전공선택", "비트랙/융합"],
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }]
  }
];