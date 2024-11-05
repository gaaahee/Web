// 카테고리 목록을 출력하는 페이지
import React from "react";
import { Link } from "react-router-dom";
import { CategoryContainer, CategoryTitle, CategoryCard, CategoryImage } from "./CategoryList.styled";

import image1 from '../../assets/sanrio1.png';
import image2 from '../../assets/sanrio2.png';
import image3 from '../../assets/sanrio3.png';
import image4 from '../../assets/sanrio4.png';

// 카테고리 목록
const categories = [
  { 
    id: 1, 
    title: "현재 상영중인", 
    imgSrc: image1, 
    endpoint: "now_playing" 
  },
  { 
    id: 2, 
    title: "인기있는", 
    imgSrc: image2, 
    endpoint: "popular" 
  },
  { 
    id: 3, 
    title: "높은 평가를 받은", 
    imgSrc: image3, 
    endpoint: "top_rated" 
  },
  { 
    id: 4, 
    title: "개봉 예정중인", 
    imgSrc: image4, 
    endpoint: "upcoming" 
  }
]; // endpoint는 TMDB API에서 사용하는 카테고리 이름

const CategoryList = () => {
  return (
    <>
      <CategoryContainer>
        {categories.map((category) => ( // 카테고리 목록 순회
          <Link
            key={category.id}
            to={`/movies/${category.endpoint}`}> {/*클릭 시 movies/:category 경로로 이동*/}
            <CategoryCard>
              <CategoryImage src={category.imgSrc} alt={category.title} />
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryCard>
          </Link>
        ))}
      </CategoryContainer>
    </>
  );
};

export default CategoryList;