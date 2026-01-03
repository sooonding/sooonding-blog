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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EY4RNLC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDdrbR1wQ8oCL9AdCf8UUA81ursJihC3AeBUywPbxtvVQIhAKveeg8UkSd4Am1yrGJnubrWWNSS09Hx9%2FCQbfuU4h7yKv8DCAUQABoMNjM3NDIzMTgzODA1Igx5tmfaJEy8CzT7dmoq3AOyuOL6e%2BcpWLpjObeg38IAb89sAeujvRu5OUeWWIeoiHkmMqYeRnmU2V2z4z9Ofv4zmau0zusMDJmTVDyXyKx4hq7%2FXdYGfEsFjqtXjBTmXLmFUJW64agOOHUdYo0s4MQyWLp8vJBgQ91eB6vlvADcf2wC4CC%2BbdiUXIcP1MgWOZ%2BWQMtEg1pJcOUup2Bl5ZddVBa%2BGTNpSLd1eRH43sIG0DJ%2F1uxaAfamxwiF3nGXo1mYmqUydGdvOIRiu4k5LvnPuDGHuSg%2Bl11YixGuTDp6hLUXpGD2I3erBeFquEh5vk6A2BB5yCpaiIqR6ZU3X1cIhTaNpfBJ6%2F5FgmgqpJTj4WEfaGh7d5BXh51K89vU1ugozBLaUt%2FM9c6luwe6J1bfRamQn%2FLrbDCVN9urRphvbvljLFwHIxesY3c2g4bp0vYXkdSA8oe1vYRnQeKi8TL2o3Ar3Y5rF3k5u1gdg%2Bcen6yxnYEuvqmopKX8rOuyITcuDpoKwac8CQv9fO8G%2BCsupUchH0Y%2B3czKfVNthvb52V8n3gNIr%2B6FEOvfE26VpmW%2BczQVm6QENyDu%2B%2FolRVNQD80VqIpMKHfTwHbkGNxAoiudQOxsXp%2BqhYrZX3kbVVyUuPlIlJES2mZVCjD6wuDKBjqkASL4zzvnd3RAN1VfMnQtsermIpPP6GVW%2BJ8oLhk3SKranCtJvERTaiyJWwcGNanvAeIax%2FiQaix6NZiDCXoPojBj%2BzDSNabDvXH5AnXyxdSQULstg%2FLwY%2BiURUErBFPVByqLmusWFYqEI6IBouKwUrS55TJl6NMkE23vgtXG0AmUzh5NlAK7QTUJVDkzTyd9OwHubJYoJUcW42l9vpfo34aZgjL3&X-Amz-Signature=070a51fb7eb96a9ac15be79d059af64073a899e1d7e41445ce3f5c769814a3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5L6WXT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIB0X9zm9Afkd11sifJI%2FcT4bwTXrlHWiohLvjC6WBOfEAiB%2Bt5C9MeadvyiONnVwVSWI0r6dRBsgAcD2vQAU%2FWhzGir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMEJDEZU2D%2FPRlhCg7KtwD4Dfkww9PWxA98tjef5Qj51WgWmYRRg%2Fa3KrSxxnYDstJCklwzZ3vcVZKI%2BP01OjKIBQrBl78w6sViF7li9gJoqvBD%2B2bmn1rbKpI9I46n%2F9IIO6RuGgPeyb3FBOpxL1jSWtHimsTsU8X4o0ZyWcQPkSdZ89Ho2eOK2L7tSpL6t9KWOn35aPI2Bgw6o%2F8zEPQhOCMs4i5PthIKAriytBFBCNu4Ht4KLsCR8rDio9aFl%2BpI0A4eJoLccB5%2BpMt9jKdnny%2BDUsa1w6BMVThvaBWohTDVrJjpv7bBW2jgpq7IxL6P3m3dX2ALKXiMsK%2Fu7awl1c4DmyAaENwdlhjoz9Cw%2BLatJc2%2BwCipaQxnk0yhf2FtdmqbANYxyuV9NNt4jB0MDYyVmuOBnl8agKivTdfbq0i0uSuEWNCe1sc%2BXnov5fP%2FOHBdJWXlekFcK4%2FKQTass2jxOdoAVIR18%2FPZmLZRhQKSslUNUC%2BPQD4%2FUybV%2Ffsudpe4OSnIZAeAn%2BzIOfMNal%2FIEwvwEn5JkgXMrSZo682gy4O2XNsIZNhAD4gYXP0iSOnDsAy4dVflU4HyOgQw1097Zf5PwW49IAUomIhlqs1hKGWQEjFMlHbZN%2B9QI4%2B059BKaoz8FFZf28w4brgygY6pgG%2FTUoLNq7WimGfC%2Bn6JuphjS75OWn0QXogKQopmb4vAvGA5kZNSDKOMoejI0E6fK8NEedEeQivKchEfVdkx7rsHSYCxUc%2FHEpPT8LbqVHXptAiVcAr4BcKaYjuyq7HHRUU%2BJM3VNvSo1cRg8H1NFrf5bESnr7rdwteAzU5rXk2NsiI2H23Z5qeIGtbFX191AmSteDnbIxij%2BVe%2BOXtyRyWpIKPFjS4&X-Amz-Signature=df73822ce84831f5267f6e57007281251b92a78de9054d32604e4436f9746ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5L6WXT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIB0X9zm9Afkd11sifJI%2FcT4bwTXrlHWiohLvjC6WBOfEAiB%2Bt5C9MeadvyiONnVwVSWI0r6dRBsgAcD2vQAU%2FWhzGir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMEJDEZU2D%2FPRlhCg7KtwD4Dfkww9PWxA98tjef5Qj51WgWmYRRg%2Fa3KrSxxnYDstJCklwzZ3vcVZKI%2BP01OjKIBQrBl78w6sViF7li9gJoqvBD%2B2bmn1rbKpI9I46n%2F9IIO6RuGgPeyb3FBOpxL1jSWtHimsTsU8X4o0ZyWcQPkSdZ89Ho2eOK2L7tSpL6t9KWOn35aPI2Bgw6o%2F8zEPQhOCMs4i5PthIKAriytBFBCNu4Ht4KLsCR8rDio9aFl%2BpI0A4eJoLccB5%2BpMt9jKdnny%2BDUsa1w6BMVThvaBWohTDVrJjpv7bBW2jgpq7IxL6P3m3dX2ALKXiMsK%2Fu7awl1c4DmyAaENwdlhjoz9Cw%2BLatJc2%2BwCipaQxnk0yhf2FtdmqbANYxyuV9NNt4jB0MDYyVmuOBnl8agKivTdfbq0i0uSuEWNCe1sc%2BXnov5fP%2FOHBdJWXlekFcK4%2FKQTass2jxOdoAVIR18%2FPZmLZRhQKSslUNUC%2BPQD4%2FUybV%2Ffsudpe4OSnIZAeAn%2BzIOfMNal%2FIEwvwEn5JkgXMrSZo682gy4O2XNsIZNhAD4gYXP0iSOnDsAy4dVflU4HyOgQw1097Zf5PwW49IAUomIhlqs1hKGWQEjFMlHbZN%2B9QI4%2B059BKaoz8FFZf28w4brgygY6pgG%2FTUoLNq7WimGfC%2Bn6JuphjS75OWn0QXogKQopmb4vAvGA5kZNSDKOMoejI0E6fK8NEedEeQivKchEfVdkx7rsHSYCxUc%2FHEpPT8LbqVHXptAiVcAr4BcKaYjuyq7HHRUU%2BJM3VNvSo1cRg8H1NFrf5bESnr7rdwteAzU5rXk2NsiI2H23Z5qeIGtbFX191AmSteDnbIxij%2BVe%2BOXtyRyWpIKPFjS4&X-Amz-Signature=94ebcc08681f1ddd2cc120c14118ca7f8063cf46edf3db61c62975283d6d0e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5L6WXT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIB0X9zm9Afkd11sifJI%2FcT4bwTXrlHWiohLvjC6WBOfEAiB%2Bt5C9MeadvyiONnVwVSWI0r6dRBsgAcD2vQAU%2FWhzGir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMEJDEZU2D%2FPRlhCg7KtwD4Dfkww9PWxA98tjef5Qj51WgWmYRRg%2Fa3KrSxxnYDstJCklwzZ3vcVZKI%2BP01OjKIBQrBl78w6sViF7li9gJoqvBD%2B2bmn1rbKpI9I46n%2F9IIO6RuGgPeyb3FBOpxL1jSWtHimsTsU8X4o0ZyWcQPkSdZ89Ho2eOK2L7tSpL6t9KWOn35aPI2Bgw6o%2F8zEPQhOCMs4i5PthIKAriytBFBCNu4Ht4KLsCR8rDio9aFl%2BpI0A4eJoLccB5%2BpMt9jKdnny%2BDUsa1w6BMVThvaBWohTDVrJjpv7bBW2jgpq7IxL6P3m3dX2ALKXiMsK%2Fu7awl1c4DmyAaENwdlhjoz9Cw%2BLatJc2%2BwCipaQxnk0yhf2FtdmqbANYxyuV9NNt4jB0MDYyVmuOBnl8agKivTdfbq0i0uSuEWNCe1sc%2BXnov5fP%2FOHBdJWXlekFcK4%2FKQTass2jxOdoAVIR18%2FPZmLZRhQKSslUNUC%2BPQD4%2FUybV%2Ffsudpe4OSnIZAeAn%2BzIOfMNal%2FIEwvwEn5JkgXMrSZo682gy4O2XNsIZNhAD4gYXP0iSOnDsAy4dVflU4HyOgQw1097Zf5PwW49IAUomIhlqs1hKGWQEjFMlHbZN%2B9QI4%2B059BKaoz8FFZf28w4brgygY6pgG%2FTUoLNq7WimGfC%2Bn6JuphjS75OWn0QXogKQopmb4vAvGA5kZNSDKOMoejI0E6fK8NEedEeQivKchEfVdkx7rsHSYCxUc%2FHEpPT8LbqVHXptAiVcAr4BcKaYjuyq7HHRUU%2BJM3VNvSo1cRg8H1NFrf5bESnr7rdwteAzU5rXk2NsiI2H23Z5qeIGtbFX191AmSteDnbIxij%2BVe%2BOXtyRyWpIKPFjS4&X-Amz-Signature=ed9ff969e08384a02ad63c74abe37227ef3b60dfb074f59125012fba88d14f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5L6WXT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIB0X9zm9Afkd11sifJI%2FcT4bwTXrlHWiohLvjC6WBOfEAiB%2Bt5C9MeadvyiONnVwVSWI0r6dRBsgAcD2vQAU%2FWhzGir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMEJDEZU2D%2FPRlhCg7KtwD4Dfkww9PWxA98tjef5Qj51WgWmYRRg%2Fa3KrSxxnYDstJCklwzZ3vcVZKI%2BP01OjKIBQrBl78w6sViF7li9gJoqvBD%2B2bmn1rbKpI9I46n%2F9IIO6RuGgPeyb3FBOpxL1jSWtHimsTsU8X4o0ZyWcQPkSdZ89Ho2eOK2L7tSpL6t9KWOn35aPI2Bgw6o%2F8zEPQhOCMs4i5PthIKAriytBFBCNu4Ht4KLsCR8rDio9aFl%2BpI0A4eJoLccB5%2BpMt9jKdnny%2BDUsa1w6BMVThvaBWohTDVrJjpv7bBW2jgpq7IxL6P3m3dX2ALKXiMsK%2Fu7awl1c4DmyAaENwdlhjoz9Cw%2BLatJc2%2BwCipaQxnk0yhf2FtdmqbANYxyuV9NNt4jB0MDYyVmuOBnl8agKivTdfbq0i0uSuEWNCe1sc%2BXnov5fP%2FOHBdJWXlekFcK4%2FKQTass2jxOdoAVIR18%2FPZmLZRhQKSslUNUC%2BPQD4%2FUybV%2Ffsudpe4OSnIZAeAn%2BzIOfMNal%2FIEwvwEn5JkgXMrSZo682gy4O2XNsIZNhAD4gYXP0iSOnDsAy4dVflU4HyOgQw1097Zf5PwW49IAUomIhlqs1hKGWQEjFMlHbZN%2B9QI4%2B059BKaoz8FFZf28w4brgygY6pgG%2FTUoLNq7WimGfC%2Bn6JuphjS75OWn0QXogKQopmb4vAvGA5kZNSDKOMoejI0E6fK8NEedEeQivKchEfVdkx7rsHSYCxUc%2FHEpPT8LbqVHXptAiVcAr4BcKaYjuyq7HHRUU%2BJM3VNvSo1cRg8H1NFrf5bESnr7rdwteAzU5rXk2NsiI2H23Z5qeIGtbFX191AmSteDnbIxij%2BVe%2BOXtyRyWpIKPFjS4&X-Amz-Signature=4fa1cf6c8ee9d9cc31c44dfaaf095b065469d6a083f8b3a733fa6547efca7236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH5L6WXT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIB0X9zm9Afkd11sifJI%2FcT4bwTXrlHWiohLvjC6WBOfEAiB%2Bt5C9MeadvyiONnVwVSWI0r6dRBsgAcD2vQAU%2FWhzGir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMEJDEZU2D%2FPRlhCg7KtwD4Dfkww9PWxA98tjef5Qj51WgWmYRRg%2Fa3KrSxxnYDstJCklwzZ3vcVZKI%2BP01OjKIBQrBl78w6sViF7li9gJoqvBD%2B2bmn1rbKpI9I46n%2F9IIO6RuGgPeyb3FBOpxL1jSWtHimsTsU8X4o0ZyWcQPkSdZ89Ho2eOK2L7tSpL6t9KWOn35aPI2Bgw6o%2F8zEPQhOCMs4i5PthIKAriytBFBCNu4Ht4KLsCR8rDio9aFl%2BpI0A4eJoLccB5%2BpMt9jKdnny%2BDUsa1w6BMVThvaBWohTDVrJjpv7bBW2jgpq7IxL6P3m3dX2ALKXiMsK%2Fu7awl1c4DmyAaENwdlhjoz9Cw%2BLatJc2%2BwCipaQxnk0yhf2FtdmqbANYxyuV9NNt4jB0MDYyVmuOBnl8agKivTdfbq0i0uSuEWNCe1sc%2BXnov5fP%2FOHBdJWXlekFcK4%2FKQTass2jxOdoAVIR18%2FPZmLZRhQKSslUNUC%2BPQD4%2FUybV%2Ffsudpe4OSnIZAeAn%2BzIOfMNal%2FIEwvwEn5JkgXMrSZo682gy4O2XNsIZNhAD4gYXP0iSOnDsAy4dVflU4HyOgQw1097Zf5PwW49IAUomIhlqs1hKGWQEjFMlHbZN%2B9QI4%2B059BKaoz8FFZf28w4brgygY6pgG%2FTUoLNq7WimGfC%2Bn6JuphjS75OWn0QXogKQopmb4vAvGA5kZNSDKOMoejI0E6fK8NEedEeQivKchEfVdkx7rsHSYCxUc%2FHEpPT8LbqVHXptAiVcAr4BcKaYjuyq7HHRUU%2BJM3VNvSo1cRg8H1NFrf5bESnr7rdwteAzU5rXk2NsiI2H23Z5qeIGtbFX191AmSteDnbIxij%2BVe%2BOXtyRyWpIKPFjS4&X-Amz-Signature=d7b9fef35f890c025f757dd5b74919166a432604b335d791d480c421805cab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EY4RNLC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T010354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDdrbR1wQ8oCL9AdCf8UUA81ursJihC3AeBUywPbxtvVQIhAKveeg8UkSd4Am1yrGJnubrWWNSS09Hx9%2FCQbfuU4h7yKv8DCAUQABoMNjM3NDIzMTgzODA1Igx5tmfaJEy8CzT7dmoq3AOyuOL6e%2BcpWLpjObeg38IAb89sAeujvRu5OUeWWIeoiHkmMqYeRnmU2V2z4z9Ofv4zmau0zusMDJmTVDyXyKx4hq7%2FXdYGfEsFjqtXjBTmXLmFUJW64agOOHUdYo0s4MQyWLp8vJBgQ91eB6vlvADcf2wC4CC%2BbdiUXIcP1MgWOZ%2BWQMtEg1pJcOUup2Bl5ZddVBa%2BGTNpSLd1eRH43sIG0DJ%2F1uxaAfamxwiF3nGXo1mYmqUydGdvOIRiu4k5LvnPuDGHuSg%2Bl11YixGuTDp6hLUXpGD2I3erBeFquEh5vk6A2BB5yCpaiIqR6ZU3X1cIhTaNpfBJ6%2F5FgmgqpJTj4WEfaGh7d5BXh51K89vU1ugozBLaUt%2FM9c6luwe6J1bfRamQn%2FLrbDCVN9urRphvbvljLFwHIxesY3c2g4bp0vYXkdSA8oe1vYRnQeKi8TL2o3Ar3Y5rF3k5u1gdg%2Bcen6yxnYEuvqmopKX8rOuyITcuDpoKwac8CQv9fO8G%2BCsupUchH0Y%2B3czKfVNthvb52V8n3gNIr%2B6FEOvfE26VpmW%2BczQVm6QENyDu%2B%2FolRVNQD80VqIpMKHfTwHbkGNxAoiudQOxsXp%2BqhYrZX3kbVVyUuPlIlJES2mZVCjD6wuDKBjqkASL4zzvnd3RAN1VfMnQtsermIpPP6GVW%2BJ8oLhk3SKranCtJvERTaiyJWwcGNanvAeIax%2FiQaix6NZiDCXoPojBj%2BzDSNabDvXH5AnXyxdSQULstg%2FLwY%2BiURUErBFPVByqLmusWFYqEI6IBouKwUrS55TJl6NMkE23vgtXG0AmUzh5NlAK7QTUJVDkzTyd9OwHubJYoJUcW42l9vpfo34aZgjL3&X-Amz-Signature=de76d13c477171f181efbdf7a4106a9f2d49886a25ac83e555b12d2646b5bfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

