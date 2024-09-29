- border / outline 🍠
    
    ### border vs outline
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: purple;
          margin-bottom: 40px;
          box-sizing: border-box;
        }
    
        .box1 {
          border: 10px solid black;
        }
    
        .box2 {
          outline: 10px solid red;
        }
      </style>
    </head>
    
    <body>
      <div class="box box1">border-box</div>
      <div class="box box2">content-box</div>
    </body>
    
    </html>
    ```
    
    위의 코드를 실행시키면, 아래의 이미지와 같은 결과물이 나오게 됩니다.
    
    ![스크린샷 2024-07-18 오후 6.39.15.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8ab8a9b0-0b42-464b-b18b-54e50914ef1c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.39.15.png)
    
    위의 **`box-sizing`** 설명 부분에서 제가 여러분들에게 워크북으로 설명 드린 것 처럼, 아래의 토글에 본인이 **`VSCode를 통해 여러번 실행시켜보며 개발자 도구와, 캡처한 이미지를 활용하여 어떠한 차이점을 갖고 있는지 상세하게 정리`**해주세요!
    
    - border vs outline의 차이점 🍠
        
        **`border`**와 **`outline`**은 둘 다 박스의 외곽선을 그린다.
        
        1. **`border`**:
            - 요소의 **박스 모델 안쪽**에 위치
            - **요소의 크기에 영향을 준다**. 즉, **`border`** 두께만큼 요소의 크기가 커짐
            - 사방에 서로 다른 색상, 스타일을 적용할 수 있음
        2. **`outline`**:
            - 요소의 **바깥쪽에 그려진다** (박스 모델 밖)
            - **요소 크기에 영향 X**
            - 사방에 같은 스타일만 적용할 수 있으며, **`border`**보다 독립적으로 움직인다
            - 요소 크기와는 별개로, outline의 두께가 커져도 요소의 크기와는 관계가 없음
    
- relative / absolute 🍠
    
    ### relative / absolute
    
    ### - relative 설명
    
    <aside>
    💡 **`relative` : Document Flow에 따라, 원래 본인이 있어야 할 곳을 기준으로, 좌표 프로퍼티(top / bottom / left / right) css style을 통해 위치를 이동시키는 속성.**
    
    </aside>
    
    ### 1. relative 실습
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: purple;
          color: white;
          box-sizing: border-box;
          position: relative;
        }
      </style>
    </head>
    
    <body>
      <div class="box">BOX</div>
      <h1>고구마 상자</h1>
    </body>
    
    </html>
    ```
    
    위의 코드를 실행하면 아래와 같은 화면이 출력됩니다.
    
    ![스크린샷 2024-07-18 오후 6.54.25.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/9afde3c4-1322-40ff-b7d6-6c7ca24dbde4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.54.25.png)
    
    보라색 박스를 위에서 50px 만큼 아래로 내리고 싶고, 왼쪽에서 50px만큼 오른쪽으로 밀고 싶다면 아래와 같은 속성을 적용하면 됩니다. (relative를 설정해주어야합니다.)
    
    <aside>
    💡 위 → 아래 (top css 적용)
    왼쪽 → 오른쪽 (left css 적용)
    
    </aside>
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: purple;
          color: white;
          box-sizing: border-box;
          position: relative;
          top: 50px;
          left: 50px;
        }
      </style>
    </head>
    
    <body>
      <div class="box">BOX</div>
      <h1>고구마 상자</h1>
    </body>
    
    </html>
    ```
    
    ![스크린샷 2024-07-18 오후 6.56.12.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/b4018543-15bf-451e-921c-e4530f3645de/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.56.12.png)
    
    <aside>
    💡 Q: 그럼, 한번 여러분들이 이번에는 위의 이미지 상태에서 고구마 상자를 아래와 같은 이미지 처럼 이동시켜 주세요. 
    
    Hint: `bottom`과 `right` 속성을 활용해서 진행해주세요. 필요시 고구마 상자 글씨 태그에 class 명을 부여해도 좋습니다.
    
    ⭐️ 꼭 양수만 사용할 수 있는 것은 아닙니다! ⭐️
    
    </aside>
    
    ![스크린샷 2024-07-18 오후 6.57.43.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/fd7e2bc8-0597-4eff-a26b-0ffbffe17e43/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.57.43.png)
    
    - 코드를 첨부해주세요 🍠
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
            .box {
              width: 100px;
              height: 100px;
              background-color: purple;
              color: white;
              box-sizing: border-box;
              position: relative;
              bottom: -160px;
              right: -2px;
            }
            h1{
              font-weight: 700 !important;
            }
          </style>
        </head>
        
        <body>
          <div class="box">BOX</div>
          <h1>고구마 상자</h1>
        </body>
        
        </html>
        ```
        
    
    ### - absolute 설명
    
    <aside>
    💡 **`absolute` : Document Flow에 제외 되며, `position: static`이 아닌, 즉 position이 `relative`, `absolute`, `fixed`인 부모 요소 또는 조상 요소중 선택하여 해당 요소를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용해 위치를 이동한다. 따라서 부모 요소를 기준으로 위치를 이동할 경우, 해당 부모 요소에 `position: relative`를 선언해야 한다.**
    
    </aside>
    
    ### 2. absolute 실습
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        /** 전체 선택자 기본적으로 설정된 마진을 없앰. */
        * {
          margin: 0;
          box-sizing: border-box;
        }
    
        .box1 {
          width: 500px;
          height: 500px;
          background-color: purple;
          color: white;
          position: relative;
        }
    
        .box2 {
          width: 200px;
          height: 200px;
          background-color: yellow;
        }
      </style>
    </head>
    
    <body>
      <div class="box1">BOX1</div>
      <h1 class="box2">BOX2</h1>
    </body>
    
    </html>
    ```
    
    위의 코드를 실행하면 아래와 같은 화면이 보입니다.
    
    ![스크린샷 2024-07-18 오후 7.12.14.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/8af63428-2ea1-455d-94e5-52da156d58f6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.12.14.png)
    
    - **`position: absolute`**를 활용하여 본인의 힘으로, 아래와 같은 이미지로 BOX2를 이동시켜보세요! 🍠
        
        ![스크린샷 2024-07-18 오후 7.13.52.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/5a810066-8c42-4e8a-a2ac-fe8757085432/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.13.52.png)
        
        ### 코드는 아래에 첨부해주세요!
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
            /** 전체 선택자 기본적으로 설정된 마진을 없앰. */
            * {
              margin: 0;
              box-sizing: border-box;
            }
        
            .box1 {
              width: 500px;
              height: 500px;
              background-color: purple;
              color: white;
              position: relative;
            }
        
            .box2 {
              position: absolute; /* 자식 요소의 위치는 부모 요소의 위치를 기준으로 결정 */
              width: 200px;
              height: 200px;
              background-color: yellow;
              top: 0px; /* .box1을 기준으로 top이 0px */
            }
          </style>
        </head>
        
        <body>
          <div class="box1">BOX1</div>
          <h1 class="box2">BOX2</h1>
        </body>
        
        </html>
        ```
        
    
- fixed / sticky
    
    ### fixed
    
    **`fixed`**: 부모 요소와 관계없이 viewport를 기준으로, 화면상의 특정한 위치에 위치가 고정됩니다. 
    
    <aside>
    💡 fixed는 Document Flow에서의 Postion의 위치를 빠져나옵니다.
    
    </aside>
    
    ### fixed 실습
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Position: Sticky</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }
    
        .container {
          width: 100%;
          height: 100%;
          padding: 10px;
          background-color: greenyellow;
        }
    
        .box {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
          background-color: lightgoldenrodyellow;
        }
    
        .box2 {
          background-color: purple;
          position: fixed;
          top: 40px;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
        <div class="box box4"></div>
        <div class="box box5"></div>
        <div class="box box6"></div>
        <div class="box box7"></div>
        <div class="box box8"></div>
        <div class="box box9"></div>
        <div class="box box10"></div>
        <div class="box box11"></div>
        <div class="box box12"></div>
        <div class="box box13"></div>
        <div class="box box14"></div>
        <div class="box box15"></div>
        <div class="box box16"></div>
      </div>
    </body>
    
    </html>
    ```
    
    아래 영상 처럼, 기존 문서대열에서 벗어난 것을 확인할 수 있습니다.
    
    [화면 기록 2024-07-18 오후 7.33.31.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/85c5de66-126d-432f-98aa-8662c1ccb283/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.33.31.mov)
    
    ### sticky
    
    **`sticky`**: relative와 fixed 속성이 혼합된 속성이라고 생각하면 이해가 쉽습니다. 일반적인 상황에서는 relative 처럼 동작하여, 요소가 원래 위치에서 움직이지만, 특정 스크롤 위치에 도달하면 fixed 처럼 화면에 고정되어 움직이지 않습니다.
    
    <aside>
    💡 sticky는 기존 Document Flow에서의 Position을 유지합니다.
    즉 아래 코드를 실행 시키면, 브라우저 밖으로 빠져나가기 top: 40px 전에 sticky 하게 고정시킵니다.
    
    </aside>
    
    ### sticky 실습
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Position: Sticky</title>
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
        }
    
        .container {
          width: 100%;
          height: 100%;
          padding: 10px;
          background-color: greenyellow;
        }
    
        .box {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
          background-color: lightgoldenrodyellow;
        }
    
        .box2 {
          background-color: purple;
          position: sticky;
          top: 40px;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
        <div class="box box4"></div>
        <div class="box box5"></div>
        <div class="box box6"></div>
        <div class="box box7"></div>
        <div class="box box8"></div>
        <div class="box box9"></div>
        <div class="box box10"></div>
        <div class="box box11"></div>
        <div class="box box12"></div>
        <div class="box box13"></div>
        <div class="box box14"></div>
        <div class="box box15"></div>
        <div class="box box16"></div>
      </div>
    </body>
    
    </html>
    ```
    
    [화면 기록 2024-07-18 오후 7.26.06.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/39321339-f7fb-43f2-a3e4-dffbd28a8f68/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.26.06.mov)
    
- 정렬의 진수 🍠
    
    ### 다양한 정렬 방법
    
    해당 키워드는 앞으로, 프론트엔드 개발에 있어 매우 중요한 부분입니다. 다양한 정렬 테크닉들을 활용해서, 앞으로 여러분들은, 개발을 진행하시게 될 것 입니다.
    
    이번 부분은, 설명보다, 직접 여러분들이 다양한 자료들을 보시며, 실습해보며 개인적으로 꺠닫는 것이 중요한 챕터라고 생각하여, 키워드를 정리해주시면서, 가운데 정렬을 도전해본 영상들을 남겨주시면 됩니다.
    
    ### 키워드 정리 🍠
    
    - text-align
        
        텍스트 수평 정렬
        
    - margin
        
        요소의 외부 여백 조정, 마진 자동 설정으로 중앙 정렬 가능
        
    - flex
        
        플렉스 박스를 사용한 수평/수직 정렬
        Flexbox는 요소들을 유연하게 배치하고, 공간을 자동으로 나누어 채우는 데 유용하다.
        
        ### 주요 속성:
        
        - **`display: flex;`**: 부모 요소에 적용하여 Flexbox 컨테이너로 만드는 속성, 내부의 자식 요소들을 유연하게 배치할 수 있게 함
        - **`justify-content`**: **가로** 방향으로 자식 요소들 정렬 (start, center, space-between 등)
        - **`align-items`**: **세로** 방향으로 자식 요소들 정렬 (flex-start, center, stretch 등)
        - **`flex-direction`**: 아이템이 **가로(row)** 또는 **세로(column)** 방향으로 배치될지 결정
    - translate
        - 요소를 2D 또는 3D 공간에서 이동시키는 변환 속성
        - **`translate(x, y)`**는 요소를 **x축**과 **y축** 방향으로 이동시킨다.
        - **`translate`** 속성은 요소의 **실제 위치**를 변경하는 것이 아니라, **시각적으로 이동**시키는 속성이다.
    - grid
        - 2차원(행과 열) 레이아웃을 쉽게 구성할 수 있도록 도와주는 레이아웃 시스템
        - **`grid`**를 사용하면 복잡한 레이아웃도 간단하게 만들 수 있음
        
        ### 주요 속성:
        
        - **`display: grid;`**: 요소를 그리드 컨테이너로 설정
        - **`grid-template-columns` / `grid-template-rows`**: 그리드의 열과 행을 설정
        - **`grid-gap`**: 그리드 셀 사이의 간격을 설정
    
    ### 위의 키워드를 각각 활용해서 가운데 정렬을 해주세요! 🍠
    
    <aside>
    💡 html 요소는 여러분들이 직접 만드셔서, 가운데 정렬을 한 영상과 코드만 남겨주시면 됩니다.
    향후 학습에 있어서, 매우 중요한 부분이니, 많은 실습 부탁드립니다!
    
    </aside>
    
    - text-align
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
            * {
              margin: 0;
              box-sizing: border-box;
            }
        
            .box1 {
              width: 500px;
              height: 500px;
              background-color: purple;
              color: white;
              text-align: center;
            }
        
            .box2 {
              width: 200px;
              height: 200px;
              background-color: yellow;
            }
          </style>
        </head>
        
        <body>
          <div class="box1">BOX1</div>
          <h1 class="box2">BOX2</h1>
        </body>
        
        </html>
        ```
        
    - margin
        
        ```html
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <style>
            * {
              margin: 0;
              box-sizing: border-box;
            }
        
            .box1 {
              width: 500px;
              height: 500px;
              background-color: purple;
              color: white;
              margin : auto;
            }
        
            .box2 {
              width: 200px;
              height: 200px;
              background-color: yellow;
            }
          </style>
        </head>
        
        <body>
          <div class="box1">BOX1</div>
          <h1 class="box2">BOX2</h1>
        </body>
        
        </html>
        ```
        
    - flex
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Flexbox 예제</title>
          <style>
            .container {
              display: flex; /* Flexbox로 설정 */
              justify-content: center; /* 가로 방향 중앙 정렬 */
              align-items: center;     /* 세로 방향 중앙 정렬 */
              height: 100vh;
            }
        
            .box {
              width: 100px;
              height: 100px;
              background-color: lightblue;
              margin: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
          </div>
        </body>
        </html>
        
        ```
        
    - translate
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <title>Translate 예제</title>
          <style>
            .box {
              width: 100px;
              height: 100px;
              background-color: lightblue;
              transition: transform 0.5s;
            }
        
            .box:hover { /* 마우스 올릴 때 동작 */
              transform: translate(50px, 100px); /* X축으로 50px, Y축으로 100px 이동 */
            }
          </style>
        </head>
        <body>
        
          <div class="box">BOX</div>
        
        </body>
        </html>
        
        ```
        
    - grid
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Grid 예제</title>
          <style>
            .container {
              display: grid;
              grid-template-columns: 1fr 2fr 1fr; /* 3개의 열을 설정 */
              grid-gap: 10px; /* 그리드 셀 간의 간격 설정 */
            }
        
            .box {
              background-color: lightblue;
              padding: 20px;
              text-align: center;
            }
          </style>
        </head>
        <body>
        
          <div class="container">
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">3</div>
          </div>
        
        </body>
        </html>
        ```
        
- 반응형 background 🍠
    - background-image
        
        ```html
        /* 요소에 배경 이미지 설정 */
        background-image: url('image.jpg');
        ```
        
    - background-repeat
        
        ```html
        /* 이미지 반복 여부 설정 (repeat, no-repeat 등) */
        background-repeat: no-repeat;
        ```
        
    - background-position
        
        ```html
        /* 배경 이미지의 위치 설정 (top, center, left 등) */
        background-position: center center;
        ```
        
    - background-size
        
        ```html
        /* background-size: 이미지 크기 설정 */
        background-size: cover;
        ```
        
    - 축약형
        
        `url`, `repeat`, `position`, `size` 순서로 설정 가능
        
        ```html
        background: url('image.jpg') no-repeat center center / cover;
        ```
        
- transform 🍠
    
    ### transform 🍠
    
    CSS transform 속성으로, 요소에 회전 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다. `transform`은 CSS [시각적 서식 모델](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)의 좌표 공간을 변경합니다.
    
    <aside>
    💡  아래 키워드를 실습한 사진과 코드를 남겨주세요!
    
    </aside>
    
    - translate
        
        ### **`translate`** (이동):
        
        ```css
        .box {
          transform: translate(50px, 100px);
          /* x축으로 50px, y축으로 100px 이동 */
        }
        ```
        
    - scale
        
        ### **`scale`** (크기 조정):
        
        요소의 크기를 **수평(X)** 및 **수직(Y)** 축 방향으로 확대 또는 축소
        
        ```css
        .box {
          transform: scale(1.5, 0.5);
          /* X축으로 1.5배, Y축으로 0.5배 확대/축소 */
        }
        ```
        
    - rotate
        
        ### **`rotate`** (회전):
        
        요소를 **2D** 평면에서 시계 방향으로 **회전**
        
        ```css
        .box {
          transform: rotate(45deg); /* 45도 회전 */
        }
        ```
        
    - skew
        
        ### **`skew`** (왜곡):
        
        요소를 **기울이는 효과**를 주며, **x**축과 **y**축을 기준으로 왜곡시킴
        
        ```css
        .box {
          transform: skew(30deg, 20deg);
          /* X축으로 30도, Y축으로 20도 왜곡 */
        }
        ```
        
    - matrix
        - **이동**, **회전**, **스케일**을 **복합적으로** 적용
        - 각 숫자는 **2D 변환 행렬**을 나타냄
        - `matrix(a, b, c, d, e, f)`에서 `e`, `f`는 이동, 나머지 값은 회전과 스케일링을 정의.
        
        ### **`matrix`** (복합 변환):
        
        ```css
        .box {
          transform: matrix(1, 0, 0, 1, 50, 100);
          /* 이동, 회전, 스케일을 한 번에 */
        }
        ```
        
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/739ad0f2-d50c-4c96-bfbf-c60c2347f535/88ca587f-0137-467f-8a1d-4fcbb889ee6a.png)
    
    ### 실습 코드:
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <title>Transform 예제</title>
      <style>
        .box1 {
          width: 100px;
          height: 100px;
          background-color: lightblue;
          transition: transform 0.5s;
        }
    
        .box1:hover {
          transform: translate(50px, 100px);
        }
    
        .box2{
          width: 100px;
          height: 100px;
          background-color: lightpink;
          transform: scale(1.5, 0.5);
        }
    
        .box3{
          width: 100px;
          height: 100px;
          background-color: lightgreen;
          transform: rotate(80deg);
        }
    
        .box4:hover{
          width: 100px;
          height: 100px;
          background-color: orange;
          transform: skew(45deg, 20deg);
        }
    
        .box5{
          width: 100px;
          height: 100px;
          background-color: lightgrey;
          transform: matrix(1, 0, 0, 1, 50, 50);
        }
      </style>
    </head>
    <body>
    
      <div class="box1">BOX</div>
      <div class="box2">BOX</div>
      <div class="box3">BOX</div>
      <div class="box4">BOX</div>
      <div class="box5">BOX</div>
    
    </body>
    </html>
    ```
    
    [transform - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
    
- transition 🍠
    
    ### transition  🍠
    
    <aside>
    💡 아래 키워드에 대해 학습한 후, 실습을 진행해주시고, 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - transition-property
        
        애니메이션을 적용할 CSS 속성을 지정 (예: `background-color`, `transform` 등)
        
    - transition-duration
        
        애니메이션의 지속 시간을 설정 (예: `0.5s`, `2s`)
        
    - transition-timing-function
        
        애니메이션의 속도 곡선을 정의 (예: ease, linear, ease-in-out 등)
        
    - transition-delay
        
        애니메이션 시작 전에 대기할 시간을 설정 (예: `0.5s`)
        
    - transition-behavior
        
        애니메이션의 동작을 설정하며, 대부분의 브라우저에서 기본적으로 `auto`로 설정됨
        
    
    ### 실습  🍠
    
    **`transition`** 키워드를 학습한 후, 해당 키워드와, **`transform에서 배운 특정 키워드를 활용`**하여, 아래와 같은 영상과 비슷하게 만들어주세요! (똑같을 필요는 없고, 기능만 같으면 됩니다.)
    
    단, **`transition 축약형`**을 사용해주세요!
    
    [화면 기록 2024-07-18 오후 7.51.38.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/e6dc806f-17a6-483d-b55e-e3ae81b0d27c/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.51.38.mov)
    
    - 코드 첨부 🍠
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <title>Transition 예제</title>
          <style>
            .box {
              width: 150px;
              height: 150px;
              margin: 70px auto;
              background-color: lightpink;
              transform: rotate(45deg);
              transition: background-color 0.5s;
            }
        
            .box:hover {
              background-color: purple;
            }
          </style>
        </head>
        <body>
        
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        
        </body>
        </html>
        
        ```
        
    - 실행 영상 첨부 🍠
        
        [화면 녹화 중 2024-09-29 053541.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/3e74d802-be80-4cb8-b733-f2704a5f016d/%ED%99%94%EB%A9%B4_%EB%85%B9%ED%99%94_%EC%A4%91_2024-09-29_053541.mp4)
        
- animation 🍠
    
    ### animation 🍠
    
    <aside>
    💡 아래 키워드에 대해 학습한 후, 실습을 진행하시고 코드와 실행 영상을 남겨주세요!
    
    </aside>
    
    - animation-name
        
        ```css
        /* 적용할 애니메이션의 이름을 지정 */
        animation-name: slide;
        ```
        
    - animation-duration
        
        ```css
        /* 애니메이션의 지속 시간 */
        animation-duration: 2s;
        ```
        
    - animation-delay
        
        ```css
        /* 애니메이션 시작 전에 대기할 시간 */
        animation-delay: 0.5s;
        ```
        
    - animation-direction
        
        ```css
        /* 애니메이션 방향 설정 (normal, reverse 등) */
        animation-direction: alternate;
        ```
        
    - animation-iteration-count
        
        ```css
        /* 애니메이션 반복 횟수 설정 (infinite, 3 등) */
        animation-iteration-count: infinite;
        ```
        
    - animation-play-state
        
        ```css
        /* 애니메이션 일시 정지 또는 실행 상태 설정 */
        animation-play-state: paused;
        ```
        
    - animation-timing-function
        
        ```css
        /* 애니메이션의 속도 곡선 정의 (ease, linear 등) */
        animation-timing-function: ease-in-out;
        ```
        
    - animation-fill-mode
        
        ```css
        /* 애니메이션이 끝난 후 상태 설정 (forwards, backwards 등) */
        animation-fill-mode: forwards;
        ```
        
    - @keyframes
        
        ```css
        /* 애니메이션의 단계 및 속성을 정의하는 css 규칙 */
        
        /* from : 애니메이션의 시작 상태(요소의 원래 위치) */
        /* to : 애니메이션의 끝 상태 */
        
        @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(100px); }
        }
        ```
        
    - 축약형
        
        ```css
        animation: slide 2s ease-in-out 0.5s infinite alternate forwards;
        ```
        
    
    ### 실습  🍠
    
     **`animation 키워드`**를 학습한 후, 아래와 비슷한 영상을 만들어주세요!
    
    단, **`animation 축약형`**을 사용해주세요!
    
    - [x]  원은 어떻게 만들까요?
    - Hint
        
        **`border-radius` 를 활용해봅시다~!**
        
    - [x]  계속 튀기는 애니메이션은 어떻게 하면 쉽게 만들까요?
    - Hint
        
        `infinte`, `alternate` 속성을 활용해봅시다!
        
    
    [화면 기록 2024-07-18 오후 8.01.20.mov](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/6c0aa987-9afa-4c7b-8096-51940175eeb4/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.01.20.mov)
    
    - 코드 첨부 🍠
        
        ```html
        <!DOCTYPE html>
        <html lang="ko">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Animation 예제</title>
          <style>
            .box {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              background-color: purple;
              margin : auto;
              animation-name: slide;
              animation-duration: 0.8s;
              animation-delay: 0s;
              animation-direction: alternate;
              animation-iteration-count: infinite;
              animation-play-state: running;
              animation-timing-function: ease-in-out;
              animation-fill-mode: forwards;
            }
        
            @keyframes slide {
              from {
                transform: translateY(0);
              }
              to {
                transform: translateY(200px);
                width: 120px;
              }
            }
          </style>
        </head>
        <body>
        
          <div class="box"></div>
        
        </body>
        </html>
        ```
        
    - 실행 영상 첨부 🍠
        
        [화면 녹화 중 2024-09-29 061011.mp4](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/43c495c9-2aae-4690-b579-2b704df0e1ff/%ED%99%94%EB%A9%B4_%EB%85%B9%ED%99%94_%EC%A4%91_2024-09-29_061011.mp4)