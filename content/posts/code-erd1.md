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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH7YLERJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD6xnHt3VSy4%2BOcLrxRXXkDsio8TfHXNWhF49Rto4HKegIhAILONJCmwiWtPhzFjn8jM6izDWHHG1sheCMH9AGeKHQ6Kv8DCAAQABoMNjM3NDIzMTgzODA1Igz2y3acEGb1m6suEWoq3AM%2FBsq01dm8AV4Tx%2B2ZwmokCV%2Fzb8XqEIvRUSktakgzkBLETLNAmoy0UTUcxU%2F%2BAM8Rr8g%2FFElWl0W5VgWuZOQ7VhtDBHhHbIdX6Hxhm%2BWVVVwLBMfkvW6%2BpRS0vNh06HR5UBA%2BFjZCYgTN7wFU0WdZ8GgVYTt5mmW9nJOAqYLuuPxaHk%2FCY96Dhm%2BFnuZWXbkppkhoTEgTo0zu%2FVftRJbGI5XNRtMwgXANqhXqqErXA3TDPSDP3jTi64D5P4vrlntYa3wxVlIfHjvhvKGxgtEPyNNE4ZuLxCaMh2SjGS3dmWYAbX%2FyFvdYNPZfZdZ44tgg2MfnXd3QKsZbXVDBBzo7SOfETi7wMakSt4qqtXeMJjyN8pZ9g7y1TGX%2FsHaxnur%2F9QaDOWrYHbJ7%2B4AbnjrG799paD76fgGbLt6vjeYQ8ZslH28tcV%2FhmZ2SbtJddTH9bDy5mjI%2BlWJufDIlvbDsB291GLcsCd8hc7M5kkBsLD0EnxUBoDxktX41N99AyjDvZQ0XHlSaqk2g8%2BMptrPwVme9C%2FkSp2G9eHoVk%2Bp8KPN9xSErdBrgCBD%2B7%2FYkGYbRFWU6Qq%2BqrjVF90btLco7HgbbSX0ziTsv5LbOEFAZqPka41wO%2FPP%2B8WgBzjCah%2FPQBjqkAWV%2Fx6ymllN48HdsslYGUy3tQ5ORGA1W0iJ0JsSRTuJPfqK3b0BlRlBwPZRSPAlzf4jJlXUQbJMt0IYA0Eq8TFgTPx3JMRY1eD2wY7bhBUTjvlXHhaSiUHbpJ8W3r4zFdgh6Ze52a3PvCxpe%2FKj%2FNSYYcDaB%2FzWepMVHG8g8j6ZISQB5U25HCULCXpLYN%2F32N73H7uDZlivBmkXzYU30e2DpbGLB&X-Amz-Signature=e22610bf4d116c6e86c3c9e7bd349bc4b3929045d19af117754994954a090693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH3OAGS%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGdKDOsL6LyGqSAb6PH60apeYsLXcTvQgaZg9eRQynvfAiEAuLqnQcumSjXK5wtdCs3lbqU8vbVODh%2BwdDXBv%2FryEdMq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDApnrluJAYwrMysnHircA%2Fwa50j6fnCYRa5aRdfC9E8A8hl0eZI28CVUCt0MnahCZFKaqjbZQuKlhkW%2FQ1yVhb%2BrEdR5SxF%2BTM6gTjXGkgPAN83XLzDOsE2xGmegPFNh00H8A5flDcdWkoDfXRCiNRb2WcmAqo0zw7pngm%2FyBLPuAjB6c%2F4FNEb1meu3hHQHJZSICXw%2FyADbMnfIFHvybSwixuuHa%2BGbpxIncJEw6eeta9tJu9O73HiyF7YzMmKW4X2DVRntJhbYpsAnBhYxJnvFG6cE9dEl7OrMkSbnF3YzYpOv9o%2BmemyNQ4Xs1aKrY1flW5WYWeXtqxYBstugRoIH7HchMK59ZefLSGfba9rR%2BQyeubUrLQ9x1AYckUWA1SWXSsfO9yT8vxWnf6hd1m1uX4i6blTFtsj6aH0koCmu3DZZWOjIeSBYahjEIKiRWpB%2Fm%2BCMGvxJwBN9%2BNDZhbZwOAmaKF3%2B9AZMlOc5DLlv2zYvQVv%2BUgvM%2Bz5JxQOaCfctPtMS2y9zuh60iXbmlNkxLGWHPUtKLKmyLIcCJfgSbvb0uvuViRUWIqdgEHb18B64fOBSfqbadZ%2BRk%2BQuBMx6e0qSRRBCiSwcT0Ypodsp3hxoQOFSHTpW8dd6Lr9uZzXVcHoACMrybOZpMLaG89AGOqUBQxq%2Fjt14OyPyixv92i9HHPyLMPZ%2FEn%2FzO9R554ROQUGVNkpD2qRylw8AfOOgIJ%2BiwVTfPLwVi1pZ6BnLkGAVz1TTM8J9bPX96wM1%2Fw71e4NC8ElOoQ9OJr0fM6p7HkH9R2nniKGndvML7uDiNwTn5VfU0AmvROq7R%2BFP%2BNdN1WuBN8OW3UQkgfpbI0oVrKp2ZblcRdTYUqdsLvbiALZHd5CTksPr&X-Amz-Signature=f03e7de806b8af3979f8b9d1b0faad1cff603f213bab061d161ef7bda37144ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH3OAGS%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGdKDOsL6LyGqSAb6PH60apeYsLXcTvQgaZg9eRQynvfAiEAuLqnQcumSjXK5wtdCs3lbqU8vbVODh%2BwdDXBv%2FryEdMq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDApnrluJAYwrMysnHircA%2Fwa50j6fnCYRa5aRdfC9E8A8hl0eZI28CVUCt0MnahCZFKaqjbZQuKlhkW%2FQ1yVhb%2BrEdR5SxF%2BTM6gTjXGkgPAN83XLzDOsE2xGmegPFNh00H8A5flDcdWkoDfXRCiNRb2WcmAqo0zw7pngm%2FyBLPuAjB6c%2F4FNEb1meu3hHQHJZSICXw%2FyADbMnfIFHvybSwixuuHa%2BGbpxIncJEw6eeta9tJu9O73HiyF7YzMmKW4X2DVRntJhbYpsAnBhYxJnvFG6cE9dEl7OrMkSbnF3YzYpOv9o%2BmemyNQ4Xs1aKrY1flW5WYWeXtqxYBstugRoIH7HchMK59ZefLSGfba9rR%2BQyeubUrLQ9x1AYckUWA1SWXSsfO9yT8vxWnf6hd1m1uX4i6blTFtsj6aH0koCmu3DZZWOjIeSBYahjEIKiRWpB%2Fm%2BCMGvxJwBN9%2BNDZhbZwOAmaKF3%2B9AZMlOc5DLlv2zYvQVv%2BUgvM%2Bz5JxQOaCfctPtMS2y9zuh60iXbmlNkxLGWHPUtKLKmyLIcCJfgSbvb0uvuViRUWIqdgEHb18B64fOBSfqbadZ%2BRk%2BQuBMx6e0qSRRBCiSwcT0Ypodsp3hxoQOFSHTpW8dd6Lr9uZzXVcHoACMrybOZpMLaG89AGOqUBQxq%2Fjt14OyPyixv92i9HHPyLMPZ%2FEn%2FzO9R554ROQUGVNkpD2qRylw8AfOOgIJ%2BiwVTfPLwVi1pZ6BnLkGAVz1TTM8J9bPX96wM1%2Fw71e4NC8ElOoQ9OJr0fM6p7HkH9R2nniKGndvML7uDiNwTn5VfU0AmvROq7R%2BFP%2BNdN1WuBN8OW3UQkgfpbI0oVrKp2ZblcRdTYUqdsLvbiALZHd5CTksPr&X-Amz-Signature=fb95f769dff79201a03f7300190203d1d44c93124baf88ed221250ec222d67af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH3OAGS%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGdKDOsL6LyGqSAb6PH60apeYsLXcTvQgaZg9eRQynvfAiEAuLqnQcumSjXK5wtdCs3lbqU8vbVODh%2BwdDXBv%2FryEdMq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDApnrluJAYwrMysnHircA%2Fwa50j6fnCYRa5aRdfC9E8A8hl0eZI28CVUCt0MnahCZFKaqjbZQuKlhkW%2FQ1yVhb%2BrEdR5SxF%2BTM6gTjXGkgPAN83XLzDOsE2xGmegPFNh00H8A5flDcdWkoDfXRCiNRb2WcmAqo0zw7pngm%2FyBLPuAjB6c%2F4FNEb1meu3hHQHJZSICXw%2FyADbMnfIFHvybSwixuuHa%2BGbpxIncJEw6eeta9tJu9O73HiyF7YzMmKW4X2DVRntJhbYpsAnBhYxJnvFG6cE9dEl7OrMkSbnF3YzYpOv9o%2BmemyNQ4Xs1aKrY1flW5WYWeXtqxYBstugRoIH7HchMK59ZefLSGfba9rR%2BQyeubUrLQ9x1AYckUWA1SWXSsfO9yT8vxWnf6hd1m1uX4i6blTFtsj6aH0koCmu3DZZWOjIeSBYahjEIKiRWpB%2Fm%2BCMGvxJwBN9%2BNDZhbZwOAmaKF3%2B9AZMlOc5DLlv2zYvQVv%2BUgvM%2Bz5JxQOaCfctPtMS2y9zuh60iXbmlNkxLGWHPUtKLKmyLIcCJfgSbvb0uvuViRUWIqdgEHb18B64fOBSfqbadZ%2BRk%2BQuBMx6e0qSRRBCiSwcT0Ypodsp3hxoQOFSHTpW8dd6Lr9uZzXVcHoACMrybOZpMLaG89AGOqUBQxq%2Fjt14OyPyixv92i9HHPyLMPZ%2FEn%2FzO9R554ROQUGVNkpD2qRylw8AfOOgIJ%2BiwVTfPLwVi1pZ6BnLkGAVz1TTM8J9bPX96wM1%2Fw71e4NC8ElOoQ9OJr0fM6p7HkH9R2nniKGndvML7uDiNwTn5VfU0AmvROq7R%2BFP%2BNdN1WuBN8OW3UQkgfpbI0oVrKp2ZblcRdTYUqdsLvbiALZHd5CTksPr&X-Amz-Signature=55bd820c7472e08751129a8d9e55e61890696bb8bfcf87a67087dea6a76c65dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH3OAGS%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGdKDOsL6LyGqSAb6PH60apeYsLXcTvQgaZg9eRQynvfAiEAuLqnQcumSjXK5wtdCs3lbqU8vbVODh%2BwdDXBv%2FryEdMq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDApnrluJAYwrMysnHircA%2Fwa50j6fnCYRa5aRdfC9E8A8hl0eZI28CVUCt0MnahCZFKaqjbZQuKlhkW%2FQ1yVhb%2BrEdR5SxF%2BTM6gTjXGkgPAN83XLzDOsE2xGmegPFNh00H8A5flDcdWkoDfXRCiNRb2WcmAqo0zw7pngm%2FyBLPuAjB6c%2F4FNEb1meu3hHQHJZSICXw%2FyADbMnfIFHvybSwixuuHa%2BGbpxIncJEw6eeta9tJu9O73HiyF7YzMmKW4X2DVRntJhbYpsAnBhYxJnvFG6cE9dEl7OrMkSbnF3YzYpOv9o%2BmemyNQ4Xs1aKrY1flW5WYWeXtqxYBstugRoIH7HchMK59ZefLSGfba9rR%2BQyeubUrLQ9x1AYckUWA1SWXSsfO9yT8vxWnf6hd1m1uX4i6blTFtsj6aH0koCmu3DZZWOjIeSBYahjEIKiRWpB%2Fm%2BCMGvxJwBN9%2BNDZhbZwOAmaKF3%2B9AZMlOc5DLlv2zYvQVv%2BUgvM%2Bz5JxQOaCfctPtMS2y9zuh60iXbmlNkxLGWHPUtKLKmyLIcCJfgSbvb0uvuViRUWIqdgEHb18B64fOBSfqbadZ%2BRk%2BQuBMx6e0qSRRBCiSwcT0Ypodsp3hxoQOFSHTpW8dd6Lr9uZzXVcHoACMrybOZpMLaG89AGOqUBQxq%2Fjt14OyPyixv92i9HHPyLMPZ%2FEn%2FzO9R554ROQUGVNkpD2qRylw8AfOOgIJ%2BiwVTfPLwVi1pZ6BnLkGAVz1TTM8J9bPX96wM1%2Fw71e4NC8ElOoQ9OJr0fM6p7HkH9R2nniKGndvML7uDiNwTn5VfU0AmvROq7R%2BFP%2BNdN1WuBN8OW3UQkgfpbI0oVrKp2ZblcRdTYUqdsLvbiALZHd5CTksPr&X-Amz-Signature=e4ce2305417c8c34f1d84d98f09e32337ad001d6a5c40730abeee5a1d0b7095d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEH3OAGS%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIGdKDOsL6LyGqSAb6PH60apeYsLXcTvQgaZg9eRQynvfAiEAuLqnQcumSjXK5wtdCs3lbqU8vbVODh%2BwdDXBv%2FryEdMq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDApnrluJAYwrMysnHircA%2Fwa50j6fnCYRa5aRdfC9E8A8hl0eZI28CVUCt0MnahCZFKaqjbZQuKlhkW%2FQ1yVhb%2BrEdR5SxF%2BTM6gTjXGkgPAN83XLzDOsE2xGmegPFNh00H8A5flDcdWkoDfXRCiNRb2WcmAqo0zw7pngm%2FyBLPuAjB6c%2F4FNEb1meu3hHQHJZSICXw%2FyADbMnfIFHvybSwixuuHa%2BGbpxIncJEw6eeta9tJu9O73HiyF7YzMmKW4X2DVRntJhbYpsAnBhYxJnvFG6cE9dEl7OrMkSbnF3YzYpOv9o%2BmemyNQ4Xs1aKrY1flW5WYWeXtqxYBstugRoIH7HchMK59ZefLSGfba9rR%2BQyeubUrLQ9x1AYckUWA1SWXSsfO9yT8vxWnf6hd1m1uX4i6blTFtsj6aH0koCmu3DZZWOjIeSBYahjEIKiRWpB%2Fm%2BCMGvxJwBN9%2BNDZhbZwOAmaKF3%2B9AZMlOc5DLlv2zYvQVv%2BUgvM%2Bz5JxQOaCfctPtMS2y9zuh60iXbmlNkxLGWHPUtKLKmyLIcCJfgSbvb0uvuViRUWIqdgEHb18B64fOBSfqbadZ%2BRk%2BQuBMx6e0qSRRBCiSwcT0Ypodsp3hxoQOFSHTpW8dd6Lr9uZzXVcHoACMrybOZpMLaG89AGOqUBQxq%2Fjt14OyPyixv92i9HHPyLMPZ%2FEn%2FzO9R554ROQUGVNkpD2qRylw8AfOOgIJ%2BiwVTfPLwVi1pZ6BnLkGAVz1TTM8J9bPX96wM1%2Fw71e4NC8ElOoQ9OJr0fM6p7HkH9R2nniKGndvML7uDiNwTn5VfU0AmvROq7R%2BFP%2BNdN1WuBN8OW3UQkgfpbI0oVrKp2ZblcRdTYUqdsLvbiALZHd5CTksPr&X-Amz-Signature=aabc488e981f488fa814e8714090a89a194937d40f704bfadf4639eb07d8d8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH7YLERJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD6xnHt3VSy4%2BOcLrxRXXkDsio8TfHXNWhF49Rto4HKegIhAILONJCmwiWtPhzFjn8jM6izDWHHG1sheCMH9AGeKHQ6Kv8DCAAQABoMNjM3NDIzMTgzODA1Igz2y3acEGb1m6suEWoq3AM%2FBsq01dm8AV4Tx%2B2ZwmokCV%2Fzb8XqEIvRUSktakgzkBLETLNAmoy0UTUcxU%2F%2BAM8Rr8g%2FFElWl0W5VgWuZOQ7VhtDBHhHbIdX6Hxhm%2BWVVVwLBMfkvW6%2BpRS0vNh06HR5UBA%2BFjZCYgTN7wFU0WdZ8GgVYTt5mmW9nJOAqYLuuPxaHk%2FCY96Dhm%2BFnuZWXbkppkhoTEgTo0zu%2FVftRJbGI5XNRtMwgXANqhXqqErXA3TDPSDP3jTi64D5P4vrlntYa3wxVlIfHjvhvKGxgtEPyNNE4ZuLxCaMh2SjGS3dmWYAbX%2FyFvdYNPZfZdZ44tgg2MfnXd3QKsZbXVDBBzo7SOfETi7wMakSt4qqtXeMJjyN8pZ9g7y1TGX%2FsHaxnur%2F9QaDOWrYHbJ7%2B4AbnjrG799paD76fgGbLt6vjeYQ8ZslH28tcV%2FhmZ2SbtJddTH9bDy5mjI%2BlWJufDIlvbDsB291GLcsCd8hc7M5kkBsLD0EnxUBoDxktX41N99AyjDvZQ0XHlSaqk2g8%2BMptrPwVme9C%2FkSp2G9eHoVk%2Bp8KPN9xSErdBrgCBD%2B7%2FYkGYbRFWU6Qq%2BqrjVF90btLco7HgbbSX0ziTsv5LbOEFAZqPka41wO%2FPP%2B8WgBzjCah%2FPQBjqkAWV%2Fx6ymllN48HdsslYGUy3tQ5ORGA1W0iJ0JsSRTuJPfqK3b0BlRlBwPZRSPAlzf4jJlXUQbJMt0IYA0Eq8TFgTPx3JMRY1eD2wY7bhBUTjvlXHhaSiUHbpJ8W3r4zFdgh6Ze52a3PvCxpe%2FKj%2FNSYYcDaB%2FzWepMVHG8g8j6ZISQB5U25HCULCXpLYN%2F32N73H7uDZlivBmkXzYU30e2DpbGLB&X-Amz-Signature=b2de25299aaffce8475a15723a036b35d22582da1c58b1672a50009e1e5fabee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

