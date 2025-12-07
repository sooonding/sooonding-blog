---
title: "Tableau Public에서 인상적인 비즈니스 시각화 대시보드"
slug: "visual-vocabulary"
description: "Visual Vocabulary"
tags: ["데이터시각화"]
author: "seongjin jeon"
date: "2025-08-03"
modifiedDate: "2025-08-04T00:24:00.000Z"
notionId: "2459b006-ca58-80f3-ab41-ce3760c8c692"
---
[bookmark](https://public.tableau.com/app/profile/andy.kriebel/viz/VisualVocabulary/VisualVocabulary)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVDTJL4M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ect3kOdSqJC1buhFfO%2BdcUzjgPeqyyg4s6%2B%2FEGj2SQIhALXn6EamJrTof87592vDaZDiKRWH7HVQNk9yD9vbOkvUKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKVIbI0ozVMi4ev0cq3APOSl3KBX4mv7YPKIs9Y74A6XC2sZpSkeRsa002z%2BATYCT6bQD8uroE9HrcUirBpQOKmc68D8H7d%2FDlERwAIg0JjCHYArwvLmjavjtD6j4ihKMPHmTnkMNYAYOjM8AItLHcb1Y5FCV7%2BK%2BzNVFfMF5wimJlqV3fCdvgX9Zx6p5dFmyKv6gV384GjJ2daB670lfOO%2FKSqmdV5nsiisMGk%2BXMoFGN3gqlgTDD1%2FHaR4YMjU7PoEta7fx8LAjsduiNR1v6Iqy6kbNBu62JepIqnzRXuuMFZwSD0ZsgHChimNVnSWXwFhrk2dp6bQeQOH3PbLnl1qM7HpVkNzJ8tc2i7yPXCRQ9VOTWENeN2eJX7v%2B%2Bw%2FBWYxR7wut53ZOaCFpkBMkfnninLdWBZib%2Ft4L3ebAVYsU7NjbtRDG%2BFpdSOZ0yB2sTdu0nVE5GNr4CJLXVuX8YfmjwTPXzSHT%2BD2HX%2F3J5VeQxSae4BO6GVU9lC0v8HldgA8m5nbJtim0qWWkRUQzxYb1iywTENCKvY7F83yCA%2FMUTnAExRH%2BfQf2H9e7CkIwntiXX0Rxl6w8eHO%2FV3l5WL0t4X4zaUbNlz0cyNp8KsoRXCgYe37QolzoiGfGi5T2Ucw2AaY5SvaD5VzCv69LJBjqkAdfNrPHlR46kh%2Bp77Mtq4Nk1tJqMgHWjgc8M%2BNkNCD6OTGnlg4tTEazL9Ae%2FApSdyHcQRgcI%2FE2dG4NMSGj4kwe4kKx0DMYCjeKBUhFGHVf1KcY2U%2FsGTPcOJDtEHPVJU0ydW6rzbRNG27KP27FIFLf8Z5hl3pZzo6iNRPEdNpbgsIqsRtKtK0B%2BinkRCmcYqARNPAco4yPQM5KaMqk8pb5%2BolRy&X-Amz-Signature=c4a4b88dd018987c777c639d0cb052f7957ccd6ffa067202e702cadcf68e6c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
