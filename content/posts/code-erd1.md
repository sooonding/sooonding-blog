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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPTY4RE%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T010723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDXD5pDe%2FgETmbAEiH4aK%2BMC53DoEAlguvyQkZBi8EqAiBFzfhWKkjMcKWlCmb7b2T8%2Fg6kpFBVglNAxlNFMP9RbCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMO626kUdCtatFBNDMKtwDA74b8oBGgYoR9N2bNEE7HALrtBRWjiypFnN2qh0muVdNisme3Y4q%2FoAx4irW7Y2MbZlB%2BwwatVvH4S7r6%2BHR3AuAAELHmMpPc6d0r7ZiA%2Fa%2BG3Ua8fv9eycD3SwqU8QHZyn0SHCDEhM1c%2B04hAMaTB4a73bEuqpXVZLIa4rC0xCUusxc4OrpMMkxGW%2Fd29sgMuQ%2B3szf9fNgEjizfnV28vgy1SIrPsKAscPFHitUo3UsNfAReB5eIxyIwC%2B8m6J3%2B2W6FAZWR9xtDO4cSTVnYPYjieYtFlyw3GX2hvxcEEkGatBgYFqmF59ZTGDZfS4Uu1w5SKCFXCoR2%2F1BNNVm%2F62oXPQk6Ep1DDVZLi5z8wy%2BnBDE7bAUW8k5g8UrlQATWXHpcjm1XCqKNQ7H2nc9pgxtEQqqQbj5ED7LEPZ8BBEvfhzuPP8kv3smD%2BKYZq%2BaF5pY4WyR01UySh6UNLLZd1HfzEqHtfmBRX6whYE6pWw1A3NmIfyvWIKScZ9PCg6L6FVAU1bw9v7Qrysr4E%2BUXgmkqxI%2Fi0LfY7F7rcD0ZytYSnIFWCULmKAcYfDZGMh1W%2BUFzwwMYfQYnj4f9g666d3xfEJueb3Cz5NrUpOH2kONQ0laykGJ%2F078Bwgw2taCygY6pgH6kliV3KSP%2FO1ukEYpSabdpNEZVUDPC2SoJAcUNxT9%2BFNcZ1OvKKNKARtVItwxwduJrDjuMR%2FSPjZmVfItEhOYF%2B8WlXaofk1HbnaErQ5qpEkesOmkqnGtDryonuHmxn%2F2mkNQUMZZal0xNrYDTUko6aTwHNjonsfUedmqIGNstDELYSdNgXrp6h%2Fzw3gv9VVajd%2F%2B6odKQvKlEsrTcKpAzR88%2BNGn&X-Amz-Signature=139d430f252b869cd5feb913862d762efa11fdf5858fa1be34e1cc90d0bf0d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VNOIIF%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T010723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzVL%2B%2B3xB2UBQIcJX4UaejY6GmTVu13H9HuPG9OuzLAiBB9QJjn3FN6IURTYolPaoJuVLsyx7jgCr11mtsbqIc%2FCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMkSmxq%2FgvljoohgqMKtwDPq7U2AITMj5lkCQ3qTwvZiH67kgmP2rfxBu7ZsiQp2yU9xWXuyMKuLuAu43PilmQha9oTiz1l%2BqxMKv64x1sPbbw2Jb9cmhqkYX5BoRKi%2FvCbMq1lcyPVYkiAIhEBdbnY9D4RZmduIHBq1feWnn7dAQb%2FUdXT1w1t0SVO6gpEePvQmSVm5ANeU2LTwzjFXXfmNLOS%2B6Vd65pnZHTFzatpbzxBsXzi%2Bu4bKw0ZwOZQbt7EaQ8%2F4UJxgHVUyuz3NqDcE%2FxFPVy%2BPkDrJMLPqEmHgp7s9ubNnlVcnQLZDVNbEKDEOjbz7rqNaj0zLsob04E6hCudLkf8CGfe90G821yHq35M2yovZ%2Bp3dBoiPpdv4ywX6IyP1iJYmHAR987TP5t45VXNQ9LERm%2Fufd4G7oynLa1T06lRSIjwWJ2DED2%2FQIZzAMzXIa3DspcQJ8427FQLb1xVG2WgikGF6foXh%2FhHyow37vuHTVC6SMqAynh4a5eCtO6kZExuopvU8o2GGjJHKyurp20FmH6niI7hneBG7jUpwRWpDwrWxFJ1O8b%2Fymd6D1NLrKaCRzzYSGAvZeuZh6t%2BPmDEOq1GjLTY5ZONGvd1iJmp3lxWMsIPV2kMdNmMzEsuoU8EYreEGYwrNeCygY6pgHsqAEU74%2FIjlisWAQ8gnS4UgFHdWOtXdBFtVHrVO9ExL%2BizkToBr9D0qZvDoN2zlJU0usL4y6A%2F%2BvlItyJSd2YwS%2Fwt8to4wMyGYJCt%2BNZ6lp4YSd4XYkduHI%2BrED4J%2F57jynhPaloGVPyvh8KPmVs525Qr88ibXCHxDMioGpUSVl%2BefSL9fdqsko%2FX5Z36h183FTaURqC7GvH7bzl%2FQ54zYLngSK6&X-Amz-Signature=8a9f3135d8385efae5a4e11f51bc5472be8a132ea524e044edcc039dcc823d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VNOIIF%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T010723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzVL%2B%2B3xB2UBQIcJX4UaejY6GmTVu13H9HuPG9OuzLAiBB9QJjn3FN6IURTYolPaoJuVLsyx7jgCr11mtsbqIc%2FCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMkSmxq%2FgvljoohgqMKtwDPq7U2AITMj5lkCQ3qTwvZiH67kgmP2rfxBu7ZsiQp2yU9xWXuyMKuLuAu43PilmQha9oTiz1l%2BqxMKv64x1sPbbw2Jb9cmhqkYX5BoRKi%2FvCbMq1lcyPVYkiAIhEBdbnY9D4RZmduIHBq1feWnn7dAQb%2FUdXT1w1t0SVO6gpEePvQmSVm5ANeU2LTwzjFXXfmNLOS%2B6Vd65pnZHTFzatpbzxBsXzi%2Bu4bKw0ZwOZQbt7EaQ8%2F4UJxgHVUyuz3NqDcE%2FxFPVy%2BPkDrJMLPqEmHgp7s9ubNnlVcnQLZDVNbEKDEOjbz7rqNaj0zLsob04E6hCudLkf8CGfe90G821yHq35M2yovZ%2Bp3dBoiPpdv4ywX6IyP1iJYmHAR987TP5t45VXNQ9LERm%2Fufd4G7oynLa1T06lRSIjwWJ2DED2%2FQIZzAMzXIa3DspcQJ8427FQLb1xVG2WgikGF6foXh%2FhHyow37vuHTVC6SMqAynh4a5eCtO6kZExuopvU8o2GGjJHKyurp20FmH6niI7hneBG7jUpwRWpDwrWxFJ1O8b%2Fymd6D1NLrKaCRzzYSGAvZeuZh6t%2BPmDEOq1GjLTY5ZONGvd1iJmp3lxWMsIPV2kMdNmMzEsuoU8EYreEGYwrNeCygY6pgHsqAEU74%2FIjlisWAQ8gnS4UgFHdWOtXdBFtVHrVO9ExL%2BizkToBr9D0qZvDoN2zlJU0usL4y6A%2F%2BvlItyJSd2YwS%2Fwt8to4wMyGYJCt%2BNZ6lp4YSd4XYkduHI%2BrED4J%2F57jynhPaloGVPyvh8KPmVs525Qr88ibXCHxDMioGpUSVl%2BefSL9fdqsko%2FX5Z36h183FTaURqC7GvH7bzl%2FQ54zYLngSK6&X-Amz-Signature=9ea6e8a3c123e0e0c88459ec09b2c768243e539ca18f7fad56bc1f5541ba7ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VNOIIF%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T010723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzVL%2B%2B3xB2UBQIcJX4UaejY6GmTVu13H9HuPG9OuzLAiBB9QJjn3FN6IURTYolPaoJuVLsyx7jgCr11mtsbqIc%2FCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMkSmxq%2FgvljoohgqMKtwDPq7U2AITMj5lkCQ3qTwvZiH67kgmP2rfxBu7ZsiQp2yU9xWXuyMKuLuAu43PilmQha9oTiz1l%2BqxMKv64x1sPbbw2Jb9cmhqkYX5BoRKi%2FvCbMq1lcyPVYkiAIhEBdbnY9D4RZmduIHBq1feWnn7dAQb%2FUdXT1w1t0SVO6gpEePvQmSVm5ANeU2LTwzjFXXfmNLOS%2B6Vd65pnZHTFzatpbzxBsXzi%2Bu4bKw0ZwOZQbt7EaQ8%2F4UJxgHVUyuz3NqDcE%2FxFPVy%2BPkDrJMLPqEmHgp7s9ubNnlVcnQLZDVNbEKDEOjbz7rqNaj0zLsob04E6hCudLkf8CGfe90G821yHq35M2yovZ%2Bp3dBoiPpdv4ywX6IyP1iJYmHAR987TP5t45VXNQ9LERm%2Fufd4G7oynLa1T06lRSIjwWJ2DED2%2FQIZzAMzXIa3DspcQJ8427FQLb1xVG2WgikGF6foXh%2FhHyow37vuHTVC6SMqAynh4a5eCtO6kZExuopvU8o2GGjJHKyurp20FmH6niI7hneBG7jUpwRWpDwrWxFJ1O8b%2Fymd6D1NLrKaCRzzYSGAvZeuZh6t%2BPmDEOq1GjLTY5ZONGvd1iJmp3lxWMsIPV2kMdNmMzEsuoU8EYreEGYwrNeCygY6pgHsqAEU74%2FIjlisWAQ8gnS4UgFHdWOtXdBFtVHrVO9ExL%2BizkToBr9D0qZvDoN2zlJU0usL4y6A%2F%2BvlItyJSd2YwS%2Fwt8to4wMyGYJCt%2BNZ6lp4YSd4XYkduHI%2BrED4J%2F57jynhPaloGVPyvh8KPmVs525Qr88ibXCHxDMioGpUSVl%2BefSL9fdqsko%2FX5Z36h183FTaURqC7GvH7bzl%2FQ54zYLngSK6&X-Amz-Signature=151073bb7bc9c0ee59abf7e7506a0d49a8a7ad6dbabfde5b1d570cc0fe32a6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VNOIIF%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T010723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzVL%2B%2B3xB2UBQIcJX4UaejY6GmTVu13H9HuPG9OuzLAiBB9QJjn3FN6IURTYolPaoJuVLsyx7jgCr11mtsbqIc%2FCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMkSmxq%2FgvljoohgqMKtwDPq7U2AITMj5lkCQ3qTwvZiH67kgmP2rfxBu7ZsiQp2yU9xWXuyMKuLuAu43PilmQha9oTiz1l%2BqxMKv64x1sPbbw2Jb9cmhqkYX5BoRKi%2FvCbMq1lcyPVYkiAIhEBdbnY9D4RZmduIHBq1feWnn7dAQb%2FUdXT1w1t0SVO6gpEePvQmSVm5ANeU2LTwzjFXXfmNLOS%2B6Vd65pnZHTFzatpbzxBsXzi%2Bu4bKw0ZwOZQbt7EaQ8%2F4UJxgHVUyuz3NqDcE%2FxFPVy%2BPkDrJMLPqEmHgp7s9ubNnlVcnQLZDVNbEKDEOjbz7rqNaj0zLsob04E6hCudLkf8CGfe90G821yHq35M2yovZ%2Bp3dBoiPpdv4ywX6IyP1iJYmHAR987TP5t45VXNQ9LERm%2Fufd4G7oynLa1T06lRSIjwWJ2DED2%2FQIZzAMzXIa3DspcQJ8427FQLb1xVG2WgikGF6foXh%2FhHyow37vuHTVC6SMqAynh4a5eCtO6kZExuopvU8o2GGjJHKyurp20FmH6niI7hneBG7jUpwRWpDwrWxFJ1O8b%2Fymd6D1NLrKaCRzzYSGAvZeuZh6t%2BPmDEOq1GjLTY5ZONGvd1iJmp3lxWMsIPV2kMdNmMzEsuoU8EYreEGYwrNeCygY6pgHsqAEU74%2FIjlisWAQ8gnS4UgFHdWOtXdBFtVHrVO9ExL%2BizkToBr9D0qZvDoN2zlJU0usL4y6A%2F%2BvlItyJSd2YwS%2Fwt8to4wMyGYJCt%2BNZ6lp4YSd4XYkduHI%2BrED4J%2F57jynhPaloGVPyvh8KPmVs525Qr88ibXCHxDMioGpUSVl%2BefSL9fdqsko%2FX5Z36h183FTaURqC7GvH7bzl%2FQ54zYLngSK6&X-Amz-Signature=31517e0c29b961510760515e89baf5720cd67d2b611a6d46ef267e67d292168f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637VNOIIF%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T010723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPzVL%2B%2B3xB2UBQIcJX4UaejY6GmTVu13H9HuPG9OuzLAiBB9QJjn3FN6IURTYolPaoJuVLsyx7jgCr11mtsbqIc%2FCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMkSmxq%2FgvljoohgqMKtwDPq7U2AITMj5lkCQ3qTwvZiH67kgmP2rfxBu7ZsiQp2yU9xWXuyMKuLuAu43PilmQha9oTiz1l%2BqxMKv64x1sPbbw2Jb9cmhqkYX5BoRKi%2FvCbMq1lcyPVYkiAIhEBdbnY9D4RZmduIHBq1feWnn7dAQb%2FUdXT1w1t0SVO6gpEePvQmSVm5ANeU2LTwzjFXXfmNLOS%2B6Vd65pnZHTFzatpbzxBsXzi%2Bu4bKw0ZwOZQbt7EaQ8%2F4UJxgHVUyuz3NqDcE%2FxFPVy%2BPkDrJMLPqEmHgp7s9ubNnlVcnQLZDVNbEKDEOjbz7rqNaj0zLsob04E6hCudLkf8CGfe90G821yHq35M2yovZ%2Bp3dBoiPpdv4ywX6IyP1iJYmHAR987TP5t45VXNQ9LERm%2Fufd4G7oynLa1T06lRSIjwWJ2DED2%2FQIZzAMzXIa3DspcQJ8427FQLb1xVG2WgikGF6foXh%2FhHyow37vuHTVC6SMqAynh4a5eCtO6kZExuopvU8o2GGjJHKyurp20FmH6niI7hneBG7jUpwRWpDwrWxFJ1O8b%2Fymd6D1NLrKaCRzzYSGAvZeuZh6t%2BPmDEOq1GjLTY5ZONGvd1iJmp3lxWMsIPV2kMdNmMzEsuoU8EYreEGYwrNeCygY6pgHsqAEU74%2FIjlisWAQ8gnS4UgFHdWOtXdBFtVHrVO9ExL%2BizkToBr9D0qZvDoN2zlJU0usL4y6A%2F%2BvlItyJSd2YwS%2Fwt8to4wMyGYJCt%2BNZ6lp4YSd4XYkduHI%2BrED4J%2F57jynhPaloGVPyvh8KPmVs525Qr88ibXCHxDMioGpUSVl%2BefSL9fdqsko%2FX5Z36h183FTaURqC7GvH7bzl%2FQ54zYLngSK6&X-Amz-Signature=832b6032b626a259bd99216e566835f7bf0075ccafb9ee6df88a5812f548e401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PPTY4RE%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T010723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDXD5pDe%2FgETmbAEiH4aK%2BMC53DoEAlguvyQkZBi8EqAiBFzfhWKkjMcKWlCmb7b2T8%2Fg6kpFBVglNAxlNFMP9RbCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMO626kUdCtatFBNDMKtwDA74b8oBGgYoR9N2bNEE7HALrtBRWjiypFnN2qh0muVdNisme3Y4q%2FoAx4irW7Y2MbZlB%2BwwatVvH4S7r6%2BHR3AuAAELHmMpPc6d0r7ZiA%2Fa%2BG3Ua8fv9eycD3SwqU8QHZyn0SHCDEhM1c%2B04hAMaTB4a73bEuqpXVZLIa4rC0xCUusxc4OrpMMkxGW%2Fd29sgMuQ%2B3szf9fNgEjizfnV28vgy1SIrPsKAscPFHitUo3UsNfAReB5eIxyIwC%2B8m6J3%2B2W6FAZWR9xtDO4cSTVnYPYjieYtFlyw3GX2hvxcEEkGatBgYFqmF59ZTGDZfS4Uu1w5SKCFXCoR2%2F1BNNVm%2F62oXPQk6Ep1DDVZLi5z8wy%2BnBDE7bAUW8k5g8UrlQATWXHpcjm1XCqKNQ7H2nc9pgxtEQqqQbj5ED7LEPZ8BBEvfhzuPP8kv3smD%2BKYZq%2BaF5pY4WyR01UySh6UNLLZd1HfzEqHtfmBRX6whYE6pWw1A3NmIfyvWIKScZ9PCg6L6FVAU1bw9v7Qrysr4E%2BUXgmkqxI%2Fi0LfY7F7rcD0ZytYSnIFWCULmKAcYfDZGMh1W%2BUFzwwMYfQYnj4f9g666d3xfEJueb3Cz5NrUpOH2kONQ0laykGJ%2F078Bwgw2taCygY6pgH6kliV3KSP%2FO1ukEYpSabdpNEZVUDPC2SoJAcUNxT9%2BFNcZ1OvKKNKARtVItwxwduJrDjuMR%2FSPjZmVfItEhOYF%2B8WlXaofk1HbnaErQ5qpEkesOmkqnGtDryonuHmxn%2F2mkNQUMZZal0xNrYDTUko6aTwHNjonsfUedmqIGNstDELYSdNgXrp6h%2Fzw3gv9VVajd%2F%2B6odKQvKlEsrTcKpAzR88%2BNGn&X-Amz-Signature=7276cc9e1a67a48514032a9b9e1a12e913dc044a6dd7127657de9270be3e2bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

