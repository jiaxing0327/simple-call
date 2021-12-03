import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'Root',
    //   redirect: '/',
    //   meta: {
    //     title: 'Root',
    //   },
    // },
    {
      path: '/',
      name: 'Login',
      component: () => import('/@/pages/login/index.vue'),
      meta: {
        title: '登录/注册',
      },
    }
  ]
})
export default router
