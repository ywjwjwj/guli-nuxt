import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:8001', // api的base_url
  timeout: 20000 // 请求超时时间
})

//request拦截器
service.interceptors.request.use(
  config=>{
    if(cookie.get('toekn')){
      //存放cookie到Header
      config.headers['token']=cookie.get('toekn')
    }
    return config
  },
  err=>{
    return Promise.reject(err);
  }

)

// http response 拦截器
service.interceptors.response.use(
  response => {
    //debugger
    if (response.data.code == 28004) {
        console.log("response.data.resultCode是28004")
        //未登录 返回 错误代码-1 清除ticket信息并跳转到登录页面
        //debugger
        window.location.href="/login"
        return
    }else{
      if (response.data.code !== 20000) {
        //25000：订单支付中，不做任何提示(我取消了这个效果，为了在页面展示支付状态)
        //放行25000 , 但是不做页面提示
        if(response.data.code == 25000){
          return response;
        }
        //页面错误提示
        // if(response.data.code != 25000) {
          Message({
            message: response.data.message || 'error',
            type: 'error',
            duration: 5 * 1000
          })
        // }
      } else {
        return response;
      }
    }
  },
  error => {
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});


export default service
