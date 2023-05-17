

jQuery(document).ready(function(){
    jQuery(".glance-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        variableWidth: true,
        arrows: true,
        prevArrow: '<div class="slick-arrow slick-prev"><span class="slick-btn fa-regular fa-arrow-left flex flex-center"></span></div>',
        nextArrow: '<div class="slick-arrow slick-next"><span class="slick-btn fa-regular fa-arrow-right flex flex-center"></span></div>',
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1023,
                settings: {
                }
            },
        ],
    });    
});

jQuery(window).on("load resize orientationchange", function() {
    jQuery(".table-annual-slider").each(function(){
        let tableSlide = $(this);
        if (jQuery(window).width() >= 768) {
            if (tableSlide.hasClass("slick-initialized")) {
                tableSlide.slick('unslick');
            }
        }
        else{
            if (!tableSlide.hasClass("slick-initialized")) {
                tableSlide.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    arrows: true,
                    prevArrow: '<div class="slick-arrow slick-prev"><span class="slick-btn fa-regular fa-arrow-left flex flex-center"></span></div>',
                    nextArrow: '<div class="slick-arrow slick-next"><span class="slick-btn fa-regular fa-arrow-right flex flex-center"></span></div>',
                    focusOnSelect: true,
                    infinite: false,
                    dots: false,
                });
            }
        }
    });
});
