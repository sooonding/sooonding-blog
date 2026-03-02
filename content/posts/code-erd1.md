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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6S535G%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDgO81rims%2BGh0r3%2F0UerPlPpNJQ%2FXWk5vPOylrUkk9QIhAIjTZN3WSYjpXc8Lq4rywiolBMqC0yb%2FyRd1WaRrQAWAKv8DCHoQABoMNjM3NDIzMTgzODA1IgyDVdQCo3cNTiTKl0gq3ANG%2BFL0SQuj4AlDrh42FqFEzs8YiFmHOhTJURcByDMIazU7iwcQG0NPeb6XVcwxnHxiCR7EPRRWqd7unWAerrcfwa7mw5h%2BaN207Ssd6gWWpzV3UmU4%2BeBaLffogIRIT4kG5XjBXTzFKDv3FNH22gKRvt9v8%2FbZGNi0gm%2F7Pa9iSiuOCmxOgxr0UaBbdNa5ylAmdZOHLYxhvZ%2Fq0ej%2Bs01eoANu9ef16IQ%2Fctg9a%2BLdEvuHSybP1zrNudwYe%2Fcmba1hdkdy9ZfgXax6KrUcCnbuX0QE4V9Q%2Fc0SaICj5aFBZT7Z%2BkrcvPoAdc3NKuHo8CxP44X2F9Yv2H0jCAmHf6FOI9mu0EFVRqfZANQGSHh6ZJk64XvbBRhdcLJKrC1KghQJfBK6mraIbPcTNyGQ5xUozT72vD1YykJDrb9frU4b3eSbzqYoZYogffrgwYUptHVFMecpoQj7xCSx2LZCEsaRTSW5kvvxAWVUIq5YoirIv%2FVdMOcNUdmpllX2yidDU8pdr4xRz94opGLC23DMRgPwBIWRS5XqAFyePI1na9xB6uryBVp6sGwhQqTMrwNzy%2FruryXe3j7CS8E39p2OKoOHjvezd11BnrfT7qx6Yy7BZVLOIz9%2BwNbtcSD6EzC6yZPNBjqkAbjOOL%2FWveBIIViFqm361LsAVqTHa3Q8TB441Oe6IMV%2B0ANi4m5S8UvOOGK0ckmLPeLMT0VaF1CqMJnqNndBDZQ%2BuWFkYB7B2DhTQuUWqrqgU1xSOQbLtH9gh4xbTuvKYnPjz%2BXIqHJy2D90zPBtO8lsP8lmXOVFyrHLdDYaN%2FTEJfkHwpE%2FfxOpJsy%2B8XZI%2F%2BYlLYmibM14wc7qPrFKmLWhp4Z6&X-Amz-Signature=7cc516bb677458d3f047c18830baaea07a1b8ef90651d4c75ca47583ea5e4ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7IV5RV%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMyynqin3PGZ%2BbRIsRWyAHmVSddoqPH0XmcJqQMO993QIgCThCqFrF0TObUvwUZeu1uWEvDHS06dO2XHebopyZN3Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG5JCIfHk84zQUQ4pircA%2BteHaODtgdVf4nZUkw3bsn9l5NZnI%2BvGKXbOa7nTZpFOinaT7tgpKfCvdprc6ya6DFITJiyiPTCeBZWLMVkYmOdfBPHO67ldp2swkStiCTx26OYh26Jf56XRruoHGDTxJWMqtEhqchn1%2FlauioBjU6FZ5DoK%2F6C3I%2FTk65hh6oS%2FnPR11TKfGkm4GWFK05vJcxYS0WFTyqEC4VZ33YDpuEanxm6%2BdiBH%2FpBTGQF%2Bge8P0DyHhuPsd5w%2FNMYTDSrBZQvSWFYdEUXRcydsuKlgFuQ%2FUuvRJzC2Wfp4PihTY9cgmu6lKE3pHN8yPakIi6e7AOrgJgKd5H39P30iWGS0lAt2u81hro%2F5FFCF3QBSxwGEJXZ9oB9mbo4LmbwQKGz3f8d2QXYB5GVC6tqOQAc7Vwb5TqbknCeE0ucqLcDGdXeTv11b5UMsP062rEFqwZA6l6X9OhXfBz9AOvB5zfIYNuJapI9jkfQMMxtnUNxzV7rpiQm%2BQvUrb8Bbn%2FXayhXEIsYE6mG5Q2MFZlZnbHStKtHlvozz8OF%2FnEFv8a1r63VltFG32M7lhGjQvC5nK5zzz3Te426ZBfojlh%2F6B987N8%2Fn9zFVfmygoRiBoEJ1LJdTSYv9s5z7kQVJti8MPLLk80GOqUB8BPWse8n97RC3C90XvlUHv57X7%2BZL17CvTgbL%2FuwqSJ1pFeNSNkvlVeMyfEXjZst%2FsF3UZOhRhm%2B1QbKKKVn7XcMR5MgL2XXb%2By7qtYGI583mjeRTeOw79Pkjb5Ax8bFAA3nfXnc7QVm0f4HDIPgdz3Li5ANwjJgCMoItiekGxS4YZ%2BNTLyhS8UXAb7qG4o%2BWfgripkeOfh2elfeIcZXCjhwOjoU&X-Amz-Signature=c2a67b3d34525506a89a9e662239b0c453f30371f165747b8af2b0b70ceb3897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7IV5RV%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMyynqin3PGZ%2BbRIsRWyAHmVSddoqPH0XmcJqQMO993QIgCThCqFrF0TObUvwUZeu1uWEvDHS06dO2XHebopyZN3Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG5JCIfHk84zQUQ4pircA%2BteHaODtgdVf4nZUkw3bsn9l5NZnI%2BvGKXbOa7nTZpFOinaT7tgpKfCvdprc6ya6DFITJiyiPTCeBZWLMVkYmOdfBPHO67ldp2swkStiCTx26OYh26Jf56XRruoHGDTxJWMqtEhqchn1%2FlauioBjU6FZ5DoK%2F6C3I%2FTk65hh6oS%2FnPR11TKfGkm4GWFK05vJcxYS0WFTyqEC4VZ33YDpuEanxm6%2BdiBH%2FpBTGQF%2Bge8P0DyHhuPsd5w%2FNMYTDSrBZQvSWFYdEUXRcydsuKlgFuQ%2FUuvRJzC2Wfp4PihTY9cgmu6lKE3pHN8yPakIi6e7AOrgJgKd5H39P30iWGS0lAt2u81hro%2F5FFCF3QBSxwGEJXZ9oB9mbo4LmbwQKGz3f8d2QXYB5GVC6tqOQAc7Vwb5TqbknCeE0ucqLcDGdXeTv11b5UMsP062rEFqwZA6l6X9OhXfBz9AOvB5zfIYNuJapI9jkfQMMxtnUNxzV7rpiQm%2BQvUrb8Bbn%2FXayhXEIsYE6mG5Q2MFZlZnbHStKtHlvozz8OF%2FnEFv8a1r63VltFG32M7lhGjQvC5nK5zzz3Te426ZBfojlh%2F6B987N8%2Fn9zFVfmygoRiBoEJ1LJdTSYv9s5z7kQVJti8MPLLk80GOqUB8BPWse8n97RC3C90XvlUHv57X7%2BZL17CvTgbL%2FuwqSJ1pFeNSNkvlVeMyfEXjZst%2FsF3UZOhRhm%2B1QbKKKVn7XcMR5MgL2XXb%2By7qtYGI583mjeRTeOw79Pkjb5Ax8bFAA3nfXnc7QVm0f4HDIPgdz3Li5ANwjJgCMoItiekGxS4YZ%2BNTLyhS8UXAb7qG4o%2BWfgripkeOfh2elfeIcZXCjhwOjoU&X-Amz-Signature=f9b7c048047efe99bdb27a66491f2fb468e6d5b7ccc751a74a86ad28e64c1c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7IV5RV%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMyynqin3PGZ%2BbRIsRWyAHmVSddoqPH0XmcJqQMO993QIgCThCqFrF0TObUvwUZeu1uWEvDHS06dO2XHebopyZN3Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG5JCIfHk84zQUQ4pircA%2BteHaODtgdVf4nZUkw3bsn9l5NZnI%2BvGKXbOa7nTZpFOinaT7tgpKfCvdprc6ya6DFITJiyiPTCeBZWLMVkYmOdfBPHO67ldp2swkStiCTx26OYh26Jf56XRruoHGDTxJWMqtEhqchn1%2FlauioBjU6FZ5DoK%2F6C3I%2FTk65hh6oS%2FnPR11TKfGkm4GWFK05vJcxYS0WFTyqEC4VZ33YDpuEanxm6%2BdiBH%2FpBTGQF%2Bge8P0DyHhuPsd5w%2FNMYTDSrBZQvSWFYdEUXRcydsuKlgFuQ%2FUuvRJzC2Wfp4PihTY9cgmu6lKE3pHN8yPakIi6e7AOrgJgKd5H39P30iWGS0lAt2u81hro%2F5FFCF3QBSxwGEJXZ9oB9mbo4LmbwQKGz3f8d2QXYB5GVC6tqOQAc7Vwb5TqbknCeE0ucqLcDGdXeTv11b5UMsP062rEFqwZA6l6X9OhXfBz9AOvB5zfIYNuJapI9jkfQMMxtnUNxzV7rpiQm%2BQvUrb8Bbn%2FXayhXEIsYE6mG5Q2MFZlZnbHStKtHlvozz8OF%2FnEFv8a1r63VltFG32M7lhGjQvC5nK5zzz3Te426ZBfojlh%2F6B987N8%2Fn9zFVfmygoRiBoEJ1LJdTSYv9s5z7kQVJti8MPLLk80GOqUB8BPWse8n97RC3C90XvlUHv57X7%2BZL17CvTgbL%2FuwqSJ1pFeNSNkvlVeMyfEXjZst%2FsF3UZOhRhm%2B1QbKKKVn7XcMR5MgL2XXb%2By7qtYGI583mjeRTeOw79Pkjb5Ax8bFAA3nfXnc7QVm0f4HDIPgdz3Li5ANwjJgCMoItiekGxS4YZ%2BNTLyhS8UXAb7qG4o%2BWfgripkeOfh2elfeIcZXCjhwOjoU&X-Amz-Signature=078339b61509a0f9e493e5e010233c780491f5bcdac5d30982a44b45eda62967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7IV5RV%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMyynqin3PGZ%2BbRIsRWyAHmVSddoqPH0XmcJqQMO993QIgCThCqFrF0TObUvwUZeu1uWEvDHS06dO2XHebopyZN3Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG5JCIfHk84zQUQ4pircA%2BteHaODtgdVf4nZUkw3bsn9l5NZnI%2BvGKXbOa7nTZpFOinaT7tgpKfCvdprc6ya6DFITJiyiPTCeBZWLMVkYmOdfBPHO67ldp2swkStiCTx26OYh26Jf56XRruoHGDTxJWMqtEhqchn1%2FlauioBjU6FZ5DoK%2F6C3I%2FTk65hh6oS%2FnPR11TKfGkm4GWFK05vJcxYS0WFTyqEC4VZ33YDpuEanxm6%2BdiBH%2FpBTGQF%2Bge8P0DyHhuPsd5w%2FNMYTDSrBZQvSWFYdEUXRcydsuKlgFuQ%2FUuvRJzC2Wfp4PihTY9cgmu6lKE3pHN8yPakIi6e7AOrgJgKd5H39P30iWGS0lAt2u81hro%2F5FFCF3QBSxwGEJXZ9oB9mbo4LmbwQKGz3f8d2QXYB5GVC6tqOQAc7Vwb5TqbknCeE0ucqLcDGdXeTv11b5UMsP062rEFqwZA6l6X9OhXfBz9AOvB5zfIYNuJapI9jkfQMMxtnUNxzV7rpiQm%2BQvUrb8Bbn%2FXayhXEIsYE6mG5Q2MFZlZnbHStKtHlvozz8OF%2FnEFv8a1r63VltFG32M7lhGjQvC5nK5zzz3Te426ZBfojlh%2F6B987N8%2Fn9zFVfmygoRiBoEJ1LJdTSYv9s5z7kQVJti8MPLLk80GOqUB8BPWse8n97RC3C90XvlUHv57X7%2BZL17CvTgbL%2FuwqSJ1pFeNSNkvlVeMyfEXjZst%2FsF3UZOhRhm%2B1QbKKKVn7XcMR5MgL2XXb%2By7qtYGI583mjeRTeOw79Pkjb5Ax8bFAA3nfXnc7QVm0f4HDIPgdz3Li5ANwjJgCMoItiekGxS4YZ%2BNTLyhS8UXAb7qG4o%2BWfgripkeOfh2elfeIcZXCjhwOjoU&X-Amz-Signature=ca5d4d19b4e4c2d84b71073d5a279c6f5090f67a1d196fd065ef991432b9bbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU7IV5RV%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMyynqin3PGZ%2BbRIsRWyAHmVSddoqPH0XmcJqQMO993QIgCThCqFrF0TObUvwUZeu1uWEvDHS06dO2XHebopyZN3Eq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG5JCIfHk84zQUQ4pircA%2BteHaODtgdVf4nZUkw3bsn9l5NZnI%2BvGKXbOa7nTZpFOinaT7tgpKfCvdprc6ya6DFITJiyiPTCeBZWLMVkYmOdfBPHO67ldp2swkStiCTx26OYh26Jf56XRruoHGDTxJWMqtEhqchn1%2FlauioBjU6FZ5DoK%2F6C3I%2FTk65hh6oS%2FnPR11TKfGkm4GWFK05vJcxYS0WFTyqEC4VZ33YDpuEanxm6%2BdiBH%2FpBTGQF%2Bge8P0DyHhuPsd5w%2FNMYTDSrBZQvSWFYdEUXRcydsuKlgFuQ%2FUuvRJzC2Wfp4PihTY9cgmu6lKE3pHN8yPakIi6e7AOrgJgKd5H39P30iWGS0lAt2u81hro%2F5FFCF3QBSxwGEJXZ9oB9mbo4LmbwQKGz3f8d2QXYB5GVC6tqOQAc7Vwb5TqbknCeE0ucqLcDGdXeTv11b5UMsP062rEFqwZA6l6X9OhXfBz9AOvB5zfIYNuJapI9jkfQMMxtnUNxzV7rpiQm%2BQvUrb8Bbn%2FXayhXEIsYE6mG5Q2MFZlZnbHStKtHlvozz8OF%2FnEFv8a1r63VltFG32M7lhGjQvC5nK5zzz3Te426ZBfojlh%2F6B987N8%2Fn9zFVfmygoRiBoEJ1LJdTSYv9s5z7kQVJti8MPLLk80GOqUB8BPWse8n97RC3C90XvlUHv57X7%2BZL17CvTgbL%2FuwqSJ1pFeNSNkvlVeMyfEXjZst%2FsF3UZOhRhm%2B1QbKKKVn7XcMR5MgL2XXb%2By7qtYGI583mjeRTeOw79Pkjb5Ax8bFAA3nfXnc7QVm0f4HDIPgdz3Li5ANwjJgCMoItiekGxS4YZ%2BNTLyhS8UXAb7qG4o%2BWfgripkeOfh2elfeIcZXCjhwOjoU&X-Amz-Signature=d4e9d737d16d74b900e499a96ca86861bce0e1862d3d98d453702afb16f10a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6S535G%2F20260302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260302T020837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDgO81rims%2BGh0r3%2F0UerPlPpNJQ%2FXWk5vPOylrUkk9QIhAIjTZN3WSYjpXc8Lq4rywiolBMqC0yb%2FyRd1WaRrQAWAKv8DCHoQABoMNjM3NDIzMTgzODA1IgyDVdQCo3cNTiTKl0gq3ANG%2BFL0SQuj4AlDrh42FqFEzs8YiFmHOhTJURcByDMIazU7iwcQG0NPeb6XVcwxnHxiCR7EPRRWqd7unWAerrcfwa7mw5h%2BaN207Ssd6gWWpzV3UmU4%2BeBaLffogIRIT4kG5XjBXTzFKDv3FNH22gKRvt9v8%2FbZGNi0gm%2F7Pa9iSiuOCmxOgxr0UaBbdNa5ylAmdZOHLYxhvZ%2Fq0ej%2Bs01eoANu9ef16IQ%2Fctg9a%2BLdEvuHSybP1zrNudwYe%2Fcmba1hdkdy9ZfgXax6KrUcCnbuX0QE4V9Q%2Fc0SaICj5aFBZT7Z%2BkrcvPoAdc3NKuHo8CxP44X2F9Yv2H0jCAmHf6FOI9mu0EFVRqfZANQGSHh6ZJk64XvbBRhdcLJKrC1KghQJfBK6mraIbPcTNyGQ5xUozT72vD1YykJDrb9frU4b3eSbzqYoZYogffrgwYUptHVFMecpoQj7xCSx2LZCEsaRTSW5kvvxAWVUIq5YoirIv%2FVdMOcNUdmpllX2yidDU8pdr4xRz94opGLC23DMRgPwBIWRS5XqAFyePI1na9xB6uryBVp6sGwhQqTMrwNzy%2FruryXe3j7CS8E39p2OKoOHjvezd11BnrfT7qx6Yy7BZVLOIz9%2BwNbtcSD6EzC6yZPNBjqkAbjOOL%2FWveBIIViFqm361LsAVqTHa3Q8TB441Oe6IMV%2B0ANi4m5S8UvOOGK0ckmLPeLMT0VaF1CqMJnqNndBDZQ%2BuWFkYB7B2DhTQuUWqrqgU1xSOQbLtH9gh4xbTuvKYnPjz%2BXIqHJy2D90zPBtO8lsP8lmXOVFyrHLdDYaN%2FTEJfkHwpE%2FfxOpJsy%2B8XZI%2F%2BYlLYmibM14wc7qPrFKmLWhp4Z6&X-Amz-Signature=07c55a66a2d463409020a43c1449aa224ca6bcec558be23481547a740acc4917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

