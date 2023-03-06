<template>
<!-- 封装Table表格组件 -->
  <el-table>
    <!-- 是否显示全选 -->
    <template v-if="tableConfig.isSelect"></template>
    <!-- 是否显示序号 -->
    <template v-if="tableConfig.isIndex"></template>
  </el-table>
</template>

<script setup name="table">

</script>

<style lang="scss" scoped>

</style>