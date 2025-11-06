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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLUVAED%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5F1JnFN63KYTa9Ze1Y%2FKK%2F9yqpk939KHrJGRdN6ySygIgfvPnhcMWCk6UkplibvsqgDzPgAPWAgC2cHeRYuLjE84qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc9n2YbwwuyHJiHpircA6BtadkCAKV4PBIjFakA7GV4qvdrxBq%2BDP699QoF2gy4NiCEgtZGvjS7sWuQVRl5dwpdnsHCpDeKEPSmcn47tg65iLJHKQ14fG7t%2Bl9oA6M2O75nBbESVmFFh2g07WqP7oN9cON6qmef064Yj%2FhyN1C%2FibNFAPyvNmX%2BPeYxMZ1%2Ba8Qog%2B2tiTJ6WWi4oTpXGdDEJPDY7w%2FLqVLFGqmwUqWbH6ul5pVc%2B%2B5svThfVbnMciVlUyvVUqYYS3NDcUbdgcpZMeS%2FhFEuf97K9NwRlJJ6NEB7iKk3f8s%2Fx4KBwtIsYeIXTVwDPWGfuyOTZwwzscTIE4O2AFvP7fwxdgekxVyvLE0ShydiCZfYhxtJE3urxTDW89kAzq7Yve0HrLujX5xJQQS5suXdF%2B44atO1QYGwfPH17h0BdaiGDmjPs5mOvQ9ID36vvMSEwWRFSR71b6GLtyACObhd3XgAMmJK4Zl16b%2FjuWR2p7uvBQgoqgzqeUehKLVn0pXAOVwE58BopoGW1SWbJbjPkh7EfvyT6ZhO%2FRWrSyvKL31LMb1uVdZvYl4Hx3G18yLFlauMcJIeKelT%2FS%2B%2BTIQCQmeCZOekfZ4%2F9V7h%2BmC5aCyAR%2F%2BhWeKhE%2BKubZyKRPvkpDR%2FMK3Wr8gGOqUBtYeElyFwp5QSrTBqFjZ6rZnu9N5%2F6EWYZnp8Oqulqb0f7LHQy%2BipMqIjumPwRYHCB6fXo233H4qRUUE8WTHaaXWFwUzsyeaaeum%2BxvPQQjqfI9KnTg0IGvbA5zscI5OhEPHNyv3vpurKQrwWxJgZOT41lqNv1BE22WydJe6AcX667GVAwWe8iXOWCQ1DCLijRWx47tf%2FAVkr9UkJonDYZog84MWk&X-Amz-Signature=ba3106a695c2655dd3486d462a949b6e92ad05b98d8920d7764549a7a68567ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
