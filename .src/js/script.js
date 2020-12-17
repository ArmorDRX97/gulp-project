function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


$(document).ready(function () {
    M.AutoInit();
    M.updateTextFields();

    $(document).ready(function () {
        $('.tabs').tabs({
            swipeable: true
        });
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("nav").addClass("scrolling");
    } else {
        $("nav").removeClass("scrolling");
    }
});

$('.info-second-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    items: 1,
});

$('.carousel-users').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    items: 1,
});

$('.functions-carousel').owlCarousel({
    loop: false,
    autoplay: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    responsive: {
        0: {
            items: 1.2,
        },
        500: {
            items: 2.2,
        },

        900: {
            items: 2.8,
        }
    }
});


$("#button").click(function () {
    $(".form-consultation").addClass('hide-block');
    setTimeout(function () {
        $(".form-consultation").hide();
    }, 300);
    setTimeout(function () {
        $(".after-form").show().removeClass('hide-block');
    }, 500);

});

