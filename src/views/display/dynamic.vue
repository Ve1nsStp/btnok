<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const route = useRoute()
const base = '/display/dynamic/'
const pushPath = computed({
  get: () => (route.path === base + 'classify' ? 'classify' : 'list'),
  set: newVal => router.push(base + (newVal === 'classify' ? 'classify' : 'list')),
})
</script>
<template>
  <n-card title="动态管理">
    <n-tabs type="line" animated v-model:value="pushPath">
      <n-tab-pane name="classify" tab="动态分类"> </n-tab-pane>
      <n-tab-pane name="list" tab="动态列表"> </n-tab-pane>
    </n-tabs>
    <RouterView />
  </n-card>
</template>
<style scoped></style>
