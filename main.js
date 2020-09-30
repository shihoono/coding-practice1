
var swiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
});