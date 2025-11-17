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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAH5QWQ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T010355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYP3vL55GJnEBa4BmsgnYam%2BB8Lm4S3nbb3MdIsYSREwIgRyZprBiPTRQLCETceQaNnSxOFfynQV9Rn5lYpZa9HRIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxN%2BCe2l4uLTtTfSSrcA9qboNCrNblfAdqRVH1PocPTalWY%2BORvrDYvKGY2Ai1RRqow0WHQ2k7P6n%2FrXz0BImnIPkIjkYs0OYL1uK3DN93brWHmmKpM54mmfjTOBX2d2U37XMs%2Bfz39uOr37S4rZwG7aH2DG7iydtQsE8dapRw6xdk0bLscA2%2FgKXM9ZlaAuPbYy0%2BxafMZSiFQNqjGKqL8cTTvVoz%2BBa0E4Vx7cmClFBKO3SJyqGQQirykA6wEweY6KRRcSNxV8ixUN0GrS0BxzX6b3mWtJPws5iSRkdT%2FKOueJ7uofOvQo7le0bm3e1gsoZ3VUflhzdqGK7dMfs2i9WlMC6PwRdh1j0qI1RS8vfBFy5TGHAazb37Wxhex3bTapDEfgVda1s8FZh5GnZs%2F9%2FwRwFBtVVn7k4mNP7AKrOcVXUqDjzTvFm%2Fi4thkqn3HHI1lT6s9qP6%2F5xv1ssgVZvzZho2tGhmQ8QjzeeEza3fIRwbl2xAASrSHJY%2FhVg9Xwe%2BeCIeZSPDTFghsmZnQYmyXJMRHhkKlq4SC63X9K%2FQ358Be0UF0wFg921mOUaBEg9QGax3c3OO9lDaLpHTQLNDnC4oyM12EuvSFHzYK%2FBWo5mj4PkLiEKlI0pwOUu0r9YULgoi9uFpLMNjM6cgGOqUBPkS4rLgBTPJNMe0mWgz0z81ETCx%2B9yh3vEucXDTSE7FemlaNYH8xPTLK60HhBk%2FSmcbQntmMFck5PrChK32FwlrQ0SOsJpU5Ux612DfWbGzb2AzCf619T6TuXc5HujMUbUlESb8I7PdB58EoGUuts14Fj7yLXn%2F3Gl%2Fduojwxwto2T40zVVcmcrXOM2FSqm0Abt3TIDp%2Fz4QWZkubn4389imklvQ&X-Amz-Signature=ba2c0e7d6bfa2a352cffdcba7ba69b74490b234da8408edc3c26dc6de345a4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WUL2CR%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T010355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUSGv1xeFQXEm7pSeldALcRqx3gkrwhTh1RUDgE62IwIhAPkiH6EjWwcNyDlBg12yWkoel34bSr7enM7OzpGzxXPiKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhfBRxC6em6CFDojMq3ANgtL70jDUbrkMCmrVirYsIEE%2FVBB8Wg2cY7WTQWhfarvapkSbxej1XZ2vizXukGF%2Bmry316BJJJrWoV1e4kKTeuCkh7V2FdFI4%2F7yJZ9iKLtP%2FcWq%2BJUBTBVoQmpMoM8b6P63rAbZDB%2Ffb%2FPRWJ75aozYNCzI6vHoavLnNU30Eqk4sgPaY%2F3ULl%2BS8O5wYc8Qzmy3SRYXqJSW2vSdyYaHsP46p%2Fqg1eg8XnGPV04wltcN%2BxIlNeY7F79jWp7gaiUvwLe8pzb4oanR6gruPB4fHjE2cl5T8CaqRz7PguniIKQI9gbdDiYCQ%2FtcgdZb5rDd0LIc9LHPD%2FhhuTL3xNm0BMWUpWy%2BEAKo2dVopQfQu7c688sOMp4QICfiobsORVNbazOG%2FZK%2Fst%2Bq1IpqQgPpERwaGScF1XEMejErALlM7mNkPscSfuqsA%2Bh%2BXQ4wE23Gr5HgPYqNULLnb0r7LHvwiZuznlzsrrD5um5iRZuU5UcVBRhzIcop%2BnnjWXd%2BpYjSpgYSoPo6SrDwfqGmSWJrUtyaccWwNbVztDETm6klVx%2BDklYLz%2Bstw1NC9i9Tq9FaAQJQjkPo6kAV%2BxhmXJpDDqv81Fw4LsijiWdROBQnRwg%2BAE0IsX0g708UJizDhzenIBjqkASdw%2Bor3bYIUVcXfmN49f9vdLYPqb5lrYYEwZSd3FoKVdOXhhG9sLaXnDpUO4vymqiuroAiyB5Z2QdSiwUFkNv%2B9i4VxEyJrCTuaZK3sc7WCnlM9AO7N7bF0gSqRHehsXlEn%2BC%2FmSA8IEklJsBPQr%2B6rfMaWTqQJsEn4FFGvKnRN0bs2mpQfO6ruosoXRNPxu7rBgCLQ647VPd01%2Fu5y3m%2BS1%2B13&X-Amz-Signature=8c0756b19a9353c9e27a8400e617f662bfd8972f3e6cda9c959e0699831c97c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WUL2CR%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T010355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUSGv1xeFQXEm7pSeldALcRqx3gkrwhTh1RUDgE62IwIhAPkiH6EjWwcNyDlBg12yWkoel34bSr7enM7OzpGzxXPiKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhfBRxC6em6CFDojMq3ANgtL70jDUbrkMCmrVirYsIEE%2FVBB8Wg2cY7WTQWhfarvapkSbxej1XZ2vizXukGF%2Bmry316BJJJrWoV1e4kKTeuCkh7V2FdFI4%2F7yJZ9iKLtP%2FcWq%2BJUBTBVoQmpMoM8b6P63rAbZDB%2Ffb%2FPRWJ75aozYNCzI6vHoavLnNU30Eqk4sgPaY%2F3ULl%2BS8O5wYc8Qzmy3SRYXqJSW2vSdyYaHsP46p%2Fqg1eg8XnGPV04wltcN%2BxIlNeY7F79jWp7gaiUvwLe8pzb4oanR6gruPB4fHjE2cl5T8CaqRz7PguniIKQI9gbdDiYCQ%2FtcgdZb5rDd0LIc9LHPD%2FhhuTL3xNm0BMWUpWy%2BEAKo2dVopQfQu7c688sOMp4QICfiobsORVNbazOG%2FZK%2Fst%2Bq1IpqQgPpERwaGScF1XEMejErALlM7mNkPscSfuqsA%2Bh%2BXQ4wE23Gr5HgPYqNULLnb0r7LHvwiZuznlzsrrD5um5iRZuU5UcVBRhzIcop%2BnnjWXd%2BpYjSpgYSoPo6SrDwfqGmSWJrUtyaccWwNbVztDETm6klVx%2BDklYLz%2Bstw1NC9i9Tq9FaAQJQjkPo6kAV%2BxhmXJpDDqv81Fw4LsijiWdROBQnRwg%2BAE0IsX0g708UJizDhzenIBjqkASdw%2Bor3bYIUVcXfmN49f9vdLYPqb5lrYYEwZSd3FoKVdOXhhG9sLaXnDpUO4vymqiuroAiyB5Z2QdSiwUFkNv%2B9i4VxEyJrCTuaZK3sc7WCnlM9AO7N7bF0gSqRHehsXlEn%2BC%2FmSA8IEklJsBPQr%2B6rfMaWTqQJsEn4FFGvKnRN0bs2mpQfO6ruosoXRNPxu7rBgCLQ647VPd01%2Fu5y3m%2BS1%2B13&X-Amz-Signature=5e65e5cade4108332214cb7addce39d4897fa67171d9e3e0b88dc539922ec12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WUL2CR%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T010355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUSGv1xeFQXEm7pSeldALcRqx3gkrwhTh1RUDgE62IwIhAPkiH6EjWwcNyDlBg12yWkoel34bSr7enM7OzpGzxXPiKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhfBRxC6em6CFDojMq3ANgtL70jDUbrkMCmrVirYsIEE%2FVBB8Wg2cY7WTQWhfarvapkSbxej1XZ2vizXukGF%2Bmry316BJJJrWoV1e4kKTeuCkh7V2FdFI4%2F7yJZ9iKLtP%2FcWq%2BJUBTBVoQmpMoM8b6P63rAbZDB%2Ffb%2FPRWJ75aozYNCzI6vHoavLnNU30Eqk4sgPaY%2F3ULl%2BS8O5wYc8Qzmy3SRYXqJSW2vSdyYaHsP46p%2Fqg1eg8XnGPV04wltcN%2BxIlNeY7F79jWp7gaiUvwLe8pzb4oanR6gruPB4fHjE2cl5T8CaqRz7PguniIKQI9gbdDiYCQ%2FtcgdZb5rDd0LIc9LHPD%2FhhuTL3xNm0BMWUpWy%2BEAKo2dVopQfQu7c688sOMp4QICfiobsORVNbazOG%2FZK%2Fst%2Bq1IpqQgPpERwaGScF1XEMejErALlM7mNkPscSfuqsA%2Bh%2BXQ4wE23Gr5HgPYqNULLnb0r7LHvwiZuznlzsrrD5um5iRZuU5UcVBRhzIcop%2BnnjWXd%2BpYjSpgYSoPo6SrDwfqGmSWJrUtyaccWwNbVztDETm6klVx%2BDklYLz%2Bstw1NC9i9Tq9FaAQJQjkPo6kAV%2BxhmXJpDDqv81Fw4LsijiWdROBQnRwg%2BAE0IsX0g708UJizDhzenIBjqkASdw%2Bor3bYIUVcXfmN49f9vdLYPqb5lrYYEwZSd3FoKVdOXhhG9sLaXnDpUO4vymqiuroAiyB5Z2QdSiwUFkNv%2B9i4VxEyJrCTuaZK3sc7WCnlM9AO7N7bF0gSqRHehsXlEn%2BC%2FmSA8IEklJsBPQr%2B6rfMaWTqQJsEn4FFGvKnRN0bs2mpQfO6ruosoXRNPxu7rBgCLQ647VPd01%2Fu5y3m%2BS1%2B13&X-Amz-Signature=8b26f718499182cf7b08b932551e8069f434723eb574aa8edca94cabf32fe90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WUL2CR%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T010355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUSGv1xeFQXEm7pSeldALcRqx3gkrwhTh1RUDgE62IwIhAPkiH6EjWwcNyDlBg12yWkoel34bSr7enM7OzpGzxXPiKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhfBRxC6em6CFDojMq3ANgtL70jDUbrkMCmrVirYsIEE%2FVBB8Wg2cY7WTQWhfarvapkSbxej1XZ2vizXukGF%2Bmry316BJJJrWoV1e4kKTeuCkh7V2FdFI4%2F7yJZ9iKLtP%2FcWq%2BJUBTBVoQmpMoM8b6P63rAbZDB%2Ffb%2FPRWJ75aozYNCzI6vHoavLnNU30Eqk4sgPaY%2F3ULl%2BS8O5wYc8Qzmy3SRYXqJSW2vSdyYaHsP46p%2Fqg1eg8XnGPV04wltcN%2BxIlNeY7F79jWp7gaiUvwLe8pzb4oanR6gruPB4fHjE2cl5T8CaqRz7PguniIKQI9gbdDiYCQ%2FtcgdZb5rDd0LIc9LHPD%2FhhuTL3xNm0BMWUpWy%2BEAKo2dVopQfQu7c688sOMp4QICfiobsORVNbazOG%2FZK%2Fst%2Bq1IpqQgPpERwaGScF1XEMejErALlM7mNkPscSfuqsA%2Bh%2BXQ4wE23Gr5HgPYqNULLnb0r7LHvwiZuznlzsrrD5um5iRZuU5UcVBRhzIcop%2BnnjWXd%2BpYjSpgYSoPo6SrDwfqGmSWJrUtyaccWwNbVztDETm6klVx%2BDklYLz%2Bstw1NC9i9Tq9FaAQJQjkPo6kAV%2BxhmXJpDDqv81Fw4LsijiWdROBQnRwg%2BAE0IsX0g708UJizDhzenIBjqkASdw%2Bor3bYIUVcXfmN49f9vdLYPqb5lrYYEwZSd3FoKVdOXhhG9sLaXnDpUO4vymqiuroAiyB5Z2QdSiwUFkNv%2B9i4VxEyJrCTuaZK3sc7WCnlM9AO7N7bF0gSqRHehsXlEn%2BC%2FmSA8IEklJsBPQr%2B6rfMaWTqQJsEn4FFGvKnRN0bs2mpQfO6ruosoXRNPxu7rBgCLQ647VPd01%2Fu5y3m%2BS1%2B13&X-Amz-Signature=2a5de12ff38cfdd33b22e4036dffcf51294f422b9cf3e305f7d7b9a43ada8ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WUL2CR%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T010355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUSGv1xeFQXEm7pSeldALcRqx3gkrwhTh1RUDgE62IwIhAPkiH6EjWwcNyDlBg12yWkoel34bSr7enM7OzpGzxXPiKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhfBRxC6em6CFDojMq3ANgtL70jDUbrkMCmrVirYsIEE%2FVBB8Wg2cY7WTQWhfarvapkSbxej1XZ2vizXukGF%2Bmry316BJJJrWoV1e4kKTeuCkh7V2FdFI4%2F7yJZ9iKLtP%2FcWq%2BJUBTBVoQmpMoM8b6P63rAbZDB%2Ffb%2FPRWJ75aozYNCzI6vHoavLnNU30Eqk4sgPaY%2F3ULl%2BS8O5wYc8Qzmy3SRYXqJSW2vSdyYaHsP46p%2Fqg1eg8XnGPV04wltcN%2BxIlNeY7F79jWp7gaiUvwLe8pzb4oanR6gruPB4fHjE2cl5T8CaqRz7PguniIKQI9gbdDiYCQ%2FtcgdZb5rDd0LIc9LHPD%2FhhuTL3xNm0BMWUpWy%2BEAKo2dVopQfQu7c688sOMp4QICfiobsORVNbazOG%2FZK%2Fst%2Bq1IpqQgPpERwaGScF1XEMejErALlM7mNkPscSfuqsA%2Bh%2BXQ4wE23Gr5HgPYqNULLnb0r7LHvwiZuznlzsrrD5um5iRZuU5UcVBRhzIcop%2BnnjWXd%2BpYjSpgYSoPo6SrDwfqGmSWJrUtyaccWwNbVztDETm6klVx%2BDklYLz%2Bstw1NC9i9Tq9FaAQJQjkPo6kAV%2BxhmXJpDDqv81Fw4LsijiWdROBQnRwg%2BAE0IsX0g708UJizDhzenIBjqkASdw%2Bor3bYIUVcXfmN49f9vdLYPqb5lrYYEwZSd3FoKVdOXhhG9sLaXnDpUO4vymqiuroAiyB5Z2QdSiwUFkNv%2B9i4VxEyJrCTuaZK3sc7WCnlM9AO7N7bF0gSqRHehsXlEn%2BC%2FmSA8IEklJsBPQr%2B6rfMaWTqQJsEn4FFGvKnRN0bs2mpQfO6ruosoXRNPxu7rBgCLQ647VPd01%2Fu5y3m%2BS1%2B13&X-Amz-Signature=8c043f106aa2f53bf3c190af5c69200631952e89f7998d60fb8f6ee632fdbf29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAH5QWQ%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T010355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYP3vL55GJnEBa4BmsgnYam%2BB8Lm4S3nbb3MdIsYSREwIgRyZprBiPTRQLCETceQaNnSxOFfynQV9Rn5lYpZa9HRIqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxN%2BCe2l4uLTtTfSSrcA9qboNCrNblfAdqRVH1PocPTalWY%2BORvrDYvKGY2Ai1RRqow0WHQ2k7P6n%2FrXz0BImnIPkIjkYs0OYL1uK3DN93brWHmmKpM54mmfjTOBX2d2U37XMs%2Bfz39uOr37S4rZwG7aH2DG7iydtQsE8dapRw6xdk0bLscA2%2FgKXM9ZlaAuPbYy0%2BxafMZSiFQNqjGKqL8cTTvVoz%2BBa0E4Vx7cmClFBKO3SJyqGQQirykA6wEweY6KRRcSNxV8ixUN0GrS0BxzX6b3mWtJPws5iSRkdT%2FKOueJ7uofOvQo7le0bm3e1gsoZ3VUflhzdqGK7dMfs2i9WlMC6PwRdh1j0qI1RS8vfBFy5TGHAazb37Wxhex3bTapDEfgVda1s8FZh5GnZs%2F9%2FwRwFBtVVn7k4mNP7AKrOcVXUqDjzTvFm%2Fi4thkqn3HHI1lT6s9qP6%2F5xv1ssgVZvzZho2tGhmQ8QjzeeEza3fIRwbl2xAASrSHJY%2FhVg9Xwe%2BeCIeZSPDTFghsmZnQYmyXJMRHhkKlq4SC63X9K%2FQ358Be0UF0wFg921mOUaBEg9QGax3c3OO9lDaLpHTQLNDnC4oyM12EuvSFHzYK%2FBWo5mj4PkLiEKlI0pwOUu0r9YULgoi9uFpLMNjM6cgGOqUBPkS4rLgBTPJNMe0mWgz0z81ETCx%2B9yh3vEucXDTSE7FemlaNYH8xPTLK60HhBk%2FSmcbQntmMFck5PrChK32FwlrQ0SOsJpU5Ux612DfWbGzb2AzCf619T6TuXc5HujMUbUlESb8I7PdB58EoGUuts14Fj7yLXn%2F3Gl%2Fduojwxwto2T40zVVcmcrXOM2FSqm0Abt3TIDp%2Fz4QWZkubn4389imklvQ&X-Amz-Signature=624fa173cb2282babb46a05e03e92c3a8d894253f112c8ffd6ee962d15a457f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

