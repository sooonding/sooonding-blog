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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNP2QBF%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7L4w0izP%2BrcQ0Twcw02CfJAwUO0WSkJaNAt4cBHimWAiBUN8MuaXUbR1REvpQBMlKJxmZ5uqHBI%2BipcyL2S5ItfCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa1jPgQtx7z%2BS24dsKtwDeJS5Jci7H1%2FV31YfkqNR2vUW3eNjrK3%2BV%2BqgepCxjsAbuze6DIEdTzKEE%2F3%2BbNVI8lbtJWxckOO0X3lBSBoKVmtfDgPSZxWhLUIecDdCXBH%2FJCcx0BCB8Je35R5G%2FEDBZbsWR7uJtZejptZnp71KipFThpcCyiugrDMxrAEhpXTyGh2l%2B1aKRvxhVcsjkVKXbs%2BszaVj%2BLvM%2FraUym%2Bcx8O9bC3B3%2FIUZ444C5Yrk0FnmyK43Mk3a8R%2BYRaJ0dAud9wt1M7wYSnKh52EYzi%2FbpB3iFjTYRR2vkao0EtZxBmVGVoNg37l%2Bsed%2Brobh0RpoUrUT%2B1xf8NI4qWm3nt9Z2ETnvcxIiE1yTfWDd89YH6z8UDhQrDPxBGLNML%2BVRs4Rd0cfiGvW9GK19drfsS5B7Azf%2F8p9jDYRc8L48lBBbzi7%2FQnQU2oGIIk472zhewpZI3cYTJGz31nglzx0SC4ediuv9iOcWiBg6NDc63QQPwtdhNYcmPgpECsi9V0JBg%2FVjTRZMbkqULBbSHL4bouILq7N%2FfSOEXqD5uybTmflwB%2BMloILBIaAjJM97hSokubmAPoz9%2FVw%2BxkFoztuDQWzAdp75rvcnL0DKvVYdt1stu1WP9N25d6xrsBQM8w9JKBywY6pgE2863L8VJRFGyq3QA4BLoSEXTYQCjXMF8ucXdDhIQsbsDVDIK9FeQ6N0brZj98Amnthuq3xPKLfTHvRm4MCNKAMkAvS2uJORnNV85p%2FpVW1OnUcHF9%2FueGyAf6yHy3cQtvJ%2FXC5PPhoTjZuPkoDvpB4w4wv0PtHyPklBF2xAVz8ZPrgoDxbqFYXiynwaE4t2E8Q00TGWD4gvGUxwo0X2yje4%2B6XVHN&X-Amz-Signature=419e604982e0a871382ffa3b21395ccd7e95cae25b88c0f4aa556c807bbe11c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4U2SW4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdsKi3T8ZnYLYrXNy4oSJZNGY2vW0cau3EFtcLbmk1BAIgYy2SiRXRzwakpYR37MRPwiyPWrBXg91C9D%2BECyhdBPwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFliZ88VmIfvs3Fl4SrcA7bJ2vNze4QqGnF8RVucwYX7MUzdXChhAWlaDOrubG61PJlPklP2N4jK41A7JHUdxLj4PhfD2nJ3nH2bn58n7rwzO%2FEoxaKY%2BpIbipaywMozdtcE%2Bqg6JE9ZdwNMKs4v3b%2BTXTAdvP9JQOa3ZcwR20R3%2BHK%2BpWCW56vZowdCt8vCGh12XYXoV%2BzBYF4U4gbw%2FOc58OaCcpIZT4Pb8QWv%2FyuCMl1ILciwceqp2QVf4SYLu3B0oYypl0lrpc4WEvshok1JKDSRGAXNWU7VwOi9SWeZ69R91mBWrAZut7hqR6JNOrAr9CWxb4JcM2Kvls%2FC4tkyDs9FHbXdhhOeggRXv9ANStyZODQ5VYqjwSOqWUzyjMuCp9d2sEI6goR61tw24ey23at1KJnQCoKcuFnAxe3ubbT3HBnMCg1e7C6WW7N%2FWz8ZPWOkvppCktH0z6rLijujauamrm9oAWTNFeOQO6lEvS4V9WuWPfPwJE4XjJNltHwmzcUcTLm5E%2FyzWTS6koiMvHpWy3rLJDrFjglhQIiucErx34g1sWzcv74YgA8dHjncH%2BugGthgZ5oL28umJw4HpyLc4qZmz%2Flo9WSrcOeGFCcpZQRRwkn4mje9iHEf9nuTDwoEdJm3N6gbMMCSgcsGOqUBZu6zJFTbvfOwxxlP92OrpzmhKUnJdeb2SgjudTr9mS8JUpPwtwDwLpa%2FG2Vb6poS6PjjkFXmkuFuvyxgX52S2pg91MpdrySfBKBPI0cmIXCVIhqE%2B0NaPckzR8QFp1D%2BZGI%2FRApCRBA2cMy0ltZzsGbp%2F6MH6%2BQYTVLNyIeKsNy0IKRDKvoymi5NFmCmP061kyudo%2Fa%2Bwrkfv7Af94zOB8l4Ysui&X-Amz-Signature=e1599d41c32f906b3b70f3d58be59702f0b1ed8ddf28c416389e2cda908e96a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4U2SW4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdsKi3T8ZnYLYrXNy4oSJZNGY2vW0cau3EFtcLbmk1BAIgYy2SiRXRzwakpYR37MRPwiyPWrBXg91C9D%2BECyhdBPwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFliZ88VmIfvs3Fl4SrcA7bJ2vNze4QqGnF8RVucwYX7MUzdXChhAWlaDOrubG61PJlPklP2N4jK41A7JHUdxLj4PhfD2nJ3nH2bn58n7rwzO%2FEoxaKY%2BpIbipaywMozdtcE%2Bqg6JE9ZdwNMKs4v3b%2BTXTAdvP9JQOa3ZcwR20R3%2BHK%2BpWCW56vZowdCt8vCGh12XYXoV%2BzBYF4U4gbw%2FOc58OaCcpIZT4Pb8QWv%2FyuCMl1ILciwceqp2QVf4SYLu3B0oYypl0lrpc4WEvshok1JKDSRGAXNWU7VwOi9SWeZ69R91mBWrAZut7hqR6JNOrAr9CWxb4JcM2Kvls%2FC4tkyDs9FHbXdhhOeggRXv9ANStyZODQ5VYqjwSOqWUzyjMuCp9d2sEI6goR61tw24ey23at1KJnQCoKcuFnAxe3ubbT3HBnMCg1e7C6WW7N%2FWz8ZPWOkvppCktH0z6rLijujauamrm9oAWTNFeOQO6lEvS4V9WuWPfPwJE4XjJNltHwmzcUcTLm5E%2FyzWTS6koiMvHpWy3rLJDrFjglhQIiucErx34g1sWzcv74YgA8dHjncH%2BugGthgZ5oL28umJw4HpyLc4qZmz%2Flo9WSrcOeGFCcpZQRRwkn4mje9iHEf9nuTDwoEdJm3N6gbMMCSgcsGOqUBZu6zJFTbvfOwxxlP92OrpzmhKUnJdeb2SgjudTr9mS8JUpPwtwDwLpa%2FG2Vb6poS6PjjkFXmkuFuvyxgX52S2pg91MpdrySfBKBPI0cmIXCVIhqE%2B0NaPckzR8QFp1D%2BZGI%2FRApCRBA2cMy0ltZzsGbp%2F6MH6%2BQYTVLNyIeKsNy0IKRDKvoymi5NFmCmP061kyudo%2Fa%2Bwrkfv7Af94zOB8l4Ysui&X-Amz-Signature=6592e3484c38d92b161bde5075a44c40ff4a556c81eea21f2cadef7ec4c30db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4U2SW4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdsKi3T8ZnYLYrXNy4oSJZNGY2vW0cau3EFtcLbmk1BAIgYy2SiRXRzwakpYR37MRPwiyPWrBXg91C9D%2BECyhdBPwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFliZ88VmIfvs3Fl4SrcA7bJ2vNze4QqGnF8RVucwYX7MUzdXChhAWlaDOrubG61PJlPklP2N4jK41A7JHUdxLj4PhfD2nJ3nH2bn58n7rwzO%2FEoxaKY%2BpIbipaywMozdtcE%2Bqg6JE9ZdwNMKs4v3b%2BTXTAdvP9JQOa3ZcwR20R3%2BHK%2BpWCW56vZowdCt8vCGh12XYXoV%2BzBYF4U4gbw%2FOc58OaCcpIZT4Pb8QWv%2FyuCMl1ILciwceqp2QVf4SYLu3B0oYypl0lrpc4WEvshok1JKDSRGAXNWU7VwOi9SWeZ69R91mBWrAZut7hqR6JNOrAr9CWxb4JcM2Kvls%2FC4tkyDs9FHbXdhhOeggRXv9ANStyZODQ5VYqjwSOqWUzyjMuCp9d2sEI6goR61tw24ey23at1KJnQCoKcuFnAxe3ubbT3HBnMCg1e7C6WW7N%2FWz8ZPWOkvppCktH0z6rLijujauamrm9oAWTNFeOQO6lEvS4V9WuWPfPwJE4XjJNltHwmzcUcTLm5E%2FyzWTS6koiMvHpWy3rLJDrFjglhQIiucErx34g1sWzcv74YgA8dHjncH%2BugGthgZ5oL28umJw4HpyLc4qZmz%2Flo9WSrcOeGFCcpZQRRwkn4mje9iHEf9nuTDwoEdJm3N6gbMMCSgcsGOqUBZu6zJFTbvfOwxxlP92OrpzmhKUnJdeb2SgjudTr9mS8JUpPwtwDwLpa%2FG2Vb6poS6PjjkFXmkuFuvyxgX52S2pg91MpdrySfBKBPI0cmIXCVIhqE%2B0NaPckzR8QFp1D%2BZGI%2FRApCRBA2cMy0ltZzsGbp%2F6MH6%2BQYTVLNyIeKsNy0IKRDKvoymi5NFmCmP061kyudo%2Fa%2Bwrkfv7Af94zOB8l4Ysui&X-Amz-Signature=c572e0e64ae03d5a068a1d0987aea2fec29e89b68f446917ac46cca8b46af7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4U2SW4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdsKi3T8ZnYLYrXNy4oSJZNGY2vW0cau3EFtcLbmk1BAIgYy2SiRXRzwakpYR37MRPwiyPWrBXg91C9D%2BECyhdBPwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFliZ88VmIfvs3Fl4SrcA7bJ2vNze4QqGnF8RVucwYX7MUzdXChhAWlaDOrubG61PJlPklP2N4jK41A7JHUdxLj4PhfD2nJ3nH2bn58n7rwzO%2FEoxaKY%2BpIbipaywMozdtcE%2Bqg6JE9ZdwNMKs4v3b%2BTXTAdvP9JQOa3ZcwR20R3%2BHK%2BpWCW56vZowdCt8vCGh12XYXoV%2BzBYF4U4gbw%2FOc58OaCcpIZT4Pb8QWv%2FyuCMl1ILciwceqp2QVf4SYLu3B0oYypl0lrpc4WEvshok1JKDSRGAXNWU7VwOi9SWeZ69R91mBWrAZut7hqR6JNOrAr9CWxb4JcM2Kvls%2FC4tkyDs9FHbXdhhOeggRXv9ANStyZODQ5VYqjwSOqWUzyjMuCp9d2sEI6goR61tw24ey23at1KJnQCoKcuFnAxe3ubbT3HBnMCg1e7C6WW7N%2FWz8ZPWOkvppCktH0z6rLijujauamrm9oAWTNFeOQO6lEvS4V9WuWPfPwJE4XjJNltHwmzcUcTLm5E%2FyzWTS6koiMvHpWy3rLJDrFjglhQIiucErx34g1sWzcv74YgA8dHjncH%2BugGthgZ5oL28umJw4HpyLc4qZmz%2Flo9WSrcOeGFCcpZQRRwkn4mje9iHEf9nuTDwoEdJm3N6gbMMCSgcsGOqUBZu6zJFTbvfOwxxlP92OrpzmhKUnJdeb2SgjudTr9mS8JUpPwtwDwLpa%2FG2Vb6poS6PjjkFXmkuFuvyxgX52S2pg91MpdrySfBKBPI0cmIXCVIhqE%2B0NaPckzR8QFp1D%2BZGI%2FRApCRBA2cMy0ltZzsGbp%2F6MH6%2BQYTVLNyIeKsNy0IKRDKvoymi5NFmCmP061kyudo%2Fa%2Bwrkfv7Af94zOB8l4Ysui&X-Amz-Signature=bdcde91da74de161420589d4efb7476ec8930d181b6e34f2cfe232f05fbd5a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST4U2SW4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdsKi3T8ZnYLYrXNy4oSJZNGY2vW0cau3EFtcLbmk1BAIgYy2SiRXRzwakpYR37MRPwiyPWrBXg91C9D%2BECyhdBPwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFliZ88VmIfvs3Fl4SrcA7bJ2vNze4QqGnF8RVucwYX7MUzdXChhAWlaDOrubG61PJlPklP2N4jK41A7JHUdxLj4PhfD2nJ3nH2bn58n7rwzO%2FEoxaKY%2BpIbipaywMozdtcE%2Bqg6JE9ZdwNMKs4v3b%2BTXTAdvP9JQOa3ZcwR20R3%2BHK%2BpWCW56vZowdCt8vCGh12XYXoV%2BzBYF4U4gbw%2FOc58OaCcpIZT4Pb8QWv%2FyuCMl1ILciwceqp2QVf4SYLu3B0oYypl0lrpc4WEvshok1JKDSRGAXNWU7VwOi9SWeZ69R91mBWrAZut7hqR6JNOrAr9CWxb4JcM2Kvls%2FC4tkyDs9FHbXdhhOeggRXv9ANStyZODQ5VYqjwSOqWUzyjMuCp9d2sEI6goR61tw24ey23at1KJnQCoKcuFnAxe3ubbT3HBnMCg1e7C6WW7N%2FWz8ZPWOkvppCktH0z6rLijujauamrm9oAWTNFeOQO6lEvS4V9WuWPfPwJE4XjJNltHwmzcUcTLm5E%2FyzWTS6koiMvHpWy3rLJDrFjglhQIiucErx34g1sWzcv74YgA8dHjncH%2BugGthgZ5oL28umJw4HpyLc4qZmz%2Flo9WSrcOeGFCcpZQRRwkn4mje9iHEf9nuTDwoEdJm3N6gbMMCSgcsGOqUBZu6zJFTbvfOwxxlP92OrpzmhKUnJdeb2SgjudTr9mS8JUpPwtwDwLpa%2FG2Vb6poS6PjjkFXmkuFuvyxgX52S2pg91MpdrySfBKBPI0cmIXCVIhqE%2B0NaPckzR8QFp1D%2BZGI%2FRApCRBA2cMy0ltZzsGbp%2F6MH6%2BQYTVLNyIeKsNy0IKRDKvoymi5NFmCmP061kyudo%2Fa%2Bwrkfv7Af94zOB8l4Ysui&X-Amz-Signature=4a9b3f2ef70bd0d4ae38d6bf4f9ef74973dfccc7c145776de5634d6a194e090d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJNP2QBF%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T010905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7L4w0izP%2BrcQ0Twcw02CfJAwUO0WSkJaNAt4cBHimWAiBUN8MuaXUbR1REvpQBMlKJxmZ5uqHBI%2BipcyL2S5ItfCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa1jPgQtx7z%2BS24dsKtwDeJS5Jci7H1%2FV31YfkqNR2vUW3eNjrK3%2BV%2BqgepCxjsAbuze6DIEdTzKEE%2F3%2BbNVI8lbtJWxckOO0X3lBSBoKVmtfDgPSZxWhLUIecDdCXBH%2FJCcx0BCB8Je35R5G%2FEDBZbsWR7uJtZejptZnp71KipFThpcCyiugrDMxrAEhpXTyGh2l%2B1aKRvxhVcsjkVKXbs%2BszaVj%2BLvM%2FraUym%2Bcx8O9bC3B3%2FIUZ444C5Yrk0FnmyK43Mk3a8R%2BYRaJ0dAud9wt1M7wYSnKh52EYzi%2FbpB3iFjTYRR2vkao0EtZxBmVGVoNg37l%2Bsed%2Brobh0RpoUrUT%2B1xf8NI4qWm3nt9Z2ETnvcxIiE1yTfWDd89YH6z8UDhQrDPxBGLNML%2BVRs4Rd0cfiGvW9GK19drfsS5B7Azf%2F8p9jDYRc8L48lBBbzi7%2FQnQU2oGIIk472zhewpZI3cYTJGz31nglzx0SC4ediuv9iOcWiBg6NDc63QQPwtdhNYcmPgpECsi9V0JBg%2FVjTRZMbkqULBbSHL4bouILq7N%2FfSOEXqD5uybTmflwB%2BMloILBIaAjJM97hSokubmAPoz9%2FVw%2BxkFoztuDQWzAdp75rvcnL0DKvVYdt1stu1WP9N25d6xrsBQM8w9JKBywY6pgE2863L8VJRFGyq3QA4BLoSEXTYQCjXMF8ucXdDhIQsbsDVDIK9FeQ6N0brZj98Amnthuq3xPKLfTHvRm4MCNKAMkAvS2uJORnNV85p%2FpVW1OnUcHF9%2FueGyAf6yHy3cQtvJ%2FXC5PPhoTjZuPkoDvpB4w4wv0PtHyPklBF2xAVz8ZPrgoDxbqFYXiynwaE4t2E8Q00TGWD4gvGUxwo0X2yje4%2B6XVHN&X-Amz-Signature=f2513625e8fdc354efdbe34116d437d2f252088990f386d9c713c85d7026b07b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

