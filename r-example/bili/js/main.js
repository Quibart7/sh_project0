$(function(){
    var hotby=$(".content .subnav").offset().top
    $(window).scroll(function(){
        // 最好封装成一个函数，可以在页面加载时就调用一次
        if ($(document).scrollTop()>=hotby) {
            $(".other").fadeIn()
        } else {
            $(".other").fadeOut()
        }
    })
    $(".other li").click(function(){
        var dist=$(".left").eq($(this).index()).offset().top
        $("body,html").stop().animate({
            scrollTop:dist
        })
    })
})