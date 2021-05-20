<template>
  <div class="login-container">
    <el-form :model="loginForm" :rules="loginRule" ref="loginForm" label-width="100px" class="login-form">
      <el-form-item label="account" prop="account">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>

      <el-form-item label="password" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="clickLogin" style="float: right">login</el-button>
  </div>
</template>

<script>

import { Rsa } from '@/utils/rsa'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      },

      loginRule: {
        account: {
          required: true
        },
        password: {
          required: true
        }
      }
    }
  },
  components: {},
  methods: {
    clickLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('userLogin', this.generateLoginBody())
        } else {
          return false
        }
      })
    },
    generateLoginBody () {
      const tempObj = {
        account: this.loginForm.account,
        password: Rsa(this.loginForm.password)
      }
      return tempObj
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
  height: 300px;
}

.login-form {
  /*width: 50%;*/
}

</style>
