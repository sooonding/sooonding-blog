---
title: "React Query - infinite scroll"
slug: "react-query"
description: "설명입니다!!!!!"
author: "seongjin jeon"
date: "2025-05-19"
modifiedDate: "2025-07-20T13:17:00.000Z"
notionId: "1f89b006-ca58-80e2-9eab-fc2cb2998173"
---
## Next.js에서 React Query와 IntersectionObserver를 활용한 무한 스크롤 구현기


최근 블로그 프로젝트를 진행하면서, 게시글 목록을 무한 스크롤 방식으로 구현할 일이 있었습니다.


이번 글에서는 `React Query`, `useInfiniteQuery`, `react-intersection-observer` 라이브러리를 활용해 클라이언트 컴포넌트에서 어떻게 무한 스크롤을 구현했는지 기록해보려고 합니다.


---


### ✅ 사용 기술

- **Next.js 15 (App Router)**
- **React Query (tanstack/react-query)**
- **react-intersection-observer**
- **Lucide Icons (****`Loader2`****)**

---


### 📌 클라이언트 컴포넌트에서 Promise 처리하기


Next.js의 클라이언트 컴포넌트에서 서버에서 받은 Promise 데이터를 바로 사용할 수 있는 방법은 `use()` 훅을 사용하는 것입니다.


```typescript
"use client";

import { use } from "react";

interface PostListProps {
  postsPromise: Promise<getPublishedPostsResponse>;
}

const initialData = use(postsPromise);
```


서버 컴포넌트에서 받아온 `postsPromise`를 `use()`로 처리해 초기 데이터를 구성할 수 있습니다.


---


### 🔍 URL 파라미터 처리


`next/navigation`의 `useSearchParams()`를 통해 현재 URL에 붙은 쿼리 문자열을 읽어옵니다.


```typescript
const searchParams = useSearchParams();
const tag = searchParams.get("tag");
const sort = searchParams.get("sort");
```


---


### 🔁 useInfiniteQuery로 무한 스크롤 구현


React Query의 `useInfiniteQuery()` 훅을 통해 페이지 단위로 데이터를 가져올 수 있습니다.


```typescript
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", tag, sort],
      queryFn: fetchPosts, // 실제 데이터를 불러오는 비동기 함수
      initialPageParam: undefined, // 첫 페이지는 특별한 파라미터 없이 시작
      getNextPageParam: (lastPage) => {
        //다음 페이지를 불러올 때 사용할 파라미터를 반환하는 함수입니다.
        return lastPage.nextCursor ?? undefined;
      },
      initialData: {
        pages: [initialData], //첫 렌더링 시 사용할 초기 데이터입니다.
        pageParams: [undefined], //첫 렌더링 시 사용할 파라미터입니다.
      },
    });
```

- _`isFetchingNextPage`_ _:_  다음 페이지 불러오는 중인지 여부 | 로딩 스피너 등 표시할 때 사용
- `initialPageParam: undefined` :  첫 페이지는 특별한 파라미터 없이 시작
- `queryKey` : 실제 데이터를 불러오는 비동기 함수
- `getNextPageParam`: 다음 페이지를 불러올 때 사용할 파라미터를 반환하는 함수
- `initialData`: 서버에서 전달받은 초기 데이터 사용

---


### 👀 IntersectionObserver로 자동 로딩 감지


`react-intersection-observer`의 `useInView()`를 통해 사용자가 스크롤을 끝까지 내렸는지 감지할 수 있습니다.


```typescript
// useInView 훅은 뷰포트 감지
const { ref, inView } = useInView({ threshold: 0.5 });

useEffect(() => {
  if (inView && hasNextPage && !isFetchingNextPage) {
    fetchNextPage();
  }
}, [fetchNextPage, hasNextPage, inView, isFetchingNextPage]);
```


---


### 📦 포스트 렌더링 & 로딩 UI


```typescript
<div className="grid grid-cols-2 gap-4">
  {allPosts.map((post, index) => (
    <Link href={`/blog/${post.slug}`} key={post.id}>
      <PostCard post={post} isFirst={index === 0} />
    </Link>
  ))}
</div>

{hasNextPage && !isFetchingNextPage && <div ref={ref} className="h-10"></div>}

{isFetchingNextPage && (
  <div className="flex items-center justify-center gap-2 py-4">
    <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
    <span className="text-muted-foreground text-sm">loading...</span>
  </div>
)}
```


---


### ✅ 마무리


Next.js의 클라이언트 컴포넌트, React Query, IntersectionObserver를 조합한 무한 스크롤 구현은 사용자 경험을 향상시키는 데 매우 효과적입니다.


초기 데이터는 서버에서 받아오고, 이후 페이지는 클라이언트에서 자연스럽게 이어받도록 구성한 점이 핵심 포인트였습니다.


---


### 📚 참고 자료

- [React Query 공식 문서](https://tanstack.com/query/latest)
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
