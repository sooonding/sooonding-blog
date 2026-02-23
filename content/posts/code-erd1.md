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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBKOH5V%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCqa4D13zfGyBRsQ0xLlaebg1lCSn5%2B8y%2BeSRMRxIkpMAIhAIHD9MzCB4hWnbXRqoPXxAeSecmuwbvmW6Jpm3dWf5YJKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwxz19HWKu5MQsq6%2BEq3AMdaBBZMaiQQ7CwQJ%2B7JIxdfBnce3WGsBovKdEsA%2BJcF05vF68BPEBYgDYZNlxBEtTSzDBiUa94MeSljnWOtC06H3LgnuYuAJ22WA39JU%2FU%2FvXovchpska8uaK0BIhFwsSAUCc%2FNhwO%2FMlglgPNh3S%2F7nfg0GmIoWc%2BNgc6GJ2%2FimAL6xI8Oy2BIFBZoVJm6W0b5ovKWaNdYqrIIUdo%2F1lOFak4LE4xaayrgVtrRfjzRI4LH0JcbCFy5yNIF6h%2F%2Fp3CLuZBzeJTQpgvZuGJiwtJcsw9CueVYI%2FulQwb8%2BbQnSon1E2tqK5QdkoiNm7cDvysRbix87WWquCd6RBRnOWX4fMto6wwOdxSdJdUS%2FIXEhPjR4d6%2FvUq8R0P%2FdcY%2FLWDnErYF2R0DiAaORn%2FQ5mdp90ujCjClUMQXgGnju7F1%2BUWVaFIQMw6oKLmKXdt%2FNDt9%2FSNuzofZMqcqgK0KI0Ig%2BNT9nt6%2B6WXsqqDAYMknInW2zKagVjc68XX%2F8JJBVbB41R%2F5wWvWFyBZdKmTxC1KtMheEXorXVwXMEgZxDnsDbArun2EnBB4NGaLttXMQcmD5%2Fz8uWG6LUBiNSS5CApw0mJZo3skwPOQTM4wN9QClKxSJK2Qbh6fsHgejDF1e7MBjqkAcoI1GH8XI%2FPWZMjIEZOHU4tqsJJzZj9hE53%2BmwoNimo7XOE2TauCieH%2BqRDziFtK6OsqFkY6GLVJblOuyB%2FYO5Pp5cOPnvg4OdODRcO5wUoCwE%2BOG5oEnKCH1VLvDdqfNXqV0nHaz3yVO8Wlo8m74ko%2F4LqYjboymQUIefyk7zydBheyMcD25LFf0ug1Nm7xXNEnt9Nhf02QCmUWrpRxzp6MJqw&X-Amz-Signature=c0ea61a3c44b9163a92bc2f2fa78987dbd978bf894ac8d180f0e993c3a2cf915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4M3PIN%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDHDNl9V3ZpPq%2FMFY63%2BM%2F887dYgkWWsUJk9EcSor2oqQIgfVdBNJCIEcReTaSvaiuVO7FDpQKwZP4m0S8%2FRO1SGNUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITFxus61pHAI%2FlwwircA%2BPr1mTo9gxcG%2FjBrfyTJSQFkOi8J%2BSKs5qEfmcn9iGC8K1Okh25pbvaXzPQfbihyn%2FaRsZcTOmUr9s3NZQINEb802JoAXgsXh2YVBhksaN1sTXf8PWRpz1QjRE2q3ANkbe6t42BSOxZnS%2FeGcbX9xDNKONfdy31nsNm%2F3h5uQ1crpSkih%2Bd%2FfuGOWoK50Ze8QedEbHhnpE3RbA9G7Oa1liCoB%2FoE2CCFKmMXG8W9f8ELNSezZWyuxjGwn31VZSvx%2BTwHJv0cQCkvoyEgKZUEqCN5v%2BZCIKG8hxhUHOGgrWAnNzl91FMhB%2BBs%2BPM2AACtK%2FuW41pA8hflMW%2BkAMPY%2F%2BmL8zHdYDMImE3dFxoQE%2FxQl5rSJKfonHNhJeBGkxBGXJ%2FFmxzZZUro2YfQPFJ8Wip7vuh25rJhFepm0mG2b4%2BGPiScStFbjuVyEJS%2BeFEUIHLiHwmYOxDYsVyZReaKq1nw3qQBPja%2FHZ03gI7inBpJeT40nmestyeALn6aXFGJLrSl0RBLqe%2BA2MJNx8e9wb7WkAL5mqf5%2FR9Pij2P%2BowGqhco2XmVmAn6THouh%2Bx4meYIgeAOi0B5lW6CkLIprO5qjPNeXUYts7xsDqt%2FAEz40oNHTxoH5nkH%2B5mMLjU7swGOqUBfAOg3k0L6LmFU%2FRNhtiiyFnCm1VCAx1m1SSPy%2Fjzejva1l7iPzd3r6a%2FpiCgPK%2B%2B0QVzOD3S%2FXNTR6dhK7yAwUTA3y081HJIgJU5vuGvycCrkATwZ0suywOFUBivVxFkKiHBV3USWncJK1fjTcYPPidEcSDLY2Y0YPrrdaNp9Ujk58Orx9WW368tepCMX%2FIWDGvHeUpC3YMJOScmGVQ%2FAhPLT0Ji&X-Amz-Signature=909e815d3625f7cae58cb2fd68b9d5da87d30dd3c132134055620a8c11ee8f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4M3PIN%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDHDNl9V3ZpPq%2FMFY63%2BM%2F887dYgkWWsUJk9EcSor2oqQIgfVdBNJCIEcReTaSvaiuVO7FDpQKwZP4m0S8%2FRO1SGNUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITFxus61pHAI%2FlwwircA%2BPr1mTo9gxcG%2FjBrfyTJSQFkOi8J%2BSKs5qEfmcn9iGC8K1Okh25pbvaXzPQfbihyn%2FaRsZcTOmUr9s3NZQINEb802JoAXgsXh2YVBhksaN1sTXf8PWRpz1QjRE2q3ANkbe6t42BSOxZnS%2FeGcbX9xDNKONfdy31nsNm%2F3h5uQ1crpSkih%2Bd%2FfuGOWoK50Ze8QedEbHhnpE3RbA9G7Oa1liCoB%2FoE2CCFKmMXG8W9f8ELNSezZWyuxjGwn31VZSvx%2BTwHJv0cQCkvoyEgKZUEqCN5v%2BZCIKG8hxhUHOGgrWAnNzl91FMhB%2BBs%2BPM2AACtK%2FuW41pA8hflMW%2BkAMPY%2F%2BmL8zHdYDMImE3dFxoQE%2FxQl5rSJKfonHNhJeBGkxBGXJ%2FFmxzZZUro2YfQPFJ8Wip7vuh25rJhFepm0mG2b4%2BGPiScStFbjuVyEJS%2BeFEUIHLiHwmYOxDYsVyZReaKq1nw3qQBPja%2FHZ03gI7inBpJeT40nmestyeALn6aXFGJLrSl0RBLqe%2BA2MJNx8e9wb7WkAL5mqf5%2FR9Pij2P%2BowGqhco2XmVmAn6THouh%2Bx4meYIgeAOi0B5lW6CkLIprO5qjPNeXUYts7xsDqt%2FAEz40oNHTxoH5nkH%2B5mMLjU7swGOqUBfAOg3k0L6LmFU%2FRNhtiiyFnCm1VCAx1m1SSPy%2Fjzejva1l7iPzd3r6a%2FpiCgPK%2B%2B0QVzOD3S%2FXNTR6dhK7yAwUTA3y081HJIgJU5vuGvycCrkATwZ0suywOFUBivVxFkKiHBV3USWncJK1fjTcYPPidEcSDLY2Y0YPrrdaNp9Ujk58Orx9WW368tepCMX%2FIWDGvHeUpC3YMJOScmGVQ%2FAhPLT0Ji&X-Amz-Signature=0b9e264759d9ff8f135ca33142ed84462508a191920a58f87a932af402d80364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4M3PIN%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDHDNl9V3ZpPq%2FMFY63%2BM%2F887dYgkWWsUJk9EcSor2oqQIgfVdBNJCIEcReTaSvaiuVO7FDpQKwZP4m0S8%2FRO1SGNUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITFxus61pHAI%2FlwwircA%2BPr1mTo9gxcG%2FjBrfyTJSQFkOi8J%2BSKs5qEfmcn9iGC8K1Okh25pbvaXzPQfbihyn%2FaRsZcTOmUr9s3NZQINEb802JoAXgsXh2YVBhksaN1sTXf8PWRpz1QjRE2q3ANkbe6t42BSOxZnS%2FeGcbX9xDNKONfdy31nsNm%2F3h5uQ1crpSkih%2Bd%2FfuGOWoK50Ze8QedEbHhnpE3RbA9G7Oa1liCoB%2FoE2CCFKmMXG8W9f8ELNSezZWyuxjGwn31VZSvx%2BTwHJv0cQCkvoyEgKZUEqCN5v%2BZCIKG8hxhUHOGgrWAnNzl91FMhB%2BBs%2BPM2AACtK%2FuW41pA8hflMW%2BkAMPY%2F%2BmL8zHdYDMImE3dFxoQE%2FxQl5rSJKfonHNhJeBGkxBGXJ%2FFmxzZZUro2YfQPFJ8Wip7vuh25rJhFepm0mG2b4%2BGPiScStFbjuVyEJS%2BeFEUIHLiHwmYOxDYsVyZReaKq1nw3qQBPja%2FHZ03gI7inBpJeT40nmestyeALn6aXFGJLrSl0RBLqe%2BA2MJNx8e9wb7WkAL5mqf5%2FR9Pij2P%2BowGqhco2XmVmAn6THouh%2Bx4meYIgeAOi0B5lW6CkLIprO5qjPNeXUYts7xsDqt%2FAEz40oNHTxoH5nkH%2B5mMLjU7swGOqUBfAOg3k0L6LmFU%2FRNhtiiyFnCm1VCAx1m1SSPy%2Fjzejva1l7iPzd3r6a%2FpiCgPK%2B%2B0QVzOD3S%2FXNTR6dhK7yAwUTA3y081HJIgJU5vuGvycCrkATwZ0suywOFUBivVxFkKiHBV3USWncJK1fjTcYPPidEcSDLY2Y0YPrrdaNp9Ujk58Orx9WW368tepCMX%2FIWDGvHeUpC3YMJOScmGVQ%2FAhPLT0Ji&X-Amz-Signature=4de4eb77f751a5fc85b29f9b2412d59ef41a84e5d1f7795568b70fcd1cb42a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4M3PIN%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDHDNl9V3ZpPq%2FMFY63%2BM%2F887dYgkWWsUJk9EcSor2oqQIgfVdBNJCIEcReTaSvaiuVO7FDpQKwZP4m0S8%2FRO1SGNUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITFxus61pHAI%2FlwwircA%2BPr1mTo9gxcG%2FjBrfyTJSQFkOi8J%2BSKs5qEfmcn9iGC8K1Okh25pbvaXzPQfbihyn%2FaRsZcTOmUr9s3NZQINEb802JoAXgsXh2YVBhksaN1sTXf8PWRpz1QjRE2q3ANkbe6t42BSOxZnS%2FeGcbX9xDNKONfdy31nsNm%2F3h5uQ1crpSkih%2Bd%2FfuGOWoK50Ze8QedEbHhnpE3RbA9G7Oa1liCoB%2FoE2CCFKmMXG8W9f8ELNSezZWyuxjGwn31VZSvx%2BTwHJv0cQCkvoyEgKZUEqCN5v%2BZCIKG8hxhUHOGgrWAnNzl91FMhB%2BBs%2BPM2AACtK%2FuW41pA8hflMW%2BkAMPY%2F%2BmL8zHdYDMImE3dFxoQE%2FxQl5rSJKfonHNhJeBGkxBGXJ%2FFmxzZZUro2YfQPFJ8Wip7vuh25rJhFepm0mG2b4%2BGPiScStFbjuVyEJS%2BeFEUIHLiHwmYOxDYsVyZReaKq1nw3qQBPja%2FHZ03gI7inBpJeT40nmestyeALn6aXFGJLrSl0RBLqe%2BA2MJNx8e9wb7WkAL5mqf5%2FR9Pij2P%2BowGqhco2XmVmAn6THouh%2Bx4meYIgeAOi0B5lW6CkLIprO5qjPNeXUYts7xsDqt%2FAEz40oNHTxoH5nkH%2B5mMLjU7swGOqUBfAOg3k0L6LmFU%2FRNhtiiyFnCm1VCAx1m1SSPy%2Fjzejva1l7iPzd3r6a%2FpiCgPK%2B%2B0QVzOD3S%2FXNTR6dhK7yAwUTA3y081HJIgJU5vuGvycCrkATwZ0suywOFUBivVxFkKiHBV3USWncJK1fjTcYPPidEcSDLY2Y0YPrrdaNp9Ujk58Orx9WW368tepCMX%2FIWDGvHeUpC3YMJOScmGVQ%2FAhPLT0Ji&X-Amz-Signature=41b7465848f053a2432761ed1b7f0678916621241e91849a7504c531234476e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR4M3PIN%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDHDNl9V3ZpPq%2FMFY63%2BM%2F887dYgkWWsUJk9EcSor2oqQIgfVdBNJCIEcReTaSvaiuVO7FDpQKwZP4m0S8%2FRO1SGNUqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITFxus61pHAI%2FlwwircA%2BPr1mTo9gxcG%2FjBrfyTJSQFkOi8J%2BSKs5qEfmcn9iGC8K1Okh25pbvaXzPQfbihyn%2FaRsZcTOmUr9s3NZQINEb802JoAXgsXh2YVBhksaN1sTXf8PWRpz1QjRE2q3ANkbe6t42BSOxZnS%2FeGcbX9xDNKONfdy31nsNm%2F3h5uQ1crpSkih%2Bd%2FfuGOWoK50Ze8QedEbHhnpE3RbA9G7Oa1liCoB%2FoE2CCFKmMXG8W9f8ELNSezZWyuxjGwn31VZSvx%2BTwHJv0cQCkvoyEgKZUEqCN5v%2BZCIKG8hxhUHOGgrWAnNzl91FMhB%2BBs%2BPM2AACtK%2FuW41pA8hflMW%2BkAMPY%2F%2BmL8zHdYDMImE3dFxoQE%2FxQl5rSJKfonHNhJeBGkxBGXJ%2FFmxzZZUro2YfQPFJ8Wip7vuh25rJhFepm0mG2b4%2BGPiScStFbjuVyEJS%2BeFEUIHLiHwmYOxDYsVyZReaKq1nw3qQBPja%2FHZ03gI7inBpJeT40nmestyeALn6aXFGJLrSl0RBLqe%2BA2MJNx8e9wb7WkAL5mqf5%2FR9Pij2P%2BowGqhco2XmVmAn6THouh%2Bx4meYIgeAOi0B5lW6CkLIprO5qjPNeXUYts7xsDqt%2FAEz40oNHTxoH5nkH%2B5mMLjU7swGOqUBfAOg3k0L6LmFU%2FRNhtiiyFnCm1VCAx1m1SSPy%2Fjzejva1l7iPzd3r6a%2FpiCgPK%2B%2B0QVzOD3S%2FXNTR6dhK7yAwUTA3y081HJIgJU5vuGvycCrkATwZ0suywOFUBivVxFkKiHBV3USWncJK1fjTcYPPidEcSDLY2Y0YPrrdaNp9Ujk58Orx9WW368tepCMX%2FIWDGvHeUpC3YMJOScmGVQ%2FAhPLT0Ji&X-Amz-Signature=8ea6987676060ce30abd47352ece0d451411d8f34d41b338c04e77151d58fc37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBKOH5V%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCqa4D13zfGyBRsQ0xLlaebg1lCSn5%2B8y%2BeSRMRxIkpMAIhAIHD9MzCB4hWnbXRqoPXxAeSecmuwbvmW6Jpm3dWf5YJKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwxz19HWKu5MQsq6%2BEq3AMdaBBZMaiQQ7CwQJ%2B7JIxdfBnce3WGsBovKdEsA%2BJcF05vF68BPEBYgDYZNlxBEtTSzDBiUa94MeSljnWOtC06H3LgnuYuAJ22WA39JU%2FU%2FvXovchpska8uaK0BIhFwsSAUCc%2FNhwO%2FMlglgPNh3S%2F7nfg0GmIoWc%2BNgc6GJ2%2FimAL6xI8Oy2BIFBZoVJm6W0b5ovKWaNdYqrIIUdo%2F1lOFak4LE4xaayrgVtrRfjzRI4LH0JcbCFy5yNIF6h%2F%2Fp3CLuZBzeJTQpgvZuGJiwtJcsw9CueVYI%2FulQwb8%2BbQnSon1E2tqK5QdkoiNm7cDvysRbix87WWquCd6RBRnOWX4fMto6wwOdxSdJdUS%2FIXEhPjR4d6%2FvUq8R0P%2FdcY%2FLWDnErYF2R0DiAaORn%2FQ5mdp90ujCjClUMQXgGnju7F1%2BUWVaFIQMw6oKLmKXdt%2FNDt9%2FSNuzofZMqcqgK0KI0Ig%2BNT9nt6%2B6WXsqqDAYMknInW2zKagVjc68XX%2F8JJBVbB41R%2F5wWvWFyBZdKmTxC1KtMheEXorXVwXMEgZxDnsDbArun2EnBB4NGaLttXMQcmD5%2Fz8uWG6LUBiNSS5CApw0mJZo3skwPOQTM4wN9QClKxSJK2Qbh6fsHgejDF1e7MBjqkAcoI1GH8XI%2FPWZMjIEZOHU4tqsJJzZj9hE53%2BmwoNimo7XOE2TauCieH%2BqRDziFtK6OsqFkY6GLVJblOuyB%2FYO5Pp5cOPnvg4OdODRcO5wUoCwE%2BOG5oEnKCH1VLvDdqfNXqV0nHaz3yVO8Wlo8m74ko%2F4LqYjboymQUIefyk7zydBheyMcD25LFf0ug1Nm7xXNEnt9Nhf02QCmUWrpRxzp6MJqw&X-Amz-Signature=7b99d2eb3fd6891f838429fa67adc7b3c05642f03236b9fe25d30b3be79ad7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

