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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTG26NY%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdMu7Zb66LiUDOuYYTrgqoUKHZcLss8SFKgzcnRwXttwIgHps1sm7PySTs9NMxq9hVnmCDxn8EKTHdePF%2FjwYdmvEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYROtirx%2F5LFQT6jircA8POXRfzHAq02Ac129SMEAKIqiYGr5wP5cxxqA%2FqPHOdYKed00lS8Sb5HJHY6WOmnpNtbEdyGZsbvY7s%2BfCwbv8g81sRhjFSepIc5K7N4fmNQpSt7%2BYYIAZIYD5F3HlImMBU%2Ft0Y%2B7fxrvTmlxcqdYd9ZWSlkh5EM1GYetEDcb7s93WpL4tfrmt7C6q0IBv5aD6HangiPeu2Fx8lXYeTLHBk4VG8xfTcBrf9arj9cvYIYfkpOXQwb9nmEKiu6t5uHwug8zBf5hzKdxZSlfnPyb6HmhcG6ExSXT5GuUjFNeKLHgRqo4aYdcYXUw%2BLD91qwh%2FBaFEH5%2FOLMlJL9h%2FxxVnOaPqqI%2Bp9b%2BiU3gjEJMecFqXdGcwTAq9OwzCxwyeNqPIIF0fPsj9RJfcNpcjhIJ1V6MzkxaqmVhZ3sPXFy1JWEL36EuYfcHAULY9g5Y2oSliJOi1kay%2Bx4yY%2FxilgpCRJqRnbg0PsSB8TyZk1bftKbX4qQzZDSvYudzYQp%2F55j8%2B1ojumECSnpsUzb4i6mwK94va5T%2BuSVw%2FzpfMaTO7XrWg44ReiTnqw%2FvunY7V2bpoT6RafoLk4UKMB%2Bd4mMC5ByFFgkF16V%2B6yi91TKLO0jbxhFxca8UnjZsZUMLWcu88GOqUBe%2BmFzPOpYgE6lLni9ALHbTzwoPQE4%2BPeK4891eH8M5GljcUtikeslDJ%2BArRgFQVkRGZo8XQ9VBAXZiNVIwmvVjy%2F9jzJG%2FHA54G0ceFn3Pb5qwTzXPA7F6iMe7ketUpEtGrs5u7eWIIWHqDs0Asx%2FqATTI5Ky%2Bt8VSQrzl9FRem9I1z4uQzWolrYJvoB%2BovGqwIziWLtQYqkztmjfK2k6FwIUXPY&X-Amz-Signature=51f799767e2838a7956c9993763833e83965af8d6edd06fe0460f07f36fb727b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMX2LAR%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1VgyQNibo6YtXa6zNmcf2kNcX4i%2BMCT%2BkFQekO9%2F6iAiA9ceuWp3D9UQPdsmQyoyAFjKtlNaJdl21br05Fv8LAgSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa18oBmEavZ9lTmCKKtwD%2FDC6rFyxsmyec9rlCnenTobBGK31Eg8g%2Bo9JGerEihm5X%2Fl0jlc4PdBeWYh6pFhTWhXH%2FKevvnbf0SVdw8LCedaKajWeiODP61jKcWQ8cahkxcTMrn3%2FBsUgKCc6rxkpqMh4v54vzYmftcuAdbTB5cAcpOgPqdKqMvh6n740Gml9Gmf4PpmTwAN0D79%2FhDXJJasg7XCVfYjDy8Lr%2ByOUSBEoMlNpMxn3Du4XnH4%2BgYp%2FYKz9IgzpSPePDtw%2FEiwpB9iS2xtwfcylwHVlp2PT4NRW9xn%2BZ7YUtS8l%2FSQH4ALJPfe0R4WCsFdz%2B5EYisw4KYiNc7dLouRXyhGi4zXbk0PZvnbbG0Z4kPf0ZPzFp2nACT%2Fghh6SJPt%2BSezJfuZMfNxWbgW99QuuBpr%2BXQI1phU3XD1N3n3fFpGT0KFCIdJt22zv5ayz6O6R1g6hoVnz7n0xJyeU0T2bCz5lt3aw%2FYZVYWn7l0b2HJgV9wVcICVoGUjRnaCvDRgP%2FDEqc3vhVtSUwrwfFp2fOfrwKNFly4iUtbsZ36ZQNfRlIKjkXSg3JCtaXgOGZOb2SWz8XS1f6lkmSziqLeJcBxvxOCSoIhuMyZUKxinQFePGgTGY9JZSj77VRpm4iMFR6h8wlvG6zwY6pgFxWANrsf%2F5x%2FCox8CEyOBzLfkE60dxDDan86LO3JgPiqVGXge2OmvuWYpFSnQLKfTDRWkSlxko2lJgnO0tLqLAqxV12aR3J%2Bv3azyBxFmjHbEJaMedbDIBi45RpjUWbaxTfAkEzOT6BNA8FhUYHMEn2J1CLUHd1oDbf9y3cLqHOq8wA7fnic%2FtbjiUBlFKVkVzQRDhyRN46vx0KMauWP%2B7TsMA5ehA&X-Amz-Signature=782feaceba7ca4ddb2f21725f488e59e4ce1b3a33d25a4327a78b0fe7e261ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMX2LAR%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1VgyQNibo6YtXa6zNmcf2kNcX4i%2BMCT%2BkFQekO9%2F6iAiA9ceuWp3D9UQPdsmQyoyAFjKtlNaJdl21br05Fv8LAgSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa18oBmEavZ9lTmCKKtwD%2FDC6rFyxsmyec9rlCnenTobBGK31Eg8g%2Bo9JGerEihm5X%2Fl0jlc4PdBeWYh6pFhTWhXH%2FKevvnbf0SVdw8LCedaKajWeiODP61jKcWQ8cahkxcTMrn3%2FBsUgKCc6rxkpqMh4v54vzYmftcuAdbTB5cAcpOgPqdKqMvh6n740Gml9Gmf4PpmTwAN0D79%2FhDXJJasg7XCVfYjDy8Lr%2ByOUSBEoMlNpMxn3Du4XnH4%2BgYp%2FYKz9IgzpSPePDtw%2FEiwpB9iS2xtwfcylwHVlp2PT4NRW9xn%2BZ7YUtS8l%2FSQH4ALJPfe0R4WCsFdz%2B5EYisw4KYiNc7dLouRXyhGi4zXbk0PZvnbbG0Z4kPf0ZPzFp2nACT%2Fghh6SJPt%2BSezJfuZMfNxWbgW99QuuBpr%2BXQI1phU3XD1N3n3fFpGT0KFCIdJt22zv5ayz6O6R1g6hoVnz7n0xJyeU0T2bCz5lt3aw%2FYZVYWn7l0b2HJgV9wVcICVoGUjRnaCvDRgP%2FDEqc3vhVtSUwrwfFp2fOfrwKNFly4iUtbsZ36ZQNfRlIKjkXSg3JCtaXgOGZOb2SWz8XS1f6lkmSziqLeJcBxvxOCSoIhuMyZUKxinQFePGgTGY9JZSj77VRpm4iMFR6h8wlvG6zwY6pgFxWANrsf%2F5x%2FCox8CEyOBzLfkE60dxDDan86LO3JgPiqVGXge2OmvuWYpFSnQLKfTDRWkSlxko2lJgnO0tLqLAqxV12aR3J%2Bv3azyBxFmjHbEJaMedbDIBi45RpjUWbaxTfAkEzOT6BNA8FhUYHMEn2J1CLUHd1oDbf9y3cLqHOq8wA7fnic%2FtbjiUBlFKVkVzQRDhyRN46vx0KMauWP%2B7TsMA5ehA&X-Amz-Signature=cd12894d8043953d1d9b8ff9c987cff7e69604b4f2b73f9337342a93721b8ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMX2LAR%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1VgyQNibo6YtXa6zNmcf2kNcX4i%2BMCT%2BkFQekO9%2F6iAiA9ceuWp3D9UQPdsmQyoyAFjKtlNaJdl21br05Fv8LAgSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa18oBmEavZ9lTmCKKtwD%2FDC6rFyxsmyec9rlCnenTobBGK31Eg8g%2Bo9JGerEihm5X%2Fl0jlc4PdBeWYh6pFhTWhXH%2FKevvnbf0SVdw8LCedaKajWeiODP61jKcWQ8cahkxcTMrn3%2FBsUgKCc6rxkpqMh4v54vzYmftcuAdbTB5cAcpOgPqdKqMvh6n740Gml9Gmf4PpmTwAN0D79%2FhDXJJasg7XCVfYjDy8Lr%2ByOUSBEoMlNpMxn3Du4XnH4%2BgYp%2FYKz9IgzpSPePDtw%2FEiwpB9iS2xtwfcylwHVlp2PT4NRW9xn%2BZ7YUtS8l%2FSQH4ALJPfe0R4WCsFdz%2B5EYisw4KYiNc7dLouRXyhGi4zXbk0PZvnbbG0Z4kPf0ZPzFp2nACT%2Fghh6SJPt%2BSezJfuZMfNxWbgW99QuuBpr%2BXQI1phU3XD1N3n3fFpGT0KFCIdJt22zv5ayz6O6R1g6hoVnz7n0xJyeU0T2bCz5lt3aw%2FYZVYWn7l0b2HJgV9wVcICVoGUjRnaCvDRgP%2FDEqc3vhVtSUwrwfFp2fOfrwKNFly4iUtbsZ36ZQNfRlIKjkXSg3JCtaXgOGZOb2SWz8XS1f6lkmSziqLeJcBxvxOCSoIhuMyZUKxinQFePGgTGY9JZSj77VRpm4iMFR6h8wlvG6zwY6pgFxWANrsf%2F5x%2FCox8CEyOBzLfkE60dxDDan86LO3JgPiqVGXge2OmvuWYpFSnQLKfTDRWkSlxko2lJgnO0tLqLAqxV12aR3J%2Bv3azyBxFmjHbEJaMedbDIBi45RpjUWbaxTfAkEzOT6BNA8FhUYHMEn2J1CLUHd1oDbf9y3cLqHOq8wA7fnic%2FtbjiUBlFKVkVzQRDhyRN46vx0KMauWP%2B7TsMA5ehA&X-Amz-Signature=26e4758f8ec41c4d18cf5e486e91ff904d810193acb329b6b309b039ba1769aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMX2LAR%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1VgyQNibo6YtXa6zNmcf2kNcX4i%2BMCT%2BkFQekO9%2F6iAiA9ceuWp3D9UQPdsmQyoyAFjKtlNaJdl21br05Fv8LAgSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa18oBmEavZ9lTmCKKtwD%2FDC6rFyxsmyec9rlCnenTobBGK31Eg8g%2Bo9JGerEihm5X%2Fl0jlc4PdBeWYh6pFhTWhXH%2FKevvnbf0SVdw8LCedaKajWeiODP61jKcWQ8cahkxcTMrn3%2FBsUgKCc6rxkpqMh4v54vzYmftcuAdbTB5cAcpOgPqdKqMvh6n740Gml9Gmf4PpmTwAN0D79%2FhDXJJasg7XCVfYjDy8Lr%2ByOUSBEoMlNpMxn3Du4XnH4%2BgYp%2FYKz9IgzpSPePDtw%2FEiwpB9iS2xtwfcylwHVlp2PT4NRW9xn%2BZ7YUtS8l%2FSQH4ALJPfe0R4WCsFdz%2B5EYisw4KYiNc7dLouRXyhGi4zXbk0PZvnbbG0Z4kPf0ZPzFp2nACT%2Fghh6SJPt%2BSezJfuZMfNxWbgW99QuuBpr%2BXQI1phU3XD1N3n3fFpGT0KFCIdJt22zv5ayz6O6R1g6hoVnz7n0xJyeU0T2bCz5lt3aw%2FYZVYWn7l0b2HJgV9wVcICVoGUjRnaCvDRgP%2FDEqc3vhVtSUwrwfFp2fOfrwKNFly4iUtbsZ36ZQNfRlIKjkXSg3JCtaXgOGZOb2SWz8XS1f6lkmSziqLeJcBxvxOCSoIhuMyZUKxinQFePGgTGY9JZSj77VRpm4iMFR6h8wlvG6zwY6pgFxWANrsf%2F5x%2FCox8CEyOBzLfkE60dxDDan86LO3JgPiqVGXge2OmvuWYpFSnQLKfTDRWkSlxko2lJgnO0tLqLAqxV12aR3J%2Bv3azyBxFmjHbEJaMedbDIBi45RpjUWbaxTfAkEzOT6BNA8FhUYHMEn2J1CLUHd1oDbf9y3cLqHOq8wA7fnic%2FtbjiUBlFKVkVzQRDhyRN46vx0KMauWP%2B7TsMA5ehA&X-Amz-Signature=3da95567316f868f4dced4ab2c689c795b7ca44fb32ad7077e9324a9d46e18d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIMX2LAR%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1VgyQNibo6YtXa6zNmcf2kNcX4i%2BMCT%2BkFQekO9%2F6iAiA9ceuWp3D9UQPdsmQyoyAFjKtlNaJdl21br05Fv8LAgSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa18oBmEavZ9lTmCKKtwD%2FDC6rFyxsmyec9rlCnenTobBGK31Eg8g%2Bo9JGerEihm5X%2Fl0jlc4PdBeWYh6pFhTWhXH%2FKevvnbf0SVdw8LCedaKajWeiODP61jKcWQ8cahkxcTMrn3%2FBsUgKCc6rxkpqMh4v54vzYmftcuAdbTB5cAcpOgPqdKqMvh6n740Gml9Gmf4PpmTwAN0D79%2FhDXJJasg7XCVfYjDy8Lr%2ByOUSBEoMlNpMxn3Du4XnH4%2BgYp%2FYKz9IgzpSPePDtw%2FEiwpB9iS2xtwfcylwHVlp2PT4NRW9xn%2BZ7YUtS8l%2FSQH4ALJPfe0R4WCsFdz%2B5EYisw4KYiNc7dLouRXyhGi4zXbk0PZvnbbG0Z4kPf0ZPzFp2nACT%2Fghh6SJPt%2BSezJfuZMfNxWbgW99QuuBpr%2BXQI1phU3XD1N3n3fFpGT0KFCIdJt22zv5ayz6O6R1g6hoVnz7n0xJyeU0T2bCz5lt3aw%2FYZVYWn7l0b2HJgV9wVcICVoGUjRnaCvDRgP%2FDEqc3vhVtSUwrwfFp2fOfrwKNFly4iUtbsZ36ZQNfRlIKjkXSg3JCtaXgOGZOb2SWz8XS1f6lkmSziqLeJcBxvxOCSoIhuMyZUKxinQFePGgTGY9JZSj77VRpm4iMFR6h8wlvG6zwY6pgFxWANrsf%2F5x%2FCox8CEyOBzLfkE60dxDDan86LO3JgPiqVGXge2OmvuWYpFSnQLKfTDRWkSlxko2lJgnO0tLqLAqxV12aR3J%2Bv3azyBxFmjHbEJaMedbDIBi45RpjUWbaxTfAkEzOT6BNA8FhUYHMEn2J1CLUHd1oDbf9y3cLqHOq8wA7fnic%2FtbjiUBlFKVkVzQRDhyRN46vx0KMauWP%2B7TsMA5ehA&X-Amz-Signature=edb3c65981d5899661c09ee250560a4982dd216f51c768690ea809f37304566c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTG26NY%2F20260427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260427T024900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdMu7Zb66LiUDOuYYTrgqoUKHZcLss8SFKgzcnRwXttwIgHps1sm7PySTs9NMxq9hVnmCDxn8EKTHdePF%2FjwYdmvEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYROtirx%2F5LFQT6jircA8POXRfzHAq02Ac129SMEAKIqiYGr5wP5cxxqA%2FqPHOdYKed00lS8Sb5HJHY6WOmnpNtbEdyGZsbvY7s%2BfCwbv8g81sRhjFSepIc5K7N4fmNQpSt7%2BYYIAZIYD5F3HlImMBU%2Ft0Y%2B7fxrvTmlxcqdYd9ZWSlkh5EM1GYetEDcb7s93WpL4tfrmt7C6q0IBv5aD6HangiPeu2Fx8lXYeTLHBk4VG8xfTcBrf9arj9cvYIYfkpOXQwb9nmEKiu6t5uHwug8zBf5hzKdxZSlfnPyb6HmhcG6ExSXT5GuUjFNeKLHgRqo4aYdcYXUw%2BLD91qwh%2FBaFEH5%2FOLMlJL9h%2FxxVnOaPqqI%2Bp9b%2BiU3gjEJMecFqXdGcwTAq9OwzCxwyeNqPIIF0fPsj9RJfcNpcjhIJ1V6MzkxaqmVhZ3sPXFy1JWEL36EuYfcHAULY9g5Y2oSliJOi1kay%2Bx4yY%2FxilgpCRJqRnbg0PsSB8TyZk1bftKbX4qQzZDSvYudzYQp%2F55j8%2B1ojumECSnpsUzb4i6mwK94va5T%2BuSVw%2FzpfMaTO7XrWg44ReiTnqw%2FvunY7V2bpoT6RafoLk4UKMB%2Bd4mMC5ByFFgkF16V%2B6yi91TKLO0jbxhFxca8UnjZsZUMLWcu88GOqUBe%2BmFzPOpYgE6lLni9ALHbTzwoPQE4%2BPeK4891eH8M5GljcUtikeslDJ%2BArRgFQVkRGZo8XQ9VBAXZiNVIwmvVjy%2F9jzJG%2FHA54G0ceFn3Pb5qwTzXPA7F6iMe7ketUpEtGrs5u7eWIIWHqDs0Asx%2FqATTI5Ky%2Bt8VSQrzl9FRem9I1z4uQzWolrYJvoB%2BovGqwIziWLtQYqkztmjfK2k6FwIUXPY&X-Amz-Signature=32732697e4e998500f03fecf4a1bf2439562720d44a54f2277bce55184bfe339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

