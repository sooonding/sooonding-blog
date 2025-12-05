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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXGL4MNA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLLooAAKO9QmbKS29rsskVMHufprrw0VEJzsWlc39x4wIgIx0YPkmxKPYQquIW1zsOkduX79fMmg5kVAIcuoGef34q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFMgDre05F5pn3kXTyrcAzXyPlV0PmiuHsSBdCXZUDq2yyRXgcTqf4Wj8dLI4%2FdarvBR6Kl7VFn8glGRuBMmLuevlQt1qGJXoL%2Fv1%2F%2F9UmXZqdYmt%2FE02x6qYlyqtvwQvAIPop9TXebZ%2FYZxJmryuJIlo%2BZM7WPWUej8GnMd2U%2BVAJOjf7fhZGF6kH8CUMzkqzWzGnjTITTCDUHUxHfElmT1AKSnsXLSfUft2WXh1xGwH1nd4DkO7x5BH2ckZw7KgbKH9iQR5JZ%2Fuk1MLkpp0jDoelsqlMZHZqEtUNQJDX4HnL1DIPcJcC1VOQ1NKAXZrDdW0prnVn4GnbwAoT5ZMflnri8F6I6phuPdHVeqgQH7idx3pSsr26lp%2Bmm%2FbdCyMyyJwBDHnNwcl74J1A7%2FTYOUBZY1snRo5OXAViWbT1mp8lgRjSvslXtDRaQGkKFBHPvclRYXdpcAyxLNqSQcU1GI9Bd3uJftYg9njbkU8pXDieNsY5gz%2By4d2EUnZJMtIC8CTTnlbQvXaJE5sB9aHNT%2BJHmw8ZcM71QD8JRzB3PziT3cRM1mJ%2F0VZ0IeW4C8bwQkITKDXAX%2BKzSRWMCmp9pzhtKN3OBZoQaf28enIIBOVutFyRPOp2kGL985pg7%2FSCJinhPfDqnKVMGPMMyUyMkGOqUBEa06y1AF47TPzPextplm5MwuHhSZeWoyrQSa%2Fp6kDkG1QtX3plYDoyM8dEKplo2iu5zP0MdMpEowrE0RtLKE0BEiJPAM%2BkkUpAznICt0dO1pOqtshiXWV3s5jUFlyn0DpCOOw%2BDTXm7SJsQhRROsyYr0hH5A%2Bjq%2FQh93fmtcHRLDCDvhPemJvFCUQHtlTIQDFL2BEZBR8QsaNrtBuK7b8WRtkbHj&X-Amz-Signature=7b5b7ace04ccd41e891a561490d6faaa65ad0e29c182d2770941c6d23635dee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN4XCRPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZvXBoLRENgH8qtjVghUzZkMfNIwl1Kn716PsqrMOGAIhAMirDzUPe4Tk1TzzyylDuMNjPkrFug6Bphcwrr%2BbvRrBKv8DCFAQABoMNjM3NDIzMTgzODA1Igx0kBLb8EeGmmcDRjoq3API%2Fqbh3j7busHAPVRE%2BXUU3sPoG6pkyluFGC%2F1WStx0Y42DzCMy4bXlKixKn1TxSkMKYoAYBTlt4CVaebotusLhZShWrR866JLsSSY6qrgMRSdYpUvt21NmnJXRIwSyVEzRf6W1EDnkH2seGBcX1EkBlqgGYs%2ByQk9Rq6Y3YVrJVELxzcFdwOwbvwoCmptPWpMjJD1CXlr0tKPCoVQ9DBC4jweEwgFZvviGZ5TxlZY7olNJBLFDIiBvnjrZvqOkecXI%2ByBpe%2FEiGgIAB85cxThXfoQGGVJeaJ8WoAL2x%2Fh9r4vGCfZSzIs2FfCBq4qCmqPtdqQU562GFNh9M6K4nlxRlmTDRr1g%2FykpZCKtDFKKCrVt7zY1GG9WWynFX1JuuSnJujvY9u0Rm2neteIn6y%2FE4P821lqx8rct1jqvN9Di74%2FrwijcRVMfP6x6QiSUxa4s454ITR%2B4SegfaS1L8Gc81i1b%2F%2Bf7WjF9b2uu3wHLmEFCujLzufl%2BnPUeqDlbeKPqDXlaU7iU3at1LzQ%2FuvSQwbfAydcgO8DyExgRifU8ZrlsaK%2BZOp5mf0QrgnsHGnU%2Fo2usg%2Bic97a8d7N7b85Cso5MLRZEYLRNdPSiGQneZUiKbhn1A47ST%2BELTD0lMjJBjqkAdm5E1PWw9zVKMvZNiDO5VBgt0b3fboMvSA3dhrWsDRV3%2F2ng70NNjG4PAuFmeOUapOwV2UDeEJgrmik1lfwxcKo7Xh0AY5X2ZSQIgwveOBG0qePPzLH5myTH1U2KuU7uzXa7uvOQ82Re4nR%2BDRlGdkLfR%2BOs0x2iDyyCYXeafCJTMuYLsHY6ine8tpSRxvFCf8gyisnqjYleSPmmtInFDnOAD8C&X-Amz-Signature=57bd6f93f01b2d16dfc8f0dfde48b4834cbf65a10a153b916aebd3c8741f884b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN4XCRPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZvXBoLRENgH8qtjVghUzZkMfNIwl1Kn716PsqrMOGAIhAMirDzUPe4Tk1TzzyylDuMNjPkrFug6Bphcwrr%2BbvRrBKv8DCFAQABoMNjM3NDIzMTgzODA1Igx0kBLb8EeGmmcDRjoq3API%2Fqbh3j7busHAPVRE%2BXUU3sPoG6pkyluFGC%2F1WStx0Y42DzCMy4bXlKixKn1TxSkMKYoAYBTlt4CVaebotusLhZShWrR866JLsSSY6qrgMRSdYpUvt21NmnJXRIwSyVEzRf6W1EDnkH2seGBcX1EkBlqgGYs%2ByQk9Rq6Y3YVrJVELxzcFdwOwbvwoCmptPWpMjJD1CXlr0tKPCoVQ9DBC4jweEwgFZvviGZ5TxlZY7olNJBLFDIiBvnjrZvqOkecXI%2ByBpe%2FEiGgIAB85cxThXfoQGGVJeaJ8WoAL2x%2Fh9r4vGCfZSzIs2FfCBq4qCmqPtdqQU562GFNh9M6K4nlxRlmTDRr1g%2FykpZCKtDFKKCrVt7zY1GG9WWynFX1JuuSnJujvY9u0Rm2neteIn6y%2FE4P821lqx8rct1jqvN9Di74%2FrwijcRVMfP6x6QiSUxa4s454ITR%2B4SegfaS1L8Gc81i1b%2F%2Bf7WjF9b2uu3wHLmEFCujLzufl%2BnPUeqDlbeKPqDXlaU7iU3at1LzQ%2FuvSQwbfAydcgO8DyExgRifU8ZrlsaK%2BZOp5mf0QrgnsHGnU%2Fo2usg%2Bic97a8d7N7b85Cso5MLRZEYLRNdPSiGQneZUiKbhn1A47ST%2BELTD0lMjJBjqkAdm5E1PWw9zVKMvZNiDO5VBgt0b3fboMvSA3dhrWsDRV3%2F2ng70NNjG4PAuFmeOUapOwV2UDeEJgrmik1lfwxcKo7Xh0AY5X2ZSQIgwveOBG0qePPzLH5myTH1U2KuU7uzXa7uvOQ82Re4nR%2BDRlGdkLfR%2BOs0x2iDyyCYXeafCJTMuYLsHY6ine8tpSRxvFCf8gyisnqjYleSPmmtInFDnOAD8C&X-Amz-Signature=073f21847fc701de3bacb13ff02fdbc58ac4ff033f5458987cb4c0fe248979ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN4XCRPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZvXBoLRENgH8qtjVghUzZkMfNIwl1Kn716PsqrMOGAIhAMirDzUPe4Tk1TzzyylDuMNjPkrFug6Bphcwrr%2BbvRrBKv8DCFAQABoMNjM3NDIzMTgzODA1Igx0kBLb8EeGmmcDRjoq3API%2Fqbh3j7busHAPVRE%2BXUU3sPoG6pkyluFGC%2F1WStx0Y42DzCMy4bXlKixKn1TxSkMKYoAYBTlt4CVaebotusLhZShWrR866JLsSSY6qrgMRSdYpUvt21NmnJXRIwSyVEzRf6W1EDnkH2seGBcX1EkBlqgGYs%2ByQk9Rq6Y3YVrJVELxzcFdwOwbvwoCmptPWpMjJD1CXlr0tKPCoVQ9DBC4jweEwgFZvviGZ5TxlZY7olNJBLFDIiBvnjrZvqOkecXI%2ByBpe%2FEiGgIAB85cxThXfoQGGVJeaJ8WoAL2x%2Fh9r4vGCfZSzIs2FfCBq4qCmqPtdqQU562GFNh9M6K4nlxRlmTDRr1g%2FykpZCKtDFKKCrVt7zY1GG9WWynFX1JuuSnJujvY9u0Rm2neteIn6y%2FE4P821lqx8rct1jqvN9Di74%2FrwijcRVMfP6x6QiSUxa4s454ITR%2B4SegfaS1L8Gc81i1b%2F%2Bf7WjF9b2uu3wHLmEFCujLzufl%2BnPUeqDlbeKPqDXlaU7iU3at1LzQ%2FuvSQwbfAydcgO8DyExgRifU8ZrlsaK%2BZOp5mf0QrgnsHGnU%2Fo2usg%2Bic97a8d7N7b85Cso5MLRZEYLRNdPSiGQneZUiKbhn1A47ST%2BELTD0lMjJBjqkAdm5E1PWw9zVKMvZNiDO5VBgt0b3fboMvSA3dhrWsDRV3%2F2ng70NNjG4PAuFmeOUapOwV2UDeEJgrmik1lfwxcKo7Xh0AY5X2ZSQIgwveOBG0qePPzLH5myTH1U2KuU7uzXa7uvOQ82Re4nR%2BDRlGdkLfR%2BOs0x2iDyyCYXeafCJTMuYLsHY6ine8tpSRxvFCf8gyisnqjYleSPmmtInFDnOAD8C&X-Amz-Signature=2c2ceca958f0505b41e37df69f4faf56605cdeb1b324043faf27181e8ea4b694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN4XCRPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZvXBoLRENgH8qtjVghUzZkMfNIwl1Kn716PsqrMOGAIhAMirDzUPe4Tk1TzzyylDuMNjPkrFug6Bphcwrr%2BbvRrBKv8DCFAQABoMNjM3NDIzMTgzODA1Igx0kBLb8EeGmmcDRjoq3API%2Fqbh3j7busHAPVRE%2BXUU3sPoG6pkyluFGC%2F1WStx0Y42DzCMy4bXlKixKn1TxSkMKYoAYBTlt4CVaebotusLhZShWrR866JLsSSY6qrgMRSdYpUvt21NmnJXRIwSyVEzRf6W1EDnkH2seGBcX1EkBlqgGYs%2ByQk9Rq6Y3YVrJVELxzcFdwOwbvwoCmptPWpMjJD1CXlr0tKPCoVQ9DBC4jweEwgFZvviGZ5TxlZY7olNJBLFDIiBvnjrZvqOkecXI%2ByBpe%2FEiGgIAB85cxThXfoQGGVJeaJ8WoAL2x%2Fh9r4vGCfZSzIs2FfCBq4qCmqPtdqQU562GFNh9M6K4nlxRlmTDRr1g%2FykpZCKtDFKKCrVt7zY1GG9WWynFX1JuuSnJujvY9u0Rm2neteIn6y%2FE4P821lqx8rct1jqvN9Di74%2FrwijcRVMfP6x6QiSUxa4s454ITR%2B4SegfaS1L8Gc81i1b%2F%2Bf7WjF9b2uu3wHLmEFCujLzufl%2BnPUeqDlbeKPqDXlaU7iU3at1LzQ%2FuvSQwbfAydcgO8DyExgRifU8ZrlsaK%2BZOp5mf0QrgnsHGnU%2Fo2usg%2Bic97a8d7N7b85Cso5MLRZEYLRNdPSiGQneZUiKbhn1A47ST%2BELTD0lMjJBjqkAdm5E1PWw9zVKMvZNiDO5VBgt0b3fboMvSA3dhrWsDRV3%2F2ng70NNjG4PAuFmeOUapOwV2UDeEJgrmik1lfwxcKo7Xh0AY5X2ZSQIgwveOBG0qePPzLH5myTH1U2KuU7uzXa7uvOQ82Re4nR%2BDRlGdkLfR%2BOs0x2iDyyCYXeafCJTMuYLsHY6ine8tpSRxvFCf8gyisnqjYleSPmmtInFDnOAD8C&X-Amz-Signature=37ff56f0f5d7c2940516b2e8a95e603dd942fe9818de8385f3274fba7274d129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN4XCRPT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlZvXBoLRENgH8qtjVghUzZkMfNIwl1Kn716PsqrMOGAIhAMirDzUPe4Tk1TzzyylDuMNjPkrFug6Bphcwrr%2BbvRrBKv8DCFAQABoMNjM3NDIzMTgzODA1Igx0kBLb8EeGmmcDRjoq3API%2Fqbh3j7busHAPVRE%2BXUU3sPoG6pkyluFGC%2F1WStx0Y42DzCMy4bXlKixKn1TxSkMKYoAYBTlt4CVaebotusLhZShWrR866JLsSSY6qrgMRSdYpUvt21NmnJXRIwSyVEzRf6W1EDnkH2seGBcX1EkBlqgGYs%2ByQk9Rq6Y3YVrJVELxzcFdwOwbvwoCmptPWpMjJD1CXlr0tKPCoVQ9DBC4jweEwgFZvviGZ5TxlZY7olNJBLFDIiBvnjrZvqOkecXI%2ByBpe%2FEiGgIAB85cxThXfoQGGVJeaJ8WoAL2x%2Fh9r4vGCfZSzIs2FfCBq4qCmqPtdqQU562GFNh9M6K4nlxRlmTDRr1g%2FykpZCKtDFKKCrVt7zY1GG9WWynFX1JuuSnJujvY9u0Rm2neteIn6y%2FE4P821lqx8rct1jqvN9Di74%2FrwijcRVMfP6x6QiSUxa4s454ITR%2B4SegfaS1L8Gc81i1b%2F%2Bf7WjF9b2uu3wHLmEFCujLzufl%2BnPUeqDlbeKPqDXlaU7iU3at1LzQ%2FuvSQwbfAydcgO8DyExgRifU8ZrlsaK%2BZOp5mf0QrgnsHGnU%2Fo2usg%2Bic97a8d7N7b85Cso5MLRZEYLRNdPSiGQneZUiKbhn1A47ST%2BELTD0lMjJBjqkAdm5E1PWw9zVKMvZNiDO5VBgt0b3fboMvSA3dhrWsDRV3%2F2ng70NNjG4PAuFmeOUapOwV2UDeEJgrmik1lfwxcKo7Xh0AY5X2ZSQIgwveOBG0qePPzLH5myTH1U2KuU7uzXa7uvOQ82Re4nR%2BDRlGdkLfR%2BOs0x2iDyyCYXeafCJTMuYLsHY6ine8tpSRxvFCf8gyisnqjYleSPmmtInFDnOAD8C&X-Amz-Signature=d0887b2b6a8d048f58ad7b7f8a706cc245c6954255dc614a2e6fc8359e822b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXGL4MNA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T010429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLLooAAKO9QmbKS29rsskVMHufprrw0VEJzsWlc39x4wIgIx0YPkmxKPYQquIW1zsOkduX79fMmg5kVAIcuoGef34q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFMgDre05F5pn3kXTyrcAzXyPlV0PmiuHsSBdCXZUDq2yyRXgcTqf4Wj8dLI4%2FdarvBR6Kl7VFn8glGRuBMmLuevlQt1qGJXoL%2Fv1%2F%2F9UmXZqdYmt%2FE02x6qYlyqtvwQvAIPop9TXebZ%2FYZxJmryuJIlo%2BZM7WPWUej8GnMd2U%2BVAJOjf7fhZGF6kH8CUMzkqzWzGnjTITTCDUHUxHfElmT1AKSnsXLSfUft2WXh1xGwH1nd4DkO7x5BH2ckZw7KgbKH9iQR5JZ%2Fuk1MLkpp0jDoelsqlMZHZqEtUNQJDX4HnL1DIPcJcC1VOQ1NKAXZrDdW0prnVn4GnbwAoT5ZMflnri8F6I6phuPdHVeqgQH7idx3pSsr26lp%2Bmm%2FbdCyMyyJwBDHnNwcl74J1A7%2FTYOUBZY1snRo5OXAViWbT1mp8lgRjSvslXtDRaQGkKFBHPvclRYXdpcAyxLNqSQcU1GI9Bd3uJftYg9njbkU8pXDieNsY5gz%2By4d2EUnZJMtIC8CTTnlbQvXaJE5sB9aHNT%2BJHmw8ZcM71QD8JRzB3PziT3cRM1mJ%2F0VZ0IeW4C8bwQkITKDXAX%2BKzSRWMCmp9pzhtKN3OBZoQaf28enIIBOVutFyRPOp2kGL985pg7%2FSCJinhPfDqnKVMGPMMyUyMkGOqUBEa06y1AF47TPzPextplm5MwuHhSZeWoyrQSa%2Fp6kDkG1QtX3plYDoyM8dEKplo2iu5zP0MdMpEowrE0RtLKE0BEiJPAM%2BkkUpAznICt0dO1pOqtshiXWV3s5jUFlyn0DpCOOw%2BDTXm7SJsQhRROsyYr0hH5A%2Bjq%2FQh93fmtcHRLDCDvhPemJvFCUQHtlTIQDFL2BEZBR8QsaNrtBuK7b8WRtkbHj&X-Amz-Signature=278d9f66c66dda762d31a44cb674dbfbaddcfe41a196ce93e05e4b44ac1669fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

