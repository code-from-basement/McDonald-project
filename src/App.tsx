import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import MenuContainer from "./Components/Pages/Home/MenuContainer/MenuContainer";
import AllMenu from "./Components/Pages/Home/MenuContainer/AllMenu/AllMenu";
import HamburgerMenu from "./Components/Pages/Home/MenuContainer/HamburgerMenu/HamburgerMenu";
import ChickenBurgerMenu from "./Components/Pages/Home/MenuContainer/ChikenBurgerMenu/ChickenBurgerMenu";
import BreakfastMenu from "./Components/Pages/Home/MenuContainer/BreakfastMenu/BreakfastMenu";
import VegetarianMenu from "./Components/Pages/Home/MenuContainer/VegetarianMenu/VegetarianMenu";
import SnacksMenu from "./Components/Pages/Home/MenuContainer/SnacksMenu/SnacksMenu";
import DrinksMenu from "./Components/Pages/Home/MenuContainer/DrinksMenu/DrinksMenu";
import SaladMenu from "./Components/Pages/Home/MenuContainer/SaladMenu/SaladMenu";

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
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route path="all-menu" element={<AllMenu />} />
            <Route path="hamburger-menu" element={<HamburgerMenu />} />
            <Route path="chicken&fish-menu" element={<ChickenBurgerMenu />} />
            <Route path="breakfast-menu" element={<BreakfastMenu />} />
            <Route path="vegetarian-menu" element={<VegetarianMenu />} />
            <Route path="snacks-menu" element={<SnacksMenu />} />
            <Route path="drink-menu" element={<DrinksMenu />} />
            <Route path="salad-menu" element={<SaladMenu />} />
          </Route>

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
