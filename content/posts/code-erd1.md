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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOG3OQCG%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd3oc5MJP7QzEfNtyN7ODKfS0ljScQU1L0Sxc4QJPmVAIhAK2IfeKjwbxruLN3xh7R1FuMmFd8w%2FqypVFeMBtdrz78KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4DXqzVOLhH70r5j0q3APMo1W4qlEbfbU7ELqqgJbPplcyiAeOeLTr1gD8zSIMjZmexQPbu%2BP33pPKP%2BreAzJjHVZiLVhehiyCEXhOp8uqqCP3%2FgTNFZmsw1buW%2BarVjlHSp6bZe%2BrwIYWdgq%2FK3uY1UeWEdJEW1LvqC3F%2FL4jSmmY7MkcJMYAC67TIY%2BlV7rv6Jh2woTDS37MIz%2B433c2mvusvdch8AJe4VvNgzSv530humoFwfpfXEegRAfJcNEXvLEKKI7nVPfltdFr4bEGSNLKVr20GoqsuRnu1NsNIKEMx%2BDUyqQ51tqsCP7gL4HK4VbTwu%2BGuLMiEQSyW9vLUTZgmvgrOlj3UFX97nXlaQ18iUrcdkpIpGEaPZJwIzKBirIIZ0CbtuVoxHEmwMsAaHJAWmpXj4sskrnNE2eSXzAShbfJHZ3PrTvDiXgNe3os%2B%2BgqWpUSE1SUa1GcDMc2M9UKPFcKkFW7LdH8%2BUxfx2TWq1K38N%2BmGCE%2BSNctO697y%2FPRZnRorjrypZsnT3Z%2BHhJxPJzVjs1UUnYQGB268rlhIWWmGMHw1iysyz27lp%2BnawabwLrczHAyBJiHlcqWJ6odPN98QhSbIoKPpaJhHoBqs%2BxmNE9omaIZ6uanWpWJoa15%2BznMgZ6qvjDDr4bLBjqkAaalISHGsmDz18jkNz55dy6OvarQPTT%2FSvCEChcLWmrYm%2Fug4P2f1hexbYCyPQ8YDNK1IkMgY2IxtZHZtOcnSRMvJGgymaRqPKo8cbVp46y2I7JJK%2FDKEFpptAmfd3ZtRiYT%2BVBMuIKPVOFYgr7tNPlcTpaaQbT%2FBoVqomOsMKkvGd5CS1YE%2B3kjC2GJGmojoh72xgZX3DfBGiXJDg68%2BLO1fHTi&X-Amz-Signature=44cab638917f81241f50efee1922eaa49229974f943fd8b4d779fc870860b0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WO4NUG%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKDEewsXH9eUwkgTGFgRpoohrvPIE2ra5%2B3By%2B6nBSpAiEA8Jo2Uke%2FeUK1gkUMpLvJGWEo%2BjfPbriCDSo7mIpvJmEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzJU6HXuoPhUEGD7CrcA%2Fo4gVFTMWBzF2%2F1g7O9M8VlJ%2BpL0%2BfzdFY9vTN%2BFfq%2FDUpFg4%2B19yx9Zkgo6wfTJZ6BWy0MPQhE26niCcnCAFlOPlM55yLd3MCxY7uMoBmePkU7Atu%2FkMSiptz0VpKwkZ6LF62zte3AsmB%2BA1ozFfLSiPtVkIZ7LQf6qN6Q3kQ5EQY41Ax5oiTnCRIcnkRpFeswcdBcRO2foKTADdFkeu%2BUOjzj9oLBzXl4X5wAgv2QbvfSfOUXSsOkantqXUf7U5GnfoWXtbLip9r3JvEaBmD%2Fu0CdQcyc%2BN%2F5xxkhkTIFz%2F1VYpMYGhQ2G10qh%2F4mEwNwhtOqB5ryV4hxDWaJNbv8hovHIKnIEd0niWYeuapKhhb2CgBDG%2Btu8kIAkzbononBviUH1ervt7JioHucjS6d3o4zXajkBxf0NMPkBAHhQPqOAhgu%2B4AJD%2FzhY35MsgMkBCwlS9yEej4McisKM7EKtsdo9ZFYlKUQwqyO0YwNIv7V438OB%2FvZRB5KO7pEZtbhpLMKBX8UBNboSxFc0BdH5l5oqSRhYSXeNg%2FkvHJLBEdwpWHdN9a7tj2VMfNsDOanS7pKQaeX3529TTuj34wbCp7z7g4TnRrRm%2Fm7w11cwXQdWhZQBqNWHa03MI%2BvhssGOqUB%2BMgnDSadlYmdOk7i3iNp60TK3vl0sB8BLT%2BBjgvXW7pxJ2z76kGuXxX14aSkNoExBe%2B3oATUN5hzmocnU4zDz0UPS%2BuSsKbtgeWr4h%2Biurf6EknRtS1sbh6mznrvOmxugyhacpElqJLR5Uwhl%2Bm%2FqKuW5EI%2B3S9UgMoT67fuI3jPBhjAzSD6VG52ydg%2Fw2Zm4YgEQC%2BFIfoXl2TiWuob14erzfgI&X-Amz-Signature=5bcfd58d607c89d60e630766591789fbc601932c60a3d0ab1d605910dcd38ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WO4NUG%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKDEewsXH9eUwkgTGFgRpoohrvPIE2ra5%2B3By%2B6nBSpAiEA8Jo2Uke%2FeUK1gkUMpLvJGWEo%2BjfPbriCDSo7mIpvJmEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzJU6HXuoPhUEGD7CrcA%2Fo4gVFTMWBzF2%2F1g7O9M8VlJ%2BpL0%2BfzdFY9vTN%2BFfq%2FDUpFg4%2B19yx9Zkgo6wfTJZ6BWy0MPQhE26niCcnCAFlOPlM55yLd3MCxY7uMoBmePkU7Atu%2FkMSiptz0VpKwkZ6LF62zte3AsmB%2BA1ozFfLSiPtVkIZ7LQf6qN6Q3kQ5EQY41Ax5oiTnCRIcnkRpFeswcdBcRO2foKTADdFkeu%2BUOjzj9oLBzXl4X5wAgv2QbvfSfOUXSsOkantqXUf7U5GnfoWXtbLip9r3JvEaBmD%2Fu0CdQcyc%2BN%2F5xxkhkTIFz%2F1VYpMYGhQ2G10qh%2F4mEwNwhtOqB5ryV4hxDWaJNbv8hovHIKnIEd0niWYeuapKhhb2CgBDG%2Btu8kIAkzbononBviUH1ervt7JioHucjS6d3o4zXajkBxf0NMPkBAHhQPqOAhgu%2B4AJD%2FzhY35MsgMkBCwlS9yEej4McisKM7EKtsdo9ZFYlKUQwqyO0YwNIv7V438OB%2FvZRB5KO7pEZtbhpLMKBX8UBNboSxFc0BdH5l5oqSRhYSXeNg%2FkvHJLBEdwpWHdN9a7tj2VMfNsDOanS7pKQaeX3529TTuj34wbCp7z7g4TnRrRm%2Fm7w11cwXQdWhZQBqNWHa03MI%2BvhssGOqUB%2BMgnDSadlYmdOk7i3iNp60TK3vl0sB8BLT%2BBjgvXW7pxJ2z76kGuXxX14aSkNoExBe%2B3oATUN5hzmocnU4zDz0UPS%2BuSsKbtgeWr4h%2Biurf6EknRtS1sbh6mznrvOmxugyhacpElqJLR5Uwhl%2Bm%2FqKuW5EI%2B3S9UgMoT67fuI3jPBhjAzSD6VG52ydg%2Fw2Zm4YgEQC%2BFIfoXl2TiWuob14erzfgI&X-Amz-Signature=cdd41b664dfb5441a5a8b098a7363539ffe0e58f6f08693c18937716654e959a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WO4NUG%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKDEewsXH9eUwkgTGFgRpoohrvPIE2ra5%2B3By%2B6nBSpAiEA8Jo2Uke%2FeUK1gkUMpLvJGWEo%2BjfPbriCDSo7mIpvJmEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzJU6HXuoPhUEGD7CrcA%2Fo4gVFTMWBzF2%2F1g7O9M8VlJ%2BpL0%2BfzdFY9vTN%2BFfq%2FDUpFg4%2B19yx9Zkgo6wfTJZ6BWy0MPQhE26niCcnCAFlOPlM55yLd3MCxY7uMoBmePkU7Atu%2FkMSiptz0VpKwkZ6LF62zte3AsmB%2BA1ozFfLSiPtVkIZ7LQf6qN6Q3kQ5EQY41Ax5oiTnCRIcnkRpFeswcdBcRO2foKTADdFkeu%2BUOjzj9oLBzXl4X5wAgv2QbvfSfOUXSsOkantqXUf7U5GnfoWXtbLip9r3JvEaBmD%2Fu0CdQcyc%2BN%2F5xxkhkTIFz%2F1VYpMYGhQ2G10qh%2F4mEwNwhtOqB5ryV4hxDWaJNbv8hovHIKnIEd0niWYeuapKhhb2CgBDG%2Btu8kIAkzbononBviUH1ervt7JioHucjS6d3o4zXajkBxf0NMPkBAHhQPqOAhgu%2B4AJD%2FzhY35MsgMkBCwlS9yEej4McisKM7EKtsdo9ZFYlKUQwqyO0YwNIv7V438OB%2FvZRB5KO7pEZtbhpLMKBX8UBNboSxFc0BdH5l5oqSRhYSXeNg%2FkvHJLBEdwpWHdN9a7tj2VMfNsDOanS7pKQaeX3529TTuj34wbCp7z7g4TnRrRm%2Fm7w11cwXQdWhZQBqNWHa03MI%2BvhssGOqUB%2BMgnDSadlYmdOk7i3iNp60TK3vl0sB8BLT%2BBjgvXW7pxJ2z76kGuXxX14aSkNoExBe%2B3oATUN5hzmocnU4zDz0UPS%2BuSsKbtgeWr4h%2Biurf6EknRtS1sbh6mznrvOmxugyhacpElqJLR5Uwhl%2Bm%2FqKuW5EI%2B3S9UgMoT67fuI3jPBhjAzSD6VG52ydg%2Fw2Zm4YgEQC%2BFIfoXl2TiWuob14erzfgI&X-Amz-Signature=586c9573d1c1ed724b259bade68462141273869a321658623375b036a170bde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WO4NUG%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKDEewsXH9eUwkgTGFgRpoohrvPIE2ra5%2B3By%2B6nBSpAiEA8Jo2Uke%2FeUK1gkUMpLvJGWEo%2BjfPbriCDSo7mIpvJmEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzJU6HXuoPhUEGD7CrcA%2Fo4gVFTMWBzF2%2F1g7O9M8VlJ%2BpL0%2BfzdFY9vTN%2BFfq%2FDUpFg4%2B19yx9Zkgo6wfTJZ6BWy0MPQhE26niCcnCAFlOPlM55yLd3MCxY7uMoBmePkU7Atu%2FkMSiptz0VpKwkZ6LF62zte3AsmB%2BA1ozFfLSiPtVkIZ7LQf6qN6Q3kQ5EQY41Ax5oiTnCRIcnkRpFeswcdBcRO2foKTADdFkeu%2BUOjzj9oLBzXl4X5wAgv2QbvfSfOUXSsOkantqXUf7U5GnfoWXtbLip9r3JvEaBmD%2Fu0CdQcyc%2BN%2F5xxkhkTIFz%2F1VYpMYGhQ2G10qh%2F4mEwNwhtOqB5ryV4hxDWaJNbv8hovHIKnIEd0niWYeuapKhhb2CgBDG%2Btu8kIAkzbononBviUH1ervt7JioHucjS6d3o4zXajkBxf0NMPkBAHhQPqOAhgu%2B4AJD%2FzhY35MsgMkBCwlS9yEej4McisKM7EKtsdo9ZFYlKUQwqyO0YwNIv7V438OB%2FvZRB5KO7pEZtbhpLMKBX8UBNboSxFc0BdH5l5oqSRhYSXeNg%2FkvHJLBEdwpWHdN9a7tj2VMfNsDOanS7pKQaeX3529TTuj34wbCp7z7g4TnRrRm%2Fm7w11cwXQdWhZQBqNWHa03MI%2BvhssGOqUB%2BMgnDSadlYmdOk7i3iNp60TK3vl0sB8BLT%2BBjgvXW7pxJ2z76kGuXxX14aSkNoExBe%2B3oATUN5hzmocnU4zDz0UPS%2BuSsKbtgeWr4h%2Biurf6EknRtS1sbh6mznrvOmxugyhacpElqJLR5Uwhl%2Bm%2FqKuW5EI%2B3S9UgMoT67fuI3jPBhjAzSD6VG52ydg%2Fw2Zm4YgEQC%2BFIfoXl2TiWuob14erzfgI&X-Amz-Signature=4f63e83bf3f0af3fa48996537acb1493737abd952fca7734aa8b9c35eb67cfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WO4NUG%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKDEewsXH9eUwkgTGFgRpoohrvPIE2ra5%2B3By%2B6nBSpAiEA8Jo2Uke%2FeUK1gkUMpLvJGWEo%2BjfPbriCDSo7mIpvJmEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzJU6HXuoPhUEGD7CrcA%2Fo4gVFTMWBzF2%2F1g7O9M8VlJ%2BpL0%2BfzdFY9vTN%2BFfq%2FDUpFg4%2B19yx9Zkgo6wfTJZ6BWy0MPQhE26niCcnCAFlOPlM55yLd3MCxY7uMoBmePkU7Atu%2FkMSiptz0VpKwkZ6LF62zte3AsmB%2BA1ozFfLSiPtVkIZ7LQf6qN6Q3kQ5EQY41Ax5oiTnCRIcnkRpFeswcdBcRO2foKTADdFkeu%2BUOjzj9oLBzXl4X5wAgv2QbvfSfOUXSsOkantqXUf7U5GnfoWXtbLip9r3JvEaBmD%2Fu0CdQcyc%2BN%2F5xxkhkTIFz%2F1VYpMYGhQ2G10qh%2F4mEwNwhtOqB5ryV4hxDWaJNbv8hovHIKnIEd0niWYeuapKhhb2CgBDG%2Btu8kIAkzbononBviUH1ervt7JioHucjS6d3o4zXajkBxf0NMPkBAHhQPqOAhgu%2B4AJD%2FzhY35MsgMkBCwlS9yEej4McisKM7EKtsdo9ZFYlKUQwqyO0YwNIv7V438OB%2FvZRB5KO7pEZtbhpLMKBX8UBNboSxFc0BdH5l5oqSRhYSXeNg%2FkvHJLBEdwpWHdN9a7tj2VMfNsDOanS7pKQaeX3529TTuj34wbCp7z7g4TnRrRm%2Fm7w11cwXQdWhZQBqNWHa03MI%2BvhssGOqUB%2BMgnDSadlYmdOk7i3iNp60TK3vl0sB8BLT%2BBjgvXW7pxJ2z76kGuXxX14aSkNoExBe%2B3oATUN5hzmocnU4zDz0UPS%2BuSsKbtgeWr4h%2Biurf6EknRtS1sbh6mznrvOmxugyhacpElqJLR5Uwhl%2Bm%2FqKuW5EI%2B3S9UgMoT67fuI3jPBhjAzSD6VG52ydg%2Fw2Zm4YgEQC%2BFIfoXl2TiWuob14erzfgI&X-Amz-Signature=0f6dde2e1b6a9862c260a46049047766207a5cb9e6e1514259da7d3c1547c0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOG3OQCG%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T010626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd3oc5MJP7QzEfNtyN7ODKfS0ljScQU1L0Sxc4QJPmVAIhAK2IfeKjwbxruLN3xh7R1FuMmFd8w%2FqypVFeMBtdrz78KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4DXqzVOLhH70r5j0q3APMo1W4qlEbfbU7ELqqgJbPplcyiAeOeLTr1gD8zSIMjZmexQPbu%2BP33pPKP%2BreAzJjHVZiLVhehiyCEXhOp8uqqCP3%2FgTNFZmsw1buW%2BarVjlHSp6bZe%2BrwIYWdgq%2FK3uY1UeWEdJEW1LvqC3F%2FL4jSmmY7MkcJMYAC67TIY%2BlV7rv6Jh2woTDS37MIz%2B433c2mvusvdch8AJe4VvNgzSv530humoFwfpfXEegRAfJcNEXvLEKKI7nVPfltdFr4bEGSNLKVr20GoqsuRnu1NsNIKEMx%2BDUyqQ51tqsCP7gL4HK4VbTwu%2BGuLMiEQSyW9vLUTZgmvgrOlj3UFX97nXlaQ18iUrcdkpIpGEaPZJwIzKBirIIZ0CbtuVoxHEmwMsAaHJAWmpXj4sskrnNE2eSXzAShbfJHZ3PrTvDiXgNe3os%2B%2BgqWpUSE1SUa1GcDMc2M9UKPFcKkFW7LdH8%2BUxfx2TWq1K38N%2BmGCE%2BSNctO697y%2FPRZnRorjrypZsnT3Z%2BHhJxPJzVjs1UUnYQGB268rlhIWWmGMHw1iysyz27lp%2BnawabwLrczHAyBJiHlcqWJ6odPN98QhSbIoKPpaJhHoBqs%2BxmNE9omaIZ6uanWpWJoa15%2BznMgZ6qvjDDr4bLBjqkAaalISHGsmDz18jkNz55dy6OvarQPTT%2FSvCEChcLWmrYm%2Fug4P2f1hexbYCyPQ8YDNK1IkMgY2IxtZHZtOcnSRMvJGgymaRqPKo8cbVp46y2I7JJK%2FDKEFpptAmfd3ZtRiYT%2BVBMuIKPVOFYgr7tNPlcTpaaQbT%2FBoVqomOsMKkvGd5CS1YE%2B3kjC2GJGmojoh72xgZX3DfBGiXJDg68%2BLO1fHTi&X-Amz-Signature=a55a9109aff23beb3a754c95e25bc2ef8c3c9e9495ef34d6cfd101d46102e7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

