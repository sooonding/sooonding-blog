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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCCHWKO2%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0TKQnBqKNN6%2Bc3j7w5b1UTwIqzWQvuMTSFfxcZG28wIgFXwri835KS3n7wgGXDzmEt%2BYlLhF2moy2t9dtIxKZ6IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSWhzbWe4binp%2BvICrcAyaUboetcjucTNThhLr3Dwd3%2FiWKwxJGSzSx6LKEWPwL%2Bb%2FPkz43koqyXUpUIoP4i4GD6xbAo7Mx3aVmh7ny68149G624xbmgUTfJb7QP%2BkesYv%2BL1TbeGGnaVu%2F9%2F%2BOz3NZaL7ZY7ZVdXff0071NGUXbMKxq6Re5ZN8Q%2BZBkJ07YN0ia71ZXgMrVkGaQOCL%2BVYUVJwEQlg9VONcAgzPX7GmXTE3g9aVMqzPFuIG635gATKpodqTSpZHoFI8lIbKIMNZAByQ8hKBtf%2B7J74wOcWtNbKVxKnVruLfnXqy3R4TMYLm6dpgnEztIQ8McvzEsYskVAWO3uRn65U%2Fb%2FKAKwbtj0SvE9bYF6okgfhrMFEhbtoX%2BFGiHOTC%2B7Zi67McYU3dMNpV3shiB9iBR2zgW3blL8ueTNNq%2BKz2N2cT2pP7UP1aA8Q02t6GCED8ncDCe1COUqfdiAwHekndOr2IVTzmeaQNvO4Rr98iuPI4eyXUipVNdoDbk2AniYu%2F2MM4RNFWVVdQfy0EywEllJEIkPFum2uvqs27Iuiuw3yNcss%2BGESShNZa2OVQE6EqilOnDw%2BRq7ImvwjB6SSZRdZ7CYuREi5iPRLiEge6vUcJCDLv%2FJntwC5mz8oyubACMMqIsNcGOqUB3ptEDVoGIAqs89AwHvkYc15RqjlInmz1%2F2GbyhSGyqV5aX54dU8%2BwnswxLqPUmXro6TiylfIYtN2DO7wHILF3zOqUQO96JEdzForSARPTZjCU9RUsCVP7kGMyNO0V1spP2JjFVe0%2BoxJHjScN0s0ZLTXzXEUmFXc5SaQtVFoS3BqKnWeZrvBPEtNCVUGAVCzKsAWg7Ae%2BuySrSv4hwrb4BlfXTxb&X-Amz-Signature=78973c9c30747276c60ec5a5241bc61e446fcb23850ee5a29bb3b4f6c23bf8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVTYKZQ%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3bYDPNJBkE2dA7NCw7nf029yjzaS6DhpGwQO7tYmy4AIgSxNQ3oeWUJi%2Fu6tzyvQuhqWpjkjS6LOoDS5NhCJAys8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXQlonIsuLttw2JMircA1LPMRoy3Q8z1a1v0WY03bUin9KqDfjM2uyvl%2BFvOKzLEpu1LZwTR7w6hsY89A8oL9lH2cfG8xpHDkqm0NbHPZCnLM3N%2Fw3YIiskRaR2%2FjZ%2Foaavf5iNAa45Lp54tKORcfcROASZ8lTpxpQWEnNVdodpkmSrraG39LBgbMVzDZmpxB0YcIDj4kpTsaaDzRhl30IhUFGhZzLM9vmztwxSPrCJbGE2DxmDPfUxlWHPSMKywcc3fhjFSwGPMgSz6rbm%2FB2LVsxeNv3v6C8r3%2F2OEEWsmep66zlCzj25wVG66tUu%2FcWq7SQ9GgJcITUi7lUkHaQFVLKuGXgIXMzBV18qCP8NQPLYKRRwRVJvG5Jk3dNKLJTl92hg0nMZ7IRAZULq6FwZUUb3zlwZAY5KsS3BgEGyPpI331Vay2cSsDjWboBq8w6BRx2nPjOu3Ea6XoDd1%2BR3umiwNxYwY5QdgOVafNLZKQjU9BDDt9nr4gHnghV4yQC0bU4bwgCGUV2G%2Bf0wLbt%2BFdGEQezeosL%2BBRKWNSDpoCn11FDx7nabg%2B91DCadbcEmIb7fmwM%2BzuB%2FCs%2BsT1pgvmA0XA1YC%2Fwt9gUlMtWjYcf1XCdz4mcxNi9TfvpTFQA6w6188ve32Y%2BLMN%2BIsNcGOqUB9qAqYCZV1piaWt%2BkYwufd%2BnVtEjgfOAJUkZNuMLj4bM5YPCsBLvN5zuvY2B4HLF%2F4MDOdbyxTCQC487lzwlg5Y8O2in%2BobP212ol4JiBnwDnMzt4nkhfAZH0TUZBUUc8BppETPQuzs9GU8mRw7ABR4zsS2fmdendFc3IC2oNf%2FWDjvC360wU2mBtXdZwXUvxU0z9VpBlfo26SwKHoYZsJonIzl%2BV&X-Amz-Signature=0e851f0ac4ccfccb6867c7c2d6efd7db9caa73f8b3a13375f2c131b795be6ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVTYKZQ%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3bYDPNJBkE2dA7NCw7nf029yjzaS6DhpGwQO7tYmy4AIgSxNQ3oeWUJi%2Fu6tzyvQuhqWpjkjS6LOoDS5NhCJAys8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXQlonIsuLttw2JMircA1LPMRoy3Q8z1a1v0WY03bUin9KqDfjM2uyvl%2BFvOKzLEpu1LZwTR7w6hsY89A8oL9lH2cfG8xpHDkqm0NbHPZCnLM3N%2Fw3YIiskRaR2%2FjZ%2Foaavf5iNAa45Lp54tKORcfcROASZ8lTpxpQWEnNVdodpkmSrraG39LBgbMVzDZmpxB0YcIDj4kpTsaaDzRhl30IhUFGhZzLM9vmztwxSPrCJbGE2DxmDPfUxlWHPSMKywcc3fhjFSwGPMgSz6rbm%2FB2LVsxeNv3v6C8r3%2F2OEEWsmep66zlCzj25wVG66tUu%2FcWq7SQ9GgJcITUi7lUkHaQFVLKuGXgIXMzBV18qCP8NQPLYKRRwRVJvG5Jk3dNKLJTl92hg0nMZ7IRAZULq6FwZUUb3zlwZAY5KsS3BgEGyPpI331Vay2cSsDjWboBq8w6BRx2nPjOu3Ea6XoDd1%2BR3umiwNxYwY5QdgOVafNLZKQjU9BDDt9nr4gHnghV4yQC0bU4bwgCGUV2G%2Bf0wLbt%2BFdGEQezeosL%2BBRKWNSDpoCn11FDx7nabg%2B91DCadbcEmIb7fmwM%2BzuB%2FCs%2BsT1pgvmA0XA1YC%2Fwt9gUlMtWjYcf1XCdz4mcxNi9TfvpTFQA6w6188ve32Y%2BLMN%2BIsNcGOqUB9qAqYCZV1piaWt%2BkYwufd%2BnVtEjgfOAJUkZNuMLj4bM5YPCsBLvN5zuvY2B4HLF%2F4MDOdbyxTCQC487lzwlg5Y8O2in%2BobP212ol4JiBnwDnMzt4nkhfAZH0TUZBUUc8BppETPQuzs9GU8mRw7ABR4zsS2fmdendFc3IC2oNf%2FWDjvC360wU2mBtXdZwXUvxU0z9VpBlfo26SwKHoYZsJonIzl%2BV&X-Amz-Signature=ae8dea94c2446db560df0a79f620f3f1db2246b21715b373fd44f448cdc62bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVTYKZQ%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3bYDPNJBkE2dA7NCw7nf029yjzaS6DhpGwQO7tYmy4AIgSxNQ3oeWUJi%2Fu6tzyvQuhqWpjkjS6LOoDS5NhCJAys8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXQlonIsuLttw2JMircA1LPMRoy3Q8z1a1v0WY03bUin9KqDfjM2uyvl%2BFvOKzLEpu1LZwTR7w6hsY89A8oL9lH2cfG8xpHDkqm0NbHPZCnLM3N%2Fw3YIiskRaR2%2FjZ%2Foaavf5iNAa45Lp54tKORcfcROASZ8lTpxpQWEnNVdodpkmSrraG39LBgbMVzDZmpxB0YcIDj4kpTsaaDzRhl30IhUFGhZzLM9vmztwxSPrCJbGE2DxmDPfUxlWHPSMKywcc3fhjFSwGPMgSz6rbm%2FB2LVsxeNv3v6C8r3%2F2OEEWsmep66zlCzj25wVG66tUu%2FcWq7SQ9GgJcITUi7lUkHaQFVLKuGXgIXMzBV18qCP8NQPLYKRRwRVJvG5Jk3dNKLJTl92hg0nMZ7IRAZULq6FwZUUb3zlwZAY5KsS3BgEGyPpI331Vay2cSsDjWboBq8w6BRx2nPjOu3Ea6XoDd1%2BR3umiwNxYwY5QdgOVafNLZKQjU9BDDt9nr4gHnghV4yQC0bU4bwgCGUV2G%2Bf0wLbt%2BFdGEQezeosL%2BBRKWNSDpoCn11FDx7nabg%2B91DCadbcEmIb7fmwM%2BzuB%2FCs%2BsT1pgvmA0XA1YC%2Fwt9gUlMtWjYcf1XCdz4mcxNi9TfvpTFQA6w6188ve32Y%2BLMN%2BIsNcGOqUB9qAqYCZV1piaWt%2BkYwufd%2BnVtEjgfOAJUkZNuMLj4bM5YPCsBLvN5zuvY2B4HLF%2F4MDOdbyxTCQC487lzwlg5Y8O2in%2BobP212ol4JiBnwDnMzt4nkhfAZH0TUZBUUc8BppETPQuzs9GU8mRw7ABR4zsS2fmdendFc3IC2oNf%2FWDjvC360wU2mBtXdZwXUvxU0z9VpBlfo26SwKHoYZsJonIzl%2BV&X-Amz-Signature=d1f7d90b3baf61e2a68cdeec827c5e3362d107aeaefd2155cf41bf1a82e1c1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVTYKZQ%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3bYDPNJBkE2dA7NCw7nf029yjzaS6DhpGwQO7tYmy4AIgSxNQ3oeWUJi%2Fu6tzyvQuhqWpjkjS6LOoDS5NhCJAys8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXQlonIsuLttw2JMircA1LPMRoy3Q8z1a1v0WY03bUin9KqDfjM2uyvl%2BFvOKzLEpu1LZwTR7w6hsY89A8oL9lH2cfG8xpHDkqm0NbHPZCnLM3N%2Fw3YIiskRaR2%2FjZ%2Foaavf5iNAa45Lp54tKORcfcROASZ8lTpxpQWEnNVdodpkmSrraG39LBgbMVzDZmpxB0YcIDj4kpTsaaDzRhl30IhUFGhZzLM9vmztwxSPrCJbGE2DxmDPfUxlWHPSMKywcc3fhjFSwGPMgSz6rbm%2FB2LVsxeNv3v6C8r3%2F2OEEWsmep66zlCzj25wVG66tUu%2FcWq7SQ9GgJcITUi7lUkHaQFVLKuGXgIXMzBV18qCP8NQPLYKRRwRVJvG5Jk3dNKLJTl92hg0nMZ7IRAZULq6FwZUUb3zlwZAY5KsS3BgEGyPpI331Vay2cSsDjWboBq8w6BRx2nPjOu3Ea6XoDd1%2BR3umiwNxYwY5QdgOVafNLZKQjU9BDDt9nr4gHnghV4yQC0bU4bwgCGUV2G%2Bf0wLbt%2BFdGEQezeosL%2BBRKWNSDpoCn11FDx7nabg%2B91DCadbcEmIb7fmwM%2BzuB%2FCs%2BsT1pgvmA0XA1YC%2Fwt9gUlMtWjYcf1XCdz4mcxNi9TfvpTFQA6w6188ve32Y%2BLMN%2BIsNcGOqUB9qAqYCZV1piaWt%2BkYwufd%2BnVtEjgfOAJUkZNuMLj4bM5YPCsBLvN5zuvY2B4HLF%2F4MDOdbyxTCQC487lzwlg5Y8O2in%2BobP212ol4JiBnwDnMzt4nkhfAZH0TUZBUUc8BppETPQuzs9GU8mRw7ABR4zsS2fmdendFc3IC2oNf%2FWDjvC360wU2mBtXdZwXUvxU0z9VpBlfo26SwKHoYZsJonIzl%2BV&X-Amz-Signature=45c54f9486f5b178e081d0dda19ea4549fc248a38abb4ca5c676a65a4f50edb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THVTYKZQ%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3bYDPNJBkE2dA7NCw7nf029yjzaS6DhpGwQO7tYmy4AIgSxNQ3oeWUJi%2Fu6tzyvQuhqWpjkjS6LOoDS5NhCJAys8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXQlonIsuLttw2JMircA1LPMRoy3Q8z1a1v0WY03bUin9KqDfjM2uyvl%2BFvOKzLEpu1LZwTR7w6hsY89A8oL9lH2cfG8xpHDkqm0NbHPZCnLM3N%2Fw3YIiskRaR2%2FjZ%2Foaavf5iNAa45Lp54tKORcfcROASZ8lTpxpQWEnNVdodpkmSrraG39LBgbMVzDZmpxB0YcIDj4kpTsaaDzRhl30IhUFGhZzLM9vmztwxSPrCJbGE2DxmDPfUxlWHPSMKywcc3fhjFSwGPMgSz6rbm%2FB2LVsxeNv3v6C8r3%2F2OEEWsmep66zlCzj25wVG66tUu%2FcWq7SQ9GgJcITUi7lUkHaQFVLKuGXgIXMzBV18qCP8NQPLYKRRwRVJvG5Jk3dNKLJTl92hg0nMZ7IRAZULq6FwZUUb3zlwZAY5KsS3BgEGyPpI331Vay2cSsDjWboBq8w6BRx2nPjOu3Ea6XoDd1%2BR3umiwNxYwY5QdgOVafNLZKQjU9BDDt9nr4gHnghV4yQC0bU4bwgCGUV2G%2Bf0wLbt%2BFdGEQezeosL%2BBRKWNSDpoCn11FDx7nabg%2B91DCadbcEmIb7fmwM%2BzuB%2FCs%2BsT1pgvmA0XA1YC%2Fwt9gUlMtWjYcf1XCdz4mcxNi9TfvpTFQA6w6188ve32Y%2BLMN%2BIsNcGOqUB9qAqYCZV1piaWt%2BkYwufd%2BnVtEjgfOAJUkZNuMLj4bM5YPCsBLvN5zuvY2B4HLF%2F4MDOdbyxTCQC487lzwlg5Y8O2in%2BobP212ol4JiBnwDnMzt4nkhfAZH0TUZBUUc8BppETPQuzs9GU8mRw7ABR4zsS2fmdendFc3IC2oNf%2FWDjvC360wU2mBtXdZwXUvxU0z9VpBlfo26SwKHoYZsJonIzl%2BV&X-Amz-Signature=113e2897457040d5b17d43ba4dc4544886d75075c91f27362bea1b6663a7908c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCCHWKO2%2F20261105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261105T052436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0TKQnBqKNN6%2Bc3j7w5b1UTwIqzWQvuMTSFfxcZG28wIgFXwri835KS3n7wgGXDzmEt%2BYlLhF2moy2t9dtIxKZ6IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSWhzbWe4binp%2BvICrcAyaUboetcjucTNThhLr3Dwd3%2FiWKwxJGSzSx6LKEWPwL%2Bb%2FPkz43koqyXUpUIoP4i4GD6xbAo7Mx3aVmh7ny68149G624xbmgUTfJb7QP%2BkesYv%2BL1TbeGGnaVu%2F9%2F%2BOz3NZaL7ZY7ZVdXff0071NGUXbMKxq6Re5ZN8Q%2BZBkJ07YN0ia71ZXgMrVkGaQOCL%2BVYUVJwEQlg9VONcAgzPX7GmXTE3g9aVMqzPFuIG635gATKpodqTSpZHoFI8lIbKIMNZAByQ8hKBtf%2B7J74wOcWtNbKVxKnVruLfnXqy3R4TMYLm6dpgnEztIQ8McvzEsYskVAWO3uRn65U%2Fb%2FKAKwbtj0SvE9bYF6okgfhrMFEhbtoX%2BFGiHOTC%2B7Zi67McYU3dMNpV3shiB9iBR2zgW3blL8ueTNNq%2BKz2N2cT2pP7UP1aA8Q02t6GCED8ncDCe1COUqfdiAwHekndOr2IVTzmeaQNvO4Rr98iuPI4eyXUipVNdoDbk2AniYu%2F2MM4RNFWVVdQfy0EywEllJEIkPFum2uvqs27Iuiuw3yNcss%2BGESShNZa2OVQE6EqilOnDw%2BRq7ImvwjB6SSZRdZ7CYuREi5iPRLiEge6vUcJCDLv%2FJntwC5mz8oyubACMMqIsNcGOqUB3ptEDVoGIAqs89AwHvkYc15RqjlInmz1%2F2GbyhSGyqV5aX54dU8%2BwnswxLqPUmXro6TiylfIYtN2DO7wHILF3zOqUQO96JEdzForSARPTZjCU9RUsCVP7kGMyNO0V1spP2JjFVe0%2BoxJHjScN0s0ZLTXzXEUmFXc5SaQtVFoS3BqKnWeZrvBPEtNCVUGAVCzKsAWg7Ae%2BuySrSv4hwrb4BlfXTxb&X-Amz-Signature=bf809767b8e420f57bd52a3c7c266f3d6d4ab68dddebe0f8dc5a301762eb9982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

