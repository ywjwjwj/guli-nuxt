<template>
  <div class="conbody">
    <div class="font-mono text-sm font-extralight leading-10" style="position: absolute;top: 120px;">
      &nbsp;&nbsp;&nbsp;&nbsp;2013 was a year of rapid development of online education. A large number of offline
      education institutions began
      to develop online education business, in recent years the online education market size is continuously expanding,
      and the size of users is also continuously increasing. Until 2020, there was a national outbreak of 'new
      coronavirus' and, under the influence of' 2019 new coronavirus', students could not return for school, resulting
      in a dramatic increase in teacher and student demand for online education, with the scale of online education
      skyrocketing in a short period of time. At the same time, due to the need for outbreak control and prevention, all
      major universities have actively implemented outbreak control measures to promote online teaching development, not
      only allowing more teachers and students to start using the online education platform, but also expanding the size
      of users in online education. This arguably represents a significant leap in comparison to the epidemic.
      <br />&nbsp;&nbsp;&nbsp;&nbsp; In the special period of new coronavirus outbreak control and prevention, the
      online education market has taken a
      leap forward. Through the development of online education platforms, it is possible to not only learn online
      anywhere at any time, but also to safeguard personal security under the outbreak. Currently, in most online
      educational settings, students must determine everything, from what course to what questions to address. On the
      contrary, an ideal learning system must build the learning process, from the initial modeling and coach oriented
      feedback, to gradually release the responsibility to the students. Without continuous student input and feedback,
      their talents, creativity, and efficiency may go unnoticed or negated, so we need to target different groups to
      divide the market at different levels and customize personalized online education platforms.
      <hr />&nbsp;&nbsp;&nbsp;&nbsp;Design of an online continuing education platform based on Vue Developed by JS and
      spring boot, the front end display interface mainly uses data view and element UI component libraries to achieve
      the interface effects, and the back end interface relies on Java implementation using MySQL and Redis databases
      for data storage.
    </div>
    <div class="flagTag font-extrabold tracking-tighter text-2xl
     font-mono">
      <div class="opacity-100 bg-white border-2 shadow-2xl" style="width: 320px; height: 70px;padding: 0 10px;">
        <div class="flagTagText">欢迎来到在线继续教育平台</div>
        <img src="~/assets/img/pig.png" class="m-0 imgicon" style="width: 50px;height: 50px;" alt="在线教育" key="img1">
      </div>
    </div>

  </div>
</template>

<script>
</script>

<style>
  .conbody {
    display: flex;
    /* justify-content: start; */
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .flagTag {
    position: relative;
    top: 120px;
    left: 37%;
    width: 100%;
    height: 460px;
    line-height: 64px;
  }

  .flagTagText {
    /* width: 220px; */
    float: left;
  }

  .imgicon {
    float: left;
    margin-top: 8px;
    margin-left: 10px;
    background-color: cornsilk;
    animation-name: example;
    animation-duration: 4s;
    border-radius: 32px;
    border: 2px solid darkgray;
    animation-iteration-count: infinite;
  }

  .imgicon:hover {
    animation-play-state: paused;
  }


  @keyframes example {
    0% {
      /* background-color: seagreen; */
      /* left: 0; */
      transform: rotateX(0deg);
      transform: rotateY(0deg);
      transform: rotateZ(0deg)
    }

    /*     15%  {background-color: palegreen;left: 100px;transform:rotateX(60deg);transform:rotateY(60deg);transform:rotateZ(60deg)}
      35%  {background-color: skyblue;left: 300px;transform:rotateX(120deg);transform:rotateY(120deg);transform:rotateZ(120deg)}
      */
    /*    15% {
       background-color: skyblue;
      left: 450px;
      transform: rotateX(180deg);
       transform: rotateY(180deg);
       transform: rotateZ(180deg)
    }
 */
    50% {
      /* background-color: rgba(0, 0, 255, 0.8); */
      /* left: 40%; */
      /* transform: rotateX(360deg); */
      transform: rotateX(0deg);
      transform: rotateY(180deg);
      /* transform: rotateZ(360deg) */
    }

    /*    35% {
      background-color: limegreen;
      left: 890px;
      transform: rotateX(360deg);
      transform: rotateY(360deg);
      transform: rotateZ(360deg);
    } */

    /* 95%  {background-color: skyblue;left: 1000px;transform:rotateX(280deg);transform:rotateY(280deg);transform:rotateZ(280deg)}
 */
    100% {
      /* background-color: rgba(0, 0, 255, 0); */
      /* left: 0px; */
      transform: rotateX(360deg);
      transform: rotateY(360deg);
      transform: rotateZ(360deg);
    }
  }
</style>
