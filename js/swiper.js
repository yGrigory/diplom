
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

const gal_swiper = new Swiper('.gallery__right-swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__right-swiper-button-next',
    prevEl: '.gallery__right-swiper-button-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    720: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    360: {
      spaceBetween: 38,
    }
  }
});
const events_swiper = new Swiper('.events__swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  slidesPerView: 3,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    768: {
      spaceBetween: 27,
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  }
});
const projects_swiper = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  spaceBetween: 50,
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
  breakpoints: {
    1042: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    768: {
      spaceBetween: 50,
      slidesPerGroup: 2,
      slidesPerView: 2,
    }
  }
});