---
title: "Next.js 클라이언트-서버 컴포넌트 상호작용 이해하기"
slug: "cs"
description: "클라이언트-서버 컴포넌트 상호작용"
tags: ["Next.js"]
author: "seongjin jeon"
date: "2025-06-13"
modifiedDate: "2025-06-12T15:38:00.000Z"
notionId: "2109b006-ca58-8007-af2c-c5254d1011cd"
---
Next.js에서 클라이언트 컴포넌트와 서버 컴포넌트를 함께 사용할 때, 컴포넌트의 특성을 유지하면서 효율적으로 조합하는 방법에 대해 알아보자


## **핵심 개념**


클라이언트 컴포넌트가 서버 컴포넌트를 사용할 때, 그 방식에 따라 서버 컴포넌트의 특성이 유지되거나 클라이언트 컴포넌트로 변환될 수 있습니다.


### **잘못된 사용 방식**


서버 컴포넌트를 직접 `import`하여 사용하면, 해당 컴포넌트는 클라이언트 컴포넌트로 변환됩니다.


```typescript
'use client'
// 부모 (클라이언트 컴포넌트)
import ServerComponent from './server-component'

export default function ClientComponent() {
  return (
    <div>
      <ServerComponent /> {/* ❌ ServerComponent가 클라이언트 컴포넌트가 됨 */}
    </div>
  )
}
```


## 올바른 사용 방식


### **1. children prop 활용**

- 서버 컴포넌트는 children props로 넘기게되면 서버 컴포넌트의 특성을 유지할 수 있다.

```typescript
'use client'
// 부모 (클라이언트 컴포넌트)
export default function ClientComponent({ children }) {
  return (
    <div>
      {children} {/* ✅ 서버 컴포넌트 특성 유지 */}
    </div>
  )
}

// 사용 예시
<ClientComponent>
  <ServerComponent />
</ClientComponent>
```


### **2. props로 전달**

- 컴포넌트 자체를 props로 전달하여도 서버 컴포넌트의 특성을 유지할 수 있게 된다.

```typescript
'use client'
// 부모 (클라이언트 컴포넌트)
export default function ClientComponent({ serverComponent }) {
  return (
    <div>
      {serverComponent} {/* ✅ 서버 컴포넌트 특성 유지 */}
    </div>
  )
}

// 사용 예시
<ClientComponent serverComponent={<ServerComponent />} />
```


### 사용 예시


```typescript
// layout.tsx (서버 컴포넌트)
import ClientComponent from './client-component'
import ServerComponent from './server-component'

export default function Layout() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  )
}
```


## **이렇게 사용하는 이유**

1. **서버 컴포넌트의 장점 유지**
    - 서버 사이드 데이터 페칭
    - 서버 리소스 직접 접근
    - 민감한 정보 보호
2. **성능 최적화**
    - 클라이언트 번들 사이즈 감소
    - 초기 페이지 로드 시간 개선
3. **효율적인 리소스 관리**
- 서버와 클라이언트 리소스의 적절한 분배
- 필요한 부분만 클라이언트에서 실행하기 위해

## **주의사항**

- 서버 컴포넌트를 **import**하여 사용하면 자동으로 클라이언트 컴포넌트로 변환됩니다.
- children이나 props로 전달받은 **서버 컴포넌트는 서버 컴포넌트 특성을 유지**합니다.
- 레이아웃 구성 시 이러한 특성을 고려하여 컴포넌트를 구조화해야 합니다.

## **결론**


계속 헷갈리는 부분이 있어 이참에 부모 관계를 정리하고 싶었습니다. 
Next.js에서 클라이언트와 서버 컴포넌트를 효율적으로 조합하려면, children이나 props를 통한 전달 방식을 사용해야 합니다. 이를 통해 각 컴포넌트의 장점을 최대한 활용하면서 최적화된 애플리케이션을 구축할 수 있습니다.

