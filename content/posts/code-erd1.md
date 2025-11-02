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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6S7HXW5%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T010533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAajRGSyJsUnfpUvU1K3h8T57BO%2Bt8Q1L9d4LRn7orxBAiBuiSRiwXtfIkNAjuoLny0A%2F6eq50zQ43l8YLe0V1MFhyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMU5t6RcdfQ0Hc6TfXKtwDirEeOwL5nTnYUzBNpNCI6GoDNtf0q4qf4Ui6QH9%2BsBI9q8lQoECNKwrGH7%2Fh%2BOkkA%2FXu3glcgxkHGL7Ir4fImTmUOsV9AjKV7y201raER%2Ff%2FXgn8BljfVvG%2BASN1ssfjk4eqBZjDolXIZxwHIOxl3GyJlWJpJTSdf3QEVsXoOgrLZ25n7jZs6EJ%2BkEqxqy58RsTTaCtr%2BQXHAAu8H3nhikiGCCGPTWjl0WKi4LYdU967X6zUJ1uC3LXWLaKRRZz3FoyB7uIl2ewlYit9PtjkLieiqGLPi0bZbvwbwUT71fR6h8KbJZ2xlFgtAcKM4EWBrbce%2BAgPI3a09ikvxdTKBfdxb9xorWFEeOoEyCKAbzDjKLfpb2GKDx7sSDqAAYz%2B81gDggozeGg%2Bncobo47Ew%2BY3sdkduivfO%2FCqp2hg53QNj%2FgreuwxVxJu55sH2yUhXCLEyz%2BTEmPqq8W2aNUe7XDZQmYQuVz69wu8V1yiyURxP706lEnBUVeUImLZ%2FWV6QHSpqiVv8WkjY4YaOhf5dZIIfz32GEx%2BvrjJIYFmB1dzQzZz5hh4j4BnWHfxEpMJJWaEpPiBRzC3dNFsE1mVijOdEc7iHkGC%2B%2FtnpJmeN7CVgRVH5KcN6%2B%2B135owp9GayAY6pgETfN5OAzOboXhsdZBcZ6L0h0UDXVXIDaS%2B9kLIwtF37N8cCkLQBsw1eah8RnfM5mOfQ9TGnzQ8pcGTwoV5IMhr%2BLTiwsJatcQMrIFIWU7dMmTviz8pdeeLUjnScJ7rS46d8YI9YBJS4wZsoVNaj0anqrCHhAk0hBdOhEmEU8oF5%2FDzuzu7j7AS83P715V6SwrSxDymen2LBgTNfZKk3SYyLbKJF8Rj&X-Amz-Signature=bd9ec2d9356a738033356aae127f35d8b08024339bca7a37fb0eabccb9c5ed9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZCSKBJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T010533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDlzlsRuItwsQL0e%2FYkpYee1ZCeWqbtS9hlx13y4zguVAiAcM1eGqQXnhoVCKkP6DSTUInE4L0ROYt%2BRvgRbKR1cbSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPCFAAo1%2FB%2BhhvgXgKtwDZ%2BNINcZ1bBMlxwi%2B4EzSLTaSImSizE8TKx52ytPz8QxYqHkn%2BFwkBALh4Ke2WnolVnGOEj3zWuFA6tghXjE3%2FJ3hpDCBd2S%2FigyUNGJiSFEGLAKT6bapvQGuDJpMBYLeXkSfR5uKMuvTKwfodkvuLJj3v0bYgx%2FTIiz0KjuaxWWmwDQBfNwS9FMrgd8bU8Y7GVWT7c4V4%2FoLxxv77NA0mZEVoZ03xC2cdoF%2F9xIpiX%2BYsDwe3xtXiMbPuzGBzMRwdziPGoH6Nv8kjKwdyHpM%2BTcKJqmqPR37Zy5m5r7bG0ESQ26mtT25sbvyJFWN79X2kW092rUjeiNiHwoJdTK%2Bji9YGzo1NLVTwn3%2F6ZNOulhsYZjbUb16TxHQVEKQufhaEzJVlPFe6FGpUx9rvp68yb2A3I8HLveCTjP4Bro9YEfTq%2FX1JLoYgneAhrZA%2F%2FDzhTTwEvebfeVkWirzkm4zAnOghu7inQYrGK3rA6zvl6tZayVIFxBcvzJW1BB8DwkrnCHzB%2BTERl3jhMXpR%2F7O4DIsfGtGHtrP%2F%2F3B5%2B2ypmkpZW0h3sNRbOT6ZPyaE71FBA%2BpQF7Sc4JHNcrKyOs3Sjyom%2FZX9wc842nkI4hzXV6OPVmTSsQwFkaUl7owz86ayAY6pgEjAnvJ1tu6ro%2FsdAGWCeSss6EmOnEHMEHVtYWlW9pcIE%2B%2BYBbh8NdQiGpvNc%2Fy13qcH0hx4kzTqA%2FQDPxAO6mjeUlizyK1WGD9W%2B0POFD%2FqLe7cVPdkXpPPhKP5mcUOLSmvS2Jr%2BgzPK5yZ90V1vTJlmOlv9moK35OSUf0929RW%2BasWPlcqOpLtrXe4S6e3K7jnSg8t0P1XBdnop0nUrQZKv0qUc%2Bd&X-Amz-Signature=4e2a800c330463119c28de58f1eec3e8c21569d1b2367186960705c92f8e6e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZCSKBJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T010533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDlzlsRuItwsQL0e%2FYkpYee1ZCeWqbtS9hlx13y4zguVAiAcM1eGqQXnhoVCKkP6DSTUInE4L0ROYt%2BRvgRbKR1cbSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPCFAAo1%2FB%2BhhvgXgKtwDZ%2BNINcZ1bBMlxwi%2B4EzSLTaSImSizE8TKx52ytPz8QxYqHkn%2BFwkBALh4Ke2WnolVnGOEj3zWuFA6tghXjE3%2FJ3hpDCBd2S%2FigyUNGJiSFEGLAKT6bapvQGuDJpMBYLeXkSfR5uKMuvTKwfodkvuLJj3v0bYgx%2FTIiz0KjuaxWWmwDQBfNwS9FMrgd8bU8Y7GVWT7c4V4%2FoLxxv77NA0mZEVoZ03xC2cdoF%2F9xIpiX%2BYsDwe3xtXiMbPuzGBzMRwdziPGoH6Nv8kjKwdyHpM%2BTcKJqmqPR37Zy5m5r7bG0ESQ26mtT25sbvyJFWN79X2kW092rUjeiNiHwoJdTK%2Bji9YGzo1NLVTwn3%2F6ZNOulhsYZjbUb16TxHQVEKQufhaEzJVlPFe6FGpUx9rvp68yb2A3I8HLveCTjP4Bro9YEfTq%2FX1JLoYgneAhrZA%2F%2FDzhTTwEvebfeVkWirzkm4zAnOghu7inQYrGK3rA6zvl6tZayVIFxBcvzJW1BB8DwkrnCHzB%2BTERl3jhMXpR%2F7O4DIsfGtGHtrP%2F%2F3B5%2B2ypmkpZW0h3sNRbOT6ZPyaE71FBA%2BpQF7Sc4JHNcrKyOs3Sjyom%2FZX9wc842nkI4hzXV6OPVmTSsQwFkaUl7owz86ayAY6pgEjAnvJ1tu6ro%2FsdAGWCeSss6EmOnEHMEHVtYWlW9pcIE%2B%2BYBbh8NdQiGpvNc%2Fy13qcH0hx4kzTqA%2FQDPxAO6mjeUlizyK1WGD9W%2B0POFD%2FqLe7cVPdkXpPPhKP5mcUOLSmvS2Jr%2BgzPK5yZ90V1vTJlmOlv9moK35OSUf0929RW%2BasWPlcqOpLtrXe4S6e3K7jnSg8t0P1XBdnop0nUrQZKv0qUc%2Bd&X-Amz-Signature=12e2bfd234c4bb0ecb4a40d5d260ed7218c75a0580b2b01334e2d818bffd5435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZCSKBJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T010533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDlzlsRuItwsQL0e%2FYkpYee1ZCeWqbtS9hlx13y4zguVAiAcM1eGqQXnhoVCKkP6DSTUInE4L0ROYt%2BRvgRbKR1cbSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPCFAAo1%2FB%2BhhvgXgKtwDZ%2BNINcZ1bBMlxwi%2B4EzSLTaSImSizE8TKx52ytPz8QxYqHkn%2BFwkBALh4Ke2WnolVnGOEj3zWuFA6tghXjE3%2FJ3hpDCBd2S%2FigyUNGJiSFEGLAKT6bapvQGuDJpMBYLeXkSfR5uKMuvTKwfodkvuLJj3v0bYgx%2FTIiz0KjuaxWWmwDQBfNwS9FMrgd8bU8Y7GVWT7c4V4%2FoLxxv77NA0mZEVoZ03xC2cdoF%2F9xIpiX%2BYsDwe3xtXiMbPuzGBzMRwdziPGoH6Nv8kjKwdyHpM%2BTcKJqmqPR37Zy5m5r7bG0ESQ26mtT25sbvyJFWN79X2kW092rUjeiNiHwoJdTK%2Bji9YGzo1NLVTwn3%2F6ZNOulhsYZjbUb16TxHQVEKQufhaEzJVlPFe6FGpUx9rvp68yb2A3I8HLveCTjP4Bro9YEfTq%2FX1JLoYgneAhrZA%2F%2FDzhTTwEvebfeVkWirzkm4zAnOghu7inQYrGK3rA6zvl6tZayVIFxBcvzJW1BB8DwkrnCHzB%2BTERl3jhMXpR%2F7O4DIsfGtGHtrP%2F%2F3B5%2B2ypmkpZW0h3sNRbOT6ZPyaE71FBA%2BpQF7Sc4JHNcrKyOs3Sjyom%2FZX9wc842nkI4hzXV6OPVmTSsQwFkaUl7owz86ayAY6pgEjAnvJ1tu6ro%2FsdAGWCeSss6EmOnEHMEHVtYWlW9pcIE%2B%2BYBbh8NdQiGpvNc%2Fy13qcH0hx4kzTqA%2FQDPxAO6mjeUlizyK1WGD9W%2B0POFD%2FqLe7cVPdkXpPPhKP5mcUOLSmvS2Jr%2BgzPK5yZ90V1vTJlmOlv9moK35OSUf0929RW%2BasWPlcqOpLtrXe4S6e3K7jnSg8t0P1XBdnop0nUrQZKv0qUc%2Bd&X-Amz-Signature=7a8675404f61656ead57710ae155b772c80f5472fb2abcd8f39253044929bab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZCSKBJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T010533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDlzlsRuItwsQL0e%2FYkpYee1ZCeWqbtS9hlx13y4zguVAiAcM1eGqQXnhoVCKkP6DSTUInE4L0ROYt%2BRvgRbKR1cbSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPCFAAo1%2FB%2BhhvgXgKtwDZ%2BNINcZ1bBMlxwi%2B4EzSLTaSImSizE8TKx52ytPz8QxYqHkn%2BFwkBALh4Ke2WnolVnGOEj3zWuFA6tghXjE3%2FJ3hpDCBd2S%2FigyUNGJiSFEGLAKT6bapvQGuDJpMBYLeXkSfR5uKMuvTKwfodkvuLJj3v0bYgx%2FTIiz0KjuaxWWmwDQBfNwS9FMrgd8bU8Y7GVWT7c4V4%2FoLxxv77NA0mZEVoZ03xC2cdoF%2F9xIpiX%2BYsDwe3xtXiMbPuzGBzMRwdziPGoH6Nv8kjKwdyHpM%2BTcKJqmqPR37Zy5m5r7bG0ESQ26mtT25sbvyJFWN79X2kW092rUjeiNiHwoJdTK%2Bji9YGzo1NLVTwn3%2F6ZNOulhsYZjbUb16TxHQVEKQufhaEzJVlPFe6FGpUx9rvp68yb2A3I8HLveCTjP4Bro9YEfTq%2FX1JLoYgneAhrZA%2F%2FDzhTTwEvebfeVkWirzkm4zAnOghu7inQYrGK3rA6zvl6tZayVIFxBcvzJW1BB8DwkrnCHzB%2BTERl3jhMXpR%2F7O4DIsfGtGHtrP%2F%2F3B5%2B2ypmkpZW0h3sNRbOT6ZPyaE71FBA%2BpQF7Sc4JHNcrKyOs3Sjyom%2FZX9wc842nkI4hzXV6OPVmTSsQwFkaUl7owz86ayAY6pgEjAnvJ1tu6ro%2FsdAGWCeSss6EmOnEHMEHVtYWlW9pcIE%2B%2BYBbh8NdQiGpvNc%2Fy13qcH0hx4kzTqA%2FQDPxAO6mjeUlizyK1WGD9W%2B0POFD%2FqLe7cVPdkXpPPhKP5mcUOLSmvS2Jr%2BgzPK5yZ90V1vTJlmOlv9moK35OSUf0929RW%2BasWPlcqOpLtrXe4S6e3K7jnSg8t0P1XBdnop0nUrQZKv0qUc%2Bd&X-Amz-Signature=5a72b5cc87d1a36a25045287d22e167aed2142889e100d684a72e01658d0b404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZCSKBJ%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T010533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDlzlsRuItwsQL0e%2FYkpYee1ZCeWqbtS9hlx13y4zguVAiAcM1eGqQXnhoVCKkP6DSTUInE4L0ROYt%2BRvgRbKR1cbSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMPCFAAo1%2FB%2BhhvgXgKtwDZ%2BNINcZ1bBMlxwi%2B4EzSLTaSImSizE8TKx52ytPz8QxYqHkn%2BFwkBALh4Ke2WnolVnGOEj3zWuFA6tghXjE3%2FJ3hpDCBd2S%2FigyUNGJiSFEGLAKT6bapvQGuDJpMBYLeXkSfR5uKMuvTKwfodkvuLJj3v0bYgx%2FTIiz0KjuaxWWmwDQBfNwS9FMrgd8bU8Y7GVWT7c4V4%2FoLxxv77NA0mZEVoZ03xC2cdoF%2F9xIpiX%2BYsDwe3xtXiMbPuzGBzMRwdziPGoH6Nv8kjKwdyHpM%2BTcKJqmqPR37Zy5m5r7bG0ESQ26mtT25sbvyJFWN79X2kW092rUjeiNiHwoJdTK%2Bji9YGzo1NLVTwn3%2F6ZNOulhsYZjbUb16TxHQVEKQufhaEzJVlPFe6FGpUx9rvp68yb2A3I8HLveCTjP4Bro9YEfTq%2FX1JLoYgneAhrZA%2F%2FDzhTTwEvebfeVkWirzkm4zAnOghu7inQYrGK3rA6zvl6tZayVIFxBcvzJW1BB8DwkrnCHzB%2BTERl3jhMXpR%2F7O4DIsfGtGHtrP%2F%2F3B5%2B2ypmkpZW0h3sNRbOT6ZPyaE71FBA%2BpQF7Sc4JHNcrKyOs3Sjyom%2FZX9wc842nkI4hzXV6OPVmTSsQwFkaUl7owz86ayAY6pgEjAnvJ1tu6ro%2FsdAGWCeSss6EmOnEHMEHVtYWlW9pcIE%2B%2BYBbh8NdQiGpvNc%2Fy13qcH0hx4kzTqA%2FQDPxAO6mjeUlizyK1WGD9W%2B0POFD%2FqLe7cVPdkXpPPhKP5mcUOLSmvS2Jr%2BgzPK5yZ90V1vTJlmOlv9moK35OSUf0929RW%2BasWPlcqOpLtrXe4S6e3K7jnSg8t0P1XBdnop0nUrQZKv0qUc%2Bd&X-Amz-Signature=da3ddc9e262c5a632d2fb7ea974b832cef89ab2c30c8611da122efb92ebf6318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6S7HXW5%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T010533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIAajRGSyJsUnfpUvU1K3h8T57BO%2Bt8Q1L9d4LRn7orxBAiBuiSRiwXtfIkNAjuoLny0A%2F6eq50zQ43l8YLe0V1MFhyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMU5t6RcdfQ0Hc6TfXKtwDirEeOwL5nTnYUzBNpNCI6GoDNtf0q4qf4Ui6QH9%2BsBI9q8lQoECNKwrGH7%2Fh%2BOkkA%2FXu3glcgxkHGL7Ir4fImTmUOsV9AjKV7y201raER%2Ff%2FXgn8BljfVvG%2BASN1ssfjk4eqBZjDolXIZxwHIOxl3GyJlWJpJTSdf3QEVsXoOgrLZ25n7jZs6EJ%2BkEqxqy58RsTTaCtr%2BQXHAAu8H3nhikiGCCGPTWjl0WKi4LYdU967X6zUJ1uC3LXWLaKRRZz3FoyB7uIl2ewlYit9PtjkLieiqGLPi0bZbvwbwUT71fR6h8KbJZ2xlFgtAcKM4EWBrbce%2BAgPI3a09ikvxdTKBfdxb9xorWFEeOoEyCKAbzDjKLfpb2GKDx7sSDqAAYz%2B81gDggozeGg%2Bncobo47Ew%2BY3sdkduivfO%2FCqp2hg53QNj%2FgreuwxVxJu55sH2yUhXCLEyz%2BTEmPqq8W2aNUe7XDZQmYQuVz69wu8V1yiyURxP706lEnBUVeUImLZ%2FWV6QHSpqiVv8WkjY4YaOhf5dZIIfz32GEx%2BvrjJIYFmB1dzQzZz5hh4j4BnWHfxEpMJJWaEpPiBRzC3dNFsE1mVijOdEc7iHkGC%2B%2FtnpJmeN7CVgRVH5KcN6%2B%2B135owp9GayAY6pgETfN5OAzOboXhsdZBcZ6L0h0UDXVXIDaS%2B9kLIwtF37N8cCkLQBsw1eah8RnfM5mOfQ9TGnzQ8pcGTwoV5IMhr%2BLTiwsJatcQMrIFIWU7dMmTviz8pdeeLUjnScJ7rS46d8YI9YBJS4wZsoVNaj0anqrCHhAk0hBdOhEmEU8oF5%2FDzuzu7j7AS83P715V6SwrSxDymen2LBgTNfZKk3SYyLbKJF8Rj&X-Amz-Signature=b928fba25b479fac7dd546a0fa76287233d200bc907b655dd5473bb5c9f984de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

