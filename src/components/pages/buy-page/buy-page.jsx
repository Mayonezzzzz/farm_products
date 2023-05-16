import React from "react";
import { BuyBlock } from "../../ui/buy-block/buy-block";
import { TitleSize, TitleLevel } from "../../ui/title/title";
import {
  Wrapper,
  LeftColumn,
  StyledTitle,
  StyledSpan,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel
} from "./styled";
import { TextInput } from "../../ui/input/input";
import Button from "../../ui/button/button";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import ProductCard from "../../ui/product-card/product-card";
import { useState } from "react";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function BuyPage({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };
  return (
    <Wrapper as="form">
      <LeftColumn>
        <BuyBlock marginBottom={20}>
          <StyledTitle size={TitleSize.SMALL} level={TitleLevel.H2}>
            Выберите продукты
          </StyledTitle>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          />
        </BuyBlock>
        <BuyBlock>
          <StyledTitle size={TitleSize.SMALL} level={TitleLevel.H2}>
            Сделать заказ
          </StyledTitle>
          <TextInput
            marginTop={24}
            marginBottom={20}
            placeholder="Введите адрес доставки"
            onChange={(e) => setAddress(e.target.value)}
          />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button minWidth={314} children={"Купить"} onClick={handleBuyClick} />
        </BuyBlock>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        direction="vertical"
        spaceBetween={12}
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </Wrapper>
  );
}

export default BuyPage;
