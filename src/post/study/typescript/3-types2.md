---
title: "3. 타입스크립트의 타입들2 (object, Array, Tuple, Enum)"
date: "2020-03-12"
category: "study"
sub_category: "typescript"
tags: ["typescript"]
---

**object** - Javascript object의 타입입니다.  
**Array** - 배열이 가지고 있는 요소들의 타입을 정의합니다.  
**Tuple** - 고정된 배열의 크기 안에서 각 요소에 타입을 정의 한 형태입니다.  
**Enum** - 타입스크립트의 컨셉 중 하나인 열거형 입니다.  

## object 타입

object의 타입을 정의하는 방식은 위 값들보다 약간은 다릅니다.  
우선 위에서 했던 방식으로 정의를 해봅시다.

```typescript
const person: object = {
  name: "홍길동",
  age: 33,
  isMarried: false,
}

console.log(person.name)
```

person 변수에 object 라는 타입을 정의했는데요, 컴파일하면 아래와 같은 에러가 발생합니다.

```bash
app.ts:7:20 - error TS2339: Property 'name' does not exist on type 'object'.

7 console.log(person.name);
                      ~~~~
Found 1 error.
```

아래 에러는 object type에 name 프로퍼티가 정의되지 않았다는 뜻인데요,

object는 타입을 정의할때는 프로퍼티들 각각의 타입 또한 정의를 해줘야 합니다.  
타입을 정의하는 방법은 object 구조와 비슷하지만 row를 쉼표로 구분하는 대신 세미콜론으로 구분합니다.

```typescript
{
  name: string
  age: number
  isMarried: boolean
}
```

코드에 적용하면 아래와 같습니다.

```typescript
const person: {
  name: string
  age: number
  isMarried: boolean
} = {
  name: "홍길동",
  age: 33,
  isMarried: false,
}
```

## Array 타입

배열에 타입을 정의 함으로서 안에 들어갈 요소들의 타입을 정할 수 있습니다.  
정의하는 방식은 `type명[]` 와 같이 정의합니다.  
마찬가지로 배열의 요소가 사전에 정의한 타입과 다르다면 타입에러가 발생합니다.  

```typescript
let numberArray: number[]
numberArray = [1, 2, 3, 4]

/*
numberArray = [1, 2, 3, "4"];

error TS2322: Type 'string' is not assignable to type 'number'.

14 numberArray = [1, 2, 3, "4"];
                            ~~~
Found 1 error.
*/
```

## Tuple 타입

위에 타입들은 자바스크립트에 존재하는 익숙한 타입들이였지만 지금부터 소개할 타입들은 타입스크립트 고유의 컨셉입니다. 

첫번째로 **Tuple**타입인데요.
생소할 수 있지만 어렵지 않습니다.  
고정 된 length를 가진 배열의 타입을 정의하는 타입인데요. 위 Array타입과는 다르게 각 요소에 타입을 지정 할 수 있습니다.  
타입을 지정하는 방식은 기존 방식과는 약간은 다른데, 배열을 의미하는 대괄호 안에 각 요소의 타입 유형만 지정 해주면 됩니다.

```typescript
;[number, string]
```

아래 예제를 보시면 이해하기 쉽습니다.

```typescript
let tupleType: [number, string]
tupleType = [33, "홍길동"]
```

마찬가지로 정의한 타입과 다른 값이 들어오면 타입에러가 발생하겠죠?

에러가 발생할 수 있는 케이스가 하나 더 있습니다.

위 tuple타입을 보면 2개 요소에만 타입이 정의 되어있고 이는 무조건 2개의 요소가 들어가야 함을 의미하기 때문에, 2개가 아닌경우도 에러를 발생합니다.

## Enum 타입

Enum은 이름이 있는 상수들을 정의 할 수 있는 타입스크립트의 유용한 컨셉 중 하나이고 `enum` 키워드를 이용해 정의합니다.

```typescript
enum SportsTypes {
  Football,
  Baseball,
  Basketball,
  Boxing,
}
```

문법이 다소 어색할 수 있습니다만 익숙해지면 어렵지 않습니다.  

SportsTypes이라는 enum을 생성하고 내부에는 4개의 값들이 있습니다.  

이 값들은 따로 할당 하지 않았고, 이런 경우는 타입스크립트에서 자동으로 숫자값 0에서부터 순차적으로 할당 해주고 물론 의미있는 필요할 때는 임의로 지정 할수도 있습니다.

```typescript
enum SportsTypes {
  Football = "football",
  Baseball = "baseball",
  Basketball = "basketball",
  Boxing = "boxing",
}
```

enum은 **값의 허용범위를 정의** 할 수 있습니다.

예를 들어, 어떤 유저의 sports_type값을 저장하려 할때 football 이 될수도 있고 Football 이 될수도 있는데 이는 다른 값으로 해석이 되기 때문에 얘기치 못한 에러가 발생할 것입니다.

```typescript
const personal = {
  name: "홍길동",
  favoriteSports: "football",
}

if (personal.favoriteSports === "Football") {
  console.log("축구를 좋아합니다!") /// 실행되지 않음
}
```

enum을 사용한다면 위 예시와 같은 에러는 발생하지 않을 것 입니다.

```typescript
enum SportsTypes {
  Football,
  Baseball,
  Basketball,
  Boxing,
}

const personal = {
  name: "홍길동",
  favoriteSports: SportsTypes.Football,
}

if (personal.favoriteSports === SportsTypes.Football) {
  console.log("축구를 좋아합니다!") /// 정상실행
}
```

---

두 포스트에 걸쳐 타입스크립트의 기본 core type에 대해 알아봤습니다.  
도움이 조금이라도 됐길 바라며 이만 마치겠습니다.
