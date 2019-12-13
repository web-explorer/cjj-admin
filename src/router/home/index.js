import controlPanel from './control-panel/index'
import wechat from './wechat/index'

export default {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
    children: [
        ...controlPanel,
        ...wechat
    ]
}