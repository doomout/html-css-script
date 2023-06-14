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
- <form> : 폼 양식을 의미하는 태그, 폼 구성의 시작과 끝(<form action="서버 url" method="get 또는 post"></form>)
- <input> : 입력 받는 요소를 생성 (<input type="속성" name="이름" value="초기값">)
    - 자주 쓰는 속성 : text, password, number, url, search, url, email, checkbox, radio, 
                     file, button, image, hidden, date, month, week, time, color, submit, reset
    - name : 입력 요소의 이름, form 태그에 의해 서버로 전송될 때 name 속성에 적힌 값이 이름으로 저장
    - value : 입력 요소의 초기값 설정
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