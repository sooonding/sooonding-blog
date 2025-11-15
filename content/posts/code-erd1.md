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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNG42U4W%2F20251115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251115T010122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMo2mi4DHpztsYu8Bbo9XMvm0IAX6G0WO7hMM6XsKbXwIgRInTfW%2FdyF1RpgPQtnsE393goWXywurEAF2hfZX68wwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLANuTTKO9F%2BGbE3uCrcA0BJrGtbREWztr1G%2BfscXt699bl5kL1fP%2B%2FxNjdiirFFziIp9q7bT4T9xad9H13vGocTNuneQx%2BnK8KsPTw66Satn6SkKJNM14G%2BJwsJf5YbS3LKm0xZYoNra36a6Uv1KgukXQT0ZmtNXCEDc26oBhcVBAuFYIjvKYB%2FvyxunYyaBBrmMksxiHRNQvsDWWNXaQ5UZoUko09CMnbRWWLVt8UXqq7pZkoLg9wkGXNBbJDaiZwIuyAQOKEud9%2F43QrIXeACXCzckN2RjwwzRik0WgMnjkT09nnKX8jTKbQOph%2BmmMiPYKXEIEcu%2BHfZfTGIL3Iv3HjJD6r2Ax8z06WSq26Bass%2BxYz09bzUroa6vTT8yD7P12Wprd1O05qWN9qF8Kq%2FUhyLF4x2164tev9n2IKOCQuULfmvHq94Kvt%2B7jN%2BCkNfMXc4hZZWKjuFyTA%2FrQA%2FLrMBwvckg%2FKcnRK3mZdWdhL%2BU%2FnpruARWnpa0E%2Fwn2c6yIJ54AJ7cp6IYj7Rom%2BYXNLOdwMNTkUtx1Y6V0MM02keHM7TacWM%2FgVSaBMU2kLll8%2FZoajF0sAwBQOEC%2FDAsbZQjmuqAmQrbRXWRFYEF2lyORvl9duSgX%2FyAj797qevhXMmRdG9HuiGMIaT38gGOqUBru5f1akpgNlP7oz2d4ZwX0g5%2FL%2FaALLT3RrcbyZc0eU488p8a1aj%2FAIOYLFULFHX268FnT2wTe8TAwnCo32U3NO8JfUB4ZiZn3elrId05SrvSTPnO8m2E7Mogke6PLh0P4gfDyUBZ8KKsbGwvWLLdmLiv18J7bcZI%2Fi6By4QI6WQFz%2FhUrmkH8zljdhB10DHgySnD49g4gRvUe7n4UovEf1zEX6y&X-Amz-Signature=6ed414346e74dab092a98bcb18e6dfde3d7e1aa9839d329998c4908cc2be29a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXWOWLA%2F20251115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251115T010122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2PI7lu7T7NqUdvZHMKCuRLmlrLjVIhAIS1jknlmYApAiEA6ZvH3v6uADgcXkOH%2F83FfPcndQ%2BTNNXNH50RmeFLL6Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN3bG0mQ7L%2FS%2FAyBeircA6YA93S%2BrGmY%2B5lw%2BZGpa3dZqAAWml9lvWitTWaclOC1N1CIYaTL57QADzvupzEzr4Z5dOZ%2BEzbOHh3qySX1%2FZEhohIM%2FHniogLQiMntLHm7Lppq3z56EkIgRLTE7SFRMWtCF5vQghzF6SRBf5t1m2wRyz411QxX5GN2jj8cqW9RRXz5pOO1om21XT54J7R03zXBPet0IFWkjlxzcnaDjXE5Y1wfcDb%2Ft9BTFz3HUxHVwOt6G0jeHaVT3wlilzwvoHyRShX9Jbkdwr%2BXcAkHhHWUbHPjhHQgrmnBhgWNbffiSnBQVTnFtioljUrmkOyguE%2FVK9Dsyfepp6EsSPYMs7E3g5NvSuD5tomCeH1X8%2Fy5ZqT5p4%2FOaykcD6A1ntDPIiSJsbPf89tXNJal1icZLDd2E%2Fs3y8ojt0nD5rUIO42Cu8nVhQAr8JgCcVXjMYNCJS%2FQBvKSQUeNCPKs%2BSg%2Fveu%2BAyRrwNsdsvAeDL5TV4XeKF%2BV3NMPNJiF3ogtea3f5ly5AmIo7vAAPhiSdygfEAlkSSQ982YR4ZPzc%2F3V8Ehzlq4OfjohNHIoEanPvbbAI9%2BGwwwWowt2ThM0Zv5bPCyJzzNIXoqXw8xBzSqFrZrY%2BALuPggWv%2BNaVlxfMM%2BS38gGOqUBh66BpXobumViq6ZvwkNTP2UcBGevR57UMVFHslXmqWoV3k53EQGdCaMSutXL%2B2Ud2%2BnJ7yKihZiI3Lm4LrjTUzIO7ZEV1HmH7%2FlCF%2B4UyXd9A4Rk%2BHxw5%2FzO4sPwpe2oTBoQNstjGRHlea8sQM3IJnG78j6tfte3mOfFNdHtLQ68esaUwbTsIOxuEaNWBE44u54k2jCuKMnncK2j%2BJkIiUDWNqIi&X-Amz-Signature=9c89f6b0a8d4b2d28a65e730e570be214eee73750e1dc55816f0aee1f5895e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXWOWLA%2F20251115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251115T010122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2PI7lu7T7NqUdvZHMKCuRLmlrLjVIhAIS1jknlmYApAiEA6ZvH3v6uADgcXkOH%2F83FfPcndQ%2BTNNXNH50RmeFLL6Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN3bG0mQ7L%2FS%2FAyBeircA6YA93S%2BrGmY%2B5lw%2BZGpa3dZqAAWml9lvWitTWaclOC1N1CIYaTL57QADzvupzEzr4Z5dOZ%2BEzbOHh3qySX1%2FZEhohIM%2FHniogLQiMntLHm7Lppq3z56EkIgRLTE7SFRMWtCF5vQghzF6SRBf5t1m2wRyz411QxX5GN2jj8cqW9RRXz5pOO1om21XT54J7R03zXBPet0IFWkjlxzcnaDjXE5Y1wfcDb%2Ft9BTFz3HUxHVwOt6G0jeHaVT3wlilzwvoHyRShX9Jbkdwr%2BXcAkHhHWUbHPjhHQgrmnBhgWNbffiSnBQVTnFtioljUrmkOyguE%2FVK9Dsyfepp6EsSPYMs7E3g5NvSuD5tomCeH1X8%2Fy5ZqT5p4%2FOaykcD6A1ntDPIiSJsbPf89tXNJal1icZLDd2E%2Fs3y8ojt0nD5rUIO42Cu8nVhQAr8JgCcVXjMYNCJS%2FQBvKSQUeNCPKs%2BSg%2Fveu%2BAyRrwNsdsvAeDL5TV4XeKF%2BV3NMPNJiF3ogtea3f5ly5AmIo7vAAPhiSdygfEAlkSSQ982YR4ZPzc%2F3V8Ehzlq4OfjohNHIoEanPvbbAI9%2BGwwwWowt2ThM0Zv5bPCyJzzNIXoqXw8xBzSqFrZrY%2BALuPggWv%2BNaVlxfMM%2BS38gGOqUBh66BpXobumViq6ZvwkNTP2UcBGevR57UMVFHslXmqWoV3k53EQGdCaMSutXL%2B2Ud2%2BnJ7yKihZiI3Lm4LrjTUzIO7ZEV1HmH7%2FlCF%2B4UyXd9A4Rk%2BHxw5%2FzO4sPwpe2oTBoQNstjGRHlea8sQM3IJnG78j6tfte3mOfFNdHtLQ68esaUwbTsIOxuEaNWBE44u54k2jCuKMnncK2j%2BJkIiUDWNqIi&X-Amz-Signature=8fee55aa35fd35dafa99f41e0ff472fa1036251f903ccee019a5f1566a4bd292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXWOWLA%2F20251115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251115T010122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2PI7lu7T7NqUdvZHMKCuRLmlrLjVIhAIS1jknlmYApAiEA6ZvH3v6uADgcXkOH%2F83FfPcndQ%2BTNNXNH50RmeFLL6Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN3bG0mQ7L%2FS%2FAyBeircA6YA93S%2BrGmY%2B5lw%2BZGpa3dZqAAWml9lvWitTWaclOC1N1CIYaTL57QADzvupzEzr4Z5dOZ%2BEzbOHh3qySX1%2FZEhohIM%2FHniogLQiMntLHm7Lppq3z56EkIgRLTE7SFRMWtCF5vQghzF6SRBf5t1m2wRyz411QxX5GN2jj8cqW9RRXz5pOO1om21XT54J7R03zXBPet0IFWkjlxzcnaDjXE5Y1wfcDb%2Ft9BTFz3HUxHVwOt6G0jeHaVT3wlilzwvoHyRShX9Jbkdwr%2BXcAkHhHWUbHPjhHQgrmnBhgWNbffiSnBQVTnFtioljUrmkOyguE%2FVK9Dsyfepp6EsSPYMs7E3g5NvSuD5tomCeH1X8%2Fy5ZqT5p4%2FOaykcD6A1ntDPIiSJsbPf89tXNJal1icZLDd2E%2Fs3y8ojt0nD5rUIO42Cu8nVhQAr8JgCcVXjMYNCJS%2FQBvKSQUeNCPKs%2BSg%2Fveu%2BAyRrwNsdsvAeDL5TV4XeKF%2BV3NMPNJiF3ogtea3f5ly5AmIo7vAAPhiSdygfEAlkSSQ982YR4ZPzc%2F3V8Ehzlq4OfjohNHIoEanPvbbAI9%2BGwwwWowt2ThM0Zv5bPCyJzzNIXoqXw8xBzSqFrZrY%2BALuPggWv%2BNaVlxfMM%2BS38gGOqUBh66BpXobumViq6ZvwkNTP2UcBGevR57UMVFHslXmqWoV3k53EQGdCaMSutXL%2B2Ud2%2BnJ7yKihZiI3Lm4LrjTUzIO7ZEV1HmH7%2FlCF%2B4UyXd9A4Rk%2BHxw5%2FzO4sPwpe2oTBoQNstjGRHlea8sQM3IJnG78j6tfte3mOfFNdHtLQ68esaUwbTsIOxuEaNWBE44u54k2jCuKMnncK2j%2BJkIiUDWNqIi&X-Amz-Signature=be618f4bfd571676dacf45a64bc703fb1aabce03dc5a7480f93a007c78e97fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXWOWLA%2F20251115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251115T010122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2PI7lu7T7NqUdvZHMKCuRLmlrLjVIhAIS1jknlmYApAiEA6ZvH3v6uADgcXkOH%2F83FfPcndQ%2BTNNXNH50RmeFLL6Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN3bG0mQ7L%2FS%2FAyBeircA6YA93S%2BrGmY%2B5lw%2BZGpa3dZqAAWml9lvWitTWaclOC1N1CIYaTL57QADzvupzEzr4Z5dOZ%2BEzbOHh3qySX1%2FZEhohIM%2FHniogLQiMntLHm7Lppq3z56EkIgRLTE7SFRMWtCF5vQghzF6SRBf5t1m2wRyz411QxX5GN2jj8cqW9RRXz5pOO1om21XT54J7R03zXBPet0IFWkjlxzcnaDjXE5Y1wfcDb%2Ft9BTFz3HUxHVwOt6G0jeHaVT3wlilzwvoHyRShX9Jbkdwr%2BXcAkHhHWUbHPjhHQgrmnBhgWNbffiSnBQVTnFtioljUrmkOyguE%2FVK9Dsyfepp6EsSPYMs7E3g5NvSuD5tomCeH1X8%2Fy5ZqT5p4%2FOaykcD6A1ntDPIiSJsbPf89tXNJal1icZLDd2E%2Fs3y8ojt0nD5rUIO42Cu8nVhQAr8JgCcVXjMYNCJS%2FQBvKSQUeNCPKs%2BSg%2Fveu%2BAyRrwNsdsvAeDL5TV4XeKF%2BV3NMPNJiF3ogtea3f5ly5AmIo7vAAPhiSdygfEAlkSSQ982YR4ZPzc%2F3V8Ehzlq4OfjohNHIoEanPvbbAI9%2BGwwwWowt2ThM0Zv5bPCyJzzNIXoqXw8xBzSqFrZrY%2BALuPggWv%2BNaVlxfMM%2BS38gGOqUBh66BpXobumViq6ZvwkNTP2UcBGevR57UMVFHslXmqWoV3k53EQGdCaMSutXL%2B2Ud2%2BnJ7yKihZiI3Lm4LrjTUzIO7ZEV1HmH7%2FlCF%2B4UyXd9A4Rk%2BHxw5%2FzO4sPwpe2oTBoQNstjGRHlea8sQM3IJnG78j6tfte3mOfFNdHtLQ68esaUwbTsIOxuEaNWBE44u54k2jCuKMnncK2j%2BJkIiUDWNqIi&X-Amz-Signature=e916ad44635b02438062d1c74817e180164a7d2335f92763f5ce9f3c7a4d1dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWXWOWLA%2F20251115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251115T010122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2PI7lu7T7NqUdvZHMKCuRLmlrLjVIhAIS1jknlmYApAiEA6ZvH3v6uADgcXkOH%2F83FfPcndQ%2BTNNXNH50RmeFLL6Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDN3bG0mQ7L%2FS%2FAyBeircA6YA93S%2BrGmY%2B5lw%2BZGpa3dZqAAWml9lvWitTWaclOC1N1CIYaTL57QADzvupzEzr4Z5dOZ%2BEzbOHh3qySX1%2FZEhohIM%2FHniogLQiMntLHm7Lppq3z56EkIgRLTE7SFRMWtCF5vQghzF6SRBf5t1m2wRyz411QxX5GN2jj8cqW9RRXz5pOO1om21XT54J7R03zXBPet0IFWkjlxzcnaDjXE5Y1wfcDb%2Ft9BTFz3HUxHVwOt6G0jeHaVT3wlilzwvoHyRShX9Jbkdwr%2BXcAkHhHWUbHPjhHQgrmnBhgWNbffiSnBQVTnFtioljUrmkOyguE%2FVK9Dsyfepp6EsSPYMs7E3g5NvSuD5tomCeH1X8%2Fy5ZqT5p4%2FOaykcD6A1ntDPIiSJsbPf89tXNJal1icZLDd2E%2Fs3y8ojt0nD5rUIO42Cu8nVhQAr8JgCcVXjMYNCJS%2FQBvKSQUeNCPKs%2BSg%2Fveu%2BAyRrwNsdsvAeDL5TV4XeKF%2BV3NMPNJiF3ogtea3f5ly5AmIo7vAAPhiSdygfEAlkSSQ982YR4ZPzc%2F3V8Ehzlq4OfjohNHIoEanPvbbAI9%2BGwwwWowt2ThM0Zv5bPCyJzzNIXoqXw8xBzSqFrZrY%2BALuPggWv%2BNaVlxfMM%2BS38gGOqUBh66BpXobumViq6ZvwkNTP2UcBGevR57UMVFHslXmqWoV3k53EQGdCaMSutXL%2B2Ud2%2BnJ7yKihZiI3Lm4LrjTUzIO7ZEV1HmH7%2FlCF%2B4UyXd9A4Rk%2BHxw5%2FzO4sPwpe2oTBoQNstjGRHlea8sQM3IJnG78j6tfte3mOfFNdHtLQ68esaUwbTsIOxuEaNWBE44u54k2jCuKMnncK2j%2BJkIiUDWNqIi&X-Amz-Signature=b4000d1e86c83a623423128caffe9683a9cfe96c3359bf65a2ac9470ce165399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNG42U4W%2F20251115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251115T010122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMo2mi4DHpztsYu8Bbo9XMvm0IAX6G0WO7hMM6XsKbXwIgRInTfW%2FdyF1RpgPQtnsE393goWXywurEAF2hfZX68wwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLANuTTKO9F%2BGbE3uCrcA0BJrGtbREWztr1G%2BfscXt699bl5kL1fP%2B%2FxNjdiirFFziIp9q7bT4T9xad9H13vGocTNuneQx%2BnK8KsPTw66Satn6SkKJNM14G%2BJwsJf5YbS3LKm0xZYoNra36a6Uv1KgukXQT0ZmtNXCEDc26oBhcVBAuFYIjvKYB%2FvyxunYyaBBrmMksxiHRNQvsDWWNXaQ5UZoUko09CMnbRWWLVt8UXqq7pZkoLg9wkGXNBbJDaiZwIuyAQOKEud9%2F43QrIXeACXCzckN2RjwwzRik0WgMnjkT09nnKX8jTKbQOph%2BmmMiPYKXEIEcu%2BHfZfTGIL3Iv3HjJD6r2Ax8z06WSq26Bass%2BxYz09bzUroa6vTT8yD7P12Wprd1O05qWN9qF8Kq%2FUhyLF4x2164tev9n2IKOCQuULfmvHq94Kvt%2B7jN%2BCkNfMXc4hZZWKjuFyTA%2FrQA%2FLrMBwvckg%2FKcnRK3mZdWdhL%2BU%2FnpruARWnpa0E%2Fwn2c6yIJ54AJ7cp6IYj7Rom%2BYXNLOdwMNTkUtx1Y6V0MM02keHM7TacWM%2FgVSaBMU2kLll8%2FZoajF0sAwBQOEC%2FDAsbZQjmuqAmQrbRXWRFYEF2lyORvl9duSgX%2FyAj797qevhXMmRdG9HuiGMIaT38gGOqUBru5f1akpgNlP7oz2d4ZwX0g5%2FL%2FaALLT3RrcbyZc0eU488p8a1aj%2FAIOYLFULFHX268FnT2wTe8TAwnCo32U3NO8JfUB4ZiZn3elrId05SrvSTPnO8m2E7Mogke6PLh0P4gfDyUBZ8KKsbGwvWLLdmLiv18J7bcZI%2Fi6By4QI6WQFz%2FhUrmkH8zljdhB10DHgySnD49g4gRvUe7n4UovEf1zEX6y&X-Amz-Signature=6e459ad4af715aede2e7187eed1090720f23416e1b285a792a41a81c6afab723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

