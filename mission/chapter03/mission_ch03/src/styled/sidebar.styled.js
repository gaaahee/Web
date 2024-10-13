import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const SidebarLink = styled(Link)`
  width: 100%;
  padding: 15px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f04a7e;
  }
`;