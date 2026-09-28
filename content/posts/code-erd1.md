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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NM54TYO%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBdF3nUG6SkXlHS98zuIc1F20F69XYwf%2BqZEKuF5SSONAiADGMOcdlXmnmXxbKQCdIvYchSjj91JVv38QdROXP4BwSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8VeFTbdg%2B8c6ExAqKtwDJcObgAbC0q%2F6cmfwtXJ8K8n5uePQBRr4GtIUl72sRw4yttumum6CRqXLMFOYwKP4VOPsaZgHx1ujQT8hGfpzI4o1j%2FRJv5gc%2BsGnvVXdxMvCNqQsmoWxt99VBfs8baGEqgrP1dtMeGD9%2BII5QIqApt8aP5L3ieFRAfpChvPYfzVjQC4W9ucHVSkQmkoSTa%2FK6PnsnvW5PkpscTUoI0BG6zwcY3jAMgheLneG714xTnYoU54H5ori0wuHanqiit6xC0d5TEtXiByHXBVF2sfkXjYRATPngC4dY1Bd9TJpxloanCoUhc0UdtkniXfl3lLIWRu8VI%2B7gl6KBqWGkqMFTVeMooZfvbbH19DWAhJnvSpb3Sn5exfFF%2FKHvnI8JkSQvgHwgCP%2FT4i%2BqvTBn8mRZVglfpqBlkuuq1LkN4HS7vJVNpY%2FUbQ%2FaVpLC%2BydG3G%2FgFkhllKCSBlgCbrWisr3hCPKK1E1RvTXNH%2B1GPxEHZfcjMaWc5BI4El%2FxIfUCis%2ByXXShrwyJxm8pzVbjCRrutueJ3zRHvd6J%2F3OvbK%2FTxk%2BbaUYxFaQ7v92RlZdESCy3LCOhkAlEtigjYAsT5TTlCcjnweoRzwlE01DfepROdVZT%2FcJSWFZmP4kIeYw4f3m1QY6pgEd3P4rsUJg%2BTrOYvQWAppKP2RRfKtC1QqOQLZLiDARpPKLdgxQ18%2BP4hUo2%2BmEDklA3Gff1TIdhQb4M8Aje9fWFCrjCgyCp%2F5iOVwML702JeUR54PwY0KO%2FRfreMygiEcryZgIZTe1lQ3UUDjw1sa6Tyekht%2BuLCiuTh3MsE5qRFneHmkQecwu%2FR7i3PML7IVfm5e5Y3dEL%2BHxibleYw%2Ffvpxfq2lA&X-Amz-Signature=409586832b014395ce6f7b8e77d23f94051c8cb4e0459820975c8044bff00f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFUJXIK%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCayir3AgyVJIY08AzKRanLdJkUQi8WVaZGNyeoBXdvbQIgeLULFJGIMAzp6n1NQjYBZ2rOuASAr3nL18%2B9f1%2BW8Bkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF24HnPMPjf00e3UYCrcAycNJcwJ8CroAbKwUWcCRuBkgx5NF0zsoR2edTwqMMLm7i1p4UET1vW2eIFgRY9AQED87TewJoywXVqTqR%2FHM06tK7RlfgLBjHw6qQnK3fdc1iqbPLAU6f%2FUa3%2F01TCggDLCXaUMuL2awT5iH%2BuWXYlr1FvLWG%2F3rpmda0yh6qhrZ4hFYkCUS5xhSVVaqZWz6JdLGOdfgp88wsYv2r%2FGFnuVpdsl7fkgSSAa6OCS%2FvtOCWyegKUrl%2BpF3BWVBWQ14vOVAQFDK5B3GLTT65xKIH0d7b9tHv%2BembDodHYz4MxUexcpQJ89Ms0MaZjGGU0K22OwOhIyOfJp6kwLaVFeYwALHV1gGUONL%2FVo%2Bh31%2FYzLWBWXIAQH51FCWNxitw6pBRTd2BEEqbR88zrquMft9ECrn1dxyfRMxrcNiVcqhGupBA69fc3xixurO6Dc4%2FDywfNRGIEo%2FxyVqUs%2F7pTXh0%2BGHsYIC2oOvsMbiYKe1g63OcKoB3SEXf%2BJ99kM2%2ByCreTcZc51liFWfVOv%2BlPPHgdEF2SrO%2FjOf4Ayksy2nJgMwPQg5Dw5BwvYyUcVP%2F9alHwzbBBkOl8cmDXN7fFyCCyoTwnwJjlXWMoJ%2FDHXW9r%2BUiATVkY1k2UpDCG0MKvL59UGOqUBLvhjjg%2BucVrKefVmK%2F%2FBiMiwnkeDkFqFczqcBd3Eu9E1EAWdd8WF48QRCZWbqJjIwZWsr6ncCbApAYU47L1LYw%2BET8CqfxnCZUYft%2FbkRKcucWR5Unkse0%2BSUsczPpO6DFeBTMWqubkUiWQZRxGqbswF4Y2u4E34Mx79yQLFLkcbWttkQLNac36rSI%2B%2Fpbb%2F6y0oPBPzxvjvuROiFQ0%2BekwSn2k%2B&X-Amz-Signature=09cd2b5aae832d090df1ed4623ca7a26d26d259b5d68c5d90d842fc55b053d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFUJXIK%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCayir3AgyVJIY08AzKRanLdJkUQi8WVaZGNyeoBXdvbQIgeLULFJGIMAzp6n1NQjYBZ2rOuASAr3nL18%2B9f1%2BW8Bkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF24HnPMPjf00e3UYCrcAycNJcwJ8CroAbKwUWcCRuBkgx5NF0zsoR2edTwqMMLm7i1p4UET1vW2eIFgRY9AQED87TewJoywXVqTqR%2FHM06tK7RlfgLBjHw6qQnK3fdc1iqbPLAU6f%2FUa3%2F01TCggDLCXaUMuL2awT5iH%2BuWXYlr1FvLWG%2F3rpmda0yh6qhrZ4hFYkCUS5xhSVVaqZWz6JdLGOdfgp88wsYv2r%2FGFnuVpdsl7fkgSSAa6OCS%2FvtOCWyegKUrl%2BpF3BWVBWQ14vOVAQFDK5B3GLTT65xKIH0d7b9tHv%2BembDodHYz4MxUexcpQJ89Ms0MaZjGGU0K22OwOhIyOfJp6kwLaVFeYwALHV1gGUONL%2FVo%2Bh31%2FYzLWBWXIAQH51FCWNxitw6pBRTd2BEEqbR88zrquMft9ECrn1dxyfRMxrcNiVcqhGupBA69fc3xixurO6Dc4%2FDywfNRGIEo%2FxyVqUs%2F7pTXh0%2BGHsYIC2oOvsMbiYKe1g63OcKoB3SEXf%2BJ99kM2%2ByCreTcZc51liFWfVOv%2BlPPHgdEF2SrO%2FjOf4Ayksy2nJgMwPQg5Dw5BwvYyUcVP%2F9alHwzbBBkOl8cmDXN7fFyCCyoTwnwJjlXWMoJ%2FDHXW9r%2BUiATVkY1k2UpDCG0MKvL59UGOqUBLvhjjg%2BucVrKefVmK%2F%2FBiMiwnkeDkFqFczqcBd3Eu9E1EAWdd8WF48QRCZWbqJjIwZWsr6ncCbApAYU47L1LYw%2BET8CqfxnCZUYft%2FbkRKcucWR5Unkse0%2BSUsczPpO6DFeBTMWqubkUiWQZRxGqbswF4Y2u4E34Mx79yQLFLkcbWttkQLNac36rSI%2B%2Fpbb%2F6y0oPBPzxvjvuROiFQ0%2BekwSn2k%2B&X-Amz-Signature=7d1200ddd369cc4a8fb148ef2a34107602b4875eb4488760824e8203bb2a91a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFUJXIK%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCayir3AgyVJIY08AzKRanLdJkUQi8WVaZGNyeoBXdvbQIgeLULFJGIMAzp6n1NQjYBZ2rOuASAr3nL18%2B9f1%2BW8Bkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF24HnPMPjf00e3UYCrcAycNJcwJ8CroAbKwUWcCRuBkgx5NF0zsoR2edTwqMMLm7i1p4UET1vW2eIFgRY9AQED87TewJoywXVqTqR%2FHM06tK7RlfgLBjHw6qQnK3fdc1iqbPLAU6f%2FUa3%2F01TCggDLCXaUMuL2awT5iH%2BuWXYlr1FvLWG%2F3rpmda0yh6qhrZ4hFYkCUS5xhSVVaqZWz6JdLGOdfgp88wsYv2r%2FGFnuVpdsl7fkgSSAa6OCS%2FvtOCWyegKUrl%2BpF3BWVBWQ14vOVAQFDK5B3GLTT65xKIH0d7b9tHv%2BembDodHYz4MxUexcpQJ89Ms0MaZjGGU0K22OwOhIyOfJp6kwLaVFeYwALHV1gGUONL%2FVo%2Bh31%2FYzLWBWXIAQH51FCWNxitw6pBRTd2BEEqbR88zrquMft9ECrn1dxyfRMxrcNiVcqhGupBA69fc3xixurO6Dc4%2FDywfNRGIEo%2FxyVqUs%2F7pTXh0%2BGHsYIC2oOvsMbiYKe1g63OcKoB3SEXf%2BJ99kM2%2ByCreTcZc51liFWfVOv%2BlPPHgdEF2SrO%2FjOf4Ayksy2nJgMwPQg5Dw5BwvYyUcVP%2F9alHwzbBBkOl8cmDXN7fFyCCyoTwnwJjlXWMoJ%2FDHXW9r%2BUiATVkY1k2UpDCG0MKvL59UGOqUBLvhjjg%2BucVrKefVmK%2F%2FBiMiwnkeDkFqFczqcBd3Eu9E1EAWdd8WF48QRCZWbqJjIwZWsr6ncCbApAYU47L1LYw%2BET8CqfxnCZUYft%2FbkRKcucWR5Unkse0%2BSUsczPpO6DFeBTMWqubkUiWQZRxGqbswF4Y2u4E34Mx79yQLFLkcbWttkQLNac36rSI%2B%2Fpbb%2F6y0oPBPzxvjvuROiFQ0%2BekwSn2k%2B&X-Amz-Signature=061a0e37dd6272167391d507f05b4b5ef144e8a3e68b99d1630dcb33010b915a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFUJXIK%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCayir3AgyVJIY08AzKRanLdJkUQi8WVaZGNyeoBXdvbQIgeLULFJGIMAzp6n1NQjYBZ2rOuASAr3nL18%2B9f1%2BW8Bkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF24HnPMPjf00e3UYCrcAycNJcwJ8CroAbKwUWcCRuBkgx5NF0zsoR2edTwqMMLm7i1p4UET1vW2eIFgRY9AQED87TewJoywXVqTqR%2FHM06tK7RlfgLBjHw6qQnK3fdc1iqbPLAU6f%2FUa3%2F01TCggDLCXaUMuL2awT5iH%2BuWXYlr1FvLWG%2F3rpmda0yh6qhrZ4hFYkCUS5xhSVVaqZWz6JdLGOdfgp88wsYv2r%2FGFnuVpdsl7fkgSSAa6OCS%2FvtOCWyegKUrl%2BpF3BWVBWQ14vOVAQFDK5B3GLTT65xKIH0d7b9tHv%2BembDodHYz4MxUexcpQJ89Ms0MaZjGGU0K22OwOhIyOfJp6kwLaVFeYwALHV1gGUONL%2FVo%2Bh31%2FYzLWBWXIAQH51FCWNxitw6pBRTd2BEEqbR88zrquMft9ECrn1dxyfRMxrcNiVcqhGupBA69fc3xixurO6Dc4%2FDywfNRGIEo%2FxyVqUs%2F7pTXh0%2BGHsYIC2oOvsMbiYKe1g63OcKoB3SEXf%2BJ99kM2%2ByCreTcZc51liFWfVOv%2BlPPHgdEF2SrO%2FjOf4Ayksy2nJgMwPQg5Dw5BwvYyUcVP%2F9alHwzbBBkOl8cmDXN7fFyCCyoTwnwJjlXWMoJ%2FDHXW9r%2BUiATVkY1k2UpDCG0MKvL59UGOqUBLvhjjg%2BucVrKefVmK%2F%2FBiMiwnkeDkFqFczqcBd3Eu9E1EAWdd8WF48QRCZWbqJjIwZWsr6ncCbApAYU47L1LYw%2BET8CqfxnCZUYft%2FbkRKcucWR5Unkse0%2BSUsczPpO6DFeBTMWqubkUiWQZRxGqbswF4Y2u4E34Mx79yQLFLkcbWttkQLNac36rSI%2B%2Fpbb%2F6y0oPBPzxvjvuROiFQ0%2BekwSn2k%2B&X-Amz-Signature=2f649b4ec8fcc6f80ae64f594d698edb13b93fc939172fc63d31c96d0f80d6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFUJXIK%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCayir3AgyVJIY08AzKRanLdJkUQi8WVaZGNyeoBXdvbQIgeLULFJGIMAzp6n1NQjYBZ2rOuASAr3nL18%2B9f1%2BW8Bkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF24HnPMPjf00e3UYCrcAycNJcwJ8CroAbKwUWcCRuBkgx5NF0zsoR2edTwqMMLm7i1p4UET1vW2eIFgRY9AQED87TewJoywXVqTqR%2FHM06tK7RlfgLBjHw6qQnK3fdc1iqbPLAU6f%2FUa3%2F01TCggDLCXaUMuL2awT5iH%2BuWXYlr1FvLWG%2F3rpmda0yh6qhrZ4hFYkCUS5xhSVVaqZWz6JdLGOdfgp88wsYv2r%2FGFnuVpdsl7fkgSSAa6OCS%2FvtOCWyegKUrl%2BpF3BWVBWQ14vOVAQFDK5B3GLTT65xKIH0d7b9tHv%2BembDodHYz4MxUexcpQJ89Ms0MaZjGGU0K22OwOhIyOfJp6kwLaVFeYwALHV1gGUONL%2FVo%2Bh31%2FYzLWBWXIAQH51FCWNxitw6pBRTd2BEEqbR88zrquMft9ECrn1dxyfRMxrcNiVcqhGupBA69fc3xixurO6Dc4%2FDywfNRGIEo%2FxyVqUs%2F7pTXh0%2BGHsYIC2oOvsMbiYKe1g63OcKoB3SEXf%2BJ99kM2%2ByCreTcZc51liFWfVOv%2BlPPHgdEF2SrO%2FjOf4Ayksy2nJgMwPQg5Dw5BwvYyUcVP%2F9alHwzbBBkOl8cmDXN7fFyCCyoTwnwJjlXWMoJ%2FDHXW9r%2BUiATVkY1k2UpDCG0MKvL59UGOqUBLvhjjg%2BucVrKefVmK%2F%2FBiMiwnkeDkFqFczqcBd3Eu9E1EAWdd8WF48QRCZWbqJjIwZWsr6ncCbApAYU47L1LYw%2BET8CqfxnCZUYft%2FbkRKcucWR5Unkse0%2BSUsczPpO6DFeBTMWqubkUiWQZRxGqbswF4Y2u4E34Mx79yQLFLkcbWttkQLNac36rSI%2B%2Fpbb%2F6y0oPBPzxvjvuROiFQ0%2BekwSn2k%2B&X-Amz-Signature=ce4a02fc2c4dd34d5af6906f6562792b4b96dcc822e58520abd9655f6ef7fb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NM54TYO%2F20260928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260928T035832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBdF3nUG6SkXlHS98zuIc1F20F69XYwf%2BqZEKuF5SSONAiADGMOcdlXmnmXxbKQCdIvYchSjj91JVv38QdROXP4BwSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8VeFTbdg%2B8c6ExAqKtwDJcObgAbC0q%2F6cmfwtXJ8K8n5uePQBRr4GtIUl72sRw4yttumum6CRqXLMFOYwKP4VOPsaZgHx1ujQT8hGfpzI4o1j%2FRJv5gc%2BsGnvVXdxMvCNqQsmoWxt99VBfs8baGEqgrP1dtMeGD9%2BII5QIqApt8aP5L3ieFRAfpChvPYfzVjQC4W9ucHVSkQmkoSTa%2FK6PnsnvW5PkpscTUoI0BG6zwcY3jAMgheLneG714xTnYoU54H5ori0wuHanqiit6xC0d5TEtXiByHXBVF2sfkXjYRATPngC4dY1Bd9TJpxloanCoUhc0UdtkniXfl3lLIWRu8VI%2B7gl6KBqWGkqMFTVeMooZfvbbH19DWAhJnvSpb3Sn5exfFF%2FKHvnI8JkSQvgHwgCP%2FT4i%2BqvTBn8mRZVglfpqBlkuuq1LkN4HS7vJVNpY%2FUbQ%2FaVpLC%2BydG3G%2FgFkhllKCSBlgCbrWisr3hCPKK1E1RvTXNH%2B1GPxEHZfcjMaWc5BI4El%2FxIfUCis%2ByXXShrwyJxm8pzVbjCRrutueJ3zRHvd6J%2F3OvbK%2FTxk%2BbaUYxFaQ7v92RlZdESCy3LCOhkAlEtigjYAsT5TTlCcjnweoRzwlE01DfepROdVZT%2FcJSWFZmP4kIeYw4f3m1QY6pgEd3P4rsUJg%2BTrOYvQWAppKP2RRfKtC1QqOQLZLiDARpPKLdgxQ18%2BP4hUo2%2BmEDklA3Gff1TIdhQb4M8Aje9fWFCrjCgyCp%2F5iOVwML702JeUR54PwY0KO%2FRfreMygiEcryZgIZTe1lQ3UUDjw1sa6Tyekht%2BuLCiuTh3MsE5qRFneHmkQecwu%2FR7i3PML7IVfm5e5Y3dEL%2BHxibleYw%2Ffvpxfq2lA&X-Amz-Signature=81363a7c097a37cb15aed2a7d66deb9b7a5c5d639c3e4978558b451068f09309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

