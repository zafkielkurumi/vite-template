import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '@/pages/HelloWorld.vue';

const Pages = import.meta.glob('../pages/**/*.vue');

const routes: RouteRecordRaw[] = [{
    path: '',
    redirect: '/welcome'
}, {
    path: '/welcome',
    component: HelloWorld
}]

export default createRouter({
    history: createWebHistory(),
    routes
})
