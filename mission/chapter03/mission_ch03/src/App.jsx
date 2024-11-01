import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Movies from "./pages/movie";
import MovieDetail from "./components/MovieDetail";
import Search from './pages/search';

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
              element: <Login/>
          },
          {
            path: 'signup',
            element: <Signup/>
          },
          {
              path: 'movies',
              element: <Movies/>
          },
          {
            path: 'movies/:movieId',
            element: <MovieDetail />
          },
          {
            path: 'search',
            element: <Search/>
          }
      ]
  },

])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;