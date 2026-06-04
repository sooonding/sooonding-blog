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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSHRDBA%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T040231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQLM5lS%2B2gY23HQd4HmTyQBJphC4mdHIAZ1rlubqf2bgIhAMTPhmbV3NnFdoeSBk9Ofh8MUQ0B5dyT%2Fu99GY%2BsDTb7Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwrUsrofW75xMBWtk0q3ANR56C0bCpixdJ05b1roYtMA%2FhFKCK9eGUv6Iqznf00d7HP4ZYgVcD2TJeICuHN2Sv2LoxAMc00ZmRAZ1dfGkm%2BFEgDFnznMyz9KgpWKd4482%2Bn8RuTKYUS9dUmlXs9VSh1Ji9gY8El%2BwQAShO66ha5f0k%2Ba1DOhaRdHhaK5qI9raUGBwO%2BjQACJ%2BVxAHgPx7wqJ5g4Kxudj01uCtgrXT8ztD%2FXojyQs7urtmheARoG3A96CmNdsFipOSxgMhYMP%2By94wlpAV70T1j5VfAA2GtOLFwxK6SCFQrrXSsdBRcAx1qg1q1T0vrSUIKe8VU8kzKWZr3dwhTLL%2FNZ1icereWKn802N06lYzz4i9d0BWDxLGGJjsdFD4aQTUtJ7pX7JVCjt5eJobDfFBRMQTW4GHbMT8fb8gLzjNx%2BrdIVOCdp0mbwoMU%2F6AAZw9J%2BQrPW6GRx7w7ngKa9Q2cSDc2laTRYaqFjn6ZgNsAicTY1IDNuZfByx728jw8C9gnBZl54tw2yKWdjjbu%2FDm0sEoccfKflJT4pjuM6WbX9QjXYQ58f9OOKp9NGvwdT6aN8S%2BjuiDev3jb2hHToCUq9xJb3sA8Yzpkhle4VMCAGVRHxHBup0F0wSatK0vzpDJIW%2BjDr5oPRBjqkATXr0few0tk%2FqBJ%2Bdxl%2BWuWQ7VONry1fpa6qv32ldjAkR0wuDYirEIdq7yeEyapman%2B%2FsHFr2J%2BY1HfglMsm0uLljjPHeNcMjbGrpiXauxY01d6Im9fbmC2d0vtWgLnNuqrVlQqCwX2ouWU8daEFF6zK%2BgM5pal1WR%2F0CyGVq1gzaAX7xcRGjVEMnPFyaA4v5m7zokFMSZY%2B74LOwYMNMrVFlIAV&X-Amz-Signature=76c485562ac123069c69d6e24f88d702313c12cea2de6c4aecb1c6e1e07c1a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDZMSUB%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T040232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8WCcZZ6806N9MZY0SJGSx%2B78mtWbcMj%2BdzmfzQ%2FBE7AiEAw81R7Yxy81FD1coZGgtkQkm2FNk4iHL9digj8e0OjKIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJbrY9T2zlAWXejrqircA9erVLlrnEqHQke%2Brh9sGbklWMts6I9blpwzDcs0pQQfOSuKsznBoYEHWuVPxI0lYpFhPLqZnmjjTBZ1kJFl3YkyfvhzcEGbO%2B5kBn8VTahrn7fNxbfYIi5%2F%2Fe6BVo9I4EA7lJtZRf1yNLCJhzNcISBruMqYRPRgTxeMPItyF4zbyAQzPxUSYwjY%2BceZA5%2BmkuhgYnDgvU80qGEZIIEBaARvPh2hyICvVTcZ8uNA2jjNq6avgrSP7uAgOQQpUbVSf%2B5xwu97d%2Fpf2L3LUrRKNUhMc0LuAFzPtWEsy%2Fd4y31594TqRVlgkHax%2BSWdxJrGorZ2anwlq94IFE4pAztpPoKlDWg8aT9qk%2BzzZzc8YDNWmEEm0Y17enQKMSOFYoDO3KXLwncHGUkDA2f09G8jk0BfEbZubhAo2Tz%2Fb1EdwZZ037UUwGIgp5uNTegjPYO2ZXnmldXVfy8FOnAAFFJGEN7PymfNuLmFAF7x4qDkK9rgZ4qXn66atb40d7HlvdTfCECXupMU%2F2JNpxYZrGbGYVvGpn3I0xe9iK6rJPmthee5s6VJ1yGobBjVvL8efuvdOhGuo7JlJQlITUmVm%2FfEJPGfTkilb0QMZontfItq2xxkGCIlLWhgI9ruNlTcMM3ng9EGOqUB7Qkh6lgP8pJim1Yh1Le5YHyD6iZdaVTctDQZ2WlJYSFYf0Kso3Gdsz11g9Ph3bgt%2B9uHCqKRVlkXa0OCO1%2BYCmI6O%2F5YKGjygVFRGGRAeYYQoIVGp9%2Bnt2HcRZebePstKed1X7YOo7wbfnmrVC5Dsh7d3DSrp0GMI%2Fs83gliVAyoOyNzMA2UV6oe15H9Da9yLXDuGlF2%2FhNW%2BZxGIrZug0wy5gMR&X-Amz-Signature=05ba362ab5f908f02c3675f2203bceecc8890d8f4ea3afa81b9b165668aed272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDZMSUB%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T040232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8WCcZZ6806N9MZY0SJGSx%2B78mtWbcMj%2BdzmfzQ%2FBE7AiEAw81R7Yxy81FD1coZGgtkQkm2FNk4iHL9digj8e0OjKIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJbrY9T2zlAWXejrqircA9erVLlrnEqHQke%2Brh9sGbklWMts6I9blpwzDcs0pQQfOSuKsznBoYEHWuVPxI0lYpFhPLqZnmjjTBZ1kJFl3YkyfvhzcEGbO%2B5kBn8VTahrn7fNxbfYIi5%2F%2Fe6BVo9I4EA7lJtZRf1yNLCJhzNcISBruMqYRPRgTxeMPItyF4zbyAQzPxUSYwjY%2BceZA5%2BmkuhgYnDgvU80qGEZIIEBaARvPh2hyICvVTcZ8uNA2jjNq6avgrSP7uAgOQQpUbVSf%2B5xwu97d%2Fpf2L3LUrRKNUhMc0LuAFzPtWEsy%2Fd4y31594TqRVlgkHax%2BSWdxJrGorZ2anwlq94IFE4pAztpPoKlDWg8aT9qk%2BzzZzc8YDNWmEEm0Y17enQKMSOFYoDO3KXLwncHGUkDA2f09G8jk0BfEbZubhAo2Tz%2Fb1EdwZZ037UUwGIgp5uNTegjPYO2ZXnmldXVfy8FOnAAFFJGEN7PymfNuLmFAF7x4qDkK9rgZ4qXn66atb40d7HlvdTfCECXupMU%2F2JNpxYZrGbGYVvGpn3I0xe9iK6rJPmthee5s6VJ1yGobBjVvL8efuvdOhGuo7JlJQlITUmVm%2FfEJPGfTkilb0QMZontfItq2xxkGCIlLWhgI9ruNlTcMM3ng9EGOqUB7Qkh6lgP8pJim1Yh1Le5YHyD6iZdaVTctDQZ2WlJYSFYf0Kso3Gdsz11g9Ph3bgt%2B9uHCqKRVlkXa0OCO1%2BYCmI6O%2F5YKGjygVFRGGRAeYYQoIVGp9%2Bnt2HcRZebePstKed1X7YOo7wbfnmrVC5Dsh7d3DSrp0GMI%2Fs83gliVAyoOyNzMA2UV6oe15H9Da9yLXDuGlF2%2FhNW%2BZxGIrZug0wy5gMR&X-Amz-Signature=f931fc118e81fe0194c0e5e5be01fae6062a1a12928c62b57eb12c6b0aac4058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDZMSUB%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T040232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8WCcZZ6806N9MZY0SJGSx%2B78mtWbcMj%2BdzmfzQ%2FBE7AiEAw81R7Yxy81FD1coZGgtkQkm2FNk4iHL9digj8e0OjKIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJbrY9T2zlAWXejrqircA9erVLlrnEqHQke%2Brh9sGbklWMts6I9blpwzDcs0pQQfOSuKsznBoYEHWuVPxI0lYpFhPLqZnmjjTBZ1kJFl3YkyfvhzcEGbO%2B5kBn8VTahrn7fNxbfYIi5%2F%2Fe6BVo9I4EA7lJtZRf1yNLCJhzNcISBruMqYRPRgTxeMPItyF4zbyAQzPxUSYwjY%2BceZA5%2BmkuhgYnDgvU80qGEZIIEBaARvPh2hyICvVTcZ8uNA2jjNq6avgrSP7uAgOQQpUbVSf%2B5xwu97d%2Fpf2L3LUrRKNUhMc0LuAFzPtWEsy%2Fd4y31594TqRVlgkHax%2BSWdxJrGorZ2anwlq94IFE4pAztpPoKlDWg8aT9qk%2BzzZzc8YDNWmEEm0Y17enQKMSOFYoDO3KXLwncHGUkDA2f09G8jk0BfEbZubhAo2Tz%2Fb1EdwZZ037UUwGIgp5uNTegjPYO2ZXnmldXVfy8FOnAAFFJGEN7PymfNuLmFAF7x4qDkK9rgZ4qXn66atb40d7HlvdTfCECXupMU%2F2JNpxYZrGbGYVvGpn3I0xe9iK6rJPmthee5s6VJ1yGobBjVvL8efuvdOhGuo7JlJQlITUmVm%2FfEJPGfTkilb0QMZontfItq2xxkGCIlLWhgI9ruNlTcMM3ng9EGOqUB7Qkh6lgP8pJim1Yh1Le5YHyD6iZdaVTctDQZ2WlJYSFYf0Kso3Gdsz11g9Ph3bgt%2B9uHCqKRVlkXa0OCO1%2BYCmI6O%2F5YKGjygVFRGGRAeYYQoIVGp9%2Bnt2HcRZebePstKed1X7YOo7wbfnmrVC5Dsh7d3DSrp0GMI%2Fs83gliVAyoOyNzMA2UV6oe15H9Da9yLXDuGlF2%2FhNW%2BZxGIrZug0wy5gMR&X-Amz-Signature=10a4ce735ace46c3f64cee1a9c861850895e1bb1d89b12c7ca1fc38efe64b29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDZMSUB%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T040232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8WCcZZ6806N9MZY0SJGSx%2B78mtWbcMj%2BdzmfzQ%2FBE7AiEAw81R7Yxy81FD1coZGgtkQkm2FNk4iHL9digj8e0OjKIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJbrY9T2zlAWXejrqircA9erVLlrnEqHQke%2Brh9sGbklWMts6I9blpwzDcs0pQQfOSuKsznBoYEHWuVPxI0lYpFhPLqZnmjjTBZ1kJFl3YkyfvhzcEGbO%2B5kBn8VTahrn7fNxbfYIi5%2F%2Fe6BVo9I4EA7lJtZRf1yNLCJhzNcISBruMqYRPRgTxeMPItyF4zbyAQzPxUSYwjY%2BceZA5%2BmkuhgYnDgvU80qGEZIIEBaARvPh2hyICvVTcZ8uNA2jjNq6avgrSP7uAgOQQpUbVSf%2B5xwu97d%2Fpf2L3LUrRKNUhMc0LuAFzPtWEsy%2Fd4y31594TqRVlgkHax%2BSWdxJrGorZ2anwlq94IFE4pAztpPoKlDWg8aT9qk%2BzzZzc8YDNWmEEm0Y17enQKMSOFYoDO3KXLwncHGUkDA2f09G8jk0BfEbZubhAo2Tz%2Fb1EdwZZ037UUwGIgp5uNTegjPYO2ZXnmldXVfy8FOnAAFFJGEN7PymfNuLmFAF7x4qDkK9rgZ4qXn66atb40d7HlvdTfCECXupMU%2F2JNpxYZrGbGYVvGpn3I0xe9iK6rJPmthee5s6VJ1yGobBjVvL8efuvdOhGuo7JlJQlITUmVm%2FfEJPGfTkilb0QMZontfItq2xxkGCIlLWhgI9ruNlTcMM3ng9EGOqUB7Qkh6lgP8pJim1Yh1Le5YHyD6iZdaVTctDQZ2WlJYSFYf0Kso3Gdsz11g9Ph3bgt%2B9uHCqKRVlkXa0OCO1%2BYCmI6O%2F5YKGjygVFRGGRAeYYQoIVGp9%2Bnt2HcRZebePstKed1X7YOo7wbfnmrVC5Dsh7d3DSrp0GMI%2Fs83gliVAyoOyNzMA2UV6oe15H9Da9yLXDuGlF2%2FhNW%2BZxGIrZug0wy5gMR&X-Amz-Signature=1bf7044f9c9899462f5495d69772288fabcac1bab6dfd2829d3030b6b588e37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDZMSUB%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T040232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8WCcZZ6806N9MZY0SJGSx%2B78mtWbcMj%2BdzmfzQ%2FBE7AiEAw81R7Yxy81FD1coZGgtkQkm2FNk4iHL9digj8e0OjKIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDJbrY9T2zlAWXejrqircA9erVLlrnEqHQke%2Brh9sGbklWMts6I9blpwzDcs0pQQfOSuKsznBoYEHWuVPxI0lYpFhPLqZnmjjTBZ1kJFl3YkyfvhzcEGbO%2B5kBn8VTahrn7fNxbfYIi5%2F%2Fe6BVo9I4EA7lJtZRf1yNLCJhzNcISBruMqYRPRgTxeMPItyF4zbyAQzPxUSYwjY%2BceZA5%2BmkuhgYnDgvU80qGEZIIEBaARvPh2hyICvVTcZ8uNA2jjNq6avgrSP7uAgOQQpUbVSf%2B5xwu97d%2Fpf2L3LUrRKNUhMc0LuAFzPtWEsy%2Fd4y31594TqRVlgkHax%2BSWdxJrGorZ2anwlq94IFE4pAztpPoKlDWg8aT9qk%2BzzZzc8YDNWmEEm0Y17enQKMSOFYoDO3KXLwncHGUkDA2f09G8jk0BfEbZubhAo2Tz%2Fb1EdwZZ037UUwGIgp5uNTegjPYO2ZXnmldXVfy8FOnAAFFJGEN7PymfNuLmFAF7x4qDkK9rgZ4qXn66atb40d7HlvdTfCECXupMU%2F2JNpxYZrGbGYVvGpn3I0xe9iK6rJPmthee5s6VJ1yGobBjVvL8efuvdOhGuo7JlJQlITUmVm%2FfEJPGfTkilb0QMZontfItq2xxkGCIlLWhgI9ruNlTcMM3ng9EGOqUB7Qkh6lgP8pJim1Yh1Le5YHyD6iZdaVTctDQZ2WlJYSFYf0Kso3Gdsz11g9Ph3bgt%2B9uHCqKRVlkXa0OCO1%2BYCmI6O%2F5YKGjygVFRGGRAeYYQoIVGp9%2Bnt2HcRZebePstKed1X7YOo7wbfnmrVC5Dsh7d3DSrp0GMI%2Fs83gliVAyoOyNzMA2UV6oe15H9Da9yLXDuGlF2%2FhNW%2BZxGIrZug0wy5gMR&X-Amz-Signature=3f053ce301154f8e7ccfedb4d2465878bc532d3553f1a24315818c015cd534ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJSHRDBA%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T040231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQLM5lS%2B2gY23HQd4HmTyQBJphC4mdHIAZ1rlubqf2bgIhAMTPhmbV3NnFdoeSBk9Ofh8MUQ0B5dyT%2Fu99GY%2BsDTb7Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwrUsrofW75xMBWtk0q3ANR56C0bCpixdJ05b1roYtMA%2FhFKCK9eGUv6Iqznf00d7HP4ZYgVcD2TJeICuHN2Sv2LoxAMc00ZmRAZ1dfGkm%2BFEgDFnznMyz9KgpWKd4482%2Bn8RuTKYUS9dUmlXs9VSh1Ji9gY8El%2BwQAShO66ha5f0k%2Ba1DOhaRdHhaK5qI9raUGBwO%2BjQACJ%2BVxAHgPx7wqJ5g4Kxudj01uCtgrXT8ztD%2FXojyQs7urtmheARoG3A96CmNdsFipOSxgMhYMP%2By94wlpAV70T1j5VfAA2GtOLFwxK6SCFQrrXSsdBRcAx1qg1q1T0vrSUIKe8VU8kzKWZr3dwhTLL%2FNZ1icereWKn802N06lYzz4i9d0BWDxLGGJjsdFD4aQTUtJ7pX7JVCjt5eJobDfFBRMQTW4GHbMT8fb8gLzjNx%2BrdIVOCdp0mbwoMU%2F6AAZw9J%2BQrPW6GRx7w7ngKa9Q2cSDc2laTRYaqFjn6ZgNsAicTY1IDNuZfByx728jw8C9gnBZl54tw2yKWdjjbu%2FDm0sEoccfKflJT4pjuM6WbX9QjXYQ58f9OOKp9NGvwdT6aN8S%2BjuiDev3jb2hHToCUq9xJb3sA8Yzpkhle4VMCAGVRHxHBup0F0wSatK0vzpDJIW%2BjDr5oPRBjqkATXr0few0tk%2FqBJ%2Bdxl%2BWuWQ7VONry1fpa6qv32ldjAkR0wuDYirEIdq7yeEyapman%2B%2FsHFr2J%2BY1HfglMsm0uLljjPHeNcMjbGrpiXauxY01d6Im9fbmC2d0vtWgLnNuqrVlQqCwX2ouWU8daEFF6zK%2BgM5pal1WR%2F0CyGVq1gzaAX7xcRGjVEMnPFyaA4v5m7zokFMSZY%2B74LOwYMNMrVFlIAV&X-Amz-Signature=bbe24d362d4c987f71f389527bdfe0ff417c4c8e7bc5dcd1b7cfad97ff2f7e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

