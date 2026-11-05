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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YESS4XMV%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV95tcfANkbVvKWIcMQJ8LhmSIDMYaGfpaHExg4Meg%2FAIhAKAOYWjncISVfQTwOjcvRlB8j4Rb88NKosy0S0OT0HzjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi20LeWHOVd2AuWskq3AMpYN2CPCVerOJ3XrijyqgYp4rf4n4zXnx6JgSdaDHwl87FgRWXqxprA7gP%2Ba6wUknfrP8Yfg2a7a9QMpQW0RvsZ99Hlk9i1St40sdMnAvJAD9CrZ5uH%2Bzw8k0EM9OEhXjF8W6%2FoTKAllvN%2B9C7dhjBGDVw9bZOx1JP3Lm6FmqSCpopO%2FvNB6NpflbieZzZAc0iUiDOfE0bHBB2mSMNlEDNbok%2FgLzNeoffEFtL85%2FKzP8wA%2B2qWd2RxDJYzciywnxHdEJN4e3RdfwpDUH6eJ%2Fvrl3nBU0VjMiDJDwCPpKHCXPdKtpKV8qomru73DvpBSYboUNqxUKogbrGUTAHL74HbFAf%2Fwk%2Bp3ulH374nFFC5PkY3vTUdrhKfkfHPrwCmo9Jt%2FRITKgBy13uVp2ibhte1oMA2Z42%2F2src3yqYyWmX4hfLMM2NR2d%2BrCE0d3rrS2sd9xcNiyMfEqwM71FJ5XC0uJ1rP4j0cLAxdRARyvQnPYk%2BBmijkdLpvv%2FHujcYJ7TVAsm1WslIHaEfjwX%2F3vZGsjc%2B%2B4Km%2BH4p1M54WRhwRsflD8pjUmSBBXlZIL2afcBEzzn9OhcFGm6Cvxl81UC1VGHV0s1T7Xi8D0UPJND%2FmR0C2WOXTgEjwXRmzDJiLDXBjqkASTaYx4D%2BKt10ImUkS2RxQIi2NyunzsQ1NPF9oyEG6gMjh6IeuEBKPBG31hKLENwTS8yQ4%2FImpEj9r9f9pkDirfq104MVsCcTMFyMWR0V51X6YOdlsVW%2FLW0oGWclWzuN36QAZpOSzsR%2BtiTiDuyhrxMlXqwzYnbUBn6HbunBJWkiZejYcZGnG02IJUgU7bi%2FHLXEASoyEl8hu9JiJjuwJePGcY7&X-Amz-Signature=b6cf506ce602ede60f9f8273a52b52e2f46d568b440ea747319bf97220d8f3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
