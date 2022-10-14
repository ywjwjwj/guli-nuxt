import request from '@/utils/request.js'

export default{
  //查询热门课程推荐
  getIndexData(){
    return request({
      url: '/course/getRandCourse',
      method: 'get'
    })
  }
  
  
}