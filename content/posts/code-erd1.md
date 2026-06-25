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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQ3SOI4%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICOgYMtT%2BGfBRQ6XQnSe70rCjQkSJGUOQYyfEyuGixgtAiBfH9GhS6tMmOALJY%2BdridLOF7aaWn4wde%2FDfQdDEiRDCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM4emkcBqr77SDZz4SKtwDOk2INbR%2B36%2B%2BfAbjgAr6KszvpMMnLtJvCydSkxdXvhP%2B4WqpN7xPajQHIarVz6SlTl6F7v%2F1szOPK3Xm%2FltUMS25rRlekCaEB%2BWaLszZkJ76zDc1Oo4dT3t1ZpX1oE5TFtLr4j5OLCjWIGSqJMpEG3HS6mjE%2Bxx66tMjOrfiD3nhqUPB73z3DCUBnRR7L4rUp48V7lHn3XBTeR01tHWmU3gtLdHxKtOi%2FIwVyONcWB8MlVHxjDlpQTNFH5O6lq%2FRSAVRw6UhsA8Jrt6TTph8ZGUBchDb7hpENePJoqt52gFmwoAup2NVuRqiZKMpce7TIOjoswatjp2xQdCByrj0PcT5nalqQ1P7RpepevNtRcYT3ECl7235gdNTNoS1WYCfcMqRr8LaAzAP2J1EX7zGqhC0Lg9WLWiwTNdzTMKxrT8iwd3EDvaw%2F1Vmv7Sl5XnHp0AKTbKsiL4n7Qxrm11RJEffiEfUiRREfuST7ZtkWCJhyx01%2FJKxFKLs65ahaOOuvOsonqH19Uv2CN2Gcfp8GIjZpOFpK6qhVfKDR2C0wXV7IfyhZpoeERcWKThIiFMIa6KRhPzdOsTMmAvkPd6XBxmKemlK156DQjVNaPCPLoDHx92bsg4jrAYKw80wtr3y0QY6pgGsIFeJ2asLC2HNGTnN8vOxr8uZEmba8kuLcP9iWtyjxb7zEF0X9t8%2BY1tV6eMTU9P7%2F3%2BM2r3CMi%2B75racSOPYI2G%2BojjQ%2BAQ%2BG%2B%2BGYwL5XHkNZZhdu3EqJVaxkdgJuLSK0qgYkAIe0BtNVhbgN3G4yRgS%2F301U037P6qDwzSI%2FwUfbBOJzvbiAmnHWsE3EXAMYZksf7OFdqmVrq1IhANBioKFjAhM&X-Amz-Signature=6fa1376af1423e234676a08c05bf8e64e11a2306f6ea1facffdd8d7ba07bad73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQBS6ZN%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHHjJsnr00u9wjBrtEXMcNk3gtY6ALuP87BYKpg%2FCp1YAiEAo86lDo3Ra3eM2QVgcm9exs7O6IZvDMFFSDCoBz9NcqYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEC0bnsNdSyugxQDQircAwgd6%2B3hnokbVJ7orJg%2Fmfomjyq7JrYg06mC%2BOExZXsAU%2F2p0TWKiRZn4tSD9hFGdp%2BhDBrJ%2BoADunPG2Z6Y%2FS9kkAgadQDGa%2Fqa5UNBpZxBZdydQW88hXwBB6PMNd6UETXFVmhvmhdr9RVD4kQ6vZ0bdEZCnU%2BzjoNv8GhEVTKLH7yrsfa9hR%2BSs43XYudTeFrsAQ%2FPVdbV5keiWnT0te8cGQ76zw5UVtbwsc1Ln6xqC2UPWLECRY%2FnZaBE6tSe0QV18WblmL9wMwPhuo04Nm3HY9UHE39Uu4FnYxx1XoQnXMMUm2iD9lJ%2F53hbN6cip4g6KLVuWMGwRkC0BJ3YPhnf3srrdsIW3TZDbnWwX9i0wC%2FC2ViiXKBCfBCVQ5L6ds2hK%2Bwuxht%2FPqhxXbMbV%2BBpz0wQ7GujlRb66Sy%2Fk5rmd%2FUVR1jaIw8l5JzY29r4eEu4%2Bm25UiXnWYe1HzzHURKIPktgF3KGyOcRP8xvjnuQ7GhGEOD1nM40rmIzpIEhwtg9utQJb1zxNHXWv00gZg%2FGO7Cm16jG%2FIXr0xzoWl66V%2BNNM9FOIaIMCHnVxUCSahZ03rTppDuw%2BYGG9JGjvr9rih75Kd11SMDZCshiK4vEVC%2FRaHNl1AUGpF6UMIC%2F8tEGOqUBzdfdJiDRcQBg2VhOGs05V91L2EBPARpmNYnBa%2FIi4DfoT%2FLIz9AXBT6imW7MoLcDLRmjfvJu2P0sxtE0BovernR%2FavnR%2Baj2BaUIGXHV6aU2Yhu84FFeU40A6kv3%2FYr7q3DMHNMZWTfwwb02enaRoAoKBU2tUFOPXIpbsWGxVJSfiU1Sx%2B4uv3Z24BriUV1J1M%2Fm411oYM%2F2m%2FubS9xjRqDgHA8a&X-Amz-Signature=fb9362de907c7a916a7735ee16ffb6f354c5ac79b518ebae21ceb431f0ec9e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQBS6ZN%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHHjJsnr00u9wjBrtEXMcNk3gtY6ALuP87BYKpg%2FCp1YAiEAo86lDo3Ra3eM2QVgcm9exs7O6IZvDMFFSDCoBz9NcqYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEC0bnsNdSyugxQDQircAwgd6%2B3hnokbVJ7orJg%2Fmfomjyq7JrYg06mC%2BOExZXsAU%2F2p0TWKiRZn4tSD9hFGdp%2BhDBrJ%2BoADunPG2Z6Y%2FS9kkAgadQDGa%2Fqa5UNBpZxBZdydQW88hXwBB6PMNd6UETXFVmhvmhdr9RVD4kQ6vZ0bdEZCnU%2BzjoNv8GhEVTKLH7yrsfa9hR%2BSs43XYudTeFrsAQ%2FPVdbV5keiWnT0te8cGQ76zw5UVtbwsc1Ln6xqC2UPWLECRY%2FnZaBE6tSe0QV18WblmL9wMwPhuo04Nm3HY9UHE39Uu4FnYxx1XoQnXMMUm2iD9lJ%2F53hbN6cip4g6KLVuWMGwRkC0BJ3YPhnf3srrdsIW3TZDbnWwX9i0wC%2FC2ViiXKBCfBCVQ5L6ds2hK%2Bwuxht%2FPqhxXbMbV%2BBpz0wQ7GujlRb66Sy%2Fk5rmd%2FUVR1jaIw8l5JzY29r4eEu4%2Bm25UiXnWYe1HzzHURKIPktgF3KGyOcRP8xvjnuQ7GhGEOD1nM40rmIzpIEhwtg9utQJb1zxNHXWv00gZg%2FGO7Cm16jG%2FIXr0xzoWl66V%2BNNM9FOIaIMCHnVxUCSahZ03rTppDuw%2BYGG9JGjvr9rih75Kd11SMDZCshiK4vEVC%2FRaHNl1AUGpF6UMIC%2F8tEGOqUBzdfdJiDRcQBg2VhOGs05V91L2EBPARpmNYnBa%2FIi4DfoT%2FLIz9AXBT6imW7MoLcDLRmjfvJu2P0sxtE0BovernR%2FavnR%2Baj2BaUIGXHV6aU2Yhu84FFeU40A6kv3%2FYr7q3DMHNMZWTfwwb02enaRoAoKBU2tUFOPXIpbsWGxVJSfiU1Sx%2B4uv3Z24BriUV1J1M%2Fm411oYM%2F2m%2FubS9xjRqDgHA8a&X-Amz-Signature=1a777e950a4376f06a6cfa1ecfcfc4b7780ab4d4ab9427e1d66fef2684b4d25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQBS6ZN%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHHjJsnr00u9wjBrtEXMcNk3gtY6ALuP87BYKpg%2FCp1YAiEAo86lDo3Ra3eM2QVgcm9exs7O6IZvDMFFSDCoBz9NcqYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEC0bnsNdSyugxQDQircAwgd6%2B3hnokbVJ7orJg%2Fmfomjyq7JrYg06mC%2BOExZXsAU%2F2p0TWKiRZn4tSD9hFGdp%2BhDBrJ%2BoADunPG2Z6Y%2FS9kkAgadQDGa%2Fqa5UNBpZxBZdydQW88hXwBB6PMNd6UETXFVmhvmhdr9RVD4kQ6vZ0bdEZCnU%2BzjoNv8GhEVTKLH7yrsfa9hR%2BSs43XYudTeFrsAQ%2FPVdbV5keiWnT0te8cGQ76zw5UVtbwsc1Ln6xqC2UPWLECRY%2FnZaBE6tSe0QV18WblmL9wMwPhuo04Nm3HY9UHE39Uu4FnYxx1XoQnXMMUm2iD9lJ%2F53hbN6cip4g6KLVuWMGwRkC0BJ3YPhnf3srrdsIW3TZDbnWwX9i0wC%2FC2ViiXKBCfBCVQ5L6ds2hK%2Bwuxht%2FPqhxXbMbV%2BBpz0wQ7GujlRb66Sy%2Fk5rmd%2FUVR1jaIw8l5JzY29r4eEu4%2Bm25UiXnWYe1HzzHURKIPktgF3KGyOcRP8xvjnuQ7GhGEOD1nM40rmIzpIEhwtg9utQJb1zxNHXWv00gZg%2FGO7Cm16jG%2FIXr0xzoWl66V%2BNNM9FOIaIMCHnVxUCSahZ03rTppDuw%2BYGG9JGjvr9rih75Kd11SMDZCshiK4vEVC%2FRaHNl1AUGpF6UMIC%2F8tEGOqUBzdfdJiDRcQBg2VhOGs05V91L2EBPARpmNYnBa%2FIi4DfoT%2FLIz9AXBT6imW7MoLcDLRmjfvJu2P0sxtE0BovernR%2FavnR%2Baj2BaUIGXHV6aU2Yhu84FFeU40A6kv3%2FYr7q3DMHNMZWTfwwb02enaRoAoKBU2tUFOPXIpbsWGxVJSfiU1Sx%2B4uv3Z24BriUV1J1M%2Fm411oYM%2F2m%2FubS9xjRqDgHA8a&X-Amz-Signature=597e5bfcef5244fec2ba998886b85b6b0d89e7c015cad4f1166d05877f0e87d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQBS6ZN%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHHjJsnr00u9wjBrtEXMcNk3gtY6ALuP87BYKpg%2FCp1YAiEAo86lDo3Ra3eM2QVgcm9exs7O6IZvDMFFSDCoBz9NcqYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEC0bnsNdSyugxQDQircAwgd6%2B3hnokbVJ7orJg%2Fmfomjyq7JrYg06mC%2BOExZXsAU%2F2p0TWKiRZn4tSD9hFGdp%2BhDBrJ%2BoADunPG2Z6Y%2FS9kkAgadQDGa%2Fqa5UNBpZxBZdydQW88hXwBB6PMNd6UETXFVmhvmhdr9RVD4kQ6vZ0bdEZCnU%2BzjoNv8GhEVTKLH7yrsfa9hR%2BSs43XYudTeFrsAQ%2FPVdbV5keiWnT0te8cGQ76zw5UVtbwsc1Ln6xqC2UPWLECRY%2FnZaBE6tSe0QV18WblmL9wMwPhuo04Nm3HY9UHE39Uu4FnYxx1XoQnXMMUm2iD9lJ%2F53hbN6cip4g6KLVuWMGwRkC0BJ3YPhnf3srrdsIW3TZDbnWwX9i0wC%2FC2ViiXKBCfBCVQ5L6ds2hK%2Bwuxht%2FPqhxXbMbV%2BBpz0wQ7GujlRb66Sy%2Fk5rmd%2FUVR1jaIw8l5JzY29r4eEu4%2Bm25UiXnWYe1HzzHURKIPktgF3KGyOcRP8xvjnuQ7GhGEOD1nM40rmIzpIEhwtg9utQJb1zxNHXWv00gZg%2FGO7Cm16jG%2FIXr0xzoWl66V%2BNNM9FOIaIMCHnVxUCSahZ03rTppDuw%2BYGG9JGjvr9rih75Kd11SMDZCshiK4vEVC%2FRaHNl1AUGpF6UMIC%2F8tEGOqUBzdfdJiDRcQBg2VhOGs05V91L2EBPARpmNYnBa%2FIi4DfoT%2FLIz9AXBT6imW7MoLcDLRmjfvJu2P0sxtE0BovernR%2FavnR%2Baj2BaUIGXHV6aU2Yhu84FFeU40A6kv3%2FYr7q3DMHNMZWTfwwb02enaRoAoKBU2tUFOPXIpbsWGxVJSfiU1Sx%2B4uv3Z24BriUV1J1M%2Fm411oYM%2F2m%2FubS9xjRqDgHA8a&X-Amz-Signature=b68273c0267eae58ad3f1f00432ec8f671fab7226361ef99113c077fe38bfcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQBS6ZN%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHHjJsnr00u9wjBrtEXMcNk3gtY6ALuP87BYKpg%2FCp1YAiEAo86lDo3Ra3eM2QVgcm9exs7O6IZvDMFFSDCoBz9NcqYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEC0bnsNdSyugxQDQircAwgd6%2B3hnokbVJ7orJg%2Fmfomjyq7JrYg06mC%2BOExZXsAU%2F2p0TWKiRZn4tSD9hFGdp%2BhDBrJ%2BoADunPG2Z6Y%2FS9kkAgadQDGa%2Fqa5UNBpZxBZdydQW88hXwBB6PMNd6UETXFVmhvmhdr9RVD4kQ6vZ0bdEZCnU%2BzjoNv8GhEVTKLH7yrsfa9hR%2BSs43XYudTeFrsAQ%2FPVdbV5keiWnT0te8cGQ76zw5UVtbwsc1Ln6xqC2UPWLECRY%2FnZaBE6tSe0QV18WblmL9wMwPhuo04Nm3HY9UHE39Uu4FnYxx1XoQnXMMUm2iD9lJ%2F53hbN6cip4g6KLVuWMGwRkC0BJ3YPhnf3srrdsIW3TZDbnWwX9i0wC%2FC2ViiXKBCfBCVQ5L6ds2hK%2Bwuxht%2FPqhxXbMbV%2BBpz0wQ7GujlRb66Sy%2Fk5rmd%2FUVR1jaIw8l5JzY29r4eEu4%2Bm25UiXnWYe1HzzHURKIPktgF3KGyOcRP8xvjnuQ7GhGEOD1nM40rmIzpIEhwtg9utQJb1zxNHXWv00gZg%2FGO7Cm16jG%2FIXr0xzoWl66V%2BNNM9FOIaIMCHnVxUCSahZ03rTppDuw%2BYGG9JGjvr9rih75Kd11SMDZCshiK4vEVC%2FRaHNl1AUGpF6UMIC%2F8tEGOqUBzdfdJiDRcQBg2VhOGs05V91L2EBPARpmNYnBa%2FIi4DfoT%2FLIz9AXBT6imW7MoLcDLRmjfvJu2P0sxtE0BovernR%2FavnR%2Baj2BaUIGXHV6aU2Yhu84FFeU40A6kv3%2FYr7q3DMHNMZWTfwwb02enaRoAoKBU2tUFOPXIpbsWGxVJSfiU1Sx%2B4uv3Z24BriUV1J1M%2Fm411oYM%2F2m%2FubS9xjRqDgHA8a&X-Amz-Signature=839e35f1ddb88ed7952f433e65028c5edb1abb5341362319a9c99244fe41f8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OQ3SOI4%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICOgYMtT%2BGfBRQ6XQnSe70rCjQkSJGUOQYyfEyuGixgtAiBfH9GhS6tMmOALJY%2BdridLOF7aaWn4wde%2FDfQdDEiRDCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM4emkcBqr77SDZz4SKtwDOk2INbR%2B36%2B%2BfAbjgAr6KszvpMMnLtJvCydSkxdXvhP%2B4WqpN7xPajQHIarVz6SlTl6F7v%2F1szOPK3Xm%2FltUMS25rRlekCaEB%2BWaLszZkJ76zDc1Oo4dT3t1ZpX1oE5TFtLr4j5OLCjWIGSqJMpEG3HS6mjE%2Bxx66tMjOrfiD3nhqUPB73z3DCUBnRR7L4rUp48V7lHn3XBTeR01tHWmU3gtLdHxKtOi%2FIwVyONcWB8MlVHxjDlpQTNFH5O6lq%2FRSAVRw6UhsA8Jrt6TTph8ZGUBchDb7hpENePJoqt52gFmwoAup2NVuRqiZKMpce7TIOjoswatjp2xQdCByrj0PcT5nalqQ1P7RpepevNtRcYT3ECl7235gdNTNoS1WYCfcMqRr8LaAzAP2J1EX7zGqhC0Lg9WLWiwTNdzTMKxrT8iwd3EDvaw%2F1Vmv7Sl5XnHp0AKTbKsiL4n7Qxrm11RJEffiEfUiRREfuST7ZtkWCJhyx01%2FJKxFKLs65ahaOOuvOsonqH19Uv2CN2Gcfp8GIjZpOFpK6qhVfKDR2C0wXV7IfyhZpoeERcWKThIiFMIa6KRhPzdOsTMmAvkPd6XBxmKemlK156DQjVNaPCPLoDHx92bsg4jrAYKw80wtr3y0QY6pgGsIFeJ2asLC2HNGTnN8vOxr8uZEmba8kuLcP9iWtyjxb7zEF0X9t8%2BY1tV6eMTU9P7%2F3%2BM2r3CMi%2B75racSOPYI2G%2BojjQ%2BAQ%2BG%2B%2BGYwL5XHkNZZhdu3EqJVaxkdgJuLSK0qgYkAIe0BtNVhbgN3G4yRgS%2F301U037P6qDwzSI%2FwUfbBOJzvbiAmnHWsE3EXAMYZksf7OFdqmVrq1IhANBioKFjAhM&X-Amz-Signature=bbe892e30146c20aedc3baa4848a49f0447232e6ed99612076286a4a6a28e2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

