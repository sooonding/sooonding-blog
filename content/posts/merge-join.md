---
title: "Pandas merge()와 join()"
slug: "merge-join"
description: "Pandas merge()와 join()"
tags: ["통계"]
author: "seongjin jeon"
date: "2025-08-03"
modifiedDate: "2025-08-04T00:24:00.000Z"
notionId: "2449b006-ca58-80af-ba42-f6f7c6d06388"
---
## 🔍 merge()와 join()


### merge() 메소드

- **기준**: 특정 컬럼(key)을 기준으로 데이터 결합
- **유연성**: 다양한 컬럼을 key로 지정 가능
- **문법**: `pd.merge(df1, df2, how='inner', on=None)`

### join() 메소드

- **기준**: 행 인덱스(index)를 기준으로 데이터 결합
- **간편성**: 인덱스 기반으로 빠른 결합
- **문법**: `df1.join(df2, how='left')`

## 💡 merge() 메소드 사용법


### 기본 사용법


```python
import pandas as pd

# 샘플 데이터 생성
df1 = pd.DataFrame({
    'id': [1, 2, 3, 4],
    'name': ['Alice', 'Bob', 'Charlie', 'David'],
    'age': [25, 30, 35, 40]
})

df2 = pd.DataFrame({
    'id': [2, 3, 4, 5],
    'salary': [50000, 60000, 70000, 80000],
    'department': ['IT', 'Finance', 'HR', 'Marketing']
})

# 기본 inner join (교집합)
result = pd.merge(df1, df2, on='id')
```


### merge() 조인 타입


### 1. Inner Join (교집합) - Default


```python
inner_join = pd.merge(df1, df2, how='inner', on='id')
# 양쪽 데이터에 모두 존재하는 key만 결합
```


### 2. Outer Join (합집합)


```python
outer_join = pd.merge(df1, df2, how='outer', on='id')
# 양쪽 데이터의 모든 key를 포함, 없는 값은 NaN
```


### 3. Left Join (왼쪽 기준)


```python
left_join = pd.merge(df1, df2, how='left', on='id')
# 왼쪽 데이터의 모든 key를 유지
```


### 4. Right Join (오른쪽 기준)


```python
right_join = pd.merge(df1, df2, how='right', on='id')
# 오른쪽 데이터의 모든 key를 유지
```


### 고급 merge() 옵션


### 서로 다른 컬럼명으로 조인


```python
merge_diff_cols = pd.merge(df1, df2,
                          left_on='employee_id',
                          right_on='emp_id')
```


### 여러 컬럼 기준 조인


```python
multi_col_merge = pd.merge(df1, df2,
                          on=['id', 'department'])
```


## 🚀 join() 메소드 상세 


### 기본 사용법


```python
# 인덱스 설정
df1_indexed = df1.set_index('id')
df2_indexed = df2.set_index('id')

# 기본 left join
result = df1_indexed.join(df2_indexed)
```


### join() 조인 타입


```python
# Left join (기본값)
left_join = df1_indexed.join(df2_indexed, how='left')

# Inner join
inner_join = df1_indexed.join(df2_indexed, how='inner')

# Outer join
outer_join = df1_indexed.join(df2_indexed, how='outer')

# Right join
right_join = df1_indexed.join(df2_indexed, how='right')
```


## ⚡ 언제 어떤 메소드를 사용해야 하나


### merge() 메소드를 사용하는 경우


### ✅ 추천 상황

1. **특정 컬럼을 기준으로 조인**할 때
2. **서로 다른 컬럼명**을 key로 사용할 때
3. **복잡한 조인 조건**이 필요할 때
4. **SQL JOIN과 유사한 작업**을 할 때

```python
# 예시: 고객 정보와 주문 정보 결합
customers = pd.DataFrame({
    'customer_id': [1, 2, 3],
    'name': ['김철수', '이영희', '박민수']
})

orders = pd.DataFrame({
    'order_id': [101, 102, 103],
    'cust_id': [1, 2, 1],  # 다른 컬럼명
    'amount': [50000, 75000, 30000]
})

# 서로 다른 컬럼명으로 조인
result = pd.merge(customers, orders,
                 left_on='customer_id',
                 right_on='cust_id')
```


### join() 메소드를 사용하는 경우


### ✅ 추천 상황

1. **인덱스 기반 조인**이 필요할 때
2. **빠른 성능**이 중요할 때
3. **간단한 조인 작업**일 때
4. **시계열 데이터 결합**할 때

```python
# 예시: 시계열 데이터 결합
dates = pd.date_range('2024-01-01', periods=5)

stock_price = pd.DataFrame({
    'price': [100, 105, 103, 108, 110]
}, index=dates)

stock_volume = pd.DataFrame({
    'volume': [1000, 1200, 800, 1500, 1300]
}, index=dates)

# 인덱스 기반 빠른 조인
result = stock_price.join(stock_volume)
```


### 속도 측면

- **join()**: 인덱스 기반으로 일반적으로 더 빠름
- **merge()**: 유연하지만 join()보다 상대적으로 느림

### 메모리 사용량

- **join()**: 적은 메모리 사용
- **merge()**: 더 많은 메모리 사용

## 🎯 더 많은 예제


### 1. 데이터 검증


```python
# 조인 전 중복 키 확인
df1['id'].duplicated().sum()
df2['id'].duplicated().sum()
```


### 2. 조인 후 데이터 확인


```python
# 결합 결과 검증
print(f"원본 데이터1 행 수: {len(df1)}")
print(f"원본 데이터2 행 수: {len(df2)}")
print(f"결합 결과 행 수: {len(result)}")
```


### 3. 컬럼명 충돌 처리


```python
# suffix 옵션으로 컬럼명 구분
merge_with_suffix = pd.merge(df1, df2, on='id',
                           suffixes=('_left', '_right'))
```


## 📝 요약 및 결론


| 특징         | merge()        | join()        |
| ---------- | -------------- | ------------- |
| **결합 기준**  | 특정 컬럼(key)     | 인덱스           |
| **유연성**    | 높음             | 보통            |
| **성능**     | 보통             | 빠름            |
| **사용 복잡도** | 높음             | 낮음            |
| **추천 상황**  | 복잡한 조인, 다른 컬럼명 | 간단한 인덱스 기반 조인 |


### 🎯 선택 방법

- **복잡한 비즈니스 로직**: `merge()` 선택
- **빠른 성능이 필요**: `join()` 선택
- **인덱스 기반 작업**: `join()` 선택
- **SQL 경험 활용**: `merge()` 선택
