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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMHL5UM%2F20251220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251220T010240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIwZdtSPHlj4xDiHA%2FwuJCpYumbibfjjjyNIVoo7YakgIgWGyNC%2B19GoTOZc3PM7DUr%2FwOcdzyjvpBi%2BH5HM71fEcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk4OYlW856zwfL5gyrcA%2Blh5vbPnnXivNTj58%2FULz%2FhWNpHjXHvtv1LoGd5b%2BZQG5E3mh7GCCq1S%2BXOr0dbvvF%2Ft6RQuw4w2OqYKa5tjkJYycyC7EFJeuoG9GUW4RRSu15QKUZ8CSbHnhXU71swZ3xvi6Te9UyxHlwYvB2BE%2FAZBXBFArEVsVEzj%2BZoRx6l2m73RgIqX9cXAZj2O3xVuf91s%2B8xlYlcWy1xDJVDzAt5flbaZ%2FDKT%2F7lSrHHO%2F7abAtRhFYnoDR4asHQcY1%2FCA4rGEyTt71ngr6FA0WsVPI1q1flHG6mLysmVidA8rgAk9jl0HOow7sWwvAKEb%2Bh125JdQ3gawFmYRt2FbpvYXIg3UAksx4VL%2FaNQGB35wJodE1lFbkzgpvjlm8uDEvVUoWPVnlTkVYYMdlWlQCZpYGN%2BwnUrzDlCuY0%2BruKec8VrTa4jTCGQWp2AJInm04Xj%2BJVShxdiKLAnLCP%2B%2B4t6ihnIm8F6DhrAHreiJILpwPv1dd3eeqsrMoABWpkTO1JaFpPRvN9uAN2VVDxQ3esiKX0%2FsSiF1HOWTFVCla5l0xFUMdTrVc0jSY2lTVRHx%2F7%2BX8fcb1J%2BWLjn6XlJOCa0ehC3hgwV5A6yMvqiPke%2FcUUi8y2WOP4XKwyVozqMMDal8oGOqUBSEWfXFClKa49fVKMwreE722AUrzs7%2B040wLMuWheF1%2BUuqpKA91wCbuK6blwXwsnLBfFCR128pPwi3Rv0%2FgFK1gwWeJCkFl4W1j62v6Tcgg%2FtDy7d9hoMfgFcEVIZQ6xGfN5jd0DzsMhCLCeTP7GWYgN5pyXpAG%2FtfTaFYJwYy4tOgDbBKiHkaSdKq%2FZCVVuq%2Fo5kW9HesqxTlOvs8PHpq%2FQYP0S&X-Amz-Signature=5af4543e0ed80d169e0e559008daffdcbf3440ea8c6e364cdc83e2f02acc8e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
