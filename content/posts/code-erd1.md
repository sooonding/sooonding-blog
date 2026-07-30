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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNE4RNG%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMGDN4l%2BiniojCeeZ48qHQWWpt24m2bWfGdtGl7%2BfCAIhAK2UMegx3bnQbui4f4bhO6zEls4ol3hd9%2BG%2Fq%2BnTvP06KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl3F1uqJ4mE0J1hcYq3AP4Aa3uiacEH2h4U4GEqzLsiz0OJN0%2B8OkM2y71LDKZPicHvSeXV7RjEP8bcBxKZwf8Mwk8hZsD1rwJchbNFvhDqGczRpS9a7JcEHp5xCEnRG8ZWB67ulbRIXFAapcpTt6VOBW72YT4UljHYfURmEs3953y%2Bu%2F7L2i97oQkrAuCcOCSK8oD8H%2F62YIsii7H5Ert9rdn7rS54Qh7T%2BKCK2AdoYbHcUwDdyNAWSITRYeCmMi53M4f2XRtxwjReHs3iX8nmS8X0d%2BIisgYC8QrV5WMUPDCQQZlW6z8rmZhVBjGC216%2FENfCQB5GbBC7h%2BEUfkHucJzzzXC7J6u5SjzOgy60A12lVqabb09audjd2vKfzt0lMVUJXVFA8IgjMAUslJewezV91Dg%2BSa9OCNAUE8hlVoPToNSW8aJlbTaaeJX0TKs%2BAdisWDVhChZx99tZ%2BJaJzwqC2sjnS%2BoXtwSRCwsSWgoPD0NSVIGuymmMcq%2F2NM9CEqOSPFzjHbrvjEjtT6Q6T6aHFZrloPOK2RKuWOrrQk5AVizoJWYfsID61VwmnEkgmMlJ1h0qjU7Y9WYu%2Ffq%2BZNaHP%2B0qtypGftnpHsbv76nZSAORwE1JFZUVkGJz2vQ%2Fck8Xhnj60mIwDDn3qrTBjqkAaExlTjZ0uI8zDh7NhiwsVzCTc8FAWnkUkdx3xmHqGC8ETAsXeTdpI9Ks17spTRcBWjpznBSiLiEKqyEyWITxSJcfbQl%2F53HZVq7XDho%2B%2Fd32MGodfBa%2BfE7kXuoWgRqtJ2KErzHts1y4o%2Ffb9DyHQOQQEUAbeB%2BYYCwBlWPI%2F2NBBeQEEjlEQQxhqaoJSLVq4qZc4WUGdJapwSIGy0T%2BC2FmBMD&X-Amz-Signature=d07a5745148d566173d5889d562d507753aee2ef05a6aa668166384eff998d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGK6PBIR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4zrNOLKyPzaEFOYpEIPChi%2Bdq2D%2FIkbGeZsM3YgkGSAiEAiSS6nbWajG%2F%2FcME6qfBhXnq%2BIWQNY9S2fxbecoB9Cu4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKoSCailcsHfIydHCrcAyFFtkCuG%2FqXnzW66rDNnyNJLRVcEJHVx7RSs0oJ%2BxTHgOe3nXbg1LKWAxED2aeDO1%2BqNGJYLCgC2AUSCUGKkNbPMOTMcof%2Frabf7V%2BmslciaMSv7cNN5H%2F9lOtBD2%2FUdIUh8mCMRB8F%2FaWerDz0cKZGs8dEHgk8fnco46DkOS7YkcLtNYpBq5FLWcLfEQgEobnLEX%2B8ntdn8FvNafitDKNr0lCDLjcQ%2FucocVq0LPj0usseGbbaURXlmlZifVCu5w4ymE9QSK%2BbPM9lo5%2FZlkvt1xeg%2BNaD3Xx58nSriRH3TbmHXRUJZFlhw827EjHC0uZc095G6Gl%2FaXC4yYWucsGLpIvD%2B7WtXZCZHcMjwVbiwSDaNn6FMEJdTTjSK6TynglP10EOZdSxRmf4BMxdDsSklXkrJrE01XZkuAQDfQN%2F6s8kZnFScKdQBI2GHxK3t7I9UcURv8s6QABy%2BTT5xh2WB88CEwd47jBEFljd0aPns5d2n%2BNfoaNw8vPoorlkLKrUkJFP2U7aUpFY2oWJR8sc%2BnAThXhY3GxZr4P%2FyNToxmeaiBa%2BUVMHEhdECjMfUkoUD2czVODKfdOSbDcTQw%2BKC%2BitL70akjPkGx67oPtMzfVKM9dhhKt33p7aMO%2FiqtMGOqUB%2FyRIdZmgEKzJHebldMqXS4wsEJ3KSDQjbzr2Fy%2B6rAG3TRZ7MQkjPAaHrJgK4ewyuOlsLhgAeGkzdWUBvpLbE%2Bx4AWIH8Y%2Bb%2Bp84znOLjGc1jh4D7miUynt038DcLcvncxssl8bTdbMoMQtS%2FJIY4UQ0gN%2FGdadYAQjJ%2BVbuH7nGVjNc9%2BwpjKfXoIhz1csFtog41%2FeJJieHxHZnPWzXX34ejmm9&X-Amz-Signature=888b35b72bc47c061d33bc9524c6408ed8b74d3bc040e55a6e666741eee3adb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGK6PBIR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4zrNOLKyPzaEFOYpEIPChi%2Bdq2D%2FIkbGeZsM3YgkGSAiEAiSS6nbWajG%2F%2FcME6qfBhXnq%2BIWQNY9S2fxbecoB9Cu4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKoSCailcsHfIydHCrcAyFFtkCuG%2FqXnzW66rDNnyNJLRVcEJHVx7RSs0oJ%2BxTHgOe3nXbg1LKWAxED2aeDO1%2BqNGJYLCgC2AUSCUGKkNbPMOTMcof%2Frabf7V%2BmslciaMSv7cNN5H%2F9lOtBD2%2FUdIUh8mCMRB8F%2FaWerDz0cKZGs8dEHgk8fnco46DkOS7YkcLtNYpBq5FLWcLfEQgEobnLEX%2B8ntdn8FvNafitDKNr0lCDLjcQ%2FucocVq0LPj0usseGbbaURXlmlZifVCu5w4ymE9QSK%2BbPM9lo5%2FZlkvt1xeg%2BNaD3Xx58nSriRH3TbmHXRUJZFlhw827EjHC0uZc095G6Gl%2FaXC4yYWucsGLpIvD%2B7WtXZCZHcMjwVbiwSDaNn6FMEJdTTjSK6TynglP10EOZdSxRmf4BMxdDsSklXkrJrE01XZkuAQDfQN%2F6s8kZnFScKdQBI2GHxK3t7I9UcURv8s6QABy%2BTT5xh2WB88CEwd47jBEFljd0aPns5d2n%2BNfoaNw8vPoorlkLKrUkJFP2U7aUpFY2oWJR8sc%2BnAThXhY3GxZr4P%2FyNToxmeaiBa%2BUVMHEhdECjMfUkoUD2czVODKfdOSbDcTQw%2BKC%2BitL70akjPkGx67oPtMzfVKM9dhhKt33p7aMO%2FiqtMGOqUB%2FyRIdZmgEKzJHebldMqXS4wsEJ3KSDQjbzr2Fy%2B6rAG3TRZ7MQkjPAaHrJgK4ewyuOlsLhgAeGkzdWUBvpLbE%2Bx4AWIH8Y%2Bb%2Bp84znOLjGc1jh4D7miUynt038DcLcvncxssl8bTdbMoMQtS%2FJIY4UQ0gN%2FGdadYAQjJ%2BVbuH7nGVjNc9%2BwpjKfXoIhz1csFtog41%2FeJJieHxHZnPWzXX34ejmm9&X-Amz-Signature=ab2e8402db1a5e76c1b1e0da83898e38510feb6d7256f2dd337f4dac6d64d09a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGK6PBIR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4zrNOLKyPzaEFOYpEIPChi%2Bdq2D%2FIkbGeZsM3YgkGSAiEAiSS6nbWajG%2F%2FcME6qfBhXnq%2BIWQNY9S2fxbecoB9Cu4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKoSCailcsHfIydHCrcAyFFtkCuG%2FqXnzW66rDNnyNJLRVcEJHVx7RSs0oJ%2BxTHgOe3nXbg1LKWAxED2aeDO1%2BqNGJYLCgC2AUSCUGKkNbPMOTMcof%2Frabf7V%2BmslciaMSv7cNN5H%2F9lOtBD2%2FUdIUh8mCMRB8F%2FaWerDz0cKZGs8dEHgk8fnco46DkOS7YkcLtNYpBq5FLWcLfEQgEobnLEX%2B8ntdn8FvNafitDKNr0lCDLjcQ%2FucocVq0LPj0usseGbbaURXlmlZifVCu5w4ymE9QSK%2BbPM9lo5%2FZlkvt1xeg%2BNaD3Xx58nSriRH3TbmHXRUJZFlhw827EjHC0uZc095G6Gl%2FaXC4yYWucsGLpIvD%2B7WtXZCZHcMjwVbiwSDaNn6FMEJdTTjSK6TynglP10EOZdSxRmf4BMxdDsSklXkrJrE01XZkuAQDfQN%2F6s8kZnFScKdQBI2GHxK3t7I9UcURv8s6QABy%2BTT5xh2WB88CEwd47jBEFljd0aPns5d2n%2BNfoaNw8vPoorlkLKrUkJFP2U7aUpFY2oWJR8sc%2BnAThXhY3GxZr4P%2FyNToxmeaiBa%2BUVMHEhdECjMfUkoUD2czVODKfdOSbDcTQw%2BKC%2BitL70akjPkGx67oPtMzfVKM9dhhKt33p7aMO%2FiqtMGOqUB%2FyRIdZmgEKzJHebldMqXS4wsEJ3KSDQjbzr2Fy%2B6rAG3TRZ7MQkjPAaHrJgK4ewyuOlsLhgAeGkzdWUBvpLbE%2Bx4AWIH8Y%2Bb%2Bp84znOLjGc1jh4D7miUynt038DcLcvncxssl8bTdbMoMQtS%2FJIY4UQ0gN%2FGdadYAQjJ%2BVbuH7nGVjNc9%2BwpjKfXoIhz1csFtog41%2FeJJieHxHZnPWzXX34ejmm9&X-Amz-Signature=293cbceaa7257906d5b19b2aa2c4407da42c8a0e60f029415dee06dd9bff6777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGK6PBIR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4zrNOLKyPzaEFOYpEIPChi%2Bdq2D%2FIkbGeZsM3YgkGSAiEAiSS6nbWajG%2F%2FcME6qfBhXnq%2BIWQNY9S2fxbecoB9Cu4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKoSCailcsHfIydHCrcAyFFtkCuG%2FqXnzW66rDNnyNJLRVcEJHVx7RSs0oJ%2BxTHgOe3nXbg1LKWAxED2aeDO1%2BqNGJYLCgC2AUSCUGKkNbPMOTMcof%2Frabf7V%2BmslciaMSv7cNN5H%2F9lOtBD2%2FUdIUh8mCMRB8F%2FaWerDz0cKZGs8dEHgk8fnco46DkOS7YkcLtNYpBq5FLWcLfEQgEobnLEX%2B8ntdn8FvNafitDKNr0lCDLjcQ%2FucocVq0LPj0usseGbbaURXlmlZifVCu5w4ymE9QSK%2BbPM9lo5%2FZlkvt1xeg%2BNaD3Xx58nSriRH3TbmHXRUJZFlhw827EjHC0uZc095G6Gl%2FaXC4yYWucsGLpIvD%2B7WtXZCZHcMjwVbiwSDaNn6FMEJdTTjSK6TynglP10EOZdSxRmf4BMxdDsSklXkrJrE01XZkuAQDfQN%2F6s8kZnFScKdQBI2GHxK3t7I9UcURv8s6QABy%2BTT5xh2WB88CEwd47jBEFljd0aPns5d2n%2BNfoaNw8vPoorlkLKrUkJFP2U7aUpFY2oWJR8sc%2BnAThXhY3GxZr4P%2FyNToxmeaiBa%2BUVMHEhdECjMfUkoUD2czVODKfdOSbDcTQw%2BKC%2BitL70akjPkGx67oPtMzfVKM9dhhKt33p7aMO%2FiqtMGOqUB%2FyRIdZmgEKzJHebldMqXS4wsEJ3KSDQjbzr2Fy%2B6rAG3TRZ7MQkjPAaHrJgK4ewyuOlsLhgAeGkzdWUBvpLbE%2Bx4AWIH8Y%2Bb%2Bp84znOLjGc1jh4D7miUynt038DcLcvncxssl8bTdbMoMQtS%2FJIY4UQ0gN%2FGdadYAQjJ%2BVbuH7nGVjNc9%2BwpjKfXoIhz1csFtog41%2FeJJieHxHZnPWzXX34ejmm9&X-Amz-Signature=e821434a5f571a129eb63941c28156f5a5596df6b05af2c1e7eeaf38623f04e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGK6PBIR%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4zrNOLKyPzaEFOYpEIPChi%2Bdq2D%2FIkbGeZsM3YgkGSAiEAiSS6nbWajG%2F%2FcME6qfBhXnq%2BIWQNY9S2fxbecoB9Cu4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKoSCailcsHfIydHCrcAyFFtkCuG%2FqXnzW66rDNnyNJLRVcEJHVx7RSs0oJ%2BxTHgOe3nXbg1LKWAxED2aeDO1%2BqNGJYLCgC2AUSCUGKkNbPMOTMcof%2Frabf7V%2BmslciaMSv7cNN5H%2F9lOtBD2%2FUdIUh8mCMRB8F%2FaWerDz0cKZGs8dEHgk8fnco46DkOS7YkcLtNYpBq5FLWcLfEQgEobnLEX%2B8ntdn8FvNafitDKNr0lCDLjcQ%2FucocVq0LPj0usseGbbaURXlmlZifVCu5w4ymE9QSK%2BbPM9lo5%2FZlkvt1xeg%2BNaD3Xx58nSriRH3TbmHXRUJZFlhw827EjHC0uZc095G6Gl%2FaXC4yYWucsGLpIvD%2B7WtXZCZHcMjwVbiwSDaNn6FMEJdTTjSK6TynglP10EOZdSxRmf4BMxdDsSklXkrJrE01XZkuAQDfQN%2F6s8kZnFScKdQBI2GHxK3t7I9UcURv8s6QABy%2BTT5xh2WB88CEwd47jBEFljd0aPns5d2n%2BNfoaNw8vPoorlkLKrUkJFP2U7aUpFY2oWJR8sc%2BnAThXhY3GxZr4P%2FyNToxmeaiBa%2BUVMHEhdECjMfUkoUD2czVODKfdOSbDcTQw%2BKC%2BitL70akjPkGx67oPtMzfVKM9dhhKt33p7aMO%2FiqtMGOqUB%2FyRIdZmgEKzJHebldMqXS4wsEJ3KSDQjbzr2Fy%2B6rAG3TRZ7MQkjPAaHrJgK4ewyuOlsLhgAeGkzdWUBvpLbE%2Bx4AWIH8Y%2Bb%2Bp84znOLjGc1jh4D7miUynt038DcLcvncxssl8bTdbMoMQtS%2FJIY4UQ0gN%2FGdadYAQjJ%2BVbuH7nGVjNc9%2BwpjKfXoIhz1csFtog41%2FeJJieHxHZnPWzXX34ejmm9&X-Amz-Signature=ccb0fc81c4df2660d16bf04814628926b0bfcf63663e8862b8012fd2cc2c155e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNE4RNG%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMGDN4l%2BiniojCeeZ48qHQWWpt24m2bWfGdtGl7%2BfCAIhAK2UMegx3bnQbui4f4bhO6zEls4ol3hd9%2BG%2Fq%2BnTvP06KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl3F1uqJ4mE0J1hcYq3AP4Aa3uiacEH2h4U4GEqzLsiz0OJN0%2B8OkM2y71LDKZPicHvSeXV7RjEP8bcBxKZwf8Mwk8hZsD1rwJchbNFvhDqGczRpS9a7JcEHp5xCEnRG8ZWB67ulbRIXFAapcpTt6VOBW72YT4UljHYfURmEs3953y%2Bu%2F7L2i97oQkrAuCcOCSK8oD8H%2F62YIsii7H5Ert9rdn7rS54Qh7T%2BKCK2AdoYbHcUwDdyNAWSITRYeCmMi53M4f2XRtxwjReHs3iX8nmS8X0d%2BIisgYC8QrV5WMUPDCQQZlW6z8rmZhVBjGC216%2FENfCQB5GbBC7h%2BEUfkHucJzzzXC7J6u5SjzOgy60A12lVqabb09audjd2vKfzt0lMVUJXVFA8IgjMAUslJewezV91Dg%2BSa9OCNAUE8hlVoPToNSW8aJlbTaaeJX0TKs%2BAdisWDVhChZx99tZ%2BJaJzwqC2sjnS%2BoXtwSRCwsSWgoPD0NSVIGuymmMcq%2F2NM9CEqOSPFzjHbrvjEjtT6Q6T6aHFZrloPOK2RKuWOrrQk5AVizoJWYfsID61VwmnEkgmMlJ1h0qjU7Y9WYu%2Ffq%2BZNaHP%2B0qtypGftnpHsbv76nZSAORwE1JFZUVkGJz2vQ%2Fck8Xhnj60mIwDDn3qrTBjqkAaExlTjZ0uI8zDh7NhiwsVzCTc8FAWnkUkdx3xmHqGC8ETAsXeTdpI9Ks17spTRcBWjpznBSiLiEKqyEyWITxSJcfbQl%2F53HZVq7XDho%2B%2Fd32MGodfBa%2BfE7kXuoWgRqtJ2KErzHts1y4o%2Ffb9DyHQOQQEUAbeB%2BYYCwBlWPI%2F2NBBeQEEjlEQQxhqaoJSLVq4qZc4WUGdJapwSIGy0T%2BC2FmBMD&X-Amz-Signature=b1625a13296b4b8289bc846857b24576a4a50b9b3d5c8115cb6c08bb67676469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

