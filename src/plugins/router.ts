import MainLayout from '@/layouts/MainLayout.vue';
import { createRouter, createWebHistory, RouterOptions } from 'vue-router';

const routes: RouterOptions['routes'] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'IndexPage',
        component: () => import('@/pages/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
