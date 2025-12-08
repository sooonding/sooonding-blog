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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTGKQDM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYeBWbQYfZRmuLS%2Bm7P%2BlMvC6qAeWHZRgdY%2FWm1eUHrQIhAIHSlRSmiakGpjTjy0K%2BSZDwLjeAgn3I%2FS9phK6kwQkJKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPic3tskrW8iFLPdMq3ANhGSt7pbNqrgPTCwqw9QMxd57%2Bqqxnifxl78kUS5Wod7uJywvMTRJrVpwv%2B91mJuWY77v%2B36fyKntg%2BhvbZdk9CskruuhPYzC937gJllP9VlkTdYEn%2FFG5x2XwyyE3GAIGrvkk1TgRgCuXwKjF5RVAkR9cnNU8YTMqMhJXIVBAvwlLgdgO1HlXgZBIfZU4hMfM0fqqbwi%2F0m3ScdaM9f00AoUMOgiFNf%2BrOkYO9S19fr5iTrqKMiFsthPQ8JaWGfBUZZTaGOf3QuIt2l%2B1GtrQmG%2BUH3kcozHSrFO%2FtqBi6QpoMLkRINQ2ZlY0CFzHD0C55xG4eNJYWHUxuqGz%2FZ79WzF2Plael4PqrSWvVzNwiNL4xn71tHYJOoPsHVjJnDK25lrPK6dRgXkgdJ0ENEqAFc0xD08XFGP68HtcwFVkc7JJSuq0I0EJP9KeyMArHQKdUF71i2UDr3rcAg3syhPbOu9%2BQHZe8RYiy509yjUFO%2BKG4MIVaAHHF0hGGfJUiy%2FU%2BMgAwc9RJ5oL9IBjkkwTD4wBzasR4BGBqdG3kOKbsmRAcqGLgXhSPv%2BkxEJCgwdNPkusMww7gnrEjKseVXZCMV%2BRVJOYkc7q92mslYD%2FVwNo9jREN3Y32%2BUWljCzwdjJBjqkAZYMMfJ%2BKMoVTd%2FbOco3Qfxbs13UW0MBCFtn%2BKz9odDTtq3T9Rg2HsEBqaxFEMRbvKxt3TKSgYXJTE9t8gIaV9g%2FXlJhbf3e40gzLVEYG3Uq8kjl31tLPl75hCWjmxvlIOafDSR00egJL9aaUfys2COInjEL6rRgFX4ZeYIanxYNGCzBX%2FCgLNjGa32J2SMvoqO9hHY%2FMADHocltAFDqa1VUfBcf&X-Amz-Signature=573bb637fb3bab1c6b940c1e314956f2de4c2091fd930e55ac03a7fd9b40d97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
