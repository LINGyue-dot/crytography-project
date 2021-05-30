<template>
  <div>
    <caesar></caesar>
    <image-encrypt></image-encrypt>
    <div style="margin:30px 0;">
      此时token：
      <el-input v-model="token"></el-input>
    </div>
    <div style="margin: 30px 0">
      <el-button @click="testToken">测试token</el-button>
    </div>
    <div>code:{{ code }}</div>
    <div>message:{{ message }}</div>

  </div>
</template>

<script>

import ImageEncrypt from './ImageEncrypt'
import Caesar from './Caesar'

import { testHello } from '@/api/login.js'
import { Message } from 'element-ui'

export default {
  components: {
    ImageEncrypt,
    Caesar
  },
  data () {
    return {
      code: '',
      message: '',
      token: ''
    }
  },
  methods: {
    testToken () {
      testHello(this.token).then(res => {
        this.code = res.data.code
        this.message = res.data.msg
      }).catch(err => {
        Message({
          type: 'error',
          message: 'token验证错误',
          duration: 3 * 1000
        })
        console.log(err)
        this.code = err.code
        this.message = err.msg
      })
    }

  },
  mounted () {
    this.token = sessionStorage.getItem('token')
  }
}
</script>

<style scoped>

</style>
