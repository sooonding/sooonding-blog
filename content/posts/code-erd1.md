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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3BCREW%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyXGO%2BhJU1y8xKQAjonSJ5u%2FXOawlwMBnbphXqcnKSaAiEAuQCzlGKMC0sf%2B7jOtUxy%2BcPkriD44U3PhjDtVVKH21oq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDPMLzvNb5smfMAV%2FCrcAxOmAbhqcri1VHculG8Et2CE9WF6On1slGdz7Xcv6wrtlT20BsHQth2PbtcSodELnLHW6Fa2WICoLq2hvhndGxFT8KCxT7JNNZEZLE3B9Y6awuW5I%2FL7qtuYeelQ8d6ybGcABgkwHyp2d4mlgPMx5pmuG7r%2B1eVQyP%2BlacxlU3AAIitd%2BhntE8uJcoiRDjStmo7lR8sLP%2FxZyqto4qVck45bYXrrn8EbGvWDQR57d70SatmUT8HxQtRaruT45LN6v9TH9YpQixm5ElAKEZHLWKgEcvwMd0VphA2OHEFn9CYCym5AaYGIOq%2FDtL83x7XAkxh63GUPABscRSXFougyYlnJh3NN%2Fri3fI2mSrCDnjfohPQqa87%2BDF1LxMgVElRo2Q%2BBQaIZR2n7Sdq4K7AcIJwZbI6%2BlS2D6NfIyeoq3pP6WrxJW8WBd6nI26vtGHhIaZdNlmzoDMQ8Cpv2eLxbQgj4ALo01Z65cU0TZWa3XzIoeEYKGHR6syHLnLKYjBRTCtn10IHC70jLXG76ws7s9t6Dj0VyHgLX7GVW4pv9NWOuA6Cz4xMe21%2F1bbj%2FL2GNQdUoVoTHhv%2Blw3dsbYU%2Fb5sHgqVMGIvNYHPD3EqoR%2BEe7FJaRjpM8%2FiB1WR%2BMKuyiNUGOqUBHtGOMEwpZYjL%2F5iuX%2BmmIrInQ309d70RZ7IBk6ujKAHDhybwNkd5mAlJmxtjrWxlRLQpKojtcmFTVqIc8qFx1z3Vcmd0Vq2MEu7zyMGXL3jICh09XUUa0qZjyMIZGKCADL%2F0yOZptXiAsmrmHac9n22YMc0mF%2F7QTYjZgbIxyexChpI7nHow8m%2F2BX3mfNpR4RzHelpTk3K0%2FV%2BNy9kPjAdCBlGf&X-Amz-Signature=bae9b3b25d7770adf2bee548ec14a73e81ed38be3722eee9882ff0c5f69253bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4J3ZEG%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXctDaPW86jVGB2tAlgjmfUj0uZ1PHxkkvIK6nFHgb6AIhAK9ot6f4IJvE70xKY0lljmQb8s%2FeiMmsmsFK4p4dm8f5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwXanLq%2BGVlpcQeyH4q3APFnTbv%2Fsw2YNLCG5NOkmMKa0wSjLIbX0p08I6YQ8EogSwLNIpF3b%2FI%2FZMLPyPR5TKE%2F6EAatYPmAE34QejRnHodt0d%2Fywpv6x%2B8VPoRnqrLGLnZXAq5KnRVpHADlER%2Bv9RsdBcaLGBJSg1SMPFvB7ohrX97FIXAGOgVHxSaCWgZ4uQqwmcWRvXasWQX%2F6yVcbUKoiufBQJxW2R9l74DQt8KgT45oJyMMUrXWGDyqP4%2BhkTEr5%2BcQ1Uq9rBXIUFO4V3ARwKdpYSRns4AvqLEcySCE1azkUCMR9is2nUKJ%2B5PV57E3%2BUgT%2F8fqwOPWZKeJUwGa5ArB53WxKQKfwgKz5UiHX%2FWz1bx3nzYQMzJ03OwVncPof1MDcnXyX6GVCK1pLfpnejp5ubsXVasMIX72ns7vWpqiwagOUYGa9xV8e7oyzmFTuUwZxzuKcKctSNXnbazO1RFhChCiZ0db49Uy%2FJ%2Fn%2BXVLdtIDNKkODfVr69yofsQ1CW231h649q9sv7aC4yPY7%2BauLgAZuzUynezXSBj2EkAz3MN7N0FhmSlEG8JFaz4DkqxiaxMVHb%2FxYHXrguoNE9Zk0PshDe0ZugYrA2R8vc8gHtZm5FpjSE71A0owQ54oILjYNQWppSQDDMr4jVBjqkAVwSGKNzdBFOx7dYzyzyvlB6C%2FZf6gyNFV4oTe1rry7cBF8CNDE%2FIUNiJS1ExREzqkBhlxUDGpA2jDHa6Za9ryjwlQwUUQjIe6pd0aZn%2B%2Bt2UljxlLIws2pkVixNysWp9HRXZ%2BSNkctPeULXFSTtheR9Jk7JcNJxyNu%2B0ZSXUwpu48CXQ9t9rqkHpYvWIFcmCkUmqNlUAzgjhSP1F5TB3WQo3ibw&X-Amz-Signature=e35f6a0293621ae3503e97370e742f0a38b4d40b9e3e1d5b2875dba38a455f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4J3ZEG%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXctDaPW86jVGB2tAlgjmfUj0uZ1PHxkkvIK6nFHgb6AIhAK9ot6f4IJvE70xKY0lljmQb8s%2FeiMmsmsFK4p4dm8f5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwXanLq%2BGVlpcQeyH4q3APFnTbv%2Fsw2YNLCG5NOkmMKa0wSjLIbX0p08I6YQ8EogSwLNIpF3b%2FI%2FZMLPyPR5TKE%2F6EAatYPmAE34QejRnHodt0d%2Fywpv6x%2B8VPoRnqrLGLnZXAq5KnRVpHADlER%2Bv9RsdBcaLGBJSg1SMPFvB7ohrX97FIXAGOgVHxSaCWgZ4uQqwmcWRvXasWQX%2F6yVcbUKoiufBQJxW2R9l74DQt8KgT45oJyMMUrXWGDyqP4%2BhkTEr5%2BcQ1Uq9rBXIUFO4V3ARwKdpYSRns4AvqLEcySCE1azkUCMR9is2nUKJ%2B5PV57E3%2BUgT%2F8fqwOPWZKeJUwGa5ArB53WxKQKfwgKz5UiHX%2FWz1bx3nzYQMzJ03OwVncPof1MDcnXyX6GVCK1pLfpnejp5ubsXVasMIX72ns7vWpqiwagOUYGa9xV8e7oyzmFTuUwZxzuKcKctSNXnbazO1RFhChCiZ0db49Uy%2FJ%2Fn%2BXVLdtIDNKkODfVr69yofsQ1CW231h649q9sv7aC4yPY7%2BauLgAZuzUynezXSBj2EkAz3MN7N0FhmSlEG8JFaz4DkqxiaxMVHb%2FxYHXrguoNE9Zk0PshDe0ZugYrA2R8vc8gHtZm5FpjSE71A0owQ54oILjYNQWppSQDDMr4jVBjqkAVwSGKNzdBFOx7dYzyzyvlB6C%2FZf6gyNFV4oTe1rry7cBF8CNDE%2FIUNiJS1ExREzqkBhlxUDGpA2jDHa6Za9ryjwlQwUUQjIe6pd0aZn%2B%2Bt2UljxlLIws2pkVixNysWp9HRXZ%2BSNkctPeULXFSTtheR9Jk7JcNJxyNu%2B0ZSXUwpu48CXQ9t9rqkHpYvWIFcmCkUmqNlUAzgjhSP1F5TB3WQo3ibw&X-Amz-Signature=1c4452642643fe09aec47fb2d138a9c427b3c8867b07007ea9d13022f365a620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4J3ZEG%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXctDaPW86jVGB2tAlgjmfUj0uZ1PHxkkvIK6nFHgb6AIhAK9ot6f4IJvE70xKY0lljmQb8s%2FeiMmsmsFK4p4dm8f5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwXanLq%2BGVlpcQeyH4q3APFnTbv%2Fsw2YNLCG5NOkmMKa0wSjLIbX0p08I6YQ8EogSwLNIpF3b%2FI%2FZMLPyPR5TKE%2F6EAatYPmAE34QejRnHodt0d%2Fywpv6x%2B8VPoRnqrLGLnZXAq5KnRVpHADlER%2Bv9RsdBcaLGBJSg1SMPFvB7ohrX97FIXAGOgVHxSaCWgZ4uQqwmcWRvXasWQX%2F6yVcbUKoiufBQJxW2R9l74DQt8KgT45oJyMMUrXWGDyqP4%2BhkTEr5%2BcQ1Uq9rBXIUFO4V3ARwKdpYSRns4AvqLEcySCE1azkUCMR9is2nUKJ%2B5PV57E3%2BUgT%2F8fqwOPWZKeJUwGa5ArB53WxKQKfwgKz5UiHX%2FWz1bx3nzYQMzJ03OwVncPof1MDcnXyX6GVCK1pLfpnejp5ubsXVasMIX72ns7vWpqiwagOUYGa9xV8e7oyzmFTuUwZxzuKcKctSNXnbazO1RFhChCiZ0db49Uy%2FJ%2Fn%2BXVLdtIDNKkODfVr69yofsQ1CW231h649q9sv7aC4yPY7%2BauLgAZuzUynezXSBj2EkAz3MN7N0FhmSlEG8JFaz4DkqxiaxMVHb%2FxYHXrguoNE9Zk0PshDe0ZugYrA2R8vc8gHtZm5FpjSE71A0owQ54oILjYNQWppSQDDMr4jVBjqkAVwSGKNzdBFOx7dYzyzyvlB6C%2FZf6gyNFV4oTe1rry7cBF8CNDE%2FIUNiJS1ExREzqkBhlxUDGpA2jDHa6Za9ryjwlQwUUQjIe6pd0aZn%2B%2Bt2UljxlLIws2pkVixNysWp9HRXZ%2BSNkctPeULXFSTtheR9Jk7JcNJxyNu%2B0ZSXUwpu48CXQ9t9rqkHpYvWIFcmCkUmqNlUAzgjhSP1F5TB3WQo3ibw&X-Amz-Signature=307085ee7ea0e419a31fd209de69432486135da4d69930f6a69f7e756426446b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4J3ZEG%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXctDaPW86jVGB2tAlgjmfUj0uZ1PHxkkvIK6nFHgb6AIhAK9ot6f4IJvE70xKY0lljmQb8s%2FeiMmsmsFK4p4dm8f5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwXanLq%2BGVlpcQeyH4q3APFnTbv%2Fsw2YNLCG5NOkmMKa0wSjLIbX0p08I6YQ8EogSwLNIpF3b%2FI%2FZMLPyPR5TKE%2F6EAatYPmAE34QejRnHodt0d%2Fywpv6x%2B8VPoRnqrLGLnZXAq5KnRVpHADlER%2Bv9RsdBcaLGBJSg1SMPFvB7ohrX97FIXAGOgVHxSaCWgZ4uQqwmcWRvXasWQX%2F6yVcbUKoiufBQJxW2R9l74DQt8KgT45oJyMMUrXWGDyqP4%2BhkTEr5%2BcQ1Uq9rBXIUFO4V3ARwKdpYSRns4AvqLEcySCE1azkUCMR9is2nUKJ%2B5PV57E3%2BUgT%2F8fqwOPWZKeJUwGa5ArB53WxKQKfwgKz5UiHX%2FWz1bx3nzYQMzJ03OwVncPof1MDcnXyX6GVCK1pLfpnejp5ubsXVasMIX72ns7vWpqiwagOUYGa9xV8e7oyzmFTuUwZxzuKcKctSNXnbazO1RFhChCiZ0db49Uy%2FJ%2Fn%2BXVLdtIDNKkODfVr69yofsQ1CW231h649q9sv7aC4yPY7%2BauLgAZuzUynezXSBj2EkAz3MN7N0FhmSlEG8JFaz4DkqxiaxMVHb%2FxYHXrguoNE9Zk0PshDe0ZugYrA2R8vc8gHtZm5FpjSE71A0owQ54oILjYNQWppSQDDMr4jVBjqkAVwSGKNzdBFOx7dYzyzyvlB6C%2FZf6gyNFV4oTe1rry7cBF8CNDE%2FIUNiJS1ExREzqkBhlxUDGpA2jDHa6Za9ryjwlQwUUQjIe6pd0aZn%2B%2Bt2UljxlLIws2pkVixNysWp9HRXZ%2BSNkctPeULXFSTtheR9Jk7JcNJxyNu%2B0ZSXUwpu48CXQ9t9rqkHpYvWIFcmCkUmqNlUAzgjhSP1F5TB3WQo3ibw&X-Amz-Signature=eeb5e0bdc0ff7a82ca8307e9240dac927aa0e07e344858a911ffde3b12b17869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4J3ZEG%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXctDaPW86jVGB2tAlgjmfUj0uZ1PHxkkvIK6nFHgb6AIhAK9ot6f4IJvE70xKY0lljmQb8s%2FeiMmsmsFK4p4dm8f5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwXanLq%2BGVlpcQeyH4q3APFnTbv%2Fsw2YNLCG5NOkmMKa0wSjLIbX0p08I6YQ8EogSwLNIpF3b%2FI%2FZMLPyPR5TKE%2F6EAatYPmAE34QejRnHodt0d%2Fywpv6x%2B8VPoRnqrLGLnZXAq5KnRVpHADlER%2Bv9RsdBcaLGBJSg1SMPFvB7ohrX97FIXAGOgVHxSaCWgZ4uQqwmcWRvXasWQX%2F6yVcbUKoiufBQJxW2R9l74DQt8KgT45oJyMMUrXWGDyqP4%2BhkTEr5%2BcQ1Uq9rBXIUFO4V3ARwKdpYSRns4AvqLEcySCE1azkUCMR9is2nUKJ%2B5PV57E3%2BUgT%2F8fqwOPWZKeJUwGa5ArB53WxKQKfwgKz5UiHX%2FWz1bx3nzYQMzJ03OwVncPof1MDcnXyX6GVCK1pLfpnejp5ubsXVasMIX72ns7vWpqiwagOUYGa9xV8e7oyzmFTuUwZxzuKcKctSNXnbazO1RFhChCiZ0db49Uy%2FJ%2Fn%2BXVLdtIDNKkODfVr69yofsQ1CW231h649q9sv7aC4yPY7%2BauLgAZuzUynezXSBj2EkAz3MN7N0FhmSlEG8JFaz4DkqxiaxMVHb%2FxYHXrguoNE9Zk0PshDe0ZugYrA2R8vc8gHtZm5FpjSE71A0owQ54oILjYNQWppSQDDMr4jVBjqkAVwSGKNzdBFOx7dYzyzyvlB6C%2FZf6gyNFV4oTe1rry7cBF8CNDE%2FIUNiJS1ExREzqkBhlxUDGpA2jDHa6Za9ryjwlQwUUQjIe6pd0aZn%2B%2Bt2UljxlLIws2pkVixNysWp9HRXZ%2BSNkctPeULXFSTtheR9Jk7JcNJxyNu%2B0ZSXUwpu48CXQ9t9rqkHpYvWIFcmCkUmqNlUAzgjhSP1F5TB3WQo3ibw&X-Amz-Signature=1971944f53005b1679d400cb2f18be97a413fd80bb68c2e74bd81fde6d60d557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3BCREW%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyXGO%2BhJU1y8xKQAjonSJ5u%2FXOawlwMBnbphXqcnKSaAiEAuQCzlGKMC0sf%2B7jOtUxy%2BcPkriD44U3PhjDtVVKH21oq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDPMLzvNb5smfMAV%2FCrcAxOmAbhqcri1VHculG8Et2CE9WF6On1slGdz7Xcv6wrtlT20BsHQth2PbtcSodELnLHW6Fa2WICoLq2hvhndGxFT8KCxT7JNNZEZLE3B9Y6awuW5I%2FL7qtuYeelQ8d6ybGcABgkwHyp2d4mlgPMx5pmuG7r%2B1eVQyP%2BlacxlU3AAIitd%2BhntE8uJcoiRDjStmo7lR8sLP%2FxZyqto4qVck45bYXrrn8EbGvWDQR57d70SatmUT8HxQtRaruT45LN6v9TH9YpQixm5ElAKEZHLWKgEcvwMd0VphA2OHEFn9CYCym5AaYGIOq%2FDtL83x7XAkxh63GUPABscRSXFougyYlnJh3NN%2Fri3fI2mSrCDnjfohPQqa87%2BDF1LxMgVElRo2Q%2BBQaIZR2n7Sdq4K7AcIJwZbI6%2BlS2D6NfIyeoq3pP6WrxJW8WBd6nI26vtGHhIaZdNlmzoDMQ8Cpv2eLxbQgj4ALo01Z65cU0TZWa3XzIoeEYKGHR6syHLnLKYjBRTCtn10IHC70jLXG76ws7s9t6Dj0VyHgLX7GVW4pv9NWOuA6Cz4xMe21%2F1bbj%2FL2GNQdUoVoTHhv%2Blw3dsbYU%2Fb5sHgqVMGIvNYHPD3EqoR%2BEe7FJaRjpM8%2FiB1WR%2BMKuyiNUGOqUBHtGOMEwpZYjL%2F5iuX%2BmmIrInQ309d70RZ7IBk6ujKAHDhybwNkd5mAlJmxtjrWxlRLQpKojtcmFTVqIc8qFx1z3Vcmd0Vq2MEu7zyMGXL3jICh09XUUa0qZjyMIZGKCADL%2F0yOZptXiAsmrmHac9n22YMc0mF%2F7QTYjZgbIxyexChpI7nHow8m%2F2BX3mfNpR4RzHelpTk3K0%2FV%2BNy9kPjAdCBlGf&X-Amz-Signature=136cb15a5708e91c40054699186154b4571363e9d1cf0ace3921ac3b18edd9c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

