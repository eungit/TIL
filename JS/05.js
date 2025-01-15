//Array 관련 고차함수
//filter()
const movies = [
    { title: "matrix", isAdult: false },
    { title: "kingsman", isAdult: true },
    { title: "zootopia", isAdult: false },
];

let babyMovies = movies.filter((movie) => {
    return !movie.isAdult; // 성인 영화가 아닌 것만 필터링
});

// 제목을 "제목1: matrix" 형식으로 출력
let babyMovieTitles = babyMovies.map((movie, index) => {
    return `영화 제목${index + 1}: ${movie.title}`; // 제목 앞에 "제목n: " 추가
});

console.log(babyMovieTitles);

//이건 간소화 버전
// let baby = movies
//     .filter(movie => movie.isAdult === false)
//     .map(movie => movie.title)
            
// console.log(baby)

