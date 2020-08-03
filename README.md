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

# 11 



















https://whyphoto.lamost.org/
https://www.zcool.com.cn/work/ZMjE1NzM3MDg=.html