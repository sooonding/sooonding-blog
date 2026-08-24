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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDYU3JO%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGojKltTGY6XIzqIASAFa5oCZRDVVYviOWbDnPKMuTZiAiEArlzkUNg9MtuXSTRoEnka4P0kWxWL6aesUYgDxRXk1SMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcMRPM%2FT3B3F%2FpXHyrcA8UUczRk9I33dhGZGIDP4PMamQQn8K198iZxxMgWYhexnbUI8BIlPt4mFvrIwUovoOM8cXf678XRTTBsAZLz61aBReCvAaeHAJbKahz0ptR4HXR0qIsQmP2yhO1LsGb%2Bt0V6GHJIR6rTbqIfEzlK41J%2Bv%2BAa8G8t9DimQQ%2BNAgvN3bWIQWI43p%2B5Z%2F3i%2FWZPMubpNEuKNtvr7nnREcNiuXOlAh7BwgAIgW5w7283A%2BUen0Ku45IRNYk6ALyuv23v0FMeV8dUQqnZN4eVcfqTj7vvmaCslKXtsWEBWt%2Fj0Jb7SvmhBRC%2F8iqciC%2BbAtlT2OpiQ3WB7qn%2FudT%2BFF7IIjPNW2jzJ%2FJEZ%2Fu8ANKJ1wZk7clMYMOoJ0NOstpF2zziZNe8h3A%2FhlhzKtGo6E1euONkyyWmZCQq36NAygAiLRjY%2FXRj0RGlOJOEQ3ODKfHuL1Pa5M9PE6OEplli20MUrPLJD8FTPjN6ik9%2BmorA0X0xs9XEJBPYlr4qRl6tCLI%2BdmExg8yzqtN3pWG97sgDidAci6qilSi9IaUGUyFB4sbOdfqxQ9JynRSbSeTmL78zufNYl449J%2B5P64HiMDMAx1xIRt1EY3nSKqN0jnxl4Bq8CsvVJ6%2BW21vbc1vlMJeFrtQGOqUBEqRlVIlio6PP0a8yI3a%2FIHtYrI3mKvE0l0z04K%2BJjF17KW4h%2FwgNNiW3FcKez1iOmE7N9o1MQ50RNBDkENQkGSS7bgp3ueuD8xUCBPO9rNzRtbk%2FF%2F2ofS1E%2F4jDibb7ldUMBoJVx1i4iVbwDlCC9By6IxPY0100tEzCwmefYrlxXfmXoE0shRC3SZWUVfaf2mMtVgbHbHNZkTSrWlOCgzpgXRCf&X-Amz-Signature=9d6653c6157c49891d2a45637a7f48331b72f4412e0ef190411583b92d4feca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY6JGGVH%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDP5dyqOXu0pfo2IvUfpsJkS7wEy1ebHskKt%2FCLJdOr%2FAiEA%2BYr2bSt0T%2FNMR9FfvXISGLZYfg64BDGQlbHh3daTpn8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAbIhxmgGE9dfWLQSrcAw4Bak1%2BMSMR8fWhbFMt4EgdP4X%2Fjg3Tq2hGA12wLpDN5UMSiJyYe6Mc70NPs1Ql1TfA2s%2FCeG3sTcu4oXWIz6Y4mzjwUyF%2BizPBmaTudE553COJKFUfFkSyA6WvWneeDVV%2FZUfqpdHzhoboutPFsCzramJ9oUlciEwZGZQdyo%2FBErGmLQFi6DxsNgoYHy3ap8ZGJYxicLpXuk0usHTcnNtOWmWaRMJ4t3VT8cD24IdWrZjr%2BWv5Z7pI%2BDPBZ2FDVyuio8KuphZXKBl9luDiUhUbI%2B0g%2FhukARdjsEu%2B1jbyzlKfJ%2F9%2B5lfKAJv0xqCB0uda1H1GJ7PqNCWiy6LXgRkV%2Ft1vHE8XVRIqC5cpI92lsnn2EUy9umjs%2Bb2leT2XlkYm2qSu3%2FHtydHgq37MvJuxoTs0IjzZfRtWmsklvdAlobqlDEXOJ1X7MZgwVvxZgCX%2FSrrQQ6hvZ5OWDQ0rhGBvQ2EjxG9MwsI%2FE02IQRRMqVny3hZpnxWWroTPMrsgW9Zpi39Zdw3c0J1Y8EuKs4ncuHlYSku0T%2F8x8HNyRA5X7G8NDYLprupibPTNoGxYdESL75G4fadXJD3pd57rN5OqXMM5E3vM1X7XFuyjC0S%2BNV2qlJxdxY6rFmkxMJODrtQGOqUBzZew%2FxmRD%2BQUz6ABzZpTM0fsMGjFWq3PKuofZ7jDJgGchse36JaHqYijR0OFmwdDVM2gungjtYpiuuBxII49pwKoIW1%2BoQuxp5PqGbwGv4Vt5JnDF9vvKr8BPQ51MuvT7K2rqT4UjHH5cGJGdiv5oOQFAscnBCGhHA9SWNp%2B7roYfEu5il6%2BLHRIgpyPaQV5pFl3ojoxG8%2B9cGvOWQr4ryh8v%2Btn&X-Amz-Signature=e340b27a5c68c1ded0dcdddb4a22bed65d39d6648afa4dd143b55cda0cbbfa8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY6JGGVH%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDP5dyqOXu0pfo2IvUfpsJkS7wEy1ebHskKt%2FCLJdOr%2FAiEA%2BYr2bSt0T%2FNMR9FfvXISGLZYfg64BDGQlbHh3daTpn8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAbIhxmgGE9dfWLQSrcAw4Bak1%2BMSMR8fWhbFMt4EgdP4X%2Fjg3Tq2hGA12wLpDN5UMSiJyYe6Mc70NPs1Ql1TfA2s%2FCeG3sTcu4oXWIz6Y4mzjwUyF%2BizPBmaTudE553COJKFUfFkSyA6WvWneeDVV%2FZUfqpdHzhoboutPFsCzramJ9oUlciEwZGZQdyo%2FBErGmLQFi6DxsNgoYHy3ap8ZGJYxicLpXuk0usHTcnNtOWmWaRMJ4t3VT8cD24IdWrZjr%2BWv5Z7pI%2BDPBZ2FDVyuio8KuphZXKBl9luDiUhUbI%2B0g%2FhukARdjsEu%2B1jbyzlKfJ%2F9%2B5lfKAJv0xqCB0uda1H1GJ7PqNCWiy6LXgRkV%2Ft1vHE8XVRIqC5cpI92lsnn2EUy9umjs%2Bb2leT2XlkYm2qSu3%2FHtydHgq37MvJuxoTs0IjzZfRtWmsklvdAlobqlDEXOJ1X7MZgwVvxZgCX%2FSrrQQ6hvZ5OWDQ0rhGBvQ2EjxG9MwsI%2FE02IQRRMqVny3hZpnxWWroTPMrsgW9Zpi39Zdw3c0J1Y8EuKs4ncuHlYSku0T%2F8x8HNyRA5X7G8NDYLprupibPTNoGxYdESL75G4fadXJD3pd57rN5OqXMM5E3vM1X7XFuyjC0S%2BNV2qlJxdxY6rFmkxMJODrtQGOqUBzZew%2FxmRD%2BQUz6ABzZpTM0fsMGjFWq3PKuofZ7jDJgGchse36JaHqYijR0OFmwdDVM2gungjtYpiuuBxII49pwKoIW1%2BoQuxp5PqGbwGv4Vt5JnDF9vvKr8BPQ51MuvT7K2rqT4UjHH5cGJGdiv5oOQFAscnBCGhHA9SWNp%2B7roYfEu5il6%2BLHRIgpyPaQV5pFl3ojoxG8%2B9cGvOWQr4ryh8v%2Btn&X-Amz-Signature=f9e3fc0e24e9117857a3a348c9eedb51d7e03e6e1401cc28447dc07b5f2839a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY6JGGVH%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDP5dyqOXu0pfo2IvUfpsJkS7wEy1ebHskKt%2FCLJdOr%2FAiEA%2BYr2bSt0T%2FNMR9FfvXISGLZYfg64BDGQlbHh3daTpn8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAbIhxmgGE9dfWLQSrcAw4Bak1%2BMSMR8fWhbFMt4EgdP4X%2Fjg3Tq2hGA12wLpDN5UMSiJyYe6Mc70NPs1Ql1TfA2s%2FCeG3sTcu4oXWIz6Y4mzjwUyF%2BizPBmaTudE553COJKFUfFkSyA6WvWneeDVV%2FZUfqpdHzhoboutPFsCzramJ9oUlciEwZGZQdyo%2FBErGmLQFi6DxsNgoYHy3ap8ZGJYxicLpXuk0usHTcnNtOWmWaRMJ4t3VT8cD24IdWrZjr%2BWv5Z7pI%2BDPBZ2FDVyuio8KuphZXKBl9luDiUhUbI%2B0g%2FhukARdjsEu%2B1jbyzlKfJ%2F9%2B5lfKAJv0xqCB0uda1H1GJ7PqNCWiy6LXgRkV%2Ft1vHE8XVRIqC5cpI92lsnn2EUy9umjs%2Bb2leT2XlkYm2qSu3%2FHtydHgq37MvJuxoTs0IjzZfRtWmsklvdAlobqlDEXOJ1X7MZgwVvxZgCX%2FSrrQQ6hvZ5OWDQ0rhGBvQ2EjxG9MwsI%2FE02IQRRMqVny3hZpnxWWroTPMrsgW9Zpi39Zdw3c0J1Y8EuKs4ncuHlYSku0T%2F8x8HNyRA5X7G8NDYLprupibPTNoGxYdESL75G4fadXJD3pd57rN5OqXMM5E3vM1X7XFuyjC0S%2BNV2qlJxdxY6rFmkxMJODrtQGOqUBzZew%2FxmRD%2BQUz6ABzZpTM0fsMGjFWq3PKuofZ7jDJgGchse36JaHqYijR0OFmwdDVM2gungjtYpiuuBxII49pwKoIW1%2BoQuxp5PqGbwGv4Vt5JnDF9vvKr8BPQ51MuvT7K2rqT4UjHH5cGJGdiv5oOQFAscnBCGhHA9SWNp%2B7roYfEu5il6%2BLHRIgpyPaQV5pFl3ojoxG8%2B9cGvOWQr4ryh8v%2Btn&X-Amz-Signature=6b57a6b54daadba8948b077b6b5817d8dcc930efbfbf79d575885092367c88f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY6JGGVH%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDP5dyqOXu0pfo2IvUfpsJkS7wEy1ebHskKt%2FCLJdOr%2FAiEA%2BYr2bSt0T%2FNMR9FfvXISGLZYfg64BDGQlbHh3daTpn8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAbIhxmgGE9dfWLQSrcAw4Bak1%2BMSMR8fWhbFMt4EgdP4X%2Fjg3Tq2hGA12wLpDN5UMSiJyYe6Mc70NPs1Ql1TfA2s%2FCeG3sTcu4oXWIz6Y4mzjwUyF%2BizPBmaTudE553COJKFUfFkSyA6WvWneeDVV%2FZUfqpdHzhoboutPFsCzramJ9oUlciEwZGZQdyo%2FBErGmLQFi6DxsNgoYHy3ap8ZGJYxicLpXuk0usHTcnNtOWmWaRMJ4t3VT8cD24IdWrZjr%2BWv5Z7pI%2BDPBZ2FDVyuio8KuphZXKBl9luDiUhUbI%2B0g%2FhukARdjsEu%2B1jbyzlKfJ%2F9%2B5lfKAJv0xqCB0uda1H1GJ7PqNCWiy6LXgRkV%2Ft1vHE8XVRIqC5cpI92lsnn2EUy9umjs%2Bb2leT2XlkYm2qSu3%2FHtydHgq37MvJuxoTs0IjzZfRtWmsklvdAlobqlDEXOJ1X7MZgwVvxZgCX%2FSrrQQ6hvZ5OWDQ0rhGBvQ2EjxG9MwsI%2FE02IQRRMqVny3hZpnxWWroTPMrsgW9Zpi39Zdw3c0J1Y8EuKs4ncuHlYSku0T%2F8x8HNyRA5X7G8NDYLprupibPTNoGxYdESL75G4fadXJD3pd57rN5OqXMM5E3vM1X7XFuyjC0S%2BNV2qlJxdxY6rFmkxMJODrtQGOqUBzZew%2FxmRD%2BQUz6ABzZpTM0fsMGjFWq3PKuofZ7jDJgGchse36JaHqYijR0OFmwdDVM2gungjtYpiuuBxII49pwKoIW1%2BoQuxp5PqGbwGv4Vt5JnDF9vvKr8BPQ51MuvT7K2rqT4UjHH5cGJGdiv5oOQFAscnBCGhHA9SWNp%2B7roYfEu5il6%2BLHRIgpyPaQV5pFl3ojoxG8%2B9cGvOWQr4ryh8v%2Btn&X-Amz-Signature=30f30567c11c116e92585a770fdf4f81e2f5804321ccd7cb1174706876bd1374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY6JGGVH%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDP5dyqOXu0pfo2IvUfpsJkS7wEy1ebHskKt%2FCLJdOr%2FAiEA%2BYr2bSt0T%2FNMR9FfvXISGLZYfg64BDGQlbHh3daTpn8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAbIhxmgGE9dfWLQSrcAw4Bak1%2BMSMR8fWhbFMt4EgdP4X%2Fjg3Tq2hGA12wLpDN5UMSiJyYe6Mc70NPs1Ql1TfA2s%2FCeG3sTcu4oXWIz6Y4mzjwUyF%2BizPBmaTudE553COJKFUfFkSyA6WvWneeDVV%2FZUfqpdHzhoboutPFsCzramJ9oUlciEwZGZQdyo%2FBErGmLQFi6DxsNgoYHy3ap8ZGJYxicLpXuk0usHTcnNtOWmWaRMJ4t3VT8cD24IdWrZjr%2BWv5Z7pI%2BDPBZ2FDVyuio8KuphZXKBl9luDiUhUbI%2B0g%2FhukARdjsEu%2B1jbyzlKfJ%2F9%2B5lfKAJv0xqCB0uda1H1GJ7PqNCWiy6LXgRkV%2Ft1vHE8XVRIqC5cpI92lsnn2EUy9umjs%2Bb2leT2XlkYm2qSu3%2FHtydHgq37MvJuxoTs0IjzZfRtWmsklvdAlobqlDEXOJ1X7MZgwVvxZgCX%2FSrrQQ6hvZ5OWDQ0rhGBvQ2EjxG9MwsI%2FE02IQRRMqVny3hZpnxWWroTPMrsgW9Zpi39Zdw3c0J1Y8EuKs4ncuHlYSku0T%2F8x8HNyRA5X7G8NDYLprupibPTNoGxYdESL75G4fadXJD3pd57rN5OqXMM5E3vM1X7XFuyjC0S%2BNV2qlJxdxY6rFmkxMJODrtQGOqUBzZew%2FxmRD%2BQUz6ABzZpTM0fsMGjFWq3PKuofZ7jDJgGchse36JaHqYijR0OFmwdDVM2gungjtYpiuuBxII49pwKoIW1%2BoQuxp5PqGbwGv4Vt5JnDF9vvKr8BPQ51MuvT7K2rqT4UjHH5cGJGdiv5oOQFAscnBCGhHA9SWNp%2B7roYfEu5il6%2BLHRIgpyPaQV5pFl3ojoxG8%2B9cGvOWQr4ryh8v%2Btn&X-Amz-Signature=51c134b93c38f85b50461a32cfe306ecb0b3bff792587ffef41c713a3466b33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDYU3JO%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T011546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIGojKltTGY6XIzqIASAFa5oCZRDVVYviOWbDnPKMuTZiAiEArlzkUNg9MtuXSTRoEnka4P0kWxWL6aesUYgDxRXk1SMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcMRPM%2FT3B3F%2FpXHyrcA8UUczRk9I33dhGZGIDP4PMamQQn8K198iZxxMgWYhexnbUI8BIlPt4mFvrIwUovoOM8cXf678XRTTBsAZLz61aBReCvAaeHAJbKahz0ptR4HXR0qIsQmP2yhO1LsGb%2Bt0V6GHJIR6rTbqIfEzlK41J%2Bv%2BAa8G8t9DimQQ%2BNAgvN3bWIQWI43p%2B5Z%2F3i%2FWZPMubpNEuKNtvr7nnREcNiuXOlAh7BwgAIgW5w7283A%2BUen0Ku45IRNYk6ALyuv23v0FMeV8dUQqnZN4eVcfqTj7vvmaCslKXtsWEBWt%2Fj0Jb7SvmhBRC%2F8iqciC%2BbAtlT2OpiQ3WB7qn%2FudT%2BFF7IIjPNW2jzJ%2FJEZ%2Fu8ANKJ1wZk7clMYMOoJ0NOstpF2zziZNe8h3A%2FhlhzKtGo6E1euONkyyWmZCQq36NAygAiLRjY%2FXRj0RGlOJOEQ3ODKfHuL1Pa5M9PE6OEplli20MUrPLJD8FTPjN6ik9%2BmorA0X0xs9XEJBPYlr4qRl6tCLI%2BdmExg8yzqtN3pWG97sgDidAci6qilSi9IaUGUyFB4sbOdfqxQ9JynRSbSeTmL78zufNYl449J%2B5P64HiMDMAx1xIRt1EY3nSKqN0jnxl4Bq8CsvVJ6%2BW21vbc1vlMJeFrtQGOqUBEqRlVIlio6PP0a8yI3a%2FIHtYrI3mKvE0l0z04K%2BJjF17KW4h%2FwgNNiW3FcKez1iOmE7N9o1MQ50RNBDkENQkGSS7bgp3ueuD8xUCBPO9rNzRtbk%2FF%2F2ofS1E%2F4jDibb7ldUMBoJVx1i4iVbwDlCC9By6IxPY0100tEzCwmefYrlxXfmXoE0shRC3SZWUVfaf2mMtVgbHbHNZkTSrWlOCgzpgXRCf&X-Amz-Signature=c54d92493715f74b9b9ad64844a25a66efd1eee8df2e539233c2e16dfff8a508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

