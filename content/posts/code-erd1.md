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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHXVVIU%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCskKZzo7pCzo2XIkGmYRnls4ynY74g2MtWGh3bzdNikQIhAPgNAvd4Vnp7rup4kYzjdHuO9tkaZQ53%2FuTxH7lxElbTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwjab1pmqI8evZiVGQq3AMY10X7f1z4BjF04H%2BTtLA4Qzh0A7szEBn4VqdR1n4EWImi7ntnnATCs%2BeJPpaoAbJ2cxHfI1mTJCZ%2B9jUS0QClqu3eAzyaL1D1dXBmAr0M3UvDfsWG%2BztCerw6jCAlKF7AN2ykMEPpHAOvk5PYY53GtOpbr9NiFKobgqZVPwXhiSQxR65F%2FhuMYhjWeUHmoj06ZC8%2B%2F1MZ9tP%2BJamFZ7oEc4uP5AtHlkRoJ6eYUy930vTdx7o0T1R4CZ%2BNGxbRLPamYGMEPdi0CaurvDc%2Ftw6GVxmlv0d9sOrs2IS8gD%2FdNu3tzdTnspcYuFY%2FTajAD7yqAKTVPvQjNwN%2Bvx%2FoiiwHdt%2BFj2ZSImN6G2FO6mbaa4cCcgJovsGLJItdq1G%2B52iB5vsFQ4AMx9LXAoVxAyEl4mQojasA2yPaw2WiJlAbOosvfMEIvXdEverg%2By%2BDjggT9cs%2FdfPZj4k1T%2FEZyc5QinPtFs%2BYolxpA0i1hdSvOKHXV76vZcZ8qZingDxbKAsmp9kl9PNY%2BERNDRT3LWKq6N5Ysy2lOZNikPXq0OSbu09xmsk%2F3D9JoFnDd8IhbjwmQUGukpLYEJQ9KYKf5u4LqdB82PW2Gh1wmPFOd9rRY7atqLMiKNNenS01HzDMhNfKBjqkATAAzEQVs4WSq1EM%2FHCXm4JgGq23zYr5KbwjX3J%2FfERuCceAATualyndeRdPV7iHwrUX7MC6t6I90hH1jVAxZOeXzAyRRo90rheLGSd%2FLEYFhpUzzjSEa5dT4AM7ShbKNN7NpUlAVdyXegAr9mSh%2FJyPiuzrHb7Q1CDoWFUJrTVd1XnzMqXWglSazLOUK4sUYgeZ0NwUQv2seKjKh8lwgIe%2Fm55h&X-Amz-Signature=b4b687416182cce63a9202cca333d7c4c793821f4d0358a2c31bc8375721dae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRQFT2N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCShYynB3u7FaKAu012QZco06lXgghlOUrQ9KESE7ctAAIgUoDDkAw5XrkjcxaZGXJ8mpC7Gi2aIMxBcd2OX9mfqjIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6V2CFkRN4U4%2FGOircAzFrQZ9b1%2BMnxv1AKQXaDXn%2FMEXtn94EAsLJwABT4U%2B65e3kX%2B1jRuoPX6%2BzLEPSTgWLsfKFy0dbpcQcNdivisNyRV9%2B2Zzb8dmepOWcG8ej3Q9jIeBWS4tVC6ZjKwhwHL9CQqlaXW8SBsvK10bD6heBoGpCRQqEeuJB5Mf1NCUJ%2FUa9lXS8Az7FfGZEiqkNyWFYFCC%2Fc5YW6nOo0WI2ifwGj%2BC7IJa09Th2wSngcy2Xt2N1Xr4rqmDzLMY7KG6h7%2FDo4x%2BTSaZQzlWozm74T8ryiXiJLYRYH2lpD%2Bn0wY%2BkFh9Uy2tkR6ft2FFtnjkQgM5qdGnD1LbxhTuACrn2Y%2B3UhOf3Dwhi0UUAAT2CSMFaBItKE5WsAehJiozEhB8wkv5uXGZ%2F4EOZJ2i%2FPIHtSn2hNmZ2MUCIzGufPw2MnX7D2FhCYYEW7o8ldQ1XTpCfu35RxzWYvb3dVgSwDyFPQIsMWqdJibcudvyhxCT6saWJcOSivfFGIfDQc9VqAzt%2FaAW6PKxZsluJSfpJv%2BHeb4%2BWVbi9%2Fpz88vTLBVrRKH0uG3LATBAO1q2yMeshcf4isxgxzVR38%2Brl2Z9ZJzfBx6Urd71Eqtxgqj3okrOL7Q7WGuDWoIFTOkBlpur7MLmJ18oGOqUBCUsOJUs636%2BxlAo3eS6P%2FUmErHuqXf6sOCGPe2cHns5Vo1XS21CchROwOaU8xeyVgjtseehsw68YB0dWOU%2B2aVOiiFN4DhF36j%2B7xx9hrGtEYm%2FNDwlkXcM1zqRQfhBkQQ64P8%2B%2FdvmuYjeTlGPrFrCooMtJhE%2BWa1%2FoLSaJOD9c8s58aFjcbWiP5DkCbQbEdQNIHpFj7mX4ceNcYG30H%2FSnU91K&X-Amz-Signature=defde22a843f4dd5e0f9f688e8a612f4a3c1783854b77196775f01dd40353026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRQFT2N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCShYynB3u7FaKAu012QZco06lXgghlOUrQ9KESE7ctAAIgUoDDkAw5XrkjcxaZGXJ8mpC7Gi2aIMxBcd2OX9mfqjIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6V2CFkRN4U4%2FGOircAzFrQZ9b1%2BMnxv1AKQXaDXn%2FMEXtn94EAsLJwABT4U%2B65e3kX%2B1jRuoPX6%2BzLEPSTgWLsfKFy0dbpcQcNdivisNyRV9%2B2Zzb8dmepOWcG8ej3Q9jIeBWS4tVC6ZjKwhwHL9CQqlaXW8SBsvK10bD6heBoGpCRQqEeuJB5Mf1NCUJ%2FUa9lXS8Az7FfGZEiqkNyWFYFCC%2Fc5YW6nOo0WI2ifwGj%2BC7IJa09Th2wSngcy2Xt2N1Xr4rqmDzLMY7KG6h7%2FDo4x%2BTSaZQzlWozm74T8ryiXiJLYRYH2lpD%2Bn0wY%2BkFh9Uy2tkR6ft2FFtnjkQgM5qdGnD1LbxhTuACrn2Y%2B3UhOf3Dwhi0UUAAT2CSMFaBItKE5WsAehJiozEhB8wkv5uXGZ%2F4EOZJ2i%2FPIHtSn2hNmZ2MUCIzGufPw2MnX7D2FhCYYEW7o8ldQ1XTpCfu35RxzWYvb3dVgSwDyFPQIsMWqdJibcudvyhxCT6saWJcOSivfFGIfDQc9VqAzt%2FaAW6PKxZsluJSfpJv%2BHeb4%2BWVbi9%2Fpz88vTLBVrRKH0uG3LATBAO1q2yMeshcf4isxgxzVR38%2Brl2Z9ZJzfBx6Urd71Eqtxgqj3okrOL7Q7WGuDWoIFTOkBlpur7MLmJ18oGOqUBCUsOJUs636%2BxlAo3eS6P%2FUmErHuqXf6sOCGPe2cHns5Vo1XS21CchROwOaU8xeyVgjtseehsw68YB0dWOU%2B2aVOiiFN4DhF36j%2B7xx9hrGtEYm%2FNDwlkXcM1zqRQfhBkQQ64P8%2B%2FdvmuYjeTlGPrFrCooMtJhE%2BWa1%2FoLSaJOD9c8s58aFjcbWiP5DkCbQbEdQNIHpFj7mX4ceNcYG30H%2FSnU91K&X-Amz-Signature=15d19b3b5131fcbc6aa38bbd17399c1b884b9c1bde42e9540f5dda7e89f8f509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRQFT2N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCShYynB3u7FaKAu012QZco06lXgghlOUrQ9KESE7ctAAIgUoDDkAw5XrkjcxaZGXJ8mpC7Gi2aIMxBcd2OX9mfqjIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6V2CFkRN4U4%2FGOircAzFrQZ9b1%2BMnxv1AKQXaDXn%2FMEXtn94EAsLJwABT4U%2B65e3kX%2B1jRuoPX6%2BzLEPSTgWLsfKFy0dbpcQcNdivisNyRV9%2B2Zzb8dmepOWcG8ej3Q9jIeBWS4tVC6ZjKwhwHL9CQqlaXW8SBsvK10bD6heBoGpCRQqEeuJB5Mf1NCUJ%2FUa9lXS8Az7FfGZEiqkNyWFYFCC%2Fc5YW6nOo0WI2ifwGj%2BC7IJa09Th2wSngcy2Xt2N1Xr4rqmDzLMY7KG6h7%2FDo4x%2BTSaZQzlWozm74T8ryiXiJLYRYH2lpD%2Bn0wY%2BkFh9Uy2tkR6ft2FFtnjkQgM5qdGnD1LbxhTuACrn2Y%2B3UhOf3Dwhi0UUAAT2CSMFaBItKE5WsAehJiozEhB8wkv5uXGZ%2F4EOZJ2i%2FPIHtSn2hNmZ2MUCIzGufPw2MnX7D2FhCYYEW7o8ldQ1XTpCfu35RxzWYvb3dVgSwDyFPQIsMWqdJibcudvyhxCT6saWJcOSivfFGIfDQc9VqAzt%2FaAW6PKxZsluJSfpJv%2BHeb4%2BWVbi9%2Fpz88vTLBVrRKH0uG3LATBAO1q2yMeshcf4isxgxzVR38%2Brl2Z9ZJzfBx6Urd71Eqtxgqj3okrOL7Q7WGuDWoIFTOkBlpur7MLmJ18oGOqUBCUsOJUs636%2BxlAo3eS6P%2FUmErHuqXf6sOCGPe2cHns5Vo1XS21CchROwOaU8xeyVgjtseehsw68YB0dWOU%2B2aVOiiFN4DhF36j%2B7xx9hrGtEYm%2FNDwlkXcM1zqRQfhBkQQ64P8%2B%2FdvmuYjeTlGPrFrCooMtJhE%2BWa1%2FoLSaJOD9c8s58aFjcbWiP5DkCbQbEdQNIHpFj7mX4ceNcYG30H%2FSnU91K&X-Amz-Signature=ef8563a6bb232a2bc52ad7cc4b2599feeb242f5270dacec6d9535e2061b4c1a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRQFT2N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCShYynB3u7FaKAu012QZco06lXgghlOUrQ9KESE7ctAAIgUoDDkAw5XrkjcxaZGXJ8mpC7Gi2aIMxBcd2OX9mfqjIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6V2CFkRN4U4%2FGOircAzFrQZ9b1%2BMnxv1AKQXaDXn%2FMEXtn94EAsLJwABT4U%2B65e3kX%2B1jRuoPX6%2BzLEPSTgWLsfKFy0dbpcQcNdivisNyRV9%2B2Zzb8dmepOWcG8ej3Q9jIeBWS4tVC6ZjKwhwHL9CQqlaXW8SBsvK10bD6heBoGpCRQqEeuJB5Mf1NCUJ%2FUa9lXS8Az7FfGZEiqkNyWFYFCC%2Fc5YW6nOo0WI2ifwGj%2BC7IJa09Th2wSngcy2Xt2N1Xr4rqmDzLMY7KG6h7%2FDo4x%2BTSaZQzlWozm74T8ryiXiJLYRYH2lpD%2Bn0wY%2BkFh9Uy2tkR6ft2FFtnjkQgM5qdGnD1LbxhTuACrn2Y%2B3UhOf3Dwhi0UUAAT2CSMFaBItKE5WsAehJiozEhB8wkv5uXGZ%2F4EOZJ2i%2FPIHtSn2hNmZ2MUCIzGufPw2MnX7D2FhCYYEW7o8ldQ1XTpCfu35RxzWYvb3dVgSwDyFPQIsMWqdJibcudvyhxCT6saWJcOSivfFGIfDQc9VqAzt%2FaAW6PKxZsluJSfpJv%2BHeb4%2BWVbi9%2Fpz88vTLBVrRKH0uG3LATBAO1q2yMeshcf4isxgxzVR38%2Brl2Z9ZJzfBx6Urd71Eqtxgqj3okrOL7Q7WGuDWoIFTOkBlpur7MLmJ18oGOqUBCUsOJUs636%2BxlAo3eS6P%2FUmErHuqXf6sOCGPe2cHns5Vo1XS21CchROwOaU8xeyVgjtseehsw68YB0dWOU%2B2aVOiiFN4DhF36j%2B7xx9hrGtEYm%2FNDwlkXcM1zqRQfhBkQQ64P8%2B%2FdvmuYjeTlGPrFrCooMtJhE%2BWa1%2FoLSaJOD9c8s58aFjcbWiP5DkCbQbEdQNIHpFj7mX4ceNcYG30H%2FSnU91K&X-Amz-Signature=3196c81ebc93d7ce9046cc7eed35aa256bec40b75812be28f53021978155f7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRQFT2N%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCShYynB3u7FaKAu012QZco06lXgghlOUrQ9KESE7ctAAIgUoDDkAw5XrkjcxaZGXJ8mpC7Gi2aIMxBcd2OX9mfqjIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6V2CFkRN4U4%2FGOircAzFrQZ9b1%2BMnxv1AKQXaDXn%2FMEXtn94EAsLJwABT4U%2B65e3kX%2B1jRuoPX6%2BzLEPSTgWLsfKFy0dbpcQcNdivisNyRV9%2B2Zzb8dmepOWcG8ej3Q9jIeBWS4tVC6ZjKwhwHL9CQqlaXW8SBsvK10bD6heBoGpCRQqEeuJB5Mf1NCUJ%2FUa9lXS8Az7FfGZEiqkNyWFYFCC%2Fc5YW6nOo0WI2ifwGj%2BC7IJa09Th2wSngcy2Xt2N1Xr4rqmDzLMY7KG6h7%2FDo4x%2BTSaZQzlWozm74T8ryiXiJLYRYH2lpD%2Bn0wY%2BkFh9Uy2tkR6ft2FFtnjkQgM5qdGnD1LbxhTuACrn2Y%2B3UhOf3Dwhi0UUAAT2CSMFaBItKE5WsAehJiozEhB8wkv5uXGZ%2F4EOZJ2i%2FPIHtSn2hNmZ2MUCIzGufPw2MnX7D2FhCYYEW7o8ldQ1XTpCfu35RxzWYvb3dVgSwDyFPQIsMWqdJibcudvyhxCT6saWJcOSivfFGIfDQc9VqAzt%2FaAW6PKxZsluJSfpJv%2BHeb4%2BWVbi9%2Fpz88vTLBVrRKH0uG3LATBAO1q2yMeshcf4isxgxzVR38%2Brl2Z9ZJzfBx6Urd71Eqtxgqj3okrOL7Q7WGuDWoIFTOkBlpur7MLmJ18oGOqUBCUsOJUs636%2BxlAo3eS6P%2FUmErHuqXf6sOCGPe2cHns5Vo1XS21CchROwOaU8xeyVgjtseehsw68YB0dWOU%2B2aVOiiFN4DhF36j%2B7xx9hrGtEYm%2FNDwlkXcM1zqRQfhBkQQ64P8%2B%2FdvmuYjeTlGPrFrCooMtJhE%2BWa1%2FoLSaJOD9c8s58aFjcbWiP5DkCbQbEdQNIHpFj7mX4ceNcYG30H%2FSnU91K&X-Amz-Signature=2e83d1ba6f77897a89972046d829f80902e6bf81450e7071ea5882576c9b2bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHXVVIU%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCskKZzo7pCzo2XIkGmYRnls4ynY74g2MtWGh3bzdNikQIhAPgNAvd4Vnp7rup4kYzjdHuO9tkaZQ53%2FuTxH7lxElbTKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwjab1pmqI8evZiVGQq3AMY10X7f1z4BjF04H%2BTtLA4Qzh0A7szEBn4VqdR1n4EWImi7ntnnATCs%2BeJPpaoAbJ2cxHfI1mTJCZ%2B9jUS0QClqu3eAzyaL1D1dXBmAr0M3UvDfsWG%2BztCerw6jCAlKF7AN2ykMEPpHAOvk5PYY53GtOpbr9NiFKobgqZVPwXhiSQxR65F%2FhuMYhjWeUHmoj06ZC8%2B%2F1MZ9tP%2BJamFZ7oEc4uP5AtHlkRoJ6eYUy930vTdx7o0T1R4CZ%2BNGxbRLPamYGMEPdi0CaurvDc%2Ftw6GVxmlv0d9sOrs2IS8gD%2FdNu3tzdTnspcYuFY%2FTajAD7yqAKTVPvQjNwN%2Bvx%2FoiiwHdt%2BFj2ZSImN6G2FO6mbaa4cCcgJovsGLJItdq1G%2B52iB5vsFQ4AMx9LXAoVxAyEl4mQojasA2yPaw2WiJlAbOosvfMEIvXdEverg%2By%2BDjggT9cs%2FdfPZj4k1T%2FEZyc5QinPtFs%2BYolxpA0i1hdSvOKHXV76vZcZ8qZingDxbKAsmp9kl9PNY%2BERNDRT3LWKq6N5Ysy2lOZNikPXq0OSbu09xmsk%2F3D9JoFnDd8IhbjwmQUGukpLYEJQ9KYKf5u4LqdB82PW2Gh1wmPFOd9rRY7atqLMiKNNenS01HzDMhNfKBjqkATAAzEQVs4WSq1EM%2FHCXm4JgGq23zYr5KbwjX3J%2FfERuCceAATualyndeRdPV7iHwrUX7MC6t6I90hH1jVAxZOeXzAyRRo90rheLGSd%2FLEYFhpUzzjSEa5dT4AM7ShbKNN7NpUlAVdyXegAr9mSh%2FJyPiuzrHb7Q1CDoWFUJrTVd1XnzMqXWglSazLOUK4sUYgeZ0NwUQv2seKjKh8lwgIe%2Fm55h&X-Amz-Signature=253bae6e2bd7679ed4f44ea20a9d01c836ab9e59c5bb24364edae28515cd8b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

