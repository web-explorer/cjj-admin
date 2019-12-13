import firstBasePath from "../../config";
import secondBasePath from "../config";

export default {
    path: `${firstBasePath + secondBasePath}/home-page-configuration`,
    name: 'home-page-configuration',
    component: () => import(/* webpackChunkName: "home/control-panel/home-page-configuration" */ '@/views/home/control-panel/home-page-configuration/home-page-configuration.vue'),
    meta: {
        keepAlive: true
    }
}