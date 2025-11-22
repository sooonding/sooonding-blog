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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZQA7KF%2F20251122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251122T005953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDIlADbaL5mNfIILVCJF3qQ%2FmqW2qjTttGg1VDlbDOnkwIgKZ5w%2Bb58GyETl2OSGqxmjRIm0JeYLxxYzzzaweNz5wYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPy6hwPeo%2FBM13jNISrcA02wvK%2FN5qHovmnNC1IUsQbY9COkw%2FtLgLe40Lv7s%2FMdxz5EGjww7UdFX8DemmqinQK%2F2LrEIyvBk1zqapvBitZ63s3ysAfdDXpbN9nwzTr2AFk4Dh0AgJFmFJzkum4%2FpksXHDH48AQWYIFqjAQMEa6XZvdxX50egt2X7rB9tI5JqETRIg9AjljnzJna5DN5JtzwcsDbKfxqmvL2J3aT7sfSGvxqOhYdS0h5Jn%2BK2yGTdBEf2ltgCmjNwfPhr2ueutdMM3ey3ZdUMwYB2GEefg20F7CBbpTpFcmS7l3vjYLlo04Jwt8wXLXhueoQr6pVTZDUbkTuH1sMvxRr97vBbK9iIaMphUQZvQTB1VsN%2BUBvsLQ%2FkPkYvgoLicfrfppI%2F%2BgyvvHh3fVMoWO0zwBf%2FlllA55dmLlVG7OF7cGQ9NWDN0oLlg81NJXlYXeiYDD0AxX9kNLDiLmWTjQ8nB8YACWPsQq9cLSNzf6b4zE9A%2FSYLOUNBhPF4MvpD1%2Be3seQ3D35DhXyYHKzpU9XM%2BvDOUwNW3WoG3ZKiA4XRBPs0K73wt7LnlDITsMlly1f69k9QCByjEXIO61h0wxITwQO7uNIRvoMA90akMShMSKQCHwITna%2BFXTt2zOqNytNML%2BNhMkGOqUBl2lUQpCnRoO5TfT5d7TiGyLFT03DvFXf%2FDiXdaRf6JRkMJsOfcs7g0224%2BQcPo2FYm1fKvGqGtlsdaZn8AQNc9awQuTkPsKVqQ0WdmhW3xeEwRp%2FoQnhJIZidpARB2xCH42O7boOUGs7Ju038mYLtMpHHAfG6WcvMOBTzoFwWs%2FW2IjJ2juN09ST7EugvY%2FSC3VtIFlUarm28mxYAuqM9ioUGKXl&X-Amz-Signature=66686a16e67ee3ea31ff155d2fb8f9efca8e21411cd27cbc0539541d961f3a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWN5OP7%2F20251122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251122T005953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDAY%2BdITRSaO47XCmVnyFnSjISo3z2v2%2BPicesH8GbDHAiAFTfgRuDx%2FbLI3M6JTd%2BXQ1IiR%2Fpv7IhD5QdfuYKB95Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbjUtBhv7CHayxE42KtwDtuSSXRJDwx3YhpwFWNlrjA6aHWMUl6ZVcZ4Y6iXsnNugQDLs6kOVXkBdgAeAfD04QtUW3fAES2klX2wceBxziNrFCYkN%2BnzagI7cjAk5x0Vlfw5rLwuLzF%2BbrnLa0%2BWCX54MSYngAsh9Pp0rOX%2FTORaVlOkO4Vo2a5P0bm8Cy8rj3nuT%2BQ1AiXx9g9wqkPDe7nFqlyhVLxaM3mYpVpn2ZsazGpYkA14K9rVWLJFKfPtsBTreg%2BeyDpc%2FO94DiE%2BHCzcaVOKOq72W1x6q7dN4%2F842Gz5i0YddK%2Bcc4IEM%2FD%2BXuE2tiZHRhTDyYiWdBXbQ8rhyt5ULhR34kjq0bA2HgNN1xG4QgEwQ3%2BFeuT5nA0PPTW0Kbl95V4QpmLOjOnj71Zdqn28RolEV1MPp%2FpGyqmnMJt4zCMiGL4gczbifjMJiSutqz7E7LKogPdvlCHabeCYGfGrgNKXAVmDYPnsCrfTU7bWt8jygnBy3A2WDdlPdlKDbRbKMm7c%2B932gkrW%2BY5FOJpJNgDiR0KtLrQFkDJTZA9C1Al%2FElUuZy03dDTG3LCxsET8982ybcXizuKzi3C66uKFdOh3yPO4zdYcRigxy0Z8A35YJhII2JUK%2FRVs%2FJrbf1Eq2jK69hRcwpo2EyQY6pgGEpMR1oelLXTOIEKKGmhPy6%2F0S%2BnUIm%2BhuA9VkqgME6%2BmGsKUgNXFtx%2FqZQy25XMh%2BtwJ8JXARPx5MQJgtlfBN06lieJhEDRq4cIwCwJ54Tsev4%2FFIhAr8U%2B4aJG%2FItJpq2sokTlz9BjQRYvTgnR2tG3rHeCEdU1W0C7S8PpGKwDj56gm%2BmDwquXbyC4ZQEtcZgHlLetVSNWMWwa%2BBfG3U4tJodjfl&X-Amz-Signature=5747078402eb234e3bfbf09f44cd846e6aac0962beaa6ea1fabd260f6bcb2fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWN5OP7%2F20251122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251122T005953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDAY%2BdITRSaO47XCmVnyFnSjISo3z2v2%2BPicesH8GbDHAiAFTfgRuDx%2FbLI3M6JTd%2BXQ1IiR%2Fpv7IhD5QdfuYKB95Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbjUtBhv7CHayxE42KtwDtuSSXRJDwx3YhpwFWNlrjA6aHWMUl6ZVcZ4Y6iXsnNugQDLs6kOVXkBdgAeAfD04QtUW3fAES2klX2wceBxziNrFCYkN%2BnzagI7cjAk5x0Vlfw5rLwuLzF%2BbrnLa0%2BWCX54MSYngAsh9Pp0rOX%2FTORaVlOkO4Vo2a5P0bm8Cy8rj3nuT%2BQ1AiXx9g9wqkPDe7nFqlyhVLxaM3mYpVpn2ZsazGpYkA14K9rVWLJFKfPtsBTreg%2BeyDpc%2FO94DiE%2BHCzcaVOKOq72W1x6q7dN4%2F842Gz5i0YddK%2Bcc4IEM%2FD%2BXuE2tiZHRhTDyYiWdBXbQ8rhyt5ULhR34kjq0bA2HgNN1xG4QgEwQ3%2BFeuT5nA0PPTW0Kbl95V4QpmLOjOnj71Zdqn28RolEV1MPp%2FpGyqmnMJt4zCMiGL4gczbifjMJiSutqz7E7LKogPdvlCHabeCYGfGrgNKXAVmDYPnsCrfTU7bWt8jygnBy3A2WDdlPdlKDbRbKMm7c%2B932gkrW%2BY5FOJpJNgDiR0KtLrQFkDJTZA9C1Al%2FElUuZy03dDTG3LCxsET8982ybcXizuKzi3C66uKFdOh3yPO4zdYcRigxy0Z8A35YJhII2JUK%2FRVs%2FJrbf1Eq2jK69hRcwpo2EyQY6pgGEpMR1oelLXTOIEKKGmhPy6%2F0S%2BnUIm%2BhuA9VkqgME6%2BmGsKUgNXFtx%2FqZQy25XMh%2BtwJ8JXARPx5MQJgtlfBN06lieJhEDRq4cIwCwJ54Tsev4%2FFIhAr8U%2B4aJG%2FItJpq2sokTlz9BjQRYvTgnR2tG3rHeCEdU1W0C7S8PpGKwDj56gm%2BmDwquXbyC4ZQEtcZgHlLetVSNWMWwa%2BBfG3U4tJodjfl&X-Amz-Signature=69c916cafec60e88ae1591b22b6ac693c1d3403889646117d5fffcd1f4675ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWN5OP7%2F20251122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251122T005953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDAY%2BdITRSaO47XCmVnyFnSjISo3z2v2%2BPicesH8GbDHAiAFTfgRuDx%2FbLI3M6JTd%2BXQ1IiR%2Fpv7IhD5QdfuYKB95Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbjUtBhv7CHayxE42KtwDtuSSXRJDwx3YhpwFWNlrjA6aHWMUl6ZVcZ4Y6iXsnNugQDLs6kOVXkBdgAeAfD04QtUW3fAES2klX2wceBxziNrFCYkN%2BnzagI7cjAk5x0Vlfw5rLwuLzF%2BbrnLa0%2BWCX54MSYngAsh9Pp0rOX%2FTORaVlOkO4Vo2a5P0bm8Cy8rj3nuT%2BQ1AiXx9g9wqkPDe7nFqlyhVLxaM3mYpVpn2ZsazGpYkA14K9rVWLJFKfPtsBTreg%2BeyDpc%2FO94DiE%2BHCzcaVOKOq72W1x6q7dN4%2F842Gz5i0YddK%2Bcc4IEM%2FD%2BXuE2tiZHRhTDyYiWdBXbQ8rhyt5ULhR34kjq0bA2HgNN1xG4QgEwQ3%2BFeuT5nA0PPTW0Kbl95V4QpmLOjOnj71Zdqn28RolEV1MPp%2FpGyqmnMJt4zCMiGL4gczbifjMJiSutqz7E7LKogPdvlCHabeCYGfGrgNKXAVmDYPnsCrfTU7bWt8jygnBy3A2WDdlPdlKDbRbKMm7c%2B932gkrW%2BY5FOJpJNgDiR0KtLrQFkDJTZA9C1Al%2FElUuZy03dDTG3LCxsET8982ybcXizuKzi3C66uKFdOh3yPO4zdYcRigxy0Z8A35YJhII2JUK%2FRVs%2FJrbf1Eq2jK69hRcwpo2EyQY6pgGEpMR1oelLXTOIEKKGmhPy6%2F0S%2BnUIm%2BhuA9VkqgME6%2BmGsKUgNXFtx%2FqZQy25XMh%2BtwJ8JXARPx5MQJgtlfBN06lieJhEDRq4cIwCwJ54Tsev4%2FFIhAr8U%2B4aJG%2FItJpq2sokTlz9BjQRYvTgnR2tG3rHeCEdU1W0C7S8PpGKwDj56gm%2BmDwquXbyC4ZQEtcZgHlLetVSNWMWwa%2BBfG3U4tJodjfl&X-Amz-Signature=b33e7e91c57c967a4d61f4e0d8190fbf934da90292f5f248c447dc887381025f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWN5OP7%2F20251122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251122T005953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDAY%2BdITRSaO47XCmVnyFnSjISo3z2v2%2BPicesH8GbDHAiAFTfgRuDx%2FbLI3M6JTd%2BXQ1IiR%2Fpv7IhD5QdfuYKB95Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbjUtBhv7CHayxE42KtwDtuSSXRJDwx3YhpwFWNlrjA6aHWMUl6ZVcZ4Y6iXsnNugQDLs6kOVXkBdgAeAfD04QtUW3fAES2klX2wceBxziNrFCYkN%2BnzagI7cjAk5x0Vlfw5rLwuLzF%2BbrnLa0%2BWCX54MSYngAsh9Pp0rOX%2FTORaVlOkO4Vo2a5P0bm8Cy8rj3nuT%2BQ1AiXx9g9wqkPDe7nFqlyhVLxaM3mYpVpn2ZsazGpYkA14K9rVWLJFKfPtsBTreg%2BeyDpc%2FO94DiE%2BHCzcaVOKOq72W1x6q7dN4%2F842Gz5i0YddK%2Bcc4IEM%2FD%2BXuE2tiZHRhTDyYiWdBXbQ8rhyt5ULhR34kjq0bA2HgNN1xG4QgEwQ3%2BFeuT5nA0PPTW0Kbl95V4QpmLOjOnj71Zdqn28RolEV1MPp%2FpGyqmnMJt4zCMiGL4gczbifjMJiSutqz7E7LKogPdvlCHabeCYGfGrgNKXAVmDYPnsCrfTU7bWt8jygnBy3A2WDdlPdlKDbRbKMm7c%2B932gkrW%2BY5FOJpJNgDiR0KtLrQFkDJTZA9C1Al%2FElUuZy03dDTG3LCxsET8982ybcXizuKzi3C66uKFdOh3yPO4zdYcRigxy0Z8A35YJhII2JUK%2FRVs%2FJrbf1Eq2jK69hRcwpo2EyQY6pgGEpMR1oelLXTOIEKKGmhPy6%2F0S%2BnUIm%2BhuA9VkqgME6%2BmGsKUgNXFtx%2FqZQy25XMh%2BtwJ8JXARPx5MQJgtlfBN06lieJhEDRq4cIwCwJ54Tsev4%2FFIhAr8U%2B4aJG%2FItJpq2sokTlz9BjQRYvTgnR2tG3rHeCEdU1W0C7S8PpGKwDj56gm%2BmDwquXbyC4ZQEtcZgHlLetVSNWMWwa%2BBfG3U4tJodjfl&X-Amz-Signature=24c4b27a34670ec9045f3c504f0ce88a21bd6f3c5c8a740772fcd03b7f5e6303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWN5OP7%2F20251122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251122T005953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIDAY%2BdITRSaO47XCmVnyFnSjISo3z2v2%2BPicesH8GbDHAiAFTfgRuDx%2FbLI3M6JTd%2BXQ1IiR%2Fpv7IhD5QdfuYKB95Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMbjUtBhv7CHayxE42KtwDtuSSXRJDwx3YhpwFWNlrjA6aHWMUl6ZVcZ4Y6iXsnNugQDLs6kOVXkBdgAeAfD04QtUW3fAES2klX2wceBxziNrFCYkN%2BnzagI7cjAk5x0Vlfw5rLwuLzF%2BbrnLa0%2BWCX54MSYngAsh9Pp0rOX%2FTORaVlOkO4Vo2a5P0bm8Cy8rj3nuT%2BQ1AiXx9g9wqkPDe7nFqlyhVLxaM3mYpVpn2ZsazGpYkA14K9rVWLJFKfPtsBTreg%2BeyDpc%2FO94DiE%2BHCzcaVOKOq72W1x6q7dN4%2F842Gz5i0YddK%2Bcc4IEM%2FD%2BXuE2tiZHRhTDyYiWdBXbQ8rhyt5ULhR34kjq0bA2HgNN1xG4QgEwQ3%2BFeuT5nA0PPTW0Kbl95V4QpmLOjOnj71Zdqn28RolEV1MPp%2FpGyqmnMJt4zCMiGL4gczbifjMJiSutqz7E7LKogPdvlCHabeCYGfGrgNKXAVmDYPnsCrfTU7bWt8jygnBy3A2WDdlPdlKDbRbKMm7c%2B932gkrW%2BY5FOJpJNgDiR0KtLrQFkDJTZA9C1Al%2FElUuZy03dDTG3LCxsET8982ybcXizuKzi3C66uKFdOh3yPO4zdYcRigxy0Z8A35YJhII2JUK%2FRVs%2FJrbf1Eq2jK69hRcwpo2EyQY6pgGEpMR1oelLXTOIEKKGmhPy6%2F0S%2BnUIm%2BhuA9VkqgME6%2BmGsKUgNXFtx%2FqZQy25XMh%2BtwJ8JXARPx5MQJgtlfBN06lieJhEDRq4cIwCwJ54Tsev4%2FFIhAr8U%2B4aJG%2FItJpq2sokTlz9BjQRYvTgnR2tG3rHeCEdU1W0C7S8PpGKwDj56gm%2BmDwquXbyC4ZQEtcZgHlLetVSNWMWwa%2BBfG3U4tJodjfl&X-Amz-Signature=f7c26a5ca7d0ceece78d83facb7561e078708df588635ea9a28c7634ff1548c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZQA7KF%2F20251122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251122T005953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDIlADbaL5mNfIILVCJF3qQ%2FmqW2qjTttGg1VDlbDOnkwIgKZ5w%2Bb58GyETl2OSGqxmjRIm0JeYLxxYzzzaweNz5wYq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDPy6hwPeo%2FBM13jNISrcA02wvK%2FN5qHovmnNC1IUsQbY9COkw%2FtLgLe40Lv7s%2FMdxz5EGjww7UdFX8DemmqinQK%2F2LrEIyvBk1zqapvBitZ63s3ysAfdDXpbN9nwzTr2AFk4Dh0AgJFmFJzkum4%2FpksXHDH48AQWYIFqjAQMEa6XZvdxX50egt2X7rB9tI5JqETRIg9AjljnzJna5DN5JtzwcsDbKfxqmvL2J3aT7sfSGvxqOhYdS0h5Jn%2BK2yGTdBEf2ltgCmjNwfPhr2ueutdMM3ey3ZdUMwYB2GEefg20F7CBbpTpFcmS7l3vjYLlo04Jwt8wXLXhueoQr6pVTZDUbkTuH1sMvxRr97vBbK9iIaMphUQZvQTB1VsN%2BUBvsLQ%2FkPkYvgoLicfrfppI%2F%2BgyvvHh3fVMoWO0zwBf%2FlllA55dmLlVG7OF7cGQ9NWDN0oLlg81NJXlYXeiYDD0AxX9kNLDiLmWTjQ8nB8YACWPsQq9cLSNzf6b4zE9A%2FSYLOUNBhPF4MvpD1%2Be3seQ3D35DhXyYHKzpU9XM%2BvDOUwNW3WoG3ZKiA4XRBPs0K73wt7LnlDITsMlly1f69k9QCByjEXIO61h0wxITwQO7uNIRvoMA90akMShMSKQCHwITna%2BFXTt2zOqNytNML%2BNhMkGOqUBl2lUQpCnRoO5TfT5d7TiGyLFT03DvFXf%2FDiXdaRf6JRkMJsOfcs7g0224%2BQcPo2FYm1fKvGqGtlsdaZn8AQNc9awQuTkPsKVqQ0WdmhW3xeEwRp%2FoQnhJIZidpARB2xCH42O7boOUGs7Ju038mYLtMpHHAfG6WcvMOBTzoFwWs%2FW2IjJ2juN09ST7EugvY%2FSC3VtIFlUarm28mxYAuqM9ioUGKXl&X-Amz-Signature=e56e1dc8f840a68f53b544ef572aa26ed884080301a55673e69f055c38c51b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

