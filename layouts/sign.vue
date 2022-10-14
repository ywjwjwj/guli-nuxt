<template>
  <div class="sign">
    <!--标题-->
    <router-link to="/" title="返回主页">
      <div class="logo" style="margin-top: -5%;padding: 0 20px;box-shadow: 0px 0px 5px 3px #bcbcbc;">
        <div style="display: flex; justify-content: flex-start;margin-left: -30px;width: 220px;">
          <img src="~/assets/img/pig.png" class="m-6 img" alt="在线教育" key="img1">
          <div class=" text-2xl logodiv" style="line-height: 94px;">
            EDU-Online
          </div>
        </div>
      </div>
    </router-link>
    <!--表单-->
    <nuxt />
  </div>
</template>
