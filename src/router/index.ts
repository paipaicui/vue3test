import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

]

//createWebHashHistory() 哈希
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //createWebHashHistory()
  //createWebHistory(process.env.BASE_URL) 历史
  routes
})

export default router
