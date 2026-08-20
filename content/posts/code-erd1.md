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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665EZXWYI%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0SBTK3whctNsG7c9auJQ37u%2BfJwcySfcZlIn8W%2BuzKAIgNIUkVP7OVOxNzdCBSvWi4puclZzVofrFbG5OZ1ZOh24qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFCbHZShfBuHc4S8CrcA9Ng4oqnVdQI85ETE9NHaw7gpU7mUdyPFX%2FYvCnVdifwQ7dsaS88IxSw8PDjOpHszvgEqlnetkXw4hRFUjgSm5DiWe8bOo6MPWByKI%2Bem%2BQ4v0%2FudS2%2Fz7atZ8waVhZO%2Bq4l4xvwhOqYxqafjiuk1Er05iVkjcWuscMVO%2BEXuQP296UTqbtyeOZAJkQ50gNH5%2FlIo0fNx4CHhK%2FynrWTuabVrWV%2BHxqP%2FuZbrs7bFy2bBfVCxZoB0%2FcvaYUhX7ekDJExjFV%2Fv9DGTq5e5Dtwui3GENmhjDtZCPMQ3gQrQPQYvmYdADmdeB4O0ajPcWAQy3i5uYpIkPcg%2BIZEMbTxexp8OGhPFJqYZgQ67w4aAGBqlg5hbuvtbKkuechhLsxIKM9%2FY%2BC%2FPa4GkBH2XRSp%2FPalG%2F8ORfdYvSd07KP5Z7KODFJ1TEHoXNOad%2FbfeyBeisp1ItsF2tesrNfWOL%2B86KRKMCOfeIJ%2FRYS3xGq%2FqQwM8thXsSsDwqa%2FqwqpcLcQsp6JsDFLwr4HgYeIsSo7YWkZAqCn0JiblmTJ%2BGRyPjwctf5qyU8THETHUFfCEqTxEHvoeKUMQucDwvNn%2BFHc8J2ASXp4DdKp8dLhRliz5jbtrY1sieE9NJ6bdff2MJHsmNQGOqUBN3aaVN02SVvjFwyXv7%2FiseoDVER66px%2FujKBoGAdOeGS52xKoEYKTcCTkjKwllyEvMari3WWNSfD2j4ecnmXiQu0YMV2gWBOJbVhKkZHZG8HObk%2B6Ov%2Bxq0cuelotbdiS8pDBdUrNoUiBwJzPdqMexuhqY1drF%2FOeYkojxlTaJcZzjGwLxKjcIKqmm8ObXi%2BpUyOu9rEbVPSrJ0HzC0VTAAxTXff&X-Amz-Signature=26eff6b6297ad0caf99ea3b573cdfff85ca05297ceaa5e5004118e2ae9bf8c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX4NMZY%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOV6jNyuNoBWQ8Z3njYHewoqEjI2H7286CdlzlnlCFOAiEA6IWjybcgFCQuXm6MoEoz4FXnKUf110lpW8vhQ8GPmC4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfdsa4EaPpmxj3FPSrcAxuUlnSFOfXSCE3y%2BOb3ib8hnCNx7L%2F6PpP7WriD3kNZZUhRLm9KEFUKP4flaXiv3Q1Yv1iV5tATP3q%2FIgljOdvzOd7QHv7xo5K78LlNuc5LX03cahOh6%2Bm74CnHgXDbw7ba4wxtpiTer%2F3V0kEgQLbnu2pchpKeNYGLUsX1qLQzKqa3eI7pC0mstT6TdUjCZvvvtdbzkVMYVYMTrB1Sw98uWiIl2hX5vhu%2B178ZRCQPyZrdvz9AzHKjGVnVWpevThkxaBF35o7ODY6wutBVZ8XZH%2FJCQEN5ynZ96fDcREA2IsNvKOCBU12E%2FyIofSQSHl5EGLUuA%2BrEn3etE99BBGEljqXNPqxhgXDJUVYHyLSfhtBAsf%2BUUlsus4wLKQ5VAs4YVTtwbb3NhMBwlYW2jur5AMhgvr4OLup9nmSG0g7%2Bv3f4z%2F7lBtZR4LlBNmpfN8so1d3dE%2BzqA3Mvfpoq2KBOcFnowOkQc3iobuXobQpFT9NvjDKQI0VwdonhCMllR5O9QofFPHdcdlrM0DC5jxzdmqiEayUP%2BiJXZkhQfhxmmice%2BS%2B6RNNFw3Ts%2F3jFrEnTFRwW770TYn1nTi1uQSzasKO8D81BUEEYiUhik0XPsn1HuombPk%2FxFWIQMM%2FumNQGOqUBjK4BkBSq%2BVQktiJTM0CSY53%2BdYwi8Er%2Bd4az%2BNxqbrdcPyCTBVuBMid8Te7A4BAlbwTZzDuFARRsEmCA%2BVX%2BmM4OmHTYd6SJr0ErbYSh6Lyb4%2FwBDnz5khPUARQZ6BToIuKba7UVGWPZ8RbaPpuBDvHoXuyzMbIgmx%2BhRc%2BH4b59b7lXngU9R5tiKthclO6DAiJSSCY6utF%2FwScohhl3nzDKgF9u&X-Amz-Signature=739d32a53e7d69654e8f475b9c5dd57f0c0b6073a3aebae242ec5a304ef55313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX4NMZY%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOV6jNyuNoBWQ8Z3njYHewoqEjI2H7286CdlzlnlCFOAiEA6IWjybcgFCQuXm6MoEoz4FXnKUf110lpW8vhQ8GPmC4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfdsa4EaPpmxj3FPSrcAxuUlnSFOfXSCE3y%2BOb3ib8hnCNx7L%2F6PpP7WriD3kNZZUhRLm9KEFUKP4flaXiv3Q1Yv1iV5tATP3q%2FIgljOdvzOd7QHv7xo5K78LlNuc5LX03cahOh6%2Bm74CnHgXDbw7ba4wxtpiTer%2F3V0kEgQLbnu2pchpKeNYGLUsX1qLQzKqa3eI7pC0mstT6TdUjCZvvvtdbzkVMYVYMTrB1Sw98uWiIl2hX5vhu%2B178ZRCQPyZrdvz9AzHKjGVnVWpevThkxaBF35o7ODY6wutBVZ8XZH%2FJCQEN5ynZ96fDcREA2IsNvKOCBU12E%2FyIofSQSHl5EGLUuA%2BrEn3etE99BBGEljqXNPqxhgXDJUVYHyLSfhtBAsf%2BUUlsus4wLKQ5VAs4YVTtwbb3NhMBwlYW2jur5AMhgvr4OLup9nmSG0g7%2Bv3f4z%2F7lBtZR4LlBNmpfN8so1d3dE%2BzqA3Mvfpoq2KBOcFnowOkQc3iobuXobQpFT9NvjDKQI0VwdonhCMllR5O9QofFPHdcdlrM0DC5jxzdmqiEayUP%2BiJXZkhQfhxmmice%2BS%2B6RNNFw3Ts%2F3jFrEnTFRwW770TYn1nTi1uQSzasKO8D81BUEEYiUhik0XPsn1HuombPk%2FxFWIQMM%2FumNQGOqUBjK4BkBSq%2BVQktiJTM0CSY53%2BdYwi8Er%2Bd4az%2BNxqbrdcPyCTBVuBMid8Te7A4BAlbwTZzDuFARRsEmCA%2BVX%2BmM4OmHTYd6SJr0ErbYSh6Lyb4%2FwBDnz5khPUARQZ6BToIuKba7UVGWPZ8RbaPpuBDvHoXuyzMbIgmx%2BhRc%2BH4b59b7lXngU9R5tiKthclO6DAiJSSCY6utF%2FwScohhl3nzDKgF9u&X-Amz-Signature=d6b1a9e2adcb9b395e63195d7bc22e495868911c880343a6e25b6aacaa6154f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX4NMZY%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOV6jNyuNoBWQ8Z3njYHewoqEjI2H7286CdlzlnlCFOAiEA6IWjybcgFCQuXm6MoEoz4FXnKUf110lpW8vhQ8GPmC4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfdsa4EaPpmxj3FPSrcAxuUlnSFOfXSCE3y%2BOb3ib8hnCNx7L%2F6PpP7WriD3kNZZUhRLm9KEFUKP4flaXiv3Q1Yv1iV5tATP3q%2FIgljOdvzOd7QHv7xo5K78LlNuc5LX03cahOh6%2Bm74CnHgXDbw7ba4wxtpiTer%2F3V0kEgQLbnu2pchpKeNYGLUsX1qLQzKqa3eI7pC0mstT6TdUjCZvvvtdbzkVMYVYMTrB1Sw98uWiIl2hX5vhu%2B178ZRCQPyZrdvz9AzHKjGVnVWpevThkxaBF35o7ODY6wutBVZ8XZH%2FJCQEN5ynZ96fDcREA2IsNvKOCBU12E%2FyIofSQSHl5EGLUuA%2BrEn3etE99BBGEljqXNPqxhgXDJUVYHyLSfhtBAsf%2BUUlsus4wLKQ5VAs4YVTtwbb3NhMBwlYW2jur5AMhgvr4OLup9nmSG0g7%2Bv3f4z%2F7lBtZR4LlBNmpfN8so1d3dE%2BzqA3Mvfpoq2KBOcFnowOkQc3iobuXobQpFT9NvjDKQI0VwdonhCMllR5O9QofFPHdcdlrM0DC5jxzdmqiEayUP%2BiJXZkhQfhxmmice%2BS%2B6RNNFw3Ts%2F3jFrEnTFRwW770TYn1nTi1uQSzasKO8D81BUEEYiUhik0XPsn1HuombPk%2FxFWIQMM%2FumNQGOqUBjK4BkBSq%2BVQktiJTM0CSY53%2BdYwi8Er%2Bd4az%2BNxqbrdcPyCTBVuBMid8Te7A4BAlbwTZzDuFARRsEmCA%2BVX%2BmM4OmHTYd6SJr0ErbYSh6Lyb4%2FwBDnz5khPUARQZ6BToIuKba7UVGWPZ8RbaPpuBDvHoXuyzMbIgmx%2BhRc%2BH4b59b7lXngU9R5tiKthclO6DAiJSSCY6utF%2FwScohhl3nzDKgF9u&X-Amz-Signature=603a2e3da249037303af996dac76bb63a7843eaeddfce7ed208de361d731370d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX4NMZY%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOV6jNyuNoBWQ8Z3njYHewoqEjI2H7286CdlzlnlCFOAiEA6IWjybcgFCQuXm6MoEoz4FXnKUf110lpW8vhQ8GPmC4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfdsa4EaPpmxj3FPSrcAxuUlnSFOfXSCE3y%2BOb3ib8hnCNx7L%2F6PpP7WriD3kNZZUhRLm9KEFUKP4flaXiv3Q1Yv1iV5tATP3q%2FIgljOdvzOd7QHv7xo5K78LlNuc5LX03cahOh6%2Bm74CnHgXDbw7ba4wxtpiTer%2F3V0kEgQLbnu2pchpKeNYGLUsX1qLQzKqa3eI7pC0mstT6TdUjCZvvvtdbzkVMYVYMTrB1Sw98uWiIl2hX5vhu%2B178ZRCQPyZrdvz9AzHKjGVnVWpevThkxaBF35o7ODY6wutBVZ8XZH%2FJCQEN5ynZ96fDcREA2IsNvKOCBU12E%2FyIofSQSHl5EGLUuA%2BrEn3etE99BBGEljqXNPqxhgXDJUVYHyLSfhtBAsf%2BUUlsus4wLKQ5VAs4YVTtwbb3NhMBwlYW2jur5AMhgvr4OLup9nmSG0g7%2Bv3f4z%2F7lBtZR4LlBNmpfN8so1d3dE%2BzqA3Mvfpoq2KBOcFnowOkQc3iobuXobQpFT9NvjDKQI0VwdonhCMllR5O9QofFPHdcdlrM0DC5jxzdmqiEayUP%2BiJXZkhQfhxmmice%2BS%2B6RNNFw3Ts%2F3jFrEnTFRwW770TYn1nTi1uQSzasKO8D81BUEEYiUhik0XPsn1HuombPk%2FxFWIQMM%2FumNQGOqUBjK4BkBSq%2BVQktiJTM0CSY53%2BdYwi8Er%2Bd4az%2BNxqbrdcPyCTBVuBMid8Te7A4BAlbwTZzDuFARRsEmCA%2BVX%2BmM4OmHTYd6SJr0ErbYSh6Lyb4%2FwBDnz5khPUARQZ6BToIuKba7UVGWPZ8RbaPpuBDvHoXuyzMbIgmx%2BhRc%2BH4b59b7lXngU9R5tiKthclO6DAiJSSCY6utF%2FwScohhl3nzDKgF9u&X-Amz-Signature=551caac8f9a2d700077086d080f5780663966e5e6d27eec4608273bccb1a0491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWX4NMZY%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOV6jNyuNoBWQ8Z3njYHewoqEjI2H7286CdlzlnlCFOAiEA6IWjybcgFCQuXm6MoEoz4FXnKUf110lpW8vhQ8GPmC4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfdsa4EaPpmxj3FPSrcAxuUlnSFOfXSCE3y%2BOb3ib8hnCNx7L%2F6PpP7WriD3kNZZUhRLm9KEFUKP4flaXiv3Q1Yv1iV5tATP3q%2FIgljOdvzOd7QHv7xo5K78LlNuc5LX03cahOh6%2Bm74CnHgXDbw7ba4wxtpiTer%2F3V0kEgQLbnu2pchpKeNYGLUsX1qLQzKqa3eI7pC0mstT6TdUjCZvvvtdbzkVMYVYMTrB1Sw98uWiIl2hX5vhu%2B178ZRCQPyZrdvz9AzHKjGVnVWpevThkxaBF35o7ODY6wutBVZ8XZH%2FJCQEN5ynZ96fDcREA2IsNvKOCBU12E%2FyIofSQSHl5EGLUuA%2BrEn3etE99BBGEljqXNPqxhgXDJUVYHyLSfhtBAsf%2BUUlsus4wLKQ5VAs4YVTtwbb3NhMBwlYW2jur5AMhgvr4OLup9nmSG0g7%2Bv3f4z%2F7lBtZR4LlBNmpfN8so1d3dE%2BzqA3Mvfpoq2KBOcFnowOkQc3iobuXobQpFT9NvjDKQI0VwdonhCMllR5O9QofFPHdcdlrM0DC5jxzdmqiEayUP%2BiJXZkhQfhxmmice%2BS%2B6RNNFw3Ts%2F3jFrEnTFRwW770TYn1nTi1uQSzasKO8D81BUEEYiUhik0XPsn1HuombPk%2FxFWIQMM%2FumNQGOqUBjK4BkBSq%2BVQktiJTM0CSY53%2BdYwi8Er%2Bd4az%2BNxqbrdcPyCTBVuBMid8Te7A4BAlbwTZzDuFARRsEmCA%2BVX%2BmM4OmHTYd6SJr0ErbYSh6Lyb4%2FwBDnz5khPUARQZ6BToIuKba7UVGWPZ8RbaPpuBDvHoXuyzMbIgmx%2BhRc%2BH4b59b7lXngU9R5tiKthclO6DAiJSSCY6utF%2FwScohhl3nzDKgF9u&X-Amz-Signature=ae42d83d99882ab17b3ee491ca37dcff6ee896f321e496ab70da2a032ebc6ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665EZXWYI%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T011207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0SBTK3whctNsG7c9auJQ37u%2BfJwcySfcZlIn8W%2BuzKAIgNIUkVP7OVOxNzdCBSvWi4puclZzVofrFbG5OZ1ZOh24qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFCbHZShfBuHc4S8CrcA9Ng4oqnVdQI85ETE9NHaw7gpU7mUdyPFX%2FYvCnVdifwQ7dsaS88IxSw8PDjOpHszvgEqlnetkXw4hRFUjgSm5DiWe8bOo6MPWByKI%2Bem%2BQ4v0%2FudS2%2Fz7atZ8waVhZO%2Bq4l4xvwhOqYxqafjiuk1Er05iVkjcWuscMVO%2BEXuQP296UTqbtyeOZAJkQ50gNH5%2FlIo0fNx4CHhK%2FynrWTuabVrWV%2BHxqP%2FuZbrs7bFy2bBfVCxZoB0%2FcvaYUhX7ekDJExjFV%2Fv9DGTq5e5Dtwui3GENmhjDtZCPMQ3gQrQPQYvmYdADmdeB4O0ajPcWAQy3i5uYpIkPcg%2BIZEMbTxexp8OGhPFJqYZgQ67w4aAGBqlg5hbuvtbKkuechhLsxIKM9%2FY%2BC%2FPa4GkBH2XRSp%2FPalG%2F8ORfdYvSd07KP5Z7KODFJ1TEHoXNOad%2FbfeyBeisp1ItsF2tesrNfWOL%2B86KRKMCOfeIJ%2FRYS3xGq%2FqQwM8thXsSsDwqa%2FqwqpcLcQsp6JsDFLwr4HgYeIsSo7YWkZAqCn0JiblmTJ%2BGRyPjwctf5qyU8THETHUFfCEqTxEHvoeKUMQucDwvNn%2BFHc8J2ASXp4DdKp8dLhRliz5jbtrY1sieE9NJ6bdff2MJHsmNQGOqUBN3aaVN02SVvjFwyXv7%2FiseoDVER66px%2FujKBoGAdOeGS52xKoEYKTcCTkjKwllyEvMari3WWNSfD2j4ecnmXiQu0YMV2gWBOJbVhKkZHZG8HObk%2B6Ov%2Bxq0cuelotbdiS8pDBdUrNoUiBwJzPdqMexuhqY1drF%2FOeYkojxlTaJcZzjGwLxKjcIKqmm8ObXi%2BpUyOu9rEbVPSrJ0HzC0VTAAxTXff&X-Amz-Signature=89d6fc3015a523761d5e82b53bd12122c5d178f25e937054666bcdcd2944ba99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

