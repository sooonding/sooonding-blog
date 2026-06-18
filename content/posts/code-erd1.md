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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDFZIKX%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6uo1FqfzWYMesVA80%2Fto%2FOv5VkglC918A7AoPoJox6AiEAw%2F8dhhE1iZgIUxokctLb9jVxQttHnJCNnhepgAqHuxwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIIflKfoStT8b5qIyrcAz0%2BoYzT8%2BuZ567bSXVUed6Pmvig4EHY8Eht1etXATQDxHH%2B8wyKkr7jj9ZrIRNvbK5IvR6d1b0IrEnSWW6M%2BfvfKRg5Y7Z%2BLSzti7rODEC4hIOCiRaizt92gh7yIU3ordwhwGRYqXVersd9z%2FjULxVUO0X329CR4XpaOZE74F%2FDVv1mMdKX%2FMmYyuUvXbHd2bqgBuW7v6axhn%2FE2NQBw%2F8tGwc8WqqHPITUbwu9khm8nIDb8qSkcpNA1qPMP3y5SAN6AHDefOIgUxF4AYmKQc0IduH1VkM4EkkVJf3u1510T29OjZD%2FhAVzH1XmsQ27RHqKwE3c2NY0dTF8bzeG4YPtPkpRTGfNiDrAD5w9X7GYD845FOdeQHOhFubtd250wyr7%2Bcoj%2BM%2FVM8Yw2EowfLlEK5DloSj2xaxwZQCBMEXqH6sPZkp3SKpJounnpxq7nN5jMCCafpgODpJbiWHscc%2FBu5KzPzyg2LhhaOdvocAadPngzE99uY2COIQ0yEKs7d%2FCiGPBkH%2B12zi2I%2BpZPlLXBq0pglj0PgZVROrYF8PrhozYAHOI4PwcgOMgHEQFKi%2F0%2FwX5L2cE80c3aZdJelW5N6doi%2F6ZnmFY21%2BfxVpWIBVvCdiyZLzu7uXHMOHOzdEGOqUBNFf%2BxutafqUxju8JldRY9XzQfIyfcX2AML3%2FfGDg00oIvqfFmWvWITHegLVImO9lfpXinvcxwqUyUhtUczpw4yAxUkg%2BQOsFJk2qXUOb28mVHPZ6j%2BKCVUbBzaCvOwwPTIcz5%2F31XIJKSokS93KeFdNFelmZQRTe9rYLbryak%2BMD%2BCHOlIHN5Gaq90rB1HrahMqlU0D7ODPPWmDLXXryJmHd%2BD1r&X-Amz-Signature=e91638e566d1f1025b5dce3c8128d4641f202eb41254f6e4c24cc7443087f527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5K6WFD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcjWJ%2B%2BzuDw%2BVZ2O%2Bt1ALVe83GTkgBDiUhuCzR8p26bAiBSfyAcx4R71WFO%2Bqq3pimDIDK6LvzZc3wfeK0FfxpjCiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtCyNP9h0d%2FPYSh8rKtwDHJ%2BKlHlxlgLAd1t%2BmRzWFzU%2BGTSSzkR1KrfEXZoVbG8kP1rrzcMBsF33PyB0TlUc%2FM%2BacUhwnlBm4BzmfSWmekJsWJ6QsZR5Mqi13cO%2FEoAC6O1iQKdUlaok1B0ip6LZxq7RQkX21lMYgRed%2BieFXD7fUDB%2BDXpwqUKjgXDX0cymN77bQe747q6RZ8QiCtqvooHNr0BO0SALmFxi1bB3SpWuDTPVtMLPjgOsJQMKRiNtDOqVtK8awg93QoisyKiMq2L4Pr1eRN90pzgUwNfYdkkuAzcu2AXEXSBNFWdhNLVC99WpUq8%2F9%2F9xuE8Q%2FGNQYvNI6W0Ra%2Fx8b3cPPGsM3Y4vd08UE99i7z51H3nuWm9Kg4Fg6%2BuFQKE4a3%2B%2F%2BiJxvs6pPsLytCT2oylxasl8q%2FKa3gKKasAhI0qHAff193bcI0RY4adaOgJ9C44P6rW%2BtHsjHR12%2B%2Frt0lp0HaW2fTwpFimWxY9OKtRUr3XOORB6AMsRn%2BTDUPToJpOOUnjubRWu4%2BKzI3moy879vJpXUjoWHO5hv%2BUEFN8MXfmt2y5432%2FWW5%2BrRGQzlwtordu1wqP9xiECwMwH4AkfOwDAvrHrK1xic3a%2BtU0PNNqcbbuIepFsDltS16y5FMEw9s7N0QY6pgFjqMCQoPZGvfct71XWmgqq%2FoAobQqDME6rpvOZF03YK3i0ZSRHB72b3jkQLaUgiPkNsfEoF4u0TdN7G5AuLJWkwy%2BfY%2FEatTO2AWt4owF8vYnxPTeaaC5s7vZMWk%2BCQJeBh47XSl5hJHyP5b7%2FltUe3DAIrZQPGaYJ0IaQ19MITi6y7mcgwXF71buIZpg4XuhsMV2ascd9YP5jdG0l6wD2KYfpOOHO&X-Amz-Signature=a3a847de88a4e26396657e6ea12a3d9dd8247ee96330692edafb85605824e024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5K6WFD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcjWJ%2B%2BzuDw%2BVZ2O%2Bt1ALVe83GTkgBDiUhuCzR8p26bAiBSfyAcx4R71WFO%2Bqq3pimDIDK6LvzZc3wfeK0FfxpjCiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtCyNP9h0d%2FPYSh8rKtwDHJ%2BKlHlxlgLAd1t%2BmRzWFzU%2BGTSSzkR1KrfEXZoVbG8kP1rrzcMBsF33PyB0TlUc%2FM%2BacUhwnlBm4BzmfSWmekJsWJ6QsZR5Mqi13cO%2FEoAC6O1iQKdUlaok1B0ip6LZxq7RQkX21lMYgRed%2BieFXD7fUDB%2BDXpwqUKjgXDX0cymN77bQe747q6RZ8QiCtqvooHNr0BO0SALmFxi1bB3SpWuDTPVtMLPjgOsJQMKRiNtDOqVtK8awg93QoisyKiMq2L4Pr1eRN90pzgUwNfYdkkuAzcu2AXEXSBNFWdhNLVC99WpUq8%2F9%2F9xuE8Q%2FGNQYvNI6W0Ra%2Fx8b3cPPGsM3Y4vd08UE99i7z51H3nuWm9Kg4Fg6%2BuFQKE4a3%2B%2F%2BiJxvs6pPsLytCT2oylxasl8q%2FKa3gKKasAhI0qHAff193bcI0RY4adaOgJ9C44P6rW%2BtHsjHR12%2B%2Frt0lp0HaW2fTwpFimWxY9OKtRUr3XOORB6AMsRn%2BTDUPToJpOOUnjubRWu4%2BKzI3moy879vJpXUjoWHO5hv%2BUEFN8MXfmt2y5432%2FWW5%2BrRGQzlwtordu1wqP9xiECwMwH4AkfOwDAvrHrK1xic3a%2BtU0PNNqcbbuIepFsDltS16y5FMEw9s7N0QY6pgFjqMCQoPZGvfct71XWmgqq%2FoAobQqDME6rpvOZF03YK3i0ZSRHB72b3jkQLaUgiPkNsfEoF4u0TdN7G5AuLJWkwy%2BfY%2FEatTO2AWt4owF8vYnxPTeaaC5s7vZMWk%2BCQJeBh47XSl5hJHyP5b7%2FltUe3DAIrZQPGaYJ0IaQ19MITi6y7mcgwXF71buIZpg4XuhsMV2ascd9YP5jdG0l6wD2KYfpOOHO&X-Amz-Signature=d83cc8662ea887c6678d70614ff5d3cbe93811226bf8a2a5884f247d5067ba8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5K6WFD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcjWJ%2B%2BzuDw%2BVZ2O%2Bt1ALVe83GTkgBDiUhuCzR8p26bAiBSfyAcx4R71WFO%2Bqq3pimDIDK6LvzZc3wfeK0FfxpjCiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtCyNP9h0d%2FPYSh8rKtwDHJ%2BKlHlxlgLAd1t%2BmRzWFzU%2BGTSSzkR1KrfEXZoVbG8kP1rrzcMBsF33PyB0TlUc%2FM%2BacUhwnlBm4BzmfSWmekJsWJ6QsZR5Mqi13cO%2FEoAC6O1iQKdUlaok1B0ip6LZxq7RQkX21lMYgRed%2BieFXD7fUDB%2BDXpwqUKjgXDX0cymN77bQe747q6RZ8QiCtqvooHNr0BO0SALmFxi1bB3SpWuDTPVtMLPjgOsJQMKRiNtDOqVtK8awg93QoisyKiMq2L4Pr1eRN90pzgUwNfYdkkuAzcu2AXEXSBNFWdhNLVC99WpUq8%2F9%2F9xuE8Q%2FGNQYvNI6W0Ra%2Fx8b3cPPGsM3Y4vd08UE99i7z51H3nuWm9Kg4Fg6%2BuFQKE4a3%2B%2F%2BiJxvs6pPsLytCT2oylxasl8q%2FKa3gKKasAhI0qHAff193bcI0RY4adaOgJ9C44P6rW%2BtHsjHR12%2B%2Frt0lp0HaW2fTwpFimWxY9OKtRUr3XOORB6AMsRn%2BTDUPToJpOOUnjubRWu4%2BKzI3moy879vJpXUjoWHO5hv%2BUEFN8MXfmt2y5432%2FWW5%2BrRGQzlwtordu1wqP9xiECwMwH4AkfOwDAvrHrK1xic3a%2BtU0PNNqcbbuIepFsDltS16y5FMEw9s7N0QY6pgFjqMCQoPZGvfct71XWmgqq%2FoAobQqDME6rpvOZF03YK3i0ZSRHB72b3jkQLaUgiPkNsfEoF4u0TdN7G5AuLJWkwy%2BfY%2FEatTO2AWt4owF8vYnxPTeaaC5s7vZMWk%2BCQJeBh47XSl5hJHyP5b7%2FltUe3DAIrZQPGaYJ0IaQ19MITi6y7mcgwXF71buIZpg4XuhsMV2ascd9YP5jdG0l6wD2KYfpOOHO&X-Amz-Signature=14f364e3db3d098eb6404f64e66d58a72b75820a18219150432837026e5b2b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5K6WFD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcjWJ%2B%2BzuDw%2BVZ2O%2Bt1ALVe83GTkgBDiUhuCzR8p26bAiBSfyAcx4R71WFO%2Bqq3pimDIDK6LvzZc3wfeK0FfxpjCiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtCyNP9h0d%2FPYSh8rKtwDHJ%2BKlHlxlgLAd1t%2BmRzWFzU%2BGTSSzkR1KrfEXZoVbG8kP1rrzcMBsF33PyB0TlUc%2FM%2BacUhwnlBm4BzmfSWmekJsWJ6QsZR5Mqi13cO%2FEoAC6O1iQKdUlaok1B0ip6LZxq7RQkX21lMYgRed%2BieFXD7fUDB%2BDXpwqUKjgXDX0cymN77bQe747q6RZ8QiCtqvooHNr0BO0SALmFxi1bB3SpWuDTPVtMLPjgOsJQMKRiNtDOqVtK8awg93QoisyKiMq2L4Pr1eRN90pzgUwNfYdkkuAzcu2AXEXSBNFWdhNLVC99WpUq8%2F9%2F9xuE8Q%2FGNQYvNI6W0Ra%2Fx8b3cPPGsM3Y4vd08UE99i7z51H3nuWm9Kg4Fg6%2BuFQKE4a3%2B%2F%2BiJxvs6pPsLytCT2oylxasl8q%2FKa3gKKasAhI0qHAff193bcI0RY4adaOgJ9C44P6rW%2BtHsjHR12%2B%2Frt0lp0HaW2fTwpFimWxY9OKtRUr3XOORB6AMsRn%2BTDUPToJpOOUnjubRWu4%2BKzI3moy879vJpXUjoWHO5hv%2BUEFN8MXfmt2y5432%2FWW5%2BrRGQzlwtordu1wqP9xiECwMwH4AkfOwDAvrHrK1xic3a%2BtU0PNNqcbbuIepFsDltS16y5FMEw9s7N0QY6pgFjqMCQoPZGvfct71XWmgqq%2FoAobQqDME6rpvOZF03YK3i0ZSRHB72b3jkQLaUgiPkNsfEoF4u0TdN7G5AuLJWkwy%2BfY%2FEatTO2AWt4owF8vYnxPTeaaC5s7vZMWk%2BCQJeBh47XSl5hJHyP5b7%2FltUe3DAIrZQPGaYJ0IaQ19MITi6y7mcgwXF71buIZpg4XuhsMV2ascd9YP5jdG0l6wD2KYfpOOHO&X-Amz-Signature=90fc118d89839b00758f2def8bf6e35a26430f25c2fa4573a490024b9d289285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y5K6WFD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcjWJ%2B%2BzuDw%2BVZ2O%2Bt1ALVe83GTkgBDiUhuCzR8p26bAiBSfyAcx4R71WFO%2Bqq3pimDIDK6LvzZc3wfeK0FfxpjCiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtCyNP9h0d%2FPYSh8rKtwDHJ%2BKlHlxlgLAd1t%2BmRzWFzU%2BGTSSzkR1KrfEXZoVbG8kP1rrzcMBsF33PyB0TlUc%2FM%2BacUhwnlBm4BzmfSWmekJsWJ6QsZR5Mqi13cO%2FEoAC6O1iQKdUlaok1B0ip6LZxq7RQkX21lMYgRed%2BieFXD7fUDB%2BDXpwqUKjgXDX0cymN77bQe747q6RZ8QiCtqvooHNr0BO0SALmFxi1bB3SpWuDTPVtMLPjgOsJQMKRiNtDOqVtK8awg93QoisyKiMq2L4Pr1eRN90pzgUwNfYdkkuAzcu2AXEXSBNFWdhNLVC99WpUq8%2F9%2F9xuE8Q%2FGNQYvNI6W0Ra%2Fx8b3cPPGsM3Y4vd08UE99i7z51H3nuWm9Kg4Fg6%2BuFQKE4a3%2B%2F%2BiJxvs6pPsLytCT2oylxasl8q%2FKa3gKKasAhI0qHAff193bcI0RY4adaOgJ9C44P6rW%2BtHsjHR12%2B%2Frt0lp0HaW2fTwpFimWxY9OKtRUr3XOORB6AMsRn%2BTDUPToJpOOUnjubRWu4%2BKzI3moy879vJpXUjoWHO5hv%2BUEFN8MXfmt2y5432%2FWW5%2BrRGQzlwtordu1wqP9xiECwMwH4AkfOwDAvrHrK1xic3a%2BtU0PNNqcbbuIepFsDltS16y5FMEw9s7N0QY6pgFjqMCQoPZGvfct71XWmgqq%2FoAobQqDME6rpvOZF03YK3i0ZSRHB72b3jkQLaUgiPkNsfEoF4u0TdN7G5AuLJWkwy%2BfY%2FEatTO2AWt4owF8vYnxPTeaaC5s7vZMWk%2BCQJeBh47XSl5hJHyP5b7%2FltUe3DAIrZQPGaYJ0IaQ19MITi6y7mcgwXF71buIZpg4XuhsMV2ascd9YP5jdG0l6wD2KYfpOOHO&X-Amz-Signature=1b3e74cf20f1986d31b29660f7f312878f38e17324cb77793350696e2f87fe0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMDFZIKX%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T035954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6uo1FqfzWYMesVA80%2Fto%2FOv5VkglC918A7AoPoJox6AiEAw%2F8dhhE1iZgIUxokctLb9jVxQttHnJCNnhepgAqHuxwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIIflKfoStT8b5qIyrcAz0%2BoYzT8%2BuZ567bSXVUed6Pmvig4EHY8Eht1etXATQDxHH%2B8wyKkr7jj9ZrIRNvbK5IvR6d1b0IrEnSWW6M%2BfvfKRg5Y7Z%2BLSzti7rODEC4hIOCiRaizt92gh7yIU3ordwhwGRYqXVersd9z%2FjULxVUO0X329CR4XpaOZE74F%2FDVv1mMdKX%2FMmYyuUvXbHd2bqgBuW7v6axhn%2FE2NQBw%2F8tGwc8WqqHPITUbwu9khm8nIDb8qSkcpNA1qPMP3y5SAN6AHDefOIgUxF4AYmKQc0IduH1VkM4EkkVJf3u1510T29OjZD%2FhAVzH1XmsQ27RHqKwE3c2NY0dTF8bzeG4YPtPkpRTGfNiDrAD5w9X7GYD845FOdeQHOhFubtd250wyr7%2Bcoj%2BM%2FVM8Yw2EowfLlEK5DloSj2xaxwZQCBMEXqH6sPZkp3SKpJounnpxq7nN5jMCCafpgODpJbiWHscc%2FBu5KzPzyg2LhhaOdvocAadPngzE99uY2COIQ0yEKs7d%2FCiGPBkH%2B12zi2I%2BpZPlLXBq0pglj0PgZVROrYF8PrhozYAHOI4PwcgOMgHEQFKi%2F0%2FwX5L2cE80c3aZdJelW5N6doi%2F6ZnmFY21%2BfxVpWIBVvCdiyZLzu7uXHMOHOzdEGOqUBNFf%2BxutafqUxju8JldRY9XzQfIyfcX2AML3%2FfGDg00oIvqfFmWvWITHegLVImO9lfpXinvcxwqUyUhtUczpw4yAxUkg%2BQOsFJk2qXUOb28mVHPZ6j%2BKCVUbBzaCvOwwPTIcz5%2F31XIJKSokS93KeFdNFelmZQRTe9rYLbryak%2BMD%2BCHOlIHN5Gaq90rB1HrahMqlU0D7ODPPWmDLXXryJmHd%2BD1r&X-Amz-Signature=ff93e604c77872c7d609c097ccdf00ad741b04083ec4e27fb550380739b49333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

