# Content 디렉토리

이 디렉토리는 Notion에서 자동 동기화된 블로그 글을 저장합니다.

## 📁 구조

```
content/
└── posts/          # Notion에서 동기화된 블로그 포스트 (Markdown)
    ├── post-1.md
    ├── post-2.md
    └── ...
```

## 🔄 동기화 방식

- **자동 동기화**: GitHub Actions가 매일 자정(KST 오전 9시)에 자동으로 Notion 데이터를 동기화합니다.
- **수동 동기화**: GitHub Actions 탭에서 `Sync Notion to Markdown` 워크플로우를 수동으로 실행할 수 있습니다.
- **로컬 동기화**: `npm run sync:notion` 명령어로 로컬에서도 동기화 가능합니다.

## 📝 파일 형식

각 markdown 파일은 frontmatter와 본문으로 구성됩니다:

```markdown
---
title: "블로그 글 제목"
slug: "post-slug"
description: "글 설명"
tags: ["JavaScript", "React"]
author: "작성자"
date: "2024-01-01"
modifiedDate: "2024-01-02T12:00:00.000Z"
notionId: "notion-page-id"
---

# 본문 내용

여기에 Notion에서 변환된 markdown 내용이 들어갑니다...
```

## ⚠️ 주의사항

- 이 디렉토리의 파일들은 **자동 생성**되므로 직접 수정하지 마세요.
- 모든 수정은 Notion에서 해야 합니다.
- 동기화 시 기존 파일들이 덮어씌워집니다.
