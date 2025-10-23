---
title: "서버액션 활용"
slug: "serveractions"
tags: ["Next.js"]
author: "seongjin jeon"
date: "2025-05-21"
modifiedDate: "2025-05-29T05:33:00.000Z"
notionId: "1f99b006-ca58-80ff-af7a-f2af6f36c4f0"
---
## 서버 액션 활용


이번 시간에는 서버 액션을 어떻게 잘 활용할 수 있는지 살펴보도록 하겠습니다.


### 폼


React는 HTML `<form>` 요소를 확장하여 `action` prop으로 서버 액션을 호출할 수 있게 합니다.


폼에서 호출될 때 액션은 자동으로 FormData 객체를 받습니다. 필드를 관리하기 위해 React `useState`를 사용할 필요가 없으며, 대신 네이티브 FormData 메서드를 사용하여 데이터를 추출할 수 있습니다:


```typescript
export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }

    // 데이터 변경
    // 캐시 재검증
  }

  return <form action={createInvoice}>...</form>
}
```

> 알아두면 좋은 점:
> - [예제: 로딩 및 오류 상태가 있는 폼](https://github.com/vercel/next.js/tree/canary/examples/server-actions-forms)
> - 많은 필드가 있는 폼을 다룰 때는 JavaScript의 Object.fromEntries()와 함께 entries() 메서드를 사용하는 것이 좋습니다. 예: `const rawFormData = Object.fromEntries(formData)`. 단, `formData`에는 추가적인 `$ACTION_` 속성이 포함된다는 점에 유의하세요.
> - 자세한 내용은 `[React 폼 문서](https://react.dev/reference/react-dom/components/form)`를 참조하세요.
>

> `Object.fromEntries()` 예시


### 추가 인수 전달하기


JavaScript `bind` 메서드를 사용하여 서버 액션에 추가 인수를 전달할 수 있습니다.


```typescript
'use client'

import { updateUser } from './actions'

export function UserProfile({ userId }: { userId: string }) {
  const updateUserWithId = updateUser.bind(null, userId)

  return (
    <form action={updateUserWithId}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  )
}
```


서버 액션은 폼 데이터 외에도 `userId` 인수를 받게 됩니다:


```typescript
'use server'

export async function updateUser(userId: string, formData: FormData) {}
```

> 알아두면 좋은 점:
> - 대안으로는 폼에서 숨겨진 입력 필드로 인수를 전달하는 방법이 있습니다(예: `<input type="hidden" name="userId" value={userId} />`). 그러나 이 값은 렌더링된 HTML의 일부가 되며 인코딩되지 않습니다.
> - `.bind`는 서버 및 클라이언트 컴포넌트 모두에서 작동합니다. 또한 점진적 향상을 지원합니다.
>

> **서버 액션에서 bind 필요한 이유**


### 중첩된 폼 요소


`<form>` 내부에 중첩된 요소(예: `<button>`, `<input type="submit">`, `<input type="image">`)에서도 서버 액션을 호출할 수 있습니다. 이러한 요소는 `formAction` prop이나 [이벤트 핸들러](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#event-handlers)를 허용합니다.


이는 폼 내에서 여러 서버 액션을 호출하려는 경우에 유용합니다. 예를 들어, 게시물을 게시하는 것 외에도 게시물 초안을 저장하기 위한 특정 `<button>` 요소를 만들 수 있습니다. 자세한 내용은 [React 폼 문서](https://react.dev/reference/react-dom/components/form)를 참조하세요.


> 중첩된 폼 요소 - 쉬운 설명


### 프로그래밍 방식의 폼 제출


[`requestSubmit()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/requestSubmit) 메서드를 사용하여 프로그래밍 방식으로 폼 제출을 트리거할 수 있습니다. 예를 들어, 사용자가 `⌘` + `Enter` 키보드 단축키를 사용하여 폼을 제출할 때 `onKeyDown` 이벤트를 수신할 수 있습니다:


```typescript
'use client'

export function Entry() {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'Enter' || e.key === 'NumpadEnter')
    ) {
      e.preventDefault()
      e.currentTarget.form?.requestSubmit()
    }
  }

  return (
    <div>
      <textarea name="entry" rows={20} required onKeyDown={handleKeyDown} />
    </div>
  )
}
```


이렇게 하면 가장 가까운 `<form>` 조상의 제출이 트리거되어 서버 액션이 호출됩니다.


> **프로그래밍 방식의 폼 제출 - 쉬운 설명**


### 서버 측 폼 유효성 검사


기본적인 클라이언트 측 폼 유효성 검사를 위해 `required` 및 `type="email"`과 같은 HTML 속성을 사용할 수 있습니다.


더 고급 서버 측 유효성 검사를 위해 zod와 같은 라이브러리를 사용하여 데이터를 변경하기 전에 폼 필드의 유효성을 검사할 수 있습니다:


```typescript
'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})

export default async function createUser(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  // 폼 데이터가 유효하지 않으면 일찍 반환
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 데이터 변경
}
```


서버에서 필드의 유효성이 검사되면 액션에서 직렬화 가능한 객체를 반환하고 React `useActionState` 훅을 사용하여 사용자에게 메시지를 표시할 수 있습니다.

- 액션을 `useActionState`에 전달하면 액션의 함수 시그니처가 변경되어 첫 번째 인수로 새 `prevState` 또는 `initialState` 매개변수를 받습니다.
- `useActionState`는 React 훅이므로 클라이언트 컴포넌트에서 사용해야 합니다.

```typescript
'use server'

import { redirect } from 'next/navigation'

export async function createUser(prevState: any, formData: FormData) {
  const res = await fetch('https://...')
  const json = await res.json()

  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }

  redirect('/dashboard')
}
```


그런 다음 액션을 `useActionState` 훅에 전달하고 반환된 `state`를 사용하여 오류 메시지를 표시할 수 있습니다.


```typescript
'use client'

import { useActionState } from 'react'
import { createUser } from '@/app/actions'

const initialState = {
  message: '',
}

export function Signup() {
  const [state, formAction, pending] = useActionState(createUser, initialState)

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button disabled={pending}>Sign up</button>
    </form>
  )
}
```


### 대기 상태


[useActionState](https://react.dev/reference/react/useActionState) 훅은 액션이 실행되는 동안 로딩 인디케이터를 표시하는 데 사용할 수 있는 `pending` 불리언을 노출합니다.


또는 [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus) 훅을 사용하여 액션이 실행되는 동안 로딩 인디케이터를 표시할 수 있습니다. 이 훅을 사용할 때는 로딩 인디케이터를 렌더링하기 위한 별도의 컴포넌트를 만들어야 합니다. 예를 들어, 액션이 대기 중일 때 버튼을 비활성화하려면:


```typescript
'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit">
      Sign Up
    </button>
  )
}
```


그런 다음 `SubmitButton` 컴포넌트를 폼 안에 중첩할 수 있습니다:


```typescript
import { SubmitButton } from './button'
import { createUser } from '@/app/actions'

export function Signup() {
  return (
    <form action={createUser}>
      {/* 다른 폼 요소들 */}
      <SubmitButton />
    </form>
  )
}
```

> 알아두면 좋은 점: React 19에서는 useFormStatus가 반환된 객체에 data, method, action과 같은 추가 키를 포함합니다. React 19를 사용하지 않는 경우에는 pending 키만 사용할 수 있습니다.

### 낙관적 업데이트


React useOptimistic 훅을 사용하여 서버 액션이 실행을 완료할 때까지 기다리지 않고 UI를 낙관적으로 업데이트할 수 있습니다:


```typescript
'use client'

import { useOptimistic } from 'react'
import { send } from './actions'

type Message = {
  message: string
}

export function Thread({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [...state, { message: newMessage }])

  const formAction = async (formData: FormData) => {
    const message = formData.get('message') as string
    addOptimisticMessage(message)
    await send(message)
  }

  return (
    <div>
      {optimisticMessages.map((m, i) => (
        <div key={i}>{m.message}</div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
```


> **낙관적 업데이트 - 쉬운 설명**


### 이벤트 핸들러


서버 액션은 일반적으로 `<form>` 요소 내에서 사용되지만, `onClick`과 같은 이벤트 핸들러에서도 호출할 수 있습니다. 예를 들어, 좋아요 수를 증가시키려면:


```typescript
'use client'

import { incrementLike } from './actions'
import { useState } from 'react'

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}
```


폼 요소에 이벤트 핸들러를 추가할 수도 있습니다. 예를 들어, `onChange` 시 폼 필드를 저장하려면:


```typescript
'use client'

import { publishPost, saveDraft } from './actions'

export default function EditPost() {
  return (
    <form action={publishPost}>
      <textarea
        name="content"
        onChange={async (e) => {
          await saveDraft(e.target.value)
        }}
      />
      <button type="submit">Publish</button>
    </form>
  )
}
```


이와 같이 여러 이벤트가 빠르게 연속해서 발생할 수 있는 경우에는 불필요한 서버 액션 호출을 방지하기 위해 디바운싱(debouncing)을 사용하는 것이 좋습니다.


### useEffect


React useEffect 훅을 사용하여 컴포넌트가 마운트되거나 종속성이 변경될 때 서버 액션을 호출할 수 있습니다. 이는 전역 이벤트에 의존하거나 자동으로 트리거해야 하는 변경에 유용합니다. 예를 들어, 앱 단축키를 위한 `onKeyDown`, 무한 스크롤을 위한 교차 관찰자 훅, 또는 조회수를 업데이트하기 위해 컴포넌트가 마운트될 때:


```typescript
'use client'

import { incrementViews } from './actions'
import { useState, useEffect } from 'react'

export default function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews)

  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews()
      setViews(updatedViews)
    }

    updateViews()
  }, [])

  return <p>Total Views: {views}</p>
}
```


`useEffect`의 동작과 주의사항을 고려하세요.


### 오류 처리


오류가 발생하면 클라이언트의 가장 가까운 `error.js` 또는 `<Suspense>` 경계에 의해 잡힙니다. 자세한 내용은 [오류 처리](https://nextjs.org/docs/app/building-your-application/routing/error-handling)를 참조하세요.

> 알아두면 좋은 점:
> - 오류를 던지는 것 외에도 `useActionState`로 처리할 객체를 반환할 수도 있습니다. [서버 측 유효성 검사 및 오류 처리](/1b16a10d310b8082921bc77cc0b95e5c)를 참조하세요.
>

### 데이터 재검증


서버 액션 내에서 revalidatePath API를 사용하여 Next.js 캐시를 재검증할 수 있습니다:


```typescript
'use server'

import { revalidatePath } from 'next/cache'

export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidatePath('/posts')
}
```


또는 revalidateTag를 사용하여 캐시 태그로 특정 데이터 가져오기를 무효화할 수 있습니다:


```typescript
'use server'

import { revalidateTag } from 'next/cache'

export async function createPost() {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidateTag('posts')
}
```


### 리디렉션


서버 액션이 완료된 후 사용자를 다른 경로로 리디렉션하려면 redirect API를 사용할 수 있습니다. `redirect`는 `try/catch` 블록 외부에서 호출해야 합니다:


```typescript
'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function createPost(id: string) {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidateTag('posts') // 캐시된 게시물 업데이트
  redirect(`/post/${id}`) // 새 게시물 페이지로 이동
}
```


### 쿠키


cookies API를 사용하여 서버 액션 내에서 쿠키를 `get`, `set`, `delete`할 수 있습니다:


```typescript
'use server'

import { cookies } from 'next/headers'

export async function exampleAction() {
  const cookieStore = await cookies()

  // 쿠키 가져오기
  cookieStore.get('name')?.value

  // 쿠키 설정
  cookieStore.set('name', 'Delba')

  // 쿠키 삭제
  cookieStore.delete('name')
}
```


서버 액션에서 쿠키를 삭제하는 [추가 예제](https://nextjs.org/docs/app/api-reference/functions/cookies#deleting-cookies)를 참조하세요.


## 보안


기본적으로 서버 액션이 생성되고 내보내지면 공개 HTTP 엔드포인트가 생성되므로 동일한 보안 가정과 권한 검사로 처리해야 합니다. 이는 서버 액션이나 유틸리티 함수가 코드의 다른 곳에서 가져오지 않더라도 여전히 공개적으로 접근 가능하다는 것을 의미합니다.


보안을 강화하기 위해 Next.js에는 다음과 같은 내장 기능이 있습니다:

- **보안 액션 ID:** Next.js는 클라이언트가 서버 액션을 참조하고 호출할 수 있도록 암호화된 비결정적 ID를 생성합니다. 이러한 ID는 보안 강화를 위해 빌드 간에 주기적으로 재계산됩니다.
- **데드 코드 제거:** 사용되지 않는 서버 액션(ID로 참조됨)은 제3자의 공개 액세스를 방지하기 위해 클라이언트 번들에서 제거됩니다.
> 알아두면 좋은 점:
>
> ID는 컴파일 중에 생성되며 최대 14일 동안 캐시됩니다. 새 빌드가 시작되거나 빌드 캐시가 무효화되면 ID가 재생성됩니다. 이 보안 개선은 인증 레이어가 누락된 경우의 위험을 줄입니다. 그러나 여전히 서버 액션을 공개 HTTP 엔드포인트처럼 취급해야 합니다.
>
>

```typescript
// app/actions.js
'use server'

// 이 액션은 애플리케이션에서 **사용되므로** Next.js는
// 클라이언트가 서버 액션을 참조하고 호출할 수 있도록
// 보안 ID를 생성합니다.
export async function updateUserAction(formData) {}

// 이 액션은 애플리케이션에서 **사용되지 않으므로** Next.js는
// `next build` 중에 이 코드를 자동으로 제거하고
// 공개 엔드포인트를 생성하지 않습니다.
export async function deleteUserAction(formData) {}
```


### 인증 및 권한 부여


사용자가 액션을 수행할 권한이 있는지 확인해야 합니다. 예를 들어:


```typescript
'use server'

import { auth } from './lib'

export function addItem() {
  const { user } = auth()
  if (!user) {
    throw new Error('You must be signed in to perform this action')
  }

  // ...
}
```


### 클로저와 암호화


컴포넌트 내에서 서버 액션을 정의하면 액션이 외부 함수의 범위에 접근할 수 있는 클로저가 생성됩니다. 예를 들어, `publish` 액션은 `publishVersion` 변수에 접근할 수 있습니다:


```typescript
export default async function Page() {
  const publishVersion = await getLatestVersion();

  async function publish() {
    "use server";
    if (publishVersion !== await getLatestVersion()) {
      throw new Error('The version has changed since pressing publish');
    }
    ...
  }

  return (
    <form>
      <button formAction={publish}>Publish</button>
    </form>
  );
}
```


클로저는 렌더링 시점에 데이터(예: `publishVersion`)의 _스냅샷_을 캡처하여 나중에 액션이 호출될 때 사용해야 하는 경우에 유용합니다.


그러나 이를 위해 캡처된 변수는 클라이언트로 전송되었다가 액션이 호출될 때 다시 서버로 전송됩니다. 민감한 데이터가 클라이언트에 노출되는 것을 방지하기 위해 Next.js는 자동으로 클로저된 변수를 암호화합니다. Next.js 애플리케이션이 빌드될 때마다 각 액션에 대해 새 개인 키가 생성됩니다. 이는 액션이 특정 빌드에 대해서만 호출될 수 있음을 의미합니다.

> 알아두면 좋은 점: 민감한 값이 클라이언트에 노출되는 것을 방지하기 위해 암호화에만 의존하는 것은 권장하지 않습니다. 대신 React taint API를 사용하여 특정 데이터가 클라이언트로 전송되는 것을 사전에 방지해야 합니다.

### 암호화 키 덮어쓰기(고급)


Next.js 애플리케이션을 여러 서버에 자체 호스팅할 때, 각 서버 인스턴스가 서로 다른 암호화 키를 갖게 되어 잠재적인 불일치가 발생할 수 있습니다.


이를 완화하기 위해 `process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY` 환경 변수를 사용하여 암호화 키를 덮어쓸 수 있습니다. 이 변수를 지정하면 암호화 키가 빌드 간에 지속되고 모든 서버 인스턴스가 동일한 키를 사용하도록 보장합니다. 이 변수는 **반드시** AES-GCM으로 암호화되어야 합니다.


이는 여러 배포 간에 일관된 암호화 동작이 애플리케이션에 중요한 고급 사용 사례입니다. 키 교체 및 서명과 같은 표준 보안 관행을 고려해야 합니다.

> 알아두면 좋은 점: Vercel에 배포된 Next.js 애플리케이션은 이를 자동으로 처리합니다.

### 허용된 출처(고급)


서버 액션은 `<form>` 요소에서 호출될 수 있으므로 CSRF 공격에 노출될 수 있습니다.


내부적으로 서버 액션은 `POST` 메서드를 사용하며, 이 HTTP 메서드만 액션을 호출할 수 있습니다. 이는 SameSite 쿠키가 기본값인 최신 브라우저에서 대부분의 CSRF 취약점을 방지합니다.


추가 보호 기능으로, Next.js의 서버 액션은 Origin 헤더와 Host 헤더(또는 `X-Forwarded-Host`)를 비교합니다. 이들이 일치하지 않으면 요청이 중단됩니다. 즉, 서버 액션은 해당 액션을 호스팅하는 페이지와 동일한 호스트에서만 호출될 수 있습니다.


리버스 프록시나 다층 백엔드 아키텍처(서버 API가 프로덕션 도메인과 다른 경우)를 사용하는 대규모 애플리케이션의 경우, 구성 옵션 `serverActions.allowedOrigins`를 사용하여 안전한 출처 목록을 지정하는 것이 좋습니다. 이 옵션은 문자열 배열을 허용합니다.


```plain text
/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
    },
  },
}
```


[보안 및 서버 액션](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#security)에 대해 자세히 알아보세요.


## 추가 리소스


자세한 내용은 다음 React 문서를 참조하세요:

- [서버 액션](https://react.dev/reference/react/use-server)
- ["use server"](https://react.dev/reference/react/use-server)
- [폼](https://react.dev/reference/react-dom/components/form)
- [useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)
- [useActionState](https://react.dev/reference/react/useActionState)
- [useOptimistic](https://react.dev/reference/react/useOptimistic)

## 다음 단계


Next.js에서 서버 액션을 구성하는 방법 알아보기


[serverActions](https://nextjs.org/docs/app/api-reference/next-config-js/serverActions) - Next.js 애플리케이션에서 서버 액션 동작 구성하기.


## 실습

<details>
<summary>`app/actions/blog.ts`</summary>

```typescript
'use server';

import { createPost } from '@/lib/notion';

export async function createPostAction(formData: FormData) {
  // const title = formData.get('title') as string;
  // const tag = formData.get('tag') as string;
  // const content = formData.get('content') as string;

  const { title, tag, content } = Object.fromEntries(formData);

  await createPost({
    title: String(title),
    tag: String(tag),
    content: String(content),
  });
}
```


</details>


## 참고


[https://nextjs.org/docs/app/getting-started/updating-data](https://nextjs.org/docs/app/getting-started/updating-data)


[https://developers.notion.com/reference/create-a-database](https://developers.notion.com/reference/create-a-database)


[https://developers.notion.com/reference/property-object](https://developers.notion.com/reference/property-object) 


[https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)


[https://nextjs.org/docs/app/getting-started/error-handling](https://nextjs.org/docs/app/getting-started/error-handling)


[https://zod.dev/](https://zod.dev/)


[https://youtu.be/GteV4zfqPIk?si=I0YFAKZYLVkszjUv](https://youtu.be/GteV4zfqPIk?si=I0YFAKZYLVkszjUv)

