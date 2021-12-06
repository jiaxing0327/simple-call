import { createApp } from 'vue'
import App from './App.vue'
import router from '/@/route'
import store from './store'
import '/@/styles/index.scss'

import components from './components'

import '/@/utils/rem.ts'
createApp(App).use(router).use(store).use(components).mount('#app')
