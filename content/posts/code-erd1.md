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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q27WPGM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T010049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Kjdg5xsF1Ompx%2FayptEVIr4IL11HyqXYpPloQEE6dAIgWL9gstWnzpARiKYLZaHEgLR6ZCsBOBJizChDckgUYGMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaLMmlEYLpC8jeZnCrcA7cxQ6FXHSc9K8I6SjOAUSYdDeSrQLoYYtMBZ5Wkk08H4kZ8uQwFaV4uJhTIOLIVBuhAis5zZrlJSnYD9680qX%2FBsqF9IbvenoI3QzyN8wnDBWdspTabWRR8oQYFH0vQvmyNZvH%2FuCU6ndGNaCosiDArsl8AweSqEbx%2FH4m%2Bz9sP5NAdo2iKQiyLa%2BiJhjv1V4jaGRX%2B9xaA%2FCnBFfzX9%2FZfcqHMb1gJOU3W7ZwZhy4q0Pq2hQx5YH%2B2I3kTc7WpbcEvqcPgC3x7qlmwZ3PoYCnM1BLyTcKHf%2BvSGnrZTezOXwB20P6ItfPLSpSM8AwTlZEIQM3a6QlwTjMnVeeVlaExqUrnTWcLjkRNwnzla57tAjtPRuOfxVc%2Fyr9X89FkwSdshLrXLdbmoQ5v9zTV3njctv2u6aRGRidmlyElAPcD2Lo5FeFkL%2Fd5icy5rELU0wRq8hupE%2BqRBHpGFJjilp9aGJ9F%2BCEe5tClRL5bnPDFhFcLPN8cGoCgVt8c8fGYO8fVRLR%2BQXs4AatjwzYo2Fp2%2BM1KMegH8V9GWorzjBgvki7Di%2FNP2XIIPZkijmUEo%2Bk3A9QczRlxMACPa20OvornVxGlu5WDJKlqPVH0I%2BQfsrUnExXBoV8NhehoMLvCoskGOqUBmA3wQPa2mpy5Nq6B5rN%2FSkurQDwwnCL7Dydg8PhcCXBX9a6Wow%2FYVrvsVu6NxWkRYKLXKbAD5IXKOJHrUVstAxmB1FeCcRkymtko1Vy4zJwPwyDotWwIskceIUsnhDnmIItleEgn%2BromqsYOs6TgU8ylLJqfEXtoMY8MiXqZ3SazPCczPshOxVISGnb%2F0Kj0eZOZSDfb4sEnHeJKXncXkmbiCLni&X-Amz-Signature=b25d7bebcbc4adaecde6dd6c3e98320b7d98e91fcee0a0c7e5a828bb180db542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUBKI35%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T010051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzKttwl%2BH7yepFeeC9ijbxX6bglMzpyEMxE7Kz23JnkCIDvTHdKUbXZYJhztpo8P4ohLU7mz9FWwrmohOD2uT2XgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUt4Kl8IEaq%2Fuxxa8q3APNavmKZZENjRrQRMpg%2B9kTjOhRUDrpA8fVVVv%2Flud9XsZvccKRkqYMJSgonJbvsHPmLgNPccoEcQT5nyW4NENMTo8GU7OBx5BNdsIL%2BsVcsKKAqNWSFYsqVp4Ff1mOlGH4WwM9OvnBzbPCijqBH%2FG6YW6Y4O%2Fb2BXkt2thshT9YQGD2QZeKrUOTvX105I7weGNN8GlY%2F5V%2BFsBPfn9hwqb3wqLmbAL859r2KAKJWQfNXx46lXg7T6x5Xh9isFViEfdTaFfpyYK3dbo2RX8uCc4JPQLe2wUK6ZUKmm07aKbR1%2Botjy%2FvGTmGemiJ4sqt1h%2BSheD8QXghpMLuegO5z5u6j7BiVilgV3NN%2FmB2vMk1qUR1jdJ8iI7fzKLVaxAJNgn82OlIV9dwOQ7f0D8XPCRVRoC6HYLnMXO3ek3qVEgAwGPhDMlVcqROuJtVfAL8040btMQLq8ZusfLsVOxQEr7TVjLDy02Y8QYIHpbYkt30aTaO7bKgTM4odpR3GJm32qTAC%2BIQPKPyLFKcl2JyV17TuhO59nX6N64ZpxFJrNDxoYIFKFyctx3N%2BxU5v4378YyeZ%2BnjOYIeN8WiIk8QYwWSJVkv0u%2FKyyBzaUs0WDOrh5TKvTTlhOz7siwjjCMxKLJBjqnAZbYUY6t4bT%2Fi3PYBqoDo43z3axWZdt3nrFuAHiqPSSuiqRJAhQZKiimHuviKxobt6n%2FSu1Z%2B8yKCoqfn00Okt%2FRZBeSlo0ToiVvGFyzyt5NrahZ0LpoA19mvpQTeEPjjmrtSE5g0%2FNtFNhdOg7KTODThomimkIUZPctlvKtTgUTxJy1yOPk5JRZXeq5C%2Fv%2FO74RQfxvg%2BZ586tNkkaEEj5jmGglFTWn&X-Amz-Signature=49860643b907b4730962e03977f988ae5dcd8876077677efd5cb332b1bfdc45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUBKI35%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T010050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzKttwl%2BH7yepFeeC9ijbxX6bglMzpyEMxE7Kz23JnkCIDvTHdKUbXZYJhztpo8P4ohLU7mz9FWwrmohOD2uT2XgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUt4Kl8IEaq%2Fuxxa8q3APNavmKZZENjRrQRMpg%2B9kTjOhRUDrpA8fVVVv%2Flud9XsZvccKRkqYMJSgonJbvsHPmLgNPccoEcQT5nyW4NENMTo8GU7OBx5BNdsIL%2BsVcsKKAqNWSFYsqVp4Ff1mOlGH4WwM9OvnBzbPCijqBH%2FG6YW6Y4O%2Fb2BXkt2thshT9YQGD2QZeKrUOTvX105I7weGNN8GlY%2F5V%2BFsBPfn9hwqb3wqLmbAL859r2KAKJWQfNXx46lXg7T6x5Xh9isFViEfdTaFfpyYK3dbo2RX8uCc4JPQLe2wUK6ZUKmm07aKbR1%2Botjy%2FvGTmGemiJ4sqt1h%2BSheD8QXghpMLuegO5z5u6j7BiVilgV3NN%2FmB2vMk1qUR1jdJ8iI7fzKLVaxAJNgn82OlIV9dwOQ7f0D8XPCRVRoC6HYLnMXO3ek3qVEgAwGPhDMlVcqROuJtVfAL8040btMQLq8ZusfLsVOxQEr7TVjLDy02Y8QYIHpbYkt30aTaO7bKgTM4odpR3GJm32qTAC%2BIQPKPyLFKcl2JyV17TuhO59nX6N64ZpxFJrNDxoYIFKFyctx3N%2BxU5v4378YyeZ%2BnjOYIeN8WiIk8QYwWSJVkv0u%2FKyyBzaUs0WDOrh5TKvTTlhOz7siwjjCMxKLJBjqnAZbYUY6t4bT%2Fi3PYBqoDo43z3axWZdt3nrFuAHiqPSSuiqRJAhQZKiimHuviKxobt6n%2FSu1Z%2B8yKCoqfn00Okt%2FRZBeSlo0ToiVvGFyzyt5NrahZ0LpoA19mvpQTeEPjjmrtSE5g0%2FNtFNhdOg7KTODThomimkIUZPctlvKtTgUTxJy1yOPk5JRZXeq5C%2Fv%2FO74RQfxvg%2BZ586tNkkaEEj5jmGglFTWn&X-Amz-Signature=16443f06738e45905a1ece7b8095addece545cca0ad84b483fcf6ce27ca58aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUBKI35%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T010051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzKttwl%2BH7yepFeeC9ijbxX6bglMzpyEMxE7Kz23JnkCIDvTHdKUbXZYJhztpo8P4ohLU7mz9FWwrmohOD2uT2XgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUt4Kl8IEaq%2Fuxxa8q3APNavmKZZENjRrQRMpg%2B9kTjOhRUDrpA8fVVVv%2Flud9XsZvccKRkqYMJSgonJbvsHPmLgNPccoEcQT5nyW4NENMTo8GU7OBx5BNdsIL%2BsVcsKKAqNWSFYsqVp4Ff1mOlGH4WwM9OvnBzbPCijqBH%2FG6YW6Y4O%2Fb2BXkt2thshT9YQGD2QZeKrUOTvX105I7weGNN8GlY%2F5V%2BFsBPfn9hwqb3wqLmbAL859r2KAKJWQfNXx46lXg7T6x5Xh9isFViEfdTaFfpyYK3dbo2RX8uCc4JPQLe2wUK6ZUKmm07aKbR1%2Botjy%2FvGTmGemiJ4sqt1h%2BSheD8QXghpMLuegO5z5u6j7BiVilgV3NN%2FmB2vMk1qUR1jdJ8iI7fzKLVaxAJNgn82OlIV9dwOQ7f0D8XPCRVRoC6HYLnMXO3ek3qVEgAwGPhDMlVcqROuJtVfAL8040btMQLq8ZusfLsVOxQEr7TVjLDy02Y8QYIHpbYkt30aTaO7bKgTM4odpR3GJm32qTAC%2BIQPKPyLFKcl2JyV17TuhO59nX6N64ZpxFJrNDxoYIFKFyctx3N%2BxU5v4378YyeZ%2BnjOYIeN8WiIk8QYwWSJVkv0u%2FKyyBzaUs0WDOrh5TKvTTlhOz7siwjjCMxKLJBjqnAZbYUY6t4bT%2Fi3PYBqoDo43z3axWZdt3nrFuAHiqPSSuiqRJAhQZKiimHuviKxobt6n%2FSu1Z%2B8yKCoqfn00Okt%2FRZBeSlo0ToiVvGFyzyt5NrahZ0LpoA19mvpQTeEPjjmrtSE5g0%2FNtFNhdOg7KTODThomimkIUZPctlvKtTgUTxJy1yOPk5JRZXeq5C%2Fv%2FO74RQfxvg%2BZ586tNkkaEEj5jmGglFTWn&X-Amz-Signature=0c58c3e7daa87a199cb38d3da1db8965529b904ffa78cc0edc1ef609a194bc0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUBKI35%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T010051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzKttwl%2BH7yepFeeC9ijbxX6bglMzpyEMxE7Kz23JnkCIDvTHdKUbXZYJhztpo8P4ohLU7mz9FWwrmohOD2uT2XgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUt4Kl8IEaq%2Fuxxa8q3APNavmKZZENjRrQRMpg%2B9kTjOhRUDrpA8fVVVv%2Flud9XsZvccKRkqYMJSgonJbvsHPmLgNPccoEcQT5nyW4NENMTo8GU7OBx5BNdsIL%2BsVcsKKAqNWSFYsqVp4Ff1mOlGH4WwM9OvnBzbPCijqBH%2FG6YW6Y4O%2Fb2BXkt2thshT9YQGD2QZeKrUOTvX105I7weGNN8GlY%2F5V%2BFsBPfn9hwqb3wqLmbAL859r2KAKJWQfNXx46lXg7T6x5Xh9isFViEfdTaFfpyYK3dbo2RX8uCc4JPQLe2wUK6ZUKmm07aKbR1%2Botjy%2FvGTmGemiJ4sqt1h%2BSheD8QXghpMLuegO5z5u6j7BiVilgV3NN%2FmB2vMk1qUR1jdJ8iI7fzKLVaxAJNgn82OlIV9dwOQ7f0D8XPCRVRoC6HYLnMXO3ek3qVEgAwGPhDMlVcqROuJtVfAL8040btMQLq8ZusfLsVOxQEr7TVjLDy02Y8QYIHpbYkt30aTaO7bKgTM4odpR3GJm32qTAC%2BIQPKPyLFKcl2JyV17TuhO59nX6N64ZpxFJrNDxoYIFKFyctx3N%2BxU5v4378YyeZ%2BnjOYIeN8WiIk8QYwWSJVkv0u%2FKyyBzaUs0WDOrh5TKvTTlhOz7siwjjCMxKLJBjqnAZbYUY6t4bT%2Fi3PYBqoDo43z3axWZdt3nrFuAHiqPSSuiqRJAhQZKiimHuviKxobt6n%2FSu1Z%2B8yKCoqfn00Okt%2FRZBeSlo0ToiVvGFyzyt5NrahZ0LpoA19mvpQTeEPjjmrtSE5g0%2FNtFNhdOg7KTODThomimkIUZPctlvKtTgUTxJy1yOPk5JRZXeq5C%2Fv%2FO74RQfxvg%2BZ586tNkkaEEj5jmGglFTWn&X-Amz-Signature=b24b6ee23c9d8ad357944d400df0d982db4f89267e14410dc837bb94eb48053b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUBKI35%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T010051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzKttwl%2BH7yepFeeC9ijbxX6bglMzpyEMxE7Kz23JnkCIDvTHdKUbXZYJhztpo8P4ohLU7mz9FWwrmohOD2uT2XgKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUt4Kl8IEaq%2Fuxxa8q3APNavmKZZENjRrQRMpg%2B9kTjOhRUDrpA8fVVVv%2Flud9XsZvccKRkqYMJSgonJbvsHPmLgNPccoEcQT5nyW4NENMTo8GU7OBx5BNdsIL%2BsVcsKKAqNWSFYsqVp4Ff1mOlGH4WwM9OvnBzbPCijqBH%2FG6YW6Y4O%2Fb2BXkt2thshT9YQGD2QZeKrUOTvX105I7weGNN8GlY%2F5V%2BFsBPfn9hwqb3wqLmbAL859r2KAKJWQfNXx46lXg7T6x5Xh9isFViEfdTaFfpyYK3dbo2RX8uCc4JPQLe2wUK6ZUKmm07aKbR1%2Botjy%2FvGTmGemiJ4sqt1h%2BSheD8QXghpMLuegO5z5u6j7BiVilgV3NN%2FmB2vMk1qUR1jdJ8iI7fzKLVaxAJNgn82OlIV9dwOQ7f0D8XPCRVRoC6HYLnMXO3ek3qVEgAwGPhDMlVcqROuJtVfAL8040btMQLq8ZusfLsVOxQEr7TVjLDy02Y8QYIHpbYkt30aTaO7bKgTM4odpR3GJm32qTAC%2BIQPKPyLFKcl2JyV17TuhO59nX6N64ZpxFJrNDxoYIFKFyctx3N%2BxU5v4378YyeZ%2BnjOYIeN8WiIk8QYwWSJVkv0u%2FKyyBzaUs0WDOrh5TKvTTlhOz7siwjjCMxKLJBjqnAZbYUY6t4bT%2Fi3PYBqoDo43z3axWZdt3nrFuAHiqPSSuiqRJAhQZKiimHuviKxobt6n%2FSu1Z%2B8yKCoqfn00Okt%2FRZBeSlo0ToiVvGFyzyt5NrahZ0LpoA19mvpQTeEPjjmrtSE5g0%2FNtFNhdOg7KTODThomimkIUZPctlvKtTgUTxJy1yOPk5JRZXeq5C%2Fv%2FO74RQfxvg%2BZ586tNkkaEEj5jmGglFTWn&X-Amz-Signature=d0c1d71c47285ea7620dc00e9638949ba8e7b906557781e36d63c1a69b2ee63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q27WPGM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T010049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Kjdg5xsF1Ompx%2FayptEVIr4IL11HyqXYpPloQEE6dAIgWL9gstWnzpARiKYLZaHEgLR6ZCsBOBJizChDckgUYGMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaLMmlEYLpC8jeZnCrcA7cxQ6FXHSc9K8I6SjOAUSYdDeSrQLoYYtMBZ5Wkk08H4kZ8uQwFaV4uJhTIOLIVBuhAis5zZrlJSnYD9680qX%2FBsqF9IbvenoI3QzyN8wnDBWdspTabWRR8oQYFH0vQvmyNZvH%2FuCU6ndGNaCosiDArsl8AweSqEbx%2FH4m%2Bz9sP5NAdo2iKQiyLa%2BiJhjv1V4jaGRX%2B9xaA%2FCnBFfzX9%2FZfcqHMb1gJOU3W7ZwZhy4q0Pq2hQx5YH%2B2I3kTc7WpbcEvqcPgC3x7qlmwZ3PoYCnM1BLyTcKHf%2BvSGnrZTezOXwB20P6ItfPLSpSM8AwTlZEIQM3a6QlwTjMnVeeVlaExqUrnTWcLjkRNwnzla57tAjtPRuOfxVc%2Fyr9X89FkwSdshLrXLdbmoQ5v9zTV3njctv2u6aRGRidmlyElAPcD2Lo5FeFkL%2Fd5icy5rELU0wRq8hupE%2BqRBHpGFJjilp9aGJ9F%2BCEe5tClRL5bnPDFhFcLPN8cGoCgVt8c8fGYO8fVRLR%2BQXs4AatjwzYo2Fp2%2BM1KMegH8V9GWorzjBgvki7Di%2FNP2XIIPZkijmUEo%2Bk3A9QczRlxMACPa20OvornVxGlu5WDJKlqPVH0I%2BQfsrUnExXBoV8NhehoMLvCoskGOqUBmA3wQPa2mpy5Nq6B5rN%2FSkurQDwwnCL7Dydg8PhcCXBX9a6Wow%2FYVrvsVu6NxWkRYKLXKbAD5IXKOJHrUVstAxmB1FeCcRkymtko1Vy4zJwPwyDotWwIskceIUsnhDnmIItleEgn%2BromqsYOs6TgU8ylLJqfEXtoMY8MiXqZ3SazPCczPshOxVISGnb%2F0Kj0eZOZSDfb4sEnHeJKXncXkmbiCLni&X-Amz-Signature=c0eba867c0aa3df190a2488040ddc33319740a5253021f71206f7a362030d158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

