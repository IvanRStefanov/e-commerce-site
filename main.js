$(document).ready(function () {
    console.log("jQuery is working!");
    $('.js-slider-gallery').each((i, slider) => {
       console.log(slider); 

       new Swiper(slider, {
        autoplay: false,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        }
       })
    });
});