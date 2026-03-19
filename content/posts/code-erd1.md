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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7QVLRA%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCFJS7NAApFcpliQSgLBzheU8nd7FH5CWXNObIxok6yTwIhAPUDkkI0clDh38tQbFQSVEMV%2FtIc1eS2DSj7ZorPzUotKv8DCBMQABoMNjM3NDIzMTgzODA1IgyYRHlVoECFnIvIvhUq3ANMZ0MzGhzPOGVZl8v%2F%2BeneNEYKw1PoHYzR%2BBuWBou04pnaDCv6fBoHv7YR44yHHFvvAuZzMaiM3zfhMD6YY8ayU3%2B%2BmVA9YlxBYncoc8EO2s1Pj90aZFIhIJcJSGtAa4NiNcvKragJPkwaSUNgiPjq6SjGDa6ROyaLxPOFJp5r2gfK80lWt6QKQqyx%2BBeDcnzb3gldeir5ApwMxsH%2FJ1cyM6GR2hF7bBKhBJuq8CN6xNDS1BiwSwN8gywjP2edc1Ln6OZXEk6aCkDDTNkft1oLWP2yEZ%2Frz0EDy58DGdOfknjlowfyIUWaRnyjlWYWq5HG%2Bj3sRdHoUtgnJ%2BT2rnSypyyYf%2BLx4yKJGP%2B7DfYwGSZptsAWqnIws3C65%2FtrhkJFrs9dYosHs63AROX5sdtJbHmwDNWrGTEEbPSSR3j1pkdWwgIdVWTD1STkr%2BEFBzTGSL7ufLlucJMnrk3sdI%2BcbjOM0824tHw6L5ZtQs0B5gNAD0NOmW0UmuvJVylR7mOFs4uA5u9%2BQyi7D7rloP%2BbMalHMscj8JAIoH8533NLwT40PNUTYS08Tq86q6F3L7RhwZp0wqbiw06IQL0Ga0Lnh46RHanNkd7gD%2Fun3ERcBD7jAHKnjWlGBRx8CzCIqe3NBjqkAeKirX5RF5NqW61bJaSu99zLHxypUP6Yz2%2BhzGG5taPHD7trI0HkdX1OWlH7nuw4CfpWdt6gEl1hDtVuxzwTd%2FaoqMmVFRz%2BWRqaQz%2BtW%2FhdFK1JtI1XPWPzcQFdJELHyscAkir4P9fbdD2vBmeQpO%2F588BhccpNuGikHv1bRcx5gKuHk4ckM3Q%2FiPshvYJmBtGkyHzg9jeTGNkuWd%2FY2Mwk14bf&X-Amz-Signature=047a0446f362e4479a53b7029981082f52f44ee5ae3e3adf9632e89ffa2bfa19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBU4AFUJ%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDvOPlG0cqczB0NkmpxtAwszMkKupRt5F%2BYBiMjvljabAiAn89i8phuQGzyNH1a3MM4p4dj2ZcC%2BiMFtdbdU0BpWUyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMmJLBLGM8xs9gF615KtwDs8xb2S26zZxbAufEg72Y87mPsyHlAf3AetnaCkLB1h1rUyVOeB9ECZeoYZcjwdwav3Z%2BEtMrrM754A9Poj7tiDBJVwSybWZ6wjB7JnKfCof61wnrLqznC3YcCoh4RjfrmZxjEUyXHdQZ39XeIP980VwgJRz3viwLt%2F6W5yjGH4VbnyX9nUqRrFkvut%2BMhfxaBKefkXuiJNCBIjHRTrvIVqD5zWkWF%2FfrqjNoAFS3rIOQ5fbcQ9ZAtsVWWg8lJJ%2FmWI0OMN16tqFfQhtj8SsNCfSrzBOhcpf7AebyPVMEVJU5XXJE8xkUp2GuItjqrhhb4UIpZABun5d8Nyt8IolmnppiU5Bidisd92jPdMM4Esg6cOLuA4%2FhZ7z7NeRiTfY3o9RonL8JDBU4fL4nBTEtKZ1kRnqpYNyHjQZuADVbZXqyhEWUIqYRxtl%2FDhY%2B50WQpQ%2Bh12rrW%2FebvNSHB7d7Hfh%2FflmoOXCRvHhCk5Cb%2FGvvcYFqvCuAGD%2Bg0OiS8bqWENxzqL9YdPODwvFpXnTl%2Fjluf1XpxjPOeukglrWDcXINOG2zt0ATQfx8DxI1LcmQ7VtJlg6jemmGJdDY0ww%2FqOiG02olcxnUeZyabiDvHkVMiY2sEUyK%2Fb4YMCowx6ntzQY6pgF4EGmzotw3dhZyfN%2FL8wcjUf18szZegB7%2FxiOqK2M%2BQVwE6n5qhJiExIm%2FcJOGAz%2Fd2zemk%2FD8MQJf9BtJlcTzPCnbyBP7DLT6w%2FsffrVGMHv%2FafaeQhi2hn4wwpkryZaWVDFVh7TeZ1J%2FP3Q5BeLimLFrUw%2BYrdvZ5jcyjT6cro3hog03%2F%2FL0BdZuOCmy3BvYvjFeKuxlMcDrPBPh2eISH68NFMJe&X-Amz-Signature=d5d088076cc3314d1ad0dd5221149208461e4de05265c4a36fa0e1a7b83ce1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBU4AFUJ%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDvOPlG0cqczB0NkmpxtAwszMkKupRt5F%2BYBiMjvljabAiAn89i8phuQGzyNH1a3MM4p4dj2ZcC%2BiMFtdbdU0BpWUyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMmJLBLGM8xs9gF615KtwDs8xb2S26zZxbAufEg72Y87mPsyHlAf3AetnaCkLB1h1rUyVOeB9ECZeoYZcjwdwav3Z%2BEtMrrM754A9Poj7tiDBJVwSybWZ6wjB7JnKfCof61wnrLqznC3YcCoh4RjfrmZxjEUyXHdQZ39XeIP980VwgJRz3viwLt%2F6W5yjGH4VbnyX9nUqRrFkvut%2BMhfxaBKefkXuiJNCBIjHRTrvIVqD5zWkWF%2FfrqjNoAFS3rIOQ5fbcQ9ZAtsVWWg8lJJ%2FmWI0OMN16tqFfQhtj8SsNCfSrzBOhcpf7AebyPVMEVJU5XXJE8xkUp2GuItjqrhhb4UIpZABun5d8Nyt8IolmnppiU5Bidisd92jPdMM4Esg6cOLuA4%2FhZ7z7NeRiTfY3o9RonL8JDBU4fL4nBTEtKZ1kRnqpYNyHjQZuADVbZXqyhEWUIqYRxtl%2FDhY%2B50WQpQ%2Bh12rrW%2FebvNSHB7d7Hfh%2FflmoOXCRvHhCk5Cb%2FGvvcYFqvCuAGD%2Bg0OiS8bqWENxzqL9YdPODwvFpXnTl%2Fjluf1XpxjPOeukglrWDcXINOG2zt0ATQfx8DxI1LcmQ7VtJlg6jemmGJdDY0ww%2FqOiG02olcxnUeZyabiDvHkVMiY2sEUyK%2Fb4YMCowx6ntzQY6pgF4EGmzotw3dhZyfN%2FL8wcjUf18szZegB7%2FxiOqK2M%2BQVwE6n5qhJiExIm%2FcJOGAz%2Fd2zemk%2FD8MQJf9BtJlcTzPCnbyBP7DLT6w%2FsffrVGMHv%2FafaeQhi2hn4wwpkryZaWVDFVh7TeZ1J%2FP3Q5BeLimLFrUw%2BYrdvZ5jcyjT6cro3hog03%2F%2FL0BdZuOCmy3BvYvjFeKuxlMcDrPBPh2eISH68NFMJe&X-Amz-Signature=6c3499ce01d30f409f7f0f8b8c82049a2801c4d4e499fc816562f64d4b4c0788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBU4AFUJ%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDvOPlG0cqczB0NkmpxtAwszMkKupRt5F%2BYBiMjvljabAiAn89i8phuQGzyNH1a3MM4p4dj2ZcC%2BiMFtdbdU0BpWUyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMmJLBLGM8xs9gF615KtwDs8xb2S26zZxbAufEg72Y87mPsyHlAf3AetnaCkLB1h1rUyVOeB9ECZeoYZcjwdwav3Z%2BEtMrrM754A9Poj7tiDBJVwSybWZ6wjB7JnKfCof61wnrLqznC3YcCoh4RjfrmZxjEUyXHdQZ39XeIP980VwgJRz3viwLt%2F6W5yjGH4VbnyX9nUqRrFkvut%2BMhfxaBKefkXuiJNCBIjHRTrvIVqD5zWkWF%2FfrqjNoAFS3rIOQ5fbcQ9ZAtsVWWg8lJJ%2FmWI0OMN16tqFfQhtj8SsNCfSrzBOhcpf7AebyPVMEVJU5XXJE8xkUp2GuItjqrhhb4UIpZABun5d8Nyt8IolmnppiU5Bidisd92jPdMM4Esg6cOLuA4%2FhZ7z7NeRiTfY3o9RonL8JDBU4fL4nBTEtKZ1kRnqpYNyHjQZuADVbZXqyhEWUIqYRxtl%2FDhY%2B50WQpQ%2Bh12rrW%2FebvNSHB7d7Hfh%2FflmoOXCRvHhCk5Cb%2FGvvcYFqvCuAGD%2Bg0OiS8bqWENxzqL9YdPODwvFpXnTl%2Fjluf1XpxjPOeukglrWDcXINOG2zt0ATQfx8DxI1LcmQ7VtJlg6jemmGJdDY0ww%2FqOiG02olcxnUeZyabiDvHkVMiY2sEUyK%2Fb4YMCowx6ntzQY6pgF4EGmzotw3dhZyfN%2FL8wcjUf18szZegB7%2FxiOqK2M%2BQVwE6n5qhJiExIm%2FcJOGAz%2Fd2zemk%2FD8MQJf9BtJlcTzPCnbyBP7DLT6w%2FsffrVGMHv%2FafaeQhi2hn4wwpkryZaWVDFVh7TeZ1J%2FP3Q5BeLimLFrUw%2BYrdvZ5jcyjT6cro3hog03%2F%2FL0BdZuOCmy3BvYvjFeKuxlMcDrPBPh2eISH68NFMJe&X-Amz-Signature=26d12189ce46a19f5ac74e10dd2614b8bafbeeb8fb46e0b6d9d8c4a3bb5188bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBU4AFUJ%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDvOPlG0cqczB0NkmpxtAwszMkKupRt5F%2BYBiMjvljabAiAn89i8phuQGzyNH1a3MM4p4dj2ZcC%2BiMFtdbdU0BpWUyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMmJLBLGM8xs9gF615KtwDs8xb2S26zZxbAufEg72Y87mPsyHlAf3AetnaCkLB1h1rUyVOeB9ECZeoYZcjwdwav3Z%2BEtMrrM754A9Poj7tiDBJVwSybWZ6wjB7JnKfCof61wnrLqznC3YcCoh4RjfrmZxjEUyXHdQZ39XeIP980VwgJRz3viwLt%2F6W5yjGH4VbnyX9nUqRrFkvut%2BMhfxaBKefkXuiJNCBIjHRTrvIVqD5zWkWF%2FfrqjNoAFS3rIOQ5fbcQ9ZAtsVWWg8lJJ%2FmWI0OMN16tqFfQhtj8SsNCfSrzBOhcpf7AebyPVMEVJU5XXJE8xkUp2GuItjqrhhb4UIpZABun5d8Nyt8IolmnppiU5Bidisd92jPdMM4Esg6cOLuA4%2FhZ7z7NeRiTfY3o9RonL8JDBU4fL4nBTEtKZ1kRnqpYNyHjQZuADVbZXqyhEWUIqYRxtl%2FDhY%2B50WQpQ%2Bh12rrW%2FebvNSHB7d7Hfh%2FflmoOXCRvHhCk5Cb%2FGvvcYFqvCuAGD%2Bg0OiS8bqWENxzqL9YdPODwvFpXnTl%2Fjluf1XpxjPOeukglrWDcXINOG2zt0ATQfx8DxI1LcmQ7VtJlg6jemmGJdDY0ww%2FqOiG02olcxnUeZyabiDvHkVMiY2sEUyK%2Fb4YMCowx6ntzQY6pgF4EGmzotw3dhZyfN%2FL8wcjUf18szZegB7%2FxiOqK2M%2BQVwE6n5qhJiExIm%2FcJOGAz%2Fd2zemk%2FD8MQJf9BtJlcTzPCnbyBP7DLT6w%2FsffrVGMHv%2FafaeQhi2hn4wwpkryZaWVDFVh7TeZ1J%2FP3Q5BeLimLFrUw%2BYrdvZ5jcyjT6cro3hog03%2F%2FL0BdZuOCmy3BvYvjFeKuxlMcDrPBPh2eISH68NFMJe&X-Amz-Signature=ad4b674356873530b04e415f35ca2c549c1324d0f7ab014b6ff10432b29d1683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBU4AFUJ%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDvOPlG0cqczB0NkmpxtAwszMkKupRt5F%2BYBiMjvljabAiAn89i8phuQGzyNH1a3MM4p4dj2ZcC%2BiMFtdbdU0BpWUyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMmJLBLGM8xs9gF615KtwDs8xb2S26zZxbAufEg72Y87mPsyHlAf3AetnaCkLB1h1rUyVOeB9ECZeoYZcjwdwav3Z%2BEtMrrM754A9Poj7tiDBJVwSybWZ6wjB7JnKfCof61wnrLqznC3YcCoh4RjfrmZxjEUyXHdQZ39XeIP980VwgJRz3viwLt%2F6W5yjGH4VbnyX9nUqRrFkvut%2BMhfxaBKefkXuiJNCBIjHRTrvIVqD5zWkWF%2FfrqjNoAFS3rIOQ5fbcQ9ZAtsVWWg8lJJ%2FmWI0OMN16tqFfQhtj8SsNCfSrzBOhcpf7AebyPVMEVJU5XXJE8xkUp2GuItjqrhhb4UIpZABun5d8Nyt8IolmnppiU5Bidisd92jPdMM4Esg6cOLuA4%2FhZ7z7NeRiTfY3o9RonL8JDBU4fL4nBTEtKZ1kRnqpYNyHjQZuADVbZXqyhEWUIqYRxtl%2FDhY%2B50WQpQ%2Bh12rrW%2FebvNSHB7d7Hfh%2FflmoOXCRvHhCk5Cb%2FGvvcYFqvCuAGD%2Bg0OiS8bqWENxzqL9YdPODwvFpXnTl%2Fjluf1XpxjPOeukglrWDcXINOG2zt0ATQfx8DxI1LcmQ7VtJlg6jemmGJdDY0ww%2FqOiG02olcxnUeZyabiDvHkVMiY2sEUyK%2Fb4YMCowx6ntzQY6pgF4EGmzotw3dhZyfN%2FL8wcjUf18szZegB7%2FxiOqK2M%2BQVwE6n5qhJiExIm%2FcJOGAz%2Fd2zemk%2FD8MQJf9BtJlcTzPCnbyBP7DLT6w%2FsffrVGMHv%2FafaeQhi2hn4wwpkryZaWVDFVh7TeZ1J%2FP3Q5BeLimLFrUw%2BYrdvZ5jcyjT6cro3hog03%2F%2FL0BdZuOCmy3BvYvjFeKuxlMcDrPBPh2eISH68NFMJe&X-Amz-Signature=359ae309f3b352c12163524c8094a2028ca187da2dd56a40b40619e0d003084d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7QVLRA%2F20260319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260319T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCFJS7NAApFcpliQSgLBzheU8nd7FH5CWXNObIxok6yTwIhAPUDkkI0clDh38tQbFQSVEMV%2FtIc1eS2DSj7ZorPzUotKv8DCBMQABoMNjM3NDIzMTgzODA1IgyYRHlVoECFnIvIvhUq3ANMZ0MzGhzPOGVZl8v%2F%2BeneNEYKw1PoHYzR%2BBuWBou04pnaDCv6fBoHv7YR44yHHFvvAuZzMaiM3zfhMD6YY8ayU3%2B%2BmVA9YlxBYncoc8EO2s1Pj90aZFIhIJcJSGtAa4NiNcvKragJPkwaSUNgiPjq6SjGDa6ROyaLxPOFJp5r2gfK80lWt6QKQqyx%2BBeDcnzb3gldeir5ApwMxsH%2FJ1cyM6GR2hF7bBKhBJuq8CN6xNDS1BiwSwN8gywjP2edc1Ln6OZXEk6aCkDDTNkft1oLWP2yEZ%2Frz0EDy58DGdOfknjlowfyIUWaRnyjlWYWq5HG%2Bj3sRdHoUtgnJ%2BT2rnSypyyYf%2BLx4yKJGP%2B7DfYwGSZptsAWqnIws3C65%2FtrhkJFrs9dYosHs63AROX5sdtJbHmwDNWrGTEEbPSSR3j1pkdWwgIdVWTD1STkr%2BEFBzTGSL7ufLlucJMnrk3sdI%2BcbjOM0824tHw6L5ZtQs0B5gNAD0NOmW0UmuvJVylR7mOFs4uA5u9%2BQyi7D7rloP%2BbMalHMscj8JAIoH8533NLwT40PNUTYS08Tq86q6F3L7RhwZp0wqbiw06IQL0Ga0Lnh46RHanNkd7gD%2Fun3ERcBD7jAHKnjWlGBRx8CzCIqe3NBjqkAeKirX5RF5NqW61bJaSu99zLHxypUP6Yz2%2BhzGG5taPHD7trI0HkdX1OWlH7nuw4CfpWdt6gEl1hDtVuxzwTd%2FaoqMmVFRz%2BWRqaQz%2BtW%2FhdFK1JtI1XPWPzcQFdJELHyscAkir4P9fbdD2vBmeQpO%2F588BhccpNuGikHv1bRcx5gKuHk4ckM3Q%2FiPshvYJmBtGkyHzg9jeTGNkuWd%2FY2Mwk14bf&X-Amz-Signature=4820ad5acc4045479bc570a40fc90c36260828cca115e65ca892ec1afbd6cbc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

