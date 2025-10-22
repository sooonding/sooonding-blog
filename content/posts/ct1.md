---
title: "[python] 팰린드롬"
slug: "ct1"
description: "팰린드롬"
tags: ["알고리즘"]
author: "seongjin jeon"
date: "2025-06-26"
modifiedDate: "2025-06-26T01:24:00.000Z"
notionId: "21e9b006-ca58-8011-809b-d8913d8d53f7"
---
### 문제


`"토마토"`나 `"기러기"`처럼 거꾸로 읽어도 똑같은 단어를 **'팰린드롬(palindrome)'**이라고 부릅니다.


### 문제 해설


문자열을 거꾸로 해도 기존 인자로 받은 문자열과 동일하게 맞추면 된다고 생각했습니다.


### 해결 방법


```python
def is_palindrome(word):
    if word[::-1] == word:
        return True
    return False




# 테스트 코드
print(is_palindrome("racecar"))#7
print(is_palindrome("stars"))
print(is_palindrome("hello"))
```


### 풀이 해석


인자로 받은 데이터를 문자열 슬라이싱을 통해 거꾸로 뒤집는 방법을 채택하였습니다.


문자열을 뒤집고 같으면 `True`를 반환 아니라면 `False`를 리턴하여 해결!


### 다른 풀이


```python
def is_palindrome(word):
    for left in range(len(word) // 2):
        right = len(word) - left - 1
        print(right)
        if word[left] != word[right]:
            return False

    # for문에서 나왔다면 모든 쌍이 일치
    return True


# 테스트 코드
print(is_palindrome("racecar"))#7
print(is_palindrome("stars"))
print(is_palindrome("hello"))
```


### 풀이 해석


다르게 푼 코드도 확인하였는데, 해당 풀이는 인덱싱으로 접근하여 문제를 푼 방식입니다.


먼저 문자열 길이의 반을 갈라서 루프를 통해 좌측의 index에 접근하고 루프 범위를 반으로 나눈 다음 각 쌍이 일치하는지에 따라 리턴 값을 달리 줬습니다. 

