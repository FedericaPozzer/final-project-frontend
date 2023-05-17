import { createRouter, createWebHistory } from "vue-router";

import AppHome from '../pages/HomePage.vue'
import Restaurant from '../pages/Restaurant.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Homepage',
            component:AppHome,
        },
        {
            path: '/restaurants/:id',
            name: 'restaurant-detail',
            component: Restaurant
        },
    ]
})

export {router};