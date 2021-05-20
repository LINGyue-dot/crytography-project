<template>
  <div>
    <h2>image encrypt</h2>
    <input type="file" @change="changeFile" ref="file">
    <!--    <div style="display:flex">-->
    <!--      <div style="flex: 1"><img style="width: 400px;height: 400px;object-fit: contain"-->
    <!--                                :src="imageCode"-->
    <!--                                alt=""></div>-->
    <!--      <div style="flex: 1">-->
    <!--        <el-input type="textarea" rows="15" style="margin-top: 50px" v-model="imageCode "></el-input>-->
    <!--      </div>-->
    <!--    </div>-->

    <div style="display:flex;margin: 50px 0;">
      <div style="flex: 1"><img style="width: 400px;height: 400px;object-fit: contain"
                                :src="imageCode"
                                alt=""></div>
      <div style="flex: 1">
        <el-input type="textarea" rows="15" style="margin-top: 50px" v-model="imageCode "></el-input>
      </div>
    </div>

    <el-row style="margin:70px 0 30px 0">
      <el-col :span="1" style="height: 40px;line-height: 40px"> 密钥</el-col>
      <el-col :span="7">
        <el-input v-model="key" style="width: 200px"></el-input>
      </el-col>
      <el-col :span="10" v-if="encryptShow">
        <el-button @click="encrypt">加密</el-button>
      </el-col>
      <el-col :span="10" v-else>
        <el-input v-model="fileType" style="width: 100px;margin-right: 30px;"></el-input>
        <el-button @click="decrypte">解密</el-button>
      </el-col>
    </el-row>
    <a v-if="!encryptShow" download="加密后文件.dat" :href="imageCode">加密后文件下载 </a>
    <a v-else :download="'加密后文件.'+fileType" :href="imageCode">源文件下载</a>
  </div>
</template>

<script>
import tempStr from '@/utils/tempStr'
// import { encryptCaesar, decryptCaesar } from '@/utils/caesar'
import { encryptCaesarEx, decryptCaesarEx } from '@/utils/exchange'

export default {
  name: 'ImageEncrypt',
  data () {
    return {
      imageCode: tempStr.base64Str,
      afterImageCode: '',
      key: '',
      afterKey: '',
      fileType: 'dat',
      encryptShow: true

    }
  },
  methods: {
    toBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    },
    changeFile () {
      const file = this.$refs.file.files[0]
      this.toBase64(file).then(res => {
        this.imageCode = res
      }).catch(err => {
        console.log(err)
      })
    },
    encrypt () {
      this.imageCode = encryptCaesarEx(this.key, this.imageCode)
      console.log(this.imageCode)
      this.key = ''
      this.encryptShow = false
    },
    decrypte () {
      this.imageCode = decryptCaesarEx(this.key, this.imageCode)
      console.log(this.imageCode)
      this.encryptShow = true
    }
  }
  // mounted () {
  //   console.log('A'.charCodeAt())
  //   console.log(('Z').charCodeAt())
  //   console.log('a'.charCodeAt())
  //   console.log(('z').charCodeAt())
  // }
}
</script>

<style scoped>

</style>
