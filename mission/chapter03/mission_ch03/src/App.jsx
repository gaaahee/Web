import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layout/root-layout";
import HomePage from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Search from './pages/search';
import Movies from "./pages/movie";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";

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
            path: 'search',
            element: <Search/>
          },
          {
            path: 'movies',
            element: <Movies/>
          },
          {
            path: 'movies/:movieId',
            element: <MovieDetail />
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