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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBMT55ZM%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrkBK46KyhNvgL2QkbwdXuQaF60ASjuFYBvoV3opSIFgIhAI%2FnjPI%2FmGyFFOb7zmlI4kJfPlDnej9VaFF%2FbU8naJyRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlOEzMTt%2Flwl%2FZj6Iq3AOVraDwV0sQHXvA5W0G3ZitlXJ7MLzX0ree0ijMP%2FfP00Enajh7zQNL1inDdpd2OwRooRjAyXzrAwNy%2BnHPip9BMfaZeGKKozebjNVfGLehVt4DXeHcrpq1LXNHW3IsWxLpzym0HTCn2jxNxFm%2FtMsMoyrvgkVM5%2BiE%2F%2FO7uGEJPcQ8SXW91oWBQW3ZUMt52x6YvW%2F9hCOKukE%2FI6Jcsl%2FTLIAYPUofEdHdpMc0ctx8Yg8wKufxmCeI6to5S9jyLkqiB5Yjp6gqi0BxlBK1Rki5I6TfD93J4GSRSCozUnmqgjzdFrTcx%2FX1I2Ia8nlp7MKr9KC8WpgQ88Iv0uS4uUizB43Lc36Qq%2BeRSL82ssfsWMgyxFgwBU0CV69MPsvX2Ym58kw0HyIFvYBROrJg5g0ZnA1JuqQGDNmelk%2FXTL3R6yRcD7MVQNez51xIZy%2BwoeloX7chq7rSvrP8mCbBTTGl0080piVrJXkp9QnD4ZX5BodRLFWAnujRVhN7%2BhTpECKkTOybsT6t%2BA1nifWTIqpfyhG5%2FrdHCU2D9slJg%2FOjDG9vWdyO6SOl%2B%2BaiHLrk4HjmcMHwKG5Wv%2FT968fyJR9IZo8jfah7k0RhtALQccRFV4aHsJqxfsD4k%2Fn%2BlzCAu57JBjqkAVwORciPeCnGe02HMqCXAr6tIfNG%2BE4Tvv7vjCaU7HeHPlnjj1JY8Oqae1ZRzZDrQMV5Lm15KXu6utEP3OEUFCJGkZAh7ksUlU4GcmthpMJGgVKDRkco6H8QNdqjnzK%2BOHvOQeAqlfNWHWJ22FmuFOM7MI4%2By8g4hV7oACmSRNBX1rIB2jB%2F0PSVTsEhreKKOZkenErJPyRASUX6vBGNQ7NzNmd%2B&X-Amz-Signature=d549f2bdc2490f6595eb454418be5857f659cec33f477d1078327bd06500c7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
