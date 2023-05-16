import styled from "styled-components";

export const BuyBlock = styled.div`
  background-color: ${(props) => props.theme.buyBackground};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 25px 20px;
  width: 313px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;
