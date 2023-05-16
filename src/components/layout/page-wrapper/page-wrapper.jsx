import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { StyledMain } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
