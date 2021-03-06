import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/home/index.vue'
import Detail from './../views/detail/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path:'/*',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
