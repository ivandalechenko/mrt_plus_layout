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
});







$('.helpful-information .helpful-information_element .helpful-information_element_img img').click(function () {
    $(this).toggleClass('active');
    $(this).parent().parent().toggleClass('active_element');
});