/**
 * @Description:
 * @author qianlong
 * @date $
 */
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://120.76.57.148:8081/api/v1',
  timeout: 2000
})

service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

export default service
