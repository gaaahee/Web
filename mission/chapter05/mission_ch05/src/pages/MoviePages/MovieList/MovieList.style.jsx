import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
  margin-left: 15px;
  margin-top: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;