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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GJZRZ%2F20261019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261019T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGJe%2B%2FOndUYumMtlACPHjM4Y5qQjQheKii0J%2BAXBlOm%2BAiB2o5P3550QX1rGilSBrwHk2rPYPtv6da8g98JOIsYslSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMAs%2FqvzTgwojHxBTGKtwDICSDaSDn3EPntRko%2BVgEuPLTXKaA1C8sYfW5KMQg8AbxTiG2fTxQxGD0LKQMrXx4immAvM%2FQipG2mvX6Xew4%2FUTQkYssjP7zLjEMgq3gjNkrAIp6%2BEkm45R83HcIFjnVSsQgtLSrbkliUnUL4Ok2dkL0weUkTa1hrXhgpiCYRygM26yXP4gFG2oU%2BY1OsMFhgwNlDz%2BkdpsB%2F%2FbBEdIv3nSdVm4dVc3vKNAtBggue6kUX51XtUDD5i8cjS8rWRyzTIhzH93bDpqe7gUoT5SVGDXjRv7PtuI5HVJbKbSuV6aYcGSxCQYo96DzBdQLYiMG3NM6aDZdubPeTLR6J%2FmCUPlUohBbVeGX5VMJYV46Lt0gfj89lJduAXJUKupD5g1OPMe4aG3xkQMmSpJkclQXLMoXT1lGNFd1GhV7dz3NstvlP%2BxEJy5wBGK3UkkvhBZreRonkRHUCDqobOQEesrW8OW54TI%2BSG3oDi1%2Flmb3wG6YAtTxuVBIXTdqWbOM06wIKXporl5eYyl%2BQ576fcYh6%2BBRIZIpwNz8VRfhO1adTXS7v330b2pLa0WD9%2BniOeVCZeQzMK%2BvqEqop6sC03rPsHAseGS7T%2BEtQlvwgtRcfRm0XghwoHlrL9du6agwsIfW1gY6pgHcYHAdT1Ax6e6o0RNKLMuC%2BR6xBIJP6J4s62FmsNVw6aYfpp0jyP42hWvMXw3IZWZlJGT9YloHkvg7kup08yFhAAjo4K0i%2Bhfsw%2FpRYKIS1zyUNvZGjekCP7RxK08ir0Nss5GQE7T%2BTWE3AnJSrlzmWobCFSYMAWzpIHjcX15C4Spel7Hoyesyei7%2FIb3RggaMiTLPBjy25%2FudJlardchUcHIgUipK&X-Amz-Signature=6d601e081a82b919ad157a701a36a66b8685b48ef0fa85b859d81b72d088f8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BATTUO%2F20261019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261019T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCoSA6rsdcrCHN%2BkKvS0BatxSiuOSxmWf7lvJcLWel4HAIhAOcc6ZQHX9dU3nm%2F1Hw61%2BfQvKPGfHr8ew%2F0gwyrZNqlKv8DCCQQABoMNjM3NDIzMTgzODA1IgyhKXofRUzt4fU1U9oq3AMcHbHkqpXNbXSG05aFHgVIb6cIE9eINYKEuVmJxlCpx%2BWpMwc7qsHnsEcpoUn5cTFuDUHX%2FO13Vnllo5sLTObPV2ANEKgXzmpYtxN71IcDTuYJLGarSp32xq6X28DZ63DfK%2BDUQo%2BxVy6reOYZOrWzu%2BjxAFexMMIYbys%2FDSS7mJzg4IcpxSLhVLPUgL9aFcZaegCW5AfE5erX2BPzHviHLOKYiLIOnpHyPtqDX9CStcnU%2BPhOhtXWLBa4GMSd6BeJEAiglB9i5B5z5VzLnmO3gr8ExwqslEmDUEIqG0Wo2o8Ys%2BMibaqIA8B%2FDxWT%2BviRRikBTHyv1TPxOEdDbgq7xE9H%2FXXC%2F2qTfldfq%2BdbrqpuhghxO7QW%2FUwCC23io%2Bh4wbwdFQntPadEXh2GEvSvAUD8C7eU9tP2tGMhLI67dKy%2B0qQmKw8VaVap%2FymJhvE3t98GqpNBgG2fA0fCGaxRv5FvX8ZDFk5nPKEt5Xc8ZQIJacXWBkIKFrclbM1VUvOjh%2B8My7lYDPxob6ZjKwqQOV82YjyI5ViXC2PV542OuEaVTxyW77lngXhUTisHi0UW%2FRUcIojRkxoSg4gFVYnoQXHJXT4b2YACKn1exHdehy6acdAjWDSKt48cRTCxhdbWBjqkAc9S7CQjtnIfMXH%2BQ2jIijGGeZjKHYooLlSTUk1zUMJ%2FMB14P6vOUrYpXqKMt4COLftUXvWDAnZRpvK%2BhHKaRoLLCwm4meBX62vnHNCQcnhxfPagSB3orGMU8LDgTK7G%2BcpUPpTTUTUohLlbQkyQ3MgFiHgSZQJ%2FG1JrpLpfcLjFpQD5u6q8Ymm78mIy%2FyzIUdJIGWe6RjSxJachUD%2BcCcYlH37d&X-Amz-Signature=8b768f01cb67605e7ceb03fc976c654b42ddc8a5fc08ebad2809b252e2409e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BATTUO%2F20261019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261019T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCoSA6rsdcrCHN%2BkKvS0BatxSiuOSxmWf7lvJcLWel4HAIhAOcc6ZQHX9dU3nm%2F1Hw61%2BfQvKPGfHr8ew%2F0gwyrZNqlKv8DCCQQABoMNjM3NDIzMTgzODA1IgyhKXofRUzt4fU1U9oq3AMcHbHkqpXNbXSG05aFHgVIb6cIE9eINYKEuVmJxlCpx%2BWpMwc7qsHnsEcpoUn5cTFuDUHX%2FO13Vnllo5sLTObPV2ANEKgXzmpYtxN71IcDTuYJLGarSp32xq6X28DZ63DfK%2BDUQo%2BxVy6reOYZOrWzu%2BjxAFexMMIYbys%2FDSS7mJzg4IcpxSLhVLPUgL9aFcZaegCW5AfE5erX2BPzHviHLOKYiLIOnpHyPtqDX9CStcnU%2BPhOhtXWLBa4GMSd6BeJEAiglB9i5B5z5VzLnmO3gr8ExwqslEmDUEIqG0Wo2o8Ys%2BMibaqIA8B%2FDxWT%2BviRRikBTHyv1TPxOEdDbgq7xE9H%2FXXC%2F2qTfldfq%2BdbrqpuhghxO7QW%2FUwCC23io%2Bh4wbwdFQntPadEXh2GEvSvAUD8C7eU9tP2tGMhLI67dKy%2B0qQmKw8VaVap%2FymJhvE3t98GqpNBgG2fA0fCGaxRv5FvX8ZDFk5nPKEt5Xc8ZQIJacXWBkIKFrclbM1VUvOjh%2B8My7lYDPxob6ZjKwqQOV82YjyI5ViXC2PV542OuEaVTxyW77lngXhUTisHi0UW%2FRUcIojRkxoSg4gFVYnoQXHJXT4b2YACKn1exHdehy6acdAjWDSKt48cRTCxhdbWBjqkAc9S7CQjtnIfMXH%2BQ2jIijGGeZjKHYooLlSTUk1zUMJ%2FMB14P6vOUrYpXqKMt4COLftUXvWDAnZRpvK%2BhHKaRoLLCwm4meBX62vnHNCQcnhxfPagSB3orGMU8LDgTK7G%2BcpUPpTTUTUohLlbQkyQ3MgFiHgSZQJ%2FG1JrpLpfcLjFpQD5u6q8Ymm78mIy%2FyzIUdJIGWe6RjSxJachUD%2BcCcYlH37d&X-Amz-Signature=9e1386f8defec899d775c18e24073b527be01084710c0143af36c0e574e3abbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BATTUO%2F20261019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261019T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCoSA6rsdcrCHN%2BkKvS0BatxSiuOSxmWf7lvJcLWel4HAIhAOcc6ZQHX9dU3nm%2F1Hw61%2BfQvKPGfHr8ew%2F0gwyrZNqlKv8DCCQQABoMNjM3NDIzMTgzODA1IgyhKXofRUzt4fU1U9oq3AMcHbHkqpXNbXSG05aFHgVIb6cIE9eINYKEuVmJxlCpx%2BWpMwc7qsHnsEcpoUn5cTFuDUHX%2FO13Vnllo5sLTObPV2ANEKgXzmpYtxN71IcDTuYJLGarSp32xq6X28DZ63DfK%2BDUQo%2BxVy6reOYZOrWzu%2BjxAFexMMIYbys%2FDSS7mJzg4IcpxSLhVLPUgL9aFcZaegCW5AfE5erX2BPzHviHLOKYiLIOnpHyPtqDX9CStcnU%2BPhOhtXWLBa4GMSd6BeJEAiglB9i5B5z5VzLnmO3gr8ExwqslEmDUEIqG0Wo2o8Ys%2BMibaqIA8B%2FDxWT%2BviRRikBTHyv1TPxOEdDbgq7xE9H%2FXXC%2F2qTfldfq%2BdbrqpuhghxO7QW%2FUwCC23io%2Bh4wbwdFQntPadEXh2GEvSvAUD8C7eU9tP2tGMhLI67dKy%2B0qQmKw8VaVap%2FymJhvE3t98GqpNBgG2fA0fCGaxRv5FvX8ZDFk5nPKEt5Xc8ZQIJacXWBkIKFrclbM1VUvOjh%2B8My7lYDPxob6ZjKwqQOV82YjyI5ViXC2PV542OuEaVTxyW77lngXhUTisHi0UW%2FRUcIojRkxoSg4gFVYnoQXHJXT4b2YACKn1exHdehy6acdAjWDSKt48cRTCxhdbWBjqkAc9S7CQjtnIfMXH%2BQ2jIijGGeZjKHYooLlSTUk1zUMJ%2FMB14P6vOUrYpXqKMt4COLftUXvWDAnZRpvK%2BhHKaRoLLCwm4meBX62vnHNCQcnhxfPagSB3orGMU8LDgTK7G%2BcpUPpTTUTUohLlbQkyQ3MgFiHgSZQJ%2FG1JrpLpfcLjFpQD5u6q8Ymm78mIy%2FyzIUdJIGWe6RjSxJachUD%2BcCcYlH37d&X-Amz-Signature=acaaec676dab0b2946517a4d447935a097a41525c6ff2e8169b52e75f51810c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BATTUO%2F20261019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261019T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCoSA6rsdcrCHN%2BkKvS0BatxSiuOSxmWf7lvJcLWel4HAIhAOcc6ZQHX9dU3nm%2F1Hw61%2BfQvKPGfHr8ew%2F0gwyrZNqlKv8DCCQQABoMNjM3NDIzMTgzODA1IgyhKXofRUzt4fU1U9oq3AMcHbHkqpXNbXSG05aFHgVIb6cIE9eINYKEuVmJxlCpx%2BWpMwc7qsHnsEcpoUn5cTFuDUHX%2FO13Vnllo5sLTObPV2ANEKgXzmpYtxN71IcDTuYJLGarSp32xq6X28DZ63DfK%2BDUQo%2BxVy6reOYZOrWzu%2BjxAFexMMIYbys%2FDSS7mJzg4IcpxSLhVLPUgL9aFcZaegCW5AfE5erX2BPzHviHLOKYiLIOnpHyPtqDX9CStcnU%2BPhOhtXWLBa4GMSd6BeJEAiglB9i5B5z5VzLnmO3gr8ExwqslEmDUEIqG0Wo2o8Ys%2BMibaqIA8B%2FDxWT%2BviRRikBTHyv1TPxOEdDbgq7xE9H%2FXXC%2F2qTfldfq%2BdbrqpuhghxO7QW%2FUwCC23io%2Bh4wbwdFQntPadEXh2GEvSvAUD8C7eU9tP2tGMhLI67dKy%2B0qQmKw8VaVap%2FymJhvE3t98GqpNBgG2fA0fCGaxRv5FvX8ZDFk5nPKEt5Xc8ZQIJacXWBkIKFrclbM1VUvOjh%2B8My7lYDPxob6ZjKwqQOV82YjyI5ViXC2PV542OuEaVTxyW77lngXhUTisHi0UW%2FRUcIojRkxoSg4gFVYnoQXHJXT4b2YACKn1exHdehy6acdAjWDSKt48cRTCxhdbWBjqkAc9S7CQjtnIfMXH%2BQ2jIijGGeZjKHYooLlSTUk1zUMJ%2FMB14P6vOUrYpXqKMt4COLftUXvWDAnZRpvK%2BhHKaRoLLCwm4meBX62vnHNCQcnhxfPagSB3orGMU8LDgTK7G%2BcpUPpTTUTUohLlbQkyQ3MgFiHgSZQJ%2FG1JrpLpfcLjFpQD5u6q8Ymm78mIy%2FyzIUdJIGWe6RjSxJachUD%2BcCcYlH37d&X-Amz-Signature=1dba60203524f7876427f0380bc74d248302ae148e886218d38045889ac248b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BATTUO%2F20261019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261019T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCoSA6rsdcrCHN%2BkKvS0BatxSiuOSxmWf7lvJcLWel4HAIhAOcc6ZQHX9dU3nm%2F1Hw61%2BfQvKPGfHr8ew%2F0gwyrZNqlKv8DCCQQABoMNjM3NDIzMTgzODA1IgyhKXofRUzt4fU1U9oq3AMcHbHkqpXNbXSG05aFHgVIb6cIE9eINYKEuVmJxlCpx%2BWpMwc7qsHnsEcpoUn5cTFuDUHX%2FO13Vnllo5sLTObPV2ANEKgXzmpYtxN71IcDTuYJLGarSp32xq6X28DZ63DfK%2BDUQo%2BxVy6reOYZOrWzu%2BjxAFexMMIYbys%2FDSS7mJzg4IcpxSLhVLPUgL9aFcZaegCW5AfE5erX2BPzHviHLOKYiLIOnpHyPtqDX9CStcnU%2BPhOhtXWLBa4GMSd6BeJEAiglB9i5B5z5VzLnmO3gr8ExwqslEmDUEIqG0Wo2o8Ys%2BMibaqIA8B%2FDxWT%2BviRRikBTHyv1TPxOEdDbgq7xE9H%2FXXC%2F2qTfldfq%2BdbrqpuhghxO7QW%2FUwCC23io%2Bh4wbwdFQntPadEXh2GEvSvAUD8C7eU9tP2tGMhLI67dKy%2B0qQmKw8VaVap%2FymJhvE3t98GqpNBgG2fA0fCGaxRv5FvX8ZDFk5nPKEt5Xc8ZQIJacXWBkIKFrclbM1VUvOjh%2B8My7lYDPxob6ZjKwqQOV82YjyI5ViXC2PV542OuEaVTxyW77lngXhUTisHi0UW%2FRUcIojRkxoSg4gFVYnoQXHJXT4b2YACKn1exHdehy6acdAjWDSKt48cRTCxhdbWBjqkAc9S7CQjtnIfMXH%2BQ2jIijGGeZjKHYooLlSTUk1zUMJ%2FMB14P6vOUrYpXqKMt4COLftUXvWDAnZRpvK%2BhHKaRoLLCwm4meBX62vnHNCQcnhxfPagSB3orGMU8LDgTK7G%2BcpUPpTTUTUohLlbQkyQ3MgFiHgSZQJ%2FG1JrpLpfcLjFpQD5u6q8Ymm78mIy%2FyzIUdJIGWe6RjSxJachUD%2BcCcYlH37d&X-Amz-Signature=83897d14ea75c8c1766fd87dc57fd66c0f4483477cd739a0c375ec0d6c7401f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367GJZRZ%2F20261019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261019T033029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGJe%2B%2FOndUYumMtlACPHjM4Y5qQjQheKii0J%2BAXBlOm%2BAiB2o5P3550QX1rGilSBrwHk2rPYPtv6da8g98JOIsYslSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMAs%2FqvzTgwojHxBTGKtwDICSDaSDn3EPntRko%2BVgEuPLTXKaA1C8sYfW5KMQg8AbxTiG2fTxQxGD0LKQMrXx4immAvM%2FQipG2mvX6Xew4%2FUTQkYssjP7zLjEMgq3gjNkrAIp6%2BEkm45R83HcIFjnVSsQgtLSrbkliUnUL4Ok2dkL0weUkTa1hrXhgpiCYRygM26yXP4gFG2oU%2BY1OsMFhgwNlDz%2BkdpsB%2F%2FbBEdIv3nSdVm4dVc3vKNAtBggue6kUX51XtUDD5i8cjS8rWRyzTIhzH93bDpqe7gUoT5SVGDXjRv7PtuI5HVJbKbSuV6aYcGSxCQYo96DzBdQLYiMG3NM6aDZdubPeTLR6J%2FmCUPlUohBbVeGX5VMJYV46Lt0gfj89lJduAXJUKupD5g1OPMe4aG3xkQMmSpJkclQXLMoXT1lGNFd1GhV7dz3NstvlP%2BxEJy5wBGK3UkkvhBZreRonkRHUCDqobOQEesrW8OW54TI%2BSG3oDi1%2Flmb3wG6YAtTxuVBIXTdqWbOM06wIKXporl5eYyl%2BQ576fcYh6%2BBRIZIpwNz8VRfhO1adTXS7v330b2pLa0WD9%2BniOeVCZeQzMK%2BvqEqop6sC03rPsHAseGS7T%2BEtQlvwgtRcfRm0XghwoHlrL9du6agwsIfW1gY6pgHcYHAdT1Ax6e6o0RNKLMuC%2BR6xBIJP6J4s62FmsNVw6aYfpp0jyP42hWvMXw3IZWZlJGT9YloHkvg7kup08yFhAAjo4K0i%2Bhfsw%2FpRYKIS1zyUNvZGjekCP7RxK08ir0Nss5GQE7T%2BTWE3AnJSrlzmWobCFSYMAWzpIHjcX15C4Spel7Hoyesyei7%2FIb3RggaMiTLPBjy25%2FudJlardchUcHIgUipK&X-Amz-Signature=1686956fff11396e4ff38bfe9073aaa80b44ec0547284d13571952a7c97db01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

