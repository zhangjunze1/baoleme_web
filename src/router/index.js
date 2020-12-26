import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import ViewUI from 'view-design'
Vue.use(ViewUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    // eslint-disable-next-line no-undef
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      {
        path: '/shopinfo',
        name: 'ShopInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/ShopInfo.vue')
      },
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Welcome.vue')
      },
      {
        path: '/sort',
        name: 'Sort',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Sort.vue')
      },
      {
        path: '/goods',
        name: 'Goods',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Goods.vue')
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Order.vue')
      },
      {
        path: '/loginlog',
        name: 'LoginLog',
        component: () => import(/* webpackChunkName: "about" */ '../views/staff/LoginLog.vue')
      },
      {
        path: '/identity',
        name: 'Identity',
        component: () => import(/* webpackChunkName: "about" */ '../views/staff/Identity.vue')
      },
      {
        path: '/coupon',
        name: 'Coupon',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Coupon.vue')
      },
      {
        path: '/reduction',
        name: 'Reduction',
        component: () => import(/* webpackChunkName: "about" */ '../views/user/Reduction.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
