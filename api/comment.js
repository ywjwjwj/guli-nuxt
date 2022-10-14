import request from '@/utils/request'

const baseUrl="/eduservice/commentfront"

export default {

  getPageList(page, limit, courseId) {
    return request({
      url: `${baseUrl}/getCommentList/${page}/${limit}`,
      method: 'get',
      params: {courseId}
    })
  },
  addComment(comment) {
    return request({
      url: `${baseUrl}/auth/save`,
      method: 'post',
      data: comment
    })
  }
}
