import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  min-width: 0;
  display: flex;
  background-color: ${(props) => props.theme.buyBackground};
  color: ${(props) => props.theme.textColor};
  font-size: 18px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buyBackground};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
