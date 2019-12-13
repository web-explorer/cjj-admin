import firstBasePath from "../../config";
import secondBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath}/goods-management`,
    name: 'goods-management',
    component: () => import(/* webpackChunkName: "home/control-panel/goods-management" */ '@/views/home/control-panel/goods-management/goods-management.vue'),
    meta: {
        keepAlive: true
    }
}