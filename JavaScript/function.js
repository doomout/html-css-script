//함수란?

/** 함수 형식 
function 식별자() {}; //식별자가 있으면 네이밍 함수
function (){};//식별자가 없으면 익명 함수
*/

//네이밍 함수
const gugudan = function gugudan() {
    for(let i=1; i<=9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan(); //함수 호출

//익명 함수
const gugudan1 = function() {
    for(let i=1; i<=9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan1(); //함수 호출

//화살표 함수
const gugudan2 = () => {
    for(let i=1; i<=9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan2(); //함수 호출

//매개변수와 인수
function gugudan(num) {
    for(let i=1; i<=9; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
gugudan(3); //3단 출력
gugudan(5); //5단 출력
gugudan(8); //8단 출력

//화살표 함수에서 매개변수 정의
const sum = (num1, num2) => {
    console.log(num1, num2);
};
sum(10, 20);

//기본 값 할당
function sum2(a = 10, b = 20){
    console.log(a, b);
};
sum2(); //10, 20

//return 문 형태 1
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
const result = sum(10, 20);
console.log("out: " + result); //out: 30

//return 문 형태 2
function sum(num1, num2) {
    return num1 + num2;
}
const result2 = sum(10, 20);
console.log("out: " + result2); //out: 30

//return 문 형태 3
const sum = (num1, num2) => num1 + num2;
const result3 = sum(10, 20); //30