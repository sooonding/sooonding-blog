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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP56TZLK%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7L32gDI7wbe%2FL2IAnwcUqqv%2BJclnfv5WaUrj3rbGWuAIhAKLHXuo2Mf4r2iDEyMhpJB4a33gkA8UrBFCaSt7PB5N0KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFkBrbgt27WMupwzgq3AM5JCfOad4llqZdg6PcEBaj3mzzxrLS%2Bx23tUPOu8edxWppZMZSYNmJpQl1R9tesC4fy6%2FPEP7N8DZxZMYHG3eUak6I%2Bxo78sz2s2B0sx52W7zNZJqTo%2BpA9oUBc4xIauWpiMhd%2BNmew8MrsNsaq3zsFN7jX05FxxRfwzVnpKvu%2ByPr79UApx3rEO1LnCX0g%2BqpyRFhjRvTdBSXi%2BuvKUXUScOn%2FyIs4BgfoAwdVVpZTELnGm9on3uNsOMBAUBjKyaA8ji%2FMusZ9QmC5W8aY2Z3Wb0EO2uvEZOVHUFok7KQJkZiLWYlmn1aCIZtKiJ7BY2Wwl2SVMYxrwvI0ndIc0xEsrtI%2BDbnEaKAiRn%2Fme8U%2FqfsaZiuuGtfmHgn1uELV8BLbM7Lo%2B34vhi40FhjElaUSUHnMWXU%2Fmm5TElqbfK7KCXGuCsMH4PWM4dFNaK9m0r8SS9OpF6XwgoLUpIIkBnaoTAoLDMuaUVQukHWbcyM34j5ED2iCUwkmvtqACaevqu8CMo%2FX5wNP3%2BZo%2BlSZ2zJbmsWJnSPYzYMHpzKV4J15ThnrFlo%2B%2B4Psm7gDh2jzyE%2FcO%2FIrTizrc%2Bh1PI7pRLcmWEuWKfRmAg%2BNCSiUNbGA%2BJE37lGm%2BYWuC2QsjDnxOPIBjqkAc2Hb%2FBBD55ONriF1utFjPIfWBouyd9jRIib%2B6hFcMYGyFl5I849Tbh9UPH58%2FVapTqKCAtyvgj8MogPCICcCDXydtKX3MwcaaZNWBC%2FYYv1KjAkLSAs5Ah46TtZ5WqlOmQ6IrJdMQLYcqQ7jc9JX7rkmf2llxjv9zWEeDWfv7J%2B8xXvm5rZ8zZ4g5Nmk5r%2B3zMbPn0p5T8R9PT4otX9yOfhorf5&X-Amz-Signature=eb4431573f9a4d8fd69bd83ea4a21d0155979f5d0df3e3de28ea389d1a8b4474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
