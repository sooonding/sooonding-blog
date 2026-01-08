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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466434AGU2X%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T010835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXXVeBv0Vz5f6E3DOmFepbQ63SIjjBL01EH186BD1TgIgG9TlGK%2BhhUkGTVPuqDiK9g7T3zgXCjND1Lf%2FK0D58FQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B0Y3rSWLmn0tVa5SrcAzyddvNXOtadQ1TW1%2Bkgh6ITxz1Fpib5IHyMXe6QoKlSoP%2BTifCJWxJ1C%2FB%2FHgLkGaS12xISCxo9Jmg3GM6VTSK16YP7VToIbm7Xg7zbyZQmhGEWBbThq%2BWSIJcIR%2BQ%2BOSaVHLwkICkKw7oQ40XOk%2BuS4vnw1xYkGMjPfX3VOwfQlm14u325kuKlrJ1A%2FYKI4QcGC%2Fn4lA2iCFl0bTMUKWH4wFZLlPR22Z8cu%2FaNpQlYNY7aEirfbL9uptQzZm11m7ypeYEt1IQRouxd0qwYv8AAk7OJ60Q%2BLxC360ZCVq5qXHmBGl4svGHA%2FoLGqHObAqDS4QIOL6iBy%2BZDgPWVkPWELRgXR0%2FKS0KKt8GyW%2F77IiFrNpbFHCnXy9%2BcVmmXoZMWSC2MuGxfdEcJsLkq0v5ldK2Li%2B%2B5mr75LkXU0TP%2BGO4DS79c1iwl8hdq5rBHsZ4n5ZO%2FLykjq5G%2BCmcScoqDclsI04kaL6tMuL9JvGGGbPE3nuy84M748JyUBkBag1nwRVWn5eg2mgmB%2FGQwt%2BHlR3T2fz47a21OfF80%2Fbm7RZqTy8lsIeJaoTHMoY86NBi%2BdJFri70jc9bWms1AtuR0UDM3JDaGthpJIK4F3irXITrSXQ9EnT7OtpDcMOX8%2B8oGOqUBZt9Q4T96nx9jutkdG0SIZwSaDUCELLtdWF9rlPcIbg6MR237WqYSPzbLC5eVKXLzCwZrQOpvdMEsYJpyJ2b37iHE65yJZKPSrdb9rdxFEi5RvURvHXXQY0XztR2CHgoMGSODJV%2FL0zwmS9aieqGF%2Fui5cXZlIoe9Ubpb4%2FfkLOssJfX8ntbyWrZOHRQ90EogQlrdz66xm9s1O3HDDSZ3aqit58nU&X-Amz-Signature=139c292a25caaab73125b1d0f5d3d3f0927dff6975d3233c815ad7b09e8b5d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MI5PA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T010837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Ql6cgTHg38EPM%2BCQ0GNdUtZm7ORwpf8xD4%2B5iAN%2BjgIhANpdnibH94WQY68N8bzFcsD9ORocv%2B2dEnjpV0z2l77LKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk%2F1ej3VtMRwxPrrIq3AMy1QMkYQbpo8geG8XlaikIf%2BNtvfrAFXz8Ik9t2tS32b0Rc%2FxxZSwjLSQFIWXUGgMhUxFUwcv4FDRh4iPDSd26eLbrq7QdwiWtIV0xVkNA%2FCNSZURB94Rob5LS5DlFn3sQzrJjUPzpXvpKAccHwhlcWN476iX8C%2BzJQjZvMVJHDyacJ1jNCj2kwQ3tpLi0Aph2RixUHKa0YY1c21hnhHJhIMFKfxmixfCfFjxawZCmkOBtOimojD96sc70TFZDoJGg0CrdokETT5T2L5kVoT1O6E6jgfKgxYZUmWI8%2Fr9YgC8ag6pbc5lWt%2Fqmf5EN31YLnEO9ynzu3H%2BZvnflkBxNwFemyXMbg3Imps%2F4AySoL8%2BuktrTIzj7wa0ca1PhLrPGJcMFtJ2qQKQhhyAmiSKPw5JebqYlbWUjE19xaO%2BSvF%2BiW9y%2F2YLxLtotYvgj5e%2FcIqjwDNf%2B3sRt490Usy680Y2AG64KOEDysudmESsDPUtnh3c8lfpBw4pVGnvghesynbRY94J9nk4bE%2F%2BFZ836MLqgafG9xP4kqBwzBKvcjzI9qfdUTLzPo9EwRRI8AxJ7wdPgxJMbuhCDQTgvnS1nVOe3Jgu9IPFXMYAE%2BlT9V%2FrXtH%2FwgUPS74Ms4jCO%2FfvKBjqkAd8ZbAhrdsBQTgjTjJh1J8E61DKDdU43qk4onzz6C4y8mSD11uoM0ENTq4puScAIOAFIpR0r99end%2F3vCmkJhYhEkZw6kwakDz3%2Fmp4%2FUYFRK5z3qAoJrxlTVK22m3X0SmRm%2F2MOhrU%2FSMd7v8zrmXAA2RcqPJtRao8fJbNKtxD2U6HaM9BoI6zTO2RjV2dVmouaDG3rLczyP%2B8MWrYwHq6c0mdv&X-Amz-Signature=8b594be72bc38b6eb0e81cad955da7938b85d75699463ccb857aa266febbc306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MI5PA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T010837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Ql6cgTHg38EPM%2BCQ0GNdUtZm7ORwpf8xD4%2B5iAN%2BjgIhANpdnibH94WQY68N8bzFcsD9ORocv%2B2dEnjpV0z2l77LKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk%2F1ej3VtMRwxPrrIq3AMy1QMkYQbpo8geG8XlaikIf%2BNtvfrAFXz8Ik9t2tS32b0Rc%2FxxZSwjLSQFIWXUGgMhUxFUwcv4FDRh4iPDSd26eLbrq7QdwiWtIV0xVkNA%2FCNSZURB94Rob5LS5DlFn3sQzrJjUPzpXvpKAccHwhlcWN476iX8C%2BzJQjZvMVJHDyacJ1jNCj2kwQ3tpLi0Aph2RixUHKa0YY1c21hnhHJhIMFKfxmixfCfFjxawZCmkOBtOimojD96sc70TFZDoJGg0CrdokETT5T2L5kVoT1O6E6jgfKgxYZUmWI8%2Fr9YgC8ag6pbc5lWt%2Fqmf5EN31YLnEO9ynzu3H%2BZvnflkBxNwFemyXMbg3Imps%2F4AySoL8%2BuktrTIzj7wa0ca1PhLrPGJcMFtJ2qQKQhhyAmiSKPw5JebqYlbWUjE19xaO%2BSvF%2BiW9y%2F2YLxLtotYvgj5e%2FcIqjwDNf%2B3sRt490Usy680Y2AG64KOEDysudmESsDPUtnh3c8lfpBw4pVGnvghesynbRY94J9nk4bE%2F%2BFZ836MLqgafG9xP4kqBwzBKvcjzI9qfdUTLzPo9EwRRI8AxJ7wdPgxJMbuhCDQTgvnS1nVOe3Jgu9IPFXMYAE%2BlT9V%2FrXtH%2FwgUPS74Ms4jCO%2FfvKBjqkAd8ZbAhrdsBQTgjTjJh1J8E61DKDdU43qk4onzz6C4y8mSD11uoM0ENTq4puScAIOAFIpR0r99end%2F3vCmkJhYhEkZw6kwakDz3%2Fmp4%2FUYFRK5z3qAoJrxlTVK22m3X0SmRm%2F2MOhrU%2FSMd7v8zrmXAA2RcqPJtRao8fJbNKtxD2U6HaM9BoI6zTO2RjV2dVmouaDG3rLczyP%2B8MWrYwHq6c0mdv&X-Amz-Signature=13fff19a0605af3c853911dc1b3f26dd631dc2c91fc924b908bb5819db8f2ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MI5PA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T010837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Ql6cgTHg38EPM%2BCQ0GNdUtZm7ORwpf8xD4%2B5iAN%2BjgIhANpdnibH94WQY68N8bzFcsD9ORocv%2B2dEnjpV0z2l77LKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk%2F1ej3VtMRwxPrrIq3AMy1QMkYQbpo8geG8XlaikIf%2BNtvfrAFXz8Ik9t2tS32b0Rc%2FxxZSwjLSQFIWXUGgMhUxFUwcv4FDRh4iPDSd26eLbrq7QdwiWtIV0xVkNA%2FCNSZURB94Rob5LS5DlFn3sQzrJjUPzpXvpKAccHwhlcWN476iX8C%2BzJQjZvMVJHDyacJ1jNCj2kwQ3tpLi0Aph2RixUHKa0YY1c21hnhHJhIMFKfxmixfCfFjxawZCmkOBtOimojD96sc70TFZDoJGg0CrdokETT5T2L5kVoT1O6E6jgfKgxYZUmWI8%2Fr9YgC8ag6pbc5lWt%2Fqmf5EN31YLnEO9ynzu3H%2BZvnflkBxNwFemyXMbg3Imps%2F4AySoL8%2BuktrTIzj7wa0ca1PhLrPGJcMFtJ2qQKQhhyAmiSKPw5JebqYlbWUjE19xaO%2BSvF%2BiW9y%2F2YLxLtotYvgj5e%2FcIqjwDNf%2B3sRt490Usy680Y2AG64KOEDysudmESsDPUtnh3c8lfpBw4pVGnvghesynbRY94J9nk4bE%2F%2BFZ836MLqgafG9xP4kqBwzBKvcjzI9qfdUTLzPo9EwRRI8AxJ7wdPgxJMbuhCDQTgvnS1nVOe3Jgu9IPFXMYAE%2BlT9V%2FrXtH%2FwgUPS74Ms4jCO%2FfvKBjqkAd8ZbAhrdsBQTgjTjJh1J8E61DKDdU43qk4onzz6C4y8mSD11uoM0ENTq4puScAIOAFIpR0r99end%2F3vCmkJhYhEkZw6kwakDz3%2Fmp4%2FUYFRK5z3qAoJrxlTVK22m3X0SmRm%2F2MOhrU%2FSMd7v8zrmXAA2RcqPJtRao8fJbNKtxD2U6HaM9BoI6zTO2RjV2dVmouaDG3rLczyP%2B8MWrYwHq6c0mdv&X-Amz-Signature=5e5898a46de24e03cecd844721f38b9d68b6b6f301c4a15fc4c26e4af6ad6844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MI5PA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T010837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Ql6cgTHg38EPM%2BCQ0GNdUtZm7ORwpf8xD4%2B5iAN%2BjgIhANpdnibH94WQY68N8bzFcsD9ORocv%2B2dEnjpV0z2l77LKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk%2F1ej3VtMRwxPrrIq3AMy1QMkYQbpo8geG8XlaikIf%2BNtvfrAFXz8Ik9t2tS32b0Rc%2FxxZSwjLSQFIWXUGgMhUxFUwcv4FDRh4iPDSd26eLbrq7QdwiWtIV0xVkNA%2FCNSZURB94Rob5LS5DlFn3sQzrJjUPzpXvpKAccHwhlcWN476iX8C%2BzJQjZvMVJHDyacJ1jNCj2kwQ3tpLi0Aph2RixUHKa0YY1c21hnhHJhIMFKfxmixfCfFjxawZCmkOBtOimojD96sc70TFZDoJGg0CrdokETT5T2L5kVoT1O6E6jgfKgxYZUmWI8%2Fr9YgC8ag6pbc5lWt%2Fqmf5EN31YLnEO9ynzu3H%2BZvnflkBxNwFemyXMbg3Imps%2F4AySoL8%2BuktrTIzj7wa0ca1PhLrPGJcMFtJ2qQKQhhyAmiSKPw5JebqYlbWUjE19xaO%2BSvF%2BiW9y%2F2YLxLtotYvgj5e%2FcIqjwDNf%2B3sRt490Usy680Y2AG64KOEDysudmESsDPUtnh3c8lfpBw4pVGnvghesynbRY94J9nk4bE%2F%2BFZ836MLqgafG9xP4kqBwzBKvcjzI9qfdUTLzPo9EwRRI8AxJ7wdPgxJMbuhCDQTgvnS1nVOe3Jgu9IPFXMYAE%2BlT9V%2FrXtH%2FwgUPS74Ms4jCO%2FfvKBjqkAd8ZbAhrdsBQTgjTjJh1J8E61DKDdU43qk4onzz6C4y8mSD11uoM0ENTq4puScAIOAFIpR0r99end%2F3vCmkJhYhEkZw6kwakDz3%2Fmp4%2FUYFRK5z3qAoJrxlTVK22m3X0SmRm%2F2MOhrU%2FSMd7v8zrmXAA2RcqPJtRao8fJbNKtxD2U6HaM9BoI6zTO2RjV2dVmouaDG3rLczyP%2B8MWrYwHq6c0mdv&X-Amz-Signature=83c2624720a9d0aae415b41a4e22ca97e12aeb7b736a86f264eecdc11ef594bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5MI5PA%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T010837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Ql6cgTHg38EPM%2BCQ0GNdUtZm7ORwpf8xD4%2B5iAN%2BjgIhANpdnibH94WQY68N8bzFcsD9ORocv%2B2dEnjpV0z2l77LKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk%2F1ej3VtMRwxPrrIq3AMy1QMkYQbpo8geG8XlaikIf%2BNtvfrAFXz8Ik9t2tS32b0Rc%2FxxZSwjLSQFIWXUGgMhUxFUwcv4FDRh4iPDSd26eLbrq7QdwiWtIV0xVkNA%2FCNSZURB94Rob5LS5DlFn3sQzrJjUPzpXvpKAccHwhlcWN476iX8C%2BzJQjZvMVJHDyacJ1jNCj2kwQ3tpLi0Aph2RixUHKa0YY1c21hnhHJhIMFKfxmixfCfFjxawZCmkOBtOimojD96sc70TFZDoJGg0CrdokETT5T2L5kVoT1O6E6jgfKgxYZUmWI8%2Fr9YgC8ag6pbc5lWt%2Fqmf5EN31YLnEO9ynzu3H%2BZvnflkBxNwFemyXMbg3Imps%2F4AySoL8%2BuktrTIzj7wa0ca1PhLrPGJcMFtJ2qQKQhhyAmiSKPw5JebqYlbWUjE19xaO%2BSvF%2BiW9y%2F2YLxLtotYvgj5e%2FcIqjwDNf%2B3sRt490Usy680Y2AG64KOEDysudmESsDPUtnh3c8lfpBw4pVGnvghesynbRY94J9nk4bE%2F%2BFZ836MLqgafG9xP4kqBwzBKvcjzI9qfdUTLzPo9EwRRI8AxJ7wdPgxJMbuhCDQTgvnS1nVOe3Jgu9IPFXMYAE%2BlT9V%2FrXtH%2FwgUPS74Ms4jCO%2FfvKBjqkAd8ZbAhrdsBQTgjTjJh1J8E61DKDdU43qk4onzz6C4y8mSD11uoM0ENTq4puScAIOAFIpR0r99end%2F3vCmkJhYhEkZw6kwakDz3%2Fmp4%2FUYFRK5z3qAoJrxlTVK22m3X0SmRm%2F2MOhrU%2FSMd7v8zrmXAA2RcqPJtRao8fJbNKtxD2U6HaM9BoI6zTO2RjV2dVmouaDG3rLczyP%2B8MWrYwHq6c0mdv&X-Amz-Signature=ac82562aa4e608246f59718e9f0f0426bbebba9593a0c551b883f4ca525997c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466434AGU2X%2F20260108%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260108T010835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGXXVeBv0Vz5f6E3DOmFepbQ63SIjjBL01EH186BD1TgIgG9TlGK%2BhhUkGTVPuqDiK9g7T3zgXCjND1Lf%2FK0D58FQqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B0Y3rSWLmn0tVa5SrcAzyddvNXOtadQ1TW1%2Bkgh6ITxz1Fpib5IHyMXe6QoKlSoP%2BTifCJWxJ1C%2FB%2FHgLkGaS12xISCxo9Jmg3GM6VTSK16YP7VToIbm7Xg7zbyZQmhGEWBbThq%2BWSIJcIR%2BQ%2BOSaVHLwkICkKw7oQ40XOk%2BuS4vnw1xYkGMjPfX3VOwfQlm14u325kuKlrJ1A%2FYKI4QcGC%2Fn4lA2iCFl0bTMUKWH4wFZLlPR22Z8cu%2FaNpQlYNY7aEirfbL9uptQzZm11m7ypeYEt1IQRouxd0qwYv8AAk7OJ60Q%2BLxC360ZCVq5qXHmBGl4svGHA%2FoLGqHObAqDS4QIOL6iBy%2BZDgPWVkPWELRgXR0%2FKS0KKt8GyW%2F77IiFrNpbFHCnXy9%2BcVmmXoZMWSC2MuGxfdEcJsLkq0v5ldK2Li%2B%2B5mr75LkXU0TP%2BGO4DS79c1iwl8hdq5rBHsZ4n5ZO%2FLykjq5G%2BCmcScoqDclsI04kaL6tMuL9JvGGGbPE3nuy84M748JyUBkBag1nwRVWn5eg2mgmB%2FGQwt%2BHlR3T2fz47a21OfF80%2Fbm7RZqTy8lsIeJaoTHMoY86NBi%2BdJFri70jc9bWms1AtuR0UDM3JDaGthpJIK4F3irXITrSXQ9EnT7OtpDcMOX8%2B8oGOqUBZt9Q4T96nx9jutkdG0SIZwSaDUCELLtdWF9rlPcIbg6MR237WqYSPzbLC5eVKXLzCwZrQOpvdMEsYJpyJ2b37iHE65yJZKPSrdb9rdxFEi5RvURvHXXQY0XztR2CHgoMGSODJV%2FL0zwmS9aieqGF%2Fui5cXZlIoe9Ubpb4%2FfkLOssJfX8ntbyWrZOHRQ90EogQlrdz66xm9s1O3HDDSZ3aqit58nU&X-Amz-Signature=d1e3ea6fde78029c778bc4d18215c4c1a05cbd7223c818631519509c3d6c0e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

