import Vue from 'vue'
import Router from 'vue-router'
import idutyRouters from './iduty/iduty';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/iduty/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: 'login' */'@/view/login/login')
    },
    {
        path: '/iduty/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: 'home' */'@/view/iduty/home/index')
    },
    {
        path: '/iduty',
        name: 'Iduty',
        redirect: '/iduty',
        component: () => import(/* webpackChunkName: 'iduty' */'@/view/iduty'),
        children: idutyRouters
    }]
})
