const { defineConfig } = require('@vue/cli-service')
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js', // 必須パラメータ
      title: 'Chat App',
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  outputDir : 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Online-Dating-App/'
    : '/',
  assetsDir: './',
}




// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })
