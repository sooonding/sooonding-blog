---
title: "다시 타입 스크립트"
slug: "ts"
description: "설명입니다!!!!!"
tags: ["TypeScript"]
author: "seongjin jeon"
date: "2025-05-15"
modifiedDate: "2025-11-02T07:12:00.000Z"
notionId: "1f39b006-ca58-80bb-9a82-ff5674344fab"
---
## 1장 타입스크립트란?


### 1. 타입스크립트란?

- 자바스크립트에 타입을 미리 정해서(정적타입) 타입이 맞지 않으면 에러를 주도록 만든 언어
- 자바스크립트로 **컴파일**되어 실행되기 때문에 모든 JS 환경에서 동작한다.

> 💡 컴파일 **: 어떤 언어의 전체 코드를 다른 언어나 실행 가능한 다른 언어로 변환하는 과정**  
> 런타임 : **코드가 실제로 실행되는 시간****(브라우저나, node.js에서 코드가 동작하는 시점)**


### 2. 배우는 이유는?

- 자바스크립트와 달리 **컴파일**시 에러를 잡을 수 있기 때문에 디버깅 및 유지보수성이 좋다.
- 프로젝트의 코드 안정성 증가

### 3. 타입스크립트는 정적 타입? 동적 타입?


실행전 검사를 통한 타입 안정성과 자동으로 타입 추론을 해주는 점진적 타입이다.


## 2. 타입스크립트 동작 원리


### 대다수의 프로그래밍 언어의 동작 원리는?


컴퓨터의 언어는 0101… 식의 이진수로 되어있어, 프로그래밍 언어는 사람에게 친숙한 언어로 되어있다.


이를 컴퓨터는 **“사람이 짠 코드를 본인이 알 수 있게 변환하는 과정”을** 컴파일이라 한다.(ex. typescript → js)


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c0631014-1aac-40a0-9015-ddbad8d040f2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPKQ3R3%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIQCn%2FmxkS4JQxhi%2FzS%2FwMDBHkkxlLZDCcosIKTCDLEd02wIfQ%2FHnhzZc2Xu7vmDofS%2Fcsa9aid8IaOxsFKXJGB61jyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGrLBAPPw0PxBzqhoKtwDk7SoZy%2B8DeWBU84YXYz1%2B9mQaQ5rd8kSHfs%2FZNyeQs6zbAQgLXfOpopf93Cmqo7vwK4CMbE55v4TbXKd3T%2FZyjx2jfwjTb9uE5AHVBIBGffHaYBv9356SXbYtzriu%2FmU103j8EkDMFx7dDIEZTIFC0SVWLfVyYCQHJACiCVctowg21GCaf3k1tjZRg7%2B%2BN%2B%2Bs0Z546Y4Sz5dijrm%2BW6ROdC7Li%2B4n%2Boj8cjj5ium10ZfHyEQ%2Fiiyp2dpykEG6BeeJJ5uo4A%2FyOncO1I54CctF4QcJEyIVsaBVU%2FVCCVCA8v%2F7DgmXD6iVpEWOqv%2F3j5d%2FVjqvxeiqMwjcHvc2uZGu4%2BQulbpd8gfgVCgfpIm5PcLty7jRZLNWcyzLnDCUL%2FEJTbZwf4EkVJuUCN3HZ8shYg8J0xYRSTCpoiN%2F1d9GJvbrhwTvGdkhb0wP5mLRq8APh8Q0Qn1VNEsuT7kCZQHg5eHl8W1x6r3Y80resOKtgME9Gf7heZkTjMZzHxIgxgbkuVuQ32U7Xy5Z%2BdjC7gEmeXwkTIR%2FcCHuwz5rC8RBlaQc1Ao5%2BRb9xe%2FAv3TJSb0pJ9%2Bs0NcJp5aCY3YNmdgaIsqw7fYP23dfz3Zr0cqLTf3otWDXSg8nul8pAwwkKG2ygY6pgGFWhuZR2cijGdnNcvpoYZ23cCkmCUYaQL6eRisuGwQmIbp%2BGSpEOIqONLioqRi1tzsHI1A0hfiovNfi1LVQESOrUkkvZqqDCW2a%2FZiTGCRoNQoAf2HOQ8ao4EAA2j8clQkRn9oId78RSC%2FbySjHUKAm2JgDOzXbpaQJLUWrvEh1K2SGeAIn5uDkQQ7B2hqGjuAZIELJmwFSrxkOC2MyZMR4znWVFzm&X-Amz-Signature=7c25f485ffa470c303ef11edf90baa6962a864c71b571e41a3abc47f2f69bd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


이 컴파일을 동작하는 프로그램을 **컴파일러라고 부른다.** 좀 더 길게 말하자면, 사람이 짠 코드를 컴퓨터가 이해할 수 있는 언어로 변환하는 도구라고 보면 된다. (예: typescript 로 짠 코드를 js로 변환하는 도구 tsc)



![여기서 바이트 코드는 윗글의 컴퓨터가 이해할 수 있는 코드](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/2895ea09-545f-49b8-91f2-c9c8f5611d3a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPKQ3R3%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIQCn%2FmxkS4JQxhi%2FzS%2FwMDBHkkxlLZDCcosIKTCDLEd02wIfQ%2FHnhzZc2Xu7vmDofS%2Fcsa9aid8IaOxsFKXJGB61jyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGrLBAPPw0PxBzqhoKtwDk7SoZy%2B8DeWBU84YXYz1%2B9mQaQ5rd8kSHfs%2FZNyeQs6zbAQgLXfOpopf93Cmqo7vwK4CMbE55v4TbXKd3T%2FZyjx2jfwjTb9uE5AHVBIBGffHaYBv9356SXbYtzriu%2FmU103j8EkDMFx7dDIEZTIFC0SVWLfVyYCQHJACiCVctowg21GCaf3k1tjZRg7%2B%2BN%2B%2Bs0Z546Y4Sz5dijrm%2BW6ROdC7Li%2B4n%2Boj8cjj5ium10ZfHyEQ%2Fiiyp2dpykEG6BeeJJ5uo4A%2FyOncO1I54CctF4QcJEyIVsaBVU%2FVCCVCA8v%2F7DgmXD6iVpEWOqv%2F3j5d%2FVjqvxeiqMwjcHvc2uZGu4%2BQulbpd8gfgVCgfpIm5PcLty7jRZLNWcyzLnDCUL%2FEJTbZwf4EkVJuUCN3HZ8shYg8J0xYRSTCpoiN%2F1d9GJvbrhwTvGdkhb0wP5mLRq8APh8Q0Qn1VNEsuT7kCZQHg5eHl8W1x6r3Y80resOKtgME9Gf7heZkTjMZzHxIgxgbkuVuQ32U7Xy5Z%2BdjC7gEmeXwkTIR%2FcCHuwz5rC8RBlaQc1Ao5%2BRb9xe%2FAv3TJSb0pJ9%2Bs0NcJp5aCY3YNmdgaIsqw7fYP23dfz3Zr0cqLTf3otWDXSg8nul8pAwwkKG2ygY6pgGFWhuZR2cijGdnNcvpoYZ23cCkmCUYaQL6eRisuGwQmIbp%2BGSpEOIqONLioqRi1tzsHI1A0hfiovNfi1LVQESOrUkkvZqqDCW2a%2FZiTGCRoNQoAf2HOQ8ao4EAA2j8clQkRn9oId78RSC%2FbySjHUKAm2JgDOzXbpaQJLUWrvEh1K2SGeAIn5uDkQQ7B2hqGjuAZIELJmwFSrxkOC2MyZMR4znWVFzm&X-Amz-Signature=984c7302b666aba226f0690666cef1f60ead7a014d647231dab5c58ae5f016c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 타입스크립트의 동작 과정


**타입스크립트의 컴파일 과정**


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/05ef0e27-4f76-4187-addf-09de4d51fb0d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPKQ3R3%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIQCn%2FmxkS4JQxhi%2FzS%2FwMDBHkkxlLZDCcosIKTCDLEd02wIfQ%2FHnhzZc2Xu7vmDofS%2Fcsa9aid8IaOxsFKXJGB61jyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGrLBAPPw0PxBzqhoKtwDk7SoZy%2B8DeWBU84YXYz1%2B9mQaQ5rd8kSHfs%2FZNyeQs6zbAQgLXfOpopf93Cmqo7vwK4CMbE55v4TbXKd3T%2FZyjx2jfwjTb9uE5AHVBIBGffHaYBv9356SXbYtzriu%2FmU103j8EkDMFx7dDIEZTIFC0SVWLfVyYCQHJACiCVctowg21GCaf3k1tjZRg7%2B%2BN%2B%2Bs0Z546Y4Sz5dijrm%2BW6ROdC7Li%2B4n%2Boj8cjj5ium10ZfHyEQ%2Fiiyp2dpykEG6BeeJJ5uo4A%2FyOncO1I54CctF4QcJEyIVsaBVU%2FVCCVCA8v%2F7DgmXD6iVpEWOqv%2F3j5d%2FVjqvxeiqMwjcHvc2uZGu4%2BQulbpd8gfgVCgfpIm5PcLty7jRZLNWcyzLnDCUL%2FEJTbZwf4EkVJuUCN3HZ8shYg8J0xYRSTCpoiN%2F1d9GJvbrhwTvGdkhb0wP5mLRq8APh8Q0Qn1VNEsuT7kCZQHg5eHl8W1x6r3Y80resOKtgME9Gf7heZkTjMZzHxIgxgbkuVuQ32U7Xy5Z%2BdjC7gEmeXwkTIR%2FcCHuwz5rC8RBlaQc1Ao5%2BRb9xe%2FAv3TJSb0pJ9%2Bs0NcJp5aCY3YNmdgaIsqw7fYP23dfz3Zr0cqLTf3otWDXSg8nul8pAwwkKG2ygY6pgGFWhuZR2cijGdnNcvpoYZ23cCkmCUYaQL6eRisuGwQmIbp%2BGSpEOIqONLioqRi1tzsHI1A0hfiovNfi1LVQESOrUkkvZqqDCW2a%2FZiTGCRoNQoAf2HOQ8ao4EAA2j8clQkRn9oId78RSC%2FbySjHUKAm2JgDOzXbpaQJLUWrvEh1K2SGeAIn5uDkQQ7B2hqGjuAZIELJmwFSrxkOC2MyZMR4znWVFzm&X-Amz-Signature=0819e4b0c50cbdc40a55aebff1aa39f2abb527daa8e3b66355d0b0d5d5d1d265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


**타입스크립트의 실행 과정**


![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ded17654-cf3e-4644-83a6-a1ca72e1267e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPKQ3R3%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T010738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIQCn%2FmxkS4JQxhi%2FzS%2FwMDBHkkxlLZDCcosIKTCDLEd02wIfQ%2FHnhzZc2Xu7vmDofS%2Fcsa9aid8IaOxsFKXJGB61jyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMGrLBAPPw0PxBzqhoKtwDk7SoZy%2B8DeWBU84YXYz1%2B9mQaQ5rd8kSHfs%2FZNyeQs6zbAQgLXfOpopf93Cmqo7vwK4CMbE55v4TbXKd3T%2FZyjx2jfwjTb9uE5AHVBIBGffHaYBv9356SXbYtzriu%2FmU103j8EkDMFx7dDIEZTIFC0SVWLfVyYCQHJACiCVctowg21GCaf3k1tjZRg7%2B%2BN%2B%2Bs0Z546Y4Sz5dijrm%2BW6ROdC7Li%2B4n%2Boj8cjj5ium10ZfHyEQ%2Fiiyp2dpykEG6BeeJJ5uo4A%2FyOncO1I54CctF4QcJEyIVsaBVU%2FVCCVCA8v%2F7DgmXD6iVpEWOqv%2F3j5d%2FVjqvxeiqMwjcHvc2uZGu4%2BQulbpd8gfgVCgfpIm5PcLty7jRZLNWcyzLnDCUL%2FEJTbZwf4EkVJuUCN3HZ8shYg8J0xYRSTCpoiN%2F1d9GJvbrhwTvGdkhb0wP5mLRq8APh8Q0Qn1VNEsuT7kCZQHg5eHl8W1x6r3Y80resOKtgME9Gf7heZkTjMZzHxIgxgbkuVuQ32U7Xy5Z%2BdjC7gEmeXwkTIR%2FcCHuwz5rC8RBlaQc1Ao5%2BRb9xe%2FAv3TJSb0pJ9%2Bs0NcJp5aCY3YNmdgaIsqw7fYP23dfz3Zr0cqLTf3otWDXSg8nul8pAwwkKG2ygY6pgGFWhuZR2cijGdnNcvpoYZ23cCkmCUYaQL6eRisuGwQmIbp%2BGSpEOIqONLioqRi1tzsHI1A0hfiovNfi1LVQESOrUkkvZqqDCW2a%2FZiTGCRoNQoAf2HOQ8ao4EAA2j8clQkRn9oId78RSC%2FbySjHUKAm2JgDOzXbpaQJLUWrvEh1K2SGeAIn5uDkQQ7B2hqGjuAZIELJmwFSrxkOC2MyZMR4znWVFzm&X-Amz-Signature=8efcf7352a548dbdd9c4b7aa7d27c3643b4d151cb082be63ec707a8bc8b863b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


## 3. TypeScript의 기본타입


```typescript
/**!SECTION
 * ts에만 존재하는 타입
 * /
 */
// 1. any - 아무 타입이나 입력할 수 있는 치트키 타입, 다른 어떠한 타입도 변수에 저장할 수 있다.
let anyVar: any;
anyVar = 123;
anyVar = 'code';
anyVar = true;

let testNumber: number = anyVar; // 가능 왜냐하면 anyVar는 모든 타입을 포함하기 때문이다.

// 2. unknown - any와 유사하지만 더 엄격한 타입 (알 수 없는타입) 다른점은 다른 변수에 할당 불가[unkown,any는 가능]

let unknownVar: unknown;
unknownVar = 123;
unknownVar = 'code';
unknownVar = true;

let testNumber2: number = unknownVar; // 불가능
let unknownVar2: unknown = unknownVar; // 가능
let anyType: any = unknownVar; // 가능

// 3. 리스트 타입
const kgList: number[] = [1, 2, 3];
const strList: string[] = ['1', '2', '3'];

// 4. 튜플 타입
const tuple: [number, string, boolean] = [1, '2', true];
```


## 4. interface 와 type


### ✅ 공통점

- 둘 다 객체의 **타입(모양)** 을 정의할 수 있음
- 타입 확장 가능

```typescript
// interface

// interface에서는 내부에 type을 가져올 수 있다.

interface PersonType {
  name: Person; // 이렇게 타입을 가져올 수 있다.
}


// interface
interface User {
  name: string;
  age: number;
}

// type
type User = {
  name: string;
  age: number;
};

// interface 방식
interface Animal {
  name: string;
}
interface Dog extends Animal { //name,breed 포함
  breed: string;
}

// type 방식
type Animal = {
  name: string;
};
type Dog = Animal & { // name,breed
  breed: string;
};

// interface에서는 내부에 type을 가져올 수 있다.
type Person = string;
interface PersonType {
  name: Person; // 이렇게 타입을 가져올 수 있다.
}
```


### ❌ 차이점


| **기능 / 차이점**         | interface   | type |
| -------------------- | ----------- | ---- |
| 객체 타입 정의             | ✅           | ✅    |
| 선택 속성 (?)            | ✅           | ✅    |
| 읽기 전용 (readonly)     | ✅           | ✅    |
| 함수 타입 정의             | ⭕ (가능하나 복잡) | ✅    |
| 유니언                  | ❌           | ⭕    |
| 선언 병합 가능             | ✅           | ❌    |
| 타입 확장 (extends or &) | ✅           | ✅    |
| 라이브러리 확장에 유리함        | ✅           | ❌    |
| 그냥 값 선언              | ❌           | ✅    |


## 5.  Enum


### 제네릭이란? 

- 타입을 함수나 클래스, 인터페이스에서 “매개변수”처럼 받아서 나중에 넣는 것을 말한다.

## 6. index 시그니처


객체의 **키 이름이 미리 정해져있지 않거나, 동적으로 결정될 때**, 해당 객체가 가질 키와 값의 타입을 명확히 지정하기 위해 사용된다.


```typescript
interface Person {
  [key: string]: string;
}

const person: Person = {
  name: 'john',
  age: '20',
};

interface Animal {
  [key: string]: number;
  name: string; //타입에러: 인덱스 시그니처를 사용하면서 추가된 속성의 값이 인덱스 시그니처의 값과 다르면 오류 발생
}
```


## 7. 타입추론


자체적으로 변수나 파라미터의 값을 추론해서 알려주는 것


```typescript
let a = 10; // 자동으로 number 타입으로 추론
// 'world' 문자열 리터럴 타입으로 추론 왜냐하면 const로 변수를 선언하면 처음에 선언에 들어간 값을 변경하지 못하기 때문에
const world = 'world';
const hello: string = 'hello'; // string 타입으로 추론

// const로 했다고 리터럴 타입이 될줄 알았지만 아니다. 추론이 잘 된다.
const animal = {
  name: 'dog',
  color: 'brown',
};

animal.color = 'red';

const animal2 = {
  name: 'dog' as 'cat', // as 키워드로 타입 단언
  color: 'brown' as const, // as const 키워드로 리터럴 타입으로 추론
};

animal2.name = 'cat';
```


### Array 


```typescript
let number = [1, 2, 3, 4, 5]; // number[] 타입 추론
let numbersAndStrings = [1, 2, 3, '4']; // (string | number)[] 타입 추론

// tuple 타입
let twoNum = [1, 2] as const; // [1, 2] 타입 추론

twoNum[0] = 3; // 읽기 전용이므로 추론 불가
const nenum = twoNum[0];
const nenum2 = twoNum[3]; // 인덱스 범위 초과 시 추론 불가
```


## Union and intersection


### Union 기본기


유니언은 TS에서 타입을 병합 할 수 있는 방법중 하나,  **유니온은 "집합의 개념"**


```typescript
type sb = string | boolean;

let sample: sb = '아이브';

sample = '1';

/**!SECTION
 * 리스트의 유니언
 */

// string으로 구성된 리스트 or boolean으로 구성된 리스트
type sbList = string[] | boolean[];

let sampleList: sbList = ['아이브', '블랙핑크', '레드벨벳'];

sampleList = [true, false];

sampleList = ['a', false]; // 오류 발생 혼합 사용이 안된다.

//- (string | boolean) : 배열의 각 요소가 string or boolean 타입이 될 수 있다.
let sampleList2: (string | boolean)[] = ['a', false];

sampleList2 = ['a', false]; // 혼합 사용이 가능하다.

/**!SECTION
 * interface를 통한 union
 */

interface IUser {
  name: string;
  age: number;
}

interface Animal {
  name: string;
  age: number;
  address: string;
}

type AnimalorUser = IUser | Animal;

let ah: { name: string; age: number } | { name: string; age: number; address: string } = {
  name: '아이브',
  age: 10,
  address: '서울',
};

console.log(ah); // ah의 타입은 값에 address가 있기에 두번째 타입이 추론된다.

// 서로 관계가 없는 유니온은?

type Person = {
  name: string;
  age: number;
};

type Cat = {
  breed: string;
  count: number;
};

type PersonOrCat = Person | Cat;

// 서로 관계가 없는 유니온은? 두 타입 중 한 타입이 무조건 충족이 되어야 한다.
const pc: PersonOrCat = {
  name: '홍길동',
  age: 20,
  breed: '포메라니안',
  count: 10,
};
console.log(pc); // 가능
```


## Narrowing type


### Narrowing


유니온 타입에서 더 구체적인 타입 노리로 유추할 수 있게 해준다.


```typescript
let numberOrString: number | string = 'factory'; // 선언했다해도
numberOrString; //string 으로 추론됨

/**Narrowing 종류
 * 1. Assignment Narrowing
 * 2. typeof Narrowing
 * 3. Truthiness Narrowing
 * 4. in operator Narrowing
 * 5. instanceof Narrowing
 * 6. discriminated union Narrowing
 * 7. exhaustiveness checking Narrowing
 */

// 1. Assignment Narrowing 특정 값을 할당해서 내로잉
let numOrStr: number | string = 'str';
numOrStr.toString(); // string type으로 추론됨

//2. typeof narrowing
numOrStr = Math.random() > 0.5 ? 123 : 'str'; // 다시 유추됨

if (typeof numOrStr === 'string') {
  // typeof 키워드로 내로잉
  numOrStr; // string type
} else {
  numOrStr; // string 타입이 아니니까 number 타입으로 추론됨
}

// 3. Truthiness Narrowing
let nullOrStr: null | string[] = Math.random() > 0.5 ? null : ['str'];

if (nullOrStr) {
  nullOrStr; // string[] 타입으로 추론됨
} else {
  nullOrStr; // null 타입으로 추론됨
}

// 4. equality narrowing (같은지를 비교하고 narrowing)
let numOrStr2: number | string = Math.random() > 0.5 ? 123 : 'str';
let strOrboolean: string | boolean = Math.random() > 0.5 ? 'str' : true;

if (numOrStr2 === strOrboolean) {
  numOrStr2; // string 타입으로 추론됨
  strOrboolean; // string 타입으로 추론됨
} else {
  numOrStr2; // 같은게 없으니 각각의 union 타입으로 추론됨
  strOrboolean; // string | boolean 타입으로 추론됨
}

let numOrStrOrnull: number | string | null =
  Math.random() > 0.5 ? 123 : Math.random() > 0.5 ? 'str' : null;

if (typeof numOrStrOrnull === 'number') {
  numOrStrOrnull; // number 타입으로 추론됨
} else {
  numOrStrOrnull; // number를 배제한 string | null 타입으로 추론됨
}

// 5. operator narrowing
interface Human {
  name: string;
  age: number;
}

interface Animal {
  name: string;
  type: string;
}

let human: Human = {
  name: 'John',
  age: 20,
};

let dog: Animal = {
  name: 'Rex',
  type: 'dog',
};

let humanOrAnimal: Human | Animal = Math.random() > 0.5 ? human : dog;

console.log('age' in human, '@@@@@'); // 객체의 키값의 여부를 'in'으로 boolean으로 알려줌

// 6. instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : 'str';

if (dateOrString instanceof Date) {
  dateOrString; // Date 타입으로 추론됨
} else {
  dateOrString; // string 타입으로 추론됨
}
```


## function Type


```typescript
/* 함수 정의 */

function add(a: number, b: number) {
  return a + b;
}
// 함수 호출
let result = add(1, 2);

/* 특수 반환 타입 
  void : 함수에서 반환 값이 없는 경우
  never : 함수가 절대 반환하지 않는 경우
*/

function returnVoid(): void {
  console.log('void');
}

function returnNever(): never {
  //끝나지 않다던가(while, throw)
  throw new Error('error');
}

/**!SECTION
 * 함수를 타입으로 지정하는 방법(function type)
 */

type Maaper = (x: string) => string;

const runner = (callback: Maaper) => {
  return ['1', '2', '3'].map(callback);
};

console.log(runner(x => `member ${x}`));

// interface
interface Imutiply {
  (x: number, y: number): number; // interface 안에선 "=>"" 대신 ":" 사용
}

const multiply: Imutiply = (x, y) => x * y;

console.log(multiply(1, 2));

/**함수 오버로딩 - !웬만해서 사용하지 말자!
 * 파라미터를 1) 하나를 받거나, 2) 세개를 받는 함수를 만든다 가정
 * 오버로딩 함수 : 같은 함수 이름으로 여러 개의 다른 매개변수 조합을 정의하는 것
 */

function sos(members: string): string; // 함수 오버로딩
function sos(member1: string, member2: string, member3: string): string; // 함수 오버로딩

function sos(membersOrMembers: string, member2?: string, member3?: string) {
  if (member2 && member3) {
    return `sos ${membersOrMembers}, ${member2}, ${member3}`;
  }
  return `sos ${membersOrMembers}`;
}

console.log(sos('멤버1'));
// console.log(sos('멤버1', '멤버2')); // 매개변수를 두개 받는 오버로딩 함수가 없어서 에러
console.log(sos('멤버1', '멤버2', '멤버3'));

/**
 * statement, expression
 * statement : 함수 선언식
 * expression : 함수 표현식
 * 표현식이 좀 더 유용하다 이유는 표현식은 함수를 변수에 할당할 수 있기 때문에 타입을 하나 만들어서 사용할 수 있기 때문이다.
 */

// 함수 선언식
function statementFunc(a: number, b: number) {
  return a + b;
}

type expressionFunc = (a: number, b: number) => number;

// 함수 표현식
const add2: expressionFunc = function (a, b) {
  return a + b;
};
const minus2: expressionFunc = function (a, b) {
  return a - b;
};

/**!SECTION
 * 프리디케이트(type predicate)
 * 타입을 구분하는 함수를 만드는 것
 */

function isNumber(input: any): input is number {
  return typeof input === 'number';
}
console.log(isNumber('123')); // false
console.log(isNumber(123)); // true

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: number;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  // 반환 타입을 "변수 is 타입" 으로 구성하면 정확한 타입을 유추할 수 있다.
  return (animal as Doge).age !== undefined; // undefined 일 경우 Cat
}
```


## 🔍 Type vs Interface 


TypeScript에서 `type`과 `interface`는 객체 구조 및 함수 타입을 정의할 수 있지만, 각기 다른 기능과 특징을 지닙니다.


---


### 🧱 기본 선언 방법


```typescript
interface IUser {
  x: number;
  y: number;
}

type TUser = {
  x: number;
  y: number;
};
```


```typescript
interface IUserFunc {
  (x: number, y: number): number;
}

type TUserFunc = (x: number, y: number) => number;
```


---


### ✅ `type`만 가능한 것들

- 원시 타입

```typescript
type TName = string;
```

- 유니언 타입

```typescript
type TUnionType = string | number;
```

- 튜플 타입

```typescript
type TTupleType = [string, number];
```


---


### ✅ `interface`만 가능한 것들


**인터페이스 병합 (Merging)**


```typescript
interface IUser2 {
  name: string;
}

interface IUser2 {
  age: number;
}

const user: IUser2 = { name: 'hello', age: 10 };
```


---


### 🧙‍♂️ 클래스 내 함수 선언 차이


```typescript
class Review {
  getY = (y: number) => y;
  getX(x: number) {
    return x;
  }
}
```

> getY는 프로퍼티, getX는 메서드. this 바인딩 차이가 있습니다.

---


### 🧬 확장 (상속)


```typescript
//interface 확장
interface INames {
  name: string;
}
interface IIdol extends INames {
  age: number;
}
```


```typescript
//type 확장
type TNames = {
  name: string;
};

type TIdol = TNames & {
  age: number;
};
```


### 혼합 확장도 가능


```typescript
interface IIdol2 extends TNames {
  age: number;
}

type TIdol2 = INames & {
  age: number;
};
```


---


### 🐶 다중 확장 예시


**type**


```typescript
type Dog = {
  name: string;
} & {
  age: number;
} & {
  breed: string;
};
```


**interface**


```typescript
interface CatName {
  name: string;
}
interface CatAge {
  age: number;
}
interface Cat extends CatName, CatAge {
  breed: string;
}
```


---


### 🔄 오버라이딩 (타입 좁히기)


```typescript
type TRan = {
  width: number | string;
  height: number;
};

type TRan2 = TRan & {
  width: string;
  height: number;
};
```


```typescript
interface ITran {
  width: number;
  height: number | string;
}

interface ITran2 extends ITran {
  width: number;
  height: number;
}
```


---


## 🧾 요약 표


| 구분           | interface | type |
| ------------ | --------- | ---- |
| 객체 정의 가능     | ✅         | ✅    |
| 함수 타입 정의 가능  | ✅         | ✅    |
| 원시/유니언/튜플 선언 | ❌         | ✅    |
| 인터페이스 병합 가능  | ✅         | ❌    |
| 상속/확장 가능     | ✅         | ✅    |


## 🧨 배열의 타입 안정성 문제


### 자유로운 값의 입력


```typescript
const arr = [1, 2, '3']; // 타입이 너무 광범위함
```


### 타입을 명확히 지정


```typescript
let stringOrnumberList: (string | number)[] = [1, '2', 3];
stringOrnumberList = ['1', '2', '3'];
stringOrnumberList = [12, 34];

let stringArrNumArr: string[] | number[] = [1, 2, 3];
stringArrNumArr = ['1', '2', '3'];

let stringOrNumberArr: string | number[] = [1, 23];
stringOrNumberArr = '123';
```


---


## ✨ Spread Operator


### 다양한 타입의 배열을 하나로 결합


```typescript
const onlyStrings = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

const stringOrNumberArr2 = [...onlyStrings, ...onlyNumbers];
// (string | number)[]로 잘 유추됨
```


---


## 🧱 다차원 배열


### 1차원 배열


```typescript
const oneDim: number[] = [1, 2, 3];
```


### 2차원 배열


```typescript
const multiDimensionArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
```


### 3차원 배열


```typescript
const multiDimensionArr2: number[][][] = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
];
```


### 혼합 타입 배열


```typescript
const stAndNumList: (string | number)[][] = [[1, '2']];
```

