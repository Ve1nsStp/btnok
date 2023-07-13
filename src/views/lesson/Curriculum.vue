<script setup lang="jsx">
import { directiveHooks } from '@vueuse/core'

const title = ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
const hours = []
for (let i = 9; i < 20; i++) {
  const t = i >= 10 ? i : `0${i}`
  // 以半小时为一格
  hours.push({
    text: `${t}:00`,
    start: (i - 9) * 2 + 2,
    end: (i - 9) * 2 + 3,
  })
  hours.push({
    text: `${t}:30`,
    start: (i - 9) * 2 + 3,
    end: (i - 9) * 2 + 4,
  })
}
const blanks = []
blanks.length = 22 * 7

// 排课的数组
const classes = ref([])
let container = null
const add = index => {
  const row = Math.floor(index / 7)
  const col = index % 7
  if (!container) return
  // 元素的宽度，高度，所在的屏幕位置
  const conSize = container.getBoundingClientRect()
  const blockWidth = conSize.width / 8
  const blockHeight = 40
  const left = blockWidth * (col + 1)
  const top = blockHeight * (row + 2)
  classes.value.push({
    left,
    top,
    col,
    row,
    blockWidth,
    blockHeight,
    rows: 1,
    resetRows: 0,
  })
}
let current = { x: 0, y: 0 }
const mouseDown = (e, direction, c) => {
  e.preventDefault()
  current = { x: e.clientX, y: e.clientY }
}
</script>
<template>
  <div class="curriculum" :ref="el => (container = el)">
    <div v-for="text in title">{{ text }}</div>
    <div
      v-for="hour in hours"
      style="grid-column-start: 1; grid-column-end: 2"
      :style="{
        // 从第几行开始，到第几行结束
        gridRowStart: hour.start,
        gridRowEnd: hour.end,
      }">
      {{ hour.text }}
    </div>
    <div v-for="(_, index) in blanks" @click="add(index)"></div>
    <div
      v-for="(c, index) in classes"
      :key="index"
      class="info"
      :style="{
        left: c.left + 'px',
        top: c.top - c.resetRows * 40 + 'px',
        width: c.blockWidth - 2 + 'px',
        height: c.blockHeight * c.rows - 2 + 'px',
        border: 'none',
      }">
      <div class="info_content">
        <div class="top_bar"></div>
        <div class="bottom_bar"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.curriculum {
  position: relative;
  height: 960px;
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 80px repeat(22, 40px);
  border-top: 1px solid #000;
  border-left: 1px solid #000;

  & > * {
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
  }
  .info {
    position: absolute;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: white;
    .info_content {
      position: relative;
      width: 100%;
      height: 100%;
      .top_bar {
        background-color: #409eff;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 10px;
        cursor: grab;
      }
      .bottom_bar {
        background-color: #67c23a;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 10px;
        cursor: grab;
      }
    }
  }
}
</style>
