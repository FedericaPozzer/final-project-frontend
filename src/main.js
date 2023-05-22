import { createApp } from 'vue'


import './style.css'
import { createPinia } from 'pinia'
import AppLoader from './components/AppLoader.vue';
import {router} from './router/index.js'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const pinia = createPinia()

createApp(App)
.component('AppLoader',AppLoader)
.use(pinia)
.use(router)
.mount('#app')
