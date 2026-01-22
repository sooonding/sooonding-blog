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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZ3PMAJ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDfD3k%2F7wNpQlqVMfeS%2BFzFpic9MngTb5afUgrSBCyHnAIhAKNKbQVtQySh24rJ2D%2Bx6CPi43tKHAhq9y0NmT%2FVoWD3KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB4cHyeztbXZCmM1sq3AN9m9FWUV26nJxNg7B5uwuTbxzIaE6OPP8DqOjqyLurKFxURHeMl6xBaD3hQGzmmDoSDiO35OQ2FyNqPyMNorQejwEiB0mHFByHpw%2B1tF1N5Y6JcBW6iwI3f5d4TRkit6tGKNfIfRIJPLtuQMgMjDJDgyaQtVs9jd2J84EZN6E8RCHZRu%2BoDqZZXO8hKx%2BAJmcEsJCeVPL%2FjqyR%2FB5fMaX%2FU2wV%2Fnd%2FGnTHDM%2BHjU%2FRTxZjvfdgwqylvmE3VWjFQJhyRz7TOIBA0gjPgN4MbSuIEOr4PO03fyJ6MhAPAuJy98Z6b3U3yWMAAmr84UaLg46%2BPZHVm6Gs%2FlczA7emf7VlSJWPrBvBJ8yqtTXriSGyk3lMSeqeRIg7nrcQ2oeSYTuDv79MxLLUpv9p2%2BH58h6L5iN%2Ft%2BeCzvZgsnfZtIouuqg%2Bw%2BXXx3iIqxfhP0zxkPr9Z6zADqbMl%2FpCc8Izbo6hjao3GgZugKnrvECndwC6LmbxDveSG2NAPy%2B8CjIKbKJoHyJUFolZmVvRIqIMzalKikw0Lix7M7PzBMd6NpJMNo1SCADuo4jXSx7P1sjvSuYFrF2aC%2BS%2BI%2FD%2FwjnRgq0JYS1%2BMBrfnGWD9b0e0zytVEZoWo2fTFtSnGWwAzCK5sXLBjqkAco7QVhUSGCJrcbMEXODFOWB4OXu%2BXBiupIDsItxvanf0uHAcLtvcmWWIQGCTqjUuMTd%2BcIXFtcUt4hD7QNe5PNBRI3Tqi2Ss3ZG6wQ8cXJwIopACur9BbW9T48Zxoe3u4%2F6N42WxG5EgulmFIY0hspnGMRTDinWnKNvpZFS9I63hh6m0FSpW6lVe6rhmACEw1iKCDXSGrK4iSs8drQYAAuFCOxs&X-Amz-Signature=6f5b73afc57f05a51c3d53d5aa70de3a7a82e4dc9d3f7c080c8e3c1bfd26459d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
