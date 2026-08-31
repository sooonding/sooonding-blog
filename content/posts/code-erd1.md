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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMHCONX%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWggeDm0bHGytqpSsNSrdtq2ij9FU%2BPuYclWDPFDKUzAiEAvtYtuatE41bDROj200BYFouwyMaqxjc%2FPFlBhDYHmFoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDcHbJ4odUIyxvyyCrcA6kPmE2TRHA%2Bqhb%2BOW8uMij0Bx19flyrmyb71mvq45GBNEaw1NQaciyovMBBVK%2FcMH8r88IqUfHffYvR%2FHsCHf0ii6M%2FfCYGPJfNoDULNTMzmfdK8evinDVSbXYio6%2F1hTEnE8mjNvjwAg9GTGXNC2tMBDRMqS7XxBPKflzSwLF%2BLf0TT0hcESoDK8II%2Fw%2FWpXwt84Q6VjSCJqR9qeeI4G32M%2BKiyUdn%2BoJTHLfQkUS1jBq6Kh4lKRZ14e23dYoMPXWk8Rq7XmhpZLzhrTPfW%2BEQgHUs3RqklwwxDAGxrnAi6PWWNHreD48Kff%2F8mtl9wN8A2%2BCkRIOlh%2BRGMHZxaS38kX8RDLIVRLIsNTuM5lRcHQuc8ms2OcrH%2FJqxBne37J4assFuC4qzv64seAh30qOcWvxRw9F5vk%2FB2LtjsLSCX%2F4UUf9iiPOC4gV88yaT7q%2F5sLqf5%2FxuycqrsQJ7rNVaXW%2F6clDSzidEqMi7HaGgFZm%2FCeZ9pl0%2Bdhjgd1zKhUvfWxPcAU3VGJCecD1WMNBQ9tr25g4PBEh3Z3Qc6ic2sqrsQiWtsw4fq2dVVR5EpZGwoQB8J39CfL03mD2IR6cMJVgJRpOa4bW0keD4eI614CBoDNYUkru7Ao1BMJbd09QGOqUBrYAnrqL1xge6EKDNamP0CIXOQCY%2FwObuQWYx3uelfbO%2Fbo12C9HCa0HXD68QQQBuID4Vb88gP2DDF6Zc4TWo9606HK2K2VsyD1hQ5BS2UKnDII3%2By35p2lROcL4mXIwnfuTESTabfGVutWAksZLQtcazvYnDnakv5Fj16QH6VeTlKfwJglU5CXUTE5OVF7V1CBb5dkwjN32I7dPgW4UbMUqIuoZY&X-Amz-Signature=a3ae2af992b70e2049f8c07a512474d569cb3c1efce8cc6ce903bd12cd36e2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFJWMOK%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwJj46gkqi0zcQDksm%2F76k1jCVHHiWl%2FiA9NE9ptuPyAiBFtJvHhu8CltvMpx3E4pi3yhFnRoUCk5HRJUQbsyoAyiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8mHP6mj9k5fsjmvjKtwDtmJeSTPNXKRNYZ1XIHR4qJPlU%2FOy%2FlaYTIjxWy0Pbx%2BYg51Dg3v7JyCfTCeyIPuIRdyqPF2RDDg%2FezVzeJTmwbIbL9XZUO1HacyGYBwX9WaCjGLjSzHAfd3t3QUPRGxJcBG9sA0OtoUP3RVwVGstPdiGhmu0JKYiwgeN17vsgsox9xPoX3UAqMdLlO3UCu2u%2Bhj9GQbeTgizTz4auzHyMrZ9fusl396nkAZ0ITLa%2F98ZYppYe16Rq4HT2Q4IT0eG6w2Yv13ezSliVNMurYafAdyPMESQryibnyP4dKcEel67P3a8T%2FP6V%2FJ%2BkfYEJXonIjwmYataaJUKrPc0zbkpY8CI70j0BEjcACeyWmx9R8s4NRU8%2BfSciVZxEKbFoP7JNzWw%2BTkJ1j3k15Jrs53PYh%2B3CoDXtokUBdYS9gp1RBu0OcL1Rmx7GHFlEpt88ssbf0NYJeyciNXckuJOoOqKzbYQWLtWwjW4o0ZPGkWRNNOdDPsjwEksE9o1jVlwp1MVx3dVYOSJbJE9KhYA9%2BmoXIRjpEfQdNDj77KlkPSbo8j3tTiLvPy%2B7%2BjcbVrJFstdtbM2wSEnrZK5mVgsKjWlOMurNERf9%2BDGJ2yZ9GVInzRu3%2BTwE2FnDD8swvQw4N7T1AY6pgGYEIz1YSrcNd9mcEgoxGFhhYR1MnZxYfZ7DbE1%2FUJ%2BhTRw0qjHVlzjyApns2xH%2Fs8sqrnjZ38ugrhj%2Fb2%2BhMVciy5E9IUKiuIVKYGnAE99x2%2FkXQaactC2o2TqEBmI840SsKxTPI7xIjmzZYR5wdA%2BbvjLi0DULEGWhp6S9g0ogLgAZhHFP6q0aQWB%2FHU1NDVyPxwnnOH2mZsw646hmuHeLqql7IOY&X-Amz-Signature=64794ab63247f65e83cea6486ec6d8781dccf7a8c8836145e0761b6f102f244d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFJWMOK%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwJj46gkqi0zcQDksm%2F76k1jCVHHiWl%2FiA9NE9ptuPyAiBFtJvHhu8CltvMpx3E4pi3yhFnRoUCk5HRJUQbsyoAyiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8mHP6mj9k5fsjmvjKtwDtmJeSTPNXKRNYZ1XIHR4qJPlU%2FOy%2FlaYTIjxWy0Pbx%2BYg51Dg3v7JyCfTCeyIPuIRdyqPF2RDDg%2FezVzeJTmwbIbL9XZUO1HacyGYBwX9WaCjGLjSzHAfd3t3QUPRGxJcBG9sA0OtoUP3RVwVGstPdiGhmu0JKYiwgeN17vsgsox9xPoX3UAqMdLlO3UCu2u%2Bhj9GQbeTgizTz4auzHyMrZ9fusl396nkAZ0ITLa%2F98ZYppYe16Rq4HT2Q4IT0eG6w2Yv13ezSliVNMurYafAdyPMESQryibnyP4dKcEel67P3a8T%2FP6V%2FJ%2BkfYEJXonIjwmYataaJUKrPc0zbkpY8CI70j0BEjcACeyWmx9R8s4NRU8%2BfSciVZxEKbFoP7JNzWw%2BTkJ1j3k15Jrs53PYh%2B3CoDXtokUBdYS9gp1RBu0OcL1Rmx7GHFlEpt88ssbf0NYJeyciNXckuJOoOqKzbYQWLtWwjW4o0ZPGkWRNNOdDPsjwEksE9o1jVlwp1MVx3dVYOSJbJE9KhYA9%2BmoXIRjpEfQdNDj77KlkPSbo8j3tTiLvPy%2B7%2BjcbVrJFstdtbM2wSEnrZK5mVgsKjWlOMurNERf9%2BDGJ2yZ9GVInzRu3%2BTwE2FnDD8swvQw4N7T1AY6pgGYEIz1YSrcNd9mcEgoxGFhhYR1MnZxYfZ7DbE1%2FUJ%2BhTRw0qjHVlzjyApns2xH%2Fs8sqrnjZ38ugrhj%2Fb2%2BhMVciy5E9IUKiuIVKYGnAE99x2%2FkXQaactC2o2TqEBmI840SsKxTPI7xIjmzZYR5wdA%2BbvjLi0DULEGWhp6S9g0ogLgAZhHFP6q0aQWB%2FHU1NDVyPxwnnOH2mZsw646hmuHeLqql7IOY&X-Amz-Signature=a0e3c234b6947bc301ce5dd3867ee41faa89dbfe6ea14d77329a95e6b532ceec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFJWMOK%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwJj46gkqi0zcQDksm%2F76k1jCVHHiWl%2FiA9NE9ptuPyAiBFtJvHhu8CltvMpx3E4pi3yhFnRoUCk5HRJUQbsyoAyiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8mHP6mj9k5fsjmvjKtwDtmJeSTPNXKRNYZ1XIHR4qJPlU%2FOy%2FlaYTIjxWy0Pbx%2BYg51Dg3v7JyCfTCeyIPuIRdyqPF2RDDg%2FezVzeJTmwbIbL9XZUO1HacyGYBwX9WaCjGLjSzHAfd3t3QUPRGxJcBG9sA0OtoUP3RVwVGstPdiGhmu0JKYiwgeN17vsgsox9xPoX3UAqMdLlO3UCu2u%2Bhj9GQbeTgizTz4auzHyMrZ9fusl396nkAZ0ITLa%2F98ZYppYe16Rq4HT2Q4IT0eG6w2Yv13ezSliVNMurYafAdyPMESQryibnyP4dKcEel67P3a8T%2FP6V%2FJ%2BkfYEJXonIjwmYataaJUKrPc0zbkpY8CI70j0BEjcACeyWmx9R8s4NRU8%2BfSciVZxEKbFoP7JNzWw%2BTkJ1j3k15Jrs53PYh%2B3CoDXtokUBdYS9gp1RBu0OcL1Rmx7GHFlEpt88ssbf0NYJeyciNXckuJOoOqKzbYQWLtWwjW4o0ZPGkWRNNOdDPsjwEksE9o1jVlwp1MVx3dVYOSJbJE9KhYA9%2BmoXIRjpEfQdNDj77KlkPSbo8j3tTiLvPy%2B7%2BjcbVrJFstdtbM2wSEnrZK5mVgsKjWlOMurNERf9%2BDGJ2yZ9GVInzRu3%2BTwE2FnDD8swvQw4N7T1AY6pgGYEIz1YSrcNd9mcEgoxGFhhYR1MnZxYfZ7DbE1%2FUJ%2BhTRw0qjHVlzjyApns2xH%2Fs8sqrnjZ38ugrhj%2Fb2%2BhMVciy5E9IUKiuIVKYGnAE99x2%2FkXQaactC2o2TqEBmI840SsKxTPI7xIjmzZYR5wdA%2BbvjLi0DULEGWhp6S9g0ogLgAZhHFP6q0aQWB%2FHU1NDVyPxwnnOH2mZsw646hmuHeLqql7IOY&X-Amz-Signature=f973d0a682d4f358c7d10ae71fdf3158fb609c3679a5cc0c70f791696bb67515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFJWMOK%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwJj46gkqi0zcQDksm%2F76k1jCVHHiWl%2FiA9NE9ptuPyAiBFtJvHhu8CltvMpx3E4pi3yhFnRoUCk5HRJUQbsyoAyiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8mHP6mj9k5fsjmvjKtwDtmJeSTPNXKRNYZ1XIHR4qJPlU%2FOy%2FlaYTIjxWy0Pbx%2BYg51Dg3v7JyCfTCeyIPuIRdyqPF2RDDg%2FezVzeJTmwbIbL9XZUO1HacyGYBwX9WaCjGLjSzHAfd3t3QUPRGxJcBG9sA0OtoUP3RVwVGstPdiGhmu0JKYiwgeN17vsgsox9xPoX3UAqMdLlO3UCu2u%2Bhj9GQbeTgizTz4auzHyMrZ9fusl396nkAZ0ITLa%2F98ZYppYe16Rq4HT2Q4IT0eG6w2Yv13ezSliVNMurYafAdyPMESQryibnyP4dKcEel67P3a8T%2FP6V%2FJ%2BkfYEJXonIjwmYataaJUKrPc0zbkpY8CI70j0BEjcACeyWmx9R8s4NRU8%2BfSciVZxEKbFoP7JNzWw%2BTkJ1j3k15Jrs53PYh%2B3CoDXtokUBdYS9gp1RBu0OcL1Rmx7GHFlEpt88ssbf0NYJeyciNXckuJOoOqKzbYQWLtWwjW4o0ZPGkWRNNOdDPsjwEksE9o1jVlwp1MVx3dVYOSJbJE9KhYA9%2BmoXIRjpEfQdNDj77KlkPSbo8j3tTiLvPy%2B7%2BjcbVrJFstdtbM2wSEnrZK5mVgsKjWlOMurNERf9%2BDGJ2yZ9GVInzRu3%2BTwE2FnDD8swvQw4N7T1AY6pgGYEIz1YSrcNd9mcEgoxGFhhYR1MnZxYfZ7DbE1%2FUJ%2BhTRw0qjHVlzjyApns2xH%2Fs8sqrnjZ38ugrhj%2Fb2%2BhMVciy5E9IUKiuIVKYGnAE99x2%2FkXQaactC2o2TqEBmI840SsKxTPI7xIjmzZYR5wdA%2BbvjLi0DULEGWhp6S9g0ogLgAZhHFP6q0aQWB%2FHU1NDVyPxwnnOH2mZsw646hmuHeLqql7IOY&X-Amz-Signature=7718425806a14cd414602a7dd32c655dcdd01e75645261f269e98a7e9bb1aae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HFJWMOK%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwJj46gkqi0zcQDksm%2F76k1jCVHHiWl%2FiA9NE9ptuPyAiBFtJvHhu8CltvMpx3E4pi3yhFnRoUCk5HRJUQbsyoAyiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8mHP6mj9k5fsjmvjKtwDtmJeSTPNXKRNYZ1XIHR4qJPlU%2FOy%2FlaYTIjxWy0Pbx%2BYg51Dg3v7JyCfTCeyIPuIRdyqPF2RDDg%2FezVzeJTmwbIbL9XZUO1HacyGYBwX9WaCjGLjSzHAfd3t3QUPRGxJcBG9sA0OtoUP3RVwVGstPdiGhmu0JKYiwgeN17vsgsox9xPoX3UAqMdLlO3UCu2u%2Bhj9GQbeTgizTz4auzHyMrZ9fusl396nkAZ0ITLa%2F98ZYppYe16Rq4HT2Q4IT0eG6w2Yv13ezSliVNMurYafAdyPMESQryibnyP4dKcEel67P3a8T%2FP6V%2FJ%2BkfYEJXonIjwmYataaJUKrPc0zbkpY8CI70j0BEjcACeyWmx9R8s4NRU8%2BfSciVZxEKbFoP7JNzWw%2BTkJ1j3k15Jrs53PYh%2B3CoDXtokUBdYS9gp1RBu0OcL1Rmx7GHFlEpt88ssbf0NYJeyciNXckuJOoOqKzbYQWLtWwjW4o0ZPGkWRNNOdDPsjwEksE9o1jVlwp1MVx3dVYOSJbJE9KhYA9%2BmoXIRjpEfQdNDj77KlkPSbo8j3tTiLvPy%2B7%2BjcbVrJFstdtbM2wSEnrZK5mVgsKjWlOMurNERf9%2BDGJ2yZ9GVInzRu3%2BTwE2FnDD8swvQw4N7T1AY6pgGYEIz1YSrcNd9mcEgoxGFhhYR1MnZxYfZ7DbE1%2FUJ%2BhTRw0qjHVlzjyApns2xH%2Fs8sqrnjZ38ugrhj%2Fb2%2BhMVciy5E9IUKiuIVKYGnAE99x2%2FkXQaactC2o2TqEBmI840SsKxTPI7xIjmzZYR5wdA%2BbvjLi0DULEGWhp6S9g0ogLgAZhHFP6q0aQWB%2FHU1NDVyPxwnnOH2mZsw646hmuHeLqql7IOY&X-Amz-Signature=0c0550b281404e5d091a4f26bdeb1633f14892d23419208e1c9eaf104fc201cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMHCONX%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T035947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWggeDm0bHGytqpSsNSrdtq2ij9FU%2BPuYclWDPFDKUzAiEAvtYtuatE41bDROj200BYFouwyMaqxjc%2FPFlBhDYHmFoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDcHbJ4odUIyxvyyCrcA6kPmE2TRHA%2Bqhb%2BOW8uMij0Bx19flyrmyb71mvq45GBNEaw1NQaciyovMBBVK%2FcMH8r88IqUfHffYvR%2FHsCHf0ii6M%2FfCYGPJfNoDULNTMzmfdK8evinDVSbXYio6%2F1hTEnE8mjNvjwAg9GTGXNC2tMBDRMqS7XxBPKflzSwLF%2BLf0TT0hcESoDK8II%2Fw%2FWpXwt84Q6VjSCJqR9qeeI4G32M%2BKiyUdn%2BoJTHLfQkUS1jBq6Kh4lKRZ14e23dYoMPXWk8Rq7XmhpZLzhrTPfW%2BEQgHUs3RqklwwxDAGxrnAi6PWWNHreD48Kff%2F8mtl9wN8A2%2BCkRIOlh%2BRGMHZxaS38kX8RDLIVRLIsNTuM5lRcHQuc8ms2OcrH%2FJqxBne37J4assFuC4qzv64seAh30qOcWvxRw9F5vk%2FB2LtjsLSCX%2F4UUf9iiPOC4gV88yaT7q%2F5sLqf5%2FxuycqrsQJ7rNVaXW%2F6clDSzidEqMi7HaGgFZm%2FCeZ9pl0%2Bdhjgd1zKhUvfWxPcAU3VGJCecD1WMNBQ9tr25g4PBEh3Z3Qc6ic2sqrsQiWtsw4fq2dVVR5EpZGwoQB8J39CfL03mD2IR6cMJVgJRpOa4bW0keD4eI614CBoDNYUkru7Ao1BMJbd09QGOqUBrYAnrqL1xge6EKDNamP0CIXOQCY%2FwObuQWYx3uelfbO%2Fbo12C9HCa0HXD68QQQBuID4Vb88gP2DDF6Zc4TWo9606HK2K2VsyD1hQ5BS2UKnDII3%2By35p2lROcL4mXIwnfuTESTabfGVutWAksZLQtcazvYnDnakv5Fj16QH6VeTlKfwJglU5CXUTE5OVF7V1CBb5dkwjN32I7dPgW4UbMUqIuoZY&X-Amz-Signature=8a67cc7de9dbc1a1276898667a5e91eb7aaf3a491c6136ff4f79a783a9655bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

