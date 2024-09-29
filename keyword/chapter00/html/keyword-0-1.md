- 시맨틱 태그란?
    - div 태그로만 페이지를 구조화 하는 것이 좋은가? 🍠
        
        NO, <div>만 사용하면 페이지에서 무슨 구역인지 코드만 보고 파악하기가 어려워진다. 즉, 유지보수에 혼란이 올 수 있다.

- 기타 태그 추가 정리해보기 🍠
    
    <aside>
    💡 다양한 태그들을 정리해봐요~!
    
    </aside>
    
    - **`<div>`**: 블록 요소로, 컨텐츠를 묶는 용도로 사용한다. 레이아웃을 나눌 때 많이 쓰이지만, 시맨틱 태그는 아니다.
    - **`<p>`** : 단락(paragraph)을 나타내는 태그, 텍스트를 여러 단락으로 나눌 때 사용한다.
    - **`<a>`** : 하이퍼링크를 만드는 태그, 다른 페이지나 외부 링크로 연결할 때 **`<a href="URL">텍스트</a>`** 형식으로 사용한다.
    - **`<h1> <h2>, … , <h6>`** : 제목 태그, `<h1>`이 가장 큰 제목이고 `<h6>`이 가장 작은 제목.
    - **`<img>`** : 이미지를 삽입할 때 쓰는 태그,  `src` 속성으로 이미지 경로를 지정
    - **`<ul>, <ol>, <li>`** : 리스트를 만들 때 사용하는 태그들
        - `<ul>`: 순서 없는 리스트 (점으로 표시되는 목록)
        - `<ol>`: 순서 있는 리스트 (숫자나 문자로 표시되는 목록)
        - `<li>`: 리스트 항목
    - **`<form>`** : 사용자 입력을 받기 위한 양식을 만들 때 쓰는 태그,`<input>`, `<textarea>`, `<button>` 같은 태그들이 들어간다.
    - **`<section>`**:
        - 주제를 기반으로 한 **큰 묶음**
        - 예를 들어, 페이지의 다른 부분들과 관련된 콘텐츠들이 모여 있는 영역이다.
        - 보통 여러 하위 요소들이 포함될 수 있다.
        - 예: "프로젝트" 섹션, "팀원 소개" 섹션 등
    - **`<article>`**:
        - **독립적인 콘텐츠 블록**
        - 블로그 포스트나 뉴스 기사처럼, 페이지 안에서 독립적으로 사용될 수 있는 콘텐츠에 적합
        - 예: 개별 블로그 포스트, 기사, 리뷰 등
    
    ### 예시로 비교:
    
    ```html
    <section>
      <h2>프로젝트</h2>
      <article>
        <h3>프로젝트 1</h3>
        <p>프로젝트 1의 설명...</p>
      </article>
      <article>
        <h3>프로젝트 2</h3>
        <p>프로젝트 2의 설명...</p>
      </article>
    </section>
    ```
    
    `<section>`이 "프로젝트"라는 큰 주제를 다루고 있고, 그 안에 `<article>`이 각각의 개별 프로젝트(독립적인 콘텐츠)를 나타냄
    
    - **`<section>`**: 주제나 카테고리 구분
    - **`<article>`**: 독립적으로도 의미 있는 콘텐츠

### 실습 🍠

- 그러면, **`inline-block`**은 어떠한 방식으로 동작할까요? 🍠
    
    **`inline-block`**은 **`inline`**과 **`block`** 요소의 장점을 결합한 방식
    
    1. **`inline`처럼 한 줄에 나란히** 배치된다. 즉, 여러 개의 **`inline-block`** 요소가 자동 줄바꿈이 되지 않는다.
    2.  **`block`처럼 크기를 지정**할 수 있다. 너비(**`width`**), 높이(**`height`**), 패딩(**`padding`**), 마진(**`margin`**) 등을 적용할 수 있다.
- **`block`**, **`inline`**, **`inline-block`** 직접 html과 css를 활용해서 무엇이 다른지, **`VS Code Live Server Extension을 활용`**하여, 실습 한 이미지를 첨부하여 설명해주세요. 🍠
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5189176c-4e70-4aa2-9846-54ab2f430d6d/04ff472d-5d6d-4530-b206-d99826421233.png)
    
    ### **css 코드**
    
    ```html
    <style>
    .box1{
      display: block;
      width: 100px;
      height: 100px;
      background-color: blue;
      margin-bottom: 10px;
    }
    
    .box2{
      display: inline;
      width: 100px;
      height: 100px;
      background-color: red;
      margin-bottom: 10px;
    }
    
    .box3{
      display: inline-block;
      width: 80px;
      height: 80px;
      background-color: green;
      margin-bottom: 10px;
    }
    </style>
    ```
    
    ### html 코드
    
    ```html
    <div class = "box1">block</div>
    <div class = "box1">block</div>
    
    <div class = "box2">inline</div>
    <div class = "box2">inline</div>
    
    <div class = "box3">inline-block</div>
    <div class = "box3">inline-block</div>
    ```
    
    block은 자동 줄바꿈이 되어 한 줄 한 줄 띄어진다.
    
    inline은 입력된 텍스트만큼 영역이 지정되고, 나란히 배치된다.
    
    즉, inline은 width와 height를 따로 지정해도 영향 받지 않는다.
    
    inline-block은 내가 지정해준 영역 크기만큼 차지하며 inline처럼 나란히 배치된다.
  