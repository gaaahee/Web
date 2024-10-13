//import React from 'react';
import styled from 'styled-components';

const MovieItemContainer = styled.div`
  border-style: none;
  padding: 4px;
  margin: 4px;
  width: 8.5%;
  display: inline-block;
  vertical-align: top;
  text-align: center;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const MovieImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.15s ease;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  ${ImgContainer}:hover & { /* &는 현재 컴포넌트(Overlay) */
    opacity: 1;
  }
`;

function MovieItem({ movie }) {
  return (
    <MovieItemContainer>
      <ImgContainer>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} // 영화 포스터 경로로 이미지 출력
          alt={movie.title}
        />
        <Overlay />
      </ImgContainer>
    </MovieItemContainer>
  );
}

export default MovieItem;