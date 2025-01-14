let age = 25;
let isStudent = true;

if (age >= 20) {
  if (isStudent) {
    console.log("성인 학생입니다.");
  } else {
    console.log("성인입니다.");
  }
} else {
  if (isStudent) {
    console.log("미성년 학생입니다.");
  } else {
    console.log("미성년입니다.");
  }
}

let x = 7;

let result = x % 2 === 0 ? "짝수" : "홀수";
console.log(`${x}는 ${result}입니다.`);
