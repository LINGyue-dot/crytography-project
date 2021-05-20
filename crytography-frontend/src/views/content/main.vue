<template>
  <div>
    <caesar></caesar>
    <image-encrypt></image-encrypt>
    <div style="margin: 30px 0">
      <el-button @click="testToken">测试token</el-button>
    </div>
    <div>code:{{code}}</div>
    <div>message:{{message}}</div>

  </div>
</template>

<script>

import ImageEncrypt from './ImageEncrypt'
import Caesar from './Caesar'

import { testHello } from '@/api/login.js'

export default {
  components: {
    ImageEncrypt,
    Caesar
  },
  data () {
    return {
      code: '',
      message: ''
    }
  },
  methods: {
    testToken () {
      testHello().then(res => {
        this.code = res.data.code
        this.message = res.data.msg
      }).catch(err => {
        this.code = err.code
        this.message = err.msg
      })
    }

  }
}
</script>

<style scoped>

</style>
