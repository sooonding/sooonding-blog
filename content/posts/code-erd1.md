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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBANUHN%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T011442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDkQo35ywj78%2B0LkZSOsh5X%2BbXjSOZFgfJ9cn6At3rKXgIhANBhr5kkPuW4m1uiu0FymZjonfnvEWhphrGEWu7ccUxHKv8DCDUQABoMNjM3NDIzMTgzODA1IgzIC5Vx%2FEjQNS1hc60q3ANxCRrBBaPkHXnqeytYXV0Wx5dFCBPe4dLJ1nE8zLpxbATRd05Sxoe3vd6ERmB9%2Fix7se8Qch6vUN0E1WY1IRJNhpoyJseEKmRK8bDwFu1vmte6oa65zOU0z6brIdft6BGAi4CGfLNSAY7zfDQ97uw2EY%2Bu38XyQ4XfrG9F%2Byf%2FPEFBlmgOZdpyIC1t3Q4drCqePmv%2FokwjMCoM3qg90Dzf%2B%2BrZ2w1MZJycHzqKAoBiB%2FR2PLnQpECg%2BNM1Ql7TfSIbKsaAz9bqCoaEMIQQESLhVv1ejxRrHracgKK04za6szZ0unQCegZfXH0r2ZmsSLD0MbMAxQcNReEwBCGj%2B9cRX97s29OpF3DjPFTpWCPkozE7In%2F5aHYt7Vbt5JEtGskGHZ3N6BXi27OBNijUtqocjzf6rpAX2WcHpGo1t6yedhxSBxsRvUX5NnNiHdVBQrgke7IofysgjCpMycUsWs%2FlgkgF3nZj9vU7osUGXiuEW8lJOstFC%2FaecFhhNJPviYoK%2Fvg6%2FSKvWmrMIe6GN0eoO%2BAYg0lB3aNoRy4J4dKO4Py3fjhDkuyhNeb0d%2BfHKEEpYh4L9jPGFZKj5cVkvaoIUpZVg75Qbe3ESpKpTXwv3FicgaEcgkhM%2BJk%2F9jDrlOvKBjqkARq33J%2Bwy4NKyrpFDmQc6Dc1s%2BGkRrC%2BscM9xv9VMv7KgmoYHYdPrlevERupG9xrtq%2F%2BhGQGBTMYkTp1VSH295bFnfcuZcr6qDgCZD7jS80C0va8NCuk4y797HsZ8e6SdoQZkRG2GqIMaxx1sp1zCDnWAKdXHyNi%2BFAwa0vKq%2BeJHrww0RO%2FZSmojprVP85EPbovVQjlZa1aI1D%2BY%2F2wHYJZ5kQP&X-Amz-Signature=fe9fc4f13c240084ea38d0c8c0d03bfd2cafb80919792c2cbdf4b82724ad5f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GYJ4JI%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T011443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDmewiBGwP3G%2BhrN16VfY7QYmmG5TsE0A%2BmZrF3nGfRZAiEAg%2FHpx7yaurlvhrGREdiUlFhyXSw8wf3LIxvM2haM1Fcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCPWyfP34BuY5y8XNSrcA6dQYyUS3HbM4vBsU4odPUOXCQ5Lxh9qdBCczNR32SglNv%2Bte%2FVPVexhmJWEbSm9MA2QURdwbgcBmnacSvk%2F6XuEFITlcHyyRBZ0rTeS9z07wijPz%2FVyYevOmv9gn8zyWKB5XUsuGtO8m6qUVxMltemHEs8j%2FTYoptKAKQD9Nbx7pfjizE31UXMavm17iSzE6CW%2BrCenZvTAAYOUeeGzINCCEMTRXbMaRsNmgMAB9ftRJBDFSKam7qdoWuH5v45CDjjKSF53lFfrcF7DZEZDnLrttnx%2FEI6E4X9P%2FLh6FK%2BtaucFdgX4gACEh4fcTAEcgvf50znaT8C2OVf2PqjQqY6vZxVW75g7Tal42bJPz64mgWbAi47SG6IiqFqXAYZPzSk%2FiaMHwgkd0UUXsy0E14wP2Gg2u6KbY2TlzZ6jjTEiTsUcNgCy0HiQN7bIdI71dqFqEuNnc%2FUu%2FB7mq87At%2F4fvtCQFmgjCDGmMu7glEFerxIOpMvDwCqdorhwVzPSqMAg9pxfbtJjasbuw3M4D6XFB2QAsWi27ST8rpugTzLKTcY4CDgSITFWSHrawk9gL5RVxPs4HSiFSEJ9U5fWpCYPbFHtc%2FWno07bNY5nkBKGWPmdtXpks2XjQ0AsMJeL68oGOqUBB3Aw%2F6j6v0XO0nssurG6%2Fuaj7Rx4HayXSlbX0zzEeC4ninIB%2FESHOY20Hop0BJrc0TGSafeHr7lvhfOmSfA4KuXEkckwZ4V1BkAJw0Kfyq2uV8XvjIaOvdinfT4yi8NcigpG%2FeejqcDa%2BDOIlHJdHOvMjMFa5DmUZ%2BdqlmA2r18DHYPnVMev6987WlIEKABLOnVF6okhbyF%2BD5iC5GXsdCqGxxRL&X-Amz-Signature=bb7b28cc966d63336a1b13f039f5d1f7fd138a236c7778a8df0b82248865612b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GYJ4JI%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T011443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDmewiBGwP3G%2BhrN16VfY7QYmmG5TsE0A%2BmZrF3nGfRZAiEAg%2FHpx7yaurlvhrGREdiUlFhyXSw8wf3LIxvM2haM1Fcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCPWyfP34BuY5y8XNSrcA6dQYyUS3HbM4vBsU4odPUOXCQ5Lxh9qdBCczNR32SglNv%2Bte%2FVPVexhmJWEbSm9MA2QURdwbgcBmnacSvk%2F6XuEFITlcHyyRBZ0rTeS9z07wijPz%2FVyYevOmv9gn8zyWKB5XUsuGtO8m6qUVxMltemHEs8j%2FTYoptKAKQD9Nbx7pfjizE31UXMavm17iSzE6CW%2BrCenZvTAAYOUeeGzINCCEMTRXbMaRsNmgMAB9ftRJBDFSKam7qdoWuH5v45CDjjKSF53lFfrcF7DZEZDnLrttnx%2FEI6E4X9P%2FLh6FK%2BtaucFdgX4gACEh4fcTAEcgvf50znaT8C2OVf2PqjQqY6vZxVW75g7Tal42bJPz64mgWbAi47SG6IiqFqXAYZPzSk%2FiaMHwgkd0UUXsy0E14wP2Gg2u6KbY2TlzZ6jjTEiTsUcNgCy0HiQN7bIdI71dqFqEuNnc%2FUu%2FB7mq87At%2F4fvtCQFmgjCDGmMu7glEFerxIOpMvDwCqdorhwVzPSqMAg9pxfbtJjasbuw3M4D6XFB2QAsWi27ST8rpugTzLKTcY4CDgSITFWSHrawk9gL5RVxPs4HSiFSEJ9U5fWpCYPbFHtc%2FWno07bNY5nkBKGWPmdtXpks2XjQ0AsMJeL68oGOqUBB3Aw%2F6j6v0XO0nssurG6%2Fuaj7Rx4HayXSlbX0zzEeC4ninIB%2FESHOY20Hop0BJrc0TGSafeHr7lvhfOmSfA4KuXEkckwZ4V1BkAJw0Kfyq2uV8XvjIaOvdinfT4yi8NcigpG%2FeejqcDa%2BDOIlHJdHOvMjMFa5DmUZ%2BdqlmA2r18DHYPnVMev6987WlIEKABLOnVF6okhbyF%2BD5iC5GXsdCqGxxRL&X-Amz-Signature=68910b2cc54596b79e12065143754841af6ade155af76f13283d2f8fef3edac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GYJ4JI%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T011443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDmewiBGwP3G%2BhrN16VfY7QYmmG5TsE0A%2BmZrF3nGfRZAiEAg%2FHpx7yaurlvhrGREdiUlFhyXSw8wf3LIxvM2haM1Fcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCPWyfP34BuY5y8XNSrcA6dQYyUS3HbM4vBsU4odPUOXCQ5Lxh9qdBCczNR32SglNv%2Bte%2FVPVexhmJWEbSm9MA2QURdwbgcBmnacSvk%2F6XuEFITlcHyyRBZ0rTeS9z07wijPz%2FVyYevOmv9gn8zyWKB5XUsuGtO8m6qUVxMltemHEs8j%2FTYoptKAKQD9Nbx7pfjizE31UXMavm17iSzE6CW%2BrCenZvTAAYOUeeGzINCCEMTRXbMaRsNmgMAB9ftRJBDFSKam7qdoWuH5v45CDjjKSF53lFfrcF7DZEZDnLrttnx%2FEI6E4X9P%2FLh6FK%2BtaucFdgX4gACEh4fcTAEcgvf50znaT8C2OVf2PqjQqY6vZxVW75g7Tal42bJPz64mgWbAi47SG6IiqFqXAYZPzSk%2FiaMHwgkd0UUXsy0E14wP2Gg2u6KbY2TlzZ6jjTEiTsUcNgCy0HiQN7bIdI71dqFqEuNnc%2FUu%2FB7mq87At%2F4fvtCQFmgjCDGmMu7glEFerxIOpMvDwCqdorhwVzPSqMAg9pxfbtJjasbuw3M4D6XFB2QAsWi27ST8rpugTzLKTcY4CDgSITFWSHrawk9gL5RVxPs4HSiFSEJ9U5fWpCYPbFHtc%2FWno07bNY5nkBKGWPmdtXpks2XjQ0AsMJeL68oGOqUBB3Aw%2F6j6v0XO0nssurG6%2Fuaj7Rx4HayXSlbX0zzEeC4ninIB%2FESHOY20Hop0BJrc0TGSafeHr7lvhfOmSfA4KuXEkckwZ4V1BkAJw0Kfyq2uV8XvjIaOvdinfT4yi8NcigpG%2FeejqcDa%2BDOIlHJdHOvMjMFa5DmUZ%2BdqlmA2r18DHYPnVMev6987WlIEKABLOnVF6okhbyF%2BD5iC5GXsdCqGxxRL&X-Amz-Signature=d6e8a8355238408697a535e408e915459d403314a10cceb9facae0098006722e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GYJ4JI%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T011443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDmewiBGwP3G%2BhrN16VfY7QYmmG5TsE0A%2BmZrF3nGfRZAiEAg%2FHpx7yaurlvhrGREdiUlFhyXSw8wf3LIxvM2haM1Fcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCPWyfP34BuY5y8XNSrcA6dQYyUS3HbM4vBsU4odPUOXCQ5Lxh9qdBCczNR32SglNv%2Bte%2FVPVexhmJWEbSm9MA2QURdwbgcBmnacSvk%2F6XuEFITlcHyyRBZ0rTeS9z07wijPz%2FVyYevOmv9gn8zyWKB5XUsuGtO8m6qUVxMltemHEs8j%2FTYoptKAKQD9Nbx7pfjizE31UXMavm17iSzE6CW%2BrCenZvTAAYOUeeGzINCCEMTRXbMaRsNmgMAB9ftRJBDFSKam7qdoWuH5v45CDjjKSF53lFfrcF7DZEZDnLrttnx%2FEI6E4X9P%2FLh6FK%2BtaucFdgX4gACEh4fcTAEcgvf50znaT8C2OVf2PqjQqY6vZxVW75g7Tal42bJPz64mgWbAi47SG6IiqFqXAYZPzSk%2FiaMHwgkd0UUXsy0E14wP2Gg2u6KbY2TlzZ6jjTEiTsUcNgCy0HiQN7bIdI71dqFqEuNnc%2FUu%2FB7mq87At%2F4fvtCQFmgjCDGmMu7glEFerxIOpMvDwCqdorhwVzPSqMAg9pxfbtJjasbuw3M4D6XFB2QAsWi27ST8rpugTzLKTcY4CDgSITFWSHrawk9gL5RVxPs4HSiFSEJ9U5fWpCYPbFHtc%2FWno07bNY5nkBKGWPmdtXpks2XjQ0AsMJeL68oGOqUBB3Aw%2F6j6v0XO0nssurG6%2Fuaj7Rx4HayXSlbX0zzEeC4ninIB%2FESHOY20Hop0BJrc0TGSafeHr7lvhfOmSfA4KuXEkckwZ4V1BkAJw0Kfyq2uV8XvjIaOvdinfT4yi8NcigpG%2FeejqcDa%2BDOIlHJdHOvMjMFa5DmUZ%2BdqlmA2r18DHYPnVMev6987WlIEKABLOnVF6okhbyF%2BD5iC5GXsdCqGxxRL&X-Amz-Signature=27802359b07a0a601546a901a543d03c1f1e2f7854f15f68edf20fc45d79932d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GYJ4JI%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T011443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDmewiBGwP3G%2BhrN16VfY7QYmmG5TsE0A%2BmZrF3nGfRZAiEAg%2FHpx7yaurlvhrGREdiUlFhyXSw8wf3LIxvM2haM1Fcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCPWyfP34BuY5y8XNSrcA6dQYyUS3HbM4vBsU4odPUOXCQ5Lxh9qdBCczNR32SglNv%2Bte%2FVPVexhmJWEbSm9MA2QURdwbgcBmnacSvk%2F6XuEFITlcHyyRBZ0rTeS9z07wijPz%2FVyYevOmv9gn8zyWKB5XUsuGtO8m6qUVxMltemHEs8j%2FTYoptKAKQD9Nbx7pfjizE31UXMavm17iSzE6CW%2BrCenZvTAAYOUeeGzINCCEMTRXbMaRsNmgMAB9ftRJBDFSKam7qdoWuH5v45CDjjKSF53lFfrcF7DZEZDnLrttnx%2FEI6E4X9P%2FLh6FK%2BtaucFdgX4gACEh4fcTAEcgvf50znaT8C2OVf2PqjQqY6vZxVW75g7Tal42bJPz64mgWbAi47SG6IiqFqXAYZPzSk%2FiaMHwgkd0UUXsy0E14wP2Gg2u6KbY2TlzZ6jjTEiTsUcNgCy0HiQN7bIdI71dqFqEuNnc%2FUu%2FB7mq87At%2F4fvtCQFmgjCDGmMu7glEFerxIOpMvDwCqdorhwVzPSqMAg9pxfbtJjasbuw3M4D6XFB2QAsWi27ST8rpugTzLKTcY4CDgSITFWSHrawk9gL5RVxPs4HSiFSEJ9U5fWpCYPbFHtc%2FWno07bNY5nkBKGWPmdtXpks2XjQ0AsMJeL68oGOqUBB3Aw%2F6j6v0XO0nssurG6%2Fuaj7Rx4HayXSlbX0zzEeC4ninIB%2FESHOY20Hop0BJrc0TGSafeHr7lvhfOmSfA4KuXEkckwZ4V1BkAJw0Kfyq2uV8XvjIaOvdinfT4yi8NcigpG%2FeejqcDa%2BDOIlHJdHOvMjMFa5DmUZ%2BdqlmA2r18DHYPnVMev6987WlIEKABLOnVF6okhbyF%2BD5iC5GXsdCqGxxRL&X-Amz-Signature=5da56a9a4db5148a4282b50541bec105cbe50d78ab0ffa187426db08ec9b5cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBANUHN%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T011442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDkQo35ywj78%2B0LkZSOsh5X%2BbXjSOZFgfJ9cn6At3rKXgIhANBhr5kkPuW4m1uiu0FymZjonfnvEWhphrGEWu7ccUxHKv8DCDUQABoMNjM3NDIzMTgzODA1IgzIC5Vx%2FEjQNS1hc60q3ANxCRrBBaPkHXnqeytYXV0Wx5dFCBPe4dLJ1nE8zLpxbATRd05Sxoe3vd6ERmB9%2Fix7se8Qch6vUN0E1WY1IRJNhpoyJseEKmRK8bDwFu1vmte6oa65zOU0z6brIdft6BGAi4CGfLNSAY7zfDQ97uw2EY%2Bu38XyQ4XfrG9F%2Byf%2FPEFBlmgOZdpyIC1t3Q4drCqePmv%2FokwjMCoM3qg90Dzf%2B%2BrZ2w1MZJycHzqKAoBiB%2FR2PLnQpECg%2BNM1Ql7TfSIbKsaAz9bqCoaEMIQQESLhVv1ejxRrHracgKK04za6szZ0unQCegZfXH0r2ZmsSLD0MbMAxQcNReEwBCGj%2B9cRX97s29OpF3DjPFTpWCPkozE7In%2F5aHYt7Vbt5JEtGskGHZ3N6BXi27OBNijUtqocjzf6rpAX2WcHpGo1t6yedhxSBxsRvUX5NnNiHdVBQrgke7IofysgjCpMycUsWs%2FlgkgF3nZj9vU7osUGXiuEW8lJOstFC%2FaecFhhNJPviYoK%2Fvg6%2FSKvWmrMIe6GN0eoO%2BAYg0lB3aNoRy4J4dKO4Py3fjhDkuyhNeb0d%2BfHKEEpYh4L9jPGFZKj5cVkvaoIUpZVg75Qbe3ESpKpTXwv3FicgaEcgkhM%2BJk%2F9jDrlOvKBjqkARq33J%2Bwy4NKyrpFDmQc6Dc1s%2BGkRrC%2BscM9xv9VMv7KgmoYHYdPrlevERupG9xrtq%2F%2BhGQGBTMYkTp1VSH295bFnfcuZcr6qDgCZD7jS80C0va8NCuk4y797HsZ8e6SdoQZkRG2GqIMaxx1sp1zCDnWAKdXHyNi%2BFAwa0vKq%2BeJHrww0RO%2FZSmojprVP85EPbovVQjlZa1aI1D%2BY%2F2wHYJZ5kQP&X-Amz-Signature=f8e06845cfb3a36d384b7c4cee1b29d6154c7c2d68d42942c6c10d76eda3b878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

