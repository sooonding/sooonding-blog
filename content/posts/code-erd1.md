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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LBTWG4%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAnifJULy5DuEzXtm00fiSwuvKr2accO9GymMIP8m4%2BIAiEArJSNjJLxgYgrb7dPwqT7yHbNSpos6Y22vJ94i1ncdp8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGgSXB6x6FzDmCRYlyrcA77qcplRIOgLakWfHKYrnwsY%2F4YTwY9Z37EO5J22eU2PAsI%2FltvYQ5GrBak0WNhNV9sp7uf4gsqTZzOj6AaQ61iHJ3Wnae5Po4%2F9qefx%2FjUNutM%2FXerhasYEEjNZrakOMwgbolVlkBLP00kiQRElx0dl1i%2FWxkAWhC6J5u0UPGVBp9ZEn9WzFFA0f1wD46y0NM%2BrGcmL0WAiY%2BV6xKv3vHi103YcPzj1XYdLxosQoQMJD%2FvyGGK4QyyUebA%2BfcmiySttb11%2Fqt%2F63BddXuEnGmMqFCew%2BWVYP9qGLy8MqnT7zW1O5Q4VPFrqUQsZ%2BXp7Cv9T8xtvygIcynUuQU29zCIXawqwoZt%2Byl6hC9tvyu90yGYL19RcRo1gog9M6%2F0G2bUVPp%2B%2BesDGeVbSpA6IjGLAWO64EgbVhVa4v04hU%2FjhiveasUQhziUIYygnuNj4YF27vgJ%2BLAK1Y%2Fvit2eS7pH1mnhuIoyohxZQh%2FzXtOGaUsr1lNS9scQslzErApu23vlpQ3VwfleE0BbP%2BNK6gbvd4yg2wH0jyYfUKrXxpYK7hzOq59TjTN0QvEutfDQwyESRrtHLdZxlm9M444wZpD7r%2FEWAgPh5lyxF8pXPggrLHG7%2FRge1O57F5JQXMK2Lm9MGOqUBjaCmXY%2BT1vTB%2BfUz3jw8Lf655WtV6SiyTvPVrAFM0W7eFHhWkEzdB1cDMq7qI4xmFU8ysFUA6%2BAplSLPqx%2FJTrPystLjXi68TwTOPL5lgWPIMKbSW2zh3ABAzgovZ8VjVPfjwLGVTNueA9OOp2IHj128Fdzk48DKdJWrdIAbtF8nDaHe8PAgcqjqzAZ8xhmfD6nAnkhgmKNViIiXiMdLUQDcpXCD&X-Amz-Signature=9c1bf7cc3d8eb938ed794208ec80a8165f7979f35e2fc4ba89f4590a41d20613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5EH77K%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD%2FS5I7Pw1voDz40u89hJKHCl7VnJqCQIXuq8A%2B%2FWrklgIhAN%2F2maalfe%2BRDISlcPHqjo9V8KagCoFXu5YoYgmbOHhdKv8DCEQQABoMNjM3NDIzMTgzODA1Igzx2iw0vQaOWyEIAgQq3AOqv2WfAHqSoQKdrrm4QHBbsXxBy%2B%2B12qPhPnWglL7ge%2B%2FGddOD4QokACreZFIN9Bf1%2F423Taw%2BtpQ1JJEgRWE2Ab5gNPpbzr91GTvb7UUDeC47SIOaXgxWyoYbpRAwaAzTmDcY8M7gaATzGqYu4KxggD%2FxVSQgCM9OhqHXKGOp8Xxn1tNbt9brOdChy5n%2B8gLrYYnUELyK8ylmoTOdAgbEs6NTZLIFN1LVU9MfBXXH5VB5u33rGmfVfrS6a5zo9uryQQ16s91VLsxyIuDQlAtRPFo0CIYUffzYqsA8xaS3nXQtelAE8m0FqB%2B6BpLyPcTW9pacaNE4Xr8zOMqnsM%2FpdMmrlmYVe5SCzR72H2%2BRKB%2BsaRXsKRW5kpyEDgMMGN51V2G63E6TdNZXbJJwbyJSmIaq1EGzoB4BD60rzAJLJ4EC5rtbq5TxqQauRfOeyeWGmP8149Ji3KMEHOF4bvqOg5nyXOxUkrn4gOrgWFU1xYbWx5lTaOcdF8NEGOY65Q1NR%2BaPxoOYRm241HXIqCRKm9f07Q3O7Wux%2BcL6WSPBqYRRC98DxC9%2FZKb4muzsdQLC3FOdYsatMv%2BX0F8vJIFDC5nXHgF069WpCZ3EHXvqCL8PkbnPqV5k5LyNTzCNjJvTBjqkAczd7rtoaBhRK1pDT%2FDtsb2gxS6TWQJdeRD%2F2o3DF0vx5NlwbH4UcGWbwJWVWmNb6OuakiRC%2FfuWj5mKhn%2BpfhXdZCQMFFh8KmsIyUcB51xn750TzGh9RTTsczEo2s2SIE12dDm5TmHjPO3lEKiGhptFZj0HPX5gFlD7KkrQh8tvF%2BMIiIZFKi4qj%2FQk9o0iPDG3beO%2FSSf9kvPPqpqRkoJsGd9f&X-Amz-Signature=0386a0f32cf61b78fc3e6b22cb2c72ed08a4be4977bf6ac3e81fe51859d55685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5EH77K%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD%2FS5I7Pw1voDz40u89hJKHCl7VnJqCQIXuq8A%2B%2FWrklgIhAN%2F2maalfe%2BRDISlcPHqjo9V8KagCoFXu5YoYgmbOHhdKv8DCEQQABoMNjM3NDIzMTgzODA1Igzx2iw0vQaOWyEIAgQq3AOqv2WfAHqSoQKdrrm4QHBbsXxBy%2B%2B12qPhPnWglL7ge%2B%2FGddOD4QokACreZFIN9Bf1%2F423Taw%2BtpQ1JJEgRWE2Ab5gNPpbzr91GTvb7UUDeC47SIOaXgxWyoYbpRAwaAzTmDcY8M7gaATzGqYu4KxggD%2FxVSQgCM9OhqHXKGOp8Xxn1tNbt9brOdChy5n%2B8gLrYYnUELyK8ylmoTOdAgbEs6NTZLIFN1LVU9MfBXXH5VB5u33rGmfVfrS6a5zo9uryQQ16s91VLsxyIuDQlAtRPFo0CIYUffzYqsA8xaS3nXQtelAE8m0FqB%2B6BpLyPcTW9pacaNE4Xr8zOMqnsM%2FpdMmrlmYVe5SCzR72H2%2BRKB%2BsaRXsKRW5kpyEDgMMGN51V2G63E6TdNZXbJJwbyJSmIaq1EGzoB4BD60rzAJLJ4EC5rtbq5TxqQauRfOeyeWGmP8149Ji3KMEHOF4bvqOg5nyXOxUkrn4gOrgWFU1xYbWx5lTaOcdF8NEGOY65Q1NR%2BaPxoOYRm241HXIqCRKm9f07Q3O7Wux%2BcL6WSPBqYRRC98DxC9%2FZKb4muzsdQLC3FOdYsatMv%2BX0F8vJIFDC5nXHgF069WpCZ3EHXvqCL8PkbnPqV5k5LyNTzCNjJvTBjqkAczd7rtoaBhRK1pDT%2FDtsb2gxS6TWQJdeRD%2F2o3DF0vx5NlwbH4UcGWbwJWVWmNb6OuakiRC%2FfuWj5mKhn%2BpfhXdZCQMFFh8KmsIyUcB51xn750TzGh9RTTsczEo2s2SIE12dDm5TmHjPO3lEKiGhptFZj0HPX5gFlD7KkrQh8tvF%2BMIiIZFKi4qj%2FQk9o0iPDG3beO%2FSSf9kvPPqpqRkoJsGd9f&X-Amz-Signature=504927eef42078851cce1bbe7189e6b91e6f523771d890afbbce079b473c4692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5EH77K%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD%2FS5I7Pw1voDz40u89hJKHCl7VnJqCQIXuq8A%2B%2FWrklgIhAN%2F2maalfe%2BRDISlcPHqjo9V8KagCoFXu5YoYgmbOHhdKv8DCEQQABoMNjM3NDIzMTgzODA1Igzx2iw0vQaOWyEIAgQq3AOqv2WfAHqSoQKdrrm4QHBbsXxBy%2B%2B12qPhPnWglL7ge%2B%2FGddOD4QokACreZFIN9Bf1%2F423Taw%2BtpQ1JJEgRWE2Ab5gNPpbzr91GTvb7UUDeC47SIOaXgxWyoYbpRAwaAzTmDcY8M7gaATzGqYu4KxggD%2FxVSQgCM9OhqHXKGOp8Xxn1tNbt9brOdChy5n%2B8gLrYYnUELyK8ylmoTOdAgbEs6NTZLIFN1LVU9MfBXXH5VB5u33rGmfVfrS6a5zo9uryQQ16s91VLsxyIuDQlAtRPFo0CIYUffzYqsA8xaS3nXQtelAE8m0FqB%2B6BpLyPcTW9pacaNE4Xr8zOMqnsM%2FpdMmrlmYVe5SCzR72H2%2BRKB%2BsaRXsKRW5kpyEDgMMGN51V2G63E6TdNZXbJJwbyJSmIaq1EGzoB4BD60rzAJLJ4EC5rtbq5TxqQauRfOeyeWGmP8149Ji3KMEHOF4bvqOg5nyXOxUkrn4gOrgWFU1xYbWx5lTaOcdF8NEGOY65Q1NR%2BaPxoOYRm241HXIqCRKm9f07Q3O7Wux%2BcL6WSPBqYRRC98DxC9%2FZKb4muzsdQLC3FOdYsatMv%2BX0F8vJIFDC5nXHgF069WpCZ3EHXvqCL8PkbnPqV5k5LyNTzCNjJvTBjqkAczd7rtoaBhRK1pDT%2FDtsb2gxS6TWQJdeRD%2F2o3DF0vx5NlwbH4UcGWbwJWVWmNb6OuakiRC%2FfuWj5mKhn%2BpfhXdZCQMFFh8KmsIyUcB51xn750TzGh9RTTsczEo2s2SIE12dDm5TmHjPO3lEKiGhptFZj0HPX5gFlD7KkrQh8tvF%2BMIiIZFKi4qj%2FQk9o0iPDG3beO%2FSSf9kvPPqpqRkoJsGd9f&X-Amz-Signature=d8e3c46263634f8ef6f17c5c4304d970a48771c673e081e1dca0bcdb90fd2332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5EH77K%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD%2FS5I7Pw1voDz40u89hJKHCl7VnJqCQIXuq8A%2B%2FWrklgIhAN%2F2maalfe%2BRDISlcPHqjo9V8KagCoFXu5YoYgmbOHhdKv8DCEQQABoMNjM3NDIzMTgzODA1Igzx2iw0vQaOWyEIAgQq3AOqv2WfAHqSoQKdrrm4QHBbsXxBy%2B%2B12qPhPnWglL7ge%2B%2FGddOD4QokACreZFIN9Bf1%2F423Taw%2BtpQ1JJEgRWE2Ab5gNPpbzr91GTvb7UUDeC47SIOaXgxWyoYbpRAwaAzTmDcY8M7gaATzGqYu4KxggD%2FxVSQgCM9OhqHXKGOp8Xxn1tNbt9brOdChy5n%2B8gLrYYnUELyK8ylmoTOdAgbEs6NTZLIFN1LVU9MfBXXH5VB5u33rGmfVfrS6a5zo9uryQQ16s91VLsxyIuDQlAtRPFo0CIYUffzYqsA8xaS3nXQtelAE8m0FqB%2B6BpLyPcTW9pacaNE4Xr8zOMqnsM%2FpdMmrlmYVe5SCzR72H2%2BRKB%2BsaRXsKRW5kpyEDgMMGN51V2G63E6TdNZXbJJwbyJSmIaq1EGzoB4BD60rzAJLJ4EC5rtbq5TxqQauRfOeyeWGmP8149Ji3KMEHOF4bvqOg5nyXOxUkrn4gOrgWFU1xYbWx5lTaOcdF8NEGOY65Q1NR%2BaPxoOYRm241HXIqCRKm9f07Q3O7Wux%2BcL6WSPBqYRRC98DxC9%2FZKb4muzsdQLC3FOdYsatMv%2BX0F8vJIFDC5nXHgF069WpCZ3EHXvqCL8PkbnPqV5k5LyNTzCNjJvTBjqkAczd7rtoaBhRK1pDT%2FDtsb2gxS6TWQJdeRD%2F2o3DF0vx5NlwbH4UcGWbwJWVWmNb6OuakiRC%2FfuWj5mKhn%2BpfhXdZCQMFFh8KmsIyUcB51xn750TzGh9RTTsczEo2s2SIE12dDm5TmHjPO3lEKiGhptFZj0HPX5gFlD7KkrQh8tvF%2BMIiIZFKi4qj%2FQk9o0iPDG3beO%2FSSf9kvPPqpqRkoJsGd9f&X-Amz-Signature=a506d574206d7ee2217081f7accee81b3f9a6f0f4786ad35719e1cb8da98fbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5EH77K%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD%2FS5I7Pw1voDz40u89hJKHCl7VnJqCQIXuq8A%2B%2FWrklgIhAN%2F2maalfe%2BRDISlcPHqjo9V8KagCoFXu5YoYgmbOHhdKv8DCEQQABoMNjM3NDIzMTgzODA1Igzx2iw0vQaOWyEIAgQq3AOqv2WfAHqSoQKdrrm4QHBbsXxBy%2B%2B12qPhPnWglL7ge%2B%2FGddOD4QokACreZFIN9Bf1%2F423Taw%2BtpQ1JJEgRWE2Ab5gNPpbzr91GTvb7UUDeC47SIOaXgxWyoYbpRAwaAzTmDcY8M7gaATzGqYu4KxggD%2FxVSQgCM9OhqHXKGOp8Xxn1tNbt9brOdChy5n%2B8gLrYYnUELyK8ylmoTOdAgbEs6NTZLIFN1LVU9MfBXXH5VB5u33rGmfVfrS6a5zo9uryQQ16s91VLsxyIuDQlAtRPFo0CIYUffzYqsA8xaS3nXQtelAE8m0FqB%2B6BpLyPcTW9pacaNE4Xr8zOMqnsM%2FpdMmrlmYVe5SCzR72H2%2BRKB%2BsaRXsKRW5kpyEDgMMGN51V2G63E6TdNZXbJJwbyJSmIaq1EGzoB4BD60rzAJLJ4EC5rtbq5TxqQauRfOeyeWGmP8149Ji3KMEHOF4bvqOg5nyXOxUkrn4gOrgWFU1xYbWx5lTaOcdF8NEGOY65Q1NR%2BaPxoOYRm241HXIqCRKm9f07Q3O7Wux%2BcL6WSPBqYRRC98DxC9%2FZKb4muzsdQLC3FOdYsatMv%2BX0F8vJIFDC5nXHgF069WpCZ3EHXvqCL8PkbnPqV5k5LyNTzCNjJvTBjqkAczd7rtoaBhRK1pDT%2FDtsb2gxS6TWQJdeRD%2F2o3DF0vx5NlwbH4UcGWbwJWVWmNb6OuakiRC%2FfuWj5mKhn%2BpfhXdZCQMFFh8KmsIyUcB51xn750TzGh9RTTsczEo2s2SIE12dDm5TmHjPO3lEKiGhptFZj0HPX5gFlD7KkrQh8tvF%2BMIiIZFKi4qj%2FQk9o0iPDG3beO%2FSSf9kvPPqpqRkoJsGd9f&X-Amz-Signature=7bd2eec4e2f9a2540e2d690f413275c4e497a4c6655f4bbdebced09b721aa183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LBTWG4%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T025438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAnifJULy5DuEzXtm00fiSwuvKr2accO9GymMIP8m4%2BIAiEArJSNjJLxgYgrb7dPwqT7yHbNSpos6Y22vJ94i1ncdp8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGgSXB6x6FzDmCRYlyrcA77qcplRIOgLakWfHKYrnwsY%2F4YTwY9Z37EO5J22eU2PAsI%2FltvYQ5GrBak0WNhNV9sp7uf4gsqTZzOj6AaQ61iHJ3Wnae5Po4%2F9qefx%2FjUNutM%2FXerhasYEEjNZrakOMwgbolVlkBLP00kiQRElx0dl1i%2FWxkAWhC6J5u0UPGVBp9ZEn9WzFFA0f1wD46y0NM%2BrGcmL0WAiY%2BV6xKv3vHi103YcPzj1XYdLxosQoQMJD%2FvyGGK4QyyUebA%2BfcmiySttb11%2Fqt%2F63BddXuEnGmMqFCew%2BWVYP9qGLy8MqnT7zW1O5Q4VPFrqUQsZ%2BXp7Cv9T8xtvygIcynUuQU29zCIXawqwoZt%2Byl6hC9tvyu90yGYL19RcRo1gog9M6%2F0G2bUVPp%2B%2BesDGeVbSpA6IjGLAWO64EgbVhVa4v04hU%2FjhiveasUQhziUIYygnuNj4YF27vgJ%2BLAK1Y%2Fvit2eS7pH1mnhuIoyohxZQh%2FzXtOGaUsr1lNS9scQslzErApu23vlpQ3VwfleE0BbP%2BNK6gbvd4yg2wH0jyYfUKrXxpYK7hzOq59TjTN0QvEutfDQwyESRrtHLdZxlm9M444wZpD7r%2FEWAgPh5lyxF8pXPggrLHG7%2FRge1O57F5JQXMK2Lm9MGOqUBjaCmXY%2BT1vTB%2BfUz3jw8Lf655WtV6SiyTvPVrAFM0W7eFHhWkEzdB1cDMq7qI4xmFU8ysFUA6%2BAplSLPqx%2FJTrPystLjXi68TwTOPL5lgWPIMKbSW2zh3ABAzgovZ8VjVPfjwLGVTNueA9OOp2IHj128Fdzk48DKdJWrdIAbtF8nDaHe8PAgcqjqzAZ8xhmfD6nAnkhgmKNViIiXiMdLUQDcpXCD&X-Amz-Signature=604507ab601da53912a5ca9b3f91fc19e89915603f8a51920a3fb229dea5d85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

