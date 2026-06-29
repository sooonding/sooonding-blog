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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCPFXTZZ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC%2BT7QoahHUPz7OT6JmUI%2Fqt%2B5fzFX0fAb22nYiR3i7AiEAms7KEZ17pSBtNNrFn6%2FBTWFB%2B4QljuZil%2BOh7B7oWtMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNuvvLi%2B7LoAnsn1CrcA29bPT%2FwXWXKzkFWU0A4qBwZ6cjlgtRzqmwp9FGVwJlHiEiRHeXblVI%2FSjqJt7oj%2BqmZZs3AEQ%2BUUWURLjM1NZccIcfMJoY%2BauyM0FG9RryD%2Bzpl4nUppbp9PyPGxkd6lL5I2K6Cl7958q32UvcyuE%2FANdl0C%2BiLTk90wOxcWBIwKp1ONAm0utQRCdCd7VH5eo5VStxtAq2kvtbQl4eoVKMDwIlyEizh1S94E5As7FUF%2BwqkLp1Z7d60CNdrSXrn41AekOCzmkXkInv8ZtRubLEdO%2BRxsXBZV6eT9wZDeAJXxYIWxtc8xmX3sGDtt1y27yl0brBIo7vVZl3kBDXeXZjjPJcbwJicUCDMHyQRQ%2BCTJg9Y%2FgFPoaBbtzU2FRfbEfZzWq00ImK1mUr3SsF8NBbGiXFpJ1MlOiEIlj%2F%2B3f8jAdDDvkCJIWZmO%2FIGsK8Q%2B1Dm3%2Fs0t%2F5HMEHdyHdorRB1SjFgaa4dJ9%2BT2XEVWQjF%2Fq6can7ntb16uL2UcAfSEojo4a0stpyFibUTv%2BAwD5dyHCerPURFO%2FjM0jNumZKcrXU2ydmynSPiE4Q1HHNT%2BQjpVEE9lL%2B76YSlNmjsd3TbDd3NQOriDdUZyrC6w%2BcqjhhM8qIu8ozQuh%2F6MK3Ah9IGOqUBb5PPv3GlEXPtq%2FIrzkyG%2Bsvk8jxIzaSS%2BORANg%2BVR8oWEOznYatK9S7wHnqfyyFu6u4m4QM3oDhtHw5cp12bCUmiz6bBmwrmQr1niZ%2FLwlMVGp9fMmvFsWCUClDVVsE4%2BHj5VK1UdSnEKAGrO8Bk74u9rYRNVh7vI6WCJqfH%2BZi1q42HBCSn4uf4RxqotJo63JIe%2BU4PM%2BDYnuSM59mbRKKgOeE3&X-Amz-Signature=abcbfa7f6d5b3ec06b101905f49b320eb32d404ff44c05c2cdf3046da04fb60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREMXLPF%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTIZyXknAlcRhu9dNONCzXVqxrmn2EYwIUb1PkWBBLrAiEAt%2FlR34L1ykais%2Fqrzf74FHejGpYkG%2Ft30%2FApH%2FIyWdMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAlBKHlBctmKKNjwCrcA7s1IhqXs%2BQGgd8zpHeG89w53vQcEtCD%2BU%2FKLdjn4r79207qHq%2BXcMgm1Kbazb03qYQVvDSGUadQK3tzeG5HM%2B%2FrLnsv0OwH3%2BHakitem9x%2FThhn5gWce1miOv4s%2B%2FbJOVlHkb913cLbYk7kBLfDTDoDW3L5mUPkOan%2BgsMpQbgsSjLyD8jCHqxcWdON8Df6yBRDPqtR14jR11peC%2FwENlDQ8H8gTJ08N9ibg0quZkPlvXYUsjowAIURosCPY4Nb%2BeyqjJUSE59B1ZMngO1T%2BPcugvkppyU9uwOUFJY8fgIoBgkGhiWYklldm61fTWze%2Bm1W9kn0eCo6E0ELuV5kjuqUOWRo0j9PDXQINjQOQBvZypKlIz1NkWGoTcP7SLTOtpZcU0lhCTI%2BliVjtvIGHukLVPubyVknasIEdZMTm6FXA4KV%2FHbB0f51cUi7C9ctJuOiYcNcczlZjxnU4rADotwvJYWIRr62T31UtxVHS9TJNAlCMpTT7xV9%2BeWOd3E3OY03Un6RzxXbNarun9V%2FktTNQk7gBv1fZxzwIhQJHqRq50l%2FFSYImbyOCLFDNYTxT2xC3CdUSL3BJjoq3%2B1mSl5J6dWDxTpa2N5E3GELKPHm%2F2dv8LP%2Fh%2FADh0E4MPbBh9IGOqUBD8xuunAAUkNKfti%2BPvROKGtJjeEjDe%2BhehK4MzN5HvLkfaPbo00BCeOmk3Xt759ERa5tl0SVLakzU%2FtAdkqWBKeOFhvyb9m0h7%2FBIWJjELjEeLtZEUCIVUSrX141Jd7ah0Ez2b3rCJt6zi528TOkBZjjlSCQ%2Fyuu1oIXKkL%2BcJB83em3RaC9iO%2B65lI26vUILwgSPXsbvy%2FbbeF9U9kH2mty9Lpp&X-Amz-Signature=a9413ad187dfc69d2ee4dddd50dfc082a8b1ada42c38dacda82fc49988abae3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREMXLPF%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTIZyXknAlcRhu9dNONCzXVqxrmn2EYwIUb1PkWBBLrAiEAt%2FlR34L1ykais%2Fqrzf74FHejGpYkG%2Ft30%2FApH%2FIyWdMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAlBKHlBctmKKNjwCrcA7s1IhqXs%2BQGgd8zpHeG89w53vQcEtCD%2BU%2FKLdjn4r79207qHq%2BXcMgm1Kbazb03qYQVvDSGUadQK3tzeG5HM%2B%2FrLnsv0OwH3%2BHakitem9x%2FThhn5gWce1miOv4s%2B%2FbJOVlHkb913cLbYk7kBLfDTDoDW3L5mUPkOan%2BgsMpQbgsSjLyD8jCHqxcWdON8Df6yBRDPqtR14jR11peC%2FwENlDQ8H8gTJ08N9ibg0quZkPlvXYUsjowAIURosCPY4Nb%2BeyqjJUSE59B1ZMngO1T%2BPcugvkppyU9uwOUFJY8fgIoBgkGhiWYklldm61fTWze%2Bm1W9kn0eCo6E0ELuV5kjuqUOWRo0j9PDXQINjQOQBvZypKlIz1NkWGoTcP7SLTOtpZcU0lhCTI%2BliVjtvIGHukLVPubyVknasIEdZMTm6FXA4KV%2FHbB0f51cUi7C9ctJuOiYcNcczlZjxnU4rADotwvJYWIRr62T31UtxVHS9TJNAlCMpTT7xV9%2BeWOd3E3OY03Un6RzxXbNarun9V%2FktTNQk7gBv1fZxzwIhQJHqRq50l%2FFSYImbyOCLFDNYTxT2xC3CdUSL3BJjoq3%2B1mSl5J6dWDxTpa2N5E3GELKPHm%2F2dv8LP%2Fh%2FADh0E4MPbBh9IGOqUBD8xuunAAUkNKfti%2BPvROKGtJjeEjDe%2BhehK4MzN5HvLkfaPbo00BCeOmk3Xt759ERa5tl0SVLakzU%2FtAdkqWBKeOFhvyb9m0h7%2FBIWJjELjEeLtZEUCIVUSrX141Jd7ah0Ez2b3rCJt6zi528TOkBZjjlSCQ%2Fyuu1oIXKkL%2BcJB83em3RaC9iO%2B65lI26vUILwgSPXsbvy%2FbbeF9U9kH2mty9Lpp&X-Amz-Signature=82222204903c6b60c5e0d90b698f4c8c468822e3e1d6c5adf1276eeb4e5e702b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREMXLPF%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTIZyXknAlcRhu9dNONCzXVqxrmn2EYwIUb1PkWBBLrAiEAt%2FlR34L1ykais%2Fqrzf74FHejGpYkG%2Ft30%2FApH%2FIyWdMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAlBKHlBctmKKNjwCrcA7s1IhqXs%2BQGgd8zpHeG89w53vQcEtCD%2BU%2FKLdjn4r79207qHq%2BXcMgm1Kbazb03qYQVvDSGUadQK3tzeG5HM%2B%2FrLnsv0OwH3%2BHakitem9x%2FThhn5gWce1miOv4s%2B%2FbJOVlHkb913cLbYk7kBLfDTDoDW3L5mUPkOan%2BgsMpQbgsSjLyD8jCHqxcWdON8Df6yBRDPqtR14jR11peC%2FwENlDQ8H8gTJ08N9ibg0quZkPlvXYUsjowAIURosCPY4Nb%2BeyqjJUSE59B1ZMngO1T%2BPcugvkppyU9uwOUFJY8fgIoBgkGhiWYklldm61fTWze%2Bm1W9kn0eCo6E0ELuV5kjuqUOWRo0j9PDXQINjQOQBvZypKlIz1NkWGoTcP7SLTOtpZcU0lhCTI%2BliVjtvIGHukLVPubyVknasIEdZMTm6FXA4KV%2FHbB0f51cUi7C9ctJuOiYcNcczlZjxnU4rADotwvJYWIRr62T31UtxVHS9TJNAlCMpTT7xV9%2BeWOd3E3OY03Un6RzxXbNarun9V%2FktTNQk7gBv1fZxzwIhQJHqRq50l%2FFSYImbyOCLFDNYTxT2xC3CdUSL3BJjoq3%2B1mSl5J6dWDxTpa2N5E3GELKPHm%2F2dv8LP%2Fh%2FADh0E4MPbBh9IGOqUBD8xuunAAUkNKfti%2BPvROKGtJjeEjDe%2BhehK4MzN5HvLkfaPbo00BCeOmk3Xt759ERa5tl0SVLakzU%2FtAdkqWBKeOFhvyb9m0h7%2FBIWJjELjEeLtZEUCIVUSrX141Jd7ah0Ez2b3rCJt6zi528TOkBZjjlSCQ%2Fyuu1oIXKkL%2BcJB83em3RaC9iO%2B65lI26vUILwgSPXsbvy%2FbbeF9U9kH2mty9Lpp&X-Amz-Signature=ebc6903dc35bae88a71ca328416229aeb08016454e264964d8a8887582f6da59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREMXLPF%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTIZyXknAlcRhu9dNONCzXVqxrmn2EYwIUb1PkWBBLrAiEAt%2FlR34L1ykais%2Fqrzf74FHejGpYkG%2Ft30%2FApH%2FIyWdMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAlBKHlBctmKKNjwCrcA7s1IhqXs%2BQGgd8zpHeG89w53vQcEtCD%2BU%2FKLdjn4r79207qHq%2BXcMgm1Kbazb03qYQVvDSGUadQK3tzeG5HM%2B%2FrLnsv0OwH3%2BHakitem9x%2FThhn5gWce1miOv4s%2B%2FbJOVlHkb913cLbYk7kBLfDTDoDW3L5mUPkOan%2BgsMpQbgsSjLyD8jCHqxcWdON8Df6yBRDPqtR14jR11peC%2FwENlDQ8H8gTJ08N9ibg0quZkPlvXYUsjowAIURosCPY4Nb%2BeyqjJUSE59B1ZMngO1T%2BPcugvkppyU9uwOUFJY8fgIoBgkGhiWYklldm61fTWze%2Bm1W9kn0eCo6E0ELuV5kjuqUOWRo0j9PDXQINjQOQBvZypKlIz1NkWGoTcP7SLTOtpZcU0lhCTI%2BliVjtvIGHukLVPubyVknasIEdZMTm6FXA4KV%2FHbB0f51cUi7C9ctJuOiYcNcczlZjxnU4rADotwvJYWIRr62T31UtxVHS9TJNAlCMpTT7xV9%2BeWOd3E3OY03Un6RzxXbNarun9V%2FktTNQk7gBv1fZxzwIhQJHqRq50l%2FFSYImbyOCLFDNYTxT2xC3CdUSL3BJjoq3%2B1mSl5J6dWDxTpa2N5E3GELKPHm%2F2dv8LP%2Fh%2FADh0E4MPbBh9IGOqUBD8xuunAAUkNKfti%2BPvROKGtJjeEjDe%2BhehK4MzN5HvLkfaPbo00BCeOmk3Xt759ERa5tl0SVLakzU%2FtAdkqWBKeOFhvyb9m0h7%2FBIWJjELjEeLtZEUCIVUSrX141Jd7ah0Ez2b3rCJt6zi528TOkBZjjlSCQ%2Fyuu1oIXKkL%2BcJB83em3RaC9iO%2B65lI26vUILwgSPXsbvy%2FbbeF9U9kH2mty9Lpp&X-Amz-Signature=c818dba21a55cea248e40207638749ec9b7c370b740dc688a901149917f8d645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YREMXLPF%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTIZyXknAlcRhu9dNONCzXVqxrmn2EYwIUb1PkWBBLrAiEAt%2FlR34L1ykais%2Fqrzf74FHejGpYkG%2Ft30%2FApH%2FIyWdMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAlBKHlBctmKKNjwCrcA7s1IhqXs%2BQGgd8zpHeG89w53vQcEtCD%2BU%2FKLdjn4r79207qHq%2BXcMgm1Kbazb03qYQVvDSGUadQK3tzeG5HM%2B%2FrLnsv0OwH3%2BHakitem9x%2FThhn5gWce1miOv4s%2B%2FbJOVlHkb913cLbYk7kBLfDTDoDW3L5mUPkOan%2BgsMpQbgsSjLyD8jCHqxcWdON8Df6yBRDPqtR14jR11peC%2FwENlDQ8H8gTJ08N9ibg0quZkPlvXYUsjowAIURosCPY4Nb%2BeyqjJUSE59B1ZMngO1T%2BPcugvkppyU9uwOUFJY8fgIoBgkGhiWYklldm61fTWze%2Bm1W9kn0eCo6E0ELuV5kjuqUOWRo0j9PDXQINjQOQBvZypKlIz1NkWGoTcP7SLTOtpZcU0lhCTI%2BliVjtvIGHukLVPubyVknasIEdZMTm6FXA4KV%2FHbB0f51cUi7C9ctJuOiYcNcczlZjxnU4rADotwvJYWIRr62T31UtxVHS9TJNAlCMpTT7xV9%2BeWOd3E3OY03Un6RzxXbNarun9V%2FktTNQk7gBv1fZxzwIhQJHqRq50l%2FFSYImbyOCLFDNYTxT2xC3CdUSL3BJjoq3%2B1mSl5J6dWDxTpa2N5E3GELKPHm%2F2dv8LP%2Fh%2FADh0E4MPbBh9IGOqUBD8xuunAAUkNKfti%2BPvROKGtJjeEjDe%2BhehK4MzN5HvLkfaPbo00BCeOmk3Xt759ERa5tl0SVLakzU%2FtAdkqWBKeOFhvyb9m0h7%2FBIWJjELjEeLtZEUCIVUSrX141Jd7ah0Ez2b3rCJt6zi528TOkBZjjlSCQ%2Fyuu1oIXKkL%2BcJB83em3RaC9iO%2B65lI26vUILwgSPXsbvy%2FbbeF9U9kH2mty9Lpp&X-Amz-Signature=6dd6c458b9a6c4ac70f4d71a06935573d6152b993ff2243989a6b6596100eb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCPFXTZZ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICC%2BT7QoahHUPz7OT6JmUI%2Fqt%2B5fzFX0fAb22nYiR3i7AiEAms7KEZ17pSBtNNrFn6%2FBTWFB%2B4QljuZil%2BOh7B7oWtMqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNuvvLi%2B7LoAnsn1CrcA29bPT%2FwXWXKzkFWU0A4qBwZ6cjlgtRzqmwp9FGVwJlHiEiRHeXblVI%2FSjqJt7oj%2BqmZZs3AEQ%2BUUWURLjM1NZccIcfMJoY%2BauyM0FG9RryD%2Bzpl4nUppbp9PyPGxkd6lL5I2K6Cl7958q32UvcyuE%2FANdl0C%2BiLTk90wOxcWBIwKp1ONAm0utQRCdCd7VH5eo5VStxtAq2kvtbQl4eoVKMDwIlyEizh1S94E5As7FUF%2BwqkLp1Z7d60CNdrSXrn41AekOCzmkXkInv8ZtRubLEdO%2BRxsXBZV6eT9wZDeAJXxYIWxtc8xmX3sGDtt1y27yl0brBIo7vVZl3kBDXeXZjjPJcbwJicUCDMHyQRQ%2BCTJg9Y%2FgFPoaBbtzU2FRfbEfZzWq00ImK1mUr3SsF8NBbGiXFpJ1MlOiEIlj%2F%2B3f8jAdDDvkCJIWZmO%2FIGsK8Q%2B1Dm3%2Fs0t%2F5HMEHdyHdorRB1SjFgaa4dJ9%2BT2XEVWQjF%2Fq6can7ntb16uL2UcAfSEojo4a0stpyFibUTv%2BAwD5dyHCerPURFO%2FjM0jNumZKcrXU2ydmynSPiE4Q1HHNT%2BQjpVEE9lL%2B76YSlNmjsd3TbDd3NQOriDdUZyrC6w%2BcqjhhM8qIu8ozQuh%2F6MK3Ah9IGOqUBb5PPv3GlEXPtq%2FIrzkyG%2Bsvk8jxIzaSS%2BORANg%2BVR8oWEOznYatK9S7wHnqfyyFu6u4m4QM3oDhtHw5cp12bCUmiz6bBmwrmQr1niZ%2FLwlMVGp9fMmvFsWCUClDVVsE4%2BHj5VK1UdSnEKAGrO8Bk74u9rYRNVh7vI6WCJqfH%2BZi1q42HBCSn4uf4RxqotJo63JIe%2BU4PM%2BDYnuSM59mbRKKgOeE3&X-Amz-Signature=21a6985722faead7ce960b9a9a2b69806ef9b23d4c9e75bf759146ce799beb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

