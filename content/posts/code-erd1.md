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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIK5X5X%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrKPi4YFfU7Axcv3EVtr2I%2FTAuVJhsvzLqHj7NUk19CAIhAODCNeoB%2BwUsRtQOJx36hK29plYVNgWMWXcIC2Ro7yZZKv8DCEUQABoMNjM3NDIzMTgzODA1IgzGUOmXKv30sq7bPOEq3APhWkppYO6ic0ILRUSMM%2BGDTOWiuSShx2k1gnHky2dZSCTz2VBL9Jgk9wfki1AmLcYeZjT1J%2FQAVkmN7hkMe%2Fwv00KzKIEQCR8lZoDto%2Fb%2FHchnkwWsfsGlRBzl8CEUegSaha4uSaAuBlRo%2BbT6HkFBUg%2BxTdHh%2BhKBbrhqNppu2m%2BD%2BQJ2HbV4JTqvo7t%2B6zaYoM8%2BzIP5rgNV5xT32F2k5p1XXWLL7O62sJW3V1fh1A%2Bl8mPSSHwmwFlXuBcY2PLcM%2Fg0sVwcT%2BlNBtnN%2BvY2VLp%2FlAoO6Wk9zujA0RAhzDt6GFNb46l1zZR2gbEqgWpF4TgP9ypT7es0I17%2FjF178xVyjl6mn7elqd4poUvTlJ67jsZ1J%2FbT6r8LzgYtcTDLGXzLBC0N3qZVLzJvLHxv%2BTfnSEh2iVeje%2BMqEPMnlNsOtQGAu%2ByCFgZE%2Bd1NvGVuMt%2Fuz0A8Xg3WZpI4ehwp7MyYLRc65AG%2FVjXbGNbjSzw8cchVa65Yb5EdCMlA6k2duo1dIM4HWhlMNJ0rOGSwlQ1oBEOf0XtND7AuN35EMGyeXpKPzswfRl4qyQPZjyYoP261sEfXXQ32Yd2%2BFHEzNd5is4fwbAV%2BSxD7%2FM11T%2BBOv5qpTC39FdK%2F1zDXo7bKBjqkAfp66LKuPD4kok6JCAVWjVioxESZ56wZ65R44JRVVfhUtbK4SUprZfUemaYDsHxXqphP8KjtSTBsKajXZmtDDRvMosO1hxPF31RTWNBc7zMjQuD7uFNUSn3ZFbR%2B%2Bkrk%2FJ6zry0T1ShEuAsxtDIrkBWDOgs0SprnB5easP1PH9TK%2FEOKuwZPJ50JRJFLjwlQuNYnIzdkTMkOddVT2ZltWVXOBoVJ&X-Amz-Signature=bee00803ffbd612d44c8c209bb3ca6a382340601fa7ec18488d4ef16e52934ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTKEFDM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMlFKF%2FhNCJerQgThNQdbYC509Ky6t3CcORsCCkn5dhAIgY94VGTbvEBygmG3FfeqO35zCNkWB9m5fqsOUT8F9Jxoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJziofdhCjxJRgk1KCrcA7KekMnfZI%2BKSqnCTfoxPAi9siXBVfFsU5BWgiRj8ry9Yvd3ruzSqTiUOA17lZeep01S2uVSAmtgLDik4DxTO32WdZokpzq38MY1xuzxasNgcR%2BRnP5U857c4uPjOaowYYlTE0%2F056o3Gh0XQj%2BjQMS8GKNPlurWLsVcuDSaoR1iHlzeDth15Z8nSNLrZDNC%2F9pfXsbU%2BVdT4BiF4%2Be%2BKRR7ipkDiqG8XrJ3ZooHSyEBBUlCtjTbI0hovY6dIsBc9DcGuPa%2F3WPcttowgHS%2Fs6VHr03jVJJb1M%2Fg5i2wQIK8lH%2BzGxJKU%2BxD2MHmRweMGHAV0CNq5Ujiv2%2BOJ8jRRIUo2xfQcI8%2FbvEUtLJGKyHyWLqYuFftueEx0XfyaEORQqmfOaHSCf4FCReoy9%2F1%2FKuCYxDgs4nyU9%2BkEKGLDOh6mhxmbRR7PHX%2Bs5NhnKMHmrZ52k9tUEPuCuj%2BFzfeJFvIEDF4UWzgQWgjCeNT7MPb89wvL9A%2BJUH5jwBFPoWoLNe8ncCiyCNJ8ICDTQtDW%2BClrqS6D0kTekdAJh19e4NWh2v5yiEVYSQGkwkQfc1XH0h%2F89wWOMw89j5Yyf6CKgZpRLR6LkZhjjANadCgWHu9EmdvbsCiOokVtryhML%2BgtsoGOqUBhzaSkgiKCxfjpVli%2BowzdczZc5XmyZqnuHadW%2BuXA99t%2BlZNgcb9mdZHjP753UYC94ic%2F8ejd1HvTU6CRG19LXK7QSP4Gqac7JPjPA3yfPjEB89RWgSEqr6OXD6I4EZ5zNMqmdr%2B6UD7En7AyQ6j3RqXgBZ1FljxqSWWgKErFXTISMwHYyediQe%2BeeATI7CGdoOr%2BD%2BwkUp24%2F8Gm1IVz03k3wWx&X-Amz-Signature=c52c32b08af8b1273eba1be5fd2a6b01deef37929a0c1503a234d5eb3fd2d6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTKEFDM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMlFKF%2FhNCJerQgThNQdbYC509Ky6t3CcORsCCkn5dhAIgY94VGTbvEBygmG3FfeqO35zCNkWB9m5fqsOUT8F9Jxoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJziofdhCjxJRgk1KCrcA7KekMnfZI%2BKSqnCTfoxPAi9siXBVfFsU5BWgiRj8ry9Yvd3ruzSqTiUOA17lZeep01S2uVSAmtgLDik4DxTO32WdZokpzq38MY1xuzxasNgcR%2BRnP5U857c4uPjOaowYYlTE0%2F056o3Gh0XQj%2BjQMS8GKNPlurWLsVcuDSaoR1iHlzeDth15Z8nSNLrZDNC%2F9pfXsbU%2BVdT4BiF4%2Be%2BKRR7ipkDiqG8XrJ3ZooHSyEBBUlCtjTbI0hovY6dIsBc9DcGuPa%2F3WPcttowgHS%2Fs6VHr03jVJJb1M%2Fg5i2wQIK8lH%2BzGxJKU%2BxD2MHmRweMGHAV0CNq5Ujiv2%2BOJ8jRRIUo2xfQcI8%2FbvEUtLJGKyHyWLqYuFftueEx0XfyaEORQqmfOaHSCf4FCReoy9%2F1%2FKuCYxDgs4nyU9%2BkEKGLDOh6mhxmbRR7PHX%2Bs5NhnKMHmrZ52k9tUEPuCuj%2BFzfeJFvIEDF4UWzgQWgjCeNT7MPb89wvL9A%2BJUH5jwBFPoWoLNe8ncCiyCNJ8ICDTQtDW%2BClrqS6D0kTekdAJh19e4NWh2v5yiEVYSQGkwkQfc1XH0h%2F89wWOMw89j5Yyf6CKgZpRLR6LkZhjjANadCgWHu9EmdvbsCiOokVtryhML%2BgtsoGOqUBhzaSkgiKCxfjpVli%2BowzdczZc5XmyZqnuHadW%2BuXA99t%2BlZNgcb9mdZHjP753UYC94ic%2F8ejd1HvTU6CRG19LXK7QSP4Gqac7JPjPA3yfPjEB89RWgSEqr6OXD6I4EZ5zNMqmdr%2B6UD7En7AyQ6j3RqXgBZ1FljxqSWWgKErFXTISMwHYyediQe%2BeeATI7CGdoOr%2BD%2BwkUp24%2F8Gm1IVz03k3wWx&X-Amz-Signature=81456b9643ff20937158be5f01403f4db7b96677f882c4d3523c4dab89bd31e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTKEFDM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMlFKF%2FhNCJerQgThNQdbYC509Ky6t3CcORsCCkn5dhAIgY94VGTbvEBygmG3FfeqO35zCNkWB9m5fqsOUT8F9Jxoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJziofdhCjxJRgk1KCrcA7KekMnfZI%2BKSqnCTfoxPAi9siXBVfFsU5BWgiRj8ry9Yvd3ruzSqTiUOA17lZeep01S2uVSAmtgLDik4DxTO32WdZokpzq38MY1xuzxasNgcR%2BRnP5U857c4uPjOaowYYlTE0%2F056o3Gh0XQj%2BjQMS8GKNPlurWLsVcuDSaoR1iHlzeDth15Z8nSNLrZDNC%2F9pfXsbU%2BVdT4BiF4%2Be%2BKRR7ipkDiqG8XrJ3ZooHSyEBBUlCtjTbI0hovY6dIsBc9DcGuPa%2F3WPcttowgHS%2Fs6VHr03jVJJb1M%2Fg5i2wQIK8lH%2BzGxJKU%2BxD2MHmRweMGHAV0CNq5Ujiv2%2BOJ8jRRIUo2xfQcI8%2FbvEUtLJGKyHyWLqYuFftueEx0XfyaEORQqmfOaHSCf4FCReoy9%2F1%2FKuCYxDgs4nyU9%2BkEKGLDOh6mhxmbRR7PHX%2Bs5NhnKMHmrZ52k9tUEPuCuj%2BFzfeJFvIEDF4UWzgQWgjCeNT7MPb89wvL9A%2BJUH5jwBFPoWoLNe8ncCiyCNJ8ICDTQtDW%2BClrqS6D0kTekdAJh19e4NWh2v5yiEVYSQGkwkQfc1XH0h%2F89wWOMw89j5Yyf6CKgZpRLR6LkZhjjANadCgWHu9EmdvbsCiOokVtryhML%2BgtsoGOqUBhzaSkgiKCxfjpVli%2BowzdczZc5XmyZqnuHadW%2BuXA99t%2BlZNgcb9mdZHjP753UYC94ic%2F8ejd1HvTU6CRG19LXK7QSP4Gqac7JPjPA3yfPjEB89RWgSEqr6OXD6I4EZ5zNMqmdr%2B6UD7En7AyQ6j3RqXgBZ1FljxqSWWgKErFXTISMwHYyediQe%2BeeATI7CGdoOr%2BD%2BwkUp24%2F8Gm1IVz03k3wWx&X-Amz-Signature=d971847152ef111bf0cf07895f1b4611a6e9b9d47a861c07cc7b5328eb694a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTKEFDM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMlFKF%2FhNCJerQgThNQdbYC509Ky6t3CcORsCCkn5dhAIgY94VGTbvEBygmG3FfeqO35zCNkWB9m5fqsOUT8F9Jxoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJziofdhCjxJRgk1KCrcA7KekMnfZI%2BKSqnCTfoxPAi9siXBVfFsU5BWgiRj8ry9Yvd3ruzSqTiUOA17lZeep01S2uVSAmtgLDik4DxTO32WdZokpzq38MY1xuzxasNgcR%2BRnP5U857c4uPjOaowYYlTE0%2F056o3Gh0XQj%2BjQMS8GKNPlurWLsVcuDSaoR1iHlzeDth15Z8nSNLrZDNC%2F9pfXsbU%2BVdT4BiF4%2Be%2BKRR7ipkDiqG8XrJ3ZooHSyEBBUlCtjTbI0hovY6dIsBc9DcGuPa%2F3WPcttowgHS%2Fs6VHr03jVJJb1M%2Fg5i2wQIK8lH%2BzGxJKU%2BxD2MHmRweMGHAV0CNq5Ujiv2%2BOJ8jRRIUo2xfQcI8%2FbvEUtLJGKyHyWLqYuFftueEx0XfyaEORQqmfOaHSCf4FCReoy9%2F1%2FKuCYxDgs4nyU9%2BkEKGLDOh6mhxmbRR7PHX%2Bs5NhnKMHmrZ52k9tUEPuCuj%2BFzfeJFvIEDF4UWzgQWgjCeNT7MPb89wvL9A%2BJUH5jwBFPoWoLNe8ncCiyCNJ8ICDTQtDW%2BClrqS6D0kTekdAJh19e4NWh2v5yiEVYSQGkwkQfc1XH0h%2F89wWOMw89j5Yyf6CKgZpRLR6LkZhjjANadCgWHu9EmdvbsCiOokVtryhML%2BgtsoGOqUBhzaSkgiKCxfjpVli%2BowzdczZc5XmyZqnuHadW%2BuXA99t%2BlZNgcb9mdZHjP753UYC94ic%2F8ejd1HvTU6CRG19LXK7QSP4Gqac7JPjPA3yfPjEB89RWgSEqr6OXD6I4EZ5zNMqmdr%2B6UD7En7AyQ6j3RqXgBZ1FljxqSWWgKErFXTISMwHYyediQe%2BeeATI7CGdoOr%2BD%2BwkUp24%2F8Gm1IVz03k3wWx&X-Amz-Signature=d6f87f51e3201f9cbf5a15a28c9e27a7406d265e17cc6434d6053f55146f4cf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTKEFDM%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDMlFKF%2FhNCJerQgThNQdbYC509Ky6t3CcORsCCkn5dhAIgY94VGTbvEBygmG3FfeqO35zCNkWB9m5fqsOUT8F9Jxoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJziofdhCjxJRgk1KCrcA7KekMnfZI%2BKSqnCTfoxPAi9siXBVfFsU5BWgiRj8ry9Yvd3ruzSqTiUOA17lZeep01S2uVSAmtgLDik4DxTO32WdZokpzq38MY1xuzxasNgcR%2BRnP5U857c4uPjOaowYYlTE0%2F056o3Gh0XQj%2BjQMS8GKNPlurWLsVcuDSaoR1iHlzeDth15Z8nSNLrZDNC%2F9pfXsbU%2BVdT4BiF4%2Be%2BKRR7ipkDiqG8XrJ3ZooHSyEBBUlCtjTbI0hovY6dIsBc9DcGuPa%2F3WPcttowgHS%2Fs6VHr03jVJJb1M%2Fg5i2wQIK8lH%2BzGxJKU%2BxD2MHmRweMGHAV0CNq5Ujiv2%2BOJ8jRRIUo2xfQcI8%2FbvEUtLJGKyHyWLqYuFftueEx0XfyaEORQqmfOaHSCf4FCReoy9%2F1%2FKuCYxDgs4nyU9%2BkEKGLDOh6mhxmbRR7PHX%2Bs5NhnKMHmrZ52k9tUEPuCuj%2BFzfeJFvIEDF4UWzgQWgjCeNT7MPb89wvL9A%2BJUH5jwBFPoWoLNe8ncCiyCNJ8ICDTQtDW%2BClrqS6D0kTekdAJh19e4NWh2v5yiEVYSQGkwkQfc1XH0h%2F89wWOMw89j5Yyf6CKgZpRLR6LkZhjjANadCgWHu9EmdvbsCiOokVtryhML%2BgtsoGOqUBhzaSkgiKCxfjpVli%2BowzdczZc5XmyZqnuHadW%2BuXA99t%2BlZNgcb9mdZHjP753UYC94ic%2F8ejd1HvTU6CRG19LXK7QSP4Gqac7JPjPA3yfPjEB89RWgSEqr6OXD6I4EZ5zNMqmdr%2B6UD7En7AyQ6j3RqXgBZ1FljxqSWWgKErFXTISMwHYyediQe%2BeeATI7CGdoOr%2BD%2BwkUp24%2F8Gm1IVz03k3wWx&X-Amz-Signature=5ff558b46bdcdab1db7a6a8efef4aab2bef4c70bc7d708afa18dcebc913bdec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFIK5X5X%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrKPi4YFfU7Axcv3EVtr2I%2FTAuVJhsvzLqHj7NUk19CAIhAODCNeoB%2BwUsRtQOJx36hK29plYVNgWMWXcIC2Ro7yZZKv8DCEUQABoMNjM3NDIzMTgzODA1IgzGUOmXKv30sq7bPOEq3APhWkppYO6ic0ILRUSMM%2BGDTOWiuSShx2k1gnHky2dZSCTz2VBL9Jgk9wfki1AmLcYeZjT1J%2FQAVkmN7hkMe%2Fwv00KzKIEQCR8lZoDto%2Fb%2FHchnkwWsfsGlRBzl8CEUegSaha4uSaAuBlRo%2BbT6HkFBUg%2BxTdHh%2BhKBbrhqNppu2m%2BD%2BQJ2HbV4JTqvo7t%2B6zaYoM8%2BzIP5rgNV5xT32F2k5p1XXWLL7O62sJW3V1fh1A%2Bl8mPSSHwmwFlXuBcY2PLcM%2Fg0sVwcT%2BlNBtnN%2BvY2VLp%2FlAoO6Wk9zujA0RAhzDt6GFNb46l1zZR2gbEqgWpF4TgP9ypT7es0I17%2FjF178xVyjl6mn7elqd4poUvTlJ67jsZ1J%2FbT6r8LzgYtcTDLGXzLBC0N3qZVLzJvLHxv%2BTfnSEh2iVeje%2BMqEPMnlNsOtQGAu%2ByCFgZE%2Bd1NvGVuMt%2Fuz0A8Xg3WZpI4ehwp7MyYLRc65AG%2FVjXbGNbjSzw8cchVa65Yb5EdCMlA6k2duo1dIM4HWhlMNJ0rOGSwlQ1oBEOf0XtND7AuN35EMGyeXpKPzswfRl4qyQPZjyYoP261sEfXXQ32Yd2%2BFHEzNd5is4fwbAV%2BSxD7%2FM11T%2BBOv5qpTC39FdK%2F1zDXo7bKBjqkAfp66LKuPD4kok6JCAVWjVioxESZ56wZ65R44JRVVfhUtbK4SUprZfUemaYDsHxXqphP8KjtSTBsKajXZmtDDRvMosO1hxPF31RTWNBc7zMjQuD7uFNUSn3ZFbR%2B%2Bkrk%2FJ6zry0T1ShEuAsxtDIrkBWDOgs0SprnB5easP1PH9TK%2FEOKuwZPJ50JRJFLjwlQuNYnIzdkTMkOddVT2ZltWVXOBoVJ&X-Amz-Signature=a2801bbc0f4ad1d25121e90f5b4d10df0db3bf9eed5ecdaac5493451956902d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

