<template>
  <div class="user-name">
    欢迎您，{{$store.state.userInfo.username}}
  </div>
  <!-- 个人信息 -->
  <el-dropdown>
    <div class="circle-pic">
      <img class="pic"
           :src="$store.state.userInfo.avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup name="UserInfo">

</script>

<style lang="scss" scoped>
.user-name{
  margin-right:20px;
  font-size:15px;
}
.circle-pic {
  cursor: pointer;
  .pic {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
}
</style>