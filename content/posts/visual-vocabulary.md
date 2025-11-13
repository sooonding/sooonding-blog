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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWFH37J%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDvjjECdZSzXNSAmQqlTTfPyJvcfAiQvYhKwN0AW4K5FwIhAJ6LTKhbFxasspJHpjfVGncHpmNep%2BqXG0kHrEMGfPAOKv8DCEIQABoMNjM3NDIzMTgzODA1IgyVmm7Xc59jzRxWpbIq3APqg6wPmQy7shw8u5c5%2F6il9qYVHdU5L1859nN3WwI3acgNbVlb8Vb4gPPLg6p9iUa6TzN1L8pZMm1v12s7qsXA5hq6bJ4bSiLpK5oBQd%2F7pfbvGwo1W69D2hvBGSSpNh0Pe8h2zuWI5P8OvoXTeLzVmZaKDHNPsbNiJf41idMT8BJC%2FV2jAcq30rUeBSgXXHBl%2FrLfmrW60MqyHXaEg14aOJA41FifioAbehPthISUcRkFsBCaEOWItEV%2FLaTicGFVLMSv5Qhme4np6L7bpdOuMnfpRjf3Ond7A1QuRQtLk9q1aBxxsCZby5IzkJK5CbNY%2FRhEhbO%2F9Ty9EIUM62p7p8gteBJRvi2%2BxUtjh7v1ngtMy93q002vKUvR911Forl8bo%2FnEeKHjI0HrWiaxMz15gb8YpZ%2BlKujCziikvtvNJ9aSXQNfM2mCECDmU4S90A2fdtH3mWAa1t3jgyFw71DcuLtQfwBklPFscZjj%2FaM%2BmKSpIyfeGlyxHW5DdjbRmu3Fv5tKeXEUYl95VQLASqNWieICgp5xnA7uCmS34DM25%2FyjEg5yPUz056MqeEDBBhLz6Y%2BYVDBn63NSyzAb6HVV6Euh8a55yrGBrZw0F3XtsMah7p6eIFXCnXbEzDG2tTIBjqkAVHJo2noMLqiFy8AY02Rxkc0jF8jw96v4iVn6V4ix%2BT4O8Rst0D7W%2Bi2tBVthG2NFteDZmZcEZq9a4EYjaUnFQL2ddaJ5%2Ft92KMiGUM6FsaI7KfAfYpePK%2BoCCy%2B5zK4rjbfJDhbqfQ4rimHsykg33mG1AF5Vpgs2iybKGSxTD2Wdr08f3Jif4D%2By14JGvsBd5xOChLxgiwT6IUNR%2BkjRSuNaNMs&X-Amz-Signature=b70ac00462ee6d5738e5e2256621115d02a65e483312499020f0636144d3ad29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
