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
https://jkai-hw.github.io/chats-app/

## Description
初めて、外部APIとの非同期通信、モジュールやルーティング、状態管理のライブラリを使用して作成したアプリケーションです。
主に公式ドキュメントを読みながら、課題の手順に沿って作成しました。

メッセージデータの取り扱いは、Messageオブジェクトを作成しそれを連想配列に格納しました。特定のデータへのアクセスの計算量少なくし簡単にアクセスできるように開発しました。
また、日時のデータをMessageオブジェクトに含めることによって、Talk履歴を新しい順に表示できるようにしております。。

ユーザーデータの取り扱いも、取得してきたデータ内にあるIDをキーにして連想配列に格納しております。

getterやsetterを用いたVuexの状態管理で堅牢に管理できるようにもしました。

レスポンシブにも対応しております。DevToolsでご覧になる際は、対象のサイズ表示にしてから一度リロードしてご覧ください。

![Gif](https://user-images.githubusercontent.com/75964449/207264299-559d30e5-2f3f-4eef-bb85-f417d19ce724.gif)



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
