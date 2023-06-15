document.write("외부 스크립트 방법\n");
console.log("확장 프로그램으로 출력하기");


let string1 = `문자열은 큰 따옴표(")나 작은 따옴표(')로 감싸면 된다.\n`;
let string2 = `문자열은 큰 따옴표(")나 
                작은 따옴표(')로 감싸면 된다.\n`; //줄 바꿈

console.log(string1);
console.log(string2);


let dan = 2;
let gugu = 8;
let string3 = `${dan}  곱하기 ${gugu} 은 ${dan * gugu}입니다.\n`; //변수 또는 식 넣음
console.log(string3);

document.write(string1);
document.write(string2);
document.write(string3);