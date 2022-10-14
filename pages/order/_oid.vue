<template>
  <div class="Page Confirm">
    <div class="Title">
      <h1 class="fl f18">订单确认</h1>
      <i class="el-icon-goods" style="float: right;width: 100px; height: auto;"></i>
      <div class="clear"></div>
    </div>
    <form name="flowForm" id="flowForm" method="post" action="">
      <table class="GoodList">
        <tbody>
        <tr>
          <th class="name">商品</th>
          <th class=" bg-blue-400">价格</th>
          <th class="priceNew text-blue-400 text-lg font-semibold">最终价格</th>
        </tr>
        </tbody>
        <tbody>
        <!-- <tr>
          <td colspan="3" class="Title red f18 fb"><p>限时折扣</p></td>
        </tr> -->
        <tr>
          <td colspan="3" class="teacher">课程发布人：{{order.teacherName}}</td>
        </tr>
        <tr class="good">
          <td class="name First">
            <a target="_blank" :href="'http://localhost:3000/course/'+order.courseId">
              <img :src="order.courseCover"></a>
            <div class="goodInfo">
              <input type="hidden" class="ids ids_14502" value="14502">
              <a target="_blank" :href="'http://localhost:3000/course/'+ order.courseId">{{order.courseTitle}}</a>
            </div>
          </td>
          <td class="price text-blue-400">
            <p>￥<strong>{{order.totalFee}}</strong></p>
            <!-- <span class="discName red">限时8折</span> -->
          </td>
          <td class="text-blue-400 priceNew Last">￥<strong>{{order.totalFee}}</strong></td>
        </tr>
        <tr>
          <td class="Billing tr" colspan="3">
            <div class="tr">
              <p>共 <strong class="text-blue-400">1</strong> 件商品，合计<span
                class="text-blue-400 f20">￥<strong>{{order.totalFee}}</strong></span></p>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="Finish">
        <div class="fr" id="AgreeDiv">

          <label for="Agree"><p class="on"><input type="checkbox" checked="checked">我已阅读并同意<a href="javascript:" target="_blank">《购买协议》</a></p></label>
        </div>
        <div class="clear"></div>
        <div class="Main fl">
          <div class="fl">
            <a :href="'/course/'+order.courseId">返回课程详情页</a>
          </div>
          <div class="fr">
            <p>共 <strong class="text-blue-400">1</strong> 件商品，合计<span class="text-blue-400 f20">￥<strong
              id="AllPrice">{{order.totalFee}}</strong></span></p>
          </div>
        </div>
        <input name="score" value="0" type="hidden" id="usedScore">
        <button class="fr bg-blue-700" type="button" id="submitPay" @click="toPay()">去支付</button>
        <div class="clear"></div>
      </div>
    </form>
  </div>
</template>
<script>
import orderApi from '@/api/order.js'

export default{

  asyncData({params,error}){
    return orderApi.getOrderInfo(params.oid).then(response=>{
      return {
        order:response.data.data.item
      }
    })
  },
  created() {

  },
  methods:{
    //支付
    toPay(){
      this.$router.push({path:'/pay/'+this.order.orderNo})
    },
  }

}
</script>
