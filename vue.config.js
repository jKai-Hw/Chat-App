const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js', // 必須パラメータ
      title: 'Chats App',
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  outputDir : 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/chats-app/'
    : '/',
  assetsDir: './',
}




// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })
