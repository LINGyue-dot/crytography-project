/**
 * @Description:
 * @author qianlong
 * @date $
 */
import request from '@/utils/request.js'

export function login (obj) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      ...obj
    }
  })
}

export function testHello (token) {
  return request({
    url: '/hello',
    method: 'get',
    params: {
      token: token
    }
  })
}
