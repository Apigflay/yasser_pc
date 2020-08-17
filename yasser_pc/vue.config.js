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
    proxy: {
      '/api': {
        target: 'http://192.168.12.198:3000/api',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
	}

}