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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AVQDNS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDj1CjTf079AsFy59zNbfMtu7rM0kbleV1P9SUef%2BDbfQIhAInLDOzfNKdfGkhtnR5oQi1NPasQxqiU%2BNNCN0Nl9KfrKv8DCEUQABoMNjM3NDIzMTgzODA1Igxn%2FmAt8zrORtxG%2Fnsq3APJXSIYWWvNNcY59A6fCo379diUPZixxYr2oVyLcuo1XIeJYDh4wpW53BD48HkCvEyEmke0fdzSECVJuKTsqSje5GknzQ3KpqUJlZuJogWXZ01eFFYT562EzrN%2BHDlQhU05YTh9NC96pKPyAHBGrcHsrsMdnMPTWIPtibXZw7GTix2jj1cecRkNVG8k6ccQEjfUhCPaAKa97JBve8iU8Lx4RfiRATVkWNgdV28lGKKRFP9O00Se0HSCGqnGvxKileJ3wO%2Fu5zQbYHkQpVzpuAN5Xj09O6dZ4vsToNMmUFwPHe5jTWHMgVl8PCoeITWRF1QbU0G4FxZqIdkNSZvX%2BCrVNv7bHrlKMfVeG4sgJw6dgdiXEnwUdKj7pR%2F9Bug1qPB7SapTftJbXJTRO3Av7puhpqLfx665cOEgLCX%2B8m8k2EWCvmwAxfDE9rQzit6gQHelyvJ%2BGBsiDP4wd%2Fw7KrciSS5cj91f7znv3HlmCaPFLu%2B7nZS27P8K2ZSGXZNxYLAqItUQ3%2FMVnMIOQBqu0ApP2muwfu7sBOTAkQyCEW2Fa9Dl1X2%2BMLFqbs33rSEsFeyXLSiMW%2BM9PP%2Fp20ZEdxe0WfOx4QUtCEiiuBcShL4gO0RI3o3T6CPHqurASDC0o7bKBjqkATTJFFhnanRWLOQZWK4q9AsuNtHO4QpsLS5fibqaekMEEUmznL2yfT87WaTdeanzSuRii1wGwuRP65TK1xF6vJhlC2ilShno91mhHwHCZ7P9mO0TzYfxtFWS2W0DZILEzWCfZaYgZqRfqqcExObADMQjDHSs3FuuqH1PPe1MSTaiDGrp7U0PXIIM3pSdyNXB1W%2Bej%2Bfq0gHoLgL%2B1sTh8VgTdHIg&X-Amz-Signature=9cf22aff38e30030815a43358ac023f42f5acf45a23f963eb90a7f8763ffecb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
