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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6IBET3%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGBOO3SvEmjpTiQMnLa2XKAi9ZW2HoeyYHM19IAmhC8DAiBz7FMboeSmPuYaB7ocTQXBb3PGZw7crcLe3PlwAtOw%2Bir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMBiJ%2FqzmBTYbG5PYZKtwD5%2B6S9DpNIFoiyVYkQJh31NtpmwSs%2FxEft%2BVnIuOVlTkWYOD4UAdFBrO1VJQIeXDM4fPuyMNgwaRoEVplNqk3z4Q3d987IOMESLoBmmxkC%2BybbK4viWeLoIvkzwP4d2YwCyIQoSmdoLgZWgSDbY%2B8PkkjEZXIyf8Fx0NvPg3Pfx1KyZg3ywlzTENBTIpILkOqv3tHwRxXZCVMBzURyfe%2Fme5L2iPTJsLO1q%2Be0cBM9R3Ar8icLePKpuFDRVgnVphIx%2F5KTs%2Fc07%2FtBmwpp8HCE5woqc44x3EyaDztQzGqEZKdst0Y%2F8CBP7Q1sDAJ6hxZljylgX40f4VL%2FIAh%2BGwJEtmMASmlMNPrrOT%2BluGdkg%2Bf%2FzQ313PCwT%2BoSuNSYcAje6qM4xYD9K85mMSNnoCpL%2Br3qecjlEgieIO11RNqo97M2uCcmWpCrLoDxslXDeIlSKWppetLsbp0%2FNJjDY66GJ36Bx3JOl8rQu1yxsZ5sjPbyTVKlm%2BqU1pvUn933m1qf8MclD8KRnargvpR%2FqOf3%2BFAJJE02TFHFaQg8lOl1FI6FXKzIpG6HH61GMOi0wxS9WiNHs3VNAnB3MOcD%2FQLeCZAAgItfoppfC72c0l7cm1KXQLb%2F16V0rCnTocw5tPP0wY6pgGLYJMXF987jSQd%2FAbAC0JaWEKiKjiyy49KU87qsAZvQyja1yJAVvuiDrISmXLoz2L4sxlMaansQ3Dsacnc9TVlFC63vaYECBtlJn8BWGSIjRXDxSHMMrwEw%2Bp2bN%2BENuuGA9cwHCTgpeNnwnXOY%2BYQRVjncgkw7Mn34HtDNU37N%2FGfWWsy23htjipfVGGk3C1z7joj0oxsAHD3j6ZAvAZlLaKXZUtg&X-Amz-Signature=db77610f2caf961ea162fb4cbe5b640595b330a72960fc00d54bef660eb495df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDWM7QA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDH2Yec86MhrSZF0L%2FO4V5LqvppE9w4O3JVeel0%2BnE11QIgHN35CkubPbUpgZR4djAAidheP7NWj2W5HA4jiGuMSKwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOM%2F9nPVNu9eM8mblCrcA%2FM32Db3wnxGMJKcF86Onx31wQiZdgSNwyimWutrNpIzpp%2F01iSsgBwZ%2FkwGyyFG8VfHbx6g01inQwxhfATnFegzogCIOpUVczyLcuVyA7r2%2B%2BIhS8id2UUkCQhPJWeEn%2FFKLs5zcHK7sGpj8jNFOy%2BFZd4brr%2F2sB5oz3ExFj3hyOeNGr0%2FJ%2FI0E7%2FfG2OB%2BHPjUBJ3PkFW2p8NAlN82H72fzyU9ZaLMS0a7%2BB2oZ4H%2BYTGbbHhYvpW1NCmm2O%2F3pVZSUtA0%2B5UncU22TF1TmzkKqQMjEe9rBsd5DLrGKT68bMvbf5WWE7JxwUuYGp%2FIJG61NeM1D%2FvFModVi1HJe8rV3kf%2FJeyM7%2Fq7KLzgkSLTasctYcJB6NPToAYVStv7d18y85NjIuDFYE8ft3Vk%2F2BcFe%2FH8RUHnLpUQjtW30pYaqnpRSkbtrL3bsXDUbKi48NE7bpBZImDMw0%2BD0%2BJ1d6C9Oi7EUOLZ9QRahB7%2BFlAFq1pBeoZkJWvckPMfbB9irmgIYzRDZPQK6DXrSEOocBk2SlyBn9qEu5E%2BfBejDTPe%2BZD3rvBpO2tWtbdGPrr34jSkJaJ%2F16KASkJIuB%2BjjvFI4zq2K57I8LI7HaVIZ0O34cSY0etENloE3vMKPgz9MGOqUBAswyDwnfkCpn3tUjkCNWW7BOasOmyZFb5eWVT27PC1L7MZk7h%2ByZ2aXPVQwlwJX1JBuJriZo41wo2uF976yRP4PP6H9ceed3yLpLoHTVYm9MB8REhY0tC8fYF2DmazaZEDmAtM%2B83B%2B0sqrQPj3eee74AWHHhhSO8EeVBwG4MAhJg3Gcw2M7kv6bhCA9a0adonQC4FdRfF6c8hC2HV4f1g%2BSQJ0v&X-Amz-Signature=dde3b5264977eea006e32ec3f179e233877b2e23d6d1b2c837003fc361f8f057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDWM7QA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDH2Yec86MhrSZF0L%2FO4V5LqvppE9w4O3JVeel0%2BnE11QIgHN35CkubPbUpgZR4djAAidheP7NWj2W5HA4jiGuMSKwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOM%2F9nPVNu9eM8mblCrcA%2FM32Db3wnxGMJKcF86Onx31wQiZdgSNwyimWutrNpIzpp%2F01iSsgBwZ%2FkwGyyFG8VfHbx6g01inQwxhfATnFegzogCIOpUVczyLcuVyA7r2%2B%2BIhS8id2UUkCQhPJWeEn%2FFKLs5zcHK7sGpj8jNFOy%2BFZd4brr%2F2sB5oz3ExFj3hyOeNGr0%2FJ%2FI0E7%2FfG2OB%2BHPjUBJ3PkFW2p8NAlN82H72fzyU9ZaLMS0a7%2BB2oZ4H%2BYTGbbHhYvpW1NCmm2O%2F3pVZSUtA0%2B5UncU22TF1TmzkKqQMjEe9rBsd5DLrGKT68bMvbf5WWE7JxwUuYGp%2FIJG61NeM1D%2FvFModVi1HJe8rV3kf%2FJeyM7%2Fq7KLzgkSLTasctYcJB6NPToAYVStv7d18y85NjIuDFYE8ft3Vk%2F2BcFe%2FH8RUHnLpUQjtW30pYaqnpRSkbtrL3bsXDUbKi48NE7bpBZImDMw0%2BD0%2BJ1d6C9Oi7EUOLZ9QRahB7%2BFlAFq1pBeoZkJWvckPMfbB9irmgIYzRDZPQK6DXrSEOocBk2SlyBn9qEu5E%2BfBejDTPe%2BZD3rvBpO2tWtbdGPrr34jSkJaJ%2F16KASkJIuB%2BjjvFI4zq2K57I8LI7HaVIZ0O34cSY0etENloE3vMKPgz9MGOqUBAswyDwnfkCpn3tUjkCNWW7BOasOmyZFb5eWVT27PC1L7MZk7h%2ByZ2aXPVQwlwJX1JBuJriZo41wo2uF976yRP4PP6H9ceed3yLpLoHTVYm9MB8REhY0tC8fYF2DmazaZEDmAtM%2B83B%2B0sqrQPj3eee74AWHHhhSO8EeVBwG4MAhJg3Gcw2M7kv6bhCA9a0adonQC4FdRfF6c8hC2HV4f1g%2BSQJ0v&X-Amz-Signature=5557648735cb3958ae997425447ae79dff285c922974312bab0787ebe2b20b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDWM7QA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDH2Yec86MhrSZF0L%2FO4V5LqvppE9w4O3JVeel0%2BnE11QIgHN35CkubPbUpgZR4djAAidheP7NWj2W5HA4jiGuMSKwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOM%2F9nPVNu9eM8mblCrcA%2FM32Db3wnxGMJKcF86Onx31wQiZdgSNwyimWutrNpIzpp%2F01iSsgBwZ%2FkwGyyFG8VfHbx6g01inQwxhfATnFegzogCIOpUVczyLcuVyA7r2%2B%2BIhS8id2UUkCQhPJWeEn%2FFKLs5zcHK7sGpj8jNFOy%2BFZd4brr%2F2sB5oz3ExFj3hyOeNGr0%2FJ%2FI0E7%2FfG2OB%2BHPjUBJ3PkFW2p8NAlN82H72fzyU9ZaLMS0a7%2BB2oZ4H%2BYTGbbHhYvpW1NCmm2O%2F3pVZSUtA0%2B5UncU22TF1TmzkKqQMjEe9rBsd5DLrGKT68bMvbf5WWE7JxwUuYGp%2FIJG61NeM1D%2FvFModVi1HJe8rV3kf%2FJeyM7%2Fq7KLzgkSLTasctYcJB6NPToAYVStv7d18y85NjIuDFYE8ft3Vk%2F2BcFe%2FH8RUHnLpUQjtW30pYaqnpRSkbtrL3bsXDUbKi48NE7bpBZImDMw0%2BD0%2BJ1d6C9Oi7EUOLZ9QRahB7%2BFlAFq1pBeoZkJWvckPMfbB9irmgIYzRDZPQK6DXrSEOocBk2SlyBn9qEu5E%2BfBejDTPe%2BZD3rvBpO2tWtbdGPrr34jSkJaJ%2F16KASkJIuB%2BjjvFI4zq2K57I8LI7HaVIZ0O34cSY0etENloE3vMKPgz9MGOqUBAswyDwnfkCpn3tUjkCNWW7BOasOmyZFb5eWVT27PC1L7MZk7h%2ByZ2aXPVQwlwJX1JBuJriZo41wo2uF976yRP4PP6H9ceed3yLpLoHTVYm9MB8REhY0tC8fYF2DmazaZEDmAtM%2B83B%2B0sqrQPj3eee74AWHHhhSO8EeVBwG4MAhJg3Gcw2M7kv6bhCA9a0adonQC4FdRfF6c8hC2HV4f1g%2BSQJ0v&X-Amz-Signature=f44281c846ea15935cbb092d50afcac36e292315480f86fd5eaa70ed13f03cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDWM7QA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDH2Yec86MhrSZF0L%2FO4V5LqvppE9w4O3JVeel0%2BnE11QIgHN35CkubPbUpgZR4djAAidheP7NWj2W5HA4jiGuMSKwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOM%2F9nPVNu9eM8mblCrcA%2FM32Db3wnxGMJKcF86Onx31wQiZdgSNwyimWutrNpIzpp%2F01iSsgBwZ%2FkwGyyFG8VfHbx6g01inQwxhfATnFegzogCIOpUVczyLcuVyA7r2%2B%2BIhS8id2UUkCQhPJWeEn%2FFKLs5zcHK7sGpj8jNFOy%2BFZd4brr%2F2sB5oz3ExFj3hyOeNGr0%2FJ%2FI0E7%2FfG2OB%2BHPjUBJ3PkFW2p8NAlN82H72fzyU9ZaLMS0a7%2BB2oZ4H%2BYTGbbHhYvpW1NCmm2O%2F3pVZSUtA0%2B5UncU22TF1TmzkKqQMjEe9rBsd5DLrGKT68bMvbf5WWE7JxwUuYGp%2FIJG61NeM1D%2FvFModVi1HJe8rV3kf%2FJeyM7%2Fq7KLzgkSLTasctYcJB6NPToAYVStv7d18y85NjIuDFYE8ft3Vk%2F2BcFe%2FH8RUHnLpUQjtW30pYaqnpRSkbtrL3bsXDUbKi48NE7bpBZImDMw0%2BD0%2BJ1d6C9Oi7EUOLZ9QRahB7%2BFlAFq1pBeoZkJWvckPMfbB9irmgIYzRDZPQK6DXrSEOocBk2SlyBn9qEu5E%2BfBejDTPe%2BZD3rvBpO2tWtbdGPrr34jSkJaJ%2F16KASkJIuB%2BjjvFI4zq2K57I8LI7HaVIZ0O34cSY0etENloE3vMKPgz9MGOqUBAswyDwnfkCpn3tUjkCNWW7BOasOmyZFb5eWVT27PC1L7MZk7h%2ByZ2aXPVQwlwJX1JBuJriZo41wo2uF976yRP4PP6H9ceed3yLpLoHTVYm9MB8REhY0tC8fYF2DmazaZEDmAtM%2B83B%2B0sqrQPj3eee74AWHHhhSO8EeVBwG4MAhJg3Gcw2M7kv6bhCA9a0adonQC4FdRfF6c8hC2HV4f1g%2BSQJ0v&X-Amz-Signature=0308d9b2a1b5b6196420f46eb601e73ce92d2cdbc8e410e394c8f885d3c2442f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDWM7QA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDH2Yec86MhrSZF0L%2FO4V5LqvppE9w4O3JVeel0%2BnE11QIgHN35CkubPbUpgZR4djAAidheP7NWj2W5HA4jiGuMSKwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOM%2F9nPVNu9eM8mblCrcA%2FM32Db3wnxGMJKcF86Onx31wQiZdgSNwyimWutrNpIzpp%2F01iSsgBwZ%2FkwGyyFG8VfHbx6g01inQwxhfATnFegzogCIOpUVczyLcuVyA7r2%2B%2BIhS8id2UUkCQhPJWeEn%2FFKLs5zcHK7sGpj8jNFOy%2BFZd4brr%2F2sB5oz3ExFj3hyOeNGr0%2FJ%2FI0E7%2FfG2OB%2BHPjUBJ3PkFW2p8NAlN82H72fzyU9ZaLMS0a7%2BB2oZ4H%2BYTGbbHhYvpW1NCmm2O%2F3pVZSUtA0%2B5UncU22TF1TmzkKqQMjEe9rBsd5DLrGKT68bMvbf5WWE7JxwUuYGp%2FIJG61NeM1D%2FvFModVi1HJe8rV3kf%2FJeyM7%2Fq7KLzgkSLTasctYcJB6NPToAYVStv7d18y85NjIuDFYE8ft3Vk%2F2BcFe%2FH8RUHnLpUQjtW30pYaqnpRSkbtrL3bsXDUbKi48NE7bpBZImDMw0%2BD0%2BJ1d6C9Oi7EUOLZ9QRahB7%2BFlAFq1pBeoZkJWvckPMfbB9irmgIYzRDZPQK6DXrSEOocBk2SlyBn9qEu5E%2BfBejDTPe%2BZD3rvBpO2tWtbdGPrr34jSkJaJ%2F16KASkJIuB%2BjjvFI4zq2K57I8LI7HaVIZ0O34cSY0etENloE3vMKPgz9MGOqUBAswyDwnfkCpn3tUjkCNWW7BOasOmyZFb5eWVT27PC1L7MZk7h%2ByZ2aXPVQwlwJX1JBuJriZo41wo2uF976yRP4PP6H9ceed3yLpLoHTVYm9MB8REhY0tC8fYF2DmazaZEDmAtM%2B83B%2B0sqrQPj3eee74AWHHhhSO8EeVBwG4MAhJg3Gcw2M7kv6bhCA9a0adonQC4FdRfF6c8hC2HV4f1g%2BSQJ0v&X-Amz-Signature=5fa94ec259f78056fdc2720b9bcfce8871ad5cb47bcdbf0d52d3e173db1006c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6IBET3%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGBOO3SvEmjpTiQMnLa2XKAi9ZW2HoeyYHM19IAmhC8DAiBz7FMboeSmPuYaB7ocTQXBb3PGZw7crcLe3PlwAtOw%2Bir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMBiJ%2FqzmBTYbG5PYZKtwD5%2B6S9DpNIFoiyVYkQJh31NtpmwSs%2FxEft%2BVnIuOVlTkWYOD4UAdFBrO1VJQIeXDM4fPuyMNgwaRoEVplNqk3z4Q3d987IOMESLoBmmxkC%2BybbK4viWeLoIvkzwP4d2YwCyIQoSmdoLgZWgSDbY%2B8PkkjEZXIyf8Fx0NvPg3Pfx1KyZg3ywlzTENBTIpILkOqv3tHwRxXZCVMBzURyfe%2Fme5L2iPTJsLO1q%2Be0cBM9R3Ar8icLePKpuFDRVgnVphIx%2F5KTs%2Fc07%2FtBmwpp8HCE5woqc44x3EyaDztQzGqEZKdst0Y%2F8CBP7Q1sDAJ6hxZljylgX40f4VL%2FIAh%2BGwJEtmMASmlMNPrrOT%2BluGdkg%2Bf%2FzQ313PCwT%2BoSuNSYcAje6qM4xYD9K85mMSNnoCpL%2Br3qecjlEgieIO11RNqo97M2uCcmWpCrLoDxslXDeIlSKWppetLsbp0%2FNJjDY66GJ36Bx3JOl8rQu1yxsZ5sjPbyTVKlm%2BqU1pvUn933m1qf8MclD8KRnargvpR%2FqOf3%2BFAJJE02TFHFaQg8lOl1FI6FXKzIpG6HH61GMOi0wxS9WiNHs3VNAnB3MOcD%2FQLeCZAAgItfoppfC72c0l7cm1KXQLb%2F16V0rCnTocw5tPP0wY6pgGLYJMXF987jSQd%2FAbAC0JaWEKiKjiyy49KU87qsAZvQyja1yJAVvuiDrISmXLoz2L4sxlMaansQ3Dsacnc9TVlFC63vaYECBtlJn8BWGSIjRXDxSHMMrwEw%2Bp2bN%2BENuuGA9cwHCTgpeNnwnXOY%2BYQRVjncgkw7Mn34HtDNU37N%2FGfWWsy23htjipfVGGk3C1z7joj0oxsAHD3j6ZAvAZlLaKXZUtg&X-Amz-Signature=230c2386e0d7203d30494448d18cd2eb00df9ef408ab427b7c85a10a2dddd593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

