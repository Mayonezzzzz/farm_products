import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLink, StyledParagraph } from "./styled";
import { AppRoute } from "../../../const";

function Logo() {
  return (
    <StyledLink to={AppRoute.MAIN}>
      <LogoImage />
      <StyledParagraph>Фермерские продукты</StyledParagraph>
    </StyledLink>
  );
}

export default Logo;
