---
title: "firebase functions 맛보기"
date: "2020-09-22"
category: "study"
sub_category: "etc"
tags: ["firebase", "functions", "serverless"]
---

별도의 서버설치 없이(serverless) api를 생성 할 수 있도록 함수기반의 서비스를 제공하는 firebase 주요 기능 중 하나입니다. (Nodejs 기반)

AWS의 Lambda와 달리 firebase의 신규 functions를 생성하려면 firebase에서 제공하는 `firebase-tools`을 로컬에 설치하여 연동한 후 구현/배포까지 진행해야 합니다.

## 1. firebase-tools
firebase-tools 라이브러리를 global flag로 설치합니다.

```bash
npm install -g firebase-tools
```

## 2. authentication with Chrome

설치가 완료 되었으면 실제 사용을 위해 구글 인증을 해야합니다. 필요한건 크롬 브라우저. 아래 스크립트를 실행합니다.

```bash
firebase login
```

실행하면 크롬브라우저에 로그인화면이 뜨는것을 확인 하실 수 있습니다. 로그인하면 완료!

## 3. init Firebase project

프로젝트 폴더를 하나 생성한 후에 firebase를 초기화합니다.

```bash
firebase init
```

실행하면 뭐 진행 할 준비됐냐는 얘기가 나오는데 Y하시고, 그 다음에는 초기화 할 프로젝트의 리스트가 아래와 같이 나옵니다.

```bash
( ) Database: Deploy Firebase Realtime Database Rules
( ) Firestore: Deploy rules and create indexes for Firestore
(*) Functions: Configure and deploy Cloud Functions
( ) Hosting: Configure and deploy Firebase Hosting sites
( ) Storage: Deploy Cloud Storage security rules
( ) Emulators: Set up local emulators for Firebase features
```
세번쨰 메뉴 Functions선택! (이동은 화살표, 선택은 스페이스 눌르시면 됨)

다음으로 어떤식으로 firebase 프로젝트를 불러올 것인지 선택하는 메뉴가 나오는데 아직 생성된 것이 없으니 새로 생성합시다. 두번째 메뉴 엔터!

```bash
Use an existing project
Create a new project <
Add Firebase to an existing Google Cloud Platform project
Don't set up a default project
```

생성할 firebase 프로젝트 이름을 넣어주신후 다시 엔터!  
바로 이어서 functions 프로젝트에서 Javascript or Typescript,중 어떤 것을 사용지와 같은 환경설정 화면이 나오는데 선택하시고 npm install까지 하면 초기화가 완료 되었습니다.

## 4. deploy

`functions` 폴더가 있을텐데 가장 기본적으로 만든 functions 코드입니다.

하나의 serverless 함수에 필요한 의존성들과 코드에 대한 환경설정 값들이 모두 이 functions에서 구성됩니다.  
우선 기본으로 만들어진 index파일에 있는 주석을 지워보고 배포를 합니다.

크헉....아래와 같은 에러가 뜨네요..

```bash
Error: HTTP Error: 400, Billing account for project 'xxxxxxxxx' is not found. Billing must be enabled for activation of service(s) .....
```

두가지로 문제를 해결 할 수 있습니다.

### 1. Nodejs 버전값을 10 → 8로 수정
package.json에 정의 된 Nodejs 버전값을 10 → 8로 바꿔주시면 됩니다.

다만 **firebase에서 더 이상 Nodejs8 버전이 순차적으로 지원되지 않을 예정입니다.**  
(2021.02.15 부터는 신규배포 및 업데이트, 2021.03.15부터는 함수실행 자체가 안됨)

### 2. 결제방식을 firebase에 연동(또는 등록)
저는 두번째 방법으로 배포를 진행 해보려고 하는데요.

결제방식을 등록한다고 바로 결제가 이뤄지는건 아니니 걱정 안하셔도 됩니다.  
lambda와 동일하게 함수 사용량에 따라 지불하는 방식입니다. (200만회까지는 무료, 초과되면 100만건당 $0.40 정도 과금된다고 하네요.)

[https://console.cloud.google.com/billing/](https://console.cloud.google.com/billing/) 링크에 접속해서 결제정보를 등록하시면 되는데 매우 간단하니 어렵지 않게 진행 할 수 있습니다.(구글계정에 이미 결제가 등록되어있는 분들은 쉽게 연동 할 수 있네요)

결제가 생성 되었으면 상단에 "내 프로젝트" 탭으로 이동해 "작업" 메뉴를 클릭 한 후에 앞서 등록한 결제계정을 선택합니다.

자, 등록이 끝났으면 다시 배포를 해봅시다.

배포를 위한 firebase 옵션들을 체크하고, 함수를 패키징해 업로드하고 빌드하는 일련의 과정들이 끝나고 배포가 정상적으로 되었습니다! 

```bash
+  functions: Finished running predeploy script.
|  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
|  functions: ensuring required API cloudbuild.googleapis.com is enabled...
+  functions: required API cloudbuild.googleapis.com is enabled
+  functions: required API cloudfunctions.googleapis.com is enabled
|  functions: preparing functions directory for uploading...
|  functions: packaged functions (33.66 KB) for uploading
+  functions: functions folder uploaded successfully
|  functions: updating Node.js 10 function helloWorld(us-central1)...
+  functions[helloWorld(us-central1)]: Successful update operation.

+  Deploy complete!
```

endpoint에 접속하면 *Hello from Firebase!* 문구가 잘 나오는걸 확인 하실 수 있습니다. (부디!)

