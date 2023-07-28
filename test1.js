const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  //   반응형 슬라이드 구현
  // 768px 이하에서는 1장 표시
  breakpoints: {
    // 768px 이상, 1280px 이하에서는 2장 표시
    768: {
      slidesPerView: 2,
    },
    // 1280px 이상에서는 3장 표시
    1280: {
      slidesPerView: 3,
    },
  },
});
