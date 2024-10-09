// react-router 실습
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// createBrowserRouter 함수를 사용하여 라우터 생성
// path: '/' => localhost:5173(홈 페이지)
// path: '/movies' => localhost:5173/movies(영화 페이지)

// path를 통해 접근하면 element에 있는 내용이 보이게 됨

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>홈 페이지입니다.</h1>,
        // 없는 경로에 들어온 처리
        errorElement: <h1>너는 없는 경로에 들어왔다 ^ㅁ^ 야호~!</h1>
    },
    {
        path: '/movies',
        element: <h1>영화 페이지 입니다.</h1>
    }
])

// createBrowserRouter를 통해 만든 라우터를
// RouterProvider의 router에 전달
function App() {
    return <RouterProvider router={router}/>
}

export default App