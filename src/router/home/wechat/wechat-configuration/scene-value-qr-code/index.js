import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}/scene-value-qr-code`,
    name: 'scene-value-qr-code',
    component: () => import(/* webpackChunkName: "home/wechat/wechat-configuration/scene-value-qr-code" */ '@/views/home/wechat/wechat-configuration/scene-value-qr-code/scene-value-qr-code.vue'),
    meta: {
        keepAlive: true
    }
}