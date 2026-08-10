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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDRWIY2H%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T014648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKRmmse%2FhweU51YagLk1dV%2FAWXCszMrjejHW8CmF7gqAiAND9Ilv1UYuVY%2BAfskinFaybZ%2FWXDkDWRYlmKdi8zecyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZkMeflbfvN2UWeGwKtwDwug%2B7LmRZLpdFsTqNCumefzw4yoZSD9uRLu%2BeEyIWtokAZyIPYK0%2FAJE4QGoEwo5g0%2BjFONlgapurTeDcnOR696Wp9BISkMqhdMDYDE5uvH4NHWf4VR8QJI%2BkSlOIidNCssaKD6D2x9VpA7UGhXCKml4K77rZhzUzfw3cG5YnM%2F6hPm1N7nMz9DgwK1R5MD3xLEP6GsFKuoMVCCGwZE5BEzdYIWp23%2BZve%2F5S7%2FWOqCwxYIcCFgIMPUjixwjb69%2FrUPyj9GwD0qWL7HfS79X3z96EzEdnYeXhptp%2BJbiVfrkXGsh%2FdRyq783QvuI1ja1LyVJ7Hp%2BG8EVNRpPTD%2FLNZwZ9FxV669ncysU9jPuzMM%2FafZfcvdzg40tvGfMXRrhlVKjL1tfdcKkBIVHSEbVHvuKtigykZofWCCr9pPydoOB9lgyfGJAIPpJx%2F%2FQC8bNUQMA%2FvYWyoNC1OqJjDzM8xOKBp4%2BbskamHOuOn%2Bq75NxtAqDvfxZJ2mdbs6THRFxjKJHd6S3%2FInGeknrxounPheYnIAQkFnhLPRGeVGnTPcszyfR4DnAF1DbbcYR%2FMcc5eHNlRosedEWB%2BAPjtkKuMaWD7t%2B51vx7oISzaoiu9cb52ofG1ynY4WC%2B4Ew9rDk0wY6pgG3kHxgWLXTkCi3enNU2P8v64czyg6mcNOWMBQ0by31eAuF7JOouqZT7HnHeMWLqDyDyLJvqGqi1dApG59WNR5WINENCkG0%2BYSrPFPVwT7qLKMHfmfnKQHPXG1xkFd60Qhlh21sa7wXJqRlUHzaliB49XaVZ1nI5HeLxO7tZ45Y7BpAGT6c%2BIBvKLYkE%2FD1AiBQGIzlNWg5%2B9wtI7RSzyLO%2BhFYfIrq&X-Amz-Signature=d5a9d29fb7f261df1baab5e697a5a3d47ed640ec310cd0af5fcee837b635ca6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
