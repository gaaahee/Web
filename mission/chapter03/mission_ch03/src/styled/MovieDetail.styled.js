import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #fff;
`;

export const MoviePoster = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 2rem;
  margin: 10px 0;
`;

export const MovieOverview = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
`;