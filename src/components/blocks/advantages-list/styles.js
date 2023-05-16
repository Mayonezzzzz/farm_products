import styled from "styled-components";
import { Ul } from "/src/components/styled/ul/ul";
import { Li } from "/src/components/styled/li/li";

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.advantagesBackground};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const StyledDiv = styled.div`
  width: ${(props) => props.theme.wrapperWidth};
  margin: ${(props) => props.theme.marginWrapper};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  grid-auto-flow: row dense;
  margin-top: 64px;
  margin-bottom: 64px;
`;

export const StyledItem = styled(Li)`
  grid-column-start: ${(props) => {
    let column = null;
    if (props.place === "ferm") {
      column = 1;
    }
    if (props.place === "store") {
      column = 2;
    }
    return column;
  }};
`;
