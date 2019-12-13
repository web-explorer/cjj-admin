export default {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import(/* webpackChunkName: "sign-up" */ '@/views/sign-up/sign-up.vue')
}