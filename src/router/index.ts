import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Map from '@/views/map.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/home",
    component: Map,
    children: [
      {
        path: '/home',
        name: 'home',
        component: import("@/views/path/home.vue")
      },
      {
        path: '/task',
        name: 'task',
        component: import("@/views/path/task.vue")
      },
      {
        path: '/study',
        name: 'study',
        component: import("@/views/path/study.vue")
      },
      {
        path: '/my',
        name: 'my',
        component: import("@/views/path/my.vue")
      }
    ]
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
