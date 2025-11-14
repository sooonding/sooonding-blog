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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFA2M4PY%2F20251114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251114T010245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIuLvupjh75Jzq6JQEGKWuRC96BYqU38BTUbPhHvw%2B%2BAiBKJ3tcZv89d4gR%2FLEeeDSMIIgMDw%2BBSicQKpekpAP%2FHSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM6ST3degtd4SKPgEYKtwD1aJ9lJP3bVqTqf5LzIoMnuiVKVA1IepPDkia42jVqFJvyFGyNU2wkdY6pXZItptSqMcItYuC8VdBsQwlQCCQq6kr4%2BHK4sFkXrSOa8%2F5tWssq%2FTurCj1HLMIl15p4mcXuzlSEedaKZzV4pXhJZ%2FNLZx46zaAjZ3x0wkGWo7K2DVdCuzVT2S%2FLpbcQvwktaplXqeu%2B6z0CUSr0Im18FnHJ7tbGFMdg%2FooW60Az9LhjnswowOzksYGgpYmUPlabO1vu59VO4O6W%2FdWZFb8uDASNOHozn1WimF%2FKJsri2jM4DNLJQyR8Oru6VKgiSBNLYziBBQpca3s5moMJC4%2F6qpPEsrGoWVbSQULgm0YCMyS6YuFn%2Fd%2BVjnTDFw23XxmbdRnns%2F2VId84DAt8YoIFuM04i6PnfS850gcbspkWx6dsWMXz5uLe4Nr0TYjwJnwOImvqwGT%2FqYrFE03CDfK5Rs5%2Fe5AmeY6enzVf4xbPu3EGxlFy0T2b7BA6hirUTEZlHFPSfeNGkHVsXNeu6Bz1gMX%2Fxcj8yM1oiepMfWD%2FQzw2%2ByZ71pERNmKpKS%2Fz0KfUC5hHmwsmRBWNtDuOLUTMXp0bs0zG69BoJPgb5XfeBVLC%2FHlcf4M9gTUoR4%2BBKMwj%2FHZyAY6pgEJfjpIf%2B%2FPeaN28%2B5K5Xzo%2Bdos5ZpuWjmlLqhmiQK8M79Sd5%2FZ3ugEYt7vhnYvw%2BN1YhlV0vV%2BQ5U3UQo18YqnLA%2F4h7elEb3nrscTfkAcn710qbdyJlnfCmhdcCmWxu%2BCMp%2Bl635o6u72Ar7EkXPoiWfw0CHAwtERUSLSTgKJXoiqIkkfF6eVQ%2FDOJt%2FFBYh7jGCnta2YaFD%2F%2FLo1cIkQ8u2JHMOO&X-Amz-Signature=b7eb2a1bb8d4d8400f7f68b31872232c8c4909d07afc42795665bbc07a336d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWURX7TC%2F20251114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251114T010246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRIu3Kp9Tw2MBM3Fvi%2BYW%2Fr8pCbYkcR%2F4dxTrXFEJamAiEArpZTY1zKjZry%2BrDj3hJHMbwyE75U%2BaXo1O9uuTJMMgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB0xuFR%2BOMq5XYY10yrcA0MitCZdcjydIMgMXjdvkwAyXhlke9QiXIOovwerYc%2F%2F9cV%2B0Fc1U1yWoGWUDWrPoPQxJ%2FNZ6Gblw%2F1eYkobifVWTMwUXQ3juZnSJz5rfXGbNUYHt05CSmg6Y3pvfTCJwlwvO0fOgTcIg2EJDuI%2FHA1ETF%2Bd4qANAHDC5r0o8NrJuzQEHhIS0ziFiC9FYtPu%2FAy6QcAFdVNbRMSYApEpAtBwNVutESn5RxTwp2nLj1GuLeOr63Vr4ov%2Bgu%2FG6pQVHkDb%2BfHwBInNNUr7qQnyXYgqex8gTFXWYflG49JvbO6zmINwWDvtRxvCmylmvhdgVC7jatUYuaoYnWGbDUGySaW%2FAGtCJj78jdfZ7mAVx2Y1ajmdmbfiRkRpP8s3pDf88%2Bf75MFZ%2BxMIAc9LdtZ3kCJTGTWZBOaNeYLXZzMKBMK9Pg0AnMXBNKYHb1nbBujvLDlSTZEyl0vJsnV712ZU8x7aPWAMCrut2tSkbAAuRRuyUqkySFKfVnNXF46qAmm%2BfI1%2FQoSP7CjRp0ch2eusi2x9wnAJUoqJAa%2FZ6xSbuEe4666OTY0lcDigoTOzvhP7wuzOri72Zaw1EfgwXA6B8ywxUAoDd5TfEp2ggIWwqCBhiTco5LgBhV9sWhBJMO3w2cgGOqUBIwk5XedEBdkUuuh8it28tq8kPilZPrGASVmFosSEwqyrAyhDEHXwVJnbgHsSxKFftJlKx893xqBh92IFEN%2BzezTTRFin0iWJwWw%2BQhk1s7sBnwcREZETYTt3DpVVbEy09cPmXFq84y7%2FdKu%2BfTcH%2BGhxqcSH%2Fee7Ifb5gfGlXQCo22wJ9ejieTUZ1fErDwBK9SYRg0GdAP%2F1mMf6VfyYHuFcI9OL&X-Amz-Signature=d8aac122cdb6cd9990c7cce0093b16dbd9a0d12a79338b995b4140976f235724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWURX7TC%2F20251114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251114T010246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRIu3Kp9Tw2MBM3Fvi%2BYW%2Fr8pCbYkcR%2F4dxTrXFEJamAiEArpZTY1zKjZry%2BrDj3hJHMbwyE75U%2BaXo1O9uuTJMMgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB0xuFR%2BOMq5XYY10yrcA0MitCZdcjydIMgMXjdvkwAyXhlke9QiXIOovwerYc%2F%2F9cV%2B0Fc1U1yWoGWUDWrPoPQxJ%2FNZ6Gblw%2F1eYkobifVWTMwUXQ3juZnSJz5rfXGbNUYHt05CSmg6Y3pvfTCJwlwvO0fOgTcIg2EJDuI%2FHA1ETF%2Bd4qANAHDC5r0o8NrJuzQEHhIS0ziFiC9FYtPu%2FAy6QcAFdVNbRMSYApEpAtBwNVutESn5RxTwp2nLj1GuLeOr63Vr4ov%2Bgu%2FG6pQVHkDb%2BfHwBInNNUr7qQnyXYgqex8gTFXWYflG49JvbO6zmINwWDvtRxvCmylmvhdgVC7jatUYuaoYnWGbDUGySaW%2FAGtCJj78jdfZ7mAVx2Y1ajmdmbfiRkRpP8s3pDf88%2Bf75MFZ%2BxMIAc9LdtZ3kCJTGTWZBOaNeYLXZzMKBMK9Pg0AnMXBNKYHb1nbBujvLDlSTZEyl0vJsnV712ZU8x7aPWAMCrut2tSkbAAuRRuyUqkySFKfVnNXF46qAmm%2BfI1%2FQoSP7CjRp0ch2eusi2x9wnAJUoqJAa%2FZ6xSbuEe4666OTY0lcDigoTOzvhP7wuzOri72Zaw1EfgwXA6B8ywxUAoDd5TfEp2ggIWwqCBhiTco5LgBhV9sWhBJMO3w2cgGOqUBIwk5XedEBdkUuuh8it28tq8kPilZPrGASVmFosSEwqyrAyhDEHXwVJnbgHsSxKFftJlKx893xqBh92IFEN%2BzezTTRFin0iWJwWw%2BQhk1s7sBnwcREZETYTt3DpVVbEy09cPmXFq84y7%2FdKu%2BfTcH%2BGhxqcSH%2Fee7Ifb5gfGlXQCo22wJ9ejieTUZ1fErDwBK9SYRg0GdAP%2F1mMf6VfyYHuFcI9OL&X-Amz-Signature=f881083a46caeca405b5655ff4a4a6500e4d3d015f3c5fa449d0c0313709078f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWURX7TC%2F20251114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251114T010246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRIu3Kp9Tw2MBM3Fvi%2BYW%2Fr8pCbYkcR%2F4dxTrXFEJamAiEArpZTY1zKjZry%2BrDj3hJHMbwyE75U%2BaXo1O9uuTJMMgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB0xuFR%2BOMq5XYY10yrcA0MitCZdcjydIMgMXjdvkwAyXhlke9QiXIOovwerYc%2F%2F9cV%2B0Fc1U1yWoGWUDWrPoPQxJ%2FNZ6Gblw%2F1eYkobifVWTMwUXQ3juZnSJz5rfXGbNUYHt05CSmg6Y3pvfTCJwlwvO0fOgTcIg2EJDuI%2FHA1ETF%2Bd4qANAHDC5r0o8NrJuzQEHhIS0ziFiC9FYtPu%2FAy6QcAFdVNbRMSYApEpAtBwNVutESn5RxTwp2nLj1GuLeOr63Vr4ov%2Bgu%2FG6pQVHkDb%2BfHwBInNNUr7qQnyXYgqex8gTFXWYflG49JvbO6zmINwWDvtRxvCmylmvhdgVC7jatUYuaoYnWGbDUGySaW%2FAGtCJj78jdfZ7mAVx2Y1ajmdmbfiRkRpP8s3pDf88%2Bf75MFZ%2BxMIAc9LdtZ3kCJTGTWZBOaNeYLXZzMKBMK9Pg0AnMXBNKYHb1nbBujvLDlSTZEyl0vJsnV712ZU8x7aPWAMCrut2tSkbAAuRRuyUqkySFKfVnNXF46qAmm%2BfI1%2FQoSP7CjRp0ch2eusi2x9wnAJUoqJAa%2FZ6xSbuEe4666OTY0lcDigoTOzvhP7wuzOri72Zaw1EfgwXA6B8ywxUAoDd5TfEp2ggIWwqCBhiTco5LgBhV9sWhBJMO3w2cgGOqUBIwk5XedEBdkUuuh8it28tq8kPilZPrGASVmFosSEwqyrAyhDEHXwVJnbgHsSxKFftJlKx893xqBh92IFEN%2BzezTTRFin0iWJwWw%2BQhk1s7sBnwcREZETYTt3DpVVbEy09cPmXFq84y7%2FdKu%2BfTcH%2BGhxqcSH%2Fee7Ifb5gfGlXQCo22wJ9ejieTUZ1fErDwBK9SYRg0GdAP%2F1mMf6VfyYHuFcI9OL&X-Amz-Signature=71e02916d45812482c6afedbe10e6664583aab3d21b90f5f9831e2c79be9c8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWURX7TC%2F20251114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251114T010246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRIu3Kp9Tw2MBM3Fvi%2BYW%2Fr8pCbYkcR%2F4dxTrXFEJamAiEArpZTY1zKjZry%2BrDj3hJHMbwyE75U%2BaXo1O9uuTJMMgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB0xuFR%2BOMq5XYY10yrcA0MitCZdcjydIMgMXjdvkwAyXhlke9QiXIOovwerYc%2F%2F9cV%2B0Fc1U1yWoGWUDWrPoPQxJ%2FNZ6Gblw%2F1eYkobifVWTMwUXQ3juZnSJz5rfXGbNUYHt05CSmg6Y3pvfTCJwlwvO0fOgTcIg2EJDuI%2FHA1ETF%2Bd4qANAHDC5r0o8NrJuzQEHhIS0ziFiC9FYtPu%2FAy6QcAFdVNbRMSYApEpAtBwNVutESn5RxTwp2nLj1GuLeOr63Vr4ov%2Bgu%2FG6pQVHkDb%2BfHwBInNNUr7qQnyXYgqex8gTFXWYflG49JvbO6zmINwWDvtRxvCmylmvhdgVC7jatUYuaoYnWGbDUGySaW%2FAGtCJj78jdfZ7mAVx2Y1ajmdmbfiRkRpP8s3pDf88%2Bf75MFZ%2BxMIAc9LdtZ3kCJTGTWZBOaNeYLXZzMKBMK9Pg0AnMXBNKYHb1nbBujvLDlSTZEyl0vJsnV712ZU8x7aPWAMCrut2tSkbAAuRRuyUqkySFKfVnNXF46qAmm%2BfI1%2FQoSP7CjRp0ch2eusi2x9wnAJUoqJAa%2FZ6xSbuEe4666OTY0lcDigoTOzvhP7wuzOri72Zaw1EfgwXA6B8ywxUAoDd5TfEp2ggIWwqCBhiTco5LgBhV9sWhBJMO3w2cgGOqUBIwk5XedEBdkUuuh8it28tq8kPilZPrGASVmFosSEwqyrAyhDEHXwVJnbgHsSxKFftJlKx893xqBh92IFEN%2BzezTTRFin0iWJwWw%2BQhk1s7sBnwcREZETYTt3DpVVbEy09cPmXFq84y7%2FdKu%2BfTcH%2BGhxqcSH%2Fee7Ifb5gfGlXQCo22wJ9ejieTUZ1fErDwBK9SYRg0GdAP%2F1mMf6VfyYHuFcI9OL&X-Amz-Signature=0fb85562147b8c461eb52e4a9f1ba0788987dad234baa95bb555db1a0aaa0439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWURX7TC%2F20251114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251114T010246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRIu3Kp9Tw2MBM3Fvi%2BYW%2Fr8pCbYkcR%2F4dxTrXFEJamAiEArpZTY1zKjZry%2BrDj3hJHMbwyE75U%2BaXo1O9uuTJMMgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDB0xuFR%2BOMq5XYY10yrcA0MitCZdcjydIMgMXjdvkwAyXhlke9QiXIOovwerYc%2F%2F9cV%2B0Fc1U1yWoGWUDWrPoPQxJ%2FNZ6Gblw%2F1eYkobifVWTMwUXQ3juZnSJz5rfXGbNUYHt05CSmg6Y3pvfTCJwlwvO0fOgTcIg2EJDuI%2FHA1ETF%2Bd4qANAHDC5r0o8NrJuzQEHhIS0ziFiC9FYtPu%2FAy6QcAFdVNbRMSYApEpAtBwNVutESn5RxTwp2nLj1GuLeOr63Vr4ov%2Bgu%2FG6pQVHkDb%2BfHwBInNNUr7qQnyXYgqex8gTFXWYflG49JvbO6zmINwWDvtRxvCmylmvhdgVC7jatUYuaoYnWGbDUGySaW%2FAGtCJj78jdfZ7mAVx2Y1ajmdmbfiRkRpP8s3pDf88%2Bf75MFZ%2BxMIAc9LdtZ3kCJTGTWZBOaNeYLXZzMKBMK9Pg0AnMXBNKYHb1nbBujvLDlSTZEyl0vJsnV712ZU8x7aPWAMCrut2tSkbAAuRRuyUqkySFKfVnNXF46qAmm%2BfI1%2FQoSP7CjRp0ch2eusi2x9wnAJUoqJAa%2FZ6xSbuEe4666OTY0lcDigoTOzvhP7wuzOri72Zaw1EfgwXA6B8ywxUAoDd5TfEp2ggIWwqCBhiTco5LgBhV9sWhBJMO3w2cgGOqUBIwk5XedEBdkUuuh8it28tq8kPilZPrGASVmFosSEwqyrAyhDEHXwVJnbgHsSxKFftJlKx893xqBh92IFEN%2BzezTTRFin0iWJwWw%2BQhk1s7sBnwcREZETYTt3DpVVbEy09cPmXFq84y7%2FdKu%2BfTcH%2BGhxqcSH%2Fee7Ifb5gfGlXQCo22wJ9ejieTUZ1fErDwBK9SYRg0GdAP%2F1mMf6VfyYHuFcI9OL&X-Amz-Signature=dc4f2e900c2c10a59759b96eaefcfe0c2318a1a0fa062a780b26452d52b57cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFA2M4PY%2F20251114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251114T010245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIuLvupjh75Jzq6JQEGKWuRC96BYqU38BTUbPhHvw%2B%2BAiBKJ3tcZv89d4gR%2FLEeeDSMIIgMDw%2BBSicQKpekpAP%2FHSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM6ST3degtd4SKPgEYKtwD1aJ9lJP3bVqTqf5LzIoMnuiVKVA1IepPDkia42jVqFJvyFGyNU2wkdY6pXZItptSqMcItYuC8VdBsQwlQCCQq6kr4%2BHK4sFkXrSOa8%2F5tWssq%2FTurCj1HLMIl15p4mcXuzlSEedaKZzV4pXhJZ%2FNLZx46zaAjZ3x0wkGWo7K2DVdCuzVT2S%2FLpbcQvwktaplXqeu%2B6z0CUSr0Im18FnHJ7tbGFMdg%2FooW60Az9LhjnswowOzksYGgpYmUPlabO1vu59VO4O6W%2FdWZFb8uDASNOHozn1WimF%2FKJsri2jM4DNLJQyR8Oru6VKgiSBNLYziBBQpca3s5moMJC4%2F6qpPEsrGoWVbSQULgm0YCMyS6YuFn%2Fd%2BVjnTDFw23XxmbdRnns%2F2VId84DAt8YoIFuM04i6PnfS850gcbspkWx6dsWMXz5uLe4Nr0TYjwJnwOImvqwGT%2FqYrFE03CDfK5Rs5%2Fe5AmeY6enzVf4xbPu3EGxlFy0T2b7BA6hirUTEZlHFPSfeNGkHVsXNeu6Bz1gMX%2Fxcj8yM1oiepMfWD%2FQzw2%2ByZ71pERNmKpKS%2Fz0KfUC5hHmwsmRBWNtDuOLUTMXp0bs0zG69BoJPgb5XfeBVLC%2FHlcf4M9gTUoR4%2BBKMwj%2FHZyAY6pgEJfjpIf%2B%2FPeaN28%2B5K5Xzo%2Bdos5ZpuWjmlLqhmiQK8M79Sd5%2FZ3ugEYt7vhnYvw%2BN1YhlV0vV%2BQ5U3UQo18YqnLA%2F4h7elEb3nrscTfkAcn710qbdyJlnfCmhdcCmWxu%2BCMp%2Bl635o6u72Ar7EkXPoiWfw0CHAwtERUSLSTgKJXoiqIkkfF6eVQ%2FDOJt%2FFBYh7jGCnta2YaFD%2F%2FLo1cIkQ8u2JHMOO&X-Amz-Signature=e0b49f26e2024245377d5bd8b161d064c596d059d3b7ae4ddd169cf7ca38e98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

