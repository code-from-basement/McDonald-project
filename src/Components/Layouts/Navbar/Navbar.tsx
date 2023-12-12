import Styles from "./Navbar.module.css";
import React from "react";
import logo from "../../../assets/Image/Icon/macdonaldPNG.png";
import { AccountCircleIcon, LocalMallOutlinedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import MegaMenu from "../../UI/MegaMenu/MegaMenu";
import { NavLink, Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const activeClass = ({ isActive, isPending }: any) => {
    return isPending ? Styles.pending : isActive ? Styles.active : "";
  };
  const { eventToggles }: any = useGlobalContext();
  const { togglerFunc } = eventToggles;

  const onClickBasketToggler = () => {};

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.leftContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={Styles.pagesContainer}>
          <NavLink to="" className={activeClass} onClick={() => togglerFunc("megaMenuOpen", !eventToggles.megaMenuOpen)}>
            Our Menu
          </NavLink>
          <NavLink to="/aboutourfood" className={activeClass}>
            About Our Food
          </NavLink>
          <NavLink to="/ourapp" className={activeClass}>
            Our App
          </NavLink>
          <NavLink to="/trendingnow" className={activeClass}>
            Trending Now
          </NavLink>
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <Link to="/login" className={Styles.userContainer}>
          <AccountCircleIcon />
        </Link>
        <button onClick={() => {}} className={Styles.shoppingContainer}>
          <span className={Styles.basketNum}>0</span>
          <LocalMallOutlinedIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
