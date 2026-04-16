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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E3REVPA%2F20260416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260416T024155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3GgM8OqXR10eULIoy%2FLzpp%2BbIOtBjSEXiWtBu2ooSyAiBuPT4KHSLHu6fXCJp0FWNr29x3CGtizGLqD%2BhlqrpO0iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPq1fC2ph5LmgCltSKtwDlowC8wbR1yGDOX9jXiM%2FEKD6DUIEdWnnkc7c9t3cmIW%2B1WOtKGWMY3hDsPqqhnandyFfRiAB47iMdjECrIsnBBbueDKTCpuEr6t%2FBK1vdSm%2FrCzHlvKCOtPAX%2BZdKHlMb9n0gr%2BmC2T09P%2F9YqNhFkZLHmoykHRUIllhOtffUHpXVqVFXGS31EpLlgUHmpvoUqg9%2F5x9TgFZiX2eMZOXk1qjYkWRqfKp38t5SnW7qoRgNFdM8eXK1rGHsmFWmB0rzqEHqFWRbyFTep35z83zDAt1FjKsfvr0%2FcuLMzRB15%2B8vBO52vrDKKHmsl9N8WTRU876jbZlZ8Of5yCHvDhSeVgXbvyGZ2FkHmlwC1EkTkVC8iWmrg%2FtBlv8Tl9eMsbID7eAYZffMYhN4Gu4SEAFF7kAkFchpo2Yl%2BNW5iRySm7rx6KOtsmC6znb4dZkaJLwMQqTSpsZHhQa29x5kR%2FbnnqlcKDkoDPeUFz5Hovtkx1R9iaJOCQ7HYvPVWLDJujUvcXItYLOS9K8xfI1pIJORkXLI3bI5WivOVoN1Jf%2BEMsReYu%2B%2FxW8NYYMrc8rGtPlucH8EuHCoUqYTULRoCViW8ujazaUBT4SSEC6OyRqXuP9ILUtkL3DDvuvxMcwveyAzwY6pgHxIM3ywnOWTC9U9EsD0W2fvOf%2Ft1HtHz6u3YZJdeLJTZPKn%2FaFFqOvmBihM4dLfitpFW3Nc8MZyuRz6K%2F6D8Zlw1L11Gpwgry25Lm4AiI0UqcWmjM2iyV4d8TtmqXvO7lkHMbA33eTK%2FgED3KKueSkl%2FYWIKxmTla8x0myC5li32nj7SW%2FnfeUANyu1jKsjVDn7Q27VFCKDZ%2B5%2FZRBhkhPPvhHPUFq&X-Amz-Signature=d39110f7b71317af6eb3bbd33dc23150fae91cb22955bdefedd9483ce52b62b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
