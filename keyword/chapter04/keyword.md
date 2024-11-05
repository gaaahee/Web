### 키워드 정리 🍠

- `useEffect`  🍠
    
    React에서 컴포넌트가 렌더링된 이후에 특정 작업을 실행하기 위해 사용하는 Hook
    
    ```jsx
    import { useEffect } from 'react';
    
    function MyComponent() {
      useEffect(() => {
        console.log('컴포넌트가 처음 렌더링되었습니다!');
    
        return () => {
          console.log('컴포넌트가 언마운트되었습니다.');
        };
      }, []); // 빈 배열이므로 처음에만 실행됨
    
      return <div>My Component</div>;
    }
    ```
    
- `try, catch, finally` 구문  🍠
    
    **오류가 발생할 가능성이 있는 코드**를 안전하게 실행하기 위해 사용하는 구문으로 react에서도 네트워크 요청이나 데이터 처리 중 오류가 발생할 수 있기 때문에 `try...catch` 구문을 쓴다.
    
    ```jsx
    try {
      // 오류가 발생할 수 있는 코드
    } catch (error) {
      // 오류가 발생했을 때 실행할 코드
    } finally {
      // 오류 발생 여부와 상관없이 항상 실행할 코드
    }
    ```
    
- `axios`  🍠
    
    **외부 라이브러리**로, 보다 편리하게 API 요청을 보내도록 만들어짐
    
    ```jsx
    import axios from 'axios';
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => console.log(response.data)) // 요청 성공 시, 서버에서 받은 데이터 출력
      .catch(error => console.error('Axios error:', error)); // 에러 발생 시, 에러 메세지 출력
    ```
    
- `fetch`  🍠
    
    JavaScript의 내장 함수로서, 기본 제공됨
    
    ```jsx
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer YOUR_TOKEN',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()) // 응답을 JSON 형식으로 변환
      .then(data => console.log(data))
      .catch(error => console.error('Fetch error:', error)); // 오류 메세지 출
    ```
    
- `axios` vs `fetch` (차이점)  🍠
    - **기능**:
        - **fetch**는 브라우저 내장 함수로, JavaScript에서 기본 제공함
        - **axios**는 외부 라이브러리로, 설치가 필요하지만 더 다양한 기능을 제공
    - **응답 처리**:
        - **fetch**는 응답을 자동으로 JSON으로 변환하지 않기 때문에, `response.json()`을 호출해야 함
        - **axios**는 기본적으로 응답을 JSON으로 자동 변환하여 반환
    - **오류 처리**:
        - **fetch**는 네트워크 오류가 발생할 때만 `catch` 블록이 실행되며, HTTP 오류는 `response.ok`를 사용하여 직접 확인해야 함
        - **axios**는 HTTP 오류와 네트워크 오류 모두 `catch` 블록으로 처리됨
    - **요청 취소**:
        - **fetch**는 요청 취소 기능이 기본적으로 없지만, `AbortController` API를 사용해 구현 가능함
        - **axios**는 `CancelToken`을 통해 요청 취소 기능을 제공함
    - **요청 설정**:
        - **fetch**는 헤더 설정이나 요청 본문 변환 등을 수동으로 처리해야 함
        - **axios**는 자동으로 JSON 변환과 헤더 설정을 처리함
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    
    프로젝트의 **환경 변수**를 관리하는 파일로, 주로 **민감한 정보나 설정값**을 저장하는 데 사용한다.
    
    여기서 환경 변수란 프로그램이 실행되는 환경에 따라 달라질 수 있는 설정 값을 말한다.
    
    예를 들어, 
    
    - **API 키**나 **비밀 토큰**:
        - 예: `API_KEY=abcdef123456`
    - **서버 URL**:
        - 개발 서버와 배포 서버의 URL을 각각 `http://localhost:3000`과 `https://myapp.com`처럼 설정할 수 있다.
    - **데이터베이스 접속 정보**:
        - 예: `DB_HOST`, `DB_USER`, `DB_PASSWORD` 등
    
    리액트에서도 환경 변수를 사용해 API URL이나 키 값을 관리하고, 배포 시 보안과 설정 관리가 더 쉽고 안전해지도록 한다.
    
- **`custom hook ?`**
    - **Custom Hook**(커스텀 훅)은 **React의 재사용 가능한 함수**
    - 여러 컴포넌트에서 **반복적으로 사용되는 로직을 추출하여 쉽게 재사용**할 수 있도록 만들어진 것
    - `use`로 시작하는 함수 형태
    - Custom Hook을 사용함으로써 복잡한 로직을 훅으로 분리하여 **코드를 재사용**하고 **컴포넌트가 더 간결해진다**

### useNavigate, useLocation

- useNavigate, useLocation
    
    ### useNavigate
    
    `useNavigate`은, 페이지를 이동할 때 사용합니다.
    
     `react-router`에서 제공해주는 `Link` 태그로도, 이동할 수 있는 것 아니냐는 의문이 있을 것 입니다. 어떠한 이벤트(클릭, 더블클릭, 키보드 입력 etc..)가 일어난 이후 페이지를 이동시키고 싶거나, 페이지 이동 후 추가적인 로직이 필요한 경우 **`useNavigate`**을 활용하면 됩니다.
    
    **`navigate`**은 2개의 인자를 받습니다.
    
    ```jsx
    <button onClick={() => navigate('/profile', {
      replace: false,
      state: { userId: 123, userName: 'JohnDoe' }
    })}>
      View Profile
    </button>
    ```
    
    ### replace
    
    - **`replace: true`**
        
        `replace` 속성을 `true`로 설정하면 현재의 히스토리 항목을 새로운 URL로 대체합니다. 즉, 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지가 아니라 이동 전의 페이지가 아닌 경우에는 메인 페이지("/")로 돌아가게 됩니다. 이렇게 하면 브라우저의 히스토리에 새로운 항목이 추가되지 않으므로 사용자가 이전 페이지로 돌아가지 못하게 됩니다.
        
    - **`replace: false`**
        
        `replace` 속성을 false로 설정하거나 생략하면 기본값이 적용됩니다. 이 경우, 이동한 페이지가 브라우저의 히스토리에 새로운 항목으로 추가됩니다. 사용자가 뒤로 가기 버튼을 눌렀을 때, 방금 이동한 페이지로 돌아갈 수 있습니다. 이는 브라우저의 히스토리 스택에 새로운 항목을 추가하는 방식입니다.
        
    
    ### state
    
    - 위 예시에서 버튼을 클릭하면 사용자는 `/profile` 페이지로 이동합니다. 이때 `state` 객체를 통해 `userId`와 `userName` 정보를 전달하게 됩니다. 이 정보는 `/profile` 페이지에서 `useLocation` 훅을 사용해 접근할 수 있습니다.
    
    ```jsx
    import { useLocation } from 'react-router-dom';
    
    const ProfilePage = () => {
      const location = useLocation();
      const { userId, userName } = location.state || {}; // state를 안전하게 접근
    
      return (
        <div>
          <h1>Profile Page</h1>
          <p>User ID: {userId}</p>
          <p>User Name: {userName}</p>
        </div>
      );
    };
    
    ```
    
    위의 `ProfilePage` 컴포넌트에서는 `useLocation` 훅을 통해 `state`에 접근하여 `userId`와 `userName`을 출력합니다. 이 정보를 이용해 페이지에서 사용자 관련 데이터를 동적으로 표시할 수 있습니다.
    

### useParams

- useParams
    
    ### useParams
    
    우리가, 만약에 **`Dynamic Routing`**을 설정했다고 가정해보겠습니다.
    
    ```jsx
    {
        path: '/movie/:movieId',
        element: <MovieDetailPage/>
    }
    ```
    
    이전에, 제가 설명드린 내용에서, **`Dynamic Routing`**은 **`:`**을 앞에 붙인 형태로, 작성된다고 말씀드렸고, **`뒤의 이름을 기억`**해야 한다고 전달해드렸습니다.
    
    ```jsx
    import { useParams } from 'react-router-dom';
    
    const MovieDetailPage = () => {
      const params = useParams();
      console.log(params)
    
      return (
        <div className="test">
          <p>현재 페이지의 파라미터는 { params.movieId } 입니다.</p>
        </div>
      )
    }
    
    export default MovieDetailPage;
    ```
    
    ![스크린샷 2024-09-14 오전 1.37.32.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f1912130-0409-4e90-a90f-6091ae253e73/7ae8b375-053b-43b4-8507-8c05feaecd82/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-09-14_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.37.32.png)
    
    이런식으로, **`params`**의 값이 입력됨을 알 수 있다. 우리가 실제로 위에서 설정한 `movieId` 라는 이름으로, 파라미터의 값이 전달됨을 확인할 수 있습니다.
    
    조금 더 깔끔하게 적기 위해서, **`구조분해 할당`**을 활용할 수 있습니다.
    
    ```jsx
    import { useParams } from 'react-router-dom';
    
    const MovieDetailPage = () => {
      const {movieId} = useParams();
    
      return (
        <div className="test">
          <p>현재 페이지의 파라미터는 { movieId } 입니다.</p>
        </div>
      )
    }
    
    export default MovieDetailPage;
    ```
    
    보통, **`데이터 개별 조회`**를 하는 경우에, 이 **`해당하는 ID를 활용`**해서, 데이터 조회 요청을 하므로, 매우 유용한 패턴이니 꼭 익히시길 바랍니다!