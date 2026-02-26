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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VW5SD7L%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T020616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCA0I4bSDoHX3CFy8wfOG0sg3JzFDAfzChE4wphefUKOAIhAPk26PnI1A8Wy1tvwi%2BRWb1wYdX%2FZNhZtPmmc0xG6ej%2FKv8DCBsQABoMNjM3NDIzMTgzODA1Igz%2Fj13MB8bltwSIcwQq3AOj72peR9l%2BWpCwCEVybj133A1gF%2BIVe59mvn%2F%2B60GJ8SYYwBtdshxNc7%2BpjJzFvgJiimDLy2h1760vGyD64YLWhISl19%2FW08xPRwmK5mqVJDmfB7kr%2BVc2O0IcUlw6jsilPnpFUDNKK3nYta36gKa9Wbu1ng0%2FoF7G91nDtLln2i17wAGAkUlrVoZXUG9oZqhGo9AqYKevYYvNfHY5ky1xSJHBR8t1WM7uMnZluoeQ1n8fcQqUEGkSOZLaWebSN18crwA%2FU6skmBBZPAfio7m7%2BgD76EXVWBtFxzZ8%2F5hNDt%2FWqKKzYK1N85xkMgbgHk6YdCZ9GAV%2FSN6C2Wh7VJ0spMBl3kY60%2BZOjCafaLyV2g3mIAWdJ46nDFOM7PHcdB7KK6NkTap5rp1UZP007o0hI0pE%2B%2FSEU%2FvnxQgg4bqJzz6EzXdEnCxdTfkkEWu2fp6I8TyBTfW%2Fqhm4B%2FCk2Lhj7DJwPClzop5r%2BLmkpt7fz9%2Bj46Q83hsikmogH5KhJ99jvrFWoNjY7fKrBuDBQhiNogxgHCMFJcgHlSz73rASHXFu0tVD4s3dKm29cWYrHove21PNnLn5S9afNobejwid%2Bg1Pf0%2BqaBUjGRh2aFwEOYfV4yGKq%2FL0ss11njCk0v7MBjqkAReofeGGClDInGctfHDQOKsksqK0Rmrk81E995h9Bxba%2FBkFqJ8vcjYcr1attwXE0hAwrMtYKUh7%2B6XhezEXio5UANmGNa%2B3b13dIp4REonVQGSUmG6QIZDuEVgyl5gRInCTqpWzReP6QOK9vXPDZguiqnOEDO8wY%2BzX21uoRvZkRoFh8j0PDtqmJToAaUUhPFiAiK4GJaZONL4hZMawPxUFdyvq&X-Amz-Signature=713756a4be514cd9e2ecc87ab45bee9a349faea088125a41d1083f23ac506f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFIVYXJ%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T020617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCmqyr92SMa3YpdtqKp7dkGvyvCj9wCOC9J%2FTZNv9sbHAIhALfHZGGnGDL9NpD90%2By35VS7WjBCVuWuwM%2F0xDkZg%2FmTKv8DCBsQABoMNjM3NDIzMTgzODA1IgysK0XNQdMlt%2F5Uivwq3AOOouao2%2Fvs8%2Bna4bvGBO3nmcbWUzGqNKcOQxEeECJ7b99JRPKkzxytsqnA6ff4omwGfnZ73he66SfPUSijyyKxO9kY0CMrmdROiRb10EGQNSLOKc7EVfaHn7V3wBqKYwW6TtL14zD%2F4Ix4%2BUrYndHLg8wgrlT8SMN9ewJroY1xgoln%2Fk6qlAGFrdaxTOWK5uZVJzHj4Wb7L9as1ns0WBNI5grKgos5ZiQ9CWJXxZlHcjsayltfP%2BphBLlow9ZT3SRvxz%2FVGhnxe1ETM3pyIvVouVw4f5fCuHjAZPFeSRrU7t0%2FO1MfcMCeV%2FofeGh76mX3ABKHHZB%2BjNJGezWTAOPbYtp4x%2FI79GqJuB05uQkHeqFZIcMqSAnn30vDAM3i4fInQPUrwLS%2FED5JAQaUIjpa5bXBL0%2FmaQRFF9ScBb76c05bJFHvjEOetGncSqU%2Bmd3eu0jm77yEovYzjG4BfNlc6r6tzyqmSAFyk00naeCKVHwtRdo9jl7pVv0rGP2w6rwj15p1%2BB2jD%2FYvhBlQfOHNdCGR6MfNzLliD37guslHFKWjLgf8x857s%2FU94n8KRFRZJyMcrYK6r98j32%2BkLGXrUNON5dj8blQj4BjyVlAwN4jRzgAnaa0kkK1elTDz0v7MBjqkAYZRa7JytATSIK2E0O4k4nrU4%2FECyutB4U1G3hisUWnZ9MjQ%2FSiHvnWTDHyMnktnUEpoVLBpHIxY%2FpPTYf%2FReWncD%2BSStKWcRrCFMBnjME8JrkWRuI2vq%2BUzcUYKmq7f%2BTeI5lnNUw%2F3O9Zj7oencSezBNG9spFNCQQp0%2FW3N5iYP%2FdY%2BCAegdgmWKzmYvhytTTjRTQHz%2BUqvuVf5h0NEuT093Wc&X-Amz-Signature=47a036187cbe02bd1f9f2fda394b5cdbb0d5ed36917bd2dc05ce9f62ebd1e5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFIVYXJ%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T020617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCmqyr92SMa3YpdtqKp7dkGvyvCj9wCOC9J%2FTZNv9sbHAIhALfHZGGnGDL9NpD90%2By35VS7WjBCVuWuwM%2F0xDkZg%2FmTKv8DCBsQABoMNjM3NDIzMTgzODA1IgysK0XNQdMlt%2F5Uivwq3AOOouao2%2Fvs8%2Bna4bvGBO3nmcbWUzGqNKcOQxEeECJ7b99JRPKkzxytsqnA6ff4omwGfnZ73he66SfPUSijyyKxO9kY0CMrmdROiRb10EGQNSLOKc7EVfaHn7V3wBqKYwW6TtL14zD%2F4Ix4%2BUrYndHLg8wgrlT8SMN9ewJroY1xgoln%2Fk6qlAGFrdaxTOWK5uZVJzHj4Wb7L9as1ns0WBNI5grKgos5ZiQ9CWJXxZlHcjsayltfP%2BphBLlow9ZT3SRvxz%2FVGhnxe1ETM3pyIvVouVw4f5fCuHjAZPFeSRrU7t0%2FO1MfcMCeV%2FofeGh76mX3ABKHHZB%2BjNJGezWTAOPbYtp4x%2FI79GqJuB05uQkHeqFZIcMqSAnn30vDAM3i4fInQPUrwLS%2FED5JAQaUIjpa5bXBL0%2FmaQRFF9ScBb76c05bJFHvjEOetGncSqU%2Bmd3eu0jm77yEovYzjG4BfNlc6r6tzyqmSAFyk00naeCKVHwtRdo9jl7pVv0rGP2w6rwj15p1%2BB2jD%2FYvhBlQfOHNdCGR6MfNzLliD37guslHFKWjLgf8x857s%2FU94n8KRFRZJyMcrYK6r98j32%2BkLGXrUNON5dj8blQj4BjyVlAwN4jRzgAnaa0kkK1elTDz0v7MBjqkAYZRa7JytATSIK2E0O4k4nrU4%2FECyutB4U1G3hisUWnZ9MjQ%2FSiHvnWTDHyMnktnUEpoVLBpHIxY%2FpPTYf%2FReWncD%2BSStKWcRrCFMBnjME8JrkWRuI2vq%2BUzcUYKmq7f%2BTeI5lnNUw%2F3O9Zj7oencSezBNG9spFNCQQp0%2FW3N5iYP%2FdY%2BCAegdgmWKzmYvhytTTjRTQHz%2BUqvuVf5h0NEuT093Wc&X-Amz-Signature=f6ee2e499b47757373a3437ea3d0465a37833599d0ec4021d6986df46219879f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFIVYXJ%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T020617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCmqyr92SMa3YpdtqKp7dkGvyvCj9wCOC9J%2FTZNv9sbHAIhALfHZGGnGDL9NpD90%2By35VS7WjBCVuWuwM%2F0xDkZg%2FmTKv8DCBsQABoMNjM3NDIzMTgzODA1IgysK0XNQdMlt%2F5Uivwq3AOOouao2%2Fvs8%2Bna4bvGBO3nmcbWUzGqNKcOQxEeECJ7b99JRPKkzxytsqnA6ff4omwGfnZ73he66SfPUSijyyKxO9kY0CMrmdROiRb10EGQNSLOKc7EVfaHn7V3wBqKYwW6TtL14zD%2F4Ix4%2BUrYndHLg8wgrlT8SMN9ewJroY1xgoln%2Fk6qlAGFrdaxTOWK5uZVJzHj4Wb7L9as1ns0WBNI5grKgos5ZiQ9CWJXxZlHcjsayltfP%2BphBLlow9ZT3SRvxz%2FVGhnxe1ETM3pyIvVouVw4f5fCuHjAZPFeSRrU7t0%2FO1MfcMCeV%2FofeGh76mX3ABKHHZB%2BjNJGezWTAOPbYtp4x%2FI79GqJuB05uQkHeqFZIcMqSAnn30vDAM3i4fInQPUrwLS%2FED5JAQaUIjpa5bXBL0%2FmaQRFF9ScBb76c05bJFHvjEOetGncSqU%2Bmd3eu0jm77yEovYzjG4BfNlc6r6tzyqmSAFyk00naeCKVHwtRdo9jl7pVv0rGP2w6rwj15p1%2BB2jD%2FYvhBlQfOHNdCGR6MfNzLliD37guslHFKWjLgf8x857s%2FU94n8KRFRZJyMcrYK6r98j32%2BkLGXrUNON5dj8blQj4BjyVlAwN4jRzgAnaa0kkK1elTDz0v7MBjqkAYZRa7JytATSIK2E0O4k4nrU4%2FECyutB4U1G3hisUWnZ9MjQ%2FSiHvnWTDHyMnktnUEpoVLBpHIxY%2FpPTYf%2FReWncD%2BSStKWcRrCFMBnjME8JrkWRuI2vq%2BUzcUYKmq7f%2BTeI5lnNUw%2F3O9Zj7oencSezBNG9spFNCQQp0%2FW3N5iYP%2FdY%2BCAegdgmWKzmYvhytTTjRTQHz%2BUqvuVf5h0NEuT093Wc&X-Amz-Signature=30ec7e19c5f21104961a30f613c9493b547e85268a73736ba405314936f20e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFIVYXJ%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T020617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCmqyr92SMa3YpdtqKp7dkGvyvCj9wCOC9J%2FTZNv9sbHAIhALfHZGGnGDL9NpD90%2By35VS7WjBCVuWuwM%2F0xDkZg%2FmTKv8DCBsQABoMNjM3NDIzMTgzODA1IgysK0XNQdMlt%2F5Uivwq3AOOouao2%2Fvs8%2Bna4bvGBO3nmcbWUzGqNKcOQxEeECJ7b99JRPKkzxytsqnA6ff4omwGfnZ73he66SfPUSijyyKxO9kY0CMrmdROiRb10EGQNSLOKc7EVfaHn7V3wBqKYwW6TtL14zD%2F4Ix4%2BUrYndHLg8wgrlT8SMN9ewJroY1xgoln%2Fk6qlAGFrdaxTOWK5uZVJzHj4Wb7L9as1ns0WBNI5grKgos5ZiQ9CWJXxZlHcjsayltfP%2BphBLlow9ZT3SRvxz%2FVGhnxe1ETM3pyIvVouVw4f5fCuHjAZPFeSRrU7t0%2FO1MfcMCeV%2FofeGh76mX3ABKHHZB%2BjNJGezWTAOPbYtp4x%2FI79GqJuB05uQkHeqFZIcMqSAnn30vDAM3i4fInQPUrwLS%2FED5JAQaUIjpa5bXBL0%2FmaQRFF9ScBb76c05bJFHvjEOetGncSqU%2Bmd3eu0jm77yEovYzjG4BfNlc6r6tzyqmSAFyk00naeCKVHwtRdo9jl7pVv0rGP2w6rwj15p1%2BB2jD%2FYvhBlQfOHNdCGR6MfNzLliD37guslHFKWjLgf8x857s%2FU94n8KRFRZJyMcrYK6r98j32%2BkLGXrUNON5dj8blQj4BjyVlAwN4jRzgAnaa0kkK1elTDz0v7MBjqkAYZRa7JytATSIK2E0O4k4nrU4%2FECyutB4U1G3hisUWnZ9MjQ%2FSiHvnWTDHyMnktnUEpoVLBpHIxY%2FpPTYf%2FReWncD%2BSStKWcRrCFMBnjME8JrkWRuI2vq%2BUzcUYKmq7f%2BTeI5lnNUw%2F3O9Zj7oencSezBNG9spFNCQQp0%2FW3N5iYP%2FdY%2BCAegdgmWKzmYvhytTTjRTQHz%2BUqvuVf5h0NEuT093Wc&X-Amz-Signature=52dc30173dc682be748df91611033058ed0e0c09506c725f4021b03dab475723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFIVYXJ%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T020617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCmqyr92SMa3YpdtqKp7dkGvyvCj9wCOC9J%2FTZNv9sbHAIhALfHZGGnGDL9NpD90%2By35VS7WjBCVuWuwM%2F0xDkZg%2FmTKv8DCBsQABoMNjM3NDIzMTgzODA1IgysK0XNQdMlt%2F5Uivwq3AOOouao2%2Fvs8%2Bna4bvGBO3nmcbWUzGqNKcOQxEeECJ7b99JRPKkzxytsqnA6ff4omwGfnZ73he66SfPUSijyyKxO9kY0CMrmdROiRb10EGQNSLOKc7EVfaHn7V3wBqKYwW6TtL14zD%2F4Ix4%2BUrYndHLg8wgrlT8SMN9ewJroY1xgoln%2Fk6qlAGFrdaxTOWK5uZVJzHj4Wb7L9as1ns0WBNI5grKgos5ZiQ9CWJXxZlHcjsayltfP%2BphBLlow9ZT3SRvxz%2FVGhnxe1ETM3pyIvVouVw4f5fCuHjAZPFeSRrU7t0%2FO1MfcMCeV%2FofeGh76mX3ABKHHZB%2BjNJGezWTAOPbYtp4x%2FI79GqJuB05uQkHeqFZIcMqSAnn30vDAM3i4fInQPUrwLS%2FED5JAQaUIjpa5bXBL0%2FmaQRFF9ScBb76c05bJFHvjEOetGncSqU%2Bmd3eu0jm77yEovYzjG4BfNlc6r6tzyqmSAFyk00naeCKVHwtRdo9jl7pVv0rGP2w6rwj15p1%2BB2jD%2FYvhBlQfOHNdCGR6MfNzLliD37guslHFKWjLgf8x857s%2FU94n8KRFRZJyMcrYK6r98j32%2BkLGXrUNON5dj8blQj4BjyVlAwN4jRzgAnaa0kkK1elTDz0v7MBjqkAYZRa7JytATSIK2E0O4k4nrU4%2FECyutB4U1G3hisUWnZ9MjQ%2FSiHvnWTDHyMnktnUEpoVLBpHIxY%2FpPTYf%2FReWncD%2BSStKWcRrCFMBnjME8JrkWRuI2vq%2BUzcUYKmq7f%2BTeI5lnNUw%2F3O9Zj7oencSezBNG9spFNCQQp0%2FW3N5iYP%2FdY%2BCAegdgmWKzmYvhytTTjRTQHz%2BUqvuVf5h0NEuT093Wc&X-Amz-Signature=e390d94db576a314b8a62f784097129e8b512c931c7a78754aa5e0fb1cd9189c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VW5SD7L%2F20260226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260226T020616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCA0I4bSDoHX3CFy8wfOG0sg3JzFDAfzChE4wphefUKOAIhAPk26PnI1A8Wy1tvwi%2BRWb1wYdX%2FZNhZtPmmc0xG6ej%2FKv8DCBsQABoMNjM3NDIzMTgzODA1Igz%2Fj13MB8bltwSIcwQq3AOj72peR9l%2BWpCwCEVybj133A1gF%2BIVe59mvn%2F%2B60GJ8SYYwBtdshxNc7%2BpjJzFvgJiimDLy2h1760vGyD64YLWhISl19%2FW08xPRwmK5mqVJDmfB7kr%2BVc2O0IcUlw6jsilPnpFUDNKK3nYta36gKa9Wbu1ng0%2FoF7G91nDtLln2i17wAGAkUlrVoZXUG9oZqhGo9AqYKevYYvNfHY5ky1xSJHBR8t1WM7uMnZluoeQ1n8fcQqUEGkSOZLaWebSN18crwA%2FU6skmBBZPAfio7m7%2BgD76EXVWBtFxzZ8%2F5hNDt%2FWqKKzYK1N85xkMgbgHk6YdCZ9GAV%2FSN6C2Wh7VJ0spMBl3kY60%2BZOjCafaLyV2g3mIAWdJ46nDFOM7PHcdB7KK6NkTap5rp1UZP007o0hI0pE%2B%2FSEU%2FvnxQgg4bqJzz6EzXdEnCxdTfkkEWu2fp6I8TyBTfW%2Fqhm4B%2FCk2Lhj7DJwPClzop5r%2BLmkpt7fz9%2Bj46Q83hsikmogH5KhJ99jvrFWoNjY7fKrBuDBQhiNogxgHCMFJcgHlSz73rASHXFu0tVD4s3dKm29cWYrHove21PNnLn5S9afNobejwid%2Bg1Pf0%2BqaBUjGRh2aFwEOYfV4yGKq%2FL0ss11njCk0v7MBjqkAReofeGGClDInGctfHDQOKsksqK0Rmrk81E995h9Bxba%2FBkFqJ8vcjYcr1attwXE0hAwrMtYKUh7%2B6XhezEXio5UANmGNa%2B3b13dIp4REonVQGSUmG6QIZDuEVgyl5gRInCTqpWzReP6QOK9vXPDZguiqnOEDO8wY%2BzX21uoRvZkRoFh8j0PDtqmJToAaUUhPFiAiK4GJaZONL4hZMawPxUFdyvq&X-Amz-Signature=ad3ab2b9516ce10e10f088dbaba88368e1db8b5f0e5c6fda32502884aef9e148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

