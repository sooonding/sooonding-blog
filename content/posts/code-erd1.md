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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWHFTHZ%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T011517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBi9pz7aWsMHljT%2Fj1EAasfoaEfaXpLA1juK%2FGRCTAF%2BAiAxm9nvqIgL0Tyw0UeG4JotIHcz%2Fgnc1xS4%2B7HIH6pU5Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMDPADlFnZPlnnrTg8KtwDUrE38e99%2BTUG4osCuTh2V1Y8vhgUcpx%2BZxMlEqONPD%2BOdAPZ7KJZBl5E8gxV4ENJhedgfAlBwlh4OJl0cLXHc5wA%2BLwc%2FKZjTBjUJKLNE%2B%2Fchp8mRqs%2FzXWUO3ODBFOggWtMtbajaPvoPDhodVaJbN1xiT3OwDjW1pInbYqa4rSVcIj0%2F%2F1BVrn1HWGcXKap%2FBITYWKARgMz9S02EGtzocV2izTAgB2ru164ZwZ6zjW8F8WMmCocaOqBJ8Yu3jXvH2DSuWPD5fQPfjEmkbKrdfuETq3cVyZBVcr9qZG95MMRxlc2MeXwdtqL7eL3YBFrvhfmOhhUdE3tpuYM7ye8TtMD5QSHoYzIEOsEaWRZNvm6MdvtoS%2Bq0mJjuG2lY%2B2DhVUGJJc3M0F2MjTboSkt43LdkpigY43%2B0mV1dWutfKaNhbft8RecbQDJRJBMAc076NWdO8v%2BhRPMwJaGPovnWM3pSRvp2i%2FgVXSWW3g6kH95H4A%2FKkMZafmW%2F67JNWrfZ1%2BSlkglEhR8s8eYOqfmU%2F6rgH2Q55QAingyH0J3Rrol8yGVU5Iwl%2BgmrhhSNiI9kw%2Bjghg6EFpXC1bzlf%2FENkfnJjUpbCpz8PZiYuALWcuwdI695L7qPO6Y9rYwxozmygY6pgGVLuISBfN%2FOu19I91zPJ9wWYA8jOwyZNXSOGzJxKNqhZxivdMeGOc57SbH%2FvnAoTrspnm8DcsSOxEeVrgZh8EEuQPrUYQOlbDBkX3D9ZAhub8l9Dt3hLcPFeA6xi7M4mS%2BvKPuJKauzZ1IcJC7rYy24zSgMr1kg6%2BgdxnSty9qBLkkNe0LR%2F8uF5i8Gg4hxrtCx8pmR1xRMM3twZXcyZjj2jFGiueX&X-Amz-Signature=bf362b05bd9a75dcd5bf84b88cb4b9ff1480cf0240c0aae017f1b8036d1e38a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXQAQD6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T011517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDOlvoPoo25Ve8fOnnmdEDyjiwdQv7euReeR8JP6RuX6wIhANp5Uwnjn8GvuqHGTsKwWqV2yw27yLTdqQBYABGEKyJfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxbL82aKjjUp7DTIK0q3AP7Yrycl949eTwjryAzhM1QTqNwPB%2Bos9Tobfmrm3OTCe6q35Y8ijlf41X4EDsLY7DAVC1sG9wZmjSCSLkdGvAyM2GU%2BIbKFDi4rtDR70FwHt%2Bv5%2Bn2BQbMyM6cXvV3plp8xbI%2BPmz8ZNkbWMLpLznjk9XrQhldKTAI0VLdAoHQOtDQ1a66eIizAH4LL6SfBy9%2B8vdjMv9ucoGzpy4XGPTQW8OZdicAdcD2jMcOCXqwYwDNbNbJu3bPdSj8lUVdeqcwKXlYV58apqgn%2FdZwYtJEPJgjQIPdNjtlkIZfPii7jPQnSd68NXq1W%2F2MKT2CVDJ%2FvEyNSFOtERL6vUhEIur%2FBfIOHKGfWsN%2BCIDgcEgymyssWaBLMJNZdpnOE3%2F506%2Fam0%2BUXMjpKtadaS06BCHl%2F4THW%2B%2FCQIq6l%2Bg44dvxZh3LB5C3odMEFnvEoPzX2kXuoi8YaoLYULovMdXiIoGV8%2BVLRRVcFx%2FePbxjsK5I0qm9jYdLl3cGr5Z4dYapaWPGL9B24M4D%2FmLtPO7XG2cjYDh07%2B8rlbUy%2Fpfni2fqdKPyQu1SDX5frSAvEjjfzgFbbgbFajyzUOPkCs9GdGsGisPNTLQeJq0Sd4ee1mi1E%2FhEW4DDb7PmSbTzDTCMlObKBjqkAVWRYC4L9IzVsrsgTd5Smm7Q1RNF6t02Bnu%2FEf%2FXABCDtBpXMBImTZ0MG6TWLEUMfckxyePp%2FZe0AaOg4NNUNIN5tlXGOR3WbEqyejkBZML%2Fca0i%2FjpvXf%2BUeVZJwOz%2BQAraPVgft7ZxALamzBgQ5yLTFhajgQuxNKkehC6K6CrsNF%2Bno%2BJrr9v%2BTTfCxi1P5By2vDfD7BObr1s52hbC4wVJVbJl&X-Amz-Signature=be5d8d14799e3a5110e857c6a4301fe5984727a61158b7a04429caa45825b0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXQAQD6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T011517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDOlvoPoo25Ve8fOnnmdEDyjiwdQv7euReeR8JP6RuX6wIhANp5Uwnjn8GvuqHGTsKwWqV2yw27yLTdqQBYABGEKyJfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxbL82aKjjUp7DTIK0q3AP7Yrycl949eTwjryAzhM1QTqNwPB%2Bos9Tobfmrm3OTCe6q35Y8ijlf41X4EDsLY7DAVC1sG9wZmjSCSLkdGvAyM2GU%2BIbKFDi4rtDR70FwHt%2Bv5%2Bn2BQbMyM6cXvV3plp8xbI%2BPmz8ZNkbWMLpLznjk9XrQhldKTAI0VLdAoHQOtDQ1a66eIizAH4LL6SfBy9%2B8vdjMv9ucoGzpy4XGPTQW8OZdicAdcD2jMcOCXqwYwDNbNbJu3bPdSj8lUVdeqcwKXlYV58apqgn%2FdZwYtJEPJgjQIPdNjtlkIZfPii7jPQnSd68NXq1W%2F2MKT2CVDJ%2FvEyNSFOtERL6vUhEIur%2FBfIOHKGfWsN%2BCIDgcEgymyssWaBLMJNZdpnOE3%2F506%2Fam0%2BUXMjpKtadaS06BCHl%2F4THW%2B%2FCQIq6l%2Bg44dvxZh3LB5C3odMEFnvEoPzX2kXuoi8YaoLYULovMdXiIoGV8%2BVLRRVcFx%2FePbxjsK5I0qm9jYdLl3cGr5Z4dYapaWPGL9B24M4D%2FmLtPO7XG2cjYDh07%2B8rlbUy%2Fpfni2fqdKPyQu1SDX5frSAvEjjfzgFbbgbFajyzUOPkCs9GdGsGisPNTLQeJq0Sd4ee1mi1E%2FhEW4DDb7PmSbTzDTCMlObKBjqkAVWRYC4L9IzVsrsgTd5Smm7Q1RNF6t02Bnu%2FEf%2FXABCDtBpXMBImTZ0MG6TWLEUMfckxyePp%2FZe0AaOg4NNUNIN5tlXGOR3WbEqyejkBZML%2Fca0i%2FjpvXf%2BUeVZJwOz%2BQAraPVgft7ZxALamzBgQ5yLTFhajgQuxNKkehC6K6CrsNF%2Bno%2BJrr9v%2BTTfCxi1P5By2vDfD7BObr1s52hbC4wVJVbJl&X-Amz-Signature=4e83ad318fa7d20a4b7cb59fe0a9aaad37d9246e95679c7435fa4afcf73113e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXQAQD6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T011517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDOlvoPoo25Ve8fOnnmdEDyjiwdQv7euReeR8JP6RuX6wIhANp5Uwnjn8GvuqHGTsKwWqV2yw27yLTdqQBYABGEKyJfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxbL82aKjjUp7DTIK0q3AP7Yrycl949eTwjryAzhM1QTqNwPB%2Bos9Tobfmrm3OTCe6q35Y8ijlf41X4EDsLY7DAVC1sG9wZmjSCSLkdGvAyM2GU%2BIbKFDi4rtDR70FwHt%2Bv5%2Bn2BQbMyM6cXvV3plp8xbI%2BPmz8ZNkbWMLpLznjk9XrQhldKTAI0VLdAoHQOtDQ1a66eIizAH4LL6SfBy9%2B8vdjMv9ucoGzpy4XGPTQW8OZdicAdcD2jMcOCXqwYwDNbNbJu3bPdSj8lUVdeqcwKXlYV58apqgn%2FdZwYtJEPJgjQIPdNjtlkIZfPii7jPQnSd68NXq1W%2F2MKT2CVDJ%2FvEyNSFOtERL6vUhEIur%2FBfIOHKGfWsN%2BCIDgcEgymyssWaBLMJNZdpnOE3%2F506%2Fam0%2BUXMjpKtadaS06BCHl%2F4THW%2B%2FCQIq6l%2Bg44dvxZh3LB5C3odMEFnvEoPzX2kXuoi8YaoLYULovMdXiIoGV8%2BVLRRVcFx%2FePbxjsK5I0qm9jYdLl3cGr5Z4dYapaWPGL9B24M4D%2FmLtPO7XG2cjYDh07%2B8rlbUy%2Fpfni2fqdKPyQu1SDX5frSAvEjjfzgFbbgbFajyzUOPkCs9GdGsGisPNTLQeJq0Sd4ee1mi1E%2FhEW4DDb7PmSbTzDTCMlObKBjqkAVWRYC4L9IzVsrsgTd5Smm7Q1RNF6t02Bnu%2FEf%2FXABCDtBpXMBImTZ0MG6TWLEUMfckxyePp%2FZe0AaOg4NNUNIN5tlXGOR3WbEqyejkBZML%2Fca0i%2FjpvXf%2BUeVZJwOz%2BQAraPVgft7ZxALamzBgQ5yLTFhajgQuxNKkehC6K6CrsNF%2Bno%2BJrr9v%2BTTfCxi1P5By2vDfD7BObr1s52hbC4wVJVbJl&X-Amz-Signature=afefe40b7db1702c29193833c44f5923fd8cc49c5ae24c942188b0f3903f813b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXQAQD6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T011517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDOlvoPoo25Ve8fOnnmdEDyjiwdQv7euReeR8JP6RuX6wIhANp5Uwnjn8GvuqHGTsKwWqV2yw27yLTdqQBYABGEKyJfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxbL82aKjjUp7DTIK0q3AP7Yrycl949eTwjryAzhM1QTqNwPB%2Bos9Tobfmrm3OTCe6q35Y8ijlf41X4EDsLY7DAVC1sG9wZmjSCSLkdGvAyM2GU%2BIbKFDi4rtDR70FwHt%2Bv5%2Bn2BQbMyM6cXvV3plp8xbI%2BPmz8ZNkbWMLpLznjk9XrQhldKTAI0VLdAoHQOtDQ1a66eIizAH4LL6SfBy9%2B8vdjMv9ucoGzpy4XGPTQW8OZdicAdcD2jMcOCXqwYwDNbNbJu3bPdSj8lUVdeqcwKXlYV58apqgn%2FdZwYtJEPJgjQIPdNjtlkIZfPii7jPQnSd68NXq1W%2F2MKT2CVDJ%2FvEyNSFOtERL6vUhEIur%2FBfIOHKGfWsN%2BCIDgcEgymyssWaBLMJNZdpnOE3%2F506%2Fam0%2BUXMjpKtadaS06BCHl%2F4THW%2B%2FCQIq6l%2Bg44dvxZh3LB5C3odMEFnvEoPzX2kXuoi8YaoLYULovMdXiIoGV8%2BVLRRVcFx%2FePbxjsK5I0qm9jYdLl3cGr5Z4dYapaWPGL9B24M4D%2FmLtPO7XG2cjYDh07%2B8rlbUy%2Fpfni2fqdKPyQu1SDX5frSAvEjjfzgFbbgbFajyzUOPkCs9GdGsGisPNTLQeJq0Sd4ee1mi1E%2FhEW4DDb7PmSbTzDTCMlObKBjqkAVWRYC4L9IzVsrsgTd5Smm7Q1RNF6t02Bnu%2FEf%2FXABCDtBpXMBImTZ0MG6TWLEUMfckxyePp%2FZe0AaOg4NNUNIN5tlXGOR3WbEqyejkBZML%2Fca0i%2FjpvXf%2BUeVZJwOz%2BQAraPVgft7ZxALamzBgQ5yLTFhajgQuxNKkehC6K6CrsNF%2Bno%2BJrr9v%2BTTfCxi1P5By2vDfD7BObr1s52hbC4wVJVbJl&X-Amz-Signature=3b1d51cd8e34959b1702a3bd71d5fcb259aaef5d25f78a222ca45c202b0f50cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXQAQD6%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T011517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDOlvoPoo25Ve8fOnnmdEDyjiwdQv7euReeR8JP6RuX6wIhANp5Uwnjn8GvuqHGTsKwWqV2yw27yLTdqQBYABGEKyJfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxbL82aKjjUp7DTIK0q3AP7Yrycl949eTwjryAzhM1QTqNwPB%2Bos9Tobfmrm3OTCe6q35Y8ijlf41X4EDsLY7DAVC1sG9wZmjSCSLkdGvAyM2GU%2BIbKFDi4rtDR70FwHt%2Bv5%2Bn2BQbMyM6cXvV3plp8xbI%2BPmz8ZNkbWMLpLznjk9XrQhldKTAI0VLdAoHQOtDQ1a66eIizAH4LL6SfBy9%2B8vdjMv9ucoGzpy4XGPTQW8OZdicAdcD2jMcOCXqwYwDNbNbJu3bPdSj8lUVdeqcwKXlYV58apqgn%2FdZwYtJEPJgjQIPdNjtlkIZfPii7jPQnSd68NXq1W%2F2MKT2CVDJ%2FvEyNSFOtERL6vUhEIur%2FBfIOHKGfWsN%2BCIDgcEgymyssWaBLMJNZdpnOE3%2F506%2Fam0%2BUXMjpKtadaS06BCHl%2F4THW%2B%2FCQIq6l%2Bg44dvxZh3LB5C3odMEFnvEoPzX2kXuoi8YaoLYULovMdXiIoGV8%2BVLRRVcFx%2FePbxjsK5I0qm9jYdLl3cGr5Z4dYapaWPGL9B24M4D%2FmLtPO7XG2cjYDh07%2B8rlbUy%2Fpfni2fqdKPyQu1SDX5frSAvEjjfzgFbbgbFajyzUOPkCs9GdGsGisPNTLQeJq0Sd4ee1mi1E%2FhEW4DDb7PmSbTzDTCMlObKBjqkAVWRYC4L9IzVsrsgTd5Smm7Q1RNF6t02Bnu%2FEf%2FXABCDtBpXMBImTZ0MG6TWLEUMfckxyePp%2FZe0AaOg4NNUNIN5tlXGOR3WbEqyejkBZML%2Fca0i%2FjpvXf%2BUeVZJwOz%2BQAraPVgft7ZxALamzBgQ5yLTFhajgQuxNKkehC6K6CrsNF%2Bno%2BJrr9v%2BTTfCxi1P5By2vDfD7BObr1s52hbC4wVJVbJl&X-Amz-Signature=500816a37c381a82f19b9559c4194e361b95f6e6864597936af35900d6ba6fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWHFTHZ%2F20260104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260104T011517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBi9pz7aWsMHljT%2Fj1EAasfoaEfaXpLA1juK%2FGRCTAF%2BAiAxm9nvqIgL0Tyw0UeG4JotIHcz%2Fgnc1xS4%2B7HIH6pU5Cr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMDPADlFnZPlnnrTg8KtwDUrE38e99%2BTUG4osCuTh2V1Y8vhgUcpx%2BZxMlEqONPD%2BOdAPZ7KJZBl5E8gxV4ENJhedgfAlBwlh4OJl0cLXHc5wA%2BLwc%2FKZjTBjUJKLNE%2B%2Fchp8mRqs%2FzXWUO3ODBFOggWtMtbajaPvoPDhodVaJbN1xiT3OwDjW1pInbYqa4rSVcIj0%2F%2F1BVrn1HWGcXKap%2FBITYWKARgMz9S02EGtzocV2izTAgB2ru164ZwZ6zjW8F8WMmCocaOqBJ8Yu3jXvH2DSuWPD5fQPfjEmkbKrdfuETq3cVyZBVcr9qZG95MMRxlc2MeXwdtqL7eL3YBFrvhfmOhhUdE3tpuYM7ye8TtMD5QSHoYzIEOsEaWRZNvm6MdvtoS%2Bq0mJjuG2lY%2B2DhVUGJJc3M0F2MjTboSkt43LdkpigY43%2B0mV1dWutfKaNhbft8RecbQDJRJBMAc076NWdO8v%2BhRPMwJaGPovnWM3pSRvp2i%2FgVXSWW3g6kH95H4A%2FKkMZafmW%2F67JNWrfZ1%2BSlkglEhR8s8eYOqfmU%2F6rgH2Q55QAingyH0J3Rrol8yGVU5Iwl%2BgmrhhSNiI9kw%2Bjghg6EFpXC1bzlf%2FENkfnJjUpbCpz8PZiYuALWcuwdI695L7qPO6Y9rYwxozmygY6pgGVLuISBfN%2FOu19I91zPJ9wWYA8jOwyZNXSOGzJxKNqhZxivdMeGOc57SbH%2FvnAoTrspnm8DcsSOxEeVrgZh8EEuQPrUYQOlbDBkX3D9ZAhub8l9Dt3hLcPFeA6xi7M4mS%2BvKPuJKauzZ1IcJC7rYy24zSgMr1kg6%2BgdxnSty9qBLkkNe0LR%2F8uF5i8Gg4hxrtCx8pmR1xRMM3twZXcyZjj2jFGiueX&X-Amz-Signature=1024cc2d808a9f7df55c4842bd5b2d2534ca028dcdb0954542cb7877e0a67d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

