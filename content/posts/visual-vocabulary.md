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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJNWGJ4%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWk3r0PZM4vFfdfJqUysRRQPYNwNRylefTogRslzaqcgIhAJml%2BPnIkZMZEkuY6Txd597TZLH6WX6KyiA4%2BI9Qsyi%2FKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPZ51I9e4rt%2FvbLuQq3AOCQAWBfYpOOkbiKS9JdVtAkf9lDxlf1kf8ZEEnA7D%2BDXxtxttp1ZsgKm5bZJcoK%2F0EO9Q2I8RGT3ddLbhkjVzDT3cPOtxDHZAXJWpwDOs5V%2FpMxhiiIBuGRdiHtaQ2wnZmwWmNSGS3a1lLRWyDINugl3kFAXJ7Wa5OW72%2BYzjVsQJ3cdo2AExJS6ubLx0Igfov5Kwj7gn8W%2B14dk8lNdmWq1CU7%2Fckz6mnbdXsdqybETzr9bbvYib5QNyUlPLBd%2Fqodqppd5ll2tt4lUDHhd2HRKdyU4kwfL5kC44bjIy5Hm6Usqz0YWhK6F6TfEneVdRZhC2DcFrhYyTeD1oLXDzGB%2BiXO5VLgx7fV7xoi1kBVgfeo8QaHSW3HStNWyV4HwG8O4HrtoD%2BS57Qov%2FKMeDkcVGV2U7B2sWwwAXbSZEm1%2Fw52fSRaALtsa7zKEZT4xaTopFtpKH%2BWc36bUiU3%2FCbEVTRwjDRy42azbPc2a4Itk%2BeA9lDvzKNoRyio%2Bn55FzuJFAH%2BgJcjyTYrS4dvnP7f11hdj78HK5YMYbTK3dV9Km3uHFyc0Oi5f0gR7Vjh0cD0G06MTH5Sxmsm1DnwRLMREhmBc9O91ZkdK8V1DLOXXEaokvEs18I0qo4bjDe3tPUBjqkASGgU149ytayKpji4LkEKt%2Biy7G7AfB73a9t9jZqJ4fS%2FnhnKfnr2ZE8zI3UWjkbihB3tmOaE0UUujzHmTpIY6poxqNzty%2FwDuMtUyumYTp2eFbsPekUlD%2BFfPADS8Z%2B1o6MzV7fCTpnZb3EB5HphFoNPfxA4obGsvI6hQiW7VnLQJ5Zl3kBqxCgKFtTfxSPytMVefEBFMN%2BC9IcR1TiqO7JquvY&X-Amz-Signature=c1342cdd3c73b6578a75ab6d5795d83b61d025e1b39aba1d152a2cf520233a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
