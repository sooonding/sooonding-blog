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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7N2HNZ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7ejdmai38d8m1OfNl2VR%2BVK66dQRkwKT5t9xMOgAcwIgeQdn9xU0fCl29j1bD%2BMotYtKs6AEatKZZCaq%2BR5s2gMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDILLchtB7o1balv56SrcA6U2iSE692sXGbmKP1R4PAlgHgZ3xESLkHLkj97yx%2BFUhxd7j6uX1vqccuacx%2BpIoEheWQKGKH5SfSP4tjF7e7za8CMIeEGdiqd9MOTZmYSa1UE%2FhjcyvPqASXZr9s6J%2F2UBsk9I83r2aejzqX3ki0Tl7%2BexRUxSvPNX9v6oWJdrFdNWLuNb70z4wSeu%2FMolzNE1xR6Npsjl%2FqaZ%2Buv4q55yG1bfaN8xovCrbGPMWqzgDvHwVtb9tqgVZpycteSJuymekLu8y0zQwHegrOAORWTgJsYmPJXrKC7D8uSkRyE4zPTDmjUhIMYhBs8YDyyd%2FrNClE6Yc0mIbo1tsWIvNKiQgt3HsSEKt499jDygAgQBWGBHGqAtCX6ysp3etmezdTNFMBJ%2F2mirZue2Yc5c2oSPBtVActKEi7plJcZuPYDMHRE9CvqSCq83eUH%2F%2BOK%2FmXIRyM3e33hI5eCkqUQRl2SZroNbZHi%2FsQbg%2BZcUPxKweM14xj84wLvFCpRXBD%2Bt6hTIbAS5E88jN10szKwI2%2B8U%2Bxi7Q4IhULlsHLdaR%2Fr4hnnep9QENTQibNskHQPxCL5CFVSwWqP94gYSljhajcIO2%2Bn3ROguldS2XnZytYOFelL3fvdohYu1z5dEMNHd6ssGOqUBoKr9dVox4xX5cMc4RCTGslLgCQ0JUvZ%2FIZtdBwXK4WNdQY%2B77yweGyK%2Bvwy85GM5HBJzvzEsiKiAxWYypXNO%2FAVg6HhBVwgoNOxFFzT9RmvtJghNTniw1C60bV5ie8173OmuxayZ1eM%2FxcbBKqU5IUD31%2Ff2i60fdJtO%2Bg2WczvNfEBLrlyanwmfjMDIAnSUtwJZjeI6c4TXhdgmmyqXgHUgedaZ&X-Amz-Signature=7651720470349ffd098e0d0631cab4bf681cb703f392c9aee3957fe7f0fd8098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPOJAHK%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Ud65da1YVhg0zZsrf4m4ho5w%2FT%2By7d7dYP1XmEq5WgIhANkVNDjQD9JwHLDe2qk2bdaxrWxRXMxH5yxNNTRk7RfbKv8DCHoQABoMNjM3NDIzMTgzODA1Igw25Ce8L2IohTC5ZQ4q3ANBnOnyu%2BhrxgTo3Of9Mr1qv1jYk86gpvUyfOIARj88CZ1Tzm6laWZJVQBTobW762DlLnnysdCeLBMf%2B53YMQahBw53flEYIzldGRtjAG3mK2XLCUdM804%2B4AHIV8fzKzFG9i8k6RV4O%2FZLoYsAgeibi9LLwbY8l0fClba74c0I8vzYu7RYCJ5XS92cg2sfMp1eIh2K9C7LTEWKD2%2B9IAQQBWLVwxDhRDqcyDOCSmi1JU5qANuZcsxROZKCvl2FfE1my6gTEhHxJwru1JPabBs4TZ2u7eEX4TsnNnWNHYKCPs%2F%2BTua%2Fzno%2BXe%2BqcdDqalOt0QDKYpDazT5YMazwGzXNRe2fTyPdtPitVZ32C9pXkElSCppkSCA4sreANZRiD9fYv6j5S3bRBr2CknvxUTy9q3gEWA%2F0fJOBPKpr%2BD6choXP%2BI1MB3HHg2a6eNpS9ImQs6ZzLcyMoedOhV0zZEBnWi9ebA%2BfIsM8uBorDCuZcNqjwYu8R9lQcTQVhi2rwHFZ2iZiuYBXzGzWYCclPYtAqeFTkaNf1UN0pAD0hXjQ0Vw%2Bnou34m83Ja1nx23Z2yFxNc8WG3o7GYMxsnn2IXlJd%2BuZYk1dEIKeJrmpfMee6ni3hCGBx9ko0u2FEjDz3erLBjqkAU1IN%2FL%2Bt3lpsPkiTvpsz2a4GpMBaEchETr2doxyc%2BX%2F3pP9udSO1nvGd9YqkPlQYb1SDraOTtx60gR0ywZVg0BjaCkHaBusruIWew7FhyxtpYHJ07AGotG8AxHuhCq1Grr0Djj7ThccoqczXPzmPLxmq1Q3Qt1w41XUOhwi3ZGIqFpJ5qzM5rylCpHIMZ%2BceoNVNLpeopkoDsbAEglLm8foFdKq&X-Amz-Signature=748313f0707a2e66533b230e1284f0b21a5d947dc1f700e671d343657234bf9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPOJAHK%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Ud65da1YVhg0zZsrf4m4ho5w%2FT%2By7d7dYP1XmEq5WgIhANkVNDjQD9JwHLDe2qk2bdaxrWxRXMxH5yxNNTRk7RfbKv8DCHoQABoMNjM3NDIzMTgzODA1Igw25Ce8L2IohTC5ZQ4q3ANBnOnyu%2BhrxgTo3Of9Mr1qv1jYk86gpvUyfOIARj88CZ1Tzm6laWZJVQBTobW762DlLnnysdCeLBMf%2B53YMQahBw53flEYIzldGRtjAG3mK2XLCUdM804%2B4AHIV8fzKzFG9i8k6RV4O%2FZLoYsAgeibi9LLwbY8l0fClba74c0I8vzYu7RYCJ5XS92cg2sfMp1eIh2K9C7LTEWKD2%2B9IAQQBWLVwxDhRDqcyDOCSmi1JU5qANuZcsxROZKCvl2FfE1my6gTEhHxJwru1JPabBs4TZ2u7eEX4TsnNnWNHYKCPs%2F%2BTua%2Fzno%2BXe%2BqcdDqalOt0QDKYpDazT5YMazwGzXNRe2fTyPdtPitVZ32C9pXkElSCppkSCA4sreANZRiD9fYv6j5S3bRBr2CknvxUTy9q3gEWA%2F0fJOBPKpr%2BD6choXP%2BI1MB3HHg2a6eNpS9ImQs6ZzLcyMoedOhV0zZEBnWi9ebA%2BfIsM8uBorDCuZcNqjwYu8R9lQcTQVhi2rwHFZ2iZiuYBXzGzWYCclPYtAqeFTkaNf1UN0pAD0hXjQ0Vw%2Bnou34m83Ja1nx23Z2yFxNc8WG3o7GYMxsnn2IXlJd%2BuZYk1dEIKeJrmpfMee6ni3hCGBx9ko0u2FEjDz3erLBjqkAU1IN%2FL%2Bt3lpsPkiTvpsz2a4GpMBaEchETr2doxyc%2BX%2F3pP9udSO1nvGd9YqkPlQYb1SDraOTtx60gR0ywZVg0BjaCkHaBusruIWew7FhyxtpYHJ07AGotG8AxHuhCq1Grr0Djj7ThccoqczXPzmPLxmq1Q3Qt1w41XUOhwi3ZGIqFpJ5qzM5rylCpHIMZ%2BceoNVNLpeopkoDsbAEglLm8foFdKq&X-Amz-Signature=d3aa14503c8e2221e3787889f54518b844c0f0d75678cf19712fd6f8f9fec94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPOJAHK%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Ud65da1YVhg0zZsrf4m4ho5w%2FT%2By7d7dYP1XmEq5WgIhANkVNDjQD9JwHLDe2qk2bdaxrWxRXMxH5yxNNTRk7RfbKv8DCHoQABoMNjM3NDIzMTgzODA1Igw25Ce8L2IohTC5ZQ4q3ANBnOnyu%2BhrxgTo3Of9Mr1qv1jYk86gpvUyfOIARj88CZ1Tzm6laWZJVQBTobW762DlLnnysdCeLBMf%2B53YMQahBw53flEYIzldGRtjAG3mK2XLCUdM804%2B4AHIV8fzKzFG9i8k6RV4O%2FZLoYsAgeibi9LLwbY8l0fClba74c0I8vzYu7RYCJ5XS92cg2sfMp1eIh2K9C7LTEWKD2%2B9IAQQBWLVwxDhRDqcyDOCSmi1JU5qANuZcsxROZKCvl2FfE1my6gTEhHxJwru1JPabBs4TZ2u7eEX4TsnNnWNHYKCPs%2F%2BTua%2Fzno%2BXe%2BqcdDqalOt0QDKYpDazT5YMazwGzXNRe2fTyPdtPitVZ32C9pXkElSCppkSCA4sreANZRiD9fYv6j5S3bRBr2CknvxUTy9q3gEWA%2F0fJOBPKpr%2BD6choXP%2BI1MB3HHg2a6eNpS9ImQs6ZzLcyMoedOhV0zZEBnWi9ebA%2BfIsM8uBorDCuZcNqjwYu8R9lQcTQVhi2rwHFZ2iZiuYBXzGzWYCclPYtAqeFTkaNf1UN0pAD0hXjQ0Vw%2Bnou34m83Ja1nx23Z2yFxNc8WG3o7GYMxsnn2IXlJd%2BuZYk1dEIKeJrmpfMee6ni3hCGBx9ko0u2FEjDz3erLBjqkAU1IN%2FL%2Bt3lpsPkiTvpsz2a4GpMBaEchETr2doxyc%2BX%2F3pP9udSO1nvGd9YqkPlQYb1SDraOTtx60gR0ywZVg0BjaCkHaBusruIWew7FhyxtpYHJ07AGotG8AxHuhCq1Grr0Djj7ThccoqczXPzmPLxmq1Q3Qt1w41XUOhwi3ZGIqFpJ5qzM5rylCpHIMZ%2BceoNVNLpeopkoDsbAEglLm8foFdKq&X-Amz-Signature=05abb7349ce72ac74e9ed7087c8ce20f6252977178cc206ecf76aee18783bdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPOJAHK%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Ud65da1YVhg0zZsrf4m4ho5w%2FT%2By7d7dYP1XmEq5WgIhANkVNDjQD9JwHLDe2qk2bdaxrWxRXMxH5yxNNTRk7RfbKv8DCHoQABoMNjM3NDIzMTgzODA1Igw25Ce8L2IohTC5ZQ4q3ANBnOnyu%2BhrxgTo3Of9Mr1qv1jYk86gpvUyfOIARj88CZ1Tzm6laWZJVQBTobW762DlLnnysdCeLBMf%2B53YMQahBw53flEYIzldGRtjAG3mK2XLCUdM804%2B4AHIV8fzKzFG9i8k6RV4O%2FZLoYsAgeibi9LLwbY8l0fClba74c0I8vzYu7RYCJ5XS92cg2sfMp1eIh2K9C7LTEWKD2%2B9IAQQBWLVwxDhRDqcyDOCSmi1JU5qANuZcsxROZKCvl2FfE1my6gTEhHxJwru1JPabBs4TZ2u7eEX4TsnNnWNHYKCPs%2F%2BTua%2Fzno%2BXe%2BqcdDqalOt0QDKYpDazT5YMazwGzXNRe2fTyPdtPitVZ32C9pXkElSCppkSCA4sreANZRiD9fYv6j5S3bRBr2CknvxUTy9q3gEWA%2F0fJOBPKpr%2BD6choXP%2BI1MB3HHg2a6eNpS9ImQs6ZzLcyMoedOhV0zZEBnWi9ebA%2BfIsM8uBorDCuZcNqjwYu8R9lQcTQVhi2rwHFZ2iZiuYBXzGzWYCclPYtAqeFTkaNf1UN0pAD0hXjQ0Vw%2Bnou34m83Ja1nx23Z2yFxNc8WG3o7GYMxsnn2IXlJd%2BuZYk1dEIKeJrmpfMee6ni3hCGBx9ko0u2FEjDz3erLBjqkAU1IN%2FL%2Bt3lpsPkiTvpsz2a4GpMBaEchETr2doxyc%2BX%2F3pP9udSO1nvGd9YqkPlQYb1SDraOTtx60gR0ywZVg0BjaCkHaBusruIWew7FhyxtpYHJ07AGotG8AxHuhCq1Grr0Djj7ThccoqczXPzmPLxmq1Q3Qt1w41XUOhwi3ZGIqFpJ5qzM5rylCpHIMZ%2BceoNVNLpeopkoDsbAEglLm8foFdKq&X-Amz-Signature=46a9a66429eec5d5951705ab30c41a993e8cee2f85e2ad9adafa524fbbd2bfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPOJAHK%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Ud65da1YVhg0zZsrf4m4ho5w%2FT%2By7d7dYP1XmEq5WgIhANkVNDjQD9JwHLDe2qk2bdaxrWxRXMxH5yxNNTRk7RfbKv8DCHoQABoMNjM3NDIzMTgzODA1Igw25Ce8L2IohTC5ZQ4q3ANBnOnyu%2BhrxgTo3Of9Mr1qv1jYk86gpvUyfOIARj88CZ1Tzm6laWZJVQBTobW762DlLnnysdCeLBMf%2B53YMQahBw53flEYIzldGRtjAG3mK2XLCUdM804%2B4AHIV8fzKzFG9i8k6RV4O%2FZLoYsAgeibi9LLwbY8l0fClba74c0I8vzYu7RYCJ5XS92cg2sfMp1eIh2K9C7LTEWKD2%2B9IAQQBWLVwxDhRDqcyDOCSmi1JU5qANuZcsxROZKCvl2FfE1my6gTEhHxJwru1JPabBs4TZ2u7eEX4TsnNnWNHYKCPs%2F%2BTua%2Fzno%2BXe%2BqcdDqalOt0QDKYpDazT5YMazwGzXNRe2fTyPdtPitVZ32C9pXkElSCppkSCA4sreANZRiD9fYv6j5S3bRBr2CknvxUTy9q3gEWA%2F0fJOBPKpr%2BD6choXP%2BI1MB3HHg2a6eNpS9ImQs6ZzLcyMoedOhV0zZEBnWi9ebA%2BfIsM8uBorDCuZcNqjwYu8R9lQcTQVhi2rwHFZ2iZiuYBXzGzWYCclPYtAqeFTkaNf1UN0pAD0hXjQ0Vw%2Bnou34m83Ja1nx23Z2yFxNc8WG3o7GYMxsnn2IXlJd%2BuZYk1dEIKeJrmpfMee6ni3hCGBx9ko0u2FEjDz3erLBjqkAU1IN%2FL%2Bt3lpsPkiTvpsz2a4GpMBaEchETr2doxyc%2BX%2F3pP9udSO1nvGd9YqkPlQYb1SDraOTtx60gR0ywZVg0BjaCkHaBusruIWew7FhyxtpYHJ07AGotG8AxHuhCq1Grr0Djj7ThccoqczXPzmPLxmq1Q3Qt1w41XUOhwi3ZGIqFpJ5qzM5rylCpHIMZ%2BceoNVNLpeopkoDsbAEglLm8foFdKq&X-Amz-Signature=5fa8af0e6463cad327d7bd51b70d5a9efe66861cbd54218f8759e8e10b07e081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7N2HNZ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC7ejdmai38d8m1OfNl2VR%2BVK66dQRkwKT5t9xMOgAcwIgeQdn9xU0fCl29j1bD%2BMotYtKs6AEatKZZCaq%2BR5s2gMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDILLchtB7o1balv56SrcA6U2iSE692sXGbmKP1R4PAlgHgZ3xESLkHLkj97yx%2BFUhxd7j6uX1vqccuacx%2BpIoEheWQKGKH5SfSP4tjF7e7za8CMIeEGdiqd9MOTZmYSa1UE%2FhjcyvPqASXZr9s6J%2F2UBsk9I83r2aejzqX3ki0Tl7%2BexRUxSvPNX9v6oWJdrFdNWLuNb70z4wSeu%2FMolzNE1xR6Npsjl%2FqaZ%2Buv4q55yG1bfaN8xovCrbGPMWqzgDvHwVtb9tqgVZpycteSJuymekLu8y0zQwHegrOAORWTgJsYmPJXrKC7D8uSkRyE4zPTDmjUhIMYhBs8YDyyd%2FrNClE6Yc0mIbo1tsWIvNKiQgt3HsSEKt499jDygAgQBWGBHGqAtCX6ysp3etmezdTNFMBJ%2F2mirZue2Yc5c2oSPBtVActKEi7plJcZuPYDMHRE9CvqSCq83eUH%2F%2BOK%2FmXIRyM3e33hI5eCkqUQRl2SZroNbZHi%2FsQbg%2BZcUPxKweM14xj84wLvFCpRXBD%2Bt6hTIbAS5E88jN10szKwI2%2B8U%2Bxi7Q4IhULlsHLdaR%2Fr4hnnep9QENTQibNskHQPxCL5CFVSwWqP94gYSljhajcIO2%2Bn3ROguldS2XnZytYOFelL3fvdohYu1z5dEMNHd6ssGOqUBoKr9dVox4xX5cMc4RCTGslLgCQ0JUvZ%2FIZtdBwXK4WNdQY%2B77yweGyK%2Bvwy85GM5HBJzvzEsiKiAxWYypXNO%2FAVg6HhBVwgoNOxFFzT9RmvtJghNTniw1C60bV5ie8173OmuxayZ1eM%2FxcbBKqU5IUD31%2Ff2i60fdJtO%2Bg2WczvNfEBLrlyanwmfjMDIAnSUtwJZjeI6c4TXhdgmmyqXgHUgedaZ&X-Amz-Signature=2edca76e2d1b82bd8f00caf4abf8a3d69df15da85ed15f6779b38681ec5eb793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

