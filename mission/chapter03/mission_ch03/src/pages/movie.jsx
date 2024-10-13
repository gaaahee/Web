//import React from "react";
import {MoviesContainer, CategoryTitle, MoviesGrid, MovieCard, MovieImage, MovieLabel, MovieTitle, MovieCategory} from "../styled/movie.styled";

const Movies = () => {
  const movieList = [
    { id: 1, title: "현재 상영중인", imgSrc: "/path/to/image1.jpg" },
    { id: 2, title: "인기있는", imgSrc: "/path/to/image2.jpg" },
    { id: 3, title: "높은 평가를 받은", imgSrc: "/path/to/image3.jpg" },
    { id: 4, title: "개봉 예정중인", imgSrc: "/path/to/image4.jpg" },
  ];

  return (
    <MoviesContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <MoviesGrid>
        {movieList.map((movie) => (
          <MovieCard key={movie.id}>
            <MovieImage src={movie.imgSrc} alt={movie.title} />
            <MovieLabel>{movie.title}</MovieLabel>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieCategory>{movie.category}</MovieCategory>
          </MovieCard>
        ))}
      </MoviesGrid>
    </MoviesContainer>
  );
};

export default Movies;