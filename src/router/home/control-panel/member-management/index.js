import firstBasePath from "../../config";
import secondBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath}/member-management`,
    name: 'member-management',
    component: () => import(/* webpackChunkName: "home/control-panel/member-management" */ '@/views/home/control-panel/member-management/member-management.vue'),
    meta: {
        keepAlive: true
    }
}