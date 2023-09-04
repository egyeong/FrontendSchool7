// html 파일과 연결되었는지 확인.
// console.log('연결');

const dropTarget = document.querySelector(".drop-target");
// li 요소를 전부 선택해야 해서 'All'을 써야 한다.
const dragItems = document.querySelectorAll(".drag-item");

// console.log(dropTarget);
// 유사 배열을 반환중.
// console.log(dropItems);

dragItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    // drag가 start되면 클래스를 추가해줄 것, 드래그 하려고 누르자마자 실행되게는 하지 않을 것.
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0); // 0: 약간의 지연을 주겠다는 의미. 사람이 느낄 정도는 아니라서 큰 차이 없긴 함.)
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});
// console.log(dropTarget);
// console.log(dropItems);

function handleDragOver(e) {
  // 함수가 잘 만들어졌는지 확인.
  //   console.log("dragover");

  // 혹시 일어날 수도 있는 버그를 막기 위함.
  e.preventDefault();

  const draggingItem = dropTarget.querySelector(".dragging");
  //   console.log(draggingItem);

  //   첫번째 사람 빼고 나머지를 반환한다.
  const notDraggingItems = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );
  //   console.log(notDraggingItem);

  const nextItem = notDraggingItems.find((item) => {
    /*
        clientY: 뷰포트 내 마우스 y좌표
        offsetTop: 뷰포트에서 요소까지의 y좌표
        offsetHeight: ㅛ소의 높이(border 포함)
    */
    // console.log(
    //   "clientY: ",
    //   e.clientY,
    //   "/ offsetTop: ",
    //   item.offsetTop,
    //   "/ offsetHeight: ",
    //   item.offsetHeight
    // );
    ///// offsetTop + (offsetHeight / 2)가 clientY보다 작으면, 해당 요소가 앞으로 당겨지고 드래깅 중인 요소가 그 자리에 놓인다.
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
  });
  //   console.log(nextItem);
  dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener("dragover", handleDragOver);
// dropTarget.addEventListener("dragenter", (e) => e.preventDefault());
