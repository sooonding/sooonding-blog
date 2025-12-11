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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFLDK7H%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T010641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE%2F7qhvwzji7Dns0ADf1uXJbcoOxzN6X5GJn7pHPTSktAiEAht3lBalmFSda8R1jWTsytIoMiEbF6PBVlk3jpTicG%2BIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHGEAaIy85hVBzUAyrcA6CLzO%2FUmefI6rTcQK3FkjeNbg4yxNPzjnqCiLaYbkM1DsXCHMWSvTqhEqw8KBjWESaCk1SLkDDlrLqAL6iDn%2BK7sqiiH7vZgTBjAK0at2dP0z4nvDShg5wkKP6g9G7ccHFqiqtgPSeG09ktcn%2FseSWxTnEziTe33kP58GUd2unYvV7549H%2FoXwKybxJjqLOrTrirU5PepqBW3cU%2FzghFcI%2BFs5lXCa4AfN3iJ8a3pXO6kQGtGUTDzfkbl2dtJLfCdl6lB7ooFUIqZxtoz88cGi%2F8YA%2BomrCWSn%2BMExfibkrOVmNKvOesNp1ZOSRbhdcRUctkXfN8Krb5jycxb1l%2BlhCoz%2FwP1XI9rq%2BetAQARPd%2FCG2kgKb26kyG0TZvHmoSxQ4VZT%2F5%2BsJ%2BlCgZQNh50qNMOhYqT0abnwkai%2BIgjLwxYLVx0I7lWplOGkIczPHuy%2FnUsKTSIdrrA9dW97dfvPqJ2Vset0VQWW7cdcCUbwN6yzglic1PfWB2EtfnEukXRKzf95LttCcXy54Y6hmXplCfSZNmuuArZ5fiVSD29cUiWeHHvS4tkcd6LA3uOmV8P%2BjGyvzysPVn2OerIn6ekGpGmm%2BR9WMaDjz4k7IfK7N6Mxjo%2FqCCrnTYl3dMKaj6MkGOqUBG98qhOAYcvYhgZl%2FHj4E4Q3b93vp5NU2PigOozqJRjdgELXqxwXInkqbPqBakFfmSA6%2BNIVouTNfIGPRBynTOKmYNbWpfqHUY8v3Zh827YiLX3YN6jIizwkTha3uKmN0ODSEPAnOGLbYcQ6TTpxJUfVCFPMy4rTvWovsOMIQFKf9me%2BqGEgNMn8FtT1uMp3XSH%2FN9sTngjvxe99C8ewHG%2BIJgubx&X-Amz-Signature=7c4466fe93ac818149593b337ffad23d8419c87c8c90f8660ce085e81511e539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GAM3WX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T010641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCVEOm09XSBQCzTV0%2FzU6CsAQDGELGrsGzsq1FCOHFumgIgE9bfQdvI84UE90Pmqu0ogQ0khh6Xx4afX7Z1dJ4H%2FgIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINAe8DftQM24V2WlCrcA5HGFpGKU7Meg9FHcWRtRyHAyDB3zxD3Y7gw1VkPuDs7RcO5E6zNul7AynslzteKxxn%2FQql73x0WKMWQtMEiNEC1izbdEE7V64Q9De82t1H0Kt1xwg5qg4yvyY7XHvemYbG6fil1ychp0GelvBUJ0z4wSibdpC8cOf1KXKsX%2F616eQWlpb0EmupARHtp7%2BWyEPjNMWv4WxhfzUC%2BZdHH%2BV7XefBQ5tUFwQJHa4pyfoPJU8bIkDMyQ%2B7HjsSIYJlcftDVnaEiD%2FFkQxgGCxRUgPPxXAxi0aXWCHHmAhnurlejLShOdL6NSTZZIsx74vre7hbHDJENtwrw6qljKFsiMeafXkNxPbPcXtaPVFEcb2rB55HwpL5BiJjgaITbQUL%2F23pfLieYGRixFt0RRH1pJpRr4mZthxu09MFqGF0gO5BPdGabSK38%2FcPwHrmUWVmklqLLB4Jpjj3kTkNxTREB4Uba6uMaDe6YuLhG3araJUZXo1kV%2BwOnqYDkBehqif5VnSMT9BsDx6KOZpNAo67OEnrVRKp86SL867wKJwUVN%2FqqaFj5lHiCNZ%2BhXjV0JCY4JQwhVm%2BlG9J6ArAqLYRSP84CyP0TWCZLjf6riEqTiJGH7QY1EfwGzkCYUe%2B%2FMNGi6MkGOqUBoj%2BALYgHCrTr0WiOZmrVHqrVMwkPe47i07OzmE9E5tCePPhFXOGg2rAxEmdERv9Gt6feK3fC4L7SWBECrk%2BqGgm9QKdz3VGMVJ28Z5u%2BABqvua9dTxQ0pCAruSmF5aZAsRKSM8%2FKPxwbXtsNqcXLHKiozVCt3gm3MHcygsrblzIibmNnMs2Fa8mnASgb28jbsfsnCQAxEgDxLUL9%2FaLiY9G6B%2F23&X-Amz-Signature=73c026ae69db4deb107d76579941245c89ddfa62e657cd56719c5455806b50fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GAM3WX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T010641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCVEOm09XSBQCzTV0%2FzU6CsAQDGELGrsGzsq1FCOHFumgIgE9bfQdvI84UE90Pmqu0ogQ0khh6Xx4afX7Z1dJ4H%2FgIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINAe8DftQM24V2WlCrcA5HGFpGKU7Meg9FHcWRtRyHAyDB3zxD3Y7gw1VkPuDs7RcO5E6zNul7AynslzteKxxn%2FQql73x0WKMWQtMEiNEC1izbdEE7V64Q9De82t1H0Kt1xwg5qg4yvyY7XHvemYbG6fil1ychp0GelvBUJ0z4wSibdpC8cOf1KXKsX%2F616eQWlpb0EmupARHtp7%2BWyEPjNMWv4WxhfzUC%2BZdHH%2BV7XefBQ5tUFwQJHa4pyfoPJU8bIkDMyQ%2B7HjsSIYJlcftDVnaEiD%2FFkQxgGCxRUgPPxXAxi0aXWCHHmAhnurlejLShOdL6NSTZZIsx74vre7hbHDJENtwrw6qljKFsiMeafXkNxPbPcXtaPVFEcb2rB55HwpL5BiJjgaITbQUL%2F23pfLieYGRixFt0RRH1pJpRr4mZthxu09MFqGF0gO5BPdGabSK38%2FcPwHrmUWVmklqLLB4Jpjj3kTkNxTREB4Uba6uMaDe6YuLhG3araJUZXo1kV%2BwOnqYDkBehqif5VnSMT9BsDx6KOZpNAo67OEnrVRKp86SL867wKJwUVN%2FqqaFj5lHiCNZ%2BhXjV0JCY4JQwhVm%2BlG9J6ArAqLYRSP84CyP0TWCZLjf6riEqTiJGH7QY1EfwGzkCYUe%2B%2FMNGi6MkGOqUBoj%2BALYgHCrTr0WiOZmrVHqrVMwkPe47i07OzmE9E5tCePPhFXOGg2rAxEmdERv9Gt6feK3fC4L7SWBECrk%2BqGgm9QKdz3VGMVJ28Z5u%2BABqvua9dTxQ0pCAruSmF5aZAsRKSM8%2FKPxwbXtsNqcXLHKiozVCt3gm3MHcygsrblzIibmNnMs2Fa8mnASgb28jbsfsnCQAxEgDxLUL9%2FaLiY9G6B%2F23&X-Amz-Signature=44a520403485f5948f47f5ac8b86e80be942ca33fc6fd4c5e9f7d2d9e09e74f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GAM3WX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T010641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCVEOm09XSBQCzTV0%2FzU6CsAQDGELGrsGzsq1FCOHFumgIgE9bfQdvI84UE90Pmqu0ogQ0khh6Xx4afX7Z1dJ4H%2FgIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINAe8DftQM24V2WlCrcA5HGFpGKU7Meg9FHcWRtRyHAyDB3zxD3Y7gw1VkPuDs7RcO5E6zNul7AynslzteKxxn%2FQql73x0WKMWQtMEiNEC1izbdEE7V64Q9De82t1H0Kt1xwg5qg4yvyY7XHvemYbG6fil1ychp0GelvBUJ0z4wSibdpC8cOf1KXKsX%2F616eQWlpb0EmupARHtp7%2BWyEPjNMWv4WxhfzUC%2BZdHH%2BV7XefBQ5tUFwQJHa4pyfoPJU8bIkDMyQ%2B7HjsSIYJlcftDVnaEiD%2FFkQxgGCxRUgPPxXAxi0aXWCHHmAhnurlejLShOdL6NSTZZIsx74vre7hbHDJENtwrw6qljKFsiMeafXkNxPbPcXtaPVFEcb2rB55HwpL5BiJjgaITbQUL%2F23pfLieYGRixFt0RRH1pJpRr4mZthxu09MFqGF0gO5BPdGabSK38%2FcPwHrmUWVmklqLLB4Jpjj3kTkNxTREB4Uba6uMaDe6YuLhG3araJUZXo1kV%2BwOnqYDkBehqif5VnSMT9BsDx6KOZpNAo67OEnrVRKp86SL867wKJwUVN%2FqqaFj5lHiCNZ%2BhXjV0JCY4JQwhVm%2BlG9J6ArAqLYRSP84CyP0TWCZLjf6riEqTiJGH7QY1EfwGzkCYUe%2B%2FMNGi6MkGOqUBoj%2BALYgHCrTr0WiOZmrVHqrVMwkPe47i07OzmE9E5tCePPhFXOGg2rAxEmdERv9Gt6feK3fC4L7SWBECrk%2BqGgm9QKdz3VGMVJ28Z5u%2BABqvua9dTxQ0pCAruSmF5aZAsRKSM8%2FKPxwbXtsNqcXLHKiozVCt3gm3MHcygsrblzIibmNnMs2Fa8mnASgb28jbsfsnCQAxEgDxLUL9%2FaLiY9G6B%2F23&X-Amz-Signature=27ea99c9232bb2843c009e99103f967e531c3fc4c0e090f235baf3a3ac57a009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GAM3WX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T010641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCVEOm09XSBQCzTV0%2FzU6CsAQDGELGrsGzsq1FCOHFumgIgE9bfQdvI84UE90Pmqu0ogQ0khh6Xx4afX7Z1dJ4H%2FgIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINAe8DftQM24V2WlCrcA5HGFpGKU7Meg9FHcWRtRyHAyDB3zxD3Y7gw1VkPuDs7RcO5E6zNul7AynslzteKxxn%2FQql73x0WKMWQtMEiNEC1izbdEE7V64Q9De82t1H0Kt1xwg5qg4yvyY7XHvemYbG6fil1ychp0GelvBUJ0z4wSibdpC8cOf1KXKsX%2F616eQWlpb0EmupARHtp7%2BWyEPjNMWv4WxhfzUC%2BZdHH%2BV7XefBQ5tUFwQJHa4pyfoPJU8bIkDMyQ%2B7HjsSIYJlcftDVnaEiD%2FFkQxgGCxRUgPPxXAxi0aXWCHHmAhnurlejLShOdL6NSTZZIsx74vre7hbHDJENtwrw6qljKFsiMeafXkNxPbPcXtaPVFEcb2rB55HwpL5BiJjgaITbQUL%2F23pfLieYGRixFt0RRH1pJpRr4mZthxu09MFqGF0gO5BPdGabSK38%2FcPwHrmUWVmklqLLB4Jpjj3kTkNxTREB4Uba6uMaDe6YuLhG3araJUZXo1kV%2BwOnqYDkBehqif5VnSMT9BsDx6KOZpNAo67OEnrVRKp86SL867wKJwUVN%2FqqaFj5lHiCNZ%2BhXjV0JCY4JQwhVm%2BlG9J6ArAqLYRSP84CyP0TWCZLjf6riEqTiJGH7QY1EfwGzkCYUe%2B%2FMNGi6MkGOqUBoj%2BALYgHCrTr0WiOZmrVHqrVMwkPe47i07OzmE9E5tCePPhFXOGg2rAxEmdERv9Gt6feK3fC4L7SWBECrk%2BqGgm9QKdz3VGMVJ28Z5u%2BABqvua9dTxQ0pCAruSmF5aZAsRKSM8%2FKPxwbXtsNqcXLHKiozVCt3gm3MHcygsrblzIibmNnMs2Fa8mnASgb28jbsfsnCQAxEgDxLUL9%2FaLiY9G6B%2F23&X-Amz-Signature=548d0e9c092116384b4c3b5ebea371f14ecda1e16884ddfa6a01db191c798ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GAM3WX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T010641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCVEOm09XSBQCzTV0%2FzU6CsAQDGELGrsGzsq1FCOHFumgIgE9bfQdvI84UE90Pmqu0ogQ0khh6Xx4afX7Z1dJ4H%2FgIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINAe8DftQM24V2WlCrcA5HGFpGKU7Meg9FHcWRtRyHAyDB3zxD3Y7gw1VkPuDs7RcO5E6zNul7AynslzteKxxn%2FQql73x0WKMWQtMEiNEC1izbdEE7V64Q9De82t1H0Kt1xwg5qg4yvyY7XHvemYbG6fil1ychp0GelvBUJ0z4wSibdpC8cOf1KXKsX%2F616eQWlpb0EmupARHtp7%2BWyEPjNMWv4WxhfzUC%2BZdHH%2BV7XefBQ5tUFwQJHa4pyfoPJU8bIkDMyQ%2B7HjsSIYJlcftDVnaEiD%2FFkQxgGCxRUgPPxXAxi0aXWCHHmAhnurlejLShOdL6NSTZZIsx74vre7hbHDJENtwrw6qljKFsiMeafXkNxPbPcXtaPVFEcb2rB55HwpL5BiJjgaITbQUL%2F23pfLieYGRixFt0RRH1pJpRr4mZthxu09MFqGF0gO5BPdGabSK38%2FcPwHrmUWVmklqLLB4Jpjj3kTkNxTREB4Uba6uMaDe6YuLhG3araJUZXo1kV%2BwOnqYDkBehqif5VnSMT9BsDx6KOZpNAo67OEnrVRKp86SL867wKJwUVN%2FqqaFj5lHiCNZ%2BhXjV0JCY4JQwhVm%2BlG9J6ArAqLYRSP84CyP0TWCZLjf6riEqTiJGH7QY1EfwGzkCYUe%2B%2FMNGi6MkGOqUBoj%2BALYgHCrTr0WiOZmrVHqrVMwkPe47i07OzmE9E5tCePPhFXOGg2rAxEmdERv9Gt6feK3fC4L7SWBECrk%2BqGgm9QKdz3VGMVJ28Z5u%2BABqvua9dTxQ0pCAruSmF5aZAsRKSM8%2FKPxwbXtsNqcXLHKiozVCt3gm3MHcygsrblzIibmNnMs2Fa8mnASgb28jbsfsnCQAxEgDxLUL9%2FaLiY9G6B%2F23&X-Amz-Signature=f76152f91107bdf539816544a67e8d621fd7bb73b4e979b485adf7ccff48b9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFLDK7H%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T010641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIE%2F7qhvwzji7Dns0ADf1uXJbcoOxzN6X5GJn7pHPTSktAiEAht3lBalmFSda8R1jWTsytIoMiEbF6PBVlk3jpTicG%2BIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHGEAaIy85hVBzUAyrcA6CLzO%2FUmefI6rTcQK3FkjeNbg4yxNPzjnqCiLaYbkM1DsXCHMWSvTqhEqw8KBjWESaCk1SLkDDlrLqAL6iDn%2BK7sqiiH7vZgTBjAK0at2dP0z4nvDShg5wkKP6g9G7ccHFqiqtgPSeG09ktcn%2FseSWxTnEziTe33kP58GUd2unYvV7549H%2FoXwKybxJjqLOrTrirU5PepqBW3cU%2FzghFcI%2BFs5lXCa4AfN3iJ8a3pXO6kQGtGUTDzfkbl2dtJLfCdl6lB7ooFUIqZxtoz88cGi%2F8YA%2BomrCWSn%2BMExfibkrOVmNKvOesNp1ZOSRbhdcRUctkXfN8Krb5jycxb1l%2BlhCoz%2FwP1XI9rq%2BetAQARPd%2FCG2kgKb26kyG0TZvHmoSxQ4VZT%2F5%2BsJ%2BlCgZQNh50qNMOhYqT0abnwkai%2BIgjLwxYLVx0I7lWplOGkIczPHuy%2FnUsKTSIdrrA9dW97dfvPqJ2Vset0VQWW7cdcCUbwN6yzglic1PfWB2EtfnEukXRKzf95LttCcXy54Y6hmXplCfSZNmuuArZ5fiVSD29cUiWeHHvS4tkcd6LA3uOmV8P%2BjGyvzysPVn2OerIn6ekGpGmm%2BR9WMaDjz4k7IfK7N6Mxjo%2FqCCrnTYl3dMKaj6MkGOqUBG98qhOAYcvYhgZl%2FHj4E4Q3b93vp5NU2PigOozqJRjdgELXqxwXInkqbPqBakFfmSA6%2BNIVouTNfIGPRBynTOKmYNbWpfqHUY8v3Zh827YiLX3YN6jIizwkTha3uKmN0ODSEPAnOGLbYcQ6TTpxJUfVCFPMy4rTvWovsOMIQFKf9me%2BqGEgNMn8FtT1uMp3XSH%2FN9sTngjvxe99C8ewHG%2BIJgubx&X-Amz-Signature=8050e5158e827607047717caa9c09fa8ea5328d7d02bd334366225ce9b65d750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

