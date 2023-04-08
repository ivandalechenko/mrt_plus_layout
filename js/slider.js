$('.diagnostic_slider').slick({
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
        breakpoint: 900,
        settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 500,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

$('.doctors_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 900,
        settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 1,
        }
    }]
});

$('.feedback_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 900,
        settings: {
            arrows: false,
        }
    }]
});

$('.tech_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,

});

$('.licence_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
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

