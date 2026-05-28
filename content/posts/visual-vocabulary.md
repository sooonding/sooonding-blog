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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPQPNCK%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC42xnnYEalrIexpzI0xCdj%2F8mIym4BMbmmfpRmCkfBAQIgdwmxy5mVWK%2FcvNm8pCMuBWyd0esHDqRT1nnkuweTHLQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkFBG4Rw%2BiBN25e%2BCrcAxckgI5JgUZ84OQcKCR%2BuXu8h%2BvPuUAwiwRFYMBaPXNjHegEs90AQiRJ0Zezctf2rl6zbTAcmKkTKVxFir%2BV9SQkcHmgW7t308SkE0T14jK7%2B1FtP%2BP5PP91erEnTf20iiCFb0%2B4S7PzVCFHIUsncBnFn%2FSyIAWPvIFinry6ROIXB98N0pad8YMDXH0bF%2BXZJMm3uSE6%2FRVfBVScRGGvxevQGzXr30%2FypPdNS9C5%2FHxfD6lG5Bnfz9m%2BrFUvKCsp%2F9Xjn0upixEwhLTJ9MFmnq8ZXsB4NfAq4dLrClBWf6ocoB3y3UzDXziXNehyw18vwI1qq5iJOVlVqeVS7UfkGSK7xEK5UzE3Gjmtkh6GmtmRPwE144jRSE%2BRZOZ1PfKGeBx8N6x56Eip5zbaNxpVpO1I5z7NvCCc0drSu6qpwjq2fxB6dK4i%2BYm4XgWLPBOeY2Ol6kUOVRR%2FZXRyv5noFKbaP1kcnqO2mninDuSATAm9sOYTxJ4rG6uqlJ%2B9A00uVKx8rFrcybjbsOlRhgNGLZX4H9Yg9CkN2gW4fnKAFafs1A%2Fa4gezfxdC%2FZje6Mji2wIS7SG6YtcPOG2jzC9GbYWYWnpIv4%2BsBR1fdwCHIIDbmBh1y0ZzjOIUg1v%2BMIzw3tAGOqUBYRBz15ySxOCqRX%2FoV%2FnlaU8CK7rHpn6OHX6htZQFLXWJ4ngqZI2EHco4NJIyGV1Rt5LnR6F4wefLDHonsQNgyM%2BGDcnTZ1NTHdE314jQTta21b7JTekCxROysMCyRV%2BbhyT6J0O8Cbtjt3gOS%2F1W4CLiv1vf00JeWfERM8%2FKNR%2FLktQpyTq1Wk%2FCG9qpGraCybBBaB5%2FItt8LGET396wzXEYflYU&X-Amz-Signature=c61cd5d1e9415f3065e217cb2e06045b75de447067422d62d338c41ef0ee71ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
