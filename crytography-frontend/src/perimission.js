/**
 * @Description: 权限管理 路由拦截 直接静态路由表
 * @author qianlong
 * @date $
 */

import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'

const whiteList = ['/login']
const flag = false

router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.path) || flag) {
    next()
  } else {
    if (store.state.loginState) {
      console.log(store.state.loginState)
      next()
    } else {
      Message({
        type: 'warning',
        message: '未登入'
      })
      next('/login')
    }
  }
})
