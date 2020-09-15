---
title: "6. 타입스크립트 환경 구축하기 1"
date: "2020-09-08"
category: "study"
sub_category: "typescript"
tags: ["typescript"]
---

이전 포스트에서 `typescript` 패키지를 설치해 `tsc` 커맨드로 간단하게 컴파일을 해봤습니다.  
하지만 실제 프로젝트라면 수많은 ts파일들을 일일이 컴파일 하는건 너무 비효율적입니다.

실제 타입스크립트 프로젝트를 위한 환경구축을 위해 하나하나 살펴보겠습니다.

## watch mode
typescript 컴파일러는 watch mode 옵션을 제공하는데, 커맨드 실행 시 `--watch` 또는 `-w` 플래그를 넣어주면 동작합니다.

```bash
tsc app.ts --watch
```

app.ts에 있는 코드의 변화를 감지하여 타입스크립트 컴파일러가 실행됩니다.

## tsconfig

watch mode를 통해 자동으로 컴파일되도록 수정했는데, `*.ts` 파일이 많아진다면 어떻게 해야할까요?  
타입스크립트 프로젝트를 위한 환경설정 파일을 생성해봅시다.

먼저 초기화를 합니다.
```bash
tsc --init
```

초기화를 하면 tsconfig.json 파일이 생성됩니다.  
이 파일은 타입스크립트에 타입스크립트를 컴파일시 설정내용을 정의하는 파일입니다.

파일을 보면 뭔가 무시무시한 것들이 쫘르륵 있는데요.  
타입스크립트 컴파일 시 사용될 옵션들과 짧은 설명글이 만들어져 있습니다. 우선 파일이 정상적으로 생성되었는지만 확인하면 됩니다.  
(세세한 내용들은 나중에 포스트를 올리겠습니다. 약속🤞)

초기화가 정상적으로 되었다면 아래 스크립트를 실행해봅니다.
```bash
tsc --watch
```
코드는 심플합니다.  
타입스크립트 컴파일러를 watch모드와 함게 실행합니다.

초기화 전 `tsc` 커맨드만 실행을 하면 콘솔화면에 `tsc` 커맨드를 사용하는 방법에 대해 나오지만,
초기화 이후는 `tsconfig.json`파일에 기술된 설정에 따라 컴파일러가 동작합니다.  

*[초기화 전 실행결과]*
```bash
Version 4.0.2
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 ....
```

커맨드를 실행하면 프로젝트 폴더 내에 있는 모든 *.ts 파일들이 정상적으로 컴파일됩니다.


다음 시간에는 환경설정하는 방법에 대해 알아보겠습니다.  
감사합니다.