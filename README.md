# chat-app
オンラインで相手を探してメッセージのやり取りができるSPAアプリです。
Vue.jsの学習のアウトプットとして作成しました。

## Technologies
- Vue CLI
- Vue Router
- Vuex
- Vuetify
- 外部API
  - [RANDOM USER GENERATOR](https://randomuser.me/)
  - [Talk API](https://a3rt.recruit.co.jp/product/talkAPI/)

## URL
https://jkai-hw.github.io/Online-Dating-App/

## Description
初めて、外部APIとの非同期通信、モジュールやルーティング、状態管理のライブラリを使用して作成したアプリケーションです。
主に公式ドキュメントを読みながら、課題の手順に沿って作成しました。

トーク履歴に新しく話した人順に表示するようにしたり、getterやsetterを用いたVuexの状態管理で堅牢に管理できるように工夫しました。

![Gif](https://user-images.githubusercontent.com/75964449/199029499-46a3faff-7cb2-47f3-966a-2f8e7009336d.gif)

前のページに戻るボタンや、個人詳細ページへへ移動できるボタンを複数設置したり、LINEのような見た目のトーク画面などユーザー体験がよくなるようにも気を付けました。



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
