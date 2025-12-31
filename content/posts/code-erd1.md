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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDASVCBA%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T010814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAz5RNIqGGLsdnq1X7OYspitRSlvd3SbXHnlLYjhJ781AiB%2BrrA1XROw5nc0Yq%2B%2FCgI8WeFewpoDCb7lbD55nBOsQCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwHGx42swA2jVWd%2FKtwD5aZJdFygpVpJyjGdo9VhoFWAZKWnLn1HuHp%2B59mfKJqteR48JovJv6XRlEAx8Uu%2FPVcJVYh7UH9JTsJaLh43izfeH8Pv7OWpQbrJkEhQ6GG8%2BQJNfHnm0qECfgANKjPjnYFB0xve8pl9Oj3%2FKeQKAx3q%2FRmugLGYWpjjn%2FTsX8EKb4MNwrfU29JLhEbTw2UOfL%2F16BRwwbFAb3H9LFIAcxvbcYrQGzTjMVII5yhufweb%2FBDiC32LAFprSMpXR6Vkmf%2BU3IYnIDA99m9HJG%2BovBpiqJzUQl%2BSyotBGmn80VzUf0DsMujeH67h%2FSByZVTDWZs%2F%2BSRPYfhMGe%2Foiw1NomVunolYoDQjL4VuCUCI8tjLBkIVXyN1i8INDkpEXsctCysVtIk7GPJZrKmCPccEjLVFhDgyRsycUda6V75XMBMtxsjlupOe%2BmNgHEbbGwU5HtRK1BJ%2FrOTxTQ92rc6CU0l31JAXCbIxvEZr1Zr0tBVXcRUVx1XnZ%2FC1VQhM%2FBb6XmST6pPPHRRYmpFjSvEIY68lz21lTZEi60ainpd1QSIQ%2FDCkPcLMfliSebR4SL1bVuMY9%2F0HKcAaU5%2F%2FY2U7HaxOHTrOih25BSWbzLUrX1l42YM8No829BSpjxEw5ODRygY6pgFY%2Bqj7RGbY2lLc8wb8Ok2tu0faGgZU3cHo67bbeto4dguYGsvsaPB2Qoh6FmIYBbSqnuQ6doCShh46EpFdOQLd8A3KCpTiDh7XexpRJa7Ci0bQ6F1gspOJlc2RLdA2qpRxMVIIs6qW%2Fulh1fBsObku2VilhW%2FG8Hz4FhXBwF%2BjfC%2BWkC%2Bx9qoAnZlUmOroZlxVSFEFV67P5QeHt4i1fAmVkWT0GVx9&X-Amz-Signature=f3d9c6882362f15a5af92f5b5c2460d2bfc80682d45c4bd67c17fd24179ef1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAETOY65%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T010815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8BIxUehDGKsnVPCkWAjnKbwcMkckh1ojMkqxCLaSiRAiBSXY%2B63On7GvNeps2e6qTllXP8Fde7%2B6eCsPruIBcW6yqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9HNE9O4QEEfNu%2BEKtwDasJ%2FmyTt9PfJMkSEtGJxNeNvP8N2j0tgAMrPXichlS8hWyyUNs900mPDqKiuGKMucxVFMhUjp7dwJA9h7fXenr55EBKO%2BV4xM9bSxLcOwPcVzHHB8W3p1ZnrKszErrhcTsr1yBsNfR9WBamxodGjgXnFGg6qYruDZPPLCz7oPEpZ%2Bmyp%2FrpcVAA7dX2SGChDXF%2FuU%2FPH6yfG3fLHNYNXMZ4y51kliD9QYMb9c6OYG8HTu%2B5LJjto0r98rHFTcQIP12UdRMM%2BRLstM%2B%2Fdpum8uGHU93pxvAHdOvd5%2B8lvj0SykxxZsgzvVcS5OWfJOasLiQLgLAWiGwJ%2FomneT4vB6rbDjVBGcAtUd9kzFci%2FqWY2Lf3Dhqe4s0ZKz5Cm2oJ5Raj92XlHmSzjUl0Bx%2BJ6ZMXM2WEyxxpEYzqYaYXliGIpOPozEg%2FnqpVnLUPWlseZhXuD40lprLuVwTTQnsoHZ52tUl6wDekJ0vLow8oQ6BcBWpp22cc%2BJTF%2F3S%2B8hd5qYjvL8ka1P9HSdu9%2BYG8eF0Yg9nzH08Q99g4aDCdd4HB3OXSxiCDtZXIWcryhyqtfst2zeajOpBPx3egk2JjPtMpXCcNgXvFEwAsmDXTaB%2FJztGlZcO9TXM4ADT8ws%2BTRygY6pgGyn%2FvEgvs0a565S%2F8wKH3iXE6Zk8HGNWr99vsuGBWvRsHCsoQlsK00XkSXm7LCDOE0S3Qj85Pvwdw4Ttlf6i%2Fl8rbsD7ArT0w7smiCjpxFoO8GyZ2d0LMX2aqezW5kZt99zew6gfLYxXSbivKLI31%2BslRic3XatNFIugam5Cmi7Uae6PYnJA8Vq3E6K9nhI8dS1fLgGOoP22KZ97NHGi2OSpnm9J3j&X-Amz-Signature=7b5cb0124dac3ac97573dd85b2babb76f2887446f4b482f33c0a8bf609bf64ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAETOY65%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T010815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8BIxUehDGKsnVPCkWAjnKbwcMkckh1ojMkqxCLaSiRAiBSXY%2B63On7GvNeps2e6qTllXP8Fde7%2B6eCsPruIBcW6yqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9HNE9O4QEEfNu%2BEKtwDasJ%2FmyTt9PfJMkSEtGJxNeNvP8N2j0tgAMrPXichlS8hWyyUNs900mPDqKiuGKMucxVFMhUjp7dwJA9h7fXenr55EBKO%2BV4xM9bSxLcOwPcVzHHB8W3p1ZnrKszErrhcTsr1yBsNfR9WBamxodGjgXnFGg6qYruDZPPLCz7oPEpZ%2Bmyp%2FrpcVAA7dX2SGChDXF%2FuU%2FPH6yfG3fLHNYNXMZ4y51kliD9QYMb9c6OYG8HTu%2B5LJjto0r98rHFTcQIP12UdRMM%2BRLstM%2B%2Fdpum8uGHU93pxvAHdOvd5%2B8lvj0SykxxZsgzvVcS5OWfJOasLiQLgLAWiGwJ%2FomneT4vB6rbDjVBGcAtUd9kzFci%2FqWY2Lf3Dhqe4s0ZKz5Cm2oJ5Raj92XlHmSzjUl0Bx%2BJ6ZMXM2WEyxxpEYzqYaYXliGIpOPozEg%2FnqpVnLUPWlseZhXuD40lprLuVwTTQnsoHZ52tUl6wDekJ0vLow8oQ6BcBWpp22cc%2BJTF%2F3S%2B8hd5qYjvL8ka1P9HSdu9%2BYG8eF0Yg9nzH08Q99g4aDCdd4HB3OXSxiCDtZXIWcryhyqtfst2zeajOpBPx3egk2JjPtMpXCcNgXvFEwAsmDXTaB%2FJztGlZcO9TXM4ADT8ws%2BTRygY6pgGyn%2FvEgvs0a565S%2F8wKH3iXE6Zk8HGNWr99vsuGBWvRsHCsoQlsK00XkSXm7LCDOE0S3Qj85Pvwdw4Ttlf6i%2Fl8rbsD7ArT0w7smiCjpxFoO8GyZ2d0LMX2aqezW5kZt99zew6gfLYxXSbivKLI31%2BslRic3XatNFIugam5Cmi7Uae6PYnJA8Vq3E6K9nhI8dS1fLgGOoP22KZ97NHGi2OSpnm9J3j&X-Amz-Signature=8f22c78342570108cb9693ffc1a416c2df2bb0f664c87f8c9f3e00bdf4e54afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAETOY65%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T010815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8BIxUehDGKsnVPCkWAjnKbwcMkckh1ojMkqxCLaSiRAiBSXY%2B63On7GvNeps2e6qTllXP8Fde7%2B6eCsPruIBcW6yqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9HNE9O4QEEfNu%2BEKtwDasJ%2FmyTt9PfJMkSEtGJxNeNvP8N2j0tgAMrPXichlS8hWyyUNs900mPDqKiuGKMucxVFMhUjp7dwJA9h7fXenr55EBKO%2BV4xM9bSxLcOwPcVzHHB8W3p1ZnrKszErrhcTsr1yBsNfR9WBamxodGjgXnFGg6qYruDZPPLCz7oPEpZ%2Bmyp%2FrpcVAA7dX2SGChDXF%2FuU%2FPH6yfG3fLHNYNXMZ4y51kliD9QYMb9c6OYG8HTu%2B5LJjto0r98rHFTcQIP12UdRMM%2BRLstM%2B%2Fdpum8uGHU93pxvAHdOvd5%2B8lvj0SykxxZsgzvVcS5OWfJOasLiQLgLAWiGwJ%2FomneT4vB6rbDjVBGcAtUd9kzFci%2FqWY2Lf3Dhqe4s0ZKz5Cm2oJ5Raj92XlHmSzjUl0Bx%2BJ6ZMXM2WEyxxpEYzqYaYXliGIpOPozEg%2FnqpVnLUPWlseZhXuD40lprLuVwTTQnsoHZ52tUl6wDekJ0vLow8oQ6BcBWpp22cc%2BJTF%2F3S%2B8hd5qYjvL8ka1P9HSdu9%2BYG8eF0Yg9nzH08Q99g4aDCdd4HB3OXSxiCDtZXIWcryhyqtfst2zeajOpBPx3egk2JjPtMpXCcNgXvFEwAsmDXTaB%2FJztGlZcO9TXM4ADT8ws%2BTRygY6pgGyn%2FvEgvs0a565S%2F8wKH3iXE6Zk8HGNWr99vsuGBWvRsHCsoQlsK00XkSXm7LCDOE0S3Qj85Pvwdw4Ttlf6i%2Fl8rbsD7ArT0w7smiCjpxFoO8GyZ2d0LMX2aqezW5kZt99zew6gfLYxXSbivKLI31%2BslRic3XatNFIugam5Cmi7Uae6PYnJA8Vq3E6K9nhI8dS1fLgGOoP22KZ97NHGi2OSpnm9J3j&X-Amz-Signature=4c34ae3cba7fe3e117c5d6abdf91715561c509aeaef22da9633abe48474ae7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAETOY65%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T010815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8BIxUehDGKsnVPCkWAjnKbwcMkckh1ojMkqxCLaSiRAiBSXY%2B63On7GvNeps2e6qTllXP8Fde7%2B6eCsPruIBcW6yqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9HNE9O4QEEfNu%2BEKtwDasJ%2FmyTt9PfJMkSEtGJxNeNvP8N2j0tgAMrPXichlS8hWyyUNs900mPDqKiuGKMucxVFMhUjp7dwJA9h7fXenr55EBKO%2BV4xM9bSxLcOwPcVzHHB8W3p1ZnrKszErrhcTsr1yBsNfR9WBamxodGjgXnFGg6qYruDZPPLCz7oPEpZ%2Bmyp%2FrpcVAA7dX2SGChDXF%2FuU%2FPH6yfG3fLHNYNXMZ4y51kliD9QYMb9c6OYG8HTu%2B5LJjto0r98rHFTcQIP12UdRMM%2BRLstM%2B%2Fdpum8uGHU93pxvAHdOvd5%2B8lvj0SykxxZsgzvVcS5OWfJOasLiQLgLAWiGwJ%2FomneT4vB6rbDjVBGcAtUd9kzFci%2FqWY2Lf3Dhqe4s0ZKz5Cm2oJ5Raj92XlHmSzjUl0Bx%2BJ6ZMXM2WEyxxpEYzqYaYXliGIpOPozEg%2FnqpVnLUPWlseZhXuD40lprLuVwTTQnsoHZ52tUl6wDekJ0vLow8oQ6BcBWpp22cc%2BJTF%2F3S%2B8hd5qYjvL8ka1P9HSdu9%2BYG8eF0Yg9nzH08Q99g4aDCdd4HB3OXSxiCDtZXIWcryhyqtfst2zeajOpBPx3egk2JjPtMpXCcNgXvFEwAsmDXTaB%2FJztGlZcO9TXM4ADT8ws%2BTRygY6pgGyn%2FvEgvs0a565S%2F8wKH3iXE6Zk8HGNWr99vsuGBWvRsHCsoQlsK00XkSXm7LCDOE0S3Qj85Pvwdw4Ttlf6i%2Fl8rbsD7ArT0w7smiCjpxFoO8GyZ2d0LMX2aqezW5kZt99zew6gfLYxXSbivKLI31%2BslRic3XatNFIugam5Cmi7Uae6PYnJA8Vq3E6K9nhI8dS1fLgGOoP22KZ97NHGi2OSpnm9J3j&X-Amz-Signature=5027bc40a6445193d5a28322a76c745aa00b9e10ea99caee8e64aba632293064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAETOY65%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T010815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8BIxUehDGKsnVPCkWAjnKbwcMkckh1ojMkqxCLaSiRAiBSXY%2B63On7GvNeps2e6qTllXP8Fde7%2B6eCsPruIBcW6yqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC9HNE9O4QEEfNu%2BEKtwDasJ%2FmyTt9PfJMkSEtGJxNeNvP8N2j0tgAMrPXichlS8hWyyUNs900mPDqKiuGKMucxVFMhUjp7dwJA9h7fXenr55EBKO%2BV4xM9bSxLcOwPcVzHHB8W3p1ZnrKszErrhcTsr1yBsNfR9WBamxodGjgXnFGg6qYruDZPPLCz7oPEpZ%2Bmyp%2FrpcVAA7dX2SGChDXF%2FuU%2FPH6yfG3fLHNYNXMZ4y51kliD9QYMb9c6OYG8HTu%2B5LJjto0r98rHFTcQIP12UdRMM%2BRLstM%2B%2Fdpum8uGHU93pxvAHdOvd5%2B8lvj0SykxxZsgzvVcS5OWfJOasLiQLgLAWiGwJ%2FomneT4vB6rbDjVBGcAtUd9kzFci%2FqWY2Lf3Dhqe4s0ZKz5Cm2oJ5Raj92XlHmSzjUl0Bx%2BJ6ZMXM2WEyxxpEYzqYaYXliGIpOPozEg%2FnqpVnLUPWlseZhXuD40lprLuVwTTQnsoHZ52tUl6wDekJ0vLow8oQ6BcBWpp22cc%2BJTF%2F3S%2B8hd5qYjvL8ka1P9HSdu9%2BYG8eF0Yg9nzH08Q99g4aDCdd4HB3OXSxiCDtZXIWcryhyqtfst2zeajOpBPx3egk2JjPtMpXCcNgXvFEwAsmDXTaB%2FJztGlZcO9TXM4ADT8ws%2BTRygY6pgGyn%2FvEgvs0a565S%2F8wKH3iXE6Zk8HGNWr99vsuGBWvRsHCsoQlsK00XkSXm7LCDOE0S3Qj85Pvwdw4Ttlf6i%2Fl8rbsD7ArT0w7smiCjpxFoO8GyZ2d0LMX2aqezW5kZt99zew6gfLYxXSbivKLI31%2BslRic3XatNFIugam5Cmi7Uae6PYnJA8Vq3E6K9nhI8dS1fLgGOoP22KZ97NHGi2OSpnm9J3j&X-Amz-Signature=81e9a26ca6b57fd679e7a685aad3ef1407fe86bae39c8d6ceafc45377d8dce39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDASVCBA%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T010814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAz5RNIqGGLsdnq1X7OYspitRSlvd3SbXHnlLYjhJ781AiB%2BrrA1XROw5nc0Yq%2B%2FCgI8WeFewpoDCb7lbD55nBOsQCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwHGx42swA2jVWd%2FKtwD5aZJdFygpVpJyjGdo9VhoFWAZKWnLn1HuHp%2B59mfKJqteR48JovJv6XRlEAx8Uu%2FPVcJVYh7UH9JTsJaLh43izfeH8Pv7OWpQbrJkEhQ6GG8%2BQJNfHnm0qECfgANKjPjnYFB0xve8pl9Oj3%2FKeQKAx3q%2FRmugLGYWpjjn%2FTsX8EKb4MNwrfU29JLhEbTw2UOfL%2F16BRwwbFAb3H9LFIAcxvbcYrQGzTjMVII5yhufweb%2FBDiC32LAFprSMpXR6Vkmf%2BU3IYnIDA99m9HJG%2BovBpiqJzUQl%2BSyotBGmn80VzUf0DsMujeH67h%2FSByZVTDWZs%2F%2BSRPYfhMGe%2Foiw1NomVunolYoDQjL4VuCUCI8tjLBkIVXyN1i8INDkpEXsctCysVtIk7GPJZrKmCPccEjLVFhDgyRsycUda6V75XMBMtxsjlupOe%2BmNgHEbbGwU5HtRK1BJ%2FrOTxTQ92rc6CU0l31JAXCbIxvEZr1Zr0tBVXcRUVx1XnZ%2FC1VQhM%2FBb6XmST6pPPHRRYmpFjSvEIY68lz21lTZEi60ainpd1QSIQ%2FDCkPcLMfliSebR4SL1bVuMY9%2F0HKcAaU5%2F%2FY2U7HaxOHTrOih25BSWbzLUrX1l42YM8No829BSpjxEw5ODRygY6pgFY%2Bqj7RGbY2lLc8wb8Ok2tu0faGgZU3cHo67bbeto4dguYGsvsaPB2Qoh6FmIYBbSqnuQ6doCShh46EpFdOQLd8A3KCpTiDh7XexpRJa7Ci0bQ6F1gspOJlc2RLdA2qpRxMVIIs6qW%2Fulh1fBsObku2VilhW%2FG8Hz4FhXBwF%2BjfC%2BWkC%2Bx9qoAnZlUmOroZlxVSFEFV67P5QeHt4i1fAmVkWT0GVx9&X-Amz-Signature=48fa549dbfce914710f24aa0d98d41b6fd4c7dce1f82c7d937d46b3099633dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

