import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useGlobalContext } from "./Components/Context/GlobalContext";
import Footer from "./Components/Layouts/Footer/Footer";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import AboutOurFood from "./Components/Pages/AboutOurFood/AboutOurFood";
import Home from "./Components/Pages/Home/Home";
import AllMenu from "./Components/Pages/Home/MenuContainer/AllMenu/AllMenu";
import BreakfastMenu from "./Components/Pages/Home/MenuContainer/BreakfastMenu/BreakfastMenu";
import ChickenBurgerMenu from "./Components/Pages/Home/MenuContainer/ChikenBurgerMenu/ChickenBurgerMenu";
import DipsMenu from "./Components/Pages/Home/MenuContainer/DipsMenu/DipsMenu";
import DrinksMenu from "./Components/Pages/Home/MenuContainer/DrinksMenu/DrinksMenu";
import HamburgerMenu from "./Components/Pages/Home/MenuContainer/HamburgerMenu/HamburgerMenu";
import SaladMenu from "./Components/Pages/Home/MenuContainer/SaladMenu/SaladMenu";
import SnacksMenu from "./Components/Pages/Home/MenuContainer/SnacksMenu/SnacksMenu";
import OurApp from "./Components/Pages/OurApp/OurApp";
import OurMenu from "./Components/Pages/OurMenu/OurMenu";
import ShoppingCartPage from "./Components/Pages/ShoppingCartPage/ShoppingCartPage";
import TrendingNow from "./Components/Pages/TrenedingNow/TrendingNow";
import BasketMenu from "./Components/UI/BasketMenu/BasketMenu";
import MegaMenu from "./Components/UI/MegaMenu/MegaMenu";
import ItemPage from "./Components/UI/ItemPage/ItemPage";

function App() {
  const { eventToggles, fetchAllMenuData }: any = useGlobalContext();
  const { megaMenuOpen, isBasketShow } = eventToggles;

  useEffect(() => {
    fetchAllMenuData("menu");
  }, []);

  useEffect(() => {
    fetchAllMenuData("megaMenuItem");
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <AnimatePresence>{megaMenuOpen && <MegaMenu />}</AnimatePresence>
        <AnimatePresence>{isBasketShow && <BasketMenu />}</AnimatePresence>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="all-menu" />} />
            <Route path="all-menu" element={<AllMenu />} />
            <Route path="hamburger-menu" element={<HamburgerMenu />} />
            <Route path="chicken&fish-menu" element={<ChickenBurgerMenu />} />
            <Route path="breakfast-menu" element={<BreakfastMenu />} />
            <Route path="snacks-menu" element={<SnacksMenu />} />
            <Route path="drink-menu" element={<DrinksMenu />} />
            <Route path="salad-menu" element={<SaladMenu />} />
            <Route path="dips-menu" element={<DipsMenu />} />
          </Route>
          <Route path="/:title" element={<ItemPage />} />
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
