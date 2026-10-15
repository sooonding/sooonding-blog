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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBVAQPI3%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCseJh31UMsNbKNLZydVeAyXlPEAVgbnfDeQ1Sn0jXJRAIgOOksqIuB4RtQr%2BVIYJ3piFSy8c4PSwcLZjDZhVBSUSAqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Fc6b4y%2Fes95m%2FRwircA%2B%2B%2BEHsIW2jAfgDgb603SmbTsClZhSNNwMk0oavhG%2Fj16fltxckbO7LD1vrKam9suPt2xgPHEdKTWEQDz9XYCEd796TFas9snPQr0f020mF68DU8g6ygPkbr1WmKk%2BiccOjLOVK6j88w7KGz3MwCAequF7XbP8%2F8mRN2Vx%2BLa8xJ%2BiOalau0bkCIgWCKujjIrFbi5sq%2BZg88fo%2B8vfqcYSKUuPgMK5W6jBxlbWrX%2FqoINzaI90yoEhdiaT18dNDT4FNCqrjQCh%2Bshx218ywXObjhpl5ZeZps68QtwREk5xF9eGyeumJ%2FT7oAEn3J9ng6ZlJyrSVL9PGLGjlYX6%2F2grmmbevIO1jJiM84k7ynhLQZWYmhNmzjNFSWueu9NHmGq0kCIrmzZUFl2PA0pA9qCWxbR8I4FYS%2BSx6jNuI%2BLk29lSk6B%2B1dR69Xc3%2BETkigTrYhhCDPOWwAnKEPytsGku6Yzc0s3M7vlv%2FQqMqRi2IjyN6dfR6NTtj2k7alAHo8al%2B%2FZI28Cwky1bCtaDP%2Bj6%2BhrIfbvL5MXZDJKVgM2zOK4ELRYWxy9hGTZzJ89ZG%2BUncAv0a%2FYbP7Y7CfyZJ0dbhnrmfNx7n3kBtwHdXur8jNDEtVlofvmWwdqHpsMNrcwNYGOqUBgLvOn2enayXYG%2BfJ1lqrnBiYA5sxjTpibAKJvMmu8WBfL69aKT%2BixxNtfvEGht741mnGexBLgLsJ%2BnSjaxHtV%2BRYFd3PyGz8zV%2F%2BXu6G9%2BG8yQyegYq7aLOaLYX8xiuCaVuBfmDZkApac8IvKEqOScGDjNeCggJQLpcyWgM91WMMP5Dqpv%2Fvo2wb9C7vcpr71vhPVqKKcFtu9M3hPct0mlc%2FYEbE&X-Amz-Signature=7071177150b0097c14714dd514cd91e5232a1f093a0a52b2502f4e3a9914e01c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
