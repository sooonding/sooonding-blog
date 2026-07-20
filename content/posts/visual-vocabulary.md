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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DOTZEMP%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T032116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlL3DDOzgbfONp%2FFfcnr3tpKzaZkDPNshHEgymg6K6oAiAcnd3Af2kdhlJGSW7xLTUJDDk1R4GlvObwLnmjca8GViqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPv2q0Yrmx79TscwaKtwDfCsicSTwGFpD8xIBQ4%2B6rYRVVxa1%2F8doiy2AR8WIS%2B6GhnrRh%2BlrtyAfvW0pWJbyXF4vV8V1SzkUUHVfMLVVrFiVl5FuRvr9zT804TSHmKUPzSPDmLxYixwbUDyS8YDmVhv7IGPTKKuX%2FT8rSNj7r3Ht5%2FWsuV6%2Fa3zRnTm2RvhI%2F%2FpSRRNpuj9YL3IIsPiC2SUuRO%2BtXyoWJmtXR8XH1CVpAh5LThj%2B4nocjmkn5BMkvxD8yogSLfLcyz4zjnzHLGM4CoLHPm9KJSklmPft9j7nJWI8CSf5xOd%2BRvMv1AxE6oM9nOpgRsc8iqny2b9c6b6Niw38DV5%2BnLLYpLEAUis3%2Fqkr4OO1hT2V5r0OeeMAhfFmCmwV2KQFRzikdY%2BvvfYVzyjZ%2FdzltnWxLAyCYzo2dQll6gulBQp3HCcwMiSqoJ%2F%2BNumA5qTdLmpjGsT9nZ2lBpX5rVWZb2EILB8mniJPv5BfBCSKVAa7%2FyiA%2Fzww7gmX9iG8EckONEF9ttEXA1XLQF3A%2BcBQuRVx0AKsEkL%2Bvv2M5p3RC1aXXM0c1UjsWjOyPDVEl%2FGSqRxMah8182%2FtYqgVpbskjHjsDJEBgDY9w47yNwS5q9KtyWIxXwJyF1509FIOVHRMYLkw96710gY6pgFDekdJ3oE6Li57oUjoF0kO8fuWLaJRdynyTL3IQ%2Fj1v31vhHSraxaLV8ETNu%2BSYsQSOKpNy%2FJYrgIPTkxB1HQAv4ETom3th29uFl%2BxPQZybvO7HVpoFnNgi46QvEWM%2Fq4BtJR8qlxWC%2FhKnq6sDCg5ah93%2FSDcprmlyaC%2FluIJewdmcxamWFJqa1Rrg0bJCY4oiUi01yh%2BWf9Hi0bz3yfoiSfNcpEQ&X-Amz-Signature=8dc7632d84fdc41ad25f55a5d220d5cc49538a82ca7d1652f63ad508d9599c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
