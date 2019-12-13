import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

// 引入jquery
import $ from 'jquery'

// 引入页面通用样式
import './common/scss/index.scss'

// 引入iconfont.js
import './common/js/iconfont'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
