// dom에서 path 찾기
const path = document.querySelector("#path");
const openBtn = document.querySelector(".btn-open");
// 잘 찾고 있는지 확인
// console.log(openBtn);

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();
console.log(pathLength); // 2507.61328125

// dash 의 길이와 공백
// path.style.strokeDasharray = 1000 + " " + 1000;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;

  ////// 스크롤의 위치를 퍼센테이지 값으로 바꾸려고. 퍼센트 값만큼 라인이 그려지게 하려고 함.

  // 스크롤의 위치 => %로 변경. 0~1의 값을 가짐.
  // "현재 스크롤 위치 / 전체 스크롤" 하면 될 것 같지만, 실제로 값을 계산해보면 다름. 하나의 뷰포트 길이만큼이 빠진 값이 실제 값임
  //   console.log(scrollTop, clientHeight); // 제일 하단에서 viewport 높이가 빠져있다.
  // 전체 스크롤 영역 높이에서 뷰포트
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight); // 전체높이-뷰포트의 높이
  //   console.log(scrollPercentage);

  const drawLength = pathLength * scrollPercentage;

  // console.log(drawLength);

  // pathLength의 시작이 전체길이 에서 시작했다가 0 으로 끝나야 함
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절 ( 0~1의 값을 가짐 )
  openBtn.style.opacity = scrollPercentage;

  if (scrollPercentage > 0.8) {
    // 스크롤을 80% 이상 내리면 버튼을 누를 수 있게 함.
    openBtn.disabled = false;
  } else {
    // 스크롤을 내렸다가 다시 올리면 버튼을 클릭할 수 없게 재설정함.
    openBtn.disabled = true;
  }
}
window.addEventListener("scroll", scrollHandler);
