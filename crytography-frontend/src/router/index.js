import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('@/views/login/main.vue')
const content = () => import('@/views/content/main.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: content
  },
  {
    path: '/content',
    name: 'content',
    component: content
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
