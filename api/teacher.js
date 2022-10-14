import request from '@/utils/request.js';

export default{
   //分页查询讲师
   getTeacherFrontList(page,limit){
     return request({
       url:`/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
       method:'post'
     })
   },

   //讲师详情的方法
   getTeacherFrontInfo(teacherId){
     return request({
       url:`/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
       method:'get'
     })
   }




}
