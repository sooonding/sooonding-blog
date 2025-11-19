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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUOTAM73%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T010233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDVIxQAqEtT%2FiwV2xi1kBj3th5YzXgNxqWF%2BCMxogoT3AiEA67Ny7kyatdK6Oxxvy0n%2FiRUjVpBhujT%2ByQxZY6H7vdAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeu5ibXmdvDqnlPdSrcA4u6miNWHSYCb%2FaAxzRaPa%2Fh4WPS2j1D5%2FdG1CNSBldE%2F%2BP%2FHAqQ36UgNfu64t7G9TPU%2B5n237lVvJE20Q9GxlTDm%2BpLlq9VKC6mFpBwQvDSqL6mycYQPI0X8InCxqVg0T8JpwOGA7cYXomporHW1mgWHoU2wjTAWuZRdSjnqiZBZATBfjH%2FWYdMUNMC3odZaaiQrdnstLK%2F%2F2udhTiwBg7PZSWwgg6OTotaJPTwYjbJVm8qPx1n5B0CeQTl7Sd02SLk4%2FlTrz%2ByJccPzui9ojWL6b%2Fgx7pLGtDL8mcWyyWCFjyePm2THIME5jnwz0OkemZLZCHeCgBfzZOJDnI8AvyyU9I5Tb2wJYvWmSy5FgRIeSCtmugVDuGTb2qQfyCf%2Bt9jHa7kjYdXSMKxe9d6hRufQLyta%2BHOafLk6hSUN7VONR4cq7JD6M7QS98kPC%2BY9Yha9r6yOVDi5USDgMe8bKK3OuZ%2FUwHETNFnWWfvgxT01SKODfClMFs1Ucz9LA5qebey2aKRsBr1EWJ7xSSTvsC%2BkeXtxcHYLGYWQHrLE7DqZOdCJa5hFgSRux2RyLlObnejjJX3DL8tesVyCPX8l%2BhJgZ%2FZ6mir4X7h2UjRf30VtiPgjxhFtqDWmp7RMMj788gGOqUBkEzly4DSFTx1SoQWDpN0Nl27EdnIHNePBoFa75%2FSKobhyST0m9K6jV4wSP2UuGo9DISD72824ZA8t35rNv5gpDVUOx2Ytj1UNuUxN3yfAjOOcBqNuP1z3I9agA0gsaKwCW15pbkVUkwxP2pRjrL2ObYPJmbmpCfHxgYS9QIvHMa2DBVJp8%2BDDgiwGyGy%2B9eQ%2BJERYuo23Si8JXZxFBu9qhSEdmpA&X-Amz-Signature=50d2d8d04270c855d341c6ae57d68f0bf1dbd370bafc9366bb54bf32eb9f1545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DOYPUR%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T010236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICFFYUD9gw0Xb2pLddiUBkPKTQJ8wmpaSEsFZFmUcjxbAiADPMiiVf7KoZa9GG1KnAvU13IEH0Zw95q4JIEbaqe2%2FSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq18pQO9jXiMkPfQuKtwDWKPP2H21utqzxfJDSwBSNUsdVFsyNvTNnf205HsbD6Ec1%2FeGo9yciLW%2B2sBy%2FcdWYbOVKOXnFIsASQJHIE6pYGW6v9CZd9nqzzhUSyRYr%2B%2BFak4a12lgT54TN9So%2BclFJ34yM%2FdZIOh6XNBE0JgScPetVJ4iUsr6kftxzWplMXCEwqp%2BFqBgBtA4SD6eazfNaLrLOnZMX%2FjGDXMkUkEIviHOSynjL5zEjp8KQOK83NQBKUt4s4TX%2BKQrsysN%2FiluLD0rEzMFTpRWAylSOcNO4k4uynrMLk2b1spstlETkbu%2BbhN62BrCNkHLpgoNIzTKB1lXikkdei%2B3efztWmtL%2B7cvicKZifkDktjdH2FrTmMUIWAFcKeaX%2Fd0efhEETlat85zKrvI9EeiYMQYUbf94filGMg7%2BHAKpxGeaMEwEqSSvGf87qcu2a6VlQoVS%2B6FkrK%2BCV6ZyqRHuYQbrHKKpo6d%2FE0rx9tE1RxYFQCcFyJ6TUtx2FJ0PtO4boRayTvRsq3sUhlx6EvpnQxDgNgk9HApuEjZgrV7%2BrKXQVDLWSuUQs9nyAZpOsw4GfcIgjehpxEBLlrmK3yGU8HnO9aAqyteukDNAWfVPOBcItvQNPG5fejZ4oj46jqQp7kwv%2FzzyAY6pgEqVe%2FjAXUgy1xPLNCw1Az8c31KXvSnz9vZDjd1fkMBy7wsT7AjO3RnXwaAnM1s6xBjr8p7owpQRlLI4jkmqDnw3ZPyHYJAmUmRi6YJPgruw%2BCi9flZmHhOWxQQhuHhDb%2BUYWdraG8O4U%2FKAl%2Fj7BNuDtWJ6GP1I%2B3A2%2BJja5z7hjRxH5rN2dDLcT4NIDxqQoJqBWw1h9LJpPTmdeg8juJI5r%2FDNHW4&X-Amz-Signature=2613574e14279fdd96d8c6560cbeeb7eceb92a86b6f588692f4c5abd3c84b1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DOYPUR%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T010236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICFFYUD9gw0Xb2pLddiUBkPKTQJ8wmpaSEsFZFmUcjxbAiADPMiiVf7KoZa9GG1KnAvU13IEH0Zw95q4JIEbaqe2%2FSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq18pQO9jXiMkPfQuKtwDWKPP2H21utqzxfJDSwBSNUsdVFsyNvTNnf205HsbD6Ec1%2FeGo9yciLW%2B2sBy%2FcdWYbOVKOXnFIsASQJHIE6pYGW6v9CZd9nqzzhUSyRYr%2B%2BFak4a12lgT54TN9So%2BclFJ34yM%2FdZIOh6XNBE0JgScPetVJ4iUsr6kftxzWplMXCEwqp%2BFqBgBtA4SD6eazfNaLrLOnZMX%2FjGDXMkUkEIviHOSynjL5zEjp8KQOK83NQBKUt4s4TX%2BKQrsysN%2FiluLD0rEzMFTpRWAylSOcNO4k4uynrMLk2b1spstlETkbu%2BbhN62BrCNkHLpgoNIzTKB1lXikkdei%2B3efztWmtL%2B7cvicKZifkDktjdH2FrTmMUIWAFcKeaX%2Fd0efhEETlat85zKrvI9EeiYMQYUbf94filGMg7%2BHAKpxGeaMEwEqSSvGf87qcu2a6VlQoVS%2B6FkrK%2BCV6ZyqRHuYQbrHKKpo6d%2FE0rx9tE1RxYFQCcFyJ6TUtx2FJ0PtO4boRayTvRsq3sUhlx6EvpnQxDgNgk9HApuEjZgrV7%2BrKXQVDLWSuUQs9nyAZpOsw4GfcIgjehpxEBLlrmK3yGU8HnO9aAqyteukDNAWfVPOBcItvQNPG5fejZ4oj46jqQp7kwv%2FzzyAY6pgEqVe%2FjAXUgy1xPLNCw1Az8c31KXvSnz9vZDjd1fkMBy7wsT7AjO3RnXwaAnM1s6xBjr8p7owpQRlLI4jkmqDnw3ZPyHYJAmUmRi6YJPgruw%2BCi9flZmHhOWxQQhuHhDb%2BUYWdraG8O4U%2FKAl%2Fj7BNuDtWJ6GP1I%2B3A2%2BJja5z7hjRxH5rN2dDLcT4NIDxqQoJqBWw1h9LJpPTmdeg8juJI5r%2FDNHW4&X-Amz-Signature=c51f351655e85aec9d302141de829a16eba4701350aeb26e19a24daaf34961ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DOYPUR%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T010236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICFFYUD9gw0Xb2pLddiUBkPKTQJ8wmpaSEsFZFmUcjxbAiADPMiiVf7KoZa9GG1KnAvU13IEH0Zw95q4JIEbaqe2%2FSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq18pQO9jXiMkPfQuKtwDWKPP2H21utqzxfJDSwBSNUsdVFsyNvTNnf205HsbD6Ec1%2FeGo9yciLW%2B2sBy%2FcdWYbOVKOXnFIsASQJHIE6pYGW6v9CZd9nqzzhUSyRYr%2B%2BFak4a12lgT54TN9So%2BclFJ34yM%2FdZIOh6XNBE0JgScPetVJ4iUsr6kftxzWplMXCEwqp%2BFqBgBtA4SD6eazfNaLrLOnZMX%2FjGDXMkUkEIviHOSynjL5zEjp8KQOK83NQBKUt4s4TX%2BKQrsysN%2FiluLD0rEzMFTpRWAylSOcNO4k4uynrMLk2b1spstlETkbu%2BbhN62BrCNkHLpgoNIzTKB1lXikkdei%2B3efztWmtL%2B7cvicKZifkDktjdH2FrTmMUIWAFcKeaX%2Fd0efhEETlat85zKrvI9EeiYMQYUbf94filGMg7%2BHAKpxGeaMEwEqSSvGf87qcu2a6VlQoVS%2B6FkrK%2BCV6ZyqRHuYQbrHKKpo6d%2FE0rx9tE1RxYFQCcFyJ6TUtx2FJ0PtO4boRayTvRsq3sUhlx6EvpnQxDgNgk9HApuEjZgrV7%2BrKXQVDLWSuUQs9nyAZpOsw4GfcIgjehpxEBLlrmK3yGU8HnO9aAqyteukDNAWfVPOBcItvQNPG5fejZ4oj46jqQp7kwv%2FzzyAY6pgEqVe%2FjAXUgy1xPLNCw1Az8c31KXvSnz9vZDjd1fkMBy7wsT7AjO3RnXwaAnM1s6xBjr8p7owpQRlLI4jkmqDnw3ZPyHYJAmUmRi6YJPgruw%2BCi9flZmHhOWxQQhuHhDb%2BUYWdraG8O4U%2FKAl%2Fj7BNuDtWJ6GP1I%2B3A2%2BJja5z7hjRxH5rN2dDLcT4NIDxqQoJqBWw1h9LJpPTmdeg8juJI5r%2FDNHW4&X-Amz-Signature=d91612b07764aae1c02063c13094d43f30a307f17883c7bd105346d956a19051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DOYPUR%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T010236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICFFYUD9gw0Xb2pLddiUBkPKTQJ8wmpaSEsFZFmUcjxbAiADPMiiVf7KoZa9GG1KnAvU13IEH0Zw95q4JIEbaqe2%2FSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq18pQO9jXiMkPfQuKtwDWKPP2H21utqzxfJDSwBSNUsdVFsyNvTNnf205HsbD6Ec1%2FeGo9yciLW%2B2sBy%2FcdWYbOVKOXnFIsASQJHIE6pYGW6v9CZd9nqzzhUSyRYr%2B%2BFak4a12lgT54TN9So%2BclFJ34yM%2FdZIOh6XNBE0JgScPetVJ4iUsr6kftxzWplMXCEwqp%2BFqBgBtA4SD6eazfNaLrLOnZMX%2FjGDXMkUkEIviHOSynjL5zEjp8KQOK83NQBKUt4s4TX%2BKQrsysN%2FiluLD0rEzMFTpRWAylSOcNO4k4uynrMLk2b1spstlETkbu%2BbhN62BrCNkHLpgoNIzTKB1lXikkdei%2B3efztWmtL%2B7cvicKZifkDktjdH2FrTmMUIWAFcKeaX%2Fd0efhEETlat85zKrvI9EeiYMQYUbf94filGMg7%2BHAKpxGeaMEwEqSSvGf87qcu2a6VlQoVS%2B6FkrK%2BCV6ZyqRHuYQbrHKKpo6d%2FE0rx9tE1RxYFQCcFyJ6TUtx2FJ0PtO4boRayTvRsq3sUhlx6EvpnQxDgNgk9HApuEjZgrV7%2BrKXQVDLWSuUQs9nyAZpOsw4GfcIgjehpxEBLlrmK3yGU8HnO9aAqyteukDNAWfVPOBcItvQNPG5fejZ4oj46jqQp7kwv%2FzzyAY6pgEqVe%2FjAXUgy1xPLNCw1Az8c31KXvSnz9vZDjd1fkMBy7wsT7AjO3RnXwaAnM1s6xBjr8p7owpQRlLI4jkmqDnw3ZPyHYJAmUmRi6YJPgruw%2BCi9flZmHhOWxQQhuHhDb%2BUYWdraG8O4U%2FKAl%2Fj7BNuDtWJ6GP1I%2B3A2%2BJja5z7hjRxH5rN2dDLcT4NIDxqQoJqBWw1h9LJpPTmdeg8juJI5r%2FDNHW4&X-Amz-Signature=4733590a473900e558a77e866de1de2677df0dd9cfa9cd45092662040a054c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DOYPUR%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T010236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCICFFYUD9gw0Xb2pLddiUBkPKTQJ8wmpaSEsFZFmUcjxbAiADPMiiVf7KoZa9GG1KnAvU13IEH0Zw95q4JIEbaqe2%2FSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq18pQO9jXiMkPfQuKtwDWKPP2H21utqzxfJDSwBSNUsdVFsyNvTNnf205HsbD6Ec1%2FeGo9yciLW%2B2sBy%2FcdWYbOVKOXnFIsASQJHIE6pYGW6v9CZd9nqzzhUSyRYr%2B%2BFak4a12lgT54TN9So%2BclFJ34yM%2FdZIOh6XNBE0JgScPetVJ4iUsr6kftxzWplMXCEwqp%2BFqBgBtA4SD6eazfNaLrLOnZMX%2FjGDXMkUkEIviHOSynjL5zEjp8KQOK83NQBKUt4s4TX%2BKQrsysN%2FiluLD0rEzMFTpRWAylSOcNO4k4uynrMLk2b1spstlETkbu%2BbhN62BrCNkHLpgoNIzTKB1lXikkdei%2B3efztWmtL%2B7cvicKZifkDktjdH2FrTmMUIWAFcKeaX%2Fd0efhEETlat85zKrvI9EeiYMQYUbf94filGMg7%2BHAKpxGeaMEwEqSSvGf87qcu2a6VlQoVS%2B6FkrK%2BCV6ZyqRHuYQbrHKKpo6d%2FE0rx9tE1RxYFQCcFyJ6TUtx2FJ0PtO4boRayTvRsq3sUhlx6EvpnQxDgNgk9HApuEjZgrV7%2BrKXQVDLWSuUQs9nyAZpOsw4GfcIgjehpxEBLlrmK3yGU8HnO9aAqyteukDNAWfVPOBcItvQNPG5fejZ4oj46jqQp7kwv%2FzzyAY6pgEqVe%2FjAXUgy1xPLNCw1Az8c31KXvSnz9vZDjd1fkMBy7wsT7AjO3RnXwaAnM1s6xBjr8p7owpQRlLI4jkmqDnw3ZPyHYJAmUmRi6YJPgruw%2BCi9flZmHhOWxQQhuHhDb%2BUYWdraG8O4U%2FKAl%2Fj7BNuDtWJ6GP1I%2B3A2%2BJja5z7hjRxH5rN2dDLcT4NIDxqQoJqBWw1h9LJpPTmdeg8juJI5r%2FDNHW4&X-Amz-Signature=10f572f0f362a0ccce3e6ca5fd81783e7a08b712ffcdec0a47d12ed05f8fc3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUOTAM73%2F20251119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251119T010233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDVIxQAqEtT%2FiwV2xi1kBj3th5YzXgNxqWF%2BCMxogoT3AiEA67Ny7kyatdK6Oxxvy0n%2FiRUjVpBhujT%2ByQxZY6H7vdAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeu5ibXmdvDqnlPdSrcA4u6miNWHSYCb%2FaAxzRaPa%2Fh4WPS2j1D5%2FdG1CNSBldE%2F%2BP%2FHAqQ36UgNfu64t7G9TPU%2B5n237lVvJE20Q9GxlTDm%2BpLlq9VKC6mFpBwQvDSqL6mycYQPI0X8InCxqVg0T8JpwOGA7cYXomporHW1mgWHoU2wjTAWuZRdSjnqiZBZATBfjH%2FWYdMUNMC3odZaaiQrdnstLK%2F%2F2udhTiwBg7PZSWwgg6OTotaJPTwYjbJVm8qPx1n5B0CeQTl7Sd02SLk4%2FlTrz%2ByJccPzui9ojWL6b%2Fgx7pLGtDL8mcWyyWCFjyePm2THIME5jnwz0OkemZLZCHeCgBfzZOJDnI8AvyyU9I5Tb2wJYvWmSy5FgRIeSCtmugVDuGTb2qQfyCf%2Bt9jHa7kjYdXSMKxe9d6hRufQLyta%2BHOafLk6hSUN7VONR4cq7JD6M7QS98kPC%2BY9Yha9r6yOVDi5USDgMe8bKK3OuZ%2FUwHETNFnWWfvgxT01SKODfClMFs1Ucz9LA5qebey2aKRsBr1EWJ7xSSTvsC%2BkeXtxcHYLGYWQHrLE7DqZOdCJa5hFgSRux2RyLlObnejjJX3DL8tesVyCPX8l%2BhJgZ%2FZ6mir4X7h2UjRf30VtiPgjxhFtqDWmp7RMMj788gGOqUBkEzly4DSFTx1SoQWDpN0Nl27EdnIHNePBoFa75%2FSKobhyST0m9K6jV4wSP2UuGo9DISD72824ZA8t35rNv5gpDVUOx2Ytj1UNuUxN3yfAjOOcBqNuP1z3I9agA0gsaKwCW15pbkVUkwxP2pRjrL2ObYPJmbmpCfHxgYS9QIvHMa2DBVJp8%2BDDgiwGyGy%2B9eQ%2BJERYuo23Si8JXZxFBu9qhSEdmpA&X-Amz-Signature=e587bcdff409bd3e275ef5bb777844591ece26d675d82db6c36153e00fce16ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

