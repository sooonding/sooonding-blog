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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57RFUG%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5wJcqToBwJ1N7KiAbZ6yjHCSpEj51vc4toB4pBY7zAiAm9WFLtaM3lVJSaqa6YKL2YFxbWUmCLKarhkRHmNB5AyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Tp07kgo8XbImfkpKtwDhb%2BevNEHBCEItt3jiy%2FESvphfpPY1%2Fqha04msj%2FBZldmgIkKr9ZqaG%2BOlzvmWv7CKgcIrBRL50modK0Hme8kTloaZCMyf8Mw9mzNR9ZiQQ3HrShCPglx%2BQI2JBrG8WJt%2F8xJU0Q2Vqj832yXhNIiMtwyz9xmIElyLk4Yb56RQiSU8GGu6yIc5HkmLAY9Mc2xNTP4I3MIAWQHEX9ueFb9VfK6KIrmBj6j2FgPm4URFBN8lSQ2UuGEsMT7CGmhDsUAnupD8aqzfb4FUrPI7LJJH0ILnglIvN71pu30%2BNd6DKW4GY5XlkNR5RWta9lB7t2ufCxcGg6liqqMP0OU8ScX10%2BXsm92ERQU%2BJG55CbYi%2BeoC8wd2nMeJtaT7H4dCMycE8P46qrqLbMfLM4u5lBQ9cD9lUtuGmH3x8f914YuonFIqt6abvfhtiRxQobzExzqQ7M%2Fy7VPycihEK1gPpbS3n3DvJUhxqxmWA5KxDyTs6%2B%2Fu0c86HiM7m%2BgVO47t3fq67Kf%2FQd3cDnW9D7EJ9jpsQz2nUXYCAM%2BVB1NHUQcwz9ETaSqCd9JCMepHgTcvNyEm%2FTeULwJ4%2FDO8B7pGC5eUiFLk01vrApEw9cTp1sAmyRTnl6T%2BQrR2P9UyKwwz9avyAY6pgF1Zuos4qzCb6PdFbPeF3nEzcae%2BCvbrNHIKSzhhCg3%2BTRpa%2BKrFRLjRyaUEd5LbCUGniKtTbhYf9VjKF1Myrn8nvjF%2FzzI5gyQcf0%2BkFEu5nIpFM%2BK7PuBa68pSAPbGd75wcLO7VcWMmaXz1evWXp%2BJFiaSQ3bWFMo99lHXLKXF64BBVEZa5P6NtQkjHXr2TTnxJrtI2DMIs3JlK4qGMy0WjHYpM1F&X-Amz-Signature=09a691ceca4fb66aff3e7261b09ead64d3b0e80e8a057393364eb17c38cc661a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTD44N3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl8xWoueVTxIHRk7hO8Cy3lmxC%2F%2Fo8xEoN09PFkxwu8AIhALa4FaEUITUDZ9DceCkSUb%2FP8Sxg7ATymjpQFjkOdYk2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1LTmBOIqLz5RO7kq3AMTc0QNF3pQwT8stDpNLVfff2NYh%2BaQc1nRnemNwuaoSIEJPaHeipNFFfDUQlW51YCGYspbsHbLlsOF3%2FGxG2uHMIoG8Ch5YS699bl%2BxjidxPEo35MwTLrlPfglqUhCxsjfVJoc%2BJ65yOUYMCNjO%2BhJDRyx9Egkn%2F0fCLf37Di69n5rNSvd8ez6hXX3qzvbonxCn6EfIjt4gS4XMKt2YCDVAdpb4lrc8dhjqLAI%2FvDkBoNdSgMukffZ8%2BS%2B5rEUI70BYvtDcqcP9%2BGX%2BPBi2QoJBZlawSg3P0MYC9KpN%2B%2FcApM9D201%2FQvZGyyamJGZuInMTtXiCRyZ%2FSIYYoMTsDYvxdy1UjVmeSV2GdtsboREFfRiqUjFnJ3XcUfOAE4I6zRXiyX7hDjKwKXOQxvXQBZ8YffmgGjjcrme6UFTL%2FHv5W0yvNGrAHaYVXrjURcQV1VefU%2FPGFSB0%2FaEG77eIcOEX4F9%2FuHByX0VTQ3o2BOBjtk2hOvQCycjNhOSpB%2Fcyb3teOtOIcOvbUpClYb90e2Y2CNVzXipwa%2FvGRrEIhEGCutBzrlq1aTdhskcMAea95xbpBiVf8aGHijWSO0QG%2BAempPn8G2qRA5oKRBfZqWXEkFoaAwYa1ZvAqlNizDF1q%2FIBjqkAcXFOUXcljZ%2FRK2jzKMTd%2F2nTgyos%2Bg%2FHKefq2yskx9Y68ttGFUt4WqFHEgymwyxRqJHWKGYVldnU6ycGZ82OhGhFjLunjX1U9Si62PI%2FfbvLnrSbCdt0jYJ6dd2x9NJaWpMhvKuknfEPjBFgaoz7rlhVOvARxgBnHMSgOXs0vrPN0RWYo1mqHxBcetBMEmZO3VwDzmPJxfm9FJBbc%2FebEOhcWZg&X-Amz-Signature=4639ea4b9c0535b7aeaeabb04b593fc5208073bc6f22ac9ff561fb4696baf9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTD44N3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl8xWoueVTxIHRk7hO8Cy3lmxC%2F%2Fo8xEoN09PFkxwu8AIhALa4FaEUITUDZ9DceCkSUb%2FP8Sxg7ATymjpQFjkOdYk2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1LTmBOIqLz5RO7kq3AMTc0QNF3pQwT8stDpNLVfff2NYh%2BaQc1nRnemNwuaoSIEJPaHeipNFFfDUQlW51YCGYspbsHbLlsOF3%2FGxG2uHMIoG8Ch5YS699bl%2BxjidxPEo35MwTLrlPfglqUhCxsjfVJoc%2BJ65yOUYMCNjO%2BhJDRyx9Egkn%2F0fCLf37Di69n5rNSvd8ez6hXX3qzvbonxCn6EfIjt4gS4XMKt2YCDVAdpb4lrc8dhjqLAI%2FvDkBoNdSgMukffZ8%2BS%2B5rEUI70BYvtDcqcP9%2BGX%2BPBi2QoJBZlawSg3P0MYC9KpN%2B%2FcApM9D201%2FQvZGyyamJGZuInMTtXiCRyZ%2FSIYYoMTsDYvxdy1UjVmeSV2GdtsboREFfRiqUjFnJ3XcUfOAE4I6zRXiyX7hDjKwKXOQxvXQBZ8YffmgGjjcrme6UFTL%2FHv5W0yvNGrAHaYVXrjURcQV1VefU%2FPGFSB0%2FaEG77eIcOEX4F9%2FuHByX0VTQ3o2BOBjtk2hOvQCycjNhOSpB%2Fcyb3teOtOIcOvbUpClYb90e2Y2CNVzXipwa%2FvGRrEIhEGCutBzrlq1aTdhskcMAea95xbpBiVf8aGHijWSO0QG%2BAempPn8G2qRA5oKRBfZqWXEkFoaAwYa1ZvAqlNizDF1q%2FIBjqkAcXFOUXcljZ%2FRK2jzKMTd%2F2nTgyos%2Bg%2FHKefq2yskx9Y68ttGFUt4WqFHEgymwyxRqJHWKGYVldnU6ycGZ82OhGhFjLunjX1U9Si62PI%2FfbvLnrSbCdt0jYJ6dd2x9NJaWpMhvKuknfEPjBFgaoz7rlhVOvARxgBnHMSgOXs0vrPN0RWYo1mqHxBcetBMEmZO3VwDzmPJxfm9FJBbc%2FebEOhcWZg&X-Amz-Signature=86636c374278c7ed77f093df41a7a0dc3715eb8c22992311d02f53b21b8b9bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTD44N3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl8xWoueVTxIHRk7hO8Cy3lmxC%2F%2Fo8xEoN09PFkxwu8AIhALa4FaEUITUDZ9DceCkSUb%2FP8Sxg7ATymjpQFjkOdYk2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1LTmBOIqLz5RO7kq3AMTc0QNF3pQwT8stDpNLVfff2NYh%2BaQc1nRnemNwuaoSIEJPaHeipNFFfDUQlW51YCGYspbsHbLlsOF3%2FGxG2uHMIoG8Ch5YS699bl%2BxjidxPEo35MwTLrlPfglqUhCxsjfVJoc%2BJ65yOUYMCNjO%2BhJDRyx9Egkn%2F0fCLf37Di69n5rNSvd8ez6hXX3qzvbonxCn6EfIjt4gS4XMKt2YCDVAdpb4lrc8dhjqLAI%2FvDkBoNdSgMukffZ8%2BS%2B5rEUI70BYvtDcqcP9%2BGX%2BPBi2QoJBZlawSg3P0MYC9KpN%2B%2FcApM9D201%2FQvZGyyamJGZuInMTtXiCRyZ%2FSIYYoMTsDYvxdy1UjVmeSV2GdtsboREFfRiqUjFnJ3XcUfOAE4I6zRXiyX7hDjKwKXOQxvXQBZ8YffmgGjjcrme6UFTL%2FHv5W0yvNGrAHaYVXrjURcQV1VefU%2FPGFSB0%2FaEG77eIcOEX4F9%2FuHByX0VTQ3o2BOBjtk2hOvQCycjNhOSpB%2Fcyb3teOtOIcOvbUpClYb90e2Y2CNVzXipwa%2FvGRrEIhEGCutBzrlq1aTdhskcMAea95xbpBiVf8aGHijWSO0QG%2BAempPn8G2qRA5oKRBfZqWXEkFoaAwYa1ZvAqlNizDF1q%2FIBjqkAcXFOUXcljZ%2FRK2jzKMTd%2F2nTgyos%2Bg%2FHKefq2yskx9Y68ttGFUt4WqFHEgymwyxRqJHWKGYVldnU6ycGZ82OhGhFjLunjX1U9Si62PI%2FfbvLnrSbCdt0jYJ6dd2x9NJaWpMhvKuknfEPjBFgaoz7rlhVOvARxgBnHMSgOXs0vrPN0RWYo1mqHxBcetBMEmZO3VwDzmPJxfm9FJBbc%2FebEOhcWZg&X-Amz-Signature=9f128a366b6e4b50247f964d843b8b1b1fe0c277209fd0dfcdacc75ca3ba4769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTD44N3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl8xWoueVTxIHRk7hO8Cy3lmxC%2F%2Fo8xEoN09PFkxwu8AIhALa4FaEUITUDZ9DceCkSUb%2FP8Sxg7ATymjpQFjkOdYk2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1LTmBOIqLz5RO7kq3AMTc0QNF3pQwT8stDpNLVfff2NYh%2BaQc1nRnemNwuaoSIEJPaHeipNFFfDUQlW51YCGYspbsHbLlsOF3%2FGxG2uHMIoG8Ch5YS699bl%2BxjidxPEo35MwTLrlPfglqUhCxsjfVJoc%2BJ65yOUYMCNjO%2BhJDRyx9Egkn%2F0fCLf37Di69n5rNSvd8ez6hXX3qzvbonxCn6EfIjt4gS4XMKt2YCDVAdpb4lrc8dhjqLAI%2FvDkBoNdSgMukffZ8%2BS%2B5rEUI70BYvtDcqcP9%2BGX%2BPBi2QoJBZlawSg3P0MYC9KpN%2B%2FcApM9D201%2FQvZGyyamJGZuInMTtXiCRyZ%2FSIYYoMTsDYvxdy1UjVmeSV2GdtsboREFfRiqUjFnJ3XcUfOAE4I6zRXiyX7hDjKwKXOQxvXQBZ8YffmgGjjcrme6UFTL%2FHv5W0yvNGrAHaYVXrjURcQV1VefU%2FPGFSB0%2FaEG77eIcOEX4F9%2FuHByX0VTQ3o2BOBjtk2hOvQCycjNhOSpB%2Fcyb3teOtOIcOvbUpClYb90e2Y2CNVzXipwa%2FvGRrEIhEGCutBzrlq1aTdhskcMAea95xbpBiVf8aGHijWSO0QG%2BAempPn8G2qRA5oKRBfZqWXEkFoaAwYa1ZvAqlNizDF1q%2FIBjqkAcXFOUXcljZ%2FRK2jzKMTd%2F2nTgyos%2Bg%2FHKefq2yskx9Y68ttGFUt4WqFHEgymwyxRqJHWKGYVldnU6ycGZ82OhGhFjLunjX1U9Si62PI%2FfbvLnrSbCdt0jYJ6dd2x9NJaWpMhvKuknfEPjBFgaoz7rlhVOvARxgBnHMSgOXs0vrPN0RWYo1mqHxBcetBMEmZO3VwDzmPJxfm9FJBbc%2FebEOhcWZg&X-Amz-Signature=93c90093d9b0d99782aec2d4ac9fcbfa785e3a6e3fc1bff975a7651ed5bc1930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNTD44N3%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl8xWoueVTxIHRk7hO8Cy3lmxC%2F%2Fo8xEoN09PFkxwu8AIhALa4FaEUITUDZ9DceCkSUb%2FP8Sxg7ATymjpQFjkOdYk2KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW1LTmBOIqLz5RO7kq3AMTc0QNF3pQwT8stDpNLVfff2NYh%2BaQc1nRnemNwuaoSIEJPaHeipNFFfDUQlW51YCGYspbsHbLlsOF3%2FGxG2uHMIoG8Ch5YS699bl%2BxjidxPEo35MwTLrlPfglqUhCxsjfVJoc%2BJ65yOUYMCNjO%2BhJDRyx9Egkn%2F0fCLf37Di69n5rNSvd8ez6hXX3qzvbonxCn6EfIjt4gS4XMKt2YCDVAdpb4lrc8dhjqLAI%2FvDkBoNdSgMukffZ8%2BS%2B5rEUI70BYvtDcqcP9%2BGX%2BPBi2QoJBZlawSg3P0MYC9KpN%2B%2FcApM9D201%2FQvZGyyamJGZuInMTtXiCRyZ%2FSIYYoMTsDYvxdy1UjVmeSV2GdtsboREFfRiqUjFnJ3XcUfOAE4I6zRXiyX7hDjKwKXOQxvXQBZ8YffmgGjjcrme6UFTL%2FHv5W0yvNGrAHaYVXrjURcQV1VefU%2FPGFSB0%2FaEG77eIcOEX4F9%2FuHByX0VTQ3o2BOBjtk2hOvQCycjNhOSpB%2Fcyb3teOtOIcOvbUpClYb90e2Y2CNVzXipwa%2FvGRrEIhEGCutBzrlq1aTdhskcMAea95xbpBiVf8aGHijWSO0QG%2BAempPn8G2qRA5oKRBfZqWXEkFoaAwYa1ZvAqlNizDF1q%2FIBjqkAcXFOUXcljZ%2FRK2jzKMTd%2F2nTgyos%2Bg%2FHKefq2yskx9Y68ttGFUt4WqFHEgymwyxRqJHWKGYVldnU6ycGZ82OhGhFjLunjX1U9Si62PI%2FfbvLnrSbCdt0jYJ6dd2x9NJaWpMhvKuknfEPjBFgaoz7rlhVOvARxgBnHMSgOXs0vrPN0RWYo1mqHxBcetBMEmZO3VwDzmPJxfm9FJBbc%2FebEOhcWZg&X-Amz-Signature=38419fbafe4a8de823feeef0a023ea9919d2016438d79bbf79e00e78654430df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57RFUG%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T010231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFC5wJcqToBwJ1N7KiAbZ6yjHCSpEj51vc4toB4pBY7zAiAm9WFLtaM3lVJSaqa6YKL2YFxbWUmCLKarhkRHmNB5AyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Tp07kgo8XbImfkpKtwDhb%2BevNEHBCEItt3jiy%2FESvphfpPY1%2Fqha04msj%2FBZldmgIkKr9ZqaG%2BOlzvmWv7CKgcIrBRL50modK0Hme8kTloaZCMyf8Mw9mzNR9ZiQQ3HrShCPglx%2BQI2JBrG8WJt%2F8xJU0Q2Vqj832yXhNIiMtwyz9xmIElyLk4Yb56RQiSU8GGu6yIc5HkmLAY9Mc2xNTP4I3MIAWQHEX9ueFb9VfK6KIrmBj6j2FgPm4URFBN8lSQ2UuGEsMT7CGmhDsUAnupD8aqzfb4FUrPI7LJJH0ILnglIvN71pu30%2BNd6DKW4GY5XlkNR5RWta9lB7t2ufCxcGg6liqqMP0OU8ScX10%2BXsm92ERQU%2BJG55CbYi%2BeoC8wd2nMeJtaT7H4dCMycE8P46qrqLbMfLM4u5lBQ9cD9lUtuGmH3x8f914YuonFIqt6abvfhtiRxQobzExzqQ7M%2Fy7VPycihEK1gPpbS3n3DvJUhxqxmWA5KxDyTs6%2B%2Fu0c86HiM7m%2BgVO47t3fq67Kf%2FQd3cDnW9D7EJ9jpsQz2nUXYCAM%2BVB1NHUQcwz9ETaSqCd9JCMepHgTcvNyEm%2FTeULwJ4%2FDO8B7pGC5eUiFLk01vrApEw9cTp1sAmyRTnl6T%2BQrR2P9UyKwwz9avyAY6pgF1Zuos4qzCb6PdFbPeF3nEzcae%2BCvbrNHIKSzhhCg3%2BTRpa%2BKrFRLjRyaUEd5LbCUGniKtTbhYf9VjKF1Myrn8nvjF%2FzzI5gyQcf0%2BkFEu5nIpFM%2BK7PuBa68pSAPbGd75wcLO7VcWMmaXz1evWXp%2BJFiaSQ3bWFMo99lHXLKXF64BBVEZa5P6NtQkjHXr2TTnxJrtI2DMIs3JlK4qGMy0WjHYpM1F&X-Amz-Signature=db41ee128ae0c5cd034d75db32aab3ee71f0f1d5eb9126f46483eea7bdeb1c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

