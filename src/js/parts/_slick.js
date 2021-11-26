$(document).ready(function() {

    $('.insta_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 1500,
        dots: false,
        prevArrow: $('#btn_prev'),
        nextArrow: $('#btn_next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    fade: true
                }
            }
        ]
    });

    $('.insta_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.b-slide-number').text(indexSlide);
        });
});

