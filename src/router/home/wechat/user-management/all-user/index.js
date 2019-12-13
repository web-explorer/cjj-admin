import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}/all-user`,
    name: 'all-user',
    component: () => import(/* webpackChunkName: "home/wechat/user-management/all-user" */ '@/views/home/wechat/user-management/all-user/all-user.vue'),
    meta: {
        keepAlive: true
    }
}