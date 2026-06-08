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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLRRN6ZC%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvxqRVXv8%2F5YTH1uNSS92XKoyXd5mGpCK2iEVTS5sFgIgVp8bYhx7qBKnjv5K1ydJQ0hepCAPaO0UHUbjcbKT2ukqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8AzCdoRUNP9mkjsircAx3x31Rb2eUYO4lWKHHKzEuqlRyM5lqNoYNnhUwIMN5nCavomEe7jZj0VSRxUheMIxL6E0wMjXVJ%2FYFI%2FcaNLSd9qQgrWEn2D%2F7%2Fp7otKVP6GUzMeamxhTQ%2FS7rgKXHcrjrGAddXee5PciHHsRHZ%2BzsWfE7W0K5cbnbmVQFK%2BD22TJxdpFQ2W1tlhgpbO8gJm%2FNAmasW87le64rMpsZ%2Fs3Za5DYA3yk3rtf0vLWzSI%2BgPpEuKZO8kotuQ7yPqKUWM%2BywvUmZ0PXy%2BVa1flNXz0yH5HOwCRDkJBLZjh0RNwtPjhlZpTncG0W%2BkEbdOP1F92Yleuvapw8OztiP8Pp495P8ZFACld%2FIbXw9KSQRE0I2y4zbMoq1ucE3x97XD%2BzXkJEK1y8VzXNZmrJXhXTgwK%2BBcKDqRQ%2BKz0ISGSmN5PQJ0nBS8YqogQpfq42xqSZiZ6UHaboQm2z8gnMJGYLkHq1qR6l461WiTy40VaoTd1ZXov8MXf24uHu3VuSCPjA7%2FbpP%2BKbdeYMnbZKHoutJQASCwafAF3xdplAKYLMxwCx8R%2FyQdziDAo9EKAZhQR7F27wE%2BhhieT0iVtbrcV6ieUQqX5nKam6APzLOA6famdzHPGHyVScbM%2FemfExcMLr5mNEGOqUB2%2BXUjLMWztaIvCrOOvuGJiNXNy%2FUIpTUBeyGXkmCtvUnYWbQDsu52TDKsjhpW%2B3l8lXur3PlByhmClgTm0JopTCPgY%2Brwv%2FVxDVtFPf6HYTBudYzyScaCmCfmQZf%2BGE6M1cJO3kGGWdbiOTIjmb6ELEMeF2RGhcv1rMI95n5EoKtIOqEi5XjBq4dZma%2BypYgThCB%2F1xc6V%2BnrUXM%2Bam%2Bwf1U49HX&X-Amz-Signature=f3e545b269235f820eec4cdbeaede860ceb445d7343f5309ba6f3cc571158fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVFJB6%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5FS9Z0P6idGTxL86Nb9RrVVJwEmTJjjCXPhRJB9yo7AiAdVuNtQ5KgnsbYHmSzFaSC%2F2pwupsywaw9IWtzG91XZCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoXQHJ5HSeJhSyKsKtwDrefcW1dz%2FRXmwUng3Pus4hJ1xUGtQqSKGdh%2BwXlxOfZ6HnS2trw5tW0XWqJXi25HdYMKoPQIUIRYxdTP90hdjQUD153KqimPXNAqRo3oFJoJaxcD1JOn7MEXi49DOgWjROp1Yo1oAg66%2BSArcgygQWeluCjaNLdo%2B6ZILfG2ih%2F0N0nMy6n3cWi%2BvqiHJUSEbNfLizcDe8LW8cX%2BD28jOgVp9lzJEXj57qIlyw3lNpxCnW3wbEMtzoVDTYNAY0M%2FzYtgpTRmyudzo1DAsevZS2fIg%2FOEWwNWSnNy0eq0H69vQACI6PC04JoekTCXrlP6UqiR2uayftSwmOOOOUfNS0oz7kkVbbrjvdEPy89b3Q34NhhsmILEs%2B1K2kMwuVyzXZANOP7JGEGR2zQ53amApIj%2BI7lswxXxE53qD2TmzO%2FAKGKPvrfbOTH3L%2FKEbLmkr0sblssT1fD3lQvtpwhzvSN6Dsl5SvrbHg6F6T3rn6NSn7Y5fDTtZrPPmCXXslSJ5IyhbnA37eQ4ExsX2jEKTQS0hLwM5MU%2F5R0GhWS%2BXjazuzC%2FmeTW%2FCBlWRYhwPj%2Bl8F%2BmjaEkw5O8HznZMs8CJu7%2BzLWK9M3U1Hw6UocDgYgixFnQTvsyhZObuAw%2F%2ByY0QY6pgGhY2gZkSW7xIu9MmyC9GMaVDLU2jFba8T1boCuNvKADqG%2FAQL%2Fvw9p2trdvBIr7y3xbcmQ%2BFpVqDJCNjVYx7bt1JELsMwjhKx7DXft5BFmwya4CqF7CsLo5sEsPEZrmTZxEqHnxQWO5S4s%2B%2Fak7MGtlkXYit9scSa09Z%2BxNiGpuCdPgWHB6vOC6u5fyajIsFEqaAZLO1PpjY%2BcSFc8FI%2FE1rOgv%2B9A&X-Amz-Signature=597957eecac01e0f5e46b833e4d33a76abb7d74c51be203cc299bfb6328373ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVFJB6%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5FS9Z0P6idGTxL86Nb9RrVVJwEmTJjjCXPhRJB9yo7AiAdVuNtQ5KgnsbYHmSzFaSC%2F2pwupsywaw9IWtzG91XZCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoXQHJ5HSeJhSyKsKtwDrefcW1dz%2FRXmwUng3Pus4hJ1xUGtQqSKGdh%2BwXlxOfZ6HnS2trw5tW0XWqJXi25HdYMKoPQIUIRYxdTP90hdjQUD153KqimPXNAqRo3oFJoJaxcD1JOn7MEXi49DOgWjROp1Yo1oAg66%2BSArcgygQWeluCjaNLdo%2B6ZILfG2ih%2F0N0nMy6n3cWi%2BvqiHJUSEbNfLizcDe8LW8cX%2BD28jOgVp9lzJEXj57qIlyw3lNpxCnW3wbEMtzoVDTYNAY0M%2FzYtgpTRmyudzo1DAsevZS2fIg%2FOEWwNWSnNy0eq0H69vQACI6PC04JoekTCXrlP6UqiR2uayftSwmOOOOUfNS0oz7kkVbbrjvdEPy89b3Q34NhhsmILEs%2B1K2kMwuVyzXZANOP7JGEGR2zQ53amApIj%2BI7lswxXxE53qD2TmzO%2FAKGKPvrfbOTH3L%2FKEbLmkr0sblssT1fD3lQvtpwhzvSN6Dsl5SvrbHg6F6T3rn6NSn7Y5fDTtZrPPmCXXslSJ5IyhbnA37eQ4ExsX2jEKTQS0hLwM5MU%2F5R0GhWS%2BXjazuzC%2FmeTW%2FCBlWRYhwPj%2Bl8F%2BmjaEkw5O8HznZMs8CJu7%2BzLWK9M3U1Hw6UocDgYgixFnQTvsyhZObuAw%2F%2ByY0QY6pgGhY2gZkSW7xIu9MmyC9GMaVDLU2jFba8T1boCuNvKADqG%2FAQL%2Fvw9p2trdvBIr7y3xbcmQ%2BFpVqDJCNjVYx7bt1JELsMwjhKx7DXft5BFmwya4CqF7CsLo5sEsPEZrmTZxEqHnxQWO5S4s%2B%2Fak7MGtlkXYit9scSa09Z%2BxNiGpuCdPgWHB6vOC6u5fyajIsFEqaAZLO1PpjY%2BcSFc8FI%2FE1rOgv%2B9A&X-Amz-Signature=32572c2c7e5d32495a8a8e8b23b310969cab8b446464fcfbcdfd94eaa01b217c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVFJB6%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5FS9Z0P6idGTxL86Nb9RrVVJwEmTJjjCXPhRJB9yo7AiAdVuNtQ5KgnsbYHmSzFaSC%2F2pwupsywaw9IWtzG91XZCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoXQHJ5HSeJhSyKsKtwDrefcW1dz%2FRXmwUng3Pus4hJ1xUGtQqSKGdh%2BwXlxOfZ6HnS2trw5tW0XWqJXi25HdYMKoPQIUIRYxdTP90hdjQUD153KqimPXNAqRo3oFJoJaxcD1JOn7MEXi49DOgWjROp1Yo1oAg66%2BSArcgygQWeluCjaNLdo%2B6ZILfG2ih%2F0N0nMy6n3cWi%2BvqiHJUSEbNfLizcDe8LW8cX%2BD28jOgVp9lzJEXj57qIlyw3lNpxCnW3wbEMtzoVDTYNAY0M%2FzYtgpTRmyudzo1DAsevZS2fIg%2FOEWwNWSnNy0eq0H69vQACI6PC04JoekTCXrlP6UqiR2uayftSwmOOOOUfNS0oz7kkVbbrjvdEPy89b3Q34NhhsmILEs%2B1K2kMwuVyzXZANOP7JGEGR2zQ53amApIj%2BI7lswxXxE53qD2TmzO%2FAKGKPvrfbOTH3L%2FKEbLmkr0sblssT1fD3lQvtpwhzvSN6Dsl5SvrbHg6F6T3rn6NSn7Y5fDTtZrPPmCXXslSJ5IyhbnA37eQ4ExsX2jEKTQS0hLwM5MU%2F5R0GhWS%2BXjazuzC%2FmeTW%2FCBlWRYhwPj%2Bl8F%2BmjaEkw5O8HznZMs8CJu7%2BzLWK9M3U1Hw6UocDgYgixFnQTvsyhZObuAw%2F%2ByY0QY6pgGhY2gZkSW7xIu9MmyC9GMaVDLU2jFba8T1boCuNvKADqG%2FAQL%2Fvw9p2trdvBIr7y3xbcmQ%2BFpVqDJCNjVYx7bt1JELsMwjhKx7DXft5BFmwya4CqF7CsLo5sEsPEZrmTZxEqHnxQWO5S4s%2B%2Fak7MGtlkXYit9scSa09Z%2BxNiGpuCdPgWHB6vOC6u5fyajIsFEqaAZLO1PpjY%2BcSFc8FI%2FE1rOgv%2B9A&X-Amz-Signature=f126183345d6c06be195e1cb3126127cf138f7c83f6a2ca78bba92f26c02f8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVFJB6%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5FS9Z0P6idGTxL86Nb9RrVVJwEmTJjjCXPhRJB9yo7AiAdVuNtQ5KgnsbYHmSzFaSC%2F2pwupsywaw9IWtzG91XZCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoXQHJ5HSeJhSyKsKtwDrefcW1dz%2FRXmwUng3Pus4hJ1xUGtQqSKGdh%2BwXlxOfZ6HnS2trw5tW0XWqJXi25HdYMKoPQIUIRYxdTP90hdjQUD153KqimPXNAqRo3oFJoJaxcD1JOn7MEXi49DOgWjROp1Yo1oAg66%2BSArcgygQWeluCjaNLdo%2B6ZILfG2ih%2F0N0nMy6n3cWi%2BvqiHJUSEbNfLizcDe8LW8cX%2BD28jOgVp9lzJEXj57qIlyw3lNpxCnW3wbEMtzoVDTYNAY0M%2FzYtgpTRmyudzo1DAsevZS2fIg%2FOEWwNWSnNy0eq0H69vQACI6PC04JoekTCXrlP6UqiR2uayftSwmOOOOUfNS0oz7kkVbbrjvdEPy89b3Q34NhhsmILEs%2B1K2kMwuVyzXZANOP7JGEGR2zQ53amApIj%2BI7lswxXxE53qD2TmzO%2FAKGKPvrfbOTH3L%2FKEbLmkr0sblssT1fD3lQvtpwhzvSN6Dsl5SvrbHg6F6T3rn6NSn7Y5fDTtZrPPmCXXslSJ5IyhbnA37eQ4ExsX2jEKTQS0hLwM5MU%2F5R0GhWS%2BXjazuzC%2FmeTW%2FCBlWRYhwPj%2Bl8F%2BmjaEkw5O8HznZMs8CJu7%2BzLWK9M3U1Hw6UocDgYgixFnQTvsyhZObuAw%2F%2ByY0QY6pgGhY2gZkSW7xIu9MmyC9GMaVDLU2jFba8T1boCuNvKADqG%2FAQL%2Fvw9p2trdvBIr7y3xbcmQ%2BFpVqDJCNjVYx7bt1JELsMwjhKx7DXft5BFmwya4CqF7CsLo5sEsPEZrmTZxEqHnxQWO5S4s%2B%2Fak7MGtlkXYit9scSa09Z%2BxNiGpuCdPgWHB6vOC6u5fyajIsFEqaAZLO1PpjY%2BcSFc8FI%2FE1rOgv%2B9A&X-Amz-Signature=eaddf50919aac8e7ee37ed6d0e54d27c73935970389670a6d506e712785d90d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCVFJB6%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5FS9Z0P6idGTxL86Nb9RrVVJwEmTJjjCXPhRJB9yo7AiAdVuNtQ5KgnsbYHmSzFaSC%2F2pwupsywaw9IWtzG91XZCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdoXQHJ5HSeJhSyKsKtwDrefcW1dz%2FRXmwUng3Pus4hJ1xUGtQqSKGdh%2BwXlxOfZ6HnS2trw5tW0XWqJXi25HdYMKoPQIUIRYxdTP90hdjQUD153KqimPXNAqRo3oFJoJaxcD1JOn7MEXi49DOgWjROp1Yo1oAg66%2BSArcgygQWeluCjaNLdo%2B6ZILfG2ih%2F0N0nMy6n3cWi%2BvqiHJUSEbNfLizcDe8LW8cX%2BD28jOgVp9lzJEXj57qIlyw3lNpxCnW3wbEMtzoVDTYNAY0M%2FzYtgpTRmyudzo1DAsevZS2fIg%2FOEWwNWSnNy0eq0H69vQACI6PC04JoekTCXrlP6UqiR2uayftSwmOOOOUfNS0oz7kkVbbrjvdEPy89b3Q34NhhsmILEs%2B1K2kMwuVyzXZANOP7JGEGR2zQ53amApIj%2BI7lswxXxE53qD2TmzO%2FAKGKPvrfbOTH3L%2FKEbLmkr0sblssT1fD3lQvtpwhzvSN6Dsl5SvrbHg6F6T3rn6NSn7Y5fDTtZrPPmCXXslSJ5IyhbnA37eQ4ExsX2jEKTQS0hLwM5MU%2F5R0GhWS%2BXjazuzC%2FmeTW%2FCBlWRYhwPj%2Bl8F%2BmjaEkw5O8HznZMs8CJu7%2BzLWK9M3U1Hw6UocDgYgixFnQTvsyhZObuAw%2F%2ByY0QY6pgGhY2gZkSW7xIu9MmyC9GMaVDLU2jFba8T1boCuNvKADqG%2FAQL%2Fvw9p2trdvBIr7y3xbcmQ%2BFpVqDJCNjVYx7bt1JELsMwjhKx7DXft5BFmwya4CqF7CsLo5sEsPEZrmTZxEqHnxQWO5S4s%2B%2Fak7MGtlkXYit9scSa09Z%2BxNiGpuCdPgWHB6vOC6u5fyajIsFEqaAZLO1PpjY%2BcSFc8FI%2FE1rOgv%2B9A&X-Amz-Signature=03d592b0e4f2dd95db2ac45bf1682ddc211683ed107d27b0ed0129e1a4a901d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLRRN6ZC%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvxqRVXv8%2F5YTH1uNSS92XKoyXd5mGpCK2iEVTS5sFgIgVp8bYhx7qBKnjv5K1ydJQ0hepCAPaO0UHUbjcbKT2ukqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8AzCdoRUNP9mkjsircAx3x31Rb2eUYO4lWKHHKzEuqlRyM5lqNoYNnhUwIMN5nCavomEe7jZj0VSRxUheMIxL6E0wMjXVJ%2FYFI%2FcaNLSd9qQgrWEn2D%2F7%2Fp7otKVP6GUzMeamxhTQ%2FS7rgKXHcrjrGAddXee5PciHHsRHZ%2BzsWfE7W0K5cbnbmVQFK%2BD22TJxdpFQ2W1tlhgpbO8gJm%2FNAmasW87le64rMpsZ%2Fs3Za5DYA3yk3rtf0vLWzSI%2BgPpEuKZO8kotuQ7yPqKUWM%2BywvUmZ0PXy%2BVa1flNXz0yH5HOwCRDkJBLZjh0RNwtPjhlZpTncG0W%2BkEbdOP1F92Yleuvapw8OztiP8Pp495P8ZFACld%2FIbXw9KSQRE0I2y4zbMoq1ucE3x97XD%2BzXkJEK1y8VzXNZmrJXhXTgwK%2BBcKDqRQ%2BKz0ISGSmN5PQJ0nBS8YqogQpfq42xqSZiZ6UHaboQm2z8gnMJGYLkHq1qR6l461WiTy40VaoTd1ZXov8MXf24uHu3VuSCPjA7%2FbpP%2BKbdeYMnbZKHoutJQASCwafAF3xdplAKYLMxwCx8R%2FyQdziDAo9EKAZhQR7F27wE%2BhhieT0iVtbrcV6ieUQqX5nKam6APzLOA6famdzHPGHyVScbM%2FemfExcMLr5mNEGOqUB2%2BXUjLMWztaIvCrOOvuGJiNXNy%2FUIpTUBeyGXkmCtvUnYWbQDsu52TDKsjhpW%2B3l8lXur3PlByhmClgTm0JopTCPgY%2Brwv%2FVxDVtFPf6HYTBudYzyScaCmCfmQZf%2BGE6M1cJO3kGGWdbiOTIjmb6ELEMeF2RGhcv1rMI95n5EoKtIOqEi5XjBq4dZma%2BypYgThCB%2F1xc6V%2BnrUXM%2Bam%2Bwf1U49HX&X-Amz-Signature=cffa9264ae0731dc12003ec1b7f6baa01a45bea44b6af08361a0497f67cb0d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

