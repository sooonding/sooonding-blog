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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTY672BH%2F20251029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251029T010335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD7hB1WozOC6y3LgJGhfEg95m%2BXWOZR%2BKtL4iPYPzwRTgIhANzbTW0MLj6Cb90MnViijGGiqbJ9WN87S%2B6fuUqVmNdgKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmr6TPJSCEDl3B4cq3APKaKm5FmN11BaDjRj4ENNvPeIuQJQoQL6Z3cyWzYB08AKXu9eT%2FIba2y4D9UmCiEDbbudD5QrzKQvv6v1zzMM4%2FGAvUgP%2BJVqhjA3qh3aAqH7608FwbEsPoIT2Lku%2Fga%2BO6mT4CDndyoJH7Zuog%2Bv8lOJpXCw4VmbcnXZXqgMsQg1o1THEYNkgzBBYJOxdGinX%2BECUqx2OQZt7DrJWhJyq1XTu%2BV%2BXSnA5z1NF1dtLUwNobYyP2dE8J31kphpdBw8f1EsEvhWSuKqUe9%2F3ZLexU7w9HJfMKK0DSm%2FcFX6aB8ddyX9voGxQqeTsv6t67AymuOxqZbsGqqpxbMdFHKjAQXSqMBgm6zkuLcs1HlVO4wKK75Tbea7ksyC4Rup04ykP%2BmG%2BfYjsnRTfeOhDVOrI8k9GP%2FVQp%2BNc8sI7v3a6%2F6CZrYThBUwSfFwCw4wM1IyCcWVR51yJBAlOt%2FOWTbHGTad1YdAGwRctsV1ysmZpCCDe6qYXbs%2BB%2FySj7O%2FFwj32Eecfilfxy8AH15QQGk907p4m7v2SQR3ccGK6ru%2B2ngcgXR%2BEXpaDoh8P5D%2FU7FH%2F8rtPdUAW3l%2FFNwbyFh%2FLHdfanYD%2FFJZ5LPFIyXZzy1iguukQX9P58NTY2DDGk4XIBjqkARcUOrRZ9km2zre0coDuQrfrhhOeCuYMO6ZcRWV31vizMmhA0ZOqSiS%2Bt44vvPCzBNHTGe%2F%2F9zs33ZyvKQ65YWptnuxsMuICFIfQ3xyHgYcb%2BvRWn%2FOFTPU264jMYVIS%2F9a4MEiL66KEdRARrOurmC5PLZTi%2FxIMWpfp%2FKXMbQkEbwR%2B%2FaoBv%2FVj3xKw3vnm5u%2Fhy4LcB%2B2zYL%2BrMzlDSWF%2FXyRh&X-Amz-Signature=5748c35a02c671030a404ba5c62c70d02777fa15f3663aa7a70010f62fdfdcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGPLZXN%2F20251029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251029T010337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCKY0TKymLi1cbguKyzloaWPtaDJ%2B7IzZ9M70qy0IVgbgIhAL2WV757gvvJ6XejUjy5DLbiTEmsw6p0d%2FaeDTjtvGHXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtCpIjcX1w%2FSq4ic4q3AP%2F3udGBb77kMeXFM1gjEFQmbqHJ%2BZPRHgXcjdw0Xg2QXNjJDttixUgnUfi6yqhPqQxUVuN8cV%2BpqCoK9K%2BaTX4RUlndA9MJkzoFqEdzkzvBub0XU55tRENm4nZMkjz9RotzgXAfbG81I0BxfxbW0eSwPts1FWAX0%2FCdUv05EJ1r1bk2s6s1%2F1wbsuIbUS7nxtuGKlEISaRXQ9HouHqQLB52QQiOhL672WJgSlBMjkaA8J1GBVfdJu5j%2Br4Q4UYa1WJnA9bOm5Ecfc1td06V14olBYMhOYthZKxu4Bx2f0zwSIMQc%2BdzIIjfirpktSdWGPt1Cjx4ntF7xvkAT5yztuLvdr4u0Jkjr%2BGKXJ8c06hzjx7HuzmFbU0osE0ngpJIokm%2F%2FmkwbiaXiOrl0u3nMb5hXjOQLcD1T5x92TjQkwRk2%2BBIbskxb3dVplLjdANSWVY6isfee6iqCyXgAI3rgRTCYKg2RC7oP0n%2BFvW7Nf53Fe4o2cJD7e58z6eUQL%2BpUlD%2FVRaTy0g%2F28pO0ZglX6IOw0RLiku34N%2B96vHHa6e1kEQH711Fdj6g7kfSiurixl%2B7tlp6Yviaez%2BafH9Gw9wFyVt6xQj21V%2BBTNmgkJpVvevrdTg7B4ZlhwuYDDMk4XIBjqkAW%2FK%2Byr7%2BrWal%2FxRv09J017dH1peYm41qbHqJQzfOfr0oZLpFZa0ZaX0LV1NwIg5%2Fs19RjGxz9X4GtH3euCcNRHKyD1ZUC4NJ6QY%2BbWintDWl%2FB3CDOarEwE5I0s127nJsQ945QtXYzmAtQylHyJB6ipbcQlUYx7QuTAK1dzU8Osy7ThuKV%2FnAysKhmc3wrmwcv3N%2B54D2V%2FlCKH8DImTZoMRMXG&X-Amz-Signature=96db3587b8d009207f87ed9f1e7dbdf99173ec0281c53613da1b34d458b21cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGPLZXN%2F20251029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251029T010337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCKY0TKymLi1cbguKyzloaWPtaDJ%2B7IzZ9M70qy0IVgbgIhAL2WV757gvvJ6XejUjy5DLbiTEmsw6p0d%2FaeDTjtvGHXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtCpIjcX1w%2FSq4ic4q3AP%2F3udGBb77kMeXFM1gjEFQmbqHJ%2BZPRHgXcjdw0Xg2QXNjJDttixUgnUfi6yqhPqQxUVuN8cV%2BpqCoK9K%2BaTX4RUlndA9MJkzoFqEdzkzvBub0XU55tRENm4nZMkjz9RotzgXAfbG81I0BxfxbW0eSwPts1FWAX0%2FCdUv05EJ1r1bk2s6s1%2F1wbsuIbUS7nxtuGKlEISaRXQ9HouHqQLB52QQiOhL672WJgSlBMjkaA8J1GBVfdJu5j%2Br4Q4UYa1WJnA9bOm5Ecfc1td06V14olBYMhOYthZKxu4Bx2f0zwSIMQc%2BdzIIjfirpktSdWGPt1Cjx4ntF7xvkAT5yztuLvdr4u0Jkjr%2BGKXJ8c06hzjx7HuzmFbU0osE0ngpJIokm%2F%2FmkwbiaXiOrl0u3nMb5hXjOQLcD1T5x92TjQkwRk2%2BBIbskxb3dVplLjdANSWVY6isfee6iqCyXgAI3rgRTCYKg2RC7oP0n%2BFvW7Nf53Fe4o2cJD7e58z6eUQL%2BpUlD%2FVRaTy0g%2F28pO0ZglX6IOw0RLiku34N%2B96vHHa6e1kEQH711Fdj6g7kfSiurixl%2B7tlp6Yviaez%2BafH9Gw9wFyVt6xQj21V%2BBTNmgkJpVvevrdTg7B4ZlhwuYDDMk4XIBjqkAW%2FK%2Byr7%2BrWal%2FxRv09J017dH1peYm41qbHqJQzfOfr0oZLpFZa0ZaX0LV1NwIg5%2Fs19RjGxz9X4GtH3euCcNRHKyD1ZUC4NJ6QY%2BbWintDWl%2FB3CDOarEwE5I0s127nJsQ945QtXYzmAtQylHyJB6ipbcQlUYx7QuTAK1dzU8Osy7ThuKV%2FnAysKhmc3wrmwcv3N%2B54D2V%2FlCKH8DImTZoMRMXG&X-Amz-Signature=696dbcacc4492b1fdd1385e7f4bbb8061bd9282d88f53ab8ea4fb963fcec0ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGPLZXN%2F20251029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251029T010337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCKY0TKymLi1cbguKyzloaWPtaDJ%2B7IzZ9M70qy0IVgbgIhAL2WV757gvvJ6XejUjy5DLbiTEmsw6p0d%2FaeDTjtvGHXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtCpIjcX1w%2FSq4ic4q3AP%2F3udGBb77kMeXFM1gjEFQmbqHJ%2BZPRHgXcjdw0Xg2QXNjJDttixUgnUfi6yqhPqQxUVuN8cV%2BpqCoK9K%2BaTX4RUlndA9MJkzoFqEdzkzvBub0XU55tRENm4nZMkjz9RotzgXAfbG81I0BxfxbW0eSwPts1FWAX0%2FCdUv05EJ1r1bk2s6s1%2F1wbsuIbUS7nxtuGKlEISaRXQ9HouHqQLB52QQiOhL672WJgSlBMjkaA8J1GBVfdJu5j%2Br4Q4UYa1WJnA9bOm5Ecfc1td06V14olBYMhOYthZKxu4Bx2f0zwSIMQc%2BdzIIjfirpktSdWGPt1Cjx4ntF7xvkAT5yztuLvdr4u0Jkjr%2BGKXJ8c06hzjx7HuzmFbU0osE0ngpJIokm%2F%2FmkwbiaXiOrl0u3nMb5hXjOQLcD1T5x92TjQkwRk2%2BBIbskxb3dVplLjdANSWVY6isfee6iqCyXgAI3rgRTCYKg2RC7oP0n%2BFvW7Nf53Fe4o2cJD7e58z6eUQL%2BpUlD%2FVRaTy0g%2F28pO0ZglX6IOw0RLiku34N%2B96vHHa6e1kEQH711Fdj6g7kfSiurixl%2B7tlp6Yviaez%2BafH9Gw9wFyVt6xQj21V%2BBTNmgkJpVvevrdTg7B4ZlhwuYDDMk4XIBjqkAW%2FK%2Byr7%2BrWal%2FxRv09J017dH1peYm41qbHqJQzfOfr0oZLpFZa0ZaX0LV1NwIg5%2Fs19RjGxz9X4GtH3euCcNRHKyD1ZUC4NJ6QY%2BbWintDWl%2FB3CDOarEwE5I0s127nJsQ945QtXYzmAtQylHyJB6ipbcQlUYx7QuTAK1dzU8Osy7ThuKV%2FnAysKhmc3wrmwcv3N%2B54D2V%2FlCKH8DImTZoMRMXG&X-Amz-Signature=2c0a46e5f2fcbddb272d8b6aab9c4f93c839d1ee1bf25a903130b26651b65dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGPLZXN%2F20251029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251029T010337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCKY0TKymLi1cbguKyzloaWPtaDJ%2B7IzZ9M70qy0IVgbgIhAL2WV757gvvJ6XejUjy5DLbiTEmsw6p0d%2FaeDTjtvGHXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtCpIjcX1w%2FSq4ic4q3AP%2F3udGBb77kMeXFM1gjEFQmbqHJ%2BZPRHgXcjdw0Xg2QXNjJDttixUgnUfi6yqhPqQxUVuN8cV%2BpqCoK9K%2BaTX4RUlndA9MJkzoFqEdzkzvBub0XU55tRENm4nZMkjz9RotzgXAfbG81I0BxfxbW0eSwPts1FWAX0%2FCdUv05EJ1r1bk2s6s1%2F1wbsuIbUS7nxtuGKlEISaRXQ9HouHqQLB52QQiOhL672WJgSlBMjkaA8J1GBVfdJu5j%2Br4Q4UYa1WJnA9bOm5Ecfc1td06V14olBYMhOYthZKxu4Bx2f0zwSIMQc%2BdzIIjfirpktSdWGPt1Cjx4ntF7xvkAT5yztuLvdr4u0Jkjr%2BGKXJ8c06hzjx7HuzmFbU0osE0ngpJIokm%2F%2FmkwbiaXiOrl0u3nMb5hXjOQLcD1T5x92TjQkwRk2%2BBIbskxb3dVplLjdANSWVY6isfee6iqCyXgAI3rgRTCYKg2RC7oP0n%2BFvW7Nf53Fe4o2cJD7e58z6eUQL%2BpUlD%2FVRaTy0g%2F28pO0ZglX6IOw0RLiku34N%2B96vHHa6e1kEQH711Fdj6g7kfSiurixl%2B7tlp6Yviaez%2BafH9Gw9wFyVt6xQj21V%2BBTNmgkJpVvevrdTg7B4ZlhwuYDDMk4XIBjqkAW%2FK%2Byr7%2BrWal%2FxRv09J017dH1peYm41qbHqJQzfOfr0oZLpFZa0ZaX0LV1NwIg5%2Fs19RjGxz9X4GtH3euCcNRHKyD1ZUC4NJ6QY%2BbWintDWl%2FB3CDOarEwE5I0s127nJsQ945QtXYzmAtQylHyJB6ipbcQlUYx7QuTAK1dzU8Osy7ThuKV%2FnAysKhmc3wrmwcv3N%2B54D2V%2FlCKH8DImTZoMRMXG&X-Amz-Signature=88d94ba518d27977007124dc28594de21281c052881244ff55bbe11ccd189c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGPLZXN%2F20251029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251029T010337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCKY0TKymLi1cbguKyzloaWPtaDJ%2B7IzZ9M70qy0IVgbgIhAL2WV757gvvJ6XejUjy5DLbiTEmsw6p0d%2FaeDTjtvGHXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtCpIjcX1w%2FSq4ic4q3AP%2F3udGBb77kMeXFM1gjEFQmbqHJ%2BZPRHgXcjdw0Xg2QXNjJDttixUgnUfi6yqhPqQxUVuN8cV%2BpqCoK9K%2BaTX4RUlndA9MJkzoFqEdzkzvBub0XU55tRENm4nZMkjz9RotzgXAfbG81I0BxfxbW0eSwPts1FWAX0%2FCdUv05EJ1r1bk2s6s1%2F1wbsuIbUS7nxtuGKlEISaRXQ9HouHqQLB52QQiOhL672WJgSlBMjkaA8J1GBVfdJu5j%2Br4Q4UYa1WJnA9bOm5Ecfc1td06V14olBYMhOYthZKxu4Bx2f0zwSIMQc%2BdzIIjfirpktSdWGPt1Cjx4ntF7xvkAT5yztuLvdr4u0Jkjr%2BGKXJ8c06hzjx7HuzmFbU0osE0ngpJIokm%2F%2FmkwbiaXiOrl0u3nMb5hXjOQLcD1T5x92TjQkwRk2%2BBIbskxb3dVplLjdANSWVY6isfee6iqCyXgAI3rgRTCYKg2RC7oP0n%2BFvW7Nf53Fe4o2cJD7e58z6eUQL%2BpUlD%2FVRaTy0g%2F28pO0ZglX6IOw0RLiku34N%2B96vHHa6e1kEQH711Fdj6g7kfSiurixl%2B7tlp6Yviaez%2BafH9Gw9wFyVt6xQj21V%2BBTNmgkJpVvevrdTg7B4ZlhwuYDDMk4XIBjqkAW%2FK%2Byr7%2BrWal%2FxRv09J017dH1peYm41qbHqJQzfOfr0oZLpFZa0ZaX0LV1NwIg5%2Fs19RjGxz9X4GtH3euCcNRHKyD1ZUC4NJ6QY%2BbWintDWl%2FB3CDOarEwE5I0s127nJsQ945QtXYzmAtQylHyJB6ipbcQlUYx7QuTAK1dzU8Osy7ThuKV%2FnAysKhmc3wrmwcv3N%2B54D2V%2FlCKH8DImTZoMRMXG&X-Amz-Signature=80c044f8ea00f38715f208f32f793af687a1674039d010e06c6a069abf6ec98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTY672BH%2F20251029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251029T010335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQD7hB1WozOC6y3LgJGhfEg95m%2BXWOZR%2BKtL4iPYPzwRTgIhANzbTW0MLj6Cb90MnViijGGiqbJ9WN87S%2B6fuUqVmNdgKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYmr6TPJSCEDl3B4cq3APKaKm5FmN11BaDjRj4ENNvPeIuQJQoQL6Z3cyWzYB08AKXu9eT%2FIba2y4D9UmCiEDbbudD5QrzKQvv6v1zzMM4%2FGAvUgP%2BJVqhjA3qh3aAqH7608FwbEsPoIT2Lku%2Fga%2BO6mT4CDndyoJH7Zuog%2Bv8lOJpXCw4VmbcnXZXqgMsQg1o1THEYNkgzBBYJOxdGinX%2BECUqx2OQZt7DrJWhJyq1XTu%2BV%2BXSnA5z1NF1dtLUwNobYyP2dE8J31kphpdBw8f1EsEvhWSuKqUe9%2F3ZLexU7w9HJfMKK0DSm%2FcFX6aB8ddyX9voGxQqeTsv6t67AymuOxqZbsGqqpxbMdFHKjAQXSqMBgm6zkuLcs1HlVO4wKK75Tbea7ksyC4Rup04ykP%2BmG%2BfYjsnRTfeOhDVOrI8k9GP%2FVQp%2BNc8sI7v3a6%2F6CZrYThBUwSfFwCw4wM1IyCcWVR51yJBAlOt%2FOWTbHGTad1YdAGwRctsV1ysmZpCCDe6qYXbs%2BB%2FySj7O%2FFwj32Eecfilfxy8AH15QQGk907p4m7v2SQR3ccGK6ru%2B2ngcgXR%2BEXpaDoh8P5D%2FU7FH%2F8rtPdUAW3l%2FFNwbyFh%2FLHdfanYD%2FFJZ5LPFIyXZzy1iguukQX9P58NTY2DDGk4XIBjqkARcUOrRZ9km2zre0coDuQrfrhhOeCuYMO6ZcRWV31vizMmhA0ZOqSiS%2Bt44vvPCzBNHTGe%2F%2F9zs33ZyvKQ65YWptnuxsMuICFIfQ3xyHgYcb%2BvRWn%2FOFTPU264jMYVIS%2F9a4MEiL66KEdRARrOurmC5PLZTi%2FxIMWpfp%2FKXMbQkEbwR%2B%2FaoBv%2FVj3xKw3vnm5u%2Fhy4LcB%2B2zYL%2BrMzlDSWF%2FXyRh&X-Amz-Signature=8c1c46fda1414255853bc3c2a2f04e7fac3d7af3e33952a4e0fee979bde6eac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

