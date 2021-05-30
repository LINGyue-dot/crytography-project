import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
Vue.use(Vuex)

const { login } = require('@/api/login')

export default new Vuex.Store({
  state: {
    loginState: !!sessionStorage.getItem('token')
  },
  mutations: {
    CHANGE_LOGIN_STATE: state => {
      state.loginState = true
    }
  },
  actions: {
    userLogin ({ state, commit }, obj) {
      login(obj).then(res => {
        console.log(res)
        sessionStorage.setItem('token', res.data.data.token)
        commit('CHANGE_LOGIN_STATE')
        router.push('/content')
      })
    }
  },
  modules: {}
})
