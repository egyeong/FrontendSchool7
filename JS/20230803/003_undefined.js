let a;
console.log(a); // 아무것도 할당되지 않으면 undefined 출력.

if (typeof a === "undefined") {
  console.log("a에 아무것도 할당되지 않았습니다!");
}

if (!a) {
  console.log("a에 아무것도 할당되지 않았습니다!");
}
