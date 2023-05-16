import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter, StyledDiv } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <StyledDiv>
        <Logo />
        <p>Создано 2021</p>
      </StyledDiv>
    </StyledFooter>
  );
}

export default Footer;
