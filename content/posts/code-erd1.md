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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCO5PJKI%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T031119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD39DiYn81S1QlwgRyVtFuYUCKY8PzeFffWZb8rS2O5WQIgLUgT2v8tcNtf40FTYBEwxV8F5vIpt2wWBFbFQCZj64sq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDACo6GXst8wvTG5iwyrcAxlY%2BHZ5xv8iRIhjeiNV%2FTfx5GyXJivCdiPcfm%2FB0aMzlzMH4Pu39SturnZgA2IB59SEaR7tdiHAtmo31E7XObUt4uCz7QQwlfBK1tW1BJMaUIJmIFGIUTzIgHiR%2BCFzCbAh8%2FfAwl%2BkOuTi%2FbDybVOwt64JvS96mMB8CA9NIPbaPTee2w5AqzsNDK493GnwdPfqqHi8wMdvTwtUCC08T8Gt7YuAJ%2F3K%2FO7Y0BceXatjQ%2FXumyZJFweH8PaW3FXIXU%2FsQnrMCvXkd8RAFxdz%2B7YMTxvO%2B4OdVPWU0GeREkLlpOiC2aztZsi0XS8K3G8YvmYigaYlfSOTgguIkBH8J7ibxI9NYEjccMrLmxnQ1cDTMd21ddRcJjlUAHAP9aFcab8erWiI7LN1oTX4d%2FffvJ4yZKRIsgHSk4Yid2DqxTU1%2F42%2BqH3Z7l7Xxk8Le%2BPYLUicprP3uC%2FvRJfAa85Nt04zvCdaJV9%2BI5zH3hhL9Zgkmr8bf%2BrqJKMiv1L%2Bk%2BHp%2FbNDPRYIQDpwFyk067suH27vKhBBO4EzuKeZpKglYAun6zRmmUs%2F3BNCBxxv3ypwkFJNqp7zhzjjmFV4kHq4io1HkJRdrsCIlPs75xrq6UB3BNVC52v8w1wm%2F2S%2FMNK%2B%2BNQGOqUBP9Vw2fLG%2FSjobuK0CdHDJQpGcBAKLn5WVGWsE6O0hKBuyXx8mRD5ESirX6lUBX67ibl%2FWj%2BuS%2Bk8J%2FZxZD%2FNjAeKln9QXKubOSet5lLd6%2FMqHL%2FDhExgvv8ZBRWpPJeC8VrExqG5NY5bQZNIcAnR62EHF9sUx9mB5iBqNZRec906jv6ZV611mLx2n0%2BlhPYAob5b7Oqj1f0AGVPNuK7hLFmZwcCR&X-Amz-Signature=f554d312aa41a945bda1209ba81dd9c2c45f44b473bfae66b9900be8b8a85d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYTBMTC%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T031119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC5zLwVYjkhwgIjAj%2FSLs7ADRI5QdmS%2BwEPy3xVSSLR7AIgEwlgyKWITJ1x6UE4XdRT2VKbpNf1smuWbLkS%2BkHp3ckq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDD03UZZMd67%2BSTqVJircA8etnIisXiH90GgrHGgnKjN5RUD4qkxCwq9aOyNivDzKNLC%2FaWvRtm2CZAo3khaR7%2FPufmiEHbtWDURg6IJgs0MwsM%2BGG8W8QWs%2FeHRnQosuPcWEBR1R2YD7vzwJvB0eWWD2qftThOg9W5tSkYjtd4EfUY2pvNbuxl5%2FW5IlbgSi%2FhP%2BbmPCPY%2BbwoFfg4ceKlnssymmG20lrfXNMd3IaVcm%2BuRggv0Dgo6qb%2F96eUgYC7rLz5DFw2f9a3DkVzrU%2FKLkkbshlqKr8gRRmoxkVQ0d4U0hKkl6llL7QGqScckL%2FTnt%2B7WgJHjp4OvE9KyWb2Ogqwvs7%2FaTmekdZFYNQb%2FquJuJDloaKonsZPY8ggptsq8SBJq8zin6Vacn5UzWK39KyoGQI7boJXrDICSi8r9I4s8bUL5LhMlNwAt2g%2FKklR7dtl8UMvrPjXgc6OjFDGcLtaIX7ZB%2FwlktvfgYGqPomFUrL0OXv372LEH3sxzxyr9twCZMTIvETRvItbzQ0RECUYE%2BCa%2BmI%2BVkjYZM%2FD7gCYyFGe070w5qUXBlI9RIDYlqRR0yKATiQ4MWTCIf2hpQsSUM24kHcPZ0eqKs%2BuCAwfc0DFPm0da%2BmwvQwpMOgpHdFJ%2Fkm1w%2Fo0xzMMm%2B%2BNQGOqUB849FKxWc58bjH6c49MVHG1ajd57DuMBlQJIUP5PeoW5kgGRQL6H%2Bms8m29uNN4Zri%2B94YeJw7kiaCT5JsBkpuFG1ueAq1HMVFvo%2B7mr%2BVDe3HRH8eGW64s%2FWpJ7Os23riICEUJ2mNHFgxW5YEE9BKTepQsgDbIvgByra4xN9GfTkVaumZz8rPvZJZ9eJGCiTM%2Fa5duwVziISsrLt48X5K7ObX1V3&X-Amz-Signature=2ab0b118709ef663c7fd7dd6def2bb2ff47e019a5e8406808a668490138e3148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYTBMTC%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T031119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC5zLwVYjkhwgIjAj%2FSLs7ADRI5QdmS%2BwEPy3xVSSLR7AIgEwlgyKWITJ1x6UE4XdRT2VKbpNf1smuWbLkS%2BkHp3ckq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDD03UZZMd67%2BSTqVJircA8etnIisXiH90GgrHGgnKjN5RUD4qkxCwq9aOyNivDzKNLC%2FaWvRtm2CZAo3khaR7%2FPufmiEHbtWDURg6IJgs0MwsM%2BGG8W8QWs%2FeHRnQosuPcWEBR1R2YD7vzwJvB0eWWD2qftThOg9W5tSkYjtd4EfUY2pvNbuxl5%2FW5IlbgSi%2FhP%2BbmPCPY%2BbwoFfg4ceKlnssymmG20lrfXNMd3IaVcm%2BuRggv0Dgo6qb%2F96eUgYC7rLz5DFw2f9a3DkVzrU%2FKLkkbshlqKr8gRRmoxkVQ0d4U0hKkl6llL7QGqScckL%2FTnt%2B7WgJHjp4OvE9KyWb2Ogqwvs7%2FaTmekdZFYNQb%2FquJuJDloaKonsZPY8ggptsq8SBJq8zin6Vacn5UzWK39KyoGQI7boJXrDICSi8r9I4s8bUL5LhMlNwAt2g%2FKklR7dtl8UMvrPjXgc6OjFDGcLtaIX7ZB%2FwlktvfgYGqPomFUrL0OXv372LEH3sxzxyr9twCZMTIvETRvItbzQ0RECUYE%2BCa%2BmI%2BVkjYZM%2FD7gCYyFGe070w5qUXBlI9RIDYlqRR0yKATiQ4MWTCIf2hpQsSUM24kHcPZ0eqKs%2BuCAwfc0DFPm0da%2BmwvQwpMOgpHdFJ%2Fkm1w%2Fo0xzMMm%2B%2BNQGOqUB849FKxWc58bjH6c49MVHG1ajd57DuMBlQJIUP5PeoW5kgGRQL6H%2Bms8m29uNN4Zri%2B94YeJw7kiaCT5JsBkpuFG1ueAq1HMVFvo%2B7mr%2BVDe3HRH8eGW64s%2FWpJ7Os23riICEUJ2mNHFgxW5YEE9BKTepQsgDbIvgByra4xN9GfTkVaumZz8rPvZJZ9eJGCiTM%2Fa5duwVziISsrLt48X5K7ObX1V3&X-Amz-Signature=f9544bf49fc8954b8a4168c540c496019428e7830652079a479bb0b861044d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYTBMTC%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T031119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC5zLwVYjkhwgIjAj%2FSLs7ADRI5QdmS%2BwEPy3xVSSLR7AIgEwlgyKWITJ1x6UE4XdRT2VKbpNf1smuWbLkS%2BkHp3ckq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDD03UZZMd67%2BSTqVJircA8etnIisXiH90GgrHGgnKjN5RUD4qkxCwq9aOyNivDzKNLC%2FaWvRtm2CZAo3khaR7%2FPufmiEHbtWDURg6IJgs0MwsM%2BGG8W8QWs%2FeHRnQosuPcWEBR1R2YD7vzwJvB0eWWD2qftThOg9W5tSkYjtd4EfUY2pvNbuxl5%2FW5IlbgSi%2FhP%2BbmPCPY%2BbwoFfg4ceKlnssymmG20lrfXNMd3IaVcm%2BuRggv0Dgo6qb%2F96eUgYC7rLz5DFw2f9a3DkVzrU%2FKLkkbshlqKr8gRRmoxkVQ0d4U0hKkl6llL7QGqScckL%2FTnt%2B7WgJHjp4OvE9KyWb2Ogqwvs7%2FaTmekdZFYNQb%2FquJuJDloaKonsZPY8ggptsq8SBJq8zin6Vacn5UzWK39KyoGQI7boJXrDICSi8r9I4s8bUL5LhMlNwAt2g%2FKklR7dtl8UMvrPjXgc6OjFDGcLtaIX7ZB%2FwlktvfgYGqPomFUrL0OXv372LEH3sxzxyr9twCZMTIvETRvItbzQ0RECUYE%2BCa%2BmI%2BVkjYZM%2FD7gCYyFGe070w5qUXBlI9RIDYlqRR0yKATiQ4MWTCIf2hpQsSUM24kHcPZ0eqKs%2BuCAwfc0DFPm0da%2BmwvQwpMOgpHdFJ%2Fkm1w%2Fo0xzMMm%2B%2BNQGOqUB849FKxWc58bjH6c49MVHG1ajd57DuMBlQJIUP5PeoW5kgGRQL6H%2Bms8m29uNN4Zri%2B94YeJw7kiaCT5JsBkpuFG1ueAq1HMVFvo%2B7mr%2BVDe3HRH8eGW64s%2FWpJ7Os23riICEUJ2mNHFgxW5YEE9BKTepQsgDbIvgByra4xN9GfTkVaumZz8rPvZJZ9eJGCiTM%2Fa5duwVziISsrLt48X5K7ObX1V3&X-Amz-Signature=c572609656bb7b8d554eae4caae120e102edb2ea2229878c2c9a1d049c59eb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYTBMTC%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T031119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC5zLwVYjkhwgIjAj%2FSLs7ADRI5QdmS%2BwEPy3xVSSLR7AIgEwlgyKWITJ1x6UE4XdRT2VKbpNf1smuWbLkS%2BkHp3ckq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDD03UZZMd67%2BSTqVJircA8etnIisXiH90GgrHGgnKjN5RUD4qkxCwq9aOyNivDzKNLC%2FaWvRtm2CZAo3khaR7%2FPufmiEHbtWDURg6IJgs0MwsM%2BGG8W8QWs%2FeHRnQosuPcWEBR1R2YD7vzwJvB0eWWD2qftThOg9W5tSkYjtd4EfUY2pvNbuxl5%2FW5IlbgSi%2FhP%2BbmPCPY%2BbwoFfg4ceKlnssymmG20lrfXNMd3IaVcm%2BuRggv0Dgo6qb%2F96eUgYC7rLz5DFw2f9a3DkVzrU%2FKLkkbshlqKr8gRRmoxkVQ0d4U0hKkl6llL7QGqScckL%2FTnt%2B7WgJHjp4OvE9KyWb2Ogqwvs7%2FaTmekdZFYNQb%2FquJuJDloaKonsZPY8ggptsq8SBJq8zin6Vacn5UzWK39KyoGQI7boJXrDICSi8r9I4s8bUL5LhMlNwAt2g%2FKklR7dtl8UMvrPjXgc6OjFDGcLtaIX7ZB%2FwlktvfgYGqPomFUrL0OXv372LEH3sxzxyr9twCZMTIvETRvItbzQ0RECUYE%2BCa%2BmI%2BVkjYZM%2FD7gCYyFGe070w5qUXBlI9RIDYlqRR0yKATiQ4MWTCIf2hpQsSUM24kHcPZ0eqKs%2BuCAwfc0DFPm0da%2BmwvQwpMOgpHdFJ%2Fkm1w%2Fo0xzMMm%2B%2BNQGOqUB849FKxWc58bjH6c49MVHG1ajd57DuMBlQJIUP5PeoW5kgGRQL6H%2Bms8m29uNN4Zri%2B94YeJw7kiaCT5JsBkpuFG1ueAq1HMVFvo%2B7mr%2BVDe3HRH8eGW64s%2FWpJ7Os23riICEUJ2mNHFgxW5YEE9BKTepQsgDbIvgByra4xN9GfTkVaumZz8rPvZJZ9eJGCiTM%2Fa5duwVziISsrLt48X5K7ObX1V3&X-Amz-Signature=efefa71233e1d4113052bbc3396ffe1d408cee627e9037da37d048165b368bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYTBMTC%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T031119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC5zLwVYjkhwgIjAj%2FSLs7ADRI5QdmS%2BwEPy3xVSSLR7AIgEwlgyKWITJ1x6UE4XdRT2VKbpNf1smuWbLkS%2BkHp3ckq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDD03UZZMd67%2BSTqVJircA8etnIisXiH90GgrHGgnKjN5RUD4qkxCwq9aOyNivDzKNLC%2FaWvRtm2CZAo3khaR7%2FPufmiEHbtWDURg6IJgs0MwsM%2BGG8W8QWs%2FeHRnQosuPcWEBR1R2YD7vzwJvB0eWWD2qftThOg9W5tSkYjtd4EfUY2pvNbuxl5%2FW5IlbgSi%2FhP%2BbmPCPY%2BbwoFfg4ceKlnssymmG20lrfXNMd3IaVcm%2BuRggv0Dgo6qb%2F96eUgYC7rLz5DFw2f9a3DkVzrU%2FKLkkbshlqKr8gRRmoxkVQ0d4U0hKkl6llL7QGqScckL%2FTnt%2B7WgJHjp4OvE9KyWb2Ogqwvs7%2FaTmekdZFYNQb%2FquJuJDloaKonsZPY8ggptsq8SBJq8zin6Vacn5UzWK39KyoGQI7boJXrDICSi8r9I4s8bUL5LhMlNwAt2g%2FKklR7dtl8UMvrPjXgc6OjFDGcLtaIX7ZB%2FwlktvfgYGqPomFUrL0OXv372LEH3sxzxyr9twCZMTIvETRvItbzQ0RECUYE%2BCa%2BmI%2BVkjYZM%2FD7gCYyFGe070w5qUXBlI9RIDYlqRR0yKATiQ4MWTCIf2hpQsSUM24kHcPZ0eqKs%2BuCAwfc0DFPm0da%2BmwvQwpMOgpHdFJ%2Fkm1w%2Fo0xzMMm%2B%2BNQGOqUB849FKxWc58bjH6c49MVHG1ajd57DuMBlQJIUP5PeoW5kgGRQL6H%2Bms8m29uNN4Zri%2B94YeJw7kiaCT5JsBkpuFG1ueAq1HMVFvo%2B7mr%2BVDe3HRH8eGW64s%2FWpJ7Os23riICEUJ2mNHFgxW5YEE9BKTepQsgDbIvgByra4xN9GfTkVaumZz8rPvZJZ9eJGCiTM%2Fa5duwVziISsrLt48X5K7ObX1V3&X-Amz-Signature=afc13849f29618777d9dd04e7c2bc75257059895a6e0a79b9e2deea95474285c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCO5PJKI%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T031119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD39DiYn81S1QlwgRyVtFuYUCKY8PzeFffWZb8rS2O5WQIgLUgT2v8tcNtf40FTYBEwxV8F5vIpt2wWBFbFQCZj64sq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDACo6GXst8wvTG5iwyrcAxlY%2BHZ5xv8iRIhjeiNV%2FTfx5GyXJivCdiPcfm%2FB0aMzlzMH4Pu39SturnZgA2IB59SEaR7tdiHAtmo31E7XObUt4uCz7QQwlfBK1tW1BJMaUIJmIFGIUTzIgHiR%2BCFzCbAh8%2FfAwl%2BkOuTi%2FbDybVOwt64JvS96mMB8CA9NIPbaPTee2w5AqzsNDK493GnwdPfqqHi8wMdvTwtUCC08T8Gt7YuAJ%2F3K%2FO7Y0BceXatjQ%2FXumyZJFweH8PaW3FXIXU%2FsQnrMCvXkd8RAFxdz%2B7YMTxvO%2B4OdVPWU0GeREkLlpOiC2aztZsi0XS8K3G8YvmYigaYlfSOTgguIkBH8J7ibxI9NYEjccMrLmxnQ1cDTMd21ddRcJjlUAHAP9aFcab8erWiI7LN1oTX4d%2FffvJ4yZKRIsgHSk4Yid2DqxTU1%2F42%2BqH3Z7l7Xxk8Le%2BPYLUicprP3uC%2FvRJfAa85Nt04zvCdaJV9%2BI5zH3hhL9Zgkmr8bf%2BrqJKMiv1L%2Bk%2BHp%2FbNDPRYIQDpwFyk067suH27vKhBBO4EzuKeZpKglYAun6zRmmUs%2F3BNCBxxv3ypwkFJNqp7zhzjjmFV4kHq4io1HkJRdrsCIlPs75xrq6UB3BNVC52v8w1wm%2F2S%2FMNK%2B%2BNQGOqUBP9Vw2fLG%2FSjobuK0CdHDJQpGcBAKLn5WVGWsE6O0hKBuyXx8mRD5ESirX6lUBX67ibl%2FWj%2BuS%2Bk8J%2FZxZD%2FNjAeKln9QXKubOSet5lLd6%2FMqHL%2FDhExgvv8ZBRWpPJeC8VrExqG5NY5bQZNIcAnR62EHF9sUx9mB5iBqNZRec906jv6ZV611mLx2n0%2BlhPYAob5b7Oqj1f0AGVPNuK7hLFmZwcCR&X-Amz-Signature=2fe0575ce0bb6b635372a48473d7732eb09cf163625f8d1945a072c58f862c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

