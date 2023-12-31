웹 기초인 html, css, JavaScript 를 공부  
도서 - 코딩 자율 학습 HTML+CSS+자바스크립트  
사용 IDE - VSCode  
사용 VSCode 확장 프로그램  
- Live Server : 가상서버를 통해 실시간 확인 가능
- Auto Rename Tag : html 의 시작,종료 태그를 한쪽이 수정하면 반대쪽도 자동으로 수정해줌
- Html to Css autocompletion : html 문서에서 class 속성에 작성한 값을 연결된 css 파일에서 자동 완성
- HTML CSS Support : CSS 파일에서 작성한 클래스나 아이디 선택자 값을 연결된 HTML 문서의 id 속성과 class 속성으로 적을 때 자동 완성
- Code Runner : 자바스크립트 코드의 실행을 VSCode 내부에서 할 수 있게 지원  
무료 온라인 강의 사이트 : https://www.sucoding.kr/
--------------------------------------------------------------------------------------------------
1. HTML  
(1) 주요 HTML 태그  
```html
- <p> : 하나의 문단을 작성 할 때
- <br> : 줄 바꿈
- <blockquote cite="출처 URL">문단 단위 인용문</blockquote> : 출처가 필요한 문단 단위 인용문에 사용
- <q cite="출처 URL">짧은 인용문</q> : 텍스트 단위의 짧은 인용문 사용할 때 사용
- <ins>추가 태그</ins> : 새로 추가된 텍스트 임을 표시(밑줄)
- <del>삭제 태그</del> : 삭제할 텍스트 임을 표시(취소선)
- <sub>아래 첨자</sub> : 아래 쪽에 첨자를 표시
- <sup>위 첨자</sup> : 위 쪽에 첨자를 표시
- <div> : 블록 요소와 인라인 요소를 그룹으로 묶을 때 사용
- <span> : 인라인 요소를 그룹으로 묶을 때 사용
- <ul> : 순서가 없는 비순서형 목록 생성에 사용
- <li> : 글머리 기호 사용
- <ol> : 순서형 목록(1,2,3,~~ )
- <dl> : 정의형 목록 <dt><dl>을 사용해야 함
- <dt> : <dl>에서 제목 부분
- <dd> : <dl>에서 본문 부분
- <a> : 내부나 외부 링크 생성(<a href="대상 경로" target="링크 연결 방식" title="링크 설명">)
- <img> : 이미지 객체를 삽입할 때(<img src="이미지 경로" alt="이미지 설명">)
    - 이미지 경로는 웹 브라우저에서 실행되는 HTML 파일 위치 기준
(예) <a href="https://www.google.com" target="_blank">
        <img src="./google_logo.png" alt="구글 로고">
     </a>
- <strong> : 중요한 의미가 있는 텍스트
- <em> : 텍스트 강조
```
(2) 폼 구성 태그
```html
- <form> : 폼 양식 태그, 폼 구성의 시작과 끝(<form action="서버 url" method="get 또는 post"></form>)
- <input> : 입력 받는 요소를 생성 (<input type="속성" name="이름" value="초기값">)
    - 자주 쓰는 속성 : text, password, number, url, search, url, email, checkbox, radio, 
                     file, button, image, hidden, date, month, week, time, color, submit, reset
- <label> : form 태그 안에서 사용하는 상호작용 요소에 이름을 붙일 때 사용
(예) <label for="userpw">비밀번호</label><!--명시적 방법 (label을 클릭해도 input에 커서 이동)-->
     <input type="password" id="userpw"> <!--for와 이름이 같아야 함-->
- <fieldset> : 그룹으로 지정(그룹 박스와 동일)
(예) 
    <fieldset>       
        <legend>선택 정보</legend>
        <p>
            <label for="age">나이</label>
            <input type="number" id="age">
        </p>
    </fieldset>
- <textarea> : 두 줄 이상의 글을 쓸 때 사용
- <textarea id="id" name="name">
    - id="id"는 <textarea> 요소의 고유 식별자로 사용
    - name="name"은 폼 요소의 이름을 나타내는 속성
- <select> : 콤보 박스(<select name="city" id="city" size="4" multiple>)<!--4개씩 표시, 다중 선택-->
    -<optgroup> : 콤보 박스를 그룹으로 묶을 때 
        -<option> : 서버에 전송할 값
- 폼 태그에서 공통으로 사용 가능한 추가 속성
    - disabled : 비활성화
    - readonly : 읽기 전용
    - maxlength : 입력할 수 있는 글자수 설정
    - checked : 선택된 상태로 표시
    - placeholder : 입력 요소에 대한 힌트 설정
```
(3) 표 관련 태그
```html
- <table> : 표 생성시 사용
- <caption> : 표 제목 표시(table 태그 안에서 첫번째로 작성 해야 함)
- <tr> : 행(가로) 생성
- <th> : 표에서 제목을 나타내는 열을 생성할 때
- <td> : 표에서 일반적인 데이터를 나타내는 열 생성
    - rowspan : 행 병합
    - colspan : 열 병합
<!--행을 묶여서 그룹화 하는 태그 (하단 3개 순서대로 설정해야 한다.)-->
- <thead> : 헤더 영역에 해당하는 행
- <tfoot> : 푸터 영역에 해당하는 행
- <tbody> : 본문 영역에 해당하는 행
```
(4) 멀티미디어 태그
```html
- <audio> : 오디오 파일 재생(<audio src="오디오 파일 경로" controls>)
    - 지원 포멧 : mp3, wav, ogg
- <video> : 비디오 파일 재생(<video src="비디오 파일 경로" controls>)
    - 지원 포멧 : mp4, WebM, ogg
- <source> : 오디오, 비디오 태그에서 리소스(파일)의 경로와 미디어 타입을 명시하는데 사용
```
(5) 글로벌 속성
```html
- class : 요소에 클래스 값을 지정. CSS에서 클래스 선택자로 활용
- id : 요소에 아이디 값을 지정. CSS에서 아이디 선택자로 활용
- style : 요소에 인라인 스타일을 지정
- title : 요소에 추가 정보 지정, 마우스를 위에 올리면 툴팁으로 추가 정보가 표시
- lang : 요소에 사용한 텍스트의 언어 정보를 지정
- hidden : 요소를 화면에서 감춤
- data-* : 사용자가 임의의 속성 만들 수 있음
```
--------------------------------------------------------------------------
2. CSS  
(1) CSS 문법 형식
```css
- 선택자와 선언부로 구분
/**  
* : 전체 적용
태그명 : 해당 태그에만 적용
#id 속성값 : 해당 id만 적용
.class : 해당 class 적용(속성값을 중복으로 사용 가능)
*/
- h1{ 
    font-size:24px; 
    color:red;
    } /*선택자 {속성 : 값}*/
``` 
(2) CSS 적용하기
```css
- 내부 스타일 시트 : HTML 문서 내부에 style 태그로 CSS 코드를 작성
<style>
    /* CSS 코드 */
</style>

- 외부 스타일 시트 : 별도의 CSS 파일 만들어 HTML 문서와 link 태그로 연결(주로 사용)
<link rel="stylesheet" href="css 파일 경로">

- 인라인 스타일 적용 : style 속성을 사용해서 CSS 적용하는 방법(비추)
<태그 style="CSS 코드"></태그>
```
(3) CSS 요약
1) 선택자 : CSS 속성을 적용할 대상을 선택하는 문법
2) 기본 선택자 
    - 전체 선택자: 모든 태크를 선택자로 지정
    - 태그 선택자: 태그명을 선택자로 지정
    - 아이디 선택자: id 속성값으로 선택자 지정
    - 클래스 선택자: class 속성값으로 선택자 지정
    - 기본 속성 선택자: HTML 태그 속성과 값으로 선택자 지정
    - 문자열 속성 선택자: 태그의 속성값이 특정한 문자열과 일치하는 요소를 선택자로 지정
3) 조합 선택자
    - 그룹 선택자: 여러 선택자를 , 기호로 구분해 선택자를 그룹으로 묶어 지정
    - 자식 선택자: 선택자 범위를 자식 관계로 제한하고, > 기호를 구분자로 사용
    - 하위 선택자: 범위를 자식, 자손 관계로 제한하고, 공백 을 구분자로 사용
    - 인접 형제 선택자: 특정 태그와 가장 인접한 형제 관계 태그를 선택자로 사용하고, + 기호를 구분자로 사용
    - 일반 형제 선택자: 특정 태그와 형제 관계에 있는 모든 태그를 선택자로 지정하고, ~ 기호를 구분자로 사용
4) 가상 요소 선택자
    - ::before : 요소의 맨 앞 선택
    - ::after : 요소의 맨 뒤 선택
5) 가상 클래스 선택자
    - :link : 링크를 한번도 방문한 적이 없는 상태
    - :visited : 링크를 한번 이상 방문한 적이 있는 상태
    - :hover : 마우스를 올린 상태
    - :active : 마우스로 클릭한 상태
    - :focus : 입력 요소에 커서가 활성화 된 상태
    - :checked : 체크박스 요소에 체크한 상태
    - :disabled : 상호 작용 요소가 비활성화 된 상태
    - :enabled : 상호 작용 요소가 활성화된 상태
    - :first-child : last-child 첫 번째 자식 태그와 마지막 자식 태그
    - :nth-child(n), : n번째 자식 태그와 끝에서 n번째 자식 태그
    - :nth-of-type(n), : n번째 특정 자식 태그와 끝에서 n번째 특정 자식 태그
    - :first-of-type. : 부모의 첫 번째 특정 자식 태그와 마지막 특정 자식태그
6) 박스 모델의 구성 요소
    - margin : 요소의 외부 여백을 의미
    - boarder : 요소의 테두리(경계선)을 의미
    - padding : 요소의 내부 여백을 의미
    - content : 요소의 내용을 의미
--------------------------------------------------------------------------------
3. JavaScript
1) 자바스크립트 코드 작성법
    - 내부 스크립트 : HTML 문서 안에서 script 태그의 콘텐츠 영역에 코드 작성
    - 외부 스크립트 : 별도의 js 파일 작성 후 HTML 문서에서 script 태글 연결
    - script 태그의 사용위치 : (/body) 바로 위에 작성하는 것이 좋음
2) 주석
    - 한줄 주석 : //한줄 주석
    - 여러줄 주석 : /* 여러줄 주석 */ 
3) 몇 가지 주의점
    - var 보단 let 로 변수 선언: let는 변수명 중복 불가능, 호이스팅 불가로 안정적
    - 상수 값은 const로 선언: 재할당 할 일 없는 값은 고정으로 두는게 안전
    - 식별자의 첫 글자는 영문 소문자, _ , $ 기호만 가능
    - 식별자에 공백은 불가
    - 카멜표기법 : 변수명과 함수명 작성시 (firstName, lastName)
    - 언더스코어 표기법 : 상수명 작성시 (FIRST_NAME, last_name)
    - 논리형 : true, false 값만 가능
    - undefined : 변수나 상수에 데이터 미할당시 자동으로 할당되는 값
    - null 자료형: 변수나 상수를 선언하고 의도적으로 공단 비울 때 사용
    - 파스칼 표기법 : 생성자 함수명 작성시 (FirstName, LastName)
    - 문자열에 " 나 ' 가 있으면 + 연산자로 합칠 수 있다.  
        ('문자열은 큰 따옴표("")나 ' + "작은 따옴표('')로 감싸면 된다.")
    - 문자열을 정의할 때 사용하는 기호지만, 역슬래시(\)를 붙이면 순수한 문자로 인식
        ('문자열은 큰 따옴표(")나 작은 따옴표(\')로 감싸면 된다.')
    - ES6에서 추가된 템플릿 문자열 사용 예 (백틱(`) : ~표시 위에 있는 문자)
```script
let string = `문자열은 큰 따옴표(")나 작은 따옴표(')로 감싸면 된다.`;
let string2 = `문자열은 큰 따옴표(")나 
                작은 따옴표(')로 감싸면 된다.`; //줄 바꿈
console.log(string);
console.log(string2);
let dan = 2;
let gugu = 8;
let string3 = `${dan}  곱하기 ${gugu} 은 ${dan * gugu}입니다.`; //변수 또는 식 넣음
console.log(string3);
```

4) 객체 자료형
    - 배열 : 복수의 데이터를 정의
    - 객체 리터널 : 객체를 정의 할 때 {key : value} 으로 이루어진 속성으로 정의
```script
//배열로 저장
let studentScore = [80, 70, 90, 60]; //국어, 영어, 수학, 과학 점수
console.log(studentScore[1]); // 1번 인덱스(영어) 점수

//객체 리터널
let studentScore = {
    koreanScore : 80,
    englishScore : 70,
    mathScore : 90,
    scienceScore : 60
};
console.log(studentScore.koreanScore); //80 - . 로
console.log(studentScore['englishScore']); //70 - [] 로
```

5) 연산자 중 특이점
    - 전치연산 (++x) : x를 먼저 1 증가 시킨다.
    - 후치연산 (x++) : x를 할당하고 후에 1증가 시킨다. 
    - 비교 연산자 
        - x == y : x 와 y의 값이 같으면 true 반환
        - x === y : x와 y의 값과 자료형이 같으면 true 반환
        - x != y : x 와 y의 값이 다르면 true 반환
        - x !== y : x와 y의 값과 자료형이 다르면 true 반환
    - 논리 연산자
        - x && y : x가 참이면 y반환, 거짓이면 x반환
        - x || y : x가 참이면 x반환, 거짓이면 y반환
        - !x : x가 참이면 false 반환, 거짓이면 true 반환
        - 자료형 중 ""(빈 문자열), undefined, 0, null은 거짓으로 평가
    - 삼항 연산자
        - x ? y : z (x가 참이면 y반환, 거짓이면 z 반환)
6) 형 변환
    
```script
//암시적 형 변환 
const result = 10 + "10"; //자동으로 숫자를 문자열로 변환
console.log(result); //결과값 : 1010

let num = 10;
let strNum = "10";
if(num == strNum) { //자동으로 문자열을 숫자형으로 변환
    console.log(`equals`);
}

//명시적 형 변환(추천)
let num = 10;
let strNum = "10";
if(String(num) == strNum) {
    console.log(`equals`);
}
```
7) 조건문
    - if문은 조건식에 식을 이용, swich문은 조건에 값을 사용
```script
if(조건식1) {
    //조건식1 이 참일 때 실행
}else if(조건식2){
    //조건식2 가 참일 떄 실행
}else {
    //조건식이 모두 거짓일 때 실행
}

switch(key) {
    case value1 : 
        //key 가 value1 일 때 실행
        break;
    case value2 : 
        //key 가 value2 일 때 실행
        break;
    default:
        //아무것도 일치하지 않을 때 실행
        break;
}
```
8) 반복문
```script
while(조건식) {
    //조건식이 참이면 실행
}

do {
    //처음에 무조건 실행
}while(조건식);

for(초기값; 조건식; 증감식) {
    //블럭문
}

for(가변수 in 배열/객체 리터럴) {
    //블록문
}

break 문 : 반복문 종료
continue 문 : 반복문을 건너 뛰고 다시 반복
```
9) 함수
- const 변수명 = function(){}; //익명함수
- const 변수명 = function 식별자() {}; //네이밍 함수
- 함수 표현식으로 함수를 정의 할 땐 const 키워드를 주로 사용
- 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인정하는 방식
- 함수 내부는 지역 스코프, 함수 외부는 전역 스코프 영역
- 함수 호이스팅 : 코드를 선언과 할당으로 분리해 선언부를 자신의 스코프 최상위로 끌어 올리는 것
```script
//네이밍 함수
const gugudan = function gugudan() {
    for(let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan(); //함수 호출

//화살표 함수(익명 함수) : ES6 에서 추가 된 함수. 함수를 호출하려면 정의된 함수를 변수에 할당 해야 함
const gugudan = () =>{
    for(let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
};
gugudan(); //함수 호출

/*
함수 기능 확장(매개변수와 인수)
매개변수 : 외부에서 전달하는 데이터를 함수에서 받을 수 있도록 정의
인수 : 함수를 호출할 때 () 안에 전달하고 싶은 데이터를 정의
*/
function gugudan(dan) { //dan: 매개변수
    for(let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
};
//()안에 있는 숫자가 인수
gugudan(3); //3단 출력
gugudan(5); //5단 출력
gugudan(8); //8단 출력

//화살표 함수에서 매개변수 정의
const sum = (num1, num2) => {
    console.log(num1, num2);
};
sum(10, 20);

//기본값 할당
function sum(a = 10, b = 20) {
    console.log(a, b);
}
sum(); //10, 20

//return 문 : 함수 외부로 데이터를 반환 할 때 사용
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
const result = sum(10, 20);
console.log("out : " + result); //out : 30
```
10) 객체 선언, 접근법

```script
//객체 속성에 접근하기
const person = {
    name:"kim",
    age: 20
};
//객체 속성에 접근하려면 객체명 뒤에 대괄호[]를 붙이고 [] 안에 키를 넣는다.
//키는 반드시 "" 나 ''로 감싼 문자열 형태로 작성해야 한다.
console.log(person["name"]); //kim
console.log(person["age"]); //20

const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes : ["apple", "samsung"],
    printHello : function() {
        return "hello";
    }
};
//[] 연산자로 접근
console.log(person["name"]["firstName"]);  //Gildong
console.log(person["likes"][0]); //apple 
console.log(person["likes"][1]); //samsung
console.log(person["printHello"]()); //hello

//. 연산자로 접근
console.log(person.name.firstName);  //Gildong
console.log(person.age);  //20
console.log(person.likes[0]);  //apple 배열 호출에는 [index] 사용
console.log(person.printHello());  //hello 함수 호출에는 ()를 사용
```