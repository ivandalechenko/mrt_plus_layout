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
    prevArrow: "<img src='img/left_white_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/right_white_arrow.svg' class='next' alt='2'>",
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
    },
    {
        breakpoint: 1370,
        settings: {
            arrows: true,
            dots: true,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 1145,
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
    dots: true,
    autoplaySpeed: 4000,
    nextArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    prevArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
    responsive: [{
        breakpoint: 1250,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3,
            centerMode: false,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 800,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 2,
            centerMode: false,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 500,
        settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1,
        }
    }]
});


$('.banner_main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4000,
    prevArrow: "<img src='img/right_arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/left_arrow.svg' class='next' alt='2'>",
});



$('#location_btn').on('click', function () {
    var block = $("#location_block");
    if (block.hasClass("visible_opacity")) {
        block.removeClass("visible_opacity");
    } else {
        block.addClass("visible_opacity");
    }
});


$('#cookie_accept').on('click', function () {
    var block = $("#cookie");
    block.addClass("dnone");
});


$('#burger').on('click', function () {
    $("#mobile_menu").removeClass('mobile_menu_hide');
});
$('#mobile_menu_cross').on('click', function () {
    $("#mobile_menu").addClass('mobile_menu_hide');
});




jQuery(function ($) {
    $(document).mouseup(function (e) {
        var block = $("#location_block");
        if (!block.is(e.target)
            && block.has(e.target).length === 0) {
            block.removeClass("visible_opacity");
        }
    });
});




$('.helpful-information .helpful-information_element .helpful-information_element_img img').click(function () {
    $(this).toggleClass('active');
    $(this).parent().parent().toggleClass('active_element');
});