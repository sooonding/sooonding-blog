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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOV6QKOX%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8q%2FLzqRDQ7wOYtOeal38iqsJVrE6VeYic7%2BtXG03aIQIgazw%2FgvxoBXXwnsp9dQwtNMcsD9NkGqCnMdwWJFOqEIMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCulfImCqd%2FqKxygjSrcA%2BH%2F9jh7ZsFuL3uNb8kVVOwm57H8BmnqmnyDX3S%2BfUAJu%2BkniyrU6Ua50dSDn1g01PG%2F2qBkjW6BS9SEHEJVauq5V05lTaUenyTGwQTez%2FoQwljaiD2ZzuGSUQOPOKm8Wyp7b6v%2FohCCH2PsNqMJ2VV6wdTQ%2B577YU9se7%2B90aHOP8FA5qfS6rpfLHAyt0IFFM%2BfT2IjeHfZ0c6cSFp8bWyjNalkh%2F2dQlSxlznqvCOnQnyAFYtzIiWPKpOxmMsReCkwm5z23c3EOqCA4gLUxqBVkoZ9OHVv06HeHfxw3TU0WVifAtISu8oIEnpEvHNugLDUKrHo%2BUTe8IZcIxGptPElClhS7lOxU6eLHhKRXa8%2FAlqKll6xdkgmxkCAG3o007%2Bmn4Nm4JxbzTY8q46pFxsm%2F7kq6TmjtwO6HjWQ6UjSwgIJItIXzOJHHULdt%2B%2Fh6mTZ6FsTgHR8aAtpAWuG82AwNe%2Bu9%2FdjBzhTNGPX%2FglLLNthTvoThRtug4FpkEmGM1rG1k3cic6veFzW9LwHAe4APBaY4lbLhlSCw4oAAJEXl7VPcgV%2FTs4zi%2FNTU%2Bk%2B5YnfZMwSkiNFZHwVKuRjn0MMVSrUbonM0IOtaV0BJ4FWoqLEF%2BzI3%2FbJKcmxMMrlkMsGOqUBBQeQxaGbCmBbT%2BQGpePpPFi%2BKDZMFIiiepxNr7bnamgcD2tEADVh%2Bo6DZuIw%2FnMUzr92QLwRoBwNba31lGVumFTVKpguwT9xhb32oRRvcRbBF7Q06HKOWVeBogEYCBrabERt3c4WDxbCDLPcbc5DMjVZcL%2Bdtn4%2FB3O44r2PIfN4%2FgEGLSFyJ1lI0a%2FfvPmWkJca5j3dI38Gna83g27Ra9mZX8C8&X-Amz-Signature=6225e9b4ad654607d125a09781ef672b7c8b5cc489985a2bfe66bdaeb29634ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4HR2T%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB22nVXXVhbycDA%2Bb6%2FR8wwxC07uNSVN4Rdkov3rXbZ5AiBIB50c4NyDVr%2FSh2QIdNhB0MLlUzj4G%2Fvu3nPKjO5NSiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMySV50rYYpU3mZc0ZKtwDL%2FWX6FeQFeegKi5DlEEwafwnMm7kwenhWCPlSfziPKRf7YSZr8CMIvTj0ZT%2Ff%2FsDMHnts3gTvJQBLWhirwhY3lm5HsFfTWb0TATtOf5WKER65PRLvkRxZprW5YuEvmmfo%2BYqQ%2B0E7IcM%2BTOSS1WfhvZiZR7FRQn%2BbcP5I7prv5PyhNTiTf7lzFiX0hlTCeEceXcYmupp8CnVF3ZRrfzRd3KRo4tGQnW34le0F88NAtNB55a%2BTgVF5JobUU2Inb6lG1HmI8Eddt8bHBMP1ls%2BVAoJ9I8UM4MJwIQxD1oO3PsjoIdAI1j9nVwRYbymGf2zX%2FdD84ClK1TxXv9qAuZkGrkdQGEz01yC85RPN9fYeXX2aY9S7buLSz8mZivEYYY0fmWDfEXfyTGKtYODAmsKT8lqEAix0du0tFIz1ZE5senx2DFj4AA995DHEj0cFVrQTlNz6URyM3ywQd9N%2FMRNfHJt8vhKt%2BIVuLwNn6mdlHff6aXsYNPUyAM1Vbjivnq2LArD6xU3z36Ji6xDS05XkGfoOx%2FthnNDvqmfx0x8RWvDmCPq0SMM1t8DD0B9SdtYbpGAwWRHsMftvlJc9TTeDefkV%2BjOPBuvO3M26meWItGW7l%2BjMVIPfb5tsB0ww%2BSQywY6pgHs6C9O2YOzGQ6CxYyrQbeNW%2BAzIpvypAWXrrn4Tq%2BKFCcyJmrpLCUSSYi%2FuLK%2BqT8PQKEpR8cReI5dxOpf%2BLo%2FbuHc9WzXl4q5zpWf6X%2BM0Rz3wKWJwo8wID%2F1xrdlVvrwAbEwrXRQavGLOpbL66JFAnJZO2JOzKB1Fane6ZCC47Roue9BAZG8eB0pkPK4CD0X9k4w6nGgdocaoC1WquoaRgdtR7S%2F&X-Amz-Signature=1bb424a708578eca577c4a552259a7775759558683c3c734cd2caa3499d72e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4HR2T%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB22nVXXVhbycDA%2Bb6%2FR8wwxC07uNSVN4Rdkov3rXbZ5AiBIB50c4NyDVr%2FSh2QIdNhB0MLlUzj4G%2Fvu3nPKjO5NSiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMySV50rYYpU3mZc0ZKtwDL%2FWX6FeQFeegKi5DlEEwafwnMm7kwenhWCPlSfziPKRf7YSZr8CMIvTj0ZT%2Ff%2FsDMHnts3gTvJQBLWhirwhY3lm5HsFfTWb0TATtOf5WKER65PRLvkRxZprW5YuEvmmfo%2BYqQ%2B0E7IcM%2BTOSS1WfhvZiZR7FRQn%2BbcP5I7prv5PyhNTiTf7lzFiX0hlTCeEceXcYmupp8CnVF3ZRrfzRd3KRo4tGQnW34le0F88NAtNB55a%2BTgVF5JobUU2Inb6lG1HmI8Eddt8bHBMP1ls%2BVAoJ9I8UM4MJwIQxD1oO3PsjoIdAI1j9nVwRYbymGf2zX%2FdD84ClK1TxXv9qAuZkGrkdQGEz01yC85RPN9fYeXX2aY9S7buLSz8mZivEYYY0fmWDfEXfyTGKtYODAmsKT8lqEAix0du0tFIz1ZE5senx2DFj4AA995DHEj0cFVrQTlNz6URyM3ywQd9N%2FMRNfHJt8vhKt%2BIVuLwNn6mdlHff6aXsYNPUyAM1Vbjivnq2LArD6xU3z36Ji6xDS05XkGfoOx%2FthnNDvqmfx0x8RWvDmCPq0SMM1t8DD0B9SdtYbpGAwWRHsMftvlJc9TTeDefkV%2BjOPBuvO3M26meWItGW7l%2BjMVIPfb5tsB0ww%2BSQywY6pgHs6C9O2YOzGQ6CxYyrQbeNW%2BAzIpvypAWXrrn4Tq%2BKFCcyJmrpLCUSSYi%2FuLK%2BqT8PQKEpR8cReI5dxOpf%2BLo%2FbuHc9WzXl4q5zpWf6X%2BM0Rz3wKWJwo8wID%2F1xrdlVvrwAbEwrXRQavGLOpbL66JFAnJZO2JOzKB1Fane6ZCC47Roue9BAZG8eB0pkPK4CD0X9k4w6nGgdocaoC1WquoaRgdtR7S%2F&X-Amz-Signature=f1100d293768f77b221388dceaace97bd3bd831ab07b52f90d46b43c3b3e5616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4HR2T%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB22nVXXVhbycDA%2Bb6%2FR8wwxC07uNSVN4Rdkov3rXbZ5AiBIB50c4NyDVr%2FSh2QIdNhB0MLlUzj4G%2Fvu3nPKjO5NSiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMySV50rYYpU3mZc0ZKtwDL%2FWX6FeQFeegKi5DlEEwafwnMm7kwenhWCPlSfziPKRf7YSZr8CMIvTj0ZT%2Ff%2FsDMHnts3gTvJQBLWhirwhY3lm5HsFfTWb0TATtOf5WKER65PRLvkRxZprW5YuEvmmfo%2BYqQ%2B0E7IcM%2BTOSS1WfhvZiZR7FRQn%2BbcP5I7prv5PyhNTiTf7lzFiX0hlTCeEceXcYmupp8CnVF3ZRrfzRd3KRo4tGQnW34le0F88NAtNB55a%2BTgVF5JobUU2Inb6lG1HmI8Eddt8bHBMP1ls%2BVAoJ9I8UM4MJwIQxD1oO3PsjoIdAI1j9nVwRYbymGf2zX%2FdD84ClK1TxXv9qAuZkGrkdQGEz01yC85RPN9fYeXX2aY9S7buLSz8mZivEYYY0fmWDfEXfyTGKtYODAmsKT8lqEAix0du0tFIz1ZE5senx2DFj4AA995DHEj0cFVrQTlNz6URyM3ywQd9N%2FMRNfHJt8vhKt%2BIVuLwNn6mdlHff6aXsYNPUyAM1Vbjivnq2LArD6xU3z36Ji6xDS05XkGfoOx%2FthnNDvqmfx0x8RWvDmCPq0SMM1t8DD0B9SdtYbpGAwWRHsMftvlJc9TTeDefkV%2BjOPBuvO3M26meWItGW7l%2BjMVIPfb5tsB0ww%2BSQywY6pgHs6C9O2YOzGQ6CxYyrQbeNW%2BAzIpvypAWXrrn4Tq%2BKFCcyJmrpLCUSSYi%2FuLK%2BqT8PQKEpR8cReI5dxOpf%2BLo%2FbuHc9WzXl4q5zpWf6X%2BM0Rz3wKWJwo8wID%2F1xrdlVvrwAbEwrXRQavGLOpbL66JFAnJZO2JOzKB1Fane6ZCC47Roue9BAZG8eB0pkPK4CD0X9k4w6nGgdocaoC1WquoaRgdtR7S%2F&X-Amz-Signature=ec57aefc38a475c7ee1f7369c71a71a53ec49eabd3933dc1bd8ba5f6638f7906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4HR2T%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB22nVXXVhbycDA%2Bb6%2FR8wwxC07uNSVN4Rdkov3rXbZ5AiBIB50c4NyDVr%2FSh2QIdNhB0MLlUzj4G%2Fvu3nPKjO5NSiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMySV50rYYpU3mZc0ZKtwDL%2FWX6FeQFeegKi5DlEEwafwnMm7kwenhWCPlSfziPKRf7YSZr8CMIvTj0ZT%2Ff%2FsDMHnts3gTvJQBLWhirwhY3lm5HsFfTWb0TATtOf5WKER65PRLvkRxZprW5YuEvmmfo%2BYqQ%2B0E7IcM%2BTOSS1WfhvZiZR7FRQn%2BbcP5I7prv5PyhNTiTf7lzFiX0hlTCeEceXcYmupp8CnVF3ZRrfzRd3KRo4tGQnW34le0F88NAtNB55a%2BTgVF5JobUU2Inb6lG1HmI8Eddt8bHBMP1ls%2BVAoJ9I8UM4MJwIQxD1oO3PsjoIdAI1j9nVwRYbymGf2zX%2FdD84ClK1TxXv9qAuZkGrkdQGEz01yC85RPN9fYeXX2aY9S7buLSz8mZivEYYY0fmWDfEXfyTGKtYODAmsKT8lqEAix0du0tFIz1ZE5senx2DFj4AA995DHEj0cFVrQTlNz6URyM3ywQd9N%2FMRNfHJt8vhKt%2BIVuLwNn6mdlHff6aXsYNPUyAM1Vbjivnq2LArD6xU3z36Ji6xDS05XkGfoOx%2FthnNDvqmfx0x8RWvDmCPq0SMM1t8DD0B9SdtYbpGAwWRHsMftvlJc9TTeDefkV%2BjOPBuvO3M26meWItGW7l%2BjMVIPfb5tsB0ww%2BSQywY6pgHs6C9O2YOzGQ6CxYyrQbeNW%2BAzIpvypAWXrrn4Tq%2BKFCcyJmrpLCUSSYi%2FuLK%2BqT8PQKEpR8cReI5dxOpf%2BLo%2FbuHc9WzXl4q5zpWf6X%2BM0Rz3wKWJwo8wID%2F1xrdlVvrwAbEwrXRQavGLOpbL66JFAnJZO2JOzKB1Fane6ZCC47Roue9BAZG8eB0pkPK4CD0X9k4w6nGgdocaoC1WquoaRgdtR7S%2F&X-Amz-Signature=be1eeeb90afedcbf71d3bc06f9f05cbf9c341182e14049b3f766d330e84426a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ND4HR2T%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIB22nVXXVhbycDA%2Bb6%2FR8wwxC07uNSVN4Rdkov3rXbZ5AiBIB50c4NyDVr%2FSh2QIdNhB0MLlUzj4G%2Fvu3nPKjO5NSiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMySV50rYYpU3mZc0ZKtwDL%2FWX6FeQFeegKi5DlEEwafwnMm7kwenhWCPlSfziPKRf7YSZr8CMIvTj0ZT%2Ff%2FsDMHnts3gTvJQBLWhirwhY3lm5HsFfTWb0TATtOf5WKER65PRLvkRxZprW5YuEvmmfo%2BYqQ%2B0E7IcM%2BTOSS1WfhvZiZR7FRQn%2BbcP5I7prv5PyhNTiTf7lzFiX0hlTCeEceXcYmupp8CnVF3ZRrfzRd3KRo4tGQnW34le0F88NAtNB55a%2BTgVF5JobUU2Inb6lG1HmI8Eddt8bHBMP1ls%2BVAoJ9I8UM4MJwIQxD1oO3PsjoIdAI1j9nVwRYbymGf2zX%2FdD84ClK1TxXv9qAuZkGrkdQGEz01yC85RPN9fYeXX2aY9S7buLSz8mZivEYYY0fmWDfEXfyTGKtYODAmsKT8lqEAix0du0tFIz1ZE5senx2DFj4AA995DHEj0cFVrQTlNz6URyM3ywQd9N%2FMRNfHJt8vhKt%2BIVuLwNn6mdlHff6aXsYNPUyAM1Vbjivnq2LArD6xU3z36Ji6xDS05XkGfoOx%2FthnNDvqmfx0x8RWvDmCPq0SMM1t8DD0B9SdtYbpGAwWRHsMftvlJc9TTeDefkV%2BjOPBuvO3M26meWItGW7l%2BjMVIPfb5tsB0ww%2BSQywY6pgHs6C9O2YOzGQ6CxYyrQbeNW%2BAzIpvypAWXrrn4Tq%2BKFCcyJmrpLCUSSYi%2FuLK%2BqT8PQKEpR8cReI5dxOpf%2BLo%2FbuHc9WzXl4q5zpWf6X%2BM0Rz3wKWJwo8wID%2F1xrdlVvrwAbEwrXRQavGLOpbL66JFAnJZO2JOzKB1Fane6ZCC47Roue9BAZG8eB0pkPK4CD0X9k4w6nGgdocaoC1WquoaRgdtR7S%2F&X-Amz-Signature=6f1d0eae82c76f160ed43ce6aa6bf2a83eaa758f4e04051487f44d2c8ccc1a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOV6QKOX%2F20260112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260112T011138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC8q%2FLzqRDQ7wOYtOeal38iqsJVrE6VeYic7%2BtXG03aIQIgazw%2FgvxoBXXwnsp9dQwtNMcsD9NkGqCnMdwWJFOqEIMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCulfImCqd%2FqKxygjSrcA%2BH%2F9jh7ZsFuL3uNb8kVVOwm57H8BmnqmnyDX3S%2BfUAJu%2BkniyrU6Ua50dSDn1g01PG%2F2qBkjW6BS9SEHEJVauq5V05lTaUenyTGwQTez%2FoQwljaiD2ZzuGSUQOPOKm8Wyp7b6v%2FohCCH2PsNqMJ2VV6wdTQ%2B577YU9se7%2B90aHOP8FA5qfS6rpfLHAyt0IFFM%2BfT2IjeHfZ0c6cSFp8bWyjNalkh%2F2dQlSxlznqvCOnQnyAFYtzIiWPKpOxmMsReCkwm5z23c3EOqCA4gLUxqBVkoZ9OHVv06HeHfxw3TU0WVifAtISu8oIEnpEvHNugLDUKrHo%2BUTe8IZcIxGptPElClhS7lOxU6eLHhKRXa8%2FAlqKll6xdkgmxkCAG3o007%2Bmn4Nm4JxbzTY8q46pFxsm%2F7kq6TmjtwO6HjWQ6UjSwgIJItIXzOJHHULdt%2B%2Fh6mTZ6FsTgHR8aAtpAWuG82AwNe%2Bu9%2FdjBzhTNGPX%2FglLLNthTvoThRtug4FpkEmGM1rG1k3cic6veFzW9LwHAe4APBaY4lbLhlSCw4oAAJEXl7VPcgV%2FTs4zi%2FNTU%2Bk%2B5YnfZMwSkiNFZHwVKuRjn0MMVSrUbonM0IOtaV0BJ4FWoqLEF%2BzI3%2FbJKcmxMMrlkMsGOqUBBQeQxaGbCmBbT%2BQGpePpPFi%2BKDZMFIiiepxNr7bnamgcD2tEADVh%2Bo6DZuIw%2FnMUzr92QLwRoBwNba31lGVumFTVKpguwT9xhb32oRRvcRbBF7Q06HKOWVeBogEYCBrabERt3c4WDxbCDLPcbc5DMjVZcL%2Bdtn4%2FB3O44r2PIfN4%2FgEGLSFyJ1lI0a%2FfvPmWkJca5j3dI38Gna83g27Ra9mZX8C8&X-Amz-Signature=8d60ebc59700f9ed5b991456a5aa8e63502a07dfab773ab009ea513a5b8c2a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

