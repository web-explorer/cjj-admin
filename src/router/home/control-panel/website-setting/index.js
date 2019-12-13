import firstBasePath from "../../config";
import secondBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath}/website-setting`,
    name: 'website-setting',
    component: () => import(/* webpackChunkName: "home/control-panel/website-setting" */ '@/views/home/control-panel/website-setting/website-setting.vue'),
    meta: {
        keepAlive: true
    }
}