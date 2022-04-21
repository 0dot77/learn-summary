// 오브젝트를 만드는 함수
function makePerson(name, age) {
  return {
    name,
    age
  };
}

// constructor function
// class가 도입되기 이전에 사용하던 방식
function Person(name, age) {
  // this = {}; => 생략된 것
  this.name = name;
  this.age = age;
  // return this => 생략된 것
}

const person1 = new Person("taeyang", 24);

const person2 = {
  name: "taeyang",
  age: 27
};

// in operator : 키 체크
console.log("taeyang" in person1);

// for in vs for of
// for (key in obj)

for (const key in person2) {
  console.log(key);
}

// for (value of iterable)
// 배열, 순차적으로 iterable한 요소에 사용한다.
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}

console.clear();

// Copy

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "black" };
// Object.assign은 뒤에 나오는 source일수록 덮어씌운다.
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);

console.clear();

const copy = {
  name: "taeyang",
  tool: "hammer"
};

const copyCat = copy;
// console.log(copyCat);
copyCat.name = "cat";
console.log(copyCat);

// 할당받은 오브젝트에 새로운 값을 넣도록 하기
// 기존에는 참조 값으로 접근했기 떄문에 값에 직접 영향을 주게 되지만, 값을 복사하여 사용하게 되면
// 이전의 참조와는 영향이 없어지기 때문에 기존의 값을 변화시키지 않고 사용할 수 있다.
const newCopy = Object.assign({}, copyCat);
newCopy.name = "taeyang";
console.log(newCopy);
