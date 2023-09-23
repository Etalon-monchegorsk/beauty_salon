const swiper = new Swiper('.swiper-master', {

  // Optional parameters
  loop: false,
  slidesPerView: 3,
  spaceBetween: 80,
  speed: 1000,
  navigation: {
    prevEl: '.master .slider-prev',
    nextEl: '.master .slider-next',
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    660: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1000: {
      spaceBetween: 20,
      slidesPerView: 3
    }
  }

  // If we need pagination
  // pagination: {
  //    el: '.swiper-pagination',
  // },

  //  // Navigation arrows
  // navigation: {
  //    nextEl: '.swiper-button-next',
  //    prevEl: '.swiper-button-prev',
  // },

  //  // And if we need scrollbar
  // scrollbar: {
  //    el: '.swiper-scrollbar',
  // },
});
const priceSlider = new Swiper('.price__slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 80,
  speed: 1000,
  effect: 'slide',
  parallax: true,
  navigation: {
    prevEl: '.price .slider-prev',
    nextEl: '.price .slider-next',
  },
});