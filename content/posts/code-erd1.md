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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USY33IVV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGUMovFvWY6X63%2BHYEFpqeLPenLR9xnxzUWH6tdgKGjLAiEAk7hZGtLvpknMDRA6BumgsVfbf88jxo%2B2o0ARE9A3jcMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJ1PxTOnZiPiqDn0aSrcA4nRc729KmzQWgQ1xh0f7QJ35CR74MPdKgaFdDeY3HofKgelZiaGCbhyCpfMuimTn%2FwONnNt2ZFfzoSEdQZShvJysEB0aJY1x7flzhM3moISLQuXsYsQJUYoAABuxqNvJu3K7MQybk4xYx144IIEmW%2Fsm5Sx0tIy4TPverKdFF9DIrA4bS91D0ZmUU5ms7vkezINeqT3pD68m9pX2Nd%2B6vplxajfQ9RyS%2FhLMUvivgs%2B1Tj3xIASRDuHP9iIEuWHgFaASNKv%2BGQiu9B7fGQGsHzgOnyXypDnv%2BUX0uIGoH4QExr4kA18bnYgTx40nwwKVbizCqUmAnTIb%2BqPKkUwVZapHutNphMFxb004jJHRwidSaju2JuoZsdujpYL5203mWWi7%2BT2zoe6lWH0nrXpyIhkigzes82Jy%2FgqLGXlitQbRa9SBmRSiMm2snBuHyrNk4uFUSaTJK6g0ihWzO%2B3nmLDUYW%2FUTn%2B269jzgQk2hxBTTOZpyx4OXoCSxwc1pHpq%2FcymopQ0wjC23dC1OIPbLe8zo%2BSdx6iRd%2BBdjaCeDQSukLELqxGVg8HJX4gEvVR2o8kZgQoc4bg4F%2FiXicpNlK7UJK%2B%2BBI1znMjsE9dddh9B3eLsvRjFbvqykCTMLOKocsGOqUBGuHkgbPWho%2BraeNmlWpO2uePHtmbD733NzqlbPNTlH%2B%2F1%2F0OIwC0RnaWHgCJZa6D6m8CpSKP7bpqvXKibGQKU4UWGUxCO1CoDjyj%2FZ5h4Pwca6r%2Fz337fFflvIfMK9%2F6ina1HkTCNxsAsSJrUHagkg6B6uxbyXEpPRXWfd6vBWvEetDL8t38XrLLmJS9ZPg9R%2FGYX%2FmHJyQTNOq5FGFi0N4bQziD&X-Amz-Signature=c976aeac34380ac963823bc34cb7c1f69cc7663703e973c8b42cc22503910901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJFV6ZB%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH1lZfmqY%2B0BZRO3I8%2BWRT%2FHwrqGE0ZRqBMr%2FnGEvqNCAiBVY24SsLUOnuU1S6LEbCX9nTE1DWJ7o99qCrpZ7qB0kCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMpzg%2BH6PfPWf1lkgCKtwDkyfnLbvsTNXQr18mZo6emwwhhplQYcuZvIcFScO7%2BeXC%2B8G9n%2FsbECcHYcNS7RSFieW1KvioJ4XqMk8y9%2B%2BFP%2FHfaeZ5FRULYISSS7WbauPdX0F%2FC43AZFWC1%2BU6FIeBQjdhSQxwCg8YPwEYTraKXeJUPzlnK0yIu1EUQpyWr6x1LD4cawGQmTWlAgzzBLHs88AqdX9mrqVn5Gy4Ykvlph%2FFSJoKSvBIzUT%2B7lhhca9cjFG9%2F28SvIpIxCwZ9MAjrzBSQg8Q99mkxhktkkXPQyz1NVaxkzmIK%2Fc%2FIkwYXL80Auys%2BUCYkkEMkSFFcF83DO6gpLxI%2F4eVlSj%2BuD3wwlq1f5ShV%2FnabZp7PaBHu6YPhA3ZlKkhkGgkR3SaTfY5ICWJapbo2lg2%2FHgS%2BwznXudGYvS8z%2Fl9cU%2B37MZ5YanMOJruWxgzcsqp0bqyPUyLau%2FDkXG3p%2BbnExQwQg0JQNyz1Cgcy5rjMnCo5BbyxiLbDQvTRGcvFT1DuNGh24JvTR%2FrvUmehokfWuZBPPFjl17BmuqdDyyrVzoleLZvv4mYuGdV9A5q9N%2FCm8z%2B5NB0G1AVqc7kM2RD2iyaXY%2BJXaa128eSKzYxGpUaywbtlI5v8S%2F3wgNhB7sqt2Iwi4yhywY6pgEpRCrtzX3GUEuJfAl1KpD6Ej7cwvPZn3wPyYt6UhFnDGj3FN7CrVizChRIXQqRymjPubAG7R2ueeM1zoV9roQwj%2BpMRaKCUWd2QAbRl5yTVfCmBwrM%2BTd99L2FVbxa8zxKScPy0%2Fba9Q6bqHNKTPeWXr7hRvwk9bDnR8m2eT89%2F66j80ighvStbHTghJfjsnGNqtdCaJM31mucaLrgQ9PpmkUOyp4n&X-Amz-Signature=3b6a4aee002125611df4fb238434f5a273976a017456206e82054ea18b4ec9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJFV6ZB%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH1lZfmqY%2B0BZRO3I8%2BWRT%2FHwrqGE0ZRqBMr%2FnGEvqNCAiBVY24SsLUOnuU1S6LEbCX9nTE1DWJ7o99qCrpZ7qB0kCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMpzg%2BH6PfPWf1lkgCKtwDkyfnLbvsTNXQr18mZo6emwwhhplQYcuZvIcFScO7%2BeXC%2B8G9n%2FsbECcHYcNS7RSFieW1KvioJ4XqMk8y9%2B%2BFP%2FHfaeZ5FRULYISSS7WbauPdX0F%2FC43AZFWC1%2BU6FIeBQjdhSQxwCg8YPwEYTraKXeJUPzlnK0yIu1EUQpyWr6x1LD4cawGQmTWlAgzzBLHs88AqdX9mrqVn5Gy4Ykvlph%2FFSJoKSvBIzUT%2B7lhhca9cjFG9%2F28SvIpIxCwZ9MAjrzBSQg8Q99mkxhktkkXPQyz1NVaxkzmIK%2Fc%2FIkwYXL80Auys%2BUCYkkEMkSFFcF83DO6gpLxI%2F4eVlSj%2BuD3wwlq1f5ShV%2FnabZp7PaBHu6YPhA3ZlKkhkGgkR3SaTfY5ICWJapbo2lg2%2FHgS%2BwznXudGYvS8z%2Fl9cU%2B37MZ5YanMOJruWxgzcsqp0bqyPUyLau%2FDkXG3p%2BbnExQwQg0JQNyz1Cgcy5rjMnCo5BbyxiLbDQvTRGcvFT1DuNGh24JvTR%2FrvUmehokfWuZBPPFjl17BmuqdDyyrVzoleLZvv4mYuGdV9A5q9N%2FCm8z%2B5NB0G1AVqc7kM2RD2iyaXY%2BJXaa128eSKzYxGpUaywbtlI5v8S%2F3wgNhB7sqt2Iwi4yhywY6pgEpRCrtzX3GUEuJfAl1KpD6Ej7cwvPZn3wPyYt6UhFnDGj3FN7CrVizChRIXQqRymjPubAG7R2ueeM1zoV9roQwj%2BpMRaKCUWd2QAbRl5yTVfCmBwrM%2BTd99L2FVbxa8zxKScPy0%2Fba9Q6bqHNKTPeWXr7hRvwk9bDnR8m2eT89%2F66j80ighvStbHTghJfjsnGNqtdCaJM31mucaLrgQ9PpmkUOyp4n&X-Amz-Signature=1ed52c48a1cae54b0477ba5bd29387133ae18aab139ab8a9993d31aa8513c742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJFV6ZB%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH1lZfmqY%2B0BZRO3I8%2BWRT%2FHwrqGE0ZRqBMr%2FnGEvqNCAiBVY24SsLUOnuU1S6LEbCX9nTE1DWJ7o99qCrpZ7qB0kCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMpzg%2BH6PfPWf1lkgCKtwDkyfnLbvsTNXQr18mZo6emwwhhplQYcuZvIcFScO7%2BeXC%2B8G9n%2FsbECcHYcNS7RSFieW1KvioJ4XqMk8y9%2B%2BFP%2FHfaeZ5FRULYISSS7WbauPdX0F%2FC43AZFWC1%2BU6FIeBQjdhSQxwCg8YPwEYTraKXeJUPzlnK0yIu1EUQpyWr6x1LD4cawGQmTWlAgzzBLHs88AqdX9mrqVn5Gy4Ykvlph%2FFSJoKSvBIzUT%2B7lhhca9cjFG9%2F28SvIpIxCwZ9MAjrzBSQg8Q99mkxhktkkXPQyz1NVaxkzmIK%2Fc%2FIkwYXL80Auys%2BUCYkkEMkSFFcF83DO6gpLxI%2F4eVlSj%2BuD3wwlq1f5ShV%2FnabZp7PaBHu6YPhA3ZlKkhkGgkR3SaTfY5ICWJapbo2lg2%2FHgS%2BwznXudGYvS8z%2Fl9cU%2B37MZ5YanMOJruWxgzcsqp0bqyPUyLau%2FDkXG3p%2BbnExQwQg0JQNyz1Cgcy5rjMnCo5BbyxiLbDQvTRGcvFT1DuNGh24JvTR%2FrvUmehokfWuZBPPFjl17BmuqdDyyrVzoleLZvv4mYuGdV9A5q9N%2FCm8z%2B5NB0G1AVqc7kM2RD2iyaXY%2BJXaa128eSKzYxGpUaywbtlI5v8S%2F3wgNhB7sqt2Iwi4yhywY6pgEpRCrtzX3GUEuJfAl1KpD6Ej7cwvPZn3wPyYt6UhFnDGj3FN7CrVizChRIXQqRymjPubAG7R2ueeM1zoV9roQwj%2BpMRaKCUWd2QAbRl5yTVfCmBwrM%2BTd99L2FVbxa8zxKScPy0%2Fba9Q6bqHNKTPeWXr7hRvwk9bDnR8m2eT89%2F66j80ighvStbHTghJfjsnGNqtdCaJM31mucaLrgQ9PpmkUOyp4n&X-Amz-Signature=5fbcacb0f7e0aaa2012579c3065c823c05057cea2dfc690411e66b731335cb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJFV6ZB%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH1lZfmqY%2B0BZRO3I8%2BWRT%2FHwrqGE0ZRqBMr%2FnGEvqNCAiBVY24SsLUOnuU1S6LEbCX9nTE1DWJ7o99qCrpZ7qB0kCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMpzg%2BH6PfPWf1lkgCKtwDkyfnLbvsTNXQr18mZo6emwwhhplQYcuZvIcFScO7%2BeXC%2B8G9n%2FsbECcHYcNS7RSFieW1KvioJ4XqMk8y9%2B%2BFP%2FHfaeZ5FRULYISSS7WbauPdX0F%2FC43AZFWC1%2BU6FIeBQjdhSQxwCg8YPwEYTraKXeJUPzlnK0yIu1EUQpyWr6x1LD4cawGQmTWlAgzzBLHs88AqdX9mrqVn5Gy4Ykvlph%2FFSJoKSvBIzUT%2B7lhhca9cjFG9%2F28SvIpIxCwZ9MAjrzBSQg8Q99mkxhktkkXPQyz1NVaxkzmIK%2Fc%2FIkwYXL80Auys%2BUCYkkEMkSFFcF83DO6gpLxI%2F4eVlSj%2BuD3wwlq1f5ShV%2FnabZp7PaBHu6YPhA3ZlKkhkGgkR3SaTfY5ICWJapbo2lg2%2FHgS%2BwznXudGYvS8z%2Fl9cU%2B37MZ5YanMOJruWxgzcsqp0bqyPUyLau%2FDkXG3p%2BbnExQwQg0JQNyz1Cgcy5rjMnCo5BbyxiLbDQvTRGcvFT1DuNGh24JvTR%2FrvUmehokfWuZBPPFjl17BmuqdDyyrVzoleLZvv4mYuGdV9A5q9N%2FCm8z%2B5NB0G1AVqc7kM2RD2iyaXY%2BJXaa128eSKzYxGpUaywbtlI5v8S%2F3wgNhB7sqt2Iwi4yhywY6pgEpRCrtzX3GUEuJfAl1KpD6Ej7cwvPZn3wPyYt6UhFnDGj3FN7CrVizChRIXQqRymjPubAG7R2ueeM1zoV9roQwj%2BpMRaKCUWd2QAbRl5yTVfCmBwrM%2BTd99L2FVbxa8zxKScPy0%2Fba9Q6bqHNKTPeWXr7hRvwk9bDnR8m2eT89%2F66j80ighvStbHTghJfjsnGNqtdCaJM31mucaLrgQ9PpmkUOyp4n&X-Amz-Signature=efc488f629a4d89c7586aaad9afa1c7f757e769be072d4d817b5467403018338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJFV6ZB%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIH1lZfmqY%2B0BZRO3I8%2BWRT%2FHwrqGE0ZRqBMr%2FnGEvqNCAiBVY24SsLUOnuU1S6LEbCX9nTE1DWJ7o99qCrpZ7qB0kCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMpzg%2BH6PfPWf1lkgCKtwDkyfnLbvsTNXQr18mZo6emwwhhplQYcuZvIcFScO7%2BeXC%2B8G9n%2FsbECcHYcNS7RSFieW1KvioJ4XqMk8y9%2B%2BFP%2FHfaeZ5FRULYISSS7WbauPdX0F%2FC43AZFWC1%2BU6FIeBQjdhSQxwCg8YPwEYTraKXeJUPzlnK0yIu1EUQpyWr6x1LD4cawGQmTWlAgzzBLHs88AqdX9mrqVn5Gy4Ykvlph%2FFSJoKSvBIzUT%2B7lhhca9cjFG9%2F28SvIpIxCwZ9MAjrzBSQg8Q99mkxhktkkXPQyz1NVaxkzmIK%2Fc%2FIkwYXL80Auys%2BUCYkkEMkSFFcF83DO6gpLxI%2F4eVlSj%2BuD3wwlq1f5ShV%2FnabZp7PaBHu6YPhA3ZlKkhkGgkR3SaTfY5ICWJapbo2lg2%2FHgS%2BwznXudGYvS8z%2Fl9cU%2B37MZ5YanMOJruWxgzcsqp0bqyPUyLau%2FDkXG3p%2BbnExQwQg0JQNyz1Cgcy5rjMnCo5BbyxiLbDQvTRGcvFT1DuNGh24JvTR%2FrvUmehokfWuZBPPFjl17BmuqdDyyrVzoleLZvv4mYuGdV9A5q9N%2FCm8z%2B5NB0G1AVqc7kM2RD2iyaXY%2BJXaa128eSKzYxGpUaywbtlI5v8S%2F3wgNhB7sqt2Iwi4yhywY6pgEpRCrtzX3GUEuJfAl1KpD6Ej7cwvPZn3wPyYt6UhFnDGj3FN7CrVizChRIXQqRymjPubAG7R2ueeM1zoV9roQwj%2BpMRaKCUWd2QAbRl5yTVfCmBwrM%2BTd99L2FVbxa8zxKScPy0%2Fba9Q6bqHNKTPeWXr7hRvwk9bDnR8m2eT89%2F66j80ighvStbHTghJfjsnGNqtdCaJM31mucaLrgQ9PpmkUOyp4n&X-Amz-Signature=6ad0710405b43e3d14306c6c5e735e8de7c0354246fcd152dc93fa527808ac4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USY33IVV%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGUMovFvWY6X63%2BHYEFpqeLPenLR9xnxzUWH6tdgKGjLAiEAk7hZGtLvpknMDRA6BumgsVfbf88jxo%2B2o0ARE9A3jcMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJ1PxTOnZiPiqDn0aSrcA4nRc729KmzQWgQ1xh0f7QJ35CR74MPdKgaFdDeY3HofKgelZiaGCbhyCpfMuimTn%2FwONnNt2ZFfzoSEdQZShvJysEB0aJY1x7flzhM3moISLQuXsYsQJUYoAABuxqNvJu3K7MQybk4xYx144IIEmW%2Fsm5Sx0tIy4TPverKdFF9DIrA4bS91D0ZmUU5ms7vkezINeqT3pD68m9pX2Nd%2B6vplxajfQ9RyS%2FhLMUvivgs%2B1Tj3xIASRDuHP9iIEuWHgFaASNKv%2BGQiu9B7fGQGsHzgOnyXypDnv%2BUX0uIGoH4QExr4kA18bnYgTx40nwwKVbizCqUmAnTIb%2BqPKkUwVZapHutNphMFxb004jJHRwidSaju2JuoZsdujpYL5203mWWi7%2BT2zoe6lWH0nrXpyIhkigzes82Jy%2FgqLGXlitQbRa9SBmRSiMm2snBuHyrNk4uFUSaTJK6g0ihWzO%2B3nmLDUYW%2FUTn%2B269jzgQk2hxBTTOZpyx4OXoCSxwc1pHpq%2FcymopQ0wjC23dC1OIPbLe8zo%2BSdx6iRd%2BBdjaCeDQSukLELqxGVg8HJX4gEvVR2o8kZgQoc4bg4F%2FiXicpNlK7UJK%2B%2BBI1znMjsE9dddh9B3eLsvRjFbvqykCTMLOKocsGOqUBGuHkgbPWho%2BraeNmlWpO2uePHtmbD733NzqlbPNTlH%2B%2F1%2F0OIwC0RnaWHgCJZa6D6m8CpSKP7bpqvXKibGQKU4UWGUxCO1CoDjyj%2FZ5h4Pwca6r%2Fz337fFflvIfMK9%2F6ina1HkTCNxsAsSJrUHagkg6B6uxbyXEpPRXWfd6vBWvEetDL8t38XrLLmJS9ZPg9R%2FGYX%2FmHJyQTNOq5FGFi0N4bQziD&X-Amz-Signature=0bf267d0982c88298aa071ecbb5854c31c0057af7ee96b37649e3b2d279f9420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

