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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQRIGKR%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhH1DHEbqYx9k2Om1tP0Pyts9hYgDaLxL2ctrNzMfcwIhAIMzL63FfNobDmfQqi5uoE6fh09sxxvH%2FLPjtIJi4bVQKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo7fNVOWI3CmSlUfEq3AM4F0nMFgm2A2Ibs4PFlHB3j50cvJ%2FvriP243a3j3Jq1MvxfB7KamqwMkXTnRzJYq3HVgxi%2BA4Pw5hWadoWD9SuqiDZYfFLhjjnaXGgpIU2USUclAHx33oX7hYOFjmJ7EZbW6KzDackk6KNPOZhLte5aoyHg4uNU8rzPWSmd%2BQiqScYLC%2BCiPicYAGqE0%2BvATGSqYmrxtdYoTBFdvx0hyEmvTi8NV6nLyeKsr86m6g9Lx9RoPHsWpnGVlKlZfzx15LkQ%2BielLQMRvgO1NgcBr6s%2FxMZ9NRTtAcWiV%2BWkaqZ0EfEED%2F5K3GsfTKTCsXDfiIaJZ3keAS4eClcJqa33PfsuKikgBs2nfgl1Ry8FlttYgOwuVD3fhHTT36CIVG4FewlEGU46h72ooZ4B7YflNO10I2Yrtw188EKmA8%2Fy3AspTUxkEexZSk5eqzpvtr0s9Xan%2FtCQ3MR6sqOFoVjXr4vTfHa7sldkC4NHf4p%2FHvOIxAOY6PkoLSC09t7u3Iy1RE7heGkr45ld%2Ble5HtbisN1GFcbs50SyZ10e8EHzzK7LBRJ%2B7%2FkxDWVlDqTbU36E9HkpDxcTg%2FVDpP8g2wZ352c3qlTvhbWm8u0UrwGAgVUaY69O9p7QsPH87Lc9TDJ8e%2FPBjqkAT66vqv7iW08lIJv4x6lToKj%2Fr6RUzg1w4oqYHxALNxvb3U1dtD6RJVuGRCvmHNF%2FUxU3MhkvZy51mqbGzrOE06bRoiSuvgPY5V3JywhuVi%2BXxdAUqo9EAJCYx17LezPZLfgt7SLJqlkZ%2Fio%2Fs5ngaoRXFDHTB8Db0wUrWTqftUH6yU%2BkYGATfOIUfEPSOPdKI%2BzHgHPs3Wxi6Vh5X7Rel0wuu89&X-Amz-Signature=e34f85045bf3543422461fd9d345b170c296ab66a53615c89b6c551aa2b68010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKUQFIK%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDFC9s6It4s652PyQc7%2F2A9Cx8ezydpUqMqOCxgGJqywIgZXHJQ7sANalOKiDgdpNvlpFfo7S7lG%2BpSj3YIjT7K6QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVGEdhVh%2FcCIulW3CrcA5stSAY1EIMnf5gfMMRQcXworzNMv2mR3a3xmRG4PKOlh57tAQ77kyMeWh4TBE8JeJok05Hkg4PpIbsAUs7pPqOzDDO2eA%2BoIkJRki0hkvlkEPEsLR%2BKFUkNwevIBYnVsltHyAQnmcBf4fybT5TYRrKGiTdkzNKPZ14gZOY%2BfZC0%2FCC0G4VIpE6fmzsDF1anNQ3L8zCKK6WWWteNgG2ZUBYhYlyKVTgy%2F2cfVmZFZdPF6WVU6NWm%2FMI574toa72BrRC7JeXcCeUQAex0%2FCTxOPlAMdWa6LJPHYFqDw%2FXF%2FJungUgIpJrGQEfm96jZvIyBRaUD3mgYVLwuamoHNQZnN3l9LHfjqMkaPk6Wd%2B0Y4%2BFrKRsN6j8hQFWvLXw2bPbVfOeBy8E7bfyrOODPADiEIks9KtHefI5LVlQpenVAwf1DeyT5lsmyLH902HA2%2FyIwestc3fHt%2BKyl9%2F%2Bv23pqNwIQA6G37tTC7aF3ebC3q%2Fcdw2L4EB5LuTTHybBi8aH%2Fz2yfqm%2BdnSCVaLd6obmf3b3cuqPourE1zwylLowODUSOboBaLwuxp%2FDRX2kUOUWDFewPdwpIb5%2FM0ukP%2B53ULBVXpzXVFfvaYOZnoO3XfYGgAO7bt%2BHoR9tTaNTMIXx788GOqUBxg0o0d1saHL%2Fc2G6sftGb%2Fy9kI11zYwSK7v4mGPAH0kt5VfwDzqSevg27C75GLlzDuui3S9S2jvdqgEteSoAuZ4OjCkULExsOciJOSG%2Ft9kG8X%2BkoQZ%2FpeMD4iLViwQERtJLKnnABfmZjaHpycHjV9f%2FOjYoeBg2OS8afF7xSZ2j2CxPHNsUZEeSQWN9nDzVweTsnxO76nDBpLo6R98SAtMkt9Gv&X-Amz-Signature=d4e57776dab296411e419f2686aee446973b6f2f2d3e00487c42f696253976c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKUQFIK%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDFC9s6It4s652PyQc7%2F2A9Cx8ezydpUqMqOCxgGJqywIgZXHJQ7sANalOKiDgdpNvlpFfo7S7lG%2BpSj3YIjT7K6QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVGEdhVh%2FcCIulW3CrcA5stSAY1EIMnf5gfMMRQcXworzNMv2mR3a3xmRG4PKOlh57tAQ77kyMeWh4TBE8JeJok05Hkg4PpIbsAUs7pPqOzDDO2eA%2BoIkJRki0hkvlkEPEsLR%2BKFUkNwevIBYnVsltHyAQnmcBf4fybT5TYRrKGiTdkzNKPZ14gZOY%2BfZC0%2FCC0G4VIpE6fmzsDF1anNQ3L8zCKK6WWWteNgG2ZUBYhYlyKVTgy%2F2cfVmZFZdPF6WVU6NWm%2FMI574toa72BrRC7JeXcCeUQAex0%2FCTxOPlAMdWa6LJPHYFqDw%2FXF%2FJungUgIpJrGQEfm96jZvIyBRaUD3mgYVLwuamoHNQZnN3l9LHfjqMkaPk6Wd%2B0Y4%2BFrKRsN6j8hQFWvLXw2bPbVfOeBy8E7bfyrOODPADiEIks9KtHefI5LVlQpenVAwf1DeyT5lsmyLH902HA2%2FyIwestc3fHt%2BKyl9%2F%2Bv23pqNwIQA6G37tTC7aF3ebC3q%2Fcdw2L4EB5LuTTHybBi8aH%2Fz2yfqm%2BdnSCVaLd6obmf3b3cuqPourE1zwylLowODUSOboBaLwuxp%2FDRX2kUOUWDFewPdwpIb5%2FM0ukP%2B53ULBVXpzXVFfvaYOZnoO3XfYGgAO7bt%2BHoR9tTaNTMIXx788GOqUBxg0o0d1saHL%2Fc2G6sftGb%2Fy9kI11zYwSK7v4mGPAH0kt5VfwDzqSevg27C75GLlzDuui3S9S2jvdqgEteSoAuZ4OjCkULExsOciJOSG%2Ft9kG8X%2BkoQZ%2FpeMD4iLViwQERtJLKnnABfmZjaHpycHjV9f%2FOjYoeBg2OS8afF7xSZ2j2CxPHNsUZEeSQWN9nDzVweTsnxO76nDBpLo6R98SAtMkt9Gv&X-Amz-Signature=a063196caa629db51546a8dd76462beeb8761240435935a9524ba88d143f1f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKUQFIK%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDFC9s6It4s652PyQc7%2F2A9Cx8ezydpUqMqOCxgGJqywIgZXHJQ7sANalOKiDgdpNvlpFfo7S7lG%2BpSj3YIjT7K6QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVGEdhVh%2FcCIulW3CrcA5stSAY1EIMnf5gfMMRQcXworzNMv2mR3a3xmRG4PKOlh57tAQ77kyMeWh4TBE8JeJok05Hkg4PpIbsAUs7pPqOzDDO2eA%2BoIkJRki0hkvlkEPEsLR%2BKFUkNwevIBYnVsltHyAQnmcBf4fybT5TYRrKGiTdkzNKPZ14gZOY%2BfZC0%2FCC0G4VIpE6fmzsDF1anNQ3L8zCKK6WWWteNgG2ZUBYhYlyKVTgy%2F2cfVmZFZdPF6WVU6NWm%2FMI574toa72BrRC7JeXcCeUQAex0%2FCTxOPlAMdWa6LJPHYFqDw%2FXF%2FJungUgIpJrGQEfm96jZvIyBRaUD3mgYVLwuamoHNQZnN3l9LHfjqMkaPk6Wd%2B0Y4%2BFrKRsN6j8hQFWvLXw2bPbVfOeBy8E7bfyrOODPADiEIks9KtHefI5LVlQpenVAwf1DeyT5lsmyLH902HA2%2FyIwestc3fHt%2BKyl9%2F%2Bv23pqNwIQA6G37tTC7aF3ebC3q%2Fcdw2L4EB5LuTTHybBi8aH%2Fz2yfqm%2BdnSCVaLd6obmf3b3cuqPourE1zwylLowODUSOboBaLwuxp%2FDRX2kUOUWDFewPdwpIb5%2FM0ukP%2B53ULBVXpzXVFfvaYOZnoO3XfYGgAO7bt%2BHoR9tTaNTMIXx788GOqUBxg0o0d1saHL%2Fc2G6sftGb%2Fy9kI11zYwSK7v4mGPAH0kt5VfwDzqSevg27C75GLlzDuui3S9S2jvdqgEteSoAuZ4OjCkULExsOciJOSG%2Ft9kG8X%2BkoQZ%2FpeMD4iLViwQERtJLKnnABfmZjaHpycHjV9f%2FOjYoeBg2OS8afF7xSZ2j2CxPHNsUZEeSQWN9nDzVweTsnxO76nDBpLo6R98SAtMkt9Gv&X-Amz-Signature=af568bd4691d03c0842e2839f4462e74f820b8b90a137960855ff2e835311542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKUQFIK%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDFC9s6It4s652PyQc7%2F2A9Cx8ezydpUqMqOCxgGJqywIgZXHJQ7sANalOKiDgdpNvlpFfo7S7lG%2BpSj3YIjT7K6QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVGEdhVh%2FcCIulW3CrcA5stSAY1EIMnf5gfMMRQcXworzNMv2mR3a3xmRG4PKOlh57tAQ77kyMeWh4TBE8JeJok05Hkg4PpIbsAUs7pPqOzDDO2eA%2BoIkJRki0hkvlkEPEsLR%2BKFUkNwevIBYnVsltHyAQnmcBf4fybT5TYRrKGiTdkzNKPZ14gZOY%2BfZC0%2FCC0G4VIpE6fmzsDF1anNQ3L8zCKK6WWWteNgG2ZUBYhYlyKVTgy%2F2cfVmZFZdPF6WVU6NWm%2FMI574toa72BrRC7JeXcCeUQAex0%2FCTxOPlAMdWa6LJPHYFqDw%2FXF%2FJungUgIpJrGQEfm96jZvIyBRaUD3mgYVLwuamoHNQZnN3l9LHfjqMkaPk6Wd%2B0Y4%2BFrKRsN6j8hQFWvLXw2bPbVfOeBy8E7bfyrOODPADiEIks9KtHefI5LVlQpenVAwf1DeyT5lsmyLH902HA2%2FyIwestc3fHt%2BKyl9%2F%2Bv23pqNwIQA6G37tTC7aF3ebC3q%2Fcdw2L4EB5LuTTHybBi8aH%2Fz2yfqm%2BdnSCVaLd6obmf3b3cuqPourE1zwylLowODUSOboBaLwuxp%2FDRX2kUOUWDFewPdwpIb5%2FM0ukP%2B53ULBVXpzXVFfvaYOZnoO3XfYGgAO7bt%2BHoR9tTaNTMIXx788GOqUBxg0o0d1saHL%2Fc2G6sftGb%2Fy9kI11zYwSK7v4mGPAH0kt5VfwDzqSevg27C75GLlzDuui3S9S2jvdqgEteSoAuZ4OjCkULExsOciJOSG%2Ft9kG8X%2BkoQZ%2FpeMD4iLViwQERtJLKnnABfmZjaHpycHjV9f%2FOjYoeBg2OS8afF7xSZ2j2CxPHNsUZEeSQWN9nDzVweTsnxO76nDBpLo6R98SAtMkt9Gv&X-Amz-Signature=acb67dfa6190d3fe4428d27eecf278a163290862c9ec2595443aa83d1de5ef7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKUQFIK%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDFC9s6It4s652PyQc7%2F2A9Cx8ezydpUqMqOCxgGJqywIgZXHJQ7sANalOKiDgdpNvlpFfo7S7lG%2BpSj3YIjT7K6QqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVGEdhVh%2FcCIulW3CrcA5stSAY1EIMnf5gfMMRQcXworzNMv2mR3a3xmRG4PKOlh57tAQ77kyMeWh4TBE8JeJok05Hkg4PpIbsAUs7pPqOzDDO2eA%2BoIkJRki0hkvlkEPEsLR%2BKFUkNwevIBYnVsltHyAQnmcBf4fybT5TYRrKGiTdkzNKPZ14gZOY%2BfZC0%2FCC0G4VIpE6fmzsDF1anNQ3L8zCKK6WWWteNgG2ZUBYhYlyKVTgy%2F2cfVmZFZdPF6WVU6NWm%2FMI574toa72BrRC7JeXcCeUQAex0%2FCTxOPlAMdWa6LJPHYFqDw%2FXF%2FJungUgIpJrGQEfm96jZvIyBRaUD3mgYVLwuamoHNQZnN3l9LHfjqMkaPk6Wd%2B0Y4%2BFrKRsN6j8hQFWvLXw2bPbVfOeBy8E7bfyrOODPADiEIks9KtHefI5LVlQpenVAwf1DeyT5lsmyLH902HA2%2FyIwestc3fHt%2BKyl9%2F%2Bv23pqNwIQA6G37tTC7aF3ebC3q%2Fcdw2L4EB5LuTTHybBi8aH%2Fz2yfqm%2BdnSCVaLd6obmf3b3cuqPourE1zwylLowODUSOboBaLwuxp%2FDRX2kUOUWDFewPdwpIb5%2FM0ukP%2B53ULBVXpzXVFfvaYOZnoO3XfYGgAO7bt%2BHoR9tTaNTMIXx788GOqUBxg0o0d1saHL%2Fc2G6sftGb%2Fy9kI11zYwSK7v4mGPAH0kt5VfwDzqSevg27C75GLlzDuui3S9S2jvdqgEteSoAuZ4OjCkULExsOciJOSG%2Ft9kG8X%2BkoQZ%2FpeMD4iLViwQERtJLKnnABfmZjaHpycHjV9f%2FOjYoeBg2OS8afF7xSZ2j2CxPHNsUZEeSQWN9nDzVweTsnxO76nDBpLo6R98SAtMkt9Gv&X-Amz-Signature=cd1a89cd86f1bfcc2cefe864f8672371a3e9f034b56a5cfdb0f611e156c73270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVQRIGKR%2F20260507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260507T025308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhH1DHEbqYx9k2Om1tP0Pyts9hYgDaLxL2ctrNzMfcwIhAIMzL63FfNobDmfQqi5uoE6fh09sxxvH%2FLPjtIJi4bVQKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo7fNVOWI3CmSlUfEq3AM4F0nMFgm2A2Ibs4PFlHB3j50cvJ%2FvriP243a3j3Jq1MvxfB7KamqwMkXTnRzJYq3HVgxi%2BA4Pw5hWadoWD9SuqiDZYfFLhjjnaXGgpIU2USUclAHx33oX7hYOFjmJ7EZbW6KzDackk6KNPOZhLte5aoyHg4uNU8rzPWSmd%2BQiqScYLC%2BCiPicYAGqE0%2BvATGSqYmrxtdYoTBFdvx0hyEmvTi8NV6nLyeKsr86m6g9Lx9RoPHsWpnGVlKlZfzx15LkQ%2BielLQMRvgO1NgcBr6s%2FxMZ9NRTtAcWiV%2BWkaqZ0EfEED%2F5K3GsfTKTCsXDfiIaJZ3keAS4eClcJqa33PfsuKikgBs2nfgl1Ry8FlttYgOwuVD3fhHTT36CIVG4FewlEGU46h72ooZ4B7YflNO10I2Yrtw188EKmA8%2Fy3AspTUxkEexZSk5eqzpvtr0s9Xan%2FtCQ3MR6sqOFoVjXr4vTfHa7sldkC4NHf4p%2FHvOIxAOY6PkoLSC09t7u3Iy1RE7heGkr45ld%2Ble5HtbisN1GFcbs50SyZ10e8EHzzK7LBRJ%2B7%2FkxDWVlDqTbU36E9HkpDxcTg%2FVDpP8g2wZ352c3qlTvhbWm8u0UrwGAgVUaY69O9p7QsPH87Lc9TDJ8e%2FPBjqkAT66vqv7iW08lIJv4x6lToKj%2Fr6RUzg1w4oqYHxALNxvb3U1dtD6RJVuGRCvmHNF%2FUxU3MhkvZy51mqbGzrOE06bRoiSuvgPY5V3JywhuVi%2BXxdAUqo9EAJCYx17LezPZLfgt7SLJqlkZ%2Fio%2Fs5ngaoRXFDHTB8Db0wUrWTqftUH6yU%2BkYGATfOIUfEPSOPdKI%2BzHgHPs3Wxi6Vh5X7Rel0wuu89&X-Amz-Signature=5b0e9f5dc2062bf942395c26b115b2a50e73027be648e703e16c622249584f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

