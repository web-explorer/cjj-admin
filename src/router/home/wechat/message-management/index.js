import firstBasePath from "../../config";
import secondBasePath from "../config";
import MessageManagement from '@/views/home/wechat/message-management/message-management.vue'

export default {
    path: `${firstBasePath + secondBasePath}/message-management`,
    name: 'message-management',
    component: MessageManagement,
    meta: {
        keepAlive: true
    }
}