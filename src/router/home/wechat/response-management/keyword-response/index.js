import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}/keyword-response`,
    name: 'keyword-response',
    component: () => import(/* webpackChunkName: "home/wechat/response-management/keyword-response" */ '@/views/home/wechat/response-management/keyword-response/keyword-response.vue'),
    meta: {
        keepAlive: true
    }
}