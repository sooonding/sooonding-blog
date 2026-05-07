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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YESFQEU%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpEfNG9x3O0O3AyemMB9QxNqY2NeO%2FfGQ%2FxIjve5OPYgIhAOFcU9dy341CBqbVYJ0UAXCG0emaGMsYnGtFFd4EmEHvKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJqxJWEVs1XNXPEHsq3AOqsXwmGpA5fpIQj95WZ%2Bpsoon2YuD2s1nkM%2FWhcAY6P6AvGf8oWRsqI3lFE2oFpdeaY5BR66k9adXMD348zMGyaTUvKwqye8EhuFobx%2FcnUiDlu4h6dy6omMZcdhVcCDXh%2BXL2SNBw0XLCwywS0logM%2BKEot6zrrwmWqbdeB9qQNKkzEr4yliQP%2BbzfHSEOE%2BGFDKt1EI%2Fh5hCD7HMIxf%2BjM7G5YDMLpttg1%2F6KcM3Y5nFWK6d5oSJkKtMIbUEQOUzs1IyxOKNOIP9OKnJe3LeDd68ikeXwx4MGW1JZRVVvp0aCU%2BKdHBwMwEXuJtWsv%2B2aEk1gir0Wcfdzf9azyFJ0erKQm6dOnriUP2VV0OMjNhT6twTMrwLvwxZKH4DZCrOHws%2F%2Bx%2FZ9fFA5kwrN5sUpOBchiCLqcKMSjy2EM2O3Aupc6qnjcxFuaWTTKNg58NS24EKjdTQSAMBRnRfnnXZBzrM%2BVmCRYBZAoLEBUt9Gw1lZ%2BY99QzrOlyHAibB3E8rITRuWXD66v0agY03S95byAmA7qYDwmBu1e40%2Fc%2FS27QkpowGjA5XY9GRSAxh1IpA6fosjI98rwLkXoXk3ySo9adueTLarhZexGfOCbFR%2Ff7MUcsAWIiYn5e4XDDB8e%2FPBjqkAX%2FeLLCRcSBwriI7%2BM12DLVnaAP0DX6MS8Zs%2FbJZJDYuyG7ajJyrurEbUmoPgoV9H3R1zi2WZx4y%2Fse%2FsqXkpOW4tFDwtEuwuLpWbsLU3Zs0%2FpaEVDaKWyLCB8w07vqZg8pIs8Td1llyJEl5Dxsjgth6FGmLFLK6FdD1LzZlkrYAPu%2BNydTrl4U9LQTLEI5C78hEO6IlLRAYarylSU4GNNO%2FtKLE&X-Amz-Signature=46f7e0f500edb95a569ef44edaf8f97b1b6b383ea632d2a8ea824cea9b241fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
