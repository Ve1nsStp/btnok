<script setup>
import { RouterView } from 'vue-router'
import SideBar from './sideBar.vue'
</script>
<template>
  <n-layout style="height: 100vh">
    <n-layout-header
      style="
        height: 64px;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      "
      bordered>
      <h2>校务系统</h2>
      <n-button type="info"> QUIT </n-button>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 10px" has-sider>
      <n-layout-sider content-style="padding: 24px;" :native-scrollbar="false" bordered>
        <SideBar />
      </n-layout-sider>
      <n-layout content-style="padding: 20px;" :native-scrollbar="false">
        <RouterView />
      </n-layout>
    </n-layout>
  </n-layout>
</template>
<style scoped lang="scss"></style>
