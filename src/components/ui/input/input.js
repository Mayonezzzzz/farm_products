import styled from "styled-components";

export const TextInput = styled.input`
  width: 300px;
  height: 48px;
  padding: 0;
  padding-left: 12px;
  margin: 0;
  background: ${(props) => props.theme.inputBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: ${(props) => props.theme.textColor};
    opacity: 1;
  }
`;
