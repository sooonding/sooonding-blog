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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHVKJIM%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T011034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICRt06J8cx90AbRWjP5lzTc1qj78pXx%2FhDJKRuqLFdoeAiAclEwITbiTyPoSpCAPKQwmDNECfjTi%2B92QwWBVscaDtiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvW5BC5tNbf9aO92iKtwD8oyZLBBxpEsXt04tNNtxA3LV3vLcILC8tIcp5EKleDSKFndLqlAWzfyesVfQGwD4kCtA8b4EvjyKZS7BJoAjjrd4dqzV%2F%2BnkDk5abPCqRM3uOFPb9WXmWhaAzXAItgJjOiJ2U2fz81qKJRZGpbVq%2F8hkfR3nX%2BAaaYou%2BqZnpzUDK164qKZxly49ZBaX5dsQALRYwatfb9YM%2BNI90UPq7CVAAMAQw03J7QTPkxwXXjgoxEdaTyWtK4lSG%2BHVoRAxlvbHWDwTt5FV1GxQ089ms%2BDBv%2FoFy3LBYM1p%2FQyKiwwRj5bqW5HuoXqru0m6FblMNEFB5hZqW6i657%2F84lT05FMVRzz6QvSrUA25lRxz4bHhU1bl1%2F7iY4WWUeUXpnTJYOJX4C%2Bt0uo1H%2FhFB3Izy65JGyYNZXGm8aZRaMpb4s5lq4PyA77jG3THNuG%2FUxd3gOJnc3Wr8dlkQjHowWOPjxzHDV5IyzKQzUM0CI%2BrXQ1SUUbaE0ID1KcGLBPMhVfvvwptf5KBW7hBGIm10ziHwFkwTMnlCyB1HawjSmLsKaZhB%2B0EAlhhnDfpSgWePTxuY7Eahz1zQ3npLC5PcFDdhK1z6hWRp9OESr%2F1F7CveRYA3UXODgf721p4A0Awg8ityQY6pgHhIWIYdM7lQEcZg3b%2FuSRnce7YI%2BsYeMxuDktcu3WNLsGHvZFlls6oXzabOIJhrEZtD1ujwgp8WkgbBRX6x15iziodzj8TEd0bBGUKN6BJk1zcFXCuiGNbK8oPfr7jft4Q6uM1b4ZgFjfGr8DxjE3Molkdht5fwTiOnkGcHte%2BbxEG4wpSomeBVWsLeRFeg5F8KOkTJzcZIyByzSdRowEHOZ2uOkL%2F&X-Amz-Signature=16f1ef392b2fbdeb2a306677c5e234af76d967603b9a5a4bbb0570bf2e4dd84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPRJ7KX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T011035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEZfwrzaK5U7aNOUj4kQVcE0T%2FBAoxDCXW9QVFdz1szxAiBfYuDQ9tgTEaCVmw0ZOzbCbu%2B3FFwaPyVfSBPBq%2F%2FeTiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4TaQi62kusZaZPdFKtwDGkEt9qn27QP5ULk9mc6xuDLHWFkDsJGSpoaxWilc9m5QGQ5nUFVcfib96efQ9B6id%2BHFBnJqkmy4NfQtKVC%2FIcXJdsYk8dWn3aHqoMlQkLnKAqXiiepEj631NaSxV%2FurO6f26ynuIk18HvbiNtIRQOFgz3mhbYMWUHC6tjEz%2FhgHO97r6hxYevZKyfiCuVhTbelRCpVukTrTxBZK61dDbYuaKvD4VcjOnOvf0gBLCUe%2F020LZQxnhxeSr7nfb67wvA%2Bl2j1AllGKEJVk6TBb%2BKTpw6CL6NO7j1ccWgzWnbqYgswCTbTTLKS%2B%2FiAhyanbG4cZY9jmzn0%2FGq%2BEWbI6hsbcoF%2FqYpf9kNze%2FQ0ZmbdphjbLRsSR3VvdKBgrLCxU0NUUzkthRsjb8cXwbOLoyyuC380RqaI72F495Hd9zJFlZuhn0JLb8X0AjFRd%2FUDxSX5mpjKao4bhu2u11WCOI3HYLgNp9DX%2B%2F5L6iMpUq%2B9Rki7G3UN8jJt2sbWnjAy%2FNO2nmr0iPcSl8CZwu5rNgB%2Fj6%2FJ9CDO5IVK9b8alOBiL8Xvr%2BOsxwKaoqx8VmxELkQ9%2B2%2BgZ0hbamngLj1Bg0%2BtNWw7y4mL10hV9vXgwlwX%2BmI2ZPwZDCx%2FhOKYwn7ityQY6pgEymvvUrHTcfEliIgUmhP2hKVfWfB0fc2sQ%2Bk2%2BNsByZ43iujADtFIyYDK%2BPFYqLEJkSaPEW%2FDW7xnQA7zeIkfOTRFmYYs9oF0cA35vpeqUlinzawj1NBxmtkpb%2Fyf7qphJn%2BWGsL6Nx5G7aJeXdSThvCGjTI6e8t2V5g66a21TUzA1lV1l4%2FuqsmGzP5jPPslaVBXVS%2F4uWNONiQzwBoiPXz2YHSUG&X-Amz-Signature=5b902535e3f7bcbe56b78617fd49a5f74df5200a7a69f8878bd485b16539e507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPRJ7KX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T011035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEZfwrzaK5U7aNOUj4kQVcE0T%2FBAoxDCXW9QVFdz1szxAiBfYuDQ9tgTEaCVmw0ZOzbCbu%2B3FFwaPyVfSBPBq%2F%2FeTiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4TaQi62kusZaZPdFKtwDGkEt9qn27QP5ULk9mc6xuDLHWFkDsJGSpoaxWilc9m5QGQ5nUFVcfib96efQ9B6id%2BHFBnJqkmy4NfQtKVC%2FIcXJdsYk8dWn3aHqoMlQkLnKAqXiiepEj631NaSxV%2FurO6f26ynuIk18HvbiNtIRQOFgz3mhbYMWUHC6tjEz%2FhgHO97r6hxYevZKyfiCuVhTbelRCpVukTrTxBZK61dDbYuaKvD4VcjOnOvf0gBLCUe%2F020LZQxnhxeSr7nfb67wvA%2Bl2j1AllGKEJVk6TBb%2BKTpw6CL6NO7j1ccWgzWnbqYgswCTbTTLKS%2B%2FiAhyanbG4cZY9jmzn0%2FGq%2BEWbI6hsbcoF%2FqYpf9kNze%2FQ0ZmbdphjbLRsSR3VvdKBgrLCxU0NUUzkthRsjb8cXwbOLoyyuC380RqaI72F495Hd9zJFlZuhn0JLb8X0AjFRd%2FUDxSX5mpjKao4bhu2u11WCOI3HYLgNp9DX%2B%2F5L6iMpUq%2B9Rki7G3UN8jJt2sbWnjAy%2FNO2nmr0iPcSl8CZwu5rNgB%2Fj6%2FJ9CDO5IVK9b8alOBiL8Xvr%2BOsxwKaoqx8VmxELkQ9%2B2%2BgZ0hbamngLj1Bg0%2BtNWw7y4mL10hV9vXgwlwX%2BmI2ZPwZDCx%2FhOKYwn7ityQY6pgEymvvUrHTcfEliIgUmhP2hKVfWfB0fc2sQ%2Bk2%2BNsByZ43iujADtFIyYDK%2BPFYqLEJkSaPEW%2FDW7xnQA7zeIkfOTRFmYYs9oF0cA35vpeqUlinzawj1NBxmtkpb%2Fyf7qphJn%2BWGsL6Nx5G7aJeXdSThvCGjTI6e8t2V5g66a21TUzA1lV1l4%2FuqsmGzP5jPPslaVBXVS%2F4uWNONiQzwBoiPXz2YHSUG&X-Amz-Signature=deb7a2315e0ea978885c5c0764f7e25f980ff2f2b392c5c30d9ddc5f30255c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPRJ7KX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T011035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEZfwrzaK5U7aNOUj4kQVcE0T%2FBAoxDCXW9QVFdz1szxAiBfYuDQ9tgTEaCVmw0ZOzbCbu%2B3FFwaPyVfSBPBq%2F%2FeTiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4TaQi62kusZaZPdFKtwDGkEt9qn27QP5ULk9mc6xuDLHWFkDsJGSpoaxWilc9m5QGQ5nUFVcfib96efQ9B6id%2BHFBnJqkmy4NfQtKVC%2FIcXJdsYk8dWn3aHqoMlQkLnKAqXiiepEj631NaSxV%2FurO6f26ynuIk18HvbiNtIRQOFgz3mhbYMWUHC6tjEz%2FhgHO97r6hxYevZKyfiCuVhTbelRCpVukTrTxBZK61dDbYuaKvD4VcjOnOvf0gBLCUe%2F020LZQxnhxeSr7nfb67wvA%2Bl2j1AllGKEJVk6TBb%2BKTpw6CL6NO7j1ccWgzWnbqYgswCTbTTLKS%2B%2FiAhyanbG4cZY9jmzn0%2FGq%2BEWbI6hsbcoF%2FqYpf9kNze%2FQ0ZmbdphjbLRsSR3VvdKBgrLCxU0NUUzkthRsjb8cXwbOLoyyuC380RqaI72F495Hd9zJFlZuhn0JLb8X0AjFRd%2FUDxSX5mpjKao4bhu2u11WCOI3HYLgNp9DX%2B%2F5L6iMpUq%2B9Rki7G3UN8jJt2sbWnjAy%2FNO2nmr0iPcSl8CZwu5rNgB%2Fj6%2FJ9CDO5IVK9b8alOBiL8Xvr%2BOsxwKaoqx8VmxELkQ9%2B2%2BgZ0hbamngLj1Bg0%2BtNWw7y4mL10hV9vXgwlwX%2BmI2ZPwZDCx%2FhOKYwn7ityQY6pgEymvvUrHTcfEliIgUmhP2hKVfWfB0fc2sQ%2Bk2%2BNsByZ43iujADtFIyYDK%2BPFYqLEJkSaPEW%2FDW7xnQA7zeIkfOTRFmYYs9oF0cA35vpeqUlinzawj1NBxmtkpb%2Fyf7qphJn%2BWGsL6Nx5G7aJeXdSThvCGjTI6e8t2V5g66a21TUzA1lV1l4%2FuqsmGzP5jPPslaVBXVS%2F4uWNONiQzwBoiPXz2YHSUG&X-Amz-Signature=6c18868e2fc5dc57cfcb4ab5a600648c64e4776a011f6994ed7bc14c146c80e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPRJ7KX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T011035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEZfwrzaK5U7aNOUj4kQVcE0T%2FBAoxDCXW9QVFdz1szxAiBfYuDQ9tgTEaCVmw0ZOzbCbu%2B3FFwaPyVfSBPBq%2F%2FeTiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4TaQi62kusZaZPdFKtwDGkEt9qn27QP5ULk9mc6xuDLHWFkDsJGSpoaxWilc9m5QGQ5nUFVcfib96efQ9B6id%2BHFBnJqkmy4NfQtKVC%2FIcXJdsYk8dWn3aHqoMlQkLnKAqXiiepEj631NaSxV%2FurO6f26ynuIk18HvbiNtIRQOFgz3mhbYMWUHC6tjEz%2FhgHO97r6hxYevZKyfiCuVhTbelRCpVukTrTxBZK61dDbYuaKvD4VcjOnOvf0gBLCUe%2F020LZQxnhxeSr7nfb67wvA%2Bl2j1AllGKEJVk6TBb%2BKTpw6CL6NO7j1ccWgzWnbqYgswCTbTTLKS%2B%2FiAhyanbG4cZY9jmzn0%2FGq%2BEWbI6hsbcoF%2FqYpf9kNze%2FQ0ZmbdphjbLRsSR3VvdKBgrLCxU0NUUzkthRsjb8cXwbOLoyyuC380RqaI72F495Hd9zJFlZuhn0JLb8X0AjFRd%2FUDxSX5mpjKao4bhu2u11WCOI3HYLgNp9DX%2B%2F5L6iMpUq%2B9Rki7G3UN8jJt2sbWnjAy%2FNO2nmr0iPcSl8CZwu5rNgB%2Fj6%2FJ9CDO5IVK9b8alOBiL8Xvr%2BOsxwKaoqx8VmxELkQ9%2B2%2BgZ0hbamngLj1Bg0%2BtNWw7y4mL10hV9vXgwlwX%2BmI2ZPwZDCx%2FhOKYwn7ityQY6pgEymvvUrHTcfEliIgUmhP2hKVfWfB0fc2sQ%2Bk2%2BNsByZ43iujADtFIyYDK%2BPFYqLEJkSaPEW%2FDW7xnQA7zeIkfOTRFmYYs9oF0cA35vpeqUlinzawj1NBxmtkpb%2Fyf7qphJn%2BWGsL6Nx5G7aJeXdSThvCGjTI6e8t2V5g66a21TUzA1lV1l4%2FuqsmGzP5jPPslaVBXVS%2F4uWNONiQzwBoiPXz2YHSUG&X-Amz-Signature=0043fa3317a707dfe3153d55530a69a4c9087d6b2a39b4df3192a01c45434896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPRJ7KX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T011035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEZfwrzaK5U7aNOUj4kQVcE0T%2FBAoxDCXW9QVFdz1szxAiBfYuDQ9tgTEaCVmw0ZOzbCbu%2B3FFwaPyVfSBPBq%2F%2FeTiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4TaQi62kusZaZPdFKtwDGkEt9qn27QP5ULk9mc6xuDLHWFkDsJGSpoaxWilc9m5QGQ5nUFVcfib96efQ9B6id%2BHFBnJqkmy4NfQtKVC%2FIcXJdsYk8dWn3aHqoMlQkLnKAqXiiepEj631NaSxV%2FurO6f26ynuIk18HvbiNtIRQOFgz3mhbYMWUHC6tjEz%2FhgHO97r6hxYevZKyfiCuVhTbelRCpVukTrTxBZK61dDbYuaKvD4VcjOnOvf0gBLCUe%2F020LZQxnhxeSr7nfb67wvA%2Bl2j1AllGKEJVk6TBb%2BKTpw6CL6NO7j1ccWgzWnbqYgswCTbTTLKS%2B%2FiAhyanbG4cZY9jmzn0%2FGq%2BEWbI6hsbcoF%2FqYpf9kNze%2FQ0ZmbdphjbLRsSR3VvdKBgrLCxU0NUUzkthRsjb8cXwbOLoyyuC380RqaI72F495Hd9zJFlZuhn0JLb8X0AjFRd%2FUDxSX5mpjKao4bhu2u11WCOI3HYLgNp9DX%2B%2F5L6iMpUq%2B9Rki7G3UN8jJt2sbWnjAy%2FNO2nmr0iPcSl8CZwu5rNgB%2Fj6%2FJ9CDO5IVK9b8alOBiL8Xvr%2BOsxwKaoqx8VmxELkQ9%2B2%2BgZ0hbamngLj1Bg0%2BtNWw7y4mL10hV9vXgwlwX%2BmI2ZPwZDCx%2FhOKYwn7ityQY6pgEymvvUrHTcfEliIgUmhP2hKVfWfB0fc2sQ%2Bk2%2BNsByZ43iujADtFIyYDK%2BPFYqLEJkSaPEW%2FDW7xnQA7zeIkfOTRFmYYs9oF0cA35vpeqUlinzawj1NBxmtkpb%2Fyf7qphJn%2BWGsL6Nx5G7aJeXdSThvCGjTI6e8t2V5g66a21TUzA1lV1l4%2FuqsmGzP5jPPslaVBXVS%2F4uWNONiQzwBoiPXz2YHSUG&X-Amz-Signature=994123192a4310b707f191b107337cd1c4456be6112d03b611c1a10735ef6332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHVKJIM%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T011034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICRt06J8cx90AbRWjP5lzTc1qj78pXx%2FhDJKRuqLFdoeAiAclEwITbiTyPoSpCAPKQwmDNECfjTi%2B92QwWBVscaDtiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvW5BC5tNbf9aO92iKtwD8oyZLBBxpEsXt04tNNtxA3LV3vLcILC8tIcp5EKleDSKFndLqlAWzfyesVfQGwD4kCtA8b4EvjyKZS7BJoAjjrd4dqzV%2F%2BnkDk5abPCqRM3uOFPb9WXmWhaAzXAItgJjOiJ2U2fz81qKJRZGpbVq%2F8hkfR3nX%2BAaaYou%2BqZnpzUDK164qKZxly49ZBaX5dsQALRYwatfb9YM%2BNI90UPq7CVAAMAQw03J7QTPkxwXXjgoxEdaTyWtK4lSG%2BHVoRAxlvbHWDwTt5FV1GxQ089ms%2BDBv%2FoFy3LBYM1p%2FQyKiwwRj5bqW5HuoXqru0m6FblMNEFB5hZqW6i657%2F84lT05FMVRzz6QvSrUA25lRxz4bHhU1bl1%2F7iY4WWUeUXpnTJYOJX4C%2Bt0uo1H%2FhFB3Izy65JGyYNZXGm8aZRaMpb4s5lq4PyA77jG3THNuG%2FUxd3gOJnc3Wr8dlkQjHowWOPjxzHDV5IyzKQzUM0CI%2BrXQ1SUUbaE0ID1KcGLBPMhVfvvwptf5KBW7hBGIm10ziHwFkwTMnlCyB1HawjSmLsKaZhB%2B0EAlhhnDfpSgWePTxuY7Eahz1zQ3npLC5PcFDdhK1z6hWRp9OESr%2F1F7CveRYA3UXODgf721p4A0Awg8ityQY6pgHhIWIYdM7lQEcZg3b%2FuSRnce7YI%2BsYeMxuDktcu3WNLsGHvZFlls6oXzabOIJhrEZtD1ujwgp8WkgbBRX6x15iziodzj8TEd0bBGUKN6BJk1zcFXCuiGNbK8oPfr7jft4Q6uM1b4ZgFjfGr8DxjE3Molkdht5fwTiOnkGcHte%2BbxEG4wpSomeBVWsLeRFeg5F8KOkTJzcZIyByzSdRowEHOZ2uOkL%2F&X-Amz-Signature=fa7b773e2a19b048fbd04fc8153d0f9a4bf90544261f305451c0a28151bd409a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

