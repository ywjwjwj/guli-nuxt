import request from '@/utils/request.js';

export default{
   //登录
   submitLogin(userInfo){
     return request({
       url:`/member/login`,
       method:'post',
       data: userInfo
     })
   },

   //根据token获取用户信息
   getMemberInfo(){
     return request({
       url:`/member/getMemberInfo`,
       method:'get',
     })
   },

   upInfo(userInfo){
     return request({
       url:`/member/upInfo`,
       method:'PUT',
       data: userInfo
     })
   },

   upInfoMobile(userInfo){
     return request({
       url:`/member/upInfoMobile`,
       method:'PUT',
       data: userInfo
     })
   },


}
