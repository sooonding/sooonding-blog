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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZ5X2PF%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHSJeHQpvT5COHrF2nKZI5thskiNHDYea80mlrk%2FuqxTAiEA7I6UPqKHCxvm4eD5rIcj8nhFjPlDcxlm7Tj78mCdoQwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGIwM95U%2BfloPBAdkircAzb8q0Uk1vm8YeHbe4VYR6AsOZqI9XX1wmIlwLz5HS16j5BMuCRvZeYh52QcToiaI4jVowS4drRvONKyOxBHtflUT71DNSjpdnHeWP5t1Gu%2FSgdj5J5RTtYewAVbsvmJ2vfK8%2F3kVJwAwOvbhs4hNLX4ddJubc1VaSs4JSRewZw1rTuzTgkLqnfq%2FkBvsAPZUq3RhGuMtfbihMdaYcUpxVI%2FX8970M2X0WJQBXMRft7lgPNYKW5%2FujLwsbC6E%2FDkBatCjheAKjPJ%2B%2Ba2Lchmz%2FJ0Og2fZJ%2FBMHQwzxBgWRm%2BhbAw2j6PwDZaSdPrnDHYbosPcIMXJFOPrCJ4f5Cb4tpR1R7bl5tOZ7CwNh7SdzHaVFYjmN3TnDZrlP%2FtbzYsmRkIJArGejC4pzxlMW26%2FaGz082WHAe881A7yshNTH%2Fos0EZRm%2FxyYZvmgwQnJve1IBZEMCNjO0dD5we1XxH%2F0OJcay%2FkOdocud2jPptGonaJTUsu2NhH23d%2BupQU9EBOfvPhf32Z5n6MkWH59%2BXX1%2FLUTzk%2B5bURP5ZKoowzFsTFNfxg3saQixFYOhGYutxpUY5oz5lygyyBUcJN7IyDrdk8mhw1ZDPcx2Zh19WFcT6Krc0eBTVLjtRC1QYMNPZ1MgGOqUBQxxbfMkcFun2dzQlI4O01lXNmCaAU%2F3qQVpQvyvMlfeCDfI%2BrgljjzNB%2B1IvX%2FL2REKbTua%2BWfZbhCaJ6f1DYuj2J%2BS61RKgaSNVpdarUnOm09W3vF11bHBCQM45iK5BYOxdSM3n7W6wht8pHxU47%2BsBdDngwXEmSGFxr%2B1RObO6zAew6QRzFJ3dGXKnFghirOJK6GauqmBl2XFXy27FId%2Fl6m%2FB&X-Amz-Signature=839382bb1f1136aabd3d7160204518d57d1d5f872fc39d463d8329aab6af5ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVK4ZMR%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH9bCTMnR3RpZlswGzY8tT%2B3hBFLrgQEvp8auetGJaQlAiAY6Q%2B2exdwzIVydRgMNWuypwUc%2BbhEyip3j030cJTD8Cr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMbtc4RYuYPTCyS9SoKtwDnWEff%2FmMGUpIaYEnnqGRoNggi2hx0YKLp%2F8NkgyYsdSO2cpcrEQxV%2F0C63k9wyNbCqNBTDg18A7qhqUNvTB3F2Byygogx8%2Bm366s%2BL9K6KmzLYhxyZTLYj6dPZiYGaxKtYmGWq1I4fG1wuMmiqbhlHgTZPh5OnMKgGPjPzgSYVAOxeXvcifwmfaBawSZBsfTMASzt7ze1ky7c1WFtX0%2FmNAlCyZFAvuYReXtPCXu%2BZ41%2F7Sz%2BgF22J9chl55jr58HRcATQwI0hU9dH8uM6N9Vjzh8vFxIHuN3ZDUmOS80LDdOxNKi6Nt%2FJWIiydFyPZ%2BBlOCA3yv9zu1KjNFcEmZF9egQ8XrVD%2FGkyXV3dqc62P1ahFP90eTQ0avoG3bZdAr0Wg5tMKlRHrxdGBPqdYoh8rJ1kFUcPincYVPkAcOj1hYfJkDj80opZqifIQdiMJ038l6JbCFZAfuMauXBYn63gFDWF3fsANSnQ%2Bqe7Ol7gDQBl4gZwk5v8lJ1VC7eaOkvQl5YZKLkTcquToBCQFAUoXtE3xiBRRPkGC7AsyN%2F54LD6IX8ySjXmhqC520XBTKHeKE1aMJjk%2F5nwkxBqOZ73qT27QvABnJTWyukGWJS6Ar%2FI6jmsawVWziV1Mwv9nUyAY6pgHnPBK4L663AcRGmh5ZRDUSOuJkqhX6mgZKfLYrAOXPd7jpVmNSwVTyEBW75b7Lcchwv%2FfCQSjvxjKP46X3yL1L0rWexex3sfqytPIbrHgSt8h85bF8N6P0o9gfiEs8SPiORCgUTGJFzgvynU%2FyWoDt0QOv427JWk0VungpuAG7wzrWWc0IGU%2FBjN2zxfsq6FsLjfqQtcBI%2F0cAAYcZ5oPawCmpwvHG&X-Amz-Signature=a1a9ca3c099262f0a2bd3e2a5441084c2bf85e49b9d2878cabcef3150cbcc9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVK4ZMR%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH9bCTMnR3RpZlswGzY8tT%2B3hBFLrgQEvp8auetGJaQlAiAY6Q%2B2exdwzIVydRgMNWuypwUc%2BbhEyip3j030cJTD8Cr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMbtc4RYuYPTCyS9SoKtwDnWEff%2FmMGUpIaYEnnqGRoNggi2hx0YKLp%2F8NkgyYsdSO2cpcrEQxV%2F0C63k9wyNbCqNBTDg18A7qhqUNvTB3F2Byygogx8%2Bm366s%2BL9K6KmzLYhxyZTLYj6dPZiYGaxKtYmGWq1I4fG1wuMmiqbhlHgTZPh5OnMKgGPjPzgSYVAOxeXvcifwmfaBawSZBsfTMASzt7ze1ky7c1WFtX0%2FmNAlCyZFAvuYReXtPCXu%2BZ41%2F7Sz%2BgF22J9chl55jr58HRcATQwI0hU9dH8uM6N9Vjzh8vFxIHuN3ZDUmOS80LDdOxNKi6Nt%2FJWIiydFyPZ%2BBlOCA3yv9zu1KjNFcEmZF9egQ8XrVD%2FGkyXV3dqc62P1ahFP90eTQ0avoG3bZdAr0Wg5tMKlRHrxdGBPqdYoh8rJ1kFUcPincYVPkAcOj1hYfJkDj80opZqifIQdiMJ038l6JbCFZAfuMauXBYn63gFDWF3fsANSnQ%2Bqe7Ol7gDQBl4gZwk5v8lJ1VC7eaOkvQl5YZKLkTcquToBCQFAUoXtE3xiBRRPkGC7AsyN%2F54LD6IX8ySjXmhqC520XBTKHeKE1aMJjk%2F5nwkxBqOZ73qT27QvABnJTWyukGWJS6Ar%2FI6jmsawVWziV1Mwv9nUyAY6pgHnPBK4L663AcRGmh5ZRDUSOuJkqhX6mgZKfLYrAOXPd7jpVmNSwVTyEBW75b7Lcchwv%2FfCQSjvxjKP46X3yL1L0rWexex3sfqytPIbrHgSt8h85bF8N6P0o9gfiEs8SPiORCgUTGJFzgvynU%2FyWoDt0QOv427JWk0VungpuAG7wzrWWc0IGU%2FBjN2zxfsq6FsLjfqQtcBI%2F0cAAYcZ5oPawCmpwvHG&X-Amz-Signature=58bf9c98d7dc8054ac89f4abea3018355baa86884b54502ff94e8478d27f1c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVK4ZMR%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH9bCTMnR3RpZlswGzY8tT%2B3hBFLrgQEvp8auetGJaQlAiAY6Q%2B2exdwzIVydRgMNWuypwUc%2BbhEyip3j030cJTD8Cr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMbtc4RYuYPTCyS9SoKtwDnWEff%2FmMGUpIaYEnnqGRoNggi2hx0YKLp%2F8NkgyYsdSO2cpcrEQxV%2F0C63k9wyNbCqNBTDg18A7qhqUNvTB3F2Byygogx8%2Bm366s%2BL9K6KmzLYhxyZTLYj6dPZiYGaxKtYmGWq1I4fG1wuMmiqbhlHgTZPh5OnMKgGPjPzgSYVAOxeXvcifwmfaBawSZBsfTMASzt7ze1ky7c1WFtX0%2FmNAlCyZFAvuYReXtPCXu%2BZ41%2F7Sz%2BgF22J9chl55jr58HRcATQwI0hU9dH8uM6N9Vjzh8vFxIHuN3ZDUmOS80LDdOxNKi6Nt%2FJWIiydFyPZ%2BBlOCA3yv9zu1KjNFcEmZF9egQ8XrVD%2FGkyXV3dqc62P1ahFP90eTQ0avoG3bZdAr0Wg5tMKlRHrxdGBPqdYoh8rJ1kFUcPincYVPkAcOj1hYfJkDj80opZqifIQdiMJ038l6JbCFZAfuMauXBYn63gFDWF3fsANSnQ%2Bqe7Ol7gDQBl4gZwk5v8lJ1VC7eaOkvQl5YZKLkTcquToBCQFAUoXtE3xiBRRPkGC7AsyN%2F54LD6IX8ySjXmhqC520XBTKHeKE1aMJjk%2F5nwkxBqOZ73qT27QvABnJTWyukGWJS6Ar%2FI6jmsawVWziV1Mwv9nUyAY6pgHnPBK4L663AcRGmh5ZRDUSOuJkqhX6mgZKfLYrAOXPd7jpVmNSwVTyEBW75b7Lcchwv%2FfCQSjvxjKP46X3yL1L0rWexex3sfqytPIbrHgSt8h85bF8N6P0o9gfiEs8SPiORCgUTGJFzgvynU%2FyWoDt0QOv427JWk0VungpuAG7wzrWWc0IGU%2FBjN2zxfsq6FsLjfqQtcBI%2F0cAAYcZ5oPawCmpwvHG&X-Amz-Signature=de83c084ef52a351ca8937f3e699bbdd32a50d374990584e218b88a9a95bb863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVK4ZMR%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH9bCTMnR3RpZlswGzY8tT%2B3hBFLrgQEvp8auetGJaQlAiAY6Q%2B2exdwzIVydRgMNWuypwUc%2BbhEyip3j030cJTD8Cr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMbtc4RYuYPTCyS9SoKtwDnWEff%2FmMGUpIaYEnnqGRoNggi2hx0YKLp%2F8NkgyYsdSO2cpcrEQxV%2F0C63k9wyNbCqNBTDg18A7qhqUNvTB3F2Byygogx8%2Bm366s%2BL9K6KmzLYhxyZTLYj6dPZiYGaxKtYmGWq1I4fG1wuMmiqbhlHgTZPh5OnMKgGPjPzgSYVAOxeXvcifwmfaBawSZBsfTMASzt7ze1ky7c1WFtX0%2FmNAlCyZFAvuYReXtPCXu%2BZ41%2F7Sz%2BgF22J9chl55jr58HRcATQwI0hU9dH8uM6N9Vjzh8vFxIHuN3ZDUmOS80LDdOxNKi6Nt%2FJWIiydFyPZ%2BBlOCA3yv9zu1KjNFcEmZF9egQ8XrVD%2FGkyXV3dqc62P1ahFP90eTQ0avoG3bZdAr0Wg5tMKlRHrxdGBPqdYoh8rJ1kFUcPincYVPkAcOj1hYfJkDj80opZqifIQdiMJ038l6JbCFZAfuMauXBYn63gFDWF3fsANSnQ%2Bqe7Ol7gDQBl4gZwk5v8lJ1VC7eaOkvQl5YZKLkTcquToBCQFAUoXtE3xiBRRPkGC7AsyN%2F54LD6IX8ySjXmhqC520XBTKHeKE1aMJjk%2F5nwkxBqOZ73qT27QvABnJTWyukGWJS6Ar%2FI6jmsawVWziV1Mwv9nUyAY6pgHnPBK4L663AcRGmh5ZRDUSOuJkqhX6mgZKfLYrAOXPd7jpVmNSwVTyEBW75b7Lcchwv%2FfCQSjvxjKP46X3yL1L0rWexex3sfqytPIbrHgSt8h85bF8N6P0o9gfiEs8SPiORCgUTGJFzgvynU%2FyWoDt0QOv427JWk0VungpuAG7wzrWWc0IGU%2FBjN2zxfsq6FsLjfqQtcBI%2F0cAAYcZ5oPawCmpwvHG&X-Amz-Signature=bcd51d2de542d27cdfb1addba7bdb690a5061e4883ae8a899b4f8fefbfc78c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVK4ZMR%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH9bCTMnR3RpZlswGzY8tT%2B3hBFLrgQEvp8auetGJaQlAiAY6Q%2B2exdwzIVydRgMNWuypwUc%2BbhEyip3j030cJTD8Cr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMbtc4RYuYPTCyS9SoKtwDnWEff%2FmMGUpIaYEnnqGRoNggi2hx0YKLp%2F8NkgyYsdSO2cpcrEQxV%2F0C63k9wyNbCqNBTDg18A7qhqUNvTB3F2Byygogx8%2Bm366s%2BL9K6KmzLYhxyZTLYj6dPZiYGaxKtYmGWq1I4fG1wuMmiqbhlHgTZPh5OnMKgGPjPzgSYVAOxeXvcifwmfaBawSZBsfTMASzt7ze1ky7c1WFtX0%2FmNAlCyZFAvuYReXtPCXu%2BZ41%2F7Sz%2BgF22J9chl55jr58HRcATQwI0hU9dH8uM6N9Vjzh8vFxIHuN3ZDUmOS80LDdOxNKi6Nt%2FJWIiydFyPZ%2BBlOCA3yv9zu1KjNFcEmZF9egQ8XrVD%2FGkyXV3dqc62P1ahFP90eTQ0avoG3bZdAr0Wg5tMKlRHrxdGBPqdYoh8rJ1kFUcPincYVPkAcOj1hYfJkDj80opZqifIQdiMJ038l6JbCFZAfuMauXBYn63gFDWF3fsANSnQ%2Bqe7Ol7gDQBl4gZwk5v8lJ1VC7eaOkvQl5YZKLkTcquToBCQFAUoXtE3xiBRRPkGC7AsyN%2F54LD6IX8ySjXmhqC520XBTKHeKE1aMJjk%2F5nwkxBqOZ73qT27QvABnJTWyukGWJS6Ar%2FI6jmsawVWziV1Mwv9nUyAY6pgHnPBK4L663AcRGmh5ZRDUSOuJkqhX6mgZKfLYrAOXPd7jpVmNSwVTyEBW75b7Lcchwv%2FfCQSjvxjKP46X3yL1L0rWexex3sfqytPIbrHgSt8h85bF8N6P0o9gfiEs8SPiORCgUTGJFzgvynU%2FyWoDt0QOv427JWk0VungpuAG7wzrWWc0IGU%2FBjN2zxfsq6FsLjfqQtcBI%2F0cAAYcZ5oPawCmpwvHG&X-Amz-Signature=fc3de59ee3c10f9d6dc22d43c1d703b52189dd9d0d59c023f3179f2a99f9d1c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QZ5X2PF%2F20251113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251113T010319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHSJeHQpvT5COHrF2nKZI5thskiNHDYea80mlrk%2FuqxTAiEA7I6UPqKHCxvm4eD5rIcj8nhFjPlDcxlm7Tj78mCdoQwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGIwM95U%2BfloPBAdkircAzb8q0Uk1vm8YeHbe4VYR6AsOZqI9XX1wmIlwLz5HS16j5BMuCRvZeYh52QcToiaI4jVowS4drRvONKyOxBHtflUT71DNSjpdnHeWP5t1Gu%2FSgdj5J5RTtYewAVbsvmJ2vfK8%2F3kVJwAwOvbhs4hNLX4ddJubc1VaSs4JSRewZw1rTuzTgkLqnfq%2FkBvsAPZUq3RhGuMtfbihMdaYcUpxVI%2FX8970M2X0WJQBXMRft7lgPNYKW5%2FujLwsbC6E%2FDkBatCjheAKjPJ%2B%2Ba2Lchmz%2FJ0Og2fZJ%2FBMHQwzxBgWRm%2BhbAw2j6PwDZaSdPrnDHYbosPcIMXJFOPrCJ4f5Cb4tpR1R7bl5tOZ7CwNh7SdzHaVFYjmN3TnDZrlP%2FtbzYsmRkIJArGejC4pzxlMW26%2FaGz082WHAe881A7yshNTH%2Fos0EZRm%2FxyYZvmgwQnJve1IBZEMCNjO0dD5we1XxH%2F0OJcay%2FkOdocud2jPptGonaJTUsu2NhH23d%2BupQU9EBOfvPhf32Z5n6MkWH59%2BXX1%2FLUTzk%2B5bURP5ZKoowzFsTFNfxg3saQixFYOhGYutxpUY5oz5lygyyBUcJN7IyDrdk8mhw1ZDPcx2Zh19WFcT6Krc0eBTVLjtRC1QYMNPZ1MgGOqUBQxxbfMkcFun2dzQlI4O01lXNmCaAU%2F3qQVpQvyvMlfeCDfI%2BrgljjzNB%2B1IvX%2FL2REKbTua%2BWfZbhCaJ6f1DYuj2J%2BS61RKgaSNVpdarUnOm09W3vF11bHBCQM45iK5BYOxdSM3n7W6wht8pHxU47%2BsBdDngwXEmSGFxr%2B1RObO6zAew6QRzFJ3dGXKnFghirOJK6GauqmBl2XFXy27FId%2Fl6m%2FB&X-Amz-Signature=41b827ac62d22cb78d44158195a1a09c1233f20a0118241771605e97c7c83674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

