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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIG7QO5%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGi4AQAIWKoBNaDs8Wrh6V%2BaUw%2F8rSyFIRayLplz8itnAiEAzViXAFRJoxyh2WDRiu5flaJGZH5Kva2zLq7FgfG94Y0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIgj16IA%2BYqLz3lbQSrcA%2F7gGXR9r4X2qEAhc14pfTRIhFni7HI5uxilnrzBFPkvSQ5m0q1BbyxUoVjCt9QZGarmsoULHphv6nTLGbxMJd4usUBgt8J1z4en1hVqqODmTvAwfiA%2Fc%2BZTyFrfw%2FVmtNPqydUtoiglV4A30wXzvDubQeoUIw8TN8dgF30TSSZHlFeD%2BetAL3lzC76IXLx2GeVLQRcvLPvJXNQ5EJ8ja7L%2FJQcmtg7BRutihhExeCP0tUkQBuHFc9FplcrRf7Wsu6gN77TGNkAFRyWjmRsaX3La3gcLLSZ1YpNeucxf%2BS7i98KPfCHYmzjoUpE49v0SVq%2F%2FIMUaDLRJN5RkwW7QKlEVz7w1rGqxtn8c7nSS993Nk73GU3Mr%2FxSJfZXrN73aMjPJSvHUeacTfPpaAaIVn%2BdjW8v1m5q9UScB%2BIgvpJOfYKlHiK1xzsD%2BELeHjDwlQWwZ2wn9Rda%2BGl6WsAg0MVkMuIgQ%2Fr7wTIVqoLVxFpi9XNFvJKt%2B%2F6r5vntsQK06oL%2FzvO8UDJ0pAuzA1ya0jNxeNhQcZcsinHKEv%2FggsKYEiqboafRvhydZXHw9CoRxWrQb4NKHQOfAROalFVyMboSDwXW9q%2Fw0UPwJlgJAQG4ToSeEvOzY3bBi2PNYMIGF99UGOqUBSnxmTJo57g3UeRGOafDHDlCrjKe%2F9M8QlOVLQkUDd%2FyaWNi3%2BtNxdS%2FkfVLE8Y%2FXzocFVIfabRqzqV6JGfcY3Rt1hJCIcp0oAiwmAnxU9DlmQHDZCx49Q1p1PZgUjSG3FsirFcc1Z0nzT%2Bekg8egUp95dmNRiAo1sFqTtckcS%2B3oG7%2B%2BCMMZArfjQ90UYgGQNHaNWIFKNVCPj8Gf8TnCp2E4Dnuj&X-Amz-Signature=1090383f363f32a9a30003af42561124e4200697552d8adc275c1ab8d9dbf5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
