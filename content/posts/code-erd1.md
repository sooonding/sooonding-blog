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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA2UEB5%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T010251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDcIcXYA7J8V21RIjKviWFIrnc%2BNU2QqMhb8uw4Sq14lAiAmKSSraPSDSBtOqyMyGY%2FUcnhRWeJ7wFZvVfG3P4sSBir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMhmn17BcQipUNQO6DKtwDwINms%2BQ1iwDeoZ7g5h69cO4LmvQ5wzHSI2OF5F39k9dcLfwDueCW6PrRPJNQ03gYsk6cDE6YI0U7GzPMmXdKIU%2B6cBVy0qWbcDSxJ0fAsAhC0NZcJ3pYfDnU3RJjcm4B4cSb9XSLnetzp7RlAdHrj2oPdC9YtIYoTgZ1OzFrES8ARpei5KA09Lhxwer07e5ohvbiMI9bkgHVBrx5gsg6SoUE4sGXXniEcUoHaP7aiQdvE8SSXiLUdVgLg0lGuTwBvyJH4j3S1ypnNnUDyNV%2FeZVAY17N2bl95p%2BbGRB8VnHrjIlgpaFbLKGTiYD8lAgU7zH%2FnPHQoymjBEe1Tj4Zf4eikdLRCFOq9GXfDd2e05c2Uzkc48L5jDl3NpphxjHZXHnh9VwMyEU1sz0tuDH7nP9vT14JjqS7JMAg41KtJe82mV42mui4lpXRRiCFzHQ5hnsGZyfMZHk1%2FC1mkgWPgyCKHbCJlHpOfZ45x8avwsVEzR4Ld40bcI3niaUv0JSp8A%2BxRFTqphQgApRL3qWIeZsdYKAqIYAndZ5XW5oQ0Ur9GVxUsc2Ww5zAC2Uk1YW7gLiWhRMDSJfnxsV0Yf594i6ApQre81OCWglcXXSh3qX9F0uxYOBEc%2FGzsXowuqrPyAY6pgGI6ymCsMqBNRCJXXtHLdNaKl74kWKf12UpeQSB4gMp8GaflpYMyKGmLnI6lMqfb07ub%2BS2RICmNj90C9O1IqOdg4WTMw0hgicG7Prvq6wQZKCmYAKGS6NNyMhE%2FwmDYiduQ%2BAA9HLk4ZIGW7h%2FTfZP9CWHcaEDEi7NKaCu%2FRAmX%2B%2BpI8icbGvVrhd8HwjXECRONLqxbnRr624KmPURSQ99AsnVIGEp&X-Amz-Signature=fdd988fb8f9fb121f595faa224a1dcbed3a2a274be2c5674da9b96fc46e967fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM6U5RU%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T010251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCaLobQFSvAp%2FxUOj72W2WIgxVg1MwpHnW3JESujD0HRAIgX5LN9mGGuxqHhZdvhRpyapBaUbBF6QnbcQ%2FY3rvqVmsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJfYA6bZ%2F54F5mvr7CrcA9ERfKiESd6QqPmbFvT8YiJqL1jLiYIDonS%2BxOkA%2FoyDPSKzbpshrPVXdRluDoCv81ZPHaAhTh5uurv5nZUQsDdhCe%2FzFnxrPQoEWrTs%2B8Ui1hIRhubNEI%2F0zugMJpeNBNEIywl1Md4HsXOJLz4Bny%2F8N2RFo49DcBgHHcmmsyyma5Djm3PeXYsaoxl%2BOgtLRwIXCTW%2B0p5u7ZiYeogOr6KvPdKVz2kohnYZ0vK32UR0KWhckoA6MNmY2vHmTUGA1alUvhK%2Bziu51x84XUIbiHeZwmyjIrmViY04wSnsAuuWx6OxmFbBBQmff9wduH4mdXEreASTsqWjsfxZ8Faepda1q0tqWi5quDuM3A9Yg0MBerwDN20OL93%2Fkta4k8ncHJdRff7zpI1SO5GlYUqG0%2FkRALCiJA36RTWQAz4z1u%2B2fHVjIzfIrEbH0jRCFpSiNbnRy6Gj2Sl%2FUGDeWuOduH2DN%2BWMGCwsdeMghL1rnQAVy%2Bqy3ObHjG2mUnBLpN%2FnIFTNJEK6MsSX2BepjDFuPeK1OgQARM9y8L0WXJWHiG4ZTtHAIAVgmk%2B%2Fw%2FS%2FRWFS9HVG7I4PN41tzuqTqadUU9V6Vh645rEy79LeNyq0fCek1IXdZhpDZMdWIdP%2FMMWrz8gGOqUBv8cJ82m6HLqX7J%2Fzx466sZt70DSyaw0MXCYaC1YoqgPCQ6uUc4hkBd09oOjHVknjYIiYP3DiPAq8%2BDDPj%2Fo4Y7uUxxZ0eGcMsB5JiP6BBpyIW%2Fxf9aTZutbX%2FojaeIjYXCzTBiZptOK9VpzR3SpEOKPgs3yqb%2B9obB8sxZmEictOo0AblJR83rfgVcLe%2FzOsI8bEekhSaMEpHSCQEwUCJkK4t23M&X-Amz-Signature=86beee43a84d8339b2e9f0e76c7ebd4fee30c2c630f9aeb37ebe53dfcc7f2e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM6U5RU%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T010251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCaLobQFSvAp%2FxUOj72W2WIgxVg1MwpHnW3JESujD0HRAIgX5LN9mGGuxqHhZdvhRpyapBaUbBF6QnbcQ%2FY3rvqVmsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJfYA6bZ%2F54F5mvr7CrcA9ERfKiESd6QqPmbFvT8YiJqL1jLiYIDonS%2BxOkA%2FoyDPSKzbpshrPVXdRluDoCv81ZPHaAhTh5uurv5nZUQsDdhCe%2FzFnxrPQoEWrTs%2B8Ui1hIRhubNEI%2F0zugMJpeNBNEIywl1Md4HsXOJLz4Bny%2F8N2RFo49DcBgHHcmmsyyma5Djm3PeXYsaoxl%2BOgtLRwIXCTW%2B0p5u7ZiYeogOr6KvPdKVz2kohnYZ0vK32UR0KWhckoA6MNmY2vHmTUGA1alUvhK%2Bziu51x84XUIbiHeZwmyjIrmViY04wSnsAuuWx6OxmFbBBQmff9wduH4mdXEreASTsqWjsfxZ8Faepda1q0tqWi5quDuM3A9Yg0MBerwDN20OL93%2Fkta4k8ncHJdRff7zpI1SO5GlYUqG0%2FkRALCiJA36RTWQAz4z1u%2B2fHVjIzfIrEbH0jRCFpSiNbnRy6Gj2Sl%2FUGDeWuOduH2DN%2BWMGCwsdeMghL1rnQAVy%2Bqy3ObHjG2mUnBLpN%2FnIFTNJEK6MsSX2BepjDFuPeK1OgQARM9y8L0WXJWHiG4ZTtHAIAVgmk%2B%2Fw%2FS%2FRWFS9HVG7I4PN41tzuqTqadUU9V6Vh645rEy79LeNyq0fCek1IXdZhpDZMdWIdP%2FMMWrz8gGOqUBv8cJ82m6HLqX7J%2Fzx466sZt70DSyaw0MXCYaC1YoqgPCQ6uUc4hkBd09oOjHVknjYIiYP3DiPAq8%2BDDPj%2Fo4Y7uUxxZ0eGcMsB5JiP6BBpyIW%2Fxf9aTZutbX%2FojaeIjYXCzTBiZptOK9VpzR3SpEOKPgs3yqb%2B9obB8sxZmEictOo0AblJR83rfgVcLe%2FzOsI8bEekhSaMEpHSCQEwUCJkK4t23M&X-Amz-Signature=0a56b4aa720019a0d98c54f778acccc552dcc21582c8b753a471cbe3cf269172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM6U5RU%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T010251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCaLobQFSvAp%2FxUOj72W2WIgxVg1MwpHnW3JESujD0HRAIgX5LN9mGGuxqHhZdvhRpyapBaUbBF6QnbcQ%2FY3rvqVmsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJfYA6bZ%2F54F5mvr7CrcA9ERfKiESd6QqPmbFvT8YiJqL1jLiYIDonS%2BxOkA%2FoyDPSKzbpshrPVXdRluDoCv81ZPHaAhTh5uurv5nZUQsDdhCe%2FzFnxrPQoEWrTs%2B8Ui1hIRhubNEI%2F0zugMJpeNBNEIywl1Md4HsXOJLz4Bny%2F8N2RFo49DcBgHHcmmsyyma5Djm3PeXYsaoxl%2BOgtLRwIXCTW%2B0p5u7ZiYeogOr6KvPdKVz2kohnYZ0vK32UR0KWhckoA6MNmY2vHmTUGA1alUvhK%2Bziu51x84XUIbiHeZwmyjIrmViY04wSnsAuuWx6OxmFbBBQmff9wduH4mdXEreASTsqWjsfxZ8Faepda1q0tqWi5quDuM3A9Yg0MBerwDN20OL93%2Fkta4k8ncHJdRff7zpI1SO5GlYUqG0%2FkRALCiJA36RTWQAz4z1u%2B2fHVjIzfIrEbH0jRCFpSiNbnRy6Gj2Sl%2FUGDeWuOduH2DN%2BWMGCwsdeMghL1rnQAVy%2Bqy3ObHjG2mUnBLpN%2FnIFTNJEK6MsSX2BepjDFuPeK1OgQARM9y8L0WXJWHiG4ZTtHAIAVgmk%2B%2Fw%2FS%2FRWFS9HVG7I4PN41tzuqTqadUU9V6Vh645rEy79LeNyq0fCek1IXdZhpDZMdWIdP%2FMMWrz8gGOqUBv8cJ82m6HLqX7J%2Fzx466sZt70DSyaw0MXCYaC1YoqgPCQ6uUc4hkBd09oOjHVknjYIiYP3DiPAq8%2BDDPj%2Fo4Y7uUxxZ0eGcMsB5JiP6BBpyIW%2Fxf9aTZutbX%2FojaeIjYXCzTBiZptOK9VpzR3SpEOKPgs3yqb%2B9obB8sxZmEictOo0AblJR83rfgVcLe%2FzOsI8bEekhSaMEpHSCQEwUCJkK4t23M&X-Amz-Signature=b33fe02b2f5e7c54f4c0f6341a276f442915914ee56eb2771ef0df2c3a4055c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM6U5RU%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T010251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCaLobQFSvAp%2FxUOj72W2WIgxVg1MwpHnW3JESujD0HRAIgX5LN9mGGuxqHhZdvhRpyapBaUbBF6QnbcQ%2FY3rvqVmsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJfYA6bZ%2F54F5mvr7CrcA9ERfKiESd6QqPmbFvT8YiJqL1jLiYIDonS%2BxOkA%2FoyDPSKzbpshrPVXdRluDoCv81ZPHaAhTh5uurv5nZUQsDdhCe%2FzFnxrPQoEWrTs%2B8Ui1hIRhubNEI%2F0zugMJpeNBNEIywl1Md4HsXOJLz4Bny%2F8N2RFo49DcBgHHcmmsyyma5Djm3PeXYsaoxl%2BOgtLRwIXCTW%2B0p5u7ZiYeogOr6KvPdKVz2kohnYZ0vK32UR0KWhckoA6MNmY2vHmTUGA1alUvhK%2Bziu51x84XUIbiHeZwmyjIrmViY04wSnsAuuWx6OxmFbBBQmff9wduH4mdXEreASTsqWjsfxZ8Faepda1q0tqWi5quDuM3A9Yg0MBerwDN20OL93%2Fkta4k8ncHJdRff7zpI1SO5GlYUqG0%2FkRALCiJA36RTWQAz4z1u%2B2fHVjIzfIrEbH0jRCFpSiNbnRy6Gj2Sl%2FUGDeWuOduH2DN%2BWMGCwsdeMghL1rnQAVy%2Bqy3ObHjG2mUnBLpN%2FnIFTNJEK6MsSX2BepjDFuPeK1OgQARM9y8L0WXJWHiG4ZTtHAIAVgmk%2B%2Fw%2FS%2FRWFS9HVG7I4PN41tzuqTqadUU9V6Vh645rEy79LeNyq0fCek1IXdZhpDZMdWIdP%2FMMWrz8gGOqUBv8cJ82m6HLqX7J%2Fzx466sZt70DSyaw0MXCYaC1YoqgPCQ6uUc4hkBd09oOjHVknjYIiYP3DiPAq8%2BDDPj%2Fo4Y7uUxxZ0eGcMsB5JiP6BBpyIW%2Fxf9aTZutbX%2FojaeIjYXCzTBiZptOK9VpzR3SpEOKPgs3yqb%2B9obB8sxZmEictOo0AblJR83rfgVcLe%2FzOsI8bEekhSaMEpHSCQEwUCJkK4t23M&X-Amz-Signature=6da755af126603ca23a6a226086e1da25345be57dc0764ce55f17edfe4690bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PM6U5RU%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T010251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCaLobQFSvAp%2FxUOj72W2WIgxVg1MwpHnW3JESujD0HRAIgX5LN9mGGuxqHhZdvhRpyapBaUbBF6QnbcQ%2FY3rvqVmsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJfYA6bZ%2F54F5mvr7CrcA9ERfKiESd6QqPmbFvT8YiJqL1jLiYIDonS%2BxOkA%2FoyDPSKzbpshrPVXdRluDoCv81ZPHaAhTh5uurv5nZUQsDdhCe%2FzFnxrPQoEWrTs%2B8Ui1hIRhubNEI%2F0zugMJpeNBNEIywl1Md4HsXOJLz4Bny%2F8N2RFo49DcBgHHcmmsyyma5Djm3PeXYsaoxl%2BOgtLRwIXCTW%2B0p5u7ZiYeogOr6KvPdKVz2kohnYZ0vK32UR0KWhckoA6MNmY2vHmTUGA1alUvhK%2Bziu51x84XUIbiHeZwmyjIrmViY04wSnsAuuWx6OxmFbBBQmff9wduH4mdXEreASTsqWjsfxZ8Faepda1q0tqWi5quDuM3A9Yg0MBerwDN20OL93%2Fkta4k8ncHJdRff7zpI1SO5GlYUqG0%2FkRALCiJA36RTWQAz4z1u%2B2fHVjIzfIrEbH0jRCFpSiNbnRy6Gj2Sl%2FUGDeWuOduH2DN%2BWMGCwsdeMghL1rnQAVy%2Bqy3ObHjG2mUnBLpN%2FnIFTNJEK6MsSX2BepjDFuPeK1OgQARM9y8L0WXJWHiG4ZTtHAIAVgmk%2B%2Fw%2FS%2FRWFS9HVG7I4PN41tzuqTqadUU9V6Vh645rEy79LeNyq0fCek1IXdZhpDZMdWIdP%2FMMWrz8gGOqUBv8cJ82m6HLqX7J%2Fzx466sZt70DSyaw0MXCYaC1YoqgPCQ6uUc4hkBd09oOjHVknjYIiYP3DiPAq8%2BDDPj%2Fo4Y7uUxxZ0eGcMsB5JiP6BBpyIW%2Fxf9aTZutbX%2FojaeIjYXCzTBiZptOK9VpzR3SpEOKPgs3yqb%2B9obB8sxZmEictOo0AblJR83rfgVcLe%2FzOsI8bEekhSaMEpHSCQEwUCJkK4t23M&X-Amz-Signature=406e3b86d855182f1b857d93b749dedf7d60443085bea7d7244aa981bd6c99b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SA2UEB5%2F20251112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251112T010251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDcIcXYA7J8V21RIjKviWFIrnc%2BNU2QqMhb8uw4Sq14lAiAmKSSraPSDSBtOqyMyGY%2FUcnhRWeJ7wFZvVfG3P4sSBir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMhmn17BcQipUNQO6DKtwDwINms%2BQ1iwDeoZ7g5h69cO4LmvQ5wzHSI2OF5F39k9dcLfwDueCW6PrRPJNQ03gYsk6cDE6YI0U7GzPMmXdKIU%2B6cBVy0qWbcDSxJ0fAsAhC0NZcJ3pYfDnU3RJjcm4B4cSb9XSLnetzp7RlAdHrj2oPdC9YtIYoTgZ1OzFrES8ARpei5KA09Lhxwer07e5ohvbiMI9bkgHVBrx5gsg6SoUE4sGXXniEcUoHaP7aiQdvE8SSXiLUdVgLg0lGuTwBvyJH4j3S1ypnNnUDyNV%2FeZVAY17N2bl95p%2BbGRB8VnHrjIlgpaFbLKGTiYD8lAgU7zH%2FnPHQoymjBEe1Tj4Zf4eikdLRCFOq9GXfDd2e05c2Uzkc48L5jDl3NpphxjHZXHnh9VwMyEU1sz0tuDH7nP9vT14JjqS7JMAg41KtJe82mV42mui4lpXRRiCFzHQ5hnsGZyfMZHk1%2FC1mkgWPgyCKHbCJlHpOfZ45x8avwsVEzR4Ld40bcI3niaUv0JSp8A%2BxRFTqphQgApRL3qWIeZsdYKAqIYAndZ5XW5oQ0Ur9GVxUsc2Ww5zAC2Uk1YW7gLiWhRMDSJfnxsV0Yf594i6ApQre81OCWglcXXSh3qX9F0uxYOBEc%2FGzsXowuqrPyAY6pgGI6ymCsMqBNRCJXXtHLdNaKl74kWKf12UpeQSB4gMp8GaflpYMyKGmLnI6lMqfb07ub%2BS2RICmNj90C9O1IqOdg4WTMw0hgicG7Prvq6wQZKCmYAKGS6NNyMhE%2FwmDYiduQ%2BAA9HLk4ZIGW7h%2FTfZP9CWHcaEDEi7NKaCu%2FRAmX%2B%2BpI8icbGvVrhd8HwjXECRONLqxbnRr624KmPURSQ99AsnVIGEp&X-Amz-Signature=a39d334a56b5276f7d906f93986f1fc6a487d13efc892f545730794682ee7572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

