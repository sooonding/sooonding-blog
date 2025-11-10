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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGUAUI2%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T010504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIC98oWCFR5df4dVUH2v%2BvciUqojHevdZK5v%2BFw92mOIiAiAGqRiz7QbVTaz4ZIve6crimiEqmS1Yj95TUR11%2FgM1tiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ%2F3%2Fc5s2IlDcZ01WKtwDeAKk5nhUp6493%2Fj9C8mIj1W21zdOumsSsOWTcMcBkY9tGkRLZxZG1bLD2DKWowtDq%2BSclXkfT1KpEHCocIDd%2FHgnGDFBleC8kXfyI6qIm92BRk6pp1xYihjxAZr25nttI9%2B%2BoKuHBay7hrGIOVOx4Qg1xY1qsyrVldLLPBvOXuG014gmFv6tHOY4muo%2FyVon5%2BpQT4SCaoyAUr2uIHLLp6%2BxNPIV%2FW2IcFp8Lg0rE0AQSZG0s%2BpqsK9YkqnLJiQm6JC4JPS1RmA7zxymHbKxscDsRVc2HqoXYPt%2B3CsQA3%2F3JcUXk16x%2BFtMGkHcBptgu7pM1ioh0j6vRl%2Femb44pluA5Wz8PsIDnFVypVel%2BZr0XN60HWpILQaiEwIz7aOadEfBskHkhjYSJE7ufsMJeZw81sXjqERbWgb4d75f7bJE6KZ1JMiEWTwAcjw7S8Aljddp0j4PKRw0%2BeVGCHgdnIxkhmd1ZQc9L%2FN19yld94LvLh0XdskslCpRFVVWFiXp%2BSh1o7euE5KE7txjwFGTmZT9xk%2BXOGDI6o%2BNHZLqRLm62zczzwvVTZFC3dzlFNQnGlYIcBC7V3Tw3dfyENSxusfr73NfSu59kRAfC87zlel18om1pbDWC4aBqu0whu7EyAY6pgH7mEBZh9BN%2FtI2gKiQSKJUHoxECnBdF7tyxhe7jNTOn0bxk0jInZW%2BMxezga03Nf2zHyCf6mFrhHaLfCLqqCn0Hmq89XpwwXcf9YnZGhvwVmbcm6%2F4k9oky%2BcHVw3CAqffXPUYO5gTYwTnLaRwMbcXHYHoRj0OPn0dRGv7ceajFuhDbN5XX9VF7gKJ3F3oRwIkCgx0kvsnxzM2Hv%2BTZY4Ehm%2FlPC8R&X-Amz-Signature=41440d7749a7ba8c2f21889130370a0cee87bac80ad5c2558b7e00bdcc7dcda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HRHEBV%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T010505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDUbpvJxvWEtmV1I1Jsf31qf5Rv4ZITvBC0k60MuzmbPAIgErRNz%2FCMXmVwyQSPGdOol86dbVtaZXCdxKJiKJo6eI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwZNPT%2FcHEt8IW1VSrcA8fAFhoU%2F8hAl0q3XyF6fJPHNhkaC1HJS6Z9gFudfGq9BSZRva5NMnfkk07YApvuAWC%2FC0HFMyIfseDRm4DyZ6DowhXnJVkDZ0tEzBBICfPJXMEe9EvAxTD4iyaMBs1hEPJhr58VyWOFnCJ50BT9vTYknYYfV2kck5hQ4h5s2mXLg7E61W2U%2FoGPIdo7yRS4KUW6%2FsejYoWDag4GV%2FrJTyEq8C1CMiakqZOS60UZ5iz%2BWt44r0j4vadNhzVbtm8FIhz5YlaPocJK%2BK8MSzb8wtl7fidn10IOzo8kd1gQY3uUjUQBfK8HpFFTTLqhxFnGHuroDoNidHCZzA9hms8bNdJdtF1kGPD%2BARtnqidfsYsSwo7g1sJ%2F3EBefQkLIxyuO%2BiO7dgEs175dRDwn%2FJ3E0kmwALPSEhYkGoU%2B2ySf44mEnlNF7OUi721FJVtDyX9W5iSLxKCCEBr102z%2Fo0XbqKfOu76wV5gKuf5Gr5kulHlUmujZUGdIg9dqaQ769wefT7hd0PikOtjl6L1Vs2RsnC3ILoHz526oCm%2BLJKfa2%2B8O4z%2B0orFZW3giL7fciGoVeILGLa0lb%2B1bNJJEFQlWm5PgpUSsgXs%2BA%2FQ3CPaG8XItuT5VQEZ%2Bht92t7WMM3vxMgGOqUBYVqF3phRFN5MQlVdNDns41l9E51iHl2ITAhlgGANxfwmgI6%2BMXTh4UMUN8cYauNs0I2uJfCMa21FPXlMTk7KALzAV55oy%2BiLHGrVagcmsu%2FSaLCtnGNCQYQiXjTr%2BzTptTbor%2BomFwaG6aGxMDQ2cUocIqdSxirrASWYvG7X0wOL5G8y4VwMaFP%2FBV7Lr5k8uQ%2BjBrQ3AzHkfa6W%2B0la%2BL3aKVLN&X-Amz-Signature=1f4dc1c35ef5607da720cbb388ba7f2030d35a6712e48237a0d0c8f4d6f4c89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HRHEBV%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T010505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDUbpvJxvWEtmV1I1Jsf31qf5Rv4ZITvBC0k60MuzmbPAIgErRNz%2FCMXmVwyQSPGdOol86dbVtaZXCdxKJiKJo6eI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwZNPT%2FcHEt8IW1VSrcA8fAFhoU%2F8hAl0q3XyF6fJPHNhkaC1HJS6Z9gFudfGq9BSZRva5NMnfkk07YApvuAWC%2FC0HFMyIfseDRm4DyZ6DowhXnJVkDZ0tEzBBICfPJXMEe9EvAxTD4iyaMBs1hEPJhr58VyWOFnCJ50BT9vTYknYYfV2kck5hQ4h5s2mXLg7E61W2U%2FoGPIdo7yRS4KUW6%2FsejYoWDag4GV%2FrJTyEq8C1CMiakqZOS60UZ5iz%2BWt44r0j4vadNhzVbtm8FIhz5YlaPocJK%2BK8MSzb8wtl7fidn10IOzo8kd1gQY3uUjUQBfK8HpFFTTLqhxFnGHuroDoNidHCZzA9hms8bNdJdtF1kGPD%2BARtnqidfsYsSwo7g1sJ%2F3EBefQkLIxyuO%2BiO7dgEs175dRDwn%2FJ3E0kmwALPSEhYkGoU%2B2ySf44mEnlNF7OUi721FJVtDyX9W5iSLxKCCEBr102z%2Fo0XbqKfOu76wV5gKuf5Gr5kulHlUmujZUGdIg9dqaQ769wefT7hd0PikOtjl6L1Vs2RsnC3ILoHz526oCm%2BLJKfa2%2B8O4z%2B0orFZW3giL7fciGoVeILGLa0lb%2B1bNJJEFQlWm5PgpUSsgXs%2BA%2FQ3CPaG8XItuT5VQEZ%2Bht92t7WMM3vxMgGOqUBYVqF3phRFN5MQlVdNDns41l9E51iHl2ITAhlgGANxfwmgI6%2BMXTh4UMUN8cYauNs0I2uJfCMa21FPXlMTk7KALzAV55oy%2BiLHGrVagcmsu%2FSaLCtnGNCQYQiXjTr%2BzTptTbor%2BomFwaG6aGxMDQ2cUocIqdSxirrASWYvG7X0wOL5G8y4VwMaFP%2FBV7Lr5k8uQ%2BjBrQ3AzHkfa6W%2B0la%2BL3aKVLN&X-Amz-Signature=ceeb1855b6f55a595bdf18b24c7d2e9a28abe2de2b89983ce582f5c023a39f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HRHEBV%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T010505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDUbpvJxvWEtmV1I1Jsf31qf5Rv4ZITvBC0k60MuzmbPAIgErRNz%2FCMXmVwyQSPGdOol86dbVtaZXCdxKJiKJo6eI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwZNPT%2FcHEt8IW1VSrcA8fAFhoU%2F8hAl0q3XyF6fJPHNhkaC1HJS6Z9gFudfGq9BSZRva5NMnfkk07YApvuAWC%2FC0HFMyIfseDRm4DyZ6DowhXnJVkDZ0tEzBBICfPJXMEe9EvAxTD4iyaMBs1hEPJhr58VyWOFnCJ50BT9vTYknYYfV2kck5hQ4h5s2mXLg7E61W2U%2FoGPIdo7yRS4KUW6%2FsejYoWDag4GV%2FrJTyEq8C1CMiakqZOS60UZ5iz%2BWt44r0j4vadNhzVbtm8FIhz5YlaPocJK%2BK8MSzb8wtl7fidn10IOzo8kd1gQY3uUjUQBfK8HpFFTTLqhxFnGHuroDoNidHCZzA9hms8bNdJdtF1kGPD%2BARtnqidfsYsSwo7g1sJ%2F3EBefQkLIxyuO%2BiO7dgEs175dRDwn%2FJ3E0kmwALPSEhYkGoU%2B2ySf44mEnlNF7OUi721FJVtDyX9W5iSLxKCCEBr102z%2Fo0XbqKfOu76wV5gKuf5Gr5kulHlUmujZUGdIg9dqaQ769wefT7hd0PikOtjl6L1Vs2RsnC3ILoHz526oCm%2BLJKfa2%2B8O4z%2B0orFZW3giL7fciGoVeILGLa0lb%2B1bNJJEFQlWm5PgpUSsgXs%2BA%2FQ3CPaG8XItuT5VQEZ%2Bht92t7WMM3vxMgGOqUBYVqF3phRFN5MQlVdNDns41l9E51iHl2ITAhlgGANxfwmgI6%2BMXTh4UMUN8cYauNs0I2uJfCMa21FPXlMTk7KALzAV55oy%2BiLHGrVagcmsu%2FSaLCtnGNCQYQiXjTr%2BzTptTbor%2BomFwaG6aGxMDQ2cUocIqdSxirrASWYvG7X0wOL5G8y4VwMaFP%2FBV7Lr5k8uQ%2BjBrQ3AzHkfa6W%2B0la%2BL3aKVLN&X-Amz-Signature=f3a02177481182f74aaa525d9387b79f691b02e224001b8e35ddc1ae4b338b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HRHEBV%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T010505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDUbpvJxvWEtmV1I1Jsf31qf5Rv4ZITvBC0k60MuzmbPAIgErRNz%2FCMXmVwyQSPGdOol86dbVtaZXCdxKJiKJo6eI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwZNPT%2FcHEt8IW1VSrcA8fAFhoU%2F8hAl0q3XyF6fJPHNhkaC1HJS6Z9gFudfGq9BSZRva5NMnfkk07YApvuAWC%2FC0HFMyIfseDRm4DyZ6DowhXnJVkDZ0tEzBBICfPJXMEe9EvAxTD4iyaMBs1hEPJhr58VyWOFnCJ50BT9vTYknYYfV2kck5hQ4h5s2mXLg7E61W2U%2FoGPIdo7yRS4KUW6%2FsejYoWDag4GV%2FrJTyEq8C1CMiakqZOS60UZ5iz%2BWt44r0j4vadNhzVbtm8FIhz5YlaPocJK%2BK8MSzb8wtl7fidn10IOzo8kd1gQY3uUjUQBfK8HpFFTTLqhxFnGHuroDoNidHCZzA9hms8bNdJdtF1kGPD%2BARtnqidfsYsSwo7g1sJ%2F3EBefQkLIxyuO%2BiO7dgEs175dRDwn%2FJ3E0kmwALPSEhYkGoU%2B2ySf44mEnlNF7OUi721FJVtDyX9W5iSLxKCCEBr102z%2Fo0XbqKfOu76wV5gKuf5Gr5kulHlUmujZUGdIg9dqaQ769wefT7hd0PikOtjl6L1Vs2RsnC3ILoHz526oCm%2BLJKfa2%2B8O4z%2B0orFZW3giL7fciGoVeILGLa0lb%2B1bNJJEFQlWm5PgpUSsgXs%2BA%2FQ3CPaG8XItuT5VQEZ%2Bht92t7WMM3vxMgGOqUBYVqF3phRFN5MQlVdNDns41l9E51iHl2ITAhlgGANxfwmgI6%2BMXTh4UMUN8cYauNs0I2uJfCMa21FPXlMTk7KALzAV55oy%2BiLHGrVagcmsu%2FSaLCtnGNCQYQiXjTr%2BzTptTbor%2BomFwaG6aGxMDQ2cUocIqdSxirrASWYvG7X0wOL5G8y4VwMaFP%2FBV7Lr5k8uQ%2BjBrQ3AzHkfa6W%2B0la%2BL3aKVLN&X-Amz-Signature=89040bb64221bad0b6aa8ede94ec81ad590873dd4c93d9a792b4b7eeade3a4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HRHEBV%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T010505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDUbpvJxvWEtmV1I1Jsf31qf5Rv4ZITvBC0k60MuzmbPAIgErRNz%2FCMXmVwyQSPGdOol86dbVtaZXCdxKJiKJo6eI4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwZNPT%2FcHEt8IW1VSrcA8fAFhoU%2F8hAl0q3XyF6fJPHNhkaC1HJS6Z9gFudfGq9BSZRva5NMnfkk07YApvuAWC%2FC0HFMyIfseDRm4DyZ6DowhXnJVkDZ0tEzBBICfPJXMEe9EvAxTD4iyaMBs1hEPJhr58VyWOFnCJ50BT9vTYknYYfV2kck5hQ4h5s2mXLg7E61W2U%2FoGPIdo7yRS4KUW6%2FsejYoWDag4GV%2FrJTyEq8C1CMiakqZOS60UZ5iz%2BWt44r0j4vadNhzVbtm8FIhz5YlaPocJK%2BK8MSzb8wtl7fidn10IOzo8kd1gQY3uUjUQBfK8HpFFTTLqhxFnGHuroDoNidHCZzA9hms8bNdJdtF1kGPD%2BARtnqidfsYsSwo7g1sJ%2F3EBefQkLIxyuO%2BiO7dgEs175dRDwn%2FJ3E0kmwALPSEhYkGoU%2B2ySf44mEnlNF7OUi721FJVtDyX9W5iSLxKCCEBr102z%2Fo0XbqKfOu76wV5gKuf5Gr5kulHlUmujZUGdIg9dqaQ769wefT7hd0PikOtjl6L1Vs2RsnC3ILoHz526oCm%2BLJKfa2%2B8O4z%2B0orFZW3giL7fciGoVeILGLa0lb%2B1bNJJEFQlWm5PgpUSsgXs%2BA%2FQ3CPaG8XItuT5VQEZ%2Bht92t7WMM3vxMgGOqUBYVqF3phRFN5MQlVdNDns41l9E51iHl2ITAhlgGANxfwmgI6%2BMXTh4UMUN8cYauNs0I2uJfCMa21FPXlMTk7KALzAV55oy%2BiLHGrVagcmsu%2FSaLCtnGNCQYQiXjTr%2BzTptTbor%2BomFwaG6aGxMDQ2cUocIqdSxirrASWYvG7X0wOL5G8y4VwMaFP%2FBV7Lr5k8uQ%2BjBrQ3AzHkfa6W%2B0la%2BL3aKVLN&X-Amz-Signature=047b24bd809d9306c4c1f237eca88b136a904a6bc7969eb1a8fba3654ed3d251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGUAUI2%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T010504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIC98oWCFR5df4dVUH2v%2BvciUqojHevdZK5v%2BFw92mOIiAiAGqRiz7QbVTaz4ZIve6crimiEqmS1Yj95TUR11%2FgM1tiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ%2F3%2Fc5s2IlDcZ01WKtwDeAKk5nhUp6493%2Fj9C8mIj1W21zdOumsSsOWTcMcBkY9tGkRLZxZG1bLD2DKWowtDq%2BSclXkfT1KpEHCocIDd%2FHgnGDFBleC8kXfyI6qIm92BRk6pp1xYihjxAZr25nttI9%2B%2BoKuHBay7hrGIOVOx4Qg1xY1qsyrVldLLPBvOXuG014gmFv6tHOY4muo%2FyVon5%2BpQT4SCaoyAUr2uIHLLp6%2BxNPIV%2FW2IcFp8Lg0rE0AQSZG0s%2BpqsK9YkqnLJiQm6JC4JPS1RmA7zxymHbKxscDsRVc2HqoXYPt%2B3CsQA3%2F3JcUXk16x%2BFtMGkHcBptgu7pM1ioh0j6vRl%2Femb44pluA5Wz8PsIDnFVypVel%2BZr0XN60HWpILQaiEwIz7aOadEfBskHkhjYSJE7ufsMJeZw81sXjqERbWgb4d75f7bJE6KZ1JMiEWTwAcjw7S8Aljddp0j4PKRw0%2BeVGCHgdnIxkhmd1ZQc9L%2FN19yld94LvLh0XdskslCpRFVVWFiXp%2BSh1o7euE5KE7txjwFGTmZT9xk%2BXOGDI6o%2BNHZLqRLm62zczzwvVTZFC3dzlFNQnGlYIcBC7V3Tw3dfyENSxusfr73NfSu59kRAfC87zlel18om1pbDWC4aBqu0whu7EyAY6pgH7mEBZh9BN%2FtI2gKiQSKJUHoxECnBdF7tyxhe7jNTOn0bxk0jInZW%2BMxezga03Nf2zHyCf6mFrhHaLfCLqqCn0Hmq89XpwwXcf9YnZGhvwVmbcm6%2F4k9oky%2BcHVw3CAqffXPUYO5gTYwTnLaRwMbcXHYHoRj0OPn0dRGv7ceajFuhDbN5XX9VF7gKJ3F3oRwIkCgx0kvsnxzM2Hv%2BTZY4Ehm%2FlPC8R&X-Amz-Signature=1252f6d3c564e0c30fe3bf6e54ba1934c943f826a0d693205e0e1f94d0c7393d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

