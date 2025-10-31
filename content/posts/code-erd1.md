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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643J2L7PS%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCw%2BVDeBnaIPl9VPFGUA9YZXqiFec2UnBJb3PkFJXtfWwIhALiVAy%2FDAAFzc%2BIQJlc1AvuyzM1vUb38xGyGuFmSyEGaKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9dQZFNbohlVABsvkq3AOfENI%2B3I%2BWD2N%2FJ9%2FdqQAH4Xwvygbpg3vJfjvuQ%2BQKBj4%2F%2Fe0afzoAaavtw5wWAkuEkLihYwoW8EH9iZL5ABAc14ZtZ3KyryB8%2FHwskTdWy38UQhENo5C%2BnCglKaQsDmHd6yPcnU8Pwy%2FI5KO3ZtQOyTFZXnDbFr1Q8qHTGUNzhUFQTHLC7E6QAytGTwIO2zm%2BoAB9I7508ww%2BJNxlH9Wm4sSN6mF95AhjT38WYOYc4N1Ll9iBsJLMPWINDHe3wEkxgNJ307cGOglqtyj0QSWhwxdVKnbiRrYZ5pat97dxo6kdJUREBTsVZhOtygfCklshGb6rcX2CnWGZ7bkhAcmxyNc4fJYWvOZUR1ErZEDXrIyIxHTFDzNVZmJfnzS9aylKNfopYtxS04NgftqbYOHRjYos%2FbiCAAnQ5OJlE9916X0RgtmC%2FSgbFKskHyXf93qbF6dBgAK38yuPYCi1Cg7wrvD%2Bu81ytV4HFsymtdd9CTd%2BLdWGZHvE6xOeQmDcq%2FGFgnWNhcdKubnOCKQVF5%2B8yfOnyzN6hPgJ%2FCq2jOmbq%2BRN%2B56a7BSjrSqttF2fV4KdMNjCuMVIpT%2FuuefZpLJN3%2BRezw7ub5yPtJvAl%2FKpx%2FRbPYzRaoMbHZobxTCg8Y%2FIBjqkAblkwigCZ8%2BhyM%2FYaeBWDT%2BE%2BiBvcZpsRcF9fW6CcuAYGsHaUWn%2FLKaOxDIShPIKyuj%2FR5JSaJLoaKE2RDb1XAbovttbq%2BlNzOqTNJM1JdTbHUrozSrWOa6fW1HBtuoXzVgXgpj24XFyWg0veuUWw%2B3Tt4hC%2F77%2FhDWagkvfD1IEFIUuRr7j63T0k2d9Si2OF2PHlCSKGWzt%2FUxy%2BtK%2FUmZ8WY5g&X-Amz-Signature=5a65e932bc7aef1b3c59ab17e2d2b7ed64910616420833bb165be504bae62048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GU4JYHS%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIAspDXd%2BMUoBm7uqwpBdsxCeFMdvxCuDGFAswTyVlFw%2BAiEAtg6FHLzX3V%2FQx5SHZFjAl53iRGKiiwzwdxHUq5S6XxsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOCw%2BYC1kMss5d77yrcAzYYEL0pJ1ESX7K1RUMmENlWVGyZj8lqYxShwM7lDE%2BKNKQ3Hh1OF4Ay4xyzuISvndSiJbTWiiBzLYs%2Bva3nQBoK0B4v41knoqmnqLU%2BG4Qou4GSdXsDRF1LbNhmXAKJ8LoDn6Ku2%2FYwPHH4Caq%2B6F9ChPfMyDXl80%2BacVYvrvSfP5Llpvhp3M1SYwri1R7MNBvJ%2FWPbckvtUIUqWENRZqHBVlBrsyeek5iS1N2nfAvghtnHjXmACdjQuUbmcUz4gOYccFMBksw%2Br3y9jDWoyP8OUlLmJFU2JTqPCnWC6LKi9DiMd08i4idZY1kLntISdAF0zHTBk9syv%2BbNIhQjr8GmlNNRGT1ZMFE1itiMyda1mSQHCDjb5wLGb%2B4N7%2BD5Ov5WNbzhmHoj6XJOGxVYzjjWlo82ttXVHz1CQ6hqR%2Fa3QraMyORYupBNkcHQI2Xi1wezls6%2BQpmHM5bA5rwTC8G5IG3bZybJCLjuqRN6%2FLwmxn9FNvyleqk7zEN4aNky%2Fs6yBn3HPi%2BEehMV2JkGBdBeFXknXva0b0LuOO3KnlmT03rbydQfMLOk9ySN3LMBDpOeS4V7%2FHe3FrQSXwNuARrYAHJaODuMfRz2XDXICjEvlNRA49K%2FFIi8mqv%2BMOPxj8gGOqUBD7%2BEUA53v8frz7cm81XMfE%2B6SO70QLVziiE6sQoDruRCBpCzS%2B%2BMAikgfT1JeEkeKSwquPbZK41a2uL7CQnPpUMv%2BxTP94OWyHrgk1pAX2lAOn7HOVlRRgNqXcqCFyM%2FwX7ujJ4VZ98qa%2FLpU4HeVm9C9rLSxr3Z01tejhaN7yaUl6ZzuePLPlg1dzWoHoUH%2FxoRIOzrxo06V6gKG9OLtbFdOJVv&X-Amz-Signature=846af2e055e08f4777fe2710592ddf73ed2fbf80970322c718477aceded4141b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GU4JYHS%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIAspDXd%2BMUoBm7uqwpBdsxCeFMdvxCuDGFAswTyVlFw%2BAiEAtg6FHLzX3V%2FQx5SHZFjAl53iRGKiiwzwdxHUq5S6XxsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOCw%2BYC1kMss5d77yrcAzYYEL0pJ1ESX7K1RUMmENlWVGyZj8lqYxShwM7lDE%2BKNKQ3Hh1OF4Ay4xyzuISvndSiJbTWiiBzLYs%2Bva3nQBoK0B4v41knoqmnqLU%2BG4Qou4GSdXsDRF1LbNhmXAKJ8LoDn6Ku2%2FYwPHH4Caq%2B6F9ChPfMyDXl80%2BacVYvrvSfP5Llpvhp3M1SYwri1R7MNBvJ%2FWPbckvtUIUqWENRZqHBVlBrsyeek5iS1N2nfAvghtnHjXmACdjQuUbmcUz4gOYccFMBksw%2Br3y9jDWoyP8OUlLmJFU2JTqPCnWC6LKi9DiMd08i4idZY1kLntISdAF0zHTBk9syv%2BbNIhQjr8GmlNNRGT1ZMFE1itiMyda1mSQHCDjb5wLGb%2B4N7%2BD5Ov5WNbzhmHoj6XJOGxVYzjjWlo82ttXVHz1CQ6hqR%2Fa3QraMyORYupBNkcHQI2Xi1wezls6%2BQpmHM5bA5rwTC8G5IG3bZybJCLjuqRN6%2FLwmxn9FNvyleqk7zEN4aNky%2Fs6yBn3HPi%2BEehMV2JkGBdBeFXknXva0b0LuOO3KnlmT03rbydQfMLOk9ySN3LMBDpOeS4V7%2FHe3FrQSXwNuARrYAHJaODuMfRz2XDXICjEvlNRA49K%2FFIi8mqv%2BMOPxj8gGOqUBD7%2BEUA53v8frz7cm81XMfE%2B6SO70QLVziiE6sQoDruRCBpCzS%2B%2BMAikgfT1JeEkeKSwquPbZK41a2uL7CQnPpUMv%2BxTP94OWyHrgk1pAX2lAOn7HOVlRRgNqXcqCFyM%2FwX7ujJ4VZ98qa%2FLpU4HeVm9C9rLSxr3Z01tejhaN7yaUl6ZzuePLPlg1dzWoHoUH%2FxoRIOzrxo06V6gKG9OLtbFdOJVv&X-Amz-Signature=71a3aa1839651d5ac2d876fc8dcfa74144562e3fa26565f2257c3d48048ad084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GU4JYHS%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIAspDXd%2BMUoBm7uqwpBdsxCeFMdvxCuDGFAswTyVlFw%2BAiEAtg6FHLzX3V%2FQx5SHZFjAl53iRGKiiwzwdxHUq5S6XxsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOCw%2BYC1kMss5d77yrcAzYYEL0pJ1ESX7K1RUMmENlWVGyZj8lqYxShwM7lDE%2BKNKQ3Hh1OF4Ay4xyzuISvndSiJbTWiiBzLYs%2Bva3nQBoK0B4v41knoqmnqLU%2BG4Qou4GSdXsDRF1LbNhmXAKJ8LoDn6Ku2%2FYwPHH4Caq%2B6F9ChPfMyDXl80%2BacVYvrvSfP5Llpvhp3M1SYwri1R7MNBvJ%2FWPbckvtUIUqWENRZqHBVlBrsyeek5iS1N2nfAvghtnHjXmACdjQuUbmcUz4gOYccFMBksw%2Br3y9jDWoyP8OUlLmJFU2JTqPCnWC6LKi9DiMd08i4idZY1kLntISdAF0zHTBk9syv%2BbNIhQjr8GmlNNRGT1ZMFE1itiMyda1mSQHCDjb5wLGb%2B4N7%2BD5Ov5WNbzhmHoj6XJOGxVYzjjWlo82ttXVHz1CQ6hqR%2Fa3QraMyORYupBNkcHQI2Xi1wezls6%2BQpmHM5bA5rwTC8G5IG3bZybJCLjuqRN6%2FLwmxn9FNvyleqk7zEN4aNky%2Fs6yBn3HPi%2BEehMV2JkGBdBeFXknXva0b0LuOO3KnlmT03rbydQfMLOk9ySN3LMBDpOeS4V7%2FHe3FrQSXwNuARrYAHJaODuMfRz2XDXICjEvlNRA49K%2FFIi8mqv%2BMOPxj8gGOqUBD7%2BEUA53v8frz7cm81XMfE%2B6SO70QLVziiE6sQoDruRCBpCzS%2B%2BMAikgfT1JeEkeKSwquPbZK41a2uL7CQnPpUMv%2BxTP94OWyHrgk1pAX2lAOn7HOVlRRgNqXcqCFyM%2FwX7ujJ4VZ98qa%2FLpU4HeVm9C9rLSxr3Z01tejhaN7yaUl6ZzuePLPlg1dzWoHoUH%2FxoRIOzrxo06V6gKG9OLtbFdOJVv&X-Amz-Signature=572c7875d09adf0a425bb6cc8a302bbaeea74fe47264525ad170ee4177dff258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GU4JYHS%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIAspDXd%2BMUoBm7uqwpBdsxCeFMdvxCuDGFAswTyVlFw%2BAiEAtg6FHLzX3V%2FQx5SHZFjAl53iRGKiiwzwdxHUq5S6XxsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOCw%2BYC1kMss5d77yrcAzYYEL0pJ1ESX7K1RUMmENlWVGyZj8lqYxShwM7lDE%2BKNKQ3Hh1OF4Ay4xyzuISvndSiJbTWiiBzLYs%2Bva3nQBoK0B4v41knoqmnqLU%2BG4Qou4GSdXsDRF1LbNhmXAKJ8LoDn6Ku2%2FYwPHH4Caq%2B6F9ChPfMyDXl80%2BacVYvrvSfP5Llpvhp3M1SYwri1R7MNBvJ%2FWPbckvtUIUqWENRZqHBVlBrsyeek5iS1N2nfAvghtnHjXmACdjQuUbmcUz4gOYccFMBksw%2Br3y9jDWoyP8OUlLmJFU2JTqPCnWC6LKi9DiMd08i4idZY1kLntISdAF0zHTBk9syv%2BbNIhQjr8GmlNNRGT1ZMFE1itiMyda1mSQHCDjb5wLGb%2B4N7%2BD5Ov5WNbzhmHoj6XJOGxVYzjjWlo82ttXVHz1CQ6hqR%2Fa3QraMyORYupBNkcHQI2Xi1wezls6%2BQpmHM5bA5rwTC8G5IG3bZybJCLjuqRN6%2FLwmxn9FNvyleqk7zEN4aNky%2Fs6yBn3HPi%2BEehMV2JkGBdBeFXknXva0b0LuOO3KnlmT03rbydQfMLOk9ySN3LMBDpOeS4V7%2FHe3FrQSXwNuARrYAHJaODuMfRz2XDXICjEvlNRA49K%2FFIi8mqv%2BMOPxj8gGOqUBD7%2BEUA53v8frz7cm81XMfE%2B6SO70QLVziiE6sQoDruRCBpCzS%2B%2BMAikgfT1JeEkeKSwquPbZK41a2uL7CQnPpUMv%2BxTP94OWyHrgk1pAX2lAOn7HOVlRRgNqXcqCFyM%2FwX7ujJ4VZ98qa%2FLpU4HeVm9C9rLSxr3Z01tejhaN7yaUl6ZzuePLPlg1dzWoHoUH%2FxoRIOzrxo06V6gKG9OLtbFdOJVv&X-Amz-Signature=16494ed28e376f79a94df3e20e280ea359572d23246e14b7b1188533c24bde75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GU4JYHS%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIAspDXd%2BMUoBm7uqwpBdsxCeFMdvxCuDGFAswTyVlFw%2BAiEAtg6FHLzX3V%2FQx5SHZFjAl53iRGKiiwzwdxHUq5S6XxsqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOCw%2BYC1kMss5d77yrcAzYYEL0pJ1ESX7K1RUMmENlWVGyZj8lqYxShwM7lDE%2BKNKQ3Hh1OF4Ay4xyzuISvndSiJbTWiiBzLYs%2Bva3nQBoK0B4v41knoqmnqLU%2BG4Qou4GSdXsDRF1LbNhmXAKJ8LoDn6Ku2%2FYwPHH4Caq%2B6F9ChPfMyDXl80%2BacVYvrvSfP5Llpvhp3M1SYwri1R7MNBvJ%2FWPbckvtUIUqWENRZqHBVlBrsyeek5iS1N2nfAvghtnHjXmACdjQuUbmcUz4gOYccFMBksw%2Br3y9jDWoyP8OUlLmJFU2JTqPCnWC6LKi9DiMd08i4idZY1kLntISdAF0zHTBk9syv%2BbNIhQjr8GmlNNRGT1ZMFE1itiMyda1mSQHCDjb5wLGb%2B4N7%2BD5Ov5WNbzhmHoj6XJOGxVYzjjWlo82ttXVHz1CQ6hqR%2Fa3QraMyORYupBNkcHQI2Xi1wezls6%2BQpmHM5bA5rwTC8G5IG3bZybJCLjuqRN6%2FLwmxn9FNvyleqk7zEN4aNky%2Fs6yBn3HPi%2BEehMV2JkGBdBeFXknXva0b0LuOO3KnlmT03rbydQfMLOk9ySN3LMBDpOeS4V7%2FHe3FrQSXwNuARrYAHJaODuMfRz2XDXICjEvlNRA49K%2FFIi8mqv%2BMOPxj8gGOqUBD7%2BEUA53v8frz7cm81XMfE%2B6SO70QLVziiE6sQoDruRCBpCzS%2B%2BMAikgfT1JeEkeKSwquPbZK41a2uL7CQnPpUMv%2BxTP94OWyHrgk1pAX2lAOn7HOVlRRgNqXcqCFyM%2FwX7ujJ4VZ98qa%2FLpU4HeVm9C9rLSxr3Z01tejhaN7yaUl6ZzuePLPlg1dzWoHoUH%2FxoRIOzrxo06V6gKG9OLtbFdOJVv&X-Amz-Signature=c98eaba750201c18eed65bff5adcd51784d118d6d6c38d1e7e9de8fa7eab34ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643J2L7PS%2F20251031%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251031T010136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCw%2BVDeBnaIPl9VPFGUA9YZXqiFec2UnBJb3PkFJXtfWwIhALiVAy%2FDAAFzc%2BIQJlc1AvuyzM1vUb38xGyGuFmSyEGaKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9dQZFNbohlVABsvkq3AOfENI%2B3I%2BWD2N%2FJ9%2FdqQAH4Xwvygbpg3vJfjvuQ%2BQKBj4%2F%2Fe0afzoAaavtw5wWAkuEkLihYwoW8EH9iZL5ABAc14ZtZ3KyryB8%2FHwskTdWy38UQhENo5C%2BnCglKaQsDmHd6yPcnU8Pwy%2FI5KO3ZtQOyTFZXnDbFr1Q8qHTGUNzhUFQTHLC7E6QAytGTwIO2zm%2BoAB9I7508ww%2BJNxlH9Wm4sSN6mF95AhjT38WYOYc4N1Ll9iBsJLMPWINDHe3wEkxgNJ307cGOglqtyj0QSWhwxdVKnbiRrYZ5pat97dxo6kdJUREBTsVZhOtygfCklshGb6rcX2CnWGZ7bkhAcmxyNc4fJYWvOZUR1ErZEDXrIyIxHTFDzNVZmJfnzS9aylKNfopYtxS04NgftqbYOHRjYos%2FbiCAAnQ5OJlE9916X0RgtmC%2FSgbFKskHyXf93qbF6dBgAK38yuPYCi1Cg7wrvD%2Bu81ytV4HFsymtdd9CTd%2BLdWGZHvE6xOeQmDcq%2FGFgnWNhcdKubnOCKQVF5%2B8yfOnyzN6hPgJ%2FCq2jOmbq%2BRN%2B56a7BSjrSqttF2fV4KdMNjCuMVIpT%2FuuefZpLJN3%2BRezw7ub5yPtJvAl%2FKpx%2FRbPYzRaoMbHZobxTCg8Y%2FIBjqkAblkwigCZ8%2BhyM%2FYaeBWDT%2BE%2BiBvcZpsRcF9fW6CcuAYGsHaUWn%2FLKaOxDIShPIKyuj%2FR5JSaJLoaKE2RDb1XAbovttbq%2BlNzOqTNJM1JdTbHUrozSrWOa6fW1HBtuoXzVgXgpj24XFyWg0veuUWw%2B3Tt4hC%2F77%2FhDWagkvfD1IEFIUuRr7j63T0k2d9Si2OF2PHlCSKGWzt%2FUxy%2BtK%2FUmZ8WY5g&X-Amz-Signature=64e009794c7a2bf0c678c9adab48ba7756f609c7484443e2c37b88f80a5c0479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

