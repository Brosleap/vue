import SignIn from '@/components/auth/SignIn.vue';


import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'SignIn',
        component:  'SignIn'
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
export default router;