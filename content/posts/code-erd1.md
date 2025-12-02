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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4NGAMV%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T010401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC9WS6gSgOIP%2FFFcneoO7DWnnDEW4VUHwavE2xoTXdNMQIhAOLNHrHugQ6jSpdKXHSwHIMFoej15MZZFUp9Df%2FRcNKOKv8DCAoQABoMNjM3NDIzMTgzODA1Igz%2FSR1IBllxjmn7dLoq3AP%2BZTkd0J0dQwLQaes9sFpwwJqB6tMzSK9fV0DzSFWkmGcykKNh0FuNKMkSjOILdgvAhEBIggRN%2BI4or1r8DmbSxXq%2BxiZLiyRZxc8%2BQJ6%2BQiO7MQPbHknPwUizdnaJETBMzr2uWVo8rzMBDuSztYHPb%2BX7j7V8hoGs6rTlkoE6RDRITzjdHV7NuoivyIZSbzwgsskrf7XyiHWiGRLj4%2BWyjkvhI9%2BQpo%2FK0pUb9m7Hgg%2F%2Fq5sQu1WX8rO0wxiA5od%2FYUbKzMGwIxuDhyZigL4PwT9ySuHYPYvx2x0rssQ%2F%2FhPKAGaWwRDe79UPTKRhEKLXKmaR8ADqfQOIxY5zoCOlDWICV4ihEqiRlufuTvAhyuPH7iPSAa%2BYtvypPv1W1oyVkoSeQ4rmkf9dD9oDO8K96kuzKAAdX0ekj3HNEc66SNUIm4ZcsDvgfMhc8c%2FrlT2zHz6Bl1Sk07v2Cxt5Ro%2FZVtHcJZKVjwsEpEy56OSvRGAICBV7VYc3hPHlL4mdb%2BX8DwCezvyELVkpwm6up2yy1hgdwfqYu%2BD5Tsju%2BJdfPbuNdzlXfcTQvynZNsEWl8lv5mXhQ7St4%2BauanXBi48D43pcoMq4YjDGG3ApTmGmPUfePdtNPItQ66%2BexDDc6bjJBjqkAWFcfGgQQTkTPxvcystEP8n6iGRl4TXwbQeCXnpDsADhj6SoksXo1yVAKjMjrgR%2Bs5eoPvc9ZkxrdsOGiyzogWundq%2BgZoVLYUx1p%2FiG5YdouCHFxjC72eQ%2FBGUQhKAgapNK8POyTZNa%2BqTursQtDrIIG%2FjBugSXrwPpQzKgX9zuz5giX3c3kozjAwxiQgiYnvt9djBGPcXv2%2FP74Yj8einQZ6Ge&X-Amz-Signature=6dc19af2f83c87f5fd539ac0bd736999ecc491778b0988ea3e9d8a162c0b6523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWUFSKN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T010402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCl4Ugk7kkutlR1lySiZqFuACph%2FGus%2BUrgrZiYBkQ9mQIhAILlkIVS2DTeMSHhQV2QUSscFI0dbSRfxA3Jvn5WjKvSKv8DCAoQABoMNjM3NDIzMTgzODA1IgzL1%2B8uOnJN%2FLe%2F8pwq3AMSc5rIwRe6qGSENRXQY91C427qT5AtTCzXN8njQwnBs7hiH7O5xtwXtOFjMo6ZwPSXtmpNTqPQhIbqWi5Qlwj0dGXsFOrW%2BxT8j%2BbDagNPjaRxcz57cbrQwWKHABNvc4sC449jl1CjiFiSnTTg6rilTBt8Htl3g2fsWQtgPfDBebTE7JVK2LMoS8luYHPCbpWt%2BlA4EmE4FiK5huqFTtaFspMw%2FiMIaRO3SVvKeVxfIZmXCXYHU0zvrHHEna2qIW5zIHthoryCSc8pyO5d1549izLA6nEpkh9jF9j85EM1jO2%2BrZGZed9EcC4l5jZ8E59JfSA1U%2BCYd%2BpWlYUcMdGcz7HtlAcKhrGtTnzsKo8mN5wyaArt8HD9D1wEiz%2BKUmiAI43pUExTh9lMh8Ldl4G3j6Gwsb4PcygilEsKCJyconsppCp%2BVMNZ1ielc%2FGzUfIHx3lKduosPLQYL7brRFXm6EQo76uiJ1g5MjwuqFCDzfjE%2FZLZ02Spc6yLXwEZC14LPjqbjrmPW%2BvzcvAL2a9Is%2FISTwVEESisR5i0hZ%2Bxp0bd2qlzlXty4JX%2BY1%2BFRMl7IIBbeJiEMEYT8n4ISp%2F5Dyyc%2BqPmUxQIEE3KFom9cag3szbMKkxoCohBzzCp6bjJBjqkAVH6XYlwDhp5a3jhY1vPz0cn9XuicVsjVIGYS3KoRLiZa56s5k0lJ4NOvUOSS4durE2K%2FpaR0%2FcTGrCTuKzVe2V%2FLkP%2FaSBrbrGcrvsjjHMy4bwuwU73%2BLEz5s5GfwDpW1MGIqT0oVr5GEKsVC0HcQQfKqaIeCCx4fhhjtGEdTCiRRexvD8OABrs1VYthKZYScEetKmvBzZfjKErL9jht3njxWak&X-Amz-Signature=537f0de0e1c97705e4dea6618612185ebc1ae9134dd9e1227809b263fcb94796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWUFSKN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T010402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCl4Ugk7kkutlR1lySiZqFuACph%2FGus%2BUrgrZiYBkQ9mQIhAILlkIVS2DTeMSHhQV2QUSscFI0dbSRfxA3Jvn5WjKvSKv8DCAoQABoMNjM3NDIzMTgzODA1IgzL1%2B8uOnJN%2FLe%2F8pwq3AMSc5rIwRe6qGSENRXQY91C427qT5AtTCzXN8njQwnBs7hiH7O5xtwXtOFjMo6ZwPSXtmpNTqPQhIbqWi5Qlwj0dGXsFOrW%2BxT8j%2BbDagNPjaRxcz57cbrQwWKHABNvc4sC449jl1CjiFiSnTTg6rilTBt8Htl3g2fsWQtgPfDBebTE7JVK2LMoS8luYHPCbpWt%2BlA4EmE4FiK5huqFTtaFspMw%2FiMIaRO3SVvKeVxfIZmXCXYHU0zvrHHEna2qIW5zIHthoryCSc8pyO5d1549izLA6nEpkh9jF9j85EM1jO2%2BrZGZed9EcC4l5jZ8E59JfSA1U%2BCYd%2BpWlYUcMdGcz7HtlAcKhrGtTnzsKo8mN5wyaArt8HD9D1wEiz%2BKUmiAI43pUExTh9lMh8Ldl4G3j6Gwsb4PcygilEsKCJyconsppCp%2BVMNZ1ielc%2FGzUfIHx3lKduosPLQYL7brRFXm6EQo76uiJ1g5MjwuqFCDzfjE%2FZLZ02Spc6yLXwEZC14LPjqbjrmPW%2BvzcvAL2a9Is%2FISTwVEESisR5i0hZ%2Bxp0bd2qlzlXty4JX%2BY1%2BFRMl7IIBbeJiEMEYT8n4ISp%2F5Dyyc%2BqPmUxQIEE3KFom9cag3szbMKkxoCohBzzCp6bjJBjqkAVH6XYlwDhp5a3jhY1vPz0cn9XuicVsjVIGYS3KoRLiZa56s5k0lJ4NOvUOSS4durE2K%2FpaR0%2FcTGrCTuKzVe2V%2FLkP%2FaSBrbrGcrvsjjHMy4bwuwU73%2BLEz5s5GfwDpW1MGIqT0oVr5GEKsVC0HcQQfKqaIeCCx4fhhjtGEdTCiRRexvD8OABrs1VYthKZYScEetKmvBzZfjKErL9jht3njxWak&X-Amz-Signature=49b5cc67e8dc3416cf9dbc1afa52a25b874c9e2b40b86a41d10800e3f6143688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWUFSKN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T010402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCl4Ugk7kkutlR1lySiZqFuACph%2FGus%2BUrgrZiYBkQ9mQIhAILlkIVS2DTeMSHhQV2QUSscFI0dbSRfxA3Jvn5WjKvSKv8DCAoQABoMNjM3NDIzMTgzODA1IgzL1%2B8uOnJN%2FLe%2F8pwq3AMSc5rIwRe6qGSENRXQY91C427qT5AtTCzXN8njQwnBs7hiH7O5xtwXtOFjMo6ZwPSXtmpNTqPQhIbqWi5Qlwj0dGXsFOrW%2BxT8j%2BbDagNPjaRxcz57cbrQwWKHABNvc4sC449jl1CjiFiSnTTg6rilTBt8Htl3g2fsWQtgPfDBebTE7JVK2LMoS8luYHPCbpWt%2BlA4EmE4FiK5huqFTtaFspMw%2FiMIaRO3SVvKeVxfIZmXCXYHU0zvrHHEna2qIW5zIHthoryCSc8pyO5d1549izLA6nEpkh9jF9j85EM1jO2%2BrZGZed9EcC4l5jZ8E59JfSA1U%2BCYd%2BpWlYUcMdGcz7HtlAcKhrGtTnzsKo8mN5wyaArt8HD9D1wEiz%2BKUmiAI43pUExTh9lMh8Ldl4G3j6Gwsb4PcygilEsKCJyconsppCp%2BVMNZ1ielc%2FGzUfIHx3lKduosPLQYL7brRFXm6EQo76uiJ1g5MjwuqFCDzfjE%2FZLZ02Spc6yLXwEZC14LPjqbjrmPW%2BvzcvAL2a9Is%2FISTwVEESisR5i0hZ%2Bxp0bd2qlzlXty4JX%2BY1%2BFRMl7IIBbeJiEMEYT8n4ISp%2F5Dyyc%2BqPmUxQIEE3KFom9cag3szbMKkxoCohBzzCp6bjJBjqkAVH6XYlwDhp5a3jhY1vPz0cn9XuicVsjVIGYS3KoRLiZa56s5k0lJ4NOvUOSS4durE2K%2FpaR0%2FcTGrCTuKzVe2V%2FLkP%2FaSBrbrGcrvsjjHMy4bwuwU73%2BLEz5s5GfwDpW1MGIqT0oVr5GEKsVC0HcQQfKqaIeCCx4fhhjtGEdTCiRRexvD8OABrs1VYthKZYScEetKmvBzZfjKErL9jht3njxWak&X-Amz-Signature=d379c980a532b799833171eae388abed89724cd16c3f6b8f9f6b0b34afab26f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWUFSKN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T010402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCl4Ugk7kkutlR1lySiZqFuACph%2FGus%2BUrgrZiYBkQ9mQIhAILlkIVS2DTeMSHhQV2QUSscFI0dbSRfxA3Jvn5WjKvSKv8DCAoQABoMNjM3NDIzMTgzODA1IgzL1%2B8uOnJN%2FLe%2F8pwq3AMSc5rIwRe6qGSENRXQY91C427qT5AtTCzXN8njQwnBs7hiH7O5xtwXtOFjMo6ZwPSXtmpNTqPQhIbqWi5Qlwj0dGXsFOrW%2BxT8j%2BbDagNPjaRxcz57cbrQwWKHABNvc4sC449jl1CjiFiSnTTg6rilTBt8Htl3g2fsWQtgPfDBebTE7JVK2LMoS8luYHPCbpWt%2BlA4EmE4FiK5huqFTtaFspMw%2FiMIaRO3SVvKeVxfIZmXCXYHU0zvrHHEna2qIW5zIHthoryCSc8pyO5d1549izLA6nEpkh9jF9j85EM1jO2%2BrZGZed9EcC4l5jZ8E59JfSA1U%2BCYd%2BpWlYUcMdGcz7HtlAcKhrGtTnzsKo8mN5wyaArt8HD9D1wEiz%2BKUmiAI43pUExTh9lMh8Ldl4G3j6Gwsb4PcygilEsKCJyconsppCp%2BVMNZ1ielc%2FGzUfIHx3lKduosPLQYL7brRFXm6EQo76uiJ1g5MjwuqFCDzfjE%2FZLZ02Spc6yLXwEZC14LPjqbjrmPW%2BvzcvAL2a9Is%2FISTwVEESisR5i0hZ%2Bxp0bd2qlzlXty4JX%2BY1%2BFRMl7IIBbeJiEMEYT8n4ISp%2F5Dyyc%2BqPmUxQIEE3KFom9cag3szbMKkxoCohBzzCp6bjJBjqkAVH6XYlwDhp5a3jhY1vPz0cn9XuicVsjVIGYS3KoRLiZa56s5k0lJ4NOvUOSS4durE2K%2FpaR0%2FcTGrCTuKzVe2V%2FLkP%2FaSBrbrGcrvsjjHMy4bwuwU73%2BLEz5s5GfwDpW1MGIqT0oVr5GEKsVC0HcQQfKqaIeCCx4fhhjtGEdTCiRRexvD8OABrs1VYthKZYScEetKmvBzZfjKErL9jht3njxWak&X-Amz-Signature=62e4a1009d4d43d2d3f7b89627c18f72560d54248dc2f1265d7f800b5ca42b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAWUFSKN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T010402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCl4Ugk7kkutlR1lySiZqFuACph%2FGus%2BUrgrZiYBkQ9mQIhAILlkIVS2DTeMSHhQV2QUSscFI0dbSRfxA3Jvn5WjKvSKv8DCAoQABoMNjM3NDIzMTgzODA1IgzL1%2B8uOnJN%2FLe%2F8pwq3AMSc5rIwRe6qGSENRXQY91C427qT5AtTCzXN8njQwnBs7hiH7O5xtwXtOFjMo6ZwPSXtmpNTqPQhIbqWi5Qlwj0dGXsFOrW%2BxT8j%2BbDagNPjaRxcz57cbrQwWKHABNvc4sC449jl1CjiFiSnTTg6rilTBt8Htl3g2fsWQtgPfDBebTE7JVK2LMoS8luYHPCbpWt%2BlA4EmE4FiK5huqFTtaFspMw%2FiMIaRO3SVvKeVxfIZmXCXYHU0zvrHHEna2qIW5zIHthoryCSc8pyO5d1549izLA6nEpkh9jF9j85EM1jO2%2BrZGZed9EcC4l5jZ8E59JfSA1U%2BCYd%2BpWlYUcMdGcz7HtlAcKhrGtTnzsKo8mN5wyaArt8HD9D1wEiz%2BKUmiAI43pUExTh9lMh8Ldl4G3j6Gwsb4PcygilEsKCJyconsppCp%2BVMNZ1ielc%2FGzUfIHx3lKduosPLQYL7brRFXm6EQo76uiJ1g5MjwuqFCDzfjE%2FZLZ02Spc6yLXwEZC14LPjqbjrmPW%2BvzcvAL2a9Is%2FISTwVEESisR5i0hZ%2Bxp0bd2qlzlXty4JX%2BY1%2BFRMl7IIBbeJiEMEYT8n4ISp%2F5Dyyc%2BqPmUxQIEE3KFom9cag3szbMKkxoCohBzzCp6bjJBjqkAVH6XYlwDhp5a3jhY1vPz0cn9XuicVsjVIGYS3KoRLiZa56s5k0lJ4NOvUOSS4durE2K%2FpaR0%2FcTGrCTuKzVe2V%2FLkP%2FaSBrbrGcrvsjjHMy4bwuwU73%2BLEz5s5GfwDpW1MGIqT0oVr5GEKsVC0HcQQfKqaIeCCx4fhhjtGEdTCiRRexvD8OABrs1VYthKZYScEetKmvBzZfjKErL9jht3njxWak&X-Amz-Signature=70b3caa5ae9704ac704f36016798ef27f607db10c3c43d38e1f6432cb5340658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4NGAMV%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T010401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQC9WS6gSgOIP%2FFFcneoO7DWnnDEW4VUHwavE2xoTXdNMQIhAOLNHrHugQ6jSpdKXHSwHIMFoej15MZZFUp9Df%2FRcNKOKv8DCAoQABoMNjM3NDIzMTgzODA1Igz%2FSR1IBllxjmn7dLoq3AP%2BZTkd0J0dQwLQaes9sFpwwJqB6tMzSK9fV0DzSFWkmGcykKNh0FuNKMkSjOILdgvAhEBIggRN%2BI4or1r8DmbSxXq%2BxiZLiyRZxc8%2BQJ6%2BQiO7MQPbHknPwUizdnaJETBMzr2uWVo8rzMBDuSztYHPb%2BX7j7V8hoGs6rTlkoE6RDRITzjdHV7NuoivyIZSbzwgsskrf7XyiHWiGRLj4%2BWyjkvhI9%2BQpo%2FK0pUb9m7Hgg%2F%2Fq5sQu1WX8rO0wxiA5od%2FYUbKzMGwIxuDhyZigL4PwT9ySuHYPYvx2x0rssQ%2F%2FhPKAGaWwRDe79UPTKRhEKLXKmaR8ADqfQOIxY5zoCOlDWICV4ihEqiRlufuTvAhyuPH7iPSAa%2BYtvypPv1W1oyVkoSeQ4rmkf9dD9oDO8K96kuzKAAdX0ekj3HNEc66SNUIm4ZcsDvgfMhc8c%2FrlT2zHz6Bl1Sk07v2Cxt5Ro%2FZVtHcJZKVjwsEpEy56OSvRGAICBV7VYc3hPHlL4mdb%2BX8DwCezvyELVkpwm6up2yy1hgdwfqYu%2BD5Tsju%2BJdfPbuNdzlXfcTQvynZNsEWl8lv5mXhQ7St4%2BauanXBi48D43pcoMq4YjDGG3ApTmGmPUfePdtNPItQ66%2BexDDc6bjJBjqkAWFcfGgQQTkTPxvcystEP8n6iGRl4TXwbQeCXnpDsADhj6SoksXo1yVAKjMjrgR%2Bs5eoPvc9ZkxrdsOGiyzogWundq%2BgZoVLYUx1p%2FiG5YdouCHFxjC72eQ%2FBGUQhKAgapNK8POyTZNa%2BqTursQtDrIIG%2FjBugSXrwPpQzKgX9zuz5giX3c3kozjAwxiQgiYnvt9djBGPcXv2%2FP74Yj8einQZ6Ge&X-Amz-Signature=0aee24a1aa07843582d907ff141041b710b70402a87f4335aa4d1751125384ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

