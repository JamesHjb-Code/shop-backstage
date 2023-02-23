<template>
  <!-- 封装Icon -->
  <svg :class="svgClass"
       aria-hidden="true"
       v-on="$attrs"
       >
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script setup name="SvgIcon">
import { ref, computed } from 'vue'

// props:className：icon名称
const props = defineProps({
  className: String,
})

const iconName = computed(() => {
  return `#icon-${props.className}`
})

const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon icon-${props.className}`
  } else {
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