<template>
  <swiper :direction="'vertical'" :pagination="{ clickable: true, }" :modules="modules" class="mySwiper">
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
    return {
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