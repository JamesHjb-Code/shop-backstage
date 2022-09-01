import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/home/index.vue'
import Login from '~/views/login/index.vue'
import NotFound from '~/views/error/404.vue'
const routes = [
  {
    path: '/',
    name: "Home",
    component: Home  // 首页
  },
  {
    path: '/login',
    name: "Login",
    component: Login  // 首页
  },

  {
    path: '/:pathMatch(.*)*',    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    name: 'NotFound',
    component: NotFound
  },
]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes
})
export default router