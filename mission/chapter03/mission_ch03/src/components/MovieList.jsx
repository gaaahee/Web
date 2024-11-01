import React from "react";
import { Link } from "react-router-dom";
import { MoviesGrid, MovieCard, MovieImage, MovieTitle } from "../styled/Movie.styled";

const MovieList = ({ movies }) => {
  return (
    <MoviesGrid>
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`} // 각 영화의 ID를 포함한 경로로 링크 설정
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <MovieCard>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieCard>
        </Link>
      ))}
    </MoviesGrid>
  );
};

export default MovieList;