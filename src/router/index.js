import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用ElementUi组件el-menu且点击同一个el-menu-item时，页面报错NavigationDuplicated
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
