import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { Routers } from './modules'

const router = createRouter({
  history: createWebHashHistory(),
  routes: Routers as unknown as RouteRecordRaw[]
})

export default router
