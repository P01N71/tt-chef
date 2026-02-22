import pandas as pd
import json
import re

# 1. fort2.csv 파일 불러오기
# 데이터 시작 행이 다르므로 세 번째 줄부터 읽도록 설정 (header=2)
df = pd.read_csv('C:/Users/jjust/OneDrive/Desktop/timetable-chef/fort2.csv', header=2, encoding="cp949")

# 2. t2.json 파일 불러오기
with open('C:/Users/jjust/OneDrive/Desktop/timetable-chef/t2.json', 'r', encoding='utf-8') as f:
    courses = json.load(f)

# 3. CSV 데이터에서 강의실 정보 추출하여 딕셔너리로 저장
room_mapping = {}

for index, row in df.iterrows():
    course_id = f"{row['과목번호']}-{str(row['분반']).zfill(2)}"
    time_room_info = str(row['요일/교시/강의실'])
    
    if pd.isna(time_room_info) or time_room_info == 'nan':
        continue
        
    # 정규표현식을 통해 강의실 위치(예: E7 - 233) 추출
    # 괄호 안의 알파벳+숫자 - 숫자 형태 매칭
    match = re.search(r'\(([A-Za-z0-9]+\s*-\s*[A-Za-z0-9]+)\)', time_room_info)
    if match:
        room_str = match.group(1).replace(" ", "")  # 공백 제거하여 E7-233 형태로 변환
        room_mapping[course_id] = room_str

# 4. JSON 데이터에 room 속성 추가
for course in courses:
    c_id = course.get("id")
    if c_id in room_mapping:
        course["room"] = room_mapping[c_id]
    else:
        # 강의실 정보가 없는 경우 None 혹은 빈 문자열로 처리 (필요에 따라 수정)
        course["room"] = None

# 5. 결과를 새로운 JSON 파일로 저장
with open('t2_with_room.json', 'w', encoding='utf-8') as f:
    json.dump(courses, f, indent=2, ensure_ascii=False)

print("강의실 정보가 성공적으로 추가되었습니다.")