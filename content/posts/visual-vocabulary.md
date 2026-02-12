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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FK7WDQK%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDY4Q7gYablcjf55ks18lpTWZV5lHiWOdjn%2FI2k0B%2FAAAIhAIfig8S%2B5onvDuO2jP5aM4rOLtmHSUhRSrK0BYv3aZsnKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJaaNzTH0jbutqmZ0q3APiqwFUesUjjNrsKyN%2ByvSWtzFDffKDQjNxhSwoaeOrqzKh6KPmxPD5J9LVPwv3CzxblMZF1CZC3s5WnisAXRwW07oLsp4AziLqLXU8WgdXgIb340d07oMcNpSL49L5nenWQMPg8zUs%2BSpLIbdT1YF0UGvGW0hD2DmRVALEwPk%2B1Umg%2B6OkTRkhOUkQoCgmPGX1nLOqVyVp0sMxs3gxB%2FoXc2AJCcEECRi%2BNKZOMRimF%2BvPU%2BFEVQ3kyceIbAayZn81tm9ujfBJPakiP4y%2BC%2Bh0m8d2b7wuHN8Barv5WtrP04bJ5wT4zBbFA6%2FkvU46YHclh797tqCIsVl3%2BhJGHBnpTuNU1nJ48O%2FtDqXi%2F99ggTGpX8v7f5jJ7YQKfeUiXSssSrySK%2FpWPzeEFkJBdKO%2BYPyP9kFPJHIKoC7lb6F9%2ByKUMgThg8y%2FVXtDS%2FfAHEUdB3p3zFXpAwYUpBE8KfPz05%2FGga1dEcBFRXNEIthl9iommOyzY6Tjl1s8zCPnWfsS8r%2B1FvdeRJDXqmNPUHmfSh8uGq7JEX8%2FU1ZWBY1KioOAgpZqGmudmMzLPpX4hblrHAbjQazH1q%2FZ6facSBmh%2BeYOsaw6jL671zUjdC%2F%2FG%2B%2FxaIYW3%2FNl7018xDD0orTMBjqkAa0uSlUHt2s%2BfyKJvluD68q3wkmpUEabB1nzmgMdRDr6MJwDWDpgpjfsZ8ZCEHCj1uJX1Vw9SQZuWAO2acLIswliKVRPFm4ce31P9KhK4%2FerZtdmWBez7nMw0CzW0ebruZT0uEfheHmQrg%2FT0b%2FQ0BLFC4xTnpJPyikbbFhC6SpW7gPH%2FXFd4j%2FtV%2F1HuQWPno5m2Nn0IVWBwq9K%2FWpXue8gqU7a&X-Amz-Signature=fbb11b8cd11a9c1ad23621a9222225572781c66f8cf29629bd57b6886f02c618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
