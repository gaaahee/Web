import React from 'react';
import { MOVIES } from './mocks/movies'; // API
import MovieList from './components/MovieList';

function App() {
  /* MOVIES : 전체 영화 데이터를 가지는 객체
  MOVIES.results : 영화 목록을 가지는 배열 */
  return (
    <div className = "App">
      <MovieList movies={MOVIES.results} /> {/* MovieList 컴포넌트에 movies라는 이름의 props로 영화 목록 전달 */}
    </div>
  );
}

export default App;