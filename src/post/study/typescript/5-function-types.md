---
title: "5. Function types"
date: "2020-09-04"
category: "study"
sub_category: "typescript"
tags: ["typescript"]
---

function을 정의하고 사용할 경우 typescript를 어떻게 적용할 수 있는지 알아보겠습니다.

function에는 2개의 타입을 설정 할수 있는데 **입력**과 **출력**시 입니다.

입력이라함은 function의 파라미터이고 출력은 function의 반환값을 의미합니다.

사용방법은 다른 변수들의 타입을 정의하는 방식과 동일하고, 이전 포스트에서 이미 보셨기때문에 익숙하실 것 같습니다.

```javascript
const printWith = (p1: number | string, p2: number | string) => {
```


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

그렇다면 아무값도 반환하지 않는다면 어떻게 해야할까요? 

반환하지 않는 경우도 타입을 정의할 수 있습니다. void 타입인데요.

void타입은 반환함수의 기본 타입으로 생략되어도 상관 없습니다.

다만 생략했을때는 값을 반환하든 하지않든 에러가 나지않지만 void로 정의하면 에러가 발생하니 참고 해주세요.

```typescript
function add(p1: number, p2: number): void {
  console.log(p1 + p2);
  // return p1 + p2;  에러 발생
}
add(1, 2);
```