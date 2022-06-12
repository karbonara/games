import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: '/',
            component: () => import('@/pages/Main')
        },
        {
            path: '/contacts',
            name: '/contacts',
            component: () => import('@/pages/Contacts')
        },
        {
            path: '/goods',
            name: '/goods',
            component: () => import('@/pages/Goods')
        },
        {
            path: '/game-page',
            name: '/game-page',
            component: () => import('@/pages/GamePage')
        },
        {
            path: '/agreement',
            name: '/agreement',
            component: () => import('@/pages/Agreement')
        },
        {
            path: '/privacy',
            name: '/privacy',
            component: () => import('@/pages/Privacy')
        }
    ]
})

export default router
