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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGBIB2T%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC9W1MJVvyO5y9zNUTyQ9Zrzw5MCqMfGA9t8vO96oApAiEA8%2BJRqodgUmO3%2BcMw%2FT5mSnnkgzGAyrVGpuKiJpvMc4kq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPGThleDQdxygyEo2CrcA%2BcxjHpcY8aBae67sOVihTMIYj0QW2mZYL%2F%2F38aqLHYm1KYtoe147bX8ZccKrBdq5LdbpEaUuT8nVTm3wMGv%2BkchRj1NwTamLyiUufkiGvTmvcoLpt8HgukfIItS%2BdV%2FCUUdaws82UA1CXEnxxcch%2BbpXVWHrGSGfss9BCJ17bytz0wR65NVQDdhg5Gm5ZRRfwp0EnlfjKq4IVDcw3FVuRuqbYUgvVm0ZJvhkBXBQSNIUtTH5gdBWF0egDA9dn%2Bfzsis2VFCHRUZFx%2FS8FeF0FC0TqxI5Zc04Xp%2F6aS8HCTI%2FKeC4t8347oTXwHfY1vSf%2FiauHQIDvJb7Zm8P4fb7mIkkoQ5lTnRKeAlkacv9718PPBhWowQKIB%2BEON0RTAhLpMKL6Wj5lMfjZUk6S472y%2Blvn%2FuawWBrTzU5FP983rNu9MGrqKCFidpRn6bx%2BttU%2BTsgvKi6r85qWWrnV7xU1UxF6uimcr27YkRYu8NXI0TmgS4j8p3a1gHxIFF0DJOh0CAnbEGm5oD0SGUYqIaCzm7%2FThLlPeeORShOatfgqBa1GUjbMhUjOeCnQO09rw4dRCG1x7BS9MGytZXcpgmLyJfTLtB7Xxo1VffVLlD0Q6PR5FGjpP5uzZpPLwyMP3BsdYGOqUBlnzDd%2Bz%2BquVdqFd3TDeP7Bwkd79%2FoH0gL7SV4PaW2g1jgxcVDJnczwlRc6TWG7ccuG4%2FPUI%2BxTdXbaD7%2FYEdVjrTkpA851JnMdjL71LOrVRI8kYknG%2FrnpCHHG26IZ58Smi8jWgbxW6mjTUJTlnyX7vh3OH0%2FHP3pvuLmmA39MYo8i1%2F%2B0GIaYQE7q%2FklPA8OGMDouItvX9t4tc0ALOyqBksPGib&X-Amz-Signature=45fbf3abc00a409e3180e18f867098dc3ab0dc1e7a4c9c135ac4666f2c72e7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDH7NQM%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo1hwh2CBKUOrOMDE7Sj604vO6Xuz75jsg%2BKv2PPj%2BSAiB%2F%2BnXKErgFVo35eufJno2RMDmTywfivP15fuNl3Vw3byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpJ8TSUrKwwbw7xSpKtwDCFjQKGWazaowSd5WYVyfoPoCw28yD68Fe%2FSaWfAVggriwdZNMUrV1lK4%2BKFJ8qR2cszDn4UWZZ096S6BQAtpP65bSAEyvTxA6QpeF5B%2F%2Bh7Nffw6SDwWYNT1bIZZX9jo9R%2BcMiqCV93eDemnXWGBCzhqxF%2FDpWAfMlLRiFFd5QP1vw2oVSBD%2FOv%2FYayj0pdoBD14dIZrMiKYGBt4wMLQbGs3xcnBeJDxeL8ucpPOAp8C2N8y9Zqy6x6iCF73GAWDO3b2PG3Zk4t1%2F7ZTQcMU35avM9Jf8S6d9udCwmugACE10r22JdAnoH0%2BrDzi1PQM%2Bi%2BoVV4UfL1AlfAcJpmZ7sF3Hso%2FfRld8O5iz861DEVkO%2B5CAKLpKDvQC4NL5lnsIPfD4rbFVqfblpWpnOTzGq2q%2FRVXW4sGPYDx4bkDkcH8YgoTj3YTK5up2%2B1klky0Ps%2FAiYVZWiYcCvuUhRV%2BPZnwTphpKeS8J%2FvFYrloNvgz1audHT56EwjwxZK79Oov0sNoC1twHJxIalOsE0dK89nr38XJh1ltmHKCTg3QeXwfXnJyee37t64%2FFXYhIqlbGNguh6cJSoqcLCK5ZnXdn7nlf21ATmt5nsWhz598QTOcvBo7UqkmeUzlipwwkcGx1gY6pgGbn2vNbj%2BTwndxZxJEZoKohWUU6ciGACFSmjBRUFlcTFcF%2BWZFKmnFtsdrI7OX49bTY7hZCGCQRDhsUDr8KwmAkrzPz5YWS3rCc8Qre%2Facq51guR4bLDKFNJaU%2BPFnrjyaircy6TBxpKVtN11vkzooBWmH8nXrCsdR6R6yYz%2Bkdb%2FMJt2OPHdqQLAXcPLam87wk9uxK7i0EtQRZQJ3O%2Fk4lfjZp06R&X-Amz-Signature=86e8aad0473d3c6580b47c9cca5df0e2329c53fc1a108967b948932adc25095c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDH7NQM%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo1hwh2CBKUOrOMDE7Sj604vO6Xuz75jsg%2BKv2PPj%2BSAiB%2F%2BnXKErgFVo35eufJno2RMDmTywfivP15fuNl3Vw3byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpJ8TSUrKwwbw7xSpKtwDCFjQKGWazaowSd5WYVyfoPoCw28yD68Fe%2FSaWfAVggriwdZNMUrV1lK4%2BKFJ8qR2cszDn4UWZZ096S6BQAtpP65bSAEyvTxA6QpeF5B%2F%2Bh7Nffw6SDwWYNT1bIZZX9jo9R%2BcMiqCV93eDemnXWGBCzhqxF%2FDpWAfMlLRiFFd5QP1vw2oVSBD%2FOv%2FYayj0pdoBD14dIZrMiKYGBt4wMLQbGs3xcnBeJDxeL8ucpPOAp8C2N8y9Zqy6x6iCF73GAWDO3b2PG3Zk4t1%2F7ZTQcMU35avM9Jf8S6d9udCwmugACE10r22JdAnoH0%2BrDzi1PQM%2Bi%2BoVV4UfL1AlfAcJpmZ7sF3Hso%2FfRld8O5iz861DEVkO%2B5CAKLpKDvQC4NL5lnsIPfD4rbFVqfblpWpnOTzGq2q%2FRVXW4sGPYDx4bkDkcH8YgoTj3YTK5up2%2B1klky0Ps%2FAiYVZWiYcCvuUhRV%2BPZnwTphpKeS8J%2FvFYrloNvgz1audHT56EwjwxZK79Oov0sNoC1twHJxIalOsE0dK89nr38XJh1ltmHKCTg3QeXwfXnJyee37t64%2FFXYhIqlbGNguh6cJSoqcLCK5ZnXdn7nlf21ATmt5nsWhz598QTOcvBo7UqkmeUzlipwwkcGx1gY6pgGbn2vNbj%2BTwndxZxJEZoKohWUU6ciGACFSmjBRUFlcTFcF%2BWZFKmnFtsdrI7OX49bTY7hZCGCQRDhsUDr8KwmAkrzPz5YWS3rCc8Qre%2Facq51guR4bLDKFNJaU%2BPFnrjyaircy6TBxpKVtN11vkzooBWmH8nXrCsdR6R6yYz%2Bkdb%2FMJt2OPHdqQLAXcPLam87wk9uxK7i0EtQRZQJ3O%2Fk4lfjZp06R&X-Amz-Signature=0013d6cdc4d812b6100f2db109aefac682760873ff6f37462681e651fcda7171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDH7NQM%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo1hwh2CBKUOrOMDE7Sj604vO6Xuz75jsg%2BKv2PPj%2BSAiB%2F%2BnXKErgFVo35eufJno2RMDmTywfivP15fuNl3Vw3byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpJ8TSUrKwwbw7xSpKtwDCFjQKGWazaowSd5WYVyfoPoCw28yD68Fe%2FSaWfAVggriwdZNMUrV1lK4%2BKFJ8qR2cszDn4UWZZ096S6BQAtpP65bSAEyvTxA6QpeF5B%2F%2Bh7Nffw6SDwWYNT1bIZZX9jo9R%2BcMiqCV93eDemnXWGBCzhqxF%2FDpWAfMlLRiFFd5QP1vw2oVSBD%2FOv%2FYayj0pdoBD14dIZrMiKYGBt4wMLQbGs3xcnBeJDxeL8ucpPOAp8C2N8y9Zqy6x6iCF73GAWDO3b2PG3Zk4t1%2F7ZTQcMU35avM9Jf8S6d9udCwmugACE10r22JdAnoH0%2BrDzi1PQM%2Bi%2BoVV4UfL1AlfAcJpmZ7sF3Hso%2FfRld8O5iz861DEVkO%2B5CAKLpKDvQC4NL5lnsIPfD4rbFVqfblpWpnOTzGq2q%2FRVXW4sGPYDx4bkDkcH8YgoTj3YTK5up2%2B1klky0Ps%2FAiYVZWiYcCvuUhRV%2BPZnwTphpKeS8J%2FvFYrloNvgz1audHT56EwjwxZK79Oov0sNoC1twHJxIalOsE0dK89nr38XJh1ltmHKCTg3QeXwfXnJyee37t64%2FFXYhIqlbGNguh6cJSoqcLCK5ZnXdn7nlf21ATmt5nsWhz598QTOcvBo7UqkmeUzlipwwkcGx1gY6pgGbn2vNbj%2BTwndxZxJEZoKohWUU6ciGACFSmjBRUFlcTFcF%2BWZFKmnFtsdrI7OX49bTY7hZCGCQRDhsUDr8KwmAkrzPz5YWS3rCc8Qre%2Facq51guR4bLDKFNJaU%2BPFnrjyaircy6TBxpKVtN11vkzooBWmH8nXrCsdR6R6yYz%2Bkdb%2FMJt2OPHdqQLAXcPLam87wk9uxK7i0EtQRZQJ3O%2Fk4lfjZp06R&X-Amz-Signature=4a7e373fd242106595004ee0d248ce2c8fc017ab6eb112480caf1f87c5c7a609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDH7NQM%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo1hwh2CBKUOrOMDE7Sj604vO6Xuz75jsg%2BKv2PPj%2BSAiB%2F%2BnXKErgFVo35eufJno2RMDmTywfivP15fuNl3Vw3byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpJ8TSUrKwwbw7xSpKtwDCFjQKGWazaowSd5WYVyfoPoCw28yD68Fe%2FSaWfAVggriwdZNMUrV1lK4%2BKFJ8qR2cszDn4UWZZ096S6BQAtpP65bSAEyvTxA6QpeF5B%2F%2Bh7Nffw6SDwWYNT1bIZZX9jo9R%2BcMiqCV93eDemnXWGBCzhqxF%2FDpWAfMlLRiFFd5QP1vw2oVSBD%2FOv%2FYayj0pdoBD14dIZrMiKYGBt4wMLQbGs3xcnBeJDxeL8ucpPOAp8C2N8y9Zqy6x6iCF73GAWDO3b2PG3Zk4t1%2F7ZTQcMU35avM9Jf8S6d9udCwmugACE10r22JdAnoH0%2BrDzi1PQM%2Bi%2BoVV4UfL1AlfAcJpmZ7sF3Hso%2FfRld8O5iz861DEVkO%2B5CAKLpKDvQC4NL5lnsIPfD4rbFVqfblpWpnOTzGq2q%2FRVXW4sGPYDx4bkDkcH8YgoTj3YTK5up2%2B1klky0Ps%2FAiYVZWiYcCvuUhRV%2BPZnwTphpKeS8J%2FvFYrloNvgz1audHT56EwjwxZK79Oov0sNoC1twHJxIalOsE0dK89nr38XJh1ltmHKCTg3QeXwfXnJyee37t64%2FFXYhIqlbGNguh6cJSoqcLCK5ZnXdn7nlf21ATmt5nsWhz598QTOcvBo7UqkmeUzlipwwkcGx1gY6pgGbn2vNbj%2BTwndxZxJEZoKohWUU6ciGACFSmjBRUFlcTFcF%2BWZFKmnFtsdrI7OX49bTY7hZCGCQRDhsUDr8KwmAkrzPz5YWS3rCc8Qre%2Facq51guR4bLDKFNJaU%2BPFnrjyaircy6TBxpKVtN11vkzooBWmH8nXrCsdR6R6yYz%2Bkdb%2FMJt2OPHdqQLAXcPLam87wk9uxK7i0EtQRZQJ3O%2Fk4lfjZp06R&X-Amz-Signature=5fd21472ae4d3ad5456d2750fc7014efd64a3117de544fdee6b65e0197ac7a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSDH7NQM%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo1hwh2CBKUOrOMDE7Sj604vO6Xuz75jsg%2BKv2PPj%2BSAiB%2F%2BnXKErgFVo35eufJno2RMDmTywfivP15fuNl3Vw3byr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMpJ8TSUrKwwbw7xSpKtwDCFjQKGWazaowSd5WYVyfoPoCw28yD68Fe%2FSaWfAVggriwdZNMUrV1lK4%2BKFJ8qR2cszDn4UWZZ096S6BQAtpP65bSAEyvTxA6QpeF5B%2F%2Bh7Nffw6SDwWYNT1bIZZX9jo9R%2BcMiqCV93eDemnXWGBCzhqxF%2FDpWAfMlLRiFFd5QP1vw2oVSBD%2FOv%2FYayj0pdoBD14dIZrMiKYGBt4wMLQbGs3xcnBeJDxeL8ucpPOAp8C2N8y9Zqy6x6iCF73GAWDO3b2PG3Zk4t1%2F7ZTQcMU35avM9Jf8S6d9udCwmugACE10r22JdAnoH0%2BrDzi1PQM%2Bi%2BoVV4UfL1AlfAcJpmZ7sF3Hso%2FfRld8O5iz861DEVkO%2B5CAKLpKDvQC4NL5lnsIPfD4rbFVqfblpWpnOTzGq2q%2FRVXW4sGPYDx4bkDkcH8YgoTj3YTK5up2%2B1klky0Ps%2FAiYVZWiYcCvuUhRV%2BPZnwTphpKeS8J%2FvFYrloNvgz1audHT56EwjwxZK79Oov0sNoC1twHJxIalOsE0dK89nr38XJh1ltmHKCTg3QeXwfXnJyee37t64%2FFXYhIqlbGNguh6cJSoqcLCK5ZnXdn7nlf21ATmt5nsWhz598QTOcvBo7UqkmeUzlipwwkcGx1gY6pgGbn2vNbj%2BTwndxZxJEZoKohWUU6ciGACFSmjBRUFlcTFcF%2BWZFKmnFtsdrI7OX49bTY7hZCGCQRDhsUDr8KwmAkrzPz5YWS3rCc8Qre%2Facq51guR4bLDKFNJaU%2BPFnrjyaircy6TBxpKVtN11vkzooBWmH8nXrCsdR6R6yYz%2Bkdb%2FMJt2OPHdqQLAXcPLam87wk9uxK7i0EtQRZQJ3O%2Fk4lfjZp06R&X-Amz-Signature=07e53f58300c4c8d99da8d1d0076697a24d6bd7250959a3fb8916f64f091e93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGBIB2T%2F20261012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261012T043735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHC9W1MJVvyO5y9zNUTyQ9Zrzw5MCqMfGA9t8vO96oApAiEA8%2BJRqodgUmO3%2BcMw%2FT5mSnnkgzGAyrVGpuKiJpvMc4kq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPGThleDQdxygyEo2CrcA%2BcxjHpcY8aBae67sOVihTMIYj0QW2mZYL%2F%2F38aqLHYm1KYtoe147bX8ZccKrBdq5LdbpEaUuT8nVTm3wMGv%2BkchRj1NwTamLyiUufkiGvTmvcoLpt8HgukfIItS%2BdV%2FCUUdaws82UA1CXEnxxcch%2BbpXVWHrGSGfss9BCJ17bytz0wR65NVQDdhg5Gm5ZRRfwp0EnlfjKq4IVDcw3FVuRuqbYUgvVm0ZJvhkBXBQSNIUtTH5gdBWF0egDA9dn%2Bfzsis2VFCHRUZFx%2FS8FeF0FC0TqxI5Zc04Xp%2F6aS8HCTI%2FKeC4t8347oTXwHfY1vSf%2FiauHQIDvJb7Zm8P4fb7mIkkoQ5lTnRKeAlkacv9718PPBhWowQKIB%2BEON0RTAhLpMKL6Wj5lMfjZUk6S472y%2Blvn%2FuawWBrTzU5FP983rNu9MGrqKCFidpRn6bx%2BttU%2BTsgvKi6r85qWWrnV7xU1UxF6uimcr27YkRYu8NXI0TmgS4j8p3a1gHxIFF0DJOh0CAnbEGm5oD0SGUYqIaCzm7%2FThLlPeeORShOatfgqBa1GUjbMhUjOeCnQO09rw4dRCG1x7BS9MGytZXcpgmLyJfTLtB7Xxo1VffVLlD0Q6PR5FGjpP5uzZpPLwyMP3BsdYGOqUBlnzDd%2Bz%2BquVdqFd3TDeP7Bwkd79%2FoH0gL7SV4PaW2g1jgxcVDJnczwlRc6TWG7ccuG4%2FPUI%2BxTdXbaD7%2FYEdVjrTkpA851JnMdjL71LOrVRI8kYknG%2FrnpCHHG26IZ58Smi8jWgbxW6mjTUJTlnyX7vh3OH0%2FHP3pvuLmmA39MYo8i1%2F%2B0GIaYQE7q%2FklPA8OGMDouItvX9t4tc0ALOyqBksPGib&X-Amz-Signature=bf865961becaf947069b074b6c0cfa01800f779b30999cd98b6f7d204082ad2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

