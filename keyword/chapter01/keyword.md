- JS에서 사칙연산을 하는 방법을 작성해주세요. 🍠
    - 더하기
        
        ```jsx
        // 덧셈은 + 를 사용
        let a = 10;
        let b = 5;
        let result = a + b;
        console.log(result); // JS에서 콘솔에 result 값 출력(15)
        ```
        
    - 빼기
        
        ```jsx
        // 뺄셈은 - 를 사용
        let a = 10;
        let b = 5;
        let result = a - b;
        console.log(result); // JS에서 콘솔에 result 값 출력(5)
        ```
        
    - 곱하기
        
        ```jsx
        // 곱셈은 * 를 사용
        let a = 10;
        let b = 5;
        let result = a * b;
        console.log(result); // JS에서 콘솔에 result 값 출력(50)
        ```
        
    - 나누기
        
        ```jsx
        // 나눗셈은 / 를 사용
        let a = 10;
        let b = 5;
        let result = a / b;
        console.log(result); // JS에서 콘솔에 result 값 출력(2)
        ```
        
    - 나머지 구하기
        
        ```jsx
        // 나머지 연산은 % 를 사용
        let a = 13;
        let b = 6;
        let result = a % b;
        console.log(result); // JS에서 콘솔에 result 값 출력(1)
        ```
        
    - 거듭 제곱
        
        ```jsx
        // 거듭제곱 연산자 ** 를 사용
        let num1 = 2;
        let num2 = 3;
        let result = num1 ** num2; // result는 8 (2^3)
        console.log(result);
        ```
        
- JS에서 비교 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    
    JS에서의 비교 연산자는 true 또는 false 값을 리턴
    
    1. 크기 비교
        
        ```jsx
        10 > 5; // true
        10 < 5; // false
        10 >= 10; // true
        7 <= 3; // false
        ```
        
    2. 동등 연산자(같음)
        
        ```jsx
        10 == '10'; // true (타입은 달라도 값이 같아서 참)
        7 === '7'; // false (값은 같으나 타입이 달라서 거짓)
        
        // == 은 값만 같아도 true
        // === 은 값과 타입 모두 일치해야 true
        ```
        
    3. 부등 연산자(다름)
        
        ```jsx
        5 != '5'; // 값이 달라야 true 반환
        7 != '5'; // true
        5 !== '5' // 값은 일치하나 타입은 다르므로 true
        
        // != : 값이 다르면 true, 타입이 달라도 자동으로 타입 변환한 후 비교
        // !== : 값 또는 타입 둘 중 하나라도 다르면 true 반환
        ```
        
    4. 객체, 배열 비교
        
        ```jsx
        // 객체나 배열 비교 시 주소값을 비교
        // 동일한 메모리 주소를 가리켜야 true 반환
        
        let arr1 = [1, 2, 3];
        let arr2 = [1, 2, 3];
        console.log(arr1 === arr2); // false (서로 다른 메모리 참조)
        
        let obj1 = { name: 'Gahee' }; // 객체를 가리키는 참조 변수 obj1
        let obj2 = obj1; // 객체의 메모리 주소를 복사
        console.log(obj1 === obj2); // true (같은 객체를 참조)
        
        // 객체, 배열, 함수 등.. 주소를 비교할 때
        // === 와 == 둘 다 사용 가능
        ```
        
- JS에서 증가/감소 연산을 하는 여러가지 방법을 조사하여 정리해주세요. 🍠
    
    ```jsx
    // 증가 연산자(++)
    let a = 3;
    
    // 전위 증가(변수 값 증가 -> 값 반환)
    let b = ++a; // a의 값을 1 증가시키고 그 값을 b에 저장
    console.log(b) // 4
    
    // 후위 증가(변수의 원래 값 반환 -> 변수 값 증가)
    let c = b++; // b의 값을 c에 저장 후, b의 값 1 증가
    console.log(c) // 4
    console.log(b) // 5
    
    // 감소 연산자(--)
    let x = 5;
    
    // 전위 감소
    let y = --x; // x는 4, y도 4
    console.log(y); // 4
    
    // 후위 감소
    let z = y--; // z는 4, y는 3
    console.log(z); // 4
    console.log(y); // 3
    ```
    
- 연산자 우선순위에 대해 작성해주세요. 🍠
    - **괄호 (`()`)**
        - 가장 높은 우선순위
    - **지수 (`*`)**
        - 거듭제곱 연산자. 예: `2 ** 3`
    - **전위 증가/감소 (`++`, `--`)**
        - 예:  `++x`, `--y`
    - **부정 (`-`, `+`), 논리 NOT (`!`)**
        - 단항 부정 및 긍정 연산자, 논리 NOT.
    - **곱셈, 나눗셈, 나머지 (``, `/`, `%`)**
        - 왼쪽에서 오른쪽으로 계산이 진행
    - **덧셈 및 뺄셈 (`+`, ``)**
        - 왼쪽에서 오른쪽으로 평가됩니다.
    - **비교 연산자 (`<`, `<=`, `>`, `>=`)**
        - 값을 비교합니다. 왼쪽에서 오른쪽으로 평가됩니다.
    - **동등 및 부등 (`==`, `===`, `!=`, `!==`)**
        - 값의 동등성을 비교합니다. 왼쪽에서 오른쪽으로 평가됩니다.
    - **논리 AND (`&&`)**
        - 두 조건이 모두 참일 때 참을 반환합니다.
    - **논리 OR (`||`)**
        - 두 조건 중 하나라도 참일 때 참을 반환합니다.
    - **조건 연산자 (`? :`)**
        - 삼항 조건 연산자. 조건에 따라 두 값을 선택합니다.
    - **대입 연산자 (`=`, `+=`, `=` 등)**
        - 값을 대입하는 연산자로, 가장 낮은 우선순위를 가집니다. 오른쪽에서 왼쪽으로 평가됩니다.
- string 🍠
    
    ### string
    
    <aside>
    💡 string 타입에 대해, 직접 구글링하여 아래에 정리해주세요.
    
    </aside>
    
    - string 타입은 문자열을 저장하는 데이터 타입
        
        ```jsx
        let str1 = 'Hello, World!';
        let str2 = "Hello, World!";
        let str3 = `Hello, World!`;
        ```
        
    - 작은 따옴표, 큰 따옴표, 백틱(`)으로 표현
    - 특수 문자
        
        **이스케이프 문자** : 백슬래시를 사용하여 특수 문자 생성
        
        - `\'` : 작은 따옴표
        - `\"` : 큰 따옴표
        - `\\` : 백슬래시
        - `\n` : 줄바꿈
        - `\t` : 탭
    - 문자열 길이 : length 속성
    
    ```jsx
    let name = 'Gahee';
    console.log(name.length); // 5
    ```
    
- symbol
    
    ### Symbol
    
    Symbol 타입은 ES6에서 새롭게 추가된 7번째 타입입니다. 중복되지 않는, 고유한 값들을 나타내기 위해서 만들어 졌습니다. 심벌을 생성하기 위해서는 `Symbol()`을 사용해야 합니다.
    
    왜 Symbol을 사용할까요?
    
    아래의 yongmin이라는 사람도 Matthew라는 영어 이름을 갖고 있고, sua 라는 사람 또한 Matthew 라는 영어 이름을 갖고 있다고 합시다.
    
    ```jsx
    const yongmin = 'Matthew';
    const sua = 'Matthew';
    ```
    
    둘을 `일치 연산자(===)`로 비교하면 어떻게 될까요?
    
    ```jsx
    yongmin === sua // true
    ```
    
    당연히 true가 나옵니다.
    
    하지만, 우리가 원하는 시나리오는, 용민이라는 사람과, 수아라는 사람은 엄연히 다른 사람이기에, false가 나오기를 원한다고 가정해봅시다. 이런 경우 **`Symbol을 활용`**할 수 있습니다.
    
    ```jsx
    const yongmin = Symbol('Matthew');
    const sua = Symbol('Matthew');
    ```
    
    다시 `일치 연산자(===)`로 비교해봅시다.
    
    ```jsx
    yongmin === sua // false
    ```
    
    이처럼 중복되지 않는 어떠한 고유한 값을 나타내고 싶으면 **`Symbol 타입`**을 활용하는 것이 매우 유용합니다.
    
- bigint 🍠
    
    ### bigint
    
    <aside>
    💡 bigint 타입에 대해, 직접 구글링하여 아래에 정리해주세요.
    
    </aside>
    
    ### 1. `BigInt`**는 큰 정수를 정확하게 표현하기 위해 등장**
    
    ### 2. `BigInt` 생성 방법
    
    - **문자열을 사용하여 생성**:
        
        ```jsx
        const bigInt1 = BigInt("123456789012345678901234567890");
        ```
        
    - **접미사 `n`을 사용하여 생성**:
        
        ```jsx
        const bigInt2 = 123456789012345678901234567890n; // 숫자 뒤에 n을 추가
        ```
        
    
    ### 3. `BigInt`의 특징
    
    - **크기**: `BigInt`는 정수의 크기에 제한 X
    - **타입**: `BigInt`는 `typeof` 연산자를 사용하여 확인할 수 있으며, 타입은 `"bigint"`로 반환
        
        ```jsx
        console.log(typeof bigInt1); // "bigint"
        ```
        
    
    ### 4. `BigInt`와 `Number`의 연산
    
    - `BigInt`와 `Number`는 서로 다른 타입이므로 함께 사용할 수 없다
    - `BigInt`와 `Number`를 함께 사용하려면 `Number`를 `BigInt`로 변환해야 함
    
    ### 예시:
    
    ```jsx
    const bigInt = 12345678901234567890n;
    const num = 5;
    
    // 직접 연산할 경우
    // console.log(bigInt + num); // TypeError: Cannot mix BigInt and other types
    
    // 해결 방법: Number를 BigInt로 변환
    const result = bigInt + BigInt(num);
    console.log(result); // 12345678901234567895n
    ```
    
    ### 5. 연산자
    
    `BigInt`는 일반적인 산술 연산자(`+`, `-`, `*`, `/`, `%`)를 지원
    단, 나눗셈(`/`)의 경우 결과는 `BigInt`가 아닌 `Number`로 반환
    
    ### 예시:
    
    ```jsx
    const a = 10n;
    const b = 3n;
    
    console.log(a + b); // 13n
    console.log(a - b); // 7n
    console.log(a * b); // 30n
    console.log(a / b); // 3n (결과는 Number)
    console.log(a % b); // 1n
    ```

    ### DOM 조작 🍠


- 태그 가져오기
    
    ### 1. DOM 요소를 선택하는 방법
    
    - **`getElementById()`**: 특정 **ID**를 가진 요소를 선택
        
        ```jsx
        const element = document.getElementById('myElement');
        ```
        
    - **`getElementsByClassName()`**: 특정 **클래스**를 가진 **모든 요소**를 선택
        
        ```jsx
        const elements = document.getElementsByClassName('myClass');
        ```
        
    - **`getElementsByTagName()`**: 특정 **태그 이름**을 가진 **모든 요소**를 선택
        
        ```jsx
        const elements = document.getElementsByTagName('p')
        ```
        
    - **`querySelector()`**: **CSS 선택자**를 사용하여 **첫 번째 요소**를 선택
        
        ```jsx
        const element = document.querySelector('.myClass'); // 클래스 선택자
        ```
        
    - **`querySelectorAll()`**: **CSS 선택자**를 사용하여 **모든 요소**를 선택
        
        ```jsx
        const elements = document.querySelectorAll('div.myClass');
        ```
        
    
    ### 2. DOM 요소를 수정하는 방법
    
    - **텍스트 수정**: `textContent` 또는 `innerText` 속성을 사용하여 요소의 텍스트를 수정
        
        ```jsx
        element.textContent = '새로운 텍스트';
        ```
        
    - **HTML 수정**: `innerHTML` 속성을 사용하여 요소의 HTML 콘텐츠를 수정
        
        ```jsx
        element.innerHTML = '<strong>새로운 HTML 콘텐츠</strong>';
        ```
        
    - **스타일 수정**: `style` 속성을 사용하여 요소의 CSS 스타일을 수정
        
        ```jsx
        element.style.color = 'red';
        element.style.fontSize = '20px';
        ```
        
    - **속성 수정**: `setAttribute()` 메서드를 사용하여 요소의 속성을 수정
        
        ```jsx
        element.setAttribute('class', 'newClass');
        // 첫 번째 인자 : 설정하고자 하는 속성
        // 두 번째 인자 : 해당 속성에 설정할 값
        ```
        
    
    ### 3. DOM 요소 추가 및 제거 방법
    
    - **요소 생성**: `createElement()` 메서드를 사용하여 새로운 요소를 생성
        
        ```jsx
        const newElement = document.createElement('div'); // 새로운 HTML 요소 생성
        newElement.textContent = '새로운 요소'; // 텍스트 추가
        
        // createElement() 는 DOM에 추가되지 않아서 웹 페이지에 바로 확인이 되지 않음(메모리에만 생성된 상태)
        // 요소를 실제 웹 페이지에 추가하고 싶으면
        // appendChild() 또는 append() 등의 메서드를 사용하여
        // 특정 부모 요소에 추가해야 함
        ```
        
    - **요소 추가**: `appendChild()` 메서드를 사용하여 요소를 추가
        
        ```jsx
        const parentElement = document.getElementById('parent');
        parentElement.appendChild(newElement);
        
        // parentElement : 부모 요소
        // newElement를 appendChild()로 추가
        // => 웹 페이지에 표시됨!
        ```
        
    - **요소 제거**: `removeChild()` 메서드를 사용하여 요소를 제거
        
        ```jsx
        const childElement = document.getElementById('child');
        parentElement.removeChild(childElement);
        ```
        
- 이벤트 리스너 추가하기
    
     `addEventListener()` 메서드를 사용하여 이벤트를 처리합니다.
    
    ```jsx
    element.addEventListener('click', function() {
        alert('클릭되었습니다!');
    });
    ```
    
- 이벤트 리스너 제거하기
    
    ```jsx
    // removeEventListener() 기본 형식
    element.removeEventListener(event, handler);
    ```
    
    - **`element`**: 이벤트 리스너를 제거할 DOM 요소
    - **`event`**: 제거할 이벤트의 유형. 예: `'click'`, `'mouseover'`, `'keydown'` 등
    - **`handler`**: 추가된 이벤트 리스너의 콜백 함수, 동일한 함수 참조(이벤트 리스너 추가&삭제 시 같은 함수 객체를 사용해야 함)
    
    <aside>
    💡
    
    `removeEventListener()`로 이벤트 리스너를 제거할 때,
    
    추가할 때와 정확히 동일한 이벤트 유형과 함수 참조를 사용해야 함
    
    </aside>
    
    ```jsx
    // **이벤트 리스너 제거 방법**
    // 이벤트 핸들러 함수 정의
    function handleClick() {
    	// handleClick() 함수로 클릭 이벤트 리스너를 추가
        console.log('Element clicked!');
    }
    
    // 이벤트 리스너 추가
    const element = document.getElementById('myElement');
    element.addEventListener('click', handleClick);
    
    // 이벤트 리스너 제거
    // removeEventListener()로 동일한 handleClick() 함수와 click 이벤트를 사용해 이벤트 리스너를 제거
    element.removeEventListener('click', handleClick);
    ```
    
    ### **익명 함수로 추가된 리스너 제거**
    
    **익명 함수(이름이 없는 함수)**로 이벤트 리스너를 추가하면, 해당 이벤트 리스너를 제거할 수 없다. 이는 **익명 함수는 참조할 수 없기 때문**이다.
    
    ```jsx
    // 잘못된 예시
    element.addEventListener('click', function() {
        console.log('clicked');
    });
    
    // removeEventListener로는 익명 함수를 제거할 수 없음
    element.removeEventListener('click', function() {
        console.log('clicked');
    });
    
    // 이렇게 작성하면 이벤트 리스너를 제거할 수 없다.
    // removeEventListener()에서 사용한 함수는 addEventListener()에서 사용한 익명 함수와 다름!
    ```
    
- 키보드와 마우스 이벤트
    
    ### **1. 키보드 이벤트 (Keyboard Events)**
    
    - **주요 키보드 이벤트**
        - **`keydown`**: 키를 누르는 순간 발생
        - **`keyup`**: 키를 뗀 순간 발생
        - **`keypress`**: 키를 누르는 동안 발생 (현재는 `keydown`과 `keyup`으로 대체되고 있으며, 특수 키를 인식하지 못함)
    - **기본 사용법**
    
    ```jsx
    document.addEventListener('keydown', function(event) {
        console.log(`Key pressed: ${event.key}`); // 누른 키의 값을 출력
    });
    ```
    
    - **주요 속성**
        - **`event.key`**: 눌린 키를 문자열로 반환
            
            예를 들어, `'a'`, `'Enter'`, `'ArrowUp'` 등.
            
        - **`event.code`**: 물리적인 키 위치에 해당하는 코드를 반환
            
            예: `'KeyA'`, `'ArrowLeft'`.
            
        - **`event.shiftKey`**, **`event.ctrlKey`**, **`event.altKey`**: 사용자가 Shift, Ctrl, Alt 등의 보조키를 함께 눌렀는지 여부를 확인하는 속성
    - **키보드 이벤트 예시**
    
    ```jsx
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            console.log('Enter 키를 눌렀습니다!');
        }
    });
    
    document.addEventListener('keyup', function(event) {
        console.log('키에서 손을 뗐습니다:', event.key);
    });
    ```
    
    ### 2. **마우스 이벤트 (Mouse Events)**
    
    - **주요 마우스 이벤트**
        - **`click`**: 마우스를 클릭했을 때 발생
        - **`dblclick`**: 더블 클릭했을 때 발생
        - **`mousedown`**: 마우스 버튼을 누르는 순간 발생
        - **`mouseup`**: 마우스 버튼에서 손을 떼는 순간 발생
        - **`mousemove`**: 마우스를 움직일 때 발생
        - **`mouseenter`**: 마우스가 요소 위로 들어왔을 때 발생
        - **`mouseleave`**: 마우스가 요소에서 나갔을 때 발생
    - **기본 사용법**
    
    ```jsx
    const button = document.getElementById('myButton');
    
    button.addEventListener('click', function() {
        console.log('버튼이 클릭되었습니다!');
    });
    ```
    
    - **주요 속성**
        - **`event.clientX`**: 브라우저 창 기준으로 마우스가 클릭된 X 좌표를 반환합니다.
        - **`event.clientY`**: 브라우저 창 기준으로 마우스가 클릭된 Y 좌표를 반환합니다.
        - **`event.button`**: 클릭된 마우스 버튼을 나타냅니다 (0: 왼쪽 버튼, 1: 중간 버튼, 2: 오른쪽 버튼).
        - **`event.ctrlKey`**, **`event.shiftKey`**: 키보드 보조키가 눌렸는지 확인할 수 있습니다 (예: Ctrl+클릭).
    - **마우스 이벤트 예시**
    
    ```jsx
    document.addEventListener('click', function(event) {
        console.log(`X 좌표: ${event.clientX}, Y 좌표: ${event.clientY}`);
    });
    
    document.addEventListener('dblclick', function(event) {
        console.log('더블 클릭이 발생했습니다!');
    });
    ```
    
- 태그 속성 다루기
    
    ### 1. **`id`**
    
    - **설명**: 요소를 고유하게 식별하는 속성
    - **예시**:
        
        ```html
        <div id="header">Header Content</div>
        ```
        
        ```jsx
        javascript
        코드 복사
        const header = document.getElementById('header');
        
        ```
        
    
    ### 2. **`class`**
    
    - **설명**: 하나 이상의 CSS 클래스 이름을 지정하는 속성, CSS이나 JS에서 요소를 선택할 때 사용
    - **예시**:
        
        ```html
        <div class="container active">Content</div>
        ```
        
        ```jsx
        const element = document.querySelector('.container');
        ```
        
    
    ### 3. **`src`**
    
    - **설명**: 이미지, 스크립트 파일 등의 경로를 지정할 때 쓰고 주로 `<img>`, `<script>`, `<iframe>` 태그와 같이 사용한다.
    - **예시**:
        
        ```html
        <img src="image.jpg" alt="A sample image">
        ```
        
        ```jsx
        const image = document.querySelector('img');
        image.src = 'new-image.jpg'; // 이미지 경로를 변경
        ```
        
    
    ### 4. **`href`**
    
    - **설명**: `<a>` 태그에 주로 사용되며, 클릭 시 이동할 URL 지정
    - **예시**:
        
        ```html
        <a href="https://example.com">Go to Example</a>
        ```
        
        ```jsx
        const link = document.querySelector('a');
        link.href = 'https://new-link.com'; // 링크 경로 변경
        ```
        
    
    ### 5. **`alt`**
    
    - **설명**: 이미지가 로드되지 않을 때 대신 표시되는 대체 텍스트
    - **예시**:
        
        ```html
        <img src="image.jpg" alt="A description of the image">
        ```
        
    
    ### 6. **`style`**
    
    - **설명**: HTML 요소에 인라인 스타일을 직접 지정 (인라인 스타일 대신 CSS 파일을 사용하는 것이 유지보수 측면에서 더 좋다)
    - **예시**:
        
        ```html
        <p style="color: red;">This text is red.</p>
        ```
        
        ```jsx
        const paragraph = document.querySelector('p');
        paragraph.style.color = 'blue'; // 색상을 동적으로 변경
        ```
        
    
    ### 7. **`title`**
    
    - **설명**: 요소에 대한 설명 또는 힌트를 제공하는 속성이다.
    사용자가 마우스를 요소 위에 올리면 브라우저에 툴팁 형태로 표시가 된다.
    - **예시**:
        
        ```html
        <a href="#" title="Click to learn more">Learn More</a>
        ```
        
    
    ### 8. **`value`**
    
    - **설명**: 폼 요소(`<input>`, `<textarea>`, `<button>` 등)의 값을 나타낸다. 사용자 입력을 처리할 때 유용하다.
    - **예시**:
        
        ```html
        
        <input type="text" value="Default text">
        ```
        
        ```jsx
        const input = document.querySelector('input');
        input.value = 'New text'; // 입력값을 동적으로 변경
        ```
        
    
    ### 9. **`disabled`**
    
    - **설명**: 요소를 비활성화할 때 사용하는 속성
    주로 폼 요소에 사용되며, 사용자가 해당 요소와 상호작용하지 못하도록 막는다.
    - **예시**:
        
        ```html
        <button disabled>Submit</button>
        ```
        
        ```jsx
        const button = document.querySelector('button');
        button.disabled = false; // 버튼을 활성화
        ```
        
- 부모와 자식 태그 찾기
    
    **`parentElement`** 및 **`children`** 속성을 사용하거나 **`querySelector`** 메서드를 이용하는 방법이 있다.
    
    ### 1. **부모 태그 찾기 (`parentElement`)**
    
    **`parentElement`** 속성을 사용하면 현재 요소의 **직접 부모 요소**를 찾을 수 있다.
    
    ### 예시:
    
    ```html
    <div id="parent">
      <p id="child">This is a child element.</p>
    </div>
    ```
    
    ```jsx
    const child = document.getElementById('child');   // 자식 요소 선택
    const parent = child.parentElement;              // 부모 요소 찾기
    console.log(parent.id);  // "parent" 출력
    ```
    
    - *`parentElement`*는 선택된 요소의 **직접 부모**를 반환함
    - 만약 부모가 없으면 `null`을 반환함
    
    ### 2. **모든 자식 태그 찾기 (`children`)**
    
    **`children`** 속성은 특정 요소의 **직접 자식 요소**들을 컬렉션 형태로 반환한다.
    
    ### 예시:
    
    ```html
    <div id="parent">
      <p>First child</p>
      <p>Second child</p>
      <span>Third child</span>
    </div>
    ```
    
    ```jsx
    const parent = document.getElementById('parent');
    const children = parent.children;  // 자식 요소들을 모두 가져오기
    console.log(children.length);      // 자식 요소의 수 출력 (3)
    console.log(children[0].tagName);  // 첫 번째 자식 요소의 태그 이름 출력 ("P")
    ```
    
    - *`children`*은 부모 요소의 자식 요소들을 반환하며, 텍스트 노드나 주석은 제외
    - 자식 요소에 접근할 때는 배열처럼 인덱스를 사용한다.
    
    ### 3. **첫 번째 및 마지막 자식 요소 찾기**
    
    - **`firstElementChild`**: 첫 번째 자식 요소를 반환
    - **`lastElementChild`**: 마지막 자식 요소를 반환
    
    ### 예시:
    
    ```jsx
    const firstChild = parent.firstElementChild;
    const lastChild = parent.lastElementChild;
    console.log(firstChild.tagName);  // 첫 번째 자식의 태그 이름 출력
    console.log(lastChild.tagName);   // 마지막 자식의 태그 이름 출력
    ```
    
- 새로운 태그 만들기
    
     **`document.createElement()`** 메서드를 사용한다.
    
    - 이 메서드는 지정한 태그 이름으로 새로운 요소를 생성한다.
    - 생성된 요소는 아직 DOM 트리에 추가되지 않아서 실제 웹 페이지에는 보이지 않는다.
    - DOM에 추가하려면 **`appendChild()`** 또는 **`insertBefore()`**와 같은 메서드를 사용하면 된다.
    
    ### 기본 사용법:
    
    ```jsx
    const newElement = document.createElement('div');  // 새로운 <div> 요소 만들기
    newElement.textContent = 'This is a new div element';  // 텍스트 설정
    
    // DOM에 추가
    document.body.appendChild(newElement);  // <body> 태그의 자식으로 추가
    ```
    
    ### 속성 추가 및 스타일 변경:
    
    새로운 요소를 생성한 후 속성이나 스타일을 추가할 수도 있다.
    
    ```jsx
    const newElement = document.createElement('a');   // 새로운 <a> 요소 만들기
    newElement.textContent = 'Click me';
    newElement.href = 'https://example.com';          // href 속성 설정
    newElement.target = '_blank';                     // 새 창에서 열리도록 설정
    newElement.style.color = 'blue';                  // 스타일 설정
    
    document.body.appendChild(newElement);            // <body>에 추가
    ```
    
    ### 자식 요소 추가:
    
    생성한 요소에 다른 자식 요소를 추가할 수도 있다.
    
    ```jsx
    const newDiv = document.createElement('div');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a paragraph inside the div';
    
    // <div>에 <p> 자식 요소 추가
    newDiv.appendChild(newParagraph);
    
    document.body.appendChild(newDiv);  // <div> 요소를 <body>에 추가
    ```
    
- 태그 복제하기
    
    기존 요소를 복제하려면 **`cloneNode()`** 메서드를 사용한다.
    
    - 이 메서드는 해당 요소의 복사본을 반환하며, `true` 또는 `false` 인수를 전달하여 자식 요소까지 복제할지 여부를 결정할 수 있다.
    - **`cloneNode(false)`**: 요소 자체만 복제 (자식 요소는 복제되지 않음)
    - **`cloneNode(true)`**: 요소와 그 내부의 모든 자식 요소까지 모두 복제
    
    ### 기본 사용법:
    
    ```html
    <div id="original">
      <p>This is the original paragraph.</p>
    </div>
    ```
    
    ```jsx
    const originalElement = document.getElementById('original');
    
    // 요소만 복제 (자식은 복제되지 않음)
    const shallowClone = originalElement.cloneNode(false);
    document.body.appendChild(shallowClone);  // 복제된 요소를 DOM에 추가
    
    // 요소와 자식까지 모두 복제
    const deepClone = originalElement.cloneNode(true);
    document.body.appendChild(deepClone);  // 복제된 요소를 DOM에 추가
    ```
    
    ### 차이점:
    
    - `cloneNode(false)`는 `<div id="original">`만 복제하고, 그 안의 `<p>` 요소는 복제하지 않는다.
    - `cloneNode(true)`는 `<div>` 와 그 내부의 모든 자식인 `<p>` 요소까지 복제한다.