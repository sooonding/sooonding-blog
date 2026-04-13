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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLUN3GX%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyHW93FklhMlMO%2B2XeGzmcp7pskEciWJfX2WBUbrFPAAiEAisGY8WgYKVmH%2FN4HKTxwKGfDfOMWTLoEXazvdXLP8JIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFKlOfxG1ffYrPcfFircA2M6VJEDIpJlcmvcQiSeVMHV%2FHXJ5KTtwIbpQtX46HchqfzFwx1Xo7T%2BBorMgfQC5AhzOJcYGrtXxacVMjW%2FCSvThuXP4Y3X4EPN5Byek1WurrDKTf0uT3Ci8qNcMdUT0nqI8HUIbiPGicvfQVLrEWnqCehYq3tfRQPbC1skHY8mY%2F9JP1UY1nvUdUeDSd60tXpbSYeXUZtyN17S00jCuaHIOLSVI6M%2FKh7HVlYvam8cX%2BuukmO8XZaZzyAfNEuXu0k03bnGv9aRAxCRAbOtn7S9wsIYh08auKjD2LdFApUd88qQpU1DUC5WKE8wMIoU8JowkCUuW0n5Q68bZF%2B19AV8fUAo255UWtmH5in8tKsPjbPYo3PfK7ctpY0p9Klg%2BSuhZ40zbt%2BwNgpb8nO4vKvVjvAZ7Er3yC5Ru9OPUTF0RgdhR1%2FHcVJdQVffW8oCpK%2BZFauRpUHwGXW0ZzswkPJ7%2BqOd5utkphoeRoo3P6TqSzSA18fFUHd1eFmC%2B9qKmlfQyZccCx3s5pn6yx20nbXHlxhSAD%2F6GkMWaE0BToPOutKIPbVGNoB0XwtPqU7JzcJZAl%2Bax0BsVDIiBopB7dKsa4MdDhrUhlsBNZcJ9PSsFcyVyE9yXEsf7dFSMMCX8c4GOqUBXx%2BEYRcirpRk2pu7GGNzyG1dhUi8POiRun4vNQItw8lGCitqjnD6LV1ASPlWntuFWbHpXxeq1taNZ6ffU6jKUivlEHCO7oL8q%2F2zKwdu%2FYrsvVkESTq2lsXMCjTEuHxB1ZpioC33TrHva%2Fqv4%2FoA%2BdmnUdwemdEg5YqUjYpep4ogFIu5zPK2w3veo5dRtHoP2oWlc7Fj8%2FkfVaV8eqA6CYpoSnXo&X-Amz-Signature=e54e33b7ca91e101a4a10ab9d1068796c634c2bf49bf90498a4c58a72e970218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6PFK2OH%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNK40I0Z20byecbZvRLqz7ZSowCXQgJPekvo5GpoCxfAiAof4wQHNe5tgt3%2FmhKaHYSbKGn%2FsRxvhA1%2Bp4QVR7Wlir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMo2EVkooY4VfEHac6KtwDQf4%2FVfmALjCd%2BnvCdKyT%2BIr%2Bp590PHtcIn5%2FUluyZlFLCK49ZUcUteScK6mboBNqJxphJq4FhmALs0H36h6w8KsxRDU3ZTQp9mtK7W1NPWltEb5XID0UOlWMyIbjFzMyp7kV%2FRpuwdO1LEAlqVLdeoSoEelaE9UTC%2Bugf%2FE2Ji8skobvn6ldXUY0enIQ0aLEsbgjNl3LZ80papswXXZKoGmFlAz47kap3fuubXUeudPs%2FFzmcMUQc0%2B3IuHY%2FK8aJJljd%2FXqvvWtTAvxmqIPRrASKM9wykhe04usdB1iGngERHivcfIDcEDYpXRwVnQyVO5%2B5%2F3kfqg%2FADm%2FMsGlaGbZFW1p%2BGAvxWUI%2FMImRy0QRTXePLCM7IGUFzebZo9DWcjMhEna3bLIJEp2Xs6eFeyFotaJVZ1xOrPD2GM3qrpYlE4w%2B5BvecUz8WBgO5CzLeTYmuRny0pU6bKaGJaaWlTJ%2Bf7z%2FBbDW%2B0WZ5YlNp6wsOGQi2No4iwIp%2BBSig%2B6KQ0TmbvOxC80zNkDi2Rz86eipoQi0moH%2FaoVsgU7x%2F0nBgW3nsr6d1PB6%2FtwwYWTsPxLaf6vV5VhwLtrYmILbu6nYp9xHSj%2FdBucuLq1%2BKkrRsNWKfcf9B3dUPQwzJfxzgY6pgFMzWyg%2BRzJbeBsGv6WFafw1ls591Y0iwTkiWLeZBeP8zQIUqAM5jCnKpQQ%2FJtkSRTxspIlHOvichRRMp1RbV4tZR5y6GGt23iXrpFz6LG2FGMEWQtC8k67MEgGj1E9pvXxXg5ky2xHnCxWKX1XRZ8OToxR5jSVTXfh4JfTUpbZfkvLjb32yaP5YS1%2BfErG5UVBwzkAm%2BajjKCocfSJt8kyTnaIw9zX&X-Amz-Signature=259bf78d0f3ae53c0a578547f3786538c01b69c002c5c9fe3d6b3f12660018a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6PFK2OH%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNK40I0Z20byecbZvRLqz7ZSowCXQgJPekvo5GpoCxfAiAof4wQHNe5tgt3%2FmhKaHYSbKGn%2FsRxvhA1%2Bp4QVR7Wlir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMo2EVkooY4VfEHac6KtwDQf4%2FVfmALjCd%2BnvCdKyT%2BIr%2Bp590PHtcIn5%2FUluyZlFLCK49ZUcUteScK6mboBNqJxphJq4FhmALs0H36h6w8KsxRDU3ZTQp9mtK7W1NPWltEb5XID0UOlWMyIbjFzMyp7kV%2FRpuwdO1LEAlqVLdeoSoEelaE9UTC%2Bugf%2FE2Ji8skobvn6ldXUY0enIQ0aLEsbgjNl3LZ80papswXXZKoGmFlAz47kap3fuubXUeudPs%2FFzmcMUQc0%2B3IuHY%2FK8aJJljd%2FXqvvWtTAvxmqIPRrASKM9wykhe04usdB1iGngERHivcfIDcEDYpXRwVnQyVO5%2B5%2F3kfqg%2FADm%2FMsGlaGbZFW1p%2BGAvxWUI%2FMImRy0QRTXePLCM7IGUFzebZo9DWcjMhEna3bLIJEp2Xs6eFeyFotaJVZ1xOrPD2GM3qrpYlE4w%2B5BvecUz8WBgO5CzLeTYmuRny0pU6bKaGJaaWlTJ%2Bf7z%2FBbDW%2B0WZ5YlNp6wsOGQi2No4iwIp%2BBSig%2B6KQ0TmbvOxC80zNkDi2Rz86eipoQi0moH%2FaoVsgU7x%2F0nBgW3nsr6d1PB6%2FtwwYWTsPxLaf6vV5VhwLtrYmILbu6nYp9xHSj%2FdBucuLq1%2BKkrRsNWKfcf9B3dUPQwzJfxzgY6pgFMzWyg%2BRzJbeBsGv6WFafw1ls591Y0iwTkiWLeZBeP8zQIUqAM5jCnKpQQ%2FJtkSRTxspIlHOvichRRMp1RbV4tZR5y6GGt23iXrpFz6LG2FGMEWQtC8k67MEgGj1E9pvXxXg5ky2xHnCxWKX1XRZ8OToxR5jSVTXfh4JfTUpbZfkvLjb32yaP5YS1%2BfErG5UVBwzkAm%2BajjKCocfSJt8kyTnaIw9zX&X-Amz-Signature=9838fd079e07bbf64d89c22bc035a1f357267f8fdd2a65d033b3a0871b2730e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6PFK2OH%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNK40I0Z20byecbZvRLqz7ZSowCXQgJPekvo5GpoCxfAiAof4wQHNe5tgt3%2FmhKaHYSbKGn%2FsRxvhA1%2Bp4QVR7Wlir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMo2EVkooY4VfEHac6KtwDQf4%2FVfmALjCd%2BnvCdKyT%2BIr%2Bp590PHtcIn5%2FUluyZlFLCK49ZUcUteScK6mboBNqJxphJq4FhmALs0H36h6w8KsxRDU3ZTQp9mtK7W1NPWltEb5XID0UOlWMyIbjFzMyp7kV%2FRpuwdO1LEAlqVLdeoSoEelaE9UTC%2Bugf%2FE2Ji8skobvn6ldXUY0enIQ0aLEsbgjNl3LZ80papswXXZKoGmFlAz47kap3fuubXUeudPs%2FFzmcMUQc0%2B3IuHY%2FK8aJJljd%2FXqvvWtTAvxmqIPRrASKM9wykhe04usdB1iGngERHivcfIDcEDYpXRwVnQyVO5%2B5%2F3kfqg%2FADm%2FMsGlaGbZFW1p%2BGAvxWUI%2FMImRy0QRTXePLCM7IGUFzebZo9DWcjMhEna3bLIJEp2Xs6eFeyFotaJVZ1xOrPD2GM3qrpYlE4w%2B5BvecUz8WBgO5CzLeTYmuRny0pU6bKaGJaaWlTJ%2Bf7z%2FBbDW%2B0WZ5YlNp6wsOGQi2No4iwIp%2BBSig%2B6KQ0TmbvOxC80zNkDi2Rz86eipoQi0moH%2FaoVsgU7x%2F0nBgW3nsr6d1PB6%2FtwwYWTsPxLaf6vV5VhwLtrYmILbu6nYp9xHSj%2FdBucuLq1%2BKkrRsNWKfcf9B3dUPQwzJfxzgY6pgFMzWyg%2BRzJbeBsGv6WFafw1ls591Y0iwTkiWLeZBeP8zQIUqAM5jCnKpQQ%2FJtkSRTxspIlHOvichRRMp1RbV4tZR5y6GGt23iXrpFz6LG2FGMEWQtC8k67MEgGj1E9pvXxXg5ky2xHnCxWKX1XRZ8OToxR5jSVTXfh4JfTUpbZfkvLjb32yaP5YS1%2BfErG5UVBwzkAm%2BajjKCocfSJt8kyTnaIw9zX&X-Amz-Signature=a5bfc46c78bbbed9e53e0a2feba2ce77f58f6e0c7e46e4c89bf5f05982d055e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6PFK2OH%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNK40I0Z20byecbZvRLqz7ZSowCXQgJPekvo5GpoCxfAiAof4wQHNe5tgt3%2FmhKaHYSbKGn%2FsRxvhA1%2Bp4QVR7Wlir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMo2EVkooY4VfEHac6KtwDQf4%2FVfmALjCd%2BnvCdKyT%2BIr%2Bp590PHtcIn5%2FUluyZlFLCK49ZUcUteScK6mboBNqJxphJq4FhmALs0H36h6w8KsxRDU3ZTQp9mtK7W1NPWltEb5XID0UOlWMyIbjFzMyp7kV%2FRpuwdO1LEAlqVLdeoSoEelaE9UTC%2Bugf%2FE2Ji8skobvn6ldXUY0enIQ0aLEsbgjNl3LZ80papswXXZKoGmFlAz47kap3fuubXUeudPs%2FFzmcMUQc0%2B3IuHY%2FK8aJJljd%2FXqvvWtTAvxmqIPRrASKM9wykhe04usdB1iGngERHivcfIDcEDYpXRwVnQyVO5%2B5%2F3kfqg%2FADm%2FMsGlaGbZFW1p%2BGAvxWUI%2FMImRy0QRTXePLCM7IGUFzebZo9DWcjMhEna3bLIJEp2Xs6eFeyFotaJVZ1xOrPD2GM3qrpYlE4w%2B5BvecUz8WBgO5CzLeTYmuRny0pU6bKaGJaaWlTJ%2Bf7z%2FBbDW%2B0WZ5YlNp6wsOGQi2No4iwIp%2BBSig%2B6KQ0TmbvOxC80zNkDi2Rz86eipoQi0moH%2FaoVsgU7x%2F0nBgW3nsr6d1PB6%2FtwwYWTsPxLaf6vV5VhwLtrYmILbu6nYp9xHSj%2FdBucuLq1%2BKkrRsNWKfcf9B3dUPQwzJfxzgY6pgFMzWyg%2BRzJbeBsGv6WFafw1ls591Y0iwTkiWLeZBeP8zQIUqAM5jCnKpQQ%2FJtkSRTxspIlHOvichRRMp1RbV4tZR5y6GGt23iXrpFz6LG2FGMEWQtC8k67MEgGj1E9pvXxXg5ky2xHnCxWKX1XRZ8OToxR5jSVTXfh4JfTUpbZfkvLjb32yaP5YS1%2BfErG5UVBwzkAm%2BajjKCocfSJt8kyTnaIw9zX&X-Amz-Signature=38386939700e4ddbae4fdf160a5078dd98a75e8c4c40588e937d71295553cdae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6PFK2OH%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNK40I0Z20byecbZvRLqz7ZSowCXQgJPekvo5GpoCxfAiAof4wQHNe5tgt3%2FmhKaHYSbKGn%2FsRxvhA1%2Bp4QVR7Wlir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMo2EVkooY4VfEHac6KtwDQf4%2FVfmALjCd%2BnvCdKyT%2BIr%2Bp590PHtcIn5%2FUluyZlFLCK49ZUcUteScK6mboBNqJxphJq4FhmALs0H36h6w8KsxRDU3ZTQp9mtK7W1NPWltEb5XID0UOlWMyIbjFzMyp7kV%2FRpuwdO1LEAlqVLdeoSoEelaE9UTC%2Bugf%2FE2Ji8skobvn6ldXUY0enIQ0aLEsbgjNl3LZ80papswXXZKoGmFlAz47kap3fuubXUeudPs%2FFzmcMUQc0%2B3IuHY%2FK8aJJljd%2FXqvvWtTAvxmqIPRrASKM9wykhe04usdB1iGngERHivcfIDcEDYpXRwVnQyVO5%2B5%2F3kfqg%2FADm%2FMsGlaGbZFW1p%2BGAvxWUI%2FMImRy0QRTXePLCM7IGUFzebZo9DWcjMhEna3bLIJEp2Xs6eFeyFotaJVZ1xOrPD2GM3qrpYlE4w%2B5BvecUz8WBgO5CzLeTYmuRny0pU6bKaGJaaWlTJ%2Bf7z%2FBbDW%2B0WZ5YlNp6wsOGQi2No4iwIp%2BBSig%2B6KQ0TmbvOxC80zNkDi2Rz86eipoQi0moH%2FaoVsgU7x%2F0nBgW3nsr6d1PB6%2FtwwYWTsPxLaf6vV5VhwLtrYmILbu6nYp9xHSj%2FdBucuLq1%2BKkrRsNWKfcf9B3dUPQwzJfxzgY6pgFMzWyg%2BRzJbeBsGv6WFafw1ls591Y0iwTkiWLeZBeP8zQIUqAM5jCnKpQQ%2FJtkSRTxspIlHOvichRRMp1RbV4tZR5y6GGt23iXrpFz6LG2FGMEWQtC8k67MEgGj1E9pvXxXg5ky2xHnCxWKX1XRZ8OToxR5jSVTXfh4JfTUpbZfkvLjb32yaP5YS1%2BfErG5UVBwzkAm%2BajjKCocfSJt8kyTnaIw9zX&X-Amz-Signature=6d4ed0a75ce0f7620be5995f3720b0062189bc3f06113ca63fac9dc3a4ad8965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLUN3GX%2F20260413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260413T024254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDyHW93FklhMlMO%2B2XeGzmcp7pskEciWJfX2WBUbrFPAAiEAisGY8WgYKVmH%2FN4HKTxwKGfDfOMWTLoEXazvdXLP8JIq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFKlOfxG1ffYrPcfFircA2M6VJEDIpJlcmvcQiSeVMHV%2FHXJ5KTtwIbpQtX46HchqfzFwx1Xo7T%2BBorMgfQC5AhzOJcYGrtXxacVMjW%2FCSvThuXP4Y3X4EPN5Byek1WurrDKTf0uT3Ci8qNcMdUT0nqI8HUIbiPGicvfQVLrEWnqCehYq3tfRQPbC1skHY8mY%2F9JP1UY1nvUdUeDSd60tXpbSYeXUZtyN17S00jCuaHIOLSVI6M%2FKh7HVlYvam8cX%2BuukmO8XZaZzyAfNEuXu0k03bnGv9aRAxCRAbOtn7S9wsIYh08auKjD2LdFApUd88qQpU1DUC5WKE8wMIoU8JowkCUuW0n5Q68bZF%2B19AV8fUAo255UWtmH5in8tKsPjbPYo3PfK7ctpY0p9Klg%2BSuhZ40zbt%2BwNgpb8nO4vKvVjvAZ7Er3yC5Ru9OPUTF0RgdhR1%2FHcVJdQVffW8oCpK%2BZFauRpUHwGXW0ZzswkPJ7%2BqOd5utkphoeRoo3P6TqSzSA18fFUHd1eFmC%2B9qKmlfQyZccCx3s5pn6yx20nbXHlxhSAD%2F6GkMWaE0BToPOutKIPbVGNoB0XwtPqU7JzcJZAl%2Bax0BsVDIiBopB7dKsa4MdDhrUhlsBNZcJ9PSsFcyVyE9yXEsf7dFSMMCX8c4GOqUBXx%2BEYRcirpRk2pu7GGNzyG1dhUi8POiRun4vNQItw8lGCitqjnD6LV1ASPlWntuFWbHpXxeq1taNZ6ffU6jKUivlEHCO7oL8q%2F2zKwdu%2FYrsvVkESTq2lsXMCjTEuHxB1ZpioC33TrHva%2Fqv4%2FoA%2BdmnUdwemdEg5YqUjYpep4ogFIu5zPK2w3veo5dRtHoP2oWlc7Fj8%2FkfVaV8eqA6CYpoSnXo&X-Amz-Signature=697480f6e8bdac81780a60b8a6a34ede1a87276cd5e7c5832a37ec8ad8080e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

