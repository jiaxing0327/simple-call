import { createApp } from 'vue'
import App from './App.vue'
import router from '/@/route'
import store from './store'

import '/@/utils/rem.ts'
createApp(App).use(router).use(store).mount('#app')
