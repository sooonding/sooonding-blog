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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI566X7B%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T010819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBgWlytzC1HUB6ov4Lu8jTe6PrMa3zN%2BUf2wGKF49yoyAiBShoYmww0iLl5WQuGhBc9MvbFFwTm22fEAlFvnV%2FHfhyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXdbnXr8MPJnYEOWlKtwD%2FHpt%2Fesqc4lWSiazX5BSldAnS7u21W6ZwuFg9VtEvlK70eNBNyUWxP13EisaI%2F0eXic9MVDT2BI%2BNtp3iJhVPouQdXcIm4WpWglIkVtV3I5i3DfiVuvmw7xTZc9CehDSLAjn671D%2BSqxqrDaOFARvcVXt%2FRdVlFqzts4IEJ%2B8dSxpz12beh2aJ19anl0HwH4wKKkhB0PxdAfDEl%2FagxYjAwbhW%2BiQG4O%2B8uP4pwcDjcwH22btUv54GJHxXSZj6uqjgqRhvRg01Q%2FSLhkAskFRR4JQeXlsFReL4CTp4pLLNrPbQUMWpnLj70uy3ny%2BWVcReRmt58oY8xnbDlYdvgy9Vc5fb0iduqruKEUaYzVe44txbzBnM1FoOn3uQbkgJ9TQLIFFRkakYkOIEeb0ZEHiPlYpvN5zAKpZsmYX9NTcCjcyDhf8l8xK1vY39jvwmJmH0qjR1620%2B6whXL%2FOcOz2k01GnNa3FjtJwLooBkhBIIO9G97tSCzwE4FwJ9t5FM%2FWVCZfNzA9pXOUXMBVT5PnPEb4vszlxQem0D2YQJx4gBK%2FZeNAjB4j64F0ZSiGXw5kWr2XcdA1hBY5qkP2MZ0u3brmSrKiHvU6hM5r%2Bt5RReDYJFmhOyf7f1bXMcwvLDcygY6pgGFxwtzI8k%2BKoCgb%2Bb0T9xFtMpCTMKfSgOi0B8fFdbNCR8BANRhLKEG7rHMwjhDShp8A47iuPeToxKtUyRMq9lk5elfFSNW%2BkCBdHb4%2FbRmVOakF47y7TZHcqmTbIrJohNIOy%2FJnLPc%2BEOjDi%2B%2FZUGWN5SEgOzKBTBbkXdf10ab7jtZrgvug17M7ju3x3V8I70SUqOoNHYDgDsHzBll8gWMV2%2FmVIfX&X-Amz-Signature=f9c9771af1aa8bc2ed6423108e6448883d3b6f1386a1e54342ee948ef448f10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLPWK7O%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T010819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC18cF27B3sAWawxrYMoQwHhakthDGTR7zRgF5ATxRJjgIhAJUdnXUqbKXqG5JLqBDk6pYL%2BG3qDo1C3Lak1LZFAA9iKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2G0mPuV4Gl8NAJ0q3ANF5KvYwJNleVRcg7kH514IUa%2Bsyo7rTa2CktHabhVCHUqgRUnnKPhw9qDQY%2BIAOqJnigPoNOT8PgPEQ1ILkHGVykAE%2FZFT%2BqZvP6p4Naz%2FbSRiDYpv9QBXoIbO3e6vl4MNZAkODWdnx6%2F4nJknhPgh0lMWkdJsZa7VfIGVj8ZeTzW7JDNPx8XQzsROI0Wx%2F7fNV%2Bvmf9mDhQLyB4IN9lsOTHyW%2FsDrVZNC7dwgvs9WCki7lxzel9Ato9qV8CDZD7pJ7fU9oiQoyxCuWXKzzUYzIN2E6yUJ0iV9yPVJU7RD96R8i%2BBSgK8AQ%2FCGcdl%2B9oP9RkqMdzjKuDgZG0gJYTTpcPlzmSiDHAyUmqruod2cG3vNjHhqeU%2BHVPjmTL9reSSaDxMEpumpU3PErzTk2Ox91XQvndCtxIr5fTHUEVqOnrmRo66N4SGKELQqyU1a6RNn0wxLjQymzp%2Br0idatXthyJcXYL3HWCdQ0Ruy37Bj2BjO%2FVFc%2FAG4NGIBMilYSRsFvrx%2F6%2BIre6iC3xdVQ5ulDOP%2Bqpzo6U96l1tjXR%2BsEinPbq1FjgxrW%2BCB506mSa0%2BGZjmxRsrHoUP3Ej%2BHMKIJLJh2hdzhCsaQHL3G%2BZ1Zssou7UjqJxxtBkoeDDEp9zKBjqkAexqeff5roHvbgB4GnuYBtgPGzi%2BFqoaINDWe0F44p7ymA%2BdKvy2v%2FzSHLiWDKlAhsugpVOPKA8B2mabk5CoaGs1vWkFWYeWLadnz5L%2Frlcd%2FCxdRh%2FmU5RRqsXxmQH8ghEQpNr8Oj5TCmcuiVjFCGza2jZZ6xqC6mFjrKL%2BLGpYFMDVf8vRrzXc%2BToNMu2dGb6N6XlnCFpsjn4ty792%2B884np1I&X-Amz-Signature=7cac1b08580748b9f4966362b1b5cbcb36bdff40df2692dea9a02eb155ad194f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLPWK7O%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T010819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC18cF27B3sAWawxrYMoQwHhakthDGTR7zRgF5ATxRJjgIhAJUdnXUqbKXqG5JLqBDk6pYL%2BG3qDo1C3Lak1LZFAA9iKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2G0mPuV4Gl8NAJ0q3ANF5KvYwJNleVRcg7kH514IUa%2Bsyo7rTa2CktHabhVCHUqgRUnnKPhw9qDQY%2BIAOqJnigPoNOT8PgPEQ1ILkHGVykAE%2FZFT%2BqZvP6p4Naz%2FbSRiDYpv9QBXoIbO3e6vl4MNZAkODWdnx6%2F4nJknhPgh0lMWkdJsZa7VfIGVj8ZeTzW7JDNPx8XQzsROI0Wx%2F7fNV%2Bvmf9mDhQLyB4IN9lsOTHyW%2FsDrVZNC7dwgvs9WCki7lxzel9Ato9qV8CDZD7pJ7fU9oiQoyxCuWXKzzUYzIN2E6yUJ0iV9yPVJU7RD96R8i%2BBSgK8AQ%2FCGcdl%2B9oP9RkqMdzjKuDgZG0gJYTTpcPlzmSiDHAyUmqruod2cG3vNjHhqeU%2BHVPjmTL9reSSaDxMEpumpU3PErzTk2Ox91XQvndCtxIr5fTHUEVqOnrmRo66N4SGKELQqyU1a6RNn0wxLjQymzp%2Br0idatXthyJcXYL3HWCdQ0Ruy37Bj2BjO%2FVFc%2FAG4NGIBMilYSRsFvrx%2F6%2BIre6iC3xdVQ5ulDOP%2Bqpzo6U96l1tjXR%2BsEinPbq1FjgxrW%2BCB506mSa0%2BGZjmxRsrHoUP3Ej%2BHMKIJLJh2hdzhCsaQHL3G%2BZ1Zssou7UjqJxxtBkoeDDEp9zKBjqkAexqeff5roHvbgB4GnuYBtgPGzi%2BFqoaINDWe0F44p7ymA%2BdKvy2v%2FzSHLiWDKlAhsugpVOPKA8B2mabk5CoaGs1vWkFWYeWLadnz5L%2Frlcd%2FCxdRh%2FmU5RRqsXxmQH8ghEQpNr8Oj5TCmcuiVjFCGza2jZZ6xqC6mFjrKL%2BLGpYFMDVf8vRrzXc%2BToNMu2dGb6N6XlnCFpsjn4ty792%2B884np1I&X-Amz-Signature=2b722327355e4a6053dfbee3b4b26dd0ab2d33833f92f2d92c7f525b7a902dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLPWK7O%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T010819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC18cF27B3sAWawxrYMoQwHhakthDGTR7zRgF5ATxRJjgIhAJUdnXUqbKXqG5JLqBDk6pYL%2BG3qDo1C3Lak1LZFAA9iKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2G0mPuV4Gl8NAJ0q3ANF5KvYwJNleVRcg7kH514IUa%2Bsyo7rTa2CktHabhVCHUqgRUnnKPhw9qDQY%2BIAOqJnigPoNOT8PgPEQ1ILkHGVykAE%2FZFT%2BqZvP6p4Naz%2FbSRiDYpv9QBXoIbO3e6vl4MNZAkODWdnx6%2F4nJknhPgh0lMWkdJsZa7VfIGVj8ZeTzW7JDNPx8XQzsROI0Wx%2F7fNV%2Bvmf9mDhQLyB4IN9lsOTHyW%2FsDrVZNC7dwgvs9WCki7lxzel9Ato9qV8CDZD7pJ7fU9oiQoyxCuWXKzzUYzIN2E6yUJ0iV9yPVJU7RD96R8i%2BBSgK8AQ%2FCGcdl%2B9oP9RkqMdzjKuDgZG0gJYTTpcPlzmSiDHAyUmqruod2cG3vNjHhqeU%2BHVPjmTL9reSSaDxMEpumpU3PErzTk2Ox91XQvndCtxIr5fTHUEVqOnrmRo66N4SGKELQqyU1a6RNn0wxLjQymzp%2Br0idatXthyJcXYL3HWCdQ0Ruy37Bj2BjO%2FVFc%2FAG4NGIBMilYSRsFvrx%2F6%2BIre6iC3xdVQ5ulDOP%2Bqpzo6U96l1tjXR%2BsEinPbq1FjgxrW%2BCB506mSa0%2BGZjmxRsrHoUP3Ej%2BHMKIJLJh2hdzhCsaQHL3G%2BZ1Zssou7UjqJxxtBkoeDDEp9zKBjqkAexqeff5roHvbgB4GnuYBtgPGzi%2BFqoaINDWe0F44p7ymA%2BdKvy2v%2FzSHLiWDKlAhsugpVOPKA8B2mabk5CoaGs1vWkFWYeWLadnz5L%2Frlcd%2FCxdRh%2FmU5RRqsXxmQH8ghEQpNr8Oj5TCmcuiVjFCGza2jZZ6xqC6mFjrKL%2BLGpYFMDVf8vRrzXc%2BToNMu2dGb6N6XlnCFpsjn4ty792%2B884np1I&X-Amz-Signature=31ab9a077f7a68d0e43f39dc53469c339bda953c94750d47a4af5f97fb7da478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLPWK7O%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T010819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC18cF27B3sAWawxrYMoQwHhakthDGTR7zRgF5ATxRJjgIhAJUdnXUqbKXqG5JLqBDk6pYL%2BG3qDo1C3Lak1LZFAA9iKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2G0mPuV4Gl8NAJ0q3ANF5KvYwJNleVRcg7kH514IUa%2Bsyo7rTa2CktHabhVCHUqgRUnnKPhw9qDQY%2BIAOqJnigPoNOT8PgPEQ1ILkHGVykAE%2FZFT%2BqZvP6p4Naz%2FbSRiDYpv9QBXoIbO3e6vl4MNZAkODWdnx6%2F4nJknhPgh0lMWkdJsZa7VfIGVj8ZeTzW7JDNPx8XQzsROI0Wx%2F7fNV%2Bvmf9mDhQLyB4IN9lsOTHyW%2FsDrVZNC7dwgvs9WCki7lxzel9Ato9qV8CDZD7pJ7fU9oiQoyxCuWXKzzUYzIN2E6yUJ0iV9yPVJU7RD96R8i%2BBSgK8AQ%2FCGcdl%2B9oP9RkqMdzjKuDgZG0gJYTTpcPlzmSiDHAyUmqruod2cG3vNjHhqeU%2BHVPjmTL9reSSaDxMEpumpU3PErzTk2Ox91XQvndCtxIr5fTHUEVqOnrmRo66N4SGKELQqyU1a6RNn0wxLjQymzp%2Br0idatXthyJcXYL3HWCdQ0Ruy37Bj2BjO%2FVFc%2FAG4NGIBMilYSRsFvrx%2F6%2BIre6iC3xdVQ5ulDOP%2Bqpzo6U96l1tjXR%2BsEinPbq1FjgxrW%2BCB506mSa0%2BGZjmxRsrHoUP3Ej%2BHMKIJLJh2hdzhCsaQHL3G%2BZ1Zssou7UjqJxxtBkoeDDEp9zKBjqkAexqeff5roHvbgB4GnuYBtgPGzi%2BFqoaINDWe0F44p7ymA%2BdKvy2v%2FzSHLiWDKlAhsugpVOPKA8B2mabk5CoaGs1vWkFWYeWLadnz5L%2Frlcd%2FCxdRh%2FmU5RRqsXxmQH8ghEQpNr8Oj5TCmcuiVjFCGza2jZZ6xqC6mFjrKL%2BLGpYFMDVf8vRrzXc%2BToNMu2dGb6N6XlnCFpsjn4ty792%2B884np1I&X-Amz-Signature=b34d6e702a7091607b9149db2ce0dbcb645b5f21f8a7280bf828c61a6660f39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLPWK7O%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T010819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQC18cF27B3sAWawxrYMoQwHhakthDGTR7zRgF5ATxRJjgIhAJUdnXUqbKXqG5JLqBDk6pYL%2BG3qDo1C3Lak1LZFAA9iKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2G0mPuV4Gl8NAJ0q3ANF5KvYwJNleVRcg7kH514IUa%2Bsyo7rTa2CktHabhVCHUqgRUnnKPhw9qDQY%2BIAOqJnigPoNOT8PgPEQ1ILkHGVykAE%2FZFT%2BqZvP6p4Naz%2FbSRiDYpv9QBXoIbO3e6vl4MNZAkODWdnx6%2F4nJknhPgh0lMWkdJsZa7VfIGVj8ZeTzW7JDNPx8XQzsROI0Wx%2F7fNV%2Bvmf9mDhQLyB4IN9lsOTHyW%2FsDrVZNC7dwgvs9WCki7lxzel9Ato9qV8CDZD7pJ7fU9oiQoyxCuWXKzzUYzIN2E6yUJ0iV9yPVJU7RD96R8i%2BBSgK8AQ%2FCGcdl%2B9oP9RkqMdzjKuDgZG0gJYTTpcPlzmSiDHAyUmqruod2cG3vNjHhqeU%2BHVPjmTL9reSSaDxMEpumpU3PErzTk2Ox91XQvndCtxIr5fTHUEVqOnrmRo66N4SGKELQqyU1a6RNn0wxLjQymzp%2Br0idatXthyJcXYL3HWCdQ0Ruy37Bj2BjO%2FVFc%2FAG4NGIBMilYSRsFvrx%2F6%2BIre6iC3xdVQ5ulDOP%2Bqpzo6U96l1tjXR%2BsEinPbq1FjgxrW%2BCB506mSa0%2BGZjmxRsrHoUP3Ej%2BHMKIJLJh2hdzhCsaQHL3G%2BZ1Zssou7UjqJxxtBkoeDDEp9zKBjqkAexqeff5roHvbgB4GnuYBtgPGzi%2BFqoaINDWe0F44p7ymA%2BdKvy2v%2FzSHLiWDKlAhsugpVOPKA8B2mabk5CoaGs1vWkFWYeWLadnz5L%2Frlcd%2FCxdRh%2FmU5RRqsXxmQH8ghEQpNr8Oj5TCmcuiVjFCGza2jZZ6xqC6mFjrKL%2BLGpYFMDVf8vRrzXc%2BToNMu2dGb6N6XlnCFpsjn4ty792%2B884np1I&X-Amz-Signature=c1eae0ac799508a52363235221e02a121de5f5535e44b43488f5553021e2a48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI566X7B%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T010819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBgWlytzC1HUB6ov4Lu8jTe6PrMa3zN%2BUf2wGKF49yoyAiBShoYmww0iLl5WQuGhBc9MvbFFwTm22fEAlFvnV%2FHfhyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXdbnXr8MPJnYEOWlKtwD%2FHpt%2Fesqc4lWSiazX5BSldAnS7u21W6ZwuFg9VtEvlK70eNBNyUWxP13EisaI%2F0eXic9MVDT2BI%2BNtp3iJhVPouQdXcIm4WpWglIkVtV3I5i3DfiVuvmw7xTZc9CehDSLAjn671D%2BSqxqrDaOFARvcVXt%2FRdVlFqzts4IEJ%2B8dSxpz12beh2aJ19anl0HwH4wKKkhB0PxdAfDEl%2FagxYjAwbhW%2BiQG4O%2B8uP4pwcDjcwH22btUv54GJHxXSZj6uqjgqRhvRg01Q%2FSLhkAskFRR4JQeXlsFReL4CTp4pLLNrPbQUMWpnLj70uy3ny%2BWVcReRmt58oY8xnbDlYdvgy9Vc5fb0iduqruKEUaYzVe44txbzBnM1FoOn3uQbkgJ9TQLIFFRkakYkOIEeb0ZEHiPlYpvN5zAKpZsmYX9NTcCjcyDhf8l8xK1vY39jvwmJmH0qjR1620%2B6whXL%2FOcOz2k01GnNa3FjtJwLooBkhBIIO9G97tSCzwE4FwJ9t5FM%2FWVCZfNzA9pXOUXMBVT5PnPEb4vszlxQem0D2YQJx4gBK%2FZeNAjB4j64F0ZSiGXw5kWr2XcdA1hBY5qkP2MZ0u3brmSrKiHvU6hM5r%2Bt5RReDYJFmhOyf7f1bXMcwvLDcygY6pgGFxwtzI8k%2BKoCgb%2Bb0T9xFtMpCTMKfSgOi0B8fFdbNCR8BANRhLKEG7rHMwjhDShp8A47iuPeToxKtUyRMq9lk5elfFSNW%2BkCBdHb4%2FbRmVOakF47y7TZHcqmTbIrJohNIOy%2FJnLPc%2BEOjDi%2B%2FZUGWN5SEgOzKBTBbkXdf10ab7jtZrgvug17M7ju3x3V8I70SUqOoNHYDgDsHzBll8gWMV2%2FmVIfX&X-Amz-Signature=87f42a306741f0db87464b3b8211ededbfc7f6b0b5d1df6c951f5dd8d66d5ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

