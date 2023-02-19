<template>
  <div class="operation-wrapper">
    <el-switch v-model="motifVal" />
    <div class="screen-icon">
      <!-- <img src="~/assets/full-screen.svg"> -->
    </div>
  </div>
</template>
<script setup>
import screenfull from 'screenfull'
import { ref } from 'vue'
const motifVal = ref(null)
const isFull = ref(screenfull.isFullscreen)
const changleFull = ()=>{
  if(screenfull.isEnabled){
    screenfull.toggle()
  }
}
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
  .screen-icon{

  }
}
</style>