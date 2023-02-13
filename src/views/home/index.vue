<template>
  <div>
  后台首页
  {{$store.state.userInfo}}
  </div>
</template>
<script setup>
import { menuList } from '~/api/menu'
import {onMounted} from 'vue'
onMounted(()=>{
  getMenuInfo()
})
const getMenuInfo = async ()=>{
  let res = await menuList()
  console.log(res)
}
</script>