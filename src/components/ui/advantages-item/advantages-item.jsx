import React from "react";
import { TitleSize, TitleLevel } from "../title/title";
import {
  StyledCardDiv,
  StyledHeadDiv,
  StyledTitle,
  StyledSpan,
  StyledParagraph
} from "./styles";

function AdvantagesItem({ title, label, about, place, img }) {
  return (
    <StyledCardDiv place={place}>
      <StyledHeadDiv>
        <img width="52" height="52" src={img} alt="" />
        <StyledSpan place={place}>{label}</StyledSpan>
        <StyledTitle
          children={title}
          level={TitleLevel.H3}
          size={TitleSize.SMALL}
        />
      </StyledHeadDiv>
      <StyledParagraph>{about}</StyledParagraph>
    </StyledCardDiv>
  );
}

export default AdvantagesItem;
