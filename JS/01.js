//객체
// let person = {
//     name:'홍길동',
//     age:30,
//     job:'개발자',
// };
// person.age = 40;//수정 가능
// console.log(person.age);

let a = {
  name: "홍길동", // 문자열(String)
  age: 30, // 숫자(Number)
  isStudent: false, // 불리언(Boolean)
  courses: ["수학", "영어", "과학"], // 배열(Array)
  address: {
    city: "서울",
    zipcode: "10001",
  }, // 객체(Object)
  graduationYear: null, // null
};

console.log(a.address.city);
