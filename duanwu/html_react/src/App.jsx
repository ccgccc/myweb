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

import background from "./assets/images/background.jpg"
import duanwujie from "./assets/images/duanwujie.png"

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        // autoHeight="true"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="ani duanwujie" src={duanwujie} swiper-animate-effect="zoomIn"
            swiper-animate-duration="2s" swiper-animate-delay="0s" />
          <SlideBackground />
        </SwiperSlide>
        <SwiperSlide>
          <div class="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s"
            swiper-animate-delay="0s">--- 在这里祝大家端午安康！</div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="ani fontstyle" swiper-animate-effect="zoomIn" swiper-animate-duration="2s"
            swiper-animate-delay="0s">下个假期可是中秋了噢，再会！</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
