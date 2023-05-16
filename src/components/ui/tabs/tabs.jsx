import React, { useState } from "react";
import { Header, TabListItem, TabButton, Content } from "./styles";

function Tabs({ tabList = [], maxContentHeiht }) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <div>
      <Header>
        {tabList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $isSelect={selectIndex === index}
              {...(selectIndex === index
                ? { as: "span" }
                : {
                    onClick: () => {
                      setSelectIndex(index);
                    }
                  })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeiht={maxContentHeiht}>
        {tabList[selectIndex].content}
      </Content>
    </div>
  );
}

export default Tabs;
