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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZK2BF4Z%2F20260921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260921T033642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBmeE%2BDfWP8RiqAra4ijUgE1xktuZMv0zT8I9d584RDgIhANKCWo5H9bSVTHgakpn15wv236pxHo9iYHTZcqowWVjfKv8DCH8QABoMNjM3NDIzMTgzODA1IgysKnr%2FZ%2FlPS%2B9tKesq3AOgoeEnm3ghcBHs8IGJAo%2F00mDK5kXDB2ZDejdMPfZDnom3gGZ6OyeH8jcFvidbcCAJoXGlmYKCJXRPbsmquw%2F6YUO12gIjzRgJp96Jxi7yCmm4taL%2BSalltZO%2BYba6kLWM7B7iAvaj4lubgSictGvmUf%2BKSsoMAQ1Em8bYOJ3oQbQEwPJIsOrnx6%2FIhvPiMODi2WiUP4K%2B3gyGEm%2Fn5gKTsqUiDRcdrnf4Skk0kvnRahb%2BpW0y%2BuGJudQCfPkJZWixJSPfVQYzlX1GalCAY%2F0eioa6tlgwilSYk9sntmr2%2B87oZQ2%2F%2FYn26P54Nv5VCWc6c6%2FLT3lBL6p%2B4qAuUB1mJZmxOFYvHj3TbL%2FRLdo%2FX5Ys6XgI3Z5LyZqu%2BBSI5t7z1WrbOdCN2c4ZVR6AYILv8J%2BiM6B5EJXXcaOL9F8C0D85gKP3o3nOx%2BMkQm3MBGomamHyECjwQIOeI8v5hGfMVEN5kFRAGgp%2FazaTB1srL9OKLy5dt6Fwc%2FXEkYk4pIOCb6OaEop35EmHk98j3%2BexFjRNWd%2BUQr0cCaZ5pYRjLGST16CYvIcoCYSMsGC7Yztl9LExn30uOUP1%2Bs5cjGqrcRudP0rj%2BI5EqyXYoT1Jm%2FZMBLNYCu2zakdcvDCOqsHVBjqkAZjp2bkoESnWcuCY6yrnXCP%2Fv%2B9EKdPMacv4WnRFEJ1EoM1DrBn13M0DAe2RQ9AAVVdJC4zF7SsY%2B5cJTSKp0HNLG%2FItglsDQNW%2FeGmMlPGGyTjknANmIRM6SLqsJEYDpuq7hlBNteYTb0vgh1pHwyTcgf7QLMRNX6Zpvy%2BubWAZm1S%2BYkN05H6D9XMBAHzz%2FASFesrvrZV5pXil2bYQFBrXPsBd&X-Amz-Signature=d05038b54d29a1b69b622aed2cd69a7067f09bb7d884eca1db7b1b221df81528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
