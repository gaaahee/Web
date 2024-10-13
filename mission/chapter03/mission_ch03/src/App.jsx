//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from "./layout/root-layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import HomePage from "./pages/home";
import Movies from "./pages/movies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;