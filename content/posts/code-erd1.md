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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3SYC5VL%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T011103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIACu1ajME0kxuLP4VyE3UIrivvMVXdzaBiSmjxiqGL86AiBiu9EUkPmLUG%2BUrJckC8zlMB31AedGi3%2Fx4g7u9V18lSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMXLhyvOWluCd6apf4KtwDSk5NcEIR1zia%2FjBcKxGrT2sBne0I0RRJ47LL5NDjbxpkP8zxsF5GDNMBCZtCK3%2BAXUY29dp0AiV6LlUgIwXyk8f702vraoYKYjGGbOLmGImYeJQIGqNpL5j4%2BJ8epbsAo1mkz1awKHPz24f2H%2Fhm9gSZ5aQt8J5QPJcGzlr0whymRXwTFrWXqnxE3qrWNLMxG4hX9%2Ffa73UwLBBBvjBHUk6FwJV%2FhenYHrQq7dyrhkr%2BJwHMxH5nc17s%2FGXWubRmRXNuLbz%2FytRkFmRQTEsMd8smVkeHqA4BZWJi9dDPvdaicW%2F6fpeOgXDjba32KxhL4Tgao9VUdmcbolEpB2ty4eUV5J80XiSfQBrhqM3Yk65qwZN4r0Q8WN97wurywSHRHQSDVxj8LUnd7%2B7MfkPN6cJDeVdeDDWmn9zNHAY1T%2F3TjY%2FKblo9yDMjz1EZjN%2F4tkcGtHoMs5jW9TRKhR1%2FVTOoYzSV%2Fezh72KRivWHBbWoESs4gyrSbrAO5hhHFEWN%2Baa%2Fugekcba7029MN7V%2FgVsG6OFpfY5OwPK6W20Q1EOgsprNHYO%2BF9QeE32rG6Q7jlW%2F2XI7CNIumLjO4qrM6mJccGebzhvMw7SWehGvVi%2FxHct1xuNOslb9jCswhZ%2BJyQY6pgFB2b%2Bpze%2FWYSgQo7VsCUDmhOcD8VC0izgQEe%2FtPKuCqIdPIJaRWmEscYP9Zh2H2r6q4eK4OEBKAOLAvtqNHQx%2BM4qBNOkOx1a9NRlJALVV%2FWKjHw0qP%2FUd2%2B3W3fNjLxplVGHJVHD96KFNm6hgwMZVzWMgTyFGC5tj0L3obJ%2FmoaAyNqFLeUmF1IYCmbZfdj9TlFI3JyJeu%2BzImqNKA9ocPUY1GA%2FK&X-Amz-Signature=d517466cfc27b6c52ed4e93d36b127d1d868e0ee9afd22ca0c7a73cb66033ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WD763S%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T011103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHGfsTBzUhP1u2e0tV4BBtNrRYngQYylADUPE1tzVwN3AiBEI5tHer3BWNgDw88A7WFjxO5oL1xIotaf3To98LLz6yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMkxllUSW5lCIO2dK0KtwDJ8e2OLZ3XYBLWh5B3u4z9NIkGZ%2BFQSoms3Y84B3EUOmKZTv4U5f%2FiT2juGf9vQ3ciKUIDBSYwM77bkbBE4nWN4yK76j7X3w0JPMVMtoq0c393v%2BooXdaZf6fys1ejLu5DJiHOkL6i2G6yy9jM3HR2IEqjedyD5MIlmjZI%2FIIa2R7MGKhvfvZ0unGmux3fWr1EXWP6BgwKKGfHrHKEo863Hm%2FBfG5IjN6AStUKf8u6uijRcGdYr1%2BpxAEQGEZ8FnQXzl1%2FBxV1vtmtjhC76PreUVpoN%2FltaWMZEJHo9beWtk96K8CQV55eB3g8zjxFUc2bgiKNYoDZv17h%2BFmrxYN2eUa3OpmUbrY4BscdjRdTuzfyBfuvQ0hkDEwjRaOpz4XDBP3qXxV78GraJZ%2B14%2FhlQHjWTM63XzgOEvolpgdmBZwbU24uHUczLDtHqYvIXhELhneuVs6XpMwlq21Zn8W4CS06%2FWDL%2FO%2BRHYDL7vEJuZKip4PgcHO1O0JagRG3jvCyU1zda04wZDFnJiJorDgHTNTy67BNpf4yNUZI8yVDnTTvy4NaZ5%2Fl61Pp8QGjFiGMxIRZQv7W8Cnv4iVkjtfEsTRGvBLty5KPr3rJg4qU6eBkaoyH5PBrCB%2Fnuowhp%2BJyQY6pgFn4AAQ4gNtMTSR315n3NoS8MSJwGCLsBMzXMXogZY5mCm024AAn1aK8j%2BelERPxr24L%2F969oGGa2wb1Qj4ML%2FeuGUs0E2X5elZVhb4Wo8xIpUrV0b%2FUdqGVRPZVixlwHLGLEkGGl70Zk6SSFTvmxfzU0UnXb4OqeGceKbGKOc0NlYC3aDk6gneqtDD0nWKqCyNbvV%2FkOjegq3I3RIwYQ00hR0Hvls%2B&X-Amz-Signature=5c708877505dd9ab7ec6d62ef94ca6f70efcccfad77b8179454a87a93c29e633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WD763S%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T011103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHGfsTBzUhP1u2e0tV4BBtNrRYngQYylADUPE1tzVwN3AiBEI5tHer3BWNgDw88A7WFjxO5oL1xIotaf3To98LLz6yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMkxllUSW5lCIO2dK0KtwDJ8e2OLZ3XYBLWh5B3u4z9NIkGZ%2BFQSoms3Y84B3EUOmKZTv4U5f%2FiT2juGf9vQ3ciKUIDBSYwM77bkbBE4nWN4yK76j7X3w0JPMVMtoq0c393v%2BooXdaZf6fys1ejLu5DJiHOkL6i2G6yy9jM3HR2IEqjedyD5MIlmjZI%2FIIa2R7MGKhvfvZ0unGmux3fWr1EXWP6BgwKKGfHrHKEo863Hm%2FBfG5IjN6AStUKf8u6uijRcGdYr1%2BpxAEQGEZ8FnQXzl1%2FBxV1vtmtjhC76PreUVpoN%2FltaWMZEJHo9beWtk96K8CQV55eB3g8zjxFUc2bgiKNYoDZv17h%2BFmrxYN2eUa3OpmUbrY4BscdjRdTuzfyBfuvQ0hkDEwjRaOpz4XDBP3qXxV78GraJZ%2B14%2FhlQHjWTM63XzgOEvolpgdmBZwbU24uHUczLDtHqYvIXhELhneuVs6XpMwlq21Zn8W4CS06%2FWDL%2FO%2BRHYDL7vEJuZKip4PgcHO1O0JagRG3jvCyU1zda04wZDFnJiJorDgHTNTy67BNpf4yNUZI8yVDnTTvy4NaZ5%2Fl61Pp8QGjFiGMxIRZQv7W8Cnv4iVkjtfEsTRGvBLty5KPr3rJg4qU6eBkaoyH5PBrCB%2Fnuowhp%2BJyQY6pgFn4AAQ4gNtMTSR315n3NoS8MSJwGCLsBMzXMXogZY5mCm024AAn1aK8j%2BelERPxr24L%2F969oGGa2wb1Qj4ML%2FeuGUs0E2X5elZVhb4Wo8xIpUrV0b%2FUdqGVRPZVixlwHLGLEkGGl70Zk6SSFTvmxfzU0UnXb4OqeGceKbGKOc0NlYC3aDk6gneqtDD0nWKqCyNbvV%2FkOjegq3I3RIwYQ00hR0Hvls%2B&X-Amz-Signature=6061c6e09934ccf2034ac34914d3a4a2df3a5be84f38259a96aa746570961115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WD763S%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T011103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHGfsTBzUhP1u2e0tV4BBtNrRYngQYylADUPE1tzVwN3AiBEI5tHer3BWNgDw88A7WFjxO5oL1xIotaf3To98LLz6yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMkxllUSW5lCIO2dK0KtwDJ8e2OLZ3XYBLWh5B3u4z9NIkGZ%2BFQSoms3Y84B3EUOmKZTv4U5f%2FiT2juGf9vQ3ciKUIDBSYwM77bkbBE4nWN4yK76j7X3w0JPMVMtoq0c393v%2BooXdaZf6fys1ejLu5DJiHOkL6i2G6yy9jM3HR2IEqjedyD5MIlmjZI%2FIIa2R7MGKhvfvZ0unGmux3fWr1EXWP6BgwKKGfHrHKEo863Hm%2FBfG5IjN6AStUKf8u6uijRcGdYr1%2BpxAEQGEZ8FnQXzl1%2FBxV1vtmtjhC76PreUVpoN%2FltaWMZEJHo9beWtk96K8CQV55eB3g8zjxFUc2bgiKNYoDZv17h%2BFmrxYN2eUa3OpmUbrY4BscdjRdTuzfyBfuvQ0hkDEwjRaOpz4XDBP3qXxV78GraJZ%2B14%2FhlQHjWTM63XzgOEvolpgdmBZwbU24uHUczLDtHqYvIXhELhneuVs6XpMwlq21Zn8W4CS06%2FWDL%2FO%2BRHYDL7vEJuZKip4PgcHO1O0JagRG3jvCyU1zda04wZDFnJiJorDgHTNTy67BNpf4yNUZI8yVDnTTvy4NaZ5%2Fl61Pp8QGjFiGMxIRZQv7W8Cnv4iVkjtfEsTRGvBLty5KPr3rJg4qU6eBkaoyH5PBrCB%2Fnuowhp%2BJyQY6pgFn4AAQ4gNtMTSR315n3NoS8MSJwGCLsBMzXMXogZY5mCm024AAn1aK8j%2BelERPxr24L%2F969oGGa2wb1Qj4ML%2FeuGUs0E2X5elZVhb4Wo8xIpUrV0b%2FUdqGVRPZVixlwHLGLEkGGl70Zk6SSFTvmxfzU0UnXb4OqeGceKbGKOc0NlYC3aDk6gneqtDD0nWKqCyNbvV%2FkOjegq3I3RIwYQ00hR0Hvls%2B&X-Amz-Signature=7b131ebb8f33c35d70e91c045130572bef4f37e9be0ba8c8901d5489116b0bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WD763S%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T011103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHGfsTBzUhP1u2e0tV4BBtNrRYngQYylADUPE1tzVwN3AiBEI5tHer3BWNgDw88A7WFjxO5oL1xIotaf3To98LLz6yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMkxllUSW5lCIO2dK0KtwDJ8e2OLZ3XYBLWh5B3u4z9NIkGZ%2BFQSoms3Y84B3EUOmKZTv4U5f%2FiT2juGf9vQ3ciKUIDBSYwM77bkbBE4nWN4yK76j7X3w0JPMVMtoq0c393v%2BooXdaZf6fys1ejLu5DJiHOkL6i2G6yy9jM3HR2IEqjedyD5MIlmjZI%2FIIa2R7MGKhvfvZ0unGmux3fWr1EXWP6BgwKKGfHrHKEo863Hm%2FBfG5IjN6AStUKf8u6uijRcGdYr1%2BpxAEQGEZ8FnQXzl1%2FBxV1vtmtjhC76PreUVpoN%2FltaWMZEJHo9beWtk96K8CQV55eB3g8zjxFUc2bgiKNYoDZv17h%2BFmrxYN2eUa3OpmUbrY4BscdjRdTuzfyBfuvQ0hkDEwjRaOpz4XDBP3qXxV78GraJZ%2B14%2FhlQHjWTM63XzgOEvolpgdmBZwbU24uHUczLDtHqYvIXhELhneuVs6XpMwlq21Zn8W4CS06%2FWDL%2FO%2BRHYDL7vEJuZKip4PgcHO1O0JagRG3jvCyU1zda04wZDFnJiJorDgHTNTy67BNpf4yNUZI8yVDnTTvy4NaZ5%2Fl61Pp8QGjFiGMxIRZQv7W8Cnv4iVkjtfEsTRGvBLty5KPr3rJg4qU6eBkaoyH5PBrCB%2Fnuowhp%2BJyQY6pgFn4AAQ4gNtMTSR315n3NoS8MSJwGCLsBMzXMXogZY5mCm024AAn1aK8j%2BelERPxr24L%2F969oGGa2wb1Qj4ML%2FeuGUs0E2X5elZVhb4Wo8xIpUrV0b%2FUdqGVRPZVixlwHLGLEkGGl70Zk6SSFTvmxfzU0UnXb4OqeGceKbGKOc0NlYC3aDk6gneqtDD0nWKqCyNbvV%2FkOjegq3I3RIwYQ00hR0Hvls%2B&X-Amz-Signature=2647cb882e96f10fd7f3c232a00d6b19cc32831780aebb4ec454d97bcc26539e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WD763S%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T011103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHGfsTBzUhP1u2e0tV4BBtNrRYngQYylADUPE1tzVwN3AiBEI5tHer3BWNgDw88A7WFjxO5oL1xIotaf3To98LLz6yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMkxllUSW5lCIO2dK0KtwDJ8e2OLZ3XYBLWh5B3u4z9NIkGZ%2BFQSoms3Y84B3EUOmKZTv4U5f%2FiT2juGf9vQ3ciKUIDBSYwM77bkbBE4nWN4yK76j7X3w0JPMVMtoq0c393v%2BooXdaZf6fys1ejLu5DJiHOkL6i2G6yy9jM3HR2IEqjedyD5MIlmjZI%2FIIa2R7MGKhvfvZ0unGmux3fWr1EXWP6BgwKKGfHrHKEo863Hm%2FBfG5IjN6AStUKf8u6uijRcGdYr1%2BpxAEQGEZ8FnQXzl1%2FBxV1vtmtjhC76PreUVpoN%2FltaWMZEJHo9beWtk96K8CQV55eB3g8zjxFUc2bgiKNYoDZv17h%2BFmrxYN2eUa3OpmUbrY4BscdjRdTuzfyBfuvQ0hkDEwjRaOpz4XDBP3qXxV78GraJZ%2B14%2FhlQHjWTM63XzgOEvolpgdmBZwbU24uHUczLDtHqYvIXhELhneuVs6XpMwlq21Zn8W4CS06%2FWDL%2FO%2BRHYDL7vEJuZKip4PgcHO1O0JagRG3jvCyU1zda04wZDFnJiJorDgHTNTy67BNpf4yNUZI8yVDnTTvy4NaZ5%2Fl61Pp8QGjFiGMxIRZQv7W8Cnv4iVkjtfEsTRGvBLty5KPr3rJg4qU6eBkaoyH5PBrCB%2Fnuowhp%2BJyQY6pgFn4AAQ4gNtMTSR315n3NoS8MSJwGCLsBMzXMXogZY5mCm024AAn1aK8j%2BelERPxr24L%2F969oGGa2wb1Qj4ML%2FeuGUs0E2X5elZVhb4Wo8xIpUrV0b%2FUdqGVRPZVixlwHLGLEkGGl70Zk6SSFTvmxfzU0UnXb4OqeGceKbGKOc0NlYC3aDk6gneqtDD0nWKqCyNbvV%2FkOjegq3I3RIwYQ00hR0Hvls%2B&X-Amz-Signature=760e51ebe58fd0d05d935caeab72ee524974c9178c1be52741cff229663124e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3SYC5VL%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T011103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIACu1ajME0kxuLP4VyE3UIrivvMVXdzaBiSmjxiqGL86AiBiu9EUkPmLUG%2BUrJckC8zlMB31AedGi3%2Fx4g7u9V18lSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMXLhyvOWluCd6apf4KtwDSk5NcEIR1zia%2FjBcKxGrT2sBne0I0RRJ47LL5NDjbxpkP8zxsF5GDNMBCZtCK3%2BAXUY29dp0AiV6LlUgIwXyk8f702vraoYKYjGGbOLmGImYeJQIGqNpL5j4%2BJ8epbsAo1mkz1awKHPz24f2H%2Fhm9gSZ5aQt8J5QPJcGzlr0whymRXwTFrWXqnxE3qrWNLMxG4hX9%2Ffa73UwLBBBvjBHUk6FwJV%2FhenYHrQq7dyrhkr%2BJwHMxH5nc17s%2FGXWubRmRXNuLbz%2FytRkFmRQTEsMd8smVkeHqA4BZWJi9dDPvdaicW%2F6fpeOgXDjba32KxhL4Tgao9VUdmcbolEpB2ty4eUV5J80XiSfQBrhqM3Yk65qwZN4r0Q8WN97wurywSHRHQSDVxj8LUnd7%2B7MfkPN6cJDeVdeDDWmn9zNHAY1T%2F3TjY%2FKblo9yDMjz1EZjN%2F4tkcGtHoMs5jW9TRKhR1%2FVTOoYzSV%2Fezh72KRivWHBbWoESs4gyrSbrAO5hhHFEWN%2Baa%2Fugekcba7029MN7V%2FgVsG6OFpfY5OwPK6W20Q1EOgsprNHYO%2BF9QeE32rG6Q7jlW%2F2XI7CNIumLjO4qrM6mJccGebzhvMw7SWehGvVi%2FxHct1xuNOslb9jCswhZ%2BJyQY6pgFB2b%2Bpze%2FWYSgQo7VsCUDmhOcD8VC0izgQEe%2FtPKuCqIdPIJaRWmEscYP9Zh2H2r6q4eK4OEBKAOLAvtqNHQx%2BM4qBNOkOx1a9NRlJALVV%2FWKjHw0qP%2FUd2%2B3W3fNjLxplVGHJVHD96KFNm6hgwMZVzWMgTyFGC5tj0L3obJ%2FmoaAyNqFLeUmF1IYCmbZfdj9TlFI3JyJeu%2BzImqNKA9ocPUY1GA%2FK&X-Amz-Signature=8307f1fb579464ad00b9bdd9d562bb2582cc9a257d6e452996bffe64a29b85c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

