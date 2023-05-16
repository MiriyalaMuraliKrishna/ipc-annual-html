

jQuery(document).ready(function(){
    jQuery('.glance-slider').slick({
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
    if(jQuery(window).width()<=767){
        jQuery('.table-annual-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            arrows: true,
            prevArrow: '<div class="slick-arrow slick-prev"><span class="slick-btn fa-regular fa-arrow-left flex flex-center"></span></div>',
            nextArrow: '<div class="slick-arrow slick-next"><span class="slick-btn fa-regular fa-arrow-right flex flex-center"></span></div>',
            focusOnSelect: true,
        });
    }
});