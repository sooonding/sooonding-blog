---
title: "Tableau Public에서 인상적인 비즈니스 시각화 대시보드"
slug: "visual-vocabulary"
description: "Visual Vocabulary"
tags: ["데이터시각화"]
author: "seongjin jeon"
date: "2025-08-03"
modifiedDate: "2025-08-04T00:24:00.000Z"
notionId: "2459b006-ca58-80f3-ab41-ce3760c8c692"
---
[bookmark](https://public.tableau.com/app/profile/andy.kriebel/viz/VisualVocabulary/VisualVocabulary)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ea795379-628e-43e5-b189-9210289b6f7e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IGJIKW%2F20260106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260106T010758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG%2BoliJml0YPD%2FWdjCmqd9WCUP9s1Un4aSkoPHg4FpFAiBSGo5CxzYoRc2X3rmbHiVDRkfUvvh3M0OJgVXTkMDNNyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM9aoE7JpCX%2FE478e6KtwDzRcqr%2BTU%2BbpyZKvlWSxy51pnvjuBpJeF2SrVM0BxaFQfzfiEPMjdg%2BXsVJOv0x1%2B23nXtHiFH6kyBmvttGZ3t%2FwwxF%2FocB26tb%2BRLAb8P11p%2B6mMOXRFrymQvpjny67shsLoqN4sNfe9xHkL5s5bwiJrr2ZT9XDW%2B6JLdgejgrqvw7xf9QDDrvdgYQq0rA79kPZ5X9%2F2dSHLApUUSyt%2FBsh%2Bs4HqGG1pQqIyF%2FW5USvXUvLKGmD41RnJxaR6Bui53nYne6C5NmPPfzaU9byqLdlVyY3%2F2Qr70ZOHrB0RcZe9vqXKziXcAqD2xypjMpzTkJjPJ0RVOP8w9R%2BW8eYaFrU8Nj1jJ7inj9FsYWnO1ThhvZm%2Ftdpia7XzFCqXtf1tSLb5tJ7vys%2FqzSevFzDt1j3GJ%2F1exJtafnDwEvfNiGuyom7b4qCkzPGzeNX%2B2Wbr4kz8Ebs%2Brsx5LqQQpoPW%2BXhxG%2FwI%2BKE4%2BS97zA5G2%2F9aIeaKiOPQMs8XQHgOYZ6dmcZTOvEiCIcgtQG2QnhutSzTmRPuPCfkjkBdNY1PY7QCaTJUDyC%2BitXed8r3rlwlxpuXvn5dDeEwPhS4W2ri3kQgrIZ5TQfy%2F0P2S49n12OMg3B43Z1ML1EI4skw0LbxygY6pgHtDsPTfeEaEPiE2xpRfszSNPEgbIjMQqfuUtWa3Fu5Q4TRXPg5QIAps3vYHYulIXxHsMiNRRU3uDJWyN8Vy2tainl8duWY4elZnTd%2B%2Bz%2Bw2UPPeVl7v8CDYO4Wx0gU8HWzbXnfC8B3Sa4T%2BCLpzO04mZdCkqM%2FZ5gAKAYjaK27g%2FD6OuSA0IQa2Rb1CL7ONmcjMHrBvasXhfwqI%2ByA3B3YZnxUe1iD&X-Amz-Signature=df94b1b52510d5938828f9b2891eebaaf3681c4b214c5d6335cf737e157995c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 선정 이유


단순한 시각화 예시가 아닌, **실제 업무에서 매일 사용되는 실용적 도구라고 생각되었다.** 300만 회 이상의 조회수와 댓글에서 실무에서 적용을 많이 했다는 글이 많다.


학습에 있어서도 모든 레벨(초보~실무자)까지 모든 레벨에서 활용가능한 포괄성을 지니고 있다. 


### 주요 추가 분석

- **Sankey Diagram**: `MAKELINE()` 함수를 이용한 flow 시각화
- **Dashboard Actions**: Filter, Highlight, URL, Parameter Actions
- **Violin Plot**: `MAKEPOINT()` 함수와 밀도 계산을 통한 커스텀 폴리곤 사용
