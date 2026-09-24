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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUF2SNO%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBrYIHGe%2F9qDLRMZ0RcASkgTblusvBjAW05ksvEioy1hAiEArMhpNvEIeA%2FmVX4zTRcK9VXfclROL9nNB6a%2Bv3jbQzsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrMZOKH1onFUZBlfCrcA4%2BQRSP81j7dkCU%2FoDnOU5kiEzW5sd8y3FVZnEal51da0Vg4Y%2BtDRLSBQgAlr%2BSV7I%2FxvQlfDO2hNQODFpQbJK0hNG62DzD5p2eoSX7fYTO5p2K4ineLFkEi4NvaAeksmtiPEqXiBzYSczTySGzy4ahD7rKD9AYfwdaq8nLXAp4s4ge5NfJ6952MA6zPQVqdzCowk9Ek0sQlHYUE0EA98SQ3jxkLgs4Thlzf22Bx3pzMUGwi3zovRw9uJ15RfiDQcx0IKXQhtAOfgyfS3J%2F64hcWCET%2BxLLwN363dBMdbHcxpehn%2FoPWTad7IzFMtr9ee3vxxiNqFQVSzO8pWpYUNvId6RWsiwySvKE3AihKOTWh4nylKepSkksJCWBtYU8A4kn9z7asN%2BE4bSXodiySdS0we61kMaAMeMDD2Y4Nz207fI1%2BkiNR%2BL%2BJbj8ThhXZykwllTtlIyXN%2FrHELvr3NCs3Apj3u3ZiAmsubTNyVn9d%2FDXm6LXYG3JybvY0bZ%2BvMQewt2CR3RYyGo2jlMT%2BvGRIUFss9EsDpybrBr4d0EapNzy8sxkgGTSncJEuolCgeLdWyXHuNmq5l8QFVn2Md7mfbbzfKrL%2B46P8sYlcKchaP2tRhQ3%2F8HtYOyp1ML3u0dUGOqUB1IajsptuGhSIIGkKkKQODNPCe1EHNMesPbK%2F2Q1bRyyMI5Cqzg%2BsQhuGlqC%2F6YlDc0d3oYiIWnU4T2O1vgtVQiPXBrfzyfxp5dP3Y0THa54UDqbVgmxnYgxjmDA9hoQso%2F7NbfFMfUv4d40oKZHtP6MnttksRWVY1dLhQQJH92eqX0I36rsmVciaqx7EooXduG9IWbYfXGKhxW%2FmepCVL0XdZadp&X-Amz-Signature=315f564ba12fd48582f2d242d7ef2dd4c706aa7d2f50d1d2df09ae3bac18e8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6LI5HW%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIA24cdnv3rPchjE4pdgWykU9qFjLeyznpeCYPfrV6VGUAiEA1ESmfn5reC6Oax0gTqVYojuAhKP4Hji%2BSaMLFFW1sIsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1yq3P4tgiEAgqyGSrcAxuAxKhvByaKBpbFlGxrQr%2BJ2SP%2BvazhYZkGpRgAQx8MYA6Nu79%2FNvv7ehUuU7sCwkBJow6QxWtjfcyTYZxUslXEVA%2BGtJvn3qXtsxO94hvh7EQt4hCpzRP1zZNGJgAX%2FOoK9Ej0z8FAdYUyxKDQe8GdMGdgodMcEVz9DFjHjUxpRo18gH17XkAvIWPMniJIeF91Aj%2FJYK4MN6Jq2TTOdpcwE9HBvZyQkntiifqufdNm%2BQ%2FWezJ2HoSy1pjR6YSgImlK6tn%2Fmp3nlDDiWg1xbuKE8nZ%2F%2ByhBnsZWDkyvhcCQLBM69wlxxNeno0J3Aj4xrQE%2F4LTEKDpmmbutk7i5qN2QP5rFCnKAM5LLppgG47X5mRfKlRsMTziGGMaGexZKUSnhtqKW188IAc%2FRUHq548csMISlpEUWZayWBUz%2FI4%2FJDjmrRnjZDuL4MRxLygpFjZNN8vvascFYP19wc9mL1xo%2Fxg5QuqHNl1IHzK97WPXU14EM5uh7aWRrUlgbIQPBYXqu2MA7MZAskabHX04BIARJwq5mR%2Fa0iAFn%2BUud0Cb%2FLgVK2489W9DZ3fViAAOzETarMcehd8Y7PVH01Y86CTtTcXzIYnKvB1VkgdFs%2FPzJCTHFy6aG8I%2BUvwXtMPzt0dUGOqUBpD%2F8jlWsfSvZJuYYlj53CdGZXWqjyAD0%2BXWeNIdExXbDttixPcYyTUb%2BnUtlhNOogytJgsnaNK8Oj7jYwcrtmZgaHcwlQdYWRCHmAvER%2B1dTMZQZvXKq6ab9HUV80V8ZAadoAzpLWv6sQhYY5BUAV6dGyx9cNPH8jZJhrGROGY5uPLKFs8o8dwP2GSF%2BHlwBOij7VsqZqfLkCVek8wHer7Yzoihq&X-Amz-Signature=8e60fa8e91d7b2993ca1829288983a79b435a5c419d1329d7039b3b12640452b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6LI5HW%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIA24cdnv3rPchjE4pdgWykU9qFjLeyznpeCYPfrV6VGUAiEA1ESmfn5reC6Oax0gTqVYojuAhKP4Hji%2BSaMLFFW1sIsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1yq3P4tgiEAgqyGSrcAxuAxKhvByaKBpbFlGxrQr%2BJ2SP%2BvazhYZkGpRgAQx8MYA6Nu79%2FNvv7ehUuU7sCwkBJow6QxWtjfcyTYZxUslXEVA%2BGtJvn3qXtsxO94hvh7EQt4hCpzRP1zZNGJgAX%2FOoK9Ej0z8FAdYUyxKDQe8GdMGdgodMcEVz9DFjHjUxpRo18gH17XkAvIWPMniJIeF91Aj%2FJYK4MN6Jq2TTOdpcwE9HBvZyQkntiifqufdNm%2BQ%2FWezJ2HoSy1pjR6YSgImlK6tn%2Fmp3nlDDiWg1xbuKE8nZ%2F%2ByhBnsZWDkyvhcCQLBM69wlxxNeno0J3Aj4xrQE%2F4LTEKDpmmbutk7i5qN2QP5rFCnKAM5LLppgG47X5mRfKlRsMTziGGMaGexZKUSnhtqKW188IAc%2FRUHq548csMISlpEUWZayWBUz%2FI4%2FJDjmrRnjZDuL4MRxLygpFjZNN8vvascFYP19wc9mL1xo%2Fxg5QuqHNl1IHzK97WPXU14EM5uh7aWRrUlgbIQPBYXqu2MA7MZAskabHX04BIARJwq5mR%2Fa0iAFn%2BUud0Cb%2FLgVK2489W9DZ3fViAAOzETarMcehd8Y7PVH01Y86CTtTcXzIYnKvB1VkgdFs%2FPzJCTHFy6aG8I%2BUvwXtMPzt0dUGOqUBpD%2F8jlWsfSvZJuYYlj53CdGZXWqjyAD0%2BXWeNIdExXbDttixPcYyTUb%2BnUtlhNOogytJgsnaNK8Oj7jYwcrtmZgaHcwlQdYWRCHmAvER%2B1dTMZQZvXKq6ab9HUV80V8ZAadoAzpLWv6sQhYY5BUAV6dGyx9cNPH8jZJhrGROGY5uPLKFs8o8dwP2GSF%2BHlwBOij7VsqZqfLkCVek8wHer7Yzoihq&X-Amz-Signature=3b844e6ed752a35c6d1adb2a017776684dea4a3dc64accc7f824d48f29cfa965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6LI5HW%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIA24cdnv3rPchjE4pdgWykU9qFjLeyznpeCYPfrV6VGUAiEA1ESmfn5reC6Oax0gTqVYojuAhKP4Hji%2BSaMLFFW1sIsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1yq3P4tgiEAgqyGSrcAxuAxKhvByaKBpbFlGxrQr%2BJ2SP%2BvazhYZkGpRgAQx8MYA6Nu79%2FNvv7ehUuU7sCwkBJow6QxWtjfcyTYZxUslXEVA%2BGtJvn3qXtsxO94hvh7EQt4hCpzRP1zZNGJgAX%2FOoK9Ej0z8FAdYUyxKDQe8GdMGdgodMcEVz9DFjHjUxpRo18gH17XkAvIWPMniJIeF91Aj%2FJYK4MN6Jq2TTOdpcwE9HBvZyQkntiifqufdNm%2BQ%2FWezJ2HoSy1pjR6YSgImlK6tn%2Fmp3nlDDiWg1xbuKE8nZ%2F%2ByhBnsZWDkyvhcCQLBM69wlxxNeno0J3Aj4xrQE%2F4LTEKDpmmbutk7i5qN2QP5rFCnKAM5LLppgG47X5mRfKlRsMTziGGMaGexZKUSnhtqKW188IAc%2FRUHq548csMISlpEUWZayWBUz%2FI4%2FJDjmrRnjZDuL4MRxLygpFjZNN8vvascFYP19wc9mL1xo%2Fxg5QuqHNl1IHzK97WPXU14EM5uh7aWRrUlgbIQPBYXqu2MA7MZAskabHX04BIARJwq5mR%2Fa0iAFn%2BUud0Cb%2FLgVK2489W9DZ3fViAAOzETarMcehd8Y7PVH01Y86CTtTcXzIYnKvB1VkgdFs%2FPzJCTHFy6aG8I%2BUvwXtMPzt0dUGOqUBpD%2F8jlWsfSvZJuYYlj53CdGZXWqjyAD0%2BXWeNIdExXbDttixPcYyTUb%2BnUtlhNOogytJgsnaNK8Oj7jYwcrtmZgaHcwlQdYWRCHmAvER%2B1dTMZQZvXKq6ab9HUV80V8ZAadoAzpLWv6sQhYY5BUAV6dGyx9cNPH8jZJhrGROGY5uPLKFs8o8dwP2GSF%2BHlwBOij7VsqZqfLkCVek8wHer7Yzoihq&X-Amz-Signature=ef576bec1d006db87718ba7a2a95592fd9cff6f5b6024f28ddab0150fe5cd841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6LI5HW%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIA24cdnv3rPchjE4pdgWykU9qFjLeyznpeCYPfrV6VGUAiEA1ESmfn5reC6Oax0gTqVYojuAhKP4Hji%2BSaMLFFW1sIsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1yq3P4tgiEAgqyGSrcAxuAxKhvByaKBpbFlGxrQr%2BJ2SP%2BvazhYZkGpRgAQx8MYA6Nu79%2FNvv7ehUuU7sCwkBJow6QxWtjfcyTYZxUslXEVA%2BGtJvn3qXtsxO94hvh7EQt4hCpzRP1zZNGJgAX%2FOoK9Ej0z8FAdYUyxKDQe8GdMGdgodMcEVz9DFjHjUxpRo18gH17XkAvIWPMniJIeF91Aj%2FJYK4MN6Jq2TTOdpcwE9HBvZyQkntiifqufdNm%2BQ%2FWezJ2HoSy1pjR6YSgImlK6tn%2Fmp3nlDDiWg1xbuKE8nZ%2F%2ByhBnsZWDkyvhcCQLBM69wlxxNeno0J3Aj4xrQE%2F4LTEKDpmmbutk7i5qN2QP5rFCnKAM5LLppgG47X5mRfKlRsMTziGGMaGexZKUSnhtqKW188IAc%2FRUHq548csMISlpEUWZayWBUz%2FI4%2FJDjmrRnjZDuL4MRxLygpFjZNN8vvascFYP19wc9mL1xo%2Fxg5QuqHNl1IHzK97WPXU14EM5uh7aWRrUlgbIQPBYXqu2MA7MZAskabHX04BIARJwq5mR%2Fa0iAFn%2BUud0Cb%2FLgVK2489W9DZ3fViAAOzETarMcehd8Y7PVH01Y86CTtTcXzIYnKvB1VkgdFs%2FPzJCTHFy6aG8I%2BUvwXtMPzt0dUGOqUBpD%2F8jlWsfSvZJuYYlj53CdGZXWqjyAD0%2BXWeNIdExXbDttixPcYyTUb%2BnUtlhNOogytJgsnaNK8Oj7jYwcrtmZgaHcwlQdYWRCHmAvER%2B1dTMZQZvXKq6ab9HUV80V8ZAadoAzpLWv6sQhYY5BUAV6dGyx9cNPH8jZJhrGROGY5uPLKFs8o8dwP2GSF%2BHlwBOij7VsqZqfLkCVek8wHer7Yzoihq&X-Amz-Signature=53c439044ef60d494d97b8ebb09f481da038a76e6aa74a70ad254d094b575849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6LI5HW%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIA24cdnv3rPchjE4pdgWykU9qFjLeyznpeCYPfrV6VGUAiEA1ESmfn5reC6Oax0gTqVYojuAhKP4Hji%2BSaMLFFW1sIsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1yq3P4tgiEAgqyGSrcAxuAxKhvByaKBpbFlGxrQr%2BJ2SP%2BvazhYZkGpRgAQx8MYA6Nu79%2FNvv7ehUuU7sCwkBJow6QxWtjfcyTYZxUslXEVA%2BGtJvn3qXtsxO94hvh7EQt4hCpzRP1zZNGJgAX%2FOoK9Ej0z8FAdYUyxKDQe8GdMGdgodMcEVz9DFjHjUxpRo18gH17XkAvIWPMniJIeF91Aj%2FJYK4MN6Jq2TTOdpcwE9HBvZyQkntiifqufdNm%2BQ%2FWezJ2HoSy1pjR6YSgImlK6tn%2Fmp3nlDDiWg1xbuKE8nZ%2F%2ByhBnsZWDkyvhcCQLBM69wlxxNeno0J3Aj4xrQE%2F4LTEKDpmmbutk7i5qN2QP5rFCnKAM5LLppgG47X5mRfKlRsMTziGGMaGexZKUSnhtqKW188IAc%2FRUHq548csMISlpEUWZayWBUz%2FI4%2FJDjmrRnjZDuL4MRxLygpFjZNN8vvascFYP19wc9mL1xo%2Fxg5QuqHNl1IHzK97WPXU14EM5uh7aWRrUlgbIQPBYXqu2MA7MZAskabHX04BIARJwq5mR%2Fa0iAFn%2BUud0Cb%2FLgVK2489W9DZ3fViAAOzETarMcehd8Y7PVH01Y86CTtTcXzIYnKvB1VkgdFs%2FPzJCTHFy6aG8I%2BUvwXtMPzt0dUGOqUBpD%2F8jlWsfSvZJuYYlj53CdGZXWqjyAD0%2BXWeNIdExXbDttixPcYyTUb%2BnUtlhNOogytJgsnaNK8Oj7jYwcrtmZgaHcwlQdYWRCHmAvER%2B1dTMZQZvXKq6ab9HUV80V8ZAadoAzpLWv6sQhYY5BUAV6dGyx9cNPH8jZJhrGROGY5uPLKFs8o8dwP2GSF%2BHlwBOij7VsqZqfLkCVek8wHer7Yzoihq&X-Amz-Signature=9a5541cbe07b40591b117ee78ceafa21d1f0bee911b7cefaff7be82b7974933e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGUF2SNO%2F20260924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260924T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBrYIHGe%2F9qDLRMZ0RcASkgTblusvBjAW05ksvEioy1hAiEArMhpNvEIeA%2FmVX4zTRcK9VXfclROL9nNB6a%2Bv3jbQzsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrMZOKH1onFUZBlfCrcA4%2BQRSP81j7dkCU%2FoDnOU5kiEzW5sd8y3FVZnEal51da0Vg4Y%2BtDRLSBQgAlr%2BSV7I%2FxvQlfDO2hNQODFpQbJK0hNG62DzD5p2eoSX7fYTO5p2K4ineLFkEi4NvaAeksmtiPEqXiBzYSczTySGzy4ahD7rKD9AYfwdaq8nLXAp4s4ge5NfJ6952MA6zPQVqdzCowk9Ek0sQlHYUE0EA98SQ3jxkLgs4Thlzf22Bx3pzMUGwi3zovRw9uJ15RfiDQcx0IKXQhtAOfgyfS3J%2F64hcWCET%2BxLLwN363dBMdbHcxpehn%2FoPWTad7IzFMtr9ee3vxxiNqFQVSzO8pWpYUNvId6RWsiwySvKE3AihKOTWh4nylKepSkksJCWBtYU8A4kn9z7asN%2BE4bSXodiySdS0we61kMaAMeMDD2Y4Nz207fI1%2BkiNR%2BL%2BJbj8ThhXZykwllTtlIyXN%2FrHELvr3NCs3Apj3u3ZiAmsubTNyVn9d%2FDXm6LXYG3JybvY0bZ%2BvMQewt2CR3RYyGo2jlMT%2BvGRIUFss9EsDpybrBr4d0EapNzy8sxkgGTSncJEuolCgeLdWyXHuNmq5l8QFVn2Md7mfbbzfKrL%2B46P8sYlcKchaP2tRhQ3%2F8HtYOyp1ML3u0dUGOqUB1IajsptuGhSIIGkKkKQODNPCe1EHNMesPbK%2F2Q1bRyyMI5Cqzg%2BsQhuGlqC%2F6YlDc0d3oYiIWnU4T2O1vgtVQiPXBrfzyfxp5dP3Y0THa54UDqbVgmxnYgxjmDA9hoQso%2F7NbfFMfUv4d40oKZHtP6MnttksRWVY1dLhQQJH92eqX0I36rsmVciaqx7EooXduG9IWbYfXGKhxW%2FmepCVL0XdZadp&X-Amz-Signature=d243f3bfb5815aa742da1f1eacc86f823b697f4de13e63c389e63031408716b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

