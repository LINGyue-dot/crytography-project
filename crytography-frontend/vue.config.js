/**
 * @Description:
 * @author qianlong
 * @date $
 */
const path = require('path')
module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      extensions: [],
      // 别称配置,可以自由添加其他路径
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  // 配置eslint的自动修复
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.module
        .rule('eslint')
        .use('eslint-loader')
        .loader('eslint-loader')
        .tap(options => {
          options.fix = true
          return options
        })
    }
  }
}
