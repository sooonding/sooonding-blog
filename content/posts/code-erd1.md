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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2DPETS%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFzDaac%2BvIz1r9BWRdD2klaIAtzxJtOZAcdtw21XE3ZlAiEA6DfSjMlAAia9TJ4Zi7IeRhBw2XIA1vfyKD2dMvWlICgq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFXBmVGwXQXZdxoiBSrcA08cmIe81s2CJAATc2NOXfGwlB4hRQf1Cgap4M%2B9JSv8VNfCsybDkMTLey%2FPwQBnUtwdO2SZbGa2D1m%2BvxaZHPw4E%2FoT8eUj7HXXlHBYybPc43zQdUBMbJbJIhg9%2F5mH4E%2BXL25GQMHnRGBsNE6jU%2B8HQ6WC5LKhK9RD49BSJvwW%2B4t5rh5%2Bv5bM8ZzQvc8%2BC0AyNqVsPP%2BsuT8q3q1Edj542wjzoQ%2BKn3NfHh%2Fvlbf30yxyXYN%2B5L29viwTZ3U23b%2F572lBTFAhcvMgpalA5zy6OpVyVg8q7pcP4o5exSOewIJGLd2HICn7GtUQ80WhbKD%2BuZJmzs5iJqxe%2FElz9RqYaGJCZLjqVD5gkaX4Vb65x%2FujZGO9wqs9fQyyM4giFDfDWldzlOjVpIdzjMz6fB9xcHO%2FmT8fle57CS%2F76Kzvx%2FAe7clSE6Yj0E0WfPcE4aDPMg74PMCr1cm5mzjH2xFWpTYQYmwIz3Dqy2%2BKJVUxhBbvVtNP4SQxj%2BOKTQhZdxNZYcObOjOe1xkTVXV88lNykbVUV2Xq7JFgUWsClSrbFLIwE6eUbliaV6vtRYEpKNO26apvKAzH%2B5ylgvZrGmCmMJFf7FV7JoJBZaFztFvFBMTIsOaC3RwBaMW2MJXzys8GOqUB4izVY%2FJdzn8NjCYCQA6F2SkknlwVcccmX8AZRTO3MrmpKTnObdc6NAJp%2BdkOp3uwEv4Pgww5NlI87CiC%2FoS0%2BuJDM0Q9Ks5%2Ba3ANIJaMn3q2ifRMgcF6Feg5f61xO644Hpe0zzibIk5Y6inteRzRinqeiGvZ0x04CHJBwGETeIwbj%2B%2FEn30xDqu4ayJBwhLG8o7addrU0CCfpbmsoUxw50ojN9Rl&X-Amz-Signature=deb826e577d9e9bdb941711b285568291003b81e1ef4897db3dfc4060fe34a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJTJAJG%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC68iC6RS2Z%2FuQBIjVRiTslUt2u9eg9fQlurLD0EuxMwgIgFc71rAhNR1WVyfcIlCVdePr0rVpBobyM2IsPpXBWcRQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHyzkWqM3%2FZ9fGwX9CrcAwkSZsw%2FAJUm5sN%2B4sFLsbrqHt8u1lPNNR8dhGqc%2FH9c7nlgHE7nvvfQHcdYqHj9it8Xgoee5tb38ez49HSVTQhvXOgHk7MWrPR1G8%2FyZXyB8GNg895cSeTfCf4%2BlBtaLy%2BpC0zTN8DFfNfvUNIENa7XR1u8aN1G9oi11XlOYKp4F4Jh%2Bbg3S7ZbdMfSJx0xrFPpfZsO39eeQFlSPs1JxORKkgMHBXhHwLq6tmmCHRafo5VN23UxGtHH2pCTnjCUpT7rLE1KJPvEE1P%2F1BFiCHOO5dH8%2FE10lMPB3i1A9BxiyZ4QFEmZpsMgjz25RKijcjLR0gi16HGLfI545SAYksHLDxIaM88cp3eI7YYngS8PSK2KiPE%2Bt1j0Z5tAPJKqwGYV%2BMhfGRzmJWbKH0kHAFK0RrEYMr75BfXqUb%2BNNNq73Bb7aysqboqsBiQmn3FT8Xa9TUZKDSrNJ1lwD450VX1NtrccSlGMK3Ps1rMAK01cPqwDRel%2BT1RJ7EQjUhshV7kxjaldhSMfhF%2F5XoZVv638Qb996Ld3b6VVYEQT829c%2FjQi7CHSB8C5m7nDJoCiIPLAaqPyrMbMosEH0bYH1Gd8iPs4CzA56h9n6TLVrZqUjBRtse4MuE6hHJ2iMNP0ys8GOqUB6GFRX8sgLSNsPmuaWJJL%2BaB0zmyjbmYAJ9Rg5%2F5ZxvuwHF84YOpWB%2FyrOMuURq%2BW1cxNI8EuI79%2Bl%2BtS8TM7%2FVY8FU0RfsAibb7dhFXul%2BwG%2FVBQ%2F4lRCPdp1x9%2FNHjwh%2FKnneMFs1axlTQ64xTs%2F27o7fqt1MKL%2B0OJphpU9%2Fc4ImXfS4YVyDvCFDZ3Hi2Yk4nTIK01bqzH6%2FZjM2TvE%2B6t3fzG&X-Amz-Signature=b5aba124258b784e5750fdb3e05befaeaa001f5d4a47361a726037f322d0a5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJTJAJG%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC68iC6RS2Z%2FuQBIjVRiTslUt2u9eg9fQlurLD0EuxMwgIgFc71rAhNR1WVyfcIlCVdePr0rVpBobyM2IsPpXBWcRQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHyzkWqM3%2FZ9fGwX9CrcAwkSZsw%2FAJUm5sN%2B4sFLsbrqHt8u1lPNNR8dhGqc%2FH9c7nlgHE7nvvfQHcdYqHj9it8Xgoee5tb38ez49HSVTQhvXOgHk7MWrPR1G8%2FyZXyB8GNg895cSeTfCf4%2BlBtaLy%2BpC0zTN8DFfNfvUNIENa7XR1u8aN1G9oi11XlOYKp4F4Jh%2Bbg3S7ZbdMfSJx0xrFPpfZsO39eeQFlSPs1JxORKkgMHBXhHwLq6tmmCHRafo5VN23UxGtHH2pCTnjCUpT7rLE1KJPvEE1P%2F1BFiCHOO5dH8%2FE10lMPB3i1A9BxiyZ4QFEmZpsMgjz25RKijcjLR0gi16HGLfI545SAYksHLDxIaM88cp3eI7YYngS8PSK2KiPE%2Bt1j0Z5tAPJKqwGYV%2BMhfGRzmJWbKH0kHAFK0RrEYMr75BfXqUb%2BNNNq73Bb7aysqboqsBiQmn3FT8Xa9TUZKDSrNJ1lwD450VX1NtrccSlGMK3Ps1rMAK01cPqwDRel%2BT1RJ7EQjUhshV7kxjaldhSMfhF%2F5XoZVv638Qb996Ld3b6VVYEQT829c%2FjQi7CHSB8C5m7nDJoCiIPLAaqPyrMbMosEH0bYH1Gd8iPs4CzA56h9n6TLVrZqUjBRtse4MuE6hHJ2iMNP0ys8GOqUB6GFRX8sgLSNsPmuaWJJL%2BaB0zmyjbmYAJ9Rg5%2F5ZxvuwHF84YOpWB%2FyrOMuURq%2BW1cxNI8EuI79%2Bl%2BtS8TM7%2FVY8FU0RfsAibb7dhFXul%2BwG%2FVBQ%2F4lRCPdp1x9%2FNHjwh%2FKnneMFs1axlTQ64xTs%2F27o7fqt1MKL%2B0OJphpU9%2Fc4ImXfS4YVyDvCFDZ3Hi2Yk4nTIK01bqzH6%2FZjM2TvE%2B6t3fzG&X-Amz-Signature=fe8276092c5e0e2872fddae3fc6f73e0436bafd2ab793316ef8f20eee7d91ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJTJAJG%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC68iC6RS2Z%2FuQBIjVRiTslUt2u9eg9fQlurLD0EuxMwgIgFc71rAhNR1WVyfcIlCVdePr0rVpBobyM2IsPpXBWcRQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHyzkWqM3%2FZ9fGwX9CrcAwkSZsw%2FAJUm5sN%2B4sFLsbrqHt8u1lPNNR8dhGqc%2FH9c7nlgHE7nvvfQHcdYqHj9it8Xgoee5tb38ez49HSVTQhvXOgHk7MWrPR1G8%2FyZXyB8GNg895cSeTfCf4%2BlBtaLy%2BpC0zTN8DFfNfvUNIENa7XR1u8aN1G9oi11XlOYKp4F4Jh%2Bbg3S7ZbdMfSJx0xrFPpfZsO39eeQFlSPs1JxORKkgMHBXhHwLq6tmmCHRafo5VN23UxGtHH2pCTnjCUpT7rLE1KJPvEE1P%2F1BFiCHOO5dH8%2FE10lMPB3i1A9BxiyZ4QFEmZpsMgjz25RKijcjLR0gi16HGLfI545SAYksHLDxIaM88cp3eI7YYngS8PSK2KiPE%2Bt1j0Z5tAPJKqwGYV%2BMhfGRzmJWbKH0kHAFK0RrEYMr75BfXqUb%2BNNNq73Bb7aysqboqsBiQmn3FT8Xa9TUZKDSrNJ1lwD450VX1NtrccSlGMK3Ps1rMAK01cPqwDRel%2BT1RJ7EQjUhshV7kxjaldhSMfhF%2F5XoZVv638Qb996Ld3b6VVYEQT829c%2FjQi7CHSB8C5m7nDJoCiIPLAaqPyrMbMosEH0bYH1Gd8iPs4CzA56h9n6TLVrZqUjBRtse4MuE6hHJ2iMNP0ys8GOqUB6GFRX8sgLSNsPmuaWJJL%2BaB0zmyjbmYAJ9Rg5%2F5ZxvuwHF84YOpWB%2FyrOMuURq%2BW1cxNI8EuI79%2Bl%2BtS8TM7%2FVY8FU0RfsAibb7dhFXul%2BwG%2FVBQ%2F4lRCPdp1x9%2FNHjwh%2FKnneMFs1axlTQ64xTs%2F27o7fqt1MKL%2B0OJphpU9%2Fc4ImXfS4YVyDvCFDZ3Hi2Yk4nTIK01bqzH6%2FZjM2TvE%2B6t3fzG&X-Amz-Signature=5db57087af93958e0d6896c1e30a6e33f96fa36d752d803780e8ac33bb218775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJTJAJG%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC68iC6RS2Z%2FuQBIjVRiTslUt2u9eg9fQlurLD0EuxMwgIgFc71rAhNR1WVyfcIlCVdePr0rVpBobyM2IsPpXBWcRQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHyzkWqM3%2FZ9fGwX9CrcAwkSZsw%2FAJUm5sN%2B4sFLsbrqHt8u1lPNNR8dhGqc%2FH9c7nlgHE7nvvfQHcdYqHj9it8Xgoee5tb38ez49HSVTQhvXOgHk7MWrPR1G8%2FyZXyB8GNg895cSeTfCf4%2BlBtaLy%2BpC0zTN8DFfNfvUNIENa7XR1u8aN1G9oi11XlOYKp4F4Jh%2Bbg3S7ZbdMfSJx0xrFPpfZsO39eeQFlSPs1JxORKkgMHBXhHwLq6tmmCHRafo5VN23UxGtHH2pCTnjCUpT7rLE1KJPvEE1P%2F1BFiCHOO5dH8%2FE10lMPB3i1A9BxiyZ4QFEmZpsMgjz25RKijcjLR0gi16HGLfI545SAYksHLDxIaM88cp3eI7YYngS8PSK2KiPE%2Bt1j0Z5tAPJKqwGYV%2BMhfGRzmJWbKH0kHAFK0RrEYMr75BfXqUb%2BNNNq73Bb7aysqboqsBiQmn3FT8Xa9TUZKDSrNJ1lwD450VX1NtrccSlGMK3Ps1rMAK01cPqwDRel%2BT1RJ7EQjUhshV7kxjaldhSMfhF%2F5XoZVv638Qb996Ld3b6VVYEQT829c%2FjQi7CHSB8C5m7nDJoCiIPLAaqPyrMbMosEH0bYH1Gd8iPs4CzA56h9n6TLVrZqUjBRtse4MuE6hHJ2iMNP0ys8GOqUB6GFRX8sgLSNsPmuaWJJL%2BaB0zmyjbmYAJ9Rg5%2F5ZxvuwHF84YOpWB%2FyrOMuURq%2BW1cxNI8EuI79%2Bl%2BtS8TM7%2FVY8FU0RfsAibb7dhFXul%2BwG%2FVBQ%2F4lRCPdp1x9%2FNHjwh%2FKnneMFs1axlTQ64xTs%2F27o7fqt1MKL%2B0OJphpU9%2Fc4ImXfS4YVyDvCFDZ3Hi2Yk4nTIK01bqzH6%2FZjM2TvE%2B6t3fzG&X-Amz-Signature=013311f9440b2187930a49f1cae85325cc925a8c5802d4786d98a69b8e264004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJTJAJG%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC68iC6RS2Z%2FuQBIjVRiTslUt2u9eg9fQlurLD0EuxMwgIgFc71rAhNR1WVyfcIlCVdePr0rVpBobyM2IsPpXBWcRQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHyzkWqM3%2FZ9fGwX9CrcAwkSZsw%2FAJUm5sN%2B4sFLsbrqHt8u1lPNNR8dhGqc%2FH9c7nlgHE7nvvfQHcdYqHj9it8Xgoee5tb38ez49HSVTQhvXOgHk7MWrPR1G8%2FyZXyB8GNg895cSeTfCf4%2BlBtaLy%2BpC0zTN8DFfNfvUNIENa7XR1u8aN1G9oi11XlOYKp4F4Jh%2Bbg3S7ZbdMfSJx0xrFPpfZsO39eeQFlSPs1JxORKkgMHBXhHwLq6tmmCHRafo5VN23UxGtHH2pCTnjCUpT7rLE1KJPvEE1P%2F1BFiCHOO5dH8%2FE10lMPB3i1A9BxiyZ4QFEmZpsMgjz25RKijcjLR0gi16HGLfI545SAYksHLDxIaM88cp3eI7YYngS8PSK2KiPE%2Bt1j0Z5tAPJKqwGYV%2BMhfGRzmJWbKH0kHAFK0RrEYMr75BfXqUb%2BNNNq73Bb7aysqboqsBiQmn3FT8Xa9TUZKDSrNJ1lwD450VX1NtrccSlGMK3Ps1rMAK01cPqwDRel%2BT1RJ7EQjUhshV7kxjaldhSMfhF%2F5XoZVv638Qb996Ld3b6VVYEQT829c%2FjQi7CHSB8C5m7nDJoCiIPLAaqPyrMbMosEH0bYH1Gd8iPs4CzA56h9n6TLVrZqUjBRtse4MuE6hHJ2iMNP0ys8GOqUB6GFRX8sgLSNsPmuaWJJL%2BaB0zmyjbmYAJ9Rg5%2F5ZxvuwHF84YOpWB%2FyrOMuURq%2BW1cxNI8EuI79%2Bl%2BtS8TM7%2FVY8FU0RfsAibb7dhFXul%2BwG%2FVBQ%2F4lRCPdp1x9%2FNHjwh%2FKnneMFs1axlTQ64xTs%2F27o7fqt1MKL%2B0OJphpU9%2Fc4ImXfS4YVyDvCFDZ3Hi2Yk4nTIK01bqzH6%2FZjM2TvE%2B6t3fzG&X-Amz-Signature=e12a656bf13186370fe1f0336b8b5e618457f9d50e3cb4122b31c5f7d21a1c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S2DPETS%2F20260430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260430T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFzDaac%2BvIz1r9BWRdD2klaIAtzxJtOZAcdtw21XE3ZlAiEA6DfSjMlAAia9TJ4Zi7IeRhBw2XIA1vfyKD2dMvWlICgq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDFXBmVGwXQXZdxoiBSrcA08cmIe81s2CJAATc2NOXfGwlB4hRQf1Cgap4M%2B9JSv8VNfCsybDkMTLey%2FPwQBnUtwdO2SZbGa2D1m%2BvxaZHPw4E%2FoT8eUj7HXXlHBYybPc43zQdUBMbJbJIhg9%2F5mH4E%2BXL25GQMHnRGBsNE6jU%2B8HQ6WC5LKhK9RD49BSJvwW%2B4t5rh5%2Bv5bM8ZzQvc8%2BC0AyNqVsPP%2BsuT8q3q1Edj542wjzoQ%2BKn3NfHh%2Fvlbf30yxyXYN%2B5L29viwTZ3U23b%2F572lBTFAhcvMgpalA5zy6OpVyVg8q7pcP4o5exSOewIJGLd2HICn7GtUQ80WhbKD%2BuZJmzs5iJqxe%2FElz9RqYaGJCZLjqVD5gkaX4Vb65x%2FujZGO9wqs9fQyyM4giFDfDWldzlOjVpIdzjMz6fB9xcHO%2FmT8fle57CS%2F76Kzvx%2FAe7clSE6Yj0E0WfPcE4aDPMg74PMCr1cm5mzjH2xFWpTYQYmwIz3Dqy2%2BKJVUxhBbvVtNP4SQxj%2BOKTQhZdxNZYcObOjOe1xkTVXV88lNykbVUV2Xq7JFgUWsClSrbFLIwE6eUbliaV6vtRYEpKNO26apvKAzH%2B5ylgvZrGmCmMJFf7FV7JoJBZaFztFvFBMTIsOaC3RwBaMW2MJXzys8GOqUB4izVY%2FJdzn8NjCYCQA6F2SkknlwVcccmX8AZRTO3MrmpKTnObdc6NAJp%2BdkOp3uwEv4Pgww5NlI87CiC%2FoS0%2BuJDM0Q9Ks5%2Ba3ANIJaMn3q2ifRMgcF6Feg5f61xO644Hpe0zzibIk5Y6inteRzRinqeiGvZ0x04CHJBwGETeIwbj%2B%2FEn30xDqu4ayJBwhLG8o7addrU0CCfpbmsoUxw50ojN9Rl&X-Amz-Signature=e2741791ac1bbde6bcada65daa2b0cdf01c95a8ff8c381d39564f440f6bb5721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

