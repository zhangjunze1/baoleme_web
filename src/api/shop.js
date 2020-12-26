// eslint-disable-next-line no-unused-vars
import request from '../utils/request'

/**
 * 后面每次请求都要携带token
 * @returns {*}
 */
export const findShopList = (current, size) => {
  return request({
    url: '/Shop/common/findShopList',
    method: 'get',
    param: {
      current,
      size
    }
  })
}
