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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNRR7K7%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIC56hijRJWks3wpP9979D9PnC1fWYsyyF4DF4MRxLtlIAiEAi0vovkwTc%2BTdQU9O1oIBEGOQOtTzrCCYx%2Bz%2BFbq%2BFlwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKHNJF8PgbG5fMMRircAyU6yn0HHkjgVsXFZvjrG2Go1hmAwAPKxCS90CuoU0VogpLMQWzdi%2BfNqoZoCR3gvFqos%2BP8KiAXHh%2Ftp05ETbDvxhjGf9NuXQ7VaSBsU88v5FXc6YR3AeGvNER2xx9ACn8pPiQb%2FtuU0BN2j2ghNpLiq1ZTXOp7tfHgDNNuL%2FNJkPYSjD%2B6%2BGiT7%2FpyKFgD%2BxZdCRChCxJEjn91D9dFf730eJQU8ZUg1Fipdeia8OyX36tKPrmzA4wjobloTboZgkK6t%2Fctx1U8Nv4fGV8tHNlivih%2Be8axz4vVTJ2qa3rfnn7pq2g%2FYz262ZJNmcUbCa7s5xrgo7WfhrvXfVZWTFcvP9t7x7Bp0O6E29lQS1pEAjDXYaV8nheEeaAKMIdSpeKBNoiTD2bezvEV8CKiTwgqsuslWTEg%2BjkHyIQcC2irQ%2BfhkJSk4hDFhpQtpPD0P%2BBHT%2BSbGPk84kT%2FphiiLghNOeAwzIY189alAJ65sCRhMhabQG7uwA1rNYRLKRbre3X0bCEpcwQKf45MZD8V%2BCdZMrTAtaDO5Q%2BzoPa77l2JReg2BSTrWbJuX1nlgtNl%2F1qwnrSUwi9OUi6LQKZk5SNe2TXezPdFKaVbtP87BwPNzKIr9gSCgyFLo1HPMKjfisgGOqUBN%2BgYLo1KJWwpjbn1hIHF29DYo3fKQauam5TLfRAtS%2By%2FQCS9O0U8O6%2B%2BZxHBnIAPxO0G4B69cSqSAapaR5lkRdHPL1AnNsbSxSChJwXqyU3TSmn0CUx9SL2B8Mf9yjB%2FC0jtdGvnkN3A93PUnxhuKWPA5090o192oUXtRcH%2F99Z%2BHcVON%2Fa4CmDCweU6rKprb%2B45VxMwJdqL6QWARfABiATQ8gSu&X-Amz-Signature=73943307483647d2b738d92dd87ec69ce2de537ac1fa195855afc7562a855d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQW33VG%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHiH7cqkGPcy72pKECdE3V8MHKu4P2QnfnAOuENgSui%2FAiEAhaRM8fv98JWYmwvyiWsFxrpT5WVQC%2FMhpGh0i47yAtoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3XECGCFrZAIpjl2CrcA1epm3trOlXPoQwB%2BQRtyg7hpjKYXS1DRWyIH6lqsI2HnzPX8WmAA%2FNV9nFgm4WQ7Jg%2FpPzdDQvRfABXwSf0%2F7BpIQ2sXIhgp4Z7ppuAXdTWqzL%2B59V1lZaxdxVaz360732JYVNemLsMa0PV9piyRySxjSIQSQvV38llV2lkwvTFbiOjJ2qasJ6HbeTOyoy6CSJJfPBGbL1EV5aeQD9T7cbKz%2BkvILjdnnf5RLDnZLGORtR%2B4%2FnIrckcOwETH0kbQgxceBidshpQ5WMwctCDnBoa%2BxiQPKrnSTUDeHrOGhE8udKy7cSF1jz6ew%2Bn%2Fls4K7nDExb8TmOscBav%2Bt6umOuHbFg0icMtReLX8AkCmC4zIR8EYH2d11l%2B1rodKQYFQP7n1w1xKPaS40%2BRIsgYUcbNwz9IeOMiJm69d4RvE%2FlfTAgA1YUF%2FXuTI3LzDoRZCk%2BRw11T7wraN8UsrzYf0mVQC%2Bp35Kq8cPmE3Bb5nzn%2BHw9XqqtKwf2r%2Bq7ou%2BgQgGawbEPBp7oo5HWC1%2FLJlQwBEvFbHhk7my8me9wIXl4N1tDhHZOErUaPyxMuMrJH2vRKy1Ve4dH0jbzS5x%2FoDtO2bYHA%2BXj5lYwxzo3rO1qX2SHFDQAwznjO%2F1AAMIHfisgGOqUBNlu53%2FiEo%2B7hbJC3Kc3qvZxBYevFLd5H2wCnTn6lEPsl7EqqJOBCWCxqltJxQpWN55uxcMm7TxF83aRA1MSOTJ40H5zUPhX4kSWxErvoUiwFwIV8M4BLhD%2BX2VXI1V2H8sp0B98hhcyaknm7nLJpeKngj08XMW8Cd4MxiJJTLYda0TGQoPgzWFlARb3RmsTx5%2FBLkysDNoG%2BZDRhjm1HLU6P9nxL&X-Amz-Signature=4f032632395d106a3e055e67c575d2f24b5c04eb2811b0c8efd81b796ecc154c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQW33VG%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHiH7cqkGPcy72pKECdE3V8MHKu4P2QnfnAOuENgSui%2FAiEAhaRM8fv98JWYmwvyiWsFxrpT5WVQC%2FMhpGh0i47yAtoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3XECGCFrZAIpjl2CrcA1epm3trOlXPoQwB%2BQRtyg7hpjKYXS1DRWyIH6lqsI2HnzPX8WmAA%2FNV9nFgm4WQ7Jg%2FpPzdDQvRfABXwSf0%2F7BpIQ2sXIhgp4Z7ppuAXdTWqzL%2B59V1lZaxdxVaz360732JYVNemLsMa0PV9piyRySxjSIQSQvV38llV2lkwvTFbiOjJ2qasJ6HbeTOyoy6CSJJfPBGbL1EV5aeQD9T7cbKz%2BkvILjdnnf5RLDnZLGORtR%2B4%2FnIrckcOwETH0kbQgxceBidshpQ5WMwctCDnBoa%2BxiQPKrnSTUDeHrOGhE8udKy7cSF1jz6ew%2Bn%2Fls4K7nDExb8TmOscBav%2Bt6umOuHbFg0icMtReLX8AkCmC4zIR8EYH2d11l%2B1rodKQYFQP7n1w1xKPaS40%2BRIsgYUcbNwz9IeOMiJm69d4RvE%2FlfTAgA1YUF%2FXuTI3LzDoRZCk%2BRw11T7wraN8UsrzYf0mVQC%2Bp35Kq8cPmE3Bb5nzn%2BHw9XqqtKwf2r%2Bq7ou%2BgQgGawbEPBp7oo5HWC1%2FLJlQwBEvFbHhk7my8me9wIXl4N1tDhHZOErUaPyxMuMrJH2vRKy1Ve4dH0jbzS5x%2FoDtO2bYHA%2BXj5lYwxzo3rO1qX2SHFDQAwznjO%2F1AAMIHfisgGOqUBNlu53%2FiEo%2B7hbJC3Kc3qvZxBYevFLd5H2wCnTn6lEPsl7EqqJOBCWCxqltJxQpWN55uxcMm7TxF83aRA1MSOTJ40H5zUPhX4kSWxErvoUiwFwIV8M4BLhD%2BX2VXI1V2H8sp0B98hhcyaknm7nLJpeKngj08XMW8Cd4MxiJJTLYda0TGQoPgzWFlARb3RmsTx5%2FBLkysDNoG%2BZDRhjm1HLU6P9nxL&X-Amz-Signature=2257ef312babd674df6529975728256f4ad31ce36d43dba4952fb1e89b6419ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQW33VG%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHiH7cqkGPcy72pKECdE3V8MHKu4P2QnfnAOuENgSui%2FAiEAhaRM8fv98JWYmwvyiWsFxrpT5WVQC%2FMhpGh0i47yAtoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3XECGCFrZAIpjl2CrcA1epm3trOlXPoQwB%2BQRtyg7hpjKYXS1DRWyIH6lqsI2HnzPX8WmAA%2FNV9nFgm4WQ7Jg%2FpPzdDQvRfABXwSf0%2F7BpIQ2sXIhgp4Z7ppuAXdTWqzL%2B59V1lZaxdxVaz360732JYVNemLsMa0PV9piyRySxjSIQSQvV38llV2lkwvTFbiOjJ2qasJ6HbeTOyoy6CSJJfPBGbL1EV5aeQD9T7cbKz%2BkvILjdnnf5RLDnZLGORtR%2B4%2FnIrckcOwETH0kbQgxceBidshpQ5WMwctCDnBoa%2BxiQPKrnSTUDeHrOGhE8udKy7cSF1jz6ew%2Bn%2Fls4K7nDExb8TmOscBav%2Bt6umOuHbFg0icMtReLX8AkCmC4zIR8EYH2d11l%2B1rodKQYFQP7n1w1xKPaS40%2BRIsgYUcbNwz9IeOMiJm69d4RvE%2FlfTAgA1YUF%2FXuTI3LzDoRZCk%2BRw11T7wraN8UsrzYf0mVQC%2Bp35Kq8cPmE3Bb5nzn%2BHw9XqqtKwf2r%2Bq7ou%2BgQgGawbEPBp7oo5HWC1%2FLJlQwBEvFbHhk7my8me9wIXl4N1tDhHZOErUaPyxMuMrJH2vRKy1Ve4dH0jbzS5x%2FoDtO2bYHA%2BXj5lYwxzo3rO1qX2SHFDQAwznjO%2F1AAMIHfisgGOqUBNlu53%2FiEo%2B7hbJC3Kc3qvZxBYevFLd5H2wCnTn6lEPsl7EqqJOBCWCxqltJxQpWN55uxcMm7TxF83aRA1MSOTJ40H5zUPhX4kSWxErvoUiwFwIV8M4BLhD%2BX2VXI1V2H8sp0B98hhcyaknm7nLJpeKngj08XMW8Cd4MxiJJTLYda0TGQoPgzWFlARb3RmsTx5%2FBLkysDNoG%2BZDRhjm1HLU6P9nxL&X-Amz-Signature=3fe3d6ceb0d83d024015a411f4b8028a67cfd108d0d1065ca31e7e59dc76e7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQW33VG%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHiH7cqkGPcy72pKECdE3V8MHKu4P2QnfnAOuENgSui%2FAiEAhaRM8fv98JWYmwvyiWsFxrpT5WVQC%2FMhpGh0i47yAtoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3XECGCFrZAIpjl2CrcA1epm3trOlXPoQwB%2BQRtyg7hpjKYXS1DRWyIH6lqsI2HnzPX8WmAA%2FNV9nFgm4WQ7Jg%2FpPzdDQvRfABXwSf0%2F7BpIQ2sXIhgp4Z7ppuAXdTWqzL%2B59V1lZaxdxVaz360732JYVNemLsMa0PV9piyRySxjSIQSQvV38llV2lkwvTFbiOjJ2qasJ6HbeTOyoy6CSJJfPBGbL1EV5aeQD9T7cbKz%2BkvILjdnnf5RLDnZLGORtR%2B4%2FnIrckcOwETH0kbQgxceBidshpQ5WMwctCDnBoa%2BxiQPKrnSTUDeHrOGhE8udKy7cSF1jz6ew%2Bn%2Fls4K7nDExb8TmOscBav%2Bt6umOuHbFg0icMtReLX8AkCmC4zIR8EYH2d11l%2B1rodKQYFQP7n1w1xKPaS40%2BRIsgYUcbNwz9IeOMiJm69d4RvE%2FlfTAgA1YUF%2FXuTI3LzDoRZCk%2BRw11T7wraN8UsrzYf0mVQC%2Bp35Kq8cPmE3Bb5nzn%2BHw9XqqtKwf2r%2Bq7ou%2BgQgGawbEPBp7oo5HWC1%2FLJlQwBEvFbHhk7my8me9wIXl4N1tDhHZOErUaPyxMuMrJH2vRKy1Ve4dH0jbzS5x%2FoDtO2bYHA%2BXj5lYwxzo3rO1qX2SHFDQAwznjO%2F1AAMIHfisgGOqUBNlu53%2FiEo%2B7hbJC3Kc3qvZxBYevFLd5H2wCnTn6lEPsl7EqqJOBCWCxqltJxQpWN55uxcMm7TxF83aRA1MSOTJ40H5zUPhX4kSWxErvoUiwFwIV8M4BLhD%2BX2VXI1V2H8sp0B98hhcyaknm7nLJpeKngj08XMW8Cd4MxiJJTLYda0TGQoPgzWFlARb3RmsTx5%2FBLkysDNoG%2BZDRhjm1HLU6P9nxL&X-Amz-Signature=fb73a06a7de7e28cdcc54963e7ba4f4a8eab9ba88e1bf4ecc99d0e16eb60a8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQQW33VG%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHiH7cqkGPcy72pKECdE3V8MHKu4P2QnfnAOuENgSui%2FAiEAhaRM8fv98JWYmwvyiWsFxrpT5WVQC%2FMhpGh0i47yAtoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3XECGCFrZAIpjl2CrcA1epm3trOlXPoQwB%2BQRtyg7hpjKYXS1DRWyIH6lqsI2HnzPX8WmAA%2FNV9nFgm4WQ7Jg%2FpPzdDQvRfABXwSf0%2F7BpIQ2sXIhgp4Z7ppuAXdTWqzL%2B59V1lZaxdxVaz360732JYVNemLsMa0PV9piyRySxjSIQSQvV38llV2lkwvTFbiOjJ2qasJ6HbeTOyoy6CSJJfPBGbL1EV5aeQD9T7cbKz%2BkvILjdnnf5RLDnZLGORtR%2B4%2FnIrckcOwETH0kbQgxceBidshpQ5WMwctCDnBoa%2BxiQPKrnSTUDeHrOGhE8udKy7cSF1jz6ew%2Bn%2Fls4K7nDExb8TmOscBav%2Bt6umOuHbFg0icMtReLX8AkCmC4zIR8EYH2d11l%2B1rodKQYFQP7n1w1xKPaS40%2BRIsgYUcbNwz9IeOMiJm69d4RvE%2FlfTAgA1YUF%2FXuTI3LzDoRZCk%2BRw11T7wraN8UsrzYf0mVQC%2Bp35Kq8cPmE3Bb5nzn%2BHw9XqqtKwf2r%2Bq7ou%2BgQgGawbEPBp7oo5HWC1%2FLJlQwBEvFbHhk7my8me9wIXl4N1tDhHZOErUaPyxMuMrJH2vRKy1Ve4dH0jbzS5x%2FoDtO2bYHA%2BXj5lYwxzo3rO1qX2SHFDQAwznjO%2F1AAMIHfisgGOqUBNlu53%2FiEo%2B7hbJC3Kc3qvZxBYevFLd5H2wCnTn6lEPsl7EqqJOBCWCxqltJxQpWN55uxcMm7TxF83aRA1MSOTJ40H5zUPhX4kSWxErvoUiwFwIV8M4BLhD%2BX2VXI1V2H8sp0B98hhcyaknm7nLJpeKngj08XMW8Cd4MxiJJTLYda0TGQoPgzWFlARb3RmsTx5%2FBLkysDNoG%2BZDRhjm1HLU6P9nxL&X-Amz-Signature=e65ea3851f4a7ed89b4a52d43b37c8e1b6544b2701d9d25aa77954cf064470aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNRR7K7%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIC56hijRJWks3wpP9979D9PnC1fWYsyyF4DF4MRxLtlIAiEAi0vovkwTc%2BTdQU9O1oIBEGOQOtTzrCCYx%2Bz%2BFbq%2BFlwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKHNJF8PgbG5fMMRircAyU6yn0HHkjgVsXFZvjrG2Go1hmAwAPKxCS90CuoU0VogpLMQWzdi%2BfNqoZoCR3gvFqos%2BP8KiAXHh%2Ftp05ETbDvxhjGf9NuXQ7VaSBsU88v5FXc6YR3AeGvNER2xx9ACn8pPiQb%2FtuU0BN2j2ghNpLiq1ZTXOp7tfHgDNNuL%2FNJkPYSjD%2B6%2BGiT7%2FpyKFgD%2BxZdCRChCxJEjn91D9dFf730eJQU8ZUg1Fipdeia8OyX36tKPrmzA4wjobloTboZgkK6t%2Fctx1U8Nv4fGV8tHNlivih%2Be8axz4vVTJ2qa3rfnn7pq2g%2FYz262ZJNmcUbCa7s5xrgo7WfhrvXfVZWTFcvP9t7x7Bp0O6E29lQS1pEAjDXYaV8nheEeaAKMIdSpeKBNoiTD2bezvEV8CKiTwgqsuslWTEg%2BjkHyIQcC2irQ%2BfhkJSk4hDFhpQtpPD0P%2BBHT%2BSbGPk84kT%2FphiiLghNOeAwzIY189alAJ65sCRhMhabQG7uwA1rNYRLKRbre3X0bCEpcwQKf45MZD8V%2BCdZMrTAtaDO5Q%2BzoPa77l2JReg2BSTrWbJuX1nlgtNl%2F1qwnrSUwi9OUi6LQKZk5SNe2TXezPdFKaVbtP87BwPNzKIr9gSCgyFLo1HPMKjfisgGOqUBN%2BgYLo1KJWwpjbn1hIHF29DYo3fKQauam5TLfRAtS%2By%2FQCS9O0U8O6%2B%2BZxHBnIAPxO0G4B69cSqSAapaR5lkRdHPL1AnNsbSxSChJwXqyU3TSmn0CUx9SL2B8Mf9yjB%2FC0jtdGvnkN3A93PUnxhuKWPA5090o192oUXtRcH%2F99Z%2BHcVON%2Fa4CmDCweU6rKprb%2B45VxMwJdqL6QWARfABiATQ8gSu&X-Amz-Signature=99c6083beaf9357dbd16e6b7b21a7407605b66b4a9cdbd56bcd86e61fc8be2a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

