
jQuery(window).on("load scroll", function(){
    let scroll = jQuery(this).scrollTop();
    scroll > 4 ? jQuery(".main-header").addClass("fixed_header") : jQuery(".main-header").removeClass("fixed_header");
});

jQuery(document).ready(function(){
    jQuery(".toggle_menu").on("click", function(e){
        e.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery(".main-header").toggleClass("sticky_header");
        jQuery(".navigation").toggleClass("open");
    });
    jQuery("ul.main_menu > li > a").on("click", function(e){
        e.preventDefault();
        jQuery(this).parent("li").addClass("current-menu-item");
        jQuery(this).parent().siblings('li').removeClass('current-menu-item');
        jQuery(".toggle_menu").removeClass("active");
        jQuery(".main-header").removeClass("sticky_header");
        jQuery(".navigation").removeClass("open");
    });
    jQuery(".accordion-header").on("click", function(e){
        e.preventDefault();
        jQuery(this).parent().toggleClass("active");
        jQuery(this).parent().siblings().removeClass("active");
        jQuery(this).parent().siblings().find(".accordion-header").removeClass("open");
        jQuery(this).toggleClass("open");
        jQuery(this).siblings(".accordion-content").slideToggle(500);
        jQuery(this).parent().siblings().find(".accordion-content").slideUp(500);
    });

    if(jQuery(window).width() >= 768){
        jQuery(".team-member-list").each(function() {
            let $this = $(this);
            let descItem = $this.find(".team-member-desc");
            $this.hover(function() {
                descItem.slideDown("slow");
            }, function() {
                descItem.slideUp("slow");
            });
        });
    }
    if(jQuery(window).width() <= 767){
        jQuery(".team-member-pos").on("click", function() {
            jQuery(this).children(".team-member-arrow").addClass("active");
            jQuery(this).parents().siblings().find(".team-member-desc").slideUp();
            jQuery(this).siblings(".team-member-desc").slideToggle();
        });
    }

});

jQuery(document).ready(function(){
    let headerHeight = jQuery(".main-header").outerHeight(true);
    jQuery("a[href*=#]:not([href=#])").click(function(event){
        event.preventDefault();
        let myattr = jQuery(this).attr("href");
        let target = jQuery(myattr);
        if (target.length) {
            jQuery("html, body").animate({
                scrollTop: target.offset().top - headerHeight
            }, 2000);
            return false;
        } else {
            window.location.href = "index.html" + myattr;
        }
    });
});
