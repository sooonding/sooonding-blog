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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLD7BJGD%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD835TbDdoQbu42hQ3xTXPtjGTC%2BeQK0jiByekjKz%2Fo0gIgcTaNV2ffZ0ShczcMeyoxn61mRNzVDXuZlse46ltbypQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAI6fLOtxqJqWr16MCrcA8%2BzTkkEjN%2B16Oc4xZM5LxQlnY%2B1eqbNnzmH6yP9aN0IYkPaynoRysDOMdEOXP%2BGKJnHeMm3huJLy5LFcS1zU7IYZicfEdsFI2mQclIdDGTBdblmIkvADOSO51%2FIce5vQV6qBFckqcvX1w6OJp8wQmIaozuoXfvhj83KCqRrZlf50l67iE9PCaQBlDRQUT7Zwbejfc%2FjKl6fycDt9jM9NXGdqEhwBZvC%2BQH8XirawdCCraSjLCxu4GSFgAqaY99Oj5NBzdk7F05nsJ%2B3%2B2rWcbcVf1Jm0XRJS0NTlbbhazw%2BGEVLKRv9md4i%2Bv2lLLQI6URqo25wizbty3NMqYGi4zmbwWGTY3raruLmbzFczcZdXdwQMKurAv%2FV3AimcXI9eUfQ7L4S24gDzC%2B1aXINVynx12Vo9%2F%2F%2FDfHUhOkn4%2BCfrcJn3vLuMdEy23o7vrav%2FmCob00kUgVTYUuGWUuxX6yfBGCtU1zChdBURV%2Fc5GTH4nTRQe3tUq1JMnzMptn02APk%2BwZfoyci2kJXUc%2BUoHVh9Rtfji%2F1xlrWOrTbsbnlGM%2B1IeAlCKa3n%2Fb25Lp%2BxZLuSr1mgGfACIymJcNx5trHjYKPEUIaqX9hu%2BRliCkGodpEhum9%2B6kX4MDwMMfi388GOqUBvOTr3CdEFcPjspjQaNRcx%2Fkaz5PT8szhY%2F8K4A7up1zBFFOyNddVuafp7D0ACJBpSHhy%2FZV1033KXxthp7VvN2ArcCA5bkAI8uZ8Xg1NE7vPTUUIFeIisxM1hjBBTMukolA5n0%2B61ka4SZtVM8rGlvSQg7SXL%2BfecY4WXfN6MIMAFR8VgjywfJMCVy7%2BikxHzS0MV9HNYiAQ3CAGzwBzpfckgGzM&X-Amz-Signature=7d99e5443ca817cd8247e4003c4ac044afd550ff82cd85d0e0f7937e343649d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D2NAFX%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVQLbSbTHYX0XnXlmrI7JDs6ercYJFOgIAQquR3iKaAIgdPM%2Bp96hD8INPZpSxiTb9SXkBCY8MrzKgAFNspyGiIAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FjlBfWcNbybvuAfyrcA156jw2y2PRRH892pee5MTGnvmflUe265XVqcaWUc9ZuWYT%2B8kEBvUiC%2Bq%2Fq3aqW4ZR9U%2BXtkszK6Blqt8MHGdGSprY%2B%2FzqYZAQidODpAyJt24W150euZA%2FbYm%2BiyZfOYhcniV7tf80EsuopXT8DXTl8AXYJeDlzp5TFDTr7QENH4axqiFF4ELBVwCkAJNP0VNg97u1log5WweAdxvFrikomU2sgUVg537g646l1eBMPRq5ZM7C1uGWNVNvzBhtzQ2z4CwHCwckraB0Dhg7eJn7dgF4k4DxZH3rmUzXOS9XVN2pGO%2B0zcrBuIf7yJolbZAUkebdjjDWdaKKJh3UppJogq1p1D5SGFcPSY7gYjMH0ZtMUhy8SJJrmHAvP9yTmRwCtAm8zduYXNDD2KI4AlwY5Kq9UsZjdRnEvvFo7CY2hFzCAOnM3M%2BQiazTZjoMu8FlGKGxOf4pkCoU7H73EVoZ0oT%2BuIPef%2Byf2tiRA%2BAoVCrT2CuuzB81bnIT7ok1LaRvpxsuKpXcApUHvUJuwfHbff4nUIYPnoNzyKmqSx27nJwvg8g3Q46%2BQBuHEUyKYJ91ZCSCqAXQ1BD5RDh8TbL2C9Nrc3nO1R%2FAOgsNYZtQmMd7YGBlWVxwDvuQFMOPg388GOqUBqum37ihhRFoblC04OOkn8%2BpA%2F%2BQHj4k4%2FeoZAoKhNrbwJISu8l4avVwzusje1NmbdQyfK9JLujj4KRMJTFA4f0Rlx6lpTRPxbSeMWr37bIwl3y7ZTK102sUgzul0oAz%2BVIlLHCeD%2FGt9yG9vSaePpSodOc4V7CwPpZkOu1eEzNsO0JDwytQBbTlSnvifUCJqniAJ97q74AppTfggf8qsjsPN4H5m&X-Amz-Signature=8f47ecddb7aaa147b7492f20ecbe48cf0a95037e3f0310e0da741a8dee078150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D2NAFX%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVQLbSbTHYX0XnXlmrI7JDs6ercYJFOgIAQquR3iKaAIgdPM%2Bp96hD8INPZpSxiTb9SXkBCY8MrzKgAFNspyGiIAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FjlBfWcNbybvuAfyrcA156jw2y2PRRH892pee5MTGnvmflUe265XVqcaWUc9ZuWYT%2B8kEBvUiC%2Bq%2Fq3aqW4ZR9U%2BXtkszK6Blqt8MHGdGSprY%2B%2FzqYZAQidODpAyJt24W150euZA%2FbYm%2BiyZfOYhcniV7tf80EsuopXT8DXTl8AXYJeDlzp5TFDTr7QENH4axqiFF4ELBVwCkAJNP0VNg97u1log5WweAdxvFrikomU2sgUVg537g646l1eBMPRq5ZM7C1uGWNVNvzBhtzQ2z4CwHCwckraB0Dhg7eJn7dgF4k4DxZH3rmUzXOS9XVN2pGO%2B0zcrBuIf7yJolbZAUkebdjjDWdaKKJh3UppJogq1p1D5SGFcPSY7gYjMH0ZtMUhy8SJJrmHAvP9yTmRwCtAm8zduYXNDD2KI4AlwY5Kq9UsZjdRnEvvFo7CY2hFzCAOnM3M%2BQiazTZjoMu8FlGKGxOf4pkCoU7H73EVoZ0oT%2BuIPef%2Byf2tiRA%2BAoVCrT2CuuzB81bnIT7ok1LaRvpxsuKpXcApUHvUJuwfHbff4nUIYPnoNzyKmqSx27nJwvg8g3Q46%2BQBuHEUyKYJ91ZCSCqAXQ1BD5RDh8TbL2C9Nrc3nO1R%2FAOgsNYZtQmMd7YGBlWVxwDvuQFMOPg388GOqUBqum37ihhRFoblC04OOkn8%2BpA%2F%2BQHj4k4%2FeoZAoKhNrbwJISu8l4avVwzusje1NmbdQyfK9JLujj4KRMJTFA4f0Rlx6lpTRPxbSeMWr37bIwl3y7ZTK102sUgzul0oAz%2BVIlLHCeD%2FGt9yG9vSaePpSodOc4V7CwPpZkOu1eEzNsO0JDwytQBbTlSnvifUCJqniAJ97q74AppTfggf8qsjsPN4H5m&X-Amz-Signature=5d0fca234a6091a6747a414815daee37b9805090ff4255ce2379e93157f480f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D2NAFX%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVQLbSbTHYX0XnXlmrI7JDs6ercYJFOgIAQquR3iKaAIgdPM%2Bp96hD8INPZpSxiTb9SXkBCY8MrzKgAFNspyGiIAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FjlBfWcNbybvuAfyrcA156jw2y2PRRH892pee5MTGnvmflUe265XVqcaWUc9ZuWYT%2B8kEBvUiC%2Bq%2Fq3aqW4ZR9U%2BXtkszK6Blqt8MHGdGSprY%2B%2FzqYZAQidODpAyJt24W150euZA%2FbYm%2BiyZfOYhcniV7tf80EsuopXT8DXTl8AXYJeDlzp5TFDTr7QENH4axqiFF4ELBVwCkAJNP0VNg97u1log5WweAdxvFrikomU2sgUVg537g646l1eBMPRq5ZM7C1uGWNVNvzBhtzQ2z4CwHCwckraB0Dhg7eJn7dgF4k4DxZH3rmUzXOS9XVN2pGO%2B0zcrBuIf7yJolbZAUkebdjjDWdaKKJh3UppJogq1p1D5SGFcPSY7gYjMH0ZtMUhy8SJJrmHAvP9yTmRwCtAm8zduYXNDD2KI4AlwY5Kq9UsZjdRnEvvFo7CY2hFzCAOnM3M%2BQiazTZjoMu8FlGKGxOf4pkCoU7H73EVoZ0oT%2BuIPef%2Byf2tiRA%2BAoVCrT2CuuzB81bnIT7ok1LaRvpxsuKpXcApUHvUJuwfHbff4nUIYPnoNzyKmqSx27nJwvg8g3Q46%2BQBuHEUyKYJ91ZCSCqAXQ1BD5RDh8TbL2C9Nrc3nO1R%2FAOgsNYZtQmMd7YGBlWVxwDvuQFMOPg388GOqUBqum37ihhRFoblC04OOkn8%2BpA%2F%2BQHj4k4%2FeoZAoKhNrbwJISu8l4avVwzusje1NmbdQyfK9JLujj4KRMJTFA4f0Rlx6lpTRPxbSeMWr37bIwl3y7ZTK102sUgzul0oAz%2BVIlLHCeD%2FGt9yG9vSaePpSodOc4V7CwPpZkOu1eEzNsO0JDwytQBbTlSnvifUCJqniAJ97q74AppTfggf8qsjsPN4H5m&X-Amz-Signature=580cdb8d21521e0f3f6212fca60f914077eb234d87ac43c6d8d9d1be72a47294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D2NAFX%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVQLbSbTHYX0XnXlmrI7JDs6ercYJFOgIAQquR3iKaAIgdPM%2Bp96hD8INPZpSxiTb9SXkBCY8MrzKgAFNspyGiIAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FjlBfWcNbybvuAfyrcA156jw2y2PRRH892pee5MTGnvmflUe265XVqcaWUc9ZuWYT%2B8kEBvUiC%2Bq%2Fq3aqW4ZR9U%2BXtkszK6Blqt8MHGdGSprY%2B%2FzqYZAQidODpAyJt24W150euZA%2FbYm%2BiyZfOYhcniV7tf80EsuopXT8DXTl8AXYJeDlzp5TFDTr7QENH4axqiFF4ELBVwCkAJNP0VNg97u1log5WweAdxvFrikomU2sgUVg537g646l1eBMPRq5ZM7C1uGWNVNvzBhtzQ2z4CwHCwckraB0Dhg7eJn7dgF4k4DxZH3rmUzXOS9XVN2pGO%2B0zcrBuIf7yJolbZAUkebdjjDWdaKKJh3UppJogq1p1D5SGFcPSY7gYjMH0ZtMUhy8SJJrmHAvP9yTmRwCtAm8zduYXNDD2KI4AlwY5Kq9UsZjdRnEvvFo7CY2hFzCAOnM3M%2BQiazTZjoMu8FlGKGxOf4pkCoU7H73EVoZ0oT%2BuIPef%2Byf2tiRA%2BAoVCrT2CuuzB81bnIT7ok1LaRvpxsuKpXcApUHvUJuwfHbff4nUIYPnoNzyKmqSx27nJwvg8g3Q46%2BQBuHEUyKYJ91ZCSCqAXQ1BD5RDh8TbL2C9Nrc3nO1R%2FAOgsNYZtQmMd7YGBlWVxwDvuQFMOPg388GOqUBqum37ihhRFoblC04OOkn8%2BpA%2F%2BQHj4k4%2FeoZAoKhNrbwJISu8l4avVwzusje1NmbdQyfK9JLujj4KRMJTFA4f0Rlx6lpTRPxbSeMWr37bIwl3y7ZTK102sUgzul0oAz%2BVIlLHCeD%2FGt9yG9vSaePpSodOc4V7CwPpZkOu1eEzNsO0JDwytQBbTlSnvifUCJqniAJ97q74AppTfggf8qsjsPN4H5m&X-Amz-Signature=da6a135d619975c452534a7c8ed75f9827d3de47a900532220ca02365f7e5883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D2NAFX%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNVQLbSbTHYX0XnXlmrI7JDs6ercYJFOgIAQquR3iKaAIgdPM%2Bp96hD8INPZpSxiTb9SXkBCY8MrzKgAFNspyGiIAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDM%2FjlBfWcNbybvuAfyrcA156jw2y2PRRH892pee5MTGnvmflUe265XVqcaWUc9ZuWYT%2B8kEBvUiC%2Bq%2Fq3aqW4ZR9U%2BXtkszK6Blqt8MHGdGSprY%2B%2FzqYZAQidODpAyJt24W150euZA%2FbYm%2BiyZfOYhcniV7tf80EsuopXT8DXTl8AXYJeDlzp5TFDTr7QENH4axqiFF4ELBVwCkAJNP0VNg97u1log5WweAdxvFrikomU2sgUVg537g646l1eBMPRq5ZM7C1uGWNVNvzBhtzQ2z4CwHCwckraB0Dhg7eJn7dgF4k4DxZH3rmUzXOS9XVN2pGO%2B0zcrBuIf7yJolbZAUkebdjjDWdaKKJh3UppJogq1p1D5SGFcPSY7gYjMH0ZtMUhy8SJJrmHAvP9yTmRwCtAm8zduYXNDD2KI4AlwY5Kq9UsZjdRnEvvFo7CY2hFzCAOnM3M%2BQiazTZjoMu8FlGKGxOf4pkCoU7H73EVoZ0oT%2BuIPef%2Byf2tiRA%2BAoVCrT2CuuzB81bnIT7ok1LaRvpxsuKpXcApUHvUJuwfHbff4nUIYPnoNzyKmqSx27nJwvg8g3Q46%2BQBuHEUyKYJ91ZCSCqAXQ1BD5RDh8TbL2C9Nrc3nO1R%2FAOgsNYZtQmMd7YGBlWVxwDvuQFMOPg388GOqUBqum37ihhRFoblC04OOkn8%2BpA%2F%2BQHj4k4%2FeoZAoKhNrbwJISu8l4avVwzusje1NmbdQyfK9JLujj4KRMJTFA4f0Rlx6lpTRPxbSeMWr37bIwl3y7ZTK102sUgzul0oAz%2BVIlLHCeD%2FGt9yG9vSaePpSodOc4V7CwPpZkOu1eEzNsO0JDwytQBbTlSnvifUCJqniAJ97q74AppTfggf8qsjsPN4H5m&X-Amz-Signature=636aecf950cb624eadbddb39c17e2fbd009f2674016480ecf7b24e95ffd6123b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLD7BJGD%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD835TbDdoQbu42hQ3xTXPtjGTC%2BeQK0jiByekjKz%2Fo0gIgcTaNV2ffZ0ShczcMeyoxn61mRNzVDXuZlse46ltbypQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAI6fLOtxqJqWr16MCrcA8%2BzTkkEjN%2B16Oc4xZM5LxQlnY%2B1eqbNnzmH6yP9aN0IYkPaynoRysDOMdEOXP%2BGKJnHeMm3huJLy5LFcS1zU7IYZicfEdsFI2mQclIdDGTBdblmIkvADOSO51%2FIce5vQV6qBFckqcvX1w6OJp8wQmIaozuoXfvhj83KCqRrZlf50l67iE9PCaQBlDRQUT7Zwbejfc%2FjKl6fycDt9jM9NXGdqEhwBZvC%2BQH8XirawdCCraSjLCxu4GSFgAqaY99Oj5NBzdk7F05nsJ%2B3%2B2rWcbcVf1Jm0XRJS0NTlbbhazw%2BGEVLKRv9md4i%2Bv2lLLQI6URqo25wizbty3NMqYGi4zmbwWGTY3raruLmbzFczcZdXdwQMKurAv%2FV3AimcXI9eUfQ7L4S24gDzC%2B1aXINVynx12Vo9%2F%2F%2FDfHUhOkn4%2BCfrcJn3vLuMdEy23o7vrav%2FmCob00kUgVTYUuGWUuxX6yfBGCtU1zChdBURV%2Fc5GTH4nTRQe3tUq1JMnzMptn02APk%2BwZfoyci2kJXUc%2BUoHVh9Rtfji%2F1xlrWOrTbsbnlGM%2B1IeAlCKa3n%2Fb25Lp%2BxZLuSr1mgGfACIymJcNx5trHjYKPEUIaqX9hu%2BRliCkGodpEhum9%2B6kX4MDwMMfi388GOqUBvOTr3CdEFcPjspjQaNRcx%2Fkaz5PT8szhY%2F8K4A7up1zBFFOyNddVuafp7D0ACJBpSHhy%2FZV1033KXxthp7VvN2ArcCA5bkAI8uZ8Xg1NE7vPTUUIFeIisxM1hjBBTMukolA5n0%2B61ka4SZtVM8rGlvSQg7SXL%2BfecY4WXfN6MIMAFR8VgjywfJMCVy7%2BikxHzS0MV9HNYiAQ3CAGzwBzpfckgGzM&X-Amz-Signature=7bfa36e098ce5082707f64d36a16d47e2b26b0d0b9652514eccee3a84ad36d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

