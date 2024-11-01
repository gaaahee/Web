import React from "react";
import { Link } from "react-router-dom";
import { MoviesGrid, MovieCard, MovieImage, MovieLabel } from "../styled/Movie.styled";

const CategoryList = ({ categories }) => {
  return (
    <MoviesGrid>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={category.endpoint} // Link의 to 속성에 엔드포인트 전달
          style={{ textDecoration: 'none', color: 'inherit' }} // 기본 스타일 제거
        >
          <MovieCard>
            <MovieImage src={category.imgSrc} alt={category.title} />
            <MovieLabel>{category.title}</MovieLabel>
          </MovieCard>
        </Link>
      ))}
    </MoviesGrid>
  );
};

export default CategoryList;