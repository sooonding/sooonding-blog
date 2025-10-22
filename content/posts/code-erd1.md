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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52X7X3X%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T024227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDLOqZ0IlRKceCHvmlkNnMsuvtgB84U%2FGAfTpBMsNqmnAiBw%2FrhpsyzHZuasAi%2FGTOGSfKiBy9K8b7OxEaifewZv0Cr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM2F7SVkU91X4%2FQ8iWKtwDRIv1uGQNecBSwf1BTNh13Ju9%2FyxUKUqt%2FW2aDnsdPfqwZ61ySqwfj1Ii0%2FrogF1gLRx8a5%2BqAN6ANkMpVvYvRqhXzfkeuRVX18Acax1AhzoeYFywZ7fr67WzSKeHn4vzeyvbPQEzbztZ9K%2Fncxs5ANqdugPtbHblGfdRs5lh6BcJBAi%2Fb9aqaem4NuZPj8ILk%2FT4ai8mDOTSh6LBS4W2XYC5lHLTF%2F0%2FXXvBQpoAtOXEnTG3zf1M%2FjIgWuyT4LPT2GjjntdjeE7PFBksoGYyCrgC5iJl85W79RJIfUVwWhoFORhYR9%2Fwdwm9XN4AlNRmfwhOhRtazWNZDt5M9hTvsk%2F002oxDOfs0CZO3yfRmx9XnLBhQzaJYGOGtFkVpB59PUOPJsC1hFUsoznhCTOB1rVVkeYwE7%2Ff9i%2F2K4J5jDGVcNt9LXR%2B5rWbJrovHzOmGo8Adm6ShTCGdbDvgCQsafWWt%2B2MY7Fbb9RbNhGu4ps%2BQtXrJjb4t2QXnWFpCp2bNT76tbB5PcFlzOzE%2FDAogpqI6AIjUgB2vgp8g0CMZA7KpvsI1iCyZVan3ro4d59pw0usmZ4EaVHYPBsDhmRLNBVOUZVqqHlFYwWPPaP8jZkzLfyS80bn8F5mLgcwpengxwY6pgEMC%2B1mNcrz5tTXWLw5shAfQkaFRD6%2BkCbCFRcITrbTbUzQHTqfnvMe2JcUxRBHDnPoeimor9m36FauZRmf%2BvK8UX19qQKoyWwJf4cTAJWaAqlm5sty2CxtVzigWj0YSnIEfcsmjgFu88d431jrsZ0yvDlHC3hH5MXYFor2qBcGUtk6Jv9nXcMdq1RCTty4QKC5f6bjA%2B2nKvjy1%2F7kqUs%2FWr8HR%2F6j&X-Amz-Signature=0fee8ae92aff93f2005f7e3d3622c943812660d200692f9850372e3b6bd65c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFWG6T7%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDDYv6Kbqov7dJXkgFLsAUvl25hTd6i%2Fpn1cK66WlJn5AiEA7hDMN9U1C6M4hvQ%2FvetusvlHKBZ5QC0YsMGo1X1xmfEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOpdzekbE9EMucDEWircA30LkXJGO%2BZEKfVHJTC80EC%2BeVx%2Bfim6jeiaMbN8tIWcblYDw9g1FH%2Fa%2FE2Qq4J5G8Nemr6hOi7cMm2ILx4T9selQCNHqogeUnNIvvtW5V8cLRbHuIvFAn3C1T%2BS65AlPV%2BJw3WnW6kmol99D1u3kXjL8mhD3vgBxiYyU3jxqYY0iwSrS71w2PeY0bnOkvTJ8RHo44KKQlUncRBEPLcuI6dwXYw36%2F%2BoEF1MBIxBe1nD6P3%2BCaOpduMo1AxJjtLAU9Me0%2FaILAvJV8afNJ2zOVEGfqxGQ5bixqyJvpTqvFAe%2FyCcfX8IdE%2FbC52Y1CXYuPRGWKanCfICFzkBzp5R7AqefcC%2BfXVlydjztOZ%2FAUlE4VU4U7xiomPdRZq1xQz3ZtSPtwwaCBHYXSs928QxG7WgGj0ep%2F1gRIU09RFhms21thbgfyY4tv3zQXLnTiQNUO0t%2B42PeWwkH7jlS%2FmQ%2FOWjZwlullDSM8pr8K3fdmLFtqKGk12%2F0aTJ%2FCXQNti6KVWPTl3VgLJ%2Fj4efhUyqAmo%2FP6t6A68GrR7PZZHwUiyY0o%2BKz9YzgdLqbYQglyMjVWzCQbk7UdO0RPBi4VLaGwgAOddX0HkwGHs3YY6P4l9rhJhvxqaWaljZGR0ZMNjo4McGOqUBZATYwoKpfUj6Dp%2Fp3C48dQg%2FtiEw8ZGHdoW5ep5asM6LnpD4raVc9qtg23J67Rt6fZ05Ok8veodol1GUu4UUIpKk75NTETEk%2FgkcghEu7PH00sr%2F1CcEYP0eSJbypquWcjNEKmDKPn1U3jv%2Fy%2FxJaljDxG4JvzRw6PkaIM%2FbiOyBIjBMdRDNKmcVBHZdJYQ8zKkfeAlvoK%2FEMylOMrmMb3F5E90P&X-Amz-Signature=b9ca538acb6a6e25a9ebe75e95304ef37de97f997359e242d511507261f40c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFWG6T7%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDDYv6Kbqov7dJXkgFLsAUvl25hTd6i%2Fpn1cK66WlJn5AiEA7hDMN9U1C6M4hvQ%2FvetusvlHKBZ5QC0YsMGo1X1xmfEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOpdzekbE9EMucDEWircA30LkXJGO%2BZEKfVHJTC80EC%2BeVx%2Bfim6jeiaMbN8tIWcblYDw9g1FH%2Fa%2FE2Qq4J5G8Nemr6hOi7cMm2ILx4T9selQCNHqogeUnNIvvtW5V8cLRbHuIvFAn3C1T%2BS65AlPV%2BJw3WnW6kmol99D1u3kXjL8mhD3vgBxiYyU3jxqYY0iwSrS71w2PeY0bnOkvTJ8RHo44KKQlUncRBEPLcuI6dwXYw36%2F%2BoEF1MBIxBe1nD6P3%2BCaOpduMo1AxJjtLAU9Me0%2FaILAvJV8afNJ2zOVEGfqxGQ5bixqyJvpTqvFAe%2FyCcfX8IdE%2FbC52Y1CXYuPRGWKanCfICFzkBzp5R7AqefcC%2BfXVlydjztOZ%2FAUlE4VU4U7xiomPdRZq1xQz3ZtSPtwwaCBHYXSs928QxG7WgGj0ep%2F1gRIU09RFhms21thbgfyY4tv3zQXLnTiQNUO0t%2B42PeWwkH7jlS%2FmQ%2FOWjZwlullDSM8pr8K3fdmLFtqKGk12%2F0aTJ%2FCXQNti6KVWPTl3VgLJ%2Fj4efhUyqAmo%2FP6t6A68GrR7PZZHwUiyY0o%2BKz9YzgdLqbYQglyMjVWzCQbk7UdO0RPBi4VLaGwgAOddX0HkwGHs3YY6P4l9rhJhvxqaWaljZGR0ZMNjo4McGOqUBZATYwoKpfUj6Dp%2Fp3C48dQg%2FtiEw8ZGHdoW5ep5asM6LnpD4raVc9qtg23J67Rt6fZ05Ok8veodol1GUu4UUIpKk75NTETEk%2FgkcghEu7PH00sr%2F1CcEYP0eSJbypquWcjNEKmDKPn1U3jv%2Fy%2FxJaljDxG4JvzRw6PkaIM%2FbiOyBIjBMdRDNKmcVBHZdJYQ8zKkfeAlvoK%2FEMylOMrmMb3F5E90P&X-Amz-Signature=a875438d542f18495b4f1d94cd99456099ae816e9026c7c8d4fa9addb1d4f1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFWG6T7%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDDYv6Kbqov7dJXkgFLsAUvl25hTd6i%2Fpn1cK66WlJn5AiEA7hDMN9U1C6M4hvQ%2FvetusvlHKBZ5QC0YsMGo1X1xmfEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOpdzekbE9EMucDEWircA30LkXJGO%2BZEKfVHJTC80EC%2BeVx%2Bfim6jeiaMbN8tIWcblYDw9g1FH%2Fa%2FE2Qq4J5G8Nemr6hOi7cMm2ILx4T9selQCNHqogeUnNIvvtW5V8cLRbHuIvFAn3C1T%2BS65AlPV%2BJw3WnW6kmol99D1u3kXjL8mhD3vgBxiYyU3jxqYY0iwSrS71w2PeY0bnOkvTJ8RHo44KKQlUncRBEPLcuI6dwXYw36%2F%2BoEF1MBIxBe1nD6P3%2BCaOpduMo1AxJjtLAU9Me0%2FaILAvJV8afNJ2zOVEGfqxGQ5bixqyJvpTqvFAe%2FyCcfX8IdE%2FbC52Y1CXYuPRGWKanCfICFzkBzp5R7AqefcC%2BfXVlydjztOZ%2FAUlE4VU4U7xiomPdRZq1xQz3ZtSPtwwaCBHYXSs928QxG7WgGj0ep%2F1gRIU09RFhms21thbgfyY4tv3zQXLnTiQNUO0t%2B42PeWwkH7jlS%2FmQ%2FOWjZwlullDSM8pr8K3fdmLFtqKGk12%2F0aTJ%2FCXQNti6KVWPTl3VgLJ%2Fj4efhUyqAmo%2FP6t6A68GrR7PZZHwUiyY0o%2BKz9YzgdLqbYQglyMjVWzCQbk7UdO0RPBi4VLaGwgAOddX0HkwGHs3YY6P4l9rhJhvxqaWaljZGR0ZMNjo4McGOqUBZATYwoKpfUj6Dp%2Fp3C48dQg%2FtiEw8ZGHdoW5ep5asM6LnpD4raVc9qtg23J67Rt6fZ05Ok8veodol1GUu4UUIpKk75NTETEk%2FgkcghEu7PH00sr%2F1CcEYP0eSJbypquWcjNEKmDKPn1U3jv%2Fy%2FxJaljDxG4JvzRw6PkaIM%2FbiOyBIjBMdRDNKmcVBHZdJYQ8zKkfeAlvoK%2FEMylOMrmMb3F5E90P&X-Amz-Signature=45aef2652abb53e80c6b9baca1250cc36d74bab85d2123f2378dd49db5a5b545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFWG6T7%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDDYv6Kbqov7dJXkgFLsAUvl25hTd6i%2Fpn1cK66WlJn5AiEA7hDMN9U1C6M4hvQ%2FvetusvlHKBZ5QC0YsMGo1X1xmfEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOpdzekbE9EMucDEWircA30LkXJGO%2BZEKfVHJTC80EC%2BeVx%2Bfim6jeiaMbN8tIWcblYDw9g1FH%2Fa%2FE2Qq4J5G8Nemr6hOi7cMm2ILx4T9selQCNHqogeUnNIvvtW5V8cLRbHuIvFAn3C1T%2BS65AlPV%2BJw3WnW6kmol99D1u3kXjL8mhD3vgBxiYyU3jxqYY0iwSrS71w2PeY0bnOkvTJ8RHo44KKQlUncRBEPLcuI6dwXYw36%2F%2BoEF1MBIxBe1nD6P3%2BCaOpduMo1AxJjtLAU9Me0%2FaILAvJV8afNJ2zOVEGfqxGQ5bixqyJvpTqvFAe%2FyCcfX8IdE%2FbC52Y1CXYuPRGWKanCfICFzkBzp5R7AqefcC%2BfXVlydjztOZ%2FAUlE4VU4U7xiomPdRZq1xQz3ZtSPtwwaCBHYXSs928QxG7WgGj0ep%2F1gRIU09RFhms21thbgfyY4tv3zQXLnTiQNUO0t%2B42PeWwkH7jlS%2FmQ%2FOWjZwlullDSM8pr8K3fdmLFtqKGk12%2F0aTJ%2FCXQNti6KVWPTl3VgLJ%2Fj4efhUyqAmo%2FP6t6A68GrR7PZZHwUiyY0o%2BKz9YzgdLqbYQglyMjVWzCQbk7UdO0RPBi4VLaGwgAOddX0HkwGHs3YY6P4l9rhJhvxqaWaljZGR0ZMNjo4McGOqUBZATYwoKpfUj6Dp%2Fp3C48dQg%2FtiEw8ZGHdoW5ep5asM6LnpD4raVc9qtg23J67Rt6fZ05Ok8veodol1GUu4UUIpKk75NTETEk%2FgkcghEu7PH00sr%2F1CcEYP0eSJbypquWcjNEKmDKPn1U3jv%2Fy%2FxJaljDxG4JvzRw6PkaIM%2FbiOyBIjBMdRDNKmcVBHZdJYQ8zKkfeAlvoK%2FEMylOMrmMb3F5E90P&X-Amz-Signature=c95b384c075485dd526fd5e1867b3cf71421f87cd887cb277262b21e9280feea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFWG6T7%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T024228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDDYv6Kbqov7dJXkgFLsAUvl25hTd6i%2Fpn1cK66WlJn5AiEA7hDMN9U1C6M4hvQ%2FvetusvlHKBZ5QC0YsMGo1X1xmfEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOpdzekbE9EMucDEWircA30LkXJGO%2BZEKfVHJTC80EC%2BeVx%2Bfim6jeiaMbN8tIWcblYDw9g1FH%2Fa%2FE2Qq4J5G8Nemr6hOi7cMm2ILx4T9selQCNHqogeUnNIvvtW5V8cLRbHuIvFAn3C1T%2BS65AlPV%2BJw3WnW6kmol99D1u3kXjL8mhD3vgBxiYyU3jxqYY0iwSrS71w2PeY0bnOkvTJ8RHo44KKQlUncRBEPLcuI6dwXYw36%2F%2BoEF1MBIxBe1nD6P3%2BCaOpduMo1AxJjtLAU9Me0%2FaILAvJV8afNJ2zOVEGfqxGQ5bixqyJvpTqvFAe%2FyCcfX8IdE%2FbC52Y1CXYuPRGWKanCfICFzkBzp5R7AqefcC%2BfXVlydjztOZ%2FAUlE4VU4U7xiomPdRZq1xQz3ZtSPtwwaCBHYXSs928QxG7WgGj0ep%2F1gRIU09RFhms21thbgfyY4tv3zQXLnTiQNUO0t%2B42PeWwkH7jlS%2FmQ%2FOWjZwlullDSM8pr8K3fdmLFtqKGk12%2F0aTJ%2FCXQNti6KVWPTl3VgLJ%2Fj4efhUyqAmo%2FP6t6A68GrR7PZZHwUiyY0o%2BKz9YzgdLqbYQglyMjVWzCQbk7UdO0RPBi4VLaGwgAOddX0HkwGHs3YY6P4l9rhJhvxqaWaljZGR0ZMNjo4McGOqUBZATYwoKpfUj6Dp%2Fp3C48dQg%2FtiEw8ZGHdoW5ep5asM6LnpD4raVc9qtg23J67Rt6fZ05Ok8veodol1GUu4UUIpKk75NTETEk%2FgkcghEu7PH00sr%2F1CcEYP0eSJbypquWcjNEKmDKPn1U3jv%2Fy%2FxJaljDxG4JvzRw6PkaIM%2FbiOyBIjBMdRDNKmcVBHZdJYQ8zKkfeAlvoK%2FEMylOMrmMb3F5E90P&X-Amz-Signature=0f5dddb2673abe1abd7ea213a460ebb4aed385d2f8db22fbe0d1d981b937d847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52X7X3X%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T024227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDLOqZ0IlRKceCHvmlkNnMsuvtgB84U%2FGAfTpBMsNqmnAiBw%2FrhpsyzHZuasAi%2FGTOGSfKiBy9K8b7OxEaifewZv0Cr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM2F7SVkU91X4%2FQ8iWKtwDRIv1uGQNecBSwf1BTNh13Ju9%2FyxUKUqt%2FW2aDnsdPfqwZ61ySqwfj1Ii0%2FrogF1gLRx8a5%2BqAN6ANkMpVvYvRqhXzfkeuRVX18Acax1AhzoeYFywZ7fr67WzSKeHn4vzeyvbPQEzbztZ9K%2Fncxs5ANqdugPtbHblGfdRs5lh6BcJBAi%2Fb9aqaem4NuZPj8ILk%2FT4ai8mDOTSh6LBS4W2XYC5lHLTF%2F0%2FXXvBQpoAtOXEnTG3zf1M%2FjIgWuyT4LPT2GjjntdjeE7PFBksoGYyCrgC5iJl85W79RJIfUVwWhoFORhYR9%2Fwdwm9XN4AlNRmfwhOhRtazWNZDt5M9hTvsk%2F002oxDOfs0CZO3yfRmx9XnLBhQzaJYGOGtFkVpB59PUOPJsC1hFUsoznhCTOB1rVVkeYwE7%2Ff9i%2F2K4J5jDGVcNt9LXR%2B5rWbJrovHzOmGo8Adm6ShTCGdbDvgCQsafWWt%2B2MY7Fbb9RbNhGu4ps%2BQtXrJjb4t2QXnWFpCp2bNT76tbB5PcFlzOzE%2FDAogpqI6AIjUgB2vgp8g0CMZA7KpvsI1iCyZVan3ro4d59pw0usmZ4EaVHYPBsDhmRLNBVOUZVqqHlFYwWPPaP8jZkzLfyS80bn8F5mLgcwpengxwY6pgEMC%2B1mNcrz5tTXWLw5shAfQkaFRD6%2BkCbCFRcITrbTbUzQHTqfnvMe2JcUxRBHDnPoeimor9m36FauZRmf%2BvK8UX19qQKoyWwJf4cTAJWaAqlm5sty2CxtVzigWj0YSnIEfcsmjgFu88d431jrsZ0yvDlHC3hH5MXYFor2qBcGUtk6Jv9nXcMdq1RCTty4QKC5f6bjA%2B2nKvjy1%2F7kqUs%2FWr8HR%2F6j&X-Amz-Signature=4ff83c1de4a89938b7dcef3c74dd7df34ebb7a7d9a34db54e6ddaef64bdf24a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

