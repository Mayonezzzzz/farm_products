import React from "react";
import { Ul } from "/src/components/styled/ul/ul";
import { Option, Property, Value } from "./styles";

function OptionsList({ list = [] }) {
  return (
    <Ul>
      {list.map((option, index) => (
        <Option key={index}>
          <Property>{option.property}:</Property>
          <Value>{option.value}</Value>
        </Option>
      ))}
    </Ul>
  );
}

export default OptionsList;
