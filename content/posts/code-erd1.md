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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNJ5IF2%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T033301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZQT9Y3mhzRtGEfRCrFn2DIjHKcULvBovz8odWGog4BQIgZrJo25xyJLuXvJSIMVnb8rJRVXgREyvgZno8OyD248sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCw1pRhiymIkjASDySrcAzwDeLV1BOVYAZiuR%2Bm%2B%2FRAXSvKbunDBqUHTlNfvdgSQL1EMBhc98VbIagtIb6vkM6U8LvaA8aaMm2rKtO4qEhSRc6%2B0P%2B9IwoTINp2S7KvkvCUOYQYoQ4YTFu4XFngMnqkodfUkM3mjvEi4cghysi9lVbHkusxAlIycWxLkzTMBvUN8xtPIUW6FZA4J7wTVYl3v1IoD6ie8%2FMAhD5%2FkQ7IrjtFiQcFr%2Fx2NNM1QBIAe%2F6ilFVi6cBE8GpYIwa7jdSpOBWRSdgkbLZzZ10B0wdwU5jOyyer8HUfG1FbnaxV3HtGotxnlveIlrzhTvBrnCKgtLbGiK7yePyFpVNWvkv53qqK4rvw8cTYB06IW3hr%2FI8MWt3HdZGHcjiNU%2FrgyzxksQtjoRGLfJx2gRN0lVAsagX80R5kYH35wGCzDwCIYqaAIZyWDcUrmB18smNLrOrYyeIxq5HkRKVBmqusg3ys5j5odWy178TiNAV1NO0e4fvYvGIId%2BIJigpXzTe%2F%2Fkk8SIxJzUUdMfST462MCkVzENhh27Pp%2FxIIGu0MabKMeHINSm7lXcanoplk2UOvPsK20NcLEiUiWMPMvsc9ks7xWzCvihbmPyOm0mdpHUKsO6JpJNOnuhu6tWbGJMOa%2BrNIGOqUBSXc%2Ba5A%2BB1XpfsmRjPeoC6PfMxVSRy0NplKiaquOSvnPlZYULd5bFE6rFnVNPQcemvr%2B84tRyhSrh0hpliarV%2FJPgDW%2BdkqgZRENWOq1LTzbax6nhDL2amJ97YF7J%2B3EHlLVFv1w3fEvjSwM9NilEMs07rwdIZy0Dn2Qn9yADzK9gbbpPFsmk3u5O0bvbJM62CWS951f7Fz%2BQ4QXwrGZXwBt1y8%2B&X-Amz-Signature=33756a8e05334a27e8fab838a052378e920b8d7dfbf42e57902deb916e62b025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHIBD5A%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T033301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrP07YgkujS8zgF7lQf%2Fb%2FfMcM2pyvAWwh8MgCWrGhlAIhAL92WfVWzNZuxR11%2F%2BpZUODI4CDj7FjIPxWdEbbJZhPKKv8DCE0QABoMNjM3NDIzMTgzODA1IgyfYZVuRlKetHBVbBwq3ANpl7HR6elZuJoD6ltbiyD3eAYWk5voGF3ICptZRuai69upUn7iRaLXYCbw2Vy6Rco1iEw7mQq3nfUYzMusX9OaY%2Fe1Hq8l40Pyg51%2F0LDCDkZh7%2F52BMdqRMbwFDCUz31jpoIkQxGmX5SgcdOHOKPUkszeXDvFSSL3%2B7mQFSuipD9oJiVIbwZsm57NhB0W1rxNWfZwZFa7MPswa6ib2CHKk%2FZQgtgBBdecHJU6izPabFHSVFyzRf8Gl9nyVy9XMnc0PFMbDVPYDryoy0DJ6i%2FXB%2Ft1ejpi6MSgcD6NOWxdoHMHpyqiYGj1Wrq6EVdo1YDQcpghC4TOCzSFs1PMGn9uDddMF2YRUE%2FJLuFeNhDvY1SCzyPOQTYJjk4o4BnRMednvFPt3Zi8zcRdZmkuvHo%2BT5mlPpFxym4tZTSZX30a6N9jSvj4KJBaHYhoc3Q%2FbjkZkL8X3QMYU4Cdw%2BelIiKtvXms1s3WHoytje89hLBGqa22niEpsE9Lqt1Cxx2ClR2hrs90SV0yfIFrNQTtu1%2FxRfHyOqO2cnDJgtdiV1uQ49JyCUBf7q1nKPc1fzY3zgBtyyMPCEJ5RTJ63w0%2FBovy6opZCEPWHmHY0evgsfGX6brnSl6AV9%2BCt3muFjDrv6zSBjqkAZvkMvbH%2FGwxTusyVMJwRNXDE3JkDRwnO9PIGuO1a%2BvjfgcQs8POofuvnNU3HLwyn2FuE9EGy2br3tr%2FFQzgzq7lmzAofmx1mjr069iKHjf%2F3ksNBcOc%2FcsM5nuXjl5OBOVJe%2BBWz%2Bm2c55qPrbZ75u4nFursqjaki6v6yvX7gvIiwIBdkejjVNpfG2T%2F1ePsNWl4QZ%2Fz9jeoWVtoCVmHUh6i9S5&X-Amz-Signature=21d888daadcf70b2ee7b56931266a7e1fff942f1c472eb4db9b727f5e748cdf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHIBD5A%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T033301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrP07YgkujS8zgF7lQf%2Fb%2FfMcM2pyvAWwh8MgCWrGhlAIhAL92WfVWzNZuxR11%2F%2BpZUODI4CDj7FjIPxWdEbbJZhPKKv8DCE0QABoMNjM3NDIzMTgzODA1IgyfYZVuRlKetHBVbBwq3ANpl7HR6elZuJoD6ltbiyD3eAYWk5voGF3ICptZRuai69upUn7iRaLXYCbw2Vy6Rco1iEw7mQq3nfUYzMusX9OaY%2Fe1Hq8l40Pyg51%2F0LDCDkZh7%2F52BMdqRMbwFDCUz31jpoIkQxGmX5SgcdOHOKPUkszeXDvFSSL3%2B7mQFSuipD9oJiVIbwZsm57NhB0W1rxNWfZwZFa7MPswa6ib2CHKk%2FZQgtgBBdecHJU6izPabFHSVFyzRf8Gl9nyVy9XMnc0PFMbDVPYDryoy0DJ6i%2FXB%2Ft1ejpi6MSgcD6NOWxdoHMHpyqiYGj1Wrq6EVdo1YDQcpghC4TOCzSFs1PMGn9uDddMF2YRUE%2FJLuFeNhDvY1SCzyPOQTYJjk4o4BnRMednvFPt3Zi8zcRdZmkuvHo%2BT5mlPpFxym4tZTSZX30a6N9jSvj4KJBaHYhoc3Q%2FbjkZkL8X3QMYU4Cdw%2BelIiKtvXms1s3WHoytje89hLBGqa22niEpsE9Lqt1Cxx2ClR2hrs90SV0yfIFrNQTtu1%2FxRfHyOqO2cnDJgtdiV1uQ49JyCUBf7q1nKPc1fzY3zgBtyyMPCEJ5RTJ63w0%2FBovy6opZCEPWHmHY0evgsfGX6brnSl6AV9%2BCt3muFjDrv6zSBjqkAZvkMvbH%2FGwxTusyVMJwRNXDE3JkDRwnO9PIGuO1a%2BvjfgcQs8POofuvnNU3HLwyn2FuE9EGy2br3tr%2FFQzgzq7lmzAofmx1mjr069iKHjf%2F3ksNBcOc%2FcsM5nuXjl5OBOVJe%2BBWz%2Bm2c55qPrbZ75u4nFursqjaki6v6yvX7gvIiwIBdkejjVNpfG2T%2F1ePsNWl4QZ%2Fz9jeoWVtoCVmHUh6i9S5&X-Amz-Signature=a42c83a2dc0b6db8b45ef7e1b5ef3cd55dda75d7ba0a09cb35c14877201f7259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHIBD5A%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T033301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrP07YgkujS8zgF7lQf%2Fb%2FfMcM2pyvAWwh8MgCWrGhlAIhAL92WfVWzNZuxR11%2F%2BpZUODI4CDj7FjIPxWdEbbJZhPKKv8DCE0QABoMNjM3NDIzMTgzODA1IgyfYZVuRlKetHBVbBwq3ANpl7HR6elZuJoD6ltbiyD3eAYWk5voGF3ICptZRuai69upUn7iRaLXYCbw2Vy6Rco1iEw7mQq3nfUYzMusX9OaY%2Fe1Hq8l40Pyg51%2F0LDCDkZh7%2F52BMdqRMbwFDCUz31jpoIkQxGmX5SgcdOHOKPUkszeXDvFSSL3%2B7mQFSuipD9oJiVIbwZsm57NhB0W1rxNWfZwZFa7MPswa6ib2CHKk%2FZQgtgBBdecHJU6izPabFHSVFyzRf8Gl9nyVy9XMnc0PFMbDVPYDryoy0DJ6i%2FXB%2Ft1ejpi6MSgcD6NOWxdoHMHpyqiYGj1Wrq6EVdo1YDQcpghC4TOCzSFs1PMGn9uDddMF2YRUE%2FJLuFeNhDvY1SCzyPOQTYJjk4o4BnRMednvFPt3Zi8zcRdZmkuvHo%2BT5mlPpFxym4tZTSZX30a6N9jSvj4KJBaHYhoc3Q%2FbjkZkL8X3QMYU4Cdw%2BelIiKtvXms1s3WHoytje89hLBGqa22niEpsE9Lqt1Cxx2ClR2hrs90SV0yfIFrNQTtu1%2FxRfHyOqO2cnDJgtdiV1uQ49JyCUBf7q1nKPc1fzY3zgBtyyMPCEJ5RTJ63w0%2FBovy6opZCEPWHmHY0evgsfGX6brnSl6AV9%2BCt3muFjDrv6zSBjqkAZvkMvbH%2FGwxTusyVMJwRNXDE3JkDRwnO9PIGuO1a%2BvjfgcQs8POofuvnNU3HLwyn2FuE9EGy2br3tr%2FFQzgzq7lmzAofmx1mjr069iKHjf%2F3ksNBcOc%2FcsM5nuXjl5OBOVJe%2BBWz%2Bm2c55qPrbZ75u4nFursqjaki6v6yvX7gvIiwIBdkejjVNpfG2T%2F1ePsNWl4QZ%2Fz9jeoWVtoCVmHUh6i9S5&X-Amz-Signature=f6d182888b29fac662aa65c70eaf499db1863aedde0a7c43669e6d0e2c9f4d34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHIBD5A%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T033301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrP07YgkujS8zgF7lQf%2Fb%2FfMcM2pyvAWwh8MgCWrGhlAIhAL92WfVWzNZuxR11%2F%2BpZUODI4CDj7FjIPxWdEbbJZhPKKv8DCE0QABoMNjM3NDIzMTgzODA1IgyfYZVuRlKetHBVbBwq3ANpl7HR6elZuJoD6ltbiyD3eAYWk5voGF3ICptZRuai69upUn7iRaLXYCbw2Vy6Rco1iEw7mQq3nfUYzMusX9OaY%2Fe1Hq8l40Pyg51%2F0LDCDkZh7%2F52BMdqRMbwFDCUz31jpoIkQxGmX5SgcdOHOKPUkszeXDvFSSL3%2B7mQFSuipD9oJiVIbwZsm57NhB0W1rxNWfZwZFa7MPswa6ib2CHKk%2FZQgtgBBdecHJU6izPabFHSVFyzRf8Gl9nyVy9XMnc0PFMbDVPYDryoy0DJ6i%2FXB%2Ft1ejpi6MSgcD6NOWxdoHMHpyqiYGj1Wrq6EVdo1YDQcpghC4TOCzSFs1PMGn9uDddMF2YRUE%2FJLuFeNhDvY1SCzyPOQTYJjk4o4BnRMednvFPt3Zi8zcRdZmkuvHo%2BT5mlPpFxym4tZTSZX30a6N9jSvj4KJBaHYhoc3Q%2FbjkZkL8X3QMYU4Cdw%2BelIiKtvXms1s3WHoytje89hLBGqa22niEpsE9Lqt1Cxx2ClR2hrs90SV0yfIFrNQTtu1%2FxRfHyOqO2cnDJgtdiV1uQ49JyCUBf7q1nKPc1fzY3zgBtyyMPCEJ5RTJ63w0%2FBovy6opZCEPWHmHY0evgsfGX6brnSl6AV9%2BCt3muFjDrv6zSBjqkAZvkMvbH%2FGwxTusyVMJwRNXDE3JkDRwnO9PIGuO1a%2BvjfgcQs8POofuvnNU3HLwyn2FuE9EGy2br3tr%2FFQzgzq7lmzAofmx1mjr069iKHjf%2F3ksNBcOc%2FcsM5nuXjl5OBOVJe%2BBWz%2Bm2c55qPrbZ75u4nFursqjaki6v6yvX7gvIiwIBdkejjVNpfG2T%2F1ePsNWl4QZ%2Fz9jeoWVtoCVmHUh6i9S5&X-Amz-Signature=1707df81b1f47b6ab166bde72d3c25f94a5ff7536d5aea31a950031c075354f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHIBD5A%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T033301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrP07YgkujS8zgF7lQf%2Fb%2FfMcM2pyvAWwh8MgCWrGhlAIhAL92WfVWzNZuxR11%2F%2BpZUODI4CDj7FjIPxWdEbbJZhPKKv8DCE0QABoMNjM3NDIzMTgzODA1IgyfYZVuRlKetHBVbBwq3ANpl7HR6elZuJoD6ltbiyD3eAYWk5voGF3ICptZRuai69upUn7iRaLXYCbw2Vy6Rco1iEw7mQq3nfUYzMusX9OaY%2Fe1Hq8l40Pyg51%2F0LDCDkZh7%2F52BMdqRMbwFDCUz31jpoIkQxGmX5SgcdOHOKPUkszeXDvFSSL3%2B7mQFSuipD9oJiVIbwZsm57NhB0W1rxNWfZwZFa7MPswa6ib2CHKk%2FZQgtgBBdecHJU6izPabFHSVFyzRf8Gl9nyVy9XMnc0PFMbDVPYDryoy0DJ6i%2FXB%2Ft1ejpi6MSgcD6NOWxdoHMHpyqiYGj1Wrq6EVdo1YDQcpghC4TOCzSFs1PMGn9uDddMF2YRUE%2FJLuFeNhDvY1SCzyPOQTYJjk4o4BnRMednvFPt3Zi8zcRdZmkuvHo%2BT5mlPpFxym4tZTSZX30a6N9jSvj4KJBaHYhoc3Q%2FbjkZkL8X3QMYU4Cdw%2BelIiKtvXms1s3WHoytje89hLBGqa22niEpsE9Lqt1Cxx2ClR2hrs90SV0yfIFrNQTtu1%2FxRfHyOqO2cnDJgtdiV1uQ49JyCUBf7q1nKPc1fzY3zgBtyyMPCEJ5RTJ63w0%2FBovy6opZCEPWHmHY0evgsfGX6brnSl6AV9%2BCt3muFjDrv6zSBjqkAZvkMvbH%2FGwxTusyVMJwRNXDE3JkDRwnO9PIGuO1a%2BvjfgcQs8POofuvnNU3HLwyn2FuE9EGy2br3tr%2FFQzgzq7lmzAofmx1mjr069iKHjf%2F3ksNBcOc%2FcsM5nuXjl5OBOVJe%2BBWz%2Bm2c55qPrbZ75u4nFursqjaki6v6yvX7gvIiwIBdkejjVNpfG2T%2F1ePsNWl4QZ%2Fz9jeoWVtoCVmHUh6i9S5&X-Amz-Signature=18bb379e8a0ef8ec835b4780f9a86ba29965c439ec236a8ac27711785ff768af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNJ5IF2%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T033301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZQT9Y3mhzRtGEfRCrFn2DIjHKcULvBovz8odWGog4BQIgZrJo25xyJLuXvJSIMVnb8rJRVXgREyvgZno8OyD248sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCw1pRhiymIkjASDySrcAzwDeLV1BOVYAZiuR%2Bm%2B%2FRAXSvKbunDBqUHTlNfvdgSQL1EMBhc98VbIagtIb6vkM6U8LvaA8aaMm2rKtO4qEhSRc6%2B0P%2B9IwoTINp2S7KvkvCUOYQYoQ4YTFu4XFngMnqkodfUkM3mjvEi4cghysi9lVbHkusxAlIycWxLkzTMBvUN8xtPIUW6FZA4J7wTVYl3v1IoD6ie8%2FMAhD5%2FkQ7IrjtFiQcFr%2Fx2NNM1QBIAe%2F6ilFVi6cBE8GpYIwa7jdSpOBWRSdgkbLZzZ10B0wdwU5jOyyer8HUfG1FbnaxV3HtGotxnlveIlrzhTvBrnCKgtLbGiK7yePyFpVNWvkv53qqK4rvw8cTYB06IW3hr%2FI8MWt3HdZGHcjiNU%2FrgyzxksQtjoRGLfJx2gRN0lVAsagX80R5kYH35wGCzDwCIYqaAIZyWDcUrmB18smNLrOrYyeIxq5HkRKVBmqusg3ys5j5odWy178TiNAV1NO0e4fvYvGIId%2BIJigpXzTe%2F%2Fkk8SIxJzUUdMfST462MCkVzENhh27Pp%2FxIIGu0MabKMeHINSm7lXcanoplk2UOvPsK20NcLEiUiWMPMvsc9ks7xWzCvihbmPyOm0mdpHUKsO6JpJNOnuhu6tWbGJMOa%2BrNIGOqUBSXc%2Ba5A%2BB1XpfsmRjPeoC6PfMxVSRy0NplKiaquOSvnPlZYULd5bFE6rFnVNPQcemvr%2B84tRyhSrh0hpliarV%2FJPgDW%2BdkqgZRENWOq1LTzbax6nhDL2amJ97YF7J%2B3EHlLVFv1w3fEvjSwM9NilEMs07rwdIZy0Dn2Qn9yADzK9gbbpPFsmk3u5O0bvbJM62CWS951f7Fz%2BQ4QXwrGZXwBt1y8%2B&X-Amz-Signature=e93d40bb923b4a4d2738c745a7291628854691cb27a824a7c038e7b35778a5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

