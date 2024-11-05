// 카테고리에 해당되는 영화 목록을 보여주는 컴포넌트
import React from "react";
import { Link } from "react-router-dom";
import { MoviesGrid, MovieCard, MovieImage, MovieLabel } from "./CategoryList";

const CategoryList = ({ categories }) => {
  return (
    <MoviesGrid>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/movies/${category.endpoint}`} // 엔드포인트 전달
          style={{ textDecoration: 'none', color: 'inherit' }} // 기본 스타일 제거
        > {/* link가 endpoint를 전달하여 해당 카테고리의 영화 목록을 보여주도록 함 */}
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