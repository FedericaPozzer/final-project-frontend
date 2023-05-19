import { createApp } from 'vue'


import './style.css'
import { createPinia } from 'pinia'

import {router} from './router/index.js'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
