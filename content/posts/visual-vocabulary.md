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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULSHV5UG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC88134AcVMxTD7J8T%2BAzaEnbRW%2BSznlfWRPKka%2Be7d%2BQIgEgwVCg%2BHTVbF6VxH1OOtAFodLBRj0Xr3Wj9w5LekLwsqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEjBOiA7cwifB1McSrcA%2BmSkimGnEjeQXVr9fhceG1przkzXXPo%2BuuQwJj9sjXP9Oz1AXGeEuZewFeXIaA%2FYnf9cGVfBmjbFitfkDoJAyXFid5OrVCAFUW1Su78UENa0budMX2iVviHMsMdECz2cmjLj68mQuIHa4AR78IVHwpd1iYNcBxuiFEAsvhQqaFjr%2FB6BoGGGMMIb%2FYo5h1y5hPU376fQhZs2s%2BWbJkT1X0JewZj%2FO0%2FGTdj95XxxwoOKCLcMGsTZ6ifl2wfbxb9v191zK%2FG3QdK0nKG2e0xVvy8oMLhhP5dSrS%2Bnq5unJvpKKem5y6ZpDV2%2Bb6BV4yDOXf2a4ZHPT7n1bFgqA8Sl4PlNVHeQ3j%2FVt4%2FwLc3b%2BTQ%2FlsYMWwd2zzxScKIuYEk2TOGJw5gQtOFkNon%2BTJIsICVQOCCV1FME35VmJPl98uC3O%2Fd6QpakViQxzHUo2w%2Fu%2F7IpN1VH06hM4OVz7hiqVkqEvaDDRCgrw4XGdGGmW9nW5nK%2B7BHGTdS9KK%2Bei%2BHNN4hun366WJkq2gyztsLYl5L%2FFelzfL%2BQex2ZnYpqzlmLQushqwMlKZccRhj6bw1mHSdTGONtlD%2BZVcyP1tm9zU%2BPHF2JrpmnbVqGPoykZciJt1oGZGY%2FBLYl6YnMMLT3ckGOqUB3i%2Fd%2BKJPPoQW46p9ZZDNFMRLzLXECb5RBVWzsYDZZUZcdDaqNasmKl1U5f4%2FL2VB6ng8DhMpRoRS1Vc4Jdvjq%2FKfnT0%2F9zHaooJb5lv7B3tc9v71IEj0Iue6uVyOR1GGvYq3Rkv9LGT1qFyQujdOHiQWAR4DMb7wBqLI2szFr%2BKbuALMNhORceMc6t6JRS%2FG7Yr9bBAfVFB42dl9BkbAk%2F4mWi5J&X-Amz-Signature=dc8bc4a08490ab9138772794fc9fe49e791ec5c78719a95ca915f513ce97102c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
