// ccg format & annotate
//本插件由www.swiper.com.cn提供
//版本1.03
function swiperAnimateCache(a) {
    // 初始化时调用将所有动画放入缓存中
    for (j = 0; j < a.slides.length; j++) {
        for (allBoxes = a.slides[j].querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
            allBoxes[i].attributes["style"] ?
                allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value) :
                allBoxes[i].setAttribute("swiper-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
        }
    }
}

function swiperAnimate(a) {
    clearSwiperAnimate(a);
    // 查询当前活跃页面的动画
    var b = a.slides[a.activeIndex].querySelectorAll(".ani");
    for (i = 0; i < b.length; i++) {
        // 设置visible
        b[i].style.visibility = "visible",
            // 设置effect到className
            effect = b[i].attributes["swiper-animate-effect"] ? b[i].attributes["swiper-animate-effect"].value : "",
            b[i].className = b[i].className + "  " + effect + " " + "animated",
            // 获取原style值
            style = b[i].attributes["style"].value,
            // 拼接duration
            duration = b[i].attributes["swiper-animate-duration"] ? b[i].attributes["swiper-animate-duration"].value : "",
            duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"),
            // 拼接delay
            delay = b[i].attributes["swiper-animate-delay"] ? b[i].attributes["swiper-animate-delay"].value : "",
            delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"),
            // 设置新style值
            b[i].setAttribute("style", style)
    }
}

function clearSwiperAnimate(a) {
    for (j = 0; j < a.slides.length; j++)
        for (allBoxes = a.slides[j].querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
            // 若有缓存则将缓存style设置到style上
            allBoxes[i].attributes["swiper-animate-style-cache"] &&
                allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value),
                // 设置hidden
                allBoxes[i].style.visibility = "hidden",
                // 清除className的effect
                allBoxes[i].className = allBoxes[i].className.replace("animated", " "),
                allBoxes[i].attributes["swiper-animate-effect"] &&
                (effect = allBoxes[i].attributes["swiper-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
        }
}