import data from "/src/mock/data";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./styles";
import products from "/src/mock/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollToTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage data={data} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage products={products} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
