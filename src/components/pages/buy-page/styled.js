import styled, { css } from "styled-components";
import Title from "../../ui/title/title";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";
import Price from "/src/components/ui/price/price";
import { Label } from "/src/components/styled";

export const Wrapper = styled.div`
  width: ${(props) => props.theme.pageWidth};
  background-color: ${(props) => props.theme.buyPageBackground};
  padding: 40px 90px 0px 90px;
  display: flex;
  box-sizing: border-box;
  position: absolute;
  top: 80px;
  bottom: 80px;
  overflow-y: overlay;
`;

export const LeftColumn = styled.div`
  height: 100%;
  width: 353px;
  margin-right: 20px;
`;

export const StyledTitle = styled(Title)`
  line-height: 27px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 30px;
`;
