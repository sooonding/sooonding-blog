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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624UWOBK%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICT11PTkcwxin4FAAkmT3kn09yymizdJ6psQBrmjknEaAiBCGpwyqIYKCBLOjOvfJBPzzQ1Lm0LmrYP4qT6UIMA7viqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2F6DZrfNGw98tHPLKtwDFlPHdKQUtfMZw9tdOwrlS97lFt%2BTQEEMV2SHKGBbcflfynEI0mWg%2F6xUS7mcbs%2BxgWL8R1LtRQKQknNAxhJkSrnygG5dwKy6MsHpkBCN6x7lxi6SiIyOo4u7%2BVb%2FLQ0lc%2BVLzergdRIGMtlSdJz5MKyaIPwLA8EOpUoIgfbyS7r0Pcr6vt3x6aEAGHgNICSCe3I3AWhthqaPuUiTuEbdBVa5i9%2F4jOGTZdSrc7cmmGDCwjoEc7iBa4vxFyNN1ollEMkFQXvh6FdGsuEgqYi7Y9%2BWn%2FYmr%2Fa%2FIaXMgCeCodg1OPR%2FyOq21SKzluXStbke1FFUwaf1UstUnyeUOwm13C9Vi8gdPC2hI8vppu3Jyb1RRRU9GnkX30auHZz1mkTeGCVTxqA5iqnGZIx3DypXE0EnGB8bc%2FeLk5rpX7K0tHYT3RXfXFb%2BSjXRGN%2FmpoA1XpBN%2BQnbrP%2F5Z7Qo65mDpiwpVlAQG0KPjTX3iazKCDPStuIjWM6%2BnCYZqQqqFYumgEM9CELAu%2Bbg1DVk0WgwqHUyD%2F4rBgzL%2BkAeYd9Zj36t8JHcN%2FiFjxl1SrEIJx%2BEy1Cyql7N0qGZq6fq%2FGG1pm1fof01A3eGBeliYgdm3A%2FIqXwh42RDUqjshigwm5bMzgY6pgHZFoMedusma7bQM9notKu0uKUcy1hPJBadhdepotKkTmWgPpkATIrC%2B5o5ZYesL%2FvDaober%2F2falPoxZQzoKRH%2FCMQJigR4yqzHgIboDC82b10isTMhX%2BPg883enIR2hdy1qviYZfkKtC7wcCeRTTaoorsTp9WAXVpVii5p7WYPWxuo%2BJnu07WTcgw83lgmlHVD483KzaLbInmx6SQs0DA7dbNV%2Bsp&X-Amz-Signature=47a2156b916f626272e8852365032bae5dbdf84c988c013d5e3a175ae2f17e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCKXFNJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1QbcXq2%2Fn%2FFp38w9DZMdqu7Fyt6DG8HakZ38sHWZ3FAiBpTmTLwjQ99uJp5LtwqGBjn2pMUO0VYDC1UL6HMpHihiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94p0v0B%2Bru2cXOGTKtwD9IcL2OJmPLLmgEKbfQABeQKs8KCkQku4hOPTlfdQamHT3Ebm43vC9OmhW529ZlOuZExZGfmdKAO6GQKhgbvVlt2%2FcjmX1UVbboxh3aK9laFC07xatevkxcWeXyLyIiClomdAG%2FPf4i6PuZBEu3Fah2FGlRsQM8FTzQ1CePx1WB1cEdE6dkV3bqukLP8akPbv8xDzxPPU93Ddc3Meok%2FeTwMX3%2F%2FPI7czeQGC7qRtgcbzlRbc2gXqUSzuDWRZsOFZx1S9aBc0nd2%2FvEcigwT7hyHFXWQVOvxvuZ%2BixYj6zwdKl09U%2BIZAj1xs5PWuciZa%2F16uH4VJdTJNZLXEP2eywk5IdgrUsWwMi2bww0acpub5yu2Ojm%2F%2BmodYeXv7W2EbXwyO2jQsTc0yZr95mtGQaGxoH9EqOjiT2lBjOFExDzKILuf2mcNQ98RSq%2FCmpc2PBFHyh58iMjUJ%2FLasXmVhG18FJqeXAVOvffreJ6dkQv4MP0Y%2Bcjzd%2FWzkUB3J75JiHlHkKPsXLFCTUGOyvU1Y5PfpZAx7Qymq%2BHfqPNkPHed2udltTb9LWsYLrwjCPyhKhKGBVOYC8OY47yZ5PquIarpJPjauVrnVoaCXcwflqgWkR0bFge18F7XYbGQw0pXMzgY6pgFXXCAw2NcOJp%2BAqYjfzAw2u3L4o0hp1iF2oZy78VeU7gCbGtlClgVaEJ22T%2FDpfvzv1aHoe1tsQqBlFzeDCSAoPQ6Tr8IaTXFs60pftGx3QNT5%2FWTVTjNCVVb1JYtdyabB0bhCgdgD8l36q4RCbCbLW97ggWKS%2BswPL7dcsOEFmM11tsSo%2BJpGIbx3BRfLq4RdNNB4Hfr8S9VdMSTyzmK66ImSDe4f&X-Amz-Signature=2f1d2ebbfa60a2906d5bb240fac5c26f59b58310125b2e9fba3461026162ace2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCKXFNJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1QbcXq2%2Fn%2FFp38w9DZMdqu7Fyt6DG8HakZ38sHWZ3FAiBpTmTLwjQ99uJp5LtwqGBjn2pMUO0VYDC1UL6HMpHihiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94p0v0B%2Bru2cXOGTKtwD9IcL2OJmPLLmgEKbfQABeQKs8KCkQku4hOPTlfdQamHT3Ebm43vC9OmhW529ZlOuZExZGfmdKAO6GQKhgbvVlt2%2FcjmX1UVbboxh3aK9laFC07xatevkxcWeXyLyIiClomdAG%2FPf4i6PuZBEu3Fah2FGlRsQM8FTzQ1CePx1WB1cEdE6dkV3bqukLP8akPbv8xDzxPPU93Ddc3Meok%2FeTwMX3%2F%2FPI7czeQGC7qRtgcbzlRbc2gXqUSzuDWRZsOFZx1S9aBc0nd2%2FvEcigwT7hyHFXWQVOvxvuZ%2BixYj6zwdKl09U%2BIZAj1xs5PWuciZa%2F16uH4VJdTJNZLXEP2eywk5IdgrUsWwMi2bww0acpub5yu2Ojm%2F%2BmodYeXv7W2EbXwyO2jQsTc0yZr95mtGQaGxoH9EqOjiT2lBjOFExDzKILuf2mcNQ98RSq%2FCmpc2PBFHyh58iMjUJ%2FLasXmVhG18FJqeXAVOvffreJ6dkQv4MP0Y%2Bcjzd%2FWzkUB3J75JiHlHkKPsXLFCTUGOyvU1Y5PfpZAx7Qymq%2BHfqPNkPHed2udltTb9LWsYLrwjCPyhKhKGBVOYC8OY47yZ5PquIarpJPjauVrnVoaCXcwflqgWkR0bFge18F7XYbGQw0pXMzgY6pgFXXCAw2NcOJp%2BAqYjfzAw2u3L4o0hp1iF2oZy78VeU7gCbGtlClgVaEJ22T%2FDpfvzv1aHoe1tsQqBlFzeDCSAoPQ6Tr8IaTXFs60pftGx3QNT5%2FWTVTjNCVVb1JYtdyabB0bhCgdgD8l36q4RCbCbLW97ggWKS%2BswPL7dcsOEFmM11tsSo%2BJpGIbx3BRfLq4RdNNB4Hfr8S9VdMSTyzmK66ImSDe4f&X-Amz-Signature=84b15814f40fc7519eaa1644ae00564ea91840309cde1b3cb963f3399cb2385d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCKXFNJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1QbcXq2%2Fn%2FFp38w9DZMdqu7Fyt6DG8HakZ38sHWZ3FAiBpTmTLwjQ99uJp5LtwqGBjn2pMUO0VYDC1UL6HMpHihiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94p0v0B%2Bru2cXOGTKtwD9IcL2OJmPLLmgEKbfQABeQKs8KCkQku4hOPTlfdQamHT3Ebm43vC9OmhW529ZlOuZExZGfmdKAO6GQKhgbvVlt2%2FcjmX1UVbboxh3aK9laFC07xatevkxcWeXyLyIiClomdAG%2FPf4i6PuZBEu3Fah2FGlRsQM8FTzQ1CePx1WB1cEdE6dkV3bqukLP8akPbv8xDzxPPU93Ddc3Meok%2FeTwMX3%2F%2FPI7czeQGC7qRtgcbzlRbc2gXqUSzuDWRZsOFZx1S9aBc0nd2%2FvEcigwT7hyHFXWQVOvxvuZ%2BixYj6zwdKl09U%2BIZAj1xs5PWuciZa%2F16uH4VJdTJNZLXEP2eywk5IdgrUsWwMi2bww0acpub5yu2Ojm%2F%2BmodYeXv7W2EbXwyO2jQsTc0yZr95mtGQaGxoH9EqOjiT2lBjOFExDzKILuf2mcNQ98RSq%2FCmpc2PBFHyh58iMjUJ%2FLasXmVhG18FJqeXAVOvffreJ6dkQv4MP0Y%2Bcjzd%2FWzkUB3J75JiHlHkKPsXLFCTUGOyvU1Y5PfpZAx7Qymq%2BHfqPNkPHed2udltTb9LWsYLrwjCPyhKhKGBVOYC8OY47yZ5PquIarpJPjauVrnVoaCXcwflqgWkR0bFge18F7XYbGQw0pXMzgY6pgFXXCAw2NcOJp%2BAqYjfzAw2u3L4o0hp1iF2oZy78VeU7gCbGtlClgVaEJ22T%2FDpfvzv1aHoe1tsQqBlFzeDCSAoPQ6Tr8IaTXFs60pftGx3QNT5%2FWTVTjNCVVb1JYtdyabB0bhCgdgD8l36q4RCbCbLW97ggWKS%2BswPL7dcsOEFmM11tsSo%2BJpGIbx3BRfLq4RdNNB4Hfr8S9VdMSTyzmK66ImSDe4f&X-Amz-Signature=8bc796cc86e85bb7490f9992895c4df0c333e41a06d87028392e61953d4eb7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCKXFNJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1QbcXq2%2Fn%2FFp38w9DZMdqu7Fyt6DG8HakZ38sHWZ3FAiBpTmTLwjQ99uJp5LtwqGBjn2pMUO0VYDC1UL6HMpHihiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94p0v0B%2Bru2cXOGTKtwD9IcL2OJmPLLmgEKbfQABeQKs8KCkQku4hOPTlfdQamHT3Ebm43vC9OmhW529ZlOuZExZGfmdKAO6GQKhgbvVlt2%2FcjmX1UVbboxh3aK9laFC07xatevkxcWeXyLyIiClomdAG%2FPf4i6PuZBEu3Fah2FGlRsQM8FTzQ1CePx1WB1cEdE6dkV3bqukLP8akPbv8xDzxPPU93Ddc3Meok%2FeTwMX3%2F%2FPI7czeQGC7qRtgcbzlRbc2gXqUSzuDWRZsOFZx1S9aBc0nd2%2FvEcigwT7hyHFXWQVOvxvuZ%2BixYj6zwdKl09U%2BIZAj1xs5PWuciZa%2F16uH4VJdTJNZLXEP2eywk5IdgrUsWwMi2bww0acpub5yu2Ojm%2F%2BmodYeXv7W2EbXwyO2jQsTc0yZr95mtGQaGxoH9EqOjiT2lBjOFExDzKILuf2mcNQ98RSq%2FCmpc2PBFHyh58iMjUJ%2FLasXmVhG18FJqeXAVOvffreJ6dkQv4MP0Y%2Bcjzd%2FWzkUB3J75JiHlHkKPsXLFCTUGOyvU1Y5PfpZAx7Qymq%2BHfqPNkPHed2udltTb9LWsYLrwjCPyhKhKGBVOYC8OY47yZ5PquIarpJPjauVrnVoaCXcwflqgWkR0bFge18F7XYbGQw0pXMzgY6pgFXXCAw2NcOJp%2BAqYjfzAw2u3L4o0hp1iF2oZy78VeU7gCbGtlClgVaEJ22T%2FDpfvzv1aHoe1tsQqBlFzeDCSAoPQ6Tr8IaTXFs60pftGx3QNT5%2FWTVTjNCVVb1JYtdyabB0bhCgdgD8l36q4RCbCbLW97ggWKS%2BswPL7dcsOEFmM11tsSo%2BJpGIbx3BRfLq4RdNNB4Hfr8S9VdMSTyzmK66ImSDe4f&X-Amz-Signature=a6eb80e1f1746b5c9c583a3b07af2e7d728d8b349443aa1fd5d993b4ad5245da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCKXFNJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1QbcXq2%2Fn%2FFp38w9DZMdqu7Fyt6DG8HakZ38sHWZ3FAiBpTmTLwjQ99uJp5LtwqGBjn2pMUO0VYDC1UL6HMpHihiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM94p0v0B%2Bru2cXOGTKtwD9IcL2OJmPLLmgEKbfQABeQKs8KCkQku4hOPTlfdQamHT3Ebm43vC9OmhW529ZlOuZExZGfmdKAO6GQKhgbvVlt2%2FcjmX1UVbboxh3aK9laFC07xatevkxcWeXyLyIiClomdAG%2FPf4i6PuZBEu3Fah2FGlRsQM8FTzQ1CePx1WB1cEdE6dkV3bqukLP8akPbv8xDzxPPU93Ddc3Meok%2FeTwMX3%2F%2FPI7czeQGC7qRtgcbzlRbc2gXqUSzuDWRZsOFZx1S9aBc0nd2%2FvEcigwT7hyHFXWQVOvxvuZ%2BixYj6zwdKl09U%2BIZAj1xs5PWuciZa%2F16uH4VJdTJNZLXEP2eywk5IdgrUsWwMi2bww0acpub5yu2Ojm%2F%2BmodYeXv7W2EbXwyO2jQsTc0yZr95mtGQaGxoH9EqOjiT2lBjOFExDzKILuf2mcNQ98RSq%2FCmpc2PBFHyh58iMjUJ%2FLasXmVhG18FJqeXAVOvffreJ6dkQv4MP0Y%2Bcjzd%2FWzkUB3J75JiHlHkKPsXLFCTUGOyvU1Y5PfpZAx7Qymq%2BHfqPNkPHed2udltTb9LWsYLrwjCPyhKhKGBVOYC8OY47yZ5PquIarpJPjauVrnVoaCXcwflqgWkR0bFge18F7XYbGQw0pXMzgY6pgFXXCAw2NcOJp%2BAqYjfzAw2u3L4o0hp1iF2oZy78VeU7gCbGtlClgVaEJ22T%2FDpfvzv1aHoe1tsQqBlFzeDCSAoPQ6Tr8IaTXFs60pftGx3QNT5%2FWTVTjNCVVb1JYtdyabB0bhCgdgD8l36q4RCbCbLW97ggWKS%2BswPL7dcsOEFmM11tsSo%2BJpGIbx3BRfLq4RdNNB4Hfr8S9VdMSTyzmK66ImSDe4f&X-Amz-Signature=ca5bc3d1547ad9d88937bb98225f9b5b9a2fff9c5b61d05058f3fd7f9b3adec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624UWOBK%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICT11PTkcwxin4FAAkmT3kn09yymizdJ6psQBrmjknEaAiBCGpwyqIYKCBLOjOvfJBPzzQ1Lm0LmrYP4qT6UIMA7viqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2F6DZrfNGw98tHPLKtwDFlPHdKQUtfMZw9tdOwrlS97lFt%2BTQEEMV2SHKGBbcflfynEI0mWg%2F6xUS7mcbs%2BxgWL8R1LtRQKQknNAxhJkSrnygG5dwKy6MsHpkBCN6x7lxi6SiIyOo4u7%2BVb%2FLQ0lc%2BVLzergdRIGMtlSdJz5MKyaIPwLA8EOpUoIgfbyS7r0Pcr6vt3x6aEAGHgNICSCe3I3AWhthqaPuUiTuEbdBVa5i9%2F4jOGTZdSrc7cmmGDCwjoEc7iBa4vxFyNN1ollEMkFQXvh6FdGsuEgqYi7Y9%2BWn%2FYmr%2Fa%2FIaXMgCeCodg1OPR%2FyOq21SKzluXStbke1FFUwaf1UstUnyeUOwm13C9Vi8gdPC2hI8vppu3Jyb1RRRU9GnkX30auHZz1mkTeGCVTxqA5iqnGZIx3DypXE0EnGB8bc%2FeLk5rpX7K0tHYT3RXfXFb%2BSjXRGN%2FmpoA1XpBN%2BQnbrP%2F5Z7Qo65mDpiwpVlAQG0KPjTX3iazKCDPStuIjWM6%2BnCYZqQqqFYumgEM9CELAu%2Bbg1DVk0WgwqHUyD%2F4rBgzL%2BkAeYd9Zj36t8JHcN%2FiFjxl1SrEIJx%2BEy1Cyql7N0qGZq6fq%2FGG1pm1fof01A3eGBeliYgdm3A%2FIqXwh42RDUqjshigwm5bMzgY6pgHZFoMedusma7bQM9notKu0uKUcy1hPJBadhdepotKkTmWgPpkATIrC%2B5o5ZYesL%2FvDaober%2F2falPoxZQzoKRH%2FCMQJigR4yqzHgIboDC82b10isTMhX%2BPg883enIR2hdy1qviYZfkKtC7wcCeRTTaoorsTp9WAXVpVii5p7WYPWxuo%2BJnu07WTcgw83lgmlHVD483KzaLbInmx6SQs0DA7dbNV%2Bsp&X-Amz-Signature=e582318f55bcb66b50d3717b57443a264ff3ad4e56f185f0be2b6bec4e9cc25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

