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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3OGSCB%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4xZ6f4j7gSperSuqSwRdprLSbS%2BG2GTs%2F7kncgAEo1AiA8i1Sb9MCMi0CvRHL9l%2BaTyL%2FjZpaJfhzP2WKBfRHzhCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9Sl%2FGSiS2SDf06gKtwDzsdV%2Fu%2FCRTcfyuV3aV%2BuS31iqFFjkRmpG%2BHDvciju2AAEZqUov5CXs2zT2A4j%2FYwTfZEk%2FEViBmu0yoAxxPscdlP%2FfwkMWnVmL7Qb97DWV0Z2%2BUTE7Q%2BodzFLWwKYq7Cefui9JzeFepHWJgTPkH5BCOxZCccPF79Jt9x5tCnGKZUF36nLd5rzt%2FaeHD2LprV%2F7wOdj6hygWTy4xGPzmpNLQMb%2BZVK3eMYOyCy5gquBK0LbLF7jsgZW7eAQI%2B3f4nSxLZyFQlG8K13kSl6BJ7Lef2eS%2FtAgSIIBOfPVHGN1PdoGZQLbnM5pzSwariXCmCZ87Eeh%2BFsV7FIGk%2FmRYBDrwVN8%2FBnUVl0efGYdYYZ7eoMIN5bCOQKsTNjbkRRP8JQqBhxaNXuW3i6I%2FWndfcUkanuPFSdL%2FKMRdIjKr%2BI558fwGUoiDRy3wI%2FjxHZr0GGfBOrwn9HBZm%2BAXa05cjCLfONTl7N5R8QjBK6PUYCGS83xNQSzisHN69zR6yeW0gOWKAEfP0b8JN82NKtT5xF4%2BxG%2B0oU%2Fhl7I%2FBmiHaLrz9xVsS01GLFIw97949si2ANu4j44u1K%2BoC1zbG%2B5MtCVIxtQeoJOwWla0dvqRvPDVD%2BvxQIv4Ue57BrcAw%2B7qeyQY6pgEHgzSsgkYOE%2Bmrjy4r7Bj4klNmtZUd1sCb%2FmGf7J9zEsBPIxWIjMi6ImsR1IyYado4A%2FUjyJPZ3mgZscSjorzl3RdRdW%2FMuw%2BRRx9MIccyhMletRvJOKQz4qMF85cMKsdVJ0LDfcwyaHsHbYqt%2FIDH5tAfeKQvO9udWHknwobiVLmCpjNLGqL%2Fwh20JoeDEgdoypggaQf209N7y2AbVc4z5P9ocmA2&X-Amz-Signature=595e932e5fc7e6fca98b17e224acf955d78d85168ce1999f425ae540428c9d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YFDSNN%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7k2cX%2FBs5JmqloZNN0Xyvoe31v%2FLA4cyHQEhqd%2FEDwAiEAj%2Fy9Axu8T%2FCrDp66mUvU8mjzl9lStO84bEXpvrrOTwMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJKJ13Qydthugp1jCrcA8Wqqda4rKcfXsGkqOXPEteP7Q%2Bq%2FNPWRZbKZVLfMQkVg1Ut%2BVOzlvdcfhN6DqgXrLwGpgrt9815hTap2gxbqSRz5EBmfHTMTv03jz4kO7%2FJxDiJsCwHdNRt5%2FfiRv0tQnrWhjUhepl%2BTtxXwuyBU7kYzCV%2BdvkPtHBgIKNVFx4%2BR0k81O4CrfENEv4aC9Lt9aBh6uHpFy0sa1yGQdAOtYAzDk2EM%2FD0A6cswVwFQONdUxzoM1CKjP2qTPG%2F%2BENimZzS337WjdS9GD%2B8cB0yJMSCDDVVbK125b6nk6kJ0jNMl%2BBUSBAQnxmh4XSNdhbRp3tCEY6SQZM86b52xnqQ6n3XrYH9AwJtb%2BKq7qtt%2FfIVYicRKxz1DOwIKRBhIh2xp22gJ4FtFy2GtR7T6%2BJ0XcD1NBYWBhfQTLnoNpl44zyeZyE7XZokLaMnRa0HyukD55EtDbjEPjwVEnVPjDo1rk%2FRBnu4MiQNTebVwFH7BoJGmH6Teu4a10mBBNX2j%2FdeDQ3XSv4a4EzyAcE8LXDH1hNNqz88Vsmz%2FBFzBZvecfCUEh155qYXMq92foOhxzUwg7l8Yd22I7XvOsHCaBDsudmtLM4kPw4ec8qC4TO5mq5LpEn5vRUkKd%2FTf0UgMPC4nskGOqUBDF5w2KuQA4wJkeTFf9bV2pu%2BIKEG1Q6ceWjSu20VZy7iTO6IQTFlIgC7MxxWtAdm%2BuMshT3apcF6aIovQLR2gG8O%2BgPMkit24A9bVhL%2FCfQv4knyhXcG5ARZOXtBBQwfMftCyw5txmtNBhDtaHCmAsFCZ3JM9qILDB8N8ppp1GHGaS1PWz9h3i58BXRYEE%2BF4owNDRk9JZ0zk3vk9%2BSTUvA3UsWN&X-Amz-Signature=25b5e780231e8c28a32618d01f5a781bbbc3bffa982cca84b6d856c80fdf94c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YFDSNN%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7k2cX%2FBs5JmqloZNN0Xyvoe31v%2FLA4cyHQEhqd%2FEDwAiEAj%2Fy9Axu8T%2FCrDp66mUvU8mjzl9lStO84bEXpvrrOTwMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJKJ13Qydthugp1jCrcA8Wqqda4rKcfXsGkqOXPEteP7Q%2Bq%2FNPWRZbKZVLfMQkVg1Ut%2BVOzlvdcfhN6DqgXrLwGpgrt9815hTap2gxbqSRz5EBmfHTMTv03jz4kO7%2FJxDiJsCwHdNRt5%2FfiRv0tQnrWhjUhepl%2BTtxXwuyBU7kYzCV%2BdvkPtHBgIKNVFx4%2BR0k81O4CrfENEv4aC9Lt9aBh6uHpFy0sa1yGQdAOtYAzDk2EM%2FD0A6cswVwFQONdUxzoM1CKjP2qTPG%2F%2BENimZzS337WjdS9GD%2B8cB0yJMSCDDVVbK125b6nk6kJ0jNMl%2BBUSBAQnxmh4XSNdhbRp3tCEY6SQZM86b52xnqQ6n3XrYH9AwJtb%2BKq7qtt%2FfIVYicRKxz1DOwIKRBhIh2xp22gJ4FtFy2GtR7T6%2BJ0XcD1NBYWBhfQTLnoNpl44zyeZyE7XZokLaMnRa0HyukD55EtDbjEPjwVEnVPjDo1rk%2FRBnu4MiQNTebVwFH7BoJGmH6Teu4a10mBBNX2j%2FdeDQ3XSv4a4EzyAcE8LXDH1hNNqz88Vsmz%2FBFzBZvecfCUEh155qYXMq92foOhxzUwg7l8Yd22I7XvOsHCaBDsudmtLM4kPw4ec8qC4TO5mq5LpEn5vRUkKd%2FTf0UgMPC4nskGOqUBDF5w2KuQA4wJkeTFf9bV2pu%2BIKEG1Q6ceWjSu20VZy7iTO6IQTFlIgC7MxxWtAdm%2BuMshT3apcF6aIovQLR2gG8O%2BgPMkit24A9bVhL%2FCfQv4knyhXcG5ARZOXtBBQwfMftCyw5txmtNBhDtaHCmAsFCZ3JM9qILDB8N8ppp1GHGaS1PWz9h3i58BXRYEE%2BF4owNDRk9JZ0zk3vk9%2BSTUvA3UsWN&X-Amz-Signature=3f1f3b8473988615cd02ffa74aeeeeb61d5b6240cc6beadb29492e2b6092f32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YFDSNN%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7k2cX%2FBs5JmqloZNN0Xyvoe31v%2FLA4cyHQEhqd%2FEDwAiEAj%2Fy9Axu8T%2FCrDp66mUvU8mjzl9lStO84bEXpvrrOTwMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJKJ13Qydthugp1jCrcA8Wqqda4rKcfXsGkqOXPEteP7Q%2Bq%2FNPWRZbKZVLfMQkVg1Ut%2BVOzlvdcfhN6DqgXrLwGpgrt9815hTap2gxbqSRz5EBmfHTMTv03jz4kO7%2FJxDiJsCwHdNRt5%2FfiRv0tQnrWhjUhepl%2BTtxXwuyBU7kYzCV%2BdvkPtHBgIKNVFx4%2BR0k81O4CrfENEv4aC9Lt9aBh6uHpFy0sa1yGQdAOtYAzDk2EM%2FD0A6cswVwFQONdUxzoM1CKjP2qTPG%2F%2BENimZzS337WjdS9GD%2B8cB0yJMSCDDVVbK125b6nk6kJ0jNMl%2BBUSBAQnxmh4XSNdhbRp3tCEY6SQZM86b52xnqQ6n3XrYH9AwJtb%2BKq7qtt%2FfIVYicRKxz1DOwIKRBhIh2xp22gJ4FtFy2GtR7T6%2BJ0XcD1NBYWBhfQTLnoNpl44zyeZyE7XZokLaMnRa0HyukD55EtDbjEPjwVEnVPjDo1rk%2FRBnu4MiQNTebVwFH7BoJGmH6Teu4a10mBBNX2j%2FdeDQ3XSv4a4EzyAcE8LXDH1hNNqz88Vsmz%2FBFzBZvecfCUEh155qYXMq92foOhxzUwg7l8Yd22I7XvOsHCaBDsudmtLM4kPw4ec8qC4TO5mq5LpEn5vRUkKd%2FTf0UgMPC4nskGOqUBDF5w2KuQA4wJkeTFf9bV2pu%2BIKEG1Q6ceWjSu20VZy7iTO6IQTFlIgC7MxxWtAdm%2BuMshT3apcF6aIovQLR2gG8O%2BgPMkit24A9bVhL%2FCfQv4knyhXcG5ARZOXtBBQwfMftCyw5txmtNBhDtaHCmAsFCZ3JM9qILDB8N8ppp1GHGaS1PWz9h3i58BXRYEE%2BF4owNDRk9JZ0zk3vk9%2BSTUvA3UsWN&X-Amz-Signature=ae537ab1120a6a3c2c4b4bd2b13f9fa3209774c82e3d1ef35a05d670f82e34e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YFDSNN%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7k2cX%2FBs5JmqloZNN0Xyvoe31v%2FLA4cyHQEhqd%2FEDwAiEAj%2Fy9Axu8T%2FCrDp66mUvU8mjzl9lStO84bEXpvrrOTwMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJKJ13Qydthugp1jCrcA8Wqqda4rKcfXsGkqOXPEteP7Q%2Bq%2FNPWRZbKZVLfMQkVg1Ut%2BVOzlvdcfhN6DqgXrLwGpgrt9815hTap2gxbqSRz5EBmfHTMTv03jz4kO7%2FJxDiJsCwHdNRt5%2FfiRv0tQnrWhjUhepl%2BTtxXwuyBU7kYzCV%2BdvkPtHBgIKNVFx4%2BR0k81O4CrfENEv4aC9Lt9aBh6uHpFy0sa1yGQdAOtYAzDk2EM%2FD0A6cswVwFQONdUxzoM1CKjP2qTPG%2F%2BENimZzS337WjdS9GD%2B8cB0yJMSCDDVVbK125b6nk6kJ0jNMl%2BBUSBAQnxmh4XSNdhbRp3tCEY6SQZM86b52xnqQ6n3XrYH9AwJtb%2BKq7qtt%2FfIVYicRKxz1DOwIKRBhIh2xp22gJ4FtFy2GtR7T6%2BJ0XcD1NBYWBhfQTLnoNpl44zyeZyE7XZokLaMnRa0HyukD55EtDbjEPjwVEnVPjDo1rk%2FRBnu4MiQNTebVwFH7BoJGmH6Teu4a10mBBNX2j%2FdeDQ3XSv4a4EzyAcE8LXDH1hNNqz88Vsmz%2FBFzBZvecfCUEh155qYXMq92foOhxzUwg7l8Yd22I7XvOsHCaBDsudmtLM4kPw4ec8qC4TO5mq5LpEn5vRUkKd%2FTf0UgMPC4nskGOqUBDF5w2KuQA4wJkeTFf9bV2pu%2BIKEG1Q6ceWjSu20VZy7iTO6IQTFlIgC7MxxWtAdm%2BuMshT3apcF6aIovQLR2gG8O%2BgPMkit24A9bVhL%2FCfQv4knyhXcG5ARZOXtBBQwfMftCyw5txmtNBhDtaHCmAsFCZ3JM9qILDB8N8ppp1GHGaS1PWz9h3i58BXRYEE%2BF4owNDRk9JZ0zk3vk9%2BSTUvA3UsWN&X-Amz-Signature=c7e41d92b021a45fd8093da7ec5cf7c6aa2532db410e1221bc514434cc190841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YFDSNN%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7k2cX%2FBs5JmqloZNN0Xyvoe31v%2FLA4cyHQEhqd%2FEDwAiEAj%2Fy9Axu8T%2FCrDp66mUvU8mjzl9lStO84bEXpvrrOTwMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJKJ13Qydthugp1jCrcA8Wqqda4rKcfXsGkqOXPEteP7Q%2Bq%2FNPWRZbKZVLfMQkVg1Ut%2BVOzlvdcfhN6DqgXrLwGpgrt9815hTap2gxbqSRz5EBmfHTMTv03jz4kO7%2FJxDiJsCwHdNRt5%2FfiRv0tQnrWhjUhepl%2BTtxXwuyBU7kYzCV%2BdvkPtHBgIKNVFx4%2BR0k81O4CrfENEv4aC9Lt9aBh6uHpFy0sa1yGQdAOtYAzDk2EM%2FD0A6cswVwFQONdUxzoM1CKjP2qTPG%2F%2BENimZzS337WjdS9GD%2B8cB0yJMSCDDVVbK125b6nk6kJ0jNMl%2BBUSBAQnxmh4XSNdhbRp3tCEY6SQZM86b52xnqQ6n3XrYH9AwJtb%2BKq7qtt%2FfIVYicRKxz1DOwIKRBhIh2xp22gJ4FtFy2GtR7T6%2BJ0XcD1NBYWBhfQTLnoNpl44zyeZyE7XZokLaMnRa0HyukD55EtDbjEPjwVEnVPjDo1rk%2FRBnu4MiQNTebVwFH7BoJGmH6Teu4a10mBBNX2j%2FdeDQ3XSv4a4EzyAcE8LXDH1hNNqz88Vsmz%2FBFzBZvecfCUEh155qYXMq92foOhxzUwg7l8Yd22I7XvOsHCaBDsudmtLM4kPw4ec8qC4TO5mq5LpEn5vRUkKd%2FTf0UgMPC4nskGOqUBDF5w2KuQA4wJkeTFf9bV2pu%2BIKEG1Q6ceWjSu20VZy7iTO6IQTFlIgC7MxxWtAdm%2BuMshT3apcF6aIovQLR2gG8O%2BgPMkit24A9bVhL%2FCfQv4knyhXcG5ARZOXtBBQwfMftCyw5txmtNBhDtaHCmAsFCZ3JM9qILDB8N8ppp1GHGaS1PWz9h3i58BXRYEE%2BF4owNDRk9JZ0zk3vk9%2BSTUvA3UsWN&X-Amz-Signature=c8dd4ac979600e6d3afc2e80f4289c735f7b958e3b2e2f4266e078ed777dde40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3OGSCB%2F20251127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251127T010200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4xZ6f4j7gSperSuqSwRdprLSbS%2BG2GTs%2F7kncgAEo1AiA8i1Sb9MCMi0CvRHL9l%2BaTyL%2FjZpaJfhzP2WKBfRHzhCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9Sl%2FGSiS2SDf06gKtwDzsdV%2Fu%2FCRTcfyuV3aV%2BuS31iqFFjkRmpG%2BHDvciju2AAEZqUov5CXs2zT2A4j%2FYwTfZEk%2FEViBmu0yoAxxPscdlP%2FfwkMWnVmL7Qb97DWV0Z2%2BUTE7Q%2BodzFLWwKYq7Cefui9JzeFepHWJgTPkH5BCOxZCccPF79Jt9x5tCnGKZUF36nLd5rzt%2FaeHD2LprV%2F7wOdj6hygWTy4xGPzmpNLQMb%2BZVK3eMYOyCy5gquBK0LbLF7jsgZW7eAQI%2B3f4nSxLZyFQlG8K13kSl6BJ7Lef2eS%2FtAgSIIBOfPVHGN1PdoGZQLbnM5pzSwariXCmCZ87Eeh%2BFsV7FIGk%2FmRYBDrwVN8%2FBnUVl0efGYdYYZ7eoMIN5bCOQKsTNjbkRRP8JQqBhxaNXuW3i6I%2FWndfcUkanuPFSdL%2FKMRdIjKr%2BI558fwGUoiDRy3wI%2FjxHZr0GGfBOrwn9HBZm%2BAXa05cjCLfONTl7N5R8QjBK6PUYCGS83xNQSzisHN69zR6yeW0gOWKAEfP0b8JN82NKtT5xF4%2BxG%2B0oU%2Fhl7I%2FBmiHaLrz9xVsS01GLFIw97949si2ANu4j44u1K%2BoC1zbG%2B5MtCVIxtQeoJOwWla0dvqRvPDVD%2BvxQIv4Ue57BrcAw%2B7qeyQY6pgEHgzSsgkYOE%2Bmrjy4r7Bj4klNmtZUd1sCb%2FmGf7J9zEsBPIxWIjMi6ImsR1IyYado4A%2FUjyJPZ3mgZscSjorzl3RdRdW%2FMuw%2BRRx9MIccyhMletRvJOKQz4qMF85cMKsdVJ0LDfcwyaHsHbYqt%2FIDH5tAfeKQvO9udWHknwobiVLmCpjNLGqL%2Fwh20JoeDEgdoypggaQf209N7y2AbVc4z5P9ocmA2&X-Amz-Signature=376ff9f707f9f32afc1232dacaa729d8a85bc731af8e501b93151863da315cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

