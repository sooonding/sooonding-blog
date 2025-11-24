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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCT5Z7R%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T010702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD69b01AmhLeFlS6phJgOBuOEoOYZ%2BF5rL39Z9bAJnVyQIgSCHLJjBAH2LVb2l%2F81e4TSYTDdLG5qpqzPbKZ%2Buh76cq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDChYsmsJzPs8SmqKqSrcA9UR2afcnb3RdKsZfW5jn83OTF7DIvIhJ5Xj8U9iVFf5yGsgmG8%2FPv%2BAExs0W2LxDqx4lt5RPg%2FyrzMu8geg3ZhOLpmhGRGl859r7DGm4OwDoOcQoSSKSI0sviP0N45OqB7qb%2B56fKdlfdcyUbipEDAb8LJ9tmQia0bp42Y%2BogQp64xUjS%2FDePYkQaQLRuttew8J%2BvWJ85N5HxjmskGUT8ZBYQQtZDorNngy5eq0FwM%2Fi35u7%2Bit7qZd4sG12b1DV3wx1TtbuEDEFluVLwhYFrD1%2BbvwjK3pKsEzLofII0Ew7Z3whfJdz%2Bjnf00I4VaHr2U1oFTl361Z73QKl4ySHK6SAywUUmSkS1HEl2BtJLgRcOiDqRihsr3XsArQcDCH3dtt6X0%2FGEZLxs0Nu4lc69SJstVgg94uYhTPYzfUR9FmYvd1gBTO6NujI73h%2B9OQE9fu0YUQnNiPA%2B%2FhHwmJmab%2BKDMbAlf4CX8Ky3EahXbO9jhXtj9sBxf2ceXrxJDU5peXm2xq4h4nKe2ROpTf0xr6UARnQbEFFfzHTY8%2FO2y0chHKPPGiz1wIwmfk3euN4kasyNbOaU5S4xIn005wUJ0o1ZGpARFJMnGDNovBnpVnQt%2FYrr1PBQRvrFKQMKTKjskGOqUBUGIbuguc5uHuKX3PMikkA5adyBIeEbpZF%2Br5wbjsRfHnwsW%2BwIjuyCCQvHDo94H%2FV%2BewctCmjNJo%2F%2F945DLXJAbR3yTqkvuV5oEW1QJ8ETXyvnCZ0VYZD9ZWGAVpZX8xQOwm2cbtDs8vKcBOTzxMQZRGVaQZyBByDQSHJ7QSnA3gX5HcckYkpyak%2FlSy7igoWJ1qC8%2FVK6y9VYmZbuvt50XZDXMR&X-Amz-Signature=c109a73c6693440f9a02291bbc0eb40938e9ec6e38e35238f332de263a877904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U52EDJG%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T010702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChrIv8G8%2B6nnDAHe00z442Rxr0riaG3qrYLTRfivwRBwIgP4EYaqxYerUhEEI6ed2xqG2zVwgRaFgSRrWz%2F5j8%2B%2F0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDImRJzfks5oHAv8BIyrcA%2BPPbIaOgk7FlniU6oAx7OTwYmoMXhnfn0FmPfkUjJUCjjdK%2BjZUtQM3k7ugeUbzBXFm6jdiZq05yMFOIm55C420QKIeCNdui7r2IHmiUivoa9JYIrN8Cfx8SU9KPS3Mc0QhRwLJ%2B3BH4twRGrf4wNJBoayn6hnrv0RBMDPoYpHDkYDnauZWllfZx4DIZdwM32UbzDil5tuqR%2BaFyxOOZLU2DxTmLw10ihnCJ8hOEHIfkIC1ZH%2Bo%2BI0zd2xQxhW5Osjv8Bzp62dg1oWO%2FT0b%2F5apyD9wQ7GAoF%2FSHROlx85KMO9vMJoTWxY2ucviSBcrSph%2FxFs7chFK5sMqqdVWK%2Fk0AJbnerTygrW0cHN%2FzkHcxUZN%2BBLDfakGDAv1iMSa%2FRy3NBfkUvVQqhAhQ%2BimDa0RnSRWbEKl4rHApf3yQ6Y3u6Dosy94cbxgtG2cyMbH4V%2FM48yGmShKY%2Brm%2FgxaR4L4csgbvIf6MW%2FziyOaCm6K26O3C7zZoWBQy1x6Llcxuj6rBjuG8170f9vOIsJOK4B5zBuWSC0ZbnsybE5gZ0k5lBceRJ2Or2tYQpNx8wgcZSL2iDomTxTOk4AfZdelfYtKsUS5mhl9NlsNn%2BH1UYuSE3tZ3kQCTaatQ4AwMKXKjskGOqUBJq0wyt1vRRJzE5cKvwDkua%2FQgVBlotWN6GqA48eSEo%2FzS9S8QfXwOXP3Ubpc6wVycGCns4A6OKzMWc1i0PnZTA1nUuNdKB8Fej4PACL8Pa3Yq2moyS7SsPtj4l4wAkpbBrBbUf1MElKEhWyK5MI1eE%2BtJ5IIoGEx0s%2Fhl%2FrfVdL9FGF9Z2wmXAF%2FEuCBpkX2pEo8njqYnUEGCL%2FgwJAQhpywJXzx&X-Amz-Signature=ad8cda7ee167b386297e76c23e3944b5757e9a841995f1b469e22c8846e11858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U52EDJG%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T010702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChrIv8G8%2B6nnDAHe00z442Rxr0riaG3qrYLTRfivwRBwIgP4EYaqxYerUhEEI6ed2xqG2zVwgRaFgSRrWz%2F5j8%2B%2F0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDImRJzfks5oHAv8BIyrcA%2BPPbIaOgk7FlniU6oAx7OTwYmoMXhnfn0FmPfkUjJUCjjdK%2BjZUtQM3k7ugeUbzBXFm6jdiZq05yMFOIm55C420QKIeCNdui7r2IHmiUivoa9JYIrN8Cfx8SU9KPS3Mc0QhRwLJ%2B3BH4twRGrf4wNJBoayn6hnrv0RBMDPoYpHDkYDnauZWllfZx4DIZdwM32UbzDil5tuqR%2BaFyxOOZLU2DxTmLw10ihnCJ8hOEHIfkIC1ZH%2Bo%2BI0zd2xQxhW5Osjv8Bzp62dg1oWO%2FT0b%2F5apyD9wQ7GAoF%2FSHROlx85KMO9vMJoTWxY2ucviSBcrSph%2FxFs7chFK5sMqqdVWK%2Fk0AJbnerTygrW0cHN%2FzkHcxUZN%2BBLDfakGDAv1iMSa%2FRy3NBfkUvVQqhAhQ%2BimDa0RnSRWbEKl4rHApf3yQ6Y3u6Dosy94cbxgtG2cyMbH4V%2FM48yGmShKY%2Brm%2FgxaR4L4csgbvIf6MW%2FziyOaCm6K26O3C7zZoWBQy1x6Llcxuj6rBjuG8170f9vOIsJOK4B5zBuWSC0ZbnsybE5gZ0k5lBceRJ2Or2tYQpNx8wgcZSL2iDomTxTOk4AfZdelfYtKsUS5mhl9NlsNn%2BH1UYuSE3tZ3kQCTaatQ4AwMKXKjskGOqUBJq0wyt1vRRJzE5cKvwDkua%2FQgVBlotWN6GqA48eSEo%2FzS9S8QfXwOXP3Ubpc6wVycGCns4A6OKzMWc1i0PnZTA1nUuNdKB8Fej4PACL8Pa3Yq2moyS7SsPtj4l4wAkpbBrBbUf1MElKEhWyK5MI1eE%2BtJ5IIoGEx0s%2Fhl%2FrfVdL9FGF9Z2wmXAF%2FEuCBpkX2pEo8njqYnUEGCL%2FgwJAQhpywJXzx&X-Amz-Signature=017e1c03b02ccee6f195b4cfc29fed073ccc498e687ac874b0ff581a1d8ba9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U52EDJG%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T010702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChrIv8G8%2B6nnDAHe00z442Rxr0riaG3qrYLTRfivwRBwIgP4EYaqxYerUhEEI6ed2xqG2zVwgRaFgSRrWz%2F5j8%2B%2F0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDImRJzfks5oHAv8BIyrcA%2BPPbIaOgk7FlniU6oAx7OTwYmoMXhnfn0FmPfkUjJUCjjdK%2BjZUtQM3k7ugeUbzBXFm6jdiZq05yMFOIm55C420QKIeCNdui7r2IHmiUivoa9JYIrN8Cfx8SU9KPS3Mc0QhRwLJ%2B3BH4twRGrf4wNJBoayn6hnrv0RBMDPoYpHDkYDnauZWllfZx4DIZdwM32UbzDil5tuqR%2BaFyxOOZLU2DxTmLw10ihnCJ8hOEHIfkIC1ZH%2Bo%2BI0zd2xQxhW5Osjv8Bzp62dg1oWO%2FT0b%2F5apyD9wQ7GAoF%2FSHROlx85KMO9vMJoTWxY2ucviSBcrSph%2FxFs7chFK5sMqqdVWK%2Fk0AJbnerTygrW0cHN%2FzkHcxUZN%2BBLDfakGDAv1iMSa%2FRy3NBfkUvVQqhAhQ%2BimDa0RnSRWbEKl4rHApf3yQ6Y3u6Dosy94cbxgtG2cyMbH4V%2FM48yGmShKY%2Brm%2FgxaR4L4csgbvIf6MW%2FziyOaCm6K26O3C7zZoWBQy1x6Llcxuj6rBjuG8170f9vOIsJOK4B5zBuWSC0ZbnsybE5gZ0k5lBceRJ2Or2tYQpNx8wgcZSL2iDomTxTOk4AfZdelfYtKsUS5mhl9NlsNn%2BH1UYuSE3tZ3kQCTaatQ4AwMKXKjskGOqUBJq0wyt1vRRJzE5cKvwDkua%2FQgVBlotWN6GqA48eSEo%2FzS9S8QfXwOXP3Ubpc6wVycGCns4A6OKzMWc1i0PnZTA1nUuNdKB8Fej4PACL8Pa3Yq2moyS7SsPtj4l4wAkpbBrBbUf1MElKEhWyK5MI1eE%2BtJ5IIoGEx0s%2Fhl%2FrfVdL9FGF9Z2wmXAF%2FEuCBpkX2pEo8njqYnUEGCL%2FgwJAQhpywJXzx&X-Amz-Signature=12b3e04d5b6a9e3b22dd23ff0413fc9da3d0c665efd5bfd579c08fcea4c223b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U52EDJG%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T010702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChrIv8G8%2B6nnDAHe00z442Rxr0riaG3qrYLTRfivwRBwIgP4EYaqxYerUhEEI6ed2xqG2zVwgRaFgSRrWz%2F5j8%2B%2F0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDImRJzfks5oHAv8BIyrcA%2BPPbIaOgk7FlniU6oAx7OTwYmoMXhnfn0FmPfkUjJUCjjdK%2BjZUtQM3k7ugeUbzBXFm6jdiZq05yMFOIm55C420QKIeCNdui7r2IHmiUivoa9JYIrN8Cfx8SU9KPS3Mc0QhRwLJ%2B3BH4twRGrf4wNJBoayn6hnrv0RBMDPoYpHDkYDnauZWllfZx4DIZdwM32UbzDil5tuqR%2BaFyxOOZLU2DxTmLw10ihnCJ8hOEHIfkIC1ZH%2Bo%2BI0zd2xQxhW5Osjv8Bzp62dg1oWO%2FT0b%2F5apyD9wQ7GAoF%2FSHROlx85KMO9vMJoTWxY2ucviSBcrSph%2FxFs7chFK5sMqqdVWK%2Fk0AJbnerTygrW0cHN%2FzkHcxUZN%2BBLDfakGDAv1iMSa%2FRy3NBfkUvVQqhAhQ%2BimDa0RnSRWbEKl4rHApf3yQ6Y3u6Dosy94cbxgtG2cyMbH4V%2FM48yGmShKY%2Brm%2FgxaR4L4csgbvIf6MW%2FziyOaCm6K26O3C7zZoWBQy1x6Llcxuj6rBjuG8170f9vOIsJOK4B5zBuWSC0ZbnsybE5gZ0k5lBceRJ2Or2tYQpNx8wgcZSL2iDomTxTOk4AfZdelfYtKsUS5mhl9NlsNn%2BH1UYuSE3tZ3kQCTaatQ4AwMKXKjskGOqUBJq0wyt1vRRJzE5cKvwDkua%2FQgVBlotWN6GqA48eSEo%2FzS9S8QfXwOXP3Ubpc6wVycGCns4A6OKzMWc1i0PnZTA1nUuNdKB8Fej4PACL8Pa3Yq2moyS7SsPtj4l4wAkpbBrBbUf1MElKEhWyK5MI1eE%2BtJ5IIoGEx0s%2Fhl%2FrfVdL9FGF9Z2wmXAF%2FEuCBpkX2pEo8njqYnUEGCL%2FgwJAQhpywJXzx&X-Amz-Signature=e7e27d970a12277edb107729161d2f0a07e817c617f0bedc3d307d0a94f4a4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U52EDJG%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T010702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChrIv8G8%2B6nnDAHe00z442Rxr0riaG3qrYLTRfivwRBwIgP4EYaqxYerUhEEI6ed2xqG2zVwgRaFgSRrWz%2F5j8%2B%2F0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDImRJzfks5oHAv8BIyrcA%2BPPbIaOgk7FlniU6oAx7OTwYmoMXhnfn0FmPfkUjJUCjjdK%2BjZUtQM3k7ugeUbzBXFm6jdiZq05yMFOIm55C420QKIeCNdui7r2IHmiUivoa9JYIrN8Cfx8SU9KPS3Mc0QhRwLJ%2B3BH4twRGrf4wNJBoayn6hnrv0RBMDPoYpHDkYDnauZWllfZx4DIZdwM32UbzDil5tuqR%2BaFyxOOZLU2DxTmLw10ihnCJ8hOEHIfkIC1ZH%2Bo%2BI0zd2xQxhW5Osjv8Bzp62dg1oWO%2FT0b%2F5apyD9wQ7GAoF%2FSHROlx85KMO9vMJoTWxY2ucviSBcrSph%2FxFs7chFK5sMqqdVWK%2Fk0AJbnerTygrW0cHN%2FzkHcxUZN%2BBLDfakGDAv1iMSa%2FRy3NBfkUvVQqhAhQ%2BimDa0RnSRWbEKl4rHApf3yQ6Y3u6Dosy94cbxgtG2cyMbH4V%2FM48yGmShKY%2Brm%2FgxaR4L4csgbvIf6MW%2FziyOaCm6K26O3C7zZoWBQy1x6Llcxuj6rBjuG8170f9vOIsJOK4B5zBuWSC0ZbnsybE5gZ0k5lBceRJ2Or2tYQpNx8wgcZSL2iDomTxTOk4AfZdelfYtKsUS5mhl9NlsNn%2BH1UYuSE3tZ3kQCTaatQ4AwMKXKjskGOqUBJq0wyt1vRRJzE5cKvwDkua%2FQgVBlotWN6GqA48eSEo%2FzS9S8QfXwOXP3Ubpc6wVycGCns4A6OKzMWc1i0PnZTA1nUuNdKB8Fej4PACL8Pa3Yq2moyS7SsPtj4l4wAkpbBrBbUf1MElKEhWyK5MI1eE%2BtJ5IIoGEx0s%2Fhl%2FrfVdL9FGF9Z2wmXAF%2FEuCBpkX2pEo8njqYnUEGCL%2FgwJAQhpywJXzx&X-Amz-Signature=193b5487e7c3b971cdaf4e5f44c0de8e5dd7a7bea28729179e1569ac171a69aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCT5Z7R%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T010702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD69b01AmhLeFlS6phJgOBuOEoOYZ%2BF5rL39Z9bAJnVyQIgSCHLJjBAH2LVb2l%2F81e4TSYTDdLG5qpqzPbKZ%2Buh76cq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDChYsmsJzPs8SmqKqSrcA9UR2afcnb3RdKsZfW5jn83OTF7DIvIhJ5Xj8U9iVFf5yGsgmG8%2FPv%2BAExs0W2LxDqx4lt5RPg%2FyrzMu8geg3ZhOLpmhGRGl859r7DGm4OwDoOcQoSSKSI0sviP0N45OqB7qb%2B56fKdlfdcyUbipEDAb8LJ9tmQia0bp42Y%2BogQp64xUjS%2FDePYkQaQLRuttew8J%2BvWJ85N5HxjmskGUT8ZBYQQtZDorNngy5eq0FwM%2Fi35u7%2Bit7qZd4sG12b1DV3wx1TtbuEDEFluVLwhYFrD1%2BbvwjK3pKsEzLofII0Ew7Z3whfJdz%2Bjnf00I4VaHr2U1oFTl361Z73QKl4ySHK6SAywUUmSkS1HEl2BtJLgRcOiDqRihsr3XsArQcDCH3dtt6X0%2FGEZLxs0Nu4lc69SJstVgg94uYhTPYzfUR9FmYvd1gBTO6NujI73h%2B9OQE9fu0YUQnNiPA%2B%2FhHwmJmab%2BKDMbAlf4CX8Ky3EahXbO9jhXtj9sBxf2ceXrxJDU5peXm2xq4h4nKe2ROpTf0xr6UARnQbEFFfzHTY8%2FO2y0chHKPPGiz1wIwmfk3euN4kasyNbOaU5S4xIn005wUJ0o1ZGpARFJMnGDNovBnpVnQt%2FYrr1PBQRvrFKQMKTKjskGOqUBUGIbuguc5uHuKX3PMikkA5adyBIeEbpZF%2Br5wbjsRfHnwsW%2BwIjuyCCQvHDo94H%2FV%2BewctCmjNJo%2F%2F945DLXJAbR3yTqkvuV5oEW1QJ8ETXyvnCZ0VYZD9ZWGAVpZX8xQOwm2cbtDs8vKcBOTzxMQZRGVaQZyBByDQSHJ7QSnA3gX5HcckYkpyak%2FlSy7igoWJ1qC8%2FVK6y9VYmZbuvt50XZDXMR&X-Amz-Signature=74c491f56be65125f0879705712afec9a668a6d8270655be22c92a320cece1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

