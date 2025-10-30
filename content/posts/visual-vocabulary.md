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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3W2RIX2%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCCS6I5UML6OaIkyBIIMNVCTNgq8FHHqONtdbZtS6PJWAIgGFfLP16LCQQMg0RxaXktutj1Nv4EKcEBrZoEGdP1qsMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVqtWuh5i%2BVHT8E4CrcA64TFO5IYD03gFkTkmgrrSdRqZ38qtc3Kqu3%2BxiBt8L9gNCefkITGqxyRn461L09Pm2Q6dcWBJU%2B3BEHjCg2t2fc%2FYAjf4F%2Fjjc%2F9VqzGvMHnNZkhk04ayKAPjkxRXieLIOZnGxf8XHkvwXfadF25gWRGQyI3yczfJgVibmSkOaYzV6mIEMb5RiMY2hCJWGDAo5qQiQTdOgs%2F%2Fnb64spoFOVJTc6Z06V4LqCGv3gBp8crj%2BBTMaIzlcb2b5ktcDVIMcebhCVEhxUzj2AZj0%2F%2Fkk%2FPsJBJ0VtWG8cD3UG1ZHsuiUOqDbZFkg7t%2FWxmmH99k3qAk%2Fp%2BTqgz9rwr1NWnHedLfzgs3FbpCIqz7dJJGX%2F6InY0EbieImVxrQEbNniD0MCwZVhNWgLLI2Cndn9JbSje3Vy%2B%2FIm3VRlMEbuVgl%2Fa%2BceQOm2CMeB5vAUqCSZhL3Y9jfd1Z%2FUr%2FgZ%2FcD6LwO7Q%2BPmi%2FXPzSw2tOEVmJA3QJ6uBLiRNEfWEGSbtvy7ToSdHh6ja7eWBmHQFl6FcmM9fWMpQuz2%2Bg3GxDHqKlHxJ%2BzFkCAIuE2p02V57fAANyDUhESnDInBxTsI13spcPHD1Grg11CVPUtur8pjrDqZEjbhw2J4FZHvPqMAML3fisgGOqUBOEc7uRWg5g9VdU6ujxGxiU4ss9hK%2BDZMXUNHCUauBQoB5HSaNYBd%2FaoD92y%2F0OQEes%2FSniWXkyChd8L%2BJYxiPq%2B6QkayhIJhzKbWIygc2TXpe4HqqwxQiRc5xkXGp9NpSa%2FCKNka0RCYZyeQnIW9IyrbX8w7wsvwi0IZNAcXmBbSP%2FQRZqZRuD%2BAfvWdk2nhaFeMdIwR1MCAou0WzDb8qBeDQYOh&X-Amz-Signature=f1fe39b0c94dd83e228b7d1349f76e607619d97707cdcedb73be22d7cb3f3186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
