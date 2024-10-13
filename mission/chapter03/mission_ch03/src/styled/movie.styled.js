import styled from "styled-components";

export const MoviesContainer = styled.div`
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

export const MoviesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

export const MovieCard = styled.div`
  background-color: #282828;
  border-radius: 10px;
  overflow: hidden;
  width: 23%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

export const MovieLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const MovieTitle = styled.h3`
  padding: 10px;
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;

export const MovieCategory = styled.p`
  color: #ddd;
  font-size: 0.9rem;
  padding: 0 10px 20px;
  text-align: center;
`;