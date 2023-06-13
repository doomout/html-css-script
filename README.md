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
```