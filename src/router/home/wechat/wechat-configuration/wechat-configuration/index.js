import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}`,
    name: 'wechat-configuration',
    component: () => import(/* webpackChunkName: "home/wechat/wechat-configuration/wechat-configuration" */ '@/views/home/wechat/wechat-configuration/wechat-configuration/wechat-configuration.vue'),
    meta: {
        keepAlive: true
    }
}