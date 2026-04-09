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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FAAMX6J%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC7ejXhRyt8VDj0tOd7W3LbdkJUg0AeVC6qO%2FiGzyuIbwIhAIfHu%2F236YF06dr34Uc%2BqExngxEr07AMyTvNCKr9z%2FerKv8DCAsQABoMNjM3NDIzMTgzODA1IgzhIc18y8C8Z2%2Bm80Iq3ANSt3ejTB8zgtgjJRWAR2zDXM3Q1l5HkD7ux%2Fmjyf5qUL5iD6FAUL7%2FDRmv92FvMA6Bn69fdgiIO9i%2BowovN2BwCMQLqxVRdqMIQIHLbRA4CsrEj4oiKkfXE29zZ5eNUDX3VvOoPBOogD5PZbQcMEiQG6xNOJuWWahJw%2FfOa3aE7mLc%2FGLZSMc8jEee5PGFxPazMFKQ%2FDUdvGKi%2BFY61jTsZoT1n42qmoVy%2FIPNt4kC024trmo4X3BlpSMGnTH15YJBopF4xjPrdPweAmaUWW0FEZ4%2FRFKVl8wFQPMznrMBbiajng6vt%2Fg8KzgS19mXzPj367q5mzxBCo4j9qcy8x9CcG4oaaC8aHsM%2BTMlO765qU5swP76TbSMZ4LJcNqbGT0K30yg9E%2FzTp%2F%2Bx49tyDFx%2BfFZe6wfYscy%2BCz80fUOrKgX57x6Jc9p3pcOo5eIUbzn3VHRf8F3zSUY1ihVHjMOoRjow%2FmkhKgYQKGhYZW%2Fd5GOqU%2BQyS9Ck3hq9VbnC2bORXJceGSXQXvviYfdSOecFV3thiv9zMmAuIgy7vm6PJuaigvGj19QEQxYBQn%2FGGjJ88ets%2FMEjT12cEwE%2FD6rNkKzxVxeXW%2Bd8H8c2od8BlhMQ0prQCcBhBLvnzCvl9zOBjqkAaSnwc5w1QEjY8RSXMqmxTG%2BvZNJiiAv7vvpZd%2BebvhpKYwhO%2BpgZH%2FFHFrEFaZUp6%2F2LQ9kgsyDsY34HBvAC3ZdpgLRU3%2BbGll9BCvAOrCrWvsfZV%2B1bNt3IN20zuOFfeNZhQQEIZZwNHP2EVBpEKqCZunrWmZ%2FxX2qsZu%2FJbDqFWWrR8nJ%2FbA5fMsMbIeMq29sn8JPbHQksTvEtAGabe1%2Bk4IY&X-Amz-Signature=233fd4a105998d0887f2d87ca99d0dfb09681c184a1a1465249416ab145bd495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QZ5EZS%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICMWx8cP2eOri9giEeIzquCK%2FbvQBo0PQuWAb%2B8HQIlfAiBEstor1rECKq2A7pqw1onPY0z0C0%2BoBTJWObnYKXPbair%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMbdwMqm%2BLj9LMdUOSKtwDVUjAYqZcEZQ54rO4GH50gSi3GvHj9H5Oa7RSDdJ19sleCVVTmEZueljzQNGQ7w%2BbECwRfXO7zY7aMpPzY67D9NLkvGt%2FGgWQ9CFUNEE148WqHvJGn%2BrpxG%2B%2BdtkRyAL2r1gzP2mHoLkm2lZg3vGx947NHJU%2Fkb8C0tVrJh5%2BDX5lHTOJdz43JklPZiFhvv%2BfNC5B9bx7Tf5qYKay%2BIDAOBpQVJihlZ0gOHTVsvHsONsc8mlvxjr5rJi%2Beeb%2FGo1F8fiPINn2%2FXzuGolw8WCULazcnK14I3YCe1IIgikwH8KT0wsqagjBS5LjdrQs5vRqlkMm4A4CVzgGJefObltkuqbWE5e8UptQRfxddInv51MgleY0p3GF5reQEI%2FmVip%2F9PlMhh4AU38I3W4ZPFQsnZmk66bpVuJ1GvrhC%2BQGYNHNaV7FYSbisizw%2BDQ28e61b%2B4isv3cDfmaBZPaUb0UYQ9KJf%2F4C%2BHrCcQdnr6In9Mgp%2FL0UKTV0T%2F8YiEcGvHBdeCuP%2FTpVlsm1LXDih47PL9baGpJ%2BLHiMU6P5cIjX4QaR1J631dxH8GvZo8B26gfGx42KvKiiA8KjuAxotfCFOp2NRqcSFYykmz3N5Hq1FlmdofmZ1RkwokL4jowm5nczgY6pgFVNNOXvBOJUhGxyDg8BV56RYzmgonGB1ttRK%2Fx0L6cC9PN23R%2Fj1M9ZhrB3vj4Jbit5GqK3kMXuu%2BNPkEMZsp25rxrCnJk6ROtDGw0R%2BpYEdf6uVmA0GPkPd1esZPo0XnDpkl1b0pwjv%2FyJkT0zzxt1dBlAreIzcdcRP6bqk%2BdhMz5DJbK5mVXzTCBZT6oC63DaIG5xU%2FMHOSrgVWVjvHrWBpu%2F6Ee&X-Amz-Signature=f6117404d257ce0feeaabfa47f7538c9ee94757b8fe94649f5902b6f63a7527d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QZ5EZS%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICMWx8cP2eOri9giEeIzquCK%2FbvQBo0PQuWAb%2B8HQIlfAiBEstor1rECKq2A7pqw1onPY0z0C0%2BoBTJWObnYKXPbair%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMbdwMqm%2BLj9LMdUOSKtwDVUjAYqZcEZQ54rO4GH50gSi3GvHj9H5Oa7RSDdJ19sleCVVTmEZueljzQNGQ7w%2BbECwRfXO7zY7aMpPzY67D9NLkvGt%2FGgWQ9CFUNEE148WqHvJGn%2BrpxG%2B%2BdtkRyAL2r1gzP2mHoLkm2lZg3vGx947NHJU%2Fkb8C0tVrJh5%2BDX5lHTOJdz43JklPZiFhvv%2BfNC5B9bx7Tf5qYKay%2BIDAOBpQVJihlZ0gOHTVsvHsONsc8mlvxjr5rJi%2Beeb%2FGo1F8fiPINn2%2FXzuGolw8WCULazcnK14I3YCe1IIgikwH8KT0wsqagjBS5LjdrQs5vRqlkMm4A4CVzgGJefObltkuqbWE5e8UptQRfxddInv51MgleY0p3GF5reQEI%2FmVip%2F9PlMhh4AU38I3W4ZPFQsnZmk66bpVuJ1GvrhC%2BQGYNHNaV7FYSbisizw%2BDQ28e61b%2B4isv3cDfmaBZPaUb0UYQ9KJf%2F4C%2BHrCcQdnr6In9Mgp%2FL0UKTV0T%2F8YiEcGvHBdeCuP%2FTpVlsm1LXDih47PL9baGpJ%2BLHiMU6P5cIjX4QaR1J631dxH8GvZo8B26gfGx42KvKiiA8KjuAxotfCFOp2NRqcSFYykmz3N5Hq1FlmdofmZ1RkwokL4jowm5nczgY6pgFVNNOXvBOJUhGxyDg8BV56RYzmgonGB1ttRK%2Fx0L6cC9PN23R%2Fj1M9ZhrB3vj4Jbit5GqK3kMXuu%2BNPkEMZsp25rxrCnJk6ROtDGw0R%2BpYEdf6uVmA0GPkPd1esZPo0XnDpkl1b0pwjv%2FyJkT0zzxt1dBlAreIzcdcRP6bqk%2BdhMz5DJbK5mVXzTCBZT6oC63DaIG5xU%2FMHOSrgVWVjvHrWBpu%2F6Ee&X-Amz-Signature=3567c26998d2d100705863e56cd7bf8df3dec966a62664680c35bef93d6cb8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QZ5EZS%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICMWx8cP2eOri9giEeIzquCK%2FbvQBo0PQuWAb%2B8HQIlfAiBEstor1rECKq2A7pqw1onPY0z0C0%2BoBTJWObnYKXPbair%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMbdwMqm%2BLj9LMdUOSKtwDVUjAYqZcEZQ54rO4GH50gSi3GvHj9H5Oa7RSDdJ19sleCVVTmEZueljzQNGQ7w%2BbECwRfXO7zY7aMpPzY67D9NLkvGt%2FGgWQ9CFUNEE148WqHvJGn%2BrpxG%2B%2BdtkRyAL2r1gzP2mHoLkm2lZg3vGx947NHJU%2Fkb8C0tVrJh5%2BDX5lHTOJdz43JklPZiFhvv%2BfNC5B9bx7Tf5qYKay%2BIDAOBpQVJihlZ0gOHTVsvHsONsc8mlvxjr5rJi%2Beeb%2FGo1F8fiPINn2%2FXzuGolw8WCULazcnK14I3YCe1IIgikwH8KT0wsqagjBS5LjdrQs5vRqlkMm4A4CVzgGJefObltkuqbWE5e8UptQRfxddInv51MgleY0p3GF5reQEI%2FmVip%2F9PlMhh4AU38I3W4ZPFQsnZmk66bpVuJ1GvrhC%2BQGYNHNaV7FYSbisizw%2BDQ28e61b%2B4isv3cDfmaBZPaUb0UYQ9KJf%2F4C%2BHrCcQdnr6In9Mgp%2FL0UKTV0T%2F8YiEcGvHBdeCuP%2FTpVlsm1LXDih47PL9baGpJ%2BLHiMU6P5cIjX4QaR1J631dxH8GvZo8B26gfGx42KvKiiA8KjuAxotfCFOp2NRqcSFYykmz3N5Hq1FlmdofmZ1RkwokL4jowm5nczgY6pgFVNNOXvBOJUhGxyDg8BV56RYzmgonGB1ttRK%2Fx0L6cC9PN23R%2Fj1M9ZhrB3vj4Jbit5GqK3kMXuu%2BNPkEMZsp25rxrCnJk6ROtDGw0R%2BpYEdf6uVmA0GPkPd1esZPo0XnDpkl1b0pwjv%2FyJkT0zzxt1dBlAreIzcdcRP6bqk%2BdhMz5DJbK5mVXzTCBZT6oC63DaIG5xU%2FMHOSrgVWVjvHrWBpu%2F6Ee&X-Amz-Signature=63dda4e37df3c902bf091c6eb5a3e39b9d45e9f513732d6b459153ab927c2be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QZ5EZS%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICMWx8cP2eOri9giEeIzquCK%2FbvQBo0PQuWAb%2B8HQIlfAiBEstor1rECKq2A7pqw1onPY0z0C0%2BoBTJWObnYKXPbair%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMbdwMqm%2BLj9LMdUOSKtwDVUjAYqZcEZQ54rO4GH50gSi3GvHj9H5Oa7RSDdJ19sleCVVTmEZueljzQNGQ7w%2BbECwRfXO7zY7aMpPzY67D9NLkvGt%2FGgWQ9CFUNEE148WqHvJGn%2BrpxG%2B%2BdtkRyAL2r1gzP2mHoLkm2lZg3vGx947NHJU%2Fkb8C0tVrJh5%2BDX5lHTOJdz43JklPZiFhvv%2BfNC5B9bx7Tf5qYKay%2BIDAOBpQVJihlZ0gOHTVsvHsONsc8mlvxjr5rJi%2Beeb%2FGo1F8fiPINn2%2FXzuGolw8WCULazcnK14I3YCe1IIgikwH8KT0wsqagjBS5LjdrQs5vRqlkMm4A4CVzgGJefObltkuqbWE5e8UptQRfxddInv51MgleY0p3GF5reQEI%2FmVip%2F9PlMhh4AU38I3W4ZPFQsnZmk66bpVuJ1GvrhC%2BQGYNHNaV7FYSbisizw%2BDQ28e61b%2B4isv3cDfmaBZPaUb0UYQ9KJf%2F4C%2BHrCcQdnr6In9Mgp%2FL0UKTV0T%2F8YiEcGvHBdeCuP%2FTpVlsm1LXDih47PL9baGpJ%2BLHiMU6P5cIjX4QaR1J631dxH8GvZo8B26gfGx42KvKiiA8KjuAxotfCFOp2NRqcSFYykmz3N5Hq1FlmdofmZ1RkwokL4jowm5nczgY6pgFVNNOXvBOJUhGxyDg8BV56RYzmgonGB1ttRK%2Fx0L6cC9PN23R%2Fj1M9ZhrB3vj4Jbit5GqK3kMXuu%2BNPkEMZsp25rxrCnJk6ROtDGw0R%2BpYEdf6uVmA0GPkPd1esZPo0XnDpkl1b0pwjv%2FyJkT0zzxt1dBlAreIzcdcRP6bqk%2BdhMz5DJbK5mVXzTCBZT6oC63DaIG5xU%2FMHOSrgVWVjvHrWBpu%2F6Ee&X-Amz-Signature=b04f86689654c162446d28b0f8aeadb26d658c8f65ec68606c06b2b82fa163a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QZ5EZS%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICMWx8cP2eOri9giEeIzquCK%2FbvQBo0PQuWAb%2B8HQIlfAiBEstor1rECKq2A7pqw1onPY0z0C0%2BoBTJWObnYKXPbair%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMbdwMqm%2BLj9LMdUOSKtwDVUjAYqZcEZQ54rO4GH50gSi3GvHj9H5Oa7RSDdJ19sleCVVTmEZueljzQNGQ7w%2BbECwRfXO7zY7aMpPzY67D9NLkvGt%2FGgWQ9CFUNEE148WqHvJGn%2BrpxG%2B%2BdtkRyAL2r1gzP2mHoLkm2lZg3vGx947NHJU%2Fkb8C0tVrJh5%2BDX5lHTOJdz43JklPZiFhvv%2BfNC5B9bx7Tf5qYKay%2BIDAOBpQVJihlZ0gOHTVsvHsONsc8mlvxjr5rJi%2Beeb%2FGo1F8fiPINn2%2FXzuGolw8WCULazcnK14I3YCe1IIgikwH8KT0wsqagjBS5LjdrQs5vRqlkMm4A4CVzgGJefObltkuqbWE5e8UptQRfxddInv51MgleY0p3GF5reQEI%2FmVip%2F9PlMhh4AU38I3W4ZPFQsnZmk66bpVuJ1GvrhC%2BQGYNHNaV7FYSbisizw%2BDQ28e61b%2B4isv3cDfmaBZPaUb0UYQ9KJf%2F4C%2BHrCcQdnr6In9Mgp%2FL0UKTV0T%2F8YiEcGvHBdeCuP%2FTpVlsm1LXDih47PL9baGpJ%2BLHiMU6P5cIjX4QaR1J631dxH8GvZo8B26gfGx42KvKiiA8KjuAxotfCFOp2NRqcSFYykmz3N5Hq1FlmdofmZ1RkwokL4jowm5nczgY6pgFVNNOXvBOJUhGxyDg8BV56RYzmgonGB1ttRK%2Fx0L6cC9PN23R%2Fj1M9ZhrB3vj4Jbit5GqK3kMXuu%2BNPkEMZsp25rxrCnJk6ROtDGw0R%2BpYEdf6uVmA0GPkPd1esZPo0XnDpkl1b0pwjv%2FyJkT0zzxt1dBlAreIzcdcRP6bqk%2BdhMz5DJbK5mVXzTCBZT6oC63DaIG5xU%2FMHOSrgVWVjvHrWBpu%2F6Ee&X-Amz-Signature=c88293c169bf1c6755753128833b5832097709ac407e3764cd80a60dc9f3459f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FAAMX6J%2F20260409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260409T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC7ejXhRyt8VDj0tOd7W3LbdkJUg0AeVC6qO%2FiGzyuIbwIhAIfHu%2F236YF06dr34Uc%2BqExngxEr07AMyTvNCKr9z%2FerKv8DCAsQABoMNjM3NDIzMTgzODA1IgzhIc18y8C8Z2%2Bm80Iq3ANSt3ejTB8zgtgjJRWAR2zDXM3Q1l5HkD7ux%2Fmjyf5qUL5iD6FAUL7%2FDRmv92FvMA6Bn69fdgiIO9i%2BowovN2BwCMQLqxVRdqMIQIHLbRA4CsrEj4oiKkfXE29zZ5eNUDX3VvOoPBOogD5PZbQcMEiQG6xNOJuWWahJw%2FfOa3aE7mLc%2FGLZSMc8jEee5PGFxPazMFKQ%2FDUdvGKi%2BFY61jTsZoT1n42qmoVy%2FIPNt4kC024trmo4X3BlpSMGnTH15YJBopF4xjPrdPweAmaUWW0FEZ4%2FRFKVl8wFQPMznrMBbiajng6vt%2Fg8KzgS19mXzPj367q5mzxBCo4j9qcy8x9CcG4oaaC8aHsM%2BTMlO765qU5swP76TbSMZ4LJcNqbGT0K30yg9E%2FzTp%2F%2Bx49tyDFx%2BfFZe6wfYscy%2BCz80fUOrKgX57x6Jc9p3pcOo5eIUbzn3VHRf8F3zSUY1ihVHjMOoRjow%2FmkhKgYQKGhYZW%2Fd5GOqU%2BQyS9Ck3hq9VbnC2bORXJceGSXQXvviYfdSOecFV3thiv9zMmAuIgy7vm6PJuaigvGj19QEQxYBQn%2FGGjJ88ets%2FMEjT12cEwE%2FD6rNkKzxVxeXW%2Bd8H8c2od8BlhMQ0prQCcBhBLvnzCvl9zOBjqkAaSnwc5w1QEjY8RSXMqmxTG%2BvZNJiiAv7vvpZd%2BebvhpKYwhO%2BpgZH%2FFHFrEFaZUp6%2F2LQ9kgsyDsY34HBvAC3ZdpgLRU3%2BbGll9BCvAOrCrWvsfZV%2B1bNt3IN20zuOFfeNZhQQEIZZwNHP2EVBpEKqCZunrWmZ%2FxX2qsZu%2FJbDqFWWrR8nJ%2FbA5fMsMbIeMq29sn8JPbHQksTvEtAGabe1%2Bk4IY&X-Amz-Signature=cbc53c7fe57da93518b5381a08a1c6068245c9e0de033aa6fa7432d0332f1b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

