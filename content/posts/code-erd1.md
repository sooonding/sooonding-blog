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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNX5OTH%2F20251201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251201T011512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIH4qa24FyQ6CeosDr%2BNlwYUCKJiwLt%2FjTh%2BI5cHCu%2FHWAiEAg4EogNi9vatai14bRS6fUEcEWHqMSeBM7k6lJX7grvcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoqAYSqR9T5JMd6jyrcA80cZLLVtfQqTp5w5u36Q0%2F2OmvLMJ6jWUZ3NXHfShWzOzsPyxHjcXFIOago9ZX%2BdbbENGdGTgtTrsJyp6uB4DCwgllxNCapWt3UFB8Mc53yeCEQ2fmJyXNNuVo4ZbVyPukpdzpTXPU0YHrQ0ihQEs93NWnvq%2Bjy65yfRao2bwUU2Oescf6hLwsrFNqlSVJgWjlVTys%2BrcN36XpQ6spaj0kC24ofmsbZzmNDM%2FwgguFUolGp3LumpbCRES0anjXUfxkbPaInS0r%2F2dvxQ%2BphbCwR%2Bw4wQObfjNhzpI%2BfCN3RVCtCAq26JWazMcBI%2FB1X31webV1H9rCIpBZBHlHKK6kEFxh69%2FEOYnQDua0icRQG2X9nJ6eofuAUl0t2E4tGWTWhrhORaehbN4t32ptoA%2BzbDvSA0%2FQxnERHvWg3n%2BLZPLD7iFbYlu7TDQQPuUPe9JJZWe3RxuR5QIIJk9ji0R8CWp%2FKN3gGZnIxfL6pyUSoyXKCCCwBGPJHUFHobaGbsrPU4gBrW7eXc2PRcMwPAuIGJCQLCsPYmqpC%2FhYcyBG87BGWyZKeStmelvqKqjKOqXr8BznRP8BUyvLfUCClPZQFTeFL2B4byW6Kt7UZUld32nIVMMHUU6OA%2BnD8MMPpsskGOqUB72lOWv59fa3T%2BE%2ByqDbilsVtiDy8dXdZp4rfRXPF3AgnipzZdCF1HEnFBa8%2B4CxVyLwx8wm5mKZqXZJpQ1qVkzS7J%2Buu%2FLbVWh9utf96Bu7zGu%2FRXd5hNi4ZaWagXvIqTwjOexdXsTjFI%2BFpLRV1ZI2%2B7t138xO0C3KVUCQR2%2BywZBkdjlzHW8%2FetfAvDaOtRx21IbnuC0wMwQxDUUp%2FNHrL0Py2&X-Amz-Signature=1ef810a5a524958076e0383f9bad019d3af2eb168ddadb76ebdf040483321fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMRWDYC%2F20251201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251201T011513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC2e7gHVBskK7t%2BbUeFTiAmMnOhfGiKwVW3r1rgjNWBCgIgX2P6ItSC4BPK%2FzSKuuAmBSmi8elOI4Pi6n9X5CkmJz4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe4HhtDpuQqeFtpsCrcAz4te684F%2FVuy12wA5hxyQjEsAn3T8OWEIYWF8fCO3upP3LCErEad67WrLvMOHouF42yZ1O6xtgO5o%2F%2FhQiFr1IAbCswO7dAjLOMRh10n4chTYfACU7%2BteBuMSsijAjKaNa7G8CmZ7T7QuVD3Kl5%2BmqJf6b3wC7A6F1MLFN44V6OjVN9SXPX4v6E81EdgT%2BDdqSZ2BueWN8R%2Fa2%2B5G9jZE4tiWaRppsw7jQWEyzFC7fJuXdtsEJG6XXI68Af4exnG13ynNLVH5QPf16H0B6L%2FCckMmBR0f%2FeNeenzbbuaIDgUS0Kb4J0hPWs33Ed7egke58ih7i5fKEmTbu%2FqCy1B1Oq92wYFL50rDzttOf3lA3AXARfkOY5X%2B%2FwX1angku%2BmqCYxTrHo3F1YfUV9pRMxPHbQnSAldz8SW%2FeOrnEfVsYQmlFaW9RukzlDZkTMb0xvURKQWsfDCkgHwgbw%2BcNalpQPmZ7iwdUNu%2FsPdPYFrBUvVNSuesN8uBFf4UO9CPhDOouL6CFji9uEped80uNw6LWYfRL%2FJwwuohREC01GVC0%2BNNYolJ0dSyo6cMCUimuSxItLrHGkP2J4gUkPTPeeVrR067S4kJ7GffliAabzKMyN7A%2BxNy%2BLiH8ViyMMObwsskGOqUBiABty8BBcRwOA8g%2FjekaY3kGU7FdjZT2yjsnx5suJ30ze5UgU%2BTzlC5JoEX7vmfejMLxwgQOjnqHlElP2D4rX5ATZk97GFbmLDhY1pC6rENrK48lQFMEfkOP7ZGNudbZo9H7Yb8PSJhZf5Gb2u4l1AA5LPdkPG%2BAasWYhJNhNEjYhLxAXjzEybAk97WZ124DOla%2BnMfYi%2BSsa4LG%2FVvyvgba%2BxKT&X-Amz-Signature=07747de0182663ebfc7786057124aec89d00cbae6286504895845d727def0424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMRWDYC%2F20251201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251201T011513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC2e7gHVBskK7t%2BbUeFTiAmMnOhfGiKwVW3r1rgjNWBCgIgX2P6ItSC4BPK%2FzSKuuAmBSmi8elOI4Pi6n9X5CkmJz4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe4HhtDpuQqeFtpsCrcAz4te684F%2FVuy12wA5hxyQjEsAn3T8OWEIYWF8fCO3upP3LCErEad67WrLvMOHouF42yZ1O6xtgO5o%2F%2FhQiFr1IAbCswO7dAjLOMRh10n4chTYfACU7%2BteBuMSsijAjKaNa7G8CmZ7T7QuVD3Kl5%2BmqJf6b3wC7A6F1MLFN44V6OjVN9SXPX4v6E81EdgT%2BDdqSZ2BueWN8R%2Fa2%2B5G9jZE4tiWaRppsw7jQWEyzFC7fJuXdtsEJG6XXI68Af4exnG13ynNLVH5QPf16H0B6L%2FCckMmBR0f%2FeNeenzbbuaIDgUS0Kb4J0hPWs33Ed7egke58ih7i5fKEmTbu%2FqCy1B1Oq92wYFL50rDzttOf3lA3AXARfkOY5X%2B%2FwX1angku%2BmqCYxTrHo3F1YfUV9pRMxPHbQnSAldz8SW%2FeOrnEfVsYQmlFaW9RukzlDZkTMb0xvURKQWsfDCkgHwgbw%2BcNalpQPmZ7iwdUNu%2FsPdPYFrBUvVNSuesN8uBFf4UO9CPhDOouL6CFji9uEped80uNw6LWYfRL%2FJwwuohREC01GVC0%2BNNYolJ0dSyo6cMCUimuSxItLrHGkP2J4gUkPTPeeVrR067S4kJ7GffliAabzKMyN7A%2BxNy%2BLiH8ViyMMObwsskGOqUBiABty8BBcRwOA8g%2FjekaY3kGU7FdjZT2yjsnx5suJ30ze5UgU%2BTzlC5JoEX7vmfejMLxwgQOjnqHlElP2D4rX5ATZk97GFbmLDhY1pC6rENrK48lQFMEfkOP7ZGNudbZo9H7Yb8PSJhZf5Gb2u4l1AA5LPdkPG%2BAasWYhJNhNEjYhLxAXjzEybAk97WZ124DOla%2BnMfYi%2BSsa4LG%2FVvyvgba%2BxKT&X-Amz-Signature=a8de1e2aa710562fbaf5340f74bd93052ae16c6e24fa549314868bebcbc0863e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMRWDYC%2F20251201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251201T011513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC2e7gHVBskK7t%2BbUeFTiAmMnOhfGiKwVW3r1rgjNWBCgIgX2P6ItSC4BPK%2FzSKuuAmBSmi8elOI4Pi6n9X5CkmJz4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe4HhtDpuQqeFtpsCrcAz4te684F%2FVuy12wA5hxyQjEsAn3T8OWEIYWF8fCO3upP3LCErEad67WrLvMOHouF42yZ1O6xtgO5o%2F%2FhQiFr1IAbCswO7dAjLOMRh10n4chTYfACU7%2BteBuMSsijAjKaNa7G8CmZ7T7QuVD3Kl5%2BmqJf6b3wC7A6F1MLFN44V6OjVN9SXPX4v6E81EdgT%2BDdqSZ2BueWN8R%2Fa2%2B5G9jZE4tiWaRppsw7jQWEyzFC7fJuXdtsEJG6XXI68Af4exnG13ynNLVH5QPf16H0B6L%2FCckMmBR0f%2FeNeenzbbuaIDgUS0Kb4J0hPWs33Ed7egke58ih7i5fKEmTbu%2FqCy1B1Oq92wYFL50rDzttOf3lA3AXARfkOY5X%2B%2FwX1angku%2BmqCYxTrHo3F1YfUV9pRMxPHbQnSAldz8SW%2FeOrnEfVsYQmlFaW9RukzlDZkTMb0xvURKQWsfDCkgHwgbw%2BcNalpQPmZ7iwdUNu%2FsPdPYFrBUvVNSuesN8uBFf4UO9CPhDOouL6CFji9uEped80uNw6LWYfRL%2FJwwuohREC01GVC0%2BNNYolJ0dSyo6cMCUimuSxItLrHGkP2J4gUkPTPeeVrR067S4kJ7GffliAabzKMyN7A%2BxNy%2BLiH8ViyMMObwsskGOqUBiABty8BBcRwOA8g%2FjekaY3kGU7FdjZT2yjsnx5suJ30ze5UgU%2BTzlC5JoEX7vmfejMLxwgQOjnqHlElP2D4rX5ATZk97GFbmLDhY1pC6rENrK48lQFMEfkOP7ZGNudbZo9H7Yb8PSJhZf5Gb2u4l1AA5LPdkPG%2BAasWYhJNhNEjYhLxAXjzEybAk97WZ124DOla%2BnMfYi%2BSsa4LG%2FVvyvgba%2BxKT&X-Amz-Signature=e812f208c170dce1578fc37b1ac35b26014489e1f7b84b3e8f23871266f96be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMRWDYC%2F20251201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251201T011513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC2e7gHVBskK7t%2BbUeFTiAmMnOhfGiKwVW3r1rgjNWBCgIgX2P6ItSC4BPK%2FzSKuuAmBSmi8elOI4Pi6n9X5CkmJz4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe4HhtDpuQqeFtpsCrcAz4te684F%2FVuy12wA5hxyQjEsAn3T8OWEIYWF8fCO3upP3LCErEad67WrLvMOHouF42yZ1O6xtgO5o%2F%2FhQiFr1IAbCswO7dAjLOMRh10n4chTYfACU7%2BteBuMSsijAjKaNa7G8CmZ7T7QuVD3Kl5%2BmqJf6b3wC7A6F1MLFN44V6OjVN9SXPX4v6E81EdgT%2BDdqSZ2BueWN8R%2Fa2%2B5G9jZE4tiWaRppsw7jQWEyzFC7fJuXdtsEJG6XXI68Af4exnG13ynNLVH5QPf16H0B6L%2FCckMmBR0f%2FeNeenzbbuaIDgUS0Kb4J0hPWs33Ed7egke58ih7i5fKEmTbu%2FqCy1B1Oq92wYFL50rDzttOf3lA3AXARfkOY5X%2B%2FwX1angku%2BmqCYxTrHo3F1YfUV9pRMxPHbQnSAldz8SW%2FeOrnEfVsYQmlFaW9RukzlDZkTMb0xvURKQWsfDCkgHwgbw%2BcNalpQPmZ7iwdUNu%2FsPdPYFrBUvVNSuesN8uBFf4UO9CPhDOouL6CFji9uEped80uNw6LWYfRL%2FJwwuohREC01GVC0%2BNNYolJ0dSyo6cMCUimuSxItLrHGkP2J4gUkPTPeeVrR067S4kJ7GffliAabzKMyN7A%2BxNy%2BLiH8ViyMMObwsskGOqUBiABty8BBcRwOA8g%2FjekaY3kGU7FdjZT2yjsnx5suJ30ze5UgU%2BTzlC5JoEX7vmfejMLxwgQOjnqHlElP2D4rX5ATZk97GFbmLDhY1pC6rENrK48lQFMEfkOP7ZGNudbZo9H7Yb8PSJhZf5Gb2u4l1AA5LPdkPG%2BAasWYhJNhNEjYhLxAXjzEybAk97WZ124DOla%2BnMfYi%2BSsa4LG%2FVvyvgba%2BxKT&X-Amz-Signature=f95197992de1d15a382f0e3f1752c2b9b6e2d1c50de17e45d236e8036160b841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWMRWDYC%2F20251201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251201T011513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQC2e7gHVBskK7t%2BbUeFTiAmMnOhfGiKwVW3r1rgjNWBCgIgX2P6ItSC4BPK%2FzSKuuAmBSmi8elOI4Pi6n9X5CkmJz4qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCe4HhtDpuQqeFtpsCrcAz4te684F%2FVuy12wA5hxyQjEsAn3T8OWEIYWF8fCO3upP3LCErEad67WrLvMOHouF42yZ1O6xtgO5o%2F%2FhQiFr1IAbCswO7dAjLOMRh10n4chTYfACU7%2BteBuMSsijAjKaNa7G8CmZ7T7QuVD3Kl5%2BmqJf6b3wC7A6F1MLFN44V6OjVN9SXPX4v6E81EdgT%2BDdqSZ2BueWN8R%2Fa2%2B5G9jZE4tiWaRppsw7jQWEyzFC7fJuXdtsEJG6XXI68Af4exnG13ynNLVH5QPf16H0B6L%2FCckMmBR0f%2FeNeenzbbuaIDgUS0Kb4J0hPWs33Ed7egke58ih7i5fKEmTbu%2FqCy1B1Oq92wYFL50rDzttOf3lA3AXARfkOY5X%2B%2FwX1angku%2BmqCYxTrHo3F1YfUV9pRMxPHbQnSAldz8SW%2FeOrnEfVsYQmlFaW9RukzlDZkTMb0xvURKQWsfDCkgHwgbw%2BcNalpQPmZ7iwdUNu%2FsPdPYFrBUvVNSuesN8uBFf4UO9CPhDOouL6CFji9uEped80uNw6LWYfRL%2FJwwuohREC01GVC0%2BNNYolJ0dSyo6cMCUimuSxItLrHGkP2J4gUkPTPeeVrR067S4kJ7GffliAabzKMyN7A%2BxNy%2BLiH8ViyMMObwsskGOqUBiABty8BBcRwOA8g%2FjekaY3kGU7FdjZT2yjsnx5suJ30ze5UgU%2BTzlC5JoEX7vmfejMLxwgQOjnqHlElP2D4rX5ATZk97GFbmLDhY1pC6rENrK48lQFMEfkOP7ZGNudbZo9H7Yb8PSJhZf5Gb2u4l1AA5LPdkPG%2BAasWYhJNhNEjYhLxAXjzEybAk97WZ124DOla%2BnMfYi%2BSsa4LG%2FVvyvgba%2BxKT&X-Amz-Signature=196b0612bfb19c89543df45688730468c0272324e6f2bc87d81c0bb116454c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSNX5OTH%2F20251201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251201T011512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIH4qa24FyQ6CeosDr%2BNlwYUCKJiwLt%2FjTh%2BI5cHCu%2FHWAiEAg4EogNi9vatai14bRS6fUEcEWHqMSeBM7k6lJX7grvcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoqAYSqR9T5JMd6jyrcA80cZLLVtfQqTp5w5u36Q0%2F2OmvLMJ6jWUZ3NXHfShWzOzsPyxHjcXFIOago9ZX%2BdbbENGdGTgtTrsJyp6uB4DCwgllxNCapWt3UFB8Mc53yeCEQ2fmJyXNNuVo4ZbVyPukpdzpTXPU0YHrQ0ihQEs93NWnvq%2Bjy65yfRao2bwUU2Oescf6hLwsrFNqlSVJgWjlVTys%2BrcN36XpQ6spaj0kC24ofmsbZzmNDM%2FwgguFUolGp3LumpbCRES0anjXUfxkbPaInS0r%2F2dvxQ%2BphbCwR%2Bw4wQObfjNhzpI%2BfCN3RVCtCAq26JWazMcBI%2FB1X31webV1H9rCIpBZBHlHKK6kEFxh69%2FEOYnQDua0icRQG2X9nJ6eofuAUl0t2E4tGWTWhrhORaehbN4t32ptoA%2BzbDvSA0%2FQxnERHvWg3n%2BLZPLD7iFbYlu7TDQQPuUPe9JJZWe3RxuR5QIIJk9ji0R8CWp%2FKN3gGZnIxfL6pyUSoyXKCCCwBGPJHUFHobaGbsrPU4gBrW7eXc2PRcMwPAuIGJCQLCsPYmqpC%2FhYcyBG87BGWyZKeStmelvqKqjKOqXr8BznRP8BUyvLfUCClPZQFTeFL2B4byW6Kt7UZUld32nIVMMHUU6OA%2BnD8MMPpsskGOqUB72lOWv59fa3T%2BE%2ByqDbilsVtiDy8dXdZp4rfRXPF3AgnipzZdCF1HEnFBa8%2B4CxVyLwx8wm5mKZqXZJpQ1qVkzS7J%2Buu%2FLbVWh9utf96Bu7zGu%2FRXd5hNi4ZaWagXvIqTwjOexdXsTjFI%2BFpLRV1ZI2%2B7t138xO0C3KVUCQR2%2BywZBkdjlzHW8%2FetfAvDaOtRx21IbnuC0wMwQxDUUp%2FNHrL0Py2&X-Amz-Signature=2d9a1ff695692920c0085b3f0ffa1dede2f29ebf568903c7409c1ed9688b57ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

