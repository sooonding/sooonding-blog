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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UKLAOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIrBIsek9eGujiUbMjbKOo3zTPzFYZ%2FEU7LKLNM4ddIAiBX1ZuE%2F0rYKtNeq%2Bj3eKmfjiIl5kkQ%2FpMMKPPGsTyHHSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbbjMwCOkyg58LxYKtwDAJ2Jr75cRj5aneYUtXiSIp6fbrmAC%2FjmykJkNI6pbd2NzBzo4GZt1T5kXzibRQJRRl%2BggG7xMUTEX4LpS35ZhwkILWy9dfxNZBwl6YkUGgRY13O0s6v4YEYHIvPrg7yvpWmbR3aSVeN%2BHvIwoJqctyZ%2Bg2EdkvvLP2MtbAHZuXJNbQwQ2jjIxpvjUDaz0HqhWq0wtFCzc8AitYiHC%2BX3m%2BN%2BiyQ8KfOF7L2H7EWiCDc2b3G7Gqe59H2owBS4JJwuULeCaXTnRTvzJov1wp9DazCLdYipVN9lDYeZLOsrvJf%2BZmYCTkfc1FfEIQ8rZeruWbN8%2BX9SbyUnNtSpw2BYL3BuJCEcAFBXbe8iB7eQvCxxxuh%2Bv8MUjtv%2FJeaj3ioMv4Xzh2ooLKKVpHU7p397wbPR%2BeDBuDqkuSMRPZYu3LcENCuDQQ30LHhBPkobeKUC4%2B1uUoCfEPAYhuj0cP4X%2FgAd8FYHQMxRVI9I%2FwGDVCxAAp%2FEsKwFRRt%2Blcbp61Xth4fqe%2BszkSgP4Q4J82p4eZ3u4fj8f6CTlHw%2Bg%2FoACIRKm8%2FtZP0MKJNDMtFDPBV%2BkK2%2B%2FY0zqyrcL4GeHeURukgpU1TVVfbe8zCwHseuFBIDVIDHd4e1myk2LU4widTdyQY6pgEdDTlKUObEeX16eSbNspHTs0sDRy0MHQ5iFufkuTwFvIkKhZ0V1T9sIs7EfYQQ0N08idJbCCfl5JG9DEl0rHqDAXbRI0swPmtaIxeuXlde30cor7M%2F5k8QHh23VJzP2Cf6LpvPEcvLYikmTo1YR22XSbcpAj%2FjnJ8OADSnYHp93fF7KdBQJEv%2Bex%2BjzzmDL5CfHh4XwNc2elsN9QN9ilnJ1PH1wjza&X-Amz-Signature=d40f3aa53e9dfd37310266c00608884cc52ba1fd644611b7486f2d00a71ca476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUWK3HB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgiUov%2FTY6MFw8uc0cJ1JOZs2zIbB8DofVdtH4NscOnQIgObxOF3USgJapgyERQPrdNqJvC%2FwXKa7vJ92zORdfit4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfyOpxnDMQjV5V2USrcA6Wgo144HJzOIuDk8ai1lm%2F1W3jbQomW2dvC9ITwrKqSKzcMRDd2fvAefaCoUESTYvAPqypK9Hxg4ho9MdXHhYuIn0j%2BQxpnUwf0DN2naqXGTCNdMy%2FRyGOdL8wVdzXHPlZeYCeH2bMhssexd8ASxqBqQSkexaU95IoNfAcb8rTmvNDfg%2BK1DDa0A6nu5hPGidC5lEje%2BjQl5Yq0qhLGm7Cb7ULYbUlVyk2aX4qDuXcngdjAxZ95zqFW3xobGdZNXTygKZMJRtvH5puey5fXxlNc%2FeUP5R5yvYy2Ljsj78FCAT%2F4DBtBPx12cchXLlp%2FWzwcnObdPsqZIXBkvEcSORGC1hORMKBcEupqxOG5T%2B3E7eddDXi2uu%2BNpDfGL1G9B4lSR6PYeNKOrktAqdxyMHUryTvBECvTzCbvMwyWPVbOBFuLThY0pB9xPYAlwLWCItPLJVkvlnohIl6d68uXB17CWD0DAAkzo2bfjC8OdOeyeaS8dnh4HVAZVrH0BYGXv2gtaXvzzW8MhxbTqnwGUJY0i%2FhTqvRmsyNWXlV%2FMju%2FEesm7Vrjy82z9dwgjdXG63E1LiY%2BOPRFe8jEiR3DQEIPJ2Mzuts37jzxfGXsUPgLr0cSvkUhztApokINMLXU3ckGOqUBrGD98AoTwKJHydCulw0ZaqToppI%2BLjQQDvkr%2FHZpV%2FekDWGGaHH9ZMFMlgBwXkfBg%2B2zo4BRuqONMpRSMkblamMTsgBpxRwU6ZuBEdOUZFAenScO1few4Wn4yh5euwD7n6lZlstIMa1wV7mQB8LhhuUsQQjNPzAeEAl9Jf8y8VOmyPgRmo%2Bq4QXiMBGV0kagQiaCZpjnRKI%2FGkBnGdHxWw7GAWO6&X-Amz-Signature=8a6bb6dfd7dbf2ffc744dde30d7731dc4db6ec22111573c031a2494afff9287b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUWK3HB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgiUov%2FTY6MFw8uc0cJ1JOZs2zIbB8DofVdtH4NscOnQIgObxOF3USgJapgyERQPrdNqJvC%2FwXKa7vJ92zORdfit4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfyOpxnDMQjV5V2USrcA6Wgo144HJzOIuDk8ai1lm%2F1W3jbQomW2dvC9ITwrKqSKzcMRDd2fvAefaCoUESTYvAPqypK9Hxg4ho9MdXHhYuIn0j%2BQxpnUwf0DN2naqXGTCNdMy%2FRyGOdL8wVdzXHPlZeYCeH2bMhssexd8ASxqBqQSkexaU95IoNfAcb8rTmvNDfg%2BK1DDa0A6nu5hPGidC5lEje%2BjQl5Yq0qhLGm7Cb7ULYbUlVyk2aX4qDuXcngdjAxZ95zqFW3xobGdZNXTygKZMJRtvH5puey5fXxlNc%2FeUP5R5yvYy2Ljsj78FCAT%2F4DBtBPx12cchXLlp%2FWzwcnObdPsqZIXBkvEcSORGC1hORMKBcEupqxOG5T%2B3E7eddDXi2uu%2BNpDfGL1G9B4lSR6PYeNKOrktAqdxyMHUryTvBECvTzCbvMwyWPVbOBFuLThY0pB9xPYAlwLWCItPLJVkvlnohIl6d68uXB17CWD0DAAkzo2bfjC8OdOeyeaS8dnh4HVAZVrH0BYGXv2gtaXvzzW8MhxbTqnwGUJY0i%2FhTqvRmsyNWXlV%2FMju%2FEesm7Vrjy82z9dwgjdXG63E1LiY%2BOPRFe8jEiR3DQEIPJ2Mzuts37jzxfGXsUPgLr0cSvkUhztApokINMLXU3ckGOqUBrGD98AoTwKJHydCulw0ZaqToppI%2BLjQQDvkr%2FHZpV%2FekDWGGaHH9ZMFMlgBwXkfBg%2B2zo4BRuqONMpRSMkblamMTsgBpxRwU6ZuBEdOUZFAenScO1few4Wn4yh5euwD7n6lZlstIMa1wV7mQB8LhhuUsQQjNPzAeEAl9Jf8y8VOmyPgRmo%2Bq4QXiMBGV0kagQiaCZpjnRKI%2FGkBnGdHxWw7GAWO6&X-Amz-Signature=a0157be372253f062291ff87c188afe1a0a7cf08f1f5ef70a5d68990b4f28030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUWK3HB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgiUov%2FTY6MFw8uc0cJ1JOZs2zIbB8DofVdtH4NscOnQIgObxOF3USgJapgyERQPrdNqJvC%2FwXKa7vJ92zORdfit4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfyOpxnDMQjV5V2USrcA6Wgo144HJzOIuDk8ai1lm%2F1W3jbQomW2dvC9ITwrKqSKzcMRDd2fvAefaCoUESTYvAPqypK9Hxg4ho9MdXHhYuIn0j%2BQxpnUwf0DN2naqXGTCNdMy%2FRyGOdL8wVdzXHPlZeYCeH2bMhssexd8ASxqBqQSkexaU95IoNfAcb8rTmvNDfg%2BK1DDa0A6nu5hPGidC5lEje%2BjQl5Yq0qhLGm7Cb7ULYbUlVyk2aX4qDuXcngdjAxZ95zqFW3xobGdZNXTygKZMJRtvH5puey5fXxlNc%2FeUP5R5yvYy2Ljsj78FCAT%2F4DBtBPx12cchXLlp%2FWzwcnObdPsqZIXBkvEcSORGC1hORMKBcEupqxOG5T%2B3E7eddDXi2uu%2BNpDfGL1G9B4lSR6PYeNKOrktAqdxyMHUryTvBECvTzCbvMwyWPVbOBFuLThY0pB9xPYAlwLWCItPLJVkvlnohIl6d68uXB17CWD0DAAkzo2bfjC8OdOeyeaS8dnh4HVAZVrH0BYGXv2gtaXvzzW8MhxbTqnwGUJY0i%2FhTqvRmsyNWXlV%2FMju%2FEesm7Vrjy82z9dwgjdXG63E1LiY%2BOPRFe8jEiR3DQEIPJ2Mzuts37jzxfGXsUPgLr0cSvkUhztApokINMLXU3ckGOqUBrGD98AoTwKJHydCulw0ZaqToppI%2BLjQQDvkr%2FHZpV%2FekDWGGaHH9ZMFMlgBwXkfBg%2B2zo4BRuqONMpRSMkblamMTsgBpxRwU6ZuBEdOUZFAenScO1few4Wn4yh5euwD7n6lZlstIMa1wV7mQB8LhhuUsQQjNPzAeEAl9Jf8y8VOmyPgRmo%2Bq4QXiMBGV0kagQiaCZpjnRKI%2FGkBnGdHxWw7GAWO6&X-Amz-Signature=b5a701c0f6d484cf2cc70eadb11e786b6810f587bbee6830a6b53cc465a15cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUWK3HB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgiUov%2FTY6MFw8uc0cJ1JOZs2zIbB8DofVdtH4NscOnQIgObxOF3USgJapgyERQPrdNqJvC%2FwXKa7vJ92zORdfit4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfyOpxnDMQjV5V2USrcA6Wgo144HJzOIuDk8ai1lm%2F1W3jbQomW2dvC9ITwrKqSKzcMRDd2fvAefaCoUESTYvAPqypK9Hxg4ho9MdXHhYuIn0j%2BQxpnUwf0DN2naqXGTCNdMy%2FRyGOdL8wVdzXHPlZeYCeH2bMhssexd8ASxqBqQSkexaU95IoNfAcb8rTmvNDfg%2BK1DDa0A6nu5hPGidC5lEje%2BjQl5Yq0qhLGm7Cb7ULYbUlVyk2aX4qDuXcngdjAxZ95zqFW3xobGdZNXTygKZMJRtvH5puey5fXxlNc%2FeUP5R5yvYy2Ljsj78FCAT%2F4DBtBPx12cchXLlp%2FWzwcnObdPsqZIXBkvEcSORGC1hORMKBcEupqxOG5T%2B3E7eddDXi2uu%2BNpDfGL1G9B4lSR6PYeNKOrktAqdxyMHUryTvBECvTzCbvMwyWPVbOBFuLThY0pB9xPYAlwLWCItPLJVkvlnohIl6d68uXB17CWD0DAAkzo2bfjC8OdOeyeaS8dnh4HVAZVrH0BYGXv2gtaXvzzW8MhxbTqnwGUJY0i%2FhTqvRmsyNWXlV%2FMju%2FEesm7Vrjy82z9dwgjdXG63E1LiY%2BOPRFe8jEiR3DQEIPJ2Mzuts37jzxfGXsUPgLr0cSvkUhztApokINMLXU3ckGOqUBrGD98AoTwKJHydCulw0ZaqToppI%2BLjQQDvkr%2FHZpV%2FekDWGGaHH9ZMFMlgBwXkfBg%2B2zo4BRuqONMpRSMkblamMTsgBpxRwU6ZuBEdOUZFAenScO1few4Wn4yh5euwD7n6lZlstIMa1wV7mQB8LhhuUsQQjNPzAeEAl9Jf8y8VOmyPgRmo%2Bq4QXiMBGV0kagQiaCZpjnRKI%2FGkBnGdHxWw7GAWO6&X-Amz-Signature=284a066c5f39fc2dd1dbfb187fb0798dbd39c098bfb8c90b9ae30601d9df7357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUWK3HB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgiUov%2FTY6MFw8uc0cJ1JOZs2zIbB8DofVdtH4NscOnQIgObxOF3USgJapgyERQPrdNqJvC%2FwXKa7vJ92zORdfit4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfyOpxnDMQjV5V2USrcA6Wgo144HJzOIuDk8ai1lm%2F1W3jbQomW2dvC9ITwrKqSKzcMRDd2fvAefaCoUESTYvAPqypK9Hxg4ho9MdXHhYuIn0j%2BQxpnUwf0DN2naqXGTCNdMy%2FRyGOdL8wVdzXHPlZeYCeH2bMhssexd8ASxqBqQSkexaU95IoNfAcb8rTmvNDfg%2BK1DDa0A6nu5hPGidC5lEje%2BjQl5Yq0qhLGm7Cb7ULYbUlVyk2aX4qDuXcngdjAxZ95zqFW3xobGdZNXTygKZMJRtvH5puey5fXxlNc%2FeUP5R5yvYy2Ljsj78FCAT%2F4DBtBPx12cchXLlp%2FWzwcnObdPsqZIXBkvEcSORGC1hORMKBcEupqxOG5T%2B3E7eddDXi2uu%2BNpDfGL1G9B4lSR6PYeNKOrktAqdxyMHUryTvBECvTzCbvMwyWPVbOBFuLThY0pB9xPYAlwLWCItPLJVkvlnohIl6d68uXB17CWD0DAAkzo2bfjC8OdOeyeaS8dnh4HVAZVrH0BYGXv2gtaXvzzW8MhxbTqnwGUJY0i%2FhTqvRmsyNWXlV%2FMju%2FEesm7Vrjy82z9dwgjdXG63E1LiY%2BOPRFe8jEiR3DQEIPJ2Mzuts37jzxfGXsUPgLr0cSvkUhztApokINMLXU3ckGOqUBrGD98AoTwKJHydCulw0ZaqToppI%2BLjQQDvkr%2FHZpV%2FekDWGGaHH9ZMFMlgBwXkfBg%2B2zo4BRuqONMpRSMkblamMTsgBpxRwU6ZuBEdOUZFAenScO1few4Wn4yh5euwD7n6lZlstIMa1wV7mQB8LhhuUsQQjNPzAeEAl9Jf8y8VOmyPgRmo%2Bq4QXiMBGV0kagQiaCZpjnRKI%2FGkBnGdHxWw7GAWO6&X-Amz-Signature=d2c00fae619fa9d71313307070c1fd36260028c7ae2a45672e91fafd4d0867ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UKLAOQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIrBIsek9eGujiUbMjbKOo3zTPzFYZ%2FEU7LKLNM4ddIAiBX1ZuE%2F0rYKtNeq%2Bj3eKmfjiIl5kkQ%2FpMMKPPGsTyHHSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHbbjMwCOkyg58LxYKtwDAJ2Jr75cRj5aneYUtXiSIp6fbrmAC%2FjmykJkNI6pbd2NzBzo4GZt1T5kXzibRQJRRl%2BggG7xMUTEX4LpS35ZhwkILWy9dfxNZBwl6YkUGgRY13O0s6v4YEYHIvPrg7yvpWmbR3aSVeN%2BHvIwoJqctyZ%2Bg2EdkvvLP2MtbAHZuXJNbQwQ2jjIxpvjUDaz0HqhWq0wtFCzc8AitYiHC%2BX3m%2BN%2BiyQ8KfOF7L2H7EWiCDc2b3G7Gqe59H2owBS4JJwuULeCaXTnRTvzJov1wp9DazCLdYipVN9lDYeZLOsrvJf%2BZmYCTkfc1FfEIQ8rZeruWbN8%2BX9SbyUnNtSpw2BYL3BuJCEcAFBXbe8iB7eQvCxxxuh%2Bv8MUjtv%2FJeaj3ioMv4Xzh2ooLKKVpHU7p397wbPR%2BeDBuDqkuSMRPZYu3LcENCuDQQ30LHhBPkobeKUC4%2B1uUoCfEPAYhuj0cP4X%2FgAd8FYHQMxRVI9I%2FwGDVCxAAp%2FEsKwFRRt%2Blcbp61Xth4fqe%2BszkSgP4Q4J82p4eZ3u4fj8f6CTlHw%2Bg%2FoACIRKm8%2FtZP0MKJNDMtFDPBV%2BkK2%2B%2FY0zqyrcL4GeHeURukgpU1TVVfbe8zCwHseuFBIDVIDHd4e1myk2LU4widTdyQY6pgEdDTlKUObEeX16eSbNspHTs0sDRy0MHQ5iFufkuTwFvIkKhZ0V1T9sIs7EfYQQ0N08idJbCCfl5JG9DEl0rHqDAXbRI0swPmtaIxeuXlde30cor7M%2F5k8QHh23VJzP2Cf6LpvPEcvLYikmTo1YR22XSbcpAj%2FjnJ8OADSnYHp93fF7KdBQJEv%2Bex%2BjzzmDL5CfHh4XwNc2elsN9QN9ilnJ1PH1wjza&X-Amz-Signature=6958d2768d2d763bc4dc158d84aa719c33b7080f4005de19f6fadeb090031db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

