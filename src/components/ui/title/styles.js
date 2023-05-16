import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  font-weight: 700;
  line-height: 51px;
  margin: 0;
  padding: 0;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "18px";
    }
    if (props.$size === TitleSize.MEDIUM) {
      fontSize = "24px";
    }
    return fontSize;
  }};
`;
