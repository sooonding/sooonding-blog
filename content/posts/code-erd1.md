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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7MU5BB%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDBpVKAnx6y9ydLc%2FWnQG%2BrjPsvM2LLoQhbEVB%2BMw2AJwIgW3Jwu7Joz4X%2BtKlrQt0rNZ18fwXCiZDBm%2F89TD3Th94qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqQW90Y59dP59B4LircA8xGmxnHquw0wOGPeuUBYqqxgmTVXMTgbLIa0TRxZxN8V%2F3u08vlQfeRdnACg0DzIOlgARBDhYe5D2OhlPolZZpICoHb%2BFDBR0l6E%2B%2FYzHf%2B3x4KrIqsh%2Bf4AaWU1eRgtXKmp8XY7eNlDOgx0Erh7%2BES5G0%2FVWCEgF3UZgZcGRTaEjJYPBbzDgry%2FbbGMGTMFVfe29rwQwXWNRte1Ic5h5ODDc6wDXVH33R41Wrv39zWvH5%2BuOGBhcyen4hDkExVQivb4Z4CrRd7hb3pClCzaLRslg78tFifcwf8f0GcBi7uwmr2duN4eJ%2FTe%2FDGJ9wuVVvNKhx8ZpRGdKTLxi46Sa9oW58ASeGZrKl5omngHPbfK8VFYChdu0xyaKW4MlAQTPkYhpPg8zrbdwLuyo2vYpTgYRiEjwsHR944RGCiaPpS2KpVr49sW%2BsFoxtTkjqukrQi5nCEt6Tzcv6n4w1engM3kZ8%2FTEOwnz6f70mcTHgV48Djye0%2BQ7Ru2SNEFjggvv15KKF89YmZZb7BS7dFn1t2wKz%2BrusrdwOKP9VY6rRyxDwQV2s3Wu%2ByFopOLaH4B%2FH6S6Crsik6kGZX5iLDLy%2FpjLqbaiULklvlNhJzb9IT4yz%2Bf8OggZsBkcSAMI%2Ff%2BtYGOqUBO4c0Jd4hbb4%2F0ZyStCQ7trlQhmSpw9faPnowdQAOYE6r7xMKLnj0woaSTgRxusYREgC1AVJbKeiUFuO%2BuGjpoPg9Pz0lv1AkLAQ9%2BdGGKDMPtar1VOtkExQfXXw1mS6VFNAPdLGCrnKPVI%2FJkBhXvjlDHnbnGL8yhc9c9T2dRwwoTtoceJJKKC6tAKD87Pf4riWHz31VCayqzphlU29fTBZpNFPB&X-Amz-Signature=c145011ddeb9f9ac7eeb3f27d62f2dd105a08a6c05701bc9d4a0587481140de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQQWMAV%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6t3M8408CRLzwevHr2juaFsz26diFd4ltUojJ1dP1igIhAJfYVHO9xJdDZ1nFhnWFrOZDwrN%2FoFZD%2B2bfI9BV3wiEKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziLP6ue80zS8P9l3wq3ANkcHVubjUl58Gi3YMwAqNHTkcrYFWbDDKxzGcYTSPDE2BmPCMXNbSoTbGhVaZmbx79w%2FKWqN9xItDH6helnMWK5TQYeLPbiBWRyjNM%2Bvekfncyey%2BBXCnmFn13p69N0d1FP%2F3xXotYz9a3%2FkXJB7vmTeoEmvCClLZv7LCRHncDolDw7W%2F0tRgxw3qeK3Rok1jn%2F8I%2FOuJTtXw4W2IngJO%2BzDJ7oSkJNmQt5975pETTOCf6966ktcfjkvVHl7sC0NZCxKiO4LX1U1RywnHsDK31gVNYtHXF%2FEJNDmaDFhUWvl9FzSQ8C%2BDmatQ7A1kmezXBSnORfm8ksHjQ4qh%2Fz0OwRQ8CWIDQPQ0oWbOiRdmQ7TaZdNjcciLVUur4DhwbBL966sfVYVCOsIrfWVbTqq62Bq011a0XBdq8Ia1yWP%2BduSq82SKotQW9Z27s9TLRkFDeugp3aJ8TPpmWIrbG0U5HVHLHB1AGVsV90sxGbltEFECNX1fmqWcJhgzRlAROjkA5xv5j014mQdLqba6r7%2F84N9oy%2FEyi50loRCh2COPZ0xlNcQpfwlTL5lOoA03wGV%2F%2BO4L8VBnPdXZG%2BYtggKHK%2B2KffwS4FnGR3dyTUmSiCl1W%2Fj2OobdFcM1ugDCf3frWBjqkAdT%2Bc2Y5BbR4lqOmAYLJKyzxOzBBvgYbIvz4W3wnKGng2Yvud1sWnRcRPqVNmN4fuhjASozahKrNslDYvRYgAvTrq52MkXYUVwnhBNIT6RqNYvVc%2Fet3fgk2dy9ifFnlqOO86FU%2FyyztTyiBynJm6I5PDdR3luQbND2kA6FMoSad%2FjhYxi0WoYjO7tkDYDhkk5wFzrLvfEDS4gZ1RG6ZkfbQD9oh&X-Amz-Signature=736bfefb0858e21d10ce7fa87866128c812204a5e4054d9002a2b35aba072f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQQWMAV%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6t3M8408CRLzwevHr2juaFsz26diFd4ltUojJ1dP1igIhAJfYVHO9xJdDZ1nFhnWFrOZDwrN%2FoFZD%2B2bfI9BV3wiEKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziLP6ue80zS8P9l3wq3ANkcHVubjUl58Gi3YMwAqNHTkcrYFWbDDKxzGcYTSPDE2BmPCMXNbSoTbGhVaZmbx79w%2FKWqN9xItDH6helnMWK5TQYeLPbiBWRyjNM%2Bvekfncyey%2BBXCnmFn13p69N0d1FP%2F3xXotYz9a3%2FkXJB7vmTeoEmvCClLZv7LCRHncDolDw7W%2F0tRgxw3qeK3Rok1jn%2F8I%2FOuJTtXw4W2IngJO%2BzDJ7oSkJNmQt5975pETTOCf6966ktcfjkvVHl7sC0NZCxKiO4LX1U1RywnHsDK31gVNYtHXF%2FEJNDmaDFhUWvl9FzSQ8C%2BDmatQ7A1kmezXBSnORfm8ksHjQ4qh%2Fz0OwRQ8CWIDQPQ0oWbOiRdmQ7TaZdNjcciLVUur4DhwbBL966sfVYVCOsIrfWVbTqq62Bq011a0XBdq8Ia1yWP%2BduSq82SKotQW9Z27s9TLRkFDeugp3aJ8TPpmWIrbG0U5HVHLHB1AGVsV90sxGbltEFECNX1fmqWcJhgzRlAROjkA5xv5j014mQdLqba6r7%2F84N9oy%2FEyi50loRCh2COPZ0xlNcQpfwlTL5lOoA03wGV%2F%2BO4L8VBnPdXZG%2BYtggKHK%2B2KffwS4FnGR3dyTUmSiCl1W%2Fj2OobdFcM1ugDCf3frWBjqkAdT%2Bc2Y5BbR4lqOmAYLJKyzxOzBBvgYbIvz4W3wnKGng2Yvud1sWnRcRPqVNmN4fuhjASozahKrNslDYvRYgAvTrq52MkXYUVwnhBNIT6RqNYvVc%2Fet3fgk2dy9ifFnlqOO86FU%2FyyztTyiBynJm6I5PDdR3luQbND2kA6FMoSad%2FjhYxi0WoYjO7tkDYDhkk5wFzrLvfEDS4gZ1RG6ZkfbQD9oh&X-Amz-Signature=8cedd134cf94e4c68b837e1bf5b737e25fb0347072b8484d9e4715e10f9334ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQQWMAV%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6t3M8408CRLzwevHr2juaFsz26diFd4ltUojJ1dP1igIhAJfYVHO9xJdDZ1nFhnWFrOZDwrN%2FoFZD%2B2bfI9BV3wiEKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziLP6ue80zS8P9l3wq3ANkcHVubjUl58Gi3YMwAqNHTkcrYFWbDDKxzGcYTSPDE2BmPCMXNbSoTbGhVaZmbx79w%2FKWqN9xItDH6helnMWK5TQYeLPbiBWRyjNM%2Bvekfncyey%2BBXCnmFn13p69N0d1FP%2F3xXotYz9a3%2FkXJB7vmTeoEmvCClLZv7LCRHncDolDw7W%2F0tRgxw3qeK3Rok1jn%2F8I%2FOuJTtXw4W2IngJO%2BzDJ7oSkJNmQt5975pETTOCf6966ktcfjkvVHl7sC0NZCxKiO4LX1U1RywnHsDK31gVNYtHXF%2FEJNDmaDFhUWvl9FzSQ8C%2BDmatQ7A1kmezXBSnORfm8ksHjQ4qh%2Fz0OwRQ8CWIDQPQ0oWbOiRdmQ7TaZdNjcciLVUur4DhwbBL966sfVYVCOsIrfWVbTqq62Bq011a0XBdq8Ia1yWP%2BduSq82SKotQW9Z27s9TLRkFDeugp3aJ8TPpmWIrbG0U5HVHLHB1AGVsV90sxGbltEFECNX1fmqWcJhgzRlAROjkA5xv5j014mQdLqba6r7%2F84N9oy%2FEyi50loRCh2COPZ0xlNcQpfwlTL5lOoA03wGV%2F%2BO4L8VBnPdXZG%2BYtggKHK%2B2KffwS4FnGR3dyTUmSiCl1W%2Fj2OobdFcM1ugDCf3frWBjqkAdT%2Bc2Y5BbR4lqOmAYLJKyzxOzBBvgYbIvz4W3wnKGng2Yvud1sWnRcRPqVNmN4fuhjASozahKrNslDYvRYgAvTrq52MkXYUVwnhBNIT6RqNYvVc%2Fet3fgk2dy9ifFnlqOO86FU%2FyyztTyiBynJm6I5PDdR3luQbND2kA6FMoSad%2FjhYxi0WoYjO7tkDYDhkk5wFzrLvfEDS4gZ1RG6ZkfbQD9oh&X-Amz-Signature=074ad515156c259d017cbca9b5e5e71edadd3d9fba86b51d2ee5279f3b7111e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQQWMAV%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6t3M8408CRLzwevHr2juaFsz26diFd4ltUojJ1dP1igIhAJfYVHO9xJdDZ1nFhnWFrOZDwrN%2FoFZD%2B2bfI9BV3wiEKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziLP6ue80zS8P9l3wq3ANkcHVubjUl58Gi3YMwAqNHTkcrYFWbDDKxzGcYTSPDE2BmPCMXNbSoTbGhVaZmbx79w%2FKWqN9xItDH6helnMWK5TQYeLPbiBWRyjNM%2Bvekfncyey%2BBXCnmFn13p69N0d1FP%2F3xXotYz9a3%2FkXJB7vmTeoEmvCClLZv7LCRHncDolDw7W%2F0tRgxw3qeK3Rok1jn%2F8I%2FOuJTtXw4W2IngJO%2BzDJ7oSkJNmQt5975pETTOCf6966ktcfjkvVHl7sC0NZCxKiO4LX1U1RywnHsDK31gVNYtHXF%2FEJNDmaDFhUWvl9FzSQ8C%2BDmatQ7A1kmezXBSnORfm8ksHjQ4qh%2Fz0OwRQ8CWIDQPQ0oWbOiRdmQ7TaZdNjcciLVUur4DhwbBL966sfVYVCOsIrfWVbTqq62Bq011a0XBdq8Ia1yWP%2BduSq82SKotQW9Z27s9TLRkFDeugp3aJ8TPpmWIrbG0U5HVHLHB1AGVsV90sxGbltEFECNX1fmqWcJhgzRlAROjkA5xv5j014mQdLqba6r7%2F84N9oy%2FEyi50loRCh2COPZ0xlNcQpfwlTL5lOoA03wGV%2F%2BO4L8VBnPdXZG%2BYtggKHK%2B2KffwS4FnGR3dyTUmSiCl1W%2Fj2OobdFcM1ugDCf3frWBjqkAdT%2Bc2Y5BbR4lqOmAYLJKyzxOzBBvgYbIvz4W3wnKGng2Yvud1sWnRcRPqVNmN4fuhjASozahKrNslDYvRYgAvTrq52MkXYUVwnhBNIT6RqNYvVc%2Fet3fgk2dy9ifFnlqOO86FU%2FyyztTyiBynJm6I5PDdR3luQbND2kA6FMoSad%2FjhYxi0WoYjO7tkDYDhkk5wFzrLvfEDS4gZ1RG6ZkfbQD9oh&X-Amz-Signature=c1cbeaf3aa313e8cbf3a0bac64e5af21464941c39d601931b4d2fb95bede657a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQQWMAV%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC6t3M8408CRLzwevHr2juaFsz26diFd4ltUojJ1dP1igIhAJfYVHO9xJdDZ1nFhnWFrOZDwrN%2FoFZD%2B2bfI9BV3wiEKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziLP6ue80zS8P9l3wq3ANkcHVubjUl58Gi3YMwAqNHTkcrYFWbDDKxzGcYTSPDE2BmPCMXNbSoTbGhVaZmbx79w%2FKWqN9xItDH6helnMWK5TQYeLPbiBWRyjNM%2Bvekfncyey%2BBXCnmFn13p69N0d1FP%2F3xXotYz9a3%2FkXJB7vmTeoEmvCClLZv7LCRHncDolDw7W%2F0tRgxw3qeK3Rok1jn%2F8I%2FOuJTtXw4W2IngJO%2BzDJ7oSkJNmQt5975pETTOCf6966ktcfjkvVHl7sC0NZCxKiO4LX1U1RywnHsDK31gVNYtHXF%2FEJNDmaDFhUWvl9FzSQ8C%2BDmatQ7A1kmezXBSnORfm8ksHjQ4qh%2Fz0OwRQ8CWIDQPQ0oWbOiRdmQ7TaZdNjcciLVUur4DhwbBL966sfVYVCOsIrfWVbTqq62Bq011a0XBdq8Ia1yWP%2BduSq82SKotQW9Z27s9TLRkFDeugp3aJ8TPpmWIrbG0U5HVHLHB1AGVsV90sxGbltEFECNX1fmqWcJhgzRlAROjkA5xv5j014mQdLqba6r7%2F84N9oy%2FEyi50loRCh2COPZ0xlNcQpfwlTL5lOoA03wGV%2F%2BO4L8VBnPdXZG%2BYtggKHK%2B2KffwS4FnGR3dyTUmSiCl1W%2Fj2OobdFcM1ugDCf3frWBjqkAdT%2Bc2Y5BbR4lqOmAYLJKyzxOzBBvgYbIvz4W3wnKGng2Yvud1sWnRcRPqVNmN4fuhjASozahKrNslDYvRYgAvTrq52MkXYUVwnhBNIT6RqNYvVc%2Fet3fgk2dy9ifFnlqOO86FU%2FyyztTyiBynJm6I5PDdR3luQbND2kA6FMoSad%2FjhYxi0WoYjO7tkDYDhkk5wFzrLvfEDS4gZ1RG6ZkfbQD9oh&X-Amz-Signature=ece287bb5f5c092fad5583d76b17edaa86a31cecfb803dd30db5aeab5680a8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M7MU5BB%2F20261026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261026T032933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDBpVKAnx6y9ydLc%2FWnQG%2BrjPsvM2LLoQhbEVB%2BMw2AJwIgW3Jwu7Joz4X%2BtKlrQt0rNZ18fwXCiZDBm%2F89TD3Th94qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqQW90Y59dP59B4LircA8xGmxnHquw0wOGPeuUBYqqxgmTVXMTgbLIa0TRxZxN8V%2F3u08vlQfeRdnACg0DzIOlgARBDhYe5D2OhlPolZZpICoHb%2BFDBR0l6E%2B%2FYzHf%2B3x4KrIqsh%2Bf4AaWU1eRgtXKmp8XY7eNlDOgx0Erh7%2BES5G0%2FVWCEgF3UZgZcGRTaEjJYPBbzDgry%2FbbGMGTMFVfe29rwQwXWNRte1Ic5h5ODDc6wDXVH33R41Wrv39zWvH5%2BuOGBhcyen4hDkExVQivb4Z4CrRd7hb3pClCzaLRslg78tFifcwf8f0GcBi7uwmr2duN4eJ%2FTe%2FDGJ9wuVVvNKhx8ZpRGdKTLxi46Sa9oW58ASeGZrKl5omngHPbfK8VFYChdu0xyaKW4MlAQTPkYhpPg8zrbdwLuyo2vYpTgYRiEjwsHR944RGCiaPpS2KpVr49sW%2BsFoxtTkjqukrQi5nCEt6Tzcv6n4w1engM3kZ8%2FTEOwnz6f70mcTHgV48Djye0%2BQ7Ru2SNEFjggvv15KKF89YmZZb7BS7dFn1t2wKz%2BrusrdwOKP9VY6rRyxDwQV2s3Wu%2ByFopOLaH4B%2FH6S6Crsik6kGZX5iLDLy%2FpjLqbaiULklvlNhJzb9IT4yz%2Bf8OggZsBkcSAMI%2Ff%2BtYGOqUBO4c0Jd4hbb4%2F0ZyStCQ7trlQhmSpw9faPnowdQAOYE6r7xMKLnj0woaSTgRxusYREgC1AVJbKeiUFuO%2BuGjpoPg9Pz0lv1AkLAQ9%2BdGGKDMPtar1VOtkExQfXXw1mS6VFNAPdLGCrnKPVI%2FJkBhXvjlDHnbnGL8yhc9c9T2dRwwoTtoceJJKKC6tAKD87Pf4riWHz31VCayqzphlU29fTBZpNFPB&X-Amz-Signature=7de72ccd8c5cc67e1f51518845fb4df99d49e5f632ecbdf904be522f9c86f4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

