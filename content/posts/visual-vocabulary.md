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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWVGW7G7%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTaax4sv5Mg47OOKGNqAAE1c1NfJnJqKlc7n32aII2AAiEAg9fkeDxDeBEbDrPgSZqlc5TB9V7BEAGpOIkmMrbaDOMqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOEp9yEUL4VG%2FRcK%2BircAxPycMJqS8NEjgpjmDTD%2FjdPzR2Bt1C%2BdWffWXxppCbI%2BesQf5X24WICgCf7Y2VkgKLiMq50ILd96QlJlMU0tVWY3NoQ14RcrpLtmr93xP%2F4beo40f8Cahipdxfiw%2FOCDWdD%2B5P40aar1DXnl7yHTYuhMKcFNUjt6ibvA3rDURVyfR%2F6dLCGC0NA%2BsxPCt7PvnN2RcXtKvf%2FaN8HShlVQ4Fg5HJivoqLx3t2zcqXzlRZ1jKB8%2Fby6lm%2FRWSvOU71pePbxVV64xj30BG0TUCCvY61PWHYIgp6x%2B%2BG1o4oQSeRrSlawY2Dmm6NrjiDXx8eNdtAzhMiJBbbpgyjWAz7lWjbn5KRbk9i%2BVriGtz2w4FgW%2BdNu94qdFN02SR80mArxFswqqBauE3vjZYYNbjMw%2F3ETJLZnfpFLchKOmk5WOJhpE3Y683rQ0Wui0K3t3RWDQkWjq%2BTsIMWsAnMu3x8zc%2FTyybq%2FbPtcinFX8XrccIjkI1o%2BerRvsIn%2FjMh4lSCED%2BVQpMX%2FzEk3Ci51sYoRr2DpAM5WtBeRG1U0F4NNY%2BUG6woj35FQwfG3CXXC0Q8inQIgciXZgAZUjEsd9ttLt2P8S2GzKccIzyrgTQ5PtmN%2FNgKCo4Q87PjcG1yMJKcgMgGOqUBhv%2BWz7kjxstK0Hym1gCPjbdT29cz9SPHQo20Cwd9JrBuaaPjTEXjNuUWhaonmPSh60bQWanNvK5qvEBMSkQqy3pm4Om2fjmAOtIpOtot84eXT1hxzV6efxu2fTdSawESmUvT2N51fwRkBouFZRSJr%2FUshIEnQdfKwTZwtw509k2AjUH1g%2FfdB99xHG4wvQiFrWpIJw2eJK8G5LPNnRUCEWZ%2BwEF9&X-Amz-Signature=9610b4236e8a85e435336e47834af220d7699b34dbf4a8bb37aec3fa667f1dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
