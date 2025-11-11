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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIMYXBH%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDIjbSToqUwPEkAxKgBCB1vzdxuc2EfLP28PFPE74vYVgIgUrX%2Fq%2FLmCTb%2F7T2Kz4ptxgOv%2F3RZaNxCJtvrPwx8p9Iq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBzQOaXhdfRORh7NnCrcA04v1gWXDpIap%2BXWidbGaQgdT%2Fh%2BDHyA08%2FTXTRHG1OgB5k3Lj3L85P0AiTI6sgbpIzM9uv6IwDyuhEGSkyiEHpi%2BaWcN17PcJWsd6Z4%2BN%2BQu9qYt2o3p4t8D3O1QXUP1buPak%2BEblSPRDxajj47SA%2FQ6DTka%2BnVM3slqgEu1ub0mxf8zSHZgNwzlVers%2FaNfLr6Ci0IKoNJrDdI37zoI9Fj1aQBAp4oCir%2BaccHhpOa1aabfqdhe9VR7dbizr6Ow3AdLHCScIParPqAbNGJXSXWx6d02odeCzfUHhNETn5IHJMVglujvnJ7qeR03u7IswkUWy%2FtP%2BiXDZcUxxrl2ERJcCPDlEWbkCeHnW9wOTKP6U1cNDFS4Mi3iAbmWbff4Lu0jh6JYyVhx%2BsBR1B8Xvwmk8xWzvwPPXpqS5DS7jv6QCSIxuBnhuur89KPHltv72Zy1aCteMMoiEfzGprsgYiTqSIaX1rU2D5F1gjcep%2FhmPaAWc2JhvLnU5psS7nHY7QIxXVEL2aqGLeB5owWf4SkYgJyBHHpn3DajMMGAdQMGlOymuB5aWjuJ2c6XFLCEBuXrgPUteuzEWDJ1JHe5Quy8xzvvQtoEzi3zGQgRH8Byy%2BvCcjsG1dxClu1MLCIysgGOqUBDIxscv7TJYcZXn6YrBc120lWjJsTMYhyTio777vhr%2FtJnR7YCENIOmvziDMhSv5nVdzPmjbaLaVnMcXmGYTF%2FlofSkTkA8qrwNN7M4ky3kubIvowgAndFBdA0JE5BSov09E47m5LYgDh9ugPCeQO3tDg5kegPxbcmdvm82IMpMjVCrvRhRsI1thLZ3Zcgl6lvP76qVs38tJtiHoIWiXnutNAciTs&X-Amz-Signature=e3f8eee9bf6a15958e4a24c2aea98e1584404b6a309d8ee29549c98e7ff5f808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBJVBBM%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFRJQyT%2B04bBMKngY2lKIMO01mco1vtJg3cCGezP7EHwAiBfPWk4ma7i350uM0PBToT804OMowVoKHKVR7fv6GrJ%2BSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMJdnbE9EBRLe0EMZWKtwDwKjjzGOvT1Kq2FCqlWTHAun4Y1VepgW1Lpqau5pnh8jyLw8OxkqDu1ZO64HQCR12Zq9rPZdVYietej1qXlwUmnSY9xELwBlw8RKPgzryAAbk4NZCslIWWW%2F2DGqOUB4kOve4DEYToRDtLtKeDoE8YxU3QasOHC%2FFeK3qQpQ%2BqyKRoj1kCC3sjAsjyFlfTjYgX3fI2%2Fct22jF3RZancm2xYpXvHiRXFlktonOesbh6R%2Bfiu7U1CRSRC30XPAX40iwjT%2BZ6axMCwkll13MCJ5C6%2FajldEoKLjNFbJEOcKHXgL%2BXRN8bRaDtQSRNbXsALR1rOQVYN7mI%2Fipw7SwwtWo%2Fo7S3qXm4EXe6Ylai8OR6dvqPKQXIBYCI9Lw7P7RdNbrkSsda2VlZR9r1l79U06Tc5s52KHGaD9myDG36TKsUp0HGPVzXeEBUDlvf%2BpiPnAOjaQxO%2FPgVv2bNe0%2BgJKfKUisQdYFE6Ez%2Fcvo8bNOYTsY43Affl%2FDfNx64b9UYXd8%2Bj8Y%2FSKdlUMfUwjN44hohnH0pv5HtcBR3yV%2BzEMCzIyfGg%2BFqelIrAcJXvHSqddl23D1Mpd3PGPpTaGi2txpYzB8ezCt4akgnj6aoBCySZ2cYL88sUlujXyxGtEwsIjKyAY6pgEKJGoBZQ0QjRYGGHstlxuQZQwC%2BYecs4D5vlAFzrBaV02tI1zkdFFlKYOhU7r1ha6EXyTN6FSC%2FM6OWodWj6xFoPRQMbcFCjpo1s%2BWRhZy78cYcMxsGQKG3Pi0JXMQwaMu3vLl%2BSg25FwZLpbfgc81Lnth50t7wuo%2BoMShWBltLtWLufTLd8byvgm%2F%2BGC8b9jX9PiGxU1aITn4N35HNr6PPJHBQnoM&X-Amz-Signature=1991c403dc66d60f51fa4cce7c95a20d823dc86ee4fbcdc56fbc7d188b6bb687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBJVBBM%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFRJQyT%2B04bBMKngY2lKIMO01mco1vtJg3cCGezP7EHwAiBfPWk4ma7i350uM0PBToT804OMowVoKHKVR7fv6GrJ%2BSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMJdnbE9EBRLe0EMZWKtwDwKjjzGOvT1Kq2FCqlWTHAun4Y1VepgW1Lpqau5pnh8jyLw8OxkqDu1ZO64HQCR12Zq9rPZdVYietej1qXlwUmnSY9xELwBlw8RKPgzryAAbk4NZCslIWWW%2F2DGqOUB4kOve4DEYToRDtLtKeDoE8YxU3QasOHC%2FFeK3qQpQ%2BqyKRoj1kCC3sjAsjyFlfTjYgX3fI2%2Fct22jF3RZancm2xYpXvHiRXFlktonOesbh6R%2Bfiu7U1CRSRC30XPAX40iwjT%2BZ6axMCwkll13MCJ5C6%2FajldEoKLjNFbJEOcKHXgL%2BXRN8bRaDtQSRNbXsALR1rOQVYN7mI%2Fipw7SwwtWo%2Fo7S3qXm4EXe6Ylai8OR6dvqPKQXIBYCI9Lw7P7RdNbrkSsda2VlZR9r1l79U06Tc5s52KHGaD9myDG36TKsUp0HGPVzXeEBUDlvf%2BpiPnAOjaQxO%2FPgVv2bNe0%2BgJKfKUisQdYFE6Ez%2Fcvo8bNOYTsY43Affl%2FDfNx64b9UYXd8%2Bj8Y%2FSKdlUMfUwjN44hohnH0pv5HtcBR3yV%2BzEMCzIyfGg%2BFqelIrAcJXvHSqddl23D1Mpd3PGPpTaGi2txpYzB8ezCt4akgnj6aoBCySZ2cYL88sUlujXyxGtEwsIjKyAY6pgEKJGoBZQ0QjRYGGHstlxuQZQwC%2BYecs4D5vlAFzrBaV02tI1zkdFFlKYOhU7r1ha6EXyTN6FSC%2FM6OWodWj6xFoPRQMbcFCjpo1s%2BWRhZy78cYcMxsGQKG3Pi0JXMQwaMu3vLl%2BSg25FwZLpbfgc81Lnth50t7wuo%2BoMShWBltLtWLufTLd8byvgm%2F%2BGC8b9jX9PiGxU1aITn4N35HNr6PPJHBQnoM&X-Amz-Signature=20a5e215853856cf62c635c1a610f0aa26819851b943ef2598795981a5a66b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBJVBBM%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFRJQyT%2B04bBMKngY2lKIMO01mco1vtJg3cCGezP7EHwAiBfPWk4ma7i350uM0PBToT804OMowVoKHKVR7fv6GrJ%2BSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMJdnbE9EBRLe0EMZWKtwDwKjjzGOvT1Kq2FCqlWTHAun4Y1VepgW1Lpqau5pnh8jyLw8OxkqDu1ZO64HQCR12Zq9rPZdVYietej1qXlwUmnSY9xELwBlw8RKPgzryAAbk4NZCslIWWW%2F2DGqOUB4kOve4DEYToRDtLtKeDoE8YxU3QasOHC%2FFeK3qQpQ%2BqyKRoj1kCC3sjAsjyFlfTjYgX3fI2%2Fct22jF3RZancm2xYpXvHiRXFlktonOesbh6R%2Bfiu7U1CRSRC30XPAX40iwjT%2BZ6axMCwkll13MCJ5C6%2FajldEoKLjNFbJEOcKHXgL%2BXRN8bRaDtQSRNbXsALR1rOQVYN7mI%2Fipw7SwwtWo%2Fo7S3qXm4EXe6Ylai8OR6dvqPKQXIBYCI9Lw7P7RdNbrkSsda2VlZR9r1l79U06Tc5s52KHGaD9myDG36TKsUp0HGPVzXeEBUDlvf%2BpiPnAOjaQxO%2FPgVv2bNe0%2BgJKfKUisQdYFE6Ez%2Fcvo8bNOYTsY43Affl%2FDfNx64b9UYXd8%2Bj8Y%2FSKdlUMfUwjN44hohnH0pv5HtcBR3yV%2BzEMCzIyfGg%2BFqelIrAcJXvHSqddl23D1Mpd3PGPpTaGi2txpYzB8ezCt4akgnj6aoBCySZ2cYL88sUlujXyxGtEwsIjKyAY6pgEKJGoBZQ0QjRYGGHstlxuQZQwC%2BYecs4D5vlAFzrBaV02tI1zkdFFlKYOhU7r1ha6EXyTN6FSC%2FM6OWodWj6xFoPRQMbcFCjpo1s%2BWRhZy78cYcMxsGQKG3Pi0JXMQwaMu3vLl%2BSg25FwZLpbfgc81Lnth50t7wuo%2BoMShWBltLtWLufTLd8byvgm%2F%2BGC8b9jX9PiGxU1aITn4N35HNr6PPJHBQnoM&X-Amz-Signature=1fea923e6771b074ef40f573cd31009d64e49f75784b809be7431a2c1c42efb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBJVBBM%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFRJQyT%2B04bBMKngY2lKIMO01mco1vtJg3cCGezP7EHwAiBfPWk4ma7i350uM0PBToT804OMowVoKHKVR7fv6GrJ%2BSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMJdnbE9EBRLe0EMZWKtwDwKjjzGOvT1Kq2FCqlWTHAun4Y1VepgW1Lpqau5pnh8jyLw8OxkqDu1ZO64HQCR12Zq9rPZdVYietej1qXlwUmnSY9xELwBlw8RKPgzryAAbk4NZCslIWWW%2F2DGqOUB4kOve4DEYToRDtLtKeDoE8YxU3QasOHC%2FFeK3qQpQ%2BqyKRoj1kCC3sjAsjyFlfTjYgX3fI2%2Fct22jF3RZancm2xYpXvHiRXFlktonOesbh6R%2Bfiu7U1CRSRC30XPAX40iwjT%2BZ6axMCwkll13MCJ5C6%2FajldEoKLjNFbJEOcKHXgL%2BXRN8bRaDtQSRNbXsALR1rOQVYN7mI%2Fipw7SwwtWo%2Fo7S3qXm4EXe6Ylai8OR6dvqPKQXIBYCI9Lw7P7RdNbrkSsda2VlZR9r1l79U06Tc5s52KHGaD9myDG36TKsUp0HGPVzXeEBUDlvf%2BpiPnAOjaQxO%2FPgVv2bNe0%2BgJKfKUisQdYFE6Ez%2Fcvo8bNOYTsY43Affl%2FDfNx64b9UYXd8%2Bj8Y%2FSKdlUMfUwjN44hohnH0pv5HtcBR3yV%2BzEMCzIyfGg%2BFqelIrAcJXvHSqddl23D1Mpd3PGPpTaGi2txpYzB8ezCt4akgnj6aoBCySZ2cYL88sUlujXyxGtEwsIjKyAY6pgEKJGoBZQ0QjRYGGHstlxuQZQwC%2BYecs4D5vlAFzrBaV02tI1zkdFFlKYOhU7r1ha6EXyTN6FSC%2FM6OWodWj6xFoPRQMbcFCjpo1s%2BWRhZy78cYcMxsGQKG3Pi0JXMQwaMu3vLl%2BSg25FwZLpbfgc81Lnth50t7wuo%2BoMShWBltLtWLufTLd8byvgm%2F%2BGC8b9jX9PiGxU1aITn4N35HNr6PPJHBQnoM&X-Amz-Signature=fb996bdd5ae6c4ca61ede4e4c05fd4f2572873b7bdee7cf8549f82ef17e75a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBJVBBM%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFRJQyT%2B04bBMKngY2lKIMO01mco1vtJg3cCGezP7EHwAiBfPWk4ma7i350uM0PBToT804OMowVoKHKVR7fv6GrJ%2BSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMJdnbE9EBRLe0EMZWKtwDwKjjzGOvT1Kq2FCqlWTHAun4Y1VepgW1Lpqau5pnh8jyLw8OxkqDu1ZO64HQCR12Zq9rPZdVYietej1qXlwUmnSY9xELwBlw8RKPgzryAAbk4NZCslIWWW%2F2DGqOUB4kOve4DEYToRDtLtKeDoE8YxU3QasOHC%2FFeK3qQpQ%2BqyKRoj1kCC3sjAsjyFlfTjYgX3fI2%2Fct22jF3RZancm2xYpXvHiRXFlktonOesbh6R%2Bfiu7U1CRSRC30XPAX40iwjT%2BZ6axMCwkll13MCJ5C6%2FajldEoKLjNFbJEOcKHXgL%2BXRN8bRaDtQSRNbXsALR1rOQVYN7mI%2Fipw7SwwtWo%2Fo7S3qXm4EXe6Ylai8OR6dvqPKQXIBYCI9Lw7P7RdNbrkSsda2VlZR9r1l79U06Tc5s52KHGaD9myDG36TKsUp0HGPVzXeEBUDlvf%2BpiPnAOjaQxO%2FPgVv2bNe0%2BgJKfKUisQdYFE6Ez%2Fcvo8bNOYTsY43Affl%2FDfNx64b9UYXd8%2Bj8Y%2FSKdlUMfUwjN44hohnH0pv5HtcBR3yV%2BzEMCzIyfGg%2BFqelIrAcJXvHSqddl23D1Mpd3PGPpTaGi2txpYzB8ezCt4akgnj6aoBCySZ2cYL88sUlujXyxGtEwsIjKyAY6pgEKJGoBZQ0QjRYGGHstlxuQZQwC%2BYecs4D5vlAFzrBaV02tI1zkdFFlKYOhU7r1ha6EXyTN6FSC%2FM6OWodWj6xFoPRQMbcFCjpo1s%2BWRhZy78cYcMxsGQKG3Pi0JXMQwaMu3vLl%2BSg25FwZLpbfgc81Lnth50t7wuo%2BoMShWBltLtWLufTLd8byvgm%2F%2BGC8b9jX9PiGxU1aITn4N35HNr6PPJHBQnoM&X-Amz-Signature=7fbca8ca809e3d6e98ec3dca1fdfbd0d1e2723dac894204629ba512e81b1e51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIMYXBH%2F20251111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251111T010330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDIjbSToqUwPEkAxKgBCB1vzdxuc2EfLP28PFPE74vYVgIgUrX%2Fq%2FLmCTb%2F7T2Kz4ptxgOv%2F3RZaNxCJtvrPwx8p9Iq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDBzQOaXhdfRORh7NnCrcA04v1gWXDpIap%2BXWidbGaQgdT%2Fh%2BDHyA08%2FTXTRHG1OgB5k3Lj3L85P0AiTI6sgbpIzM9uv6IwDyuhEGSkyiEHpi%2BaWcN17PcJWsd6Z4%2BN%2BQu9qYt2o3p4t8D3O1QXUP1buPak%2BEblSPRDxajj47SA%2FQ6DTka%2BnVM3slqgEu1ub0mxf8zSHZgNwzlVers%2FaNfLr6Ci0IKoNJrDdI37zoI9Fj1aQBAp4oCir%2BaccHhpOa1aabfqdhe9VR7dbizr6Ow3AdLHCScIParPqAbNGJXSXWx6d02odeCzfUHhNETn5IHJMVglujvnJ7qeR03u7IswkUWy%2FtP%2BiXDZcUxxrl2ERJcCPDlEWbkCeHnW9wOTKP6U1cNDFS4Mi3iAbmWbff4Lu0jh6JYyVhx%2BsBR1B8Xvwmk8xWzvwPPXpqS5DS7jv6QCSIxuBnhuur89KPHltv72Zy1aCteMMoiEfzGprsgYiTqSIaX1rU2D5F1gjcep%2FhmPaAWc2JhvLnU5psS7nHY7QIxXVEL2aqGLeB5owWf4SkYgJyBHHpn3DajMMGAdQMGlOymuB5aWjuJ2c6XFLCEBuXrgPUteuzEWDJ1JHe5Quy8xzvvQtoEzi3zGQgRH8Byy%2BvCcjsG1dxClu1MLCIysgGOqUBDIxscv7TJYcZXn6YrBc120lWjJsTMYhyTio777vhr%2FtJnR7YCENIOmvziDMhSv5nVdzPmjbaLaVnMcXmGYTF%2FlofSkTkA8qrwNN7M4ky3kubIvowgAndFBdA0JE5BSov09E47m5LYgDh9ugPCeQO3tDg5kegPxbcmdvm82IMpMjVCrvRhRsI1thLZ3Zcgl6lvP76qVs38tJtiHoIWiXnutNAciTs&X-Amz-Signature=b3c9f34f64b547227784989b2b8fa7a90af4689c3f81e1069ad45eeae9669680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

