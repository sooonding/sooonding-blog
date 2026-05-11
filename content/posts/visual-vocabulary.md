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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IUPVTF%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBham81D8WwpXCb65KqOthgeeS6nKXcluPyXRjdxOarqAiAE64CZrKIzzn0g2VuyUEGAQH36JDJtQAOYPD2qOR52vyr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMyNhg7211T97rl9o%2BKtwDGamzbQ9FiEMRocnGHyh0GQCYHnDabHYgbRdm0J3qQQWlB8z2L9vJElqIkE4WzS5ZV8FiX10TPyK0KY7MUJKusJiMi3CjofM40Z9k48z7kifaShN9y5YIfzp8jby%2FVLeFd1dK0h5J3GCfuWXsTG4XEHmAJICwOYiqWZUAJ69ItFMt9EM9hIeArRtgP2HFqBLNvoEEiVS6fnlgVrixRqYtTStlSKG7hew0HpJk7LLP567RfLLX%2FLjR2vPxYHJOOFuUW%2BO4nHPauPXR91kWkM9C1lYb1ovcaS%2BfqDTjFWu%2FyE%2FYDZT37glkYpb7zuQPWRAPfHMovM6P8TpQHWqSaHQOu6%2BcsmeZ%2BTPQfBNACnyJw81aI%2BOHtUtOOueFZYDCknABrj4Nu4TT8AFjK%2BkJCXZQjz8cTQ%2BiPG4YWtUVsYZmROLNYNsBpbMEJVXobwxw5gHijWskzzXKOx5en95oW4IHG9yaadkOi5DpaJWVvRovraezwJZucbFufkxXx4V4GinhsyWWZGw5VbqI%2BupzWCDQJ%2FIQNhkq6eDwiuPkWFA%2BIEEcf0iCdSYl0yYo52zsPde7u%2FEbcr6pD5rllIrK%2FDJ8rFGh3qs7VoQoxff6WfjuinTcqtd4vMvhH81y578w2YiF0AY6pgGa6XnOzr42B8etDS5ahqBgbv4WZch6JcmPbUwUfg8vfmydMSmcCAT4L7CDLOhqUZn90pBBtOd88iCO5K5myhCpnhjQNtppstArEvJfCdJPjf6ywG%2FjNPvi7WzUl7aAbezUyiaxO3QpfqoQCiQrBof7qtW4SGDQh2qLftXmREo9XqbM7dtIGZlxcCc0OxduyXKuMqbOhLOJoPDvbEWca7j2dnOoEBeE&X-Amz-Signature=b114be5b7cc8832969f35ce9ef16210dc06d5effdf9c1459757785bb2f5cbdb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
