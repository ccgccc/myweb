import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./assets/css/duanwu.css";
import "./assets/css/animate.min.css";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

// import my components & functions
import SlideBackground from "./components/SlideBackground.jsx";
import swiperAnimatation from './assets/js/myswiper.animate.js';

import musicSvg from "./assets/images/arrow.png"
import duanwujie from "./assets/images/duanwujie.png"

// import audio
import bgmSrcAudio from "./assets/music/duanwu.mp3";
var bgmAudio = new Audio(bgmSrcAudio);

var isStartedOnce = false;
var lastSlideIndex = 0; // 上一个操作的slide索引
var isAniStarted = false;

class App extends React.Component {
  onSwiper = (swiper) => {
    // console.log(swiper);
    // swiper动画
    // 隐藏动画元素
    swiperAnimatation.swiperAnimateCache(swiper);
    // 初始化完成开始动画
    swiperAnimatation.swiperAnimate(swiper);
  };

  onTouchStart = (swiper) => {
    // console.log("~~~~~ touchStart");
    var bgmButton = document.getElementById("bgm");
    if (!isStartedOnce & bgmAudio.paused) {
      // console.log("firstinteraction play");
      var promise = bgmAudio.play();
      promise.then(_ => {
        bgmButton.className = "playing"
        isStartedOnce = true;
      })
    }
  }

  onTouchMove = (swiper) => {
    // console.log("touchMove");
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

  onTransitionStart = (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      var es = swiper.slides[i].style;
      es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform
        = ''; // = 'translate3d(0, 0, 0) scaleY(1)';
    }
    // console.log("onTransitionStart --- swipeDirection: " + swiper.swipeDirection + ", activeIndex: " + swiper.activeIndex + ", lastSlideIndex: " + lastSlideIndex);
    var slidesNum = swiper.slides.length;
    if (swiper.activeIndex == lastSlideIndex) {
      if (swiper.swipeDirection == 'next' && swiper.activeIndex < slidesNum - 1) {
        // console.log("clearSlideAnimate --- swiper.activeIndex + 1: " + (swiper.activeIndex + 1));
        swiperAnimatation.clearSlideAnimate(swiper, swiper.activeIndex + 1);
      } else if (swiper.swipeDirection == 'prev' && swiper.activeIndex > 0) {
        // console.log("clearSlideAnimate --- swiper.activeIndex - 1: " + (swiper.activeIndex - 1));
        swiperAnimatation.clearSlideAnimate(swiper, swiper.activeIndex - 1);
      }
    } else {
      swiperAnimatation.clearSlideAnimate(swiper, lastSlideIndex);
    }
    lastSlideIndex = swiper.activeIndex;
    isAniStarted = false;
  };

  onProgress = (swiper, progress) => {
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

  playStop = () => {
    var bgmButton = document.getElementById("bgm");
    // console.log('click', bgmAudio);
    if (bgmAudio.paused) {
      bgmButton.className = "playing"
      bgmAudio.play();
    } else {
      bgmButton.className = ""
      bgmAudio.pause();
    }
  }

  render() {
    return (
      <>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={this.onSwiper}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTransitionStart={this.onTransitionStart}
          onProgress={this.onProgress}
        >
          <SwiperSlide>
            <img className="ani duanwujie" src={duanwujie} swiper-animate-effect="zoomIn"
              swiper-animate-duration="2s" swiper-animate-delay="0s" />
            <SlideBackground />
          </SwiperSlide>
          <SwiperSlide>
            <div className="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s"
              swiper-animate-delay="0s">--- 在这里祝大家端午安康！</div>
            <SlideBackground />
          </SwiperSlide>
          <SwiperSlide>
            <div className="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s"
              swiper-animate-delay="0s">下个假期可是中秋了噢，再会！</div>
            <SlideBackground />
          </SwiperSlide>
        </Swiper>
        <div id="bgm" onClick={this.playStop}></div>
        <img src={musicSvg} style={{ width: "8%", left: "46%", bottom: "2%" }} id="array" />
      </>)
  }
}

export default App
