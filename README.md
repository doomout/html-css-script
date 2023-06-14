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