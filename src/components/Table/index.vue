<template>
  <div class="form-wrapper">
    <slot name="form"></slot>
  </div>
  <!-- 封装Table表格组件 -->
  <el-table :data="dataList" style="width:100%;">
    <!-- 是否显示全选 -->
    <template v-if="isShowSelect"></template>
    <!-- 是否显示序号 -->
    <template v-if="isShowIndex"></template>
    <!-- 展示列和行数据 -->
    <template v-for="item in propList"
              :key="item.prop">
      <el-table-column v-bind="item"
                       show-overflow-tooltip>
        <!-- 是否有传slotName时的插槽 -->
        <template #default="scope"
                  v-if="item.slotName">
          <slot :name="item.slotName"
                :row="scope.row"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="footer-wrapper">
    <slot name="footer"></slot>
  </div>
</template>

<script setup name="table">
import {defineProps} from 'vue'
const props = defineProps({
  isShowSelect: Boolean,
  isShowIndex:Boolean,
  dataList:Object,
  propList:Object,
})
</script>

<style lang="scss" scoped>
</style>