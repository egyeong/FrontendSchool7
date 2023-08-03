// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName);

let firstName2 = null;
let lastName2 = "hojun";
let nickName2 = "licat";

console.log(firstName2 ?? nickName2);
console.log(firstName2 ?? lastName2 ?? nickName2);
console.log(firstName2 || nickName2);

let a = null;
let b = 10;
let c = null;
console.log(a ?? b ?? c);

let height = 0;
console.log(height ?? 100); // 0이 null인가요? 아니니까 0을 출력합니다. nullish 입장에서는 0도 value입니다.
console.log(height || 100); // 0을 만났을 때 뒤를 봐야 하나요?

let height2;
console.log(height2 ?? 100);
console.log(height2 || 100);

let height3 = "";
console.log(height3 ?? "world"); // ''이 null인가요? 아니니까 ''을 출력합니다. nullish 입장에서는 ''도 value입니다.
console.log(height3 || "hello"); // ''을 만났을 때 뒤를 봐야 하나요?

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined, false, NaN, '', etc...
// ?? : null, undefined

// falsy하다 : 0, null, undefined, false, NaN, '', etc...
// nullish하다 : null, undefined

// nullish 문제
// 1번
let username;
let nickname;
console.log(username || nickname || "guest");

// 2번
let username2 = "";
let nickname2 = "";
console.log(username2 || nickname2 || "guest");

// 3번
let username3 = "";
let nickname3 = "";
console.log(username3 ?? nickname3 ?? "guest");

// 4번
let username4;
let nickname4;
console.log(username4 ?? nickname4 ?? "guest");
