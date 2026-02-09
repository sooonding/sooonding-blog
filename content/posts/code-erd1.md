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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YC4PRXL%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T021338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlJKiAubuJNPN36eULq38uaeu222yzbPDliFsg5Yc4HAIhAJ9soFn9hymech1cVyRRNjXIpIr7V5a7WCoT%2BZe5Lrs1KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B7XYBOksuTb5CWlUq3APwtUR%2FZnXZFKxFwvL8H7K3cpNm%2FM%2FZ%2FXQcSj%2FYQeuTxweUdDY3CVTmFWoPZOgunDlrU9cG7CDh1y3EwCOO1CG8LUBM06L6rYlYsCtuWEJmU6pzKYKptRU8Ob2Zmn0NeA5NtN02aFlM1QTsTa2z9aEB27rlHY8le9IR4tWtSI77jB2QbNKmAxiZrJUII5FDtXgD%2FlfPDnaQHST3qCJM2MC7z1IskQlU8lG1R%2B5709AVdGICG2eh7X6P%2BSnxrqwcNEQB4NARXBjgczkyfiBbG4BWb6L%2FwEw6TZSF5AX%2BGkYk%2FH3eh6dN8gPAUCiKjPaNLdepPNpE%2F6gDyqrWuMaHQpv9Z7S8Cat9YAakm3scZiAdjE%2BwTF2QbctA7IRdDTEQcrlcj8CupJBx1ri%2BSJe3i%2BWk4z8Co3W0IbWqH36UBrfw0VPYReRwKWrL15EndXZqQRq3GSniyVot6hG4TrYVAvQui6jZS21FTomQKwn8F4jpJJKJU1Kp5vTi4n528a%2Fr6K%2BQr5LPeRoNzE20Q06F%2F4qtuoNjKISMOkuy4OZqdLEaYM5Elqdy4l1tLJnNwBy1HxpfY8idcdkglmQ7q5bcUgOuiKdzAc5uXMp8XlQNHQwbpKcE1wNBmRH7ajaABDCH5KTMBjqkAczTYESO1hCKLL3Y599dqT8%2FwTylqZ%2F0ZcOWuPm58w5vbDUk0s9SNARTZjrVXSkc%2BV3E774rowhBxwT0zd5nXjrI6W7BUXj3CE7RW6hkZ7jI0Wc1QUHPecNSWegV%2Bxa2d%2BC0yeMTaqPDprOP02TCmfBNWKPXGTmnqM44o0GhsTpLCk7vKvBjpANoBcBf%2Bo04GwDT%2F8dUgfLJp6B6F3XDt0W%2F%2Bdvo&X-Amz-Signature=520608c98827b3e6640e9cc810578edef20a94c78bfe66243c976fe2ccd7e715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSMDUN5%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGWAaOZJwNm5Gprq3nI%2FfTzm4dLJdcF0hzHzosQ2DC6AiAhYYxCCYXO365Q6N2PCRW%2BchyZnJru%2Biw4CfWcFPRJ6yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zt4nx2h2GgROXSdKtwDutXpyj5%2BooOHW0E0Be6zpiKf9n9VBHaTE4nPfrB2BwUeDaaPh3t4RhOw9yyVljmxyGhBUU6P5%2B3FCftb7%2F91buHZH7zzcnSorlP1YKGkLwJoKcSYBn%2Bew4k2GYL2ZG%2FTFacysUB%2FS%2FZNNCwHbvyQkUG9bBNqQ0t68HYejNjRLHOZXP8J3PiicAwswwnjJ5FWnpoGBDXfNCAoLenBcHTVh%2F0pJhZpFiHU9%2FDeM38G8T2Zylj%2BJCDQBebrG43jNw%2BVR2PKlySH0aeDFcrOW4DJpywlA22RMSvp2GetfnejzIX%2FUQOhDZvnKIVY9ZkliXQ1isCNF6TmTsv9xF%2FwP5e9tLOg9xgxiH1fbwmFOkcn%2FdhiQFTmPdw%2B0KC7sh31XS5FOhRDDtI7xQUKfQfQFf0knD7g63g4JQSUbZeBx9ll%2FGU01BPLqNMMPsJAjx5OnapHtarrx2aXkM1fnuPzIOfmTPWais4RuHciqyXu760rWkPQ%2FAPoyZp%2BENaOy2mIqg157EtgSytODrhpEte6Xw5d0TXYNsuP214WxG7vvirYpvjM%2BUnX7FEPz9PcLt0Y0EGrWACy2nRIyqfZ96wxzIkqM06txDsf5EgyxcLxnqlxs24%2F8iYLZ5NEcvAcs%2B8w7oSlzAY6pgFnoPuQWgdB97AK6A7bYeYBBEHfKkISxG7kA0WNLNS1HbgtNs168sizu7zrdF9bwzYYptbIezho72d5LS3OWGMzQLZlwFnayy%2FBX5xKeQE2UtOTH5RFwf4d6oXRqM2eV5vmhV8sCgYcMK%2BmRP6Y7iEGc20ojf%2F7SkG2W73t8y8k4Nd8Im615UgBFoYtYDKvXXgEaay9b%2FWD7YKKgBp8n7%2BCkwH0H%2BK5&X-Amz-Signature=2ee473a5d6acc05a89c18cd11e543cc538f6a2d0cc1481bf96a6032aaf6f552e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSMDUN5%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGWAaOZJwNm5Gprq3nI%2FfTzm4dLJdcF0hzHzosQ2DC6AiAhYYxCCYXO365Q6N2PCRW%2BchyZnJru%2Biw4CfWcFPRJ6yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zt4nx2h2GgROXSdKtwDutXpyj5%2BooOHW0E0Be6zpiKf9n9VBHaTE4nPfrB2BwUeDaaPh3t4RhOw9yyVljmxyGhBUU6P5%2B3FCftb7%2F91buHZH7zzcnSorlP1YKGkLwJoKcSYBn%2Bew4k2GYL2ZG%2FTFacysUB%2FS%2FZNNCwHbvyQkUG9bBNqQ0t68HYejNjRLHOZXP8J3PiicAwswwnjJ5FWnpoGBDXfNCAoLenBcHTVh%2F0pJhZpFiHU9%2FDeM38G8T2Zylj%2BJCDQBebrG43jNw%2BVR2PKlySH0aeDFcrOW4DJpywlA22RMSvp2GetfnejzIX%2FUQOhDZvnKIVY9ZkliXQ1isCNF6TmTsv9xF%2FwP5e9tLOg9xgxiH1fbwmFOkcn%2FdhiQFTmPdw%2B0KC7sh31XS5FOhRDDtI7xQUKfQfQFf0knD7g63g4JQSUbZeBx9ll%2FGU01BPLqNMMPsJAjx5OnapHtarrx2aXkM1fnuPzIOfmTPWais4RuHciqyXu760rWkPQ%2FAPoyZp%2BENaOy2mIqg157EtgSytODrhpEte6Xw5d0TXYNsuP214WxG7vvirYpvjM%2BUnX7FEPz9PcLt0Y0EGrWACy2nRIyqfZ96wxzIkqM06txDsf5EgyxcLxnqlxs24%2F8iYLZ5NEcvAcs%2B8w7oSlzAY6pgFnoPuQWgdB97AK6A7bYeYBBEHfKkISxG7kA0WNLNS1HbgtNs168sizu7zrdF9bwzYYptbIezho72d5LS3OWGMzQLZlwFnayy%2FBX5xKeQE2UtOTH5RFwf4d6oXRqM2eV5vmhV8sCgYcMK%2BmRP6Y7iEGc20ojf%2F7SkG2W73t8y8k4Nd8Im615UgBFoYtYDKvXXgEaay9b%2FWD7YKKgBp8n7%2BCkwH0H%2BK5&X-Amz-Signature=84e262506a5717e780503f1797e67d1f42bc9963864311805d752cd701a5827d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSMDUN5%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGWAaOZJwNm5Gprq3nI%2FfTzm4dLJdcF0hzHzosQ2DC6AiAhYYxCCYXO365Q6N2PCRW%2BchyZnJru%2Biw4CfWcFPRJ6yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zt4nx2h2GgROXSdKtwDutXpyj5%2BooOHW0E0Be6zpiKf9n9VBHaTE4nPfrB2BwUeDaaPh3t4RhOw9yyVljmxyGhBUU6P5%2B3FCftb7%2F91buHZH7zzcnSorlP1YKGkLwJoKcSYBn%2Bew4k2GYL2ZG%2FTFacysUB%2FS%2FZNNCwHbvyQkUG9bBNqQ0t68HYejNjRLHOZXP8J3PiicAwswwnjJ5FWnpoGBDXfNCAoLenBcHTVh%2F0pJhZpFiHU9%2FDeM38G8T2Zylj%2BJCDQBebrG43jNw%2BVR2PKlySH0aeDFcrOW4DJpywlA22RMSvp2GetfnejzIX%2FUQOhDZvnKIVY9ZkliXQ1isCNF6TmTsv9xF%2FwP5e9tLOg9xgxiH1fbwmFOkcn%2FdhiQFTmPdw%2B0KC7sh31XS5FOhRDDtI7xQUKfQfQFf0knD7g63g4JQSUbZeBx9ll%2FGU01BPLqNMMPsJAjx5OnapHtarrx2aXkM1fnuPzIOfmTPWais4RuHciqyXu760rWkPQ%2FAPoyZp%2BENaOy2mIqg157EtgSytODrhpEte6Xw5d0TXYNsuP214WxG7vvirYpvjM%2BUnX7FEPz9PcLt0Y0EGrWACy2nRIyqfZ96wxzIkqM06txDsf5EgyxcLxnqlxs24%2F8iYLZ5NEcvAcs%2B8w7oSlzAY6pgFnoPuQWgdB97AK6A7bYeYBBEHfKkISxG7kA0WNLNS1HbgtNs168sizu7zrdF9bwzYYptbIezho72d5LS3OWGMzQLZlwFnayy%2FBX5xKeQE2UtOTH5RFwf4d6oXRqM2eV5vmhV8sCgYcMK%2BmRP6Y7iEGc20ojf%2F7SkG2W73t8y8k4Nd8Im615UgBFoYtYDKvXXgEaay9b%2FWD7YKKgBp8n7%2BCkwH0H%2BK5&X-Amz-Signature=f1fcf3231700acb9f3a913e13e6909798698cfd76c29aac6425782e39cd94415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSMDUN5%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGWAaOZJwNm5Gprq3nI%2FfTzm4dLJdcF0hzHzosQ2DC6AiAhYYxCCYXO365Q6N2PCRW%2BchyZnJru%2Biw4CfWcFPRJ6yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zt4nx2h2GgROXSdKtwDutXpyj5%2BooOHW0E0Be6zpiKf9n9VBHaTE4nPfrB2BwUeDaaPh3t4RhOw9yyVljmxyGhBUU6P5%2B3FCftb7%2F91buHZH7zzcnSorlP1YKGkLwJoKcSYBn%2Bew4k2GYL2ZG%2FTFacysUB%2FS%2FZNNCwHbvyQkUG9bBNqQ0t68HYejNjRLHOZXP8J3PiicAwswwnjJ5FWnpoGBDXfNCAoLenBcHTVh%2F0pJhZpFiHU9%2FDeM38G8T2Zylj%2BJCDQBebrG43jNw%2BVR2PKlySH0aeDFcrOW4DJpywlA22RMSvp2GetfnejzIX%2FUQOhDZvnKIVY9ZkliXQ1isCNF6TmTsv9xF%2FwP5e9tLOg9xgxiH1fbwmFOkcn%2FdhiQFTmPdw%2B0KC7sh31XS5FOhRDDtI7xQUKfQfQFf0knD7g63g4JQSUbZeBx9ll%2FGU01BPLqNMMPsJAjx5OnapHtarrx2aXkM1fnuPzIOfmTPWais4RuHciqyXu760rWkPQ%2FAPoyZp%2BENaOy2mIqg157EtgSytODrhpEte6Xw5d0TXYNsuP214WxG7vvirYpvjM%2BUnX7FEPz9PcLt0Y0EGrWACy2nRIyqfZ96wxzIkqM06txDsf5EgyxcLxnqlxs24%2F8iYLZ5NEcvAcs%2B8w7oSlzAY6pgFnoPuQWgdB97AK6A7bYeYBBEHfKkISxG7kA0WNLNS1HbgtNs168sizu7zrdF9bwzYYptbIezho72d5LS3OWGMzQLZlwFnayy%2FBX5xKeQE2UtOTH5RFwf4d6oXRqM2eV5vmhV8sCgYcMK%2BmRP6Y7iEGc20ojf%2F7SkG2W73t8y8k4Nd8Im615UgBFoYtYDKvXXgEaay9b%2FWD7YKKgBp8n7%2BCkwH0H%2BK5&X-Amz-Signature=4c53dbaf0f8cc66bc386b93ebe16d408b02b72e3f4a45c71a303c70b843c0af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSMDUN5%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGWAaOZJwNm5Gprq3nI%2FfTzm4dLJdcF0hzHzosQ2DC6AiAhYYxCCYXO365Q6N2PCRW%2BchyZnJru%2Biw4CfWcFPRJ6yqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zt4nx2h2GgROXSdKtwDutXpyj5%2BooOHW0E0Be6zpiKf9n9VBHaTE4nPfrB2BwUeDaaPh3t4RhOw9yyVljmxyGhBUU6P5%2B3FCftb7%2F91buHZH7zzcnSorlP1YKGkLwJoKcSYBn%2Bew4k2GYL2ZG%2FTFacysUB%2FS%2FZNNCwHbvyQkUG9bBNqQ0t68HYejNjRLHOZXP8J3PiicAwswwnjJ5FWnpoGBDXfNCAoLenBcHTVh%2F0pJhZpFiHU9%2FDeM38G8T2Zylj%2BJCDQBebrG43jNw%2BVR2PKlySH0aeDFcrOW4DJpywlA22RMSvp2GetfnejzIX%2FUQOhDZvnKIVY9ZkliXQ1isCNF6TmTsv9xF%2FwP5e9tLOg9xgxiH1fbwmFOkcn%2FdhiQFTmPdw%2B0KC7sh31XS5FOhRDDtI7xQUKfQfQFf0knD7g63g4JQSUbZeBx9ll%2FGU01BPLqNMMPsJAjx5OnapHtarrx2aXkM1fnuPzIOfmTPWais4RuHciqyXu760rWkPQ%2FAPoyZp%2BENaOy2mIqg157EtgSytODrhpEte6Xw5d0TXYNsuP214WxG7vvirYpvjM%2BUnX7FEPz9PcLt0Y0EGrWACy2nRIyqfZ96wxzIkqM06txDsf5EgyxcLxnqlxs24%2F8iYLZ5NEcvAcs%2B8w7oSlzAY6pgFnoPuQWgdB97AK6A7bYeYBBEHfKkISxG7kA0WNLNS1HbgtNs168sizu7zrdF9bwzYYptbIezho72d5LS3OWGMzQLZlwFnayy%2FBX5xKeQE2UtOTH5RFwf4d6oXRqM2eV5vmhV8sCgYcMK%2BmRP6Y7iEGc20ojf%2F7SkG2W73t8y8k4Nd8Im615UgBFoYtYDKvXXgEaay9b%2FWD7YKKgBp8n7%2BCkwH0H%2BK5&X-Amz-Signature=558c17dc203f4d659c833b7c71229cd5b1eddd4188ed7e07dedb2781112845ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YC4PRXL%2F20260209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260209T021338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlJKiAubuJNPN36eULq38uaeu222yzbPDliFsg5Yc4HAIhAJ9soFn9hymech1cVyRRNjXIpIr7V5a7WCoT%2BZe5Lrs1KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B7XYBOksuTb5CWlUq3APwtUR%2FZnXZFKxFwvL8H7K3cpNm%2FM%2FZ%2FXQcSj%2FYQeuTxweUdDY3CVTmFWoPZOgunDlrU9cG7CDh1y3EwCOO1CG8LUBM06L6rYlYsCtuWEJmU6pzKYKptRU8Ob2Zmn0NeA5NtN02aFlM1QTsTa2z9aEB27rlHY8le9IR4tWtSI77jB2QbNKmAxiZrJUII5FDtXgD%2FlfPDnaQHST3qCJM2MC7z1IskQlU8lG1R%2B5709AVdGICG2eh7X6P%2BSnxrqwcNEQB4NARXBjgczkyfiBbG4BWb6L%2FwEw6TZSF5AX%2BGkYk%2FH3eh6dN8gPAUCiKjPaNLdepPNpE%2F6gDyqrWuMaHQpv9Z7S8Cat9YAakm3scZiAdjE%2BwTF2QbctA7IRdDTEQcrlcj8CupJBx1ri%2BSJe3i%2BWk4z8Co3W0IbWqH36UBrfw0VPYReRwKWrL15EndXZqQRq3GSniyVot6hG4TrYVAvQui6jZS21FTomQKwn8F4jpJJKJU1Kp5vTi4n528a%2Fr6K%2BQr5LPeRoNzE20Q06F%2F4qtuoNjKISMOkuy4OZqdLEaYM5Elqdy4l1tLJnNwBy1HxpfY8idcdkglmQ7q5bcUgOuiKdzAc5uXMp8XlQNHQwbpKcE1wNBmRH7ajaABDCH5KTMBjqkAczTYESO1hCKLL3Y599dqT8%2FwTylqZ%2F0ZcOWuPm58w5vbDUk0s9SNARTZjrVXSkc%2BV3E774rowhBxwT0zd5nXjrI6W7BUXj3CE7RW6hkZ7jI0Wc1QUHPecNSWegV%2Bxa2d%2BC0yeMTaqPDprOP02TCmfBNWKPXGTmnqM44o0GhsTpLCk7vKvBjpANoBcBf%2Bo04GwDT%2F8dUgfLJp6B6F3XDt0W%2F%2Bdvo&X-Amz-Signature=f7058dac4f9aa7db37999d11c31f964a24be27106910ce603dcb21e8c9d38731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

