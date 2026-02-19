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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEXIEUQ%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T021120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC344eMXCpnlFwTq%2Bm51cG2VrF3bHvya2DwzXHFtMYxZQIhAN0yOtM4YRRgWUGF3Z8zyxlAmRVOYxVVRTZGn6bR2pF4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgxLKI1MM493xtVLEQ8q3AOmYqv%2FLmnDMg32ywyCjAyyG4JsSUoedBTqWxt2O6VuxfS%2BCqZAVrkpC%2BMnjeGD9H5j8J0l3W02mR8kQ81XpCSopCGZn7GCtBRdbiaU7wJmLhhM28B2jCgjJa%2FBlpg5CdPWH9bNsaV9qluAwyYj3xBFgDnh7G4VsGqcoaBsPRt5KQ4iZ42LtJcfHXNRbi52l6U7WmY9zrW45i5PZUq4fM7JBdePwnliSvdARyRGeRwXtUi8OZdzpNg2OD8im7JL6T8f6iLND6Ewptrquqm6ls5gUYWoEstAymFVGgcAHRtAodOl9oXAQELcMw4u1xLGM2Ewvx3WOx13pysdng%2BH4kbWJ1o8lCXjPzsyikTzpUZilq0k8nRizzPXObcvqnxErsb44L42%2BJkSWpCXy9EEPHupMgWyp2wEwsjuhF16lWOf2aVVjtVtdT%2BSf%2BvSLyTwlSGrwpIcPK7Er7JbwaLWwx8RW312jPvzZvnyneNbRpJvQvj%2FMQX5Nz7lI6ko8SPi6D5KjTdO5512JvjbM3N6uBMeQhGu1%2BVCxkfQ0Lu0%2BFDzvpWXJfI9fZM9SYrJp108VnV34Y4I4sIbjFwxKE6%2B9P5FYm0iBe7sZuv7ds5XL4HA8QcaWl8G0dHF4CNTTDDA2dnMBjqkAeqyPNDqyLqiOXlBgIJn20S3zY1POsd6Pu%2Fh7PUj3VJuk6N2HX0qYknnyRoyQ4YmQMNtGUGg2hKe5z602csgyzLAgVxggsvYClvL7F9oPt%2B9im%2FSMWlMwNYzy%2Bk%2FeNpaiwWMGgKpqL1gu0DUMsh5%2FnGYA2pY2zDKtD%2FzXM%2FBkkr9dHvprhc%2BtJorTF%2B3BexV%2F8DRyqPC0s7J%2F5j7%2FgypkTuBW9JH&X-Amz-Signature=6f4c09980d21e03d215d24f92190a4a564aa05914e1710547cc3271c43a73b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHIPN2%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9R8f56KyU%2BAFXyr0p1eZPLL3s8vAQpXketJP2o6zgEQIgKkRH8pkD7u%2BhfUHMosfD57geXUO%2FZVmfOerJZMhmHL4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDClnVXY%2BB2yc%2FbQ2hircA6QzOASFdkidPP%2FFpt6d16kekeNl98WMP9mPSinnuwL3wQuoN18EdNnv0tKFudRmgyoh8os1K2x%2FVIBFNOGHKDz6RjYjk7RC2UtSEvbUq%2FR3gAYGC1fFqq0HxRWJNwd0nhKN9CJjDLBz2yFxvvtMN44q9DqVXGmTX%2FJz2DgzRvQStwh3fYFMTycNiIwgN0exQwuSaIXZn6rM2YQPhlKrWYSXgKtlf8zhk6hduMooRWWlXEc8%2F8JLR2YPRv2s3D%2FyCoOOlA0TgrbrYT2aEUJGiniO8f2Vb9ccRkyRjvNhRHu70Be11Nlh1O9v4QBv6XvGHViNqz1FdURQcEPRUG7bcrpzBZ%2F6WgNKfmFtiTsyMkmy%2BAWeBduhL%2FR%2B4OMJaNSWr5wnA%2BM%2FU9tArlcHvjx1XSRJBKbJe2SOJuDZW4cvQVg0t5IDACjNEEa16914BNuxUFpOHujSj3Q%2F%2Bo4fLPfRCtJ1cvYNLDvpx3tl1JomD0JabAHkE%2BkaRJDnpoeW7PF1DlA0GANDbl42HBOJ9bdDiRZs8kXo3HaVQamJzOr%2BRiekzxHB%2BZqEay5TOHQtNIchEZrZJ1BT6rWnXE3Bpyy%2BdR5jGDqOcULW85llr25qNsVMpfnsUR%2B5GOghiJXwMJfY2cwGOqUBLMwym4FEFJM4QgYvW6q%2BEScCS0vXgUw8e6e6HCJ9qc3Cf4YYVWunAigMFT%2B5P2xXTE513YJb9ADuzre9ioRjMYBqJs6Gen4g6rp4fayQG%2BF9RL2DXaU6r8%2Ban%2BNDWOk9sgKt2uUwAhdzbIh9KsRaicF4%2FOtu%2FRBgjHzV71sCnL88YRz1X%2Fz%2BbzMLy1U0tvcb6OOZAiVOZlbCack8VLmZ5x31cczb&X-Amz-Signature=68fa930a1e32a13d98c457ab0442a6657aa7e616b7b4fbdc801b2ef12e04c892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHIPN2%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9R8f56KyU%2BAFXyr0p1eZPLL3s8vAQpXketJP2o6zgEQIgKkRH8pkD7u%2BhfUHMosfD57geXUO%2FZVmfOerJZMhmHL4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDClnVXY%2BB2yc%2FbQ2hircA6QzOASFdkidPP%2FFpt6d16kekeNl98WMP9mPSinnuwL3wQuoN18EdNnv0tKFudRmgyoh8os1K2x%2FVIBFNOGHKDz6RjYjk7RC2UtSEvbUq%2FR3gAYGC1fFqq0HxRWJNwd0nhKN9CJjDLBz2yFxvvtMN44q9DqVXGmTX%2FJz2DgzRvQStwh3fYFMTycNiIwgN0exQwuSaIXZn6rM2YQPhlKrWYSXgKtlf8zhk6hduMooRWWlXEc8%2F8JLR2YPRv2s3D%2FyCoOOlA0TgrbrYT2aEUJGiniO8f2Vb9ccRkyRjvNhRHu70Be11Nlh1O9v4QBv6XvGHViNqz1FdURQcEPRUG7bcrpzBZ%2F6WgNKfmFtiTsyMkmy%2BAWeBduhL%2FR%2B4OMJaNSWr5wnA%2BM%2FU9tArlcHvjx1XSRJBKbJe2SOJuDZW4cvQVg0t5IDACjNEEa16914BNuxUFpOHujSj3Q%2F%2Bo4fLPfRCtJ1cvYNLDvpx3tl1JomD0JabAHkE%2BkaRJDnpoeW7PF1DlA0GANDbl42HBOJ9bdDiRZs8kXo3HaVQamJzOr%2BRiekzxHB%2BZqEay5TOHQtNIchEZrZJ1BT6rWnXE3Bpyy%2BdR5jGDqOcULW85llr25qNsVMpfnsUR%2B5GOghiJXwMJfY2cwGOqUBLMwym4FEFJM4QgYvW6q%2BEScCS0vXgUw8e6e6HCJ9qc3Cf4YYVWunAigMFT%2B5P2xXTE513YJb9ADuzre9ioRjMYBqJs6Gen4g6rp4fayQG%2BF9RL2DXaU6r8%2Ban%2BNDWOk9sgKt2uUwAhdzbIh9KsRaicF4%2FOtu%2FRBgjHzV71sCnL88YRz1X%2Fz%2BbzMLy1U0tvcb6OOZAiVOZlbCack8VLmZ5x31cczb&X-Amz-Signature=6976481d6b87997051bff9f7b66d49511046dc39d7c2648180dfa2455abaf7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHIPN2%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9R8f56KyU%2BAFXyr0p1eZPLL3s8vAQpXketJP2o6zgEQIgKkRH8pkD7u%2BhfUHMosfD57geXUO%2FZVmfOerJZMhmHL4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDClnVXY%2BB2yc%2FbQ2hircA6QzOASFdkidPP%2FFpt6d16kekeNl98WMP9mPSinnuwL3wQuoN18EdNnv0tKFudRmgyoh8os1K2x%2FVIBFNOGHKDz6RjYjk7RC2UtSEvbUq%2FR3gAYGC1fFqq0HxRWJNwd0nhKN9CJjDLBz2yFxvvtMN44q9DqVXGmTX%2FJz2DgzRvQStwh3fYFMTycNiIwgN0exQwuSaIXZn6rM2YQPhlKrWYSXgKtlf8zhk6hduMooRWWlXEc8%2F8JLR2YPRv2s3D%2FyCoOOlA0TgrbrYT2aEUJGiniO8f2Vb9ccRkyRjvNhRHu70Be11Nlh1O9v4QBv6XvGHViNqz1FdURQcEPRUG7bcrpzBZ%2F6WgNKfmFtiTsyMkmy%2BAWeBduhL%2FR%2B4OMJaNSWr5wnA%2BM%2FU9tArlcHvjx1XSRJBKbJe2SOJuDZW4cvQVg0t5IDACjNEEa16914BNuxUFpOHujSj3Q%2F%2Bo4fLPfRCtJ1cvYNLDvpx3tl1JomD0JabAHkE%2BkaRJDnpoeW7PF1DlA0GANDbl42HBOJ9bdDiRZs8kXo3HaVQamJzOr%2BRiekzxHB%2BZqEay5TOHQtNIchEZrZJ1BT6rWnXE3Bpyy%2BdR5jGDqOcULW85llr25qNsVMpfnsUR%2B5GOghiJXwMJfY2cwGOqUBLMwym4FEFJM4QgYvW6q%2BEScCS0vXgUw8e6e6HCJ9qc3Cf4YYVWunAigMFT%2B5P2xXTE513YJb9ADuzre9ioRjMYBqJs6Gen4g6rp4fayQG%2BF9RL2DXaU6r8%2Ban%2BNDWOk9sgKt2uUwAhdzbIh9KsRaicF4%2FOtu%2FRBgjHzV71sCnL88YRz1X%2Fz%2BbzMLy1U0tvcb6OOZAiVOZlbCack8VLmZ5x31cczb&X-Amz-Signature=3cfd5f7885daf021351b12db19b155ccd12dbfd94312ed946b3a87b9dc8ec07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHIPN2%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9R8f56KyU%2BAFXyr0p1eZPLL3s8vAQpXketJP2o6zgEQIgKkRH8pkD7u%2BhfUHMosfD57geXUO%2FZVmfOerJZMhmHL4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDClnVXY%2BB2yc%2FbQ2hircA6QzOASFdkidPP%2FFpt6d16kekeNl98WMP9mPSinnuwL3wQuoN18EdNnv0tKFudRmgyoh8os1K2x%2FVIBFNOGHKDz6RjYjk7RC2UtSEvbUq%2FR3gAYGC1fFqq0HxRWJNwd0nhKN9CJjDLBz2yFxvvtMN44q9DqVXGmTX%2FJz2DgzRvQStwh3fYFMTycNiIwgN0exQwuSaIXZn6rM2YQPhlKrWYSXgKtlf8zhk6hduMooRWWlXEc8%2F8JLR2YPRv2s3D%2FyCoOOlA0TgrbrYT2aEUJGiniO8f2Vb9ccRkyRjvNhRHu70Be11Nlh1O9v4QBv6XvGHViNqz1FdURQcEPRUG7bcrpzBZ%2F6WgNKfmFtiTsyMkmy%2BAWeBduhL%2FR%2B4OMJaNSWr5wnA%2BM%2FU9tArlcHvjx1XSRJBKbJe2SOJuDZW4cvQVg0t5IDACjNEEa16914BNuxUFpOHujSj3Q%2F%2Bo4fLPfRCtJ1cvYNLDvpx3tl1JomD0JabAHkE%2BkaRJDnpoeW7PF1DlA0GANDbl42HBOJ9bdDiRZs8kXo3HaVQamJzOr%2BRiekzxHB%2BZqEay5TOHQtNIchEZrZJ1BT6rWnXE3Bpyy%2BdR5jGDqOcULW85llr25qNsVMpfnsUR%2B5GOghiJXwMJfY2cwGOqUBLMwym4FEFJM4QgYvW6q%2BEScCS0vXgUw8e6e6HCJ9qc3Cf4YYVWunAigMFT%2B5P2xXTE513YJb9ADuzre9ioRjMYBqJs6Gen4g6rp4fayQG%2BF9RL2DXaU6r8%2Ban%2BNDWOk9sgKt2uUwAhdzbIh9KsRaicF4%2FOtu%2FRBgjHzV71sCnL88YRz1X%2Fz%2BbzMLy1U0tvcb6OOZAiVOZlbCack8VLmZ5x31cczb&X-Amz-Signature=5d3a32e68775b9e9fce90b0d93194ab15d4667dc95bbe02943ba8ae707feacfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRHIPN2%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9R8f56KyU%2BAFXyr0p1eZPLL3s8vAQpXketJP2o6zgEQIgKkRH8pkD7u%2BhfUHMosfD57geXUO%2FZVmfOerJZMhmHL4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDClnVXY%2BB2yc%2FbQ2hircA6QzOASFdkidPP%2FFpt6d16kekeNl98WMP9mPSinnuwL3wQuoN18EdNnv0tKFudRmgyoh8os1K2x%2FVIBFNOGHKDz6RjYjk7RC2UtSEvbUq%2FR3gAYGC1fFqq0HxRWJNwd0nhKN9CJjDLBz2yFxvvtMN44q9DqVXGmTX%2FJz2DgzRvQStwh3fYFMTycNiIwgN0exQwuSaIXZn6rM2YQPhlKrWYSXgKtlf8zhk6hduMooRWWlXEc8%2F8JLR2YPRv2s3D%2FyCoOOlA0TgrbrYT2aEUJGiniO8f2Vb9ccRkyRjvNhRHu70Be11Nlh1O9v4QBv6XvGHViNqz1FdURQcEPRUG7bcrpzBZ%2F6WgNKfmFtiTsyMkmy%2BAWeBduhL%2FR%2B4OMJaNSWr5wnA%2BM%2FU9tArlcHvjx1XSRJBKbJe2SOJuDZW4cvQVg0t5IDACjNEEa16914BNuxUFpOHujSj3Q%2F%2Bo4fLPfRCtJ1cvYNLDvpx3tl1JomD0JabAHkE%2BkaRJDnpoeW7PF1DlA0GANDbl42HBOJ9bdDiRZs8kXo3HaVQamJzOr%2BRiekzxHB%2BZqEay5TOHQtNIchEZrZJ1BT6rWnXE3Bpyy%2BdR5jGDqOcULW85llr25qNsVMpfnsUR%2B5GOghiJXwMJfY2cwGOqUBLMwym4FEFJM4QgYvW6q%2BEScCS0vXgUw8e6e6HCJ9qc3Cf4YYVWunAigMFT%2B5P2xXTE513YJb9ADuzre9ioRjMYBqJs6Gen4g6rp4fayQG%2BF9RL2DXaU6r8%2Ban%2BNDWOk9sgKt2uUwAhdzbIh9KsRaicF4%2FOtu%2FRBgjHzV71sCnL88YRz1X%2Fz%2BbzMLy1U0tvcb6OOZAiVOZlbCack8VLmZ5x31cczb&X-Amz-Signature=838954fdedeb435532dd1d6bce711e267104eccf3025cf11261435b99fd45331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTEXIEUQ%2F20260219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260219T021120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC344eMXCpnlFwTq%2Bm51cG2VrF3bHvya2DwzXHFtMYxZQIhAN0yOtM4YRRgWUGF3Z8zyxlAmRVOYxVVRTZGn6bR2pF4Kv8DCHMQABoMNjM3NDIzMTgzODA1IgxLKI1MM493xtVLEQ8q3AOmYqv%2FLmnDMg32ywyCjAyyG4JsSUoedBTqWxt2O6VuxfS%2BCqZAVrkpC%2BMnjeGD9H5j8J0l3W02mR8kQ81XpCSopCGZn7GCtBRdbiaU7wJmLhhM28B2jCgjJa%2FBlpg5CdPWH9bNsaV9qluAwyYj3xBFgDnh7G4VsGqcoaBsPRt5KQ4iZ42LtJcfHXNRbi52l6U7WmY9zrW45i5PZUq4fM7JBdePwnliSvdARyRGeRwXtUi8OZdzpNg2OD8im7JL6T8f6iLND6Ewptrquqm6ls5gUYWoEstAymFVGgcAHRtAodOl9oXAQELcMw4u1xLGM2Ewvx3WOx13pysdng%2BH4kbWJ1o8lCXjPzsyikTzpUZilq0k8nRizzPXObcvqnxErsb44L42%2BJkSWpCXy9EEPHupMgWyp2wEwsjuhF16lWOf2aVVjtVtdT%2BSf%2BvSLyTwlSGrwpIcPK7Er7JbwaLWwx8RW312jPvzZvnyneNbRpJvQvj%2FMQX5Nz7lI6ko8SPi6D5KjTdO5512JvjbM3N6uBMeQhGu1%2BVCxkfQ0Lu0%2BFDzvpWXJfI9fZM9SYrJp108VnV34Y4I4sIbjFwxKE6%2B9P5FYm0iBe7sZuv7ds5XL4HA8QcaWl8G0dHF4CNTTDDA2dnMBjqkAeqyPNDqyLqiOXlBgIJn20S3zY1POsd6Pu%2Fh7PUj3VJuk6N2HX0qYknnyRoyQ4YmQMNtGUGg2hKe5z602csgyzLAgVxggsvYClvL7F9oPt%2B9im%2FSMWlMwNYzy%2Bk%2FeNpaiwWMGgKpqL1gu0DUMsh5%2FnGYA2pY2zDKtD%2FzXM%2FBkkr9dHvprhc%2BtJorTF%2B3BexV%2F8DRyqPC0s7J%2F5j7%2FgypkTuBW9JH&X-Amz-Signature=a895ac49c0378d685e514d892f5c009525381c86677e139fe55f94788b7df8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

