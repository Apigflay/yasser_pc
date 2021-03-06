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
      '/api': {//hk 192.168.160.238
        target: 'http://192.168.160.238:3000/api',// http://192.168.161.89:3000/api HZtest  http://192.168.12.198:3000/api line2   http://192.168.11.198:3000/api line1  http://192.168.11.199:3000/api  line1
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
	}

}