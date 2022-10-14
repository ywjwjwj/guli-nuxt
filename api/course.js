import request from '@/utils/request.js'

const couresFrontUrl="/eduservice/couresfront"
const eduSubjectUrl="/subject"

export default{

  //条件分页课程查询方法
  getFrontCourseList(page,limit,searchObj){
    return request({
      url: `${couresFrontUrl}/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分类方法
  getSubjectTree(){
    return request({
      url:`${eduSubjectUrl}/getSubjectTree`,
      method:'get',
    })
  },
  //课程详情
  getFrontCourseInfo(courseId){
    return request({
      url:`${couresFrontUrl}/getFrontCourseInfo/${courseId}`,
      method:'get',
    })
  }




}
