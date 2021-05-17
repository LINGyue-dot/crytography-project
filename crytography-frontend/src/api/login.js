/**
 * @Description:
 * @author qianlong
 * @date $
 */
import request from '@/utils/request.js'

export function login(obj) {
  return request({
    url: '/register',
    method: 'post',
    data: {
      ...obj
    }
  })
}
