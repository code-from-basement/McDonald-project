import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import ShoppingCartPage from "./Components/Pages/ShoppingCartPage/ShoppingCartPage";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";
import OurMenu from "./Components/Pages/OurMenu/OurMenu";
import AboutOurFood from "./Components/Pages/AboutOurFood/AboutOurFood";
import OurApp from "./Components/Pages/OurApp/OurApp";
import TrendingNow from "./Components/Pages/TrenedingNow/TrendingNow";
import MegaMenu from "./Components/UI/MegaMenu/MegaMenu";
import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "./Components/Context/GlobalContext";
import BasketMenu from "./Components/UI/BasketMenu/BasketMenu";

function App() {
  const { eventToggles, fetchAllMenuData }: any = useGlobalContext();
  const { megaMenuOpen, isBasketShow } = eventToggles;
  useEffect(() => {
    fetchAllMenuData("menu");
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <AnimatePresence>{megaMenuOpen && <MegaMenu />}</AnimatePresence>
        <AnimatePresence>{isBasketShow && <BasketMenu />}</AnimatePresence>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shoppingcartpage" element={<ShoppingCartPage />} />
          <Route path="ourmenu" element={<OurMenu />} />
          <Route path="aboutourfood" element={<AboutOurFood />} />
          <Route path="ourapp" element={<OurApp />} />
          <Route path="trendingnow" element={<TrendingNow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
