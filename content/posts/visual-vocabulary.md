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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF5I2WBK%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvXr0nCiJv5IsAQ8uy9SbSA%2FmASP0n06uFkx6WzFtpHAiEA3I4BOoBI3yZmyCSnX%2Bc0hxUit%2BpuSya8vILIZ3112wwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3CuG%2B1FzHFKHFN3yrcA25kkfxVP8aArqEXR84Ir5bdBwgqNpyLXjn8hvMFXLkv1QOLmZ2SZyhoFzlRuvBmDFXMQnPZFImIV6fWb66bL7n9VOrIBYqQQ2eEg4AS10Bo%2BqkAUaBIcvsNiFGKBxqJPrsXPCfdqi2CZGKCvT019gi6TZOTQgfFlJJivFpa5FaMnJwsHQJzbO6vOxYZ8EjbeaCzC4T0fXmigPRn1dhswCWk7OeJYRFzhgq2sQCuaurfpFfuWXkhZNc8DK0t0lB8PKQvw7XYTfKIERZFCJG4D4JV2jrct0HEOJE6lw9lYyVtRP2Iez3yUrRW6PII1SPkBmyjol1vBK2v71Wsqs%2B6XmBDuKqRSPR2MiV03nJEQ%2BJ5bpsQ15IoyIbcvRRxPXpbmASEe%2FA%2FkFthCWqz28blSsZcVxW0%2BVDHcOX6hJtUlpzxJhJ2UnLKHZh9l0vDSMl79VT2FfhfR%2ByTksPlOnIT3WqVrm5IegM56CXjp9BoPRhlN3Wd4D2kNLkDdPgIJtBZxHBpaeNiXGOUWHccJWF3EYN63obfHOjsFh%2BVA%2Bi6sqkEpOzrpAFHDD%2F7oGX8lBYWEiRxcALOknVi7ddx659htHD2B2gPuwFHstylOo5GW6mUxA8rrfJPQjN%2BCu%2FiMMz6mNEGOqUBOvhDrScTVekYs63j4xEitLodVHOWWgbTp%2FQ%2BWoRNn%2F1b485Bs%2Bpm3w3uMX5X77g7Q3VN%2FnNNhHHxvX1u%2BcIMoSqEbRiZZSvHXND8Zse6DPdqqUE3%2BrAoJKl2GrLVtVDDsLlovRx6fvYSVpekquXIVGtODjDbNPxF7V%2BNJMYiRXn21J53Si2a0%2B3AE53LyiAzvW3bzaIT93o6bisCoPOMOg3wxxZz&X-Amz-Signature=b8af9eb0df1d0795469f050865ae855729a44f6d401faf7a5ecd73e9ac1c2fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
