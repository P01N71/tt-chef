import json
import re
import os

# --- 기존 파싱 로직들 ---
TIME_MAP = {
    '1A': 0, '1B': 1, '2A': 2, '2B': 3, '3A': 4, '3B': 5,
    '4A': 6, '4B': 7, '5A': 8, '5B': 9, '6A': 10, '6B': 11,
    '7A': 12, '7B': 13, '8A': 14, '8B': 15, '9A': 16, '9B': 17, '10A': 18, '10B': 19,
    '11A': 20, '11B': 21, '12A': 22, '12B': 23, '13A': 24, '13B': 25, '14A': 26, '14B': 27,
}
DAY_MAP = {'월': 1, '화': 2, '수': 3, '목': 4, '금': 5, '토': 6, '일': 7}

def parse_time_info(info_str):
    entries = info_str.split(',')
    all_times = []
    first_room = ""
    for entry in entries:
        entry = entry.strip()
        match = re.match(r"(.)([0-9A-Za-z]+)-([0-9A-Za-z]+)\((.*)\)", entry)
        if match:
            day_str, start_code, end_code, room = match.groups()
            if not first_room: first_room = room.strip().replace(' ', '')
            day = DAY_MAP.get(day_str, 1)
            start_idx = TIME_MAP.get(start_code, 0)
            end_idx = TIME_MAP.get(end_code, 0)
            duration = (end_idx - start_idx + 1) if end_idx >= start_idx else 0
            all_times.append({"day": day, "start": start_idx, "duration": duration})
    return all_times, first_room

def transform_course_data(raw):
    tmcnt = raw.get('TMCNT', '0/0/0')
    credit = int(float(tmcnt.split('/')[0]))
    times, room = parse_time_info(raw.get('INFO', ''))
    return {
        "id": f"{raw.get('SBJT_NO', 'N/A')}-{raw.get('CLSS_NO', '00')}",
        "name": raw.get('SBJT_NM', 'Unknown'),
        "prof": raw.get('PROF_NM', 'Unknown'),
        "credit": credit,
        "categories": ["haeyaham"],
        "fixedTypes": [raw.get('CPTN_DCD', 'Unknown')],
        "trackRelations": {},
        "times": times,
        "syllabus": {
            "capacity": raw.get('TLSN_MEN', '0'),
            "classroom": room,
            "contact": {
                "email": raw.get('EMAIL', ''),
                "phone": raw.get('CELL_NO') or raw.get('TEL_NO') or '',
                "office": raw.get('LABRM_NM', ''),
                "office_hours": raw.get('TALK_TM', 'TBA'),
            },
            "summary": raw.get('LT_SUMA', ''),
            "methods": [m.strip() for m in raw.get('LSN_MTHD', '').split('\n') if m.strip()],
            "materials": raw.get('ETC', ''),
            "policies": raw.get('LT_POLY', ''),
            "grading": [],
            "schedule": [s.strip() for s in raw.get('SCHETCHUL', '').split('\n') if s.strip()],
            "textbook": "haeyaham"
        },
        "room": room
    }

# --- 새로운 저장 및 입출력 로직 ---
def add_to_json_file(new_data, filename='t2.json'):
    # 1. 파일이 있으면 읽고, 없으면 빈 리스트로 시작
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            try:
                course_list = json.load(f)
            except json.JSONDecodeError:
                course_list = [] # 파일이 비어있거나 깨졌을 때
    else:
        course_list = []

    # 2. 리스트에 추가
    course_list.append(new_data)

    # 3. 전체 리스트를 다시 저장
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(course_list, f, indent=2, ensure_ascii=False)

# 메인 실행 루프
print("과목 정보를 입력하세요. 종료하려면 'exit'를 입력하세요.")
while True:
    input_str = input("\n데이터 입력: ")
    if input_str.strip().lower() == 'exit':
        print("종료합니다.")
        break
    
    try:
        raw_data = json.loads(input_str)
        transformed = transform_course_data(raw_data)
        add_to_json_file(transformed)
        print(">> t2.json에 저장되었습니다.")
    except Exception as e:
        print(f"오류 발생: {e} (올바른 JSON 형식을 입력했는지 확인하세요)")