import React from "react";
import Styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return <nav className={Styles.navbar}>
    <Link to="/">
      <img src="src/assets//Image//Icon//macdonaldPNG.png" alt="logo"/>
    </Link>
    <NavLink to="/ourmenu"  className={({isActive, isPending})=>
      isPending ? Styles.pending : isActive ? Styles.active : ""
      }>
        Our Menu
    </NavLink>
    <NavLink to="/aboutourfood"  className={({isActive, isPending})=>
      isPending ? Styles.pending : isActive ? Styles.active : ""
    }>
      About Our Food
    </NavLink>
    <NavLink to="/ourapp" className={({isActive, isPending})=>
      isPending ? Styles.pending : isActive? Styles.active : ""
    }>
      Our App
    </NavLink>
    <NavLink to="/trendingnow" className={({isActive, isPending})=>
    isPending ? Styles.pending : isActive? Styles.active : ""
    }>
      Trending Now
    </NavLink>

  </nav>;
}

export default Navbar;
