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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTP4RGCA%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T010611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBzLbBQ1JM06tHQtHD9zdhWWNR%2BR3YYKKkKQ2m%2F28xTnAiEAqiQR4JD2aiaGJIHxsYnHIfr73E9HIPyZop5ORjYr8kgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLJ1hOHhQeHgVhfwRCrcA63yBgAKpc6%2FwVbZnQKEN6YSKNfubxvWJKRvWZfd2yGlgEsmVPbJElaHS8Y5PQEV%2FNoRilTyOZNKPDdXZC7l2N9vb2ZmAPyQUhUFtHtYeSLe1NnxkDtjVugg2SpWE%2F5i6uJk6wb%2F1ejLgy0VtKKH63EC%2BKMKbpV636wpRT8QdDsaBuvUdWAj6JWECDcUYOJWhzspi8mG%2BFEiNuBKjRFjEBPbcypTHKy1cBLpnTB1Lnv%2FEl5Qlu5Sti%2BAOa9EABhK%2BHWIdFb5MJxVUDSHrjGtN5G1lZ4zBHBelPadKwK%2FhHs%2FvwLGbLWN19NqDYqI6HyS8zzh8O7s3se6vwMB83IUxjraToPm28NKAwD%2Bv%2Bx%2BvO%2Bup2OSM99QCd32eCoaQ8Anu%2FbroZSsi%2FB2FxXXxlFT76pM01DtJulEQTR3vJIMi6AqiyxB7oY2mHCFPME5brorNs4QhbGgkKfzShX2%2Byuqo0C2JtqnPTl58cYAgykYSPMWfz5P%2BXAkQsR7XQVTZJkPjyVHG2aCxTCpDGkxaCSiEDQbQHiY6%2F1VqB5SliyhXlu097Ibgn81gf8vIfLsI8aYgT0313jb%2FIiAZvxszgMrzsuuHTTEhD4n0GM48ORl8DVw2wKwb08EY3MHAt8DML6UssoGOqUBlJ0T6aKsMsQF6tutZ094wR7htnxFuRAfHX8ILOXbPuV6wGt6Pn%2BQwZ3D%2FaXwTlasWV7xVVSNS3O%2FF1d%2BmRGPViOqr%2BQOmAZPwi%2BmqRh1ZZj0NIQ0KzTgSYagMOmgdYvX9qeRYaRT37bxyKVROhiIsUDADtEuymfY5%2BruLeBO6yFRkQr1s4uZBLdhJib7%2FdjyIuxFwEhbxMb3jsyp9YYljo30zj9G&X-Amz-Signature=8b02557d5e3a4050c720142090a6924a1470a869e19e8664b6de3ad15557cb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFALXYUM%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEtabz5g7LqoPFDbzLQzOoiFAOvj1DzAtjzCL%2FDdVxFtAiEA8TV0%2B2NFtFeqc%2FQ1Jlh3zjTm6PHNuILUOkZ0uoFLDqAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFb%2BoC7MaKfIF7Nl%2FircA%2FmspcMA4iybZ0fSOpXLQ2Y3CFcLbzCC5Ec2T7774o7wxr2Fnb0UuI%2B0wrdlN4FWwUYfGqFphCZytAs6I%2F8XM2LLIKPSYiaiA4Ps6j7SiVEE6xMlRm8oPvsYqv3NEqvkjTzILELjQfxewYS7XB0mI0Wpa1r3ClxaZG7L6oVVYzP%2Fod3z7Kh12vrouh3g3pDYQd3ZmucslMYT9eWags2X13sztkCgfmPQOfo545qpWGWckALakKSe8llSXa3RUlIguuAQcxjNQfpdEGA9MRs6heY0G0tmeR2tecDVOddMAqO9c%2FG6jyFHnkVZBhbIhv4H1xdyT%2BRlhYH4Uljcx7Ig0Ykr%2BygspxTZIgPBam%2FGxXwIricXdBS4GvCbsaH5iop34NOePZSP9Aft1hKV3P%2BwsgnA0mlvZpHhYMyu5tiQ4zPqbPCNqIDqyXfIJDlh7%2FkuDo%2FoRlnzvPv7q88UTPYvUVMXNGTntvtM%2B3MY8YKzo68Jilf6a3gh2Dn6CV4vuWaCdjzVACamuLXvELTljrDu1ql8AHqFfVOYFp1iXHydxGRvxXaQnHt5QqE7jaSCXkFrRWk%2BDRoL%2FsmnCAvhDPQauirXKRWy3P1PML8A1XSE67wn3G8tM2pQ9IgrxLEPMKaXssoGOqUB1lVVoMOXG%2B6MMzsOpnx6aQmWBKueo6uQ11U83WyKtn76b4JdJPRarA%2BvgmAkDyeimj7RNhQF7YJu%2BJBIHgnZzOufzxxYXfCpJotx32BzgiXDfYxKu9ByOdet7WxUnieNvh1c6qHWGY%2BLp3EIsUq93I7EN9BHR1GyCQAGK4mpZH7dpEySpP%2B6PxXZVCYuzqvnTs79WGE3PiC5%2BL0Cs3UKk0%2BPnW%2F2&X-Amz-Signature=1df63de03b5b70db7282a4a466690e40f46d7ef92a157cf591bfb56de61ce31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFALXYUM%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEtabz5g7LqoPFDbzLQzOoiFAOvj1DzAtjzCL%2FDdVxFtAiEA8TV0%2B2NFtFeqc%2FQ1Jlh3zjTm6PHNuILUOkZ0uoFLDqAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFb%2BoC7MaKfIF7Nl%2FircA%2FmspcMA4iybZ0fSOpXLQ2Y3CFcLbzCC5Ec2T7774o7wxr2Fnb0UuI%2B0wrdlN4FWwUYfGqFphCZytAs6I%2F8XM2LLIKPSYiaiA4Ps6j7SiVEE6xMlRm8oPvsYqv3NEqvkjTzILELjQfxewYS7XB0mI0Wpa1r3ClxaZG7L6oVVYzP%2Fod3z7Kh12vrouh3g3pDYQd3ZmucslMYT9eWags2X13sztkCgfmPQOfo545qpWGWckALakKSe8llSXa3RUlIguuAQcxjNQfpdEGA9MRs6heY0G0tmeR2tecDVOddMAqO9c%2FG6jyFHnkVZBhbIhv4H1xdyT%2BRlhYH4Uljcx7Ig0Ykr%2BygspxTZIgPBam%2FGxXwIricXdBS4GvCbsaH5iop34NOePZSP9Aft1hKV3P%2BwsgnA0mlvZpHhYMyu5tiQ4zPqbPCNqIDqyXfIJDlh7%2FkuDo%2FoRlnzvPv7q88UTPYvUVMXNGTntvtM%2B3MY8YKzo68Jilf6a3gh2Dn6CV4vuWaCdjzVACamuLXvELTljrDu1ql8AHqFfVOYFp1iXHydxGRvxXaQnHt5QqE7jaSCXkFrRWk%2BDRoL%2FsmnCAvhDPQauirXKRWy3P1PML8A1XSE67wn3G8tM2pQ9IgrxLEPMKaXssoGOqUB1lVVoMOXG%2B6MMzsOpnx6aQmWBKueo6uQ11U83WyKtn76b4JdJPRarA%2BvgmAkDyeimj7RNhQF7YJu%2BJBIHgnZzOufzxxYXfCpJotx32BzgiXDfYxKu9ByOdet7WxUnieNvh1c6qHWGY%2BLp3EIsUq93I7EN9BHR1GyCQAGK4mpZH7dpEySpP%2B6PxXZVCYuzqvnTs79WGE3PiC5%2BL0Cs3UKk0%2BPnW%2F2&X-Amz-Signature=84a3ccb9505f84b90f7d82bb2a11469a236c743606e1453986a27df78a86e937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFALXYUM%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEtabz5g7LqoPFDbzLQzOoiFAOvj1DzAtjzCL%2FDdVxFtAiEA8TV0%2B2NFtFeqc%2FQ1Jlh3zjTm6PHNuILUOkZ0uoFLDqAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFb%2BoC7MaKfIF7Nl%2FircA%2FmspcMA4iybZ0fSOpXLQ2Y3CFcLbzCC5Ec2T7774o7wxr2Fnb0UuI%2B0wrdlN4FWwUYfGqFphCZytAs6I%2F8XM2LLIKPSYiaiA4Ps6j7SiVEE6xMlRm8oPvsYqv3NEqvkjTzILELjQfxewYS7XB0mI0Wpa1r3ClxaZG7L6oVVYzP%2Fod3z7Kh12vrouh3g3pDYQd3ZmucslMYT9eWags2X13sztkCgfmPQOfo545qpWGWckALakKSe8llSXa3RUlIguuAQcxjNQfpdEGA9MRs6heY0G0tmeR2tecDVOddMAqO9c%2FG6jyFHnkVZBhbIhv4H1xdyT%2BRlhYH4Uljcx7Ig0Ykr%2BygspxTZIgPBam%2FGxXwIricXdBS4GvCbsaH5iop34NOePZSP9Aft1hKV3P%2BwsgnA0mlvZpHhYMyu5tiQ4zPqbPCNqIDqyXfIJDlh7%2FkuDo%2FoRlnzvPv7q88UTPYvUVMXNGTntvtM%2B3MY8YKzo68Jilf6a3gh2Dn6CV4vuWaCdjzVACamuLXvELTljrDu1ql8AHqFfVOYFp1iXHydxGRvxXaQnHt5QqE7jaSCXkFrRWk%2BDRoL%2FsmnCAvhDPQauirXKRWy3P1PML8A1XSE67wn3G8tM2pQ9IgrxLEPMKaXssoGOqUB1lVVoMOXG%2B6MMzsOpnx6aQmWBKueo6uQ11U83WyKtn76b4JdJPRarA%2BvgmAkDyeimj7RNhQF7YJu%2BJBIHgnZzOufzxxYXfCpJotx32BzgiXDfYxKu9ByOdet7WxUnieNvh1c6qHWGY%2BLp3EIsUq93I7EN9BHR1GyCQAGK4mpZH7dpEySpP%2B6PxXZVCYuzqvnTs79WGE3PiC5%2BL0Cs3UKk0%2BPnW%2F2&X-Amz-Signature=0bdd7c776f97a94ce1aa46e941b758b11155f57333119f40e7d5238e14dba3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFALXYUM%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEtabz5g7LqoPFDbzLQzOoiFAOvj1DzAtjzCL%2FDdVxFtAiEA8TV0%2B2NFtFeqc%2FQ1Jlh3zjTm6PHNuILUOkZ0uoFLDqAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFb%2BoC7MaKfIF7Nl%2FircA%2FmspcMA4iybZ0fSOpXLQ2Y3CFcLbzCC5Ec2T7774o7wxr2Fnb0UuI%2B0wrdlN4FWwUYfGqFphCZytAs6I%2F8XM2LLIKPSYiaiA4Ps6j7SiVEE6xMlRm8oPvsYqv3NEqvkjTzILELjQfxewYS7XB0mI0Wpa1r3ClxaZG7L6oVVYzP%2Fod3z7Kh12vrouh3g3pDYQd3ZmucslMYT9eWags2X13sztkCgfmPQOfo545qpWGWckALakKSe8llSXa3RUlIguuAQcxjNQfpdEGA9MRs6heY0G0tmeR2tecDVOddMAqO9c%2FG6jyFHnkVZBhbIhv4H1xdyT%2BRlhYH4Uljcx7Ig0Ykr%2BygspxTZIgPBam%2FGxXwIricXdBS4GvCbsaH5iop34NOePZSP9Aft1hKV3P%2BwsgnA0mlvZpHhYMyu5tiQ4zPqbPCNqIDqyXfIJDlh7%2FkuDo%2FoRlnzvPv7q88UTPYvUVMXNGTntvtM%2B3MY8YKzo68Jilf6a3gh2Dn6CV4vuWaCdjzVACamuLXvELTljrDu1ql8AHqFfVOYFp1iXHydxGRvxXaQnHt5QqE7jaSCXkFrRWk%2BDRoL%2FsmnCAvhDPQauirXKRWy3P1PML8A1XSE67wn3G8tM2pQ9IgrxLEPMKaXssoGOqUB1lVVoMOXG%2B6MMzsOpnx6aQmWBKueo6uQ11U83WyKtn76b4JdJPRarA%2BvgmAkDyeimj7RNhQF7YJu%2BJBIHgnZzOufzxxYXfCpJotx32BzgiXDfYxKu9ByOdet7WxUnieNvh1c6qHWGY%2BLp3EIsUq93I7EN9BHR1GyCQAGK4mpZH7dpEySpP%2B6PxXZVCYuzqvnTs79WGE3PiC5%2BL0Cs3UKk0%2BPnW%2F2&X-Amz-Signature=6d7d4884764cf4b4405d2289b03dcb318d81cb5ba1a05905f5a2fab202f5a081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFALXYUM%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T010612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEtabz5g7LqoPFDbzLQzOoiFAOvj1DzAtjzCL%2FDdVxFtAiEA8TV0%2B2NFtFeqc%2FQ1Jlh3zjTm6PHNuILUOkZ0uoFLDqAq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFb%2BoC7MaKfIF7Nl%2FircA%2FmspcMA4iybZ0fSOpXLQ2Y3CFcLbzCC5Ec2T7774o7wxr2Fnb0UuI%2B0wrdlN4FWwUYfGqFphCZytAs6I%2F8XM2LLIKPSYiaiA4Ps6j7SiVEE6xMlRm8oPvsYqv3NEqvkjTzILELjQfxewYS7XB0mI0Wpa1r3ClxaZG7L6oVVYzP%2Fod3z7Kh12vrouh3g3pDYQd3ZmucslMYT9eWags2X13sztkCgfmPQOfo545qpWGWckALakKSe8llSXa3RUlIguuAQcxjNQfpdEGA9MRs6heY0G0tmeR2tecDVOddMAqO9c%2FG6jyFHnkVZBhbIhv4H1xdyT%2BRlhYH4Uljcx7Ig0Ykr%2BygspxTZIgPBam%2FGxXwIricXdBS4GvCbsaH5iop34NOePZSP9Aft1hKV3P%2BwsgnA0mlvZpHhYMyu5tiQ4zPqbPCNqIDqyXfIJDlh7%2FkuDo%2FoRlnzvPv7q88UTPYvUVMXNGTntvtM%2B3MY8YKzo68Jilf6a3gh2Dn6CV4vuWaCdjzVACamuLXvELTljrDu1ql8AHqFfVOYFp1iXHydxGRvxXaQnHt5QqE7jaSCXkFrRWk%2BDRoL%2FsmnCAvhDPQauirXKRWy3P1PML8A1XSE67wn3G8tM2pQ9IgrxLEPMKaXssoGOqUB1lVVoMOXG%2B6MMzsOpnx6aQmWBKueo6uQ11U83WyKtn76b4JdJPRarA%2BvgmAkDyeimj7RNhQF7YJu%2BJBIHgnZzOufzxxYXfCpJotx32BzgiXDfYxKu9ByOdet7WxUnieNvh1c6qHWGY%2BLp3EIsUq93I7EN9BHR1GyCQAGK4mpZH7dpEySpP%2B6PxXZVCYuzqvnTs79WGE3PiC5%2BL0Cs3UKk0%2BPnW%2F2&X-Amz-Signature=159cf97999702b017e9df3d39a1b2c0fb52538265810018b825720dcde2db64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTP4RGCA%2F20251225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251225T010611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBzLbBQ1JM06tHQtHD9zdhWWNR%2BR3YYKKkKQ2m%2F28xTnAiEAqiQR4JD2aiaGJIHxsYnHIfr73E9HIPyZop5ORjYr8kgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLJ1hOHhQeHgVhfwRCrcA63yBgAKpc6%2FwVbZnQKEN6YSKNfubxvWJKRvWZfd2yGlgEsmVPbJElaHS8Y5PQEV%2FNoRilTyOZNKPDdXZC7l2N9vb2ZmAPyQUhUFtHtYeSLe1NnxkDtjVugg2SpWE%2F5i6uJk6wb%2F1ejLgy0VtKKH63EC%2BKMKbpV636wpRT8QdDsaBuvUdWAj6JWECDcUYOJWhzspi8mG%2BFEiNuBKjRFjEBPbcypTHKy1cBLpnTB1Lnv%2FEl5Qlu5Sti%2BAOa9EABhK%2BHWIdFb5MJxVUDSHrjGtN5G1lZ4zBHBelPadKwK%2FhHs%2FvwLGbLWN19NqDYqI6HyS8zzh8O7s3se6vwMB83IUxjraToPm28NKAwD%2Bv%2Bx%2BvO%2Bup2OSM99QCd32eCoaQ8Anu%2FbroZSsi%2FB2FxXXxlFT76pM01DtJulEQTR3vJIMi6AqiyxB7oY2mHCFPME5brorNs4QhbGgkKfzShX2%2Byuqo0C2JtqnPTl58cYAgykYSPMWfz5P%2BXAkQsR7XQVTZJkPjyVHG2aCxTCpDGkxaCSiEDQbQHiY6%2F1VqB5SliyhXlu097Ibgn81gf8vIfLsI8aYgT0313jb%2FIiAZvxszgMrzsuuHTTEhD4n0GM48ORl8DVw2wKwb08EY3MHAt8DML6UssoGOqUBlJ0T6aKsMsQF6tutZ094wR7htnxFuRAfHX8ILOXbPuV6wGt6Pn%2BQwZ3D%2FaXwTlasWV7xVVSNS3O%2FF1d%2BmRGPViOqr%2BQOmAZPwi%2BmqRh1ZZj0NIQ0KzTgSYagMOmgdYvX9qeRYaRT37bxyKVROhiIsUDADtEuymfY5%2BruLeBO6yFRkQr1s4uZBLdhJib7%2FdjyIuxFwEhbxMb3jsyp9YYljo30zj9G&X-Amz-Signature=65176beb5d33910838e6b92f901b370231bcc493509968c3f99c1bdbcd5dc96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

