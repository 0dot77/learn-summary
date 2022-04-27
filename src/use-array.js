"use strict";

// q1. make a string out of an array

const fruits = ["apple", "banana", "orange"];
const fruitsToString = fruits.join(" ");
console.log(fruitsToString);
console.clear();

// q2. q1

const fruits2 = "사과, 바나나, 키위, 체리";
const newFruits = fruits2.split(", ");
console.log(newFruits);
console.clear();

// q3. make this array look like this : [5,4,3,2,1]
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // 5,4,3,2,1
console.clear();

// q4. make new array without the first two elements
const array2 = [1, 2, 3, 4, 5];
const newArray2 = array2.splice(2);
console.log(newArray2); // 3,4,5
console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const student = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88)
];

// q5. find a student with the score 90
const score90high = student.find((el) => el.score === 90);
console.log(score90high);
console.clear();

// q6. make an array containing only the students' scores
// results should be : [45,80,90,66,88]
const resultScore = student.map((el) => el.score);
console.log(resultScore); // [45,80,90,66,88]
console.clear();

// q8. check if there is a student with the score lower than 50
student.forEach((item) => (item.score < 50 ? console.log(item.name) : null));

// q9. Compute students' average score
let avg = 0;
let result = 0;
for (const st of student) {
  avg += st.score;
  result = avg / student.length;
}

console.log(result); // 73.8
console.clear();

// q10. make a string containing all the scores
// result should be: '45,80,90,66,88'

const makeString = [];
student.forEach((item) => makeString.push(item.score));
console.log(makeString.join(",")); // 45,80,90,66,88
console.clear();

// q10-bonus sorted in ascending order
console.log(makeString.sort().join(",")); //45,66,80,88,90
console.clear();
