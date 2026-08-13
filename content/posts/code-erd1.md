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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWENHAP%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T015715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCDInbVP%2BY5%2BIzp4GTTPLEphRLPsRKkE77H5z5yLjEEUAIhAPhuU29dkl8bR4pXHm4qpuHFr1ZdpHH1dyTkmDm6wNRVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmvYZoyZZRWYabBKYq3AP%2BaaobUHfruBnJMkRRDYBuc78SSJh2tKxrqpV4iBv1lWBitkpVUKisGMZ1UhnKKyN1liMEyT%2F%2FaQXksR6e56oeC9bqkzUgQriBvQKl32Rzr0gQwk3HgPAa0Ryff4iaK9j2GfTskynQIe%2B4gOZQHGKUckTK9QGEryAjkpJKlWFPi2pfX1iOsB5emr%2F07W5SvXW3lTk0uKh%2BRQEKUfnQX%2Bn0KNHhS%2BEJ0NQggnfFiPjFjTFDpVraUufwdOCNmb0LfeZs%2BMv%2F6lKf7hFSmhNjcD9j77ZzpooLPjFDBaH4Mh4FSoqcVWjH9xi8f9JjXTsvBgOPS52F5wbCwNfVb%2BcZyhFcwRanTMP6%2Bap8O3Eq3cdKmYrq87t9PQ3RiimnEG2XmPxz%2BUKFUpAIGQpTLCxoTAo%2FACnnDwZ5lDs0HEAhn%2F%2FfolomxsVjjm%2BfF7VXc76pxjpAey0Hx92BnSuhIbsRQPOyhHWjDWiZVTiBhOF%2FtxYG%2FCv9hCWJgWKqbKyA2YVGSN7kbPSmkpz66trv%2FmhofYTk6mZHhaQZ2Ht1PCTzmBOHr4DG6YqD7ZdvCQwxqIBN2bWbnYE42%2FcALDKrDG7%2FSOH9%2FTmUL%2BnQkm2zMdgzEaUble8IlRdxWlUNqWbAWjCAw%2FTTBjqkAWq%2BZBmHycSNQ0rIuNunYd2hoak8WaaftzGCXh4ShmKZxYNaTNWMwU1yL9LfIGrhJ1p9r%2BgGMYfbAl7YPfxcrmvCl09kYiOelRRGImnhjEEjWsHFvzR9SaQ75HzqD8OzQlJwvMuAIoiuam6xsC025SeAglDf9KVsYKvVKZdIEGLIyNdcOp1BXS6M6LP2zhIiVPvumbApOwoDkahY4GbtO3yEbyLD&X-Amz-Signature=6b5e7bf5ae9d5eb44458874a7f30ecdc3c0893f275e140f93a3368f21f0b27b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEKVVTJ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPFS3dbMOYf53LtEmkZLzhueApQ%2BnAgp3mKg5FvYU7EwIhAPd2k5pZ%2B%2FbPMlX%2BAXZS78dc7i6YBfu2mqT94KWm9x38KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdwoj1K76OnwWd6%2BYq3APZtv29TKu%2B5x8f9BKfkp2IyApb252wXD%2FbcVaRQlFRfxUmhtfFqeoZiA7rhTTNMQb6cjH1BuyzAaGsoX0%2BnPjCQOkA51FCQi2bQ41MpZJ2%2FK3Fqr06NRcLm%2BgS1FDbByCYSq4n9wtjJQbphwS1m6vVYjCudinw%2F7r2WBN5jB7NnaT9AznluVL7zX4Ss9FWV7MH%2BanXlQc4FNb0zCskXihrpF3YbQ%2BCD%2BR5UVipXQy52LDj60glzlxzCSC%2FOVRXy7%2F72ylbHeHJkKxD%2BZQvOV2hnxVNJPyF6NnTvoBEe9%2FajRK1EWhM3QW8QjOl3VbPOG83SovriRkrivojuJlPhfsw1ObO%2BsIXHhU1x40oEs2aA99bMfsbDz7pmhF0aCLR795btL2XTFwLQTRHQ8pN1f9%2FAzQ8Vo0AB%2FNSDpZIbB%2Bvfo1NcQ7KQQpW%2FdOzv%2FYrIZkUr5sUOrucZQDnPzdyNEPC%2BG6%2B0gcXAGKFIInoX59p9AWLB%2FDBXKYBA0VQ3ZHvYstz1jK6CwQrRtYFdEWzqMJYBjnyxOI7e%2BLdrVw5PyfDhectDMsq6sKBTpn7BahrTA0bTeEvrWo%2BqJoxNoODvZvVralF8oFKRBwOXc5mfH96R02oCTRkrgMae0v0FjCLxPTTBjqkAS0j5%2FqIoWtVuyLrMK7rNrpbV%2B8Fsp3ZsfwtR42pyOheDXR2cuandoMJPKRsThxeGBnTFCPINuUM%2FfKoue2CZPxjFgJXWzKzzAA2LZ0V%2FY8RV6L9bowXgNJaE6jct0HsVClQd5YvFEbfuzBeTNz1giw7b5J%2F0ugxjIuenPV8YNbWU1n8QQQk3vgXTyXT5Z6KDLMc%2B2BpZaTFetlC6%2ByvRZmFNQc%2F&X-Amz-Signature=a0a02830102e3295979ada6d550e5503de14b22a976c49f2393d60aa8dd22119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEKVVTJ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPFS3dbMOYf53LtEmkZLzhueApQ%2BnAgp3mKg5FvYU7EwIhAPd2k5pZ%2B%2FbPMlX%2BAXZS78dc7i6YBfu2mqT94KWm9x38KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdwoj1K76OnwWd6%2BYq3APZtv29TKu%2B5x8f9BKfkp2IyApb252wXD%2FbcVaRQlFRfxUmhtfFqeoZiA7rhTTNMQb6cjH1BuyzAaGsoX0%2BnPjCQOkA51FCQi2bQ41MpZJ2%2FK3Fqr06NRcLm%2BgS1FDbByCYSq4n9wtjJQbphwS1m6vVYjCudinw%2F7r2WBN5jB7NnaT9AznluVL7zX4Ss9FWV7MH%2BanXlQc4FNb0zCskXihrpF3YbQ%2BCD%2BR5UVipXQy52LDj60glzlxzCSC%2FOVRXy7%2F72ylbHeHJkKxD%2BZQvOV2hnxVNJPyF6NnTvoBEe9%2FajRK1EWhM3QW8QjOl3VbPOG83SovriRkrivojuJlPhfsw1ObO%2BsIXHhU1x40oEs2aA99bMfsbDz7pmhF0aCLR795btL2XTFwLQTRHQ8pN1f9%2FAzQ8Vo0AB%2FNSDpZIbB%2Bvfo1NcQ7KQQpW%2FdOzv%2FYrIZkUr5sUOrucZQDnPzdyNEPC%2BG6%2B0gcXAGKFIInoX59p9AWLB%2FDBXKYBA0VQ3ZHvYstz1jK6CwQrRtYFdEWzqMJYBjnyxOI7e%2BLdrVw5PyfDhectDMsq6sKBTpn7BahrTA0bTeEvrWo%2BqJoxNoODvZvVralF8oFKRBwOXc5mfH96R02oCTRkrgMae0v0FjCLxPTTBjqkAS0j5%2FqIoWtVuyLrMK7rNrpbV%2B8Fsp3ZsfwtR42pyOheDXR2cuandoMJPKRsThxeGBnTFCPINuUM%2FfKoue2CZPxjFgJXWzKzzAA2LZ0V%2FY8RV6L9bowXgNJaE6jct0HsVClQd5YvFEbfuzBeTNz1giw7b5J%2F0ugxjIuenPV8YNbWU1n8QQQk3vgXTyXT5Z6KDLMc%2B2BpZaTFetlC6%2ByvRZmFNQc%2F&X-Amz-Signature=f98307d424b87f1e7c72f7ea1d9f848d327b52f1987c0aacf282108aaf20bf21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEKVVTJ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPFS3dbMOYf53LtEmkZLzhueApQ%2BnAgp3mKg5FvYU7EwIhAPd2k5pZ%2B%2FbPMlX%2BAXZS78dc7i6YBfu2mqT94KWm9x38KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdwoj1K76OnwWd6%2BYq3APZtv29TKu%2B5x8f9BKfkp2IyApb252wXD%2FbcVaRQlFRfxUmhtfFqeoZiA7rhTTNMQb6cjH1BuyzAaGsoX0%2BnPjCQOkA51FCQi2bQ41MpZJ2%2FK3Fqr06NRcLm%2BgS1FDbByCYSq4n9wtjJQbphwS1m6vVYjCudinw%2F7r2WBN5jB7NnaT9AznluVL7zX4Ss9FWV7MH%2BanXlQc4FNb0zCskXihrpF3YbQ%2BCD%2BR5UVipXQy52LDj60glzlxzCSC%2FOVRXy7%2F72ylbHeHJkKxD%2BZQvOV2hnxVNJPyF6NnTvoBEe9%2FajRK1EWhM3QW8QjOl3VbPOG83SovriRkrivojuJlPhfsw1ObO%2BsIXHhU1x40oEs2aA99bMfsbDz7pmhF0aCLR795btL2XTFwLQTRHQ8pN1f9%2FAzQ8Vo0AB%2FNSDpZIbB%2Bvfo1NcQ7KQQpW%2FdOzv%2FYrIZkUr5sUOrucZQDnPzdyNEPC%2BG6%2B0gcXAGKFIInoX59p9AWLB%2FDBXKYBA0VQ3ZHvYstz1jK6CwQrRtYFdEWzqMJYBjnyxOI7e%2BLdrVw5PyfDhectDMsq6sKBTpn7BahrTA0bTeEvrWo%2BqJoxNoODvZvVralF8oFKRBwOXc5mfH96R02oCTRkrgMae0v0FjCLxPTTBjqkAS0j5%2FqIoWtVuyLrMK7rNrpbV%2B8Fsp3ZsfwtR42pyOheDXR2cuandoMJPKRsThxeGBnTFCPINuUM%2FfKoue2CZPxjFgJXWzKzzAA2LZ0V%2FY8RV6L9bowXgNJaE6jct0HsVClQd5YvFEbfuzBeTNz1giw7b5J%2F0ugxjIuenPV8YNbWU1n8QQQk3vgXTyXT5Z6KDLMc%2B2BpZaTFetlC6%2ByvRZmFNQc%2F&X-Amz-Signature=d53bc9ad58a4c43fea9611276576bfe8da23f581e9a18265f5acc013584daafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEKVVTJ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPFS3dbMOYf53LtEmkZLzhueApQ%2BnAgp3mKg5FvYU7EwIhAPd2k5pZ%2B%2FbPMlX%2BAXZS78dc7i6YBfu2mqT94KWm9x38KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdwoj1K76OnwWd6%2BYq3APZtv29TKu%2B5x8f9BKfkp2IyApb252wXD%2FbcVaRQlFRfxUmhtfFqeoZiA7rhTTNMQb6cjH1BuyzAaGsoX0%2BnPjCQOkA51FCQi2bQ41MpZJ2%2FK3Fqr06NRcLm%2BgS1FDbByCYSq4n9wtjJQbphwS1m6vVYjCudinw%2F7r2WBN5jB7NnaT9AznluVL7zX4Ss9FWV7MH%2BanXlQc4FNb0zCskXihrpF3YbQ%2BCD%2BR5UVipXQy52LDj60glzlxzCSC%2FOVRXy7%2F72ylbHeHJkKxD%2BZQvOV2hnxVNJPyF6NnTvoBEe9%2FajRK1EWhM3QW8QjOl3VbPOG83SovriRkrivojuJlPhfsw1ObO%2BsIXHhU1x40oEs2aA99bMfsbDz7pmhF0aCLR795btL2XTFwLQTRHQ8pN1f9%2FAzQ8Vo0AB%2FNSDpZIbB%2Bvfo1NcQ7KQQpW%2FdOzv%2FYrIZkUr5sUOrucZQDnPzdyNEPC%2BG6%2B0gcXAGKFIInoX59p9AWLB%2FDBXKYBA0VQ3ZHvYstz1jK6CwQrRtYFdEWzqMJYBjnyxOI7e%2BLdrVw5PyfDhectDMsq6sKBTpn7BahrTA0bTeEvrWo%2BqJoxNoODvZvVralF8oFKRBwOXc5mfH96R02oCTRkrgMae0v0FjCLxPTTBjqkAS0j5%2FqIoWtVuyLrMK7rNrpbV%2B8Fsp3ZsfwtR42pyOheDXR2cuandoMJPKRsThxeGBnTFCPINuUM%2FfKoue2CZPxjFgJXWzKzzAA2LZ0V%2FY8RV6L9bowXgNJaE6jct0HsVClQd5YvFEbfuzBeTNz1giw7b5J%2F0ugxjIuenPV8YNbWU1n8QQQk3vgXTyXT5Z6KDLMc%2B2BpZaTFetlC6%2ByvRZmFNQc%2F&X-Amz-Signature=2ffa6e9da0a962abca87cc8d131997b5aab529acd320545042b996fe52be7cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LEKVVTJ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPFS3dbMOYf53LtEmkZLzhueApQ%2BnAgp3mKg5FvYU7EwIhAPd2k5pZ%2B%2FbPMlX%2BAXZS78dc7i6YBfu2mqT94KWm9x38KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdwoj1K76OnwWd6%2BYq3APZtv29TKu%2B5x8f9BKfkp2IyApb252wXD%2FbcVaRQlFRfxUmhtfFqeoZiA7rhTTNMQb6cjH1BuyzAaGsoX0%2BnPjCQOkA51FCQi2bQ41MpZJ2%2FK3Fqr06NRcLm%2BgS1FDbByCYSq4n9wtjJQbphwS1m6vVYjCudinw%2F7r2WBN5jB7NnaT9AznluVL7zX4Ss9FWV7MH%2BanXlQc4FNb0zCskXihrpF3YbQ%2BCD%2BR5UVipXQy52LDj60glzlxzCSC%2FOVRXy7%2F72ylbHeHJkKxD%2BZQvOV2hnxVNJPyF6NnTvoBEe9%2FajRK1EWhM3QW8QjOl3VbPOG83SovriRkrivojuJlPhfsw1ObO%2BsIXHhU1x40oEs2aA99bMfsbDz7pmhF0aCLR795btL2XTFwLQTRHQ8pN1f9%2FAzQ8Vo0AB%2FNSDpZIbB%2Bvfo1NcQ7KQQpW%2FdOzv%2FYrIZkUr5sUOrucZQDnPzdyNEPC%2BG6%2B0gcXAGKFIInoX59p9AWLB%2FDBXKYBA0VQ3ZHvYstz1jK6CwQrRtYFdEWzqMJYBjnyxOI7e%2BLdrVw5PyfDhectDMsq6sKBTpn7BahrTA0bTeEvrWo%2BqJoxNoODvZvVralF8oFKRBwOXc5mfH96R02oCTRkrgMae0v0FjCLxPTTBjqkAS0j5%2FqIoWtVuyLrMK7rNrpbV%2B8Fsp3ZsfwtR42pyOheDXR2cuandoMJPKRsThxeGBnTFCPINuUM%2FfKoue2CZPxjFgJXWzKzzAA2LZ0V%2FY8RV6L9bowXgNJaE6jct0HsVClQd5YvFEbfuzBeTNz1giw7b5J%2F0ugxjIuenPV8YNbWU1n8QQQk3vgXTyXT5Z6KDLMc%2B2BpZaTFetlC6%2ByvRZmFNQc%2F&X-Amz-Signature=65ed1466787fb59e5b9b6fe87d595f1c3ad8af5c8b7655c5cfdf9a0c157201ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWENHAP%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T015715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCDInbVP%2BY5%2BIzp4GTTPLEphRLPsRKkE77H5z5yLjEEUAIhAPhuU29dkl8bR4pXHm4qpuHFr1ZdpHH1dyTkmDm6wNRVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmvYZoyZZRWYabBKYq3AP%2BaaobUHfruBnJMkRRDYBuc78SSJh2tKxrqpV4iBv1lWBitkpVUKisGMZ1UhnKKyN1liMEyT%2F%2FaQXksR6e56oeC9bqkzUgQriBvQKl32Rzr0gQwk3HgPAa0Ryff4iaK9j2GfTskynQIe%2B4gOZQHGKUckTK9QGEryAjkpJKlWFPi2pfX1iOsB5emr%2F07W5SvXW3lTk0uKh%2BRQEKUfnQX%2Bn0KNHhS%2BEJ0NQggnfFiPjFjTFDpVraUufwdOCNmb0LfeZs%2BMv%2F6lKf7hFSmhNjcD9j77ZzpooLPjFDBaH4Mh4FSoqcVWjH9xi8f9JjXTsvBgOPS52F5wbCwNfVb%2BcZyhFcwRanTMP6%2Bap8O3Eq3cdKmYrq87t9PQ3RiimnEG2XmPxz%2BUKFUpAIGQpTLCxoTAo%2FACnnDwZ5lDs0HEAhn%2F%2FfolomxsVjjm%2BfF7VXc76pxjpAey0Hx92BnSuhIbsRQPOyhHWjDWiZVTiBhOF%2FtxYG%2FCv9hCWJgWKqbKyA2YVGSN7kbPSmkpz66trv%2FmhofYTk6mZHhaQZ2Ht1PCTzmBOHr4DG6YqD7ZdvCQwxqIBN2bWbnYE42%2FcALDKrDG7%2FSOH9%2FTmUL%2BnQkm2zMdgzEaUble8IlRdxWlUNqWbAWjCAw%2FTTBjqkAWq%2BZBmHycSNQ0rIuNunYd2hoak8WaaftzGCXh4ShmKZxYNaTNWMwU1yL9LfIGrhJ1p9r%2BgGMYfbAl7YPfxcrmvCl09kYiOelRRGImnhjEEjWsHFvzR9SaQ75HzqD8OzQlJwvMuAIoiuam6xsC025SeAglDf9KVsYKvVKZdIEGLIyNdcOp1BXS6M6LP2zhIiVPvumbApOwoDkahY4GbtO3yEbyLD&X-Amz-Signature=d447a0c88721e9d06b0f431f7112ad027706b8fc9cb9557a622bf07a80a11660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

