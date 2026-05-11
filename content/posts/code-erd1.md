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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLPKPD4%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDQM%2BSjefsVfA3gOSimc86NO3x2MHEx3MmH3NknvGFUuQIhANMPbGnScauDLn6GxVSPGkxE6j29EWix333cIniR6UmDKv8DCAsQABoMNjM3NDIzMTgzODA1IgyWu6wmL%2FyfBP6pcyEq3AP%2BoRAZ60Ku4LRdTiefYlX2%2FClNadB4ndt%2Bfkb7xQw%2FFegV0vIxepNk9WRfUj5x4reKwWVt4OcKEBAJe2Ttf0NDgpWRMndKEqzrVBWGMj770NkamNnHpIfsfkdiIHyWLHUBagKFO5WFdBaI3a8%2FcX8xkJlDx4i6mASOJ7wvWIm4ZcAxHyQaHyaWAl2Vf1YkBEQYYW5m%2BbSTcb%2FdjN6B6g0EoaYbPW80yozO6gQsQaxKEp%2Fedxa%2FkBkAVY5TA7fIogmLd5U7IJU8mLAbsNHWOHuevvINZlzt3ehb%2BN1E2BLB6Y6L32fwpyPJxq4ypxdcbGClxVLCSSk7GUU1X4Hsj6snmZUwgdBF5Qw%2BzsP8BlVcAZX1Rvlsqd4WLBuwpeRV5GrwiVeK0lW%2Bynirr7V7XZG%2FnoLP7v%2FPdHbsHsXNtCbS%2Bmfbvxb%2B%2FGvspf6nPaoxCH1QpD4R1gqv4FmBeYghjajBNHtRJMVE%2FvwLp2ONNFqK1PS9cKEb%2F9uYX%2FM0tuEcZBUKtlCy3QdgvKurW6tMNm1O3TGDYsqI%2FUIhtpLPa92h3ysnSNiKBgtfrkHQW8IKEA4RhH207H%2BhsQoQy%2Bp4QCdSJWJ3kF1wXkAgiFwt9i59cQ8EJ1T%2BduVqVWb82TCw64TQBjqkAT%2BtYxGbNu%2Bu0k3jdMAnC5k5pdoWj5gu8mGQPxL%2B6jSKOga7Atg%2BzP06OLPSdnGHluzLZgxOjjxy3xQKxlnTW4Lo3FXHvJwbJD7GTJnTyFAH1vdVHDxScdwZp1wcadMLhh7V90XJ0yLdiSgLo3MQBHamyBWtYmO0NKudlW2sNZ8Gm3iFdzQAFnc%2Fulokxg4yK5xpmoV6QZeQvrX0nvaSBcai3Dla&X-Amz-Signature=cb1544b95109f536ce5b129e62e411a26687de984ae6435d26913f92fff98af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLLMCHZT%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDIqjba%2FIYNg8N36QEAcpBQQ%2Bt%2BjqgUooMYMxkXZMeoiwIhAPwtxg%2FGxilBi%2BjUPaSVY5MzOhfcvP2mlIC6CuNYUarTKv8DCAsQABoMNjM3NDIzMTgzODA1IgxPNSOKKhlnNQBH9vIq3AMA9jEI2Gfk0SDZpU34SZl26w6mDoKz33AvCcL4fPW%2F3axSu%2F6f1WqXht91GCrGydtYsaEwbzG5C0aPmlPW%2FDS0o052ncaDjehWG8e2OUGPxrPrNgxzljJ%2Fkj%2BV5Zvi8GqalP0283v791oWllAFqNSFGYr%2BOovcc4y3HA67wd1sU7FKh2NuS%2BWjYdlVUlFBRhqx39YA8qgPDWX%2FyNQJa6%2FexfyRTPTcKsAXQCE91BEJZkWIU1iHn9H9ixaUaxX26XwQGSxcQHPL7MXMp36cImi2kvchGTEuvwg1GFLqJX03WHPyl6aLKJa6EZ6uCR0fZucyAaI%2F9syJvdQ5FaSmQnaYupQp2vivFXDCv0oM0QjRbRN0wdJR2UAoLUqWFOpCLXkGwmaaRiOvYlUFBEUOYhDk8fMqtYdRJL5xM%2BAtWekIcOGkpOx0kJY0i1SU8r0%2F5TJu%2FwnoNFXmr2i4gYgkqWB90ZSmMRxDRTOjWKuuk3rndULxsVYluW4CxQKaTH8FW998CAc44EttuPRWM2oCpUa%2Fp9ox3teyfj1ngmNQkkbnbkr%2Be8zj9mXbI906HC8N5JkXWxHJUI5cTOumR7Bmwd%2BecH%2BnR%2B07Yj6kuA%2BCKTkrSBCySkFXmyDJTR15ozCh64TQBjqkAQdFqXMN6oPuAvvRDbFvzeSBEpQWdJ3tQDkMDIgCTWHV5nmnC1J0k%2F8OIzmlZPeiv4uX9BpKqVWD9Y75XVTnHmvu%2FDpCuI5vOUBgwfxuQYKc0Fz7wxyUSq1b%2BfbAcEW9Pztr%2BCK0S4mMjwNASHa0iezQPFCQ0fb9vARo8fFhm9lJOEF8TWOASIzHTmxQc0XsUuioJFObeROD5R1ARvf%2FdKy5miwM&X-Amz-Signature=c169b12a1d8ed3d5d67a4c69fae14f8ac1de40a84c009dc3d477220b7d5909a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLLMCHZT%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDIqjba%2FIYNg8N36QEAcpBQQ%2Bt%2BjqgUooMYMxkXZMeoiwIhAPwtxg%2FGxilBi%2BjUPaSVY5MzOhfcvP2mlIC6CuNYUarTKv8DCAsQABoMNjM3NDIzMTgzODA1IgxPNSOKKhlnNQBH9vIq3AMA9jEI2Gfk0SDZpU34SZl26w6mDoKz33AvCcL4fPW%2F3axSu%2F6f1WqXht91GCrGydtYsaEwbzG5C0aPmlPW%2FDS0o052ncaDjehWG8e2OUGPxrPrNgxzljJ%2Fkj%2BV5Zvi8GqalP0283v791oWllAFqNSFGYr%2BOovcc4y3HA67wd1sU7FKh2NuS%2BWjYdlVUlFBRhqx39YA8qgPDWX%2FyNQJa6%2FexfyRTPTcKsAXQCE91BEJZkWIU1iHn9H9ixaUaxX26XwQGSxcQHPL7MXMp36cImi2kvchGTEuvwg1GFLqJX03WHPyl6aLKJa6EZ6uCR0fZucyAaI%2F9syJvdQ5FaSmQnaYupQp2vivFXDCv0oM0QjRbRN0wdJR2UAoLUqWFOpCLXkGwmaaRiOvYlUFBEUOYhDk8fMqtYdRJL5xM%2BAtWekIcOGkpOx0kJY0i1SU8r0%2F5TJu%2FwnoNFXmr2i4gYgkqWB90ZSmMRxDRTOjWKuuk3rndULxsVYluW4CxQKaTH8FW998CAc44EttuPRWM2oCpUa%2Fp9ox3teyfj1ngmNQkkbnbkr%2Be8zj9mXbI906HC8N5JkXWxHJUI5cTOumR7Bmwd%2BecH%2BnR%2B07Yj6kuA%2BCKTkrSBCySkFXmyDJTR15ozCh64TQBjqkAQdFqXMN6oPuAvvRDbFvzeSBEpQWdJ3tQDkMDIgCTWHV5nmnC1J0k%2F8OIzmlZPeiv4uX9BpKqVWD9Y75XVTnHmvu%2FDpCuI5vOUBgwfxuQYKc0Fz7wxyUSq1b%2BfbAcEW9Pztr%2BCK0S4mMjwNASHa0iezQPFCQ0fb9vARo8fFhm9lJOEF8TWOASIzHTmxQc0XsUuioJFObeROD5R1ARvf%2FdKy5miwM&X-Amz-Signature=bb9f811736515c8524aa7973dc15122e708e627d3a23319abff70c02e27ce41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLLMCHZT%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDIqjba%2FIYNg8N36QEAcpBQQ%2Bt%2BjqgUooMYMxkXZMeoiwIhAPwtxg%2FGxilBi%2BjUPaSVY5MzOhfcvP2mlIC6CuNYUarTKv8DCAsQABoMNjM3NDIzMTgzODA1IgxPNSOKKhlnNQBH9vIq3AMA9jEI2Gfk0SDZpU34SZl26w6mDoKz33AvCcL4fPW%2F3axSu%2F6f1WqXht91GCrGydtYsaEwbzG5C0aPmlPW%2FDS0o052ncaDjehWG8e2OUGPxrPrNgxzljJ%2Fkj%2BV5Zvi8GqalP0283v791oWllAFqNSFGYr%2BOovcc4y3HA67wd1sU7FKh2NuS%2BWjYdlVUlFBRhqx39YA8qgPDWX%2FyNQJa6%2FexfyRTPTcKsAXQCE91BEJZkWIU1iHn9H9ixaUaxX26XwQGSxcQHPL7MXMp36cImi2kvchGTEuvwg1GFLqJX03WHPyl6aLKJa6EZ6uCR0fZucyAaI%2F9syJvdQ5FaSmQnaYupQp2vivFXDCv0oM0QjRbRN0wdJR2UAoLUqWFOpCLXkGwmaaRiOvYlUFBEUOYhDk8fMqtYdRJL5xM%2BAtWekIcOGkpOx0kJY0i1SU8r0%2F5TJu%2FwnoNFXmr2i4gYgkqWB90ZSmMRxDRTOjWKuuk3rndULxsVYluW4CxQKaTH8FW998CAc44EttuPRWM2oCpUa%2Fp9ox3teyfj1ngmNQkkbnbkr%2Be8zj9mXbI906HC8N5JkXWxHJUI5cTOumR7Bmwd%2BecH%2BnR%2B07Yj6kuA%2BCKTkrSBCySkFXmyDJTR15ozCh64TQBjqkAQdFqXMN6oPuAvvRDbFvzeSBEpQWdJ3tQDkMDIgCTWHV5nmnC1J0k%2F8OIzmlZPeiv4uX9BpKqVWD9Y75XVTnHmvu%2FDpCuI5vOUBgwfxuQYKc0Fz7wxyUSq1b%2BfbAcEW9Pztr%2BCK0S4mMjwNASHa0iezQPFCQ0fb9vARo8fFhm9lJOEF8TWOASIzHTmxQc0XsUuioJFObeROD5R1ARvf%2FdKy5miwM&X-Amz-Signature=fc172800c3f6d36a4f846f920e5954c16015889eec23a1f132add57af8fdaf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLLMCHZT%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDIqjba%2FIYNg8N36QEAcpBQQ%2Bt%2BjqgUooMYMxkXZMeoiwIhAPwtxg%2FGxilBi%2BjUPaSVY5MzOhfcvP2mlIC6CuNYUarTKv8DCAsQABoMNjM3NDIzMTgzODA1IgxPNSOKKhlnNQBH9vIq3AMA9jEI2Gfk0SDZpU34SZl26w6mDoKz33AvCcL4fPW%2F3axSu%2F6f1WqXht91GCrGydtYsaEwbzG5C0aPmlPW%2FDS0o052ncaDjehWG8e2OUGPxrPrNgxzljJ%2Fkj%2BV5Zvi8GqalP0283v791oWllAFqNSFGYr%2BOovcc4y3HA67wd1sU7FKh2NuS%2BWjYdlVUlFBRhqx39YA8qgPDWX%2FyNQJa6%2FexfyRTPTcKsAXQCE91BEJZkWIU1iHn9H9ixaUaxX26XwQGSxcQHPL7MXMp36cImi2kvchGTEuvwg1GFLqJX03WHPyl6aLKJa6EZ6uCR0fZucyAaI%2F9syJvdQ5FaSmQnaYupQp2vivFXDCv0oM0QjRbRN0wdJR2UAoLUqWFOpCLXkGwmaaRiOvYlUFBEUOYhDk8fMqtYdRJL5xM%2BAtWekIcOGkpOx0kJY0i1SU8r0%2F5TJu%2FwnoNFXmr2i4gYgkqWB90ZSmMRxDRTOjWKuuk3rndULxsVYluW4CxQKaTH8FW998CAc44EttuPRWM2oCpUa%2Fp9ox3teyfj1ngmNQkkbnbkr%2Be8zj9mXbI906HC8N5JkXWxHJUI5cTOumR7Bmwd%2BecH%2BnR%2B07Yj6kuA%2BCKTkrSBCySkFXmyDJTR15ozCh64TQBjqkAQdFqXMN6oPuAvvRDbFvzeSBEpQWdJ3tQDkMDIgCTWHV5nmnC1J0k%2F8OIzmlZPeiv4uX9BpKqVWD9Y75XVTnHmvu%2FDpCuI5vOUBgwfxuQYKc0Fz7wxyUSq1b%2BfbAcEW9Pztr%2BCK0S4mMjwNASHa0iezQPFCQ0fb9vARo8fFhm9lJOEF8TWOASIzHTmxQc0XsUuioJFObeROD5R1ARvf%2FdKy5miwM&X-Amz-Signature=98a6067fa5fcdb8b0e8fce89569330ff06335c0f7887802457f1640de2732f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLLMCHZT%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDIqjba%2FIYNg8N36QEAcpBQQ%2Bt%2BjqgUooMYMxkXZMeoiwIhAPwtxg%2FGxilBi%2BjUPaSVY5MzOhfcvP2mlIC6CuNYUarTKv8DCAsQABoMNjM3NDIzMTgzODA1IgxPNSOKKhlnNQBH9vIq3AMA9jEI2Gfk0SDZpU34SZl26w6mDoKz33AvCcL4fPW%2F3axSu%2F6f1WqXht91GCrGydtYsaEwbzG5C0aPmlPW%2FDS0o052ncaDjehWG8e2OUGPxrPrNgxzljJ%2Fkj%2BV5Zvi8GqalP0283v791oWllAFqNSFGYr%2BOovcc4y3HA67wd1sU7FKh2NuS%2BWjYdlVUlFBRhqx39YA8qgPDWX%2FyNQJa6%2FexfyRTPTcKsAXQCE91BEJZkWIU1iHn9H9ixaUaxX26XwQGSxcQHPL7MXMp36cImi2kvchGTEuvwg1GFLqJX03WHPyl6aLKJa6EZ6uCR0fZucyAaI%2F9syJvdQ5FaSmQnaYupQp2vivFXDCv0oM0QjRbRN0wdJR2UAoLUqWFOpCLXkGwmaaRiOvYlUFBEUOYhDk8fMqtYdRJL5xM%2BAtWekIcOGkpOx0kJY0i1SU8r0%2F5TJu%2FwnoNFXmr2i4gYgkqWB90ZSmMRxDRTOjWKuuk3rndULxsVYluW4CxQKaTH8FW998CAc44EttuPRWM2oCpUa%2Fp9ox3teyfj1ngmNQkkbnbkr%2Be8zj9mXbI906HC8N5JkXWxHJUI5cTOumR7Bmwd%2BecH%2BnR%2B07Yj6kuA%2BCKTkrSBCySkFXmyDJTR15ozCh64TQBjqkAQdFqXMN6oPuAvvRDbFvzeSBEpQWdJ3tQDkMDIgCTWHV5nmnC1J0k%2F8OIzmlZPeiv4uX9BpKqVWD9Y75XVTnHmvu%2FDpCuI5vOUBgwfxuQYKc0Fz7wxyUSq1b%2BfbAcEW9Pztr%2BCK0S4mMjwNASHa0iezQPFCQ0fb9vARo8fFhm9lJOEF8TWOASIzHTmxQc0XsUuioJFObeROD5R1ARvf%2FdKy5miwM&X-Amz-Signature=bc2904316d3360f074ee443525932c408da2b00b5813495b53c324e4d12f0756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLPKPD4%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDQM%2BSjefsVfA3gOSimc86NO3x2MHEx3MmH3NknvGFUuQIhANMPbGnScauDLn6GxVSPGkxE6j29EWix333cIniR6UmDKv8DCAsQABoMNjM3NDIzMTgzODA1IgyWu6wmL%2FyfBP6pcyEq3AP%2BoRAZ60Ku4LRdTiefYlX2%2FClNadB4ndt%2Bfkb7xQw%2FFegV0vIxepNk9WRfUj5x4reKwWVt4OcKEBAJe2Ttf0NDgpWRMndKEqzrVBWGMj770NkamNnHpIfsfkdiIHyWLHUBagKFO5WFdBaI3a8%2FcX8xkJlDx4i6mASOJ7wvWIm4ZcAxHyQaHyaWAl2Vf1YkBEQYYW5m%2BbSTcb%2FdjN6B6g0EoaYbPW80yozO6gQsQaxKEp%2Fedxa%2FkBkAVY5TA7fIogmLd5U7IJU8mLAbsNHWOHuevvINZlzt3ehb%2BN1E2BLB6Y6L32fwpyPJxq4ypxdcbGClxVLCSSk7GUU1X4Hsj6snmZUwgdBF5Qw%2BzsP8BlVcAZX1Rvlsqd4WLBuwpeRV5GrwiVeK0lW%2Bynirr7V7XZG%2FnoLP7v%2FPdHbsHsXNtCbS%2Bmfbvxb%2B%2FGvspf6nPaoxCH1QpD4R1gqv4FmBeYghjajBNHtRJMVE%2FvwLp2ONNFqK1PS9cKEb%2F9uYX%2FM0tuEcZBUKtlCy3QdgvKurW6tMNm1O3TGDYsqI%2FUIhtpLPa92h3ysnSNiKBgtfrkHQW8IKEA4RhH207H%2BhsQoQy%2Bp4QCdSJWJ3kF1wXkAgiFwt9i59cQ8EJ1T%2BduVqVWb82TCw64TQBjqkAT%2BtYxGbNu%2Bu0k3jdMAnC5k5pdoWj5gu8mGQPxL%2B6jSKOga7Atg%2BzP06OLPSdnGHluzLZgxOjjxy3xQKxlnTW4Lo3FXHvJwbJD7GTJnTyFAH1vdVHDxScdwZp1wcadMLhh7V90XJ0yLdiSgLo3MQBHamyBWtYmO0NKudlW2sNZ8Gm3iFdzQAFnc%2Fulokxg4yK5xpmoV6QZeQvrX0nvaSBcai3Dla&X-Amz-Signature=89c02efb65225eab7e5c63f05cd5d3d9043ead6b72b2383499c57f97a6ba193d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

