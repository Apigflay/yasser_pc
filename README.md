# yasser_pc
yasser 新官网  pc端

# 1.进入一个目录，创建项目  

vue create 'project_name'  不支持驼峰

# 2.我们这里选择手动配置

Manually select features --> enter

通过↑ ↓ 箭头选择你要配置的项，按 空格 是选中，按 a 是全选，按 i 是反选

? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) Babel //转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。 
( ) TypeScript// TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行
( ) Progressive Web App (PWA) Support// 渐进式Web应用程序
( ) Router // vue-router（vue路由）
( ) Vuex // vuex（vue的状态管理模式）
( ) CSS Pre-processors // CSS 预处理器（如：less、sass）
( ) Linter / Formatter // 代码风格检查和格式化（如：ESlint）
( ) Unit Testing // 单元测试（unit tests）
( ) E2E Testing // e2e（end to end） 测试

 Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors  我使用的

# 3 选择是否使用history routerUse history mode for router? (Requires proper server setup for index fallback in production) (Y/n) n 路由模式

# 4 css 处理器选择

  Sass/SCSS (with dart-sass)  node-sass是自动编译实时的，dart-sass需要保存后才会生效
  Sass/SCSS (with node-sass)
  Less
  Stylus

# 5 代码校验没要

# 6 选择如何存放配置
Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)

> In dedicated config files // 独立文件放置
> In package.json // 放package.json里

# 7 Save this as a preset for future projects? (y/N)

键入N不记录，如果键入Y需要输入保存名字，如第2步所看到的我保存的名字为 vue_demo

# 8 创建完成
 $ cd yasser_pc
 $ npm run serve

 # 9 vue cli4.x 项目启动后自动开启浏览器配置

 package.json 添加 --open

"serve": "vue-cli-service serve --open",

# 10 增加热更新
  新建  vue.config.js
  module.exports = {

    devServer: {
		compress: true,
		disableHostCheck: true, //webpack4.0 开启热更新
	}

  }
  
  packge.json 修改
  "serve": "vue-cli-service serve && webpack-dev-server --open",

  重启

# 11 使用iconfont 彩色图标

 <script src="//at.alicdn.com/t/font_607479_a4pgo1tfvyd.js"></script>

 import '@/iconfont/iconfont.js';/*引入iconfont图标*/

 .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-haimianbaobao-"></use>
</svg>

.icon {
  width: 35px!important;
  height: 35px!important;
}

# 12 npm run build 报错问题

index.html meta标签无 ""

# 13 vuex 问题
  
  app.vue 优化

# 14 退出登录 优化  异步处理

# 15 按需引入 element ui

1>安装  npm i element-ui -S   
2>安装  npm install babel-plugin-component -D
3>在balelconfig.js 增加
"plugins": [
  [
    "component",
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]
]
4 引入并使用
import { Button,Message} from 'element-ui';
Vue.use(Button)
Vue.prototype.$message = Message;

<el-button :plain="true" @click="open">打开消息提示</el-button>
this.$message('这是一条消息提示');

# 16 使用swiper 两种方式 

1 通过引入swiper.js 以及css 
再页面或者组件使用swiper的地方引入
js css  下个包packge下有
// var Swiper = require('@/lib/tools/swiper/swiper-bundle.min.js')  ---都行
import Swiper from '@/lib/tools/swiper/swiper-bundle.min.js'  ---都行
import '@/lib/tools/swiper/swiper-bundle.min.css' /*引入swiper公共样式*/

初始化方法
initSwiper:function(){
  var swiper = new Swiper('.swiper-container',{
    direction: 'horizontal', // 垂直切换选项 horizontal vertical
      speed:300,//速度
      autoplay : {
          delay:3000
      },
      grabCursor:true,//默认：false举例：true
      setWrapperSize:true,//disflex 布局
      freeMode : true,//抵抗反弹
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
          el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
          el: '.swiper-scrollbar',
      },
  });
}

引用
mounted(){
  this.initSwiper()
},

2 全局注册 
npm install swiper vue-awesome-swiper --save  安装

main.js

import VueAwesomeSwiper from 'vue-awesome-swiper';

// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css' // import style
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

<div class="swiper2Wrap">
    <swiper ref="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>

swiperOption 无效 采用init方法初始化
















https://www.jianshu.com/p/aca26ec75ec3  markdown
https://www.cnblogs.com/mica/p/10756872.html    画板娘

https://whyphoto.lamost.org/    fang
https://www.zcool.com.cn/work/ZMjE1NzM3MDg=.html