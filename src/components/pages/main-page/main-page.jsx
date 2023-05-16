import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages-list/advantages-list";

function MainPage({ data }) {
  return (
    <>
      <About />
      <Advantages data={data} />
    </>
  );
}

export default MainPage;
