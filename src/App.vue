<script setup>
import { RouterView } from 'vue-router'
import login from './views/login/login.vue'
import { zhCN, dateZhCN } from 'naive-ui'
import { info } from '@/utils/token'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <div v-if="info.user && info.token">
      <RouterView />
    </div>
    <login v-else />
  </n-config-provider>
</template>

<style scoped></style>
