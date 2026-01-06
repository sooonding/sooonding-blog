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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EN5J7GB%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAy8skE0ViDNyNX9sSlxhihvKK47M2kd9Nriz7YigA9AiBhPLkMHdFk0h93TVhZ3Pu2KFhv%2FtLdrmXKYLM0pecaNSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMbda8lMQOduIisKIkKtwDA0zum5t%2BnZ4B6cl8sk%2FHfnHBEB3%2BQ9ZEq3IXTUpcPLS6HArYCHSmhE2Ehijk0j5V2f63U7MAigZro4RhIKE8zmTPZkWUS1eM%2FttpYWbhjx64ikCzMjomaUsistZ52ZLVN%2BRTyLmulCZuP22vdHeuFug9rWULlBAwcyXmImRtKxAxtKSQQjM0O6qSiqLcWcGCN0Y8IYfLDE6Ve7TKpPWaASClQ4Nh6YcIfJj29dpnvzB55oeSWa735aLGvdw6pHVIkaRSM4pF6%2FuGD8EcSciD5YylJMgUDmQ7uHcCw0y%2BtzJpHE0rz08hr0u0JnkuH%2BNgyxybCWC60G81xpDwTCX5UvnkYUTOgGhQyj6jbKUY8HVgnnSVNxhEt2hLequZSUvoqz5WerUWjXEN2c%2Fje7KGHkg12vGHuuFBKTY2h3%2FIft5gk%2BXxVz1oO6vAY%2FF4hSGf%2B97hy%2BscZmlcSma%2BxoLa%2BcpqDpIhdFA71gTOxHl%2FmAYPwIedtkK0iX3dKI51eB4dCFmhNViXiNem7xo7Y5x7eY6GvXChP8ys9xtsaHnwTpq0dBlg0bGGw2jxkM68WwdxZg8pVoRCe0NP94btSdY9L%2BEPaUbbCivcCuHOWnUb4AZmuN1Nxm%2FGsKc6Ku8w87bxygY6pgHBnuB95%2F%2Bw3zdh3wBy%2FMBscBQG0RyfCvNn%2FLTNoQPyosSl%2BfI%2Bj0IWFgeHkU5I4Wkgo6F%2FaGlj0L3k%2F8P3Av9g0o0P68Aoa03hknedL8aVv2zjFswVaORHMIUnEpMG3x32eVA9gqdxfhUUIHSYtFaz5f%2F%2B7vMqUGctPntkeWMlM0lvYYbD%2FtnBEVwRNprmZBM4B1ZlejcOOX%2BOnMMZxVOy0TLR%2F%2B8J&X-Amz-Signature=a6d3dc753f25b70575b16907619e382ec2739523a3e923a6eb2e3022ade4c5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTJ67IU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNcc43y24BwUiOIgX%2FcCx5NiyEbuEyOa6nYR0Ynf51TQIgVhZfhpfZp8neds7yY6gZHqg4qyXAhLptCoZUmP2gS7Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI1tSjaotN6NqXKWsCrcA1Xod8941SgwhuFP0lhNjsqfAzXoEnNyBZEccej2O9ABX7XehWiu%2Bqb7SQb7WaETM4Jhyo7koK744QJQOq4TRQ3vEtIUHW397GnAwwSCYtg%2BcDqQ%2FYwUvJEwRUaNiNcRTMmVcybJZZtwGo%2B0vKF%2FwT6XzP1qlgzxY3i7s8BTA16V7fYIk8VE0ez2fuEXtUFw3NS7dJNu%2F0PM9kKrl4eGgKmnjWVEFhRuBhHeChe76Ri%2BdjajH7VOks08uWTI4bKIwpFBUa%2BGWjXVmH93BHJ5aEZhBuZvA%2BMcxXfsCbHV2QojMeazhIsbh%2FWIZpXEmOSaH%2FS%2BL4Vzvtpbn9nuquPIUMXu3BMThMaimhzpCYQ5MRIBaXTfc8Bt2BzYs1RQGjfdg1Ccy%2BCQzNDqGZ3T0yVKMgz7hoaAiexF%2Fl1hNiRp%2BROBfDhSI0EDbAaH7QyYKcxuivvsNnSQDWlzjbRtPQVIWcXkFlRUyvRDIrlDf78bAM1VepHo1hEdSaqrkrtoAmHRlxI56DUQCSEree4WIOt%2FQ2929bYthVqMn09u%2B27AO7Jj%2BYe%2FvTqfuLZMRF89S2j2TSyZJ2uhrrD95df8x7013%2BgkM%2Fgu8Oz7LUTvr6TgNylsaI8AnzOhmhEO9DpZMJ628coGOqUBr5BusxhJAx8e6OcQauKGIC17auIQdiQONB7p4Z9TFtV71WOsnvK30uh9RhqR3GgfbJYrl3SJHuM%2BcsyNGvs1vkZRGbZUz2lDe9m1vnJnfPxl5EL%2F7CENmmYsbyIxM9pV1RL57GOBPU0plge%2FTQnAGxISZrrqckFntDaABiI4DhN80%2BvDOFA7M%2Fh5WpHcbYtCBCB9sPOaKas%2F1lcG5cgBRqIfSc2F&X-Amz-Signature=0ed8cac748d4824a799a581d1b33a35d387ed4587b8e6a622f8cdca843a8fe32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTJ67IU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNcc43y24BwUiOIgX%2FcCx5NiyEbuEyOa6nYR0Ynf51TQIgVhZfhpfZp8neds7yY6gZHqg4qyXAhLptCoZUmP2gS7Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI1tSjaotN6NqXKWsCrcA1Xod8941SgwhuFP0lhNjsqfAzXoEnNyBZEccej2O9ABX7XehWiu%2Bqb7SQb7WaETM4Jhyo7koK744QJQOq4TRQ3vEtIUHW397GnAwwSCYtg%2BcDqQ%2FYwUvJEwRUaNiNcRTMmVcybJZZtwGo%2B0vKF%2FwT6XzP1qlgzxY3i7s8BTA16V7fYIk8VE0ez2fuEXtUFw3NS7dJNu%2F0PM9kKrl4eGgKmnjWVEFhRuBhHeChe76Ri%2BdjajH7VOks08uWTI4bKIwpFBUa%2BGWjXVmH93BHJ5aEZhBuZvA%2BMcxXfsCbHV2QojMeazhIsbh%2FWIZpXEmOSaH%2FS%2BL4Vzvtpbn9nuquPIUMXu3BMThMaimhzpCYQ5MRIBaXTfc8Bt2BzYs1RQGjfdg1Ccy%2BCQzNDqGZ3T0yVKMgz7hoaAiexF%2Fl1hNiRp%2BROBfDhSI0EDbAaH7QyYKcxuivvsNnSQDWlzjbRtPQVIWcXkFlRUyvRDIrlDf78bAM1VepHo1hEdSaqrkrtoAmHRlxI56DUQCSEree4WIOt%2FQ2929bYthVqMn09u%2B27AO7Jj%2BYe%2FvTqfuLZMRF89S2j2TSyZJ2uhrrD95df8x7013%2BgkM%2Fgu8Oz7LUTvr6TgNylsaI8AnzOhmhEO9DpZMJ628coGOqUBr5BusxhJAx8e6OcQauKGIC17auIQdiQONB7p4Z9TFtV71WOsnvK30uh9RhqR3GgfbJYrl3SJHuM%2BcsyNGvs1vkZRGbZUz2lDe9m1vnJnfPxl5EL%2F7CENmmYsbyIxM9pV1RL57GOBPU0plge%2FTQnAGxISZrrqckFntDaABiI4DhN80%2BvDOFA7M%2Fh5WpHcbYtCBCB9sPOaKas%2F1lcG5cgBRqIfSc2F&X-Amz-Signature=0e554fbeced275a7bf889fd008115e0bb36a363416ed24b0481fa358b5c9cce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTJ67IU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNcc43y24BwUiOIgX%2FcCx5NiyEbuEyOa6nYR0Ynf51TQIgVhZfhpfZp8neds7yY6gZHqg4qyXAhLptCoZUmP2gS7Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI1tSjaotN6NqXKWsCrcA1Xod8941SgwhuFP0lhNjsqfAzXoEnNyBZEccej2O9ABX7XehWiu%2Bqb7SQb7WaETM4Jhyo7koK744QJQOq4TRQ3vEtIUHW397GnAwwSCYtg%2BcDqQ%2FYwUvJEwRUaNiNcRTMmVcybJZZtwGo%2B0vKF%2FwT6XzP1qlgzxY3i7s8BTA16V7fYIk8VE0ez2fuEXtUFw3NS7dJNu%2F0PM9kKrl4eGgKmnjWVEFhRuBhHeChe76Ri%2BdjajH7VOks08uWTI4bKIwpFBUa%2BGWjXVmH93BHJ5aEZhBuZvA%2BMcxXfsCbHV2QojMeazhIsbh%2FWIZpXEmOSaH%2FS%2BL4Vzvtpbn9nuquPIUMXu3BMThMaimhzpCYQ5MRIBaXTfc8Bt2BzYs1RQGjfdg1Ccy%2BCQzNDqGZ3T0yVKMgz7hoaAiexF%2Fl1hNiRp%2BROBfDhSI0EDbAaH7QyYKcxuivvsNnSQDWlzjbRtPQVIWcXkFlRUyvRDIrlDf78bAM1VepHo1hEdSaqrkrtoAmHRlxI56DUQCSEree4WIOt%2FQ2929bYthVqMn09u%2B27AO7Jj%2BYe%2FvTqfuLZMRF89S2j2TSyZJ2uhrrD95df8x7013%2BgkM%2Fgu8Oz7LUTvr6TgNylsaI8AnzOhmhEO9DpZMJ628coGOqUBr5BusxhJAx8e6OcQauKGIC17auIQdiQONB7p4Z9TFtV71WOsnvK30uh9RhqR3GgfbJYrl3SJHuM%2BcsyNGvs1vkZRGbZUz2lDe9m1vnJnfPxl5EL%2F7CENmmYsbyIxM9pV1RL57GOBPU0plge%2FTQnAGxISZrrqckFntDaABiI4DhN80%2BvDOFA7M%2Fh5WpHcbYtCBCB9sPOaKas%2F1lcG5cgBRqIfSc2F&X-Amz-Signature=aaee1f3bec7a22907569df6919af697ab1268d96172d563a0f7d912205dcd245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTJ67IU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNcc43y24BwUiOIgX%2FcCx5NiyEbuEyOa6nYR0Ynf51TQIgVhZfhpfZp8neds7yY6gZHqg4qyXAhLptCoZUmP2gS7Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI1tSjaotN6NqXKWsCrcA1Xod8941SgwhuFP0lhNjsqfAzXoEnNyBZEccej2O9ABX7XehWiu%2Bqb7SQb7WaETM4Jhyo7koK744QJQOq4TRQ3vEtIUHW397GnAwwSCYtg%2BcDqQ%2FYwUvJEwRUaNiNcRTMmVcybJZZtwGo%2B0vKF%2FwT6XzP1qlgzxY3i7s8BTA16V7fYIk8VE0ez2fuEXtUFw3NS7dJNu%2F0PM9kKrl4eGgKmnjWVEFhRuBhHeChe76Ri%2BdjajH7VOks08uWTI4bKIwpFBUa%2BGWjXVmH93BHJ5aEZhBuZvA%2BMcxXfsCbHV2QojMeazhIsbh%2FWIZpXEmOSaH%2FS%2BL4Vzvtpbn9nuquPIUMXu3BMThMaimhzpCYQ5MRIBaXTfc8Bt2BzYs1RQGjfdg1Ccy%2BCQzNDqGZ3T0yVKMgz7hoaAiexF%2Fl1hNiRp%2BROBfDhSI0EDbAaH7QyYKcxuivvsNnSQDWlzjbRtPQVIWcXkFlRUyvRDIrlDf78bAM1VepHo1hEdSaqrkrtoAmHRlxI56DUQCSEree4WIOt%2FQ2929bYthVqMn09u%2B27AO7Jj%2BYe%2FvTqfuLZMRF89S2j2TSyZJ2uhrrD95df8x7013%2BgkM%2Fgu8Oz7LUTvr6TgNylsaI8AnzOhmhEO9DpZMJ628coGOqUBr5BusxhJAx8e6OcQauKGIC17auIQdiQONB7p4Z9TFtV71WOsnvK30uh9RhqR3GgfbJYrl3SJHuM%2BcsyNGvs1vkZRGbZUz2lDe9m1vnJnfPxl5EL%2F7CENmmYsbyIxM9pV1RL57GOBPU0plge%2FTQnAGxISZrrqckFntDaABiI4DhN80%2BvDOFA7M%2Fh5WpHcbYtCBCB9sPOaKas%2F1lcG5cgBRqIfSc2F&X-Amz-Signature=1ef23eab7bebb8f47fc602babd680e6fa8347c41ce55f0cb70b285a3e56bf5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROTJ67IU%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNcc43y24BwUiOIgX%2FcCx5NiyEbuEyOa6nYR0Ynf51TQIgVhZfhpfZp8neds7yY6gZHqg4qyXAhLptCoZUmP2gS7Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDI1tSjaotN6NqXKWsCrcA1Xod8941SgwhuFP0lhNjsqfAzXoEnNyBZEccej2O9ABX7XehWiu%2Bqb7SQb7WaETM4Jhyo7koK744QJQOq4TRQ3vEtIUHW397GnAwwSCYtg%2BcDqQ%2FYwUvJEwRUaNiNcRTMmVcybJZZtwGo%2B0vKF%2FwT6XzP1qlgzxY3i7s8BTA16V7fYIk8VE0ez2fuEXtUFw3NS7dJNu%2F0PM9kKrl4eGgKmnjWVEFhRuBhHeChe76Ri%2BdjajH7VOks08uWTI4bKIwpFBUa%2BGWjXVmH93BHJ5aEZhBuZvA%2BMcxXfsCbHV2QojMeazhIsbh%2FWIZpXEmOSaH%2FS%2BL4Vzvtpbn9nuquPIUMXu3BMThMaimhzpCYQ5MRIBaXTfc8Bt2BzYs1RQGjfdg1Ccy%2BCQzNDqGZ3T0yVKMgz7hoaAiexF%2Fl1hNiRp%2BROBfDhSI0EDbAaH7QyYKcxuivvsNnSQDWlzjbRtPQVIWcXkFlRUyvRDIrlDf78bAM1VepHo1hEdSaqrkrtoAmHRlxI56DUQCSEree4WIOt%2FQ2929bYthVqMn09u%2B27AO7Jj%2BYe%2FvTqfuLZMRF89S2j2TSyZJ2uhrrD95df8x7013%2BgkM%2Fgu8Oz7LUTvr6TgNylsaI8AnzOhmhEO9DpZMJ628coGOqUBr5BusxhJAx8e6OcQauKGIC17auIQdiQONB7p4Z9TFtV71WOsnvK30uh9RhqR3GgfbJYrl3SJHuM%2BcsyNGvs1vkZRGbZUz2lDe9m1vnJnfPxl5EL%2F7CENmmYsbyIxM9pV1RL57GOBPU0plge%2FTQnAGxISZrrqckFntDaABiI4DhN80%2BvDOFA7M%2Fh5WpHcbYtCBCB9sPOaKas%2F1lcG5cgBRqIfSc2F&X-Amz-Signature=60983a29290a211cf0c30381043a87eb9f6f79c74f73b3e68c358d103a88da9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EN5J7GB%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAy8skE0ViDNyNX9sSlxhihvKK47M2kd9Nriz7YigA9AiBhPLkMHdFk0h93TVhZ3Pu2KFhv%2FtLdrmXKYLM0pecaNSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMbda8lMQOduIisKIkKtwDA0zum5t%2BnZ4B6cl8sk%2FHfnHBEB3%2BQ9ZEq3IXTUpcPLS6HArYCHSmhE2Ehijk0j5V2f63U7MAigZro4RhIKE8zmTPZkWUS1eM%2FttpYWbhjx64ikCzMjomaUsistZ52ZLVN%2BRTyLmulCZuP22vdHeuFug9rWULlBAwcyXmImRtKxAxtKSQQjM0O6qSiqLcWcGCN0Y8IYfLDE6Ve7TKpPWaASClQ4Nh6YcIfJj29dpnvzB55oeSWa735aLGvdw6pHVIkaRSM4pF6%2FuGD8EcSciD5YylJMgUDmQ7uHcCw0y%2BtzJpHE0rz08hr0u0JnkuH%2BNgyxybCWC60G81xpDwTCX5UvnkYUTOgGhQyj6jbKUY8HVgnnSVNxhEt2hLequZSUvoqz5WerUWjXEN2c%2Fje7KGHkg12vGHuuFBKTY2h3%2FIft5gk%2BXxVz1oO6vAY%2FF4hSGf%2B97hy%2BscZmlcSma%2BxoLa%2BcpqDpIhdFA71gTOxHl%2FmAYPwIedtkK0iX3dKI51eB4dCFmhNViXiNem7xo7Y5x7eY6GvXChP8ys9xtsaHnwTpq0dBlg0bGGw2jxkM68WwdxZg8pVoRCe0NP94btSdY9L%2BEPaUbbCivcCuHOWnUb4AZmuN1Nxm%2FGsKc6Ku8w87bxygY6pgHBnuB95%2F%2Bw3zdh3wBy%2FMBscBQG0RyfCvNn%2FLTNoQPyosSl%2BfI%2Bj0IWFgeHkU5I4Wkgo6F%2FaGlj0L3k%2F8P3Av9g0o0P68Aoa03hknedL8aVv2zjFswVaORHMIUnEpMG3x32eVA9gqdxfhUUIHSYtFaz5f%2F%2B7vMqUGctPntkeWMlM0lvYYbD%2FtnBEVwRNprmZBM4B1ZlejcOOX%2BOnMMZxVOy0TLR%2F%2B8J&X-Amz-Signature=16498b08efebab87bad660098cb843880dd70e49fc94bc28ab832eba28d7dbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

