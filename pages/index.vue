<template>

  <div>
    <!-- <div class="text-5xl text-red-800">ok</div> -->
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <el-carousel height="480px"  class="swiper-slide" style="background: #040B1B;">
          <el-carousel-item v-for="banner in bannerList" :key="banner.id">
            <a target="_self" href="/">
              <img style="width: 1876.8px;height: 480px;" :src="banner.imageUrl" :alt="banner.title">
            </a>
          </el-carousel-item>
        </el-carousel>
<!--        <div v-for="banner in bannerList" :key="banner.id" class="swiper-slide" style="background: #040B1B;">
          <a target="_self" href="/">
            <img style="width: 1876.8px;height: 480px;" :src="banner.imageUrl" :alt="banner.title">
          </a>
        </div> -->
      </div>
      <!-- <div class="swiper-pagination swiper-pagination-white"></div> -->
<!--      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
    </div>
    <!-- 幻灯片 结束 -->

    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div class="courDiv">
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程推荐</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in courseList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img style="width: auto;height: 150px;" :src="course.cover" class="img-responsive"
                        :alt="course.title">
                      <div class="cc-mask">
                        <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <a :href="'/course/'+course.id" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span class="fr jgTag bg-green" v-if="Number(course.price)===0">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">9634人学习</i>
                        |
                        <i class="c-999 f-fA">9634评论</i>
                      </span>
                    </section>
                  </div>
                </li>

              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/course" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div class="teaDiv">
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">明星讲师</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teacherList" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name">
                        <img style="width: 100px;height: 100px;margin: 0 auto;" :alt="teacher.name"
                          :src="teacher.avatar">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name" class="fsize18 c-666">{{teacher.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{teacher.career}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p class="c-999 f-fA">{{teacher.intro}}</p>
                    </div>
                  </section>
                </li>

              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/teacher" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>


  </div>
</template>

<script>
  import banner from '@/api/banner.js'
  import index from '@/api/index.js'

  export default {
    data() {
      return {
        swiperOption: {
          //配置分页
          pagination: {
            el: '.swiper-pagination' //分页的dom节点
          },
          //配置导航
          navigation: {
            nextEl: '.swiper-button-next', //下一页dom节点
            prevEl: '.swiper-button-prev' //前一页dom节点
          }
        },
        bannerList: [{
          id: '1',
          imageUrl: '/img/banner1.jpg',
          title: '1'
        }, {
          id: '2',
          imageUrl: '/img/banner2.png',
          title: '2'
        }, {
          id: '3',
          imageUrl: '/img/banner3.png',
          title: '3'
        }],
        courseList: [],
        teacherList: []
      }
    },
    created() {
      //调用查询banner方法
      this.getBannerList()
      //查询热门课程和名师
      this.getHotCourseTeacher()
    },
    methods: {
      //查询banner数据
      getBannerList() {
        banner.getListBanner()
          .then(response => {
            this.bannerList = response.data.data.list
          })
      },

      //查询热门课程和名师
      getHotCourseTeacher() {
        index.getIndexData()
          .then(response => {
            this.courseList = response.data.data.courseList
            this.teacherList = response.data.data.teacherList
          })
      }

    }
  }
</script>

<style scope>
  #aCoursesList{
    position: relative;
  }
  .container{
    position: relative;
  }
  .courDiv{
    position:relative;
  }
  .teaDiv{
    position: relative;
    margin-top: 698px;
    margin-bottom: 100%;
  }
</style>
