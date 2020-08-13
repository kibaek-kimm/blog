---
title: "4. Custom type 만들기 (Type Aliases)"
date: "2020-08-13"
category: "study"
tags: ["typescript"]
---

타입스크립트로 작업을 하다보면 타입 재사용에 대한 필요성를 느끼게 됩니다.

```typescript
const printWith = (p1: number | string, p2: number | string) => {
  // print message
}

printWith(10, 15);
printWith('홍', '길동');
```

파라미터 p1과 p2처럼 유니온타입을 가지고 있는경우 **type** 키워드를 이용해 변수형태로 선언하여 재사용 할 수 있습니다. (+가독성)

정의하는 방법은 아래와 같습니다.
```typescript
type ParamsType = number | string;

const printWith = (p1: ParamsType, p2: ParamsType) => {
...

```

데이터가 조금 복잡한 object 형태인 경우도 위와같이 정의할 수 있습니다.

```typescript
type Person = {
  name: string;
  age: number;
  isMarried: boolean;
}

const createUser = (person: Person) => {
  // create user
}

```

위 예제들처럼 타입을 정의하면 타입을 하나의 타입을 잘 설계하여 재사용할수 있고 관리하기가 용이해집니다.

