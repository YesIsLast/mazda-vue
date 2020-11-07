import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局自定义样式
import './assets/css/lee.css'
import './assets/css/iconfont.css'
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(animated)
//全局混入
import mixin from './mixin/mixin'
Vue.mixin(mixin)
// 全局公用方法
import utils from './utils/utils'
Vue.prototype.$utils = utils

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
