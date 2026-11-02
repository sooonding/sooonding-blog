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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJT6LR3O%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T044258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC73ScC9bKPYkse%2BSRSamlOL9ozWg3sKxrp0GefmG%2B6tQIhAOC0jsyK9A8g9OSYlkYHNiB7wfsug4HifU6s431uBpTMKv8DCHUQABoMNjM3NDIzMTgzODA1Igx8rcAZ3r2kK5xPEeQq3AMVzmdvLlt%2BOh3EwMktDgfC%2BwtnsoV6nbY%2F%2Fcsh%2FTtjZarMUEV7v6g8dUk%2Fr9L6GhlVJH7ownKn3UDR2iiwkX%2B7OrixvjtqkV935gKuXPpfczA0V7%2F6DStL1Tb76VQM7OXLpIHkkntLaCmBcSzkTq8qxVJAkH3VGF5e06vDgp88g6SpdMOQVnpvrP9WU1XhRkeePUW%2BMluS8ReHaxPsMWM0PZB2ExolwIYGO1ViXXQC%2BguSgRRuyEcyf%2BXe5BwsANNLLWyRKI4lrfNLytnNgsd%2B4BRTm4EwRHpLpf2UvIKOI3kc4jvidO3tGelCXGnLWM3eOO6%2FYs9iSvclKK5iZ41%2B620eF3jkpV%2FqWy%2F%2B%2Fgb3SRsF%2FxnHc3DMsyaK5FLZnr1gojnx1gh7Gvv6P%2BimGECdMZxBrScF1eBDBC7rRLaE14GpA1Yl3WGuMF%2BSDawR0ZMEqMClJlKdmJvh7WGnse4E7eJsN9RTBlOSiRqbcpIbGDn6yDADzG8T0i6vQiIR2Z2TBVykbfQwr5Rstiy0xKz74RDg99t%2BXnLqxXAkkT7QKACs8d6Aigt1bL5tWpg8jmWXDlvCvH5PgPBRY0m2DlE9R7sUpib3kzD9ze%2Ft3TclwJE1L%2BmN89ILx8H0IjCWlqDXBjqkAeDAKNC%2BSWtAaWZHFZdrJXfMI6pE%2FvCOwZ15QmoetnLX3R9YeFDhmDGhks%2BtRUJFjHL2smL1j6Wj7X231TovsTgGPRWoruVKqpnxQWVyGljnVqiDUC4BoXe%2Fj7AsrM38th49r0nnVI03OyhQpnvn6nO5UDmDmmqXEbNQsXRs4XbDTPuexv0dcNKBbA4fXcwu%2F2w8aZG9iH119qsSDdXACfKKQUqa&X-Amz-Signature=8a37af70292acaf7547bd9ba77bf64213a2b961c2abd110042fd3a399a0ba009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWXYXNE%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T044259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYWfFLvx8P1QMln4AiQIbud8le7TxKi2ztfRUV61ebvAiBcgCyRL6A82k4xrVdB9O66BheRvj69RLFJKTAd4oGTBir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMnuziqBLMMzrgqU3VKtwD1lvJs9Ls9%2F5X1AvzAs90nczAk54oc8rfIFJ8E1CJkVG%2F00WAfE0PJidHQW1EaAaE3%2FHXPn36uR58PRC%2BPG%2BGLE%2BKwTgD2I1aGzlSAVWA%2BMfe7myvFFCiAd0oiD05Guu%2F7Uy3jvriKEA7nP5JrukJnprhhThK3HE7RADuiXsDouN%2FbhmBEAWtuyGfOP0NUy7IMAHBgdKJ226GpKIDV7ATHquDOI2M4ofEL8Zj%2FQnPF55EVlIkUXDBNvyT6ORXw%2B4knXxhxqvEGAHC21gxPoPlDlxUeBq0S71MPX6dFiY6vlIHg86zEigpwUiPb189yxqTQLrlDbEAiHL0mcMMaN%2BmpP9lWEwA1zciSu%2FGQZ8Ytr0bqXNYyUGKyAaRiuwZAaT0PcVAsVWQfSn1Fjbf30f44PP6ek2X8X5g3rMi3%2FZJFawv%2BcY1vDh0YU%2FX8YgtUHXj0rJiuPTqSV2NCzT%2BpBCZ554MKcgNNz9UsdIZkSRRMzZnFclcxD2mbMuG0vjI%2BfiKTV11Vme5464QEEy7ipYS4oi8aoL%2BMeofQWvW0MOPc%2FnkORnKTo1XD%2BOgI15d91RsLlWjNtxR%2BLQKA2ta4n20S7TIdYseaZTphoXTMN%2FMR3b94PM7jVVF4pG%2BZ4cw25Wg1wY6pgGAmJcDpDFES1Den%2BRKIfZmyEvw2bGoTXiJJawIjjs6SNuOmAbiU3y2W%2BYmnBemNZBuCwfleFtzbrrP7dagZrpu9wQZ9wZt7jnTim6ORmiYQKoGWOZUZwn7s%2FCYLTEViMFgJoBEHOaL4juLhnyIPT4rnXJcYDGCY8nyruf5Pwg%2FzSqrh3uNjTqFNGIPtNnwxCFRogB5mBZSxOP2Obcv7z7ln6vTDqox&X-Amz-Signature=99effb99c731b7eea3b594cc1257ccbad9bf9482c29fef08e40c3e1aa5092049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWXYXNE%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T044259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYWfFLvx8P1QMln4AiQIbud8le7TxKi2ztfRUV61ebvAiBcgCyRL6A82k4xrVdB9O66BheRvj69RLFJKTAd4oGTBir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMnuziqBLMMzrgqU3VKtwD1lvJs9Ls9%2F5X1AvzAs90nczAk54oc8rfIFJ8E1CJkVG%2F00WAfE0PJidHQW1EaAaE3%2FHXPn36uR58PRC%2BPG%2BGLE%2BKwTgD2I1aGzlSAVWA%2BMfe7myvFFCiAd0oiD05Guu%2F7Uy3jvriKEA7nP5JrukJnprhhThK3HE7RADuiXsDouN%2FbhmBEAWtuyGfOP0NUy7IMAHBgdKJ226GpKIDV7ATHquDOI2M4ofEL8Zj%2FQnPF55EVlIkUXDBNvyT6ORXw%2B4knXxhxqvEGAHC21gxPoPlDlxUeBq0S71MPX6dFiY6vlIHg86zEigpwUiPb189yxqTQLrlDbEAiHL0mcMMaN%2BmpP9lWEwA1zciSu%2FGQZ8Ytr0bqXNYyUGKyAaRiuwZAaT0PcVAsVWQfSn1Fjbf30f44PP6ek2X8X5g3rMi3%2FZJFawv%2BcY1vDh0YU%2FX8YgtUHXj0rJiuPTqSV2NCzT%2BpBCZ554MKcgNNz9UsdIZkSRRMzZnFclcxD2mbMuG0vjI%2BfiKTV11Vme5464QEEy7ipYS4oi8aoL%2BMeofQWvW0MOPc%2FnkORnKTo1XD%2BOgI15d91RsLlWjNtxR%2BLQKA2ta4n20S7TIdYseaZTphoXTMN%2FMR3b94PM7jVVF4pG%2BZ4cw25Wg1wY6pgGAmJcDpDFES1Den%2BRKIfZmyEvw2bGoTXiJJawIjjs6SNuOmAbiU3y2W%2BYmnBemNZBuCwfleFtzbrrP7dagZrpu9wQZ9wZt7jnTim6ORmiYQKoGWOZUZwn7s%2FCYLTEViMFgJoBEHOaL4juLhnyIPT4rnXJcYDGCY8nyruf5Pwg%2FzSqrh3uNjTqFNGIPtNnwxCFRogB5mBZSxOP2Obcv7z7ln6vTDqox&X-Amz-Signature=a53fd4f1fc98002fa90c87692986af1bf4f996f7079c819428d539a888d339e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWXYXNE%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T044259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYWfFLvx8P1QMln4AiQIbud8le7TxKi2ztfRUV61ebvAiBcgCyRL6A82k4xrVdB9O66BheRvj69RLFJKTAd4oGTBir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMnuziqBLMMzrgqU3VKtwD1lvJs9Ls9%2F5X1AvzAs90nczAk54oc8rfIFJ8E1CJkVG%2F00WAfE0PJidHQW1EaAaE3%2FHXPn36uR58PRC%2BPG%2BGLE%2BKwTgD2I1aGzlSAVWA%2BMfe7myvFFCiAd0oiD05Guu%2F7Uy3jvriKEA7nP5JrukJnprhhThK3HE7RADuiXsDouN%2FbhmBEAWtuyGfOP0NUy7IMAHBgdKJ226GpKIDV7ATHquDOI2M4ofEL8Zj%2FQnPF55EVlIkUXDBNvyT6ORXw%2B4knXxhxqvEGAHC21gxPoPlDlxUeBq0S71MPX6dFiY6vlIHg86zEigpwUiPb189yxqTQLrlDbEAiHL0mcMMaN%2BmpP9lWEwA1zciSu%2FGQZ8Ytr0bqXNYyUGKyAaRiuwZAaT0PcVAsVWQfSn1Fjbf30f44PP6ek2X8X5g3rMi3%2FZJFawv%2BcY1vDh0YU%2FX8YgtUHXj0rJiuPTqSV2NCzT%2BpBCZ554MKcgNNz9UsdIZkSRRMzZnFclcxD2mbMuG0vjI%2BfiKTV11Vme5464QEEy7ipYS4oi8aoL%2BMeofQWvW0MOPc%2FnkORnKTo1XD%2BOgI15d91RsLlWjNtxR%2BLQKA2ta4n20S7TIdYseaZTphoXTMN%2FMR3b94PM7jVVF4pG%2BZ4cw25Wg1wY6pgGAmJcDpDFES1Den%2BRKIfZmyEvw2bGoTXiJJawIjjs6SNuOmAbiU3y2W%2BYmnBemNZBuCwfleFtzbrrP7dagZrpu9wQZ9wZt7jnTim6ORmiYQKoGWOZUZwn7s%2FCYLTEViMFgJoBEHOaL4juLhnyIPT4rnXJcYDGCY8nyruf5Pwg%2FzSqrh3uNjTqFNGIPtNnwxCFRogB5mBZSxOP2Obcv7z7ln6vTDqox&X-Amz-Signature=4f8eabc67ba0c4f5ffe980bf5d313b2ea530bc09f6ca5e9944c62e725a18ee74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWXYXNE%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T044259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYWfFLvx8P1QMln4AiQIbud8le7TxKi2ztfRUV61ebvAiBcgCyRL6A82k4xrVdB9O66BheRvj69RLFJKTAd4oGTBir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMnuziqBLMMzrgqU3VKtwD1lvJs9Ls9%2F5X1AvzAs90nczAk54oc8rfIFJ8E1CJkVG%2F00WAfE0PJidHQW1EaAaE3%2FHXPn36uR58PRC%2BPG%2BGLE%2BKwTgD2I1aGzlSAVWA%2BMfe7myvFFCiAd0oiD05Guu%2F7Uy3jvriKEA7nP5JrukJnprhhThK3HE7RADuiXsDouN%2FbhmBEAWtuyGfOP0NUy7IMAHBgdKJ226GpKIDV7ATHquDOI2M4ofEL8Zj%2FQnPF55EVlIkUXDBNvyT6ORXw%2B4knXxhxqvEGAHC21gxPoPlDlxUeBq0S71MPX6dFiY6vlIHg86zEigpwUiPb189yxqTQLrlDbEAiHL0mcMMaN%2BmpP9lWEwA1zciSu%2FGQZ8Ytr0bqXNYyUGKyAaRiuwZAaT0PcVAsVWQfSn1Fjbf30f44PP6ek2X8X5g3rMi3%2FZJFawv%2BcY1vDh0YU%2FX8YgtUHXj0rJiuPTqSV2NCzT%2BpBCZ554MKcgNNz9UsdIZkSRRMzZnFclcxD2mbMuG0vjI%2BfiKTV11Vme5464QEEy7ipYS4oi8aoL%2BMeofQWvW0MOPc%2FnkORnKTo1XD%2BOgI15d91RsLlWjNtxR%2BLQKA2ta4n20S7TIdYseaZTphoXTMN%2FMR3b94PM7jVVF4pG%2BZ4cw25Wg1wY6pgGAmJcDpDFES1Den%2BRKIfZmyEvw2bGoTXiJJawIjjs6SNuOmAbiU3y2W%2BYmnBemNZBuCwfleFtzbrrP7dagZrpu9wQZ9wZt7jnTim6ORmiYQKoGWOZUZwn7s%2FCYLTEViMFgJoBEHOaL4juLhnyIPT4rnXJcYDGCY8nyruf5Pwg%2FzSqrh3uNjTqFNGIPtNnwxCFRogB5mBZSxOP2Obcv7z7ln6vTDqox&X-Amz-Signature=d7021df63658e9b2897a117cf0f533f32a69f02ade0183f93bd45c43054a3fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWXYXNE%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T044259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYWfFLvx8P1QMln4AiQIbud8le7TxKi2ztfRUV61ebvAiBcgCyRL6A82k4xrVdB9O66BheRvj69RLFJKTAd4oGTBir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMnuziqBLMMzrgqU3VKtwD1lvJs9Ls9%2F5X1AvzAs90nczAk54oc8rfIFJ8E1CJkVG%2F00WAfE0PJidHQW1EaAaE3%2FHXPn36uR58PRC%2BPG%2BGLE%2BKwTgD2I1aGzlSAVWA%2BMfe7myvFFCiAd0oiD05Guu%2F7Uy3jvriKEA7nP5JrukJnprhhThK3HE7RADuiXsDouN%2FbhmBEAWtuyGfOP0NUy7IMAHBgdKJ226GpKIDV7ATHquDOI2M4ofEL8Zj%2FQnPF55EVlIkUXDBNvyT6ORXw%2B4knXxhxqvEGAHC21gxPoPlDlxUeBq0S71MPX6dFiY6vlIHg86zEigpwUiPb189yxqTQLrlDbEAiHL0mcMMaN%2BmpP9lWEwA1zciSu%2FGQZ8Ytr0bqXNYyUGKyAaRiuwZAaT0PcVAsVWQfSn1Fjbf30f44PP6ek2X8X5g3rMi3%2FZJFawv%2BcY1vDh0YU%2FX8YgtUHXj0rJiuPTqSV2NCzT%2BpBCZ554MKcgNNz9UsdIZkSRRMzZnFclcxD2mbMuG0vjI%2BfiKTV11Vme5464QEEy7ipYS4oi8aoL%2BMeofQWvW0MOPc%2FnkORnKTo1XD%2BOgI15d91RsLlWjNtxR%2BLQKA2ta4n20S7TIdYseaZTphoXTMN%2FMR3b94PM7jVVF4pG%2BZ4cw25Wg1wY6pgGAmJcDpDFES1Den%2BRKIfZmyEvw2bGoTXiJJawIjjs6SNuOmAbiU3y2W%2BYmnBemNZBuCwfleFtzbrrP7dagZrpu9wQZ9wZt7jnTim6ORmiYQKoGWOZUZwn7s%2FCYLTEViMFgJoBEHOaL4juLhnyIPT4rnXJcYDGCY8nyruf5Pwg%2FzSqrh3uNjTqFNGIPtNnwxCFRogB5mBZSxOP2Obcv7z7ln6vTDqox&X-Amz-Signature=5c9900a5eb0844dacbef655f1acaa6495eccdd10aa53fb73c62c96710d9fb11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJT6LR3O%2F20261102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261102T044258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC73ScC9bKPYkse%2BSRSamlOL9ozWg3sKxrp0GefmG%2B6tQIhAOC0jsyK9A8g9OSYlkYHNiB7wfsug4HifU6s431uBpTMKv8DCHUQABoMNjM3NDIzMTgzODA1Igx8rcAZ3r2kK5xPEeQq3AMVzmdvLlt%2BOh3EwMktDgfC%2BwtnsoV6nbY%2F%2Fcsh%2FTtjZarMUEV7v6g8dUk%2Fr9L6GhlVJH7ownKn3UDR2iiwkX%2B7OrixvjtqkV935gKuXPpfczA0V7%2F6DStL1Tb76VQM7OXLpIHkkntLaCmBcSzkTq8qxVJAkH3VGF5e06vDgp88g6SpdMOQVnpvrP9WU1XhRkeePUW%2BMluS8ReHaxPsMWM0PZB2ExolwIYGO1ViXXQC%2BguSgRRuyEcyf%2BXe5BwsANNLLWyRKI4lrfNLytnNgsd%2B4BRTm4EwRHpLpf2UvIKOI3kc4jvidO3tGelCXGnLWM3eOO6%2FYs9iSvclKK5iZ41%2B620eF3jkpV%2FqWy%2F%2B%2Fgb3SRsF%2FxnHc3DMsyaK5FLZnr1gojnx1gh7Gvv6P%2BimGECdMZxBrScF1eBDBC7rRLaE14GpA1Yl3WGuMF%2BSDawR0ZMEqMClJlKdmJvh7WGnse4E7eJsN9RTBlOSiRqbcpIbGDn6yDADzG8T0i6vQiIR2Z2TBVykbfQwr5Rstiy0xKz74RDg99t%2BXnLqxXAkkT7QKACs8d6Aigt1bL5tWpg8jmWXDlvCvH5PgPBRY0m2DlE9R7sUpib3kzD9ze%2Ft3TclwJE1L%2BmN89ILx8H0IjCWlqDXBjqkAeDAKNC%2BSWtAaWZHFZdrJXfMI6pE%2FvCOwZ15QmoetnLX3R9YeFDhmDGhks%2BtRUJFjHL2smL1j6Wj7X231TovsTgGPRWoruVKqpnxQWVyGljnVqiDUC4BoXe%2Fj7AsrM38th49r0nnVI03OyhQpnvn6nO5UDmDmmqXEbNQsXRs4XbDTPuexv0dcNKBbA4fXcwu%2F2w8aZG9iH119qsSDdXACfKKQUqa&X-Amz-Signature=76091e44990566523526aa9408a9a34c7b5dff7aa3eead09e72c1e89b244f23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

