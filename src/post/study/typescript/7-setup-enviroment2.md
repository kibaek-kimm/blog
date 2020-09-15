---
title: "7. 타입스크립트 tsconfig"
date: "2020-09-15"
category: "study"
sub_category: "typescript"
tags: ["typescript"]
---

## tsconfig.json?
타입스크립트를 어떻게 다루고 운영할 것인지에 대해서 설정할 수 있는 설정파일이고, 타입스크립트 컴파일러가 동작할 때 tsconfig.json 파일을 참조해 컴파일을 실행합니다.  

각 옵션들 뒤에 주석으로 간략한 설명이 있고, 프로퍼티 이름으로도 유추가 가능합니다만, 그 중에서도 중요하다고 생각하는 옵션들을 간단하게 정리 해봤습니다.


## target
컴파일러에게 "어떤 버전의 Javascript로 컴파일 할 것인지" 알려주는 옵션입니다.
```json
"enum": [
  "ES3",
  "ES5",  // default
  "ES6",
  "ES2015",
  "ES2016",
  "ES2017",
  "ES2018",
  "ES2019",
  "ES2020",
  "ESNext"
]
```


## module 
module을 import/export 할때 사용할 module의 종류를 설정합니다.
```json
"enum": [ 
  "CommonJS",  // default
  "AMD", 
  "System", 
  "UMD", 
  "ES6", 
  "ES2015", 
  "ES2020", 
  "ESNext", 
  "None"
]
```

## target 과 moduel의 사용예시
`target`은 ES6, `module`은 CommonJS로 설정했을때 결과입니다.

*tsconfig.json*
```json
"target": "ES6",
"module": "CommonJS"
```

*app.ts*
```typescript
import name from "./foo"

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

const user = new User('Brian');
console.log(`Hello, ${user.name}`);

export default User;
```

*app.js*
```javascript
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = __importDefault(require("./foo"));
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return foo_1.default;
    }
    setName(name) {
        this.name = name;
    }
}
const user = new User('Brian');
console.log(`Hello, ${user.name}`);
exports.default = User;
```

app.js의 결과에서 봤을때 import/export 하는 부분은 commonjs의 형태로 구현이 되어있고, 실제 코드부분은 ES6문법으로 컴파일 되었습니다.

같은 파일을 `target` es5, `module` es6로 컴파일 해보면 결과는
```javascript
import name from "./foo";
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    return User;
}());
var user = new User('Brian');
console.log("Hello, " + user.name);
export default User;
```
## lib
컴파일러가 실행 할 때 사용될 기본 types 라이브러리(*.d.ts)을 설정합니다.  
참고로 속성을 따로 지정하지 않으면 target값에 따라 자동으로 기본값이 설정됩니다.
* 기본(`lib`옵션이 아예 없는경우): DOM,, ES5
* ES5 -> `["DOM", "ES5", "ScriptHost"]`
* ES6 -> `["DOM", "ES6", "DOM.Iterable", "ScriptHost"]`

```json
enum = [
  "ES5",
  "ES6",

  "ES2015",
  "ES2015.Collection",
  "ES2015.Core",
  "ES2015.Generator",
  "ES2015.Iterable",
  "ES2015.Promise",
  "ES2015.Proxy",
  "ES2015.Reflect",
  "ES2015.Symbol.WellKnown",
  "ES2015.Symbol",

  "ES2016",
  "ES2016.Array.Include",

  "ES2017",
  "ES2017.Intl",
  "ES2017.Object",
  "ES2017.SharedMemory",
  "ES2017.String",
  "ES2017.TypedArrays",

  "ES2018",
  "ES2018.AsyncGenerator",
  "ES2018.AsyncIterable",
  "ES2018.Intl",
  "ES2018.Promise",
  "ES2018.Regexp",

  "ES2019",
  "ES2019.Array",
  "ES2019.Object",
  "ES2019.String",
  "ES2019.Symbol",

  "ES2020",
  "ES2020.BigInt",
  "ES2020.Promise",
  "ES2020.String",
  "ES2020.Symbol.WellKnown",

  "ESNext",
  "ESNext.Array",
  "ESNext.AsyncIterable",
  "ESNext.BigInt",
  "ESNext.Intl",
  "ESNext.Promise",
  "ESNext.String",
  "ESNext.Symbol",

  "DOM",
  "DOM.Iterable",

  "ScriptHost",

  "WebWorker",
  "WebWorker.ImportScripts"
]
```

## Compiler options
컴파일러에게 "어떻게" 컴파일 할지 설정하는 옵션값입니다.

### outDir, rootDir
`outDir` 옵션은 이름그대로 "어느 위치에 컴파일 된 js파일을 저장할 것인지" 에 대한 경로값 입니다.  
`rootDir` 옵션은 타입스크립트 프로젝트의 root directory를 설정하는 값입니다.

2개의 옵션을 통해 **소스코드와 compiled 코드를 분리**할 수 있어 파일관리가 용이해집니다.

### sourceMap
브라우저의 개발자도구에서 원본소스인 `*.ts`파일을 기반으로 디버깅을 쉽게 할 수 있도록 *.js.map 파일을 생성합니다.
(여기서 map파일은 ts와 js파일 사이에서 브릿지 역활을 한다고 보시면 됩니다.)  
크롬 개발자도구에서 *source* 메뉴를 보시면 `*.ts` 파일을 확인 할 수 있습니다.


### noEmitOnError
타입스크립트 컴파일 중 에러가 발생 했을때, 에러와 상관없이 js파일을 생성할지 안할지에 대한 여부를 설정하는 값입니다.

### strict
컴파일 시 strict모드를 활성화합니다. (any타입 대한 에러 발생, null에 대한 검증, function.bind사용 시 param 타입검증 등..)

---

팀이나 개인, 혹은 프로젝트의 성격에 따라서 설정값들을 커스터마이징 해야 할 수도 있습니다. 그래서 어떠한 옵션들이 있고 어떤 기능을 하는지 알아 두는건 나쁠건 없을 것 같습니다.  
보다 자세한 내용이 알고 싶으신 분들은 <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html" target="_blank">공식사이트</a>에서 확인 할 수 있습니다. 