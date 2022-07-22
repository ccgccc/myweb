// ccg version
// 本插件由www.swiper.com.cn提供
// 版本1.03
function swiperAnimateCache(swiper) {
    // 初始化时调用将所有动画放入缓存中
    for (j = 0; j < swiper.slides.length; j++) {
        for (allBoxes = swiper.slides[j].querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
            allBoxes[i].attributes["style"] ?
                allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value) :
                allBoxes[i].setAttribute("swiper-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
        }
    }
}

function swiperAnimate(swiper) {
    clearSwiperAnimate(swiper);
    // 查询当前活跃页面的动画
    slideAnimate(swiper, swiper.activeIndex);
}

function slideAnimate(swiper, slideIndex) {
    clearSlideAnimate(swiper, slideIndex);
    // 查询当前活跃页面的动画
    var anis = swiper.slides[slideIndex].querySelectorAll(".ani");
    for (i = 0; i < anis.length; i++) {
        // 设置visible
        anis[i].style.visibility = "visible";
        // 设置effect到className
        effect = anis[i].attributes["swiper-animate-effect"] ? anis[i].attributes["swiper-animate-effect"].value : "";
        anis[i].className = anis[i].className + "  " + effect + " " + "animated";
        // 获取原style值
        style = anis[i].attributes["style"].value;
        // 拼接duration
        duration = anis[i].attributes["swiper-animate-duration"] ? anis[i].attributes["swiper-animate-duration"].value : "";
        duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";");
        // 拼接delay
        delay = anis[i].attributes["swiper-animate-delay"] ? anis[i].attributes["swiper-animate-delay"].value : "";
        delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";");
        // 设置新style值
        anis[i].setAttribute("style", style);
    }
}

function clearSwiperAnimate(swiper) {
    for (j = 0; j < swiper.slides.length; j++) {
        clearSlideAnimate(swiper, j)
    }
}

function clearSlideAnimate(swiper, slideIndex) {
    for (allBoxes = swiper.slides[slideIndex].querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
        // 若有缓存则将缓存style设置到style上
        allBoxes[i].attributes["swiper-animate-style-cache"] &&
            allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value);
        // 设置hidden
        allBoxes[i].style.visibility = "hidden";
        // 清除className的effect
        allBoxes[i].className = allBoxes[i].className.replace("animated", " ");
        allBoxes[i].attributes["swiper-animate-effect"] &&
            (effect = allBoxes[i].attributes["swiper-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, ""))
    }
}