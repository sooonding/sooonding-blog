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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5AFTZJ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHnMW%2BiV9XQStvPXYVL1ykWNwWFfitI7jB8sjcsuRrvgIhAIGj8oErQ0I4311CIv5Xy2jdGYoEa0Y8zO%2BNyEfBfhpgKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1M4Foz3hnn%2BjQn50q3AO%2BQF5Sss%2BzlAAL2QMnf0KnOvp061WdMC1%2Fdn%2FQASZzku1W7ZS1Ig6pJxdDeznZoQCNiOl%2BfXPArQW5I%2FpXgBLWzN1AoAzF0H2po6Z9bE9GqpJNqk%2Bu7hO5Nw1kNQuoy%2FF63mkIbnZCdePnZ4sndSqoPhZPqBBeeTNakOiKfvrdlcIVqlUnCv3cKtFXwjq8kQi2VJ75GSg3C6JtLfTEAR8cvFQvwjNEe97uKD68Qp0dVbQsPd7v03746mZYGFBQU4c2PES7pCR%2F7%2BKWeSDgRL7tovkdrwulkk%2B%2BlQpP%2BT91bMM2K%2B2K2MM%2FpmX7ug8zt2yljgro5eJReK1nwOHfDvvNXIlbbNCM3HzSjBZeQbM2i%2FFAe4jX84ucFPmeQX1mSI1cOQFNxi39SwG6d%2BUIIDL7Zp1A3uj2W1bqbJbG78UZucF5hsvkucY%2BhJ%2F7X%2F1VuYgQo0aH7Av2nNJeT%2BF4rqKS7XHWbMIZ%2F2vcE5R5sAgMpS0PhcpGv8D0jfSBG8d4rrDt32dB4Eps%2BCyGIfy9PjYB9XLyvPFdUxtsjJdICOMZ3vdBY730JFFjFg3XPamMX3yJHKRamzogOgTF1egixEuctiCPB8tfbAVdofADs3MayB67NfEJTryD3qiJsTDezM3RBjqkAcv%2Bnuu8%2Ba8NXr0CBifSxNTZDI2cC9LUU%2B3OF2HqRsn8R5%2Bk%2Bmgk3GIsi%2BgHMufZmxAjgsK0p67FZ62s8jiIF0JU8obakc0WxnbY3BwiM4x%2F2XcBxXaIX1QRjT0bOwDEyx3XoYfu3DnybVVk6ClowLCt4xITOF%2FnlGjPQwB%2Bn7kYp0z9mBxSssCdl1NvoJ7UuTztlEote11JVu1pBPzE9%2F%2BT12N9&X-Amz-Signature=3752f822d04927037f149f7dddc54066e434a8f7cf0aa9393d89365b7c704f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
