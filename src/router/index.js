import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由进入前
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to, from)
  next()
})
// 路由离开后
router.afterEach((to, from) => {
  console.log("afterEach", to, from)
})
// 解决单页面重复路由跳转问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    window.location.reload() // 进入重复路由执行页面刷新
    console.log(err)
  })
}
export default router
