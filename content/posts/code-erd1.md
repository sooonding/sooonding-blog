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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VFEIJX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC10u7%2BdCnF82rfSPSURkp3GdcC2hdvmiczwMAm%2B7Dv%2BAiBrQMF%2BgnLdKV8SNBO%2FKELja8vTLcMlmqXc0nIEerLuEiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu5xNACrV3JWQZSFKtwDFjcy%2BCa0m%2FJwpn9pgLRztK3gXFkcRykIZ2ItUg%2B%2BDvLxL60l%2FJRnwIRq0XVA0ty0AeqS6RFPnjYtT0gIW1m6T8yPnpgAOX6ZFAJTau%2F5GQ%2FRxb1pkg5wdiIU5BOmbm9vCWofg9wd%2Bmpe9fKiHMUx5k5YXbP9%2BMJOHUmgTYKxSowRiXoFJUj5usBbW%2FXnVc57v9tUVtJlzmjHD0p4VR%2B2RVg30IsotifPa91%2BCsNHe8gSD%2Bm6e5TN%2BiRvDO8ZQWy16CRfhc6ywB%2BMU%2BxG%2BY39b9zJ7t%2BjUcG8LJbP0WgjikxgDMC2rahm6VghvAqd3ao4VT2IQjtmRChHV8e4vBzLpcbV0Y2k0%2B9Wt9ocpGoxMmwwZZaI7EOz2m2YxyaQGufHtQa%2FTPxKXH%2BMKj1GNflLVh5GYLn29VAjJCrXK9FiUrh51gjE1BCGKq6QH99k0MZvNOPAu%2F03zmwisHDufvonzejydyRf24%2FWOQov%2Bo81JsgV0OV4Vke7r%2BsYux0JhcSURjYBxnvbqGXjd2lX7NF6V6OUmNFK07dh95d6v1ng7ogrhaiAmjGxshx1e2vu1lDoasHhIq9BOM8Xt6oeiHgFQ1fDaHnRosXNViiBLn6X3r5o4qTv3OPpgNhgw8UwgreSygY6pgG%2Fp5IA61fDE2Lzn52fCvUNlsK0G4QgvWwwNB6qzjL4nsb7Sxb11FmacZUIbdWRV6d86YdC4HJVQNObY7MLI6B%2FaWXkv5zrF5YWuCfTrgw9c1zfl99PFXlnVGtTIQWm0880%2F2ux05Ck%2BCObka97QR%2BPd2cFJwKHJGLbAqn31zFqFV7lLzV4b3iMOMKVEf%2FStk27q%2FCZkvq7uoea5EkIhyGj5bpiTPk9&X-Amz-Signature=bee0450d66c852d31733847d3c09309253dc056557e5b4eeb1025b761b899b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6AKYV5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYN%2BQ4FpZc7hbk%2BHuINxCWfMHaUYX7Quj1W3UjRxaQyAiAhmxYw4E0WpsoByfxOV6gYGanmFGrIvdvbD9CbU107SiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9s86o%2BDXP96s2h3KtwDdzWrwRGh0HfA3JhWV9B70FhQdxGcdCd1v%2FfEDmzJLIzg9F9KcxNEmJYBT%2FCub44RWIZXpSwENPDf4zBCPuJkgdxVcSrKOnI0KFtWmusrpdmItYu%2FNO1jZz7UKzrDF7A8bUYGbDazdMWivdviNmDTTKGwWflvWxO3WoHX%2FIrQazEL%2FgFozsAkpgkzRQvyZCpUaYqldV4muwdaG9qhwtpHTFrFvGR6gBQeB%2FBIQvn1ES9wKn8uVqXagj5WQHFIEI0I88J6pJ8EVOOQXmW4f9JyvcUa8s7OdqjQoz%2BiCwvZN2n5iHZqfHVTEKwO%2B4Z2EPgv2t65HCt5FJX38kyLb8nAUK3nHGizHRKCCbLuxGsP081F2FCCUl7XV%2FkoG7q%2BqPsfTRXukBIb3UY3g4sAmBpvGxJ%2FB9%2B9DG9R8vxaGHo7FV3duiEp%2Fijj7Pwxzfwbe0oEIJmQimPffjKokg3jQ5MOpxA4AD1rTXO4day%2BhNAaLwVTvwrdfSqQ3XLzQ2H90tz6D9lzv42IRLFbrff6IzT%2B%2Fha%2F95gHR0Xozboco6cpcxAaYf0%2FExd5nccGUxggETIvRs63ts54uIrcnrtkdTtkOY0aeAXbyK5jDTBXR2yeWshN1pBHJkEhAMJWfl8w8LaSygY6pgGSG6fKs7IoCKLDmrnO%2FgCk2jPuErz9aKGjPre3Ano%2BJSFaAS4dXeg7p70XN3NNeXC%2BL1n0Yl1VMt6teKuKFQ1Drx3I4T%2FsaAh%2B4xFd2oUU4X9BFm3UO92%2FIl5IrSoJXYWSSuMiIwcnX3K4rEFY%2B%2FXd9fz%2BesQWWdsVlmJ9vQb19LeMaqHnBu6F2fehcwtzwFCYhFJZTFkDkTwMaEqUkUQHZZu8zw%2Ba&X-Amz-Signature=c63f20b38177e5d0e14010eb2eb2f3dfa63127ea35bddff6ece950ace6c14428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6AKYV5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYN%2BQ4FpZc7hbk%2BHuINxCWfMHaUYX7Quj1W3UjRxaQyAiAhmxYw4E0WpsoByfxOV6gYGanmFGrIvdvbD9CbU107SiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9s86o%2BDXP96s2h3KtwDdzWrwRGh0HfA3JhWV9B70FhQdxGcdCd1v%2FfEDmzJLIzg9F9KcxNEmJYBT%2FCub44RWIZXpSwENPDf4zBCPuJkgdxVcSrKOnI0KFtWmusrpdmItYu%2FNO1jZz7UKzrDF7A8bUYGbDazdMWivdviNmDTTKGwWflvWxO3WoHX%2FIrQazEL%2FgFozsAkpgkzRQvyZCpUaYqldV4muwdaG9qhwtpHTFrFvGR6gBQeB%2FBIQvn1ES9wKn8uVqXagj5WQHFIEI0I88J6pJ8EVOOQXmW4f9JyvcUa8s7OdqjQoz%2BiCwvZN2n5iHZqfHVTEKwO%2B4Z2EPgv2t65HCt5FJX38kyLb8nAUK3nHGizHRKCCbLuxGsP081F2FCCUl7XV%2FkoG7q%2BqPsfTRXukBIb3UY3g4sAmBpvGxJ%2FB9%2B9DG9R8vxaGHo7FV3duiEp%2Fijj7Pwxzfwbe0oEIJmQimPffjKokg3jQ5MOpxA4AD1rTXO4day%2BhNAaLwVTvwrdfSqQ3XLzQ2H90tz6D9lzv42IRLFbrff6IzT%2B%2Fha%2F95gHR0Xozboco6cpcxAaYf0%2FExd5nccGUxggETIvRs63ts54uIrcnrtkdTtkOY0aeAXbyK5jDTBXR2yeWshN1pBHJkEhAMJWfl8w8LaSygY6pgGSG6fKs7IoCKLDmrnO%2FgCk2jPuErz9aKGjPre3Ano%2BJSFaAS4dXeg7p70XN3NNeXC%2BL1n0Yl1VMt6teKuKFQ1Drx3I4T%2FsaAh%2B4xFd2oUU4X9BFm3UO92%2FIl5IrSoJXYWSSuMiIwcnX3K4rEFY%2B%2FXd9fz%2BesQWWdsVlmJ9vQb19LeMaqHnBu6F2fehcwtzwFCYhFJZTFkDkTwMaEqUkUQHZZu8zw%2Ba&X-Amz-Signature=523ee312c3aa6d3e474dcbcab3f32111c312dda1b5622a725fe404840e03a85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6AKYV5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYN%2BQ4FpZc7hbk%2BHuINxCWfMHaUYX7Quj1W3UjRxaQyAiAhmxYw4E0WpsoByfxOV6gYGanmFGrIvdvbD9CbU107SiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9s86o%2BDXP96s2h3KtwDdzWrwRGh0HfA3JhWV9B70FhQdxGcdCd1v%2FfEDmzJLIzg9F9KcxNEmJYBT%2FCub44RWIZXpSwENPDf4zBCPuJkgdxVcSrKOnI0KFtWmusrpdmItYu%2FNO1jZz7UKzrDF7A8bUYGbDazdMWivdviNmDTTKGwWflvWxO3WoHX%2FIrQazEL%2FgFozsAkpgkzRQvyZCpUaYqldV4muwdaG9qhwtpHTFrFvGR6gBQeB%2FBIQvn1ES9wKn8uVqXagj5WQHFIEI0I88J6pJ8EVOOQXmW4f9JyvcUa8s7OdqjQoz%2BiCwvZN2n5iHZqfHVTEKwO%2B4Z2EPgv2t65HCt5FJX38kyLb8nAUK3nHGizHRKCCbLuxGsP081F2FCCUl7XV%2FkoG7q%2BqPsfTRXukBIb3UY3g4sAmBpvGxJ%2FB9%2B9DG9R8vxaGHo7FV3duiEp%2Fijj7Pwxzfwbe0oEIJmQimPffjKokg3jQ5MOpxA4AD1rTXO4day%2BhNAaLwVTvwrdfSqQ3XLzQ2H90tz6D9lzv42IRLFbrff6IzT%2B%2Fha%2F95gHR0Xozboco6cpcxAaYf0%2FExd5nccGUxggETIvRs63ts54uIrcnrtkdTtkOY0aeAXbyK5jDTBXR2yeWshN1pBHJkEhAMJWfl8w8LaSygY6pgGSG6fKs7IoCKLDmrnO%2FgCk2jPuErz9aKGjPre3Ano%2BJSFaAS4dXeg7p70XN3NNeXC%2BL1n0Yl1VMt6teKuKFQ1Drx3I4T%2FsaAh%2B4xFd2oUU4X9BFm3UO92%2FIl5IrSoJXYWSSuMiIwcnX3K4rEFY%2B%2FXd9fz%2BesQWWdsVlmJ9vQb19LeMaqHnBu6F2fehcwtzwFCYhFJZTFkDkTwMaEqUkUQHZZu8zw%2Ba&X-Amz-Signature=595f5af838081bcabdd9ac0590b456529e5b26daaf78770c414e918f9f7832d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6AKYV5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYN%2BQ4FpZc7hbk%2BHuINxCWfMHaUYX7Quj1W3UjRxaQyAiAhmxYw4E0WpsoByfxOV6gYGanmFGrIvdvbD9CbU107SiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9s86o%2BDXP96s2h3KtwDdzWrwRGh0HfA3JhWV9B70FhQdxGcdCd1v%2FfEDmzJLIzg9F9KcxNEmJYBT%2FCub44RWIZXpSwENPDf4zBCPuJkgdxVcSrKOnI0KFtWmusrpdmItYu%2FNO1jZz7UKzrDF7A8bUYGbDazdMWivdviNmDTTKGwWflvWxO3WoHX%2FIrQazEL%2FgFozsAkpgkzRQvyZCpUaYqldV4muwdaG9qhwtpHTFrFvGR6gBQeB%2FBIQvn1ES9wKn8uVqXagj5WQHFIEI0I88J6pJ8EVOOQXmW4f9JyvcUa8s7OdqjQoz%2BiCwvZN2n5iHZqfHVTEKwO%2B4Z2EPgv2t65HCt5FJX38kyLb8nAUK3nHGizHRKCCbLuxGsP081F2FCCUl7XV%2FkoG7q%2BqPsfTRXukBIb3UY3g4sAmBpvGxJ%2FB9%2B9DG9R8vxaGHo7FV3duiEp%2Fijj7Pwxzfwbe0oEIJmQimPffjKokg3jQ5MOpxA4AD1rTXO4day%2BhNAaLwVTvwrdfSqQ3XLzQ2H90tz6D9lzv42IRLFbrff6IzT%2B%2Fha%2F95gHR0Xozboco6cpcxAaYf0%2FExd5nccGUxggETIvRs63ts54uIrcnrtkdTtkOY0aeAXbyK5jDTBXR2yeWshN1pBHJkEhAMJWfl8w8LaSygY6pgGSG6fKs7IoCKLDmrnO%2FgCk2jPuErz9aKGjPre3Ano%2BJSFaAS4dXeg7p70XN3NNeXC%2BL1n0Yl1VMt6teKuKFQ1Drx3I4T%2FsaAh%2B4xFd2oUU4X9BFm3UO92%2FIl5IrSoJXYWSSuMiIwcnX3K4rEFY%2B%2FXd9fz%2BesQWWdsVlmJ9vQb19LeMaqHnBu6F2fehcwtzwFCYhFJZTFkDkTwMaEqUkUQHZZu8zw%2Ba&X-Amz-Signature=c26a6c9286789aeebf937fcce91808c0fa00af3fab425bcd993bcd5f44383c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6AKYV5%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYN%2BQ4FpZc7hbk%2BHuINxCWfMHaUYX7Quj1W3UjRxaQyAiAhmxYw4E0WpsoByfxOV6gYGanmFGrIvdvbD9CbU107SiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy9s86o%2BDXP96s2h3KtwDdzWrwRGh0HfA3JhWV9B70FhQdxGcdCd1v%2FfEDmzJLIzg9F9KcxNEmJYBT%2FCub44RWIZXpSwENPDf4zBCPuJkgdxVcSrKOnI0KFtWmusrpdmItYu%2FNO1jZz7UKzrDF7A8bUYGbDazdMWivdviNmDTTKGwWflvWxO3WoHX%2FIrQazEL%2FgFozsAkpgkzRQvyZCpUaYqldV4muwdaG9qhwtpHTFrFvGR6gBQeB%2FBIQvn1ES9wKn8uVqXagj5WQHFIEI0I88J6pJ8EVOOQXmW4f9JyvcUa8s7OdqjQoz%2BiCwvZN2n5iHZqfHVTEKwO%2B4Z2EPgv2t65HCt5FJX38kyLb8nAUK3nHGizHRKCCbLuxGsP081F2FCCUl7XV%2FkoG7q%2BqPsfTRXukBIb3UY3g4sAmBpvGxJ%2FB9%2B9DG9R8vxaGHo7FV3duiEp%2Fijj7Pwxzfwbe0oEIJmQimPffjKokg3jQ5MOpxA4AD1rTXO4day%2BhNAaLwVTvwrdfSqQ3XLzQ2H90tz6D9lzv42IRLFbrff6IzT%2B%2Fha%2F95gHR0Xozboco6cpcxAaYf0%2FExd5nccGUxggETIvRs63ts54uIrcnrtkdTtkOY0aeAXbyK5jDTBXR2yeWshN1pBHJkEhAMJWfl8w8LaSygY6pgGSG6fKs7IoCKLDmrnO%2FgCk2jPuErz9aKGjPre3Ano%2BJSFaAS4dXeg7p70XN3NNeXC%2BL1n0Yl1VMt6teKuKFQ1Drx3I4T%2FsaAh%2B4xFd2oUU4X9BFm3UO92%2FIl5IrSoJXYWSSuMiIwcnX3K4rEFY%2B%2FXd9fz%2BesQWWdsVlmJ9vQb19LeMaqHnBu6F2fehcwtzwFCYhFJZTFkDkTwMaEqUkUQHZZu8zw%2Ba&X-Amz-Signature=06d950e70e835828f7411a241ec24e3b4034c22d05d861246b75dae71560f935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VFEIJX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T010643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC10u7%2BdCnF82rfSPSURkp3GdcC2hdvmiczwMAm%2B7Dv%2BAiBrQMF%2BgnLdKV8SNBO%2FKELja8vTLcMlmqXc0nIEerLuEiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu5xNACrV3JWQZSFKtwDFjcy%2BCa0m%2FJwpn9pgLRztK3gXFkcRykIZ2ItUg%2B%2BDvLxL60l%2FJRnwIRq0XVA0ty0AeqS6RFPnjYtT0gIW1m6T8yPnpgAOX6ZFAJTau%2F5GQ%2FRxb1pkg5wdiIU5BOmbm9vCWofg9wd%2Bmpe9fKiHMUx5k5YXbP9%2BMJOHUmgTYKxSowRiXoFJUj5usBbW%2FXnVc57v9tUVtJlzmjHD0p4VR%2B2RVg30IsotifPa91%2BCsNHe8gSD%2Bm6e5TN%2BiRvDO8ZQWy16CRfhc6ywB%2BMU%2BxG%2BY39b9zJ7t%2BjUcG8LJbP0WgjikxgDMC2rahm6VghvAqd3ao4VT2IQjtmRChHV8e4vBzLpcbV0Y2k0%2B9Wt9ocpGoxMmwwZZaI7EOz2m2YxyaQGufHtQa%2FTPxKXH%2BMKj1GNflLVh5GYLn29VAjJCrXK9FiUrh51gjE1BCGKq6QH99k0MZvNOPAu%2F03zmwisHDufvonzejydyRf24%2FWOQov%2Bo81JsgV0OV4Vke7r%2BsYux0JhcSURjYBxnvbqGXjd2lX7NF6V6OUmNFK07dh95d6v1ng7ogrhaiAmjGxshx1e2vu1lDoasHhIq9BOM8Xt6oeiHgFQ1fDaHnRosXNViiBLn6X3r5o4qTv3OPpgNhgw8UwgreSygY6pgG%2Fp5IA61fDE2Lzn52fCvUNlsK0G4QgvWwwNB6qzjL4nsb7Sxb11FmacZUIbdWRV6d86YdC4HJVQNObY7MLI6B%2FaWXkv5zrF5YWuCfTrgw9c1zfl99PFXlnVGtTIQWm0880%2F2ux05Ck%2BCObka97QR%2BPd2cFJwKHJGLbAqn31zFqFV7lLzV4b3iMOMKVEf%2FStk27q%2FCZkvq7uoea5EkIhyGj5bpiTPk9&X-Amz-Signature=9f151d8541098b01c7587732e6d6310b250d600604390ecf1815f8563156f76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

