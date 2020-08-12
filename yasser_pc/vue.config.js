module.exports = {
	publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'plugins': '@/plugins',
      }
    }
  },
    devServer: {
		compress: true,
		disableHostCheck: true, //webpack4.0 开启热更新
		open:true,
	}

}