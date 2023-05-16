import React from "react";
import { TitleSize } from "/src/components//ui/title/title";
import { Img, ContentWrapper, ProductTitle, Price, Block } from "./styled";
import Tabs from "../tabs/tabs";
import OptionsList from "../options-list/options-list";

function ProductCard({ product }) {
  const tabList = [
    {
      title: "Описание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];

  return (
    <Block>
      <Img src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" children={product.name} size={TitleSize.MEDIUM} />
        <Tabs tabList={tabList} maxContentHeiht="105px" />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Block>
  );
}

export default ProductCard;
