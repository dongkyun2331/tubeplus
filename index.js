// hover 시 2 depth 메뉴 슬라이드
$(".menu-li").hover(function () {
  $(this).find("ul").stop().slideToggle("fast");
});

$(".menu-toggle").click(function () {
  $(".modal-bg").toggleClass("active");
  $(".dimm").toggleClass("active");
});

$(".dimm").click(function () {
  $(".modal-bg").toggleClass("active");
  $(".dimm").toggleClass("active");
});

const contents = document.querySelectorAll(".content");
// 1 depth 메뉴 터치 시 2 depth의 1번째 메뉴 페이지로 이동, gnb 닫히지 않음
// 1 depth 메뉴 터치 시 해당하는 2 depth 메뉴 목록을 슬라이드 형식으로 표시
contents.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
