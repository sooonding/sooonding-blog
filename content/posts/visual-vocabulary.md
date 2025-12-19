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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRW7CMX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6NsXJ5iumpBBjWgRM0tAUhC8O8aLRNxyY2HLYjlM%2BUAiA%2BtmJ7JY1mC8rVIaUMAzDtDGPLQ6OhQiDkmtkDTUtEISqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMreTRjzANGizUIU9tKtwDZ%2FWlinv9f9zHPAVU98znN3CTjnDrq4AhuHi%2BtIeCQM518X%2Fp8XmEj5w9ORT6jNcZi5NTXA%2BT145bNQh8lOhG9uRIVDW8%2FGP3kM6GaDoYqXA8k9fHKGEShF4UlZZI2SeBJ8NX2Fq9Y%2BqkwMinyJsnKDmT02CzmsPTtW11XQh1QB6qZJcYOxEeukJAueR%2F%2BRihqWxyJCjIUnZV%2FXUu6%2Bb6UvT%2B35tatfbHpFnYa52xBJ5It1pAp2YFKSFz7SwtNyvx2hMBx%2FXXvWFhC%2BQEqY6kZrQGL3JqGa3PIVNSXMqdlsYDE3%2F9I39Vr4ORfDdExLfRmeO7SS%2BxPtpdAYani77qa5dEZDXkl4YUkTlYre160but%2FxaNMkp%2BAsRkTFqcZxilId6Sq8R%2F9SjvSW3OheO3wUMK2eaa8CyC2k6KAvuqfwPnVcJ77scw00BX%2FaEb34%2B0rZkSMe16U%2BglyI2S1dpA8kYSGnU3GpgcPIDJhpVGM4LaboAguXrUpG9gHZs7%2B27wZAkCO3L3HikaIrZ4b%2BwKpNr7PaWjINjbRlKC2hux3%2BDdgv3NqazbPePMsdOCowZzDoXCqm8PCornr%2BcAOWoMOcsKSnwtMAWTwCty1htUzRI0EAmeMX7q5C8lTHcw8LaSygY6pgE9wg1o%2BVEy081LZlol2qI3mc20Q63xKc2DlT01Gt%2F2BP6Z8viYYqKz%2BadTew3IYpKxpJ8QdPjTNI%2Biulgw%2F%2FZd9JFnqu9bTDrhT7vlZZUE%2FMQsEcN47C5riuqwa89ZGRN3VUwkdtwjHwgGWr5H8WOYZXsKSM09MYD83yo5TDWwLcLvIX1ZQv50Plqhoj2uAe37w9v%2FmkL71LcERopoqldNUHj2teu4&X-Amz-Signature=bd29dc8776e4e2624fe22110bffe2e3a7e2face563754459dbd28fe7efa112b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
