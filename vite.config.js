const path = require('path')

module.exports = {
    // 导入别名
    // 这些条目可以是精确的请求->请求映射*（精确，无通配符语法）
    // 也可以是请求路径-> fs目录映射。 *使用目录映射时
    // 键**必须以斜杠开头和结尾**
    alias: {
      '/@/': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      // ‘react-dom‘: ‘@pika/react-dom‘
      // ‘/@foo/‘: path.resolve(__dirname, ‘some-special-dir‘),
    },
    // 配置Dep优化行为
    optimizeDeps: {
      // exclude: [‘dep-a‘, ‘dep-b‘],
    },
    // 转换Vue自定义块的功能。
    vueCustomBlockTransforms: {
      // i18n: src => `export default Comp => { ... }`,
    },
    port: 9525,
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 为开发服务器配置自定义代理规则。
    devServer: {
      host: '0.0.0.0',
      port: 9525,
      https: false,
      hotOnly: false,
      // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
      // proxy: {
      //   '/api': {
      //     target: 'http://localhost:8880',
      //     changeOrigin: true,
      //     secure: false,
      //     // ws: true,
      //     pathRewrite: {
      //       '^/api': '/static/mock' // 请求数据路径别名,这里是注意将static/mock放入public文件夹
      //     }
      //   }
      // },
    }
}