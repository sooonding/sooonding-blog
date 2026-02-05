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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTTDAD5%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC3gSRhZlcoSvUn51LOLs6Fa1OqOAItc1Ks9Jh0vKfvmAIhAOy%2BeRNeZaqnhYfsRPqeRvOOTql8F7WDxnT00ALsnIZDKv8DCCIQABoMNjM3NDIzMTgzODA1IgxZYcBbiJITUmyOnLQq3AN9ucUNqIqAnSdmRBXrydEtnWNjLwbV6ZWHz0%2Ft%2FmSz05cRkw3kQVi6Uag%2FAEsu39mqK6JLc0U%2FBau4qA8w5sjEP5F755p1M5gzSIF%2BSu0cM92gSSE1j4oGlfT%2Fi%2BXjNuqaPTauyQfQJMnsYvw6bChIb2p%2FrNHuegLZr2HWZPrzu%2F0n8k%2F4uNilVyYtB3spJySWS%2BbnaxNA%2BCnhGxfuWqLGOIx34BKCpxOoQ33lFtwPF%2B%2FF%2FH692RGlLXKNbN5xi6ZFCTi%2BOyMJ8rdQccDTyErP4vv7tyyKMS73o7mlPLrWMzaA%2FfqrxkQfZ%2BZnsl%2Fs%2BiHe6i1mdLwEEoF8vmZ53YzfzRVlkHXJOJ%2BLIwEbxJi0ouihw5JVyknxD8nPuvvykk2qDi21KJOQiTbBg%2BwzujyIgHqxnW60Z1aOD1bgq6zodH4fGk%2BeUEhipKcf3ESu3NzcSfJzYTeJj8EVdYaUgzcFvQgEmD13Ix9iNWytZi5ZsIxPT09lU3an0C0xNKL%2FTglT5vAxHkfcHCLt46w%2BbPBtkt%2BHUx6tMq53UDtjL8Jkg6Fo%2BgBVD1bqlyEOSDRZZGjPjbjxGU5EjZhI5EZF0hfTwKa6eo8moEYrxU%2BStB5dy99C2ry10XV0cooD6TDM3I%2FMBjqkAb%2FrNbOEj2Jtm7UkoBj32Vir2QiZMBxuulKQ7De7%2B2plORHX2DjXGtNpG1H4wE5S8tvQwW5dOpsae%2F8dZDbTIJ2aBa6CgiX%2FvL6j0VFr2ahaAMuK223rEi2KQK1BsFE%2FKevUaWiYtPQoezdih2z7qWgYU2pPiGl12ledaeUwg2e1z%2BgucflJ5rBoxCvMtdmZ0i0e1rAFE61H2m7qe%2Bj%2FLxfPqxIu&X-Amz-Signature=d7c75563fd9079f9ca9e7b9f2edb6371c601f4613fef98594abeda9817518592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTZMS4X%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHneQwMp0xS3YDS72FKciIe9QSRrc99S9R9mdaMaqm1QAiEA0V6aq2sK1AOE9HpN5lKuXWz1Sx3T5RJ5SBVohfQqx1wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKKIzwX%2FhcUd20xNKCrcAzKjkShBjf0EIS4cXgd0xrDVUvZAzD83P2qDGvf47xY1fGp96rbx4NsB08Xzow58wmxg5JfF1jfTlAX2hpzDd2VxKKNTVspod2ulhpL%2BDK6ajbl6unzY81mYF0K8e2zZD3ZNj4Iray1wGWza6Vly4gQcKGU7HdVmZy%2Fg2eNmwixVMWr0m5bVo6VHILhIQFK2TtfRmil%2FnnULon4If5luwmOUUcI16yh%2F1pGeGRKxNSfZ%2FwVceBaxYN5Sw9%2BeifyEtsk7PF6kLXUjQC6W6PBD9SXMOS4nGnfrykEjQWK1Qw0535HVxb1L%2BPPclJl2juNhFnWwi2%2BlWHnP1fOsTIPpKYNKSLeoQeb0oJ5QPqNlaOg8yfWOgUJxvJG7yFYOsW2XMo%2FD754P8ov19KhUg5r4F17V5G8FxuLXK6ZCgyW2k8yYfITHwrgQPqHTKmFBukF7ElCzEYGhRQsDDPwh5Vs6208HI9M1EWA%2B90f4EtJZyz1gn5PRHrBuKJZCmcSJib8HQpO1jNkkhPmni%2FC4i20dM9R79rnEAYQymyhFjuYJm2Ql2KxxUPWOPnW4JE1uIxwqrvWSvZokdMkdQjdEP6LVcZWtLFGxCYQJdYz3NGDQdrUd1dYah%2FS15d3kZCg3MOLaj8wGOqUBAfauGEzBka1u0um3Wo%2B4UOfuP9k1%2FYiEfe9xLMzCtsw2PfExNZn6cXH0NhK4nbH5AMn%2B9f8aXueVsI85QFX3dw62CucwPjRfSWLhe6kcnk7rC%2FPBb7LxwitY5yPqklpvA8JXRf8JTO4j7E0POhj7WtLKGfbNR%2BqU37%2F8t6v6EPGLX2vpMWztgUZ6mNxmeYVaAMb33Rr5xarxvaULmcxGuI4%2Bq8VK&X-Amz-Signature=2e798f480a156d4647a7dda2313f431d529515c950f839fa0d4b07e4a7120f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTZMS4X%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHneQwMp0xS3YDS72FKciIe9QSRrc99S9R9mdaMaqm1QAiEA0V6aq2sK1AOE9HpN5lKuXWz1Sx3T5RJ5SBVohfQqx1wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKKIzwX%2FhcUd20xNKCrcAzKjkShBjf0EIS4cXgd0xrDVUvZAzD83P2qDGvf47xY1fGp96rbx4NsB08Xzow58wmxg5JfF1jfTlAX2hpzDd2VxKKNTVspod2ulhpL%2BDK6ajbl6unzY81mYF0K8e2zZD3ZNj4Iray1wGWza6Vly4gQcKGU7HdVmZy%2Fg2eNmwixVMWr0m5bVo6VHILhIQFK2TtfRmil%2FnnULon4If5luwmOUUcI16yh%2F1pGeGRKxNSfZ%2FwVceBaxYN5Sw9%2BeifyEtsk7PF6kLXUjQC6W6PBD9SXMOS4nGnfrykEjQWK1Qw0535HVxb1L%2BPPclJl2juNhFnWwi2%2BlWHnP1fOsTIPpKYNKSLeoQeb0oJ5QPqNlaOg8yfWOgUJxvJG7yFYOsW2XMo%2FD754P8ov19KhUg5r4F17V5G8FxuLXK6ZCgyW2k8yYfITHwrgQPqHTKmFBukF7ElCzEYGhRQsDDPwh5Vs6208HI9M1EWA%2B90f4EtJZyz1gn5PRHrBuKJZCmcSJib8HQpO1jNkkhPmni%2FC4i20dM9R79rnEAYQymyhFjuYJm2Ql2KxxUPWOPnW4JE1uIxwqrvWSvZokdMkdQjdEP6LVcZWtLFGxCYQJdYz3NGDQdrUd1dYah%2FS15d3kZCg3MOLaj8wGOqUBAfauGEzBka1u0um3Wo%2B4UOfuP9k1%2FYiEfe9xLMzCtsw2PfExNZn6cXH0NhK4nbH5AMn%2B9f8aXueVsI85QFX3dw62CucwPjRfSWLhe6kcnk7rC%2FPBb7LxwitY5yPqklpvA8JXRf8JTO4j7E0POhj7WtLKGfbNR%2BqU37%2F8t6v6EPGLX2vpMWztgUZ6mNxmeYVaAMb33Rr5xarxvaULmcxGuI4%2Bq8VK&X-Amz-Signature=d3b253dbd4f7d617aaa92297e5591201b4ba4d0540b0799c21cdaa808a5f2d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTZMS4X%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHneQwMp0xS3YDS72FKciIe9QSRrc99S9R9mdaMaqm1QAiEA0V6aq2sK1AOE9HpN5lKuXWz1Sx3T5RJ5SBVohfQqx1wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKKIzwX%2FhcUd20xNKCrcAzKjkShBjf0EIS4cXgd0xrDVUvZAzD83P2qDGvf47xY1fGp96rbx4NsB08Xzow58wmxg5JfF1jfTlAX2hpzDd2VxKKNTVspod2ulhpL%2BDK6ajbl6unzY81mYF0K8e2zZD3ZNj4Iray1wGWza6Vly4gQcKGU7HdVmZy%2Fg2eNmwixVMWr0m5bVo6VHILhIQFK2TtfRmil%2FnnULon4If5luwmOUUcI16yh%2F1pGeGRKxNSfZ%2FwVceBaxYN5Sw9%2BeifyEtsk7PF6kLXUjQC6W6PBD9SXMOS4nGnfrykEjQWK1Qw0535HVxb1L%2BPPclJl2juNhFnWwi2%2BlWHnP1fOsTIPpKYNKSLeoQeb0oJ5QPqNlaOg8yfWOgUJxvJG7yFYOsW2XMo%2FD754P8ov19KhUg5r4F17V5G8FxuLXK6ZCgyW2k8yYfITHwrgQPqHTKmFBukF7ElCzEYGhRQsDDPwh5Vs6208HI9M1EWA%2B90f4EtJZyz1gn5PRHrBuKJZCmcSJib8HQpO1jNkkhPmni%2FC4i20dM9R79rnEAYQymyhFjuYJm2Ql2KxxUPWOPnW4JE1uIxwqrvWSvZokdMkdQjdEP6LVcZWtLFGxCYQJdYz3NGDQdrUd1dYah%2FS15d3kZCg3MOLaj8wGOqUBAfauGEzBka1u0um3Wo%2B4UOfuP9k1%2FYiEfe9xLMzCtsw2PfExNZn6cXH0NhK4nbH5AMn%2B9f8aXueVsI85QFX3dw62CucwPjRfSWLhe6kcnk7rC%2FPBb7LxwitY5yPqklpvA8JXRf8JTO4j7E0POhj7WtLKGfbNR%2BqU37%2F8t6v6EPGLX2vpMWztgUZ6mNxmeYVaAMb33Rr5xarxvaULmcxGuI4%2Bq8VK&X-Amz-Signature=c7df5b3109f1adacb5abf00798f0b7bcbd775511f0a132ce90038ceafa0aee9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTZMS4X%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHneQwMp0xS3YDS72FKciIe9QSRrc99S9R9mdaMaqm1QAiEA0V6aq2sK1AOE9HpN5lKuXWz1Sx3T5RJ5SBVohfQqx1wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKKIzwX%2FhcUd20xNKCrcAzKjkShBjf0EIS4cXgd0xrDVUvZAzD83P2qDGvf47xY1fGp96rbx4NsB08Xzow58wmxg5JfF1jfTlAX2hpzDd2VxKKNTVspod2ulhpL%2BDK6ajbl6unzY81mYF0K8e2zZD3ZNj4Iray1wGWza6Vly4gQcKGU7HdVmZy%2Fg2eNmwixVMWr0m5bVo6VHILhIQFK2TtfRmil%2FnnULon4If5luwmOUUcI16yh%2F1pGeGRKxNSfZ%2FwVceBaxYN5Sw9%2BeifyEtsk7PF6kLXUjQC6W6PBD9SXMOS4nGnfrykEjQWK1Qw0535HVxb1L%2BPPclJl2juNhFnWwi2%2BlWHnP1fOsTIPpKYNKSLeoQeb0oJ5QPqNlaOg8yfWOgUJxvJG7yFYOsW2XMo%2FD754P8ov19KhUg5r4F17V5G8FxuLXK6ZCgyW2k8yYfITHwrgQPqHTKmFBukF7ElCzEYGhRQsDDPwh5Vs6208HI9M1EWA%2B90f4EtJZyz1gn5PRHrBuKJZCmcSJib8HQpO1jNkkhPmni%2FC4i20dM9R79rnEAYQymyhFjuYJm2Ql2KxxUPWOPnW4JE1uIxwqrvWSvZokdMkdQjdEP6LVcZWtLFGxCYQJdYz3NGDQdrUd1dYah%2FS15d3kZCg3MOLaj8wGOqUBAfauGEzBka1u0um3Wo%2B4UOfuP9k1%2FYiEfe9xLMzCtsw2PfExNZn6cXH0NhK4nbH5AMn%2B9f8aXueVsI85QFX3dw62CucwPjRfSWLhe6kcnk7rC%2FPBb7LxwitY5yPqklpvA8JXRf8JTO4j7E0POhj7WtLKGfbNR%2BqU37%2F8t6v6EPGLX2vpMWztgUZ6mNxmeYVaAMb33Rr5xarxvaULmcxGuI4%2Bq8VK&X-Amz-Signature=28161c2a47eab96c943476edc6ec47d795ff998aeb4f8bd5bb674a19e425cc2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XTZMS4X%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHneQwMp0xS3YDS72FKciIe9QSRrc99S9R9mdaMaqm1QAiEA0V6aq2sK1AOE9HpN5lKuXWz1Sx3T5RJ5SBVohfQqx1wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKKIzwX%2FhcUd20xNKCrcAzKjkShBjf0EIS4cXgd0xrDVUvZAzD83P2qDGvf47xY1fGp96rbx4NsB08Xzow58wmxg5JfF1jfTlAX2hpzDd2VxKKNTVspod2ulhpL%2BDK6ajbl6unzY81mYF0K8e2zZD3ZNj4Iray1wGWza6Vly4gQcKGU7HdVmZy%2Fg2eNmwixVMWr0m5bVo6VHILhIQFK2TtfRmil%2FnnULon4If5luwmOUUcI16yh%2F1pGeGRKxNSfZ%2FwVceBaxYN5Sw9%2BeifyEtsk7PF6kLXUjQC6W6PBD9SXMOS4nGnfrykEjQWK1Qw0535HVxb1L%2BPPclJl2juNhFnWwi2%2BlWHnP1fOsTIPpKYNKSLeoQeb0oJ5QPqNlaOg8yfWOgUJxvJG7yFYOsW2XMo%2FD754P8ov19KhUg5r4F17V5G8FxuLXK6ZCgyW2k8yYfITHwrgQPqHTKmFBukF7ElCzEYGhRQsDDPwh5Vs6208HI9M1EWA%2B90f4EtJZyz1gn5PRHrBuKJZCmcSJib8HQpO1jNkkhPmni%2FC4i20dM9R79rnEAYQymyhFjuYJm2Ql2KxxUPWOPnW4JE1uIxwqrvWSvZokdMkdQjdEP6LVcZWtLFGxCYQJdYz3NGDQdrUd1dYah%2FS15d3kZCg3MOLaj8wGOqUBAfauGEzBka1u0um3Wo%2B4UOfuP9k1%2FYiEfe9xLMzCtsw2PfExNZn6cXH0NhK4nbH5AMn%2B9f8aXueVsI85QFX3dw62CucwPjRfSWLhe6kcnk7rC%2FPBb7LxwitY5yPqklpvA8JXRf8JTO4j7E0POhj7WtLKGfbNR%2BqU37%2F8t6v6EPGLX2vpMWztgUZ6mNxmeYVaAMb33Rr5xarxvaULmcxGuI4%2Bq8VK&X-Amz-Signature=fd4bfde4f088b2a9b2c3160cd594ff78dc44f5130f1f47556e55054497090709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTTDAD5%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC3gSRhZlcoSvUn51LOLs6Fa1OqOAItc1Ks9Jh0vKfvmAIhAOy%2BeRNeZaqnhYfsRPqeRvOOTql8F7WDxnT00ALsnIZDKv8DCCIQABoMNjM3NDIzMTgzODA1IgxZYcBbiJITUmyOnLQq3AN9ucUNqIqAnSdmRBXrydEtnWNjLwbV6ZWHz0%2Ft%2FmSz05cRkw3kQVi6Uag%2FAEsu39mqK6JLc0U%2FBau4qA8w5sjEP5F755p1M5gzSIF%2BSu0cM92gSSE1j4oGlfT%2Fi%2BXjNuqaPTauyQfQJMnsYvw6bChIb2p%2FrNHuegLZr2HWZPrzu%2F0n8k%2F4uNilVyYtB3spJySWS%2BbnaxNA%2BCnhGxfuWqLGOIx34BKCpxOoQ33lFtwPF%2B%2FF%2FH692RGlLXKNbN5xi6ZFCTi%2BOyMJ8rdQccDTyErP4vv7tyyKMS73o7mlPLrWMzaA%2FfqrxkQfZ%2BZnsl%2Fs%2BiHe6i1mdLwEEoF8vmZ53YzfzRVlkHXJOJ%2BLIwEbxJi0ouihw5JVyknxD8nPuvvykk2qDi21KJOQiTbBg%2BwzujyIgHqxnW60Z1aOD1bgq6zodH4fGk%2BeUEhipKcf3ESu3NzcSfJzYTeJj8EVdYaUgzcFvQgEmD13Ix9iNWytZi5ZsIxPT09lU3an0C0xNKL%2FTglT5vAxHkfcHCLt46w%2BbPBtkt%2BHUx6tMq53UDtjL8Jkg6Fo%2BgBVD1bqlyEOSDRZZGjPjbjxGU5EjZhI5EZF0hfTwKa6eo8moEYrxU%2BStB5dy99C2ry10XV0cooD6TDM3I%2FMBjqkAb%2FrNbOEj2Jtm7UkoBj32Vir2QiZMBxuulKQ7De7%2B2plORHX2DjXGtNpG1H4wE5S8tvQwW5dOpsae%2F8dZDbTIJ2aBa6CgiX%2FvL6j0VFr2ahaAMuK223rEi2KQK1BsFE%2FKevUaWiYtPQoezdih2z7qWgYU2pPiGl12ledaeUwg2e1z%2BgucflJ5rBoxCvMtdmZ0i0e1rAFE61H2m7qe%2Bj%2FLxfPqxIu&X-Amz-Signature=34cae67fade51af2671a348c7af527e38d5d2ed2090e46b51f065cfe098db975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

