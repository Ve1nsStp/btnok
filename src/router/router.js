import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/layout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          component: () => import('@/views/home/home.vue'),
        },
      ],
    },
    {
      path: '/display',
      component: Layout,
      children: [
        {
          path: '/display/dynamic',
          component: () => import('@/views/display/dynamic.vue'),
          redirect: '/display/dynamic/classify',
          children: [
            {
              path: '/display/dynamic/classify',
              component: () => import('@/views/display/classify.vue'),
            },
            {
              path: '/display/dynamic/list',
              component: () => import('@/views/display/list.vue'),
            },
          ],
        },
        {
          path: '/display/about',
          component: () => import('@/views/display/about.vue'),
        },
      ],
    },
    {
      path: '/lesson',
      component: Layout,
      children: [
        {
          path: '/lesson/curriculum',
          component: () => import('@/views/lesson/Curriculum.vue'),
        },
      ],
    },
  ],
})

export default router
