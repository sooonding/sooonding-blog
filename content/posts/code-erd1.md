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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EMA4T7%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDC0lVq5WxET6qDhiWaIE897qVvsGqQkTs9AaRHnasTBAiAlGikcfJeI6rzU6OI9kfh4%2FS%2BAMjykRDMWJLfcZCVBoir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2FiQ7%2FSds%2BnZ3YTDtKtwDQndPpf5YxJFO6CEHGVkHz%2BYu0vY8aAlu0pozDeRMOnk3LG9UK1fd38iIJSkvsk7XLfbQB%2F9o72%2BOyLfmDVqzt4FIxM71Rnl6rBF7%2FCtEKj95yaFooAClUJdRxBW9Rj%2FAXnEbKFD2Zy1bilKS5qMeRfVH8NIzf2BQU2GzYl1IeFGwT%2B79laLAu%2BUaZY1KtDvoDkWO8wbixOEj00q%2F6pdwux8ObmXKR%2FKL%2FXIssB%2Bw%2BS%2BtU5S28YKC7aIprMt4qNHhNF2CHxUrnCQOqNC%2FJRkAcGt0No1%2F5xtm7cbCh5SDLOEXJmt5k0pXuLc9fRhPP30r2WSOSFirrieR4QS7qmfsHBigMjxS%2BEBxD1SeUiehc2WH91mUUn26qaDpO6ZfBpcoxUJTgp0T%2FW2QL1kVRnTou6ptETKLZ2V3ykEjOnaYp6IalvqHLyj%2FWgEPWwuyzwoKLt8G7Yh3SPFBmT2dAF8RqL0EiFJ1YzW%2FN0037Iy9VxhlFIRc9UP2T6ackwTvLgdPJa9foGRc%2BxN%2Bg7W0Keqdj80ECnrql%2FOrOkvKTYQZVI5J62FaiVUZB9WRf5fi%2F2kVW%2FNp8CVXsoYCY9mN5g0LJotSesUoBiK2UMhj2%2FIDFgi63ngycoQ42ssQOzww4%2FmVzwY6pgHhPfLw5cBKTGJMMhz8qCMB6UHq24kSwjfe5mbq0ITDSCvtTkw8WyYqy2tYBsDkCDcCKsLXW2%2BjWQv0ZGGRFYEzbi7cBdlX2dN4OB61bUMY9cVUOJhcfMitD1POxCNEAy7Q5wj%2Fh4PJbkxlcDZDuTJ4U9l%2FaUumKW55fG0U9cLSET%2F0Q%2FCuMiJw9%2F%2BmdCzJI%2Bz1rRkGbByweUvrGx1hMiVkZRWfNgBk&X-Amz-Signature=f61cfa44649366dc66559ec85bf089975b010ac66b5902d19c682a277a3f9d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GC3FUIK%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAEIS84Z%2FnUT4X39zFzoVw%2BkAZDo8DVfREksTFHQ9KprAiBoq9iowOQorB6TEUK%2B31h%2BetzYxpMggFz4f9dD8zoblSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMgjjziGpCvw5DS60OKtwDluzPiKLgGUkWCfN9NhHdZR%2FW4O7wtirVhZ6JGwRHaRrz8Wo5Wr16IAAiSvwqVgZiBwupbbX4C%2BxOJ73UTmidipF%2BcrSbnIwHHzBeVhykrsngZOaRZKkMP%2BSRkZo3B99KyBkMfE9reSyWCkpdl%2BKut42yFwE1nbiFQDm5Kb32GdhJwKnqtn2kezuGZqvtKKmUFJn60jLhFagd0RKaap6qTZRHLruGh7g0HSgdzNmyi4an0USY5tjzMA91U0kNtlJz5nbgmdF1GF9DvAklAuSVVayswJXSvO%2BXSX6zMyGymSGydZ7da1tuEmt0JewZtn8qOgz8saR3at%2FkOhfN7iijaRO2eM5A4f%2B6TDAdZQtzp%2Bv5fP2ldQrwd0Lj5Oek%2F6aAyKMF9fSKqLl3c4Eztgh3A%2B4zrdGvwJ34Go7qdRluCxUgdC28u9kRullKPZKFeqZ8lG8HOHrduWxVlURWEkVZARLXLAUIhb53vC%2BoNoNVon7DRdvuGLZQWmLPXCVvYd5aVlSpdzwd%2FsLzEAV66A4hkVQakUCjWbx1ljqAFQWwCVWz6Zw3%2FzSZs4Q7OmSjNvluy01105xhFzu0X8x2Up6obQewxCOyipYluY2UOqT5SqNp6nw23O0WKO88ZTUw5vqVzwY6pgHU1VMG3U2efH7n4zuvtDmuUXp%2BseOod4eld1nu1seV%2FEox6QkX3LKiOJExSKjkITO1f2ktssgBYvRn2Q6G687AjmexjwMiWqYxe8ChIIcsB7R0BwmNp9%2B264VDiWoSRJI6MhpZFYfx3%2Fcms3mKfyrdIOtPQVC6uygB8XINwEUFs7uo9ZWr2dybutSXSFR%2FXvjE%2FGa1eExd9Va186YLQoWnmjTC1VH0&X-Amz-Signature=e76806201971449edc5648a3a9009cd5c59c9757838eb2c598ed5f3b8fc24390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GC3FUIK%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAEIS84Z%2FnUT4X39zFzoVw%2BkAZDo8DVfREksTFHQ9KprAiBoq9iowOQorB6TEUK%2B31h%2BetzYxpMggFz4f9dD8zoblSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMgjjziGpCvw5DS60OKtwDluzPiKLgGUkWCfN9NhHdZR%2FW4O7wtirVhZ6JGwRHaRrz8Wo5Wr16IAAiSvwqVgZiBwupbbX4C%2BxOJ73UTmidipF%2BcrSbnIwHHzBeVhykrsngZOaRZKkMP%2BSRkZo3B99KyBkMfE9reSyWCkpdl%2BKut42yFwE1nbiFQDm5Kb32GdhJwKnqtn2kezuGZqvtKKmUFJn60jLhFagd0RKaap6qTZRHLruGh7g0HSgdzNmyi4an0USY5tjzMA91U0kNtlJz5nbgmdF1GF9DvAklAuSVVayswJXSvO%2BXSX6zMyGymSGydZ7da1tuEmt0JewZtn8qOgz8saR3at%2FkOhfN7iijaRO2eM5A4f%2B6TDAdZQtzp%2Bv5fP2ldQrwd0Lj5Oek%2F6aAyKMF9fSKqLl3c4Eztgh3A%2B4zrdGvwJ34Go7qdRluCxUgdC28u9kRullKPZKFeqZ8lG8HOHrduWxVlURWEkVZARLXLAUIhb53vC%2BoNoNVon7DRdvuGLZQWmLPXCVvYd5aVlSpdzwd%2FsLzEAV66A4hkVQakUCjWbx1ljqAFQWwCVWz6Zw3%2FzSZs4Q7OmSjNvluy01105xhFzu0X8x2Up6obQewxCOyipYluY2UOqT5SqNp6nw23O0WKO88ZTUw5vqVzwY6pgHU1VMG3U2efH7n4zuvtDmuUXp%2BseOod4eld1nu1seV%2FEox6QkX3LKiOJExSKjkITO1f2ktssgBYvRn2Q6G687AjmexjwMiWqYxe8ChIIcsB7R0BwmNp9%2B264VDiWoSRJI6MhpZFYfx3%2Fcms3mKfyrdIOtPQVC6uygB8XINwEUFs7uo9ZWr2dybutSXSFR%2FXvjE%2FGa1eExd9Va186YLQoWnmjTC1VH0&X-Amz-Signature=53070c8b1fabd68ed14820244a667b5c232adffb958ac9f9a92dd3a17da4cd05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GC3FUIK%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAEIS84Z%2FnUT4X39zFzoVw%2BkAZDo8DVfREksTFHQ9KprAiBoq9iowOQorB6TEUK%2B31h%2BetzYxpMggFz4f9dD8zoblSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMgjjziGpCvw5DS60OKtwDluzPiKLgGUkWCfN9NhHdZR%2FW4O7wtirVhZ6JGwRHaRrz8Wo5Wr16IAAiSvwqVgZiBwupbbX4C%2BxOJ73UTmidipF%2BcrSbnIwHHzBeVhykrsngZOaRZKkMP%2BSRkZo3B99KyBkMfE9reSyWCkpdl%2BKut42yFwE1nbiFQDm5Kb32GdhJwKnqtn2kezuGZqvtKKmUFJn60jLhFagd0RKaap6qTZRHLruGh7g0HSgdzNmyi4an0USY5tjzMA91U0kNtlJz5nbgmdF1GF9DvAklAuSVVayswJXSvO%2BXSX6zMyGymSGydZ7da1tuEmt0JewZtn8qOgz8saR3at%2FkOhfN7iijaRO2eM5A4f%2B6TDAdZQtzp%2Bv5fP2ldQrwd0Lj5Oek%2F6aAyKMF9fSKqLl3c4Eztgh3A%2B4zrdGvwJ34Go7qdRluCxUgdC28u9kRullKPZKFeqZ8lG8HOHrduWxVlURWEkVZARLXLAUIhb53vC%2BoNoNVon7DRdvuGLZQWmLPXCVvYd5aVlSpdzwd%2FsLzEAV66A4hkVQakUCjWbx1ljqAFQWwCVWz6Zw3%2FzSZs4Q7OmSjNvluy01105xhFzu0X8x2Up6obQewxCOyipYluY2UOqT5SqNp6nw23O0WKO88ZTUw5vqVzwY6pgHU1VMG3U2efH7n4zuvtDmuUXp%2BseOod4eld1nu1seV%2FEox6QkX3LKiOJExSKjkITO1f2ktssgBYvRn2Q6G687AjmexjwMiWqYxe8ChIIcsB7R0BwmNp9%2B264VDiWoSRJI6MhpZFYfx3%2Fcms3mKfyrdIOtPQVC6uygB8XINwEUFs7uo9ZWr2dybutSXSFR%2FXvjE%2FGa1eExd9Va186YLQoWnmjTC1VH0&X-Amz-Signature=562f7e7fb6228d075fa015a1a71893c15af0d1ca96caf444122ff632a19bf519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GC3FUIK%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAEIS84Z%2FnUT4X39zFzoVw%2BkAZDo8DVfREksTFHQ9KprAiBoq9iowOQorB6TEUK%2B31h%2BetzYxpMggFz4f9dD8zoblSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMgjjziGpCvw5DS60OKtwDluzPiKLgGUkWCfN9NhHdZR%2FW4O7wtirVhZ6JGwRHaRrz8Wo5Wr16IAAiSvwqVgZiBwupbbX4C%2BxOJ73UTmidipF%2BcrSbnIwHHzBeVhykrsngZOaRZKkMP%2BSRkZo3B99KyBkMfE9reSyWCkpdl%2BKut42yFwE1nbiFQDm5Kb32GdhJwKnqtn2kezuGZqvtKKmUFJn60jLhFagd0RKaap6qTZRHLruGh7g0HSgdzNmyi4an0USY5tjzMA91U0kNtlJz5nbgmdF1GF9DvAklAuSVVayswJXSvO%2BXSX6zMyGymSGydZ7da1tuEmt0JewZtn8qOgz8saR3at%2FkOhfN7iijaRO2eM5A4f%2B6TDAdZQtzp%2Bv5fP2ldQrwd0Lj5Oek%2F6aAyKMF9fSKqLl3c4Eztgh3A%2B4zrdGvwJ34Go7qdRluCxUgdC28u9kRullKPZKFeqZ8lG8HOHrduWxVlURWEkVZARLXLAUIhb53vC%2BoNoNVon7DRdvuGLZQWmLPXCVvYd5aVlSpdzwd%2FsLzEAV66A4hkVQakUCjWbx1ljqAFQWwCVWz6Zw3%2FzSZs4Q7OmSjNvluy01105xhFzu0X8x2Up6obQewxCOyipYluY2UOqT5SqNp6nw23O0WKO88ZTUw5vqVzwY6pgHU1VMG3U2efH7n4zuvtDmuUXp%2BseOod4eld1nu1seV%2FEox6QkX3LKiOJExSKjkITO1f2ktssgBYvRn2Q6G687AjmexjwMiWqYxe8ChIIcsB7R0BwmNp9%2B264VDiWoSRJI6MhpZFYfx3%2Fcms3mKfyrdIOtPQVC6uygB8XINwEUFs7uo9ZWr2dybutSXSFR%2FXvjE%2FGa1eExd9Va186YLQoWnmjTC1VH0&X-Amz-Signature=92ef1c251e8ce810692751d54be0c926069b55ebdd8da8252f2abd3bc4def8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GC3FUIK%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAEIS84Z%2FnUT4X39zFzoVw%2BkAZDo8DVfREksTFHQ9KprAiBoq9iowOQorB6TEUK%2B31h%2BetzYxpMggFz4f9dD8zoblSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMgjjziGpCvw5DS60OKtwDluzPiKLgGUkWCfN9NhHdZR%2FW4O7wtirVhZ6JGwRHaRrz8Wo5Wr16IAAiSvwqVgZiBwupbbX4C%2BxOJ73UTmidipF%2BcrSbnIwHHzBeVhykrsngZOaRZKkMP%2BSRkZo3B99KyBkMfE9reSyWCkpdl%2BKut42yFwE1nbiFQDm5Kb32GdhJwKnqtn2kezuGZqvtKKmUFJn60jLhFagd0RKaap6qTZRHLruGh7g0HSgdzNmyi4an0USY5tjzMA91U0kNtlJz5nbgmdF1GF9DvAklAuSVVayswJXSvO%2BXSX6zMyGymSGydZ7da1tuEmt0JewZtn8qOgz8saR3at%2FkOhfN7iijaRO2eM5A4f%2B6TDAdZQtzp%2Bv5fP2ldQrwd0Lj5Oek%2F6aAyKMF9fSKqLl3c4Eztgh3A%2B4zrdGvwJ34Go7qdRluCxUgdC28u9kRullKPZKFeqZ8lG8HOHrduWxVlURWEkVZARLXLAUIhb53vC%2BoNoNVon7DRdvuGLZQWmLPXCVvYd5aVlSpdzwd%2FsLzEAV66A4hkVQakUCjWbx1ljqAFQWwCVWz6Zw3%2FzSZs4Q7OmSjNvluy01105xhFzu0X8x2Up6obQewxCOyipYluY2UOqT5SqNp6nw23O0WKO88ZTUw5vqVzwY6pgHU1VMG3U2efH7n4zuvtDmuUXp%2BseOod4eld1nu1seV%2FEox6QkX3LKiOJExSKjkITO1f2ktssgBYvRn2Q6G687AjmexjwMiWqYxe8ChIIcsB7R0BwmNp9%2B264VDiWoSRJI6MhpZFYfx3%2Fcms3mKfyrdIOtPQVC6uygB8XINwEUFs7uo9ZWr2dybutSXSFR%2FXvjE%2FGa1eExd9Va186YLQoWnmjTC1VH0&X-Amz-Signature=f1559ade2d796d8764a5a3726c2207cb500fed7f1a6b307fe461c650794ff2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634EMA4T7%2F20260420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260420T024338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDC0lVq5WxET6qDhiWaIE897qVvsGqQkTs9AaRHnasTBAiAlGikcfJeI6rzU6OI9kfh4%2FS%2BAMjykRDMWJLfcZCVBoir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2FiQ7%2FSds%2BnZ3YTDtKtwDQndPpf5YxJFO6CEHGVkHz%2BYu0vY8aAlu0pozDeRMOnk3LG9UK1fd38iIJSkvsk7XLfbQB%2F9o72%2BOyLfmDVqzt4FIxM71Rnl6rBF7%2FCtEKj95yaFooAClUJdRxBW9Rj%2FAXnEbKFD2Zy1bilKS5qMeRfVH8NIzf2BQU2GzYl1IeFGwT%2B79laLAu%2BUaZY1KtDvoDkWO8wbixOEj00q%2F6pdwux8ObmXKR%2FKL%2FXIssB%2Bw%2BS%2BtU5S28YKC7aIprMt4qNHhNF2CHxUrnCQOqNC%2FJRkAcGt0No1%2F5xtm7cbCh5SDLOEXJmt5k0pXuLc9fRhPP30r2WSOSFirrieR4QS7qmfsHBigMjxS%2BEBxD1SeUiehc2WH91mUUn26qaDpO6ZfBpcoxUJTgp0T%2FW2QL1kVRnTou6ptETKLZ2V3ykEjOnaYp6IalvqHLyj%2FWgEPWwuyzwoKLt8G7Yh3SPFBmT2dAF8RqL0EiFJ1YzW%2FN0037Iy9VxhlFIRc9UP2T6ackwTvLgdPJa9foGRc%2BxN%2Bg7W0Keqdj80ECnrql%2FOrOkvKTYQZVI5J62FaiVUZB9WRf5fi%2F2kVW%2FNp8CVXsoYCY9mN5g0LJotSesUoBiK2UMhj2%2FIDFgi63ngycoQ42ssQOzww4%2FmVzwY6pgHhPfLw5cBKTGJMMhz8qCMB6UHq24kSwjfe5mbq0ITDSCvtTkw8WyYqy2tYBsDkCDcCKsLXW2%2BjWQv0ZGGRFYEzbi7cBdlX2dN4OB61bUMY9cVUOJhcfMitD1POxCNEAy7Q5wj%2Fh4PJbkxlcDZDuTJ4U9l%2FaUumKW55fG0U9cLSET%2F0Q%2FCuMiJw9%2F%2BmdCzJI%2Bz1rRkGbByweUvrGx1hMiVkZRWfNgBk&X-Amz-Signature=ca4a6cf95512eedf1f30c0664063bf650c610c76b5e1a34e97e7ef0a10fb4e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

