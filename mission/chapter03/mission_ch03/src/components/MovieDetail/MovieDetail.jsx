import React from "react";
import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import { MovieDetailContainer, MovieTitle, MovieOverview, MoviePoster } from "./MovieDetail";

const MovieDetail = () => {
  const { movieId } = useParams(); // URL에서 movieId를 가져옴
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const { data: movies, isLoading, isError } = useCustomFetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ko-KR`);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movie details.</div>;

  // movie가 undefined가 아닌 경우에만 렌더링
  return (
    <MovieDetailContainer>
      {movies.results?.map((movie) => (
        <div key={movie.id}>
          <MoviePoster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>{movie.overview}</MovieOverview>
        </div>
      ))}
    </MovieDetailContainer>

  );
};

export default MovieDetail;