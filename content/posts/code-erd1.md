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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBVZBCF2%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfFNyBC9w7OeeIX8rBR0fhaUkudCsePmMqI4M7gF2xIQIgI%2BQYsPEZSPypqkqm7OlLRRm7ocvG4E9L57HjMgs3qp0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BzjZi9HQAMGky25CrcA3rLr4DwkQRJFm%2B9mSBq9JiHUtSoXpB%2FTgNMP%2BN7TdMEE9l0eU8btFvGiIqdp7z5OeJUF8b0gbI70oiJBVtnxo3gggyIuGrE6nau5rceW37jf78srAmQqs8BH5hBpg50daYYBo2JNEbLglN9kMMzNDncU8PIhtF%2FF0yo0GRSTpq7TcTejJh6DpQzeVZ2xeQIDBSZ5SmB0e0F5hhM%2F%2Fgy%2BxEYD0XhM909DLIwMMhJYDMZiAcCHfYfdjfexMli1mQkkFxPQGgz4Mi%2BpH1M8yDcb0Ju%2FdIbH5O10LtubE48zvW%2FCzIi2S9MN5zMLNnz0aZIXSPDg9ZnHXvltJaECy8W7qWPN6awWZ%2BUW%2F6cU%2FNfD0EFak%2FI%2F01Ze1HOkiurzXr56LH3i5BR04KjvYjru%2FRTJW%2FVlsgAXuMdnE43h0ph%2BxbO2l8SQJur%2B1%2ByHDnqAHiBgPMdohhhtGfA%2FaonY52d6SCpuQzAQHNns87TIXTKXsN7SOsafuYndawAMF5lov1Z3M%2Fc9lX95F8UL2DEe0GILc0IiOLJNh57EZ3gS4OMgzcmd3BgmU76jnv8SAvG0EaLpptFGVCZXFWER9CYK4Ljjl4Hor6f%2BJXxDwS%2FtMLllx1jwz%2BVeESGrrieDeOrMNnK48gGOqUBPbPGRb7sidn9dwtNS0cFovbE02moHNECgvDbOoFbYNzR3iNdi8bOzK3bL2j4AphhEMb5cceHa%2Fw2ygNUBExuMSGdS2qWd5UhbQZqJyl35rs%2FNCevmqJZZYx%2BCTrLOajlnWYisovQFJX1M0KIj%2BrSWU1FRhommsvG2uvgDT0JYcZZ7GsQf8OeFVI0dBQ7W9Hm2IdR9Nab1vCsNSzcc1RGVtuRPZY1&X-Amz-Signature=1d1910120679c46bb0ec0ef489481bda523bec188a66b3904c4ad60fbbe64c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWSORBF%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQTgAYPvosVeFNtZ%2FkMAVT9BsL87pxSks1JSM%2BduwuAiEAjtTjcps9CSwHYdGk36uDdX%2B5v1qOUcy6m8uH1Ec289UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMI06UyZdHB%2FzBVWircAwvMo3qk08DEMKmCg%2FVcdXTemq8VcQgsyqw2I%2Bvz%2B5kvCHUi4W7IelVJ%2BpTuGR1fMophmd0iYXjmVA6r%2BMEWY%2F4sHrFtZSXalEBY7ULyu2SWhkpl2EyWeUnM0e8WAi5ofmh2Q8DXnZdN7bX2nJxnRqXHUw3L3BXj8o1gmvJSQdetGViYxYoi16ZQrl0yhmpDXcgB87vwk568DkGbeJkJu9fVKgCbZGDlJ%2BuzLTAsakrY5lPRQy9bDk%2FzfR4nBGA7kPBd%2FA5o%2F%2FSVaNcvjQl8D%2BvxBx7%2BmWj8w0HE6YH5Ktxp7txWXgHjTERI6KBDMsU7JpE0mgSdskrRUOruclgS%2FLXvdW3uzaGjEl5fnNfqxme7OnUTC4tVZmzGCy6FXptDznOje1i8bQqmyoELtm4LLFKJ6oHXpSzQvLYFIFcCnD2R%2FNJskUEgJZNFGQsEqFc9UPORGawkodujmjE0KJRKDVD2XGSo1yxhij74liwLKIpvVn6ddr0QztN80Yn%2FE%2Bz78eGSa%2Fe5YI%2Fxa%2FACShMmLRFun%2FYEwsnCXHY%2FmC6ydBlToj63VYDIzUYTtWn6TmNN86Sbdo4NyIqosnteiPDKEaubYd2qUfTi6s%2FSY08ajUlnOWZ6LZ6bSkVDvI4UML3N48gGOqUBol313aeI1N1rpUNZvden%2Frn9n3nCdGMf10SR4dJdPwbYUOeIafkTyI8KRBktmdsdUyENFhMx9hzaiGxrU8M01izDNdxz75DeqapWpkk6auqrbtzPCXvKfRjRTXd8SCOQ9UXX3fc5j2%2Bg4ufcC%2Fu7pqZE92fEkgNCB9RVyx7NdE146%2FFpwwh%2B%2BzP0LL07oPPsbDQSavpubcs3MhMvdxlGC0v6%2BNcg&X-Amz-Signature=ad0acfd37cfcf0fa0d5e61bd9cf08f3e5281dd0624509fadef76b125a7b63b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWSORBF%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQTgAYPvosVeFNtZ%2FkMAVT9BsL87pxSks1JSM%2BduwuAiEAjtTjcps9CSwHYdGk36uDdX%2B5v1qOUcy6m8uH1Ec289UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMI06UyZdHB%2FzBVWircAwvMo3qk08DEMKmCg%2FVcdXTemq8VcQgsyqw2I%2Bvz%2B5kvCHUi4W7IelVJ%2BpTuGR1fMophmd0iYXjmVA6r%2BMEWY%2F4sHrFtZSXalEBY7ULyu2SWhkpl2EyWeUnM0e8WAi5ofmh2Q8DXnZdN7bX2nJxnRqXHUw3L3BXj8o1gmvJSQdetGViYxYoi16ZQrl0yhmpDXcgB87vwk568DkGbeJkJu9fVKgCbZGDlJ%2BuzLTAsakrY5lPRQy9bDk%2FzfR4nBGA7kPBd%2FA5o%2F%2FSVaNcvjQl8D%2BvxBx7%2BmWj8w0HE6YH5Ktxp7txWXgHjTERI6KBDMsU7JpE0mgSdskrRUOruclgS%2FLXvdW3uzaGjEl5fnNfqxme7OnUTC4tVZmzGCy6FXptDznOje1i8bQqmyoELtm4LLFKJ6oHXpSzQvLYFIFcCnD2R%2FNJskUEgJZNFGQsEqFc9UPORGawkodujmjE0KJRKDVD2XGSo1yxhij74liwLKIpvVn6ddr0QztN80Yn%2FE%2Bz78eGSa%2Fe5YI%2Fxa%2FACShMmLRFun%2FYEwsnCXHY%2FmC6ydBlToj63VYDIzUYTtWn6TmNN86Sbdo4NyIqosnteiPDKEaubYd2qUfTi6s%2FSY08ajUlnOWZ6LZ6bSkVDvI4UML3N48gGOqUBol313aeI1N1rpUNZvden%2Frn9n3nCdGMf10SR4dJdPwbYUOeIafkTyI8KRBktmdsdUyENFhMx9hzaiGxrU8M01izDNdxz75DeqapWpkk6auqrbtzPCXvKfRjRTXd8SCOQ9UXX3fc5j2%2Bg4ufcC%2Fu7pqZE92fEkgNCB9RVyx7NdE146%2FFpwwh%2B%2BzP0LL07oPPsbDQSavpubcs3MhMvdxlGC0v6%2BNcg&X-Amz-Signature=d2c40ea0b442cb91eca2dc5ddec15dafbe6c3dbfb97fd30d3e85b36e0147c420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWSORBF%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQTgAYPvosVeFNtZ%2FkMAVT9BsL87pxSks1JSM%2BduwuAiEAjtTjcps9CSwHYdGk36uDdX%2B5v1qOUcy6m8uH1Ec289UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMI06UyZdHB%2FzBVWircAwvMo3qk08DEMKmCg%2FVcdXTemq8VcQgsyqw2I%2Bvz%2B5kvCHUi4W7IelVJ%2BpTuGR1fMophmd0iYXjmVA6r%2BMEWY%2F4sHrFtZSXalEBY7ULyu2SWhkpl2EyWeUnM0e8WAi5ofmh2Q8DXnZdN7bX2nJxnRqXHUw3L3BXj8o1gmvJSQdetGViYxYoi16ZQrl0yhmpDXcgB87vwk568DkGbeJkJu9fVKgCbZGDlJ%2BuzLTAsakrY5lPRQy9bDk%2FzfR4nBGA7kPBd%2FA5o%2F%2FSVaNcvjQl8D%2BvxBx7%2BmWj8w0HE6YH5Ktxp7txWXgHjTERI6KBDMsU7JpE0mgSdskrRUOruclgS%2FLXvdW3uzaGjEl5fnNfqxme7OnUTC4tVZmzGCy6FXptDznOje1i8bQqmyoELtm4LLFKJ6oHXpSzQvLYFIFcCnD2R%2FNJskUEgJZNFGQsEqFc9UPORGawkodujmjE0KJRKDVD2XGSo1yxhij74liwLKIpvVn6ddr0QztN80Yn%2FE%2Bz78eGSa%2Fe5YI%2Fxa%2FACShMmLRFun%2FYEwsnCXHY%2FmC6ydBlToj63VYDIzUYTtWn6TmNN86Sbdo4NyIqosnteiPDKEaubYd2qUfTi6s%2FSY08ajUlnOWZ6LZ6bSkVDvI4UML3N48gGOqUBol313aeI1N1rpUNZvden%2Frn9n3nCdGMf10SR4dJdPwbYUOeIafkTyI8KRBktmdsdUyENFhMx9hzaiGxrU8M01izDNdxz75DeqapWpkk6auqrbtzPCXvKfRjRTXd8SCOQ9UXX3fc5j2%2Bg4ufcC%2Fu7pqZE92fEkgNCB9RVyx7NdE146%2FFpwwh%2B%2BzP0LL07oPPsbDQSavpubcs3MhMvdxlGC0v6%2BNcg&X-Amz-Signature=9cbe16e1a00d4d84918d5e396af6b367e139de5534bd3a7b88426527ea91ac06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWSORBF%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQTgAYPvosVeFNtZ%2FkMAVT9BsL87pxSks1JSM%2BduwuAiEAjtTjcps9CSwHYdGk36uDdX%2B5v1qOUcy6m8uH1Ec289UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMI06UyZdHB%2FzBVWircAwvMo3qk08DEMKmCg%2FVcdXTemq8VcQgsyqw2I%2Bvz%2B5kvCHUi4W7IelVJ%2BpTuGR1fMophmd0iYXjmVA6r%2BMEWY%2F4sHrFtZSXalEBY7ULyu2SWhkpl2EyWeUnM0e8WAi5ofmh2Q8DXnZdN7bX2nJxnRqXHUw3L3BXj8o1gmvJSQdetGViYxYoi16ZQrl0yhmpDXcgB87vwk568DkGbeJkJu9fVKgCbZGDlJ%2BuzLTAsakrY5lPRQy9bDk%2FzfR4nBGA7kPBd%2FA5o%2F%2FSVaNcvjQl8D%2BvxBx7%2BmWj8w0HE6YH5Ktxp7txWXgHjTERI6KBDMsU7JpE0mgSdskrRUOruclgS%2FLXvdW3uzaGjEl5fnNfqxme7OnUTC4tVZmzGCy6FXptDznOje1i8bQqmyoELtm4LLFKJ6oHXpSzQvLYFIFcCnD2R%2FNJskUEgJZNFGQsEqFc9UPORGawkodujmjE0KJRKDVD2XGSo1yxhij74liwLKIpvVn6ddr0QztN80Yn%2FE%2Bz78eGSa%2Fe5YI%2Fxa%2FACShMmLRFun%2FYEwsnCXHY%2FmC6ydBlToj63VYDIzUYTtWn6TmNN86Sbdo4NyIqosnteiPDKEaubYd2qUfTi6s%2FSY08ajUlnOWZ6LZ6bSkVDvI4UML3N48gGOqUBol313aeI1N1rpUNZvden%2Frn9n3nCdGMf10SR4dJdPwbYUOeIafkTyI8KRBktmdsdUyENFhMx9hzaiGxrU8M01izDNdxz75DeqapWpkk6auqrbtzPCXvKfRjRTXd8SCOQ9UXX3fc5j2%2Bg4ufcC%2Fu7pqZE92fEkgNCB9RVyx7NdE146%2FFpwwh%2B%2BzP0LL07oPPsbDQSavpubcs3MhMvdxlGC0v6%2BNcg&X-Amz-Signature=81755c72f7095d98a490ec593ca6bb188c6fe6dc4a5de8a22ee694701bcda71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSWSORBF%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoQTgAYPvosVeFNtZ%2FkMAVT9BsL87pxSks1JSM%2BduwuAiEAjtTjcps9CSwHYdGk36uDdX%2B5v1qOUcy6m8uH1Ec289UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMI06UyZdHB%2FzBVWircAwvMo3qk08DEMKmCg%2FVcdXTemq8VcQgsyqw2I%2Bvz%2B5kvCHUi4W7IelVJ%2BpTuGR1fMophmd0iYXjmVA6r%2BMEWY%2F4sHrFtZSXalEBY7ULyu2SWhkpl2EyWeUnM0e8WAi5ofmh2Q8DXnZdN7bX2nJxnRqXHUw3L3BXj8o1gmvJSQdetGViYxYoi16ZQrl0yhmpDXcgB87vwk568DkGbeJkJu9fVKgCbZGDlJ%2BuzLTAsakrY5lPRQy9bDk%2FzfR4nBGA7kPBd%2FA5o%2F%2FSVaNcvjQl8D%2BvxBx7%2BmWj8w0HE6YH5Ktxp7txWXgHjTERI6KBDMsU7JpE0mgSdskrRUOruclgS%2FLXvdW3uzaGjEl5fnNfqxme7OnUTC4tVZmzGCy6FXptDznOje1i8bQqmyoELtm4LLFKJ6oHXpSzQvLYFIFcCnD2R%2FNJskUEgJZNFGQsEqFc9UPORGawkodujmjE0KJRKDVD2XGSo1yxhij74liwLKIpvVn6ddr0QztN80Yn%2FE%2Bz78eGSa%2Fe5YI%2Fxa%2FACShMmLRFun%2FYEwsnCXHY%2FmC6ydBlToj63VYDIzUYTtWn6TmNN86Sbdo4NyIqosnteiPDKEaubYd2qUfTi6s%2FSY08ajUlnOWZ6LZ6bSkVDvI4UML3N48gGOqUBol313aeI1N1rpUNZvden%2Frn9n3nCdGMf10SR4dJdPwbYUOeIafkTyI8KRBktmdsdUyENFhMx9hzaiGxrU8M01izDNdxz75DeqapWpkk6auqrbtzPCXvKfRjRTXd8SCOQ9UXX3fc5j2%2Bg4ufcC%2Fu7pqZE92fEkgNCB9RVyx7NdE146%2FFpwwh%2B%2BzP0LL07oPPsbDQSavpubcs3MhMvdxlGC0v6%2BNcg&X-Amz-Signature=5b8f2dcad6e9c496d32a8e8ccc62833c417be73dd2fb095028ad3e5497c26037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBVZBCF2%2F20251116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251116T010648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfFNyBC9w7OeeIX8rBR0fhaUkudCsePmMqI4M7gF2xIQIgI%2BQYsPEZSPypqkqm7OlLRRm7ocvG4E9L57HjMgs3qp0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BzjZi9HQAMGky25CrcA3rLr4DwkQRJFm%2B9mSBq9JiHUtSoXpB%2FTgNMP%2BN7TdMEE9l0eU8btFvGiIqdp7z5OeJUF8b0gbI70oiJBVtnxo3gggyIuGrE6nau5rceW37jf78srAmQqs8BH5hBpg50daYYBo2JNEbLglN9kMMzNDncU8PIhtF%2FF0yo0GRSTpq7TcTejJh6DpQzeVZ2xeQIDBSZ5SmB0e0F5hhM%2F%2Fgy%2BxEYD0XhM909DLIwMMhJYDMZiAcCHfYfdjfexMli1mQkkFxPQGgz4Mi%2BpH1M8yDcb0Ju%2FdIbH5O10LtubE48zvW%2FCzIi2S9MN5zMLNnz0aZIXSPDg9ZnHXvltJaECy8W7qWPN6awWZ%2BUW%2F6cU%2FNfD0EFak%2FI%2F01Ze1HOkiurzXr56LH3i5BR04KjvYjru%2FRTJW%2FVlsgAXuMdnE43h0ph%2BxbO2l8SQJur%2B1%2ByHDnqAHiBgPMdohhhtGfA%2FaonY52d6SCpuQzAQHNns87TIXTKXsN7SOsafuYndawAMF5lov1Z3M%2Fc9lX95F8UL2DEe0GILc0IiOLJNh57EZ3gS4OMgzcmd3BgmU76jnv8SAvG0EaLpptFGVCZXFWER9CYK4Ljjl4Hor6f%2BJXxDwS%2FtMLllx1jwz%2BVeESGrrieDeOrMNnK48gGOqUBPbPGRb7sidn9dwtNS0cFovbE02moHNECgvDbOoFbYNzR3iNdi8bOzK3bL2j4AphhEMb5cceHa%2Fw2ygNUBExuMSGdS2qWd5UhbQZqJyl35rs%2FNCevmqJZZYx%2BCTrLOajlnWYisovQFJX1M0KIj%2BrSWU1FRhommsvG2uvgDT0JYcZZ7GsQf8OeFVI0dBQ7W9Hm2IdR9Nab1vCsNSzcc1RGVtuRPZY1&X-Amz-Signature=bafe329f9c4a9313e5263b50b2d26b249a5c9202e8b8058fd6311a4473166cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

