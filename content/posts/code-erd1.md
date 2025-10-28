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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DZUA3S%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6VwJIesey3gQpzSXTAD6DsG%2BQYkHJkRrlRV8mpMazbgIgQAPsi6fDlZnPh3OHtJxAOOqumutPULXqNyZCwcbCsIoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Fm5xcB9sZdvk%2Fx4yrcA0fZHZ9a3RPb6nHDcYJ8ay7yfc5Hby%2FExTxmrikn%2BDRs9cUJEc62LZTotPMKVTVJirSuQYADOFLqAZ59u6tMyXQ%2BG4HoCb7tUHXvQ6GCF3FXtisdiIeZumNMhWvJ8mP%2B%2B6RcBfLx%2FlB5%2F%2FSK2jEewVjG011LAZqC4dxu%2Ft4A7IsB3od7ZyD5qK2DodJmjMhavvm3loPcN9O7jrNRuBVpI5kKP824OFhYPuQ31TI7eYRInsD8Naj%2B3Chpmdiw4SATunftCC45x6EWJuYnY2vuBVXRIKQKlhF2SAG5YsAUwavrqKHLY4nhxKQ0w%2BkiyHpw7neV5u08tVnEJN0iXMnaBfyelJTrjlwSGXxBP4FHo7fQROVyD9ZYPXJmwJNg3zVXHs%2B5dPxUGTQeIZwl%2FE0djAXvOw72ML05iHmgG6OrOYZixim0AnovkknZhmnWR4LBS%2B59ziQ33VHmZ7WzCPnsYvAQuW3UovlSE%2B6DltR7qqFSvCuxwqCzqLj5nz56YyOfV16JK0QiXboAMKfPlUvDIHVENKCDuDuAn9RjqJcaEx66cBesx4P9k1P7Hpsu62Z%2FOUncjn09yGqpAN5%2FlS6PQ6JLcFcksto6el56ABYKiU2Htj54yGMY0uZx80KxMJ6egMgGOqUBXaUGyq%2FblIR0pRN7Bfm1kCSi2Yln4Z6YdDUva3XBRWcMbo21ARA%2FCigxa1rwY5MZ5SFeWM82y2n%2Fs1NAvxcu8p6%2FhfVJ6I0MI3ovfObI2lV2YuLpgL2unmjUV5IKBfqi3HFFa64LgN8XQ%2FNGibkEgwj1%2Fh0zpIhYKgu%2F3ZTnoY3okcoel%2FTJn%2B4yfOZbDzPMODu2oskt0oBafzPPdALXztNSYO1T&X-Amz-Signature=1a20200e361ae8e6d09ef137042dd00447d6b9981b14defef3a13b8f184bc6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFD2W7GU%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FTPjlxx1%2FPiZ7AGAiY%2Bz%2FLG76y9EHNciC%2FYqqmDhWyAiEAwfkv8DsuZuUTGAGdwEGTthXB852nwCnTtLTAeALc4cAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxAIDj%2F5QIH88rb9ircA3JDo%2FMArUIDzvG7%2FbORWg2Hk9ZY64NkDIyFZ%2Fw2ALpZQ5PaLVmHT7MwrxR64%2BEDiS1nqhleK%2F0dwm1cRw1T8uQOs9h6vzyuR7bBCzAkJcPvuUmHDKBjwEwYhKjZxC7s8qg2GPhyYEOvBk1NoHP%2FUxLa0R3aDdP6lm5yRzeZVpr3wFxwCBmahIf87YVssVk%2FN2cJFPsJIIrwwy4w7rdyMkUdgRyTh0vbm7mQoQA0cF0dZgStXdayxtgcJIoE6apJuG5OVlFqDTveWBZDqqi5YEil4mNak%2Bf%2Bux3jkOOI%2FlZCTY%2BYAsTsButZCIv0RMcGKxlX6oQSPx%2Fxui15EvQ%2F6XUggklVOKHGkD%2FibihRVS7h%2Fgv6ZIuLtG5tz7CwmvbNYYWkTeizE2VNVQFzd0FLa5KCGLc4YYkZY68OIjQyiJDKrv0l6G5jCF7DWkt4ExcfHOxo51fIQqDjdUSC79s8u5I%2F6D7KW%2Fp88pGj5gsL7Ztb%2B1a8r8BAOnjb0s5yWrHE6PNh5SQ9mSB7CbQRnHh%2FupcOLKlolXirky7fnjKdeR8%2Fab%2BBqwPCeils0YlWqvuAahvaW7qls%2Bf8rVsqQDNEEJDhxUQrQaaksZVSG9PZ8gJ3x9bgNMKC2YOQY8H3MPebgMgGOqUBA%2FBbvapXNPVnWmmSKJz5dOMicIl6teN0Jp1P8IWFC%2FKo2TlOMvi6OI3Nhcx0RMB%2BmzVJmrrXg2NnI%2BVtAYoTfvcQZXnX%2FV%2BA9yW6cVb5Sg1iEWdOyza%2F5EkTEhNjxJR4V1pzbxVZ9KfM3uUjMDtxfuNQ1nJaxtCWGqI4UzeZjrhY98T6ufHml94OsEIYv3O4LZ1QaND%2BQgXtdm9qdddhDg9LQUhu&X-Amz-Signature=e2d8b5a2fc13281407c29fa3cd52f5244ea653812c0d57d1551edd3946f8fc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFD2W7GU%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FTPjlxx1%2FPiZ7AGAiY%2Bz%2FLG76y9EHNciC%2FYqqmDhWyAiEAwfkv8DsuZuUTGAGdwEGTthXB852nwCnTtLTAeALc4cAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxAIDj%2F5QIH88rb9ircA3JDo%2FMArUIDzvG7%2FbORWg2Hk9ZY64NkDIyFZ%2Fw2ALpZQ5PaLVmHT7MwrxR64%2BEDiS1nqhleK%2F0dwm1cRw1T8uQOs9h6vzyuR7bBCzAkJcPvuUmHDKBjwEwYhKjZxC7s8qg2GPhyYEOvBk1NoHP%2FUxLa0R3aDdP6lm5yRzeZVpr3wFxwCBmahIf87YVssVk%2FN2cJFPsJIIrwwy4w7rdyMkUdgRyTh0vbm7mQoQA0cF0dZgStXdayxtgcJIoE6apJuG5OVlFqDTveWBZDqqi5YEil4mNak%2Bf%2Bux3jkOOI%2FlZCTY%2BYAsTsButZCIv0RMcGKxlX6oQSPx%2Fxui15EvQ%2F6XUggklVOKHGkD%2FibihRVS7h%2Fgv6ZIuLtG5tz7CwmvbNYYWkTeizE2VNVQFzd0FLa5KCGLc4YYkZY68OIjQyiJDKrv0l6G5jCF7DWkt4ExcfHOxo51fIQqDjdUSC79s8u5I%2F6D7KW%2Fp88pGj5gsL7Ztb%2B1a8r8BAOnjb0s5yWrHE6PNh5SQ9mSB7CbQRnHh%2FupcOLKlolXirky7fnjKdeR8%2Fab%2BBqwPCeils0YlWqvuAahvaW7qls%2Bf8rVsqQDNEEJDhxUQrQaaksZVSG9PZ8gJ3x9bgNMKC2YOQY8H3MPebgMgGOqUBA%2FBbvapXNPVnWmmSKJz5dOMicIl6teN0Jp1P8IWFC%2FKo2TlOMvi6OI3Nhcx0RMB%2BmzVJmrrXg2NnI%2BVtAYoTfvcQZXnX%2FV%2BA9yW6cVb5Sg1iEWdOyza%2F5EkTEhNjxJR4V1pzbxVZ9KfM3uUjMDtxfuNQ1nJaxtCWGqI4UzeZjrhY98T6ufHml94OsEIYv3O4LZ1QaND%2BQgXtdm9qdddhDg9LQUhu&X-Amz-Signature=1da56ca090b3ddcd52b6630ae3385ceacff7ae1b674ba34d733e21647b0382ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFD2W7GU%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FTPjlxx1%2FPiZ7AGAiY%2Bz%2FLG76y9EHNciC%2FYqqmDhWyAiEAwfkv8DsuZuUTGAGdwEGTthXB852nwCnTtLTAeALc4cAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxAIDj%2F5QIH88rb9ircA3JDo%2FMArUIDzvG7%2FbORWg2Hk9ZY64NkDIyFZ%2Fw2ALpZQ5PaLVmHT7MwrxR64%2BEDiS1nqhleK%2F0dwm1cRw1T8uQOs9h6vzyuR7bBCzAkJcPvuUmHDKBjwEwYhKjZxC7s8qg2GPhyYEOvBk1NoHP%2FUxLa0R3aDdP6lm5yRzeZVpr3wFxwCBmahIf87YVssVk%2FN2cJFPsJIIrwwy4w7rdyMkUdgRyTh0vbm7mQoQA0cF0dZgStXdayxtgcJIoE6apJuG5OVlFqDTveWBZDqqi5YEil4mNak%2Bf%2Bux3jkOOI%2FlZCTY%2BYAsTsButZCIv0RMcGKxlX6oQSPx%2Fxui15EvQ%2F6XUggklVOKHGkD%2FibihRVS7h%2Fgv6ZIuLtG5tz7CwmvbNYYWkTeizE2VNVQFzd0FLa5KCGLc4YYkZY68OIjQyiJDKrv0l6G5jCF7DWkt4ExcfHOxo51fIQqDjdUSC79s8u5I%2F6D7KW%2Fp88pGj5gsL7Ztb%2B1a8r8BAOnjb0s5yWrHE6PNh5SQ9mSB7CbQRnHh%2FupcOLKlolXirky7fnjKdeR8%2Fab%2BBqwPCeils0YlWqvuAahvaW7qls%2Bf8rVsqQDNEEJDhxUQrQaaksZVSG9PZ8gJ3x9bgNMKC2YOQY8H3MPebgMgGOqUBA%2FBbvapXNPVnWmmSKJz5dOMicIl6teN0Jp1P8IWFC%2FKo2TlOMvi6OI3Nhcx0RMB%2BmzVJmrrXg2NnI%2BVtAYoTfvcQZXnX%2FV%2BA9yW6cVb5Sg1iEWdOyza%2F5EkTEhNjxJR4V1pzbxVZ9KfM3uUjMDtxfuNQ1nJaxtCWGqI4UzeZjrhY98T6ufHml94OsEIYv3O4LZ1QaND%2BQgXtdm9qdddhDg9LQUhu&X-Amz-Signature=00711f347fdf52025dcbec80dcd177f8eeb332da04c9faaf3b02e313a68f718b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFD2W7GU%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FTPjlxx1%2FPiZ7AGAiY%2Bz%2FLG76y9EHNciC%2FYqqmDhWyAiEAwfkv8DsuZuUTGAGdwEGTthXB852nwCnTtLTAeALc4cAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxAIDj%2F5QIH88rb9ircA3JDo%2FMArUIDzvG7%2FbORWg2Hk9ZY64NkDIyFZ%2Fw2ALpZQ5PaLVmHT7MwrxR64%2BEDiS1nqhleK%2F0dwm1cRw1T8uQOs9h6vzyuR7bBCzAkJcPvuUmHDKBjwEwYhKjZxC7s8qg2GPhyYEOvBk1NoHP%2FUxLa0R3aDdP6lm5yRzeZVpr3wFxwCBmahIf87YVssVk%2FN2cJFPsJIIrwwy4w7rdyMkUdgRyTh0vbm7mQoQA0cF0dZgStXdayxtgcJIoE6apJuG5OVlFqDTveWBZDqqi5YEil4mNak%2Bf%2Bux3jkOOI%2FlZCTY%2BYAsTsButZCIv0RMcGKxlX6oQSPx%2Fxui15EvQ%2F6XUggklVOKHGkD%2FibihRVS7h%2Fgv6ZIuLtG5tz7CwmvbNYYWkTeizE2VNVQFzd0FLa5KCGLc4YYkZY68OIjQyiJDKrv0l6G5jCF7DWkt4ExcfHOxo51fIQqDjdUSC79s8u5I%2F6D7KW%2Fp88pGj5gsL7Ztb%2B1a8r8BAOnjb0s5yWrHE6PNh5SQ9mSB7CbQRnHh%2FupcOLKlolXirky7fnjKdeR8%2Fab%2BBqwPCeils0YlWqvuAahvaW7qls%2Bf8rVsqQDNEEJDhxUQrQaaksZVSG9PZ8gJ3x9bgNMKC2YOQY8H3MPebgMgGOqUBA%2FBbvapXNPVnWmmSKJz5dOMicIl6teN0Jp1P8IWFC%2FKo2TlOMvi6OI3Nhcx0RMB%2BmzVJmrrXg2NnI%2BVtAYoTfvcQZXnX%2FV%2BA9yW6cVb5Sg1iEWdOyza%2F5EkTEhNjxJR4V1pzbxVZ9KfM3uUjMDtxfuNQ1nJaxtCWGqI4UzeZjrhY98T6ufHml94OsEIYv3O4LZ1QaND%2BQgXtdm9qdddhDg9LQUhu&X-Amz-Signature=50adde79100f59f6e119da12e622d3203b79253560f9c32cbe235adb3895b3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFD2W7GU%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FTPjlxx1%2FPiZ7AGAiY%2Bz%2FLG76y9EHNciC%2FYqqmDhWyAiEAwfkv8DsuZuUTGAGdwEGTthXB852nwCnTtLTAeALc4cAqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxAIDj%2F5QIH88rb9ircA3JDo%2FMArUIDzvG7%2FbORWg2Hk9ZY64NkDIyFZ%2Fw2ALpZQ5PaLVmHT7MwrxR64%2BEDiS1nqhleK%2F0dwm1cRw1T8uQOs9h6vzyuR7bBCzAkJcPvuUmHDKBjwEwYhKjZxC7s8qg2GPhyYEOvBk1NoHP%2FUxLa0R3aDdP6lm5yRzeZVpr3wFxwCBmahIf87YVssVk%2FN2cJFPsJIIrwwy4w7rdyMkUdgRyTh0vbm7mQoQA0cF0dZgStXdayxtgcJIoE6apJuG5OVlFqDTveWBZDqqi5YEil4mNak%2Bf%2Bux3jkOOI%2FlZCTY%2BYAsTsButZCIv0RMcGKxlX6oQSPx%2Fxui15EvQ%2F6XUggklVOKHGkD%2FibihRVS7h%2Fgv6ZIuLtG5tz7CwmvbNYYWkTeizE2VNVQFzd0FLa5KCGLc4YYkZY68OIjQyiJDKrv0l6G5jCF7DWkt4ExcfHOxo51fIQqDjdUSC79s8u5I%2F6D7KW%2Fp88pGj5gsL7Ztb%2B1a8r8BAOnjb0s5yWrHE6PNh5SQ9mSB7CbQRnHh%2FupcOLKlolXirky7fnjKdeR8%2Fab%2BBqwPCeils0YlWqvuAahvaW7qls%2Bf8rVsqQDNEEJDhxUQrQaaksZVSG9PZ8gJ3x9bgNMKC2YOQY8H3MPebgMgGOqUBA%2FBbvapXNPVnWmmSKJz5dOMicIl6teN0Jp1P8IWFC%2FKo2TlOMvi6OI3Nhcx0RMB%2BmzVJmrrXg2NnI%2BVtAYoTfvcQZXnX%2FV%2BA9yW6cVb5Sg1iEWdOyza%2F5EkTEhNjxJR4V1pzbxVZ9KfM3uUjMDtxfuNQ1nJaxtCWGqI4UzeZjrhY98T6ufHml94OsEIYv3O4LZ1QaND%2BQgXtdm9qdddhDg9LQUhu&X-Amz-Signature=033207886198fc4e0601514c9b32a500d512f82b85ebb38bc3d7ebce70acb2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2DZUA3S%2F20251028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251028T005924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6VwJIesey3gQpzSXTAD6DsG%2BQYkHJkRrlRV8mpMazbgIgQAPsi6fDlZnPh3OHtJxAOOqumutPULXqNyZCwcbCsIoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2Fm5xcB9sZdvk%2Fx4yrcA0fZHZ9a3RPb6nHDcYJ8ay7yfc5Hby%2FExTxmrikn%2BDRs9cUJEc62LZTotPMKVTVJirSuQYADOFLqAZ59u6tMyXQ%2BG4HoCb7tUHXvQ6GCF3FXtisdiIeZumNMhWvJ8mP%2B%2B6RcBfLx%2FlB5%2F%2FSK2jEewVjG011LAZqC4dxu%2Ft4A7IsB3od7ZyD5qK2DodJmjMhavvm3loPcN9O7jrNRuBVpI5kKP824OFhYPuQ31TI7eYRInsD8Naj%2B3Chpmdiw4SATunftCC45x6EWJuYnY2vuBVXRIKQKlhF2SAG5YsAUwavrqKHLY4nhxKQ0w%2BkiyHpw7neV5u08tVnEJN0iXMnaBfyelJTrjlwSGXxBP4FHo7fQROVyD9ZYPXJmwJNg3zVXHs%2B5dPxUGTQeIZwl%2FE0djAXvOw72ML05iHmgG6OrOYZixim0AnovkknZhmnWR4LBS%2B59ziQ33VHmZ7WzCPnsYvAQuW3UovlSE%2B6DltR7qqFSvCuxwqCzqLj5nz56YyOfV16JK0QiXboAMKfPlUvDIHVENKCDuDuAn9RjqJcaEx66cBesx4P9k1P7Hpsu62Z%2FOUncjn09yGqpAN5%2FlS6PQ6JLcFcksto6el56ABYKiU2Htj54yGMY0uZx80KxMJ6egMgGOqUBXaUGyq%2FblIR0pRN7Bfm1kCSi2Yln4Z6YdDUva3XBRWcMbo21ARA%2FCigxa1rwY5MZ5SFeWM82y2n%2Fs1NAvxcu8p6%2FhfVJ6I0MI3ovfObI2lV2YuLpgL2unmjUV5IKBfqi3HFFa64LgN8XQ%2FNGibkEgwj1%2Fh0zpIhYKgu%2F3ZTnoY3okcoel%2FTJn%2B4yfOZbDzPMODu2oskt0oBafzPPdALXztNSYO1T&X-Amz-Signature=935e31e29a902af384b6c9441561620ffad01bd1e91ef6dcc3e1fda96bee264d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

