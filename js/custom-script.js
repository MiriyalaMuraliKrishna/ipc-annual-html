jQuery(document).ready(function(){

    jQuery(window).on('scroll load', function(){
        let scroll = jQuery(this).scrollTop();
        scroll > 4 ? jQuery('.main-header').addClass('fixed_header') : jQuery('.main-header').removeClass('fixed_header');
    });

    jQuery('.toggle_menu').on('click', function(e){
        e.preventDefault();
        jQuery(this).toggleClass('active');
        jQuery('.main-header').toggleClass('sticky_header');
        jQuery('.navigation').toggleClass('open');

    });
    jQuery('ul.main_menu > li > a').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent('li').addClass('current-menu-item');
        jQuery(this).parent().siblings('li').removeClass('current-menu-item');
        jQuery('.toggle_menu').removeClass('active');
        jQuery('.main-header').removeClass('sticky_header');
        jQuery('.navigation').removeClass('open');
    });
    jQuery('.accordion-header').on('click', function(e){
        e.preventDefault();
        jQuery(this).parent().toggleClass('active');
        jQuery(this).parent().siblings().removeClass('active');
        jQuery(this).parent().siblings().find('.accordion-header').removeClass('open');
        jQuery(this).toggleClass("open");
        jQuery(this).siblings('.accordion-content').slideToggle(500);
        jQuery(this).parent().siblings().find('.accordion-content').slideUp(500);
    });
});