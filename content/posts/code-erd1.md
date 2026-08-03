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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFPCQLR2%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBc3Dd4Cg9vS5QBs%2F7hFgleZ5F0%2BjQXM24SK6tPjR38wAiEA5DjPqv6QuC3waKk%2F5hCPtm55vjvRLYAbjTOlmVm%2FU50qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8WS4Rc2bNwm5rkhCrcA22Aarn0eFFo1D9dfUgGOuJCTuqsuFNUtEX%2Bp1wzaDpt2uppn3s2CRCIVfs%2FQc2SA5E1ggNv%2BFowZK%2BPDkWqBD5uL37ypgaFZfdjebL1fp%2B%2FVKvNo1awYgQN3vdb8YK4jIXr7ZS58TiPI2UVtGeKIKZ8P7Ax3GnL0eS30g4QOCcPu%2FURTucvVTqeJPbJ8bKJ247CFgX%2Fr08F3bzDRy43CPiJ4PT9miwgp3T%2FcgtuPx59XGRm1SkTT0MwozyZQ2WqcdbzpFd30RltqF1veqHHkiDMfXZoRsmRsp2ug%2FhM%2BuTYQSqj0hO2o3aq7Snj0wIFvfLXUUG505a9KcreXPG2stNWT%2BDUkAubBYpvDLMjO9kYL8PePJlT%2F6Uo3V%2Bs9aSkEJJG6VHi7C8MQ2vmT0wlY2VcmN7wqrNaKAQ2l8YdZcoFB7MBjA%2FUb9g5g34ml4RIyEGNwrx2L5gOsBTmo1IjczXDYxJCh6MPcHRDuMWjg9drioOHAvJRUaVG1RXebspYzYvMyFjdUCLxOhv0YX3bD31jWfafq%2BnCwJCJILU%2F38MaAE3IqqZPmtXmpsGpwJEju%2FmruGvtGjqw3GeIUHcDrfnS%2Fcz4A2qzMlKzxeFARQLQN154AY7lf9SuQoHGMN%2Flv9MGOqUBWMCsLtc0hGdtlDsg5AhTFlWri%2BTDsXL3kUqB8Gb4P6Z7hu%2B8j2QeY7nCK9K4epi1APq0xFR0SlVEPqQzLY6Tu8vOpKYFZ2v%2FS5h4aI%2BVd7XEJTtXtYLKXZ5ZMzvKBfqF3faddj1buVfLdm2KOyDHEaEp8%2FeF0cAh%2BSS5jHZg3tQ2YbaRNS%2Fd5DpkziYIhEw%2FbyxOzU9abqgwzIihaKi5DT7n8KNu&X-Amz-Signature=13896e26f3cd36c71f6acf975742562a594d65af4c7f4d6bbba4dcfac273bfea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOFS4IS%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF2rFReyfMZ6Is3lZqtk5NsHAnLras2ZVvJa8sZwchZfAiBC0NHnjJ%2BF2T7GDg9jbrQfIUruRWwoCBT14gU9ZEQGwyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM24gVSAmgV1ROQw4dKtwD2fpAiVL6dKU4aDmF%2BEaxIMRuDO1jBPzaU5OSVbC065ps3aP1OGWYl413RSqaaBEHajtoU5VnK5qqaQ6r2qlIg1mb%2FbpRN8rDR8AU0n%2FmLbcmI6Al7vO7d2jwcE3tErd0TU26jxPbg67wLW4ZYItL8C4tC1ixhP497aSIxLhVGygtEsG%2BfH0ou6lvnm8ZjWbbtsQ0RuazpSk%2BXqiv3lDDzP2yDFmYGPhazKyrlDCBo86N8ZK2TDfXh%2FFhXc3GWmgBFt%2B607BCOUaZYQa4%2BdBQW%2FmlJwDCFziPY3CeFmSGUpn7s4L1U%2BcEJfMREB4wDABtvVwgwRPi9wWfaJKuSowtNbIKTMNzZydsoz5pqjfjyNi78AnsyEC8Uw76RX7CIgJ%2F4TYgTukm9tEArCDy%2FNnAiD358W1QgZ2TN6IeeMMZPjWBkMeApwEdCHgIMqVNgAcIKbzPSr6yokrQLv1zp4s3ax1js%2BV%2B9fuhicW5aZCGQRQ2Ogl8l3CkXjR%2B1gSxB9O3ecsus%2FcdPO60FYvfi43S0Shvd8R63qo1tggESH4zvHKUI9cQagJZWi4R0OdlPj8tQPHjKyzovXYKK1Jh0qOnk1sTht3G%2FVBg9nwy3GeX3h6rCHmKQVjulEYi5j4wieS%2F0wY6pgEFbMxYS7QLmed9619ZoaTFC4WpmujVph6Z%2FvL2JTLGUAEKyVdHYCGf1%2FJcdACiRxWDD6qEjXMWmXKvMrqYcIzMVJCi0eyUIT1Rlv2hOPqS5nKgDMa3pnnJJ4G7KBnwJLY7S4s%2BgIYpS0jNOrQy60csicbcUSYq9Y%2Fv7fuXb6IjYbodkzXxkiNnhnHfyWMcSflEkwrEaOgxbikHGyQWxkTlUxgmqG6%2F&X-Amz-Signature=a8bcea943b550733f8ac1260ce17d6f50d4801ee2e274a1e67a17cd62bebdfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOFS4IS%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF2rFReyfMZ6Is3lZqtk5NsHAnLras2ZVvJa8sZwchZfAiBC0NHnjJ%2BF2T7GDg9jbrQfIUruRWwoCBT14gU9ZEQGwyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM24gVSAmgV1ROQw4dKtwD2fpAiVL6dKU4aDmF%2BEaxIMRuDO1jBPzaU5OSVbC065ps3aP1OGWYl413RSqaaBEHajtoU5VnK5qqaQ6r2qlIg1mb%2FbpRN8rDR8AU0n%2FmLbcmI6Al7vO7d2jwcE3tErd0TU26jxPbg67wLW4ZYItL8C4tC1ixhP497aSIxLhVGygtEsG%2BfH0ou6lvnm8ZjWbbtsQ0RuazpSk%2BXqiv3lDDzP2yDFmYGPhazKyrlDCBo86N8ZK2TDfXh%2FFhXc3GWmgBFt%2B607BCOUaZYQa4%2BdBQW%2FmlJwDCFziPY3CeFmSGUpn7s4L1U%2BcEJfMREB4wDABtvVwgwRPi9wWfaJKuSowtNbIKTMNzZydsoz5pqjfjyNi78AnsyEC8Uw76RX7CIgJ%2F4TYgTukm9tEArCDy%2FNnAiD358W1QgZ2TN6IeeMMZPjWBkMeApwEdCHgIMqVNgAcIKbzPSr6yokrQLv1zp4s3ax1js%2BV%2B9fuhicW5aZCGQRQ2Ogl8l3CkXjR%2B1gSxB9O3ecsus%2FcdPO60FYvfi43S0Shvd8R63qo1tggESH4zvHKUI9cQagJZWi4R0OdlPj8tQPHjKyzovXYKK1Jh0qOnk1sTht3G%2FVBg9nwy3GeX3h6rCHmKQVjulEYi5j4wieS%2F0wY6pgEFbMxYS7QLmed9619ZoaTFC4WpmujVph6Z%2FvL2JTLGUAEKyVdHYCGf1%2FJcdACiRxWDD6qEjXMWmXKvMrqYcIzMVJCi0eyUIT1Rlv2hOPqS5nKgDMa3pnnJJ4G7KBnwJLY7S4s%2BgIYpS0jNOrQy60csicbcUSYq9Y%2Fv7fuXb6IjYbodkzXxkiNnhnHfyWMcSflEkwrEaOgxbikHGyQWxkTlUxgmqG6%2F&X-Amz-Signature=da45547a5e916117380fc96f9721534d5a2c589120f33932399e644334e37928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOFS4IS%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF2rFReyfMZ6Is3lZqtk5NsHAnLras2ZVvJa8sZwchZfAiBC0NHnjJ%2BF2T7GDg9jbrQfIUruRWwoCBT14gU9ZEQGwyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM24gVSAmgV1ROQw4dKtwD2fpAiVL6dKU4aDmF%2BEaxIMRuDO1jBPzaU5OSVbC065ps3aP1OGWYl413RSqaaBEHajtoU5VnK5qqaQ6r2qlIg1mb%2FbpRN8rDR8AU0n%2FmLbcmI6Al7vO7d2jwcE3tErd0TU26jxPbg67wLW4ZYItL8C4tC1ixhP497aSIxLhVGygtEsG%2BfH0ou6lvnm8ZjWbbtsQ0RuazpSk%2BXqiv3lDDzP2yDFmYGPhazKyrlDCBo86N8ZK2TDfXh%2FFhXc3GWmgBFt%2B607BCOUaZYQa4%2BdBQW%2FmlJwDCFziPY3CeFmSGUpn7s4L1U%2BcEJfMREB4wDABtvVwgwRPi9wWfaJKuSowtNbIKTMNzZydsoz5pqjfjyNi78AnsyEC8Uw76RX7CIgJ%2F4TYgTukm9tEArCDy%2FNnAiD358W1QgZ2TN6IeeMMZPjWBkMeApwEdCHgIMqVNgAcIKbzPSr6yokrQLv1zp4s3ax1js%2BV%2B9fuhicW5aZCGQRQ2Ogl8l3CkXjR%2B1gSxB9O3ecsus%2FcdPO60FYvfi43S0Shvd8R63qo1tggESH4zvHKUI9cQagJZWi4R0OdlPj8tQPHjKyzovXYKK1Jh0qOnk1sTht3G%2FVBg9nwy3GeX3h6rCHmKQVjulEYi5j4wieS%2F0wY6pgEFbMxYS7QLmed9619ZoaTFC4WpmujVph6Z%2FvL2JTLGUAEKyVdHYCGf1%2FJcdACiRxWDD6qEjXMWmXKvMrqYcIzMVJCi0eyUIT1Rlv2hOPqS5nKgDMa3pnnJJ4G7KBnwJLY7S4s%2BgIYpS0jNOrQy60csicbcUSYq9Y%2Fv7fuXb6IjYbodkzXxkiNnhnHfyWMcSflEkwrEaOgxbikHGyQWxkTlUxgmqG6%2F&X-Amz-Signature=dfa5166c1a6458f302e5e10f1f29a61efe576fe8f2a9e84a0db69e77f7fb8f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOFS4IS%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF2rFReyfMZ6Is3lZqtk5NsHAnLras2ZVvJa8sZwchZfAiBC0NHnjJ%2BF2T7GDg9jbrQfIUruRWwoCBT14gU9ZEQGwyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM24gVSAmgV1ROQw4dKtwD2fpAiVL6dKU4aDmF%2BEaxIMRuDO1jBPzaU5OSVbC065ps3aP1OGWYl413RSqaaBEHajtoU5VnK5qqaQ6r2qlIg1mb%2FbpRN8rDR8AU0n%2FmLbcmI6Al7vO7d2jwcE3tErd0TU26jxPbg67wLW4ZYItL8C4tC1ixhP497aSIxLhVGygtEsG%2BfH0ou6lvnm8ZjWbbtsQ0RuazpSk%2BXqiv3lDDzP2yDFmYGPhazKyrlDCBo86N8ZK2TDfXh%2FFhXc3GWmgBFt%2B607BCOUaZYQa4%2BdBQW%2FmlJwDCFziPY3CeFmSGUpn7s4L1U%2BcEJfMREB4wDABtvVwgwRPi9wWfaJKuSowtNbIKTMNzZydsoz5pqjfjyNi78AnsyEC8Uw76RX7CIgJ%2F4TYgTukm9tEArCDy%2FNnAiD358W1QgZ2TN6IeeMMZPjWBkMeApwEdCHgIMqVNgAcIKbzPSr6yokrQLv1zp4s3ax1js%2BV%2B9fuhicW5aZCGQRQ2Ogl8l3CkXjR%2B1gSxB9O3ecsus%2FcdPO60FYvfi43S0Shvd8R63qo1tggESH4zvHKUI9cQagJZWi4R0OdlPj8tQPHjKyzovXYKK1Jh0qOnk1sTht3G%2FVBg9nwy3GeX3h6rCHmKQVjulEYi5j4wieS%2F0wY6pgEFbMxYS7QLmed9619ZoaTFC4WpmujVph6Z%2FvL2JTLGUAEKyVdHYCGf1%2FJcdACiRxWDD6qEjXMWmXKvMrqYcIzMVJCi0eyUIT1Rlv2hOPqS5nKgDMa3pnnJJ4G7KBnwJLY7S4s%2BgIYpS0jNOrQy60csicbcUSYq9Y%2Fv7fuXb6IjYbodkzXxkiNnhnHfyWMcSflEkwrEaOgxbikHGyQWxkTlUxgmqG6%2F&X-Amz-Signature=5f8ee9ce4aeecaa00b85c76c5b40a59b36805d8ca812ce12e17181f0f23fb5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MOFS4IS%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIF2rFReyfMZ6Is3lZqtk5NsHAnLras2ZVvJa8sZwchZfAiBC0NHnjJ%2BF2T7GDg9jbrQfIUruRWwoCBT14gU9ZEQGwyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM24gVSAmgV1ROQw4dKtwD2fpAiVL6dKU4aDmF%2BEaxIMRuDO1jBPzaU5OSVbC065ps3aP1OGWYl413RSqaaBEHajtoU5VnK5qqaQ6r2qlIg1mb%2FbpRN8rDR8AU0n%2FmLbcmI6Al7vO7d2jwcE3tErd0TU26jxPbg67wLW4ZYItL8C4tC1ixhP497aSIxLhVGygtEsG%2BfH0ou6lvnm8ZjWbbtsQ0RuazpSk%2BXqiv3lDDzP2yDFmYGPhazKyrlDCBo86N8ZK2TDfXh%2FFhXc3GWmgBFt%2B607BCOUaZYQa4%2BdBQW%2FmlJwDCFziPY3CeFmSGUpn7s4L1U%2BcEJfMREB4wDABtvVwgwRPi9wWfaJKuSowtNbIKTMNzZydsoz5pqjfjyNi78AnsyEC8Uw76RX7CIgJ%2F4TYgTukm9tEArCDy%2FNnAiD358W1QgZ2TN6IeeMMZPjWBkMeApwEdCHgIMqVNgAcIKbzPSr6yokrQLv1zp4s3ax1js%2BV%2B9fuhicW5aZCGQRQ2Ogl8l3CkXjR%2B1gSxB9O3ecsus%2FcdPO60FYvfi43S0Shvd8R63qo1tggESH4zvHKUI9cQagJZWi4R0OdlPj8tQPHjKyzovXYKK1Jh0qOnk1sTht3G%2FVBg9nwy3GeX3h6rCHmKQVjulEYi5j4wieS%2F0wY6pgEFbMxYS7QLmed9619ZoaTFC4WpmujVph6Z%2FvL2JTLGUAEKyVdHYCGf1%2FJcdACiRxWDD6qEjXMWmXKvMrqYcIzMVJCi0eyUIT1Rlv2hOPqS5nKgDMa3pnnJJ4G7KBnwJLY7S4s%2BgIYpS0jNOrQy60csicbcUSYq9Y%2Fv7fuXb6IjYbodkzXxkiNnhnHfyWMcSflEkwrEaOgxbikHGyQWxkTlUxgmqG6%2F&X-Amz-Signature=146a18b6b776fe503331109949e63da4b6e5e6d1291c8f46f1e26c2754fae004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFPCQLR2%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBc3Dd4Cg9vS5QBs%2F7hFgleZ5F0%2BjQXM24SK6tPjR38wAiEA5DjPqv6QuC3waKk%2F5hCPtm55vjvRLYAbjTOlmVm%2FU50qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8WS4Rc2bNwm5rkhCrcA22Aarn0eFFo1D9dfUgGOuJCTuqsuFNUtEX%2Bp1wzaDpt2uppn3s2CRCIVfs%2FQc2SA5E1ggNv%2BFowZK%2BPDkWqBD5uL37ypgaFZfdjebL1fp%2B%2FVKvNo1awYgQN3vdb8YK4jIXr7ZS58TiPI2UVtGeKIKZ8P7Ax3GnL0eS30g4QOCcPu%2FURTucvVTqeJPbJ8bKJ247CFgX%2Fr08F3bzDRy43CPiJ4PT9miwgp3T%2FcgtuPx59XGRm1SkTT0MwozyZQ2WqcdbzpFd30RltqF1veqHHkiDMfXZoRsmRsp2ug%2FhM%2BuTYQSqj0hO2o3aq7Snj0wIFvfLXUUG505a9KcreXPG2stNWT%2BDUkAubBYpvDLMjO9kYL8PePJlT%2F6Uo3V%2Bs9aSkEJJG6VHi7C8MQ2vmT0wlY2VcmN7wqrNaKAQ2l8YdZcoFB7MBjA%2FUb9g5g34ml4RIyEGNwrx2L5gOsBTmo1IjczXDYxJCh6MPcHRDuMWjg9drioOHAvJRUaVG1RXebspYzYvMyFjdUCLxOhv0YX3bD31jWfafq%2BnCwJCJILU%2F38MaAE3IqqZPmtXmpsGpwJEju%2FmruGvtGjqw3GeIUHcDrfnS%2Fcz4A2qzMlKzxeFARQLQN154AY7lf9SuQoHGMN%2Flv9MGOqUBWMCsLtc0hGdtlDsg5AhTFlWri%2BTDsXL3kUqB8Gb4P6Z7hu%2B8j2QeY7nCK9K4epi1APq0xFR0SlVEPqQzLY6Tu8vOpKYFZ2v%2FS5h4aI%2BVd7XEJTtXtYLKXZ5ZMzvKBfqF3faddj1buVfLdm2KOyDHEaEp8%2FeF0cAh%2BSS5jHZg3tQ2YbaRNS%2Fd5DpkziYIhEw%2FbyxOzU9abqgwzIihaKi5DT7n8KNu&X-Amz-Signature=d5859e95379e86173203a93c9519fe33b5b4c285cdee5ae99e147ad41f3602df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

