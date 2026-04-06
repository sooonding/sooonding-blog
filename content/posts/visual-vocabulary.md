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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466472QOKIV%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECgchFWybjy%2FE4kyuqeCWwM8Y6TeJ1zB5pm01IEt8jaAiEA4LgPXys0QtZMWGty4SxTkQf4MuJBRAi6EPaZdGVnUW4qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHVK%2B0W1eCfYnmMiCrcA1%2BNb4nRNvchKkcUOF0MwPhl%2FJEoFcZJ0GNIG81PbswJhrzm10ryz%2BOVNxkQPoc6A4plm57AhQInV4KKwjfmh0GERXcVD4rBdB%2BQ1FIxw3Hu0ru0gKqRGKxP03HFajjoMkGzEOPK1tA7qidWatP%2FoiYqro1VC4IA3tRGqT1GWlHsGgz9Hzo8HBd9vCxZiKntnDNFnpicoKKDA%2FzthaUJtJ1AK5WkKqLuDetE%2BMwjq6JXmRJ%2BV8unE0KURBPuh3gECsOIHyf48XiSnoc4bE1NX7XMrdilZEXmVHUO%2BW9Cm3M6%2Bh9Q109oQdw%2B0OxPK5TSgPQ4lez9x02NWghihCGJP08660rkR%2FQyr5s3EM%2By5XDCRMvlhPNQKhF%2Bs%2Bfa26LOAgl6QLozq5e64itTNpJPHuXLD3kmfw1ih6goVqyDv3KOLlS7jP126fEJ4S%2BliaH0AMwKsD%2BfaKJg4jVtYNSQNrwKcFo5SGOmjDGw3Izwu8R0GvFXELBv0AFZeOpDJFpmKOrRHwp5PYNAokvJ%2Bd4Leeg2NQdzm53s92CPpxH9eKpZay6YPw1Ni2ARebItqr%2Fubo%2BhdrHaP%2F%2FFsrYSqWfOoC5lMSN4kU%2Bs1Qykk6ykmSJ7uobjb1v1uKxP5bVqMO%2BUzM4GOqUB23FEkc0C9GxOHQjMM44GeGgQNCElup9QBfBWHAsc0%2Fky%2BLwlkSYYsxTGbsN870tkxlwhsgBeqtD9aEf8xFdsBohGY8zRbTRIXz940UCkXUmY%2BQh48G%2B2CJVEdbKYM1vkIeEidOZCOpDBrDrRtNe8cMuOJ7h%2ByoTyCx%2Bu4snGYiaJBQw0IgsTNLpBNhItFFX8EJeqtG52C4RwmaRGphMlvHsfoMzH&X-Amz-Signature=1a631178cf5926efc66e272189757e68c1d68b313288269b9c1fab3147df97d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
