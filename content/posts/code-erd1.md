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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOH7ON4X%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjpQ84WZCKXsA9jbW8GzeZYKNazsKVeqwmVrF1MZJbZQIgD%2Bx%2BTT%2FAFJ%2BbiOzYceYxMp3wdni%2Fu2Sbovoamr2I2KcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKs%2BbI8Zcn3toEKVdCrcA6%2FbeoEIYfmtGT6YQpt%2F7sJVzP%2BQFUv0VhfDBKwYmxB2mGceswudiyB6ZIu30GSf7JNd4tg2XaEHiC5UC9RoLWfJTn2I%2FnAYsMGiha0zeR6tZ51NVposqsFBft6CNFmOWOwUwH5UBYz0T0wtkob6zAF2Fcid%2FxMhLzTHwvcTa3uIYPdKi4RidzhEFQXFauWMYgvBWxU6LlUnBOXtnRdSha6HhvjlFnaypPHHT09kphlGTXwwlCOuTxEp49ZHvqKqCyoCN4uJvSHaIhhxuNezCbuQZy%2FuhmHIenvVieUo%2Bq%2FHrWA4HuCS2gewRb7VHJJlvyhE4lyY3gcxcALowAPPSOdSRs1YoP7syQoOD9DMWhcDRod5VaU%2F8ck6HrA74llz4qRcpP8ksWEkZlai%2FJ%2ByY4JXkawttLwLd%2Bw%2B9Grp%2BGVtC8GCbMbSPoCUgD3STU3tuLG5HD%2FgTxMlW8frvXF24akEkF3q7Ce7TikqbfCFaaqVTSxK6r0ansCkiILP1Xu%2FZ4xhAktckHhS8xsZDxU2myFeNQrc2QP5WAzqCa7kFwhqBWVGn3xB7SfRsYPGY2306eyGFI2CIBd1FXLws2X5IgmW5bQ7FX3d6RY3L5eITLygJecDAgJTZ%2BO8lraDMJiDqckGOqUBCQthgkJbtmRnM1naIKy9MRCd%2BdSWphueBYFTKpWBWjOM%2BASywUP584wresPtsH0Xgfo54tVCXyH7E4h4vAm0fu56c9aWHx4T46WQo0jaxvU2PNHBesKmXUhR9185hPHpGjdtn4mwEuuSQ7BpNrza27zD23c7YhC6H3o7bEj32716r%2FurXtLw2h7YKePgmu4LvoNAUDWzZLm%2ByV0%2BH6h7mSOApx%2B0&X-Amz-Signature=e637fe40cd9367a003e53a1a7425ec7482b2f741ae0a8421d747984a8842920f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN364K67%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD13utIOshhaHu5ioPmLqlWi0Sff5AuXKdbXCd6cpHrXAIhAId06C2HOZ%2BUIWPaAeHmzTM9YeDXR2izmum9Q4qJ8lQDKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsNBb3ZvZWdTHY7Iq3AORbSWLR7FsAyjpJ%2FGOoh69OOuclrcSY7hYZH2u5TCIqrVA4kL0cuVVZLwpuL%2Bbmw4pueU1uQdYfjZfKTJGYj%2FvPZvz18tpEi8DSmJCzDmHQyl6vOxzjToTOVf1MpJ%2FRD1CfvKCtO0MdAvaYsO8EdBttANvuhnbl0xv97ARCauX7rCLR3OMY6WJ%2BChiM3nEG0M%2B1A4kSyZDFB2s%2F4sSCf%2FiaUDindcXeCXnjlCVjv6wUAYXhTUwzyWQiIFKsbfSP9XOBrCZcgTUPfQOaN0cy2Pb9oI9XfhsKGR8n5DpNCT7vrysgZJz3v6uheUN9NuavB%2BKla8UXHmL9OYeX0EmK4KTLC1OhCx8rhOrY70mFziDDYc9a%2BXr%2B8y83ZOahTL4p6jPuPBGoiXne%2FPevMBlBrIzgHCSssujQhpjko9%2BirCzXef5gJyj8CzaFnUTwPfQpTQMhWdr39SYh1I%2BCobexeAqG0Mx22jaXFUMjVLv4O4j8ls51Bkx09BDdp0lUEhbFQ4pBJogvKW5ww8B0Y6kY4n%2Buef0TEUPkH8nNOWHC7zk4iIlMUG2JFbY0IeSh5x9BphNRun6YEQRa2V0z7mF5xj6CIaagzhcTAsAQXQLVm%2F5%2FDPfezb6mHYEJm42MjDThqnJBjqkARzWyrwR%2BcXnpf2m9SxzZTsUS6hFg%2FkjxYMODavXf9GO1CM3ezbOO1hx9emTkI9iF2KyOX3IWIrp3k7d5ihox9bKHP7PdhFmp%2FCI5JJ7XTRxhCdNS7sRKjMokwzzrzGIhizW5ZySH6KKl2iChctUTmRenrwMIyolV97YHmFInqbScyhKsqwqi3uNRUWB4OX4kjGOh3lgIh3yU2Dk1xpALowKx77K&X-Amz-Signature=bbad5154bb18740b05a66e0e355e0ff7fc4d212e82aac8b1313e4fd4b47f22db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN364K67%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD13utIOshhaHu5ioPmLqlWi0Sff5AuXKdbXCd6cpHrXAIhAId06C2HOZ%2BUIWPaAeHmzTM9YeDXR2izmum9Q4qJ8lQDKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsNBb3ZvZWdTHY7Iq3AORbSWLR7FsAyjpJ%2FGOoh69OOuclrcSY7hYZH2u5TCIqrVA4kL0cuVVZLwpuL%2Bbmw4pueU1uQdYfjZfKTJGYj%2FvPZvz18tpEi8DSmJCzDmHQyl6vOxzjToTOVf1MpJ%2FRD1CfvKCtO0MdAvaYsO8EdBttANvuhnbl0xv97ARCauX7rCLR3OMY6WJ%2BChiM3nEG0M%2B1A4kSyZDFB2s%2F4sSCf%2FiaUDindcXeCXnjlCVjv6wUAYXhTUwzyWQiIFKsbfSP9XOBrCZcgTUPfQOaN0cy2Pb9oI9XfhsKGR8n5DpNCT7vrysgZJz3v6uheUN9NuavB%2BKla8UXHmL9OYeX0EmK4KTLC1OhCx8rhOrY70mFziDDYc9a%2BXr%2B8y83ZOahTL4p6jPuPBGoiXne%2FPevMBlBrIzgHCSssujQhpjko9%2BirCzXef5gJyj8CzaFnUTwPfQpTQMhWdr39SYh1I%2BCobexeAqG0Mx22jaXFUMjVLv4O4j8ls51Bkx09BDdp0lUEhbFQ4pBJogvKW5ww8B0Y6kY4n%2Buef0TEUPkH8nNOWHC7zk4iIlMUG2JFbY0IeSh5x9BphNRun6YEQRa2V0z7mF5xj6CIaagzhcTAsAQXQLVm%2F5%2FDPfezb6mHYEJm42MjDThqnJBjqkARzWyrwR%2BcXnpf2m9SxzZTsUS6hFg%2FkjxYMODavXf9GO1CM3ezbOO1hx9emTkI9iF2KyOX3IWIrp3k7d5ihox9bKHP7PdhFmp%2FCI5JJ7XTRxhCdNS7sRKjMokwzzrzGIhizW5ZySH6KKl2iChctUTmRenrwMIyolV97YHmFInqbScyhKsqwqi3uNRUWB4OX4kjGOh3lgIh3yU2Dk1xpALowKx77K&X-Amz-Signature=f2fb51984055762e0ffc1c867ffe58ba13dbf9a23eefcdf438521d83e22bb71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN364K67%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD13utIOshhaHu5ioPmLqlWi0Sff5AuXKdbXCd6cpHrXAIhAId06C2HOZ%2BUIWPaAeHmzTM9YeDXR2izmum9Q4qJ8lQDKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsNBb3ZvZWdTHY7Iq3AORbSWLR7FsAyjpJ%2FGOoh69OOuclrcSY7hYZH2u5TCIqrVA4kL0cuVVZLwpuL%2Bbmw4pueU1uQdYfjZfKTJGYj%2FvPZvz18tpEi8DSmJCzDmHQyl6vOxzjToTOVf1MpJ%2FRD1CfvKCtO0MdAvaYsO8EdBttANvuhnbl0xv97ARCauX7rCLR3OMY6WJ%2BChiM3nEG0M%2B1A4kSyZDFB2s%2F4sSCf%2FiaUDindcXeCXnjlCVjv6wUAYXhTUwzyWQiIFKsbfSP9XOBrCZcgTUPfQOaN0cy2Pb9oI9XfhsKGR8n5DpNCT7vrysgZJz3v6uheUN9NuavB%2BKla8UXHmL9OYeX0EmK4KTLC1OhCx8rhOrY70mFziDDYc9a%2BXr%2B8y83ZOahTL4p6jPuPBGoiXne%2FPevMBlBrIzgHCSssujQhpjko9%2BirCzXef5gJyj8CzaFnUTwPfQpTQMhWdr39SYh1I%2BCobexeAqG0Mx22jaXFUMjVLv4O4j8ls51Bkx09BDdp0lUEhbFQ4pBJogvKW5ww8B0Y6kY4n%2Buef0TEUPkH8nNOWHC7zk4iIlMUG2JFbY0IeSh5x9BphNRun6YEQRa2V0z7mF5xj6CIaagzhcTAsAQXQLVm%2F5%2FDPfezb6mHYEJm42MjDThqnJBjqkARzWyrwR%2BcXnpf2m9SxzZTsUS6hFg%2FkjxYMODavXf9GO1CM3ezbOO1hx9emTkI9iF2KyOX3IWIrp3k7d5ihox9bKHP7PdhFmp%2FCI5JJ7XTRxhCdNS7sRKjMokwzzrzGIhizW5ZySH6KKl2iChctUTmRenrwMIyolV97YHmFInqbScyhKsqwqi3uNRUWB4OX4kjGOh3lgIh3yU2Dk1xpALowKx77K&X-Amz-Signature=c2ccb67076fdc8b9e83944ae8920f892d969629ebce8bec0f1b94d4c9b29948f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN364K67%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD13utIOshhaHu5ioPmLqlWi0Sff5AuXKdbXCd6cpHrXAIhAId06C2HOZ%2BUIWPaAeHmzTM9YeDXR2izmum9Q4qJ8lQDKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsNBb3ZvZWdTHY7Iq3AORbSWLR7FsAyjpJ%2FGOoh69OOuclrcSY7hYZH2u5TCIqrVA4kL0cuVVZLwpuL%2Bbmw4pueU1uQdYfjZfKTJGYj%2FvPZvz18tpEi8DSmJCzDmHQyl6vOxzjToTOVf1MpJ%2FRD1CfvKCtO0MdAvaYsO8EdBttANvuhnbl0xv97ARCauX7rCLR3OMY6WJ%2BChiM3nEG0M%2B1A4kSyZDFB2s%2F4sSCf%2FiaUDindcXeCXnjlCVjv6wUAYXhTUwzyWQiIFKsbfSP9XOBrCZcgTUPfQOaN0cy2Pb9oI9XfhsKGR8n5DpNCT7vrysgZJz3v6uheUN9NuavB%2BKla8UXHmL9OYeX0EmK4KTLC1OhCx8rhOrY70mFziDDYc9a%2BXr%2B8y83ZOahTL4p6jPuPBGoiXne%2FPevMBlBrIzgHCSssujQhpjko9%2BirCzXef5gJyj8CzaFnUTwPfQpTQMhWdr39SYh1I%2BCobexeAqG0Mx22jaXFUMjVLv4O4j8ls51Bkx09BDdp0lUEhbFQ4pBJogvKW5ww8B0Y6kY4n%2Buef0TEUPkH8nNOWHC7zk4iIlMUG2JFbY0IeSh5x9BphNRun6YEQRa2V0z7mF5xj6CIaagzhcTAsAQXQLVm%2F5%2FDPfezb6mHYEJm42MjDThqnJBjqkARzWyrwR%2BcXnpf2m9SxzZTsUS6hFg%2FkjxYMODavXf9GO1CM3ezbOO1hx9emTkI9iF2KyOX3IWIrp3k7d5ihox9bKHP7PdhFmp%2FCI5JJ7XTRxhCdNS7sRKjMokwzzrzGIhizW5ZySH6KKl2iChctUTmRenrwMIyolV97YHmFInqbScyhKsqwqi3uNRUWB4OX4kjGOh3lgIh3yU2Dk1xpALowKx77K&X-Amz-Signature=0d88fac1c6d2734ea3634ab2d2868a8c6b3bab7703702cb2580076a4821c9bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN364K67%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD13utIOshhaHu5ioPmLqlWi0Sff5AuXKdbXCd6cpHrXAIhAId06C2HOZ%2BUIWPaAeHmzTM9YeDXR2izmum9Q4qJ8lQDKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCsNBb3ZvZWdTHY7Iq3AORbSWLR7FsAyjpJ%2FGOoh69OOuclrcSY7hYZH2u5TCIqrVA4kL0cuVVZLwpuL%2Bbmw4pueU1uQdYfjZfKTJGYj%2FvPZvz18tpEi8DSmJCzDmHQyl6vOxzjToTOVf1MpJ%2FRD1CfvKCtO0MdAvaYsO8EdBttANvuhnbl0xv97ARCauX7rCLR3OMY6WJ%2BChiM3nEG0M%2B1A4kSyZDFB2s%2F4sSCf%2FiaUDindcXeCXnjlCVjv6wUAYXhTUwzyWQiIFKsbfSP9XOBrCZcgTUPfQOaN0cy2Pb9oI9XfhsKGR8n5DpNCT7vrysgZJz3v6uheUN9NuavB%2BKla8UXHmL9OYeX0EmK4KTLC1OhCx8rhOrY70mFziDDYc9a%2BXr%2B8y83ZOahTL4p6jPuPBGoiXne%2FPevMBlBrIzgHCSssujQhpjko9%2BirCzXef5gJyj8CzaFnUTwPfQpTQMhWdr39SYh1I%2BCobexeAqG0Mx22jaXFUMjVLv4O4j8ls51Bkx09BDdp0lUEhbFQ4pBJogvKW5ww8B0Y6kY4n%2Buef0TEUPkH8nNOWHC7zk4iIlMUG2JFbY0IeSh5x9BphNRun6YEQRa2V0z7mF5xj6CIaagzhcTAsAQXQLVm%2F5%2FDPfezb6mHYEJm42MjDThqnJBjqkARzWyrwR%2BcXnpf2m9SxzZTsUS6hFg%2FkjxYMODavXf9GO1CM3ezbOO1hx9emTkI9iF2KyOX3IWIrp3k7d5ihox9bKHP7PdhFmp%2FCI5JJ7XTRxhCdNS7sRKjMokwzzrzGIhizW5ZySH6KKl2iChctUTmRenrwMIyolV97YHmFInqbScyhKsqwqi3uNRUWB4OX4kjGOh3lgIh3yU2Dk1xpALowKx77K&X-Amz-Signature=a1d8d6fb9f8088da38466c67680edb4da1db6096c1b9878582e15a3dd03abb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOH7ON4X%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T010119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjpQ84WZCKXsA9jbW8GzeZYKNazsKVeqwmVrF1MZJbZQIgD%2Bx%2BTT%2FAFJ%2BbiOzYceYxMp3wdni%2Fu2Sbovoamr2I2KcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKs%2BbI8Zcn3toEKVdCrcA6%2FbeoEIYfmtGT6YQpt%2F7sJVzP%2BQFUv0VhfDBKwYmxB2mGceswudiyB6ZIu30GSf7JNd4tg2XaEHiC5UC9RoLWfJTn2I%2FnAYsMGiha0zeR6tZ51NVposqsFBft6CNFmOWOwUwH5UBYz0T0wtkob6zAF2Fcid%2FxMhLzTHwvcTa3uIYPdKi4RidzhEFQXFauWMYgvBWxU6LlUnBOXtnRdSha6HhvjlFnaypPHHT09kphlGTXwwlCOuTxEp49ZHvqKqCyoCN4uJvSHaIhhxuNezCbuQZy%2FuhmHIenvVieUo%2Bq%2FHrWA4HuCS2gewRb7VHJJlvyhE4lyY3gcxcALowAPPSOdSRs1YoP7syQoOD9DMWhcDRod5VaU%2F8ck6HrA74llz4qRcpP8ksWEkZlai%2FJ%2ByY4JXkawttLwLd%2Bw%2B9Grp%2BGVtC8GCbMbSPoCUgD3STU3tuLG5HD%2FgTxMlW8frvXF24akEkF3q7Ce7TikqbfCFaaqVTSxK6r0ansCkiILP1Xu%2FZ4xhAktckHhS8xsZDxU2myFeNQrc2QP5WAzqCa7kFwhqBWVGn3xB7SfRsYPGY2306eyGFI2CIBd1FXLws2X5IgmW5bQ7FX3d6RY3L5eITLygJecDAgJTZ%2BO8lraDMJiDqckGOqUBCQthgkJbtmRnM1naIKy9MRCd%2BdSWphueBYFTKpWBWjOM%2BASywUP584wresPtsH0Xgfo54tVCXyH7E4h4vAm0fu56c9aWHx4T46WQo0jaxvU2PNHBesKmXUhR9185hPHpGjdtn4mwEuuSQ7BpNrza27zD23c7YhC6H3o7bEj32716r%2FurXtLw2h7YKePgmu4LvoNAUDWzZLm%2ByV0%2BH6h7mSOApx%2B0&X-Amz-Signature=288721ff4bff3cd9b86f57521f25835544109064eb2cf41d94982280f85a4cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

