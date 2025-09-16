$(document).ready(function () {
    $('.js-slider-gallery').each((i, slider) => {
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

    $('.js-thumbs-slider-product').each((i, slider) => {

        const mainSlider = $(slider).find('.slider__clip-main')[0];
        const thumbsSlider = $(slider).find('.slider__clip-thumbs')[0];

        const thumbsSwiper = new Swiper(thumbsSlider, {
            slidesPerView: 'auto',
            watchSlidesProgress: true,
        });

        const mainSwiper = new Swiper(mainSlider, {
            slidesPerView: 1,
            effect: "fade",
            loop: true,
            autoplay: false,
            thumbs: {
                swiper: thumbsSwiper
            },
        });
    });

    $('.js-tabs .tabs__nav a').on('click', function (event) {
        event.preventDefault();

        const $this = $(this);
        const targetId = $this.attr('href');
        const $parent = $this.closest('li');

        $(targetId)
            .add($parent)
            .siblings()
                .removeClass('is-current')
            .end()
                .addClass('is-current');
    });

    $('.js-form-accordion .form__accordion-header').on('click', function () {
        $(this)
            .closest('.form__accordion-section')
                .siblings()
                .removeClass('is-current')
            .end()
                .addClass('is-current');
    });
});