<template>
  <div>

  </div>
</template>

<script>
import { login } from '@/api/login'

export default {
  name: 'login',
  data () {
    return {}
  },
  components: {},
  mounted () {
    login({
      code: 'qianlong',
      username: 'qianlong',
      password: '123123'
    }).then(res => console.log(res)).catch(err => console.log(err))
  }
}
</script>

<style scoped>

</style>
