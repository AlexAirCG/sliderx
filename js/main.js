$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        asNavFor: ".sliderbig",
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        mobileFirst: false,
        // appendArrows: $('.content'),
        // appendDots: $('.content'),
    });

    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider"
    });
});