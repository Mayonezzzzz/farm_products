import styled from "styled-components";
import Title from "../title/title";

export const StyledCardDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 157px;
  background-color: ${(props) => {
    let bgColor = "";

    if (props.place === "ferm") {
      bgColor = `${props.theme.cardBgFermColor}`;
    }
    if (props.place === "store") {
      bgColor = `${props.theme.cardBgStoreColor}`;
    }
    return bgColor;
  }};
`;

export const StyledHeadDiv = styled.div`
  display: grid;
  grid-template-rows: 26px 26px;
  grid-template-columns: 52px 1fr;
  grid-column-gap: 20px;
`;

export const StyledTitle = styled(Title)`
  grid-row: 2/3;
  grid-column: 2/3;
  line-height: ${(props) => props.theme.defaultLineHeight};
`;

export const StyledSpan = styled.span`
  font-size: 14px;
  width: 180px;
  text-align: center;
  color: ${(props) => props.theme.whiteTextColor};
  background-color: ${(props) => {
    let bgColor = "";

    if (props.place === "ferm") {
      bgColor = `${props.theme.cardLabelFermColor}`;
    }
    if (props.place === "store") {
      bgColor = `${props.theme.cardLabelStoreColor}`;
    }
    return bgColor;
  }};
`;

export const StyledParagraph = styled.p`
  margin: 0;
`;
