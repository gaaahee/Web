import React from "react";
import { NavbarContainer, Logo, NavLinks, NavButton } from "./Navbar.styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">YONGCHA</Logo>
      <NavLinks>
        <NavButton to="/login">로그인</NavButton>
        <NavButton to="/signup">회원가입</NavButton>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;