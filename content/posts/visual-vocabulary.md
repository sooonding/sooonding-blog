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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZDFTIN6%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm6Sv%2BWQnbPFQ8iaIV3JRYZqUSnAKCQQeGiKoVWeV6VAiBjGjf4Ys1tfywSE1uo6kIIGzoNPWBXiUvynbfjs0I4NCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaiOYoML3JAS8ne2ZKtwDAQIa%2FZLEVUy%2Frv79%2BA0JxiTk%2Fkc1dlNWzNjGpN4NzN5kfaWV%2BOaOIra78CM%2FtEVoCsCg4mAn6Bgsnv3vnzLk%2FIStDKzxioT3XoikXO%2FClhgG81w8fCGs%2FvajmMDNgSi4T2bjVJA%2FcVe508LaxI94h6f6c5q8PvC7f1g49FQLO0ZGUuaehqvccVGhVHG9WHaGqqgas0txA%2FhMjSRwIGN7EOMZASi1myMq7rbmxFghT23e5i4%2BvRiGhPU%2F%2BVUmNstSNyhaaqTBvKlq90omzg1jxG%2FgZPapcPlmePYybM%2BMKYZnQPjd9W0YO%2B6RQON%2F0ssu1%2Bfms1M4FNIbxwAOhRH5iSm3yN6%2FQMxeJVzapIa%2BtnSevlf%2FNOwvwEihXlGwBnMuR943aZiS4aaCr4JKnDWt%2FMXNP7nHSKxLzfhv2oQYAqoT9Fc9m4Sjmyr5Q1%2FEbYaSQMrxfO25M5PB%2F99N%2FfeyoGltGb4in8ty2UGwfcwx2yO%2FGnFDJ3UTITcu3jNpFuPHIEzDRCj1MG7Xeecy6g3dts5guVRKDgCj3fEPwkf4wjyGk3BcRKxiY0Zejbdfn%2B2jhkujyzF4zrSq0zWySFCQB7s6QLAZwlrJtDo8jCHZI8igw%2BJ3ETTq1SJgwU8w%2Fvb6xwY6pgEE7%2BRZGx88vMQ34HMdvwUZgYkFjSZWcjTuxBK2Mp08SH6SdAiEDeu8JEwXAltk7Q4uZTKd564qQ77qs8DR9gbi68h%2FuBB3AWD5XNIR7%2BNcPiKMCLSySxz66Axu7jWraC6Yol3eRt0mVGy4MCJmXkIYyCXvq%2FjTewANuIpFNax5cY4DSV8ZvHVSTxHG7nxRJeuVc0ZtGIRFWuqZq1Hn8G1plFkUH9HO&X-Amz-Signature=131b82014fbdf6983e5a0ba29bbaa365b0b1f1248ca885ce784fd32e87f9ea67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
