---
title: "데이터 ERD 작성해보기"
slug: "code-erd1"
description: "ERD"
tags: ["sql", "DA"]
author: "seongjin jeon"
date: "2025-09-05"
modifiedDate: "2025-09-05T08:51:00.000Z"
notionId: "2659b006-ca58-801d-91cf-f361fc11f123"
---
Fandom-k(가제) 서비스의 디자인 화면을 분석하여 필요한 엔티티를 정의하고, 이들 간의 관계를 ERD로 작성해보았다.


### [과정]

1. 메모 ( ERD를 어떻게 그릴지 내 나름대로 툴을 정하여 이용 )
2. 데이터 명세서 정리 (개념적 모델링)
3. 최종 ERD 작성

### 메모


앱 디자인 화면을 보면서 핵심 기능들을 파악:

- 유저 : 유저 기본 정보(이름, 유저 이미지등)
- 아티스트 정보: 아티스트 프로필, 팀 정보
- 투표 시스템 : 크레딧을 이용한 투표 기능
- 조공 시스템 : 지하철 광고 및 다양한 프로젝트 지원
- 팔로우 기능 : 좋아하는 아티스트 팔로우

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQIIPWI%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T024719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDH53mkpY91oMmSxxX0cGDhRjp8byFYBfQWrHKFGzC%2FiQIgWK5lux%2BMlzwrHS88qfJsRucKo4GKl%2Bd9TVt2pcfpswYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfCrrUnz5YCAj%2F8SircA%2FMDYhoh3vYg71qxrk3HNYy5dh7TY281pmd%2FeK8HM06t4RhmIZ2YSWYBy%2BgL5IhNfgWpXh7a%2FZ62kbh2BW0v44GsHwxWYT0ekby6Q%2BsMUsY2H8OdsWNFMjg6DFAICN4jZE6NGGfJ5caF5%2FiHbG662vmZs8gyoFog1e%2Fm%2BPMfVdOAbf85RiEL56V7z7q59K4uKcaF18xgqG06721rnOQ2LsBoxoFvsjCoMiLEeEMIq%2Be91aHD9o8wqxN7Pe9k7ad6BY15R%2FDM5MGL7x3wIzYcTQJY61rfvyZGc0LNpqDXtoFxIWIViV%2Fm7Av1A%2Bc5lowtENTTrSO2fcKnGkD8XILi3jV6DmKGz%2Fe6%2FtVqeucNxi33q24%2Bs%2F6At8h680eQ67nv2%2BMKi29N8CBowmZQjhlHSvCMwStpuD4dyuMB1rbsUgMICVHefEmPpR%2BsuAIMqTQSVCPD82G7dnrpINWLRRDRHXr6HarKqCEKhGBnu4E7Xw%2F6Q4nycFNoPmaVmJrusWQkX5HwsXwBCZnJFdCoByr%2FqT%2BWOzStOwFllkhgoy%2FYxFpsRCmmmhuHjax3%2BDIsYA1yP04OWsktUHzzpaVfI2eVRVw9dnPCwrs2NPM4WeFo2%2FCNMiMsNeS%2B32lrM8bXMImY0dIGOqUBDbGmqreiU7wPwktQDlIo7jbWG4N4JVlX%2B%2F7YYNVI9fDHLNwkPZWojpGSgntP8YAeBpAnG%2FKV2bCCeesEXUniMtinOnlvUEnWBQbCS26GAUYyiJyzOy09IRcZ3a3DdAmjFPt1QPJnOQd7jeYE80RC98KijVuB7HQaN%2FwdFj9ExyJyuAqGHfI3EjZTZLAnCZ00XV%2Bdn%2BVaqVpjaJNqkV4q0qYoGd%2FR&X-Amz-Signature=70f4f85046bd75cd4e37f32950358710ef59f0c08b761704eaae4a2212c305a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRTTOOW%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDc23RBXzOydDDXEN5%2B0Fq5JI%2B%2BjM32fqdVv%2F972Gl2iAiEAiMtsOFxRERdu44mfgIY8vBiVi6JR9JLRkn77SeQDvJUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnzJmNbl%2BK%2F8MqbjCrcAyGQ3gs%2FYuE0hKsxj5lImOa0uhFQXheDlWc7UQGL7ysoSzFfVnpuk5xNq7ycq4ABp8KIaxki03y0J%2BHu0ru4FjehjlF%2BgWM7Gb3%2BEdJzfnUgPCUIvvhJFT0PxFHy4d68li4GYZlQsvDEKI%2BjLKlo5AWt%2BeX4%2BhKI9Yj0lmpJNgV3vuHiYA0nq7bqX4900I%2B1lTCtriHzl%2Bzttgxjr0Bqs72LYE%2BOLQ2Ta3WLVlXsgDwJP1OBmPDhNazix%2BO1VZglgzkZ8GOxX%2FE8g%2Bz60sbAYEaKECvtERmJ5%2FOEegB6%2BskGzjegoFUyRSCH2WttiQdLeIqUAY%2F%2BArzGeavS7z0REMAso5vAm%2BdL7dGeRTX9UPbtnqs%2BejhzHOAMzytPgoFwSrdFQzosq4RC%2Bz6Vlz6kfWaq0BibYx34Db0qpaftQXfXQVz0wkZjhVXKf1l%2BjtxYZM%2FxSojKQM1mQ0%2Bo6Bi2D4A8pEXFIbtW3oeiwL5Cbdj9QHRreuL8czQV3j7pT5vT9Oc4nw6QlDvCTPmiRb7TufzP5aIlxKDeSLj9Ub5hDtilCnEBr443DuF1IqR3PUtJcwDhKgWBbvLECoqkkpdvgtmFs8WA64EajbZX7l7g8rggw2DQSLc3JCtaq2%2B8MLSY0dIGOqUB%2FWq1IM4KDNeLRTsZ7pENz5WeKU4mmnmLwalrMXzROWxpN3kpcoQfrro1aXGjB4xODATp%2FJg%2BjvjlfJkYeW0TKXN9n3SYq9xYa6yJhCy15vdljhwzb2u9tNH6gIHdKp8ujMgAdJc7QP%2FN8vXPLNC1sPm%2BAqXS%2F4aL4llyV6xljifRsIRuFba6Z3JIk1Zdx3MQRYKgGc3rc6OziNNktTzHrS039JQQ&X-Amz-Signature=9c5193b8394da4723c66dac481b686391367b3c61dece86dabb6904ec53d5d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRTTOOW%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDc23RBXzOydDDXEN5%2B0Fq5JI%2B%2BjM32fqdVv%2F972Gl2iAiEAiMtsOFxRERdu44mfgIY8vBiVi6JR9JLRkn77SeQDvJUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnzJmNbl%2BK%2F8MqbjCrcAyGQ3gs%2FYuE0hKsxj5lImOa0uhFQXheDlWc7UQGL7ysoSzFfVnpuk5xNq7ycq4ABp8KIaxki03y0J%2BHu0ru4FjehjlF%2BgWM7Gb3%2BEdJzfnUgPCUIvvhJFT0PxFHy4d68li4GYZlQsvDEKI%2BjLKlo5AWt%2BeX4%2BhKI9Yj0lmpJNgV3vuHiYA0nq7bqX4900I%2B1lTCtriHzl%2Bzttgxjr0Bqs72LYE%2BOLQ2Ta3WLVlXsgDwJP1OBmPDhNazix%2BO1VZglgzkZ8GOxX%2FE8g%2Bz60sbAYEaKECvtERmJ5%2FOEegB6%2BskGzjegoFUyRSCH2WttiQdLeIqUAY%2F%2BArzGeavS7z0REMAso5vAm%2BdL7dGeRTX9UPbtnqs%2BejhzHOAMzytPgoFwSrdFQzosq4RC%2Bz6Vlz6kfWaq0BibYx34Db0qpaftQXfXQVz0wkZjhVXKf1l%2BjtxYZM%2FxSojKQM1mQ0%2Bo6Bi2D4A8pEXFIbtW3oeiwL5Cbdj9QHRreuL8czQV3j7pT5vT9Oc4nw6QlDvCTPmiRb7TufzP5aIlxKDeSLj9Ub5hDtilCnEBr443DuF1IqR3PUtJcwDhKgWBbvLECoqkkpdvgtmFs8WA64EajbZX7l7g8rggw2DQSLc3JCtaq2%2B8MLSY0dIGOqUB%2FWq1IM4KDNeLRTsZ7pENz5WeKU4mmnmLwalrMXzROWxpN3kpcoQfrro1aXGjB4xODATp%2FJg%2BjvjlfJkYeW0TKXN9n3SYq9xYa6yJhCy15vdljhwzb2u9tNH6gIHdKp8ujMgAdJc7QP%2FN8vXPLNC1sPm%2BAqXS%2F4aL4llyV6xljifRsIRuFba6Z3JIk1Zdx3MQRYKgGc3rc6OziNNktTzHrS039JQQ&X-Amz-Signature=ee443dba3038050efc0a0e490bcf4332f85d28ec34270e45c6f90eb398bce039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRTTOOW%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDc23RBXzOydDDXEN5%2B0Fq5JI%2B%2BjM32fqdVv%2F972Gl2iAiEAiMtsOFxRERdu44mfgIY8vBiVi6JR9JLRkn77SeQDvJUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnzJmNbl%2BK%2F8MqbjCrcAyGQ3gs%2FYuE0hKsxj5lImOa0uhFQXheDlWc7UQGL7ysoSzFfVnpuk5xNq7ycq4ABp8KIaxki03y0J%2BHu0ru4FjehjlF%2BgWM7Gb3%2BEdJzfnUgPCUIvvhJFT0PxFHy4d68li4GYZlQsvDEKI%2BjLKlo5AWt%2BeX4%2BhKI9Yj0lmpJNgV3vuHiYA0nq7bqX4900I%2B1lTCtriHzl%2Bzttgxjr0Bqs72LYE%2BOLQ2Ta3WLVlXsgDwJP1OBmPDhNazix%2BO1VZglgzkZ8GOxX%2FE8g%2Bz60sbAYEaKECvtERmJ5%2FOEegB6%2BskGzjegoFUyRSCH2WttiQdLeIqUAY%2F%2BArzGeavS7z0REMAso5vAm%2BdL7dGeRTX9UPbtnqs%2BejhzHOAMzytPgoFwSrdFQzosq4RC%2Bz6Vlz6kfWaq0BibYx34Db0qpaftQXfXQVz0wkZjhVXKf1l%2BjtxYZM%2FxSojKQM1mQ0%2Bo6Bi2D4A8pEXFIbtW3oeiwL5Cbdj9QHRreuL8czQV3j7pT5vT9Oc4nw6QlDvCTPmiRb7TufzP5aIlxKDeSLj9Ub5hDtilCnEBr443DuF1IqR3PUtJcwDhKgWBbvLECoqkkpdvgtmFs8WA64EajbZX7l7g8rggw2DQSLc3JCtaq2%2B8MLSY0dIGOqUB%2FWq1IM4KDNeLRTsZ7pENz5WeKU4mmnmLwalrMXzROWxpN3kpcoQfrro1aXGjB4xODATp%2FJg%2BjvjlfJkYeW0TKXN9n3SYq9xYa6yJhCy15vdljhwzb2u9tNH6gIHdKp8ujMgAdJc7QP%2FN8vXPLNC1sPm%2BAqXS%2F4aL4llyV6xljifRsIRuFba6Z3JIk1Zdx3MQRYKgGc3rc6OziNNktTzHrS039JQQ&X-Amz-Signature=4e875e4beeb13b7bd356964caf277fd07c34269cffc7a01a482215ed189e57e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRTTOOW%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDc23RBXzOydDDXEN5%2B0Fq5JI%2B%2BjM32fqdVv%2F972Gl2iAiEAiMtsOFxRERdu44mfgIY8vBiVi6JR9JLRkn77SeQDvJUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnzJmNbl%2BK%2F8MqbjCrcAyGQ3gs%2FYuE0hKsxj5lImOa0uhFQXheDlWc7UQGL7ysoSzFfVnpuk5xNq7ycq4ABp8KIaxki03y0J%2BHu0ru4FjehjlF%2BgWM7Gb3%2BEdJzfnUgPCUIvvhJFT0PxFHy4d68li4GYZlQsvDEKI%2BjLKlo5AWt%2BeX4%2BhKI9Yj0lmpJNgV3vuHiYA0nq7bqX4900I%2B1lTCtriHzl%2Bzttgxjr0Bqs72LYE%2BOLQ2Ta3WLVlXsgDwJP1OBmPDhNazix%2BO1VZglgzkZ8GOxX%2FE8g%2Bz60sbAYEaKECvtERmJ5%2FOEegB6%2BskGzjegoFUyRSCH2WttiQdLeIqUAY%2F%2BArzGeavS7z0REMAso5vAm%2BdL7dGeRTX9UPbtnqs%2BejhzHOAMzytPgoFwSrdFQzosq4RC%2Bz6Vlz6kfWaq0BibYx34Db0qpaftQXfXQVz0wkZjhVXKf1l%2BjtxYZM%2FxSojKQM1mQ0%2Bo6Bi2D4A8pEXFIbtW3oeiwL5Cbdj9QHRreuL8czQV3j7pT5vT9Oc4nw6QlDvCTPmiRb7TufzP5aIlxKDeSLj9Ub5hDtilCnEBr443DuF1IqR3PUtJcwDhKgWBbvLECoqkkpdvgtmFs8WA64EajbZX7l7g8rggw2DQSLc3JCtaq2%2B8MLSY0dIGOqUB%2FWq1IM4KDNeLRTsZ7pENz5WeKU4mmnmLwalrMXzROWxpN3kpcoQfrro1aXGjB4xODATp%2FJg%2BjvjlfJkYeW0TKXN9n3SYq9xYa6yJhCy15vdljhwzb2u9tNH6gIHdKp8ujMgAdJc7QP%2FN8vXPLNC1sPm%2BAqXS%2F4aL4llyV6xljifRsIRuFba6Z3JIk1Zdx3MQRYKgGc3rc6OziNNktTzHrS039JQQ&X-Amz-Signature=23f57a1a610ad7f4006247973510663c6d854115748d65bf24e959743725b797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJRTTOOW%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T024720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDc23RBXzOydDDXEN5%2B0Fq5JI%2B%2BjM32fqdVv%2F972Gl2iAiEAiMtsOFxRERdu44mfgIY8vBiVi6JR9JLRkn77SeQDvJUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnzJmNbl%2BK%2F8MqbjCrcAyGQ3gs%2FYuE0hKsxj5lImOa0uhFQXheDlWc7UQGL7ysoSzFfVnpuk5xNq7ycq4ABp8KIaxki03y0J%2BHu0ru4FjehjlF%2BgWM7Gb3%2BEdJzfnUgPCUIvvhJFT0PxFHy4d68li4GYZlQsvDEKI%2BjLKlo5AWt%2BeX4%2BhKI9Yj0lmpJNgV3vuHiYA0nq7bqX4900I%2B1lTCtriHzl%2Bzttgxjr0Bqs72LYE%2BOLQ2Ta3WLVlXsgDwJP1OBmPDhNazix%2BO1VZglgzkZ8GOxX%2FE8g%2Bz60sbAYEaKECvtERmJ5%2FOEegB6%2BskGzjegoFUyRSCH2WttiQdLeIqUAY%2F%2BArzGeavS7z0REMAso5vAm%2BdL7dGeRTX9UPbtnqs%2BejhzHOAMzytPgoFwSrdFQzosq4RC%2Bz6Vlz6kfWaq0BibYx34Db0qpaftQXfXQVz0wkZjhVXKf1l%2BjtxYZM%2FxSojKQM1mQ0%2Bo6Bi2D4A8pEXFIbtW3oeiwL5Cbdj9QHRreuL8czQV3j7pT5vT9Oc4nw6QlDvCTPmiRb7TufzP5aIlxKDeSLj9Ub5hDtilCnEBr443DuF1IqR3PUtJcwDhKgWBbvLECoqkkpdvgtmFs8WA64EajbZX7l7g8rggw2DQSLc3JCtaq2%2B8MLSY0dIGOqUB%2FWq1IM4KDNeLRTsZ7pENz5WeKU4mmnmLwalrMXzROWxpN3kpcoQfrro1aXGjB4xODATp%2FJg%2BjvjlfJkYeW0TKXN9n3SYq9xYa6yJhCy15vdljhwzb2u9tNH6gIHdKp8ujMgAdJc7QP%2FN8vXPLNC1sPm%2BAqXS%2F4aL4llyV6xljifRsIRuFba6Z3JIk1Zdx3MQRYKgGc3rc6OziNNktTzHrS039JQQ&X-Amz-Signature=a62493f21aa01827975326953dbd23aaab42d2b86df5896488b244c0aec247ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### DDL


    ```sql
    -- user_id : int (pk)
    -- user_name : VARCHAR(20) NOT NULL, | 이름
    -- user_profile :  | 유저 이미지
    -- email : VARCHAR(20) NOT NULL, | 이메일
    -- nick_name : VARCHAR(20) NOT NULL, | 닉네임
    -- password : VARCHAR(20) NOT NULL, | 패스워드
    -- created_at : DATETOME NOT NULL  | 생성 일시
    -- is_active :  BOOL, | 유저 활성화 여부
     
    CREATE TABLE users (
      user_id INT PRIMARY KEY AUTO_INCREMENT,
      user_name VARCHAR(20) NOT NULL,
      user_profile VARCHAR(255),
      email VARCHAR(20) NOT NULL,
      nick_name VARCHAR(20) NOT NULL UNIQUE,
      password VARCHAR(20) NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      is_active BOOLEAN NOT NULL DEFAULT TRUE
    );
    
    
    -- artists(아티스트)
    
    -- artist_id : int (PK)
    -- artist_name : VARCHAR(20) NOT NULL, | 아티스트 이름
    -- artist_company : VARCHAR(20), | 소속사
    -- artist_profile : VARCHAR(255), | 프로필 이미지
    -- artist_debut_date : DATETIME, | 데뷔일
    -- created_at : DATETIME | 등록 일시
    
    
    CREATE TABLE artists (
      artist_id INT PRIMARY KEY AUTO_INCREMENT,
      artist_name VARCHAR(20) NOT NULL,
      artist_company VARCHAR(20),
      artist_profile VARCHAR(255),
      artist_debut_date DATETIME NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
    -- follow_id : int (PK)
    -- user_id : int NOT NULL | 유저 아이디 (FK)
    -- artist_id :  아티스트 아이디(FK)
    -- followed_at DATETIME | 팔로우 생성 일시 
    
    
    CREATE TABLE follows (
      follow_id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      artist_id INT NOT NULL,
      followed_at DATETIME NOT NULL,
      -- 외래 키
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE, -- 유저 탈퇴시 유저의 팔로우 기록 삭제
      FOREIGN KEY (artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE -- 아티스트 삭제 시 아티스트를 팔로우한 모든 기록 삭제
    );
    
    
    
    
    -- 투표 테이블
    -- vote_id : int (PK)
    -- artist_id : int (FK)
    -- user_id : int (FK)
    -- vote_count : INT | 투표 수
    -- support_credit : int | 후원 크레딧
    -- vote_at : DATETIME | 투표 일시
    
    CREATE TABLE votes (
      vote_id INT PRIMARY KEY AUTO_INCREMENT,
      artist_id INT NOT NULL,
      user_id INT NOT NULL,
      vote_count INT NOT NULL,
      vote_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
      -- 외래 키
      FOREIGN KEY (artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
    
    -- credit_id : int (PK)
    -- user_id : int NOT NULL | 유저 아이디 (FK)
    -- credit_current :  INT | credit 갯수
    -- credit_type : VARCHAR |  거래타입(사용/충전/환불)
    -- credit_at : datetime |  크레딧 거래 일시
     
    CREATE TABLE credits (
      credit_id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      credit_current INT NOT NULL,
      credit_type ENUM('charge', 'use', 'refund') NOT NULL,
      credit_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );
    
    
    -- project_id : int (PK)
    -- artist_id : int | 아티스트 ID (FK)
    -- artist_type : boolean | 
    -- project_title : VARCHAR | 조공 타이틀
    -- project_location_name : VARCHAR | 조공 위치
    -- start_date : DATETIME  | 시작일
    -- end_date : DATETIME | 종료일
    -- created_at : DATETIME | 생성 일시 
    -- target_credit : int | 목표 크레딧 
    -- current_credit : int | 현재 크레딧
    -- project_type :  VARCHAR | 조공 타입(광고,생일,)
    
    
    CREATE TABLE projects (
      project_id INT PRIMARY KEY AUTO_INCREMENT,
      artist_id INT NOT NULL,
      artist_type BOOLEAN NOT NULL,
      project_title VARCHAR(20) NOT NULL,
      project_location_name VARCHAR(20) NOT NULL,
      start_date DATETIME NOT NULL,
      end_date DATETIME NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      target_credit INT NOT NULL,
      current_credit INT NOT NULL,
      project_type VARCHAR(20) NOT NULL,
    
      FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
    );
    
    
    -- support_id : int (PK)
    -- project_id : int (FK)
    -- user_id : int (FK)
    -- created_at : DATETIME | 생성 일시 
    -- support_credit : int | 후원 크레딧
    
    
    CREATE TABLE supports (
      support_id INT PRIMARY KEY AUTO_INCREMENT,
      project_id INT NOT NULL,
      user_id INT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      support_credit INT NOT NULL,
    
      FOREIGN KEY (project_id) REFERENCES projects(project_id),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
    ```


### ERD


ERD를 통해 전체적인 데이터 흐름을 시각화 각 엔티티 간의 관계가 명확하게 표현되어 있으며, 외래키 참조가 올바르게 설정되어 있음을 확인할 수 있다.


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQIIPWI%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T024719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDH53mkpY91oMmSxxX0cGDhRjp8byFYBfQWrHKFGzC%2FiQIgWK5lux%2BMlzwrHS88qfJsRucKo4GKl%2Bd9TVt2pcfpswYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfCrrUnz5YCAj%2F8SircA%2FMDYhoh3vYg71qxrk3HNYy5dh7TY281pmd%2FeK8HM06t4RhmIZ2YSWYBy%2BgL5IhNfgWpXh7a%2FZ62kbh2BW0v44GsHwxWYT0ekby6Q%2BsMUsY2H8OdsWNFMjg6DFAICN4jZE6NGGfJ5caF5%2FiHbG662vmZs8gyoFog1e%2Fm%2BPMfVdOAbf85RiEL56V7z7q59K4uKcaF18xgqG06721rnOQ2LsBoxoFvsjCoMiLEeEMIq%2Be91aHD9o8wqxN7Pe9k7ad6BY15R%2FDM5MGL7x3wIzYcTQJY61rfvyZGc0LNpqDXtoFxIWIViV%2Fm7Av1A%2Bc5lowtENTTrSO2fcKnGkD8XILi3jV6DmKGz%2Fe6%2FtVqeucNxi33q24%2Bs%2F6At8h680eQ67nv2%2BMKi29N8CBowmZQjhlHSvCMwStpuD4dyuMB1rbsUgMICVHefEmPpR%2BsuAIMqTQSVCPD82G7dnrpINWLRRDRHXr6HarKqCEKhGBnu4E7Xw%2F6Q4nycFNoPmaVmJrusWQkX5HwsXwBCZnJFdCoByr%2FqT%2BWOzStOwFllkhgoy%2FYxFpsRCmmmhuHjax3%2BDIsYA1yP04OWsktUHzzpaVfI2eVRVw9dnPCwrs2NPM4WeFo2%2FCNMiMsNeS%2B32lrM8bXMImY0dIGOqUBDbGmqreiU7wPwktQDlIo7jbWG4N4JVlX%2B%2F7YYNVI9fDHLNwkPZWojpGSgntP8YAeBpAnG%2FKV2bCCeesEXUniMtinOnlvUEnWBQbCS26GAUYyiJyzOy09IRcZ3a3DdAmjFPt1QPJnOQd7jeYE80RC98KijVuB7HQaN%2FwdFj9ExyJyuAqGHfI3EjZTZLAnCZ00XV%2Bdn%2BVaqVpjaJNqkV4q0qYoGd%2FR&X-Amz-Signature=4057ba46d9b74e1bc0517c2dd898b9ceb4c298b936ae4e10d5c05339ad202a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

