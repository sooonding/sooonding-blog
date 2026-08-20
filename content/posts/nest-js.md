---
title: "Nest.js 일지"
slug: "nest-js"
description: "nestjs 로그"
tags: ["nest.js"]
author: "seongjin jeon"
date: "2026-08-19"
modifiedDate: "2026-08-19T06:15:00.000Z"
notionId: "3c19b006-ca58-802a-95b4-c29b945cfae9"
---
## 2026-08-14 — 0.1 NestJS 프로젝트 구조와 실행 진입점


### 공부한 개념

- Nest 애플리케이션의 부트스트랩 진입점
- Root Module, Controller, Provider의 가장 작은 구성
- TypeScript `strict` 옵션이 strict 계열 검사를 묶어서 활성화한다는 점
- lint, unit test, E2E test, build, 실제 HTTP 호출의 검증 범위 차이

### 내가 구현한 내용

- 아직 학습자가 직접 작성한 기능 코드는 없다.
- 강사가 빈 작업공간에 공식 Nest CLI로 초기 프로젝트를 준비했다.
- Task 기능은 구현하지 않았다.

### 환경 준비와 발견 사항

- Node.js: `v25.6.1`
- pnpm: `10.11.0`
- Nest CLI: `11.0.14`
- 프로젝트: `taskflow-api`
- CLI 생성 결과에 일부 strict 옵션만 있어 `strict: true`를 명시했다.
- `types`가 Node로만 제한되어 Jest 전역 타입을 찾지 못하므로 `jest` 타입을 명시했다.
- 포트 3000은 기존 Node 프로세스가 사용 중이었다. 기존 프로세스는 건드리지 않고 QA에 포트 3107을 사용했다.

### 발견한 오개념

- Controller가 라우팅을 선택하고 주입된 Service를 호출한다는 관계는 정확히 예측했다.
- 학습자에게서 확인된 오개념보다 먼저 발견된 것은 `class` 선수 지식의 공백이다.
- `인스턴스`, `DI`, `Provider`를 class보다 먼저 사용한 것은 학습자의 문제가 아니라 수업 순서의 문제다.
- Nest 요청 흐름에 대한 추가 설명은 object와 class 기초를 익힌 뒤 다시 진행한다.
- class retrieval에서 `class`를 “여러 객체를 한곳에 모은 집합체”라고 이해하고 있었다.
- 정확한 보완점: class는 객체를 보관하는 집합이 아니라, 비슷한 객체를 만들 때 따를 공통 기준이다.
- 붕어빵 틀과 붕어빵의 대응은 정확히 기억했다. 다만 붕어빵이 틀 안에 모여 있는 것이 아니라 틀을 사용해 각각 만들어진다는 점을 보완한다.
- P.2에서 처음에는 `{}`를 object라고 답했지만, 최종적으로 “틀의 내용을 적는 공간”이라고 정확히 구분했다.
- P.5에서 “보관 칸” 비유가 불명확했다. 평범한 object의 `title` 이름과 값의 관계로 다시 설명하자 이해했다.
- `Task`는 틀이고 `new Task()`는 object를 만드는 코드이며, `this`는 그 과정에서 만들어지고 있는 object를 가리킨다는 점을 확인했다.

### 테스트 결과


| 검증        | 결과 | 관찰                            |
| --------- | -- | ----------------------------- |
| lint      | 성공 | 종료 코드 0, 경고·오류 없음             |
| unit test | 성공 | 1 suite, 1 test 통과            |
| E2E test  | 성공 | 1 suite, 1 test 통과            |
| build     | 성공 | `nest build` 종료 코드 0          |
| 실제 HTTP   | 성공 | `GET /` → 200, `Hello World!` |


초기 lint 실패 원인: Jest 타입이 TypeScript 프로그램에 포함되지 않아 테스트 전역을 해석하지 못했다. 타입 설정을 수정한 뒤 통과했다.


한 차례 잘못 실행한 `test -- --runInBand`는 `--runInBand`를 테스트 이름 패턴으로 전달해 “No tests found”가 발생했다. 올바른 `test --runInBand`에서는 테스트가 통과했다.


### 학습 활동

- prediction 답변 완료: `main.ts` → Module 등록 → Controller 라우팅 → Service 호출로 예측했다.
- 난이도 피드백에 따라 reflection을 중단했다.
- class 기초 retrieval을 완료했다.
- 처음에는 class를 여러 object의 집합으로 표현했지만, 최종적으로 “비슷한 object를 만들기 위한 틀”이라고 정확히 답했다.
- `class User {}`를 직접 작성했고 class 이름에 `User`처럼 PascalCase를 적용했다.
- `class`, `User`, `{}`의 역할을 구분해 P.2를 완료했다.
- `const task = new Task();`를 직접 작성해 `Task` 틀로 만든 object를 `task`라는 이름으로 보관했다.
- `new`를 “새로운 object를 만들라고 하는 것”이라고 정확히 설명해 P.3을 완료했다.
- `new Task('청소하기')`의 값이 `constructor(title: string)`의 `title`로 들어온다고 정확히 답했다.
- `constructor`를 “object를 만들 때 처음 전달된 값을 받는 곳”이라고 설명해 P.4를 완료했다.
- `this.title = title`에서 왼쪽은 만들어지고 있는 object의 `title` 속성이고, 오른쪽은 전달받은 값이라고 설명했다.
- `this.title`과 생성이 끝난 뒤의 `task.title`이 같은 object의 같은 속성을 가리킨다는 점을 이해해 P.5를 완료했다.
- 처음에는 메서드 호출 대신 `getTitle() { ... }` 메서드를 다시 정의했다.
- 다음 시도에서는 class 밖에서도 `this.getTitle()`을 사용했지만, class 밖에서는 object 변수 이름을 사용한다는 힌트로 수정했다.
- 최종적으로 `task.getTitle()`을 직접 작성했고, 전체 문장 `const title = task.getTitle();`의 호출 구조를 완성해 P.6을 완료했다.
- `: string`이 해당 값은 문자열이어야 한다고 명시하는 표시임을 이미 알고 있었다.
- `const title: string = 123;`은 숫자를 문자열로 바꾸지 않고 TypeScript 타입 오류가 난다고 정확히 답해 P.7을 완료했다.
- 보완할 부분: 숫자에 항상 `: number`를 직접 적어야 하는 것은 아니다. TypeScript는 `123`을 보고 `number`로 추론할 수 있다.
- P.8 retrieval에서 `: string`은 값을 문자열로 바꾸는 것이 아니라 문자열만 허용한다고 정확히 회상했다.
- 처음에는 `let nextTitle = '청소하기'`에 `123`을 재할당해도 TypeScript가 새 값을 보고 다시 추론할 것으로 생각했다.
- 보완한 개념: TypeScript는 변수를 선언할 때 처음 값을 보고 타입을 정하며, 값을 재할당할 때마다 변수의 타입을 바꾸지 않는다.
- `let count = 0`은 `number`로 추론되므로 이후 문자열을 넣을 수 없다고 정확히 설명했다.
- 타입 표시를 생략한 `let title = '공부하기'`를 직접 작성했다.
- 타입 추론을 “타입을 명시하지 않아도 처음 값의 타입을 보고 추론하며, 다른 타입을 재할당하면 타입 오류가 발생한다”라고 설명해 P.8을 완료했다.
- 표현 보완: TypeScript가 추론하는 대상은 새로운 **값**이 아니라 그 값을 담는 **변수의 타입**이다.

### 다음 세션에서 회상할 질문

- `let title = '공부하기'`에서 `title`의 타입은 언제, 무엇을 근거로 정해지는가?

---


## 2026-08-16 — P.9 함수의 입력 타입과 반환 타입


### 공부한 개념

- 함수 매개변수 뒤의 `: 타입`은 함수가 받는 값의 타입을 표시한다.
- 닫는 괄호 뒤의 `: 타입`은 함수가 반환하는 결과의 타입을 표시한다.
- 함수 안에서 사용하는 값은 이전 함수의 변수 이름이 아니라 현재 함수가 받은 매개변수 이름을 사용한다.

### 내가 구현한 내용

- 문자열 길이를 반환하는 함수에서 `text: string`과 `): number`의 의미를 설명했다.
- 숫자를 받아 두 배로 반환하는 함수를 직접 작성했다.

```plain text
function double(value: number): number {
  return value * 2;
}
```


### 발견한 오개념

- 처음에는 숫자를 두 배로 만드는 반환식에 `value & 2`를 사용했다.
- `&`는 곱하기가 아니라 비트 연산자이며, 곱하기에는 를 사용한다고 보완했다.
- `value: number`는 입력 타입, `): number`는 반환 타입이라고 정확히 teach-back했다.

### 테스트 결과

- 함수 작성 연습만 진행했으며 프로젝트 파일은 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 다음 세션에서 회상할 질문

- `interface`는 class와 어떻게 다르고, object의 어떤 부분을 설명하는가?

---


## 2026-08-16 — P.10 `interface`와 object의 모양


### 공부한 개념

- `interface`는 object가 가져야 할 속성 이름과 타입을 적은 설명서다.
- `interface`는 object를 만들거나 코드를 실행하지 않는다.
- `class`는 `new`로 비슷한 object를 만들기 위한 틀이며 속성과 함수를 함께 정의할 수 있다.
- interface의 속성 뒤에 `?`가 없으면 object에 반드시 있어야 한다.

### 내가 구현한 내용

- `Task` interface를 작성하고, `title: string`과 `completed: boolean`을 정의했다.
- 두 필수 속성을 모두 가진 Task object를 직접 작성했다.

```plain text
interface Task {
  title: string;
  completed: boolean;
}

const task: Task = {
  title: '공부하기',
  completed: true,
};
```


### 발견한 오개념

- 처음에는 interface와 class를 모두 object를 모아 두는 “바구니”로 표현했다.
- 보완한 개념: interface는 object의 타입과 모양을 설명하고, class는 object를 만드는 틀이다.
- `new`로 실제 object를 만들 수 있는 것은 class라고 정확히 답했다.

### 테스트 결과

- interface 연습 코드만 작성했으며 프로젝트 파일은 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: 함수의 입력 타입과 반환 타입을 정확히 회상했다.
- teach-back 완료: “interface는 object의 타입, class는 object를 만드는 틀”이라고 설명했다.

### 다음 세션에서 회상할 질문

- `interface Task`에서 `completed` 뒤의 `?`를 붙이면 object 작성 시 무엇이 달라지는가?

---


## 2026-08-18 — P.11 union 타입과 narrowing


### 공부한 개념

- union 타입은 `|`로 여러 타입을 허용하는 타입이다.
- union 변수는 한 순간에는 실제 값 하나를 가지며, 그 값의 타입은 후보 중 하나다.
- narrowing은 `typeof` 같은 확인을 통해 union 타입의 현재 가능성을 더 좁히는 과정이다.
- 문자열과 숫자를 템플릿 문자열에 넣으면 최종 반환값은 문자열이다.

### 내가 구현한 내용

- `string | number`를 받는 `formatId` 함수를 직접 작성했다.
- `typeof id === 'string'` branch에서 문자열 형식을 반환하고, 나머지 branch에서 숫자를 문자열 형식으로 반환했다.

```plain text
function formatId(id: string | number): string {
  if (typeof id === 'string') {
    return `ID:${id}`;
  }
  return `ID-${id}`;
}
```


### 발견한 오개념

- 처음에는 문자열 보간에 `{id}`를 사용했지만, 템플릿 문자열 변수 삽입은 `${id}`라는 점을 보완했다.
- 처음에는 union을 값이 여러 타입을 동시에 갖는 것으로 오해할 수 있었으나, 실제로는 허용 가능한 타입 후보가 여러 개라는 점을 확인했다.

### 테스트 결과

- `formatId('task-1')`의 결과를 `"ID:task-1"`, `formatId(42)`의 결과를 `"ID-42"`로 정확히 예측했다.
- 연습 코드는 프로젝트 파일에 저장하지 않았으며 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: optional interface 속성의 의미를 정확히 회상했다.
- teach-back 완료: union은 여러 타입을 허용하고 narrowing은 타입을 좁히는 과정이라고 설명했다.

### 다음 세션에서 회상할 질문

- `string | number`에서 실제 값의 타입을 확인하기 위해 어떤 narrowing 방법을 사용했는가?

---


## 2026-08-18 — P.12 `type` 별칭과 `interface` 비교


### 공부한 개념

- `type`은 타입에 이름을 붙이는 별칭이다.
- `interface`와 `type` 모두 object의 속성과 타입을 설명하는 데 사용할 수 있다.
- `type`은 object 모양뿐 아니라 union이나 기본 타입에도 이름을 붙일 수 있다.
- 문자열 literal union을 사용하면 특정 문자열 후보만 허용할 수 있다.

### 내가 구현한 내용

- `Task`를 `type`으로 정의했다.
- `title: string`, `status: 'todo' | 'doing' | 'done'`, `completed: boolean`을 작성했다.
- `Task` 타입을 만족하는 object를 직접 작성했다.

```plain text
type Task = {
  title: string;
  status: 'todo' | 'doing' | 'done';
  completed: boolean;
};

const task: Task = {
  title: '공부하기',
  status: 'doing',
  completed: false,
};
```


### 발견한 오개념

- 처음에는 object 속성 이름을 `제목`, `상태`, `완료 여부`로 작성했다.
- 보완한 개념: object의 속성 이름은 타입에 정의한 `title`, `status`, `completed`와 정확히 일치해야 한다.

### 테스트 결과

- `Task` type과 object 작성 연습만 진행했으며 프로젝트 파일은 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: `typeof`로 union 값의 현재 타입을 확인하는 방법을 회상했다.
- teach-back 완료: `interface`와 `type`의 공통점과 `type`이 union에도 사용된다는 차이를 설명했다.

### 다음 세션에서 회상할 질문

- `type TaskId = string | number`에서 `TaskId`는 새로운 값을 만드는가, 아니면 타입에 이름을 붙이는가?

---


## 2026-08-18 — P.13 `Promise`와 비동기 반환 타입


### 공부한 개념

- `Promise`는 지금 결과가 아니라 나중에 완료될 작업의 결과를 나타낸다.
- Promise의 상태는 `pending`, `fulfilled`, `rejected`로 설명할 수 있다.
- `Promise<string>`에서 `string`은 성공했을 때 전달될 결과의 타입이다.
- `async` 함수는 반환값을 Promise로 감싼다.
- `await`는 Promise가 완료될 때까지 기다린 뒤 성공한 결과값을 꺼낸다.
- `getTaskTitle()`의 타입은 `Promise<string>`이고, `await getTaskTitle()`의 결과 타입은 `string`이다.

### 내가 구현한 내용

- 문자열을 비동기적으로 반환하는 함수를 직접 작성했다.

```plain text
async function getTaskTitle(): Promise<string> {
  return '공부하기';
}
```


### 발견한 오개념

- 처음에는 `getTaskTitle()`을 단순한 함수 실행으로, `await getTaskTitle()`을 비동기 함수 실행으로 표현했다.
- 보완한 개념: `async` 함수 호출은 Promise를 반환하고, `await`는 그 Promise의 완료를 기다려 결과값을 꺼낸다.

### 테스트 결과

- Promise 연습 코드만 작성했으며 프로젝트 파일은 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: `type TaskId`가 기존 타입에 이름을 붙이는 별칭임을 회상했다.
- teach-back 완료: `Promise<string>`과 `await`의 역할을 설명했다.

### 다음 세션에서 회상할 질문

- `async` 함수 안에서 `return '공부하기'`를 작성해도 함수의 반환 타입이 `string`이 아니라 `Promise<string>`인 이유는 무엇인가?

---


## 2026-08-18 — P.14 generic으로 타입 관계 보존하기


### 공부한 개념

- `<T>`는 함수 안에서 사용할 generic 타입 이름을 선언하는 부분이다.
- `value: T`와 `: T[]`처럼 같은 `T`를 여러 위치에서 사용하면 입력 타입과 반환 타입의 관계가 보존된다.
- 호출 시 TypeScript가 입력값을 보고 `T`를 추론한다.
- union은 여러 타입 후보를 허용하지만, generic은 이번 호출의 구체적인 입력 타입을 기억해 반환에 연결한다.
- `any`와 달리 generic은 타입 정보를 잃지 않는다.

### 내가 구현한 내용

- 어떤 타입의 값 하나를 받아 같은 타입의 배열로 감싸 반환하는 generic 함수를 직접 작성했다.

```plain text
function wrap<T>(value: T): T[] {
  return [value];
}

wrap('공부하기'); // string[]
wrap(100);        // number[]
```


### 발견한 오개념

- 처음에는 반환 타입을 `<T>`로 작성했지만, 반환 배열 타입은 `T[]`로 표시해야 한다는 점을 보완했다.
- 반환 타입을 `T[]`로 표시한 뒤에도 `return value`를 사용했으나, 값 하나가 아니라 `[value]` 배열을 반환해야 한다는 점을 수정했다.
- `<T>` 없이 `value: T`를 사용하면 `T` 선언을 찾을 수 없어 오류가 난다는 점을 이해했다.

### 테스트 결과

- generic 함수 작성 연습만 진행했으며 프로젝트 파일은 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: `async` 함수의 반환 타입이 Promise가 되는 이유를 회상했다.
- teach-back 완료: generic이 입력값의 타입에 맞춰 반환 타입을 연결한다는 점을 union과 비교해 설명했다.

### 다음 세션에서 회상할 질문

- `wrap('공부하기')`에서 `T`는 어떤 타입으로 추론되는가?

---


## 2026-08-18 — P.15 TypeScript 기초 통합과 Nest 진입 준비


### 공부한 개념

- `TaskStatus` union은 Task 상태에 허용되는 문자열 후보를 제한한다.
- `Task` interface는 Task object의 속성과 타입을 설명한다.
- `keep<T>(value: T): T`는 입력 타입과 반환 타입의 관계를 보존한다.
- `loadTask(): Promise<Task>`는 비동기 작업이 끝난 뒤 Task를 반환한다.

### 내가 구현한 내용

- `TaskStatus` union, `Task` interface, generic `keep` 함수, `loadTask` 비동기 함수를 하나의 흐름으로 연결했다.
- `loadTask`는 특정 Task를 불러오는 함수이므로 불필요한 generic 매개변수를 제거했다.

### 발견한 오개념

- 처음에는 `loadTask<T>(value: T): Promise<T>`로 작성했지만, 이 함수는 임의의 값을 변환하는 함수가 아니라 Task를 불러오는 함수다.
- `return await value`가 아니라 `return task`를 사용해야 한다. `await`는 Promise를 기다릴 때 사용한다.

### 테스트 결과

- 통합 연습 코드만 작성했으며 프로젝트 파일은 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: `wrap('공부하기')`에서 `T`가 `string`으로 추론됨을 회상했다.
- teach-back은 학습자 요청에 따라 강사가 역할을 설명하는 방식으로 대체했다.

### 강사 정리

- `TaskStatus`: 상태값의 허용 범위를 정하는 union 타입
- `Task`: Task object의 필수 속성과 타입을 정하는 interface
- `keep`: 받은 값을 같은 타입으로 돌려주는 generic 함수
- `loadTask`: 비동기 작업 결과로 Task를 돌려주는 Promise 함수

### 다음 세션에서 회상할 질문

- `loadTask`의 반환 타입이 `Task`가 아니라 `Promise<Task>`인 이유는 무엇인가?

---


## 2026-08-18 — N.1 NestJS Module·Controller·Provider 요청 흐름


### 공부한 개념

- `main.ts`는 `NestFactory.create(AppModule)`로 앱을 만들고 서버를 시작하는 진입점이다.
- `AppModule`은 사용할 Controller와 Provider를 등록하는 구성표다.
- Controller는 HTTP 경로와 요청을 받고 Provider를 호출한다.
- Provider(Service)는 실제 기능과 업무 로직을 담당하며, 반드시 HTTP 응답 자체를 직접 만들지는 않는다.
- `GET /` 요청은 `AppController`의 `@Get()` 메서드를 거쳐 `AppService.getHello()`를 호출한다.

### 내가 설명한 내용

- HTTP 요청이 들어오면 `main.ts`가 매번 실행되는 것이 아니라, 서버가 이미 시작된 뒤 Controller가 요청을 처리한다고 답했다.
- `providers: [AppService]`가 없으면 Service의 함수가 사라지는 것이 아니라 Nest가 Controller에 넣어줄 Provider를 찾지 못해 오류가 난다고 보완했다.
- Controller는 라우팅과 요청 연결을 담당하고, Service는 Controller가 호출하는 실제 기능을 담당한다고 설명했다.

### 발견한 오개념

- 처음에는 Service를 “라우터를 호출한 데이터에 대한 response”로 표현했다.
- 보완한 개념: Controller가 HTTP 응답으로 연결하고, Service는 계산·저장 등 실제 기능을 담당한다.

### 테스트 결과

- 기존 생성 파일을 읽어 요청 경로를 추적했으며 프로젝트 코드는 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: `main.ts`가 `AppModule`을 사용해 앱을 시작한다는 흐름을 회상했다.
- trace-path 완료: `main.ts` → `AppModule` → `AppController` → `AppService` 경로를 추적했다.
- teach-back 완료: Service의 역할을 Controller와 구분해 설명했다.

### 다음 세션에서 회상할 질문

- `AppModule`의 `providers` 배열에 `AppService`를 등록하는 이유는 무엇인가?

---


## 2026-08-18 — N.3 메모리 기반 Task Provider 설계


### 공부한 개념

- Service의 메모리 상태는 class 속성으로 만들어야 여러 요청에서 유지된다.
- 메서드 안의 지역 배열은 호출 때마다 새로 만들어져 이전 데이터가 사라진다.
- `private` 속성은 class 밖에서 직접 접근하지 못하게 하고, Service가 정한 메서드로만 상태를 다루게 한다.
- Controller는 `findAll()`과 `create()`를 호출하고, `tasks` 배열 자체는 Service가 관리한다.

### 내가 구현한 내용

- `Task[]` 배열을 `private tasks` 속성으로 선언했다.
- `findAll(): Task[]`로 전체 목록을 반환했다.
- `create(task: Task): Task`로 Task를 배열에 추가하고 추가한 Task를 반환했다.

```plain text
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(task: Task): Task {
    this.tasks.push(task);
    return task;
  }
}
```


### 발견한 오개념

- 처음에는 `findAll(): {`처럼 반환 타입 위치에 중괄호를 작성했다.
- 보완한 개념: 메서드 반환 타입은 `findAll(): Task[]`처럼 작성하고, 중괄호는 함수 본문을 여는 데 사용한다.
- `private` 속성은 Service 밖에서 직접 접근할 수 없고, 공개 메서드는 외부에서 호출할 수 있다는 점을 확인했다.

### 테스트 결과

- 메모리 Provider class 연습 코드는 프로젝트 파일에 저장하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: Task 배열은 Service class 속성으로 만들어야 유지된다고 회상했다.
- teach-back 완료: Controller에서 `findAll()`을 사용할 수 있고 `private tasks`는 직접 사용할 수 없는 이유를 설명했다.

### 다음 세션에서 회상할 질문

- Controller가 `private tasks`에 직접 접근하지 않고 Service의 `findAll()`을 호출해야 하는 이유는 무엇인가?

---


## 2026-08-19 — N.4 Controller에서 메모리 Task Provider 호출하기


### 공부한 개념

- `@Controller('tasks')`는 Controller 내부 route 앞에 `/tasks` prefix를 붙인다.
- Controller의 `@Get()` 메서드는 실제 `GET /tasks` 요청과 연결된다.
- Controller는 Service의 `findAll()`을 호출하고, Service 밖의 `private tasks` 배열에는 직접 접근하지 않는다.
- 타입만 사용하는 `Task`는 `import type`으로 가져오고, 실행되는 `TasksService` class는 일반 import로 가져온다.

### 내가 구현한 내용

- `src/tasks/tasks.controller.ts`를 실제로 작성했다.
- `src/tasks/tasks.service.ts`의 메모리 배열과 `findAll(): Task[]`를 연결했다.
- `TasksModule`을 `AppModule`에 등록했다.
- `GET /tasks` route를 실제 서버에서 확인했다.

### 발견한 오개념

- 처음에는 `Task` interface를 일반 import로 가져왔지만, 타입 전용 import는 `import type`을 사용해야 한다는 점을 이해했다.
- `Task`가 export되지 않아 Controller의 공개 메서드 반환 타입에서 TS4053 오류가 발생했으며, 타입을 export해 모듈 경계를 해결했다.

### 테스트 결과


| 검증               | 결과 | 관찰                          |
| ---------------- | -- | --------------------------- |
| `pnpm run build` | 성공 | 종료 코드 0                     |
| 실제 HTTP          | 성공 | `GET /tasks` → 200, 응답 `[]` |


### 학습 활동

- debugging 활동 완료: TS4053의 원인을 “공개 반환 타입이 export되지 않은 `Task`를 사용함”으로 확인했다.
- trace-path 완료: `GET /tasks` → `TasksController.findAll()` → `TasksService.findAll()` → 메모리 배열 경로를 실제로 확인했다.

### 다음 세션에서 회상할 질문

- `GET /tasks`와 달리 `POST /tasks`는 Controller에서 어떤 HTTP 정보를 받아야 하는가?

---


## 2026-08-19 — N.5 `POST /tasks`와 메모리 Task 생성


### 공부한 개념

- POST 요청 body는 `@Body()` 매개변수로 Controller에 들어온다.
- Controller는 body를 `tasksService.create(task)`에 전달한다.
- Service의 `create`는 `this.tasks.push(task)`로 저장하고, `return task`로 생성된 객체를 돌려준다.
- Controller도 Service의 반환값을 `return`해야 HTTP 응답 body에 생성된 Task가 포함된다.
- `push` 자체의 반환값은 Task가 아니라 배열의 새 길이이므로 `return task`를 별도로 작성해야 한다.

### 내가 구현한 내용

- `POST /tasks` route를 실제 Controller에 추가했다.
- `@Body() task`를 받아 Service의 `create`로 전달했다.
- 메모리 배열에 Task를 저장하고 생성된 Task를 응답하도록 연결했다.

### 발견한 오개념

- 처음에는 Service가 Task를 반환해도 Controller에서 그 반환값을 버리고 있었다.
- 보완한 개념: Service의 결과를 HTTP 응답으로 보내려면 Controller에서도 `return this.tasksService.create(task)`를 사용해야 한다.
- `@Post('/task')`는 `/tasks/task`가 되므로, 목표 경로 `/tasks`에는 `@Post()`를 사용해야 한다.

### 테스트 결과


| 검증               | 결과 | 관찰                                   |
| ---------------- | -- | ------------------------------------ |
| `pnpm run build` | 성공 | 종료 코드 0                              |
| 실제 POST          | 성공 | `POST /tasks` → 201, 생성 Task JSON 반환 |
| 실제 GET           | 성공 | 이어서 `GET /tasks` → 저장된 Task 배열 반환    |


### 학습 활동

- retrieval 완료: POST 요청은 body 값을 받는다는 점을 회상했다.
- trace-path 완료: JSON body → `@Body()` → Controller → Service `create` → 배열 저장 → HTTP 응답 경로를 추적했다.

### 다음 세션에서 회상할 질문

- 현재 Task에 `id`가 없다면, 여러 Task 중 특정 Task 하나를 어떻게 구분할 수 있는가?

---


## 2026-08-19 — N.6 Task 식별자와 단건 조회


### 공부한 개념

- 저장되는 `Task`에는 서버가 생성한 `id`가 포함된다.
- 요청 body는 `CreateTask`로 받고, Service가 `nextId`를 사용해 완성된 `Task`를 만든다.
- `@Get(':id')`의 `:id`는 동적 URL parameter다.
- `@Param('id')`의 실제 값은 문자열이므로 `Number(id)`로 변환해야 숫자 ID 비교가 동작한다.
- `findOne`은 배열에서 하나를 찾기 위해 `find`를 사용하고, 결과가 없으면 `undefined`가 된다.

### 내가 구현한 내용

- `Task`와 `CreateTask` 타입을 분리했다.
- Service에 `nextId`를 추가하고 생성 시 ID를 자동 부여했다.
- `GET /tasks/:id` route와 `findOne(id)`를 연결했다.

### 발견한 오개념

- 처음에는 `@Param('id') id: number`로 작성했지만, 타입 표시만으로 문자열 URL 값이 숫자로 변환되지는 않는다는 점을 확인했다.
- `@Get('id')`는 문자 그대로 `/tasks/id`이고, `@Get(':id')`가 동적 parameter route라는 점을 구분했다.

### 테스트 결과


| 검증               | 결과    | 관찰                               |
| ---------------- | ----- | -------------------------------- |
| `pnpm run build` | 성공    | 종료 코드 0                          |
| 존재하는 ID          | 성공    | `GET /tasks/1` → 200 + Task JSON |
| 존재하지 않는 ID       | 보완 필요 | `GET /tasks/999` → 200 + 빈 응답    |


### 학습 활동

- retrieval 완료: 같은 title만으로는 Task를 안정적으로 식별할 수 없음을 설명했다.
- trace-path 완료: URL parameter 문자열 → 숫자 변환 → `findOne` → Task 조회 경로를 실제로 확인했다.

### 다음 세션에서 회상할 질문

- `findOne`이 `undefined`를 반환할 때 Controller는 왜 404 응답으로 바꿔야 하는가?

---


## 2026-08-19 — N.7 없는 Task ID의 404 예외 처리


### 공부한 개념

- Service의 `findOne`은 찾은 Task 또는 `undefined`를 반환할 수 있다.
- `undefined`는 저장된 Task가 없다는 도메인 결과이고, Controller는 이를 HTTP 의미인 404로 변환한다.
- `NotFoundException`은 Nest가 제공하는 내장 HTTP 예외이며, 던지면 기본 예외 처리 계층이 404 JSON 응답을 만든다.
- 정상 데이터 흐름과 실패 데이터 흐름은 서로 다른 HTTP 상태 코드로 표현해야 한다.

### 내가 구현한 내용

- `TasksController.findOne`에서 `NotFoundException`을 import했다.
- `this.tasksService.findOne(Number(id))`의 결과가 `undefined`인지 확인했다.
- 결과가 없으면 `throw new NotFoundException(...)`, 있으면 Task를 반환하도록 작성했다.

### 발견한 오개념

- “없는 페이지라서 404”라는 설명을 REST resource 관점으로 보완했다. 여기서 404는 페이지뿐 아니라 요청한 Task resource를 찾지 못했다는 뜻이다.
- Service가 `undefined`를 반환하는 것과 HTTP 응답이 404가 되는 것은 같은 계층의 일이 아니다. Controller가 변환해야 한다.

### 테스트 결과


| 검증               | 결과 | 관찰                                              |
| ---------------- | -- | ----------------------------------------------- |
| `pnpm run build` | 성공 | 종료 코드 0                                         |
| 존재하는 ID          | 성공 | `GET /tasks/1` → 200 + Task JSON                |
| 존재하지 않는 ID       | 성공 | `GET /tasks/999` → 404 + `statusCode: 404` JSON |


### 학습 활동

- retrieval 완료: 식별자가 없는 resource는 404로 응답해야 한다는 점을 회상했다.
- prediction 완료: Service 결과를 Controller가 HTTP 예외로 바꾸는 구조를 예측한 뒤 구현했다.
- teach-back 통과: “Service는 HTTP 통신을 알 필요 없이 기능을 관장하고, Controller가 `undefined`를 `NotFoundException`으로 바꾼다”고 설명했다.

### 다음 세션에서 회상할 질문

- `findOne`이 `Task | undefined`를 반환할 때, Controller가 먼저 확인해야 하는 값은 무엇인가?

---


## 2026-08-19 — N.8 Task 수정과 삭제의 요청 흐름


### 공부한 개념

- `PATCH /tasks/:id`는 전체 Task가 아니라 body에 보낸 필드만 수정한다.
- `UpdateTask`의 선택형 속성(`?`)은 PATCH body에서 필드를 생략할 수 있게 한다.
- `readonly` Task 속성을 직접 바꾸지 않고, 기존 Task와 input을 합친 새 객체로 배열의 해당 칸을 교체한다.
- `findIndex`는 배열 위치를 찾고, 결과가 `1`이면 해당 ID가 없다는 뜻이다.
- `splice(index, 1)`은 원본 배열에서 한 항목을 실제로 제거하고, 제거된 항목을 배열로 반환한다.
- Controller는 Service의 `undefined`를 `NotFoundException`으로 바꿔 수정·삭제 실패를 404로 표현한다.

### 내가 구현한 내용

- `UpdateTask` 타입을 추가했다.
- `TasksService.updateTask`로 부분 수정과 배열 칸 교체를 구현했다.
- `TasksService.removeTask`로 `splice` 기반 삭제를 구현했다.
- `PATCH /tasks/:id`와 `DELETE /tasks/:id` Controller route를 연결했다.
- 두 route 모두 없는 ID를 404로 변환했다.

### 발견한 오개념

- `filter`는 새 배열을 반환하지만 `this.tasks`를 변경하지 않으므로 현재 `readonly` 배열 저장소의 삭제 구현으로는 부족하다.
- `const [removedTask]`는 `splice`가 반환한 배열의 첫 번째 요소를 꺼내는 배열 구조 분해 할당이다.
- `completed: true`가 자동으로 `status: 'done'`을 의미하지는 않는다. 현재 두 필드는 독립적이다.

### 테스트 결과


| 검증                              | 결과 | 관찰                      |
| ------------------------------- | -- | ----------------------- |
| `pnpm run build`                | 성공 | 종료 코드 0                 |
| `pnpm run lint`                 | 성공 | 종료 코드 0                 |
| `pnpm test --runInBand`         | 성공 | 1개 suite, 1개 test 통과    |
| `pnpm run test:e2e --runInBand` | 성공 | 1개 suite, 1개 test 통과    |
| 실제 PATCH 정상                     | 성공 | 일부 필드만 변경되고 나머지는 유지     |
| 실제 PATCH 실패                     | 성공 | 없는 ID → 404             |
| 실제 DELETE 정상                    | 성공 | 삭제된 Task 반환, 이후 목록에서 제거 |
| 실제 DELETE 실패                    | 성공 | 이미 삭제된 ID → 404         |


### 학습 활동

- retrieval은 사용자가 건너뛰었고, 이전 세션의 `undefined` → Controller 404 흐름을 다시 설명했다.
- prediction 완료: PATCH body에 보낸 필드만 바뀌고 나머지는 유지된다는 결과를 예측했다.
- debugging 활동 완료: strict 모드의 implicit `any` 오류와 `filter`가 원본 배열을 바꾸지 않는 문제를 확인했다.
- teach-back 통과: Controller가 `id`와 body를 받아 Service로 전달하고, 기존 Task와 PATCH input을 합쳐 `completed`만 변경하므로 `title`과 `status`가 유지된다고 설명했다.

### 다음 세션에서 회상할 질문

- `PATCH`의 부분 수정과 `PUT`의 전체 교체는 body를 어떻게 다르게 해석해야 하는가?

---


## 2026-08-19 — N.9 단위 테스트 입문 (1차)


### 공부한 개념

- 단위 테스트는 함수나 Service 메서드에 입력을 넣고 결과를 자동으로 확인하는 코드다.
- `describe`는 관련 테스트를 묶고, `it`은 하나의 시나리오를 설명한다.
- `expect(...).toBe(...)`와 `toHaveLength(...)`로 반환값과 배열 상태를 검사한다.
- Service 단위 테스트에서는 HTTP 상태 코드가 아니라 Service의 도메인 결과(`Task`, `undefined`)를 검사한다.
- “Service가 호출되었는가”는 Controller와 mock을 함께 테스트할 때의 관심사이고, Service 단위 테스트에서는 메서드 결과와 상태를 확인한다.

### 내가 구현한 내용

- 아직 테스트 파일은 작성하지 않았다.
- `TasksService.create`를 직접 호출하고 반환된 Task와 저장 목록을 검사하는 첫 테스트의 구조를 학습했다.

### 발견한 오개념

- 처음에는 Service 단위 테스트의 목적을 “Service가 호출되는지 확인”하는 것으로 생각했다.
- 보완한 개념: Service 자체를 테스트할 때는 이미 메서드를 직접 호출하므로, 반환값과 내부 상태를 검증한다. 호출 여부 검증은 Controller 단위 테스트에서 mock을 사용할 때 다룬다.

### 테스트 결과


| 검증              | 결과             | 관찰                       |
| --------------- | -------------- | ------------------------ |
| Task 전용 단위 테스트  | 다음 세션으로 연기     | 오늘은 테스트 개념과 첫 테스트 구조만 학습 |
| 기존 unit/e2e 테스트 | 이전 N.8에서 통과 확인 | 오늘 코드 변경 없음              |


### 학습 활동

- retrieval 완료: 삭제된 ID를 다시 DELETE하면 Service는 `undefined`, Controller는 404가 된다는 점을 회상했다.
- prediction 완료: Service 단위 테스트에서 생성 결과와 저장 목록을 검사해야 한다는 점을 예측했다.

### 다음 세션에서 회상할 질문

- `service.create(...)`가 반환한 `created`와 `service.findAll()`을 각각 검사하는 이유는 무엇인가?

---


## 2026-08-18 — N.2 Nest가 Provider를 Controller에 넣어주는 과정


### 공부한 개념

- `providers: [AppService]`는 Nest가 관리할 Service를 등록하는 곳이다.
- Controller constructor의 `appService: AppService`는 Controller가 필요로 하는 의존성을 나타낸다.
- Nest는 Module 등록 정보를 읽고 Service를 준비한 뒤 Controller constructor에 전달한다.
- Controller가 직접 `new AppService()`를 하지 않아도 되는 이유가 Dependency Injection이다.
- Provider 등록이 빠지면 Nest가 Controller를 만들 때 필요한 의존성을 찾지 못해 오류가 난다.

### 내가 설명한 내용

- `providers`는 Controller가 사용할 서비스를 등록하기 위한 배열이라고 설명했다.
- Provider 등록이 없으면 의존성 주입이 되지 않아 오류가 난다고 정확히 답했다.

### 테스트 결과

- 실제 생성 파일을 기준으로 DI 흐름을 추적했으며 프로젝트 코드는 변경하지 않았다.
- 실행 명령은 사용하지 않았다.

### 학습 활동

- retrieval 완료: `AppService`를 `providers`에 등록하는 이유를 회상했다.
- trace-path 완료: Module 등록 → Service 준비 → Controller constructor 전달 경로를 추적했다.
- teach-back 완료: Provider 누락 시 Controller 생성 단계에서 의존성 오류가 발생한다고 설명했다.

### 다음 세션에서 회상할 질문

- Service가 메모리에 Task 배열을 보관한다면, 그 배열은 언제 만들어져야 하는가?
