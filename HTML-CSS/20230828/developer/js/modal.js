// 콘솔에 아무거나 찍어봐서 index.html과 해당 파일이 연결이 잘 되었는지 확인.

const modal = document.querySelector(".modal");
// console.log(modal); // article이 출력됨을 확인.
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
// console.log(btnOpen, btnClse);
const dim = document.querySelector(".dim");

const focusableEl = modal.querySelectorAll("a, button, input");

// 첫번째 탭에서 shift+tap 누르면 그 전으로 가야 함(x버튼).
// 유사배열 형태로 찾는다: 첫번째 요소, 마지막 요소 <- 포커스 설정하려고 하는 중.
const firstEl = focusableEl[0];
// 쿼리셀렉터 써도 된다.
// const firstEl = modal.querySelector('a, button, input');
// 노드리스트라서 -1로는 못 찾는 것.
const lastEl = focusableEl[focusableEl.length - 1];
console.log(focusableEl);

function openModal() {
  //   console.log("모달 열림");
  // modal이 가진 class를 모두 알려준다.
  // console.log(modal.classList);
  // modal에 클래스를 추가할 것.
  modal.classList.add("active");
  // 모달이 열리면 스크롤이 자꾸 움직여서, 스크롤이 안 되게끔 설정한다.
  document.documentElement.style.overflow = "hidden";

  firstEl.focus();
}
function closeModal() {
  //   console.log("모달 닫힘");
  modal.classList.remove("active");
  // 스크롤을 움직일 수 있게 다시 풀어준다.
  document.documentElement.style.overflow = "auto";
}

function handleTab(e) {
  // e.key: 누른 key 정보를 반환
  //     console.log(e);

  // shift 키를 누른 정보를 boolean 값으로 반환
  //     console.log(e.shiftKey);
  // 잘 작동하는지, 어떻게 작동하는지 확인하기 위해서 (맨 밑의 코드) window에 이벤트리스너를 달아서 확인했다.

  // activeElement: 현재 포커스를 받고 있는 요소를 반환
  const activeEl = document.activeElement;
  console.log("activeElement", document.activeElement);

  if (e.key === "Tab") {
    if (e.shiftKey) {
      // tab + shift
      if (activeEl === firstEl) {
        // 첫번째 요소에서 shift + tab를 같이 눌렀을때
        // 마지막 요소(x버튼)으로 포커스가 이동하게 해야 한다.

        // 기본동작을 막아준다(이전 요소로 가지 못하게 한다).
        e.preventDefault();
        // lastEl로 포커스가 이동하게 한다.
        lastEl.focus();
      }
    } else {
      // tab만 눌렀을 때
      if (activeEl === lastEl) {
        // e.preventDefault(); 이 코드가 없으면, 원래 마지막 요소에서 tab을 눌렀을 때 다음요소로 이동하게 되는데 이 기본동작을 막지 않는다. 그런데 아래아래 코드를 보면 fistEl에 포커스를 주는 코드까지 있다. 그래서 firstEl로 포커스가 간 다음, 내가 누른 tab기능이 수행되어서 2번째 버튼까지 가게 된다.
        e.preventDefault();
        firstEl.focus();
      }
    }
  }
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
dim.addEventListener("click", closeModal);

// keyup: 키보드를 눌렀다 떼는 순간 발생한다.
// keydown: 키보드를 누르는 순간 발생한다.
firstEl.addEventListener("keydown", handleTab);
lastEl.addEventListener("keydown", handleTab);

// window.addEventListener("keydown", handleTab});

window.addEventListener("keydown", (e) => {
  //   console.log(modal.classList.contains("active"));
  // esc key가 눌리면 모달이 닫히는 기능 구현

  // modal.classList.contains('active'): active 클래스의 포함여부를 boolean 값으로 반환
  if (modal.classList.contains("active") && e.key === "Escape") {
    closeModal();
  }
});
