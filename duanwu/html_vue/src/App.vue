<template>
  <div id="myapp">
    <swiper :direction="'vertical'" :mousewheelControl="true" :pagination="{ type: 'bullets', clickable: true }"
      :watchSlidesProgress="true" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange"
      @touchStart="onTouchStart" @touchMove="onTouchMove" @transitionStart="onTransitionStart" @progress="onProgress"
      class="mySwiper">
      <swiper-slide>
        <img class="ani duanwujie" src="@/assets/images/duanwujie.png" swiper-animate-effect="zoomIn"
          swiper-animate-duration="2s" swiper-animate-delay="0s" />
        <slide-background></slide-background>
      </swiper-slide>
      <swiper-slide>
        <div class="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s"
          swiper-animate-delay="0s">
          --- 在这里祝大家端午安康！</div>
        <slide-background></slide-background>
      </swiper-slide>
      <swiper-slide>
        <div class="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s"
          swiper-animate-delay="0s">
          下个假期可是中秋了噢，再会！</div>
        <slide-background></slide-background>
      </swiper-slide>
    </swiper>
    <div id="bgm">
      <audio src="/assets/music/duanwu.mp3" id="bgmAudio" loop="loop"></audio>
    </div>
    <img src="./assets/images/arrow.png" style="width:8%; left:46%;bottom:2%;" id="array">
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SlideBackground from "./components/SlideBackground.vue";
import swiperAnimatation from './assets/js/myswiper.animate.js';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./assets/css/duanwu.css";
import "./assets/css/animate.min.css";

// import required modules
import { Pagination } from "swiper";

export default {
  el: "#myapp",
  components: {
    Swiper,
    SwiperSlide,
    SlideBackground
  },
  setup() {
    var lastSlideIndex = 0; // 上一个操作的slide索引
    var isAniStarted = false;

    const onSwiper = (swiper) => {
      // console.log(swiper);
      // swiper动画
      // 隐藏动画元素 
      swiperAnimatation.swiperAnimateCache(swiper);
      // 初始化完成开始动画
      swiperAnimatation.swiperAnimate(swiper);
    };

    const onSlideChange = (swiper) => {
      // console.log('slide change');
      // for (var i = 0; i < swiper.slides.length; i++) {
      //   // console.log("slideChange --- index: " + i);
      //   var es = swiper.slides[i].style;
      //   es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform
      //     = ''; // = 'translate3d(0, 0, 0) scaleY(1)';
      // }
    };

    const onTouchStart = (swiper) => {
      console.log("~~~~~ touchStart");
    }

    const onTouchMove = (swiper) => {
      console.log("touchMove");
      var slidesNum = swiper.slides.length;
      if (!isAniStarted) {
        // console.log("touchMove --- swipeDirection: " + swiper.swipeDirection);
        if (swiper.swipeDirection == 'next' && swiper.activeIndex < slidesNum - 1) {
          // console.log("slideAnimate --- swiper.activeIndex + 1: " + (swiper.activeIndex + 1));
          swiperAnimatation.slideAnimate(swiper, swiper.activeIndex + 1);
          lastSlideIndex = swiper.activeIndex;
          isAniStarted = true;
        } else if (swiper.swipeDirection == 'prev' && swiper.activeIndex > 0) {
          // console.log("slideAnimate --- swiper.activeIndex - 1: " + (swiper.activeIndex - 1));
          swiperAnimatation.slideAnimate(swiper, swiper.activeIndex - 1);
          lastSlideIndex = swiper.activeIndex;
          isAniStarted = true;
        }
      }
    };

    const onTransitionStart = (swiper) => {
      for (var i = 0; i < swiper.slides.length; i++) {
        var es = swiper.slides[i].style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform
          = ''; // = 'translate3d(0, 0, 0) scaleY(1)';
      }
      console.log("onTransitionStart --- swipeDirection: " + swiper.swipeDirection + ", activeIndex: " + swiper.activeIndex + ", lastSlideIndex: " + lastSlideIndex);
      var slidesNum = swiper.slides.length;
      if (swiper.activeIndex == lastSlideIndex) {
        if (swiper.swipeDirection == 'next' && swiper.activeIndex < slidesNum - 1) {
          console.log("clearSlideAnimate --- swiper.activeIndex + 1: " + (swiper.activeIndex + 1));
          swiperAnimatation.clearSlideAnimate(swiper, swiper.activeIndex + 1);
        } else if (swiper.swipeDirection == 'prev' && swiper.activeIndex > 0) {
          console.log("clearSlideAnimate --- swiper.activeIndex - 1: " + (swiper.activeIndex - 1));
          swiperAnimatation.clearSlideAnimate(swiper, swiper.activeIndex - 1);
        }
      } else {
        swiperAnimatation.clearSlideAnimate(swiper, lastSlideIndex);
      }
      lastSlideIndex = swiper.activeIndex;
      isAniStarted = false;
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
      onTouchMove,
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

#bgm {
  background-image: url('./assets/images/music.svg');
}

#array {
  position: absolute;
  z-index: 999;
  animation: start 1.5s infinite ease-in-out;
  -webkit-animation: start 1.5s infinite ease-in-out;
}
</style>