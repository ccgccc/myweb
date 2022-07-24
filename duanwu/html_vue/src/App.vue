<template>
  <swiper :direction="'vertical'" :mousewheelControl="true" :pagination="{ type: 'bullets', clickable: true }"
    :watchSlidesProgress="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange"
    @touchStart="onTouchStart" @transitionStart="onTransitionStart" @progress="onProgress" class="mySwiper">
    <swiper-slide>
      <img class="ani duanwujie" src="./assets/images/duanwujie.png" />
      <!-- <img :src="require('@/assets/images/duanwujie.png')" /> -->
      <img class="ani corner" src="./assets/images/corner.png" swiper-animate-effect="slideInDown"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
      <img class="ani bamboo" src="./assets/images/bamboo.png" swiper-animate-effect="slideInDown"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
      <img class="ani moutain" src="./assets/images/moutain.png" swiper-animate-effect="slideInUp"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
      <img class="ani zongzi" src="./assets/images/zongzi.png" swiper-animate-effect="fadeInUp"
        swiper-animate-duration="2s" swiper-animate-delay="0.5s" />
      <img class="ani wine" src="./assets/images/wine.png" swiper-animate-effect="fadeInUp" swiper-animate-duration="2s"
        swiper-animate-delay="0s" />
      <img class="ani cloud" src="./assets/images/cloud.png" swiper-animate-effect="fadeIn" swiper-animate-duration="2s"
        swiper-animate-delay="0s" />
    </swiper-slide>
    <swiper-slide>
      <div class="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s" swiper-animate-delay="0s">
        --- 在这里祝大家端午安康！</div>
    </swiper-slide>
    <swiper-slide>
      <div class="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s" swiper-animate-delay="0s">
        下个假期可是中秋了噢，再会！</div>
    </swiper-slide>
    <div id="bgm" class="" style="background-image: url('./assets/images/music.svg');" onclick="playStop()">
      <audio src="./assets/music/duanwu.mp3" id="bgmAudio" loop="loop"></audio>
    </div>
    <img src="./assets/images/arrow.png" style="width:8%; left:46%;bottom:2%;" id="array">
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./assets/css/duanwu.css";
import "./assets/css/animate.min.css";
// import "./style.css";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    var lastSlideIndex = 0; // 上一个操作的slide索引
    var isAniStarted = false;

    const onSwiper = (swiper) => {
      // console.log(swiper);
    };

    const onSlideChange = (swiper) => {
      console.log('slide change');
      // for (var i = 0; i < swiper.slides.length; i++) {
      //   // console.log("slideChange --- index: " + i);
      //   var es = swiper.slides[i].style;
      //   es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform
      //     = ''; // = 'translate3d(0, 0, 0) scaleY(1)';
      // }
    };

    const onTouchStart = (swiper) => {
      // console.log("touchMove");
      if (!isAniStarted) {
        // console.log("touchMove --- swipeDirection: " + swiper.swipeDirection);
        if (swiper.swipeDirection == 'next' && this.activeIndex < slidesNum - 1) {
          // console.log("slideAnimate --- this.activeIndex + 1: " + (this.activeIndex + 1));
          // slideAnimate(swiper, this.activeIndex + 1);
          lastSlideIndex = this.activeIndex;
          isAniStarted = true;
        } else if (swiper.swipeDirection == 'prev' && this.activeIndex > 0) {
          // console.log("slideAnimate --- this.activeIndex - 1: " + (this.activeIndex - 1));
          // slideAnimate(swiper, this.activeIndex - 1);
          lastSlideIndex = this.activeIndex;
          isAniStarted = true;
        }
      }
    };

    const onTransitionStart = (swiper) => {
      console.log("onTransitionStart");
      for (var i = 0; i < swiper.slides.length; i++) {
        // console.log("slideChange --- index: " + i);
        var es = swiper.slides[i].style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform
          = ''; // = 'translate3d(0, 0, 0) scaleY(1)';
      }
      lastSlideIndex = swiper.activeIndex;
    };

    const onProgress = (swiper, progress) => {
      var slidesNum = swiper.slides.length;
      var slide = swiper.slides[lastSlideIndex];
      var activeProgress = progress * (slidesNum - 1) - lastSlideIndex; //将progress转换到-1~1区间
      // 设置转换移动效果，保持向下翻页时当页位置不变
      var translate = activeProgress * swiper.height;
      // console.log("activeIndex: " + swiper.activeIndex, ", progress: " + progress + ", translate: " + translate);
      var es = slide.style;
      es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform
        = 'translate3d(0,' + translate + 'px,-' + translate + 'px)';
    };
    return {
      onSwiper,
      onSlideChange,
      onTouchStart,
      onTransitionStart,
      onProgress,
      modules: [Pagination],
    };
  },
};
</script>

<style>
html,
body {
  position: relative;
  height: 100%;
}

body {
  /* background: #eee; */
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-image: url("./assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  font-size: 18px;
  overflow: hidden;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.ani {
  position: absolute;
}

#array {
  position: absolute;
  z-index: 999;
  animation: start 1.5s infinite ease-in-out;
  -webkit-animation: start 1.5s infinite ease-in-out;
}
</style>