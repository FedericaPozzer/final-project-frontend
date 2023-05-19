import { createRouter, createWebHistory } from "vue-router";

import AppHome from '../pages/Home.vue'
import Restaurant from '../pages/Restaurant.vue'
import CartComponent from '../components/CartComponent.vue'

import Lens from '../components/navbar/Lens.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'Homepage',
            component:AppHome,

            /* OPZIONI DELLA ROTTA '/' */

            children: [
                // SE L'UTENTE CERCA '/search', ARRIVA ALL'HOMEPAGE CON IL COMPONENTE
                // 'SEARCH' APERTO
                {
                path: '/cart',
                component: CartComponent,
                props: true,
                meta: {
                    cartExpanded: true
                }
                },
                {
                path: '/search',
                component: Lens,
                props: true,
                meta: {
                    expanded: true
                }
                },
            ]
        },
        {
            path:'/restaurants/:id',
            name:'Restaurant',
            component:Restaurant,
        },

        /* TODO: ROTTA PAGAMENTI */

    ]
})

export {router};