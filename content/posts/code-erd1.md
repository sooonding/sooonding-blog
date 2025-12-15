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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3V6Q66K%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T010823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDDheHzp8d3AUdOiGGjhCo11kEeMuv%2Bu8jivRzvFyFe2QIhAIy5QzogdsyWGg1M%2BqEIscaIOVvq5UVbF3LimbKgMbVKKv8DCD4QABoMNjM3NDIzMTgzODA1IgwNLCHtL6HtLnQtGcAq3APdJQCOY44EwvxUBvLEgh85iBHiyuxljhplnMWKDdMq%2FlFQtnyyW%2BqN4XBbRTfIagbnx84HHigK7OtxSGXns5u6FhqeP8mIsBL3ll7b4vInvbbZCn%2FVxkhRYq2O7Meqbx6SWhA2ibMA6xJK4aM4QlJ4NsZV5pD4PpCIlTWwxagTnvtJ6Ki3ELsZG8DJXpp1BY3bmteUVFomFPEENvb7GXHa2U%2B8gAHCaCm0OvaNY4TUOYDEskIKmGlB6Uh%2FW9SdTjrY9Ox3qW6SufPZPrVVFdjPvqSyWjK0J81uvc9LiAX%2BmAbJer8PuxmMJE07zSWuK9WomqabIqRlCYPJI0oSio%2Fe2DNYXvIjifcM87d5icOIghBg5UHH2TUHybSJnF2EZ0K8lcVRb9Z%2FACnaU2J4kgT%2BL%2BJZBWcic7Hdtk6T6wjzIEgRiK0%2BkdaxZc7JQUw%2FMkk%2BXHi5skXeM2k%2FqE9xmMJByx4lN2CA%2Bs5ILf2Z86hrvwlbPOQkz1k9TwvDOthieLBr%2F1RxwXVT7qsEUmxJjXJ9JRgIhvwKXvcIxj2uPMrgqYD2gFmb4ZtQp5vFif%2BM73q9tb02KpyYynTRQlqZLptb%2BLm1Vw0rL1A4VslCiOG7sjgdNmj%2FMrXPrlWegjCuy%2FzJBjqkATmK5dXfcGOvvRrXdX8mKZHbp59UKXqgFDh0u06uItsVmG2PVmFxvJRbEt6KSCP1Ya6y4ieo2DFDCCBMgDqxlaYU5D%2BmBP%2BrcR9RLd%2FD3l5isab0OlYpLNzhI69An3mJmzHV%2BvFewTX5nCqG0RKNLPrwKJoaswWaq5IW0Cskeh7sg%2FmS6Y2Kzq3P5h9fmYJzuIHzpu7g9iDqRCdxPpfyB4M%2B%2Bwoh&X-Amz-Signature=8b7c5bf6de4c26e65bdf22daa5cea4dd57f9fed8c19fb6860cecd388378006c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQEIJP2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T010823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYWyHVJaE%2B98zIyM%2FUS4y9ZAcITyos0FQIXcDJswzhOAiAHalRwJvqy%2BLwprIv%2BTiVU41n%2BtiWLZ07BbnkUG7Qzoyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMe4F50vKLBiAnUEm4KtwDKlYgfd4%2BiiUWkcdRTV8FsWElbVd%2FfnFp0HBi4vWakkpeV2PXkfiM36gOUQOVAkhO3ItAkRrLyHtDqU2Az8eJfWDi%2F%2B2%2FvS2r5fB4x19YUSOu76jPBT8YeyTlT8UooZz3FLyFZYcsjqzgLTC4pWMDYKQ%2FkmPTTpxHNMtueYAHrS9p%2FLc60K8DwuovNAgGCRsf%2FEhw%2FXvtqWRx%2Bk%2FdDDsSTrfQFkXxkcYbbAYAIpXCu0FNRnL9vOyYv3%2BgFsOq2OPy%2Faq15uCHsrNWbF32urRcr9koy843BMq7Fduz5Xz0rJCE32SoYX7wKCccEX1B4sjkS3zfO1QmRvtf7dc%2FBqU24h9azerBJlwiAr1JPaKszzFR9tphOjoY18mnIeDJL7zJfSIroJ1dVvBpQ4pArV7TWzVO3eaOtN036bKY%2B0xR7vBuJncgA1KIYke7ylXcggAv77F%2F1ZYGRNiuff%2FO7ly3Jr3ipkgHDq7pvXiqnY8hT3T6M%2Bla8uI4RVFI4ai7YrU7SSG%2FfJjxx%2BU%2B7LPSkFCdyaUhDXVrC%2FL4M4v3gE07Y442cNTs9TAUUG6mRBGdpb0dtsjbXoor8Ozm%2FxuoyCEKGDyAcx4dVw%2Bhj9SzsrBfPHtf%2BCmDdw9o7Z%2BsLdIwm8j8yQY6pgHk7OIctL0ttsHQ9nNPae8rxVUiALyio%2F0oYMsoWQqpmVFu2RPYHUk6M59fYQxywqQoGB8fUNe5619qaJi1Y6WmzKAyEa4l5zeIU388zUjDqY2K27Po%2BUs7CVkPStO6UDgYjuv9CN7pbZy6TPPO%2FpUyyhWSLaDeatn3wKkuJ1Hvc3jI7YmFieqWOKTwqgSspJHklGDSh74QdNcTaAgBnKgkzPQeqeJM&X-Amz-Signature=1c1a8c81a665619c219f750a13efd007fa4305676947a292766d1b1260ed8f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQEIJP2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T010823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYWyHVJaE%2B98zIyM%2FUS4y9ZAcITyos0FQIXcDJswzhOAiAHalRwJvqy%2BLwprIv%2BTiVU41n%2BtiWLZ07BbnkUG7Qzoyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMe4F50vKLBiAnUEm4KtwDKlYgfd4%2BiiUWkcdRTV8FsWElbVd%2FfnFp0HBi4vWakkpeV2PXkfiM36gOUQOVAkhO3ItAkRrLyHtDqU2Az8eJfWDi%2F%2B2%2FvS2r5fB4x19YUSOu76jPBT8YeyTlT8UooZz3FLyFZYcsjqzgLTC4pWMDYKQ%2FkmPTTpxHNMtueYAHrS9p%2FLc60K8DwuovNAgGCRsf%2FEhw%2FXvtqWRx%2Bk%2FdDDsSTrfQFkXxkcYbbAYAIpXCu0FNRnL9vOyYv3%2BgFsOq2OPy%2Faq15uCHsrNWbF32urRcr9koy843BMq7Fduz5Xz0rJCE32SoYX7wKCccEX1B4sjkS3zfO1QmRvtf7dc%2FBqU24h9azerBJlwiAr1JPaKszzFR9tphOjoY18mnIeDJL7zJfSIroJ1dVvBpQ4pArV7TWzVO3eaOtN036bKY%2B0xR7vBuJncgA1KIYke7ylXcggAv77F%2F1ZYGRNiuff%2FO7ly3Jr3ipkgHDq7pvXiqnY8hT3T6M%2Bla8uI4RVFI4ai7YrU7SSG%2FfJjxx%2BU%2B7LPSkFCdyaUhDXVrC%2FL4M4v3gE07Y442cNTs9TAUUG6mRBGdpb0dtsjbXoor8Ozm%2FxuoyCEKGDyAcx4dVw%2Bhj9SzsrBfPHtf%2BCmDdw9o7Z%2BsLdIwm8j8yQY6pgHk7OIctL0ttsHQ9nNPae8rxVUiALyio%2F0oYMsoWQqpmVFu2RPYHUk6M59fYQxywqQoGB8fUNe5619qaJi1Y6WmzKAyEa4l5zeIU388zUjDqY2K27Po%2BUs7CVkPStO6UDgYjuv9CN7pbZy6TPPO%2FpUyyhWSLaDeatn3wKkuJ1Hvc3jI7YmFieqWOKTwqgSspJHklGDSh74QdNcTaAgBnKgkzPQeqeJM&X-Amz-Signature=33db8e998ff692ba09a1ee2efaf5a25467bc82b9e6a74b2c34da72d8f34e7743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQEIJP2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T010823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYWyHVJaE%2B98zIyM%2FUS4y9ZAcITyos0FQIXcDJswzhOAiAHalRwJvqy%2BLwprIv%2BTiVU41n%2BtiWLZ07BbnkUG7Qzoyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMe4F50vKLBiAnUEm4KtwDKlYgfd4%2BiiUWkcdRTV8FsWElbVd%2FfnFp0HBi4vWakkpeV2PXkfiM36gOUQOVAkhO3ItAkRrLyHtDqU2Az8eJfWDi%2F%2B2%2FvS2r5fB4x19YUSOu76jPBT8YeyTlT8UooZz3FLyFZYcsjqzgLTC4pWMDYKQ%2FkmPTTpxHNMtueYAHrS9p%2FLc60K8DwuovNAgGCRsf%2FEhw%2FXvtqWRx%2Bk%2FdDDsSTrfQFkXxkcYbbAYAIpXCu0FNRnL9vOyYv3%2BgFsOq2OPy%2Faq15uCHsrNWbF32urRcr9koy843BMq7Fduz5Xz0rJCE32SoYX7wKCccEX1B4sjkS3zfO1QmRvtf7dc%2FBqU24h9azerBJlwiAr1JPaKszzFR9tphOjoY18mnIeDJL7zJfSIroJ1dVvBpQ4pArV7TWzVO3eaOtN036bKY%2B0xR7vBuJncgA1KIYke7ylXcggAv77F%2F1ZYGRNiuff%2FO7ly3Jr3ipkgHDq7pvXiqnY8hT3T6M%2Bla8uI4RVFI4ai7YrU7SSG%2FfJjxx%2BU%2B7LPSkFCdyaUhDXVrC%2FL4M4v3gE07Y442cNTs9TAUUG6mRBGdpb0dtsjbXoor8Ozm%2FxuoyCEKGDyAcx4dVw%2Bhj9SzsrBfPHtf%2BCmDdw9o7Z%2BsLdIwm8j8yQY6pgHk7OIctL0ttsHQ9nNPae8rxVUiALyio%2F0oYMsoWQqpmVFu2RPYHUk6M59fYQxywqQoGB8fUNe5619qaJi1Y6WmzKAyEa4l5zeIU388zUjDqY2K27Po%2BUs7CVkPStO6UDgYjuv9CN7pbZy6TPPO%2FpUyyhWSLaDeatn3wKkuJ1Hvc3jI7YmFieqWOKTwqgSspJHklGDSh74QdNcTaAgBnKgkzPQeqeJM&X-Amz-Signature=cc6747487da94f493d4fc3b57cbc7078b020264d0b1a404ea942844d5904ad25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQEIJP2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T010823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYWyHVJaE%2B98zIyM%2FUS4y9ZAcITyos0FQIXcDJswzhOAiAHalRwJvqy%2BLwprIv%2BTiVU41n%2BtiWLZ07BbnkUG7Qzoyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMe4F50vKLBiAnUEm4KtwDKlYgfd4%2BiiUWkcdRTV8FsWElbVd%2FfnFp0HBi4vWakkpeV2PXkfiM36gOUQOVAkhO3ItAkRrLyHtDqU2Az8eJfWDi%2F%2B2%2FvS2r5fB4x19YUSOu76jPBT8YeyTlT8UooZz3FLyFZYcsjqzgLTC4pWMDYKQ%2FkmPTTpxHNMtueYAHrS9p%2FLc60K8DwuovNAgGCRsf%2FEhw%2FXvtqWRx%2Bk%2FdDDsSTrfQFkXxkcYbbAYAIpXCu0FNRnL9vOyYv3%2BgFsOq2OPy%2Faq15uCHsrNWbF32urRcr9koy843BMq7Fduz5Xz0rJCE32SoYX7wKCccEX1B4sjkS3zfO1QmRvtf7dc%2FBqU24h9azerBJlwiAr1JPaKszzFR9tphOjoY18mnIeDJL7zJfSIroJ1dVvBpQ4pArV7TWzVO3eaOtN036bKY%2B0xR7vBuJncgA1KIYke7ylXcggAv77F%2F1ZYGRNiuff%2FO7ly3Jr3ipkgHDq7pvXiqnY8hT3T6M%2Bla8uI4RVFI4ai7YrU7SSG%2FfJjxx%2BU%2B7LPSkFCdyaUhDXVrC%2FL4M4v3gE07Y442cNTs9TAUUG6mRBGdpb0dtsjbXoor8Ozm%2FxuoyCEKGDyAcx4dVw%2Bhj9SzsrBfPHtf%2BCmDdw9o7Z%2BsLdIwm8j8yQY6pgHk7OIctL0ttsHQ9nNPae8rxVUiALyio%2F0oYMsoWQqpmVFu2RPYHUk6M59fYQxywqQoGB8fUNe5619qaJi1Y6WmzKAyEa4l5zeIU388zUjDqY2K27Po%2BUs7CVkPStO6UDgYjuv9CN7pbZy6TPPO%2FpUyyhWSLaDeatn3wKkuJ1Hvc3jI7YmFieqWOKTwqgSspJHklGDSh74QdNcTaAgBnKgkzPQeqeJM&X-Amz-Signature=1e48124c4a8a61dfded0f836fb6fcf31cda665eff384743c09288e04a0ffeed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEQEIJP2%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T010823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEYWyHVJaE%2B98zIyM%2FUS4y9ZAcITyos0FQIXcDJswzhOAiAHalRwJvqy%2BLwprIv%2BTiVU41n%2BtiWLZ07BbnkUG7Qzoyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMe4F50vKLBiAnUEm4KtwDKlYgfd4%2BiiUWkcdRTV8FsWElbVd%2FfnFp0HBi4vWakkpeV2PXkfiM36gOUQOVAkhO3ItAkRrLyHtDqU2Az8eJfWDi%2F%2B2%2FvS2r5fB4x19YUSOu76jPBT8YeyTlT8UooZz3FLyFZYcsjqzgLTC4pWMDYKQ%2FkmPTTpxHNMtueYAHrS9p%2FLc60K8DwuovNAgGCRsf%2FEhw%2FXvtqWRx%2Bk%2FdDDsSTrfQFkXxkcYbbAYAIpXCu0FNRnL9vOyYv3%2BgFsOq2OPy%2Faq15uCHsrNWbF32urRcr9koy843BMq7Fduz5Xz0rJCE32SoYX7wKCccEX1B4sjkS3zfO1QmRvtf7dc%2FBqU24h9azerBJlwiAr1JPaKszzFR9tphOjoY18mnIeDJL7zJfSIroJ1dVvBpQ4pArV7TWzVO3eaOtN036bKY%2B0xR7vBuJncgA1KIYke7ylXcggAv77F%2F1ZYGRNiuff%2FO7ly3Jr3ipkgHDq7pvXiqnY8hT3T6M%2Bla8uI4RVFI4ai7YrU7SSG%2FfJjxx%2BU%2B7LPSkFCdyaUhDXVrC%2FL4M4v3gE07Y442cNTs9TAUUG6mRBGdpb0dtsjbXoor8Ozm%2FxuoyCEKGDyAcx4dVw%2Bhj9SzsrBfPHtf%2BCmDdw9o7Z%2BsLdIwm8j8yQY6pgHk7OIctL0ttsHQ9nNPae8rxVUiALyio%2F0oYMsoWQqpmVFu2RPYHUk6M59fYQxywqQoGB8fUNe5619qaJi1Y6WmzKAyEa4l5zeIU388zUjDqY2K27Po%2BUs7CVkPStO6UDgYjuv9CN7pbZy6TPPO%2FpUyyhWSLaDeatn3wKkuJ1Hvc3jI7YmFieqWOKTwqgSspJHklGDSh74QdNcTaAgBnKgkzPQeqeJM&X-Amz-Signature=a43b406757c42a69fb8f507feeac1ffb5489caa61e8deb887fa0b01a913bf232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3V6Q66K%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T010823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDDheHzp8d3AUdOiGGjhCo11kEeMuv%2Bu8jivRzvFyFe2QIhAIy5QzogdsyWGg1M%2BqEIscaIOVvq5UVbF3LimbKgMbVKKv8DCD4QABoMNjM3NDIzMTgzODA1IgwNLCHtL6HtLnQtGcAq3APdJQCOY44EwvxUBvLEgh85iBHiyuxljhplnMWKDdMq%2FlFQtnyyW%2BqN4XBbRTfIagbnx84HHigK7OtxSGXns5u6FhqeP8mIsBL3ll7b4vInvbbZCn%2FVxkhRYq2O7Meqbx6SWhA2ibMA6xJK4aM4QlJ4NsZV5pD4PpCIlTWwxagTnvtJ6Ki3ELsZG8DJXpp1BY3bmteUVFomFPEENvb7GXHa2U%2B8gAHCaCm0OvaNY4TUOYDEskIKmGlB6Uh%2FW9SdTjrY9Ox3qW6SufPZPrVVFdjPvqSyWjK0J81uvc9LiAX%2BmAbJer8PuxmMJE07zSWuK9WomqabIqRlCYPJI0oSio%2Fe2DNYXvIjifcM87d5icOIghBg5UHH2TUHybSJnF2EZ0K8lcVRb9Z%2FACnaU2J4kgT%2BL%2BJZBWcic7Hdtk6T6wjzIEgRiK0%2BkdaxZc7JQUw%2FMkk%2BXHi5skXeM2k%2FqE9xmMJByx4lN2CA%2Bs5ILf2Z86hrvwlbPOQkz1k9TwvDOthieLBr%2F1RxwXVT7qsEUmxJjXJ9JRgIhvwKXvcIxj2uPMrgqYD2gFmb4ZtQp5vFif%2BM73q9tb02KpyYynTRQlqZLptb%2BLm1Vw0rL1A4VslCiOG7sjgdNmj%2FMrXPrlWegjCuy%2FzJBjqkATmK5dXfcGOvvRrXdX8mKZHbp59UKXqgFDh0u06uItsVmG2PVmFxvJRbEt6KSCP1Ya6y4ieo2DFDCCBMgDqxlaYU5D%2BmBP%2BrcR9RLd%2FD3l5isab0OlYpLNzhI69An3mJmzHV%2BvFewTX5nCqG0RKNLPrwKJoaswWaq5IW0Cskeh7sg%2FmS6Y2Kzq3P5h9fmYJzuIHzpu7g9iDqRCdxPpfyB4M%2B%2Bwoh&X-Amz-Signature=07f212b1a84f830511ffe3b92a5cf60f1d0aa11159f427bc0a7ea35bbc72435f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

