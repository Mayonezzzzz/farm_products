import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  height: 60px;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  border: none;
  background-color: ${(props) => props.theme.buttonColor};
  font-weight: 700;
  font-size: ${(props) => props.theme.defaultTextSize};
  line-height: ${(props) => props.theme.defaultLineHeight};
  color: ${(props) => props.theme.whiteTextColor};
  cursor: pointer;
  transition: 0.4s ease-in-out;
  text-decoration: none;
  background-image: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    transition: 0.4s ease-in-out;
  }

  &:active {
    background: ${(props) => props.theme.buttonHoverColor};
    box-shadow: none;
  }
`;
