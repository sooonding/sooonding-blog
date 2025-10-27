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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUBW3RQ%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfaOCUBAwj5KyVJ9SUOyMlceWRXyJGzkONqkLxJxBcdgIhAPnpJZLjnTxiV6N9aF10zA6YHtX7gnc8xEBb4Fx5lLrkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhNuaaOLI9s8jBH4kq3APwYdsc8WrViGBmSV5fdjq5kea%2FGjzHfRN4FFhpDxobOjAO02ial10dXKh7FNb9d%2FqBAhq8WA%2BMgenZrrM9FrROm%2F8yi6pQ2yQkNPROmf6i23XsLXu%2FID%2Bmg952xktgLwIeC6DWvo3Ry%2FbIGVM7sJYUnC3hR6RTJwJtDnGLZ7%2BM15FIR8olfT0JixCx5p3G05dA4KeM1JvHAV2BkQDqDfLJXR%2Fa7KXBEsdfLR2iz9HMHNv3i48dYGs%2FBTDhoATPaqNo3JJo0iBRtC%2FsUa%2FAR5Yy47tfGlsACodMpIHj3tm62J%2BhSYpQrF%2BbIt8dpj8AroWJ0aVu9hyd%2FJMSv5G%2B5AubtsUIj42M9cpWKJ43aYdTmvWcZ5MmSM4dCBqYioislx%2F63IXi9S0Xgx%2BPKpG2F4QoTKQhW9%2FJH6LxOAGXf7lJgbVh7d3ki2u6OY20ExUCYYCHNYELbpgNCxzAEx5sPKC2eHFAd3aL1O6nN9NNZeLzHa1flgryhgwEDwdXHWgJBeU9hGgMgy2%2F0PwAXVGdYhgwVM%2Bz6B4xfUS%2B1C5sjRyWl5Qr4Cej71D%2BP1AwMMehdvmD41rwm%2Bk9NqWV%2FujuHv97G0mfRPCZg0D19dTBeh%2BCY%2BFzGAcApEbC9PZmyjDd%2BPrHBjqkARRdYqaee9jueMEk0%2BUpIBf%2FTCcNbQdS%2FRLa6gpZhoGEBNh1P0KaDycly67v5qinI%2FHTw%2FpwAQgt61EFr%2BoCArXkzO7jC30OZA6WoACq2C2Mel4QlGSVcmcsBAXXNY9B63gsF8G7EOsBlED8bk9V78BgWGB7mUZJfkGkfK%2FbhAeISQrnynVE4fzDKjf9Z6DOEEcpIye7FGwbhRl%2FHeB2eWoaTss2&X-Amz-Signature=beb62559587f24dac38d09e859fe1e173de35f4c4ff906b17bf16a7f5bf0051d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPAJFI3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuDzAhICm0dE0E9YY3RADozwy5CfXDK4GbtyJDVPNQbQIgBDNNxcLnuHA2YqHtlaWJVjt2feNk6zwt3%2FzRxqYXwoAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCicJLQGLlBmpDmB6ircA3hjNjYjyZFf9j6b%2BidOwlSj4sG0IfPaQFemURg5Wenju1fWv05PATpyuLa8g%2FY%2BxoMQn4wcG5zsAaAIjoc02MRzemFOQ3lt5%2B99hbE9hC%2FzAX3z9AWXFUIZHY2shvmzbKr3YMkIcJUlsjK%2FHfPo0v1Abi%2BlFXMbh6aSoE0J6KTMrLJt2sMT5WjuO8ztD8wmXvwl1tACiRvLl%2BccyQ%2FZYPl%2BhI6pC15I2oIkVm0N%2BuP0uxCBBe0V6FBXK%2FVDsTdf7SLaNZD8cpbjKBAqejmW%2FVv6r5M0MsYpT3MplFhx0nFoWVwq5R%2FBJQpv2sMmiZLPbFcRECpPJgyKu4IGak1sUuIdSVA7Y7zrxkQGWsdZ%2F2Br%2BU%2BlDkIrL2ZBzMKpzHpVuAC1mij%2BVCho3diQvmV%2FzBmWuoczAwA77Bv%2FB3K%2BSPmkXHcZkAXLkSN%2F%2BFvrIfprkVJyxk70PavfS75aVV%2B8N6DzijRhvj%2F2DI284uGQU%2Bvj3c5xBA%2F8tGRoIycI8J4BrHhO8VwFQYpFWYZof84M%2BGNG1cEcsgftwTVnDqiTnuRm1CbNxgi7BCK%2FZ3YqL6B6jJNWYdQ720XGSS6d%2FMLnfajyyv6A2SqQBQO6V6ZtlgmjILDFy5aZaoof%2BlYBMPn4%2BscGOqUBnKC9wnKsL0xPusAaedGYezVvgBK%2B3K40MSkdQ%2BceZQHELQm5vZgU8HbkfjSZ2yBObUaZ%2BjrzjClxrSg%2BxY8x%2FSGxyPoq9F%2BWaNybv45ItcLS%2FqTPdr2edFibo%2BWx19sgFJh9zIXtlRPg6DdGH0QoHIUMLSEOKhJOUIGXHMqKb3ykuxjiIAo%2Fhl4qkmW9a57KPZqyqUpFmB7DV46KnDrwnfNZ69gr&X-Amz-Signature=c20a42029d8a3c313dbeb5cfcbbf2f00e3236a4cf340a9f9fc68bf7d32be5180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPAJFI3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuDzAhICm0dE0E9YY3RADozwy5CfXDK4GbtyJDVPNQbQIgBDNNxcLnuHA2YqHtlaWJVjt2feNk6zwt3%2FzRxqYXwoAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCicJLQGLlBmpDmB6ircA3hjNjYjyZFf9j6b%2BidOwlSj4sG0IfPaQFemURg5Wenju1fWv05PATpyuLa8g%2FY%2BxoMQn4wcG5zsAaAIjoc02MRzemFOQ3lt5%2B99hbE9hC%2FzAX3z9AWXFUIZHY2shvmzbKr3YMkIcJUlsjK%2FHfPo0v1Abi%2BlFXMbh6aSoE0J6KTMrLJt2sMT5WjuO8ztD8wmXvwl1tACiRvLl%2BccyQ%2FZYPl%2BhI6pC15I2oIkVm0N%2BuP0uxCBBe0V6FBXK%2FVDsTdf7SLaNZD8cpbjKBAqejmW%2FVv6r5M0MsYpT3MplFhx0nFoWVwq5R%2FBJQpv2sMmiZLPbFcRECpPJgyKu4IGak1sUuIdSVA7Y7zrxkQGWsdZ%2F2Br%2BU%2BlDkIrL2ZBzMKpzHpVuAC1mij%2BVCho3diQvmV%2FzBmWuoczAwA77Bv%2FB3K%2BSPmkXHcZkAXLkSN%2F%2BFvrIfprkVJyxk70PavfS75aVV%2B8N6DzijRhvj%2F2DI284uGQU%2Bvj3c5xBA%2F8tGRoIycI8J4BrHhO8VwFQYpFWYZof84M%2BGNG1cEcsgftwTVnDqiTnuRm1CbNxgi7BCK%2FZ3YqL6B6jJNWYdQ720XGSS6d%2FMLnfajyyv6A2SqQBQO6V6ZtlgmjILDFy5aZaoof%2BlYBMPn4%2BscGOqUBnKC9wnKsL0xPusAaedGYezVvgBK%2B3K40MSkdQ%2BceZQHELQm5vZgU8HbkfjSZ2yBObUaZ%2BjrzjClxrSg%2BxY8x%2FSGxyPoq9F%2BWaNybv45ItcLS%2FqTPdr2edFibo%2BWx19sgFJh9zIXtlRPg6DdGH0QoHIUMLSEOKhJOUIGXHMqKb3ykuxjiIAo%2Fhl4qkmW9a57KPZqyqUpFmB7DV46KnDrwnfNZ69gr&X-Amz-Signature=9acba9bc04fde5f23ff24f268c9479bc6eb3f75ab1f360b81236dea682107fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPAJFI3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuDzAhICm0dE0E9YY3RADozwy5CfXDK4GbtyJDVPNQbQIgBDNNxcLnuHA2YqHtlaWJVjt2feNk6zwt3%2FzRxqYXwoAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCicJLQGLlBmpDmB6ircA3hjNjYjyZFf9j6b%2BidOwlSj4sG0IfPaQFemURg5Wenju1fWv05PATpyuLa8g%2FY%2BxoMQn4wcG5zsAaAIjoc02MRzemFOQ3lt5%2B99hbE9hC%2FzAX3z9AWXFUIZHY2shvmzbKr3YMkIcJUlsjK%2FHfPo0v1Abi%2BlFXMbh6aSoE0J6KTMrLJt2sMT5WjuO8ztD8wmXvwl1tACiRvLl%2BccyQ%2FZYPl%2BhI6pC15I2oIkVm0N%2BuP0uxCBBe0V6FBXK%2FVDsTdf7SLaNZD8cpbjKBAqejmW%2FVv6r5M0MsYpT3MplFhx0nFoWVwq5R%2FBJQpv2sMmiZLPbFcRECpPJgyKu4IGak1sUuIdSVA7Y7zrxkQGWsdZ%2F2Br%2BU%2BlDkIrL2ZBzMKpzHpVuAC1mij%2BVCho3diQvmV%2FzBmWuoczAwA77Bv%2FB3K%2BSPmkXHcZkAXLkSN%2F%2BFvrIfprkVJyxk70PavfS75aVV%2B8N6DzijRhvj%2F2DI284uGQU%2Bvj3c5xBA%2F8tGRoIycI8J4BrHhO8VwFQYpFWYZof84M%2BGNG1cEcsgftwTVnDqiTnuRm1CbNxgi7BCK%2FZ3YqL6B6jJNWYdQ720XGSS6d%2FMLnfajyyv6A2SqQBQO6V6ZtlgmjILDFy5aZaoof%2BlYBMPn4%2BscGOqUBnKC9wnKsL0xPusAaedGYezVvgBK%2B3K40MSkdQ%2BceZQHELQm5vZgU8HbkfjSZ2yBObUaZ%2BjrzjClxrSg%2BxY8x%2FSGxyPoq9F%2BWaNybv45ItcLS%2FqTPdr2edFibo%2BWx19sgFJh9zIXtlRPg6DdGH0QoHIUMLSEOKhJOUIGXHMqKb3ykuxjiIAo%2Fhl4qkmW9a57KPZqyqUpFmB7DV46KnDrwnfNZ69gr&X-Amz-Signature=bcf930ea1588a95381226918c09e30d2a9697485c7c370a271360fd5759fbcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPAJFI3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuDzAhICm0dE0E9YY3RADozwy5CfXDK4GbtyJDVPNQbQIgBDNNxcLnuHA2YqHtlaWJVjt2feNk6zwt3%2FzRxqYXwoAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCicJLQGLlBmpDmB6ircA3hjNjYjyZFf9j6b%2BidOwlSj4sG0IfPaQFemURg5Wenju1fWv05PATpyuLa8g%2FY%2BxoMQn4wcG5zsAaAIjoc02MRzemFOQ3lt5%2B99hbE9hC%2FzAX3z9AWXFUIZHY2shvmzbKr3YMkIcJUlsjK%2FHfPo0v1Abi%2BlFXMbh6aSoE0J6KTMrLJt2sMT5WjuO8ztD8wmXvwl1tACiRvLl%2BccyQ%2FZYPl%2BhI6pC15I2oIkVm0N%2BuP0uxCBBe0V6FBXK%2FVDsTdf7SLaNZD8cpbjKBAqejmW%2FVv6r5M0MsYpT3MplFhx0nFoWVwq5R%2FBJQpv2sMmiZLPbFcRECpPJgyKu4IGak1sUuIdSVA7Y7zrxkQGWsdZ%2F2Br%2BU%2BlDkIrL2ZBzMKpzHpVuAC1mij%2BVCho3diQvmV%2FzBmWuoczAwA77Bv%2FB3K%2BSPmkXHcZkAXLkSN%2F%2BFvrIfprkVJyxk70PavfS75aVV%2B8N6DzijRhvj%2F2DI284uGQU%2Bvj3c5xBA%2F8tGRoIycI8J4BrHhO8VwFQYpFWYZof84M%2BGNG1cEcsgftwTVnDqiTnuRm1CbNxgi7BCK%2FZ3YqL6B6jJNWYdQ720XGSS6d%2FMLnfajyyv6A2SqQBQO6V6ZtlgmjILDFy5aZaoof%2BlYBMPn4%2BscGOqUBnKC9wnKsL0xPusAaedGYezVvgBK%2B3K40MSkdQ%2BceZQHELQm5vZgU8HbkfjSZ2yBObUaZ%2BjrzjClxrSg%2BxY8x%2FSGxyPoq9F%2BWaNybv45ItcLS%2FqTPdr2edFibo%2BWx19sgFJh9zIXtlRPg6DdGH0QoHIUMLSEOKhJOUIGXHMqKb3ykuxjiIAo%2Fhl4qkmW9a57KPZqyqUpFmB7DV46KnDrwnfNZ69gr&X-Amz-Signature=5d1b9d960a669067db59e6627a4cae544d9499dbdd4e46c9ce81b16c831dd734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KPAJFI3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuDzAhICm0dE0E9YY3RADozwy5CfXDK4GbtyJDVPNQbQIgBDNNxcLnuHA2YqHtlaWJVjt2feNk6zwt3%2FzRxqYXwoAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCicJLQGLlBmpDmB6ircA3hjNjYjyZFf9j6b%2BidOwlSj4sG0IfPaQFemURg5Wenju1fWv05PATpyuLa8g%2FY%2BxoMQn4wcG5zsAaAIjoc02MRzemFOQ3lt5%2B99hbE9hC%2FzAX3z9AWXFUIZHY2shvmzbKr3YMkIcJUlsjK%2FHfPo0v1Abi%2BlFXMbh6aSoE0J6KTMrLJt2sMT5WjuO8ztD8wmXvwl1tACiRvLl%2BccyQ%2FZYPl%2BhI6pC15I2oIkVm0N%2BuP0uxCBBe0V6FBXK%2FVDsTdf7SLaNZD8cpbjKBAqejmW%2FVv6r5M0MsYpT3MplFhx0nFoWVwq5R%2FBJQpv2sMmiZLPbFcRECpPJgyKu4IGak1sUuIdSVA7Y7zrxkQGWsdZ%2F2Br%2BU%2BlDkIrL2ZBzMKpzHpVuAC1mij%2BVCho3diQvmV%2FzBmWuoczAwA77Bv%2FB3K%2BSPmkXHcZkAXLkSN%2F%2BFvrIfprkVJyxk70PavfS75aVV%2B8N6DzijRhvj%2F2DI284uGQU%2Bvj3c5xBA%2F8tGRoIycI8J4BrHhO8VwFQYpFWYZof84M%2BGNG1cEcsgftwTVnDqiTnuRm1CbNxgi7BCK%2FZ3YqL6B6jJNWYdQ720XGSS6d%2FMLnfajyyv6A2SqQBQO6V6ZtlgmjILDFy5aZaoof%2BlYBMPn4%2BscGOqUBnKC9wnKsL0xPusAaedGYezVvgBK%2B3K40MSkdQ%2BceZQHELQm5vZgU8HbkfjSZ2yBObUaZ%2BjrzjClxrSg%2BxY8x%2FSGxyPoq9F%2BWaNybv45ItcLS%2FqTPdr2edFibo%2BWx19sgFJh9zIXtlRPg6DdGH0QoHIUMLSEOKhJOUIGXHMqKb3ykuxjiIAo%2Fhl4qkmW9a57KPZqyqUpFmB7DV46KnDrwnfNZ69gr&X-Amz-Signature=cd47f6efac724386401d0f2e644a417441b608934a0e9b20968b26d5bd60fc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUBW3RQ%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T010556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfaOCUBAwj5KyVJ9SUOyMlceWRXyJGzkONqkLxJxBcdgIhAPnpJZLjnTxiV6N9aF10zA6YHtX7gnc8xEBb4Fx5lLrkKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhNuaaOLI9s8jBH4kq3APwYdsc8WrViGBmSV5fdjq5kea%2FGjzHfRN4FFhpDxobOjAO02ial10dXKh7FNb9d%2FqBAhq8WA%2BMgenZrrM9FrROm%2F8yi6pQ2yQkNPROmf6i23XsLXu%2FID%2Bmg952xktgLwIeC6DWvo3Ry%2FbIGVM7sJYUnC3hR6RTJwJtDnGLZ7%2BM15FIR8olfT0JixCx5p3G05dA4KeM1JvHAV2BkQDqDfLJXR%2Fa7KXBEsdfLR2iz9HMHNv3i48dYGs%2FBTDhoATPaqNo3JJo0iBRtC%2FsUa%2FAR5Yy47tfGlsACodMpIHj3tm62J%2BhSYpQrF%2BbIt8dpj8AroWJ0aVu9hyd%2FJMSv5G%2B5AubtsUIj42M9cpWKJ43aYdTmvWcZ5MmSM4dCBqYioislx%2F63IXi9S0Xgx%2BPKpG2F4QoTKQhW9%2FJH6LxOAGXf7lJgbVh7d3ki2u6OY20ExUCYYCHNYELbpgNCxzAEx5sPKC2eHFAd3aL1O6nN9NNZeLzHa1flgryhgwEDwdXHWgJBeU9hGgMgy2%2F0PwAXVGdYhgwVM%2Bz6B4xfUS%2B1C5sjRyWl5Qr4Cej71D%2BP1AwMMehdvmD41rwm%2Bk9NqWV%2FujuHv97G0mfRPCZg0D19dTBeh%2BCY%2BFzGAcApEbC9PZmyjDd%2BPrHBjqkARRdYqaee9jueMEk0%2BUpIBf%2FTCcNbQdS%2FRLa6gpZhoGEBNh1P0KaDycly67v5qinI%2FHTw%2FpwAQgt61EFr%2BoCArXkzO7jC30OZA6WoACq2C2Mel4QlGSVcmcsBAXXNY9B63gsF8G7EOsBlED8bk9V78BgWGB7mUZJfkGkfK%2FbhAeISQrnynVE4fzDKjf9Z6DOEEcpIye7FGwbhRl%2FHeB2eWoaTss2&X-Amz-Signature=9492d1b8300e027afe58a8f325c90a506afc87463dd784ecdd37a81c62de6a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

