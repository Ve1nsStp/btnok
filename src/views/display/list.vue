<script setup>
import { ref } from 'vue'
const value = ref('1')
const options = [
  {
    label: '饱和校区',
    value: '1',
  },
  {
    label: '成都校区',
    value: '2',
  },
]
</script>
<template>
  <n-grid>
    <n-gi :span="2"><n-space>校区:</n-space></n-gi>
    <n-gi :span="7">
      <n-select v-model:value="value" :options="options" />
    </n-gi>
  </n-grid>
</template>
<style scoped></style>
