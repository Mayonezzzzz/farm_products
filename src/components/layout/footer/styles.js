import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: ${(props) => props.theme.pageWidth};
  display: flex;
  margin: ${(props) => props.theme.marginWrapper};
  justify-content: space-between;
  height: 80px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledDiv = styled.div`
  width: ${(props) => props.theme.wrapperWidth};
  margin: ${(props) => props.theme.marginWrapper};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
