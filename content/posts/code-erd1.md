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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6ZGWI7%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBYWml%2FoE5kUbUYS31qK6OmNblqQ4eWdSwMAuHy1aQ7XAiBqwjvRBqra03qa8LuuofNaxtqctChQ6yC6BEPGgXxinCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSs5HlWOAeRqHkXVzKtwD3T%2Bcx7DgUs6fZySpam18RYYKrxSBcwhTLgJ7Hm%2B1xwbK8jnNX%2Fn%2FkoHeKKFZXA5CSx7LBowFhg6EHP9aid3V0f5I4VS3t6NCx7jLys4Z%2FqnsKCbzcAZ2hdtAYwEywGHsRxk38r40Wi4EFnYgrjsVTGytW7pPgLI%2Bm6TSPtKXfQCRUJ95xKWDFeuI6jAQn5QDkhe92lJ0MRies%2BRjWdCnobgbKTDH1VG1wD4YvRSjl7ZhmB6DYHYVJCsJtkIdmWDrLOEDKF1smL3pxnXqpOYNsn52wlS5zEJpxl4MXM9rUtBCLrnkJFbChw0NuAEbO%2FYsqF1N%2BGOijvkKgQoa92Ty82%2B5D5kcNLdtqym2uSz8EjENNyZo%2FAOUJvaztolK1J%2Bxy95yCyztHAA8%2Bd%2BLO13ObBo70%2BT8LQJHEAfrLuNmX6gG%2Fh3ycMiQDxo9n94uqbtzBxGRbb%2BwlxZ68xIJ9yxpbOPZXkICahYjragH7VlmS4MaPOlahW%2FV%2B3YWU13KwgVoCnOJ6r4P9i%2Fk8TYjP6LTPMGpXNdqhwdjoTmtFB2%2F6M7tL59752buqQfHBWynBxk6CkvpZAXH4kmbBJDptKUmBw1xVaH14JgglrahHCwoAwZY4iYsW3doMXQWkfkwtLvj1AY6pgGz9yHcJFTegOH3pa034ecB0l7lUO3hgaE0NMOBPzjKBKA9pZr5R7Ok8nQFdAGYu1fZ6qSVIAdgYVQ6k2lJQkorXqlvtZ6fHokptIuYftTaKnekM5gdt9t8LqpeyB3kg3myuN4AxKTbxlOQR6cG1yz8%2FS5KLsIZNCWRoiQx0NqmzQ57vPE0ouqxT%2BPefyWpZgWVtpqAVY7kcAAVGqbEzLS4HTzggE4r&X-Amz-Signature=d8e03589423a753979016552ef8df5dbce05c1fda5d443c6f3dd30e084b2f534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQWRRIW%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIE%2FVy9%2FgeimJmt7QAxhg97AgGRPhKnwNJv4Ch%2FiB45kPAiEAvyYb7Wd2OX80dq%2FT3SgXBjL7WWmCJ7Vn0Etk3KNcDYAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLelG2j%2Bjb1ERKd1iSrcA7N6dlj2b4X4NCFsoEstlPXvPxfHQnun8qJy6J8KdeK7ttBmv%2BJIwgvImirI1B0Ad%2FIS6b%2FZkwtEOY8F26iIdt3e4zPRTvlsF1tDHVqjP6lkxb5gsSP%2BWqySZhFW2LvFf8p4%2F%2F%2F57Qb86ivD0A%2FnV0BR7xZiO19CkAz5hAda9f6HpxV08A5XoD2y%2F30f8LLDU%2BH%2B5EE6dlBODdRGIAIzPiu0rE%2FXCvCQQ3XKaAOZnlL%2BBJuoOGfsFYcIkNxgRYbpsEg9bez%2BrhT9gDbAfvV%2BO8E4xY3vU201wV%2F6L9NkGLvxOg4ZWG%2Fxzeo0U6851iVZ3RCRbKwk%2F%2BA1ne4izQzMiyP0%2BKYVaBQODj1CGIxcMzvQ%2BEe2%2ByHrmieVPFzN%2FnsSq8IRgUAQ%2FFx2fObeOeH5Py98YPOgFghx1vFurxJzr2dyCnTHFYexSCygaWrdEVNd9sSXoITQINhhN60EtWIJFc21sIV1l5bcjEXFWzRtk%2FD%2B1arL3BqjDR7n0uHYegLm%2BA2ZkqXs02cMevZEf4E1GvU9a0XT5fMMOaEiK7JzTQErVg5%2FqcLfPUI76vTsQb52bMlNQ%2ByncsIzft17nveN27W%2BWquotYDDZahq4GP9ujE8Fjzk2eWqiF8DnUo4ML%2B749QGOqUB34odByEi8cQnP%2BIczT2C17AjniM%2FJo4MJ1eojqIwWfJ7o%2FbO%2FvvVJ90zAHELawwwQIrwxCshIDwMOxiiav1pd1OpR1MsTQFOctWCO0zJxijY9FxBTgSwNk0kN2aDQ7XK62mdg6lWopVE%2BBZwh%2Bxqa7G5zAerMidXgbZkcv9LuQpwULw0RmwLo9NpdPztiwJ92JyuxuQo6TgqSbXQCFdOTqCZJbgW&X-Amz-Signature=98364da198d6c78b083dcda766b4399c85627ad3487505b9fa53fc7ef1e8f3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQWRRIW%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIE%2FVy9%2FgeimJmt7QAxhg97AgGRPhKnwNJv4Ch%2FiB45kPAiEAvyYb7Wd2OX80dq%2FT3SgXBjL7WWmCJ7Vn0Etk3KNcDYAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLelG2j%2Bjb1ERKd1iSrcA7N6dlj2b4X4NCFsoEstlPXvPxfHQnun8qJy6J8KdeK7ttBmv%2BJIwgvImirI1B0Ad%2FIS6b%2FZkwtEOY8F26iIdt3e4zPRTvlsF1tDHVqjP6lkxb5gsSP%2BWqySZhFW2LvFf8p4%2F%2F%2F57Qb86ivD0A%2FnV0BR7xZiO19CkAz5hAda9f6HpxV08A5XoD2y%2F30f8LLDU%2BH%2B5EE6dlBODdRGIAIzPiu0rE%2FXCvCQQ3XKaAOZnlL%2BBJuoOGfsFYcIkNxgRYbpsEg9bez%2BrhT9gDbAfvV%2BO8E4xY3vU201wV%2F6L9NkGLvxOg4ZWG%2Fxzeo0U6851iVZ3RCRbKwk%2F%2BA1ne4izQzMiyP0%2BKYVaBQODj1CGIxcMzvQ%2BEe2%2ByHrmieVPFzN%2FnsSq8IRgUAQ%2FFx2fObeOeH5Py98YPOgFghx1vFurxJzr2dyCnTHFYexSCygaWrdEVNd9sSXoITQINhhN60EtWIJFc21sIV1l5bcjEXFWzRtk%2FD%2B1arL3BqjDR7n0uHYegLm%2BA2ZkqXs02cMevZEf4E1GvU9a0XT5fMMOaEiK7JzTQErVg5%2FqcLfPUI76vTsQb52bMlNQ%2ByncsIzft17nveN27W%2BWquotYDDZahq4GP9ujE8Fjzk2eWqiF8DnUo4ML%2B749QGOqUB34odByEi8cQnP%2BIczT2C17AjniM%2FJo4MJ1eojqIwWfJ7o%2FbO%2FvvVJ90zAHELawwwQIrwxCshIDwMOxiiav1pd1OpR1MsTQFOctWCO0zJxijY9FxBTgSwNk0kN2aDQ7XK62mdg6lWopVE%2BBZwh%2Bxqa7G5zAerMidXgbZkcv9LuQpwULw0RmwLo9NpdPztiwJ92JyuxuQo6TgqSbXQCFdOTqCZJbgW&X-Amz-Signature=99c8a46745865c09d7dc9ef782fca04bd0d4ac144510ed97f1fd60b259c812f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQWRRIW%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIE%2FVy9%2FgeimJmt7QAxhg97AgGRPhKnwNJv4Ch%2FiB45kPAiEAvyYb7Wd2OX80dq%2FT3SgXBjL7WWmCJ7Vn0Etk3KNcDYAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLelG2j%2Bjb1ERKd1iSrcA7N6dlj2b4X4NCFsoEstlPXvPxfHQnun8qJy6J8KdeK7ttBmv%2BJIwgvImirI1B0Ad%2FIS6b%2FZkwtEOY8F26iIdt3e4zPRTvlsF1tDHVqjP6lkxb5gsSP%2BWqySZhFW2LvFf8p4%2F%2F%2F57Qb86ivD0A%2FnV0BR7xZiO19CkAz5hAda9f6HpxV08A5XoD2y%2F30f8LLDU%2BH%2B5EE6dlBODdRGIAIzPiu0rE%2FXCvCQQ3XKaAOZnlL%2BBJuoOGfsFYcIkNxgRYbpsEg9bez%2BrhT9gDbAfvV%2BO8E4xY3vU201wV%2F6L9NkGLvxOg4ZWG%2Fxzeo0U6851iVZ3RCRbKwk%2F%2BA1ne4izQzMiyP0%2BKYVaBQODj1CGIxcMzvQ%2BEe2%2ByHrmieVPFzN%2FnsSq8IRgUAQ%2FFx2fObeOeH5Py98YPOgFghx1vFurxJzr2dyCnTHFYexSCygaWrdEVNd9sSXoITQINhhN60EtWIJFc21sIV1l5bcjEXFWzRtk%2FD%2B1arL3BqjDR7n0uHYegLm%2BA2ZkqXs02cMevZEf4E1GvU9a0XT5fMMOaEiK7JzTQErVg5%2FqcLfPUI76vTsQb52bMlNQ%2ByncsIzft17nveN27W%2BWquotYDDZahq4GP9ujE8Fjzk2eWqiF8DnUo4ML%2B749QGOqUB34odByEi8cQnP%2BIczT2C17AjniM%2FJo4MJ1eojqIwWfJ7o%2FbO%2FvvVJ90zAHELawwwQIrwxCshIDwMOxiiav1pd1OpR1MsTQFOctWCO0zJxijY9FxBTgSwNk0kN2aDQ7XK62mdg6lWopVE%2BBZwh%2Bxqa7G5zAerMidXgbZkcv9LuQpwULw0RmwLo9NpdPztiwJ92JyuxuQo6TgqSbXQCFdOTqCZJbgW&X-Amz-Signature=065b29418d6e6baaee69ffcad71ef91317ccc6d91d68fc869d0e0be50bd813c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQWRRIW%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIE%2FVy9%2FgeimJmt7QAxhg97AgGRPhKnwNJv4Ch%2FiB45kPAiEAvyYb7Wd2OX80dq%2FT3SgXBjL7WWmCJ7Vn0Etk3KNcDYAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLelG2j%2Bjb1ERKd1iSrcA7N6dlj2b4X4NCFsoEstlPXvPxfHQnun8qJy6J8KdeK7ttBmv%2BJIwgvImirI1B0Ad%2FIS6b%2FZkwtEOY8F26iIdt3e4zPRTvlsF1tDHVqjP6lkxb5gsSP%2BWqySZhFW2LvFf8p4%2F%2F%2F57Qb86ivD0A%2FnV0BR7xZiO19CkAz5hAda9f6HpxV08A5XoD2y%2F30f8LLDU%2BH%2B5EE6dlBODdRGIAIzPiu0rE%2FXCvCQQ3XKaAOZnlL%2BBJuoOGfsFYcIkNxgRYbpsEg9bez%2BrhT9gDbAfvV%2BO8E4xY3vU201wV%2F6L9NkGLvxOg4ZWG%2Fxzeo0U6851iVZ3RCRbKwk%2F%2BA1ne4izQzMiyP0%2BKYVaBQODj1CGIxcMzvQ%2BEe2%2ByHrmieVPFzN%2FnsSq8IRgUAQ%2FFx2fObeOeH5Py98YPOgFghx1vFurxJzr2dyCnTHFYexSCygaWrdEVNd9sSXoITQINhhN60EtWIJFc21sIV1l5bcjEXFWzRtk%2FD%2B1arL3BqjDR7n0uHYegLm%2BA2ZkqXs02cMevZEf4E1GvU9a0XT5fMMOaEiK7JzTQErVg5%2FqcLfPUI76vTsQb52bMlNQ%2ByncsIzft17nveN27W%2BWquotYDDZahq4GP9ujE8Fjzk2eWqiF8DnUo4ML%2B749QGOqUB34odByEi8cQnP%2BIczT2C17AjniM%2FJo4MJ1eojqIwWfJ7o%2FbO%2FvvVJ90zAHELawwwQIrwxCshIDwMOxiiav1pd1OpR1MsTQFOctWCO0zJxijY9FxBTgSwNk0kN2aDQ7XK62mdg6lWopVE%2BBZwh%2Bxqa7G5zAerMidXgbZkcv9LuQpwULw0RmwLo9NpdPztiwJ92JyuxuQo6TgqSbXQCFdOTqCZJbgW&X-Amz-Signature=622e0999240b4a9629abd903fb8e3fed19592e8be4bba38c2c8180421b00d29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQWRRIW%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIE%2FVy9%2FgeimJmt7QAxhg97AgGRPhKnwNJv4Ch%2FiB45kPAiEAvyYb7Wd2OX80dq%2FT3SgXBjL7WWmCJ7Vn0Etk3KNcDYAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLelG2j%2Bjb1ERKd1iSrcA7N6dlj2b4X4NCFsoEstlPXvPxfHQnun8qJy6J8KdeK7ttBmv%2BJIwgvImirI1B0Ad%2FIS6b%2FZkwtEOY8F26iIdt3e4zPRTvlsF1tDHVqjP6lkxb5gsSP%2BWqySZhFW2LvFf8p4%2F%2F%2F57Qb86ivD0A%2FnV0BR7xZiO19CkAz5hAda9f6HpxV08A5XoD2y%2F30f8LLDU%2BH%2B5EE6dlBODdRGIAIzPiu0rE%2FXCvCQQ3XKaAOZnlL%2BBJuoOGfsFYcIkNxgRYbpsEg9bez%2BrhT9gDbAfvV%2BO8E4xY3vU201wV%2F6L9NkGLvxOg4ZWG%2Fxzeo0U6851iVZ3RCRbKwk%2F%2BA1ne4izQzMiyP0%2BKYVaBQODj1CGIxcMzvQ%2BEe2%2ByHrmieVPFzN%2FnsSq8IRgUAQ%2FFx2fObeOeH5Py98YPOgFghx1vFurxJzr2dyCnTHFYexSCygaWrdEVNd9sSXoITQINhhN60EtWIJFc21sIV1l5bcjEXFWzRtk%2FD%2B1arL3BqjDR7n0uHYegLm%2BA2ZkqXs02cMevZEf4E1GvU9a0XT5fMMOaEiK7JzTQErVg5%2FqcLfPUI76vTsQb52bMlNQ%2ByncsIzft17nveN27W%2BWquotYDDZahq4GP9ujE8Fjzk2eWqiF8DnUo4ML%2B749QGOqUB34odByEi8cQnP%2BIczT2C17AjniM%2FJo4MJ1eojqIwWfJ7o%2FbO%2FvvVJ90zAHELawwwQIrwxCshIDwMOxiiav1pd1OpR1MsTQFOctWCO0zJxijY9FxBTgSwNk0kN2aDQ7XK62mdg6lWopVE%2BBZwh%2Bxqa7G5zAerMidXgbZkcv9LuQpwULw0RmwLo9NpdPztiwJ92JyuxuQo6TgqSbXQCFdOTqCZJbgW&X-Amz-Signature=6aeb7339c94bbb58f84e6eadadcc4f551077a80268514a58b000a50b67ad4815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V6ZGWI7%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T031213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIBYWml%2FoE5kUbUYS31qK6OmNblqQ4eWdSwMAuHy1aQ7XAiBqwjvRBqra03qa8LuuofNaxtqctChQ6yC6BEPGgXxinCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSs5HlWOAeRqHkXVzKtwD3T%2Bcx7DgUs6fZySpam18RYYKrxSBcwhTLgJ7Hm%2B1xwbK8jnNX%2Fn%2FkoHeKKFZXA5CSx7LBowFhg6EHP9aid3V0f5I4VS3t6NCx7jLys4Z%2FqnsKCbzcAZ2hdtAYwEywGHsRxk38r40Wi4EFnYgrjsVTGytW7pPgLI%2Bm6TSPtKXfQCRUJ95xKWDFeuI6jAQn5QDkhe92lJ0MRies%2BRjWdCnobgbKTDH1VG1wD4YvRSjl7ZhmB6DYHYVJCsJtkIdmWDrLOEDKF1smL3pxnXqpOYNsn52wlS5zEJpxl4MXM9rUtBCLrnkJFbChw0NuAEbO%2FYsqF1N%2BGOijvkKgQoa92Ty82%2B5D5kcNLdtqym2uSz8EjENNyZo%2FAOUJvaztolK1J%2Bxy95yCyztHAA8%2Bd%2BLO13ObBo70%2BT8LQJHEAfrLuNmX6gG%2Fh3ycMiQDxo9n94uqbtzBxGRbb%2BwlxZ68xIJ9yxpbOPZXkICahYjragH7VlmS4MaPOlahW%2FV%2B3YWU13KwgVoCnOJ6r4P9i%2Fk8TYjP6LTPMGpXNdqhwdjoTmtFB2%2F6M7tL59752buqQfHBWynBxk6CkvpZAXH4kmbBJDptKUmBw1xVaH14JgglrahHCwoAwZY4iYsW3doMXQWkfkwtLvj1AY6pgGz9yHcJFTegOH3pa034ecB0l7lUO3hgaE0NMOBPzjKBKA9pZr5R7Ok8nQFdAGYu1fZ6qSVIAdgYVQ6k2lJQkorXqlvtZ6fHokptIuYftTaKnekM5gdt9t8LqpeyB3kg3myuN4AxKTbxlOQR6cG1yz8%2FS5KLsIZNCWRoiQx0NqmzQ57vPE0ouqxT%2BPefyWpZgWVtpqAVY7kcAAVGqbEzLS4HTzggE4r&X-Amz-Signature=2cc3aa8efcaf5e81579826f5abf5e02e7d9d9adc2cee6ff3d018b243a62969f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

