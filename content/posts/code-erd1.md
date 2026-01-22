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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LQQHDF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEXAv13alH%2B8zESYn981r1mnOiw6WGOJuru6Qyc6l%2FZgAiAkxWYGVkzvunFscgD4A3ywsaFRV6baOt2zN8tibEGRDyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhgVO%2FaNVv4To9rLKtwDXJgYUvopkrle%2FBbo1BqEWmkd8Go2WHCP4AFX6c2A0MJUvKfT414swzwLcl1POkUZxg8iWadk0AaKX2MYgskTlTDnbN3uHlSdBIigVvFMNFxGTzyGgEPhZ59rG%2BFRPCgCcwiQRjQp1%2FeG9nHXybT%2FmFbIgnEyd1Rthwp%2FbEDuGSJrFoPLLF%2FyW3CgSlsLGz9dgRBRqDX0y2ibKIAb7RpvWPKOPPvVrfEbMdtdevcATG%2FcBFNwAkMMlSGSzEMgjsDqsTXUQiowRNcJCU2I4yprZUqOcnLvs6MhcqQ80CogiSkq3Lf5rVvS6gupKqSixJPcRTrlguzHRDn%2FaWkv5sKoXw1X2tnuglJqNaQQ2tPH86pxlRvZvwRi0kNa3kKQ%2FpBB2HZKUfC75P2K9dKxx8hfiyDtoCJowjBdmzYW87gUS5Zar%2BI1dgyxKKwWrPgz7kITiwY%2FH%2Fmu2cwPsWYiIxGEuq0VwQEofI0iPE3OjTQJJPQqd66SBdIOlvg3GR6BvSygi%2B8F2G3JGkbv1MEJttJi%2BeqayXzgAb50osrseYtXcKspPh829tm%2BSdK8K8y87krjcX7Wlma9n5ak7aRl5urAx3FrksvsjX5L7i4yrzpTzYrOzttTQ3r6bnyYFHswh%2BfFywY6pgGRKnL7L5efzH2NeslJJ3kEalxFPkpvsNEbw795oOF5EqVMQa4mtnXqSlAB2a4Av3RN%2BlhL%2BjGIjmhiRpKxLp3FTxDGunhyoDisDVQvxkeX6eibeHXUXbXe%2BN9UCW%2BM2vWbst2a9CIE4dVy2sfB7Nif1gPWV6JrXz2j8L01aO3nkStySRKoXsvoByG%2F00lpkK18IAxl%2BH8KzXhErFnT07hVth%2FlPO05&X-Amz-Signature=8e3eecfb6fbc562b07a2484a9da5d1d8c95281e7a898dc99850f385af9df2f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZA4EIUZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAnOhB0OY9HStbQMCXXaXGrVDiKQG12i7IoJrubTgE21AiEAzTATw8DGXnKv4IDvKEwUXMPpihZBxVg1XbMbM%2FWx1cAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPo2j8VC%2Fp5oaS2qircA7eUaDCU2h%2BK2Qc8%2F2qTX2Iorlddb4a1cJFOmUezsuYpeDtCuSOYL7uzxheE2y1pEP29I0P8gY97N7EXn2fcva4%2BiClE%2BUHnBYEyiWZEZNjiXVQEMT0efRsXe9Ur%2Fr3iKCaJQNNCeYDRhBpRwvkWozeMiDO%2B98xVKFfAaEGZ6sdZRAJWb%2F97jKxmKbViOIzM%2BsrU4KvAXrZ%2FMU1QWR3DAZWEqSwPeRy1vVN6%2BF0HcEc3Me%2BUcNeZDVn%2FQg0027XSyCbQGDUh4bObJkLvpuxrM6MiMmTPjYYeicSM2kmdb63aXwP8Rj79%2BVIxawWrWAQWsWJSUBs8DeSJDFYurTllASsI0Z8pYK%2F19YuJIOgFv6KBhR%2FF8dfuiVUuy%2FpojBRWSWh%2B1q%2B495PAw5%2FV%2BeIaEHeZWmQfJT1%2FFTLNylWP0bPv3iCYUQggCm3JZXjQ7JQXz%2FOBrmJgNUwpuLCS9T9eYwB3hsCI%2Fe7FkObunvFdkCMBfjM7gZUaZVXzb3qsupN5GMBVrKbhEMEoGa0VtVhTOUu%2B8SwLG36x80ntMcukAU1N5Ha7Y%2FjPNoGD%2BCQbVYsANGULk2h4tHKz49slfpYQuOMA86PidjhFkXhB2cAvu7HCeigDlPqPylpeqozsMLLlxcsGOqUBY15uTYXEvUd8qJhk4%2B5SAr5UunZHu%2BBNwGITXC11r0YaHb7CF%2BrOTFNo0H2tBxmoFMAqeMxvx1IxPsNiHHvFLfM7KE6x2sgvPX6NUsXkJCU4cS8w2za6FUtIOCrMyhi%2BTDE83IppT3rhC6uG57iWiumGqbFMq2zjMQ56bLmWy0dFXNzWfKd0XM1%2BsCketS4p18u%2FMTm6XCwQkS2ZPnJIGK5xeai0&X-Amz-Signature=93e9056f756d56b54a5360c847816b7a26df9384f14259631c3bffd0abad3814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZA4EIUZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAnOhB0OY9HStbQMCXXaXGrVDiKQG12i7IoJrubTgE21AiEAzTATw8DGXnKv4IDvKEwUXMPpihZBxVg1XbMbM%2FWx1cAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPo2j8VC%2Fp5oaS2qircA7eUaDCU2h%2BK2Qc8%2F2qTX2Iorlddb4a1cJFOmUezsuYpeDtCuSOYL7uzxheE2y1pEP29I0P8gY97N7EXn2fcva4%2BiClE%2BUHnBYEyiWZEZNjiXVQEMT0efRsXe9Ur%2Fr3iKCaJQNNCeYDRhBpRwvkWozeMiDO%2B98xVKFfAaEGZ6sdZRAJWb%2F97jKxmKbViOIzM%2BsrU4KvAXrZ%2FMU1QWR3DAZWEqSwPeRy1vVN6%2BF0HcEc3Me%2BUcNeZDVn%2FQg0027XSyCbQGDUh4bObJkLvpuxrM6MiMmTPjYYeicSM2kmdb63aXwP8Rj79%2BVIxawWrWAQWsWJSUBs8DeSJDFYurTllASsI0Z8pYK%2F19YuJIOgFv6KBhR%2FF8dfuiVUuy%2FpojBRWSWh%2B1q%2B495PAw5%2FV%2BeIaEHeZWmQfJT1%2FFTLNylWP0bPv3iCYUQggCm3JZXjQ7JQXz%2FOBrmJgNUwpuLCS9T9eYwB3hsCI%2Fe7FkObunvFdkCMBfjM7gZUaZVXzb3qsupN5GMBVrKbhEMEoGa0VtVhTOUu%2B8SwLG36x80ntMcukAU1N5Ha7Y%2FjPNoGD%2BCQbVYsANGULk2h4tHKz49slfpYQuOMA86PidjhFkXhB2cAvu7HCeigDlPqPylpeqozsMLLlxcsGOqUBY15uTYXEvUd8qJhk4%2B5SAr5UunZHu%2BBNwGITXC11r0YaHb7CF%2BrOTFNo0H2tBxmoFMAqeMxvx1IxPsNiHHvFLfM7KE6x2sgvPX6NUsXkJCU4cS8w2za6FUtIOCrMyhi%2BTDE83IppT3rhC6uG57iWiumGqbFMq2zjMQ56bLmWy0dFXNzWfKd0XM1%2BsCketS4p18u%2FMTm6XCwQkS2ZPnJIGK5xeai0&X-Amz-Signature=1d548732a9ab87286b355ae7d902de52cf00ccdc98ce4b93d12ce6ab0ee763ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZA4EIUZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAnOhB0OY9HStbQMCXXaXGrVDiKQG12i7IoJrubTgE21AiEAzTATw8DGXnKv4IDvKEwUXMPpihZBxVg1XbMbM%2FWx1cAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPo2j8VC%2Fp5oaS2qircA7eUaDCU2h%2BK2Qc8%2F2qTX2Iorlddb4a1cJFOmUezsuYpeDtCuSOYL7uzxheE2y1pEP29I0P8gY97N7EXn2fcva4%2BiClE%2BUHnBYEyiWZEZNjiXVQEMT0efRsXe9Ur%2Fr3iKCaJQNNCeYDRhBpRwvkWozeMiDO%2B98xVKFfAaEGZ6sdZRAJWb%2F97jKxmKbViOIzM%2BsrU4KvAXrZ%2FMU1QWR3DAZWEqSwPeRy1vVN6%2BF0HcEc3Me%2BUcNeZDVn%2FQg0027XSyCbQGDUh4bObJkLvpuxrM6MiMmTPjYYeicSM2kmdb63aXwP8Rj79%2BVIxawWrWAQWsWJSUBs8DeSJDFYurTllASsI0Z8pYK%2F19YuJIOgFv6KBhR%2FF8dfuiVUuy%2FpojBRWSWh%2B1q%2B495PAw5%2FV%2BeIaEHeZWmQfJT1%2FFTLNylWP0bPv3iCYUQggCm3JZXjQ7JQXz%2FOBrmJgNUwpuLCS9T9eYwB3hsCI%2Fe7FkObunvFdkCMBfjM7gZUaZVXzb3qsupN5GMBVrKbhEMEoGa0VtVhTOUu%2B8SwLG36x80ntMcukAU1N5Ha7Y%2FjPNoGD%2BCQbVYsANGULk2h4tHKz49slfpYQuOMA86PidjhFkXhB2cAvu7HCeigDlPqPylpeqozsMLLlxcsGOqUBY15uTYXEvUd8qJhk4%2B5SAr5UunZHu%2BBNwGITXC11r0YaHb7CF%2BrOTFNo0H2tBxmoFMAqeMxvx1IxPsNiHHvFLfM7KE6x2sgvPX6NUsXkJCU4cS8w2za6FUtIOCrMyhi%2BTDE83IppT3rhC6uG57iWiumGqbFMq2zjMQ56bLmWy0dFXNzWfKd0XM1%2BsCketS4p18u%2FMTm6XCwQkS2ZPnJIGK5xeai0&X-Amz-Signature=c31eff3bd74062a58078c84a520346ec6e421647f4f0a9c1fbe4ae0881ca1bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZA4EIUZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAnOhB0OY9HStbQMCXXaXGrVDiKQG12i7IoJrubTgE21AiEAzTATw8DGXnKv4IDvKEwUXMPpihZBxVg1XbMbM%2FWx1cAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPo2j8VC%2Fp5oaS2qircA7eUaDCU2h%2BK2Qc8%2F2qTX2Iorlddb4a1cJFOmUezsuYpeDtCuSOYL7uzxheE2y1pEP29I0P8gY97N7EXn2fcva4%2BiClE%2BUHnBYEyiWZEZNjiXVQEMT0efRsXe9Ur%2Fr3iKCaJQNNCeYDRhBpRwvkWozeMiDO%2B98xVKFfAaEGZ6sdZRAJWb%2F97jKxmKbViOIzM%2BsrU4KvAXrZ%2FMU1QWR3DAZWEqSwPeRy1vVN6%2BF0HcEc3Me%2BUcNeZDVn%2FQg0027XSyCbQGDUh4bObJkLvpuxrM6MiMmTPjYYeicSM2kmdb63aXwP8Rj79%2BVIxawWrWAQWsWJSUBs8DeSJDFYurTllASsI0Z8pYK%2F19YuJIOgFv6KBhR%2FF8dfuiVUuy%2FpojBRWSWh%2B1q%2B495PAw5%2FV%2BeIaEHeZWmQfJT1%2FFTLNylWP0bPv3iCYUQggCm3JZXjQ7JQXz%2FOBrmJgNUwpuLCS9T9eYwB3hsCI%2Fe7FkObunvFdkCMBfjM7gZUaZVXzb3qsupN5GMBVrKbhEMEoGa0VtVhTOUu%2B8SwLG36x80ntMcukAU1N5Ha7Y%2FjPNoGD%2BCQbVYsANGULk2h4tHKz49slfpYQuOMA86PidjhFkXhB2cAvu7HCeigDlPqPylpeqozsMLLlxcsGOqUBY15uTYXEvUd8qJhk4%2B5SAr5UunZHu%2BBNwGITXC11r0YaHb7CF%2BrOTFNo0H2tBxmoFMAqeMxvx1IxPsNiHHvFLfM7KE6x2sgvPX6NUsXkJCU4cS8w2za6FUtIOCrMyhi%2BTDE83IppT3rhC6uG57iWiumGqbFMq2zjMQ56bLmWy0dFXNzWfKd0XM1%2BsCketS4p18u%2FMTm6XCwQkS2ZPnJIGK5xeai0&X-Amz-Signature=a401b97e26ed87e02681c4d0e77da5dd3b9c1f7a0a723332a665d5dd7f14d430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZA4EIUZ%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAnOhB0OY9HStbQMCXXaXGrVDiKQG12i7IoJrubTgE21AiEAzTATw8DGXnKv4IDvKEwUXMPpihZBxVg1XbMbM%2FWx1cAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPo2j8VC%2Fp5oaS2qircA7eUaDCU2h%2BK2Qc8%2F2qTX2Iorlddb4a1cJFOmUezsuYpeDtCuSOYL7uzxheE2y1pEP29I0P8gY97N7EXn2fcva4%2BiClE%2BUHnBYEyiWZEZNjiXVQEMT0efRsXe9Ur%2Fr3iKCaJQNNCeYDRhBpRwvkWozeMiDO%2B98xVKFfAaEGZ6sdZRAJWb%2F97jKxmKbViOIzM%2BsrU4KvAXrZ%2FMU1QWR3DAZWEqSwPeRy1vVN6%2BF0HcEc3Me%2BUcNeZDVn%2FQg0027XSyCbQGDUh4bObJkLvpuxrM6MiMmTPjYYeicSM2kmdb63aXwP8Rj79%2BVIxawWrWAQWsWJSUBs8DeSJDFYurTllASsI0Z8pYK%2F19YuJIOgFv6KBhR%2FF8dfuiVUuy%2FpojBRWSWh%2B1q%2B495PAw5%2FV%2BeIaEHeZWmQfJT1%2FFTLNylWP0bPv3iCYUQggCm3JZXjQ7JQXz%2FOBrmJgNUwpuLCS9T9eYwB3hsCI%2Fe7FkObunvFdkCMBfjM7gZUaZVXzb3qsupN5GMBVrKbhEMEoGa0VtVhTOUu%2B8SwLG36x80ntMcukAU1N5Ha7Y%2FjPNoGD%2BCQbVYsANGULk2h4tHKz49slfpYQuOMA86PidjhFkXhB2cAvu7HCeigDlPqPylpeqozsMLLlxcsGOqUBY15uTYXEvUd8qJhk4%2B5SAr5UunZHu%2BBNwGITXC11r0YaHb7CF%2BrOTFNo0H2tBxmoFMAqeMxvx1IxPsNiHHvFLfM7KE6x2sgvPX6NUsXkJCU4cS8w2za6FUtIOCrMyhi%2BTDE83IppT3rhC6uG57iWiumGqbFMq2zjMQ56bLmWy0dFXNzWfKd0XM1%2BsCketS4p18u%2FMTm6XCwQkS2ZPnJIGK5xeai0&X-Amz-Signature=c61c9130a31753b345e26d686da6c61e6c382ec3729483461f54f694595b4b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LQQHDF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEXAv13alH%2B8zESYn981r1mnOiw6WGOJuru6Qyc6l%2FZgAiAkxWYGVkzvunFscgD4A3ywsaFRV6baOt2zN8tibEGRDyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhgVO%2FaNVv4To9rLKtwDXJgYUvopkrle%2FBbo1BqEWmkd8Go2WHCP4AFX6c2A0MJUvKfT414swzwLcl1POkUZxg8iWadk0AaKX2MYgskTlTDnbN3uHlSdBIigVvFMNFxGTzyGgEPhZ59rG%2BFRPCgCcwiQRjQp1%2FeG9nHXybT%2FmFbIgnEyd1Rthwp%2FbEDuGSJrFoPLLF%2FyW3CgSlsLGz9dgRBRqDX0y2ibKIAb7RpvWPKOPPvVrfEbMdtdevcATG%2FcBFNwAkMMlSGSzEMgjsDqsTXUQiowRNcJCU2I4yprZUqOcnLvs6MhcqQ80CogiSkq3Lf5rVvS6gupKqSixJPcRTrlguzHRDn%2FaWkv5sKoXw1X2tnuglJqNaQQ2tPH86pxlRvZvwRi0kNa3kKQ%2FpBB2HZKUfC75P2K9dKxx8hfiyDtoCJowjBdmzYW87gUS5Zar%2BI1dgyxKKwWrPgz7kITiwY%2FH%2Fmu2cwPsWYiIxGEuq0VwQEofI0iPE3OjTQJJPQqd66SBdIOlvg3GR6BvSygi%2B8F2G3JGkbv1MEJttJi%2BeqayXzgAb50osrseYtXcKspPh829tm%2BSdK8K8y87krjcX7Wlma9n5ak7aRl5urAx3FrksvsjX5L7i4yrzpTzYrOzttTQ3r6bnyYFHswh%2BfFywY6pgGRKnL7L5efzH2NeslJJ3kEalxFPkpvsNEbw795oOF5EqVMQa4mtnXqSlAB2a4Av3RN%2BlhL%2BjGIjmhiRpKxLp3FTxDGunhyoDisDVQvxkeX6eibeHXUXbXe%2BN9UCW%2BM2vWbst2a9CIE4dVy2sfB7Nif1gPWV6JrXz2j8L01aO3nkStySRKoXsvoByG%2F00lpkK18IAxl%2BH8KzXhErFnT07hVth%2FlPO05&X-Amz-Signature=74b8cac69c7487ecdbe6d6763b2c3a510ce335151c792f20f46d0ff4a3533b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

