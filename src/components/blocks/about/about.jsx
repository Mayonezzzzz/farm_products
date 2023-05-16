import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { StyledSection, StyledDiv, StyledParagraph } from "./styles";

function About() {
  return (
    <StyledSection>
      <StyledDiv>
        <Title
          level={1}
          size={TitleSize.BIG}
          children={"Магазин фермерских продуктов с доставкой"}
        />
        <StyledParagraph>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </StyledParagraph>
      </StyledDiv>
    </StyledSection>
  );
}

export default About;
