import React from "react";
import Styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/Image/Icon/macdonaldPNG.png";
import { AccountCircleIcon, LocalMallOutlinedIcon} from "../../UI/IconsLibrary/IconsLibrary";

function Navbar() {
  const activeClass = ({ isActive, isPending }: any) => {
    return isPending ? Styles.pending : isActive ? Styles.active : "";
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.leftContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={Styles.pagesContainer}>
          <NavLink to="/ourmenu" className={activeClass}>
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
        <Link to="/shoppingcartpage" className={Styles.shoppingContainer}>
          <LocalMallOutlinedIcon />
          Shopping bag
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
