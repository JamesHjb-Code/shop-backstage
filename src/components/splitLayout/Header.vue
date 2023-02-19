<template>
  <div class="header-wrapper">
    <div class="operation">
      <el-icon @click="$store.commit('SET_MenuWidth')">
        <Fold v-if="$store.state.menuWidth==='200px'" />
        <Expand v-else />
      </el-icon>
    </div>
    <div class="left-logo">
      <img src="/vite.svg"
           class="img-logo" />
      <div class="text">电商管理系统</div>
    </div>
    <div class="right-operation">
      <user-info></user-info>
    </div>
  </div>
</template>
<script setup>
import UserInfo from '~/components/splitLayout/UserInfo.vue'
</script>
<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  .operation {
    font-size: 30px;
    cursor: pointer;
  }
  .left-logo {
    margin-left: 10px;
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
  .right-operation {
    display: flex;
    align-items: center;
    position: absolute;
    right: 30px;
  }
}
</style>