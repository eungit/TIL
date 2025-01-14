// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let a = [1, 2, 3];
// for (let j of a) {
//   console.log(j, typeof j);
// }

let a = [17, 45, 78];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// let person = [1, 2, 3]// 딕셔너리라 뽑아 나오는 것은 string으로 나옴
const person = { name: "홍길동", age: 30, city: "서울" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
