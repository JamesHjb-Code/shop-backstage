<template>
  <el-container class="layout-wrapper">
    <el-header>
      <div class="logo-wrapper">
        <div class="left-logo">
          <img src="/vite.svg"
               class="img-logo" />
          <div class="text">电商管理系统</div>
        </div>
        <div class="right-operation">
          <el-button type="primary">退出</el-button>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu active-text-color="#ffd04b"
                 background-color="#545c64"
                 class="el-menu-vertical-demo"
                 default-active="2"
                 text-color="#fff"
                 @open="handleOpen"
                 @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3"
                        disabled>
            <el-icon>
              <document />
            </el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { menuList } from '~/api/menu'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'

// 获取菜单列表
// const menuList = ref([])
</script>
<Style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  .logo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: #fff;
    .left-logo {
      display: flex;
      .img-logo {
        width: 60px;
        height: 40px;
      }
      .text {
        font-size: 20px;
        line-height: 40px;
      }
    }
  }
  /* 修改布局结构 */
  .el-header {
    background: rgb(55, 61, 65);
  }
  .el-aside {
    background: rgb(51, 55, 68);
    .el-menu {
      border-right: none;
    }
  }
  .el-main {
    background: rgb(234, 237, 241);
  }
}
</Style>