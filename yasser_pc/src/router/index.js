import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import EditBlog from '../views/EditBlog.vue'
import No404 from '../views/No404.vue'
import TestDemo from '../views/TestDemo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'No404',
    component: No404
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      name:'登录',
      index:[{name:'登录',path:'/login'}]
    }
  },
  {
    path: '/editblog',
    name: 'EditBlog',
    component: EditBlog,
    meta:{
      name:'博客',
      index:[{name:'博客',path:'/editblog'}]
    }
  },
  {
    path: '/testdemo',
    name: 'TestDemo',
    component: TestDemo,
    meta:{
      name:'测试',
      index:[{name:'测试',path:'/testdemo'}]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   // console.log('navigation-guards');
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
//   //'Index', 'Cpassword','Privilege','Role','Operators','SaleManage','RetailProduct','RetailPay','productlist','activitylist','salesman','Stock','Wholesale','Warehouse','Retail','Warehouse','Warehouseinfo'
//   const nextRoute = ['Index','Hostduration','Anchordoll','Anchorpipeline','Anchormanagement','Passwordmodification'];
//   let isLogin=localStorage.getItem("g_third_userName");// 是否登录
//   // console.log(isLogin);
//   // 未登录状态；当路由到nextRoute指定页时，跳转至login
//   if (nextRoute.indexOf(to.name) >= 0) { 
//     if (isLogin==null) {
//       // console.log('what fuck');
//       router.push({ name: 'Login' })
//     }
//   }
//   // 已登录状态；当路由到login时，跳转至home
//   if (to.name === 'Login') {
//     if (isLogin) {
//       router.push({ name: 'Index' });
//     }
//   }
//   next();
// });
export default router
