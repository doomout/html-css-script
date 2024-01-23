document.write("외부 스크립트 방법\n");
console.log("확장 프로그램으로 출력하기");

/** 에러 발생 string1, string2
let string1 = "문자열은 큰 따옴표(")나 작은 따옴표(')로 감싸면 된다.\n"; 
let string2 = '문자열은 큰 따옴표(")나  작은 따옴표(')로 감싸면 된다.\n'; 
*/

//서로 반대되는 "" 와 ''와 +로 해결
let string3 = '문자열은 큰 따옴표(")나'  + "작은 따옴표(')로 감싸면 된다.\n"; 

//ES6 이상은 `으로 해결(키보드 1 왼쪽에 있는 키)
let string4 = `문자열은 큰 따옴표(")나 작은따옴표(')으로 감싸면 됩니다.`;

//엔터도 그대로 줄바꿈으로 인식
let string5 = `문자열은 큰 따옴표(")나 
               작은따옴표(')으로 감싸면 됩니다.`;

//${}문법으로 변수 또는 식을 넣을 수도 있음
let dan = 2;
let gugu = 8;
let string6 = `${dan}  곱하기 ${gugu} 은 ${dan * gugu}입니다.\n`; //변수 또는 식 넣음

//숫자형
let num1 = 10;
let num2 = 0.1;
console.log(num1);
console.log(num2);

//console.log(string1);
//console.log(string2);
console.log(string3);
console.log(string4);
console.log(string5);
console.log(string6);

//객체 리터럴
let studentScore = {
    koreanScore : 80,
    englishScore : 70,
    mathScore : 90,
    sienceScore : 60
};
console.log(studentScore.koreanScore); //.연산자도 사용 가능
console.log(studentScore['englishScore']); //[]도 사용 가능

