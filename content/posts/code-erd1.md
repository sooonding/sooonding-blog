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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5IICQJ%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAL0VwrSvIWVdVDrVpZyNFn5BrJur%2FbJqZja1wK4ebQIgPUdv6XA1I2GfKiEmV%2FtR%2Fh8u27UAFKG6FGoTZ0beXgYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOgbBeK69OfwPe0uNCrcAzATVFBW6Hr3QFyOBrQP1mFJWRyhPcQFpWG9Mwv%2FPjMgQpQ02S6yk%2FJouBr08rc1OG%2FRlKyJi79Vce0kgR2SRfYtFkxJuXHpzp2DqwlabVryjb3Z9ALGATNCwjEndrBjnoQ%2FknyK%2BApls%2BKdXqdCmSBKNqlR29Y%2BLs60rH%2FY0BLoOB716XtrsmF8xr799%2Fn1MZkgURVKPEqspUMtv2jxolCIleWtGEZIpWXelBMIErKXCFi5c8VJQmPc%2F4FJSgQk%2FUwQrTN2vvDOswqrhqkaSdHpABLerKoC6Gcbx06JTrZABbIZ%2BpWTd6UhnzR8Ix9cyLFF%2Fuy0kStSUiJWtvatKUx8DWpsG4KKy05nIAxHbUGqwBcBX3D%2BLwJNq3q2OxLroOHn25vKIGVeaHzFDQ986q0HwgP9DcLVOdEpJNiQwKsP96UAJNeRUsEgg3pLOurbybJ75sYPLyZ2aZj19mMkkzEAMxPO8ZJzo257FZdlhp6wdcARRGRMxYpuN6RBWlRhJLJtXk%2BzYVCEs5uf5tnKEOlwFRQUM1wQhhC%2BoHIIeSRbP%2BsS1rV0PJ1uRERkGQBn3I4GhFANCA9GLClN6aI3TNngL4KniIA2lv9k5Y%2FeKZ2RwSVxgDyzwuxRqnsYMJyF99UGOqUBlD%2B%2B4MViU3gKRnwRoopCf7MaKtxtnAYL4jpv743ll7BVZDq%2FybfaqtLwgRzv4p5JrCsdfb1CZxq5v76Zdv0c5VlU47hey9J1gRQXW7vXZj7GV2SHayULyD7t9lThrZDdahkM1UkuMhmbnQM9ZugmU%2BAjNAB9toBUaUpaN1TW3Df%2BzQitMifLqx%2B5bIP5hTYvoGZDmboocSlwI0yWv4%2Bsnb2qDyBL&X-Amz-Signature=fbfe04376598bacec272f52e932767448b363196b81f9787d531661a76d74695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWPQEPF%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygRnraK2DDBXyTdLp5ydGPYt3kLLd5jNKtq7QBJnljAiEAq1qP6nOX9OsLae%2F355ZuYcoDhhFao0m3LunsT9bnsGMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKIuayIUxozzL4iQ%2ByrcAzEmwly7mPJ1dZvjvHm4EcPa%2FdHzsvKiKWq43QpMD6XH%2Fn%2BdPmKWSdNlSHTmp8LVAsfPySoL5Bf4EOrm6Odz0dXBs2LateyZV8StstQfu8Lc6FXoBXaqvCB3IsNOSYD9ZOY5MzN15y%2BMYesXaf9JygkPYbg8GYlxlKB7St%2FWEEitm0bQZkQepEC4seiXO0OBaDjmF0gVpCWG%2BF8FP52U5rC2IsLAeIoFRXRTI7nVL0eCgH%2Fuj0zZncaBUgOrKKSt2s73z%2BacNNmLnFTdsndk27omEY9qNFOZfJiBfA4RHAaiUom6Sa%2F%2FVZTTNh2z6mkRz3RYi3oyMGdReqiX5CqGMuBijb7CdgXcht0YJHjkQ%2Faex%2BQF7HzqsP0e17%2BE8awOXdxAjIon%2Fy5C%2BpqoSnI5G5Us4xvAd6W0CDE1YdFlNTm%2FbU5hfjPLOtxlDdu%2FZ68rJ1SLEUPXYLSi8PjzNZcoC8yiNSxYp3S6ZO%2BXYYyPZ3X8i0eEqlW2A2ZB4%2BNaj6pqeycr928sfZZch%2BL4ATLc0tNPFpWxwus1A8hiaiYFcpw8hRU74fMz9MGkPwLLZahQ%2BfnHnjzr1nZ%2BUZi6Il%2BAe4D3069Ra5UlAPhehjLzHanK3EKLH4Fo8aPfwWdxMPSC99UGOqUBIs7OOvG1jMWs3UFdZ5%2FrYXFDHbNcuosaE%2FS84niQrBKC9EubGBfTsjLTuqK%2B3N6gALCs%2Bsrp69FwqpMQosxV5O1HL528eSb4Y8l3X4KgLLQKgohuM4RBTKbaD%2BX1UnofXSPSo3yqMmm3MrNCcFkumIWF54Srde2twEisPr8%2ByfRgve9%2FgcdQPFONXvix7Dx4xEJ6S5x%2BDzyw6Mw2uUnEqOfRgS%2BY&X-Amz-Signature=208de237cac5f909d3a09ada18118d58e9252c38b3af8582e211d7b08ad5b8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWPQEPF%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygRnraK2DDBXyTdLp5ydGPYt3kLLd5jNKtq7QBJnljAiEAq1qP6nOX9OsLae%2F355ZuYcoDhhFao0m3LunsT9bnsGMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKIuayIUxozzL4iQ%2ByrcAzEmwly7mPJ1dZvjvHm4EcPa%2FdHzsvKiKWq43QpMD6XH%2Fn%2BdPmKWSdNlSHTmp8LVAsfPySoL5Bf4EOrm6Odz0dXBs2LateyZV8StstQfu8Lc6FXoBXaqvCB3IsNOSYD9ZOY5MzN15y%2BMYesXaf9JygkPYbg8GYlxlKB7St%2FWEEitm0bQZkQepEC4seiXO0OBaDjmF0gVpCWG%2BF8FP52U5rC2IsLAeIoFRXRTI7nVL0eCgH%2Fuj0zZncaBUgOrKKSt2s73z%2BacNNmLnFTdsndk27omEY9qNFOZfJiBfA4RHAaiUom6Sa%2F%2FVZTTNh2z6mkRz3RYi3oyMGdReqiX5CqGMuBijb7CdgXcht0YJHjkQ%2Faex%2BQF7HzqsP0e17%2BE8awOXdxAjIon%2Fy5C%2BpqoSnI5G5Us4xvAd6W0CDE1YdFlNTm%2FbU5hfjPLOtxlDdu%2FZ68rJ1SLEUPXYLSi8PjzNZcoC8yiNSxYp3S6ZO%2BXYYyPZ3X8i0eEqlW2A2ZB4%2BNaj6pqeycr928sfZZch%2BL4ATLc0tNPFpWxwus1A8hiaiYFcpw8hRU74fMz9MGkPwLLZahQ%2BfnHnjzr1nZ%2BUZi6Il%2BAe4D3069Ra5UlAPhehjLzHanK3EKLH4Fo8aPfwWdxMPSC99UGOqUBIs7OOvG1jMWs3UFdZ5%2FrYXFDHbNcuosaE%2FS84niQrBKC9EubGBfTsjLTuqK%2B3N6gALCs%2Bsrp69FwqpMQosxV5O1HL528eSb4Y8l3X4KgLLQKgohuM4RBTKbaD%2BX1UnofXSPSo3yqMmm3MrNCcFkumIWF54Srde2twEisPr8%2ByfRgve9%2FgcdQPFONXvix7Dx4xEJ6S5x%2BDzyw6Mw2uUnEqOfRgS%2BY&X-Amz-Signature=ee07ecf098d5a028c5c45161cc76d40cdd9f485c39575515809b2f1fd92384d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWPQEPF%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygRnraK2DDBXyTdLp5ydGPYt3kLLd5jNKtq7QBJnljAiEAq1qP6nOX9OsLae%2F355ZuYcoDhhFao0m3LunsT9bnsGMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKIuayIUxozzL4iQ%2ByrcAzEmwly7mPJ1dZvjvHm4EcPa%2FdHzsvKiKWq43QpMD6XH%2Fn%2BdPmKWSdNlSHTmp8LVAsfPySoL5Bf4EOrm6Odz0dXBs2LateyZV8StstQfu8Lc6FXoBXaqvCB3IsNOSYD9ZOY5MzN15y%2BMYesXaf9JygkPYbg8GYlxlKB7St%2FWEEitm0bQZkQepEC4seiXO0OBaDjmF0gVpCWG%2BF8FP52U5rC2IsLAeIoFRXRTI7nVL0eCgH%2Fuj0zZncaBUgOrKKSt2s73z%2BacNNmLnFTdsndk27omEY9qNFOZfJiBfA4RHAaiUom6Sa%2F%2FVZTTNh2z6mkRz3RYi3oyMGdReqiX5CqGMuBijb7CdgXcht0YJHjkQ%2Faex%2BQF7HzqsP0e17%2BE8awOXdxAjIon%2Fy5C%2BpqoSnI5G5Us4xvAd6W0CDE1YdFlNTm%2FbU5hfjPLOtxlDdu%2FZ68rJ1SLEUPXYLSi8PjzNZcoC8yiNSxYp3S6ZO%2BXYYyPZ3X8i0eEqlW2A2ZB4%2BNaj6pqeycr928sfZZch%2BL4ATLc0tNPFpWxwus1A8hiaiYFcpw8hRU74fMz9MGkPwLLZahQ%2BfnHnjzr1nZ%2BUZi6Il%2BAe4D3069Ra5UlAPhehjLzHanK3EKLH4Fo8aPfwWdxMPSC99UGOqUBIs7OOvG1jMWs3UFdZ5%2FrYXFDHbNcuosaE%2FS84niQrBKC9EubGBfTsjLTuqK%2B3N6gALCs%2Bsrp69FwqpMQosxV5O1HL528eSb4Y8l3X4KgLLQKgohuM4RBTKbaD%2BX1UnofXSPSo3yqMmm3MrNCcFkumIWF54Srde2twEisPr8%2ByfRgve9%2FgcdQPFONXvix7Dx4xEJ6S5x%2BDzyw6Mw2uUnEqOfRgS%2BY&X-Amz-Signature=f3b2699db2c5cffe1ab2820763f3bbc9c147fec7deecc9217097af5b0087b68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWPQEPF%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygRnraK2DDBXyTdLp5ydGPYt3kLLd5jNKtq7QBJnljAiEAq1qP6nOX9OsLae%2F355ZuYcoDhhFao0m3LunsT9bnsGMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKIuayIUxozzL4iQ%2ByrcAzEmwly7mPJ1dZvjvHm4EcPa%2FdHzsvKiKWq43QpMD6XH%2Fn%2BdPmKWSdNlSHTmp8LVAsfPySoL5Bf4EOrm6Odz0dXBs2LateyZV8StstQfu8Lc6FXoBXaqvCB3IsNOSYD9ZOY5MzN15y%2BMYesXaf9JygkPYbg8GYlxlKB7St%2FWEEitm0bQZkQepEC4seiXO0OBaDjmF0gVpCWG%2BF8FP52U5rC2IsLAeIoFRXRTI7nVL0eCgH%2Fuj0zZncaBUgOrKKSt2s73z%2BacNNmLnFTdsndk27omEY9qNFOZfJiBfA4RHAaiUom6Sa%2F%2FVZTTNh2z6mkRz3RYi3oyMGdReqiX5CqGMuBijb7CdgXcht0YJHjkQ%2Faex%2BQF7HzqsP0e17%2BE8awOXdxAjIon%2Fy5C%2BpqoSnI5G5Us4xvAd6W0CDE1YdFlNTm%2FbU5hfjPLOtxlDdu%2FZ68rJ1SLEUPXYLSi8PjzNZcoC8yiNSxYp3S6ZO%2BXYYyPZ3X8i0eEqlW2A2ZB4%2BNaj6pqeycr928sfZZch%2BL4ATLc0tNPFpWxwus1A8hiaiYFcpw8hRU74fMz9MGkPwLLZahQ%2BfnHnjzr1nZ%2BUZi6Il%2BAe4D3069Ra5UlAPhehjLzHanK3EKLH4Fo8aPfwWdxMPSC99UGOqUBIs7OOvG1jMWs3UFdZ5%2FrYXFDHbNcuosaE%2FS84niQrBKC9EubGBfTsjLTuqK%2B3N6gALCs%2Bsrp69FwqpMQosxV5O1HL528eSb4Y8l3X4KgLLQKgohuM4RBTKbaD%2BX1UnofXSPSo3yqMmm3MrNCcFkumIWF54Srde2twEisPr8%2ByfRgve9%2FgcdQPFONXvix7Dx4xEJ6S5x%2BDzyw6Mw2uUnEqOfRgS%2BY&X-Amz-Signature=e19ff38a237818a5af3537018dfbe6aa256d411b415ef00d38d2277fe0494cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWPQEPF%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBygRnraK2DDBXyTdLp5ydGPYt3kLLd5jNKtq7QBJnljAiEAq1qP6nOX9OsLae%2F355ZuYcoDhhFao0m3LunsT9bnsGMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKIuayIUxozzL4iQ%2ByrcAzEmwly7mPJ1dZvjvHm4EcPa%2FdHzsvKiKWq43QpMD6XH%2Fn%2BdPmKWSdNlSHTmp8LVAsfPySoL5Bf4EOrm6Odz0dXBs2LateyZV8StstQfu8Lc6FXoBXaqvCB3IsNOSYD9ZOY5MzN15y%2BMYesXaf9JygkPYbg8GYlxlKB7St%2FWEEitm0bQZkQepEC4seiXO0OBaDjmF0gVpCWG%2BF8FP52U5rC2IsLAeIoFRXRTI7nVL0eCgH%2Fuj0zZncaBUgOrKKSt2s73z%2BacNNmLnFTdsndk27omEY9qNFOZfJiBfA4RHAaiUom6Sa%2F%2FVZTTNh2z6mkRz3RYi3oyMGdReqiX5CqGMuBijb7CdgXcht0YJHjkQ%2Faex%2BQF7HzqsP0e17%2BE8awOXdxAjIon%2Fy5C%2BpqoSnI5G5Us4xvAd6W0CDE1YdFlNTm%2FbU5hfjPLOtxlDdu%2FZ68rJ1SLEUPXYLSi8PjzNZcoC8yiNSxYp3S6ZO%2BXYYyPZ3X8i0eEqlW2A2ZB4%2BNaj6pqeycr928sfZZch%2BL4ATLc0tNPFpWxwus1A8hiaiYFcpw8hRU74fMz9MGkPwLLZahQ%2BfnHnjzr1nZ%2BUZi6Il%2BAe4D3069Ra5UlAPhehjLzHanK3EKLH4Fo8aPfwWdxMPSC99UGOqUBIs7OOvG1jMWs3UFdZ5%2FrYXFDHbNcuosaE%2FS84niQrBKC9EubGBfTsjLTuqK%2B3N6gALCs%2Bsrp69FwqpMQosxV5O1HL528eSb4Y8l3X4KgLLQKgohuM4RBTKbaD%2BX1UnofXSPSo3yqMmm3MrNCcFkumIWF54Srde2twEisPr8%2ByfRgve9%2FgcdQPFONXvix7Dx4xEJ6S5x%2BDzyw6Mw2uUnEqOfRgS%2BY&X-Amz-Signature=536425e4a1adfeeecb8c635367a3029c8ecc8fb62307284ab00b77cbac2d728a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5IICQJ%2F20261001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261001T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKAL0VwrSvIWVdVDrVpZyNFn5BrJur%2FbJqZja1wK4ebQIgPUdv6XA1I2GfKiEmV%2FtR%2Fh8u27UAFKG6FGoTZ0beXgYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOgbBeK69OfwPe0uNCrcAzATVFBW6Hr3QFyOBrQP1mFJWRyhPcQFpWG9Mwv%2FPjMgQpQ02S6yk%2FJouBr08rc1OG%2FRlKyJi79Vce0kgR2SRfYtFkxJuXHpzp2DqwlabVryjb3Z9ALGATNCwjEndrBjnoQ%2FknyK%2BApls%2BKdXqdCmSBKNqlR29Y%2BLs60rH%2FY0BLoOB716XtrsmF8xr799%2Fn1MZkgURVKPEqspUMtv2jxolCIleWtGEZIpWXelBMIErKXCFi5c8VJQmPc%2F4FJSgQk%2FUwQrTN2vvDOswqrhqkaSdHpABLerKoC6Gcbx06JTrZABbIZ%2BpWTd6UhnzR8Ix9cyLFF%2Fuy0kStSUiJWtvatKUx8DWpsG4KKy05nIAxHbUGqwBcBX3D%2BLwJNq3q2OxLroOHn25vKIGVeaHzFDQ986q0HwgP9DcLVOdEpJNiQwKsP96UAJNeRUsEgg3pLOurbybJ75sYPLyZ2aZj19mMkkzEAMxPO8ZJzo257FZdlhp6wdcARRGRMxYpuN6RBWlRhJLJtXk%2BzYVCEs5uf5tnKEOlwFRQUM1wQhhC%2BoHIIeSRbP%2BsS1rV0PJ1uRERkGQBn3I4GhFANCA9GLClN6aI3TNngL4KniIA2lv9k5Y%2FeKZ2RwSVxgDyzwuxRqnsYMJyF99UGOqUBlD%2B%2B4MViU3gKRnwRoopCf7MaKtxtnAYL4jpv743ll7BVZDq%2FybfaqtLwgRzv4p5JrCsdfb1CZxq5v76Zdv0c5VlU47hey9J1gRQXW7vXZj7GV2SHayULyD7t9lThrZDdahkM1UkuMhmbnQM9ZugmU%2BAjNAB9toBUaUpaN1TW3Df%2BzQitMifLqx%2B5bIP5hTYvoGZDmboocSlwI0yWv4%2Bsnb2qDyBL&X-Amz-Signature=8a93a9c01724876e5e06c2837a1bc5ff0e16b9a14e016a05595ebc9b58161184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

