<template>
  <el-container class="layout-wrapper">
    <el-aside :style="{width:$store.state.menuWidth}">
      <menu-list></menu-list>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup name="layout">
// 局部注册-导入组件可以直接在模板即可，不需要注册。
import MenuList from '~/components/splitLayout/Menu.vue'
import Header from '~/components/splitLayout/Header.vue'
</script>
<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  .el-aside {
    transition: all 0.2s;
  }
}
</style>