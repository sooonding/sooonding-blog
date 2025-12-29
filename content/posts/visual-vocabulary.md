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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEV7TRE4%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJMKQ6EQiArCNtmW2WDUhMQ6t22%2BJsOtjDOBAvIlHTuAiAkNjGDvDL1eBtCIoO1NoC%2BtXBWitOrASCc4Z11%2BFYOjSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz2YqGfq4wJk6UtXIKtwDOLxOsK5SiplhZtFrLkh0Bki2KJgS0KSdcuT3ZA5d7WLVRlEVwHAe37TYBlS4mNv4H0yHZPw4rFWEUL1DJbY3GHBdgbyDgbG5MGag3JfkZOM9Ysh7GiH5j%2BUp%2Fg1zlDfOCKxl3pJkpk4eOUMDG%2BK9cQbamWJkt8SuIsDO25I8VjVR%2FdGAullBpUi67tyP7lmtncz2qeAjR28jRK9m6Zuf2Q%2FVcwtVafE5yIlP2jBB%2FU8z4RGeo%2BP%2FIgqGwD3Eo%2BFVv17GTeWRskeMK9AXbhjGa3iIsLrlfvWkyjPeMxwhgRyYQdTw62OybYGpOlWZbY0P5x9ot%2F6TqCzJoUyuRC07zD0oC4igZ%2Bh1NOHA5KpDG6HLUUVKtu%2FHebFuHoucd6KNLdg2kCCAO7i3hFU6I9XjP2q0GA9PtZCT4p%2FaB71cZxycUV8zaiCODsTqydQfTho0XsbINRynAsL%2FaBHCVim4EBuZqrqKRI0o4UauOjq3WvU1WlwxliuqwET8w6E9W0t3DLtttoTzlTgD9PvWvXd4Z9DCKSY09N6uodQhGVMl9MhagG3bnx1aIL9si4qMPoJOglzZ57xhHShse49%2Bj5%2B0ggEjVYdPkrsxVeJMwne%2FVY%2Fl14N8Fq7YxyGAFWUwgY7HygY6pgHrwQkrhhG442nVpQJ9y42iWSXnt6GK4In0vnPQOSR4nKIauKkhWmpTYTKKMWC%2BaViE1VIr3aGDEB0V3oynlAU88WEpTqCrQOqXVahmhm3tmBlbU2eub1Y%2FMusH8YqZpGfFWKXddWImtehpCyZdDm6ZGkfxGKzmDqzRgYKE0jFnTc4v4%2BWKGPJam6oN8Q4lW9AkudAsMzPILTDbyuzLkLf1MNpFc5mj&X-Amz-Signature=e471749229173b6520e00ee9421fb23a093c602fcbb78436cdf60fea34327c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
