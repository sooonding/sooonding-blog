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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHFB55Z%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2FDHvNVxyq8YdggC9xXICPzHFqYwk%2FICQqhuz%2BB79hwIhAMUhtdc1qdihG6N%2BKt1Y%2FTVPkgNcaVCqdF9Zmo0%2FnkAUKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhM3O1sJaX7UJe5YQq3APZUmg9OI4mTPXt2fETkbdAQS8vvNUq66KCRtRLizA1uvMmvybD58Wq0iwteWDwAx0NoNXUeWh%2BSDcDdyu0ToE81dvDTA6eeYUjuwEu%2BfCPTSxOIoMUq%2FA0oJJtXdd1cYTj%2Bez2WUek7Gr%2FU3VvBBzsNf05kToffwnOclu1gltsRFtik0kR46j1%2BASIuVG95WA51xTLyuretJaX2AInOvB5aSqPO5JZClrxb2tQi0x1zjC0zw3CxT%2BlGpce28LZ9SwhUrH3SLYmbGLCgJg2hDaVH9oJORTVo89XtaHktpPTMti454y1WNLWZ2wYLQYp9QKVYTpMk72jG3G4b87fRsjbztcjqkh9GYFr%2BaDcASeISh%2Bh3q%2BZZi3v9vVFptmPShoIF0GKj706QGYPdlf%2Fd2p3pwWE6FpEsILGbJSomcc54dR6Nw7XCGM2DDmyP96myugSgXsVVIlae0cLY6vocipcqxfrciVi9P8Z6S6owp15fd1xhUrAGq4rfhi6UNr8VlKFPjrZSiWuxBN5nqAaBIwAO94cXDt4%2F%2BFYEmOgHykSlVDCFadA3EzZ9jFy2ORRBfEHhyxqO9Z9kR4YBr0hG%2F4mlJun8YfG5w99Zv5uv9Hi%2BWn1TURPPFnfhDzAcjC0r5LOBjqkAUa8oL%2BLmDzDIdx1so2Vea7DLtMlrO0KGDSVRVtFK7QEpc6AeHlNBdEIYq13%2F00fO5QBfVh8tllAx1WCaRYsU1LEGiIZAqybHThRpwCV%2BhIFylUrVX5eUV%2F1Ey03RpaXAVyiAObKPobrk4q%2Bdp8s%2BGkfsfdBRrvSxExecU3FNvSHqMbq15NYWTvy5pmqGlxtbjTIFqJcC9b22r5C1jZyXEANmCVq&X-Amz-Signature=e8feb07dbd7f2c3965622b7443f70864316f40b6a9df198cc5f2b9a067c52cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVJ3XV%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAhG8LQL2I2n%2FI5qnoC4cgjnVEGEDMVwSk3w9DFsAIDwIgWQ40FDyji9Gxp9NEc04WHQcJ%2B8N7vOcMWIzkYMMyFsEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtsMC30aNOqhkC9ASrcA0ubZUctUxE1oSmWybr%2FM%2BtfWa5E2NbDs7aAhnzPJCJ135YRH0TqcCOLc5SBgzoMmDMcQZG36lt65ZMu8KGt1yEJwm2uGnUa64jdixPQI861NBU5J8VoLvk51koXT%2BtMja3soN2wGYZaTqsoCWXHlfLPR%2Fn6TjKN5vtx5ALOLS8AHR6cd2e%2FZuV%2BpiMYWQa96Sfxg9snr2RSnalHPSSloNV3gOdB5TMT3fKJ8%2FCMzDkDomY8ZqzOU1xq8OWX6694XaTBR%2FvccTGlKAJRuCRmqwhXOJKwvF1BlgktUPvoEFbvchJAeZG3CaSAFoFki2wvTJBhsyFntuzf5I8LIEubFHRNuatagv6PkHpGvqdhiSRsOy4FsZ0se%2FudK7A1Ebo4UsnuPaG6g8Y3mU4wNmEqn%2BQCxeNpggNdZEeWHDLIWJldjDbg5y2b9xW%2BJcSAIv%2FWuACuZJ4s5Tto3vyucet7KgkWSI2FoMOj06xP%2BVZQVSLDUyPcGXh3YsvUf9ENk4dHoB7mEKXurKbU8G%2FbQaC1QZUwtuP9HqQt5Zz5uj13cAp5qpw2mU%2BMceASwOkXWr9k5khsuG1GjuQIyCBHMoI2X%2BXPy855roXbIMVEkk3x2r4PUP4t%2FowPdyr0PgIMMO%2Bvks4GOqUBp%2B6cFf8z1TVqDHnE7XWnL42%2BFgc1Lv32djcbSHWdSYsSYBZh3L0tgQgrAy6hbo34HaJZxqaTcDZAqwOguSSJQ44IImXrPOANFhZYe4p4kwSGuEjRv34z19P4alzIayIA3JbOTYcbXG%2Fj6yGTl6d9iiCh66nop50fOdMYnfRik6tihhH3WlbbzEOZ%2BPzWtlOAuwbXFoslHtjgXk34RJawSUfMrUPj&X-Amz-Signature=7534697052502d100fbcba4a7acd33ed16d5a79ba7cf62799eb40022ca90fb7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVJ3XV%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAhG8LQL2I2n%2FI5qnoC4cgjnVEGEDMVwSk3w9DFsAIDwIgWQ40FDyji9Gxp9NEc04WHQcJ%2B8N7vOcMWIzkYMMyFsEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtsMC30aNOqhkC9ASrcA0ubZUctUxE1oSmWybr%2FM%2BtfWa5E2NbDs7aAhnzPJCJ135YRH0TqcCOLc5SBgzoMmDMcQZG36lt65ZMu8KGt1yEJwm2uGnUa64jdixPQI861NBU5J8VoLvk51koXT%2BtMja3soN2wGYZaTqsoCWXHlfLPR%2Fn6TjKN5vtx5ALOLS8AHR6cd2e%2FZuV%2BpiMYWQa96Sfxg9snr2RSnalHPSSloNV3gOdB5TMT3fKJ8%2FCMzDkDomY8ZqzOU1xq8OWX6694XaTBR%2FvccTGlKAJRuCRmqwhXOJKwvF1BlgktUPvoEFbvchJAeZG3CaSAFoFki2wvTJBhsyFntuzf5I8LIEubFHRNuatagv6PkHpGvqdhiSRsOy4FsZ0se%2FudK7A1Ebo4UsnuPaG6g8Y3mU4wNmEqn%2BQCxeNpggNdZEeWHDLIWJldjDbg5y2b9xW%2BJcSAIv%2FWuACuZJ4s5Tto3vyucet7KgkWSI2FoMOj06xP%2BVZQVSLDUyPcGXh3YsvUf9ENk4dHoB7mEKXurKbU8G%2FbQaC1QZUwtuP9HqQt5Zz5uj13cAp5qpw2mU%2BMceASwOkXWr9k5khsuG1GjuQIyCBHMoI2X%2BXPy855roXbIMVEkk3x2r4PUP4t%2FowPdyr0PgIMMO%2Bvks4GOqUBp%2B6cFf8z1TVqDHnE7XWnL42%2BFgc1Lv32djcbSHWdSYsSYBZh3L0tgQgrAy6hbo34HaJZxqaTcDZAqwOguSSJQ44IImXrPOANFhZYe4p4kwSGuEjRv34z19P4alzIayIA3JbOTYcbXG%2Fj6yGTl6d9iiCh66nop50fOdMYnfRik6tihhH3WlbbzEOZ%2BPzWtlOAuwbXFoslHtjgXk34RJawSUfMrUPj&X-Amz-Signature=091c79f36ec38baec2991c31951057bf44cccc7e66f4843d8c9735fd5634a87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVJ3XV%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAhG8LQL2I2n%2FI5qnoC4cgjnVEGEDMVwSk3w9DFsAIDwIgWQ40FDyji9Gxp9NEc04WHQcJ%2B8N7vOcMWIzkYMMyFsEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtsMC30aNOqhkC9ASrcA0ubZUctUxE1oSmWybr%2FM%2BtfWa5E2NbDs7aAhnzPJCJ135YRH0TqcCOLc5SBgzoMmDMcQZG36lt65ZMu8KGt1yEJwm2uGnUa64jdixPQI861NBU5J8VoLvk51koXT%2BtMja3soN2wGYZaTqsoCWXHlfLPR%2Fn6TjKN5vtx5ALOLS8AHR6cd2e%2FZuV%2BpiMYWQa96Sfxg9snr2RSnalHPSSloNV3gOdB5TMT3fKJ8%2FCMzDkDomY8ZqzOU1xq8OWX6694XaTBR%2FvccTGlKAJRuCRmqwhXOJKwvF1BlgktUPvoEFbvchJAeZG3CaSAFoFki2wvTJBhsyFntuzf5I8LIEubFHRNuatagv6PkHpGvqdhiSRsOy4FsZ0se%2FudK7A1Ebo4UsnuPaG6g8Y3mU4wNmEqn%2BQCxeNpggNdZEeWHDLIWJldjDbg5y2b9xW%2BJcSAIv%2FWuACuZJ4s5Tto3vyucet7KgkWSI2FoMOj06xP%2BVZQVSLDUyPcGXh3YsvUf9ENk4dHoB7mEKXurKbU8G%2FbQaC1QZUwtuP9HqQt5Zz5uj13cAp5qpw2mU%2BMceASwOkXWr9k5khsuG1GjuQIyCBHMoI2X%2BXPy855roXbIMVEkk3x2r4PUP4t%2FowPdyr0PgIMMO%2Bvks4GOqUBp%2B6cFf8z1TVqDHnE7XWnL42%2BFgc1Lv32djcbSHWdSYsSYBZh3L0tgQgrAy6hbo34HaJZxqaTcDZAqwOguSSJQ44IImXrPOANFhZYe4p4kwSGuEjRv34z19P4alzIayIA3JbOTYcbXG%2Fj6yGTl6d9iiCh66nop50fOdMYnfRik6tihhH3WlbbzEOZ%2BPzWtlOAuwbXFoslHtjgXk34RJawSUfMrUPj&X-Amz-Signature=ff1203b4a5f29a636c7d514ae60ad7516362346cb07d6acda25f988ddfe3ee74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVJ3XV%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAhG8LQL2I2n%2FI5qnoC4cgjnVEGEDMVwSk3w9DFsAIDwIgWQ40FDyji9Gxp9NEc04WHQcJ%2B8N7vOcMWIzkYMMyFsEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtsMC30aNOqhkC9ASrcA0ubZUctUxE1oSmWybr%2FM%2BtfWa5E2NbDs7aAhnzPJCJ135YRH0TqcCOLc5SBgzoMmDMcQZG36lt65ZMu8KGt1yEJwm2uGnUa64jdixPQI861NBU5J8VoLvk51koXT%2BtMja3soN2wGYZaTqsoCWXHlfLPR%2Fn6TjKN5vtx5ALOLS8AHR6cd2e%2FZuV%2BpiMYWQa96Sfxg9snr2RSnalHPSSloNV3gOdB5TMT3fKJ8%2FCMzDkDomY8ZqzOU1xq8OWX6694XaTBR%2FvccTGlKAJRuCRmqwhXOJKwvF1BlgktUPvoEFbvchJAeZG3CaSAFoFki2wvTJBhsyFntuzf5I8LIEubFHRNuatagv6PkHpGvqdhiSRsOy4FsZ0se%2FudK7A1Ebo4UsnuPaG6g8Y3mU4wNmEqn%2BQCxeNpggNdZEeWHDLIWJldjDbg5y2b9xW%2BJcSAIv%2FWuACuZJ4s5Tto3vyucet7KgkWSI2FoMOj06xP%2BVZQVSLDUyPcGXh3YsvUf9ENk4dHoB7mEKXurKbU8G%2FbQaC1QZUwtuP9HqQt5Zz5uj13cAp5qpw2mU%2BMceASwOkXWr9k5khsuG1GjuQIyCBHMoI2X%2BXPy855roXbIMVEkk3x2r4PUP4t%2FowPdyr0PgIMMO%2Bvks4GOqUBp%2B6cFf8z1TVqDHnE7XWnL42%2BFgc1Lv32djcbSHWdSYsSYBZh3L0tgQgrAy6hbo34HaJZxqaTcDZAqwOguSSJQ44IImXrPOANFhZYe4p4kwSGuEjRv34z19P4alzIayIA3JbOTYcbXG%2Fj6yGTl6d9iiCh66nop50fOdMYnfRik6tihhH3WlbbzEOZ%2BPzWtlOAuwbXFoslHtjgXk34RJawSUfMrUPj&X-Amz-Signature=92a594c53052c864f4b48b050c9929dba36286cc4f9be0abee1f9de1ac6cd95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUVJ3XV%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAhG8LQL2I2n%2FI5qnoC4cgjnVEGEDMVwSk3w9DFsAIDwIgWQ40FDyji9Gxp9NEc04WHQcJ%2B8N7vOcMWIzkYMMyFsEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtsMC30aNOqhkC9ASrcA0ubZUctUxE1oSmWybr%2FM%2BtfWa5E2NbDs7aAhnzPJCJ135YRH0TqcCOLc5SBgzoMmDMcQZG36lt65ZMu8KGt1yEJwm2uGnUa64jdixPQI861NBU5J8VoLvk51koXT%2BtMja3soN2wGYZaTqsoCWXHlfLPR%2Fn6TjKN5vtx5ALOLS8AHR6cd2e%2FZuV%2BpiMYWQa96Sfxg9snr2RSnalHPSSloNV3gOdB5TMT3fKJ8%2FCMzDkDomY8ZqzOU1xq8OWX6694XaTBR%2FvccTGlKAJRuCRmqwhXOJKwvF1BlgktUPvoEFbvchJAeZG3CaSAFoFki2wvTJBhsyFntuzf5I8LIEubFHRNuatagv6PkHpGvqdhiSRsOy4FsZ0se%2FudK7A1Ebo4UsnuPaG6g8Y3mU4wNmEqn%2BQCxeNpggNdZEeWHDLIWJldjDbg5y2b9xW%2BJcSAIv%2FWuACuZJ4s5Tto3vyucet7KgkWSI2FoMOj06xP%2BVZQVSLDUyPcGXh3YsvUf9ENk4dHoB7mEKXurKbU8G%2FbQaC1QZUwtuP9HqQt5Zz5uj13cAp5qpw2mU%2BMceASwOkXWr9k5khsuG1GjuQIyCBHMoI2X%2BXPy855roXbIMVEkk3x2r4PUP4t%2FowPdyr0PgIMMO%2Bvks4GOqUBp%2B6cFf8z1TVqDHnE7XWnL42%2BFgc1Lv32djcbSHWdSYsSYBZh3L0tgQgrAy6hbo34HaJZxqaTcDZAqwOguSSJQ44IImXrPOANFhZYe4p4kwSGuEjRv34z19P4alzIayIA3JbOTYcbXG%2Fj6yGTl6d9iiCh66nop50fOdMYnfRik6tihhH3WlbbzEOZ%2BPzWtlOAuwbXFoslHtjgXk34RJawSUfMrUPj&X-Amz-Signature=0838c115419f20006920684901b2fe6da4a323e220edb6f4d9f4519a18afb2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXHFB55Z%2F20260326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260326T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2FDHvNVxyq8YdggC9xXICPzHFqYwk%2FICQqhuz%2BB79hwIhAMUhtdc1qdihG6N%2BKt1Y%2FTVPkgNcaVCqdF9Zmo0%2FnkAUKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhM3O1sJaX7UJe5YQq3APZUmg9OI4mTPXt2fETkbdAQS8vvNUq66KCRtRLizA1uvMmvybD58Wq0iwteWDwAx0NoNXUeWh%2BSDcDdyu0ToE81dvDTA6eeYUjuwEu%2BfCPTSxOIoMUq%2FA0oJJtXdd1cYTj%2Bez2WUek7Gr%2FU3VvBBzsNf05kToffwnOclu1gltsRFtik0kR46j1%2BASIuVG95WA51xTLyuretJaX2AInOvB5aSqPO5JZClrxb2tQi0x1zjC0zw3CxT%2BlGpce28LZ9SwhUrH3SLYmbGLCgJg2hDaVH9oJORTVo89XtaHktpPTMti454y1WNLWZ2wYLQYp9QKVYTpMk72jG3G4b87fRsjbztcjqkh9GYFr%2BaDcASeISh%2Bh3q%2BZZi3v9vVFptmPShoIF0GKj706QGYPdlf%2Fd2p3pwWE6FpEsILGbJSomcc54dR6Nw7XCGM2DDmyP96myugSgXsVVIlae0cLY6vocipcqxfrciVi9P8Z6S6owp15fd1xhUrAGq4rfhi6UNr8VlKFPjrZSiWuxBN5nqAaBIwAO94cXDt4%2F%2BFYEmOgHykSlVDCFadA3EzZ9jFy2ORRBfEHhyxqO9Z9kR4YBr0hG%2F4mlJun8YfG5w99Zv5uv9Hi%2BWn1TURPPFnfhDzAcjC0r5LOBjqkAUa8oL%2BLmDzDIdx1so2Vea7DLtMlrO0KGDSVRVtFK7QEpc6AeHlNBdEIYq13%2F00fO5QBfVh8tllAx1WCaRYsU1LEGiIZAqybHThRpwCV%2BhIFylUrVX5eUV%2F1Ey03RpaXAVyiAObKPobrk4q%2Bdp8s%2BGkfsfdBRrvSxExecU3FNvSHqMbq15NYWTvy5pmqGlxtbjTIFqJcC9b22r5C1jZyXEANmCVq&X-Amz-Signature=852635dc8bf5870614469df638426b48a791f5f67f9d22da2ebd6d19315e9079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

