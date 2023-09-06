class ColaGenerator {
  constructor() {
    // 1. 클래스 생성 => 초기화 : constructor 작성 => 콜라 리스트를 찾아서 돔을 할당해준다.
    this.itemList = document.querySelector(".cola-list");
    // 1-1. 원래라면, 서버를 통해 데이터를 받아야 하는데(백엔드) 없으니까 일단 json파일로 만들어서 진행한다. (items.json)
  }

  // 6. 모든 것을 초기화하는 함수 setup()을 작성한다.
  async setup() {
    // 6-1. loadData를 작동시켜서 data를 response에 담고, 이걸 colaFactory에 전달한다. 그럼 index.js에서 setup()만 호출하면 되는 것이다.
    const response = await this.loadData();
    this.colaFactory(response);
  }

  // 2. 데이터를 로드하는 함수가 필요하다.
  async loadData() {
    try {
      // 2-1.fetch를 실행시켜서 response에다가 받는다. fetch는 비동기니까, 데이터를 로드하는 동안 기다리도록 await, async를 이용한다.
      const response = await fetch("./items.json");
      // 2-2. console.log를 통해 response에 뭐가 들어있는지 일단 확인해본다.
      // console.log(response);
      // 2-3. index.html로 가서 js파일을 연결해주고, 연결이 잘 되었는지 확인한다.

      // 3. 예외처리를 진행한다.
      if (!response.ok) {
        // false일 경우
        throw new Error("HTTP ERROR!! : " + response.status);
      }
      return await response.json();
    } catch (error) {
      console.error(
        "콜라 데이터를 로딩하는 중에 문제가 발생했습니다. : " + error
      );
    }
  }

  colaFactory(data) {
    // 5. fragment를 이용한다.
    const docFrag = new DocumentFragment();

    // 4. js객체가 data안에 들어가도록 한다. 전달받는 데이터의 형태는 배열, 그 배열 안에 객체가 들어 있다(items.json). 원본 파일을 훼손하려는 건 아니어서, forEach를 활용한다.
    data.forEach((el) => {
      // 4-1. 우리가 만들어야 할 대상(index.html)을 확인한다.
      //   <li>
      //   <!-- JS : 클래스 on 유/무 제어 -->
      //   <button type="button" class="btn-cola on">
      //     <img src="./img/cola-original.png" alt="" />
      //     <span class="cola-name">Original_Cola</span>
      //     <strong class="cola-price">1000원</strong>
      //   </button>
      //     </li>

      // el.count: 재고

      const item = document.createElement("li");
      const itemTemplate = `
      <button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
          <img src="./img/${el.img}" alt="${el.name}" />
          <span class="cola-name">${el.name}</span>
          <strong class="cola-price">${el.cost}원</strong>
      </button>
      `;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
      //  4-2. data 배열을 순환하면서 템플릿화 해서 item의 자식요소로 집어넣고, item을 itemList 붙인다. 그런데 이건 좋지 않은 방법이다. 만들고 붙이고, 만들고 붙이고 ... 반복하는 형식이기 때문이다.
    });

    this.itemList.append(docFrag);
    // 5-1. js에서 최근에 모듈을 지원하게 되었다. 그래서 js파일들도 한번에 묶어서 붙일 수 있게 되었다.
  }
}

// 5-2. export를 활용한다. export:수출한다(밖으로 빼낸다). default:1개만 밖으로 빼낼 것이다.
// index.js 생성, import 작성한다.
// index.html에서 코드를 수정한다.
// index.html -> index.js -> js파일로 오는 구조이다.
export default ColaGenerator;
