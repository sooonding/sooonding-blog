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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFT37C2%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtjCxtDl8xx%2FbotkacLCOxa1YjPZE5V2nvuL%2FFH5FDVAiBqp6xfJBvDzW6xos98l1e61gAPJ4a%2BjBqLxB9CLF6jASr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMaUwa3vdvTaHf7aqhKtwDtkhD6Wuq4q89mgs1S5evCT9X8yRMLM1MI%2Bn8tR3R%2B3q9P8B0nLS0cGUfw%2BtIcGiiMCgrBxR6bldcm5E46KgJiGp%2FNx1G6C%2BeKnSThPL4gQ7VXlNL0AOiBexdvajC4rm2l8V%2BLd%2F0tKbnE%2BDp%2B5Tf%2B1OZJ2OG80NJxX2fVfn35yFWVKcQcnDahedCBL7RNs6hN1WY5ojyJ2RTaXdNwi3ZII1X75hcq%2FGP4Ah4kILvuXcdoY%2FpNl88FAEJNSDvMoHypEyFnxY9alHM7LDV1pFbjPcaSzrgMa5rbxa%2BvaeHBl%2BkxRBCpGZFCKDAcZQX8q8NLwR82ZYWLooRn5IDW22C0DoVqk%2F63lmQEX38wUgtKr3aFJq3IyOVHZn0OsR9K4eZz3CoUhG9c12E6CAP4coxIqU2o3ubI0kJe9aNzL2aO%2Bae2Qtk43hlES%2F7lPq6vTQaFlgo8tDH50soEHDmniuBSiOSa3WqxbDI4pRA63MZOs6dy9fViyDmvKVR9ZT8hOyhlWQvUSfxGTAHyKGvzBgWzOUGFVHfDvg2l4RB5wzsgHCbXms0o3KTATkLVxHlwe%2B6SzkyUt7C%2FIvYwCo024wYvufWm1FcbIhiHnKCjzbtHo4YVp1pFxern06x6hYw8uapyAY6pgGa1QBxKqgi%2FmsSlM48gLhTneU1cTBos8P2aFEd3iw1LYi4qLCgcCkYGL855zS0lPl9v602amPeU6t6bpxD1fFlZsSICCpEAqBqkd5bDX0wpPZ31eqr5doho%2Bkuqg9hWmP47RkVuuuH5UsTiScYOD8nal2L1jpz0KaYZIrW8S6Uq3SEmtwg%2Fh4Y8fQMGnkZ5iaGhp9L%2FNxBkcfTaqzTDUhDCjYvJ%2Bij&X-Amz-Signature=eac56286b2ac48c611d2a2b1ae9555d703be19d56405ff8adf2abccdd98fefee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXAK5LW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDpGgWysIPZXzy0e3a9gCnixtAk5nY0YsgM6m2qBe%2FJAiA7WrP9cmWKcVoE40Zx6HZHUfMqyW80xNe%2BaQXau%2FuoGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2FJIHIJoZRFuiHejiKtwDt7PTAskUI3ebl%2FcB1MVYSR23aeBRAjNhm6nbPocWCggWcIfaaQjJSDFDAWSDCyHS3YKiCXq6%2F5tt7YRuwSc9weIaFTxcepDlB311cH9vzJKdWfVqRVSr%2B7vn3%2FZGy5U3PTonpKqhU95eY1x1fGRr8eMpeCtiXaa1GEs5Qf4lJlSmoyFtDcb3CPUMwDBL3k7FxCLXoBkLbpWNBPrUx%2FalPyWH9hXEbfbsWo19KbMt9NZ0hHreg6jwnJVspMVvsNbG6svsRe%2Bw7wDZDZab9JhGGfEmC4PObwwJdppdVGjJWUFHNrXzeZGiY6QoLT2Tr5hvrhWn0EOUbSjTA7ALHOMOafu20dY3UPBEOiZQeKHB0g7nG0o9sQtWBcHqYlWLpX4mKb1gn%2FpdpPutqcnmpN1evpX5cNWDAzdI927HAzvGb1YUdCMDqSWO6zV3ytUtg2yK%2B1HUk0RXOOX65EG4y4jC6GfZCv5%2FZmdgEDDlnPlidI9NsLJWoh57bsl7wlQVDGcY57UR6Yb%2B9nQL6h7h07KF%2BIdURXtwQh8cr7%2F43Q2nvwZ6Vq7X8TXNfuwlcxYXSE1Mfq6HW3CXtyg7aB4xHxTexuRB92MZeoqVYPobQsHbUh758V%2B0S8L9bezJ0Cowk%2BepyAY6pgFSiCP0MLVPXS%2FsTucGox%2BcoN5T5f%2B3uWVKyWCliisdnMBXSY%2ByrlBR%2B4L8Mr6IJtwxTYsEeiIKeHzJC8NHzE7pp1wS3KmeF00aQWxVdT7Fnh3MCqTDKXfWHWHiVIkJJoXf79g8qOrA3NfTGxvImTPB7DKzh7NQs6bP0%2BIqhb4N2OEbi1Ft4osanCYi4AqKOh1NoPuc%2FKdqW6ZJU%2BvpyBhPavyu0VmS&X-Amz-Signature=19ebfc617df111b8f00b2b35fb03708d50d70001c3d546b74d78f62aa3789ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXAK5LW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDpGgWysIPZXzy0e3a9gCnixtAk5nY0YsgM6m2qBe%2FJAiA7WrP9cmWKcVoE40Zx6HZHUfMqyW80xNe%2BaQXau%2FuoGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2FJIHIJoZRFuiHejiKtwDt7PTAskUI3ebl%2FcB1MVYSR23aeBRAjNhm6nbPocWCggWcIfaaQjJSDFDAWSDCyHS3YKiCXq6%2F5tt7YRuwSc9weIaFTxcepDlB311cH9vzJKdWfVqRVSr%2B7vn3%2FZGy5U3PTonpKqhU95eY1x1fGRr8eMpeCtiXaa1GEs5Qf4lJlSmoyFtDcb3CPUMwDBL3k7FxCLXoBkLbpWNBPrUx%2FalPyWH9hXEbfbsWo19KbMt9NZ0hHreg6jwnJVspMVvsNbG6svsRe%2Bw7wDZDZab9JhGGfEmC4PObwwJdppdVGjJWUFHNrXzeZGiY6QoLT2Tr5hvrhWn0EOUbSjTA7ALHOMOafu20dY3UPBEOiZQeKHB0g7nG0o9sQtWBcHqYlWLpX4mKb1gn%2FpdpPutqcnmpN1evpX5cNWDAzdI927HAzvGb1YUdCMDqSWO6zV3ytUtg2yK%2B1HUk0RXOOX65EG4y4jC6GfZCv5%2FZmdgEDDlnPlidI9NsLJWoh57bsl7wlQVDGcY57UR6Yb%2B9nQL6h7h07KF%2BIdURXtwQh8cr7%2F43Q2nvwZ6Vq7X8TXNfuwlcxYXSE1Mfq6HW3CXtyg7aB4xHxTexuRB92MZeoqVYPobQsHbUh758V%2B0S8L9bezJ0Cowk%2BepyAY6pgFSiCP0MLVPXS%2FsTucGox%2BcoN5T5f%2B3uWVKyWCliisdnMBXSY%2ByrlBR%2B4L8Mr6IJtwxTYsEeiIKeHzJC8NHzE7pp1wS3KmeF00aQWxVdT7Fnh3MCqTDKXfWHWHiVIkJJoXf79g8qOrA3NfTGxvImTPB7DKzh7NQs6bP0%2BIqhb4N2OEbi1Ft4osanCYi4AqKOh1NoPuc%2FKdqW6ZJU%2BvpyBhPavyu0VmS&X-Amz-Signature=1d6a12868e2d71d7b61946fb5ad6bdf1ba82bb74eb5ea25a0a06499fc20a2dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXAK5LW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDpGgWysIPZXzy0e3a9gCnixtAk5nY0YsgM6m2qBe%2FJAiA7WrP9cmWKcVoE40Zx6HZHUfMqyW80xNe%2BaQXau%2FuoGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2FJIHIJoZRFuiHejiKtwDt7PTAskUI3ebl%2FcB1MVYSR23aeBRAjNhm6nbPocWCggWcIfaaQjJSDFDAWSDCyHS3YKiCXq6%2F5tt7YRuwSc9weIaFTxcepDlB311cH9vzJKdWfVqRVSr%2B7vn3%2FZGy5U3PTonpKqhU95eY1x1fGRr8eMpeCtiXaa1GEs5Qf4lJlSmoyFtDcb3CPUMwDBL3k7FxCLXoBkLbpWNBPrUx%2FalPyWH9hXEbfbsWo19KbMt9NZ0hHreg6jwnJVspMVvsNbG6svsRe%2Bw7wDZDZab9JhGGfEmC4PObwwJdppdVGjJWUFHNrXzeZGiY6QoLT2Tr5hvrhWn0EOUbSjTA7ALHOMOafu20dY3UPBEOiZQeKHB0g7nG0o9sQtWBcHqYlWLpX4mKb1gn%2FpdpPutqcnmpN1evpX5cNWDAzdI927HAzvGb1YUdCMDqSWO6zV3ytUtg2yK%2B1HUk0RXOOX65EG4y4jC6GfZCv5%2FZmdgEDDlnPlidI9NsLJWoh57bsl7wlQVDGcY57UR6Yb%2B9nQL6h7h07KF%2BIdURXtwQh8cr7%2F43Q2nvwZ6Vq7X8TXNfuwlcxYXSE1Mfq6HW3CXtyg7aB4xHxTexuRB92MZeoqVYPobQsHbUh758V%2B0S8L9bezJ0Cowk%2BepyAY6pgFSiCP0MLVPXS%2FsTucGox%2BcoN5T5f%2B3uWVKyWCliisdnMBXSY%2ByrlBR%2B4L8Mr6IJtwxTYsEeiIKeHzJC8NHzE7pp1wS3KmeF00aQWxVdT7Fnh3MCqTDKXfWHWHiVIkJJoXf79g8qOrA3NfTGxvImTPB7DKzh7NQs6bP0%2BIqhb4N2OEbi1Ft4osanCYi4AqKOh1NoPuc%2FKdqW6ZJU%2BvpyBhPavyu0VmS&X-Amz-Signature=a13f1494ec9678bd4ea29f7bd0a1d7adecb697c6dfb222ce9697a5175dfec178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXAK5LW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDpGgWysIPZXzy0e3a9gCnixtAk5nY0YsgM6m2qBe%2FJAiA7WrP9cmWKcVoE40Zx6HZHUfMqyW80xNe%2BaQXau%2FuoGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2FJIHIJoZRFuiHejiKtwDt7PTAskUI3ebl%2FcB1MVYSR23aeBRAjNhm6nbPocWCggWcIfaaQjJSDFDAWSDCyHS3YKiCXq6%2F5tt7YRuwSc9weIaFTxcepDlB311cH9vzJKdWfVqRVSr%2B7vn3%2FZGy5U3PTonpKqhU95eY1x1fGRr8eMpeCtiXaa1GEs5Qf4lJlSmoyFtDcb3CPUMwDBL3k7FxCLXoBkLbpWNBPrUx%2FalPyWH9hXEbfbsWo19KbMt9NZ0hHreg6jwnJVspMVvsNbG6svsRe%2Bw7wDZDZab9JhGGfEmC4PObwwJdppdVGjJWUFHNrXzeZGiY6QoLT2Tr5hvrhWn0EOUbSjTA7ALHOMOafu20dY3UPBEOiZQeKHB0g7nG0o9sQtWBcHqYlWLpX4mKb1gn%2FpdpPutqcnmpN1evpX5cNWDAzdI927HAzvGb1YUdCMDqSWO6zV3ytUtg2yK%2B1HUk0RXOOX65EG4y4jC6GfZCv5%2FZmdgEDDlnPlidI9NsLJWoh57bsl7wlQVDGcY57UR6Yb%2B9nQL6h7h07KF%2BIdURXtwQh8cr7%2F43Q2nvwZ6Vq7X8TXNfuwlcxYXSE1Mfq6HW3CXtyg7aB4xHxTexuRB92MZeoqVYPobQsHbUh758V%2B0S8L9bezJ0Cowk%2BepyAY6pgFSiCP0MLVPXS%2FsTucGox%2BcoN5T5f%2B3uWVKyWCliisdnMBXSY%2ByrlBR%2B4L8Mr6IJtwxTYsEeiIKeHzJC8NHzE7pp1wS3KmeF00aQWxVdT7Fnh3MCqTDKXfWHWHiVIkJJoXf79g8qOrA3NfTGxvImTPB7DKzh7NQs6bP0%2BIqhb4N2OEbi1Ft4osanCYi4AqKOh1NoPuc%2FKdqW6ZJU%2BvpyBhPavyu0VmS&X-Amz-Signature=0dae7c241f411323f271e4b7999d038a38dc6eda27c44194cb806dc06c92f016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXAK5LW%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDpGgWysIPZXzy0e3a9gCnixtAk5nY0YsgM6m2qBe%2FJAiA7WrP9cmWKcVoE40Zx6HZHUfMqyW80xNe%2BaQXau%2FuoGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2FJIHIJoZRFuiHejiKtwDt7PTAskUI3ebl%2FcB1MVYSR23aeBRAjNhm6nbPocWCggWcIfaaQjJSDFDAWSDCyHS3YKiCXq6%2F5tt7YRuwSc9weIaFTxcepDlB311cH9vzJKdWfVqRVSr%2B7vn3%2FZGy5U3PTonpKqhU95eY1x1fGRr8eMpeCtiXaa1GEs5Qf4lJlSmoyFtDcb3CPUMwDBL3k7FxCLXoBkLbpWNBPrUx%2FalPyWH9hXEbfbsWo19KbMt9NZ0hHreg6jwnJVspMVvsNbG6svsRe%2Bw7wDZDZab9JhGGfEmC4PObwwJdppdVGjJWUFHNrXzeZGiY6QoLT2Tr5hvrhWn0EOUbSjTA7ALHOMOafu20dY3UPBEOiZQeKHB0g7nG0o9sQtWBcHqYlWLpX4mKb1gn%2FpdpPutqcnmpN1evpX5cNWDAzdI927HAzvGb1YUdCMDqSWO6zV3ytUtg2yK%2B1HUk0RXOOX65EG4y4jC6GfZCv5%2FZmdgEDDlnPlidI9NsLJWoh57bsl7wlQVDGcY57UR6Yb%2B9nQL6h7h07KF%2BIdURXtwQh8cr7%2F43Q2nvwZ6Vq7X8TXNfuwlcxYXSE1Mfq6HW3CXtyg7aB4xHxTexuRB92MZeoqVYPobQsHbUh758V%2B0S8L9bezJ0Cowk%2BepyAY6pgFSiCP0MLVPXS%2FsTucGox%2BcoN5T5f%2B3uWVKyWCliisdnMBXSY%2ByrlBR%2B4L8Mr6IJtwxTYsEeiIKeHzJC8NHzE7pp1wS3KmeF00aQWxVdT7Fnh3MCqTDKXfWHWHiVIkJJoXf79g8qOrA3NfTGxvImTPB7DKzh7NQs6bP0%2BIqhb4N2OEbi1Ft4osanCYi4AqKOh1NoPuc%2FKdqW6ZJU%2BvpyBhPavyu0VmS&X-Amz-Signature=0a61a4f8ebc6ba45aca4f3de7fbcd70dedb98c21fbed8ff0600c352c7af211a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFT37C2%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T010329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtjCxtDl8xx%2FbotkacLCOxa1YjPZE5V2nvuL%2FFH5FDVAiBqp6xfJBvDzW6xos98l1e61gAPJ4a%2BjBqLxB9CLF6jASr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMaUwa3vdvTaHf7aqhKtwDtkhD6Wuq4q89mgs1S5evCT9X8yRMLM1MI%2Bn8tR3R%2B3q9P8B0nLS0cGUfw%2BtIcGiiMCgrBxR6bldcm5E46KgJiGp%2FNx1G6C%2BeKnSThPL4gQ7VXlNL0AOiBexdvajC4rm2l8V%2BLd%2F0tKbnE%2BDp%2B5Tf%2B1OZJ2OG80NJxX2fVfn35yFWVKcQcnDahedCBL7RNs6hN1WY5ojyJ2RTaXdNwi3ZII1X75hcq%2FGP4Ah4kILvuXcdoY%2FpNl88FAEJNSDvMoHypEyFnxY9alHM7LDV1pFbjPcaSzrgMa5rbxa%2BvaeHBl%2BkxRBCpGZFCKDAcZQX8q8NLwR82ZYWLooRn5IDW22C0DoVqk%2F63lmQEX38wUgtKr3aFJq3IyOVHZn0OsR9K4eZz3CoUhG9c12E6CAP4coxIqU2o3ubI0kJe9aNzL2aO%2Bae2Qtk43hlES%2F7lPq6vTQaFlgo8tDH50soEHDmniuBSiOSa3WqxbDI4pRA63MZOs6dy9fViyDmvKVR9ZT8hOyhlWQvUSfxGTAHyKGvzBgWzOUGFVHfDvg2l4RB5wzsgHCbXms0o3KTATkLVxHlwe%2B6SzkyUt7C%2FIvYwCo024wYvufWm1FcbIhiHnKCjzbtHo4YVp1pFxern06x6hYw8uapyAY6pgGa1QBxKqgi%2FmsSlM48gLhTneU1cTBos8P2aFEd3iw1LYi4qLCgcCkYGL855zS0lPl9v602amPeU6t6bpxD1fFlZsSICCpEAqBqkd5bDX0wpPZ31eqr5doho%2Bkuqg9hWmP47RkVuuuH5UsTiScYOD8nal2L1jpz0KaYZIrW8S6Uq3SEmtwg%2Fh4Y8fQMGnkZ5iaGhp9L%2FNxBkcfTaqzTDUhDCjYvJ%2Bij&X-Amz-Signature=aab6adb9aaaf7bcb71f6ff855ac61482bf7d588e1f7e3547ace52e038df5ba73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

