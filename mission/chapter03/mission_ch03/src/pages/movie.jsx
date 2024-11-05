// 카테고리 별로 영화 목록을 보여주는 페이지
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import CategoryList from "../components/CategoryList/CategoryList.jsx";
import MovieList from "../components/MovieList/MovieList.jsx";

import image1 from '../assets/sanrio1.png';
import image2 from '../assets/sanrio2.png';
import image3 from '../assets/sanrio3.png';
import image4 from '../assets/sanrio4.png';

const Movies = () => {
  const { category } = useParams(); // URL에서 category 파라미터를 가져옴
  const [movies, setMovies] = useState([]); // 영화 데이터 저장
  const apiKey = import.meta.env.VITE_TMDB_API_KEY; // API 키를 환경 변수에서 가져옴

  // 카테고리 목록
  const categories = [
    { id: 1, title: "현재 상영중인", imgSrc: image1, endpoint: "now_playing" },
    { id: 2, title: "인기있는", imgSrc: image2, endpoint: "popular" },
    { id: 3, title: "높은 평가를 받은", imgSrc: image3, endpoint: "top_rated" },
    { id: 4, title: "개봉 예정중인", imgSrc: image4, endpoint: "upcoming" },
  ]; // endpoint는 TMDB API에서 사용하는 카테고리 이름

  // 영화 데이터를 가져오는 함수
  const fetchMovies = (categoryEndpoint) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${categoryEndpoint}`, {
        params: {
          api_key: apiKey,
          language: "ko-KR",
          page: 1,
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("영화 데이터를 가져오는 중 오류 발생:", error));
  };

  // URL의 category가 변경될 때마다 영화 데이터 로드
  useEffect(() => {
    if (category) {
      fetchMovies(category);
    }
  }, [category]);

  return (
    <MoviesContainer>
      <CategoryTitle>카테고리</CategoryTitle>

      {/* 카테고리 목록 컴포넌트 */}
      <CategoryList categories={categories} />

      {/* 선택한 카테고리의 영화 목록 */}
      <MovieList movies={movies} />
    </MoviesContainer>
  );
};

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #181818;
  min-height: 100vh;
`;

const CategoryTitle = styled.h1`
  color: #fff;
  margin-bottom: 30px;
  font-size: 2rem;
`;

export default Movies;