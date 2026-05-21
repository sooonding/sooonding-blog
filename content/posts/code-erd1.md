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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2INENFL%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T034244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDROMr7zswR52uOXCKA1eRB0qhMuYUIgjzJjC%2BizxTLagIhAPZYA%2FWFDSjbc%2Bh8mhAQ3iPTDAB0MaiP0e20NWkykElJKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA6ASDWMsSvFVafFQq3AOhkbVY8inRDztgMlLK9olDdByPAeQrIaWU5B0CMrLtsz5agnJl8qqCMGdY2AcEdCPkVdE7OdXp6%2BTb%2BBLFKiAQlO6QgQ6OHUQaYo%2FwvEwr8fmV%2FhgYMO4prbnYqnZzISVsgPIuBjsqPINUFhb3Z0Qm4CckDMkaurIwzc%2BAe7j1DB5AB%2FE4ap80jK0zddFSa7xLgMG6CUI%2BSIuFDJ7o%2BSjEokQjHGimzbKrmW6e7a6HZskn%2Fnrh1M%2F3TP9EILJUJlZBVhfwlxuO5qy%2B%2BCl7ixRgSkstnB8jkD7c27Hdj95ue9%2BNcR4p1kkBDwj56mGFpolVM8jR9iy35FLxHYIlrTEOb6ew71eKa2BX%2B0qAnOf4DrX47JNdAVSJAlmN%2BL8Abn9eBnpgm%2BSNpDZbK3mg8ZTzUjhSlR2X9wqfumhDARxwWLjmtbrqs2LxF66GwhfaViXtbP6o6lSDDXTRhAl6KB3VxGYXwgJh4BGE3P0ySmL0U438o4%2Fh4szlhLlE97vctzqSVcHm0oCGVU3HRk6MJxyILH9E0ItONZHE%2B63EDyimpaOYkeq30DQyvXPWSkAdVjaa7IKEabJuceoY8SdPMtZzaJ0Ym1Lj4CyHrd8CtNy8W5gRhAnzZk9AUYfBsDCu7rnQBjqkAfY3cVUCP9gUjwmB7H2dyVjAFSo9kvDsQ0Z0%2FHqw5g8raIO9GXG93WCe6XxIfAd%2BV3Y7dCQCro91H%2Fc5UoT44wigDqyHi83jKLOXSDYGJ0vTosLIXpPyIlIPrJURUugQGvt4vMi0JdOmkA4l8JiUSqE6sTtMlkdP9cnR640WtRtZy0Er8%2BilC4xnpnT0bAJsaVznaLi08XZuC9r3xVajAL%2BMIaNt&X-Amz-Signature=916f03aed001a1e06398b48828e8245f0addac1e8064c8c0934f23e8bb847e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNHHJPO%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T034245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFmPz9QGVHCgPA7MDj1%2Bt2ttKyNRU4Ub7dcP444c2zpwIhAIe%2Fj%2Fj8fbrRzvf2xUBIJ7%2FTMQKd86zNSzMVzgC4MfP%2FKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXutuMAjAavilvQvIq3APyvQzfFuae3zUVHKHehlEQ8gLo7h8SbOVyl2AUdONOwAM4jBKgwpCO75nBjM%2FNcCO6ZwVW198bba6aKm3iJF5w8Rglf25T9BTkdeVUoLgmaPRli3GtVAgPwlZBMdyS8VM%2FdrQN3VCuWSnZOteH1kdu0nlkSEPZSKgYFLEBnYv%2FpZZQRhi0EF68DILHM9cQw2ufuevnEJ9B6sZi9mB24dHbtp3JbYVWAJLfXhd%2FS%2Fkvib%2FaiThvCMD4fasoYhQnlh6ybeGwFauwynRxYK2sURNzqs1Ylkkfw7piipa8vsK7aoksLPQoDVcqV4K88vKMcW3hV3xz88WOq%2BbQLePG%2FYNpZMM2nhZzphtbhPatgm8WAbgY3Am%2F%2FXFBRULKe%2FipZgG1Xp29IHpKCoVPJwVdE4ZTnDg3YEhC9YneIu3E3tD2d1UqkAZa5UVcu3ezze5NCETNX5brz5IQve8J4KNgEminagGZxxF%2FW%2Bj3fg6qhXHLCKZk%2F4ZU%2FZclvZJx%2BkLo58lZVXs8AlRuEu0v3QOLc%2FVy%2FDcm5HUfc9RhyKpGCjG0b6ELT54Bq06WoDNY2ZeaiZGl%2FEmU0NPcjdoDlwE0G7vM5jXYG1IZf%2FX9x8roKnYg3Esniws4xpAkZCshuDCX7rnQBjqkAdZbHjA7u1efUNPck9msncXB4PdiE33%2FQXgDqbApoqcGHJPKAiEr63MOleIgZ5juSQ1upjAT6TNKH9J3nRQLPq1NWBgR858Q%2B3neoLtlG%2BGi5YDN0W2un%2Blf%2B8zBwGUQNBUua6rxBh9Rab7v2r6sT1ctefahE3KLnacJ97BUCekFqy4mGmo8O6Na1CE2MOd5EwDGKcNWHH9s2hHcjs1kJAE3w0j2&X-Amz-Signature=a46e01924bb3f91c3e8a2626f867d798db155ae023ed3f4c9a425ad24651e1f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNHHJPO%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T034245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFmPz9QGVHCgPA7MDj1%2Bt2ttKyNRU4Ub7dcP444c2zpwIhAIe%2Fj%2Fj8fbrRzvf2xUBIJ7%2FTMQKd86zNSzMVzgC4MfP%2FKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXutuMAjAavilvQvIq3APyvQzfFuae3zUVHKHehlEQ8gLo7h8SbOVyl2AUdONOwAM4jBKgwpCO75nBjM%2FNcCO6ZwVW198bba6aKm3iJF5w8Rglf25T9BTkdeVUoLgmaPRli3GtVAgPwlZBMdyS8VM%2FdrQN3VCuWSnZOteH1kdu0nlkSEPZSKgYFLEBnYv%2FpZZQRhi0EF68DILHM9cQw2ufuevnEJ9B6sZi9mB24dHbtp3JbYVWAJLfXhd%2FS%2Fkvib%2FaiThvCMD4fasoYhQnlh6ybeGwFauwynRxYK2sURNzqs1Ylkkfw7piipa8vsK7aoksLPQoDVcqV4K88vKMcW3hV3xz88WOq%2BbQLePG%2FYNpZMM2nhZzphtbhPatgm8WAbgY3Am%2F%2FXFBRULKe%2FipZgG1Xp29IHpKCoVPJwVdE4ZTnDg3YEhC9YneIu3E3tD2d1UqkAZa5UVcu3ezze5NCETNX5brz5IQve8J4KNgEminagGZxxF%2FW%2Bj3fg6qhXHLCKZk%2F4ZU%2FZclvZJx%2BkLo58lZVXs8AlRuEu0v3QOLc%2FVy%2FDcm5HUfc9RhyKpGCjG0b6ELT54Bq06WoDNY2ZeaiZGl%2FEmU0NPcjdoDlwE0G7vM5jXYG1IZf%2FX9x8roKnYg3Esniws4xpAkZCshuDCX7rnQBjqkAdZbHjA7u1efUNPck9msncXB4PdiE33%2FQXgDqbApoqcGHJPKAiEr63MOleIgZ5juSQ1upjAT6TNKH9J3nRQLPq1NWBgR858Q%2B3neoLtlG%2BGi5YDN0W2un%2Blf%2B8zBwGUQNBUua6rxBh9Rab7v2r6sT1ctefahE3KLnacJ97BUCekFqy4mGmo8O6Na1CE2MOd5EwDGKcNWHH9s2hHcjs1kJAE3w0j2&X-Amz-Signature=c97b4dcc26814af94fce39f1ff6b86bdefc59986e1023e07085b78d44dd88542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNHHJPO%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T034245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFmPz9QGVHCgPA7MDj1%2Bt2ttKyNRU4Ub7dcP444c2zpwIhAIe%2Fj%2Fj8fbrRzvf2xUBIJ7%2FTMQKd86zNSzMVzgC4MfP%2FKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXutuMAjAavilvQvIq3APyvQzfFuae3zUVHKHehlEQ8gLo7h8SbOVyl2AUdONOwAM4jBKgwpCO75nBjM%2FNcCO6ZwVW198bba6aKm3iJF5w8Rglf25T9BTkdeVUoLgmaPRli3GtVAgPwlZBMdyS8VM%2FdrQN3VCuWSnZOteH1kdu0nlkSEPZSKgYFLEBnYv%2FpZZQRhi0EF68DILHM9cQw2ufuevnEJ9B6sZi9mB24dHbtp3JbYVWAJLfXhd%2FS%2Fkvib%2FaiThvCMD4fasoYhQnlh6ybeGwFauwynRxYK2sURNzqs1Ylkkfw7piipa8vsK7aoksLPQoDVcqV4K88vKMcW3hV3xz88WOq%2BbQLePG%2FYNpZMM2nhZzphtbhPatgm8WAbgY3Am%2F%2FXFBRULKe%2FipZgG1Xp29IHpKCoVPJwVdE4ZTnDg3YEhC9YneIu3E3tD2d1UqkAZa5UVcu3ezze5NCETNX5brz5IQve8J4KNgEminagGZxxF%2FW%2Bj3fg6qhXHLCKZk%2F4ZU%2FZclvZJx%2BkLo58lZVXs8AlRuEu0v3QOLc%2FVy%2FDcm5HUfc9RhyKpGCjG0b6ELT54Bq06WoDNY2ZeaiZGl%2FEmU0NPcjdoDlwE0G7vM5jXYG1IZf%2FX9x8roKnYg3Esniws4xpAkZCshuDCX7rnQBjqkAdZbHjA7u1efUNPck9msncXB4PdiE33%2FQXgDqbApoqcGHJPKAiEr63MOleIgZ5juSQ1upjAT6TNKH9J3nRQLPq1NWBgR858Q%2B3neoLtlG%2BGi5YDN0W2un%2Blf%2B8zBwGUQNBUua6rxBh9Rab7v2r6sT1ctefahE3KLnacJ97BUCekFqy4mGmo8O6Na1CE2MOd5EwDGKcNWHH9s2hHcjs1kJAE3w0j2&X-Amz-Signature=92dd798a5c0777d1ac03c7f97b63d90882d913e77a9a51e769aa9f7ec908173a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNHHJPO%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T034245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFmPz9QGVHCgPA7MDj1%2Bt2ttKyNRU4Ub7dcP444c2zpwIhAIe%2Fj%2Fj8fbrRzvf2xUBIJ7%2FTMQKd86zNSzMVzgC4MfP%2FKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXutuMAjAavilvQvIq3APyvQzfFuae3zUVHKHehlEQ8gLo7h8SbOVyl2AUdONOwAM4jBKgwpCO75nBjM%2FNcCO6ZwVW198bba6aKm3iJF5w8Rglf25T9BTkdeVUoLgmaPRli3GtVAgPwlZBMdyS8VM%2FdrQN3VCuWSnZOteH1kdu0nlkSEPZSKgYFLEBnYv%2FpZZQRhi0EF68DILHM9cQw2ufuevnEJ9B6sZi9mB24dHbtp3JbYVWAJLfXhd%2FS%2Fkvib%2FaiThvCMD4fasoYhQnlh6ybeGwFauwynRxYK2sURNzqs1Ylkkfw7piipa8vsK7aoksLPQoDVcqV4K88vKMcW3hV3xz88WOq%2BbQLePG%2FYNpZMM2nhZzphtbhPatgm8WAbgY3Am%2F%2FXFBRULKe%2FipZgG1Xp29IHpKCoVPJwVdE4ZTnDg3YEhC9YneIu3E3tD2d1UqkAZa5UVcu3ezze5NCETNX5brz5IQve8J4KNgEminagGZxxF%2FW%2Bj3fg6qhXHLCKZk%2F4ZU%2FZclvZJx%2BkLo58lZVXs8AlRuEu0v3QOLc%2FVy%2FDcm5HUfc9RhyKpGCjG0b6ELT54Bq06WoDNY2ZeaiZGl%2FEmU0NPcjdoDlwE0G7vM5jXYG1IZf%2FX9x8roKnYg3Esniws4xpAkZCshuDCX7rnQBjqkAdZbHjA7u1efUNPck9msncXB4PdiE33%2FQXgDqbApoqcGHJPKAiEr63MOleIgZ5juSQ1upjAT6TNKH9J3nRQLPq1NWBgR858Q%2B3neoLtlG%2BGi5YDN0W2un%2Blf%2B8zBwGUQNBUua6rxBh9Rab7v2r6sT1ctefahE3KLnacJ97BUCekFqy4mGmo8O6Na1CE2MOd5EwDGKcNWHH9s2hHcjs1kJAE3w0j2&X-Amz-Signature=69155ac6a65eb99c45e4c1db5ff6465c3db5c9764cc9f0482d49c88ee524942e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNHHJPO%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T034245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCFmPz9QGVHCgPA7MDj1%2Bt2ttKyNRU4Ub7dcP444c2zpwIhAIe%2Fj%2Fj8fbrRzvf2xUBIJ7%2FTMQKd86zNSzMVzgC4MfP%2FKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXutuMAjAavilvQvIq3APyvQzfFuae3zUVHKHehlEQ8gLo7h8SbOVyl2AUdONOwAM4jBKgwpCO75nBjM%2FNcCO6ZwVW198bba6aKm3iJF5w8Rglf25T9BTkdeVUoLgmaPRli3GtVAgPwlZBMdyS8VM%2FdrQN3VCuWSnZOteH1kdu0nlkSEPZSKgYFLEBnYv%2FpZZQRhi0EF68DILHM9cQw2ufuevnEJ9B6sZi9mB24dHbtp3JbYVWAJLfXhd%2FS%2Fkvib%2FaiThvCMD4fasoYhQnlh6ybeGwFauwynRxYK2sURNzqs1Ylkkfw7piipa8vsK7aoksLPQoDVcqV4K88vKMcW3hV3xz88WOq%2BbQLePG%2FYNpZMM2nhZzphtbhPatgm8WAbgY3Am%2F%2FXFBRULKe%2FipZgG1Xp29IHpKCoVPJwVdE4ZTnDg3YEhC9YneIu3E3tD2d1UqkAZa5UVcu3ezze5NCETNX5brz5IQve8J4KNgEminagGZxxF%2FW%2Bj3fg6qhXHLCKZk%2F4ZU%2FZclvZJx%2BkLo58lZVXs8AlRuEu0v3QOLc%2FVy%2FDcm5HUfc9RhyKpGCjG0b6ELT54Bq06WoDNY2ZeaiZGl%2FEmU0NPcjdoDlwE0G7vM5jXYG1IZf%2FX9x8roKnYg3Esniws4xpAkZCshuDCX7rnQBjqkAdZbHjA7u1efUNPck9msncXB4PdiE33%2FQXgDqbApoqcGHJPKAiEr63MOleIgZ5juSQ1upjAT6TNKH9J3nRQLPq1NWBgR858Q%2B3neoLtlG%2BGi5YDN0W2un%2Blf%2B8zBwGUQNBUua6rxBh9Rab7v2r6sT1ctefahE3KLnacJ97BUCekFqy4mGmo8O6Na1CE2MOd5EwDGKcNWHH9s2hHcjs1kJAE3w0j2&X-Amz-Signature=9ebad1f04013a60562bb894f9801933d9a1c6919bbc984d7ef8c6681b66ada66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2INENFL%2F20260521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260521T034244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDROMr7zswR52uOXCKA1eRB0qhMuYUIgjzJjC%2BizxTLagIhAPZYA%2FWFDSjbc%2Bh8mhAQ3iPTDAB0MaiP0e20NWkykElJKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA6ASDWMsSvFVafFQq3AOhkbVY8inRDztgMlLK9olDdByPAeQrIaWU5B0CMrLtsz5agnJl8qqCMGdY2AcEdCPkVdE7OdXp6%2BTb%2BBLFKiAQlO6QgQ6OHUQaYo%2FwvEwr8fmV%2FhgYMO4prbnYqnZzISVsgPIuBjsqPINUFhb3Z0Qm4CckDMkaurIwzc%2BAe7j1DB5AB%2FE4ap80jK0zddFSa7xLgMG6CUI%2BSIuFDJ7o%2BSjEokQjHGimzbKrmW6e7a6HZskn%2Fnrh1M%2F3TP9EILJUJlZBVhfwlxuO5qy%2B%2BCl7ixRgSkstnB8jkD7c27Hdj95ue9%2BNcR4p1kkBDwj56mGFpolVM8jR9iy35FLxHYIlrTEOb6ew71eKa2BX%2B0qAnOf4DrX47JNdAVSJAlmN%2BL8Abn9eBnpgm%2BSNpDZbK3mg8ZTzUjhSlR2X9wqfumhDARxwWLjmtbrqs2LxF66GwhfaViXtbP6o6lSDDXTRhAl6KB3VxGYXwgJh4BGE3P0ySmL0U438o4%2Fh4szlhLlE97vctzqSVcHm0oCGVU3HRk6MJxyILH9E0ItONZHE%2B63EDyimpaOYkeq30DQyvXPWSkAdVjaa7IKEabJuceoY8SdPMtZzaJ0Ym1Lj4CyHrd8CtNy8W5gRhAnzZk9AUYfBsDCu7rnQBjqkAfY3cVUCP9gUjwmB7H2dyVjAFSo9kvDsQ0Z0%2FHqw5g8raIO9GXG93WCe6XxIfAd%2BV3Y7dCQCro91H%2Fc5UoT44wigDqyHi83jKLOXSDYGJ0vTosLIXpPyIlIPrJURUugQGvt4vMi0JdOmkA4l8JiUSqE6sTtMlkdP9cnR640WtRtZy0Er8%2BilC4xnpnT0bAJsaVznaLi08XZuC9r3xVajAL%2BMIaNt&X-Amz-Signature=1f2f9a18f3f7abe7a4f2758edf254855cc787d346bd2d2ec528d1eee91f07117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

