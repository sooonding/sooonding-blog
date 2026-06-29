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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BYQ7GL6%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHptUmWbGoxKdcaXTA1d2H%2BzCARzarLq6ojLXH2jp0GwIge6w4Y%2FSJu5TKtGyH%2FfSOrf%2BcbawQOEdMwIMo6CBwC6AqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPenrSvldf2VUfLr%2BCrcAwY8C4Oyd%2FEla%2BmsCJ9J1MyLfVQ8ME%2FIvP%2B7fLU9CF8ZB%2BvQx4WkAtFbHEnzRjvuKZRQbcMNmmhM4%2BEMKTN3SkBJAMRq1J2Bi0L1qSSQ2etDVbYageDayG6iFJayQSmdg4flE8fBHbLvfCVRTi%2BHqDTotaw9Mh8ZTofwOyu0PrIqbGzkAoVo0v7jtLujj5TjcTzsDLYbwECiukzCwD6oFVpKGcdOZjP3iKwQBzVJ2VONsQT9Xx%2BUfVFS1HMdciiMzDX8iTc8vJSvcH2s1tcGs0XREcysW1nYT%2BT2V4dbexinWvawQlZ6lLAp3UX5GawQcnzprWUFOHopLKdej3EidyO%2BdjDhhwWoC4gmA7n4OxI6GADuBXTo85wouWKrzGt5huw47%2F7leiCrX7ToQRgGqh96sOZNGJp33t3HgeDIokSxakHxnOuX3miGU7QvXYeI%2FUsJhD9JUtVCP9Cz33KkIvqQkYXzXjIHEzWHxGhTDiDj5UDmGiKAJbSWe7%2FtBW%2BhESLnDa6%2FQTxqx1GwWr%2B4svl9Wu%2Bl1XwilNc%2F9HShydWdT8GqMuCuXPmvpzqBZy26ULNYnzGqNL3%2FYEGDPJ3K0tst9%2FO5HTF%2BKVz3z%2BCFs%2BwCp6Hx50Y3j2oLBZ3wMLLCh9IGOqUBVcs07cnw6YY34Dl1aFBVGQatHb%2Fb9AOvnI2EiMgatyF6jRClJOuXvRf71E7AxHl%2FdHV7Y%2B%2FNpYoq1%2BMju5JERh8pxeWCqxnJuWLF%2BIunVMpJe4bep%2FPSvepSjwoNegmOceyHX6kJniefxpsu%2BaLbtETbch2iW3Dxo%2FCHiWq161VUkgcT2F%2Firl%2Bx29gCHV%2BkorzTbK6bbXEDCRU63wx3gBzO0w7I&X-Amz-Signature=1c346a18baabcae70e27ca5e6f07c6c4d921f9a37f1b5b2ce45d80e662ceddc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
