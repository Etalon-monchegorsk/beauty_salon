
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

})