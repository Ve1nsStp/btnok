<script setup lang="jsx">
import { Home, LayersOutline, LibraryOutline } from '@vicons/ionicons5'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
const menuOptions = [
  {
    label: '首页',
    key: '/',
    icon: () => (
      <NIcon>
        <Home />
      </NIcon>
    ),
  },
  {
    label: '展示营销',
    key: '/display',
    children: [
      {
        label: '动态管理',
        key: '/display/dynamic',
        icon: () => (
          <NIcon>
            <LayersOutline />
          </NIcon>
        ),
      },
      {
        label: '关于学校',
        key: '/display/about',
        icon: () => (
          <NIcon>
            <LibraryOutline />
          </NIcon>
        ),
      },
    ],
  },
  {
    label: '课程管理',
    key: '/lesson',
    children: [
      {
        label: '课程列表',
        key: '/lesson/curriculum',
        icon: () => (
          <NIcon>
            <LayersOutline />
          </NIcon>
        ),
      },
    ],
  },
]
const selected = ref('/home')
const router = useRouter()
router.beforeEach(({ path }) => {
  // 路由改变
  if (path !== selected.value) {
    selected.value = path
  }
})
watch(selected, newPath => {
  // 选中改变
  router.push(newPath)
})
const expandedKeys = ref([])
watch(selected, newPath => {
  // 选中改变
  const arr = newPath.split('/')
  const result = []
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr.slice(0, i + 1).join('/'))
  }
  expandedKeys.value = result
})
</script>
<template>
  <div>
    <n-menu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      v-model:value="selected"
      v-model:expanded-keys="expandedKeys" />
  </div>
</template>
<style scoped></style>
