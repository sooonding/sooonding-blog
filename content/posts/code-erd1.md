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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LR2N2K2%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGwXUZVEg7cmYoZLOUz2BJlSAktW%2FqwCxlNxSdJS2PVgIgZE1KAffR9Tfdjd7h0g9Li9IZhsit0u3JXjcsazApOl4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDP4b1BsEDjd1HzGlkSrcA1G592Z9w125cNktyOawNGBFHRmLHoCySuZ5%2FdCbMt2UNzg2hAb%2Bnq%2FDgIEbX%2BF36DORRd5NCOsV48z%2FuuZLQLAQpBQ7cA8sTHcdPJ8ljBvDsPACICgxtzR39%2Bd%2Bi4%2FiIw4fYtBv%2BhrgGFh9le%2FM9dGaCHLDZdUaZuiO%2FO7bNPec%2Fd3QWyo3uPt%2FK1iGzXj%2Flj77Zjw8DO2bY7bOconzS7QqOSInU3Wc8RGTIJMr9b%2B7OUDElug5FTqHOHF5bM8h2FLKAXwm4nK2pyYj6y%2FThYHDebkHReOXfs5qGkG2OqKXbzp0AJECKF1g%2BW21ua0wIskT6tUm9YTUASAyuow8NiT9rmUHQHFOI36IT%2FubTA%2BgrQFU1vpS3%2FSDb2WHwZELp%2BdqucAxfT5RpkEQ4hXitEKIYhHyC%2FKXnDtqVf3zCLjQw7icnAb90Q4hmwDSWUAh1rI3oj1D1l%2F8ApH6tetlOL%2BCx5d0q4nbHSQ2cyLNqZ14KVjGK020wp67pMvPUA9GLi%2BoQQmb2c%2BOkTJP%2FY520%2FR5ub5%2ByeJi2sgZ95rBE4KnaslEuN62su4%2FLeyh%2BWGeEBXyF9pyhlNff8UUoZcp3E88u6cAy%2B7Qsnz90ESmT%2FZKlvHjVi5KPWmYdP41MJv15dYGOqUBR6gTVnDnn37eY6UH83%2BK%2Bja9d%2BsGCOBL6SSts95aREo6NhAbiluWKZ6hSTnvzeLio%2BAN%2F93VmAsqOm%2FAQeRgHdZMw3H5UNsuGKmK1jk%2B764g8%2BfTjUU5ih37UCT4TxdNwutx0FT2wkwHE4tfR%2FqcXmwYhPA0VmtqZJrt0NMYBYzmeTwKGQEk8%2BEtL1XJQpj%2BNTDTHMNfK6nKMWWQyV5HvQ4cmrCR&X-Amz-Signature=253b160a091a94023ba7ba54f5cda1b05e926155997abd23bce3192015b5bd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMCQGDD%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2BePuj3Ewn1%2Fqrvc%2F4deEsBjiGtbpREjGW7Ms9GCLtAiEA8j0YJFMn1q8%2FWW3bOnmsmsJxU1BP2kkds6c4p8hYbAEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDlD%2Be9fds0jn0bTHircA0%2FulXbriZyBWZwa9QkJc6uvN%2BDbwjrHFjhWHoTkBe2w1huPWgDapTgEorZbbul7A0hf%2FkOJghbLRJoRr7rToou7OU9EQkRuiKnjNu7Bgr8N0Rz1fwS6oghAHEATnL9Xy365jf4wYfnnK0Eeux23loB3G%2FrU61pRFl%2F6fx6vS9HLRuWBCUqzeS5QgEglpZcS3wtVwk57PJj7jXULGrB%2FMuRx8%2F6mvrQNdRojfMFj3aFKZXn%2FfzRFwjjXMI0aUijDPYxLohRvuyBcwsV6U3UumMr7I6j6vz%2FrFzrrKEwn0yUnj6wlR3lCSQy%2FKJyPhADkvjycnMx6kBBT6z9ALEXGG8zbcwsGADEwOsluPyQGfNN2AcYTsozNAMI8O1tKX88Shp2LZ0pAJKAQjNQabIRiNiq9sdpfiwuh%2BEwcbpjDewGERQZtyZTQZye0gDN0YdbRgBx%2B8i3NXRk7XxnRiS3wZPZPOCpVz%2FKx5RYskSy%2Fm6wjAoxsrO2LYtzzh6FPmV7mXMylByPhBe5udH6qQsSCYSzybNm%2B6%2BDhwsbYVCwyJvjw0UBr5Lzml3dXVg2DdBaDMliJDLW08XomAeMOzNI6EmuapzVgH5ygGWqJ9mURVhZS94rkKOXlJueH33LJMLby5dYGOqUB9uaGn5vYYmgr8EtVVrXjvogDim9xzJ4G5TTuq3Fu4p%2BDTIzBor9sPQw0ykcJmHJyiPAKRPF91TsNMUW4wJsqEYjoS466jhws0MSicJTzErU%2BKRThJDaERDhvzBEy5WUvoK8V6Wfb%2Bk%2Ft2UXFRPukmCjyih3dK53iNcm%2F3ZPaOJTrp%2BSKs02Nvs0FFmIDFbz7mnrkesLWK9gW%2Bi8YAVnVSjZdb4wk&X-Amz-Signature=92c5ad4b8a41ade4a8111869b6c0a3a7611b19098c6e6345039a9e5659f856f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMCQGDD%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2BePuj3Ewn1%2Fqrvc%2F4deEsBjiGtbpREjGW7Ms9GCLtAiEA8j0YJFMn1q8%2FWW3bOnmsmsJxU1BP2kkds6c4p8hYbAEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDlD%2Be9fds0jn0bTHircA0%2FulXbriZyBWZwa9QkJc6uvN%2BDbwjrHFjhWHoTkBe2w1huPWgDapTgEorZbbul7A0hf%2FkOJghbLRJoRr7rToou7OU9EQkRuiKnjNu7Bgr8N0Rz1fwS6oghAHEATnL9Xy365jf4wYfnnK0Eeux23loB3G%2FrU61pRFl%2F6fx6vS9HLRuWBCUqzeS5QgEglpZcS3wtVwk57PJj7jXULGrB%2FMuRx8%2F6mvrQNdRojfMFj3aFKZXn%2FfzRFwjjXMI0aUijDPYxLohRvuyBcwsV6U3UumMr7I6j6vz%2FrFzrrKEwn0yUnj6wlR3lCSQy%2FKJyPhADkvjycnMx6kBBT6z9ALEXGG8zbcwsGADEwOsluPyQGfNN2AcYTsozNAMI8O1tKX88Shp2LZ0pAJKAQjNQabIRiNiq9sdpfiwuh%2BEwcbpjDewGERQZtyZTQZye0gDN0YdbRgBx%2B8i3NXRk7XxnRiS3wZPZPOCpVz%2FKx5RYskSy%2Fm6wjAoxsrO2LYtzzh6FPmV7mXMylByPhBe5udH6qQsSCYSzybNm%2B6%2BDhwsbYVCwyJvjw0UBr5Lzml3dXVg2DdBaDMliJDLW08XomAeMOzNI6EmuapzVgH5ygGWqJ9mURVhZS94rkKOXlJueH33LJMLby5dYGOqUB9uaGn5vYYmgr8EtVVrXjvogDim9xzJ4G5TTuq3Fu4p%2BDTIzBor9sPQw0ykcJmHJyiPAKRPF91TsNMUW4wJsqEYjoS466jhws0MSicJTzErU%2BKRThJDaERDhvzBEy5WUvoK8V6Wfb%2Bk%2Ft2UXFRPukmCjyih3dK53iNcm%2F3ZPaOJTrp%2BSKs02Nvs0FFmIDFbz7mnrkesLWK9gW%2Bi8YAVnVSjZdb4wk&X-Amz-Signature=89c8688856d3719c3e644919926558d9180e347e23c691eccf911487ff1e5479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMCQGDD%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2BePuj3Ewn1%2Fqrvc%2F4deEsBjiGtbpREjGW7Ms9GCLtAiEA8j0YJFMn1q8%2FWW3bOnmsmsJxU1BP2kkds6c4p8hYbAEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDlD%2Be9fds0jn0bTHircA0%2FulXbriZyBWZwa9QkJc6uvN%2BDbwjrHFjhWHoTkBe2w1huPWgDapTgEorZbbul7A0hf%2FkOJghbLRJoRr7rToou7OU9EQkRuiKnjNu7Bgr8N0Rz1fwS6oghAHEATnL9Xy365jf4wYfnnK0Eeux23loB3G%2FrU61pRFl%2F6fx6vS9HLRuWBCUqzeS5QgEglpZcS3wtVwk57PJj7jXULGrB%2FMuRx8%2F6mvrQNdRojfMFj3aFKZXn%2FfzRFwjjXMI0aUijDPYxLohRvuyBcwsV6U3UumMr7I6j6vz%2FrFzrrKEwn0yUnj6wlR3lCSQy%2FKJyPhADkvjycnMx6kBBT6z9ALEXGG8zbcwsGADEwOsluPyQGfNN2AcYTsozNAMI8O1tKX88Shp2LZ0pAJKAQjNQabIRiNiq9sdpfiwuh%2BEwcbpjDewGERQZtyZTQZye0gDN0YdbRgBx%2B8i3NXRk7XxnRiS3wZPZPOCpVz%2FKx5RYskSy%2Fm6wjAoxsrO2LYtzzh6FPmV7mXMylByPhBe5udH6qQsSCYSzybNm%2B6%2BDhwsbYVCwyJvjw0UBr5Lzml3dXVg2DdBaDMliJDLW08XomAeMOzNI6EmuapzVgH5ygGWqJ9mURVhZS94rkKOXlJueH33LJMLby5dYGOqUB9uaGn5vYYmgr8EtVVrXjvogDim9xzJ4G5TTuq3Fu4p%2BDTIzBor9sPQw0ykcJmHJyiPAKRPF91TsNMUW4wJsqEYjoS466jhws0MSicJTzErU%2BKRThJDaERDhvzBEy5WUvoK8V6Wfb%2Bk%2Ft2UXFRPukmCjyih3dK53iNcm%2F3ZPaOJTrp%2BSKs02Nvs0FFmIDFbz7mnrkesLWK9gW%2Bi8YAVnVSjZdb4wk&X-Amz-Signature=d3cbad9f0de95696d3a1d18829ad8f6909d6446e2015ad1ce958158ee9a473ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMCQGDD%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2BePuj3Ewn1%2Fqrvc%2F4deEsBjiGtbpREjGW7Ms9GCLtAiEA8j0YJFMn1q8%2FWW3bOnmsmsJxU1BP2kkds6c4p8hYbAEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDlD%2Be9fds0jn0bTHircA0%2FulXbriZyBWZwa9QkJc6uvN%2BDbwjrHFjhWHoTkBe2w1huPWgDapTgEorZbbul7A0hf%2FkOJghbLRJoRr7rToou7OU9EQkRuiKnjNu7Bgr8N0Rz1fwS6oghAHEATnL9Xy365jf4wYfnnK0Eeux23loB3G%2FrU61pRFl%2F6fx6vS9HLRuWBCUqzeS5QgEglpZcS3wtVwk57PJj7jXULGrB%2FMuRx8%2F6mvrQNdRojfMFj3aFKZXn%2FfzRFwjjXMI0aUijDPYxLohRvuyBcwsV6U3UumMr7I6j6vz%2FrFzrrKEwn0yUnj6wlR3lCSQy%2FKJyPhADkvjycnMx6kBBT6z9ALEXGG8zbcwsGADEwOsluPyQGfNN2AcYTsozNAMI8O1tKX88Shp2LZ0pAJKAQjNQabIRiNiq9sdpfiwuh%2BEwcbpjDewGERQZtyZTQZye0gDN0YdbRgBx%2B8i3NXRk7XxnRiS3wZPZPOCpVz%2FKx5RYskSy%2Fm6wjAoxsrO2LYtzzh6FPmV7mXMylByPhBe5udH6qQsSCYSzybNm%2B6%2BDhwsbYVCwyJvjw0UBr5Lzml3dXVg2DdBaDMliJDLW08XomAeMOzNI6EmuapzVgH5ygGWqJ9mURVhZS94rkKOXlJueH33LJMLby5dYGOqUB9uaGn5vYYmgr8EtVVrXjvogDim9xzJ4G5TTuq3Fu4p%2BDTIzBor9sPQw0ykcJmHJyiPAKRPF91TsNMUW4wJsqEYjoS466jhws0MSicJTzErU%2BKRThJDaERDhvzBEy5WUvoK8V6Wfb%2Bk%2Ft2UXFRPukmCjyih3dK53iNcm%2F3ZPaOJTrp%2BSKs02Nvs0FFmIDFbz7mnrkesLWK9gW%2Bi8YAVnVSjZdb4wk&X-Amz-Signature=49c7ed3bf765ecd7ab31c5ce681f436e7225fe8424fbbb00a09b3d6951c0881b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMCQGDD%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf%2BePuj3Ewn1%2Fqrvc%2F4deEsBjiGtbpREjGW7Ms9GCLtAiEA8j0YJFMn1q8%2FWW3bOnmsmsJxU1BP2kkds6c4p8hYbAEq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDlD%2Be9fds0jn0bTHircA0%2FulXbriZyBWZwa9QkJc6uvN%2BDbwjrHFjhWHoTkBe2w1huPWgDapTgEorZbbul7A0hf%2FkOJghbLRJoRr7rToou7OU9EQkRuiKnjNu7Bgr8N0Rz1fwS6oghAHEATnL9Xy365jf4wYfnnK0Eeux23loB3G%2FrU61pRFl%2F6fx6vS9HLRuWBCUqzeS5QgEglpZcS3wtVwk57PJj7jXULGrB%2FMuRx8%2F6mvrQNdRojfMFj3aFKZXn%2FfzRFwjjXMI0aUijDPYxLohRvuyBcwsV6U3UumMr7I6j6vz%2FrFzrrKEwn0yUnj6wlR3lCSQy%2FKJyPhADkvjycnMx6kBBT6z9ALEXGG8zbcwsGADEwOsluPyQGfNN2AcYTsozNAMI8O1tKX88Shp2LZ0pAJKAQjNQabIRiNiq9sdpfiwuh%2BEwcbpjDewGERQZtyZTQZye0gDN0YdbRgBx%2B8i3NXRk7XxnRiS3wZPZPOCpVz%2FKx5RYskSy%2Fm6wjAoxsrO2LYtzzh6FPmV7mXMylByPhBe5udH6qQsSCYSzybNm%2B6%2BDhwsbYVCwyJvjw0UBr5Lzml3dXVg2DdBaDMliJDLW08XomAeMOzNI6EmuapzVgH5ygGWqJ9mURVhZS94rkKOXlJueH33LJMLby5dYGOqUB9uaGn5vYYmgr8EtVVrXjvogDim9xzJ4G5TTuq3Fu4p%2BDTIzBor9sPQw0ykcJmHJyiPAKRPF91TsNMUW4wJsqEYjoS466jhws0MSicJTzErU%2BKRThJDaERDhvzBEy5WUvoK8V6Wfb%2Bk%2Ft2UXFRPukmCjyih3dK53iNcm%2F3ZPaOJTrp%2BSKs02Nvs0FFmIDFbz7mnrkesLWK9gW%2Bi8YAVnVSjZdb4wk&X-Amz-Signature=6af1f49924ebc4e3553a19b8f9e836593a8f820b2796824a0ff681333a6ba62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LR2N2K2%2F20261022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261022T033252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGwXUZVEg7cmYoZLOUz2BJlSAktW%2FqwCxlNxSdJS2PVgIgZE1KAffR9Tfdjd7h0g9Li9IZhsit0u3JXjcsazApOl4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDP4b1BsEDjd1HzGlkSrcA1G592Z9w125cNktyOawNGBFHRmLHoCySuZ5%2FdCbMt2UNzg2hAb%2Bnq%2FDgIEbX%2BF36DORRd5NCOsV48z%2FuuZLQLAQpBQ7cA8sTHcdPJ8ljBvDsPACICgxtzR39%2Bd%2Bi4%2FiIw4fYtBv%2BhrgGFh9le%2FM9dGaCHLDZdUaZuiO%2FO7bNPec%2Fd3QWyo3uPt%2FK1iGzXj%2Flj77Zjw8DO2bY7bOconzS7QqOSInU3Wc8RGTIJMr9b%2B7OUDElug5FTqHOHF5bM8h2FLKAXwm4nK2pyYj6y%2FThYHDebkHReOXfs5qGkG2OqKXbzp0AJECKF1g%2BW21ua0wIskT6tUm9YTUASAyuow8NiT9rmUHQHFOI36IT%2FubTA%2BgrQFU1vpS3%2FSDb2WHwZELp%2BdqucAxfT5RpkEQ4hXitEKIYhHyC%2FKXnDtqVf3zCLjQw7icnAb90Q4hmwDSWUAh1rI3oj1D1l%2F8ApH6tetlOL%2BCx5d0q4nbHSQ2cyLNqZ14KVjGK020wp67pMvPUA9GLi%2BoQQmb2c%2BOkTJP%2FY520%2FR5ub5%2ByeJi2sgZ95rBE4KnaslEuN62su4%2FLeyh%2BWGeEBXyF9pyhlNff8UUoZcp3E88u6cAy%2B7Qsnz90ESmT%2FZKlvHjVi5KPWmYdP41MJv15dYGOqUBR6gTVnDnn37eY6UH83%2BK%2Bja9d%2BsGCOBL6SSts95aREo6NhAbiluWKZ6hSTnvzeLio%2BAN%2F93VmAsqOm%2FAQeRgHdZMw3H5UNsuGKmK1jk%2B764g8%2BfTjUU5ih37UCT4TxdNwutx0FT2wkwHE4tfR%2FqcXmwYhPA0VmtqZJrt0NMYBYzmeTwKGQEk8%2BEtL1XJQpj%2BNTDTHMNfK6nKMWWQyV5HvQ4cmrCR&X-Amz-Signature=bb336cec04d0fd2916eed57753bb49ddcea5deb4f18328372855c358cabe465a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

