// 更多产品设置
$(document).ready(function() {
    $(".li-pro").hover(function() {
        $(".more-product").show()
    }, function() {
        $(".more-product").hide()
    })
})

// 导航栏开启和关闭
$(document).ready(function(e) {
    $(".menu-span-1").click(function() {
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display', 'block');
        $(".span-recommend").css('display', 'none');
        $(".span-navigation").css('display', 'none');
        $(".span-video").css('display', 'none');
        $(".span-shopping").css('display', 'none');
        $(".menu-span-2").removeClass("lbtm-span-click");
        $(".menu-span-3").removeClass("lbtm-span-click");
        $(".menu-span-4").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-2").click(function() {
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display', 'none');
        $(".span-recommend").css('display', 'block');
        $(".span-navigation").css('display', 'none');
        $(".span-video").css('display', 'none');
        $(".span-shopping").css('display', 'none');
        $(".menu-span-1").removeClass("lbtm-span-click");
        $(".menu-span-3").removeClass("lbtm-span-click");
        $(".menu-span-4").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-3").click(function() {
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display', 'none');
        $(".span-recommend").css('display', 'none');
        $(".span-navigation").css('display', 'block');
        $(".span-video").css('display', 'none');
        $(".span-shopping").css('display', 'none');
        $(".menu-span-1").removeClass("lbtm-span-click");
        $(".menu-span-2").removeClass("lbtm-span-click");
        $(".menu-span-4").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-4").click(function() {
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display', 'none');
        $(".span-recommend").css('display', 'none');
        $(".span-navigation").css('display', 'none');
        $(".span-video").css('display', 'block');
        $(".span-shopping").css('display', 'none');
        $(".menu-span-1").removeClass("lbtm-span-click");
        $(".menu-span-2").removeClass("lbtm-span-click");
        $(".menu-span-3").removeClass("lbtm-span-click");
        $(".menu-span-5").removeClass("lbtm-span-click");
    });
    $(".menu-span-5").click(function() {
        $(this).addClass("lbtm-span-click");
        $(".span-attention").css('display', 'none');
        $(".span-recommend").css('display', 'none');
        $(".span-navigation").css('display', 'none');
        $(".span-video").css('display', 'none');
        $(".span-shopping").css('display', 'block');
        $(".menu-span-1").removeClass("lbtm-span-click")
        $(".menu-span-2").removeClass("lbtm-span-click")
        $(".menu-span-3").removeClass("lbtm-span-click")
        $(".menu-span-4").removeClass("lbtm-span-click")
    });
})
