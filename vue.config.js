const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '188.225.42.19',
    // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://188.225.42.19:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true
})
