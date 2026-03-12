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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RD4ESQ%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDitgvgI0bZNaMuJi990bYccYFDwX46dllQMjnrCzuatAiBedPDsXwpwQtsVAm%2Bby91XY0iYTEeBU8eDXThkz1HVrSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM3wgW%2FOJD%2FEYZP4xlKtwDSYdbcngV3Md%2BEwtRGcXNKSUi1H%2B9xl6J2U1ROlW0y9z9ITo5Q6MTDLRUAxJzr%2FDdoKY33BkI%2Fu3t2wGYVCXxNj9YN2mRbGreyI1xPGOhn7JRwJAw%2FZNxTgatCLutK0KQxb4c8c%2FvQF6QDilh2HWClDZFyCyAWABl2eLTvOVy9Ihjkf3uZzRY4OAdaqhJSNAVKw5oTqDJmEOTeNRTYgSvOBinHggKH5gatpRa7x1h%2FuBLgd3WeblhR2MM4JhizLlon2%2Fjy6FDh1K%2FEO3zWtf%2FM83y7sXCpBin9Neg4ALmk31iduJSLBs3IIcNsxdjOL%2BRrfTwJLDVozvz8XAHSnvIK7ubqoK0%2Bl2OTgbnkHrirnLNfUkg28ywfgd5An5ShPIGQDcMEy3pDz2%2F5darhMWrMNxzJGVJqTVSgx%2B0ddQ7iYsMKUizOq9hD2im5nVf3eUILECYSfEpqvJRU9%2BUc5WXG5wtqT%2FgZdtlj2vXBeHSc0BeZz%2B7LoRfSPJ5rMYbBeXqoIEIv5IHfvvDtryg28JcZbryHfyTfzgIifukfuUnmtHUAl5V9AE63KbXZBVX7Ol300OHRRubHk0%2BUBmzA7pHFRChZ8qzRYpeLfKVMLRJf4vlfEpnQJ1I8xwJdIIw1pLIzQY6pgGcxcLCUTj8r9RMFRbVooKgzm9gxVGSQkN%2Bhj35GtUEcPAN5HQR2XcLxiYqsZ%2F96MU7c7IKzR%2Bu%2F1chDmA4P11qqW7X6fOZ6Xz%2FGzsLMFnbXmOjPrYF%2BdkplEOnalja75RJ8rIfY%2BHoIWMEP8Bw%2BkXtiThMWIphV8%2BmgCe2zFT2ElAGKm6SUGv%2FdO1QaiYZGTDcTC833yrhkMpdLjena3m5LqAmPfip&X-Amz-Signature=30d458d76712e54a1bf21febda3c349467d165645a0a334bf26ec4415d28fb2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663K2QRPN%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQSsLrqe9tlfeOiK1X3mNDyRuX%2BofuoDPHdUjJXD1FwIgU%2FaTsoMnKEWTC8o3wqh2p9bMwOqb6aFzdgZ8GwEBx6Qq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFkn5yDIkd%2BxpNRomSrcA33M6srcDXhTA9SyJacQrStqhTljRTw0yCx0agy7I%2BPPBopKSLVEcF4U2YWsSZrRYyMA%2FY8iKc4jjurVJKvCJO41qK3Xd9QFUvf6BA3LdMfCAEFVMMNFzP%2BsGihWoB46kScfWHCRV4Kvqg2bghSErjHSo8gZfSSMGfD5gZM9SXIqUFcswKpbBmVhGa7KV7MkacW8tI%2BR0BV8Rf4Kt897A81kmQj2GelxN3pVsYGKfp2FjJ6ulLgYuKQZBnvRKJMo09EUWsrjSxqKt9BhZbbgttDEwCIZ9WG9lqoxONheo4H2zoKgnUuOkan8tsJiovy1utwGHc3x8VcRFW25CO0gXsgEui%2FQB%2FNpjG7aX2ExGhQxsPsen8ZSen6Rgprwj5Lk3C8%2BW3B5%2BGCrUkLMSYd0ND2dtF7MeW%2FZGUHsbcFS0GalGHupF7bdJOVa1YXptRAwzzi0QHRMdh7lGyfD1uRvStkBSM5TByeSBfqV3Mr6VOgj82v7xtaAp0nwCwVxhP3Zxo4DFBpQwM9k9jAFkmi%2BPoAfcO8ly3dBAVnLKizyWohSacZXRI6XmUFePdVJrcV1Hu7RMlcqV09%2FqleT9xGABRyO7uNzg4QaVSEl%2FItCCTyduEfCy%2Bgd8XijaMKAMJKTyM0GOqUBGquvyDeHA2WVvMum2y1L9klWJbP8PA4yaFaC8uzw2bwhRVopTrOeCGV3J%2FIfgipj8aLZhnqbTX2%2Fb0dinjwPYOaUKMdHOnbhn84iQ12E9513pyIzMvYeJxW7KUCYgdBHNibIhUuz%2FHyxAR0wu%2FuOMApUi03VT9J7DXgYYtkC2C4z7YI%2B4AilzXVr8Wurxf8ataINhGj8BBjw28q7BhtJvtGsXd2n&X-Amz-Signature=a9f7a6688f8514b5c52bc0835b982af608d1cfb7e959e6790b3275a76f1a69d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663K2QRPN%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQSsLrqe9tlfeOiK1X3mNDyRuX%2BofuoDPHdUjJXD1FwIgU%2FaTsoMnKEWTC8o3wqh2p9bMwOqb6aFzdgZ8GwEBx6Qq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFkn5yDIkd%2BxpNRomSrcA33M6srcDXhTA9SyJacQrStqhTljRTw0yCx0agy7I%2BPPBopKSLVEcF4U2YWsSZrRYyMA%2FY8iKc4jjurVJKvCJO41qK3Xd9QFUvf6BA3LdMfCAEFVMMNFzP%2BsGihWoB46kScfWHCRV4Kvqg2bghSErjHSo8gZfSSMGfD5gZM9SXIqUFcswKpbBmVhGa7KV7MkacW8tI%2BR0BV8Rf4Kt897A81kmQj2GelxN3pVsYGKfp2FjJ6ulLgYuKQZBnvRKJMo09EUWsrjSxqKt9BhZbbgttDEwCIZ9WG9lqoxONheo4H2zoKgnUuOkan8tsJiovy1utwGHc3x8VcRFW25CO0gXsgEui%2FQB%2FNpjG7aX2ExGhQxsPsen8ZSen6Rgprwj5Lk3C8%2BW3B5%2BGCrUkLMSYd0ND2dtF7MeW%2FZGUHsbcFS0GalGHupF7bdJOVa1YXptRAwzzi0QHRMdh7lGyfD1uRvStkBSM5TByeSBfqV3Mr6VOgj82v7xtaAp0nwCwVxhP3Zxo4DFBpQwM9k9jAFkmi%2BPoAfcO8ly3dBAVnLKizyWohSacZXRI6XmUFePdVJrcV1Hu7RMlcqV09%2FqleT9xGABRyO7uNzg4QaVSEl%2FItCCTyduEfCy%2Bgd8XijaMKAMJKTyM0GOqUBGquvyDeHA2WVvMum2y1L9klWJbP8PA4yaFaC8uzw2bwhRVopTrOeCGV3J%2FIfgipj8aLZhnqbTX2%2Fb0dinjwPYOaUKMdHOnbhn84iQ12E9513pyIzMvYeJxW7KUCYgdBHNibIhUuz%2FHyxAR0wu%2FuOMApUi03VT9J7DXgYYtkC2C4z7YI%2B4AilzXVr8Wurxf8ataINhGj8BBjw28q7BhtJvtGsXd2n&X-Amz-Signature=97e8e99cfbe09e156eb4fab1a1922186c8c8ec839a7fcb26c91f1da4f87fa110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663K2QRPN%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQSsLrqe9tlfeOiK1X3mNDyRuX%2BofuoDPHdUjJXD1FwIgU%2FaTsoMnKEWTC8o3wqh2p9bMwOqb6aFzdgZ8GwEBx6Qq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFkn5yDIkd%2BxpNRomSrcA33M6srcDXhTA9SyJacQrStqhTljRTw0yCx0agy7I%2BPPBopKSLVEcF4U2YWsSZrRYyMA%2FY8iKc4jjurVJKvCJO41qK3Xd9QFUvf6BA3LdMfCAEFVMMNFzP%2BsGihWoB46kScfWHCRV4Kvqg2bghSErjHSo8gZfSSMGfD5gZM9SXIqUFcswKpbBmVhGa7KV7MkacW8tI%2BR0BV8Rf4Kt897A81kmQj2GelxN3pVsYGKfp2FjJ6ulLgYuKQZBnvRKJMo09EUWsrjSxqKt9BhZbbgttDEwCIZ9WG9lqoxONheo4H2zoKgnUuOkan8tsJiovy1utwGHc3x8VcRFW25CO0gXsgEui%2FQB%2FNpjG7aX2ExGhQxsPsen8ZSen6Rgprwj5Lk3C8%2BW3B5%2BGCrUkLMSYd0ND2dtF7MeW%2FZGUHsbcFS0GalGHupF7bdJOVa1YXptRAwzzi0QHRMdh7lGyfD1uRvStkBSM5TByeSBfqV3Mr6VOgj82v7xtaAp0nwCwVxhP3Zxo4DFBpQwM9k9jAFkmi%2BPoAfcO8ly3dBAVnLKizyWohSacZXRI6XmUFePdVJrcV1Hu7RMlcqV09%2FqleT9xGABRyO7uNzg4QaVSEl%2FItCCTyduEfCy%2Bgd8XijaMKAMJKTyM0GOqUBGquvyDeHA2WVvMum2y1L9klWJbP8PA4yaFaC8uzw2bwhRVopTrOeCGV3J%2FIfgipj8aLZhnqbTX2%2Fb0dinjwPYOaUKMdHOnbhn84iQ12E9513pyIzMvYeJxW7KUCYgdBHNibIhUuz%2FHyxAR0wu%2FuOMApUi03VT9J7DXgYYtkC2C4z7YI%2B4AilzXVr8Wurxf8ataINhGj8BBjw28q7BhtJvtGsXd2n&X-Amz-Signature=86708c523fa454182567838b6996d91b86ee45fac412176be4627041f486ea84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663K2QRPN%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQSsLrqe9tlfeOiK1X3mNDyRuX%2BofuoDPHdUjJXD1FwIgU%2FaTsoMnKEWTC8o3wqh2p9bMwOqb6aFzdgZ8GwEBx6Qq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFkn5yDIkd%2BxpNRomSrcA33M6srcDXhTA9SyJacQrStqhTljRTw0yCx0agy7I%2BPPBopKSLVEcF4U2YWsSZrRYyMA%2FY8iKc4jjurVJKvCJO41qK3Xd9QFUvf6BA3LdMfCAEFVMMNFzP%2BsGihWoB46kScfWHCRV4Kvqg2bghSErjHSo8gZfSSMGfD5gZM9SXIqUFcswKpbBmVhGa7KV7MkacW8tI%2BR0BV8Rf4Kt897A81kmQj2GelxN3pVsYGKfp2FjJ6ulLgYuKQZBnvRKJMo09EUWsrjSxqKt9BhZbbgttDEwCIZ9WG9lqoxONheo4H2zoKgnUuOkan8tsJiovy1utwGHc3x8VcRFW25CO0gXsgEui%2FQB%2FNpjG7aX2ExGhQxsPsen8ZSen6Rgprwj5Lk3C8%2BW3B5%2BGCrUkLMSYd0ND2dtF7MeW%2FZGUHsbcFS0GalGHupF7bdJOVa1YXptRAwzzi0QHRMdh7lGyfD1uRvStkBSM5TByeSBfqV3Mr6VOgj82v7xtaAp0nwCwVxhP3Zxo4DFBpQwM9k9jAFkmi%2BPoAfcO8ly3dBAVnLKizyWohSacZXRI6XmUFePdVJrcV1Hu7RMlcqV09%2FqleT9xGABRyO7uNzg4QaVSEl%2FItCCTyduEfCy%2Bgd8XijaMKAMJKTyM0GOqUBGquvyDeHA2WVvMum2y1L9klWJbP8PA4yaFaC8uzw2bwhRVopTrOeCGV3J%2FIfgipj8aLZhnqbTX2%2Fb0dinjwPYOaUKMdHOnbhn84iQ12E9513pyIzMvYeJxW7KUCYgdBHNibIhUuz%2FHyxAR0wu%2FuOMApUi03VT9J7DXgYYtkC2C4z7YI%2B4AilzXVr8Wurxf8ataINhGj8BBjw28q7BhtJvtGsXd2n&X-Amz-Signature=6832a70597130f824394d45971b1ee28764e66edbf9b583d7cceea7dc0b45b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663K2QRPN%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQSsLrqe9tlfeOiK1X3mNDyRuX%2BofuoDPHdUjJXD1FwIgU%2FaTsoMnKEWTC8o3wqh2p9bMwOqb6aFzdgZ8GwEBx6Qq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFkn5yDIkd%2BxpNRomSrcA33M6srcDXhTA9SyJacQrStqhTljRTw0yCx0agy7I%2BPPBopKSLVEcF4U2YWsSZrRYyMA%2FY8iKc4jjurVJKvCJO41qK3Xd9QFUvf6BA3LdMfCAEFVMMNFzP%2BsGihWoB46kScfWHCRV4Kvqg2bghSErjHSo8gZfSSMGfD5gZM9SXIqUFcswKpbBmVhGa7KV7MkacW8tI%2BR0BV8Rf4Kt897A81kmQj2GelxN3pVsYGKfp2FjJ6ulLgYuKQZBnvRKJMo09EUWsrjSxqKt9BhZbbgttDEwCIZ9WG9lqoxONheo4H2zoKgnUuOkan8tsJiovy1utwGHc3x8VcRFW25CO0gXsgEui%2FQB%2FNpjG7aX2ExGhQxsPsen8ZSen6Rgprwj5Lk3C8%2BW3B5%2BGCrUkLMSYd0ND2dtF7MeW%2FZGUHsbcFS0GalGHupF7bdJOVa1YXptRAwzzi0QHRMdh7lGyfD1uRvStkBSM5TByeSBfqV3Mr6VOgj82v7xtaAp0nwCwVxhP3Zxo4DFBpQwM9k9jAFkmi%2BPoAfcO8ly3dBAVnLKizyWohSacZXRI6XmUFePdVJrcV1Hu7RMlcqV09%2FqleT9xGABRyO7uNzg4QaVSEl%2FItCCTyduEfCy%2Bgd8XijaMKAMJKTyM0GOqUBGquvyDeHA2WVvMum2y1L9klWJbP8PA4yaFaC8uzw2bwhRVopTrOeCGV3J%2FIfgipj8aLZhnqbTX2%2Fb0dinjwPYOaUKMdHOnbhn84iQ12E9513pyIzMvYeJxW7KUCYgdBHNibIhUuz%2FHyxAR0wu%2FuOMApUi03VT9J7DXgYYtkC2C4z7YI%2B4AilzXVr8Wurxf8ataINhGj8BBjw28q7BhtJvtGsXd2n&X-Amz-Signature=dafabf27a3da4f4432df5244d10c300fc44630f1e4f166562583ad59300299d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4RD4ESQ%2F20260312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260312T020843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDitgvgI0bZNaMuJi990bYccYFDwX46dllQMjnrCzuatAiBedPDsXwpwQtsVAm%2Bby91XY0iYTEeBU8eDXThkz1HVrSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM3wgW%2FOJD%2FEYZP4xlKtwDSYdbcngV3Md%2BEwtRGcXNKSUi1H%2B9xl6J2U1ROlW0y9z9ITo5Q6MTDLRUAxJzr%2FDdoKY33BkI%2Fu3t2wGYVCXxNj9YN2mRbGreyI1xPGOhn7JRwJAw%2FZNxTgatCLutK0KQxb4c8c%2FvQF6QDilh2HWClDZFyCyAWABl2eLTvOVy9Ihjkf3uZzRY4OAdaqhJSNAVKw5oTqDJmEOTeNRTYgSvOBinHggKH5gatpRa7x1h%2FuBLgd3WeblhR2MM4JhizLlon2%2Fjy6FDh1K%2FEO3zWtf%2FM83y7sXCpBin9Neg4ALmk31iduJSLBs3IIcNsxdjOL%2BRrfTwJLDVozvz8XAHSnvIK7ubqoK0%2Bl2OTgbnkHrirnLNfUkg28ywfgd5An5ShPIGQDcMEy3pDz2%2F5darhMWrMNxzJGVJqTVSgx%2B0ddQ7iYsMKUizOq9hD2im5nVf3eUILECYSfEpqvJRU9%2BUc5WXG5wtqT%2FgZdtlj2vXBeHSc0BeZz%2B7LoRfSPJ5rMYbBeXqoIEIv5IHfvvDtryg28JcZbryHfyTfzgIifukfuUnmtHUAl5V9AE63KbXZBVX7Ol300OHRRubHk0%2BUBmzA7pHFRChZ8qzRYpeLfKVMLRJf4vlfEpnQJ1I8xwJdIIw1pLIzQY6pgGcxcLCUTj8r9RMFRbVooKgzm9gxVGSQkN%2Bhj35GtUEcPAN5HQR2XcLxiYqsZ%2F96MU7c7IKzR%2Bu%2F1chDmA4P11qqW7X6fOZ6Xz%2FGzsLMFnbXmOjPrYF%2BdkplEOnalja75RJ8rIfY%2BHoIWMEP8Bw%2BkXtiThMWIphV8%2BmgCe2zFT2ElAGKm6SUGv%2FdO1QaiYZGTDcTC833yrhkMpdLjena3m5LqAmPfip&X-Amz-Signature=573b23677f041637796f9fea63031d6f9a6dff92f2ad3447384ce565a47a3def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

