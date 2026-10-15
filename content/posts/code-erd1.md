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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RT4VHA%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcz8Bgea44J2alTTJCLbYv3GNPdUqBgsAXAPBkd05svAiBdA2xpyo%2FXg%2FHuqaS7wUSgKPQyjeSJS2qTlOF4oxSCxSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfN7dU6XXD7CSUXPmKtwD5B09NSfU%2BqzQjHJJif%2FDl17Yl6mlxmFtRFx6yHFZcc1FBUGL0IGgihPhWzUROmEy1jnriXuTGJFK4U4p5hTyxlX9%2FcymwsnBnj2DUbKf5BL%2FJEkHMrETYbIbdl63j9AsN%2BgLDZ8ZD8LNF%2BCNrI%2FDSFvPyvxT0SzGNh5I9pnGygze9UyU9uqOEYUE%2FO9qWjwsmO9eg3ofGjjaFEBovZmRkFFyXz1MLRbkoYteKDYJM4f2Rs8aMqabnM1KN9EHTSkfGk54Gl6B%2Fb%2B6%2BH2aXTxM%2FywtVIPwgeMZj4shlZaHqr1BJqHHLzKnxAu7aJL1O7o%2FYN7wCXawvvU5uC9gmnWs%2BMAYKdlOXdtp9Nn0q1PSsCs1OLO72PJbAS%2Br8ifDg10xJYpIQ1Y7BGU8N%2FPx214Su%2F4oHGKuf4BBUtLugw5Yyf2aIx5U2FGsMV9OOc5ldDHSZrMdLeszAtiz5OnKiQefKbubBduvZTofLNHElmLhQwdvlzKQxbLtCC7T2U9IUbI3uW2KAjqBkbqZQuohcecrl73Hk6YKKLlI9ZmgW60U3qPJuryfPk%2FoM%2FGcpDB7WHs69yi04ogxkcuFu3EBGaw8e624SeeSlwfiHqpisw5r%2BaXWk82KMhk41T%2F0bLkw7dnA1gY6pgFFtspK8wjhjpNbUBjMqjpUN7yS6bYCp6zGapG6pugeWKFV1r2HBOFhMOy9crNrsDYyVpD92zeEcy4Cd8ruY7IP9f7YHaB0wnQuKepR5NcdywiN34yEX22OCaOG807BewAkZ%2FELn5aD9UH4w13IOvxcSSdH4n%2Br4cruk%2FQ8MtWGSOVvIw1Gb9gmn3ieLBYwNzJqNcrO2mIqzsJWGj4KhJQoDzuP2GIB&X-Amz-Signature=122c4baaa0fe964d109a2adcefff3d815481adaddffc56e16e353e089182deaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQK2BII%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEH3rCZH8PbEi0coMds9YhGNfk4ysvAcPXbLSSxmXzGQIgfANGrUV9hn09Hl%2BydfHyyR2lYl3NmYVUrBTTqPmVasAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyAxEfl6I3ULDcizircA23TFgXsOoqF0ENXQKS9dz%2Fm3E%2Fgf3aQOTY3HxTqYeY%2BvFxWNZpanAjMVORzRG40rEifo8Lr%2B8yPHYEKKT9AbbotbV30GNW2p5ieRmDrhdWU%2FJytGtArVJ5tgShaav%2F7f3WerW2qKRjbPIq9MekwpEmUgR6lvwxDjGa7WHMGbw0%2Bv57SHukEDF3evE7kdxbGDUnQpnaqVm6JnWcRURo1uJ0cV8BcN9bWzX8oUaoEay1hC3pRdSZ4yBU1zR4heUSyxen11zj05IzI%2BNO51vl6NzNjJDp%2Fcb1JCfkbbos9toor4z8R4EjTQXuCbgjt%2FgUkgVSMB2zeikWIZqpHsRsSCIaR5oyENs1pXsNOtUdWdJRiVFszeAoRG8ij4tAI9LLK1Jz6YO9r0KhfMsX5oO684jIag6Eo%2BmDKLhe4tfbOhjOv2HIibx4NxLes4XphhUk9ZI26HXD6446qSsSqB3fMeVkdfX%2FhST%2BrIsb%2FFHA4cm9vG8kIdQAlC34PzjStZoycJGBrP6J%2Bt%2By4DkqU3BwIuryBaa%2FrR3xEdDd3qdR8oKxhbf%2FlvcUN4veOTpDQRi%2B708km0s8Ob56sm11%2Fn8sywDWjkMT51yk0fTo6%2B6VUIIMyXqE3rXQlGzn7knE5MJPcwNYGOqUBAEjFvgMCpnTzE2ceZuhorFWFWYMi3HXsLdhd%2F2HaeO80EXQig06IhEOZiSqZmNT3IMHf7mtq7FtvYzWCFbBcjt3CIlE%2Fi75SW%2BDOEr9Jy0pHPNgslx7ZE7Adr25aAaG576%2Fy4kASj05BQm%2Fc50ytzMvqIaTJx0%2BmUyAK0DqBWnNm0D3eEgWopNQAmL9t6F3umsdJIH6y7SPzXlgM68pmMv%2B0j6b1&X-Amz-Signature=c51bab6ec9daaf95fd3415e33776a8e023bea5b921238c3cdbf3537602e74423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQK2BII%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEH3rCZH8PbEi0coMds9YhGNfk4ysvAcPXbLSSxmXzGQIgfANGrUV9hn09Hl%2BydfHyyR2lYl3NmYVUrBTTqPmVasAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyAxEfl6I3ULDcizircA23TFgXsOoqF0ENXQKS9dz%2Fm3E%2Fgf3aQOTY3HxTqYeY%2BvFxWNZpanAjMVORzRG40rEifo8Lr%2B8yPHYEKKT9AbbotbV30GNW2p5ieRmDrhdWU%2FJytGtArVJ5tgShaav%2F7f3WerW2qKRjbPIq9MekwpEmUgR6lvwxDjGa7WHMGbw0%2Bv57SHukEDF3evE7kdxbGDUnQpnaqVm6JnWcRURo1uJ0cV8BcN9bWzX8oUaoEay1hC3pRdSZ4yBU1zR4heUSyxen11zj05IzI%2BNO51vl6NzNjJDp%2Fcb1JCfkbbos9toor4z8R4EjTQXuCbgjt%2FgUkgVSMB2zeikWIZqpHsRsSCIaR5oyENs1pXsNOtUdWdJRiVFszeAoRG8ij4tAI9LLK1Jz6YO9r0KhfMsX5oO684jIag6Eo%2BmDKLhe4tfbOhjOv2HIibx4NxLes4XphhUk9ZI26HXD6446qSsSqB3fMeVkdfX%2FhST%2BrIsb%2FFHA4cm9vG8kIdQAlC34PzjStZoycJGBrP6J%2Bt%2By4DkqU3BwIuryBaa%2FrR3xEdDd3qdR8oKxhbf%2FlvcUN4veOTpDQRi%2B708km0s8Ob56sm11%2Fn8sywDWjkMT51yk0fTo6%2B6VUIIMyXqE3rXQlGzn7knE5MJPcwNYGOqUBAEjFvgMCpnTzE2ceZuhorFWFWYMi3HXsLdhd%2F2HaeO80EXQig06IhEOZiSqZmNT3IMHf7mtq7FtvYzWCFbBcjt3CIlE%2Fi75SW%2BDOEr9Jy0pHPNgslx7ZE7Adr25aAaG576%2Fy4kASj05BQm%2Fc50ytzMvqIaTJx0%2BmUyAK0DqBWnNm0D3eEgWopNQAmL9t6F3umsdJIH6y7SPzXlgM68pmMv%2B0j6b1&X-Amz-Signature=29114662c746851ed5d55ac797c1ab9c3fdafbbb8f99f8270ff416a8b8e1ac13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQK2BII%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEH3rCZH8PbEi0coMds9YhGNfk4ysvAcPXbLSSxmXzGQIgfANGrUV9hn09Hl%2BydfHyyR2lYl3NmYVUrBTTqPmVasAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyAxEfl6I3ULDcizircA23TFgXsOoqF0ENXQKS9dz%2Fm3E%2Fgf3aQOTY3HxTqYeY%2BvFxWNZpanAjMVORzRG40rEifo8Lr%2B8yPHYEKKT9AbbotbV30GNW2p5ieRmDrhdWU%2FJytGtArVJ5tgShaav%2F7f3WerW2qKRjbPIq9MekwpEmUgR6lvwxDjGa7WHMGbw0%2Bv57SHukEDF3evE7kdxbGDUnQpnaqVm6JnWcRURo1uJ0cV8BcN9bWzX8oUaoEay1hC3pRdSZ4yBU1zR4heUSyxen11zj05IzI%2BNO51vl6NzNjJDp%2Fcb1JCfkbbos9toor4z8R4EjTQXuCbgjt%2FgUkgVSMB2zeikWIZqpHsRsSCIaR5oyENs1pXsNOtUdWdJRiVFszeAoRG8ij4tAI9LLK1Jz6YO9r0KhfMsX5oO684jIag6Eo%2BmDKLhe4tfbOhjOv2HIibx4NxLes4XphhUk9ZI26HXD6446qSsSqB3fMeVkdfX%2FhST%2BrIsb%2FFHA4cm9vG8kIdQAlC34PzjStZoycJGBrP6J%2Bt%2By4DkqU3BwIuryBaa%2FrR3xEdDd3qdR8oKxhbf%2FlvcUN4veOTpDQRi%2B708km0s8Ob56sm11%2Fn8sywDWjkMT51yk0fTo6%2B6VUIIMyXqE3rXQlGzn7knE5MJPcwNYGOqUBAEjFvgMCpnTzE2ceZuhorFWFWYMi3HXsLdhd%2F2HaeO80EXQig06IhEOZiSqZmNT3IMHf7mtq7FtvYzWCFbBcjt3CIlE%2Fi75SW%2BDOEr9Jy0pHPNgslx7ZE7Adr25aAaG576%2Fy4kASj05BQm%2Fc50ytzMvqIaTJx0%2BmUyAK0DqBWnNm0D3eEgWopNQAmL9t6F3umsdJIH6y7SPzXlgM68pmMv%2B0j6b1&X-Amz-Signature=bfb434cc97745ea122274083a1868368314ee14d48700d0faeb3dab96d4d8795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQK2BII%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEH3rCZH8PbEi0coMds9YhGNfk4ysvAcPXbLSSxmXzGQIgfANGrUV9hn09Hl%2BydfHyyR2lYl3NmYVUrBTTqPmVasAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyAxEfl6I3ULDcizircA23TFgXsOoqF0ENXQKS9dz%2Fm3E%2Fgf3aQOTY3HxTqYeY%2BvFxWNZpanAjMVORzRG40rEifo8Lr%2B8yPHYEKKT9AbbotbV30GNW2p5ieRmDrhdWU%2FJytGtArVJ5tgShaav%2F7f3WerW2qKRjbPIq9MekwpEmUgR6lvwxDjGa7WHMGbw0%2Bv57SHukEDF3evE7kdxbGDUnQpnaqVm6JnWcRURo1uJ0cV8BcN9bWzX8oUaoEay1hC3pRdSZ4yBU1zR4heUSyxen11zj05IzI%2BNO51vl6NzNjJDp%2Fcb1JCfkbbos9toor4z8R4EjTQXuCbgjt%2FgUkgVSMB2zeikWIZqpHsRsSCIaR5oyENs1pXsNOtUdWdJRiVFszeAoRG8ij4tAI9LLK1Jz6YO9r0KhfMsX5oO684jIag6Eo%2BmDKLhe4tfbOhjOv2HIibx4NxLes4XphhUk9ZI26HXD6446qSsSqB3fMeVkdfX%2FhST%2BrIsb%2FFHA4cm9vG8kIdQAlC34PzjStZoycJGBrP6J%2Bt%2By4DkqU3BwIuryBaa%2FrR3xEdDd3qdR8oKxhbf%2FlvcUN4veOTpDQRi%2B708km0s8Ob56sm11%2Fn8sywDWjkMT51yk0fTo6%2B6VUIIMyXqE3rXQlGzn7knE5MJPcwNYGOqUBAEjFvgMCpnTzE2ceZuhorFWFWYMi3HXsLdhd%2F2HaeO80EXQig06IhEOZiSqZmNT3IMHf7mtq7FtvYzWCFbBcjt3CIlE%2Fi75SW%2BDOEr9Jy0pHPNgslx7ZE7Adr25aAaG576%2Fy4kASj05BQm%2Fc50ytzMvqIaTJx0%2BmUyAK0DqBWnNm0D3eEgWopNQAmL9t6F3umsdJIH6y7SPzXlgM68pmMv%2B0j6b1&X-Amz-Signature=6d4c4e638ec75c7e08707e791d7e2149fb29839b173d0b08d8537ddd46f98543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQK2BII%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEH3rCZH8PbEi0coMds9YhGNfk4ysvAcPXbLSSxmXzGQIgfANGrUV9hn09Hl%2BydfHyyR2lYl3NmYVUrBTTqPmVasAqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyAxEfl6I3ULDcizircA23TFgXsOoqF0ENXQKS9dz%2Fm3E%2Fgf3aQOTY3HxTqYeY%2BvFxWNZpanAjMVORzRG40rEifo8Lr%2B8yPHYEKKT9AbbotbV30GNW2p5ieRmDrhdWU%2FJytGtArVJ5tgShaav%2F7f3WerW2qKRjbPIq9MekwpEmUgR6lvwxDjGa7WHMGbw0%2Bv57SHukEDF3evE7kdxbGDUnQpnaqVm6JnWcRURo1uJ0cV8BcN9bWzX8oUaoEay1hC3pRdSZ4yBU1zR4heUSyxen11zj05IzI%2BNO51vl6NzNjJDp%2Fcb1JCfkbbos9toor4z8R4EjTQXuCbgjt%2FgUkgVSMB2zeikWIZqpHsRsSCIaR5oyENs1pXsNOtUdWdJRiVFszeAoRG8ij4tAI9LLK1Jz6YO9r0KhfMsX5oO684jIag6Eo%2BmDKLhe4tfbOhjOv2HIibx4NxLes4XphhUk9ZI26HXD6446qSsSqB3fMeVkdfX%2FhST%2BrIsb%2FFHA4cm9vG8kIdQAlC34PzjStZoycJGBrP6J%2Bt%2By4DkqU3BwIuryBaa%2FrR3xEdDd3qdR8oKxhbf%2FlvcUN4veOTpDQRi%2B708km0s8Ob56sm11%2Fn8sywDWjkMT51yk0fTo6%2B6VUIIMyXqE3rXQlGzn7knE5MJPcwNYGOqUBAEjFvgMCpnTzE2ceZuhorFWFWYMi3HXsLdhd%2F2HaeO80EXQig06IhEOZiSqZmNT3IMHf7mtq7FtvYzWCFbBcjt3CIlE%2Fi75SW%2BDOEr9Jy0pHPNgslx7ZE7Adr25aAaG576%2Fy4kASj05BQm%2Fc50ytzMvqIaTJx0%2BmUyAK0DqBWnNm0D3eEgWopNQAmL9t6F3umsdJIH6y7SPzXlgM68pmMv%2B0j6b1&X-Amz-Signature=30cacaae3428ac9c84ad38633f07dd61ba94416a484696fbd9ea40e27fc2d52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5RT4VHA%2F20261015%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261015T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcz8Bgea44J2alTTJCLbYv3GNPdUqBgsAXAPBkd05svAiBdA2xpyo%2FXg%2FHuqaS7wUSgKPQyjeSJS2qTlOF4oxSCxSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfN7dU6XXD7CSUXPmKtwD5B09NSfU%2BqzQjHJJif%2FDl17Yl6mlxmFtRFx6yHFZcc1FBUGL0IGgihPhWzUROmEy1jnriXuTGJFK4U4p5hTyxlX9%2FcymwsnBnj2DUbKf5BL%2FJEkHMrETYbIbdl63j9AsN%2BgLDZ8ZD8LNF%2BCNrI%2FDSFvPyvxT0SzGNh5I9pnGygze9UyU9uqOEYUE%2FO9qWjwsmO9eg3ofGjjaFEBovZmRkFFyXz1MLRbkoYteKDYJM4f2Rs8aMqabnM1KN9EHTSkfGk54Gl6B%2Fb%2B6%2BH2aXTxM%2FywtVIPwgeMZj4shlZaHqr1BJqHHLzKnxAu7aJL1O7o%2FYN7wCXawvvU5uC9gmnWs%2BMAYKdlOXdtp9Nn0q1PSsCs1OLO72PJbAS%2Br8ifDg10xJYpIQ1Y7BGU8N%2FPx214Su%2F4oHGKuf4BBUtLugw5Yyf2aIx5U2FGsMV9OOc5ldDHSZrMdLeszAtiz5OnKiQefKbubBduvZTofLNHElmLhQwdvlzKQxbLtCC7T2U9IUbI3uW2KAjqBkbqZQuohcecrl73Hk6YKKLlI9ZmgW60U3qPJuryfPk%2FoM%2FGcpDB7WHs69yi04ogxkcuFu3EBGaw8e624SeeSlwfiHqpisw5r%2BaXWk82KMhk41T%2F0bLkw7dnA1gY6pgFFtspK8wjhjpNbUBjMqjpUN7yS6bYCp6zGapG6pugeWKFV1r2HBOFhMOy9crNrsDYyVpD92zeEcy4Cd8ruY7IP9f7YHaB0wnQuKepR5NcdywiN34yEX22OCaOG807BewAkZ%2FELn5aD9UH4w13IOvxcSSdH4n%2Br4cruk%2FQ8MtWGSOVvIw1Gb9gmn3ieLBYwNzJqNcrO2mIqzsJWGj4KhJQoDzuP2GIB&X-Amz-Signature=b66b77fe729abb2b466bceb17b41eb420ca0b974a662b48331ae90a116451903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

