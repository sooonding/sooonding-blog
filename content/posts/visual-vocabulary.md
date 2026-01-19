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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHM4UN6%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEczlksPIZYLQW4a9Ggdhl%2FgpuRhXdZqlzr%2BpT0uJRjZAiBBB4rJAXnDhBHyUhdTLEZVMCws4xN6WLx%2FDG27%2FsjLVCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbcepAWGhH49tVi%2BgKtwDZZ5RZM4ODFlaaTxDRhB6XYjDiQ2I83qP2GKz2lshGiHwCurh5h2m5FNo%2BcxLDoaVkEX2SAZ5mYV422w7t%2FM6pXAXCcCFOk7fFhxtqepwwozzrkjUQxiyWeykejFXTB8Tt81R1HIljhaZv23%2BiQIjga6jI8FmI43Hwdy1my9zxse6srnOBRLqbIcfUk6KzVEBAbe9tjzoCLg0x9PUEga4JHQA745Cx3NfAFBkaZm%2BgInWS0K4E5k43EaCttkVjoWKCJ5DhPLeFv7hA7IPacdm5eW7jKoQUpKUcTxb9rJk%2BQnQ7YIvVCaeV2%2B7ntsPci%2FBkXW7j5RnDrD7FENiKXzyT3Y0kPj4L192LgCf0WOg7zpy8BM0bMGgt32cx5ElRiEw5yW3m6BNUjPKrBZq77%2B55shAucCRjWPDh%2FoYv%2B3EHWrelfym4uvI0sZi8u%2Faz1zY%2FduGqs9OZxoR0e4hLSfrDddJy12JBSBfdwgR6u%2BJxFIMBk0w4a0xRimLWsHeM5z2cfP12NduAJ36bQRrt32FYJRTc%2B2sW7gPdDcWLXLMj7TriZSx90oxQ6s9wilV2jZ3AhfXWI%2BVgqnXJt73ozhCLU%2FwcOCQKp3eNNh8phVmJ1S7RGpAx8AEBsyYxj0w1MS1ywY6pgGSdRg00jQ2ZcVRSZPj9WvgY1UlJ0YEMDg267dGkc%2BKjFNXKIWY4e4t1rhXRW7zQ5nRWjwLKL8QlYJBYKJ1L4JJjCdkK0SIOachQNf%2BD9LTAToUEFMjpiZgkCf13kkVOIDn%2B2hNrhekIcKHHvQp0ZEhIZ37WFasRux8wCy%2FdmTT0%2B%2F4ficQXcwjAm%2BVq0zZdCcBr80m%2FY0yHyIQi5S7fM1SGnaVdPsv&X-Amz-Signature=4b70fd6a92dd502a81b5bdf2c6c8850d840568285990972045a1b84f87103fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
