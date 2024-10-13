//import React from 'react';
import MovieItem from './MovieItem';
import { MovieListContainer } from './MovieList.styled';

function MovieList({ movies }) {
  return (
    <MovieListContainer>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MovieListContainer>
  );
}

export default MovieList;