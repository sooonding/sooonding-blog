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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGSG2OT%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDwMMHZtlPIhXLefIz7ir4IZ1%2F3OxxGABQlkbVPxHKVDAiAVrHRXI3gf%2BD7IZ3pUzjwolFIoug8%2FwDQtLGZCXoK%2FVyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOiLQKSLoi6JK8CyYKtwD1CD3t3j7ESMeFJMiugH8DzSqwsGKNwcfPq4sF7027ILOZnU%2B5arxuoLRJ9VywKhP2Tv0%2B6Lhl5UtKQs8jPhV0PlaUseKZ0Hi3VYFn3yRsWJsACtplqCTHOomIisHMLZ0oXM%2BAeuCtWisvnFQ1QpJRh6o3X73jFEpPu0PfHcXLxr6Yw8jGJLCz1uFaRSUb1P1p3LQdtCPkuMH6QtkIsv%2FS9HXez0w%2ByOfJhVJMfz3l%2BLRs61%2FEgw%2F56w2LU6sQqZRCwWYhbZH3OIpwcSlwoYfSC3ksP7EfY1kuM1retCU4aHOJrGrHDwR3vDCjyrxVwWlQjOd4NRoaczn96kkDJUTuTF%2Fj4qhjD7rD5oduHTzk4aEQe4Bk5o7O5FRZOcQXLnNxSFyUXuVT6V28F14lsM6CXEP5i476w0TXjuf5yJybNZVixgEPjV6eKXMY6byKxgGZ8v6W%2BxIqqbSIaEPN9ldKOkl8hULQGukN4pJZ6xO7s2DGwwy5azNY116POFGqjLcYY97dAaVja9zFyZsqPiVRPXOD26jKv7emNKMSNrpL2CdLcPGvaCe3LYsU30sYKkxPhpgiG1ZDatwQ5BVVjA0bxsoDxu6g8iALtgkDAo6h0axZTMaSU%2B25MgO2s4w5aCX0gY6pgEdXCeiTCKRtIWXBYawVjuvJw2YUdYU7TGdLyI%2FHK5S8t650RimxL4zi%2FwKPL9DJg4PiKUOm0m3EfT9gJy0KYwXG%2BsqIgrBvlB5kYkktoHp5aDVWpL94RJ3O%2F5uPq%2BrfvM8IH5cUl%2Bq%2BB%2F2SqAc7jYEGxTq4a4cQeEudjHztgHfijx5cQtI1LWbk04i0VmAv4d2idStyUW%2BqVmlPfe0TRIFL0E4wbro&X-Amz-Signature=7866dcaaa7b806f35d0529764bd91fc483a67bb8e89fb70d7a08052a128d1563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKUDH3Z%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC%2BlF6ZqrG4HPe7MqT2TU8kJDPqcJpXL2siE9je8B731QIgTeMOsYvCLdI8uC0DTsdqG46VE4Qrp0k1Y7BL8XJKj8MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqO8wfIRS7cLklYMircAxPIZX0ivxCOjdJR04bS9I05JOdV71ouy%2BTcQ2sQl1E4S2Xh0pEowLwbZaqn2iBcJabtui4KsQhH2HPWWv%2FuzlS%2FmzfZgKnrvusl%2FGBkeFaVajUE3AV73lGr0oOWSvKEI8fR6FD6EiB4HRPmwS29ntuzTX4zn3RnXPcXSH5kA9IYFPIVHKV860WeSmoOfjedH8FyNjgo9RlMLEPQ5w9D7uel6%2FXwL0vTxcWbp4rZe5PlL2dgnq4VZ5larTMZB%2FkHuZPkgZdnVBUJzweZd0%2B95Fbf2vCx8enjw2vyuS3A9t0Z2%2F2KzwLeGxSVo%2BAXUzIE6ZcYaJeUdJPyYaeKFZErEwIeq3VS8onbmFtp9%2Bf0Zu%2F1xO0brTUlCpEm1va03dw8nFJI2qAq2AvcsyCuLYpWeUNBIYXuyxP6MLnzowWPOORC7mjOjcw8HxBKDgrZWVN2VIAkLHbOxwkSWMvXTrnONwtr%2BkKocONUVT%2F58iNFlrJCG8hhT3T8BtB9jHUmfReu%2B7dZVO4%2FPjLCZTgGh5S3a0BUoC8mAkOr8baO%2BD4numH%2FBro2UEijkBOvKk6XUsmud8McTxon5gtDY2Y7gETEzvlox2%2FJTk4CCjdlATdQXgdWsYg5AlJao2Y7E6ClMJmhl9IGOqUBp%2BCUTetW6lEZ9a5nmO8aYRAzWGO7LnMZPlQbtUT9DES8ie9aMYR5Lafl5uT7dCb%2BZo3AWmO5g9UJc0S9yC0K2DxRQgduSsJCIrqeCB%2FVQv5YyGYPGGp%2BEMWk0%2FmOMvXwBS0EGJ1uzbognyvlqs6pVQXb2TMMAk3RN0z0ymGBahWliK0yMbPGNkqxSlHSbmByjS9KyhyfqAfwK8ECmDnrIeTcjbIX&X-Amz-Signature=f7ce86bf1d9d82045667f7b73ba3c9651ed8c84319e585dfb90b7b913ca0d2a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKUDH3Z%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC%2BlF6ZqrG4HPe7MqT2TU8kJDPqcJpXL2siE9je8B731QIgTeMOsYvCLdI8uC0DTsdqG46VE4Qrp0k1Y7BL8XJKj8MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqO8wfIRS7cLklYMircAxPIZX0ivxCOjdJR04bS9I05JOdV71ouy%2BTcQ2sQl1E4S2Xh0pEowLwbZaqn2iBcJabtui4KsQhH2HPWWv%2FuzlS%2FmzfZgKnrvusl%2FGBkeFaVajUE3AV73lGr0oOWSvKEI8fR6FD6EiB4HRPmwS29ntuzTX4zn3RnXPcXSH5kA9IYFPIVHKV860WeSmoOfjedH8FyNjgo9RlMLEPQ5w9D7uel6%2FXwL0vTxcWbp4rZe5PlL2dgnq4VZ5larTMZB%2FkHuZPkgZdnVBUJzweZd0%2B95Fbf2vCx8enjw2vyuS3A9t0Z2%2F2KzwLeGxSVo%2BAXUzIE6ZcYaJeUdJPyYaeKFZErEwIeq3VS8onbmFtp9%2Bf0Zu%2F1xO0brTUlCpEm1va03dw8nFJI2qAq2AvcsyCuLYpWeUNBIYXuyxP6MLnzowWPOORC7mjOjcw8HxBKDgrZWVN2VIAkLHbOxwkSWMvXTrnONwtr%2BkKocONUVT%2F58iNFlrJCG8hhT3T8BtB9jHUmfReu%2B7dZVO4%2FPjLCZTgGh5S3a0BUoC8mAkOr8baO%2BD4numH%2FBro2UEijkBOvKk6XUsmud8McTxon5gtDY2Y7gETEzvlox2%2FJTk4CCjdlATdQXgdWsYg5AlJao2Y7E6ClMJmhl9IGOqUBp%2BCUTetW6lEZ9a5nmO8aYRAzWGO7LnMZPlQbtUT9DES8ie9aMYR5Lafl5uT7dCb%2BZo3AWmO5g9UJc0S9yC0K2DxRQgduSsJCIrqeCB%2FVQv5YyGYPGGp%2BEMWk0%2FmOMvXwBS0EGJ1uzbognyvlqs6pVQXb2TMMAk3RN0z0ymGBahWliK0yMbPGNkqxSlHSbmByjS9KyhyfqAfwK8ECmDnrIeTcjbIX&X-Amz-Signature=f66f1b18bf76d6a32dea5c2c98e8addf086f25a5ebb3fa4d518347ac78e7167f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKUDH3Z%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC%2BlF6ZqrG4HPe7MqT2TU8kJDPqcJpXL2siE9je8B731QIgTeMOsYvCLdI8uC0DTsdqG46VE4Qrp0k1Y7BL8XJKj8MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqO8wfIRS7cLklYMircAxPIZX0ivxCOjdJR04bS9I05JOdV71ouy%2BTcQ2sQl1E4S2Xh0pEowLwbZaqn2iBcJabtui4KsQhH2HPWWv%2FuzlS%2FmzfZgKnrvusl%2FGBkeFaVajUE3AV73lGr0oOWSvKEI8fR6FD6EiB4HRPmwS29ntuzTX4zn3RnXPcXSH5kA9IYFPIVHKV860WeSmoOfjedH8FyNjgo9RlMLEPQ5w9D7uel6%2FXwL0vTxcWbp4rZe5PlL2dgnq4VZ5larTMZB%2FkHuZPkgZdnVBUJzweZd0%2B95Fbf2vCx8enjw2vyuS3A9t0Z2%2F2KzwLeGxSVo%2BAXUzIE6ZcYaJeUdJPyYaeKFZErEwIeq3VS8onbmFtp9%2Bf0Zu%2F1xO0brTUlCpEm1va03dw8nFJI2qAq2AvcsyCuLYpWeUNBIYXuyxP6MLnzowWPOORC7mjOjcw8HxBKDgrZWVN2VIAkLHbOxwkSWMvXTrnONwtr%2BkKocONUVT%2F58iNFlrJCG8hhT3T8BtB9jHUmfReu%2B7dZVO4%2FPjLCZTgGh5S3a0BUoC8mAkOr8baO%2BD4numH%2FBro2UEijkBOvKk6XUsmud8McTxon5gtDY2Y7gETEzvlox2%2FJTk4CCjdlATdQXgdWsYg5AlJao2Y7E6ClMJmhl9IGOqUBp%2BCUTetW6lEZ9a5nmO8aYRAzWGO7LnMZPlQbtUT9DES8ie9aMYR5Lafl5uT7dCb%2BZo3AWmO5g9UJc0S9yC0K2DxRQgduSsJCIrqeCB%2FVQv5YyGYPGGp%2BEMWk0%2FmOMvXwBS0EGJ1uzbognyvlqs6pVQXb2TMMAk3RN0z0ymGBahWliK0yMbPGNkqxSlHSbmByjS9KyhyfqAfwK8ECmDnrIeTcjbIX&X-Amz-Signature=2985d7771d15dd6f8b84c6a8b64ec83d1e499d59265021c4c4d64e1e16ab5d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKUDH3Z%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC%2BlF6ZqrG4HPe7MqT2TU8kJDPqcJpXL2siE9je8B731QIgTeMOsYvCLdI8uC0DTsdqG46VE4Qrp0k1Y7BL8XJKj8MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqO8wfIRS7cLklYMircAxPIZX0ivxCOjdJR04bS9I05JOdV71ouy%2BTcQ2sQl1E4S2Xh0pEowLwbZaqn2iBcJabtui4KsQhH2HPWWv%2FuzlS%2FmzfZgKnrvusl%2FGBkeFaVajUE3AV73lGr0oOWSvKEI8fR6FD6EiB4HRPmwS29ntuzTX4zn3RnXPcXSH5kA9IYFPIVHKV860WeSmoOfjedH8FyNjgo9RlMLEPQ5w9D7uel6%2FXwL0vTxcWbp4rZe5PlL2dgnq4VZ5larTMZB%2FkHuZPkgZdnVBUJzweZd0%2B95Fbf2vCx8enjw2vyuS3A9t0Z2%2F2KzwLeGxSVo%2BAXUzIE6ZcYaJeUdJPyYaeKFZErEwIeq3VS8onbmFtp9%2Bf0Zu%2F1xO0brTUlCpEm1va03dw8nFJI2qAq2AvcsyCuLYpWeUNBIYXuyxP6MLnzowWPOORC7mjOjcw8HxBKDgrZWVN2VIAkLHbOxwkSWMvXTrnONwtr%2BkKocONUVT%2F58iNFlrJCG8hhT3T8BtB9jHUmfReu%2B7dZVO4%2FPjLCZTgGh5S3a0BUoC8mAkOr8baO%2BD4numH%2FBro2UEijkBOvKk6XUsmud8McTxon5gtDY2Y7gETEzvlox2%2FJTk4CCjdlATdQXgdWsYg5AlJao2Y7E6ClMJmhl9IGOqUBp%2BCUTetW6lEZ9a5nmO8aYRAzWGO7LnMZPlQbtUT9DES8ie9aMYR5Lafl5uT7dCb%2BZo3AWmO5g9UJc0S9yC0K2DxRQgduSsJCIrqeCB%2FVQv5YyGYPGGp%2BEMWk0%2FmOMvXwBS0EGJ1uzbognyvlqs6pVQXb2TMMAk3RN0z0ymGBahWliK0yMbPGNkqxSlHSbmByjS9KyhyfqAfwK8ECmDnrIeTcjbIX&X-Amz-Signature=90af14e1f016fbb7e6a91c9f9749d57bee0dfdfdf8d29aacff511f03f37591e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QKUDH3Z%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC%2BlF6ZqrG4HPe7MqT2TU8kJDPqcJpXL2siE9je8B731QIgTeMOsYvCLdI8uC0DTsdqG46VE4Qrp0k1Y7BL8XJKj8MqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqO8wfIRS7cLklYMircAxPIZX0ivxCOjdJR04bS9I05JOdV71ouy%2BTcQ2sQl1E4S2Xh0pEowLwbZaqn2iBcJabtui4KsQhH2HPWWv%2FuzlS%2FmzfZgKnrvusl%2FGBkeFaVajUE3AV73lGr0oOWSvKEI8fR6FD6EiB4HRPmwS29ntuzTX4zn3RnXPcXSH5kA9IYFPIVHKV860WeSmoOfjedH8FyNjgo9RlMLEPQ5w9D7uel6%2FXwL0vTxcWbp4rZe5PlL2dgnq4VZ5larTMZB%2FkHuZPkgZdnVBUJzweZd0%2B95Fbf2vCx8enjw2vyuS3A9t0Z2%2F2KzwLeGxSVo%2BAXUzIE6ZcYaJeUdJPyYaeKFZErEwIeq3VS8onbmFtp9%2Bf0Zu%2F1xO0brTUlCpEm1va03dw8nFJI2qAq2AvcsyCuLYpWeUNBIYXuyxP6MLnzowWPOORC7mjOjcw8HxBKDgrZWVN2VIAkLHbOxwkSWMvXTrnONwtr%2BkKocONUVT%2F58iNFlrJCG8hhT3T8BtB9jHUmfReu%2B7dZVO4%2FPjLCZTgGh5S3a0BUoC8mAkOr8baO%2BD4numH%2FBro2UEijkBOvKk6XUsmud8McTxon5gtDY2Y7gETEzvlox2%2FJTk4CCjdlATdQXgdWsYg5AlJao2Y7E6ClMJmhl9IGOqUBp%2BCUTetW6lEZ9a5nmO8aYRAzWGO7LnMZPlQbtUT9DES8ie9aMYR5Lafl5uT7dCb%2BZo3AWmO5g9UJc0S9yC0K2DxRQgduSsJCIrqeCB%2FVQv5YyGYPGGp%2BEMWk0%2FmOMvXwBS0EGJ1uzbognyvlqs6pVQXb2TMMAk3RN0z0ymGBahWliK0yMbPGNkqxSlHSbmByjS9KyhyfqAfwK8ECmDnrIeTcjbIX&X-Amz-Signature=b78677d5495e632325065d4960954e70bf6bf3503a5cdc09783c0b780f21d017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGSG2OT%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDwMMHZtlPIhXLefIz7ir4IZ1%2F3OxxGABQlkbVPxHKVDAiAVrHRXI3gf%2BD7IZ3pUzjwolFIoug8%2FwDQtLGZCXoK%2FVyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOiLQKSLoi6JK8CyYKtwD1CD3t3j7ESMeFJMiugH8DzSqwsGKNwcfPq4sF7027ILOZnU%2B5arxuoLRJ9VywKhP2Tv0%2B6Lhl5UtKQs8jPhV0PlaUseKZ0Hi3VYFn3yRsWJsACtplqCTHOomIisHMLZ0oXM%2BAeuCtWisvnFQ1QpJRh6o3X73jFEpPu0PfHcXLxr6Yw8jGJLCz1uFaRSUb1P1p3LQdtCPkuMH6QtkIsv%2FS9HXez0w%2ByOfJhVJMfz3l%2BLRs61%2FEgw%2F56w2LU6sQqZRCwWYhbZH3OIpwcSlwoYfSC3ksP7EfY1kuM1retCU4aHOJrGrHDwR3vDCjyrxVwWlQjOd4NRoaczn96kkDJUTuTF%2Fj4qhjD7rD5oduHTzk4aEQe4Bk5o7O5FRZOcQXLnNxSFyUXuVT6V28F14lsM6CXEP5i476w0TXjuf5yJybNZVixgEPjV6eKXMY6byKxgGZ8v6W%2BxIqqbSIaEPN9ldKOkl8hULQGukN4pJZ6xO7s2DGwwy5azNY116POFGqjLcYY97dAaVja9zFyZsqPiVRPXOD26jKv7emNKMSNrpL2CdLcPGvaCe3LYsU30sYKkxPhpgiG1ZDatwQ5BVVjA0bxsoDxu6g8iALtgkDAo6h0axZTMaSU%2B25MgO2s4w5aCX0gY6pgEdXCeiTCKRtIWXBYawVjuvJw2YUdYU7TGdLyI%2FHK5S8t650RimxL4zi%2FwKPL9DJg4PiKUOm0m3EfT9gJy0KYwXG%2BsqIgrBvlB5kYkktoHp5aDVWpL94RJ3O%2F5uPq%2BrfvM8IH5cUl%2Bq%2BB%2F2SqAc7jYEGxTq4a4cQeEudjHztgHfijx5cQtI1LWbk04i0VmAv4d2idStyUW%2BqVmlPfe0TRIFL0E4wbro&X-Amz-Signature=00f9461f66114b0c83e98aa8418424b16bb848f4af9419108defff80953b6651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

