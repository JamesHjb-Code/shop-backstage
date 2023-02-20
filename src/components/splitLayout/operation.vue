<template>
  <div class="operation-wrapper">
    <el-switch v-model="motifVal" />
    <div class="screen-icon"
         @click="changleFull()">
      <img class="icon"
           v-if="isFull"
           src="../../assets/exit-screen.svg">
      <img class="icon"
           v-else
           src="../../assets/full-screen.svg">
    </div>
  </div>
</template>
<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeUnmount } from 'vue'
const motifVal = ref(null)
const isFull = ref(screenfull.isFullscreen)

onMounted(() => {
  initSceen()
  window.addEventListener('keydown', keydowns, true)
})

onBeforeUnmount(() => {
  offSceen()
})

const changleFull = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

const changleIsFull = () => {
  isFull.value = screenfull.isFullscreen
}
const keydowns = (event) => {
  // 监听按键f11
  if (event.keyCode === 122) {
    event.returnValue = false
    changleFull() //触发全屏的按钮
  }
}
const initSceen = () => {
  if (screenfull.isEnabled) {
    screenfull.on('change', changleIsFull)
  }
}
const offSceen = () => {
  if (screenfull.isEnabled) {
    screenfull.off('change', changleIsFull)
  }
}
</script>
<style lang="scss" scoped>
.operation-wrapper {
  width: 80px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  .screen-icon {
    display: flex;
    .icon {
      width: 25px;
      height: 25px;
    }
  }
}
</style>