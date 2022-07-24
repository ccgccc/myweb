<template>
    <div id="backgroundAnimation">
        <img class="ani corner" src="../assets/images/corner.png" swiper-animate-effect="slideInDown"
            swiper-animate-duration="2s" swiper-animate-delay="0s" />
        <img class="ani bamboo" src="../assets/images/bamboo.png" swiper-animate-effect="slideInDown"
            swiper-animate-duration="2s" swiper-animate-delay="0s" />
        <img class="ani moutain" src="../assets/images/moutain.png" swiper-animate-effect="slideInUp"
            swiper-animate-duration="2s" swiper-animate-delay="0s" />
        <img class="ani zongzi" src="../assets/images/zongzi.png" swiper-animate-effect="fadeInUp"
            swiper-animate-duration="2s" swiper-animate-delay="0.5s" />
        <img class="ani wine" src="../assets/images/wine.png" swiper-animate-effect="fadeInUp"
            swiper-animate-duration="2s" swiper-animate-delay="0s" />
        <img class="ani cloud" src="../assets/images/cloud.png" swiper-animate-effect="fadeIn"
            swiper-animate-duration="2s" swiper-animate-delay="0s" />
    </div>
</template>

<script>
import "../assets/css/duanwu.css";
import "../assets/css/animate.min.css";

export default {
    name: "SlideBackground"
}
</script>