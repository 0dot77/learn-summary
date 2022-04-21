//클로져 이해하기

// 1. Lexical Scoping
// lexical?
// 어휘범위지정과정에서 변수가 어디에서 사용 가능한지 알기 위해 그 변수가 소스코드 내 "어디에서 선언되었는지 고려한다는 것이다."

function init() {
  let name = "taeyang"; // init에 의해 생성된 지역 변수

  function displayName() {
    console.log(name); //부모 함수에서 선언된 변수를 사용한다.
  }

  displayName();
}

init();

console.clear();

// ----------------------------------------------------------------------------------------

// 2. Closure
// 위의 사례와 다른 점은 displayName() 함수가 실행되기 전에 외부함수인
// makeFunc()로부터 리턴되어 myFunc 변수에 저장된다는 것이다.

// 클로저는 함수와 함수가 선언된 lexical scope의 조합이다.
// 이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다.
function makeFunc() {
  let name = "charim";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let myFunc = makeFunc(); // myFunc는 makeFunc가 실행 될 때 생성된 displayName 함수의 인스턴스에 대한 참조다.
myFunc();

console.clear();

// ----------------------------------------------------------------------------------------

function makeAdder(x) {
  // 함수를 만들어내는 공장 -> 특정한 값을 인자로 가질 수 있는 함수들을 리턴한다.
  let y = 1;
  return function (z) {
    y = 100; // 클로저가 리턴된 후에도 외부 변수에 접근 가능하다는 것을 보여준다. y 값의 변경이 가능하기 때문이다.
    return x + y + z;
  };
}

// add5와 add10은 둘 다 클로저다.
// 이들은 같은 함수 본문 정의를 공유하면서 (makeAdder) 서로 다른 맥락(lexical)적 환경을 저장한다.
// 여기서 말하는 '맥락적 환경'이란, 함수 본문에 대입되는 인자가 달라질 때 출력되는 값이 달라지는 것을 뜻하는 것 같다.
let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(`add5: ${add5(2)}, add10: ${add10(2)}`);

console.clear();

// ----------------------------------------------------------------------------------------

// 클로저는 어떤 데이터(lexical scope)와 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용하다.
// 이는 객체지향프로그래밍 OOP와 같은 맥락에 있다.

function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

// 위의 상황은 클로저로 구현한 것이다. onclick도 콜백이다!

// ----------------------------------------------------------------------------------------

// 메소드를 프라이빗으로 선언하기
// 즉, 클래스 내부의 다른 메소드에서만 그 메소드들을 호출할 수 있다는 의미다.
// private method는 코드에 제한적인 접근을 허용한다는 점 뿐만 아니라 전역 네임 스페이스를 관리하는 강력한 방법을 제공하여
// 불필요한 메소드가 공용 인터페이스를 혼란스럽게 만들지 않도록 한다.

function cnt() {
  let privateCounter = 0;

  function setPrivateCounter(value) {
    privateCounter += value;
  }

  return {
    increment() {
      setPrivateCounter(1);
    },
    decrement() {
      setPrivateCounter(-1);
    },
    value() {
      return privateCounter;
    }
  };
}

const counter = cnt();

console.log(counter.value()); // 0
counter.increment();
console.log(counter.value()); // 1
counter.decrement();
console.log(counter.value());

console.clear();

// 만들어보기
// 익명 함수를 만들고 바로 실행하는 방식에 유의하기
// 이런 방식으로 클로저를 사용하면 OOP의 정보 은닉과 캡슐화 같은 이점을 얻을 수 있다.

const myPrivateFunction = (function () {
  let myCounter = 0;

  function setMyCounter(value) {
    myCounter += value;
  }

  return {
    // 리턴으로 빼줘야 외부에서 접근이 가능해진다는 것을 명심하자.
    // 따라서 해당 함수의 값에 접근하는 방식은 아래의 세 가지 밖에 없어지는 것이다.
    increment() {
      setMyCounter(1);
    },
    decrement() {
      setMyCounter(-1);
    },
    value() {
      return myCounter;
    }
  };
})();

myPrivateFunction.increment(1);
myPrivateFunction.value();
myPrivateFunction.decrement(-1);
myPrivateFunction.decrement(-1);
console.log(myPrivateFunction.value());

console.clear();

// ----------------------------------------------------------------------------------------

// 모든 클로저에는 세 가지 범위가 존재한다.
// 1. 지역 범위
// 2. 외부 함수 범위 Outer functions scope
// 3. 전역 범위 Global Scope

// ----------------------------------------------------------------------------------------

function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your e-mail address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" }
  ];

  // 옳은 예제

  /* Var를 그대로 사용할 때
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
  */

  /* let을 써서 scope를 지역으로 처리해서 for 외부에서 값을 참조하지 않도록 설정하기 
  for (let i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
  */

  // forEach를 사용하는 방법
  helpText.forEach(
    (item) =>
      (document.getElementById(item.id).onfocus = () => {
        // onfocus는 callback
        showHelp(item.help);
      })
  );

  // 틀린 예제
  /*
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help); // 이 경우에는 helpText 자체를 함수 외부에서 참조하고 있기 때문에 문제가 발생한다.
    };
  }
  */
}

setupHelp();

// ----------------------------------------------------------------------------------------

// 특정 작업에 클로저가 필요하지 않은데 다른 함수 내에서 함수를 불필요하게 작성하지 않도록 하기
// 💾 메모리 낭비임
