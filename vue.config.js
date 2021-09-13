const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  // 设置跟路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 设置开发服务器
  devServer: {
    port: 831,
    overlay: {
      warnings: false,
      errors: false
    }
  },
  // 开发环境时保存代码是否启用eslint验证
  lintOnSave: false,
  // webpack设置
  configureWebpack: (config) => {
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console =
      process.env.NODE_ENV === 'production'
    // provide the app's title in webpack's name field, so that
    // config.externals = {
    //   resolve: {
    //     alias: {
    //       assets: '@/assets',
    //       comp: resolve('src/components'),
    //       views: '@/views',
    //       common: resolve('src/common')
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_components', resolve('./src/components'))
      .set('_common', resolve('./src/common'))
      .set('_views', resolve('./src/views'))
  }
}
