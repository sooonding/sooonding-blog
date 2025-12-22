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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JD7GYOX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T010925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDusDiCD3st6YKvtgefx3itV2wsEjLuB6A8Ru6GAdt20wIgQvnHc3YXxd5fOXdKF3sjZBwsXUxLwmYRGG2L0QwHTlIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzTRWdMRst74Sq8myrcAyijjXI8Ouij6hRVOqbnPtqY4CEPhaveZeJzQFB1tVMpq%2F9U9iuBdtLe0OnDXvD%2ByMjT7tI4nqL1jIun1ms6QKER%2FatoF6eY4bADPbxoOmgzuD4ki%2BJ%2FaFNwWlOl9eqATqrbwxzJu5c2Ejtz83xGNDW3qzjdq5VSwLxHxccdkn1VYGn2iRjpz1WCJ%2B61rPt32Tuc9Gb1ZJh3nhadHXPqe7uFg6da0t3Z3FxCaIjW7MaFXPXT3djl0DJ%2FNZJPgiNYJgJ3l%2BgdR003nwLJGfwUI%2FhHuDaoPz%2Fr44bmHpmeTdzKf4EHnFodSzzBJ86PjEPWwmIys8sOhJ%2Btx%2FZ7kpJHAu6bXRcbR5fWlLamoCHU1VaCo3TwFTW%2F6J%2Ba82j2DygNW2%2FKAgoVPorX51uq7Cq6vO2e%2FXJQnAzbVVg6o6R43U28LOHeWABur%2F3ZmCmxXOQGhL25YmtDxoGOAdSBYqO5F%2BXw9VQaFxxY6VJAvwz2ZKec9GlYS6DR138vXpkqTa8Uvab%2FDU9W%2BSU2tKCMUw%2B6B0iyysdKWz0YEn4u2W8Ed766Xshj6SM6UoGjdPHFl15bjyfz2tuPPc7mUJMPNJ8owD1brIGQu%2B4NiW9yqtFlgKkPbjZ80DqYJSdZCkUBMPzoocoGOqUBy0ex5arWqu1W9w5LYnP6kMR7FWq0SIz0E1MHLns%2FYSCFXZOdykfhGz3OLu4%2BEKkqUE4hrHYLX9UdiTmTJ9syFf5kI0Hm%2BLboO%2B86WuSOqpULuuUccwCX6%2Bkf%2FT%2B1NYELtChujSTagvGF5g4EFo8j%2B6AtenITaiz7G08PA5ImzfEH7AprgceTbXOhhWBApu%2FPBypki%2BJlU3f0I3h1tE3wZVFTp3Xi&X-Amz-Signature=accddc6459ca084e45cdda3b847b5937de080e8b61b51c18751f26eb238487c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNNAWG7%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T010926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCgdTNx20K6sQCfr0hgC8Zga1sR%2Fgrs%2B77G2rMF1eBCwIhAOMLXmiJhl1i3nNp6W%2B7vfj6gndnYX0XS240GD9L%2FYEgKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3OjV5QgYa2d25r%2F0q3ANRptpnF2czfnKQX06zQZOUCPyj63BAdQYQ0pFcrNPXR6NXJ4%2B5uTg2WQ6Ol9QTdqg0C1xsAy8gNSQuzYJQ60kEWA6%2BxFFN9DJMj8rzuKtBiafKIUjzu%2FRAX8JrlR1a%2FL0nkQ8kCcidjL3ezIfXaK9jXh0QhlR3JcwzQ9LLAjCzYQar%2BAJ2kjzJoUQLI8iUcOPzf3mn00H0NfUN%2BCN6RvwrDKVVLCzsB0cQsdYzSeVen2T3XTzjxmdegBQv0EE7JlpAW2epJLTLclgu7Ypx7Eile7hM%2F2t7zFW4oijbYrzDfZH18EmeylRmJYrF0MQz54jOwiydyqX9pmkekNQKDYiA0XviozFHNFhkzQu8RvmcALcI8bDcOopAAFOI8JSeKc2768%2F37I5Lv4IW%2FGYW0fJJmGRGp%2By9X1JTiKj2rcmA03uSPDgqIBm3Zgv9sQML1GSDHK0ezdyFDIbVAxuMLduTmT9Es8yOZdPT7u78bk9g5KeFTV1EBrWT3Ag0n7RGc3NrgUbosBLjuRUrnEoWTZIO5ExoWqEMowdSa%2BNQFUPN99833xEgBBew1fGcnKCos%2FayhJXDrCnJgD%2B6ldCFpvpmwMxElGmBaJwZj0UI4l5eCpn02qPO3xW%2B0A8P%2BjDs6KHKBjqkAQXclhipPjPSrnnHRD71yLx70RrWx9RrUpPPxpTaWKRgSOZ5pgNsApQK%2Ffql9C%2By9IFhPwujtNIVIXok1J5gzmU%2F4PG6jnEkPoBqGfylu7UjM5B4Xop%2FuJfw1Q8X7owe3gS6o6BTMwtGA8ijslxtVuA%2BaAB20TlJ0A0M6nOORRcfZB%2FFu8IxEEkeGPCDol99lw8BZFi2rW4PW4XouPQnGsvpkaAL&X-Amz-Signature=10384c7f968b6d9f3d82be69b3260dca9fcc7410d5f453bc4cc7f2bdb2d9d365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNNAWG7%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T010926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCgdTNx20K6sQCfr0hgC8Zga1sR%2Fgrs%2B77G2rMF1eBCwIhAOMLXmiJhl1i3nNp6W%2B7vfj6gndnYX0XS240GD9L%2FYEgKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3OjV5QgYa2d25r%2F0q3ANRptpnF2czfnKQX06zQZOUCPyj63BAdQYQ0pFcrNPXR6NXJ4%2B5uTg2WQ6Ol9QTdqg0C1xsAy8gNSQuzYJQ60kEWA6%2BxFFN9DJMj8rzuKtBiafKIUjzu%2FRAX8JrlR1a%2FL0nkQ8kCcidjL3ezIfXaK9jXh0QhlR3JcwzQ9LLAjCzYQar%2BAJ2kjzJoUQLI8iUcOPzf3mn00H0NfUN%2BCN6RvwrDKVVLCzsB0cQsdYzSeVen2T3XTzjxmdegBQv0EE7JlpAW2epJLTLclgu7Ypx7Eile7hM%2F2t7zFW4oijbYrzDfZH18EmeylRmJYrF0MQz54jOwiydyqX9pmkekNQKDYiA0XviozFHNFhkzQu8RvmcALcI8bDcOopAAFOI8JSeKc2768%2F37I5Lv4IW%2FGYW0fJJmGRGp%2By9X1JTiKj2rcmA03uSPDgqIBm3Zgv9sQML1GSDHK0ezdyFDIbVAxuMLduTmT9Es8yOZdPT7u78bk9g5KeFTV1EBrWT3Ag0n7RGc3NrgUbosBLjuRUrnEoWTZIO5ExoWqEMowdSa%2BNQFUPN99833xEgBBew1fGcnKCos%2FayhJXDrCnJgD%2B6ldCFpvpmwMxElGmBaJwZj0UI4l5eCpn02qPO3xW%2B0A8P%2BjDs6KHKBjqkAQXclhipPjPSrnnHRD71yLx70RrWx9RrUpPPxpTaWKRgSOZ5pgNsApQK%2Ffql9C%2By9IFhPwujtNIVIXok1J5gzmU%2F4PG6jnEkPoBqGfylu7UjM5B4Xop%2FuJfw1Q8X7owe3gS6o6BTMwtGA8ijslxtVuA%2BaAB20TlJ0A0M6nOORRcfZB%2FFu8IxEEkeGPCDol99lw8BZFi2rW4PW4XouPQnGsvpkaAL&X-Amz-Signature=f0d305a076c5b1493b0bf45677696bf3ae6dfb062ccc95abbe9a014129e6b08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNNAWG7%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T010926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCgdTNx20K6sQCfr0hgC8Zga1sR%2Fgrs%2B77G2rMF1eBCwIhAOMLXmiJhl1i3nNp6W%2B7vfj6gndnYX0XS240GD9L%2FYEgKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3OjV5QgYa2d25r%2F0q3ANRptpnF2czfnKQX06zQZOUCPyj63BAdQYQ0pFcrNPXR6NXJ4%2B5uTg2WQ6Ol9QTdqg0C1xsAy8gNSQuzYJQ60kEWA6%2BxFFN9DJMj8rzuKtBiafKIUjzu%2FRAX8JrlR1a%2FL0nkQ8kCcidjL3ezIfXaK9jXh0QhlR3JcwzQ9LLAjCzYQar%2BAJ2kjzJoUQLI8iUcOPzf3mn00H0NfUN%2BCN6RvwrDKVVLCzsB0cQsdYzSeVen2T3XTzjxmdegBQv0EE7JlpAW2epJLTLclgu7Ypx7Eile7hM%2F2t7zFW4oijbYrzDfZH18EmeylRmJYrF0MQz54jOwiydyqX9pmkekNQKDYiA0XviozFHNFhkzQu8RvmcALcI8bDcOopAAFOI8JSeKc2768%2F37I5Lv4IW%2FGYW0fJJmGRGp%2By9X1JTiKj2rcmA03uSPDgqIBm3Zgv9sQML1GSDHK0ezdyFDIbVAxuMLduTmT9Es8yOZdPT7u78bk9g5KeFTV1EBrWT3Ag0n7RGc3NrgUbosBLjuRUrnEoWTZIO5ExoWqEMowdSa%2BNQFUPN99833xEgBBew1fGcnKCos%2FayhJXDrCnJgD%2B6ldCFpvpmwMxElGmBaJwZj0UI4l5eCpn02qPO3xW%2B0A8P%2BjDs6KHKBjqkAQXclhipPjPSrnnHRD71yLx70RrWx9RrUpPPxpTaWKRgSOZ5pgNsApQK%2Ffql9C%2By9IFhPwujtNIVIXok1J5gzmU%2F4PG6jnEkPoBqGfylu7UjM5B4Xop%2FuJfw1Q8X7owe3gS6o6BTMwtGA8ijslxtVuA%2BaAB20TlJ0A0M6nOORRcfZB%2FFu8IxEEkeGPCDol99lw8BZFi2rW4PW4XouPQnGsvpkaAL&X-Amz-Signature=e8c03c4ab990caba2daad250b92ea86b55570d76a5504e7e2d6e4d610259d6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNNAWG7%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T010926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCgdTNx20K6sQCfr0hgC8Zga1sR%2Fgrs%2B77G2rMF1eBCwIhAOMLXmiJhl1i3nNp6W%2B7vfj6gndnYX0XS240GD9L%2FYEgKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3OjV5QgYa2d25r%2F0q3ANRptpnF2czfnKQX06zQZOUCPyj63BAdQYQ0pFcrNPXR6NXJ4%2B5uTg2WQ6Ol9QTdqg0C1xsAy8gNSQuzYJQ60kEWA6%2BxFFN9DJMj8rzuKtBiafKIUjzu%2FRAX8JrlR1a%2FL0nkQ8kCcidjL3ezIfXaK9jXh0QhlR3JcwzQ9LLAjCzYQar%2BAJ2kjzJoUQLI8iUcOPzf3mn00H0NfUN%2BCN6RvwrDKVVLCzsB0cQsdYzSeVen2T3XTzjxmdegBQv0EE7JlpAW2epJLTLclgu7Ypx7Eile7hM%2F2t7zFW4oijbYrzDfZH18EmeylRmJYrF0MQz54jOwiydyqX9pmkekNQKDYiA0XviozFHNFhkzQu8RvmcALcI8bDcOopAAFOI8JSeKc2768%2F37I5Lv4IW%2FGYW0fJJmGRGp%2By9X1JTiKj2rcmA03uSPDgqIBm3Zgv9sQML1GSDHK0ezdyFDIbVAxuMLduTmT9Es8yOZdPT7u78bk9g5KeFTV1EBrWT3Ag0n7RGc3NrgUbosBLjuRUrnEoWTZIO5ExoWqEMowdSa%2BNQFUPN99833xEgBBew1fGcnKCos%2FayhJXDrCnJgD%2B6ldCFpvpmwMxElGmBaJwZj0UI4l5eCpn02qPO3xW%2B0A8P%2BjDs6KHKBjqkAQXclhipPjPSrnnHRD71yLx70RrWx9RrUpPPxpTaWKRgSOZ5pgNsApQK%2Ffql9C%2By9IFhPwujtNIVIXok1J5gzmU%2F4PG6jnEkPoBqGfylu7UjM5B4Xop%2FuJfw1Q8X7owe3gS6o6BTMwtGA8ijslxtVuA%2BaAB20TlJ0A0M6nOORRcfZB%2FFu8IxEEkeGPCDol99lw8BZFi2rW4PW4XouPQnGsvpkaAL&X-Amz-Signature=609d128628d9f28e7119bf2aabe52a4f08413e147920ea1d00f66f0cbc5456cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNNAWG7%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T010926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCgdTNx20K6sQCfr0hgC8Zga1sR%2Fgrs%2B77G2rMF1eBCwIhAOMLXmiJhl1i3nNp6W%2B7vfj6gndnYX0XS240GD9L%2FYEgKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3OjV5QgYa2d25r%2F0q3ANRptpnF2czfnKQX06zQZOUCPyj63BAdQYQ0pFcrNPXR6NXJ4%2B5uTg2WQ6Ol9QTdqg0C1xsAy8gNSQuzYJQ60kEWA6%2BxFFN9DJMj8rzuKtBiafKIUjzu%2FRAX8JrlR1a%2FL0nkQ8kCcidjL3ezIfXaK9jXh0QhlR3JcwzQ9LLAjCzYQar%2BAJ2kjzJoUQLI8iUcOPzf3mn00H0NfUN%2BCN6RvwrDKVVLCzsB0cQsdYzSeVen2T3XTzjxmdegBQv0EE7JlpAW2epJLTLclgu7Ypx7Eile7hM%2F2t7zFW4oijbYrzDfZH18EmeylRmJYrF0MQz54jOwiydyqX9pmkekNQKDYiA0XviozFHNFhkzQu8RvmcALcI8bDcOopAAFOI8JSeKc2768%2F37I5Lv4IW%2FGYW0fJJmGRGp%2By9X1JTiKj2rcmA03uSPDgqIBm3Zgv9sQML1GSDHK0ezdyFDIbVAxuMLduTmT9Es8yOZdPT7u78bk9g5KeFTV1EBrWT3Ag0n7RGc3NrgUbosBLjuRUrnEoWTZIO5ExoWqEMowdSa%2BNQFUPN99833xEgBBew1fGcnKCos%2FayhJXDrCnJgD%2B6ldCFpvpmwMxElGmBaJwZj0UI4l5eCpn02qPO3xW%2B0A8P%2BjDs6KHKBjqkAQXclhipPjPSrnnHRD71yLx70RrWx9RrUpPPxpTaWKRgSOZ5pgNsApQK%2Ffql9C%2By9IFhPwujtNIVIXok1J5gzmU%2F4PG6jnEkPoBqGfylu7UjM5B4Xop%2FuJfw1Q8X7owe3gS6o6BTMwtGA8ijslxtVuA%2BaAB20TlJ0A0M6nOORRcfZB%2FFu8IxEEkeGPCDol99lw8BZFi2rW4PW4XouPQnGsvpkaAL&X-Amz-Signature=3db7fdf96db3f12fdd6874dc5bc433df3d7b485a109d5b473f9eaa010e7e0837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JD7GYOX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T010925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDusDiCD3st6YKvtgefx3itV2wsEjLuB6A8Ru6GAdt20wIgQvnHc3YXxd5fOXdKF3sjZBwsXUxLwmYRGG2L0QwHTlIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzTRWdMRst74Sq8myrcAyijjXI8Ouij6hRVOqbnPtqY4CEPhaveZeJzQFB1tVMpq%2F9U9iuBdtLe0OnDXvD%2ByMjT7tI4nqL1jIun1ms6QKER%2FatoF6eY4bADPbxoOmgzuD4ki%2BJ%2FaFNwWlOl9eqATqrbwxzJu5c2Ejtz83xGNDW3qzjdq5VSwLxHxccdkn1VYGn2iRjpz1WCJ%2B61rPt32Tuc9Gb1ZJh3nhadHXPqe7uFg6da0t3Z3FxCaIjW7MaFXPXT3djl0DJ%2FNZJPgiNYJgJ3l%2BgdR003nwLJGfwUI%2FhHuDaoPz%2Fr44bmHpmeTdzKf4EHnFodSzzBJ86PjEPWwmIys8sOhJ%2Btx%2FZ7kpJHAu6bXRcbR5fWlLamoCHU1VaCo3TwFTW%2F6J%2Ba82j2DygNW2%2FKAgoVPorX51uq7Cq6vO2e%2FXJQnAzbVVg6o6R43U28LOHeWABur%2F3ZmCmxXOQGhL25YmtDxoGOAdSBYqO5F%2BXw9VQaFxxY6VJAvwz2ZKec9GlYS6DR138vXpkqTa8Uvab%2FDU9W%2BSU2tKCMUw%2B6B0iyysdKWz0YEn4u2W8Ed766Xshj6SM6UoGjdPHFl15bjyfz2tuPPc7mUJMPNJ8owD1brIGQu%2B4NiW9yqtFlgKkPbjZ80DqYJSdZCkUBMPzoocoGOqUBy0ex5arWqu1W9w5LYnP6kMR7FWq0SIz0E1MHLns%2FYSCFXZOdykfhGz3OLu4%2BEKkqUE4hrHYLX9UdiTmTJ9syFf5kI0Hm%2BLboO%2B86WuSOqpULuuUccwCX6%2Bkf%2FT%2B1NYELtChujSTagvGF5g4EFo8j%2B6AtenITaiz7G08PA5ImzfEH7AprgceTbXOhhWBApu%2FPBypki%2BJlU3f0I3h1tE3wZVFTp3Xi&X-Amz-Signature=3d74525b3e05aac41259fba276070027e7d1ade231a53bbf6471a5652862fab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

