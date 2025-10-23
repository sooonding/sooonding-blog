---
title: "파이썬 스타일 가이드"
slug: "pep8"
description: "PEP8 스타일 가이드"
tags: ["python"]
author: "seongjin jeon"
date: "2025-06-19"
modifiedDate: "2025-06-19T06:41:00.000Z"
notionId: "2179b006-ca58-8060-bd38-df2b7dd5e560"
---
## 이름


### 이름 규칙


자바스크립트처럼 카멜 케이스나 스네이크 케이스 스타일로 쓰는 것 처럼 pep에서는  여러 단어일 경우 **“스네이크 케이스”**로 나눠준다.


```python
good_variable_name = 1

def function_name():
	print('good')
```


모든 상수 이름은 **“대문자”로 쓰고,** 여러 단어일 경우에 스네이크 케이스로 작성한다.


```python
NAMED_CONSTANT = 3
```


## 화이트 스페이스


### 들여쓰기


들여쓰기는 스페이스 4개를 사용


```python
def hello():
		print("Hello")
```


## 함수 정의


함수 정의 위 아래로 빈 줄이 두 개씩


```python
def first():
		print('a')


def b():
		print('b')


def c():
		print('vc')
```


## 괄호 안


괄호 안에는 띄어쓰기 금지


```python
names(hahas[1],{agg: 2})
```


## 함수 괄호


함수 정의하거나 호출할 때, 함수 이름과 괄호 사이에 띄어쓰기 금지


```python
def agg(x):
		print(x)
		
		
agg(2)
```


## 주석


일반 코드와 같은 줄에 주석 걸 땐, 주석 앞에 띄어쓰기 최소 두 개를 입력


```python
x = x + 1#주석 (❌)
x = x + 1  # 주석 (✔️)
```

