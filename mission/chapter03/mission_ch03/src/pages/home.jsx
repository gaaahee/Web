// 첫 화면
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => { // 컴포넌트가 처음 렌더링될 때 인기 영화 데이터 요청청
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: import.meta.env.REACT_APP_TMDB_API_KEY,
          language: "ko-KR",
          page: 1,
        },
      })
      .then((response) => setMovies(response.data.results));
      // 응답 결과를 movies 상태에 저장
  }, []);

  return (
    <div className="movie-grid">
      {movies.map((movie) => ( // 각 영화 컴포넌트
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;