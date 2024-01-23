//반복문 예제

//while문
let num = 1;
while(num <= 1000) {
    console.log(num);
    num++;
}

//do...while 문
do{
    console.log("무조건");
    console.log("한 번은 실행");
}while(false);

//for 문
for(let i=0; i<5; i++) {
    console.log(i);
}

//중첩 for문
for(let i=0; i<2; i++) {
    console.log(`i: ${i}`);
    for(let k=0; k<2; k++) {
        console.log(`k: ${k}`);
    }
}

/** 중첩 for문 결과
 * i: 0
 * k: 0
 * k: 1
 * i: 1
 * k: 0
 * k: 1
 */

//for문과 배열
let arr = ["banana", "apple", "orange"];
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

//for...in(ES6) : 객체, 배열에 반복 접근 가능
let obj = {
    name : "철수",
    age : 20
}
for(let key in obj) {
    console.log(key + ": " + obj[key]);
}
/** 결과
 * name: 철수
 * age: 20
 */

let arr2 = ["banana", "apple", "orange"];
for(let index in arr2) {
    console.log(index + ": " +arr2[index]);
}
/**결과
 * 0: banana
 * 1: apple
 * 2: orange
 */

//break 문
for(let i=0; i<10; i++) {
    console.log(i);
    if(i === 5) break;
}
/**결과
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 */

//continue 문
for(let i=1; i<=10; i++) {
    if(i % 2 === 1) continue;
    console.log(i);
}
/**결과
 * 2
 * 4
 * 6
 * 8
 * 10
 */