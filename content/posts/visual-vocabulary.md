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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644WB4RUC%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ1vntwge1leRkRcuhvvaQC16gAYJwssVe5Kbk4I3A1gIhAIVf4pQi5BccmMC54VvbzVSsgUCv2WfA6vXzbo09W6PMKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtmF35uEss5Rl%2FkNgq3AO9T25Xu%2BV8LzcNcO8HzP5fj2VlrdzJjUQs1j%2F3KyhnfL2sCDIuNqk8UW%2B29td%2F1dNeq5yLCcdeNYu%2BCVbObKXwZMtCkJD20Ui5BfY0bR%2BIxUBBzjW3OklhYDDCTwzuPkrvSA8IWM7XejQjLZkaKNoT97KfYQlBNt4IkC3Lfgbal6xPg77ufOMJwU6IkGSwufMRr%2BaYBBMOuLMk%2FcyqL5jmKVtW57lSjHxSZwBkSCEvJvf7J4A2QW%2B3oKV0zmFOnxZ87d3FHIhCcBzzGGF5U5xX65mXfr7ThZxzXKyFdANcZzVvn93q4okWIPMtwjysSJCZnrRzQtxL9Z6cMo3kLKRX3s1Mq69XuQGmYw%2BcdAh1oBrHhBP8vHKKTjvd0Kr%2B1M2q%2F7SPuW3tEDEE9NwOXfxzHLJW7T0GFIGceAWJjFAxwoETAW%2FJuQNXdT1bh%2BH48CjqrPtu9FCkB60cAUVN41mMwkxxHbw0R%2BrdbBfzzeMAvolzEp8Oc%2B%2FWblwjsPwqBd1gbMfd8Hnvlsuy8AXCnas%2Bn2rZGG2qy9R8il3HKdtwm4jE0d8xh1C0Fn4tEyfXjBLIsmG0nYKXOfGzkXM2Z5olmFJJ%2BDUMXk6jQbwfOTJ9TqvYwSwCVq1NMReHQzDklrvPBjqkAZgmVZgutbLipZjOyHRqlsxwCP1aq4qIU4KsQiK8QERrgWkp1T2CMbtgdjaT4v76A%2FLHMZgIwXyyZaW5B%2FAAxFppV9fAkMPQbAqeCktWlsCGZh%2BF7YRjgFrPQJmN90Q3SIDhAaVTMeAR%2F4yCvlEqwN1J9urBFyair92SpevCcexqxGpf4xDPPcOkV9T7BpTGj6sibRlm7WJ5UgsgzTVTc01AuuWz&X-Amz-Signature=73923cd4c714cb5f77a0ea0c0815744cd560c2692eeee9e2f41b491f12e922f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
