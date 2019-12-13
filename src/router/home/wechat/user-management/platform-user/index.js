import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}/platform-user`,
    name: 'platform-user',
    component: () => import(/* webpackChunkName: "home/wechat/user-management/platform-user" */ '@/views/home/wechat/user-management/platform-user/platform-user.vue'),
    meta: {
        keepAlive: true
    }
}