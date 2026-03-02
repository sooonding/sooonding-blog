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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMRJ2MVJ%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYo416Ej3lijiFJM3hNHxRIM18tFapwYNC5NoeOE4xfAiEAlEitX5XhLvHpnpQtcSJa0X2RThezUdkoF7zlmSNic4cq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDE2sigksGv7Nm0Km0ircAz%2FT5P3kaTqIYU7A1tfSMNzEX5Z8hV2Nj0qXD60JO2cj%2BUJoiMq%2BsvKG2uQRfQJOzMgNTsxIP%2BWGzmagN0t0qQ5pjkQy6tZgjuvuoXJeRmEO2qnIhhOYzYA2EZP9Se0nYQvwFdp%2FSBnJYgF2osbHqrPTDxZ4uDABs7tzCfaHwHQYYbSJN9e9d0lXGcRlEsZb%2BDmJCwm2awAFR2UIVh8m4qoAJyZY75pJDIQLnrbCOLxI4w7lO3t6nl3LHtVZ%2FoK38Q1UDtgcq6bQZK4Y88wKBNuYqdcofna8vpYnj3BOIh2eM%2Ba7r%2FYNMflMte1qEl2Vyvyscr6HvUwXX8%2FPwMN6HGJanChwbiRsObdgSSYh2Fr5dn3iHfkiKDoWQwT7kNx4aLaF8wR6vTWe3ROU24J003SxFAKMSzN1%2FhxhnGPpl%2BWCPkTGaiqJG9%2Fvi36RQiQg6K1qO%2FhnKofsx3lk10zCSE1UrPmj3Qq5v3SOaFj16yK2rnflb7k3UP4IJCZIS5z4f7d%2BCAlEy4EeCsI%2F2jrAAG5J2EYpE6BGKWMlt7%2BmyrGf6vMhcNurhIvK2jKo3D7G1G9fHP3rPvm9BY%2FBc%2Fxv8FV1Tn1y8GejHMX%2FbaKkpBu%2FJ%2B8rGIvfrGb05GQ%2FMPTIk80GOqUB4odi5aE3VEjucswQlajPnNT%2FJv5eCxlsrvD77mK2X2mzHv0z3jWGr7b8AT9u11xk187Zfxhrgp%2BFrjc9jd8%2FYiS%2BIUZttgvobQvQVt7BHp4CyweyRKvXlurulGk8qPyDg8RdxOtp7DGGsuP9grEpOH9jBKCm8wUKq9fSAeyz7pobUpyBjyaEHexCaOYB6Y70imdKC8aXYype%2BFSwM0yC7SQg9731&X-Amz-Signature=c55d6ef0f089b0d079f3364065a9659a96a9079fc4f90a79454fdb35b3495c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
