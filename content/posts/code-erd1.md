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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICLEHBS%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC8zleJtovTDuFcVz1KcfxPFFdDnSXRpyZesSTfhAhPsAIgCRMyhWQrBXcXgy%2Bw1rwZct%2FQuUdyVGZ%2BWptop%2FwfBRUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk%2B95hiuFd1%2Bk7ARircA1qixvBPglIOx0ZUCFSI2rsYDF7w54oqGjlbL15HTsgzgIqcUOS7SilKZcj6hJ2kUUxp4npPsOyLXCJC46yi99ZpFLB8ixRZwaNHcWgsL5iIANmbw8XHTLMlrgteGeBgAj7jzt2ptyAuN%2FyPiHnhhGTLTw0Ga%2F%2FpQh9SQdZ4siNPMS20QsXcVTh4tsmcMHd3blUCaeWOGkq5TwAaB1ruRLZjV5CGwjcSlRbByw95G1npGxAUCAaGJYLdyAmaO%2FHvT1BzEZ3WSTo7pdellQMl34OERg9%2BuLelUVBKLxZ8RlMLK59fg9ZOs1HykmZ9X0eI3Iwh2DKRwXTWlRbn%2FqQFjw2rEshpzTStgPLLlFnitRM8uP%2Brm5cMAIhRuj3HZBssvtfBBOO6pRlSteU0AGcajggvDoOpkpXery0kdweEQGz1jtHZmCtB2a3tt%2BY6AGsxXDRYJsZX%2FYKi3AdSRJEwazND4bhTSOZ1S5CVmiaIhlcuZ%2BsO8n5o%2FYHwyLwqe2s0GYgBK4sjgL7KSnWfNdTCyxoQYnS31IovfIMnMc119K3lD4slbW8xdfrC7LsL98MQI3hoLwjzrtPloMVq3087t%2Bp327YDM4JWR8H9t5ffPuEvqaGRg2ygguIHkm%2BpMPvdhdMGOqUB%2BXMqWHqtgvWDeld2VKAFWBuMSoc5pVFhTqMMTZ4GoSxE8%2Fc8cqkdC26CLFIGgPPhwK7dUHXVi83%2F5DmAVV%2FCVkfVEbem9zGsClL50ol3dkKTJkqt%2FM2qSubAZ9jjBO%2BtFEo2bWIl6D%2F%2FnzjG9JwXl7EYQ6aMgx2SJ9A2QdNSg5Sbne%2B4Zrc4uA6i9f5fSji6F3wba64TBNZAU5Cd0S35%2BpZ%2FojXS&X-Amz-Signature=5fbf368cccb195847249f047f2ffb5ddd9a70ffd03eacb72e436ee15f126dc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBLGPTP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDHJRBQJe%2F%2F7cElbnXIu9RBIaWIt7MyZwzl4TPlJ96QzAIhAOENa7dhyv0c3RiX5yRs%2FzAJuhY%2B6P1KJge8SE8FlE2EKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqg0Oljl6TqV5R0sq3AMKotvofrfgtjxOL40Rzy0UNdfJiNscBpi3ubXqNSQgFZ17PXuWCmV2dplE%2FcKS4ORzanX4Ken%2BuPtJymJzeYjMyAGFuNHeIsZf9ArCp%2BvPPV1Dui1almcwj6qrNdnGBcls6AR0MEuT46lQoeqawfzKFSDjYva6eSakdoejDqeazWXyD39RT91UgfuM%2F7hhL%2BmeHtjhQbzD%2FXQcyhbwjuP0s1jcdsJYt0jymYhhLl1%2FhDgL5QA0tB98LhXJhyVz%2Bw5ESFRVrtPAFhIojo0lZdM5p1%2FGKlrwQ00g%2BlKzwS7HIvv9DHccPcZ8EdbZdN%2BJBWN2BW1R4exkLgZ4X0kovDE19TjTD%2B%2FwyQSzGNrKjxwvHjQx5p3KH7Y8OqJT7dRGC5E7%2Btme2UdCk0N0wuyyUcK8J3MpQpvBfVgMA6yQVWCnC9R2qb%2Byr5mSJmQJKrdV889qaUsGwb1huUZOjwjm0N4BpDYx9K%2FVkDNmNm76HEX7RyQdSP8doIB%2BdgOEP97jcGC%2F%2BgV3bUv%2B9DJw5gns%2FMvQQDODBUSpfa6uuaLYdCn74uq8QbcFUaZ82oCjBJjsMKz56it4rNrwesJZm4aFcyHInH4Y2yK0IXsYqO0oeS2233q8QDekdKh9OyOIOjDG3IXTBjqkATn0N9UECBS3mYla%2FBHfw%2Blq3thZ2zpU3L7KPa6jmiYx4HsOwiKGjstJB1h1gMK73kBKMQdD7YAA%2Flk2w8h%2FPmuXzQuHg1IdO377qSJJ6XBbIFzH7BJv9UFO%2F2U0R8AaoQkcHY4oOyshofe9gLrc6wqAqSl3OSRJiWvwogJpEGOlPnvfhSFk%2BeDvnl2%2FFR1krDWCCK2lerBPUgx8%2BMdTd4YJwH%2Fo&X-Amz-Signature=cfc73e1c9f68765a39ad6feb783a0ce319bbd520b685d8e25075addb83f97b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBLGPTP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDHJRBQJe%2F%2F7cElbnXIu9RBIaWIt7MyZwzl4TPlJ96QzAIhAOENa7dhyv0c3RiX5yRs%2FzAJuhY%2B6P1KJge8SE8FlE2EKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqg0Oljl6TqV5R0sq3AMKotvofrfgtjxOL40Rzy0UNdfJiNscBpi3ubXqNSQgFZ17PXuWCmV2dplE%2FcKS4ORzanX4Ken%2BuPtJymJzeYjMyAGFuNHeIsZf9ArCp%2BvPPV1Dui1almcwj6qrNdnGBcls6AR0MEuT46lQoeqawfzKFSDjYva6eSakdoejDqeazWXyD39RT91UgfuM%2F7hhL%2BmeHtjhQbzD%2FXQcyhbwjuP0s1jcdsJYt0jymYhhLl1%2FhDgL5QA0tB98LhXJhyVz%2Bw5ESFRVrtPAFhIojo0lZdM5p1%2FGKlrwQ00g%2BlKzwS7HIvv9DHccPcZ8EdbZdN%2BJBWN2BW1R4exkLgZ4X0kovDE19TjTD%2B%2FwyQSzGNrKjxwvHjQx5p3KH7Y8OqJT7dRGC5E7%2Btme2UdCk0N0wuyyUcK8J3MpQpvBfVgMA6yQVWCnC9R2qb%2Byr5mSJmQJKrdV889qaUsGwb1huUZOjwjm0N4BpDYx9K%2FVkDNmNm76HEX7RyQdSP8doIB%2BdgOEP97jcGC%2F%2BgV3bUv%2B9DJw5gns%2FMvQQDODBUSpfa6uuaLYdCn74uq8QbcFUaZ82oCjBJjsMKz56it4rNrwesJZm4aFcyHInH4Y2yK0IXsYqO0oeS2233q8QDekdKh9OyOIOjDG3IXTBjqkATn0N9UECBS3mYla%2FBHfw%2Blq3thZ2zpU3L7KPa6jmiYx4HsOwiKGjstJB1h1gMK73kBKMQdD7YAA%2Flk2w8h%2FPmuXzQuHg1IdO377qSJJ6XBbIFzH7BJv9UFO%2F2U0R8AaoQkcHY4oOyshofe9gLrc6wqAqSl3OSRJiWvwogJpEGOlPnvfhSFk%2BeDvnl2%2FFR1krDWCCK2lerBPUgx8%2BMdTd4YJwH%2Fo&X-Amz-Signature=d3d26c76a778b0b83066d8be6a822e9a05bdb367868e12c5edf369141e2500d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBLGPTP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDHJRBQJe%2F%2F7cElbnXIu9RBIaWIt7MyZwzl4TPlJ96QzAIhAOENa7dhyv0c3RiX5yRs%2FzAJuhY%2B6P1KJge8SE8FlE2EKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqg0Oljl6TqV5R0sq3AMKotvofrfgtjxOL40Rzy0UNdfJiNscBpi3ubXqNSQgFZ17PXuWCmV2dplE%2FcKS4ORzanX4Ken%2BuPtJymJzeYjMyAGFuNHeIsZf9ArCp%2BvPPV1Dui1almcwj6qrNdnGBcls6AR0MEuT46lQoeqawfzKFSDjYva6eSakdoejDqeazWXyD39RT91UgfuM%2F7hhL%2BmeHtjhQbzD%2FXQcyhbwjuP0s1jcdsJYt0jymYhhLl1%2FhDgL5QA0tB98LhXJhyVz%2Bw5ESFRVrtPAFhIojo0lZdM5p1%2FGKlrwQ00g%2BlKzwS7HIvv9DHccPcZ8EdbZdN%2BJBWN2BW1R4exkLgZ4X0kovDE19TjTD%2B%2FwyQSzGNrKjxwvHjQx5p3KH7Y8OqJT7dRGC5E7%2Btme2UdCk0N0wuyyUcK8J3MpQpvBfVgMA6yQVWCnC9R2qb%2Byr5mSJmQJKrdV889qaUsGwb1huUZOjwjm0N4BpDYx9K%2FVkDNmNm76HEX7RyQdSP8doIB%2BdgOEP97jcGC%2F%2BgV3bUv%2B9DJw5gns%2FMvQQDODBUSpfa6uuaLYdCn74uq8QbcFUaZ82oCjBJjsMKz56it4rNrwesJZm4aFcyHInH4Y2yK0IXsYqO0oeS2233q8QDekdKh9OyOIOjDG3IXTBjqkATn0N9UECBS3mYla%2FBHfw%2Blq3thZ2zpU3L7KPa6jmiYx4HsOwiKGjstJB1h1gMK73kBKMQdD7YAA%2Flk2w8h%2FPmuXzQuHg1IdO377qSJJ6XBbIFzH7BJv9UFO%2F2U0R8AaoQkcHY4oOyshofe9gLrc6wqAqSl3OSRJiWvwogJpEGOlPnvfhSFk%2BeDvnl2%2FFR1krDWCCK2lerBPUgx8%2BMdTd4YJwH%2Fo&X-Amz-Signature=c25f71c11cda1e5f17e4ac057abc99857f1094a4501e064f66306074c82202c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBLGPTP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDHJRBQJe%2F%2F7cElbnXIu9RBIaWIt7MyZwzl4TPlJ96QzAIhAOENa7dhyv0c3RiX5yRs%2FzAJuhY%2B6P1KJge8SE8FlE2EKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqg0Oljl6TqV5R0sq3AMKotvofrfgtjxOL40Rzy0UNdfJiNscBpi3ubXqNSQgFZ17PXuWCmV2dplE%2FcKS4ORzanX4Ken%2BuPtJymJzeYjMyAGFuNHeIsZf9ArCp%2BvPPV1Dui1almcwj6qrNdnGBcls6AR0MEuT46lQoeqawfzKFSDjYva6eSakdoejDqeazWXyD39RT91UgfuM%2F7hhL%2BmeHtjhQbzD%2FXQcyhbwjuP0s1jcdsJYt0jymYhhLl1%2FhDgL5QA0tB98LhXJhyVz%2Bw5ESFRVrtPAFhIojo0lZdM5p1%2FGKlrwQ00g%2BlKzwS7HIvv9DHccPcZ8EdbZdN%2BJBWN2BW1R4exkLgZ4X0kovDE19TjTD%2B%2FwyQSzGNrKjxwvHjQx5p3KH7Y8OqJT7dRGC5E7%2Btme2UdCk0N0wuyyUcK8J3MpQpvBfVgMA6yQVWCnC9R2qb%2Byr5mSJmQJKrdV889qaUsGwb1huUZOjwjm0N4BpDYx9K%2FVkDNmNm76HEX7RyQdSP8doIB%2BdgOEP97jcGC%2F%2BgV3bUv%2B9DJw5gns%2FMvQQDODBUSpfa6uuaLYdCn74uq8QbcFUaZ82oCjBJjsMKz56it4rNrwesJZm4aFcyHInH4Y2yK0IXsYqO0oeS2233q8QDekdKh9OyOIOjDG3IXTBjqkATn0N9UECBS3mYla%2FBHfw%2Blq3thZ2zpU3L7KPa6jmiYx4HsOwiKGjstJB1h1gMK73kBKMQdD7YAA%2Flk2w8h%2FPmuXzQuHg1IdO377qSJJ6XBbIFzH7BJv9UFO%2F2U0R8AaoQkcHY4oOyshofe9gLrc6wqAqSl3OSRJiWvwogJpEGOlPnvfhSFk%2BeDvnl2%2FFR1krDWCCK2lerBPUgx8%2BMdTd4YJwH%2Fo&X-Amz-Signature=b5f2638f6619c6cdab1e81c3f6ca3df7c4ed05448650a280abe40faeca9359b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBLGPTP%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDHJRBQJe%2F%2F7cElbnXIu9RBIaWIt7MyZwzl4TPlJ96QzAIhAOENa7dhyv0c3RiX5yRs%2FzAJuhY%2B6P1KJge8SE8FlE2EKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqg0Oljl6TqV5R0sq3AMKotvofrfgtjxOL40Rzy0UNdfJiNscBpi3ubXqNSQgFZ17PXuWCmV2dplE%2FcKS4ORzanX4Ken%2BuPtJymJzeYjMyAGFuNHeIsZf9ArCp%2BvPPV1Dui1almcwj6qrNdnGBcls6AR0MEuT46lQoeqawfzKFSDjYva6eSakdoejDqeazWXyD39RT91UgfuM%2F7hhL%2BmeHtjhQbzD%2FXQcyhbwjuP0s1jcdsJYt0jymYhhLl1%2FhDgL5QA0tB98LhXJhyVz%2Bw5ESFRVrtPAFhIojo0lZdM5p1%2FGKlrwQ00g%2BlKzwS7HIvv9DHccPcZ8EdbZdN%2BJBWN2BW1R4exkLgZ4X0kovDE19TjTD%2B%2FwyQSzGNrKjxwvHjQx5p3KH7Y8OqJT7dRGC5E7%2Btme2UdCk0N0wuyyUcK8J3MpQpvBfVgMA6yQVWCnC9R2qb%2Byr5mSJmQJKrdV889qaUsGwb1huUZOjwjm0N4BpDYx9K%2FVkDNmNm76HEX7RyQdSP8doIB%2BdgOEP97jcGC%2F%2BgV3bUv%2B9DJw5gns%2FMvQQDODBUSpfa6uuaLYdCn74uq8QbcFUaZ82oCjBJjsMKz56it4rNrwesJZm4aFcyHInH4Y2yK0IXsYqO0oeS2233q8QDekdKh9OyOIOjDG3IXTBjqkATn0N9UECBS3mYla%2FBHfw%2Blq3thZ2zpU3L7KPa6jmiYx4HsOwiKGjstJB1h1gMK73kBKMQdD7YAA%2Flk2w8h%2FPmuXzQuHg1IdO377qSJJ6XBbIFzH7BJv9UFO%2F2U0R8AaoQkcHY4oOyshofe9gLrc6wqAqSl3OSRJiWvwogJpEGOlPnvfhSFk%2BeDvnl2%2FFR1krDWCCK2lerBPUgx8%2BMdTd4YJwH%2Fo&X-Amz-Signature=cefaeeb38675c2fb4c0fe880f14428628273c72f5ba713bea5ff8665199eed91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICLEHBS%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T024345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC8zleJtovTDuFcVz1KcfxPFFdDnSXRpyZesSTfhAhPsAIgCRMyhWQrBXcXgy%2Bw1rwZct%2FQuUdyVGZ%2BWptop%2FwfBRUqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk%2B95hiuFd1%2Bk7ARircA1qixvBPglIOx0ZUCFSI2rsYDF7w54oqGjlbL15HTsgzgIqcUOS7SilKZcj6hJ2kUUxp4npPsOyLXCJC46yi99ZpFLB8ixRZwaNHcWgsL5iIANmbw8XHTLMlrgteGeBgAj7jzt2ptyAuN%2FyPiHnhhGTLTw0Ga%2F%2FpQh9SQdZ4siNPMS20QsXcVTh4tsmcMHd3blUCaeWOGkq5TwAaB1ruRLZjV5CGwjcSlRbByw95G1npGxAUCAaGJYLdyAmaO%2FHvT1BzEZ3WSTo7pdellQMl34OERg9%2BuLelUVBKLxZ8RlMLK59fg9ZOs1HykmZ9X0eI3Iwh2DKRwXTWlRbn%2FqQFjw2rEshpzTStgPLLlFnitRM8uP%2Brm5cMAIhRuj3HZBssvtfBBOO6pRlSteU0AGcajggvDoOpkpXery0kdweEQGz1jtHZmCtB2a3tt%2BY6AGsxXDRYJsZX%2FYKi3AdSRJEwazND4bhTSOZ1S5CVmiaIhlcuZ%2BsO8n5o%2FYHwyLwqe2s0GYgBK4sjgL7KSnWfNdTCyxoQYnS31IovfIMnMc119K3lD4slbW8xdfrC7LsL98MQI3hoLwjzrtPloMVq3087t%2Bp327YDM4JWR8H9t5ffPuEvqaGRg2ygguIHkm%2BpMPvdhdMGOqUB%2BXMqWHqtgvWDeld2VKAFWBuMSoc5pVFhTqMMTZ4GoSxE8%2Fc8cqkdC26CLFIGgPPhwK7dUHXVi83%2F5DmAVV%2FCVkfVEbem9zGsClL50ol3dkKTJkqt%2FM2qSubAZ9jjBO%2BtFEo2bWIl6D%2F%2FnzjG9JwXl7EYQ6aMgx2SJ9A2QdNSg5Sbne%2B4Zrc4uA6i9f5fSji6F3wba64TBNZAU5Cd0S35%2BpZ%2FojXS&X-Amz-Signature=877fb3dbdf6137327c3b49502cba301dd0b33ef829884e507089ca20ee86a6ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

