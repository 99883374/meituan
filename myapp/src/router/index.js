import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home.vue'
import Mine from './../views/Mine.vue'
import Test1 from './../views/Test1.vue'
import Error from './../views/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path:"test1",
        component: Test1
      }
    ]
  },
  {
    path: '/mine/:name/:age',
    component: Mine
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
