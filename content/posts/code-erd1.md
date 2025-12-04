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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFLEIAO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2FGo6dQATHPIYDESEhyQYFkDpjcX4Q6zRWLVTnuFgmmQIgf1ClJBv8fQKp4hIapzfIghR881BYtYKAHUq1B%2B91aqQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLC10v0FifgOKfzgZCrcA1N1EJsOgjX4Wqh6UW3EBGpfqwIP%2BvLo6qdFZ9Qxw2QAMKTYrpKoi9c1L6M2KXCrtTcguQ0fsd0bR4NrgUomEWx9ATD2D7iTV7aXImv1%2Bs0k2HiYSn5Tdk%2FpDwhFss6i0N0zQELFSUy6S28ZkFApPJpW75vD94RVie6tQb728K2qvKyGqInwkAK7Su8CuqkqQjUNtMsl08LaL1VWf8UjutWWrhD17%2FPmf3ix0YpBceAldBN9L7toraE5o6kCqp%2F%2FQkzFwmX104zdIpV31l14lurOhqBcD%2FXuhfqIygolT2tJ7fycFc5vNi%2Bh%2FGhB8RptH7a27jQZ%2F%2Fo43znwnp%2F%2F0hQKvEGFpMTeaXp3s2WcSUn3iBT%2BxSjmFD1vwQnsKrc1n1mUvaZyVeTrG3XJio6IKh%2FLFTTt3Jypet7TSZoGYg7j6oDn8FGBZ79yM89iOAkJGD6VR3SZSaJLeuZsH9GBQ9dX%2FRUHAU5z6fY6OqbfCQtsghiGI6kHolk1RwY6Z70Kr3Ig8XoOClNaDR5n514U%2FrpmJ5EMv%2BNeWQn1y78f0%2Fw0eUoUItY%2FCL1uLmZXhxpzSgncfDNBR38KWteaZ%2BRsk4tl0OiFt7tSUFPXSceA%2FxzrIaR9KwOLwzVYb3mxMMmgw8kGOqUBWjToxZ3eylWCzl8h%2FLn%2F5H7x4aWG4iZXUFJ%2FBAj8p%2B%2Fleu%2FCBf8W6%2Bcr9tvpjWcyg5fNCQR%2B0Jwtponwm0s4TnV9105QiH1MygGs8Lf31ECAJKSbajwk9twsGDcLM9a%2B0KayAycpr%2F76uCQgg8cm%2B2Cx9TASYpFTy68C5k%2BZFeDC69VALZyPCCWJYdf91KBuvEopyhs%2FsXM9RdMsuO8q1I0VuRxt&X-Amz-Signature=e683d4b00e2bccd35092dd1d811ace8aeb2f7d1d265c4b11d21a9f31f3514ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6JOS2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGHwUHg9SNpfq0WEWrZFvg4Prv4XlExYNgDQxFrzlvAIAiAk0P9ht552Ubdjouid%2Bp54czqYVLQbnG2WDWvPZvFMaCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMiEajSnZYkb6QqtWoKtwDNEC68jokeCT1ZiunJSp6JaUauYHyJc%2FtnEn%2FiqRwjL4k47qu%2B9nE0Jg4kjiYrQ8xB6K%2B1llRJ%2FCNbG9Rqs0MGIvAyfwEBncaaFtouBBdb37s6qXcWPtxA1c6SdzNobKbV2cr5GAAeC63Jm12LXN42TjpJtQLtiMC4tegFkY6vWgyc%2B4kC2Ut7tcBlMoB1gvWiArnQmbutUdu35UHviH7J3xNGt5H%2BoU%2F53NvJ7mxAMBJmv3OOe1HzV%2FGbJeVrk0F4G5fBF0dGpdlVMvzdpINSsdUJt116%2BQlHG7us3vp2tD3mp%2FUtHEEuj2b4hHVTeGyeVOjyfufNAEL3gs%2FrNRPJpAV9JmlqAIpur5bZFEMF8mwsCdumcPLNb01Rd4bHaEsmyzPNeE%2B%2BArT1TmYhVAYVFVRWI6iv2YJHtIJ65mSAb%2F65qffWsZxe0ThVUg1t8%2FfoynT9BMdKi%2FLjORXK%2F9vqJWkCo3W3ISMQWWiWGJJu74BzJ2pUC23ajLFI777bjxhY51s6GFa1qJDCe3AnFtjSsP90t7leRMhLLJv5FFIOhXQiyHDI5GDVod4AYk%2Bwlulv5HYi61fnpMwZbE9WEGoKnY3SFX9qzJIesyQYS86M7SdDbTCtuHlOttwk8wwj6LDyQY6pgFKpvsPPxBvWqylHrAbpe8Ssw9oibazmhuWfd40%2F3i9XKwRcXbQW9dm3Yt8Hhz9oqbbiRiRnZwzRRek8folPmjwyFS5Hs2iXMzmbhnGinDh%2B%2FAHNT%2F1XRcYG5FQHNe7aj89fo6sW93xbPtx6zsoKYiKcdiZT6FhsNtqRCZowMZuVkSO4pi65pG1UaVqELgQd0nfnSLdB7PxKn%2BiIWMhNucUdmNjBmPm&X-Amz-Signature=48f186422142ec42dcb02544b39db628236ddb81733882acd14a832b18669a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6JOS2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGHwUHg9SNpfq0WEWrZFvg4Prv4XlExYNgDQxFrzlvAIAiAk0P9ht552Ubdjouid%2Bp54czqYVLQbnG2WDWvPZvFMaCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMiEajSnZYkb6QqtWoKtwDNEC68jokeCT1ZiunJSp6JaUauYHyJc%2FtnEn%2FiqRwjL4k47qu%2B9nE0Jg4kjiYrQ8xB6K%2B1llRJ%2FCNbG9Rqs0MGIvAyfwEBncaaFtouBBdb37s6qXcWPtxA1c6SdzNobKbV2cr5GAAeC63Jm12LXN42TjpJtQLtiMC4tegFkY6vWgyc%2B4kC2Ut7tcBlMoB1gvWiArnQmbutUdu35UHviH7J3xNGt5H%2BoU%2F53NvJ7mxAMBJmv3OOe1HzV%2FGbJeVrk0F4G5fBF0dGpdlVMvzdpINSsdUJt116%2BQlHG7us3vp2tD3mp%2FUtHEEuj2b4hHVTeGyeVOjyfufNAEL3gs%2FrNRPJpAV9JmlqAIpur5bZFEMF8mwsCdumcPLNb01Rd4bHaEsmyzPNeE%2B%2BArT1TmYhVAYVFVRWI6iv2YJHtIJ65mSAb%2F65qffWsZxe0ThVUg1t8%2FfoynT9BMdKi%2FLjORXK%2F9vqJWkCo3W3ISMQWWiWGJJu74BzJ2pUC23ajLFI777bjxhY51s6GFa1qJDCe3AnFtjSsP90t7leRMhLLJv5FFIOhXQiyHDI5GDVod4AYk%2Bwlulv5HYi61fnpMwZbE9WEGoKnY3SFX9qzJIesyQYS86M7SdDbTCtuHlOttwk8wwj6LDyQY6pgFKpvsPPxBvWqylHrAbpe8Ssw9oibazmhuWfd40%2F3i9XKwRcXbQW9dm3Yt8Hhz9oqbbiRiRnZwzRRek8folPmjwyFS5Hs2iXMzmbhnGinDh%2B%2FAHNT%2F1XRcYG5FQHNe7aj89fo6sW93xbPtx6zsoKYiKcdiZT6FhsNtqRCZowMZuVkSO4pi65pG1UaVqELgQd0nfnSLdB7PxKn%2BiIWMhNucUdmNjBmPm&X-Amz-Signature=6e026d6ca9fefe90e54e6219c330cd2793a7530c9d009ef9e0c3f8934260cdf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6JOS2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGHwUHg9SNpfq0WEWrZFvg4Prv4XlExYNgDQxFrzlvAIAiAk0P9ht552Ubdjouid%2Bp54czqYVLQbnG2WDWvPZvFMaCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMiEajSnZYkb6QqtWoKtwDNEC68jokeCT1ZiunJSp6JaUauYHyJc%2FtnEn%2FiqRwjL4k47qu%2B9nE0Jg4kjiYrQ8xB6K%2B1llRJ%2FCNbG9Rqs0MGIvAyfwEBncaaFtouBBdb37s6qXcWPtxA1c6SdzNobKbV2cr5GAAeC63Jm12LXN42TjpJtQLtiMC4tegFkY6vWgyc%2B4kC2Ut7tcBlMoB1gvWiArnQmbutUdu35UHviH7J3xNGt5H%2BoU%2F53NvJ7mxAMBJmv3OOe1HzV%2FGbJeVrk0F4G5fBF0dGpdlVMvzdpINSsdUJt116%2BQlHG7us3vp2tD3mp%2FUtHEEuj2b4hHVTeGyeVOjyfufNAEL3gs%2FrNRPJpAV9JmlqAIpur5bZFEMF8mwsCdumcPLNb01Rd4bHaEsmyzPNeE%2B%2BArT1TmYhVAYVFVRWI6iv2YJHtIJ65mSAb%2F65qffWsZxe0ThVUg1t8%2FfoynT9BMdKi%2FLjORXK%2F9vqJWkCo3W3ISMQWWiWGJJu74BzJ2pUC23ajLFI777bjxhY51s6GFa1qJDCe3AnFtjSsP90t7leRMhLLJv5FFIOhXQiyHDI5GDVod4AYk%2Bwlulv5HYi61fnpMwZbE9WEGoKnY3SFX9qzJIesyQYS86M7SdDbTCtuHlOttwk8wwj6LDyQY6pgFKpvsPPxBvWqylHrAbpe8Ssw9oibazmhuWfd40%2F3i9XKwRcXbQW9dm3Yt8Hhz9oqbbiRiRnZwzRRek8folPmjwyFS5Hs2iXMzmbhnGinDh%2B%2FAHNT%2F1XRcYG5FQHNe7aj89fo6sW93xbPtx6zsoKYiKcdiZT6FhsNtqRCZowMZuVkSO4pi65pG1UaVqELgQd0nfnSLdB7PxKn%2BiIWMhNucUdmNjBmPm&X-Amz-Signature=1eccb30da3975d427e47d74518f21eb6ddee4c62267026836d1ec318634f3b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6JOS2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGHwUHg9SNpfq0WEWrZFvg4Prv4XlExYNgDQxFrzlvAIAiAk0P9ht552Ubdjouid%2Bp54czqYVLQbnG2WDWvPZvFMaCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMiEajSnZYkb6QqtWoKtwDNEC68jokeCT1ZiunJSp6JaUauYHyJc%2FtnEn%2FiqRwjL4k47qu%2B9nE0Jg4kjiYrQ8xB6K%2B1llRJ%2FCNbG9Rqs0MGIvAyfwEBncaaFtouBBdb37s6qXcWPtxA1c6SdzNobKbV2cr5GAAeC63Jm12LXN42TjpJtQLtiMC4tegFkY6vWgyc%2B4kC2Ut7tcBlMoB1gvWiArnQmbutUdu35UHviH7J3xNGt5H%2BoU%2F53NvJ7mxAMBJmv3OOe1HzV%2FGbJeVrk0F4G5fBF0dGpdlVMvzdpINSsdUJt116%2BQlHG7us3vp2tD3mp%2FUtHEEuj2b4hHVTeGyeVOjyfufNAEL3gs%2FrNRPJpAV9JmlqAIpur5bZFEMF8mwsCdumcPLNb01Rd4bHaEsmyzPNeE%2B%2BArT1TmYhVAYVFVRWI6iv2YJHtIJ65mSAb%2F65qffWsZxe0ThVUg1t8%2FfoynT9BMdKi%2FLjORXK%2F9vqJWkCo3W3ISMQWWiWGJJu74BzJ2pUC23ajLFI777bjxhY51s6GFa1qJDCe3AnFtjSsP90t7leRMhLLJv5FFIOhXQiyHDI5GDVod4AYk%2Bwlulv5HYi61fnpMwZbE9WEGoKnY3SFX9qzJIesyQYS86M7SdDbTCtuHlOttwk8wwj6LDyQY6pgFKpvsPPxBvWqylHrAbpe8Ssw9oibazmhuWfd40%2F3i9XKwRcXbQW9dm3Yt8Hhz9oqbbiRiRnZwzRRek8folPmjwyFS5Hs2iXMzmbhnGinDh%2B%2FAHNT%2F1XRcYG5FQHNe7aj89fo6sW93xbPtx6zsoKYiKcdiZT6FhsNtqRCZowMZuVkSO4pi65pG1UaVqELgQd0nfnSLdB7PxKn%2BiIWMhNucUdmNjBmPm&X-Amz-Signature=74c91ba9ae9fe00b0c3cdf7d377921064e14c8bfe0855f597071f4d9f69af912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6JOS2C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGHwUHg9SNpfq0WEWrZFvg4Prv4XlExYNgDQxFrzlvAIAiAk0P9ht552Ubdjouid%2Bp54czqYVLQbnG2WDWvPZvFMaCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMiEajSnZYkb6QqtWoKtwDNEC68jokeCT1ZiunJSp6JaUauYHyJc%2FtnEn%2FiqRwjL4k47qu%2B9nE0Jg4kjiYrQ8xB6K%2B1llRJ%2FCNbG9Rqs0MGIvAyfwEBncaaFtouBBdb37s6qXcWPtxA1c6SdzNobKbV2cr5GAAeC63Jm12LXN42TjpJtQLtiMC4tegFkY6vWgyc%2B4kC2Ut7tcBlMoB1gvWiArnQmbutUdu35UHviH7J3xNGt5H%2BoU%2F53NvJ7mxAMBJmv3OOe1HzV%2FGbJeVrk0F4G5fBF0dGpdlVMvzdpINSsdUJt116%2BQlHG7us3vp2tD3mp%2FUtHEEuj2b4hHVTeGyeVOjyfufNAEL3gs%2FrNRPJpAV9JmlqAIpur5bZFEMF8mwsCdumcPLNb01Rd4bHaEsmyzPNeE%2B%2BArT1TmYhVAYVFVRWI6iv2YJHtIJ65mSAb%2F65qffWsZxe0ThVUg1t8%2FfoynT9BMdKi%2FLjORXK%2F9vqJWkCo3W3ISMQWWiWGJJu74BzJ2pUC23ajLFI777bjxhY51s6GFa1qJDCe3AnFtjSsP90t7leRMhLLJv5FFIOhXQiyHDI5GDVod4AYk%2Bwlulv5HYi61fnpMwZbE9WEGoKnY3SFX9qzJIesyQYS86M7SdDbTCtuHlOttwk8wwj6LDyQY6pgFKpvsPPxBvWqylHrAbpe8Ssw9oibazmhuWfd40%2F3i9XKwRcXbQW9dm3Yt8Hhz9oqbbiRiRnZwzRRek8folPmjwyFS5Hs2iXMzmbhnGinDh%2B%2FAHNT%2F1XRcYG5FQHNe7aj89fo6sW93xbPtx6zsoKYiKcdiZT6FhsNtqRCZowMZuVkSO4pi65pG1UaVqELgQd0nfnSLdB7PxKn%2BiIWMhNucUdmNjBmPm&X-Amz-Signature=c106c4e11b3a1ac3ccc1047ffab5574a8d60ca5e7b0cc472b3f1a7f4b58cf7bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLFLEIAO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD%2FGo6dQATHPIYDESEhyQYFkDpjcX4Q6zRWLVTnuFgmmQIgf1ClJBv8fQKp4hIapzfIghR881BYtYKAHUq1B%2B91aqQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLC10v0FifgOKfzgZCrcA1N1EJsOgjX4Wqh6UW3EBGpfqwIP%2BvLo6qdFZ9Qxw2QAMKTYrpKoi9c1L6M2KXCrtTcguQ0fsd0bR4NrgUomEWx9ATD2D7iTV7aXImv1%2Bs0k2HiYSn5Tdk%2FpDwhFss6i0N0zQELFSUy6S28ZkFApPJpW75vD94RVie6tQb728K2qvKyGqInwkAK7Su8CuqkqQjUNtMsl08LaL1VWf8UjutWWrhD17%2FPmf3ix0YpBceAldBN9L7toraE5o6kCqp%2F%2FQkzFwmX104zdIpV31l14lurOhqBcD%2FXuhfqIygolT2tJ7fycFc5vNi%2Bh%2FGhB8RptH7a27jQZ%2F%2Fo43znwnp%2F%2F0hQKvEGFpMTeaXp3s2WcSUn3iBT%2BxSjmFD1vwQnsKrc1n1mUvaZyVeTrG3XJio6IKh%2FLFTTt3Jypet7TSZoGYg7j6oDn8FGBZ79yM89iOAkJGD6VR3SZSaJLeuZsH9GBQ9dX%2FRUHAU5z6fY6OqbfCQtsghiGI6kHolk1RwY6Z70Kr3Ig8XoOClNaDR5n514U%2FrpmJ5EMv%2BNeWQn1y78f0%2Fw0eUoUItY%2FCL1uLmZXhxpzSgncfDNBR38KWteaZ%2BRsk4tl0OiFt7tSUFPXSceA%2FxzrIaR9KwOLwzVYb3mxMMmgw8kGOqUBWjToxZ3eylWCzl8h%2FLn%2F5H7x4aWG4iZXUFJ%2FBAj8p%2B%2Fleu%2FCBf8W6%2Bcr9tvpjWcyg5fNCQR%2B0Jwtponwm0s4TnV9105QiH1MygGs8Lf31ECAJKSbajwk9twsGDcLM9a%2B0KayAycpr%2F76uCQgg8cm%2B2Cx9TASYpFTy68C5k%2BZFeDC69VALZyPCCWJYdf91KBuvEopyhs%2FsXM9RdMsuO8q1I0VuRxt&X-Amz-Signature=a35df7f90ccb0b44fe80b9b678ef5c7e8d1a082014581637014efc5faf118b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

