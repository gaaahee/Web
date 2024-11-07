import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import HomePage from "./pages/Default/home";
import LoginPage from "./pages/Default/login";
import SignupPage from "./pages/Default/signup";
import SearchPage from './pages/Default/search';
import CategoryListPage from "./pages/CategoryList/CategoryList";
import MovieRoute from "./pages/MoviePages/MovieRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { 
        index: true, 
        element: <HomePage/> 
      },
      { 
        path: 'login', 
        element: <LoginPage/> 
      },
      { 
        path: 'signup', 
        element: <SignupPage/> 
      },
      { 
        path: 'search', 
        element: <SearchPage/> 
      },
      { 
        path: 'movies', 
        element: <CategoryListPage/>
      },
      { 
        path: 'movies/:id', 
        element: <MovieRoute/> 
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;