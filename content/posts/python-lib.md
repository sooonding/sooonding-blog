---
title: "Python 데이터 분석 라이브러리"
slug: "python-lib"
description: "데이터 분석에 필요한 Python 라이브러리"
tags: ["DA", "통계"]
author: "seongjin jeon"
date: "2025-07-21"
modifiedDate: "2025-07-21T00:21:00.000Z"
notionId: "2369b006-ca58-8063-b9a1-d22c440f9822"
---
# 🐍 Python 데이터 분석 라이브러리


## 왜 Python일까?


데이터 분석을 시작하시려는 분, 그리고 Python 라이브러리들이 왜 이렇게 많은지 헷갈리시는 분들을 위해 제가 직접 경험하고 조사한 걸 기재해봤다.


사실 처음에 저도 "왜 R도 있고 Excel도 있는데 굳이 Python을 써야 하지?"라고 생각했었어요. 그런데 막상 써보니까 라이브러리들이 서로 잘 연결되어 있어서, 한 번 배워두면 정말 다양한 일들을 할 수 있을거 같았다.


---


## 🏗️ NumPy - 모든 것의 시작점


### NumPy가 뭔지 제대로 알아보자


NumPy(Numerical Python)는 정말 말 그대로 Python에서 수치 계산을 위한 라이브러리. "어 그럼 그냥 Python 리스트 쓰면 안 되나?"라고 생각하실 수 있는데, 한번 비교해보시면 차이를 알 수 있다.


```python
# Python 리스트로 계산하기
python_list = [1, 2, 3, 4, 5]
result = []
for i in python_list:
    result.append(i * 2)
print(result)  # [2, 4, 6, 8, 10]

# NumPy 배열로 계산하기
import numpy as np
numpy_array = np.array([1, 2, 3, 4, 5])
result = numpy_array * 2
print(result)  # [2 4 6 8 10]
```


NumPy는 벡터화 연산이라는 걸 지원해서, 배열 전체에 한 번에 연산을 적용할 수 있음. 이게 단순히 코드가 짧아지는 것뿐만 아니라, 속도도  빨라진다. 이유는 내부적으로 C언어로 구현되어 있기 때문이다.


### ndarray - NumPy의 핵심


NumPy의 가장 중요한 개념이 바로 `ndarray`(n-dimensional array) 이게 뭐냐면, 1차원, 2차원, 3차원... n차원까지 모든 차원의 배열을 다룰 수 있는 데이터 구조


```python
import numpy as np

# 1차원 배열
arr_1d = np.array([1, 2, 3, 4, 5])
print(f"1차원: {arr_1d}")
print(f"모양: {arr_1d.shape}")  # (5,)

# 2차원 배열 (행렬)
arr_2d = np.array([[1, 2, 3],
                   [4, 5, 6]])
print(f"2차원:\\n{arr_2d}")
print(f"모양: {arr_2d.shape}")  # (2, 3) - 2행 3열

# 3차원 배열
arr_3d = np.array([[[1, 2], [3, 4]],
                   [[5, 6], [7, 8]]])
print(f"3차원:\\n{arr_3d}")
print(f"모양: {arr_3d.shape}")  # (2, 2, 2)
```


여기서 중요한 건 `shape`이라는 속성! 이게 배열의 모양을 알려주는데, 나중에 데이터를 다룰 때 정말 자주 확인하게 된다. 


### 브로드캐스팅 - NumPy의 마법


브로드캐스팅은 정말 NumPy의 하이라이트 서로 다른 크기의 배열끼리도 연산이 가능하게 해주거든요.


```python
# 서로 다른 크기의 배열 연산
a = np.array([[1, 2, 3],
              [4, 5, 6]])  # (2, 3)
b = np.array([10, 20, 30])  # (3,)

result = a + b
print(result)
# [[11 22 33]
#  [14 25 36]]
```


이게 어떻게 가능한가? NumPy가 자동으로 작은 배열을 큰 배열에 맞춰서 확장해주기 때문


위 예시에서 `b` 배열이 자동으로 `[[10, 20, 30], [10, 20, 30]]`로 확장되어서 계산


---


## 📊 Pandas - 데이터 조작의 마법사


### Pandas가 왜 필요한가?


**NumPy가 숫자 계산에 특화**되어 있다면, **Pandas는 "실제 데이터"를 다루는 데 특화**되어 있다. 실제 데이터라는 게 뭐냐면, CSV 파일에서 불러온 데이터, 데이터베이스에서 가져온 데이터, 웹에서 크롤링한 데이터 등을 말함


이런 데이터들은 보통 다음과 같은 특징이 있다:

- 숫자뿐만 아니라 문자, 날짜 등 다양한 타입이 섞여 있음
- 결측값(비어있는 값)이 있음
- 행과 열에 의미가 있음 (예: 행은 고객, 열은 고객의 속성)

### DataFrame - 판다스의 가장 중요한 개념


DataFrame은 **정말 엑셀의 시트와 비슷하다고 생각하면 된다.** 행과 열로 이루어진 2차원 테이블


```python
import pandas as pd

# DataFrame 만들기
data = {
    '이름': ['김철수', '이영희', '박민수', '최지은'],
    '나이': [25, 30, 35, 28],
    '도시': ['서울', '부산', '대구', '인천'],
    '연봉': [3500, 4200, 4800, 3800]
}

df = pd.DataFrame(data)
print(df)
```


```plain text
이름  나이  도시    연봉
0  김철수  25  서울  3500
1  이영희  30  부산  4200
2  박민수  35  대구  4800
3  최지은  28  인천  3800
```


각 행과 열에 이름을 붙일 수 있어서 데이터를 다루기가 훨씬 직관적


### 데이터 조작의 기본기


판다스의 진가는 데이터를 조작할 때 나타나요. 정말 다양한 방법으로 데이터를 필터링하고, 정렬하고, 그룹화할 수 있다.


```python
# 나이가 30 이상인 사람들만 필터링
older_people = df[df['나이'] >= 30]
print("30세 이상:")
print(older_people)

# 연봉 순으로 정렬
sorted_by_salary = df.sort_values('연봉', ascending=False)
print("\\n연봉 순 정렬:")
print(sorted_by_salary)

# 도시별 평균 연봉 계산
city_avg_salary = df.groupby('도시')['연봉'].mean()
print("\\n도시별 평균 연봉:")
print(city_avg_salary)
```


이런 식으로 몇 줄의 코드만으로 복잡한 데이터 분석을 할 수 있다.


### 결측값 처리


실제 데이터에서는 항상 빠진 값들이 있어요. 설문조사에서 답하지 않은 문항이 있을 수도 있고, 데이터가 비워 져 있을 수 있다.


```python
# 결측값이 있는 데이터 만들기
import numpy as np

data_with_missing = {
    '이름': ['김철수', '이영희', '박민수', '최지은'],
    '나이': [25, np.nan, 35, 28],  # 이영희의 나이 정보 없음
    '연봉': [3500, 4200, np.nan, 3800]  # 박민수의 연봉 정보 없음
}

df_missing = pd.DataFrame(data_with_missing)
print("결측값이 있는 데이터:")
print(df_missing)

# 결측값 확인
print("\\n결측값 확인:")
print(df_missing.isnull().sum())

# 결측값 처리 방법들
# 1. 결측값이 있는 행 제거
df_dropped = df_missing.dropna()
print("\\n결측값 행 제거:")
print(df_dropped)

# 2. 결측값을 평균으로 채우기
df_filled = df_missing.fillna(df_missing.mean(numeric_only=True))
print("\\n평균으로 결측값 채우기:")
print(df_filled)
```


결측값 처리는 정말 중요하다. 왜냐하면 대부분의 머신러닝 알고리즘들이 결측값을 직접 처리할 수 없기 때문에 직접적으로 처리를 해줘야 한다.


---


## 📈 Matplotlib - 시각화의 터줏대감


### 왜 Matplotlib부터 배워야 할까?


시각화 라이브러리가 정말 많은데, 왜 Matplotlib부터 배우라고 하는 걸까? 사실 Matplotlib은 **다른 시각화 라이브러리들의 기반이 되는 라이브러리이기 때문이다**. Seaborn도 Matplotlib 위에 만들어졌고, Pandas의 plot 기능도 내부적으로는 Matplotlib을 사용!


그리고 Matplotlib의 가장 큰 장점은 **"무엇이든 그릴 수 있다"** 정말 세세한 부분까지 모든 걸 커스터마이징할 수 있음


### Figure와 Axes 이해하기


Matplotlib에서 가장 중요한 개념이 `Figure와 Axes` 이걸 이해하지 못하면 나중에 복잡한 그래프를 그릴 때 정말 헷갈린다.


```python
import matplotlib.pyplot as plt
import numpy as np

# Figure는 전체 그림판, Axes는 실제 그래프가 그려지는 영역
fig, ax = plt.subplots(figsize=(10, 6))  # 가로 10인치, 세로 6인치

# 데이터 준비
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# 그래프 그리기
ax.plot(x, y1, label='sin(x)', linewidth=2, color='blue')
ax.plot(x, y2, label='cos(x)', linewidth=2, color='red', linestyle='--')

# 그래프 꾸미기
ax.set_title('삼각함수 그래프', fontsize=16, fontweight='bold')
ax.set_xlabel('X값', fontsize=12)
ax.set_ylabel('Y값', fontsize=12)
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()  # 레이아웃 자동 조정
plt.show()
```


여기서 `fig`는 전체 그림판이고, `ax`는 실제 그래프가 그려지는 영역이에요. 이렇게 분리해서 생각하면 나중에 여러 개의 subplot을 만들 때도 훨씬 이해하기 쉽다.


### 다양한 그래프 종류


Matplotlib으로는 정말 다양한 종류의 그래프를 그릴 수 있다.


```python
# 여러 종류의 그래프를 한 번에 보기
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 데이터 준비
np.random.seed(42)
data1 = np.random.randn(1000)
data2 = np.random.randn(50)
categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]

# 1. 히스토그램
axes[0, 0].hist(data1, bins=30, alpha=0.7, color='skyblue', edgecolor='black')
axes[0, 0].set_title('히스토그램')
axes[0, 0].set_xlabel('값')
axes[0, 0].set_ylabel('빈도')

# 2. 박스플롯
axes[0, 1].boxplot([data1, data2], labels=['데이터1', '데이터2'])
axes[0, 1].set_title('박스플롯')

# 3. 막대그래프
axes[1, 0].bar(categories, values, color=['red', 'green', 'blue', 'orange'])
axes[1, 0].set_title('막대그래프')
axes[1, 0].set_ylabel('값')

# 4. 산점도
x_scatter = np.random.randn(100)
y_scatter = x_scatter + np.random.randn(100) * 0.5
axes[1, 1].scatter(x_scatter, y_scatter, alpha=0.6, c=y_scatter, cmap='viridis')
axes[1, 1].set_title('산점도')
axes[1, 1].set_xlabel('X값')
axes[1, 1].set_ylabel('Y값')

plt.tight_layout()
plt.show()
```


각각의 그래프가 언제 사용되는지도 목적에 따른 상황에 대해서 알아야 한다.

- **히스토그램**: 데이터의 분포를 보고 싶을 때
- **박스플롯**: 여러 그룹의 분포를 비교하고 싶을 때
- **막대그래프**: 범주형 데이터의 값을 비교하고 싶을 때
- **산점도**: 두 변수 간의 관계를 보고 싶을 때

---


## 🎨 Seaborn - 아름다운 통계 시각화


### Matplotlib과 Seaborn의 차이


**Matplotlib을 직접 사용하면 정말 세세한 부분까지 조정할 수 있지만****, 코드가 길어지고 복잡****해져요.** **Seaborn**은 이런 문제를 해결하기 위해 만들어진 라이브러리 **더 적은 코드로 더 예쁜 그래프**를 그릴 수 있다.


한마디로 **Matplotlib에 비해 복잡하고 세세한 부분을 간편하게 만들 수 있는 라이브러리가 seaborn!**


```python
import seaborn as sns
import matplotlib.pyplot as plt

# 샘플 데이터 불러오기 (seaborn에 내장된 타이타닉 데이터셋)
titanic = sns.load_dataset('titanic')
print(titanic.head())

# Matplotlib vs Seaborn 비교
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))

# Matplotlib로 그리기
ax1.hist(titanic['age'].dropna(), bins=30, alpha=0.7)
ax1.set_title('Matplotlib - 나이 분포')
ax1.set_xlabel('나이')
ax1.set_ylabel('빈도')

# Seaborn으로 그리기
sns.histplot(data=titanic, x='age', bins=30, ax=ax2)
ax2.set_title('Seaborn - 나이 분포')

plt.tight_layout()
plt.show()
```


언뜻 보면 비슷해 보이지만, Seaborn으로 그린 그래프가 더 깔끔하고 예뻐요. 그리고 Seaborn의 진가는 복잡한 통계 시각화를 할 때 나타남


### 상관관계 시각화


데이터 분석에서 변수들 간의 관계를 파악하는 건 정말 중요한데 Seaborn은 이런 작업을 정말 쉽게 만들 수 있다.


```python
# 숫자 변수들만 선택
numeric_cols = titanic.select_dtypes(include=[np.number]).columns
correlation_matrix = titanic[numeric_cols].corr()

# 상관관계 히트맵
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix,
            annot=True,  # 숫자 표시
            cmap='coolwarm',  # 색상 맵
            center=0,  # 중심값
            square=True,  # 정사각형으로
            fmt='.2f')  # 소수점 둘째 자리까지
plt.title('변수 간 상관관계')
plt.tight_layout()
plt.show()
```


이런 히트맵을 보면 어떤 변수들이 서로 관련이 있는지 한눈에 볼 수 있다. 빨간색에 가까울수록 양의 상관관계, 파란색에 가까울수록 음의 상관관계를 나타냄


### 범주형 데이터 시각화


Seaborn은 범주형 데이터를 시각화하는 데도 정말 강력


```python
# 여러 범주형 시각화 한번에 보기
fig, axes = plt.subplots(2, 2, figsize=(15, 12))

# 1. 생존 여부별 성별 분포
sns.countplot(data=titanic, x='sex', hue='survived', ax=axes[0, 0])
axes[0, 0].set_title('성별 vs 생존여부')

# 2. 클래스별 나이 분포
sns.boxplot(data=titanic, x='class', y='age', ax=axes[0, 1])
axes[0, 1].set_title('좌석 등급별 나이 분포')

# 3. 좌석 등급별 요금 분포
sns.violinplot(data=titanic, x='class', y='fare', ax=axes[1, 0])
axes[1, 0].set_title('좌석 등급별 요금 분포')

# 4. 나이와 요금의 관계 (생존 여부로 색칠)
sns.scatterplot(data=titanic, x='age', y='fare', hue='survived', ax=axes[1, 1])
axes[1, 1].set_title('나이 vs 요금 (생존여부별)')

plt.tight_layout()
plt.show()
```


각 그래프가 주는 정보들:

- **countplot**: 범주별 개수를 보여줌
- **boxplot**: 그룹별 분포의 요약 통계를 보여줌
- **violinplot**: 분포의 모양까지 자세히 보여줌
- **scatterplot**: 두 연속 변수의 관계를 보여줌

---


## 🤖 Scikit-learn - 머신러닝의 만능 도구


### 머신러닝이 뭔가요?


머신러닝은 컴퓨터가 데이터로부터 패턴을 학습해서 새로운 데이터에 대해 예측을 하는 기술 예를 들어, 과거의 주택 판매 데이터를 학습해서 **새로운 주택의 가격을 예측**한다거나, 과거 고객들의 구매 패턴을 학습해서 새로운 고객이 상품을 구매할지 예측하는 것


**Scikit-learn은 이런 머신러닝을 Python에서 쉽게 할 수 있게 해주는 라이브러리**


### 간단한 분류 예제


타이타닉 데이터로 "이 승객이 생존했을까?"를 예측하는 모델을 만들어 보자!


```python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder

# 데이터 준비
titanic = sns.load_dataset('titanic')

# 필요한 컬럼만 선택하고 결측값 처리
features = ['pclass', 'sex', 'age', 'sibsp', 'parch', 'fare']
data = titanic[features + ['survived']].copy()
data = data.dropna()  # 결측값이 있는 행 제거

# 범주형 변수를 숫자로 변환
le = LabelEncoder()
data['sex'] = le.fit_transform(data['sex'])  # male=1, female=0

# 특성(X)과 타겟(y) 분리
X = data[features]
y = data['survived']

print("사용할 특성들:")
print(X.head())
print(f"\\n데이터 크기: {X.shape}")
```


```python
# 데이터를 훈련용과 테스트용으로 분리
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"훈련 데이터: {X_train.shape}")
print(f"테스트 데이터: {X_test.shape}")

# 모델 생성 및 훈련
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)

# 성능 평가
accuracy = accuracy_score(y_test, y_pred)
print(f"\\n정확도: {accuracy:.4f}")
print("\\n자세한 성능 리포트:")
print(classification_report(y_test, y_pred))
```


### 특성 중요도 확인


Random Forest 모델의 좋은 점 중 하나는 **어떤 특성이 예측에 중요한지 알려준다**


```python
# 특성 중요도 시각화
feature_importance = pd.DataFrame({
    'feature': features,
    'importance': model.feature_importances_
}).sort_values('importance', ascending=False)

plt.figure(figsize=(10, 6))
sns.barplot(data=feature_importance, x='importance', y='feature')
plt.title('특성 중요도')
plt.xlabel('중요도')
plt.tight_layout()
plt.show()

print("특성 중요도:")
print(feature_importance)
```


이런 결과를 보면 "아, 성별과 요금이 생존 예측에 가장 중요한 요소구나"라는 걸 알 수 있다.


---


## 🚀 다른 유용한 라이브러리들


### SciPy - 과학 계산의 보물창고


**SciPy는 NumPy 위에 구축된 과학 계산 라이브러리** 통계학, 최적화, 신호 처리 등 다양한 **과학 계산 기능을 제공**


```python
from scipy import stats
import numpy as np

# 두 그룹 간 평균 차이 검정
group1 = np.random.normal(100, 15, 100)  # 평균 100, 표준편차 15
group2 = np.random.normal(105, 15, 100)  # 평균 105, 표준편차 15

# t-검정 수행
statistic, p_value = stats.ttest_ind(group1, group2)
print(f"t-통계량: {statistic:.4f}")
print(f"p-값: {p_value:.4f}")

if p_value < 0.05:
    print("두 그룹 간에 유의한 차이가 있습니다.")
else:
    print("두 그룹 간에 유의한 차이가 없습니다.")
```


### Plotly - 인터랙티브 시각화의 혁명


Plotly는 웹 기반 인터랙티브 차트를 만들 수 있는 라이브러리 마우스로 확대/축소하고, 호버해서 정보를 보고, 범례를 클릭해서 데이터를 숨기고 보이고 이런 게 효과나 기능이 모두 가능하다.


```python
import plotly.express as px
import plotly.graph_objects as go

# 인터랙티브 산점도
fig = px.scatter(titanic,
                 x='age',
                 y='fare',
                 color='survived',
                 size='pclass',
                 hover_data=['sex', 'embarked'],
                 title='타이타닉 승객 정보 (인터랙티브)')

fig.show()  # 브라우저에서 열림
```


이렇게 만든 차트는 웹페이지에 바로 임베드할 수 있어서, 대시보드나 보고서를 만들 때 정말 유용


---


## 마무리하며


사실 파이썬으로 코드적으로 코딩을 하는 것에 대한 거부감은 없었는데, pandas나 numpy에 테이블 데이터를 다룰 때는 조금 어색했다.


언어를 배울 때 자연스러울 수 있도록 많이 쳐보고 다양한 라이브러리에 대한  연습이 필요할 거 같다.

