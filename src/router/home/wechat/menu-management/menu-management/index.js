import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}/menu-management`,
    name: 'menu-management',
    component: () => import(/* webpackChunkName: "home/wechat/menu-management/menu-management" */ '@/views/home/wechat/menu-management/menu-management/menu-management.vue'),
    meta: {
        keepAlive: true
    }
}