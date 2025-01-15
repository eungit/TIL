let arr = [1, 2, 3]

let s = arr.reduce(function (acc, num){
    return acc + num
},0)//초기값
//let s = arr.reduce(cb, ???)
//??? 여기에는 초기값이 들어갈 수 있음. 초기값 지정이 안 되어 있으면 0이라고 생각함

//리듀스는 인자가 2개임 콜백, 초기값(초기값은 없어도됨)
//리듀스의 첫 번째 인자인 콜백함수는 콜백함수의 인자도 2개임

console.log(s)
//acc는 누적값이라 처음에는 acc + num = 0 + 1라고 생각하면 됨


//실습 2
let a = arr.reduce(function (acc, num) {//acc는 초기값 [] 빈 배열을 가지고 시작함
    acc.push(num*2) //한 번 돌아가면 [2]가 됨, [2, 4], [2, 4, 6]
    return acc
}, [])
console.log(a)

//실습3
const movies = [
    { title: "matrix", isAdult: false },
    { title: "kingsman", isAdult: true },
    { title: "zootopia", isAdult: false },
];

let baby = movies.reduce(function (acc, movie) {
    if (!movie.isAdult) {acc.push(`영화 제목: ${movie.title}`)}
    return acc
}, [])

console.log(baby)