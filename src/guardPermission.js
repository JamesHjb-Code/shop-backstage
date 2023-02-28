import router from '~/router'
import { getToken } from '~/compontool/token'
import store from './store'
// 全局前置守卫
router.beforeEach(async (to, from, next) => {
 
  const token = getToken()

  // 没有token情况下，强制跳回登录页
  if (!token && to.path !== '/login') {
    return next({ path: "/login" }) //放行跳转
  }

  // 防止重复登录
  if (token && to.path === '/login') {
    return next({ path: from.path ? from.path : '/' })
  }
  // 如果tohen，自动获取管理员信息，并存储在vuex当中
  if (token) {
    await store.dispatch("getInfo")
  }
  next()
})