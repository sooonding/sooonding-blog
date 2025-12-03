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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEECXSM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIALqAtUev%2BnbQ36dFY8iXeapwMuQclqU1g%2F4MKf7KkyeAiAXNXK2Oo1RhDi3CIPOLGc84YDiSLikOsjggTUgnRBvSir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIML8aClJ%2BL7eoA5eDHKtwDuhbaWL8GlELWkDUKNMo7dDtob1htlfoVDo3AKRgMJPKIcqqP6o8BfOlUT%2FR%2FIPA%2FRcsi7wdS6aaw7A2b3kX1pEAZIdHc1%2FI4uXAfcH97rZMfCrl8CSTb4kf2Hq0QqgVWfiKRcrJ2kAVoWDP8rWjwIRBainJ0r5L%2BtBCkOIWlIHOI7QfCil374JdZAkQcH93JjkAwgAh4hOxB5K6M2INPltYPj6l%2BEyP3M8RPwKl5gyy0F0jqJ5l1HWdRQt7LGgPRvLy0hgo5yItJmrmcslErjBKYUa%2Bj%2FZdY7rYD8aQoPlY1HDQTdj3Y9TKXQWLMwACc0HcbtsW7JU8wX%2BD%2BcFYP2CwNnqnnt73UuRevcKJiqaXvHn%2BV71sa4HNwGQJOH3%2Bac1ld%2Ba9yEOeFG%2BUGhMDlmr%2BgUE5vxwML0imWQMY663M%2F4quPZolOiEmh2RpLTWZmb06O%2FCWtnnut5WKphcZqh0oRk6oUg0PDpnxYsZQfC%2FVJARMeIS%2B%2B9PvGT00ruNQG45EQnEeYl5oiDDaq8yRMQIXylDRqRMpEudsLgzHtijzS9gdgLYhlUaE1WcHmYQXHVTjV0%2F8Gd8zmpqGYfKCzdljif%2B6hODpgKrq06%2FSOinYGTG%2FH%2F6af%2FGOO8eIwhZS%2ByQY6pgGATq0kAmBlmdwd60surAVnvmPc%2FS2aUn7LYRrjFcv9r7QVFvB%2Fvg5FBHlHTQcHw0XcQHlEEoMCLBJlt4kHkAEasqM8brm9RHMcmKfOrE%2BxfOyeLxEEwPEXJkY%2BU0o5XfDwG45mSR2YwezBogUUuxiMl2Gxuwsx%2BhUS1lBiD5jK4BarR7fujgB9La8HAGTgj8dsrModTTvh%2BWdJuZccLwOsvAcruiTy&X-Amz-Signature=757c35b0380559c9852a13803ce8c6ee2533aefa361047e78dd1c08fe1f01953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETDDEY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCONmkM1hPM30V%2BIh1%2Bx%2FMK03bbE%2FJ5xfzNzfnY1dt7cQIgLVgJEPISeb5RYVpgpGHEzKjRfZ98qCz3V%2BsYzJzOtiUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJBY3G2JyMlB4HCXRSrcA1yndZwWHZep%2BhwUNdSPgMy9aREa1YgoBQ1WzjnRDp0qPViKoLyhM2nJZN4ZLRuNWEehs%2B%2Bh48VUg1tdp9%2F%2FBVr217ZBe4aL%2BZnJ1Abv4PmM2lDfPMzS8E4%2BOgcvU%2F0E5%2F71MNmTBUK4Jevggf5gbwZJKgg6%2B0V9%2BxzVov2Ke9Pi%2BJz50Vzlq92adOB%2Fy%2BUXpSIf%2FfcsDLzjE%2F87HunSqAvo49FPjB14arjdy9KwR0xg5M9qNPLX8pV%2BjFbTwvHs%2FCEbJ%2B6M4XYSj1477KypTij7UV6kxdyDhVDPDp%2F%2F2Slq6OwD8Sy7nwmnZYD0PyA1z%2B%2Fpws8NiWG%2BvAjM9zfPeq%2BwA0IHOJk3s6G8VkYybRkmztcvK6qZHT8MOcGdodo7K%2F6GBAE6oNyk57bq1J4SmBS7GNoKdRAj3mprQOA4iYQSsKgR6ieL5AX%2FSVKzGuOpnEPbqMXHjg612uiganDmeWARLDCyTgBe4Ji6Df6CKB4gfNgRJij2LkBW1pIQWDOYykwph6jRzT9l44B0w%2Fgjvkc%2BgXM1YngjE2T9S83tqbj4QBO0LTS6vauM%2FnPWW3qmzuqVpB2sUMLh13G%2BGUNUq9r5ca30YVEqKAL5ZJs4DoDonVcXLerbQysMbyRKMJiVvskGOqUB3eraW7HKLFfRj7cNEz%2BXDwV2WpWTj2eeXyU8EypxkVcC0mvlQDS0bqyY3NvldUZNHQV5y%2FrOB2UZuZpqsUgILxnWLQqCkwi8M3cEfDxxw7OyG60NU0OxCcFjsAp%2BSXqaainEZn2LFFFInnQyhhhCt%2BL8ocQeT%2FTjL9tr9U0G5qJ9I9piwDJy24Er9OgVKkTy%2BGPxKdRohMYbJiOcs0wIlCyUrWzx&X-Amz-Signature=bcf908e166db0d8e185f5f53d8dc201b9a7285f264c0b61553f76c767f100a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETDDEY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCONmkM1hPM30V%2BIh1%2Bx%2FMK03bbE%2FJ5xfzNzfnY1dt7cQIgLVgJEPISeb5RYVpgpGHEzKjRfZ98qCz3V%2BsYzJzOtiUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJBY3G2JyMlB4HCXRSrcA1yndZwWHZep%2BhwUNdSPgMy9aREa1YgoBQ1WzjnRDp0qPViKoLyhM2nJZN4ZLRuNWEehs%2B%2Bh48VUg1tdp9%2F%2FBVr217ZBe4aL%2BZnJ1Abv4PmM2lDfPMzS8E4%2BOgcvU%2F0E5%2F71MNmTBUK4Jevggf5gbwZJKgg6%2B0V9%2BxzVov2Ke9Pi%2BJz50Vzlq92adOB%2Fy%2BUXpSIf%2FfcsDLzjE%2F87HunSqAvo49FPjB14arjdy9KwR0xg5M9qNPLX8pV%2BjFbTwvHs%2FCEbJ%2B6M4XYSj1477KypTij7UV6kxdyDhVDPDp%2F%2F2Slq6OwD8Sy7nwmnZYD0PyA1z%2B%2Fpws8NiWG%2BvAjM9zfPeq%2BwA0IHOJk3s6G8VkYybRkmztcvK6qZHT8MOcGdodo7K%2F6GBAE6oNyk57bq1J4SmBS7GNoKdRAj3mprQOA4iYQSsKgR6ieL5AX%2FSVKzGuOpnEPbqMXHjg612uiganDmeWARLDCyTgBe4Ji6Df6CKB4gfNgRJij2LkBW1pIQWDOYykwph6jRzT9l44B0w%2Fgjvkc%2BgXM1YngjE2T9S83tqbj4QBO0LTS6vauM%2FnPWW3qmzuqVpB2sUMLh13G%2BGUNUq9r5ca30YVEqKAL5ZJs4DoDonVcXLerbQysMbyRKMJiVvskGOqUB3eraW7HKLFfRj7cNEz%2BXDwV2WpWTj2eeXyU8EypxkVcC0mvlQDS0bqyY3NvldUZNHQV5y%2FrOB2UZuZpqsUgILxnWLQqCkwi8M3cEfDxxw7OyG60NU0OxCcFjsAp%2BSXqaainEZn2LFFFInnQyhhhCt%2BL8ocQeT%2FTjL9tr9U0G5qJ9I9piwDJy24Er9OgVKkTy%2BGPxKdRohMYbJiOcs0wIlCyUrWzx&X-Amz-Signature=da9406207957c9be0723f0e1aecab3ea9276424e4f7fc03f564b9a52f3a1666c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETDDEY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCONmkM1hPM30V%2BIh1%2Bx%2FMK03bbE%2FJ5xfzNzfnY1dt7cQIgLVgJEPISeb5RYVpgpGHEzKjRfZ98qCz3V%2BsYzJzOtiUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJBY3G2JyMlB4HCXRSrcA1yndZwWHZep%2BhwUNdSPgMy9aREa1YgoBQ1WzjnRDp0qPViKoLyhM2nJZN4ZLRuNWEehs%2B%2Bh48VUg1tdp9%2F%2FBVr217ZBe4aL%2BZnJ1Abv4PmM2lDfPMzS8E4%2BOgcvU%2F0E5%2F71MNmTBUK4Jevggf5gbwZJKgg6%2B0V9%2BxzVov2Ke9Pi%2BJz50Vzlq92adOB%2Fy%2BUXpSIf%2FfcsDLzjE%2F87HunSqAvo49FPjB14arjdy9KwR0xg5M9qNPLX8pV%2BjFbTwvHs%2FCEbJ%2B6M4XYSj1477KypTij7UV6kxdyDhVDPDp%2F%2F2Slq6OwD8Sy7nwmnZYD0PyA1z%2B%2Fpws8NiWG%2BvAjM9zfPeq%2BwA0IHOJk3s6G8VkYybRkmztcvK6qZHT8MOcGdodo7K%2F6GBAE6oNyk57bq1J4SmBS7GNoKdRAj3mprQOA4iYQSsKgR6ieL5AX%2FSVKzGuOpnEPbqMXHjg612uiganDmeWARLDCyTgBe4Ji6Df6CKB4gfNgRJij2LkBW1pIQWDOYykwph6jRzT9l44B0w%2Fgjvkc%2BgXM1YngjE2T9S83tqbj4QBO0LTS6vauM%2FnPWW3qmzuqVpB2sUMLh13G%2BGUNUq9r5ca30YVEqKAL5ZJs4DoDonVcXLerbQysMbyRKMJiVvskGOqUB3eraW7HKLFfRj7cNEz%2BXDwV2WpWTj2eeXyU8EypxkVcC0mvlQDS0bqyY3NvldUZNHQV5y%2FrOB2UZuZpqsUgILxnWLQqCkwi8M3cEfDxxw7OyG60NU0OxCcFjsAp%2BSXqaainEZn2LFFFInnQyhhhCt%2BL8ocQeT%2FTjL9tr9U0G5qJ9I9piwDJy24Er9OgVKkTy%2BGPxKdRohMYbJiOcs0wIlCyUrWzx&X-Amz-Signature=eade9a95a4bb046644d80c3245aeb6121b0ebfccce5e704ee6d6bdb9aab65789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETDDEY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCONmkM1hPM30V%2BIh1%2Bx%2FMK03bbE%2FJ5xfzNzfnY1dt7cQIgLVgJEPISeb5RYVpgpGHEzKjRfZ98qCz3V%2BsYzJzOtiUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJBY3G2JyMlB4HCXRSrcA1yndZwWHZep%2BhwUNdSPgMy9aREa1YgoBQ1WzjnRDp0qPViKoLyhM2nJZN4ZLRuNWEehs%2B%2Bh48VUg1tdp9%2F%2FBVr217ZBe4aL%2BZnJ1Abv4PmM2lDfPMzS8E4%2BOgcvU%2F0E5%2F71MNmTBUK4Jevggf5gbwZJKgg6%2B0V9%2BxzVov2Ke9Pi%2BJz50Vzlq92adOB%2Fy%2BUXpSIf%2FfcsDLzjE%2F87HunSqAvo49FPjB14arjdy9KwR0xg5M9qNPLX8pV%2BjFbTwvHs%2FCEbJ%2B6M4XYSj1477KypTij7UV6kxdyDhVDPDp%2F%2F2Slq6OwD8Sy7nwmnZYD0PyA1z%2B%2Fpws8NiWG%2BvAjM9zfPeq%2BwA0IHOJk3s6G8VkYybRkmztcvK6qZHT8MOcGdodo7K%2F6GBAE6oNyk57bq1J4SmBS7GNoKdRAj3mprQOA4iYQSsKgR6ieL5AX%2FSVKzGuOpnEPbqMXHjg612uiganDmeWARLDCyTgBe4Ji6Df6CKB4gfNgRJij2LkBW1pIQWDOYykwph6jRzT9l44B0w%2Fgjvkc%2BgXM1YngjE2T9S83tqbj4QBO0LTS6vauM%2FnPWW3qmzuqVpB2sUMLh13G%2BGUNUq9r5ca30YVEqKAL5ZJs4DoDonVcXLerbQysMbyRKMJiVvskGOqUB3eraW7HKLFfRj7cNEz%2BXDwV2WpWTj2eeXyU8EypxkVcC0mvlQDS0bqyY3NvldUZNHQV5y%2FrOB2UZuZpqsUgILxnWLQqCkwi8M3cEfDxxw7OyG60NU0OxCcFjsAp%2BSXqaainEZn2LFFFInnQyhhhCt%2BL8ocQeT%2FTjL9tr9U0G5qJ9I9piwDJy24Er9OgVKkTy%2BGPxKdRohMYbJiOcs0wIlCyUrWzx&X-Amz-Signature=68b26585664b6bd62547f3bf0278108cdb460ddc1566672b6134cc896a721257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETDDEY2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCONmkM1hPM30V%2BIh1%2Bx%2FMK03bbE%2FJ5xfzNzfnY1dt7cQIgLVgJEPISeb5RYVpgpGHEzKjRfZ98qCz3V%2BsYzJzOtiUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJBY3G2JyMlB4HCXRSrcA1yndZwWHZep%2BhwUNdSPgMy9aREa1YgoBQ1WzjnRDp0qPViKoLyhM2nJZN4ZLRuNWEehs%2B%2Bh48VUg1tdp9%2F%2FBVr217ZBe4aL%2BZnJ1Abv4PmM2lDfPMzS8E4%2BOgcvU%2F0E5%2F71MNmTBUK4Jevggf5gbwZJKgg6%2B0V9%2BxzVov2Ke9Pi%2BJz50Vzlq92adOB%2Fy%2BUXpSIf%2FfcsDLzjE%2F87HunSqAvo49FPjB14arjdy9KwR0xg5M9qNPLX8pV%2BjFbTwvHs%2FCEbJ%2B6M4XYSj1477KypTij7UV6kxdyDhVDPDp%2F%2F2Slq6OwD8Sy7nwmnZYD0PyA1z%2B%2Fpws8NiWG%2BvAjM9zfPeq%2BwA0IHOJk3s6G8VkYybRkmztcvK6qZHT8MOcGdodo7K%2F6GBAE6oNyk57bq1J4SmBS7GNoKdRAj3mprQOA4iYQSsKgR6ieL5AX%2FSVKzGuOpnEPbqMXHjg612uiganDmeWARLDCyTgBe4Ji6Df6CKB4gfNgRJij2LkBW1pIQWDOYykwph6jRzT9l44B0w%2Fgjvkc%2BgXM1YngjE2T9S83tqbj4QBO0LTS6vauM%2FnPWW3qmzuqVpB2sUMLh13G%2BGUNUq9r5ca30YVEqKAL5ZJs4DoDonVcXLerbQysMbyRKMJiVvskGOqUB3eraW7HKLFfRj7cNEz%2BXDwV2WpWTj2eeXyU8EypxkVcC0mvlQDS0bqyY3NvldUZNHQV5y%2FrOB2UZuZpqsUgILxnWLQqCkwi8M3cEfDxxw7OyG60NU0OxCcFjsAp%2BSXqaainEZn2LFFFInnQyhhhCt%2BL8ocQeT%2FTjL9tr9U0G5qJ9I9piwDJy24Er9OgVKkTy%2BGPxKdRohMYbJiOcs0wIlCyUrWzx&X-Amz-Signature=cc7c53505af0b132eef5b5b53fd3beb6130688a65b6af153a8f411814a1b8ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEECXSM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIALqAtUev%2BnbQ36dFY8iXeapwMuQclqU1g%2F4MKf7KkyeAiAXNXK2Oo1RhDi3CIPOLGc84YDiSLikOsjggTUgnRBvSir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIML8aClJ%2BL7eoA5eDHKtwDuhbaWL8GlELWkDUKNMo7dDtob1htlfoVDo3AKRgMJPKIcqqP6o8BfOlUT%2FR%2FIPA%2FRcsi7wdS6aaw7A2b3kX1pEAZIdHc1%2FI4uXAfcH97rZMfCrl8CSTb4kf2Hq0QqgVWfiKRcrJ2kAVoWDP8rWjwIRBainJ0r5L%2BtBCkOIWlIHOI7QfCil374JdZAkQcH93JjkAwgAh4hOxB5K6M2INPltYPj6l%2BEyP3M8RPwKl5gyy0F0jqJ5l1HWdRQt7LGgPRvLy0hgo5yItJmrmcslErjBKYUa%2Bj%2FZdY7rYD8aQoPlY1HDQTdj3Y9TKXQWLMwACc0HcbtsW7JU8wX%2BD%2BcFYP2CwNnqnnt73UuRevcKJiqaXvHn%2BV71sa4HNwGQJOH3%2Bac1ld%2Ba9yEOeFG%2BUGhMDlmr%2BgUE5vxwML0imWQMY663M%2F4quPZolOiEmh2RpLTWZmb06O%2FCWtnnut5WKphcZqh0oRk6oUg0PDpnxYsZQfC%2FVJARMeIS%2B%2B9PvGT00ruNQG45EQnEeYl5oiDDaq8yRMQIXylDRqRMpEudsLgzHtijzS9gdgLYhlUaE1WcHmYQXHVTjV0%2F8Gd8zmpqGYfKCzdljif%2B6hODpgKrq06%2FSOinYGTG%2FH%2F6af%2FGOO8eIwhZS%2ByQY6pgGATq0kAmBlmdwd60surAVnvmPc%2FS2aUn7LYRrjFcv9r7QVFvB%2Fvg5FBHlHTQcHw0XcQHlEEoMCLBJlt4kHkAEasqM8brm9RHMcmKfOrE%2BxfOyeLxEEwPEXJkY%2BU0o5XfDwG45mSR2YwezBogUUuxiMl2Gxuwsx%2BhUS1lBiD5jK4BarR7fujgB9La8HAGTgj8dsrModTTvh%2BWdJuZccLwOsvAcruiTy&X-Amz-Signature=924502b0d89da3e965962d674097cbaf17eeaee6184d4d756527234bc7d6acad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

