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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGA6FCC%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDla5jne%2FrMwYwOLblsARgt24%2FgiwlrW5qOZzqha1evwIgciceYE1v2r9SH9CbEnYbNJPDxWH93Ie8ghfiYuhqRcUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQt3RY%2FgK9Cfb5pNSrcA5NRozoQRynKi4Vh%2BROjYbHej2dZM5rGJq9xHGtDk2r2ewzrpKqQ4uaN%2ByqPYULyvdxTuWKadr9Ssk1nO1dAHhfK1pBkHrtrN0De63w2UU8qIY6Xfr6BNsBDK71dxEjat%2Fnpdvi4lNJh15CC1abbPcdAP%2BQF3che3Y9OJLXQ24Rlv6zrVAGmg4wJ1zkA99uo36fF6U%2BB6UsM2eJhHi5RjJejqvMv1%2BolJ6WBqc8y61uZ%2Ba5xm0jvWWfvH4b9BzICUoAyhJn9y6sjRHWigEPB9qBfoWNSDz%2Fb3xRNEvV7vT1BLVo2N5odjxhOvbA4kkfcUclnx68LBEyhjRLKH9eCc%2FOBxR4gU3flJwJBbWcW9X86GubnkShoHFwor6xa9JZsQXMhf1QCyE8Tkosku%2Fzdev1gmmrzpH50ew8cpIcKEfWIpQPhahABjGvab3zkSYlbLsb0qhiY3lUiTPAVquxVzzBO0qH5LCqxKrx7A%2FSIcyThs%2BWguyXjJshMlVwi10Xoy1eNvNw%2FIfON1q1Lq4CL0KYVbSMkyM2TGomTxNT%2FFltKfR%2BYZtklXp8KbQerKrWlRAIEZaFFsFKY4%2BJLyWu71qaD8ST5brhsFIIT2ECy2TarxSs9eZt1zB1l%2BQ58MP7tmNQGOqUBrzAvFfpqffA4uQ73T9VQKQvIYXCx%2FnaOggEQWp04SIn3PtW02TardUiS6%2Fv%2F06i0yi4r9qETVIwQ1hHYOkJ96R4Lm4PV0LNAB1FEAu55tlsdqC5wA%2Bg83tZQ95ZQReyvLgRi29x%2FHkgOtUzoExLUE1vkZe%2FrU%2BjjxvByCkCZyGg92UoqI505Kdk9k%2FZge15%2BCxSrvlR2YVBfxR%2Fh%2BSyTnvjyMAtS&X-Amz-Signature=cb46d731ff395e6576025985fd97a0ab25d5d821c553512764f4a8fc80dbd2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
