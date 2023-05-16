import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { StyledHeader, StyledDiv } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <StyledDiv>
        <Logo />
        <Nav />
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header;
