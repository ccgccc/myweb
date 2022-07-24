// ccg version
// 本插件由www.swiper.com.cn提供
// 版本1.03
var swiperAnimatation = {
    swiperAnimateCache(swiper) {
        // 初始化时调用将所有动画放入缓存中
        for (var j = 0; j < swiper.slides.length; j++) {
            var allBoxes = swiper.slides[j].querySelectorAll(".ani");
            for (var i = 0; i < allBoxes.length; i++) {
                allBoxes[i].attributes["style"] ?
                    allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value) :
                    allBoxes[i].setAttribute("swiper-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
            }
        }
    },

    swiperAnimate(swiper) {
        this.clearSwiperAnimate(swiper);
        // 查询当前活跃页面的动画
        this.slideAnimate(swiper, swiper.activeIndex);
    },

    slideAnimate(swiper, slideIndex) {
        this.clearSlideAnimate(swiper, slideIndex);
        // 查询当前活跃页面的动画
        var anis = swiper.slides[slideIndex].querySelectorAll(".ani");
        for (var i = 0; i < anis.length; i++) {
            // 设置visible
            anis[i].style.visibility = "visible";
            // 设置effect到className
            var effect = anis[i].attributes["swiper-animate-effect"] ? anis[i].attributes["swiper-animate-effect"].value : "";
            anis[i].className = anis[i].className + "  " + effect + " " + "animated";
            // 获取原style值
            var style = anis[i].attributes["style"].value;
            // 拼接duration
            var duration = anis[i].attributes["swiper-animate-duration"] ? anis[i].attributes["swiper-animate-duration"].value : "";
            duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";");
            // 拼接delay
            var delay = anis[i].attributes["swiper-animate-delay"] ? anis[i].attributes["swiper-animate-delay"].value : "";
            delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";");
            // 设置新style值
            anis[i].setAttribute("style", style);
        }
    },

    clearSwiperAnimate(swiper) {
        for (var j = 0; j < swiper.slides.length; j++) {
            this.clearSlideAnimate(swiper, j)
        }
    },

    clearSlideAnimate(swiper, slideIndex) {
        var allBoxes = swiper.slides[slideIndex].querySelectorAll(".ani");
        for (var i = 0; i < allBoxes.length; i++) {
            // 若有缓存则将缓存style设置到style上
            allBoxes[i].attributes["swiper-animate-style-cache"] &&
                allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value);
            // 设置hidden
            allBoxes[i].style.visibility = "hidden";
            // 清除className的effect
            allBoxes[i].className = allBoxes[i].className.replace("animated", " ");
            if (allBoxes[i].attributes["swiper-animate-effect"]) {
                var effect = allBoxes[i].attributes["swiper-animate-effect"].value;
                allBoxes[i].className = allBoxes[i].className.replace(effect, "");
            }
        }
    }
}

export default swiperAnimatation