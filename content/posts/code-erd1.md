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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMO6XVPY%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T010835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2FvOzQVgkI5q8J74s7hsNyixclMT5KBWf1s%2FhHVQ0YAiEA0jdYHZHNpiunEeDej35q7IXIquFsi5oOkzeMC%2BFCbG0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGHZXdDH77BLPeqQ9yrcAw8oHdlfq8ZOXDDa7w15N8Y1oO5wYZgZCNry7Qm1sHpUHypmqjQDYy8vaHtWBCEi%2FqSDbSK1SztE26%2F79Tapk0UcgbQO1Dct6c49%2BijuGlEKP5k60x5E9oogzJvNQ%2FSyRxX3ggg%2Bw27Q8btDcK5%2B%2BIUcjHX11jYzblGsdj4JSHRt8UyVRsRFFVL%2B1kw%2FCkWRpLh5vivFoVFoPxf0Lwsee6c6%2FDQQCD6O28szdmMd0Dx7eS6zIKFN%2FUWyj4mPfJVVIPOHaeZwiuql4opToYuZcmd9UTRUbV75cPhE0pfr%2BEGVF1dSt6%2FYuv6r%2FzU4L40%2BWT5wz0TfVFgLWAgizQCBnqoZ9O6gYWHm%2BjVoWhxtN60gPCnhgBXDB9iBRbK2ap1M72Tg80E8vxANojz6ocXPvTfR%2BpdiiZRsbdE0YByjARMCDTQ2IHcZMBbnX4bHObAyz21P1O%2Bw7nmdSGFtIrre2wUiTew6e8EZ%2FOF4l6lYBXTiM%2FVfEx2g%2BO59nV0heLX7GrJbWp%2FO%2BaV6YKhqQJ0UmfowAFG%2BAzYT0qN6Ct7xRmjVceT7g9WDxXvm%2FbVniNIKbaGWbEbjGfQMdTh0XatMqGhbwMlKqqB9YkkbYuxKPOX01CGHycuToqtGU050MOjh9soGOqUBEkG5rJZQ1ha1VB11GFcSA1sIzCZGu59%2FWLAqHglrn8HzAk5nH9ys1qaW2PWoJRV2IqMLYJMh8u%2BnLTmpxL6fLtD7eW9EVP95g%2BMsQsE6FdmPx2OnvCYJISq8cFd2eBuHndzou0fijbBBbZnJ5LJ%2FtZ%2Br3%2FoKtYlfMgHvZx%2FfNFHSuX4RvUh6byMYu0QA824BeDoHMeTPiqY3fPm5UCJwVdJGWQi8&X-Amz-Signature=a94bd602e4911e1fa19136df03c9441f8dc886c933b64b24cd2bbee657ded91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUTJNOY%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T010838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN%2FS9xqc%2BxvjlMHPo7Ui2UQDXAYc3eL%2F1%2BF1Gnnq20IwIhAKBfFVXl%2BjYPrUHAxmBVnc5XLiHLsDQ9pI9qZ5zPSk%2FTKv8DCGoQABoMNjM3NDIzMTgzODA1Igw8hvQ15xWPofy05qIq3AMmKUkqVDGBVLr0RVIc3yyOyR3u7%2Bud8KdFEktJ7XuAB6gSccs9ittYMjwfOWUpsMJu3hSsw1Kp96SnMk3bV%2Bi8iUo0sq%2BPGprNVZul0EerGJh2iB0%2Bf6UiXLUPTvrUiNTwbETCfLy4MHvK9tCVUFdEnsY1KigqkxwyTDDvEi3AEkLH%2FOS1pMCgK77OQ21kJkzS70dd7FVALEbjw53Omfno9iZtXX0Y3lZIlXm3ydSDV6%2B%2FWDZ7yqmmHNjLz%2FNUUjBcvBfnwudHKJJuL%2B%2FA%2FF9%2FBBLoZPTIIjiDoXzIynYQQw8IjLOBwoeK%2BqXKAxVJ0j%2FLBhksGlDccQ2WeDdhqWdc7rpU1MbdcCGp1C4nHA50yZP6O76ovNhQGsPYUbH%2BHxUE0C7bzKKYr8db1qOAcz6ZlyApGuKdccfvsYORLCQvvLZJIOO1k%2Fe1DGjoBtyk2AF0JUR8vkM2dgGWH7EfZSXWqACBhPZoFJODtwT0v5Y%2BHhDnDeip2wiqQGd2KOTmT5vtK0BG%2BRWKjMJ4r0Qu6wdM%2Fd1%2BYVL%2BqIq%2F3w9W9GPpSQoKw6EZ%2BGexJnVcdn3L9alRsoZXPyaefdAh2D06KFUKppg54RG1w2A0Oy2sZOcMt308VuF6zUyfSPOt5DC94vbKBjqkAQBxOnMtg2ekTQdsyCJkOv04ttQkswfgXuSuUfsWz25u%2F3Lx4fjbTBXKVHxMMqlwlIyO8PvwTYBKbQMDGioRID6VCwiiBLWQQUZ6Nma8avbMrAW06Q%2BB1pgEHQkaC3PbQNzRVlvuwXWAovukh9mtrfDggriOuQ7SEckKEQ5xaOLuQMfxBxGtKT2umG4MpluZXwOUf0Dm34GaO%2FrLbEaF8i%2F7%2FRWQ&X-Amz-Signature=1617e5e573dc21e4a9cdc94689363cc6b41c969bb8edaca5e167e4ede12ff836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUTJNOY%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T010838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN%2FS9xqc%2BxvjlMHPo7Ui2UQDXAYc3eL%2F1%2BF1Gnnq20IwIhAKBfFVXl%2BjYPrUHAxmBVnc5XLiHLsDQ9pI9qZ5zPSk%2FTKv8DCGoQABoMNjM3NDIzMTgzODA1Igw8hvQ15xWPofy05qIq3AMmKUkqVDGBVLr0RVIc3yyOyR3u7%2Bud8KdFEktJ7XuAB6gSccs9ittYMjwfOWUpsMJu3hSsw1Kp96SnMk3bV%2Bi8iUo0sq%2BPGprNVZul0EerGJh2iB0%2Bf6UiXLUPTvrUiNTwbETCfLy4MHvK9tCVUFdEnsY1KigqkxwyTDDvEi3AEkLH%2FOS1pMCgK77OQ21kJkzS70dd7FVALEbjw53Omfno9iZtXX0Y3lZIlXm3ydSDV6%2B%2FWDZ7yqmmHNjLz%2FNUUjBcvBfnwudHKJJuL%2B%2FA%2FF9%2FBBLoZPTIIjiDoXzIynYQQw8IjLOBwoeK%2BqXKAxVJ0j%2FLBhksGlDccQ2WeDdhqWdc7rpU1MbdcCGp1C4nHA50yZP6O76ovNhQGsPYUbH%2BHxUE0C7bzKKYr8db1qOAcz6ZlyApGuKdccfvsYORLCQvvLZJIOO1k%2Fe1DGjoBtyk2AF0JUR8vkM2dgGWH7EfZSXWqACBhPZoFJODtwT0v5Y%2BHhDnDeip2wiqQGd2KOTmT5vtK0BG%2BRWKjMJ4r0Qu6wdM%2Fd1%2BYVL%2BqIq%2F3w9W9GPpSQoKw6EZ%2BGexJnVcdn3L9alRsoZXPyaefdAh2D06KFUKppg54RG1w2A0Oy2sZOcMt308VuF6zUyfSPOt5DC94vbKBjqkAQBxOnMtg2ekTQdsyCJkOv04ttQkswfgXuSuUfsWz25u%2F3Lx4fjbTBXKVHxMMqlwlIyO8PvwTYBKbQMDGioRID6VCwiiBLWQQUZ6Nma8avbMrAW06Q%2BB1pgEHQkaC3PbQNzRVlvuwXWAovukh9mtrfDggriOuQ7SEckKEQ5xaOLuQMfxBxGtKT2umG4MpluZXwOUf0Dm34GaO%2FrLbEaF8i%2F7%2FRWQ&X-Amz-Signature=5e716d2b6dc0dc89944e921af30dd46b241882dbdc4e7e7566277e8e018fb2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUTJNOY%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T010838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN%2FS9xqc%2BxvjlMHPo7Ui2UQDXAYc3eL%2F1%2BF1Gnnq20IwIhAKBfFVXl%2BjYPrUHAxmBVnc5XLiHLsDQ9pI9qZ5zPSk%2FTKv8DCGoQABoMNjM3NDIzMTgzODA1Igw8hvQ15xWPofy05qIq3AMmKUkqVDGBVLr0RVIc3yyOyR3u7%2Bud8KdFEktJ7XuAB6gSccs9ittYMjwfOWUpsMJu3hSsw1Kp96SnMk3bV%2Bi8iUo0sq%2BPGprNVZul0EerGJh2iB0%2Bf6UiXLUPTvrUiNTwbETCfLy4MHvK9tCVUFdEnsY1KigqkxwyTDDvEi3AEkLH%2FOS1pMCgK77OQ21kJkzS70dd7FVALEbjw53Omfno9iZtXX0Y3lZIlXm3ydSDV6%2B%2FWDZ7yqmmHNjLz%2FNUUjBcvBfnwudHKJJuL%2B%2FA%2FF9%2FBBLoZPTIIjiDoXzIynYQQw8IjLOBwoeK%2BqXKAxVJ0j%2FLBhksGlDccQ2WeDdhqWdc7rpU1MbdcCGp1C4nHA50yZP6O76ovNhQGsPYUbH%2BHxUE0C7bzKKYr8db1qOAcz6ZlyApGuKdccfvsYORLCQvvLZJIOO1k%2Fe1DGjoBtyk2AF0JUR8vkM2dgGWH7EfZSXWqACBhPZoFJODtwT0v5Y%2BHhDnDeip2wiqQGd2KOTmT5vtK0BG%2BRWKjMJ4r0Qu6wdM%2Fd1%2BYVL%2BqIq%2F3w9W9GPpSQoKw6EZ%2BGexJnVcdn3L9alRsoZXPyaefdAh2D06KFUKppg54RG1w2A0Oy2sZOcMt308VuF6zUyfSPOt5DC94vbKBjqkAQBxOnMtg2ekTQdsyCJkOv04ttQkswfgXuSuUfsWz25u%2F3Lx4fjbTBXKVHxMMqlwlIyO8PvwTYBKbQMDGioRID6VCwiiBLWQQUZ6Nma8avbMrAW06Q%2BB1pgEHQkaC3PbQNzRVlvuwXWAovukh9mtrfDggriOuQ7SEckKEQ5xaOLuQMfxBxGtKT2umG4MpluZXwOUf0Dm34GaO%2FrLbEaF8i%2F7%2FRWQ&X-Amz-Signature=0006c4dc2c4a8267e390cd7c2c0613dfc239c15f464733c1af10767d86afc6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUTJNOY%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T010838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN%2FS9xqc%2BxvjlMHPo7Ui2UQDXAYc3eL%2F1%2BF1Gnnq20IwIhAKBfFVXl%2BjYPrUHAxmBVnc5XLiHLsDQ9pI9qZ5zPSk%2FTKv8DCGoQABoMNjM3NDIzMTgzODA1Igw8hvQ15xWPofy05qIq3AMmKUkqVDGBVLr0RVIc3yyOyR3u7%2Bud8KdFEktJ7XuAB6gSccs9ittYMjwfOWUpsMJu3hSsw1Kp96SnMk3bV%2Bi8iUo0sq%2BPGprNVZul0EerGJh2iB0%2Bf6UiXLUPTvrUiNTwbETCfLy4MHvK9tCVUFdEnsY1KigqkxwyTDDvEi3AEkLH%2FOS1pMCgK77OQ21kJkzS70dd7FVALEbjw53Omfno9iZtXX0Y3lZIlXm3ydSDV6%2B%2FWDZ7yqmmHNjLz%2FNUUjBcvBfnwudHKJJuL%2B%2FA%2FF9%2FBBLoZPTIIjiDoXzIynYQQw8IjLOBwoeK%2BqXKAxVJ0j%2FLBhksGlDccQ2WeDdhqWdc7rpU1MbdcCGp1C4nHA50yZP6O76ovNhQGsPYUbH%2BHxUE0C7bzKKYr8db1qOAcz6ZlyApGuKdccfvsYORLCQvvLZJIOO1k%2Fe1DGjoBtyk2AF0JUR8vkM2dgGWH7EfZSXWqACBhPZoFJODtwT0v5Y%2BHhDnDeip2wiqQGd2KOTmT5vtK0BG%2BRWKjMJ4r0Qu6wdM%2Fd1%2BYVL%2BqIq%2F3w9W9GPpSQoKw6EZ%2BGexJnVcdn3L9alRsoZXPyaefdAh2D06KFUKppg54RG1w2A0Oy2sZOcMt308VuF6zUyfSPOt5DC94vbKBjqkAQBxOnMtg2ekTQdsyCJkOv04ttQkswfgXuSuUfsWz25u%2F3Lx4fjbTBXKVHxMMqlwlIyO8PvwTYBKbQMDGioRID6VCwiiBLWQQUZ6Nma8avbMrAW06Q%2BB1pgEHQkaC3PbQNzRVlvuwXWAovukh9mtrfDggriOuQ7SEckKEQ5xaOLuQMfxBxGtKT2umG4MpluZXwOUf0Dm34GaO%2FrLbEaF8i%2F7%2FRWQ&X-Amz-Signature=429a00c2044ce74a99d65fb0e915b7cc3a80c0e52bddcfdd14e06428e8d6e204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUTJNOY%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T010838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN%2FS9xqc%2BxvjlMHPo7Ui2UQDXAYc3eL%2F1%2BF1Gnnq20IwIhAKBfFVXl%2BjYPrUHAxmBVnc5XLiHLsDQ9pI9qZ5zPSk%2FTKv8DCGoQABoMNjM3NDIzMTgzODA1Igw8hvQ15xWPofy05qIq3AMmKUkqVDGBVLr0RVIc3yyOyR3u7%2Bud8KdFEktJ7XuAB6gSccs9ittYMjwfOWUpsMJu3hSsw1Kp96SnMk3bV%2Bi8iUo0sq%2BPGprNVZul0EerGJh2iB0%2Bf6UiXLUPTvrUiNTwbETCfLy4MHvK9tCVUFdEnsY1KigqkxwyTDDvEi3AEkLH%2FOS1pMCgK77OQ21kJkzS70dd7FVALEbjw53Omfno9iZtXX0Y3lZIlXm3ydSDV6%2B%2FWDZ7yqmmHNjLz%2FNUUjBcvBfnwudHKJJuL%2B%2FA%2FF9%2FBBLoZPTIIjiDoXzIynYQQw8IjLOBwoeK%2BqXKAxVJ0j%2FLBhksGlDccQ2WeDdhqWdc7rpU1MbdcCGp1C4nHA50yZP6O76ovNhQGsPYUbH%2BHxUE0C7bzKKYr8db1qOAcz6ZlyApGuKdccfvsYORLCQvvLZJIOO1k%2Fe1DGjoBtyk2AF0JUR8vkM2dgGWH7EfZSXWqACBhPZoFJODtwT0v5Y%2BHhDnDeip2wiqQGd2KOTmT5vtK0BG%2BRWKjMJ4r0Qu6wdM%2Fd1%2BYVL%2BqIq%2F3w9W9GPpSQoKw6EZ%2BGexJnVcdn3L9alRsoZXPyaefdAh2D06KFUKppg54RG1w2A0Oy2sZOcMt308VuF6zUyfSPOt5DC94vbKBjqkAQBxOnMtg2ekTQdsyCJkOv04ttQkswfgXuSuUfsWz25u%2F3Lx4fjbTBXKVHxMMqlwlIyO8PvwTYBKbQMDGioRID6VCwiiBLWQQUZ6Nma8avbMrAW06Q%2BB1pgEHQkaC3PbQNzRVlvuwXWAovukh9mtrfDggriOuQ7SEckKEQ5xaOLuQMfxBxGtKT2umG4MpluZXwOUf0Dm34GaO%2FrLbEaF8i%2F7%2FRWQ&X-Amz-Signature=02edcc8dea5bbfd72f353a3d84fc41e1b9ce4b0654dac0682a4c844ee22650f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMO6XVPY%2F20260107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260107T010835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2FvOzQVgkI5q8J74s7hsNyixclMT5KBWf1s%2FhHVQ0YAiEA0jdYHZHNpiunEeDej35q7IXIquFsi5oOkzeMC%2BFCbG0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGHZXdDH77BLPeqQ9yrcAw8oHdlfq8ZOXDDa7w15N8Y1oO5wYZgZCNry7Qm1sHpUHypmqjQDYy8vaHtWBCEi%2FqSDbSK1SztE26%2F79Tapk0UcgbQO1Dct6c49%2BijuGlEKP5k60x5E9oogzJvNQ%2FSyRxX3ggg%2Bw27Q8btDcK5%2B%2BIUcjHX11jYzblGsdj4JSHRt8UyVRsRFFVL%2B1kw%2FCkWRpLh5vivFoVFoPxf0Lwsee6c6%2FDQQCD6O28szdmMd0Dx7eS6zIKFN%2FUWyj4mPfJVVIPOHaeZwiuql4opToYuZcmd9UTRUbV75cPhE0pfr%2BEGVF1dSt6%2FYuv6r%2FzU4L40%2BWT5wz0TfVFgLWAgizQCBnqoZ9O6gYWHm%2BjVoWhxtN60gPCnhgBXDB9iBRbK2ap1M72Tg80E8vxANojz6ocXPvTfR%2BpdiiZRsbdE0YByjARMCDTQ2IHcZMBbnX4bHObAyz21P1O%2Bw7nmdSGFtIrre2wUiTew6e8EZ%2FOF4l6lYBXTiM%2FVfEx2g%2BO59nV0heLX7GrJbWp%2FO%2BaV6YKhqQJ0UmfowAFG%2BAzYT0qN6Ct7xRmjVceT7g9WDxXvm%2FbVniNIKbaGWbEbjGfQMdTh0XatMqGhbwMlKqqB9YkkbYuxKPOX01CGHycuToqtGU050MOjh9soGOqUBEkG5rJZQ1ha1VB11GFcSA1sIzCZGu59%2FWLAqHglrn8HzAk5nH9ys1qaW2PWoJRV2IqMLYJMh8u%2BnLTmpxL6fLtD7eW9EVP95g%2BMsQsE6FdmPx2OnvCYJISq8cFd2eBuHndzou0fijbBBbZnJ5LJ%2FtZ%2Br3%2FoKtYlfMgHvZx%2FfNFHSuX4RvUh6byMYu0QA824BeDoHMeTPiqY3fPm5UCJwVdJGWQi8&X-Amz-Signature=252a8b275d39a84c97e632dbdd7088d1449c76065f89703393450e5a302a711b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

