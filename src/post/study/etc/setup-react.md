---
title: "리액트환경 셋업하기"
date: "2020-09-01"
category: "study"
sub_category: "etc"
tags: ["react", "webpack", "babel"]
---

리액트 앱은 페이스북에서 제공하는 `create-react-app` 라이브러리를 이용해서 환경을 세팅하는게 매우 편리하지만, 
학습 차원에서 처음부터 셋업을 해봤고 각각의 단계별로 간략하게 정리를 해봤습니다.

## 1. 초기화 (npm init or yarn)


먼저 프로젝트를 초기화 해야하는데 `npm init` 로 괜찮고 `yarn`도 괜찮지만, 개인적으로 yarn으로 초기화하면 package.json 파일이 심플하게 만들어지고 퍼포먼스도 좋다하여 yarn을 사용했습니다.

(둘중 편한것을 사용하시면 되는데, 두개의 스크립트가 혼용되면 의존성을 관리하는 참조파일(lock파일)이 달라 얘기치못한 에러가 발생할 수 있습니다.)

## 2. React 생성
react 를 설치합니다.
```bash
 yarn add react react-dom
```

설치가 성공적으로 됐으면 심플한 리액트 코드를 `src/` 디렉토리에 생성합니다.
```javascript
import React from "react";
import ReactDOM from "react-dom";

const Component = () => <div>Hello world!</div>

ReactDOM.render(<Component />, document.getElementById("app"));
```

## 3. webpack 셋업
webpack을 설치합니다.
```bash
 yarn add --dev webpack webpack-cli webpack-dev-server
```

root위치에 webpack 환경설정 파일인 webpack.config.js 파일을 생성하고, 
최초에는 번들링이 될 타겟의 정보인 **entry**, 번들링 된 후의 정보인 **output** 값만 넣어주겠습니다.
```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js"
  }
}
```

마지막으로 webpack-dev-server를 실행할 스크립트를 package.json에 추가합니다.
*package.json*
```json
{
  "scripts": {
    "dev": "webpack-dev-server"
  },
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  }
}

```

## 3. babel 설치
 react와 es6 문법으로 되어있는 src/index.js파일을 컴파일하기 위해 babel을 설치합니다.
 ```bash
 yarn add --dev babel-loader @babel/core @babel/preset-env @babel/preset-react
```

babel이 실행될때 참조될 환경설정 파일인 **.babelrc**파일을 root 위치에 생성합니다.
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

(현재 디렉토리구조)
```
├── src
│   └── index.js
├── .babelrc
├── package.json
├── webpack.config.js
├── yarn.lock
└── node_modules
``` 

## 4. webpack에 babel연동
webpack이 번들링을 하는 중간에 babel-loader를 이용해 컴파일 할수 있도록 webpack 환경설정을 추가합니다.

참고: <a href="https://webpack.js.org/configuration/module/#modulerules" target="_blank">https://webpack.js.org/configuration/module/#modulerules</a>

*webpack.config.js*
```javascript
module.exports = {
  // 기존 설정들..
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: { 
          loader: "babel-loader"
        }
      }
    ]
  }
}

```

## 5. webpack-dev-server + html-webpack-plugin
webpack-dev-server 사용을 위해 webpack 환경설정을 추가하고, html-webpack-plugin 연동도 같이 합니다.

참고: <a href="https://webpack.js.org/configuration/dev-server/" target="_blank">https://webpack.js.org/configuration/dev-server/</a>

```bash
yarn add --dev html-webpack-plugin
```

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
module.exports = {
  // 기존 설정들..
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"})
  ]
}
```

`./src` 위치에 index.html 템플릿을 생성하는데, 리액트에서 참조하고 있는 **app** 이라는 id를 가진 div태그를 추가해야 합니다.

그 외에 html-webpack-plugin 플러그인을 통해 번들링이 된 js파일을 참조하는 코드가 자동으로 html에 주입이 됩니다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

## 6. 실행
스크립트를 실행 해보겠습니다.
```bash
yarn dev
```

콘솔창에 시뻘건 에러문구들이 없다면 정상적으로 실행된 것이고 localhost:9000로 접속하면 브라우저에 **Hello world!**를 확인 할 수 있습니다.


## 마치며
매번 환경을 셋업할때마다 구글링 하는것보다는 이참에 기록 해두는것도 좋은거 같아 간략하게 정리를 해봤습니다. 필요한 부분만 최대한 간략하게 정리를 했기 때문에 세세한 설명은 많이 부족하니 공식문서를 참고하시면 좋을 것 같습니다.
