function applyJavaScriptForLargeScreen() {
  let clickCount = 0;

  let clickCount3 = 0;
  // 3-1 div의 정 중앙에는 페이지 전체에서 클릭한 횟수 표시.
  const clickCounter = document.querySelector(".click-counter");

  document.addEventListener("click", () => {
    clickCount++;
    clickCounter.textContent = clickCount;
  });
  // 3-2 div의 정 중앙에는 3번 div를 클릭한 횟수 표시.
  const box3 = document.querySelector("#box3");
  const clickCounter3 = document.querySelector(".click-counter3");

  box3.addEventListener("click", () => {
    clickCount3++;
    clickCounter3.textContent = clickCount3;
  });
  // 마우스 포인터가 해당 div로 진입할 때, div와 동일한 크기의 투명한 텍스트 박스(내부 텍스트 : “Hello World”, 텍스트 정렬 : 중앙)가 아래쪽으로부터 오버랩 되며 불투명 해지도록 설정.
  $(document).ready(function () {
    $(".overlay-text").css("bottom", "-100%");
    $("#box1").mouseenter(function () {
      $(".overlay-text").stop().animate({ bottom: 0 }, 300);
      // 마우스 포인터가 해당 div에서 벗어날 때, 오버랩 박스는 위쪽으로 흐릿해지면서 사라지게 설정.
      $("#box1").mouseleave(function () {
        $(".overlay-text")
          .stop()
          .animate({ bottom: "100%" }, 300, function () {
            $(".overlay-text").css("bottom", "-100%");
          });
      });
    });
  });
  // 마우스 포인터가 해당 div로 진입할 때 div의 외곽선으로부터 20px 너비만큼 안쪽으로 #00c 색상을 가진 테두리(테두리 1)을 생성하면서 div 배경색을 #2ca 색상으로 변경.
  $(document).ready(function () {
    $("#box2").mouseenter(function () {
      $(this).css({
        "box-shadow": "inset 0 0 0 20px #00c",
        "background-color": "#2ca",
      });
    });
    // 마우스 포인터가 div에서 벗어날 때, 가장 외곽에 있는 테두리 색상을 #c00로 변경, 테두리 1 로부터 20px만큼 안쪽으로 #c00 색상의 테두리 2를 생성하면서 div 배경색을 #0c0으로 변경.
    $("#box2").mouseleave(function () {
      $(this).css({
        outline: "1px solid #c00",
        "box-shadow": "inset 0 0 0 20px #00c, inset 0 0 0 40px #c00",
        "background-color": "#0c0",
      });
    });
  });
}

const mediaQuery = window.matchMedia("(min-width: 1280px)");
if (mediaQuery.matches) {
  applyJavaScriptForLargeScreen();
}
