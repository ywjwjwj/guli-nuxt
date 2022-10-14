<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header" style="box-shadow: 5px 0px 5px 3px #bcbcbc;">
      <section class="container">
        <div style="display: flex; justify-content: flex-start;width: 100%;">
          <div style="display: flex; justify-content: flex-start;margin-left: -30px;width: 220px;">
            <img src="~/assets/img/pig.png" class="m-6 img" alt="在线教育" key="img1">
            <div class=" text-2xl logodiv" style="line-height: 94px;">
              EDU-Online
            </div>
          </div>
          <div class="h-r-nsl">
            <ul class="nav">
              <router-link to="/" tag="li" active-class="current" exact>
                <a>首页</a>
              </router-link>
              <router-link to="/course" tag="li" active-class="current">
                <a>课程</a>
              </router-link>
              <router-link to="/teacher" tag="li" active-class="current">
                <a>名师</a>
              </router-link>
              <router-link to="/qa" tag="li" active-class="current">
                <a>关于我们</a>
              </router-link>
            </ul>
          </div>
          <!-- / nav -->

          <aside class="h-r-search" style="width: 200px;padding-top: 26px;">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input type="text" placeholder="输入课程名称" name="queryCourse.courseName" value>
                <button type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>

          <ul class="h-r-login">
            <li v-if="!loginInfo.id" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li v-if="loginInfo.id" id="is-login-one" class="mr10 h-r-user">
              <router-link to="/user">
                <a id="headerMsgCountId" href="#" title="个人资料">
                  <img :src="loginInfo.avatar" width="30" height="30" class="vam picImg" alt>
                </a>
              </router-link>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
              <router-link to="/user">
                <a href="#" title>
                  <span id="userName" class="vam disIb">{{ loginInfo.nickname }}</span>
                </a>
              </router-link>
              <a href="javascript:void(0);" title="退出" @click="logout()" class="ml5">退出</a>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->
    <div style="height: 100px;"></div>
    
    <nuxt />

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.baidu.com/" title="在线继续教育学院" target="_blank">在线继续教育学院</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>|
                <span>服务热线：123456789</span>
                <span>Email：qq.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2022在线继续教育学院</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt>
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
  import '~/assets/css/reset.css'
  import '~/assets/css/theme.css'
  import '~/assets/css/global.css'
  import '~/assets/css/web.css'
  import '~/assets/css/base.css'
  import '~/assets/css/activity_tab.css'
  import '~/assets/css/bottom_rec.css'
  import '~/assets/css/nice_select.css'
  import '~/assets/css/order.css'
  import '~/assets/css/swiper-3.3.1.min.css'
  import "~/assets/css/pages-weixinpay.css"

  import cookie from 'js-cookie'
  import loginApi from '@/api/login.js'


  export default {
    data() {
      return {
        token: '',
        loginInfo: {
          id: '',
          age: '',
          avatar: '',
          mobile: '',
          nickname: '',
          sex: ''
        },

      }
    },
    created() {
      // 进入页面 获取路径中的token
      this.token = this.$route.query.token
      // console.log(this.token)
      if (this.token) {
        //如果有token
        this.wxLogin()
      }
      this.showInfo()
    },
    methods: {
      //微信登录 显示
      wxLogin() {
        // 有前端拦截器功能: 如果cookie有token，将得到的token存入header
        //所以要获取token值存入cookie , 调用后端接口获取用户信息
        cookie.set('toekn', this.token, {
          domain: 'localhost'
        })
        cookie.set('member', '', {
          domain: 'localhost'
        })
        //登录成功根据token获取用户信息
        loginApi.getMemberInfo().then(response => {
          this.loginInfo = response.data.data.userInfo
          //将用户信息记录cookie
          cookie.set('member', this.loginInfo, {
            domain: 'localhost'
          })
        })
      },
      //创建方法 从cookie 获取用户信息
      showInfo() {
        //从cookie获取信息
        var userStr = cookie.get('member')
        // console.log("userStr用户信息:"+userStr)
        //字符串转化成json对象
        if (userStr) {
          this.loginInfo = JSON.parse(userStr)
        }
      },

      logout() {
        //debugger
        cookie.set('member', "", {
          domain: 'localhost'
        })
        cookie.set('toekn', "", {
          domain: 'localhost'
        })

        //跳转页面
        window.location.href = "/"
      }


    }
  };
</script>

<style scope>
  #header {
    height: 95px;
    width: 100%;
  }

  #container {
    width: 100%;
  }

  /*  .logot:hover {
    border: 2px solid #f5f5f5;
  } */

  img {
    max-height: 100%;
    max-width: 100%;
    width: 50px;
    height: 50px;
    z-index: 999;
  }

  .logot {}

  .logodiv {
    float: left;
  }

  #logo {
    top: -100px;
    height: 95px;
  }

  .logodiv {
    width: 180px;
  }

  .nav {
    height: 95px;
  }

  .nav li {
    margin-right: 3px;
    height: auto;
    width: auto;
  }

  .nav a {
    height: 80px;
    line-height: 70px;
    padding-top: 20px;
  }

  .nav li a {
    padding-top: 10px;
  }

  /*  .nav li:hover {
    border: 2px solid #f5f5f5;
  } */

  .h-r-login {
    margin: 0 40px;
    padding-top: 20px;
  }

  .h-r-login img {
    margin-top: 10px;
  }

  .h-r-nsl {
    margin-right: 40px;
  }
</style>
