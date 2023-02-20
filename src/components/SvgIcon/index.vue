<template>
  <!-- 封装Icon -->
  <svg class="svg-icon"
       aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script setup>
import {computed} from 'vue'

const props = defineProps({
  className:String,
  color:String
})

const iconName = computed(()=>{
  return `#icon-${props.className}`
})
const color = computed(()=>{
  if(props.className){
    return `svg-icon icon-${props.className}`
  }else{
    return 'svg-icon'
  }
})

</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>