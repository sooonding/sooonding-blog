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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QZMCQA%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDogeZau3IaNKwfJJ2gZv9u4BzLInHEG81p4Cru2uCWIwIgIqHPxSEQ6CU2haxn7N4p9BwE7HsWtg0ZrbGfH5WRr9Qq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCnob8UeVEgsEpxtcircA7SQiOn%2F7LkFEI5UgahBkI5Z%2FmhbU%2Fodm9u%2FNXJ6mCgD4HYSDxo%2FLYUYHFRtjH%2F0cxPv1BgWLvNbIEsjxFGWemSCmTbvoEyJ2BC0BtV3TccWmjNl9z5tJQrxcIs7s8TtBT7IlIdnbO38M6VpwSUKg1T8GCp2F4yhy90L9fN7n%2FiPm4FT%2F1iOebu2XpyiGTqn2wwcm6FyvMkuh93cDBmtrnbzP4uJZuQEEqMVAqodplB2UomQ9aY8GgYQqJzwt%2FgSOzxPjBQRT8TTR4%2BS5FxuZp07QGEhXbBD%2Fynm1%2B997tlalk7DjZPm4O2j9xK%2FZgf086i3m0D1JVicF8bwwIID6Tv2BnFABpOQnEsPu1nTfrJOND2o0XWXwz0as14IlA5IPfoce4%2FiJriLTU0mm5JitnT2SQtKXTs0dSMwqqMCVoOjFJjRG4MuOUBGvVin1NYATW%2Fn49ideYSMeDUyd0qXSQnnIc53whf25Ltrkx4fGRHJ%2Byd9HQx068n4ZVeDIrt8xrAx%2BJr2VgDkJG6rNX2RgYpYng8ZYDHLPTUPyr56AOojh2TLZNT4CbtUHvqJy1UJUcAUvEaBjVAqUn1TXV42RLOU3tvbEx0uujGBoUUqdDd9aV4sU3V2mcOIFD0fMMuArdUGOqUBQS%2BbuaCgxAf3Ptec6W%2Fikh8BVNBo%2FbcVIAtJ4DlrFMK%2FbvA%2BV7QofjquOiS2lhMK3R%2F4yY1HkMoG9ABv%2FXRcAhE%2BEAhyxsAQwC2Cn7n24uAhvqjEP2rreVor1ZZ0bubYpx5ZlooRYECbD2zKyPPs6SZwGD82j0cFlhi9CXCQWPlY7A6gPXuj1P4UQpa%2FiysHActeo%2Ft5wqRFAZY3paY1K2OpAmWV&X-Amz-Signature=2ad2b3bb81ba77f469dd2db35b3757870d2ab6b224facfd5121f3e9fbc0c07c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJFLXZB%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDRmdiQH6jiqdqceak0oparGcfOrHx%2Bj%2F%2Fb234cZiB89AiAqitMPUYxKLxS%2BH61PeE%2FhJknH%2F1XMovwlmGEsL68%2FUir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyOqBLix978qWru67KtwDTjbmgN68NiQIWgPZBwsmfMKPePe2uWTEdU0ovEdtt8exh5ivq7QKIJsOu53YejbtWDlKSzHE2Q5FzNDH1D0deB%2FAR6%2F5NHSOPYuu6MipM1CEeVWqaR%2Bqsgkuk6jL4dzD6pCoEqtlGcSB1%2B5SYWQDz%2Fi7zmRNy8pSJFEDd9LN%2BsZMytmsZRkFsFVe15RUoCB%2FbFO%2FecYPu%2FbkqI2rcsR42TU5lsAx6ifjRVYrebPd6EK2oSk%2BN05XZ2tEjtyxgObFjt6WOKYx7vqC8B5CBy4Xv8l3P5OfWhQgEB7nn5TmHIbOSzlCvdmc3GPP%2FQoxPUIrBrBeKaecOZWG4z7TM017%2FZV36umMzZrYAe3czUwlBRS2HRxGGSdcdQv2G4QkVWyM4wulNvbtCcX6mFM42CYbQ6bJ2zSJ8gm3aXMej3uPHdYqKUVe51ZuoeMmY8DjePGRhVkwRQMUZNpDf%2B2PFEgtOMz88uJgT2dtn3dcGbDjWXUe%2BpPfVFrqqK9KSuWaYFXZjqP2JD88KCS%2F%2F5iHYhSYPgkGzeT5KBmhAT%2B3wt9iQNwGlE8F%2FABQsgJfgPQlMGRO80nmZye3tUSUPMWrMg60MYwBLpTLSbSCEG5RSB5EG3t9MvaDl3DZDKGGwQAwloCt1QY6pgFcfSkT4xdNry6kEL8AFlsgmPYWvaeiduEe6A6Rr3kL7c809oqf99L64COQKjFpgobqPc9cbSlqTs7wWUZnqyqME0p50JFoYhB7rIY5arhCUEvvpgza5Zs%2B1j66yCgxwuJKCkVra7dAKMRygdotfCO%2BZp%2FJuaT6s7rhoSVLB%2BcE%2FH9NCNn9Ko9a3GS6HZswLHVH3ARwTH%2FY1L18IlHwFsOXjtoDw6YN&X-Amz-Signature=3dbc94800ff9131f19729141e50125b668a13ae4c37e71ffd8daceb24c0236ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJFLXZB%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDRmdiQH6jiqdqceak0oparGcfOrHx%2Bj%2F%2Fb234cZiB89AiAqitMPUYxKLxS%2BH61PeE%2FhJknH%2F1XMovwlmGEsL68%2FUir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyOqBLix978qWru67KtwDTjbmgN68NiQIWgPZBwsmfMKPePe2uWTEdU0ovEdtt8exh5ivq7QKIJsOu53YejbtWDlKSzHE2Q5FzNDH1D0deB%2FAR6%2F5NHSOPYuu6MipM1CEeVWqaR%2Bqsgkuk6jL4dzD6pCoEqtlGcSB1%2B5SYWQDz%2Fi7zmRNy8pSJFEDd9LN%2BsZMytmsZRkFsFVe15RUoCB%2FbFO%2FecYPu%2FbkqI2rcsR42TU5lsAx6ifjRVYrebPd6EK2oSk%2BN05XZ2tEjtyxgObFjt6WOKYx7vqC8B5CBy4Xv8l3P5OfWhQgEB7nn5TmHIbOSzlCvdmc3GPP%2FQoxPUIrBrBeKaecOZWG4z7TM017%2FZV36umMzZrYAe3czUwlBRS2HRxGGSdcdQv2G4QkVWyM4wulNvbtCcX6mFM42CYbQ6bJ2zSJ8gm3aXMej3uPHdYqKUVe51ZuoeMmY8DjePGRhVkwRQMUZNpDf%2B2PFEgtOMz88uJgT2dtn3dcGbDjWXUe%2BpPfVFrqqK9KSuWaYFXZjqP2JD88KCS%2F%2F5iHYhSYPgkGzeT5KBmhAT%2B3wt9iQNwGlE8F%2FABQsgJfgPQlMGRO80nmZye3tUSUPMWrMg60MYwBLpTLSbSCEG5RSB5EG3t9MvaDl3DZDKGGwQAwloCt1QY6pgFcfSkT4xdNry6kEL8AFlsgmPYWvaeiduEe6A6Rr3kL7c809oqf99L64COQKjFpgobqPc9cbSlqTs7wWUZnqyqME0p50JFoYhB7rIY5arhCUEvvpgza5Zs%2B1j66yCgxwuJKCkVra7dAKMRygdotfCO%2BZp%2FJuaT6s7rhoSVLB%2BcE%2FH9NCNn9Ko9a3GS6HZswLHVH3ARwTH%2FY1L18IlHwFsOXjtoDw6YN&X-Amz-Signature=6477895c6c486fa2a759caa33067dc215906a202b8517be00194c84d83b16441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJFLXZB%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDRmdiQH6jiqdqceak0oparGcfOrHx%2Bj%2F%2Fb234cZiB89AiAqitMPUYxKLxS%2BH61PeE%2FhJknH%2F1XMovwlmGEsL68%2FUir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyOqBLix978qWru67KtwDTjbmgN68NiQIWgPZBwsmfMKPePe2uWTEdU0ovEdtt8exh5ivq7QKIJsOu53YejbtWDlKSzHE2Q5FzNDH1D0deB%2FAR6%2F5NHSOPYuu6MipM1CEeVWqaR%2Bqsgkuk6jL4dzD6pCoEqtlGcSB1%2B5SYWQDz%2Fi7zmRNy8pSJFEDd9LN%2BsZMytmsZRkFsFVe15RUoCB%2FbFO%2FecYPu%2FbkqI2rcsR42TU5lsAx6ifjRVYrebPd6EK2oSk%2BN05XZ2tEjtyxgObFjt6WOKYx7vqC8B5CBy4Xv8l3P5OfWhQgEB7nn5TmHIbOSzlCvdmc3GPP%2FQoxPUIrBrBeKaecOZWG4z7TM017%2FZV36umMzZrYAe3czUwlBRS2HRxGGSdcdQv2G4QkVWyM4wulNvbtCcX6mFM42CYbQ6bJ2zSJ8gm3aXMej3uPHdYqKUVe51ZuoeMmY8DjePGRhVkwRQMUZNpDf%2B2PFEgtOMz88uJgT2dtn3dcGbDjWXUe%2BpPfVFrqqK9KSuWaYFXZjqP2JD88KCS%2F%2F5iHYhSYPgkGzeT5KBmhAT%2B3wt9iQNwGlE8F%2FABQsgJfgPQlMGRO80nmZye3tUSUPMWrMg60MYwBLpTLSbSCEG5RSB5EG3t9MvaDl3DZDKGGwQAwloCt1QY6pgFcfSkT4xdNry6kEL8AFlsgmPYWvaeiduEe6A6Rr3kL7c809oqf99L64COQKjFpgobqPc9cbSlqTs7wWUZnqyqME0p50JFoYhB7rIY5arhCUEvvpgza5Zs%2B1j66yCgxwuJKCkVra7dAKMRygdotfCO%2BZp%2FJuaT6s7rhoSVLB%2BcE%2FH9NCNn9Ko9a3GS6HZswLHVH3ARwTH%2FY1L18IlHwFsOXjtoDw6YN&X-Amz-Signature=e7fd007b9b7b22754d19e4cbd9bcdb5cb81efa6816dfa9172736686fe692b252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJFLXZB%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDRmdiQH6jiqdqceak0oparGcfOrHx%2Bj%2F%2Fb234cZiB89AiAqitMPUYxKLxS%2BH61PeE%2FhJknH%2F1XMovwlmGEsL68%2FUir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyOqBLix978qWru67KtwDTjbmgN68NiQIWgPZBwsmfMKPePe2uWTEdU0ovEdtt8exh5ivq7QKIJsOu53YejbtWDlKSzHE2Q5FzNDH1D0deB%2FAR6%2F5NHSOPYuu6MipM1CEeVWqaR%2Bqsgkuk6jL4dzD6pCoEqtlGcSB1%2B5SYWQDz%2Fi7zmRNy8pSJFEDd9LN%2BsZMytmsZRkFsFVe15RUoCB%2FbFO%2FecYPu%2FbkqI2rcsR42TU5lsAx6ifjRVYrebPd6EK2oSk%2BN05XZ2tEjtyxgObFjt6WOKYx7vqC8B5CBy4Xv8l3P5OfWhQgEB7nn5TmHIbOSzlCvdmc3GPP%2FQoxPUIrBrBeKaecOZWG4z7TM017%2FZV36umMzZrYAe3czUwlBRS2HRxGGSdcdQv2G4QkVWyM4wulNvbtCcX6mFM42CYbQ6bJ2zSJ8gm3aXMej3uPHdYqKUVe51ZuoeMmY8DjePGRhVkwRQMUZNpDf%2B2PFEgtOMz88uJgT2dtn3dcGbDjWXUe%2BpPfVFrqqK9KSuWaYFXZjqP2JD88KCS%2F%2F5iHYhSYPgkGzeT5KBmhAT%2B3wt9iQNwGlE8F%2FABQsgJfgPQlMGRO80nmZye3tUSUPMWrMg60MYwBLpTLSbSCEG5RSB5EG3t9MvaDl3DZDKGGwQAwloCt1QY6pgFcfSkT4xdNry6kEL8AFlsgmPYWvaeiduEe6A6Rr3kL7c809oqf99L64COQKjFpgobqPc9cbSlqTs7wWUZnqyqME0p50JFoYhB7rIY5arhCUEvvpgza5Zs%2B1j66yCgxwuJKCkVra7dAKMRygdotfCO%2BZp%2FJuaT6s7rhoSVLB%2BcE%2FH9NCNn9Ko9a3GS6HZswLHVH3ARwTH%2FY1L18IlHwFsOXjtoDw6YN&X-Amz-Signature=87e0f6a2703136dd3e18abbfb62e29c61400711cd2cccdba62fb92179af204c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJFLXZB%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIDRmdiQH6jiqdqceak0oparGcfOrHx%2Bj%2F%2Fb234cZiB89AiAqitMPUYxKLxS%2BH61PeE%2FhJknH%2F1XMovwlmGEsL68%2FUir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyOqBLix978qWru67KtwDTjbmgN68NiQIWgPZBwsmfMKPePe2uWTEdU0ovEdtt8exh5ivq7QKIJsOu53YejbtWDlKSzHE2Q5FzNDH1D0deB%2FAR6%2F5NHSOPYuu6MipM1CEeVWqaR%2Bqsgkuk6jL4dzD6pCoEqtlGcSB1%2B5SYWQDz%2Fi7zmRNy8pSJFEDd9LN%2BsZMytmsZRkFsFVe15RUoCB%2FbFO%2FecYPu%2FbkqI2rcsR42TU5lsAx6ifjRVYrebPd6EK2oSk%2BN05XZ2tEjtyxgObFjt6WOKYx7vqC8B5CBy4Xv8l3P5OfWhQgEB7nn5TmHIbOSzlCvdmc3GPP%2FQoxPUIrBrBeKaecOZWG4z7TM017%2FZV36umMzZrYAe3czUwlBRS2HRxGGSdcdQv2G4QkVWyM4wulNvbtCcX6mFM42CYbQ6bJ2zSJ8gm3aXMej3uPHdYqKUVe51ZuoeMmY8DjePGRhVkwRQMUZNpDf%2B2PFEgtOMz88uJgT2dtn3dcGbDjWXUe%2BpPfVFrqqK9KSuWaYFXZjqP2JD88KCS%2F%2F5iHYhSYPgkGzeT5KBmhAT%2B3wt9iQNwGlE8F%2FABQsgJfgPQlMGRO80nmZye3tUSUPMWrMg60MYwBLpTLSbSCEG5RSB5EG3t9MvaDl3DZDKGGwQAwloCt1QY6pgFcfSkT4xdNry6kEL8AFlsgmPYWvaeiduEe6A6Rr3kL7c809oqf99L64COQKjFpgobqPc9cbSlqTs7wWUZnqyqME0p50JFoYhB7rIY5arhCUEvvpgza5Zs%2B1j66yCgxwuJKCkVra7dAKMRygdotfCO%2BZp%2FJuaT6s7rhoSVLB%2BcE%2FH9NCNn9Ko9a3GS6HZswLHVH3ARwTH%2FY1L18IlHwFsOXjtoDw6YN&X-Amz-Signature=1fe224f22b472020ec147b71458a5a4d3a831d84948229351ab3154e3b14fbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7QZMCQA%2F20260917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260917T034155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDogeZau3IaNKwfJJ2gZv9u4BzLInHEG81p4Cru2uCWIwIgIqHPxSEQ6CU2haxn7N4p9BwE7HsWtg0ZrbGfH5WRr9Qq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCnob8UeVEgsEpxtcircA7SQiOn%2F7LkFEI5UgahBkI5Z%2FmhbU%2Fodm9u%2FNXJ6mCgD4HYSDxo%2FLYUYHFRtjH%2F0cxPv1BgWLvNbIEsjxFGWemSCmTbvoEyJ2BC0BtV3TccWmjNl9z5tJQrxcIs7s8TtBT7IlIdnbO38M6VpwSUKg1T8GCp2F4yhy90L9fN7n%2FiPm4FT%2F1iOebu2XpyiGTqn2wwcm6FyvMkuh93cDBmtrnbzP4uJZuQEEqMVAqodplB2UomQ9aY8GgYQqJzwt%2FgSOzxPjBQRT8TTR4%2BS5FxuZp07QGEhXbBD%2Fynm1%2B997tlalk7DjZPm4O2j9xK%2FZgf086i3m0D1JVicF8bwwIID6Tv2BnFABpOQnEsPu1nTfrJOND2o0XWXwz0as14IlA5IPfoce4%2FiJriLTU0mm5JitnT2SQtKXTs0dSMwqqMCVoOjFJjRG4MuOUBGvVin1NYATW%2Fn49ideYSMeDUyd0qXSQnnIc53whf25Ltrkx4fGRHJ%2Byd9HQx068n4ZVeDIrt8xrAx%2BJr2VgDkJG6rNX2RgYpYng8ZYDHLPTUPyr56AOojh2TLZNT4CbtUHvqJy1UJUcAUvEaBjVAqUn1TXV42RLOU3tvbEx0uujGBoUUqdDd9aV4sU3V2mcOIFD0fMMuArdUGOqUBQS%2BbuaCgxAf3Ptec6W%2Fikh8BVNBo%2FbcVIAtJ4DlrFMK%2FbvA%2BV7QofjquOiS2lhMK3R%2F4yY1HkMoG9ABv%2FXRcAhE%2BEAhyxsAQwC2Cn7n24uAhvqjEP2rreVor1ZZ0bubYpx5ZlooRYECbD2zKyPPs6SZwGD82j0cFlhi9CXCQWPlY7A6gPXuj1P4UQpa%2FiysHActeo%2Ft5wqRFAZY3paY1K2OpAmWV&X-Amz-Signature=62f9e01c4164e2dfd0e449a9a890b91b796cd8982b064012005a9fc29fcac1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

