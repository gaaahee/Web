import React from "react";
import { SidebarContainer, SidebarLink } from "./sidebar.style";
import { IoSearch } from "react-icons/io5";
import { PiFilmSlateFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/search">
      <IoSearch size={18} /> {/* 찾기 아이콘 */}
      찾기
      </SidebarLink>
      <SidebarLink to="/movies">
      <PiFilmSlateFill size={18} /> {/* 영화 아이콘 */}
      영화
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;