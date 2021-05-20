/**
 * @Description:
 * @author qianlong
 * @date $
 */
import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 100000
})

/**
 * 请求拦截
 */
service.interceptors.request.use(config => {
  console.log('---------------------------------')
  console.log(sessionStorage.getItem('X-Token'))
  if (sessionStorage.getItem('X-Token')) {
    config.headers['X-Token'] = sessionStorage.getItem('X-Token')
  }
  // console.log(config.headers['X'])
  return config
}, err => {
  return Promise.reject(err)
})

/**
 * 响应拦截
 */
service.interceptors.response.use(response => {
  console.log('30--------', response)
  const res = response.data

  if (parseInt(res.code) !== 200) {
    Message({
      type: 'error',
      message: res.msg,
      duration: 3 * 1000
    })
  }
  return response
}, err => {
  return Promise.reject(err)
})

export default service
