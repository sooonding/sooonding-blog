---
title: "[SQL] HAVING,WHERE,NULL"
slug: "having-where"
description: "HAVING,WHERE,NULL"
tags: ["sql", "big-query"]
author: "seongjin jeon"
date: "2025-08-22"
modifiedDate: "2025-08-23T04:19:00.000Z"
notionId: "2579b006-ca58-806c-bac6-e5dd411c4134"
---
## HAVING 과 WHERE의 차이


### 이 둘은 그룹화와 집계를 기준으로 나뉜다.


`WHERE`은 도출하고자 하는 데이터에 대해 그룹화와 집계 전의 조건에 대해서 필터링을 하는 것을 말한다.


`HAVING`은 그룹화와 집계된 이후에 대한 데이터를 조건에 의한 필터링을 할 때 사용된다.


### 사용 가능 함수와 사용하는 위치도 다르다.


`WHERE`는 FROM 바로 뒤에 위치하고 `HAVING` 은 GROUP BY 뒤에서 사용이 가능하다.


### 정리


WHERE과 HAVING은 모두 조건 필터링을 위한 것이며, 언제 필터링을 적용하는지가 차이로 둘 수 있다.


`WHERE:` **그룹화/집계 전** 개별 행 | `HAVING`: **그룹화/집계 후** 그룹 단위 


## SQL에서의 NULL은?


### NULL이란?


NULL이란 “값이 없음” or “알 수 없는 값”을 나타내는 상태 값을 말한다. 빈 문자열이나 0와는 달리 없는 값이라고 생각하면 된다.


NULL은 당연하지만 어떠한 값과도 비교 연산도 될 수 없다.(그냥 NULL이 반환 됨)


### 그럼 SQL에서는 NULL 판별을 어떻게 하나?


`IS NOT NULL`과 `IS NULL` 을 이용한다. 


`IS NULL`  은 말 그대로 null인 값에 대한 데이터를 보고 싶을 때 사용하며, `IS NULL`

