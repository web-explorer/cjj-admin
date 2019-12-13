import firstBasePath from "../../config";
import secondBasePath from "../config";
import Welcome from '@/views/home/control-panel/welcome/welcome.vue'

export default {
    path: `${firstBasePath + secondBasePath}/welcome`,
    name: 'welcome',
    component: Welcome,
    meta: {
        keepAlive: true
    }
}