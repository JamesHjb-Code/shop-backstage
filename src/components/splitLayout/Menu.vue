<template>
  <el-menu class="el-menu-vertical-demo"
           :default-active="defaultActive"
           :collapse="isCollapse"
           text-color="#fff"
           :collapse-transition="false"
           unique-opened
           router>
    <!-- 一级菜单 -->
    <template v-for="item in menu.list"
              :key="item.id">
      <el-sub-menu :index="'/'+item.path"
                   v-if="item.children.length">
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{item.authName}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item :index="'/'+childItem.path"
                      v-for="childItem in item.children"
                      :key="childItem.id">
          <template #title>
            <span>{{childItem.authName}}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="'/'+item.path"
                    v-else>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>
          {{ item.authName }}
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script setup name="Menu">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { menuList } from '~/api/menu'
import { ref, reactive, onMounted, computed } from 'vue'

const store = useStore()
const router = useRouter()
// 获取菜单列表
/* 
  1.ref和reactive都是定义响应式数据，ref参数可以接受基本数据类型也可以接受引用类型，而reactive只能接收对象或数组等复杂类型
  2.当ref使用时.value来访问值
  3.ref创建的数据返回类型为RefImpl ，而RefImpl._value是一个 reactive 代理的原始对象
*/
// 菜单列表
const menu = reactive({
  list: [],
})
// 默认值是当前的路由
const defaultActive = ref(router.currentRoute.value.path)
// 是否展开/收缩菜单
const isCollapse = computed(() => {
  if (store.state.menuWidth === '200px') {
    return false
  } else {
    return true
  }
})

onMounted(() => {
  getMenuInfo()
})
const getMenuInfo = async () => {
  let res = await menuList()
  menu.list = res.result
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>