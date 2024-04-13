import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useGlobalContext } from "./Components/Context/GlobalContext";
import Footer from "./Components/Layouts/Footer/Footer";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import AboutOurFood from "./Components/Pages/AboutOurFood/AboutOurFood";
import FavoritePage from "./Components/Pages/FavoritePage/FavoritePage";
import Home from "./Components/Pages/Home/Home";
import AllMenu from "./Components/Pages/Home/MenuContainer/AllMenu/AllMenu";
import BreakfastMenu from "./Components/Pages/Home/MenuContainer/BreakfastMenu/BreakfastMenu";
import ChickenBurgerMenu from "./Components/Pages/Home/MenuContainer/ChikenBurgerMenu/ChickenBurgerMenu";
import DipsMenu from "./Components/Pages/Home/MenuContainer/DipsMenu/DipsMenu";
import DrinksMenu from "./Components/Pages/Home/MenuContainer/DrinksMenu/DrinksMenu";
import HamburgerMenu from "./Components/Pages/Home/MenuContainer/HamburgerMenu/HamburgerMenu";
import SaladMenu from "./Components/Pages/Home/MenuContainer/SaladMenu/SaladMenu";
import SnacksMenu from "./Components/Pages/Home/MenuContainer/SnacksMenu/SnacksMenu";
import Login from "./Components/Pages/Login/Login";
import OurApp from "./Components/Pages/OurApp/OurApp";
import OurMenu from "./Components/Pages/OurMenu/OurMenu";
import ShoppingCartPage from "./Components/Pages/ShoppingCartPage/ShoppingCartPage";
import TrendingNow from "./Components/Pages/TrenedingNow/TrendingNow";
import IntroPage from "./Components/Pages/introPage/IntroPage";
import BasketMenu from "./Components/UI/BasketMenu/BasketMenu";
import BasketSticky from "./Components/UI/BasketSticky/BasketSticky";
import MegaMenu from "./Components/UI/MegaMenu/MegaMenu";
import ModalRedirection from "./Components/UI/ModalRedirection/ModalRedirection";
const LazyItemPage = lazy(() => import("./Components/UI/ItemPage/ItemPage"));

function App() {
  const { eventToggles, setEventToggles, fetchAllMenuData, loggedInUserFavoriteList, basketMenuRef, megaMenuRef }: any = useGlobalContext();
  const { megaMenuOpen, isBasketShow, stickyBasket, isModalRedirectionShow, isIntroPageShow } = eventToggles;

  useEffect(() => {
    const reloadPage = () => {
      // window.location.href = originUrl;
      setEventToggles(() => {
        return { ...eventToggles, isIntroPageShow: true };
      });
    };

    window.addEventListener("beforeunload", reloadPage);
    return () => {
      window.removeEventListener("beforeunload", reloadPage);
    };
  }, []);

  // Intersection observer API for sticky basket
  useEffect(() => {
    const navbarTarget = document.querySelector("#navbar");
    if (navbarTarget) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !isBasketShow) {
            setEventToggles((prevData: any) => {
              return { ...prevData, stickyBasket: true };
            });
          } else {
            setEventToggles((prevData: any) => {
              return { ...prevData, stickyBasket: false };
            });
          }
        });
      });
      observer.observe(navbarTarget!);
    }
  }, [isIntroPageShow]);

  // Fetching data from Firebase Realtime Database

  useEffect(() => {
    fetchAllMenuData("menus");
  }, [loggedInUserFavoriteList]);

  // Fetching data from Firebase Realtime Database
  useEffect(() => {
    fetchAllMenuData("megaMenuItem");
  }, []);

  // Mega Menu and Basket menu close
  const onPanelCloser = (e: any) => {
    if (eventToggles.isBasketShow && basketMenuRef.current && !basketMenuRef.current.contains(e.target)) {
      return setEventToggles((prevData: any) => {
        return { ...prevData, isBasketShow: false };
      });
    }
    if (eventToggles.megaMenuOpen && megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
      return setEventToggles((prevData: any) => {
        return { ...prevData, megaMenuOpen: false };
      });
    }
  };

  return isIntroPageShow ? (
    <AnimatePresence>{<IntroPage />}</AnimatePresence>
  ) : (
    <div className="app" onClick={onPanelCloser}>
      <BrowserRouter>
        <AnimatePresence>{megaMenuOpen && <MegaMenu />}</AnimatePresence>
        <AnimatePresence>{isBasketShow && <BasketMenu />}</AnimatePresence>
        <AnimatePresence>{stickyBasket && !isBasketShow && <BasketSticky />}</AnimatePresence>
        <AnimatePresence>{isModalRedirectionShow && <ModalRedirection />}</AnimatePresence>
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
          <Route
            path="/:title"
            element={
              <Suspense fallback="loading...">
                <LazyItemPage />
              </Suspense>
            }
          />
          <Route path="shoppingcartpage" element={<ShoppingCartPage />} />
          <Route path="ourmenu" element={<OurMenu />} />
          <Route path="aboutourfood" element={<AboutOurFood />} />
          <Route path="ourapp" element={<OurApp />} />
          <Route path="trendingnow" element={<TrendingNow />} />
          <Route path="login" element={<Login />} />
          <Route path="favorite" element={<FavoritePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
