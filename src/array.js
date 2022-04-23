"use strict";
// 비슷한 데이터를 한데 묶어놓는 것을 자료구조라고 한다.

// ** 배열 VS 오브젝트 **
// 오브젝트도 마찬가지로 비슷한 데이터를 한데 묶는 것이지만, 배열과는 다르게
// 하나의 물체 안에 비슷한 속성들을 묶어주는 방식이라고 생각하면 된다.
// 오브젝트는 서로 연관된 특징과 행동/기능 들을 묶어놓는 것이다.

// 배열은 오브젝트처럼 하나의 물체의 세부적인 기능으로 묶는 것이 아니라,
// 그 하나하나의 같은 오브젝트를 묶어주는 것이라고 생각하면 된다.
// 타입이 있는 언어에서는 같은 타입들을 묶어줄 수 있다.

// 그래서 배열 안에 오브젝트를 넣어서 구성했던 것 같다.
// 배열 자체가 오브젝트 처럼 구체적인 속성과 기능을 명명하는 것이 아니라 완성된 (같은 타입들의) 오브젝트들을 묶어서 사용한다.

// 자바스크립트는 dynamically typed language
// 따라서 하나의 배열 안에 다양한 타입의 오브젝트들이 묶여서 존재할 수 있지만, 권장되진 않는다.

// 검색 삽입 정렬 삭제 -> 배열의 알고리즘
// 효율성을 공부하는 것이 중요하다.

// 배열은 칸칸이 모여있는 자료구조
// 인덱스가 지정이 되어있다.

//-----------------------------------------------------------------------------

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
// 배열을 공부할 때는 index를 활용해서 데이터를 어떻게 검색 삽입 삭제 정렬 하는지에 대해 생각하는 것이 중요하다.

const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits[0]); // 처음
console.log(fruits[fruits.length - 1]); // 끝
// object는 key, value로 구성되어 있었고, 배열은 index

console.clear();

// 3. Looping over an array
// print all fruits

// for Each
// for Each는 배열의 API
// anonymous 이름 없는 함수는 arrow function을 사용하기
fruits.forEach((item, index, all) => console.log(item, index, all));

// for of
for (const fruit of fruits) {
  console.log(fruit);
}

console.clear();

// 4. Add, Delete, Copy
// push: add an item to the end
fruits.push("🍓", "🍇");

// pop: remove an item from the end
fruits.pop();

// unshift: add an to item to the beginning
fruits.unshift("🍇", "🍓");

// shift remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

console.clear();

// note! shift, unshift 는 정말로 느리다. pop과 push보다!
// 뒤에서 빼고 넣는 것은 기존의 데이터가 움직이지 않아도 된다.
// 따라서 빠르게 가능하지만, shift와 unshift는 앞에서 데이터를 다루는 것이기 때문에 느리다.
// 배열의 전체의 데이터가 움직이는 것들은 느릴 수밖에 없다. -> 배열의 길이가 길면 길수록 더더욱!

// splice: remove an item by index position
fruits.push("🫐", "🥝");
fruits.splice(2); // start, index를 지정해서 배열의 아이템을 지워준다.
fruits.splice(0, 1, "🍓", "🌸");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍓", "🍇"];
const newFruits = fruits.concat(fruits2);
console.log(`this is ${newFruits}`);

console.clear();

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf("🌸"));
console.log(fruits.indexOf("🍌"));

// inclues
console.log(fruits.includes("🍌"));
console.log(fruits.includes("🍎"));

console.clear();

// lastIndexOf
// 동일한 배열의 요소가 있을 때 인덱스를 구분해서 표기해줄 수 있다.
fruits.push("🍌");
console.log(fruits);

console.log(fruits.indexOf("🍌"));
console.log(fruits.lastIndexOf("🍌"));
