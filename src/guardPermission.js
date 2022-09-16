import router from '~/router'
import { getToken } from '~/compontool/token'
// 全局前置守卫
router.beforeEach((to, from, next) => {
  const token = getToken()
  // 没有token情况下，强制跳回登录页
  if (!token && to.path !== '/login') {
    return next({ path: "/login" })
  }
  // 防止重复登录
  if (token && to.path === '/login') {
    return next({ path: from.path ? from.path : '/' })
  }
  next()
})