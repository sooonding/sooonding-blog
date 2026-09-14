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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7JET77%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHQiTpaNhFyYKBJrnOOa3h95%2BW5%2BADpd7g4xPoqwAYCuAiEAx6m5OAt%2BkLNrC%2FuWgZCzoqREpv2pBirlaJmGbru0svUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo6jQmsFfAwbO%2F6bircA295vXvFNdTnSdUBCw5UR0Tf%2FWwZZWdR8Ontn1%2B73pu7PoTXnk9s31OUqxZ194K%2BAI1mkyoFZB1GtDx3xYblCEeeT%2F4dP9X26MB3EX8lo1NyXsNrFjyMSlsLVBJlIqWWkeHVyVOWq10Cl%2BfEXRZi%2BqMc2FmU50Za3P8jIvYr85D8kZvMJpGYdYQP1nRHpun9ZTAfpsa7aqmQrcd85qo7D7To%2FKzgry6J59puVz4pid3icDoWFHRmO7QUhmmAt6wesYMzZ1wQuNz5wi4qoiP0Yk9G8uGT9Vo43D3H7rKXp0EgONNQuzKrUgwHAGzxxjIWKzCXWSaKnjjZzcOBfUwShey%2BoOwU21YnkmvRSPNcuQhb4snD2Vhl%2FttjiTh%2F3ZKbfi%2FEnrK%2Fqr7yAMYtlXG2l116dRUZQX9695c%2F5IizMHJRv%2BgrscYmlD%2BePi0AQYN3ILOO0SRTKsaDf1p97U7G1JDLS4CFqwnag0gWL0GSmPqD%2BXtqPSo%2B%2FXgE6K%2B17hLgcWxY9gmhXhB6gf2NNG%2Fh084MWH%2BqtRRCL%2B7lypeIssbLz1lSdeiSJm7gnjlaBBbE2zS5FNoJFdpXDZvTm7SfTSAJHXR6q547jooY1nKyguEuFdZ2Yrp8rqlJ4AY0MJTSndUGOqUBwsAOLO4bF1vUOJzqADAlZZ7LR73OEgZP9FQl1gIFWTtwlk8eef2RbmB7f9GaU3jrNG7mVNKfH5ckDWp9AQfsKv4j2FbdZUhGivsyyqUBJVi37vGyzXa1k8jIxUlFLoF%2BYVzAtXPWnGRYea9pj3h3ZQfsVGeXkWijDjuS9ScqAZH2UeJvLc9q%2F4NzLyL%2BtMR261od1ZlYS4f9Kiw%2FGuH6VG2ImzZM&X-Amz-Signature=b93f0c4d75c05f36c859caae37c8e9e4aaeab79afec32b3c55eeedf10dbb6cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKERQPE%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHlIV7bF5gNpxQ3qJHxoOpdIFaqeVclQ37kHXh1C1QFgAiEAzN0vXgLnjG4TT1CfidAKnsRU083MWUCCCsTLLT55%2FzYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5EXePnWg54QdDcGSrcA61NKlNHhHyffiCgy0tPquG2tW0QqOX0wEvSLohua7LZJtIew%2BF4NiJL9jP8Z7nBrgoBB6Kd0dGxSbswgNjVaMVZjrRDhoQjzoUfrTDiEhhtffpphbbMcBSXg3JXl6TJHpsGQpkcdxA5CZmPJC5vEhXdHgkx2tqTnKpTkEz3nUdcLgJeuZxmzQGpx0H3x007%2BKyZeHW1%2BZvHpzwxAKxLiNiA%2F8f3ejuISxFZG6WoxcxPu9HqtChoTT2yT5d1EfMFY5EW3DikhTKtCt5tPJFsgOLlgCGaTqynPa5r5V1bDS3HJzorC5x0WVzRkyrZoD17Q8Xwbaq3xvWtSZ1IU0cCgXOT02eSxU%2FOL2etwYJE7ZkYQfBZzHenfB0FkC%2FECSQp5vR%2FjJiLqV7WEYWH869YwvaJ9AIJ9kD%2BijNy1lsYnZUnGfwnHKpXRvxrr83fE26OqDqji0cKsFKJMvpvk4lJwG9GckSe7vu%2BgDQtWLGngjEttpYOdLdeIwVacfWmWJGV73aXddOM54%2Biox1YkyF8G%2BvdSVq4xJyn%2BfppJooYU4TMOWJXvt2NuM%2B2fuyRQBkAuVlhLCXp7UimWtwxrsH0apd3wJQvUSUpOPwn%2FOt%2FrLAVrlk%2BjzZBE9P3suzCMPHRndUGOqUBHcuXD5QaS3pyaUxsuK9phcd7P9sPlQ%2FfIhTYoe6TNQXZNP72Va67%2BfayPywkRsV%2BCT4xM70noNkRGPVZUg%2BFa2DtJ3JSHHVyIsqP%2BO5AbGGWvQwdQx8YNbg%2B0vHz0mmcRcbad7fj4XseaBlUOq03KRO9xNwY0E7j9fvVAZboq14hIAO1UcRj1YF%2FTPDFCN1ImOZDitCQE9M0y%2FO11LY1KpvKAlea&X-Amz-Signature=5cc9942f5802518c9d62f47921a07a759af4adaf9f2fcdac4d870c918e4015af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKERQPE%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHlIV7bF5gNpxQ3qJHxoOpdIFaqeVclQ37kHXh1C1QFgAiEAzN0vXgLnjG4TT1CfidAKnsRU083MWUCCCsTLLT55%2FzYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5EXePnWg54QdDcGSrcA61NKlNHhHyffiCgy0tPquG2tW0QqOX0wEvSLohua7LZJtIew%2BF4NiJL9jP8Z7nBrgoBB6Kd0dGxSbswgNjVaMVZjrRDhoQjzoUfrTDiEhhtffpphbbMcBSXg3JXl6TJHpsGQpkcdxA5CZmPJC5vEhXdHgkx2tqTnKpTkEz3nUdcLgJeuZxmzQGpx0H3x007%2BKyZeHW1%2BZvHpzwxAKxLiNiA%2F8f3ejuISxFZG6WoxcxPu9HqtChoTT2yT5d1EfMFY5EW3DikhTKtCt5tPJFsgOLlgCGaTqynPa5r5V1bDS3HJzorC5x0WVzRkyrZoD17Q8Xwbaq3xvWtSZ1IU0cCgXOT02eSxU%2FOL2etwYJE7ZkYQfBZzHenfB0FkC%2FECSQp5vR%2FjJiLqV7WEYWH869YwvaJ9AIJ9kD%2BijNy1lsYnZUnGfwnHKpXRvxrr83fE26OqDqji0cKsFKJMvpvk4lJwG9GckSe7vu%2BgDQtWLGngjEttpYOdLdeIwVacfWmWJGV73aXddOM54%2Biox1YkyF8G%2BvdSVq4xJyn%2BfppJooYU4TMOWJXvt2NuM%2B2fuyRQBkAuVlhLCXp7UimWtwxrsH0apd3wJQvUSUpOPwn%2FOt%2FrLAVrlk%2BjzZBE9P3suzCMPHRndUGOqUBHcuXD5QaS3pyaUxsuK9phcd7P9sPlQ%2FfIhTYoe6TNQXZNP72Va67%2BfayPywkRsV%2BCT4xM70noNkRGPVZUg%2BFa2DtJ3JSHHVyIsqP%2BO5AbGGWvQwdQx8YNbg%2B0vHz0mmcRcbad7fj4XseaBlUOq03KRO9xNwY0E7j9fvVAZboq14hIAO1UcRj1YF%2FTPDFCN1ImOZDitCQE9M0y%2FO11LY1KpvKAlea&X-Amz-Signature=c584d6b39cd5bd1a174cbd9461406c3da9f83453522a17972dd3c9d95c9428af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKERQPE%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHlIV7bF5gNpxQ3qJHxoOpdIFaqeVclQ37kHXh1C1QFgAiEAzN0vXgLnjG4TT1CfidAKnsRU083MWUCCCsTLLT55%2FzYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5EXePnWg54QdDcGSrcA61NKlNHhHyffiCgy0tPquG2tW0QqOX0wEvSLohua7LZJtIew%2BF4NiJL9jP8Z7nBrgoBB6Kd0dGxSbswgNjVaMVZjrRDhoQjzoUfrTDiEhhtffpphbbMcBSXg3JXl6TJHpsGQpkcdxA5CZmPJC5vEhXdHgkx2tqTnKpTkEz3nUdcLgJeuZxmzQGpx0H3x007%2BKyZeHW1%2BZvHpzwxAKxLiNiA%2F8f3ejuISxFZG6WoxcxPu9HqtChoTT2yT5d1EfMFY5EW3DikhTKtCt5tPJFsgOLlgCGaTqynPa5r5V1bDS3HJzorC5x0WVzRkyrZoD17Q8Xwbaq3xvWtSZ1IU0cCgXOT02eSxU%2FOL2etwYJE7ZkYQfBZzHenfB0FkC%2FECSQp5vR%2FjJiLqV7WEYWH869YwvaJ9AIJ9kD%2BijNy1lsYnZUnGfwnHKpXRvxrr83fE26OqDqji0cKsFKJMvpvk4lJwG9GckSe7vu%2BgDQtWLGngjEttpYOdLdeIwVacfWmWJGV73aXddOM54%2Biox1YkyF8G%2BvdSVq4xJyn%2BfppJooYU4TMOWJXvt2NuM%2B2fuyRQBkAuVlhLCXp7UimWtwxrsH0apd3wJQvUSUpOPwn%2FOt%2FrLAVrlk%2BjzZBE9P3suzCMPHRndUGOqUBHcuXD5QaS3pyaUxsuK9phcd7P9sPlQ%2FfIhTYoe6TNQXZNP72Va67%2BfayPywkRsV%2BCT4xM70noNkRGPVZUg%2BFa2DtJ3JSHHVyIsqP%2BO5AbGGWvQwdQx8YNbg%2B0vHz0mmcRcbad7fj4XseaBlUOq03KRO9xNwY0E7j9fvVAZboq14hIAO1UcRj1YF%2FTPDFCN1ImOZDitCQE9M0y%2FO11LY1KpvKAlea&X-Amz-Signature=20e801df2f4b0c3327eded468bbe0ea388184f9c0debfcd6bc95961960442a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKERQPE%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHlIV7bF5gNpxQ3qJHxoOpdIFaqeVclQ37kHXh1C1QFgAiEAzN0vXgLnjG4TT1CfidAKnsRU083MWUCCCsTLLT55%2FzYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5EXePnWg54QdDcGSrcA61NKlNHhHyffiCgy0tPquG2tW0QqOX0wEvSLohua7LZJtIew%2BF4NiJL9jP8Z7nBrgoBB6Kd0dGxSbswgNjVaMVZjrRDhoQjzoUfrTDiEhhtffpphbbMcBSXg3JXl6TJHpsGQpkcdxA5CZmPJC5vEhXdHgkx2tqTnKpTkEz3nUdcLgJeuZxmzQGpx0H3x007%2BKyZeHW1%2BZvHpzwxAKxLiNiA%2F8f3ejuISxFZG6WoxcxPu9HqtChoTT2yT5d1EfMFY5EW3DikhTKtCt5tPJFsgOLlgCGaTqynPa5r5V1bDS3HJzorC5x0WVzRkyrZoD17Q8Xwbaq3xvWtSZ1IU0cCgXOT02eSxU%2FOL2etwYJE7ZkYQfBZzHenfB0FkC%2FECSQp5vR%2FjJiLqV7WEYWH869YwvaJ9AIJ9kD%2BijNy1lsYnZUnGfwnHKpXRvxrr83fE26OqDqji0cKsFKJMvpvk4lJwG9GckSe7vu%2BgDQtWLGngjEttpYOdLdeIwVacfWmWJGV73aXddOM54%2Biox1YkyF8G%2BvdSVq4xJyn%2BfppJooYU4TMOWJXvt2NuM%2B2fuyRQBkAuVlhLCXp7UimWtwxrsH0apd3wJQvUSUpOPwn%2FOt%2FrLAVrlk%2BjzZBE9P3suzCMPHRndUGOqUBHcuXD5QaS3pyaUxsuK9phcd7P9sPlQ%2FfIhTYoe6TNQXZNP72Va67%2BfayPywkRsV%2BCT4xM70noNkRGPVZUg%2BFa2DtJ3JSHHVyIsqP%2BO5AbGGWvQwdQx8YNbg%2B0vHz0mmcRcbad7fj4XseaBlUOq03KRO9xNwY0E7j9fvVAZboq14hIAO1UcRj1YF%2FTPDFCN1ImOZDitCQE9M0y%2FO11LY1KpvKAlea&X-Amz-Signature=898a1c813e7e6c5d8e731b5f7f2737c207599342cbabecd60b4cee4e3253ee14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKERQPE%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHlIV7bF5gNpxQ3qJHxoOpdIFaqeVclQ37kHXh1C1QFgAiEAzN0vXgLnjG4TT1CfidAKnsRU083MWUCCCsTLLT55%2FzYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5EXePnWg54QdDcGSrcA61NKlNHhHyffiCgy0tPquG2tW0QqOX0wEvSLohua7LZJtIew%2BF4NiJL9jP8Z7nBrgoBB6Kd0dGxSbswgNjVaMVZjrRDhoQjzoUfrTDiEhhtffpphbbMcBSXg3JXl6TJHpsGQpkcdxA5CZmPJC5vEhXdHgkx2tqTnKpTkEz3nUdcLgJeuZxmzQGpx0H3x007%2BKyZeHW1%2BZvHpzwxAKxLiNiA%2F8f3ejuISxFZG6WoxcxPu9HqtChoTT2yT5d1EfMFY5EW3DikhTKtCt5tPJFsgOLlgCGaTqynPa5r5V1bDS3HJzorC5x0WVzRkyrZoD17Q8Xwbaq3xvWtSZ1IU0cCgXOT02eSxU%2FOL2etwYJE7ZkYQfBZzHenfB0FkC%2FECSQp5vR%2FjJiLqV7WEYWH869YwvaJ9AIJ9kD%2BijNy1lsYnZUnGfwnHKpXRvxrr83fE26OqDqji0cKsFKJMvpvk4lJwG9GckSe7vu%2BgDQtWLGngjEttpYOdLdeIwVacfWmWJGV73aXddOM54%2Biox1YkyF8G%2BvdSVq4xJyn%2BfppJooYU4TMOWJXvt2NuM%2B2fuyRQBkAuVlhLCXp7UimWtwxrsH0apd3wJQvUSUpOPwn%2FOt%2FrLAVrlk%2BjzZBE9P3suzCMPHRndUGOqUBHcuXD5QaS3pyaUxsuK9phcd7P9sPlQ%2FfIhTYoe6TNQXZNP72Va67%2BfayPywkRsV%2BCT4xM70noNkRGPVZUg%2BFa2DtJ3JSHHVyIsqP%2BO5AbGGWvQwdQx8YNbg%2B0vHz0mmcRcbad7fj4XseaBlUOq03KRO9xNwY0E7j9fvVAZboq14hIAO1UcRj1YF%2FTPDFCN1ImOZDitCQE9M0y%2FO11LY1KpvKAlea&X-Amz-Signature=4e7638fd73e05042d51a01b7f6d405f44830fc599047e5401ea337bcf1689a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA7JET77%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T033917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIHQiTpaNhFyYKBJrnOOa3h95%2BW5%2BADpd7g4xPoqwAYCuAiEAx6m5OAt%2BkLNrC%2FuWgZCzoqREpv2pBirlaJmGbru0svUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo6jQmsFfAwbO%2F6bircA295vXvFNdTnSdUBCw5UR0Tf%2FWwZZWdR8Ontn1%2B73pu7PoTXnk9s31OUqxZ194K%2BAI1mkyoFZB1GtDx3xYblCEeeT%2F4dP9X26MB3EX8lo1NyXsNrFjyMSlsLVBJlIqWWkeHVyVOWq10Cl%2BfEXRZi%2BqMc2FmU50Za3P8jIvYr85D8kZvMJpGYdYQP1nRHpun9ZTAfpsa7aqmQrcd85qo7D7To%2FKzgry6J59puVz4pid3icDoWFHRmO7QUhmmAt6wesYMzZ1wQuNz5wi4qoiP0Yk9G8uGT9Vo43D3H7rKXp0EgONNQuzKrUgwHAGzxxjIWKzCXWSaKnjjZzcOBfUwShey%2BoOwU21YnkmvRSPNcuQhb4snD2Vhl%2FttjiTh%2F3ZKbfi%2FEnrK%2Fqr7yAMYtlXG2l116dRUZQX9695c%2F5IizMHJRv%2BgrscYmlD%2BePi0AQYN3ILOO0SRTKsaDf1p97U7G1JDLS4CFqwnag0gWL0GSmPqD%2BXtqPSo%2B%2FXgE6K%2B17hLgcWxY9gmhXhB6gf2NNG%2Fh084MWH%2BqtRRCL%2B7lypeIssbLz1lSdeiSJm7gnjlaBBbE2zS5FNoJFdpXDZvTm7SfTSAJHXR6q547jooY1nKyguEuFdZ2Yrp8rqlJ4AY0MJTSndUGOqUBwsAOLO4bF1vUOJzqADAlZZ7LR73OEgZP9FQl1gIFWTtwlk8eef2RbmB7f9GaU3jrNG7mVNKfH5ckDWp9AQfsKv4j2FbdZUhGivsyyqUBJVi37vGyzXa1k8jIxUlFLoF%2BYVzAtXPWnGRYea9pj3h3ZQfsVGeXkWijDjuS9ScqAZH2UeJvLc9q%2F4NzLyL%2BtMR261od1ZlYS4f9Kiw%2FGuH6VG2ImzZM&X-Amz-Signature=b1713d0cfca4cf0edcf6d1edffda8ea150c70eb447934a01a03ce6b4b677f600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

