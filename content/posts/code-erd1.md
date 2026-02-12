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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKXCXMV%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGqFmAAH8T2CZejd6Wv9KiXlZYOCxolm%2F1c4C4OLm8tJAiEA2ada8tqDDlc%2BkouyZhgX2MkAxQAaPXP%2Bdrmu%2BjhmTPkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm9LDhVYN6KMxzHpSrcAxZSOl7xsHN29XHlsyvGr02n%2BayzaX4VGShNiJdooINoY4d8c0i86fQA%2Bt7wV7mTp%2BSf7ExWGy0ST12mO2u62UKdv44rArH%2F7JIvTTXleDt%2Finr4TCp%2Fmz8D5DAJHDDXXBNTXtACDKNpw9ntKTIjSTOeoYMFwfJlXTBnbnvI0XSvUkTaa3uAuxS8ldYkYN29DcPDntv6NTEMFOa296%2FN2Fc5GcsQAJDxHLEU8e2UQghxjetE1rVypduBOJpFeZQyRDJGz2mvSvR9vU8QJVNfFFrj8f2Z80CRKob27i0SZ9tLiKXGMgvbwZNp3P%2FYn8OuZKTGhRyjKuXi%2FA2hcZy9BZM9v1fKN%2FGklNEaEaUM3ii5z9VhvzE17zmdBY1kWk9wZKA%2FrRBZ9mGoYeThsETsBhIAX3kGwaQJxEtCp%2BEC5zHyjerjAylX3VvA4mMcDCWBM4Md7aXPzyJpSs8J7R%2FgyrMNNuuRQcy7Y6kPgpjw5zm0rGsVuuYk7K2fnhg0OAZyFlksGnmX6Gl%2B6Y%2BLFLjGNX3O9FJYJu1QtvHPAPpegcwVsDgAOTy9sAFj4wdzlX0pqsOLUjnhTv03Hi1u43iGJ1t1id4jRxoUkbvtuiNC6kg3lkrpFVRjjUsldBaMMN%2BitMwGOqUBsIt1RMP6a%2Fq1zSoIBIy1eXJXu8a6TwKxxS7ILoanmj2Mt9YLvxnxkmvyp4tjtCHc49oxOagjKlZilKc2N00%2BMF62oFhAIxpdYrQqG0o5OkUtcUhzm65Ru3AYu1upC0SE5YV9IZzZf%2BSrqWHp5A74qAlgo29wUlBU6eTRgwIYIWI5P553yUI4s7rvVie%2F1psynwXYmKsnSs1qklD8H1i5KoEvIgZv&X-Amz-Signature=ee0de14a0b50ac323a04c3eacb5f49e8141063bc21f6f9acd5692ea1f65ffbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZXY7I3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDhv9GXwyroi9UUCr8YY3diOkHeVFeOeIPz22S%2F92QHAgIhAJPnqQvUr5NX78mew8O1MOlB%2BaqAeUw4zQvtT3Wx7H8jKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRQdJjS5GuM%2FHx%2BPAq3AP4cJJbum4jLEU0HM019PEEgJsJlTwfOPovkpwMLrYPBC0scR6uHO6dxFl%2FhBJXZ7TY1FcsNubgpHiSg%2Bb%2BIyB60JyvLE6wX7VYI2%2FQxvjKNrYKtsSE8%2FqX3YrnIILTKpwMXQ1Db%2F0S1tLr0l57KrnLLno0AKFoseMCP6mS847Xb3VMOEA5YFatQKj3Toh%2BURIth%2Fc0LnYABbt2Oq4xPImGLAFVZgdGQbQ1shqt0UoQZgNGN%2FhvKEB7G%2F%2BpnTIwDvZcn3RS%2Bdk03bicmZrDTArI8KSvAtZ4aUJf1MjRvV6z6LRpqhtsxIQb1nrwGDP6prFyzkbFuJAzRpIppCTGChIzaYrGNOt%2BA6wwwsL2kgx7Zz8I2z4K3jBB%2Fmv62dToa4qgh%2F9a7vISWHtTtFD6KS4g0jcIfddQChgN%2B9wzq9i8iFzRjvBvMFeQIUQBoLnyQODyXXDz%2BXLchnJuLiLT%2FMlsI5HMecFmDlnZ3r5RAnjIxHkELC%2FBsUKPO%2FkYqq6sRzh0N1%2BdoxZMn7pTStQyXZU4ZGGHTbmi1D9fl4HYAGiupxcac6tEgf83tZJa3WQsu7BbRBhhmW5peHwazFWhQJe4Ltfe8h16tG1ogpXfgf1JfbHXvPKEuymKApZ9lzDOpLTMBjqkAb8qsdNnNL447Zo%2BnPjTHo9oHK8wnBQJtvgq9KdGPnRBc2DtMh62Fhv5AJVJOdLXxkN9GSXM0pWEb7EqGEz2TAc9t8BNXyEC6L4s5sOXIAnchWHIADWM1g%2B9G49AFM6gXoMe2Thc3iVsJwMrsAbeI%2BOQjaaTO1SAP4YLCEocwKOb9QFjUWuDdCX2p%2BMJdWvfiXzvWkVMArXb5qahP4GoqzTAs5kB&X-Amz-Signature=9fcd6ca08316eca06e6a8b4c77fb0ea10843853a6651d37cce19e8ee80594d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZXY7I3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDhv9GXwyroi9UUCr8YY3diOkHeVFeOeIPz22S%2F92QHAgIhAJPnqQvUr5NX78mew8O1MOlB%2BaqAeUw4zQvtT3Wx7H8jKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRQdJjS5GuM%2FHx%2BPAq3AP4cJJbum4jLEU0HM019PEEgJsJlTwfOPovkpwMLrYPBC0scR6uHO6dxFl%2FhBJXZ7TY1FcsNubgpHiSg%2Bb%2BIyB60JyvLE6wX7VYI2%2FQxvjKNrYKtsSE8%2FqX3YrnIILTKpwMXQ1Db%2F0S1tLr0l57KrnLLno0AKFoseMCP6mS847Xb3VMOEA5YFatQKj3Toh%2BURIth%2Fc0LnYABbt2Oq4xPImGLAFVZgdGQbQ1shqt0UoQZgNGN%2FhvKEB7G%2F%2BpnTIwDvZcn3RS%2Bdk03bicmZrDTArI8KSvAtZ4aUJf1MjRvV6z6LRpqhtsxIQb1nrwGDP6prFyzkbFuJAzRpIppCTGChIzaYrGNOt%2BA6wwwsL2kgx7Zz8I2z4K3jBB%2Fmv62dToa4qgh%2F9a7vISWHtTtFD6KS4g0jcIfddQChgN%2B9wzq9i8iFzRjvBvMFeQIUQBoLnyQODyXXDz%2BXLchnJuLiLT%2FMlsI5HMecFmDlnZ3r5RAnjIxHkELC%2FBsUKPO%2FkYqq6sRzh0N1%2BdoxZMn7pTStQyXZU4ZGGHTbmi1D9fl4HYAGiupxcac6tEgf83tZJa3WQsu7BbRBhhmW5peHwazFWhQJe4Ltfe8h16tG1ogpXfgf1JfbHXvPKEuymKApZ9lzDOpLTMBjqkAb8qsdNnNL447Zo%2BnPjTHo9oHK8wnBQJtvgq9KdGPnRBc2DtMh62Fhv5AJVJOdLXxkN9GSXM0pWEb7EqGEz2TAc9t8BNXyEC6L4s5sOXIAnchWHIADWM1g%2B9G49AFM6gXoMe2Thc3iVsJwMrsAbeI%2BOQjaaTO1SAP4YLCEocwKOb9QFjUWuDdCX2p%2BMJdWvfiXzvWkVMArXb5qahP4GoqzTAs5kB&X-Amz-Signature=f1cdab4b24b8223a6074d0e3282442e098b250d6fd334ed0feebc6c3ea0796f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZXY7I3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDhv9GXwyroi9UUCr8YY3diOkHeVFeOeIPz22S%2F92QHAgIhAJPnqQvUr5NX78mew8O1MOlB%2BaqAeUw4zQvtT3Wx7H8jKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRQdJjS5GuM%2FHx%2BPAq3AP4cJJbum4jLEU0HM019PEEgJsJlTwfOPovkpwMLrYPBC0scR6uHO6dxFl%2FhBJXZ7TY1FcsNubgpHiSg%2Bb%2BIyB60JyvLE6wX7VYI2%2FQxvjKNrYKtsSE8%2FqX3YrnIILTKpwMXQ1Db%2F0S1tLr0l57KrnLLno0AKFoseMCP6mS847Xb3VMOEA5YFatQKj3Toh%2BURIth%2Fc0LnYABbt2Oq4xPImGLAFVZgdGQbQ1shqt0UoQZgNGN%2FhvKEB7G%2F%2BpnTIwDvZcn3RS%2Bdk03bicmZrDTArI8KSvAtZ4aUJf1MjRvV6z6LRpqhtsxIQb1nrwGDP6prFyzkbFuJAzRpIppCTGChIzaYrGNOt%2BA6wwwsL2kgx7Zz8I2z4K3jBB%2Fmv62dToa4qgh%2F9a7vISWHtTtFD6KS4g0jcIfddQChgN%2B9wzq9i8iFzRjvBvMFeQIUQBoLnyQODyXXDz%2BXLchnJuLiLT%2FMlsI5HMecFmDlnZ3r5RAnjIxHkELC%2FBsUKPO%2FkYqq6sRzh0N1%2BdoxZMn7pTStQyXZU4ZGGHTbmi1D9fl4HYAGiupxcac6tEgf83tZJa3WQsu7BbRBhhmW5peHwazFWhQJe4Ltfe8h16tG1ogpXfgf1JfbHXvPKEuymKApZ9lzDOpLTMBjqkAb8qsdNnNL447Zo%2BnPjTHo9oHK8wnBQJtvgq9KdGPnRBc2DtMh62Fhv5AJVJOdLXxkN9GSXM0pWEb7EqGEz2TAc9t8BNXyEC6L4s5sOXIAnchWHIADWM1g%2B9G49AFM6gXoMe2Thc3iVsJwMrsAbeI%2BOQjaaTO1SAP4YLCEocwKOb9QFjUWuDdCX2p%2BMJdWvfiXzvWkVMArXb5qahP4GoqzTAs5kB&X-Amz-Signature=6141b104385065659502fa432f5f123d7618ebb2efc93c262ff84bed2698a874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZXY7I3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDhv9GXwyroi9UUCr8YY3diOkHeVFeOeIPz22S%2F92QHAgIhAJPnqQvUr5NX78mew8O1MOlB%2BaqAeUw4zQvtT3Wx7H8jKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRQdJjS5GuM%2FHx%2BPAq3AP4cJJbum4jLEU0HM019PEEgJsJlTwfOPovkpwMLrYPBC0scR6uHO6dxFl%2FhBJXZ7TY1FcsNubgpHiSg%2Bb%2BIyB60JyvLE6wX7VYI2%2FQxvjKNrYKtsSE8%2FqX3YrnIILTKpwMXQ1Db%2F0S1tLr0l57KrnLLno0AKFoseMCP6mS847Xb3VMOEA5YFatQKj3Toh%2BURIth%2Fc0LnYABbt2Oq4xPImGLAFVZgdGQbQ1shqt0UoQZgNGN%2FhvKEB7G%2F%2BpnTIwDvZcn3RS%2Bdk03bicmZrDTArI8KSvAtZ4aUJf1MjRvV6z6LRpqhtsxIQb1nrwGDP6prFyzkbFuJAzRpIppCTGChIzaYrGNOt%2BA6wwwsL2kgx7Zz8I2z4K3jBB%2Fmv62dToa4qgh%2F9a7vISWHtTtFD6KS4g0jcIfddQChgN%2B9wzq9i8iFzRjvBvMFeQIUQBoLnyQODyXXDz%2BXLchnJuLiLT%2FMlsI5HMecFmDlnZ3r5RAnjIxHkELC%2FBsUKPO%2FkYqq6sRzh0N1%2BdoxZMn7pTStQyXZU4ZGGHTbmi1D9fl4HYAGiupxcac6tEgf83tZJa3WQsu7BbRBhhmW5peHwazFWhQJe4Ltfe8h16tG1ogpXfgf1JfbHXvPKEuymKApZ9lzDOpLTMBjqkAb8qsdNnNL447Zo%2BnPjTHo9oHK8wnBQJtvgq9KdGPnRBc2DtMh62Fhv5AJVJOdLXxkN9GSXM0pWEb7EqGEz2TAc9t8BNXyEC6L4s5sOXIAnchWHIADWM1g%2B9G49AFM6gXoMe2Thc3iVsJwMrsAbeI%2BOQjaaTO1SAP4YLCEocwKOb9QFjUWuDdCX2p%2BMJdWvfiXzvWkVMArXb5qahP4GoqzTAs5kB&X-Amz-Signature=12936f07618f77136d246794118b41a206ca3d5e8e1241584b12d5e1c700fa3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZXY7I3%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDhv9GXwyroi9UUCr8YY3diOkHeVFeOeIPz22S%2F92QHAgIhAJPnqQvUr5NX78mew8O1MOlB%2BaqAeUw4zQvtT3Wx7H8jKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRQdJjS5GuM%2FHx%2BPAq3AP4cJJbum4jLEU0HM019PEEgJsJlTwfOPovkpwMLrYPBC0scR6uHO6dxFl%2FhBJXZ7TY1FcsNubgpHiSg%2Bb%2BIyB60JyvLE6wX7VYI2%2FQxvjKNrYKtsSE8%2FqX3YrnIILTKpwMXQ1Db%2F0S1tLr0l57KrnLLno0AKFoseMCP6mS847Xb3VMOEA5YFatQKj3Toh%2BURIth%2Fc0LnYABbt2Oq4xPImGLAFVZgdGQbQ1shqt0UoQZgNGN%2FhvKEB7G%2F%2BpnTIwDvZcn3RS%2Bdk03bicmZrDTArI8KSvAtZ4aUJf1MjRvV6z6LRpqhtsxIQb1nrwGDP6prFyzkbFuJAzRpIppCTGChIzaYrGNOt%2BA6wwwsL2kgx7Zz8I2z4K3jBB%2Fmv62dToa4qgh%2F9a7vISWHtTtFD6KS4g0jcIfddQChgN%2B9wzq9i8iFzRjvBvMFeQIUQBoLnyQODyXXDz%2BXLchnJuLiLT%2FMlsI5HMecFmDlnZ3r5RAnjIxHkELC%2FBsUKPO%2FkYqq6sRzh0N1%2BdoxZMn7pTStQyXZU4ZGGHTbmi1D9fl4HYAGiupxcac6tEgf83tZJa3WQsu7BbRBhhmW5peHwazFWhQJe4Ltfe8h16tG1ogpXfgf1JfbHXvPKEuymKApZ9lzDOpLTMBjqkAb8qsdNnNL447Zo%2BnPjTHo9oHK8wnBQJtvgq9KdGPnRBc2DtMh62Fhv5AJVJOdLXxkN9GSXM0pWEb7EqGEz2TAc9t8BNXyEC6L4s5sOXIAnchWHIADWM1g%2B9G49AFM6gXoMe2Thc3iVsJwMrsAbeI%2BOQjaaTO1SAP4YLCEocwKOb9QFjUWuDdCX2p%2BMJdWvfiXzvWkVMArXb5qahP4GoqzTAs5kB&X-Amz-Signature=82b5c1a7364e3377b11ee3cd82a018c6917cf1dcd5d431f52ea400c249745d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKXCXMV%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T021326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGqFmAAH8T2CZejd6Wv9KiXlZYOCxolm%2F1c4C4OLm8tJAiEA2ada8tqDDlc%2BkouyZhgX2MkAxQAaPXP%2Bdrmu%2BjhmTPkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNm9LDhVYN6KMxzHpSrcAxZSOl7xsHN29XHlsyvGr02n%2BayzaX4VGShNiJdooINoY4d8c0i86fQA%2Bt7wV7mTp%2BSf7ExWGy0ST12mO2u62UKdv44rArH%2F7JIvTTXleDt%2Finr4TCp%2Fmz8D5DAJHDDXXBNTXtACDKNpw9ntKTIjSTOeoYMFwfJlXTBnbnvI0XSvUkTaa3uAuxS8ldYkYN29DcPDntv6NTEMFOa296%2FN2Fc5GcsQAJDxHLEU8e2UQghxjetE1rVypduBOJpFeZQyRDJGz2mvSvR9vU8QJVNfFFrj8f2Z80CRKob27i0SZ9tLiKXGMgvbwZNp3P%2FYn8OuZKTGhRyjKuXi%2FA2hcZy9BZM9v1fKN%2FGklNEaEaUM3ii5z9VhvzE17zmdBY1kWk9wZKA%2FrRBZ9mGoYeThsETsBhIAX3kGwaQJxEtCp%2BEC5zHyjerjAylX3VvA4mMcDCWBM4Md7aXPzyJpSs8J7R%2FgyrMNNuuRQcy7Y6kPgpjw5zm0rGsVuuYk7K2fnhg0OAZyFlksGnmX6Gl%2B6Y%2BLFLjGNX3O9FJYJu1QtvHPAPpegcwVsDgAOTy9sAFj4wdzlX0pqsOLUjnhTv03Hi1u43iGJ1t1id4jRxoUkbvtuiNC6kg3lkrpFVRjjUsldBaMMN%2BitMwGOqUBsIt1RMP6a%2Fq1zSoIBIy1eXJXu8a6TwKxxS7ILoanmj2Mt9YLvxnxkmvyp4tjtCHc49oxOagjKlZilKc2N00%2BMF62oFhAIxpdYrQqG0o5OkUtcUhzm65Ru3AYu1upC0SE5YV9IZzZf%2BSrqWHp5A74qAlgo29wUlBU6eTRgwIYIWI5P553yUI4s7rvVie%2F1psynwXYmKsnSs1qklD8H1i5KoEvIgZv&X-Amz-Signature=acf4b1269b4b7afef08e1f168c72c2ec0422f8a9e65a09e79aa91efbea1ecdca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

