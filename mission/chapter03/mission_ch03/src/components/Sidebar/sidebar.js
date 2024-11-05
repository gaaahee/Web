import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 60px;
  width: 15%;
  height: calc(100% - 60px); /* Navbar 높이를 제외한 남은 공간 */
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
  text-align: left;
  text-indent: 15px;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
`;