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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQXHNBY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T010035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrjlcU4MuDbV2A4dEGPWRZXgcoj6lV0bL2%2FiGq7dzT8AiEA0LC8KtUveq0rp0kI34owZWkfutU3qlo4ayz6fOH96Hgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGKKXhjKjoX7zc6y8yrcA1%2FVo64mJAUfs4sgN8LEKqE0hbHbPXmtNaJjVRWVCNOdoZ%2FlM1fOjPa1G0wXwS9mt8H%2FDJ7fk%2FMvKgHu5WJjWqXzM0bUFr1pPFd0GUDb6JI1cBCbQGr%2FZG21iIOuu1esJhWlrKmZLNXrZJcPjXeQezlOJcemfLtRKJ7sitK98hLHzzALPYxCtM8Yn83c7s4xMjMngtNdrhZddzwNXvPqJ2VLX70OHJriI%2BiiAV5lVzULXR7ph8muWQqA360wBrcBo7oQk2lyoaORq1qJ5mZOaZgbRhD%2BEchMA%2BsZPJjTQGAWsyDsL7SPV8nq8NrlG6oXvxEHEZkMgdr7GmtdjROQBSiNeK6DDGswQn8rGGSlkR2AHXCeZVL6Y0a8vZG9GUEd%2F96Him0ZHeCgFzYpjnT0VeME8amKqMfWOdzbWXHIrXU63FLajRq7shWyvbzCshsPFTELA8XEJXam2ik9xxjKFii5UHYgDNgIXJh1kfSQ4UPutKvCwhHB6fprd8N%2B7IsZYX0NxyU9FR%2BA3dJPrBCOxn894UJ5OlUvath4TAAZ5E1%2BKpJblcc%2BFyry%2B41e67diK3Al%2FDMLhC5obUhhg%2B6o6fOExmIlHqGbotZRJDsy78nvsBDoRAPiAD3i3z%2BvMJja5ccGOqUBUcqg6h6hVDDpBUUEsUcmu0F8SbL9iL79H0DDMX63vDvf3wCFJAPbPHCIJnWEtFMascwRtsRFMrGlilBgbiosEK27Jd1nfid3KdDuxZCCReITnxdes31Q6a6m4iAwGSjKx%2FmaftyEDqeyykN6B%2B4kDhqmU%2FJLsoKxeMAdEpxkSkkzBff66hxnjgtNZkk37b9B2zWcc9wwGF8TkKHiUVOPNYB414%2Bn&X-Amz-Signature=5f498f24aaa7ba5e972d70aa16e950c3f4613ced983d76b76b5cbbfb3552d4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKHYTNR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T010036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmPRUnPDnhKl8CZdrkY%2FynDiO%2Fn5RO5aQkWC%2B5H23zlAIgdwg8e6VwDdU8tcoaPcyP7XRmXTWVQMJqGlved%2FDZbbkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN%2BwqIJ7%2FZbfw20t1SrcA7z2sWX%2Fyn4OTzLp7eHxYZyoX0jF96JjwJKexu44d4TkngcgY0wqkNWqXJmUqI61lWHkEzWqeoOsPq7xZUsAIDZyXBY0HmPV%2FNgC4gP6t73lHIlBY9zCWAvlM0OOPPMOOwtn94hdVsqlEgj0jBoVMXrBhleSLRP1pX3L6nntUr7Fq484%2BVN90FTvj3CM2cPRNq1djY9zpsyDBQPrCHLWJJMmPyA%2BQPFdhFpeNncKv4%2FttDKRuINO5Q%2B%2BCMPsqVyUIG5j4dlZM0sP1giJkyvdMOirCazO7dvl9Ky2y73bplcunserjN6VXWegpPcNbepqw%2FXiIlV%2B42BdkVWJoZ4Hj9qfOLzVOGOaZauhOcVKo2kvQ%2BFJMXd5p7aHepoQEnHqGE5Wfay7PR4Z52uzYmJMtP4vWBaxrbDtWtBuchqRCEzRGZC1%2BIdD8K9l0ABE801BXZnch65%2BxjgTVXi%2F2RjjgSl8VdEPaK9VPees28aBAnIYa5dkjrr%2BH5n6DdbRKx4rZAvl0v8R45wskHAP8E7i6i6Irq9LT%2BtME9LfA7KFIQWHeqxNG4YdAScrKPguuglFHUUepXbpDs%2BzZbVFP9bg1opj0Aj4AuSGe4JxQjO1Atz9WEvaubrDFxzO2KwmMOzZ5ccGOqUBuHAzgDIAYvwngWKBKghSv%2BlaMsMQUbjKGbB70TWcj9sz8vBQKgu5k9ShYQmEEA3qQYRPKVASFrzlKhr8eQcWctcp9hLn7HL7eSgmNV7CGHaXQFlekbYEFc9kaFHDahYYby3pgftn05kca3NR8Lklp2HYAQQ05vRBkw2BRYYzYDpyyDinDhVdtVBlvQ8%2FVSMskYb7LhZGMJArODyg3eaPS%2B%2FTr6aF&X-Amz-Signature=a508cb9abc6e635c237a3496f00e558e4c172662da9834f4123e80bef9561f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKHYTNR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T010036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmPRUnPDnhKl8CZdrkY%2FynDiO%2Fn5RO5aQkWC%2B5H23zlAIgdwg8e6VwDdU8tcoaPcyP7XRmXTWVQMJqGlved%2FDZbbkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN%2BwqIJ7%2FZbfw20t1SrcA7z2sWX%2Fyn4OTzLp7eHxYZyoX0jF96JjwJKexu44d4TkngcgY0wqkNWqXJmUqI61lWHkEzWqeoOsPq7xZUsAIDZyXBY0HmPV%2FNgC4gP6t73lHIlBY9zCWAvlM0OOPPMOOwtn94hdVsqlEgj0jBoVMXrBhleSLRP1pX3L6nntUr7Fq484%2BVN90FTvj3CM2cPRNq1djY9zpsyDBQPrCHLWJJMmPyA%2BQPFdhFpeNncKv4%2FttDKRuINO5Q%2B%2BCMPsqVyUIG5j4dlZM0sP1giJkyvdMOirCazO7dvl9Ky2y73bplcunserjN6VXWegpPcNbepqw%2FXiIlV%2B42BdkVWJoZ4Hj9qfOLzVOGOaZauhOcVKo2kvQ%2BFJMXd5p7aHepoQEnHqGE5Wfay7PR4Z52uzYmJMtP4vWBaxrbDtWtBuchqRCEzRGZC1%2BIdD8K9l0ABE801BXZnch65%2BxjgTVXi%2F2RjjgSl8VdEPaK9VPees28aBAnIYa5dkjrr%2BH5n6DdbRKx4rZAvl0v8R45wskHAP8E7i6i6Irq9LT%2BtME9LfA7KFIQWHeqxNG4YdAScrKPguuglFHUUepXbpDs%2BzZbVFP9bg1opj0Aj4AuSGe4JxQjO1Atz9WEvaubrDFxzO2KwmMOzZ5ccGOqUBuHAzgDIAYvwngWKBKghSv%2BlaMsMQUbjKGbB70TWcj9sz8vBQKgu5k9ShYQmEEA3qQYRPKVASFrzlKhr8eQcWctcp9hLn7HL7eSgmNV7CGHaXQFlekbYEFc9kaFHDahYYby3pgftn05kca3NR8Lklp2HYAQQ05vRBkw2BRYYzYDpyyDinDhVdtVBlvQ8%2FVSMskYb7LhZGMJArODyg3eaPS%2B%2FTr6aF&X-Amz-Signature=3cf070b2c3c42b8a04d73417b9624e91dc076af196ab61797009999e51cb56d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKHYTNR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T010036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmPRUnPDnhKl8CZdrkY%2FynDiO%2Fn5RO5aQkWC%2B5H23zlAIgdwg8e6VwDdU8tcoaPcyP7XRmXTWVQMJqGlved%2FDZbbkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN%2BwqIJ7%2FZbfw20t1SrcA7z2sWX%2Fyn4OTzLp7eHxYZyoX0jF96JjwJKexu44d4TkngcgY0wqkNWqXJmUqI61lWHkEzWqeoOsPq7xZUsAIDZyXBY0HmPV%2FNgC4gP6t73lHIlBY9zCWAvlM0OOPPMOOwtn94hdVsqlEgj0jBoVMXrBhleSLRP1pX3L6nntUr7Fq484%2BVN90FTvj3CM2cPRNq1djY9zpsyDBQPrCHLWJJMmPyA%2BQPFdhFpeNncKv4%2FttDKRuINO5Q%2B%2BCMPsqVyUIG5j4dlZM0sP1giJkyvdMOirCazO7dvl9Ky2y73bplcunserjN6VXWegpPcNbepqw%2FXiIlV%2B42BdkVWJoZ4Hj9qfOLzVOGOaZauhOcVKo2kvQ%2BFJMXd5p7aHepoQEnHqGE5Wfay7PR4Z52uzYmJMtP4vWBaxrbDtWtBuchqRCEzRGZC1%2BIdD8K9l0ABE801BXZnch65%2BxjgTVXi%2F2RjjgSl8VdEPaK9VPees28aBAnIYa5dkjrr%2BH5n6DdbRKx4rZAvl0v8R45wskHAP8E7i6i6Irq9LT%2BtME9LfA7KFIQWHeqxNG4YdAScrKPguuglFHUUepXbpDs%2BzZbVFP9bg1opj0Aj4AuSGe4JxQjO1Atz9WEvaubrDFxzO2KwmMOzZ5ccGOqUBuHAzgDIAYvwngWKBKghSv%2BlaMsMQUbjKGbB70TWcj9sz8vBQKgu5k9ShYQmEEA3qQYRPKVASFrzlKhr8eQcWctcp9hLn7HL7eSgmNV7CGHaXQFlekbYEFc9kaFHDahYYby3pgftn05kca3NR8Lklp2HYAQQ05vRBkw2BRYYzYDpyyDinDhVdtVBlvQ8%2FVSMskYb7LhZGMJArODyg3eaPS%2B%2FTr6aF&X-Amz-Signature=77144c9165d457b524978b7156ddd271aa23c1c80eaf2fe3ae00148aa136b502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKHYTNR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T010036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmPRUnPDnhKl8CZdrkY%2FynDiO%2Fn5RO5aQkWC%2B5H23zlAIgdwg8e6VwDdU8tcoaPcyP7XRmXTWVQMJqGlved%2FDZbbkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN%2BwqIJ7%2FZbfw20t1SrcA7z2sWX%2Fyn4OTzLp7eHxYZyoX0jF96JjwJKexu44d4TkngcgY0wqkNWqXJmUqI61lWHkEzWqeoOsPq7xZUsAIDZyXBY0HmPV%2FNgC4gP6t73lHIlBY9zCWAvlM0OOPPMOOwtn94hdVsqlEgj0jBoVMXrBhleSLRP1pX3L6nntUr7Fq484%2BVN90FTvj3CM2cPRNq1djY9zpsyDBQPrCHLWJJMmPyA%2BQPFdhFpeNncKv4%2FttDKRuINO5Q%2B%2BCMPsqVyUIG5j4dlZM0sP1giJkyvdMOirCazO7dvl9Ky2y73bplcunserjN6VXWegpPcNbepqw%2FXiIlV%2B42BdkVWJoZ4Hj9qfOLzVOGOaZauhOcVKo2kvQ%2BFJMXd5p7aHepoQEnHqGE5Wfay7PR4Z52uzYmJMtP4vWBaxrbDtWtBuchqRCEzRGZC1%2BIdD8K9l0ABE801BXZnch65%2BxjgTVXi%2F2RjjgSl8VdEPaK9VPees28aBAnIYa5dkjrr%2BH5n6DdbRKx4rZAvl0v8R45wskHAP8E7i6i6Irq9LT%2BtME9LfA7KFIQWHeqxNG4YdAScrKPguuglFHUUepXbpDs%2BzZbVFP9bg1opj0Aj4AuSGe4JxQjO1Atz9WEvaubrDFxzO2KwmMOzZ5ccGOqUBuHAzgDIAYvwngWKBKghSv%2BlaMsMQUbjKGbB70TWcj9sz8vBQKgu5k9ShYQmEEA3qQYRPKVASFrzlKhr8eQcWctcp9hLn7HL7eSgmNV7CGHaXQFlekbYEFc9kaFHDahYYby3pgftn05kca3NR8Lklp2HYAQQ05vRBkw2BRYYzYDpyyDinDhVdtVBlvQ8%2FVSMskYb7LhZGMJArODyg3eaPS%2B%2FTr6aF&X-Amz-Signature=b82d541f00f7fae1a0d29486bf202339cd3a815f8259a8fd259aade5023ae612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKHYTNR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T010036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmPRUnPDnhKl8CZdrkY%2FynDiO%2Fn5RO5aQkWC%2B5H23zlAIgdwg8e6VwDdU8tcoaPcyP7XRmXTWVQMJqGlved%2FDZbbkq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN%2BwqIJ7%2FZbfw20t1SrcA7z2sWX%2Fyn4OTzLp7eHxYZyoX0jF96JjwJKexu44d4TkngcgY0wqkNWqXJmUqI61lWHkEzWqeoOsPq7xZUsAIDZyXBY0HmPV%2FNgC4gP6t73lHIlBY9zCWAvlM0OOPPMOOwtn94hdVsqlEgj0jBoVMXrBhleSLRP1pX3L6nntUr7Fq484%2BVN90FTvj3CM2cPRNq1djY9zpsyDBQPrCHLWJJMmPyA%2BQPFdhFpeNncKv4%2FttDKRuINO5Q%2B%2BCMPsqVyUIG5j4dlZM0sP1giJkyvdMOirCazO7dvl9Ky2y73bplcunserjN6VXWegpPcNbepqw%2FXiIlV%2B42BdkVWJoZ4Hj9qfOLzVOGOaZauhOcVKo2kvQ%2BFJMXd5p7aHepoQEnHqGE5Wfay7PR4Z52uzYmJMtP4vWBaxrbDtWtBuchqRCEzRGZC1%2BIdD8K9l0ABE801BXZnch65%2BxjgTVXi%2F2RjjgSl8VdEPaK9VPees28aBAnIYa5dkjrr%2BH5n6DdbRKx4rZAvl0v8R45wskHAP8E7i6i6Irq9LT%2BtME9LfA7KFIQWHeqxNG4YdAScrKPguuglFHUUepXbpDs%2BzZbVFP9bg1opj0Aj4AuSGe4JxQjO1Atz9WEvaubrDFxzO2KwmMOzZ5ccGOqUBuHAzgDIAYvwngWKBKghSv%2BlaMsMQUbjKGbB70TWcj9sz8vBQKgu5k9ShYQmEEA3qQYRPKVASFrzlKhr8eQcWctcp9hLn7HL7eSgmNV7CGHaXQFlekbYEFc9kaFHDahYYby3pgftn05kca3NR8Lklp2HYAQQ05vRBkw2BRYYzYDpyyDinDhVdtVBlvQ8%2FVSMskYb7LhZGMJArODyg3eaPS%2B%2FTr6aF&X-Amz-Signature=392ff0af53ec1d8c58b2a46b6872084f3b60d5d1cd00bac84985b8fa8585263e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQXHNBY%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T010035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrjlcU4MuDbV2A4dEGPWRZXgcoj6lV0bL2%2FiGq7dzT8AiEA0LC8KtUveq0rp0kI34owZWkfutU3qlo4ayz6fOH96Hgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGKKXhjKjoX7zc6y8yrcA1%2FVo64mJAUfs4sgN8LEKqE0hbHbPXmtNaJjVRWVCNOdoZ%2FlM1fOjPa1G0wXwS9mt8H%2FDJ7fk%2FMvKgHu5WJjWqXzM0bUFr1pPFd0GUDb6JI1cBCbQGr%2FZG21iIOuu1esJhWlrKmZLNXrZJcPjXeQezlOJcemfLtRKJ7sitK98hLHzzALPYxCtM8Yn83c7s4xMjMngtNdrhZddzwNXvPqJ2VLX70OHJriI%2BiiAV5lVzULXR7ph8muWQqA360wBrcBo7oQk2lyoaORq1qJ5mZOaZgbRhD%2BEchMA%2BsZPJjTQGAWsyDsL7SPV8nq8NrlG6oXvxEHEZkMgdr7GmtdjROQBSiNeK6DDGswQn8rGGSlkR2AHXCeZVL6Y0a8vZG9GUEd%2F96Him0ZHeCgFzYpjnT0VeME8amKqMfWOdzbWXHIrXU63FLajRq7shWyvbzCshsPFTELA8XEJXam2ik9xxjKFii5UHYgDNgIXJh1kfSQ4UPutKvCwhHB6fprd8N%2B7IsZYX0NxyU9FR%2BA3dJPrBCOxn894UJ5OlUvath4TAAZ5E1%2BKpJblcc%2BFyry%2B41e67diK3Al%2FDMLhC5obUhhg%2B6o6fOExmIlHqGbotZRJDsy78nvsBDoRAPiAD3i3z%2BvMJja5ccGOqUBUcqg6h6hVDDpBUUEsUcmu0F8SbL9iL79H0DDMX63vDvf3wCFJAPbPHCIJnWEtFMascwRtsRFMrGlilBgbiosEK27Jd1nfid3KdDuxZCCReITnxdes31Q6a6m4iAwGSjKx%2FmaftyEDqeyykN6B%2B4kDhqmU%2FJLsoKxeMAdEpxkSkkzBff66hxnjgtNZkk37b9B2zWcc9wwGF8TkKHiUVOPNYB414%2Bn&X-Amz-Signature=c45c2413db2f1e8cd84f6be73c25942a661f7c33bfc75a56aa8eb501628c0a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

