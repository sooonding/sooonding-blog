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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2GYDM5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCqWH82SNZpYo87rTAlXf9nfUji7dRE%2Fw5JoDvSxY42bwIgfgsZGf7kYSe6i9OjkvqJgYZe2E3NINwjyaD%2BPeZqjFoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXGSe3Hg7r2qoJLpyrcA2ed0CyYbgW5e79qoNJtEnzVt%2Fcu1ojQl3izHvPRFb2czZWBXOR3CLN25w5gkFnM1o7F2jPAEdmmq1CfndcOhBR3cy%2BhpLocUEop2coFTeU65r%2B0SKZ1svRq4Rn0kaIdyFo2tUzDyT%2FgrLhJp7JnO1ryz600s%2FMuJIx7HCwKIv7vdRSt%2Fsg%2B%2B654ay1N33607ysJGpOn5C3R5DIAscpYtdO%2F5qk2TfHTlPAtFfwOTAdF5c9TdX%2BJIqyQJYsLRhsRQv8b%2F8IZMe3uFMoR4%2B4%2BgUgsUXKgTtasQXYcKyamW4Ah0gVZmm1NeDrs3r1MWR8GhWn0PX%2BQS6FvPClhqOqSqWWjYy4vT5V2RIy173w%2F5YiT5V0JSXiWkaZo5La6Zzyu70fRog1XIbVEsHZzmEt82P0wuASog5tW%2Bgfl30Za8g%2BlggK2BBtY76oYzL6KuLucZWrZmC%2FSvYtUclUdybOpBfUOLBqJ%2Fz9KmrAOAj2nfE6FgFTm9gCFRU98BtQyKcFwBZ8g1fyQLN2CdECIc13Q06Zlbj92WjxO6oDQyXlOYutWFRTLlf9fmhDGCZUyTx05j0cJffFzlt8iGIbc76uVJTAzjzeSMFosPWLwv%2BECDcGV8c3l9KpC86ni%2FHTXMLPC4tEGOqUBdG7I2ao%2B1em9BLmw%2FD192Nkz1Oclx5TCMboxeoeE9GgP%2FjE9WQ1LV5dXiF5I%2Fr52vzMe8T9oxoqKzMsziPHrSS%2BR6hqrZqeMpqu0x8%2FlX%2F4lXdfASJnhTznZLMcQQtmKBNZbaZBz5iyvKH%2FrPZEsNxUc1w9dbYBsraCUvRW9pZm6%2FEfJMYL0bTRF%2FG06CGOeMVbkNcFPCTf8bCp0OS1Uy3Rcscgj&X-Amz-Signature=51ae4165a066f0aea7bb7f085602c917823f8fa6aa60e03223fd036836b0eafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CPJHAG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHq%2Fp3Z0i00lP%2B7r4zCF0ZI2TfjXHlRxpRGDTmhSV4RDAiAXMwc0RR01KQ9d2lOoNZ5a%2FLKgL5tLkAPdcA%2BYBal0ByqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsydR%2B6RCsGbhbm2RKtwDYI9JHSw%2BNgEoOBADqdeKE3%2FkYq859kF%2FVNv%2F%2FSu0rjHhUeS8Px%2BWLcg7RAJ%2B4v5pn2onBk4nXUMR8vcSRj6WPZhYbnCtOAqLWVs%2FAK1dZW8zqCJLMT5vf4FcVCPymetF0z81lp%2BF1mVu%2BVjfeXhnULNHX6viEg6h8au7fXRP8O%2BenJHbNSxWOlpXFslSYh67iPXMmIl407LZS9BmhhWIVjt0NZAWARWfeqLfvICJpd8MWOzmgpYhmAqctst%2BxJX38uLSawyEPca7%2F06KRQRoz7auEPN%2F%2FVidGUJj%2BojwXl0OORl%2F78fVqar3mhZKcmHJgp%2FX%2FpXWMg%2FID6DHWaPbf9VdWPmUFl%2BLamhMplrCeqZHc2z4pgG78831tQLUKoMfESejt76Fe%2BVOmpAYb6rT29xFdQmULHXwdtA1yl4E6OxucyNtGo5NHsxGtRJRX8oSd2SH8wKujB%2BMFKPBnlMtDFvayrW3WkqEfad%2B8mSZCVBr412IVl%2BTAoasYPk2CBGfrfcvgVZeyXCSHyjZReMgtM%2F7DI6mVRXR5Zrym0QDWpjomOTIH0Jw6HrgZY9bvttYfHJi00oZzN38dEfsH7P%2B66WqSDMXQATBwG8Q7FoWuqbp4V%2F%2BMZcOBHaLy7Aw4uni0QY6pgF7aNBg6rY3p2uaxWfnIjlB%2BhYVVGvMB%2BIgxCGgzVy29ckjsNT6uvxaB8NcBCm5HGIwRpHl8KtbAQMdIaxMeu5u5HAs2Ss%2FVtCUuXx7UUddur7zmp2Z1OqeoLCI%2BsNTpp%2FRXlezraL5MqyEJBhgn7FrBhqSceZfqIPEw%2FrgYCAlcfZwXBg8txBEq5FgnHbFoISvFJzaWIGZWBYkorHmxxeRytXtCBM3&X-Amz-Signature=641e3aeaa0092e787e15de09ed3e4582af3b7ecd8265e8bdacb439359f942ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CPJHAG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHq%2Fp3Z0i00lP%2B7r4zCF0ZI2TfjXHlRxpRGDTmhSV4RDAiAXMwc0RR01KQ9d2lOoNZ5a%2FLKgL5tLkAPdcA%2BYBal0ByqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsydR%2B6RCsGbhbm2RKtwDYI9JHSw%2BNgEoOBADqdeKE3%2FkYq859kF%2FVNv%2F%2FSu0rjHhUeS8Px%2BWLcg7RAJ%2B4v5pn2onBk4nXUMR8vcSRj6WPZhYbnCtOAqLWVs%2FAK1dZW8zqCJLMT5vf4FcVCPymetF0z81lp%2BF1mVu%2BVjfeXhnULNHX6viEg6h8au7fXRP8O%2BenJHbNSxWOlpXFslSYh67iPXMmIl407LZS9BmhhWIVjt0NZAWARWfeqLfvICJpd8MWOzmgpYhmAqctst%2BxJX38uLSawyEPca7%2F06KRQRoz7auEPN%2F%2FVidGUJj%2BojwXl0OORl%2F78fVqar3mhZKcmHJgp%2FX%2FpXWMg%2FID6DHWaPbf9VdWPmUFl%2BLamhMplrCeqZHc2z4pgG78831tQLUKoMfESejt76Fe%2BVOmpAYb6rT29xFdQmULHXwdtA1yl4E6OxucyNtGo5NHsxGtRJRX8oSd2SH8wKujB%2BMFKPBnlMtDFvayrW3WkqEfad%2B8mSZCVBr412IVl%2BTAoasYPk2CBGfrfcvgVZeyXCSHyjZReMgtM%2F7DI6mVRXR5Zrym0QDWpjomOTIH0Jw6HrgZY9bvttYfHJi00oZzN38dEfsH7P%2B66WqSDMXQATBwG8Q7FoWuqbp4V%2F%2BMZcOBHaLy7Aw4uni0QY6pgF7aNBg6rY3p2uaxWfnIjlB%2BhYVVGvMB%2BIgxCGgzVy29ckjsNT6uvxaB8NcBCm5HGIwRpHl8KtbAQMdIaxMeu5u5HAs2Ss%2FVtCUuXx7UUddur7zmp2Z1OqeoLCI%2BsNTpp%2FRXlezraL5MqyEJBhgn7FrBhqSceZfqIPEw%2FrgYCAlcfZwXBg8txBEq5FgnHbFoISvFJzaWIGZWBYkorHmxxeRytXtCBM3&X-Amz-Signature=d443de8bedeb52d2e57f68d10f1d40e2c9ca8193c7c4050849c51ee533f3993c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CPJHAG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHq%2Fp3Z0i00lP%2B7r4zCF0ZI2TfjXHlRxpRGDTmhSV4RDAiAXMwc0RR01KQ9d2lOoNZ5a%2FLKgL5tLkAPdcA%2BYBal0ByqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsydR%2B6RCsGbhbm2RKtwDYI9JHSw%2BNgEoOBADqdeKE3%2FkYq859kF%2FVNv%2F%2FSu0rjHhUeS8Px%2BWLcg7RAJ%2B4v5pn2onBk4nXUMR8vcSRj6WPZhYbnCtOAqLWVs%2FAK1dZW8zqCJLMT5vf4FcVCPymetF0z81lp%2BF1mVu%2BVjfeXhnULNHX6viEg6h8au7fXRP8O%2BenJHbNSxWOlpXFslSYh67iPXMmIl407LZS9BmhhWIVjt0NZAWARWfeqLfvICJpd8MWOzmgpYhmAqctst%2BxJX38uLSawyEPca7%2F06KRQRoz7auEPN%2F%2FVidGUJj%2BojwXl0OORl%2F78fVqar3mhZKcmHJgp%2FX%2FpXWMg%2FID6DHWaPbf9VdWPmUFl%2BLamhMplrCeqZHc2z4pgG78831tQLUKoMfESejt76Fe%2BVOmpAYb6rT29xFdQmULHXwdtA1yl4E6OxucyNtGo5NHsxGtRJRX8oSd2SH8wKujB%2BMFKPBnlMtDFvayrW3WkqEfad%2B8mSZCVBr412IVl%2BTAoasYPk2CBGfrfcvgVZeyXCSHyjZReMgtM%2F7DI6mVRXR5Zrym0QDWpjomOTIH0Jw6HrgZY9bvttYfHJi00oZzN38dEfsH7P%2B66WqSDMXQATBwG8Q7FoWuqbp4V%2F%2BMZcOBHaLy7Aw4uni0QY6pgF7aNBg6rY3p2uaxWfnIjlB%2BhYVVGvMB%2BIgxCGgzVy29ckjsNT6uvxaB8NcBCm5HGIwRpHl8KtbAQMdIaxMeu5u5HAs2Ss%2FVtCUuXx7UUddur7zmp2Z1OqeoLCI%2BsNTpp%2FRXlezraL5MqyEJBhgn7FrBhqSceZfqIPEw%2FrgYCAlcfZwXBg8txBEq5FgnHbFoISvFJzaWIGZWBYkorHmxxeRytXtCBM3&X-Amz-Signature=4555c06ec3741685dfe5c99d6abe862f23f05e7bdd7dadaa7325de1a85f18091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CPJHAG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHq%2Fp3Z0i00lP%2B7r4zCF0ZI2TfjXHlRxpRGDTmhSV4RDAiAXMwc0RR01KQ9d2lOoNZ5a%2FLKgL5tLkAPdcA%2BYBal0ByqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsydR%2B6RCsGbhbm2RKtwDYI9JHSw%2BNgEoOBADqdeKE3%2FkYq859kF%2FVNv%2F%2FSu0rjHhUeS8Px%2BWLcg7RAJ%2B4v5pn2onBk4nXUMR8vcSRj6WPZhYbnCtOAqLWVs%2FAK1dZW8zqCJLMT5vf4FcVCPymetF0z81lp%2BF1mVu%2BVjfeXhnULNHX6viEg6h8au7fXRP8O%2BenJHbNSxWOlpXFslSYh67iPXMmIl407LZS9BmhhWIVjt0NZAWARWfeqLfvICJpd8MWOzmgpYhmAqctst%2BxJX38uLSawyEPca7%2F06KRQRoz7auEPN%2F%2FVidGUJj%2BojwXl0OORl%2F78fVqar3mhZKcmHJgp%2FX%2FpXWMg%2FID6DHWaPbf9VdWPmUFl%2BLamhMplrCeqZHc2z4pgG78831tQLUKoMfESejt76Fe%2BVOmpAYb6rT29xFdQmULHXwdtA1yl4E6OxucyNtGo5NHsxGtRJRX8oSd2SH8wKujB%2BMFKPBnlMtDFvayrW3WkqEfad%2B8mSZCVBr412IVl%2BTAoasYPk2CBGfrfcvgVZeyXCSHyjZReMgtM%2F7DI6mVRXR5Zrym0QDWpjomOTIH0Jw6HrgZY9bvttYfHJi00oZzN38dEfsH7P%2B66WqSDMXQATBwG8Q7FoWuqbp4V%2F%2BMZcOBHaLy7Aw4uni0QY6pgF7aNBg6rY3p2uaxWfnIjlB%2BhYVVGvMB%2BIgxCGgzVy29ckjsNT6uvxaB8NcBCm5HGIwRpHl8KtbAQMdIaxMeu5u5HAs2Ss%2FVtCUuXx7UUddur7zmp2Z1OqeoLCI%2BsNTpp%2FRXlezraL5MqyEJBhgn7FrBhqSceZfqIPEw%2FrgYCAlcfZwXBg8txBEq5FgnHbFoISvFJzaWIGZWBYkorHmxxeRytXtCBM3&X-Amz-Signature=8cdf813190792ce59188b7a193952ec091c5892f0dfbe3a2e5456d330caf9f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CPJHAG%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHq%2Fp3Z0i00lP%2B7r4zCF0ZI2TfjXHlRxpRGDTmhSV4RDAiAXMwc0RR01KQ9d2lOoNZ5a%2FLKgL5tLkAPdcA%2BYBal0ByqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsydR%2B6RCsGbhbm2RKtwDYI9JHSw%2BNgEoOBADqdeKE3%2FkYq859kF%2FVNv%2F%2FSu0rjHhUeS8Px%2BWLcg7RAJ%2B4v5pn2onBk4nXUMR8vcSRj6WPZhYbnCtOAqLWVs%2FAK1dZW8zqCJLMT5vf4FcVCPymetF0z81lp%2BF1mVu%2BVjfeXhnULNHX6viEg6h8au7fXRP8O%2BenJHbNSxWOlpXFslSYh67iPXMmIl407LZS9BmhhWIVjt0NZAWARWfeqLfvICJpd8MWOzmgpYhmAqctst%2BxJX38uLSawyEPca7%2F06KRQRoz7auEPN%2F%2FVidGUJj%2BojwXl0OORl%2F78fVqar3mhZKcmHJgp%2FX%2FpXWMg%2FID6DHWaPbf9VdWPmUFl%2BLamhMplrCeqZHc2z4pgG78831tQLUKoMfESejt76Fe%2BVOmpAYb6rT29xFdQmULHXwdtA1yl4E6OxucyNtGo5NHsxGtRJRX8oSd2SH8wKujB%2BMFKPBnlMtDFvayrW3WkqEfad%2B8mSZCVBr412IVl%2BTAoasYPk2CBGfrfcvgVZeyXCSHyjZReMgtM%2F7DI6mVRXR5Zrym0QDWpjomOTIH0Jw6HrgZY9bvttYfHJi00oZzN38dEfsH7P%2B66WqSDMXQATBwG8Q7FoWuqbp4V%2F%2BMZcOBHaLy7Aw4uni0QY6pgF7aNBg6rY3p2uaxWfnIjlB%2BhYVVGvMB%2BIgxCGgzVy29ckjsNT6uvxaB8NcBCm5HGIwRpHl8KtbAQMdIaxMeu5u5HAs2Ss%2FVtCUuXx7UUddur7zmp2Z1OqeoLCI%2BsNTpp%2FRXlezraL5MqyEJBhgn7FrBhqSceZfqIPEw%2FrgYCAlcfZwXBg8txBEq5FgnHbFoISvFJzaWIGZWBYkorHmxxeRytXtCBM3&X-Amz-Signature=4bb51261f532d541098268af7fcfd4b469adafd9cb5ed593319959cdf0893345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2GYDM5%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCqWH82SNZpYo87rTAlXf9nfUji7dRE%2Fw5JoDvSxY42bwIgfgsZGf7kYSe6i9OjkvqJgYZe2E3NINwjyaD%2BPeZqjFoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXGSe3Hg7r2qoJLpyrcA2ed0CyYbgW5e79qoNJtEnzVt%2Fcu1ojQl3izHvPRFb2czZWBXOR3CLN25w5gkFnM1o7F2jPAEdmmq1CfndcOhBR3cy%2BhpLocUEop2coFTeU65r%2B0SKZ1svRq4Rn0kaIdyFo2tUzDyT%2FgrLhJp7JnO1ryz600s%2FMuJIx7HCwKIv7vdRSt%2Fsg%2B%2B654ay1N33607ysJGpOn5C3R5DIAscpYtdO%2F5qk2TfHTlPAtFfwOTAdF5c9TdX%2BJIqyQJYsLRhsRQv8b%2F8IZMe3uFMoR4%2B4%2BgUgsUXKgTtasQXYcKyamW4Ah0gVZmm1NeDrs3r1MWR8GhWn0PX%2BQS6FvPClhqOqSqWWjYy4vT5V2RIy173w%2F5YiT5V0JSXiWkaZo5La6Zzyu70fRog1XIbVEsHZzmEt82P0wuASog5tW%2Bgfl30Za8g%2BlggK2BBtY76oYzL6KuLucZWrZmC%2FSvYtUclUdybOpBfUOLBqJ%2Fz9KmrAOAj2nfE6FgFTm9gCFRU98BtQyKcFwBZ8g1fyQLN2CdECIc13Q06Zlbj92WjxO6oDQyXlOYutWFRTLlf9fmhDGCZUyTx05j0cJffFzlt8iGIbc76uVJTAzjzeSMFosPWLwv%2BECDcGV8c3l9KpC86ni%2FHTXMLPC4tEGOqUBdG7I2ao%2B1em9BLmw%2FD192Nkz1Oclx5TCMboxeoeE9GgP%2FjE9WQ1LV5dXiF5I%2Fr52vzMe8T9oxoqKzMsziPHrSS%2BR6hqrZqeMpqu0x8%2FlX%2F4lXdfASJnhTznZLMcQQtmKBNZbaZBz5iyvKH%2FrPZEsNxUc1w9dbYBsraCUvRW9pZm6%2FEfJMYL0bTRF%2FG06CGOeMVbkNcFPCTf8bCp0OS1Uy3Rcscgj&X-Amz-Signature=d4d3acf3dbe6063196b23ea297b25f0c40ba958643ac6f35c5c03efb9ad45fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

