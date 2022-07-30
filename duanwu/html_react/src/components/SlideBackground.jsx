import React, { useRef, useState } from "react";

import "../assets/css/duanwu.css";
import "../assets/css/animate.min.css";

import corner from "../assets/images/corner.png"
import bamboo from "../assets/images/bamboo.png"
import moutain from "../assets/images/moutain.png"
import zongzi from "../assets/images/zongzi.png"
import wine from "../assets/images/wine.png"
import cloud from "../assets/images/cloud.png"

export default function SlideBackgound() {
  return (
    <>
      <img className="ani corner" src={corner} swiper-animate-effect="slideInDown"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
      <img className="ani bamboo" src={bamboo} swiper-animate-effect="slideInDown"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
      <img className="ani moutain" src={moutain} swiper-animate-effect="slideInUp"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
      <img className="ani zongzi" src={zongzi} swiper-animate-effect="fadeInUp"
        swiper-animate-duration="2s" swiper-animate-delay="0.5s" />
      <img className="ani wine" src={wine} swiper-animate-effect="fadeInUp"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
      <img className="ani cloud" src={cloud} swiper-animate-effect="fadeIn"
        swiper-animate-duration="2s" swiper-animate-delay="0s" />
    </>
  );
}
