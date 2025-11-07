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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UALGW3F%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T010148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZzEQbURK9anWqYOrY9PEbIw63JE7AoL15orbiziTUwAiEApAeL85IF5qSk5C75pjHQPWtt1z39ekIxsx%2F3aAQ9E0sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtW7xQJ1oG%2FWvypjyrcA%2FlluYR1OWIYwImX%2BnPHzLexGUnFx%2FvoGbvsvJhLSEGB4u8AktYcnBfOqIXQoYd0Ie6XUUCy1XaYdDVKTqyVXdEfvXU3L8T6PIogCfgshB27SqE3LaqfuSnIVVwGbsYNYq4%2FUbPzkm8xhA0nrOJSIXi1wAmVgIR0pMsZzI9YNnv1v%2B%2Bf0%2FzbMU%2BE3qNFiH%2BJ3rL%2B074Rv%2Ft8YVPf%2Fd%2BpzQngrvuVXYlbZfoOZNTllpZKbr40a4P6HuCJQNoB8%2FpjbSFoWq4MCWcLmytbM25NH76MEZtFCbJOqGj4hAZgRUVLtmgReX9OIZyrF98rhmmFGhuXQaqUsVDFr3xFnMYzYhUdYAomyM2xD%2FR3s%2Fle9FBm%2FpXUGne2m5E%2Bg8MkP0qbB%2FtQTt6YbrHMzsrOzV4mHojOGAVwwdtI16RN73dSwAvelyQuAnZyZGPTDJmnC9SjRxcQpplEL9fWruS56CTcdAIF%2FuX9ppljAmtspEJyfnJE2wcGu3O0VbQ%2BBbjRF2DoQD3n%2FNs1YG3SxuFux3KXOAfY83eLpaTmJyzDE7RH%2Fpq1Z6EIA5v302pT8YLRXPjC3LveKiQQ9Odz2GGHfC%2BCyfAYDB3dPrir0VIKLWUqQVb9pxOMkLg1i25nyh%2BTMNaBtcgGOqUBbFj%2F03djaZLvfl55Bop5QncsNRmoFALhuG65ZB2tqyiekjSzrPonsXjLMXNBOVraDW53x%2Bs%2Fyy7Ej5tHqxQ35rQj%2FjqBT%2Fmo6haF9WqO3zhgBxtHyBO03K%2BD%2FBnzUgXHv5wg5fD9tYs54%2BRgAR0DJ7SCAf%2BZ4TNUoAk1NT3HMKoULzJew4VsgLrSbFxEhpvwPvUblpE3C%2B2F9QUmb7NDxSmYZX01&X-Amz-Signature=425f4dbdee4bbadf9db9b1f6436d1225ac5f1ae404579a8a2076a39833dfd049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T64JHMZ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T010149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4IEuQ%2Bge8Oku%2Ba1tdqDtp0%2BVLcf1qDFITwxaH7EJsBgIgCM%2BZrz5kQb9FLHZMP02vqFZ7EweVd3ELZfqO0wJiv%2F0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwkQyNeEEFbpRqbEircA5uXwC5PsyWRZvp74agLbLRbk9F%2Bxd7fz9ntFp%2FR0xkvYfksPnyGMp7zeyosuvc1ooZbKxcfT3wuOyLWZHUCROrKtoc%2FBXc6uLGysLxsd9NBp6oyRv%2FJLbxIUHkEgc%2BbJwopaZVgoEChCXPeTPMI7BdoktYEi1ZSlB4q1L%2F11TwAwF42QEzGzbFIQ%2FCjjrKdCxBAQfMOM%2F83xP8yKDwVElGJoAbBZSBXQbJ123CE6dvM%2BEUXG5oYvibVC%2FtBa8JNZkXGoL6waohLefbYFV7aq9Wu85rQ%2BxBn2rMQPDMs2C45Ygfqkop4CsUETTZQZxa6%2FS1GsNh467ofmz8Q%2By3aDndMPC5%2BfCdUDMN7nMFkzDFpjyopmPntxO8JhxOgIHbu1tnOJZYhJQ0DDb4S4Mzzw0zTb9IvTsJeb3X8Ji6VTV9y4Zaa5qh3vBlvOdJBpVMNwhXi2id4QfqPqUr5ZOjqLjPe060d84UiuwxokSMh6nB6Xe0JY7ZzHUVGjxqIXdgqrwyU37UTueUTOtdgafSRiFQyVPDhNx3PF41r%2B0Y%2BFyQrbNi2u%2Fgr2VQc81MvCoJQSn80aWUQ%2FFtDcenSTKwxXPemNEMrU0AWFexBD9ejR7nYQ28P89t3iOKIZI6fMPOBtcgGOqUB4CRYQdRnX1LFj1O569805JAo34WTMCAFo7UmSCADzpjEGsiNFZJIn4n0jhFGuDyKDo1oAwYK8QYN%2FFOvXmMDKdHNnE9tBgfkfZ9ZDskaIi6BgY3l5DSpiNUVme9xZkLM45MeFm2Nbuigsu8BvMbYGewg7K%2B30RykWgDReraQLTM%2F6Hir8M587YRQxHO9FslB5HJSD4r40gO3xG7MxEH8RUybZrs3&X-Amz-Signature=5becf748f1aa8b07472e66ea497632dbbf94726a1f5d2393335e36017d9240c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T64JHMZ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T010149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4IEuQ%2Bge8Oku%2Ba1tdqDtp0%2BVLcf1qDFITwxaH7EJsBgIgCM%2BZrz5kQb9FLHZMP02vqFZ7EweVd3ELZfqO0wJiv%2F0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwkQyNeEEFbpRqbEircA5uXwC5PsyWRZvp74agLbLRbk9F%2Bxd7fz9ntFp%2FR0xkvYfksPnyGMp7zeyosuvc1ooZbKxcfT3wuOyLWZHUCROrKtoc%2FBXc6uLGysLxsd9NBp6oyRv%2FJLbxIUHkEgc%2BbJwopaZVgoEChCXPeTPMI7BdoktYEi1ZSlB4q1L%2F11TwAwF42QEzGzbFIQ%2FCjjrKdCxBAQfMOM%2F83xP8yKDwVElGJoAbBZSBXQbJ123CE6dvM%2BEUXG5oYvibVC%2FtBa8JNZkXGoL6waohLefbYFV7aq9Wu85rQ%2BxBn2rMQPDMs2C45Ygfqkop4CsUETTZQZxa6%2FS1GsNh467ofmz8Q%2By3aDndMPC5%2BfCdUDMN7nMFkzDFpjyopmPntxO8JhxOgIHbu1tnOJZYhJQ0DDb4S4Mzzw0zTb9IvTsJeb3X8Ji6VTV9y4Zaa5qh3vBlvOdJBpVMNwhXi2id4QfqPqUr5ZOjqLjPe060d84UiuwxokSMh6nB6Xe0JY7ZzHUVGjxqIXdgqrwyU37UTueUTOtdgafSRiFQyVPDhNx3PF41r%2B0Y%2BFyQrbNi2u%2Fgr2VQc81MvCoJQSn80aWUQ%2FFtDcenSTKwxXPemNEMrU0AWFexBD9ejR7nYQ28P89t3iOKIZI6fMPOBtcgGOqUB4CRYQdRnX1LFj1O569805JAo34WTMCAFo7UmSCADzpjEGsiNFZJIn4n0jhFGuDyKDo1oAwYK8QYN%2FFOvXmMDKdHNnE9tBgfkfZ9ZDskaIi6BgY3l5DSpiNUVme9xZkLM45MeFm2Nbuigsu8BvMbYGewg7K%2B30RykWgDReraQLTM%2F6Hir8M587YRQxHO9FslB5HJSD4r40gO3xG7MxEH8RUybZrs3&X-Amz-Signature=db7a5cdbc42c9197532eb08abc73af640daeb36a0e9edbd039d7961fd6be4094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T64JHMZ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T010149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4IEuQ%2Bge8Oku%2Ba1tdqDtp0%2BVLcf1qDFITwxaH7EJsBgIgCM%2BZrz5kQb9FLHZMP02vqFZ7EweVd3ELZfqO0wJiv%2F0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwkQyNeEEFbpRqbEircA5uXwC5PsyWRZvp74agLbLRbk9F%2Bxd7fz9ntFp%2FR0xkvYfksPnyGMp7zeyosuvc1ooZbKxcfT3wuOyLWZHUCROrKtoc%2FBXc6uLGysLxsd9NBp6oyRv%2FJLbxIUHkEgc%2BbJwopaZVgoEChCXPeTPMI7BdoktYEi1ZSlB4q1L%2F11TwAwF42QEzGzbFIQ%2FCjjrKdCxBAQfMOM%2F83xP8yKDwVElGJoAbBZSBXQbJ123CE6dvM%2BEUXG5oYvibVC%2FtBa8JNZkXGoL6waohLefbYFV7aq9Wu85rQ%2BxBn2rMQPDMs2C45Ygfqkop4CsUETTZQZxa6%2FS1GsNh467ofmz8Q%2By3aDndMPC5%2BfCdUDMN7nMFkzDFpjyopmPntxO8JhxOgIHbu1tnOJZYhJQ0DDb4S4Mzzw0zTb9IvTsJeb3X8Ji6VTV9y4Zaa5qh3vBlvOdJBpVMNwhXi2id4QfqPqUr5ZOjqLjPe060d84UiuwxokSMh6nB6Xe0JY7ZzHUVGjxqIXdgqrwyU37UTueUTOtdgafSRiFQyVPDhNx3PF41r%2B0Y%2BFyQrbNi2u%2Fgr2VQc81MvCoJQSn80aWUQ%2FFtDcenSTKwxXPemNEMrU0AWFexBD9ejR7nYQ28P89t3iOKIZI6fMPOBtcgGOqUB4CRYQdRnX1LFj1O569805JAo34WTMCAFo7UmSCADzpjEGsiNFZJIn4n0jhFGuDyKDo1oAwYK8QYN%2FFOvXmMDKdHNnE9tBgfkfZ9ZDskaIi6BgY3l5DSpiNUVme9xZkLM45MeFm2Nbuigsu8BvMbYGewg7K%2B30RykWgDReraQLTM%2F6Hir8M587YRQxHO9FslB5HJSD4r40gO3xG7MxEH8RUybZrs3&X-Amz-Signature=0020679aa39de761c81308151a02752b41d2524e9f52a2f40b97be7002e8c51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T64JHMZ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T010149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4IEuQ%2Bge8Oku%2Ba1tdqDtp0%2BVLcf1qDFITwxaH7EJsBgIgCM%2BZrz5kQb9FLHZMP02vqFZ7EweVd3ELZfqO0wJiv%2F0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwkQyNeEEFbpRqbEircA5uXwC5PsyWRZvp74agLbLRbk9F%2Bxd7fz9ntFp%2FR0xkvYfksPnyGMp7zeyosuvc1ooZbKxcfT3wuOyLWZHUCROrKtoc%2FBXc6uLGysLxsd9NBp6oyRv%2FJLbxIUHkEgc%2BbJwopaZVgoEChCXPeTPMI7BdoktYEi1ZSlB4q1L%2F11TwAwF42QEzGzbFIQ%2FCjjrKdCxBAQfMOM%2F83xP8yKDwVElGJoAbBZSBXQbJ123CE6dvM%2BEUXG5oYvibVC%2FtBa8JNZkXGoL6waohLefbYFV7aq9Wu85rQ%2BxBn2rMQPDMs2C45Ygfqkop4CsUETTZQZxa6%2FS1GsNh467ofmz8Q%2By3aDndMPC5%2BfCdUDMN7nMFkzDFpjyopmPntxO8JhxOgIHbu1tnOJZYhJQ0DDb4S4Mzzw0zTb9IvTsJeb3X8Ji6VTV9y4Zaa5qh3vBlvOdJBpVMNwhXi2id4QfqPqUr5ZOjqLjPe060d84UiuwxokSMh6nB6Xe0JY7ZzHUVGjxqIXdgqrwyU37UTueUTOtdgafSRiFQyVPDhNx3PF41r%2B0Y%2BFyQrbNi2u%2Fgr2VQc81MvCoJQSn80aWUQ%2FFtDcenSTKwxXPemNEMrU0AWFexBD9ejR7nYQ28P89t3iOKIZI6fMPOBtcgGOqUB4CRYQdRnX1LFj1O569805JAo34WTMCAFo7UmSCADzpjEGsiNFZJIn4n0jhFGuDyKDo1oAwYK8QYN%2FFOvXmMDKdHNnE9tBgfkfZ9ZDskaIi6BgY3l5DSpiNUVme9xZkLM45MeFm2Nbuigsu8BvMbYGewg7K%2B30RykWgDReraQLTM%2F6Hir8M587YRQxHO9FslB5HJSD4r40gO3xG7MxEH8RUybZrs3&X-Amz-Signature=715cfed35a56df252608c1f79d9ec9dbcf20728432343b7afbd111d081f9f4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T64JHMZ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T010149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4IEuQ%2Bge8Oku%2Ba1tdqDtp0%2BVLcf1qDFITwxaH7EJsBgIgCM%2BZrz5kQb9FLHZMP02vqFZ7EweVd3ELZfqO0wJiv%2F0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwkQyNeEEFbpRqbEircA5uXwC5PsyWRZvp74agLbLRbk9F%2Bxd7fz9ntFp%2FR0xkvYfksPnyGMp7zeyosuvc1ooZbKxcfT3wuOyLWZHUCROrKtoc%2FBXc6uLGysLxsd9NBp6oyRv%2FJLbxIUHkEgc%2BbJwopaZVgoEChCXPeTPMI7BdoktYEi1ZSlB4q1L%2F11TwAwF42QEzGzbFIQ%2FCjjrKdCxBAQfMOM%2F83xP8yKDwVElGJoAbBZSBXQbJ123CE6dvM%2BEUXG5oYvibVC%2FtBa8JNZkXGoL6waohLefbYFV7aq9Wu85rQ%2BxBn2rMQPDMs2C45Ygfqkop4CsUETTZQZxa6%2FS1GsNh467ofmz8Q%2By3aDndMPC5%2BfCdUDMN7nMFkzDFpjyopmPntxO8JhxOgIHbu1tnOJZYhJQ0DDb4S4Mzzw0zTb9IvTsJeb3X8Ji6VTV9y4Zaa5qh3vBlvOdJBpVMNwhXi2id4QfqPqUr5ZOjqLjPe060d84UiuwxokSMh6nB6Xe0JY7ZzHUVGjxqIXdgqrwyU37UTueUTOtdgafSRiFQyVPDhNx3PF41r%2B0Y%2BFyQrbNi2u%2Fgr2VQc81MvCoJQSn80aWUQ%2FFtDcenSTKwxXPemNEMrU0AWFexBD9ejR7nYQ28P89t3iOKIZI6fMPOBtcgGOqUB4CRYQdRnX1LFj1O569805JAo34WTMCAFo7UmSCADzpjEGsiNFZJIn4n0jhFGuDyKDo1oAwYK8QYN%2FFOvXmMDKdHNnE9tBgfkfZ9ZDskaIi6BgY3l5DSpiNUVme9xZkLM45MeFm2Nbuigsu8BvMbYGewg7K%2B30RykWgDReraQLTM%2F6Hir8M587YRQxHO9FslB5HJSD4r40gO3xG7MxEH8RUybZrs3&X-Amz-Signature=cfb3bf3ce90a18321c72fb269681507632415e058388f04d1be19ef8ca65bc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UALGW3F%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T010148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZzEQbURK9anWqYOrY9PEbIw63JE7AoL15orbiziTUwAiEApAeL85IF5qSk5C75pjHQPWtt1z39ekIxsx%2F3aAQ9E0sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtW7xQJ1oG%2FWvypjyrcA%2FlluYR1OWIYwImX%2BnPHzLexGUnFx%2FvoGbvsvJhLSEGB4u8AktYcnBfOqIXQoYd0Ie6XUUCy1XaYdDVKTqyVXdEfvXU3L8T6PIogCfgshB27SqE3LaqfuSnIVVwGbsYNYq4%2FUbPzkm8xhA0nrOJSIXi1wAmVgIR0pMsZzI9YNnv1v%2B%2Bf0%2FzbMU%2BE3qNFiH%2BJ3rL%2B074Rv%2Ft8YVPf%2Fd%2BpzQngrvuVXYlbZfoOZNTllpZKbr40a4P6HuCJQNoB8%2FpjbSFoWq4MCWcLmytbM25NH76MEZtFCbJOqGj4hAZgRUVLtmgReX9OIZyrF98rhmmFGhuXQaqUsVDFr3xFnMYzYhUdYAomyM2xD%2FR3s%2Fle9FBm%2FpXUGne2m5E%2Bg8MkP0qbB%2FtQTt6YbrHMzsrOzV4mHojOGAVwwdtI16RN73dSwAvelyQuAnZyZGPTDJmnC9SjRxcQpplEL9fWruS56CTcdAIF%2FuX9ppljAmtspEJyfnJE2wcGu3O0VbQ%2BBbjRF2DoQD3n%2FNs1YG3SxuFux3KXOAfY83eLpaTmJyzDE7RH%2Fpq1Z6EIA5v302pT8YLRXPjC3LveKiQQ9Odz2GGHfC%2BCyfAYDB3dPrir0VIKLWUqQVb9pxOMkLg1i25nyh%2BTMNaBtcgGOqUBbFj%2F03djaZLvfl55Bop5QncsNRmoFALhuG65ZB2tqyiekjSzrPonsXjLMXNBOVraDW53x%2Bs%2Fyy7Ej5tHqxQ35rQj%2FjqBT%2Fmo6haF9WqO3zhgBxtHyBO03K%2BD%2FBnzUgXHv5wg5fD9tYs54%2BRgAR0DJ7SCAf%2BZ4TNUoAk1NT3HMKoULzJew4VsgLrSbFxEhpvwPvUblpE3C%2B2F9QUmb7NDxSmYZX01&X-Amz-Signature=f4d311497122853ef5c5b51f916cc3574b8bac063cd8fc79a389c1fc6ec1aaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

