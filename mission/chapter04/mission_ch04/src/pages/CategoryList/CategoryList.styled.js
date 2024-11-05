import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #181818;
  min-height: 100vh;
`;

export const CategoryTitle = styled.h1`
  color: #fff;
  margin-bottom: 30px;
  font-size: 2rem;
`;

export const CategoryCard = styled.div`
  background-color: #282828;
  border-radius: 10px;
  overflow: hidden;
  width: 280px;
  height: 180px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:hover > div {
    display: block; /* MovieCard에 커서가 올라가면 자식 div (MovieLabel) 화면에 표시 */
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 이미지가 지정된 영역을 꽉 채우도록 설정
`;

export const CategoryLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: none; /* 초기 설정은 항상 화면에 안 보이게 함 */
`;