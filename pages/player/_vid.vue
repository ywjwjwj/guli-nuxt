<template>
  <div>

    <!-- 阿里云视频播放器样式 -->
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css" >
    <!-- 阿里云视频播放器脚本 -->
    <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js" />

    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>
<script>
import vod from '@/api/vod.js'
export default{

  layout: 'video',
  asyncData({params,error}){
    return vod.getPlayAuth(params.vid).then(response=>{
      return{
        playAuth: response.data.data.playAuth,
        vid: params.vid
      }
    }).catch(response=>{

    })
  },

  //页面渲染后调用
  mounted(){
    console.log(this.playAuth)
    if(this.playAuth==null){
      this.$message.error("获取凭证失败")
    }else{
      this.$message.success('加载成功')
    }
    new Aliplayer({
        id: 'J_prismPlayer',//和div 的 id对应
        vid: this.vid, // 视频id
        playauth: this.playAuth, // 播放凭证
        encryptType: '1', // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        width: '100%',
        height: '500px',
        // 以下可选设置
        cover: 'https://ywj-oss.oss-cn-shenzhen.aliyuncs.com/img/aaa3.png', // 封面
        qualitySort: 'asc', // 清晰度排序
        mediaType: 'video', // 返回音频还是视频
        autoplay: false, // 自动播放
        isLive: false, // 直播
        rePlay: false, // 循环播放
        preload: true,
        controlBarVisibility: 'hover', // 控制条的显示方式：鼠标悬停
        useH5Prism: true, // 播放器类型：html5
    }, function(player) {
        console.log('播放器创建成功')
    })
  },

}

</script>
