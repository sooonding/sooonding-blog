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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZLAI2Y%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfDpMGu81D0uuetaFLjeQ9D7eTcK9kFYDGiS1zBYKmAIhAJlZWin4tfgFts9U3vZqU7OgVTkkQNx2S2VuVjsSWmYuKv8DCH8QABoMNjM3NDIzMTgzODA1IgzWL0hDzdwlEfhdPEIq3ANKeotidpCnuD8qB%2Fkk8phViMiWWsQf0IGeTmplpY4QJLxP812dM%2FWgmaFm%2BhAwhNmPMaWh8%2BOxeQGK%2BcRx4t6VTknzjnl3keN%2BwD7hiNhPH5hVpMcFTC6K84n4eoQbZakbygn3BX88UcayBy0ALNzLIepEMcH4tIkAcNGB7zs3vN4HcUS%2BbZpHQyiww%2FFCwe55fmDj%2FMI%2BR%2BCC3g5HgiS8s%2Fve4WUmvKJq7%2Ba6BUH6NJukQ9p9%2FmiyC%2BJ3sxjSUO2psz7HotjQqMwfOBWABAkM6qWrsAdyBWPFs%2Bx217Nw1q7FkWRxA%2FvorWL%2BOYoifZu8T2inG4KfjqniJqACTWYSKYv9bkubIzNvJ7lFy98Y88N8mZRzmvuVRhSg9iGfiBNLxosyXoCNXhl4NTMMTROpZB6GpkwusJNHmaH5wAnKSTjTRkidjHMSKmJDD72pm%2F1MQ3dghmcw%2F6z5OeQJs6J6ZJ%2FlTvExJFOquRuy35QAHuG4GPh7IT1cbW0%2BAA7k%2B6iaCL3%2FZ2RuimhLaXtRsOCJvLn29JCJlOJNRMmnFPP6WouujWshggCoxTlLPN01EYEPKZnmQNRyzuyECiciI1jN1xnrPadHIs0UBPDOaxgqfViJq%2FJFT3Xu02jNLTDCmvXHBjqkAePQT8gaA1jTBgvGpxcXReUBy5auR8C2rlSrmLbX%2BfbBzFzhYKZ1iuV4FJv7AeXlt2t6W20ehrG2fjtmfdM6nEdKhEWWya3y8x4JHK%2FtPwnR%2FLTLSvYLLB4EGuJuzjFEJEfiPFVPbw8q9NKHGKzz7ILE5geisvlZWgoa2At4jHu9v6%2B6OGrloELEq7isrcU2pZX%2BlNXjrNHfAWe5sjoD%2F4xIAExB&X-Amz-Signature=82921d539c7d528ce0c4a5041e2c4c69a926a750e16a7858f38fbf8b0a4384d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JULVOFR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2z6tTQRuiW3z1Lr%2FFdn%2Bp49GJQUnmkZwAadJRAdtD%2BAiEA3RDrTYaimYHoMTYzsFtIDUKsrs1GcL7XmUzhWHY%2FIb0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIvhhZmIgTkJ3iI4fircA8BggbRSj1KHjoPFt0UjnLWCwejmJQKjp9JXGuJMS4WjQOiU5MMeII8fksYmtten8G0JFwLXbhLQzcAN95ClFfDM3iH2JoLa3V9SkkukSEouTireo5fNKgHQh0%2Fxxkb3g71o%2BAKfGdgs%2FAvwcJe%2FxWggWtdLjQEvRk8ivcra4wjlODQngd7HH6oUrBjpWODWL90P9kW55nxgqhpkxs%2BC4A%2BnCOcZcPaT05Rl08%2FGVCkkG1%2BjQ1wP%2F9NCrPRH5FUvKLyqfZY11mTYW%2FWmawlfiYov4N9bGD%2Fk2iFxhEenvNdTPY%2BZgHjkOOu1NSNcHHIYNdsR0eKKv%2FMMuFwBtr1ZYMfHSnSxpqZ2pj7xrMOx2PRRbvM9crObcAofyeL6vpklOSFCFkiKfr9u%2F8SDY25kr%2FKIj8PQGCYK9qIid7xh%2FaPIZcljzXThlrNu0jgxmkaoJLKy4jcS7VTQQlJXoTVn3Gyke%2BuvMq16EIDtNQuSjQashLU13C0Q%2FcgGEvHPm8G6acKn7YqzPZ5KDhAdb6GfX78BJKAuw13f3lfwTH%2FxPzPa2fHkkkds9OlloGYqcCuT8hXIpEqCarvbB5GAJjhI0m3zDhvUtBtIniT3CesefzTiXB%2BfHcqsx2w2AKDCMMaN9ccGOqUBldWLXeslfAfps9h1iW1B1HLYxSttPbm3Y44vBoOFsf2ESxFARiTxeGGqU%2Flsn4%2FzYikdo60W4WTyBpu3SjZwLOTa1Ry3BjOXjdJk524hmFNTmDt7ra2yndxdwv%2FQcy52gpid%2B5SoUHAqik1z9FRlXnDCnwZKVTWlT9YxJdd892EVHgldbBr63RyMO9FqILFc91i%2FzcE02TcgSl%2FSwysETfQhi1do&X-Amz-Signature=dc60d3da6771d34cb175541c17c8fb1ceb51869d084c0015ac4126c41d25e654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JULVOFR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2z6tTQRuiW3z1Lr%2FFdn%2Bp49GJQUnmkZwAadJRAdtD%2BAiEA3RDrTYaimYHoMTYzsFtIDUKsrs1GcL7XmUzhWHY%2FIb0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIvhhZmIgTkJ3iI4fircA8BggbRSj1KHjoPFt0UjnLWCwejmJQKjp9JXGuJMS4WjQOiU5MMeII8fksYmtten8G0JFwLXbhLQzcAN95ClFfDM3iH2JoLa3V9SkkukSEouTireo5fNKgHQh0%2Fxxkb3g71o%2BAKfGdgs%2FAvwcJe%2FxWggWtdLjQEvRk8ivcra4wjlODQngd7HH6oUrBjpWODWL90P9kW55nxgqhpkxs%2BC4A%2BnCOcZcPaT05Rl08%2FGVCkkG1%2BjQ1wP%2F9NCrPRH5FUvKLyqfZY11mTYW%2FWmawlfiYov4N9bGD%2Fk2iFxhEenvNdTPY%2BZgHjkOOu1NSNcHHIYNdsR0eKKv%2FMMuFwBtr1ZYMfHSnSxpqZ2pj7xrMOx2PRRbvM9crObcAofyeL6vpklOSFCFkiKfr9u%2F8SDY25kr%2FKIj8PQGCYK9qIid7xh%2FaPIZcljzXThlrNu0jgxmkaoJLKy4jcS7VTQQlJXoTVn3Gyke%2BuvMq16EIDtNQuSjQashLU13C0Q%2FcgGEvHPm8G6acKn7YqzPZ5KDhAdb6GfX78BJKAuw13f3lfwTH%2FxPzPa2fHkkkds9OlloGYqcCuT8hXIpEqCarvbB5GAJjhI0m3zDhvUtBtIniT3CesefzTiXB%2BfHcqsx2w2AKDCMMaN9ccGOqUBldWLXeslfAfps9h1iW1B1HLYxSttPbm3Y44vBoOFsf2ESxFARiTxeGGqU%2Flsn4%2FzYikdo60W4WTyBpu3SjZwLOTa1Ry3BjOXjdJk524hmFNTmDt7ra2yndxdwv%2FQcy52gpid%2B5SoUHAqik1z9FRlXnDCnwZKVTWlT9YxJdd892EVHgldbBr63RyMO9FqILFc91i%2FzcE02TcgSl%2FSwysETfQhi1do&X-Amz-Signature=91cb6a36d0642f2f2efb6fe1f73f294fc7bd55b43695bb435e92fbcc847c0f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JULVOFR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2z6tTQRuiW3z1Lr%2FFdn%2Bp49GJQUnmkZwAadJRAdtD%2BAiEA3RDrTYaimYHoMTYzsFtIDUKsrs1GcL7XmUzhWHY%2FIb0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIvhhZmIgTkJ3iI4fircA8BggbRSj1KHjoPFt0UjnLWCwejmJQKjp9JXGuJMS4WjQOiU5MMeII8fksYmtten8G0JFwLXbhLQzcAN95ClFfDM3iH2JoLa3V9SkkukSEouTireo5fNKgHQh0%2Fxxkb3g71o%2BAKfGdgs%2FAvwcJe%2FxWggWtdLjQEvRk8ivcra4wjlODQngd7HH6oUrBjpWODWL90P9kW55nxgqhpkxs%2BC4A%2BnCOcZcPaT05Rl08%2FGVCkkG1%2BjQ1wP%2F9NCrPRH5FUvKLyqfZY11mTYW%2FWmawlfiYov4N9bGD%2Fk2iFxhEenvNdTPY%2BZgHjkOOu1NSNcHHIYNdsR0eKKv%2FMMuFwBtr1ZYMfHSnSxpqZ2pj7xrMOx2PRRbvM9crObcAofyeL6vpklOSFCFkiKfr9u%2F8SDY25kr%2FKIj8PQGCYK9qIid7xh%2FaPIZcljzXThlrNu0jgxmkaoJLKy4jcS7VTQQlJXoTVn3Gyke%2BuvMq16EIDtNQuSjQashLU13C0Q%2FcgGEvHPm8G6acKn7YqzPZ5KDhAdb6GfX78BJKAuw13f3lfwTH%2FxPzPa2fHkkkds9OlloGYqcCuT8hXIpEqCarvbB5GAJjhI0m3zDhvUtBtIniT3CesefzTiXB%2BfHcqsx2w2AKDCMMaN9ccGOqUBldWLXeslfAfps9h1iW1B1HLYxSttPbm3Y44vBoOFsf2ESxFARiTxeGGqU%2Flsn4%2FzYikdo60W4WTyBpu3SjZwLOTa1Ry3BjOXjdJk524hmFNTmDt7ra2yndxdwv%2FQcy52gpid%2B5SoUHAqik1z9FRlXnDCnwZKVTWlT9YxJdd892EVHgldbBr63RyMO9FqILFc91i%2FzcE02TcgSl%2FSwysETfQhi1do&X-Amz-Signature=bfd760e625dae3d03a965f2e4efa6b51fd5d28328f197970b53c426d655b8769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JULVOFR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2z6tTQRuiW3z1Lr%2FFdn%2Bp49GJQUnmkZwAadJRAdtD%2BAiEA3RDrTYaimYHoMTYzsFtIDUKsrs1GcL7XmUzhWHY%2FIb0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIvhhZmIgTkJ3iI4fircA8BggbRSj1KHjoPFt0UjnLWCwejmJQKjp9JXGuJMS4WjQOiU5MMeII8fksYmtten8G0JFwLXbhLQzcAN95ClFfDM3iH2JoLa3V9SkkukSEouTireo5fNKgHQh0%2Fxxkb3g71o%2BAKfGdgs%2FAvwcJe%2FxWggWtdLjQEvRk8ivcra4wjlODQngd7HH6oUrBjpWODWL90P9kW55nxgqhpkxs%2BC4A%2BnCOcZcPaT05Rl08%2FGVCkkG1%2BjQ1wP%2F9NCrPRH5FUvKLyqfZY11mTYW%2FWmawlfiYov4N9bGD%2Fk2iFxhEenvNdTPY%2BZgHjkOOu1NSNcHHIYNdsR0eKKv%2FMMuFwBtr1ZYMfHSnSxpqZ2pj7xrMOx2PRRbvM9crObcAofyeL6vpklOSFCFkiKfr9u%2F8SDY25kr%2FKIj8PQGCYK9qIid7xh%2FaPIZcljzXThlrNu0jgxmkaoJLKy4jcS7VTQQlJXoTVn3Gyke%2BuvMq16EIDtNQuSjQashLU13C0Q%2FcgGEvHPm8G6acKn7YqzPZ5KDhAdb6GfX78BJKAuw13f3lfwTH%2FxPzPa2fHkkkds9OlloGYqcCuT8hXIpEqCarvbB5GAJjhI0m3zDhvUtBtIniT3CesefzTiXB%2BfHcqsx2w2AKDCMMaN9ccGOqUBldWLXeslfAfps9h1iW1B1HLYxSttPbm3Y44vBoOFsf2ESxFARiTxeGGqU%2Flsn4%2FzYikdo60W4WTyBpu3SjZwLOTa1Ry3BjOXjdJk524hmFNTmDt7ra2yndxdwv%2FQcy52gpid%2B5SoUHAqik1z9FRlXnDCnwZKVTWlT9YxJdd892EVHgldbBr63RyMO9FqILFc91i%2FzcE02TcgSl%2FSwysETfQhi1do&X-Amz-Signature=5252a845b6e3d14952dd869172ed4d32ac49b596b616f879fe30707758bd7c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JULVOFR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2z6tTQRuiW3z1Lr%2FFdn%2Bp49GJQUnmkZwAadJRAdtD%2BAiEA3RDrTYaimYHoMTYzsFtIDUKsrs1GcL7XmUzhWHY%2FIb0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIvhhZmIgTkJ3iI4fircA8BggbRSj1KHjoPFt0UjnLWCwejmJQKjp9JXGuJMS4WjQOiU5MMeII8fksYmtten8G0JFwLXbhLQzcAN95ClFfDM3iH2JoLa3V9SkkukSEouTireo5fNKgHQh0%2Fxxkb3g71o%2BAKfGdgs%2FAvwcJe%2FxWggWtdLjQEvRk8ivcra4wjlODQngd7HH6oUrBjpWODWL90P9kW55nxgqhpkxs%2BC4A%2BnCOcZcPaT05Rl08%2FGVCkkG1%2BjQ1wP%2F9NCrPRH5FUvKLyqfZY11mTYW%2FWmawlfiYov4N9bGD%2Fk2iFxhEenvNdTPY%2BZgHjkOOu1NSNcHHIYNdsR0eKKv%2FMMuFwBtr1ZYMfHSnSxpqZ2pj7xrMOx2PRRbvM9crObcAofyeL6vpklOSFCFkiKfr9u%2F8SDY25kr%2FKIj8PQGCYK9qIid7xh%2FaPIZcljzXThlrNu0jgxmkaoJLKy4jcS7VTQQlJXoTVn3Gyke%2BuvMq16EIDtNQuSjQashLU13C0Q%2FcgGEvHPm8G6acKn7YqzPZ5KDhAdb6GfX78BJKAuw13f3lfwTH%2FxPzPa2fHkkkds9OlloGYqcCuT8hXIpEqCarvbB5GAJjhI0m3zDhvUtBtIniT3CesefzTiXB%2BfHcqsx2w2AKDCMMaN9ccGOqUBldWLXeslfAfps9h1iW1B1HLYxSttPbm3Y44vBoOFsf2ESxFARiTxeGGqU%2Flsn4%2FzYikdo60W4WTyBpu3SjZwLOTa1Ry3BjOXjdJk524hmFNTmDt7ra2yndxdwv%2FQcy52gpid%2B5SoUHAqik1z9FRlXnDCnwZKVTWlT9YxJdd892EVHgldbBr63RyMO9FqILFc91i%2FzcE02TcgSl%2FSwysETfQhi1do&X-Amz-Signature=160f59293c69168bf1054c868642be5c20fc6f52c041a1bb2529b128e125314b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AZLAI2Y%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T010439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSfDpMGu81D0uuetaFLjeQ9D7eTcK9kFYDGiS1zBYKmAIhAJlZWin4tfgFts9U3vZqU7OgVTkkQNx2S2VuVjsSWmYuKv8DCH8QABoMNjM3NDIzMTgzODA1IgzWL0hDzdwlEfhdPEIq3ANKeotidpCnuD8qB%2Fkk8phViMiWWsQf0IGeTmplpY4QJLxP812dM%2FWgmaFm%2BhAwhNmPMaWh8%2BOxeQGK%2BcRx4t6VTknzjnl3keN%2BwD7hiNhPH5hVpMcFTC6K84n4eoQbZakbygn3BX88UcayBy0ALNzLIepEMcH4tIkAcNGB7zs3vN4HcUS%2BbZpHQyiww%2FFCwe55fmDj%2FMI%2BR%2BCC3g5HgiS8s%2Fve4WUmvKJq7%2Ba6BUH6NJukQ9p9%2FmiyC%2BJ3sxjSUO2psz7HotjQqMwfOBWABAkM6qWrsAdyBWPFs%2Bx217Nw1q7FkWRxA%2FvorWL%2BOYoifZu8T2inG4KfjqniJqACTWYSKYv9bkubIzNvJ7lFy98Y88N8mZRzmvuVRhSg9iGfiBNLxosyXoCNXhl4NTMMTROpZB6GpkwusJNHmaH5wAnKSTjTRkidjHMSKmJDD72pm%2F1MQ3dghmcw%2F6z5OeQJs6J6ZJ%2FlTvExJFOquRuy35QAHuG4GPh7IT1cbW0%2BAA7k%2B6iaCL3%2FZ2RuimhLaXtRsOCJvLn29JCJlOJNRMmnFPP6WouujWshggCoxTlLPN01EYEPKZnmQNRyzuyECiciI1jN1xnrPadHIs0UBPDOaxgqfViJq%2FJFT3Xu02jNLTDCmvXHBjqkAePQT8gaA1jTBgvGpxcXReUBy5auR8C2rlSrmLbX%2BfbBzFzhYKZ1iuV4FJv7AeXlt2t6W20ehrG2fjtmfdM6nEdKhEWWya3y8x4JHK%2FtPwnR%2FLTLSvYLLB4EGuJuzjFEJEfiPFVPbw8q9NKHGKzz7ILE5geisvlZWgoa2At4jHu9v6%2B6OGrloELEq7isrcU2pZX%2BlNXjrNHfAWe5sjoD%2F4xIAExB&X-Amz-Signature=b9cc32eb88920d62a7df1a0dfd4309baa94dcce6f7a106ff43da4be4728d5ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

