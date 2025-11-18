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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K3E2XZA%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T010224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbTeouG8lI8AL36sN17MP9AmE%2BV%2B%2BXFoH7HVv%2FfiDN7AIhAJiQh0gYconxjy7%2BaRjVPA4wGGFKRIE%2F6BRPeTdH7rX%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ%2FSQx3JoZqvdmVn0q3AMVul3QxvR0IIdJ2KPVVhwsVMqbpRc2Jf%2BwxExd6ZAFNaJnPWaLyLhEmSTZqQ8EhZNe9Q6a3Sm35sE0btx%2FBeq2WYs2FMDcH2VS2LyMSFmvukI8o63dFKdc0RpMzfDg8IaAAVHC2N04bXBgQLAX69CoReAStW%2FhcCIgzz4m25EPOPHLPYdMZefgULBjgRgZeKDL%2F7jU7xudqJmbVBK8HZiyU1xuesqeEcX4ezAmLzKSFkiRCq%2FR%2Fw7L7sgNqkpFQGFPcdfGQ3PzCyxn934Gmn9pd%2BKxgPBS0F2mXayyJrNW12nAL5%2BKQtspw%2FUygC3OJDNHZGI7QS04b9zsAVfOqk8m8PfNollvdT1xL1ShJ%2FsHXq4kOQdL2DmqRtGomtlgRO4ztH2Dlm%2B0w6TwMDlEf05gDHBqhnpVUSjH99ivlQqUsiYVsa9x3w4%2FheDlh7zaI%2FbMpCTLLN7CJ1qcU16MZ4yCPWj3UaCer77IJnjiGzIN%2BI9mDdHeS3VlS42K4cbP%2B2BuZCuJLgNGYdieqADhvkoRgAiYQZNxbnAuOaQOlkRENC1am3s8OS9DN8fyo1%2FwWQShQDTYOdA2frodPGNxo5vVxruqBPXOA4QRBJUcmvPGGQ4ZVYkNfI2vH1DUeDD%2B%2Fu7IBjqkAfA3Wl4S03ewdZHQwTqa92hrBGJ5N1cEXLxn%2BPWqBFi5gp6k0T%2Fu8lW3Gm0kh1rIOmiOf43%2BnzZ705OsabHCiOmYMnqDviTMYJ58Cnl64%2Fv1LSD9nV653r9rZHf0JV%2F3IpJojBdKyR80GGDTRzc71FOvkgtHkqc6C%2BKEognT8sBV7irwkOitjrNzaryznnN4Vi%2BaRCK0zax2uwfzaWp0pAVUvbJS&X-Amz-Signature=2597a9bdcc2f0b8c309fbd7a70c2c03eb3383de0a270c0efafc6825326b487b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
