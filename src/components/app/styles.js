import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 400;
  font-size: ${(props) => props.theme.defaultTextSize};
  line-height: ${(props) => props.theme.defaultLineHeight};
  color: ${(props) => props.theme.textColor};
}
`;
