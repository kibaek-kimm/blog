---
title: "1. 타입스크립트란?"
date: "2020-03-02"
category: "study"
tags: ["typescript"]
---

타입스크립트 마이크로소프트가 개발한 type이 존재하는 자바스크립트의 슈퍼셋 언어이고 다양한 feature들을 통해 자바스크립트가 가지고 있는 약점을 보완해주는 강력한 녀석입니다.

타입스크립트 그 자체로는 브라우저 or Nodejs 환경에서 바로 사용할 수는 없고 Javascript로 컴파일 과정이 필요합니다.

어떻게 사용하며 컴파일 하는지 예제를 통해 같이 알아봅시다.

## Examples

간단한 코드를 통해 Javascript와 타입스크립트를 비교해봅시다.

_index.js_

```javascript
const add = (num1, num2) => {
  return num1 + num2
}

console.log(add("1", "2"))
```

두 숫자를 인자로 받아 더한 값을 결과로 반환하는 아주 간단한 함수입니다.

add함수를 숫자가 아닌 문자열로 호출한다면 기대한 3이 아닌 '1' 과 '2'의 문자열이 concatenated 된 '12' 라는 값이 반환됩니다.

이는 개발자가 기대한 값이 아닐 것이고, 이런 예상치못한 버그는 실제 프로젝트에서 많은 오류를 양산할 수 있고 디버깅도 쉽지 않을겁니다.

이러한 Javascript의 문제점을 보완해주는 것이 바로 타입스크립트 입니다.

## Install

npm을 통해 타입스크립트를 global로 설치해봅시다.

```bash
npm install -g typescript
```

성공적으로 설치했으면 tsc 명령어를 실행 해봅시다.

```bash
tsc
```

뭔가 정보들이 나오죠? 그럼 정상적으로 설치 된것입니다.

위 예제에서 설명했던 함수를 타입스크립트로 만들어봅시다.

_index.ts (타입스크립트의 확장자는 _.ts 입니다)\*

```typescript
const add = (num1: number, num2: number) => {
  return num1 + num2
}
console.log(add("1", "2"))
```

num1, num2 인자뒤에 **: number** 라는 무언가 생겼습니다!

추가 된 코드는 앞에 있는 인자값의 타입을 지정해주는 코드이고 위 함수에선 숫자값으로 지정 해준 것이죠.

그럼 결과는 어떻게 나올까요? **바로 컴파일 해봅시다.**

```bash
tsc index.ts
```

아래와 메세지와 함께 컴파일에 실패한 걸 보실수 있을 겁니다.

```bash
index.ts:4:17 - error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.

4 console.log(add('1', '2'));
                  ~~~


Found 1 error.
```

예상하셨듯이 위에 num1, num2는 number라는 타입으로 정의되었으나 문자열의 값으로 함수를 호출해서 발생한 type error 입니다.

값들을 숫자로 수정후 다시 컴파일 해보면..어떻게 될까요?
터미널에는 아무 변화 없습니다, 하지만 index.js라는 녀석이 생긴걸 확인 하실 수 있습니다.

_index.js_

```javascript
var add = function(num1, num2) {
  return num1 + num2
}
console.log(add(1, 2))
```

add 함수의 타입들이 다 사라진 형태로 Pure javascrip 파일이 만들어 졌습니다. (심지어 하위 브라우저에서도 실행될 수 있도록 ES5로 컴파일까지..)

위 코드를 통해 타입스크립트와 자바스크립트의 큰 차이점은 값의 타입을 확인하는 시점입니다. 아시는 것처럼 자바스크립트 또한 값 자체는 아래처럼 확인 할수가 있습니다.

```javascript
if (typeof number1 === 'number')
```

하지만 자바스크립트의 저 문법은 runtime에 실행되고 타입스크립트는 컴파일 과정에서 실행이 되는 큰 차이가 있습니다.

타입스크립트를 쓴다면 최소한 타입으로 인해 발생하는 에러는 없을 것 같습니다.

가장 기본적인 방법으로 타입스크립트에 대해 간단히 알아봤고 타입스크립트 type 외에도 Interface, Generic, Decorators 등 정말 유용한 feature들이 많습니다.

새로운 내용들도 같이 공부 해봅시다.
