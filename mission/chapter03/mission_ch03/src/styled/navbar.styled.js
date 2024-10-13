import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #f04a7e;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e63c6d;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavButton = styled(Link)`
  padding: 10px 15px;
  background-color: #f04a7e;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63c6d;
  }
`;