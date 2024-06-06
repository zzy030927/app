import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import console from '../views/console.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/console',
    children: [{
      path: '/console',
      component: console
    }, {
      // 停车场管理
      path: '/stop',
      component: () => import('../views/StopManager.vue')
    }, {
      // 车牌识别
      path: '/carshow',
      component: () => import("../views/Upload.vue")
    }, {
      // 停车记录
      path: '/record',
      component: () => import("../views/StopCord.vue")
    }, {
      // 车牌管理
      path: '/carSpaceManager',
      component: () => import("../views/CarSpaceManager.vue")
    }, {
      // 角色管理
      path: '/roleManager',
      component: () => import("../views/RoleManager.vue")
    }, {
      // 财务管理 - 订单列表
      path: '/orderList',
      component: () => import("../views/OrderList.vue")
    }, {
      // 系统监控
      path: '/systemMonitor',
      component: () => import("../views/SystemMonitor.vue")
    }, {
      // 系统管理 - 系统菜单
      path: '/systemMenu',
      component: () => import("../views/SystemMenu.vue")
    }]
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
