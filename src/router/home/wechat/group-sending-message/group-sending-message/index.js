import firstBasePath from "../../../config";
import secondBasePath from "../../config";
import thirdBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath + thirdBasePath}`,
    name: 'group-sending-message',
    component: () => import(/* webpackChunkName: "home/wechat/group-sending-message/group-sending-message" */ '@/views/home/wechat/group-sending-message/group-sending-message/group-sending-message.vue'),
    meta: {
        keepAlive: true
    }
}