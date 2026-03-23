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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWMAQW7%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8WsjjieAuHMFjKXNk9S90epu6HP5wAm8%2BJP00QUBCgIhAII%2BldNqN6Wejl4wHz5vQVNx4c6JyZsVNadE6BLMYDZjKv8DCHIQABoMNjM3NDIzMTgzODA1Igz4MjdMtnm6iXT95WMq3AOmjAgNvA6X3wsAw1lEJRPfqXLDJ4cfYubPxXrDFVHLOmUszqpsAkzgA8hC4UrhQmC3Fp65eXRF%2BpUuPWpKXzRnhoG0l1w91LwK2k7lCFxlkmnKG%2FkfIRPIH3ZAiBSC1Stf3%2FrhYxgG2istlPTuOvmV5bJUDRqcsrVWCWy6QqF7lEecgaKCUM39mrQmXrI41JFjup637mcnAb4786L4RLOTFgHLhiWci%2BhoSeT59MCZakDpF5%2Bh9Jvr7075xIc6aFA%2FEctsSbabuSLVKMZDKwZVEhvre3A4C0DvK8WFgiPk0H%2FIYoOvbYq81UxE4I08tDUcpduTotOj1mXoZHkV0qatqq11%2FB4Exw85V3qDu3n64eaUDHIngNhbaUNK%2F%2F19vIXPRzbKG8l4N6nq3OaKZrv6dBJsY%2FMWiE7LvvtxwBBV050BFsdYtmObjzHipMvlG46n3dXhIPERg6SdawO9Yqlz5A0%2FL2ZTWI%2BZUqvvlL4eETyuzZekcCvW5f37O5501cCOxs33Mig5ISrdcYkIV5KwXJeWd4yhjg0ImSHIppSbVKSjaNuqfawkjL%2FBpfFSZ6mGWEtl4p4Euv5STEWH6SC2Ea1GYmSaNLYsFS6fy5dkwlxWSqethlN9CVbQeDCUpILOBjqkAWq9IgoEbZRjJrUuaoiU%2Bo4YMsPYSDydRQm3pQQGjgYCIgZZrrLNmYZbd%2BvzgY4o%2BnoUYLY9uhgVwOcO0KEbhr3nCNmjnM4Xaw1Y%2F%2B04ofdRFP8W1mFRTsuIxKhz6YDZL0MxJNLRZrCxHx0ZQky03n28vh0nJ6cM1XHlFlRuSD4jFZrHv1kbf8ZWDhydxtmGmJC9QgkTFIvGn%2FE9yVxRjNVXm3xq&X-Amz-Signature=5a3799b21a68f0b8e30136934681b5b5ca51c346cc083fd6cf15477241a06cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DVKVCC%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNQJsB0hvY59QY7hbpCIHpr5%2Fvk9%2FWvMfiaaJfuevfaAiBYG3U2MVzN72ZgDjjdUFO7%2BOEqLv%2BjO5TMob%2F7xsy7MSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMQjwA5kBMo%2F3WjNP0KtwDWaBhyrSIQjrASW90elWEwQ8%2B1b6s4%2Bezs8ssUJM%2B5%2BdphrH4spGM81QoTruYBT4373l%2Frn1%2FLpxH2rFGtIKUWDnnTwP0OX0KxFSXJYNTW5kz3k22kxIYJ%2FIDiKlh0M0TbRLAczrK3kBbucRW5Jnp8Mk46fcbIdD1Be15diI7KYJ4Cva296dTeWaAfhEN5QMzCN%2BK6a3kIhOSBJqJkebykPoTbXM5rs7JEfaCuOkoPwggSnMlDDZDBI28fj90cFSAGmeu6y3lM4UTuVn0zjZZBFrLGwdMrm%2FN0gMk%2BseTVYhgomrf%2F2k4VWl6sU0CkD2sRwoIk9saIclpMxgFlUri3fQYfGiYS6PKKP2iAiqwOvxBYAUAy0qli%2BEyAU2lQYK4kwhLrxsGdV3NjQX7TyoUm5UEcss%2F0%2FENZP32awe6FQw4ttIrT7AmXcv3ptZ338nBgNrGKq5tUJuO99fjT%2B7WJYo0H7kwOJ2RgACgAHVtubaUhs1HS406hFPBYeS44Ao%2Fd0BHeh96k2GNgjoQKUz5mxh50NWPrcB7GSOgYVd6a4JIyjqqEUyEPOQIauiyWeHA0dCmjhigBWtYMFhR8Wn5szzz6jEWiZ2%2FT5mxDult0BPTRFgJbKjQIqApQCAwnaSCzgY6pgGTAfrIJkQyJI0VPjCKldYILOIU55%2BbJm%2FCAJGy58YCwiiRFeRITQQy3XfzTXk02%2FHMe3YyBDrx6Z4d%2BCMoPhR2AHjXuSYEA8QbokmFfNKZsp41y%2BtfMKGbZnZYyBaPePv8vz6DOtk1VKUPv%2BBvwVsXOXuzC6HNSh0%2F5TXZANrGyCfc5hxdgAD3mH2NZZSjAuANkV8D4Md0zSeag4vSw%2Fdyot5kLrtw&X-Amz-Signature=683a70ae9b9988bf9bb1d7fa83ba0f5dc149a090e62ca755ca6422270858faa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DVKVCC%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNQJsB0hvY59QY7hbpCIHpr5%2Fvk9%2FWvMfiaaJfuevfaAiBYG3U2MVzN72ZgDjjdUFO7%2BOEqLv%2BjO5TMob%2F7xsy7MSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMQjwA5kBMo%2F3WjNP0KtwDWaBhyrSIQjrASW90elWEwQ8%2B1b6s4%2Bezs8ssUJM%2B5%2BdphrH4spGM81QoTruYBT4373l%2Frn1%2FLpxH2rFGtIKUWDnnTwP0OX0KxFSXJYNTW5kz3k22kxIYJ%2FIDiKlh0M0TbRLAczrK3kBbucRW5Jnp8Mk46fcbIdD1Be15diI7KYJ4Cva296dTeWaAfhEN5QMzCN%2BK6a3kIhOSBJqJkebykPoTbXM5rs7JEfaCuOkoPwggSnMlDDZDBI28fj90cFSAGmeu6y3lM4UTuVn0zjZZBFrLGwdMrm%2FN0gMk%2BseTVYhgomrf%2F2k4VWl6sU0CkD2sRwoIk9saIclpMxgFlUri3fQYfGiYS6PKKP2iAiqwOvxBYAUAy0qli%2BEyAU2lQYK4kwhLrxsGdV3NjQX7TyoUm5UEcss%2F0%2FENZP32awe6FQw4ttIrT7AmXcv3ptZ338nBgNrGKq5tUJuO99fjT%2B7WJYo0H7kwOJ2RgACgAHVtubaUhs1HS406hFPBYeS44Ao%2Fd0BHeh96k2GNgjoQKUz5mxh50NWPrcB7GSOgYVd6a4JIyjqqEUyEPOQIauiyWeHA0dCmjhigBWtYMFhR8Wn5szzz6jEWiZ2%2FT5mxDult0BPTRFgJbKjQIqApQCAwnaSCzgY6pgGTAfrIJkQyJI0VPjCKldYILOIU55%2BbJm%2FCAJGy58YCwiiRFeRITQQy3XfzTXk02%2FHMe3YyBDrx6Z4d%2BCMoPhR2AHjXuSYEA8QbokmFfNKZsp41y%2BtfMKGbZnZYyBaPePv8vz6DOtk1VKUPv%2BBvwVsXOXuzC6HNSh0%2F5TXZANrGyCfc5hxdgAD3mH2NZZSjAuANkV8D4Md0zSeag4vSw%2Fdyot5kLrtw&X-Amz-Signature=351870f5f4f6773daf721f2d25f76aca4a1b53f3abb89914848b0a21edfac524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DVKVCC%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNQJsB0hvY59QY7hbpCIHpr5%2Fvk9%2FWvMfiaaJfuevfaAiBYG3U2MVzN72ZgDjjdUFO7%2BOEqLv%2BjO5TMob%2F7xsy7MSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMQjwA5kBMo%2F3WjNP0KtwDWaBhyrSIQjrASW90elWEwQ8%2B1b6s4%2Bezs8ssUJM%2B5%2BdphrH4spGM81QoTruYBT4373l%2Frn1%2FLpxH2rFGtIKUWDnnTwP0OX0KxFSXJYNTW5kz3k22kxIYJ%2FIDiKlh0M0TbRLAczrK3kBbucRW5Jnp8Mk46fcbIdD1Be15diI7KYJ4Cva296dTeWaAfhEN5QMzCN%2BK6a3kIhOSBJqJkebykPoTbXM5rs7JEfaCuOkoPwggSnMlDDZDBI28fj90cFSAGmeu6y3lM4UTuVn0zjZZBFrLGwdMrm%2FN0gMk%2BseTVYhgomrf%2F2k4VWl6sU0CkD2sRwoIk9saIclpMxgFlUri3fQYfGiYS6PKKP2iAiqwOvxBYAUAy0qli%2BEyAU2lQYK4kwhLrxsGdV3NjQX7TyoUm5UEcss%2F0%2FENZP32awe6FQw4ttIrT7AmXcv3ptZ338nBgNrGKq5tUJuO99fjT%2B7WJYo0H7kwOJ2RgACgAHVtubaUhs1HS406hFPBYeS44Ao%2Fd0BHeh96k2GNgjoQKUz5mxh50NWPrcB7GSOgYVd6a4JIyjqqEUyEPOQIauiyWeHA0dCmjhigBWtYMFhR8Wn5szzz6jEWiZ2%2FT5mxDult0BPTRFgJbKjQIqApQCAwnaSCzgY6pgGTAfrIJkQyJI0VPjCKldYILOIU55%2BbJm%2FCAJGy58YCwiiRFeRITQQy3XfzTXk02%2FHMe3YyBDrx6Z4d%2BCMoPhR2AHjXuSYEA8QbokmFfNKZsp41y%2BtfMKGbZnZYyBaPePv8vz6DOtk1VKUPv%2BBvwVsXOXuzC6HNSh0%2F5TXZANrGyCfc5hxdgAD3mH2NZZSjAuANkV8D4Md0zSeag4vSw%2Fdyot5kLrtw&X-Amz-Signature=bf17efb0fbdd39f7e4027a5fba7e66e1665df03c8110f0c513834e47c63aa7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DVKVCC%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNQJsB0hvY59QY7hbpCIHpr5%2Fvk9%2FWvMfiaaJfuevfaAiBYG3U2MVzN72ZgDjjdUFO7%2BOEqLv%2BjO5TMob%2F7xsy7MSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMQjwA5kBMo%2F3WjNP0KtwDWaBhyrSIQjrASW90elWEwQ8%2B1b6s4%2Bezs8ssUJM%2B5%2BdphrH4spGM81QoTruYBT4373l%2Frn1%2FLpxH2rFGtIKUWDnnTwP0OX0KxFSXJYNTW5kz3k22kxIYJ%2FIDiKlh0M0TbRLAczrK3kBbucRW5Jnp8Mk46fcbIdD1Be15diI7KYJ4Cva296dTeWaAfhEN5QMzCN%2BK6a3kIhOSBJqJkebykPoTbXM5rs7JEfaCuOkoPwggSnMlDDZDBI28fj90cFSAGmeu6y3lM4UTuVn0zjZZBFrLGwdMrm%2FN0gMk%2BseTVYhgomrf%2F2k4VWl6sU0CkD2sRwoIk9saIclpMxgFlUri3fQYfGiYS6PKKP2iAiqwOvxBYAUAy0qli%2BEyAU2lQYK4kwhLrxsGdV3NjQX7TyoUm5UEcss%2F0%2FENZP32awe6FQw4ttIrT7AmXcv3ptZ338nBgNrGKq5tUJuO99fjT%2B7WJYo0H7kwOJ2RgACgAHVtubaUhs1HS406hFPBYeS44Ao%2Fd0BHeh96k2GNgjoQKUz5mxh50NWPrcB7GSOgYVd6a4JIyjqqEUyEPOQIauiyWeHA0dCmjhigBWtYMFhR8Wn5szzz6jEWiZ2%2FT5mxDult0BPTRFgJbKjQIqApQCAwnaSCzgY6pgGTAfrIJkQyJI0VPjCKldYILOIU55%2BbJm%2FCAJGy58YCwiiRFeRITQQy3XfzTXk02%2FHMe3YyBDrx6Z4d%2BCMoPhR2AHjXuSYEA8QbokmFfNKZsp41y%2BtfMKGbZnZYyBaPePv8vz6DOtk1VKUPv%2BBvwVsXOXuzC6HNSh0%2F5TXZANrGyCfc5hxdgAD3mH2NZZSjAuANkV8D4Md0zSeag4vSw%2Fdyot5kLrtw&X-Amz-Signature=e31ebe9287e25bd8b3e39c110ecc9748698c572b63e754db7923f08579b4f65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DVKVCC%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNQJsB0hvY59QY7hbpCIHpr5%2Fvk9%2FWvMfiaaJfuevfaAiBYG3U2MVzN72ZgDjjdUFO7%2BOEqLv%2BjO5TMob%2F7xsy7MSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMQjwA5kBMo%2F3WjNP0KtwDWaBhyrSIQjrASW90elWEwQ8%2B1b6s4%2Bezs8ssUJM%2B5%2BdphrH4spGM81QoTruYBT4373l%2Frn1%2FLpxH2rFGtIKUWDnnTwP0OX0KxFSXJYNTW5kz3k22kxIYJ%2FIDiKlh0M0TbRLAczrK3kBbucRW5Jnp8Mk46fcbIdD1Be15diI7KYJ4Cva296dTeWaAfhEN5QMzCN%2BK6a3kIhOSBJqJkebykPoTbXM5rs7JEfaCuOkoPwggSnMlDDZDBI28fj90cFSAGmeu6y3lM4UTuVn0zjZZBFrLGwdMrm%2FN0gMk%2BseTVYhgomrf%2F2k4VWl6sU0CkD2sRwoIk9saIclpMxgFlUri3fQYfGiYS6PKKP2iAiqwOvxBYAUAy0qli%2BEyAU2lQYK4kwhLrxsGdV3NjQX7TyoUm5UEcss%2F0%2FENZP32awe6FQw4ttIrT7AmXcv3ptZ338nBgNrGKq5tUJuO99fjT%2B7WJYo0H7kwOJ2RgACgAHVtubaUhs1HS406hFPBYeS44Ao%2Fd0BHeh96k2GNgjoQKUz5mxh50NWPrcB7GSOgYVd6a4JIyjqqEUyEPOQIauiyWeHA0dCmjhigBWtYMFhR8Wn5szzz6jEWiZ2%2FT5mxDult0BPTRFgJbKjQIqApQCAwnaSCzgY6pgGTAfrIJkQyJI0VPjCKldYILOIU55%2BbJm%2FCAJGy58YCwiiRFeRITQQy3XfzTXk02%2FHMe3YyBDrx6Z4d%2BCMoPhR2AHjXuSYEA8QbokmFfNKZsp41y%2BtfMKGbZnZYyBaPePv8vz6DOtk1VKUPv%2BBvwVsXOXuzC6HNSh0%2F5TXZANrGyCfc5hxdgAD3mH2NZZSjAuANkV8D4Md0zSeag4vSw%2Fdyot5kLrtw&X-Amz-Signature=da6ff0413bfb9effe39f76c4bf41f380501e64cc9865c1dd4863cc39b18259ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWMAQW7%2F20260323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260323T022305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg8WsjjieAuHMFjKXNk9S90epu6HP5wAm8%2BJP00QUBCgIhAII%2BldNqN6Wejl4wHz5vQVNx4c6JyZsVNadE6BLMYDZjKv8DCHIQABoMNjM3NDIzMTgzODA1Igz4MjdMtnm6iXT95WMq3AOmjAgNvA6X3wsAw1lEJRPfqXLDJ4cfYubPxXrDFVHLOmUszqpsAkzgA8hC4UrhQmC3Fp65eXRF%2BpUuPWpKXzRnhoG0l1w91LwK2k7lCFxlkmnKG%2FkfIRPIH3ZAiBSC1Stf3%2FrhYxgG2istlPTuOvmV5bJUDRqcsrVWCWy6QqF7lEecgaKCUM39mrQmXrI41JFjup637mcnAb4786L4RLOTFgHLhiWci%2BhoSeT59MCZakDpF5%2Bh9Jvr7075xIc6aFA%2FEctsSbabuSLVKMZDKwZVEhvre3A4C0DvK8WFgiPk0H%2FIYoOvbYq81UxE4I08tDUcpduTotOj1mXoZHkV0qatqq11%2FB4Exw85V3qDu3n64eaUDHIngNhbaUNK%2F%2F19vIXPRzbKG8l4N6nq3OaKZrv6dBJsY%2FMWiE7LvvtxwBBV050BFsdYtmObjzHipMvlG46n3dXhIPERg6SdawO9Yqlz5A0%2FL2ZTWI%2BZUqvvlL4eETyuzZekcCvW5f37O5501cCOxs33Mig5ISrdcYkIV5KwXJeWd4yhjg0ImSHIppSbVKSjaNuqfawkjL%2FBpfFSZ6mGWEtl4p4Euv5STEWH6SC2Ea1GYmSaNLYsFS6fy5dkwlxWSqethlN9CVbQeDCUpILOBjqkAWq9IgoEbZRjJrUuaoiU%2Bo4YMsPYSDydRQm3pQQGjgYCIgZZrrLNmYZbd%2BvzgY4o%2BnoUYLY9uhgVwOcO0KEbhr3nCNmjnM4Xaw1Y%2F%2B04ofdRFP8W1mFRTsuIxKhz6YDZL0MxJNLRZrCxHx0ZQky03n28vh0nJ6cM1XHlFlRuSD4jFZrHv1kbf8ZWDhydxtmGmJC9QgkTFIvGn%2FE9yVxRjNVXm3xq&X-Amz-Signature=fbb8b01411b5e62b9dd841a5b48395b8528e63c5406fd0f1e26bf9e8c94f22ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

