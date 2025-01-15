//콜백 함수
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