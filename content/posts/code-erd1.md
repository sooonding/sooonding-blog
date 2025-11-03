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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6Y6OVA%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T010432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA998NhNvsfhJqw%2FsNBFwF6AfHD%2FR50PkGOISoyxWlk3AiEA3k3Fist5ZPaPEZRf9XlZcoRcnMRKIp4gNWJmJ9ZbEk4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAFycR1z5my1tr2HgyrcA7chGqBvg33lI3oD8nGDLaFzv5qpZsMm%2FyCleLyLPcb2hsaro8qaQUA6AMF166kbY20MMHhC5Kixg130IsvsKcAVdZJefWmifUtRpHFsTNRfaDlJ7G2E2lXPj53KBS5IDJC2ZsQDL9pwveR3j%2BCyADInQLUlza1GfU5ogBQcAjkYixWfxu0LVV%2FxpESXG1N0vcqQRDINSGVyzNLoGjG5d6IZrzWl1eoMkXYTzq%2F8ESQsuX%2BnoPqCP6%2FVjyoqLmQBGSdscpMxCvY4oYj4WoUdCnxe342iCbrfxyL85l1h2Q8ILdsAk5Uin%2FUKHDI8PA5oI46iRmKeShomuj5JcSingUo9te34IDPaGyXddux0alm7zS1tev19Sgu2BsyA5ugb0eAfdP7Sjz5cqfgCcri4EtITPFGdi8%2Bk1ba6Mg7wq2GK5nK%2BoTJGb6t11Ydv9PlvbmLLCeLTyBb70voi0qJ%2B8S7qUupy87FcHr%2BHGxGR9FmS20JspwkL%2Bx6a6LRUnuF5ZDN5V5nW%2Bh%2Fv02s%2BvYmRLAN1mn2DYPxU6OSpxH8IV%2Bp9vd2de4UKNa4Lvv2TCnt%2FDj7yL8PmS1uu5hFe%2FU1MT0grrGopzoziHBsegbD95uf54mw5vTJ9PFWXkqfzMIX0n8gGOqUBKgpMdoBErXuEi%2FqRM5KQepCHwnJgnszRNUrb16AELaOz7wBaLZCkUe04Ei5W3s%2F6jcyInLjQxNfAEdFoAighw65g2Hf0lZyjGJr1MxR3QG5%2BRxmwie%2BgBTEgdmCmJcYeGwpXDLcIgtSAFozk%2FaKIHhwlwuGIlr1Hg2gIwB%2BB5F2rRL%2Bml%2FfKTG%2BBVOzOSodNTSmPzRR0mFko01sJLuu1UgL1ZuWH&X-Amz-Signature=2e489251edec6084b92d0a0ad800fea142e24c31cd5ded0be4102d6333785ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO3VYMH%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T010432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaVcgitssoyAXDfGTa%2Fd7d8skkFBGilc0y7hzH1mA9vAiBWjwKZPFgiMcyE6hAGZa8xPNysSpnw0t3f%2BfftdaJMqir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM3dlSS7o6ykZtJjkGKtwDcbeV5uI6ltZH8cgRzczzsM1RIhnO2z3gYkoRW5UrUvqa9SefbgRdikLK%2BKUhWRYzzNSrb8NmJc9QO7GOqt5OGFROSl7J3d90L%2BkeYtzumj%2FwIVG78t3IqTppAfUykKbxHI46m1PFZqwIZNw4F44vnpKkthRDswMPwqB4pDsQ638oUfBngPszxbEtQ9QAuHAyoAHX%2Bi9EnfQ3LyADR3L1JtSxnjznCR3gxSpCdmLdr2nz4mcjJAM6dT70%2BcM4%2Bx39yMe8yTNW1gJ4TLV%2FVcVw6GedlIpYi2N2Yi0YN%2F4BKHsQY1INVyR%2FXg1nhv2j3DmL5P%2BL%2BPqklbfQxu4aznqHM4Jo9U%2B55RFwombLCLkjkOcP6EwKB8e93oxYFt3ofMJH95atydlnY1Yf8Vw2YuYADw1vHMIgAJyPMy2A6YBjCyEa0GqJQl7QXfSExs%2BoOUDxNu9emYaaq5%2B30zXu6zopY5Kp8GXyqypz5h2%2BIOJog4agRzDdFWYxc9ZtOcXRL%2FZBGzM12smwdP6%2FOfLfRLi6l2E5uDKn54B5QKLD6OoB5ifHuFSsXI3riqO%2B%2FABAyYQStDcjsLyC9P0LbxWf%2FReg%2BBj4iiFXuq2XKXt6s%2FJW9FEsFy%2BKAo1QjRwS7KMw4%2FKfyAY6pgHxoQu7NCikQ9sx3T7HY65cyzTfh37bQuhwAcd5zsXEPtq%2FQzeEbsmCa2H0aNz7Zf7NjvaSJTgqdiTU8CGRprDoS0misPTuaKZcMTccN8jTxpkwgquAd3es5%2B17BgF0CYQTcVGr%2BeSu1KPCxuHpydI6WRZ2eJvH4PSdMVzwAOFzcjy7q8bwZYcqqTWQBhF%2B4fUASp9%2FFHEDQ1B7YOx%2BPME%2Bhiaf951k&X-Amz-Signature=7eb63e646efa00082d45c236a2093159c7d2ec0528edc62724e36f3ef0d35fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO3VYMH%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T010432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaVcgitssoyAXDfGTa%2Fd7d8skkFBGilc0y7hzH1mA9vAiBWjwKZPFgiMcyE6hAGZa8xPNysSpnw0t3f%2BfftdaJMqir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM3dlSS7o6ykZtJjkGKtwDcbeV5uI6ltZH8cgRzczzsM1RIhnO2z3gYkoRW5UrUvqa9SefbgRdikLK%2BKUhWRYzzNSrb8NmJc9QO7GOqt5OGFROSl7J3d90L%2BkeYtzumj%2FwIVG78t3IqTppAfUykKbxHI46m1PFZqwIZNw4F44vnpKkthRDswMPwqB4pDsQ638oUfBngPszxbEtQ9QAuHAyoAHX%2Bi9EnfQ3LyADR3L1JtSxnjznCR3gxSpCdmLdr2nz4mcjJAM6dT70%2BcM4%2Bx39yMe8yTNW1gJ4TLV%2FVcVw6GedlIpYi2N2Yi0YN%2F4BKHsQY1INVyR%2FXg1nhv2j3DmL5P%2BL%2BPqklbfQxu4aznqHM4Jo9U%2B55RFwombLCLkjkOcP6EwKB8e93oxYFt3ofMJH95atydlnY1Yf8Vw2YuYADw1vHMIgAJyPMy2A6YBjCyEa0GqJQl7QXfSExs%2BoOUDxNu9emYaaq5%2B30zXu6zopY5Kp8GXyqypz5h2%2BIOJog4agRzDdFWYxc9ZtOcXRL%2FZBGzM12smwdP6%2FOfLfRLi6l2E5uDKn54B5QKLD6OoB5ifHuFSsXI3riqO%2B%2FABAyYQStDcjsLyC9P0LbxWf%2FReg%2BBj4iiFXuq2XKXt6s%2FJW9FEsFy%2BKAo1QjRwS7KMw4%2FKfyAY6pgHxoQu7NCikQ9sx3T7HY65cyzTfh37bQuhwAcd5zsXEPtq%2FQzeEbsmCa2H0aNz7Zf7NjvaSJTgqdiTU8CGRprDoS0misPTuaKZcMTccN8jTxpkwgquAd3es5%2B17BgF0CYQTcVGr%2BeSu1KPCxuHpydI6WRZ2eJvH4PSdMVzwAOFzcjy7q8bwZYcqqTWQBhF%2B4fUASp9%2FFHEDQ1B7YOx%2BPME%2Bhiaf951k&X-Amz-Signature=a0b04d061c47c65419f0929cb5931c7f53d18ebf2bc46be7b2b3194334fb9d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO3VYMH%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T010432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaVcgitssoyAXDfGTa%2Fd7d8skkFBGilc0y7hzH1mA9vAiBWjwKZPFgiMcyE6hAGZa8xPNysSpnw0t3f%2BfftdaJMqir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM3dlSS7o6ykZtJjkGKtwDcbeV5uI6ltZH8cgRzczzsM1RIhnO2z3gYkoRW5UrUvqa9SefbgRdikLK%2BKUhWRYzzNSrb8NmJc9QO7GOqt5OGFROSl7J3d90L%2BkeYtzumj%2FwIVG78t3IqTppAfUykKbxHI46m1PFZqwIZNw4F44vnpKkthRDswMPwqB4pDsQ638oUfBngPszxbEtQ9QAuHAyoAHX%2Bi9EnfQ3LyADR3L1JtSxnjznCR3gxSpCdmLdr2nz4mcjJAM6dT70%2BcM4%2Bx39yMe8yTNW1gJ4TLV%2FVcVw6GedlIpYi2N2Yi0YN%2F4BKHsQY1INVyR%2FXg1nhv2j3DmL5P%2BL%2BPqklbfQxu4aznqHM4Jo9U%2B55RFwombLCLkjkOcP6EwKB8e93oxYFt3ofMJH95atydlnY1Yf8Vw2YuYADw1vHMIgAJyPMy2A6YBjCyEa0GqJQl7QXfSExs%2BoOUDxNu9emYaaq5%2B30zXu6zopY5Kp8GXyqypz5h2%2BIOJog4agRzDdFWYxc9ZtOcXRL%2FZBGzM12smwdP6%2FOfLfRLi6l2E5uDKn54B5QKLD6OoB5ifHuFSsXI3riqO%2B%2FABAyYQStDcjsLyC9P0LbxWf%2FReg%2BBj4iiFXuq2XKXt6s%2FJW9FEsFy%2BKAo1QjRwS7KMw4%2FKfyAY6pgHxoQu7NCikQ9sx3T7HY65cyzTfh37bQuhwAcd5zsXEPtq%2FQzeEbsmCa2H0aNz7Zf7NjvaSJTgqdiTU8CGRprDoS0misPTuaKZcMTccN8jTxpkwgquAd3es5%2B17BgF0CYQTcVGr%2BeSu1KPCxuHpydI6WRZ2eJvH4PSdMVzwAOFzcjy7q8bwZYcqqTWQBhF%2B4fUASp9%2FFHEDQ1B7YOx%2BPME%2Bhiaf951k&X-Amz-Signature=97fa94f0319a7fd1e1cc5a71dcc79040e4696938ac17f192db38aa59f6032315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO3VYMH%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T010432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaVcgitssoyAXDfGTa%2Fd7d8skkFBGilc0y7hzH1mA9vAiBWjwKZPFgiMcyE6hAGZa8xPNysSpnw0t3f%2BfftdaJMqir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM3dlSS7o6ykZtJjkGKtwDcbeV5uI6ltZH8cgRzczzsM1RIhnO2z3gYkoRW5UrUvqa9SefbgRdikLK%2BKUhWRYzzNSrb8NmJc9QO7GOqt5OGFROSl7J3d90L%2BkeYtzumj%2FwIVG78t3IqTppAfUykKbxHI46m1PFZqwIZNw4F44vnpKkthRDswMPwqB4pDsQ638oUfBngPszxbEtQ9QAuHAyoAHX%2Bi9EnfQ3LyADR3L1JtSxnjznCR3gxSpCdmLdr2nz4mcjJAM6dT70%2BcM4%2Bx39yMe8yTNW1gJ4TLV%2FVcVw6GedlIpYi2N2Yi0YN%2F4BKHsQY1INVyR%2FXg1nhv2j3DmL5P%2BL%2BPqklbfQxu4aznqHM4Jo9U%2B55RFwombLCLkjkOcP6EwKB8e93oxYFt3ofMJH95atydlnY1Yf8Vw2YuYADw1vHMIgAJyPMy2A6YBjCyEa0GqJQl7QXfSExs%2BoOUDxNu9emYaaq5%2B30zXu6zopY5Kp8GXyqypz5h2%2BIOJog4agRzDdFWYxc9ZtOcXRL%2FZBGzM12smwdP6%2FOfLfRLi6l2E5uDKn54B5QKLD6OoB5ifHuFSsXI3riqO%2B%2FABAyYQStDcjsLyC9P0LbxWf%2FReg%2BBj4iiFXuq2XKXt6s%2FJW9FEsFy%2BKAo1QjRwS7KMw4%2FKfyAY6pgHxoQu7NCikQ9sx3T7HY65cyzTfh37bQuhwAcd5zsXEPtq%2FQzeEbsmCa2H0aNz7Zf7NjvaSJTgqdiTU8CGRprDoS0misPTuaKZcMTccN8jTxpkwgquAd3es5%2B17BgF0CYQTcVGr%2BeSu1KPCxuHpydI6WRZ2eJvH4PSdMVzwAOFzcjy7q8bwZYcqqTWQBhF%2B4fUASp9%2FFHEDQ1B7YOx%2BPME%2Bhiaf951k&X-Amz-Signature=53d3eda5a911ec0491b529501a89d5508642170acdf91004a4c50a02a1dc63f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPO3VYMH%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T010432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaVcgitssoyAXDfGTa%2Fd7d8skkFBGilc0y7hzH1mA9vAiBWjwKZPFgiMcyE6hAGZa8xPNysSpnw0t3f%2BfftdaJMqir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM3dlSS7o6ykZtJjkGKtwDcbeV5uI6ltZH8cgRzczzsM1RIhnO2z3gYkoRW5UrUvqa9SefbgRdikLK%2BKUhWRYzzNSrb8NmJc9QO7GOqt5OGFROSl7J3d90L%2BkeYtzumj%2FwIVG78t3IqTppAfUykKbxHI46m1PFZqwIZNw4F44vnpKkthRDswMPwqB4pDsQ638oUfBngPszxbEtQ9QAuHAyoAHX%2Bi9EnfQ3LyADR3L1JtSxnjznCR3gxSpCdmLdr2nz4mcjJAM6dT70%2BcM4%2Bx39yMe8yTNW1gJ4TLV%2FVcVw6GedlIpYi2N2Yi0YN%2F4BKHsQY1INVyR%2FXg1nhv2j3DmL5P%2BL%2BPqklbfQxu4aznqHM4Jo9U%2B55RFwombLCLkjkOcP6EwKB8e93oxYFt3ofMJH95atydlnY1Yf8Vw2YuYADw1vHMIgAJyPMy2A6YBjCyEa0GqJQl7QXfSExs%2BoOUDxNu9emYaaq5%2B30zXu6zopY5Kp8GXyqypz5h2%2BIOJog4agRzDdFWYxc9ZtOcXRL%2FZBGzM12smwdP6%2FOfLfRLi6l2E5uDKn54B5QKLD6OoB5ifHuFSsXI3riqO%2B%2FABAyYQStDcjsLyC9P0LbxWf%2FReg%2BBj4iiFXuq2XKXt6s%2FJW9FEsFy%2BKAo1QjRwS7KMw4%2FKfyAY6pgHxoQu7NCikQ9sx3T7HY65cyzTfh37bQuhwAcd5zsXEPtq%2FQzeEbsmCa2H0aNz7Zf7NjvaSJTgqdiTU8CGRprDoS0misPTuaKZcMTccN8jTxpkwgquAd3es5%2B17BgF0CYQTcVGr%2BeSu1KPCxuHpydI6WRZ2eJvH4PSdMVzwAOFzcjy7q8bwZYcqqTWQBhF%2B4fUASp9%2FFHEDQ1B7YOx%2BPME%2Bhiaf951k&X-Amz-Signature=09748cd31cfc5fff4dac6ab3d4228df483518a4fec5b8e227ce64c331d91644b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6Y6OVA%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T010432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA998NhNvsfhJqw%2FsNBFwF6AfHD%2FR50PkGOISoyxWlk3AiEA3k3Fist5ZPaPEZRf9XlZcoRcnMRKIp4gNWJmJ9ZbEk4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAFycR1z5my1tr2HgyrcA7chGqBvg33lI3oD8nGDLaFzv5qpZsMm%2FyCleLyLPcb2hsaro8qaQUA6AMF166kbY20MMHhC5Kixg130IsvsKcAVdZJefWmifUtRpHFsTNRfaDlJ7G2E2lXPj53KBS5IDJC2ZsQDL9pwveR3j%2BCyADInQLUlza1GfU5ogBQcAjkYixWfxu0LVV%2FxpESXG1N0vcqQRDINSGVyzNLoGjG5d6IZrzWl1eoMkXYTzq%2F8ESQsuX%2BnoPqCP6%2FVjyoqLmQBGSdscpMxCvY4oYj4WoUdCnxe342iCbrfxyL85l1h2Q8ILdsAk5Uin%2FUKHDI8PA5oI46iRmKeShomuj5JcSingUo9te34IDPaGyXddux0alm7zS1tev19Sgu2BsyA5ugb0eAfdP7Sjz5cqfgCcri4EtITPFGdi8%2Bk1ba6Mg7wq2GK5nK%2BoTJGb6t11Ydv9PlvbmLLCeLTyBb70voi0qJ%2B8S7qUupy87FcHr%2BHGxGR9FmS20JspwkL%2Bx6a6LRUnuF5ZDN5V5nW%2Bh%2Fv02s%2BvYmRLAN1mn2DYPxU6OSpxH8IV%2Bp9vd2de4UKNa4Lvv2TCnt%2FDj7yL8PmS1uu5hFe%2FU1MT0grrGopzoziHBsegbD95uf54mw5vTJ9PFWXkqfzMIX0n8gGOqUBKgpMdoBErXuEi%2FqRM5KQepCHwnJgnszRNUrb16AELaOz7wBaLZCkUe04Ei5W3s%2F6jcyInLjQxNfAEdFoAighw65g2Hf0lZyjGJr1MxR3QG5%2BRxmwie%2BgBTEgdmCmJcYeGwpXDLcIgtSAFozk%2FaKIHhwlwuGIlr1Hg2gIwB%2BB5F2rRL%2Bml%2FfKTG%2BBVOzOSodNTSmPzRR0mFko01sJLuu1UgL1ZuWH&X-Amz-Signature=b2a621adc27d13b0c66acbcb6d39f5de0ec78f7c55ec9bc18709c648d443e650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

