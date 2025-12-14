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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKSBAZJ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T011101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0Bal7S6iUt5CqpTjCw4sSLiIiFEsm7ioGTWJLXyicMwIhAPAJHQ6As%2BDJACgEeh6Tz%2BGqtzgidAHjr49BNNOFLVC2Kv8DCCoQABoMNjM3NDIzMTgzODA1Igybwq8Aup5JgHnG7pMq3AM371gJKzv0lO1du5Nqp902Fd5Q4hXoEuv41cXN7A9rq%2Baj7%2B1YydoWSCipqQu9k9YSpIzKBCaDDSZ2DGDTzegB4v%2Ba2QtVwXRscq0dIk4dLPS%2BejzFXAgcXaJrlIa1%2BjuUd8ejVLjv54%2BVG2H2nt6L%2F5%2FZ%2FuPsasDr2i13%2FeVgtCK0Z2SI0qqpA6yGcbTCjQmpgDiKVd8qWUxNUMVOI8nEcyFcxrCAAJKX1HlYfiwaOZ%2BzUhXUflciQvAJA%2FohqgOKdyMndFK8I4FuJwgDLiaXZnbFEsWUOpCkNpfsuFvAwbbwG82v9ZC99ZODkcAets1RpjAfSogVZE0wOtXffkfaNjFA%2BbzGHxqh43P5D99jRsNUGZg4t53gJGhO0eYxcYXQLwVqbsePUj5VQacLbFskUudNsL7Znzk2Ms8JZjh%2FrYCJPFRpUz1p7uuTg3Bgrn4yeaOTwiRTnn%2BNTbBygvqn5SpcGqmKm5R5tgKeTQNfcHwa4SQYXWfIsQ9gJrRhIddFSKOixz31Un%2FY1kDAK3Fo3MuBqnShfIe%2Fegjeou7%2BzdkJluBpBbTx5bPaB2VHzsk0R3Fcx5hZCdZXq892Em4RgcOrI%2FJteIZuu2Xa%2FAN2EfZaWzt%2FE9xiaxtxWjC4h%2FjJBjqkAY6O2cgbTokWGgNUvzO6Ge98D2M%2FnMBeb309TEEGy04beNjGSxJ8M0pwZToD%2BJlL0sVO1fi%2Fo%2BhafWG4bscHj8OaoAolM0TWA2wuMRCysQCMHgQPme7azd2IFXMe%2BhNOBTMc07B93Cv6W4PWlDsC%2B1XWH9jStpz0ztc3MFGeG6ZZRcn1Gk68aS79vlKLUcKDJcpcPbsggUIdwJsMFeohchyiC6O5&X-Amz-Signature=b487f15825df3330b2c76c885385088bbd524fc5f6749de5f705b1f903c457dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2G46P5%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T011102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCcIpXq5H8RZVUT9VK4xlAtiaa5fU%2BI0OjBylMkWp79CgIgAm6RSe4dKNG7JsGO49viZ61muKEmkQ5X4ORkeeu9h9Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEtmvkBVQVHdAmnWuyrcA%2BdaBErOGVUVjvomnJGD%2BFksvI4nhzh%2B2dsdO9ntCKen074y3IxKopvN66wCP0GuH0b%2BmSpKBtzlYS2a2%2BQU2UO4WozlCO%2FYzZrlTyzBOZZbkFp21aF0BJjADYPexObcv0%2FP2DFZzEfjSt5CXM%2F8Ca7m5u9dowEyhpeMWPm%2Ft5AjVC7VUBQFZsntKI0HN27oD8UaNxiZ6g9lS6FWEwRvmFj8ZVyS5uWxGmi0o7e5shfESRynOvYGsfk0rB7rBB9biW6uIxyl2qmm2a7oYNuqcvQ7WfGm14e5KrhD2B0it4acdYFvLnqsqiFs4wcFjOWc9agTYtdq5KM4%2FKiHZ86dM%2Bb3SUT9%2FJtLkm61jfUKKaZcD0GtqGdgHCWvKLI1LzMoHwzJ4lvGJEpGMSoUezywmYHPPMxqgVraONTSdHQl0g1ysTZ2G%2BWbfk3dKaRAdMm95BUyxGzg8s9Loq2UYemuJ1u%2F6M73A4%2B%2FfDuApY1EXo8Li%2FifuF7V%2F88UdXyS4PWUVYeVfyysmZ8V1jPqT8RXH8cqZaieKFa2GdellQvQqgsvrIARjPDn6GIx6myV%2BuywnbXkTAbRWy9Vo1NMJRFDLa2yPDWCSGlsl9VUrEH3ZAJdUTX7VwG6DTs801brMLCH%2BMkGOqUBHOB3wAIQkmfx0JCiJ3ZU21uw0%2FI1yx5sbu9CWUXlw0oLc0nrOjKGDJozybDWgGc5zF5WB9UM%2BCXegBw%2FHHmVrKFUyQIkLOgwe%2FF1PzRY5n3sHgtI2cqaDuBb73nier9StdFOuHuTiGLOraliLb6SfUWy6F%2FZ58GlqPa0Zfx7QsNiXiwteKF2EuZ6s4wogcQDKgXUQk99mSNXBi8omSMsk5fgzOB5&X-Amz-Signature=6ccb4b6bb29908a3c1f5ecf1a0ba6af7142f759d6fea0a1f17097ce3e772a412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2G46P5%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T011102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCcIpXq5H8RZVUT9VK4xlAtiaa5fU%2BI0OjBylMkWp79CgIgAm6RSe4dKNG7JsGO49viZ61muKEmkQ5X4ORkeeu9h9Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEtmvkBVQVHdAmnWuyrcA%2BdaBErOGVUVjvomnJGD%2BFksvI4nhzh%2B2dsdO9ntCKen074y3IxKopvN66wCP0GuH0b%2BmSpKBtzlYS2a2%2BQU2UO4WozlCO%2FYzZrlTyzBOZZbkFp21aF0BJjADYPexObcv0%2FP2DFZzEfjSt5CXM%2F8Ca7m5u9dowEyhpeMWPm%2Ft5AjVC7VUBQFZsntKI0HN27oD8UaNxiZ6g9lS6FWEwRvmFj8ZVyS5uWxGmi0o7e5shfESRynOvYGsfk0rB7rBB9biW6uIxyl2qmm2a7oYNuqcvQ7WfGm14e5KrhD2B0it4acdYFvLnqsqiFs4wcFjOWc9agTYtdq5KM4%2FKiHZ86dM%2Bb3SUT9%2FJtLkm61jfUKKaZcD0GtqGdgHCWvKLI1LzMoHwzJ4lvGJEpGMSoUezywmYHPPMxqgVraONTSdHQl0g1ysTZ2G%2BWbfk3dKaRAdMm95BUyxGzg8s9Loq2UYemuJ1u%2F6M73A4%2B%2FfDuApY1EXo8Li%2FifuF7V%2F88UdXyS4PWUVYeVfyysmZ8V1jPqT8RXH8cqZaieKFa2GdellQvQqgsvrIARjPDn6GIx6myV%2BuywnbXkTAbRWy9Vo1NMJRFDLa2yPDWCSGlsl9VUrEH3ZAJdUTX7VwG6DTs801brMLCH%2BMkGOqUBHOB3wAIQkmfx0JCiJ3ZU21uw0%2FI1yx5sbu9CWUXlw0oLc0nrOjKGDJozybDWgGc5zF5WB9UM%2BCXegBw%2FHHmVrKFUyQIkLOgwe%2FF1PzRY5n3sHgtI2cqaDuBb73nier9StdFOuHuTiGLOraliLb6SfUWy6F%2FZ58GlqPa0Zfx7QsNiXiwteKF2EuZ6s4wogcQDKgXUQk99mSNXBi8omSMsk5fgzOB5&X-Amz-Signature=efab06ffc98ecddf2e2863cc242139ce1f5b8de612a544cdf2126480622dc414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2G46P5%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T011102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCcIpXq5H8RZVUT9VK4xlAtiaa5fU%2BI0OjBylMkWp79CgIgAm6RSe4dKNG7JsGO49viZ61muKEmkQ5X4ORkeeu9h9Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEtmvkBVQVHdAmnWuyrcA%2BdaBErOGVUVjvomnJGD%2BFksvI4nhzh%2B2dsdO9ntCKen074y3IxKopvN66wCP0GuH0b%2BmSpKBtzlYS2a2%2BQU2UO4WozlCO%2FYzZrlTyzBOZZbkFp21aF0BJjADYPexObcv0%2FP2DFZzEfjSt5CXM%2F8Ca7m5u9dowEyhpeMWPm%2Ft5AjVC7VUBQFZsntKI0HN27oD8UaNxiZ6g9lS6FWEwRvmFj8ZVyS5uWxGmi0o7e5shfESRynOvYGsfk0rB7rBB9biW6uIxyl2qmm2a7oYNuqcvQ7WfGm14e5KrhD2B0it4acdYFvLnqsqiFs4wcFjOWc9agTYtdq5KM4%2FKiHZ86dM%2Bb3SUT9%2FJtLkm61jfUKKaZcD0GtqGdgHCWvKLI1LzMoHwzJ4lvGJEpGMSoUezywmYHPPMxqgVraONTSdHQl0g1ysTZ2G%2BWbfk3dKaRAdMm95BUyxGzg8s9Loq2UYemuJ1u%2F6M73A4%2B%2FfDuApY1EXo8Li%2FifuF7V%2F88UdXyS4PWUVYeVfyysmZ8V1jPqT8RXH8cqZaieKFa2GdellQvQqgsvrIARjPDn6GIx6myV%2BuywnbXkTAbRWy9Vo1NMJRFDLa2yPDWCSGlsl9VUrEH3ZAJdUTX7VwG6DTs801brMLCH%2BMkGOqUBHOB3wAIQkmfx0JCiJ3ZU21uw0%2FI1yx5sbu9CWUXlw0oLc0nrOjKGDJozybDWgGc5zF5WB9UM%2BCXegBw%2FHHmVrKFUyQIkLOgwe%2FF1PzRY5n3sHgtI2cqaDuBb73nier9StdFOuHuTiGLOraliLb6SfUWy6F%2FZ58GlqPa0Zfx7QsNiXiwteKF2EuZ6s4wogcQDKgXUQk99mSNXBi8omSMsk5fgzOB5&X-Amz-Signature=7befaec7c468fee3a00265f95deb533cc6218d56cfd7eb53214e398804183247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2G46P5%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T011102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCcIpXq5H8RZVUT9VK4xlAtiaa5fU%2BI0OjBylMkWp79CgIgAm6RSe4dKNG7JsGO49viZ61muKEmkQ5X4ORkeeu9h9Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEtmvkBVQVHdAmnWuyrcA%2BdaBErOGVUVjvomnJGD%2BFksvI4nhzh%2B2dsdO9ntCKen074y3IxKopvN66wCP0GuH0b%2BmSpKBtzlYS2a2%2BQU2UO4WozlCO%2FYzZrlTyzBOZZbkFp21aF0BJjADYPexObcv0%2FP2DFZzEfjSt5CXM%2F8Ca7m5u9dowEyhpeMWPm%2Ft5AjVC7VUBQFZsntKI0HN27oD8UaNxiZ6g9lS6FWEwRvmFj8ZVyS5uWxGmi0o7e5shfESRynOvYGsfk0rB7rBB9biW6uIxyl2qmm2a7oYNuqcvQ7WfGm14e5KrhD2B0it4acdYFvLnqsqiFs4wcFjOWc9agTYtdq5KM4%2FKiHZ86dM%2Bb3SUT9%2FJtLkm61jfUKKaZcD0GtqGdgHCWvKLI1LzMoHwzJ4lvGJEpGMSoUezywmYHPPMxqgVraONTSdHQl0g1ysTZ2G%2BWbfk3dKaRAdMm95BUyxGzg8s9Loq2UYemuJ1u%2F6M73A4%2B%2FfDuApY1EXo8Li%2FifuF7V%2F88UdXyS4PWUVYeVfyysmZ8V1jPqT8RXH8cqZaieKFa2GdellQvQqgsvrIARjPDn6GIx6myV%2BuywnbXkTAbRWy9Vo1NMJRFDLa2yPDWCSGlsl9VUrEH3ZAJdUTX7VwG6DTs801brMLCH%2BMkGOqUBHOB3wAIQkmfx0JCiJ3ZU21uw0%2FI1yx5sbu9CWUXlw0oLc0nrOjKGDJozybDWgGc5zF5WB9UM%2BCXegBw%2FHHmVrKFUyQIkLOgwe%2FF1PzRY5n3sHgtI2cqaDuBb73nier9StdFOuHuTiGLOraliLb6SfUWy6F%2FZ58GlqPa0Zfx7QsNiXiwteKF2EuZ6s4wogcQDKgXUQk99mSNXBi8omSMsk5fgzOB5&X-Amz-Signature=4752a9443f9cf47bc8e61d24c5434c93f9e2765054c56e13d1752c54d841d372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2G46P5%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T011102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCcIpXq5H8RZVUT9VK4xlAtiaa5fU%2BI0OjBylMkWp79CgIgAm6RSe4dKNG7JsGO49viZ61muKEmkQ5X4ORkeeu9h9Mq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEtmvkBVQVHdAmnWuyrcA%2BdaBErOGVUVjvomnJGD%2BFksvI4nhzh%2B2dsdO9ntCKen074y3IxKopvN66wCP0GuH0b%2BmSpKBtzlYS2a2%2BQU2UO4WozlCO%2FYzZrlTyzBOZZbkFp21aF0BJjADYPexObcv0%2FP2DFZzEfjSt5CXM%2F8Ca7m5u9dowEyhpeMWPm%2Ft5AjVC7VUBQFZsntKI0HN27oD8UaNxiZ6g9lS6FWEwRvmFj8ZVyS5uWxGmi0o7e5shfESRynOvYGsfk0rB7rBB9biW6uIxyl2qmm2a7oYNuqcvQ7WfGm14e5KrhD2B0it4acdYFvLnqsqiFs4wcFjOWc9agTYtdq5KM4%2FKiHZ86dM%2Bb3SUT9%2FJtLkm61jfUKKaZcD0GtqGdgHCWvKLI1LzMoHwzJ4lvGJEpGMSoUezywmYHPPMxqgVraONTSdHQl0g1ysTZ2G%2BWbfk3dKaRAdMm95BUyxGzg8s9Loq2UYemuJ1u%2F6M73A4%2B%2FfDuApY1EXo8Li%2FifuF7V%2F88UdXyS4PWUVYeVfyysmZ8V1jPqT8RXH8cqZaieKFa2GdellQvQqgsvrIARjPDn6GIx6myV%2BuywnbXkTAbRWy9Vo1NMJRFDLa2yPDWCSGlsl9VUrEH3ZAJdUTX7VwG6DTs801brMLCH%2BMkGOqUBHOB3wAIQkmfx0JCiJ3ZU21uw0%2FI1yx5sbu9CWUXlw0oLc0nrOjKGDJozybDWgGc5zF5WB9UM%2BCXegBw%2FHHmVrKFUyQIkLOgwe%2FF1PzRY5n3sHgtI2cqaDuBb73nier9StdFOuHuTiGLOraliLb6SfUWy6F%2FZ58GlqPa0Zfx7QsNiXiwteKF2EuZ6s4wogcQDKgXUQk99mSNXBi8omSMsk5fgzOB5&X-Amz-Signature=ade45e39f13fb25b67e344c1d709add2107bd1fb09d2fe40ce99518c91c46cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZKSBAZJ%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T011101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0Bal7S6iUt5CqpTjCw4sSLiIiFEsm7ioGTWJLXyicMwIhAPAJHQ6As%2BDJACgEeh6Tz%2BGqtzgidAHjr49BNNOFLVC2Kv8DCCoQABoMNjM3NDIzMTgzODA1Igybwq8Aup5JgHnG7pMq3AM371gJKzv0lO1du5Nqp902Fd5Q4hXoEuv41cXN7A9rq%2Baj7%2B1YydoWSCipqQu9k9YSpIzKBCaDDSZ2DGDTzegB4v%2Ba2QtVwXRscq0dIk4dLPS%2BejzFXAgcXaJrlIa1%2BjuUd8ejVLjv54%2BVG2H2nt6L%2F5%2FZ%2FuPsasDr2i13%2FeVgtCK0Z2SI0qqpA6yGcbTCjQmpgDiKVd8qWUxNUMVOI8nEcyFcxrCAAJKX1HlYfiwaOZ%2BzUhXUflciQvAJA%2FohqgOKdyMndFK8I4FuJwgDLiaXZnbFEsWUOpCkNpfsuFvAwbbwG82v9ZC99ZODkcAets1RpjAfSogVZE0wOtXffkfaNjFA%2BbzGHxqh43P5D99jRsNUGZg4t53gJGhO0eYxcYXQLwVqbsePUj5VQacLbFskUudNsL7Znzk2Ms8JZjh%2FrYCJPFRpUz1p7uuTg3Bgrn4yeaOTwiRTnn%2BNTbBygvqn5SpcGqmKm5R5tgKeTQNfcHwa4SQYXWfIsQ9gJrRhIddFSKOixz31Un%2FY1kDAK3Fo3MuBqnShfIe%2Fegjeou7%2BzdkJluBpBbTx5bPaB2VHzsk0R3Fcx5hZCdZXq892Em4RgcOrI%2FJteIZuu2Xa%2FAN2EfZaWzt%2FE9xiaxtxWjC4h%2FjJBjqkAY6O2cgbTokWGgNUvzO6Ge98D2M%2FnMBeb309TEEGy04beNjGSxJ8M0pwZToD%2BJlL0sVO1fi%2Fo%2BhafWG4bscHj8OaoAolM0TWA2wuMRCysQCMHgQPme7azd2IFXMe%2BhNOBTMc07B93Cv6W4PWlDsC%2B1XWH9jStpz0ztc3MFGeG6ZZRcn1Gk68aS79vlKLUcKDJcpcPbsggUIdwJsMFeohchyiC6O5&X-Amz-Signature=22e282c911e81eb60fed671c7e1c370baa03f8137bd85ea701911d36d5c56e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

