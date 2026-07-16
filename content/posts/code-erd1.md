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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZAXQ6P%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDwLyvd8Lm8JCtRwjiyu5VThZoVwMuYafprQpOLgJRkkQIhAOkYnLJZSDVpnz49jQhY0u6Q%2BEniSWpshuydSi0UGWN0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwdrGmLzGy6ZHyWcXAq3AOQ28fh8nLJKwUF4y57HYJ8gpgs6MDoW%2FswvtAIwc8IIEK%2BwQorNIoE6PHExRmHNkzQEkQFQUNShzQXE%2FhujqyuC6NAE5QdhiVV5UfuJN5CQy6xGpuNxFDSXumthjiROOWSdullZNTfiUBi%2Fzr4Co8PJp%2BAyAQ1KGa0HN8VW%2FTovlT2pd0ofUa3mBIjZWGvi7G2FneOVtp%2Fats5AUZCM5kvINsIZ8wnc163VTLSWug3acdnnOOwAgIdFL7DrRo7rJrMUfTPDK5hajKgHnG0lNJxzVXF9%2B7C2xIFlBL87DTpmMVhNYcTJayyFnz1W%2F8b5nqdgDhpgDFgn4mLLGUOt04DIlGuVntPyPZCMRPV54wQ%2BATIpMcDHyS1hkCNa7GqmDXd0QWAgzSwLDUw%2FRwuEujnqjvC6X2a7NnvBTd%2FMZOxvkw3KuXNMMEurTUK8YI521f7kmcXYF%2BucveeYnro%2F%2FATVxubTMeGcQT8fyE%2BVVxuoB1%2B6HU%2BCNHsqFHigtiPliuy%2FdGyJ%2B%2FWt5C%2F0sL7TXxsRq2NoXuMuutxeHUo3dtkzB%2BcaM3DUhiydxBB0JRmoe9B41I2tJZ22p38g3UxkRhqzhLpS2uv5hMinfMzDK5VB1%2BtED2fJx8awv%2BXNDDs%2FODSBjqkAb9mfhjL0tXSlIIJbPjvPAnhQgZwbioDQwK11XOAErWwatzxHv%2FdVMzlIbOwTpZUHxVvXRMzCTOD2kSQfMiy6ubqH9tv8aj0qD%2Fekr4ybQjG66pv%2BQB670gkuKfZj%2B7ksdauocUeVFvKLYT02r4J1VjbTV%2FOO00iBnsv%2F7v7cgo4mvekWrtFVH6CAWSVIcuPtITBR5lh30IoYLz4Gy5jyW%2BcNPbB&X-Amz-Signature=47bde64580a0d69d4726d27927142e21cce3440d932428eea336fea68ebd3765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEE6SXJL%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCoTc4mfQj08vmqxxO5%2B8fFZxSYC%2FdfhfZqLChkJZs%2F4QIhAKUMJlUdjInlcefioqyNLBMP%2FL7V0aWtpQ3dWrRo%2BEQSKv8DCDsQABoMNjM3NDIzMTgzODA1IgwolZVaIC4W5ctZsNEq3AMuD8O0GevOA7NIY36MTOoRvJdJvKW%2B4Bn%2BHcSau5cFaxouZS%2Fp92sXOoC1974%2BBz%2FAouUCZN8y%2F8DiMYDR2T9mGv%2F3q7kYzPpC9v7DVtIe1vai9hRe%2BtxhVCBJabKi8AR3KZGfj0ZJJ543yBOxFnfxYiaFksq52xOAGeNBhu5rBzAfu0MMdhD4ATTtkhwce9tZD4DdW7xvc%2B6Pj6xtRrmYVYm6nRtMs7OG%2BhxR1%2Bz82XWLffNoDiV%2Fqy4M1ahjNEh3Etrg227y4G62fylvxR3yzl6lYhszqUJvDtDGf89CFqWoU0Qdp4UCZSCbBO80g7rmkf3A00g8Oe%2FDaJI5qNqxEQQ2uuD6vCv%2F2jCj8F1DM39oeuWgX4PB7%2F8T1tv8XitXfz67RWqTCzaKRYaNGMeGd8c6SNSPR%2BnC3nJkT%2BmExMUsJyM8WO0V5J789XSymRk6dhNzBnivVPiDIe7IfKxPHYn7eKWiMxF5qdp0zz5UGgsK%2Fnhg%2FXAA%2FM%2F5E%2FmQjPrvpc07%2BTQiPK9HE9Arp9lSkj%2Fp4SHZOzRE9oeOAg6LbRTTJG9dQC7tCbcK7ae5UaG%2FtjJwGCQyefMKNc9L1qqrxe7%2BXllIcTbAyfpeQ0OwZaX6YjMGAN%2Fb%2BhyjUTCk%2FuDSBjqkAcrmjcytzQYCqlrm8H%2BKIXa7Gn4cdm0GFRWbR%2BEZM3RGB3Jrvn3Qutd95Rq44wccNxOe%2FeTil%2BJvy5XkOffXmaPda6u8V%2B%2F3ftEwbEKat4KgS34F8yqou5rGgx5JUZY9i%2F%2FO8cw4zvUw1cHFK8zf1QTjXzpD0SpAIGnuqfDP%2FfWzFQQL7xmjCZxhzePVHswwWRm9lWXTcrxBeMmfe5Bas3YdKUSo&X-Amz-Signature=5c50879ffe1c1d4d92a986f17dfbca7dc73f8cd6cb21d3a51e386533d67a09d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEE6SXJL%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCoTc4mfQj08vmqxxO5%2B8fFZxSYC%2FdfhfZqLChkJZs%2F4QIhAKUMJlUdjInlcefioqyNLBMP%2FL7V0aWtpQ3dWrRo%2BEQSKv8DCDsQABoMNjM3NDIzMTgzODA1IgwolZVaIC4W5ctZsNEq3AMuD8O0GevOA7NIY36MTOoRvJdJvKW%2B4Bn%2BHcSau5cFaxouZS%2Fp92sXOoC1974%2BBz%2FAouUCZN8y%2F8DiMYDR2T9mGv%2F3q7kYzPpC9v7DVtIe1vai9hRe%2BtxhVCBJabKi8AR3KZGfj0ZJJ543yBOxFnfxYiaFksq52xOAGeNBhu5rBzAfu0MMdhD4ATTtkhwce9tZD4DdW7xvc%2B6Pj6xtRrmYVYm6nRtMs7OG%2BhxR1%2Bz82XWLffNoDiV%2Fqy4M1ahjNEh3Etrg227y4G62fylvxR3yzl6lYhszqUJvDtDGf89CFqWoU0Qdp4UCZSCbBO80g7rmkf3A00g8Oe%2FDaJI5qNqxEQQ2uuD6vCv%2F2jCj8F1DM39oeuWgX4PB7%2F8T1tv8XitXfz67RWqTCzaKRYaNGMeGd8c6SNSPR%2BnC3nJkT%2BmExMUsJyM8WO0V5J789XSymRk6dhNzBnivVPiDIe7IfKxPHYn7eKWiMxF5qdp0zz5UGgsK%2Fnhg%2FXAA%2FM%2F5E%2FmQjPrvpc07%2BTQiPK9HE9Arp9lSkj%2Fp4SHZOzRE9oeOAg6LbRTTJG9dQC7tCbcK7ae5UaG%2FtjJwGCQyefMKNc9L1qqrxe7%2BXllIcTbAyfpeQ0OwZaX6YjMGAN%2Fb%2BhyjUTCk%2FuDSBjqkAcrmjcytzQYCqlrm8H%2BKIXa7Gn4cdm0GFRWbR%2BEZM3RGB3Jrvn3Qutd95Rq44wccNxOe%2FeTil%2BJvy5XkOffXmaPda6u8V%2B%2F3ftEwbEKat4KgS34F8yqou5rGgx5JUZY9i%2F%2FO8cw4zvUw1cHFK8zf1QTjXzpD0SpAIGnuqfDP%2FfWzFQQL7xmjCZxhzePVHswwWRm9lWXTcrxBeMmfe5Bas3YdKUSo&X-Amz-Signature=02560bde819627086d4e72fd21ec0335295101569dd3912b2607dcca1e878a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEE6SXJL%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCoTc4mfQj08vmqxxO5%2B8fFZxSYC%2FdfhfZqLChkJZs%2F4QIhAKUMJlUdjInlcefioqyNLBMP%2FL7V0aWtpQ3dWrRo%2BEQSKv8DCDsQABoMNjM3NDIzMTgzODA1IgwolZVaIC4W5ctZsNEq3AMuD8O0GevOA7NIY36MTOoRvJdJvKW%2B4Bn%2BHcSau5cFaxouZS%2Fp92sXOoC1974%2BBz%2FAouUCZN8y%2F8DiMYDR2T9mGv%2F3q7kYzPpC9v7DVtIe1vai9hRe%2BtxhVCBJabKi8AR3KZGfj0ZJJ543yBOxFnfxYiaFksq52xOAGeNBhu5rBzAfu0MMdhD4ATTtkhwce9tZD4DdW7xvc%2B6Pj6xtRrmYVYm6nRtMs7OG%2BhxR1%2Bz82XWLffNoDiV%2Fqy4M1ahjNEh3Etrg227y4G62fylvxR3yzl6lYhszqUJvDtDGf89CFqWoU0Qdp4UCZSCbBO80g7rmkf3A00g8Oe%2FDaJI5qNqxEQQ2uuD6vCv%2F2jCj8F1DM39oeuWgX4PB7%2F8T1tv8XitXfz67RWqTCzaKRYaNGMeGd8c6SNSPR%2BnC3nJkT%2BmExMUsJyM8WO0V5J789XSymRk6dhNzBnivVPiDIe7IfKxPHYn7eKWiMxF5qdp0zz5UGgsK%2Fnhg%2FXAA%2FM%2F5E%2FmQjPrvpc07%2BTQiPK9HE9Arp9lSkj%2Fp4SHZOzRE9oeOAg6LbRTTJG9dQC7tCbcK7ae5UaG%2FtjJwGCQyefMKNc9L1qqrxe7%2BXllIcTbAyfpeQ0OwZaX6YjMGAN%2Fb%2BhyjUTCk%2FuDSBjqkAcrmjcytzQYCqlrm8H%2BKIXa7Gn4cdm0GFRWbR%2BEZM3RGB3Jrvn3Qutd95Rq44wccNxOe%2FeTil%2BJvy5XkOffXmaPda6u8V%2B%2F3ftEwbEKat4KgS34F8yqou5rGgx5JUZY9i%2F%2FO8cw4zvUw1cHFK8zf1QTjXzpD0SpAIGnuqfDP%2FfWzFQQL7xmjCZxhzePVHswwWRm9lWXTcrxBeMmfe5Bas3YdKUSo&X-Amz-Signature=1a4c47d31095600dfe723fdabb43dee12a19f9cb11b7fa7a5870c8158362b4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEE6SXJL%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCoTc4mfQj08vmqxxO5%2B8fFZxSYC%2FdfhfZqLChkJZs%2F4QIhAKUMJlUdjInlcefioqyNLBMP%2FL7V0aWtpQ3dWrRo%2BEQSKv8DCDsQABoMNjM3NDIzMTgzODA1IgwolZVaIC4W5ctZsNEq3AMuD8O0GevOA7NIY36MTOoRvJdJvKW%2B4Bn%2BHcSau5cFaxouZS%2Fp92sXOoC1974%2BBz%2FAouUCZN8y%2F8DiMYDR2T9mGv%2F3q7kYzPpC9v7DVtIe1vai9hRe%2BtxhVCBJabKi8AR3KZGfj0ZJJ543yBOxFnfxYiaFksq52xOAGeNBhu5rBzAfu0MMdhD4ATTtkhwce9tZD4DdW7xvc%2B6Pj6xtRrmYVYm6nRtMs7OG%2BhxR1%2Bz82XWLffNoDiV%2Fqy4M1ahjNEh3Etrg227y4G62fylvxR3yzl6lYhszqUJvDtDGf89CFqWoU0Qdp4UCZSCbBO80g7rmkf3A00g8Oe%2FDaJI5qNqxEQQ2uuD6vCv%2F2jCj8F1DM39oeuWgX4PB7%2F8T1tv8XitXfz67RWqTCzaKRYaNGMeGd8c6SNSPR%2BnC3nJkT%2BmExMUsJyM8WO0V5J789XSymRk6dhNzBnivVPiDIe7IfKxPHYn7eKWiMxF5qdp0zz5UGgsK%2Fnhg%2FXAA%2FM%2F5E%2FmQjPrvpc07%2BTQiPK9HE9Arp9lSkj%2Fp4SHZOzRE9oeOAg6LbRTTJG9dQC7tCbcK7ae5UaG%2FtjJwGCQyefMKNc9L1qqrxe7%2BXllIcTbAyfpeQ0OwZaX6YjMGAN%2Fb%2BhyjUTCk%2FuDSBjqkAcrmjcytzQYCqlrm8H%2BKIXa7Gn4cdm0GFRWbR%2BEZM3RGB3Jrvn3Qutd95Rq44wccNxOe%2FeTil%2BJvy5XkOffXmaPda6u8V%2B%2F3ftEwbEKat4KgS34F8yqou5rGgx5JUZY9i%2F%2FO8cw4zvUw1cHFK8zf1QTjXzpD0SpAIGnuqfDP%2FfWzFQQL7xmjCZxhzePVHswwWRm9lWXTcrxBeMmfe5Bas3YdKUSo&X-Amz-Signature=fcfc174eb12f576ae15c4efa874e529d6c6ac67515b526a719964cb55025d87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEE6SXJL%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCoTc4mfQj08vmqxxO5%2B8fFZxSYC%2FdfhfZqLChkJZs%2F4QIhAKUMJlUdjInlcefioqyNLBMP%2FL7V0aWtpQ3dWrRo%2BEQSKv8DCDsQABoMNjM3NDIzMTgzODA1IgwolZVaIC4W5ctZsNEq3AMuD8O0GevOA7NIY36MTOoRvJdJvKW%2B4Bn%2BHcSau5cFaxouZS%2Fp92sXOoC1974%2BBz%2FAouUCZN8y%2F8DiMYDR2T9mGv%2F3q7kYzPpC9v7DVtIe1vai9hRe%2BtxhVCBJabKi8AR3KZGfj0ZJJ543yBOxFnfxYiaFksq52xOAGeNBhu5rBzAfu0MMdhD4ATTtkhwce9tZD4DdW7xvc%2B6Pj6xtRrmYVYm6nRtMs7OG%2BhxR1%2Bz82XWLffNoDiV%2Fqy4M1ahjNEh3Etrg227y4G62fylvxR3yzl6lYhszqUJvDtDGf89CFqWoU0Qdp4UCZSCbBO80g7rmkf3A00g8Oe%2FDaJI5qNqxEQQ2uuD6vCv%2F2jCj8F1DM39oeuWgX4PB7%2F8T1tv8XitXfz67RWqTCzaKRYaNGMeGd8c6SNSPR%2BnC3nJkT%2BmExMUsJyM8WO0V5J789XSymRk6dhNzBnivVPiDIe7IfKxPHYn7eKWiMxF5qdp0zz5UGgsK%2Fnhg%2FXAA%2FM%2F5E%2FmQjPrvpc07%2BTQiPK9HE9Arp9lSkj%2Fp4SHZOzRE9oeOAg6LbRTTJG9dQC7tCbcK7ae5UaG%2FtjJwGCQyefMKNc9L1qqrxe7%2BXllIcTbAyfpeQ0OwZaX6YjMGAN%2Fb%2BhyjUTCk%2FuDSBjqkAcrmjcytzQYCqlrm8H%2BKIXa7Gn4cdm0GFRWbR%2BEZM3RGB3Jrvn3Qutd95Rq44wccNxOe%2FeTil%2BJvy5XkOffXmaPda6u8V%2B%2F3ftEwbEKat4KgS34F8yqou5rGgx5JUZY9i%2F%2FO8cw4zvUw1cHFK8zf1QTjXzpD0SpAIGnuqfDP%2FfWzFQQL7xmjCZxhzePVHswwWRm9lWXTcrxBeMmfe5Bas3YdKUSo&X-Amz-Signature=341e4bb85057a5c3b1d1008cfcad0e2f4ed8e1701d8d6b9ff01aae813f507094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTZAXQ6P%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T023516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDwLyvd8Lm8JCtRwjiyu5VThZoVwMuYafprQpOLgJRkkQIhAOkYnLJZSDVpnz49jQhY0u6Q%2BEniSWpshuydSi0UGWN0Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwdrGmLzGy6ZHyWcXAq3AOQ28fh8nLJKwUF4y57HYJ8gpgs6MDoW%2FswvtAIwc8IIEK%2BwQorNIoE6PHExRmHNkzQEkQFQUNShzQXE%2FhujqyuC6NAE5QdhiVV5UfuJN5CQy6xGpuNxFDSXumthjiROOWSdullZNTfiUBi%2Fzr4Co8PJp%2BAyAQ1KGa0HN8VW%2FTovlT2pd0ofUa3mBIjZWGvi7G2FneOVtp%2Fats5AUZCM5kvINsIZ8wnc163VTLSWug3acdnnOOwAgIdFL7DrRo7rJrMUfTPDK5hajKgHnG0lNJxzVXF9%2B7C2xIFlBL87DTpmMVhNYcTJayyFnz1W%2F8b5nqdgDhpgDFgn4mLLGUOt04DIlGuVntPyPZCMRPV54wQ%2BATIpMcDHyS1hkCNa7GqmDXd0QWAgzSwLDUw%2FRwuEujnqjvC6X2a7NnvBTd%2FMZOxvkw3KuXNMMEurTUK8YI521f7kmcXYF%2BucveeYnro%2F%2FATVxubTMeGcQT8fyE%2BVVxuoB1%2B6HU%2BCNHsqFHigtiPliuy%2FdGyJ%2B%2FWt5C%2F0sL7TXxsRq2NoXuMuutxeHUo3dtkzB%2BcaM3DUhiydxBB0JRmoe9B41I2tJZ22p38g3UxkRhqzhLpS2uv5hMinfMzDK5VB1%2BtED2fJx8awv%2BXNDDs%2FODSBjqkAb9mfhjL0tXSlIIJbPjvPAnhQgZwbioDQwK11XOAErWwatzxHv%2FdVMzlIbOwTpZUHxVvXRMzCTOD2kSQfMiy6ubqH9tv8aj0qD%2Fekr4ybQjG66pv%2BQB670gkuKfZj%2B7ksdauocUeVFvKLYT02r4J1VjbTV%2FOO00iBnsv%2F7v7cgo4mvekWrtFVH6CAWSVIcuPtITBR5lh30IoYLz4Gy5jyW%2BcNPbB&X-Amz-Signature=9bfc3f9ee3edec75353c2533a6708f3013774f9f34236dbb8f87bd21e209aeba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

