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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRRQZQ7L%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw2o8cxoOHSuYwZSv6BPRXDpPaZE2%2B%2FbmUW8vv%2BI0S7AIhAJHC13EPZYJpeCzA2NiRS%2BpVkPhcLzpGeFzjltVh9JZLKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxrY1oFrjpbK7Gmpgq3APQDP%2FoYyd7lZbkO3sfE6k17xwlQigmeSYaa1aAGB8zOj4KN5H5Y%2BMdF7fayJnt3dcar3yIAW1AieJiDZYf0l2X%2B2fDesiIscMZzTN%2BTojOD2aO7AaFDg0ypkZ5vAbv1LVFM4KprP2812Ajr3%2BIGW2z9XRcCPohdTE94MbCd2bh6BOIiucuMJfMLGJD5yP1Bvh6nLlpW%2BVujLeLku9%2BCvSpkE5F6GmszBdJ%2Fq1i%2F552ujz9EXj2ZxUPKtzmlqWRPWUmSyEHJ%2FPucnEiI1wOogEK9xW3mMj2DFKiZ89tLObtKD3JDaaol3qgK69OSdwD8ATv0nyx3RReq1WCHyYZ9BzkTQpP%2FO93QcfjdwjC7D7ULY4pvNZUu1i5ctx1AVmYbx74XGkKeoG2TcjUpO8nRU1lzS3i8IJh3e2x%2BQvi4Wexmulh3unFPG%2FlOsalXdxSyhCDe%2FDcJcSai9sFWNVwMKcvg0%2BoaPTRM2r7cYdFLoZUVSHxYXpLzWSAwdMrl7XDpbwKHO8BtYkAFv2v8%2BiOE0PMUAsFKJeQAZeL3p4D2%2BwCprL6o3W1Y5qyi1GdiXI16CYtrTeL20SXARRlM1VuGeTvRNQ8ekkBOctxSxpKy3YDNn766BgXAwDqfQRyuTCVzorLBjqkAfiqDVvWZb9xSlyCopXaoUUNQg%2F1xv81zLRkLNnd97Ehud%2BjOtsi9wZzxvrIAVFow4i%2FM8yRmxWdj2peFy62A6eKrMDTlG65JS%2FiUnmbNtAwz4UVR%2BWB3HJHCHthQcMT3Sz7%2FdvRyYtpRRzHiAsPjcJv1FGd4sVT%2FMH5pVLDdKcjy5NZ0Jvgamwkhea779CQD3YXt2ZTWeulXRXRJoEtY2tRUN3b&X-Amz-Signature=6359cecc8db28cdbd1177d4a66e37030d470803bafa458fe3d4ba6a60fe8f67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
