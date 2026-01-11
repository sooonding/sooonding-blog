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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7T2R4F%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2s%2Bzdwt8qpwwKdnQdh3k4cvr3C0IVvxlvVDQceIiL3AiAisiwvvJBlQUE7zNpGHyU2BuVs7%2B96tyU2PGWSoYtfGSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQKXsiY9XoMGpCI5%2FKtwDuPiAMgAkRzQY9lUh%2BuE%2FQ1GIHY9UrTIEX6uhQRm4woKoSGRvd9HgMAGxcpBZydz5%2B%2BG4eguAPvjTz8WphnlJw7DLu1g2C51xmXXjpZs5XpqmP6LdhwKwg9Sf%2FyVUCSQWP3vZImpVWlTwTwOrnMsVKEozi0zSoK1vMZp2pdHkvQyepH%2BEMgSBBPBOeV4n57R35AIzeMMd2h7qW1ZpUHpfIE3gPrOxu7PI9WZgI82Pajg4WHsJLyr7xP1R46BxzLNVul0C9V2HZZ5Kx8f1LFqCT3e%2BbD7U0ISrsSMOJJsNPP8Cg6MDLlaHFfahJhFXqA%2Bz%2FRwvz1oYJoqNlTou3uTPs0FECETzVyAk5VRCZk6yNU%2F9itRkIxX9VmcSMKruI4EwnOwBptqgS46NFs7Jb4M5AzURP1lfNqILJ7I2QnfNnnwf8WfPrInQX%2B2GlP50UskA8sft6mrKIFWO5uwIdKljKbhg5iHjsnts%2F3VtHk%2B9BETY6%2FWp6u9WMTXp2QMtIpKi7VC5YKbQRWKVaNuNvDC0j2PaqeUjWubIm0MnWDnTU1Zy65KYNmr3fpWtD6ou1PqmZBD8PQc7PAdQQ0o%2BR8AFdWVaFNu1Y2XuvVmpVnVzFY735oaGyWvMA0EOr6ww6s2KywY6pgEbVTxcpG7gkR5DDijYWxeQyVUF2iuRzp1s1dVlRqktqtVqu%2BhI7OwjVdi%2FJs0bao5S7VNHnAe4IR8iC6wvAnVWYWUr%2Bh4nkvVzG2bdjpL3UKB%2By0rh%2Ffkuq%2F0nv2XtJyJMdpQKa5Zw2nd9H6o3%2FeWo%2BMtsPz2J7w8qXSXpzvFLChpsM2nzSFyO3rqKCwAlh394Yq7h5OSVdOwOSnu27mN6tWqwwPe6&X-Amz-Signature=3b339c5e6f9422e9f9d70e3e9e05e1bf040d68b97337668008b93375c70eb7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGGZIZZ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE28u3kYW2R4kOH0DBpq3loM%2FJdbBEG5uSxXaH83UlMOAiEA3hitrzO1UWjUykImId4v5RU%2BSOxaNVNXx6c5ElwY8PcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCHJLBPOXHmRvltJSrcAybwngd72srxaj4%2F6NrVQbrzWOZPjDLkQFSSD8%2FeHxjlDyeeX8xZJd4Xc84iKx%2BdAum%2F2EZLaC12qZzZM3z%2BI3dmQNnwWL0egnm8stw60%2Fhr1Zt16WyaGShHxljG%2F44P3P5M7J4aGTWANIQIbQ7XItYbMISBzDwPS7wWnUcesSROsIVqoIbboI94P%2FwQHAdYonc4awYeYXo4S2jsboGYuCmQAs6xZzkEuhctkCQ5gd75LMZ4Q%2FnN30PGK9Tqg%2BPfK7quQwLPQWDMAvvUYb%2BLVppAm1yPH%2BU8H%2BwkeFzygRs10Swr0kroRFffy92hyrHMnSJiUelC6AUEQIc6thTTtCawCesmIFzOsBgKAyTdewstoFXfMvc38vxva4TdvKpFaC%2BJayt0h%2FSSii0wIazYvBrxkkUwlBtpKPTfK%2BqEPIB55CMVTVMkIIJyxdQqtVnY9yLQLXcZ%2BayzYCuaLR0RnaX7PZIDL7pWNKbqYrB5v4XXQ51I7JO78fDmwTO0D1xV1x0L64rZ5VN5QLgSj18WqwCnpVwWwScU44lnEXChJTBPqV59oBBDpjzJkF%2F2uselh%2FFgPMNOA%2BKf%2Byfw7emod7F%2BekhGOMcCPVSNmcdxfhSj8B4K9PusChzeG9ojMJnOissGOqUB1n1U4JdibggxZtM6yDH7tsbkcrImFsOwiRziEVbCJte0b9XEolDKzGsIWddEOsSYKpGUncn51hl%2FIDdOimrdr3fL8aMK2rtYQ%2F689MiJkDqNX64N0ogqna8Gi%2FJYRgIQtLgNVAP4cXc0%2Fn9ANGxl%2FsUzXbKAtoww0tc1BBash7fwE2apgLDEQxe4KTLQkjFLG4EbqbAlbWy6ab2MlDF2ds%2BdnNvv&X-Amz-Signature=57aaebff598a31bbadc3e2f9a48d0cb714753f3098e77fc5de91685e896dfc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGGZIZZ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE28u3kYW2R4kOH0DBpq3loM%2FJdbBEG5uSxXaH83UlMOAiEA3hitrzO1UWjUykImId4v5RU%2BSOxaNVNXx6c5ElwY8PcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCHJLBPOXHmRvltJSrcAybwngd72srxaj4%2F6NrVQbrzWOZPjDLkQFSSD8%2FeHxjlDyeeX8xZJd4Xc84iKx%2BdAum%2F2EZLaC12qZzZM3z%2BI3dmQNnwWL0egnm8stw60%2Fhr1Zt16WyaGShHxljG%2F44P3P5M7J4aGTWANIQIbQ7XItYbMISBzDwPS7wWnUcesSROsIVqoIbboI94P%2FwQHAdYonc4awYeYXo4S2jsboGYuCmQAs6xZzkEuhctkCQ5gd75LMZ4Q%2FnN30PGK9Tqg%2BPfK7quQwLPQWDMAvvUYb%2BLVppAm1yPH%2BU8H%2BwkeFzygRs10Swr0kroRFffy92hyrHMnSJiUelC6AUEQIc6thTTtCawCesmIFzOsBgKAyTdewstoFXfMvc38vxva4TdvKpFaC%2BJayt0h%2FSSii0wIazYvBrxkkUwlBtpKPTfK%2BqEPIB55CMVTVMkIIJyxdQqtVnY9yLQLXcZ%2BayzYCuaLR0RnaX7PZIDL7pWNKbqYrB5v4XXQ51I7JO78fDmwTO0D1xV1x0L64rZ5VN5QLgSj18WqwCnpVwWwScU44lnEXChJTBPqV59oBBDpjzJkF%2F2uselh%2FFgPMNOA%2BKf%2Byfw7emod7F%2BekhGOMcCPVSNmcdxfhSj8B4K9PusChzeG9ojMJnOissGOqUB1n1U4JdibggxZtM6yDH7tsbkcrImFsOwiRziEVbCJte0b9XEolDKzGsIWddEOsSYKpGUncn51hl%2FIDdOimrdr3fL8aMK2rtYQ%2F689MiJkDqNX64N0ogqna8Gi%2FJYRgIQtLgNVAP4cXc0%2Fn9ANGxl%2FsUzXbKAtoww0tc1BBash7fwE2apgLDEQxe4KTLQkjFLG4EbqbAlbWy6ab2MlDF2ds%2BdnNvv&X-Amz-Signature=c2e5da59f9a92fcb076c882f3d07516925d69d1a8757dfb18108f54747646498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGGZIZZ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE28u3kYW2R4kOH0DBpq3loM%2FJdbBEG5uSxXaH83UlMOAiEA3hitrzO1UWjUykImId4v5RU%2BSOxaNVNXx6c5ElwY8PcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCHJLBPOXHmRvltJSrcAybwngd72srxaj4%2F6NrVQbrzWOZPjDLkQFSSD8%2FeHxjlDyeeX8xZJd4Xc84iKx%2BdAum%2F2EZLaC12qZzZM3z%2BI3dmQNnwWL0egnm8stw60%2Fhr1Zt16WyaGShHxljG%2F44P3P5M7J4aGTWANIQIbQ7XItYbMISBzDwPS7wWnUcesSROsIVqoIbboI94P%2FwQHAdYonc4awYeYXo4S2jsboGYuCmQAs6xZzkEuhctkCQ5gd75LMZ4Q%2FnN30PGK9Tqg%2BPfK7quQwLPQWDMAvvUYb%2BLVppAm1yPH%2BU8H%2BwkeFzygRs10Swr0kroRFffy92hyrHMnSJiUelC6AUEQIc6thTTtCawCesmIFzOsBgKAyTdewstoFXfMvc38vxva4TdvKpFaC%2BJayt0h%2FSSii0wIazYvBrxkkUwlBtpKPTfK%2BqEPIB55CMVTVMkIIJyxdQqtVnY9yLQLXcZ%2BayzYCuaLR0RnaX7PZIDL7pWNKbqYrB5v4XXQ51I7JO78fDmwTO0D1xV1x0L64rZ5VN5QLgSj18WqwCnpVwWwScU44lnEXChJTBPqV59oBBDpjzJkF%2F2uselh%2FFgPMNOA%2BKf%2Byfw7emod7F%2BekhGOMcCPVSNmcdxfhSj8B4K9PusChzeG9ojMJnOissGOqUB1n1U4JdibggxZtM6yDH7tsbkcrImFsOwiRziEVbCJte0b9XEolDKzGsIWddEOsSYKpGUncn51hl%2FIDdOimrdr3fL8aMK2rtYQ%2F689MiJkDqNX64N0ogqna8Gi%2FJYRgIQtLgNVAP4cXc0%2Fn9ANGxl%2FsUzXbKAtoww0tc1BBash7fwE2apgLDEQxe4KTLQkjFLG4EbqbAlbWy6ab2MlDF2ds%2BdnNvv&X-Amz-Signature=f8c64402963b12d1f447eaad4ad5acff99a04de5df522596208c008a11d61242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGGZIZZ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE28u3kYW2R4kOH0DBpq3loM%2FJdbBEG5uSxXaH83UlMOAiEA3hitrzO1UWjUykImId4v5RU%2BSOxaNVNXx6c5ElwY8PcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCHJLBPOXHmRvltJSrcAybwngd72srxaj4%2F6NrVQbrzWOZPjDLkQFSSD8%2FeHxjlDyeeX8xZJd4Xc84iKx%2BdAum%2F2EZLaC12qZzZM3z%2BI3dmQNnwWL0egnm8stw60%2Fhr1Zt16WyaGShHxljG%2F44P3P5M7J4aGTWANIQIbQ7XItYbMISBzDwPS7wWnUcesSROsIVqoIbboI94P%2FwQHAdYonc4awYeYXo4S2jsboGYuCmQAs6xZzkEuhctkCQ5gd75LMZ4Q%2FnN30PGK9Tqg%2BPfK7quQwLPQWDMAvvUYb%2BLVppAm1yPH%2BU8H%2BwkeFzygRs10Swr0kroRFffy92hyrHMnSJiUelC6AUEQIc6thTTtCawCesmIFzOsBgKAyTdewstoFXfMvc38vxva4TdvKpFaC%2BJayt0h%2FSSii0wIazYvBrxkkUwlBtpKPTfK%2BqEPIB55CMVTVMkIIJyxdQqtVnY9yLQLXcZ%2BayzYCuaLR0RnaX7PZIDL7pWNKbqYrB5v4XXQ51I7JO78fDmwTO0D1xV1x0L64rZ5VN5QLgSj18WqwCnpVwWwScU44lnEXChJTBPqV59oBBDpjzJkF%2F2uselh%2FFgPMNOA%2BKf%2Byfw7emod7F%2BekhGOMcCPVSNmcdxfhSj8B4K9PusChzeG9ojMJnOissGOqUB1n1U4JdibggxZtM6yDH7tsbkcrImFsOwiRziEVbCJte0b9XEolDKzGsIWddEOsSYKpGUncn51hl%2FIDdOimrdr3fL8aMK2rtYQ%2F689MiJkDqNX64N0ogqna8Gi%2FJYRgIQtLgNVAP4cXc0%2Fn9ANGxl%2FsUzXbKAtoww0tc1BBash7fwE2apgLDEQxe4KTLQkjFLG4EbqbAlbWy6ab2MlDF2ds%2BdnNvv&X-Amz-Signature=b23d7ef551ae7127b66ad6d19d05bf64170490f6c5c7a65d41aa2382d504c31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGGZIZZ%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE28u3kYW2R4kOH0DBpq3loM%2FJdbBEG5uSxXaH83UlMOAiEA3hitrzO1UWjUykImId4v5RU%2BSOxaNVNXx6c5ElwY8PcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCHJLBPOXHmRvltJSrcAybwngd72srxaj4%2F6NrVQbrzWOZPjDLkQFSSD8%2FeHxjlDyeeX8xZJd4Xc84iKx%2BdAum%2F2EZLaC12qZzZM3z%2BI3dmQNnwWL0egnm8stw60%2Fhr1Zt16WyaGShHxljG%2F44P3P5M7J4aGTWANIQIbQ7XItYbMISBzDwPS7wWnUcesSROsIVqoIbboI94P%2FwQHAdYonc4awYeYXo4S2jsboGYuCmQAs6xZzkEuhctkCQ5gd75LMZ4Q%2FnN30PGK9Tqg%2BPfK7quQwLPQWDMAvvUYb%2BLVppAm1yPH%2BU8H%2BwkeFzygRs10Swr0kroRFffy92hyrHMnSJiUelC6AUEQIc6thTTtCawCesmIFzOsBgKAyTdewstoFXfMvc38vxva4TdvKpFaC%2BJayt0h%2FSSii0wIazYvBrxkkUwlBtpKPTfK%2BqEPIB55CMVTVMkIIJyxdQqtVnY9yLQLXcZ%2BayzYCuaLR0RnaX7PZIDL7pWNKbqYrB5v4XXQ51I7JO78fDmwTO0D1xV1x0L64rZ5VN5QLgSj18WqwCnpVwWwScU44lnEXChJTBPqV59oBBDpjzJkF%2F2uselh%2FFgPMNOA%2BKf%2Byfw7emod7F%2BekhGOMcCPVSNmcdxfhSj8B4K9PusChzeG9ojMJnOissGOqUB1n1U4JdibggxZtM6yDH7tsbkcrImFsOwiRziEVbCJte0b9XEolDKzGsIWddEOsSYKpGUncn51hl%2FIDdOimrdr3fL8aMK2rtYQ%2F689MiJkDqNX64N0ogqna8Gi%2FJYRgIQtLgNVAP4cXc0%2Fn9ANGxl%2FsUzXbKAtoww0tc1BBash7fwE2apgLDEQxe4KTLQkjFLG4EbqbAlbWy6ab2MlDF2ds%2BdnNvv&X-Amz-Signature=ffcfe051acbb68e916ec57086057e13135630e22c5486c09ab60619b8a694fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7T2R4F%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T011518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2s%2Bzdwt8qpwwKdnQdh3k4cvr3C0IVvxlvVDQceIiL3AiAisiwvvJBlQUE7zNpGHyU2BuVs7%2B96tyU2PGWSoYtfGSqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQKXsiY9XoMGpCI5%2FKtwDuPiAMgAkRzQY9lUh%2BuE%2FQ1GIHY9UrTIEX6uhQRm4woKoSGRvd9HgMAGxcpBZydz5%2B%2BG4eguAPvjTz8WphnlJw7DLu1g2C51xmXXjpZs5XpqmP6LdhwKwg9Sf%2FyVUCSQWP3vZImpVWlTwTwOrnMsVKEozi0zSoK1vMZp2pdHkvQyepH%2BEMgSBBPBOeV4n57R35AIzeMMd2h7qW1ZpUHpfIE3gPrOxu7PI9WZgI82Pajg4WHsJLyr7xP1R46BxzLNVul0C9V2HZZ5Kx8f1LFqCT3e%2BbD7U0ISrsSMOJJsNPP8Cg6MDLlaHFfahJhFXqA%2Bz%2FRwvz1oYJoqNlTou3uTPs0FECETzVyAk5VRCZk6yNU%2F9itRkIxX9VmcSMKruI4EwnOwBptqgS46NFs7Jb4M5AzURP1lfNqILJ7I2QnfNnnwf8WfPrInQX%2B2GlP50UskA8sft6mrKIFWO5uwIdKljKbhg5iHjsnts%2F3VtHk%2B9BETY6%2FWp6u9WMTXp2QMtIpKi7VC5YKbQRWKVaNuNvDC0j2PaqeUjWubIm0MnWDnTU1Zy65KYNmr3fpWtD6ou1PqmZBD8PQc7PAdQQ0o%2BR8AFdWVaFNu1Y2XuvVmpVnVzFY735oaGyWvMA0EOr6ww6s2KywY6pgEbVTxcpG7gkR5DDijYWxeQyVUF2iuRzp1s1dVlRqktqtVqu%2BhI7OwjVdi%2FJs0bao5S7VNHnAe4IR8iC6wvAnVWYWUr%2Bh4nkvVzG2bdjpL3UKB%2By0rh%2Ffkuq%2F0nv2XtJyJMdpQKa5Zw2nd9H6o3%2FeWo%2BMtsPz2J7w8qXSXpzvFLChpsM2nzSFyO3rqKCwAlh394Yq7h5OSVdOwOSnu27mN6tWqwwPe6&X-Amz-Signature=1ce4ab9cdb335628d4e283b8ad42b39e607e18fd210ede06596d58950adc42bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

