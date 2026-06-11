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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEW5RKU%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCBfjIFhUv0EhS2aLpGEBEcVXsy%2F3vVVWwTxBHYpRBw3gIhAJoaWbdfixdoCqEG7JBwqO9UafRTRdSSloURUW6lQTXCKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPnBdKe4bzkeOT3a4q3AOTZ4VBajXNrureaH1kGFs0I7dEM3D%2BgmhU7aZzO6OGk92fWfeIyvo5LEYD2UQNz9Vqa1Sc3BcShaA7W4%2BZoiMs1Gya7%2BoONLGfXKmOvLUlW46JCFDcDwuPwT5Tn0NUWwH6zAroeSKQVezC48JzyppAleUGLvLbApLDDWxva1U9I2J9cmCJQ9PPtOqN3KetvxqK2Ss05QUGYJo%2B3TGgRRMTY1CRsDTWpw90XIP5T1lGbFqzrDmMIdTIDieblblLTEIf2SMxq3IGp8zBdgy9wCMw%2F7mT4kTlM7WGwnsDE7coNw2MDWcVmpBR7CjkgP7Wvoi1mLnoX%2B5Gqx8PaY6ZAdvZr2wmXmeF%2BSP5rZQaZxjOZq93IP9Dp9%2FjaQ6PwpHpmIkyxOKJyz7aTmFwDfoCICGyIZ2CJJ5oOopN%2B1OQd%2F8r0StHKQxEl5n8zJcRy%2BTL49Qdg5KPK%2Fhx1LN1gyBYK2TRwt1gYlCjvrgo2thu%2Baps8ROT6ylnlPogUIcFZjcufPtmB755XcGTC3B0l%2FWhkNtwRvCxrothrdyTZMzwGQC4HQ1UEeXLJW4BHexT4p6K%2BxOpI2rZmzoKAmbb0zE4qIDohuuTmMlrorfzqy5y8IZKSROUNzqaZmSRe8TSCDCqw6jRBjqkAbnvMXBWAgFRtQxVnf9rysNw3GjR1XjO0eBKm52twnsA1ulI%2FN6GnZjir%2BXcElJOKYfB0Mucq6v9EV8bYdeMSpyHenh5PqGegGyRb3%2Ft5OJXZhhvHdsezHori7ffW1ccQLRm1lBmaKs0gLicif7jOZGBS%2BBVGQ%2FarHUZ3ff13j3WlhDZS6boZHp93U3D%2BDRTgqnV0r0f3HtvRtx4wmXitM9GCpm8&X-Amz-Signature=5618bcbbc8248c7094fb9ff9e93b5b4f7387f8eb1c63a0c147720195b86adf9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGOWUYW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvHNztC7%2Fn5maPH6SXJ0Oh0gBryAspR0KdsQvNlW1eFAIgLHmxao3Szm20p38s1bVwao%2BQmS%2BXsDTahRsFKgSww0wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPjc6hKKfx2IU7qGSrcAzWSc4xwixoxAb5WxcIYPCVXV4YPLBvINg%2BKRBKyYrOfoogvpzpXhHamd6un0eJ7zNPX0AQVRx7Dkyy2WfmfwVJDgyi0GEq9MDzkaPJcfqKh2vm%2FLTUxUDxN9l98mc5io4in%2F9syUFDnHSKarqodP01l2XeR5VOIPufF%2BllGWTwKNRFJEcN%2BTKOlt1WBH5Bp1tnM68vZO%2FyRKSyR9zCL3dK2UpwfJQg1xungZqPnJaR%2Bvb%2F3Nc2RMBel%2Ff2SnzcmiBppbmV2bLiRaxzyENtTu3N1KGCTGvhUdGfWLofuN7BEqScUGreFavL5jEysu1rYuB4IphONCwtBgBzBof1pU4m9llcZWapKQXMoU4TETWmjZbcTjBWADtKmaEJKf3%2B64iN8dhIvQjzeNgsy4ff2qbRI%2B%2BztCE2AZ%2Bm7gQGdwxSA1IgDUv9Jrs79xX8yOevB3Fl%2BZO3ymLyEQ64M748IOCHWlv15h9%2FmGuf7R5d%2F4vOojKOA17i89ygAhB1Hwa%2BmX6%2BTQj7PXrY3b0d20pU6%2BBnhLk9UVOpuibOjZWppj5kysyvjf5UhnFR5dNfBtbY%2FbuPxi5uI61qIueZi%2Fhy7USTWoeY%2BbUP8dcufvf4v31gl2VZyNrliOYVRMgKZMNPDqNEGOqUBxRyik4i%2BU05AP62izYJfCnNWGYbj28GdoUhALvTOTM7LFXpVqx9PQsKZIvr5YYIP6uvMfTGCNrFWni2cQK%2FFps0x%2F5wu2WXiQr8NXdIpu%2FDHvBz2rfzfti6rStZNAWw6ttNfN%2BFAdQNQmGKpQHaZlF%2BmsZYCbtSe8r3%2FdVdqhWyvv9%2Fll9Lz%2FEgfQUqzHQL2ABy71Z1i9vZtDPOM%2F6tJjmlSBdUt&X-Amz-Signature=7d13fc46fb0b6a2439c9736cb4305a7820b5647faedf86b75577907b2d2d4c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGOWUYW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvHNztC7%2Fn5maPH6SXJ0Oh0gBryAspR0KdsQvNlW1eFAIgLHmxao3Szm20p38s1bVwao%2BQmS%2BXsDTahRsFKgSww0wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPjc6hKKfx2IU7qGSrcAzWSc4xwixoxAb5WxcIYPCVXV4YPLBvINg%2BKRBKyYrOfoogvpzpXhHamd6un0eJ7zNPX0AQVRx7Dkyy2WfmfwVJDgyi0GEq9MDzkaPJcfqKh2vm%2FLTUxUDxN9l98mc5io4in%2F9syUFDnHSKarqodP01l2XeR5VOIPufF%2BllGWTwKNRFJEcN%2BTKOlt1WBH5Bp1tnM68vZO%2FyRKSyR9zCL3dK2UpwfJQg1xungZqPnJaR%2Bvb%2F3Nc2RMBel%2Ff2SnzcmiBppbmV2bLiRaxzyENtTu3N1KGCTGvhUdGfWLofuN7BEqScUGreFavL5jEysu1rYuB4IphONCwtBgBzBof1pU4m9llcZWapKQXMoU4TETWmjZbcTjBWADtKmaEJKf3%2B64iN8dhIvQjzeNgsy4ff2qbRI%2B%2BztCE2AZ%2Bm7gQGdwxSA1IgDUv9Jrs79xX8yOevB3Fl%2BZO3ymLyEQ64M748IOCHWlv15h9%2FmGuf7R5d%2F4vOojKOA17i89ygAhB1Hwa%2BmX6%2BTQj7PXrY3b0d20pU6%2BBnhLk9UVOpuibOjZWppj5kysyvjf5UhnFR5dNfBtbY%2FbuPxi5uI61qIueZi%2Fhy7USTWoeY%2BbUP8dcufvf4v31gl2VZyNrliOYVRMgKZMNPDqNEGOqUBxRyik4i%2BU05AP62izYJfCnNWGYbj28GdoUhALvTOTM7LFXpVqx9PQsKZIvr5YYIP6uvMfTGCNrFWni2cQK%2FFps0x%2F5wu2WXiQr8NXdIpu%2FDHvBz2rfzfti6rStZNAWw6ttNfN%2BFAdQNQmGKpQHaZlF%2BmsZYCbtSe8r3%2FdVdqhWyvv9%2Fll9Lz%2FEgfQUqzHQL2ABy71Z1i9vZtDPOM%2F6tJjmlSBdUt&X-Amz-Signature=af5c5dc8ca3848473e0eb8249c94feb1b6842e0ed448f73194a0ffd56aaeb169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGOWUYW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvHNztC7%2Fn5maPH6SXJ0Oh0gBryAspR0KdsQvNlW1eFAIgLHmxao3Szm20p38s1bVwao%2BQmS%2BXsDTahRsFKgSww0wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPjc6hKKfx2IU7qGSrcAzWSc4xwixoxAb5WxcIYPCVXV4YPLBvINg%2BKRBKyYrOfoogvpzpXhHamd6un0eJ7zNPX0AQVRx7Dkyy2WfmfwVJDgyi0GEq9MDzkaPJcfqKh2vm%2FLTUxUDxN9l98mc5io4in%2F9syUFDnHSKarqodP01l2XeR5VOIPufF%2BllGWTwKNRFJEcN%2BTKOlt1WBH5Bp1tnM68vZO%2FyRKSyR9zCL3dK2UpwfJQg1xungZqPnJaR%2Bvb%2F3Nc2RMBel%2Ff2SnzcmiBppbmV2bLiRaxzyENtTu3N1KGCTGvhUdGfWLofuN7BEqScUGreFavL5jEysu1rYuB4IphONCwtBgBzBof1pU4m9llcZWapKQXMoU4TETWmjZbcTjBWADtKmaEJKf3%2B64iN8dhIvQjzeNgsy4ff2qbRI%2B%2BztCE2AZ%2Bm7gQGdwxSA1IgDUv9Jrs79xX8yOevB3Fl%2BZO3ymLyEQ64M748IOCHWlv15h9%2FmGuf7R5d%2F4vOojKOA17i89ygAhB1Hwa%2BmX6%2BTQj7PXrY3b0d20pU6%2BBnhLk9UVOpuibOjZWppj5kysyvjf5UhnFR5dNfBtbY%2FbuPxi5uI61qIueZi%2Fhy7USTWoeY%2BbUP8dcufvf4v31gl2VZyNrliOYVRMgKZMNPDqNEGOqUBxRyik4i%2BU05AP62izYJfCnNWGYbj28GdoUhALvTOTM7LFXpVqx9PQsKZIvr5YYIP6uvMfTGCNrFWni2cQK%2FFps0x%2F5wu2WXiQr8NXdIpu%2FDHvBz2rfzfti6rStZNAWw6ttNfN%2BFAdQNQmGKpQHaZlF%2BmsZYCbtSe8r3%2FdVdqhWyvv9%2Fll9Lz%2FEgfQUqzHQL2ABy71Z1i9vZtDPOM%2F6tJjmlSBdUt&X-Amz-Signature=74fb017484e897a112b1997649efde9974a37803d7d6c80a7d5a0fd5fc518d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGOWUYW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvHNztC7%2Fn5maPH6SXJ0Oh0gBryAspR0KdsQvNlW1eFAIgLHmxao3Szm20p38s1bVwao%2BQmS%2BXsDTahRsFKgSww0wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPjc6hKKfx2IU7qGSrcAzWSc4xwixoxAb5WxcIYPCVXV4YPLBvINg%2BKRBKyYrOfoogvpzpXhHamd6un0eJ7zNPX0AQVRx7Dkyy2WfmfwVJDgyi0GEq9MDzkaPJcfqKh2vm%2FLTUxUDxN9l98mc5io4in%2F9syUFDnHSKarqodP01l2XeR5VOIPufF%2BllGWTwKNRFJEcN%2BTKOlt1WBH5Bp1tnM68vZO%2FyRKSyR9zCL3dK2UpwfJQg1xungZqPnJaR%2Bvb%2F3Nc2RMBel%2Ff2SnzcmiBppbmV2bLiRaxzyENtTu3N1KGCTGvhUdGfWLofuN7BEqScUGreFavL5jEysu1rYuB4IphONCwtBgBzBof1pU4m9llcZWapKQXMoU4TETWmjZbcTjBWADtKmaEJKf3%2B64iN8dhIvQjzeNgsy4ff2qbRI%2B%2BztCE2AZ%2Bm7gQGdwxSA1IgDUv9Jrs79xX8yOevB3Fl%2BZO3ymLyEQ64M748IOCHWlv15h9%2FmGuf7R5d%2F4vOojKOA17i89ygAhB1Hwa%2BmX6%2BTQj7PXrY3b0d20pU6%2BBnhLk9UVOpuibOjZWppj5kysyvjf5UhnFR5dNfBtbY%2FbuPxi5uI61qIueZi%2Fhy7USTWoeY%2BbUP8dcufvf4v31gl2VZyNrliOYVRMgKZMNPDqNEGOqUBxRyik4i%2BU05AP62izYJfCnNWGYbj28GdoUhALvTOTM7LFXpVqx9PQsKZIvr5YYIP6uvMfTGCNrFWni2cQK%2FFps0x%2F5wu2WXiQr8NXdIpu%2FDHvBz2rfzfti6rStZNAWw6ttNfN%2BFAdQNQmGKpQHaZlF%2BmsZYCbtSe8r3%2FdVdqhWyvv9%2Fll9Lz%2FEgfQUqzHQL2ABy71Z1i9vZtDPOM%2F6tJjmlSBdUt&X-Amz-Signature=067738652abe2406a3b7ad8c861f94ade82a8d74c9927296af88eee8b2a82bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGOWUYW%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDvHNztC7%2Fn5maPH6SXJ0Oh0gBryAspR0KdsQvNlW1eFAIgLHmxao3Szm20p38s1bVwao%2BQmS%2BXsDTahRsFKgSww0wqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPjc6hKKfx2IU7qGSrcAzWSc4xwixoxAb5WxcIYPCVXV4YPLBvINg%2BKRBKyYrOfoogvpzpXhHamd6un0eJ7zNPX0AQVRx7Dkyy2WfmfwVJDgyi0GEq9MDzkaPJcfqKh2vm%2FLTUxUDxN9l98mc5io4in%2F9syUFDnHSKarqodP01l2XeR5VOIPufF%2BllGWTwKNRFJEcN%2BTKOlt1WBH5Bp1tnM68vZO%2FyRKSyR9zCL3dK2UpwfJQg1xungZqPnJaR%2Bvb%2F3Nc2RMBel%2Ff2SnzcmiBppbmV2bLiRaxzyENtTu3N1KGCTGvhUdGfWLofuN7BEqScUGreFavL5jEysu1rYuB4IphONCwtBgBzBof1pU4m9llcZWapKQXMoU4TETWmjZbcTjBWADtKmaEJKf3%2B64iN8dhIvQjzeNgsy4ff2qbRI%2B%2BztCE2AZ%2Bm7gQGdwxSA1IgDUv9Jrs79xX8yOevB3Fl%2BZO3ymLyEQ64M748IOCHWlv15h9%2FmGuf7R5d%2F4vOojKOA17i89ygAhB1Hwa%2BmX6%2BTQj7PXrY3b0d20pU6%2BBnhLk9UVOpuibOjZWppj5kysyvjf5UhnFR5dNfBtbY%2FbuPxi5uI61qIueZi%2Fhy7USTWoeY%2BbUP8dcufvf4v31gl2VZyNrliOYVRMgKZMNPDqNEGOqUBxRyik4i%2BU05AP62izYJfCnNWGYbj28GdoUhALvTOTM7LFXpVqx9PQsKZIvr5YYIP6uvMfTGCNrFWni2cQK%2FFps0x%2F5wu2WXiQr8NXdIpu%2FDHvBz2rfzfti6rStZNAWw6ttNfN%2BFAdQNQmGKpQHaZlF%2BmsZYCbtSe8r3%2FdVdqhWyvv9%2Fll9Lz%2FEgfQUqzHQL2ABy71Z1i9vZtDPOM%2F6tJjmlSBdUt&X-Amz-Signature=a0a4b6912c808c74517d70341e519a1a20513aed92db2123ef7a762d136cd562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEW5RKU%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCBfjIFhUv0EhS2aLpGEBEcVXsy%2F3vVVWwTxBHYpRBw3gIhAJoaWbdfixdoCqEG7JBwqO9UafRTRdSSloURUW6lQTXCKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPnBdKe4bzkeOT3a4q3AOTZ4VBajXNrureaH1kGFs0I7dEM3D%2BgmhU7aZzO6OGk92fWfeIyvo5LEYD2UQNz9Vqa1Sc3BcShaA7W4%2BZoiMs1Gya7%2BoONLGfXKmOvLUlW46JCFDcDwuPwT5Tn0NUWwH6zAroeSKQVezC48JzyppAleUGLvLbApLDDWxva1U9I2J9cmCJQ9PPtOqN3KetvxqK2Ss05QUGYJo%2B3TGgRRMTY1CRsDTWpw90XIP5T1lGbFqzrDmMIdTIDieblblLTEIf2SMxq3IGp8zBdgy9wCMw%2F7mT4kTlM7WGwnsDE7coNw2MDWcVmpBR7CjkgP7Wvoi1mLnoX%2B5Gqx8PaY6ZAdvZr2wmXmeF%2BSP5rZQaZxjOZq93IP9Dp9%2FjaQ6PwpHpmIkyxOKJyz7aTmFwDfoCICGyIZ2CJJ5oOopN%2B1OQd%2F8r0StHKQxEl5n8zJcRy%2BTL49Qdg5KPK%2Fhx1LN1gyBYK2TRwt1gYlCjvrgo2thu%2Baps8ROT6ylnlPogUIcFZjcufPtmB755XcGTC3B0l%2FWhkNtwRvCxrothrdyTZMzwGQC4HQ1UEeXLJW4BHexT4p6K%2BxOpI2rZmzoKAmbb0zE4qIDohuuTmMlrorfzqy5y8IZKSROUNzqaZmSRe8TSCDCqw6jRBjqkAbnvMXBWAgFRtQxVnf9rysNw3GjR1XjO0eBKm52twnsA1ulI%2FN6GnZjir%2BXcElJOKYfB0Mucq6v9EV8bYdeMSpyHenh5PqGegGyRb3%2Ft5OJXZhhvHdsezHori7ffW1ccQLRm1lBmaKs0gLicif7jOZGBS%2BBVGQ%2FarHUZ3ff13j3WlhDZS6boZHp93U3D%2BDRTgqnV0r0f3HtvRtx4wmXitM9GCpm8&X-Amz-Signature=7e616ed4d0b231b618a6b434bda185df2028590b8e7f606cad76809248f0df37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

