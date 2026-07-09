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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DYSSMQ%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeR22E3VPhU5%2B7YyYhIjhbiCx67qioRXdVuLNmyB9jIAiEA0GWsF%2FkB%2F7EogqlFyHNOj2e1iDlflBJ5HQ7ALeNMX54qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkZRGb5ayDysCZL0yrcA1lMIcT5joMif7cNo0Wt431%2FHiSdtAtS2u11rBAY5TmhmwLgqQJDKpqtullNWSU00ccrbWzowbB3Ac6OxVJLwCfEpfzU0YPTUd9E1K0uwoasWzYBqryIbvdISG04qZcdbSxCw9CAAzym%2Ff9s0Z%2FhxW7ED3Y4lxZOBrTUnfQ2CfYxkta91i0FVQVC6m78nU0ZJ4BdEe%2Bhau7JOcTHz%2Bgf6z4iAHv9WVkc1MDN7SERB88Cw66e2zspWEhwutmA1ROTJDOqTz0p6xdL1R0KpBQCzKdWo9RYRgtOqAQgXyL990x58XQ%2FYYEQlgRHQ%2B8la6stC1dYUzKccS%2F7UaFLSOnra4633rBAe9Dpfwf%2FMNoWLuvBggeN2rtYdrymS4sRfMxFsiLyxcS9SnJ%2FiKB4i2FYi2x%2BjNRJWwuxUTaHXhoCb%2BtfyQcYdxFIr0I0bOo7PHxnXWt592ihRnmIqxvVxbrY7KFLflIuAeYPwmQAUMARRoKeVgd5STt8%2Bho%2FlYCMaauimEi%2F8t%2Bf7xWJ4ATgOEgcfMAEvX2tuoG0dSpJhYaLt0dYOOz2cTgtOcDhpkw%2FW9hYZu%2F6tjy8CfJoW%2BjHs0N6v1LkJLr5Cr0Rlazm6OY3T8uKkYY%2FyYPlXRNzD57FMIqAvNIGOqUBLrk5iqMZt8HjUe3CbONIROZoLJ1jeDrQrbE%2F9SYKdDaMBbBAl61HGf0%2BqEJ4HZh6v%2BRYQlPwfSK2%2BJzXKaySKGryUsMsj2uTZQykHhmZbmEielFj3Z1qsH%2BubShTq5640Jp5Zws%2Bcz7eQHwkxiTURpTn0ObO1Ph96RVOxU45hemtZGdObvVX%2F98I61AcFgn0IRppUr0TXrxCh8g9dJnBfasMU8Ox&X-Amz-Signature=50cd3c43dc7ae54a38114e3eae8dcb3b49fdf2f82e0e5c7b469345bae57b061f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHNDSTO%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3CXrlo8h79R89V9HVFBuKn%2BPYIpFkAmzCaisoHo4aIAiEAsUT2ZYGO7tETzZF6unGXRRh%2BC5oJrW8aESfTZUzLUiAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXkNbvlnXLgg1W13yrcA%2FDfiyfuhGqBqC21q32FeXatR2AKUIgPgM4UX0ykiXG%2FLzEjPQiE%2B5zK5k%2BWCyL7lqO7AdWq2KLssUMo5esRY35ASAaKj8uo88oQ5VdRjL8rGQG07jHRf5vq7xGPysMaXnwHM3OY96RQwgK5b6XiUK%2F49%2Ft2LU98gNa3S9KGvSh44YnANeJBIIOUVGK9JXZCEpzcVY2jRmWvOQQAOhKp1vlD0nS24BKNHTPfYJUqOxMmlcu0pkaH0W9aKyBgb1mosBrJKcHPO2G9ei6UWc8T656E7elVbz9dCh4xLPyQQZJpFCaU0uSZWyoEWxLTHgu9xoaUm4tbWCDdMeZHKls6CJgqy5zycR%2FPtlZ62m7G%2Bx%2FkXmHcF4Eve9yuFy7dzm4isHQiq6D9PwzhhV1%2BS2Au6DF1TCI5GOIqz2LtpwI%2FHVriPFsNNz3qpsNB%2FqU29mX5PfTFssXv7TRJuHTtjCjNxxD%2FKQRIITUvOyduLVmVrejbWeUC7NPwPhprPDbCL3uBScKsQ5BV3EFtjZDPmhe%2BGfo4yknXO%2FNVdQ5dIsTroH3gJi5WPUTu%2BdhU%2FbQBaK2OmtfI4w6nuMz%2FFAbHWJA%2B45hWY7coTXQ%2BoDSBb5Q0jRP7jzVdJV14eDjdnWoJMN3%2Fu9IGOqUBadjCi0GV4IizmECDLaOh6hlV%2BsQ4Rv0s8jnBwOzPCUvxnEj3QceasUD2lQgrZCd1EuaLjr8mv3ecgHrIvQGSAOUvGQseft3b7Qqd0WOeoB8V4WmwmN8%2BMevfSGpopcg8LVI29oVnPRJWh8qVxxYLYgQoq8pKDk9b03aiITmLKAwAeyMluW%2FalU1i2Z2uB%2FJktiL5B4jC65EQ7Qk518xjHVA0RYfv&X-Amz-Signature=30167646413efb3562311071a3af6f3cacccfbade9402504c51f3d4b61cdd65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHNDSTO%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3CXrlo8h79R89V9HVFBuKn%2BPYIpFkAmzCaisoHo4aIAiEAsUT2ZYGO7tETzZF6unGXRRh%2BC5oJrW8aESfTZUzLUiAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXkNbvlnXLgg1W13yrcA%2FDfiyfuhGqBqC21q32FeXatR2AKUIgPgM4UX0ykiXG%2FLzEjPQiE%2B5zK5k%2BWCyL7lqO7AdWq2KLssUMo5esRY35ASAaKj8uo88oQ5VdRjL8rGQG07jHRf5vq7xGPysMaXnwHM3OY96RQwgK5b6XiUK%2F49%2Ft2LU98gNa3S9KGvSh44YnANeJBIIOUVGK9JXZCEpzcVY2jRmWvOQQAOhKp1vlD0nS24BKNHTPfYJUqOxMmlcu0pkaH0W9aKyBgb1mosBrJKcHPO2G9ei6UWc8T656E7elVbz9dCh4xLPyQQZJpFCaU0uSZWyoEWxLTHgu9xoaUm4tbWCDdMeZHKls6CJgqy5zycR%2FPtlZ62m7G%2Bx%2FkXmHcF4Eve9yuFy7dzm4isHQiq6D9PwzhhV1%2BS2Au6DF1TCI5GOIqz2LtpwI%2FHVriPFsNNz3qpsNB%2FqU29mX5PfTFssXv7TRJuHTtjCjNxxD%2FKQRIITUvOyduLVmVrejbWeUC7NPwPhprPDbCL3uBScKsQ5BV3EFtjZDPmhe%2BGfo4yknXO%2FNVdQ5dIsTroH3gJi5WPUTu%2BdhU%2FbQBaK2OmtfI4w6nuMz%2FFAbHWJA%2B45hWY7coTXQ%2BoDSBb5Q0jRP7jzVdJV14eDjdnWoJMN3%2Fu9IGOqUBadjCi0GV4IizmECDLaOh6hlV%2BsQ4Rv0s8jnBwOzPCUvxnEj3QceasUD2lQgrZCd1EuaLjr8mv3ecgHrIvQGSAOUvGQseft3b7Qqd0WOeoB8V4WmwmN8%2BMevfSGpopcg8LVI29oVnPRJWh8qVxxYLYgQoq8pKDk9b03aiITmLKAwAeyMluW%2FalU1i2Z2uB%2FJktiL5B4jC65EQ7Qk518xjHVA0RYfv&X-Amz-Signature=610053dfcd4b087ec2955e814a413916d6b3ef741dd91d230b32be4e8113915a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHNDSTO%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3CXrlo8h79R89V9HVFBuKn%2BPYIpFkAmzCaisoHo4aIAiEAsUT2ZYGO7tETzZF6unGXRRh%2BC5oJrW8aESfTZUzLUiAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXkNbvlnXLgg1W13yrcA%2FDfiyfuhGqBqC21q32FeXatR2AKUIgPgM4UX0ykiXG%2FLzEjPQiE%2B5zK5k%2BWCyL7lqO7AdWq2KLssUMo5esRY35ASAaKj8uo88oQ5VdRjL8rGQG07jHRf5vq7xGPysMaXnwHM3OY96RQwgK5b6XiUK%2F49%2Ft2LU98gNa3S9KGvSh44YnANeJBIIOUVGK9JXZCEpzcVY2jRmWvOQQAOhKp1vlD0nS24BKNHTPfYJUqOxMmlcu0pkaH0W9aKyBgb1mosBrJKcHPO2G9ei6UWc8T656E7elVbz9dCh4xLPyQQZJpFCaU0uSZWyoEWxLTHgu9xoaUm4tbWCDdMeZHKls6CJgqy5zycR%2FPtlZ62m7G%2Bx%2FkXmHcF4Eve9yuFy7dzm4isHQiq6D9PwzhhV1%2BS2Au6DF1TCI5GOIqz2LtpwI%2FHVriPFsNNz3qpsNB%2FqU29mX5PfTFssXv7TRJuHTtjCjNxxD%2FKQRIITUvOyduLVmVrejbWeUC7NPwPhprPDbCL3uBScKsQ5BV3EFtjZDPmhe%2BGfo4yknXO%2FNVdQ5dIsTroH3gJi5WPUTu%2BdhU%2FbQBaK2OmtfI4w6nuMz%2FFAbHWJA%2B45hWY7coTXQ%2BoDSBb5Q0jRP7jzVdJV14eDjdnWoJMN3%2Fu9IGOqUBadjCi0GV4IizmECDLaOh6hlV%2BsQ4Rv0s8jnBwOzPCUvxnEj3QceasUD2lQgrZCd1EuaLjr8mv3ecgHrIvQGSAOUvGQseft3b7Qqd0WOeoB8V4WmwmN8%2BMevfSGpopcg8LVI29oVnPRJWh8qVxxYLYgQoq8pKDk9b03aiITmLKAwAeyMluW%2FalU1i2Z2uB%2FJktiL5B4jC65EQ7Qk518xjHVA0RYfv&X-Amz-Signature=e875cd88b7905f9f2619113605f3a4a1a00d4de140417a4be44888676da79c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHNDSTO%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3CXrlo8h79R89V9HVFBuKn%2BPYIpFkAmzCaisoHo4aIAiEAsUT2ZYGO7tETzZF6unGXRRh%2BC5oJrW8aESfTZUzLUiAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXkNbvlnXLgg1W13yrcA%2FDfiyfuhGqBqC21q32FeXatR2AKUIgPgM4UX0ykiXG%2FLzEjPQiE%2B5zK5k%2BWCyL7lqO7AdWq2KLssUMo5esRY35ASAaKj8uo88oQ5VdRjL8rGQG07jHRf5vq7xGPysMaXnwHM3OY96RQwgK5b6XiUK%2F49%2Ft2LU98gNa3S9KGvSh44YnANeJBIIOUVGK9JXZCEpzcVY2jRmWvOQQAOhKp1vlD0nS24BKNHTPfYJUqOxMmlcu0pkaH0W9aKyBgb1mosBrJKcHPO2G9ei6UWc8T656E7elVbz9dCh4xLPyQQZJpFCaU0uSZWyoEWxLTHgu9xoaUm4tbWCDdMeZHKls6CJgqy5zycR%2FPtlZ62m7G%2Bx%2FkXmHcF4Eve9yuFy7dzm4isHQiq6D9PwzhhV1%2BS2Au6DF1TCI5GOIqz2LtpwI%2FHVriPFsNNz3qpsNB%2FqU29mX5PfTFssXv7TRJuHTtjCjNxxD%2FKQRIITUvOyduLVmVrejbWeUC7NPwPhprPDbCL3uBScKsQ5BV3EFtjZDPmhe%2BGfo4yknXO%2FNVdQ5dIsTroH3gJi5WPUTu%2BdhU%2FbQBaK2OmtfI4w6nuMz%2FFAbHWJA%2B45hWY7coTXQ%2BoDSBb5Q0jRP7jzVdJV14eDjdnWoJMN3%2Fu9IGOqUBadjCi0GV4IizmECDLaOh6hlV%2BsQ4Rv0s8jnBwOzPCUvxnEj3QceasUD2lQgrZCd1EuaLjr8mv3ecgHrIvQGSAOUvGQseft3b7Qqd0WOeoB8V4WmwmN8%2BMevfSGpopcg8LVI29oVnPRJWh8qVxxYLYgQoq8pKDk9b03aiITmLKAwAeyMluW%2FalU1i2Z2uB%2FJktiL5B4jC65EQ7Qk518xjHVA0RYfv&X-Amz-Signature=335aec82f0f0e076f26207a2f57063affe8c15d3ce7b4427acf4b708a8f2dc2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JHNDSTO%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3CXrlo8h79R89V9HVFBuKn%2BPYIpFkAmzCaisoHo4aIAiEAsUT2ZYGO7tETzZF6unGXRRh%2BC5oJrW8aESfTZUzLUiAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXkNbvlnXLgg1W13yrcA%2FDfiyfuhGqBqC21q32FeXatR2AKUIgPgM4UX0ykiXG%2FLzEjPQiE%2B5zK5k%2BWCyL7lqO7AdWq2KLssUMo5esRY35ASAaKj8uo88oQ5VdRjL8rGQG07jHRf5vq7xGPysMaXnwHM3OY96RQwgK5b6XiUK%2F49%2Ft2LU98gNa3S9KGvSh44YnANeJBIIOUVGK9JXZCEpzcVY2jRmWvOQQAOhKp1vlD0nS24BKNHTPfYJUqOxMmlcu0pkaH0W9aKyBgb1mosBrJKcHPO2G9ei6UWc8T656E7elVbz9dCh4xLPyQQZJpFCaU0uSZWyoEWxLTHgu9xoaUm4tbWCDdMeZHKls6CJgqy5zycR%2FPtlZ62m7G%2Bx%2FkXmHcF4Eve9yuFy7dzm4isHQiq6D9PwzhhV1%2BS2Au6DF1TCI5GOIqz2LtpwI%2FHVriPFsNNz3qpsNB%2FqU29mX5PfTFssXv7TRJuHTtjCjNxxD%2FKQRIITUvOyduLVmVrejbWeUC7NPwPhprPDbCL3uBScKsQ5BV3EFtjZDPmhe%2BGfo4yknXO%2FNVdQ5dIsTroH3gJi5WPUTu%2BdhU%2FbQBaK2OmtfI4w6nuMz%2FFAbHWJA%2B45hWY7coTXQ%2BoDSBb5Q0jRP7jzVdJV14eDjdnWoJMN3%2Fu9IGOqUBadjCi0GV4IizmECDLaOh6hlV%2BsQ4Rv0s8jnBwOzPCUvxnEj3QceasUD2lQgrZCd1EuaLjr8mv3ecgHrIvQGSAOUvGQseft3b7Qqd0WOeoB8V4WmwmN8%2BMevfSGpopcg8LVI29oVnPRJWh8qVxxYLYgQoq8pKDk9b03aiITmLKAwAeyMluW%2FalU1i2Z2uB%2FJktiL5B4jC65EQ7Qk518xjHVA0RYfv&X-Amz-Signature=bccda1eff13a0ce21211756a16bd0ef8000507b51d95e1a41e9a3b471355429f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3DYSSMQ%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T031738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEeR22E3VPhU5%2B7YyYhIjhbiCx67qioRXdVuLNmyB9jIAiEA0GWsF%2FkB%2F7EogqlFyHNOj2e1iDlflBJ5HQ7ALeNMX54qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkZRGb5ayDysCZL0yrcA1lMIcT5joMif7cNo0Wt431%2FHiSdtAtS2u11rBAY5TmhmwLgqQJDKpqtullNWSU00ccrbWzowbB3Ac6OxVJLwCfEpfzU0YPTUd9E1K0uwoasWzYBqryIbvdISG04qZcdbSxCw9CAAzym%2Ff9s0Z%2FhxW7ED3Y4lxZOBrTUnfQ2CfYxkta91i0FVQVC6m78nU0ZJ4BdEe%2Bhau7JOcTHz%2Bgf6z4iAHv9WVkc1MDN7SERB88Cw66e2zspWEhwutmA1ROTJDOqTz0p6xdL1R0KpBQCzKdWo9RYRgtOqAQgXyL990x58XQ%2FYYEQlgRHQ%2B8la6stC1dYUzKccS%2F7UaFLSOnra4633rBAe9Dpfwf%2FMNoWLuvBggeN2rtYdrymS4sRfMxFsiLyxcS9SnJ%2FiKB4i2FYi2x%2BjNRJWwuxUTaHXhoCb%2BtfyQcYdxFIr0I0bOo7PHxnXWt592ihRnmIqxvVxbrY7KFLflIuAeYPwmQAUMARRoKeVgd5STt8%2Bho%2FlYCMaauimEi%2F8t%2Bf7xWJ4ATgOEgcfMAEvX2tuoG0dSpJhYaLt0dYOOz2cTgtOcDhpkw%2FW9hYZu%2F6tjy8CfJoW%2BjHs0N6v1LkJLr5Cr0Rlazm6OY3T8uKkYY%2FyYPlXRNzD57FMIqAvNIGOqUBLrk5iqMZt8HjUe3CbONIROZoLJ1jeDrQrbE%2F9SYKdDaMBbBAl61HGf0%2BqEJ4HZh6v%2BRYQlPwfSK2%2BJzXKaySKGryUsMsj2uTZQykHhmZbmEielFj3Z1qsH%2BubShTq5640Jp5Zws%2Bcz7eQHwkxiTURpTn0ObO1Ph96RVOxU45hemtZGdObvVX%2F98I61AcFgn0IRppUr0TXrxCh8g9dJnBfasMU8Ox&X-Amz-Signature=5cc74828572ed3545a652ca972fbbe6a108ed5a10c349c46f1ee6073c8a16bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

