import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/brew',
            name: 'brew',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/Brew.vue')
        },
        {
            path: '/bistro',
            name: 'bistro',
            component: () => import('./views/Bistro.vue')
        },
        {
            path: '/roasting',
            name: 'roasting',
            component: () => import('./views/Roasting.vue')
        },
        {
            path: '/under_construction',
            name: 'under_construction',
            component: () => import('./views/UnderConstruction.vue')
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () => import('./views/Feedback.vue')
        }
    ]
});
