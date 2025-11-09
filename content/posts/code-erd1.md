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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7SN7TC%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251109T010519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDyyCBfiA2O3REyKF2EQiuPAP6K5R1%2FIdDNDy2X8A%2BLsAiBCtPUEABCZ76%2BfEJPOASOLs9SubgZgGoszkvutNGaBliqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP56p0cVRJotfo8oeKtwDnCbu8mh2ySvQpRucW4UP71azriCIabw0iosVJLJ%2F2l%2B7%2Bta2uh9dECj6II0jgT08ONthobykUPGw71M3Wcgz6ge31m4nJnO34IxybZUBLvOIQ%2FJVdwfOX%2BDAoNcxl6vaBHvkPQiO2UptSG8wnVq%2BLzfq7Iga5OBiXB85KxfevGvyFC6Oi4qk1oKfgMz44w%2BFaRAJ9VUH8wpHyB87XUMmbh2ah%2FohQdW5i1ZmI%2F1kieKXQR%2FDhJ8H6gD2smVsEK%2FamBsYhxqU6qnSJiCGmz4qWgvDksgFKw48BPkEEFKa2RmDeNpvhpp%2Fou5V5N9D9IZatA3BiXmaN5UDLRBS4I9N%2FvXGe4S7v33i13DsoW7npMGL%2Byf67cy4GPv4sEFBXvTBxpWwqZBJe3S7Uh2f4z3OAGgPhbkamJuQhSs1X%2FZzaAu9GU2Kk8TSaN%2BNhRPr8W9cESq1lk7ZBZjzSf3vIImu8eA%2Fo6bqrKI%2B9akluJ4HI0DTuYrFEja5Bzq2RLHyNAPRcHRycPdepUhEePi5wlyZNKC0THkWvKbGbBt1uioI%2Bdmaon6NEUmD9LhoXyQwy4Ja86DfPd5AV9EqEUnVT4LlNHwHuJc6zrY5r9yACloqUux0RyKbu%2B%2BcCkygrCQwuqe%2FyAY6pgGlIQChbXD0nfdytDkqXMur4YijwHYabOuOy3GTjPAZvdA9nAvrwn%2FkOci9uCM6TWhMVT4cm4DnpzCdjCwg7NFG9lh6RQRfj%2BLl7v%2BHFmseMIhWBg6GaIf3DhwkK05RxT%2BbCq1PXy%2BjQSoYo%2FAWBeeAtBs9AiJShX2SV8nh25Q4qaNPplT39Lvcpsu1L1wbqnZwBIsshZ%2BuAjuhfxzIHbdTZXEkuIy0&X-Amz-Signature=572a15cf1f2804d1736427dd4c6e93bfe03ce175ca747995ba5cb6da72be39b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJPPPMH%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251109T010519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmNJlXOrfFRLnbgvLVsxa091gsv9yjw56doqKblWlCEQIgM6GdBNZctntMJpS%2B5Tq5jF%2FjK5DLrl73NRjMRmWs1yAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4eDH6pmIjn31Nu8CrcA%2FgvsxQRdtKQYSMGjxzOLMvuLAQ2P%2BDZsD1rlti3ok6%2FfIWanYbdrosT1gNm2cB3BVGTvZnrmB1PHgIT%2BflV9Q0av9wf71VBMUmGHKUpQHlvshTQFwX6yaFbC%2Fz63ljrP3mbCHviY8ojBMWWGa96LBfPuZiYcMw%2FFr0dVi3mBvh1Lb1HztLHyG4lRq4REA0Ibs4M%2FA5FZP4EuOSDy%2Fw8y%2FTfStm0HPuYGCO3%2FGDiYcbdZ0iQ0sdWAL04VvLRv2k3JgNbuV3Hd32F0s%2Bnwn1DCB9dQk%2BWf9%2BmFlVHruZNws3P4jyOW2t38mYKGH0sqKv75UaAeHIS9EtjDJqrrds1OT5FBgOFz6B5FsIV9xiobTMyedi2d4L4jOWIIPbEGQSo80O8qH4wAmJhAqWO9WR%2FNsOPWEdq3SeHey9B1lMDH3KuAyLZabRGRJ1Abu5KDqVnILKTmU6TBUEki8cFUhmP2qIUVgjfM4ut8lQfdFwFYwg7dqIOYDo27mgfJjNo6MKR4DaD5Tn%2F9t754RsWn4LRhLKKPYtnhYLP8aykovVjWLsM1rtz%2ByYqEUuLP44e7oIFdCRdXau70%2FdgkfqCXNbLMw3wYrG069KnuHkWIa0GCbLtxEkgjkI%2FQvTmd16rMOWmv8gGOqUBlocVJxZEg9lxaaWFZ44%2Bai4yC2yqiEsKC6wDNZPJ3qlDv51dg%2FYROPAJX69w6pcr9zDRUe1FB%2FC3E9HQnWhfGG97XH2c%2FL6%2Fj1YqM%2FEQ6Wi6kzobYe4plHv%2F7S%2B1v%2BbxIXpjO69ZsoCo%2BfrO46Olpk4Ofo%2BY4KyGmlsmGcbltuERzm5gw%2Flownd%2FmyR%2FK5gKjwoyjJqCojk5qkMA8VBQJB46mjsY&X-Amz-Signature=05bc5ee63868061ba67309d9670d61ee89a82ce5fd97201eaba2b2c047d55f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJPPPMH%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251109T010519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmNJlXOrfFRLnbgvLVsxa091gsv9yjw56doqKblWlCEQIgM6GdBNZctntMJpS%2B5Tq5jF%2FjK5DLrl73NRjMRmWs1yAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4eDH6pmIjn31Nu8CrcA%2FgvsxQRdtKQYSMGjxzOLMvuLAQ2P%2BDZsD1rlti3ok6%2FfIWanYbdrosT1gNm2cB3BVGTvZnrmB1PHgIT%2BflV9Q0av9wf71VBMUmGHKUpQHlvshTQFwX6yaFbC%2Fz63ljrP3mbCHviY8ojBMWWGa96LBfPuZiYcMw%2FFr0dVi3mBvh1Lb1HztLHyG4lRq4REA0Ibs4M%2FA5FZP4EuOSDy%2Fw8y%2FTfStm0HPuYGCO3%2FGDiYcbdZ0iQ0sdWAL04VvLRv2k3JgNbuV3Hd32F0s%2Bnwn1DCB9dQk%2BWf9%2BmFlVHruZNws3P4jyOW2t38mYKGH0sqKv75UaAeHIS9EtjDJqrrds1OT5FBgOFz6B5FsIV9xiobTMyedi2d4L4jOWIIPbEGQSo80O8qH4wAmJhAqWO9WR%2FNsOPWEdq3SeHey9B1lMDH3KuAyLZabRGRJ1Abu5KDqVnILKTmU6TBUEki8cFUhmP2qIUVgjfM4ut8lQfdFwFYwg7dqIOYDo27mgfJjNo6MKR4DaD5Tn%2F9t754RsWn4LRhLKKPYtnhYLP8aykovVjWLsM1rtz%2ByYqEUuLP44e7oIFdCRdXau70%2FdgkfqCXNbLMw3wYrG069KnuHkWIa0GCbLtxEkgjkI%2FQvTmd16rMOWmv8gGOqUBlocVJxZEg9lxaaWFZ44%2Bai4yC2yqiEsKC6wDNZPJ3qlDv51dg%2FYROPAJX69w6pcr9zDRUe1FB%2FC3E9HQnWhfGG97XH2c%2FL6%2Fj1YqM%2FEQ6Wi6kzobYe4plHv%2F7S%2B1v%2BbxIXpjO69ZsoCo%2BfrO46Olpk4Ofo%2BY4KyGmlsmGcbltuERzm5gw%2Flownd%2FmyR%2FK5gKjwoyjJqCojk5qkMA8VBQJB46mjsY&X-Amz-Signature=2650d2949aadb61c99d7b752cbc1086beeb440bbe3c759dd115f391885e6e665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJPPPMH%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251109T010519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmNJlXOrfFRLnbgvLVsxa091gsv9yjw56doqKblWlCEQIgM6GdBNZctntMJpS%2B5Tq5jF%2FjK5DLrl73NRjMRmWs1yAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4eDH6pmIjn31Nu8CrcA%2FgvsxQRdtKQYSMGjxzOLMvuLAQ2P%2BDZsD1rlti3ok6%2FfIWanYbdrosT1gNm2cB3BVGTvZnrmB1PHgIT%2BflV9Q0av9wf71VBMUmGHKUpQHlvshTQFwX6yaFbC%2Fz63ljrP3mbCHviY8ojBMWWGa96LBfPuZiYcMw%2FFr0dVi3mBvh1Lb1HztLHyG4lRq4REA0Ibs4M%2FA5FZP4EuOSDy%2Fw8y%2FTfStm0HPuYGCO3%2FGDiYcbdZ0iQ0sdWAL04VvLRv2k3JgNbuV3Hd32F0s%2Bnwn1DCB9dQk%2BWf9%2BmFlVHruZNws3P4jyOW2t38mYKGH0sqKv75UaAeHIS9EtjDJqrrds1OT5FBgOFz6B5FsIV9xiobTMyedi2d4L4jOWIIPbEGQSo80O8qH4wAmJhAqWO9WR%2FNsOPWEdq3SeHey9B1lMDH3KuAyLZabRGRJ1Abu5KDqVnILKTmU6TBUEki8cFUhmP2qIUVgjfM4ut8lQfdFwFYwg7dqIOYDo27mgfJjNo6MKR4DaD5Tn%2F9t754RsWn4LRhLKKPYtnhYLP8aykovVjWLsM1rtz%2ByYqEUuLP44e7oIFdCRdXau70%2FdgkfqCXNbLMw3wYrG069KnuHkWIa0GCbLtxEkgjkI%2FQvTmd16rMOWmv8gGOqUBlocVJxZEg9lxaaWFZ44%2Bai4yC2yqiEsKC6wDNZPJ3qlDv51dg%2FYROPAJX69w6pcr9zDRUe1FB%2FC3E9HQnWhfGG97XH2c%2FL6%2Fj1YqM%2FEQ6Wi6kzobYe4plHv%2F7S%2B1v%2BbxIXpjO69ZsoCo%2BfrO46Olpk4Ofo%2BY4KyGmlsmGcbltuERzm5gw%2Flownd%2FmyR%2FK5gKjwoyjJqCojk5qkMA8VBQJB46mjsY&X-Amz-Signature=dd00bb59891db875f7040237ed7b94ae22bdc8b4f9dcee8d2fac6f5b449b854c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJPPPMH%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251109T010519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmNJlXOrfFRLnbgvLVsxa091gsv9yjw56doqKblWlCEQIgM6GdBNZctntMJpS%2B5Tq5jF%2FjK5DLrl73NRjMRmWs1yAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4eDH6pmIjn31Nu8CrcA%2FgvsxQRdtKQYSMGjxzOLMvuLAQ2P%2BDZsD1rlti3ok6%2FfIWanYbdrosT1gNm2cB3BVGTvZnrmB1PHgIT%2BflV9Q0av9wf71VBMUmGHKUpQHlvshTQFwX6yaFbC%2Fz63ljrP3mbCHviY8ojBMWWGa96LBfPuZiYcMw%2FFr0dVi3mBvh1Lb1HztLHyG4lRq4REA0Ibs4M%2FA5FZP4EuOSDy%2Fw8y%2FTfStm0HPuYGCO3%2FGDiYcbdZ0iQ0sdWAL04VvLRv2k3JgNbuV3Hd32F0s%2Bnwn1DCB9dQk%2BWf9%2BmFlVHruZNws3P4jyOW2t38mYKGH0sqKv75UaAeHIS9EtjDJqrrds1OT5FBgOFz6B5FsIV9xiobTMyedi2d4L4jOWIIPbEGQSo80O8qH4wAmJhAqWO9WR%2FNsOPWEdq3SeHey9B1lMDH3KuAyLZabRGRJ1Abu5KDqVnILKTmU6TBUEki8cFUhmP2qIUVgjfM4ut8lQfdFwFYwg7dqIOYDo27mgfJjNo6MKR4DaD5Tn%2F9t754RsWn4LRhLKKPYtnhYLP8aykovVjWLsM1rtz%2ByYqEUuLP44e7oIFdCRdXau70%2FdgkfqCXNbLMw3wYrG069KnuHkWIa0GCbLtxEkgjkI%2FQvTmd16rMOWmv8gGOqUBlocVJxZEg9lxaaWFZ44%2Bai4yC2yqiEsKC6wDNZPJ3qlDv51dg%2FYROPAJX69w6pcr9zDRUe1FB%2FC3E9HQnWhfGG97XH2c%2FL6%2Fj1YqM%2FEQ6Wi6kzobYe4plHv%2F7S%2B1v%2BbxIXpjO69ZsoCo%2BfrO46Olpk4Ofo%2BY4KyGmlsmGcbltuERzm5gw%2Flownd%2FmyR%2FK5gKjwoyjJqCojk5qkMA8VBQJB46mjsY&X-Amz-Signature=65b1a334ba5308584bfef24dbcd47ef51086b637379de5c27470a5410e21755a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJPPPMH%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251109T010519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDmNJlXOrfFRLnbgvLVsxa091gsv9yjw56doqKblWlCEQIgM6GdBNZctntMJpS%2B5Tq5jF%2FjK5DLrl73NRjMRmWs1yAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4eDH6pmIjn31Nu8CrcA%2FgvsxQRdtKQYSMGjxzOLMvuLAQ2P%2BDZsD1rlti3ok6%2FfIWanYbdrosT1gNm2cB3BVGTvZnrmB1PHgIT%2BflV9Q0av9wf71VBMUmGHKUpQHlvshTQFwX6yaFbC%2Fz63ljrP3mbCHviY8ojBMWWGa96LBfPuZiYcMw%2FFr0dVi3mBvh1Lb1HztLHyG4lRq4REA0Ibs4M%2FA5FZP4EuOSDy%2Fw8y%2FTfStm0HPuYGCO3%2FGDiYcbdZ0iQ0sdWAL04VvLRv2k3JgNbuV3Hd32F0s%2Bnwn1DCB9dQk%2BWf9%2BmFlVHruZNws3P4jyOW2t38mYKGH0sqKv75UaAeHIS9EtjDJqrrds1OT5FBgOFz6B5FsIV9xiobTMyedi2d4L4jOWIIPbEGQSo80O8qH4wAmJhAqWO9WR%2FNsOPWEdq3SeHey9B1lMDH3KuAyLZabRGRJ1Abu5KDqVnILKTmU6TBUEki8cFUhmP2qIUVgjfM4ut8lQfdFwFYwg7dqIOYDo27mgfJjNo6MKR4DaD5Tn%2F9t754RsWn4LRhLKKPYtnhYLP8aykovVjWLsM1rtz%2ByYqEUuLP44e7oIFdCRdXau70%2FdgkfqCXNbLMw3wYrG069KnuHkWIa0GCbLtxEkgjkI%2FQvTmd16rMOWmv8gGOqUBlocVJxZEg9lxaaWFZ44%2Bai4yC2yqiEsKC6wDNZPJ3qlDv51dg%2FYROPAJX69w6pcr9zDRUe1FB%2FC3E9HQnWhfGG97XH2c%2FL6%2Fj1YqM%2FEQ6Wi6kzobYe4plHv%2F7S%2B1v%2BbxIXpjO69ZsoCo%2BfrO46Olpk4Ofo%2BY4KyGmlsmGcbltuERzm5gw%2Flownd%2FmyR%2FK5gKjwoyjJqCojk5qkMA8VBQJB46mjsY&X-Amz-Signature=72647039ae0a18681d1bbe4c81f61ef11d4573527cd9d17ceaf5bba59d90226f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7SN7TC%2F20251109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251109T010519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDyyCBfiA2O3REyKF2EQiuPAP6K5R1%2FIdDNDy2X8A%2BLsAiBCtPUEABCZ76%2BfEJPOASOLs9SubgZgGoszkvutNGaBliqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP56p0cVRJotfo8oeKtwDnCbu8mh2ySvQpRucW4UP71azriCIabw0iosVJLJ%2F2l%2B7%2Bta2uh9dECj6II0jgT08ONthobykUPGw71M3Wcgz6ge31m4nJnO34IxybZUBLvOIQ%2FJVdwfOX%2BDAoNcxl6vaBHvkPQiO2UptSG8wnVq%2BLzfq7Iga5OBiXB85KxfevGvyFC6Oi4qk1oKfgMz44w%2BFaRAJ9VUH8wpHyB87XUMmbh2ah%2FohQdW5i1ZmI%2F1kieKXQR%2FDhJ8H6gD2smVsEK%2FamBsYhxqU6qnSJiCGmz4qWgvDksgFKw48BPkEEFKa2RmDeNpvhpp%2Fou5V5N9D9IZatA3BiXmaN5UDLRBS4I9N%2FvXGe4S7v33i13DsoW7npMGL%2Byf67cy4GPv4sEFBXvTBxpWwqZBJe3S7Uh2f4z3OAGgPhbkamJuQhSs1X%2FZzaAu9GU2Kk8TSaN%2BNhRPr8W9cESq1lk7ZBZjzSf3vIImu8eA%2Fo6bqrKI%2B9akluJ4HI0DTuYrFEja5Bzq2RLHyNAPRcHRycPdepUhEePi5wlyZNKC0THkWvKbGbBt1uioI%2Bdmaon6NEUmD9LhoXyQwy4Ja86DfPd5AV9EqEUnVT4LlNHwHuJc6zrY5r9yACloqUux0RyKbu%2B%2BcCkygrCQwuqe%2FyAY6pgGlIQChbXD0nfdytDkqXMur4YijwHYabOuOy3GTjPAZvdA9nAvrwn%2FkOci9uCM6TWhMVT4cm4DnpzCdjCwg7NFG9lh6RQRfj%2BLl7v%2BHFmseMIhWBg6GaIf3DhwkK05RxT%2BbCq1PXy%2BjQSoYo%2FAWBeeAtBs9AiJShX2SV8nh25Q4qaNPplT39Lvcpsu1L1wbqnZwBIsshZ%2BuAjuhfxzIHbdTZXEkuIy0&X-Amz-Signature=89fda6205ddf83df3fd4bfa8deecce981a308c1a152aca8361004b8e7045b1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

