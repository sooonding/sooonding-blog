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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUKNBYJ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnvRpfOtwzU6FySJVEiLZTpN543BRzolpYfC%2Bcigt83AiBzuBUbrkZujgbgue3JEzCinJ8Lnbq%2F2PVA3vuY4BN9riqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlz1643ZqPmdN0Q26KtwD66lvkBNC5ujxxDv3%2FjiiwG6%2ByDQInKf5gUbc7eu7jggn5ZE%2FP3hcz5hMxxoGCDkXgZ%2BC4II14W8xn5xKtvq2HBvEtD9DgKidOX%2F3ppOpHmy7pJc7ikv4uYA1A12rluGmxOyXBuwQo9MEJN%2F6TaW7kVY6bFJvEYaB091Bmq4Z4eB94shXfrggxk6VwiM%2FDpjjNpMrPJ%2FrJDUr%2BRE41tr43qjKU7f3W3AMUnaE9awqoFyWUaig%2FCi9e5SQvKvbLFMVoTOPI0lqR%2B2krhPR9D3B3rkZEQZe1c2JYe%2B8t6miGlbmkZyihTJaaGskJOVQuiK9M5GkbBOgcWKcrb3fi7hpVYpzsHbYAoZCny54wEn6vw%2FwvhbQbGxZhYww0Ead3GUkigea98zA%2FwXmoxSHPL2ugT%2B0dqIhY1C08eXBWrfZMbbzfe7tSMS6bomV1rDuKb07nxYso0RYI5ll5V8TAGkbgkFUDxBx%2FqZbvU39Bmi%2FBJ0dZnrqKAmimEyGVddes2gJW5RNgjRcWoCyaeTHRU43PyT0XjsrbTo5SYFzMIgUWmo0dvLwJGe4zlnP1w8ikNmzKALLGYB29BX2HOCLubQ%2Fz2WV83ZQIMIh2%2FkW7DLPC0iY9LZtCqPd4DzfdW8wr6nLygY6pgF%2FhYDTJAzfPuf%2BCROoj5eV1bftOM7qPBUP%2FO6bW8%2BLf0z7dS%2Bja7V2qQhUHsayn43xEddfS8ZIXkcXWXY%2Bmcqk7peKbl4eaMix%2FNaR5jdZu69wbiijmGRl4sfAU%2FQKKYpuCpRrp04A%2FGP11uDBhmSgo9hvkiaLHiLTY1WWmRiOP%2FHmzWFJo%2F9mocVYloSsA1dINoC%2BAO5mjk8fioZ7YRCIzeYvtqoC&X-Amz-Signature=de1ca8f25c19bdfc5894d4e41abfcbbbfb1f6ffcc2c17e8acc9a05ad1e243ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
