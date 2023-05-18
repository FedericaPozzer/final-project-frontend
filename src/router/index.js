import { createRouter, createWebHistory } from "vue-router";

import AppHome from '../pages/Home.vue'
import Restaurant from '../pages/Restaurant.vue'
import Cart from '../pages/CartPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Homepage',
            component:AppHome,
        },
        {
            path:'/restaurant/:id',
            name:'Restaurant',
            component:Restaurant,
        },
        {
            path:'/cart',
            name:'Cart',
            component:Cart,
        }

        /* TODO: ROTTA PAGAMENTI */

    ]
})

export {router};