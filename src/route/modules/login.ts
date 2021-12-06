import type { AppRouteRecordRaw } from '/@/route/types'

export const LOGIN_ROUTE: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/pages/login/index.vue'),
  meta: {
    title: '登录/注册',
  },
}