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
            path: '/games',
            name: '/games',
            component: () => import('@/pages/Games')
        },
        {
            path: '/agreement',
            name: '/agreement',
            component: () => import('@/pages/Agreement')
        }
    ]
})

export default router
