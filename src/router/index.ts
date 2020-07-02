import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
  
    component: () => import('../views/Details.vue')
  },
  {
    path: '/home',
    name: 'Home',
  
    component: () => import('../views/Home.vue')
  },
  {
    path: '/total',
    name: 'Total',
  
    component: () => import('../views/Total.vue')
  },
  {
    path: '/settimanale',
    name: 'Settimanale',
  
    component: () => import('../views/Settimanale.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
