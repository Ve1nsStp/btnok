<script setup>
import { Add, HammerSharp } from '@vicons/ionicons5'
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
  <div class="container">
    <div class="header">
      <n-form
        ref="formRef"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
        size="medium"
        :style="{
          maxWidth: '360px',
        }">
        <n-form-item label="校区:">
          <n-select v-model:value="value" :options="options" />
        </n-form-item>
      </n-form>
      <n-grid style="display: flex; justify-content: space-between">
        <n-gi :span="3">动态分类数目<span>5</span>个</n-gi>
        <n-gi :span="5">
          <n-space>
            <n-button type="primary"
              ><n-icon><Add /></n-icon>添加分类</n-button
            >
            <n-button
              ><n-icon><HammerSharp /></n-icon>删除</n-button
            >
          </n-space>
        </n-gi>
      </n-grid>
    </div>
    <div class="mainbox"></div>
  </div>
</template>
<style scoped></style>
