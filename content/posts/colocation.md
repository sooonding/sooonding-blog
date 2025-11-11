---
title: "Colocation - 콜로케이션"
slug: "colocation"
description: "콜로케이션 & next.js에서의 colocation"
tags: ["Next.js"]
author: "seongjin jeon"
date: "2025-11-05"
modifiedDate: "2025-11-10T06:32:00.000Z"
notionId: "2a19b006-ca58-8007-8c8e-f060d39720e7"
---
## Colocation


Colocation은 사전적 단어로는 **“co-(함께)” + “location(위치)”의 함성어로 “함께 위치시키다” or 같은 곳에 배치하다**라는 의미


프로그래밍적으로는 **서로 관련된 코드나 파일들을 물리적으로 가까운 위치에 배치**하는 것을 말한다.


아래 폴더 구조를  살펴보며 기존의 폴더 구조와 콜로케이션을 적용한 폴더 구조가 무엇이 다른지 살펴보자.


```markdown
//기존에 타입별로 구분한 폴더구조
src/
├── components/     # 모든 컴포넌트
├── styles/         # 모든 스타일
├── utils/          # 모든 유틸리티
└── tests/          # 모든 테스트
```

반면 
콜로케이션은 기능별로 묶는다.

```
src/
├── features/
│   ├── user-profile/
│   │   ├── UserProfile.tsx
│   │   ├── UserProfile.css
│   │   ├── UserProfile.test.ts
│   │   └── utils.ts
│   └── dashboard/
│       ├── Dashboard.tsx
│       ├── Dashboard.css
│       └── Dashboard.test.ts
```


### Next.js에서의 콜로케이션


nextjs App Router는 이 콜로케이션을 지원하고 있다. 라우트 폴더 안에 관련 파일들을 함께 둘 수 있다.


이 콜로케이션을 통해서 프로젝트 조직 전략을 짤 수 있다.


Next.js 프로젝트에서 파일과 폴더를 조직하는 데 규칙이나 옳은 전략은 없다. 다만 팀 혹은 개인의 전략에 맞춰서 선택하고 일관성을 유지하는 것이 중요하다.


### Store project files outside of `app`


해당 전략은 모든 프로젝트의 코드를 프로젝트 루트의 공유 폴더에 저장하고 **`app`** **디렉토리는 단순 라우팅 목적으로 유지하는 전략**


짧게 말해 app 디렉토리는 라우팅만하고 코드는 app 디렉토리 외부에 존재하는 전략


```markdown
my-project/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # 라우트만
│   ├── settings/
│   │   └── page.tsx
│   └── layout.tsx
│
├── components/                # 모든 컴포넌트
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Header.tsx
│
├── lib/                       # 유틸리티
│   ├── utils.ts
│   └── api.ts
│
└── styles/                    # 스타일
    └── globals.css
```


### Store project files in top-level folders inside of app


`app` 디렉토리 안에 공유 폴더를 생성하는 전략


모든 코드를 app 디렉토리 안에 생성하는 전략으로 상대 경로 import가 간단한 특징이 있다.


```plain text
my-project/
└── app/
    ├── _components/           # Private 폴더 (라우트 X)
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   └── Header.tsx
    │
    ├── _lib/                  # Private 폴더
    │   ├── utils.ts
    │   └── api.ts
    │
    ├── _styles/               # Private 폴더
    │   └── shared.css
    │
    ├── dashboard/
    │   └── page.tsx           # 라우트
    │
    ├── settings/
    │   └── page.tsx
    │
    └── layout.tsx
```


### Split project files by feature or route


해당 전략은 app 디렉토리에 전역적으로 공유되는 코드를 저장하고 특정 경로 세그먼트에 사용되는 기능 코드를 분할하여 생성하는 전략


```plain text
my-project/
└── app/
    ├── _components/              # 전역 공유 컴포넌트
    │   ├── Header.tsx
    │   └── Footer.tsx
    │
    ├── _lib/                     # 전역 유틸리티
    │   └── utils.ts
    │
    ├── dashboard/                # 대시보드 기능
    │   ├── page.tsx
    │   ├── DashboardChart.tsx    # 대시보드 전용
    │   ├── DashboardStats.tsx
    │   └── utils.ts              # 대시보드 전용 유틸
    │
    ├── settings/                 # 설정 기능
    │   ├── page.tsx
    │   ├── SettingsForm.tsx      # 설정 전용
    │   ├── ProfileSection.tsx
    │   └── api.ts                # 설정 전용 API
    │
    └── layout.tsx
```


### Route Groups


라우트 구조를 논리적으로 그룹화 하는 전략


```plain text
my-project/
└── app/
    ├── (marketing)/              # 그룹 (URL에 포함 안됨)
    │   ├── _components/
    │   │   └── Hero.tsx          # 마케팅 전용
    │   ├── about/
    │   │   └── page.tsx          # URL: /about
    │   └── contact/
    │       └── page.tsx          # URL: /contact
    │
    ├── (shop)/                   # 그룹
    │   ├── _components/
    │   │   └── ProductCard.tsx   # 쇼핑 전용
    │   ├── products/
    │   │   └── page.tsx          # URL: /products
    │   └── cart/
    │       └── page.tsx          # URL: /cart
    │
    └── (dashboard)/              # 그룹
        ├── _components/
        │   └── Sidebar.tsx       # 대시보드 전용
        ├── analytics/
        │   └── page.tsx          # URL: /analytics
        └── settings/
            └── page.tsx          # URL: /settings
```


### 출처


[https://nextjs.org/docs](https://nextjs.org/docs)

