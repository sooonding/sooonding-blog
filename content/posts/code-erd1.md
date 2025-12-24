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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBRZKU3%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T010548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDqhQv1c9VLHzYouJ3r2lq1ot8H1ZAzP2FQUV1%2BM0RJEAIgB2RGC2UsqHNxg4fmIZ0wJQtRgqjWzO1KbYbCNJR0zlsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJVaAbKw5h0gCTsPeSrcA3uUZc3G90mY%2BWqQ5NNQNWSkuJ4bZEAC8wjHEzBu7q0Dlc0O7ME9UdpPva5zEZyCyYSXh0YherP%2BKvX7LtXpYufxW3lHSz2fC3aovkXFBx9Y2hH5UPiQuELFPwJli4A9VBI%2BHuS%2FYOZOU4Of4ZqxZaTZMq%2F%2BCq823jerwId3JY34kWc9FpN3Fd2gJu098w8cSd9S7FFa0dTvIcC%2F19ZsWpeyrnqAWvwmnOG6wWi0CZacIW6%2BWxLII93HboCJUAruBPanuRKb7iJ6AeGRPlBUjXCGllH6kpXgl0O6j7NHcg%2BC9WxAzSc3LRFgdFRtWf6EazkRF7cCrW0nyJ3qLm%2BnSaDpvP94BjfaYfPLsk3QVMpv8NbdpH4yYMcwfsqiwnPyG%2FMUMSpjO7VOsYFbrLKjXXXuqU13LW8GTEOFWXDskzW9Y3QZZmRdNLA9UIgnQKGVJXt5EhdEYlPhkbxCl0OWfK9D4A0ij1blauw4fkX2VPQWLAzJIBurY4YEakTOldn18WJO2GDD%2FMB9tFOR11%2FDbv6SNa%2Bdz5Rp4E1TjGq0LRQ1kQM1enxVhgjmCcfrN5i2pI2Xo0CQzcmAjg5a2YFiIofW03u509heZf%2FuIZsmscCAkDZxvvqnDROGTlMfMKjQrMoGOqUBc15E%2BCwSEXG8DciSAG0tJjKYsc848m7X421HxR1AvjE36aYPeRzOE23SjmGZ%2Bit0PWPhttsjJvORmu3cpoBMtGD4vWrUbSvW%2B3dz32uY%2FPsCJtCW9TjoWzFWS%2FLsOrGiC55fOFZ6V4tpmQMlK2y53XkTMyDyRbiQOqC5jdYSqofWKUo2dhZm25ecBSKhxcnWPQErIxyd7b4FABq1B63rjIgYg4%2BW&X-Amz-Signature=903b3c22bb3dbb4a3e6dacc1a7a2e16dce97f618fba2ce692a77d3a68db786fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKUFWS6%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T010548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDAztHeo9K91PPtgdMo3goaezDy%2Bw7dfb59J30Cgy2CQgIhAI083bXWKfcB6D49%2F2TMEQvF4OkIAUZ7ZwVBwg2ZuxhsKv8DCBkQABoMNjM3NDIzMTgzODA1IgzvQU5D71mM3Hph%2Fekq3AMMH53p3baYuvHeFNcgriv7t1NywkRiT72t5vjGFBGFCHcgjteNyYbFH2bRDYpBpDBBQ3SALONlBdfHbS%2BwhSxjgzpRvj41QdGnoAxL8oZXXF%2BQHRVWr4VqHwGf9dpgzYS0K3d6llBGkM8t1MEGlbcbg41gkAzjJ5ilieOFGcVJHF6x%2F%2FMOimvXJnWAD7mP3vrfhv80Mz6vfRXuCBQiXIXcxvGZapEu81KbB12chA2itLYOKqXZlLzhDf2OSL3xd3Ym1PrlMDxJKgV3vQY93UEedcEKy8Eiul1ksYKuSlroegG%2BlRmvsYrS3CsB09d1F3TqDeCob8%2FB20ElEGp7gkMpsmWeGLpxFCqo07wotrAjFSV19Q7RuDZ6%2Bu45aZSJ0HWeVJBDC82tyy1niCgjZT3le2QyMLr%2BTWJ8yD2RnX%2Fr3Bb2v%2Fe2RbvHfjuGkkJqGCiQZy6Fleikel7botqqDI68%2B6V%2BbCt64uEnmbZruy9sl6mEEVsofPaIkkBO77JH96JDaPExVnTcLgdZFASWVg5fvwKm40hngFO47oQGx6ojVnXGMf8vjyJSHWrEfwDtKnV5J2QfFj6NP9bq0g8z%2F4BT6pq8Xy%2B3fnb8dWhkqbnWc8qdTDiJQGBhjXAcijCw0KzKBjqkAfRyiKOEY6%2F4n040cUNGsflnm5rQ4setF4FfGA3Der%2Bvgg5FpuA6tf6yjCR9xpyXSSeTyGAzjFegVAxkav1TEuewN9munkFVdA4UgrejeNzquzQ3bS5HV5kRFCB9Q45IXqrFh5y0B6SP%2BuNzl6RJEnjgH0G6wMjy8jiKOz2z7nW7YieD7DJ%2BpPVFzRzuj7n8KMgO7NfoNmE84aHdlCwTfixzpX3n&X-Amz-Signature=3e74dad14a3a7577e7ec4fad1809f418001433b8375560aaf85ba3fc09caa6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKUFWS6%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T010548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDAztHeo9K91PPtgdMo3goaezDy%2Bw7dfb59J30Cgy2CQgIhAI083bXWKfcB6D49%2F2TMEQvF4OkIAUZ7ZwVBwg2ZuxhsKv8DCBkQABoMNjM3NDIzMTgzODA1IgzvQU5D71mM3Hph%2Fekq3AMMH53p3baYuvHeFNcgriv7t1NywkRiT72t5vjGFBGFCHcgjteNyYbFH2bRDYpBpDBBQ3SALONlBdfHbS%2BwhSxjgzpRvj41QdGnoAxL8oZXXF%2BQHRVWr4VqHwGf9dpgzYS0K3d6llBGkM8t1MEGlbcbg41gkAzjJ5ilieOFGcVJHF6x%2F%2FMOimvXJnWAD7mP3vrfhv80Mz6vfRXuCBQiXIXcxvGZapEu81KbB12chA2itLYOKqXZlLzhDf2OSL3xd3Ym1PrlMDxJKgV3vQY93UEedcEKy8Eiul1ksYKuSlroegG%2BlRmvsYrS3CsB09d1F3TqDeCob8%2FB20ElEGp7gkMpsmWeGLpxFCqo07wotrAjFSV19Q7RuDZ6%2Bu45aZSJ0HWeVJBDC82tyy1niCgjZT3le2QyMLr%2BTWJ8yD2RnX%2Fr3Bb2v%2Fe2RbvHfjuGkkJqGCiQZy6Fleikel7botqqDI68%2B6V%2BbCt64uEnmbZruy9sl6mEEVsofPaIkkBO77JH96JDaPExVnTcLgdZFASWVg5fvwKm40hngFO47oQGx6ojVnXGMf8vjyJSHWrEfwDtKnV5J2QfFj6NP9bq0g8z%2F4BT6pq8Xy%2B3fnb8dWhkqbnWc8qdTDiJQGBhjXAcijCw0KzKBjqkAfRyiKOEY6%2F4n040cUNGsflnm5rQ4setF4FfGA3Der%2Bvgg5FpuA6tf6yjCR9xpyXSSeTyGAzjFegVAxkav1TEuewN9munkFVdA4UgrejeNzquzQ3bS5HV5kRFCB9Q45IXqrFh5y0B6SP%2BuNzl6RJEnjgH0G6wMjy8jiKOz2z7nW7YieD7DJ%2BpPVFzRzuj7n8KMgO7NfoNmE84aHdlCwTfixzpX3n&X-Amz-Signature=a32b20bfb2395d12bb30f7e0aca7413917b290e8b16061d9e433c81f6a530185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKUFWS6%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T010548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDAztHeo9K91PPtgdMo3goaezDy%2Bw7dfb59J30Cgy2CQgIhAI083bXWKfcB6D49%2F2TMEQvF4OkIAUZ7ZwVBwg2ZuxhsKv8DCBkQABoMNjM3NDIzMTgzODA1IgzvQU5D71mM3Hph%2Fekq3AMMH53p3baYuvHeFNcgriv7t1NywkRiT72t5vjGFBGFCHcgjteNyYbFH2bRDYpBpDBBQ3SALONlBdfHbS%2BwhSxjgzpRvj41QdGnoAxL8oZXXF%2BQHRVWr4VqHwGf9dpgzYS0K3d6llBGkM8t1MEGlbcbg41gkAzjJ5ilieOFGcVJHF6x%2F%2FMOimvXJnWAD7mP3vrfhv80Mz6vfRXuCBQiXIXcxvGZapEu81KbB12chA2itLYOKqXZlLzhDf2OSL3xd3Ym1PrlMDxJKgV3vQY93UEedcEKy8Eiul1ksYKuSlroegG%2BlRmvsYrS3CsB09d1F3TqDeCob8%2FB20ElEGp7gkMpsmWeGLpxFCqo07wotrAjFSV19Q7RuDZ6%2Bu45aZSJ0HWeVJBDC82tyy1niCgjZT3le2QyMLr%2BTWJ8yD2RnX%2Fr3Bb2v%2Fe2RbvHfjuGkkJqGCiQZy6Fleikel7botqqDI68%2B6V%2BbCt64uEnmbZruy9sl6mEEVsofPaIkkBO77JH96JDaPExVnTcLgdZFASWVg5fvwKm40hngFO47oQGx6ojVnXGMf8vjyJSHWrEfwDtKnV5J2QfFj6NP9bq0g8z%2F4BT6pq8Xy%2B3fnb8dWhkqbnWc8qdTDiJQGBhjXAcijCw0KzKBjqkAfRyiKOEY6%2F4n040cUNGsflnm5rQ4setF4FfGA3Der%2Bvgg5FpuA6tf6yjCR9xpyXSSeTyGAzjFegVAxkav1TEuewN9munkFVdA4UgrejeNzquzQ3bS5HV5kRFCB9Q45IXqrFh5y0B6SP%2BuNzl6RJEnjgH0G6wMjy8jiKOz2z7nW7YieD7DJ%2BpPVFzRzuj7n8KMgO7NfoNmE84aHdlCwTfixzpX3n&X-Amz-Signature=01cf513534a05741cb4a67416ccf6a5e01aaa97a23c0fa3e9baad24f104d675a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKUFWS6%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T010548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDAztHeo9K91PPtgdMo3goaezDy%2Bw7dfb59J30Cgy2CQgIhAI083bXWKfcB6D49%2F2TMEQvF4OkIAUZ7ZwVBwg2ZuxhsKv8DCBkQABoMNjM3NDIzMTgzODA1IgzvQU5D71mM3Hph%2Fekq3AMMH53p3baYuvHeFNcgriv7t1NywkRiT72t5vjGFBGFCHcgjteNyYbFH2bRDYpBpDBBQ3SALONlBdfHbS%2BwhSxjgzpRvj41QdGnoAxL8oZXXF%2BQHRVWr4VqHwGf9dpgzYS0K3d6llBGkM8t1MEGlbcbg41gkAzjJ5ilieOFGcVJHF6x%2F%2FMOimvXJnWAD7mP3vrfhv80Mz6vfRXuCBQiXIXcxvGZapEu81KbB12chA2itLYOKqXZlLzhDf2OSL3xd3Ym1PrlMDxJKgV3vQY93UEedcEKy8Eiul1ksYKuSlroegG%2BlRmvsYrS3CsB09d1F3TqDeCob8%2FB20ElEGp7gkMpsmWeGLpxFCqo07wotrAjFSV19Q7RuDZ6%2Bu45aZSJ0HWeVJBDC82tyy1niCgjZT3le2QyMLr%2BTWJ8yD2RnX%2Fr3Bb2v%2Fe2RbvHfjuGkkJqGCiQZy6Fleikel7botqqDI68%2B6V%2BbCt64uEnmbZruy9sl6mEEVsofPaIkkBO77JH96JDaPExVnTcLgdZFASWVg5fvwKm40hngFO47oQGx6ojVnXGMf8vjyJSHWrEfwDtKnV5J2QfFj6NP9bq0g8z%2F4BT6pq8Xy%2B3fnb8dWhkqbnWc8qdTDiJQGBhjXAcijCw0KzKBjqkAfRyiKOEY6%2F4n040cUNGsflnm5rQ4setF4FfGA3Der%2Bvgg5FpuA6tf6yjCR9xpyXSSeTyGAzjFegVAxkav1TEuewN9munkFVdA4UgrejeNzquzQ3bS5HV5kRFCB9Q45IXqrFh5y0B6SP%2BuNzl6RJEnjgH0G6wMjy8jiKOz2z7nW7YieD7DJ%2BpPVFzRzuj7n8KMgO7NfoNmE84aHdlCwTfixzpX3n&X-Amz-Signature=239b67d1742da117cc0bf8fe93c1e5824b92ef35ce3d1061ce8e0d8d43a9bb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIKUFWS6%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T010548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDAztHeo9K91PPtgdMo3goaezDy%2Bw7dfb59J30Cgy2CQgIhAI083bXWKfcB6D49%2F2TMEQvF4OkIAUZ7ZwVBwg2ZuxhsKv8DCBkQABoMNjM3NDIzMTgzODA1IgzvQU5D71mM3Hph%2Fekq3AMMH53p3baYuvHeFNcgriv7t1NywkRiT72t5vjGFBGFCHcgjteNyYbFH2bRDYpBpDBBQ3SALONlBdfHbS%2BwhSxjgzpRvj41QdGnoAxL8oZXXF%2BQHRVWr4VqHwGf9dpgzYS0K3d6llBGkM8t1MEGlbcbg41gkAzjJ5ilieOFGcVJHF6x%2F%2FMOimvXJnWAD7mP3vrfhv80Mz6vfRXuCBQiXIXcxvGZapEu81KbB12chA2itLYOKqXZlLzhDf2OSL3xd3Ym1PrlMDxJKgV3vQY93UEedcEKy8Eiul1ksYKuSlroegG%2BlRmvsYrS3CsB09d1F3TqDeCob8%2FB20ElEGp7gkMpsmWeGLpxFCqo07wotrAjFSV19Q7RuDZ6%2Bu45aZSJ0HWeVJBDC82tyy1niCgjZT3le2QyMLr%2BTWJ8yD2RnX%2Fr3Bb2v%2Fe2RbvHfjuGkkJqGCiQZy6Fleikel7botqqDI68%2B6V%2BbCt64uEnmbZruy9sl6mEEVsofPaIkkBO77JH96JDaPExVnTcLgdZFASWVg5fvwKm40hngFO47oQGx6ojVnXGMf8vjyJSHWrEfwDtKnV5J2QfFj6NP9bq0g8z%2F4BT6pq8Xy%2B3fnb8dWhkqbnWc8qdTDiJQGBhjXAcijCw0KzKBjqkAfRyiKOEY6%2F4n040cUNGsflnm5rQ4setF4FfGA3Der%2Bvgg5FpuA6tf6yjCR9xpyXSSeTyGAzjFegVAxkav1TEuewN9munkFVdA4UgrejeNzquzQ3bS5HV5kRFCB9Q45IXqrFh5y0B6SP%2BuNzl6RJEnjgH0G6wMjy8jiKOz2z7nW7YieD7DJ%2BpPVFzRzuj7n8KMgO7NfoNmE84aHdlCwTfixzpX3n&X-Amz-Signature=757c82e4830801d1c8f6cfb0fcf1d13cb2d2025e2a9c2daf8be4e46bf34c5b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBRZKU3%2F20251224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251224T010548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDqhQv1c9VLHzYouJ3r2lq1ot8H1ZAzP2FQUV1%2BM0RJEAIgB2RGC2UsqHNxg4fmIZ0wJQtRgqjWzO1KbYbCNJR0zlsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJVaAbKw5h0gCTsPeSrcA3uUZc3G90mY%2BWqQ5NNQNWSkuJ4bZEAC8wjHEzBu7q0Dlc0O7ME9UdpPva5zEZyCyYSXh0YherP%2BKvX7LtXpYufxW3lHSz2fC3aovkXFBx9Y2hH5UPiQuELFPwJli4A9VBI%2BHuS%2FYOZOU4Of4ZqxZaTZMq%2F%2BCq823jerwId3JY34kWc9FpN3Fd2gJu098w8cSd9S7FFa0dTvIcC%2F19ZsWpeyrnqAWvwmnOG6wWi0CZacIW6%2BWxLII93HboCJUAruBPanuRKb7iJ6AeGRPlBUjXCGllH6kpXgl0O6j7NHcg%2BC9WxAzSc3LRFgdFRtWf6EazkRF7cCrW0nyJ3qLm%2BnSaDpvP94BjfaYfPLsk3QVMpv8NbdpH4yYMcwfsqiwnPyG%2FMUMSpjO7VOsYFbrLKjXXXuqU13LW8GTEOFWXDskzW9Y3QZZmRdNLA9UIgnQKGVJXt5EhdEYlPhkbxCl0OWfK9D4A0ij1blauw4fkX2VPQWLAzJIBurY4YEakTOldn18WJO2GDD%2FMB9tFOR11%2FDbv6SNa%2Bdz5Rp4E1TjGq0LRQ1kQM1enxVhgjmCcfrN5i2pI2Xo0CQzcmAjg5a2YFiIofW03u509heZf%2FuIZsmscCAkDZxvvqnDROGTlMfMKjQrMoGOqUBc15E%2BCwSEXG8DciSAG0tJjKYsc848m7X421HxR1AvjE36aYPeRzOE23SjmGZ%2Bit0PWPhttsjJvORmu3cpoBMtGD4vWrUbSvW%2B3dz32uY%2FPsCJtCW9TjoWzFWS%2FLsOrGiC55fOFZ6V4tpmQMlK2y53XkTMyDyRbiQOqC5jdYSqofWKUo2dhZm25ecBSKhxcnWPQErIxyd7b4FABq1B63rjIgYg4%2BW&X-Amz-Signature=9c45c8bf692750e69402297751c2b77970257cce654e2956492ddd57888f550e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

