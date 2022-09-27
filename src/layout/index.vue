<template>
    <el-container class="layout-wrapper">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script setup>
</script>
<Style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
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
</Style>