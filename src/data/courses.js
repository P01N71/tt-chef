export const ALL_TAGS = [
  "기초필수", "기초선택", "전공필수", "전공선택",
  "공학선택", "수학", "물리학", "화학", "생명과학", "뇌과학", "기계공학", "컴퓨터공학",
  "전자공학", "재료공학", "화학공학", "영어", "읽기,쓰기 중점", "비트랙/융합", "인턴십", "연구" 
];

export const ALL_COURSES = [
  {
    id: "BE101a-01",
    name: "프로그래밍",
    prof: "목지수",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 2 }, { day: 3, start: 9, duration: 2 }],
    syllabus: {
        capacity: "160",
        classroom: "E7-233",
        contact: {
            email: "jmok@dgist.ac.kr",
            phone: "053-785-6355",
            office: "E7-L07",
            office_hours: "금 13:00~16:00"
        },
        summary: "This course is a rigorous introduction to programming using Python, emphasizing programming as a discipline of precise reasoning, abstraction, and problem solving rather than mere code writing. Students will design, implement, test, and analyze nontrivial programs while developing the ability to reason about correctness, performance, and failure modes.",
        methods: ["Lecture, Experiment"],
        materials: "Laptop with Visual Studio Code (VSCode) or PyCharm installed",
        policies: "All electronic devices are allowed in class. Attendance check will be done through in-class quizzes.",
        grading: [
            { name: "Midterm exam", percent: 25 },
            { name: "Final exam", percent: 25 },
            { name: "Homework", percent: 40 },
            { name: "Quiz", percent: 10 },
        ],
        schedule: [
            "Course Introduction / Programming in the Age of LLMs",
            "Programs, Variables, and State",
            "Control Flow and Boolean Logic",
            "Iteration and Loop Invariants",
            "Functions, Contracts, and Decomposition",
            "Testing and Debugging",
            "Data Structures I: Lists and Tuples",
            "Midterm Exam",
            "Data Structures II: Dictionaries and Sets",
            "Recursion and Structural Decomposition",
            "Algorithmic Thinking",
            "Files, I/O, and Robustness",
            "Abstraction and Modular Design",
            "Introduction to Classes and Objects",
            "Limits of Computation / Course Review",
            "Final Exam",
        ],
        textbook: "None"
    }
  },
  {
    id: "BE202-01",
    name: "데이터사이언스기초",
    prof: "장준기",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 13, duration: 2 }, { day: 3, start: 13, duration: 2 }],
    syllabus: {
        capacity: "150",
        classroom: "E7-233",
        contact: {
            email: "jungi@dgist.ac.kr",
            phone: "053-785-6344",
            office: "E7-214",
            office_hours: "화목 15:00~16:00"
        },
        summary: "본 교과목은 데이터사이언스 입문 과목으로, 데이터 기반 문제 해결의 전체 프로세스를 이해하고 실습 중심으로 경험하도록 구성된다. 파이썬 환경에서 데이터셋을 활용하여 분석 과제를 수행하며, 결과를 보고서 및 발표 형태로 정리하는 과정을 통해 데이터 분석의 기본 워크플로우를 익힌다.",
        methods: ["Lecture, Project, Experiment"],
        materials: "- 개인 노트북: 수업 내 실습을 위해 개인 노트북 지참을 권장(필수인 경우 별도 공지).     - 소프트웨어 환경: Python(Anaconda/Miniconda 권장) 및 Jupyter Notebook/Lab, 필수 라이브러리(NumPy, pandas, matplotlib, scikit-learn 등)는 수업 초반에 설치 안내.   - 계정/도구: 과제 제출 및 공지를 위한 LMS(또는 Git/GitHub, Colab 등) 사용 가능하며, 사용 방법은 수업에서 안내.   - 기타: 수업 자료는 공지 채널을 통해 제공되며, 실습 중심 과목 특성상 충분한 저장공간과 안정적인 인터넷 환경을 권장.",
        policies: "본 교과목은 출석 및 수업 참여를 중시하며, 지각/결석 및 참여도는 성적에 반영될 수 있다. 과제는 기한 내 제출을 원칙으로 하며, 지각 제출은 감점 또는 불인정될 수 있다.  과제 수행 시 협업 허용 범위는 과제별 안내를 따르며, 외부 자료(논문, 웹, 코드, AI 도구 등) 활용 시 출처와 사용 범위를 명확히 표기해야 한다.  표절, 무단 협업, 대리 수행 등 학습 윤리 위반은 엄격히 금지되며, 위반 시 강의 및 학교 규정에 따라 0점 처리, 성적 감점 또는 징계가 적용될 수 있다.  공지사항은 지정된 채널을 통해 안내되며, 수강생은 이를 정기적으로 확인할 책임이 있다.",
        grading: [
            { name: "Midterm Exam", percent: 15 },
            { name: "Final exam", percent: 15 },
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 10 },
        ],
        schedule: [
            "1주차:Introduction to Data Science & Environment Setup",
            "2주차:Python/NumPy Essentials",
            "3주차:Data Wrangling I",
            "4주차:Data Wrangling II",
            "5주차:Exploratory Data Analysis (EDA) & Visualization I",
            "6주차:Exploratory Data Analysis (EDA) & Visualization II",
            "7주차:Statistical Thinking",
            "8주차:Midterm Exam",
            "9주차:Supervised Learning I: Regression",
            "10주차:Supervised Learning II: Classification",
            "11주차:Unsupervised Learning I: Dimensionality Reduction",
            "12주차:Unsupervised Learning II: Clustering",
            "13주차:Introduction to Neural Networks",
            "14주차:Time Series Fundamentals",
            "15주차:Time Series Applications",
            "16주차:Final Exam",
        ],
        textbook: ["Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython	(Wes McKinney / 2022)", " An Introduction to Statistical Learning	(James, Gareth, Witten, Daniela, Hastie, Trevor / 2021)"]
    }
  },
  {
    id: "BE202-02",
    name: "데이터사이언스기초",
    prof: "길현재",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 15, duration: 2 }, { day: 2, start: 15, duration: 2 }],
    syllabus: {
        capacity: "150",
        classroom: "E7-233",
        contact: {
            email: "hyunjae.gil@dgist.ac.kr",
            phone: "053-785-6329",
            office: "E7-213",
            office_hours: "월 14:00~15:00"
        },
        summary: "본 교과목은 데이터사이언스 입문 과목으로, 데이터 기반 문제 해결의 전체 프로세스를 이해하고 실습 중심으로 경험하도록 구성된다. 파이썬 환경에서 데이터셋을 활용하여 분석 과제를 수행하며, 결과를 보고서 및 발표 형태로 정리하는 과정을 통해 데이터 분석의 기본 워크플로우를 익힌다.",
        methods: ["Lecture, Project, Experiment"],
        materials: "- 개인 노트북: 수업 내 실습을 위해 개인 노트북 지참을 권장(필수인 경우 별도 공지).     - 소프트웨어 환경: Python(Anaconda/Miniconda 권장) 및 Jupyter Notebook/Lab, 필수 라이브러리(NumPy, pandas, matplotlib, scikit-learn 등)는 수업 초반에 설치 안내.   - 계정/도구: 과제 제출 및 공지를 위한 LMS(또는 Git/GitHub, Colab 등) 사용 가능하며, 사용 방법은 수업에서 안내.   - 기타: 수업 자료는 공지 채널을 통해 제공되며, 실습 중심 과목 특성상 충분한 저장공간과 안정적인 인터넷 환경을 권장.",
        policies: "본 교과목은 출석 및 수업 참여를 중시하며, 지각/결석 및 참여도는 성적에 반영될 수 있다. 과제는 기한 내 제출을 원칙으로 하며, 지각 제출은 감점 또는 불인정될 수 있다.  과제 수행 시 협업 허용 범위는 과제별 안내를 따르며, 외부 자료(논문, 웹, 코드, AI 도구 등) 활용 시 출처와 사용 범위를 명확히 표기해야 한다.  표절, 무단 협업, 대리 수행 등 학습 윤리 위반은 엄격히 금지되며, 위반 시 강의 및 학교 규정에 따라 0점 처리, 성적 감점 또는 징계가 적용될 수 있다.  공지사항은 지정된 채널을 통해 안내되며, 수강생은 이를 정기적으로 확인할 책임이 있다.",
        grading: [
            { name: "Midterm Exam", percent: 15 },
            { name: "Final exam", percent: 15 },
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 10 },
        ],
        schedule: [
            "1주차:데이터 사이언스 개요 및 실습 환경 세팅",
            "2주차:Python/NumPy 핵심 기초",
            "3주차:데이터 정제 I",
            "4주차:데이터 정제 II",
            "5주차:EDA 및 시각화 I",
            "6주차:EDA 및 시각화 II",
            "7주차:통계적 사고 기초",
            "8주차:중간고사",
            "9주차:지도학습 I: 회귀",
            "10주차:지도학습 II: 분류",
            "11주차:비지도학습 I: 차원축소",
            "12주차:비지도학습 II: 클러스터링",
            "13주차:뉴럴 네트워크",
            "14주차:시계열 데이터 기초",
            "15주차:시계열 데이터 응용",
            "16주차:기말고사",
        ],
        textbook: ["Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython	(Wes McKinney / 2022)", " An Introduction to Statistical Learning	(James, Gareth, Witten, Daniela, Hastie, Trevor / 2021)"]
    }
  },
  {
    id: "BE203-01",
    name: "창의기계설계",
    prof: "박준혁",
    credit: 3,
    categories: ["공학선택"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 4, start: 9, duration: 3 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-307",
        contact: {
            email: "joon.park@dgist.ac.kr",
            phone: "053-785-6233",
            office: "E6-211",
            office_hours: "월 09:00~13:00"
        },
        summary: "본 교과목은 기계공학을 비롯한 다양한 공학 분야에서 필수적으로 요구되는 부품 및 시스템의 설계·제작 개념을 학습하고, 이를 구현하기 위한 기술적 방법과 실습 중심의 접근법을 다룬다. 학생들은 2D 및 3D CAD 설계를 통해 유연소자 및 강성기계 시스템을 디자인하고, 유한요소해석 기법(Finite Element Analysis, FEA)을 통해 시스템을 모델링하며,  Autodesk TinkerCAD를 이용한 전자회로 및 기본적인 Arduino 기반 회로 설계 및 관련 코딩을 실습하여 다양한 전기기계적 시스템에 대한 설계와 전자회로와의 제어 및 융합을 경험한다. 최종적으로 팀 단위 메카트로닉 시스템 설계를 수행하여, 우수한 제안서에 있어서는 교원의 지도 하에 UGRP를 통한 설계 경진대회 참가, 스타트업, 논문제출 등으로 아이디어를 발전시킬 수 있는 기회 및 이론적, 기술적 소양을 쌓는 것을 목표로 한다.",
        methods: ["Lecture, Project, Presentation, Experiment"],
        materials: "None",
        policies: "Using mobile devices for anything other than course-related search is prohibited. If you need to respond to any text messages or calls that cannot wait, do it quickly without disturbing others in class or lab sessions. No recording or taking photos of any kind during lectures or labs",
        grading: [
            { name: "Term Project", percent: 40 },
            { name: "Homework", percent: 60 },
        ],
        schedule: [
            "1주차:오리엔테이션 / 설계 개요",
            "2주차:기계요소 이론 및 제도",
            "3주차:설계테마 개요",
            "4주차:2D 모델링 I",
            "5주차:2D 모델링 II",
            "6주차:3D 모델링 I",
            "7주차:3D 모델링 II",
            "8주차:중간발표",
            "9주차:유한요소 해석(FEA)",
            "10주차:분반 테마별 강의 I",
            "11주차:분반 테마별 강의 II",
            "12주차:분반 테마별 강의 III",
            "13주차:TinkerCAD이론 및 실습",
            "14주차:Arduino이론 및 실습",
            "15주차:최종발표 및 평가",
        ],
        textbook: "None"
    }
  },
  {
    id: "BE203-02",
    name: "창의기계설계",
    prof: "송석호",
    credit: 3,
    categories: ["공학선택"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 14.5, duration: 3 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-307",
        contact: {
            email: "sukho.song@dgist.ac.kr",
            phone: "053-785-6213",
            office: "E5-508",
            office_hours: "월 10:00~11:00"
        },
        summary: "본 교과목은 기계공학을 비롯한 다양한 공학 분야에서 필수적으로 요구되는 부품 및 시스템의 설계·제작 개념을 학습하고, 이를 구현하기 위한 기술적 방법과 실습 중심의 접근법을 다룬다. 학생들은 2D 및 3D CAD 설계를 통해 유연소자 및 강성기계 시스템을 디자인하고, 유한요소해석 기법(Finite Element Analysis, FEA)을 통해 시스템을 모델링하며,  Autodesk TinkerCAD를 이용한 전자회로 및 기본적인 Arduino 기반 회로 설계 및 관련 코딩을 실습하여 다양한 전기기계적 시스템에 대한 설계와 전자회로와의 제어 및 융합을 경험한다. 최종적으로 팀 단위 메카트로닉 시스템 설계를 수행하여, 우수한 제안서에 있어서는 교원의 지도 하에 UGRP를 통한 설계 경진대회 참가, 스타트업, 논문제출 등으로 아이디어를 발전시킬 수 있는 기회 및 이론적, 기술적 소양을 쌓는 것을 목표로 한다.",
        methods: ["Lecture, Project, Presentation, Experiment"],
        materials: "1. Required Textbook: None;    2. Supplementary lecture/lab materials will be provided;    3. Required Hardware: Laptop for assignments;    4. Required Software: Autodesk AutoCAD ; Autodesk Fusion 360; Autodesk TinkerCAD; Arduino IDE (Arduino.cc) ",
        policies: "Using mobile devices for anything other than course-related search is prohibited. If you need to respond to any text messages or calls that cannot wait, do it quickly without disturbing others in class or lab sessions. No recording or taking photos of any kind during lectures or labs",
        grading: [
            { name: "Term Project", percent: 40 },
            { name: "Homework", percent: 50 },
            { name: "Attendance", percent: 10}
        ],
        schedule: [
            "1주차:오리엔테이션 / 설계 개요",
            "2주차:설계테마 개요",
            "3주차:기계요소 이론 및 제도",
            "4주차:2D 모델링 I",
            "5주차:2D 모델링 II",
            "6주차:3D 모델링 I",
            "7주차:3D 모델링 II",
            "8주차:중간발표",
            "9주차:유한요소 해석(FEA)",
            "10주차:분반 테마별 강의 I",
            "11주차:분반 테마별 강의 II",
            "12주차:분반 테마별 강의 III",
            "13주차:TinkerCAD이론 및 실습",
            "14주차:Arduino이론 및 실습",
            "15주차:최종발표 및 평가",
        ],
        textbook: "None"
    }
  },
  {
    id: "BE205-01",
    name: "회로이론과 계측법(이론)",
    prof: "이정협",
    credit: 2,
    categories: ["공학선택"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 3, start: 17, duration: 2 }],
    syllabus: {
        capacity: "80",
        classroom: "E7-236",
        contact: {
            email: "jhlee1@dgist.ac.kr",
            phone: "053-785-6319",
            office: "E3-509",
            office_hours: "None"
        },
        summary: "This course introduces the fundamental principles and analytical techniques of electrical circuit theory. Topics include basic electrical quantities and circuit elements, core circuit analysis methods such as Kirchhoff’s laws, transient and AC response analysis, Laplace transform-based circuit analysis, frequency response, basic system concepts, and AC power analysis. Through this course, students will develop a systematic understanding of the fundamental principles and analytical methods of electrical circuits.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Midterm Exam", percent: 35 },
            { name: "Final Exam", percent: 35 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10}
        ],
        schedule: [
            "1주차:Introduction",
            "2주차:Fundamentals of Electric Circuits",
            "3주차:Resistive Network Analysis 1",
            "4주차:Resistive Network Analysis 2",
            "5주차:Transient and AC Network Analysis 1",
            "6주차:Transient and AC Network Analysis 2",
            "7주차:Transient and AC Network Analysis 3",
            "8주차:Midterm Exam",
            "9주차:Laplace Transform 1",
            "10주차:Laplace Transform 2",
            "11주차:Frequency Response and System Concepts 1",
            "12주차:Frequency Response and System Concepts 2",
            "13주차:Frequency Response and System Concepts 3",
            "14주차:AC Power 1",
            "15주차:AC Power 2",
            "16주차:Final Exam"
        ],
        textbook: "Frequency Response and System Concepts	(Rizzoni, Giorgio / 2022)"
    }
  },
  {
    id: "BE205-02",
    name: "회로이론과 계측법(이론)",
    prof: "송민영",
    credit: 2,
    categories: ["공학선택"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 17, duration: 2 }],
    syllabus: {
        capacity: "80",
        classroom: "E7-236",
        contact: {
            email: "msong@dgist.ac.kr",
            phone: "053-785-6333",
            office: "E3-610",
            office_hours: "None"
        },
        summary: "This course introduces the fundamental principles and analytical techniques of electrical circuit theory. Topics include basic electrical quantities and circuit elements, core circuit analysis methods such as Kirchhoff’s laws, transient and AC response analysis, Laplace transform-based circuit analysis, frequency response, basic system concepts, and AC power analysis. Through this course, students will develop a systematic understanding of the fundamental principles and analytical methods of electrical circuits.",
        methods: ["Lecture"],
        materials: "None",
        policies: "It is recommended to take this course together with Circuit Theory and Measurements (Lab), which will be open in the next semester, but it is not mandatory.",
        grading: [
            { name: "Midterm Exam", percent: 30 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10}
        ],
        schedule: [
            "1주차:Introduction",
            "2주차:Fundamentals of Electric Circuits",
            "3주차:Resistive Network Analysis 1",
            "4주차:Resistive Network Analysis 2",
            "5주차:Transient and AC Network Analysis 1",
            "6주차:Transient and AC Network Analysis 2",
            "7주차:Transient and AC Network Analysis 3",
            "8주차:Midterm Exam",
            "9주차:Laplace Transform 1",
            "10주차:Laplace Transform 2",
            "11주차:Frequency Response and System Concepts 1",
            "12주차:Frequency Response and System Concepts 2",
            "13주차:Frequency Response and System Concepts 3",
            "14주차:AC Power 1",
            "15주차:AC Power 2",
            "16주차:Final Exam"
        ],
        textbook: "Frequency Response and System Concepts	(Rizzoni, Giorgio / 2022)"
    }
  },
  {
    id: "BR301-01",
    name: "뇌과학실험I(이)",
    prof: "조용철, 김규형, 오용석",
    credit: 3,
    categories: ["뇌과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "뇌과학": "전공선택" },
    times: [{ day: 4, start: 9, duration: 3 }],
    syllabus: {
        capacity: "20",
        classroom: "E4-225",
        contact: {
            email: "None",
            phone: "053-785-6190",
            office: "E4-222",
            office_hours: "None"
        },
        summary: "This course focuses on essential experimental techniques in neuroscience, providing hands-on experience in studying brain functions. Students will learn to design and conduct experiments, analyze data, and interpret results related to key biological mechanisms in the brain. The course emphasizes both theoretical understanding and practical skills in neuroscience research.",
        methods: ["Project, Presentation, Experiment"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Final Exam", percent: 50 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 30}
        ],
        schedule: [
            "1주차:Introduction",
            "2주차:Primary neuron cultures (Cortical neurons and Hippocampal neurons) 1",
            "3주차:Primary neuron cultures (Cortical neurons and Hippocampal neurons) 2",
            "4주차:Synapse biology 1",
            "5주차:Synapse biology 2",
            "6주차:Human iPSC cell – neuron differentiation and organoids 1",
            "7주차:Human iPSC cell – neuron differentiation and organoids 2",
            "8주차:Mid-term",
            "9주차:Astrocyte primary culture and analysis 1",
            "10주차:Astrocyte primary culture and analysis 2",
            "11주차:Neurological behavioral test 1",
            "12주차:Neurological behavioral test 2",
            "13주차:Sensory neuron culture",
            "14주차:Axon regeneration and degeneration assay",
            "15주차:RNA sequencing and analysis",
            "16주차:Final-term"
        ],
        textbook: "None"
    }
  },
  {
    id: "BR403-01",
    name: "신경재생 및 퇴행(이)",
    prof: "조용철",
    credit: 3,
    categories: ["뇌과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "뇌과학": "전공선택" },
    times: [{ day: 1, start: 14.5, duration: 1.5 }, { day: 3, start: 14.5, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L21",
        contact: {
            email: "None",
            phone: "053-785-6190",
            office: "None",
            office_hours: "None"
        },
        summary: "● This course explores the biological mechanisms that govern the response of neural tissues to physical or physiological injury. Students will examine how neurons react through specific signaling cascades and gene expression changes, and how these processes determine whether neural circuits regenerate or degenerate. The course investigates the molecular and cellular principles underlying the differential regenerative capacities of the central and peripheral nervous systems, while tracing the historical development of neuroregeneration research over the past century.  ● Building on this foundation, the course introduces major advances in neural repair and regeneration, including the roles of stem cells, growth factors, gene therapy, and tissue engineering approaches. The translational relevance of these studies to clinical and therapeutic applications will be emphasized.  ● In addition, the course addresses the pathophysiological mechanisms of major neurodegenerative diseases such as Alzheimer’s disease, Parkinson’s disease, and amyotrophic lateral sclerosis (ALS). Students will explore current strategies aimed at preventing or reversing neuronal degeneration and promoting functional recovery in damaged neural systems.",
        methods: ["Lecture, Team teaching, Presentation"],
        materials: "None",
        policies: "Students must have completed 'Cell Biology(세포생물학)', 'General Biology I(일반생물학1)', 'General Biology II(일반생물학2)', ‘Advanced Brain Science I’ OR ‘Advanced Brain Science II’ before enrolling in this course.",
        grading: [
            { name: "Final Exam", percent: 25 },
            { name: "Homework", percent: 70 },
            { name: "Attendance", percent: 5}
        ],
        schedule: [
            "1주차:Introduction to Neural Regeneration and Degeneration",
            "2주차:Neural Injury and Cellular Responses",
            "3주차:Signal Transduction and Gene Regulation in Neural Injury",
            "4주차:Axon Growth and Guidance Mechanisms",
            "5주차:Regeneration in the Peripheral Nervous System (PNS)",
            "6주차:Regeneration in the Central Nervous System (CNS). Contents: Barriers to CNS regeneration: glial scar formation, inhibitory molecules, and neuronal plasticity.",
            "7주차:Stem Cells and Neural Repair. Contents: Neural stem cell biology, differentiation, transplantation, and regenerative applications.",
            "8주차:No Class (Midterm Break)",
            "9주차:Gene Therapy and Growth Factors. Contents: Gene delivery systems, neurotrophic factors (NGF, BDNF, GDNF), and modulation of regenerative pathways.",
            "10주차:Multi-omics in Neuroscience. Contents: Overview of genomics, transcriptomics, proteomics, and metabolomics; data integration and analysis principles.",
            "11주차:AI-Based Data Analysis and Visualization. Contents: Application of computational and AI tools for multi-omics data visualization and interpretation in neuroscience research.",
            "12주차:History and Concepts of Neurodegeneration. Contents: Evolution of neurodegeneration research; major discoveries, hypotheses, and disease classification.",
            "13주차:Molecular and Cellular Mechanisms of Neurodegeneration. Contents: Mechanisms of neuronal loss: oxidative stress, mitochondrial dysfunction, protein aggregation, and neuroinflammation.",
            "14주차:Major Neurodegenerative Diseases (Alzheimer’s, Parkinson’s, ALS). Contents: Pathological features, molecular mechanisms, biomarkers, and current therapeutic approaches.",
            "15주차:Current Research and Translational Approaches. Contents: Discussion of recent studies: regenerative medicine, neuroprotection, tissue engineering, and clinical implications.",
            "16주차:Final Examination"
        ],
        textbook: "None"
    }
  },
  {
    id: "BR404-01",
    name: "학습과 기억(이)",
    prof: "박포정",
    credit: 3,
    categories: ["뇌과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "뇌과학": "전공선택" },
    times: [{ day: 1, start: 16.5, duration: 1.5 }, { day: 3, start: 16.5, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G01",
        contact: {
            email: "pojeong@dgist.ac.kr",
            phone: "053-785-6185",
            office: "E4-215",
            office_hours: "None"
        },
        summary: "This course introduces the molecular, cellular, and circuit-level mechanisms that underlie learning and memory in the nervous system. Emphasis is placed on synaptic plasticity, signal transduction, and the structural and functional changes that encode episodic memory.    This course will include:  - Surveying the molecular and cellular bases of learning and memory.  - Exploring mechanisms of long-term potentiation (LTP), long-term depression (LTD), and other forms of synaptic plasticity.  - Understanding how neuromodulators and intracellular signaling pathways regulate memory formation and maintenance.  - Discussing systems-level organization of memory circuits and their behavioral correlates in model organisms and humans.",
        methods: ["Lecture, Presentation"],
        materials: "None",
        policies: "Cell phones should be turned off or set to silent mode during class.  No texting or browsing on phones during class.  Laptops/tablets should only be used for course-related activities.",
        grading: [
            { name: "Midterm Exam", percent: 30},
            { name: "Final Exam", percent: 30 },
            { name: "Paper Presentation", percent: 20 },
            { name: "Class Participation", percent: 20}
        ],
        schedule: [
            "1주차:The Basics of Psychological Learning and Memory Theory",
            "2주차:Studies of Human Learning and Memory",
            "3주차:Non-Associative Learning and Memory",
            "4주차:Rodent Behavioral Learning and Memory Models",
            "5주차:Associative Learning and Unlearning",
            "6주차:Hippocampal Function in Cognition",
            "7주차:Review I",
            "8주차:Mid-term exam",
            "9주차:Long-Term Potentiation: A Cellular Mechanism of Memory",
            "10주차:The NMDA Receptor",
            "11주차:Biochemical Mechanisms for Information Storage",
            "12주차:Molecular Genetic Mechanisms for Long-Term Information Storage",
            "13주차:Inherited Disorders of Human Memory Mental Retardation Syndromes",
            "14주차:Aging-Related Memory Disorders: Alzheimer’s Disease",
            "15주차:Review II",
            "16주차:Final exam"
        ],
        textbook: "None"
    }
  },
  {
    id: "BS102a-01",
    name: "공학수학I",
    prof: "안흥주",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 13, duration: 2 }, { day: 3, start: 13, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-223",
        contact: {
            email: "heungju@dgist.ac.kr",
            phone: "053-785-6619",
            office: "None",
            office_hours: "TBA"
        },
        summary: "“The book of the universe is written in the language of mathematics.” Galileo wrote this four hundred years ago, even before Newton and Leibniz discovered calculus. The statement is as valid today as ever: We use functions in all the sciences, and calculus allows us to analyze the functions and draw scientific conclusions. After a quick and brief review of differentiation and integration, we will study the differential equation, more precisely, the ordinary differential equation (ODE). The derivative measures the instantaneous rate of change of a function. The definite integral measures the total accumulation of a function over an interval. These two ideas form the basis for nearly all mathematical formulas in science. The rules by which we can compute the derivative (respectively, the integral) of any function are called calculus. The fundamental theorem of calculus links the two processes of differentiation and integration beautifully. We also cover topics related to complex numbers and matrices, which are frequently encountered in science and engineering texts.",
        methods: ["Lecture, Presentation", "Discussion", "Experiment"],
        materials: "None",
        policies: "반드시 연습시간을 수강 해야함. 연습시간에는 매트랩 실습, 연습문제 풀이, 학생의 질문 등으로 이루어지며, 실습 등을 수행할 때 조교가 진행할 수 있음 질의 및 면담 시간: 강의시간에 별도 공지함. TA 면담 시간은 연습 시 간에 별도 공지 5번까지 결석 허용. 6회 이상(20 %) 정당한 사유 없이 무단 결석한 경우, 본래보다 낮은 학점이 부여될 수 있음. (강의 시작 15분 이후 입실할 경우 지각으로 정의하고. 지각 3번은 결석 1번으로 정의하며. 결석에는 경조사 및 천재지변 등을 모두 포함함. 5회 미만일 경우 따로 교수에게 알릴 필요 없음) 연습 시간에 대한 출석도 위와 동일하게 적용하되 결석 회수는 3회까지 허용(시험 주간 제외20%) 05 반 학생만을 대상으로 절대 평가. 중간, 기말 고사 중 하나를 치르지  않으면 점수와 관계없이 F 처리 됨. 100점 만점 환산 20점(절대적 점수는 아니고 시험의 난이도에 따라 약간의 차이 있음)미만은 F 학생이 피할 수 없는 유고 치 못할 경우 명확한 서류에 의하여 증명되고 담당교수가 인정하는 한에서 학생이 취득한 점수를 고려하여 합리적으로 점수를 부여할 수 있음. 매주 일정한 분량의 숙제(HW)가 주어지고, 숙제는 정해진 제출기한까지 LMS 과제물 게시판 또는 지정된 장소에 제출. 교과 내용과  Matlab 교육 내용을 각각  2번의  퀴즈를 통해 테스트함. 교과 퀴즈 및  Matlab  퀴즈는 아래  강의 계획서에  계획된 일자에  진행하며 원칙적으로 모든 시험은(퀴즈 포함) 재시험 없음.",
        grading: [
            { name: "Midterm Exam", percent: 40},
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 20 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: ["⌜Advanced Engineering Mathematics⌟, 10th ed. (Kreyszig / 2011)","My lecture Notes based on the book “이두석, 안흥주(2014),  DGIST 응용 미적분학과 미분방정식 ebook” (Notes will be distributed through LMS)"]
    }
  },
  {
    id: "BS102a-02",
    name: "공학수학I",
    prof: "Hudson Thomas Bryan",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 16.5, duration: 2 }, { day: 3, start: 16.5, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-223",
        contact: {
            email: "hudson@dgist.ac.kr",
            phone: "053-785-6697",
            office: "E7-L12",
            office_hours: "화 14:00-16:00, 목 14:00-15:00"
        },
        summary: "● Differential equations represent a fundamental mathematical tool used by the whole of science to model physical phenomena: they express how a certain quantity of interest is related to its derivatives. Solutions to such problems are given by differentiable functions, which can be used to provide estimates and predict the evolution of the physical system one is studying. In this course students will learn how to solve several types of ordinary differential equations and also how to investigate and interpret the results.  ● Students are expected to critically apply the different methods of solution of differential equations presented in the course and to able to interpret and effectively investigate the solutions obtained, both numerically and qualitatively. ● Cheating and plagiarism will not be tolerated and, if discovered, will lead to failing the entire course. This also applies to students who knowingly allow their work to be copied.",
        methods: ["Lecture"],
        materials: "Lecture notes and the recordings of the lectures will be made available on LMS.",
        policies: "In order to pass the course students are expected to score at least 20\% on both the midterm and the final. In particular, not attending either the midterm or the final will result in a failing grade. Exceptions to this general rule will be granted on a case-by-case basis at the discretion of the instructor. Make-up exams will be granted only in exceptional cases, following the submission of appropriate documentation explaining the circumstances. Cheating and plagiarism will not be tollerated and, if discovered, will lead to failing the entire course. This also applies to students who knowingly allow their work to be copied.",
        grading: [
            { name: "Class Paricipation", percent: 10 },
            { name: "Quiz", percent: 20 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 40 },
        ],
        schedule: [    
  	    "1주차:Differential equations and mathematical modeling",
   	    "2주차:Review of differentiation and integration",
  	    "3주차:Euler's method, numerical solutions to differential equations",
	    "4주차:Linear ODEs",
  	    "5주차:Nonhomogeneous ODEs",
	    "6주차:Existence and uniqueness of solutions to IVP",
 	    "7주차:Variation of parameters",
	    "8주차:Midterm exam",
 	    "9주차:Basic theory of systems of ODEs",
	    "10주차:Constant-Coefficients systems of ODEs",
   	    "11주차:Taylor series",
	    "12주차:Series solution of ODEs",
 	    "13주차:Legendre's and Bessel's equations",
    	    "14주차:Laplace transform",
   	    "15주차:Applications of Laplace transform (if time allows)",
   	    "16주차:Final Exam"
    ],
        textbook: ["Advanced engineering mathematics (Kreyszig, Erwin / 2011)"]
    }
  },
  {
    id: "BS102a-03",
    name: "공학수학I",
    prof: "Carlos Scarinci",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 2 }, { day: 2, start: 9, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-L21",
        contact: {
            email: "cscarinci@dgist.ac.kr",
            phone: "053-785-6647",
            office: "E7-L10",
            office_hours: "수 13:00-15:00"
        },
        summary: "● Calculus and Differential Equations are essential mathematical tools in science and engineering. They are used to model and understand physical phenomena, allowing us to predict the behavior, evolution, and outcomes of various processes in both natural and engineered systems. In this course, we will review the fundamentals of differential and integral calculus, develop methods for solving ordinary differential equations, and apply these techniques to analyze key models in science and engineering.  ● By the end of the course, students should be able to solve first- and second-order ordinary differential equations using standard analytical methods, analyze linear and nonlinear systems qualitatively, apply Laplace transforms to initial value problems, and interpret solutions in scientific and engineering contexts. ● Cheating and plagiarism are serious violations of academic integrity and will not be tolerated. Any student found responsible for cheating will automatically fail the course. This also applies to those who knowingly allow their work to be copied.",
        methods: ["Lecture"],
        materials: "Single-variable calculus, basic integration techniques, and familiarity with exponential and trigonometric functions.    Students must have regular access to a laptop computer for assignments and computational demonstrations as required.",
        policies: "Any student who misses 25% or more classes will receive a failing grade. Justified absences will be considered as attended.    Attendance at both the midterm and final examinations is mandatory. Absence from either examination will result in a failing grade.",
        grading: [
            { name: "Quiz", percent: 10 },
            { name: "Homework", percent: 30 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
        ],
        schedule: [    
  	    "1주차:Calculus Review",
   	    "2주차:Calculus Review",
  	    "3주차:First Order ODEs",
	    "4주차:First Order ODEs",
	    "5주차:Linear ODEs",
 	    "6주차:Homogeneous Linear ODEs",
  	    "7주차:Homogeneous Linear ODEs",
   	    "8주차:Midterm Exam Week",
 	    "9주차:Nonhomogeneous Linear ODEs",
   	    "10주차:Linear Algebra Basics",
  	    "11주차:Linear Systems of ODEs",
  	    "12주차:Linear Systems of ODEs",
  	    "13주차:Nonlinear Autonomous Systems",
  	    "14주차:Laplace Transforms",
   	    "15주차:Laplace Transforms",
  	    "16주차:Final Exam Week"
  	 ],
	textbook: ["Advanced Engineering Mathematics (Kreyszig / n.d.)", "Calculus: Early Transcendentals (Stewart, Clegg and Wats / n.d.)"]
    }
  },
  {
    id: "BS102a-04",
    name: "공학수학I",
    prof: "Carlos Scarinci",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 16, duration: 2 }, { day: 2, start: 16, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-223",
        contact: {
            email: "cscarinci@dgist.ac.kr",
            phone: "053-785-6647",
            office: "E7-L10",
            office_hours: "수 13:00-15:00"
        },
        summary: "● Calculus and Differential Equations are essential mathematical tools in science and engineering. They are used to model and understand physical phenomena, allowing us to predict the behavior, evolution, and outcomes of various processes in both natural and engineered systems. In this course, we will review the fundamentals of differential and integral calculus, develop methods for solving ordinary differential equations, and apply these techniques to analyze key models in science and engineering.  ● By the end of the course, students should be able to solve first- and second-order ordinary differential equations using standard analytical methods, analyze linear and nonlinear systems qualitatively, apply Laplace transforms to initial value problems, and interpret solutions in scientific and engineering contexts. ● Cheating and plagiarism are serious violations of academic integrity and will not be tolerated. Any student found responsible for cheating will automatically fail the course. This also applies to those who knowingly allow their work to be copied.",
        methods: ["Lecture"],
        materials: "Single-variable calculus, basic integration techniques, and familiarity with exponential and trigonometric functions. Students must have regular access to a laptop computer for assignments and computational demonstrations as required.",
        policies: "Any student who misses 25% or more classes will receive a failing grade. Justified absences will be considered as attended.    Attendance at both the midterm and final examinations is mandatory. Absence from either examination will result in a failing grade.",
        grading: [
            { name: "Quiz", percent: 10 },
            { name: "Homework", percent: 30 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
        ],
        schedule: [    
  	    "1주차:Calculus Review",
   	    "2주차:Calculus Review",
  	    "3주차:First Order ODEs",
	    "4주차:First Order ODEs",
	    "5주차:Linear ODEs",
 	    "6주차:Homogeneous Linear ODEs",
  	    "7주차:Homogeneous Linear ODEs",
   	    "8주차:Midterm Exam Week",
 	    "9주차:Nonhomogeneous Linear ODEs",
   	    "10주차:Linear Algebra Basics",
  	    "11주차:Linear Systems of ODEs",
  	    "12주차:Linear Systems of ODEs",
  	    "13주차:Nonlinear Autonomous Systems",
  	    "14주차:Laplace Transforms",
   	    "15주차:Laplace Transforms",
  	    "16주차:Final Exam Week"
  	 ],
	textbook: ["Advanced Engineering Mathematics (Kreyszig / n.d.)", "Calculus: Early Transcendentals (Stewart, Clegg and Wats / n.d.)"]
    }
  },
  {
    id: "BS102a-05",
    name: "공학수학I",
    prof: "Carlos Scarinci",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 11, duration: 2 }, { day: 3, start: 11, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-223",
        contact: {
            email: "cscarinci@dgist.ac.kr",
            phone: "053-785-6647",
            office: "E7-L10",
            office_hours: "수 13:00-15:00"
        },
        summary: "● Calculus and Differential Equations are essential mathematical tools in science and engineering. They are used to model and understand physical phenomena, allowing us to predict the behavior, evolution, and outcomes of various processes in both natural and engineered systems. In this course, we will review the fundamentals of differential and integral calculus, develop methods for solving ordinary differential equations, and apply these techniques to analyze key models in science and engineering.  ● By the end of the course, students should be able to solve first- and second-order ordinary differential equations using standard analytical methods, analyze linear and nonlinear systems qualitatively, apply Laplace transforms to initial value problems, and interpret solutions in scientific and engineering contexts. ● Cheating and plagiarism are serious violations of academic integrity and will not be tolerated. Any student found responsible for cheating will automatically fail the course. This also applies to those who knowingly allow their work to be copied.",
        methods: ["Lecture"],
        materials: "Single-variable calculus, basic integration techniques, and familiarity with exponential and trigonometric functions. Students must have regular access to a laptop computer for assignments and computational demonstrations as required.",
        policies: "Any student who misses 25% or more classes will receive a failing grade. Justified absences will be considered as attended.    Attendance at both the midterm and final examinations is mandatory. Absence from either examination will result in a failing grade.",
        grading: [
            { name: "Quiz", percent: 10 },
            { name: "Homework", percent: 30 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
        ],
        schedule: [    
  	    "1주차:Calculus Review",
   	    "2주차:Calculus Review",
  	    "3주차:First Order ODEs",
	    "4주차:First Order ODEs",
	    "5주차:Linear ODEs",
 	    "6주차:Homogeneous Linear ODEs",
  	    "7주차:Homogeneous Linear ODEs",
   	    "8주차:Midterm Exam Week",
 	    "9주차:Nonhomogeneous Linear ODEs",
   	    "10주차:Linear Algebra Basics",
  	    "11주차:Linear Systems of ODEs",
  	    "12주차:Linear Systems of ODEs",
  	    "13주차:Nonlinear Autonomous Systems",
  	    "14주차:Laplace Transforms",
   	    "15주차:Laplace Transforms",
  	    "16주차:Final Exam Week"
  	 ],
	textbook: ["Advanced Engineering Mathematics (Kreyszig / n.d.)", "Calculus: Early Transcendentals (Stewart, Clegg and Wats / n.d.)"]
    }
  },
  {
    id: "BS103a-01",
    name: "일반물리I",
    prof: "DEVECIOGLU DENIZ OLGU",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 15, duration: 1.5 }, { day: 3, start: 15, duration: 1.5 }],
    syllabus: {
        capacity: "75",
        classroom: "E7-241",
        contact: {
            email: "deniz@dgist.ac.kr",
            phone: "010-3202-3541",
            office: "E7-L06",
            office_hours: "None"
        },
        summary: "● This calculus based course provides students with the basic concepts of physics that enable them to understand describe and explain natural phenomena. Emphasis is laid on general principles and fundamental concepts in mechanics with applications of physics in various fields of engineering.  ● The goal of this course is to provide a calculus-based physics course to help students pursuing advanced studies in sciences and engineering develop conceptual understanding of physical principles, the ability to reason, and gain skills for problem solving.  ● You are expected to demonstrate academic honesty in all aspects of this course. Academic dishonesty includes, but is not limited to: violating clearly stated rules for taking an exam or completing an assignment; plagiarism (including material from sources without a citation and quotation marks around any borrowed words); claiming another’s work or a modification of another’s work as one’s own; buying or attempting to buy papers or projects for a course; fabricating information or citations.",
        methods: ["Lecture", "Project", "Discussion"],
        materials: "None",
        policies: "Attendance: Regular attendance is expected. Participation: Active participation in lectures and discussions is encouraged and may be assessed. Assignments: All assignments must be submitted by the stated deadline. Late submissions may incur a penalty unless prior approval is granted. Exams & Assessments: Make-up exams are allowed only with documented, valid reasons. Communication: Official announcements will be made via the course platform or email; students are responsible for staying informed.",
        grading: [
            { name: "Term Project", percent: 10 },
            { name: "Homework", percent: 15 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 45 },
        ],
        schedule: [  
   	    "1주차:Introduction, Measurement",
 	    "2주차:Motion in One Dimension",
   	    "3주차:Vectors",
  	    "4주차:Motion in 2- and 3- Dimensions",
  	    "5주차:Force and Motion I",
  	    "6주차:Force and Motion II",
	    "7주차:Kinetic Energy and Work",
 	    "8주차:Potential Energy and Conservation of Energy",
  	    "9주차:Center of Mass and Linear Momentum",
 	    "10주차:Rotation",
 	    "11주차:Rolling, Torque and Angular Momentum",
 	    "12주차:Equilibrium and Elasticity",
  	    "13주차:Gravitation",
  	    "14주차:Fluids",
  	    "15주차:Oscillations",
   	    "16주차:Waves"
  	 ],
	textbook: ["Fundamentals of physics (Jearl Walker, David Halli / n.d.)", "Physics for engineers and scientists (Hans C. Ohanian, John T. Markert / n.d.)", "Physics for Scientists and Engineers with Modern Physics, 4th Edition (D. C. Giancoli. / n.d.)"]
    }
  },
  {
    id: "BS103a-02",
    name: "일반물리I",
    prof: "DEVECIOGLU DENIZ OLGU",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 11, duration: 1.5 }, { day: 3, start: 11, duration: 1.5 }],
    syllabus: {
        capacity: "75",
        classroom: "E7-241",
        contact: {
            email: "deniz@dgist.ac.kr",
            phone: "010-3202-3541",
            office: "E7-L06",
            office_hours: "None"
        },
        summary: "● This calculus based course provides students with the basic concepts of physics that enable them to understand describe and explain natural phenomena. Emphasis is laid on general principles and fundamental concepts in mechanics with applications of physics in various fields of engineering.  ● The goal of this course is to provide a calculus-based physics course to help students pursuing advanced studies in sciences and engineering develop conceptual understanding of physical principles, the ability to reason, and gain skills for problem solving.  ● You are expected to demonstrate academic honesty in all aspects of this course. Academic dishonesty includes, but is not limited to: violating clearly stated rules for taking an exam or completing an assignment; plagiarism (including material from sources without a citation and quotation marks around any borrowed words); claiming another’s work or a modification of another’s work as one’s own; buying or attempting to buy papers or projects for a course; fabricating information or citations.",
        methods: ["Lecture", "Project", "Discussion"],
        materials: "None",
        policies: "Attendance: Regular attendance is expected. Participation: Active participation in lectures and discussions is encouraged and may be assessed. Assignments: All assignments must be submitted by the stated deadline. Late submissions may incur a penalty unless prior approval is granted. Exams & Assessments: Make-up exams are allowed only with documented, valid reasons. Communication: Official announcements will be made via the course platform or email; students are responsible for staying informed.",
        grading: [
            { name: "Term Project", percent: 10 },
            { name: "Homework", percent: 15 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 45 },
        ],
        schedule: [  
   	    "1주차:Introduction, Measurement",
 	    "2주차:Motion in One Dimension",
   	    "3주차:Vectors",
  	    "4주차:Motion in 2- and 3- Dimensions",
  	    "5주차:Force and Motion I",
  	    "6주차:Force and Motion II",
	    "7주차:Kinetic Energy and Work",
 	    "8주차:Potential Energy and Conservation of Energy",
  	    "9주차:Center of Mass and Linear Momentum",
 	    "10주차:Rotation",
 	    "11주차:Rolling, Torque and Angular Momentum",
 	    "12주차:Equilibrium and Elasticity",
  	    "13주차:Gravitation",
  	    "14주차:Fluids",
  	    "15주차:Oscillations",
   	    "16주차:Waves"
  	 ],
	textbook: ["Fundamentals of physics (Jearl Walker, David Halli / n.d.)", "Physics for engineers and scientists (Hans C. Ohanian, John T. Markert / n.d.)", "Physics for Scientists and Engineers with Modern Physics, 4th Edition (D. C. Giancoli. / n.d.)"]
    }
  },
  {
    id: "BS103a-03",
    name: "일반물리I",
    prof: "DEVECIOGLU DENIZ OLGU",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 17, duration: 1.5 }, { day: 3, start: 17, duration: 1.5 }],
    syllabus: {
        capacity: "75",
        classroom: "E7-241",
        contact: {
            email: "deniz@dgist.ac.kr",
            phone: "010-3202-3541",
            office: "E7-L06",
            office_hours: "None"
        },
        summary: "● This calculus based course provides students with the basic concepts of physics that enable them to understand describe and explain natural phenomena. Emphasis is laid on general principles and fundamental concepts in mechanics with applications of physics in various fields of engineering.  ● The goal of this course is to provide a calculus-based physics course to help students pursuing advanced studies in sciences and engineering develop conceptual understanding of physical principles, the ability to reason, and gain skills for problem solving.  ● You are expected to demonstrate academic honesty in all aspects of this course. Academic dishonesty includes, but is not limited to: violating clearly stated rules for taking an exam or completing an assignment; plagiarism (including material from sources without a citation and quotation marks around any borrowed words); claiming another’s work or a modification of another’s work as one’s own; buying or attempting to buy papers or projects for a course; fabricating information or citations.",
        methods: ["Lecture", "Project", "Discussion"],
        materials: "None",
        policies: "Attendance: Regular attendance is expected. Participation: Active participation in lectures and discussions is encouraged and may be assessed. Assignments: All assignments must be submitted by the stated deadline. Late submissions may incur a penalty unless prior approval is granted. Exams & Assessments: Make-up exams are allowed only with documented, valid reasons. Communication: Official announcements will be made via the course platform or email; students are responsible for staying informed.",
        grading: [
            { name: "Term Project", percent: 10 },
            { name: "Homework", percent: 15 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 45 },
        ],
        schedule: [  
   	    "1주차:Introduction, Measurement",
 	    "2주차:Motion in One Dimension",
   	    "3주차:Vectors",
  	    "4주차:Motion in 2- and 3- Dimensions",
  	    "5주차:Force and Motion I",
  	    "6주차:Force and Motion II",
	    "7주차:Kinetic Energy and Work",
 	    "8주차:Potential Energy and Conservation of Energy",
  	    "9주차:Center of Mass and Linear Momentum",
 	    "10주차:Rotation",
 	    "11주차:Rolling, Torque and Angular Momentum",
 	    "12주차:Equilibrium and Elasticity",
  	    "13주차:Gravitation",
  	    "14주차:Fluids",
  	    "15주차:Oscillations",
   	    "16주차:Waves"
  	 ],
	textbook: ["Fundamentals of physics (Jearl Walker, David Halli / n.d.)", "Physics for engineers and scientists (Hans C. Ohanian, John T. Markert / n.d.)", "Physics for Scientists and Engineers with Modern Physics, 4th Edition (D. C. Giancoli. / n.d.)"]
    }
  },
  {
    id: "BS103a-04",
    name: "일반물리I",
    prof: "DEVECIOGLU DENIZ OLGU",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 15, duration: 1.5 }, { day: 4, start: 15, duration: 1.5 }],
    syllabus: {
        capacity: "75",
        classroom: "E7-241",
        contact: {
            email: "deniz@dgist.ac.kr",
            phone: "010-3202-3541",
            office: "E7-L06",
            office_hours: "None"
        },
        summary: "● This calculus based course provides students with the basic concepts of physics that enable them to understand describe and explain natural phenomena. Emphasis is laid on general principles and fundamental concepts in mechanics with applications of physics in various fields of engineering.  ● The goal of this course is to provide a calculus-based physics course to help students pursuing advanced studies in sciences and engineering develop conceptual understanding of physical principles, the ability to reason, and gain skills for problem solving.  ● You are expected to demonstrate academic honesty in all aspects of this course. Academic dishonesty includes, but is not limited to: violating clearly stated rules for taking an exam or completing an assignment; plagiarism (including material from sources without a citation and quotation marks around any borrowed words); claiming another’s work or a modification of another’s work as one’s own; buying or attempting to buy papers or projects for a course; fabricating information or citations.",
        methods: ["Lecture", "Project", "Discussion"],
        materials: "None",
        policies: "Attendance: Regular attendance is expected. Participation: Active participation in lectures and discussions is encouraged and may be assessed. Assignments: All assignments must be submitted by the stated deadline. Late submissions may incur a penalty unless prior approval is granted. Exams & Assessments: Make-up exams are allowed only with documented, valid reasons. Communication: Official announcements will be made via the course platform or email; students are responsible for staying informed.",
        grading: [
            { name: "Term Project", percent: 10 },
            { name: "Homework", percent: 15 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 45 },
        ],
        schedule: [  
   	    "1주차:Introduction, Measurement",
 	    "2주차:Motion in One Dimension",
   	    "3주차:Vectors",
  	    "4주차:Motion in 2- and 3- Dimensions",
  	    "5주차:Force and Motion I",
  	    "6주차:Force and Motion II",
	    "7주차:Kinetic Energy and Work",
 	    "8주차:Potential Energy and Conservation of Energy",
  	    "9주차:Center of Mass and Linear Momentum",
 	    "10주차:Rotation",
 	    "11주차:Rolling, Torque and Angular Momentum",
 	    "12주차:Equilibrium and Elasticity",
  	    "13주차:Gravitation",
  	    "14주차:Fluids",
  	    "15주차:Oscillations",
   	    "16주차:Waves"
  	 ],
	textbook: ["Fundamentals of physics (Jearl Walker, David Halli / n.d.)", "Physics for engineers and scientists (Hans C. Ohanian, John T. Markert / n.d.)", "Physics for Scientists and Engineers with Modern Physics, 4th Edition (D. C. Giancoli. / n.d.)"]
    }
  },
  {
    id: "BS104a-01",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 16, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E2-220",
        contact: {
            email: "dlkim7@dgist.ac.kr",
            phone: "010-2530-5941",
            office: "E2-220",
            office_hours: "월 15:00~16:00"
        },
        summary: "● 물리학은 실험과학이다. 실험을 통해서 확인되지 않는 지식은 과학지식이라고 하기 어렵다. 자신이 수행한 실험을 통해 고전역학 강의를 통해서 배운 지식의 진위를 시험에 보자. 실험 과정 하나하나를 점검해 가면서 자신의 실험과정과 결과에 대해 과학적으로 설명할 수 있어야 한다. 실험을 하고 그것을 통해 과학지식을 확인하는 과정은 물리 뿐만 아니라 모든 실험 과학에서 적용할 수 있다. 실험결과와 여러분이 배운 이론에 바탕 한 계산 값이 맞지 않을 수 있다. 여기에서 새롭고 재미있는 과학이 시작된다. 고전역학은 질점과 질점계의 운동을 다루는 분야로 물리학이 실험과학이라는 것을 가장 쉽고 명확하게 알려주는 학문이다. 실험과학의 즐거움을 고전역학실험을 통해 알아본다.  ● 일반물리 I에서 배우는 기본원리와 법칙들을 실험을 통해 직접 확인해보고 이론과 비교분석함으로써 기초 개념에 대한 이해를 명확히 한다.  ● 실험보고서 작성시 참고 인용 표시 명확하게 한다.",
        methods: ["Lecture", "Project", "Presentation","Discussion","Experiment"],
        materials: "None",
        policies: "실험에 적극적으로 참여한다. 토론에 적극적으로 참여한다. 개인 위생 및 보건 관련 의무 사항을 준수한다.",
        grading: [
            { name: "Etc", percent: 5 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 15 },
            { name: "Homework", percent: 40 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [  
          "1주차:오리엔테이션",
          "2주차:측정 및 오차/중력가속도 (중력가속도 측정을 이용한 측정 및 오차)",
          "3주차:정역학 실험 (벡터, 힘의 평형, 힘의 분해)",
          "4주차:토론 및 보충실험",
          "5주차:뉴턴의 제 2 법칙 (뉴턴의 제 2법칙, 힘, 질량, 가속도의 관계)",
          "6주차:포사체 운동 (역학적 에너지 보존)",
          "7주차:토론 및 보충실험",
          "8주차:중간고사",
          "9주차:운동량 보존과 충돌 (운동량 보존의 법칙 실험, 운동량과 충격량, 탄성, 비탄성 충돌)",
          "10주차:회전관성와 구심 가속도 (회전운동, 돌림힘의 이해)",
          "11주차:실의 정상파 실험 (실의 정상파 실험)",
          "12주차:토론 및 보충실험",
          "13주차:창의실험",
          "14주차:창의실험",
          "15주차:창의실험 결과발표",
          "16주차:기말고사"
   	    ],
	textbook: ["고전역학 실험서 (이기준, 최승호, 박기성 / 2017)", "고전역학 e-book (최승호, 박기성 / 2017)"]
    }
  },
  {
    id: "BS104a-02",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 14, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E2-220",
        contact: {
            email: "dlkim7@dgist.ac.kr",
            phone: "010-2530-5941",
            office: "E2-220",
            office_hours: "월 15:00~16:00"
        },
        summary: "● 물리학은 실험과학이다. 실험을 통해서 확인되지 않는 지식은 과학지식이라고 하기 어렵다. 자신이 수행한 실험을 통해 고전역학 강의를 통해서 배운 지식의 진위를 시험에 보자. 실험 과정 하나하나를 점검해 가면서 자신의 실험과정과 결과에 대해 과학적으로 설명할 수 있어야 한다. 실험을 하고 그것을 통해 과학지식을 확인하는 과정은 물리 뿐만 아니라 모든 실험 과학에서 적용할 수 있다. 실험결과와 여러분이 배운 이론에 바탕 한 계산 값이 맞지 않을 수 있다. 여기에서 새롭고 재미있는 과학이 시작된다. 고전역학은 질점과 질점계의 운동을 다루는 분야로 물리학이 실험과학이라는 것을 가장 쉽고 명확하게 알려주는 학문이다. 실험과학의 즐거움을 고전역학실험을 통해 알아본다.  ● 일반물리 I에서 배우는 기본원리와 법칙들을 실험을 통해 직접 확인해보고 이론과 비교분석함으로써 기초 개념에 대한 이해를 명확히 한다.  ● 실험보고서 작성시 참고 인용 표시 명확하게 한다.",
        methods: ["Lecture", "Project", "Presentation","Discussion","Experiment"],
        materials: "None",
        policies: "실험에 적극적으로 참여한다. 토론에 적극적으로 참여한다. 개인 위생 및 보건 관련 의무 사항을 준수한다.",
        grading: [
            { name: "Etc", percent: 5 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 15 },
            { name: "Homework", percent: 40 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [  
          "1주차:오리엔테이션",
          "2주차:측정 및 오차/중력가속도 (중력가속도 측정을 이용한 측정 및 오차)",
          "3주차:정역학 실험 (벡터, 힘의 평형, 힘의 분해)",
          "4주차:토론 및 보충실험",
          "5주차:뉴턴의 제 2 법칙 (뉴턴의 제 2법칙, 힘, 질량, 가속도의 관계)",
          "6주차:포사체 운동 (역학적 에너지 보존)",
          "7주차:토론 및 보충실험",
          "8주차:중간고사",
          "9주차:운동량 보존과 충돌 (운동량 보존의 법칙 실험, 운동량과 충격량, 탄성, 비탄성 충돌)",
          "10주차:회전관성와 구심 가속도 (회전운동, 돌림힘의 이해)",
          "11주차:실의 정상파 실험 (실의 정상파 실험)",
          "12주차:토론 및 보충실험",
          "13주차:창의실험",
          "14주차:창의실험",
          "15주차:창의실험 결과발표",
          "16주차:기말고사"
   	    ],
	textbook: ["고전역학 실험서 (이기준, 최승호, 박기성 / 2017)", "고전역학 e-book (최승호, 박기성 / 2017)"]
    }
  },
  {
    id: "BS104a-03",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E2-220",
        contact: {
            email: "dlkim7@dgist.ac.kr",
            phone: "010-2530-5941",
            office: "E2-220",
            office_hours: "월 15:00~16:00"
        },
        summary: "● 물리학은 실험과학이다. 실험을 통해서 확인되지 않는 지식은 과학지식이라고 하기 어렵다. 자신이 수행한 실험을 통해 고전역학 강의를 통해서 배운 지식의 진위를 시험에 보자. 실험 과정 하나하나를 점검해 가면서 자신의 실험과정과 결과에 대해 과학적으로 설명할 수 있어야 한다. 실험을 하고 그것을 통해 과학지식을 확인하는 과정은 물리 뿐만 아니라 모든 실험 과학에서 적용할 수 있다. 실험결과와 여러분이 배운 이론에 바탕 한 계산 값이 맞지 않을 수 있다. 여기에서 새롭고 재미있는 과학이 시작된다. 고전역학은 질점과 질점계의 운동을 다루는 분야로 물리학이 실험과학이라는 것을 가장 쉽고 명확하게 알려주는 학문이다. 실험과학의 즐거움을 고전역학실험을 통해 알아본다.  ● 일반물리 I에서 배우는 기본원리와 법칙들을 실험을 통해 직접 확인해보고 이론과 비교분석함으로써 기초 개념에 대한 이해를 명확히 한다.  ● 실험보고서 작성시 참고 인용 표시 명확하게 한다.",
        methods: ["Lecture", "Project", "Presentation","Discussion","Experiment"],
        materials: "None",
        policies: "실험에 적극적으로 참여한다. 토론에 적극적으로 참여한다. 개인 위생 및 보건 관련 의무 사항을 준수한다.",
        grading: [
            { name: "Etc", percent: 5 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 15 },
            { name: "Homework", percent: 40 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [  
   	    "1주차:오리엔테이션",
 	    "2주차:측정 및 오차/중력가속도 (중력가속도 측정을 이용한 측정 및 오차)",
  	    "3주차:정역학 실험 (벡터, 힘의 평형, 힘의 분해)",
 	    "4주차:토론 및 보충실험",
 	    "5주차:뉴턴의 제 2 법칙 (뉴턴의 제 2법칙, 힘, 질량, 가속도의 관계)",
 	    "6주차:포사체 운동 (역학적 에너지 보존)",
 	    "7주차:토론 및 보충실험",
	    "8주차:중간고사",
	    "9주차:운동량 보존과 충돌 (운동량 보존의 법칙 실험, 운동량과 충격량, 탄성, 비탄성 충돌)",
 	    "10주차:회전관성와 구심 가속도 (회전운동, 돌림힘의 이해)",
    	    "11주차:실의 정상파 실험 (실의 정상파 실험)",
   	    "12주차:토론 및 보충실험",
	    "13주차:창의실험",
 	    "14주차:창의실험",
  	    "15주차:창의실험 결과발표",
   	    "16주차:기말고사"
   	 ],
	textbook: ["고전역학 실험서 (이기준, 최승호, 박기성 / 2017)", "고전역학 e-book (최승호, 박기성 / 2017)"]
    }
  },
  {
    id: "BS104a-04",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 10.5, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E2-220",
        contact: {
            email: "dlkim7@dgist.ac.kr",
            phone: "010-2530-5941",
            office: "E2-220",
            office_hours: "월 15:00~16:00"
        },
        summary: "● 물리학은 실험과학이다. 실험을 통해서 확인되지 않는 지식은 과학지식이라고 하기 어렵다. 자신이 수행한 실험을 통해 고전역학 강의를 통해서 배운 지식의 진위를 시험에 보자. 실험 과정 하나하나를 점검해 가면서 자신의 실험과정과 결과에 대해 과학적으로 설명할 수 있어야 한다. 실험을 하고 그것을 통해 과학지식을 확인하는 과정은 물리 뿐만 아니라 모든 실험 과학에서 적용할 수 있다. 실험결과와 여러분이 배운 이론에 바탕 한 계산 값이 맞지 않을 수 있다. 여기에서 새롭고 재미있는 과학이 시작된다. 고전역학은 질점과 질점계의 운동을 다루는 분야로 물리학이 실험과학이라는 것을 가장 쉽고 명확하게 알려주는 학문이다. 실험과학의 즐거움을 고전역학실험을 통해 알아본다.  ● 일반물리 I에서 배우는 기본원리와 법칙들을 실험을 통해 직접 확인해보고 이론과 비교분석함으로써 기초 개념에 대한 이해를 명확히 한다.  ● 실험보고서 작성시 참고 인용 표시 명확하게 한다.",
        methods: ["Lecture", "Project", "Presentation","Discussion","Experiment"],
        materials: "None",
        policies: "실험에 적극적으로 참여한다. 토론에 적극적으로 참여한다. 개인 위생 및 보건 관련 의무 사항을 준수한다.",
        grading: [
            { name: "Etc", percent: 5 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 15 },
            { name: "Homework", percent: 40 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [  
   	    "1주차:오리엔테이션",
 	    "2주차:측정 및 오차/중력가속도 (중력가속도 측정을 이용한 측정 및 오차)",
  	    "3주차:정역학 실험 (벡터, 힘의 평형, 힘의 분해)",
 	    "4주차:토론 및 보충실험",
 	    "5주차:뉴턴의 제 2 법칙 (뉴턴의 제 2법칙, 힘, 질량, 가속도의 관계)",
 	    "6주차:포사체 운동 (역학적 에너지 보존)",
 	    "7주차:토론 및 보충실험",
	    "8주차:중간고사",
	    "9주차:운동량 보존과 충돌 (운동량 보존의 법칙 실험, 운동량과 충격량, 탄성, 비탄성 충돌)",
 	    "10주차:회전관성와 구심 가속도 (회전운동, 돌림힘의 이해)",
    	    "11주차:실의 정상파 실험 (실의 정상파 실험)",
   	    "12주차:토론 및 보충실험",
	    "13주차:창의실험",
 	    "14주차:창의실험",
  	    "15주차:창의실험 결과발표",
   	    "16주차:기말고사"
   	 ],
	textbook: ["고전역학 실험서 (이기준, 최승호, 박기성 / 2017)", "고전역학 e-book (최승호, 박기성 / 2017)"]
    }
  },
  {
    id: "BS104a-05",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 11, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E2-220",
        contact: {
            email: "dlkim7@dgist.ac.kr",
            phone: "010-2530-5941",
            office: "E2-220",
            office_hours: "월 15:00~16:00"
        },
        summary: "● 물리학은 실험과학이다. 실험을 통해서 확인되지 않는 지식은 과학지식이라고 하기 어렵다. 자신이 수행한 실험을 통해 고전역학 강의를 통해서 배운 지식의 진위를 시험에 보자. 실험 과정 하나하나를 점검해 가면서 자신의 실험과정과 결과에 대해 과학적으로 설명할 수 있어야 한다. 실험을 하고 그것을 통해 과학지식을 확인하는 과정은 물리 뿐만 아니라 모든 실험 과학에서 적용할 수 있다. 실험결과와 여러분이 배운 이론에 바탕 한 계산 값이 맞지 않을 수 있다. 여기에서 새롭고 재미있는 과학이 시작된다. 고전역학은 질점과 질점계의 운동을 다루는 분야로 물리학이 실험과학이라는 것을 가장 쉽고 명확하게 알려주는 학문이다. 실험과학의 즐거움을 고전역학실험을 통해 알아본다.  ● 일반물리 I에서 배우는 기본원리와 법칙들을 실험을 통해 직접 확인해보고 이론과 비교분석함으로써 기초 개념에 대한 이해를 명확히 한다.  ● 실험보고서 작성시 참고 인용 표시 명확하게 한다.",
        methods: ["Lecture", "Project", "Presentation","Discussion","Experiment"],
        materials: "None",
        policies: "실험에 적극적으로 참여한다. 토론에 적극적으로 참여한다. 개인 위생 및 보건 관련 의무 사항을 준수한다.",
        grading: [
            { name: "Etc", percent: 5 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 15 },
            { name: "Homework", percent: 40 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [  
   	    "1주차:오리엔테이션",
 	    "2주차:측정 및 오차/중력가속도 (중력가속도 측정을 이용한 측정 및 오차)",
  	    "3주차:정역학 실험 (벡터, 힘의 평형, 힘의 분해)",
 	    "4주차:토론 및 보충실험",
 	    "5주차:뉴턴의 제 2 법칙 (뉴턴의 제 2법칙, 힘, 질량, 가속도의 관계)",
 	    "6주차:포사체 운동 (역학적 에너지 보존)",
 	    "7주차:토론 및 보충실험",
	    "8주차:중간고사",
	    "9주차:운동량 보존과 충돌 (운동량 보존의 법칙 실험, 운동량과 충격량, 탄성, 비탄성 충돌)",
 	    "10주차:회전관성와 구심 가속도 (회전운동, 돌림힘의 이해)",
    	    "11주차:실의 정상파 실험 (실의 정상파 실험)",
   	    "12주차:토론 및 보충실험",
	    "13주차:창의실험",
 	    "14주차:창의실험",
  	    "15주차:창의실험 결과발표",
   	    "16주차:기말고사"
   	 ],
	textbook: ["고전역학 실험서 (이기준, 최승호, 박기성 / 2017)", "고전역학 e-book (최승호, 박기성 / 2017)"]
    }
  },
  {
    id: "BS104a-06",
    name: "일반물리실험I",
    prof: "김동렬",
    credit: 1,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 16, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E2-220",
        contact: {
            email: "dlkim7@dgist.ac.kr",
            phone: "010-2530-5941",
            office: "E2-220",
            office_hours: "월 15:00~16:00"
        },
        summary: "● 물리학은 실험과학이다. 실험을 통해서 확인되지 않는 지식은 과학지식이라고 하기 어렵다. 자신이 수행한 실험을 통해 고전역학 강의를 통해서 배운 지식의 진위를 시험에 보자. 실험 과정 하나하나를 점검해 가면서 자신의 실험과정과 결과에 대해 과학적으로 설명할 수 있어야 한다. 실험을 하고 그것을 통해 과학지식을 확인하는 과정은 물리 뿐만 아니라 모든 실험 과학에서 적용할 수 있다. 실험결과와 여러분이 배운 이론에 바탕 한 계산 값이 맞지 않을 수 있다. 여기에서 새롭고 재미있는 과학이 시작된다. 고전역학은 질점과 질점계의 운동을 다루는 분야로 물리학이 실험과학이라는 것을 가장 쉽고 명확하게 알려주는 학문이다. 실험과학의 즐거움을 고전역학실험을 통해 알아본다.  ● 일반물리 I에서 배우는 기본원리와 법칙들을 실험을 통해 직접 확인해보고 이론과 비교분석함으로써 기초 개념에 대한 이해를 명확히 한다.  ● 실험보고서 작성시 참고 인용 표시 명확하게 한다.",
        methods: ["Lecture", "Project", "Presentation","Discussion","Experiment"],
        materials: "None",
        policies: "실험에 적극적으로 참여한다. 토론에 적극적으로 참여한다. 개인 위생 및 보건 관련 의무 사항을 준수한다.",
        grading: [
            { name: "Etc", percent: 5 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 15 },
            { name: "Homework", percent: 40 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [  
   	    "1주차:오리엔테이션",
 	    "2주차:측정 및 오차/중력가속도 (중력가속도 측정을 이용한 측정 및 오차)",
  	    "3주차:정역학 실험 (벡터, 힘의 평형, 힘의 분해)",
 	    "4주차:토론 및 보충실험",
 	    "5주차:뉴턴의 제 2 법칙 (뉴턴의 제 2법칙, 힘, 질량, 가속도의 관계)",
 	    "6주차:포사체 운동 (역학적 에너지 보존)",
 	    "7주차:토론 및 보충실험",
	    "8주차:중간고사",
	    "9주차:운동량 보존과 충돌 (운동량 보존의 법칙 실험, 운동량과 충격량, 탄성, 비탄성 충돌)",
 	    "10주차:회전관성와 구심 가속도 (회전운동, 돌림힘의 이해)",
    	    "11주차:실의 정상파 실험 (실의 정상파 실험)",
   	    "12주차:토론 및 보충실험",
	    "13주차:창의실험",
 	    "14주차:창의실험",
  	    "15주차:창의실험 결과발표",
   	    "16주차:기말고사"
   	 ],
	textbook: ["고전역학 실험서 (이기준, 최승호, 박기성 / 2017)", "고전역학 e-book (최승호, 박기성 / 2017)"]
    }
  },
  {
    id: "BS104a-07",
    name: "일반물리실험I",
    prof: "박기성",
    credit: 1,
    categories: ["물리학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 13, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E2-220",
        contact: {
            email: "keeseong@dgist.ac.kr",
            phone: "053-785-6614",
            office: "E7-214",
            office_hours: "화 14:00~16:00"
        },
        summary: "● 물리학은 실험과학이다. 실험을 통해서 확인되지 않는 지식은 과학지식이라고 하기 어렵다. 자신이 수행한 실험을 통해 고전역학 강의를 통해서 배운 지식의 진위를 시험에 보자. 실험 과정 하나하나를 점검해 가면서 자신의 실험과정과 결과에 대해 과학적으로 설명할 수 있어야 한다. 실험을 하고 그것을 통해 과학지식을 확인하는 과정은 물리 뿐만 아니라 모든 실험 과학에서 적용할 수 있다. 실험결과와 여러분이 배운 이론에 바탕 한 계산 값이 맞지 않을 수 있다. 여기에서 새롭고 재미있는 과학이 시작된다. 고전역학은 질점과 질점계의 운동을 다루는 분야로 물리학이 실험과학이라는 것을 가장 쉽고 명확하게 알려주는 학문이다. 실험과학의 즐거움을 고전역학실험을 통해 알아본다.",
        methods: ["Experiment"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Attendance", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Homework", percent: 50 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [  
          "1주차:오리엔테이션",
          "2주차:측정 및 오차/중력가속도 (중력가속도 측정을 이용한 측정 및 오차)",
          "3주차:정역학 실험 (벡터, 힘의 평형, 힘의 분해)",
          "4주차:뉴턴의 제 2 법칙 (뉴턴의 제 2법칙, 힘, 질량, 가속도의 관계)",
          "5주차:포사체 운동 (역학적 에너지 보존)",
          "6주차:보충실험1",
          "7주차:보충실험2 (중간고사기간)",
          "8주차:운동량 보존과 충돌 (운동량 보존의 법칙 실험, 운동량과 충격량, 탄성, 비탄성충돌)",
          "9주차:회전관성와 구심 가속도 (회전운동, 돌림힘의 이해)",
          "10주차:실의 정상파 실험 (실의 정상파 실험)",
          "11주차:영률 측정 (영률 실험)",
          "12주차:창의실험 (창의성개발과 종합능력)",
          "13주차:창의실험 (창의성개발과 종합능력)",
          "14주차:창의실험 결과발표",
          "15주차:보충실험3 (기말고사기간)",
          "16주차:성적처리"
   	 ],
	textbook: ["고전역학 실험서 (이기준, 최승호, 박기성 / 2017)", "고전역학 e-book (최승호, 박기성 / 2017)"]
    }
  },
  {
    id: "BS113-01",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 9, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "mbrownie@dgist.ac.kr",
            phone: "010-9235-6035",
            office: "None",
            office_hours: "수업 전후"
        },
        summary: "● 화학은 물질의 정체와 변환을 연구하는 자연과학의 핵심 분야로, 원자와 분자를 이용하여 새로운 화합물을 합성하며 다양한 화학 반응의 특성을 연구하는 분야이다. 학문적으로는 자연과 인간의 생명 현상을 이해하고 더 나은 삶을 위한 관련 첨단과학을 선도하며 산업적으로는 인류의 삶에 필요한 다양한 소재와 에너지를 공급해주고 있다. 실험으로 얻어진 결과와 이론적으로 예측된 값을 비교하여 화학적 사고확장을 유도한다. ● 일반화학실험은 일반화학에서 배운 내용들을 직접 실험을 통하여 검증하여 내용에 대한 단순한 습득이 아니라 실험 전 보고서의 작성을 통해 미리 실험에 대한 계획을 세우고, 조원들과 협력하여 실험을 진행하며, 실험 후 결과 보고서의 작성을 통해 실험 결과의 이해와 실험 과정의 문제성을 되짚어 사고할 수 있다. ● 실험 전 미리 실험에 대한 정보와 주의점을 확인하고 얻어진 결과로 정직하게 결론을 도출한다. 항상 교우들과 협동하여 실험에 임한다. 실험에 임할 때는 항상 주의하여 사고가 나지 않게 미연에 방지한다.",
        methods: ["Experiment"],
        materials: "None",
        policies: "사전 보고서를 통해 실험 전 내용을 숙지하고 조별로 실험하며 얻어진 결과는 함께 논의 하되 보고서는 개별 제출한다.",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 },
        ],
        schedule: [  
    	     "1주차:orientation",
  	     "2주차:Calculation of Atomic/Ion Radius",
   	     "3주차:Molar Volume of Gases",
    	     "4주차:Characteristics and Structure of Molecules",
   	     "5주차:Derivation of Chemical Formulas",
   	     "6주차:Atomic Spectra",
 	     "7주차:make up class",
    	     "8주차:midterm",
  	     "9주차:Determination of Molecular Weight via Freezing Point Depression",
  	     "10주차:Measurement of Reaction Enthalpy",
  	     "11주차:Acid-Base Titration 1",
    	     "12주차:Acid-Base Titration 2",
   	     "13주차:Calculation of Ksp of Calcium Hydroxide",
  	     "14주차:Electrochemical Reaction and Entropy Change",
  	     "15주차:make up class",
  	     "16주차:finals"
   	 ],
	textbook: "None"
    }
  },
  {
    id: "BS113-02",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "mbrownie@dgist.ac.kr",
            phone: "010-9235-6035",
            office: "None",
            office_hours: "수업 전후"
        },
        summary: "● 화학은 물질의 정체와 변환을 연구하는 자연과학의 핵심 분야로, 원자와 분자를 이용하여 새로운 화합물을 합성하며 다양한 화학 반응의 특성을 연구하는 분야이다. 학문적으로는 자연과 인간의 생명 현상을 이해하고 더 나은 삶을 위한 관련 첨단과학을 선도하며 산업적으로는 인류의 삶에 필요한 다양한 소재와 에너지를 공급해주고 있다. 실험으로 얻어진 결과와 이론적으로 예측된 값을 비교하여 화학적 사고확장을 유도한다. ● 일반화학실험은 일반화학에서 배운 내용들을 직접 실험을 통하여 검증하여 내용에 대한 단순한 습득이 아니라 실험 전 보고서의 작성을 통해 미리 실험에 대한 계획을 세우고, 조원들과 협력하여 실험을 진행하며, 실험 후 결과 보고서의 작성을 통해 실험 결과의 이해와 실험 과정의 문제성을 되짚어 사고할 수 있다. ● 실험 전 미리 실험에 대한 정보와 주의점을 확인하고 얻어진 결과로 정직하게 결론을 도출한다. 항상 교우들과 협동하여 실험에 임한다. 실험에 임할 때는 항상 주의하여 사고가 나지 않게 미연에 방지한다.",
        methods: ["Experiment"],
        materials: "None",
        policies: "사전 보고서를 통해 실험 전 내용을 숙지하고 조별로 실험하며 얻어진 결과는 함께 논의 하되 보고서는 개별 제출한다.",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 },
        ],
        schedule: [  
    	     "1주차:orientation",
  	     "2주차:Calculation of Atomic/Ion Radius",
   	     "3주차:Molar Volume of Gases",
    	     "4주차:Characteristics and Structure of Molecules",
   	     "5주차:Derivation of Chemical Formulas",
   	     "6주차:Atomic Spectra",
 	     "7주차:make up class",
    	     "8주차:midterm",
  	     "9주차:Determination of Molecular Weight via Freezing Point Depression",
  	     "10주차:Measurement of Reaction Enthalpy",
  	     "11주차:Acid-Base Titration 1",
    	     "12주차:Acid-Base Titration 2",
   	     "13주차:Calculation of Ksp of Calcium Hydroxide",
  	     "14주차:Electrochemical Reaction and Entropy Change",
  	     "15주차:make up class",
  	     "16주차:finals"
   	 ],
	textbook: "None"
    }
  },
  {
    id: "BS113-03",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 15, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "mbrownie@dgist.ac.kr",
            phone: "010-9235-6035",
            office: "None",
            office_hours: "수업 전후"
        },
        summary: "● 화학은 물질의 정체와 변환을 연구하는 자연과학의 핵심 분야로, 원자와 분자를 이용하여 새로운 화합물을 합성하며 다양한 화학 반응의 특성을 연구하는 분야이다. 학문적으로는 자연과 인간의 생명 현상을 이해하고 더 나은 삶을 위한 관련 첨단과학을 선도하며 산업적으로는 인류의 삶에 필요한 다양한 소재와 에너지를 공급해주고 있다. 실험으로 얻어진 결과와 이론적으로 예측된 값을 비교하여 화학적 사고확장을 유도한다. ● 일반화학실험은 일반화학에서 배운 내용들을 직접 실험을 통하여 검증하여 내용에 대한 단순한 습득이 아니라 실험 전 보고서의 작성을 통해 미리 실험에 대한 계획을 세우고, 조원들과 협력하여 실험을 진행하며, 실험 후 결과 보고서의 작성을 통해 실험 결과의 이해와 실험 과정의 문제성을 되짚어 사고할 수 있다. ● 실험 전 미리 실험에 대한 정보와 주의점을 확인하고 얻어진 결과로 정직하게 결론을 도출한다. 항상 교우들과 협동하여 실험에 임한다. 실험에 임할 때는 항상 주의하여 사고가 나지 않게 미연에 방지한다.",
        methods: ["Experiment"],
        materials: "None",
        policies: "사전 보고서를 통해 실험 전 내용을 숙지하고 조별로 실험하며 얻어진 결과는 함께 논의 하되 보고서는 개별 제출한다.",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 },
        ],
        schedule: [  
    	     "1주차:orientation",
  	     "2주차:Calculation of Atomic/Ion Radius",
   	     "3주차:Molar Volume of Gases",
    	     "4주차:Characteristics and Structure of Molecules",
   	     "5주차:Derivation of Chemical Formulas",
   	     "6주차:Atomic Spectra",
 	     "7주차:make up class",
    	     "8주차:midterm",
  	     "9주차:Determination of Molecular Weight via Freezing Point Depression",
  	     "10주차:Measurement of Reaction Enthalpy",
  	     "11주차:Acid-Base Titration 1",
    	     "12주차:Acid-Base Titration 2",
   	     "13주차:Calculation of Ksp of Calcium Hydroxide",
  	     "14주차:Electrochemical Reaction and Entropy Change",
  	     "15주차:make up class",
  	     "16주차:finals"
   	 ],
	textbook: "None"
    }
  },
  {
    id: "BS113-04",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "mbrownie@dgist.ac.kr",
            phone: "010-9235-6035",
            office: "None",
            office_hours: "수업 전후"
        },
        summary: "● 화학은 물질의 정체와 변환을 연구하는 자연과학의 핵심 분야로, 원자와 분자를 이용하여 새로운 화합물을 합성하며 다양한 화학 반응의 특성을 연구하는 분야이다. 학문적으로는 자연과 인간의 생명 현상을 이해하고 더 나은 삶을 위한 관련 첨단과학을 선도하며 산업적으로는 인류의 삶에 필요한 다양한 소재와 에너지를 공급해주고 있다. 실험으로 얻어진 결과와 이론적으로 예측된 값을 비교하여 화학적 사고확장을 유도한다. ● 일반화학실험은 일반화학에서 배운 내용들을 직접 실험을 통하여 검증하여 내용에 대한 단순한 습득이 아니라 실험 전 보고서의 작성을 통해 미리 실험에 대한 계획을 세우고, 조원들과 협력하여 실험을 진행하며, 실험 후 결과 보고서의 작성을 통해 실험 결과의 이해와 실험 과정의 문제성을 되짚어 사고할 수 있다. ● 실험 전 미리 실험에 대한 정보와 주의점을 확인하고 얻어진 결과로 정직하게 결론을 도출한다. 항상 교우들과 협동하여 실험에 임한다. 실험에 임할 때는 항상 주의하여 사고가 나지 않게 미연에 방지한다.",
        methods: ["Experiment"],
        materials: "None",
        policies: "사전 보고서를 통해 실험 전 내용을 숙지하고 조별로 실험하며 얻어진 결과는 함께 논의 하되 보고서는 개별 제출한다.",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 },
        ],
        schedule: [  
    	     "1주차:orientation",
  	     "2주차:Calculation of Atomic/Ion Radius",
   	     "3주차:Molar Volume of Gases",
    	     "4주차:Characteristics and Structure of Molecules",
   	     "5주차:Derivation of Chemical Formulas",
   	     "6주차:Atomic Spectra",
 	     "7주차:make up class",
    	     "8주차:midterm",
  	     "9주차:Determination of Molecular Weight via Freezing Point Depression",
  	     "10주차:Measurement of Reaction Enthalpy",
  	     "11주차:Acid-Base Titration 1",
    	     "12주차:Acid-Base Titration 2",
   	     "13주차:Calculation of Ksp of Calcium Hydroxide",
  	     "14주차:Electrochemical Reaction and Entropy Change",
  	     "15주차:make up class",
  	     "16주차:finals"
   	 ],
	textbook: "None"
    }
  },
  {
    id: "BS113-05",
    name: "일반화학실험I",
    prof: "민은선",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 14, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "mbrownie@dgist.ac.kr",
            phone: "010-9235-6035",
            office: "None",
            office_hours: "수업 전후"
        },
        summary: "● 화학은 물질의 정체와 변환을 연구하는 자연과학의 핵심 분야로, 원자와 분자를 이용하여 새로운 화합물을 합성하며 다양한 화학 반응의 특성을 연구하는 분야이다. 학문적으로는 자연과 인간의 생명 현상을 이해하고 더 나은 삶을 위한 관련 첨단과학을 선도하며 산업적으로는 인류의 삶에 필요한 다양한 소재와 에너지를 공급해주고 있다. 실험으로 얻어진 결과와 이론적으로 예측된 값을 비교하여 화학적 사고확장을 유도한다. ● 일반화학실험은 일반화학에서 배운 내용들을 직접 실험을 통하여 검증하여 내용에 대한 단순한 습득이 아니라 실험 전 보고서의 작성을 통해 미리 실험에 대한 계획을 세우고, 조원들과 협력하여 실험을 진행하며, 실험 후 결과 보고서의 작성을 통해 실험 결과의 이해와 실험 과정의 문제성을 되짚어 사고할 수 있다. ● 실험 전 미리 실험에 대한 정보와 주의점을 확인하고 얻어진 결과로 정직하게 결론을 도출한다. 항상 교우들과 협동하여 실험에 임한다. 실험에 임할 때는 항상 주의하여 사고가 나지 않게 미연에 방지한다.",
        methods: ["Experiment"],
        materials: "None",
        policies: "사전 보고서를 통해 실험 전 내용을 숙지하고 조별로 실험하며 얻어진 결과는 함께 논의 하되 보고서는 개별 제출한다.",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 },
        ],
        schedule: [  
    	     "1주차:orientation",
  	     "2주차:Calculation of Atomic/Ion Radius",
   	     "3주차:Molar Volume of Gases",
    	     "4주차:Characteristics and Structure of Molecules",
   	     "5주차:Derivation of Chemical Formulas",
   	     "6주차:Atomic Spectra",
 	     "7주차:make up class",
    	     "8주차:midterm",
  	     "9주차:Determination of Molecular Weight via Freezing Point Depression",
  	     "10주차:Measurement of Reaction Enthalpy",
  	     "11주차:Acid-Base Titration 1",
    	     "12주차:Acid-Base Titration 2",
   	     "13주차:Calculation of Ksp of Calcium Hydroxide",
  	     "14주차:Electrochemical Reaction and Entropy Change",
  	     "15주차:make up class",
  	     "16주차:finals"
   	 ],
	textbook: "None"
    }
  },
  {
    id: "BS113-06",
    name: "일반화학실험I",
    prof: "DESTA KEBEDE TAYE",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 16, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "ktdesta@dgist.ac.kr",
            phone: "010-5953-1971",
            office: "E7-L09",
            office_hours: "Friday 10:30-11:30AM"
        },
        summary: "● General Chemistry Laboratory I introduces fundamental laboratory techniques in chemistry. Students are expected to review safety precautions before each experiment. Throughout the course, students will perform prearranged experimental procedures, work collaboratively with classmates, and accurately collect and analyze experimental data. Emphasis is placed on proper laboratory practices and safety awareness to minimize accidents and maintain a safe learning environment. ● This course will help students develop the ability to apply safety practices in chemistry. Students will learn basic experimental techniques and precautions, and become familiar with common laboratory equipment. They will strengthen their understanding of chemical principles by accurately collecting, analyzing, and interpreting experimental data while maintaining proper laboratory practices and safety awareness. ● Students must attend each experiment session. Reporting results without attendance may lead to dismissal or suspension from the course.",
        methods: ["Experiment"],
        materials: "TBA",
        policies: "Students must complete a preliminary report to review pre-lab content before each experiment. Experiments and result discussions must be conducted in groups, but reports must be submitted individually. Proper lab clothing is required. Wearing capes, flip-flops, sandals, or other open-toed shoes is prohibited.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 },
        ],
        schedule: [  
     	     "1주차:Calculation of Atomic/Ion Radius",
             "2주차:Molar Volume of Gases",
  	     "3주차:Characteristics and Structure of Molecules",
 	     "4주차:Derivation of Chemical Formulas",
  	     "5주차:Atomic Spectra",
   	     "6주차:Make up class",
    	     "7주차:Midterm exam week",
 	     "8주차:Determination of Molecular Weight via Freezing Point Depression",
   	     "9주차:Measurement of Reaction Enthalpy",
	     "10주차:Acid-Base Titration 1",
  	     "11주차:Acid-Base Titration 2",
   	     "12주차:Calculation of Ksp of Calcium Hydroxide",
	     "13주차:Electrochemical Reaction and Entropy Change",
  	     "14주차:Make up class",
  	     "15주차:Final exam week",
  	     "16주차:"
   	 ],
	textbook: ["TBA (김성균 외 / n.d.)"]
    }
  },
  {
    id: "BS113-07",
    name: "일반화학실험I",
    prof: "DESTA KEBEDE TAYE",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 3, start: 13, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "ktdesta@dgist.ac.kr",
            phone: "010-5953-1971",
            office: "E7-L09",
            office_hours: "Friday 10:30-11:30AM"
        },
        summary: "● General Chemistry Laboratory I introduces fundamental laboratory techniques in chemistry. Students are expected to review safety precautions before each experiment. Throughout the course, students will perform prearranged experimental procedures, work collaboratively with classmates, and accurately collect and analyze experimental data. Emphasis is placed on proper laboratory practices and safety awareness to minimize accidents and maintain a safe learning environment. ● This course will help students develop the ability to apply safety practices in chemistry. Students will learn basic experimental techniques and precautions, and become familiar with common laboratory equipment. They will strengthen their understanding of chemical principles by accurately collecting, analyzing, and interpreting experimental data while maintaining proper laboratory practices and safety awareness. ● Students must attend each experiment session. Reporting results without attendance may lead to dismissal or suspension from the course.",
        methods: ["Experiment"],
        materials: "TBA",
        policies: "Students must complete a preliminary report to review pre-lab content before each experiment. Experiments and result discussions must be conducted in groups, but reports must be submitted individually. Proper lab clothing is required. Wearing capes, flip-flops, sandals, or other open-toed shoes is prohibited.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 },
        ],
        schedule: [  
     	     "1주차:Calculation of Atomic/Ion Radius",
             "2주차:Molar Volume of Gases",
  	     "3주차:Characteristics and Structure of Molecules",
 	     "4주차:Derivation of Chemical Formulas",
  	     "5주차:Atomic Spectra",
   	     "6주차:Make up class",
    	     "7주차:Midterm exam week",
 	     "8주차:Determination of Molecular Weight via Freezing Point Depression",
   	     "9주차:Measurement of Reaction Enthalpy",
	     "10주차:Acid-Base Titration 1",
  	     "11주차:Acid-Base Titration 2",
   	     "12주차:Calculation of Ksp of Calcium Hydroxide",
	     "13주차:Electrochemical Reaction and Entropy Change",
  	     "14주차:Make up class",
  	     "15주차:Final exam week",
  	     "16주차:"
   	 ],
	textbook: ["TBA (김성균 외 / n.d.)"]
    }
  },
  {
    id: "BS114-01",
    name: "생명과학개론",
    prof: "이석규",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 11, duration: 1.5 }, { day: 3, start: 11, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-242",
        contact: {
            email: "slee2012@dgist.ac.kr",
            phone: "053-785-6611",
            office: "E4-409",
            office_hours: "TBA"
        },
        summary: "생명과학의 기초적인 개념과 이론을 학습한다. 이 과목은 고교 생명과학2를 수강하지 않은 학생 또는 향후 생명과학 비전공자를 대상으로 한다.",
        methods: ["Lecture", "Discussion"],
        materials: "주교재",
        policies: "정상적인 대면 강의의 경우 수업 촬영 동영상을 별도로 제공하지 않음.",
        grading: [
            { name: "Midterm exam", percent: 35 },
            { name: "Final exam", percent: 35 },
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 20 },
        ],
        schedule: [  
 	        "TBA"
   	    ],
	textbook: ["Campbell Essential Biology with Physiology, Global Edition 6th Edition (Eric J. Simon / 2019)"]
    }
  },
  {
    id: "BS114-02",
    name: "생명과학개론",
    prof: "이효상",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-224",
        contact: {
            email: "hyosang22@dgist.ac.kr",
            phone: "053-785-6147",
            office: "E4-410",
            office_hours: "TBA"
        },
        summary: "생명과학의 기초적인 개념과 이론을 학습한다. 이 과목은 고교 생명과학2를 수강하지 않은 학생 또는 향후 생명과학 비전공자를 대상으로 한다.",
        methods: ["Lecture"],
        materials: "None",
        policies: "정상적인 대면 강의의 경우 수업 촬영 동영상을 별도로 제공하지 않음.",
        grading: [
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 },
            { name: "Attendance", percent: 20 },
        ],
        schedule: [  
 	        "TBA"
   	    ],
	textbook: ["Campbell Essential Biology with physiology (Eric J. Simon / 2020)"]
    }
  },
  {
    id: "BS115-01",
    name: "일반생물학 실험",
    prof: "김유리",
    credit: 1,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E4-224",
        contact: {
            email: "None",
            phone: "053-785-1650",
            office: "None",
            office_hours: "None"
        },
        summary: "● '일반생물학 실험'은 현대 생명과학 연구에 필수적인 분자생물학과 생물정보학 실험 및 실습을 수행한다. ● 실험 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다.",
        methods: ["Lecture","Experiment"],
        materials: "주교재: 분자와 생명현상 실험 / 이석규 저 / 라이프사이언스 출판사",
        policies: "None",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Etc", percent: 20 },
            { name: "Term Project", percent: 40 },
            { name: "Homework", percent: 20 },
        ],
        schedule: [  
 	     "1주차:오리엔테이션연구노트 작성법",
   	     "2주차:과학적 방법론",
 	     "3주차:Pipetting과 Serial dilution의 원리",
  	     "4주차:gDNA 추출 분리",
 	     "5주차:PCR & agarose gel 만들기",
   	     "6주차:PCR product 전기영동 및 정제",
   	     "7주차:프로젝트 1 결과분석 및프로젝트 2 소개",
  	     "8주차:중간고사",
    	     "9주차:미생물용 배지 만들기",
   	     "10주차:Serial dilution & 고체배지 배양",
  	     "11주차:CFU 측정 및 Colony PCR",
  	     "12주차:전기영동, PCR product 정제",
 	     "13주차:서열 분석 (sequencing)",
   	     "14주차:BLAST를 이용한 미생물 동정",
  	     "15주차:보강주",
    	     "16주차:기말고사"
   	 ],
	textbook: ["분자와 생명현상 실험 (이석규 / 2017)"]
    }
  },
  {
    id: "BS115-02",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 11, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E4-224",
        contact: {
            email: "None",
            phone: "053-785-6644",
            office: "None",
            office_hours: "None"
        },
        summary: "● '일반생물학 실험'은 현대 생명과학 연구에 필수적인 분자생물학과 생물정보학 실험 및 실습을 수행한다. 특히, 2개의 연구 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 실험 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 참고문헌 인용윤리를 엄격히 관리한다. 연구노트 및 보고서 표절은 F 처리한다.",
        methods: ["Lecture","Project", "Discussion", "Experiment"],
        materials: "주교재: 분자와 생명현상 실험 / 이석규 저 / 라이프사이언스 출판사",
        policies: "지도 불응, 안전관리 소홀 및 수업 분위기 방해가 되는 일체의 행동 시 즉시 퇴실조치한다.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Term Project 1", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 20 },
            { name: "Term Project 2", percent: 20 },
            { name: "Homework", percent: 10 },
        ],
        schedule: [  
  	     "1주차:오리엔테이션(Overview) 및 연구노트 작성법",
  	     "2주차:실험실 안전수칙 및 과학적 방법론",
 	     "3주차:실험장비 사용법 이론 및 실습",
   	     "4주차:유전형X표현형 분석 프로젝트: 세포 genomic DNA 추출",
  	     "5주차:유전형X표현형 분석 프로젝트: PCR 원리 및 실습",
     	     "6주차:유전형X표현형 분석 프로젝트: DNA 전기영동 및 정제",
   	     "7주차:유전형X표현형 분석 프로젝트: 염기서열 분석",
   	     "8주차:중간고사(1차 보고서 작성 및 제출)",
   	     "9주차:미생물 동정 프로젝트: 미생물학의 기초",
  	     "10주차:미생물 동정 프로젝트: 미생물 배양용 배지 제조 및 pH 미터 적정 실습",
   	     "11주차:미생물 동정 프로젝트: 단계희석 및 고체배지 도말",
   	     "12주차:미생물 동정 프로젝트: CFU 측정 및 colony PCR",
   	     "13주차:미생물 동정 프로젝트: DNA 전기영동 및 정제",
 	     "14주차:미생물 동정 프로젝트: 염기서열 분석 및 BLAST를 이용한 미생물 동정",
 	     "15주차:염기서열 분석 결과 분반 공유 및 질의응답",
             "16주차:기말고사(2차 보고서 작성 및 제출)"
   	 ],
	textbook: ["분자와 생명현상 실험 (이석규 / 2017)"]
    }
  },
  {
    id: "BS115-03",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 11, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E4-224",
        contact: {
            email: "None",
            phone: "053-785-6644",
            office: "None",
            office_hours: "None"
        },
        summary: "● '일반생물학 실험'은 현대 생명과학 연구에 필수적인 분자생물학과 생물정보학 실험 및 실습을 수행한다. 특히, 2개의 연구 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 실험 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 참고문헌 인용윤리를 엄격히 관리한다. 연구노트 및 보고서 표절은 F 처리한다.",
        methods: ["Lecture","Project", "Discussion", "Experiment"],
        materials: "주교재: 분자와 생명현상 실험 / 이석규 저 / 라이프사이언스 출판사",
        policies: "지도 불응, 안전관리 소홀 및 수업 분위기 방해가 되는 일체의 행동 시 즉시 퇴실조치한다.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Term Project 1", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 20 },
            { name: "Term Project 2", percent: 20 },
            { name: "Homework", percent: 10 },
        ],
        schedule: [  
  	     "1주차:오리엔테이션(Overview) 및 연구노트 작성법",
  	     "2주차:실험실 안전수칙 및 과학적 방법론",
 	     "3주차:실험장비 사용법 이론 및 실습",
   	     "4주차:유전형X표현형 분석 프로젝트: 세포 genomic DNA 추출",
  	     "5주차:유전형X표현형 분석 프로젝트: PCR 원리 및 실습",
     	     "6주차:유전형X표현형 분석 프로젝트: DNA 전기영동 및 정제",
   	     "7주차:유전형X표현형 분석 프로젝트: 염기서열 분석",
   	     "8주차:중간고사(1차 보고서 작성 및 제출)",
   	     "9주차:미생물 동정 프로젝트: 미생물학의 기초",
  	     "10주차:미생물 동정 프로젝트: 미생물 배양용 배지 제조 및 pH 미터 적정 실습",
   	     "11주차:미생물 동정 프로젝트: 단계희석 및 고체배지 도말",
   	     "12주차:미생물 동정 프로젝트: CFU 측정 및 colony PCR",
   	     "13주차:미생물 동정 프로젝트: DNA 전기영동 및 정제",
 	     "14주차:미생물 동정 프로젝트: 염기서열 분석 및 BLAST를 이용한 미생물 동정",
 	     "15주차:염기서열 분석 결과 분반 공유 및 질의응답",
             "16주차:기말고사(2차 보고서 작성 및 제출)"
   	 ],
	textbook: ["분자와 생명현상 실험 (이석규 / 2017)"]
    }
  },
  {
    id: "BS115-04",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 3, start: 11, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E4-224",
        contact: {
            email: "None",
            phone: "053-785-6644",
            office: "None",
            office_hours: "None"
        },
        summary: "● '일반생물학 실험'은 현대 생명과학 연구에 필수적인 분자생물학과 생물정보학 실험 및 실습을 수행한다. 특히, 2개의 연구 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 실험 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 참고문헌 인용윤리를 엄격히 관리한다. 연구노트 및 보고서 표절은 F 처리한다.",
        methods: ["Lecture","Project", "Discussion", "Experiment"],
        materials: "주교재: 분자와 생명현상 실험 / 이석규 저 / 라이프사이언스 출판사",
        policies: "지도 불응, 안전관리 소홀 및 수업 분위기 방해가 되는 일체의 행동 시 즉시 퇴실조치한다.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Term Project 1", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 20 },
            { name: "Term Project 2", percent: 20 },
            { name: "Homework", percent: 10 },
        ],
        schedule: [  
  	     "1주차:오리엔테이션(Overview) 및 연구노트 작성법",
  	     "2주차:실험실 안전수칙 및 과학적 방법론",
 	     "3주차:실험장비 사용법 이론 및 실습",
   	     "4주차:유전형X표현형 분석 프로젝트: 세포 genomic DNA 추출",
  	     "5주차:유전형X표현형 분석 프로젝트: PCR 원리 및 실습",
     	     "6주차:유전형X표현형 분석 프로젝트: DNA 전기영동 및 정제",
   	     "7주차:유전형X표현형 분석 프로젝트: 염기서열 분석",
   	     "8주차:중간고사(1차 보고서 작성 및 제출)",
   	     "9주차:미생물 동정 프로젝트: 미생물학의 기초",
  	     "10주차:미생물 동정 프로젝트: 미생물 배양용 배지 제조 및 pH 미터 적정 실습",
   	     "11주차:미생물 동정 프로젝트: 단계희석 및 고체배지 도말",
   	     "12주차:미생물 동정 프로젝트: CFU 측정 및 colony PCR",
   	     "13주차:미생물 동정 프로젝트: DNA 전기영동 및 정제",
 	     "14주차:미생물 동정 프로젝트: 염기서열 분석 및 BLAST를 이용한 미생물 동정",
 	     "15주차:염기서열 분석 결과 분반 공유 및 질의응답",
             "16주차:기말고사(2차 보고서 작성 및 제출)"
   	 ],
	textbook: ["분자와 생명현상 실험 (이석규 / 2017)"]
    }
  },
  {
    id: "BS115-05",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 9, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E4-224",
        contact: {
            email: "None",
            phone: "053-785-6644",
            office: "None",
            office_hours: "None"
        },
        summary: "● '일반생물학 실험'은 현대 생명과학 연구에 필수적인 분자생물학과 생물정보학 실험 및 실습을 수행한다. 특히, 2개의 연구 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 실험 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 참고문헌 인용윤리를 엄격히 관리한다. 연구노트 및 보고서 표절은 F 처리한다.",
        methods: ["Lecture","Project", "Discussion", "Experiment"],
        materials: "주교재: 분자와 생명현상 실험 / 이석규 저 / 라이프사이언스 출판사",
        policies: "지도 불응, 안전관리 소홀 및 수업 분위기 방해가 되는 일체의 행동 시 즉시 퇴실조치한다.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Term Project 1", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 20 },
            { name: "Term Project 2", percent: 20 },
            { name: "Homework", percent: 10 },
        ],
        schedule: [  
  	     "1주차:오리엔테이션(Overview) 및 연구노트 작성법",
  	     "2주차:실험실 안전수칙 및 과학적 방법론",
 	     "3주차:실험장비 사용법 이론 및 실습",
   	     "4주차:유전형X표현형 분석 프로젝트: 세포 genomic DNA 추출",
  	     "5주차:유전형X표현형 분석 프로젝트: PCR 원리 및 실습",
     	     "6주차:유전형X표현형 분석 프로젝트: DNA 전기영동 및 정제",
   	     "7주차:유전형X표현형 분석 프로젝트: 염기서열 분석",
   	     "8주차:중간고사(1차 보고서 작성 및 제출)",
   	     "9주차:미생물 동정 프로젝트: 미생물학의 기초",
  	     "10주차:미생물 동정 프로젝트: 미생물 배양용 배지 제조 및 pH 미터 적정 실습",
   	     "11주차:미생물 동정 프로젝트: 단계희석 및 고체배지 도말",
   	     "12주차:미생물 동정 프로젝트: CFU 측정 및 colony PCR",
   	     "13주차:미생물 동정 프로젝트: DNA 전기영동 및 정제",
 	     "14주차:미생물 동정 프로젝트: 염기서열 분석 및 BLAST를 이용한 미생물 동정",
 	     "15주차:염기서열 분석 결과 분반 공유 및 질의응답",
             "16주차:기말고사(2차 보고서 작성 및 제출)"
   	 ],
	textbook: ["분자와 생명현상 실험 (이석규 / 2017)"]
    }
  },
  {
    id: "BS115-06",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 14, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E4-224",
        contact: {
            email: "None",
            phone: "053-785-6644",
            office: "None",
            office_hours: "None"
        },
        summary: "● '일반생물학 실험'은 현대 생명과학 연구에 필수적인 분자생물학과 생물정보학 실험 및 실습을 수행한다. 특히, 2개의 연구 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 실험 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 참고문헌 인용윤리를 엄격히 관리한다. 연구노트 및 보고서 표절은 F 처리한다.",
        methods: ["Lecture","Project", "Discussion", "Experiment"],
        materials: "주교재: 분자와 생명현상 실험 / 이석규 저 / 라이프사이언스 출판사",
        policies: "지도 불응, 안전관리 소홀 및 수업 분위기 방해가 되는 일체의 행동 시 즉시 퇴실조치한다.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Term Project 1", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 20 },
            { name: "Term Project 2", percent: 20 },
            { name: "Homework", percent: 10 },
        ],
        schedule: [  
  	     "1주차:오리엔테이션(Overview) 및 연구노트 작성법",
  	     "2주차:실험실 안전수칙 및 과학적 방법론",
 	     "3주차:실험장비 사용법 이론 및 실습",
   	     "4주차:유전형X표현형 분석 프로젝트: 세포 genomic DNA 추출",
  	     "5주차:유전형X표현형 분석 프로젝트: PCR 원리 및 실습",
     	     "6주차:유전형X표현형 분석 프로젝트: DNA 전기영동 및 정제",
   	     "7주차:유전형X표현형 분석 프로젝트: 염기서열 분석",
   	     "8주차:중간고사(1차 보고서 작성 및 제출)",
   	     "9주차:미생물 동정 프로젝트: 미생물학의 기초",
  	     "10주차:미생물 동정 프로젝트: 미생물 배양용 배지 제조 및 pH 미터 적정 실습",
   	     "11주차:미생물 동정 프로젝트: 단계희석 및 고체배지 도말",
   	     "12주차:미생물 동정 프로젝트: CFU 측정 및 colony PCR",
   	     "13주차:미생물 동정 프로젝트: DNA 전기영동 및 정제",
 	     "14주차:미생물 동정 프로젝트: 염기서열 분석 및 BLAST를 이용한 미생물 동정",
 	     "15주차:염기서열 분석 결과 분반 공유 및 질의응답",
             "16주차:기말고사(2차 보고서 작성 및 제출)"
   	 ],
	textbook: ["분자와 생명현상 실험 (이석규 / 2017)"]
    }
  },
  {
    id: "BS115-07",
    name: "일반생물학 실험",
    prof: "조정아",
    credit: 1,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 16, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E4-224",
        contact: {
            email: "None",
            phone: "053-785-6644",
            office: "None",
            office_hours: "None"
        },
        summary: "● '일반생물학 실험'은 현대 생명과학 연구에 필수적인 분자생물학과 생물정보학 실험 및 실습을 수행한다. 특히, 2개의 연구 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 실험 프로젝트를 진행하여 생물학 연구의 과학적 방법론 및 미생물학, 분자생물학, 생물정보학을 포괄하는 실험을 수행하고 이를 통하여 현대 생물학 연구의 기초를 학습한다. ● 참고문헌 인용윤리를 엄격히 관리한다. 연구노트 및 보고서 표절은 F 처리한다.",
        methods: ["Lecture","Project", "Discussion", "Experiment"],
        materials: "주교재: 분자와 생명현상 실험 / 이석규 저 / 라이프사이언스 출판사",
        policies: "지도 불응, 안전관리 소홀 및 수업 분위기 방해가 되는 일체의 행동 시 즉시 퇴실조치한다.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Term Project 1", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 20 },
            { name: "Term Project 2", percent: 20 },
            { name: "Homework", percent: 10 },
        ],
        schedule: [  
  	     "1주차:오리엔테이션(Overview) 및 연구노트 작성법",
  	     "2주차:실험실 안전수칙 및 과학적 방법론",
 	     "3주차:실험장비 사용법 이론 및 실습",
   	     "4주차:유전형X표현형 분석 프로젝트: 세포 genomic DNA 추출",
  	     "5주차:유전형X표현형 분석 프로젝트: PCR 원리 및 실습",
     	     "6주차:유전형X표현형 분석 프로젝트: DNA 전기영동 및 정제",
   	     "7주차:유전형X표현형 분석 프로젝트: 염기서열 분석",
   	     "8주차:중간고사(1차 보고서 작성 및 제출)",
   	     "9주차:미생물 동정 프로젝트: 미생물학의 기초",
  	     "10주차:미생물 동정 프로젝트: 미생물 배양용 배지 제조 및 pH 미터 적정 실습",
   	     "11주차:미생물 동정 프로젝트: 단계희석 및 고체배지 도말",
   	     "12주차:미생물 동정 프로젝트: CFU 측정 및 colony PCR",
   	     "13주차:미생물 동정 프로젝트: DNA 전기영동 및 정제",
 	     "14주차:미생물 동정 프로젝트: 염기서열 분석 및 BLAST를 이용한 미생물 동정",
 	     "15주차:염기서열 분석 결과 분반 공유 및 질의응답",
             "16주차:기말고사(2차 보고서 작성 및 제출)"
   	 ],
	textbook: ["분자와 생명현상 실험 (이석규 / 2017)"]
    }
  },
  {
    id: "BS116-01",
    name: "일반생물학I",
    prof: "정찬, 곽준명, 김민식",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }],
    syllabus: {
        capacity: "150",
        classroom: "E7-236",
        contact: {
            email: "chungc@dgist.ac.kr",
            phone: "053-785-1660",
            office: "E5-213",
            office_hours: "사전 약속 필요"
        },
        summary: "● 본 강의에서는 모든 생명체가 공유하는 공통적인 특징, 특히 생명체의 구성 원리와 분자 구조 및 기능, 그리고 일반적인 생명현상과 운영 원리를 전반적으로 소개함으로써 진화의 역사에 따라 나타나는 생명체의 공통성과 다양성을 학습함. ● 생명체를 구성하거나 생명현상에 관여하는 주요 분자의 구조와 기능, 분자 및 세포 수준의 미시적 생명현상, 개체 수준 이상의 거시적 생명현상을 포괄적으로 이해하는 데에 초점을 두고 있음. ● 시험 및 과제에서, academic integrity에 반하는 일체의 부정행위 금지. 과제의 경우 독립적이고 독자적으로 진행할 것.",
        methods: ["Lecture", "Flipped-learning", "Project", "Presentation", "Peer teaching"],
        materials: "None",
        policies: "절대 평가로서 A+ 94.0% 이상, A0 90.0~93.9%, A- 88.0~89.9%, B+ 85.0~87.9%, B0 80.0~84.9%, B- 78.0~79.9%, C+ 74.0~77.9%, C0 67.0~73.9%, C- 65.0~66.9%, F 64.9% 이하",
        grading: [
            { name: "Etc.", percent: 100 },
        ],
        schedule: [ 
   	     "1주차:생명과학의 주제 / 원자와 분자",
  	     "2주차:물의 화학 / 탄소: 분자 다양성",
  	     "3주차:생체 거대 분자와 지질 / 에너지와 생명체",
 	     "4주차:세포의 구조와 기능 / 세포막",
 	     "5주차:유전자의 발현 / 유전자 발현 조절 (1차 시험)",
 	     "6주차:세포 신호 / 세포호흡",
  	     "7주차:광합성 / 체세포분열",
 	     "8주차:중간고사 기간",
 	     "9주차:DNA 기술 / 생식주기와 감수분열",
  	     "10주차:멘델 유전학 / 연관과 염색체",
   	     "11주차:핵산과 유전 (2차 시험) / 유전체의 진화",
 	     "12주차:바이러스 / 원핵생물",
 	     "13주차:진핵생물의 기원과 진화 / 비관다발 식물 및 비종자관 식물",
 	     "14주차:종자식물 / 균류",
 	     "15주차:동물의 다양성 / 무척추동물 / 척추동물",
   	     "16주차:기말고사 (3차 시험)"
   	    ],
	      textbook: ["Biology: A Global Approach, Global Edition (닐 캠벨 / n.d.)"]
    }
  },
  {
    id: "BS118-01",
    name: "일반화학I",
    prof: "DESTA KEBEDE TAYE",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 3 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-241",
        contact: {
            email: "ktdesta@dgist.ac.kr",
            phone: "053-785-6644",
            office: "E7-L09",
            office_hours: "금 10:30-11:30"
        },
        summary: "● General Chemistry I course introduces foundational concepts in chemistry, focusing on the structure and properties of matter. Students will explore atomic theory, periodic trends, chemical bonding, molecular geometry, and the principles governing chemical reactions and stoichiometry. The course also covers gases, liquids, solids, and intermolecular forces, providing a solid foundation in fundamental chemistry concepts. ● This course is designed to introduce students to the fundamental principles of chemistry. Students will develop a solid understanding of atomic structure, chemical bonding, stoichiometry, and the properties of gases, liquids, and solids. Emphasis is placed on developing quantitative problem-solving skills and applying chemical concepts to real-world phenomena, as well as preparing students for more advanced studies in science and engineering. ● Cheating or plagiarism will result in an automatic failure of the relevant assignment and may lead to dismissal from or suspension from the course.",
        methods: ["Lecture"],
        materials: "Main textbook: Chemistry, The Central Science, 15th Ed. (Pearson, 2021); Authors: Brwon, LeMay, Bursten, Murphy, Woodward, Stoltzfus.   Reference book: Chemistry, 10th Ed.  (Cengage Learning, 2017); Authors: Steven S. Zumdahl, Susan A. Zumdahl, Donald J. DeCoste.",
        policies: "Using cellphone during lecture and exam is prohibited.",
        grading: [
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
  	     "1주차:Orientation, Chapter 1 - Introduction: Matter, Energy, and Measurement",
 	     "2주차:Chapter 2 - Atoms, Molecules,and Ions",
 	     "3주차:Chapter 3 - Chemical Reactions and Reaction Stoichiometry",
  	     "4주차:Chapter 4 - Reactions in Aqueous Solution",
  	     "5주차:Chapter 5 - Thermochemistry",
   	     "6주차:Chapter 6 - Electronic Structure of Atoms",
  	     "7주차:Chapter 7 - Periodic Propertiesof the Elements",
    	     "8주차:Mid-term Exam week",
    	     "9주차:Chapter 8 - Basic Concepts of Chemical Bonding",
  	     "10주차:Chapter 9 - Molecular Geometryand Bonding Theories",
    	    "11주차:Chapter 10 - Gases",
   	    "12주차:Chapter 11 - Liquids and Intermolecular Forces",
 	    "13주차:Chapter 12 - Solids and Modern Materials",
    	    "14주차:Chapter 13 - Properties of Solutions",
  	    "15주차:Chapter 14 - Chemical Kinetics",
 	    "16주차:Final Exam week"
        ],
        textbook: ["Chemistry (Zumdahl, Steven S / 2018)", "Chemistry : the central science (Brown, Theodore L / 2022)"]
    }
  },
  {
    id: "BS118-02",
    name: "일반화학I",
    prof: "SANGARAJU SHANMUGAM",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 14, duration: 1.5 }, { day: 3, start: 14, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-242",
        contact: {
            email: "sangarajus@dgist.ac.kr",
            phone: "053-785-6413",
            office: "E6-314",
            office_hours: "After 16:30 or email"
        },
        summary: "● General Chemistry ● This course is designed to teach undergraduate students to understand the concepts and properties of atoms, molecules, substances, and compounds.   - Understand the chemical bonding and properties of substances based on several examples.",
        methods: ["Lecture"],
        materials: "Distribute the presentation materials by e-mail before the lecture.",
        policies: "None",
        grading: [
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
 	     "1주차:Orientation, CH01 Introduction: Matter, Energy, and Measurement",
  	     "2주차:CH02 Atoms, Molecules, and Ions",
  	     "3주차:CH03 Chemical Reactions and Reaction Stoichiometry",
 	     "4주차:CH04 Reactions in Aqueous Solution",
	     "5주차:CH06 Electronic Structure of Atoms",
 	     "6주차:CH07 Periodic Properties of the Elements",
 	     "7주차:CH07 Periodic Properties of the Elements",
  	     "8주차:Mid-term Exam",
  	     "9주차:CH08 Basic Concepts of Chemical Bonding",
    	     "10주차:CH08 Basic Concepts of Chemical Bonding",
 	     "11주차:CH09 Molecular Geometry and Bonding Theories",
  	     "12주차:CH09 Molecular Geometry and Bonding Theories",
  	     "13주차:CH10 Gases",
 	     "14주차:CH11 Liquids and Intermolecular Forces",
 	     "15주차:CH12 Solids and Modern Materials",
   	     "16주차:Final Exam"
        ],
        textbook: ["Chemistry, 10th Ed. (Zumdahl / 2017)", "Chemistry : the central science (Brown, Theodore L / 2022)"]
    }
  },
  {
    id: "BS118-03",
    name: "일반화학I",
    prof: "남은주",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 9, duration: 1.5 }, { day: 4, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-233",
        contact: {
            email: "eunjunam@dgist.ac.kr",
            phone: "053-785-6525",
            office: "None",
            office_hours: "None"
        },
        summary: "General Chemistry I lecture offers an overview of fundamental chemistry topics, including atomic structures, basic concepts of chemical bonding, molecular geometry and bonding theories. Additional topics are covered to further develop chemical knowledge and enhance understanding of fundamental chemical principles.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Quiz", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
  	     "1주차:Orientation, CH01 Introduction: Matter, Energy, and Measurement",
  	     "2주차:CH02 Atoms, Molecules, and Ions",
  	     "3주차:CH03 Chemical Reactions and Reaction Stoichiometry",
 	     "4주차:CH04 Reactions in Aqueous Solution",
	     "5주차:CH06 Electronic Structure of Atoms",
 	     "6주차:CH07 Periodic Properties of the Elements",
 	     "7주차:CH07 Periodic Properties of the Elements",
  	     "8주차:Mid-term Exam",
  	     "9주차:CH08 Basic Concepts of Chemical Bonding",
    	     "10주차:CH08 Basic Concepts of Chemical Bonding",
 	     "11주차:CH09 Molecular Geometry and Bonding Theories",
  	     "12주차:CH09 Molecular Geometry and Bonding Theories",
  	     "13주차:CH10 Gases",
 	     "14주차:CH11 Liquids and Intermolecular Forces",
 	     "15주차:CH12 Solids and Modern Materials",
   	     "16주차:Final Exam"
        ],
        textbook: ["Chemistry : the central science	(Brown, Theodore L / 2022)"]
    }
  },
  {
    id: "BS118-04",
    name: "일반화학I",
    prof: "DESTA KEBEDE TAYE",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 16, duration: 1.5 }, { day: 3, start: 16, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-242",
        contact: {
            email: "ktdesta@dgist.ac.kr",
            phone: "053-785-6644",
            office: "E7-L09",
            office_hours: "금 10:30-11:30"
        },
        summary: "● General Chemistry I course introduces foundational concepts in chemistry, focusing on the structure and properties of matter. Students will explore atomic theory, periodic trends, chemical bonding, molecular geometry, and the principles governing chemical reactions and stoichiometry. The course also covers gases, liquids, solids, and intermolecular forces, providing a solid foundation in fundamental chemistry concepts. ● This course is designed to introduce students to the fundamental principles of chemistry. Students will develop a solid understanding of atomic structure, chemical bonding, stoichiometry, and the properties of gases, liquids, and solids. Emphasis is placed on developing quantitative problem-solving skills and applying chemical concepts to real-world phenomena, as well as preparing students for more advanced studies in science and engineering. ● Cheating or plagiarism will result in an automatic failure of the relevant assignment and may lead to dismissal from or suspension from the course.",
        methods: ["Lecture"],
        materials: "Main textbook: Chemistry, The Central Science, 15th Ed. (Pearson, 2021); Authors: Brwon, LeMay, Bursten, Murphy, Woodward, Stoltzfus.   Reference book: Chemistry, 10th Ed.  (Cengage Learning, 2017); Authors: Steven S. Zumdahl, Susan A. Zumdahl, Donald J. DeCoste.",
        policies: "Using cellphone during lecture and exam is prohibited.",
        grading: [
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
  	     "1주차:Orientation, Chapter 1 - Introduction: Matter, Energy, and Measurement",
 	     "2주차:Chapter 2 - Atoms, Molecules,and Ions",
 	     "3주차:Chapter 3 - Chemical Reactions and Reaction Stoichiometry",
  	     "4주차:Chapter 4 - Reactions in Aqueous Solution",
  	     "5주차:Chapter 5 - Thermochemistry",
   	     "6주차:Chapter 6 - Electronic Structure of Atoms",
  	     "7주차:Chapter 7 - Periodic Propertiesof the Elements",
    	     "8주차:Mid-term Exam week",
    	     "9주차:Chapter 8 - Basic Concepts of Chemical Bonding",
  	     "10주차:Chapter 9 - Molecular Geometryand Bonding Theories",
    	    "11주차:Chapter 10 - Gases",
   	    "12주차:Chapter 11 - Liquids and Intermolecular Forces",
 	    "13주차:Chapter 12 - Solids and Modern Materials",
    	    "14주차:Chapter 13 - Properties of Solutions",
  	    "15주차:Chapter 14 - Chemical Kinetics",
 	    "16주차:Final Exam week"
        ],
        textbook: ["Chemistry (Zumdahl, Steven S / 2018)", "Chemistry : the central science (Brown, Theodore L / 2022)"]
    }
  },
  {
    id: "BS118-05",
    name: "일반화학I",
    prof: "DESTA KEBEDE TAYE",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-242",
        contact: {
            email: "ktdesta@dgist.ac.kr",
            phone: "053-785-6644",
            office: "E7-L09",
            office_hours: "금 10:30-11:30"
        },
        summary: "● General Chemistry I course introduces foundational concepts in chemistry, focusing on the structure and properties of matter. Students will explore atomic theory, periodic trends, chemical bonding, molecular geometry, and the principles governing chemical reactions and stoichiometry. The course also covers gases, liquids, solids, and intermolecular forces, providing a solid foundation in fundamental chemistry concepts. ● This course is designed to introduce students to the fundamental principles of chemistry. Students will develop a solid understanding of atomic structure, chemical bonding, stoichiometry, and the properties of gases, liquids, and solids. Emphasis is placed on developing quantitative problem-solving skills and applying chemical concepts to real-world phenomena, as well as preparing students for more advanced studies in science and engineering. ● Cheating or plagiarism will result in an automatic failure of the relevant assignment and may lead to dismissal from or suspension from the course.",
        methods: ["Lecture"],
        materials: "Main textbook: Chemistry, The Central Science, 15th Ed. (Pearson, 2021); Authors: Brwon, LeMay, Bursten, Murphy, Woodward, Stoltzfus.   Reference book: Chemistry, 10th Ed.  (Cengage Learning, 2017); Authors: Steven S. Zumdahl, Susan A. Zumdahl, Donald J. DeCoste.",
        policies: "Using cellphone during lecture and exam is prohibited.",
        grading: [
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
  	     "1주차:Orientation, Chapter 1 - Introduction: Matter, Energy, and Measurement",
 	     "2주차:Chapter 2 - Atoms, Molecules,and Ions",
 	     "3주차:Chapter 3 - Chemical Reactions and Reaction Stoichiometry",
  	     "4주차:Chapter 4 - Reactions in Aqueous Solution",
  	     "5주차:Chapter 5 - Thermochemistry",
   	     "6주차:Chapter 6 - Electronic Structure of Atoms",
  	     "7주차:Chapter 7 - Periodic Propertiesof the Elements",
    	     "8주차:Mid-term Exam week",
    	     "9주차:Chapter 8 - Basic Concepts of Chemical Bonding",
  	     "10주차:Chapter 9 - Molecular Geometryand Bonding Theories",
    	    "11주차:Chapter 10 - Gases",
   	    "12주차:Chapter 11 - Liquids and Intermolecular Forces",
 	    "13주차:Chapter 12 - Solids and Modern Materials",
    	    "14주차:Chapter 13 - Properties of Solutions",
  	    "15주차:Chapter 14 - Chemical Kinetics",
 	    "16주차:Final Exam week"
        ],
        textbook: ["Chemistry (Zumdahl, Steven S / 2018)", "Chemistry : the central science (Brown, Theodore L / 2022)"]
    }
  },
  {
    id: "BS202-01",
    name: "확률과 통계 및 실습",
    prof: "Carlos Scarinci",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 16, duration: 2 }, { day: 3, start: 16, duration: 2 }],
    syllabus: {
        capacity: "45",
        classroom: "E7-L21",
        contact: {
            email: "cscarinci@dgist.ac.kr",
            phone: "053-785-6647",
            office: "E7-L10",
            office_hours: "Wed 13:00-15:00"
        },
        summary: "● This course provides an introduction to probability and statistical inference with an emphasis on fundamental concepts and their mathematical foundations. Topics include probability models, random variables and their distributions, joint and conditional distributions, sampling distributions, estimation, hypothesis testing, and simple linear regression. The course integrates theoretical development with illustrative examples and applications to data. ● By the end of the course, students should be able to formulate problems in probabilistic terms, apply standard methods of estimation and hypothesis testing, and draw appropriate conclusions from data. The course also aims to strengthen quantitative reasoning and the clear communication of statistical results. ● Cheating and plagiarism are serious violations of academic integrity and will not be tolerated. Any student found responsible for cheating will automatically fail the course. This also applies to those who knowingly allow their work to be copied.",
        methods: "The course will consist primarily of blackboard lectures covering material from the textbooks. A list of suggested exercises will be provided each week. Students are encouraged to read the relevant material and attempt the exercises before class, and to actively engage during lectures by asking questions and participating in discussions.",
        materials: "Students are expected to have successfully completed Multivariable Calculus (BS101) or an equivalent course. Familiarity with basic calculus, algebraic manipulation, and mathematical notation is expected. Students must have regular access to a laptop computer for assignments and computational demonstrations as required.",
        policies: "Any student who misses 25% or more classes will receive a failing grade. Justified absences will be considered as attended.    Attendance at both the midterm and final examinations is mandatory. Absence from either examination will result in a failing grade. Make-up exams may be granted upon appropriate justification.",
        grading: [
            { name: "Quiz", percent: 10 },
            { name: "Homework", percent: 30 },
            { name: "Final Exam", percent: 30 },
            { name: "Midterm exam", percent: 30 }
        ],
        schedule: [
  	     "1주차:Basic concepts and examples",
  	     "2주차:Axioms and properties of probability",
  	     "3주차:Conditional probability",
  	     "4주차:Discrete random variables",
  	     "5주차:Special probability distributions",
   	     "6주차:Continuous random variables",
  	     "7주차:Additional models",
  	     "8주차:Midterm Exam",
     	     "9주차:Bivariate distributions",
  	     "10주차:Functions of random variables",
  	     "11주차:Sampling distributions",
 	     "12주차:Point estimation",
  	     "13주차:Interval estimation",
    	     "14주차:Hypothesis testing",
 	     "15주차:Model assessment",
 	     "16주차:Final Exam"
        ],
        textbook: ["Probability and Statistical Inference (Hogg, Tannis, Zimmerman / n.d.)", "Introductory Statistics (Mann / n.d.)", "Introduction to Mathematical Statistics (Hogg, McKean, Criag / n.d.)"]
    }
  },
  {
    id: "BS203-01",
    name: "선형대수학",
    prof: "한강진",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 2 }, { day: 2, start: 13, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-224",
        contact: {
            email: "kjhan@dgist.ac.kr",
            phone: "053-785-6629",
            office: "E7-L15",
            office_hours: "추후 안내"
        },
        summary: "● 학부과정에서 미적분학과 함께 가장 중요하고도 흥미롭고, 응용성에서는 오히려 미적분학보다 더 광범위한 선형대수의 주요 개념을 배웁니다. 먼저, 자연현상 속에 널리 퍼져 있는 ‘선형성(Linearity)’이라는 것들을 관찰하고, 그것이 어떻게 수학적으로 정리되고 표현되어 질 수 있는지를 이해합니다. 그리고 이 선형성을 담고 있는 대상(object) 그리 고 그 대상간의 사상(mapping)이 다변수미적분학 시간에 학습한 ‘행렬(matrix)’로 나타날 수 있음을 자연스레 이해한 뒤 행렬에 대해 흥미로운 여러가지 문제들을 생각합니다. 이렇게 학습한 내용을 바탕으로 처음 시작했던 자연과학과 공학, 경제학 등에서 등장하는 여러 문제들에 선형대수를 이용한 응용을 학습하는 것이 이 과목의 내용이자 목표입니다. ● 해당과목에 대한 특별한 선수과목은 없습니다. 다변수미적분학에서 배운 행렬과 연립일차방정식에 대한 기본적인 이해만 있으면 가능합니다 (물론 이 부분도 강의 초반부에 복습할 예정입니다). 본 수업은 이렇게 흥미롭고 중요한 선형대수의 원리적인 측면을 더 깊이 이해하고 다양한 연립일차방정식의 해법과 응용에 관한 필요한 기본적인 계산을 직접 또는 소프트웨어를 이용해 수행할 수 있는 것을 목표로 합니다. ● 추후 자세히 공지할 예정.",
        methods: "None",
        materials: "None",
        policies: "None",
        grading: [
            { name: "Quiz", percent: 10 },
            { name: "Attendance", percent: 5 },
            { name: "Homework", percent: 5 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
 	     "1주차:Introduction, Gaussian Elimination",
    	     "2주차:Gauss-Jordan Elimination, Matrix Basics",
  	     "3주차:Matrix Inverses and Determinants",
	     "4주차:Vector space and related topics I",
	     "5주차:Vector space and related topics II",
 	     "6주차:Linear Maps I",
 	     "7주차:Linear Maps II",
  	     "8주차:Midterm",
 	     "9주차:Inner product space and related topics I",
  	     "10주차:Inner product space and related topics II",
 	     "11주차:Eigenvalue Problems I",
 	     "12주차:Eigenvalue Problems II",
             "13주차:Spectral Theorems",
  	     "14주차:Singular Value Decomposition",
  	     "15주차:Applications",
   	     "16주차:Final exam"
        ],
        textbook: ["Applied Linear Algebra and Matrix Analysis (T. Shores / 2018)", "Contemporary linear algebra (Anton, Howard / 2003)", "Linear Algebra Done Right (Sheldon Axler / 2015)", "Linear Algebra (3rd ed.) (Serge Lang / 1987)"]
    }
  },
  {
    id: "BS203-02",
    name: "선형대수학",
    prof: "한강진",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 16, duration: 2 }, { day: 3, start: 16, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-L22",
        contact: {
            email: "kjhan@dgist.ac.kr",
            phone: "053-785-6629",
            office: "E7-L15",
            office_hours: "추후 안내"
        },
        summary: "● 학부과정에서 미적분학과 함께 가장 중요하고도 흥미롭고, 응용성에서는 오히려 미적분학보다 더 광범위한 선형대수의 주요 개념을 배웁니다. 먼저, 자연현상 속에 널리 퍼져 있는 ‘선형성(Linearity)’이라는 것들을 관찰하고, 그것이 어떻게 수학적으로 정리되고 표현되어 질 수 있는지를 이해합니다. 그리고 이 선형성을 담고 있는 대상(object) 그리 고 그 대상간의 사상(mapping)이 다변수미적분학 시간에 학습한 ‘행렬(matrix)’로 나타날 수 있음을 자연스레 이해한 뒤 행렬에 대해 흥미로운 여러가지 문제들을 생각합니다. 이렇게 학습한 내용을 바탕으로 처음 시작했던 자연과학과 공학, 경제학 등에서 등장하는 여러 문제들에 선형대수를 이용한 응용을 학습하는 것이 이 과목의 내용이자 목표입니다. ● 해당과목에 대한 특별한 선수과목은 없습니다. 다변수미적분학에서 배운 행렬과 연립일차방정식에 대한 기본적인 이해만 있으면 가능합니다 (물론 이 부분도 강의 초반부에 복습할 예정입니다). 본 수업은 이렇게 흥미롭고 중요한 선형대수의 원리적인 측면을 더 깊이 이해하고 다양한 연립일차방정식의 해법과 응용에 관한 필요한 기본적인 계산을 직접 또는 소프트웨어를 이용해 수행할 수 있는 것을 목표로 합니다. ● 추후 자세히 공지할 예정.",
        methods: "None",
        materials: "None",
        policies: "None",
        grading: [
            { name: "Quiz", percent: 10 },
            { name: "Attendance", percent: 5 },
            { name: "Homework", percent: 5 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
 	     "1주차:Introduction, Gaussian Elimination",
    	     "2주차:Gauss-Jordan Elimination, Matrix Basics",
  	     "3주차:Matrix Inverses and Determinants",
	     "4주차:Vector space and related topics I",
	     "5주차:Vector space and related topics II",
 	     "6주차:Linear Maps I",
 	     "7주차:Linear Maps II",
  	     "8주차:Midterm",
 	     "9주차:Inner product space and related topics I",
  	     "10주차:Inner product space and related topics II",
 	     "11주차:Eigenvalue Problems I",
 	     "12주차:Eigenvalue Problems II",
             "13주차:Spectral Theorems",
  	     "14주차:Singular Value Decomposition",
  	     "15주차:Applications",
   	     "16주차:Final exam"
        ],
        textbook: ["Applied Linear Algebra and Matrix Analysis (T. Shores / 2018)", "Contemporary linear algebra (Anton, Howard / 2003)", "Linear Algebra Done Right (Sheldon Axler / 2015)", "Linear Algebra (3rd ed.) (Serge Lang / 1987)"]
    }
  },
  {
    id: "BS203-03",
    name: "선형대수학",
    prof: "이두석",
    credit: 3,
    categories: ["수학"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 2 }, { day: 2, start: 9, duration: 2 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-L22",
        contact: {
            email: "dslee@dgist.ac.kr",
            phone: "053-785-6610",
            office: "E7-204",
            office_hours: "화 16:00-18:00"
        },
        summary: "● Learning basic linear algebra theory and its applications project: Topics include solving systems of linear equations, vector spaces, determinants, eigenvalues, similarity of matrices, Inner Product Spaces, Structure of operators in Inner Product Spaces, Bilinear and quadric forms, and advanced spectral theory       -Required: SE101a, SE102a ● Learning basic linear algebra theory and its applications with project. ● - Trust your own ability and own intellect.      - Don’t copy someone's ideas, or works without citing the sources.     - Don't cheat during exams.      - Don’t submit your assignments that have been done for another student or a previous class.",
        methods: ["Lecture","Flipped-learning","Project","Presentation"],
        materials: "None",
        policies: "Basic manners:    ·Come to class on time and be attentive and engaged in class.   ·During class, refrain from using laptops, cell phones and other electronic devices.    -Students who copy assignments, allow assignments to be copied, or cheat on tests will fail the entire course.    -Plagiarism means using words, ideas, or arguments from another person or source without citation. Cite all sources referenced, whether or not assigned and quoted directly.",
        grading: [
            { name: "Term Project", percent: 40 },
            { name: "Homework", percent: 20 },
            { name: "Final Exam", percent: 20 },
            { name: "Midterm exam", percent: 20 }
        ],
        schedule: [
 	     "1주차:Systems of linear equations and matrices, Gauss elimination",
  	     "2주차:LU decomposition",
    	     "3주차:Column spaces and null spaces, Linear transformations",
    	     "4주차:Determinants of matrices",
 	     "5주차:Vector spaces, Inner product spaces",
  	     "6주차:The method of least squares, Eigenvalues and eigenvectors",
   	     "7주차:Diagonalization of matrices",
   	     "8주차:Mid-term exam.",
     	     "9주차:System of linear differential equations",
   	     "10주차:Complex matrices",
  	     "11주차:Similarity of matrices and linear transformations",
 	     "12주차:Quadratic forms",
 	     "13주차:Singular value decompositions",
 	     "14주차:Constrained Optimization",
  	     "15주차:Presentation of project result",
	     "16주차:Term-end exam."
        ],
        textbook: ["Linear algebra and its applications (Lay, David C / 2022)", "Linear algebra and its applications (Gilbert Strang / 2006)", "Linear algebra : theory, intuition, code (Cohen, Mike X / 2021)", "Elementary linear algebra : with supplemental applications (Anton, Howard / 2011)"]
    }
  },
  {
    id: "CE303-01",
    name: "화학공학열역학(공)",
    prof: "고서진",
    credit: 3,
    categories: ["화학공학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "화학공학": "전공선택" },
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "50",
        classroom: "E7-L31",
        contact: {
            email: "sjko927@dgist.ac.kr",
            phone: "053-785-6453",
            office: "E6-218",
            office_hours: "None"
        },
        summary: "This course will cover basics in thermodynamics regarding the first law thermodynamics, properties of real and ideal gases, heat effects, the second law thermodynamics etc.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Those who absent without leave will get a penalty",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
          "TBA"
        ],
        textbook: "None",
    }
  },
  {
    id: "CE401-01",
    name: "고분자개론(이,공)",
    prof: "호동해",
    credit: 3,
    categories: ["화학공학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "화학공학": "전공선택", "화학": "전공선택" },
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-L22",
        contact: {
            email: "hodh123@dgist.ac.kr",
            phone: "053-785-6452",
            office: "E6-519",
            office_hours: "None"
        },
        summary: "고분자의 기본 개념, 화학, 물리, 그리고 산업적인 응용에 대한 이해",
        methods: ["Lecture","Presentation","Discussion"],
        materials: "None",
        policies: "수업에 저해되는 행위는 자제 부탁드립니다.",
        grading: [
            { name: "Attendance", percent: 30 },
            { name: "Final Exam", percent: 30 },
            { name: "Term Project", percent: 30 },
            { name: "Class Participation", percent: 10 }
        ],
        schedule: [
          "TBA"
        ],
        textbook: ["고분자화학 (Nicholson, John W / 2009)","Introduction to Polymers	(Lovell, P.A / 2011)"]
    }
  },
  {
    id: "CE402-01",
    name: "화학제품 및 공정설계(공)",
    prof: "김찬연",
    credit: 3,
    categories: ["화학공학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "화학공학": "전공선택" },
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-G02",
        contact: {
            email: "chanyeon@dgist.ac.kr",
            phone: "053-785-6450",
            office: "None",
            office_hours: "None"
        },
        summary: "● The chemical industry is changing rapidly, going beyond traditional chemical process and petrochemical industries to energy/environment, bio, semiconductor/display, etc.  Accordingly, it is very important to figure out consumers' needs to generate new ideas, and then to select the best candidate. In this regard, this lecture will help students understand what chemical product is and how a four-step design process (needs, ideas, selection, and manufacture) works.   And then, the basic principles of chemical process design are also dealt briefly. ● 1. Understand what kinds of chemical products are being developed and how to design them   2. Understand a four-step design process (needs, ideas, selection, and manufacture)   3. Understand the principles of chemical process design (process (Course Objectives) simulation, process synthesis heuristics, etc.)   4. Learn product design case studies for basic chemicals. ● Sincerity, Honesty, and Thoughtfulness",
        methods: ["Lecture", "Project"],
        materials: "None",
        policies: "Attendance Rule: -1 point for every absence. However, let me know your absence before the class, if you are ill or others.  Homework Rule: Please submit your homework before starting the lecture on due date. I will accept delayed homework until the next week, but it will get at most 50% score.   Makeup lecture: prefer to extend regular lecture time rather than other days.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 10 },
            { name: "Term Project", percent: 20 },
            { name: "Final Exam", percent: 30 },
            { name: "Midterm exam", percent: 30 }
        ],
        schedule: [
 	     "1주차:Systems of linear equations and matrices, Gauss elimination",
  	     "2주차:LU decomposition",
    	     "3주차:Column spaces and null spaces, Linear transformations",
    	     "4주차:Determinants of matrices",
 	     "5주차:Vector spaces, Inner product spaces",
  	     "6주차:The method of least squares, Eigenvalues and eigenvectors",
   	     "7주차:Diagonalization of matrices",
   	     "8주차:Mid-term exam.",
     	     "9주차:System of linear differential equations",
   	     "10주차:Complex matrices",
  	     "11주차:Similarity of matrices and linear transformations",
 	     "12주차:Quadratic forms",
 	     "13주차:Singular value decompositions",
 	     "14주차:Constrained Optimization",
  	     "15주차:Presentation of project result",
	     "16주차:Term-end exam."
        ],
        textbook: ["Lecture note", "Chemical product design (Cussler, E. L / 2011)"]
    }
  },
  {
    id: "CHEM201-01",
    name: "분석화학(이,공)",
    prof: "이호춘",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["전공필수"],
    // 🔥 [수정] 재료공학 트랙 포함 완료
    trackRelations: { "화학": "전공필수", "화학공학": "전공선택", "재료공학": "전공선택" },
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "70",
        classroom: "E7-233",
        contact: {
            email: "dukelee@dgist.ac.kr",
            phone: "053-785-6411",
            office: "E6-311",
            office_hours: "Any time"
        },
        summary: "● This course deals with fundamental principles on analytical chemistry, plus a glimpse into state-of-the-art R&D trends. ● This course aims for delivering basic knowledge including chemical measurements, data handling, titration,  acid/base & buffer, chemical equibrium/activity, & a taste of electroanalytical chemisty.",
        methods: ["Lecture"],
        materials: "None",
        policies: "This course will be evaluated on a relative grading scale. Exception of attendance - When confirmation of medical care is presented - When family event occurs(official documents required) - When students participate in official competitions and/or events The main language of this course is Korean. Office Hour : Anytime, welcome.",
        grading: [
            { name: "Attendance", percent: 5 },
            { name: "Homework", percent: 15 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
  	     "1주차:강의 소개 및 분석과정/화학측정",
  	     "2주차:실험오차",
   	     "3주차:Data 통계",
   	     "4주차:부피분석 및 적정",
  	     "5주차:산과 염기",
    	     "6주차:완충용액",
     	     "7주차:중간고사",
  	     "8주차:산염기 적정",
  	     "9주차:다양성자 산염기",
  	     "10주차:화학평형",
  	     "11주차:EDTA 적정법",
    	     "12주차:분광학",
	     "13주차:전기분석화학-1",
   	     "14주차:전기분석화학-2",
   	     "15주차:전기분석화학-3 (변경 가능)",
  	     "16주차:기말고사"
        ],
        textbook: ["화학적분석 (Exploring Chemical Anaylsis) 5th Ed. (DC Harris / 2013)", "분석화학 (Quantitative Chemical Analysis) 8th (DC Harris / 2012)"]
    }
  },
  {
    id: "CHEM205-01",
    name: "유기화학I(이,공)",
    prof: "정병혁",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "화학": "전공필수", "화학공학": "전공필수", "재료공학": "전공선택" },
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "100",
        classroom: "E7-236",
        contact: {
            email: "byunghyuck.jung@dgist.ac.kr",
            phone: "053-785-6625",
            office: "E2-211",
            office_hours: "화 19:00-21:00"
        },
        summary: "● 유기화학의 기본 개념부터 화합물의 합성, 화학 반응을 이해 ● 유기 화합물의 성질과 화학 결합, 구조의 이해  · 화합물 합성을 위한 화학 반응과 그 메커니즘의 이해 ● 과제 복사 및 표절, 시험 도중 부정 행위 적발 시 F.",
        methods: ["Lecture", "Project"],
        materials: "교재, 필기도구/선행 교과로 일반화학 1, 2를 반드시 수강해야함 (권고 사항)",
        policies: "첫 수업 때, 관련 내용 공유",
        grading: [
            { name: "Attendance", percent: 5 },
            { name: "Homework", percent: 15 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
    	     "1주차:Orientation, A Review of General Chemistry",
    	     "2주차:Molecular Representations / Acids and Bases",
    	     "3주차:Acids and Bases II / Alkanes and Cycloalkanes",
    	     "4주차:Alkanes and Cycloalkanes II / Stereoisomerism",
    	     "5주차:Stereoisomerism II / Chemical Reactivity and Mechanisms",
    	     "6주차:Substitution Reactions",
    	     "7주차:Alkenes: Structure and Preparation via Elimination Reactions",
    	     "8주차:Mid-term Exam week",
    	     "9주차:Addition Reactions of Alkenes",
    	     "10주차:Alkynes",
    	     "11주차:Radical Reactions",
    	     "12주차:Synthesis",
    	     "13주차:Alcohols and Phenols",
    	     "14주차:Alcohols and Phenols II / Ethers and Epoxide",
    	     "15주차:Ethers and Epoxide II",
    	     "16주차:Final Exam week"
        ],
        textbook: ["Organic chemistry, 4th Edition (Klein, David R / 2022)"]
    }
  },
  {
    id: "CHEM206-01",
    name: "일반화학실험II(이)",
    prof: "DESTA KEBEDE TAYE",
    credit: 1,
    categories: ["화학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 2, start: 13, duration: 2 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-222",
        contact: {
            email: "ktdesta@dgist.ac.kr",
            phone: "053-785-6644",
            office: "E7-L09",
            office_hours: "금 10:30-11:30"
        },
        summary: "General Chemistry Laboratory II builds on basic laboratory techniques and introduces more advanced methods used in chemical analysis. Students will review laboratory safety and experimental procedures, perform experiments involving solution preparation and standardization, spectrophotometry, gravimetric analysis, equilibrium, phase behavior, recrystallization, distillation, extraction, and melting point determination. Emphasis is placed on accurate data collection, proper laboratory practices, and safety awareness.",
        methods: ["Experiment"],
        materials: "TBA",
        policies: "Students must complete a preliminary report to review pre-lab content before each experiment. Experiments and result discussions must be conducted in groups, but reports must be submitted individually. Proper lab clothing is required. Wearing capes, flip-flops, sandals, or other open-toed shoes is prohibited.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Final Exam", percent: 40 },
            { name: "Homework", percent: 40 }
        ],
        schedule: [
          "TBA"
        ],
        textbook: ["TBA	(김성균 외 / 2019)"]
      }
  },
  {
    id: "CHEM301-01",
    name: "심화화학실험I(이)",
    prof: "홍선기, 인수일",
    credit: 2,
    categories: ["화학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 1, start: 12.5, duration: 4 }],
    syllabus: {
        capacity: "24",
        classroom: "E6-221",
        contact: {
            email: "seonkihong@dgist.ac.kr",
            phone: "053-785-6526",
            office: "E2-510",
            office_hours: "Mon 14:30-17:30"
        },
        summary: "● This course provides hands-on laboratory training in fundamental experimental techniques of analytical chemistry and organic chemistry. ● Upon completion of this course, students will gain practical experience in quantitative analysis, instrumental methods, and organic synthesis, while developing essential laboratory skills, basic data analysis abilities, and scientific report writing skills through guided experimental work. ● Any form of plagiarism, data fabrication, report copying, or other academic misconduct will result in course failure and may lead to additional disciplinary action in accordance with university regulations.",
        methods: ["Presentation", "Team teaching", "Experiment"],
        materials: "None",
        policies: "- Students must attend all laboratory sessions and arrive on time. - Safety regulations must be strictly followed at all times. - Laboratory reports and pre-lab reports must be submitted by the designated deadlines. - Late submissions may result in grade penalties unless prior approval is granted.",
        grading: [
            { name: "Midterm Exam", percent: 50 },
            { name: "Final Exam", percent: 50 },
        ],
        schedule: [
    	     "1주차:Course orientation, laboratory safety, and group assignment",
    	     "2주차:Use of measurement instruments and calibration of volumetric glassware",
    	     "3주차:Quantitative determination of chloride by silver titration",
    	     "4주차:Determination of aluminum in bleaching powder samples by gravimetric analysis",
    	     "5주차:Analysis of carbonate and bicarbonate mixtures",
    	     "6주차:Determination of water hardness using EDTA titration",
    	     "7주차:Quantitative analysis of alcohols (Beer–Lambert Law)",
    	     "8주차:Midterm Examination Week (No laboratory session)",
    	     "9주차:Crystallization and determination of melting point",
    	     "10주차:Extraction",
    	     "11주차:SN2 reaction, TLC monitoring, and column chromatography",
    	     "12주차:Grignard reaction",
    	     "13주차:Acylation of ferrocene",
    	     "14주차:Sandmeyer reaction",
    	     "15주차:Make-up or supplementary laboratory session",
    	     "16주차:Final Examination Week (No laboratory session)"
        ],
        textbook: ["심화화학 실험서 I (pdf version, LMS 전자교재)"]
    }
  },
  {
    id: "CHEM305-01",
    name: "무기화학II(이,공)",
    prof: "김성균",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "화학공학": "전공선택", "화학": "전공선택" },
    times: [{ day: 0, start: 15, duration: 1.5 }, { day: 2, start: 15, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L22",
        contact: {
            email: "hansol@dgist.ac.kr",
            phone: "053-785-6615",
            office: "E2-208",
            office_hours: "TBA"
        },
        summary: "● The title of this course is 'Inorganic Chemistry II', and one of the essential subject in chemistry. ● - Understand what Inorganic Chemistry is - Understand main principles of formation and reaction of inorganic compounds via learning following topics. (acid-base theory, crystalline solid state, chemistry of main group elements, organometallic chemistry)",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "Prerequisite : Inorganic Chemistry I",
        policies: "The main language of this course is English.",
        grading: [
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 10 },
            { name: "Midterm Exam", percent: 40 },
            { name: "Final Exam", percent: 40 },
        ],
        schedule: [
    	     "1주차:Acid-Base Chemistry (Arrhenius & Bronsted-Lowry Concepts)",
    	     "2주차:Acid-Base Chemistry (Lewis & Hard-Soft Concepts, Frontier Orbitals)",
    	     "3주차:Solid State Chemistry (Formular and Structures, Metals & Ionic Compounds)",
    	     "4주차:Solid State Chemistry (Thermodynamics of Ionic Compounds)",
    	     "5주차:Solid State Chemistry (Molecular Orbitals & Band Theory, Superconductivity)",
    	     "6주차:Main Group Chemistry (General Trends, Hydrogen, Group 1, 2, 13)",
    	     "7주차:Main Group Chemistry (Group 14 ~ 18)",
    	     "8주차:Mid-Term Exam.",
    	     "9주차:Organometallic Chemistry (nomenclature, 18e-rule, ligands)",
    	     "10주차:Organometallic Chemistry (Pi Bonding, Carbene, Carbyne, Carbide)",
    	     "11주차:Organometallic Chemistry (Spectral Analysis & Characterization)",
    	     "12주차:Organometallic Reactions (Ligand exchange & loss)",
    	     "13주차:Organometallic Reactions (Homogeneous Catalysis)",
    	     "14주차:Organometallic Reactions (Heterogeneous Catalysis)",
    	     "15주차:Final Exam."
        ],
        textbook: ["Inorganic Chemistry,5/6th Ed. (Gary L. Miessler, Paul J. Fischer, Donald A. Tarr)"]
    }
  },
  {
    id: "CHEM306-01",
    name: "물리화학II(이,공)",
    prof: "성주영",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "화학공학": "전공선택", "화학": "전공선택" },
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-224",
        contact: {
            email: "jooyoung@dgist.ac.kr",
            phone: "053-785-6533",
            office: "E2-212",
            office_hours: "None"
        },
        summary: "● Physical Chemistry 2 Quantitative and theoretical study of the properties and structure of matter and their relation to the interaction of matter and energy. ● This course serves as an introduction to chemical thermodynamics, giving you an understanding of basic principles, laws and theories of physical chemistry the are necessary for chemistry. You will develop the ability to solve quantitative problems, and learn to use original thought and logic in the solution of problems and derivation of equations. You will learn to apply mathematics in chemistry in such a way that the equations paint a clear picture of the physical phenomena. ● Cheating and plagiarism: Students who cheated in exam or plagiarize term paper cannot pass this course.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Homework: Assigned but not collected. More than 8 classes absent = failure. 3 times late = 1 absence Your absence is excused only when you missed class because of these three reason: One, you were involved in a university-sponsored activity; Two, there was a death in your family; or Three, you were sick and stayed overnight at a hospital. For each of these case, you need to bring me official letters.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Midterm Exam", percent: 40 },
            { name: "Final Exam", percent: 40 },
        ],
        schedule: [
    	     "1주차:00 Orientation Chapter 1. The properties of gases",
    	     "2주차:Chapter 1. The properties of gasesChapter 1. The properties of gases",
    	     "3주차:Chapter 1. The properties of gasesChapter 2. The First Law",
    	     "4주차:Chapter 2. The First LawChapter 2. The First Law",
    	     "5주차:Chapter 2. The First LawChapter 2. The First Law",
    	     "6주차:Chapter 3. The Second and Third LawsChapter 3. The Second and Third Laws",
    	     "7주차:Chapter 3. The Second and Third LawsChapter 3. The Second and Third Laws",
    	     "8주차:Midterm Exam",
    	     "9주차:Chapter 4 Physical Transformations of Pure SubstancesChapter 4 Physical Transformations of Pure Substances",
    	     "10주차:Chapter 4 Physical Transformations of Pure Substances",
    	     "11주차:Chapter 4 Physical Transformations of Pure SubstancesChapter 4 Physical Transformations of Pure Substances",
    	     "12주차:Chapter 5 Simple MixtureChapter 5 Simple Mixture",
    	     "13주차:Chapter 5 Simple MixtureChapter 5 Simple Mixture",
    	     "14주차:Chapter 5 Simple MixtureChapter 5 Simple Mixture",
    	     "15주차:Chapter 6 Chemical EquilibriumsChapter 6 Chemical Equilibriums",
    	     "16주차:Final Exam"
        ],
        textbook: ["Atkins' Physical chemistry (Atkins, P. W / 2018)"]
    }
  },
  {
    id: "CHEM404-01",
    name: "계산화학(이)",
    prof: "장윤희",
    credit: 3,
    categories: ["화학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }],
    syllabus: {
        capacity: "10",
        classroom: "E7-L22",
        contact: {
            email: "yhjang@dgist.ac.kr",
            phone: "053-785-6412",
            office: "E6-313",
            office_hours: "None"
        },
        summary: "Computational chemistry (molecular modeling) as chemical experiments done with computer at a molecular scale",
        methods: ["Lecture","Flipped-learning","Project","Presentation","Discussion","Experiment"],
        materials: "컴퓨터 실습 기간 개인 휴대용 컴퓨터 지참 필수. 해당 컴퓨터의 사용자명을 미리 특수문자나 빈칸 없는 영문 한 단어로 정해올 것 (좋은 예: gildong, 나쁜 예: 홍길동, Hong Gildong, Hong!)",
        policies: "2학년 2학기 물리화학1 (양자화학), 3학년 1학기 물리화학2 (열역학) 필수 과목을 활용하고 심화한 화학트랙 선택 과목.",
        grading: [
            "TBA"
        ],
        schedule: [
          "TBA"
        ],
        textbook: ["None"]
      }
  },
  {
    id: "CSE203-01",
    name: "자료구조(이,공)",
    prof: "김선준",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "컴퓨터공학": "전공필수", "전자공학": "전공선택" },
    times: [{ day: 0, start: 11, duration: 1.5 }, { day: 2, start: 11, duration: 1.5 }]
  },
  {
    id: "CSE302-01",
    name: "기계학습개론(이,공)",
    prof: "노어진",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 15, duration: 1.5 }, { day: 2, start: 15, duration: 1.5 }]
  },
  {
    id: "CSE305-01",
    name: "컴퓨터구조(공)",
    prof: "이효근",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "컴퓨터공학": "전공필수", "전자공학": "전공선택" },
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "130",
        classroom: "E7-236",
        contact: {
            email: "hyokeun.lee@dgist.ac.kr",
            phone: "None",
            office: "None",
            office_hours: "Appointment is needed"
        },
        summary: "● Like skyscrapers, well-architecting a system that incorporates delicate, bleeding-edge technologies is pressing. This lecture covers the basics of computer architecture, including pipeline designs, memory managements, and some issues related to caches (e.g., policies and coherence). There could be two term projects based on an RTL design and an architecture simulator. ● Clearly understand the concepts of architecture, microarchitecture, memory managements, and cache managements. ● F will be given if cheating is caught no matter what the case is.",
        methods: "lecture",
        materials: "None",
        policies: "None.",
        grading: [
            { name: "Attendance", percent: 5 },
            { name: "Term Project", percent: 30 },
            { name: "Midterm Exam", percent: 30 },
            { name: "Final Exam", percent: 35 },
        ],
        schedule: [
    	     "1주차:Introduction to Computer Architecture",
    	     "2주차:Instruction Set Architecture (1)",
    	     "3주차:Instruction Set Architecture (2)",
    	     "4주차:Single- & Multi-Cycle Microarchitectures",
    	     "5주차:Pipelined Microarchitecture: Introduction",
    	     "6주차:Pipelined Microarchitecture: Data Hazard and its Handling",
    	     "7주차:Pipelined Microarchitecture: Control Hazard and its Handling",
    	     "8주차:Mid-Term Exam",
    	     "9주차:Advanced Microarchitectures",
    	     "10주차:Memory Systems: Cache (1)",
    	     "11주차:Memory Systems: Cache (2)",
    	     "12주차:Memory Systems: Cache (3)",
    	     "13주차:Memory Systems: Virtual Memory (1)",
    	     "14주차:Memory Systems: Virtual Memory (2)",
    	     "15주차:IO Devices and Managements",
    	     "16주차:Final-Term Exam"
        ],
        textbook: ["Computer organization and design : the hardware/softwareinterface (Patterson, David A / 2014)"]
    }
  },
  {
    id: "CSE306-01",
    name: "시스템 프로그래밍(공)",
    prof: "이용우",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }],
    syllabus: {
        capacity: "130",
        classroom: "E7-242",
        contact: {
            email: "yongwoo@dgist.ac.kr",
            phone: "053-785-6322",
            office: "E3-214",
            office_hours: "TBA"
        },
        summary: "This course provides a programmer's perspective on how computer systems execute programs, store information, and communicate. The curriculum covers data representation, machine-level representation of programs, processor architecture, the memory hierarchy, exceptional control flow, and system-level I/O. By understanding these low-level mechanisms, students will gain the ability to write more efficient, reliable, and secure code.",
        methods: ["Lecture","Experiment"],
        materials: "None",
        policies: "1. Attendance: follows the university rules. 2. Use of AI Tools : While AI tools (e.g., ChatGPT) can be used for understanding general concepts, copy-and-paste from it is strictly prohibited.",
        grading: [
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 30 },
            { name: "Final Exam", percent: 30 },
            { name: "Midterm exam", percent: 30 }
        ],
        schedule: [
 	        "TBA"
        ],
        textbook: ["Computer systems : a programmer's perspective (3e) (O'Hallaron, David R / 2016)"]
    }
  },
  {
    id: "CSE307-01",
    name: "프로그래밍 언어(이,공)",
    prof: "전민석",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 14.5, duration: 1.5 }, { day: 3, start: 14.5, duration: 1.5 }],
    syllabus: {
        capacity: "80",
        classroom: "E7-236",
        contact: {
            email: "minseok_jeon@dgist.ac.kr",
            phone: "053-785-6324",
            office: "E7-211",
            office_hours: "월 09:00~12:00"
        },
        summary: "● This course explores the fundamental principles and paradigms underlying modern programming languages. Students will study key concepts including syntax, semantics, and type systems. students will design and implement programming languages. This course will also discuss designing appropriate programming approaches to solve diverse computational problems. ● Upon successful completion of this course, students will be able to understand and apply fundamental principles of programming language design including syntax, semantics, and type systems. Through hands-on implementation and theoretical study, students will learn to select appropriate languages for specific problems, understand language implementation techniques, and rapidly adapt to new programming languages by leveraging core principles that transcend individual language syntax. ● Students are expected to maintain the highest standards of academic honesty and integrity throughout this course. All submitted work must be original and completed independently unless explicitly designated as group work. Violations of academic integrity, including plagiarism, cheating on exams, or unauthorized collaboration, will result in serious consequences ranging from failure on the assignment to failure in the course.",
        methods: ["Lecture", "Project"],
        materials: "None",
        policies: "Attendance: Regular attendance is strongly encouraged and essential for success in this course. Students are responsible for all material covered in class, including announcements and assignment details. Classroom Conduct: Students are expected to maintain a respectful and professional learning environment. Disruptive behavior, including inappropriate use of electronic devices, will not be tolerated.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Midterm Exam", percent: 35 },
            { name: "Final Exam", percent: 35 },
        ],
        schedule: [
    	     "1주차:Inductive Definitions",
    	     "2주차:Functional programming",
    	     "3주차:Expressions",
    	     "4주차:Procedures",
    	     "5주차:Lexical Scoping",
    	     "6주차:States",
    	     "7주차:States",
    	     "8주차:Midterm Exam",
    	     "9주차:Records, Pointers, and garbage collection",
    	     "10주차:Static Type System",
    	     "11주차:Static Type System",
    	     "12주차:Automatic Type Inference",
    	     "13주차:Polymorphic Type Systems",
    	     "14주차:Lamda Calculus",
    	     "15주차:Programming Language Applications",
    	     "16주차:Final Exam"
        ],
        textbook: ["Essentials of Programming Languages (Friedman, Daniel P., and Mitchell Wand. / 2006)", "프로그래밍 언어의 원리 (오학주 / 2022)"]
    }
  },
  {
    id: "CSE404-01",
    name: "컴퓨터 비전 개론(공)",
    prof: "임성훈",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-L21",
        contact: {
            email: "sunghoonim@dgist.ac.kr",
            phone: "053-785-6323",
            office: "None",
            office_hours: "None"
        },
        summary: "● This course provides a comprehensive introduction to computer vision, covering both the theoretical foundations and practical algorithms for analyzing and understanding visual data. Topics range from image formation and processing to geometry-based vision, 3D reconstruction, and modern learning-based methods for recognition and scene understanding. ● By the end of this course, students will understand core principles of image formation, camera geometry, and multi-view vision, as well as key algorithms for feature extraction, matching, and visual perception. The course aims to equip students with the conceptual tools needed to analyze vision problems and prepare for advanced study or research in computer vision.",
        methods: ["Lecture", "Etc."],
        materials: "None",
        policies: "This class is recommended for students who are familiar with Python programming and general mathematics (linear algebra, calculus)",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 30 },
            { name: "Quiz", percent: 20 },
            { name: "Final Exam", percent: 40 },
        ],
        schedule: [
    	     "1주차:Course introduction",
    	     "2주차:Image formation",
    	     "3주차:Image processing",
    	     "4주차:Feature detection and matching",
    	     "5주차:Camera geometry",
    	     "6주차:Two-view geometry",
    	     "7주차:3D reconstruction",
    	     "8주차:Mid-term exam",
    	     "9주차:Computational imaging",
    	     "10주차:Image classification",
    	     "11주차:Object detection",
    	     "12주차:Semantic segmentation",
    	     "13주차:Optical Flow",
    	     "14주차:Alignment and Tracking",
    	     "15주차:Computational imaging",
    	     "16주차:Final exam"
        ],
        textbook: ["Computer vision : algorithms and applications (Szeliski, Richard / 2011)", "Multiple view geometry in computer vision (Hartley, Richard / 2011)", "Pattern recognition and machine learning (Bishop, Christopher M	/ 2006)", "Deep Learning (Goodfellow, Ian / 2016)"]
    }
  },
  {
    id: "CSE405-01",
    name: "컴퓨터보안개론(공)",
    prof: "최원석",
    credit: 3,
    categories: ["컴퓨터공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-224",
        contact: {
            email: "None",
            phone: "053-785-6345",
            office: "None",
            office_hours: "None"
        },
        summary: "Aspects of computer security, common attacks, policy formation, and security models. Tools and countermeasures for achieving particular security goals: one-way functions; symmetric- and asymmetric-key cryptography, including block ciphers with key generation and modes of operation; keyed hashes; digital signatures; public-key encryption; and simple key exchange protocols. Introduction to cybersecurity architectures.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Class Participation", percent: 20 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
 	        "TBA"
        ],
        textbook: "None"
    }
  },
  {
    id: "EE301-01",
    name: "신호 및 시스템(공)",
    prof: "최재호",
    credit: 3,
    categories: ["전자공학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "80",
        classroom: "E7-241",
        contact: {
            email: "jhochoi@dgist.ac.kr",
            phone: "053-785-6328",
            office: "E3-414",
            office_hours: "Upon appointment"
        },
        summary: "● In this course, students will learn how to understand signal (e.g., sound, radio waves, and electrical impulses) behavior in a mathematical way and how to analyze/design systems that process those signals. This course provides a foundation for various areas related with electrical engineering, such as signal processing, communications, and control theory. We will also implement various functions to analyze signals and systems through Python. ● 1) Understand fundamental concepts of signals and systems, 2) Learn how to analyze signals in both time and frequency domains, 3) Understand LTI systems and their properties, and 4) Get familiar wtih mathematical tools like Fourier transform and Laplace transform. ● No cheating; Use of phones during exams is strictly prohibited.",
        methods: ["Lecture", "Project"],
        materials: "None",
        policies: "Lecture-based course; Hands-on coding projects in Python.",
        grading: [
            { name: "Class Participation", percent: 5 },
            { name: "Homework", percent: 20 },
            { name: "Midterm Exam", percent: 35 },
            { name: "Final Exam", percent: 40 },
        ],
        schedule: [
    	     "1주차:Introduction to Signals",
    	     "2주차:Introduction to Systems",
    	     "3주차:Discrete-Time Linear Time Invariant Systems",
    	     "4주차:Continuous-Time Linear Time Invariant Systems",
    	     "5주차:Continuous-Time Fourier Series",
    	     "6주차:Continuous-Time Fourier Transforms",
    	     "7주차:Applications of Fourier Transforms",
    	     "8주차:Mid-Term Exam",
    	     "9주차:Discrete-Time Fourier Transform",
    	     "10주차:Sampling",
    	     "11주차:Laplace Transforms I",
    	     "12주차:Laplace Transforms II",
    	     "13주차:System Design and Analysis",
    	     "14주차:z-Transforms I",
    	     "15주차:z-Transforms II",
    	     "16주차:Final Exam"
        ],
        textbook: ["Signals & Systems (2nd ed.) (Alan V. Oppenheim / n.d.)", "Signals & Systems: Theory and Applications (The University of Michigan Press / n.d.)"]
    }
  },
  {
    id: "EE401-01",
    name: "디지털 신호처리(공)",
    prof: "이민선",
    credit: 3,
    categories: ["전자공학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "컴퓨터공학": "전공선택", "전자공학": "전공선택" },
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G01",
        contact: {
            email: "leems@dgist.ac.kr",
            phone: "053-785-6356",
            office: "None",
            office_hours: "None"
        },
        summary: "● This course introduces modern digital signal processing (DSP) techniques used across a wide range of applications. Topics include the mathematical foundations of discrete-time signal analysis, the theory and efficient implementation of fast Fourier transform (FFT) algorithms, and the design and realization of digital filters. The course concludes with case studies demonstrating how DSP methods are applied to solve practical, real-world problems. ● This course aims to build a strong foundation in modern digital signal processing (DSP) theory and implementation, and to develop the ability to apply DSP techniques to real-world problems. By the end of the course, students will be able to:    Understand the mathematical fundamentals of discrete-time signals and systems (e.g., sampling, convolution, and frequency-domain analysis).    Explain the principles of the DFT/FFT and implement efficient FFT-based spectral analysis.    Design and implement digital filters (FIR/IIR) to meet given specifications (e.g., cutoff frequency, ripple, and attenuation).    Select, apply, and interpret DSP methods for practical tasks such as noise reduction, feature extraction, and system analysis using real data.",
        methods: ["Lecture", "Presentation", "Project"],
        materials: "Course Material",
        policies: "None",
        grading: [
            { name: "Term Project", percent: 10 },
            { name: "Homework", percent: 10 },
            { name: "Midterm Exam", percent: 40 },
            { name: "Final Exam", percent: 40 },
        ],
        schedule: [
    	     "1주차:Intro to course, review of continuous-time signal/Discrete-time signals and systems",
    	     "2주차:Review of discrete-time signals and systems; convolution/Discrete-time Fourier transform",
    	     "3주차:z-transform/The inverse z-transform",
    	     "4주차:z-transform properties/The discrete Fourier series",
    	     "5주차:The discrete Fourier transform/Sampling of continuous-time signals",
    	     "6주차:Sampling of continuous-time signals/Circular convolution(1)",
    	     "7주차:Midterm",
    	     "8주차:Circular Convolution (2)/Representation of linear digital networks",
    	     "9주차:Network structures for IIR Systems/ Network structures for FIR systems/Parameter quantization effects in digital filter structures",
    	     "10주차:Design of IIR digital filters",
    	     "11주차:Digital Butterworth filters",
    	     "12주차:Design of FIR digital filters",
    	     "13주차:Computation of the discrete Fourier transform",
    	     "14주차:Discrete Hilbert transforms",
    	     "15주차:Final exam",
        ],
        textbook: ["Digital signal processing using MATLAB (Ingle, Vinay K / 2012)", "Discrete-time signal processing (Oppenheim, Alan V / 2010)"]
    }
  },
  {
    id: "EE403-01",
    name: "디지털통신(공)",
    prof: "서대원",
    credit: 3,
    categories: ["전자공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G02",
        contact: {
            email: "dwseo@dgist.ac.kr",
            phone: "053-785-6340",
            office: "E3-311",
            office_hours: "None"
        },
        summary: "● This course is about fundamentals of digital communications.  Topics include several digital modulation schemes(BPSK, QAM, etc), transmission performance analysis through AWGN channels, the concepts of fading, equalization, optimal receivers, basics of information theory such as channel capacity and error control coding. ● The purpose of this course is to provide students with technical backgrounds on digital communication theories and systems.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Midterm Exam", percent: 35 },
            { name: "Final Exam", percent: 35 },
        ],
        schedule: [
    	     "1주차:Review of signal and systems / random processes",
    	     "2주차:Review of signal and systems / random processes",
    	     "3주차:Review of signal and systems / random processes",
    	     "4주차:Baseband digital transmission (Chap. 5)",
    	     "5주차:Baseband digital transmission (Chap. 5)",
    	     "6주차:Digital communication I (Chap. 9)",
    	     "7주차:Digital communication I (Chap. 9)",
    	     "8주차:Mid-term exam",
    	     "9주차:Digital communication II (Chap. 9, 10)",
    	     "10주차:Digital communication II (Chap. 9, 10)",
    	     "11주차:Digital communication II (Chap. 9, 10)",
    	     "12주차:Optimum receivers and signal-space (Chap. 11)",
    	     "13주차:Optimum receivers and signal-space (Chap. 11)",
    	     "14주차:Optimum receivers and signal-space (Chap. 11)",
    	     "15주차:Information theory (Chap. 12)",
    	     "16주차:Final exam"
        ],
        textbook: ["Introduction to Analog & Digital Communication (2nd Ed.) (Haykin & Moher / 2007)", "Principles of Communications (7th Ed.) (Ziemer & Trante / 2014)"]
    }
  },
  {
    id: "EE406-01",
    name: "지능형제어시스템(공)",
    prof: "김경대, 이성민",
    credit: 3,
    categories: ["전자공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-235",
        contact: {
            email: "kkim@dgist.ac.kr",
            phone: "053-785-6325",
            office: "E3-212",
            office_hours: "None"
        },
        summary: "● PART I explores a mathematical framework for describing and understanding dynamic systems, establishing the basics for control systems to identify and observe these systems. Specifically, it investigates the state-space model of a dynamic system and provides essential insights into linear observers and basics of Linear Quadratic control. The lecture concludes by examining Kalman filter design as a method for control systems to optimally capture the dynamic behavior of a system and integrating it to Linear Quadratic control. PART II covers basic theories that are fundamentals in reinforcement learning, including Markov Decision Process, Dynamic Programming, and also introduces several representative reinforcement learning algorithms such as Monte Carlo Methods and Temporal Difference Learning, as well as several approaches to solve problems with large, high-dimensional, and potentially infinite state spaces.",
        methods: ["Lecture", "Team teaching"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Quiz", percent: 30 },
            { name: "Homework", percent: 70 },
        ],
        schedule: [
    	     "1주차:Fundamentals of Dynamic System",
    	     "2주차:State Space Model",
    	     "3주차:Observer Design",
    	     "4주차:Stochastic System",
    	     "5주차:Kalman Filter",
    	     "6주차:Linear Quadratic Control",
    	     "7주차:Receding Horizon Control",
    	     "8주차:No Class (Mid-term Exam Week)",
    	     "9주차:Introduction of Reinforcement Learning",
    	     "10주차:Monte Carlo Methods",
    	     "11주차:Temporal Difference Methods",
    	     "12주차:N-Step Bootstrapping",
    	     "13주차:Eligibility Traces",
    	     "14주차:Approximate Solution Methods",
    	     "15주차:Policy Gradient Methods",
    	     "16주차:No Class (Final Exam Week)"
        ],
        textbook: ["Reinforcement Learning - An I (Richard S. Sutton and Andrew G. Barto / n.d.)", "Discrete-time Stochastic Systems (T. Soderstrom / n.d.)"]
    }
  },
  {
    id: "EE407-01",
    name: "디지털집적회로설계(공)",
    prof: "김가인",
    credit: 3,
    categories: ["전자공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E3-626",
        contact: {
            email: "gain.kim@dgist.ac.kr",
            phone: "053-785-6342",
            office: "E3-409",
            office_hours: "None"
        },
        summary: "● This course covers fundamentals of digital integrated circuit (IC) design, transistor-level design of logic cells, transistor-level design of arithmetic elements, sequential circuits, power/area/speed trade-off, and basics of semi-custom digital IC design. ● The objective of this course is to equip students with a comprehensive understanding of the foundational principles and techniques underlying digital IC design. By the end of this course, students will be proficient in transistor-level design methodologies for both logic and arithmetic cells, understand the behaviour of sequential circuits in transistor-level, and be able to navigate the complexities of power, area, and speed trade-offs in IC design. ● No tolerance for cheating or any inappropriate behavior.",
        methods: ["Lecture", "Project", "Experiment"],
        materials: "None",
        policies: "Closed book exam",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 30 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
        ],
        schedule: [
    	     "1주차:Introduction",
    	     "2주차:CMOS inverter circuit",
    	     "3주차:CMOS logic circuits",
    	     "4주차:Logic optimization",
    	     "5주차:Latches and flip-flops",
    	     "6주차:Pipelining",
    	     "7주차:Design and layout",
    	     "8주차:Midterm exam",
    	     "9주차:Dynamic logic circuits",
    	     "10주차:CMOS adders and multiplier",
    	     "11주차:CMOS adders and multiplier",
    	     "12주차:Introduction to semi-custom digital design",
    	     "13주차:Introduction to semi-custom digital design",
    	     "14주차:Optimization of sequential functions",
    	     "15주차:Optimization of sequential functions",
    	     "16주차:Final exam"
        ],
        textbook: "None"
    }
  },
  {
    id: "GC101-01",
    name: "Academic English: S&C",
    prof: "Aaron Cumberledge",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 15.5, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "aaroncledge@dgist.ac.kr",
            phone: "053-785-6693",
            office: "E7-L17",
            office_hours: "By Appointment"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Project", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-02",
    name: "Academic English: S&C",
    prof: "Aaron Cumberledge",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "aaroncledge@dgist.ac.kr",
            phone: "053-785-6693",
            office: "E7-L17",
            office_hours: "By Appointment"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Project", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-03",
    name: "Academic English: S&C",
    prof: "Aaron Cumberledge",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "aaroncledge@dgist.ac.kr",
            phone: "053-785-6693",
            office: "E7-L17",
            office_hours: "By Appointment"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Project", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-04",
    name: "Academic English: S&C",
    prof: "Aaron Cumberledge",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 11, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "aaroncledge@dgist.ac.kr",
            phone: "053-785-6693",
            office: "E7-L17",
            office_hours: "By Appointment"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Project", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-05",
    name: "Academic English: S&C",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 9, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L28",
        contact: {
            email: "benriley73@dgist.ac.kr",
            phone: "053-785-6627",
            office: "E7-L16",
            office_hours: "TBD"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-06",
    name: "Academic English: S&C",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 3, start: 11, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "benriley73@dgist.ac.kr",
            phone: "053-785-6627",
            office: "E7-L16",
            office_hours: "TBD"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-07",
    name: "Academic English: S&C",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 3, start: 15.5, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "benriley73@dgist.ac.kr",
            phone: "053-785-6627",
            office: "E7-L16",
            office_hours: "TBD"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-08",
    name: "Academic English: S&C",
    prof: "Benjamin Wilson Riley",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 14, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L28",
        contact: {
            email: "benriley73@dgist.ac.kr",
            phone: "053-785-6627",
            office: "E7-L16",
            office_hours: "TBD"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-09",
    name: "Academic English: S&C",
    prof: "Mark Silverlock",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 14, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "marksilverlock@dgist.ac.kr",
            phone: "010-5444-0018",
            office: "E7-L13",
            office_hours: "TBA"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Project", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-10",
    name: "Academic English: S&C",
    prof: "Mark Silverlock",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L28",
        contact: {
            email: "marksilverlock@dgist.ac.kr",
            phone: "010-5444-0018",
            office: "E7-L13",
            office_hours: "TBA"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Project", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-11",
    name: "Academic English: S&C",
    prof: "Mark Silverlock",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 9, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L27",
        contact: {
            email: "marksilverlock@dgist.ac.kr",
            phone: "010-5444-0018",
            office: "E7-L13",
            office_hours: "TBA"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Lecture", "Project", "Presentation", "Discussion"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-12",
    name: "Academic English: S&C",
    prof: "Andrew John Miller",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 4, start: 14, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L28",
        contact: {
            email: "miller.andy@dgist.ac.kr",
            phone: "010-4540-9270",
            office: "None",
            office_hours: "None"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Flipped-learning", "Project", "Presentation", "Discussion", "Etc."],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-13",
    name: "Academic English: S&C",
    prof: "Andrew John Miller",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 4, start: 9.5, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L28",
        contact: {
            email: "miller.andy@dgist.ac.kr",
            phone: "010-4540-9270",
            office: "None",
            office_hours: "None"
        },
        summary: "English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. Based on an integrated approach to language skills and collaborative learning, the main activities include participating in group discussions, presentations, group writing, and peer teaching. Students are expected to use English only for all class activities. ",
        methods: ["Flipped-learning", "Project", "Presentation", "Discussion", "Etc."],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview",
    	     "2주차:Who owns English today? 1",
    	     "3주차:Who owns English today? 2",
    	     "4주차:What makes college life successful? 1",
    	     "5주차:What makes college life successful? 2",
    	     "6주차:Helping others 1",
    	     "7주차:Helping others 2",
    	     "8주차:Midterm exam",
    	     "9주차:History or Histories-Facts vs Opinions 1",
    	     "10주차:History or Histories-Facts vs Opinions 2",
    	     "11주차:What is Scientific Progress—Charts and comparative language 1",
    	     "12주차:What is Scientific Progress—Charts and comparative language 2",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas 1",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas 2",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas 3",
    	     "16주차:Final exam"
        ],
        textbook: "Academic English: Speaking & Correspondence (n.n. / n.d.)"
    }
  },
  {
    id: "GC101-14",
    name: "Academic English: S&C",
    prof: "이정아",
    credit: 2,
    categories: ["영어"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 14, duration: 3 }],
    syllabus: {
        capacity: "22",
        classroom: "E7-L28",
        contact: {
            email: "jalee@dgist.ac.kr",
            phone: "053-785-6623",
            office: "E7-216",
            office_hours: "None"
        },
        summary: "● English language is a tool for thought and communication. With this in mind, the Academic English: Speaking and Correspondence course has been designed to provide meaningful and purposeful interactions where ideas and opinions are developed and expressed by actually using the target language. In particular, this course will focus on spoken communications and correspondence: group discussion, presentation, email, and paragraph writing. ● Language Objectives: By the end of this course, students will be able to learn and use - languages and strategies for conversing with others effectively and appropriately; - languages and strategies for presenting on a particular topic in front of audience; - linguistic fundamentals and etiquettes for writing an email; and, - languages and discursive features for writing a paragraph Behavior/Performance Objectives: By the end of this course, students will - be able to actively reflect on their learning progress, evaluate their strengths and weaknesses in English and take corrective action as required; - be more able to think critically when responding to texts and in developing their own thoughts and opinions in English, and by extension, in their native language; - be more effective in working in partnership with others to achieve collective goals through working as a member of a small group to complete assessments and tasks; - be able to communicate their thoughts and opinions to others more clearly and completely in English, and be able to respond to others’ opinions thoughtfully and appropriately for international communication; - be able to prepare and deliver basic presentations in English and create appropriate visual aids to accompany the presentations; - be able to write an inquiry email following email writing conventions; - be able to write a paragraph with the paragraph structure and discursive features required; and - be able to understand the problem–solution structure in academic communication. ● Academic dishonesty in any form will not be tolerated. Violations of these rules will result in a record of the violation being placed in your file. You may also receive a failing grade for the course. Confirmation of such incidents can also result in expulsion from the university. Academic Dishonesty includes: ⬥    Unauthorized assistance: Using unauthorized materials, information, or study aids in any academic exercise (unless specifically authorized by your professor). ⬥     Presenting material (through written, visual, electronic, or oral means) which has not been studied or learned, but rather was obtained through someone else’s efforts and used as part of an examination, course assignment, or project. ⬥          Falsifying or misrepresenting your academic work. ⬥       Plagiarism: In which another’s work or ideas are used without indication of the source, thereby conveying the impression that such work is the student’s own. (go to http://www.plagiarism.org/ or https://www.copykiller.co.kr/notice to get more information on plagiarism and how to avoid it) ⬥     Multiple Submissions: Submitting the same work for credit more than once without the express permission of the professor. ⬥    Any student who knowingly helps another student violate these academic behavior standards is also in violation of the standards.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you must advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence, you will be given an excused absence. An excused absence does not negatively affect your final grade, however repeated absences (excused or not) may result in a warning from your professor, after which any further absences may lead to being awarded a failing or incomplete grade in the course. If you miss class due to ill-health, provide a medical certificate to your professor on the first class meeting after your return to receive your excused absence. If you are absent without a reasonable excuse, you will be marked absent from the class meeting. If you are marked absent 4 or more times during the semester you will receive a failing grade for the course. Please arrive on time for all class meetings. Three late arrivals will result in being marked as an unexcused absence. Arriving more than 20 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class, such as group work or presentations. Any work not completed during class time must be finished and turned in by the due date set by your professor. If you are absent (even if you have a reasonable excuse), it is your responsibility to find out what work was assigned during the classes you missed and to complete that work by the due date. Failure to submit work by the due date is unacceptable, and the work will not receive any feedback. Group Work Policy: Everyone must take part in group projects. For various assignments throughout the semester, you will be assigned to a group. Please refer to the assignment info sheet and checkpoints for a full breakdown of grade dissemination.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Term Project 1", percent: 5 },
            { name: "Term Project 2", percent: 20 },
            { name: "Term Project 3", percent: 15 },
            { name: "Term Project 4", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview- Email/Introduction",
    	     "2주차:Who owns English today?- Email",
    	     "3주차:Who owns English today?- Email",
    	     "4주차:What makes college life successful?-Group Discussion",
    	     "5주차:What makes college life successful?-Group Discussion",
    	     "6주차:Helping others-Group Discussion",
    	     "7주차:Helping others-Group Discussion",
    	     "8주차:Midterm exam period – No scheduled classes",
    	     "9주차:History or Histories—Facts vs Opinions-Problem Identification for Presentation",
    	     "10주차:History or Histories—Facts vs Opinions-Individual paragraph",
    	     "11주차:What is Scientific Progress—Charts and comparative language -Individual paragraph",
    	     "12주차:What is Scientific Progress—Charts and comparative language -Presentation",
    	     "13주차:FrankenFood—The Biology of GMOs: Opposing ideas-Presentation",
    	     "14주차:FrankenFood—The Biology of GMOs: Opposing ideas-Presentation",
    	     "15주차:FrankenFood—The Biology of GMOs: Opposing ideas-Presentation Day",
    	     "16주차:Final exam period – No scheduled classes"
        ],
        textbook: ["Academic English: Speaking & Correspondence (n.n / 2020)"]
    }
  },
  {
    id: "HSS101-01",
    name: "경제학 입문",
    prof: "김선구",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 2, start: 10, duration: 3 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-L31",
        contact: {
            email: "sonkukim@snu.ac.kr",
            phone: "053-785-6614",
            office: "E7-G08",
            office_hours: "수 09:00-10:00, 13:00-14:00"
        },
        summary: "The following outline looks somewhat ambitious and we probably will not be  able to cover all the topics listed below. If we slip behind the schedule, then  we will either skim over or just omit some of the topics.",
        methods: ["Lecture"],
        materials: "None",
        policies: "YOUR MOBILE PHONE SHOULD BE TURNED OFF DUR￾ING THE CLASS TIME. Please read the syllabus for grading system.",
        grading: [
            { name: "Etc.", percent: 100 },
        ],
        schedule: [
    	     "TBA"
        ],
        textbook: ["Principles of Economics, 5th ed. (G. Mankiw / n.d.)"]
    }
  },
  {
    id: "HSS102-01",
    name: "과학기술과 현대사회",
    prof: "장하원",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 10, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-G01",
        contact: {
            email: "hahawon@gmail.com",
            phone: "010-3638-2981",
            office: "None",
            office_hours: "None"
        },
        summary: "현대 사회에서 과학과 기술은 우리의 삶에 중요한 영향을 미치고 있기 때문에 이에 대한 이해와 성찰은 필수이다. 이 수업에서는 현대 과학기술의 특징과 영향 등을 다각도로 살펴볼 수 있는 능력을 함양하기 위해, 과학과 기술에 관한 다양한 인문사회학적 접근을 포괄하는 학제적 분야인 과학기술학(Science and Technology Studies) 분야의 주요 이론적 논의를 살펴본다. 또한 이러한 논의들을 바탕으로 과학기술과 연관된 여러 쟁점들에 대해 함께 토론하는 시간을 갖는다.",
        methods: ["Lecture","Presentation","Discussion"],
        materials: "None",
        policies: "본 강의는 대구경북과학기술원(DGIST)에서 과학기술을 학습하고 그 세부적인 기술적 능력을 훈련하고 있는 대학 학부생들을 위해 개설되었다. 다양한 분야의 글을 읽고 이해하는 것에 큰 문제가 없는 학생이라면 어렵지 않게 강의 내용을 파악할 수 있다. 매주 수업은 전반부와 후반부로 나누어진다. 수업 전반부에서는 담당 교수가 해당 주에 다루는 주요 주제와 내용을 설명하는 강의를 진행한다. 수업 후반부에서는 수업에서 다룬 주요 주제에 대한 조별 토론과 간략한 발표를 진행할 예정이다. 이러한 수업 방식을 통해 과학기술학의 주요 주제들을 체계적으로 다루고, 이를 기반으로 수강생들이 과학기술과 관련된 쟁점들을 새로운 시각으로 바라보고 비평하도록 돕는다.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [
    	     "과학기술학 첫걸음: 통상적인 과학기술관 vs. 과학기술학의 질문들",
           "과학지식과 과학자 사회: 토머스 쿤의 유산",
           "과학지식의 사회적 구성: 과학지식사회학의 탄생",
           "실험과 과학적 실행1: 실험실 연구와 행위자-네트워크 이론",
           "실험과 과학적 실행2: <천성적으로 집착적인> 동영상 시청 및 토론",
           "기술의 사회적 구성1: 기술의 사회적 형성론 및 기술시스템 이론",
           "기술의 사회적 구성2: <누가 전기자동차를 죽였는가> 동영상 시청 및 토론",
           "중간시험",
           "과학기술과 젠더: 페미니스트 과학기술학",
           "과학기술과 연구윤리1: 과학자의 학문적, 사회적, 윤리적 책임",
           "과학기술과 연구윤리2: <황우석 신화의 난자 의혹> 시청 및 토론",
           "생명과학기술의 발전과 일상의 변화",
           "정보통신기술의 발전과 논쟁점들",
           "과학기술과 위험: 위험의 불확실성과 규제과학",
           "기말시험"
        ],
        textbook: ["과학학이란 무엇인가	(Yearley, Steven / 2018)","과학기술학의 세계 : 과학기술과 사회를 이해하기	(강윤재 / 2014)"]
    }
  },
  {
    id: "HSS103-01",
    name: "법과 사회",
    prof: "김현희",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 4, start: 9, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G01",
        contact: {
            email: "tufruf@dgist.ac.kr",
            phone: "010-4697-2039",
            office: "None",
            office_hours: "None"
        },
        summary: "본 강좌에서는 뉴스 및 일상생활에서 접하게 되는 다양한 법률 이슈에 관해 살펴보고 기본적인 법률개념을 배우며 법적인 사안의 기초적인 이해와 접근방법을 익힌다.",
        methods: ["Lecture","Team teaching","Presentation","Discussion"],
        materials: "None",
        policies: "수업시간에 핸드폰 사용 금지. 수업 중 법령 관련 내용 검색을 위해 노트북 또는 태블릿PC 지참 필요. 단, 필기 및 검색 등 수업과 관련해서만 사용하여야 함. 조별 리서치활동시 AI 사용금지.",
        grading: [
            { name: "Midterm exam", percent: 35 },
            { name: "Final exam", percent: 35 },
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 20 },
        ],
        schedule: [
    	     "1주차:Introduction",
           "2주차:기본 법령 체계, 법의 일반원칙, 민사와 형사의 구분, 소송절차",
           "3주차:민법의 기초 -권리의 주체, 법률행위",
           "4주차:소멸시효, 권리의 체계",
           "5주차:물권 변동, 부동산 임대차(전)",
           "6주차:부동산 임대차(후), 부동산등기부등본의 검토",
           "7주차:전반부 학습내용 정리",
           "8주차:중간고사",
           "9주차:회사의 설립 및 운영",
           "10주차:형법의 기초",
           "11주차:개인정보보호법",
           "12주차:도로교통과 법",
           "13주차:SNS와 법",
           "14주차:지식재산권법",
           "15주차:후반부 학습내용 정리",
            "16주차:기말고사"
        ],
        textbook: ["None"]
      }
  },
  {
    id: "HSS104a-01",
    name: "소설의 이해",
    prof: "배하은",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-G02",
        contact: {
            email: "haeunbae@dgist.ac.kr",
            phone: "053-785-6645",
            office: "None",
            office_hours: "None"
        },
        summary: "이 강좌에서는 문학의 대표 장르인 소설을 인간의 보편적인 담화 양식인 이야기(story)의 층위에서 탐색한다. 소설 창작과 감상의 기본 원리에 대한 이론적 지식과 실제 방법론을 습득함으로써 이야기에 대한 인간의 본능적인 매혹과 욕망을 이해하고, 나아가 직접 소설을 써 본다. 이번 학기에는 특별히 인간과 AI의 협업을 통한 소설 창작 과정을 경험하게 될 것이다. 이를 통해 우리가 살아가는 세계와 그 세계에 대한 소설적 상상력이 우리의 존재와 사유, 경험, 그리하여 삶을 더욱 풍성하게 만들어 준다는 사실을 실감하는 것이 이 강좌의 궁극적인 목표이다.",
        methods: ["Lecture","Project","Presentation","Discussion"],
        materials: "- 주차별 reading material을 LMS에 업로드하여 제공 - 5주차 수업에서 다룰 다음의 장편소설은 별도로 구매할 것: 아가사 크리스티, 김남주 역, 『애크로이드 살인 사건』, 황금가지, 2013.",
        policies: "* 기말고사는 시행하지 않으며 프로젝트 결과물로 대체한다. - office hour를 이용하여 수업 및 과제에 대한 개별 상담을 받을 수 있다. - 과제물은 기한 내에 제출해야 하며, 기한을 넘긴 과제물은 감점을 받는다. - 과제물 제출은 LMS 과제함 제출을 원칙으로 하며, 제출 여부를 반드시 확인하여 불이익이 없도록 한다.",
        grading: [
            { name: "Midterm exam", percent: 25 },
            { name: "Term Project", percent: 25 },
            { name: "Homework", percent: 35 },
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 5 },
        ],
        schedule: [
    	     "1주차:강의 안내 / 이야기의 기원과 역사",
           "2주차:이야기의 양식과 갈래",
           "3주차:이야기의 요소와 패턴(1)",
           "4주차:이야기의 요소와 패턴(2)",
           "5주차:이야기를 서술하기",
           "6주차:캐릭터와 플롯(1)",
           "7주차:캐릭터와 플롯(2)",
           "8주차:중간고사",
           "9주차:주제와 형식(1) - 단편소설의 미학",
           "10주차:주제와 형식(2) - 단편소설 쓰기의 실제",
           "11주차:주제와 형식(3) - 단편소설의 테크네",
           "12주차:각색과 전유 / 스토리텔링과 테크놀로지",
           "13주차:스토리텔링 프로젝트(1) - 협업적 스토리텔링의 이해",
           "14주차:스토리텔링 프로젝트(2) - 인간과 AI 공동 창작의 기획과 실제",
           "15주차:스토리텔링 프로젝트(3) - 프로젝트 중간 보고",
            "16주차:기말고사"
        ],
        textbook: ["애크로이드가의 살인 사건	(Agatha Christie / 2013)"]
      }
  },
  {
    id: "HSS106-01",
    name: "비교정치학",
    prof: "윤지성",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 1, start: 16, duration: 1.5 }, { day: 3, start: 16, duration: 1.5 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-G02",
        contact: {
            email: "jsyoon@dgist.ac.kr",
            phone: "053-785-6694",
            office: "E7-215",
            office_hours: "by email appointment"
        },
        summary: "본 수업은 정치학 분과의 가장 비중 있는 세부전공인 비교정치에 관한 학습을 주된 내용으로 삼아 진행한다. 비교정치학에 대한 소개, 각국의 헌법, 국가형태, 정치체제, 근대화와 민주화, 정부 형태, 행정부와 관료제, 의회, 사법부, 정당체제, 선거제도, 이익집단, 정치문화, 정치참여 등 다양한 비교정치의 주제들을 개념적이고 이론적인 차원에서 다루는 한편, 경험적인 사례들을 함께 소개함으로써 학생들로 하여금 정치가 과연 무엇인지에 관해 사고하고 판단하는 능력을 함양토록 하는 것을 그 목적으로 삼는다.",
        methods: ["Lecture, Experiment"],
        materials: "현재의 수업계획은 수정될 수 있으며, 완성된 강의계획서는 수업 첫시간에 배부할 예정입니다.",
        policies: "All electronic devices are allowed in class. Attendance check will be done through in-class quizzes.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Paper Presentation", percent: 40 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "강의소개",
            "민주주의와 권위주의 체계",
            "근대화와 민주화",
            "정치참여와 정치문화",
            "선거",
            "정당",
            "의회",
            "중간고사",
            "행정부와 관료제",
            "사법부",
            "헌법과 정부의 설계",
            "대통령제",
            "내각제",
            "이원정부제",
            "TBA",
            "기말고사 기간",
        ],
        textbook: ["정치학개론 : 권력과 선택	(Shively, W. Phillips / 2019)", "국가는 어떻게 통치되는가 : 대통령제, 내각제, 이원정부제	(강원택 / 2022)", "민주주의, 할 수 없는 것과 할 수 있는 것	(Przeworski, Adam / 2024)"]
    }
  },
  {
    id: "HSS107-01",
    name: "언어학 입문",
    prof: "이정아",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 4, start: 9, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-L30",
        contact: {
            email: "jalee@dgist.ac.kr",
            phone: "053-785-6623",
            office: "E7-216",
            office_hours: "Upon Appointment"
        },
        summary: "<언어학입문>은 언어학을 이루는 주요 관점 및 이론과 연구 방법을 포괄적으로 다룸으로써 언어학에 대한 전반적인 이해를 돕는 것을 목적으로 한다. 언어학의 다양한 분야를 탐구하면서 인간 언어의 특성을 이해하기 위해, 본 교과목은 인간 언어의 핵심적 요소를 탐구하는 언어학에 대한 전반적인 소개와 더불어, 인지적, 사회적, 문화적 측면에서 언어가 어떻게 이해되고 연구되는지를 개괄한다. 디지스트의 특성을 고려하여 언어와 뇌, 대규모 언어모델LLM 등의 응용언어학 분야 역시 다룬다.",
        methods: ["Lecture, Project, Presentation, Discussion, Peer teaching"],
        materials: "주교재 첫 수업 시간에 준비할 것   김진우. (2017). 언어: 그 이론과 응용. (3판). 한국문화사.  https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=115643607 ",
        policies: "장애학생 지원: 장애가 있어서 특별한 도움이 필요한 학생의 경우 반드시 교수자와 상의하여 적절한 대안책을 마련하도록 함.     출결 및 수업활동 참여: 모든 학생은 매 수업에 참여하여 수업활동에 적극적으로 참여하도록 함.   - 결석 4회 이상 U grade; 결석 2회부터 1회당 -2점; 지각 3회 = 결석 1회    - 수업 시간 토론 및 활동에 대한 적극적인 참여  - 지각은 수업 시작 후 30분 이내에 입실한 경우만 해당  - 진료확인서 제출은 1회만 허용(장기치료 및 기타 사항은 개별 문의)",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Paper Presentation", percent: 40 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "수업소개 - 언어란?- 언어학의 과제",
            "동물의 언어, 언어의 기원",
            "언어의 소리(음성학)",
            "추석연휴 - 수업 없음",
            "형태론",
            "통사론 I",
            "통사론 II",
            "중간시험 - 지필시험 ",
            "의미론",
            "언어와 심리(심리/인지언어학)",
            "언어와 두뇌(신경언어학)",
            "언어와 사회(사회언어학)",
            "언어와 컴퓨터(전산언어학) 1",
            "언어와 컴퓨터(전산언어학) 2",
            "기말페이퍼 내용 나누기*기말페이퍼 제출",
            "기말시험기간- 수업없음",
        ],
        textbook: ["언어: 이론과 그 응용 (3판) (김진우 / 2017)"]
    }
  },
  {
    id: "HSS108-01",
    name: "비교역사학",
    prof: "문준영",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 10, duration: 3 }],
    syllabus: {
        capacity: "34",
        classroom: "E7-L31",
        contact: {
            email: "s.deluna@hufs.ac.kr",
            phone: "010-5316-2452",
            office: "E7-L18",
            office_hours: "수웝 후"
        },
        summary: "이 강좌는 서양 역사의 중요한 사건이나 주제들을 선정하여 이와 관련한 특정 국가들의 사례와 경험을 비교, 학습하고 토론한다.",
        methods: ["Lecture, Discussion"],
        materials: "교재 없음",
        policies: "출결 , 토론 참여도 중요.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 40 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 20 },
        ],
        schedule: [
            "강의 소개 및 조 편성",
            "대체 공휴일(3.1절)",
            "근대 국가 형성과 중앙집권화의 양상: 영국, 프랑스, 프로이센",
            "조별 토론",
            "식민 제국주의의 두 양상: 18세기 신대륙과 19세기 아프리카, 인도",
            "조별 토론",
            "19세기 민족 통일과 민족 국가 만들기: 이탈리아와 독일",
            "중간시험: 조별 토론으로 대체(2주차 보강: 조별 토론)",
            "전체주의 국가의 등장: 파시즘과 나치즘",
            "조별 토론",
            "동서독 통일과 한반도 남북 관계",
            "조별 토론",
            "조선과 이탈리아의 상속제도",
            "대체 공휴일(부처님 오신 날)",
            "기말시험"
        ],
        textbook: "None"
    }
  },
  {
    id: "HSS109a-01",
    name: "학술 글쓰기",
    prof: "배하은",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "29",
        classroom: "E7-G02",
        contact: {
            email: "haeunbae@dgist.ac.kr",
            phone: "053-785-6645",
            office: "None",
            office_hours: "None"
        },
        summary: "이 강좌에서는 대학에서의 학술 활동에 필요한 논리적·비판적 글쓰기와 사고 능력을 기른다. 학술 글쓰기를 위한 기초적인 정서법과 문단 구성에서부터 주제 구상과 설계 및 내용 조직, 집필에 이르는 글쓰기의 구체적인 방법을 단계별로 학습하고 직접 글로 쓰는 과정을 거친다. 이와 함께 다양한 텍스트를 섭렵하고, 발표, 토론 및 상호 논평(peer review) 활동을 종합적으로 수행한다.",
        methods: ["Lecture, Presentation, Discussion"],
        materials: "김명운 외, 『대학 글쓰기1』, 서울대학교출판문화원, 2019.",
        policies: "- 중간고사는 01, 02, 03, 04, 05분반 공통 논술형 지필 고사로 시행하며, 기말고사는 팀 프로젝트 결과물로 대체한다.- 팀 프로젝트 수업 중 토론과 상호 논평(peer review)이 진행되며, 이를 수업 참여도 성적에 반영한다.- office hour를 이용하여 수업 및 과제에 대한 개별 상담을 받을 수 있다. - 과제물은 기한 내에 제출해야 하며, 기한을 넘긴 과제물은 감점을 받는다. - 과제물 제출은 LMS 과제함 제출을 원칙으로 하며, 제출 여부를 반드시 확인하여 불이익이 없도록 한다.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "1주차:강의 안내 / 과학도와 글쓰기",
            "2주차:정확한 문장 쓰기",
            "3주차:효과적인 문단 구성",
            "4주차:글쓰기의 방법(1): 설명",
            "5주차:글쓰기의 방법(1): 논증",
            "6주차:글쓰기의 방법(2): 주제 설정과 개요 작성",
            "7주차:글쓰기의 윤리",
            "8주차:중간고사",
            "9주차:연구 주제 탐구와 설계(1)",
            "10주차:연구 주제 탐구와 설계(2)",
            "11주차:감솽과 비평(1)",
            "12주차:감상과 비평(2)",
            "13주차:팀 프로젝트(1): 연구 계획서 발표 및 토론",
            "14주차:팀 프로젝트(2): 연구 계획서 발표 및 토론",
            "15주차:팀 프로젝트(3): 연구 계획서 발표 및 토론",
            "16주차:기말고사"
        ],
        textbook: "대학 글쓰기1 (김명운 / 2019)"
    }
  },
  {
    id: "HSS109a-02",
    name: "학술 글쓰기",
    prof: "임희현",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 3, start: 10, duration: 3 }],
    syllabus: {
        capacity: "29",
        classroom: "E7-G02",
        contact: {
            email: "heehyun@dgist.ac.kr",
            phone: "None",
            office: "None",
            office_hours: "None"
        },
        summary: "이 강좌에서는 대학에서의 학술 활동에 필요한 논리적·비판적 글쓰기와 사고 능력을 기른다. 학술 글쓰기를 위한 기초적인 정서법과 문단 구성에서부터 주제 구상과 설계 및 내용 조직, 집필에 이르는 글쓰기의 구체적인 방법을 단계별로 학습하고 직접 글로 쓰는 과정을 거친다. 이와 함께 다양한 텍스트를 섭렵하고, 발표, 토론 및 상호 논평(peer review) 활동을 종합적으로 수행한다.",
        methods: ["Lecture, Presentation, Discussion"],
        materials: "None",
        policies: "■ 수업 및 과제에 대한 첨삭과 개별 상담을 받을 수 있다. ■ 과제물은 기한 내에 제출해야 하며, 기한을 넘긴 과제물은 감점을 받는다. ■ 모든 과제물 작성 시 인용법, 주석과 참고 문헌 형식을 정확히 지켜야 하며, 연구 및 글쓰기 윤리를 준수하도록 한다.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "1주차: Introduction",
            "2주차: 정확한 문장 쓰기",
            "3주차: 효과적인 문단 구성",
            "4주차: 글쓰기의 방법(1)",
            "5주차: 글쓰기의 방법(2)",
            "6주차: 주제 구상과 개요 작성",
            "7주차: 글쓰기의 윤리",
            "8주차: 중간고사",
            "9주차: 감상에서 비평으로(1)",
            "10주차: 감상에서 비평으로(2)",
            "11주차: 연구 주제의 구상과 설계",
            "12주차: 연구 계획서 작성",
            "13주차: 팀 프로젝트(1)",
            "14주차: 팀 프로젝트(2)",
            "15주차: 팀 프로젝트(3)",
            "16주차: 기말고사",
        ],
        textbook: "대학 글쓰기1 (서울대학교 대학글쓰기1 교재편찬위원회 편 / 2019)"
    }
  },
  {
    id: "HSS109a-03",
    name: "학술 글쓰기",
    prof: "임희현",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 3, start: 14.5, duration: 3 }],
    syllabus: {
        capacity: "29",
        classroom: "E7-224",
        contact: {
            email: "heehyun@dgist.ac.kr",
            phone: "None",
            office: "None",
            office_hours: "None"
        },
        summary: "이 강좌에서는 대학에서의 학술 활동에 필요한 논리적·비판적 글쓰기와 사고 능력을 기른다. 학술 글쓰기를 위한 기초적인 정서법과 문단 구성에서부터 주제 구상과 설계 및 내용 조직, 집필에 이르는 글쓰기의 구체적인 방법을 단계별로 학습하고 직접 글로 쓰는 과정을 거친다. 이와 함께 다양한 텍스트를 섭렵하고, 발표, 토론 및 상호 논평(peer review) 활동을 종합적으로 수행한다.",
        methods: ["Lecture, Presentation, Discussion"],
        materials: "None",
        policies: "■ 수업 및 과제에 대한 첨삭과 개별 상담을 받을 수 있다. ■ 과제물은 기한 내에 제출해야 하며, 기한을 넘긴 과제물은 감점을 받는다. ■ 모든 과제물 작성 시 인용법, 주석과 참고 문헌 형식을 정확히 지켜야 하며, 연구 및 글쓰기 윤리를 준수하도록 한다.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "1주차: Introduction",
            "2주차: 정확한 문장 쓰기",
            "3주차: 효과적인 문단 구성",
            "4주차: 글쓰기의 방법(1)",
            "5주차: 글쓰기의 방법(2)",
            "6주차: 주제 구상과 개요 작성",
            "7주차: 글쓰기의 윤리",
            "8주차: 중간고사",
            "9주차: 감상에서 비평으로(1)",
            "10주차: 감상에서 비평으로(2)",
            "11주차: 연구 주제의 구상과 설계",
            "12주차: 연구 계획서 작성",
            "13주차: 팀 프로젝트(1)",
            "14주차: 팀 프로젝트(2)",
            "15주차: 팀 프로젝트(3)",
            "16주차: 기말고사",
        ],
        textbook: "대학 글쓰기1 (서울대학교 대학글쓰기1 교재편찬위원회 편 / 2019)"
    }
  },
  {
    id: "HSS109a-04",
    name: "학술 글쓰기",
    prof: "전계성",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 15, duration: 3 }],
    syllabus: {
        capacity: "29",
        classroom: "E7-224",
        contact: {
            email: "jjkksss@naver.com",
            phone: "010-2740-2500",
            office: "None",
            office_hours: "None"
        },
        summary: "이 강좌에서는 대학에서의 학술 활동에 필요한 논리적·비판적 글쓰기와 사고 능력을 기른다. 학술 글쓰기를 위한 기초적인 정서법과 문단 구성에서부터 주제 구상과 설계 및 내용 조직, 집필에 이르는 글쓰기의 구체적인 방법을 단계별로 학습하고 직접 글로 쓰는 과정을 거친다. 이와 함께 다양한 텍스트를 섭렵하고, 발표, 토론 및 상호 논평(peer review) 활동을 종합적으로 수행한다.",
        methods: ["Lecture, Presentation, Discussion"],
        materials: "노트북 컴퓨터 등 문서작업 및 LMS 업로드가 가능한 기기",
        policies: "■ 수업 및 과제에 대한 첨삭과 개별 상담을 받을 수 있다. ■ 과제물은 기한 내에 제출해야 하며, 기한을 넘긴 과제물은 감점을 받는다. ■ 모든 과제물 작성 시 인용법, 주석과 참고 문헌 형식을 정확히 지켜야 하며, 연구 및 글쓰기 윤리를 준수하도록 한다.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "1주차: Introduction",
            "2주차: 정확한 문장 쓰기",
            "3주차: 효과적인 문단 구성",
            "4주차: 글쓰기의 방법(1)",
            "5주차: 글쓰기의 방법(2)",
            "6주차: 주제 구상과 개요 작성",
            "7주차: 글쓰기의 윤리",
            "8주차: 중간고사",
            "9주차: 감상에서 비평으로(1)",
            "10주차: 감상에서 비평으로(2)",
            "11주차: 연구 주제의 구상과 설계",
            "12주차: 연구 계획서 작성",
            "13주차: 팀 프로젝트(1)",
            "14주차: 팀 프로젝트(2)",
            "15주차: 팀 프로젝트(3)",
            "16주차: 기말고사",
        ],
        textbook: "대학 글쓰기1 (서울대학교 대학글쓰기1 교재편찬위원회 편 / 2019)"
    }
  },
  {
    id: "HSS109a-05",
    name: "학술 글쓰기",
    prof: "전계성",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 4, start: 9, duration: 3 }],
    syllabus: {
        capacity: "29",
        classroom: "E7-224",
        contact: {
            email: "jjkksss@naver.com",
            phone: "010-2740-2500",
            office: "None",
            office_hours: "None"
        },
        summary: "이 강좌에서는 대학에서의 학술 활동에 필요한 논리적·비판적 글쓰기와 사고 능력을 기른다. 학술 글쓰기를 위한 기초적인 정서법과 문단 구성에서부터 주제 구상과 설계 및 내용 조직, 집필에 이르는 글쓰기의 구체적인 방법을 단계별로 학습하고 직접 글로 쓰는 과정을 거친다. 이와 함께 다양한 텍스트를 섭렵하고, 발표, 토론 및 상호 논평(peer review) 활동을 종합적으로 수행한다.",
        methods: ["Lecture, Presentation, Discussion"],
        materials: "노트북 컴퓨터 등 문서작업 및 LMS 업로드가 가능한 기기",
        policies: "■ 수업 및 과제에 대한 첨삭과 개별 상담을 받을 수 있다. ■ 과제물은 기한 내에 제출해야 하며, 기한을 넘긴 과제물은 감점을 받는다. ■ 모든 과제물 작성 시 인용법, 주석과 참고 문헌 형식을 정확히 지켜야 하며, 연구 및 글쓰기 윤리를 준수하도록 한다.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "1주차: Introduction",
            "2주차: 정확한 문장 쓰기",
            "3주차: 효과적인 문단 구성",
            "4주차: 글쓰기의 방법(1)",
            "5주차: 글쓰기의 방법(2)",
            "6주차: 주제 구상과 개요 작성",
            "7주차: 글쓰기의 윤리",
            "8주차: 중간고사",
            "9주차: 감상에서 비평으로(1)",
            "10주차: 감상에서 비평으로(2)",
            "11주차: 연구 주제의 구상과 설계",
            "12주차: 연구 계획서 작성",
            "13주차: 팀 프로젝트(1)",
            "14주차: 팀 프로젝트(2)",
            "15주차: 팀 프로젝트(3)",
            "16주차: 기말고사",
        ],
        textbook: "대학 글쓰기1 (서울대학교 대학글쓰기1 교재편찬위원회 편 / 2019)"
    }
  },
  {
    id: "HSS112-01",
    name: "사회학의 이해",
    prof: "최태섭",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 3, start: 9, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G03",
        contact: {
            email: "choi-ts@dgist.ac.kr",
            phone: "010-4274-0108",
            office: "None",
            office_hours: "None"
        },
        summary: "사회학에 대한 기초적인 지식을 습득하고, 사회학의 대표적인 주제들을 살펴본다.",
        methods: ["Lecture, Presentation, Discussion"],
        materials: "주교재",
        policies: "학습 보조를 목적으로 하는 IT기기 사용 가능. 사고력을 기르는 것이 수업의 중요한 목표이므로 생성형 AI활용은 제한된 범위 안에서 투명하게만 사용 가능. 출석은 규정에 따라서 처리.",
        grading: [
            { name: "Final exam", percent: 40 },
            { name: "Paper Presentation", percent: 40 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "1주차:수업 및 강사 소개. 사회학에 대한 간략한 소개.",
            "2주차:고전사회학의 등장과 발전, 한국 사회학 ",
            "3주차:사회구조와 사회변동",
            "4주차:사회화와 상호작용",
            "5주차:사회집단과 사회조직",
            "6주차:대중문화와 일상 생활",
            "7주차:젠더와 섹슈얼리티",
            "8주차:중간고사",
            "9주차:자본주의의 구조와 역사",
            "10주차:일과 노동세계",
            "11주차:사회불평등과 계급·계층",
            "12주차:국가, 시민사회, 민주주의",
            "13주차:세계화와 정체성",
            "14주차:과학기술, 위험, 환경",
            "15주차:과제발표",
            "16주차:기말고사",
        ],
        textbook: "사회학: 비판적 시선 (정태석, 지주형 / 2023)"
    }
  },
  {
    id: "HSS114-01",
    name: "지리학 입문",
    prof: "Shen Shawn",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 18, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G01",
        contact: {
            email: "shawnshen@dgist.ac.kr",
            phone: "053-785-6699",
            office: "E7-L14",
            office_hours: "By Appointment"
        },
        summary: "Geography, as an interdisciplinary field bridging human and natural sciences, delves into the intricate relationships between people, the environment, and spatial arrangements. Geographers inquire into how the location of events influences their nature and causes on a global scale. This course aims to foster an appreciation of how societies structure their geographical surroundings and the emergence of distinct patterns in cultural and ecological landscapes. Through this introductory exploration, students will analyze the dynamic processes shaping spatial configurations worldwide, cultivating a spatial perspective essential for navigating complex challenges in our social and physical environments.",
        methods: ["Lecture, Project, Presentation, Discussion"],
        materials: "None",
        policies: "The use of mobile phones, internet for personal purposes, gaming, or studying for other subjects is prohibited during class. Students who accumulate more than four absences may receive a failing grade (F) for this course.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 40 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "Course Overview and Background",
            "Introduction to Human Geography: Defining Geographyc",
            "Essential Geographical Concepts and Theories",
            "Exploring Our World from Local Communities",
            "Economic, Political, and Cultural Dimensions of Globalization",
            "Political Geography: Borders and Nation-States",
            "Geopolitics and International Relations: Conflict and Territory",
            "Midterm Examination",
            "Population Geography: Overpopulation and Aging Societies",
            "Global Migrations: Mobility and Global Citizenship",
            "Human Activities and Environmental Impacts",
            "Cultural and Social Geography: Diversity in Landscapes",
            "Economic Geography: Global Production and Trade",
            "Urban Geography: Prospects for Future Global Cities",
            "Catch-Up Week and Semester Review",
            "Final Examination",
        ],
        textbook: "Human Geography: Places and Regions in Global Context, 5th Canadian Edition.	(Knox, P. L., Marsden, S. A., and Nash, A. / 2019)"
    }
  },
  {
    id: "HSS115-01",
    name: "심리학으로의 여행",
    prof: "곽금주",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 1, start: 11, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L30",
        contact: {
            email: "kjkwak@snu.ac.kr",
            phone: "053-785-6609",
            office: "None",
            office_hours: "None"
        },
        summary: "인간의 마음과 행동을 연구하는 심리학의 기초가 되는 입문 과정으로 심리학의 여러 세부 분야들에 대해 알아보는 과목임.",
        methods: ["Lecture"],
        materials: "None",
        policies: "매주 출석 체크",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 50 },
            { name: "Attendance", percent: 20 },
        ],
        schedule: [
            "1주차:강의소개",
            "2주차:심리학이란 무엇인가",
            "3주차:감각 및 지각 심리",
            "4주차: 학습심리",
            "5주차: 발달심리",
            "6주차:기억심리",
            "7주차:성격심리",
            "8주차:중간 (주제선정 및 요약)",
            "9주차:인지심리",
            "10주차:동기와 정서",
            "11주차:스트레스",
            "12주차:사회심리 1",
            "13주차:사회심리 2",
            "14주차:이상심리 1",
            "15주차:이상심리 2",
            "16주차:기말고사",
        ],
        textbook: "Human Geography: Places and Regions in Global Context, 5th Canadian Edition.	(Knox, P. L., Marsden, S. A., and Nash, A. / 2019)"
    }
  },
  {
    id: "HSS116-01",
    name: "인류학의 이해",
    prof: "이정덕",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 1, start: 15, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G03",
        contact: {
            email: "jdyi8589@dgist.ac.kr",
            phone: "053-785-6616",
            office: "E7-G09",
            office_hours: "화 14:00-14:50"
        },
        summary: "전반기에는 우주형성에서 현생인류와 문명까지 어떻게 진화/형성되었는가의 거대과정을 살펴보고, 중간고사 이후에는 인류의 사회문화체계가 각 분야별로 구체적으로 어떻게 형성되어 발전되었으며 어떻게 작동하는지를 이해하고자 한다. 이를 통하여 자신이 인류사와 인류문화의 어느 맥락에서 존재하며 어떠한 사회문화적 맥락에서 생각하고 살아가는지를 이해하여 자신과 자신을 둘러싼 사회문화환경을 시대적 맥락에서 이해함으로써 세상을 더 잘 이해하고 더 잘 헤쳐나갈 수 있도록 한다.",
        methods: ["Lecture", "Presentation", "Discussion", "동영상시청"],
        materials: "None",
        policies: "학습내용을 최대한 자신에게 적용하여 자신의 사고와 행동의 맥락을 스스로 성찰할 수 있도록 노력한다. 수업시간에 핸드폰이나 노트북 등의 사용을 자제한다.",
        grading: [
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 },
            { name: "Class Participation", percent: 10 },
            { name: "Paper Presentation", percent: 10 },
        ],
        schedule: [
            "1주차:수업안내-인류와 문화의 이해(교재 2의 1, 2장 등)",
            "2주차:우주, 태양계, 지구의 출현과 진화(교재 1의 1, 2장)",
            "3주차:지구에서의 생명체와 인류의 출현과 진화(교재 1의 3, 4장)",
            "4주차:농경과 국가의 출현(교재 1의 5, 6장)",
            "5주차:농경문명의 발전(교재 1의 7, 8장)",
            "6주차:세계의 통합과 산업혁명(교재 1의 10, 11장)",
            "7주차:현대산업사회 그리고 디지털과 AI로봇(교재 1의 12, 13장)",
            "8주차:중간고사 대체 보고서",
            "9주차:경제체제(교재 2의 3장)",
            "10주차:인간의 재생산과 친족(교재 2의 4, 6장)",
            "11주차:사회집단과 사회계층(교재 2의 7장)",
            "12주차:권력과 사회질서(교재 2의 8장)",
            "13주차:언어와 커뮤니케이션과 표현문화(교재 2의 9장, 11장)",
            "14주차:초자연적 상상과 종교(교재 2의 10장)",
            "15주차:지구촌의 이민과 발전(교재 2의 12, 13장)",
            "16주차:기말고사 대체 기말보고서",
        ],
        textbook: ["글로벌시대의 문화인류학	(밀러 / 2019)", "빅 히스토리 - 우주와 지구, 인간을 하나로 잇는 새로운 역사	(크리스천 / 2022)"]
    }
  },
  {
    id: "HSS117-01",
    name: "인간과 종교",
    prof: "박범석",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 3, start: 9, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L30",
        contact: {
            email: "vinetar@dgist.ac.kr",
            phone: "053-785-5211",
            office: "None",
            office_hours: "목 18:00-19:00"
        },
        summary: "인류 문명의 종교적 가치를 이해하기 위해 신화, 의례, 상징 등의 종교학적 성취를 살펴보고 종교 논쟁의 사례를 파악하여 사상적 핵심을 통찰할 수 있다.",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "해당 진도의 교과서 및 강의자료 예습하고 수업에 참여",
        policies: "■ 출석, 과제, 참여도 등의 전반적인 활동을 종합하여 평가한다.   ■ 조별 독서⋅탐구 활동 과정을 진행하며 그 결과를 발표하고 공유한다.",
        grading: [
            { name: "Midterm exam", percent: 20 },
            { name: "Final exam", percent: 30 },
            { name: "Homework", percent: 30 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "오리엔테이션",
            "종교와 종교학",
            "종교와 상징",
            "종교와 문화",
            "종교와 차별",
            "무위와 유위",
            "본성과 감정",
            "중간고사",
            "이해와 체험",
            "깨침과 닦음",
            "절대와 상대",
            "초월과 내재",
            "경험과 합리",
            "이성과 신앙",
            "기말고사",
        ],
        textbook: ["종교학의 이해	(	유요한 / 2020)"]
    }
  },
  {
    id: "HSS118-01",
    name: "미래소양강좌",
    prof: "최한경",
    credit: 1,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 4, start: 13, duration: 1 }]
  },
  {
    id: "HSS119-01",
    name: "진로탐색 및 전공설계I",
    prof: "최한경",
    credit: 1,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 2, start: 13, duration: 1 }]
  },
  {
    id: "HSS121-01",
    name: "Introduction to Traditional Korean Culture",
    prof: "배하은",
    credit: 2,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 2 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L22",
        contact: {
            email: "haeunbae@dgist.ac.kr",
            phone: "053-785-6645",
            office: "None",
            office_hours: "None"
        },
        summary: "This course is designed to give international students a taste of the various and diverse aspects of traditional Korean culture, including the history and language of Korea, its religions and philosophies, its art and architecture, its music and performing arts, and its literature and folklore. Given the broad scope of the course, it will naturally not be possible to dive too deeply into any single subject, but the course aims to provide a foundational understanding of Korea and inspire students to further explore its cultural heritage.",
        methods: ["Flipped-learning", "Discussion"],
        materials: "주교재",
        policies: "Course Participation: Students are required to complete an online lecture before attending the weekly in-class discussion session. Active participation in discussions is expected.  Assignment Submission: Late submissions will result in a grade reduction. The specific penalty will be outlined in the assignment guidelines.",
        grading: [
            { name: "Midterm exam", percent: 20 },
            { name: "Final exam", percent: 30 },
            { name: "Homework", percent: 30 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "1주차:Introduction",
            "2주차:Korean History – From Prehistoric Times to the Colonial Period (A Brief Overview)",
            "3주차:Korean Language – Korean as it is Spoken, Written, and Lived",
            "4주차:Korean Language – Korean as it is Spoken, Written, and Lived",
            "5주차:Korean Religion – From Native Beliefs to Foreign Creeds",
            "6주차:Korean Religion – From Native Beliefs to Foreign Creeds",
            "7주차:Korean Philosophy – The Development and Importance of Confucianism",
            "8주차:Midterm Exam",
            "9주차:Korean Architecture – Harmony in Form and Function / Korean Traditional Fine Arts – Visual Expression of the Creative Spirit",
            "10주차:Field trip",
            "11주차:Korean Traditional Music – Melodies from the Past Still Played Today",
            "12주차:Korean Traditional Performing Arts – Bringing Excitement to the Stage",
            "13주차:Korean Folklore and Mythology – A Wellspring of Culture",
            "14주차:Korean Classical Literature – A Long Tradition of Letters",
            "15주차:Korean Classical Literature – A Long Tradition of Letters",
            "16주차:Final Exam"
        ],
        textbook: ["Charles La Shure, The Roots of Korean Culture (서울대학교 한국어문학연구소 K학술확산연구센터 / 2021)"]
    }
  },
  {
    id: "HSS122-01",
    name: "Introduction to Philosophy",
    prof: "김병재",
    credit: 2,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 10.5, duration: 2 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G03",
        contact: {
            email: "byoungjae.kim@dgist.ac.kr",
            phone: "053-785-6626",
            office: "E7-217",
            office_hours: "None"
        },
        summary: "This course will introduce you to some of the main areas of research in contemporary philosophy. Each module a different philosopher will talk you through some of the most important questions and issues in their area of expertise. We’ll begin by trying to understand what philosophy is – what are its characteristic aims and methods, and how does it differ from other subjects? Then we’ll spend the rest of the course gaining an introductory overview of several different areas of philosophy.",
        methods: ["Flipped-learning", "Discussion"],
        materials: "None",
        policies: "The course is divided into two parts: online lecture sessions and discussion sessions. Course Participation: Students must complete an online lecture before attending the weekly in-class discussion session. Active participation in discussions is expected. Assignment Submission: Late submissions will incur a grade reduction. The specific penalty will be outlined in the assignment guidelines. Posting Questions (1) Students should complete the assigned reading and post three questions in the LMS 'Questions and Answers' section before attending the weekly in-class discussion session. (2) Two things to note: (a) Post your questions before class time; and (b) Questions should relate to the text (please indicate which page the questions refer to). (3) Questions posted after attending the weekly in-class discussion session or deemed unrelated to the text will not be counted.",
        grading: [
            { name: "Midterm exam", percent: 15 },
            { name: "Final exam", percent: 15 },
            { name: "Homework", percent: 20 },
            { name: "Quiz", percent: 20 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: ["Philosophy for Everyone	(Matthew Chrisman / 2016)"]
    }
  },
  {
    id: "HSS201-01",
    name: "과학기술사의 주요 장면",
    prof: "장하원",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 14, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-G01",
        contact: {
            email: "hahawon@gmail.com",
            phone: "010-3638-2981",
            office: "None",
            office_hours: "None"
        },
        summary: "21세기는 과학기술의 시대이다. 이제는 과학기술이 없는 삶을 상상할 수 없으며, 과학기술의 특징과 그 사회적 함의를 이해하는 것은 시민으로서 갖추어야 할 필수 자질이라고 할 수 있다. 현재 우리의 삶에 영향을 미치는 다양한 과학기술의 기원, 의미, 역할, 한계 등을 이해하기 위해서는 먼저 그것이 발전해 온 역사를 살펴볼 필요가 있다. 본 수업에서는 고대, 중세, 과학 혁명기를 거쳐 근대과학과 현대과학에 이르기까지 과학사의 긴 여정을 개괄적으로 살펴봄으로써, 과학기술이 어떤 과정을 통해 인류 문명에서 핵심적인 지위를 차지하게 되었는지를 이해할 것이다.",
        methods: ["Lecture","Presentation", "Discussion"],
        materials: "본 수업의 목적은 과학기술의 발전 과정에 대한 이해에 기반하여 수강생들로 하여금 현대 과학기술의 특징과 사회적 함의를 비판적으로 성찰할 수 있게끔 만드는 것이며, 이를 효율적으로 달성하기 위한 과제들이 마련되어 있다. (1) 강의 내용에 대한 이해를 평가하기 위해 중간시험, 기말시험을 실시한다. 간단한 서술식 문항들에 대해 정해진 시간 안에 스스로 답안지를 작성하여 제출. (2) 수강생들은 학기 중 과학사 및 관련 인접 분야(과학학 전반)의 책을 1권 골라 읽고 수업 시간에 발표하고, 학기말에 서평으로 정리하여 제출한다. 원고지30매(6000자) 이상 분량으로 작성, 책 선정 방식 및 서평 제출일자는 수업 시간에 설명할 예정. (3) 수강생들은 몇몇 주차에 수업 시간 내 이루어지는 조별 토론에 참여하며, 토론 결과를 간략히 정리하여 발표하여야 한다.",
        policies: "None",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "과학사 첫걸음: ‘과학혁명’과 과학사 서술",
            "‘혁명’ 이전의 과학(1): 고대 그리스의 과학",
            "‘혁명’ 이전의 과학(2): 로마와 중세의 과학",
            "천문학의 혁명: 코페르니쿠스에서 갈릴레오까지",
            "새로운 과학방법론의 제시: 베이컨과 데카르트",
            "과학혁명의 완성: 뉴턴의 자연철학",
            "과학혁명 이후: 계몽주의와 과학의 전문직업화",
            "중간시험",
            "지연된 혁명?: 화학혁명과 물질에 대한 새로운 이해",
            "과학과 기술: 산업혁명과 과학기술",
            "과학과 이데올로기: 진화론에서 우생학까지",
            "과학과 전쟁: 전쟁이 낳은 과학기술들",
            "과학과 위험: 과학기술의 불확실성과 위험 커뮤니케이션",
            "현대사회 속의 과학: 다양한 연구개발의 양상들",
            "기말시험"
        ],
        textbook: ["과학사의 이해  Understanding the history of science	(임경순 / 2014)","(한 권으로 보는) 인물 과학사 : 코페르니쿠스에서 왓슨까지  History of science	(송성수 / 2015)","모든 이의 과학사 강의 : 역사와 문화로 이해하는 과학 인문학 (정인경 / 2020)","야누스의 과학 : 20세기 과학기술의 사회사	(김명진 / 2008)"]
    }
  },
  {
    id: "HSS202-01",
    name: "과학철학의 쟁점",
    prof: "강유진",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 2, start: 13, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-G03",
        contact: {
            email: "eugene@pusan.ac.kr",
            phone: "010-3392-0536",
            office: "None",
            office_hours: "None"
        },
        summary: "과학과 과학적 방법이 무엇인지 이해하고, 과학의 가치를 숙고하며, 과학과 사회가 어떻게 상호 영향을 주는지 살펴본다. 이러한 질문에 대해 과학철학자들이 제시한 답변을 살펴보고, 학생 스스로가 생각하는 답변을 논의할 것이다. 이를 통해서 ‘내가 경험한’ 과학을 되돌아 보고, 향후 과학자로서의 정체성과 윤리에 대해서 생각할 기회를 가지게 될 것이다.",
        methods: ["Lecture","Presentation", "Discussion"],
        materials: "없음",
        policies: "출결과 수업중 참여 중요함",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Homework", percent: 30 },
            { name: "Paper Presentation", percent: 30 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "1주차:오리엔테이션",
            "2주차:과학이란 무엇인가",
            "3주차:현미경으로 보는 것도 보는 것인가- 과학적 실재론",
            "4주차:반증할 수 없는 이론은 과학이 아니다- 포퍼의 반증주의과학과 사이비과학은 구별되는가- 구획문제",
            "5주차:패러다임은 시험받지 않는다- 쿤의 패러다임과 정상과학",
            "6주차:과학지식은 누적되지 않는다- 쿤의 과학혁명과 공약불가능성- 라카토스의 연구프로그램",
            "7주차:과학적 방법이란 무엇인가- 연역과 귀납",
            "8주차:중간고사",
            "9주차:과학지식은 어떻게 만들어지는가- 과학자의 실제 활동",
            "10주차:과학은 객관적인가- 사회구성주의",
            "11주차:하이젠베르크와 오펜하이머- 과학자는 어디까지 책임이 있는가",
            "12주차:과학자 시민의 권리와 책임- 한나 아렌트의 사상을 중심으로",
            "13주차:인공지능과 책임- 자율주행차가 사고를 내면 누가 책임을 질 것인가",
            "14주차:데이터주권-인간의 심리가 조작된다면 인간의 자유의지와 책임은 어디로 귀속되는가-데이터주권을 확보하기 위한 시민의 역할",
            "15주차:Reflection 및 기말 과제 안내"
        ],
        textbook: ["장하석의 과학, 철학을 만나다.	(장하석 / 2014)","과학혁명의 구조	(토마스 쿤 저, 김영자, 홍성욱 역 / 2013)","쿤＆포퍼: 과학에는 뭔가 특별한 것이 있다. (장대익 / 2008)","예루살렘의 아이히만	(한나 아렌트 저, 김선욱 역 / 2006)","과학철학 입문	(카르납 저, 윤용택 역 / 1993)"]
    }
  },
  {
    id: "HSS203-01",
    name: "근대 사회와 사상",
    prof: "문준영",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 14, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-L30",
        contact: {
            email: "s.deluna@hufs.ac.kr",
            phone: "010-5316-2452",
            office: "E7-L18",
            office_hours: "수업 전후"
        },
        summary: "르네상스부터 20세기 전반까지 근대 서양의 주요 사상 발전과 사회 변화에 대해 학습한다.",
        methods: ["Lecture"],
        materials: "교재 없음",
        policies: "출결 중요",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 40 },
            { name: "Attendance", percent: 20 },
            { name: "Etc", percent: 10 }
        ],
        schedule: [
            "1주차:강의소개",
            "2주차:대체 공휴일(3.1절)",
            "3주차:르네상스의 사상가들",
            "4주차:교회 개혁 사상의 선구자들, 종교개혁과 반종교개혁",
            "5주차:합리주의와 경험론",
            "6주차:18세기 영국 사상가들: 울스턴크래프트, 애덤 스미스, 버크",
            "7주차:계몽사상과 프랑스 혁명",
            "8주차:중간시험: 보고서 대체 (2주차 보강: 독일 관념론과 영국의 공리주의)",
            "9주차:19세기 낭만주의와 민족주의",
            "10주차:멜서스, 사회주의, 아나키즘",
            "11주차:사회 진화론, 우생학과 인종주의",
            "12주차:실존주의, 정신분석학",
            "13주차:파시즘과 나치즘",
            "14주차:대체 공휴일(부처님 오신 날)",
            "15주차:기말시험"
        ],
        textbook: "None"
    }
  },
  {
    id: "HSS204-01",
    name: "글로벌 정치경제",
    prof: "윤지성",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 1, start: 11, duration: 1.5 }, { day: 3, start: 11, duration: 1.5 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-235",
        contact: {
            email: "jsyoon@dgist.ac.kr",
            phone: "053-785-6694",
            office: "E7-215",
            office_hours: "by email appointment"
        },
        summary: "This class is designed for students who are encountering international politics for the first time, introducing theories and concepts of international politics. The course explores answers to the following questions: 1) What are the major theories explaining international politics, and how do each of these theories differently explain international phenomena and criticize other theories?; 2) What are the causes of war, and what are the conditions for peace?; 3) What roles do international political institutions, organizations, and laws play?; 4) What relationship exists between domestic politics and international politics?; 5) How should we understand international political economy?; 6) What issues and controversies have been predominantly discussed in international politics, and what are the new international political issues in the 21st century?",
        methods: ["Lecture","Presentation"  , "Discussion"],
        materials: "The current course schedule is subject to change, and the finalized syllabus will be distributed in the first class.",
        policies: "If you exceed four absences, your grade will be treated as a failure.",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 40 },
            { name: "Attendance", percent: 10 },
            { name: "Paper Presentation", percent: 20 }
        ],
        schedule: [
            "1주차:Introduction",
            "2주차:Historical Context (1): Modern International Order",
            "3주차:Historical Context (2): 20th Century",
            "4주차:Historical Context (3): After the Cold War",
            "5주차:International Relation Theory (1): Realism",
            "6주차:International Relation Theory (2): Liberalism",
            "7주차:International Relation Theory (3): Constructivism",
            "8주차:Midterm Exam",
            "9주차:War and Security (1)",
            "10주차:War and Security (2)",
            "11주차:International Law and Organizations",
            "12주차:Global Trade and Finance",
            "13주차:Global Warming and Environmental Issues",
            "14주차:Terrorism",
            "15주차:TBA",
            "16주차:Final Exam"
        ],
        textbook: "Principles of international politics	(Bueno de Mesquita, Bruce	/ 2014)"
    }
  },
  {
    id: "HSS207a-01",
    name: "커뮤니케이션 특강",
    prof: "조성겸",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 3, start: 13, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-G01",
        contact: {
            email: "skcho99@gmail.com",
            phone: "053-785-6617",
            office: "None",
            office_hours: "None"
        },
        summary: "This course explores artificial intelligence (AI) through a communication and social science lens. You will examine how AI systems communicate, explain information, persuade users, and shape social meaning in everyday tools such as search engines, chatbots, recommendation systems, and generative AI platforms like ChatGPT. Rather than studying AI only in theory, you will interact with custom-designed GPTs created specifically for this course. Through these experiences, you will see how AI functions as a communicative actor that reflects institutional goals, values, and design choices—and how even small differences in AI communication can lead to meaningful social consequences. AI is treated as a communicative actor that speaks on behalf of institutions, organizations, and embedded design choices.. Students will experience how small differences in AI communication can lead to significant social consequences.",
        methods: ["Lecture","Discussion","Experiment"],
        materials: "Students do not need technical skills. In class,  students will test and modify custom GPTs by changing prompts and instructions. Be ready to try things, compare outcomes, and notice small differences.",
        policies: "None",
        grading: [
            { name: "Term Project 1", percent: 40 },
            { name: "Term Project 2", percent: 40 },
            { name: "Class Participation", percent: 20 }
        ],
        schedule: [
            "Introduction – Why AI Communication Matters",
            "Who Speaks When AI Speaks?",
            "Why Do We Trust AI?",
            "Is Search Neutral?",
            "How Do Questions Shape Answers?",
            "Is AI Really Unbiased?",
            "Can AI Justify Its Answers?",
            "Midterm Reflection – Patterns and Power",
            "Can AI Understand Emotion?",
            "What Counts as Expertise?",
            "AI as Institutional Voice",
            "AI in Public Life",
            "Creating with AI",
            "Designing AI for Communication",
            "Final Reflection – What Kind of Communicator Is AI?"
        ],
        textbook: "None"
    }
  },
  {
    id: "HSS208a-01",
    name: "철학 고전의 이해",
    prof: "김병재",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "32",
        classroom: "E7-235",
        contact: {
            email: "byoungjae.kim@dgist.ac.kr",
            phone: "053-785-6626",
            office: "E7-213",
            office_hours: "수업시간 후"
        },
        summary: "이 교과목에서는 대표적인 철학의 고전을 읽고 토론한다. 고전의 위치에 오른 문헌들을 스스로 읽어 내는 능력과, 저자들의 주장을 비판적으로 검토하는 능력을 함양하는데 교육의 목표를 둔다. 대표 철학 고전 두 권을 학기 전반부 한권, 후반부 한권 통권으로 읽으며, 이를 통해 보다 구체적으로 1. 텍스트의 세밀한 읽기와 분석, 요약 능력을 함양한다. 2. 비판적으로 문제를 제기하고, 자신의 주장을 방어하는 능력을 기른다. 3. 공동 독해와 토론을 통해 발제문을 만드는 협동 작업의 경험을 공유한다. 4. 인식론, 의미론, 인간본성론, 존재론, 윤리학에 관한 철학의 대표적 저술의 입장을 이해하고, 주요 주제에 관해 자신의 입장을 만들어 가는 능력과 경험을 함양한다. 5. 이런 경험들은 동시에 학생들에게 이름만 들었던 철학의 고전을 통권으로 직접 스스로 읽으며, 사회의 리더로서 자신의 세계관과 인생관을 형성해 가는 기회를 제공할 것이다.",
        methods: ["Lecture","Flipped-learning","Presentation","Discussion"],
        materials: "None",
        policies: "1. 발제팀은 내용을 요약하여 발표한 후, 학생들이 준비한 질문에 답하고 함께 토론한다.  2. 실 수업 시수의 1/4이상 결석 시 U처리되며, 1회 결석시 2점 감점한다  3. 표절된 글은 0점/U처리한다. ",
        grading: [
            { name: "Homework", percent: 40 },
            { name: "Term Project", percent: 20 },
            { name: "Class Participation", percent: 20 },
            { name: "Attendance", percent: 20 }
        ],
        schedule: [
            "강의 계획 및 인사 나누기",
            "철학이란 무엇인가? 비트겐슈타인의 철학 개관",
            "<확실성에 관하여> 텍스트 함께 읽기 1",
            "<확실성에 관하여> 텍스트 함께 읽기 2",
            "<확실성에 관하여> 텍스트 함께 읽기 3",
            "<확실성에 관하여> 조별 발표 및 토론 1",
            "<확실성에 관하여> 조별 발표 및 토론 2",
            "시험 주간",
            "니체의 철학 개관 ",
            "<도덕의 계보> 텍스트 함께 읽기 1",
            "<도덕의 계보> 텍스트 함께 읽기 2",
            "<도덕의 계보> 텍스트 함께 읽기 3",
            "<도덕의 계보> 조별 발표 및 토론 1",
            "<도덕의 계보> 조별 발표 및 토론 2",
            "<도덕의 계보> 조별 발표 및 토론 3",
            "시험 주간"
        ],
        textbook: ["확실성에 관하여 (루트비히 비트겐슈타인 / 2020)", "도덕의 계보 (프리드리히 니체 / 2021)"]
    }
  },
  {
    id: "HSS212-01",
    name: "권리변동의 일반",
    prof: "함상범",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 9.5, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-L30",
        contact: {
            email: "hamsb78@naver.com",
            phone: "053-756-4422",
            office: "None",
            office_hours: "None"
        },
        summary: "법의 기본원칙 및 구조, 국가와 국민, 사회질서와 시민, 경제생활과 소비자, 직장생활과 근로자, 가정생활과 가족",
        methods: ["Lecture","Discussion"],
        materials: "주교재",
        policies: "수업 중 휴대폰 사용 금지, 출결상황 수시 체크",
        grading: [
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 },
            { name: "Attendance", percent: 20 }
        ],
        schedule: [
            "법의 기초, 정의와 인권",
            "법의 형식과 체계, 법령 및 판례 찾기",
            "분쟁을 해결하는 다양한 방법, 재판 제도의 이해",
            "헌법에서 정하는 기본권, 대한민국의 주권과 통치권력",
            "법치행정과 행정구제, 조세제도, 사회보장과 복지",
            "범죄와 형벌, 형사절차와 인권보장",
            "형사사건 피해자 보호, 형벌과 행정제재",
            "중간시험",
            "부동산매매, 부동산임대차",
            "금융거래, 상품거래, 서비스거래, 소비자 권리보호",
            "고용과 근로계약, 임금과 근로시간",
            "고용에서의 성차별, 직장 내 성희롱, 해고, 근로3권과 사회보장",
            "가족관계와 법, 결혼",
            "자녀의 출생과 입양, 이혼",
            "상속과 유언",
            "기말시험"
        ],
        textbook: ["한국인의 법과 생활 : 일반인들이 알아야 할 생활법률 가이드북	(이충호 / 2021)"]
    }
  },
  {
    id: "HSS215-01",
    name: "도시지리학",
    prof: "Shen Shawn",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 15, duration: 1.5 }, { day: 2, start: 15, duration: 1.5 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-224",
        contact: {
            email: "shawnshen@dgist.ac.kr",
            phone: "053-785-6699",
            office: "E7-L14",
            office_hours: "by appointment"
        },
        summary: "● The world's population predominantly resides in urban areas, where critical issues such as social polarization, urban restructuring, poverty, and the emergence of satellite and innovation cities are prevalent. This course investigates the internal spatial dynamics of cities and their interconnectedness within the global urban system. It seeks to comprehend the multifaceted roles of cities, the impact of urban structures on people's lives, and how individuals shape urban spaces for various objectives. Through this exploration, students will gain a deeper understanding of urban life and envision the future of 'smart cities.' Additionally, they will appreciate the diversity among global metropolises and megacities worldwide. ● At the end of this course, students should be able to: 1. Articulate key concepts and theories in urban geography, encompassing topics such as Central Business District (CBD), inner-city dynamics, urbanization trends, central place theory, gentrification, and segregation. 2. Interpret urban landscapes and grasp the spatial processes and functions contributing to their configuration. 3. Comprehend various approaches and perspectives within urban geography, including the Chicago School of thought, postmodernism, environmentalism, spatial analysis, and urban political economy. This understanding extends to their implications for city planning, formation, and design. ● Academic misconduct, including plagiarism and cheating during exams, could lead to receiving a failing grade (F) in this course.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "The use of mobile phones, internet for personal purposes, gaming, or studying for other subjects is prohibited during class. Students who accumulate more than four absences may receive a failing grade (F) for this course.",
        grading: [
            { name: "Term Project", percent: 20 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 40 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
    	     "1주차:Introduction to Urban Geography",
    	     "2주차:Defining and Structuring the 'City'",
    	     "3주차:Origins of Cities and Pre-Industrial Urbanization",
    	     "4주차:Evolution of Contemporary Urban Centers",
    	     "5주차:Urbanization Processes and the Emergence of Cities",
    	     "6주차:Urban Land Use, Housing, and Homelessness",
    	     "7주차:Social and Political Aspects of Urban Life",
    	     "8주차:Midterm Examination",
    	     "9주차:Neighborhood Revitalization and Gentrification",
    	     "10주차:Urban Residential Segregation and Racial Dynamics",
    	     "11주차:Urban Challenges: Traffic, Pollution, Noise, and Waste Management",
    	     "12주차:Cities in Developing Regions: Structure and Urban Hierarchies",
    	     "13주차:Global Urbanization: Metropolitan Areas in the New Millennium",
    	     "14주차:Prospects for Urban Development: High-Tech 'Smart Cities'",
    	     "15주차:Catch-Up Week and Semester Review",
    	     "16주차:Final Examination"
        ],
        textbook: ["Lecture PPT, notes and class handouts to be provided by the instructor", "Handbook of Urban Geography	(Schwanen, T. & van Kempen, R. (ed.) / 2020)"]
    }
  },
  {
    id: "HSS218-01",
    name: "세계종교입문",
    prof: "박범석",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 3, start: 13, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-L30",
        contact: {
            email: "vinetar@dgist.ac.kr",
            phone: "053-785-5211",
            office: "None",
            office_hours: "16:00-17:00"
        },
        summary: "● 세계 주요 종교의 사상과 문화를 살펴보고 그 사례로서 힌두교, 불교, 유교, 도교, 유대교, 그리스도교, 이슬람교 등의 형성과 발달과정을 이해한다. ● 1. 세계 주요 종교의 분포와 현황을 설명할 수 있다. 2. 종교 간 사상과 문화의 차이를 비교할 수 있다. ● 과제와 시험에서 표절이나 부정이 발견되면 그 경중에 따라 (1) 경고, (2) 감점, (3) 성적몰수 등의 징계를 할 수 있으며, 위중한 부정행위에 대해서는 (4) 대학에 보고하고 징계 요청 등의 조치를 취한다.",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "해당 진도의 교과서 및 강의자료 예습하고 수업에 참여",
        policies: "출석, 과제, 참여도 등의 전반적인 활동을 종합하여 평가한다. 조별 독서⋅탐구 활동 과정을 진행하며 그 결과를 발표하고 공유한다.",
        grading: [
            { name: "Term Project", percent: 30 },
            { name: "Class Participation", percent: 10 },
            { name: "Midterm exam", percent: 20 },
            { name: "Final exam", percent: 30 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
    	     "1주차:오리엔테이션",
    	     "2주차:힌두교",
    	     "3주차:불교 1",
    	     "4주차:불교 2",
    	     "5주차:동아시아 종교 1",
    	     "6주차:동아시아 종교 2",
    	     "7주차:중간고사",
    	     "8주차:유대교 1",
    	     "9주차:유대교 2",
    	     "10주차:기독교 1",
    	     "11주차:기독교 2",
    	     "12주차:이슬람교 1",
    	     "13주차:이슬람교 2",
    	     "14주차:토착종교와 신흥종교",
    	     "15주차:기말고사",
        ],
        textbook: ["세계종교산책 (로이 롭슨 / 2013)"]
    }
  },
  {
    id: "HSS221-01",
    name: "사회과학 특강I",
    prof: "곽금주",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 1, start: 14, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-L20",
        contact: {
            email: "kjkwak@snu.ac.kr",
            phone: "053-785-6609",
            office: "None",
            office_hours: "None"
        },
        summary: "● 본 강좌는 삶의 전환기를 맞이한 20대의 고민과 주요 이슈들을 심리학 이론으로 풀어내며 이들의 삶을 설계하는 방법과 방향을 제시하는 데 목적을둔다. 전반부에서는 인생 발달 전체를 간략히 살펴본 다음 20대의 가장 큰 과제인 나 자신을 알고, 심리적으로 ‘독립’하는 과정에 대해 그리고 청년기의  타인과의 ‘관계’에 대해 알아보고자 한다. ● 이러한 심리학적 강의 내용을 토대로 인생의 지도(map)에서 현재 위치와 상황을 이해하고 인생 계획을 세우고 목표를 ‘성취’할 수 있도록 돕고자 한다. ● 몰입하는 학습태도 필수. 보고서 작성시 참고한 자료 반드시 밝히고, 저작권등 윤리 준수.",
        methods: ["Lecture"],
        materials: "강의 일정과 강의방식 등에 대해 논의하는 첫 시간은 반드시 참석.",
        policies: "출석 철저히. (매주 출석 체크)",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 50 },
            { name: "Attendance", percent: 20 },
        ],
        schedule: [
    	     "1주차:강의소개",
    	     "2주차:발달심리학이란",
    	     "3주차:영아발달",
    	     "4주차:아동발달",
    	     "5주차:청년 발달",
    	     "6주차:청년기 나에 대하여",
    	     "7주차:청년기 의사결정",
    	     "8주차:중간 (보고서 주제선정 및 개요 제출)",
    	     "9주차:청년기 부모 관계, 친구관계",
    	     "10주차:청년기 남자와 여자",
    	     "11주차:청년기 사랑과 이별",
    	     "12주차:청년기 진로",
    	     "13주차:청년기 의지력",
    	     "14주차:청년기 성공을 위한 심리자본 1",
    	     "15주차:청년기 성공을 위한 심리자본 2",
    	     "16주차:기말고사"
        ],
        textbook: ["매주 강의자료 LMS에 올림"]
    }
  },
  {
    id: "HSS222-01",
    name: "사회과학 특강II",
    prof: "이정덕",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 2, start: 15, duration: 3 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-L30",
        contact: {
            email: "jdyi8589@dgist.ac.kr",
            phone: "053-785-6616",
            office: "E7-G09",
            office_hours: "수 14:00-14:50"
        },
        summary: "● 이번 학기의 사회과학특강 2에서 어떠한 인류의 진화과정을 거쳐 현재의 인류에 도달하게 되었고 그 과정에서 어떠한 생물학적, 신경학적, 행위적 특징이 어떻게 나타났는지를 다루고, 이를 바탕으로 언어와 문화의 출현과정이 어떻게 나타났으며 어떻게 진화해왔는지, 동서양의 사유체제가 어떻게 다르게 진화했는지를 이해하고자 한다. ● 인류의 생물학적 진화과정과 언어와 문화의 진화과정이 현대인류에 지니는 의미를 이해한다. ● 보고서를 작성할 때 타문헌을 참고하는 경우 반드시 이를 정확하게 표시한다.",
        methods: ["Lecture", "p=Presentation", "Discussion", "Etc."],
        materials: "None",
        policies: "학습내용을 최대한 자신에 적용하여 스스로에 대해 성찰할 수 있도록 노력한다. 수업과 관련 없는 핸드폰이나 노트북 등의 사용을 자제한다.",
        grading: [
            { name: "Class Participation", percent: 10 },
            { name: "Paper Presentation", percent: 10 },
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 },
        ],
        schedule: [
    	     "1주차:수업안내-(교재1의 1부 1장-인간출현에 대한 세계관)",
    	     "2주차:생물진화와 인류진화(교재1의 1부 2장과 3장)",
    	     "3주차:초기인류의 진화(700만년전-30만년전, 교재1의 2부의 1장)",
    	     "4주차:현생인류의 출현(50만년전-현재, 교재1의 2부의 2장)",
    	     "5주차:직립보행, 도구, 양육동맹(교재1의 3부의 1장)",
    	     "6주차:불, 요리, 두뇌의 진화(교재1의 3부의 2, 4장)",
    	     "7주차:제스처, 언어, 문자의 출현(교재1의 3부의 3장 등)",
    	     "8주차:중간고사대체(중간보고서)",
    	     "9주차:인류진화에서 호르몬, 사랑, 출산(교재1의 4부의 1장과 2장)",
    	     "10주차:인류진화에서 애착, 가족, 공동체(교재1의 4부의 3장)",
    	     "11주차:인류진화에서 사회적 뇌와 사회적 마음(교재1의 4부의 4장)",
    	     "12주차:인류진화에서 도덕과 종교(교재1의 4부의 5장)",
    	     "13주차:언어의 진화(초기언어와 의미확장)(교재2의 1, 2, 5, 6장)",
    	     "14주차:언어의 진화(사유체계의 진화)(교재3의 5-8장)",
    	     "15주차:동양 vs 서양 사유체계(교재4의 2, 3장)",
    	     "16주차:기말고사대체(기말보고서)"
        ],
        textbook: ["동아시아심성체제 (이정덕 / 2024)", "21세기한국의문화혁명 (이정덕 / 2004)", "언어와 인지 (임예원 / 2013)", "진화인류학강의 (박한선 / 2024)"]
    }
  },
  {
    id: "HSS222-02",
    name: "사회과학 특강II",
    prof: "최태섭",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 3, start: 13, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L20",
        contact: {
            email: "choi-ts@dgist.ac.kr",
            phone: "010-4274-0108",
            office: "None",
            office_hours: "None"
        },
        summary: "● 사회에서 나타나는 문화현상들에 대한 이론적이고 구조적인 이해를 도모함. ● 1. 기초적인 수준의 문화이론을 습득한다. 2. 다양한 문화현상들을 심층적으로 고찰한다. 3. 문화와 사회를 바라보는 교양을 습득한다. ● 상호 존중의 원칙 하에 자유로운 의견 개진과 건설적인 토론이 진행될 수 있도록 노력할 것. 건전한 의견 개진이 아닌 타인에 대한 비난, 수업 방해 등의 행위 시 교수의 제제가 있을 수 있음. 수업의 구성원에 대한 괴롭힘이나 폭력 등에 행위는 엄히 금지하며, 필요시 학칙에 따라 조치함. 과제와 시험에서 부정이 발견될 시 학칙에 따라 조치함.",
        methods: ["Lecture", "Discussion"],
        materials: "주교재",
        policies: "학습 보조를 목적으로 하는 IT기기 사용 가능. 사고력을 기르는 것이 수업의 중요한 목표이므로 생성형 AI활용은 제한된 범위 안에서 투명하게만 사용 가능. 출석은 규정에 따라서 처리.",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Etc", percent: 10 },
            { name: "Homework 1", percent: 40 },
            { name: "Homework 2", percent: 40 },
        ],
        schedule: [
    	     "1주차:강의 소개/문화란 무엇인가",
    	     "2주차:고전 사회 이론에서의 문화",
    	     "3주차:비판이론에서의 문화",
    	     "4주차:영국문화연구",
    	     "5주차:구조주의와 포스트 구조주의",
    	     "6주차:취향의 해부(구별 짓기, 옴니보어, 오타쿠, 힙스터)",
    	     "7주차:영화감상 및 토론(빌리 엘리어트)",
    	     "8주차:중간고사",
    	     "9주차:미디어와 문화",
    	     "10주차:고급/순수 문화와 대중문화",
    	     "11주차:문화의 생산, 유통, 수용",
    	     "12주차:문화와 젠더/섹슈얼리티",
    	     "13주차:문화와 민족/인종",
    	     "14주차:문화정치와 저항",
    	     "15주차:한국 사회와 문화",
    	     "16주차:기말고사"
        ],
        textbook: ["문화 이론: 사회학적 접근 (필립 스미스, 알렉산더 라일리 외 / 2025)", "[eBook] 문화사회학 (최종렬, 김은하 외 / 2024)"]
    }
  },
  {
    id: "HSS223-01",
    name: "심리철학",
    prof: "김병재",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초선택"],
    trackRelations: {},
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }],
    syllabus: {
        capacity: "32",
        classroom: "E7-235",
        contact: {
            email: "byoungjae.kim@dgist.ac.kr",
            phone: "053-785-6626",
            office: "E7-217",
            office_hours: "개별 약속"
        },
        summary: "In this course, we will explore key questions in the Philosophy of Mind: Is the mind non-physical or reducible to the physical? What is the relationship between the mind and body? How does the mind differ from software on a computer? Can artificial intelligence embody the mind? What is the nature of consciousness? How does consciousness arise from purely physical objects? Our goal is to deepen our understanding of the mind in search of answers to these questions.",
        methods: ["Lecture", "Presentation"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Midterm exam", percent: 20 },
            { name: "Final exam", percent: 20 },
            { name: "Homework", percent: 20 },
            { name: "Term Project", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Etc", percent: 10 }
        ],
        schedule: [
            "Introduction",
            "Watching a Movie: Bicentennial Man",
            "Marks of the Mental",
            "Physicialism",
            "How to be a Physicalist",
            "Thought",
            "Grounding Intentionality",
            "Mid Exam",
            "Externalism and the Extended Mind",
            "The Metaphysics of Consciousness",
            "Theories of Consciousness",
            "Mental causation",
            "Other minds",
            "Self-knowledge",
            "The self",
            "Final Exam"
        ],
        textbook: "Philosophy of Mind: An Introduction	(Tim Bayne / 2022)"
    }
  },
  {
    id: "HSS301a-01",
    name: "Scientific Writing",
    prof: "이정아",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "18",
        classroom: "E7-L28",
        contact: {
            email: "jalee@dgist.ac.kr",
            phone: "053-785-6623",
            office: "E7-216",
            office_hours: "upon appointment"
        },
        summary: "● The Scientific Writing course is designed to help students understand the fundamentals of effective scientific and technical writing and write a mini research paper as the final project. To this end, the course consists of two phases: Lecture/Discussion and the Writing Project. In the first quarter of the semester, students will learn the basics of academic research paper writing such as ethics and plagiarism, paraphrasing, referencing, and style; they will also explore the structure of scientific writing and discursive features specific to scientific writing by surveying published research papers in the science and technology fields. Equipped with this basic understanding about writing a research paper, students will move on to learn how to compose each of the sections of a research paper centering on content, frequently used vocabulary, discourse-organizing words, and syntax patterns. As they learn the specifics of each section, students will have ample opportunities to practice writing through not only structured class activities but also actually drafting their own research paper section by section according to the class progress. ● The aim of this class is to help improve your scientific and technical writing skills. You should eventually be able to research, organize, and write technical and scientific material in a way that can be understood by your intended audiences.     By the end of this course: Students will be able to   - understand structure of scientific writing and its discursive features;   - write effectively, concisely, and clearly for an academic paper;   - write a short research paper of their interest; and   - demonstrate their understanding about ethics in the academic world. ● Academic dishonesty in any form will not be tolerated. Violations of these rules will result in a record of the violation being placed in your file and you may also receive a failing grade for the course. Confirmation of such incidents can also result in expulsion from the University.    Academic Dishonesty includes:  - Unauthorized assistance: Using unauthorized materials, information or study aids in any academic exercise unless specifically authorized by your professor.  - Presenting material (through written, visual, electronic or oral means) which has not been studied or learned, but rather was obtained through someone else’s efforts and used as part of an examination, course assignment or project.    - Falsifying or misrepresenting your academic work.  - Plagiarism: Whereby another’s work or ideas are used without any indication of the source, thereby attempting to convey the impression that such work is the student’s own. (go to http://www.plagiarism.org/ ; https://www.copykiller.co.kr/notice ; http://citationstyles.org/ ; or http://endnote.com/downloads/styles  to get more information on plagiarism and how to avoid it)  - Multiple Submissions: Submitting the same academic work for credit more than once without the express permission of the professor.   - Any student who knowingly helps another violate academic behavior standards is also in violation of the standards.",
        methods: ["Lecture", "Presentation", "Discussion", "Peer teaching", "Project"],
        materials: "Pre-requisite: Academic English: Research & Writing (or English for Science Leaders II)",
        policies: "Attendance Policy:  All classes are mandatory and must be attended. If you are unable to attend class, you need to advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence you will be given an excused absence. An excused absence does not negatively affect your final grades, however repeated absence (excused or not) may result in a warning from your professor after which any further absences may lead to being awarded an unsatisfactory grade for the course.   If you miss class due to ill-health, provide a medical certificate to your professor during the first class after your return. If you are absent without a reasonable excuse, you will be marked as absent from the session. If you are marked absent SIX or more times during the semester you will receive a grade of unsatisfactory for the course.  Please arrive on time for all class meetings. THREE late arrivals will result in being marked as an unexcused absence. Arriving more than 15 minutes after the start of class will automatically be marked as an unexcused absence.",
        grading: [
            { name: "Etc", percent: 30 },
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Team Project", percent: 30 },
            { name: "Midterm exam", percent: 20 },
        ],
        schedule: [
    	     "1주차:Course Overview; Scientific Writing and Its Style",
    	     "2주차:Ethics and Plagiarism in the Academic World / Quoting, Paraphrasing, & Summarizing / Referencing (APA Style)",
    	     "3주차:Topic Proposal / Evaluating Sources",
    	     "4주차:Citing Practices / Building Background Paragraphs I (Midterm checkpoint due Saturday)",
    	     "5주차:Building Background Paragraphs II / Writing an Introduction I",
    	     "6주차:Writing an Introduction II",
    	     "7주차:Writing an Introduction III / Writing about Methodology I (Midterm due Saturday)",
    	     "8주차:Midterm exam period – no scheduled classes",
    	     "9주차:Writing about Methodology II",
    	     "10주차:Writing about Results I",
    	     "11주차:Writing about Results II (Children’s Day – No class)",
    	     "12주차:Writing about Results III / Writing the Discussion & Conclusion I",
    	     "13주차:Writing the Discussion & Conclusion II",
    	     "14주차:Writing the Discussion & Conclusion III / Writing an Abstract I",
    	     "15주차:Writing an Abstract II / Writing Conference Week (Final Paper due Saturday)",
    	     "16주차:Final exam period – no scheduled classes"
        ],
        textbook: ["Scientific Writing (Lee, Jeong-Ah & Tucker, Tremaine / 2017)"]
    }
  },
  {
    id: "HSS301a-02",
    name: "Scientific Writing",
    prof: "Mark Silverlock",
    credit: 3,
    categories: ["읽기,쓰기 중점"],
    fixedTypes: ["기초필수"],
    trackRelations: {},
    times: [{ day: 0, start: 18, duration: 1.5 }, { day: 2, start: 18, duration: 1.5 }],
    syllabus: {
        capacity: "18",
        classroom: "E7-L28",
        contact: {
            email: "marksilverlock@dgist.ac.kr",
            phone: "010-5444-0018",
            office: "None",
            office_hours: "None"
        },
        summary: "The Scientific Writing course is designed to help students understand the fundamentals of effective scientific and technical writing and write a mini research paper as the final project. To this end, the course consists of two phases: Lecture/Discussion and the Writing Project. In the first quarter of the semester, students will learn the basics of academic research paper writing such as ethics and plagiarism, paraphrasing, referencing, and style; they will also explore the structure of scientific writing and discursive features specific to scientific writing by surveying published research papers in the science and technology fields. Equipped with this basic understanding about writing a research paper, students will move on to learn how to compose each of the sections of a research paper centering on content, frequently used vocabulary, discourse-organizing words, and syntax patterns. As they learn the specifics of each section, students will have ample opportunities to practice writing through not only structured class activities but also actually drafting their own research paper section by section according to the class progress. In this course, a process-oriented approach to writing is employed; therefore, instructional methods such as multiple drafting, peer/instructor review, and group work will be implemented.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "Attendance Policy: All classes are mandatory and must be attended. If you are unable to attend class, you need to advise your professor at least 24 hours prior to your intended absence. If you have a reasonable excuse for your absence you will be given an excused absence. An excused absence does not negatively affect your final grades, however repeated absence (excused or not) may result in a warning from your professor after which any further absences may lead to being awarded an unsatisfactory grade for the course. If you miss class due to ill-health, provide a medical certificate to your professor during the first class after your return. If you are absent without a reasonable excuse, you will be marked as absent from the session. If you are marked absent SIX or more times during the semester you will receive a grade of unsatisfactory for the course. Please arrive on time for all class meetings. THREE late arrivals will result in being marked as an unexcused absence. Arriving more than 15 minutes after the start of class will automatically be marked as an unexcused absence. Late Work Policy: There are no make-ups for work completed in class. Any work not completed during class time must be completed by the due date set by your professor. If you miss classes due to ill-health or for any other excused absence it is YOUR responsibility to find out what work was completed during the classes you missed and complete that work by the due date set by your professor. Only in the case of an excused absence will you be allowed to give your in-class semester speech at another date. However, this will result in a slight deduction in your grade for that assignment. Please try to be present on your assigned speaking days. Group Work Policy: Everyone must take part in group projects. You will be allocated to a group for various assignments throughout the semester. All members of a group will receive the same score; that is, the assignment is assessed and everyone receives this score. For certain group assignments, you will work in groups but you will be assessed both as a group and individually.",
        grading: [
            { name: "Midterm exam", percent: 20 },
            { name: "Final exam", percent: 30 },
            { name: "Homework", percent: 30 },
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
        ],
        schedule: [
            "Course Overview; Scientific Writing and Its Style",
            "Ethics and Plagiarism in the Academic World, APA Style",
            "Topic Proposal, Evaluating Sources",
            "Citing Practices; Building Background Paragraphs I",
            "Building Background Paragraphs II, Writing an Introduction I",
            "Writing an Introduction II",
            "Writing an Introduction III, Writing about Methodology I",
            "Midterm exam period – no scheduled classes",
            "Writing about Methodology II",
            "Writing about Results I",
            "Writing about Results II",
            "Writing about Results III, Writing a Discussion/Conclusion I",
            "Writing the Discussion/Conclusion II",
            "Writing the Discussion/Conclusion III, Writing an Abstract I",
            "Writing an Abstract II, Writing Workshop",
            "Final exam period – No scheduled classes"
        ],
        textbook: "Scientific Writing (J-A. Lee and T. L. Tucker. / 2017)"
    }
  },
  {
    id: "INT201-01",
    name: "인턴십I",
    prof: "김소희",
    credit: 1,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 17, duration: 1 }]
  },
  {
    id: "INT202-01",
    name: "인턴십II",
    prof: "김소희",
    credit: 1,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 17, duration: 1 }]
  },
  {
    id: "INT203-01",
    name: "인턴십III",
    prof: "김소희",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 17, duration: 2 }]
  },
  {
    id: "INT204-01",
    name: "인턴십IV",
    prof: "김소희",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 17, duration: 2 }]
  },
  {
    id: "INT211-01",
    name: "글로벌 인턴십V",
    prof: "김회준",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT212-01",
    name: "글로벌 인턴십VI",
    prof: "김회준",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT213-01",
    name: "글로벌 인턴십VII",
    prof: "김회준",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT214-01",
    name: "글로벌 인턴십VIII",
    prof: "김회준",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT401-01",
    name: "인턴십V",
    prof: "김소희",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "INT402-01",
    name: "인턴십VI",
    prof: "김소희",
    credit: 2,
    categories: ["인턴십"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 5, start: 13.5, duration: 10 }]
  },
  {
    id: "LS203-01",
    name: "세포생물학 실험(이)",
    prof: "이창훈, 정찬, 조정아",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공선택" },
    times: [{ day: 0, start: 16.5, duration: 3 }, { day: 2, start: 16.5, duration: 3 }],
    syllabus: {
        capacity: "20",
        classroom: "E4-225",
        contact: {
            email: "None",
            phone: "053-785-6612",
            office: "None",
            office_hours: "None"
        },
        summary: "이 수업은 생명과학 관련 전공을 원하는 학생을 대상으로 한다.  분자생물학, 세포생물학 및 생화학의 기초 실험을 실습하고 그 배경이론에 대해 공부한다.  1분반은 단백질 관련 실험 및 피부학 관련 실험을 주요 주제로 한다.   1분반은 실험 내용을 이해하여 UGRP 등 향후 실험 설계 과정에서 다양한 실험 기법을 손쉽게 적용함을 목표로 한다.",
        methods: ["Presentation", "Flipped-learning", "Tteam teaching", "Experiment", "Etc."],
        materials: "None",
        policies: "모든 공지와 자료 공유는 LMS를 통해 진행한다.",
        grading: [
            { name: "Etc", percent: 30 },
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 40 },
            { name: "Term Project", percent: 20 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: "생명과학 실험 1, LMS 자료 (이창훈 / 2018)"
    }
  },
  {
    id: "LS203-02",
    name: "세포생물학 실험(이)",
    prof: "정찬, 이창훈, 조정아",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공선택" },
    times: [{ day: 1, start: 15.5, duration: 3 }, { day: 3, start: 15.5, duration: 3 }],
    syllabus: {
        capacity: "20",
        classroom: "E4-225",
        contact: {
            email: "chungc@dgist.ac.kr",
            phone: "053-785-1660",
            office: "E5-213",
            office_hours: "사전 약속 필요"
        },
        summary: "이 수업은 생명과학 관련 전공을 원하는 학생을 대상으로 한다. 분자생물학, 세포생물학 및 생화학의 기초 실험을 실습하고 그 배경이론에 대해 공부한다. 2분반은 암과 관련된 주제로 주로 공부하고 실습한다. 2분반은 실험 내용을 이해하여 UGRP 등 향후 실험 설계 과정에서 다양한 실험 기법을 손쉽게 적용함을 목표로 한다.",
        methods: ["Presentation", "Flipped-learning", "Discussion", "Team teaching", "Experiment", "Etc."],
        materials: "None",
        policies: "모든 공지와 자료 공유는 LMS를 통해 진행한다. 배경 이론에 대한 예습을 필수로 한다.",
        grading: [
            { name: "Term Project", percent: 20 },
            { name: "Homework", percent: 30 },
            { name: "Class Participation", percent: 10 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 30 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: "LMS 통한 자료 배포"
    }
  },
  {
    id: "LS203-03",
    name: "세포생물학 실험(이)",
    prof: "조정아, 정찬, 이창훈",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공선택" },
    times: [{ day: 1, start: 15, duration: 3 }, { day: 3, start: 15, duration: 3 }],
    syllabus: {
        capacity: "20",
        classroom: "E4-224",
        contact: {
            email: "jungahcho@dgist.ac.kr",
            phone: "010-7187-8345",
            office: "None",
            office_hours: "None"
        },
        summary: "이 수업은 생명과학 관련 전공을 원하는 학생을 대상으로 한다. 분자생물학, 세포생물학 및 생화학의 기초 실험을 실습하고 그 배경이론에 대해 공부한다. 3분반에서는 인간 질병 모델을 실험실 수준에서 구축하고 관련한 세포 활성 테스트를 진행한다.",
        methods: ["Presentation", "Flipped-learning", "Team teaching", "Experiment", "Etc."],
        materials: "연구노트, 실험복",
        policies: "모든 공지와 자료 공유는 LMS를 통해 진행한다.",
        grading: [
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Quiz", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Etc", percent: 20 },
            { name: "Class Participation", percent: 10 }
        ],
        schedule: [
            "1주차 : 오리엔테이션 (연구노트 작성법, 연구 설계법, 논문 검색법, 파이페팅 연습)",
            "2주차: 학기 중 수행할 실험 기 법에 대한 Overview",
            "3주차 : 현미경 및 동물 세포배양 이론",
            "4주차 : 세포배양 실습I",
            "5주차 : 세포배양 실습II",
            "6주차 : 세포배양 실습III",
            "7주차 : 연구제안서 중간발표",
            "8주차 : 중간고사",
            "9주차 : 세포활성테스트I",
            "10주차 : 세포활성테스트II",
            "11주차 : 형광염색법 실습I",
            "12주차 : 형광현미경 실습II",
            "13주차 : 단백질 실험I",
            "14주차 : 단백질 실험II",
            "15주차 : 미시세계 사진전 발표 및 연구제안서 최종 발표",
            "16주차 : 기말고사"
        ],
        textbook: "생명과학실험 I (이창훈 / n.d.)"
    }
  },
  {
    id: "LS204-01",
    name: "세포생물학(이)",
    prof: "백명인, 정영태",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "생명과학": "전공필수", "뇌과학": "전공선택" },
    times: [{ day: 1, start: 15, duration: 1.5 }, { day: 3, start: 15, duration: 1.5 }],
    syllabus: {
        capacity: "80",
        classroom: "E7-233",
        contact: {
            email: "bmi008@dgist.ac.kr",
            phone: "053-785-6162",
            office: "E4-511",
            office_hours: "None"
        },
        summary: "This class introduces basic cell biology, including basic cellular organelles, structures, experimental technologies, and also diseases and systems at the cellular levels. Also this class will introduces a little bit of molecular biology. Thus, this class will function as the core class for those who plan to have 'biology' as their major.",
        methods: ["Presentation", "Team teaching", "Peer teaching"],
        materials: "None",
        policies: "모든 생명과학의 기본 과목이므로 성실한 학습이 필요함  정영태 교수와 백명인 교수가 교대로 강의를 진행할 예정",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Midterm exam", percent: 45 },
            { name: "Final exam", percent: 45 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: "Molecular biology of the cell (Bruce Alberts / n.d.)"
    }
  },
  {
    id: "LS204-02",
    name: "세포생물학(이)",
    prof: "백명인, 정영태",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "생명과학": "전공필수", "뇌과학": "전공선택" },
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "80",
        classroom: "E7-236",
        contact: {
            email: "bmi008@dgist.ac.kr",
            phone: "053-785-6162",
            office: "E4-511",
            office_hours: "None"
        },
        summary: "This class introduces basic cell biology, including basic cellular organelles, structures, experimental technologies, and also diseases and systems at the cellular levels. Also this class will introduces a little bit of molecular biology. Thus, this class will function as the core class for those who plan to have 'biology' as their major.",
        methods: ["Presentation", "Team teaching", "Peer teaching"],
        materials: "None",
        policies: "모든 생명과학의 기본 과목이므로 성실한 학습이 필요함  정영태 교수와 백명인 교수가 교대로 강의를 진행할 예정",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Midterm exam", percent: 45 },
            { name: "Final exam", percent: 45 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: "Molecular biology of the cell (Bruce Alberts / n.d.)"
    }
  },
  {
    id: "LS304-01",
    name: "생명체의 다양성과 유기적 관계 (이)",
    prof: "이상임",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "20",
        classroom: "E7-229",
        contact: {
            email: "None",
            phone: "053-785-6613",
            office: "None",
            office_hours: "None"
        },
        summary: "This course aims for a broad understanding on the topics in ecology and evolutionary biology, the two pillars of macrobiology. First half of the semester will be allotted to ecology, which concerns biological processes occurring at relatively short time scale. Ecological processes that occur at the levels of individuals, populations, communities, and ecosystems, such as interactions among individuals, dynamics of competition and distribution of individuals over various geographic scales, and ecological succession will be taught and discussed. In the second half of the semester, we will learn the mechanisms of evolution of organisms. Topics such as natural and sexual selection, evolution of life history, social evolution and altruism, and speciation will be taught and discussed. In addition to the classical textbook topics, more timely issues such as the impact of climate change and merits and demerits of reductionism in understanding evolution will be handled by special lectures and/or group discussion.",
        methods: ["Presentation", "Team teaching", "Etc."],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Term Project", percent: 20 },
            { name: "Final exam", percent: 35 },
            { name: "Midterm exam", percent: 35 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "Course Introduction, ecology of individuals (Molles, Ch 4)",
            "Ecology of individuals (Molles, Ch 5, 6)",
            "Distribution of populations, population dynamics (Molles, Ch 9, 10)",
            "Population growth, Species interaction (Molles, Ch 11, 13)",
            "Species interaction, Community ecology (Molles, Ch 14, 16)",
            "Ecological succession, Climate change (Molles, Ch 20, 22, 23)",
            "Special topic - Ocean acidification",
            "Mid-term exam",
            "Natural selection and adaptation (Freeman & Heron, Ch 10)",
            "Hardy-Weinberg equilibrium, quantitative genetics (Freeman & Heron, Ch 8)",
            "Field trip and data analysis",
            "Sexual selection (Freeman & Heron, Ch 7 and additional materials)",
            "Social evolution (Freeman & Heron Ch 11 and reading materials)",
            "Evolution of life histories (Freeman & Heron, Ch 12)",
            "Macroevolution",
            "Final exam"
        ],
        textbook: ["Ecology : Concepts and applications (Molles / n.d.)", "Evolutionary analysis (Freeman & Herron / n.d.)"]
    }
  },
  {
    id: "LS305-01",
    name: "신경과학I(이)",
    prof: "서병창, 엄지원",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공필수" },
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-L21",
        contact: {
            email: "bcsuh@dgist.ac.kr",
            phone: "053-785-6123",
            office: "E4-309",
            office_hours: "월 12:00-13:00"
        },
        summary: "이 강의 시리즈에서는 신경세포의 기본 특성부터 뇌의 구조, 감각 시스템 및 관련 질병에 대해 가르칠 것입니다. 이 과정은 뇌과학을 전공으로 선택하고자 하는 학생들과 뇌 관련 연구 주제에 관심이 있는 학생들에게 강력히 추천합니다.",
        methods: ["Presentation", "Flipped-learning", "Team teaching", "Peer teaching"],
        materials: "None",
        policies: "Cell phones should be turned off or set to silent mode during class.  No texting or browsing on phones during class.  Laptops/tablets should only be used for course-related activities.",
        grading: [
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
            "Neuroscience: Past, Present, and Future",
            "Neurons and Glia",
            "The Neuronal Membrane at Rest",
            "The Action Potential",
            "Synaptic Transmission",
            "Neurotransmitter Systems",
            "The Structure of the Nervous System",
            "Mid-term Exam",
            "The Chemical Senses",
            "자유주제",
            "The Eye",
            "The Central Visual systems",
            "The Auditory and Vestibular Systems",
            "The Somatosensory Systyem: Touch, Pain, Itch",
            "자유주제",
            "Final-term Exam"
        ],
        textbook: "Neuroscience : exploring the brain (Jones ＆ Bartlett Learning	/ 2016)"
    }
  },
  {
    id: "LS306-01",
    name: "신경과학II(이)",
    prof: "현정호, 이효상, 최한경",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공필수" },
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-L21",
        contact: {
            email: "jungho.hyun@dgist.ac.kr",
            phone: "053-785-6175",
            office: "None",
            office_hours: "Upon Request"
        },
        summary: "신경과학 II는 『Neuroscience: Exploring the Brain』에서 Part III “The Brain and Behavior”와 Part IV “The Changing Brain”에 해당하는 내용을 중심으로, 뇌가 어떻게 동기·감정·수면·언어·정신질환 등 고차 행동과 정신 기능을 생성하는지 다루는 과목이다. 화학적 신경조절, 동기와 보상, 성과 뇌, 정서·수면·언어·주의·의식의 신경기전, 정신질환의 신경생물학적 기초를 학습한 뒤, 발달과 가소성에 초점을 맞추어 뇌 배선(wiring), 기억 시스템, 학습과 기억의 분자 기전까지를 폭넓게 다룬다. 강의와 더불어 교과서 내 ‘박스(Box)’ 논문을 학생 발표 및 토론 형식으로 진행함으로써, 최신 연구 결과를 비판적으로 읽고 발표·토의 능력을 기르는 것을 목표로 한다.",
        methods: ["Presentation", "Team teaching"],
        materials: "None",
        policies: "Cell phones should be turned off or set to silent mode during class. No texting or browsing on phones during class. Laptops/tablets should only be used for course-related activities.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Etc", percent: 10 },
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
            "1주차:과목 소개 및 강의 개요 (Course Overview, 발표자 배정 및 수업 운영 안내)",
            "2주차:Chapter 14: Brain Control of Movement",
            "3주차:Chapter 15 Chemical Control of the Brain and Behavior",
            "4주차:Chapter 16 Motivation",
            "5주차:Chapter 17 Sex and the Brain",
            "6주차:Chapter 18 Brain Mechanisms of Emotion",
            "7주차:Chapter 19 Brain Rhythms and Sleep",
            "8주차:Mid-term",
            "9주차:Chapter 20 Language",
            "10주차:Chapter 21 The Resting Brain, Attention, and Consciousness",
            "11주차:Chapter 22 Mental Illness",
            "12주차:Chapter 23 Wiring the Brain",
            "13주차:Chapter 24 Memory Systems",
            "14주차:Chapter 25 Molecular Mechanisms of Learning and Memory",
            "15주차: Self-Review",
            "16주차:Final-term"
        ],
        textbook: ["Principles of Neural Science, Neuroscience: Exploring the Brain, 4th ed. (Mark Bear, Connors, Paradiso / n.d.)","Principles of Neural Science	(Eric Kandel / n.d.)"]
    }
  },
  {
    id: "LS308-01",
    name: "생화학I(이)",
    prof: "김진해, 김유리, 이종찬, 이재민",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "생명과학": "전공필수", "뇌과학": "전공필수" },
    times: [{ day: 0, start: 16.5, duration: 1.5 }, { day: 2, start: 16.5, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-241",
        contact: {
            email: "jinhaekim@dgist.ac.kr",
            phone: "053-785-1770",
            office: "E6-613",
            office_hours: "None"
        },
        summary: "본 강의에서는 단백질, 탄수화물, 핵산, 그리고 지질 등의 합성 및 분자적 구조를 포함하여 이들 구성 물질들 간의 생물학적 기능의 연관성을 화학적 반응을 통해 이해하고, 이를 토대로 생명현상을 분자 수준에서 이해하고자 하는 데에 강의 목적을 두고 있음",
        methods: ["Presentation", "Project"],
        materials: "[교재] Lehninger, Principle of Biochemistry, 8th 및 각 수업에 적합하다고 판단되는 논문",
        policies: "절대 평가 [A+ ~ A-]  80점 이상  [B+ ~ B-]  60점 이상  [C+ 이하]  60점 미만  (위의 기준은 시험 난이도에 따라 변경될 수 있음)",
        grading: [
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 },
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "Ch1. Foundation of Biochemistry",
            "Ch2. Water",
            "Ch3. Amino Acids, Peptides, and Proteins",
            "Ch4. The Three-Dimensional Structure of Proteins",
            "Ch5. Protein Function",
            "Ch6. Enzymes 1",
            "Ch6. Enzymes 2",
            "중간고사",
            "Ch7. Carbohydrates and Glycobiology",
            "Ch8. Nucleotides and Nucleic Acids",
            "Ch9. DNA-Based Information Technologies",
            "Ch10. Lipids",
            "Ch11.  Biological Membranes and Transport",
            "Ch12. Biosignaling 1",
            "Ch12. Biosignaling 2",
            "기말고사"
        ],
        textbook: "Lehninger principles of biochemistry (Cox, Michael M. / 2021)"
    }
  },
  {
    id: "LS312-01",
    name: "의약품공학(이)",
    prof: "예경무, 이병훈",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E4-113",
        contact: {
            email: "None", 
            phone: "053-785-1760",
            office: "None",
            office_hours: "None"
        },
        summary: "Pharmaceuticals are largely classified into chemical drugs based on synthetic chemicals and bio-pharmaceuticals based on biological materials. In this lecture, you will learn about the types and characteristics of representative drugs, medical applications, and development strategies. In this lecture, Professor Byung-Hoon Lee, Ph.D, an expert in the development of chemical drugs based on protein degradation  and Professor Kyungmoo Yea, Ph.D, an expert in the development of bio-pharmaceuticals based on antibodies and exosomes, collaborate to cover a wide range of knowledge in the pharmaceutical field.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Cell phones should be turned off or set to silent mode during class. No texting or browsing on phones during class. Laptops/tablets should only be used for course-related activities.",
        grading: [
            { name: "Class Participation", percent: 20 },
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
            "1주차:Course introduction",
            "2주차:Introduction of bio- pharmaceuticals",
            "3주차:Protein therapeutics:Antibody, recombinant protein drugs",
            "4주차:Protein library construction and screening/selection",
            "5주차:Antibody engineering-I",
            "6주차:Antibody engineering-II",
            "7주차:Application of antibody engineering",
            "8주차:Mid-term exam",
            "9주차:Introduction of chemical drugs",
            "10주차:History of natural products and chemical drugs",
            "11주차:Nobel Prize awarded drugs",
            "12주차:Drug discovery: targets",
            "13주차:Drug discovery: screening",
            "14주차:Drug development",
            "15주차:Innovation drugs: targeted protein degradation",
            "16주차:Final exam"
        ],
        textbook: [
            "None"
        ]
    }
  },
  {
    id: "LS314-01",
    name: "생명과학 노벨상 수상의 위대한 발견(이)",
    prof: "이병훈, 이송이",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-229",
        contact: {
            email: "byung-hoon_lee@dgist.ac.kr",
            phone: "053-785-1730",
            office: "E4-610",
            office_hours: "Upon request"
        },
        summary: "발명가이자 사업가인 Alfred Nobel의 유지를 받들어 설립된 노벨상은 1901년 첫 시상이후 지금까지 “인류에게 가장 큰 혜택을 준 이들의 생애 업적”을 기리기 위해 생리·의학, 물리학, 화학, 문학, 평화, 경제학 6개 분야에서 수여되는 과학계 최고 권위를 상징하는 상으로 자리매김해왔다.  본 ‘생명과학 노벨상 수상의 위대한 발견’ 과목은 생명과학 역사에 이정표를 세운 중대한 발견들에 수여된 노벨상 사례들을 짚어 보면서 생명과학트랙 학부생들의 흥미와 동기를 고취시키기 위한 필수 교과목으로 개설하였다.  역대 노벨 생리·의학상, 노벨화학상 수상에서 인류 생명과학 역사를 바꾼 위대한 발견들을 선별하여 이에 대한 발견 이야기, 의미, 가치를 알아보고자 하며, 이러한 수상을 이끈 발견이 이루어진 시점과 비교해 해당 발견이 현재 생명과학분야에서 차지하는 입지와 현황, 미래의 전망과 응용 가능성 등에 대해서도 학습한다.  중요하게도 수강 학생들이 미래에 노벨상 수상을 할 만한 생명과학연구 주제와 발견들이 무엇일지 스스로 고찰해 보고, 합리적인 논리에 근거해서 예측 및 제안할 수 있도록, 팀프로젝트 수행과 발표도 수행하여 자기 주도적인 수업으로 구성하고자 한다.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "교수자 자체 제작 강의자료 활용",
        policies: "● 수업 중 laptop, tablet 등 컴퓨터 및 셀폰 기기 사용은 원칙적으로 허용되지 않음. 위와 같은 기기를 수업과 상관없는 용도로 수업 중에 사용할 시 경고 없이 감점을 부여함. ● 학점은 DGIST 학사 규정에 의거해 절대평가를 통해 부여됨.",
        grading: [
            { name: "Class Participation", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Term Project", percent: 40 },
            { name: "Final exam", percent: 20 },
            { name: "Midterm exam", percent: 20 }
        ],
        schedule: [
            "Introduction of the course",
            "DNA discovery - the 1st revolution in modern biology and its dark sides",
            "When healthy cells are programmed to commit suicide",
            "The aesthetics of destruction - chemical kiss of death and self-eating of proteins",
            "Back to the past - cell fate reset toward the stemness",
            "How cells sense and adapt to oxygen levels?",
            "Revolutionary analytical methods for biomolecules",
            "Mid-term examination",
            "Glowing proteins - a guiding star for biochemistry",
            "Harnessing the power of evolution for tailoring enzymes and antibodies",
            "Genetic scissors: a tool for rewriting the code of life",
            "Bioorthogonal Click chemistry: seamless coupling reactions in living systems",
            "Cracking the code for proteins’ structures – How AI crafts nature’s building blocks",
            "r presentation 1",
            "r presentation 2",
            "Final examination"
        ],
        textbook: [
            "교수자 자체 제작 강의자료 활용 (n.n. / n.d.)"
        ]
    }
  },
  {
    id: "LS403-01",
    name: "발생 및 발달생물학(이)",
    prof: "백명인, 유성운, 곽준명",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공선택" },
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L22",
        contact: {
            email: "bmi008@dgist.ac.kr",
            phone: "053-785-6162",
            office: "E4-511",
            office_hours: "None"
        },
        summary: "본 수업은 생명체를 구성하는 각 기관들이 배아 및 태어난 이후에 어떻게 생성 및 변화과정을 거쳐 형성되는 지, 그리고 시스템 수준에서 한 개체의 작동 기작에 대한 내용을 다루게 됨  (This course will cover how each organ that constitutes a living organism is generated and transformed during the embryonic stage and after birth, as well as the mechanisms of operation at the system level in an individual.)",
        methods: ["Lecture", "Presentation", "Discussion", "Team teaching"],
        materials: "None",
        policies: "수업 중 강의자료참조 이외의 목적으로 컴퓨터, 휴대전화, 테블릿 PC 등을 사용금지.  (Apart from class-related activities, the use of computers, cell phones, and tablet PCs is not permitted during class.)",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
            { name: "Attendance", percent: 10 },
            { name: "Midterm exam", percent: 30 }
        ],
        schedule: [
            "Introduction, Vertebrate Life Cycles and Exp. Techniques",
            "Development of Xenopus and Zebrafish",
            "Development of Chick and Mouse",
            "Development of Nematodes and Sea Urchins, Morphogenesis of Early Embryos",
            "Exam1",
            "Development of Drosophila 1",
            "Development of Drosophila 2",
            "Mid-term period (no class)",
            "Development of Plants 1",
            "Development of Plants 2",
            "Exam 2m, Cell Differentiation and Stem Cells",
            "Germ Cells, Fertilization, and sex determination",
            "Organogenesis",
            "Development of the Nervous System",
            "Growth, Post-Embryonic  Development and Regeneration",
            "Exam 3"
        ],
        textbook: [
            "Principles of development (Wolpert, L / 2019)"
        ]
    }
  },
  {
    id: "LS406-01",
    name: "의생명공학(이,공)",
    prof: "이광",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 4, start: 9, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-235",
        contact: {
            email: "klee@dgist.ac.kr",
            phone: "053-785-6170",
            office: "E4-313",
            office_hours: "None"
        },
        summary: "본 강의에서는 최신 의생명공학 관련 기반 기술의 원리를 알아보고 이를 접목하여 진행되고 있는 최신 연구와 치료에 대한 응용 방법들을 학습함.",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Paper Presentation", percent: 10 },
            { name: "Attendance", percent: 10 },
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 40 }
        ],
        schedule: [
            "1주차:Introduction of Biomedical Engineering",
            "2주차:Neural engineering (in-vitro). part1",
            "3주차:Neural engineering (in-vivo). part2",
            "4주차:Neural engineering (in-vivo). part3",
            "5주차:Biomaterials",
            "6주차:Nucleic acid engineering. part1",
            "7주차:Nucleic acid engineering. part2",
            "8주차:Mid term",
            "9주차:Nanobiotechnology. part1",
            "10주차:Nanobiotechnology. part2",
            "11주차:Bio-MEMS",
            "12주차:Drug delivery",
            "13주차:3D Bioengineering",
            "14주차:Student presentation. part1",
            "15주차:Student presentation. part2",
            "16주차:Final term"
        ],
        textbook: [
            "None"
        ]
    }
  },
  {
    id: "LS407a-01",
    name: "인체생리학(이)",
    prof: "이재민, 김은경",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E4-406",
        contact: {
            email: "jaeminlee@dgist.ac.kr",
            phone: "053-785-1750",
            office: "E4-609",
            office_hours: "None"
        },
        summary: "The Human Physiology course provides basic knowledge on our body's diverse tissues' structure and function and their regulatory communication to maintain homeostasis. It will also teach students about the impact of physiological homeostasis on human diseases, as well as recent experimental knowledge.",
        methods: ["Lecture", "Discussion", "Peer teaching"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Final exam", percent: 45 },
            { name: "Midterm exam", percent: 45 }
        ],
        schedule: [
            "Cell Physiology",
            "Muscle Physiology",
            "Sensory Physiology",
            "Cardiovascular Physiology",
            "Neurophysiology",
            "Neurophysiology",
            "The Midterm Exam",
            "The Endocrine system",
            "Respiratory Physiology",
            "The Kidneys and Regulation of Water and Inorganic Ions",
            "The Digestion and Absorption of Food",
            "Regulation of Organic Metabolism and Energy Balance",
            "Reproduction",
            "The Immune System",
            "The Final Exam"
        ],
        textbook: [
            "Animal Physiology, 4th ed. (Richard W. Hill, Gordon A. Wyse, Margaret Anderson / 2016)",
            "Vander's Human Physiology: The Mechanisms of Body Function, 16th ed. (Eric Widmaier, Hershel Raff, Kevin Strang / 2022)"
        ]
    }
  },
  {
    id: "LS410-01",
    name: "현대 미생물학(이)",
    prof: "김유리, 정찬",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 14.5, duration: 1.5 }, { day: 2, start: 14.5, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-229",
        contact: {
            email: "None",
            phone: "053-785-1650",
            office: "None",
            office_hours: "None"
        },
        summary: "최근 우리 사회는 코로나19 바이러스로 인해 큰 변화와 위협을 받아 왔다. 바이러스를 비롯하여 우리 눈에 보이지 않는 미생물들은 여러 측면에서 우리들의 일상생활에 깊게 관여하고 있다. 미생물에 관한 연구는 생명과학과 유전공학의 발전과 인간 질병의 원인이 되는 수많은 감염병의 치료제 개발에도 크게 기여를 해왔다. 본 강의에서는 다양한 미생물의 구조 및 기능적 특성들과 이를 응용한 유전공학에 대해 배우고, 인류를 위협해온 감염병의 원인이 되는 세균과 바이러스 및 그에 대한 인간의 방어체계에 대해 다루게 된다.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 }
        ],
        schedule: [
            "1주차:Overview: 사람과 미생물의 동거",
            "2주차:미생물의 세포 구조 및 기능",
            "3주차:미생물의 대사와 조절",
            "4주차:미생물과 우리의 일상생활",
            "5주차:병원성 미생물과 항생제",
            "6주차:미생물 유전공학",
            "7주차:유전자가위 &amp; 생명윤리",
            "8주차:중간고사",
            "9주차:코로나19, HIV, 그리고 인류를 위협해온 바이러스들",
            "10주차:바이러스의 구조와 조립",
            "11주차:바이러스의 유전체와 다양성",
            "12주차:바이러스 감염의 탐지와 세포 반응",
            "13주차:선천적, 적응성 면역반응",
            "14주차:항바이러스 백신, 부작용, 그리고 윤리적 문제",
            "15주차:바이러스 벡터와 유전공학",
            "16주차:기말고사"
        ],
        textbook: [
            "Brock Biology of Microorganisms, 15th (n.n. / n.d.)"
        ]
    }
  },
  {
    id: "LS411-01",
    name: "계산뇌과학입문(이)",
    prof: "유우경, 김민환",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공선택" },
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E4-113",
        contact: {
            email: "wkyu@dgist.ac.kr",
            phone: "053-785-6152",
            office: "E4-514",
            office_hours: "수시 사전 약속"
        },
        summary: "This course covers essential concepts and methodologies for understanding how the brain processes information and generates behavior. Key topics include neural modeling, neural network architectures, synaptic plasticity, neuronal dynamics, learning and memory, and the application of computational techniques to study brain function. The course provides a foundation to understand and engage with the principles and computational methods used to simulate and analyze brain activity.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Cell phones should be turned off or set to silent mode during class.  No texting or browsing on phones during class.",
        grading: [
            { name: "Homework", percent: 80 },
            { name: "Class Participation", percent: 20 }
        ],
        schedule: [
            "1주차:Class Introduction",
            "2주차:preparation of simulation exercise",
            "3주차:A first simple neuron model",
            "4주차:The Hodgkin-Huxley model and detailed ion-current based neuron models",
            "5주차:Synapses, dendrites and the cable equation",
            "6주차:Two-dimensional models and phase plane analysis",
            "7주차:Modern phenomenological neuron models",
            "8주차:Mid-term exam",
            "9주차: Neuronal Populations",
            "10주차:Fokker-Planck equation for stochastic integrate-and-fire neurons",
            "11주차:Associative Memory in a Network of Neurons",
            "12주차:Attractor Networks and Generalizations of the Hopfield model",
            "13주차:Continuum models: Cortical Fields and Perception",
            "14주차:Decision models: Competitive Dynamics",
            "15주차: Synaptic plasticity and learning",
            "16주차:Final exam"
        ],
        textbook: [
            "Neuronal Dynamics : From Single Neurons to Networks and Models of Cognition (Paperback) (Gerstner, Wulfram / n.d.)"
        ]
    }
  },
  {
    id: "LS412-01",
    name: "뇌질환(이)",
    prof: "이성배",
    credit: 3,
    categories: ["생명과학"],
    fixedTypes: ["전공선택"],
    trackRelations: { "생명과학": "전공선택", "뇌과학": "전공선택" },
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "50",
        classroom: "E7-235",
        contact: {
            email: "sblee@dgist.ac.kr",
            phone: "053-785-6122",
            office: "None",
            office_hours: "None"
        },
        summary: "This class covers the current updates on the representative neurological diseases, including Alzheimer's Disease, Parkinson's disease, and so on.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Final exam", percent: 45 },
            { name: "Attendance", percent: 10 },
            { name: "Midterm exam", percent: 45 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Neurobiology of Disease 2nd edition (n.n. / n.d.)",
            "Principles of Neural Science 6th edition (n.n. / n.d.)"
        ]
    }
  },
  {
    id: "MECH201-01",
    name: "고체역학(공)",
    prof: "장경인",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 1.5 }, { day: 2, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "0",
        classroom: "E7-L31",
        contact: {
            email: "kijang@dgist.ac.kr",
            phone: "053-785-6218",
            office: "E5-410",
            office_hours: "None"
        },
        summary: "The course covers mechanical topics in statics, force and moments, mechanics of deformable bodies, force-stress equilibrium, displacement, linear elasticity, bending, torsion, etc.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Textbook based lecture",
        grading: [
            { name: "Midterm exam", percent: 45 },
            { name: "Final exam", percent: 45 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Mechanics of Materials (Barry J. Goodno, James M. Gere / n.d.)"
        ]
    }
  },
  {
    id: "MECH301-01",
    name: "인간과 공학(공)",
    prof: "김회준, 이성민, 박준혁, 남강현, 정소현, 김기섭",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 4, start: 13, duration: 3 }],
    syllabus: {
        capacity: "0",
        classroom: "E7-L21",
        contact: {
            email: "None",
            phone: "053-785-6221",
            office: "E5-613",
            office_hours: "None"
        },
        summary: "● 종래 산업 현장에 국한되었던 로봇 기술이 AI, 나노 및 마이크로 공학의 비약적인 발전과 함께 일상생활의 영역으로 확장되고 있다. 공상과학 영화에서만 존재하던 '로봇과 함께하는 삶'이 현실화됨에 따라, 로봇은 단순한 도구를 넘어 인간과 공존하고 나아가 신체와 융합하는 단계로 진화하고 있다. ● 본 강좌는 이러한 기술적 변곡점에서 로봇및기계전자공학 분야의 전문 연구자들이 팀티칭을 통해 최신 공학 기술과 그 속에 담긴 인문학적 가치를 소개한다. 구체적으로는 1) 로봇의 인지와 판단을 위한 3D Vision & Spatial AI, 2) 이동의 혁신을 다루는 자동차공학의 현재와 미래 및 Future Aerial Mobility, 3) 인간 신체 보조 및 확장을 위한 웨어러블 및 보조로봇, 4) 기술 구현의 물리적 기초가 되는 유체와 고체 사이의 공학, 5) 인체와 기계의 미세한 접점을 다루는 인간과 나노공학 등 6가지 핵심 주제를 심도 있게 다룬다. ● 수강생들은 각 분야의 최신 기술 현황을 습득함은 물론, 이러한 공학 기술이 인간의 삶과 신체에 미치는 영향을 다각도로 이해함으로써 미래 공학자가 갖추어야 할 통찰력과 윤리적 사고를 함양하게 될 것이다.",
        methods: ["Lecture", "Peer teaching"],
        materials: "● 긍정적 마인드",
        policies: "● 적극적인 수업 참여 권장",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Quiz", percent: 80 }
        ],
        schedule: [
            "3D Vision & Spatial AI 1",
            "3D Vision & Spatial AI 2",
            "Future Aerial Mobility 1",
            "Future Aerial Mobility 2",
            "Future Aerial Mobility 3",
            "자동차공학의 현재와 미래 1",
            "자동차공학의 현재와 미래 2",
            "중간고사 기간",
            "유체와 고체 사이의 공학 1",
            "유체와 고체 사이의 공학 2",
            "인간과 나노공학 1",
            "인간과 나노공학 2",
            "인간과 나노공학 3",
            "웨어러블 및 보조로봇 1",
            "웨어러블 및 보조로봇 2",
            "기말고사 기간"
        ],
        textbook: [
            "None"
        ]
    }
  },
  {
    id: "MECH306-01",
    name: "진동공학(공)",
    prof: "임용섭",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E5-116",
        contact: {
            email: "None",
            phone: "053-785-6622",
            office: "E5-408",
            office_hours: "None"
        },
        summary: "This course is an introduction to engineering vibration of lumped-parameter models of diverse mechanical systems (e.g., robotics and mobility systems). Topics covered include the response to the harmonic excitation, free and forced vibration of linear multi-degree of freedom models of mechanical systems and matrix eigenvalue problems. It also includes design methods for vibration suppression, vibration testing and experimental modal analysis. Application to the design of mechanical structures such as robotic arms and legs, suspension system for an autonomous & electrical vehicle and diverse vibrational engineering systems. In particular, this course contains to conduct the team-based project. Each team should select problems from the real world. Based on the theory learned in the class, each team will have an opportunity to solve the real problems for diverse vibrational systems – simplify problems, derive equations, obtain solutions and make several presentations.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Term Project 1", percent: 10 },
            { name: "Term Project 2", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 },
        ],
        schedule: [
            "Class Introduction and Overview, Introduction of Engineering Vibrations",
            "Key attributes of Vibration, Harmonic Motion",
            "Vibration System Modeling, System measurement and simulation",
            "Proposal Presentation",
            "None",
            "Response to Harmonic Excitation, Base Excitation",
            "Rotating Unbalance & Measyrement Devices, Other Damping & Numerical Simulation",
            "Mid-term exam",
            "Forced Response 1",
            "Forced Response 2",
            "Multi-degree of Freedom Systems 1",
            "Multi-degree of Freedom Systems 2",
            "Case Studies of Diverse Vibrational Systems",
            "Special Invited Talk: Real World Problems & Solutions",
            "Final Presentation",
            "No Final Exam"
        ],
        textbook: [
            "Engineering Vibration 5th edition (Daniel J. Inman / 2021)"
        ]
    }
  },
  {
    id: "MECH309-01",
    name: "자동제어시스템(공)",
    prof: "박석호",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "기계공학": "전공필수", "전자공학": "전공선택" },
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "50",
        classroom: "E7-L20",
        contact: {
            email: "shpark12@dgist.ac.kr",
            phone: "053-6214-6214",
            office: "E5-511",
            office_hours: "None"
        },
        summary: "This course introduces the dynamic modeling and design of automatic control systems as applied to a variety of systems: including not only mechanical and electrical control systems but also chemical reaction process control and biological response and adjusting systems. Students will study characteristics by transfer function between input and output for the automatic control systems. Topics include the properties and advantages of feedback control (e.g., PID) control systems, time-domain and frequency-domain performance measures, stability and degree of stability, the Root Locus method, Bode diagram, Nyquist criterion, frequency-domain design analysis.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 10 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
            { name: "Term Project", percent: 20 }
        ],
        schedule: [
            "1주차:Overview and Important Concepts",
            "2주차:Modeling of Dynamics I: Mechanical and Electrical Systems",
            "3주차:Modeling of Dynamics II: Electro-Mechanical Systems",
            "4주차:Feedback Control &amp; PID Control Design",
            "5주차:Feedback Control &amp; PID Control Design",
            "6주차:PID Control &amp; Applications",
            "7주차:PID Control Tuning: Ziegler-Nichols Method",
            "8주차:Midterm Exam",
            "9주차:Controller Design I: Root Locus Method",
            "10주차:Controller Design II: Pole Placement",
            "11주차:System Response and Time Domain Analysis",
            "12주차:Frequency Response Analysis",
            "13주차:Stability Analysis",
            "14주차:Case Studies: Control System Designs &amp; Applications",
            "15주차:Review",
            "16주차:Final Exam"
        ],
        textbook: [
            "Introduction to Control Engineering (Yong Seob Lim / n.d.)"
        ]
    }
  },
  {
    id: "MECH311-01",
    name: "유체역학(공)",
    prof: "정소현",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "기계공학": "전공필수", "화학공학": "전공선택" },
    times: [{ day: 2, start: 17.5, duration: 3 }],
    syllabus: {
        capacity: "50",
        classroom: "E7-L20",
        contact: {
            email: "shpark12@dgist.ac.kr",
            phone: "053-6214-6214",
            office: "E5-511",
            office_hours: "None"
        },
        summary: "This course introduces the dynamic modeling and design of automatic control systems as applied to a variety of systems: including not only mechanical and electrical control systems but also chemical reaction process control and biological response and adjusting systems. Students will study characteristics by transfer function between input and output for the automatic control systems. Topics include the properties and advantages of feedback control (e.g., PID) control systems, time-domain and frequency-domain performance measures, stability and degree of stability, the Root Locus method, Bode diagram, Nyquist criterion, frequency-domain design analysis.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Class Participation", percent: 10 },
            { name: "Homework", percent: 10 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
            { name: "Term Project", percent: 20 }
        ],
        schedule: [
            "1주차:Overview and Important Concepts",
            "2주차:Modeling of Dynamics I: Mechanical and Electrical Systems",
            "3주차:Modeling of Dynamics II: Electro-Mechanical Systems",
            "4주차:Feedback Control &amp; PID Control Design",
            "5주차:Feedback Control &amp; PID Control Design",
            "6주차:PID Control &amp; Applications",
            "7주차:PID Control Tuning: Ziegler-Nichols Method",
            "8주차:Midterm Exam",
            "9주차:Controller Design I: Root Locus Method",
            "10주차:Controller Design II: Pole Placement",
            "11주차:System Response and Time Domain Analysis",
            "12주차:Frequency Response Analysis",
            "13주차:Stability Analysis",
            "14주차:Case Studies: Control System Designs &amp; Applications",
            "15주차:Review",
            "16주차:Final Exam"
        ],
        textbook: [
            "Introduction to Control Engineering (Yong Seob Lim / n.d.)"
        ]
    }
  },
  {
    id: "MECH313-01",
    name: "로봇전자공학(공)",
    prof: "박경서",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 16, duration: 1.5 }, { day: 2, start: 16, duration: 1.5 }],
    syllabus: {
        capacity: "20",
        classroom: "E5-217",
        contact: {
            email: "kspark@dgist.ac.kr",
            phone: "053-785-6242",
            office: "E5-609",
            office_hours: "None"
        },
        summary: "기계공학 및 로봇공학에서 필수적인 회로의 원리와 응용을 다룬다.",
        methods: ["Lecture", "Presentation", "Project", "Experiment"],
        materials: "노트북",
        policies: "자료 열람 외 다른 목적으로 전자기기 사용 금지, 무단 결석 6번은 F 부여.",
        grading: [
            { name: "Homework", percent: 30 },
            { name: "Term Project", percent: 20 },
            { name: "Term Project", percent: 40 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "1주차:Orientation / Recap",
            "2주차:PCB design / Lab 1 (KiCAD)",
            "3주차:Voltage regulation / Lab2 (voltage regulation)",
            "4주차:Sensor electronics / Lab3 (sensor electronics)",
            "5주차:Motor electronics / Lab4 (motor electronics)",
            "6주차:Microcontroller / Lab5 (arduino on a breadboard)",
            "7주차:Serial communication / Lab6 (serial communication)",
            "8주차:Midterm project: create your own arduino PCB",
            "9주차:Final project: week 1",
            "10주차:Final project: week 2",
            "11주차:Final project: week 3",
            "12주차:Final project: week 4",
            "13주차:Final project: week 5",
            "14주차:Final project: week 6",
            "15주차:Final project: week 7",
            "16주차:Final presentation"
        ],
        textbook: [
            "Practical Electronics for Inventors (P. Scherz & S. Monk / 2016)"
        ]
    }
  },
  {
    id: "MECH401-01",
    name: "로봇동역학 및 제어(공)",
    prof: "황민호",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-G01",
        contact: {
            email: "gkgk1215@gmail.com",
            phone: "None",
            office: "None",
            office_hours: "None"
        },
        summary: "The course gives a thorough understanding of the kinematics, dynamics, mechanism design, and motion control of robot manipulators. Students will develop proficiency in using homogeneous transformation for complex kinematic structures, in analyzing forward and inverse dynamics of linked mechanisms, and developing motion control techniques for machines. The course covers practical issues of the manipulators in various applications such as medical robots, industrial robots, machine tool, etc. The course will conclude with practical applications, emerging topics, and future directions in robotics.",
        methods: ["Lecture", "Presentation"],
        materials: "N.A.",
        policies: "N.A.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 10 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 },
            { name: "Homework", percent: 20 }
        ],
        schedule: [
            "Introduction",
            "Spatial descriptions and transformations",
            "Transform (cont.), Denavit-Hatenberg notation",
            "Forward/inverse kinematics",
            "Jacobians",
            "Singularity, Statics",
            "Midterm exam",
            "Trajectory planning",
            "Dynamics: Newton-Euler",
            "Dynamics: Lagrangian",
            "Robot Components",
            "Robot Control I",
            "Robot Control II",
            "Special Topic: Surgical Robotics"
        ],
        textbook: [
            "Introduction to robotics: mechanics and control (John Craig / n.d.)",
            "Modern Robotics (Kevin M. Lynch, Frank C. Park / n.d.)"
        ]
    }
  },
  {
    id: "MECH402-01",
    name: "마이크로/나노공학(공)",
    prof: "이재홍",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-229",
        contact: {
            email: "jaelee@dgist.ac.kr",
            phone: "053-785-6228",
            office: "E5-611",
            office_hours: "None"
        },
        summary: "This course introduces overall history and development of microelectromechanical system (MEMS). Main components including sensors and actuators and microfabrication process for the MEMS will be mainly provided in addition to relevant theoretical basics and applications.",
        methods: ["Lecture", "Presentation"],
        materials: "None",
        policies: "- To come to class on time - Not to use cell phones during class - To turn on the screen during class to check attendance (Online-class)",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Class Participation", percent: 15 },
            { name: "Term Project", percent: 30 },
            { name: "Final exam", percent: 45 }
        ],
        schedule: [
            "1주차:Introduction to MEMS",
            "2주차:First-pass introduction to microfabrication",
            "3주차:First-pass introduction to microfabrication",
            "4주차:Review of Essential Electrical and Mechanical Concepts",
            "5주차:Electrostatic Sensing and Actuators",
            "6주차:Thermal Sensing and Actuation",
            "7주차:Midterm exam",
            "8주차:Piezoresistive Sensors",
            "9주차:Piezoelectric Sensing and Actuation",
            "10주차:Magnetic Actuation",
            "11주차:Summary of Sensing and Actuation Methods",
            "12주차:Bulk Micromachining and Silicon Anisotropic Etching",
            "13주차:Surface Micromachining",
            "14주차:Polymer MEMS",
            "15주차:Biosensors",
            "16주차:Final exam"
        ],
        textbook: [
            "Foundations of MEMS (Chang Liu / 2012)"
        ]
    }
  },
  {
    id: "MECH405-01",
    name: "열전달(공)",
    prof: "최경호",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-L20",
        contact: {
            email: "ghchoi@dgist.ac.kr",
            phone: "053-785-6608",
            office: "E7-207",
            office_hours: "None"
        },
        summary: "Mechanical engineers need a solid set of analytical and problem-solving skills as the foundation for tackling important societal issues relating to heat energy transfer. With dealing with theoretical and conceptual analysis of heat transfer, students in this course will learn that heat transfer phenomena is not only in our lives but also power device, refrigerators, electronic devices, building, and even food. In particular, based on the theory, a simple heat transfer project will be carried out.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "Mid-exam and final exams will be conducted open book & notebook, but will not be allowed discussion and communication through electro devices in the class.",
        grading: [
            { name: "Attendance", percent: 5 },
            { name: "Homework", percent: 15 },
            { name: "Term Project", percent: 25 },
            { name: "Final exam", percent: 30 },
            { name: "Midterm exam", percent: 25 }
        ],
        schedule: [
            "Overview of Heat and Mass Transfer, Introduction and Basic Concepts",
            "Heat Conduction Equation",
            "Steady Heat Conduction",
            "Transient Heat Conduction",
            "Project Review, Transient Multidimensional Conduction",
            "Numerical Methods in Heat Conduction",
            "Fundamentals of Convection",
            "Midterm exam",
            "External Forced Convection",
            "Internal Forced Convection",
            "Natural Convection",
            "Project Presentation",
            "Heat Exchanger",
            "Fundamentals of Thermal Radiation",
            "Radiation Heat Transfer",
            "Final exam"
        ],
        textbook: [
            "None"
        ]
    }
  },
  {
    id: "MECH407-01",
    name: "모빌리티공학개론(공)",
    prof: "이성민",
    credit: 3,
    categories: ["기계공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 16.5, duration: 1.5 }, { day: 3, start: 16.5, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E5-217",
        contact: {
            email: "leesm128@dgist.ac.kr",
            phone: "053-785-6235",
            office: "E5-208",
            office_hours: "None"
        },
        summary: "- 본 교과목은 이동체의 상태추정을 중심으로, 확률적 모델링과 추정 기법을 다루며, 최종적으로는 공중 이동체로 확장한다.",
        methods: ["Lecture", "Project", "Experiment"],
        materials: "None",
        policies: "- The use of electronic devices for purposes other than accessing materials is prohibited. Five unexcused absences will result in an automatic F grade. - Prerequisite courses: Dynamics (MECH203), Introduction to Control Engineering (MECH309)",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 30 },
            { name: "Midterm exam", percent: 25 },
            { name: "Final exam", percent: 35 }
        ],
        schedule: [
            "1주차:Ground mobile robot (1)",
            "2주차:Ground mobile robot (2)",
            "3주차:Linear systems theory",
            "4주차:Probability theory",
            "5주차:Least squares estimation",
            "6주차:Propagation of states and covariances",
            "7주차:Optimal state estimation",
            "8주차:Mid-term exam",
            "9주차:Coordinate system",
            "10주차:Sensor fusion",
            "11주차:Aerial mobility (1)",
            "12주차:Aerial mobility (2)",
            "13주차:Lab Class (1)",
            "14주차:Lab Class (2)",
            "15주차:Lab Class (3)",
            "16주차:Final demonstration"
        ],
        textbook: [
            "Principles of Dynamics (2nd Edition) (Donald T. Greenwood / 2008)",
            "Introduction to Autonomous Mobile Robots (2nd Edition) (Ronald Siegwart, Illah R. Nourbakhsh, Davide Scaramuzza / 2011)",
            "Optimal state estimation : Kalman, H [infinity] and nonlinear approaches (Simon, Dan / 2006)"
        ]
    }
  },
  {
    id: "MSE305a-01",
    name: "재료공학개론I(이,공)",
    prof: "이주혁",
    credit: 3,
    categories: ["재료공학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "50",
        classroom: "E7-L20",
        contact: {
            email: "jhlee85@dgist.ac.kr",
            phone: "053-785-6427",
            office: "E6-411",
            office_hours: "None"
        },
        summary: "The purpose of this course is to provide a conceptual framework for understanding the behavior of engineering (solid) materials by emphasizing important relationships between internal structure and properties. It attempts to present a general picture of the nature of materials and the mechanisms that act upon, modify, and control their properties. The subject matter is meant to provide prospective scientists with sufficient background and understanding to appreciate existing materials and to exploit new materials development effectively in energy-related research and engineering. This course has three main parts. The first part treats the internal structures of perfect solids including metals, ceramics, and polymers. The second part deals with defects in solids as well as kinetic problems of diffusion, and connected mechanical properties. The third part covers basic concept of equilibrium in solids (phase diagram), phase transformations, and structure control. We also have optional chapters of material properties of solids including electrical properties showing the relation to the structure.",
        methods: ["Lecture"],
        materials: "Calculator",
        policies: "Allow use of laptop during class.",
        grading: [
            { name: "Attendance", percent: 20 },
            { name: "Homework", percent: 20 },
            { name: "Midterm exam", percent: 30 },
            { name: "Final exam", percent: 30 }
        ],
        schedule: [
            "1주차:Introduction",
            "2주차:Atomic Structure and Bonding",
            "3주차:Atomic Structure and Bonding",
            "4주차:Introduction to Crystallography",
            "5주차:The Structure of Crystalline Solids",
            "6주차:The Structure of Crystalline Solids",
            "7주차:Structures of Polymers",
            "8주차:Midterm exam",
            "9주차:Defects in Solids",
            "10주차:Diffusion in Solids",
            "11주차:Diffusion in Solids",
            "12주차:Phase Diagram",
            "13주차:Phase Transformation",
            "14주차:Synthesis, Fabrication, and Processing of Materials",
            "15주차:Composites",
            "16주차:Final exam"
        ],
        textbook: [
            "Fundamentals of Materials Science and Engineering (William D. Callister / 2008)"
        ]
    }
  },
  {
    id: "MSE307-01",
    name: "재료공학실험(공)",
    prof: "김진수, 이성원, 이주혁, 이종수, 이신범",
    credit: 3,
    categories: ["재료공학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 2, start: 16.5, duration: 3 }, { day: 4, start: 13, duration: 3 }]
  },
  {
    id: "MSE402-01",
    name: "재료상변태(공)",
    prof: "김진수",
    credit: 3,
    categories: ["재료공학"],
    fixedTypes: ["전공필수"],
    trackRelations: { "재료공학": "전공필수", "물리학": "전공선택" },
    times: [{ day: 2, start: 10.5, duration: 1.5 }, { day: 4, start: 10.5, duration: 1.5 }]
  },
  {
    id: "MSE407-01",
    name: "재료의 기계적 거동(공)",
    prof: "김영규",
    credit: 3,
    categories: ["재료공학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 13.5, duration: 1.5 }, { day: 2, start: 13.5, duration: 1.5 }],
    syllabus: {
        capacity: "35",
        classroom: "E7-L20",
        contact: {
            email: "younggyu@dgist.ac.kr",
            phone: "053-785-6457",
            office: "E6-210",
            office_hours: "To be determined"
        },
        summary: "This course provides the theoretical foundation needed to understand and control the mechanical behaviors of materials as a material scientist and/or engineer.",
        methods: ["Lecture"],
        materials: "N/A",
        policies: "Absences without penalty are permitted for specific reasons, including but not limited to: documented medical emergencies, family emergencies, and reserve forces training. If an emergency causes you to miss a graded activity (such as a midterm or final exam), you must contact the instructor immediately before the graded activity.",
        grading: [
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 },
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "Mathematical foundations: stress, strain, and tensor mechanics",
            "Elasticity, viscoelasticity and how to model them 1",
            "Elasticity, viscoelasticity and how to model them 2",
            "The onset of permanent deformation (plasticity and yield criteria)",
            "Mechanisms of plastic deformation in crystalline materials (Slips and dislocations) 1",
            "Mechanisms of plastic deformation in crystalline materials (Slips and dislocations) 2",
            "Mechanisms of plastic deformation in crystalline materials (Slips and dislocations) 3",
            "Midterm exam",
            "Time-dependent plastic deformation under sustained load (Creep) 1",
            "Time-dependent plastic deformation under sustained load (Creep) 2",
            "Fracture: Macroscopic and microscopic aspects 1",
            "Fracture: Macroscopic and microscopic aspects 2",
            "Failure under repeated loading (Fatigue)",
            "Case studies (metals, ceramics, polymers, etc) 1",
            "Case studies (metals, ceramics, polymers, etc) 2",
            "Final exam"
        ],
        textbook: [
            "Mechanical Behavior of Materials (Thomas H. Courtney / 2016)",
            "Mechanical Behavior of Materials (Marc A. Meyers, Krishan Chawla / 2025)",
            "Mechanical Behavior of Materials (William F. Hosford / 2009)",
            "Mechanical Behavior of Materials (Norman E. Dowling,  Stephen L. Kampe,  Milo V. Kral / 2019)",
            "Mechanical Metallurgy (George E. Dieter, Jr. / 1989)",
            "Deformation and Fracture Mechanics of Engineering Materials (Richard W. Hertzberg, Richard P. Vinci, Jason L. Hertzberg / 2021)",
            "Introduction to Dislocations (Derek Hull, D. J. Bacon / 2011)",
            "The Basics of Crystallography and Diffraction (Christopher Hammond / 2009)",
            "Structure of Materials: An Introduction to Crystallography, Diffraction and Symmetry (Marc De Graf, Michael E. Mchenry / 2021)",
            "Introduction to Solid Mechanics (Irving H. Shames, J. M. Pitarresi / 2009)"
        ]
    }
  },
  {
    id: "PHY202a-01",
    name: "해석역학I(이,공)",
    prof: "이재동",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 0, start: 16, duration: 1.5 }, { day: 2, start: 16, duration: 1.5 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-G02",
        contact: {
            email: "jdlee@dgist.ac.kr",
            phone: "053-785-6510",
            office: "E2-312",
            office_hours: "상시"
        },
        summary: "Beyond the general physics, fundamentals of Newtonian mechanics will be treated in more analytical and mathematical respects, focusing on coordinates and vectors, rectilinear particle motions, oscillations, noninertial (rotating) system, and gravitation.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Honor code will be strictly enforced for all class related activities. Cell phones should be turned off during the class.",
        grading: [
            { name: "Midterm exam", percent: 35 },
            { name: "Final exam", percent: 35 },
            { name: "Homework", percent: 25 },
            { name: "Attendance", percent: 5 }
        ],
        schedule: [
            "Fundamental concepts 1",
            "Fundamental concepts 2",
            "Rectilinear motion of a particle 1",
            "Rectilinear motion of a particle 2",
            "Oscillations 1",
            "Oscillations 2",
            "Oscillations 3",
            "Midterm exam",
            "General motion a particle in three dimensions 1",
            "General motion a particle in three dimensions 2",
            "Noninertial Reference systems 1",
            "Noninertial Reference systems 2",
            "Gravitation and central forces 1",
            "Gravitation and central forces 2",
            "Gravitation and central forces 3",
            "Final exam"

        ],
        textbook: [
            "Classical Dynamics of Particles and Systems (5th Edition) (Thornton, Stephen T / 2003)",
            "Analytical mechanics (Fowles, Grant R / 2004)"
        ]
    }
  },
  {
    id: "PHY205a-01",
    name: "현대물리(이)",
    prof: "김소연",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 11, duration: 1.5 }, { day: 2, start: 11, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-L22",
        contact: {
            email: "soyeunk@dgist.ac.kr",
            phone: "053-785-6537",
            office: "E2-209",
            office_hours: "None"
        },
        summary: "현대물리학은 20세기 물리학의 패러다임이 고전역학에서 양자역학으로 넘어가는데에 결정적으로 기여한 양자론과 상대론적 개념을 현 물리학계 주요 분야로 응용되어 발전한 과학사적 맥락과 관련 개념을 포괄적으로 다룬다. 또한, 현대 물리의 발전이 양자 기술, 나노 기술, 재료공학에 끼치고 있는 영향을 대해 이해한다.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Attendance, homework, mid-term and final. 일반물리 1,2를 수강한 학생에게 권장됨.",
        grading: [
            { name: "Midterm exam", percent: 40 },
            { name: "Final exam", percent: 40 },
            { name: "Homework", percent: 10 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Modern physics for scientists and engineers (Thornton, Stephen T / 2013)"
        ]
    }
  },
  {
    id: "PHY302a-01",
    name: "고급물리 실험(이)",
    prof: "박기성, 김소연, 서정필",
    credit: 2,
    categories: ["물리학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 0, start: 13, duration: 2 }, { day: 2, start: 13, duration: 2 }],
    syllabus: {
        capacity: "8",
        classroom: "E2-219",
        contact: {
            email: "keeseong@dgist.ac.kr",
            phone: "053-785-6614",
            office: "E7-214",
            office_hours: "화 14:00-16:00"
        },
        summary: "본 교과목에서는 물리학이 지금의 모습으로 발전되기까지 중요한 역할을 한 실험들 특히 노벨상을 받은 실험들을 중심으로 그 실험내용을 공부하고 직접 실험해 본다. 학생들은 다양한 분야의 실험들 중에서 6종류의 실험을 자유롭게 선택할 수 있다.",
        methods: ["Experiment"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Quiz", percent: 10 },
            { name: "Etc", percent: 10 },
            { name: "Homework", percent: 60 },
            { name: "Paper Presentation", percent: 10 }
        ],
        schedule: [
            "오리엔테이션",
            "실험 1",
            "실험 2",
            "보충실험 및 토론",
            "실험 3",
            "중간시험 준비기간",
            "중간시험",
            "실험 4",
            "보충실험 및 토론",
            "실험 5",
            "실험 6",
            "보충실험 및 토론",
            "포스터 발표 준비",
            "포스터 발표",
            "기말시험"
        ],
        textbook: [
            "현대물리실험 (박기성, 김보현 / 2016)"
        ]
    }
  },
  {
    id: "PHY304-01",
    name: "양자역학I(이,공)",
    prof: "박기성",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공필수"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 1.5 }, { day: 2, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-223",
        contact: {
            email: "keeseong@dgist.ac.kr",
            phone: "053-785-6530",
            office: "E2-213",
            office_hours: "After Class"
        },
        summary: "This course covers the background of quantum mechanics, wave mechanics using Schrodinger equation for understanding fundamental assumptions, representation with operators and matrices, application to studying the physical properties of microscopic world including harmonic oscillators, angular momentum and spin, hydrogen atom, and others.",
        methods: ["Lecture", "Presentation", "Project"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 20 },
            { name: "Final exam", percent: 30 },
            { name: "Midterm exam", percent: 30 },
            { name: "Paper Presentation", percent: 10 }
        ],
        schedule: [
            "Orientation, Wave function 1",
            "Wave function 2",
            "Time-Independent Schrodinger equation 1",
            "Time-Independent Schrodinger equation 2",
            "Formalism 1",
            "Formalism 2",
            "Formalism 3",
            "Mid-term exam",
            "Quantum mechanics in 3D 1",
            "Quantum mechanics in 3D 2",
            "Quantum mechanics in 3D 3",
            "Identical particles 1",
            "Identical particles 2",
            "Identical particles 3s",
            "Final exam",
            "Reserve"

        ],
        textbook: [
            "Introductory Quantum Mechanics (Paperback, 4, Revised) (Liboff, Richard L. / 2002)",
            "Quantum physics (Gasiorowicz, Stephen / 2003)",
            "Introduction to quantum mechanics (Griffiths, David J / 2017)"
        ]
    }
  },
  {
    id: "PHY306-01",
    name: "수리물리(이)",
    prof: "최승호",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "20",
        classroom: "E7-L31",
        contact: {
            email: "schoe@dgist.ac.kr",
            phone: "053-785-6460",
            office: "E6-509",
            office_hours: "None"
        },
        summary: "We will cover various useful mathematical techniques for students who will study physics and related subjects.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "Infinite series, power series",
            "Complex numbers",
            "Linear algebra",
            "Partial differentiation",
            "Multiple integrals",
            "Vector analysis",
            "Fourier series and transforms",
            "Ordinary differential equations",
            "Calculus of variations",
            "Tensor analysis",
            "Special functions",
            "Series solutions of Diff. Eq.",
            "Partial Diff. Eq.",
            "Functions of a complex variables",
            "Prob. and statistics"
        ],
        textbook: [
            "Mathematical methods for physicists : a comprehensive guide (Arfken, George B / 2013)",
            "Mathematical methods in the physical sciences (Boas, Mary L / 2006)"
        ]
    }
  },
  {
    id: "PHY308-01",
    name: "전기역학II(이)",
    prof: "조창희",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "30",
        classroom: "E2-525",
        contact: {
            email: "cyyou@dgist.ac.kr",
            phone: "053-785-6522",
            office: "None",
            office_hours: "None"
        },
        summary: "This course is the second part of electrodynamics. It begins with a review of electrostatics and magnetostatics. Then we will discuss the electrodynamics and Maxwell's equations, followed by conservation laws of charge, energy and momentum. The course then proceeds to electromagnetic waves and their interaction with matters, leading to optical properties of matters. Finally, we will study time-varying fields  and radiation.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 40 },
            { name: "Attendance", percent: 5 },
            { name: "Homework", percent: 15 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Introduction to Electrodynamics (4th Edition) (D. J. Griffiths / n.d.)"
        ]
    }
  },
  {
    id: "PHY401-01",
    name: "현대광학(이,공)",
    prof: "이기준",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 10.5, duration: 1.5 }, { day: 3, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "20",
        classroom: "E7-L21",
        contact: {
            email: "kjlee@dgist.ac.kr",
            phone: "053-785-6315",
            office: "E3-411",
            office_hours: "None"
        },
        summary: "With a prerequisite of <Electrodynamics> (2nd yr, 3 credits), this course will deal with different aspects of light or electromagnetic wave. Vectorial nature of light (polarization), wave nature of light (diffraction, interference) and quantum nature of light (photon, superposition, entanglement) will be covered.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "Students are expected to practice the code of honors for all their homework and exams, although they are encouraged to collaborate elsewhere.",
        grading: [
            { name: "Term Project", percent: 40 },
            { name: "Midterm exam", percent: 30 },
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 20 }
        ],
        schedule: [
            "Photon",
            "Generation of photon 1",
            "Generation of photon 2",
            "Polarization",
            "Propagation of photon",
            "Waveguide",
            "Interaction of photon with matter",
            "Mid-term exam",
            "Nonlinear optics",
            "Detection of photon",
            "Laser 1",
            "Laser 2",
            "Photons in Chemistry",
            "Photons in Biology 1",
            "Photons in Biology 2",
            "Final Presentation"
        ],
        textbook: [
            "Introduction to Modern Optics (Grant R. Fowles / 1975)",
            "Optics (Eugene Hecht / 2016)",
            "Fundamentals of Photonics (Saleh and Teich / 1991)"
        ]
    }
  },
  {
    id: "PHY403-01",
    name: "고체물리II(이,공)",
    prof: "홍정일",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 10.5, duration: 1.5 }, { day: 2, start: 10.5, duration: 1.5 }],
    syllabus: {
        capacity: "25",
        classroom: "E2-324",
        contact: {
            email: "jihong@dgist.ac.kr",
            phone: "053-785-6511",
            office: "None",
            office_hours: "by appointment"
        },
        summary: "The class introduces the logical and scientific approaches to understand physical properties of material based on the atomic structures of solid.",
        methods: ["Lecture", "Discussion"],
        materials: "None",
        policies: "Active participation during the class is encouraged.",
        grading: [
            { name: "Class Participation", percent: 20 },
            { name: "Attendance", percent: 10 },
            { name: "Final exam", percent: 35 },
            { name: "Midterm exam", percent: 35 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Introduction to Solid State Physics (C. Kittel / n.d.)"
        ]
    }
  },
  {
    id: "PHY405-01",
    name: "생물물리학(이,공)",
    prof: "이종찬",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 4, start: 13, duration: 3 }],
    syllabus: {
        capacity: "20",
        classroom: "E7-L22",
        contact: {
            email: "jclee@dgist.ac.kr",
            phone: "053-785-1780",
            office: "E6-614",
            office_hours: "금 오후 4-5시"
        },
        summary: "생명과학은 생물학자들에게만 남겨두기에는 너무 중요하고 재미있다 – Taekjip Ha. 생물물리학(生物物理學, 영어: biophysics) 또는 생물리학(生物理學)은 물리학의 이론과 방법들을 이용하여 복잡한 생물학의 문제를 설명하려는 학문이다. 생물물리학은 분자생물학수준부터 복잡한 조직세포 수준의 상호작용, 생태계등 많은 생물 분야를 포괄적으로 연구한다. 최근 생물물리학자들이 다수의 노벨상을 수상하게 되면서 전세계적으로 관심을 받고 있다. 본 교과에서는 생물물리학의 발전 역사와 더불어 다양한 현대 생물물리학 분야들과 그 조류에 대해 공부한다.",
        methods: ["Lecture", "Presentation", "Discussion"],
        materials: "없음",
        policies: "수업 마지막에 10-15분 가량의 그룹 토론 혹은 질의 응답 시간을 가진다.",
        grading: [
            { name: "Class Participation", percent: 20 },
            { name: "Quiz", percent: 30 },
            { name: "Paper Presentation", percent: 20 },
            { name: "Final exam", percent: 30 }
        ],
        schedule: [
            "1주차 : 생물물리학 과목 소개 및 개괄",
            "2주차 : 생명현상 개괄 및 생물학 중심원리",
            "3주차 : 생물물리학의 발전 역사",
            "4주차 : 물리적으로 정량화 해 본 생명현상 (Quiz)",
            "5주차 : 물리적으로 정량화 해 본 생명현상",
            "6주차 : 생명현상의 열역학",
            "7주차 : DNA and RNA",
            "8주차 : 중간고사 기간",
            "9주차 : 단백질 구조",
            "10주차 : Enzyme kinetics (Quiz)",
            "11주차 : 생체분자의 물리적 조작",
            "12주차 : 형광과 단일 생체 분자 관측",
            "13주차 : 초고분해능 광학 현미경",
            "14주차 : Student Presentations",
            "15주차 : Student Presentations",
            "16주차 : 기말고사"
        ],
        textbook: [
            "None"
        ]
    }
  },
  {
    id: "PHY406-01",
    name: "전산물리(이)",
    prof: "강준구",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 14.5, duration: 1.5 }, { day: 3, start: 14.5, duration: 1.5 }],
    syllabus: {
        capacity: "20",
        classroom: "E7-229",
        contact: {
            email: "joongoo.kang@dgist.ac.kr",
            phone: "053-785-6517",
            office: "E2-308",
            office_hours: "None"
        },
        summary: "In the field of physics, research is broadly categorized into experimental, theoretical, and computational physics. Computational physics provides valuable tools for interpreting experimental data and formulating new physical theories. The recent advent of machine learning and a significant increase in computing power are expected to bring about a paradigm shift across the entire methodology of physics research. This course focuses on learning the fundamental theories needed to simulate physical phenomena on a computer and developing the ability to write programs accordingly.",
        methods: ["Lecture", "Project", "Experiment"],
        materials: "Laptops: Required for all sessions to access Google Colab.",
        policies: "None",
        grading: [
            { name: "Term Project", percent: 30 },
            { name: "Homework", percent: 50 },
            { name: "Attendance", percent: 20 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Computational physics (Newman, M. E. J / 2013)"
        ]
    }
  },
  {
    id: "PHY408-01",
    name: "원자분자물리학(이,공)",
    prof: "허승정",
    credit: 3,
    categories: ["물리학"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "20",
        classroom: "E7-G02",
        contact: {
            email: "seungjung.huh@dgist.ac.kr",
            phone: "053-785-6540",
            office: "E2-411",
            office_hours: "None"
        },
        summary: "원자·분자·광물리학은 원자의 구조와 원자-빛 간의 상호작용의 기본 원리를 다룹니다. 이러한 개념을 토대로 레이저 냉각 및 포획 기술, 그리고 양자 시뮬레이션 및 양자컴퓨팅에의 응용을 소개합니다.",
        methods: ["Lecture"],
        materials: "None",
        policies: "None",
        grading: [
            { name: "Midterm exam", percent: 30 },
            { name: "Homework", percent: 30 },
            { name: "Final exam", percent: 30 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "1주차:Fine and hyperfine structure of hydrogen atoms",
            "2주차:Atoms in electric and magnetic fields",
            "3주차:Helium atom",
            "4주차:Interactions of two-level atoms and light",
            "5주차:Transitions and Emission",
            "6주차:Optical Bloch equation",
            "7주차:Midterm exam",
            "8주차:Three-level systems",
            "9주차:Optical forces and laser cooling",
            "10주차:Cooling and trapping of atoms",
            "11주차:Bose-Einstein condensate",
            "12주차:Ultracold atoms in optical lattice",
            "13주차:Rydberg atoms in optical tweezer arrays",
            "14주차:Quantum computing with atoms",
            "15주차:Ultracold molecules",
            "16주차:Final exam"
        ],
        textbook: [
            "Atom-photon interactions : basic processes and applications (Cohen-Tannoudji, Claude / 2004)",
            "Atomic physics (Foot, C. J / 2013)",
            "Atoms and molecules interacting with light : atomic physics for the laser era (Van der Straten, Peter / 2015)"
        ]
    }
  },
  {
    id: "TP101-01",
    name: "디자인사고",
    prof: "박종래",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 9, duration: 3 }],
    syllabus: {
        capacity: "28",
        classroom: "E7-237",
        contact: {
            email: "j-park@dgist.ac.kr",
            phone: "053-785-6661",
            office: "E7-208",
            office_hours: "메일로 문의"
        },
        summary: "■디자인 사고는 사용자 중심 접근법(행동, 경험, 가치)을 활용해 관찰, 공감, 문제발견과 정의, 아이디어 도출, 개념화, 발표의 프로세스로 진행되며,  사용자가 가지고 있는 현재의 문제해결과 잠재적 문제와 니즈까지 발견하 는 사고법이다.               ■강의는 PBL(Project Based Learning)을 기본으로 개념설명→조사 및 관찰→브레인스토밍과 문제도출→개별  또는 그룹별 해결안 제시의 형식으로 진행된다.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "디자인노트 및 과제에 필요한 기본 재료는 강의자가 제공함.",
        policies: "■디자인사고는 미술적 재능이나 디자인 표현력을 높이기 위한 강의가 아니다.     ■과학과 공학분야에서의 필요한 문제발견과 해결의 과정을 생활속의 다양한 테마를 대상으로 경험을 하는 프로그램이다.  ■ 디자인사고 수강후의 독창적 사고력과 문제해결력, 발표력을 타 수업 및 진로에 적극적으로 활용할 수 있다.",
        grading: [
            { name: "Etc", percent: 10 },
            { name: "Homework", percent: 60 },
            { name: "Term Project", percent: 20 },
            { name: "Etc", percent: 10 }
        ],
        schedule: [
            "1주차:오리엔테이션  - 창의성이란 무엇인가.",
            "2주차:*3.1 절 휴강",
            "3주차:창의적 사고연습 1 - 일상의 관찰",
            "4주차:과제 발표 및 피드백",
            "5주차:창의적 사고연습 2 - Re-Design",
            "6주차:과제 발표 및 피드백",
            "7주차:창의적 사고연습 3 - Roadmap of My Life",
            "8주차:중간고사(디자인노트로 대체)",
            "9주차:과제 발표 및 피드백",
            "10주차:디자인적 사고 1 - 행동&amp;서비스 디자인",
            "11주차:과제 발표 및 피드백",
            "12주차:디자인적 사고 2 - UX/UI디자인",
            "13주차:UX/UI디자인 팀 워크숍팀프로젝트 - 제안서 작성, 프로토타입 제작",
            "14주차:*석가탄신일 휴강",
            "15주차:팀프로젝트 - 성과 발표 및 피드백",
            "16주차:기말고사(디자인노트로 대체)"
        ],
        textbook: [
            "디자인싱킹 (송동주 박재호 강상희 / 2017)",
            "창의성의 즐거움 (미하이 치센트미하이 / 2003)",
            "문제해결연구소 (사토오오키 / 2017)"
        ]
    }
  },
  {
    id: "TP202-01",
    name: "도심항공교통개론(이,공)",
    prof: "인수일",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 0, start: 16, duration: 3 }],
    syllabus: {
        capacity: "30",
        classroom: "E7-G03",
        contact: {
            email: "insuil@dgist.ac.kr",
            phone: "053-785-6417",
            office: "None",
            office_hours: "None"
        },
        summary: "This course aims to develop fundamental competencies required for aircraft piloting and drone operations through foundational theory and practical training, covering principles of flight, aviation meteorology, aviation regulations, aviation safety, and aeronautical communications.",
        methods: ["Lecture", "Discussion", "Experiment"],
        materials: "None",
        policies: "Students are required to attend at least 80% of the total class hours. Three instances of tardiness will be counted as one absence.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Final exam", percent: 90 }
        ],
        schedule: [
            "1주차:Orientation / History of AviationDevelopment of aviation and overview of pilot licensing systems",
            "2주차:Aerodynamics IPrinciples of lift, drag, thrust, and weight",
            "3주차:Aerodynamics IIAircraft attitude, stability, and control surfaces",
            "4주차:Aircraft Structures and SystemsEngines, propellers, and aircraft systems",
            "5주차:Aviation MeteorologyAtmospheric pressure, wind, clouds, and METAR/TAF interpretation",
            "6주차:Air Navigation and AirspaceVFR/IFR airspace structure and navigation equipment",
            "7주차:Aviation Regulations and Operating ProceduresFAA and MOLIT regulations; flight plan preparation",
            "8주차:Aeronautical Communications and ATC ProceduresStandard radio communication procedures and ATC communication practice",
            "9주차:Aviation Safety and Accident AnalysisCase studies of aviation accidents and Safety Management Systems (SMS)",
            "10주차:Aviation Safety and Accident AnalysisCase studies of aviation accidents and Safety Management Systems (SMS)",
            "11주차:Introduction to Drone (UAS) OperationsRegulations and UAS system components",
            "12주차:Introduction to Drone (UAS) OperationsRegulations and UAS system components",
            "13주차:Drone Flight Planning and Risk ManagementAirspace and weather analysis; risk management",
            "14주차:Drone Flight Planning and Risk ManagementAirspace and weather analysis; risk management",
            "15주차:Final Examination and PresentationsComprehensive assessment and r presentations",
            "16주차:Final Examination and PresentationsComprehensive assessment and r presentations"
        ],
        textbook: [
            "FAA “Remote Pilot – Small Unmanned Aircraft Systems Study Guide (FAA-G-8082-22)” (n.d. / n.d.)",
            "FAA “Airman Knowledge Testing Supplement for Private Pilot (FAA-CT-8080-2H)” (n.d. / n.d.)",
            "FAA “Pilot’s Handbook of Aeronautical Knowledge (PHAK, FAA-H-8083-25)” (n.d. / n.d.)"
        ]
    }
  },
  {
    id: "TP301-01",
    name: "커뮤니케이션과 현대사회",
    prof: "조성겸",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 4, start: 9, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L31",
        contact: {
            email: "skcho99@gmail.com",
            phone: "053-785-6617",
            office: "None",
            office_hours: "None"
        },
        summary: "이 강의는 현대 사회에서 커뮤니케이션이 어떤 방식으로 기능하는지를 살펴보고, 최근 등장한 생성형 인공지능(AI)이 어떤 변화를 불러오고 있는지를 탐구한다. 우리는 AI를 단순한 도구나 기술이 아닌, 말하고 반응하며 해석에 참여하는 하나의 커뮤니케이션 행위자(communicative actor)로 바라본다.  그동안 인간의 커뮤니케이션의 주요 특성으로 여겨왔던 특성들을  중심으로, 인간 커뮤니케이션의 전제와 관행을 점검하고, AI가 그 지형에서 어떻게 등장하고 있는지를 함께 고민한다.    강의는 두 부분으로 이루어진다.    1부에서는 커뮤니케이션을 구성하는 핵심 요소들—화자, 신뢰, 맥락, 숙고, 설명 등—을 주요 연구와 실제 사례를 통해 살펴보고, 학생들의 일상 경험과 연결하여 토론한다.    2부에서는 교수자가 설계한 커스텀 GPT를 활용하여, 생성형 AI가 어떤 방식으로 말하고 반응하는지 직접 실험해 본다. 학생들은 질문 방식, 어조, 역할 지시 등을 조정하며 AI 커뮤니케이션의 성격과 가능성을 비판적으로 탐색하게 된다.",
        methods: ["Lecture", "Discussion"],
        materials: "본 강의에서 AI는  학습 도구가 아니라 분석 대상이다.   학생들은 교수자가 만든 GPT를 사용하여 커뮤니케이션의 변화를 관찰하고, 일부 조건만을 제한적으로 수정해 보며 그 효과를 비교·토론한다",
        policies: "None",
        grading: [
            { name: "Class Participation", percent: 20 },
            { name: "Term Project", percent: 40 },
            { name: "Term Project", percent: 40 }
        ],
        schedule: [
            "주차 : 주제",
            "강의 안내",
            "정보의 선택: 누가 무엇을 보게 하는가?",
            "공신력: 누구의 말을 신뢰할 수 있는가?",
            "상호작용: 말은 혼자서 할 수 없다",
            "신뢰: 누구의 말을 신뢰하는가?",
            "토론대회",
            "숙고: 좋은 소통에는 시간이 필요하다",
            "맥락: 의미는 문장이 아니라 상황에서 결정된다",
            "비언어: 관계와 규범을 전달하는 기호",
            "정보에 근거한 동의: 어떤 설득이 윤리적으로 정당한가?",
            "쌍방향 소통: 실현 가능한 커뮤니케이션 구조인가?",
            "대리 발화: AI의 말은 누구의 것인가?",
            "알고리즘: 정보 선택 기준은 누가 설정하는가?",
            "오류와 검증: 신뢰는 어떻게 유지되는가?",
            "커뮤니케이션의 속도: 사고할 시간이 줄어드는가?"
        ],
        textbook: [
            "None"
        ]
    }
  },
  {
    id: "TP305-01",
    name: "게임이론",
    prof: "김선구",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 2, start: 14.5, duration: 3 }],
    syllabus: {
        capacity: "40",
        classroom: "E7-L31",
        contact: {
            email: "sonkukim@snu.ac.kr",
            phone: "053-785-6614",
            office: "E7-G08",
            office_hours: "수 09:00-10:00, 13:00-14:30"
        },
        summary: "This course is designed to make the students familiar with the ’basic’ game theory which covers various equilibrium concepts starting from the concept of Nash Equilibrium up to the notion of “Intuitive Criterion” developed by Cho and Kreps",
        methods: ["Lecture"],
        materials: "None",
        policies: "YOUR MOBILE PHONE SHOULD BE TURNED OFF DUR ING THE CLASS TIME. Please read the syllabus for grading system.",
        grading: [
            { name: "Etc.", percent: 100 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Game Theory (Kyuho Wang and Inkoo Cho / n.d.)"
        ]
    }
  },
  {
    id: "TP307a-01",
    name: "UX디자인",
    prof: "박종래",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 2, start: 10.5, duration: 3 }],
    syllabus: {
        capacity: "28",
        classroom: "E7-237",
        contact: {
            email: "j-park@dgist.ac.kr",
            phone: "053-785-6661",
            office: "None",
            office_hours: "메일로 문의"
        },
        summary: "■인간과 기기의 상호작용이 이루어지는 기술, 제품,비즈니스 등 모든 부문에서 User Experience Design은 핵심경쟁 요소로 부각되고 있고, 특히 디지털 전환 시대에 살고 있는 사용자의 라이프스타일과 경험을 이해하고 예측하는 것은 매우 중요하다.   ■UX디자인은 제품을 사용성뿐만아니라 사용자에게 기쁨과 편리함을 주고 그 이상의 가치까지 찾아낼 수 있도록 유도하는 디자인 방법론이다.",
        methods: ["Presentation", "Flipped-learning", "Discussion", "Project"],
        materials: "수업에 필요한 노트, 브레인스토밍 도구 및 재료는 강의자가 제공한다",
        policies: "■사용자 경험을 긍정적 가치, 편리한 가치, 간단한 가치로 제안하는 기획력, 분석력, 제안력을 배양한다.   ■사용자가 발견 하지 못한 경험이나 잠재적 니즈를 발견 할 수 있도록 유도해야 한다.",
        grading: [
            { name: "Homework", percent: 60 },
            { name: "Term Project", percent: 30 },
            { name: "Etc", percent: 10 }
        ],
        schedule: [
            "1주차:오리엔테이션 / UX디자인을 위한 마인드셋",
            "2주차:UX와 UI디자인이란 무엇인가?",
            "3주차:UX디자인을 위한 디자인원리",
            "4주차:UI디자인을 위한 디자인원리",
            "5주차:유저리서치 - 사용자 이해하기",
            "6주차:페르소나와 스토리텔링",
            "7주차:개별과제 프레젠테이션",
            "8주차:중간고사 : 개별 과제로 대체",
            "9주차:디자인씽킹을 활용한 UX디자인",
            "10주차:UX가 반영된 제품개발의 프로세스",
            "11주차:UX관련 직업과 커리어 로드맵",
            "12주차:디자인 특강 - 글로벌 UX트랜드",
            "13주차: 팀 프로젝트 : 팀구성 및 테마설정, 유저리서치",
            "14주차: 팀 프로젝트 : 스토리텔링 및 가시화, 프로토 타입 제작",
            "15주차:팀 프로젝트 : 프레젠테이션",
            "16주차:기말고사 : 팀 프로젝트로 대체"
        ],
        textbook: [
            "이것이 UX / UI 디자인이다 (조송봉 / 2020)",
            "UX디자인을 시작하는 책 (타마가이 신이치 외 / 2016)",
            "UX디자인 입문 A to Z (에릭(박의준) / 2022)"
        ]
    }
  },
  {
    id: "TP308-01",
    name: "생명에 대한 융합적 이해",
    prof: "남창훈",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 3 }],
    syllabus: {
        capacity: "20",
        classroom: "E7-G02",
        contact: {
            email: "chang@dgist.ac.kr",
            phone: "053-785-6618",
            office: "E6-609",
            office_hours: "None"
        },
        summary: "‘생명에 대한 융합적 이해’ 교과는 생체를 다양한 학제의 종합을 통해 생명의 기본적인 속성을 살피고, 생체의 기본 특징인 순환(circulation)과 상호작용(interaction)의 관점에서 살펴보고자 기획된 교과이다. 본 교과는 생명과 관련된 8가지 큰 질문에 대해 ‘답을 찾는데 필요한 배경지식에 대한 강의’, ‘관련 자료에 대한 발표’ 및 ‘답변 모색을 위한 토론’을 진행하는 방식으로 구성되어 있다. 본 교과에서 다루는 내용은 다양한 학제를 아우르고 있다. 여기에는 생물철학, 생물학사, 생화학, 생물리학, 생리학, 미생물학, 생태학, 환경생물학 등 8개의 세부 학제가 포함된다. 이는 생명과 생체에 대해 주어진 질문들이 어느 특정 학제의 단일한 시각에서 다뤄질 경우 불충분한 평면적 답변을 도출하기 쉽기 때문이다. 이러한 문제를 극복하기 위해 다양한 학제를 종합하는 과정을 통해서 생명에 대한 질문에 답하고자 하는 것이 본 교과가 지향하는 바라 할 수 있다.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "AI사용은 가능하나 이를 사용할 때는 어떤 내용을 참조하거나 활용했는지 밝혀야 한다.",
        grading: [
            { name: "Homework", percent: 30 },
            { name: "Paper Presentation", percent: 30 },
            { name: "Term Project", percent: 40 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "생명이란 무엇인가 : 5단계로 이해하는 생물학 (Nurse, Paul / 2021)",
            "이것이 생물학이다 (Meyer, Ernst / 2016)",
            "생명이란 무엇인가 (Margulis, Lynn / 2016)"
        ]
    }
  },
  {
    id: "TP309-01",
    name: "학부생을 위한 해석학 개론",
    prof: "안흥주",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-223",
        contact: {
            email: "None",
            phone: "053-785-6619",
            office: "E7-218",
            office_hours: "To be announced"
        },
        summary: "This course provides a foundational understanding of mathematical analysis, focusing on rigorous reasoning and its applications to real-world problems in engineering and science. Students will explore the core concepts of limits, continuity, differentiation, and integration, emphasizing their practical relevance and theoretical underpinnings. The course bridges the gap between computational calculus and abstract mathematics, equipping students with the skills to analyze and model complex systems using precise mathematical methods. While focusing on understanding key analytical tools, the course also demonstrates their application to scientific and engineering problems, preparing students for advanced topics in applied mathematics and related disciplines.",
        methods: ["Lecture", "Presentation", "Discussion", "Etc."],
        materials: "None",
        policies: "-매주 비공식 연습시간 1시간 운영예정 -강의는 윈칙적으로 영어로 진행 -수업 시작 15분 이후 입실할 경우 지각으로 간주. 지각 3번은 결석 1번으로 간주. 경조사 및 천재지변을 포함하 여 5번까지 결석 허용. 5회 이상 정당한 사유 없이 무단 결석한 경우, 본래보다 낮은 학점이 부여될 수 있다. 강 의와 연습 출석을 합산 -중간, 기말 고사 중 하나를 치르지 않으면 점수와 관계없이 F 처리됨 -매우 중요: 숙제는 매 장(chapter)이 끝나면  그 장의 (1) key words 를 열거하고, (2)  가장 중요하다고 생각되는 개념과 정리를 각각 1개 이상 선택하여 정리하고,  (3) 각 장의 전체 내용을 한 문장으로 요약 하고,  (4) 관련 문제를 1개이상 풀어서 제출. 주어진 양식을 이용하되 분량은 A4 용지 2pages 이하로(2page 초과분은 채점하지 않음)함 -숙제 내용을 적을 때 다른 사람, 책, 논문 등 아이디어를 빌린 곳이  있으면 반드시 관련 내용을 명시할 것. -개념과 정리의 내용을 묻는 퀴즈가 있을 수 있음. 숙제는 정해진 기한내에 제출해야 하며 늦게 제출하는 숙제는 감점하며, 요구한 내용을 채우되 내용이 우수할수록(개수와는 관계없음) 높은 점수를 받을 수 있음. -원칙적으로 모든 시험은(퀴즈 포함) 재시험 없음.",
        grading: [
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 40 },
            { name: "Homework", percent: 20 }
        ],
        schedule: [
            "TBA"
        ],
        textbook: [
            "Understanding analysis (Abbott, Stephen / 2015)",
            "해석개론 (김성기 / 2011)",
            "Real analysis and foundations (Krantz, Steven G / 2017)"
        ]
    }
  },
  {
    id: "TP310-01",
    name: "현대대수학 개론",
    prof: "Hudson Thomas Bryan",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 9, duration: 1.5 }, { day: 3, start: 9, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-224",
        contact: {
            email: "hudson@dgist.ac.kr",
            phone: "053-785-6697",
            office: "E7-L12",
            office_hours: "Tu:2-4 PM; Th:2-3PM"
        },
        summary: "If in its classical form algebra essentially deals with the problem of finding solutions to equations, its modern formulation has at its core the notion of algebraic structure: a set endowed with certain operations, which satisfy certain requirements. Algebraic structures are ubiquitous, not only in mathematics, but in science at large, as proven by the centrality of Linear Algebra (which is essentially the study of the algebraic structure known as vector space) and Homological Algebra (used in Topological Data Analysis). In this course we will cover the basics of three of the most important algebraic structures: groups, rings and fields.",
        methods: ["Lecture"],
        materials: "Lecture notes and the recordings of the lectures will be made available on LMS.",
        policies: "In order to pass the course students are expected to score at least 20\% on both the midterm and the final. In particular, not attending either the midterm or the final will result in a failing grade. Exceptions to this general rule will be granted on a case-by-case basis at the discretion of the instructor. Make-up exams will be granted only in exceptional cases, following the submission of appropriate documentation explaining the circumstances. Cheating and plagiarism will not be tolerated and, if discovered, will lead to failing the entire course. This also applies to students who knowingly allow their work to be copied.",
        grading: [
            { name: "Final exam", percent: 40 },
            { name: "Midterm exam", percent: 30 },
            { name: "Homework", percent: 20 },
            { name: "Class Participation", percent: 10 }
        ],
        schedule: [
            "1주차:Equivalence relations; Set theoretic construction of the natural, integer and rational numbers;",
            "2주차:Algebraic structures, monoids, groups, rings and fields; Z/mZ, symmetric group;",
            "3주차:Homomorphisms, (normal) subgroups, kernel, image; Isomorphism theorems;",
            "4주차:Cyclic groups, Quotient Groups; Introduction to category theory;",
            "5주차:Universal constructions; Free groups, generators and relations;",
            "6주차:Product of groups;  Group actions, orbits, stabilisers;",
            "7주차:Actions from linear algebra, GL_n(R); Ring homomorphisms, ideals;",
            "8주차:Midterm",
            "9주차:Prime and maximal ideals, unique factorisation domains; Operations on ideals;",
            "10주차:Polynomial rings; Quotient rings, isomorphism theorems;",
            "11주차:Euclidean domains, division algorithms; Principal ideal domains;",
            "12주차:Algebraic and trascendental field extensions; Splitting field of a polynomial;",
            "13주차:Algebraic closure; Fundamental theorem of Algebra;",
            "14주차:Galois extensions and Galois group; Fundamental theorem of Galois theory;",
            "15주차:Symmetric functions and Schur polynomials; Links with algebraic combinatorics;",
            "16주차:Final"
        ],
        textbook: [
            "Algebra (Hungerford, Thomas W / 1974)",
            "Abstract Algebra : an introduction (Hungerford, Thomas W / 2014)"
        ]
    }
  },
  {
    id: "TP406-01",
    name: "텐서들의 기하학과 그 응용(이,공)",
    prof: "한강진",
    credit: 3,
    categories: ["비트랙/융합"],
    fixedTypes: ["전공선택"],
    trackRelations: {},
    times: [{ day: 1, start: 13, duration: 1.5 }, { day: 3, start: 13, duration: 1.5 }],
    syllabus: {
        capacity: "60",
        classroom: "E7-L22",
        contact: {
            email: "kjhan@dgist.ac.kr",
            phone: "053-785-6629",
            office: "E7-L15",
            office_hours: "None"
        },
        summary: "본 교과는 교과명에서 알 수 있듯이 주어진 텐서를 생각하여 그것에 해당하는 다차원 배열(multi-dimensional array)을 통해 선형대수 또는 수치선형대수(Numerical Linear Algebra)적 접근을 바탕으로, 정해진 조건을 만족하는 모든 텐서들을 모은 집합인 ‘텐서들(set of tensors)’의 ‘기하학(Geometry)적’ 성질을 생각하여 본질적인 질문을 재기술하고, 그에 대해 기하학적인 직관 및  결과들이 주는 함의(implication)가 무엇인지 생각하며 진행된다. 이를 위해 강의 전반부에는 벡터공간들의 텐서곱(tensor product)를 비롯한 텐서 관련된 텐서계수(tensor rank), 텐서분행(tensor decomposition) 등 기본적인 수학적인 개념을 소개하고, 또 관련된 몇 개의 핵심적인 문제(fundamental problem)들을 소개한다. 이 과정에서 선형대수의 일반화인 다중선형대수(multilinear algebra)의 내용과 함께 Quantum informatics 또는 Computational complexity에서 온 최신 연구문제들도 함께 다루어 질 것이다. 본 교과의 또 다른 특성으로는 강의에 나온 많은 내용들이 SageMath, Macaulay2, TensorLab 등의 프로그램으로 계산하는 것과 병행될 수 있으며, 학생들이 도전할 수 있는 간단한 프로젝트 문제도 함께 주어질 것이다.",
        methods: ["Lecture", "Presentation", "Discussion", "Project"],
        materials: "None",
        policies: "Prerequisites: This course is intended as a second course in undergraduate math curriculum. Prerequisites include linear algebra and some familiarity with basic notions in algebra such as group, ring, ideal, etc. But, in most cases, basic theory and necessary notions will be recalled in the class and also exercised in homework during the course.",
        grading: [
            { name: "Final exam", percent: 40 },
            { name: "Term Project", percent: 25 },
            { name: "Homework", percent: 25 },
            { name: "Attendance", percent: 10 }
        ],
        schedule: [
            "Introduction, A brief review on Linear algebra",
            "Definitions from multi-linear algebra, Tensor product, Tensor rank and decomposition",
            "3-way tensors, Outer product and W-state, Border rank",
            "Strassen’s algorithm, Matrix multiplication tensor and some complexity measure",
            "Symmetric tensors and Homogeneoues polynomial, Polarization, Groups and Representations I",
            "Groups and Representations II, Decomposition of V",
            "Symmetric tensors and Polynomial Waring problem, Sylvester algorithm for binary forms",
            "Apolarity, Some bounds for Waring rank, Strassen/Comon conjecture",
            "Segre embedding and Veronese embedding, Secant varieties, Border rank and k-th secant variety",
            "Dimension of secant variety :defectively, Alexander-Hirschowitz theorem, Some results and conjecture for Segre case",
            "Tensor Identifiability problem, Some Known results, Geometric approach to Identifiability",
            "Tensor rank over reals, Generic/ Typical/ Maximal rank, Recent progress",
            "Defining equations for k-th secant variety, Equations via auxiliary varieties, Symmetric flattening",
            "Prolongation and equations for k-secants, Symmetry and case of Veronese",
            "Applications, Some open problems",
            "Final Exam"
        ],
        textbook: [
            "Ideals, Varieties, and Algorithms (4th ed.) (David A. Cox , John Little , Donal O’Shea / n.d.)",
            "Invitation to Nonlinear Algebra (Mateusz Michałek and Bernd Sturmfels / n.d.)",
            "Tensors - geometry and applications (J.M. Landsberg / n.d.)",
            "Lecture note on tensors (Han, Kangjin / n.d.)"
        ]
    }
  },
  {
    id: "CSE402",
    name: "강화학습(이,공)",
    prof: "이두석",
    credit: 3,
    times: [
      { day: 0, start: 16.5, duration: 1.5 }, // 월 16:30
      { day: 2, start: 16.5, duration: 1.5 }  // 수 16:30
    ],
    categories: ["컴퓨터공학", "전자공학"],
    type: "전공선택", // 🔥 type 추가
    trackRelations: { "컴퓨터공학": "전공선택", "전자공학": "전공선택" },
    syllabus: {
        capacity: "30",
        classroom: "E7-G02",
        contact: {
            email: "chanyeon@dgist.ac.kr",
            phone: "053-785-6450",
            office: "None",
            office_hours: "None"
        },
        summary: "● The chemical industry is changing rapidly, going beyond traditional chemical process and petrochemical industries to energy/environment, bio, semiconductor/display, etc.  Accordingly, it is very important to figure out consumers' needs to generate new ideas, and then to select the best candidate. In this regard, this lecture will help students understand what chemical product is and how a four-step design process (needs, ideas, selection, and manufacture) works.   And then, the basic principles of chemical process design are also dealt briefly. ● 1. Understand what kinds of chemical products are being developed and how to design them   2. Understand a four-step design process (needs, ideas, selection, and manufacture)   3. Understand the principles of chemical process design (process (Course Objectives) simulation, process synthesis heuristics, etc.)   4. Learn product design case studies for basic chemicals. ● Sincerity, Honesty, and Thoughtfulness",
        methods: ["Lecture", "Project"],
        materials: "None",
        policies: "Attendance Rule: -1 point for every absence. However, let me know your absence before the class, if you are ill or others.  Homework Rule: Please submit your homework before starting the lecture on due date. I will accept delayed homework until the next week, but it will get at most 50% score.   Makeup lecture: prefer to extend regular lecture time rather than other days.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 10 },
            { name: "Term Project", percent: 20 },
            { name: "Final Exam", percent: 30 },
            { name: "Midterm exam", percent: 30 }
        ],
        schedule: [
 	     "1주차:Systems of linear equations and matrices, Gauss elimination",
  	     "2주차:LU decomposition",
    	     "3주차:Column spaces and null spaces, Linear transformations",
    	     "4주차:Determinants of matrices",
 	     "5주차:Vector spaces, Inner product spaces",
  	     "6주차:The method of least squares, Eigenvalues and eigenvectors",
   	     "7주차:Diagonalization of matrices",
   	     "8주차:Mid-term exam.",
     	     "9주차:System of linear differential equations",
   	     "10주차:Complex matrices",
  	     "11주차:Similarity of matrices and linear transformations",
 	     "12주차:Quadratic forms",
 	     "13주차:Singular value decompositions",
 	     "14주차:Constrained Optimization",
  	     "15주차:Presentation of project result",
	     "16주차:Term-end exam."
        ],
        textbook: ["Lecture note", "Chemical product design (Cussler, E. L / 2011)"]
    }
  },
  {
    id: "EE303",
    name: "전자회로 이론(공)",
    prof: "윤종혁",
    credit: 3,
    times: [
      { day: 1, start: 14.5, duration: 1.5 }, // 화 14:30
      { day: 3, start: 14.5, duration: 1.5 }  // 목 14:30
    ],
    categories: ["전자공학"],
    type: "전공필수", // 🔥 type 추가
    trackRelations: { "전자공학": "전공필수" },
    syllabus: {
        capacity: "0",
        classroom: "E7-G02",
        contact: {
            email: "None",
            phone: "053-785-6337",
            office: "None",
            office_hours: "None"
        },
        summary: "This course introduces basic physical electronics, electronic devices, and device characteristics. The devices include diodes, metal oxide semiconductor field-effect transistors (MOSFET), bipolar junction transistors (BJT), and operational amplifiers (Op-Amp). The course provides the fundamentals and basic skills required to analyze (DC, AC and small-signal analysis) and design circuits containing diodes, MOSFETs, BJTs, and Op-amps. The course begins with the explanation on the device fundamentals prior to building circuits. The device becomes the building block of analog/digital circuits. Then, we cover basis of diode models to get familiar with the pn junction devices. Before looking into complicate operational amplifier, the course deals with the design of amplifiers using BJT. Then, we discuss the fundamentals of MOS amplifiers. At later stage of the course, we will talk about more complex amplifier designs, such as differential amplifiers.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Open book exam",
        grading: [
            { name: "Attendance", percent: 5 },
            { name: "Homework", percent: 30 },
            { name: "Final Exam", percent: 35 },
            { name: "Midterm exam", percent: 30 }
        ],
        schedule: [
 	        "Introduction to microelectronics",
  	      "Physics of semiconductors",
    	    "Diode models and circuits",
    	    "Bipolar transistors",
 	        "Bipolar amplifiers",
  	      "MOS devices",
   	      "CMOS amplifiers 1",
   	      "Midterm",
     	    "CMOS amplifiers 2",
   	      "OP amp as a black box",
  	      "Current mirrors and cascodes 1",
 	        "Current mirrors and cascodes 2",
 	        "Differential pairs 1",
 	        "Differential pairs 2",
  	      "Differential pairs 3",
	        "Final exam"
        ],
        textbook: ["Fundamentals of Microelectronics	(Behzad Razavi / n.d.)"]
    }
  },
  {
    id: "EE304",
    name: "반도체물성 개론(공)",
    prof: "이상훈",
    credit: 3,
    times: [
      { day: 1, start: 16, duration: 1.5 },   // 화 16:00
      { day: 3, start: 16, duration: 1.5 }    // 목 16:00
    ],
    categories: ["전자공학", "물리학", "화학공학"],
    type: "전공선택", // 🔥 type 추가
    trackRelations: { "전자공학": "전공선택", "물리학": "전공선택", "화학공학": "전공선택" },
    syllabus: {
        capacity: "60",
        classroom: "E7-235",
        contact: {
            email: "hoonw@dgist.ac.kr",
            phone: "053-785-6224",
            office: "E5-612",
            office_hours: "목 16:00-17:00"
        },
        summary: "This new elective course is an entry-level course for those are interested in the principles of semiconductor devices. The course introduces fundamentals of semiconductor physics and devices. Topics of semiconductor physics include elementary materials science concepts, elemental quantum mechanics, semiconductor in equilibrium, carrier transport phenomena. Topics in semiconductor devices consist of PN junction and PN diode including metal-semiconductor and semiconductor heterojunctions.",
        methods: ["Lecture"],
        materials: "None",
        policies: "Attendance is highly recommended. Active participation in the lecture is encouraged.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Homework", percent: 10 },
            { name: "Quiz", percent: 30 },
            { name: "Final Exam", percent: 30 },
            { name: "Midterm exam", percent: 20 }
        ],
        schedule: [
 	        "TBA"
        ],
        textbook: ["Semiconductor physics and devices : basic principles	(Neamen, Donald A / 2012)"]
    }
    
  },
  {
    id: "ENT301",
    name: "기업가 정신과 사회적 책임",
    prof: "길영준",
    credit: 3,
    times: [
      { day: 0, start: 9, duration: 1.5 },
      { day: 2, start: 9, duration: 1.5 }
    ],
    categories: ["창업"],
    type: "전공선택", // 🔥 type 추가
    trackRelations: { "창업": "전공선택" }
  },
  {
    id: "ENT306",
    name: "회계학원론",
    prof: "조성표",
    credit: 3,
    times: [
      { day: 1, start: 14.5, duration: 3 } // 화 14:30-17:30
    ],
    categories: ["창업"],
    type: "전공선택", // 🔥 type 추가
    trackRelations: { "창업": "전공선택" },
    syllabus: {
        capacity: "30",
        classroom: "E7-L30",
        contact: {
            email: "spcho@knu.ac.kr",
            phone: "010-8833-5446",
            office: "None",
            office_hours: "None"
        },
        summary: "This course is an introductory accounting course for undergraduate engineering and science students who have little or no background in accounting. Rather than focusing on complex accounting rules or journal entries, the course starts with how to read and understand financial statements. Students will learn how to see the big picture of how companies earn money and how money is used. Through company-based case studies, such as Apple, NVIDIA, Samsung Electronics, and well-known startup companies, students will learn how accounting information explains real business activities. These company cases help students see how financial statements reflect actual business decisions, growth strategies, risks and performance. After graduation, students may face situations such as developing startup ideas, managing projects, or analyzing companies. This course prepares students for those practical situations by linking accounting concepts to real decision-making. Upon successful completion of this course, students will be able to understand accounting information, see the financial situation of an organization, and use that information to make better decisions.",
        methods: ["Lecture", "Project", "Presentation", "Discussion", "Etc."],
        materials: "None",
        policies: "● Mobile phone use is restricted during class to maintain focus. ● During exams, basic calculators are allowed, but any device with communication functions is prohibited. ● Attendance counts toward the final grade. Two late arrivals are counted as one absence. ● All assignments must be submitted by the stated deadlines.",
        grading: [
            { name: "Attendance", percent: 10 },
            { name: "Term Project", percent: 25 },
            { name: "Final Exam", percent: 40 },
            { name: "Midterm exam", percent: 25 }
        ],
        schedule: [
 	        "Course Introduction – Why accounting matters for non-business majors",
          "Why Accounting Is Important – Why organizations use numbers",
          "Income Statement – How company performance is created and evaluated",
          "Balance Sheet – Is the company financially healthy?",
          "Financial Statement Analysis – Reading information behind the numbers",
          "What Is Cost? – Resources are used in everything we do",
          "AI-based Financial Statement Analysis Practice (Team work)",
          "Case Presentation – Explaining and persuading with numbers",
          "Cost Analysis and Strategic Decisions – Finding the best option",
          "Midterm Quiz",
          "Break-even Point and Budgeting – Turning plans into numbers",
          "Standard Cost – Why plans and results are different",
          "Responsibility Accounting – How performance is evaluated",
          "Target Costing – Costs are decided early in planning and design",
          "Final Exam"
        ],
        textbook: ["Engineering Accounting	(Cho, Seong-Pyo, Cho, Joong-Hi / 2026)"]
    }
  },

  // --- 2. Thesis (RP401~RP406) - type 필드 포함 ---
  { id: 'RP401_1', name: 'Thesis', prof: '문제일', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_2', name: 'Thesis', prof: '유성운', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_3', name: 'Thesis', prof: '김은경', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_4', name: 'Thesis', prof: '서병창', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_5', name: 'Thesis', prof: '김규형', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_6', name: 'Thesis', prof: '이석규', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_7', name: 'Thesis', prof: '이성배', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_8', name: 'Thesis', prof: '오용석', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_9', name: 'Thesis', prof: '이효상', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_10', name: 'Thesis', prof: '최한경', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_11', name: 'Thesis', prof: '유우경', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_12', name: 'Thesis', prof: '고재원', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_13', name: 'Thesis', prof: '엄지원', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_14', name: 'Thesis', prof: '백명인', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_15', name: 'Thesis', prof: '이광', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_16', name: 'Thesis', prof: '현정호', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_17', name: 'Thesis', prof: '조용철', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_18', name: 'Thesis', prof: '김민환', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP401_19', name: 'Thesis', prof: '박포정', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_1', name: 'Thesis', prof: '구재형', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_2', name: 'Thesis', prof: '이창훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_3', name: 'Thesis', prof: '남창훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_4', name: 'Thesis', prof: '우혜련', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_5', name: 'Thesis', prof: '곽준명', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_6', name: 'Thesis', prof: '이영삼', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_7', name: 'Thesis', prof: '이상임', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_8', name: 'Thesis', prof: '이병훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_9', name: 'Thesis', prof: '김민석', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_10', name: 'Thesis', prof: '이재민', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_11', name: 'Thesis', prof: '예경무', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_12', name: 'Thesis', prof: '김진해', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_13', name: 'Thesis', prof: '이종찬', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_14', name: 'Thesis', prof: '전영태', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_15', name: 'Thesis', prof: '김민식', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_16', name: 'Thesis', prof: '기영훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_17', name: 'Thesis', prof: '김유리', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_18', name: 'Thesis', prof: '정찬', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_19', name: 'Thesis', prof: '최일규', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_20', name: 'Thesis', prof: '김태완', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_21', name: 'Thesis', prof: '이송이', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP402_22', name: 'Thesis', prof: 'Felix Jonas', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_1', name: 'Thesis', prof: '오세훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_2', name: 'Thesis', prof: '김기섭', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_3', name: 'Thesis', prof: '김동욱', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_4', name: 'Thesis', prof: '김봉훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_5', name: 'Thesis', prof: '김소희', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_6', name: 'Thesis', prof: '김회준', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_7', name: 'Thesis', prof: '남강현', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_8', name: 'Thesis', prof: '문인규', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_9', name: 'Thesis', prof: '박경서', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_10', name: 'Thesis', prof: '박상현', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_11', name: 'Thesis', prof: '박석호', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_12', name: 'Thesis', prof: '박준혁', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_13', name: 'Thesis', prof: '송석호', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_14', name: 'Thesis', prof: '송철', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_15', name: 'Thesis', prof: '유재석', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_16', name: 'Thesis', prof: '윤동원', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_17', name: 'Thesis', prof: '이상훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_18', name: 'Thesis', prof: '이성민', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_19', name: 'Thesis', prof: '이아형', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_20', name: 'Thesis', prof: '이옥균', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_21', name: 'Thesis', prof: '이재홍', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_22', name: 'Thesis', prof: '임영섭', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_23', name: 'Thesis', prof: '장경인', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_24', name: 'Thesis', prof: '정소현', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_25', name: 'Thesis', prof: '한상윤', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP403_26', name: 'Thesis', prof: '황민호', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_1', name: 'Thesis', prof: '홍정일', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_2', name: 'Thesis', prof: '박기성', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_3', name: 'Thesis', prof: '김성균', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_4', name: 'Thesis', prof: '장낙천', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_5', name: 'Thesis', prof: '조창희', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_6', name: 'Thesis', prof: '서정필', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_7', name: 'Thesis', prof: '김철기', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_8', name: 'Thesis', prof: '정병혁', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_9', name: 'Thesis', prof: '강준구', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_10', name: 'Thesis', prof: '박진희', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_11', name: 'Thesis', prof: '이성원', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_12', name: 'Thesis', prof: '이신범', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_13', name: 'Thesis', prof: '홍선기', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_14', name: 'Thesis', prof: '이성기', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_15', name: 'Thesis', prof: '성주영', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_16', name: 'Thesis', prof: '김아람', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_17', name: 'Thesis', prof: '서상원', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_18', name: 'Thesis', prof: '김종구', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_19', name: 'Thesis', prof: '김소연', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP404_20', name: 'Thesis', prof: '문혜원', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_1', name: 'Thesis', prof: '이호천', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_2', name: 'Thesis', prof: '이윤구', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_3', name: 'Thesis', prof: 'SANGARAJU SHANMUGAM', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_4', name: 'Thesis', prof: '이종수', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_5', name: 'Thesis', prof: '인수일', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_6', name: 'Thesis', prof: '최성호', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_7', name: 'Thesis', prof: '장연희', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_8', name: 'Thesis', prof: '이주혁', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_9', name: 'Thesis', prof: '양지웅', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_10', name: 'Thesis', prof: '김찬연', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_11', name: 'Thesis', prof: '호동해', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_12', name: 'Thesis', prof: '김운혁', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_13', name: 'Thesis', prof: '김진수', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_14', name: 'Thesis', prof: '이종민', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_15', name: 'Thesis', prof: '고서진', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP405_16', name: 'Thesis', prof: '김승현', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_1', name: 'Thesis', prof: '장재은', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_2', name: 'Thesis', prof: '박경준', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_3', name: 'Thesis', prof: '은용순', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_4', name: 'Thesis', prof: '이기준', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_5', name: 'Thesis', prof: '황재윤', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_6', name: 'Thesis', prof: '이정협', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_7', name: 'Thesis', prof: '권혁준', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_8', name: 'Thesis', prof: '김경대', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_9', name: 'Thesis', prof: '신동훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_10', name: 'Thesis', prof: '임성훈', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_11', name: 'Thesis', prof: '김선준', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_12', name: 'Thesis', prof: '창진호', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_13', name: 'Thesis', prof: '김예성', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_14', name: 'Thesis', prof: '윤종혁', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_15', name: 'Thesis', prof: '김백규', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_16', name: 'Thesis', prof: '서대원', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_17', name: 'Thesis', prof: '김가인', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_18', name: 'Thesis', prof: '송민영', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_19', name: 'Thesis', prof: '김영식', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_20', name: 'Thesis', prof: '이경태', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_21', name: 'Thesis', prof: '소진현', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_22', name: 'Thesis', prof: '이병권', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_23', name: 'Thesis', prof: '이병문', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_24', name: 'Thesis', prof: '최재호', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_25', name: 'Thesis', prof: '박대희', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_26', name: 'Thesis', prof: '최원석', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_27', name: 'Thesis', prof: '이용우', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_28', name: 'Thesis', prof: '김기섭', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_29', name: 'Thesis', prof: '최상현', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_30', name: 'Thesis', prof: '전민석', credit: 1.0, times: [{ day: 5, start: 15, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_31', name: 'Thesis', prof: '길현재', credit: 1.0, times: [{ day: 5, start: 9, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_32', name: 'Thesis', prof: '장준기', credit: 1.0, times: [{ day: 5, start: 9, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_33', name: 'Thesis', prof: '목지수', credit: 1.0, times: [{ day: 5, start: 9, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP406_34', name: 'Thesis', prof: '이민선', credit: 1.0, times: [{ day: 5, start: 9, duration: 5 }], categories: ['연구'], type: '전공선택', trackRelations: {} },

  // --- 3. URP (RP408) - type 필드 포함 ---
  { id: 'RP408_1', name: 'URP', prof: '문제일', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_2', name: 'URP', prof: '유성운', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_3', name: 'URP', prof: '김은경', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_4', name: 'URP', prof: '서병창', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_5', name: 'URP', prof: '김규형', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_6', name: 'URP', prof: '이석규', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_7', name: 'URP', prof: '이성배', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_8', name: 'URP', prof: '오용석', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_9', name: 'URP', prof: '이효상', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_10', name: 'URP', prof: '최한경', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_11', name: 'URP', prof: '유우경', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_12', name: 'URP', prof: '고재원', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_13', name: 'URP', prof: '엄지원', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_14', name: 'URP', prof: '백명인', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_15', name: 'URP', prof: '이광', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_16', name: 'URP', prof: '현정호', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_17', name: 'URP', prof: '최영철', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_18', name: 'URP', prof: '김민환', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_19', name: 'URP', prof: '박포정', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_20', name: 'URP', prof: '구재형', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_21', name: 'URP', prof: '이창훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_22', name: 'URP', prof: '남창훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_23', name: 'URP', prof: '우혜련', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_24', name: 'URP', prof: '곽준명', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_25', name: 'URP', prof: '이영삼', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_26', name: 'URP', prof: '이상임', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_27', name: 'URP', prof: '이병훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_28', name: 'URP', prof: '김민석', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_29', name: 'URP', prof: '이재민', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_30', name: 'URP', prof: '예경무', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_31', name: 'URP', prof: '김진해', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_32', name: 'URP', prof: '이종찬', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_33', name: 'URP', prof: '전영태', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_34', name: 'URP', prof: '김민식', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_35', name: 'URP', prof: '기영훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_36', name: 'URP', prof: '김유리', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_37', name: 'URP', prof: '정찬', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_38', name: 'URP', prof: '최일규', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_39', name: 'URP', prof: '김태완', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_40', name: 'URP', prof: '이송이', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_41', name: 'URP', prof: 'Felix Jonas', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_42', name: 'URP', prof: '오세훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_43', name: 'URP', prof: '김기섭', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_44', name: 'URP', prof: '김동욱', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_45', name: 'URP', prof: '김봉훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_46', name: 'URP', prof: '김소희', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_47', name: 'URP', prof: '김회준', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_48', name: 'URP', prof: '남강현', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_49', name: 'URP', prof: '문인규', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_50', name: 'URP', prof: '박경서', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_51', name: 'URP', prof: '박상현', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_52', name: 'URP', prof: '박석호', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_53', name: 'URP', prof: '박준혁', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_54', name: 'URP', prof: '송석호', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_55', name: 'URP', prof: '송철', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_56', name: 'URP', prof: '유재석', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_57', name: 'URP', prof: '윤동원', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_58', name: 'URP', prof: '이상훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_59', name: 'URP', prof: '이성민', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_60', name: 'URP', prof: '이아형', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_61', name: 'URP', prof: '이옥균', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_62', name: 'URP', prof: '이재홍', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_63', name: 'URP', prof: '임영섭', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_64', name: 'URP', prof: '장경인', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_65', name: 'URP', prof: '정소현', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_66', name: 'URP', prof: '한상윤', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_67', name: 'URP', prof: '황민호', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_69', name: 'URP', prof: '홍정일', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_70', name: 'URP', prof: '박기성', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_71', name: 'URP', prof: '김성균', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_72', name: 'URP', prof: '조낙천', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_73', name: 'URP', prof: '조창희', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_74', name: 'URP', prof: '서정필', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_75', name: 'URP', prof: '김철기', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_76', name: 'URP', prof: '정병혁', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_77', name: 'URP', prof: '강준구', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_78', name: 'URP', prof: '박진희', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_79', name: 'URP', prof: '이성원', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_80', name: 'URP', prof: '이신범', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_81', name: 'URP', prof: '홍선기', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_82', name: 'URP', prof: '이성기', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_83', name: 'URP', prof: '성주영', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_84', name: 'URP', prof: '김아람', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_85', name: 'URP', prof: '서상원', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_86', name: 'URP', prof: '김종구', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_87', name: 'URP', prof: '김소연', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_88', name: 'URP', prof: '문혜원', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_89', name: 'URP', prof: '이호천', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_90', name: 'URP', prof: '이용구', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_91', name: 'URP', prof: 'SANGARAJU SHANMUGAM', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_92', name: 'URP', prof: '이종수', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_93', name: 'URP', prof: '인수일', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_94', name: 'URP', prof: '최성호', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_95', name: 'URP', prof: '장윤희', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_96', name: 'URP', prof: '이주혁', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_97', name: 'URP', prof: '양지웅', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_98', name: 'URP', prof: '김찬연', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_99', name: 'URP', prof: '호동해', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_100', name: 'URP', prof: '김운혁', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_101', name: 'URP', prof: '김진수', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_102', name: 'URP', prof: '이종민', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_103', name: 'URP', prof: '고서진', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_104', name: 'URP', prof: '김승현', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_105', name: 'URP', prof: '장재은', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_106', name: 'URP', prof: '박경준', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_107', name: 'URP', prof: '은용순', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_108', name: 'URP', prof: '이기준', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_109', name: 'URP', prof: '황재윤', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_110', name: 'URP', prof: '이정협', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_111', name: 'URP', prof: '권혁준', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_112', name: 'URP', prof: '김경대', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_113', name: 'URP', prof: '신동훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_114', name: 'URP', prof: '임성훈', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_115', name: 'URP', prof: '김선준', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_116', name: 'URP', prof: '장진호', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_117', name: 'URP', prof: '김예성', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_118', name: 'URP', prof: '윤종혁', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_119', name: 'URP', prof: '김백규', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_120', name: 'URP', prof: '서대원', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_121', name: 'URP', prof: '김가인', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_122', name: 'URP', prof: '송민영', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_123', name: 'URP', prof: '김영식', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_124', name: 'URP', prof: '이경태', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_125', name: 'URP', prof: '소진현', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_126', name: 'URP', prof: '이병권', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_127', name: 'URP', prof: '이병문', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_128', name: 'URP', prof: '최재호', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_129', name: 'URP', prof: '박대희', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_130', name: 'URP', prof: '최원석', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_131', name: 'URP', prof: '이용우', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_132', name: 'URP', prof: '김기섭', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_133', name: 'URP', prof: '최상현', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_134', name: 'URP', prof: '전민석', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_135', name: 'URP', prof: '길현재', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_136', name: 'URP', prof: '장준기', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_137', name: 'URP', prof: '목지수', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
  { id: 'RP408_138', name: 'URP', prof: '이민선', credit: 2.0, times: [{ day: 5, start: 9, duration: 2 }], categories: ['연구'], type: '전공선택', trackRelations: {} },
];