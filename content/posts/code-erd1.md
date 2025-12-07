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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JDISIQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAg0bpFpYb5oqE%2FS%2BRi8tdp5%2FSAA9dty%2FDpkzH3Ex0zgAiAm%2Bo0jIiEcgjzI9dY%2FV%2FIFMH%2F9FNHeMyps3E3ftgYJuiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QC1poru5ww8XWjzKtwDkuPT6rfenQqXg1g6Igku8GIyALnTvWpJopOM0Ox3ztBR86SRlQ5US3m7O0Qk4c9WTJYr2ne8J2p4cPTZuBcr3C0XJ6MeNoJ4SwyClJ9HWeWom8tPb7VzLFCzxhAlv4gp6TLJtKTa5Vt1GqR%2F5CaPmsPJQajnrRO4DcYZsbdrLyUolo8I5IdQ%2FUnPdnxjeU3tqoP8FtmEJAJQ1Hq49r%2BxqQSrdyxi9GO3IAAXSYhLJ0UicNuYxgzIw6xcQOhYEsUbzEUcpzfbwmkExJXGOFjefm4B5qEM5Yo58QMG4kpyqyE46%2B%2FV%2Bic4K%2FvGpIiWoX0mjJuEFa4FsrmIJQVVUlIicZSD2NT%2FlkA59f8rY3ne1lQ99%2BQbfPSO2MAW3FAtVvYHMOXJtKK1P6iA7AEN3TMVXEmCH7oLMlZKYPjiEbY40VOCyW%2FTuSZ27aUNsLR3UyFX6735LeSC9jnVDESFLS4ZyywiTT5YeZD9GQeTuNwPZUbnBppD%2FsN0Fc8ynK352upAoq6tZjOBTOaqQRFZm%2BBzpIP6a8gvq9Xavwji1lThB93yMAG6%2BdmIeAoyxj0lZhUm51Qw8yMwRiGQaf%2BACnPlrlT4ieUVXKmu6wREjairO%2BEzImqMEkFjFycdI0IwwevSyQY6pgGTeeUXH2vyeI%2BCzMfSXndOzvt4ML2rGrU5wUFajdNhONdnh6mfAnggePUyOCNh9p7eJSqsj3dc3e0asZTi8HYD6heQ6TZWW1x4U1BOEEngU4G%2Fdx9IyLEEVFxUs75yBCtLIwCHbzgkZHqprpmtiKcweZKJbfN3REDhw0aNC5pBiBPvazj83eT0ru9hg2olszpF82%2BI71FIm5U4FaSGwcCpHVXClYBU&X-Amz-Signature=835085f47da1ff89eb0b9e622f12f12466d4670b5bf27d7f19eee3c7731be30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3PJLIUW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDll%2BUad75yoTZujsorQNSRj8WVzHtI%2F%2FXH8nhzIj%2FGswIhAKkFrNCliTV58Yv5Uxr1uuRE0k74JSWuv%2BprxDGGBJ2IKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz38qIf5giTnL6pugq3AMoRVHuELf4y0%2BwifWh9famjt%2BsaJ1AXldoX%2B%2FBDzN0Y3H94FA41c7Vu9hfipfWAVPXKnkOBxngY0wwPt6AMf%2FO09uV0hSFsqgH3bxheAR4WnNBc9ZRv7GIbDB6bq6yiC84y4szLqn%2BRaaMkwSpExfP8z0wx1UPXZeeEPL8kvrMXiZ1ftIMzMxtFW37Mjk4fZGJE2juww%2FEiFXz61sankhk4ABdJpxQOC%2F%2F6ciQKH10njj9rSWD%2FnLGsXxwFea7oIpPMUwDtbSlq7sdr%2BosrkYFLFA9zK5WCihUvZ5dFm2d%2FvDpg00g2QLNhCUUrNb9e6YfLJXV15W6eU9S02wadcZ6XNi6Cxsq4m8SUILqYosMUEHa4rd37Eui9CKZLU2CmRtJTVVxTCPiC6xXdqbnqbli%2BCb%2FjRLSiPQXx%2F7vw4vfijmCGIMoVH4swqo1O%2BOoRusZQQu3jXz2hLTEbJhZiYrA3HE582QEq0qsRgEQvyIZp2j6v4jnUIcmHR0fKRAuhmkXLVMtc7Rjwg7R%2FQKr6vJHKA7j4c5qma6RT87AXD8f8uQRdkMphUu5uIiaxBXGJeQfjLzcxxYjChe9K11aJKMhVbKeTFIcBPcBu3cfDQfy0ngwN40jyrblVI3wXjCK69LJBjqkAakV3owwIBCaxr2FDx%2F5TxS3DNrjpfzhcMfm%2FMZIfyyX96WWesHs5t2X5FXKBkNInZ4dCpbfCbGNpex7JhxQtx14BzzQOOt%2BNIl1Undc%2Be5A76Db62bFpj2ZixD%2Bz195feIye7YXIw0tFouBJvaKMfTVLybpTVNNQBv05903gMPgYwnDT9NtavIyG1m6VP%2FDKnU9FmpugZiBnvhZwnHLOFzAbxdw&X-Amz-Signature=8eb84393dba50bd038f01fed495d421c6b996a3c16ff18042889f6afd8038baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3PJLIUW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDll%2BUad75yoTZujsorQNSRj8WVzHtI%2F%2FXH8nhzIj%2FGswIhAKkFrNCliTV58Yv5Uxr1uuRE0k74JSWuv%2BprxDGGBJ2IKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz38qIf5giTnL6pugq3AMoRVHuELf4y0%2BwifWh9famjt%2BsaJ1AXldoX%2B%2FBDzN0Y3H94FA41c7Vu9hfipfWAVPXKnkOBxngY0wwPt6AMf%2FO09uV0hSFsqgH3bxheAR4WnNBc9ZRv7GIbDB6bq6yiC84y4szLqn%2BRaaMkwSpExfP8z0wx1UPXZeeEPL8kvrMXiZ1ftIMzMxtFW37Mjk4fZGJE2juww%2FEiFXz61sankhk4ABdJpxQOC%2F%2F6ciQKH10njj9rSWD%2FnLGsXxwFea7oIpPMUwDtbSlq7sdr%2BosrkYFLFA9zK5WCihUvZ5dFm2d%2FvDpg00g2QLNhCUUrNb9e6YfLJXV15W6eU9S02wadcZ6XNi6Cxsq4m8SUILqYosMUEHa4rd37Eui9CKZLU2CmRtJTVVxTCPiC6xXdqbnqbli%2BCb%2FjRLSiPQXx%2F7vw4vfijmCGIMoVH4swqo1O%2BOoRusZQQu3jXz2hLTEbJhZiYrA3HE582QEq0qsRgEQvyIZp2j6v4jnUIcmHR0fKRAuhmkXLVMtc7Rjwg7R%2FQKr6vJHKA7j4c5qma6RT87AXD8f8uQRdkMphUu5uIiaxBXGJeQfjLzcxxYjChe9K11aJKMhVbKeTFIcBPcBu3cfDQfy0ngwN40jyrblVI3wXjCK69LJBjqkAakV3owwIBCaxr2FDx%2F5TxS3DNrjpfzhcMfm%2FMZIfyyX96WWesHs5t2X5FXKBkNInZ4dCpbfCbGNpex7JhxQtx14BzzQOOt%2BNIl1Undc%2Be5A76Db62bFpj2ZixD%2Bz195feIye7YXIw0tFouBJvaKMfTVLybpTVNNQBv05903gMPgYwnDT9NtavIyG1m6VP%2FDKnU9FmpugZiBnvhZwnHLOFzAbxdw&X-Amz-Signature=5132d8197ef035be926674a1a48eb4b1e1162bef0c0132da946ddb6ad1828894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3PJLIUW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDll%2BUad75yoTZujsorQNSRj8WVzHtI%2F%2FXH8nhzIj%2FGswIhAKkFrNCliTV58Yv5Uxr1uuRE0k74JSWuv%2BprxDGGBJ2IKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz38qIf5giTnL6pugq3AMoRVHuELf4y0%2BwifWh9famjt%2BsaJ1AXldoX%2B%2FBDzN0Y3H94FA41c7Vu9hfipfWAVPXKnkOBxngY0wwPt6AMf%2FO09uV0hSFsqgH3bxheAR4WnNBc9ZRv7GIbDB6bq6yiC84y4szLqn%2BRaaMkwSpExfP8z0wx1UPXZeeEPL8kvrMXiZ1ftIMzMxtFW37Mjk4fZGJE2juww%2FEiFXz61sankhk4ABdJpxQOC%2F%2F6ciQKH10njj9rSWD%2FnLGsXxwFea7oIpPMUwDtbSlq7sdr%2BosrkYFLFA9zK5WCihUvZ5dFm2d%2FvDpg00g2QLNhCUUrNb9e6YfLJXV15W6eU9S02wadcZ6XNi6Cxsq4m8SUILqYosMUEHa4rd37Eui9CKZLU2CmRtJTVVxTCPiC6xXdqbnqbli%2BCb%2FjRLSiPQXx%2F7vw4vfijmCGIMoVH4swqo1O%2BOoRusZQQu3jXz2hLTEbJhZiYrA3HE582QEq0qsRgEQvyIZp2j6v4jnUIcmHR0fKRAuhmkXLVMtc7Rjwg7R%2FQKr6vJHKA7j4c5qma6RT87AXD8f8uQRdkMphUu5uIiaxBXGJeQfjLzcxxYjChe9K11aJKMhVbKeTFIcBPcBu3cfDQfy0ngwN40jyrblVI3wXjCK69LJBjqkAakV3owwIBCaxr2FDx%2F5TxS3DNrjpfzhcMfm%2FMZIfyyX96WWesHs5t2X5FXKBkNInZ4dCpbfCbGNpex7JhxQtx14BzzQOOt%2BNIl1Undc%2Be5A76Db62bFpj2ZixD%2Bz195feIye7YXIw0tFouBJvaKMfTVLybpTVNNQBv05903gMPgYwnDT9NtavIyG1m6VP%2FDKnU9FmpugZiBnvhZwnHLOFzAbxdw&X-Amz-Signature=21128b7937082cb1ee0392e8425dbc975209af707a5aa4f5b440989218f837e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3PJLIUW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDll%2BUad75yoTZujsorQNSRj8WVzHtI%2F%2FXH8nhzIj%2FGswIhAKkFrNCliTV58Yv5Uxr1uuRE0k74JSWuv%2BprxDGGBJ2IKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz38qIf5giTnL6pugq3AMoRVHuELf4y0%2BwifWh9famjt%2BsaJ1AXldoX%2B%2FBDzN0Y3H94FA41c7Vu9hfipfWAVPXKnkOBxngY0wwPt6AMf%2FO09uV0hSFsqgH3bxheAR4WnNBc9ZRv7GIbDB6bq6yiC84y4szLqn%2BRaaMkwSpExfP8z0wx1UPXZeeEPL8kvrMXiZ1ftIMzMxtFW37Mjk4fZGJE2juww%2FEiFXz61sankhk4ABdJpxQOC%2F%2F6ciQKH10njj9rSWD%2FnLGsXxwFea7oIpPMUwDtbSlq7sdr%2BosrkYFLFA9zK5WCihUvZ5dFm2d%2FvDpg00g2QLNhCUUrNb9e6YfLJXV15W6eU9S02wadcZ6XNi6Cxsq4m8SUILqYosMUEHa4rd37Eui9CKZLU2CmRtJTVVxTCPiC6xXdqbnqbli%2BCb%2FjRLSiPQXx%2F7vw4vfijmCGIMoVH4swqo1O%2BOoRusZQQu3jXz2hLTEbJhZiYrA3HE582QEq0qsRgEQvyIZp2j6v4jnUIcmHR0fKRAuhmkXLVMtc7Rjwg7R%2FQKr6vJHKA7j4c5qma6RT87AXD8f8uQRdkMphUu5uIiaxBXGJeQfjLzcxxYjChe9K11aJKMhVbKeTFIcBPcBu3cfDQfy0ngwN40jyrblVI3wXjCK69LJBjqkAakV3owwIBCaxr2FDx%2F5TxS3DNrjpfzhcMfm%2FMZIfyyX96WWesHs5t2X5FXKBkNInZ4dCpbfCbGNpex7JhxQtx14BzzQOOt%2BNIl1Undc%2Be5A76Db62bFpj2ZixD%2Bz195feIye7YXIw0tFouBJvaKMfTVLybpTVNNQBv05903gMPgYwnDT9NtavIyG1m6VP%2FDKnU9FmpugZiBnvhZwnHLOFzAbxdw&X-Amz-Signature=4b977398d53ab1be9d26a040a598d0de760504d0bccbb51d87313119a2a599c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3PJLIUW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDll%2BUad75yoTZujsorQNSRj8WVzHtI%2F%2FXH8nhzIj%2FGswIhAKkFrNCliTV58Yv5Uxr1uuRE0k74JSWuv%2BprxDGGBJ2IKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz38qIf5giTnL6pugq3AMoRVHuELf4y0%2BwifWh9famjt%2BsaJ1AXldoX%2B%2FBDzN0Y3H94FA41c7Vu9hfipfWAVPXKnkOBxngY0wwPt6AMf%2FO09uV0hSFsqgH3bxheAR4WnNBc9ZRv7GIbDB6bq6yiC84y4szLqn%2BRaaMkwSpExfP8z0wx1UPXZeeEPL8kvrMXiZ1ftIMzMxtFW37Mjk4fZGJE2juww%2FEiFXz61sankhk4ABdJpxQOC%2F%2F6ciQKH10njj9rSWD%2FnLGsXxwFea7oIpPMUwDtbSlq7sdr%2BosrkYFLFA9zK5WCihUvZ5dFm2d%2FvDpg00g2QLNhCUUrNb9e6YfLJXV15W6eU9S02wadcZ6XNi6Cxsq4m8SUILqYosMUEHa4rd37Eui9CKZLU2CmRtJTVVxTCPiC6xXdqbnqbli%2BCb%2FjRLSiPQXx%2F7vw4vfijmCGIMoVH4swqo1O%2BOoRusZQQu3jXz2hLTEbJhZiYrA3HE582QEq0qsRgEQvyIZp2j6v4jnUIcmHR0fKRAuhmkXLVMtc7Rjwg7R%2FQKr6vJHKA7j4c5qma6RT87AXD8f8uQRdkMphUu5uIiaxBXGJeQfjLzcxxYjChe9K11aJKMhVbKeTFIcBPcBu3cfDQfy0ngwN40jyrblVI3wXjCK69LJBjqkAakV3owwIBCaxr2FDx%2F5TxS3DNrjpfzhcMfm%2FMZIfyyX96WWesHs5t2X5FXKBkNInZ4dCpbfCbGNpex7JhxQtx14BzzQOOt%2BNIl1Undc%2Be5A76Db62bFpj2ZixD%2Bz195feIye7YXIw0tFouBJvaKMfTVLybpTVNNQBv05903gMPgYwnDT9NtavIyG1m6VP%2FDKnU9FmpugZiBnvhZwnHLOFzAbxdw&X-Amz-Signature=56fbba1987bf31b2763c210203756e49c8aa693840863a9fa154fad7ffc52eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JDISIQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAg0bpFpYb5oqE%2FS%2BRi8tdp5%2FSAA9dty%2FDpkzH3Ex0zgAiAm%2Bo0jIiEcgjzI9dY%2FV%2FIFMH%2F9FNHeMyps3E3ftgYJuiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QC1poru5ww8XWjzKtwDkuPT6rfenQqXg1g6Igku8GIyALnTvWpJopOM0Ox3ztBR86SRlQ5US3m7O0Qk4c9WTJYr2ne8J2p4cPTZuBcr3C0XJ6MeNoJ4SwyClJ9HWeWom8tPb7VzLFCzxhAlv4gp6TLJtKTa5Vt1GqR%2F5CaPmsPJQajnrRO4DcYZsbdrLyUolo8I5IdQ%2FUnPdnxjeU3tqoP8FtmEJAJQ1Hq49r%2BxqQSrdyxi9GO3IAAXSYhLJ0UicNuYxgzIw6xcQOhYEsUbzEUcpzfbwmkExJXGOFjefm4B5qEM5Yo58QMG4kpyqyE46%2B%2FV%2Bic4K%2FvGpIiWoX0mjJuEFa4FsrmIJQVVUlIicZSD2NT%2FlkA59f8rY3ne1lQ99%2BQbfPSO2MAW3FAtVvYHMOXJtKK1P6iA7AEN3TMVXEmCH7oLMlZKYPjiEbY40VOCyW%2FTuSZ27aUNsLR3UyFX6735LeSC9jnVDESFLS4ZyywiTT5YeZD9GQeTuNwPZUbnBppD%2FsN0Fc8ynK352upAoq6tZjOBTOaqQRFZm%2BBzpIP6a8gvq9Xavwji1lThB93yMAG6%2BdmIeAoyxj0lZhUm51Qw8yMwRiGQaf%2BACnPlrlT4ieUVXKmu6wREjairO%2BEzImqMEkFjFycdI0IwwevSyQY6pgGTeeUXH2vyeI%2BCzMfSXndOzvt4ML2rGrU5wUFajdNhONdnh6mfAnggePUyOCNh9p7eJSqsj3dc3e0asZTi8HYD6heQ6TZWW1x4U1BOEEngU4G%2Fdx9IyLEEVFxUs75yBCtLIwCHbzgkZHqprpmtiKcweZKJbfN3REDhw0aNC5pBiBPvazj83eT0ru9hg2olszpF82%2BI71FIm5U4FaSGwcCpHVXClYBU&X-Amz-Signature=1eb7b5aaae47b2f0a380c0316ff3a4c6fd8beb6c6d0b63e4cf72ff716758ebf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

