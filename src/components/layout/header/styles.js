import styled from "styled-components";

export const StyledHeader = styled.header`
  width: ${(props) => props.theme.pageWidth};
  display: flex;
  margin: ${(props) => props.theme.marginWrapper};
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 2;
  position: relative;
`;

export const StyledDiv = styled.div`
  width: ${(props) => props.theme.wrapperWidth};
  margin: ${(props) => props.theme.marginWrapper};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
