import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import Movies from "./pages/movies.jsx";
import RootLayout from './layout/root-layout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        // Navbar 밑에 path에 해당하는 element를 보여주기 위한 children
        children: [
          {
              // index: true => 위의 path: '/' 즉, 홈 경로를 의미
              index: true,
              element: <HomePage/>
          },
          {
              // 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작
              // /:을 활용해서, 동적으로 바뀌는 부분의 이름을 정의
              path: 'movies/:movieId',
              element: <Movies/>
          }
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App