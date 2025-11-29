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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDWBOT2%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuA6SWIAUON9H0upAnaiPio4G6UTBR5KU%2F1AZHPNkUvAiEA%2FvVGDzCNAZCOv8Ko3jZ8Wek4a817AbZFu4MGNOfPIakqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzALxH%2B4%2Fect73JKSrcA%2FYPmWWmNT1P62w9iGvMzW67jM63hCoVWtwEzwSodYaXE8gdu8wv8zUZyC24tGMEJ8RPGO9HFameWZ5I2ImB%2BrJHRM2advItlmZtNr%2FOrQ74t2G93jTEtmxq5PBH9zij%2BS5RiBJcDsCPvdy0kbCqlUU%2FyEwpJ4C0XzFZ9JzI3TppXoOerwjC09I903dsUX8CDofmGrQ7U6HTwQULz3DcIYUrWyfnR%2F3BOUJOCXMbOV67%2F%2FHHeVR4oUxupvH%2BZJoUpfq1A4bcsOrYWOWPjYc3%2FVb1nJBz0SuKrWH4XW62kcxNY5vBE3AQRK7mHQbmDxXv%2BEPcb74qQv%2Bmbx6P4pZypSF%2F2QdZGwuaMYSXjvcjhMDpDCn1rDew8BNkakW8zT8y4WVzt6JDTPC1hI1%2BqKvp7Rua6azBo9wrC%2B4yhBMQjIMl2xVQiadIWpZSgriI29PD%2Fe7mOz4GHjO72O5h5HJGlxHsJkzULcsVNeffFGCguJZw61H5BdMwyDyiN%2FNgLSMwVG4laIIqrty0%2Bjyr1ToEOS%2B5AxBtqJVpNy8kPNBHaK0HTB9zXSKJEKIGXSed9pC6NLsKe4pzsS6onI6MPdcV5REwLfrHMZ%2B3l1HKnKxHOwKlpBfPIfNH3mllp7ocMP36qMkGOqUBKWpPyrgwrhpD0d8DdbjPJQ13Y37OAPf5YUFUcOqJj6dmriTcxlWNx5ZahUJh8ICpFJix5vKEDB%2BVZw0Qlv7PIm5g6UqR9oyb1LNiSpccu3SNDh9r7kABgK%2FfMEE9bx2UVHYTU7mnZ85TNXj1h3d%2BKvRigP7WgzMJkDh%2B2TwxvQ7s1iR65iO93NaUwxz1IBdZYAhdYUKiB%2BgRpizF2dncbzYC5RcJ&X-Amz-Signature=b920e67e3c77721f6dd72460eab24e2ce790b95c8f9ddb23893daee2e677143b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
