
var $ = jQuery.noConflict();
$(window).on("load scroll", function(){
    let scroll = $(this).scrollTop();
    scroll > 4 ? $(".main-header").addClass("fixed_header") : $(".main-header").removeClass("fixed_header");
});
$(document).ready(function(){
    $(".toggle_menu").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".main-header").toggleClass("sticky_header");
        $(".navigation").toggleClass("open");
    });
    $("ul.main_menu > li > a").on("click", function(e){
        e.preventDefault();
        $(this).parent("li").addClass("current-menu-item");
        $(this).parent().siblings('li').removeClass('current-menu-item');
        // $(".toggle_menu").removeClass("active");
        // $(".main-header").removeClass("sticky_header");
        // $(".navigation").removeClass("open");
        $(this).parent().siblings("li").find("ul").slideUp();
        $(this).siblings("ul").slideToggle();
    });
    let level2 = $("ul.main_menu li > ul > li.menu-item-has-children > a");
    level2.on("click", function(){
        $(this).parent().siblings("li.menu-item-has-children").find("ul").slideUp();
        $(this).siblings("ul").slideToggle();
    });
    $(".accordion-header").on("click", function(e){
        e.preventDefault();
        $(this).parent().toggleClass("active");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().siblings().find(".accordion-header").removeClass("open");
        $(this).toggleClass("open");
        $(this).siblings(".accordion-content").slideToggle(500);
        $(this).parent().siblings().find(".accordion-content").slideUp(500);
    });

    if($(window).width() >= 768){
        $(".team-member-list").each(function() {
            let $this = $(this);
            let descItem = $this.find(".team-member-desc");
            $this.hover(function() {
                descItem.slideDown("slow");
            }, function() {
                descItem.slideUp("slow");
            });
        });
    }
    if($(window).width() <= 767){
        $(".team-member-pos").on("click", function() {
            $(this).children(".team-member-arrow").addClass("active");
            $(this).parents().siblings().find(".team-member-desc").slideUp();
            $(this).siblings(".team-member-desc").slideToggle();
        });
    }
});

$(document).ready(function(){
    let headerHeight = $(".main-header").outerHeight(true);
    $("a[href*=#]:not([href=#])").click(function(event){
        event.preventDefault();
        let myattr = $(this).attr("href");
        let target = $(myattr);
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top - headerHeight
            }, 2000);
            return false;
        } else {
            window.location.href = "index.html" + myattr;
        }
    });
});
