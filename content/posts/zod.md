---
title: "Zod"
slug: "zod"
description: "zod를 이용한 유효성 검사"
tags: ["zod"]
author: "seongjin jeon"
date: "2025-07-09"
modifiedDate: "2025-11-02T07:13:00.000Z"
notionId: "22b9b006-ca58-80bb-8659-cdd71e6f43dc"
---
## 01 Introduce to Zod


### Zod


백엔드 데이터 유효성 검사를 위한 라이브러리
Zod를 사용하게 되면 불 필요한 코드를 간략하게 줄일 수 있다. 줄일 수 있는 이유는 조건문을 많이 태우지 않아도 되기 때문이다.
백엔드에서 데이터 유효성 처리 시  유용하게 사용이 가능하다


### 설치


```shell
npm install zod
```


### 유효성 검사


### .parse()


zod의 **.parse()** 를 사용해 유효성 검사를 할 수 있다.
에러를 던지기 때문에 .parse()를 사용하게 되면 `try catch`문을 사용한다.


### .safeParse()


.parse()와 다르게 에러를 던져주지(throw) 않는다.
대신 유효성 검사의 결과 값을 준다. try catch를 하지 않고 컨트롤이 가능


```typescript
'use server';

import { z } from 'zod'; // 스키마 유효성 검사 라이브러리

// 유저 이름 검증
const userNameSchema = z.string().min(5).max(10);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'), // input name에서 가져온 정보
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  };

  /**!SECTION .parse()
   * 실제로 유효성 검사를 수행
   * data.username이 위에서 정의한 userNameSchema 유효성 검사를 통과하지 못하면 에러 발생
   * 조건을 만족하면 파싱된 값을 반환한다.
   */
  userNameSchema.parse(data.username);
}
```


### 예제


```typescript
'use server';

import { z } from 'zod';

// 유저 이름 검증
const formSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(8),
  confirm_password: z.string().min(8),
});

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'), // input name에서 가져온 정보
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
  };

  /**!SECTION .parse()
   * 실제로 유효성 검사를 수행
   * data.username이 위에서 정의한 userNameSchema 유효성 검사를 통과하지 못하면 에러 발생
   * 조건을 만족하면 파싱된 값을 반환한다.
   */

  const result = formSchema.safeParse(data);

  if (!result.success) {
    // console.log(result.error);
    // flatten() : 에러 객체를 더 다루기 쉬운 형태로 변환해준다.
    // console.log(result.error.flatten());
    return result.error.flatten();
  }
}
```


예제의 내용 중 `safeParse`는 다음과 같은 구조의 객체를 **"반환"** 한다.

- `success`: 유효성 검사가 성공했는지 여부를 나타내는 부울 값입니다.
    - `true`일 경우, 데이터는 유효하고 `result.data`에 유효한 데이터가 저장됩니다.
    - `false`일 경우, 데이터는 유효하지 않으며 `result.error`에 오류 정보가 저장됩니다.
- `data`: 유효성 검사가 성공했을 때만 존재하며, 검증된 데이터를 포함합니다.
- `error`: 유효성 검사가 실패했을 때만 존재하며, 오류 정보를 포함합니다.

### 사용 예제


```typescript
'use server';
import { z } from 'zod';

//NOTE: Zod에게 데이터의 형태나 무언가를 설명할때는 먼저 스키마(설계도)를 만들어야 한다.

// 스키마 만들기
const usernameScheme = z.string().min(5).max(5); //최소 5글자이며 최대 10글자의 스트링 타입이라는 조건식

// NOTE: formData는 client input에 기재된 정보 및 name을 가져온다.
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'), // 해당하는 데이터를 가져오게 된다.
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  // 특정 데이터 보내서 검사하기
  usernameScheme.parse(data.username);
}
```


**에러가 난다면 아래 처럼 result data를 알아서 완성하여 보내주기에 굉장히 편하다.**


## 02. Validation Errors


### 밸리데이션 검증 다루기


개별 엘리먼트에 대한 값만 했다면 이번에는 복수의 유효성 검사를 하는 방법을 알아보자.
복수의 유효성 검사에서는 `object 스키마` 를 사용한다.


아래 예제를 보면 `.safeParse` 를 사용하는데 기존 parse와 다른점이 무엇인지 알아보자.


### safeParse vs parse

- parse를 사용할 때 타입이 유효하지 않은 경우에 에러를 발생시키는데 해당 에러를 발생시키는 것을 원하지 않으면 `safeParse`를 사용한다.
    - 데이터가 유효한 경우에는 true값의 success와 데이터 정보가 담긴 data를 반환
    - 유효하지 않을 경우 false 값의 success와 에러 정보가 담긴 data 반환
- parse는 타입이 유효한지에 대한 검사 메소드로 유효하지 않은 경우 에러가 발생하여 보통은 `try-catch` 문으로 감싸서 사용한다.

### 실제 예제


```typescript
// 여러 데이터도 object를 통해 스키마를 만들 수 있다.
const formSchema = z.object({
  username: z.string().min(3).max(8),
  email: z.string().email(),
  password: z.string().min(10),
  confirmPassword: z.string().min(10),
});

// NOTE: formData는 client input에 기재된 정보 및 name을 가져온다.
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'), // 해당하는 데이터를 가져오게 된다.
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  /* NOTE: safeParse는 에러를 throw하지 않는다.
    반면에 parse는 에러를 던지기 때문에 try catch문으로 작성한다.
    */
  const result = formSchema.safeParse(data);
  console.log(result);
  // success가
  if (!result.success) {
    //flatten : 에러를 관리하는 method로 좀더 에러가 간결해진다.
    return result.error.flatten();
  }ㄴ
}


// client

//해당 state에는 createAccount의 리턴값이 보이게 된다.
const [state, dispatch] = useFormState(createAccount, null);
```


## 03. Refinement


각 고유한 validator 와 에러를 커스텀 하는 방법을 알아보자
Zod에는 몇 가지 문자열 관련 유효성 검사가 포함되어 있다.
[문자열 유효성 검사](https://zod.dev/?id=strings)


### 에러 커스터마이징


```typescript
const name = z.string({
	required_error: 'name은 필수입니다.', //보내는 데이터 key가 없으면 문구 표시
	invalid_type_error: 'Name은 문자열이여야 합니다.'
})
```


유효성 검사 메서드를 사용할 때 추가로 인수를 전달하여 사용자 지정 오류 메시지를 만들 수 있다.


```typescript
z.string().min(5, {message : '5글자 이상이어야 합니다.'})
```


### refine()


[refine 메서드 알아보기](https://zod.dev/?id=refine)`.refine` 메서드를 통해 사용자 지정 유효성 검사를 할 수 있다.


```typescript
z.string().refine((val) ⇒ val.length ≤ 255, {message: “255이하의 문자열이어야 합니다.”});

// obejct 자체에 refine()을 감싸서 여러 필드
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: '유저 네임은 문자열이어야 합니다.', // 타입 에러 메시지 커스텀
        required_error: 'username은 필수 키 입니다.', // 필수 키 에러 메시지 커스텀(값이 없을 경우에도 나온다.)
      })
      .min(3, '유저네임 글자가 적어용')
      .max(10, '유저네임 글자가 많아용')
      // refine() : 특정 단어 포함 여부 유효성 검사를 수행
      .refine(username => (username.includes('jinjin') ? false : true), {
        message: 'jinjin은 사용할 수 없는 유저네임입니다.',
      }),
    email: z
      .string({
        required_error: '이메일은 필수입니다.', // 값이 없을 때
      })
      .email('올바른 이메일 형식이 아니에요.'),
    password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.'),
    confirm_password: z.string().min(8),
  })
  .refine(checkPassword, {
    message: '비밀번호가 일치하지 않아요.',
    path: ['confirm_password'], // 해당 에러가 어떤 필드에 대한것인지 지정
  });
```


`refine`은 두개의 인수를 받는다.

1. 유효성 검사함수( 함수의 인자는 refine 할 data)
2. 몇가지 옵션 및 옵션을 지정하지 않고 **문자열을 쓰면 "에러 메시지를 나타냄"**
    - message : 에러 메시지
    - path : 에러 경로 지정
    - params 에러시 메시지를 커스텀 하기 위한 객체
    콘솔 확인은 `flatten()`을 호출하여 본다.

### 실제 예제


```typescript
//refine에서 사용되는 함수
const checkUserName = (username: string) => !username.includes('potato');

// checkPasswords
const checkPasswords = ({password,confirmPassword,}:{
  password: string;confirmPassword: string;}) => {
  return password == confirmPassword;
};

// 각 메소드에 커서를 가져다 놓으면 쓸 수 있는 명세가 나온다.
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: '유저네임은 문자열이여야 합니다!',
        required_error: '유저 네임이 없는데요?!', //보내는 데이터 key가 없으면 문구 표시
      })
      .min(3)
      .max(8)
      .refine(checkUserName, 'potato는 들어갈 수 없쒀!'),
    email: z.string().email(),
    password: z.string().min(10, '패스워드가 너무 짧아요?!'),
    confirmPassword: z.string().min(10),
  })
  // 전체 object에 대한 검증 작업
  .refine(checkPasswords, {
    /* NOTE: 두번째 파라미터에 객체로 넣고 path는 어떤 위치에 해당 메시지가 나오게 할지 결정
    path가 없다면 전체(object)의 에러로 판별하기에 global error로 인식한다.
    */
    message: '비밀번호가 서로 맞지 않아요!!!',
    path: ['confirmPassword'],
  });

// NOTE: formData는 client input에 기재된 정보 및 name을 가져온다.
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'), // 해당하는 데이터를 가져오게 된다.
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  /* NOTE: safeParse는 에러를 throw하지 않는다.
     반면에 parse는 에러를 던지기 때문에 try catch문으로 작성한다.
  */
  const result = formSchema.safeParse(data);
  console.log(result);
  // success가
  if (!result.success) {
    //flatten : 에러를 관리하는 method로 좀더 에러가 간결해진다.
    console.log(result.error.flatten());
    return result.error.flatten();
  }
}
```


## 04. Zod Transformation


Zod는 데이터를 검증하는 것 뿐만 아니라 변환하는 것도 가능하다. 굉장히 유용한 방법이니 잘 알아보자,


[.regax]


정규표현식으로 데이터 검증을 할 수 있습니다.


```typescript
password: z
      .string()
      .min(8)
      .regex(passwordRegex, '비밀번호는 소문자,대문자,숫자,특수문자를 포함해야 합니다.')
```


[.toLowerCase]


String 타입의 데이터를 모두 소문자로 변환해줍니다.


[.trim]


String 타입의 데이터에서 맨앞과 뒤에 붙은 공백을 제거해줍니다.


[.transform]


이 메서드를 이용하면 해당 데이터를 변환할 수 있습니다.


예시: `.transform((username) => 🔥 ${username} 🔥)`


## 04-1. Input 컴팩트하게 쓰기


컴포넌트 작성 시 하위에 모든 props를 쓰는 건 비효율적이다.
아래 예시로 들자면 `InputHTMLAttributes<HTMLInputElement>` 를 통해 기본 Input의 타입을 설정하고
`...rest(다른 이름도 가능)`를 설정하여 상위에서 지정한 props을 일괄적으로 받을 수 있다.


```typescript
// 상위 컴포넌트
<Input
  name='username'
  type='text'
  placeholder='Username'
  required
  errors={state?.fieldErrors.username}
  minLength={3}
  maxLength={10}
/>

// Input component
interface InputProps {
  errors?: string[];
  name?: string;
}

export default function Input({
  errors = [],
  name,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400'
        name={name}
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className='text-red-500 font-medium'>
          {error}
        </span>
      ))}
    </div>
  );
}
```


## 05. Recap


Zod에서 배운걸 복습해보자.


`formData.get(input_name)` 에서 `get()`에 들어가는 것은 **input의 name을 지칭**한다.
물론 **input 태그의 name**이 있어야지 formData.get()을 사용할 수 있다라는 것과 마찬가지다.


### safeParse


safeParse는 데이터를 파싱, 유효성 검사등 모든 과정을 안전하게 처리하고 결과를 객체로 반환


### parse(파싱)


```typescript
const schema = z.string(); // 문자열 타입을 기대
schema.safeParse(123);     // 숫자를 넣으면 에러 (타입이 맞지 않음)
schema.safeParse("123");   // OK (문자열이라 통과)
```


### refine


refine으로 커스텀 validation을 만들 수 있다. 아래 명세 코드를 확인하자.
refine의 함수 중 함수의 리턴값으로 인해 유효성 검사 메시지가 나타나게 되는데, 해당 리턴값이 **false**인 경우에 메시지를 보여주게 된다.


### 명세


```typescript
// 함수(useNamecheker)는 기본적으로 refine / validate 중인 대상을 첫번째 argument로 받는다.
const userNameCheker = (username) => !useranme.include('이단어'); // true 혹은 false로 리턴해주면 됨

username : z.string().min(4).refine(userNameCheker,'이단어 조건이 맞으면 이 메시지 나옴'); //함수의 리턴값이 false면 메시지가 나오게 된다.

//복수 refine을 다루는 함수 | 여기서 인자로 받는건 object를 refine을 했으니 object를 받는다.
const manyChekcer = ({password,confirm_password} : {password : string,confirm_password:string}) => password === confirm_password;

//복수의 refine
object({
...코드
}).refine(manyChekcer, {
	message : '패스워드 검사가 맞지 않다.',
	path : ["confirm_password"] // 해당 에러가 어떤 필드에 대한것인지 지정
})
```


### parse()


parse는 에러처리를 위해 `try-catch`문을 사용


### safeParse()


`safeParse()`는 `parse`와 다르게 검증에 실패해도 error를 만들지 않는다.


### flatten()


보통 에러의 코드가 길기에 flatten을 사용해 포매팅하여 좀 더 간략하게 나오게 할 수 있다.


## 06. coerce + validator lib


### validator


[라이브러리](https://www.npmjs.com/package/validator)
수 많은 validator를 모아놓은 라이브러리로 zod랑 사용하기 좋다.


### .coerce()


받아 온 데이터의 형 변환을 강제로 해준다. (문자열 -> 숫자열)


### 예제


```typescript
import { z } from 'zod';
import validator from 'validator';
import { redirect } from 'next/navigation';

/**
 * validator.isMobilePhone이 함수라서 사용 가능
 * // 긴 버전
 * .refine((phone) => validator.isMobilePhone(phone))
 * // 짧은 버전
 * .refine(validator.isMobilePhone)
 */
const phoneSchema = z
  .string()
  .trim()
  .refine(
    phone => validator.isMobilePhone(phone, 'ko-KR'),
    '전화번호가 올바르지 않습니다.'
  );

// 인증번호는 6자리 숫자 | coerce는 형변환 강제로 해줌
const tokenSchema = z.coerce.number().min(100000).max(999999);

// 초기값이 있으니 초기 값에 대한 타입 설정
interface InitialType {
  token: boolean;
}

export default async function smsSubmitHandler(
  prevState: InitialType,
  formData: FormData
) {
  // formData.get()은 항상 문자열 혹은 Null을 반환한다.
  const phone = formData.get('phone');
  const token = formData.get('token');

  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false, // 검증 실패니까 검증하는 token input 비노출
        error: result.error.flatten(), // 에러 객체 추가
      };
    } else {
      return { token: true };
    }
  } else {
    const result = tokenSchema.safeParse(token);

    if (!result.success) {
      // 실패해도 검증하는 input을 숨기지 않을거니 true로 반환
      console.log(result.error.flatten());
      return { token: true };
    } else {
      // 성공이면 리다이렉트
      redirect('/');
    }
  }
}
```

