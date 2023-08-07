// 별표 ****

// 1. 비교 연산을 했을 때
let x = 3;
let y = 5;
console.log(x > y); // false

// 2. 논리연산을 했을 때 각 비교값이 true나 false인 경우
// (true나 false가 아닌 경우 단락회로평가가 일어남)
let x2 = true;
let y2 = false;
console.log(x && y);

// ** 3. true나 false로 평가되는 것들
// if(value) {
//  value가 true일 때 실행
//  그렇다면 어떤 value가 true일까?
// }

if (Boolean("hello")) {
  console.log("!!"); // 느낌표가 실행되는가? yes
}

if ("hello") {
  console.log("!!"); // 느낌표가 실행되는가? yes
}

if ("") {
  console.log("!!"); // 느낌표가 실행되는가? no
}

Boolean("hello"); // true
Boolean(""); // false
Boolean(" "); // true
Boolean(0); // false
Boolean(1); // true
Boolean(-1); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
// !!null // 실무에서 true, false를 구분할 때 사용

// 4. javascript에서 나를 힘들게 하는 true, false
x = [1, 2, 3];
x.pop();
x.pop();
x.pop(); // js: x가 가리키고 있는 값은 변한 적이 없는데 true -> false로 바뀌는 것은 옳지 않다.

Boolean([1, 2, 3]); // true
Boolean([]); // true
Boolean({ one: 1 }); // true
Boolean({}); // true

null == undefined; // true
null > undefined; // false, 다른 비교도 false
null < 100; // true, 다른 숫자와의 비교(<>==)도 true. 다른 언어에서는 error, 쓸 일 별로 없다.
undefined < 100; // 숫자와의 비교는 다 false
