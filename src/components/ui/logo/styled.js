import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 395px;
  text-decoration: none;
`;

export const StyledParagraph = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
