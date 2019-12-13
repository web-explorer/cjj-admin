import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}/attention-response-list`,
    name: 'attention-response-list',
    component: () => import(/* webpackChunkName: "home/wechat/response-management/attention-response-list" */ '@/views/home/wechat/response-management/attention-response-list/attention-response-list.vue'),
    meta: {
        keepAlive: true
    }
}