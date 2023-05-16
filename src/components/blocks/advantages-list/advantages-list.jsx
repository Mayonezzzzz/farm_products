import React from "react";
import AdvantagesItem from "../../ui/advantages-item/advantages-item";
import Button from "../../ui/button/button";
import Title from "../../ui/title/title";
import { StyledSection, StyledDiv, StyledList, StyledItem } from "./styles";

function Advantages({ data }) {
  return (
    <StyledSection>
      {data?.length ? (
        <StyledDiv>
          <Title children={"Почему фермерские продукты лучше?"} level={2} />
          <StyledList>
            {data.map((item) => (
              <StyledItem place={item.place} key={item.id}>
                <AdvantagesItem {...item} />
              </StyledItem>
            ))}
          </StyledList>
          <Button children={"Купить"} minWidth={260} link="/buy" />
        </StyledDiv>
      ) : null}
    </StyledSection>
  );
}

export default Advantages;
