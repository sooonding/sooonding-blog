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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBYKW7A%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T010325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfej%2BNpUGQT7saK6arTIhb1V6ZLMsFs7slibx%2FfOgMvAiEAthKTq%2BLd3QoC40FuAMAB8eoZ7A0pOkHOndLhERFhiV4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BYcC9ZWiW6BSq8uyrcA%2FpSfBcbCQRfG6BwISYMd5u1V7cysT6TZSSmLT%2FbVND6nMV0Pim5WQbjJ1o2QqJ9AD5k9hXZb4ok6%2BAWoX5Y0DzdZn8eNsAg3Y0%2BUPf1onBjQRhqmiT16Kjg5Fv%2FBe%2FD%2B0l4xwNf7bO3hHbygvIWt%2FApZpB6zux0Oigw6UhS6bqtvfeh7j0Q2NoRK5fNX%2BaM%2FR40JLf%2FRUDIcuhrSDg983reAPaxqehqCBH1IMWq5AZZt1%2F5M5cFaxJU69n6cIuZHCawwWPyG%2F8GrUZ%2F5FuTPzs4YCA9yl4Tt5O6UtA%2BaYR%2BT9Mi4A4LjikL3vtQv7wao8YPNUDCmdWgvefe0bJRzxOoH3qatzdMa9m8iWdL24xkafTvczdSQSsBtW5NdbaKwfmqKaR5QYkFn0DUKyz9ywNWHn6L8epJegGjwlaOcKYOWplaACOFZMFHhju6xOyxjkf9CxWo%2BAIG6ZulTkRTYHCL49EeM%2FMu7E%2FcMBU45wYiq8ntWy%2B6qcQxdlVkkNHc%2FifJlac5vbdW0Bx5VQL4GFIrVuChGaN8CBoeK0y4W2c1gTPQ1T2W3E0UmuvGozJ1YL5pZogXSHMM6lAAYZa4w9ZSsdUN0XWa6UeFgJaGL0rpF%2FJR1SbD0XttCOuUMOGYjcoGOqUBR%2FCHMGG9Wo%2Bkq61F7I3qPONmF14QKBuepKU%2FGCYCP%2BeQX4rKoXhdnWOeX0eyL%2F%2BjqOOkYNE0VfVHAE4esh9m2wrerko2gVOJD61weRxofrfIZq9SUQGT9usD%2FILjBv46I3farQnOiLim2v%2B91UhPltul6%2BfODwNa8QBUEi9Pa3yHDuFtFB9tPDbY7ldjQDTTYfrnykeBysGwRI3KblDz1GeyuDy4&X-Amz-Signature=1f8fd03987883a527563ebe22d8e27d023fa449cc1b0e3e54f3df65f88aa86ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQQCSZW%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T010325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjphTDsEKzcCyg7Jp7jUP3FHrJ%2F8%2BDmkMy1nhYyiuv%2BAiBkh4EjF2pKoG0zizyP9dGJqAQnxTyii2xMrZsh2XQnbyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcABxCdSPKakrZEDKtwD6wEu6P2ctW3i%2BP4UI4VeQxne1Aiut98AHUTINJmpW40t3ctgkeI3r%2BvGLQPuYSzL%2FDXGlemwbcCthBrBvoyTXOFBl%2FIww%2Fs8HUtaohP%2Fk%2F3w93Cro5PUcrFjmyviWIkS0x%2BfMvy%2FJFvrNU4fNvY0ToYkETmQrXobOvCwR9aLRXhoJB0KvV5%2BmVal7yqZxIjuWqwSJqtN2bPheFKL7c5Bp2O%2BAwiNXzH0gly0D0mt17gdR7gwqTDABredARrWjBLUDqltYKGsnWGrMqGZ8g3QCrigDMBQ6IP06SkH%2BtJnlHln%2Bydt7boZ%2FCHUopyhhPbhcn4UgMg8HBEU68ETvvI08s4TXILEyGAtEDTWFCUuTKlbS7ZlEMFnImf%2FlRFmr%2FCZyCZxI7ogLvuOKgiuJN%2BWUL%2BnjATs2Y7m%2BTnTK6jKuLP0ZwYUnaqDtArHeJl0O4vHUkUhG5sNbaAHVGrPNJsPjH5blzgUBaGALOjjS8HafuAXAoBkmLaTykIsw%2BWSRALfWxlS4m1DnuadI6vPFvls8Wsjd%2BLrPLAcFaoBKlcGHnBGE8fSGbrg2%2BOwu69aebeNp3tmqZuGQATjPth6%2BB5auJ8ftWcHksMwXo1a43grjvln0WQ3AXLfTbxJJbsw3piNygY6pgEG51OSd5MYqIqJmIdMl2RqgP8ye4fg42W%2FJ62QVOnRSAHbu7vvxzXWnArz%2Bt%2FmJiVrd8Ad3YQq%2Bt2%2BmDpINyofxDrujAz5zPv0p38o4zW5YNzeJ1NDkGnp54UZkO4RPlWShGtY0Jv987OdgrWQOqUJG9ujcD3KCzs%2FQ9%2BdWu2GPnzkpG9CNnSSKqnmIi%2FIo4ksqhYs2a3%2FBDPhoeXsdnd2YRZtDRkd&X-Amz-Signature=ce05eb320d2fde66665fde1f2e56cfe7bfc9495c02dfd38d55f5985cc7a28117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQQCSZW%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T010325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjphTDsEKzcCyg7Jp7jUP3FHrJ%2F8%2BDmkMy1nhYyiuv%2BAiBkh4EjF2pKoG0zizyP9dGJqAQnxTyii2xMrZsh2XQnbyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcABxCdSPKakrZEDKtwD6wEu6P2ctW3i%2BP4UI4VeQxne1Aiut98AHUTINJmpW40t3ctgkeI3r%2BvGLQPuYSzL%2FDXGlemwbcCthBrBvoyTXOFBl%2FIww%2Fs8HUtaohP%2Fk%2F3w93Cro5PUcrFjmyviWIkS0x%2BfMvy%2FJFvrNU4fNvY0ToYkETmQrXobOvCwR9aLRXhoJB0KvV5%2BmVal7yqZxIjuWqwSJqtN2bPheFKL7c5Bp2O%2BAwiNXzH0gly0D0mt17gdR7gwqTDABredARrWjBLUDqltYKGsnWGrMqGZ8g3QCrigDMBQ6IP06SkH%2BtJnlHln%2Bydt7boZ%2FCHUopyhhPbhcn4UgMg8HBEU68ETvvI08s4TXILEyGAtEDTWFCUuTKlbS7ZlEMFnImf%2FlRFmr%2FCZyCZxI7ogLvuOKgiuJN%2BWUL%2BnjATs2Y7m%2BTnTK6jKuLP0ZwYUnaqDtArHeJl0O4vHUkUhG5sNbaAHVGrPNJsPjH5blzgUBaGALOjjS8HafuAXAoBkmLaTykIsw%2BWSRALfWxlS4m1DnuadI6vPFvls8Wsjd%2BLrPLAcFaoBKlcGHnBGE8fSGbrg2%2BOwu69aebeNp3tmqZuGQATjPth6%2BB5auJ8ftWcHksMwXo1a43grjvln0WQ3AXLfTbxJJbsw3piNygY6pgEG51OSd5MYqIqJmIdMl2RqgP8ye4fg42W%2FJ62QVOnRSAHbu7vvxzXWnArz%2Bt%2FmJiVrd8Ad3YQq%2Bt2%2BmDpINyofxDrujAz5zPv0p38o4zW5YNzeJ1NDkGnp54UZkO4RPlWShGtY0Jv987OdgrWQOqUJG9ujcD3KCzs%2FQ9%2BdWu2GPnzkpG9CNnSSKqnmIi%2FIo4ksqhYs2a3%2FBDPhoeXsdnd2YRZtDRkd&X-Amz-Signature=8688679a05dc9ec2b8293a13ac0dfae314d9a82c6b96520a7ea8b5284f30afd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQQCSZW%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T010325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjphTDsEKzcCyg7Jp7jUP3FHrJ%2F8%2BDmkMy1nhYyiuv%2BAiBkh4EjF2pKoG0zizyP9dGJqAQnxTyii2xMrZsh2XQnbyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcABxCdSPKakrZEDKtwD6wEu6P2ctW3i%2BP4UI4VeQxne1Aiut98AHUTINJmpW40t3ctgkeI3r%2BvGLQPuYSzL%2FDXGlemwbcCthBrBvoyTXOFBl%2FIww%2Fs8HUtaohP%2Fk%2F3w93Cro5PUcrFjmyviWIkS0x%2BfMvy%2FJFvrNU4fNvY0ToYkETmQrXobOvCwR9aLRXhoJB0KvV5%2BmVal7yqZxIjuWqwSJqtN2bPheFKL7c5Bp2O%2BAwiNXzH0gly0D0mt17gdR7gwqTDABredARrWjBLUDqltYKGsnWGrMqGZ8g3QCrigDMBQ6IP06SkH%2BtJnlHln%2Bydt7boZ%2FCHUopyhhPbhcn4UgMg8HBEU68ETvvI08s4TXILEyGAtEDTWFCUuTKlbS7ZlEMFnImf%2FlRFmr%2FCZyCZxI7ogLvuOKgiuJN%2BWUL%2BnjATs2Y7m%2BTnTK6jKuLP0ZwYUnaqDtArHeJl0O4vHUkUhG5sNbaAHVGrPNJsPjH5blzgUBaGALOjjS8HafuAXAoBkmLaTykIsw%2BWSRALfWxlS4m1DnuadI6vPFvls8Wsjd%2BLrPLAcFaoBKlcGHnBGE8fSGbrg2%2BOwu69aebeNp3tmqZuGQATjPth6%2BB5auJ8ftWcHksMwXo1a43grjvln0WQ3AXLfTbxJJbsw3piNygY6pgEG51OSd5MYqIqJmIdMl2RqgP8ye4fg42W%2FJ62QVOnRSAHbu7vvxzXWnArz%2Bt%2FmJiVrd8Ad3YQq%2Bt2%2BmDpINyofxDrujAz5zPv0p38o4zW5YNzeJ1NDkGnp54UZkO4RPlWShGtY0Jv987OdgrWQOqUJG9ujcD3KCzs%2FQ9%2BdWu2GPnzkpG9CNnSSKqnmIi%2FIo4ksqhYs2a3%2FBDPhoeXsdnd2YRZtDRkd&X-Amz-Signature=68e6678049a30b9d9438aa2b2f9c055df38214a6f71e8bc0324f3d4dd6cd8ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQQCSZW%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T010325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjphTDsEKzcCyg7Jp7jUP3FHrJ%2F8%2BDmkMy1nhYyiuv%2BAiBkh4EjF2pKoG0zizyP9dGJqAQnxTyii2xMrZsh2XQnbyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcABxCdSPKakrZEDKtwD6wEu6P2ctW3i%2BP4UI4VeQxne1Aiut98AHUTINJmpW40t3ctgkeI3r%2BvGLQPuYSzL%2FDXGlemwbcCthBrBvoyTXOFBl%2FIww%2Fs8HUtaohP%2Fk%2F3w93Cro5PUcrFjmyviWIkS0x%2BfMvy%2FJFvrNU4fNvY0ToYkETmQrXobOvCwR9aLRXhoJB0KvV5%2BmVal7yqZxIjuWqwSJqtN2bPheFKL7c5Bp2O%2BAwiNXzH0gly0D0mt17gdR7gwqTDABredARrWjBLUDqltYKGsnWGrMqGZ8g3QCrigDMBQ6IP06SkH%2BtJnlHln%2Bydt7boZ%2FCHUopyhhPbhcn4UgMg8HBEU68ETvvI08s4TXILEyGAtEDTWFCUuTKlbS7ZlEMFnImf%2FlRFmr%2FCZyCZxI7ogLvuOKgiuJN%2BWUL%2BnjATs2Y7m%2BTnTK6jKuLP0ZwYUnaqDtArHeJl0O4vHUkUhG5sNbaAHVGrPNJsPjH5blzgUBaGALOjjS8HafuAXAoBkmLaTykIsw%2BWSRALfWxlS4m1DnuadI6vPFvls8Wsjd%2BLrPLAcFaoBKlcGHnBGE8fSGbrg2%2BOwu69aebeNp3tmqZuGQATjPth6%2BB5auJ8ftWcHksMwXo1a43grjvln0WQ3AXLfTbxJJbsw3piNygY6pgEG51OSd5MYqIqJmIdMl2RqgP8ye4fg42W%2FJ62QVOnRSAHbu7vvxzXWnArz%2Bt%2FmJiVrd8Ad3YQq%2Bt2%2BmDpINyofxDrujAz5zPv0p38o4zW5YNzeJ1NDkGnp54UZkO4RPlWShGtY0Jv987OdgrWQOqUJG9ujcD3KCzs%2FQ9%2BdWu2GPnzkpG9CNnSSKqnmIi%2FIo4ksqhYs2a3%2FBDPhoeXsdnd2YRZtDRkd&X-Amz-Signature=92754e25886aa493069a2d47994b10c94f6cc1bb1d29c67a791b536f55b4b910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQQCSZW%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T010325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjphTDsEKzcCyg7Jp7jUP3FHrJ%2F8%2BDmkMy1nhYyiuv%2BAiBkh4EjF2pKoG0zizyP9dGJqAQnxTyii2xMrZsh2XQnbyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZcABxCdSPKakrZEDKtwD6wEu6P2ctW3i%2BP4UI4VeQxne1Aiut98AHUTINJmpW40t3ctgkeI3r%2BvGLQPuYSzL%2FDXGlemwbcCthBrBvoyTXOFBl%2FIww%2Fs8HUtaohP%2Fk%2F3w93Cro5PUcrFjmyviWIkS0x%2BfMvy%2FJFvrNU4fNvY0ToYkETmQrXobOvCwR9aLRXhoJB0KvV5%2BmVal7yqZxIjuWqwSJqtN2bPheFKL7c5Bp2O%2BAwiNXzH0gly0D0mt17gdR7gwqTDABredARrWjBLUDqltYKGsnWGrMqGZ8g3QCrigDMBQ6IP06SkH%2BtJnlHln%2Bydt7boZ%2FCHUopyhhPbhcn4UgMg8HBEU68ETvvI08s4TXILEyGAtEDTWFCUuTKlbS7ZlEMFnImf%2FlRFmr%2FCZyCZxI7ogLvuOKgiuJN%2BWUL%2BnjATs2Y7m%2BTnTK6jKuLP0ZwYUnaqDtArHeJl0O4vHUkUhG5sNbaAHVGrPNJsPjH5blzgUBaGALOjjS8HafuAXAoBkmLaTykIsw%2BWSRALfWxlS4m1DnuadI6vPFvls8Wsjd%2BLrPLAcFaoBKlcGHnBGE8fSGbrg2%2BOwu69aebeNp3tmqZuGQATjPth6%2BB5auJ8ftWcHksMwXo1a43grjvln0WQ3AXLfTbxJJbsw3piNygY6pgEG51OSd5MYqIqJmIdMl2RqgP8ye4fg42W%2FJ62QVOnRSAHbu7vvxzXWnArz%2Bt%2FmJiVrd8Ad3YQq%2Bt2%2BmDpINyofxDrujAz5zPv0p38o4zW5YNzeJ1NDkGnp54UZkO4RPlWShGtY0Jv987OdgrWQOqUJG9ujcD3KCzs%2FQ9%2BdWu2GPnzkpG9CNnSSKqnmIi%2FIo4ksqhYs2a3%2FBDPhoeXsdnd2YRZtDRkd&X-Amz-Signature=c6af41fed16dca99d2db122e332dd3dc728a7cf716c873e40e9f337d3031fe73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNBYKW7A%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T010325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfej%2BNpUGQT7saK6arTIhb1V6ZLMsFs7slibx%2FfOgMvAiEAthKTq%2BLd3QoC40FuAMAB8eoZ7A0pOkHOndLhERFhiV4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2BYcC9ZWiW6BSq8uyrcA%2FpSfBcbCQRfG6BwISYMd5u1V7cysT6TZSSmLT%2FbVND6nMV0Pim5WQbjJ1o2QqJ9AD5k9hXZb4ok6%2BAWoX5Y0DzdZn8eNsAg3Y0%2BUPf1onBjQRhqmiT16Kjg5Fv%2FBe%2FD%2B0l4xwNf7bO3hHbygvIWt%2FApZpB6zux0Oigw6UhS6bqtvfeh7j0Q2NoRK5fNX%2BaM%2FR40JLf%2FRUDIcuhrSDg983reAPaxqehqCBH1IMWq5AZZt1%2F5M5cFaxJU69n6cIuZHCawwWPyG%2F8GrUZ%2F5FuTPzs4YCA9yl4Tt5O6UtA%2BaYR%2BT9Mi4A4LjikL3vtQv7wao8YPNUDCmdWgvefe0bJRzxOoH3qatzdMa9m8iWdL24xkafTvczdSQSsBtW5NdbaKwfmqKaR5QYkFn0DUKyz9ywNWHn6L8epJegGjwlaOcKYOWplaACOFZMFHhju6xOyxjkf9CxWo%2BAIG6ZulTkRTYHCL49EeM%2FMu7E%2FcMBU45wYiq8ntWy%2B6qcQxdlVkkNHc%2FifJlac5vbdW0Bx5VQL4GFIrVuChGaN8CBoeK0y4W2c1gTPQ1T2W3E0UmuvGozJ1YL5pZogXSHMM6lAAYZa4w9ZSsdUN0XWa6UeFgJaGL0rpF%2FJR1SbD0XttCOuUMOGYjcoGOqUBR%2FCHMGG9Wo%2Bkq61F7I3qPONmF14QKBuepKU%2FGCYCP%2BeQX4rKoXhdnWOeX0eyL%2F%2BjqOOkYNE0VfVHAE4esh9m2wrerko2gVOJD61weRxofrfIZq9SUQGT9usD%2FILjBv46I3farQnOiLim2v%2B91UhPltul6%2BfODwNa8QBUEi9Pa3yHDuFtFB9tPDbY7ldjQDTTYfrnykeBysGwRI3KblDz1GeyuDy4&X-Amz-Signature=8ed2cefbc0fb710fc3b3b6f9f96ba6e39b4747c1b4435abbdea5833092d80446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

