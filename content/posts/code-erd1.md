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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Q5KJ65%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9BMzhQa7zHA7tsdjDqPdA4pKY9w4k5XMrHdJUNla04AiEAoRL4NwBI7JgnQQ%2BtpKy4LRYVEQRs2KSOy4BzzKrXsEQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLpGmSuRiNS1heJAlSrcA7C9ZC1EOkyzQYs5WGCa0rXcr0t89QIN5kcWfnTC9R6yJ%2Bi72poviqkv856yyRc4GGqe0xEO2Xn%2FH4kT%2FRlXv1shM9Nx93D4HbX3LP%2B7y4wKYodd4RO36Sa4vl1zrMQvDPxPDURHKBhXzTX%2FSGox0%2B3LuvjsfvD0cePGexqYE1d9%2Fcg10yzUPA4q1YttZSV1XOTetqerdo%2F7S9dHPkpJ7L%2F25DloXIryXbWt830F%2B8S%2FagjYGy%2FUzhFOHaiHcGSsCKBSo0XZzkX4OSJPbT6GYJM67VoIKJV622D%2BrvL4Fqzoh2Dxmaf8sZx6iQb0Hc%2FuFtgA%2FwaodwwUoo2VofY96Z78y9dtJdQzxbR52v3%2FmQsuEKR1vUBPc5g3GFCTtaGmT%2Fhhf%2FNL8NYRSQx%2Bv4Zghj1XyJMluDivXjstGuhBQ0N2N7S7iAmKWNyk%2BhV3NP%2FdaDRP2nKbNko16XhYWxlfGR03HPbx4C2psMjEvdy2rpOCcmIOGhZ6P9RyS%2FWOZOcarbChr1WTTc1soqJx8YnMKjRbNo%2BgZ7uCkTJFTW30chdI6Msw0cdl1ng0vEQuBSdhjxk6EOSmy9C%2Fv0TN0ezct6OJf4rrKKtc9CuKTRpRx70XsbWzSMcp1D3otbgrMPmcztAGOqUBDSmpLYLVSpufXfQ2%2F9mPOG9TBt3RfUAjzx%2Bq1GqI33%2FVd6YnGgEjD7vO%2F7uoFSh1vWOnJvSArrXVFB7eti45P0sp85nUjtiTgF0dmsgej0D%2BhNYI3SC5xPIl4kstGrlfXsbV9CWST9JMzbVtD7ukJS%2BTRIJMwXZKOE6fF%2B83WifZfIpuvawX2Oc1xcVDLquW%2FCYoJr%2Fqn0BQfafUAesM5aNlWTvD&X-Amz-Signature=86695a890127d09acdf0bdda2372f94f8d52502aa74b6bab4100a0de9fab743c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P5OACR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdli16czL1%2FkmzPbwEQ7kgZ4dIwQi0jrp29ZMBh4LujgIgP29zGe5szVzcbPPJhXffH3l3JdWbQ7OVhliqhXdcr7Uq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOD3UfXaU48Hw8pjQCrcA7l28GtigHez3uatMp2J2HJ7%2F0nDFh%2Fw3e3cImuN2qYJWXJ7xbcJUe6nDYtfXg7z%2FQjurMsdIxBeY355qaASZ7zxnhcMyZbjEy7iMWIhtmwbmXDRx2Uh0pcLt7ZOakdwnvmAUk0NbJ2aNhpsHjN%2BBEEHAlyAA9so5Gmu6ok5QjehAxc4ck%2B5aC60QXZ9JzrC4ENa76fx%2B%2F1%2BRz%2FhPqSyNYS9I9upjRJAwD8tERU5uc4hx6yZCrAQyfi9KUSv7NfYb9%2BexCAXJn3fU%2BeP%2FENYemWlVRtSLq1VUc%2BHyffdbCwZrIWS3iRw5Iqo5jzG3iAoc9JSU3Cwsov9dWYcsBy42%2FpwzxgJYP1Uuvr8sjsr0r8qoxR9E1YD1K8Q6DTYBSSaBdWuGUdkIjWY7WyCCaHK%2FPFbSlIFVmaQ3TbUm0PbXv9kOoc8G24QWY9bTHL%2FJeaFVTyBvh31QB5RGKPBGImxZO4Qq6P6%2FSCKgZ5v8u9pje5MJiG7AqboOVwA3teasoCbogRqG7xY7aJuNrb%2Bu7Tah48P7R3kL%2B%2B8luJVXGbWWIYpLoPbdZJXaIodR%2Bh1rBmbaqteNKhW8cmGJTJWRY3Xjpo5jcB%2BmOahUTGWzqpTP4aBJ4PJRgN%2B9PkQjc2SMNmdztAGOqUB3bL4KjBhUHle0khINioCUNpwdFOua2ARIyoVECbcb3CNroD5H6RXvfroi6WiAjcC7IGBsJ8y6KJqApwimZYL2Z6%2FwxznTwa5Eea5TvVuaAGtPCHRj3Y%2B16hDtW5CMGXpMmSkkBKiLuH0v69fuI8UwR7XCQzWP59jgBdTex6sCK3JiAp%2ByufEmM8cdFsXvpacQrswkD5EOGtb%2BPaG1SlBGdm1MV5X&X-Amz-Signature=9f4fe8bcbc4fb5fb08e46473aca75861a104e8956381777e44a349e35b754718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P5OACR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdli16czL1%2FkmzPbwEQ7kgZ4dIwQi0jrp29ZMBh4LujgIgP29zGe5szVzcbPPJhXffH3l3JdWbQ7OVhliqhXdcr7Uq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOD3UfXaU48Hw8pjQCrcA7l28GtigHez3uatMp2J2HJ7%2F0nDFh%2Fw3e3cImuN2qYJWXJ7xbcJUe6nDYtfXg7z%2FQjurMsdIxBeY355qaASZ7zxnhcMyZbjEy7iMWIhtmwbmXDRx2Uh0pcLt7ZOakdwnvmAUk0NbJ2aNhpsHjN%2BBEEHAlyAA9so5Gmu6ok5QjehAxc4ck%2B5aC60QXZ9JzrC4ENa76fx%2B%2F1%2BRz%2FhPqSyNYS9I9upjRJAwD8tERU5uc4hx6yZCrAQyfi9KUSv7NfYb9%2BexCAXJn3fU%2BeP%2FENYemWlVRtSLq1VUc%2BHyffdbCwZrIWS3iRw5Iqo5jzG3iAoc9JSU3Cwsov9dWYcsBy42%2FpwzxgJYP1Uuvr8sjsr0r8qoxR9E1YD1K8Q6DTYBSSaBdWuGUdkIjWY7WyCCaHK%2FPFbSlIFVmaQ3TbUm0PbXv9kOoc8G24QWY9bTHL%2FJeaFVTyBvh31QB5RGKPBGImxZO4Qq6P6%2FSCKgZ5v8u9pje5MJiG7AqboOVwA3teasoCbogRqG7xY7aJuNrb%2Bu7Tah48P7R3kL%2B%2B8luJVXGbWWIYpLoPbdZJXaIodR%2Bh1rBmbaqteNKhW8cmGJTJWRY3Xjpo5jcB%2BmOahUTGWzqpTP4aBJ4PJRgN%2B9PkQjc2SMNmdztAGOqUB3bL4KjBhUHle0khINioCUNpwdFOua2ARIyoVECbcb3CNroD5H6RXvfroi6WiAjcC7IGBsJ8y6KJqApwimZYL2Z6%2FwxznTwa5Eea5TvVuaAGtPCHRj3Y%2B16hDtW5CMGXpMmSkkBKiLuH0v69fuI8UwR7XCQzWP59jgBdTex6sCK3JiAp%2ByufEmM8cdFsXvpacQrswkD5EOGtb%2BPaG1SlBGdm1MV5X&X-Amz-Signature=ce96138345f6c09d704baaf52d9a9d5bc769d3b4fe353d30dba9a0363b49d6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P5OACR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdli16czL1%2FkmzPbwEQ7kgZ4dIwQi0jrp29ZMBh4LujgIgP29zGe5szVzcbPPJhXffH3l3JdWbQ7OVhliqhXdcr7Uq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOD3UfXaU48Hw8pjQCrcA7l28GtigHez3uatMp2J2HJ7%2F0nDFh%2Fw3e3cImuN2qYJWXJ7xbcJUe6nDYtfXg7z%2FQjurMsdIxBeY355qaASZ7zxnhcMyZbjEy7iMWIhtmwbmXDRx2Uh0pcLt7ZOakdwnvmAUk0NbJ2aNhpsHjN%2BBEEHAlyAA9so5Gmu6ok5QjehAxc4ck%2B5aC60QXZ9JzrC4ENa76fx%2B%2F1%2BRz%2FhPqSyNYS9I9upjRJAwD8tERU5uc4hx6yZCrAQyfi9KUSv7NfYb9%2BexCAXJn3fU%2BeP%2FENYemWlVRtSLq1VUc%2BHyffdbCwZrIWS3iRw5Iqo5jzG3iAoc9JSU3Cwsov9dWYcsBy42%2FpwzxgJYP1Uuvr8sjsr0r8qoxR9E1YD1K8Q6DTYBSSaBdWuGUdkIjWY7WyCCaHK%2FPFbSlIFVmaQ3TbUm0PbXv9kOoc8G24QWY9bTHL%2FJeaFVTyBvh31QB5RGKPBGImxZO4Qq6P6%2FSCKgZ5v8u9pje5MJiG7AqboOVwA3teasoCbogRqG7xY7aJuNrb%2Bu7Tah48P7R3kL%2B%2B8luJVXGbWWIYpLoPbdZJXaIodR%2Bh1rBmbaqteNKhW8cmGJTJWRY3Xjpo5jcB%2BmOahUTGWzqpTP4aBJ4PJRgN%2B9PkQjc2SMNmdztAGOqUB3bL4KjBhUHle0khINioCUNpwdFOua2ARIyoVECbcb3CNroD5H6RXvfroi6WiAjcC7IGBsJ8y6KJqApwimZYL2Z6%2FwxznTwa5Eea5TvVuaAGtPCHRj3Y%2B16hDtW5CMGXpMmSkkBKiLuH0v69fuI8UwR7XCQzWP59jgBdTex6sCK3JiAp%2ByufEmM8cdFsXvpacQrswkD5EOGtb%2BPaG1SlBGdm1MV5X&X-Amz-Signature=7c862127c8108650eab54767fe2fa9f79fbdd11ca6cae08cd92876a7b8717758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P5OACR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdli16czL1%2FkmzPbwEQ7kgZ4dIwQi0jrp29ZMBh4LujgIgP29zGe5szVzcbPPJhXffH3l3JdWbQ7OVhliqhXdcr7Uq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOD3UfXaU48Hw8pjQCrcA7l28GtigHez3uatMp2J2HJ7%2F0nDFh%2Fw3e3cImuN2qYJWXJ7xbcJUe6nDYtfXg7z%2FQjurMsdIxBeY355qaASZ7zxnhcMyZbjEy7iMWIhtmwbmXDRx2Uh0pcLt7ZOakdwnvmAUk0NbJ2aNhpsHjN%2BBEEHAlyAA9so5Gmu6ok5QjehAxc4ck%2B5aC60QXZ9JzrC4ENa76fx%2B%2F1%2BRz%2FhPqSyNYS9I9upjRJAwD8tERU5uc4hx6yZCrAQyfi9KUSv7NfYb9%2BexCAXJn3fU%2BeP%2FENYemWlVRtSLq1VUc%2BHyffdbCwZrIWS3iRw5Iqo5jzG3iAoc9JSU3Cwsov9dWYcsBy42%2FpwzxgJYP1Uuvr8sjsr0r8qoxR9E1YD1K8Q6DTYBSSaBdWuGUdkIjWY7WyCCaHK%2FPFbSlIFVmaQ3TbUm0PbXv9kOoc8G24QWY9bTHL%2FJeaFVTyBvh31QB5RGKPBGImxZO4Qq6P6%2FSCKgZ5v8u9pje5MJiG7AqboOVwA3teasoCbogRqG7xY7aJuNrb%2Bu7Tah48P7R3kL%2B%2B8luJVXGbWWIYpLoPbdZJXaIodR%2Bh1rBmbaqteNKhW8cmGJTJWRY3Xjpo5jcB%2BmOahUTGWzqpTP4aBJ4PJRgN%2B9PkQjc2SMNmdztAGOqUB3bL4KjBhUHle0khINioCUNpwdFOua2ARIyoVECbcb3CNroD5H6RXvfroi6WiAjcC7IGBsJ8y6KJqApwimZYL2Z6%2FwxznTwa5Eea5TvVuaAGtPCHRj3Y%2B16hDtW5CMGXpMmSkkBKiLuH0v69fuI8UwR7XCQzWP59jgBdTex6sCK3JiAp%2ByufEmM8cdFsXvpacQrswkD5EOGtb%2BPaG1SlBGdm1MV5X&X-Amz-Signature=f0810a9a83338caf10c8bb4b280c1551b6b892e97c2fe23cf9db6e9325b271a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P5OACR%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdli16czL1%2FkmzPbwEQ7kgZ4dIwQi0jrp29ZMBh4LujgIgP29zGe5szVzcbPPJhXffH3l3JdWbQ7OVhliqhXdcr7Uq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOD3UfXaU48Hw8pjQCrcA7l28GtigHez3uatMp2J2HJ7%2F0nDFh%2Fw3e3cImuN2qYJWXJ7xbcJUe6nDYtfXg7z%2FQjurMsdIxBeY355qaASZ7zxnhcMyZbjEy7iMWIhtmwbmXDRx2Uh0pcLt7ZOakdwnvmAUk0NbJ2aNhpsHjN%2BBEEHAlyAA9so5Gmu6ok5QjehAxc4ck%2B5aC60QXZ9JzrC4ENa76fx%2B%2F1%2BRz%2FhPqSyNYS9I9upjRJAwD8tERU5uc4hx6yZCrAQyfi9KUSv7NfYb9%2BexCAXJn3fU%2BeP%2FENYemWlVRtSLq1VUc%2BHyffdbCwZrIWS3iRw5Iqo5jzG3iAoc9JSU3Cwsov9dWYcsBy42%2FpwzxgJYP1Uuvr8sjsr0r8qoxR9E1YD1K8Q6DTYBSSaBdWuGUdkIjWY7WyCCaHK%2FPFbSlIFVmaQ3TbUm0PbXv9kOoc8G24QWY9bTHL%2FJeaFVTyBvh31QB5RGKPBGImxZO4Qq6P6%2FSCKgZ5v8u9pje5MJiG7AqboOVwA3teasoCbogRqG7xY7aJuNrb%2Bu7Tah48P7R3kL%2B%2B8luJVXGbWWIYpLoPbdZJXaIodR%2Bh1rBmbaqteNKhW8cmGJTJWRY3Xjpo5jcB%2BmOahUTGWzqpTP4aBJ4PJRgN%2B9PkQjc2SMNmdztAGOqUB3bL4KjBhUHle0khINioCUNpwdFOua2ARIyoVECbcb3CNroD5H6RXvfroi6WiAjcC7IGBsJ8y6KJqApwimZYL2Z6%2FwxznTwa5Eea5TvVuaAGtPCHRj3Y%2B16hDtW5CMGXpMmSkkBKiLuH0v69fuI8UwR7XCQzWP59jgBdTex6sCK3JiAp%2ByufEmM8cdFsXvpacQrswkD5EOGtb%2BPaG1SlBGdm1MV5X&X-Amz-Signature=99f92dd586ac43ffd6ae639599a363620ca78243b221abe617810635e2145ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Q5KJ65%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9BMzhQa7zHA7tsdjDqPdA4pKY9w4k5XMrHdJUNla04AiEAoRL4NwBI7JgnQQ%2BtpKy4LRYVEQRs2KSOy4BzzKrXsEQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLpGmSuRiNS1heJAlSrcA7C9ZC1EOkyzQYs5WGCa0rXcr0t89QIN5kcWfnTC9R6yJ%2Bi72poviqkv856yyRc4GGqe0xEO2Xn%2FH4kT%2FRlXv1shM9Nx93D4HbX3LP%2B7y4wKYodd4RO36Sa4vl1zrMQvDPxPDURHKBhXzTX%2FSGox0%2B3LuvjsfvD0cePGexqYE1d9%2Fcg10yzUPA4q1YttZSV1XOTetqerdo%2F7S9dHPkpJ7L%2F25DloXIryXbWt830F%2B8S%2FagjYGy%2FUzhFOHaiHcGSsCKBSo0XZzkX4OSJPbT6GYJM67VoIKJV622D%2BrvL4Fqzoh2Dxmaf8sZx6iQb0Hc%2FuFtgA%2FwaodwwUoo2VofY96Z78y9dtJdQzxbR52v3%2FmQsuEKR1vUBPc5g3GFCTtaGmT%2Fhhf%2FNL8NYRSQx%2Bv4Zghj1XyJMluDivXjstGuhBQ0N2N7S7iAmKWNyk%2BhV3NP%2FdaDRP2nKbNko16XhYWxlfGR03HPbx4C2psMjEvdy2rpOCcmIOGhZ6P9RyS%2FWOZOcarbChr1WTTc1soqJx8YnMKjRbNo%2BgZ7uCkTJFTW30chdI6Msw0cdl1ng0vEQuBSdhjxk6EOSmy9C%2Fv0TN0ezct6OJf4rrKKtc9CuKTRpRx70XsbWzSMcp1D3otbgrMPmcztAGOqUBDSmpLYLVSpufXfQ2%2F9mPOG9TBt3RfUAjzx%2Bq1GqI33%2FVd6YnGgEjD7vO%2F7uoFSh1vWOnJvSArrXVFB7eti45P0sp85nUjtiTgF0dmsgej0D%2BhNYI3SC5xPIl4kstGrlfXsbV9CWST9JMzbVtD7ukJS%2BTRIJMwXZKOE6fF%2B83WifZfIpuvawX2Oc1xcVDLquW%2FCYoJr%2Fqn0BQfafUAesM5aNlWTvD&X-Amz-Signature=825cf9a2201f348daaf71928cfd335d0a2ce51817df260a8d4ad84a36edfb5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

