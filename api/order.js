import request from '@/utils/request.js'

const tOrderUrl="/order"
const tPaylog="/payLog"

export default{
  // 生成订单
  createOrder(courseId){
    return request({
      url:`${tOrderUrl}/createOrder/${courseId}`,
      method:'POST',
    })
  },
  // 根据订单id查询订单信息
  getOrderInfo(orderId){
    return request({
      url: `${tOrderUrl}/getOrderInfo/${orderId}`,
      method: 'GET',
    })
  },
  // 创建支付二维码
  createNative(orderNo){
    return request({
      url: `${tPaylog}/createNative/${orderNo}`,
      method: 'GET',
    })
  },
  queryOrderStatus(orderNo){
    return request({
      url: `${tPaylog}/queryPayStatus/${orderNo}`,
      method: 'GET',
    })
  }




}
