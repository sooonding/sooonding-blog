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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YEJXXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T010130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMiMLl5zzhw%2BiTNzRhya6YJ9%2FX4518n28NqZ%2B1%2BXcHXQIgPsLP63FJq0VvhSA3PeeHnWqI1xZRfxj6YLvyozH1G1Mq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFcjvwQBmF7onc2ajSrcA5Mws2lJg5nch9%2FOqaS9O3avkOpDthxs80tTwMaBCuT97vlyBbjZ3ZF6HEP1Q%2F0vh%2FMrEvrUaqKYSX3mYzWpQMVPYLS6GeV2HnsTi5cht63vuOdYaBXd0h5cKqU7f2iNJY%2BPxtYJXbLXLwkGITYBkgRS%2FC13jvFgiszkQq7K%2Fpxd6ji34Yc3MFoa8Jl4ffKRig2yLGfMCCPnmpau77cuMoO%2Ft%2Fs8iDLibjzXjVmTNogbCkMPEjRA1gexneTIovud15DLh07ivJOUsLy%2B4QbZMiIyGA55cL8i3WoBxWwN%2B7Nzk2alji0aWotC6HY%2BotioJ6dfiX5pTvwgO0xH9vS5Lm4odTHgXWRMx0iVkY8nLaNEDdZGq6sphxG7FV29HTjk0fPTJ8D5huZzVuDz6uZSjA696Pn9YmkXY%2FIJ6%2BiFp8M6VFPq2eI40CwP6OMDkja2xYnKQLoO2i1bw33Oe0sHg8DR4F2sBLGEKbhPfNYss4pbyFdU7j1htxsm4hZN%2FAd1K4OnM2%2FL9pciNnBo%2Bi6XVuNScyja2WP5fpSAnuCakiHMKr0oBGZ%2BqCRp8l%2BOtebtTdCVc1%2BfMU6Qw614ztv4WrAafkZ9oV5Q7jlQB%2B91%2B9OHO5sx8amLwmC4fu%2B3MKn5zckGOqUBAHEPHxE3iDkE2ulnZQVAvKjMgaAwieP%2FkSrnYdPdOl13IDfHWnXrKw5a0zzvvCJODczdFRu6egp6%2BssDEWZ4c3eRDEmFrmjxn6kjA0hazoKDFxdujdC2%2BJq5bt2QlNPwm1Wkfbrg35zbzys27Nounggx0hU5lMu8qgU6MZuixvgrXWuE%2FoDkAflwVnT1Xmco%2Fo4aNFx%2BGlYtSdfUoyTo6ZDFOGj1&X-Amz-Signature=daebd05ff8d5e88468c404d0ef4b0fe856234612aecef9ada5883b2f77a61758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSPQ7UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T010130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuXPVyVlOuMgPXOl4eEl%2FjKSBJggfbqXk9UzkDkyLWwwIgeYZg84jGeR4edy%2FxXZjLAJSPnBGJ%2BCQtksx4iVM1jc0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDZFk7Seh8Q0R53%2BFyrcAyU6JUtHxRSqbXJuzcvyJbsnyVvaQ8lk6iMBcXDcRT38cfjdmy8bmmLV5uwCa9rMoR94CT1x0V%2BIMmTVvKrARn0adlsTgjplu973AM7cx8%2BZ%2FNmVYc2PY8zPGpD5htpDiyX2p%2BZnHiJdsNoJssG4cMCgOj%2B0NRrJx44ZfhgABTtBKen5n16agwU6F37xh9TvuqUN1a3KotSL1b6Hre7gaCCS0XJnM139vPOm9IyTiYmjUTBhYsUID6XTPaouHutZMGCHoBXHpjJHsJ%2FnYXVnBVILCSIeVuva8wAI0SCaJHktbsCpeBR1QfItHGH7pjCWfI72KAHpfMqxFeAIPYvK6taYbeh0J7bq8q5RTB42NtDUqB%2B%2BZOgn60DYK9AalLjeC6WkFuJkEOPfpxg9FpPMcaB49nJ49heESd1YaUxlVCsp2BtcDiMs7pW0MMKjn%2BvyUrBb%2F0yEcK2Ey0ff28iA3Wz2Xw00NpVPGA9a1aHnLUnMELsed8PHHI0xP8vvOP6ogQzMR1MMqkB5nsDwOO2EnBZQzj7uT%2B7uhYDPTdNKGU%2Bb2vf5pabQ3nEmT6BhhG4K8CT96Tw%2FYdU%2F1qt7D9EWuQM55VlkrckITeOy76tH9a1aFgB8H5g08zU7wCrVMJb3zckGOqUBM57YDYH%2FfUnl20AdDFDq0aDtygVABiqyEHA4omrzossTYs9Gv2QXd%2FIj6ArFU7GwXmRiAcx9htcPPG%2BtapNh9LKaN%2Fu0iEiRhCULzkELaSKAPCF0G5od9hmnm0Fo5p%2B1g%2BeF9id9Yb2PiKrxwW5bq7%2BXirYP8cLgl6vPIZo9HtDAMV%2FdzhXdUhzJnO%2FrzrNwtTyDRHmYGmOZ3UKkFiQGVU0vfOTv&X-Amz-Signature=2f474fbf9570129a9918f4b5bfb5bc5c91d475014a58a153219bd989c743d56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSPQ7UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T010130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuXPVyVlOuMgPXOl4eEl%2FjKSBJggfbqXk9UzkDkyLWwwIgeYZg84jGeR4edy%2FxXZjLAJSPnBGJ%2BCQtksx4iVM1jc0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDZFk7Seh8Q0R53%2BFyrcAyU6JUtHxRSqbXJuzcvyJbsnyVvaQ8lk6iMBcXDcRT38cfjdmy8bmmLV5uwCa9rMoR94CT1x0V%2BIMmTVvKrARn0adlsTgjplu973AM7cx8%2BZ%2FNmVYc2PY8zPGpD5htpDiyX2p%2BZnHiJdsNoJssG4cMCgOj%2B0NRrJx44ZfhgABTtBKen5n16agwU6F37xh9TvuqUN1a3KotSL1b6Hre7gaCCS0XJnM139vPOm9IyTiYmjUTBhYsUID6XTPaouHutZMGCHoBXHpjJHsJ%2FnYXVnBVILCSIeVuva8wAI0SCaJHktbsCpeBR1QfItHGH7pjCWfI72KAHpfMqxFeAIPYvK6taYbeh0J7bq8q5RTB42NtDUqB%2B%2BZOgn60DYK9AalLjeC6WkFuJkEOPfpxg9FpPMcaB49nJ49heESd1YaUxlVCsp2BtcDiMs7pW0MMKjn%2BvyUrBb%2F0yEcK2Ey0ff28iA3Wz2Xw00NpVPGA9a1aHnLUnMELsed8PHHI0xP8vvOP6ogQzMR1MMqkB5nsDwOO2EnBZQzj7uT%2B7uhYDPTdNKGU%2Bb2vf5pabQ3nEmT6BhhG4K8CT96Tw%2FYdU%2F1qt7D9EWuQM55VlkrckITeOy76tH9a1aFgB8H5g08zU7wCrVMJb3zckGOqUBM57YDYH%2FfUnl20AdDFDq0aDtygVABiqyEHA4omrzossTYs9Gv2QXd%2FIj6ArFU7GwXmRiAcx9htcPPG%2BtapNh9LKaN%2Fu0iEiRhCULzkELaSKAPCF0G5od9hmnm0Fo5p%2B1g%2BeF9id9Yb2PiKrxwW5bq7%2BXirYP8cLgl6vPIZo9HtDAMV%2FdzhXdUhzJnO%2FrzrNwtTyDRHmYGmOZ3UKkFiQGVU0vfOTv&X-Amz-Signature=585f40503815619a058a6994c372a32e370269147f3499694803b7da6c18b0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSPQ7UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T010130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuXPVyVlOuMgPXOl4eEl%2FjKSBJggfbqXk9UzkDkyLWwwIgeYZg84jGeR4edy%2FxXZjLAJSPnBGJ%2BCQtksx4iVM1jc0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDZFk7Seh8Q0R53%2BFyrcAyU6JUtHxRSqbXJuzcvyJbsnyVvaQ8lk6iMBcXDcRT38cfjdmy8bmmLV5uwCa9rMoR94CT1x0V%2BIMmTVvKrARn0adlsTgjplu973AM7cx8%2BZ%2FNmVYc2PY8zPGpD5htpDiyX2p%2BZnHiJdsNoJssG4cMCgOj%2B0NRrJx44ZfhgABTtBKen5n16agwU6F37xh9TvuqUN1a3KotSL1b6Hre7gaCCS0XJnM139vPOm9IyTiYmjUTBhYsUID6XTPaouHutZMGCHoBXHpjJHsJ%2FnYXVnBVILCSIeVuva8wAI0SCaJHktbsCpeBR1QfItHGH7pjCWfI72KAHpfMqxFeAIPYvK6taYbeh0J7bq8q5RTB42NtDUqB%2B%2BZOgn60DYK9AalLjeC6WkFuJkEOPfpxg9FpPMcaB49nJ49heESd1YaUxlVCsp2BtcDiMs7pW0MMKjn%2BvyUrBb%2F0yEcK2Ey0ff28iA3Wz2Xw00NpVPGA9a1aHnLUnMELsed8PHHI0xP8vvOP6ogQzMR1MMqkB5nsDwOO2EnBZQzj7uT%2B7uhYDPTdNKGU%2Bb2vf5pabQ3nEmT6BhhG4K8CT96Tw%2FYdU%2F1qt7D9EWuQM55VlkrckITeOy76tH9a1aFgB8H5g08zU7wCrVMJb3zckGOqUBM57YDYH%2FfUnl20AdDFDq0aDtygVABiqyEHA4omrzossTYs9Gv2QXd%2FIj6ArFU7GwXmRiAcx9htcPPG%2BtapNh9LKaN%2Fu0iEiRhCULzkELaSKAPCF0G5od9hmnm0Fo5p%2B1g%2BeF9id9Yb2PiKrxwW5bq7%2BXirYP8cLgl6vPIZo9HtDAMV%2FdzhXdUhzJnO%2FrzrNwtTyDRHmYGmOZ3UKkFiQGVU0vfOTv&X-Amz-Signature=f8066979b9434748cd5c23180e0982167dcc63b94b42b2d9e363d8d0038f778f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSPQ7UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T010130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuXPVyVlOuMgPXOl4eEl%2FjKSBJggfbqXk9UzkDkyLWwwIgeYZg84jGeR4edy%2FxXZjLAJSPnBGJ%2BCQtksx4iVM1jc0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDZFk7Seh8Q0R53%2BFyrcAyU6JUtHxRSqbXJuzcvyJbsnyVvaQ8lk6iMBcXDcRT38cfjdmy8bmmLV5uwCa9rMoR94CT1x0V%2BIMmTVvKrARn0adlsTgjplu973AM7cx8%2BZ%2FNmVYc2PY8zPGpD5htpDiyX2p%2BZnHiJdsNoJssG4cMCgOj%2B0NRrJx44ZfhgABTtBKen5n16agwU6F37xh9TvuqUN1a3KotSL1b6Hre7gaCCS0XJnM139vPOm9IyTiYmjUTBhYsUID6XTPaouHutZMGCHoBXHpjJHsJ%2FnYXVnBVILCSIeVuva8wAI0SCaJHktbsCpeBR1QfItHGH7pjCWfI72KAHpfMqxFeAIPYvK6taYbeh0J7bq8q5RTB42NtDUqB%2B%2BZOgn60DYK9AalLjeC6WkFuJkEOPfpxg9FpPMcaB49nJ49heESd1YaUxlVCsp2BtcDiMs7pW0MMKjn%2BvyUrBb%2F0yEcK2Ey0ff28iA3Wz2Xw00NpVPGA9a1aHnLUnMELsed8PHHI0xP8vvOP6ogQzMR1MMqkB5nsDwOO2EnBZQzj7uT%2B7uhYDPTdNKGU%2Bb2vf5pabQ3nEmT6BhhG4K8CT96Tw%2FYdU%2F1qt7D9EWuQM55VlkrckITeOy76tH9a1aFgB8H5g08zU7wCrVMJb3zckGOqUBM57YDYH%2FfUnl20AdDFDq0aDtygVABiqyEHA4omrzossTYs9Gv2QXd%2FIj6ArFU7GwXmRiAcx9htcPPG%2BtapNh9LKaN%2Fu0iEiRhCULzkELaSKAPCF0G5od9hmnm0Fo5p%2B1g%2BeF9id9Yb2PiKrxwW5bq7%2BXirYP8cLgl6vPIZo9HtDAMV%2FdzhXdUhzJnO%2FrzrNwtTyDRHmYGmOZ3UKkFiQGVU0vfOTv&X-Amz-Signature=0c1b17a357bb1ba519fddc1a15239bcef24afbe06d91e48d88165f590985f6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHSPQ7UT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T010130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuXPVyVlOuMgPXOl4eEl%2FjKSBJggfbqXk9UzkDkyLWwwIgeYZg84jGeR4edy%2FxXZjLAJSPnBGJ%2BCQtksx4iVM1jc0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDZFk7Seh8Q0R53%2BFyrcAyU6JUtHxRSqbXJuzcvyJbsnyVvaQ8lk6iMBcXDcRT38cfjdmy8bmmLV5uwCa9rMoR94CT1x0V%2BIMmTVvKrARn0adlsTgjplu973AM7cx8%2BZ%2FNmVYc2PY8zPGpD5htpDiyX2p%2BZnHiJdsNoJssG4cMCgOj%2B0NRrJx44ZfhgABTtBKen5n16agwU6F37xh9TvuqUN1a3KotSL1b6Hre7gaCCS0XJnM139vPOm9IyTiYmjUTBhYsUID6XTPaouHutZMGCHoBXHpjJHsJ%2FnYXVnBVILCSIeVuva8wAI0SCaJHktbsCpeBR1QfItHGH7pjCWfI72KAHpfMqxFeAIPYvK6taYbeh0J7bq8q5RTB42NtDUqB%2B%2BZOgn60DYK9AalLjeC6WkFuJkEOPfpxg9FpPMcaB49nJ49heESd1YaUxlVCsp2BtcDiMs7pW0MMKjn%2BvyUrBb%2F0yEcK2Ey0ff28iA3Wz2Xw00NpVPGA9a1aHnLUnMELsed8PHHI0xP8vvOP6ogQzMR1MMqkB5nsDwOO2EnBZQzj7uT%2B7uhYDPTdNKGU%2Bb2vf5pabQ3nEmT6BhhG4K8CT96Tw%2FYdU%2F1qt7D9EWuQM55VlkrckITeOy76tH9a1aFgB8H5g08zU7wCrVMJb3zckGOqUBM57YDYH%2FfUnl20AdDFDq0aDtygVABiqyEHA4omrzossTYs9Gv2QXd%2FIj6ArFU7GwXmRiAcx9htcPPG%2BtapNh9LKaN%2Fu0iEiRhCULzkELaSKAPCF0G5od9hmnm0Fo5p%2B1g%2BeF9id9Yb2PiKrxwW5bq7%2BXirYP8cLgl6vPIZo9HtDAMV%2FdzhXdUhzJnO%2FrzrNwtTyDRHmYGmOZ3UKkFiQGVU0vfOTv&X-Amz-Signature=525423c16f8740d6f696c42c81d17e0bba898ccef42927ecf2bf3cc70c1a8d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YEJXXI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T010130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMiMLl5zzhw%2BiTNzRhya6YJ9%2FX4518n28NqZ%2B1%2BXcHXQIgPsLP63FJq0VvhSA3PeeHnWqI1xZRfxj6YLvyozH1G1Mq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDFcjvwQBmF7onc2ajSrcA5Mws2lJg5nch9%2FOqaS9O3avkOpDthxs80tTwMaBCuT97vlyBbjZ3ZF6HEP1Q%2F0vh%2FMrEvrUaqKYSX3mYzWpQMVPYLS6GeV2HnsTi5cht63vuOdYaBXd0h5cKqU7f2iNJY%2BPxtYJXbLXLwkGITYBkgRS%2FC13jvFgiszkQq7K%2Fpxd6ji34Yc3MFoa8Jl4ffKRig2yLGfMCCPnmpau77cuMoO%2Ft%2Fs8iDLibjzXjVmTNogbCkMPEjRA1gexneTIovud15DLh07ivJOUsLy%2B4QbZMiIyGA55cL8i3WoBxWwN%2B7Nzk2alji0aWotC6HY%2BotioJ6dfiX5pTvwgO0xH9vS5Lm4odTHgXWRMx0iVkY8nLaNEDdZGq6sphxG7FV29HTjk0fPTJ8D5huZzVuDz6uZSjA696Pn9YmkXY%2FIJ6%2BiFp8M6VFPq2eI40CwP6OMDkja2xYnKQLoO2i1bw33Oe0sHg8DR4F2sBLGEKbhPfNYss4pbyFdU7j1htxsm4hZN%2FAd1K4OnM2%2FL9pciNnBo%2Bi6XVuNScyja2WP5fpSAnuCakiHMKr0oBGZ%2BqCRp8l%2BOtebtTdCVc1%2BfMU6Qw614ztv4WrAafkZ9oV5Q7jlQB%2B91%2B9OHO5sx8amLwmC4fu%2B3MKn5zckGOqUBAHEPHxE3iDkE2ulnZQVAvKjMgaAwieP%2FkSrnYdPdOl13IDfHWnXrKw5a0zzvvCJODczdFRu6egp6%2BssDEWZ4c3eRDEmFrmjxn6kjA0hazoKDFxdujdC2%2BJq5bt2QlNPwm1Wkfbrg35zbzys27Nounggx0hU5lMu8qgU6MZuixvgrXWuE%2FoDkAflwVnT1Xmco%2Fo4aNFx%2BGlYtSdfUoyTo6ZDFOGj1&X-Amz-Signature=fdab54ae47f7658cd5cbfc799e60230976bdd639e39a8e75af073270204a746b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

