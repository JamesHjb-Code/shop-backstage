<template>
  <el-menu active-text-color="#ffd04b"
           background-color="#545c64"
           class="el-menu-vertical-demo"
           :collapse="isCollapse"
           text-color="#fff"
           router>
    <!-- 一级菜单 -->
    <template v-for="item in menu.list"
              :key="item.id">
      <el-sub-menu :index="item.path"
                   v-if="item.children.length">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>{{item.authName}}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item :index="item.id+'-'+childItem.id"
                      v-for="childItem in item.children"
                      :key="childItem.id">
          <template #title>
            <i class="el-icon-menu"></i>
            <span>{{childItem.authName}}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="item.path"
                    v-else>
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          {{ item.authName }}
        </template>
      </el-menu-item>
    </template>

  </el-menu>
</template>
<script setup>
import { menuList } from '~/api/menu'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref, reactive, onMounted } from 'vue'
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
// 是否展开/收缩菜单
const isCollapse = ref(false)

onMounted(() => {
  getMenuInfo()
})
const getMenuInfo = async () => {
  console.log(123)
  let res = await menuList()
  menu.list = res.result
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>