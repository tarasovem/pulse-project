import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/views/HomeView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: import('@/views/ProjectsView.vue'),
    },
    {
      path: '/projects/:id',
      name: 'single-project',
      component: import('@/views/SingleProjectView.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: h('p', { style: 'color: red; font-size: 2em;' }, '404 Not Found'),
    },
  ],
})

export default router
