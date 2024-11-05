import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import HomePage from "./pages/Default/home";
import Login from "./pages/Default/login";
import Signup from "./pages/Default/signup";
import Search from './pages/Default/search';
import CategoryList from "./pages/CategoryList/CategoryList";
import MovieList from "./pages/MovieList/MovieList"; // 영화 목록 페이지

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { 
        index: true, 
        element: <HomePage /> 
      },
      { 
        path: 'login', 
        element: <Login /> 
      },
      { 
        path: 'signup', 
        element: <Signup /> 
      },
      { 
        path: 'search', 
        element: <Search /> 
      },
      { 
        path: 'movies', 
        element: <CategoryList />
      },
      { 
        path: 'movies/:movieId', 
        element: <MovieList /> 
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
