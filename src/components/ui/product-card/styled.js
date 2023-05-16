import styled from "styled-components";
import Title from "../title/title";
import { BuyBlock } from "../buy-block/buy-block";

export const Img = styled.img`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

export const ProductTitle = styled(Title)`
  margin: 0;
  margin-bottom: 15px;
  line-height: 31px;
`;

export const Price = styled.span`
  background-color: ${(props) => props.theme.priceColor};
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 29px;
`;

export const Block = styled(BuyBlock)`
  width: 720px;
  box-sizing: border-box;
  height: 288px;
  display: flex;
  padding: 20px;
`;
