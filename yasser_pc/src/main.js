import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/base.css' /*引入公共样式*/
// import '@/iconfont/iconfont.js';/*引入iconfont图标*/

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
