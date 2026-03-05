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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QKMTSL%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0dPt9zLTQx%2F59D4Ptqcr4hzmonQbejHb0UJbTAVVMBAiBCq1Ziiln1iUOl5dxj9Z%2FjJ9lw9KSSeL9ll4V8ZdWSiCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhJFzU9x8K3sI%2F0MoKtwDMJs9QppDmr6dZIuJ7YZmUoNbu%2F83Uws6tx93Ds5pK3UpnySCFptJ1jKGKTm3U1%2Bigt5r9TuTZ4cFu8rOpVgbn51UYkKeSGHkjdnWVq4U%2Bf2Zcro%2F3UE3nz%2BUsgpZQDUt8okGVoCeVZeHRn2ylc63Tk2WfxgFyF7F03jH6bGVgrtaVbvzexpPJ9fUzHMvNJJILS%2FRwWMjbCPfeDuzELdCxqUF93%2ByCOzNsy%2BS1GD1%2BvsQ2HKdl4JIetgajKQq8Z58cJf9XM4OuWt7N4kz3jTLZXHeoVjtpdbcjAShW3EaqdswMInKmyJYDJwvHv4cVkl3Wcka0YxbCDkM3AKLf3%2Birbpzp42C2ho82ihJu1LozXooeWmnEdGF92OtmAvV9aXFu4VD4s1nkx6B4JvxB0PPWbdNdJl1wySkIMHnwqL4hAvl%2B4g1e8LdidhhasrMhwtyh3T02GE6EFzfbU7BRhDU1dRZMEOeQIBGKCTRNcKVVzFbNZDLoVn90xmfzHCJZ8uUQ66Zrd7jpzA8tiTYOtm2G3U7LQ4e9vT7%2BQbh5P32b73NBZncnDMnU3zAniSUi8gOkP25gAUYJECE2LYw1zReMv0T0Vbf%2FGDpdg9gRBsdR4u2tNJDMSOjEz%2Bb%2BmIw6sWjzQY6pgE8ImsavTZ3gaaMdfV6S4cy57SwbvPRtKeDYwXDl6vu0mRe%2BJWmvKUqmrU5Md2NkWYv2kHdxyrbYRlJjJGgD%2FSYBHpxfNJmpJSUdtJM0R%2B0qmX1OxXTz%2FeYWZw6HgKfRHA23z2z%2Bs9LzvAIw9FmZPTIH3ia3OEgS13hjawQI%2FleGLaZ%2FyTFugcSWruACwq97kKRE7pmGcMGFn7e9WbKVaX4ld1rNCje&X-Amz-Signature=61ddad48f85a36d0a3e7a15f8d25d2ebe3afd813e5170d61163a340dc4df81cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIRGRW3%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3QUJPl10bfYSnhpSdT6opLTF0SKzLiomMlUxkeSxhAIhAKLeu49e%2B48hDEHgJgYuWBKQcOs8XllYjcdppjogtU4cKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEtbj%2BsjLeqtyQyoq3AMTepZwrsvtbY8z%2BkmlWjqOvPT%2F3g0TORR%2BNeVG4SVMBa%2FyymyBasNPCXRcOA3Ntu09Z%2BPGpI1aP3VAUos0wCx8TADS2R6fjfF8a3%2Fzs%2BcSjkP9s%2FH99T6mC1TrsD9syUYjeULV7yIyBRqr6qTr%2B6ZYh46%2BT3SBB77cQ8XaXb8AJX2zjs3ail%2BmKMnGc5qhHQbC0hQcN9IVkVw%2FW9cY0qnzf%2B7GdC96jJkmoZ2InZ9Yni5mfymfXI8xNhRgUHnb3h4fYU33wP5PLJxmrgi2dEpQmf8Ye6PXK5WOihQGPdqfvTmTxfg%2FvDl2bROn8PVx6mpM%2B26yXiSPV4mjxBDLclh48ZDtdstk0gb0DcQkjAGf5m9DEgjXRAP8VJQr8yHKnUsMjy0SodWmcWJ0G6jd%2FAyFBehkXdTwc2N0dmMYv2fUnTg8oa5p8MfGlU1k%2Bgbvsi4vV36K%2B1r90mP8q6hdm7NgGXqe7WQ%2F7rgT236cWZsnaKHSLbNnOXppznzQDScVAzuFM0tClH%2FxhZ2yRJyqCwjGAL5%2BNlZjcCOVS%2FYhkcbbhCxod9VtbBgMM2m0qJpMj0n3CbQMhQXUv4wjbXaxNevWDAOeTpy2Zm48uKaBTTLQgem9MklGAMmAygxXdjD2xaPNBjqkAc5E%2BEFDMGbf0BVToNdL2qSwH0ksxfHSJ%2FuVB9ikO6O%2FFBVGSyf7d8qkruI4426%2FGF7mirK6Wsb9btZ5gbxFydP5Px4qt4UZkIU6T8Cblby4Pv6WoHwPHD3%2FPKPW7ghkKrkndQ5Gzee4mMjVZcd8%2Fb5TLdrgp19mtfYhd6fK1VO3xZ755PpCMg9hOM4wImbZMzKlxWh2IwwOig%2Bnn8km4AG0Oak4&X-Amz-Signature=7d1ea8fb19209625a94b17943cee504c00fed10e9af4f3c5ab6cf148a835dc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIRGRW3%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3QUJPl10bfYSnhpSdT6opLTF0SKzLiomMlUxkeSxhAIhAKLeu49e%2B48hDEHgJgYuWBKQcOs8XllYjcdppjogtU4cKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEtbj%2BsjLeqtyQyoq3AMTepZwrsvtbY8z%2BkmlWjqOvPT%2F3g0TORR%2BNeVG4SVMBa%2FyymyBasNPCXRcOA3Ntu09Z%2BPGpI1aP3VAUos0wCx8TADS2R6fjfF8a3%2Fzs%2BcSjkP9s%2FH99T6mC1TrsD9syUYjeULV7yIyBRqr6qTr%2B6ZYh46%2BT3SBB77cQ8XaXb8AJX2zjs3ail%2BmKMnGc5qhHQbC0hQcN9IVkVw%2FW9cY0qnzf%2B7GdC96jJkmoZ2InZ9Yni5mfymfXI8xNhRgUHnb3h4fYU33wP5PLJxmrgi2dEpQmf8Ye6PXK5WOihQGPdqfvTmTxfg%2FvDl2bROn8PVx6mpM%2B26yXiSPV4mjxBDLclh48ZDtdstk0gb0DcQkjAGf5m9DEgjXRAP8VJQr8yHKnUsMjy0SodWmcWJ0G6jd%2FAyFBehkXdTwc2N0dmMYv2fUnTg8oa5p8MfGlU1k%2Bgbvsi4vV36K%2B1r90mP8q6hdm7NgGXqe7WQ%2F7rgT236cWZsnaKHSLbNnOXppznzQDScVAzuFM0tClH%2FxhZ2yRJyqCwjGAL5%2BNlZjcCOVS%2FYhkcbbhCxod9VtbBgMM2m0qJpMj0n3CbQMhQXUv4wjbXaxNevWDAOeTpy2Zm48uKaBTTLQgem9MklGAMmAygxXdjD2xaPNBjqkAc5E%2BEFDMGbf0BVToNdL2qSwH0ksxfHSJ%2FuVB9ikO6O%2FFBVGSyf7d8qkruI4426%2FGF7mirK6Wsb9btZ5gbxFydP5Px4qt4UZkIU6T8Cblby4Pv6WoHwPHD3%2FPKPW7ghkKrkndQ5Gzee4mMjVZcd8%2Fb5TLdrgp19mtfYhd6fK1VO3xZ755PpCMg9hOM4wImbZMzKlxWh2IwwOig%2Bnn8km4AG0Oak4&X-Amz-Signature=e8425297d8e2de8cc9d984f21af8db52f2bbc7c417f6bd350fc34088fa75eae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIRGRW3%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3QUJPl10bfYSnhpSdT6opLTF0SKzLiomMlUxkeSxhAIhAKLeu49e%2B48hDEHgJgYuWBKQcOs8XllYjcdppjogtU4cKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEtbj%2BsjLeqtyQyoq3AMTepZwrsvtbY8z%2BkmlWjqOvPT%2F3g0TORR%2BNeVG4SVMBa%2FyymyBasNPCXRcOA3Ntu09Z%2BPGpI1aP3VAUos0wCx8TADS2R6fjfF8a3%2Fzs%2BcSjkP9s%2FH99T6mC1TrsD9syUYjeULV7yIyBRqr6qTr%2B6ZYh46%2BT3SBB77cQ8XaXb8AJX2zjs3ail%2BmKMnGc5qhHQbC0hQcN9IVkVw%2FW9cY0qnzf%2B7GdC96jJkmoZ2InZ9Yni5mfymfXI8xNhRgUHnb3h4fYU33wP5PLJxmrgi2dEpQmf8Ye6PXK5WOihQGPdqfvTmTxfg%2FvDl2bROn8PVx6mpM%2B26yXiSPV4mjxBDLclh48ZDtdstk0gb0DcQkjAGf5m9DEgjXRAP8VJQr8yHKnUsMjy0SodWmcWJ0G6jd%2FAyFBehkXdTwc2N0dmMYv2fUnTg8oa5p8MfGlU1k%2Bgbvsi4vV36K%2B1r90mP8q6hdm7NgGXqe7WQ%2F7rgT236cWZsnaKHSLbNnOXppznzQDScVAzuFM0tClH%2FxhZ2yRJyqCwjGAL5%2BNlZjcCOVS%2FYhkcbbhCxod9VtbBgMM2m0qJpMj0n3CbQMhQXUv4wjbXaxNevWDAOeTpy2Zm48uKaBTTLQgem9MklGAMmAygxXdjD2xaPNBjqkAc5E%2BEFDMGbf0BVToNdL2qSwH0ksxfHSJ%2FuVB9ikO6O%2FFBVGSyf7d8qkruI4426%2FGF7mirK6Wsb9btZ5gbxFydP5Px4qt4UZkIU6T8Cblby4Pv6WoHwPHD3%2FPKPW7ghkKrkndQ5Gzee4mMjVZcd8%2Fb5TLdrgp19mtfYhd6fK1VO3xZ755PpCMg9hOM4wImbZMzKlxWh2IwwOig%2Bnn8km4AG0Oak4&X-Amz-Signature=ca62319e22f55e3990e8973bd57c4b38882361e5b80fcef23a0246e2285c61e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIRGRW3%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3QUJPl10bfYSnhpSdT6opLTF0SKzLiomMlUxkeSxhAIhAKLeu49e%2B48hDEHgJgYuWBKQcOs8XllYjcdppjogtU4cKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEtbj%2BsjLeqtyQyoq3AMTepZwrsvtbY8z%2BkmlWjqOvPT%2F3g0TORR%2BNeVG4SVMBa%2FyymyBasNPCXRcOA3Ntu09Z%2BPGpI1aP3VAUos0wCx8TADS2R6fjfF8a3%2Fzs%2BcSjkP9s%2FH99T6mC1TrsD9syUYjeULV7yIyBRqr6qTr%2B6ZYh46%2BT3SBB77cQ8XaXb8AJX2zjs3ail%2BmKMnGc5qhHQbC0hQcN9IVkVw%2FW9cY0qnzf%2B7GdC96jJkmoZ2InZ9Yni5mfymfXI8xNhRgUHnb3h4fYU33wP5PLJxmrgi2dEpQmf8Ye6PXK5WOihQGPdqfvTmTxfg%2FvDl2bROn8PVx6mpM%2B26yXiSPV4mjxBDLclh48ZDtdstk0gb0DcQkjAGf5m9DEgjXRAP8VJQr8yHKnUsMjy0SodWmcWJ0G6jd%2FAyFBehkXdTwc2N0dmMYv2fUnTg8oa5p8MfGlU1k%2Bgbvsi4vV36K%2B1r90mP8q6hdm7NgGXqe7WQ%2F7rgT236cWZsnaKHSLbNnOXppznzQDScVAzuFM0tClH%2FxhZ2yRJyqCwjGAL5%2BNlZjcCOVS%2FYhkcbbhCxod9VtbBgMM2m0qJpMj0n3CbQMhQXUv4wjbXaxNevWDAOeTpy2Zm48uKaBTTLQgem9MklGAMmAygxXdjD2xaPNBjqkAc5E%2BEFDMGbf0BVToNdL2qSwH0ksxfHSJ%2FuVB9ikO6O%2FFBVGSyf7d8qkruI4426%2FGF7mirK6Wsb9btZ5gbxFydP5Px4qt4UZkIU6T8Cblby4Pv6WoHwPHD3%2FPKPW7ghkKrkndQ5Gzee4mMjVZcd8%2Fb5TLdrgp19mtfYhd6fK1VO3xZ755PpCMg9hOM4wImbZMzKlxWh2IwwOig%2Bnn8km4AG0Oak4&X-Amz-Signature=b3a6753deb0628ce45addffc2e89faa938702f32b59d329d9e8ac2b3eef1bfc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIRGRW3%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3QUJPl10bfYSnhpSdT6opLTF0SKzLiomMlUxkeSxhAIhAKLeu49e%2B48hDEHgJgYuWBKQcOs8XllYjcdppjogtU4cKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEtbj%2BsjLeqtyQyoq3AMTepZwrsvtbY8z%2BkmlWjqOvPT%2F3g0TORR%2BNeVG4SVMBa%2FyymyBasNPCXRcOA3Ntu09Z%2BPGpI1aP3VAUos0wCx8TADS2R6fjfF8a3%2Fzs%2BcSjkP9s%2FH99T6mC1TrsD9syUYjeULV7yIyBRqr6qTr%2B6ZYh46%2BT3SBB77cQ8XaXb8AJX2zjs3ail%2BmKMnGc5qhHQbC0hQcN9IVkVw%2FW9cY0qnzf%2B7GdC96jJkmoZ2InZ9Yni5mfymfXI8xNhRgUHnb3h4fYU33wP5PLJxmrgi2dEpQmf8Ye6PXK5WOihQGPdqfvTmTxfg%2FvDl2bROn8PVx6mpM%2B26yXiSPV4mjxBDLclh48ZDtdstk0gb0DcQkjAGf5m9DEgjXRAP8VJQr8yHKnUsMjy0SodWmcWJ0G6jd%2FAyFBehkXdTwc2N0dmMYv2fUnTg8oa5p8MfGlU1k%2Bgbvsi4vV36K%2B1r90mP8q6hdm7NgGXqe7WQ%2F7rgT236cWZsnaKHSLbNnOXppznzQDScVAzuFM0tClH%2FxhZ2yRJyqCwjGAL5%2BNlZjcCOVS%2FYhkcbbhCxod9VtbBgMM2m0qJpMj0n3CbQMhQXUv4wjbXaxNevWDAOeTpy2Zm48uKaBTTLQgem9MklGAMmAygxXdjD2xaPNBjqkAc5E%2BEFDMGbf0BVToNdL2qSwH0ksxfHSJ%2FuVB9ikO6O%2FFBVGSyf7d8qkruI4426%2FGF7mirK6Wsb9btZ5gbxFydP5Px4qt4UZkIU6T8Cblby4Pv6WoHwPHD3%2FPKPW7ghkKrkndQ5Gzee4mMjVZcd8%2Fb5TLdrgp19mtfYhd6fK1VO3xZ755PpCMg9hOM4wImbZMzKlxWh2IwwOig%2Bnn8km4AG0Oak4&X-Amz-Signature=dcba44a7e69a563290299f18fe34e42c66a3e724250ffea22903a58b8ad7be2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QKMTSL%2F20260305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260305T020730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0dPt9zLTQx%2F59D4Ptqcr4hzmonQbejHb0UJbTAVVMBAiBCq1Ziiln1iUOl5dxj9Z%2FjJ9lw9KSSeL9ll4V8ZdWSiCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhJFzU9x8K3sI%2F0MoKtwDMJs9QppDmr6dZIuJ7YZmUoNbu%2F83Uws6tx93Ds5pK3UpnySCFptJ1jKGKTm3U1%2Bigt5r9TuTZ4cFu8rOpVgbn51UYkKeSGHkjdnWVq4U%2Bf2Zcro%2F3UE3nz%2BUsgpZQDUt8okGVoCeVZeHRn2ylc63Tk2WfxgFyF7F03jH6bGVgrtaVbvzexpPJ9fUzHMvNJJILS%2FRwWMjbCPfeDuzELdCxqUF93%2ByCOzNsy%2BS1GD1%2BvsQ2HKdl4JIetgajKQq8Z58cJf9XM4OuWt7N4kz3jTLZXHeoVjtpdbcjAShW3EaqdswMInKmyJYDJwvHv4cVkl3Wcka0YxbCDkM3AKLf3%2Birbpzp42C2ho82ihJu1LozXooeWmnEdGF92OtmAvV9aXFu4VD4s1nkx6B4JvxB0PPWbdNdJl1wySkIMHnwqL4hAvl%2B4g1e8LdidhhasrMhwtyh3T02GE6EFzfbU7BRhDU1dRZMEOeQIBGKCTRNcKVVzFbNZDLoVn90xmfzHCJZ8uUQ66Zrd7jpzA8tiTYOtm2G3U7LQ4e9vT7%2BQbh5P32b73NBZncnDMnU3zAniSUi8gOkP25gAUYJECE2LYw1zReMv0T0Vbf%2FGDpdg9gRBsdR4u2tNJDMSOjEz%2Bb%2BmIw6sWjzQY6pgE8ImsavTZ3gaaMdfV6S4cy57SwbvPRtKeDYwXDl6vu0mRe%2BJWmvKUqmrU5Md2NkWYv2kHdxyrbYRlJjJGgD%2FSYBHpxfNJmpJSUdtJM0R%2B0qmX1OxXTz%2FeYWZw6HgKfRHA23z2z%2Bs9LzvAIw9FmZPTIH3ia3OEgS13hjawQI%2FleGLaZ%2FyTFugcSWruACwq97kKRE7pmGcMGFn7e9WbKVaX4ld1rNCje&X-Amz-Signature=af39b88fda6bd657d8a72252d1f5ac2c31704272e4252fe70db781837226adbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

