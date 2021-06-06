import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Mine from './../views/Mine.vue'
import Test1 from './../views/Test1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:"test1",
        component: Test1
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
