<template>
  <div class="operation-wrapper">
    <el-switch v-model="motifVal" />
    <el-icon class="icon">
      <FullScreen />
    </el-icon>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const motifVal = ref(null)
</script>
<style lang="scss" scoped>
.operation-wrapper {
  width:5vw;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>