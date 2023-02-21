<template>
  <div class="operation-wrapper">
    <el-switch v-model="motifVal"
               class="mt-2"
               style="margin-left: 24px"
               inline-prompt
               :active-icon="Moon"
               :inactive-icon="Sunny"
               @change="changeTheme()" />
    <div class="screen-icon"
         @click="changleFull()">
      <svg-icon v-if="isFull"
                className="exit-screen"></svg-icon>
      <svg-icon v-else
                className="full-screen"></svg-icon>
    </div>
  </div>
</template>
<script setup name="Operation">
import screenfull from 'screenfull'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
const motifVal = ref(false)
const isFull = ref(screenfull.isFullscreen)

onMounted(() => {
  initSceen()
  window.addEventListener('keydown', keydowns, true)
})

onBeforeUnmount(() => {
  offSceen()
})

/* ——切换主题-白天/黑暗模式—— */
const changeTheme = () => {
  console.log(motifVal.value)
}
/* end */

/* ——处理全屏功能—— */
const changleFull = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

const keydowns = (event) => {
  // 监听按键f11
  if (event.keyCode === 122) {
    event.returnValue = false
    changleFull() //触发全屏的按钮
  }
}

const changleIsFull = () => {
  isFull.value = screenfull.isFullscreen
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
/* end */
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