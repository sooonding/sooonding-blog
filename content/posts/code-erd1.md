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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJY35ADJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T010447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIB87chJ%2Bt8a93dJOJoIiVQdWugcTVj8O8CVM9xx33t%2F4AiEApYIEH0WQCnmTZG7u7z6ANo9iSmclkZs%2F2bHei0tnfC8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFXmOyugBoA4e%2Ff7bSrcAyoQyQXSnO95Xj5JbKwMk%2BAsXMj9am3Uvc2mO41neetdB0%2F62sccGQtJBGyMeDtEAU0RaQAv4fU%2FU459kJ8mqQ8R3%2F6TvR7x4PY2o94cjjYeaRkTYLRSbpa%2Bl9du3z9veyI3YVQo%2FOaObsAKh6BmnsQtNwLfOyHI7ad%2F0WAMN3ReF%2FCHRigGuqAgSw3P%2BhgnSCOAsxwkSf7GtGedeJtJgGgNGGEBAH8%2FfWPz8CtQ7vQ2jaabBzcX%2FS%2Ft%2F6oxw3MRsOlo9WC5KTqHzyqFQ8Sm2Rnsah5jUKv98FlQ0ks0Qb4FYy66Pv%2FsCUuI5fyTq1fzmkbIpJqwL05k8Ho0Ymbe7GcH%2FElw77iv37Chg2uzrkYOUAaFNkR8OHC7bueGO85%2FjW2Ljuwrvsq4naI8eRCcsWqP9epAsmAFp94AM0ijfsQUknXZrKvJWW%2BByU6q8nYUnhGUSabnQtxq7jUB6PG%2BjSVThmVQmQr%2FoysvjoPZvq8sdQR%2F4J9bNZV4RCBfz3lKx2uo4D8VYiSNY7osQ6FD5x7EldUpACB9n0lu1d7pUyPJAw1ta6zxFdGX%2B%2FqvQfrK11Hgqc7KvT0%2Fd0lgYL7%2BxHFstgmIlZVeKWjL3mnRXPX2I%2Bx8ysKRl27CwWgbMNThlMgGOqUBMl5cOPHEjLnHeioDXABn4NHDwx2JetoVNjaXM8ay646ALM6HMHPaZ0qgIACZbABtP5oYSPO1qA%2F7YtHfGyVjHdz3LhpxF6Gb%2BvRnPzDQm6vzJFHx08r3dvM5H7F03M7NLIpsQV7wyvj1N6PDZtZiRaLxfcbDEyOo3F6ifn9JSWvpsD7YxT%2F6fnCsLTQ1dG4sSsBbMj4r%2FDRohZ%2Bql4X1CgLYDgDP&X-Amz-Signature=e708649e01f4c57935cc484709c4d6c566b8b08c6918d22f8d109d768dc1be35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4LC5XN%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T010448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEzl9WjhR9yQM0hERUkfvyAPnfcj87r0qMb9umTOYcQLAiEA30axV8krb%2FQWN7igHDqgDWAHUkaqgZSeUEpF3bEcrIsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCgz1a8N6X8%2FY73yAyrcA2KztR3u36EiN2Z9oeso6OZ6iH6PoZIYOmltZC%2FLxwNmqruS170vfGBz8QQy9DLryz%2BYKgqrXPKK6jN733b2EFwI7SWpYVYhTP0tI2spMQS2%2FNuIe%2BGderiZun32tq%2FfU561VB%2BSmzzNLhSnhOVO5Hj0wKgJbezlSa5ba8HQouzBj%2BEon9xwzzDVD%2FLtEyt%2BvnGXDk1LrWuGnCu58S3Swf1wiiXXIrw7LSO%2FTYWmAWhGKgMRbQUDVdaDLzGfSSb9zaWVftdYOM5uC77nxihiFz%2B%2FDXHyG5zJ4TC3JeO6cwzl%2BUjjQqz9X02PWr22YvrBEx60cVkEHdmgq%2FsQv7vEME2DQZljd0WFax%2FWi%2FeY46KxjuWWRqeybwRfqctejnIyQI6R6rRVNKm3KdIazmiKzYFuyeEDnADXlbDABArhqAQtg7Ad6ZjvSiy5idRtkkXGEOqBuaBZ3w7nd4AfpGE9PrBHlQyRLp64LsBA7jZmTG0MLcA4pfp%2FCHJG8cyRdbfmBKAMADTROoLmNtNkbqiErBkakGD%2BRxnLs2ofUtjXjb%2FVw6ovw7ljVN4gqy%2FWt2QCkY2kkxbEOog%2Bsq4JQNO4LNUzS7T5%2BWJLVCEKc9ztDFJw8TWpH%2F%2Bc3Ez2mKqTMJ%2FhlMgGOqUBBPYOAhaxc7dyKM5hfCEljyqVpq0WYgTDrncB1FNk%2Bdp%2F5y5E4nqGzcohmHzN%2BjX7fswT8yTK8gZ00FUImhyRDK8dyu5PfK6PauCaK5l7PFFYovTyVEqyGcQftkqnk2l7uOMQSJIQyNgLv7Hiw9bNjZWH4Goj7SlAES3dDlIfm5U8D%2BLQCOZON2Wq0qbkc%2Bcx0CJT%2FtH6DY58YL3kjYfAcb8fw70i&X-Amz-Signature=f9398140b5db831c4fb3963995d510f1e923c0251f35327b43bf64424524a3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4LC5XN%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T010448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEzl9WjhR9yQM0hERUkfvyAPnfcj87r0qMb9umTOYcQLAiEA30axV8krb%2FQWN7igHDqgDWAHUkaqgZSeUEpF3bEcrIsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCgz1a8N6X8%2FY73yAyrcA2KztR3u36EiN2Z9oeso6OZ6iH6PoZIYOmltZC%2FLxwNmqruS170vfGBz8QQy9DLryz%2BYKgqrXPKK6jN733b2EFwI7SWpYVYhTP0tI2spMQS2%2FNuIe%2BGderiZun32tq%2FfU561VB%2BSmzzNLhSnhOVO5Hj0wKgJbezlSa5ba8HQouzBj%2BEon9xwzzDVD%2FLtEyt%2BvnGXDk1LrWuGnCu58S3Swf1wiiXXIrw7LSO%2FTYWmAWhGKgMRbQUDVdaDLzGfSSb9zaWVftdYOM5uC77nxihiFz%2B%2FDXHyG5zJ4TC3JeO6cwzl%2BUjjQqz9X02PWr22YvrBEx60cVkEHdmgq%2FsQv7vEME2DQZljd0WFax%2FWi%2FeY46KxjuWWRqeybwRfqctejnIyQI6R6rRVNKm3KdIazmiKzYFuyeEDnADXlbDABArhqAQtg7Ad6ZjvSiy5idRtkkXGEOqBuaBZ3w7nd4AfpGE9PrBHlQyRLp64LsBA7jZmTG0MLcA4pfp%2FCHJG8cyRdbfmBKAMADTROoLmNtNkbqiErBkakGD%2BRxnLs2ofUtjXjb%2FVw6ovw7ljVN4gqy%2FWt2QCkY2kkxbEOog%2Bsq4JQNO4LNUzS7T5%2BWJLVCEKc9ztDFJw8TWpH%2F%2Bc3Ez2mKqTMJ%2FhlMgGOqUBBPYOAhaxc7dyKM5hfCEljyqVpq0WYgTDrncB1FNk%2Bdp%2F5y5E4nqGzcohmHzN%2BjX7fswT8yTK8gZ00FUImhyRDK8dyu5PfK6PauCaK5l7PFFYovTyVEqyGcQftkqnk2l7uOMQSJIQyNgLv7Hiw9bNjZWH4Goj7SlAES3dDlIfm5U8D%2BLQCOZON2Wq0qbkc%2Bcx0CJT%2FtH6DY58YL3kjYfAcb8fw70i&X-Amz-Signature=5cb3d486ec3c5c900184aeba3a4c63b7d63134609f6e35723f1736f892f8e2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4LC5XN%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T010448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEzl9WjhR9yQM0hERUkfvyAPnfcj87r0qMb9umTOYcQLAiEA30axV8krb%2FQWN7igHDqgDWAHUkaqgZSeUEpF3bEcrIsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCgz1a8N6X8%2FY73yAyrcA2KztR3u36EiN2Z9oeso6OZ6iH6PoZIYOmltZC%2FLxwNmqruS170vfGBz8QQy9DLryz%2BYKgqrXPKK6jN733b2EFwI7SWpYVYhTP0tI2spMQS2%2FNuIe%2BGderiZun32tq%2FfU561VB%2BSmzzNLhSnhOVO5Hj0wKgJbezlSa5ba8HQouzBj%2BEon9xwzzDVD%2FLtEyt%2BvnGXDk1LrWuGnCu58S3Swf1wiiXXIrw7LSO%2FTYWmAWhGKgMRbQUDVdaDLzGfSSb9zaWVftdYOM5uC77nxihiFz%2B%2FDXHyG5zJ4TC3JeO6cwzl%2BUjjQqz9X02PWr22YvrBEx60cVkEHdmgq%2FsQv7vEME2DQZljd0WFax%2FWi%2FeY46KxjuWWRqeybwRfqctejnIyQI6R6rRVNKm3KdIazmiKzYFuyeEDnADXlbDABArhqAQtg7Ad6ZjvSiy5idRtkkXGEOqBuaBZ3w7nd4AfpGE9PrBHlQyRLp64LsBA7jZmTG0MLcA4pfp%2FCHJG8cyRdbfmBKAMADTROoLmNtNkbqiErBkakGD%2BRxnLs2ofUtjXjb%2FVw6ovw7ljVN4gqy%2FWt2QCkY2kkxbEOog%2Bsq4JQNO4LNUzS7T5%2BWJLVCEKc9ztDFJw8TWpH%2F%2Bc3Ez2mKqTMJ%2FhlMgGOqUBBPYOAhaxc7dyKM5hfCEljyqVpq0WYgTDrncB1FNk%2Bdp%2F5y5E4nqGzcohmHzN%2BjX7fswT8yTK8gZ00FUImhyRDK8dyu5PfK6PauCaK5l7PFFYovTyVEqyGcQftkqnk2l7uOMQSJIQyNgLv7Hiw9bNjZWH4Goj7SlAES3dDlIfm5U8D%2BLQCOZON2Wq0qbkc%2Bcx0CJT%2FtH6DY58YL3kjYfAcb8fw70i&X-Amz-Signature=a8a31c92529a21b51d84ec1b5992e7a080845c2b53fbdf0004b975a4f5a491cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4LC5XN%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T010448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEzl9WjhR9yQM0hERUkfvyAPnfcj87r0qMb9umTOYcQLAiEA30axV8krb%2FQWN7igHDqgDWAHUkaqgZSeUEpF3bEcrIsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCgz1a8N6X8%2FY73yAyrcA2KztR3u36EiN2Z9oeso6OZ6iH6PoZIYOmltZC%2FLxwNmqruS170vfGBz8QQy9DLryz%2BYKgqrXPKK6jN733b2EFwI7SWpYVYhTP0tI2spMQS2%2FNuIe%2BGderiZun32tq%2FfU561VB%2BSmzzNLhSnhOVO5Hj0wKgJbezlSa5ba8HQouzBj%2BEon9xwzzDVD%2FLtEyt%2BvnGXDk1LrWuGnCu58S3Swf1wiiXXIrw7LSO%2FTYWmAWhGKgMRbQUDVdaDLzGfSSb9zaWVftdYOM5uC77nxihiFz%2B%2FDXHyG5zJ4TC3JeO6cwzl%2BUjjQqz9X02PWr22YvrBEx60cVkEHdmgq%2FsQv7vEME2DQZljd0WFax%2FWi%2FeY46KxjuWWRqeybwRfqctejnIyQI6R6rRVNKm3KdIazmiKzYFuyeEDnADXlbDABArhqAQtg7Ad6ZjvSiy5idRtkkXGEOqBuaBZ3w7nd4AfpGE9PrBHlQyRLp64LsBA7jZmTG0MLcA4pfp%2FCHJG8cyRdbfmBKAMADTROoLmNtNkbqiErBkakGD%2BRxnLs2ofUtjXjb%2FVw6ovw7ljVN4gqy%2FWt2QCkY2kkxbEOog%2Bsq4JQNO4LNUzS7T5%2BWJLVCEKc9ztDFJw8TWpH%2F%2Bc3Ez2mKqTMJ%2FhlMgGOqUBBPYOAhaxc7dyKM5hfCEljyqVpq0WYgTDrncB1FNk%2Bdp%2F5y5E4nqGzcohmHzN%2BjX7fswT8yTK8gZ00FUImhyRDK8dyu5PfK6PauCaK5l7PFFYovTyVEqyGcQftkqnk2l7uOMQSJIQyNgLv7Hiw9bNjZWH4Goj7SlAES3dDlIfm5U8D%2BLQCOZON2Wq0qbkc%2Bcx0CJT%2FtH6DY58YL3kjYfAcb8fw70i&X-Amz-Signature=d3e37536a828f98b016f068bf35861d22312cb35653d023f93b94ed0ce9e63c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC4LC5XN%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T010448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEzl9WjhR9yQM0hERUkfvyAPnfcj87r0qMb9umTOYcQLAiEA30axV8krb%2FQWN7igHDqgDWAHUkaqgZSeUEpF3bEcrIsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDCgz1a8N6X8%2FY73yAyrcA2KztR3u36EiN2Z9oeso6OZ6iH6PoZIYOmltZC%2FLxwNmqruS170vfGBz8QQy9DLryz%2BYKgqrXPKK6jN733b2EFwI7SWpYVYhTP0tI2spMQS2%2FNuIe%2BGderiZun32tq%2FfU561VB%2BSmzzNLhSnhOVO5Hj0wKgJbezlSa5ba8HQouzBj%2BEon9xwzzDVD%2FLtEyt%2BvnGXDk1LrWuGnCu58S3Swf1wiiXXIrw7LSO%2FTYWmAWhGKgMRbQUDVdaDLzGfSSb9zaWVftdYOM5uC77nxihiFz%2B%2FDXHyG5zJ4TC3JeO6cwzl%2BUjjQqz9X02PWr22YvrBEx60cVkEHdmgq%2FsQv7vEME2DQZljd0WFax%2FWi%2FeY46KxjuWWRqeybwRfqctejnIyQI6R6rRVNKm3KdIazmiKzYFuyeEDnADXlbDABArhqAQtg7Ad6ZjvSiy5idRtkkXGEOqBuaBZ3w7nd4AfpGE9PrBHlQyRLp64LsBA7jZmTG0MLcA4pfp%2FCHJG8cyRdbfmBKAMADTROoLmNtNkbqiErBkakGD%2BRxnLs2ofUtjXjb%2FVw6ovw7ljVN4gqy%2FWt2QCkY2kkxbEOog%2Bsq4JQNO4LNUzS7T5%2BWJLVCEKc9ztDFJw8TWpH%2F%2Bc3Ez2mKqTMJ%2FhlMgGOqUBBPYOAhaxc7dyKM5hfCEljyqVpq0WYgTDrncB1FNk%2Bdp%2F5y5E4nqGzcohmHzN%2BjX7fswT8yTK8gZ00FUImhyRDK8dyu5PfK6PauCaK5l7PFFYovTyVEqyGcQftkqnk2l7uOMQSJIQyNgLv7Hiw9bNjZWH4Goj7SlAES3dDlIfm5U8D%2BLQCOZON2Wq0qbkc%2Bcx0CJT%2FtH6DY58YL3kjYfAcb8fw70i&X-Amz-Signature=a2eac4257b89504ac1e5881e37b52d0bee4113d8638c65db153f5761ec100d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJY35ADJ%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T010447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIB87chJ%2Bt8a93dJOJoIiVQdWugcTVj8O8CVM9xx33t%2F4AiEApYIEH0WQCnmTZG7u7z6ANo9iSmclkZs%2F2bHei0tnfC8q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFXmOyugBoA4e%2Ff7bSrcAyoQyQXSnO95Xj5JbKwMk%2BAsXMj9am3Uvc2mO41neetdB0%2F62sccGQtJBGyMeDtEAU0RaQAv4fU%2FU459kJ8mqQ8R3%2F6TvR7x4PY2o94cjjYeaRkTYLRSbpa%2Bl9du3z9veyI3YVQo%2FOaObsAKh6BmnsQtNwLfOyHI7ad%2F0WAMN3ReF%2FCHRigGuqAgSw3P%2BhgnSCOAsxwkSf7GtGedeJtJgGgNGGEBAH8%2FfWPz8CtQ7vQ2jaabBzcX%2FS%2Ft%2F6oxw3MRsOlo9WC5KTqHzyqFQ8Sm2Rnsah5jUKv98FlQ0ks0Qb4FYy66Pv%2FsCUuI5fyTq1fzmkbIpJqwL05k8Ho0Ymbe7GcH%2FElw77iv37Chg2uzrkYOUAaFNkR8OHC7bueGO85%2FjW2Ljuwrvsq4naI8eRCcsWqP9epAsmAFp94AM0ijfsQUknXZrKvJWW%2BByU6q8nYUnhGUSabnQtxq7jUB6PG%2BjSVThmVQmQr%2FoysvjoPZvq8sdQR%2F4J9bNZV4RCBfz3lKx2uo4D8VYiSNY7osQ6FD5x7EldUpACB9n0lu1d7pUyPJAw1ta6zxFdGX%2B%2FqvQfrK11Hgqc7KvT0%2Fd0lgYL7%2BxHFstgmIlZVeKWjL3mnRXPX2I%2Bx8ysKRl27CwWgbMNThlMgGOqUBMl5cOPHEjLnHeioDXABn4NHDwx2JetoVNjaXM8ay646ALM6HMHPaZ0qgIACZbABtP5oYSPO1qA%2F7YtHfGyVjHdz3LhpxF6Gb%2BvRnPzDQm6vzJFHx08r3dvM5H7F03M7NLIpsQV7wyvj1N6PDZtZiRaLxfcbDEyOo3F6ifn9JSWvpsD7YxT%2F6fnCsLTQ1dG4sSsBbMj4r%2FDRohZ%2Bql4X1CgLYDgDP&X-Amz-Signature=379e26287417ae711b371b850781c4ef7313a8ac130a88b84a25d8563d24aeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

