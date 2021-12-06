import type { AppRouteRecordRaw } from '/@/route/types'
import Layout from '/@/components/layout/index.vue'

export const BASIC_ROUTE: AppRouteRecordRaw = {
  path: '/',
  name: 'Basic',
  component: Layout,
  meta: {
    title: '',
  },
  children: [
    {
      path: 'call',
      name: 'Call',
      component: () => import('/@/pages/call/index.vue'),
      meta: {
        title: 'Call',
      },
    }
  ]
}