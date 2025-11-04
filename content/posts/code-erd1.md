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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7FAF3N%2F20251104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251104T010151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FgI3aS0PP%2F1NSpGwqAc1TT9ziTdq2rCqVnaDEURekEwIhAPKv9uxocY73h2GF9vAPIGrLKM8LWm8bIv5uww9%2FgQCLKv8DCGoQABoMNjM3NDIzMTgzODA1Igxp%2FllwUBoBJ3Q62QMq3AOEVDjZTee2lmKI2DOoGuhFS9yYXcbSVHwae7WvBqDV79CEc0eLOBkfUr0cQA3E3SmTYQoVi%2FLNHSFcZ1B8Cb7mpiwfp9UFtWnjmkPKbgPAKZ5U8MeTh%2BbL7nwQVnT%2F5vnRVdiEQOTJeDx%2F%2Fdzt6aTbBGp1dstBvx8aXZWDgTNMB4XwiLuP%2ByDFXxtp37Uv5rXhsn4Meoh1GnW7qgEHWtkStehRfuDXhHLM6hLOm0xQutZwlTiyDJXsKdpqeHfh6omvdpjxat8cwTElnTorOHGyJtUvqS9z4oUCKhJY5pWLH8c64fRaBl3F2Ri4y2%2FYTR3qg9TnCBz%2B%2Fa5%2FOL%2Bmyq%2BjKjttHr%2F3XmqfYX8jhwRDzes21tA%2BsbnSPWLlTNAgPEbBtZ0KCSJj4IvGCGRhgCUNNpIPCMZTU2obvPTYi3wbDBFQfcXl%2BPmbaZZRlvaDwXW4Thw8RfHh9x2HA47CEEwQxMR8t3I7xCDfTvLKogafAUNBF9wactOFf%2BVKxGll9fGvRWcOmfkmLH1%2BDya%2FitDS25TvW9mOH%2B4s9wTGKFnEuLbMmRDpiRZYr9HKSONIS1CkYmdul%2FYKVL7AxO%2B7PjkXQ9qrF3tr%2BqsTdro%2BbRnNEG7%2B94xamujQ02k4bDDenKXIBjqkAfdtEEvjd1nrWIWkTyy7JrHgHQpnkql62d5%2FIkvQELs%2FtMjyhCisu0hvG4fJsMwNTIO95%2F7bQaHnKs9IFYr2UxDuV9ROTUc6I0LLu6x18YF8Th8bw1ZXMJQpWAyFHZjnXspLi7BR5iQt6F92lIuRbT0uYksYRAcgrXLEofsEMQRx2GRwx8A1g4t7sgDU1INfOtIHjkhdRD0ecqduYP22uXK5SFOO&X-Amz-Signature=2a64722e94a06541c316ccc88d15667b6491c088f8eaaa87f77839073eec361d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ4EOE7%2F20251104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251104T010151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtpJUfU6a3HZspVRUKyeHNQfnqNNutuRAeoTFaKxafWAiEAst9Dd6XOOvbTPyS7QG8%2FtUiYFoN%2Ftaak1f%2F9CGxzaLkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNOT8xp2QcHLkOrbzCrcAx0s7dus3wVMi%2BqNsFqaveULIvd1%2BO%2Fxb2cLp9Bgb4bat7yvT8n3wFdxr8gZjXBJh6zfqPRnx5piHotKXE7Hg4gRNhGVr6mdUDGfjPl5ORoKeVh60pUWZDV%2BAJFTMIArvAEHQZxIccfiAYZfMKq0oDwJYP3zYPyLZcZI5ZLEzxsCwozlGMyN4M78x%2B0LBp9U6LmPn9eEX%2BdI9hEsRQx2sU%2B1L4YqxcG6HHapN0sE3FJKWRSHGwnKnKOO%2B2uI2BjNQSv9JGO9ys03GGFlDHwFQU9UHU2iump1gcfY3t71FqVNqr8DxSKAZkAc4dTvGSeR6PejGUF3e%2FAMp3dYo6195Tf2EJlcSBaUEOSZAWL%2Bv8n8YzVJ7Lys4CeDQOOqTvNYfLj0iFdjDAQrquMn%2BQEjM2rHlmf%2F0KfPz4yD7P3UevLZNSpgyTECA0kL6iigAGVfjkuJw23l%2FaVOge5vABOGevRoFLx1E1qLV1V0wo7t1%2BzRKEywoaJPGnMIhjf24CK8teBJQMgcLWf9FGFpQJ2bsQRj3LK4P9zAuYrFOHg1KTFLQukWfD3r50xnyGvLXyQq0JDrzDSUsT9tHow2jwpOdjSn4NsK0RIrKlTxlZanCCTIuozJ2fETsGUzagdzMPKdpcgGOqUBXbt1ep6dPLnzcGqUFN3RGrTWMHNz6JrjyK6GlfAJ4KGts%2BoD8GcL3vyN8ACc%2FisX%2BtZkpPVg%2BHC30tnGN3CreHkjxxZp1jjk8kvpq0gT9Xhm%2FkuSEV1y3cvATi8lSpnZ5dvSjKS5RcahG6x3d56aphAUFOYPZZoyjqirpGfSs0ej%2BIVBBAoA9VO9u6LHCQmABbLjt0U4bsD0xeXc8vejMEU4ncnn&X-Amz-Signature=68ab86f433e2fe23c63f35bd1e4c606e61feee787338df960bcdef7529455471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ4EOE7%2F20251104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251104T010151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtpJUfU6a3HZspVRUKyeHNQfnqNNutuRAeoTFaKxafWAiEAst9Dd6XOOvbTPyS7QG8%2FtUiYFoN%2Ftaak1f%2F9CGxzaLkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNOT8xp2QcHLkOrbzCrcAx0s7dus3wVMi%2BqNsFqaveULIvd1%2BO%2Fxb2cLp9Bgb4bat7yvT8n3wFdxr8gZjXBJh6zfqPRnx5piHotKXE7Hg4gRNhGVr6mdUDGfjPl5ORoKeVh60pUWZDV%2BAJFTMIArvAEHQZxIccfiAYZfMKq0oDwJYP3zYPyLZcZI5ZLEzxsCwozlGMyN4M78x%2B0LBp9U6LmPn9eEX%2BdI9hEsRQx2sU%2B1L4YqxcG6HHapN0sE3FJKWRSHGwnKnKOO%2B2uI2BjNQSv9JGO9ys03GGFlDHwFQU9UHU2iump1gcfY3t71FqVNqr8DxSKAZkAc4dTvGSeR6PejGUF3e%2FAMp3dYo6195Tf2EJlcSBaUEOSZAWL%2Bv8n8YzVJ7Lys4CeDQOOqTvNYfLj0iFdjDAQrquMn%2BQEjM2rHlmf%2F0KfPz4yD7P3UevLZNSpgyTECA0kL6iigAGVfjkuJw23l%2FaVOge5vABOGevRoFLx1E1qLV1V0wo7t1%2BzRKEywoaJPGnMIhjf24CK8teBJQMgcLWf9FGFpQJ2bsQRj3LK4P9zAuYrFOHg1KTFLQukWfD3r50xnyGvLXyQq0JDrzDSUsT9tHow2jwpOdjSn4NsK0RIrKlTxlZanCCTIuozJ2fETsGUzagdzMPKdpcgGOqUBXbt1ep6dPLnzcGqUFN3RGrTWMHNz6JrjyK6GlfAJ4KGts%2BoD8GcL3vyN8ACc%2FisX%2BtZkpPVg%2BHC30tnGN3CreHkjxxZp1jjk8kvpq0gT9Xhm%2FkuSEV1y3cvATi8lSpnZ5dvSjKS5RcahG6x3d56aphAUFOYPZZoyjqirpGfSs0ej%2BIVBBAoA9VO9u6LHCQmABbLjt0U4bsD0xeXc8vejMEU4ncnn&X-Amz-Signature=83f54fec3a4e5d6164824c57c2cd4398c2fce904077d642aeb75d92c863b39bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ4EOE7%2F20251104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251104T010151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtpJUfU6a3HZspVRUKyeHNQfnqNNutuRAeoTFaKxafWAiEAst9Dd6XOOvbTPyS7QG8%2FtUiYFoN%2Ftaak1f%2F9CGxzaLkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNOT8xp2QcHLkOrbzCrcAx0s7dus3wVMi%2BqNsFqaveULIvd1%2BO%2Fxb2cLp9Bgb4bat7yvT8n3wFdxr8gZjXBJh6zfqPRnx5piHotKXE7Hg4gRNhGVr6mdUDGfjPl5ORoKeVh60pUWZDV%2BAJFTMIArvAEHQZxIccfiAYZfMKq0oDwJYP3zYPyLZcZI5ZLEzxsCwozlGMyN4M78x%2B0LBp9U6LmPn9eEX%2BdI9hEsRQx2sU%2B1L4YqxcG6HHapN0sE3FJKWRSHGwnKnKOO%2B2uI2BjNQSv9JGO9ys03GGFlDHwFQU9UHU2iump1gcfY3t71FqVNqr8DxSKAZkAc4dTvGSeR6PejGUF3e%2FAMp3dYo6195Tf2EJlcSBaUEOSZAWL%2Bv8n8YzVJ7Lys4CeDQOOqTvNYfLj0iFdjDAQrquMn%2BQEjM2rHlmf%2F0KfPz4yD7P3UevLZNSpgyTECA0kL6iigAGVfjkuJw23l%2FaVOge5vABOGevRoFLx1E1qLV1V0wo7t1%2BzRKEywoaJPGnMIhjf24CK8teBJQMgcLWf9FGFpQJ2bsQRj3LK4P9zAuYrFOHg1KTFLQukWfD3r50xnyGvLXyQq0JDrzDSUsT9tHow2jwpOdjSn4NsK0RIrKlTxlZanCCTIuozJ2fETsGUzagdzMPKdpcgGOqUBXbt1ep6dPLnzcGqUFN3RGrTWMHNz6JrjyK6GlfAJ4KGts%2BoD8GcL3vyN8ACc%2FisX%2BtZkpPVg%2BHC30tnGN3CreHkjxxZp1jjk8kvpq0gT9Xhm%2FkuSEV1y3cvATi8lSpnZ5dvSjKS5RcahG6x3d56aphAUFOYPZZoyjqirpGfSs0ej%2BIVBBAoA9VO9u6LHCQmABbLjt0U4bsD0xeXc8vejMEU4ncnn&X-Amz-Signature=411982c3f2c5a3bff65e5e13c0fe32526e4b8d51f8e11c82c242887a21013837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ4EOE7%2F20251104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251104T010151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtpJUfU6a3HZspVRUKyeHNQfnqNNutuRAeoTFaKxafWAiEAst9Dd6XOOvbTPyS7QG8%2FtUiYFoN%2Ftaak1f%2F9CGxzaLkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNOT8xp2QcHLkOrbzCrcAx0s7dus3wVMi%2BqNsFqaveULIvd1%2BO%2Fxb2cLp9Bgb4bat7yvT8n3wFdxr8gZjXBJh6zfqPRnx5piHotKXE7Hg4gRNhGVr6mdUDGfjPl5ORoKeVh60pUWZDV%2BAJFTMIArvAEHQZxIccfiAYZfMKq0oDwJYP3zYPyLZcZI5ZLEzxsCwozlGMyN4M78x%2B0LBp9U6LmPn9eEX%2BdI9hEsRQx2sU%2B1L4YqxcG6HHapN0sE3FJKWRSHGwnKnKOO%2B2uI2BjNQSv9JGO9ys03GGFlDHwFQU9UHU2iump1gcfY3t71FqVNqr8DxSKAZkAc4dTvGSeR6PejGUF3e%2FAMp3dYo6195Tf2EJlcSBaUEOSZAWL%2Bv8n8YzVJ7Lys4CeDQOOqTvNYfLj0iFdjDAQrquMn%2BQEjM2rHlmf%2F0KfPz4yD7P3UevLZNSpgyTECA0kL6iigAGVfjkuJw23l%2FaVOge5vABOGevRoFLx1E1qLV1V0wo7t1%2BzRKEywoaJPGnMIhjf24CK8teBJQMgcLWf9FGFpQJ2bsQRj3LK4P9zAuYrFOHg1KTFLQukWfD3r50xnyGvLXyQq0JDrzDSUsT9tHow2jwpOdjSn4NsK0RIrKlTxlZanCCTIuozJ2fETsGUzagdzMPKdpcgGOqUBXbt1ep6dPLnzcGqUFN3RGrTWMHNz6JrjyK6GlfAJ4KGts%2BoD8GcL3vyN8ACc%2FisX%2BtZkpPVg%2BHC30tnGN3CreHkjxxZp1jjk8kvpq0gT9Xhm%2FkuSEV1y3cvATi8lSpnZ5dvSjKS5RcahG6x3d56aphAUFOYPZZoyjqirpGfSs0ej%2BIVBBAoA9VO9u6LHCQmABbLjt0U4bsD0xeXc8vejMEU4ncnn&X-Amz-Signature=42e77939cb044dd8896efd9f399bc133071cb2bbfa9836fc6c77d584d0d329f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ4EOE7%2F20251104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251104T010151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtpJUfU6a3HZspVRUKyeHNQfnqNNutuRAeoTFaKxafWAiEAst9Dd6XOOvbTPyS7QG8%2FtUiYFoN%2Ftaak1f%2F9CGxzaLkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNOT8xp2QcHLkOrbzCrcAx0s7dus3wVMi%2BqNsFqaveULIvd1%2BO%2Fxb2cLp9Bgb4bat7yvT8n3wFdxr8gZjXBJh6zfqPRnx5piHotKXE7Hg4gRNhGVr6mdUDGfjPl5ORoKeVh60pUWZDV%2BAJFTMIArvAEHQZxIccfiAYZfMKq0oDwJYP3zYPyLZcZI5ZLEzxsCwozlGMyN4M78x%2B0LBp9U6LmPn9eEX%2BdI9hEsRQx2sU%2B1L4YqxcG6HHapN0sE3FJKWRSHGwnKnKOO%2B2uI2BjNQSv9JGO9ys03GGFlDHwFQU9UHU2iump1gcfY3t71FqVNqr8DxSKAZkAc4dTvGSeR6PejGUF3e%2FAMp3dYo6195Tf2EJlcSBaUEOSZAWL%2Bv8n8YzVJ7Lys4CeDQOOqTvNYfLj0iFdjDAQrquMn%2BQEjM2rHlmf%2F0KfPz4yD7P3UevLZNSpgyTECA0kL6iigAGVfjkuJw23l%2FaVOge5vABOGevRoFLx1E1qLV1V0wo7t1%2BzRKEywoaJPGnMIhjf24CK8teBJQMgcLWf9FGFpQJ2bsQRj3LK4P9zAuYrFOHg1KTFLQukWfD3r50xnyGvLXyQq0JDrzDSUsT9tHow2jwpOdjSn4NsK0RIrKlTxlZanCCTIuozJ2fETsGUzagdzMPKdpcgGOqUBXbt1ep6dPLnzcGqUFN3RGrTWMHNz6JrjyK6GlfAJ4KGts%2BoD8GcL3vyN8ACc%2FisX%2BtZkpPVg%2BHC30tnGN3CreHkjxxZp1jjk8kvpq0gT9Xhm%2FkuSEV1y3cvATi8lSpnZ5dvSjKS5RcahG6x3d56aphAUFOYPZZoyjqirpGfSs0ej%2BIVBBAoA9VO9u6LHCQmABbLjt0U4bsD0xeXc8vejMEU4ncnn&X-Amz-Signature=eab9ba5bc74ed48e98ac5b11e9deeaf6e24a3bb0a63aa1145e190e3523ec6cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7FAF3N%2F20251104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251104T010151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FgI3aS0PP%2F1NSpGwqAc1TT9ziTdq2rCqVnaDEURekEwIhAPKv9uxocY73h2GF9vAPIGrLKM8LWm8bIv5uww9%2FgQCLKv8DCGoQABoMNjM3NDIzMTgzODA1Igxp%2FllwUBoBJ3Q62QMq3AOEVDjZTee2lmKI2DOoGuhFS9yYXcbSVHwae7WvBqDV79CEc0eLOBkfUr0cQA3E3SmTYQoVi%2FLNHSFcZ1B8Cb7mpiwfp9UFtWnjmkPKbgPAKZ5U8MeTh%2BbL7nwQVnT%2F5vnRVdiEQOTJeDx%2F%2Fdzt6aTbBGp1dstBvx8aXZWDgTNMB4XwiLuP%2ByDFXxtp37Uv5rXhsn4Meoh1GnW7qgEHWtkStehRfuDXhHLM6hLOm0xQutZwlTiyDJXsKdpqeHfh6omvdpjxat8cwTElnTorOHGyJtUvqS9z4oUCKhJY5pWLH8c64fRaBl3F2Ri4y2%2FYTR3qg9TnCBz%2B%2Fa5%2FOL%2Bmyq%2BjKjttHr%2F3XmqfYX8jhwRDzes21tA%2BsbnSPWLlTNAgPEbBtZ0KCSJj4IvGCGRhgCUNNpIPCMZTU2obvPTYi3wbDBFQfcXl%2BPmbaZZRlvaDwXW4Thw8RfHh9x2HA47CEEwQxMR8t3I7xCDfTvLKogafAUNBF9wactOFf%2BVKxGll9fGvRWcOmfkmLH1%2BDya%2FitDS25TvW9mOH%2B4s9wTGKFnEuLbMmRDpiRZYr9HKSONIS1CkYmdul%2FYKVL7AxO%2B7PjkXQ9qrF3tr%2BqsTdro%2BbRnNEG7%2B94xamujQ02k4bDDenKXIBjqkAfdtEEvjd1nrWIWkTyy7JrHgHQpnkql62d5%2FIkvQELs%2FtMjyhCisu0hvG4fJsMwNTIO95%2F7bQaHnKs9IFYr2UxDuV9ROTUc6I0LLu6x18YF8Th8bw1ZXMJQpWAyFHZjnXspLi7BR5iQt6F92lIuRbT0uYksYRAcgrXLEofsEMQRx2GRwx8A1g4t7sgDU1INfOtIHjkhdRD0ecqduYP22uXK5SFOO&X-Amz-Signature=63b668d5fae91dee50cca066e6f6125127afe9c332b53f50ed1fd7034a7f348b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

