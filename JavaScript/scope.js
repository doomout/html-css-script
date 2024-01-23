/** 함수의 특징
 * 스코프
 */

//////////////함수 스코프///////////
//전역 스코프
let a = 10; 
function sum() {
    console.log(`함수 내부: ${a}`);
}
sum();
console.log(`함수 외부: ${a}`);
/**결과
 * 함수 내부: 10
 * 함수 내부: 10
 */

//지역 스코프
 function sum() {
    let b = 10;    console.log(`함수 내부: ${b}`);
}
sum();
console.log(`함수 외부: ${b}`);
/**결과
 * 함수 내부: 10
 * 에러
 */

////////////블록 스코프/////////////
//let, const 키워드에서만 발생(ES6)
let c = 10;
{
    let d = 20;
    console.log(`코드 블록 내부 c: ${c}`);
    console.log(`코드 블록 내부 d: ${d}`);
}
console.log(`코드 블록 외부 c: ${c}`);
console.log(`코드 블록 외부 d: ${d}`);
/**결과
 * 코드 블록 내부 c: 10
 * 코드 블록 내부 d: 20
 * 코드 블록 외부 c: 10
 * 오류
 */

//var 키워드는 함수 스코프 방식으로만 나누기에 오류 발생 안함
var c1 = 10;
{
    var d1 = 20;
    console.log(`코드 블록 내부 c: ${c1}`);
    console.log(`코드 블록 내부 d: ${d1}`);
}
console.log(`코드 블록 외부 c: ${c1}`);
console.log(`코드 블록 외부 d: ${d1}`);
/**결과
 * 코드 블록 내부 c1: 10
 * 코드 블록 내부 d1: 20
 * 코드 블록 외부 c1: 10
 * 코드 블록 외부 d1: 20
 */