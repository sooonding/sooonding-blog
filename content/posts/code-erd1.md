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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5RLWTQ%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICkuaIkm75%2FxYpLZWuUVGQCkjB8KDvuLRtvdMwHeGKdRAiBFSprgJuBfsi%2Fs4MILnG%2BLnWM8FCle5eeGCkLNjlgdJir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMIILPdIizUWjyH3TGKtwDefLYP2o3SPaPubYf5M5m2KZIO4knZ%2FjKBQ%2BUieADkn4MNOPOjcdCsZw5%2F98EwcDOlOEYcuu8eJ4hoBdy2tEfdqZoWXOe%2Bb6VqWAlSVFN62VAtnZb224tNG%2BRBzhpao9pOUp0L%2F18JmXaWXH3h5o20jqttlsB0lnkQDSs82PIsya1eWgEYVUFCR2SSCyzWrCv9jW4CnEHF9TbUDE8T10UozDn635afchavml677L0i9K0AJ7m52zsDOM5qP0Eya4zF8rczkXnsxBKNlK7BYerO6%2BwTnDlZ0LERXoPUBLq1R4bld1hvK2EqiS96WXGvH6nhtGuB2oxOI7ZSvkTpwO520aFCXm84%2FxT5FvvQJHElpFYO%2Bn5%2F4vJz2860TrAAQWWDfEMfhGcQgZBTt1t33oXAFJKE03QZxAFVPjgisqrFrVF8Qfe2gNiuEGmgnyCgabziHoZq4l4vk5uM6OhoLVzyxwIy3vPXAJMNuCgNzxx7mcaYhpYGK7z79poxr%2FCa9nzIQEMCcZXx0kUubqUxNmw2ilRDmu6ubTvPjtNgA1Y5T930L7A6eZ9oWVFttCJ9HsSjnNMLDCU3dHE3xYm3tUZ2np3Qn8tq%2BoIEJ8QeczNDwAEuQx8YFIybceh2Lww%2BeLyyQY6pgEs4QEd9dJ5dzCze1Sz668z9tMAsHllDtiKouHEFZw2Ia5xo4O53IW077R7fQ2GbtcKEBMew66fJ7LvcbwwpjZZDWNTjuo%2FznyRDBvv%2F923%2BLwkhnzt%2BYHB7F5enANjvoYdq6pX1WfUirYc9DC0RCqMUMC2bJ0MZHGWsdQOE%2BglY8y4s1h9N3pwFJZdWzjW%2BKe3zt3wmUdT8QRJPWJc2mwDmKih%2BKvc&X-Amz-Signature=14468c92ca0b66fec3bacf11caed325d880deec0b2375fdce0aeb3886f0b1795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7HL4IN%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCsZQYsYvqLnGZ%2B9y%2Fw%2FBtlRyC%2Buv0ohsGZsL5sjuOA%2BgIhAI1TjiiM9Ix09FTh8VBYt0SSoBEP78UAJvWgcbXgI8%2FmKv8DCBEQABoMNjM3NDIzMTgzODA1IgyZQOyYqmmWHVAggnIq3ANFEQNEHB%2Byd%2Bl%2FJnU6W4Yd1n13OKSbUAq2a3DR21PAtn5t8TV3YTB4WoeT%2Bu43Fp25oF8AziaI%2BNQTNV6u067q0Mgb63z1mV8zpLYZX4RddD2xkkNCKsGggZieOBAwjDVN8pMdsLAAk99z7BySEe%2BeLTVkgfzirNxNlslEtDD8liZ7vAs1%2B%2BSv39G4y4dyaclDDxmZmWstvvMb4GQDZrS1AL33AmNutZBXkrEO5yqdbwCyVawlKerkyxkLqNlsnjbn95NgwZo8nlPW5LF0tpLPoaqy7s3Bl%2BMHtba0Ims0%2Bs4p0RbomDCIsWYcXUlFCrzHtv6MWoXBEg1taaD%2Bbz%2BaN5X90yIP6zMFDOS%2F82vS3RYiGJ3YiZ3P8RlsCg3zDVMbFS4BYMSyyL699lgOe8FawiM6bEZOzmI5OzFgux%2F6S8usSowbDlLTohdptnPtogqrZLJNHGUbYsG6uUdYeQSTbmVahc2GmT8rX2TM5IdQTdw9SGYJo8l7hh3CyAepenOvtwSO7toSEZWyyDIoO5tQ2U7YS3vUYXPiACRw09xrCwTFBD9aG3MjZn%2F4wBZ%2BbvfG2L3XJ2RRaykPVKfEu1IpmJhu4E8BHZP98ST7REQqXlOYaAX1FWr%2BHdDzlTCL4vLJBjqkATFJrBQFCcCm3H%2F89rJ7F5YPhrpp7k8yEFh50ZfjdZfGjkyjog7yUJBtzaxa4yGoKhqTkfqzWPpRSa9jQ2%2BAzSX%2FkG4%2BMabtTA%2FlY4NQsLh%2Fh7HjkJtgI2ADDJGFLx1rdESSp2fvLFyrOei4S2qfYx%2F%2BIl%2F9H1Rrqths6cdxsXCAVCycBcgaBgGJJ%2B6f8O2hWsck9c%2Fd9rzyONGYQsCXiXTITHGs&X-Amz-Signature=c616ffcad84e13f16fac7cf13b0b02bee5dbb384f35905a3a7cda8f604fefc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7HL4IN%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCsZQYsYvqLnGZ%2B9y%2Fw%2FBtlRyC%2Buv0ohsGZsL5sjuOA%2BgIhAI1TjiiM9Ix09FTh8VBYt0SSoBEP78UAJvWgcbXgI8%2FmKv8DCBEQABoMNjM3NDIzMTgzODA1IgyZQOyYqmmWHVAggnIq3ANFEQNEHB%2Byd%2Bl%2FJnU6W4Yd1n13OKSbUAq2a3DR21PAtn5t8TV3YTB4WoeT%2Bu43Fp25oF8AziaI%2BNQTNV6u067q0Mgb63z1mV8zpLYZX4RddD2xkkNCKsGggZieOBAwjDVN8pMdsLAAk99z7BySEe%2BeLTVkgfzirNxNlslEtDD8liZ7vAs1%2B%2BSv39G4y4dyaclDDxmZmWstvvMb4GQDZrS1AL33AmNutZBXkrEO5yqdbwCyVawlKerkyxkLqNlsnjbn95NgwZo8nlPW5LF0tpLPoaqy7s3Bl%2BMHtba0Ims0%2Bs4p0RbomDCIsWYcXUlFCrzHtv6MWoXBEg1taaD%2Bbz%2BaN5X90yIP6zMFDOS%2F82vS3RYiGJ3YiZ3P8RlsCg3zDVMbFS4BYMSyyL699lgOe8FawiM6bEZOzmI5OzFgux%2F6S8usSowbDlLTohdptnPtogqrZLJNHGUbYsG6uUdYeQSTbmVahc2GmT8rX2TM5IdQTdw9SGYJo8l7hh3CyAepenOvtwSO7toSEZWyyDIoO5tQ2U7YS3vUYXPiACRw09xrCwTFBD9aG3MjZn%2F4wBZ%2BbvfG2L3XJ2RRaykPVKfEu1IpmJhu4E8BHZP98ST7REQqXlOYaAX1FWr%2BHdDzlTCL4vLJBjqkATFJrBQFCcCm3H%2F89rJ7F5YPhrpp7k8yEFh50ZfjdZfGjkyjog7yUJBtzaxa4yGoKhqTkfqzWPpRSa9jQ2%2BAzSX%2FkG4%2BMabtTA%2FlY4NQsLh%2Fh7HjkJtgI2ADDJGFLx1rdESSp2fvLFyrOei4S2qfYx%2F%2BIl%2F9H1Rrqths6cdxsXCAVCycBcgaBgGJJ%2B6f8O2hWsck9c%2Fd9rzyONGYQsCXiXTITHGs&X-Amz-Signature=b9e1e3d9c59df3a848c224c1ade495d0dacdc6634273a74ad18a9b14a44b5f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7HL4IN%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCsZQYsYvqLnGZ%2B9y%2Fw%2FBtlRyC%2Buv0ohsGZsL5sjuOA%2BgIhAI1TjiiM9Ix09FTh8VBYt0SSoBEP78UAJvWgcbXgI8%2FmKv8DCBEQABoMNjM3NDIzMTgzODA1IgyZQOyYqmmWHVAggnIq3ANFEQNEHB%2Byd%2Bl%2FJnU6W4Yd1n13OKSbUAq2a3DR21PAtn5t8TV3YTB4WoeT%2Bu43Fp25oF8AziaI%2BNQTNV6u067q0Mgb63z1mV8zpLYZX4RddD2xkkNCKsGggZieOBAwjDVN8pMdsLAAk99z7BySEe%2BeLTVkgfzirNxNlslEtDD8liZ7vAs1%2B%2BSv39G4y4dyaclDDxmZmWstvvMb4GQDZrS1AL33AmNutZBXkrEO5yqdbwCyVawlKerkyxkLqNlsnjbn95NgwZo8nlPW5LF0tpLPoaqy7s3Bl%2BMHtba0Ims0%2Bs4p0RbomDCIsWYcXUlFCrzHtv6MWoXBEg1taaD%2Bbz%2BaN5X90yIP6zMFDOS%2F82vS3RYiGJ3YiZ3P8RlsCg3zDVMbFS4BYMSyyL699lgOe8FawiM6bEZOzmI5OzFgux%2F6S8usSowbDlLTohdptnPtogqrZLJNHGUbYsG6uUdYeQSTbmVahc2GmT8rX2TM5IdQTdw9SGYJo8l7hh3CyAepenOvtwSO7toSEZWyyDIoO5tQ2U7YS3vUYXPiACRw09xrCwTFBD9aG3MjZn%2F4wBZ%2BbvfG2L3XJ2RRaykPVKfEu1IpmJhu4E8BHZP98ST7REQqXlOYaAX1FWr%2BHdDzlTCL4vLJBjqkATFJrBQFCcCm3H%2F89rJ7F5YPhrpp7k8yEFh50ZfjdZfGjkyjog7yUJBtzaxa4yGoKhqTkfqzWPpRSa9jQ2%2BAzSX%2FkG4%2BMabtTA%2FlY4NQsLh%2Fh7HjkJtgI2ADDJGFLx1rdESSp2fvLFyrOei4S2qfYx%2F%2BIl%2F9H1Rrqths6cdxsXCAVCycBcgaBgGJJ%2B6f8O2hWsck9c%2Fd9rzyONGYQsCXiXTITHGs&X-Amz-Signature=6e807fad56482d2710d8e79342f943dd8cf1fb408b2d1146e5da33fd2294cd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7HL4IN%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCsZQYsYvqLnGZ%2B9y%2Fw%2FBtlRyC%2Buv0ohsGZsL5sjuOA%2BgIhAI1TjiiM9Ix09FTh8VBYt0SSoBEP78UAJvWgcbXgI8%2FmKv8DCBEQABoMNjM3NDIzMTgzODA1IgyZQOyYqmmWHVAggnIq3ANFEQNEHB%2Byd%2Bl%2FJnU6W4Yd1n13OKSbUAq2a3DR21PAtn5t8TV3YTB4WoeT%2Bu43Fp25oF8AziaI%2BNQTNV6u067q0Mgb63z1mV8zpLYZX4RddD2xkkNCKsGggZieOBAwjDVN8pMdsLAAk99z7BySEe%2BeLTVkgfzirNxNlslEtDD8liZ7vAs1%2B%2BSv39G4y4dyaclDDxmZmWstvvMb4GQDZrS1AL33AmNutZBXkrEO5yqdbwCyVawlKerkyxkLqNlsnjbn95NgwZo8nlPW5LF0tpLPoaqy7s3Bl%2BMHtba0Ims0%2Bs4p0RbomDCIsWYcXUlFCrzHtv6MWoXBEg1taaD%2Bbz%2BaN5X90yIP6zMFDOS%2F82vS3RYiGJ3YiZ3P8RlsCg3zDVMbFS4BYMSyyL699lgOe8FawiM6bEZOzmI5OzFgux%2F6S8usSowbDlLTohdptnPtogqrZLJNHGUbYsG6uUdYeQSTbmVahc2GmT8rX2TM5IdQTdw9SGYJo8l7hh3CyAepenOvtwSO7toSEZWyyDIoO5tQ2U7YS3vUYXPiACRw09xrCwTFBD9aG3MjZn%2F4wBZ%2BbvfG2L3XJ2RRaykPVKfEu1IpmJhu4E8BHZP98ST7REQqXlOYaAX1FWr%2BHdDzlTCL4vLJBjqkATFJrBQFCcCm3H%2F89rJ7F5YPhrpp7k8yEFh50ZfjdZfGjkyjog7yUJBtzaxa4yGoKhqTkfqzWPpRSa9jQ2%2BAzSX%2FkG4%2BMabtTA%2FlY4NQsLh%2Fh7HjkJtgI2ADDJGFLx1rdESSp2fvLFyrOei4S2qfYx%2F%2BIl%2F9H1Rrqths6cdxsXCAVCycBcgaBgGJJ%2B6f8O2hWsck9c%2Fd9rzyONGYQsCXiXTITHGs&X-Amz-Signature=61498114f088d8de1514f4ea849f9defba52d4a7daaa22bda0a82527bf575cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7HL4IN%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCsZQYsYvqLnGZ%2B9y%2Fw%2FBtlRyC%2Buv0ohsGZsL5sjuOA%2BgIhAI1TjiiM9Ix09FTh8VBYt0SSoBEP78UAJvWgcbXgI8%2FmKv8DCBEQABoMNjM3NDIzMTgzODA1IgyZQOyYqmmWHVAggnIq3ANFEQNEHB%2Byd%2Bl%2FJnU6W4Yd1n13OKSbUAq2a3DR21PAtn5t8TV3YTB4WoeT%2Bu43Fp25oF8AziaI%2BNQTNV6u067q0Mgb63z1mV8zpLYZX4RddD2xkkNCKsGggZieOBAwjDVN8pMdsLAAk99z7BySEe%2BeLTVkgfzirNxNlslEtDD8liZ7vAs1%2B%2BSv39G4y4dyaclDDxmZmWstvvMb4GQDZrS1AL33AmNutZBXkrEO5yqdbwCyVawlKerkyxkLqNlsnjbn95NgwZo8nlPW5LF0tpLPoaqy7s3Bl%2BMHtba0Ims0%2Bs4p0RbomDCIsWYcXUlFCrzHtv6MWoXBEg1taaD%2Bbz%2BaN5X90yIP6zMFDOS%2F82vS3RYiGJ3YiZ3P8RlsCg3zDVMbFS4BYMSyyL699lgOe8FawiM6bEZOzmI5OzFgux%2F6S8usSowbDlLTohdptnPtogqrZLJNHGUbYsG6uUdYeQSTbmVahc2GmT8rX2TM5IdQTdw9SGYJo8l7hh3CyAepenOvtwSO7toSEZWyyDIoO5tQ2U7YS3vUYXPiACRw09xrCwTFBD9aG3MjZn%2F4wBZ%2BbvfG2L3XJ2RRaykPVKfEu1IpmJhu4E8BHZP98ST7REQqXlOYaAX1FWr%2BHdDzlTCL4vLJBjqkATFJrBQFCcCm3H%2F89rJ7F5YPhrpp7k8yEFh50ZfjdZfGjkyjog7yUJBtzaxa4yGoKhqTkfqzWPpRSa9jQ2%2BAzSX%2FkG4%2BMabtTA%2FlY4NQsLh%2Fh7HjkJtgI2ADDJGFLx1rdESSp2fvLFyrOei4S2qfYx%2F%2BIl%2F9H1Rrqths6cdxsXCAVCycBcgaBgGJJ%2B6f8O2hWsck9c%2Fd9rzyONGYQsCXiXTITHGs&X-Amz-Signature=18aa78f52ac3a8882e1a61115e00aeeaec907fe109227bca55436cf7814d1d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5RLWTQ%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T010220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICkuaIkm75%2FxYpLZWuUVGQCkjB8KDvuLRtvdMwHeGKdRAiBFSprgJuBfsi%2Fs4MILnG%2BLnWM8FCle5eeGCkLNjlgdJir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMIILPdIizUWjyH3TGKtwDefLYP2o3SPaPubYf5M5m2KZIO4knZ%2FjKBQ%2BUieADkn4MNOPOjcdCsZw5%2F98EwcDOlOEYcuu8eJ4hoBdy2tEfdqZoWXOe%2Bb6VqWAlSVFN62VAtnZb224tNG%2BRBzhpao9pOUp0L%2F18JmXaWXH3h5o20jqttlsB0lnkQDSs82PIsya1eWgEYVUFCR2SSCyzWrCv9jW4CnEHF9TbUDE8T10UozDn635afchavml677L0i9K0AJ7m52zsDOM5qP0Eya4zF8rczkXnsxBKNlK7BYerO6%2BwTnDlZ0LERXoPUBLq1R4bld1hvK2EqiS96WXGvH6nhtGuB2oxOI7ZSvkTpwO520aFCXm84%2FxT5FvvQJHElpFYO%2Bn5%2F4vJz2860TrAAQWWDfEMfhGcQgZBTt1t33oXAFJKE03QZxAFVPjgisqrFrVF8Qfe2gNiuEGmgnyCgabziHoZq4l4vk5uM6OhoLVzyxwIy3vPXAJMNuCgNzxx7mcaYhpYGK7z79poxr%2FCa9nzIQEMCcZXx0kUubqUxNmw2ilRDmu6ubTvPjtNgA1Y5T930L7A6eZ9oWVFttCJ9HsSjnNMLDCU3dHE3xYm3tUZ2np3Qn8tq%2BoIEJ8QeczNDwAEuQx8YFIybceh2Lww%2BeLyyQY6pgEs4QEd9dJ5dzCze1Sz668z9tMAsHllDtiKouHEFZw2Ia5xo4O53IW077R7fQ2GbtcKEBMew66fJ7LvcbwwpjZZDWNTjuo%2FznyRDBvv%2F923%2BLwkhnzt%2BYHB7F5enANjvoYdq6pX1WfUirYc9DC0RCqMUMC2bJ0MZHGWsdQOE%2BglY8y4s1h9N3pwFJZdWzjW%2BKe3zt3wmUdT8QRJPWJc2mwDmKih%2BKvc&X-Amz-Signature=b028f5a3f7ac7b2e307bf61ed3078ae475c0bbca62b7a03ae0f88a6b66c70c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

