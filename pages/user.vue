<template>
  <div>
    <el-container>
      <el-header>个人信息修改</el-header>
      <el-container>
        <el-aside width="200px">
          <div>
            <el-avatar :src="loginInfo.avatar"></el-avatar>
          </div>
          <p>用户名:{{loginInfo.nickname}}</p>
        </el-aside>
        <el-main>
          <el-descriptions class="margin-top" title="个人信息列表" :column="3" :size="size" border>
            <template slot="extra">
              <el-button type="primary" size="small" @click="reInfo">刷新信息</el-button>
            </template>
            <template slot="extra">
              <el-button title="微信登录时可用" type="primary" size="small" :disabled="loginInfo.openid==null"
                @click="openMob">修改绑定手机</el-button>
            </template>
            <template slot="extra">
              <el-button type="success" size="small" @click="upInfo">修改信息</el-button>
            </template>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户名
              </template>
              <el-input v-model="loginInfo.nickname" placeholder="用户名"></el-input>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号（微信登录时可修改）
              </template>
              <el-input v-model="loginInfo.mobile" :disabled="loginInfo.openid==null" placeholder="请输入绑定手机号"></el-input>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                性别
              </template>
              <div v-if="loginInfo.sex=='1'">女</div>
              <div v-if="loginInfo.sex=='2'">男</div>
              <div v-if="loginInfo.sex!='1'&&loginInfo.sex!='2'">未知</div>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
              </template>
              <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                注册时间
              </template>
              {{loginInfo.gmtCreate}}
            </el-descriptions-item>
          </el-descriptions>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog
      title="提示"
      :visible.sync="dialogFormVisible"
      width="30%">
      <el-input v-model="loginInfo.password" placeholder="请输入密码"></el-input>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="upInfoMobile">确 定</el-button>
    </el-dialog>

  </div>
</template>

<script>
  import cookie from 'js-cookie'
  import loginApi from '@/api/login.js'
  export default {
    data() {
      return {
        loginInfo: {
          id: '',
          openid: '',
          password: '',
          age: '',
          avatar: '',
          mobile: '',
          nickname: '',
          sex: '',
          gmtCreate: ''
        },
        dialogFormVisible:false
      }
    },
    created() {
      this.showInfo()
    },
    methods: {
      openMob(){
        this.loginInfo.password = ''
        this.dialogFormVisible=true
      },
      upInfo() {
        loginApi.upInfo(this.loginInfo).then(response => {
          this.$message({
            message: response.data.message,
            type: 'success',
            duration: 2 * 1000
          });
          this.reInfo()
        })



      },
      upInfoMobile() {
        this.dialogFormVisible = false
          loginApi.upInfoMobile(this.loginInfo).then(response => {
            this.$message({
              message: response.data.message,
              type: 'success',
              duration: 2 * 1000
            });
            this.reInfo()
          })
      },
      reInfo() {
        //登录成功根据token获取用户信息
        loginApi.getMemberInfo().then(response => {
          this.loginInfo = response.data.data.userInfo
          //将用户信息记录cookie
          cookie.set('member', this.loginInfo, {
            domain: 'localhost'
          })
          this.showInfo()
        })
      },
      showInfo() {
        //从cookie获取信息
        var userStr = cookie.get('member')
        // console.log("userStr用户信息:"+userStr)
        //字符串转化成json对象
        if (userStr) {
          this.loginInfo = JSON.parse(userStr)
          this.loginInfo.gmtCreate = this.dateTrans(this.loginInfo.gmtCreate)
        }
      },
      dateTrans(date) {
        let _date = new Date(parseInt(date));
        let y = _date.getFullYear();
        let m = _date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = _date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = _date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let minute = _date.getMinutes();
        let second = _date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        // console.log( y + '-' + m + '-' + d + ' ' + '　' + h + ':' + minute + ':' + second)
        let dates = y + '-' + m + '-' + d;

        return dates;
      }
    }
  }
</script>

<style>
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
