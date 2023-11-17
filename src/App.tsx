import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import ShoppingCartPage from "./Components/Pages/ShoppingCartPage/ShoppingCartPage";
import Navbar from "./Components/Layouts/Navbar/Navbar";
import Footer from "./Components/Layouts/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shoppingcartpage" element={<ShoppingCartPage />} />
          {/* <Route path="ourmenu" element={<OurMenu />} /> */}
          {/* <Route path="aboutourfood" element={<AboutOurFood />} /> */}
          {/* <Route path="ourapp" element={<OurApp />} /> */}
          {/* <Route path="trendingnow" element={<TrendingNow />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
