import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from './components/Toast.vue'
Vue.component('Toast',toast)
import '@/assets/base.css' /*引入公共样式*/
// import '@/iconfont/iconfont.js';/*引入iconfont图标*/

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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
