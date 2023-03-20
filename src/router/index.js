import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '~/views/pages/login/index.vue'
import NotFound from '~/views/error/404.vue'
const routes = [
  {
    path:'/',
    name:"Admin",
    redirect:'/home',
    component:()=>import('~/layout/index.vue'),
    children:[
      {
        path:'/home',
        name:'home',
        component:()=>import('~/views/pages/home/index.vue'),
        meta:{
          title:'首页',
        }
      },
      {
        path:'/goods-list',
        name:'GoodsList',
        component:()=>import('~/views/pages/goods/goods-list.vue'),
        meta:{
          title:'商品列表',
        }
      },
      {
        path:'/goods-type',
        name:'GoodsType',
        component:()=>import('~/views/pages/goods/goods-type.vue'),
        meta:{
          title:'商品分类',
        }
      },{
        path:'/user-list',
        name:'UserList',
        component:()=>import('~/views/pages/user/user-list.vue'),
        meta:{
          title:'用户列表',
        }
      }
    ]
  },
  {
    path: '/login',
    name: "Login",
    component: Login  // 登录
  },
  {
    path: '/:pathMatch(.*)*',    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下,在没有找到页面的情况下就触发。
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