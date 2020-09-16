import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from './components/Toast.vue'
Vue.component('Toast',toast)
import '@/assets/base.css' /*引入公共样式*/

import VueAwesomeSwiper from 'vue-awesome-swiper';

// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css' // import style
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

// import with ES6
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import Global_ from './lib/js/GlobalObj.js'   //全局对象
Vue.prototype.GLOBAL = Global_; //添加Global_到Vue的原型对象上

// import '@/iconfont/iconfont.js';/*引入iconfont图标*/

import axios from 'axios';//引入axios
// import axios from './assets/js/axios';   //并依据创建文件
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上

function toastT(tf,msg,id){//
    store.commit('set_allMsg',msg)
    if(tf){
      store.commit('set_allToast',tf)
    }else{
      store.commit('set_allToast')
    }
    var that = this;
    clearTimeout(timer)
    var timer = setTimeout(function(){
      store.commit('set_allToast',false)
    },5000)
}
Vue.prototype.$Toast = toastT;

import { Button,Message} from 'element-ui';
Vue.use(Button)//
// Vue.use(Message)
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
