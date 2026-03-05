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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N572TDA%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiqmKYsCxr0P8ephv5WPlDXIFEW7Ve1vMynwmkLbJ4AIgfasYbkRPyISz5c4Vbwn%2BK1%2BQ6johLdkU%2F009ftOzZGEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAdvsxW0C3hxLzgaircAyDTjXF6hD21QYQgC7e9ELKW9bkA15Us%2ButFws230uB6QziART8mNpfcssSIu9fMTb0%2FAqTuJxjKGnTOB%2B4XEiWOFUi0CfjGMA4uZY%2FV43jVbiFKC4wxZV8BV9QyY4yHXXaQzCKgVSGCq24W4uiiLSyXNcHowiv1wfrrY6FxTeocmR3rH%2BUd3R2zPfu%2FakkNuiosBGVZ0%2Bn14IERCX8vzGhon%2B1nvvKr0p6UT%2Fz5SxTOs1nOtaL4kuVvgiHAP93PR4C9GYNxgc7H%2BlgXM6A4Sd%2BGR9ab%2F24dheuEi6Kk3qKElOu8FVry1lKwjxZ9w8YzMp21AUJzfyFZe3IUB5OztK%2FhVYzeWy%2FQEps2FBN7OAHqIHYbhW7AbZLbngJ9l36Mm3gB%2BTgmqKwr3b7CE9dz24oSX5qIMAmfj2i7io0jUQE7xsSxLpZfalmu26DAc1kWIQFEbNTfjnUYTxyRkLCGWyjCnAKnm3w0C4oIlD5itxHpvVRPwEFRoysupYxu%2BNbf3%2BJqdbwDXE3eyXu5J1%2BojWHvb5T%2BpH7n%2BEPxWi9IJ3b1PNheUo3lL4nVRZTPbYWnwvDUy89e6pnplLCOAnpLGbTOzWbYYiPjKwUvgz5aZDzj0JHDxyfsGAhQSNAaMOnEo80GOqUB%2FfiQ5K6%2B7yPADDuOB%2BXEfh%2F140xE2fFx%2FS4QarMaaVrJ37UX345%2FV%2FQmCCswsnIujh2SudnlRMu86%2BX17z7BeUUZmRig87SWfmHuTkoFHTbq%2F9cmW2UY1CWBZXY6s3zBcq5IRNNpxR8DhCAoZ2l%2B%2F7%2BMNrAUllS42%2FxqFV2FTa%2FSiM4G%2Bo%2BK7W1xsn9JxwdIgAiyNuwdn4jGsXHLPWOVxXXEXkAH&X-Amz-Signature=4c2ab97e1fe84ae38b26e0a4ba89f50505d2476cb2b666c36cfff84b0864795d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
