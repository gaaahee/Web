import React from "react";
import { SidebarContainer, SidebarLink } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/search">찾기</SidebarLink>
      <SidebarLink to="/movies">영화</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;