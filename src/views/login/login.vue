<script setup>
import { ref, reactive } from 'vue'
import request from '@/utils/request'
import { info } from '@/utils/token'
const formRef = ref(null)
const data = reactive({
  name: 'admin',
  password: '123456',
})
const rules = {
  name: [
    { required: true, message: '用户名不能为空' },
    {
      validator: (_, value) => {
        if (value.length > 5) {
          return Promise.reject('长度不可以大于5')
        }
        return Promise.resolve()
      },
    },
  ],
  password: [{ required: true, message: '密码不能为空' }],
}

const submit = () => {
  formRef.value?.validate().then(() => {
    request.post('/login', data).then(res => {
      info.value = res
    })
  })
}
</script>

<template>
  <div class="container">
    <n-card title="登录" style="width: 500px">
      <n-form ref="formRef" :model="data" :rules="rules">
        <n-form-item label="用户名" path="name">
          <n-input v-model:value="data.name" placeholder="请输入用户名"></n-input>
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input v-model:value="data.password" placeholder="请输入密码"></n-input>
        </n-form-item>
      </n-form>
      <n-button @click="submit" style="float: right" type="primary"> 现在登录 </n-button>
    </n-card>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
