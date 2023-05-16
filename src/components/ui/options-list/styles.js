import styled from "styled-components";
import { Li } from "/src/components/styled/li/li";

export const Option = styled(Li)`
  margin-bottom: 8px;
  font-size: 14px;
  display: flex;

  :last-child {
    margin-bottom: 0;
  }
`;

export const Property = styled.span`
  font-weight: 700;
  margin-right: 5px;
`;

export const Value = styled.p`
  margin: 0;
`;
