const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
});

const gal_swiper = new Swiper('.gal__right-swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gal__right-swiper-button-next',
    prevEl: '.gal__right-swiper-button-prev',
  },
});
console.log(gal_swiper);
const events_swiper = new Swiper('.events__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
});

const projects_swiper = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
});