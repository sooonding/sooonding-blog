---
title: "robots.txt란?"
slug: "robots"
tags: ["DA"]
author: "seongjin jeon"
date: "2025-09-14"
modifiedDate: "2025-09-15T00:37:00.000Z"
notionId: "26f9b006-ca58-8035-b70c-cfa3cf57b9fe"
---

글쓰기 출처 :  토스 [**테크니컬 라이팅 가이드를 참조**](https://technical-writing.dev/tutorial/basic-documents.html)하여 작성하였습니다.


## robots.txt  이해하기


## 학습 목표

- robots.txt 파일이 무엇인지 정확히 설명할 수 있어요
- 웹 스크래핑할 때 왜 중요한지 이해할 수 있어요
- 실제로 robots.txt 파일을 확인하고 해석할 수 있어요
- 윤리적이고 안전한 웹 스크래핑을 할 수 있어요

## 단계별 가이드


### 1단계: robots.txt가 무엇인지 알아보기


**robots.txt**는 웹사이트 주인이 만드는 **"출입 금지 안내판"** 같은 파일이에요.


**쉬운 비유로 설명하면:**

- 집에 "택배 기사님은 현관문까지만 와주세요"라는 안내문을 붙여놓는 것과 같아요
- 웹사이트도 "로봇(봇)들은 이 페이지는 보지 마세요"라고 안내하는 거예요

**실제 위치:**
모든 웹사이트의 맨 앞에 있어요. 예를 들어:

- 네이버: `https://www.naver.com/robots.txt`
- 구글: `https://www.google.com/robots.txt`

### 2단계: robots.txt 파일 구조 이해하기


robots.txt 파일을 열어보면 이런 내용이 있어요:


```markdown
User-agent: *
Disallow: /private/
Disallow: /admin/
Allow: /public/
Crawl-delay: 1
```


**각 줄의 의미:**

- `User-agent: *` → "모든 로봇들아, 이 규칙을 지켜줘"
- `Disallow: /private/` → "/private/ 폴더는 들어오지 마"
- `Allow: /public/` → "/public/ 폴더는 들어와도 돼"
- `Crawl-delay: 1` → "1초마다 한 번씩만 방문해줘"

### 3단계: 웹 스크래핑할 때 왜 중요한지 알아보기


**웹 스크래핑이란?**
웹사이트에서 자동으로 정보를 수집하는 것이에요.


**robots.txt가 중요한 4가지 이유:**

1. **법적 문제 방지**
    - robots.txt를 무시하면 법적 처벌을 받을 수 있어요
    - "들어오지 마"라고 했는데 들어가면 불법 침입이 될 수 있거든요
2. **예의와 매너**
    - 웹사이트 서버에 부담을 주지 않기 위해서예요
    - 너무 많이 방문하면 웹사이트가 느려져요
3. **안전한 데이터 수집**
    - 규칙을 지키면 IP가 차단당하지 않아요
    - 오랫동안 안정적으로 데이터를 모을 수 있어요
4. **효율적인 작업**
    - 어디에 접근할 수 있는지 미리 알 수 있어요
    - 시간과 노력을 절약할 수 있어요

### 4단계: 실제로 robots.txt 확인해보기


**직접 해보세요!**

1. 웹 브라우저를 열어주세요
2. 주소창에 `https://www.naver.com/robots.txt`를 입력해보세요
3. 어떤 내용이 나오는지 확인해보세요

**다른 사이트들도 확인해보세요:**

- `https://www.google.com/robots.txt`
- `https://www.github.com/robots.txt`
- `https://www.facebook.com/robots.txt`

### 5단계: 웹 스크래핑할 때 지켜야 할 규칙


 **꼭 해야 할 것:**

- 스크래핑 전에 항상 robots.txt 확인하기
- Crawl-delay 시간 지키기 (보통 1-2초)
- Disallow된 페이지는 접근하지 않기

**하지 말아야 할 것:**

- robots.txt 무시하고 무작정 크롤링하기
- 너무 빠르게 연속으로 접근하기
- 개인정보가 있는 페이지 수집하기

## 자주 묻는 질문 (FAQ)


**Q: robots.txt가 없는 웹사이트도 있나요?**
A: 네, 있어요. 그런 경우에도 예의를 지켜서 천천히 접근하세요.


**Q: robots.txt를 무시하면 정말 처벌받나요?**
A: 상황에 따라 다르지만, 법적 문제가 될 수 있어요. 안전하게 규칙을 지키는 게 좋아요.


**Q: 모든 로봇이 robots.txt를 지키나요?**
A: 대부분의 정상적인 검색엔진(구글, 네이버 등)은 지켜요. 하지만 악성 봇들은 무시할 수도 있어요.


**Q: 개인이 웹 스크래핑할 때도 지켜야 하나요?**
A: 네! 개인이든 회사든 상관없이 모두 지켜야 해요.

