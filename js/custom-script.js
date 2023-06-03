
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
    $("ul.main_menu > li > a").on("click", function(){
        $(this).parent("li").addClass("current-menu-item");
        $(this).parent().siblings('li').removeClass('current-menu-item');
        $(".toggle_menu").removeClass("active");
        $(".main-header").removeClass("sticky_header");
        $(".navigation").removeClass("open");
    });
    $("ul.main_menu > li > ul > li > a").on("click", function(){
        $(this).parent("li").addClass("current-menu-item");
        $(this).parent().siblings('li').removeClass('current-menu-item');
        $(".toggle_menu").removeClass("active");
        $(".main-header").removeClass("sticky_header");
        $(".navigation").removeClass("open");
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

$(window).on("load", function(){
    $("ul.main_menu a, a[rel='m_PageScroll2id']").mPageScroll2id({
        highlightSelector:"ul.main_menu a",
        scrollSpeed: 2000,
        offset: 104,
    });
    $("ul.aside_links > li > a").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        let height = $('.main-header').outerHeight(true);  
        let scrolltoHome = window.location.href = "./index.html" + target; 
        $.mPageScroll2id("scrollTo", scrolltoHome, {
            offset: {
                top: height,
            }
        });
    });    
});
$(document).ready(function(){
    $("ul.main_menu a[href*='by-the-numbers.html'], ul.ipc-vision-links li a").on('click', function(e){
        let target = $(this).attr('href');
        let height = $('.main-header').outerHeight(true);  
        $.mPageScroll2id("scrollTo", target, {
            offset: height
        });
    });
});