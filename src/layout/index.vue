<template>
  <el-container class="layout-wrapper">
    <el-header>
      <div class="logo-wrapper">
        <div class="left-logo">
          <img src="/vite.svg"
               class="img-logo" />
          <div class="text">电商管理系统</div>
        </div>
        <div class="right-operation">
          <el-button type="primary">退出</el-button>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu active-text-color="#ffd04b"
                 background-color="#545c64"
                 class="el-menu-vertical-demo"
                 text-color="#fff"
                 router>
          <!-- 一级菜单 -->
          <template v-for="item in menu.list"
                    :key="item.id">
            <el-sub-menu :index="item.path">
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
          </template>

        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
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
const menu = reactive({
      list: []
    })
// let menuInfo = ref([])
onMounted(() => {
  getMenuInfo()
})
const getMenuInfo = async () => {
  let res = await menuList()
  menu.list = res.result
  // console.log(menuInfoList)
}
</script>
<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: #fff;
    .left-logo {
      display: flex;
      .img-logo {
        width: 60px;
        height: 40px;
      }
      .text {
        font-size: 20px;
        line-height: 40px;
      }
    }
  }
  /* 修改布局结构 */
  .el-header {
    background: rgb(55, 61, 65);
  }
  .el-aside {
    background: rgb(51, 55, 68);
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background: rgb(234, 237, 241);
  }
}
</style>