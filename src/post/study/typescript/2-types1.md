---
title: "2. 타입스크립트의 타입들1 (number, string, boolean, any)"
date: "2020-03-11"
category: "study"
sub_category: "typescript"
tags: ["typescript"]
---

타입스크립트에서 다양한 값들의 타입을 어떻거 정의하는지 기본적인 방법을 배워보겠습니다.

**number**

말 그대로 숫자값들의 타입입니다. 2, 8, 16진수들 또한 number 타입이구요. 주의할 점은 타입이 있는 다른 언어들은 float이라는 실수타입이 따로 있지만 타입스크립트에서는 실수값도 number에 포함됩니다.

```typescript
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744
let float: number = 3.14
```

**string** - 모든 문자들의 타입입니다.  
**boolean** - true, false 두개의 값만 허용되는 타입입니다.  
**any** - 모든 타입을 허용합니다.  
**unknown** - 모든 타입을 허용하나 any보다 엄격하게 다루어집니다.

## number, string, boolean 타입

타입을 정의하는 방법은 아래와 같습니다.

```typescript
function setUserInfo(name: string, age: number, isMarried: boolean) {
  const result = `
    name: ${name}
    age: ${age}
    married: ${isMarried}
  `
  console.log(result)
}

const name = "홀길동"
const age = 33
const isMarried = false

setUserInfo(name, age, isMarried)
```

함수의 파라미터 값 뒤에 `: type` 을 넣어 정의를 합니다.

아래 정의한 변수들 또한 변경 될 수 있는 여지가 있다면 동일한 방법으로 타입을 정의 해주면 됩니다.

물론 필수로 타입을 선언하지 않고 변수에 값을 할당해도 되지만, 주의할 점이 있습니다.

처음에 정의된 값의 유형이 그 변수의 타입으로 암묵적으로 정의되기 때문에 되도록이면 위와 같이 명시적으로 정의 해주는 게 좋습니다.

```typescript
let name: string
let age: number
let isMarried: boolean

name = "홍길동"
age = 33
isMarried = false

/*
let assignWithoutType = 10;
assignWithoutType = "11"  Type '"11"' is not assignable to type 'number'.
*/
```

## any 타입

어떠한 타입이 들어올지몰라 지정하기 힘든 변수를 선언할 때 주로 사용되며, 정의하는 방법은 동일합니다.
```typescript
let age: any
age = 33 //OK
age = "33" //OK
```

any 타입을 남용 하다보면 타입스크립트를 사용하는 의미가 없어집니다. 그래서 특수한 경우가 아니라면 사용을 지양하거나 unknown 타입으로 대체하는 것이 좋습니다.

## unknown 타입


any와 유사하게 모든 타입이 할당될 수 있습니다만, 타입스크립트에서 any보다 엄격하게 다루어집니다.

값에 할당되는 경우는 any처럼 동적으로 할당할 수 있지만, 이 값이 어딘가 할당을 하게 된다면 에러가 발생합니다.


---

가장 기본적인 형태의 타입을 정의하는 방법을 알아봤고 다음 시간에는 object, Array의 타입 정의방법 및 타입스크립트 feature들을 알아보겠습니다.
