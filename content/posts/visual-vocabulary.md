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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTSDNOK%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp0k6f9C1qLHpy%2F37pOK9l0bQQvT2im%2BTu50mAqi2XbAIhALKaZi%2BDNpyQtVs8shg3afXS5vneUWw8K4dsdQ7fdaR5Kv8DCFoQABoMNjM3NDIzMTgzODA1IgzHqUvvsUVIYdx7iJsq3AOZolQmKHH7RhoVVYcg5FwJPQOwm1UNYHy%2FTZqgKlrq3brFY1x2PdLUO1pjrZhB%2BUFA7B4mO8EnZj0rb%2Bx4kHebFp1V9Sw21F4cyo%2BsyWyydNZ3Fyi%2BncPJDkRPY8F2q9uNv5d3ObBmuN8sdTJ8gNbZXon7RLtZiNMw9%2FLp4bLWJLhRYLS%2FfvUhgkEvMGRiH9z7oJ3E1KMqS7w%2F5yPyH4uujHCeDX4ILhsEbxYC6vFQg3AXWAOjSIW1zDBBBc44Bh7ZrBYiY9GP1KGfXjIqR31a5EUysgcg%2FNvjcbhJyHMBn15jXhoLqo4DHJiiyDxdjDE61%2BCksd%2B%2F6VDuaZJ9fXz%2B0Z0LVBatNGiFJ1go4LbEw07kidmbYqkJiUHPRJz%2BLLw4AqLY6qu6s%2FGH9%2FDZLdXrxjt%2BFjqAqFcs1qokmJ39lBE%2Fz8OoP6PhJgWs0P4K0fp88L1cMivkPAi8WpGRs90Vv21slFMUsueW3%2FNq%2FnHL6AETYUpQ2d5LAUWPfSKRllDr1ZRppVWQpf8KNzm6AgJETnkK1pUsIuNw8FxTAv6WPK4WjLxnH8d8EU%2B1wObMpXufHzB5oRxqav1SLDBWT%2Bo32yCo%2Be8gEcqpKW9KsCuzfDfImWx8YSKd%2F%2Fb6ljDF3KXPBjqkAefV7C%2FRoDwIhYnsmh%2FcFV%2FMiGZTIy21qCZy5lQmHiqpkqM1UAQ1UCIRUrMxko%2Bx6fbxNtXj3MCOIVxZkDlS96%2BVtLtTnKssQqcxYYqf99m34v6ifVwQE48I9qRAuW7SmoH%2BKwV9lMKFvKRl1S798d98LPmvLA0qvpSufbhFWBRq%2F6iBWSzyknyhyL1lz6aO%2BPzG0j6nSLT8d2QnR3kWWpXlv1NQ&X-Amz-Signature=94630b5db570c9eb3f978fcda72a7b548754fdb690c097429d1b5b7d7673c9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
