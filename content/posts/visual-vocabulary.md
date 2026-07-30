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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GYSMK4C%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjsJqU%2BESXhjaoMdWbJcXzC7wefxqeRny8sbQn41WogAIhAOnAB88uWqY8z9HktLfENBk3rB3HvfJiBF4J4GbYE%2B8SKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrQaQTL%2FB6OBN%2BbLEq3APKxEh9MQvltE7D2YIOuvZ2cmmvyciqp0%2F9zNDnXiVaAL6HFF3KfrbckzB7SHrfqBZh72kQA1DxR6CBL2RSPUIO663nTmWIM2rvU2Kya1J3JHPGQbcGHbWEN9fy0k8rOZIt5%2BIm8hx%2BQzbwQxpX0ulq9m%2Buna1UI6fgKqKqd8OMVblQDt9AGiitdwxnhLVE4NsYTAKuSBtmN%2BzYcSfkiD9C0TjDe7iRnKcV5p3CxeK%2BUfxd%2FcMUnlf2HAT%2F2fRlYol4kYp0WGqzgSYeBj2sDRaIDgzHKm%2FEkfsDuYewkySauFa%2F%2FfOuzLat0RnTk4yFY22uUl0vNvxHKOYAfUd9KoqM8iJkA7mQtIMuwMb%2BVQ73VdeHtI6M0JpX1SDIC%2BfoLrOCCt5P5u6S%2Bkh%2BN0G5TexNnbmkESwI6CeVToBOii5KF2mMPBAmHmp45B%2BXjP790i5%2FKB%2BJhxi%2FvNOWDr%2BYAD%2BddO5rB9LuCzC4lXgtaLnj5oK9clatKuuqGhCG0JuF5I0XZoZvENKiRyEL0eSZdHf98SF%2FM%2Fetp8hTXNCyvxOr%2F4mBQnhVRICzkTsbuYQ98pCsO1n7%2FaYBrB3fPe9y%2FkbKqSAqu6YMyBuhWaCZRGNgrr6EgbPc95KPrEoUJTDU3qrTBjqkAf4CyD42v5evMIfdK4OCMlPLba1xnwPmbyuwdX1oc5ejd9BWQ81wAcQrAOPAeC8236AOBQcVn8zlEETp3pNs9tidY03pPO8E6k0bbbdslVODXi%2BloyWAPVJApnP%2FXsqjEmtbJtARB%2B8vLrUiHCQevr7iHwu4NjheIUWY1%2B778igHmsamnL%2FXgRJjpLtO7DSBRqdsmIjgX3kff9NFcaILvNEx1MBZ&X-Amz-Signature=d8163648555babd859196f72e1e0617facd509bccba10ae13fd53555a98159bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
