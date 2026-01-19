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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2H75E2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9xUkFp8k4Kc4xscm1t3k52Z2fQ5z9ymtGxQ8oih1oAAiEA6MA%2BXOOaIMaHVk3IzrEQI%2FBz0xyhiLb0HR74LBZEjJcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsKslxNNmZx61qNqircA6TyMimb1evOzfPAvezp%2FPAy8AzYAoBjiUCQD4e8qnhRsZms9zS%2FA11%2FnWZXNKTGiTETOyMkl%2FxRAwVxmuyr%2BUmB7RCIV7GgnMSblmzT2%2FQacK11Uo4X8vHuu5g139KC%2ByldicDK7Dx5NkNz6PwqP2y0VzYCQkIqHHIGBvnhNknF2ENnqBnh73vj2JhQ0adKOSuaCQPli81zNRjOmMEAlEvex5GHHrmF7thE%2F%2Fu%2BiuToiAYR%2BOKwj8DGi777xuWRKq7UAehI0WID4lhTjZv5WK1uRWPARStw38Ts%2BPI%2BI%2F2Os5qPVceHOL1aw3INfM4R3Nh38%2F7AcVnMr%2BUViGcAaQ5aXPGZWM7jQ5LGm%2F80s4mzu8E1wpepmgxN0rDr6OXBArQtWFotq%2FEtmFvuvsleX9ncIXcmApYO1Stt3xA6Q8iwBZdItGg2xDAxc%2BFsxW68hJvEvnXPOxW8oA2ykYFmZ7wdsrXZiSMoyR5ln5HXBy5ewUhoX18bgg3O52zEBiZ7KA8qeKY58%2F1jwu4XJEIf5n6YDjfR9s7Y6thaslRGpE3cxh1It6QY433zUtdlqCsIMZxiriFJyqsVuF%2Bd9t4Qb%2BaHuefn2t5H1kQWaHgl2jHRo8E2RDfCsCEcCviAMK3EtcsGOqUByxX2Y1GpcjeC%2BDEszHzxlCkhIck%2BpppO7eGjgbHx6k3naep7nbsBsKD0y416CE%2FdyCqTe%2BCYwy6batheFpL%2BhbZ7Tle9gwW6wdvtJSCMRNMPb6NZ7u7aHh9VwD%2BoWFjwZZXurXGxzNnDP9daLqqAIYNN%2B%2FtN7g%2F57iwL%2FzeFz3ZEOYDQPaIQ3ke5MLyiYJhyd2kr47cSNTszZDOnuUJiDTbG%2BIb%2F&X-Amz-Signature=09bb7737de470ffcd21f769ffcef07c25e2ff51974110d0b17548ba15a295d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXOWVJ7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7ZuCAPLD23eFpiGj7Hi8Wbi3iKnGNDiauaAmx4M9UQIhAMpDVgKWA2D4gDSoVHzVYRnoisiQm5ZRo5yDatZ6%2FfMXKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuEW3Y5cfPsiyZVqEq3ANpqZyeGEknvI8dt75G6iwzSkKFHtHHdOAMyiVA9SuIdlzPeuE54j4uYCL2pBJ51YiRdfnXfmZ5wTHlgWh61yWvf5NbDpEwQ8sNFS5fAuJwEDWf6lM86YciAdxuDAiosMYU0A9Rj3ndyQ4AndpkNyudcOVxCMG1BgSmZnGv77ebkKnHVSMloy6zCzMM1P%2FzCQXrswZgV99w1DlYnBkUgrj8UQAg5Zp6gef6GHt5sQhUdxMegJGvSGlW3ACkmT%2F8zSuUF%2FFJ1Mlr6aZjayw5NChGbPN7LCmyIHnfJGM%2BW9Y%2BQ85om4hzFoOT1ZwT5INqCHzAQO3qE7FCtc8ps98r2ZnlqP5WWkEmp4wNhw7AesRLix8DZH%2FHAA5hXVI8CRI4JCKaKdp%2Fp%2B6z7JZm1JGg7DzUll9VZfzyv9RHaPJNCkgWDqJfd8b%2BGgLdRn%2FOgqh7b%2BuJgsoLgXuHWeadhZjQTaekFqIO9CCJR5c7l5NA7xL3KrpM5Y2covbRvNLUGOSodYMY6bKBnB7UxS5I2IapsHn1Wj%2FuWwoADZQoI13e1YLXH3LoCERLlyBepsQU%2F0WXFJH56bBtISQq84vQw9KyuTtr%2F%2FK4PqwPkVQilYf%2FC%2BT6dp%2F0GA7Pt19gmFPOmzDSxLXLBjqkAfoqfL%2BAKAq0EoODOjLW0DDC0zQb0%2FqPKd6yBzWfSLG36kbPuPyUQoMw4BLAz4wFUhwmDfo7hFHdXvepctvQ7tKlSvC1%2FuGjnJIWvWL8sLZQQ8VXALVUmPWefeytSThkCY5CeqS65pdie6pYbpAXpo0SipTzq7cKijwQEFF9zQCNg%2FrN7h5LR3DVoTRSy8SljF5ASG86V7jj52WSd9oMomJNs%2FBm&X-Amz-Signature=34966faf8a3c722c561a06fc51f658afdf02e1d38114c90366253ab6e020a06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXOWVJ7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7ZuCAPLD23eFpiGj7Hi8Wbi3iKnGNDiauaAmx4M9UQIhAMpDVgKWA2D4gDSoVHzVYRnoisiQm5ZRo5yDatZ6%2FfMXKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuEW3Y5cfPsiyZVqEq3ANpqZyeGEknvI8dt75G6iwzSkKFHtHHdOAMyiVA9SuIdlzPeuE54j4uYCL2pBJ51YiRdfnXfmZ5wTHlgWh61yWvf5NbDpEwQ8sNFS5fAuJwEDWf6lM86YciAdxuDAiosMYU0A9Rj3ndyQ4AndpkNyudcOVxCMG1BgSmZnGv77ebkKnHVSMloy6zCzMM1P%2FzCQXrswZgV99w1DlYnBkUgrj8UQAg5Zp6gef6GHt5sQhUdxMegJGvSGlW3ACkmT%2F8zSuUF%2FFJ1Mlr6aZjayw5NChGbPN7LCmyIHnfJGM%2BW9Y%2BQ85om4hzFoOT1ZwT5INqCHzAQO3qE7FCtc8ps98r2ZnlqP5WWkEmp4wNhw7AesRLix8DZH%2FHAA5hXVI8CRI4JCKaKdp%2Fp%2B6z7JZm1JGg7DzUll9VZfzyv9RHaPJNCkgWDqJfd8b%2BGgLdRn%2FOgqh7b%2BuJgsoLgXuHWeadhZjQTaekFqIO9CCJR5c7l5NA7xL3KrpM5Y2covbRvNLUGOSodYMY6bKBnB7UxS5I2IapsHn1Wj%2FuWwoADZQoI13e1YLXH3LoCERLlyBepsQU%2F0WXFJH56bBtISQq84vQw9KyuTtr%2F%2FK4PqwPkVQilYf%2FC%2BT6dp%2F0GA7Pt19gmFPOmzDSxLXLBjqkAfoqfL%2BAKAq0EoODOjLW0DDC0zQb0%2FqPKd6yBzWfSLG36kbPuPyUQoMw4BLAz4wFUhwmDfo7hFHdXvepctvQ7tKlSvC1%2FuGjnJIWvWL8sLZQQ8VXALVUmPWefeytSThkCY5CeqS65pdie6pYbpAXpo0SipTzq7cKijwQEFF9zQCNg%2FrN7h5LR3DVoTRSy8SljF5ASG86V7jj52WSd9oMomJNs%2FBm&X-Amz-Signature=29eec23c36a2504595f111339fb28e479754ee425fba2c9fd8c7326ee188f1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXOWVJ7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7ZuCAPLD23eFpiGj7Hi8Wbi3iKnGNDiauaAmx4M9UQIhAMpDVgKWA2D4gDSoVHzVYRnoisiQm5ZRo5yDatZ6%2FfMXKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuEW3Y5cfPsiyZVqEq3ANpqZyeGEknvI8dt75G6iwzSkKFHtHHdOAMyiVA9SuIdlzPeuE54j4uYCL2pBJ51YiRdfnXfmZ5wTHlgWh61yWvf5NbDpEwQ8sNFS5fAuJwEDWf6lM86YciAdxuDAiosMYU0A9Rj3ndyQ4AndpkNyudcOVxCMG1BgSmZnGv77ebkKnHVSMloy6zCzMM1P%2FzCQXrswZgV99w1DlYnBkUgrj8UQAg5Zp6gef6GHt5sQhUdxMegJGvSGlW3ACkmT%2F8zSuUF%2FFJ1Mlr6aZjayw5NChGbPN7LCmyIHnfJGM%2BW9Y%2BQ85om4hzFoOT1ZwT5INqCHzAQO3qE7FCtc8ps98r2ZnlqP5WWkEmp4wNhw7AesRLix8DZH%2FHAA5hXVI8CRI4JCKaKdp%2Fp%2B6z7JZm1JGg7DzUll9VZfzyv9RHaPJNCkgWDqJfd8b%2BGgLdRn%2FOgqh7b%2BuJgsoLgXuHWeadhZjQTaekFqIO9CCJR5c7l5NA7xL3KrpM5Y2covbRvNLUGOSodYMY6bKBnB7UxS5I2IapsHn1Wj%2FuWwoADZQoI13e1YLXH3LoCERLlyBepsQU%2F0WXFJH56bBtISQq84vQw9KyuTtr%2F%2FK4PqwPkVQilYf%2FC%2BT6dp%2F0GA7Pt19gmFPOmzDSxLXLBjqkAfoqfL%2BAKAq0EoODOjLW0DDC0zQb0%2FqPKd6yBzWfSLG36kbPuPyUQoMw4BLAz4wFUhwmDfo7hFHdXvepctvQ7tKlSvC1%2FuGjnJIWvWL8sLZQQ8VXALVUmPWefeytSThkCY5CeqS65pdie6pYbpAXpo0SipTzq7cKijwQEFF9zQCNg%2FrN7h5LR3DVoTRSy8SljF5ASG86V7jj52WSd9oMomJNs%2FBm&X-Amz-Signature=de8848ebcf485ed19badd11a2e4dcb8943234a8bef77e2e6e069fd4b1955d565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXOWVJ7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7ZuCAPLD23eFpiGj7Hi8Wbi3iKnGNDiauaAmx4M9UQIhAMpDVgKWA2D4gDSoVHzVYRnoisiQm5ZRo5yDatZ6%2FfMXKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuEW3Y5cfPsiyZVqEq3ANpqZyeGEknvI8dt75G6iwzSkKFHtHHdOAMyiVA9SuIdlzPeuE54j4uYCL2pBJ51YiRdfnXfmZ5wTHlgWh61yWvf5NbDpEwQ8sNFS5fAuJwEDWf6lM86YciAdxuDAiosMYU0A9Rj3ndyQ4AndpkNyudcOVxCMG1BgSmZnGv77ebkKnHVSMloy6zCzMM1P%2FzCQXrswZgV99w1DlYnBkUgrj8UQAg5Zp6gef6GHt5sQhUdxMegJGvSGlW3ACkmT%2F8zSuUF%2FFJ1Mlr6aZjayw5NChGbPN7LCmyIHnfJGM%2BW9Y%2BQ85om4hzFoOT1ZwT5INqCHzAQO3qE7FCtc8ps98r2ZnlqP5WWkEmp4wNhw7AesRLix8DZH%2FHAA5hXVI8CRI4JCKaKdp%2Fp%2B6z7JZm1JGg7DzUll9VZfzyv9RHaPJNCkgWDqJfd8b%2BGgLdRn%2FOgqh7b%2BuJgsoLgXuHWeadhZjQTaekFqIO9CCJR5c7l5NA7xL3KrpM5Y2covbRvNLUGOSodYMY6bKBnB7UxS5I2IapsHn1Wj%2FuWwoADZQoI13e1YLXH3LoCERLlyBepsQU%2F0WXFJH56bBtISQq84vQw9KyuTtr%2F%2FK4PqwPkVQilYf%2FC%2BT6dp%2F0GA7Pt19gmFPOmzDSxLXLBjqkAfoqfL%2BAKAq0EoODOjLW0DDC0zQb0%2FqPKd6yBzWfSLG36kbPuPyUQoMw4BLAz4wFUhwmDfo7hFHdXvepctvQ7tKlSvC1%2FuGjnJIWvWL8sLZQQ8VXALVUmPWefeytSThkCY5CeqS65pdie6pYbpAXpo0SipTzq7cKijwQEFF9zQCNg%2FrN7h5LR3DVoTRSy8SljF5ASG86V7jj52WSd9oMomJNs%2FBm&X-Amz-Signature=bf804e1efb06f8a11507044383615328e5bf76b4a79382f23602ec3392f37e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXOWVJ7%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7ZuCAPLD23eFpiGj7Hi8Wbi3iKnGNDiauaAmx4M9UQIhAMpDVgKWA2D4gDSoVHzVYRnoisiQm5ZRo5yDatZ6%2FfMXKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuEW3Y5cfPsiyZVqEq3ANpqZyeGEknvI8dt75G6iwzSkKFHtHHdOAMyiVA9SuIdlzPeuE54j4uYCL2pBJ51YiRdfnXfmZ5wTHlgWh61yWvf5NbDpEwQ8sNFS5fAuJwEDWf6lM86YciAdxuDAiosMYU0A9Rj3ndyQ4AndpkNyudcOVxCMG1BgSmZnGv77ebkKnHVSMloy6zCzMM1P%2FzCQXrswZgV99w1DlYnBkUgrj8UQAg5Zp6gef6GHt5sQhUdxMegJGvSGlW3ACkmT%2F8zSuUF%2FFJ1Mlr6aZjayw5NChGbPN7LCmyIHnfJGM%2BW9Y%2BQ85om4hzFoOT1ZwT5INqCHzAQO3qE7FCtc8ps98r2ZnlqP5WWkEmp4wNhw7AesRLix8DZH%2FHAA5hXVI8CRI4JCKaKdp%2Fp%2B6z7JZm1JGg7DzUll9VZfzyv9RHaPJNCkgWDqJfd8b%2BGgLdRn%2FOgqh7b%2BuJgsoLgXuHWeadhZjQTaekFqIO9CCJR5c7l5NA7xL3KrpM5Y2covbRvNLUGOSodYMY6bKBnB7UxS5I2IapsHn1Wj%2FuWwoADZQoI13e1YLXH3LoCERLlyBepsQU%2F0WXFJH56bBtISQq84vQw9KyuTtr%2F%2FK4PqwPkVQilYf%2FC%2BT6dp%2F0GA7Pt19gmFPOmzDSxLXLBjqkAfoqfL%2BAKAq0EoODOjLW0DDC0zQb0%2FqPKd6yBzWfSLG36kbPuPyUQoMw4BLAz4wFUhwmDfo7hFHdXvepctvQ7tKlSvC1%2FuGjnJIWvWL8sLZQQ8VXALVUmPWefeytSThkCY5CeqS65pdie6pYbpAXpo0SipTzq7cKijwQEFF9zQCNg%2FrN7h5LR3DVoTRSy8SljF5ASG86V7jj52WSd9oMomJNs%2FBm&X-Amz-Signature=952f97186eb73fc333607333e332518752e02bb0f16e9e2881080c3eb0db0d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2H75E2%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9xUkFp8k4Kc4xscm1t3k52Z2fQ5z9ymtGxQ8oih1oAAiEA6MA%2BXOOaIMaHVk3IzrEQI%2FBz0xyhiLb0HR74LBZEjJcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsKslxNNmZx61qNqircA6TyMimb1evOzfPAvezp%2FPAy8AzYAoBjiUCQD4e8qnhRsZms9zS%2FA11%2FnWZXNKTGiTETOyMkl%2FxRAwVxmuyr%2BUmB7RCIV7GgnMSblmzT2%2FQacK11Uo4X8vHuu5g139KC%2ByldicDK7Dx5NkNz6PwqP2y0VzYCQkIqHHIGBvnhNknF2ENnqBnh73vj2JhQ0adKOSuaCQPli81zNRjOmMEAlEvex5GHHrmF7thE%2F%2Fu%2BiuToiAYR%2BOKwj8DGi777xuWRKq7UAehI0WID4lhTjZv5WK1uRWPARStw38Ts%2BPI%2BI%2F2Os5qPVceHOL1aw3INfM4R3Nh38%2F7AcVnMr%2BUViGcAaQ5aXPGZWM7jQ5LGm%2F80s4mzu8E1wpepmgxN0rDr6OXBArQtWFotq%2FEtmFvuvsleX9ncIXcmApYO1Stt3xA6Q8iwBZdItGg2xDAxc%2BFsxW68hJvEvnXPOxW8oA2ykYFmZ7wdsrXZiSMoyR5ln5HXBy5ewUhoX18bgg3O52zEBiZ7KA8qeKY58%2F1jwu4XJEIf5n6YDjfR9s7Y6thaslRGpE3cxh1It6QY433zUtdlqCsIMZxiriFJyqsVuF%2Bd9t4Qb%2BaHuefn2t5H1kQWaHgl2jHRo8E2RDfCsCEcCviAMK3EtcsGOqUByxX2Y1GpcjeC%2BDEszHzxlCkhIck%2BpppO7eGjgbHx6k3naep7nbsBsKD0y416CE%2FdyCqTe%2BCYwy6batheFpL%2BhbZ7Tle9gwW6wdvtJSCMRNMPb6NZ7u7aHh9VwD%2BoWFjwZZXurXGxzNnDP9daLqqAIYNN%2B%2FtN7g%2F57iwL%2FzeFz3ZEOYDQPaIQ3ke5MLyiYJhyd2kr47cSNTszZDOnuUJiDTbG%2BIb%2F&X-Amz-Signature=6034f3b191a7e9909b2878e5d53afc3bf88cfc0a721bd6aa7e2bfa68d17b75f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

