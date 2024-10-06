// 영화 목록을 보여주는 컴포넌트
import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies }) {
  /* 부모 컴포넌트인 App.jsx 로부터 movies라는 props를 받음 */
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} /> // 각 영화를 MovieItem으로 전달
      ))}
    </div>
    /* 여기서 movies : 영화 목록을 가진 배열(results 배열)
              movie : 1개의 영화 객체(results 배열의 각 항목) */
  );
}

export default MovieList;