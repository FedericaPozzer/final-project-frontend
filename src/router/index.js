import { createRouter, createWebHistory } from "vue-router";

import AppHome from '../pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Homepage',
            component:AppHome,
        }
    ]
})

export {router};