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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMS5NWY%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T074827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDTAwG7SFLUXdRupvoJcUAVlMmqEFXul%2F5CloNY47eF9wIgT5peCBAdFFsRCuoxpH0sWmDRjzzy8AxjIKvCoI2DWjAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDFlxgeJYoYzosyOsSrcAzDTJqlDk8uoicczS4LUjtQ4F1iwoC%2BnRc5w7E4fuyRbyxhXPyO7e2AV3HdlFPJfF0PSdF8HrWn7WORGW21K%2F61iAnh0eE2oJ1kh7vPGLThZAgh8%2Bnal9qFnxjRJGgHrFnkcR%2BdxsWzzFrYwDn6azGF7PVi0QlhAXX4BIpHedqU24rRjjkb91ecAoS6PcS9viSf%2F4Z06EogrRdYR5i8CUHzJUik2lVSoU875RqNJ9H1Yfgexyi8rEvnqJnlIoeuoBqfhNcQX7fpbpQiFFPOiYP9SOPYAhtylDpdvrJiHVf3TZk2w5LrjKuamimUMIpWr3w9zeUHD4%2BpepPfvzMpw%2FXu04ZHR%2Fv7yu47tIcC9TAEpoCZ9DO1hQd5eH1cM8tHFB5c3HLo9vIquQz94jiGl7uRdHPeQ3IJ6H9orkM%2Bszm7TkAyNN3zYwkCvAAGEbptXhgaViKDA8br2TXaEVkBrp5MUE3e%2Fr2L56ZZSyKLg2fZ5AFnCgK6TmmbB65ekzYeroQe%2BUdLY7w%2BUeI%2Fwj8IrgqZGNiE7CNgqGPeVgWJeG7WdOSrcxqaFEd25OXAjRogj%2FgaMzrdbyb0v2DxsklgRkkaOBUh6nULGjeWZMIx0k%2FOY9IBvGtyf7Wuh%2FLM1MO3Ev9QGOqUBYwSnUE5yWeYUt50aDyNIDd64rwBvRh%2B0xE6tDp7ulbllB9dUP6MBk05LRYS6zxRvGTBHngowLm9PuFGH5PPdkT2n9sdd2cqMeEsV%2BvXkn4fodMpPHyvmxHNsljjew7qQ3JaBlB43oSX4httuavU3iVN8RC5r%2FwjzkKXpe5PmZ0Sd1J%2BFN7TOro%2BFBAJoqupHaOKDjv3iI7Fl%2BTWfcrQQis%2BbDZBb&X-Amz-Signature=6e7daac21dca3b91e570e5453fc0fdd27adc418f5549bf13956ae43efa331abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGU62JW%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T074828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFKScLjDm%2Fwzd2jPy4YsP%2Fk7FQIdWjN8Z6ghcdMojuGsAiB%2BuPIyqHh7WAtIixm4QKf3Oor86gauh7kG9m4mnbMFwyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMxcTjT73RApadQ3isKtwDK1hFrLx1aCqL1ytviJ37wxt163bGS%2F4syNeC648GYGRWLlxWOsFawy4qivvXEFMkdBpb15UW0sD%2BLKOASL00y5LdW6pwZYI8PtNkzdCs7nl1OHj9BgfJMoC4t%2BeZ9jbkIGWPIgmX%2FhUwKJq6krEUE1H1ImmlyP6RFkCdW9K%2B6%2BdhhIcQf3SboOz3r98wUtIWSeIadtVrVn7NzIEHsBNsHA11Rh5CEh4O0m2aWP90zkr9zm0jjPzciblXFO2oZCNMJUumW3QHIxF4ARs9FdVsoqu0YtDP2VUL4DTTmjTjpj%2BQcwGv7RtaQCXrgOYRq58PHENZT751FIeZ9zuZ0tw7DXGY%2FoN1DF07HJE1DS5%2FqwQ%2BXxBWwHjIvnYVNKU04L%2FKOhnSkw0DVeCw1AclyeWu0j61aRRpPqKSXbUxu7sBBXAdQM04IZxoX4a%2FeMAAUAMwYJNZppOzmPIiiHHqBqy3YTc6aruEbioWzA6Tzcir4RS4Sqj1oAb2rcscwHrc%2FTW8TzrBu56PdrZrMZOPjpERug44Zf%2Fa1q8LBEJXWToNVFnk4TGlzDBbXacLTFha%2FV67B6HLrghtOsK45G9caqraAKNtN8G3ObkDHCeUsDf8tbYgoSCo3oOeFhkrGbkwsMG%2F1AY6pgHMKF5oN6EAVC27yna3Crcd0ESHqL4nIXcOtbOZzk59c%2BI43AOQdsWR%2BzrZcuLSJ3Jz1UtoVVNMcxunlu9SEgS4DZzeuRUn%2FCynBQBYXdXyVlE4G7AcyKiHXO%2FoqhPt%2BdKRvDC02ga6CXWP1jo7vomkU%2FNAqae7lXUyjJ6IOYTkV7aMVuQCMjoOIZh6BL8RW1sLNYHE5%2BljPotmKIDrdOjUsvIYL%2B%2Bi&X-Amz-Signature=1578d8079b4e090d0e244fc1e4045e215f4a7f2abeaaf1ff08861eecce5ccff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGU62JW%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T074828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFKScLjDm%2Fwzd2jPy4YsP%2Fk7FQIdWjN8Z6ghcdMojuGsAiB%2BuPIyqHh7WAtIixm4QKf3Oor86gauh7kG9m4mnbMFwyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMxcTjT73RApadQ3isKtwDK1hFrLx1aCqL1ytviJ37wxt163bGS%2F4syNeC648GYGRWLlxWOsFawy4qivvXEFMkdBpb15UW0sD%2BLKOASL00y5LdW6pwZYI8PtNkzdCs7nl1OHj9BgfJMoC4t%2BeZ9jbkIGWPIgmX%2FhUwKJq6krEUE1H1ImmlyP6RFkCdW9K%2B6%2BdhhIcQf3SboOz3r98wUtIWSeIadtVrVn7NzIEHsBNsHA11Rh5CEh4O0m2aWP90zkr9zm0jjPzciblXFO2oZCNMJUumW3QHIxF4ARs9FdVsoqu0YtDP2VUL4DTTmjTjpj%2BQcwGv7RtaQCXrgOYRq58PHENZT751FIeZ9zuZ0tw7DXGY%2FoN1DF07HJE1DS5%2FqwQ%2BXxBWwHjIvnYVNKU04L%2FKOhnSkw0DVeCw1AclyeWu0j61aRRpPqKSXbUxu7sBBXAdQM04IZxoX4a%2FeMAAUAMwYJNZppOzmPIiiHHqBqy3YTc6aruEbioWzA6Tzcir4RS4Sqj1oAb2rcscwHrc%2FTW8TzrBu56PdrZrMZOPjpERug44Zf%2Fa1q8LBEJXWToNVFnk4TGlzDBbXacLTFha%2FV67B6HLrghtOsK45G9caqraAKNtN8G3ObkDHCeUsDf8tbYgoSCo3oOeFhkrGbkwsMG%2F1AY6pgHMKF5oN6EAVC27yna3Crcd0ESHqL4nIXcOtbOZzk59c%2BI43AOQdsWR%2BzrZcuLSJ3Jz1UtoVVNMcxunlu9SEgS4DZzeuRUn%2FCynBQBYXdXyVlE4G7AcyKiHXO%2FoqhPt%2BdKRvDC02ga6CXWP1jo7vomkU%2FNAqae7lXUyjJ6IOYTkV7aMVuQCMjoOIZh6BL8RW1sLNYHE5%2BljPotmKIDrdOjUsvIYL%2B%2Bi&X-Amz-Signature=1e84592100d6f4bc2657c5dc7957dd5feebff240ed2b63d070f2c5263cda80ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGU62JW%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T074828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFKScLjDm%2Fwzd2jPy4YsP%2Fk7FQIdWjN8Z6ghcdMojuGsAiB%2BuPIyqHh7WAtIixm4QKf3Oor86gauh7kG9m4mnbMFwyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMxcTjT73RApadQ3isKtwDK1hFrLx1aCqL1ytviJ37wxt163bGS%2F4syNeC648GYGRWLlxWOsFawy4qivvXEFMkdBpb15UW0sD%2BLKOASL00y5LdW6pwZYI8PtNkzdCs7nl1OHj9BgfJMoC4t%2BeZ9jbkIGWPIgmX%2FhUwKJq6krEUE1H1ImmlyP6RFkCdW9K%2B6%2BdhhIcQf3SboOz3r98wUtIWSeIadtVrVn7NzIEHsBNsHA11Rh5CEh4O0m2aWP90zkr9zm0jjPzciblXFO2oZCNMJUumW3QHIxF4ARs9FdVsoqu0YtDP2VUL4DTTmjTjpj%2BQcwGv7RtaQCXrgOYRq58PHENZT751FIeZ9zuZ0tw7DXGY%2FoN1DF07HJE1DS5%2FqwQ%2BXxBWwHjIvnYVNKU04L%2FKOhnSkw0DVeCw1AclyeWu0j61aRRpPqKSXbUxu7sBBXAdQM04IZxoX4a%2FeMAAUAMwYJNZppOzmPIiiHHqBqy3YTc6aruEbioWzA6Tzcir4RS4Sqj1oAb2rcscwHrc%2FTW8TzrBu56PdrZrMZOPjpERug44Zf%2Fa1q8LBEJXWToNVFnk4TGlzDBbXacLTFha%2FV67B6HLrghtOsK45G9caqraAKNtN8G3ObkDHCeUsDf8tbYgoSCo3oOeFhkrGbkwsMG%2F1AY6pgHMKF5oN6EAVC27yna3Crcd0ESHqL4nIXcOtbOZzk59c%2BI43AOQdsWR%2BzrZcuLSJ3Jz1UtoVVNMcxunlu9SEgS4DZzeuRUn%2FCynBQBYXdXyVlE4G7AcyKiHXO%2FoqhPt%2BdKRvDC02ga6CXWP1jo7vomkU%2FNAqae7lXUyjJ6IOYTkV7aMVuQCMjoOIZh6BL8RW1sLNYHE5%2BljPotmKIDrdOjUsvIYL%2B%2Bi&X-Amz-Signature=848b83dfc8ec521b15988b5128d1783bd1d77135b5daa45eda45458201e7b5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGU62JW%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T074828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFKScLjDm%2Fwzd2jPy4YsP%2Fk7FQIdWjN8Z6ghcdMojuGsAiB%2BuPIyqHh7WAtIixm4QKf3Oor86gauh7kG9m4mnbMFwyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMxcTjT73RApadQ3isKtwDK1hFrLx1aCqL1ytviJ37wxt163bGS%2F4syNeC648GYGRWLlxWOsFawy4qivvXEFMkdBpb15UW0sD%2BLKOASL00y5LdW6pwZYI8PtNkzdCs7nl1OHj9BgfJMoC4t%2BeZ9jbkIGWPIgmX%2FhUwKJq6krEUE1H1ImmlyP6RFkCdW9K%2B6%2BdhhIcQf3SboOz3r98wUtIWSeIadtVrVn7NzIEHsBNsHA11Rh5CEh4O0m2aWP90zkr9zm0jjPzciblXFO2oZCNMJUumW3QHIxF4ARs9FdVsoqu0YtDP2VUL4DTTmjTjpj%2BQcwGv7RtaQCXrgOYRq58PHENZT751FIeZ9zuZ0tw7DXGY%2FoN1DF07HJE1DS5%2FqwQ%2BXxBWwHjIvnYVNKU04L%2FKOhnSkw0DVeCw1AclyeWu0j61aRRpPqKSXbUxu7sBBXAdQM04IZxoX4a%2FeMAAUAMwYJNZppOzmPIiiHHqBqy3YTc6aruEbioWzA6Tzcir4RS4Sqj1oAb2rcscwHrc%2FTW8TzrBu56PdrZrMZOPjpERug44Zf%2Fa1q8LBEJXWToNVFnk4TGlzDBbXacLTFha%2FV67B6HLrghtOsK45G9caqraAKNtN8G3ObkDHCeUsDf8tbYgoSCo3oOeFhkrGbkwsMG%2F1AY6pgHMKF5oN6EAVC27yna3Crcd0ESHqL4nIXcOtbOZzk59c%2BI43AOQdsWR%2BzrZcuLSJ3Jz1UtoVVNMcxunlu9SEgS4DZzeuRUn%2FCynBQBYXdXyVlE4G7AcyKiHXO%2FoqhPt%2BdKRvDC02ga6CXWP1jo7vomkU%2FNAqae7lXUyjJ6IOYTkV7aMVuQCMjoOIZh6BL8RW1sLNYHE5%2BljPotmKIDrdOjUsvIYL%2B%2Bi&X-Amz-Signature=14b6af9639ecabc570c5bd1cba528ba6e43acc594e859776a15629b5d98d4dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFGU62JW%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T074828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFKScLjDm%2Fwzd2jPy4YsP%2Fk7FQIdWjN8Z6ghcdMojuGsAiB%2BuPIyqHh7WAtIixm4QKf3Oor86gauh7kG9m4mnbMFwyr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMxcTjT73RApadQ3isKtwDK1hFrLx1aCqL1ytviJ37wxt163bGS%2F4syNeC648GYGRWLlxWOsFawy4qivvXEFMkdBpb15UW0sD%2BLKOASL00y5LdW6pwZYI8PtNkzdCs7nl1OHj9BgfJMoC4t%2BeZ9jbkIGWPIgmX%2FhUwKJq6krEUE1H1ImmlyP6RFkCdW9K%2B6%2BdhhIcQf3SboOz3r98wUtIWSeIadtVrVn7NzIEHsBNsHA11Rh5CEh4O0m2aWP90zkr9zm0jjPzciblXFO2oZCNMJUumW3QHIxF4ARs9FdVsoqu0YtDP2VUL4DTTmjTjpj%2BQcwGv7RtaQCXrgOYRq58PHENZT751FIeZ9zuZ0tw7DXGY%2FoN1DF07HJE1DS5%2FqwQ%2BXxBWwHjIvnYVNKU04L%2FKOhnSkw0DVeCw1AclyeWu0j61aRRpPqKSXbUxu7sBBXAdQM04IZxoX4a%2FeMAAUAMwYJNZppOzmPIiiHHqBqy3YTc6aruEbioWzA6Tzcir4RS4Sqj1oAb2rcscwHrc%2FTW8TzrBu56PdrZrMZOPjpERug44Zf%2Fa1q8LBEJXWToNVFnk4TGlzDBbXacLTFha%2FV67B6HLrghtOsK45G9caqraAKNtN8G3ObkDHCeUsDf8tbYgoSCo3oOeFhkrGbkwsMG%2F1AY6pgHMKF5oN6EAVC27yna3Crcd0ESHqL4nIXcOtbOZzk59c%2BI43AOQdsWR%2BzrZcuLSJ3Jz1UtoVVNMcxunlu9SEgS4DZzeuRUn%2FCynBQBYXdXyVlE4G7AcyKiHXO%2FoqhPt%2BdKRvDC02ga6CXWP1jo7vomkU%2FNAqae7lXUyjJ6IOYTkV7aMVuQCMjoOIZh6BL8RW1sLNYHE5%2BljPotmKIDrdOjUsvIYL%2B%2Bi&X-Amz-Signature=278db63504b70b826e274e5e21a3be30c5c564535e40c8b914bb5ebcde5fd236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMS5NWY%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T074827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDTAwG7SFLUXdRupvoJcUAVlMmqEFXul%2F5CloNY47eF9wIgT5peCBAdFFsRCuoxpH0sWmDRjzzy8AxjIKvCoI2DWjAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDDFlxgeJYoYzosyOsSrcAzDTJqlDk8uoicczS4LUjtQ4F1iwoC%2BnRc5w7E4fuyRbyxhXPyO7e2AV3HdlFPJfF0PSdF8HrWn7WORGW21K%2F61iAnh0eE2oJ1kh7vPGLThZAgh8%2Bnal9qFnxjRJGgHrFnkcR%2BdxsWzzFrYwDn6azGF7PVi0QlhAXX4BIpHedqU24rRjjkb91ecAoS6PcS9viSf%2F4Z06EogrRdYR5i8CUHzJUik2lVSoU875RqNJ9H1Yfgexyi8rEvnqJnlIoeuoBqfhNcQX7fpbpQiFFPOiYP9SOPYAhtylDpdvrJiHVf3TZk2w5LrjKuamimUMIpWr3w9zeUHD4%2BpepPfvzMpw%2FXu04ZHR%2Fv7yu47tIcC9TAEpoCZ9DO1hQd5eH1cM8tHFB5c3HLo9vIquQz94jiGl7uRdHPeQ3IJ6H9orkM%2Bszm7TkAyNN3zYwkCvAAGEbptXhgaViKDA8br2TXaEVkBrp5MUE3e%2Fr2L56ZZSyKLg2fZ5AFnCgK6TmmbB65ekzYeroQe%2BUdLY7w%2BUeI%2Fwj8IrgqZGNiE7CNgqGPeVgWJeG7WdOSrcxqaFEd25OXAjRogj%2FgaMzrdbyb0v2DxsklgRkkaOBUh6nULGjeWZMIx0k%2FOY9IBvGtyf7Wuh%2FLM1MO3Ev9QGOqUBYwSnUE5yWeYUt50aDyNIDd64rwBvRh%2B0xE6tDp7ulbllB9dUP6MBk05LRYS6zxRvGTBHngowLm9PuFGH5PPdkT2n9sdd2cqMeEsV%2BvXkn4fodMpPHyvmxHNsljjew7qQ3JaBlB43oSX4httuavU3iVN8RC5r%2FwjzkKXpe5PmZ0Sd1J%2BFN7TOro%2BFBAJoqupHaOKDjv3iI7Fl%2BTWfcrQQis%2BbDZBb&X-Amz-Signature=8e26d8a74ae1ac0e7bab54751ce81c9f0e2f85ee9c768596b57152337bcc4a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

