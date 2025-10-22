---
title: "📊 Pandas 알아보기"
slug: "pandas"
description: "Pandas에 대해 알아보자"
tags: ["DA"]
author: "seongjin jeon"
date: "2025-07-18"
modifiedDate: "2025-07-18T01:13:00.000Z"
notionId: "2349b006-ca58-80d8-883e-cbbc969b6220"
---
## 🔍 Pandas란?

- **데이터 분석 전용 라이브러리**
- NumPy보다 **표 형태 데이터** 처리에 특화
- **혼합 데이터 타입** 지원 (숫자 + 문자)
- NumPy에서 구현하기 힘든 것들을 좀 더 쉽게 구현이 가능하다.
    - ex. NumPy array에선 한가지 데이터 타입만 넣을 수 있지만 Pandas에서는 혼합 가능
- **정리**: NumPy = 수학연산 / Pandas = 표 데이터 분석

---


## 📈 핵심 데이터 구조


### 🔹 Series (시리즈)

- 인덱스와 값으로 이루어져있는 표
- 인덱싱된 데이터의 1차원 배열
- `pd.Serise()`: 파이썬의 리스트나 넘파이 배열로 시리즈 생성
- `pd.Series(리스트나 배열)` : 시리즈는 값과 인덱스로 이루어져 있음

**1차원 데이터 + 인덱스**


```python
import pandas as pd

# 기본 생성
data = pd.Series([1, 2, 3, 4])
print(data)
# 0    1
# 1    2
# 2    3
# 3    4

# 인덱스 지정
data = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])
print(data)
# a    1
# b    2
# c    3
# d    4

# 딕셔너리로 생성
fruits = pd.Series({'포도': 3999, '배': 2000})

print(data['a':'c']) # 라벨 기반 슬라이싱(문자 라벨)은 끝값 도 포함해서 결과 출력
print(data[0:2]) # 정수(int)기반은 기본 슬라이싱의 규칙과 똑같이 끝 인덱스를 포함하지 않음
```


**Series 주요 기능**

- `data.index` : 인덱스 확인
- `data.values` : 값 확인
- `data['a':'c']` : 라벨 슬라이싱 (끝값 포함)
- `data[0:2]` : 정수 슬라이싱 (끝값 미포함)

### 🔹 DataFrame (데이터프레임)


**2차원 표 형태 데이터**


```python
# 딕셔너리로 생성
student_data = {
    '이름': ['김민지', '정재빈', '조예나'],
    '국어': [90, 95, 100],
    '영어': [100, 80, 75],
    '수학': [80, 100, 70]
}
df = pd.DataFrame(student_data)
```


**DataFrame 기본 조회**


```python
# 컬럼 선택
df['이름']           # Series 반환
df[['이름', '국어']]  # DataFrame 반환

# 인덱스 설정
df.index.name = '학생번호'

# 기본 정보
df.shape            # (행, 열) 크기
df.columns          # 컬럼명들
df.index            # 인덱스들
```


---


## 🎯 데이터 선택과 조회


### 🔸 loc vs iloc


| 구분       | 기준         | 끝값 포함 | 사용법                    |
| -------- | ---------- | ----- | ---------------------- |
| **loc**  | **라벨**     | ⭕ 포함  | `df.loc['행이름', '컬럼명']` |
| **iloc** | **위치(정수)** | ❌ 미포함 | `df.iloc[0, 1]`        |


```python
# loc 예시 (라벨 기반)
df.loc['김민지']                    # 특정 행 전체
df.loc['김민지', '국어']            # 특정 행, 특정 컬럼
df.loc[['김민지', '정재빈'], ['국어', '영어']]  # 여러 행, 여러 컬럼

# iloc 예시 (위치 기반)
df.iloc[0]          # 첫 번째 행
df.iloc[0, 1]       # 첫 번째 행, 두 번째 컬럼
df.iloc[[0, 2], [1, 2]]  # 특정 위치들
```


### 🔸 조건 필터링


```python
# 조건 만들기
condition = df['국어'] > 90
print(condition)  # True/False Series

# 조건으로 필터링
df[df['국어'] > 90]  # 국어 90점 이상 학생들

# 복합 조건
df[(df['국어'] > 85) & (df['영어'] > 80)]  # AND 조건
df[(df['국어'] > 95) | (df['영어'] > 95)]  # OR 조건

# loc와 조건 결합
df.loc[df['국어'] > 90, '영어']  # 국어 90점 이상인 학생들의 영어 점수만
```


---


## 📁 파일 읽기/쓰기


### 🔸 CSV 파일


```python
# 읽기
df = pd.read_csv('파일명.csv')
df = pd.read_csv('파일명.csv', index_col='컬럼명')  # 특정 컬럼을 인덱스로

# 헤더 없는 파일
df = pd.read_csv('파일명.csv', header=None)  # 0,1,2... 컬럼명
df = pd.read_csv('파일명.csv', header=None, names=['A','B','C'])  # 커스텀 컬럼명

# 쓰기
df.to_csv('저장파일명.csv')
```


### 🔸 엑셀 파일


```python
# 읽기
df = pd.read_excel('파일명.xlsx', index_col='컬럼명')

# 쓰기
df.to_excel('저장파일명.xlsx')
```


---


## 🛠️ 데이터 조작


### 🔸 컬럼 추가/삭제


```python
# 컬럼 추가
df['총합'] = df['국어'] + df['영어'] + df['수학']  # 파생변수
df['평균'] = df['총합'] / 3
df['등급'] = 'A'  # 모든 행에 동일값

# 컬럼 삭제
df.drop(columns=['총합'], inplace=True)  # 한 개
df.drop(columns=['총합', '평균'], inplace=True)  # 여러 개
```


### 🔸 행 추가/삭제


```python
# 행 추가
df.loc['신규학생'] = [95, 88, 92]  # 새 행 추가

# 행 삭제
df.drop(index=['학생1'], inplace=True)  # 특정 행 삭제
```


### 🔸 값 수정


```python
# 특정 값 변경
df.loc['김민지', '국어'] = 95
df.at['김민지', '국어'] = 95  # 단일 값은 at이 더 빠름

# 전체 컬럼 값 변경
df['등급'] = 'B'

# 조건부 변경
df.loc[df['총합'] > 270, '등급'] = 'A'

# replace 사용
df['등급'].replace('B', 'C', inplace=True)
```


---


## 📊 데이터 분석


### 🔸 기본 통계


```python
df.describe()    # 기본 통계 요약
df.info()        # 데이터 타입, 결측치 정보
df.head()        # 처음 5행
df.tail()        # 마지막 5행

# 개별 통계
df['국어'].mean()    # 평균
df['국어'].sum()     # 합계
df['국어'].max()     # 최댓값
df['국어'].min()     # 최솟값
df['국어'].std()     # 표준편차
```


### 🔸 정렬


```python
# 값으로 정렬
df.sort_values('국어')                    # 오름차순
df.sort_values('국어', ascending=False)   # 내림차순
df.sort_values(['국어', '영어'])          # 다중 정렬

# 인덱스로 정렬
df.sort_index()
```


### 🔸 상위/하위 값


```python
df.nlargest(3, '국어')   # 국어 점수 상위 3명
df.nsmallest(3, '국어')  # 국어 점수 하위 3명

# Series에서
df['국어'].nlargest(3)   # 국어 점수만 상위 3개
```


---


## 📈 그룹 분석 (GroupBy)


```python
# 기본 그룹화
students = pd.DataFrame({
    '이름': ['김철수', '이영희', '박민수', '정지원'],
    '반': ['1반', '1반', '2반', '2반'],
    '수학': [90, 85, 92, 88],
    '영어': [88, 90, 85, 92]
})

# 반별 통계
students.groupby('반')['수학'].mean()     # 반별 수학 평균
students.groupby('반')[['수학', '영어']].mean()  # 여러 컬럼 평균
students.groupby('반').size()             # 반별 학생 수
students.groupby('반')['수학'].max()      # 반별 수학 최고점
```


---


## ⚠️ 자주 하는 실수들


### 🔸 대괄호 개수


```python
# ❌ 틀린 방법
df['이름', '국어']  # 에러!

# ✅ 올바른 방법
df[['이름', '국어']]  # 여러 컬럼은 대괄호 2개
```


### 🔸 loc 사용법


```python
# ❌ 헷갈리는 부분
df.loc['학생이름']  # 이건 행 선택

# ✅ 명확한 구분
df.loc['행이름', '컬럼명']    # 행, 컬럼 동시 선택
df['컬럼명']                 # 컬럼만 선택
```


### 🔸 조건문 괄호


```python
# ❌ 틀린 방법
df[df['국어'] > 90 & df['영어'] > 80]  # 에러!

# ✅ 올바른 방법
df[(df['국어'] > 90) & (df['영어'] > 80)]  # 각 조건을 괄호로 묶기
```


---


## 🎯 실무 팁


### 🔸 인덱스 설정


```python
# 파일 읽을 때 인덱스 설정
df = pd.read_csv('파일.csv', index_col='이름')

# 나중에 인덱스 설정
df.set_index('이름', inplace=True)

# 인덱스 리셋
df.reset_index(inplace=True)  # 인덱스를 다시 컬럼으로
```


### 🔸 결측값 처리


```python
df.isnull()          # 결측값 확인
df.notnull()         # 결측값 아닌 것 확인
df.fillna(0)         # 결측값을 0으로 채우기
df.dropna()          # 결측값 있는 행 삭제
```


### 🔸 데이터 타입 확인/변경


```python
df.dtypes            # 각 컬럼의 데이터 타입
df['점수'].astype(int)  # 정수형으로 변경
```


---


## 🚀 정리


**기억할 포인트:**

- **Series** = 1차원, **DataFrame** = 2차원
- **loc** = 라벨 기반, **iloc** = 위치 기반
- **대괄호 1개** = 컬럼 선택, **대괄호 2개** = 여러 컬럼
- **조건문**은 항상 괄호로 묶기
