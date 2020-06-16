---
title: "Sweet Pandas Eating Sweets"
date: "2017-08-10"
tags: ["tag1", "tag2"]
---

Pandas are really sweet.

Here's a video of a panda eating sweets.

충격...
md파일을 계속 읽어오지 못해 1시간정도 삽질하던 중, 문득 gatsby-config.js 파일에서 
플러그인들의 위치가 문제 일수 있겠다는 생각이 들었다.

확인 해보니 gatsby-source-filesystem 플러그인 앞에 gatsby-transformer-remark 플러그인이 있었고, 이 순서를 바꾸니 잘 작동되었다. 
plugins의 순서도 중요하니 주의하자.


<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>