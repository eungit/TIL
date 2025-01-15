//콜백 함수
//함수의 인자로 전달
function completeTask() {
    console.log('completeTask 함수 시작');
}

function startTask(callbackFunction) {
    console.log('startTask 함수 시작');
    callbackFunction();
    console.log('startTask 함수 종료');
}

startTask(completeTask);


const applyOperation = (func, number) => {//3번
    return func(number);//4번
}

const double = x => x * 2;//1번

console.log(applyOperation(double, 10))//2번 -> 5번


//함수의 반환값으로 사용
const makeMultiplier = (n) => {
    return (x) => x * n;
}
const doubleNumber = makeMultiplier(2);
const tripleNumber = makeMultiplier(3);

console.log(doubleNumber(5));
console.log(tripleNumber(5));