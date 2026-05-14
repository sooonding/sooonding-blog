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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IKP3QP%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgyI%2BZBMYhML4MJQDuDRY%2FDJfEUoc%2FVYZ%2BMB%2FCHVPB5gIhAIurOCO8PU2kypMOVJDlpJrf6bFBEuAu9bN3Y7bl8MugKv8DCFQQABoMNjM3NDIzMTgzODA1IgzqCFunyCvFMbSXHn0q3ANj4UFo2O%2Fa0wTp19gONqjk6k1lbejMzNpAbO4TLA4fo1hnpEN0NcvNzPdp1aJ%2FWUJ4FWqK0hqwGRX563dHBqJSyiVL58jLqTBv19Cwy%2FaR5FXfH2Hv5fI3fORZ%2FW9k9p7KS%2FjB4U0WmIsTJ0FISE5GVJ9WrmSd10yfqUXnfYoX1UcFTfLOJhU8uI8eX%2B9e92WVfOTN873Bmdpl%2Fo8FNWMMFaAWe5eD0PbcOMd%2Blj%2FvZ0eheZtEfW%2FrmCzLzkK9zcEew07i5mVxFCyvk%2B2Ak9kaCMe4PwFD1O7ULot05z7MDnY%2BZ3wWXppBG9Stbka%2FDCBJoFBh7UP22Rux8p5FM4SzpgZq4a5AiYpza7sL5weUwvF5UHdu2KNOVrS7z%2BCZZ2IjIiuICNP0nXqMldoTs6gOSZyJPs7%2B9csFkowsw0xmeT6NKoVPKJRJ0FHMToZbjOJSaGjGVsNxFPqzPGQ20Dw6xKUO7dtQD1rfDIjOddFUnLfUuUpckUw2jLL7TgPjWjGZXY%2FXg2jU0%2FXR9G7U%2BAI%2Bw%2FiBmH1HnCymojU8k2GiJT1YxMQSf%2FkTf6WQGMAJq9eCKUGXdBo5seAwJMxpZhAA62WGfPMDW5iW5pIxW%2Fbj3jiVprS2SXhv0LjqDDCk9ZTQBjqkAemEEMB8eIRHcNCOgG4axhYRsOdoFPbxq7DcnD2kuFkDiFWEHdc6pQk72lYdsuJc2ZwNNFNqoR5ZdIAdbIrpqfdWY38QpV8BwNdr2%2F9VGEk4xAqQ4JfMz3wDNQQT7mwF%2FNY%2BaRTBx%2FcmHIOpWDyDFR4U78nyO08OqbI7VLWhFmd3AU70HGP0t%2BX2T0RNP%2BN0E%2FfrHQfrEUcdEYnTmuEk0jaY4C8j&X-Amz-Signature=89d5c8b893f3d693a52c7c8fd2800db063237868ff5cd0acce327ed3450dd4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466662YZPBZ%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLa8k7qaNJwnznRm2HQnjhsL%2F6FOvVErbs2TkkUN41wAiAlDuSBgDAADv0Dq5%2FsnxKpJ0887HVWApKXLSYM%2BENNISr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM6oqJJHjc6d8DHWEzKtwDwyARoVytSqmUQ0kNSCxfrRjROMfQ6cwx75zk84sQhPj8VMyLXFPBhdCFjvWVCn6jxYBGaHiLAwLJCcmFAtZDt%2F9cHcuYJFtA6%2FUSf02lt6UE8dD6JGIIob10Bgf%2BfP0cyKFxroWmQRibRwBLaRDJq%2FWGy3cu1HFv3NHrSH2GQ0GKlDkNso6xeltj2fCIW%2B%2FRGcvvEQiCoWVSzU8%2BbuUOUnPEpQCq61G5%2FTrIrLBgHuEXvS2ZUOxcBCGBNQBa%2Bsvo4MPZwYw63vybEHJYiMQxyF9WeJroEgVOFcVYAfDxNgT6mZa0tpE5EXKIzs0wzo%2BmNHg6joabkDEAy1nC56Nh8ehsxIWRu6nfWgYwUMMyCHsdsZ8mTw42WEgDPBMYpEhQylcpCrZypK22cCye%2F6a5P8TlNZ9YhvXUzgdKL%2BCkEr9H3uFzffck06aPTgFOs%2BWvIVfNGwDeOzWaJ%2B1pHPpC6yBjfebtkSBitYmemAjzxnl4uJcmHtVEtVOKB0mG5fLbSiubO8hyhwLBFYzZn2nlKulvZMRGpC8RpkAa38IbmhyyXCEIz21vpgryOahY0K6AjB%2FhyVs1Lz4CYJQvdUvRbDrBbrWwh0v4wer6hjzqHbfiOVZ5PTFA5iQw1W4wk4CU0AY6pgG0fWYfHCV8vosnUENIEQS4eNnKwvPcRMqKXTzaSwslOnWbCYRUUEGS6YQz2LwMpFxr6Epr4dmYNdC5Q7IIhk0FWPM7VbHlSITv9u7%2BHETGDLHsrUdvmDSKQguppEgZdz8%2FfIfTBNQGVLkyrvZDXVXMGEIlEXU9YameFJKZFJXorH6zbOrwiqfi504jEvCnzsboXvHRj%2BJjZUleBchB5OWtov3OqsYM&X-Amz-Signature=177a72e5b9a16cd96a0e12537312b6c6e1d706be9de20bc0cd8b1c4ac2fc8409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466662YZPBZ%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLa8k7qaNJwnznRm2HQnjhsL%2F6FOvVErbs2TkkUN41wAiAlDuSBgDAADv0Dq5%2FsnxKpJ0887HVWApKXLSYM%2BENNISr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM6oqJJHjc6d8DHWEzKtwDwyARoVytSqmUQ0kNSCxfrRjROMfQ6cwx75zk84sQhPj8VMyLXFPBhdCFjvWVCn6jxYBGaHiLAwLJCcmFAtZDt%2F9cHcuYJFtA6%2FUSf02lt6UE8dD6JGIIob10Bgf%2BfP0cyKFxroWmQRibRwBLaRDJq%2FWGy3cu1HFv3NHrSH2GQ0GKlDkNso6xeltj2fCIW%2B%2FRGcvvEQiCoWVSzU8%2BbuUOUnPEpQCq61G5%2FTrIrLBgHuEXvS2ZUOxcBCGBNQBa%2Bsvo4MPZwYw63vybEHJYiMQxyF9WeJroEgVOFcVYAfDxNgT6mZa0tpE5EXKIzs0wzo%2BmNHg6joabkDEAy1nC56Nh8ehsxIWRu6nfWgYwUMMyCHsdsZ8mTw42WEgDPBMYpEhQylcpCrZypK22cCye%2F6a5P8TlNZ9YhvXUzgdKL%2BCkEr9H3uFzffck06aPTgFOs%2BWvIVfNGwDeOzWaJ%2B1pHPpC6yBjfebtkSBitYmemAjzxnl4uJcmHtVEtVOKB0mG5fLbSiubO8hyhwLBFYzZn2nlKulvZMRGpC8RpkAa38IbmhyyXCEIz21vpgryOahY0K6AjB%2FhyVs1Lz4CYJQvdUvRbDrBbrWwh0v4wer6hjzqHbfiOVZ5PTFA5iQw1W4wk4CU0AY6pgG0fWYfHCV8vosnUENIEQS4eNnKwvPcRMqKXTzaSwslOnWbCYRUUEGS6YQz2LwMpFxr6Epr4dmYNdC5Q7IIhk0FWPM7VbHlSITv9u7%2BHETGDLHsrUdvmDSKQguppEgZdz8%2FfIfTBNQGVLkyrvZDXVXMGEIlEXU9YameFJKZFJXorH6zbOrwiqfi504jEvCnzsboXvHRj%2BJjZUleBchB5OWtov3OqsYM&X-Amz-Signature=cf0759516eddb60e8cee59a76ea13174d5e26128e3504a586c3a7582fcdf4ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466662YZPBZ%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLa8k7qaNJwnznRm2HQnjhsL%2F6FOvVErbs2TkkUN41wAiAlDuSBgDAADv0Dq5%2FsnxKpJ0887HVWApKXLSYM%2BENNISr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM6oqJJHjc6d8DHWEzKtwDwyARoVytSqmUQ0kNSCxfrRjROMfQ6cwx75zk84sQhPj8VMyLXFPBhdCFjvWVCn6jxYBGaHiLAwLJCcmFAtZDt%2F9cHcuYJFtA6%2FUSf02lt6UE8dD6JGIIob10Bgf%2BfP0cyKFxroWmQRibRwBLaRDJq%2FWGy3cu1HFv3NHrSH2GQ0GKlDkNso6xeltj2fCIW%2B%2FRGcvvEQiCoWVSzU8%2BbuUOUnPEpQCq61G5%2FTrIrLBgHuEXvS2ZUOxcBCGBNQBa%2Bsvo4MPZwYw63vybEHJYiMQxyF9WeJroEgVOFcVYAfDxNgT6mZa0tpE5EXKIzs0wzo%2BmNHg6joabkDEAy1nC56Nh8ehsxIWRu6nfWgYwUMMyCHsdsZ8mTw42WEgDPBMYpEhQylcpCrZypK22cCye%2F6a5P8TlNZ9YhvXUzgdKL%2BCkEr9H3uFzffck06aPTgFOs%2BWvIVfNGwDeOzWaJ%2B1pHPpC6yBjfebtkSBitYmemAjzxnl4uJcmHtVEtVOKB0mG5fLbSiubO8hyhwLBFYzZn2nlKulvZMRGpC8RpkAa38IbmhyyXCEIz21vpgryOahY0K6AjB%2FhyVs1Lz4CYJQvdUvRbDrBbrWwh0v4wer6hjzqHbfiOVZ5PTFA5iQw1W4wk4CU0AY6pgG0fWYfHCV8vosnUENIEQS4eNnKwvPcRMqKXTzaSwslOnWbCYRUUEGS6YQz2LwMpFxr6Epr4dmYNdC5Q7IIhk0FWPM7VbHlSITv9u7%2BHETGDLHsrUdvmDSKQguppEgZdz8%2FfIfTBNQGVLkyrvZDXVXMGEIlEXU9YameFJKZFJXorH6zbOrwiqfi504jEvCnzsboXvHRj%2BJjZUleBchB5OWtov3OqsYM&X-Amz-Signature=843d7911f7d6eb4ad482595ef0c6a663f050cdd2b289434f14bf288e059dbb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466662YZPBZ%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLa8k7qaNJwnznRm2HQnjhsL%2F6FOvVErbs2TkkUN41wAiAlDuSBgDAADv0Dq5%2FsnxKpJ0887HVWApKXLSYM%2BENNISr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM6oqJJHjc6d8DHWEzKtwDwyARoVytSqmUQ0kNSCxfrRjROMfQ6cwx75zk84sQhPj8VMyLXFPBhdCFjvWVCn6jxYBGaHiLAwLJCcmFAtZDt%2F9cHcuYJFtA6%2FUSf02lt6UE8dD6JGIIob10Bgf%2BfP0cyKFxroWmQRibRwBLaRDJq%2FWGy3cu1HFv3NHrSH2GQ0GKlDkNso6xeltj2fCIW%2B%2FRGcvvEQiCoWVSzU8%2BbuUOUnPEpQCq61G5%2FTrIrLBgHuEXvS2ZUOxcBCGBNQBa%2Bsvo4MPZwYw63vybEHJYiMQxyF9WeJroEgVOFcVYAfDxNgT6mZa0tpE5EXKIzs0wzo%2BmNHg6joabkDEAy1nC56Nh8ehsxIWRu6nfWgYwUMMyCHsdsZ8mTw42WEgDPBMYpEhQylcpCrZypK22cCye%2F6a5P8TlNZ9YhvXUzgdKL%2BCkEr9H3uFzffck06aPTgFOs%2BWvIVfNGwDeOzWaJ%2B1pHPpC6yBjfebtkSBitYmemAjzxnl4uJcmHtVEtVOKB0mG5fLbSiubO8hyhwLBFYzZn2nlKulvZMRGpC8RpkAa38IbmhyyXCEIz21vpgryOahY0K6AjB%2FhyVs1Lz4CYJQvdUvRbDrBbrWwh0v4wer6hjzqHbfiOVZ5PTFA5iQw1W4wk4CU0AY6pgG0fWYfHCV8vosnUENIEQS4eNnKwvPcRMqKXTzaSwslOnWbCYRUUEGS6YQz2LwMpFxr6Epr4dmYNdC5Q7IIhk0FWPM7VbHlSITv9u7%2BHETGDLHsrUdvmDSKQguppEgZdz8%2FfIfTBNQGVLkyrvZDXVXMGEIlEXU9YameFJKZFJXorH6zbOrwiqfi504jEvCnzsboXvHRj%2BJjZUleBchB5OWtov3OqsYM&X-Amz-Signature=c8ce382f2b9cfd0b347d57745237fb8062b7b93a9f34409104fdc8a94a3df643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466662YZPBZ%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLa8k7qaNJwnznRm2HQnjhsL%2F6FOvVErbs2TkkUN41wAiAlDuSBgDAADv0Dq5%2FsnxKpJ0887HVWApKXLSYM%2BENNISr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM6oqJJHjc6d8DHWEzKtwDwyARoVytSqmUQ0kNSCxfrRjROMfQ6cwx75zk84sQhPj8VMyLXFPBhdCFjvWVCn6jxYBGaHiLAwLJCcmFAtZDt%2F9cHcuYJFtA6%2FUSf02lt6UE8dD6JGIIob10Bgf%2BfP0cyKFxroWmQRibRwBLaRDJq%2FWGy3cu1HFv3NHrSH2GQ0GKlDkNso6xeltj2fCIW%2B%2FRGcvvEQiCoWVSzU8%2BbuUOUnPEpQCq61G5%2FTrIrLBgHuEXvS2ZUOxcBCGBNQBa%2Bsvo4MPZwYw63vybEHJYiMQxyF9WeJroEgVOFcVYAfDxNgT6mZa0tpE5EXKIzs0wzo%2BmNHg6joabkDEAy1nC56Nh8ehsxIWRu6nfWgYwUMMyCHsdsZ8mTw42WEgDPBMYpEhQylcpCrZypK22cCye%2F6a5P8TlNZ9YhvXUzgdKL%2BCkEr9H3uFzffck06aPTgFOs%2BWvIVfNGwDeOzWaJ%2B1pHPpC6yBjfebtkSBitYmemAjzxnl4uJcmHtVEtVOKB0mG5fLbSiubO8hyhwLBFYzZn2nlKulvZMRGpC8RpkAa38IbmhyyXCEIz21vpgryOahY0K6AjB%2FhyVs1Lz4CYJQvdUvRbDrBbrWwh0v4wer6hjzqHbfiOVZ5PTFA5iQw1W4wk4CU0AY6pgG0fWYfHCV8vosnUENIEQS4eNnKwvPcRMqKXTzaSwslOnWbCYRUUEGS6YQz2LwMpFxr6Epr4dmYNdC5Q7IIhk0FWPM7VbHlSITv9u7%2BHETGDLHsrUdvmDSKQguppEgZdz8%2FfIfTBNQGVLkyrvZDXVXMGEIlEXU9YameFJKZFJXorH6zbOrwiqfi504jEvCnzsboXvHRj%2BJjZUleBchB5OWtov3OqsYM&X-Amz-Signature=dc8b7a72ed9c8a5ef71cdcbc269e1074280e1475e92e388b89b7abf1e8c066f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IKP3QP%2F20260514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260514T032836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgyI%2BZBMYhML4MJQDuDRY%2FDJfEUoc%2FVYZ%2BMB%2FCHVPB5gIhAIurOCO8PU2kypMOVJDlpJrf6bFBEuAu9bN3Y7bl8MugKv8DCFQQABoMNjM3NDIzMTgzODA1IgzqCFunyCvFMbSXHn0q3ANj4UFo2O%2Fa0wTp19gONqjk6k1lbejMzNpAbO4TLA4fo1hnpEN0NcvNzPdp1aJ%2FWUJ4FWqK0hqwGRX563dHBqJSyiVL58jLqTBv19Cwy%2FaR5FXfH2Hv5fI3fORZ%2FW9k9p7KS%2FjB4U0WmIsTJ0FISE5GVJ9WrmSd10yfqUXnfYoX1UcFTfLOJhU8uI8eX%2B9e92WVfOTN873Bmdpl%2Fo8FNWMMFaAWe5eD0PbcOMd%2Blj%2FvZ0eheZtEfW%2FrmCzLzkK9zcEew07i5mVxFCyvk%2B2Ak9kaCMe4PwFD1O7ULot05z7MDnY%2BZ3wWXppBG9Stbka%2FDCBJoFBh7UP22Rux8p5FM4SzpgZq4a5AiYpza7sL5weUwvF5UHdu2KNOVrS7z%2BCZZ2IjIiuICNP0nXqMldoTs6gOSZyJPs7%2B9csFkowsw0xmeT6NKoVPKJRJ0FHMToZbjOJSaGjGVsNxFPqzPGQ20Dw6xKUO7dtQD1rfDIjOddFUnLfUuUpckUw2jLL7TgPjWjGZXY%2FXg2jU0%2FXR9G7U%2BAI%2Bw%2FiBmH1HnCymojU8k2GiJT1YxMQSf%2FkTf6WQGMAJq9eCKUGXdBo5seAwJMxpZhAA62WGfPMDW5iW5pIxW%2Fbj3jiVprS2SXhv0LjqDDCk9ZTQBjqkAemEEMB8eIRHcNCOgG4axhYRsOdoFPbxq7DcnD2kuFkDiFWEHdc6pQk72lYdsuJc2ZwNNFNqoR5ZdIAdbIrpqfdWY38QpV8BwNdr2%2F9VGEk4xAqQ4JfMz3wDNQQT7mwF%2FNY%2BaRTBx%2FcmHIOpWDyDFR4U78nyO08OqbI7VLWhFmd3AU70HGP0t%2BX2T0RNP%2BN0E%2FfrHQfrEUcdEYnTmuEk0jaY4C8j&X-Amz-Signature=2785eee97324f8a2d8f7a5d417e0d505627727eeeb477e52930edd8bc7130c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

