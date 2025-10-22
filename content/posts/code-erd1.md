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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFETIRUW%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE01wkEopdBib8AUxAKcaDqNzu1%2FWhgPPJYbitws3GT0AiBZFWev%2FZPsMUzotCx19EEjPc%2B2mE%2BHGRuicvDDvjcz6yr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMbkv7akeFpcvcA8xHKtwDrEip7xOK3fdwsA2gnLx5OdjuN%2BdkR1zlDs%2Fj3dC%2BfWZxaUqC%2Bzia1stGPBJ4ft%2F8rbtbmJsqm%2FwZyinciYAgfMNH7DYtZlTAIDPuLx7MauEJd%2FVSLNLCdwY89Dlnx67YVYY%2FYjiUql%2Fmws3FDjFoat1Ib8KntwbXyNCee8mxYmsZ9Hv102ANCiIdj7Z2U4ChZBHhh%2BJAkj%2FtC57AafRxZat1f64aRO%2FU08CLhr9VXV%2FG%2Bq2G8Oqy5Yu6EU%2FGWqabIjQBicstzBYAo52wKa9RU0dtoerR7z7YxiWmr2Ithv79bA%2BslK%2Fg1cb63xFIQ8%2Fpfg8YN6C%2BqudD8fA1tZ8D2f5b%2FGXGbeQdECJIdD4fKyRc0ude2dwANOwATFXNNQ4b6G1MbO1QKPsYhmHcN9XRm7VHHhNxlMMMo2QbwuEmXRnjX3jg7lmnz4fU2PhzeE7FpYYJYM7ISe3Rmz47%2BD6LSrBIVpMBZp0No3%2BkddRGAEpYv%2B0sI%2F3VJBQODPt%2FWd0oStqXiwXbZWX96eND7hbl7v%2B60H8ulokEyPns%2BHAwPwMMmXTOVq1tZKipfBAfZ0u%2BDSEruybaAGajmkfCdYw%2BfaEXO7CyWRFGeSbfvpLHEDtS55ZV75RFe6PwP4ww7ufgxwY6pgHxChNYA6VEx0VFImgM1cthKqcrw3S1gti9NtOKLQROuSnyUPmENIVEGPt%2F9ZX2RlquxDMHXBslrY7Pasjw7ABrau4IDgEcR6er5zp1K9yeq4tE1tEAaDLx9MxgJwdISE6jubw3FAOjWoROge2koifPOkB5LEy0IAy7M0XYU3%2B8mVXbpQizsUM3AbgS4SOi2RgO%2F2hgSrJEqriqdZrSr4foB9Wi7wCV&X-Amz-Signature=a5cdf74c9e1d28f73d72fc8e861d828cc1792e7d9099c13e7dae8d0cb2a9280b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OVMO6M%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB6YJ%2BNASLNq7QqahrHOWtGhQHCBrWq72YJmJSuDTsL%2BAiEArpAdhdqRCpIzhUFlQc28uzEE9WhFaCqsKIlX61e3MNwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPCOsFl4qi3%2FSZvUKSrcA6pRstE5QuxTDkbUOhLBJLWsu2eLB0pAxTazciCQOKltSZdGQV89SOTw7Om%2FTJqVd4dVWsC4%2FFxZsmLGT2uQDEdCky5ekwgGbvzFBDQoVH%2BI%2FT2oel8Z7s1BLiJiC9TRfcbws9N57lh319iIViY%2B8y3SojQdWmzhskvw1QdUnNtGSpo1veT3LJqkPbM%2Fm7USMnw6hXGGWID8AsH6quzoQu53Lps%2BalbZqp2ZQxIhU0xVfidOJuS5ET7j%2BhwLNuzpgXur2%2FQhD%2B4LBZetJXkvqNbKkzyERSpgC34qveVVgwmbNwTzt2iWShFwlsicNchwyOZ2K55dBtt7hsuu%2Be7rfoOvYC2Id%2F3F%2Bmp%2BT6Do9fzCh0AgOCv9ZJb3iELP9ekI4Rd1p0Taxn3Ggak%2Fl2Z0dHimp%2FUZ1L%2FHKUblL75g67OeJJeTG9tyzkAMXzkDiASr9yiOI7x7Y%2FrgT7aXeIMUWoWmE1rxBPfUtXVSKsIaLl2O6%2F%2BRNmygKjUfBLY9%2BGgOywQc1qRllspg1jPyVZ3XDldy4R07mXjtIF6U7KAeobNd5PQhb%2BEqRg%2B3DcnmIzvo7dfJ9H96MsqW7akxamFAodP5TP8Q7DdvWNznI64SiIq4yg8Rxs4%2BwCqSdhXoMPno4McGOqUBmJyRM5V5nJaO7Itmy7u%2F%2Ftj%2BBdbcz3iECkA%2FZxLXg%2FFjbOaTvU2NrKY%2Bxo1V%2B7p4B9JuJFmPGiSYAugxoEKs9zCVSlIexzieCfk1kzBqa0cFXudGCftli4gslkutzUrpA5kBtJ1z85bC5gyDacuDmqsNdE25G%2B5WWi8WEIabpwAIJcplQBXn2RiCT7Qxx3HeFQjg25F5gY2qNdAHW00fdUV9TL3M&X-Amz-Signature=c780f1857f5d279f9f5d4fc0664647ff3afc38af0caf12295962149a1c83a16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OVMO6M%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB6YJ%2BNASLNq7QqahrHOWtGhQHCBrWq72YJmJSuDTsL%2BAiEArpAdhdqRCpIzhUFlQc28uzEE9WhFaCqsKIlX61e3MNwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPCOsFl4qi3%2FSZvUKSrcA6pRstE5QuxTDkbUOhLBJLWsu2eLB0pAxTazciCQOKltSZdGQV89SOTw7Om%2FTJqVd4dVWsC4%2FFxZsmLGT2uQDEdCky5ekwgGbvzFBDQoVH%2BI%2FT2oel8Z7s1BLiJiC9TRfcbws9N57lh319iIViY%2B8y3SojQdWmzhskvw1QdUnNtGSpo1veT3LJqkPbM%2Fm7USMnw6hXGGWID8AsH6quzoQu53Lps%2BalbZqp2ZQxIhU0xVfidOJuS5ET7j%2BhwLNuzpgXur2%2FQhD%2B4LBZetJXkvqNbKkzyERSpgC34qveVVgwmbNwTzt2iWShFwlsicNchwyOZ2K55dBtt7hsuu%2Be7rfoOvYC2Id%2F3F%2Bmp%2BT6Do9fzCh0AgOCv9ZJb3iELP9ekI4Rd1p0Taxn3Ggak%2Fl2Z0dHimp%2FUZ1L%2FHKUblL75g67OeJJeTG9tyzkAMXzkDiASr9yiOI7x7Y%2FrgT7aXeIMUWoWmE1rxBPfUtXVSKsIaLl2O6%2F%2BRNmygKjUfBLY9%2BGgOywQc1qRllspg1jPyVZ3XDldy4R07mXjtIF6U7KAeobNd5PQhb%2BEqRg%2B3DcnmIzvo7dfJ9H96MsqW7akxamFAodP5TP8Q7DdvWNznI64SiIq4yg8Rxs4%2BwCqSdhXoMPno4McGOqUBmJyRM5V5nJaO7Itmy7u%2F%2Ftj%2BBdbcz3iECkA%2FZxLXg%2FFjbOaTvU2NrKY%2Bxo1V%2B7p4B9JuJFmPGiSYAugxoEKs9zCVSlIexzieCfk1kzBqa0cFXudGCftli4gslkutzUrpA5kBtJ1z85bC5gyDacuDmqsNdE25G%2B5WWi8WEIabpwAIJcplQBXn2RiCT7Qxx3HeFQjg25F5gY2qNdAHW00fdUV9TL3M&X-Amz-Signature=29cb9af26c3931264acdbe0326a127cc1463247a64997c826a34e5eb4cf752ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OVMO6M%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB6YJ%2BNASLNq7QqahrHOWtGhQHCBrWq72YJmJSuDTsL%2BAiEArpAdhdqRCpIzhUFlQc28uzEE9WhFaCqsKIlX61e3MNwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPCOsFl4qi3%2FSZvUKSrcA6pRstE5QuxTDkbUOhLBJLWsu2eLB0pAxTazciCQOKltSZdGQV89SOTw7Om%2FTJqVd4dVWsC4%2FFxZsmLGT2uQDEdCky5ekwgGbvzFBDQoVH%2BI%2FT2oel8Z7s1BLiJiC9TRfcbws9N57lh319iIViY%2B8y3SojQdWmzhskvw1QdUnNtGSpo1veT3LJqkPbM%2Fm7USMnw6hXGGWID8AsH6quzoQu53Lps%2BalbZqp2ZQxIhU0xVfidOJuS5ET7j%2BhwLNuzpgXur2%2FQhD%2B4LBZetJXkvqNbKkzyERSpgC34qveVVgwmbNwTzt2iWShFwlsicNchwyOZ2K55dBtt7hsuu%2Be7rfoOvYC2Id%2F3F%2Bmp%2BT6Do9fzCh0AgOCv9ZJb3iELP9ekI4Rd1p0Taxn3Ggak%2Fl2Z0dHimp%2FUZ1L%2FHKUblL75g67OeJJeTG9tyzkAMXzkDiASr9yiOI7x7Y%2FrgT7aXeIMUWoWmE1rxBPfUtXVSKsIaLl2O6%2F%2BRNmygKjUfBLY9%2BGgOywQc1qRllspg1jPyVZ3XDldy4R07mXjtIF6U7KAeobNd5PQhb%2BEqRg%2B3DcnmIzvo7dfJ9H96MsqW7akxamFAodP5TP8Q7DdvWNznI64SiIq4yg8Rxs4%2BwCqSdhXoMPno4McGOqUBmJyRM5V5nJaO7Itmy7u%2F%2Ftj%2BBdbcz3iECkA%2FZxLXg%2FFjbOaTvU2NrKY%2Bxo1V%2B7p4B9JuJFmPGiSYAugxoEKs9zCVSlIexzieCfk1kzBqa0cFXudGCftli4gslkutzUrpA5kBtJ1z85bC5gyDacuDmqsNdE25G%2B5WWi8WEIabpwAIJcplQBXn2RiCT7Qxx3HeFQjg25F5gY2qNdAHW00fdUV9TL3M&X-Amz-Signature=6a561841da9a46d2708748b81162209b82b024ef7383e2a5e1f7e2577f467d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OVMO6M%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB6YJ%2BNASLNq7QqahrHOWtGhQHCBrWq72YJmJSuDTsL%2BAiEArpAdhdqRCpIzhUFlQc28uzEE9WhFaCqsKIlX61e3MNwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPCOsFl4qi3%2FSZvUKSrcA6pRstE5QuxTDkbUOhLBJLWsu2eLB0pAxTazciCQOKltSZdGQV89SOTw7Om%2FTJqVd4dVWsC4%2FFxZsmLGT2uQDEdCky5ekwgGbvzFBDQoVH%2BI%2FT2oel8Z7s1BLiJiC9TRfcbws9N57lh319iIViY%2B8y3SojQdWmzhskvw1QdUnNtGSpo1veT3LJqkPbM%2Fm7USMnw6hXGGWID8AsH6quzoQu53Lps%2BalbZqp2ZQxIhU0xVfidOJuS5ET7j%2BhwLNuzpgXur2%2FQhD%2B4LBZetJXkvqNbKkzyERSpgC34qveVVgwmbNwTzt2iWShFwlsicNchwyOZ2K55dBtt7hsuu%2Be7rfoOvYC2Id%2F3F%2Bmp%2BT6Do9fzCh0AgOCv9ZJb3iELP9ekI4Rd1p0Taxn3Ggak%2Fl2Z0dHimp%2FUZ1L%2FHKUblL75g67OeJJeTG9tyzkAMXzkDiASr9yiOI7x7Y%2FrgT7aXeIMUWoWmE1rxBPfUtXVSKsIaLl2O6%2F%2BRNmygKjUfBLY9%2BGgOywQc1qRllspg1jPyVZ3XDldy4R07mXjtIF6U7KAeobNd5PQhb%2BEqRg%2B3DcnmIzvo7dfJ9H96MsqW7akxamFAodP5TP8Q7DdvWNznI64SiIq4yg8Rxs4%2BwCqSdhXoMPno4McGOqUBmJyRM5V5nJaO7Itmy7u%2F%2Ftj%2BBdbcz3iECkA%2FZxLXg%2FFjbOaTvU2NrKY%2Bxo1V%2B7p4B9JuJFmPGiSYAugxoEKs9zCVSlIexzieCfk1kzBqa0cFXudGCftli4gslkutzUrpA5kBtJ1z85bC5gyDacuDmqsNdE25G%2B5WWi8WEIabpwAIJcplQBXn2RiCT7Qxx3HeFQjg25F5gY2qNdAHW00fdUV9TL3M&X-Amz-Signature=9de1d96d419abb88621acfb07f245932bacce5aeec8fece86506eeb385caaea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OVMO6M%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB6YJ%2BNASLNq7QqahrHOWtGhQHCBrWq72YJmJSuDTsL%2BAiEArpAdhdqRCpIzhUFlQc28uzEE9WhFaCqsKIlX61e3MNwq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPCOsFl4qi3%2FSZvUKSrcA6pRstE5QuxTDkbUOhLBJLWsu2eLB0pAxTazciCQOKltSZdGQV89SOTw7Om%2FTJqVd4dVWsC4%2FFxZsmLGT2uQDEdCky5ekwgGbvzFBDQoVH%2BI%2FT2oel8Z7s1BLiJiC9TRfcbws9N57lh319iIViY%2B8y3SojQdWmzhskvw1QdUnNtGSpo1veT3LJqkPbM%2Fm7USMnw6hXGGWID8AsH6quzoQu53Lps%2BalbZqp2ZQxIhU0xVfidOJuS5ET7j%2BhwLNuzpgXur2%2FQhD%2B4LBZetJXkvqNbKkzyERSpgC34qveVVgwmbNwTzt2iWShFwlsicNchwyOZ2K55dBtt7hsuu%2Be7rfoOvYC2Id%2F3F%2Bmp%2BT6Do9fzCh0AgOCv9ZJb3iELP9ekI4Rd1p0Taxn3Ggak%2Fl2Z0dHimp%2FUZ1L%2FHKUblL75g67OeJJeTG9tyzkAMXzkDiASr9yiOI7x7Y%2FrgT7aXeIMUWoWmE1rxBPfUtXVSKsIaLl2O6%2F%2BRNmygKjUfBLY9%2BGgOywQc1qRllspg1jPyVZ3XDldy4R07mXjtIF6U7KAeobNd5PQhb%2BEqRg%2B3DcnmIzvo7dfJ9H96MsqW7akxamFAodP5TP8Q7DdvWNznI64SiIq4yg8Rxs4%2BwCqSdhXoMPno4McGOqUBmJyRM5V5nJaO7Itmy7u%2F%2Ftj%2BBdbcz3iECkA%2FZxLXg%2FFjbOaTvU2NrKY%2Bxo1V%2B7p4B9JuJFmPGiSYAugxoEKs9zCVSlIexzieCfk1kzBqa0cFXudGCftli4gslkutzUrpA5kBtJ1z85bC5gyDacuDmqsNdE25G%2B5WWi8WEIabpwAIJcplQBXn2RiCT7Qxx3HeFQjg25F5gY2qNdAHW00fdUV9TL3M&X-Amz-Signature=eda9a12aaeae008ccb60520d33031c7de67ce03bc5d66626ee8e607b92eead33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFETIRUW%2F20251022%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251022T025747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIE01wkEopdBib8AUxAKcaDqNzu1%2FWhgPPJYbitws3GT0AiBZFWev%2FZPsMUzotCx19EEjPc%2B2mE%2BHGRuicvDDvjcz6yr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMbkv7akeFpcvcA8xHKtwDrEip7xOK3fdwsA2gnLx5OdjuN%2BdkR1zlDs%2Fj3dC%2BfWZxaUqC%2Bzia1stGPBJ4ft%2F8rbtbmJsqm%2FwZyinciYAgfMNH7DYtZlTAIDPuLx7MauEJd%2FVSLNLCdwY89Dlnx67YVYY%2FYjiUql%2Fmws3FDjFoat1Ib8KntwbXyNCee8mxYmsZ9Hv102ANCiIdj7Z2U4ChZBHhh%2BJAkj%2FtC57AafRxZat1f64aRO%2FU08CLhr9VXV%2FG%2Bq2G8Oqy5Yu6EU%2FGWqabIjQBicstzBYAo52wKa9RU0dtoerR7z7YxiWmr2Ithv79bA%2BslK%2Fg1cb63xFIQ8%2Fpfg8YN6C%2BqudD8fA1tZ8D2f5b%2FGXGbeQdECJIdD4fKyRc0ude2dwANOwATFXNNQ4b6G1MbO1QKPsYhmHcN9XRm7VHHhNxlMMMo2QbwuEmXRnjX3jg7lmnz4fU2PhzeE7FpYYJYM7ISe3Rmz47%2BD6LSrBIVpMBZp0No3%2BkddRGAEpYv%2B0sI%2F3VJBQODPt%2FWd0oStqXiwXbZWX96eND7hbl7v%2B60H8ulokEyPns%2BHAwPwMMmXTOVq1tZKipfBAfZ0u%2BDSEruybaAGajmkfCdYw%2BfaEXO7CyWRFGeSbfvpLHEDtS55ZV75RFe6PwP4ww7ufgxwY6pgHxChNYA6VEx0VFImgM1cthKqcrw3S1gti9NtOKLQROuSnyUPmENIVEGPt%2F9ZX2RlquxDMHXBslrY7Pasjw7ABrau4IDgEcR6er5zp1K9yeq4tE1tEAaDLx9MxgJwdISE6jubw3FAOjWoROge2koifPOkB5LEy0IAy7M0XYU3%2B8mVXbpQizsUM3AbgS4SOi2RgO%2F2hgSrJEqriqdZrSr4foB9Wi7wCV&X-Amz-Signature=d08bb02241c253022a5ce13d5d7573c3d2ea28f592831a9f16853d98999188e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

