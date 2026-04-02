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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUGFP6%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T022449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKBhW02j1FtOKJV%2B%2FHg3bgEk4t5W%2BHbV6%2BpHCdf7JiQIhAIrcnB6KChz%2F%2BqJzJ4wqgydz29dWMKrcH1LUCcR2niHPKv8DCGMQABoMNjM3NDIzMTgzODA1IgyWDc%2FtVcbd9hWowN0q3AOKDGcB0dIwShG%2BV9gQuShWTYs%2F0s2oY6RR0rKIph7HWWWdqpub6aSWeYB1Lw4bvcdTdemLlHOknuGlYGhxXHu26bGRPWu74A58GFL66pn13zAp7iDbsbxDv3TrZ5VqlOjZDLtlSODPvynw1%2Bp%2FG5A8BLWPgtEDUFqojrkjoQ257LrVccqKQ19aGp73iJe8ngEwf%2BiQDltrijxV8I3nL7vZZtY7siOlbfvma4%2BF6dpko1BuufyAhJjCmf0lpKKB4OWGL92mDIBny5czlcZPnykOByyLpMfCS2eQ%2FV%2Fb4TZ6ZdeLLDZ48j7VcMa65YmR4vrUomfDip7HACCe0zL3ISu8LcHugIKMGfSTs26vWsBADqZJfAuLb9R3IFeBYy1fOaq1vfd7WOsDiqKAnkuxbRC60JxUDm%2BRBQujhtuMETqYJNeSLwFSeCIK1w3hkHO4D71zY35kBiLCALuWVvaiLRA26E3n7RM535Bf43EkRrFaejUKirGlyNv5kQcUqk%2BShvrdiJ5PU8GX3QVLRRyw%2Bhu3K0Z3yG4fnpOXVEzN0wI%2BqLkAZcVpyXWn3DvtdK4aoYOjB1667MIcxckDxeKMh8o26U9rggvetOTFRLE2AJ2SmvrvAYBzlhAR0q3pUTDcl7fOBjqkAfaurU9RDvxqRXYGFPD%2BZCJSZ6tVPfsAFP%2B07QdKaMcjQAKjVPGlpXiR2DhAsNtudgaBlPuQfquaauBM47Q75Xxnf07788ShBm3%2BwzZ7G6csI44RDFCgl53XarD6f7LUkf1btnKVEUuu8kJqZUbF94xQVUsoNyzVVO710qHaZLwP2nfmtf2SMwOTtFsJow%2FB17esjV6lKBCGPYV7gR3%2FrWuBaC3E&X-Amz-Signature=c6b4052225388d354f23a6fa11bd0be355062c3fad5469cc802c11c68e68c76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAF3IEH%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T022449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArsXeLFK%2FJ6MZMa0fAtp%2F7ZurHms4wd5URgJ1Iq3v0PAiB7HWq4irDLCAvM71Z6fs5rSrSZiUsknu0CWJ%2FALeAEryr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDwUklfQpQhFE8jsiKtwDMRU1NTADDKwRkZ3P38RpBbvJzZsk%2FvwlLPCIxDAvHcV8UjVS%2Fd6WK3k0YN7uv8drOnDMpNf%2FfO8hM%2BWe9SoVeN3xO5QY%2BbGqczZHNk%2FsPs90ty%2BV4kr25NdV9xV9%2B14A4ApPeC6p%2B%2FYgup%2FqTSsdhCFMzYymH%2FBsewVqEDL0sAmIVu04k97c7zEr6OmN84iHwA%2BIIlLReR7aXBJiSR3sSNfa62cvJNkWoVPjw%2Bn9OGskTap0TA3V%2BHjNqvJAtj5PHFJte4ZiJoVyWyD2BcsBW6ELyYIG6eXbAb%2BBTa3j65OtX6U3sX6jaS%2FsgGE7YkMkoGp794wL0hh5HAQoqgdWvVKuvi64D7k5yU9mWpoxxt5X3h1Mf0h5bDUPlscrJLTlmPurqgoAquoODTbzDTbVBjAqIYROuQb3wh77wcMeMyyGu%2F4H0su6V2XuonDpRBbqicaj5PSdcardtDQWt0WJC2LEYdEtLlRW1XYNElTApV6xpxKo0KStPYlyLVlRMgy6aena9du%2Fl72DsmhBvPGpG41I3nsdK38DrPZf82jSa7QiquARjDXDf4NxEiBFKc3zIyhXxjhQzNekORTskkUaCMK6eRAWkQows0DKWFb7Hc46bEY22ofahd%2F2taIw9Ze3zgY6pgHemNAlFqx%2BKMpDiHqdbGAuBvbmS4yAkFKTQ0%2FTlG6Aqs%2FMdCnb1OwZxYH6CIuc5PLmxPy6IdswSW%2FHE1yx6rlJ5uYMtGSM58H3uFCEsDZdsLb28XIxBq1vRhshytdn%2B1Poy0sY802BC9%2BiShqDBnGpvMVZhNSH6xVfCsLCYPqS%2B469eCktD%2FH4Q1AqXxHknBk61WDxryudF7Zka3NRSEqnF%2FloE2jL&X-Amz-Signature=dab8e21bc672924cc0910551814a502bb64a8c0f4923480ad8c7b28b45517a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAF3IEH%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T022449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArsXeLFK%2FJ6MZMa0fAtp%2F7ZurHms4wd5URgJ1Iq3v0PAiB7HWq4irDLCAvM71Z6fs5rSrSZiUsknu0CWJ%2FALeAEryr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDwUklfQpQhFE8jsiKtwDMRU1NTADDKwRkZ3P38RpBbvJzZsk%2FvwlLPCIxDAvHcV8UjVS%2Fd6WK3k0YN7uv8drOnDMpNf%2FfO8hM%2BWe9SoVeN3xO5QY%2BbGqczZHNk%2FsPs90ty%2BV4kr25NdV9xV9%2B14A4ApPeC6p%2B%2FYgup%2FqTSsdhCFMzYymH%2FBsewVqEDL0sAmIVu04k97c7zEr6OmN84iHwA%2BIIlLReR7aXBJiSR3sSNfa62cvJNkWoVPjw%2Bn9OGskTap0TA3V%2BHjNqvJAtj5PHFJte4ZiJoVyWyD2BcsBW6ELyYIG6eXbAb%2BBTa3j65OtX6U3sX6jaS%2FsgGE7YkMkoGp794wL0hh5HAQoqgdWvVKuvi64D7k5yU9mWpoxxt5X3h1Mf0h5bDUPlscrJLTlmPurqgoAquoODTbzDTbVBjAqIYROuQb3wh77wcMeMyyGu%2F4H0su6V2XuonDpRBbqicaj5PSdcardtDQWt0WJC2LEYdEtLlRW1XYNElTApV6xpxKo0KStPYlyLVlRMgy6aena9du%2Fl72DsmhBvPGpG41I3nsdK38DrPZf82jSa7QiquARjDXDf4NxEiBFKc3zIyhXxjhQzNekORTskkUaCMK6eRAWkQows0DKWFb7Hc46bEY22ofahd%2F2taIw9Ze3zgY6pgHemNAlFqx%2BKMpDiHqdbGAuBvbmS4yAkFKTQ0%2FTlG6Aqs%2FMdCnb1OwZxYH6CIuc5PLmxPy6IdswSW%2FHE1yx6rlJ5uYMtGSM58H3uFCEsDZdsLb28XIxBq1vRhshytdn%2B1Poy0sY802BC9%2BiShqDBnGpvMVZhNSH6xVfCsLCYPqS%2B469eCktD%2FH4Q1AqXxHknBk61WDxryudF7Zka3NRSEqnF%2FloE2jL&X-Amz-Signature=923183c621de7631b70fe16055a74b18da75efc59cae8d7b50cb563de32b2fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAF3IEH%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T022449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArsXeLFK%2FJ6MZMa0fAtp%2F7ZurHms4wd5URgJ1Iq3v0PAiB7HWq4irDLCAvM71Z6fs5rSrSZiUsknu0CWJ%2FALeAEryr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDwUklfQpQhFE8jsiKtwDMRU1NTADDKwRkZ3P38RpBbvJzZsk%2FvwlLPCIxDAvHcV8UjVS%2Fd6WK3k0YN7uv8drOnDMpNf%2FfO8hM%2BWe9SoVeN3xO5QY%2BbGqczZHNk%2FsPs90ty%2BV4kr25NdV9xV9%2B14A4ApPeC6p%2B%2FYgup%2FqTSsdhCFMzYymH%2FBsewVqEDL0sAmIVu04k97c7zEr6OmN84iHwA%2BIIlLReR7aXBJiSR3sSNfa62cvJNkWoVPjw%2Bn9OGskTap0TA3V%2BHjNqvJAtj5PHFJte4ZiJoVyWyD2BcsBW6ELyYIG6eXbAb%2BBTa3j65OtX6U3sX6jaS%2FsgGE7YkMkoGp794wL0hh5HAQoqgdWvVKuvi64D7k5yU9mWpoxxt5X3h1Mf0h5bDUPlscrJLTlmPurqgoAquoODTbzDTbVBjAqIYROuQb3wh77wcMeMyyGu%2F4H0su6V2XuonDpRBbqicaj5PSdcardtDQWt0WJC2LEYdEtLlRW1XYNElTApV6xpxKo0KStPYlyLVlRMgy6aena9du%2Fl72DsmhBvPGpG41I3nsdK38DrPZf82jSa7QiquARjDXDf4NxEiBFKc3zIyhXxjhQzNekORTskkUaCMK6eRAWkQows0DKWFb7Hc46bEY22ofahd%2F2taIw9Ze3zgY6pgHemNAlFqx%2BKMpDiHqdbGAuBvbmS4yAkFKTQ0%2FTlG6Aqs%2FMdCnb1OwZxYH6CIuc5PLmxPy6IdswSW%2FHE1yx6rlJ5uYMtGSM58H3uFCEsDZdsLb28XIxBq1vRhshytdn%2B1Poy0sY802BC9%2BiShqDBnGpvMVZhNSH6xVfCsLCYPqS%2B469eCktD%2FH4Q1AqXxHknBk61WDxryudF7Zka3NRSEqnF%2FloE2jL&X-Amz-Signature=859a77be74f7f97789d200b64b4b3e5f48b3713aae21d1e714ac37af21d993e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAF3IEH%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T022449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArsXeLFK%2FJ6MZMa0fAtp%2F7ZurHms4wd5URgJ1Iq3v0PAiB7HWq4irDLCAvM71Z6fs5rSrSZiUsknu0CWJ%2FALeAEryr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDwUklfQpQhFE8jsiKtwDMRU1NTADDKwRkZ3P38RpBbvJzZsk%2FvwlLPCIxDAvHcV8UjVS%2Fd6WK3k0YN7uv8drOnDMpNf%2FfO8hM%2BWe9SoVeN3xO5QY%2BbGqczZHNk%2FsPs90ty%2BV4kr25NdV9xV9%2B14A4ApPeC6p%2B%2FYgup%2FqTSsdhCFMzYymH%2FBsewVqEDL0sAmIVu04k97c7zEr6OmN84iHwA%2BIIlLReR7aXBJiSR3sSNfa62cvJNkWoVPjw%2Bn9OGskTap0TA3V%2BHjNqvJAtj5PHFJte4ZiJoVyWyD2BcsBW6ELyYIG6eXbAb%2BBTa3j65OtX6U3sX6jaS%2FsgGE7YkMkoGp794wL0hh5HAQoqgdWvVKuvi64D7k5yU9mWpoxxt5X3h1Mf0h5bDUPlscrJLTlmPurqgoAquoODTbzDTbVBjAqIYROuQb3wh77wcMeMyyGu%2F4H0su6V2XuonDpRBbqicaj5PSdcardtDQWt0WJC2LEYdEtLlRW1XYNElTApV6xpxKo0KStPYlyLVlRMgy6aena9du%2Fl72DsmhBvPGpG41I3nsdK38DrPZf82jSa7QiquARjDXDf4NxEiBFKc3zIyhXxjhQzNekORTskkUaCMK6eRAWkQows0DKWFb7Hc46bEY22ofahd%2F2taIw9Ze3zgY6pgHemNAlFqx%2BKMpDiHqdbGAuBvbmS4yAkFKTQ0%2FTlG6Aqs%2FMdCnb1OwZxYH6CIuc5PLmxPy6IdswSW%2FHE1yx6rlJ5uYMtGSM58H3uFCEsDZdsLb28XIxBq1vRhshytdn%2B1Poy0sY802BC9%2BiShqDBnGpvMVZhNSH6xVfCsLCYPqS%2B469eCktD%2FH4Q1AqXxHknBk61WDxryudF7Zka3NRSEqnF%2FloE2jL&X-Amz-Signature=030676771dd11809cb290c82f7ae48ba8e2a36313bd8c22c0f8d1436b40ed78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAAF3IEH%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T022449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArsXeLFK%2FJ6MZMa0fAtp%2F7ZurHms4wd5URgJ1Iq3v0PAiB7HWq4irDLCAvM71Z6fs5rSrSZiUsknu0CWJ%2FALeAEryr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMDwUklfQpQhFE8jsiKtwDMRU1NTADDKwRkZ3P38RpBbvJzZsk%2FvwlLPCIxDAvHcV8UjVS%2Fd6WK3k0YN7uv8drOnDMpNf%2FfO8hM%2BWe9SoVeN3xO5QY%2BbGqczZHNk%2FsPs90ty%2BV4kr25NdV9xV9%2B14A4ApPeC6p%2B%2FYgup%2FqTSsdhCFMzYymH%2FBsewVqEDL0sAmIVu04k97c7zEr6OmN84iHwA%2BIIlLReR7aXBJiSR3sSNfa62cvJNkWoVPjw%2Bn9OGskTap0TA3V%2BHjNqvJAtj5PHFJte4ZiJoVyWyD2BcsBW6ELyYIG6eXbAb%2BBTa3j65OtX6U3sX6jaS%2FsgGE7YkMkoGp794wL0hh5HAQoqgdWvVKuvi64D7k5yU9mWpoxxt5X3h1Mf0h5bDUPlscrJLTlmPurqgoAquoODTbzDTbVBjAqIYROuQb3wh77wcMeMyyGu%2F4H0su6V2XuonDpRBbqicaj5PSdcardtDQWt0WJC2LEYdEtLlRW1XYNElTApV6xpxKo0KStPYlyLVlRMgy6aena9du%2Fl72DsmhBvPGpG41I3nsdK38DrPZf82jSa7QiquARjDXDf4NxEiBFKc3zIyhXxjhQzNekORTskkUaCMK6eRAWkQows0DKWFb7Hc46bEY22ofahd%2F2taIw9Ze3zgY6pgHemNAlFqx%2BKMpDiHqdbGAuBvbmS4yAkFKTQ0%2FTlG6Aqs%2FMdCnb1OwZxYH6CIuc5PLmxPy6IdswSW%2FHE1yx6rlJ5uYMtGSM58H3uFCEsDZdsLb28XIxBq1vRhshytdn%2B1Poy0sY802BC9%2BiShqDBnGpvMVZhNSH6xVfCsLCYPqS%2B469eCktD%2FH4Q1AqXxHknBk61WDxryudF7Zka3NRSEqnF%2FloE2jL&X-Amz-Signature=a68f2a59f77b87294124cc95100617bd11981d0adc944a49030f3502fa6acf70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6KUGFP6%2F20260402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260402T022449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwKBhW02j1FtOKJV%2B%2FHg3bgEk4t5W%2BHbV6%2BpHCdf7JiQIhAIrcnB6KChz%2F%2BqJzJ4wqgydz29dWMKrcH1LUCcR2niHPKv8DCGMQABoMNjM3NDIzMTgzODA1IgyWDc%2FtVcbd9hWowN0q3AOKDGcB0dIwShG%2BV9gQuShWTYs%2F0s2oY6RR0rKIph7HWWWdqpub6aSWeYB1Lw4bvcdTdemLlHOknuGlYGhxXHu26bGRPWu74A58GFL66pn13zAp7iDbsbxDv3TrZ5VqlOjZDLtlSODPvynw1%2Bp%2FG5A8BLWPgtEDUFqojrkjoQ257LrVccqKQ19aGp73iJe8ngEwf%2BiQDltrijxV8I3nL7vZZtY7siOlbfvma4%2BF6dpko1BuufyAhJjCmf0lpKKB4OWGL92mDIBny5czlcZPnykOByyLpMfCS2eQ%2FV%2Fb4TZ6ZdeLLDZ48j7VcMa65YmR4vrUomfDip7HACCe0zL3ISu8LcHugIKMGfSTs26vWsBADqZJfAuLb9R3IFeBYy1fOaq1vfd7WOsDiqKAnkuxbRC60JxUDm%2BRBQujhtuMETqYJNeSLwFSeCIK1w3hkHO4D71zY35kBiLCALuWVvaiLRA26E3n7RM535Bf43EkRrFaejUKirGlyNv5kQcUqk%2BShvrdiJ5PU8GX3QVLRRyw%2Bhu3K0Z3yG4fnpOXVEzN0wI%2BqLkAZcVpyXWn3DvtdK4aoYOjB1667MIcxckDxeKMh8o26U9rggvetOTFRLE2AJ2SmvrvAYBzlhAR0q3pUTDcl7fOBjqkAfaurU9RDvxqRXYGFPD%2BZCJSZ6tVPfsAFP%2B07QdKaMcjQAKjVPGlpXiR2DhAsNtudgaBlPuQfquaauBM47Q75Xxnf07788ShBm3%2BwzZ7G6csI44RDFCgl53XarD6f7LUkf1btnKVEUuu8kJqZUbF94xQVUsoNyzVVO710qHaZLwP2nfmtf2SMwOTtFsJow%2FB17esjV6lKBCGPYV7gR3%2FrWuBaC3E&X-Amz-Signature=bf6174e52691543728c6b30641121f03117ea586bae930a959038c4f2788f536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

