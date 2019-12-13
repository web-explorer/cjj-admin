import firstBasePath from "../../config";
import secondBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath}/shop-management`,
    name: 'shop-management',
    component: () => import(/* webpackChunkName: "home/control-panel/shop-management" */ '@/views/home/control-panel/shop-management/shop-management.vue'),
    meta: {
        keepAlive: true
    }
}