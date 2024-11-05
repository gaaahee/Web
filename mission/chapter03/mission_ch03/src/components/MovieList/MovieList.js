import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #181818;
  min-height: 100vh;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr); // 9개의 열로 나누기
  gap: 20px;
  width: 100%;
  padding: 0 20px; // 좌우 여백 추가
  box-sizing: border-box;
`;

export const MovieCard = styled.div`
  background-color: #282828;
  border-radius: 10px;
  overflow: hidden;
  width: 100%; // grid-column의 너비에 맞추기 위해 100%로 설정
  height: 200px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:hover > div {
    display: block; /* MovieCard에 커서가 올라가면 자식 div (MovieLabel) 화면에 표시 */
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover; // 이미지가 지정된 영역을 꽉 채우도록 설정
`;

export const MovieLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: none; /* 초기 설정은 항상 화면에 안 보이게 함 */
`;

export const MovieTitle = styled.h3`
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;