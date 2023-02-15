<template>
  <el-container class="layout-wrapper">
    <el-aside width="200px">
      <menu-list></menu-list>
    </el-aside>
    <el-container>
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
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { createApp } from 'vue'
import MenuList from '~/components/Menu.vue'
const app = createApp({})
app.component({
  MenuList,
})
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
  }
  .el-main {
    background: rgb(234, 237, 241);
  }
}
</style>