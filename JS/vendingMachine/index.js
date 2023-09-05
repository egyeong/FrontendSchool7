import ColaGenerator from "./js/colaGenerator.js";
const colaGenerator = new ColaGenerator();
// 최근 문법, 최상위 모듈에서는 await 키워드를 async함수 내에서 쓰지 않아도 가능하다(top-level await). 기존에는 async 함수를 만들어서 써야 했다.
colaGenerator.setup();
