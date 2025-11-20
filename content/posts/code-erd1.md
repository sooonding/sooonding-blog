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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54MWKU7%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T010116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCAF0AltitvxRHvQOHtL1rYR5agGyUR8bBN5R0%2FI94ztAIhAIn2tIM2zZGpzkYBbgxHwpDNPMCHZU5%2F191%2FKWVl1wfxKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7zE8Tv0y4jRfOHR8q3AMlktNE9QD8o2LmxHLfrdwRj4rM8z8HkerXRPADCifrnjRm1vH8SZ8C%2BSw7xSaVe9rBwM%2FfffwmGwQabcM7JJmrMrEq1JrAZgBOzMCVf4MjBaz%2BuB29f40XU6U75W0pBB5TGrnv%2Fcc784QR%2FRKxmGSK5CmwrK5LEP%2F9qw76ERtowTR3iRgiTOhEGIPIGbMmh8Tq3RbnppXrrCabaUQdjm6ZLWzjuX3gvdqO78B%2BYAbsGepp0F6tAxNb%2FdTp553xoh2AZMf99zsZ53R0GKFc6ZAOSaT9nXjEg4Usv8ArhosrKPmm74VqplrSpvD64EYaoj3fQpYxhqySRFnkPFFfuEUOoYsbu%2BzhtGtDX4o0trwnfXgeqcBssphCmNnnkYyEaySpW2CjgMx1exC%2FWPZaNbojc%2FXhi3nCoICFsR6T09qG1XwBl74agPdBOMBrhH5EORUb8RG1M3Qr8w8zKe%2FrJmBh%2FfGYjIMTctcPpVM4FtebDkZlVqOdyUvQnbtDDV6LZ35TH%2FfxkYThJO98bx%2BZU%2FpIx8OIuFT3VB9Fe5fMZ7PyhbUk48bu7kUpXWJ%2BGYv2b6tnsbhDxsbZ%2FfqVreuxdspPSlc2%2BnjmSWBxMs8wujkZGv53u6x3BqiC9OV4sjDRt%2FnIBjqkAaN7fOyy3INBMmqCvX6WrZV0otiEat9jrXXW1XfKKZTn8H7uq4kDOlc90fYBpDnOeLPKBNLii%2Bi%2F%2FoH9jxjkwHmohfzpmIWBk3%2B%2Ffx6M3zM3zMidzQsfdqczQf2PzxCUCYPYpcyYbpWeX9BfR0Ty2rkYK2LeMbGW8hVgSCezIhuokj2Ap0BsAAjADnHqbnBGqgy1iDss8MXLMyNaLZaljqM9xpo9&X-Amz-Signature=7c2e60406eee3e78f207d0116b374d3adb2f1c5fc4503fe5652441bb5583696c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQ5RIC%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T010116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCpP5G8p66AA47Uh6SA57E4zy9Z5scgl%2FmH4HC9NE%2BG9AIhAP3Pc7BTrd5Q3WDXNw6BsStSrShKcMBBy2DJuy49%2BovOKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2A8v4KkX6qwStp7Uq3ANO%2BuZDkVg3esSLz4RzulbthOqfihAjGaMBzOoC543srKomrSKVLzwhYc5gyk56kT4y9xFmcDG6OyJNc8F3tFIwnYufJpbWJ0G5f6rfsR7VjbTSWPFZA%2FIfn8CpATOfhQafnpZ6SZsODDIBpWsAEb227rfQRTnBeT%2BzFbvV27hSIDXEwR4AcCHNIMCkUYEp%2FHLcKLhJQ2tQCwk8zkuE%2FmtqDSu6s1uglPsAMPaHJ2FRgStxie4fCDW4%2FIdgCXQKSBlELqF2nyHwj%2B4jHqE5tg6LV%2BOxw9SlGjo12RD%2Fcvr0L3e1rl4X8EP73m7HgP0pbxgz5dH9UOCuND9%2FAxe%2BdwvL7vhDOyRE1FE6bHwQLwPYdCgxFAKCn0jXaRl8VyeskENa4q2wYKZpuUdWDU9cRTq46tudsUOlj%2FhyX0GLh5KrOwArbP1u6gXTZyzxaJgo58DVg1VD5TrKwzvm1t8CjcyYG8DZqkOjwphsJv41RQpL9obbAL1MEhR7fEFfvT06xP8eIX5IVqGorerGLbJEfj83jPMBKwFClpH9u9gQjJuSSdkkevo04kSByuZqUrmwfD1XHLlUnY6tt2eaCjsoLTaivJQycQcsTCW28J05Rs3HMgRW%2BJVJ8rpGYgmLojCvt%2FnIBjqkAfHL0RjqGt54oBEaDZiFzTNia8vwtug0FK6nQCjDGNxIV4OLB0iRSkC8zhv9mjygNhUd87sWpdigg9Qo9VmI7CWLa8Etn2MARjb7HCV%2BZr88M2NZdCjmKnY2mKXt8sWVNmnnylE8t12gDpxYu4V1BE6afPYI4lPRbNIi4HJYVE2gkP3TxUXaJXgGFP4sbJL9vnc27t%2B%2BqiFfm1Mp0ZVXZdLv80Oh&X-Amz-Signature=858820e79ed08080a5ca7048a19b1d304486784d4e0cac8b00a82b9049451651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQ5RIC%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T010116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCpP5G8p66AA47Uh6SA57E4zy9Z5scgl%2FmH4HC9NE%2BG9AIhAP3Pc7BTrd5Q3WDXNw6BsStSrShKcMBBy2DJuy49%2BovOKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2A8v4KkX6qwStp7Uq3ANO%2BuZDkVg3esSLz4RzulbthOqfihAjGaMBzOoC543srKomrSKVLzwhYc5gyk56kT4y9xFmcDG6OyJNc8F3tFIwnYufJpbWJ0G5f6rfsR7VjbTSWPFZA%2FIfn8CpATOfhQafnpZ6SZsODDIBpWsAEb227rfQRTnBeT%2BzFbvV27hSIDXEwR4AcCHNIMCkUYEp%2FHLcKLhJQ2tQCwk8zkuE%2FmtqDSu6s1uglPsAMPaHJ2FRgStxie4fCDW4%2FIdgCXQKSBlELqF2nyHwj%2B4jHqE5tg6LV%2BOxw9SlGjo12RD%2Fcvr0L3e1rl4X8EP73m7HgP0pbxgz5dH9UOCuND9%2FAxe%2BdwvL7vhDOyRE1FE6bHwQLwPYdCgxFAKCn0jXaRl8VyeskENa4q2wYKZpuUdWDU9cRTq46tudsUOlj%2FhyX0GLh5KrOwArbP1u6gXTZyzxaJgo58DVg1VD5TrKwzvm1t8CjcyYG8DZqkOjwphsJv41RQpL9obbAL1MEhR7fEFfvT06xP8eIX5IVqGorerGLbJEfj83jPMBKwFClpH9u9gQjJuSSdkkevo04kSByuZqUrmwfD1XHLlUnY6tt2eaCjsoLTaivJQycQcsTCW28J05Rs3HMgRW%2BJVJ8rpGYgmLojCvt%2FnIBjqkAfHL0RjqGt54oBEaDZiFzTNia8vwtug0FK6nQCjDGNxIV4OLB0iRSkC8zhv9mjygNhUd87sWpdigg9Qo9VmI7CWLa8Etn2MARjb7HCV%2BZr88M2NZdCjmKnY2mKXt8sWVNmnnylE8t12gDpxYu4V1BE6afPYI4lPRbNIi4HJYVE2gkP3TxUXaJXgGFP4sbJL9vnc27t%2B%2BqiFfm1Mp0ZVXZdLv80Oh&X-Amz-Signature=3e163404bc59b5464cddc3e4957398530a0c84578110f8535aba7cfe65704ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQ5RIC%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T010116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCpP5G8p66AA47Uh6SA57E4zy9Z5scgl%2FmH4HC9NE%2BG9AIhAP3Pc7BTrd5Q3WDXNw6BsStSrShKcMBBy2DJuy49%2BovOKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2A8v4KkX6qwStp7Uq3ANO%2BuZDkVg3esSLz4RzulbthOqfihAjGaMBzOoC543srKomrSKVLzwhYc5gyk56kT4y9xFmcDG6OyJNc8F3tFIwnYufJpbWJ0G5f6rfsR7VjbTSWPFZA%2FIfn8CpATOfhQafnpZ6SZsODDIBpWsAEb227rfQRTnBeT%2BzFbvV27hSIDXEwR4AcCHNIMCkUYEp%2FHLcKLhJQ2tQCwk8zkuE%2FmtqDSu6s1uglPsAMPaHJ2FRgStxie4fCDW4%2FIdgCXQKSBlELqF2nyHwj%2B4jHqE5tg6LV%2BOxw9SlGjo12RD%2Fcvr0L3e1rl4X8EP73m7HgP0pbxgz5dH9UOCuND9%2FAxe%2BdwvL7vhDOyRE1FE6bHwQLwPYdCgxFAKCn0jXaRl8VyeskENa4q2wYKZpuUdWDU9cRTq46tudsUOlj%2FhyX0GLh5KrOwArbP1u6gXTZyzxaJgo58DVg1VD5TrKwzvm1t8CjcyYG8DZqkOjwphsJv41RQpL9obbAL1MEhR7fEFfvT06xP8eIX5IVqGorerGLbJEfj83jPMBKwFClpH9u9gQjJuSSdkkevo04kSByuZqUrmwfD1XHLlUnY6tt2eaCjsoLTaivJQycQcsTCW28J05Rs3HMgRW%2BJVJ8rpGYgmLojCvt%2FnIBjqkAfHL0RjqGt54oBEaDZiFzTNia8vwtug0FK6nQCjDGNxIV4OLB0iRSkC8zhv9mjygNhUd87sWpdigg9Qo9VmI7CWLa8Etn2MARjb7HCV%2BZr88M2NZdCjmKnY2mKXt8sWVNmnnylE8t12gDpxYu4V1BE6afPYI4lPRbNIi4HJYVE2gkP3TxUXaJXgGFP4sbJL9vnc27t%2B%2BqiFfm1Mp0ZVXZdLv80Oh&X-Amz-Signature=c449d1f4c13770a4a0ed23db5dadbc4b4ff3bc80e0773b14cee53e66902813fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQ5RIC%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T010116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCpP5G8p66AA47Uh6SA57E4zy9Z5scgl%2FmH4HC9NE%2BG9AIhAP3Pc7BTrd5Q3WDXNw6BsStSrShKcMBBy2DJuy49%2BovOKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2A8v4KkX6qwStp7Uq3ANO%2BuZDkVg3esSLz4RzulbthOqfihAjGaMBzOoC543srKomrSKVLzwhYc5gyk56kT4y9xFmcDG6OyJNc8F3tFIwnYufJpbWJ0G5f6rfsR7VjbTSWPFZA%2FIfn8CpATOfhQafnpZ6SZsODDIBpWsAEb227rfQRTnBeT%2BzFbvV27hSIDXEwR4AcCHNIMCkUYEp%2FHLcKLhJQ2tQCwk8zkuE%2FmtqDSu6s1uglPsAMPaHJ2FRgStxie4fCDW4%2FIdgCXQKSBlELqF2nyHwj%2B4jHqE5tg6LV%2BOxw9SlGjo12RD%2Fcvr0L3e1rl4X8EP73m7HgP0pbxgz5dH9UOCuND9%2FAxe%2BdwvL7vhDOyRE1FE6bHwQLwPYdCgxFAKCn0jXaRl8VyeskENa4q2wYKZpuUdWDU9cRTq46tudsUOlj%2FhyX0GLh5KrOwArbP1u6gXTZyzxaJgo58DVg1VD5TrKwzvm1t8CjcyYG8DZqkOjwphsJv41RQpL9obbAL1MEhR7fEFfvT06xP8eIX5IVqGorerGLbJEfj83jPMBKwFClpH9u9gQjJuSSdkkevo04kSByuZqUrmwfD1XHLlUnY6tt2eaCjsoLTaivJQycQcsTCW28J05Rs3HMgRW%2BJVJ8rpGYgmLojCvt%2FnIBjqkAfHL0RjqGt54oBEaDZiFzTNia8vwtug0FK6nQCjDGNxIV4OLB0iRSkC8zhv9mjygNhUd87sWpdigg9Qo9VmI7CWLa8Etn2MARjb7HCV%2BZr88M2NZdCjmKnY2mKXt8sWVNmnnylE8t12gDpxYu4V1BE6afPYI4lPRbNIi4HJYVE2gkP3TxUXaJXgGFP4sbJL9vnc27t%2B%2BqiFfm1Mp0ZVXZdLv80Oh&X-Amz-Signature=8fb16dedf236c8e944ffa58aa9521b5ea2f28549fa6fe15e4c00f3de98fae008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XQ5RIC%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T010116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCpP5G8p66AA47Uh6SA57E4zy9Z5scgl%2FmH4HC9NE%2BG9AIhAP3Pc7BTrd5Q3WDXNw6BsStSrShKcMBBy2DJuy49%2BovOKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2A8v4KkX6qwStp7Uq3ANO%2BuZDkVg3esSLz4RzulbthOqfihAjGaMBzOoC543srKomrSKVLzwhYc5gyk56kT4y9xFmcDG6OyJNc8F3tFIwnYufJpbWJ0G5f6rfsR7VjbTSWPFZA%2FIfn8CpATOfhQafnpZ6SZsODDIBpWsAEb227rfQRTnBeT%2BzFbvV27hSIDXEwR4AcCHNIMCkUYEp%2FHLcKLhJQ2tQCwk8zkuE%2FmtqDSu6s1uglPsAMPaHJ2FRgStxie4fCDW4%2FIdgCXQKSBlELqF2nyHwj%2B4jHqE5tg6LV%2BOxw9SlGjo12RD%2Fcvr0L3e1rl4X8EP73m7HgP0pbxgz5dH9UOCuND9%2FAxe%2BdwvL7vhDOyRE1FE6bHwQLwPYdCgxFAKCn0jXaRl8VyeskENa4q2wYKZpuUdWDU9cRTq46tudsUOlj%2FhyX0GLh5KrOwArbP1u6gXTZyzxaJgo58DVg1VD5TrKwzvm1t8CjcyYG8DZqkOjwphsJv41RQpL9obbAL1MEhR7fEFfvT06xP8eIX5IVqGorerGLbJEfj83jPMBKwFClpH9u9gQjJuSSdkkevo04kSByuZqUrmwfD1XHLlUnY6tt2eaCjsoLTaivJQycQcsTCW28J05Rs3HMgRW%2BJVJ8rpGYgmLojCvt%2FnIBjqkAfHL0RjqGt54oBEaDZiFzTNia8vwtug0FK6nQCjDGNxIV4OLB0iRSkC8zhv9mjygNhUd87sWpdigg9Qo9VmI7CWLa8Etn2MARjb7HCV%2BZr88M2NZdCjmKnY2mKXt8sWVNmnnylE8t12gDpxYu4V1BE6afPYI4lPRbNIi4HJYVE2gkP3TxUXaJXgGFP4sbJL9vnc27t%2B%2BqiFfm1Mp0ZVXZdLv80Oh&X-Amz-Signature=d4b6c506f5ff92345fd166d8985aac5159e2653b2629feb510ed3506f9a97ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54MWKU7%2F20251120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251120T010116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCAF0AltitvxRHvQOHtL1rYR5agGyUR8bBN5R0%2FI94ztAIhAIn2tIM2zZGpzkYBbgxHwpDNPMCHZU5%2F191%2FKWVl1wfxKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7zE8Tv0y4jRfOHR8q3AMlktNE9QD8o2LmxHLfrdwRj4rM8z8HkerXRPADCifrnjRm1vH8SZ8C%2BSw7xSaVe9rBwM%2FfffwmGwQabcM7JJmrMrEq1JrAZgBOzMCVf4MjBaz%2BuB29f40XU6U75W0pBB5TGrnv%2Fcc784QR%2FRKxmGSK5CmwrK5LEP%2F9qw76ERtowTR3iRgiTOhEGIPIGbMmh8Tq3RbnppXrrCabaUQdjm6ZLWzjuX3gvdqO78B%2BYAbsGepp0F6tAxNb%2FdTp553xoh2AZMf99zsZ53R0GKFc6ZAOSaT9nXjEg4Usv8ArhosrKPmm74VqplrSpvD64EYaoj3fQpYxhqySRFnkPFFfuEUOoYsbu%2BzhtGtDX4o0trwnfXgeqcBssphCmNnnkYyEaySpW2CjgMx1exC%2FWPZaNbojc%2FXhi3nCoICFsR6T09qG1XwBl74agPdBOMBrhH5EORUb8RG1M3Qr8w8zKe%2FrJmBh%2FfGYjIMTctcPpVM4FtebDkZlVqOdyUvQnbtDDV6LZ35TH%2FfxkYThJO98bx%2BZU%2FpIx8OIuFT3VB9Fe5fMZ7PyhbUk48bu7kUpXWJ%2BGYv2b6tnsbhDxsbZ%2FfqVreuxdspPSlc2%2BnjmSWBxMs8wujkZGv53u6x3BqiC9OV4sjDRt%2FnIBjqkAaN7fOyy3INBMmqCvX6WrZV0otiEat9jrXXW1XfKKZTn8H7uq4kDOlc90fYBpDnOeLPKBNLii%2Bi%2F%2FoH9jxjkwHmohfzpmIWBk3%2B%2Ffx6M3zM3zMidzQsfdqczQf2PzxCUCYPYpcyYbpWeX9BfR0Ty2rkYK2LeMbGW8hVgSCezIhuokj2Ap0BsAAjADnHqbnBGqgy1iDss8MXLMyNaLZaljqM9xpo9&X-Amz-Signature=909edbcfc04a688c78292a30b02c884cfdcb1ce06dcc11b29bf766a8bb7ef0fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

