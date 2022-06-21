import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store' // short for @/store/index
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

createApp(App).use(router).use(store).mount('#app')
