import styled from "styled-components";

export const StyledMain = styled.main`
  width: ${(props) => props.theme.pageWidth};
  margin: ${(props) => props.theme.marginWrapper};
  padding-bottom: 80px;
}
`;
