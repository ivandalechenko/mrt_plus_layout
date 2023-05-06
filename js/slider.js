$('.diagnostic-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        }
    }]
});

$('.doctors-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 900,
        settings: {
            arrows: false,
            slidesToShow: 2,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 650,
        settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
        }
    }]
});

$('.other-research-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 900,
        settings: {
            arrows: false,
            slidesToShow: 2,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 650,
        settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
        }
    }]
});


$('.feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
        }
    }]
});

$('.equipment-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
});

$('.mrt-gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
});



$('.licence-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 900,
        settings: {
            arrows: false,
            slidesToShow: 2,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 660,
        settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
        }
    }]
});

$('.photos_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 1100,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 750,
        settings: {
            arrows: false,
            slidesToShow: 1,
            dots: true,
            centerMode: true,
            slidesToScroll: 1,
        }
    }]

});


$('.feedback_main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 700,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1,
        }
    }]
});


$('.doctors-main-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='iimg/left_white_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='iimg/right_white_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 1800,
        settings: {
            arrows: true,
            dots: true,
            slidesToShow: 5,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 1650,
        settings: {
            arrows: true,
            dots: true,
            slidesToShow: 4,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 1370,
        settings: {
            arrows: true,
            dots: true,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 1140,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 950,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 720,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
        }
    }]
});


$('.license_main_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='iimg/left_white_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='iimg/right_white_arrow.svg' class='next' alt='2'>"
});







$('.helpful-information .helpful-information_element .helpful-information_element_img img').click(function () {
    $(this).toggleClass('active');
    $(this).parent().parent().toggleClass('active_element');
});