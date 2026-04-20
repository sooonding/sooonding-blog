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


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWZ4RMCE%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEHoZdyWmCOF0oUjx55DWVWkDtuorhEWPrCy9WjJvaapAiA8iK8shfo4oWyr5YfVGxaMFQxTZ%2F5TP12JaUX44mzPvir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMfKhxqtLslEhd5bKoKtwDZnjNyywF3C7bwmZZNPtvKjbP8wY2cf9b4bZOGlzQJ%2B%2FXGjX10r87ArZF253anEAa%2FL7RhbozW22b4Zdt1XErhnAUHBaSlUreHel%2BExpTkldH2ENqSJpVBRcmlArphEtQDj9JSKP4FGtyZbuJdYvzZh1HdpFPoGKZm7ah6CQzjSjCMJEq7NzGeDWmktuXqas28ebiNlE3EKJ9ZgV1GoWKHwTHBUdY%2FFYMhQToXBK167AIOXjW2Je%2BC365BrIQl%2Fm7w7h0W%2FBT6nq%2FCatMHvCM6kYuOduAblj0FTKM0GlJkradzJk2%2F1sbmHtzwRu90xRCUbxrNbqQR10AAR8130KskHA8u8RRXCaC%2FBZsTiQud8he8MatoyHlMrL%2FCmXevCMgMgex07lhjPyfQkd0gc13YmIf1BCz94EXcBeJhw4sEvFW%2FCz5%2Be8GP34oQs%2FxNXuwpiKXT11QDKPKWGMMm3wxPjfJmoRNS4O6uh3w%2FjtyaLmjlvJyBxSprTj1qNlfwbuCiO6Ea4azwkk9uRBJcrJ1nirHq8u1HEfEIUDTYNnf5rO4LsRfGTkll88lrgh0ew6oLvaNgIGViwjz%2BvihArbslLZZoBRlSeLHhUN%2BIAyiaqI6%2FeZEWCoBmRPTNt8w7fiVzwY6pgG5JFK%2BCfia34tiitIcMaZ20phLFWEr7fZU1zTMmEdoqZJ1jUGXehOKdMeDm67S3%2FU4srUX95BVcykn9mkbp3NX522ocmuwlzvdHXg6cudG6xZnvowoUJPjHV%2BdqWkFFuePf%2FsGhvyPlvQiXoPCeLgAB3GNdf7Shs4Iy1IPiazvi%2BJ0YNM60yHSq4LfMaDPli99Z8NSsIJRBcACzMBdojJ2uiguKC7w&X-Amz-Signature=661a2d502c3a2073ae15537317b50a19f2c1c442d85683a19222979a219e50ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
