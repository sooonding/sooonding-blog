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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXWBYL3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T011620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA51wUgSFA5bxjwXkhQziYh1M0qepROgRrRSNvSb2wAVAiEApsSHOd6VbjEHyyUeXM%2FytDQlvIkrzJOwGKUpgcclTCUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIGgsLmJUIu3pSQDYircA5xCXXaAN7P6XmN2wStrwlbFRpTc22YtDxkEzyLdK7oPUAZj6hRcyFSsJ6%2F7ryD%2F%2FnBBM5zM8XbK8fzLpHd3BH1wxqSX2vp58kx0%2FXXDmeBew7dh%2Fg9Kq6TDR4j%2FpvpgVOQ0JD7FYLrXnywUItqcdtQ3VHMXTtiHKnPoAzLx%2Ba77z1qRS2tx%2BR8p4mZ1T6lisLRF3KZAS92wjD1GJNnaPvPHMTV%2FNgf%2BxKG0RIsRMsluQfEwlc7f8ps9I1GWFzxm9L9aElZVQzp1ZpwnFhAO4kXdskkmVjqJA58Dc6aQY%2FzBNp6f7Onsk67wsykwUi1QZdmyi%2BMjqgHfAiubezbVnv9nV23LgMFob4AcuQHw0k98zHQVxBzrVnZdv%2ByrhCIMYfIGEgETV5kGO6U8R66IgD3C3APh0sXGdd8lAXQpGMSWgchFnCZrlRd7ktjn5o%2BcXKGiBooitr5b70k7K%2F2kD2G%2F91Q17%2BEzXAVOMn3aZmuOiBpoNSvwXWkkOHgRstS2fk2XhZv1W4rZYlkLLbAcK7NAR%2FYXCD4qKeldebU%2B9NQ2u0gbv%2FPvRQhr8Ye86qqgOEvLR1CB1n6dV%2BTUYh02unmBBWuYBBj1jlJE5%2Bor3nbYpzi02RBHQHmzDLOjMOb75ccGOqUB3%2B2clNFDe%2Fnua%2FlOitChB%2F1hGo%2F4qU9HedDjHPOlVBEwoyKZRHNm52poOIm2FDojBj%2FBINJ6CfZn9sSolisEqk27dD2pjfZPQTqOIhSZQ6yOY9Lh7I0XaNYynEVc%2BjO1mz6vhmb0hrvBZN2erEj0rnsN6qYXVixC6Fqyg2PqpigHdIPBXKpoRPvbXQryZQv3rnVDNvOwwtzX6q%2B6NmtYEROijLm9&X-Amz-Signature=dbda0a9a06eb4b9b783da97c8d9a19d1612b4bcaac69cdd0cf8a2f338b7da180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OS5NHR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T011621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHShRGNutOASE49jB8Er%2FuxuyWwtPXAMmM7IcqADVY8rAiBC1ee3PIjnzicaq8U9U2rg%2Bnhz2Z5MLoisE5%2FOK6alBir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM5ZjWKPW3NwHSA1upKtwDEmLww%2FbgB2I7OzNtk2p%2FWjw0MHRvRHXV6ruCTANyNzpm%2FiQ120zJ7z%2FZqVZc4n3TlT3vVvPXKM6RR63DSULSc9PkkW8hIxhoIvO7UkRJTO1J0mk4qrezIV01ocsfzeVD8keo3T%2FTRXn%2BSR5Tp5i%2F0Y%2FHApp%2B39b1GwU1EZRonrWGPjEKGboeJLh%2BXsuo1jp7XrroNL0uOldBgv9Xc8zmoHosArrZcO9%2FYvO34gz4rJ94d%2BuhDco%2FYDov39PBB7f7D0Kem8IyT%2Bvr%2FCTbldVkOF99UH19ULblPo%2B07Y6Iiu10YFrPsTV6pX2aKnRxtJ%2Bglhx7kIUHd0TJUY7O3PO28tbBiOk%2B08xYV27Ngd6HFxNKtL6EFqJZBsVvIVVi%2FTKOAA9dhyb%2FxHVpiQNzAryy8JshyGCtE12pxsnJ1gqQdubnBqvG4nTZkpEYHSANMTLrnARL5n9rmDffwkMG%2FgZ9fNIGLxNQjiNRMrTJZ09%2FFIl%2FrxvHEi8HQrf4yd581Maw4eSSZIgexmxI5YHIi6FXtZE5wqW6XrcxYkVdWy1z%2FA0ByN%2FdgAXE1pMr4X5eOc02c7aADeB8pt9JidQwkvzEM3gzKBfeteDuEcle%2Bns6WZ6N8jTWoRPbWfDALSgwxvzlxwY6pgEqs7mojOFmR8vZjHf8jCoRZYlzYW45Xf43b%2BmZX7vkqRtFmRcbCyn5mJly8LgHqpmcJu6vCspeOAs%2Ff3%2FGPe65cixxB%2Bg1f4%2FkcAkUkMH5yA%2BlfHu2TeMpOm3vWfaqAwv0Tdx21meuvIfGD2pJs4BSzAe0JgOgTEWfOnb%2BTVQqU7ufGNfNa%2FShGX%2FfhChbIrF2oRzsi%2F8zCKtAxzxMhwX%2BWqWS1par&X-Amz-Signature=f17e25f908325f282f31b6f17bb7b9077697295669ecdd2520d304c8ea463580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OS5NHR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T011621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHShRGNutOASE49jB8Er%2FuxuyWwtPXAMmM7IcqADVY8rAiBC1ee3PIjnzicaq8U9U2rg%2Bnhz2Z5MLoisE5%2FOK6alBir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM5ZjWKPW3NwHSA1upKtwDEmLww%2FbgB2I7OzNtk2p%2FWjw0MHRvRHXV6ruCTANyNzpm%2FiQ120zJ7z%2FZqVZc4n3TlT3vVvPXKM6RR63DSULSc9PkkW8hIxhoIvO7UkRJTO1J0mk4qrezIV01ocsfzeVD8keo3T%2FTRXn%2BSR5Tp5i%2F0Y%2FHApp%2B39b1GwU1EZRonrWGPjEKGboeJLh%2BXsuo1jp7XrroNL0uOldBgv9Xc8zmoHosArrZcO9%2FYvO34gz4rJ94d%2BuhDco%2FYDov39PBB7f7D0Kem8IyT%2Bvr%2FCTbldVkOF99UH19ULblPo%2B07Y6Iiu10YFrPsTV6pX2aKnRxtJ%2Bglhx7kIUHd0TJUY7O3PO28tbBiOk%2B08xYV27Ngd6HFxNKtL6EFqJZBsVvIVVi%2FTKOAA9dhyb%2FxHVpiQNzAryy8JshyGCtE12pxsnJ1gqQdubnBqvG4nTZkpEYHSANMTLrnARL5n9rmDffwkMG%2FgZ9fNIGLxNQjiNRMrTJZ09%2FFIl%2FrxvHEi8HQrf4yd581Maw4eSSZIgexmxI5YHIi6FXtZE5wqW6XrcxYkVdWy1z%2FA0ByN%2FdgAXE1pMr4X5eOc02c7aADeB8pt9JidQwkvzEM3gzKBfeteDuEcle%2Bns6WZ6N8jTWoRPbWfDALSgwxvzlxwY6pgEqs7mojOFmR8vZjHf8jCoRZYlzYW45Xf43b%2BmZX7vkqRtFmRcbCyn5mJly8LgHqpmcJu6vCspeOAs%2Ff3%2FGPe65cixxB%2Bg1f4%2FkcAkUkMH5yA%2BlfHu2TeMpOm3vWfaqAwv0Tdx21meuvIfGD2pJs4BSzAe0JgOgTEWfOnb%2BTVQqU7ufGNfNa%2FShGX%2FfhChbIrF2oRzsi%2F8zCKtAxzxMhwX%2BWqWS1par&X-Amz-Signature=e72faaaad6e05c48231e27a698cf8e1f859b692d3b0e1fe71ee6b7f9a42cd33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OS5NHR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T011621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHShRGNutOASE49jB8Er%2FuxuyWwtPXAMmM7IcqADVY8rAiBC1ee3PIjnzicaq8U9U2rg%2Bnhz2Z5MLoisE5%2FOK6alBir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM5ZjWKPW3NwHSA1upKtwDEmLww%2FbgB2I7OzNtk2p%2FWjw0MHRvRHXV6ruCTANyNzpm%2FiQ120zJ7z%2FZqVZc4n3TlT3vVvPXKM6RR63DSULSc9PkkW8hIxhoIvO7UkRJTO1J0mk4qrezIV01ocsfzeVD8keo3T%2FTRXn%2BSR5Tp5i%2F0Y%2FHApp%2B39b1GwU1EZRonrWGPjEKGboeJLh%2BXsuo1jp7XrroNL0uOldBgv9Xc8zmoHosArrZcO9%2FYvO34gz4rJ94d%2BuhDco%2FYDov39PBB7f7D0Kem8IyT%2Bvr%2FCTbldVkOF99UH19ULblPo%2B07Y6Iiu10YFrPsTV6pX2aKnRxtJ%2Bglhx7kIUHd0TJUY7O3PO28tbBiOk%2B08xYV27Ngd6HFxNKtL6EFqJZBsVvIVVi%2FTKOAA9dhyb%2FxHVpiQNzAryy8JshyGCtE12pxsnJ1gqQdubnBqvG4nTZkpEYHSANMTLrnARL5n9rmDffwkMG%2FgZ9fNIGLxNQjiNRMrTJZ09%2FFIl%2FrxvHEi8HQrf4yd581Maw4eSSZIgexmxI5YHIi6FXtZE5wqW6XrcxYkVdWy1z%2FA0ByN%2FdgAXE1pMr4X5eOc02c7aADeB8pt9JidQwkvzEM3gzKBfeteDuEcle%2Bns6WZ6N8jTWoRPbWfDALSgwxvzlxwY6pgEqs7mojOFmR8vZjHf8jCoRZYlzYW45Xf43b%2BmZX7vkqRtFmRcbCyn5mJly8LgHqpmcJu6vCspeOAs%2Ff3%2FGPe65cixxB%2Bg1f4%2FkcAkUkMH5yA%2BlfHu2TeMpOm3vWfaqAwv0Tdx21meuvIfGD2pJs4BSzAe0JgOgTEWfOnb%2BTVQqU7ufGNfNa%2FShGX%2FfhChbIrF2oRzsi%2F8zCKtAxzxMhwX%2BWqWS1par&X-Amz-Signature=80d89ebd2e7baa61cbd40c8e1545322c544d553b8da7e983d43ea245d7e8985c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OS5NHR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T011621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHShRGNutOASE49jB8Er%2FuxuyWwtPXAMmM7IcqADVY8rAiBC1ee3PIjnzicaq8U9U2rg%2Bnhz2Z5MLoisE5%2FOK6alBir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM5ZjWKPW3NwHSA1upKtwDEmLww%2FbgB2I7OzNtk2p%2FWjw0MHRvRHXV6ruCTANyNzpm%2FiQ120zJ7z%2FZqVZc4n3TlT3vVvPXKM6RR63DSULSc9PkkW8hIxhoIvO7UkRJTO1J0mk4qrezIV01ocsfzeVD8keo3T%2FTRXn%2BSR5Tp5i%2F0Y%2FHApp%2B39b1GwU1EZRonrWGPjEKGboeJLh%2BXsuo1jp7XrroNL0uOldBgv9Xc8zmoHosArrZcO9%2FYvO34gz4rJ94d%2BuhDco%2FYDov39PBB7f7D0Kem8IyT%2Bvr%2FCTbldVkOF99UH19ULblPo%2B07Y6Iiu10YFrPsTV6pX2aKnRxtJ%2Bglhx7kIUHd0TJUY7O3PO28tbBiOk%2B08xYV27Ngd6HFxNKtL6EFqJZBsVvIVVi%2FTKOAA9dhyb%2FxHVpiQNzAryy8JshyGCtE12pxsnJ1gqQdubnBqvG4nTZkpEYHSANMTLrnARL5n9rmDffwkMG%2FgZ9fNIGLxNQjiNRMrTJZ09%2FFIl%2FrxvHEi8HQrf4yd581Maw4eSSZIgexmxI5YHIi6FXtZE5wqW6XrcxYkVdWy1z%2FA0ByN%2FdgAXE1pMr4X5eOc02c7aADeB8pt9JidQwkvzEM3gzKBfeteDuEcle%2Bns6WZ6N8jTWoRPbWfDALSgwxvzlxwY6pgEqs7mojOFmR8vZjHf8jCoRZYlzYW45Xf43b%2BmZX7vkqRtFmRcbCyn5mJly8LgHqpmcJu6vCspeOAs%2Ff3%2FGPe65cixxB%2Bg1f4%2FkcAkUkMH5yA%2BlfHu2TeMpOm3vWfaqAwv0Tdx21meuvIfGD2pJs4BSzAe0JgOgTEWfOnb%2BTVQqU7ufGNfNa%2FShGX%2FfhChbIrF2oRzsi%2F8zCKtAxzxMhwX%2BWqWS1par&X-Amz-Signature=5a827f4852684d2879ca15406311ba8d9206705eb32d3bbf500c5c2d122db295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OS5NHR%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T011621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHShRGNutOASE49jB8Er%2FuxuyWwtPXAMmM7IcqADVY8rAiBC1ee3PIjnzicaq8U9U2rg%2Bnhz2Z5MLoisE5%2FOK6alBir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM5ZjWKPW3NwHSA1upKtwDEmLww%2FbgB2I7OzNtk2p%2FWjw0MHRvRHXV6ruCTANyNzpm%2FiQ120zJ7z%2FZqVZc4n3TlT3vVvPXKM6RR63DSULSc9PkkW8hIxhoIvO7UkRJTO1J0mk4qrezIV01ocsfzeVD8keo3T%2FTRXn%2BSR5Tp5i%2F0Y%2FHApp%2B39b1GwU1EZRonrWGPjEKGboeJLh%2BXsuo1jp7XrroNL0uOldBgv9Xc8zmoHosArrZcO9%2FYvO34gz4rJ94d%2BuhDco%2FYDov39PBB7f7D0Kem8IyT%2Bvr%2FCTbldVkOF99UH19ULblPo%2B07Y6Iiu10YFrPsTV6pX2aKnRxtJ%2Bglhx7kIUHd0TJUY7O3PO28tbBiOk%2B08xYV27Ngd6HFxNKtL6EFqJZBsVvIVVi%2FTKOAA9dhyb%2FxHVpiQNzAryy8JshyGCtE12pxsnJ1gqQdubnBqvG4nTZkpEYHSANMTLrnARL5n9rmDffwkMG%2FgZ9fNIGLxNQjiNRMrTJZ09%2FFIl%2FrxvHEi8HQrf4yd581Maw4eSSZIgexmxI5YHIi6FXtZE5wqW6XrcxYkVdWy1z%2FA0ByN%2FdgAXE1pMr4X5eOc02c7aADeB8pt9JidQwkvzEM3gzKBfeteDuEcle%2Bns6WZ6N8jTWoRPbWfDALSgwxvzlxwY6pgEqs7mojOFmR8vZjHf8jCoRZYlzYW45Xf43b%2BmZX7vkqRtFmRcbCyn5mJly8LgHqpmcJu6vCspeOAs%2Ff3%2FGPe65cixxB%2Bg1f4%2FkcAkUkMH5yA%2BlfHu2TeMpOm3vWfaqAwv0Tdx21meuvIfGD2pJs4BSzAe0JgOgTEWfOnb%2BTVQqU7ufGNfNa%2FShGX%2FfhChbIrF2oRzsi%2F8zCKtAxzxMhwX%2BWqWS1par&X-Amz-Signature=37eb2171433517f318d91f1baf1ae2d8c2876c3a3ea7b9a3e1496eef29630714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXWBYL3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T011620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA51wUgSFA5bxjwXkhQziYh1M0qepROgRrRSNvSb2wAVAiEApsSHOd6VbjEHyyUeXM%2FytDQlvIkrzJOwGKUpgcclTCUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIGgsLmJUIu3pSQDYircA5xCXXaAN7P6XmN2wStrwlbFRpTc22YtDxkEzyLdK7oPUAZj6hRcyFSsJ6%2F7ryD%2F%2FnBBM5zM8XbK8fzLpHd3BH1wxqSX2vp58kx0%2FXXDmeBew7dh%2Fg9Kq6TDR4j%2FpvpgVOQ0JD7FYLrXnywUItqcdtQ3VHMXTtiHKnPoAzLx%2Ba77z1qRS2tx%2BR8p4mZ1T6lisLRF3KZAS92wjD1GJNnaPvPHMTV%2FNgf%2BxKG0RIsRMsluQfEwlc7f8ps9I1GWFzxm9L9aElZVQzp1ZpwnFhAO4kXdskkmVjqJA58Dc6aQY%2FzBNp6f7Onsk67wsykwUi1QZdmyi%2BMjqgHfAiubezbVnv9nV23LgMFob4AcuQHw0k98zHQVxBzrVnZdv%2ByrhCIMYfIGEgETV5kGO6U8R66IgD3C3APh0sXGdd8lAXQpGMSWgchFnCZrlRd7ktjn5o%2BcXKGiBooitr5b70k7K%2F2kD2G%2F91Q17%2BEzXAVOMn3aZmuOiBpoNSvwXWkkOHgRstS2fk2XhZv1W4rZYlkLLbAcK7NAR%2FYXCD4qKeldebU%2B9NQ2u0gbv%2FPvRQhr8Ye86qqgOEvLR1CB1n6dV%2BTUYh02unmBBWuYBBj1jlJE5%2Bor3nbYpzi02RBHQHmzDLOjMOb75ccGOqUB3%2B2clNFDe%2Fnua%2FlOitChB%2F1hGo%2F4qU9HedDjHPOlVBEwoyKZRHNm52poOIm2FDojBj%2FBINJ6CfZn9sSolisEqk27dD2pjfZPQTqOIhSZQ6yOY9Lh7I0XaNYynEVc%2BjO1mz6vhmb0hrvBZN2erEj0rnsN6qYXVixC6Fqyg2PqpigHdIPBXKpoRPvbXQryZQv3rnVDNvOwwtzX6q%2B6NmtYEROijLm9&X-Amz-Signature=4e2114a3a85d539cb06edc8ff667d5fcd8ffc7987b4b82a41f77b3ae5b95b94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

