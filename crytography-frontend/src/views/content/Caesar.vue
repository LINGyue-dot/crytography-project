<template>
  <div style="margin-bottom: 50px">
    <h2>Caesar</h2>
    <el-row style="margin-bottom: 30px">
      <el-col :span="1" style="height: 40px;line-height: 40px"> 密钥</el-col>
      <el-col :span="23">
        <el-input v-model="key" style="width: 200px"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 30px">
      <el-col :span="1" style="height: 40px;line-height: 40px">明文</el-col>
      <el-col :span="23">
        <el-input v-model="plainText" style="width: 400px" @blur="encrypt"></el-input>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:  30px">
      <el-col :span="1" style="height: 40px;line-hxeight: 40px"> 密文</el-col>
      <el-col :span="23">
        <el-input v-model="cipherText" style="width: 400px" disabled></el-input>
      </el-col>
    </el-row>
    <el-row style="margin:70px 0 30px 0">
      <el-col :span="1" style="height: 40px;line-height: 40px"> 密钥</el-col>
      <el-col :span="7">
        <el-input v-model="afterKey" style="width: 200px"></el-input>
      </el-col>
      <el-col :span="10">
        <el-button @click="decrypte">解密</el-button>
      </el-col>
    </el-row>

    <el-row style="margin-bottom: 30px">
      <el-col :span="1" style="height: 40px;line-height: 40px">明文</el-col>
      <el-col :span="19">
        <el-input v-model="afterPlainText" style="width: 400px" disabled></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { encryptCaesar, decryptCaesar } from '@/utils/caesar'
// import { encryptCaesarEx, decryptCaesarEx } from '@/utils/exchange'

export default {
  name: 'Caesar',
  data () {
    return {
      key: '',
      plainText: '',
      cipherText: '',
      afterKey: '',
      afterPlainText: ''
    }
  },
  components: {},
  methods: {
    encrypt () {
      this.cipherText = encryptCaesar(this.key, this.plainText)
    },
    decrypte () {
      this.afterPlainText = decryptCaesar(this.afterKey, this.cipherText)
    }
  }
}
</script>

<style scoped>

</style>
