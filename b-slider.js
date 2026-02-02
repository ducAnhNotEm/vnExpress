new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //  < 768 px thi co 1 slide
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    //  >= 768 px thi co 2 slide
    768: {
      slidesPerView: 2,
    },
    //  >= 1024 px thi co 3 slide
    1024: {
      slidesPerView: 3,
    },
  },
});
