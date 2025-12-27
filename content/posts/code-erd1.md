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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5M7CR22%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T010442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUZcnkQv3KePTacHKReS8t0%2FgllgUKvx0vNZpOoR9SUgIhAL6DQfIKSJZ%2FjrgsLyjS5hXK3fqRpPao6kDITrMSDAVaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzrrKUgkDuyEN53DV4q3ANY5oeZ61SreoJLbwxinddKKdknps7eeD1tTWmoekef04awiQLPw2F7pkrVufl9I6%2FtjK6bmrt5b0yEaIEnuvl5hOn8Dw6Fwv2cqaUardLiBdlcK3bZnRjnMMZ7u0ghpsADb9p5yniIkehdabCfca6ttugCIGl03Iz%2FcoU4PneooNg78J2IoKidSo4mA8YUQIhqdSnE6V4hJzGEmziGGRaa9bN3N%2FUpRMLNXs18J9ei97phwFYYH2LtAGCQSufJyZsryHbeoU3Ix28LaHDEOGHWF6GP0522KroWD1IuG67mLG7w4MqTLa1UBbnMUpfgqqBTSBJ5pXA3jLxumqVrz%2BMYBTUmJ55QrvBJIUtO%2BQOUGuZHnf9nWgCUY%2BoyYUVXgWk0VOWczaMI5UYAeekb0Pvu57N9m5DApwSkrvo1DbmmkGfLQYMYTmcCn3bLfb%2BMLg%2F3jSHC3XrZQYic9L4Z99uFYJaaM2CyfFLsxI9XylUuCrolFACeVgT9dWMVkUfgXz5RXbaYILQmxAy46bSTE3tPCECPCiHDE3nx5JR%2FMYQe9%2BsJKh5M7ATi4la0M1lLsRLV%2FVZPOqUioZg60TYzqEQziJ244ijLJiOnbidLvTD4%2FnZj3%2Bg2%2FDS9tR1tyTC42LzKBjqkAVBPM%2BRoSbw4Q6%2Fhq6AzvGIHReBnrkN40bTerAzuloX8keARf%2B2ZSUk68lvShoeJJP1maj3SrxwBnRNjANIZYL2h5CpqZj2IWEIlqZhiNu5jde4%2B6z7AsloNpb4qJber7cBbYSIT9qgz2d0UkRcZChtAU6%2B25W%2BnHavGgpaB%2FkwAIP9lk4IDY%2BmXtaaFHV770q02UeEwBIKyVaizPgMwUJKTxQdy&X-Amz-Signature=5418e53cdcb2283df8c4b8b8ff5a77dfde4fd84c1b5adb775eafecb7abc150e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGICEF5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T010443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHL3HqQ1GybbegOn62XaDyogu1XlXDSvNy%2BNZJvVyAfAiEAnusxCp6gwEhZFNtdUKFjfigfDBE1UsocOoWrec908E8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHmc2erCGloaNFET5ircAyPh6w01EZZMm71SWZa%2FMcb5uGXEmgLMsLMNIt1JuQcNtlITpSdb18ts24R%2FL4spPZWYDcQO%2FJ%2Fuig4FJiO7d4Q3cFZJGvgsumx6V0q2TmW0s2J2higDKM7hx8%2FocFv0wq2lD%2BeWgabzZ5QPzgZrP%2BFx8SHxJqGopaOU3N%2F8c0VAnoq141t8V4ft72lqwg4U%2FndUbnssAkBoIrCo8ujss1HAJt0qaLxPQgH8GnLKYip4TIhqlA6XZLEzQFDymdwGa5tcyHr6QhbB972fSggi4MrzCiBYiITiO2tFq69LvYxrwparOSpm6jX11WMBN4yxhC%2Byvb03E5sx0TrCRV1hTRITwr%2BMj9DLL2wF%2BQ%2Bo2Tnd5Npktepp2ExiFYy8p7N3sydSCMeVemTN9WkjHlJblt7vvNmZ1C8%2Bzps%2B7ThIO9MUKQK0lQduv4dyYR9%2Fz3uYuKa2mmgpupZgOKOfnvQUZwsj9gObc%2FQccgiR9z5PlzMHw1n1mhwDmIK0PblKMq1qTNhhppwPI7glLvqCXXVJ67J27HCdL68s3FzdWwDUoqOKRxzEFOTwSYdrVSrubrKK%2BcZw%2BHTr3a9hZZl1Z5QAwsjGbjG3GSHGUlKRjaRJHEhjBNYpMo7jwsBALSA8MNnSvMoGOqUB2pPDxS10x2kEJ9pTTgDjXfGinxUmGJ552ov9ltdhZMwAtr3AMdHrTu2ZjkJFe3dqyBsmBZCJcJWzCm8zoCPPU3sLQitsaGmcO4Dk4cs8oBFqw0fxyiJFI%2FT4PJw%2BpaSTgpxL6QK1mkRuG46Gh3qZFItB0fUue9hnZYS1htFfzAIOWF%2FrCAc0fuAgvUbKeC1iXZxDtwVoOQw193pAo2yLZem%2ByotI&X-Amz-Signature=f11078d2abb11378d3cf29383f387b9431fce56b5301bbf56fcadb16bb2ac8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGICEF5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T010443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHL3HqQ1GybbegOn62XaDyogu1XlXDSvNy%2BNZJvVyAfAiEAnusxCp6gwEhZFNtdUKFjfigfDBE1UsocOoWrec908E8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHmc2erCGloaNFET5ircAyPh6w01EZZMm71SWZa%2FMcb5uGXEmgLMsLMNIt1JuQcNtlITpSdb18ts24R%2FL4spPZWYDcQO%2FJ%2Fuig4FJiO7d4Q3cFZJGvgsumx6V0q2TmW0s2J2higDKM7hx8%2FocFv0wq2lD%2BeWgabzZ5QPzgZrP%2BFx8SHxJqGopaOU3N%2F8c0VAnoq141t8V4ft72lqwg4U%2FndUbnssAkBoIrCo8ujss1HAJt0qaLxPQgH8GnLKYip4TIhqlA6XZLEzQFDymdwGa5tcyHr6QhbB972fSggi4MrzCiBYiITiO2tFq69LvYxrwparOSpm6jX11WMBN4yxhC%2Byvb03E5sx0TrCRV1hTRITwr%2BMj9DLL2wF%2BQ%2Bo2Tnd5Npktepp2ExiFYy8p7N3sydSCMeVemTN9WkjHlJblt7vvNmZ1C8%2Bzps%2B7ThIO9MUKQK0lQduv4dyYR9%2Fz3uYuKa2mmgpupZgOKOfnvQUZwsj9gObc%2FQccgiR9z5PlzMHw1n1mhwDmIK0PblKMq1qTNhhppwPI7glLvqCXXVJ67J27HCdL68s3FzdWwDUoqOKRxzEFOTwSYdrVSrubrKK%2BcZw%2BHTr3a9hZZl1Z5QAwsjGbjG3GSHGUlKRjaRJHEhjBNYpMo7jwsBALSA8MNnSvMoGOqUB2pPDxS10x2kEJ9pTTgDjXfGinxUmGJ552ov9ltdhZMwAtr3AMdHrTu2ZjkJFe3dqyBsmBZCJcJWzCm8zoCPPU3sLQitsaGmcO4Dk4cs8oBFqw0fxyiJFI%2FT4PJw%2BpaSTgpxL6QK1mkRuG46Gh3qZFItB0fUue9hnZYS1htFfzAIOWF%2FrCAc0fuAgvUbKeC1iXZxDtwVoOQw193pAo2yLZem%2ByotI&X-Amz-Signature=0c1dcdc6cc35d3ef30afc69a30f10169d5b93d306cd1179a36c471b87832f0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGICEF5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T010443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHL3HqQ1GybbegOn62XaDyogu1XlXDSvNy%2BNZJvVyAfAiEAnusxCp6gwEhZFNtdUKFjfigfDBE1UsocOoWrec908E8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHmc2erCGloaNFET5ircAyPh6w01EZZMm71SWZa%2FMcb5uGXEmgLMsLMNIt1JuQcNtlITpSdb18ts24R%2FL4spPZWYDcQO%2FJ%2Fuig4FJiO7d4Q3cFZJGvgsumx6V0q2TmW0s2J2higDKM7hx8%2FocFv0wq2lD%2BeWgabzZ5QPzgZrP%2BFx8SHxJqGopaOU3N%2F8c0VAnoq141t8V4ft72lqwg4U%2FndUbnssAkBoIrCo8ujss1HAJt0qaLxPQgH8GnLKYip4TIhqlA6XZLEzQFDymdwGa5tcyHr6QhbB972fSggi4MrzCiBYiITiO2tFq69LvYxrwparOSpm6jX11WMBN4yxhC%2Byvb03E5sx0TrCRV1hTRITwr%2BMj9DLL2wF%2BQ%2Bo2Tnd5Npktepp2ExiFYy8p7N3sydSCMeVemTN9WkjHlJblt7vvNmZ1C8%2Bzps%2B7ThIO9MUKQK0lQduv4dyYR9%2Fz3uYuKa2mmgpupZgOKOfnvQUZwsj9gObc%2FQccgiR9z5PlzMHw1n1mhwDmIK0PblKMq1qTNhhppwPI7glLvqCXXVJ67J27HCdL68s3FzdWwDUoqOKRxzEFOTwSYdrVSrubrKK%2BcZw%2BHTr3a9hZZl1Z5QAwsjGbjG3GSHGUlKRjaRJHEhjBNYpMo7jwsBALSA8MNnSvMoGOqUB2pPDxS10x2kEJ9pTTgDjXfGinxUmGJ552ov9ltdhZMwAtr3AMdHrTu2ZjkJFe3dqyBsmBZCJcJWzCm8zoCPPU3sLQitsaGmcO4Dk4cs8oBFqw0fxyiJFI%2FT4PJw%2BpaSTgpxL6QK1mkRuG46Gh3qZFItB0fUue9hnZYS1htFfzAIOWF%2FrCAc0fuAgvUbKeC1iXZxDtwVoOQw193pAo2yLZem%2ByotI&X-Amz-Signature=8299969437b69cb079353785f4d5bf536d44dc4df710b16b65f3a45e12853e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGICEF5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T010443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHL3HqQ1GybbegOn62XaDyogu1XlXDSvNy%2BNZJvVyAfAiEAnusxCp6gwEhZFNtdUKFjfigfDBE1UsocOoWrec908E8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHmc2erCGloaNFET5ircAyPh6w01EZZMm71SWZa%2FMcb5uGXEmgLMsLMNIt1JuQcNtlITpSdb18ts24R%2FL4spPZWYDcQO%2FJ%2Fuig4FJiO7d4Q3cFZJGvgsumx6V0q2TmW0s2J2higDKM7hx8%2FocFv0wq2lD%2BeWgabzZ5QPzgZrP%2BFx8SHxJqGopaOU3N%2F8c0VAnoq141t8V4ft72lqwg4U%2FndUbnssAkBoIrCo8ujss1HAJt0qaLxPQgH8GnLKYip4TIhqlA6XZLEzQFDymdwGa5tcyHr6QhbB972fSggi4MrzCiBYiITiO2tFq69LvYxrwparOSpm6jX11WMBN4yxhC%2Byvb03E5sx0TrCRV1hTRITwr%2BMj9DLL2wF%2BQ%2Bo2Tnd5Npktepp2ExiFYy8p7N3sydSCMeVemTN9WkjHlJblt7vvNmZ1C8%2Bzps%2B7ThIO9MUKQK0lQduv4dyYR9%2Fz3uYuKa2mmgpupZgOKOfnvQUZwsj9gObc%2FQccgiR9z5PlzMHw1n1mhwDmIK0PblKMq1qTNhhppwPI7glLvqCXXVJ67J27HCdL68s3FzdWwDUoqOKRxzEFOTwSYdrVSrubrKK%2BcZw%2BHTr3a9hZZl1Z5QAwsjGbjG3GSHGUlKRjaRJHEhjBNYpMo7jwsBALSA8MNnSvMoGOqUB2pPDxS10x2kEJ9pTTgDjXfGinxUmGJ552ov9ltdhZMwAtr3AMdHrTu2ZjkJFe3dqyBsmBZCJcJWzCm8zoCPPU3sLQitsaGmcO4Dk4cs8oBFqw0fxyiJFI%2FT4PJw%2BpaSTgpxL6QK1mkRuG46Gh3qZFItB0fUue9hnZYS1htFfzAIOWF%2FrCAc0fuAgvUbKeC1iXZxDtwVoOQw193pAo2yLZem%2ByotI&X-Amz-Signature=829036bed6b75e105a277cc32b340969620a89401c9200cc7af36cb0fba07909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHGICEF5%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T010443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHL3HqQ1GybbegOn62XaDyogu1XlXDSvNy%2BNZJvVyAfAiEAnusxCp6gwEhZFNtdUKFjfigfDBE1UsocOoWrec908E8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHmc2erCGloaNFET5ircAyPh6w01EZZMm71SWZa%2FMcb5uGXEmgLMsLMNIt1JuQcNtlITpSdb18ts24R%2FL4spPZWYDcQO%2FJ%2Fuig4FJiO7d4Q3cFZJGvgsumx6V0q2TmW0s2J2higDKM7hx8%2FocFv0wq2lD%2BeWgabzZ5QPzgZrP%2BFx8SHxJqGopaOU3N%2F8c0VAnoq141t8V4ft72lqwg4U%2FndUbnssAkBoIrCo8ujss1HAJt0qaLxPQgH8GnLKYip4TIhqlA6XZLEzQFDymdwGa5tcyHr6QhbB972fSggi4MrzCiBYiITiO2tFq69LvYxrwparOSpm6jX11WMBN4yxhC%2Byvb03E5sx0TrCRV1hTRITwr%2BMj9DLL2wF%2BQ%2Bo2Tnd5Npktepp2ExiFYy8p7N3sydSCMeVemTN9WkjHlJblt7vvNmZ1C8%2Bzps%2B7ThIO9MUKQK0lQduv4dyYR9%2Fz3uYuKa2mmgpupZgOKOfnvQUZwsj9gObc%2FQccgiR9z5PlzMHw1n1mhwDmIK0PblKMq1qTNhhppwPI7glLvqCXXVJ67J27HCdL68s3FzdWwDUoqOKRxzEFOTwSYdrVSrubrKK%2BcZw%2BHTr3a9hZZl1Z5QAwsjGbjG3GSHGUlKRjaRJHEhjBNYpMo7jwsBALSA8MNnSvMoGOqUB2pPDxS10x2kEJ9pTTgDjXfGinxUmGJ552ov9ltdhZMwAtr3AMdHrTu2ZjkJFe3dqyBsmBZCJcJWzCm8zoCPPU3sLQitsaGmcO4Dk4cs8oBFqw0fxyiJFI%2FT4PJw%2BpaSTgpxL6QK1mkRuG46Gh3qZFItB0fUue9hnZYS1htFfzAIOWF%2FrCAc0fuAgvUbKeC1iXZxDtwVoOQw193pAo2yLZem%2ByotI&X-Amz-Signature=b7c4e8c39596f607b9ba71ed433c67f37502e3d070e1e655bb4bf40510e33694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5M7CR22%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T010442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUZcnkQv3KePTacHKReS8t0%2FgllgUKvx0vNZpOoR9SUgIhAL6DQfIKSJZ%2FjrgsLyjS5hXK3fqRpPao6kDITrMSDAVaKv8DCGIQABoMNjM3NDIzMTgzODA1IgzrrKUgkDuyEN53DV4q3ANY5oeZ61SreoJLbwxinddKKdknps7eeD1tTWmoekef04awiQLPw2F7pkrVufl9I6%2FtjK6bmrt5b0yEaIEnuvl5hOn8Dw6Fwv2cqaUardLiBdlcK3bZnRjnMMZ7u0ghpsADb9p5yniIkehdabCfca6ttugCIGl03Iz%2FcoU4PneooNg78J2IoKidSo4mA8YUQIhqdSnE6V4hJzGEmziGGRaa9bN3N%2FUpRMLNXs18J9ei97phwFYYH2LtAGCQSufJyZsryHbeoU3Ix28LaHDEOGHWF6GP0522KroWD1IuG67mLG7w4MqTLa1UBbnMUpfgqqBTSBJ5pXA3jLxumqVrz%2BMYBTUmJ55QrvBJIUtO%2BQOUGuZHnf9nWgCUY%2BoyYUVXgWk0VOWczaMI5UYAeekb0Pvu57N9m5DApwSkrvo1DbmmkGfLQYMYTmcCn3bLfb%2BMLg%2F3jSHC3XrZQYic9L4Z99uFYJaaM2CyfFLsxI9XylUuCrolFACeVgT9dWMVkUfgXz5RXbaYILQmxAy46bSTE3tPCECPCiHDE3nx5JR%2FMYQe9%2BsJKh5M7ATi4la0M1lLsRLV%2FVZPOqUioZg60TYzqEQziJ244ijLJiOnbidLvTD4%2FnZj3%2Bg2%2FDS9tR1tyTC42LzKBjqkAVBPM%2BRoSbw4Q6%2Fhq6AzvGIHReBnrkN40bTerAzuloX8keARf%2B2ZSUk68lvShoeJJP1maj3SrxwBnRNjANIZYL2h5CpqZj2IWEIlqZhiNu5jde4%2B6z7AsloNpb4qJber7cBbYSIT9qgz2d0UkRcZChtAU6%2B25W%2BnHavGgpaB%2FkwAIP9lk4IDY%2BmXtaaFHV770q02UeEwBIKyVaizPgMwUJKTxQdy&X-Amz-Signature=03fbe38c948cbf1dcde924ddf4517ac65fdc2fd96262a95e8d255c189991d17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

