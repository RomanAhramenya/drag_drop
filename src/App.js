import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./component/mainPage/MainPage";
import { useSelector } from "react-redux";
import Layout from "./component/Layout";
import CardsPage from "./component/cardsPage/CardsPage";

function App() {
  const mainPageData = useSelector((state) => state.mainPage.mainPage);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          {Object.keys(mainPageData).map((item, index) => {
            return (
              <Route key={index} path={`/${index}`} element={<CardsPage />} />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
