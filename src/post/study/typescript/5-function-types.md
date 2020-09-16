---
title: "Function types"
date: "2020-09-04"
category: "study"
sub_category: "typescript"
tags: ["typescript"]
---

function을 정의하고 사용할 경우 typescript를 어떻게 적용할 수 있는지 알아보겠습니다.

function에는 2개의 타입을 설정 할수 있는데 **입력**과 **출력**시 입니다.  
입력이라함은 function의 파라미터이고 출력은 function의 반환값을 의미합니다.  

## 입력값 타입 지정하기

사용방법은 다른 변수들의 타입을 정의하는 방식과 동일하고, 이전 포스트에서 이미 보셨기때문에 익숙하실 것 같습니다.
```javascript
const printWith = (p1: number | string, p2: number | string) => {
```

## 반환값 타입 지정하기
그럼 반환값의 타입을 정의하는 방법을 알아보겠습니다.  
2개의 숫자값을 받아 더한 값을 string 형태로 반환하는 함수가 있다고 가정해봅시다.
```typescript
function add(p1: number, p2: number) {
  return p1 + p2 + '';
}
```

add 함수는 문제가 없이 동작하는 함수입니다. 하지만 반환값을 무조건 숫자로 받아야하는 경우라면 아래처럼 타입을 지정해주시면 됩니다.

```typescript
function add(p1: number, p2: number): number {
  //...
```

위와 같이 수정한 후 add 함수를 실행하면 반환값에 대한 타입에러가 발생합니다. `return p1 + p2 + ''` 부분 때문인데요.  
number형태로 반환되도록 수정하면 정상동작 하는것을 확인 하실 수 있습니다.
```typescript
function add(p1: number, p2: number): number {
  return p1 + p2;
}
```  

아무값도 반환하지 않는다면 어떻게 해야할까요? 

반환하지 않는 경우도 타입을 정의할 수 있습니다. 바로 **void** 타입인데요.  
void타입은 반환함수의 기본 타입으로 생략되어도 상관 없습니다. 다만 생략했을때는 값을 반환하든 하지않든 에러가 나지않지만 void로 정의하면 에러가 발생하니 참고 해주세요.

```typescript
function add(p1: number, p2: number): void {
  console.log(p1 + p2);
  // return p1 + p2;  에러 발생
}
add(1, 2);
```

## 함수 자체에 타입 지정하기
자바스크립트는 함수를 하나의 변수로서 저장 할수 있습니다. 함수의 타입은 **Function**이고 지정하는 방법은 다른 타입들과 동일합니다.
```typescript
let add: Function;
add = (p1: number, p2: number): number => {
  return p1 + p2;
};
add(1, 2);
```
  
여기서 문제는 타입이 Function이라면 add 변수에 할당이 가능하다는 점인데, 예를들면 add라는 변수에 쌩뚱맞는 함수가 할당된다면
기대했던 결과가 나오지 않을 수 있습니다.  
프로젝트가 커진다면 이런 상황들이 큰 문제를 야기할 수 있습니다.
```typescript
//...code
const printMessage = (msg: string) => {
  console.log("Hello, " + msg);
};
add = printMessage;
add(1, 2);

// 기대한 결과: 3
// 실제 결과: "Hello , 1"
```
  
위 케이스를 해결하기 위해 함수의 타입을 좀더 명확하게 정의할 수 있습니다.
```typescript
let add: (a1: number, a2: number) => number;
```
Arrow function의 구조를 가진, 입/출력 데이터의 타입이 정의된 함수의 타입입니다.  
add 변수의 타입을 바꾸고 코드를 다시 실행하면 정상적으로 타입에러가 발생합니다.

```typescript
let add: (a1: number, a2: number) => number;
///...code
add = printMessage;
/*
Type '(msg: string) => void' is not assignable to type '(a1: number, a2: number) => number'. Types of parameters 'msg' and 'a1' are incompatible. Type 'number' is not assignable to type 'string'.
*/
```
