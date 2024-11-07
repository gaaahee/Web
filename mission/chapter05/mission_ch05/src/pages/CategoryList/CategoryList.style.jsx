import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 20px;
  background-color: #000;
  min-height: 100vh;
`;

export const CategoryHeaderName = styled.div`  
  color: #fff;
  margin: 5px 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  justifyContent: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CategoryCard = styled.div`
  background-color: #282828;
  border-radius: 10px;
  overflow: hidden;
  width: 260px;
  height: 180px;
  cursor: pointer;
  position: relative; /* 자식 요소 절대 위치 설정에 필요 */
  transition: transform 0.3s ease;
  margin: 0 10px;

  &:hover {
    transform: scale(1.05);
  }

  &:hover > div {
    display: block; /* 마우스가 올라가면 Label 표시 */
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  display: none; /* 초기 설정은 항상 화면에 안 보이게 함 */
`;