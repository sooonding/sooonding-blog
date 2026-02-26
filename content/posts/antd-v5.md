---
title: " Ant Design v5 업그레이드 Next.js 프로덕션 배포 오류"
slug: "antd-v5"
description: "antd 버전 변경 후 배포 오류"
tags: ["antd", "Next.js"]
author: "seongjin jeon"
date: "2025-11-19"
modifiedDate: "2026-02-23T05:41:00.000Z"
notionId: "2a49b006-ca58-80fb-b6f6-c2b178e0435e"
---
## 문제 상황


Ant Design을 4.24.8에서 5.22.5로 업그레이드한 후, 로컬 개발 환경에서는 정상적으로 작동했지만 프로덕션 배포 후 다음과 같은 오류가 발생했습니다.


```plain text
TypeError: (0 , _miscUtil.tuple) is not a function
    at Object.<anonymous> (/app/node_modules/rc-picker/lib/panels/DatetimePanel/index.js:23:40)
```


특히 DatePicker 컴포넌트를 사용하는 페이지에서 오류가 발생하여 애플리케이션이 정상적으로 작동하지 않았습니다.


## 배경 지식


### Next.js의 트랜스파일 메커니즘


Next.js는 기본적으로 `node_modules` 디렉토리 내의 패키지들을 트랜스파일하지 않습니다. 이는 다음과 같은 이유 때문입니다:

1. **빌드 성능**: node_modules의 모든 패키지를 트랜스파일하면 빌드 시간이 크게 증가합니다
2. **가정**: 대부분의 npm 패키지는 이미 CommonJS 또는 범용 ES5 형식으로 배포됩니다
3. **개발자 경험**: 로컬 개발 시 빠른 HMR(Hot Module Replacement)을 위해

하지만 최근 많은 라이브러리들이 ES 모듈(ESM)로만 배포되거나, CommonJS와 ESM을 혼용하면서 이러한 가정이 깨지는 경우가 발생하고 있습니다.


### Ant Design 4 vs 5의 주요 차이


Ant Design 5는 다음과 같은 주요 변경사항이 있습니다:

1. **CSS-in-JS**: Less에서 CSS-in-JS(@ant-design/cssinjs)로 전환
    - 더 이상 `antd/dist/antd.css` import가 필요 없음
    - 런타임 스타일 생성으로 번들 크기 최적화
2. _rc- 패키지 구조 변경_: 많은 하위 컴포넌트(rc-picker, rc-table 등)의 내부 구조가 재작성되었고, ES 모듈 형식으로 배포
3. **TypeScript 지원 강화**: 더 엄격한 타입 정의

### ES 모듈 vs CommonJS


```javascript
// CommonJS (구 방식)
const tuple = require('./miscUtil').tuple;

// ES 모듈 (신 방식)
import { tuple } from './miscUtil';
```


오류 메시지의 `(0 , _miscUtil.tuple) is not a function`는 CommonJS 방식으로 변환된 코드에서 ES 모듈로 작성된 함수를 호출하려다 실패한 경우입니다.


### 왜 개발 환경에서는 잘 작동할까?

- **개발 환경(next dev)**: Webpack의 개발 서버가 모든 모듈을 동적으로 처리하고, 필요시 자동으로 트랜스파일합니다
- **프로덕션(next build)**: 최적화를 위해 엄격한 변환 규칙을 적용하고, 명시적으로 설정하지 않은 node_modules는 트랜스파일하지 않습니다

## 트러블슈팅 과정


### 1단계: 문제 발견


```bash
# 로컬에서는 정상 작동
npm run dev  # ✅ 정상

# 프로덕션 빌드 후 배포
npm run build
npm run start  # ❌ 오류 발생
```


### 2단계: 오류 지점 분석


오류 스택을 추적한 결과:


```plain text
/app/node_modules/rc-picker/lib/panels/DatetimePanel/index.js:23:40
```


이 지점에서 `rc-util/lib/utils/miscUtil`의 `tuple` 함수를 호출하려 했지만 함수가 아닌 것으로 인식되었습니다.


### 3단계: 의존성 버전 확인


```bash
npm ls antd rc-picker rc-util
```


버전 호환성에는 문제가 없었습니다:

- antd: 5.28.0
- rc-picker: 4.11.3
- rc-util: 5.44.4

### 4단계: 근본 원인 파악


문제는 버전 호환성이 아니라 **빌드 과정**에 있었습니다:

1. rc-picker와 rc-util은 ES 모듈 형식으로 작성됨
2. Next.js 13.2.4는 기본적으로 이들을 트랜스파일하지 않음
3. 프로덕션 빌드 시 CommonJS와 ES 모듈이 혼재되어 함수 호출 실패

## 해결 방법


### 해결책: transpilePackages 설정


Next.js 13.1부터 도입된 `transpilePackages` 옵션을 사용하여 특정 node_modules 패키지를 트랜스파일하도록 설정합니다.


### next.config.js 수정


```javascript
// next.config.js
const path = require("path");
const withAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.lensly.co.kr" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "wsconnect-upload.s3.amazonaws.com" },
    ],
    domains: [
      "wsconnect-upload.s3.amazonaws.com",
      "api.lensly.co.kr",
      "localhost",
    ],
  },
  compiler: { emotion: true },
  // ✅ Ant Design 5 및 rc-* 패키지 트랜스파일 설정
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    '@ant-design/cssinjs',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
    'rc-tree',
    'rc-table',
  ],
};

module.exports = withAntdLess({
  lessVarsFilePath: path.resolve(__dirname, "./src/styles/variables.less"),
  lessVarsFilePathAppendToEndOfContent: false,
  javascriptEnabled: true,
  modifyVars: {},
  cssLoaderOptions: {},
  ...nextConfig,
  webpack(config) {
    return config;
  },
});
```


### 왜 이 패키지들을 포함해야 할까?

1. **antd**: 메인 라이브러리
2. **@ant-design/icons**: 아이콘 컴포넌트 (ESM 전용)
3. **@ant-design/cssinjs**: CSS-in-JS 엔진 (Ant Design 5 핵심)
4. **rc-util**: 공통 유틸리티 함수들 (tuple 등)
5. **rc-picker**: DatePicker, TimePicker 등
6. **rc-pagination**: Pagination 컴포넌트
7. **rc-notification**: Notification, Message 컴포넌트
8. **rc-tooltip**: Tooltip, Popover 등
9. **rc-tree**: Tree, TreeSelect 컴포넌트
10. **rc-table**: Table 컴포넌트

각 패키지는 ESM으로 작성되었거나 ESM을 부분적으로 사용하므로 트랜스파일이 필요합니다.


### 적용 및 테스트


```bash
# 의존성 재설치 (선택사항, 필요시)
rm -rf node_modules .next
npm install

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행 (로컬 테스트)
npm run start

# DatePicker 등 Ant Design 컴포넌트 테스트
# ✅ 정상 작동 확인
```


## 추가 팁 및 참고사항


### Next.js 버전별 차이

- **Next.js 13.0 이하**: `next-transpile-modules` 플러그인 사용 필요

    ```bash
    npm install next-transpile-modules
    ```

- **Next.js 13.1 이상**: 내장 `transpilePackages` 옵션 사용 (권장)
- **Next.js 14, 15**: 동일하게 `transpilePackages` 사용

### next-plugin-antd-less와의 관계


Ant Design 5는 CSS-in-JS를 사용하므로 `next-plugin-antd-less`가 더 이상 필수가 아닙니다. 하지만:

- 프로젝트에 커스텀 Less 변수가 있는 경우 유지
- 마이그레이션 기간 동안 Ant Design 4 컴포넌트와 공존할 경우 유지
- 완전히 Ant Design 5로 마이그레이션 후에는 제거 고려

### Ant Design 5 마이그레이션 체크리스트

1. ✅ `antd/dist/antd.css` import 제거
2. ✅ dayjs 플러그인 설정 (weekday, localeData 등)
3. ✅ `transpilePackages` 설정 추가
4. ⚠️ 주요 변경사항 확인 (Form, DatePicker API 변경 등)
5. ⚠️ 커스텀 스타일 마이그레이션 (Less → CSS-in-JS)

### 프로덕션 배포 전 확인사항


```bash
# 1. 로컬에서 프로덕션 빌드 테스트
npm run build && npm run start

# 2. 주요 기능 테스트
# - DatePicker, TimePicker 동작 확인
# - Form 제출 및 검증 확인
# - Table, Pagination 동작 확인
# - Modal, Notification 표시 확인

# 3. 브라우저 콘솔에서 오류 확인

# 4. 번들 크기 확인 (Next.js 빌드 로그)
# Ant Design 5는 CSS-in-JS로 인해 초기 번들이 약간 증가할 수 있음
```


## 결론


### 핵심 요약


Ant Design 5는 CSS-in-JS와 ES 모듈을 적극적으로 사용하므로, Next.js 프로젝트에서는 **반드시** **`transpilePackages`** **설정이 필요**합니다. 이를 통해:

- 프로덕션 배포 시 ES 모듈 변환 오류 방지
- Ant Design 5의 모든 컴포넌트 정상 작동 보장
- 성능 최적화와 호환성 확보

### 비슷한 문제 발생 시 체크리스트

1. **개발 환경에서는 정상, 프로덕션에서만 오류**
    - → transpilePackages 설정 확인
2. **`is not a function`** **또는** **`undefined`** **오류**
    - → ESM/CommonJS 혼용 문제 가능성
3. **Ant Design 컴포넌트 관련 오류**
    - → rc-* 패키지들이 transpilePackages에 포함되었는지 확인
4. **빌드는 성공하지만 런타임 오류**
    - → 프로덕션 빌드를 로컬에서 테스트 (`npm run build && npm run start`)
5. **오류 스택에** **`/node_modules/`** **경로 포함**
    - → 해당 패키지를 transpilePackages에 추가

### 참고 자료

- [Next.js - Transpile Packages](https://nextjs.org/docs/app/api-reference/next-config-js/transpilePackages)
- [Ant Design 5 - Migration Guide](https://ant.design/docs/react/migration-v5)
- [Ant Design 5 - CSS-in-JS](https://ant.design/docs/react/customize-theme)

---


**환경 정보**

- Next.js: 13.2.4
- Ant Design: 5.22.5 (from 4.24.8)
- Node.js: 18+
- 배포 환경: Docker (standalone output)
