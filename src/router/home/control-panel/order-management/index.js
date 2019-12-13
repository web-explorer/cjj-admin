import firstBasePath from "../../config";
import secondBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath}/order-management`,
    name: 'order-management',
    component: () => import(/* webpackChunkName: "home/control-panel/order-management" */ '@/views/home/control-panel/order-management/order-management.vue'),
    meta: {
        keepAlive: true
    }
}