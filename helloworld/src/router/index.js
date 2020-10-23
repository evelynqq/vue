import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 使用VueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // 普通載入
    component: Home
  },
  {
    path: '/ForList',
    name: 'ForList',
    //延遲載入
    component: () => import('../views/ForList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
