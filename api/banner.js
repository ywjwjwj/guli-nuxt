import request from '@/utils/request'

export default {

  //查询前两条banner
  getListBanner() {
    return request({
      url: `/banner/getAllBanner`,
      method: 'get'
    })
  },


}
