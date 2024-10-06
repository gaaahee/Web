import React from 'react';
import './MovieItem.css';

function MovieItem({ movie }) {
  /* movie : MovieList 컴포넌트로부터 전달 받은 영화 1개의 정보를 담고 있는 객체 */
  /* const movie = props.movie; 대신 구조 분해 할당을 사용
      -> props 객체 안에 movie 데이터를 꺼내 사용하겠다! */
  return (
    <div className="movie-item">
      <div className="img-container">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // 영화 포스터 경로로 이미지 출력
          alt={movie.title}
        />
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default MovieItem;