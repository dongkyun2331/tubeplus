// 자동 슬라이드, 페이지네이션, 내비게이션, 프로그레스바, 무한 슬라이드 옵션 적용

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
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
});
