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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625JTPKTI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQfmgMViRmL6P%2BmGxS7OiWqQqWGuddwYzvsNHTZWobaAIhAPujlBSHp7krYgpojqQxreqrX5nVz%2Febpg14FD4MNUmwKv8DCHgQABoMNjM3NDIzMTgzODA1IgwjkQ68Y8hfTlg%2B2Z4q3ANZ3DxdDezO2FdgYSBxPm5TqwZctA1FPAV4QDz4gUT70kqa5n121397bulKpfZZZeVs1i01N9LsFxrPh0ToFEe6%2FCwMmCB9HCVZt15uZ73dyzoyBFH%2BRjS%2FYlo37Nc3gw1BDwi43KNUbzElsKfJWDQhxWwGqxbqLll67OXNy1gYbQpvI8M39ooENEHlHNOagIkKeh80gIxr2ofxJPQ9htCFN8E%2F3WXOKeGq672XUDWQH%2BHHiGWPC4lwC6z%2FzN4tYrci8PeIY35As7TrLPNuCclWKRqwH%2B%2BOfdCKbnbblwTPX0HMgUEu6LwGux0JPJiXVNFLwBuNAUlRtCK5JV8GAIL%2FIbI7QQe%2BN0s2d6ZZeOI1ErlbGBFHB%2FUkUhpa5LogGP6nsPsNaBaPOpX5wulROD2HO0PYfv6OhQrjpS4xxoAX6v%2Fct%2ByCEdMpgE6z342ZVxZkytzT2u7MfqMdfBK0LWFD2aQlpmC9IrvscAhkM5Lsy%2B9uctv3vsZcjNoRnNmtoVrEDwM5EXkjAOnEVa3iz7Mo9%2FekpwVeaP1cq15PqKzU%2B25VBfmaEuh6LvwJZTssBrUmpV7FR3jowZq0atBOhWjPIK2VFfYogqgseFPcWLumIuLLjFnRAjAyoVi5mDDhzsHKBjqkAQGisY29OaCpbNolYvqPqBWgBKwjaQRPh4oSEgsUb0uRm8SwOpNaDcss7r%2BULHiPqRhAIVTatCVuV47m%2FO6S6ha90OfAMnWDz8ni9p6ICwf6TeowWsUQetNUETWt3xAOnhrGQk3nHB3tvrGZ9pMJcbRFW5Y5y%2FxjVOpTvNsXq%2Fw5oGu2mQZ4kwsoRhjo6HyJlRlCRPm2KxM934YBjVleNIbtbEKV&X-Amz-Signature=9d5bc03edf11b3c24a174c1f8bcfa4eaa252016c83e8d81045e5c87c85a64170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDVEEC4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaef4utOAsq75PPgEsbRYFlk4F%2Fs7l0VJ63L3JKsbIrwIhAMUYjaidbeZS43P0sef1emUXqZlpVNFytZ6lwHu7BtAVKv8DCHkQABoMNjM3NDIzMTgzODA1IgwRhMSQq1jKSAVVUZEq3AO3XM5uwhM6OecbXiiDP0tnK481X9gJsLnV4gjz2%2B0ZfB9g4%2FB7VK2r41L2oRLTKt8S4ieVs1f6tbKRgxpZueVn7FfQ%2Fn3QQtiOnRsY0po4lhFJWbhYRvhRLlLX4HYt72%2FAXq93NFkjNRSQ1PxvYAsGOz1S1zhJHOa4Gn5cPG9EA46t18S%2FDqTlIg3m5fquPMZeFEKU4nU46Vv49xGso%2B19C7dTkERsJjdyQXk3R%2BghDrEMJdmvJ1bKQEaO5zl3ooMqxuiIVTpvvwQOGCL6tuhIWczdK6tXn9qHM22LbusTniNYPck5eVK0cR14AkKuQc5ikv6I55BpsVZgt0DuUTpRWj9Ebvy2hga05V2ekDxy59an96R8A3D2QrxyZHGVcQZ%2FEWi%2Bb18I6tyJimiYNrJhu1BTZ5gwZzl98%2B93ahGVMHQVcszJbpsC6hxgWLFUW98WdY9w3Ycwygjq1L0n1YiO9rJC%2BdP%2FnWHINtqOGuird9dbFBos9Fsv5CXCf7kYXqLo8qLhVV5pFcimMJkeOq%2BvcoFdr0GjqxbHl82gbsCR%2FWa6IoZ62vLpDE1TGCyK518TxXefju1vat9YMDqYj%2B%2BAI9Ob1SsguRf9dDID10c5Af5HY9AKBpFn1R6wjDD218HKBjqkAfYFcf66EF%2F%2BIUOrVWT47OZp%2B15CkJ5Fr6daiqfL7adCogpT3inUv5ew8AMJZqyIwIJHUP2cE3Gqpv4y5NMZbrR2oi7%2BOSk%2FwDsMnck%2FadTDrd8QckUuBE643a4Jf5Ayt%2FWbVT7gyF7e6KHOW28FruOmY%2BUCU71HO2gzm1goBeyfOm79CEZJxKpj%2BH59OBMOYKv7TBIr08EZQvQ3iYlOL4sJmMov&X-Amz-Signature=b9ec0f23a8a3895d6f0aff7f9af449f0c3d705862401cbfb1f37d771d97920d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDVEEC4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaef4utOAsq75PPgEsbRYFlk4F%2Fs7l0VJ63L3JKsbIrwIhAMUYjaidbeZS43P0sef1emUXqZlpVNFytZ6lwHu7BtAVKv8DCHkQABoMNjM3NDIzMTgzODA1IgwRhMSQq1jKSAVVUZEq3AO3XM5uwhM6OecbXiiDP0tnK481X9gJsLnV4gjz2%2B0ZfB9g4%2FB7VK2r41L2oRLTKt8S4ieVs1f6tbKRgxpZueVn7FfQ%2Fn3QQtiOnRsY0po4lhFJWbhYRvhRLlLX4HYt72%2FAXq93NFkjNRSQ1PxvYAsGOz1S1zhJHOa4Gn5cPG9EA46t18S%2FDqTlIg3m5fquPMZeFEKU4nU46Vv49xGso%2B19C7dTkERsJjdyQXk3R%2BghDrEMJdmvJ1bKQEaO5zl3ooMqxuiIVTpvvwQOGCL6tuhIWczdK6tXn9qHM22LbusTniNYPck5eVK0cR14AkKuQc5ikv6I55BpsVZgt0DuUTpRWj9Ebvy2hga05V2ekDxy59an96R8A3D2QrxyZHGVcQZ%2FEWi%2Bb18I6tyJimiYNrJhu1BTZ5gwZzl98%2B93ahGVMHQVcszJbpsC6hxgWLFUW98WdY9w3Ycwygjq1L0n1YiO9rJC%2BdP%2FnWHINtqOGuird9dbFBos9Fsv5CXCf7kYXqLo8qLhVV5pFcimMJkeOq%2BvcoFdr0GjqxbHl82gbsCR%2FWa6IoZ62vLpDE1TGCyK518TxXefju1vat9YMDqYj%2B%2BAI9Ob1SsguRf9dDID10c5Af5HY9AKBpFn1R6wjDD218HKBjqkAfYFcf66EF%2F%2BIUOrVWT47OZp%2B15CkJ5Fr6daiqfL7adCogpT3inUv5ew8AMJZqyIwIJHUP2cE3Gqpv4y5NMZbrR2oi7%2BOSk%2FwDsMnck%2FadTDrd8QckUuBE643a4Jf5Ayt%2FWbVT7gyF7e6KHOW28FruOmY%2BUCU71HO2gzm1goBeyfOm79CEZJxKpj%2BH59OBMOYKv7TBIr08EZQvQ3iYlOL4sJmMov&X-Amz-Signature=e6763f33959bfb4b38929868c1259f4c0eb93a4f9257cd9e88fdc74eae035b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDVEEC4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaef4utOAsq75PPgEsbRYFlk4F%2Fs7l0VJ63L3JKsbIrwIhAMUYjaidbeZS43P0sef1emUXqZlpVNFytZ6lwHu7BtAVKv8DCHkQABoMNjM3NDIzMTgzODA1IgwRhMSQq1jKSAVVUZEq3AO3XM5uwhM6OecbXiiDP0tnK481X9gJsLnV4gjz2%2B0ZfB9g4%2FB7VK2r41L2oRLTKt8S4ieVs1f6tbKRgxpZueVn7FfQ%2Fn3QQtiOnRsY0po4lhFJWbhYRvhRLlLX4HYt72%2FAXq93NFkjNRSQ1PxvYAsGOz1S1zhJHOa4Gn5cPG9EA46t18S%2FDqTlIg3m5fquPMZeFEKU4nU46Vv49xGso%2B19C7dTkERsJjdyQXk3R%2BghDrEMJdmvJ1bKQEaO5zl3ooMqxuiIVTpvvwQOGCL6tuhIWczdK6tXn9qHM22LbusTniNYPck5eVK0cR14AkKuQc5ikv6I55BpsVZgt0DuUTpRWj9Ebvy2hga05V2ekDxy59an96R8A3D2QrxyZHGVcQZ%2FEWi%2Bb18I6tyJimiYNrJhu1BTZ5gwZzl98%2B93ahGVMHQVcszJbpsC6hxgWLFUW98WdY9w3Ycwygjq1L0n1YiO9rJC%2BdP%2FnWHINtqOGuird9dbFBos9Fsv5CXCf7kYXqLo8qLhVV5pFcimMJkeOq%2BvcoFdr0GjqxbHl82gbsCR%2FWa6IoZ62vLpDE1TGCyK518TxXefju1vat9YMDqYj%2B%2BAI9Ob1SsguRf9dDID10c5Af5HY9AKBpFn1R6wjDD218HKBjqkAfYFcf66EF%2F%2BIUOrVWT47OZp%2B15CkJ5Fr6daiqfL7adCogpT3inUv5ew8AMJZqyIwIJHUP2cE3Gqpv4y5NMZbrR2oi7%2BOSk%2FwDsMnck%2FadTDrd8QckUuBE643a4Jf5Ayt%2FWbVT7gyF7e6KHOW28FruOmY%2BUCU71HO2gzm1goBeyfOm79CEZJxKpj%2BH59OBMOYKv7TBIr08EZQvQ3iYlOL4sJmMov&X-Amz-Signature=fd2b7fca8511580a878bc8a3e084b83e32e712ca87d940421624ffebcc0d8838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDVEEC4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaef4utOAsq75PPgEsbRYFlk4F%2Fs7l0VJ63L3JKsbIrwIhAMUYjaidbeZS43P0sef1emUXqZlpVNFytZ6lwHu7BtAVKv8DCHkQABoMNjM3NDIzMTgzODA1IgwRhMSQq1jKSAVVUZEq3AO3XM5uwhM6OecbXiiDP0tnK481X9gJsLnV4gjz2%2B0ZfB9g4%2FB7VK2r41L2oRLTKt8S4ieVs1f6tbKRgxpZueVn7FfQ%2Fn3QQtiOnRsY0po4lhFJWbhYRvhRLlLX4HYt72%2FAXq93NFkjNRSQ1PxvYAsGOz1S1zhJHOa4Gn5cPG9EA46t18S%2FDqTlIg3m5fquPMZeFEKU4nU46Vv49xGso%2B19C7dTkERsJjdyQXk3R%2BghDrEMJdmvJ1bKQEaO5zl3ooMqxuiIVTpvvwQOGCL6tuhIWczdK6tXn9qHM22LbusTniNYPck5eVK0cR14AkKuQc5ikv6I55BpsVZgt0DuUTpRWj9Ebvy2hga05V2ekDxy59an96R8A3D2QrxyZHGVcQZ%2FEWi%2Bb18I6tyJimiYNrJhu1BTZ5gwZzl98%2B93ahGVMHQVcszJbpsC6hxgWLFUW98WdY9w3Ycwygjq1L0n1YiO9rJC%2BdP%2FnWHINtqOGuird9dbFBos9Fsv5CXCf7kYXqLo8qLhVV5pFcimMJkeOq%2BvcoFdr0GjqxbHl82gbsCR%2FWa6IoZ62vLpDE1TGCyK518TxXefju1vat9YMDqYj%2B%2BAI9Ob1SsguRf9dDID10c5Af5HY9AKBpFn1R6wjDD218HKBjqkAfYFcf66EF%2F%2BIUOrVWT47OZp%2B15CkJ5Fr6daiqfL7adCogpT3inUv5ew8AMJZqyIwIJHUP2cE3Gqpv4y5NMZbrR2oi7%2BOSk%2FwDsMnck%2FadTDrd8QckUuBE643a4Jf5Ayt%2FWbVT7gyF7e6KHOW28FruOmY%2BUCU71HO2gzm1goBeyfOm79CEZJxKpj%2BH59OBMOYKv7TBIr08EZQvQ3iYlOL4sJmMov&X-Amz-Signature=7f5bba81a68c8c8f5e18e02db26d0bb68387f927312bb84e66662f6ceef721e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDVEEC4%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaef4utOAsq75PPgEsbRYFlk4F%2Fs7l0VJ63L3JKsbIrwIhAMUYjaidbeZS43P0sef1emUXqZlpVNFytZ6lwHu7BtAVKv8DCHkQABoMNjM3NDIzMTgzODA1IgwRhMSQq1jKSAVVUZEq3AO3XM5uwhM6OecbXiiDP0tnK481X9gJsLnV4gjz2%2B0ZfB9g4%2FB7VK2r41L2oRLTKt8S4ieVs1f6tbKRgxpZueVn7FfQ%2Fn3QQtiOnRsY0po4lhFJWbhYRvhRLlLX4HYt72%2FAXq93NFkjNRSQ1PxvYAsGOz1S1zhJHOa4Gn5cPG9EA46t18S%2FDqTlIg3m5fquPMZeFEKU4nU46Vv49xGso%2B19C7dTkERsJjdyQXk3R%2BghDrEMJdmvJ1bKQEaO5zl3ooMqxuiIVTpvvwQOGCL6tuhIWczdK6tXn9qHM22LbusTniNYPck5eVK0cR14AkKuQc5ikv6I55BpsVZgt0DuUTpRWj9Ebvy2hga05V2ekDxy59an96R8A3D2QrxyZHGVcQZ%2FEWi%2Bb18I6tyJimiYNrJhu1BTZ5gwZzl98%2B93ahGVMHQVcszJbpsC6hxgWLFUW98WdY9w3Ycwygjq1L0n1YiO9rJC%2BdP%2FnWHINtqOGuird9dbFBos9Fsv5CXCf7kYXqLo8qLhVV5pFcimMJkeOq%2BvcoFdr0GjqxbHl82gbsCR%2FWa6IoZ62vLpDE1TGCyK518TxXefju1vat9YMDqYj%2B%2BAI9Ob1SsguRf9dDID10c5Af5HY9AKBpFn1R6wjDD218HKBjqkAfYFcf66EF%2F%2BIUOrVWT47OZp%2B15CkJ5Fr6daiqfL7adCogpT3inUv5ew8AMJZqyIwIJHUP2cE3Gqpv4y5NMZbrR2oi7%2BOSk%2FwDsMnck%2FadTDrd8QckUuBE643a4Jf5Ayt%2FWbVT7gyF7e6KHOW28FruOmY%2BUCU71HO2gzm1goBeyfOm79CEZJxKpj%2BH59OBMOYKv7TBIr08EZQvQ3iYlOL4sJmMov&X-Amz-Signature=be80632002635ba0caa84c134199b65c91936cfcc12961113107b67a26e05389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625JTPKTI%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQfmgMViRmL6P%2BmGxS7OiWqQqWGuddwYzvsNHTZWobaAIhAPujlBSHp7krYgpojqQxreqrX5nVz%2Febpg14FD4MNUmwKv8DCHgQABoMNjM3NDIzMTgzODA1IgwjkQ68Y8hfTlg%2B2Z4q3ANZ3DxdDezO2FdgYSBxPm5TqwZctA1FPAV4QDz4gUT70kqa5n121397bulKpfZZZeVs1i01N9LsFxrPh0ToFEe6%2FCwMmCB9HCVZt15uZ73dyzoyBFH%2BRjS%2FYlo37Nc3gw1BDwi43KNUbzElsKfJWDQhxWwGqxbqLll67OXNy1gYbQpvI8M39ooENEHlHNOagIkKeh80gIxr2ofxJPQ9htCFN8E%2F3WXOKeGq672XUDWQH%2BHHiGWPC4lwC6z%2FzN4tYrci8PeIY35As7TrLPNuCclWKRqwH%2B%2BOfdCKbnbblwTPX0HMgUEu6LwGux0JPJiXVNFLwBuNAUlRtCK5JV8GAIL%2FIbI7QQe%2BN0s2d6ZZeOI1ErlbGBFHB%2FUkUhpa5LogGP6nsPsNaBaPOpX5wulROD2HO0PYfv6OhQrjpS4xxoAX6v%2Fct%2ByCEdMpgE6z342ZVxZkytzT2u7MfqMdfBK0LWFD2aQlpmC9IrvscAhkM5Lsy%2B9uctv3vsZcjNoRnNmtoVrEDwM5EXkjAOnEVa3iz7Mo9%2FekpwVeaP1cq15PqKzU%2B25VBfmaEuh6LvwJZTssBrUmpV7FR3jowZq0atBOhWjPIK2VFfYogqgseFPcWLumIuLLjFnRAjAyoVi5mDDhzsHKBjqkAQGisY29OaCpbNolYvqPqBWgBKwjaQRPh4oSEgsUb0uRm8SwOpNaDcss7r%2BULHiPqRhAIVTatCVuV47m%2FO6S6ha90OfAMnWDz8ni9p6ICwf6TeowWsUQetNUETWt3xAOnhrGQk3nHB3tvrGZ9pMJcbRFW5Y5y%2FxjVOpTvNsXq%2Fw5oGu2mQZ4kwsoRhjo6HyJlRlCRPm2KxM934YBjVleNIbtbEKV&X-Amz-Signature=bca7658fa276ff3017388522a7942bccb7e7c9fe22a5fe2ea21b46faf4ded90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

