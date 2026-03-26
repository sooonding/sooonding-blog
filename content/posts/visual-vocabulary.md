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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RXY5CM6%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjKCTNTTCCqZ7hLfoMXQjvdRsY1Z05Isftcr8MEAymTgIgXaVkjJ4WwnG3dBDbgU4WxKhU8Pu9ZsVb8orNh3bs8CEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX5bDQLfTnBT%2FTP%2BSrcA7JpqHGW%2BNUkcE%2B%2B10VfZk9RiQplMejeIUjy0DgE2pAE6cn5s2BO9jzo4vsqH0SL7ZqskRkm2ZBLcmZTrtYf%2FtCpnyMxQsh8aKrDFKPHIyHEGFVv%2Ba4Krhz5CmVpCSy2pVFJ9Aevgxx6SqvXsaIm%2BpXiemllASxLqaEcqdYULarEHge83KN6sIkfn62NhweecVRXa07S4XtROdL7KfWB5Uvt91nVXVHfB4IyqQCKG0aCEz9f8ZkvEWOGjbYUMz8hiYnpEbc%2BX8MSS1tNdyVAC8sLjIJieRzCeWtGKovu3jZSlhTDV3T1G0kv3jyneW8yy%2BB6%2BaNdOZFddoWAEU5TQBVgOqgMy4eShSJQYR8LaB52Qtbe3XpE%2BGqMN%2BpY5BC3Ubq%2Bzm52SfRW1y42wonyW7aOxtMh%2F%2BHDXbgvTkb%2FBS0R8GFsJlz7fQSA%2BoCPn99vQjs93l8pMqjmgtr6Ws26NT0OXZneMCC13ZkeEgy71WvN9frAB%2BnZBMtn%2FXQ6J2hdPCwK%2FDoBszNFbtuVunoerVOjVrd2SlB2b0kEod3BK1rOxbUiwlXC346HXdZZsZqYOtvQgDY%2Ba7ZpgjM0hDEXDJI1LGIWe4guzvL3uLBDSoDN%2FPrOXBUe0WNZOIN%2BMJOwks4GOqUBlVFxXxd28KRwG%2F4eMCvHZBbd%2B0Mtck%2Bad7CfTCOQgU39uApc1hnDh7n1NxXzljWW6%2BftMhmvLfwVjEPWaBwCXdCNe9Tia1NevOdXSu%2BEouIuN6GzFma%2Fyj9xAbIwPO0BAkyZnYd0zHtTnnc5D8WUV5Rb077r4XVth6%2BomIB9QOrbOzZ95oS8vG9kMjPzknysm8jQasU9FY4mOh0DmUM5EARmkxuH&X-Amz-Signature=1e048af10bd494cd02d8a776853d4cd4d4497c79c965353afa034176fe7a3451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
