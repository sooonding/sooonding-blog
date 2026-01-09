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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW5KTWI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcECOVyfxwNJapN7UJwnpf7qsSFMBm5eFsMBMaLnaiKwIgR%2FU3ndsRFPYLihT4%2BCmwCs7iN0bjGPWI3INsnyxyrKIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQHybJTPv0x9TcRyircA82Gvs3J6fGeE2CeOyqhsUMSV7qtvgzxUP4DnBl9ZI0NvHKbA6bsoCoBUm%2BdMvlbwPt%2BXRlBhZOqgq5TcjU5hLo9YZKel3qJrpd7gdyWYpvGjJpNrIvT2EVZiI5kSYOYgsHZUyf3dZQhNGDbYf2LUMklVP3XD8M77TO%2FC3FSBAVpEH2Lm6tlOQD%2FEjNDu%2Bfo2wNIIPZlkxzsqJWknvzkWDg83S63v2a6ARkO5vK%2FoWqU8w4zBtmuJVMznGguv2vuF%2B51mtdKQV9wHT%2BgSpz9PNB2PspBQwCdGYogRPn8k5lR0%2FvmW%2F0yIBOkDzL4xKGPpIye6Fcu2GkgYe5CHxeylKF6fSKlmDnwQNv7lZdOWNf9NKno23LcLVeHkY3ne62jiXFKiIxSwBfZngQO6n%2FrVKeQJz1MwZiSGkIcVxQNu9Y1frmbFCQ04aWxtJinXsE0TSnGeoVIDukb9ckpnbfwGZdRmM%2BqKnTnjR3PkdhYQRml7YStEvrtBnWeF%2BSZ%2FXJCZCVTSzGKvBQaz2Wtqu0DInYNd8eaY3myI3wLe%2BcAYlMWv6fIEoeKieBLuIb%2BAiWJmZ4F4tkbrWanGod%2FhXJNwX74YIOUnjRflatuql%2Bnp4Ter1got7KaAQuKcW3yMMGSgcsGOqUBCIPXkV9HRF2HIu9XDo9bYd6WtBw158GXx2p5OMHN%2F3FUa8fOqGrSmC4SdF%2F0ODqyYRs3Cq5pTYcj4G7vxSkj1Z6PKci%2BY%2BqVOkhgUNqj3PFCsSV8Cl8AEj5BbZeNxTG3W%2FaApxkFLBqnK1Cbyxs8U8iuNbzVMf4eUi3TrkH7aYmvgpIJe7YKytgHphN%2BH9QCX75U7PovKwHnPfhrdSbgl%2Fmk1yb0&X-Amz-Signature=424d04a3152c0310dbd6c235e9eeba03dd55e83d58fb8e3bb2b4813f73fa7b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
