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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PM4PBIY%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iM%2BMvUL68Yq7AyFIzhdi6Cjn2KNwg0tIgwOhiZBSWgIhAICR8AWUqGGexjz%2Bf9MBnBz9RIrRBKbw4iDcKyVEkdHsKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzngfsx8NfV2VtS4sq3AOO1AlIP4nfkSTw9UWsyT3HWULSWD4QvUizI7Gfo61tq4AH3CRCR0EDpiEmEu2APxQZsZo48ZWFtx2DCxtiEFUi54FkVHktl%2FwcugI9k3GX3plTgGFxc6B%2BTRaT23zGqkymijj89%2FfgguB3CxlCDiPWkzXxrc5v3i3uTTOu%2BwBNd20GxS2NSKN0XL5trJRBqRvWoEd%2FPOdKms95Yfi1RoyAaJgyRh2i24s%2BAXZAsHTnOGlfSKqhI33NTZZx3ysVKgDr5EPTPOzngBPbwrJ%2Bq6%2FzOPbGyz9uZZsDaZkD%2FRD%2FMYLiKL9GOuHc3EpviaGj%2F7whO%2FEsPeqyxiNX27BwVNZo5x321%2Fwip5p1vwQW7KcaNinIVb69P3n09kh7dfFiij59nkZSKP%2B1j41O0yxJgje33fGZVxgPXTtI2pJK4sWl7GH5UunusfvRQIp6FuvFoOqlIx5Im3Ha2fYFQFrx6Wg6%2BkOLo3Lrw3ENBFOb3ErH19pTkQr90QuSSinESvRSkPT9DNzKViOFCYuo5NB6xs%2BEHGG88CfaoMzdnhuqcJZknAMVbBTjdjfOytqlcIqEJ3UyGAZuZ0IWlK2XZJXMBXou3i6uTBdrNl2ieqzuh2rL%2BUxpwJzkL9g%2FbJrhaDCbkcfKBjqkAYyC3dY2xANZ55OIxAU5pb9n6aLZQIW5eDqTE5Hz0anXv1dFu6d61l7flKx%2BqhovbON3GlSl4wbTJpu0h3YeA7mAIhY1NVNO4Hf7VfKDSk0dIyOjXISqSgsOvTSj%2FGRbutgIsAukY1irI7I%2BmgHksEcEOzl%2BbqcKUF8lD7iadWCZWUf8HoRJzXltZm1t%2FS%2FSLm8%2FWYG431waJnSx3hZIhALNyeq2&X-Amz-Signature=3cf9c8cf46fd00b4eefbff06eb9bb4765f08f5ac784a0251e35e4a4e098bec1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5L7VE6J%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNYATx66ztwKneA0fFEY044m3GI47aVMJnC9YxfHErFAIgbdIeV70U0ECfrhFdFmZ7BtEkawcWLDErK8EtiPSR9WcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfgDaiKnaFudyUW5SrcAyJ8PmfwILxnLA5RbVINsJ1LxobNrnB%2Fn0qWTmdKJn7AyESDKVb%2Fl4f81zTm%2BvYEBs%2BhIR2OpUBBhuvnLDJh%2BK5tnG4BoiPB%2FKz%2BQKTKzy8IASvAQKplVQsOUBPJkV5ghkl21UyMezrP3l2AZf%2BmRm4ofYRQK5weUijfWmJ%2BWz5mqhQxeQb93kigjq%2BQftDS0k8FlhPE68z6uo4pgAOkWSNUgFJrI767qgiGNzP%2B9d%2F9s6USLQ9AGNv%2FOT%2BRunRA83I2o1HCLQvpwPrTXNqckTUG3KfD586Ryz7l0tNS5KqUl8yKmZLrFK6fL9E7%2BRJN5g59Xqu9%2FBIXpzWIcfz5pJ%2BuDxIe8FC%2F9VwgCAUV3HAxC59PB8jG6pksR3OGF7FYTrwho%2BT9Q8oM9jPj%2BatkVUccTGDjEgXIrEF0KxNupb6dEIAK3fbMPkdjGlQgdZ9hA5gTPZj%2FmORPLdfMyDzmFJ2gIUvZdDqj4ffQVWHlgjPWvEfe%2Ft9so4X0qbs9CZvVAbCy57Nxm5vBeTXz%2B9TQLpSAi%2BAX33h5wc5zue%2BIIciX7hHHnrC1jEvDKoJXAQCgrH0ymJ1KPxLNoYQ8%2B%2Fsq%2Buqk%2BYcoU%2FE%2BgL6ek1GqNS0VYItYKeu3eZeqjX4HMJORx8oGOqUBYktywJKVPT7qK8V%2FvPA2L7JC3ug5wrEzpo7JGfe%2BSuR76s6G%2BzJtcSXX6VTkncAW5Rw3UGi5b8FyYEZ5BlyjuhWYTZUbixEe4NOf0IawfAeEKvpIEAdwkS8JAF3RNPet1HrQKTDK1wHETiMrdW8rhveC9PA1KN0WjvpsyU9aGPMRwvz2C6Hya%2FMr8XqjDfWrh4SzusCVHhiCQq4%2FEKr6qJoJEttZ&X-Amz-Signature=bf378d957b24b18667e4de920764f929e5015559b27a6fc12b55b33283bfabac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5L7VE6J%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNYATx66ztwKneA0fFEY044m3GI47aVMJnC9YxfHErFAIgbdIeV70U0ECfrhFdFmZ7BtEkawcWLDErK8EtiPSR9WcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfgDaiKnaFudyUW5SrcAyJ8PmfwILxnLA5RbVINsJ1LxobNrnB%2Fn0qWTmdKJn7AyESDKVb%2Fl4f81zTm%2BvYEBs%2BhIR2OpUBBhuvnLDJh%2BK5tnG4BoiPB%2FKz%2BQKTKzy8IASvAQKplVQsOUBPJkV5ghkl21UyMezrP3l2AZf%2BmRm4ofYRQK5weUijfWmJ%2BWz5mqhQxeQb93kigjq%2BQftDS0k8FlhPE68z6uo4pgAOkWSNUgFJrI767qgiGNzP%2B9d%2F9s6USLQ9AGNv%2FOT%2BRunRA83I2o1HCLQvpwPrTXNqckTUG3KfD586Ryz7l0tNS5KqUl8yKmZLrFK6fL9E7%2BRJN5g59Xqu9%2FBIXpzWIcfz5pJ%2BuDxIe8FC%2F9VwgCAUV3HAxC59PB8jG6pksR3OGF7FYTrwho%2BT9Q8oM9jPj%2BatkVUccTGDjEgXIrEF0KxNupb6dEIAK3fbMPkdjGlQgdZ9hA5gTPZj%2FmORPLdfMyDzmFJ2gIUvZdDqj4ffQVWHlgjPWvEfe%2Ft9so4X0qbs9CZvVAbCy57Nxm5vBeTXz%2B9TQLpSAi%2BAX33h5wc5zue%2BIIciX7hHHnrC1jEvDKoJXAQCgrH0ymJ1KPxLNoYQ8%2B%2Fsq%2Buqk%2BYcoU%2FE%2BgL6ek1GqNS0VYItYKeu3eZeqjX4HMJORx8oGOqUBYktywJKVPT7qK8V%2FvPA2L7JC3ug5wrEzpo7JGfe%2BSuR76s6G%2BzJtcSXX6VTkncAW5Rw3UGi5b8FyYEZ5BlyjuhWYTZUbixEe4NOf0IawfAeEKvpIEAdwkS8JAF3RNPet1HrQKTDK1wHETiMrdW8rhveC9PA1KN0WjvpsyU9aGPMRwvz2C6Hya%2FMr8XqjDfWrh4SzusCVHhiCQq4%2FEKr6qJoJEttZ&X-Amz-Signature=e2b967331aa93f153ffb87123b6da8fb580a72de28a2e820dc48fa987574dac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5L7VE6J%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNYATx66ztwKneA0fFEY044m3GI47aVMJnC9YxfHErFAIgbdIeV70U0ECfrhFdFmZ7BtEkawcWLDErK8EtiPSR9WcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfgDaiKnaFudyUW5SrcAyJ8PmfwILxnLA5RbVINsJ1LxobNrnB%2Fn0qWTmdKJn7AyESDKVb%2Fl4f81zTm%2BvYEBs%2BhIR2OpUBBhuvnLDJh%2BK5tnG4BoiPB%2FKz%2BQKTKzy8IASvAQKplVQsOUBPJkV5ghkl21UyMezrP3l2AZf%2BmRm4ofYRQK5weUijfWmJ%2BWz5mqhQxeQb93kigjq%2BQftDS0k8FlhPE68z6uo4pgAOkWSNUgFJrI767qgiGNzP%2B9d%2F9s6USLQ9AGNv%2FOT%2BRunRA83I2o1HCLQvpwPrTXNqckTUG3KfD586Ryz7l0tNS5KqUl8yKmZLrFK6fL9E7%2BRJN5g59Xqu9%2FBIXpzWIcfz5pJ%2BuDxIe8FC%2F9VwgCAUV3HAxC59PB8jG6pksR3OGF7FYTrwho%2BT9Q8oM9jPj%2BatkVUccTGDjEgXIrEF0KxNupb6dEIAK3fbMPkdjGlQgdZ9hA5gTPZj%2FmORPLdfMyDzmFJ2gIUvZdDqj4ffQVWHlgjPWvEfe%2Ft9so4X0qbs9CZvVAbCy57Nxm5vBeTXz%2B9TQLpSAi%2BAX33h5wc5zue%2BIIciX7hHHnrC1jEvDKoJXAQCgrH0ymJ1KPxLNoYQ8%2B%2Fsq%2Buqk%2BYcoU%2FE%2BgL6ek1GqNS0VYItYKeu3eZeqjX4HMJORx8oGOqUBYktywJKVPT7qK8V%2FvPA2L7JC3ug5wrEzpo7JGfe%2BSuR76s6G%2BzJtcSXX6VTkncAW5Rw3UGi5b8FyYEZ5BlyjuhWYTZUbixEe4NOf0IawfAeEKvpIEAdwkS8JAF3RNPet1HrQKTDK1wHETiMrdW8rhveC9PA1KN0WjvpsyU9aGPMRwvz2C6Hya%2FMr8XqjDfWrh4SzusCVHhiCQq4%2FEKr6qJoJEttZ&X-Amz-Signature=2c173792b851c0353850ca2ef47626b0684631581298befc59b15b5941bd7fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5L7VE6J%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNYATx66ztwKneA0fFEY044m3GI47aVMJnC9YxfHErFAIgbdIeV70U0ECfrhFdFmZ7BtEkawcWLDErK8EtiPSR9WcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfgDaiKnaFudyUW5SrcAyJ8PmfwILxnLA5RbVINsJ1LxobNrnB%2Fn0qWTmdKJn7AyESDKVb%2Fl4f81zTm%2BvYEBs%2BhIR2OpUBBhuvnLDJh%2BK5tnG4BoiPB%2FKz%2BQKTKzy8IASvAQKplVQsOUBPJkV5ghkl21UyMezrP3l2AZf%2BmRm4ofYRQK5weUijfWmJ%2BWz5mqhQxeQb93kigjq%2BQftDS0k8FlhPE68z6uo4pgAOkWSNUgFJrI767qgiGNzP%2B9d%2F9s6USLQ9AGNv%2FOT%2BRunRA83I2o1HCLQvpwPrTXNqckTUG3KfD586Ryz7l0tNS5KqUl8yKmZLrFK6fL9E7%2BRJN5g59Xqu9%2FBIXpzWIcfz5pJ%2BuDxIe8FC%2F9VwgCAUV3HAxC59PB8jG6pksR3OGF7FYTrwho%2BT9Q8oM9jPj%2BatkVUccTGDjEgXIrEF0KxNupb6dEIAK3fbMPkdjGlQgdZ9hA5gTPZj%2FmORPLdfMyDzmFJ2gIUvZdDqj4ffQVWHlgjPWvEfe%2Ft9so4X0qbs9CZvVAbCy57Nxm5vBeTXz%2B9TQLpSAi%2BAX33h5wc5zue%2BIIciX7hHHnrC1jEvDKoJXAQCgrH0ymJ1KPxLNoYQ8%2B%2Fsq%2Buqk%2BYcoU%2FE%2BgL6ek1GqNS0VYItYKeu3eZeqjX4HMJORx8oGOqUBYktywJKVPT7qK8V%2FvPA2L7JC3ug5wrEzpo7JGfe%2BSuR76s6G%2BzJtcSXX6VTkncAW5Rw3UGi5b8FyYEZ5BlyjuhWYTZUbixEe4NOf0IawfAeEKvpIEAdwkS8JAF3RNPet1HrQKTDK1wHETiMrdW8rhveC9PA1KN0WjvpsyU9aGPMRwvz2C6Hya%2FMr8XqjDfWrh4SzusCVHhiCQq4%2FEKr6qJoJEttZ&X-Amz-Signature=5140e246bd6310043df19e5042e22ebe70791bf970507eeccfccb61d7f072971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5L7VE6J%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNYATx66ztwKneA0fFEY044m3GI47aVMJnC9YxfHErFAIgbdIeV70U0ECfrhFdFmZ7BtEkawcWLDErK8EtiPSR9WcqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfgDaiKnaFudyUW5SrcAyJ8PmfwILxnLA5RbVINsJ1LxobNrnB%2Fn0qWTmdKJn7AyESDKVb%2Fl4f81zTm%2BvYEBs%2BhIR2OpUBBhuvnLDJh%2BK5tnG4BoiPB%2FKz%2BQKTKzy8IASvAQKplVQsOUBPJkV5ghkl21UyMezrP3l2AZf%2BmRm4ofYRQK5weUijfWmJ%2BWz5mqhQxeQb93kigjq%2BQftDS0k8FlhPE68z6uo4pgAOkWSNUgFJrI767qgiGNzP%2B9d%2F9s6USLQ9AGNv%2FOT%2BRunRA83I2o1HCLQvpwPrTXNqckTUG3KfD586Ryz7l0tNS5KqUl8yKmZLrFK6fL9E7%2BRJN5g59Xqu9%2FBIXpzWIcfz5pJ%2BuDxIe8FC%2F9VwgCAUV3HAxC59PB8jG6pksR3OGF7FYTrwho%2BT9Q8oM9jPj%2BatkVUccTGDjEgXIrEF0KxNupb6dEIAK3fbMPkdjGlQgdZ9hA5gTPZj%2FmORPLdfMyDzmFJ2gIUvZdDqj4ffQVWHlgjPWvEfe%2Ft9so4X0qbs9CZvVAbCy57Nxm5vBeTXz%2B9TQLpSAi%2BAX33h5wc5zue%2BIIciX7hHHnrC1jEvDKoJXAQCgrH0ymJ1KPxLNoYQ8%2B%2Fsq%2Buqk%2BYcoU%2FE%2BgL6ek1GqNS0VYItYKeu3eZeqjX4HMJORx8oGOqUBYktywJKVPT7qK8V%2FvPA2L7JC3ug5wrEzpo7JGfe%2BSuR76s6G%2BzJtcSXX6VTkncAW5Rw3UGi5b8FyYEZ5BlyjuhWYTZUbixEe4NOf0IawfAeEKvpIEAdwkS8JAF3RNPet1HrQKTDK1wHETiMrdW8rhveC9PA1KN0WjvpsyU9aGPMRwvz2C6Hya%2FMr8XqjDfWrh4SzusCVHhiCQq4%2FEKr6qJoJEttZ&X-Amz-Signature=33ecc995bacc5a6d16568d233f489c506bb2dbd8f6713db40525dfa050dc33dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PM4PBIY%2F20251229%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251229T011208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3iM%2BMvUL68Yq7AyFIzhdi6Cjn2KNwg0tIgwOhiZBSWgIhAICR8AWUqGGexjz%2Bf9MBnBz9RIrRBKbw4iDcKyVEkdHsKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzngfsx8NfV2VtS4sq3AOO1AlIP4nfkSTw9UWsyT3HWULSWD4QvUizI7Gfo61tq4AH3CRCR0EDpiEmEu2APxQZsZo48ZWFtx2DCxtiEFUi54FkVHktl%2FwcugI9k3GX3plTgGFxc6B%2BTRaT23zGqkymijj89%2FfgguB3CxlCDiPWkzXxrc5v3i3uTTOu%2BwBNd20GxS2NSKN0XL5trJRBqRvWoEd%2FPOdKms95Yfi1RoyAaJgyRh2i24s%2BAXZAsHTnOGlfSKqhI33NTZZx3ysVKgDr5EPTPOzngBPbwrJ%2Bq6%2FzOPbGyz9uZZsDaZkD%2FRD%2FMYLiKL9GOuHc3EpviaGj%2F7whO%2FEsPeqyxiNX27BwVNZo5x321%2Fwip5p1vwQW7KcaNinIVb69P3n09kh7dfFiij59nkZSKP%2B1j41O0yxJgje33fGZVxgPXTtI2pJK4sWl7GH5UunusfvRQIp6FuvFoOqlIx5Im3Ha2fYFQFrx6Wg6%2BkOLo3Lrw3ENBFOb3ErH19pTkQr90QuSSinESvRSkPT9DNzKViOFCYuo5NB6xs%2BEHGG88CfaoMzdnhuqcJZknAMVbBTjdjfOytqlcIqEJ3UyGAZuZ0IWlK2XZJXMBXou3i6uTBdrNl2ieqzuh2rL%2BUxpwJzkL9g%2FbJrhaDCbkcfKBjqkAYyC3dY2xANZ55OIxAU5pb9n6aLZQIW5eDqTE5Hz0anXv1dFu6d61l7flKx%2BqhovbON3GlSl4wbTJpu0h3YeA7mAIhY1NVNO4Hf7VfKDSk0dIyOjXISqSgsOvTSj%2FGRbutgIsAukY1irI7I%2BmgHksEcEOzl%2BbqcKUF8lD7iadWCZWUf8HoRJzXltZm1t%2FS%2FSLm8%2FWYG431waJnSx3hZIhALNyeq2&X-Amz-Signature=f1882ab7f14133e0ffec7fd03b9bbbfe0004bf88aee0735a01e800e93593cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

