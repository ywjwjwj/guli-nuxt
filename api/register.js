import request from '/utils/request.js';

export default{
  //根据手机号发送验证码
  sendCode(phone){
    return request({
      url:`/edumsm/msm/sand/${phone}`,
      method:'get'
    })
  },

  //注册的方法
  register(formItem){
    return request({
      url:`/member/register`,
      method:'post',
      data: formItem
    })
  },



}
