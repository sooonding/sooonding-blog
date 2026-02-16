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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZ6YAV4%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIG5%2F1crewwXFphO%2BoQpFwLZGmDvZGqEyfVbE4fqM2o8pAiEA7%2FaKI7596UuC0dALwGhbxnqVVaA08QFkNEURY%2BIm3mIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL33LFouNP9JdIF8GSrcAzGCVIA4B0%2Bxk9HwWRrq0i4GPl%2BVvZ9J%2FHGYCdsmaIGv4z1wiTtEiPqyinhF1%2BjhpjLNRiQ9h9flKBQGVKAmupF%2F7uJlS5uObqrReAm0sGtmMIwAVEjRJQ3choRNEh98vGPDTWwW5YnscRAz5MBvElkdDvqaEegxR7hnAG3Wb6hXGmLXLUJjCeMWLNkk0Gh%2FL7%2F4k7Yx7pFw8SXRHxRcTmh6LdcxumgoUYEri8RHTadIhIl4cTnXWsctwc9OAupBdXOHqyqM7MUFYGIOMN89cacw8NpUeJnbZDqzemr1iq%2BFXOWsS3PO6nJmXjbicOKcCqwTwErFydPAbh1tLSO13Z%2Fljw2%2Bnn5uYc1JA7Yo9QxJeehexmAFWZCEGQARmXoOSrMApLAUd92DDkFPuw6jN5PvCm09r9hBAu5%2B%2BteLBs6aEOs5h5hHYgCX%2FEEmjX%2B5tpQbkWFHNOsAnaOIE4QG387rrsFO6W%2FIR3AUgtWF7fLCNrJWqxxw4ZcrZFlJEe%2ByZdWFrziNNfVbzZDOmzEM0zTAhdaAbLh9CYMPhPZ2pq1Ehbgt84MnwCt2dKdtHKYsaFfQ%2FrpVq97HBgbZ0sV%2FmFwk%2BS2449TwnJTSqJuZi09BG5aMRo2Ks1ELS0BeMO7VycwGOqUBXhS2g1gw1ZvhR%2B%2B1NvxzWlRY2F0QDVk%2F4NkijLv3tSB1COOGXudiej8yMuaiMTDKQ8DwHuYCWTH1ycPlXGeV7PBFKv%2BkpyewvJXWOwnp86ElUUdDWpd%2BShvpZEuailtEanxkPYmRR2pLhFbL%2BRZn5bPFc%2FFU4lL5%2BtESeWlFY%2B5TV6G%2FPlOl7z3kAtQQlwu5jfwKm6QPK46OYw6pJRADP40K9mmq&X-Amz-Signature=ceed7111a480d7f11d736a130517a0fc063bb22bd732dc2f8cd9fb256c675031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBU575V%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDhUcJhKwhAFzj3tdWZLv4DzYWtZalm4U5Ogq7NnBjyFAIhALrMbjKRBS5l%2FH%2B8LMN0rEmS%2F96ms8kK0HYnhrPH7%2BHhKv8DCCoQABoMNjM3NDIzMTgzODA1IgyDqq24qcaCckMogSEq3AN%2BstXmvno9AVbcPpYUVP44UMUC39yMsgnWyfcOGrYLVtZ1UuS0m0rURC2VDUVV29YfNDYC%2BTx%2Fnb7p1AxXkoXcZW82rkcWELzl7m9LvNdH3gQ9EzOpwCjBygULMK6ty1KTWmdoaQeEjH8243ZM3UfBJYn8eXjEVI9RSnO8SMg5I6kxyN0AYlcQ7arn2VAU3QCZh092KbIRdd0qXoXyleWa6sL2hUUrX90SHKBCPG305jKhmxcE9DvCDOTfApxEdomNIgxxUK4B8HeNzn7mOrUT1MYCJT5hNN1gru4jYN6htmuMdNyBb3zW%2BTSTgD4%2B3D3TgclJwKLf3zcEDcLUPYVCdssK6mTr%2B0TCstuC5eG9O9f%2B0fZjvki3QgnHLxLcycC8%2FOholjl4ZMCAWTxXmwZYcbO2m71pGjM3%2B2ssnXjasek%2B%2F8q7iDedpFUMuItjPEfz6yclSFIovt1e%2Bim2WAJ%2FTi201ViGDHKq30UP2MW4CQjTwBsgjrkafxJfRV%2BaY5sck5RRBU2I9FjzTfRYBIfSthruSuiORRGsNqTJUXuJ8cY89dkHrLudw49W8HxKKadkTxpGowtf5ZVok00kw2O2syBglauVAktjSUqXeoNaOsAa%2BUcvaGCIEc4LLTDT1snMBjqkAeYJ5unZBu7O%2Bk%2B87FmUNZ3A9bbhSCfcxQozEXLNO0aQK7N1VVuQvVcHNh8H0mLx08zcwtc06oCZ2QHGVFVhmWzEBeIVXvhwqEGFGQCp1ZN%2FOnzGnV%2BrOSP76gmJeygm0YRSjjBH83axQI0wJYmh%2B0lk5hMX9jNtkTRLmIFfbkQgMvW5sP7irsDx9yDFASFc0fDASewibmFXBjxD66u2MbF82k6m&X-Amz-Signature=ba799d77fe37d0ad3e057b7180829080267fcc320392eab13c8e862f29e29468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBU575V%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDhUcJhKwhAFzj3tdWZLv4DzYWtZalm4U5Ogq7NnBjyFAIhALrMbjKRBS5l%2FH%2B8LMN0rEmS%2F96ms8kK0HYnhrPH7%2BHhKv8DCCoQABoMNjM3NDIzMTgzODA1IgyDqq24qcaCckMogSEq3AN%2BstXmvno9AVbcPpYUVP44UMUC39yMsgnWyfcOGrYLVtZ1UuS0m0rURC2VDUVV29YfNDYC%2BTx%2Fnb7p1AxXkoXcZW82rkcWELzl7m9LvNdH3gQ9EzOpwCjBygULMK6ty1KTWmdoaQeEjH8243ZM3UfBJYn8eXjEVI9RSnO8SMg5I6kxyN0AYlcQ7arn2VAU3QCZh092KbIRdd0qXoXyleWa6sL2hUUrX90SHKBCPG305jKhmxcE9DvCDOTfApxEdomNIgxxUK4B8HeNzn7mOrUT1MYCJT5hNN1gru4jYN6htmuMdNyBb3zW%2BTSTgD4%2B3D3TgclJwKLf3zcEDcLUPYVCdssK6mTr%2B0TCstuC5eG9O9f%2B0fZjvki3QgnHLxLcycC8%2FOholjl4ZMCAWTxXmwZYcbO2m71pGjM3%2B2ssnXjasek%2B%2F8q7iDedpFUMuItjPEfz6yclSFIovt1e%2Bim2WAJ%2FTi201ViGDHKq30UP2MW4CQjTwBsgjrkafxJfRV%2BaY5sck5RRBU2I9FjzTfRYBIfSthruSuiORRGsNqTJUXuJ8cY89dkHrLudw49W8HxKKadkTxpGowtf5ZVok00kw2O2syBglauVAktjSUqXeoNaOsAa%2BUcvaGCIEc4LLTDT1snMBjqkAeYJ5unZBu7O%2Bk%2B87FmUNZ3A9bbhSCfcxQozEXLNO0aQK7N1VVuQvVcHNh8H0mLx08zcwtc06oCZ2QHGVFVhmWzEBeIVXvhwqEGFGQCp1ZN%2FOnzGnV%2BrOSP76gmJeygm0YRSjjBH83axQI0wJYmh%2B0lk5hMX9jNtkTRLmIFfbkQgMvW5sP7irsDx9yDFASFc0fDASewibmFXBjxD66u2MbF82k6m&X-Amz-Signature=23781a39f9f707af4651a39096ae930eae85e0fb14b6e7d221de018c3fba199c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBU575V%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDhUcJhKwhAFzj3tdWZLv4DzYWtZalm4U5Ogq7NnBjyFAIhALrMbjKRBS5l%2FH%2B8LMN0rEmS%2F96ms8kK0HYnhrPH7%2BHhKv8DCCoQABoMNjM3NDIzMTgzODA1IgyDqq24qcaCckMogSEq3AN%2BstXmvno9AVbcPpYUVP44UMUC39yMsgnWyfcOGrYLVtZ1UuS0m0rURC2VDUVV29YfNDYC%2BTx%2Fnb7p1AxXkoXcZW82rkcWELzl7m9LvNdH3gQ9EzOpwCjBygULMK6ty1KTWmdoaQeEjH8243ZM3UfBJYn8eXjEVI9RSnO8SMg5I6kxyN0AYlcQ7arn2VAU3QCZh092KbIRdd0qXoXyleWa6sL2hUUrX90SHKBCPG305jKhmxcE9DvCDOTfApxEdomNIgxxUK4B8HeNzn7mOrUT1MYCJT5hNN1gru4jYN6htmuMdNyBb3zW%2BTSTgD4%2B3D3TgclJwKLf3zcEDcLUPYVCdssK6mTr%2B0TCstuC5eG9O9f%2B0fZjvki3QgnHLxLcycC8%2FOholjl4ZMCAWTxXmwZYcbO2m71pGjM3%2B2ssnXjasek%2B%2F8q7iDedpFUMuItjPEfz6yclSFIovt1e%2Bim2WAJ%2FTi201ViGDHKq30UP2MW4CQjTwBsgjrkafxJfRV%2BaY5sck5RRBU2I9FjzTfRYBIfSthruSuiORRGsNqTJUXuJ8cY89dkHrLudw49W8HxKKadkTxpGowtf5ZVok00kw2O2syBglauVAktjSUqXeoNaOsAa%2BUcvaGCIEc4LLTDT1snMBjqkAeYJ5unZBu7O%2Bk%2B87FmUNZ3A9bbhSCfcxQozEXLNO0aQK7N1VVuQvVcHNh8H0mLx08zcwtc06oCZ2QHGVFVhmWzEBeIVXvhwqEGFGQCp1ZN%2FOnzGnV%2BrOSP76gmJeygm0YRSjjBH83axQI0wJYmh%2B0lk5hMX9jNtkTRLmIFfbkQgMvW5sP7irsDx9yDFASFc0fDASewibmFXBjxD66u2MbF82k6m&X-Amz-Signature=7572c167d188c5dee8fc8352225c12b4e69c1a5f47c158d98ff847787275c34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBU575V%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDhUcJhKwhAFzj3tdWZLv4DzYWtZalm4U5Ogq7NnBjyFAIhALrMbjKRBS5l%2FH%2B8LMN0rEmS%2F96ms8kK0HYnhrPH7%2BHhKv8DCCoQABoMNjM3NDIzMTgzODA1IgyDqq24qcaCckMogSEq3AN%2BstXmvno9AVbcPpYUVP44UMUC39yMsgnWyfcOGrYLVtZ1UuS0m0rURC2VDUVV29YfNDYC%2BTx%2Fnb7p1AxXkoXcZW82rkcWELzl7m9LvNdH3gQ9EzOpwCjBygULMK6ty1KTWmdoaQeEjH8243ZM3UfBJYn8eXjEVI9RSnO8SMg5I6kxyN0AYlcQ7arn2VAU3QCZh092KbIRdd0qXoXyleWa6sL2hUUrX90SHKBCPG305jKhmxcE9DvCDOTfApxEdomNIgxxUK4B8HeNzn7mOrUT1MYCJT5hNN1gru4jYN6htmuMdNyBb3zW%2BTSTgD4%2B3D3TgclJwKLf3zcEDcLUPYVCdssK6mTr%2B0TCstuC5eG9O9f%2B0fZjvki3QgnHLxLcycC8%2FOholjl4ZMCAWTxXmwZYcbO2m71pGjM3%2B2ssnXjasek%2B%2F8q7iDedpFUMuItjPEfz6yclSFIovt1e%2Bim2WAJ%2FTi201ViGDHKq30UP2MW4CQjTwBsgjrkafxJfRV%2BaY5sck5RRBU2I9FjzTfRYBIfSthruSuiORRGsNqTJUXuJ8cY89dkHrLudw49W8HxKKadkTxpGowtf5ZVok00kw2O2syBglauVAktjSUqXeoNaOsAa%2BUcvaGCIEc4LLTDT1snMBjqkAeYJ5unZBu7O%2Bk%2B87FmUNZ3A9bbhSCfcxQozEXLNO0aQK7N1VVuQvVcHNh8H0mLx08zcwtc06oCZ2QHGVFVhmWzEBeIVXvhwqEGFGQCp1ZN%2FOnzGnV%2BrOSP76gmJeygm0YRSjjBH83axQI0wJYmh%2B0lk5hMX9jNtkTRLmIFfbkQgMvW5sP7irsDx9yDFASFc0fDASewibmFXBjxD66u2MbF82k6m&X-Amz-Signature=5856231ee495cd5beeb3c910cf55fb88b02f722c3c572795a5c958e1cec9d93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBU575V%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDhUcJhKwhAFzj3tdWZLv4DzYWtZalm4U5Ogq7NnBjyFAIhALrMbjKRBS5l%2FH%2B8LMN0rEmS%2F96ms8kK0HYnhrPH7%2BHhKv8DCCoQABoMNjM3NDIzMTgzODA1IgyDqq24qcaCckMogSEq3AN%2BstXmvno9AVbcPpYUVP44UMUC39yMsgnWyfcOGrYLVtZ1UuS0m0rURC2VDUVV29YfNDYC%2BTx%2Fnb7p1AxXkoXcZW82rkcWELzl7m9LvNdH3gQ9EzOpwCjBygULMK6ty1KTWmdoaQeEjH8243ZM3UfBJYn8eXjEVI9RSnO8SMg5I6kxyN0AYlcQ7arn2VAU3QCZh092KbIRdd0qXoXyleWa6sL2hUUrX90SHKBCPG305jKhmxcE9DvCDOTfApxEdomNIgxxUK4B8HeNzn7mOrUT1MYCJT5hNN1gru4jYN6htmuMdNyBb3zW%2BTSTgD4%2B3D3TgclJwKLf3zcEDcLUPYVCdssK6mTr%2B0TCstuC5eG9O9f%2B0fZjvki3QgnHLxLcycC8%2FOholjl4ZMCAWTxXmwZYcbO2m71pGjM3%2B2ssnXjasek%2B%2F8q7iDedpFUMuItjPEfz6yclSFIovt1e%2Bim2WAJ%2FTi201ViGDHKq30UP2MW4CQjTwBsgjrkafxJfRV%2BaY5sck5RRBU2I9FjzTfRYBIfSthruSuiORRGsNqTJUXuJ8cY89dkHrLudw49W8HxKKadkTxpGowtf5ZVok00kw2O2syBglauVAktjSUqXeoNaOsAa%2BUcvaGCIEc4LLTDT1snMBjqkAeYJ5unZBu7O%2Bk%2B87FmUNZ3A9bbhSCfcxQozEXLNO0aQK7N1VVuQvVcHNh8H0mLx08zcwtc06oCZ2QHGVFVhmWzEBeIVXvhwqEGFGQCp1ZN%2FOnzGnV%2BrOSP76gmJeygm0YRSjjBH83axQI0wJYmh%2B0lk5hMX9jNtkTRLmIFfbkQgMvW5sP7irsDx9yDFASFc0fDASewibmFXBjxD66u2MbF82k6m&X-Amz-Signature=bba77742d3c7b91377dea19161e06dcdbe849899b3b6d77a31e79ca6a3188309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZ6YAV4%2F20260216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260216T021107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIG5%2F1crewwXFphO%2BoQpFwLZGmDvZGqEyfVbE4fqM2o8pAiEA7%2FaKI7596UuC0dALwGhbxnqVVaA08QFkNEURY%2BIm3mIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL33LFouNP9JdIF8GSrcAzGCVIA4B0%2Bxk9HwWRrq0i4GPl%2BVvZ9J%2FHGYCdsmaIGv4z1wiTtEiPqyinhF1%2BjhpjLNRiQ9h9flKBQGVKAmupF%2F7uJlS5uObqrReAm0sGtmMIwAVEjRJQ3choRNEh98vGPDTWwW5YnscRAz5MBvElkdDvqaEegxR7hnAG3Wb6hXGmLXLUJjCeMWLNkk0Gh%2FL7%2F4k7Yx7pFw8SXRHxRcTmh6LdcxumgoUYEri8RHTadIhIl4cTnXWsctwc9OAupBdXOHqyqM7MUFYGIOMN89cacw8NpUeJnbZDqzemr1iq%2BFXOWsS3PO6nJmXjbicOKcCqwTwErFydPAbh1tLSO13Z%2Fljw2%2Bnn5uYc1JA7Yo9QxJeehexmAFWZCEGQARmXoOSrMApLAUd92DDkFPuw6jN5PvCm09r9hBAu5%2B%2BteLBs6aEOs5h5hHYgCX%2FEEmjX%2B5tpQbkWFHNOsAnaOIE4QG387rrsFO6W%2FIR3AUgtWF7fLCNrJWqxxw4ZcrZFlJEe%2ByZdWFrziNNfVbzZDOmzEM0zTAhdaAbLh9CYMPhPZ2pq1Ehbgt84MnwCt2dKdtHKYsaFfQ%2FrpVq97HBgbZ0sV%2FmFwk%2BS2449TwnJTSqJuZi09BG5aMRo2Ks1ELS0BeMO7VycwGOqUBXhS2g1gw1ZvhR%2B%2B1NvxzWlRY2F0QDVk%2F4NkijLv3tSB1COOGXudiej8yMuaiMTDKQ8DwHuYCWTH1ycPlXGeV7PBFKv%2BkpyewvJXWOwnp86ElUUdDWpd%2BShvpZEuailtEanxkPYmRR2pLhFbL%2BRZn5bPFc%2FFU4lL5%2BtESeWlFY%2B5TV6G%2FPlOl7z3kAtQQlwu5jfwKm6QPK46OYw6pJRADP40K9mmq&X-Amz-Signature=5decb5a0d615624791adfe07a67e1e5194b645873bbe5650192815dc5e5783ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

