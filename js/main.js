$(document).ready(function () {
    console.log("jQuery is working!");
    $('.js-slider-gallery').each((i, slider) => {
       console.log(slider); 

       new Swiper(slider, {
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        centeredSlides: true,
       })
    });
});