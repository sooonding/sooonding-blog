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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DB4PHFO%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDjGM6le9E8nhswuPvrRgWb29MCjy6KZM8LJe71jU0p7AIhAIxk0mllCnXZ%2BgRI3PUFi9SLBYVjDls79a77pcBh%2B1w4Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQZztc99uBdWAEps4q3APFZWOnz0Li7aS5G%2F3GvWTYmCt8ZDJC%2BaHeFWPB7HFbe8Tc4Rg398kG7MOZ67We3TjDcGAE7AGEw3D9pHB7W1BvwOuDeHprfD8rGBf%2FO61BzzPprHiRcrLwLiJXFihy97uL8%2BNVVUnfOuAfLwX9iIiOTHOOaG1XqKbbcUSW%2B1ricORQ%2FkZEosff0VcDeB3gOyMUmzZWMM6k3%2FJa6V9osXhFlolL33k7CgBkBewM4OU7t%2BEYDnxVWWZdKY%2B3ucjWhooBnMOqsaRr8maJqJYXJmWB%2BcYUx02yFUw3SgPEu0h6bNG%2FAEwzqa%2BzVOcWNmYKi1VTDB1PRu2VqBywSR5PdO35ZXo9qdibFwVdYJLmcq1k7UKgnfZ6G0BtqQpQHSJy1M1gtEOpTKuPEuosgFfaWGVTF3MBsGTTbaQ7Rkf8nVa%2FTrtmNSOwzP0G1HO%2FQpQkZLhJpdjqO%2FiK6J2pJoFsOWoUsMycD9d3Oa%2BdynMeV3i1qWiuMjIBP5zy7lsxuhX4lP91RwNt7iMF7ZAAYx250%2FCQtZTBs9pIJ7QzPPw56s52LggHCrxFISf%2F19u4KaW3kCi8AL%2FNK9iI4yKxYDnSEamgJwYQ36S%2Fw0OCLXy5FxDz5oxp3FwQM6HGQY4GETC5q4nUBjqkAeLZwhvL81r%2F3LQKhrh5dXTJkLLP0hY2xM9Se3UhjKy2lMDUu1QgbuBL7KA70qlwMPwduT4vfPEHocQ8P0rUUYNYeiNFjvnUcHjHvdEeiAxXdn8VpbiSXzcRQDREY9zno8fm4H6oFAG7efW3GoMAyj%2FUk%2Fbu90b12yHzMybWVr52rN65QLRMzHMEDjNivxaLLerr5bdxHG1DaRfrw41Xt8zq9x9L&X-Amz-Signature=902f3aad102fdac200d68c86c3166c6b867dbe62092917933ac0f18bfc9a0350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UFR43O%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIArKLhgpxW9nlo4AqC2OGDmO8Eh6mPxuWZM7%2FytDDgQCAiA8Hf7Qg5Z7r9DgL1NthwNRJoiIbC6gYj9t0%2BJA4h7N8yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMW8Md4wCGdovLTZbzKtwDJTdqRE3CyFWrTpizwQntdPumTpmbxYctXnHLVWR8tIWEKhuKOusprGF7nXiJ8g4UFtXB4o%2FuK8St6iCpFf%2BS4%2BJYJgHwH6c4CTAsXqEH5Wfw0Z5%2BeAu65yLINw%2FWMhSvY8z5Ap%2BzlUlhlrOw0jIopDuVCJPdkFN5s%2BSIR9IC1Uq4WcZmAwDpoIEihCl%2BK4DkkM0KAY7dqBtkT2eZDonVbWM1urmRqKahLsguUPJQ0tcMEse3L2xisKoQDyyisYrZMzv%2B4HQ33aGlzlw2rTNQh8EgfWeJCe3LrKBs9XptVwZEufU9eYjsGlzukxnuzw8peF4EytSjDSKyosUxCwmPk5n%2BM6EOwywSo4PUiuCo%2BuGn7vssmqLprYWcg3gvER51OrBFTi9yK%2FkqrXi0RTLsKOXN9gmdtFQV1IqG48jWR6bvJrq4URO3dCJfKH0sh%2Bu60az022qAu4%2Flx2g%2FX0g98Yms6CudJ9XVenJMJNXBNy6Y%2FTntgTPrNEcfcJX%2Fs7PoygyyTPtVtGvSIXzWU2hJbhNhRabAEicgP4Bh3XwlWPZavTxLRoGCuu0nVMUJ4iTfTvoCHi%2F%2FCKvElPauNAp0CN9AcUpXlVhuo6EjFDWxeE%2BcpBkRzpgeFwyHjbow0auJ1AY6pgGhbzdPpidT618D6kUE8K%2BzNIlcEAY1sxyg%2FpHbfiFPERZ%2FQZt7EzrA6bA8v8yvwmnjc28fbH0WuKZ29jO1fZvMFyiM2tXW2S4skv%2FoziL3KxdsmXatNH57YCe4uLYdkaAPnynVU82JRv48Eb%2FINYyQXc5z1hs5qH0ImSiGCq5AErMrNKx4pI4AryXF5vqrWZuvJqzKMPoavIDzHiCSGe7AbAS%2F8Qec&X-Amz-Signature=49491dbda7449e976c9545cf6fb4ecd8cb5fbe583e87f3edead35a4d13de3207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UFR43O%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIArKLhgpxW9nlo4AqC2OGDmO8Eh6mPxuWZM7%2FytDDgQCAiA8Hf7Qg5Z7r9DgL1NthwNRJoiIbC6gYj9t0%2BJA4h7N8yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMW8Md4wCGdovLTZbzKtwDJTdqRE3CyFWrTpizwQntdPumTpmbxYctXnHLVWR8tIWEKhuKOusprGF7nXiJ8g4UFtXB4o%2FuK8St6iCpFf%2BS4%2BJYJgHwH6c4CTAsXqEH5Wfw0Z5%2BeAu65yLINw%2FWMhSvY8z5Ap%2BzlUlhlrOw0jIopDuVCJPdkFN5s%2BSIR9IC1Uq4WcZmAwDpoIEihCl%2BK4DkkM0KAY7dqBtkT2eZDonVbWM1urmRqKahLsguUPJQ0tcMEse3L2xisKoQDyyisYrZMzv%2B4HQ33aGlzlw2rTNQh8EgfWeJCe3LrKBs9XptVwZEufU9eYjsGlzukxnuzw8peF4EytSjDSKyosUxCwmPk5n%2BM6EOwywSo4PUiuCo%2BuGn7vssmqLprYWcg3gvER51OrBFTi9yK%2FkqrXi0RTLsKOXN9gmdtFQV1IqG48jWR6bvJrq4URO3dCJfKH0sh%2Bu60az022qAu4%2Flx2g%2FX0g98Yms6CudJ9XVenJMJNXBNy6Y%2FTntgTPrNEcfcJX%2Fs7PoygyyTPtVtGvSIXzWU2hJbhNhRabAEicgP4Bh3XwlWPZavTxLRoGCuu0nVMUJ4iTfTvoCHi%2F%2FCKvElPauNAp0CN9AcUpXlVhuo6EjFDWxeE%2BcpBkRzpgeFwyHjbow0auJ1AY6pgGhbzdPpidT618D6kUE8K%2BzNIlcEAY1sxyg%2FpHbfiFPERZ%2FQZt7EzrA6bA8v8yvwmnjc28fbH0WuKZ29jO1fZvMFyiM2tXW2S4skv%2FoziL3KxdsmXatNH57YCe4uLYdkaAPnynVU82JRv48Eb%2FINYyQXc5z1hs5qH0ImSiGCq5AErMrNKx4pI4AryXF5vqrWZuvJqzKMPoavIDzHiCSGe7AbAS%2F8Qec&X-Amz-Signature=cb154a982b800ef52cb39955a978cdc1cca55807d0029284d05cbc797e2bd68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UFR43O%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIArKLhgpxW9nlo4AqC2OGDmO8Eh6mPxuWZM7%2FytDDgQCAiA8Hf7Qg5Z7r9DgL1NthwNRJoiIbC6gYj9t0%2BJA4h7N8yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMW8Md4wCGdovLTZbzKtwDJTdqRE3CyFWrTpizwQntdPumTpmbxYctXnHLVWR8tIWEKhuKOusprGF7nXiJ8g4UFtXB4o%2FuK8St6iCpFf%2BS4%2BJYJgHwH6c4CTAsXqEH5Wfw0Z5%2BeAu65yLINw%2FWMhSvY8z5Ap%2BzlUlhlrOw0jIopDuVCJPdkFN5s%2BSIR9IC1Uq4WcZmAwDpoIEihCl%2BK4DkkM0KAY7dqBtkT2eZDonVbWM1urmRqKahLsguUPJQ0tcMEse3L2xisKoQDyyisYrZMzv%2B4HQ33aGlzlw2rTNQh8EgfWeJCe3LrKBs9XptVwZEufU9eYjsGlzukxnuzw8peF4EytSjDSKyosUxCwmPk5n%2BM6EOwywSo4PUiuCo%2BuGn7vssmqLprYWcg3gvER51OrBFTi9yK%2FkqrXi0RTLsKOXN9gmdtFQV1IqG48jWR6bvJrq4URO3dCJfKH0sh%2Bu60az022qAu4%2Flx2g%2FX0g98Yms6CudJ9XVenJMJNXBNy6Y%2FTntgTPrNEcfcJX%2Fs7PoygyyTPtVtGvSIXzWU2hJbhNhRabAEicgP4Bh3XwlWPZavTxLRoGCuu0nVMUJ4iTfTvoCHi%2F%2FCKvElPauNAp0CN9AcUpXlVhuo6EjFDWxeE%2BcpBkRzpgeFwyHjbow0auJ1AY6pgGhbzdPpidT618D6kUE8K%2BzNIlcEAY1sxyg%2FpHbfiFPERZ%2FQZt7EzrA6bA8v8yvwmnjc28fbH0WuKZ29jO1fZvMFyiM2tXW2S4skv%2FoziL3KxdsmXatNH57YCe4uLYdkaAPnynVU82JRv48Eb%2FINYyQXc5z1hs5qH0ImSiGCq5AErMrNKx4pI4AryXF5vqrWZuvJqzKMPoavIDzHiCSGe7AbAS%2F8Qec&X-Amz-Signature=d9fa77310bd951db5b07748f9cdaf860b0c531350cd589ea382ebcc1ed2e9f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UFR43O%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIArKLhgpxW9nlo4AqC2OGDmO8Eh6mPxuWZM7%2FytDDgQCAiA8Hf7Qg5Z7r9DgL1NthwNRJoiIbC6gYj9t0%2BJA4h7N8yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMW8Md4wCGdovLTZbzKtwDJTdqRE3CyFWrTpizwQntdPumTpmbxYctXnHLVWR8tIWEKhuKOusprGF7nXiJ8g4UFtXB4o%2FuK8St6iCpFf%2BS4%2BJYJgHwH6c4CTAsXqEH5Wfw0Z5%2BeAu65yLINw%2FWMhSvY8z5Ap%2BzlUlhlrOw0jIopDuVCJPdkFN5s%2BSIR9IC1Uq4WcZmAwDpoIEihCl%2BK4DkkM0KAY7dqBtkT2eZDonVbWM1urmRqKahLsguUPJQ0tcMEse3L2xisKoQDyyisYrZMzv%2B4HQ33aGlzlw2rTNQh8EgfWeJCe3LrKBs9XptVwZEufU9eYjsGlzukxnuzw8peF4EytSjDSKyosUxCwmPk5n%2BM6EOwywSo4PUiuCo%2BuGn7vssmqLprYWcg3gvER51OrBFTi9yK%2FkqrXi0RTLsKOXN9gmdtFQV1IqG48jWR6bvJrq4URO3dCJfKH0sh%2Bu60az022qAu4%2Flx2g%2FX0g98Yms6CudJ9XVenJMJNXBNy6Y%2FTntgTPrNEcfcJX%2Fs7PoygyyTPtVtGvSIXzWU2hJbhNhRabAEicgP4Bh3XwlWPZavTxLRoGCuu0nVMUJ4iTfTvoCHi%2F%2FCKvElPauNAp0CN9AcUpXlVhuo6EjFDWxeE%2BcpBkRzpgeFwyHjbow0auJ1AY6pgGhbzdPpidT618D6kUE8K%2BzNIlcEAY1sxyg%2FpHbfiFPERZ%2FQZt7EzrA6bA8v8yvwmnjc28fbH0WuKZ29jO1fZvMFyiM2tXW2S4skv%2FoziL3KxdsmXatNH57YCe4uLYdkaAPnynVU82JRv48Eb%2FINYyQXc5z1hs5qH0ImSiGCq5AErMrNKx4pI4AryXF5vqrWZuvJqzKMPoavIDzHiCSGe7AbAS%2F8Qec&X-Amz-Signature=3ca0c11a342971182cedb7802384def4e0d37629e1f724ceaa58ff29503eb7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UFR43O%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIArKLhgpxW9nlo4AqC2OGDmO8Eh6mPxuWZM7%2FytDDgQCAiA8Hf7Qg5Z7r9DgL1NthwNRJoiIbC6gYj9t0%2BJA4h7N8yr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMW8Md4wCGdovLTZbzKtwDJTdqRE3CyFWrTpizwQntdPumTpmbxYctXnHLVWR8tIWEKhuKOusprGF7nXiJ8g4UFtXB4o%2FuK8St6iCpFf%2BS4%2BJYJgHwH6c4CTAsXqEH5Wfw0Z5%2BeAu65yLINw%2FWMhSvY8z5Ap%2BzlUlhlrOw0jIopDuVCJPdkFN5s%2BSIR9IC1Uq4WcZmAwDpoIEihCl%2BK4DkkM0KAY7dqBtkT2eZDonVbWM1urmRqKahLsguUPJQ0tcMEse3L2xisKoQDyyisYrZMzv%2B4HQ33aGlzlw2rTNQh8EgfWeJCe3LrKBs9XptVwZEufU9eYjsGlzukxnuzw8peF4EytSjDSKyosUxCwmPk5n%2BM6EOwywSo4PUiuCo%2BuGn7vssmqLprYWcg3gvER51OrBFTi9yK%2FkqrXi0RTLsKOXN9gmdtFQV1IqG48jWR6bvJrq4URO3dCJfKH0sh%2Bu60az022qAu4%2Flx2g%2FX0g98Yms6CudJ9XVenJMJNXBNy6Y%2FTntgTPrNEcfcJX%2Fs7PoygyyTPtVtGvSIXzWU2hJbhNhRabAEicgP4Bh3XwlWPZavTxLRoGCuu0nVMUJ4iTfTvoCHi%2F%2FCKvElPauNAp0CN9AcUpXlVhuo6EjFDWxeE%2BcpBkRzpgeFwyHjbow0auJ1AY6pgGhbzdPpidT618D6kUE8K%2BzNIlcEAY1sxyg%2FpHbfiFPERZ%2FQZt7EzrA6bA8v8yvwmnjc28fbH0WuKZ29jO1fZvMFyiM2tXW2S4skv%2FoziL3KxdsmXatNH57YCe4uLYdkaAPnynVU82JRv48Eb%2FINYyQXc5z1hs5qH0ImSiGCq5AErMrNKx4pI4AryXF5vqrWZuvJqzKMPoavIDzHiCSGe7AbAS%2F8Qec&X-Amz-Signature=54f37644da53c93c9fac8e4435788bd233aec14ba148cbe81db7e1d7a17ec6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DB4PHFO%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDjGM6le9E8nhswuPvrRgWb29MCjy6KZM8LJe71jU0p7AIhAIxk0mllCnXZ%2BgRI3PUFi9SLBYVjDls79a77pcBh%2B1w4Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQZztc99uBdWAEps4q3APFZWOnz0Li7aS5G%2F3GvWTYmCt8ZDJC%2BaHeFWPB7HFbe8Tc4Rg398kG7MOZ67We3TjDcGAE7AGEw3D9pHB7W1BvwOuDeHprfD8rGBf%2FO61BzzPprHiRcrLwLiJXFihy97uL8%2BNVVUnfOuAfLwX9iIiOTHOOaG1XqKbbcUSW%2B1ricORQ%2FkZEosff0VcDeB3gOyMUmzZWMM6k3%2FJa6V9osXhFlolL33k7CgBkBewM4OU7t%2BEYDnxVWWZdKY%2B3ucjWhooBnMOqsaRr8maJqJYXJmWB%2BcYUx02yFUw3SgPEu0h6bNG%2FAEwzqa%2BzVOcWNmYKi1VTDB1PRu2VqBywSR5PdO35ZXo9qdibFwVdYJLmcq1k7UKgnfZ6G0BtqQpQHSJy1M1gtEOpTKuPEuosgFfaWGVTF3MBsGTTbaQ7Rkf8nVa%2FTrtmNSOwzP0G1HO%2FQpQkZLhJpdjqO%2FiK6J2pJoFsOWoUsMycD9d3Oa%2BdynMeV3i1qWiuMjIBP5zy7lsxuhX4lP91RwNt7iMF7ZAAYx250%2FCQtZTBs9pIJ7QzPPw56s52LggHCrxFISf%2F19u4KaW3kCi8AL%2FNK9iI4yKxYDnSEamgJwYQ36S%2Fw0OCLXy5FxDz5oxp3FwQM6HGQY4GETC5q4nUBjqkAeLZwhvL81r%2F3LQKhrh5dXTJkLLP0hY2xM9Se3UhjKy2lMDUu1QgbuBL7KA70qlwMPwduT4vfPEHocQ8P0rUUYNYeiNFjvnUcHjHvdEeiAxXdn8VpbiSXzcRQDREY9zno8fm4H6oFAG7efW3GoMAyj%2FUk%2Fbu90b12yHzMybWVr52rN65QLRMzHMEDjNivxaLLerr5bdxHG1DaRfrw41Xt8zq9x9L&X-Amz-Signature=73da8ba05c3df3b5ccbaacecb640e40c3475ea6a07c948458b68395d98ce45f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

