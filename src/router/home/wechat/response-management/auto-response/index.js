import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}/auto-response`,
    name: 'auto-response',
    component: () => import(/* webpackChunkName: "home/wechat/response-management/auto-response" */ '@/views/home/wechat/response-management/auto-response/auto-response.vue'),
    meta: {
        keepAlive: true
    }
}