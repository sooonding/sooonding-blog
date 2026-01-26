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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SVLXKF%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGofnF1rv1jnygsxUq4RD4hiXNRIGUe3jC58TlZtIQf0AiBay%2FmB5%2FbMKMWnkLdiXT%2FglnkcNgQTSGjgoffToTON2ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM7vjAkxfux92BSBIKKtwDXhrV%2BKc0KlqWZeB7JsRJbTzaEODOL1jdscQG651Q1W4lBZKXq5X16WvDizmg7MOjcXQOSgQ28tduhvHoa9iAmcJCPZvieNDeXRbnxXx8auUlpOq3hILuYNO0QeuYcxPp21AchIV9YxmqEZu%2FAaivM7ijI%2F6uC%2BvAsqTpl3ef1Qs4ylx0vlGVtrLTYHEXt7vvDPJbW%2Bvfbxu0VjmlFEONwDPgmgmIds60VhHgV%2BD9Kc775KFZBTSdo0K7K3Y2PoDz47idonBimzaRd3KAjXMIWy%2BFA%2BRWU9GND7X%2Fbfmwf8L9CykZaC3qBNAKecwT5ZXbyVT0VTAc4TN0STWeMi6mec1eVHqYF4ciy3iYSWMX1KuB2a8w3n6fyimlZt6eLo5q%2BR7oj%2Bqq2gklXIE%2BOtUmeVUE5B1vrxlbSu2cgK4y79Uh5sOZ5I1qcv3JRA9dKtsO%2FnuXJvzu5EhtrCxbIjcgd%2BVl%2BLtEKc%2FyrjB7neILPB1tAgnmkMKvVOo8uPs%2FHqeteEm48vaVioNDFuMc%2FqfYEG2N67mLlV8awAqqxq6tumeV713WogEtKpUGBjSsuHgMHSjoUkSWFJ0d8n%2FkaoWWuI6vNImKOO1R1A5doNJlvxi230RCYr6Her5m3DAws5%2FaywY6pgFrY7YkpwR0%2BRQi7tdLutjLPIz3otqhxCCxDyAfWSzGASdJ6PdawFdCcA22W3R3yAKTjUCrQuorqHRBQA7DHV5ZzZYLq1FHXAarf%2BPL25evWck2PQ4bH7CiPB3QOInI3mIiNVZyY8naS030equ%2F8tyUvRWbxuHR74A%2BSGtHPGUFVKPqxhbBLEUWrbBe0SyHjjFoMFB0xwkhM7WPCGzytRriI9I1PW5u&X-Amz-Signature=dfffc0b2ccbbc5c35c4b43e6fed806932009477ee2fbbcf923865830eec13c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NLI5FH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T015717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2p2jJf2QoMCtZb08NiOtQhFh2gQtrivEc%2FGZyJOjeDQIhAKr40r0BJ%2BSEAj0EvLJ5B6WeH%2B2x5utnTUr4dwDUjJxoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwDKrbkdzINuGwTVuEq3APMNNo0OUV%2Bcibo63mpx%2BnKzVycba40JNQLcruFGZIMJ09G4Oa%2F6nb8HdvJ1FHmFdb6IkYLpsUhvi99wI0dRV3zS4Du7Y8NHoaslXjz4ju23H%2Fs2CqGmQltwotPq%2BNVQxWabCZuWUEmRWaUsk8IGGxUByM4XTtLUkA5Hqpi3LnOljSpOuRysadB2sdd2SmbvQ1y6ImPeLUa8O2iFUjnPkCRR8169JojiOwrVtg7f5FlbbNnZ9DypECZAPLwCw%2FyGOLDUD2G4YAPq%2FB5ZZ6e3Lll%2BmJJPpQjxC7JYUOmnrfdG3U6%2BId2vhbgM4cj7uo8n8obCa%2BWkyVBCVUOVjrudUmwTCkcNQr%2FGbYaMXXRtwsjuBqrSOMkgu3YYo1zUWWXkbs2cBvTHkrw6yeB0Q8ddJVOdCaB7eGAxSuiJ2Z1POQ%2FIytOGzUl1wxogUVWPb56IyvBzQ%2Bwu71hcgvGKfDn5kpzQ7vtZcMK5Xzti30ZqvLwNfE1FBErUNsC1xxW18XhY5s2YcT4L8Q1MvB6gznLzwWTE4s4Q9HbYRiF%2Ft6Fbcqd%2BUKvrGESj3%2FcDjs90zu%2BOGVxVQGFL%2FCs%2FO%2Bf41Rc3n9bt2%2B52Dx91XBnZpZJ2KvSGI5%2FC6a1MI9Dv7V6ojDEoNrLBjqkAfzoP9ZGPR4m%2B7XBGpMEFWUAzwCQebCgvlyNUD7Jb3Ai0jK0MT4kmZMhRpp2IRjLuNNThEQEZwkI9Q242s8KJFd0L2SuBC4IdrsUvYN51guhmjHh8x8JpuiPBzng37%2BVRJreYmrRSjCs0QXuvp%2FyMEvANvIfHt4b7cCxRV8qdNvd5OBcf2ArIDckR6RP1MJny6y1NpdJaCYtgN1isPl7vl8E%2Fhxk&X-Amz-Signature=ceb6ef70529a596ef90698aba9103d47aad2d2daad2b4a0f8c71375d167e26f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NLI5FH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T015717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2p2jJf2QoMCtZb08NiOtQhFh2gQtrivEc%2FGZyJOjeDQIhAKr40r0BJ%2BSEAj0EvLJ5B6WeH%2B2x5utnTUr4dwDUjJxoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwDKrbkdzINuGwTVuEq3APMNNo0OUV%2Bcibo63mpx%2BnKzVycba40JNQLcruFGZIMJ09G4Oa%2F6nb8HdvJ1FHmFdb6IkYLpsUhvi99wI0dRV3zS4Du7Y8NHoaslXjz4ju23H%2Fs2CqGmQltwotPq%2BNVQxWabCZuWUEmRWaUsk8IGGxUByM4XTtLUkA5Hqpi3LnOljSpOuRysadB2sdd2SmbvQ1y6ImPeLUa8O2iFUjnPkCRR8169JojiOwrVtg7f5FlbbNnZ9DypECZAPLwCw%2FyGOLDUD2G4YAPq%2FB5ZZ6e3Lll%2BmJJPpQjxC7JYUOmnrfdG3U6%2BId2vhbgM4cj7uo8n8obCa%2BWkyVBCVUOVjrudUmwTCkcNQr%2FGbYaMXXRtwsjuBqrSOMkgu3YYo1zUWWXkbs2cBvTHkrw6yeB0Q8ddJVOdCaB7eGAxSuiJ2Z1POQ%2FIytOGzUl1wxogUVWPb56IyvBzQ%2Bwu71hcgvGKfDn5kpzQ7vtZcMK5Xzti30ZqvLwNfE1FBErUNsC1xxW18XhY5s2YcT4L8Q1MvB6gznLzwWTE4s4Q9HbYRiF%2Ft6Fbcqd%2BUKvrGESj3%2FcDjs90zu%2BOGVxVQGFL%2FCs%2FO%2Bf41Rc3n9bt2%2B52Dx91XBnZpZJ2KvSGI5%2FC6a1MI9Dv7V6ojDEoNrLBjqkAfzoP9ZGPR4m%2B7XBGpMEFWUAzwCQebCgvlyNUD7Jb3Ai0jK0MT4kmZMhRpp2IRjLuNNThEQEZwkI9Q242s8KJFd0L2SuBC4IdrsUvYN51guhmjHh8x8JpuiPBzng37%2BVRJreYmrRSjCs0QXuvp%2FyMEvANvIfHt4b7cCxRV8qdNvd5OBcf2ArIDckR6RP1MJny6y1NpdJaCYtgN1isPl7vl8E%2Fhxk&X-Amz-Signature=1065053c0712209d8114002ca5ec12a0e71da8ec3cd013d0d781cb1aebad62fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NLI5FH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T015717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2p2jJf2QoMCtZb08NiOtQhFh2gQtrivEc%2FGZyJOjeDQIhAKr40r0BJ%2BSEAj0EvLJ5B6WeH%2B2x5utnTUr4dwDUjJxoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwDKrbkdzINuGwTVuEq3APMNNo0OUV%2Bcibo63mpx%2BnKzVycba40JNQLcruFGZIMJ09G4Oa%2F6nb8HdvJ1FHmFdb6IkYLpsUhvi99wI0dRV3zS4Du7Y8NHoaslXjz4ju23H%2Fs2CqGmQltwotPq%2BNVQxWabCZuWUEmRWaUsk8IGGxUByM4XTtLUkA5Hqpi3LnOljSpOuRysadB2sdd2SmbvQ1y6ImPeLUa8O2iFUjnPkCRR8169JojiOwrVtg7f5FlbbNnZ9DypECZAPLwCw%2FyGOLDUD2G4YAPq%2FB5ZZ6e3Lll%2BmJJPpQjxC7JYUOmnrfdG3U6%2BId2vhbgM4cj7uo8n8obCa%2BWkyVBCVUOVjrudUmwTCkcNQr%2FGbYaMXXRtwsjuBqrSOMkgu3YYo1zUWWXkbs2cBvTHkrw6yeB0Q8ddJVOdCaB7eGAxSuiJ2Z1POQ%2FIytOGzUl1wxogUVWPb56IyvBzQ%2Bwu71hcgvGKfDn5kpzQ7vtZcMK5Xzti30ZqvLwNfE1FBErUNsC1xxW18XhY5s2YcT4L8Q1MvB6gznLzwWTE4s4Q9HbYRiF%2Ft6Fbcqd%2BUKvrGESj3%2FcDjs90zu%2BOGVxVQGFL%2FCs%2FO%2Bf41Rc3n9bt2%2B52Dx91XBnZpZJ2KvSGI5%2FC6a1MI9Dv7V6ojDEoNrLBjqkAfzoP9ZGPR4m%2B7XBGpMEFWUAzwCQebCgvlyNUD7Jb3Ai0jK0MT4kmZMhRpp2IRjLuNNThEQEZwkI9Q242s8KJFd0L2SuBC4IdrsUvYN51guhmjHh8x8JpuiPBzng37%2BVRJreYmrRSjCs0QXuvp%2FyMEvANvIfHt4b7cCxRV8qdNvd5OBcf2ArIDckR6RP1MJny6y1NpdJaCYtgN1isPl7vl8E%2Fhxk&X-Amz-Signature=83e9ddadac575632763694c55eb56ac7cfc52ee044735e68dbc7a2704f5fee29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NLI5FH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T015717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2p2jJf2QoMCtZb08NiOtQhFh2gQtrivEc%2FGZyJOjeDQIhAKr40r0BJ%2BSEAj0EvLJ5B6WeH%2B2x5utnTUr4dwDUjJxoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwDKrbkdzINuGwTVuEq3APMNNo0OUV%2Bcibo63mpx%2BnKzVycba40JNQLcruFGZIMJ09G4Oa%2F6nb8HdvJ1FHmFdb6IkYLpsUhvi99wI0dRV3zS4Du7Y8NHoaslXjz4ju23H%2Fs2CqGmQltwotPq%2BNVQxWabCZuWUEmRWaUsk8IGGxUByM4XTtLUkA5Hqpi3LnOljSpOuRysadB2sdd2SmbvQ1y6ImPeLUa8O2iFUjnPkCRR8169JojiOwrVtg7f5FlbbNnZ9DypECZAPLwCw%2FyGOLDUD2G4YAPq%2FB5ZZ6e3Lll%2BmJJPpQjxC7JYUOmnrfdG3U6%2BId2vhbgM4cj7uo8n8obCa%2BWkyVBCVUOVjrudUmwTCkcNQr%2FGbYaMXXRtwsjuBqrSOMkgu3YYo1zUWWXkbs2cBvTHkrw6yeB0Q8ddJVOdCaB7eGAxSuiJ2Z1POQ%2FIytOGzUl1wxogUVWPb56IyvBzQ%2Bwu71hcgvGKfDn5kpzQ7vtZcMK5Xzti30ZqvLwNfE1FBErUNsC1xxW18XhY5s2YcT4L8Q1MvB6gznLzwWTE4s4Q9HbYRiF%2Ft6Fbcqd%2BUKvrGESj3%2FcDjs90zu%2BOGVxVQGFL%2FCs%2FO%2Bf41Rc3n9bt2%2B52Dx91XBnZpZJ2KvSGI5%2FC6a1MI9Dv7V6ojDEoNrLBjqkAfzoP9ZGPR4m%2B7XBGpMEFWUAzwCQebCgvlyNUD7Jb3Ai0jK0MT4kmZMhRpp2IRjLuNNThEQEZwkI9Q242s8KJFd0L2SuBC4IdrsUvYN51guhmjHh8x8JpuiPBzng37%2BVRJreYmrRSjCs0QXuvp%2FyMEvANvIfHt4b7cCxRV8qdNvd5OBcf2ArIDckR6RP1MJny6y1NpdJaCYtgN1isPl7vl8E%2Fhxk&X-Amz-Signature=8a4b96c09fb8bc5f1fb97cfa86523281636eb7028573c51cc2efd134ae53318d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NLI5FH%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T015717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD2p2jJf2QoMCtZb08NiOtQhFh2gQtrivEc%2FGZyJOjeDQIhAKr40r0BJ%2BSEAj0EvLJ5B6WeH%2B2x5utnTUr4dwDUjJxoKv8DCC8QABoMNjM3NDIzMTgzODA1IgwDKrbkdzINuGwTVuEq3APMNNo0OUV%2Bcibo63mpx%2BnKzVycba40JNQLcruFGZIMJ09G4Oa%2F6nb8HdvJ1FHmFdb6IkYLpsUhvi99wI0dRV3zS4Du7Y8NHoaslXjz4ju23H%2Fs2CqGmQltwotPq%2BNVQxWabCZuWUEmRWaUsk8IGGxUByM4XTtLUkA5Hqpi3LnOljSpOuRysadB2sdd2SmbvQ1y6ImPeLUa8O2iFUjnPkCRR8169JojiOwrVtg7f5FlbbNnZ9DypECZAPLwCw%2FyGOLDUD2G4YAPq%2FB5ZZ6e3Lll%2BmJJPpQjxC7JYUOmnrfdG3U6%2BId2vhbgM4cj7uo8n8obCa%2BWkyVBCVUOVjrudUmwTCkcNQr%2FGbYaMXXRtwsjuBqrSOMkgu3YYo1zUWWXkbs2cBvTHkrw6yeB0Q8ddJVOdCaB7eGAxSuiJ2Z1POQ%2FIytOGzUl1wxogUVWPb56IyvBzQ%2Bwu71hcgvGKfDn5kpzQ7vtZcMK5Xzti30ZqvLwNfE1FBErUNsC1xxW18XhY5s2YcT4L8Q1MvB6gznLzwWTE4s4Q9HbYRiF%2Ft6Fbcqd%2BUKvrGESj3%2FcDjs90zu%2BOGVxVQGFL%2FCs%2FO%2Bf41Rc3n9bt2%2B52Dx91XBnZpZJ2KvSGI5%2FC6a1MI9Dv7V6ojDEoNrLBjqkAfzoP9ZGPR4m%2B7XBGpMEFWUAzwCQebCgvlyNUD7Jb3Ai0jK0MT4kmZMhRpp2IRjLuNNThEQEZwkI9Q242s8KJFd0L2SuBC4IdrsUvYN51guhmjHh8x8JpuiPBzng37%2BVRJreYmrRSjCs0QXuvp%2FyMEvANvIfHt4b7cCxRV8qdNvd5OBcf2ArIDckR6RP1MJny6y1NpdJaCYtgN1isPl7vl8E%2Fhxk&X-Amz-Signature=a23af09267f0703135b042c13a66377d9d90bf58255548f8425808d6a6c22d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664SVLXKF%2F20260126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260126T015716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGofnF1rv1jnygsxUq4RD4hiXNRIGUe3jC58TlZtIQf0AiBay%2FmB5%2FbMKMWnkLdiXT%2FglnkcNgQTSGjgoffToTON2ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM7vjAkxfux92BSBIKKtwDXhrV%2BKc0KlqWZeB7JsRJbTzaEODOL1jdscQG651Q1W4lBZKXq5X16WvDizmg7MOjcXQOSgQ28tduhvHoa9iAmcJCPZvieNDeXRbnxXx8auUlpOq3hILuYNO0QeuYcxPp21AchIV9YxmqEZu%2FAaivM7ijI%2F6uC%2BvAsqTpl3ef1Qs4ylx0vlGVtrLTYHEXt7vvDPJbW%2Bvfbxu0VjmlFEONwDPgmgmIds60VhHgV%2BD9Kc775KFZBTSdo0K7K3Y2PoDz47idonBimzaRd3KAjXMIWy%2BFA%2BRWU9GND7X%2Fbfmwf8L9CykZaC3qBNAKecwT5ZXbyVT0VTAc4TN0STWeMi6mec1eVHqYF4ciy3iYSWMX1KuB2a8w3n6fyimlZt6eLo5q%2BR7oj%2Bqq2gklXIE%2BOtUmeVUE5B1vrxlbSu2cgK4y79Uh5sOZ5I1qcv3JRA9dKtsO%2FnuXJvzu5EhtrCxbIjcgd%2BVl%2BLtEKc%2FyrjB7neILPB1tAgnmkMKvVOo8uPs%2FHqeteEm48vaVioNDFuMc%2FqfYEG2N67mLlV8awAqqxq6tumeV713WogEtKpUGBjSsuHgMHSjoUkSWFJ0d8n%2FkaoWWuI6vNImKOO1R1A5doNJlvxi230RCYr6Her5m3DAws5%2FaywY6pgFrY7YkpwR0%2BRQi7tdLutjLPIz3otqhxCCxDyAfWSzGASdJ6PdawFdCcA22W3R3yAKTjUCrQuorqHRBQA7DHV5ZzZYLq1FHXAarf%2BPL25evWck2PQ4bH7CiPB3QOInI3mIiNVZyY8naS030equ%2F8tyUvRWbxuHR74A%2BSGtHPGUFVKPqxhbBLEUWrbBe0SyHjjFoMFB0xwkhM7WPCGzytRriI9I1PW5u&X-Amz-Signature=707571f78f59de0478581a68124dcba93faf54b7a9eb0e3ed1716d5e6b64bd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

